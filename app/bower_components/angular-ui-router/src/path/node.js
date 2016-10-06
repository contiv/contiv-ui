"use strict";
/** @module path */ /** for typedoc */
var common_1 = require("../common/common");
var hof_1 = require("../common/hof");
var param_1 = require("../params/param");
/**
 * A node in a [[TreeChanges]] path
 *
 * For a [[TreeChanges]] path, this class holds the stateful information for a single node in the path.
 * Each PathNode corresponds to a state being entered, exited, or retained.
 * The stateful information includes parameter values and resolve data.
 */
var PathNode = (function () {
    function PathNode(stateOrPath) {
        if (stateOrPath instanceof PathNode) {
            var node = stateOrPath;
            this.state = node.state;
            this.paramSchema = node.paramSchema.slice();
            this.paramValues = common_1.extend({}, node.paramValues);
            this.resolvables = node.resolvables.slice();
            this.views = node.views && node.views.slice();
        }
        else {
            var state = stateOrPath;
            this.state = state;
            this.paramSchema = state.parameters({ inherit: false });
            this.paramValues = {};
            this.resolvables = state.resolvables.map(function (res) { return res.clone(); });
        }
    }
    /** Sets [[paramValues]] for the node, from the values of an object hash */
    PathNode.prototype.applyRawParams = function (params) {
        var getParamVal = function (paramDef) { return [paramDef.id, paramDef.value(params[paramDef.id])]; };
        this.paramValues = this.paramSchema.reduce(function (memo, pDef) { return common_1.applyPairs(memo, getParamVal(pDef)); }, {});
        return this;
    };
    /** Gets a specific [[Param]] metadata that belongs to the node */
    PathNode.prototype.parameter = function (name) {
        return common_1.find(this.paramSchema, hof_1.propEq("id", name));
    };
    /**
     * @returns true if the state and parameter values for another PathNode are
     * equal to the state and param values for this PathNode
     */
    PathNode.prototype.equals = function (node, keys) {
        var _this = this;
        if (keys === void 0) { keys = this.paramSchema.map(function (p) { return p.id; }); }
        var paramValsEq = function (key) {
            return _this.parameter(key).type.equals(_this.paramValues[key], node.paramValues[key]);
        };
        return this.state === node.state && keys.map(paramValsEq).reduce(common_1.allTrueR, true);
    };
    /** Returns a clone of the PathNode */
    PathNode.clone = function (node) {
        return new PathNode(node);
    };
    /**
     * Returns a new path which is a subpath of the first path which matched the second path.
     *
     * The new path starts from root and contains any nodes that match the nodes in the second path.
     * Nodes are compared using their state property and parameter values.
     *
     * @param pathA the first path
     * @param pathB the second path
     * @param ignoreDynamicParams don't compare dynamic parameter values
     */
    PathNode.matching = function (pathA, pathB, ignoreDynamicParams) {
        if (ignoreDynamicParams === void 0) { ignoreDynamicParams = true; }
        var matching = [];
        for (var i = 0; i < pathA.length && i < pathB.length; i++) {
            var a = pathA[i], b = pathB[i];
            if (a.state !== b.state)
                break;
            var changedParams = param_1.Param.changed(a.paramSchema, a.paramValues, b.paramValues)
                .filter(function (param) { return !(ignoreDynamicParams && param.dynamic); });
            if (changedParams.length)
                break;
            matching.push(a);
        }
        return matching;
    };
    return PathNode;
}());
exports.PathNode = PathNode;
//# sourceMappingURL=node.js.map