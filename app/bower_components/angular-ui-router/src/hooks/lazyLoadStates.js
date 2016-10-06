"use strict";
var coreservices_1 = require("../common/coreservices");
/**
 * A [[TransitionHookFn]] that lazy loads a state tree.
 *
 * When transitioning to a state "abc" which has a `lazyLoad` function defined:
 * - Invoke the `lazyLoad` function
 *   - The function should return a promise for an array of lazy loaded [[StateDeclaration]]s
 * - Wait for the promise to resolve
 * - Deregister the original state "abc"
 *   - The original state definition is a placeholder for the lazy loaded states
 * - Register the new states
 * - Retry the transition
 *
 * See [[StateDeclaration.lazyLoad]]
 */
var lazyLoadHook = function (transition) {
    var toState = transition.to();
    var registry = transition.router.stateRegistry;
    function retryOriginalTransition() {
        if (transition.options().source === 'url') {
            var loc = coreservices_1.services.location, path_1 = loc.path(), search_1 = loc.search(), hash_1 = loc.hash();
            var matchState = function (state) { return [state, state.url && state.url.exec(path_1, search_1, hash_1)]; };
            var matches = registry.get().map(function (s) { return s.$$state(); }).map(matchState).filter(function (_a) {
                var state = _a[0], params = _a[1];
                return !!params;
            });
            if (matches.length) {
                var _a = matches[0], state = _a[0], params = _a[1];
                return transition.router.stateService.target(state, params, transition.options());
            }
            transition.router.urlRouter.sync();
        }
        // The original transition was not triggered via url sync
        // The lazy state should be loaded now, so re-try the original transition
        var orig = transition.targetState();
        return transition.router.stateService.target(orig.identifier(), orig.params(), orig.options());
    }
    /**
     * Replace the placeholder state with the newly loaded states from the NgModule.
     */
    function updateStateRegistry(result) {
        // deregister placeholder state
        registry.deregister(transition.$to());
        if (result && Array.isArray(result.states)) {
            result.states.forEach(function (state) { return registry.register(state); });
        }
    }
    var hook = toState.lazyLoad;
    // Store/get the lazy load promise on/from the hookfn so it doesn't get re-invoked
    var promise = hook['_promise'];
    if (!promise) {
        promise = hook['_promise'] = hook(transition).then(updateStateRegistry);
        var cleanup = function () { return delete hook['_promise']; };
        promise.then(cleanup, cleanup);
    }
    return promise.then(retryOriginalTransition);
};
exports.registerLazyLoadHook = function (transitionService) {
    return transitionService.onBefore({ to: function (state) { return !!state.lazyLoad; } }, lazyLoadHook);
};
//# sourceMappingURL=lazyLoadStates.js.map