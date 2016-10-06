"use strict";
/**
 * UI-Router Transition Tracing
 *
 * Enable transition tracing to print transition information to the console, in order to help debug your application.
 * Tracing logs detailed information about each Transition to your console.
 *
 * To enable tracing, import the [[trace]] singleton and enable one or more categories.
 *
 * ES6
 * ```
 *
 * import {trace} from "ui-router-ng2"; // or "angular-ui-router"
 * trace.enable(1, 5); // TRANSITION and VIEWCONFIG
 * ```
 *
 * CJS
 * ```
 *
 * let trace = require("angular-ui-router").trace; // or "ui-router-ng2"
 * trace.enable("TRANSITION", "VIEWCONFIG");
 * ```
 *
 * Globals
 * ```
 *
 * let trace = window["angular-ui-router"].trace; // or "ui-router-ng2"
 * trace.enable(); // Trace everything (very verbose)
 * ```
 *
 * @module trace
 */ /** for typedoc */
var hof_1 = require("../common/hof");
var predicates_1 = require("../common/predicates");
var strings_1 = require("./strings");
/** @hidden */
function uiViewString(viewData) {
    if (!viewData)
        return 'ui-view (defunct)';
    return ("[ui-view#" + viewData.id + " tag ") +
        ("in template from '" + (viewData.creationContext && viewData.creationContext.name || '(root)') + "' state]: ") +
        ("fqn: '" + viewData.fqn + "', ") +
        ("name: '" + viewData.name + "@" + viewData.creationContext + "')");
}
/** @hidden */
var viewConfigString = function (viewConfig) {
    return ("[ViewConfig#" + viewConfig.$id + " from '" + (viewConfig.viewDecl.$context.name || '(root)') + "' state]: target ui-view: '" + viewConfig.viewDecl.$uiViewName + "@" + viewConfig.viewDecl.$uiViewContextAnchor + "'");
};
/** @hidden */
function normalizedCat(input) {
    return predicates_1.isNumber(input) ? Category[input] : Category[Category[input]];
}
/**
 * Trace categories
 *
 * [[Trace.enable]] or [[Trace.disable]] a category
 *
 * `trace.enable(Category.TRANSITION)`
 *
 * These can also be provided using a matching string, or position ordinal
 *
 * `trace.enable("TRANSITION")`
 *
 * `trace.enable(1)`
 */
(function (Category) {
    Category[Category["RESOLVE"] = 0] = "RESOLVE";
    Category[Category["TRANSITION"] = 1] = "TRANSITION";
    Category[Category["HOOK"] = 2] = "HOOK";
    Category[Category["UIVIEW"] = 3] = "UIVIEW";
    Category[Category["VIEWCONFIG"] = 4] = "VIEWCONFIG";
})(exports.Category || (exports.Category = {}));
var Category = exports.Category;
/**
 * Prints UI-Router Transition trace information to the console.
 */
