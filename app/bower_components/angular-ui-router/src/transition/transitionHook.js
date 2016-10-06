"use strict";
var common_1 = require("../common/common");
var strings_1 = require("../common/strings");
var predicates_1 = require("../common/predicates");
var hof_1 = require("../common/hof");
var trace_1 = require("../common/trace");
var coreservices_1 = require("../common/coreservices");
var rejectFactory_1 = require("./rejectFactory");
var targetState_1 = require("../state/targetState");
var defaultOptions = {
    async: true,
    rejectIfSuperseded: true,
    current: common_1.noop,
    transition: null,
    traceData: {},
    bind: null
};
/** @hidden */
var TransitionHook = (function () {
    function TransitionHook(transition, stateContext, eventHook, options) {
        var _this = this;
        this.transition = transition;
        this.stateContext = stateContext;
        this.eventHook = eventHook;
        this.options = options;
        this.isSuperseded = function () {
            return _this.options.current() !== _this.options.transition;
        };
        this.options = common_1.defaults(options, defaultOptions);
    }
    TransitionHook.prototype.invokeHook = function () {
        var _a = this, options = _a.options, eventHook = _a.eventHook;
        trace_1.trace.traceHookInvocation(this, options);
        if (options.rejectIfSuperseded && this.isSuperseded()) {
            return rejectFactory_1.Rejection.superseded(options.current()).toPromise();
        }
        var synchronousHookResult = !eventHook._deregistered
            ? eventHook.callback.call(options.bind, this.transition, this.stateContext)
            : undefined;
        return this.handleHookResult(synchronousHookResult);
    };
    /**
     * This method handles the return value of a Transition Hook.
     *
     * A hook can return false (cancel), a TargetState (redirect),
     * or a promise (which may later resolve to false or a redirect)
     *
     * This also handles "transition superseded" -- when a new transition
     * was started while the hook was still running
     */
    TransitionHook.prototype.handleHookResult = function (result) {
        // This transition is no longer current.
        // Another transition started while this hook was still running.
        if (this.isSuperseded()) {
            // Abort this transition
            return rejectFactory_1.Rejection.superseded(this.options.current()).toPromise();
        }
        // Hook returned a promise
        if (predicates_1.isPromise(result)) {
            // Wait for the promise, then reprocess the resolved value
            return result.then(this.handleHookResult.bind(this));
        }
        trace_1.trace.traceHookResult(result, this.options);
        // Hook returned false
        if (result === false) {
            // Abort this Transition
            return rejectFactory_1.Rejection.aborted("Hook aborted transition").toPromise();
        }
        var isTargetState = hof_1.is(targetState_1.TargetState);
        // hook returned a TargetState
        if (isTargetState(result)) {
            // Halt the current Transition and start a redirected Transition (to the TargetState).
            return rejectFactory_1.Rejection.redirected(result).toPromise();
        }
    };
    TransitionHook.prototype.toString = function () {
        var _a = this, options = _a.options, eventHook = _a.eventHook;
        var event = hof_1.parse("traceData.hookType")(options) || "internal", context = hof_1.parse("traceData.context.state.name")(options) || hof_1.parse("traceData.context")(options) || "unknown", name = strings_1.fnToString(eventHook.callback);
        return event + " context: " + context + ", " + strings_1.maxLength(200, name);
    };
    /**
     * Given an array of TransitionHooks, runs each one synchronously and sequentially.
     *
     * Returns a promise chain composed of any promises returned from each hook.invokeStep() call
     */
    TransitionHook.runSynchronousHooks = function (hooks, swallowExceptions) {
        if (swallowExceptions === void 0) { swallowExceptions = false; }
        var results = [];
        for (var i = 0; i < hooks.length; i++) {
            var hook = hooks[i];
            try {
                results.push(hook.invokeHook());
            }
            catch (exception) {
                if (!swallowExceptions) {
                    return rejectFactory_1.Rejection.errored(exception).toPromise();
                }
                var errorHandler = hook.transition.router.stateService.defaultErrorHandler();
                errorHandler(exception);
            }
        }
        var rejections = results.filter(rejectFactory_1.Rejection.isTransitionRejectionPromise);
        if (rejections.length)
            return rejections[0];
        return results
            .filter(predicates_1.isPromise)
            .reduce(function (chain, promise) { return chain.then(hof_1.val(promise)); }, coreservices_1.services.$q.when());
    };
    return TransitionHook;
}());
exports.TransitionHook = TransitionHook;
//# sourceMappingURL=transitionHook.js.map