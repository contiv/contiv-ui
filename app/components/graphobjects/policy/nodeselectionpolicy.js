/**
 * This policy is used to add a select node feature.
 * Supports selecting multiple nodes by using the ctrl key.
 */
angular.module('PolicyModule')
    .factory('NodeSelectionPolicy', ['Policy', function (Policy) {

    	class NodeSelectionPolicy extends Policy.Policy {
            constructor() {
                super("NodeSelectionPolicy");
            }

            /**
             * Called when first installed
             * Overwrites the on drag event of the graph
             * 
             * @param      {Graph}  graph   The graph it is 
    		 *                              installed on
    		 */
            initialize(graph) {
                if (this.initialized) {
                    return;
                }
                super.initialize(graph);
                var state = graph.state.NodeSelectionPolicy = {};
                state.selectedNodes = [];
                var consts = graph.consts.NodeSelectionPolicy = {};
                consts.selectedClass = "selected";
                //overwritting graph's node on drag event to support
                //moving multiple nodes at once
                var drag = graph.drag;
                drag.on('drag', function(args) {
                	var thisGraph = graph;
                	if (thisGraph.consts.NodeSelectionPolicy != null) {
                		var selectedClass = thisGraph.consts.NodeSelectionPolicy.selectedClass;
                		var selection = d3.selectAll( '.' +selectedClass);

                        if( selection[0].indexOf( this)==-1) {
                            selection.classed(selectedClass, false);
                            selection = d3.select( this);
                            selection.classed(selectedClass, true);
                        } 

                        selection.attr("transform", function( d, i) {
                            d.x += d3.event.dx;
                            d.y += d3.event.dy;
                            return "translate(" + [ d.x,d.y ] + ")"
                        })
                        thisGraph.updateGraph();
                	}

                })
            }

            addSelectNode(d3Node, nodeData) {
                var thisGraph = this.graph,
                    state = thisGraph.state.NodeSelectionPolicy,
                    consts = thisGraph.consts.NodeSelectionPolicy;

                d3Node.classed(consts.selectedClass, true);
                state.selectedNodes.push(nodeData);
            }

            removeSelectFromNode(d3Node, nodeData) {
                var thisGraph = this.graph,
                    state = thisGraph.state.NodeSelectionPolicy,
                    consts = thisGraph.consts.NodeSelectionPolicy;

                thisGraph.circles.filter(function(cd) {
                    return cd.id === nodeData.id;
                }).classed(consts.selectedClass, false);
                var index = state.selectedNodes.indexOf(nodeData);
                state.selectedNodes.splice(index, 1);
            }

            removeAllSelectedNodes() {
                var thisGraph = this.graph,
                    state = thisGraph.state.NodeSelectionPolicy,
                    consts = thisGraph.consts.NodeSelectionPolicy;

                thisGraph.circles.classed(consts.selectedClass, false);
                state.selectedNodes = [];
            }

            mousedown(d3node, d) {
                var thisGraph = this.graph,
                    state = thisGraph.state.NodeSelectionPolicy,
                    consts = thisGraph.consts.NodeSelectionPolicy;
                d3.event.stopPropagation();
                if (d3.event.ctrlKey) {
                    if (state.selectedNodes.indexOf(d) > -1) {
                        this.removeSelectFromNode(d3node, d);
                    } else {
                        this.addSelectNode(d3node, d);
                    }
                } else if (state.selectedNodes.indexOf(d) == -1) {
                    //if no control key, and clicked not selected node,
                    //remove all of current selection
                    this.removeAllSelectedNodes();
                }
            }

            mouseup(d3node, d) {
                var thisGraph = this.graph,
                    state = thisGraph.state.NodeSelectionPolicy,
                    consts = thisGraph.consts.NodeSelectionPolicy;
                if (!d3.event.ctrlKey) {
                    //if length is greater than 1, then we are moving multiple nodes
                    //leave them all highlighted
                    //otherwise we are just moving one node, so unhighlight
                    if (state.selectedNodes.length <= 1) {
                        this.removeSelectFromNode(d3node, d);
                    }
                }
                return;
            }
        }
        return {
            Policy: NodeSelectionPolicy,
        }
}]);







