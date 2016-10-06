"use strict";
/** @module params */ /** for typedoc */
var common_1 = require("../common/common");
var predicates_1 = require("../common/predicates");
var hof_1 = require("../common/hof");
var coreservices_1 = require("../common/coreservices");
var type_1 = require("./type");
// Use tildes to pre-encode slashes.
// If the slashes are simply URLEncoded, the browser can choose to pre-decode them,
// and bidirectional encoding/decoding fails.
// Tilde was chosen because it's not a RFC 3986 section 2.2 Reserved Character
function valToString(val) { return val != null ? val.toString().replace(/(~|\/)/g, function (m) { return ({ '~': '~~', '/': '~2F' }[m]); }) : val; }
function valFromString(val) { return val != null ? val.toString().replace(/(~~|~2F)/g, function (m) { return ({ '~~': '~', '~2F': '/' }[m]); }) : val; }
var ParamTypes = (function () {
    function ParamTypes() {
        this.enqueue = true;
        this.typeQueue = [];
        this.defaultTypes = {
            "hash": {
                encode: valToString,
                decode: valFromString,
                is: hof_1.is(String),
                pattern: /.*/,
                equals: function (a, b) { return a == b; } // allow coersion for null/undefined/""
            },
            "string": {
                encode: valToString,
                decode: valFromString,
                is: hof_1.is(String),
                pattern: /[^/]*/
            },
            "int": {
                encode: valToString,
                decode: function (val) { return parseInt(val, 10); },
                is: function (val) { return predicates_1.isDefined(val) && this.decode(val.toString()) === val; },
                pattern: /-?\d+/
            },
            "bool": {
                encode: function (val) { return val && 1 || 0; },
                decode: function (val) { return parseInt(val, 10) !== 0; },
                is: hof_1.is(Boolean),
                pattern: /0|1/
            },
            "date": {
                encode: function (val) {
                    return !this.is(val) ? undefined : [
                        val.getFullYear(),
                        ('0' + (val.getMonth() + 1)).slice(-2),
                        ('0' + val.getDate()).slice(-2)
                    ].join("-");
                },
                decode: function (val) {
                    if (this.is(val))
                        return val;
                    var match = this.capture.exec(val);
                    return match ? new Date(match[1], match[2] - 1, match[3]) : undefined;
                },
                is: function (val) { return val instanceof Date && !isNaN(val.valueOf()); },
                equals: function (l, r) {
                    return ['getFullYear', 'getMonth', 'getDate']
                        .reduce(function (acc, fn) { return acc && l[fn]() === r[fn](); }, true);
                },
                pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
                capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
            },
            "json": {
                encode: common_1.toJson,
                decode: common_1.fromJson,
                is: hof_1.is(Object),
                equals: common_1.equals,
                pattern: /[^/]*/
            },
            "any": {
                encode: common_1.identity,
                decode: common_1.identity,
                equals: common_1.equals,
                pattern: /.*/
            }
        };
        // Register default types. Store them in the prototype of this.types.
        var makeType = function (definition, name) { return new type_1.ParamType(common_1.extend({ name: name }, definition)); };
        this.types = common_1.inherit(common_1.map(this.defaultTypes, makeType), {});
    }
    ParamTypes.prototype.type = function (name, definition, definitionFn) {
        if (!predicates_1.isDefined(definition))
            return this.types[name];
        if (this.types.hasOwnProperty(name))
            throw new Error("A type named '" + name + "' has already been defined.");
        this.types[name] = new type_1.ParamType(common_1.extend({ name: name }, definition));
        if (definitionFn) {
            this.typeQueue.push({ name: name, def: definitionFn });
            if (!this.enqueue)
                this._flushTypeQueue();
        }
        return this;
    };
    ParamTypes.prototype._flushTypeQueue = function () {
        while (this.typeQueue.length) {
            var type = this.typeQueue.shift();
            if (type.pattern)
                throw new Error("You cannot override a type's .pattern at runtime.");
            common_1.extend(this.types[type.name], coreservices_1.services.$injector.invoke(type.def));
        }
    };
    return ParamTypes;
}());
exports.ParamTypes = ParamTypes;
//# sourceMappingURL=paramTypes.js.map