var Trace = (function () {
    function Trace() {
        /** @hidden */
        this._enabled = {};
        this.approximateDigests = 0;
    }
    /** @hidden */
    Trace.prototype._set = function (enabled, categories) {
        var _this = this;
        if (!categories.length) {
            categories = Object.keys(Category)
                .map(function (k) { return parseInt(k, 10); })
                .filter(function (k) { return !isNaN(k); })
                .map(function (key) { return Category[key]; });
        }
        categories.map(normalizedCat).forEach(function (category) { return _this._enabled[category] = enabled; });
    };
    /**
     * Enables a trace [[Category]]
     *
     * ```
     * trace.enable("TRANSITION");
     * ```
     *
     * @param categories categories to enable. If `categories` is omitted, all categories are enabled.
     *        Also takes strings (category name) or ordinal (category position)
     */
    Trace.prototype.enable = function () {
        var categories = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            categories[_i - 0] = arguments[_i];
        }
        this._set(true, categories);
    };
    /**
     * Disables a trace [[Category]]
     *
     * ```
     * trace.disable("VIEWCONFIG");
     * ```
     *
     * @param categories categories to disable. If `categories` is omitted, all categories are disabled.
     *        Also takes strings (category name) or ordinal (category position)
     */
    Trace.prototype.disable = function () {
        var categories = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            categories[_i - 0] = arguments[_i];
        }
        this._set(false, categories);
    };
    /**
     * Retrieves the enabled stateus of a [[Category]]
     *
     * ```
     * trace.enabled("VIEWCONFIG"); // true or false
     * ```
     *
     * @returns boolean true if the category is enabled
     */
    Trace.prototype.enabled = function (category) {
        return !!this._enabled[normalizedCat(category)];
    };
    /** called by ui-router code */
    Trace.prototype.traceTransitionStart = function (transition) {
        if (!this.enabled(Category.TRANSITION))
            return;
        var tid = transition.$id, digest = this.approximateDigests, transitionStr = strings_1.stringify(transition);
        console.log("Transition #" + tid + " Digest #" + digest + ": Started  -> " + transitionStr);
    };
    /** called by ui-router code */
    Trace.prototype.traceTransitionIgnored = function (trans) {
        if (!this.enabled(Category.TRANSITION))
            return;
        var tid = trans && trans.$id, digest = this.approximateDigests, transitionStr = strings_1.stringify(trans);
        console.log("Transition #" + tid + " Digest #" + digest + ": Ignored  <> " + transitionStr);
    };
    /** called by ui-router code */
    Trace.prototype.traceHookInvocation = function (step, options) {
        if (!this.enabled(Category.HOOK))
            return;
        var tid = hof_1.parse("transition.$id")(options), digest = this.approximateDigests, event = hof_1.parse("traceData.hookType")(options) || "internal", context = hof_1.parse("traceData.context.state.name")(options) || hof_1.parse("traceData.context")(options) || "unknown", name = strings_1.functionToString(step.eventHook.callback);
        console.log("Transition #" + tid + " Digest #" + digest + ":   Hook -> " + event + " context: " + context + ", " + strings_1.maxLength(200, name));
    };
    /** called by ui-router code */
    Trace.prototype.traceHookResult = function (hookResult, transitionOptions) {
        if (!this.enabled(Category.HOOK))
            return;
        var tid = hof_1.parse("transition.$id")(transitionOptions), digest = this.approximateDigests, hookResultStr = strings_1.stringify(hookResult);
        console.log("Transition #" + tid + " Digest #" + digest + ":   <- Hook returned: " + strings_1.maxLength(200, hookResultStr));
    };
    /** called by ui-router code */
    Trace.prototype.traceResolvePath = function (path, when, trans) {
        if (!this.enabled(Category.RESOLVE))
            return;
        var tid = trans && trans.$id, digest = this.approximateDigests, pathStr = path && path.toString();
        console.log("Transition #" + tid + " Digest #" + digest + ":         Resolving " + pathStr + " (" + when + ")");
    };
    /** called by ui-router code */
    Trace.prototype.traceResolvableResolved = function (resolvable, trans) {
        if (!this.enabled(Category.RESOLVE))
            return;
        var tid = trans && trans.$id, digest = this.approximateDigests, resolvableStr = resolvable && resolvable.toString(), result = strings_1.stringify(resolvable.data);
        console.log("Transition #" + tid + " Digest #" + digest + ":               <- Resolved  " + resolvableStr + " to: " + strings_1.maxLength(200, result));
    };
    /** called by ui-router code */
    Trace.prototype.traceError = function (reason, trans) {
        if (!this.enabled(Category.TRANSITION))
            return;
        var tid = trans && trans.$id, digest = this.approximateDigests, transitionStr = strings_1.stringify(trans);
        console.log("Transition #" + tid + " Digest #" + digest + ": <- Rejected " + transitionStr + ", reason: " + reason);
    };
    /** called by ui-router code */
    Trace.prototype.traceSuccess = function (finalState, trans) {
        if (!this.enabled(Category.TRANSITION))
            return;
        var tid = trans && trans.$id, digest = this.approximateDigests, state = finalState.name, transitionStr = strings_1.stringify(trans);
        console.log("Transition #" + tid + " Digest #" + digest + ": <- Success  " + transitionStr + ", final state: " + state);
    };
    /** called by ui-router code */
    Trace.prototype.traceUIViewEvent = function (event, viewData, extra) {
        if (extra === void 0) { extra = ""; }
        if (!this.enabled(Category.UIVIEW))
            return;
        console.log("ui-view: " + strings_1.padString(30, event) + " " + uiViewString(viewData) + extra);
    };
    /** called by ui-router code */
    Trace.prototype.traceUIViewConfigUpdated = function (viewData, context) {
        if (!this.enabled(Category.UIVIEW))
            return;
        this.traceUIViewEvent("Updating", viewData, " with ViewConfig from context='" + context + "'");
    };
    /** called by ui-router code */
    Trace.prototype.traceUIViewFill = function (viewData, html) {
        if (!this.enabled(Category.UIVIEW))
            return;
        this.traceUIViewEvent("Fill", viewData, " with: " + strings_1.maxLength(200, html));
    };
    /** called by ui-router code */
    Trace.prototype.traceViewServiceEvent = function (event, viewConfig) {
        if (!this.enabled(Category.VIEWCONFIG))
            return;
        console.log("VIEWCONFIG: " + event + " " + viewConfigString(viewConfig));
    };
    /** called by ui-router code */
    Trace.prototype.traceViewServiceUIViewEvent = function (event, viewData) {
        if (!this.enabled(Category.VIEWCONFIG))
            return;
        console.log("VIEWCONFIG: " + event + " " + uiViewString(viewData));
    };
    return Trace;
}());
exports.Trace = Trace;
/**
 * The [[Trace]] singleton
 *
 * @example
 * ```js
 *
 * import {trace} from "angular-ui-router";
 * trace.enable(1, 5);
 * ```
 */
var trace = new Trace();
exports.trace = trace;
//# sourceMappingURL=trace.js.map