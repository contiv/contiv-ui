/** @module state */ /** for typedoc */
"use strict";
var common_1 = require("../common/common");
/**
 * @ngdoc object
 * @name ui.router.state.type:TargetState
 *
 * @description
 * Encapsulate the desired target of a transition.
 * Wraps an identifier for a state, a set of parameters, and transition options with the definition of the state.
 *
 * @param {StateOrName} _identifier  An identifier for a state. Either a fully-qualified path, or the object
 *            used to define the state.
 * @param {IState} _definition The `State` object definition.
 * @param {ParamsOrArray} _params Parameters for the target state
 * @param {TransitionOptions} _options Transition options.
 */
var TargetState = (function () {
    function TargetState(_identifier, _definition, _params, _options) {
        if (_params === void 0) { _params = {}; }
        if (_options === void 0) { _options = {}; }
        this._identifier = _identifier;
        this._definition = _definition;
        this._options = _options;
        this._params = _params || {};
    }
    TargetState.prototype.name = function () {
        return this._definition && this._definition.name || this._identifier;
    };
    TargetState.prototype.identifier = function () {
        return this._identifier;
    };
    TargetState.prototype.params = function () {
        return this._params;
    };
    TargetState.prototype.$state = function () {
        return this._definition;
    };
    TargetState.prototype.state = function () {
        return this._definition && this._definition.self;
    };
    TargetState.prototype.options = function () {
        return this._options;
    };
    TargetState.prototype.exists = function () {
        return !!(this._definition && this._definition.self);
    };
    TargetState.prototype.valid = function () {
        return !this.error();
    };
    TargetState.prototype.error = function () {
        var base = this.options().relative;
        if (!this._definition && !!base) {
            var stateName = base.name ? base.name : base;
            return "Could not resolve '" + this.name() + "' from state '" + stateName + "'";
        }
        if (!this._definition)
            return "No such state '" + this.name() + "'";
        if (!this._definition.self)
            return "State '" + this.name() + "' has an invalid definition";
    };
    TargetState.prototype.toString = function () {
        return "'" + this.name() + "'" + common_1.toJson(this.params());
    };
    return TargetState;
}());
exports.TargetState = TargetState;
//# sourceMappingURL=targetState.js.map