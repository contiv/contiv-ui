/**
 * The node that is used specifically for the visualization tab.
 */
angular.module('NodeModule')
    .factory('VisualizerNode', ['Node', function (Node) {

		class VisualizerNode extends Node.Node {
		    constructor(x, y, id, text, radius, parent, ancestors, 
		    	xStart, yStart) {
		        super(x, y, id, text, radius);
		        this.parent = parent;
		        this.ancestors = ancestors;
		        this.xStart = xStart || x;
		        this.yStart = yStart || y;
		    }

			/**
			 * Called during the first update graph for a node
			 *
			 * @param      {D3Object}  d3node  The d3 node
			 * @param      {Object}    d       The matching data object
			 */
			newNodeAttr(d3node, d) {
				var thisGraph = this.graph;
				if (thisGraph.consts.containerClass != null &&
						thisGraph.children_struct[d.id] == null) {
					d3node.classed(thisGraph.consts.containerClass, true);
				}
				d3node.transition("nodePositionTransition")
		                .duration(750)
		                .attrTween("transform", function(d) {
		                    if (d.xStart != null && d.yStart != null) {
		                        var xStart = d.xStart;
		                        var yStart = d.yStart;
		                        d.xStart = d.x;
		                        d.yStart = d.y;
		                        var zoom = thisGraph.dragSvg;
		                        return d3.interpolateString("translate(" + xStart + "," + yStart + ")", "translate(" + d.x + "," + d.y + ")");
		                    }
		                    return d3.interpolateString("translate(" + d.x + "," + d.y + ")", "translate(" + d.x + "," + d.y + ")");
		                });
			}
		}

		return {
			Node: VisualizerNode,
		}

}]);








