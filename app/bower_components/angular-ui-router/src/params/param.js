"use strict";
/** @module params */ /** for typedoc */
var common_1 = require("../common/common");
var hof_1 = require("../common/hof");
var predicates_1 = require("../common/predicates");
var coreservices_1 = require("../common/coreservices");
var urlMatcherConfig_1 = require("../url/urlMatcherConfig");
var type_1 = require("./type");
var hasOwn = Object.prototype.hasOwnProperty;
var isShorthand = function (cfg) {
    return ["value", "type", "squash", "array", "dynamic"].filter(hasOwn.bind(cfg || {})).length === 0;
};
(function (DefType) {
    DefType[DefType["PATH"] = 0] = "PATH";
    DefType[DefType["SEARCH"] = 1] = "SEARCH";
    DefType[DefType["CONFIG"] = 2] = "CONFIG";
})(exports.DefType || (exports.DefType = {}));
var DefType = exports.DefType;
function unwrapShorthand(cfg) {
    cfg = isShorthand(cfg) && { value: cfg } || cfg;
    return common_1.extend(cfg, {
        $$fn: predicates_1.isInjectable(cfg.value) ? cfg.value : function () { return cfg.value; }
    });
}
function getType(cfg, urlType, location, id, paramTypes) {
    if (cfg.type && urlType && urlType.name !== 'string')
        throw new Error("Param '" + id + "' has two type configurations.");
    if (cfg.type && urlType && urlType.name === 'string' && paramTypes.type(cfg.type))
        return paramTypes.type(cfg.type);
    if (urlType)
        return urlType;
    if (!cfg.type)
        return (location === DefType.CONFIG ? paramTypes.type("any") : paramTypes.type("string"));
    return cfg.type instanceof type_1.ParamType ? cfg.type : paramTypes.type(cfg.type);
}
/**
 * returns false, true, or the squash value to indicate the "default parameter url squash policy".
 */
