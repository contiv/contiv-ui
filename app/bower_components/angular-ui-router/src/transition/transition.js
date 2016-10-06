"use strict";
/** @module transition */ /** for typedoc */
var strings_1 = require("../common/strings");
var trace_1 = require("../common/trace");
var coreservices_1 = require("../common/coreservices");
var common_1 = require("../common/common");
var predicates_1 = require("../common/predicates");
var hof_1 = require("../common/hof");
var transitionHook_1 = require("./transitionHook");
var hookRegistry_1 = require("./hookRegistry");
var hookBuilder_1 = require("./hookBuilder");
var node_1 = require("../path/node");
var pathFactory_1 = require("../path/pathFactory");
var targetState_1 = require("../state/targetState");
var param_1 = require("../params/param");
var resolvable_1 = require("../resolve/resolvable");
var rejectFactory_1 = require("./rejectFactory");
var resolveContext_1 = require("../resolve/resolveContext");
var router_1 = require("../router");
var transitionCount = 0;
var stateSelf = hof_1.prop("self");
/**
 * Represents a transition between two states.
 *
 * When navigating to a state, we are transitioning **from** the current state **to** the new state.
 *
 * This object contains all contextual information about the to/from states, parameters, resolves.
 * It has information about all states being entered and exited as a result of the transition.
 */
