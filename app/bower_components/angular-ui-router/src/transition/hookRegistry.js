"use strict";
/** @module transition */ /** for typedoc */
var common_1 = require("../common/common");
var predicates_1 = require("../common/predicates");
var glob_1 = require("../common/glob");
/**
 * Determines if the given state matches the matchCriteria
 *
 * @hidden
 *
 * @param state a State Object to test against
 * @param criterion
 * - If a string, matchState uses the string as a glob-matcher against the state name
 * - If an array (of strings), matchState uses each string in the array as a glob-matchers against the state name
 *   and returns a positive match if any of the globs match.
 * - If a function, matchState calls the function with the state and returns true if the function's result is truthy.
 * @returns {boolean}
 */
function matchState(state, criterion) {
    var toMatch = predicates_1.isString(criterion) ? [criterion] : criterion;
    function matchGlobs(_state) {
        var globStrings = toMatch;
        for (var i = 0; i < globStrings.length; i++) {
            var glob = glob_1.Glob.fromString(globStrings[i]);
            if ((glob && glob.matches(_state.name)) || (!glob && globStrings[i] === _state.name)) {
                return true;
            }
        }
        return false;
    }
    var matchFn = (predicates_1.isFunction(toMatch) ? toMatch : matchGlobs);
    return !!matchFn(state);
}
exports.matchState = matchState;
/** @hidden */
var EventHook = (function () {
    function EventHook(matchCriteria, callback, options) {
        if (options === void 0) { options = {}; }
        this.callback = callback;
        this.matchCriteria = common_1.extend({ to: true, from: true, exiting: true, retained: true, entering: true }, matchCriteria);
        this.priority = options.priority || 0;
        this.bind = options.bind || null;
        this._deregistered = false;
    }
    EventHook._matchingNodes = function (nodes, criterion) {
        if (criterion === true)
            return nodes;
        var matching = nodes.filter(function (node) { return matchState(node.state, criterion); });
        return matching.length ? matching : null;
    };
    /**
     * Determines if this hook's [[matchCriteria]] match the given [[TreeChanges]]
     *
     * @returns an IMatchingNodes object, or null. If an IMatchingNodes object is returned, its values
     * are the matching [[PathNode]]s for each [[HookMatchCriterion]] (to, from, exiting, retained, entering)
     */
    EventHook.prototype.matches = function (treeChanges) {
        var mc = this.matchCriteria, _matchingNodes = EventHook._matchingNodes;
        var matches = {
            to: _matchingNodes([common_1.tail(treeChanges.to)], mc.to),
            from: _matchingNodes([common_1.tail(treeChanges.from)], mc.from),
            exiting: _matchingNodes(treeChanges.exiting, mc.exiting),
            retained: _matchingNodes(treeChanges.retained, mc.retained),
            entering: _matchingNodes(treeChanges.entering, mc.entering),
        };
        // Check if all the criteria matched the TreeChanges object
        var allMatched = ["to", "from", "exiting", "retained", "entering"]
            .map(function (prop) { return matches[prop]; })
            .reduce(common_1.allTrueR, true);
        return allMatched ? matches : null;
    };
    return EventHook;
}());
exports.EventHook = EventHook;
/** @hidden Return a registration function of the requested type. */
function makeHookRegistrationFn(hooks, name) {
    return function (matchObject, callback, options) {
        if (options === void 0) { options = {}; }
        var eventHook = new EventHook(matchObject, callback, options);
        hooks[name].push(eventHook);
        return function deregisterEventHook() {
            eventHook._deregistered = true;
            common_1.removeFrom(hooks[name])(eventHook);
        };
    };
}
/**
 * Mixin class acts as a Transition Hook registry.
 *
 * Holds the registered [[HookFn]] objects.
 * Exposes functions to register new hooks.
 *
 * This is a Mixin class which can be applied to other objects.
 *
 * The hook registration functions are [[onBefore]], [[onStart]], [[onEnter]], [[onRetain]], [[onExit]], [[onFinish]], [[onSuccess]], [[onError]].
 *
 * This class is mixed into both the [[TransitionService]] and every [[Transition]] object.
 * Global hooks are added to the [[TransitionService]].
 * Since each [[Transition]] is itself a `HookRegistry`, hooks can also be added to individual Transitions
 * (note: the hook criteria still must match the Transition).
 */
var HookRegistry = (function () {
    function HookRegistry() {
        var _this = this;
        this._transitionEvents = {
            onBefore: [], onStart: [], onEnter: [], onRetain: [], onExit: [], onFinish: [], onSuccess: [], onError: []
        };
        this.getHooks = function (name) { return _this._transitionEvents[name]; };
        /** @inheritdoc */
        this.onBefore = makeHookRegistrationFn(this._transitionEvents, "onBefore");
        /** @inheritdoc */
        this.onStart = makeHookRegistrationFn(this._transitionEvents, "onStart");
        /** @inheritdoc */
        this.onEnter = makeHookRegistrationFn(this._transitionEvents, "onEnter");
        /** @inheritdoc */
        this.onRetain = makeHookRegistrationFn(this._transitionEvents, "onRetain");
        /** @inheritdoc */
        this.onExit = makeHookRegistrationFn(this._transitionEvents, "onExit");
        /** @inheritdoc */
        this.onFinish = makeHookRegistrationFn(this._transitionEvents, "onFinish");
        /** @inheritdoc */
        this.onSuccess = makeHookRegistrationFn(this._transitionEvents, "onSuccess");
        /** @inheritdoc */
        this.onError = makeHookRegistrationFn(this._transitionEvents, "onError");
    }
    HookRegistry.mixin = function (source, target) {
        Object.keys(source._transitionEvents).concat(["getHooks"]).forEach(function (key) { return target[key] = source[key]; });
    };
    return HookRegistry;
}());
exports.HookRegistry = HookRegistry;
//# sourceMappingURL=hookRegistry.js.map