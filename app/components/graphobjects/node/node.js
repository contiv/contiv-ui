/**
 * The base class for node objects for the graph.
 * Supports policies.
 * 
 * To write your own Node object, create a new factory that uses the node
 * you want to inherit as a dependency, and extend its node class. 
 * Return the class object with Node as key
 * 
 */
angular.module('NodeModule')
    .factory('Node', [function () {

		class Node {
			constructor(x, y, id, text, radius) {
				this.x = x;
				this.y = y;
				this.radius = radius,
				this.id = id;
				this.text = text;
				this.radius = radius;
				this.hasPolicy = false;
				this.policy = null;
				this.nodePolicies = [];
				this.graph = null;
				this.initialized = false;
			}

			//Called when a node is added to the graph
			initialize(graph) {
				if (this.initialized == false) {
					this.initialized = true;
					this.graph = graph;
				}
			}

			//Called during the update graph for existing nodes
			updateAttr(d3node, d) {
				d3node.attr("transform", function(d){return "translate(" + d.x + "," + d.y + ")";});
			}

			//Called during the first update graph for a node
			//Hook for sub classes
			newNodeAttr(d3node, d) {
			}

			//sets the radius of the node
			setRadius(radius) {
				this.radius = radius;
			}

			//Used to install policies that are called when this node
		    //has a mouse event
			installNodePolicy(policy) {
				this.nodePolicies.push(policy);
				policy.initialize(this.graph);
			}

			//Used to uninstall policy for this link
			uninstallNodePolicy(policyRemove) {
				var policyRemoveName;
				if (typeof policyRemove === 'string') {
					policyRemoveName = policyRemove;
				} else {
					policyRemoveName = policyRemove.policyName;
				}
				_(this.nodePolicies).forEach(function(policy, index) {
					if (policy.policyName === policyRemoveName) {
						this.nodePolicies.splice(index, 1);
					}
				});
			}

			//Called when there is a mouse event for this node
			nodePolicyEvent(event, d3node, d) {
				_.forEach(this.nodePolicies, function(policy) {
					policy[event](d3node, d);
				});
			}
		}
		return {
			Node: Node
		}
}]);







