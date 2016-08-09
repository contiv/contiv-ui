/**
 * The base class for link objects for the graph.
 * Supports policies.
 * 
 * To write your own link object, create a new factory that uses the link
 * you want to inherit as a dependency, and extend its link class. 
 * Return the class object with Link as key
 *
 * 
 */
angular.module('LinkModule')
    .factory('Link', [function () {
    	class Link {
			constructor(sourceNode, targetNode) {
				this.source = sourceNode;
				this.target = targetNode;
				this.policy = null;
				this.hasPolicy = false;
				this.pathPolicies = [];
				this.graph = null;
				this.initialized = false;
			}

			//Called when a link is added to the graph
			initialize(graph) {
				if (this.initialized == false) {
					this.initialized = true;
					this.graph = graph;
				}
			}

			//Called during the update graph for existing links
			updateAttr(d3path) {
				d3path.style('marker-end', 'url(#end-arrow)')
		            .attr("d", arrowPath);
			}

			//Called during the first update graph for a link
			newPathAttr(d3path) {
				d3path.attr('d', arrowPath);
			}

			//Arrow path logic
		    arrowPath() {
		    	var d = this;
		        var dx = d.target.x - d.source.x,
		            dy = d.target.y - d.source.y,
		            dr = Math.sqrt(dx * dx + dy * dy);
		        return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
		    }



		    //Used to install policies that are called when this link
		    //has a mouse event
			installPathPolicy(policy) {
				this.pathPolicies.push(policy);
				policy.initialize(this.graph);
			}

			//Used to uninstall policy for this link
			uninstallPathPolicy(policyRemove) {
				var policyRemoveName;
				if (typeof policyRemove === 'string') {
					policyRemoveName = policyRemove;
				} else {
					policyRemoveName = policyRemove.policyName;
				}
				_(thisGraph.pathPolicies).forEach(function(policy, index) {
					if (policy.policyName === policyRemoveName) {
						thisGraph.pathPolicies.splice(index, 1);
					}
				});
			}

			//called when there is a mouse event for this path
			pathPolicyEvent(event, d3path, d) {
				var thisGraph = this;
				_(d.pathPolicies).forEach(function(policy) {
					policy[event](d3node, d);
				})
			}
		}
		return {
			Link: Link,
		}
}]);






