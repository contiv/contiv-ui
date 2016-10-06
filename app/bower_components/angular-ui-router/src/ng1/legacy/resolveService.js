"use strict";
/** @module ng1 */ /** */
var stateObject_1 = require("../../state/stateObject");
var node_1 = require("../../path/node");
var resolveContext_1 = require("../../resolve/resolveContext");
var common_1 = require("../../common/common");
var stateBuilder_1 = require("../../state/stateBuilder");
/**
 * Implementation of the legacy `$resolve` service for angular 1.
 */
var $resolve = {
    /**
     * Asynchronously injects a resolve block.
     *
     * This emulates most of the behavior of the ui-router 0.2.x $resolve.resolve() service API.
     *
     * Given an object `invocables`, where keys are strings and values are injectable functions,
     * injects each function, and waits for the resulting promise to resolve.
     * When all resulting promises are resolved, returns the results as an object.
     *
     * @example
     * ```js
     *
     * let invocables = {
     *   foo: [ '$http', ($http) =>
     *            $http.get('/api/foo').then(resp => resp.data) ],
     *   bar: [ 'foo', '$http', (foo, $http) =>
     *            $http.get('/api/bar/' + foo.barId).then(resp => resp.data) ]
     * }
     * $resolve.resolve(invocables)
     *     .then(results => console.log(results.foo, results.bar))
     * // Logs foo and bar:
     * // { id: 123, barId: 456, fooData: 'foo data' }
     * // { id: 456, barData: 'bar data' }
     * ```
     *
     * @param invocables an object which looks like an [[StateDefinition.resolve]] object; keys are resolve names and values are injectable functions
     * @param locals key/value pre-resolved data (locals)
     * @param parent a promise for a "parent resolve"
     */
    resolve: function (invocables, locals, parent) {
        if (locals === void 0) { locals = {}; }
        var parentNode = new node_1.PathNode(new stateObject_1.State({ params: {}, resolvables: [] }));
        var node = new node_1.PathNode(new stateObject_1.State({ params: {}, resolvables: [] }));
        var context = new resolveContext_1.ResolveContext([parentNode, node]);
        context.addResolvables(stateBuilder_1.resolvablesBuilder({ resolve: invocables }), node.state);
        var resolveData = function (parentLocals) {
            var rewrap = function (_locals) { return stateBuilder_1.resolvablesBuilder({ resolve: common_1.mapObj(_locals, function (local) { return function () { return local; }; }) }); };
            context.addResolvables(rewrap(parentLocals), parentNode.state);
            context.addResolvables(rewrap(locals), node.state);
            var tuples2ObjR = function (acc, tuple) {
                acc[tuple.token] = tuple.value;
                return acc;
            };
            return context.resolvePath().then(function (results) { return results.reduce(tuples2ObjR, {}); });
        };
        return parent ? parent.then(resolveData) : resolveData({});
    }
};
/** @hidden */
exports.resolveFactory = function () { return $resolve; };
//# sourceMappingURL=resolveService.js.map