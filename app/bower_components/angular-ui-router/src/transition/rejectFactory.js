/** @module transition */ /** for typedoc */
"use strict";
var common_1 = require("../common/common");
var strings_1 = require("../common/strings");
(function (RejectType) {
    RejectType[RejectType["SUPERSEDED"] = 2] = "SUPERSEDED";
    RejectType[RejectType["ABORTED"] = 3] = "ABORTED";
    RejectType[RejectType["INVALID"] = 4] = "INVALID";
    RejectType[RejectType["IGNORED"] = 5] = "IGNORED";
    RejectType[RejectType["ERROR"] = 6] = "ERROR";
})(exports.RejectType || (exports.RejectType = {}));
var RejectType = exports.RejectType;
var Rejection = (function () {
    function Rejection(type, message, detail) {
        this.type = type;
        this.message = message;
        this.detail = detail;
    }
    Rejection.prototype.toString = function () {
        var detailString = function (d) {
            return d && d.toString !== Object.prototype.toString ? d.toString() : strings_1.stringify(d);
        };
        var type = this.type, message = this.message, detail = detailString(this.detail);
        return "TransitionRejection(type: " + type + ", message: " + message + ", detail: " + detail + ")";
    };
    Rejection.prototype.toPromise = function () {
        return common_1.extend(common_1.silentRejection(this), { _transitionRejection: this });
    };
    /** Returns true if the obj is a rejected promise created from the `asPromise` factory */
    Rejection.isTransitionRejectionPromise = function (obj) {
        return obj && (typeof obj.then === 'function') && obj._transitionRejection instanceof Rejection;
    };
    /** Returns a TransitionRejection due to transition superseded */
    Rejection.superseded = function (detail, options) {
        var message = "The transition has been superseded by a different transition";
        var rejection = new Rejection(RejectType.SUPERSEDED, message, detail);
        if (options && options.redirected) {
            rejection.redirected = true;
        }
        return rejection;
    };
    /** Returns a TransitionRejection due to redirected transition */
    Rejection.redirected = function (detail) {
        return Rejection.superseded(detail, { redirected: true });
    };
    /** Returns a TransitionRejection due to invalid transition */
    Rejection.invalid = function (detail) {
        var message = "This transition is invalid";
        return new Rejection(RejectType.INVALID, message, detail);
    };
    /** Returns a TransitionRejection due to ignored transition */
    Rejection.ignored = function (detail) {
        var message = "The transition was ignored";
        return new Rejection(RejectType.IGNORED, message, detail);
    };
    /** Returns a TransitionRejection due to aborted transition */
    Rejection.aborted = function (detail) {
        // TODO think about how to encapsulate an Error() object
        var message = "The transition has been aborted";
        return new Rejection(RejectType.ABORTED, message, detail);
    };
    /** Returns a TransitionRejection due to aborted transition */
    Rejection.errored = function (detail) {
        // TODO think about how to encapsulate an Error() object
        var message = "The transition errored";
        return new Rejection(RejectType.ERROR, message, detail);
    };
    return Rejection;
}());
exports.Rejection = Rejection;
//# sourceMappingURL=rejectFactory.js.map