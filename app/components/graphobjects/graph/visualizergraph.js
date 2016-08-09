/**
 * The graph that is used specifically for the visualization tab.
 */
angular.module('GraphModule')
    .factory('VisualizerGraph', ['Graph', function (Graph) {
    	class VisualizerGraph extends Graph.Graph {
            constructor(svg, nodes, links, dataSource, children_struct, ancestors_struct) {
                super(svg, nodes, links);
                var thisGraph = this;

                //holds current transitions that are occuring
                thisGraph.state.transition = [];
                //Min distance between nodes when spawning randomly
                thisGraph.consts.edge_buffer = 200;
                //Size reduction as you go through levels in nodes
                thisGraph.consts.radiusDecay = 1;
                //Css class for nodes that are containers
                thisGraph.consts.containerClass = 'container';

                //dataSource holds the server data and methods for
                //converting it to data for this graph
                thisGraph.dataSource = dataSource;
                //Hierarchy of children for nodes
                thisGraph.children_struct = children_struct;
                //Hierarchy of ancestors for nodes
                thisGraph.ancestors_struct = ancestors_struct;

                
                //Drag behavior for nodes
                var drag = d3.behavior.drag()
                    .origin(function(d){
                       return {x: d.x, y: d.y};
                    })
                    .on("dragstart", function() {
                    })
                    .on("drag", function(args){
                    	d3.select( this).attr("transform", function( d, i) {
                            d.x += d3.event.dx;
                            d.y += d3.event.dy;
                            return "translate(" + [ d.x,d.y ] + ")"
                        })
                        thisGraph.updateGraph();	
                    })
                    .on("dragend", function() {
                    });

                thisGraph.drag = drag;

                //Pan and Zoom behavior for the graph
                var zoom = d3.behavior.zoom()
                    .on("zoom", function(){
                        if (d3.event.sourceEvent != null && d3.event.sourceEvent.ctrlKey){
                            // TODO  the internal d3 state is still changing
                            return false;
                        } else{
                            thisGraph.zoomed.call(thisGraph);
                        }
                        return true;
                    })
                    .on("zoomstart", function(d, i){
                    });
                thisGraph.dragSvg = zoom;

                thisGraph.svg.call(zoom).on("dblclick.zoom", null);
            }


            //Called when the graph has a zoom action
            zoomed(translate, scale){
                var thisGraph = this;
                if (thisGraph.state.rightClick == true) {
                    return;
                }
                this.state.justScaleTransGraph = true;
                if (translate != null && scale != null) {
                    var zoom = thisGraph.dragSvg;
                    zoom.scale(scale);
                    zoom.translate(translate);
                    //creating names to prevent transition conflicts
                    var zoomSetCallback = function() {
                    	zoom.scale(scale);
                    	zoom.translate(translate);
                    }
                    var translate_name = "zoom" + translate;
                    d3.select("." + this.consts.graphClass).transition(translate_name).delay(100).duration(750)
                        .attr('transform', 'translate(' + zoom.translate() + ') scale(' + zoom.scale() + ')').each("end", zoomSetCallback);
                    return;
                } 
                if (thisGraph.state.canZoom) {
                    d3.select("." + this.consts.graphClass)
                        .attr("transform", "translate(" + thisGraph.dragSvg.translate() + ") scale(" +thisGraph.dragSvg.scale() + ")"); 
                }
            };

            //Called when window resizes
            onWindowResize(svg) {
                var thisGraph = this;
                var docEl = document.documentElement,
                    bodyEl = document.getElementsByTagName('body')[0];
                var offset = $('#visualization-graph').offset();
                var divWidth = $('#visualization-graph').width();
                var divHeight = $('#visualization-graph').height();
                var height = bodyEl.clientHeight;
                svg.attr("width", divWidth).attr("height", height - offset.top - 20);

            };

            //Called when the server sends update weights for the links
            updateLinkData() {
                var thisGraph = this;
                var node_names_set = [];
                for (var i = 0; i < thisGraph.nodes.length; i++) {
                    node_names_set.push(thisGraph.nodes[i].id)
                }
                var retData = thisGraph.dataSource.getFlowBetweenSet(node_names_set);
                var linkData = retData.linkData;
                thisGraph.links = thisGraph.dataSource.processLinkData(linkData, thisGraph.nodes);
                this.initNodes();
                this.initLinks();
                thisGraph.updateGraph();
            }

            
        }

        return {
            Graph: VisualizerGraph
        }
}]);



