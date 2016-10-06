"use strict";
var coreservices_1 = require("../../common/coreservices");
var services_1 = require("../services");
var resolveContext_1 = require("../../resolve/resolveContext");
var common_1 = require("../../common/common");
/**
 * This is a [[StateBuilder.builder]] function for angular1 `onEnter`, `onExit`,
 * `onRetain` callback hooks on a [[Ng1StateDeclaration]].
 *
 * When the [[StateBuilder]] builds a [[State]] object from a raw [[StateDeclaration]], this builder
 * ensures that those hooks are injectable for angular-ui-router (ng1).
 */
exports.getStateHookBuilder = function (hookName) {
    return function stateHookBuilder(state, parentFn) {
        var hook = state[hookName];
        function decoratedNg1Hook(trans, state) {
            var resolveContext = new resolveContext_1.ResolveContext(trans.treeChanges().to);
            return coreservices_1.services.$injector.invoke(hook, this, common_1.extend({ $state$: state }, services_1.getLocals(resolveContext)));
        }
        return hook ? decoratedNg1Hook : undefined;
    };
};
//# sourceMappingURL=onEnterExitRetain.js.map