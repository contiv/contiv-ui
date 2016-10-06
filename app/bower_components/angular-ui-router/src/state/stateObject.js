/** @module state */ /** for typedoc */
"use strict";
var common_1 = require("../common/common");
var hof_1 = require("../common/hof");
/**
 * @ngdoc object
 * @name ui.router.state.type:State
 *
 * @description
 * Definition object for states. Includes methods for manipulating the state heirarchy.
 *
 * @param {Object} config  A configuration object hash that includes the results of user-supplied
 *        values, as well as values from `StateBuilder`.
 *
 * @returns {Object}  Returns a new `State` object.
 */
var State = (function () {
    function State(config) {
        common_1.extend(this, config);
        // Object.freeze(this);
    }
    /**
     * @ngdoc function
     * @name ui.router.state.type:State#is
     * @methodOf ui.router.state.type:State
     *
     * @description
     * Compares the identity of the state against the passed value, which is either an object
     * reference to the actual `State` instance, the original definition object passed to
     * `$stateProvider.state()`, or the fully-qualified name.
     *
     * @param {Object} ref Can be one of (a) a `State` instance, (b) an object that was passed
     *        into `$stateProvider.state()`, (c) the fully-qualified name of a state as a string.
     * @returns {boolean} Returns `true` if `ref` matches the current `State` instance.
     */
    State.prototype.is = function (ref) {
        return this === ref || this.self === ref || this.fqn() === ref;
    };
    /**
     * @ngdoc function
     * @name ui.router.state.type:State#fqn
     * @methodOf ui.router.state.type:State
     *
     * @description
     * Returns the fully-qualified name of the state, based on its current position in the tree.
     *
     * @returns {string} Returns a dot-separated name of the state.
     */
    State.prototype.fqn = function () {
        if (!this.parent || !(this.parent instanceof this.constructor))
            return this.name;
        var name = this.parent.fqn();
        return name ? name + "." + this.name : this.name;
    };
    /**
     * @ngdoc function
     * @name ui.router.state.type:State#root
     * @methodOf ui.router.state.type:State
     *
     * @description
     * Returns the root node of this state's tree.
     *
     * @returns {State} The root of this state's tree.
     */
    State.prototype.root = function () {
        return this.parent && this.parent.root() || this;
    };
    State.prototype.parameters = function (opts) {
        opts = common_1.defaults(opts, { inherit: true });
        var inherited = opts.inherit && this.parent && this.parent.parameters() || [];
        return inherited.concat(common_1.values(this.params));
    };
    State.prototype.parameter = function (id, opts) {
        if (opts === void 0) { opts = {}; }
        return (this.url && this.url.parameter(id, opts) ||
            common_1.find(common_1.values(this.params), hof_1.propEq('id', id)) ||
            opts.inherit && this.parent && this.parent.parameter(id));
    };
    State.prototype.toString = function () {
        return this.fqn();
    };
    return State;
}());
exports.State = State;
//# sourceMappingURL=stateObject.js.map