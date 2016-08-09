/**
 * The link that is used specifically for the visualization tab.
 */
angular.module('LinkModule')
    .factory('VisualizerLink', ['Link', function (Link) {
		class VisualizerLink extends Link.Link {
		    constructor(sourceNode, targetNode, weight) {
		        super(sourceNode, targetNode);
		        this.weight = weight;
		        //Count is used to keep track of how many
		        //paths to its subnodes there are
		        //in order to calculate average traffic
		        this.count = 1;
		    }

		    increaseCount() {
		        this.count += 1;
		    }

		    getMidpoint() {
		    	var ret;
		    	var d = this;
		    	var dx = (d.target.x - d.source.x) / 2,
		            dy = (d.target.y - d.source.y) / 2;
		    	if (d.source.x < d.target.x) {
	    			ret = {
                        my: 'top center',
                        at: 'center center', // at the bottom right of...
                        // target: $(thisPath) // my target
                        target: [dx, dy],
                        adjust: {
                        	y: 10
                        }
                    }
		    	} else {
	    			ret = {
                        my: 'bottom center',
                        at: 'center center', // at the bottom right of...
                        // target: $(thisPath) // my target
                        target: [dx, dy],
                        adjust: {
                        	y: -10
                        }
                    }
		    	}
		    	return ret;
		    	
		    }

		    //Called when the link is added to the graph
			initialize(graph) {
				if (this.initialized == false) {
					super.initialize(graph);
					var state = graph.state.VisualizerLink;
					if (state == null) {
						state = graph.state.VisualizerLink = {};
						state.maxWeight = null;
						state.useAvgWeight = true;
					}
					this.updateMaxWeight();
				}
			}

			//Sets whether the graph should use avg weight
			setUseAvgWeight(val) {
		        this.graph.state.VisualizerLink.useAvgWeight = !!val;
		    }

		    //Sets the weight of this link
		    setWeight(weight) {
		        this.weight = weight;
		    }

		    //Gets the actual weight value of the link
		    getRawWeight() {
		        return this.weight; 
		    }

		    //Gets the weight value of the link, depending on the
		    //useAvgWeight setting
		    getWeight() {
		        var thisGraph = this.graph,
		            state = thisGraph.state.VisualizerLink;

		        if (state.useAvgWeight) {
		            var weight = this.weight / this.count;
		            return weight;
		        }
		        return this.weight;
		    }

		    //updates the max weight of the graph
		    updateMaxWeight () {
		        var thisGraph = this.graph,
		            state = thisGraph.state.VisualizerLink;

		        var maxLink = _.maxBy(thisGraph.links, function(l) {
		        	if (l.graph != null) {
						return l.getWeight();
		        	}
		        	return 0;
		        });
		        state.maxWeight = maxLink.getWeight();
		    }

			//Called during the update graph for existing links
			updateAttr(d3path, d) {
		        var thisGraph = this.graph,
		            state = thisGraph.state.VisualizerLink;
		        this.updateMaxWeight();
	            var colorScale = d3.scale.linear()
	                .domain([0, state.maxWeight])
	                .range(["#ffb366", "#F92606"]);
	            state.colorScale = colorScale;
				d3path.style('marker-end', 'url(#end-arrow)')
		            .classed(thisGraph.consts.selectedClass, function(d){
		                return d === state.selectedEdge;
		            })
		            .attr("d", this.arrowPath.call(d))
		            .transition("existingPathTransition")
		            .duration(750)
		            .attr("stroke", function(d){
		                var c = colorScale(d.getWeight());
		                return c;
		            });
			}

			//Called during the first update graph for a link
			newPathAttr(d3path, d) {
		        var thisGraph = this.graph,
		            state = thisGraph.state.VisualizerLink;
	            this.updateMaxWeight();
	            var colorScale = d3.scale.linear()
	                .domain([0, state.maxWeight])
	                .range(["#ffb366", "#F92606"]);
	                
				d3path.transition("newPathTransition")
		            .duration(750)
		            .attrTween("opacity", function(d) {
		                return d3.interpolateString(0,1);
		            })
		            .attr("stroke", function(d){
		                var c = colorScale(d.getWeight());
		                return c;
		            })
		            .attr('d', this.arrowPath.call(d));
			}

		}

		return {
			Link : VisualizerLink
		}
}]);