function getSquashPolicy(config, isOptional) {
    var squash = config.squash;
    if (!isOptional || squash === false)
        return false;
    if (!predicates_1.isDefined(squash) || squash == null)
        return urlMatcherConfig_1.matcherConfig.defaultSquashPolicy();
    if (squash === true || predicates_1.isString(squash))
        return squash;
    throw new Error("Invalid squash policy: '" + squash + "'. Valid policies: false, true, or arbitrary string");
}
function getReplace(config, arrayMode, isOptional, squash) {
    var replace, configuredKeys, defaultPolicy = [
        { from: "", to: (isOptional || arrayMode ? undefined : "") },
        { from: null, to: (isOptional || arrayMode ? undefined : "") }
    ];
    replace = predicates_1.isArray(config.replace) ? config.replace : [];
    if (predicates_1.isString(squash))
        replace.push({ from: squash, to: undefined });
    configuredKeys = common_1.map(replace, hof_1.prop("from"));
    return common_1.filter(defaultPolicy, function (item) { return configuredKeys.indexOf(item.from) === -1; }).concat(replace);
}
var Param = (function () {
    function Param(id, type, config, location, paramTypes) {
        config = unwrapShorthand(config);
        type = getType(config, type, location, id, paramTypes);
        var arrayMode = getArrayMode();
        type = arrayMode ? type.$asArray(arrayMode, location === DefType.SEARCH) : type;
        var isOptional = config.value !== undefined;
        var dynamic = predicates_1.isDefined(config.dynamic) ? !!config.dynamic : !!type.dynamic;
        var squash = getSquashPolicy(config, isOptional);
        var replace = getReplace(config, arrayMode, isOptional, squash);
        // array config: param name (param[]) overrides default settings.  explicit config overrides param name.
        function getArrayMode() {
            var arrayDefaults = { array: (location === DefType.SEARCH ? "auto" : false) };
            var arrayParamNomenclature = id.match(/\[\]$/) ? { array: true } : {};
            return common_1.extend(arrayDefaults, arrayParamNomenclature, config).array;
        }
        common_1.extend(this, { id: id, type: type, location: location, squash: squash, replace: replace, isOptional: isOptional, dynamic: dynamic, config: config, array: arrayMode });
    }
    Param.prototype.isDefaultValue = function (value) {
        return this.isOptional && this.type.equals(this.value(), value);
    };
    /**
     * [Internal] Gets the decoded representation of a value if the value is defined, otherwise, returns the
     * default value, which may be the result of an injectable function.
     */
    Param.prototype.value = function (value) {
        var _this = this;
        /**
         * [Internal] Get the default value of a parameter, which may be an injectable function.
         */
        var $$getDefaultValue = function () {
            if (!coreservices_1.services.$injector)
                throw new Error("Injectable functions cannot be called at configuration time");
            var defaultValue = coreservices_1.services.$injector.invoke(_this.config.$$fn);
            if (defaultValue !== null && defaultValue !== undefined && !_this.type.is(defaultValue))
                throw new Error("Default value (" + defaultValue + ") for parameter '" + _this.id + "' is not an instance of ParamType (" + _this.type.name + ")");
            return defaultValue;
        };
        var $replace = function (val) {
            var replacement = common_1.map(common_1.filter(_this.replace, hof_1.propEq('from', val)), hof_1.prop("to"));
            return replacement.length ? replacement[0] : val;
        };
        value = $replace(value);
        return !predicates_1.isDefined(value) ? $$getDefaultValue() : this.type.$normalize(value);
    };
    Param.prototype.isSearch = function () {
        return this.location === DefType.SEARCH;
    };
    Param.prototype.validates = function (value) {
        // There was no parameter value, but the param is optional
        if ((!predicates_1.isDefined(value) || value === null) && this.isOptional)
            return true;
        // The value was not of the correct ParamType, and could not be decoded to the correct ParamType
        var normalized = this.type.$normalize(value);
        if (!this.type.is(normalized))
            return false;
        // The value was of the correct type, but when encoded, did not match the ParamType's regexp
        var encoded = this.type.encode(normalized);
        return !(predicates_1.isString(encoded) && !this.type.pattern.exec(encoded));
    };
    Param.prototype.toString = function () {
        return "{Param:" + this.id + " " + this.type + " squash: '" + this.squash + "' optional: " + this.isOptional + "}";
    };
    /** Creates a new [[Param]] from a CONFIG block */
    Param.fromConfig = function (id, type, config, paramTypes) {
        return new Param(id, type, config, DefType.CONFIG, paramTypes);
    };
    /** Creates a new [[Param]] from a url PATH */
    Param.fromPath = function (id, type, config, paramTypes) {
        return new Param(id, type, config, DefType.PATH, paramTypes);
    };
    /** Creates a new [[Param]] from a url SEARCH */
    Param.fromSearch = function (id, type, config, paramTypes) {
        return new Param(id, type, config, DefType.SEARCH, paramTypes);
    };
    Param.values = function (params, values) {
        if (values === void 0) { values = {}; }
        return params.map(function (param) { return [param.id, param.value(values[param.id])]; }).reduce(common_1.applyPairs, {});
    };
    /**
     * Finds [[Param]] objects which have different param values
     *
     * Filters a list of [[Param]] objects to only those whose parameter values differ in two param value objects
     *
     * @param params: The list of Param objects to filter
     * @param values1: The first set of parameter values
     * @param values2: the second set of parameter values
     *
     * @returns any Param objects whose values were different between values1 and values2
     */
    Param.changed = function (params, values1, values2) {
        if (values1 === void 0) { values1 = {}; }
        if (values2 === void 0) { values2 = {}; }
        return params.filter(function (param) { return !param.type.equals(values1[param.id], values2[param.id]); });
    };
    /**
     * Checks if two param value objects are equal (for a set of [[Param]] objects)
     *
     * @param params The list of [[Param]] objects to check
     * @param values1 The first set of param values
     * @param values2 The second set of param values
     *
     * @returns true if the param values in values1 and values2 are equal
     */
    Param.equals = function (params, values1, values2) {
        if (values1 === void 0) { values1 = {}; }
        if (values2 === void 0) { values2 = {}; }
        return Param.changed(params, values1, values2).length === 0;
    };
    /** Returns true if a the parameter values are valid, according to the Param definitions */
    Param.validates = function (params, values) {
        if (values === void 0) { values = {}; }
        return params.map(function (param) { return param.validates(values[param.id]); }).reduce(common_1.allTrueR, true);
    };
    return Param;
}());
exports.Param = Param;
//# sourceMappingURL=param.js.map