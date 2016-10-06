"use strict";
/** @module url */ /** for typedoc */
var common_1 = require("../common/common");
var predicates_1 = require("../common/predicates");
var urlMatcher_1 = require("./urlMatcher");
var urlMatcherConfig_1 = require("./urlMatcherConfig");
var param_1 = require("../params/param");
var paramTypes_1 = require("../params/paramTypes");
/** @hidden */
function getDefaultConfig() {
    return {
        strict: urlMatcherConfig_1.matcherConfig.strictMode(),
        caseInsensitive: urlMatcherConfig_1.matcherConfig.caseInsensitive()
    };
}
/**
 * Factory for [[UrlMatcher]] instances.
 *
 * The factory is available to ng1 services as
 * `$urlMatcherFactor` or ng1 providers as `$urlMatcherFactoryProvider`.
 */
var UrlMatcherFactory = (function () {
    function UrlMatcherFactory() {
        this.paramTypes = new paramTypes_1.ParamTypes();
        common_1.extend(this, { UrlMatcher: urlMatcher_1.UrlMatcher, Param: param_1.Param });
    }
    /**
     * Defines whether URL matching should be case sensitive (the default behavior), or not.
     *
     * @param value `false` to match URL in a case sensitive manner; otherwise `true`;
     * @returns the current value of caseInsensitive
     */
    UrlMatcherFactory.prototype.caseInsensitive = function (value) {
        return urlMatcherConfig_1.matcherConfig.caseInsensitive(value);
    };
    /**
     * Defines whether URLs should match trailing slashes, or not (the default behavior).
     *
     * @param value `false` to match trailing slashes in URLs, otherwise `true`.
     * @returns the current value of strictMode
     */
    UrlMatcherFactory.prototype.strictMode = function (value) {
        return urlMatcherConfig_1.matcherConfig.strictMode(value);
    };
    /**
     * Sets the default behavior when generating or matching URLs with default parameter values.
     *
     * @param value A string that defines the default parameter URL squashing behavior.
     *    - `nosquash`: When generating an href with a default parameter value, do not squash the parameter value from the URL
     *    - `slash`: When generating an href with a default parameter value, squash (remove) the parameter value, and, if the
     *             parameter is surrounded by slashes, squash (remove) one slash from the URL
     *    - any other string, e.g. "~": When generating an href with a default parameter value, squash (remove)
     *             the parameter value from the URL and replace it with this string.
     * @returns the current value of defaultSquashPolicy
     */
    UrlMatcherFactory.prototype.defaultSquashPolicy = function (value) {
        return urlMatcherConfig_1.matcherConfig.defaultSquashPolicy(value);
    };
    /**
     * Creates a [[UrlMatcher]] for the specified pattern.
     *
     * @param pattern  The URL pattern.
     * @param config  The config object hash.
     * @returns The UrlMatcher.
     */
    UrlMatcherFactory.prototype.compile = function (pattern, config) {
        return new urlMatcher_1.UrlMatcher(pattern, this.paramTypes, common_1.extend(getDefaultConfig(), config));
    };
    /**
     * Returns true if the specified object is a [[UrlMatcher]], or false otherwise.
     *
     * @param object  The object to perform the type check against.
     * @returns `true` if the object matches the `UrlMatcher` interface, by
     *          implementing all the same methods.
     */
    UrlMatcherFactory.prototype.isMatcher = function (object) {
        // TODO: typeof?
        if (!predicates_1.isObject(object))
            return false;
        var result = true;
        common_1.forEach(urlMatcher_1.UrlMatcher.prototype, function (val, name) {
            if (predicates_1.isFunction(val))
                result = result && (predicates_1.isDefined(object[name]) && predicates_1.isFunction(object[name]));
        });
        return result;
    };
    ;
    /**
     * Creates and registers a custom [[ParamType]] object
     *
     * A [[ParamType]] can be used to generate URLs with typed parameters.
     *
     * @param name  The type name.
     * @param definition The type definition. See [[ParamTypeDefinition]] for information on the values accepted.
     * @param definitionFn A function that is injected before the app runtime starts.
     *        The result of this function should be a [[ParamTypeDefinition]].
     *        The result is merged into the existing `definition`.
     *        See [[ParamType]] for information on the values accepted.
     *
     * @returns - if a type was registered: the [[UrlMatcherFactory]]
     *   - if only the `name` parameter was specified: the currently registered [[ParamType]] object, or undefined
     *
     * Note: Register custom types *before using them* in a state definition.
     *
     * See [[ParamTypeDefinition]] for examples
     */
    UrlMatcherFactory.prototype.type = function (name, definition, definitionFn) {
        var type = this.paramTypes.type(name, definition, definitionFn);
        return !predicates_1.isDefined(definition) ? type : this;
    };
    ;
    /** @hidden */
    UrlMatcherFactory.prototype.$get = function () {
        this.paramTypes.enqueue = false;
        this.paramTypes._flushTypeQueue();
        return this;
    };
    ;
    return UrlMatcherFactory;
}());
exports.UrlMatcherFactory = UrlMatcherFactory;
//# sourceMappingURL=urlMatcherFactory.js.map