var Transition = (function () {
    /**
     * Creates a new Transition object.
     *
     * If the target state is not valid, an error is thrown.
     *
     * @param fromPath The path of [[PathNode]]s from which the transition is leaving.  The last node in the `fromPath`
     *        encapsulates the "from state".
     * @param targetState The target state and parameters being transitioned to (also, the transition options)
     * @param router The [[UIRouter]] instance
     */
    function Transition(fromPath, targetState, router) {
        var _this = this;
        /** @hidden */
        this._deferred = coreservices_1.services.$q.defer();
        /**
         * This promise is resolved or rejected based on the outcome of the Transition.
         *
         * When the transition is successful, the promise is resolved
         * When the transition is unsuccessful, the promise is rejected with the [[TransitionRejection]] or javascript error
         */
        this.promise = this._deferred.promise;
        this.treeChanges = function () { return _this._treeChanges; };
        this.isActive = function () { return _this === _this._options.current(); };
        this.router = router;
        this._targetState = targetState;
        if (!targetState.valid()) {
            throw new Error(targetState.error());
        }
        // Makes the Transition instance a hook registry (onStart, etc)
        hookRegistry_1.HookRegistry.mixin(new hookRegistry_1.HookRegistry(), this);
        // current() is assumed to come from targetState.options, but provide a naive implementation otherwise.
        this._options = common_1.extend({ current: hof_1.val(this) }, targetState.options());
        this.$id = transitionCount++;
        var toPath = pathFactory_1.PathFactory.buildToPath(fromPath, targetState);
        this._treeChanges = pathFactory_1.PathFactory.treeChanges(fromPath, toPath, this._options.reloadState);
        var enteringStates = this._treeChanges.entering.map(function (node) { return node.state; });
        pathFactory_1.PathFactory.applyViewConfigs(router.transitionService.$view, this._treeChanges.to, enteringStates);
        var rootResolvables = [
            new resolvable_1.Resolvable(router_1.UIRouter, function () { return router; }, [], undefined, router),
            new resolvable_1.Resolvable(Transition, function () { return _this; }, [], undefined, this),
            new resolvable_1.Resolvable('$transition$', function () { return _this; }, [], undefined, this),
            new resolvable_1.Resolvable('$stateParams', function () { return _this.params(); }, [], undefined, this.params())
        ];
        var rootNode = this._treeChanges.to[0];
        var context = new resolveContext_1.ResolveContext(this._treeChanges.to);
        context.addResolvables(rootResolvables, rootNode.state);
    }
    /** @inheritdoc */
    Transition.prototype.onBefore = function (matchCriteria, callback, options) { throw ""; };
    ;
    /** @inheritdoc */
    Transition.prototype.onStart = function (matchCriteria, callback, options) { throw ""; };
    ;
    /** @inheritdoc */
    Transition.prototype.onExit = function (matchCriteria, callback, options) { throw ""; };
    ;
    /** @inheritdoc */
    Transition.prototype.onRetain = function (matchCriteria, callback, options) { throw ""; };
    ;
    /** @inheritdoc */
    Transition.prototype.onEnter = function (matchCriteria, callback, options) { throw ""; };
    ;
    /** @inheritdoc */
    Transition.prototype.onFinish = function (matchCriteria, callback, options) { throw ""; };
    ;
    /** @inheritdoc */
    Transition.prototype.onSuccess = function (matchCriteria, callback, options) { throw ""; };
    ;
    /** @inheritdoc */
    Transition.prototype.onError = function (matchCriteria, callback, options) { throw ""; };
    ;
    Transition.prototype.$from = function () {
        return common_1.tail(this._treeChanges.from).state;
    };
    Transition.prototype.$to = function () {
        return common_1.tail(this._treeChanges.to).state;
    };
    /**
     * Returns the "from state"
     *
     * @returns The state object for the Transition's "from state".
     */
    Transition.prototype.from = function () {
        return this.$from().self;
    };
    /**
     * Returns the "to state"
     *
     * @returns The state object for the Transition's target state ("to state").
     */
    Transition.prototype.to = function () {
        return this.$to().self;
    };
    /**
     * Gets the Target State
     *
     * A transition's [[TargetState]] encapsulates the [[to]] state, the [[params]], and the [[options]].
     *
     * @returns the [[TargetState]] of this Transition
     */
    Transition.prototype.targetState = function () {
        return this._targetState;
    };
    /**
     * Determines whether two transitions are equivalent.
     */
    Transition.prototype.is = function (compare) {
        if (compare instanceof Transition) {
            // TODO: Also compare parameters
            return this.is({ to: compare.$to().name, from: compare.$from().name });
        }
        return !((compare.to && !hookRegistry_1.matchState(this.$to(), compare.to)) ||
            (compare.from && !hookRegistry_1.matchState(this.$from(), compare.from)));
    };
    /**
     * Gets transition parameter values
     *
     * @param pathname Pick which treeChanges path to get parameters for:
     *   (`'to'`, `'from'`, `'entering'`, `'exiting'`, `'retained'`)
     * @returns transition parameter values for the desired path.
     */
    Transition.prototype.params = function (pathname) {
        if (pathname === void 0) { pathname = "to"; }
        return this._treeChanges[pathname].map(hof_1.prop("paramValues")).reduce(common_1.mergeR, {});
    };
    /**
     * Creates a [[UIInjector]] Dependency Injector
     *
     * Returns a Dependency Injector for the Transition's target state (to state).
     * The injector provides resolve values which the target state has access to.
     *
     * The `UIInjector` can also provide values from the native root/global injector (ng1/ng2).
     *
     * If a `state` is provided, the injector that is returned will be limited to resolve values that the provided state has access to.
     *
     * @param state Limits the resolves provided to only the resolves the provided state has access to.
     * @returns a [[UIInjector]]
     */
    Transition.prototype.injector = function (state) {
        var path = this.treeChanges().to;
        if (state)
            path = pathFactory_1.PathFactory.subPath(path, function (node) { return node.state === state || node.state.name === state; });
        return new resolveContext_1.ResolveContext(path).injector();
    };
    /**
     * Gets all available resolve tokens (keys)
     *
     * This method can be used in conjunction with [[getResolve]] to inspect the resolve values
     * available to the Transition.
     *
     * The returned tokens include those defined on [[StateDeclaration.resolve]] blocks, for the states
     * in the Transition's [[TreeChanges.to]] path.
     *
     * @returns an array of resolve tokens (keys)
     */
    Transition.prototype.getResolveTokens = function () {
        return new resolveContext_1.ResolveContext(this._treeChanges.to).getTokens();
    };
    /**
     * Gets resolved values
     *
     * This method can be used in conjunction with [[getResolveTokens]] to inspect what resolve values
     * are available to the Transition.
     *
     * Given a token, returns the resolved data for that token.
     * Given an array of tokens, returns an array of resolved data for those tokens.
     *
     * If a resolvable hasn't yet been fetched, returns `undefined` for that token
     * If a resolvable doesn't exist for the token, throws an error.
     *
     * @param token the token (or array of tokens)
     *
     * @returns an array of resolve tokens (keys)
     */
    Transition.prototype.getResolveValue = function (token) {
        var resolveContext = new resolveContext_1.ResolveContext(this._treeChanges.to);
        var getData = function (token) {
            var resolvable = resolveContext.getResolvable(token);
            if (resolvable === undefined) {
                throw new Error("Dependency Injection token not found: " + strings_1.stringify(token));
            }
            return resolvable.data;
        };
        if (predicates_1.isArray(token)) {
            return token.map(getData);
        }
        return getData(token);
    };
    /**
     * Gets a [[Resolvable]] primitive
     *
     * This is a lower level API that returns a [[Resolvable]] from the Transition for a given token.
     *
     * @param token the DI token
     *
     * @returns the [[Resolvable]] in the transition's to path, or undefined
     */
    Transition.prototype.getResolvable = function (token) {
        return new resolveContext_1.ResolveContext(this._treeChanges.to).getResolvable(token);
    };
    /**
     * Dynamically adds a new [[Resolvable]] (`resolve`) to this transition.
     *
     * @param resolvable an [[Resolvable]] object
     * @param state the state in the "to path" which should receive the new resolve (otherwise, the root state)
     */
    Transition.prototype.addResolvable = function (resolvable, state) {
        if (state === void 0) { state = ""; }
        var stateName = (typeof state === "string") ? state : state.name;
        var topath = this._treeChanges.to;
        var targetNode = common_1.find(topath, function (node) { return node.state.name === stateName; });
        var resolveContext = new resolveContext_1.ResolveContext(topath);
        resolveContext.addResolvables([resolvable], targetNode.state);
    };
    /**
     * If the current transition is a redirect, returns the transition that was redirected.
     *
     * Gets the transition from which this transition was redirected.
     *
     *
     * @example
     * ```js
     *
     * let transitionA = $state.go('A').transitionA
     * transitionA.onStart({}, () => $state.target('B'));
     * $transitions.onSuccess({ to: 'B' }, (trans) => {
     *   trans.to().name === 'B'; // true
     *   trans.redirectedFrom() === transitionA; // true
     * });
     * ```
     *
     * @returns The previous Transition, or null if this Transition is not the result of a redirection
     */
    Transition.prototype.redirectedFrom = function () {
        return this._options.redirectedFrom || null;
    };
    /**
     * Get the transition options
     *
     * @returns the options for this Transition.
     */
    Transition.prototype.options = function () {
        return this._options;
    };
    /**
     * Gets the states being entered.
     *
     * @returns an array of states that will be entered during this transition.
     */
    Transition.prototype.entering = function () {
        return common_1.map(this._treeChanges.entering, hof_1.prop('state')).map(stateSelf);
    };
    /**
     * Gets the states being exited.
     *
     * @returns an array of states that will be exited during this transition.
     */
    Transition.prototype.exiting = function () {
        return common_1.map(this._treeChanges.exiting, hof_1.prop('state')).map(stateSelf).reverse();
    };
    /**
     * Gets the states being retained.
     *
     * @returns an array of states that are already entered from a previous Transition, that will not be
     *    exited during this Transition
     */
    Transition.prototype.retained = function () {
        return common_1.map(this._treeChanges.retained, hof_1.prop('state')).map(stateSelf);
    };
    /**
     * Get the [[ViewConfig]]s associated with this Transition
     *
     * Each state can define one or more views (template/controller), which are encapsulated as `ViewConfig` objects.
     * This method fetches the `ViewConfigs` for a given path in the Transition (e.g., "to" or "entering").
     *
     * @param pathname the name of the path to fetch views for:
     *   (`'to'`, `'from'`, `'entering'`, `'exiting'`, `'retained'`)
     * @param state If provided, only returns the `ViewConfig`s for a single state in the path
     *
     * @returns a list of ViewConfig objects for the given path.
     */
    Transition.prototype.views = function (pathname, state) {
        if (pathname === void 0) { pathname = "entering"; }
        var path = this._treeChanges[pathname];
        path = !state ? path : path.filter(hof_1.propEq('state', state));
        return path.map(hof_1.prop("views")).filter(common_1.identity).reduce(common_1.unnestR, []);
    };
    /**
     * Creates a new transition that is a redirection of the current one.
     *
     * This transition can be returned from a [[TransitionService]] hook to
     * redirect a transition to a new state and/or set of parameters.
     *
     * @returns Returns a new [[Transition]] instance.
     */
    Transition.prototype.redirect = function (targetState) {
        var newOptions = common_1.extend({}, this.options(), targetState.options(), { redirectedFrom: this, source: "redirect" });
        targetState = new targetState_1.TargetState(targetState.identifier(), targetState.$state(), targetState.params(), newOptions);
        var newTransition = this.router.transitionService.create(this._treeChanges.from, targetState);
        var originalEnteringNodes = this.treeChanges().entering;
        var redirectEnteringNodes = newTransition.treeChanges().entering;
        // --- Re-use resolve data from original transition ---
        // When redirecting from a parent state to a child state where the parent parameter values haven't changed
        // (because of the redirect), the resolves fetched by the original transition are still valid in the
        // redirected transition.
        //
        // This allows you to define a redirect on a parent state which depends on an async resolve value.
        // You can wait for the resolve, then redirect to a child state based on the result.
        // The redirected transition does not have to re-fetch the resolve.
        // ---------------------------------------------------------
        var nodeIsReloading = function (reloadState) { return function (node) {
            return reloadState && node.state.includes[reloadState.name];
        }; };
        // Find any "entering" nodes in the redirect path that match the original path and aren't being reloaded
        var matchingEnteringNodes = node_1.PathNode.matching(redirectEnteringNodes, originalEnteringNodes)
            .filter(hof_1.not(nodeIsReloading(targetState.options().reloadState)));
        // Use the existing (possibly pre-resolved) resolvables for the matching entering nodes.
        matchingEnteringNodes.forEach(function (node, idx) {
            node.resolvables = originalEnteringNodes[idx].resolvables;
        });
        return newTransition;
    };
    /** @hidden If a transition doesn't exit/enter any states, returns any [[Param]] whose value changed */
    Transition.prototype._changedParams = function () {
        var _a = this._treeChanges, to = _a.to, from = _a.from;
        if (this._options.reload || common_1.tail(to).state !== common_1.tail(from).state)
            return undefined;
        var nodeSchemas = to.map(function (node) { return node.paramSchema; });
        var _b = [to, from].map(function (path) { return path.map(function (x) { return x.paramValues; }); }), toValues = _b[0], fromValues = _b[1];
        var tuples = common_1.arrayTuples(nodeSchemas, toValues, fromValues);
        return tuples.map(function (_a) {
            var schema = _a[0], toVals = _a[1], fromVals = _a[2];
            return param_1.Param.changed(schema, toVals, fromVals);
        }).reduce(common_1.unnestR, []);
    };
    /**
     * Returns true if the transition is dynamic.
     *
     * A transition is dynamic if no states are entered nor exited, but at least one dynamic parameter has changed.
     *
     * @returns true if the Transition is dynamic
     */
    Transition.prototype.dynamic = function () {
        var changes = this._changedParams();
        return !changes ? false : changes.map(function (x) { return x.dynamic; }).reduce(common_1.anyTrueR, false);
    };
    /**
     * Returns true if the transition is ignored.
     *
     * A transition is ignored if no states are entered nor exited, and no parameter values have changed.
     *
     * @returns true if the Transition is ignored.
     */
    Transition.prototype.ignored = function () {
        var changes = this._changedParams();
        return !changes ? false : changes.length === 0;
    };
    /**
     * @hidden
     */
    Transition.prototype.hookBuilder = function () {
        return new hookBuilder_1.HookBuilder(this.router.transitionService, this, {
            transition: this,
            current: this._options.current
        });
    };
    /**
     * Runs the transition
     *
     * This method is generally called from the [[StateService.transitionTo]]
     *
     * @returns a promise for a successful transition.
     */
    Transition.prototype.run = function () {
        var _this = this;
        var runSynchronousHooks = transitionHook_1.TransitionHook.runSynchronousHooks;
        var hookBuilder = this.hookBuilder();
        var globals = this.router.globals;
        globals.transitionHistory.enqueue(this);
        var syncResult = runSynchronousHooks(hookBuilder.getOnBeforeHooks());
        if (rejectFactory_1.Rejection.isTransitionRejectionPromise(syncResult)) {
            syncResult.catch(function () { return 0; }); // issue #2676
            var rejectReason = syncResult._transitionRejection;
            this._deferred.reject(rejectReason);
            return this.promise;
        }
        if (!this.valid()) {
            var error = new Error(this.error());
            this._deferred.reject(error);
            return this.promise;
        }
        if (this.ignored()) {
            trace_1.trace.traceTransitionIgnored(this);
            this._deferred.reject(rejectFactory_1.Rejection.ignored());
            return this.promise;
        }
        // When the chain is complete, then resolve or reject the deferred
        var transitionSuccess = function () {
            trace_1.trace.traceSuccess(_this.$to(), _this);
            _this.success = true;
            _this._deferred.resolve(_this.to());
            runSynchronousHooks(hookBuilder.getOnSuccessHooks(), true);
        };
        var transitionError = function (reason) {
            trace_1.trace.traceError(reason, _this);
            _this.success = false;
            _this._deferred.reject(reason);
            _this._error = reason;
            runSynchronousHooks(hookBuilder.getOnErrorHooks(), true);
        };
        trace_1.trace.traceTransitionStart(this);
        // Chain the next hook off the previous
        var appendHookToChain = function (prev, nextHook) {
            return prev.then(function () { return nextHook.invokeHook(); });
        };
        // Run the hooks, then resolve or reject the overall deferred in the .then() handler
        hookBuilder.asyncHooks()
            .reduce(appendHookToChain, syncResult)
            .then(transitionSuccess, transitionError);
        return this.promise;
    };
    /**
     * Checks if the Transition is valid
     *
     * @returns true if the Transition is valid
     */
    Transition.prototype.valid = function () {
        return !this.error() || this.success !== undefined;
    };
    /**
     * The Transition error reason.
     *
     * If the transition is invalid (and could not be run), returns the reason the transition is invalid.
     * If the transition was valid and ran, but was not successful, returns the reason the transition failed.
     *
     * @returns an error message explaining why the transition is invalid, or the reason the transition failed.
     */
    Transition.prototype.error = function () {
        var state = this.$to();
        var redirects = 0, trans = this;
        while ((trans = trans.redirectedFrom()) != null) {
            if (++redirects > 20)
                return "Too many Transition redirects (20+)";
        }
        if (state.self.abstract)
            return "Cannot transition to abstract state '" + state.name + "'";
        if (!param_1.Param.validates(state.parameters(), this.params()))
            return "Param values not valid for state '" + state.name + "'";
        if (this.success === false)
            return this._error;
    };
    /**
     * A string representation of the Transition
     *
     * @returns A string representation of the Transition
     */
    Transition.prototype.toString = function () {
        var fromStateOrName = this.from();
        var toStateOrName = this.to();
        var avoidEmptyHash = function (params) {
            return (params["#"] !== null && params["#"] !== undefined) ? params : common_1.omit(params, "#");
        };
        // (X) means the to state is invalid.
        var id = this.$id, from = predicates_1.isObject(fromStateOrName) ? fromStateOrName.name : fromStateOrName, fromParams = common_1.toJson(avoidEmptyHash(this._treeChanges.from.map(hof_1.prop('paramValues')).reduce(common_1.mergeR, {}))), toValid = this.valid() ? "" : "(X) ", to = predicates_1.isObject(toStateOrName) ? toStateOrName.name : toStateOrName, toParams = common_1.toJson(avoidEmptyHash(this.params()));
        return "Transition#" + id + "( '" + from + "'" + fromParams + " -> " + toValid + "'" + to + "'" + toParams + " )";
    };
    Transition.diToken = Transition;
    return Transition;
}());
exports.Transition = Transition;
//# sourceMappingURL=transition.js.map