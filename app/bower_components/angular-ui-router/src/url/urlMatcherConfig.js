"use strict";
/** @module url */ /** for typedoc */
var predicates_1 = require("../common/predicates");
var MatcherConfig = (function () {
    function MatcherConfig() {
        this._isCaseInsensitive = false;
        this._isStrictMode = true;
        this._defaultSquashPolicy = false;
    }
    MatcherConfig.prototype.caseInsensitive = function (value) {
        return this._isCaseInsensitive = predicates_1.isDefined(value) ? value : this._isCaseInsensitive;
    };
    MatcherConfig.prototype.strictMode = function (value) {
        return this._isStrictMode = predicates_1.isDefined(value) ? value : this._isStrictMode;
    };
    MatcherConfig.prototype.defaultSquashPolicy = function (value) {
        if (predicates_1.isDefined(value) && value !== true && value !== false && !predicates_1.isString(value))
            throw new Error("Invalid squash policy: " + value + ". Valid policies: false, true, arbitrary-string");
        return this._defaultSquashPolicy = predicates_1.isDefined(value) ? value : this._defaultSquashPolicy;
    };
    return MatcherConfig;
}());
exports.MatcherConfig = MatcherConfig;
// TODO: Do not export global instance; create one in UIRouter() constructor
exports.matcherConfig = new MatcherConfig();
//# sourceMappingURL=urlMatcherConfig.js.map