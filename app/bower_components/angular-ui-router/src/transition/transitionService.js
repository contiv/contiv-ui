"use strict";
var transition_1 = require("./transition");
var hookRegistry_1 = require("./hookRegistry");
var resolve_1 = require("../hooks/resolve");
var views_1 = require("../hooks/views");
var url_1 = require("../hooks/url");
var redirectTo_1 = require("../hooks/redirectTo");
var onEnterExitRetain_1 = require("../hooks/onEnterExitRetain");
var lazyLoadStates_1 = require("../hooks/lazyLoadStates");
/**
 * The default [[Transition]] options.
 *
 * Include this object when applying custom defaults:
 * let reloadOpts = { reload: true, notify: true }
 * let options = defaults(theirOpts, customDefaults, defaultOptions);
 */
exports.defaultTransOpts = {
    location: true,
    relative: null,
    inherit: false,
    notify: true,
    reload: false,
    custom: {},
    current: function () { return null; },
    source: "unknown"
};
/**
 * This class provides services related to Transitions.
 *
 * - Most importantly, it allows global Transition Hooks to be registered.
 * - It allows the default transition error handler to be set.
 * - It also has a factory function for creating new [[Transition]] objects, (used internally by the [[StateService]]).
 *
 * At bootstrap, [[UIRouter]] creates a single instance (singleton) of this class.
 */
var TransitionService = (function () {
    function TransitionService(_router) {
        this._router = _router;
        this.$view = _router.viewService;
        hookRegistry_1.HookRegistry.mixin(new hookRegistry_1.HookRegistry(), this);
        this._deregisterHookFns = {};
        this.registerTransitionHooks();
    }
    /** @hidden */
    TransitionService.prototype.registerTransitionHooks = function () {
        var fns = this._deregisterHookFns;
        // Wire up redirectTo hook
        fns.redirectTo = redirectTo_1.registerRedirectToHook(this);
        // Wire up onExit/Retain/Enter state hooks
        fns.onExit = onEnterExitRetain_1.registerOnExitHook(this);
        fns.onRetain = onEnterExitRetain_1.registerOnRetainHook(this);
        fns.onEnter = onEnterExitRetain_1.registerOnEnterHook(this);
        // Wire up Resolve hooks
        fns.eagerResolve = resolve_1.registerEagerResolvePath(this);
        fns.lazyResolve = resolve_1.registerLazyResolveState(this);
        // Wire up the View management hooks
        fns.loadViews = views_1.registerLoadEnteringViews(this);
        fns.activateViews = views_1.registerActivateViews(this);
        // After globals.current is updated at priority: 10000
        fns.updateUrl = url_1.registerUpdateUrl(this);
        // Lazy load state trees
        fns.lazyLoad = lazyLoadStates_1.registerLazyLoadHook(this);
    };
    /** @inheritdoc */
    TransitionService.prototype.onBefore = function (matchCriteria, callback, options) { throw ""; };
    ;
    /** @inheritdoc */
    TransitionService.prototype.onStart = function (matchCriteria, callback, options) { throw ""; };
    ;
    /** @inheritdoc */
    TransitionService.prototype.onExit = function (matchCriteria, callback, options) { throw ""; };
    ;
    /** @inheritdoc */
    TransitionService.prototype.onRetain = function (matchCriteria, callback, options) { throw ""; };
    ;
    /** @inheritdoc */
    TransitionService.prototype.onEnter = function (matchCriteria, callback, options) { throw ""; };
    ;
    /** @inheritdoc */
    TransitionService.prototype.onFinish = function (matchCriteria, callback, options) { throw ""; };
    ;
    /** @inheritdoc */
    TransitionService.prototype.onSuccess = function (matchCriteria, callback, options) { throw ""; };
    ;
    /** @inheritdoc */
    TransitionService.prototype.onError = function (matchCriteria, callback, options) { throw ""; };
    ;
    /**
     * Creates a new [[Transition]] object
     *
     * This is a factory function for creating new Transition objects.
     * It is used internally by the [[StateService]] and should generally not be called by application code.
     *
     * @param fromPath the path to the current state (the from state)
     * @param targetState the target state (destination)
     * @returns a Transition
     */
    TransitionService.prototype.create = function (fromPath, targetState) {
        return new transition_1.Transition(fromPath, targetState, this._router);
    };
    return TransitionService;
}());
exports.TransitionService = TransitionService;
//# sourceMappingURL=transitionService.js.map