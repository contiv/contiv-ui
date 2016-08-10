'use strict';

/**
 * Defining the Data Module.
 * See datasource.js for the base data source class and 
 * more info on DataSource.
 */
angular.module('DataModule', ['NodeModule', 'LinkModule']);
'use strict';

/**
 * Defining the graph module.
 * See graph.js for the base graph class and more info on graphs.
 */
angular.module('GraphModule', ['PolicyModule']);
'use strict';

/**
 * Defining the Link Module.
 * See link.js for the base link class and more info on links.
 */
angular.module('LinkModule', []);
'use strict';

/**
 * Defining the Node Module.
 * See node.js for the base node class and more info on nodes.
 */
angular.module('NodeModule', []);
'use strict';

/**
 * Defining the Policy Module.
 * See policy.js for the base policy class and 
 * info on how policies work.
 */
angular.module('PolicyModule', ['NodeModule', 'LinkModule']);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The base class the DataSource object.
 * 
 * The DataSource object takes in node and link data from the server, 
 * and provides methods for converting and manipulating the data for
 * the graph object.
 * 
 * To write your own DataSource object, create a new factory that uses the DataSource
 * you want to inherit as a dependency, and extend its DataSource class. 
 * Return the class object with DataSource as key.
 * 
 */
angular.module('DataModule').factory('DataSource', ['VisualizerNode', 'VisualizerLink', function (VisualizerNode, VisualizerLink) {
	var DataSource = function () {
		function DataSource(nodes, links, children_struct, ancestors_struct, endpoints, providers, labels, selectors) {
			_classCallCheck(this, DataSource);

			this.nodes = nodes;
			this.links = links;
			this.children_struct = children_struct;
			this.ancestors_struct = ancestors_struct;
			this.endpoints = endpoints;
			this.providers = providers;
			this.labels = labels;
			this.selectors = selectors;
		}

		_createClass(DataSource, [{
			key: 'updateNodes',
			value: function updateNodes(nodes) {
				this.nodes = nodes;
			}
		}, {
			key: 'updateLinks',
			value: function updateLinks(links) {
				this.links = links;
			}
		}, {
			key: 'nodeIdToName',
			value: function nodeIdToName(id) {
				var nodes = this.nodes;
				for (var i = 0; i < nodes.length; i++) {
					if (nodes[i].id == id) {
						return nodes[i].name;
					}
				}
			}

			/**
    * Given a set of nodes, returns the node
    * that matches the id
    *
    * @param      {string} id      The identifier
    * @param      {Array}  nodes   The nodes
    * @return     {Node}   The node with the matching id
    */

		}, {
			key: 'findNodeById',
			value: function findNodeById(id, nodes) {
				for (var i = 0; i < nodes.length; i++) {
					if (id == nodes[i].id) {
						return nodes[i];
					}
				}
			}
		}, {
			key: 'setAncestors',


			/**
    * Sets the parent and ancestors attribute using 
    * ancestors_struct for all the nodes
    * Also adds any nodes without ancestors, that aren't 
    * toplevel to the client service.
    */
			value: function setAncestors() {
				var thisDataSource = this;
				var addedClient = false;
				_.forEach(thisDataSource.nodes, function (node) {
					node.ancestors = thisDataSource.ancestors_struct[node.id] || [];
					if (_.isEmpty(node.ancestors) === false) {
						node.parent = node.ancestors[0];
					} else {
						if (_.includes(thisDataSource.children_struct.topLevel, node.id) == false) {
							//container has no parent
							//adding to client
							node.ancestors.push("client");
							thisDataSource.ancestors_struct[node.id] = ["client"];
							if (addedClient === false) {
								addedClient = true;
								thisDataSource.children_struct.topLevel.push("client");
								thisDataSource.children_struct['client'] = [];
							}
							thisDataSource.children_struct['client'].push(node.id);
						}
					}
				});
			}

			/**
    * Returns the flow between the highest level grouping
    *
    * @return     {Object}  The top level flow.
    */

		}, {
			key: 'getTopLevelFlow',
			value: function getTopLevelFlow() {
				return this.getFlowBetweenSet(this.children_struct.topLevel);
			}

			/**
    * Gets the flow between any set of node levels
    *
    * @param      {Array}  node_names  The node names in the set
    * @return     {Object}  The flow between set.
    */

		}, {
			key: 'getFlowBetweenSet',
			value: function getFlowBetweenSet(node_names) {
				var local_nodes = this.nodes;
				var idMapping = {};
				for (var i = 0; i < local_nodes.length; i++) {
					var node = local_nodes[i];

					//if node is already at its highest level
					if (node.ancestors === null) {
						idMapping[node.id] = node.name;
					} else {
						//check to see which tags are present in the ancestor list
						for (var j = 0; j < node_names.length; j++) {
							if (node.ancestors.indexOf(node_names[j]) > -1) {
								idMapping[node.id] = node_names[j];
								break;
							}
						}
					}
				}
				//modify links
				var links = this.links;
				var linkData = [];

				for (var i = 0; i < links.length; i++) {
					var link = [];
					link.source = idMapping[links[i].source] || links[i].source;
					link.target = idMapping[links[i].target] || links[i].target;
					link.weight = links[i].weight;
					linkData.push(link);
				}

				//creating the nodeData
				var nodeData = [];
				for (var i = 0; i < node_names.length; i++) {
					var newNode;
					var node_to_add = [];
					node_to_add.id = node_names[i];
					node_to_add.text = this.nodeIdToName(node_names[i]) || node_names[i];

					node_to_add.ancestors = this.ancestors_struct[node_names[i]] || this.ancestors_struct[node_to_add.text] || [];
					if (_.isEmpty(node_to_add.ancestors) === false) {
						node_to_add.parent = node_to_add.ancestors[0];
					} else {
						node_to_add.parent = null;
					}
					nodeData.push(node_to_add);
				}

				return { nodeData: nodeData, linkData: linkData };
			}

			/**
    * process the nodeData output of getFlowBetweenSet
    *
    * @param      {Array}  nodeData  NodeData to convert 
    *                                to node objects
    * @return     {Array}   Node objects
    */

		}, {
			key: 'processNodeData',
			value: function processNodeData(nodeData) {
				var thisDataSource = this;
				var nodes = [];
				_.forEach(nodeData, function (data) {
					var newNode = new VisualizerNode.Node(null, null, data.id, data.text, null, data.parent, data.ancestors, null, null);
					nodes.push(newNode);
				});
				return nodes;
			}

			/**
    * process the linkData output of getFlowBetweenSet
    *
    * @param      {Array}  linkData  The link data
    * @param      {Array}  nodes     The nodes
    * @return     {Array}  Link objects
    */

		}, {
			key: 'processLinkData',
			value: function processLinkData(linkData, nodes) {
				var links = [];
				//a mapping from source.id-target.id to the link added
				var added_links = {};
				//transforming link data
				for (var i = 0; i < linkData.length; i++) {
					if (linkData[i].source != linkData[i].target) {
						// console.log(linkData[i])
						var source = this.findNodeById(linkData[i].source, nodes);
						var target = this.findNodeById(linkData[i].target, nodes);
						var weight = linkData[i].weight;
						//in order to sum all the weights of the links of the sub-nodes,
						//we use added_links to keep track if an link was added
						//if it is, we modify its weight
						if (source == null || target == null) {
							continue;
						}
						if (added_links[source.id + '-' + target.id] === undefined) {
							var link = new VisualizerLink.Link(source, target, weight);
							added_links[source.id + '-' + target.id] = link;
							links.push(link);
						} else {
							var existing_link = added_links[source.id + '-' + target.id];
							existing_link.setWeight(existing_link.getRawWeight() + weight);
							existing_link.increaseCount();
						}
					}
				}
				return links;
			}
		}]);

		return DataSource;
	}();

	return {
		DataSource: DataSource
	};
}]);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The base class the graph object.
 * Supports policies.
 * 
 * To write your own graph object, create a new factory that uses the graph
 * you want to inherit as a dependency, and extend its graph class. 
 * Return the class object with Graph as key.
 * 
 */
angular.module('GraphModule').factory('Graph', ['PolicyService', function (PolicyService) {
    var Graph = function () {
        /**
         * constructor for the graph
         *
         * @param      {HTML SVG}  svg     The svg that will 
         *                                 hold the graph
         * @param      {Node}  nodes   List of nodes for the graph
         * @param      {Link}  links   List of links for the graph
         */

        function Graph(svg, nodes, links) {
            _classCallCheck(this, Graph);

            var thisGraph = this;

            thisGraph.nodes = nodes || [];
            thisGraph.links = links || [];

            thisGraph.defaultNodePolicies = [];
            thisGraph.defaultPathPolicies = [];

            thisGraph.svgPolicy = new PolicyService.Policy();

            thisGraph.state = {
                canZoom: true,
                canPan: true,
                initForce: false,
                disableUpdate: false
            };

            thisGraph.consts = {
                circleGClass: "conceptG",
                graphClass: "graph",
                pathClass: "path",
                nodeClass: "circle",
                nodeText: "nodeText",
                startRadius: 50,
                maxRadius: 60,
                padding: 5,
                displayOffset: 60
            };

            svg.on("mouseover", function (d) {
                thisGraph.svgPolicy["mouseover"].call(this, d);
            }).on("dblclick", function (d) {
                thisGraph.svgPolicy["dblclick"].call(this, d);
            }).on("contextmenu", function (d) {
                thisGraph.svgPolicy["contextmenu"].call(this, d);
            }).on("mouseout", function (d) {
                thisGraph.svgPolicy["mouseout"].call(this, d);
            }).on("mousedown", function (d) {
                thisGraph.svgPolicy["mousedown"].call(this, d);
            }).on("mouseup", function (d) {
                thisGraph.svgPolicy["mouseup"].call(this, d);
            });

            // define arrow markers for graph links
            var defs = svg.append('svg:defs');
            defs.append('svg:marker').attr('id', 'end-arrow').attr("viewBox", "0 -5 10 10").attr("refX", 20).attr("refY", -1).attr("markerWidth", 6).attr("markerHeight", 6).attr("orient", "auto").append("path").attr("d", "M0,-5L10,0L0,5");

            // define arrow markers for leading arrow
            defs.append('svg:marker').attr('id', 'mark-end-arrow').attr('viewBox', '0 -5 10 10').attr('refX', 7).attr('markerWidth', 3.5).attr('markerHeight', 3.5).attr('orient', 'auto').append('svg:path').attr('d', 'M0,-5L10,0L0,5');

            thisGraph.svg = svg;
            thisGraph.svgG = svg.append("g").classed(thisGraph.consts.graphClass, true);
            var svgG = thisGraph.svgG;

            // svg nodes and links
            thisGraph.paths = svgG.append("g").selectAll("g");
            thisGraph.circles = svgG.append("g").selectAll("g");
            thisGraph.initNodes();
            thisGraph.initLinks();

            thisGraph.setPositions();
            // thisGraph.updateGraph();
            // thisGraph.setForce();
            var resizeFunc = function resizeFunc() {
                thisGraph.onWindowResize(svg);
            };

            thisGraph.bindings = {
                resize: resizeFunc
            };
            $(window).resize(resizeFunc);
        }

        /**
         * calls the destroy method for all policies
         */


        _createClass(Graph, [{
            key: 'destroy',
            value: function destroy() {
                var thisGraph = this;
                _(thisGraph.defaultNodePolicies).forEach(function (policy) {
                    policy.destroy();
                });
                _(thisGraph.defaultPathPolicies).forEach(function (policy) {
                    policy.destroy();
                });
                for (var key in thisGraph.bindings) {
                    $(window).off(key, thisGraph.bindings[key]);
                }
            }

            /**
             * Runs the init function for all the nodes
             */

        }, {
            key: 'initNodes',
            value: function initNodes() {
                var thisGraph = this;
                _.forEach(thisGraph.nodes, function (node) {
                    node.initialize(thisGraph);
                });
            }

            /**
             * Runs the init function for all the links
             */

        }, {
            key: 'initLinks',
            value: function initLinks() {
                var thisGraph = this;
                _.forEach(thisGraph.links, function (link) {
                    link.initialize(thisGraph);
                });
            }

            /**
             * returns the node matching the id, 
             * or undefined if there is none
             *
             * @param      {Object}  id      The identifier
             * @return     {Node}  { matching node }
             */

        }, {
            key: 'findNodeById',
            value: function findNodeById(id) {
                var thisGraph = this;
                for (var i = 0; i < thisGraph.nodes.length; i++) {
                    if (id === thisGraph.nodes[i].id) {
                        return thisGraph.nodes[i];
                    }
                }
            }
        }, {
            key: 'findD3Node',


            /**
             * Returns the d3Node object that matches the id,
             * or undefined if there is none
             *
             * @param      {string}  id      The identifier
             * @return     {D3Node} The d3 node
             */
            value: function findD3Node(id) {
                var thisGraph = this;
                var d3Node;
                thisGraph.circles.each(function (d) {
                    if (d.id === id) {
                        d3Node = d3.select(this);
                    }
                });
                return d3Node;
            }

            /**
             * Used to install a drag policy that will be called
             * when nodes are dragged
             *
             * @param      {d3.behavior.drag}  d3drag  D3 drag object
             */

        }, {
            key: 'installDragPolicy',
            value: function installDragPolicy(d3drag) {
                this.drag = d3drag;
            }

            /**
             * Used to install a policy that will be called 
             * when there is mouse interactions with the graph's svg
             *
             * @param      {Policy}  policy  The policy to install
             */

        }, {
            key: 'installSvgPolicy',
            value: function installSvgPolicy(policy) {
                this.svgPolicy = policy;
            }

            /**
             * Used to install policies that are called when there is
             * mouse interaction with a node
             *
             * @param      {Policy}  policy  The policy to install
             */

        }, {
            key: 'installDefaultNodePolicy',
            value: function installDefaultNodePolicy(policy) {
                var thisGraph = this;
                thisGraph.defaultNodePolicies.push(policy);
                policy.initialize(thisGraph);
            }

            /**
             * Used to remove an installed policy for nodes
             *
             * @param      {Node}  policyRemove  The policy to remove
             */

        }, {
            key: 'uninstallDefaultNodePolicy',
            value: function uninstallDefaultNodePolicy(policyRemove) {
                var policyRemoveName;
                if (typeof policyRemove === 'string') {
                    policyRemoveName = policyRemove;
                } else {
                    policyRemoveName = policyRemove.policyName;
                }
                _(thisGraph.defaultNodePolicies).forEach(function (policy, index) {
                    if (policy.policyName === policyRemoveName) {
                        policy.destroy();
                        thisGraph.defaultNodePolicies.splice(index, 1);
                        return;
                    }
                });
            }

            /**
             * Returns the node policy object with the given name
             *
             * @param      {string}  policyName  The policy name
             * @return     {Policy}  policy      The matching policy
             */

        }, {
            key: 'getNodePolicy',
            value: function getNodePolicy(policyName) {
                var thisGraph = this;

                _(thisGraph.defaultNodePolicies).forEach(function (policy, index) {
                    if (policy.policyName === policyName) {
                        return policy;
                    }
                });
            }

            /**
             * Used to install policies that are called when there is a
             * mouse interaction with a path
             *
             * @param      {Policy}  policy  The policy to install
             */

        }, {
            key: 'installDefaultPathPolicy',
            value: function installDefaultPathPolicy(policy) {
                var thisGraph = this;
                thisGraph.defaultPathPolicies.push(policy);
                policy.initialize(thisGraph);
            }

            //Used to remove an installed policy for links

            /**
             * Used to remove an installed policy for links
             *
             * @param      {Policy}  policyRemove  The policy to remove
             */

        }, {
            key: 'uninstallDefaultPathPolicy',
            value: function uninstallDefaultPathPolicy(policyRemove) {
                var policyRemoveName;
                if (typeof policyRemove === 'string') {
                    policyRemoveName = policyRemove;
                } else {
                    policyRemoveName = policyRemove.policyName;
                }
                _(thisGraph.defaultPathPolicies).forEach(function (policy, index) {
                    if (policy.policyName === policyRemoveName) {
                        policy.destroy();
                        thisGraph.defaultPathPolicies.splice(index, 1);
                        return;
                    }
                });
            }

            /**
             * Called when there is a mouse interaction with a path
             * Propogates the event to all installed path policies
             *
             * @param      {string}  event   The event type
             * @param      {d3object}  d3path  The d3 path
             * @param      {Path}  d       The matching Link object
             */

        }, {
            key: 'pathPolicyEvent',
            value: function pathPolicyEvent(event, d3path, d) {
                var thisGraph = this;
                _(thisGraph.defaultPathPolicies).forEach(function (policy) {
                    policy[event](d3path, d);
                });
            }

            /**
             * Called when there is a mouse interaction with a node
             * Propogates the event to all installed node policies
             * 
             * @param      {string}  event   The event type
             * @param      {d3object}  d3node  The d3 node
             * @param      {Path}  d       The matching Node object
             */

        }, {
            key: 'nodePolicyEvent',
            value: function nodePolicyEvent(event, d3node, d) {
                var thisGraph = this;
                _.forEach(thisGraph.defaultNodePolicies, function (policy) {
                    policy[event](d3node, d);
                });
            }

            /**
             * Sets pan and zoom rules for the graph
             *
             * @param      {d3.behavior.zoom}  d3zoom  D3 zoom obj
             */

        }, {
            key: 'installZoomPolicy',
            value: function installZoomPolicy(d3zoom) {
                this.dragSvg = d3zoom;
                this.svg.call(this.dragSvg);
            }

            /**
             * Called when the window is resized
             * Hook for overriding in subclasses
             *
             * @param      {HTML SVG}  svg     The svg that the handler
             *                                 is attached to
             */

        }, {
            key: 'onWindowResize',
            value: function onWindowResize(svg) {}

            /**
             * Inserts line breaks in node text
             *
             * @param      {HTML Elem}  gEl    The elem to add text to
             * @param      {string}  title   The title
             */

        }, {
            key: 'insertTitleLinebreaks',
            value: function insertTitleLinebreaks(gEl, title) {
                var thisGraph = this;
                var words = title.split(/\s+/g),
                    nwords = words.length;
                var el = gEl.append("text").attr('class', thisGraph.consts.nodeText).attr("text-anchor", "middle").attr("dy", "-" + (nwords - 1) * 7.5);

                for (var i = 0; i < words.length; i++) {
                    var tspan = el.append('tspan').text(words[i]);
                    if (i > 0) tspan.attr('x', 0).attr('dy', '15');
                }
            }

            /**
             * Removes all links from the given node
             *
             * @param      {Node}  node    The node
             */

        }, {
            key: 'spliceLinksForNode',
            value: function spliceLinksForNode(node) {
                var thisGraph = this,
                    toSplice = thisGraph.links.filter(function (l) {
                    return l.source === node || l.target === node;
                });
                toSplice.map(function (l) {
                    thisGraph.links.splice(thisGraph.links.indexOf(l), 1);
                });
            }

            /**
             * Adds the node to the graph and updates
             *
             * @param      {Node}  node    The node
             */

        }, {
            key: 'addNode',
            value: function addNode(node) {
                var thisGraph = this;
                thisGraph.nodes.push(node);
                node.initialize(thisGraph);
                thisGraph.updateGraph();
            }
        }, {
            key: 'removeNode',


            /**
             * Removes the node to the graph and updates
             *
             * @param      {Node}  node    The node
             */
            value: function removeNode(node) {
                var thisGraph = this;
                thisGraph.nodes.splice(thisGraph.nodes.indexOf(node), 1);
                thisGraph.spliceLinksForNode(node);

                thisGraph.updateGraph();
            }
        }, {
            key: 'addLink',


            /**
             * Adds the link to the graph and updates
             *
             * @param      {link}  link    The link
             */
            value: function addLink(link) {
                var thisGraph = this;
                thisGraph.links.push(link);
                link.initialize(thisGraph);
                thisGraph.updateGraph();
            }
        }, {
            key: 'removeLink',


            /**
             * Removes the link to the graph and updates
             *
             * @param      {link}  link    The link
             */
            value: function removeLink(link) {
                var thisGraph = this;
                thisGraph.links.splice(thisGraph.links.indexOf(link), 1);
                link.initialize(thisGraph);
                thisGraph.updateGraph();
            }

            /**
             * Called when the graph is updating existing paths
             *
             * @param      {Path}  paths   List of paths
             */

        }, {
            key: 'updateExistingPaths',
            value: function updateExistingPaths(paths) {
                var thisGraph = this;
                paths.each(function (d) {
                    d.updateAttr(d3.select(this), d);
                });
            }

            /**
             * Called when the graph is adding new paths
             *
             * @param      {Path}  newPaths  List of new paths
             */

        }, {
            key: 'updateNewPaths',
            value: function updateNewPaths(newPaths) {
                var thisGraph = this;

                thisGraph.initLinks();

                newPaths.each(function (d) {
                    d.newPathAttr(d3.select(this), d);
                });

                //if node doesn't have its own policy, use default for the graph
                newPaths.on("mouseover", function (d) {
                    if (d.hasPolicy) {
                        d.pathPolicyEvent("mouseover", d3.select(this), d);
                    } else {
                        thisGraph.pathPolicyEvent("mouseover", d3.select(this), d);
                    }
                }).on("dblclick", function (d) {
                    if (d.hasPolicy) {
                        d.pathPolicyEvent("dblclick", d3.select(this), d);
                    } else {
                        thisGraph.pathPolicyEvent("dblclick", d3.select(this), d);
                    }
                }).on("contextmenu", function (d) {
                    if (d.hasPolicy) {
                        d.pathPolicyEvent("contextmenu", d3.select(this), d);
                    } else {
                        thisGraph.pathPolicyEvent("contextmenu", d3.select(this), d);
                    }
                }).on("mouseout", function (d) {
                    if (d.hasPolicy) {
                        d.pathPolicyEvent("mouseout", d3.select(this), d);
                    } else {
                        thisGraph.pathPolicyEvent("mouseout", d3.select(this), d);
                    }
                }).on("mousedown", function (d) {
                    if (d.hasPolicy) {
                        d.pathPolicyEvent("mousedown", d3.select(this), d);
                    } else {
                        thisGraph.pathPolicyEvent("mousedown", d3.select(this), d);
                    }
                }).on("mouseup", function (d) {
                    if (d.hasPolicy) {
                        d.pathPolicyEvent("mouseup", d3.select(this), d);
                    } else {
                        thisGraph.pathPolicyEvent("mouseup", d3.select(this), d);
                    }
                }).call(thisGraph.drag);
            }

            /**
             * Called when the graph is updating existing nodes
             */

        }, {
            key: 'updateExistingNodes',
            value: function updateExistingNodes() {
                var thisGraph = this;
                thisGraph.circles = this.circles.data(thisGraph.nodes, function (d) {
                    return d.id;
                }).each(function (d) {
                    d.updateAttr(d3.select(this), d);
                });
            }

            /**
             * Called when the graph is adding new nodes
             *
             * @param      {Node}  newNodes  List of new nodes
             */

        }, {
            key: 'updateNewNodes',
            value: function updateNewNodes(newNodes) {
                var thisGraph = this;

                newNodes.each(function (d) {
                    if (d.graph == null) {
                        d.initialize(thisGraph);
                    }
                    d.newNodeAttr(d3.select(this), d);
                });

                //if node doesn't have its own policy, use default for the graph
                newNodes.on("mouseover", function (d) {
                    if (d.hasPolicy) {
                        d.nodePolicyEvent("mouseover", d3.select(this), d);
                    } else {
                        thisGraph.nodePolicyEvent("mouseover", d3.select(this), d);
                    }
                }).on("dblclick", function (d) {
                    if (d.hasPolicy) {
                        d.nodePolicyEvent("dblclick", d3.select(this), d);
                    } else {
                        thisGraph.nodePolicyEvent("dblclick", d3.select(this), d);
                    }
                }).on("contextmenu", function (d) {
                    if (d.hasPolicy) {
                        d.nodePolicyEvent("contextmenu", d3.select(this), d);
                    } else {
                        thisGraph.nodePolicyEvent("contextmenu", d3.select(this), d);
                    }
                }).on("mouseout", function (d) {
                    if (d.hasPolicy) {
                        d.nodePolicyEvent("mouseout", d3.select(this), d);
                    } else {
                        thisGraph.nodePolicyEvent("mouseout", d3.select(this), d);
                    }
                }).on("mousedown", function (d) {
                    if (d.hasPolicy) {
                        d.nodePolicyEvent("mousedown", d3.select(this), d);
                    } else {
                        thisGraph.nodePolicyEvent("mousedown", d3.select(this), d);
                    }
                }).on("mouseup", function (d) {
                    if (d.hasPolicy) {
                        d.nodePolicyEvent("mouseup", d3.select(this), d);
                    } else {
                        thisGraph.nodePolicyEvent("mouseup", d3.select(this), d);
                    }
                }).call(thisGraph.drag);

                newNodes.append("circle").attr("r", function (d) {
                    return String(d.radius);
                });

                newNodes.each(function (d) {
                    thisGraph.insertTitleLinebreaks(d3.select(this), d.text);
                });
            }

            /**
             * Prevents nodes from colliding
             *
             * @param      {number}  alpha   Affects how much change
             *                               the collision causes
             * @return     {boolean}  {Whether nodes are collided}
             */

        }, {
            key: 'd3ForceCollide',
            value: function d3ForceCollide(alpha) {
                var thisGraph = this,
                    consts = thisGraph.consts;
                var nodes = thisGraph.nodes;
                var quadtree = d3.geom.quadtree(nodes);
                return function (d) {
                    var r = d.radius + consts.maxRadius + consts.padding,
                        nx1 = d.x - r,
                        nx2 = d.x + r,
                        ny1 = d.y - r,
                        ny2 = d.y + r;
                    quadtree.visit(function (quad, x1, y1, x2, y2) {
                        if (quad.point && quad.point !== d) {
                            var x = d.x - quad.point.x,
                                y = d.y - quad.point.y,
                                l = Math.sqrt(x * x + y * y),
                                r = d.radius + quad.point.radius + consts.padding;
                            if (l < r) {
                                l = (l - r) / l * alpha;
                                d.x -= x *= l;
                                d.y -= y *= l;
                                quad.point.x += x;
                                quad.point.y += y;
                            }
                        }
                        return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
                    });
                };
            }

            /**
             * Tick of the d3 force simulation
             *
             * @param      {D3tick event}  e    D3tick event
             * @param      {number}  width  The width of the simulation
             * @param      {number}  height The height of the simulation
             */

        }, {
            key: 'd3ForceTick',
            value: function d3ForceTick(e, width, height) {
                var thisGraph = this,
                    consts = thisGraph.consts;

                var offset = consts.displayOffset;
                var nodes = thisGraph.nodes;
                var q = d3.geom.quadtree(thisGraph.nodes),
                    i = 0,
                    n = nodes.length;

                while (++i < n) {
                    q.visit(this.d3ForceCollide(nodes[i]));
                }

                thisGraph.circles.each(this.d3ForceCollide(.5)).attr("cx", function (d) {
                    return d.x = Math.max(d.radius + offset, Math.min(width - offset - d.radius, d.x));
                }).attr("cy", function (d) {
                    return d.y = Math.max(d.radius + offset, Math.min(height - offset - d.radius, d.y));
                });

                thisGraph.paths.attr('x1', function (d) {
                    return d.source.x;
                }).attr('y1', function (d) {
                    return d.source.y;
                }).attr('x2', function (d) {
                    return d.target.x;
                }).attr('y2', function (d) {
                    return d.target.y;
                });
            }

            /**
             * Starts on start of the force simulation
             */

        }, {
            key: 'd3ForceStart',
            value: function d3ForceStart() {
                var thisGraph = this;
                thisGraph.paths.attr('x1', function (d) {
                    return d.source.x;
                }).attr('y1', function (d) {
                    return d.source.y;
                }).attr('x2', function (d) {
                    return d.target.x;
                }).attr('y2', function (d) {
                    return d.target.y;
                });
            }

            /**
             * Called on the end of the force simulation
             */

        }, {
            key: 'd3ForceEnd',
            value: function d3ForceEnd() {
                var thisGraph = this;
                thisGraph.circles.attr('cx', function (d) {
                    return d.x;
                }).attr('cy', function (d) {
                    return d.y;
                });

                thisGraph.paths.attr('x1', function (d) {
                    return d.source.x;
                }).attr('y1', function (d) {
                    return d.source.y;
                }).attr('x2', function (d) {
                    return d.target.x;
                }).attr('y2', function (d) {
                    return d.target.y;
                });
            }

            /**
             * Calculates the width and height bounds for the 
             * force simulation
             *
             * @return     {Object}  width and height as properties 
             */

        }, {
            key: 'd3ForceBounds',
            value: function d3ForceBounds() {
                var offset = consts.displayOffset;
                var svgWidth = $('#visualization-graph').width();
                var svgHeight = $('#visualization-graph').height();

                var width = svgWidth;
                var height = svgHeight;
                return { width: width, height: height };
            }

            /**
             * Does a d3 force simulation
             *
             * @param      {Function}  callback  The callback
             */

        }, {
            key: 'setForce',
            value: function setForce(callback) {
                var thisGraph = this,
                    consts = thisGraph.consts;

                var nodes = thisGraph.nodes;
                var links = thisGraph.links;
                if (_.isEmpty(nodes)) {
                    return;
                }

                var bounds = this.d3ForceBounds();

                var force = d3.layout.force().size([bounds.width, bounds.height]).nodes(nodes).charge(function (d) {
                    return -6000;
                }).links(links);

                force.linkDistance(bounds.width / 3);
                force.linkStrength(.2);
                force.gravity(.2);

                force.on('tick', function (e) {
                    thisGraph.d3ForceTick.call(thisGraph, e, bounds.width, bounds.height);
                });

                force.on('start', function () {
                    thisGraph.d3ForceStart.call(thisGraph);
                });

                force.on('end', function () {
                    thisGraph.d3ForceEnd.call(thisGraph);
                });

                force.start();
                var k = 0;
                while (force.alpha() > 1e-2 && k < 150) {
                    force.tick(), k = k + 1;
                }
                force.stop();

                if (callback != null) {
                    callback();
                }
            }

            /**
             * Sets the positions to be the center of the screen if 
             * not provided
             * also sets the radius of the nodes
             */

        }, {
            key: 'setPositions',
            value: function setPositions() {
                var thisGraph = this,
                    consts = thisGraph.consts,
                    state = thisGraph.state;

                // var docEl = document.documentElement,
                //     bodyEl = document.getElementsByTagName('body')[0];

                var offset = thisGraph.consts.displayOffset;
                var svgWidth = $('#visualization-graph').width();
                var svgHeight = $('#visualization-graph').height();

                var width = svgWidth - 2 * offset;
                var height = svgHeight - 2 * offset;

                var nodes = thisGraph.nodes;

                for (var i = 0; i < nodes.length; i++) {
                    nodes[i].radius = nodes[i].radius || thisGraph.consts.startRadius;
                    if (nodes[i].x == null || nodes[i].y == null) {
                        // nodes[i].xStart = width/2  + nodes[i].radius + offset
                        nodes[i].x = width / 2 + nodes[i].radius + offset;
                        // nodes[i].yStart = height/2 + nodes[i].radius + offset
                        nodes[i].y = height / 2 + nodes[i].radius + offset;
                    }
                }
            }

            /**
             * Called to update the view of the graph when
             * data changes
             *
             * @param      {Function}  callback  The callback
             */

        }, {
            key: 'updateGraph',
            value: function updateGraph(callback) {
                var thisGraph = this,
                    consts = thisGraph.consts,
                    state = thisGraph.state;

                if (thisGraph.state.disableUpdate) {
                    return;
                }

                this.updateExistingNodes();
                var newGs = thisGraph.circles.enter().append("g");

                // console.log('update', newGs);
                newGs.classed(consts.circleGClass, true);

                // this.updateNewNodes(newGs);

                // remove old nodes
                thisGraph.circles.exit().remove();

                if (state.initForce == false) {
                    thisGraph.setForce(function () {
                        thisGraph.updateNewNodes.call(thisGraph, newGs);
                    });
                    state.initForce = true;
                } else {
                    this.updateNewNodes(newGs);
                }

                thisGraph.paths = thisGraph.paths.data(thisGraph.links, function (d) {
                    return String(d.source.id) + "+" + String(d.target.id);
                });
                var paths = thisGraph.paths;
                this.updateExistingPaths(paths);

                var newpaths = paths.enter().append("path").style('marker-end', 'url(#end-arrow)').classed("link", true);
                this.updateNewPaths(newpaths);

                // remove old links
                paths.exit().remove();

                if (callback != null) {
                    callback();
                }
            }
        }]);

        return Graph;
    }();

    return {
        Graph: Graph
    };
}]);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The graph that is used specifically for the visualization tab.
 */
angular.module('GraphModule').factory('VisualizerGraph', ['Graph', function (Graph) {
    var VisualizerGraph = function (_Graph$Graph) {
        _inherits(VisualizerGraph, _Graph$Graph);

        function VisualizerGraph(svg, nodes, links, dataSource, children_struct, ancestors_struct) {
            _classCallCheck(this, VisualizerGraph);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(VisualizerGraph).call(this, svg, nodes, links));

            var thisGraph = _this;

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
            var drag = d3.behavior.drag().origin(function (d) {
                return { x: d.x, y: d.y };
            }).on("dragstart", function () {}).on("drag", function (args) {
                d3.select(this).attr("transform", function (d, i) {
                    d.x += d3.event.dx;
                    d.y += d3.event.dy;
                    return "translate(" + [d.x, d.y] + ")";
                });
                thisGraph.updateGraph();
            }).on("dragend", function () {});

            thisGraph.drag = drag;

            //Pan and Zoom behavior for the graph
            var zoom = d3.behavior.zoom().on("zoom", function () {
                if (d3.event.sourceEvent != null && d3.event.sourceEvent.ctrlKey) {
                    // TODO  the internal d3 state is still changing
                    return false;
                } else {
                    thisGraph.zoomed.call(thisGraph);
                }
                return true;
            }).on("zoomstart", function (d, i) {});
            thisGraph.dragSvg = zoom;

            thisGraph.svg.call(zoom).on("dblclick.zoom", null);
            return _this;
        }

        //Called when the graph has a zoom action


        _createClass(VisualizerGraph, [{
            key: 'zoomed',
            value: function zoomed(translate, scale) {
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
                    var zoomSetCallback = function zoomSetCallback() {
                        zoom.scale(scale);
                        zoom.translate(translate);
                    };
                    var translate_name = "zoom" + translate;
                    d3.select("." + this.consts.graphClass).transition(translate_name).delay(100).duration(750).attr('transform', 'translate(' + zoom.translate() + ') scale(' + zoom.scale() + ')').each("end", zoomSetCallback);
                    return;
                }
                if (thisGraph.state.canZoom) {
                    d3.select("." + this.consts.graphClass).attr("transform", "translate(" + thisGraph.dragSvg.translate() + ") scale(" + thisGraph.dragSvg.scale() + ")");
                }
            }
        }, {
            key: 'onWindowResize',


            //Called when window resizes
            value: function onWindowResize(svg) {
                var thisGraph = this;
                var docEl = document.documentElement,
                    bodyEl = document.getElementsByTagName('body')[0];
                var offset = $('#visualization-graph').offset();
                var divWidth = $('#visualization-graph').width();
                var divHeight = $('#visualization-graph').height();
                var height = bodyEl.clientHeight;
                svg.attr("width", divWidth).attr("height", height - offset.top - 20);
            }
        }, {
            key: 'updateLinkData',


            //Called when the server sends update weights for the links
            value: function updateLinkData() {
                var thisGraph = this;
                var node_names_set = [];
                for (var i = 0; i < thisGraph.nodes.length; i++) {
                    node_names_set.push(thisGraph.nodes[i].id);
                }
                var retData = thisGraph.dataSource.getFlowBetweenSet(node_names_set);
                var linkData = retData.linkData;
                thisGraph.links = thisGraph.dataSource.processLinkData(linkData, thisGraph.nodes);
                this.initNodes();
                this.initLinks();
                thisGraph.updateGraph();
            }
        }]);

        return VisualizerGraph;
    }(Graph.Graph);

    return {
        Graph: VisualizerGraph
    };
}]);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
angular.module('LinkModule').factory('Link', [function () {
	var Link = function () {
		function Link(sourceNode, targetNode) {
			_classCallCheck(this, Link);

			this.source = sourceNode;
			this.target = targetNode;
			this.policy = null;
			this.hasPolicy = false;
			this.pathPolicies = [];
			this.graph = null;
			this.initialized = false;
		}

		//Called when a link is added to the graph


		_createClass(Link, [{
			key: 'initialize',
			value: function initialize(graph) {
				if (this.initialized == false) {
					this.initialized = true;
					this.graph = graph;
				}
			}

			//Called during the update graph for existing links

		}, {
			key: 'updateAttr',
			value: function updateAttr(d3path) {
				d3path.style('marker-end', 'url(#end-arrow)').attr("d", arrowPath);
			}

			//Called during the first update graph for a link

		}, {
			key: 'newPathAttr',
			value: function newPathAttr(d3path) {
				d3path.attr('d', arrowPath);
			}

			//Arrow path logic

		}, {
			key: 'arrowPath',
			value: function arrowPath() {
				var d = this;
				var dx = d.target.x - d.source.x,
				    dy = d.target.y - d.source.y,
				    dr = Math.sqrt(dx * dx + dy * dy);
				return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
			}

			//Used to install policies that are called when this link
			//has a mouse event

		}, {
			key: 'installPathPolicy',
			value: function installPathPolicy(policy) {
				this.pathPolicies.push(policy);
				policy.initialize(this.graph);
			}

			//Used to uninstall policy for this link

		}, {
			key: 'uninstallPathPolicy',
			value: function uninstallPathPolicy(policyRemove) {
				var policyRemoveName;
				if (typeof policyRemove === 'string') {
					policyRemoveName = policyRemove;
				} else {
					policyRemoveName = policyRemove.policyName;
				}
				_(thisGraph.pathPolicies).forEach(function (policy, index) {
					if (policy.policyName === policyRemoveName) {
						thisGraph.pathPolicies.splice(index, 1);
					}
				});
			}

			//called when there is a mouse event for this path

		}, {
			key: 'pathPolicyEvent',
			value: function pathPolicyEvent(event, d3path, d) {
				var thisGraph = this;
				_(d.pathPolicies).forEach(function (policy) {
					policy[event](d3node, d);
				});
			}
		}]);

		return Link;
	}();

	return {
		Link: Link
	};
}]);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The link that is used specifically for the visualization tab.
 */
angular.module('LinkModule').factory('VisualizerLink', ['Link', function (Link) {
	var VisualizerLink = function (_Link$Link) {
		_inherits(VisualizerLink, _Link$Link);

		function VisualizerLink(sourceNode, targetNode, weight) {
			_classCallCheck(this, VisualizerLink);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(VisualizerLink).call(this, sourceNode, targetNode));

			_this.weight = weight;
			//Count is used to keep track of how many
			//paths to its subnodes there are
			//in order to calculate average traffic
			_this.count = 1;
			return _this;
		}

		_createClass(VisualizerLink, [{
			key: 'increaseCount',
			value: function increaseCount() {
				this.count += 1;
			}
		}, {
			key: 'getMidpoint',
			value: function getMidpoint() {
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
					};
				} else {
					ret = {
						my: 'bottom center',
						at: 'center center', // at the bottom right of...
						// target: $(thisPath) // my target
						target: [dx, dy],
						adjust: {
							y: -10
						}
					};
				}
				return ret;
			}

			//Called when the link is added to the graph

		}, {
			key: 'initialize',
			value: function initialize(graph) {
				if (this.initialized == false) {
					_get(Object.getPrototypeOf(VisualizerLink.prototype), 'initialize', this).call(this, graph);
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

		}, {
			key: 'setUseAvgWeight',
			value: function setUseAvgWeight(val) {
				this.graph.state.VisualizerLink.useAvgWeight = !!val;
			}

			//Sets the weight of this link

		}, {
			key: 'setWeight',
			value: function setWeight(weight) {
				this.weight = weight;
			}

			//Gets the actual weight value of the link

		}, {
			key: 'getRawWeight',
			value: function getRawWeight() {
				return this.weight;
			}

			//Gets the weight value of the link, depending on the
			//useAvgWeight setting

		}, {
			key: 'getWeight',
			value: function getWeight() {
				var thisGraph = this.graph,
				    state = thisGraph.state.VisualizerLink;

				if (state.useAvgWeight) {
					var weight = this.weight / this.count;
					return weight;
				}
				return this.weight;
			}

			//updates the max weight of the graph

		}, {
			key: 'updateMaxWeight',
			value: function updateMaxWeight() {
				var thisGraph = this.graph,
				    state = thisGraph.state.VisualizerLink;

				var maxLink = _.maxBy(thisGraph.links, function (l) {
					if (l.graph != null) {
						return l.getWeight();
					}
					return 0;
				});
				state.maxWeight = maxLink.getWeight();
			}

			//Called during the update graph for existing links

		}, {
			key: 'updateAttr',
			value: function updateAttr(d3path, d) {
				var thisGraph = this.graph,
				    state = thisGraph.state.VisualizerLink;
				this.updateMaxWeight();
				var colorScale = d3.scale.linear().domain([0, state.maxWeight]).range(["#ffb366", "#F92606"]);
				state.colorScale = colorScale;
				d3path.style('marker-end', 'url(#end-arrow)').classed(thisGraph.consts.selectedClass, function (d) {
					return d === state.selectedEdge;
				}).attr("d", this.arrowPath.call(d)).transition("existingPathTransition").duration(750).attr("stroke", function (d) {
					var c = colorScale(d.getWeight());
					return c;
				});
			}

			//Called during the first update graph for a link

		}, {
			key: 'newPathAttr',
			value: function newPathAttr(d3path, d) {
				var thisGraph = this.graph,
				    state = thisGraph.state.VisualizerLink;
				this.updateMaxWeight();
				var colorScale = d3.scale.linear().domain([0, state.maxWeight]).range(["#ffb366", "#F92606"]);

				d3path.transition("newPathTransition").duration(750).attrTween("opacity", function (d) {
					return d3.interpolateString(0, 1);
				}).attr("stroke", function (d) {
					var c = colorScale(d.getWeight());
					return c;
				}).attr('d', this.arrowPath.call(d));
			}
		}]);

		return VisualizerLink;
	}(Link.Link);

	return {
		Link: VisualizerLink
	};
}]);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The base class for node objects for the graph.
 * Supports policies.
 * 
 * To write your own Node object, create a new factory that uses the node
 * you want to inherit as a dependency, and extend its node class. 
 * Return the class object with Node as key
 * 
 */
angular.module('NodeModule').factory('Node', [function () {
	var Node = function () {
		function Node(x, y, id, text, radius) {
			_classCallCheck(this, Node);

			this.x = x;
			this.y = y;
			this.radius = radius, this.id = id;
			this.text = text;
			this.radius = radius;
			this.hasPolicy = false;
			this.policy = null;
			this.nodePolicies = [];
			this.graph = null;
			this.initialized = false;
		}

		//Called when a node is added to the graph


		_createClass(Node, [{
			key: 'initialize',
			value: function initialize(graph) {
				if (this.initialized == false) {
					this.initialized = true;
					this.graph = graph;
				}
			}

			//Called during the update graph for existing nodes

		}, {
			key: 'updateAttr',
			value: function updateAttr(d3node, d) {
				d3node.attr("transform", function (d) {
					return "translate(" + d.x + "," + d.y + ")";
				});
			}

			//Called during the first update graph for a node
			//Hook for sub classes

		}, {
			key: 'newNodeAttr',
			value: function newNodeAttr(d3node, d) {}

			//sets the radius of the node

		}, {
			key: 'setRadius',
			value: function setRadius(radius) {
				this.radius = radius;
			}

			//Used to install policies that are called when this node
			//has a mouse event

		}, {
			key: 'installNodePolicy',
			value: function installNodePolicy(policy) {
				this.nodePolicies.push(policy);
				policy.initialize(this.graph);
			}

			//Used to uninstall policy for this link

		}, {
			key: 'uninstallNodePolicy',
			value: function uninstallNodePolicy(policyRemove) {
				var policyRemoveName;
				if (typeof policyRemove === 'string') {
					policyRemoveName = policyRemove;
				} else {
					policyRemoveName = policyRemove.policyName;
				}
				_(this.nodePolicies).forEach(function (policy, index) {
					if (policy.policyName === policyRemoveName) {
						this.nodePolicies.splice(index, 1);
					}
				});
			}

			//Called when there is a mouse event for this node

		}, {
			key: 'nodePolicyEvent',
			value: function nodePolicyEvent(event, d3node, d) {
				_.forEach(this.nodePolicies, function (policy) {
					policy[event](d3node, d);
				});
			}
		}]);

		return Node;
	}();

	return {
		Node: Node
	};
}]);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The node that is used specifically for the visualization tab.
 */
angular.module('NodeModule').factory('VisualizerNode', ['Node', function (Node) {
	var VisualizerNode = function (_Node$Node) {
		_inherits(VisualizerNode, _Node$Node);

		function VisualizerNode(x, y, id, text, radius, parent, ancestors, xStart, yStart) {
			_classCallCheck(this, VisualizerNode);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(VisualizerNode).call(this, x, y, id, text, radius));

			_this.parent = parent;
			_this.ancestors = ancestors;
			_this.xStart = xStart || x;
			_this.yStart = yStart || y;
			return _this;
		}

		/**
   * Called during the first update graph for a node
   *
   * @param      {D3Object}  d3node  The d3 node
   * @param      {Object}    d       The matching data object
   */


		_createClass(VisualizerNode, [{
			key: 'newNodeAttr',
			value: function newNodeAttr(d3node, d) {
				var thisGraph = this.graph;
				if (thisGraph.consts.containerClass != null && thisGraph.children_struct[d.id] == null) {
					d3node.classed(thisGraph.consts.containerClass, true);
				}
				d3node.transition("nodePositionTransition").duration(750).attrTween("transform", function (d) {
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
		}]);

		return VisualizerNode;
	}(Node.Node);

	return {
		Node: VisualizerNode
	};
}]);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This policy is used to add a select node feature.
 * Supports selecting multiple nodes by using the ctrl key.
 */
angular.module('PolicyModule').factory('NodeSelectionPolicy', ['Policy', function (Policy) {
    var NodeSelectionPolicy = function (_Policy$Policy) {
        _inherits(NodeSelectionPolicy, _Policy$Policy);

        function NodeSelectionPolicy() {
            _classCallCheck(this, NodeSelectionPolicy);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(NodeSelectionPolicy).call(this, "NodeSelectionPolicy"));
        }

        /**
         * Called when first installed
         * Overwrites the on drag event of the graph
         * 
         * @param      {Graph}  graph   The graph it is 
        *                              installed on
        */


        _createClass(NodeSelectionPolicy, [{
            key: 'initialize',
            value: function initialize(graph) {
                if (this.initialized) {
                    return;
                }
                _get(Object.getPrototypeOf(NodeSelectionPolicy.prototype), 'initialize', this).call(this, graph);
                var state = graph.state.NodeSelectionPolicy = {};
                state.selectedNodes = [];
                var consts = graph.consts.NodeSelectionPolicy = {};
                consts.selectedClass = "selected";
                //overwritting graph's node on drag event to support
                //moving multiple nodes at once
                var drag = graph.drag;
                drag.on('drag', function (args) {
                    var thisGraph = graph;
                    if (thisGraph.consts.NodeSelectionPolicy != null) {
                        var selectedClass = thisGraph.consts.NodeSelectionPolicy.selectedClass;
                        var selection = d3.selectAll('.' + selectedClass);

                        if (selection[0].indexOf(this) == -1) {
                            selection.classed(selectedClass, false);
                            selection = d3.select(this);
                            selection.classed(selectedClass, true);
                        }

                        selection.attr("transform", function (d, i) {
                            d.x += d3.event.dx;
                            d.y += d3.event.dy;
                            return "translate(" + [d.x, d.y] + ")";
                        });
                        thisGraph.updateGraph();
                    }
                });
            }
        }, {
            key: 'addSelectNode',
            value: function addSelectNode(d3Node, nodeData) {
                var thisGraph = this.graph,
                    state = thisGraph.state.NodeSelectionPolicy,
                    consts = thisGraph.consts.NodeSelectionPolicy;

                d3Node.classed(consts.selectedClass, true);
                state.selectedNodes.push(nodeData);
            }
        }, {
            key: 'removeSelectFromNode',
            value: function removeSelectFromNode(d3Node, nodeData) {
                var thisGraph = this.graph,
                    state = thisGraph.state.NodeSelectionPolicy,
                    consts = thisGraph.consts.NodeSelectionPolicy;

                thisGraph.circles.filter(function (cd) {
                    return cd.id === nodeData.id;
                }).classed(consts.selectedClass, false);
                var index = state.selectedNodes.indexOf(nodeData);
                state.selectedNodes.splice(index, 1);
            }
        }, {
            key: 'removeAllSelectedNodes',
            value: function removeAllSelectedNodes() {
                var thisGraph = this.graph,
                    state = thisGraph.state.NodeSelectionPolicy,
                    consts = thisGraph.consts.NodeSelectionPolicy;

                thisGraph.circles.classed(consts.selectedClass, false);
                state.selectedNodes = [];
            }
        }, {
            key: 'mousedown',
            value: function mousedown(d3node, d) {
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
        }, {
            key: 'mouseup',
            value: function mouseup(d3node, d) {
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
        }]);

        return NodeSelectionPolicy;
    }(Policy.Policy);

    return {
        Policy: NodeSelectionPolicy
    };
}]);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This policy changes the view to the timegraph of link data on click.
 */
angular.module('PolicyModule').factory('PathChangeViewPolicy', ['Policy', function (Policy) {
    var PathChangeViewPolicy = function (_Policy$Policy) {
        _inherits(PathChangeViewPolicy, _Policy$Policy);

        /**
         * Called to build policy
         *
         * @param   {Angular State}    $state      Used to change view
         */

        function PathChangeViewPolicy($state) {
            _classCallCheck(this, PathChangeViewPolicy);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PathChangeViewPolicy).call(this, 'PathChangeViewPolicy'));

            _this.$state = $state;
            return _this;
        }

        /**
         * Checks if the given id is a Endpoint node or a
         * Provider node
         *
         * @param      {string}  id      Node ID
         * @return     {string}  type    The type, undefined 
         * 							     if neither.
         */


        _createClass(PathChangeViewPolicy, [{
            key: 'getType',
            value: function getType(id) {
                var type;
                if (_.includes(this.graph.dataSource.endpoints, id)) {
                    type = "EndpointIP";
                } else if (_.includes(this.graph.dataSource.providers, id)) {
                    type = "ProviderIP";
                }
                return type;
            }

            /**
             * Generates a list of all child containers of the service
             * Can handle nested services.
             *
             * @param      {string}  id      Node ID
             */

        }, {
            key: 'generateList',
            value: function generateList(id) {
                var thisPolicy = this;
                var retList = [];
                var nodeIds = this.graph.dataSource.children_struct[id];
                _.forEach(nodeIds, function (childId) {
                    var type = thisPolicy.getType(childId);
                    if (type == null) {
                        retList.concat(thisPolicy.generateList(childId));
                    } else {
                        retList.push(childId);
                    }
                });
                return retList;
            }

            /**
             * Used to reroute an edge when clicked
             *
             * @param      {<type>}  edge    The clicked edge
             */

        }, {
            key: 'viewEdge',
            value: function viewEdge(edge) {
                var sourceType;
                var targetType;
                var sourceList = [];
                var targetList = [];
                var sourceId = edge.source.id;
                var targetId = edge.target.id;

                //saving current layout if split policy is implemented
                // if (this.graph.saveGraph != null) {
                // 	this.StateSave.state = this.graph.saveGraph();
                // }

                sourceType = this.getType(sourceId);
                if (sourceType == null) {
                    //Not a container node, need to aggregate
                    sourceList = this.generateList(sourceId);
                    sourceType = this.getType(sourceList[0]);
                } else {
                    sourceList = [sourceId];
                }

                targetType = this.getType(targetId);
                if (targetType == null) {
                    //Not a container node, need to aggregate
                    targetList = this.generateList(targetId);
                    targetType = this.getType(targetList[0]);
                } else {
                    targetList = [targetId];
                }
                this.$state.go('contiv.menu.visualization.edge', { sourceName: sourceId, targetName: targetId,
                    sourceList: sourceList, targetList: targetList,
                    sourceType: sourceType, targetType: targetType });
            }
        }, {
            key: 'mousedown',
            value: function mousedown(d3path, d) {
                this.viewEdge(d);
            }
        }]);

        return PathChangeViewPolicy;
    }(Policy.Policy);

    return {
        Policy: PathChangeViewPolicy
    };
}]);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Base policy class for the graph object
 * 
 * Policies are used to isolate features for a graph.
 * Policies can be installed on nodes, links, or the graph.
 * Each policy has interaction handlers that will be called by the graph
 * if installed. Policies can also modify graph functions (see QTipPolicy).
 * Multiple policies can be installed for a node or link. 
 * 
 * To write your own policy, create a new factory that uses the policy
 * you want to inherit as a dependency, and extend its policy. 
 * Return the class object with Policy as key, and 
 * add the policy to the PolicyService factory.
 * 
 * For saving state or consts for the policy, create a namespace
 * in graph.state and graph.consts.
 * Ex. 
 *      graph.state.myPolicy = {};
 *      graph.consts.myPolicy = {};
 */
angular.module('PolicyModule').factory('Policy', [function () {
    var Policy = function () {
        function Policy(policyName) {
            _classCallCheck(this, Policy);

            this.policyName = policyName;
            this.graph = null;
            this.initialized = false;
        }

        /**
         * Called when the policy is installed.
         * 
         * @param  {Graph}  graph   The Graph that the policy is
         *                          being installed on
         */


        _createClass(Policy, [{
            key: 'initialize',
            value: function initialize(graph) {
                if (this.initialized) {
                    return;
                }
                this.initialized = true;
                this.graph = graph;
            }

            /**
             * Handler, meant to be overridden in subclasses
             *
             * @param  {d3 object}    d3obj    The d3object
             * @param  {Node/Link/Graph}  d   The object it was
             *                                installed for.    
             */

        }, {
            key: 'mouseover',
            value: function mouseover(d3obj, d) {}
        }, {
            key: 'dblclick',
            value: function dblclick(d3obj, d) {}
        }, {
            key: 'contextmenu',
            value: function contextmenu(d3obj, d) {}
        }, {
            key: 'mouseout',
            value: function mouseout(d3obj, d) {}
        }, {
            key: 'mousedown',
            value: function mousedown(d3obj, d) {}
        }, {
            key: 'mouseup',
            value: function mouseup(d3obj, d) {}

            /**
             * Will be called when the graph is being destroyed.
             * Used to remove any elements or bindings the policy
             * has added.
             */

        }, {
            key: 'destroy',
            value: function destroy() {}
        }]);

        return Policy;
    }();

    return {
        Policy: Policy
    };
}]);
'use strict';

/**
 * Contains all the policies.
 * See policy.js for info on how policies work.
 */
angular.module('PolicyModule').factory('PolicyService', ['Policy', 'QTipPolicy', 'PathChangeViewPolicy', 'NodeSelectionPolicy', 'SplitJoinNodePolicy', 'SplitJoinViewPolicy', 'SaveStatePolicy', function (Policy, QTipPolicy, PathChangeViewPolicy, NodeSelectionPolicy, SplitJoinNodePolicy, SplitJoinViewPolicy, SaveStatePolicy) {

    return {
        Policy: Policy.Policy,
        QTipPolicy: QTipPolicy.Policy,
        PathChangeViewPolicy: PathChangeViewPolicy.Policy,
        NodeSelectionPolicy: NodeSelectionPolicy.Policy,
        SplitJoinNodePolicy: SplitJoinNodePolicy.Policy,
        SplitJoinViewPolicy: SplitJoinViewPolicy.Policy,
        SaveStatePolicy: SaveStatePolicy.Policy
    };
}]);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This policy adds tooltip functionality to nodes and links.
 * When installing, install on both links and nodes.
 * 
 * Uses the qTip jQuery plugin
 */
angular.module('PolicyModule').factory('QTipPolicy', ['Policy', function (Policy) {
    var QTipPolicy = function (_Policy$Policy) {
        _inherits(QTipPolicy, _Policy$Policy);

        function QTipPolicy() {
            _classCallCheck(this, QTipPolicy);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(QTipPolicy).call(this, "QTipPolicy"));
        }

        /**
         * Called when the policy is installed
         * Modifies the updateNewNodes and 
         * updateNewPaths method of the graph to install qtip
         * onto each node and path.
         *
         * @param      {Graph}  graph   The graph it is 
         *                              installed on
         */


        _createClass(QTipPolicy, [{
            key: 'initialize',
            value: function initialize(graph) {
                if (this.initialized) {
                    return;
                }
                _get(Object.getPrototypeOf(QTipPolicy.prototype), 'initialize', this).call(this, graph);

                var thisPolicy = this;
                var state = graph.state.QTipPolicy = {};

                state.mousedown = false;

                var consts = graph.consts.QTipPolicy = {};

                //Tracking mouse click state to make tooltip
                //disappear if the node is being dragged.
                $('#visualization-graph').mouseup(function (e) {
                    state.mouseup = false;
                });

                //override updateNewNodes and updateNewPaths
                //to install qtip
                var graphUpdateNewNodes = graph.updateNewNodes;
                graph.updateNewNodes = function (newNodes) {
                    graphUpdateNewNodes.call(graph, newNodes);
                    thisPolicy.updateNewNodes(newNodes);
                };

                var graphUpdateNewPaths = graph.updateNewPaths;
                graph.updateNewPaths = function (newPaths) {
                    graphUpdateNewPaths.call(graph, newPaths);
                    thisPolicy.updateNewPaths(newPaths);
                };
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                //removing all qtip from DOM
                $('[id^="qtip"]').remove();
            }

            /**
             * Keeping track of mousedown state
             *
             * @param      {d3Object}  d3obj  The d3 pbject
             * @param      {Node/Link}  d     The matching data object
             */

        }, {
            key: 'mousedown',
            value: function mousedown(d3obj, d) {
                var thisGraph = this.graph,
                    state = thisGraph.state.QTipPolicy;
                state.mousedown = true;
            }

            /**
             * Keeping track of mousedown state
             *
             * @param      {d3Object}  d3obj  The d3 pbject
             * @param      {Node/Link}  d     The matching data object
             */

        }, {
            key: 'mouseup',
            value: function mouseup(d3obj, d) {
                var thisGraph = this.graph,
                    state = thisGraph.state.QTipPolicy;
                state.mousedown = false;
            }

            /**
             * Called when New Nodes are added during the
             * update graph function
             *
             * @param      {d3Node}  newNodes  The new nodes that are
             *                                 being added to the graph
             */

        }, {
            key: 'updateNewNodes',
            value: function updateNewNodes(newNodes) {
                var thisGraph = this.graph,
                    state = thisGraph.state.QTipPolicy;

                //incase library hasn't loaded yet
                if ($(document).qtip != undefined) {
                    //attaching qtip
                    newNodes.each(function (d) {
                        var thisNode = this,
                            nodeState = d.state;

                        var text;

                        //If node has children, then it is a service
                        if (thisGraph.dataSource.children_struct[d.id] != null) {
                            text = "<b><u>Selectors:</b></u> ";
                            var selectorMap = thisGraph.dataSource.selectors[d.id];
                            var hasKeys = false;
                            for (var key in selectorMap) {
                                var hasKeys = true;
                                text += key + " : <i>" + selectorMap[key] + "</i>,\n ";
                            }
                            if (hasKeys === false) {
                                //comma will be removed
                                text = "No Selectors, ";
                            }
                        } else {
                            text = "<b><u>Labels:</b></u> ";
                            var labelsMap = thisGraph.dataSource.labels[d.id];
                            var hasKeys = false;
                            for (var key in labelsMap) {
                                var hasKeys = true;
                                text += key + " : <i>" + labelsMap[key] + "</i>,\n ";
                            }
                            if (hasKeys === false) {
                                //comma will be removed
                                text = "No labels, ";
                            }
                        }
                        //remove last comma
                        text = text.slice(0, -2);

                        // var offset = $('#visualization-graph').offset();
                        // var position = [offset.left + d.x + d.radius, offset.top + d.y +d.radius];

                        $(thisNode).qtip({
                            content: {
                                title: d.id,
                                text: text
                            },
                            events: {
                                show: function show() {
                                    var api = $(thisNode).qtip('api');
                                    var offset = $('#graphContainer').offset();
                                    var position = [offset.left + (d.x * thisGraph.dragSvg.scale() + thisGraph.dragSvg.translate()[0]), offset.top + (d.y + d.radius) * thisGraph.dragSvg.scale() + thisGraph.dragSvg.translate()[1]];
                                    api.set('position.target', position);
                                    return !state.mousedown;
                                }
                            },
                            show: {
                                delay: 0,
                                solo: $('#visualization-graph')
                            },
                            style: {
                                classes: 'qtip-blue qtip-shadow'
                            },
                            position: {
                                my: 'top center',
                                at: 'bottom center'
                            },
                            // target: position
                            hide: {
                                event: 'mousedown mouseleave'
                            }
                        });
                    });
                }
            }

            /**
             * Called when new paths are added during the
             * update graph function
             *
             * @param      {d3Path}  newPaths  The new paths that are
             *                                 being added to the graph
             */

        }, {
            key: 'updateNewPaths',
            value: function updateNewPaths(newPaths) {
                var thisGraph = this.graph,
                    state = thisGraph.state.QTipPolicy;

                //incase library hasn't loaded yet
                if ($(document).qtip != undefined) {
                    //adding qtip
                    newPaths.each(function (d) {
                        var thisPath = this;
                        //getting midpoint of path
                        var pathEl = d3.select(this).node();
                        var midpoint = pathEl.getPointAtLength(pathEl.getTotalLength() / 2);
                        var targetRet = d.getMidpoint();
                        var text = "Bytes: " + d.getWeight();
                        $(thisPath).qtip({
                            content: {
                                text: text
                            },
                            events: {
                                show: function show() {
                                    //if mouse is down, don't let qtip show
                                    return !state.mousedown;
                                }
                            },
                            show: {
                                delay: 0,
                                solo: $('#graphContainer')
                            },
                            style: {
                                classes: 'qtip-blue qtip-shadow'
                            },
                            position: {
                                my: targetRet.my,
                                at: 'center center',
                                target: 'mouse',
                                adjust: targetRet.adjust
                            },
                            hide: {
                                event: 'mousedown mouseleave'
                            }

                        });
                    });
                }
            }
        }]);

        return QTipPolicy;
    }(Policy.Policy);

    return {
        Policy: QTipPolicy
    };
}]);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This policy provides a way for properties to be saved 
 * between view changes
 * 
 * It modifies the destroy function to also pass in an object that
 * will have all its properties saved and will be available 
 * on graph load. When saving variables to the object, namespace with
 * the policy name.
 * 
 * This policy must be loaded first in order for it saved variables 
 * to be loaded when the view comes back to the graph
 */
angular.module('PolicyModule').factory('SaveStatePolicy', ['Policy', function (Policy) {
    var SaveStatePolicy = function (_Policy$Policy) {
        _inherits(SaveStatePolicy, _Policy$Policy);

        /**
         * Takes in the angular service to which it will
         * save it's properties to.
         *
         * @param      {Object}  savedState  Object to save 
         *                                   properties to
         */

        function SaveStatePolicy(savedState) {
            _classCallCheck(this, SaveStatePolicy);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SaveStatePolicy).call(this, 'SaveStatePolicy'));

            _this.savedState = savedState;
            return _this;
        }

        /**
         * Called when the policy is installed
         * Modifies the destroy method 
         * and adds a load method to the graph
         *
         * @param      {Graph}  graph   The graph it is 
         *                              installed on
         */


        _createClass(SaveStatePolicy, [{
            key: 'initialize',
            value: function initialize(graph) {
                this.graph = graph;
                var thisPolicy = this;
                graph.destroy = function () {
                    thisPolicy.graphDestroy.call(graph, thisPolicy.savedState);
                };

                graph.load = function (savedState) {
                    thisPolicy.graphLoad.call(graph, savedState);
                };
            }

            /**
             * Will override the graph's default destroy, with 
             * this policy's savedState passed in.
             * Called with this as the graph
             *
             * @param      {Object}  savedState  The saved state
             */

        }, {
            key: 'graphDestroy',
            value: function graphDestroy(savedState) {
                var thisGraph = this;
                _(thisGraph.defaultNodePolicies).forEach(function (policy) {
                    policy.destroy(savedState);
                });
                _(thisGraph.defaultPathPolicies).forEach(function (policy) {
                    policy.destroy(savedState);
                });
                for (var key in thisGraph.bindings) {
                    $(window).off(key, thisGraph.bindings[key]);
                }
            }

            /**
             * Will be called with the graph as this
             * Used to have all other policies use the load state
             *
             * @param      {Object}  savedState  The saved state
             */

        }, {
            key: 'graphLoad',
            value: function graphLoad(savedState) {
                var thisGraph = this;
                _(thisGraph.defaultNodePolicies).forEach(function (policy) {
                    if (policy.load != null) {
                        policy.load(savedState);
                    }
                });
                _(thisGraph.defaultPathPolicies).forEach(function (policy) {
                    if (policy.load != null) {
                        policy.load(savedState);
                    }
                });
            }
        }]);

        return SaveStatePolicy;
    }(Policy.Policy);

    return {
        Policy: SaveStatePolicy
    };
}]);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This policy is used for splitting a node into its children,
 * and joining them back to their parent.
 * Splits on double click, and joins on right click.
 * If multiple nodes are selected at the time of a split or join event,
 * it will split or join all of them.
 */
angular.module('PolicyModule').factory('SplitJoinNodePolicy', ['NodeSelectionPolicy', 'VisualizerNode', function (NodeSelectionPolicy, VisualizerNode) {
    var SplitJoinNodePolicy = function (_NodeSelectionPolicy$) {
        _inherits(SplitJoinNodePolicy, _NodeSelectionPolicy$);

        function SplitJoinNodePolicy() {
            _classCallCheck(this, SplitJoinNodePolicy);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SplitJoinNodePolicy).call(this));

            _this.policyName = "SplitJoinNodePolicy";
            return _this;
        }

        _createClass(SplitJoinNodePolicy, [{
            key: 'initialize',
            value: function initialize(graph) {
                if (this.initialized) {
                    return;
                }
                _get(Object.getPrototypeOf(SplitJoinNodePolicy.prototype), 'initialize', this).call(this, graph);
                var state = graph.state.SplitJoinNodePolicy = {};
                state.splitNodes = [];
            }

            /**
             * Triggering split on double click
             *
             * @param      {D3Object}  d3node  The d3 node
             * @param      {Object}  d      The matching data object
             */

        }, {
            key: 'dblclick',
            value: function dblclick(d3node, d) {
                var thisGraph = this.graph,
                    superState = thisGraph.state.SplitJoinNodePolicy,
                    superConsts = thisGraph.consts.SplitJoinNodePolicy;

                if (!d3.event.ctrlKey) {
                    if (superState.selectedNodes.indexOf(d) > -1) {
                        this.splitMultipleNodes(superState.selectedNodes);
                    } else {
                        this.removeAllSelectedNodes();
                        this.splitNode(d);
                    }
                };
            }

            /**
             * Triggering join on right click
             *
             * @param      {D3Obj}  d3node  The d3 node
             * @param      {Object}  d      The matching data object
             */

        }, {
            key: 'contextmenu',
            value: function contextmenu(d3node, d) {
                var thisGraph = this.graph,
                    superState = thisGraph.state.NodeSelectionPolicy,
                    superConsts = thisGraph.consts.NodeSelectionPolicy;

                var thisGraph = this.graph;
                d3.event.preventDefault();
                if (!d3.event.ctrlKey) {
                    //if try to join a highlighted node while multiple nodes are selected,
                    //we join all highlighted nodes
                    var selectedNodes = superState.selectedNodes;
                    if (selectedNodes.indexOf(d) > -1) {
                        for (var i = 0; i < selectedNodes.length; i++) {
                            this.joinNode(selectedNodes[i]);
                        }
                    } else {
                        //if we try to join a node that isn't part of a highlight,
                        //we remove all highlights and then join the clicked node
                        this.removeAllSelectedNodes();
                        this.joinNode(d);
                    }
                }
            }

            /**
             * Splits a node.
             * used to share code between splitNode and splitMultipleNodes
             * while preventing the handlers for them both firing
             * 
             * @param      {Node}  node    The node being split
             * @return     {Array}  The new nodes created by the split
             */

        }, {
            key: '__splitNode',
            value: function __splitNode(node) {
                var thisGraph = this.graph,
                    state = thisGraph.state.SplitJoinNodePolicy;
                var name = node.id;
                var children_struct = thisGraph.children_struct;
                //if it has no children to split into
                if (children_struct[name] === undefined) {
                    return;
                }

                //removing the node from the list of nodes
                thisGraph.nodes = _.filter(thisGraph.nodes, function (graphNodes) {
                    return graphNodes != node;
                });
                // console.log(thisGraph.nodes);
                thisGraph.spliceLinksForNode(node);

                //getting all the node id's for finding flow
                var node_names_set = [];
                for (var i = 0; i < thisGraph.nodes.length; i++) {
                    node_names_set.push(thisGraph.nodes[i].id);
                }

                //set of nodes after the split
                var new_nodes = [];
                for (var i = 0; i < children_struct[name].length; i++) {
                    node_names_set.push(children_struct[name][i]);
                    new_nodes.push(children_struct[name][i]);
                }
                var retData = thisGraph.dataSource.getFlowBetweenSet(node_names_set);

                //formatting data for new nodes
                var xLoc = node.x;
                var yLoc = node.y;
                var ancestors = node.ancestors.slice();
                //keeping ordering that first in ancestor list is closest in relationship
                ancestors.splice(0, 0, node.id);
                var parent = node.id;
                var new_node_objs = [];
                var radius = node.radius * thisGraph.consts.radiusDecay;
                var nodeData = retData.nodeData;
                for (var i = 0; i < nodeData.length; i++) {
                    //calculating which of the nodes in retData[0] are new
                    if (new_nodes.indexOf(nodeData[i].id) > -1) {
                        var id = nodeData[i].id;
                        var text = nodeData[i].text;
                        var new_node = new VisualizerNode.Node(null, null, id, text, radius, parent, ancestors, xLoc, yLoc);
                        new_node.initialize(thisGraph);
                        thisGraph.nodes.push(new_node);
                        new_node_objs.push(new_node);
                    }
                }
                thisGraph.links = thisGraph.dataSource.processLinkData(retData.linkData, thisGraph.nodes);
                thisGraph.initNodes();
                thisGraph.initLinks();

                state.splitNodes.push(node.id);
                return new_node_objs;
            }

            /**
             * Splits the give node
             *
             * @param      {Node}  node    The node being split
             */

        }, {
            key: 'splitNode',
            value: function splitNode(node) {
                var thisGraph = this.graph,
                    state = thisGraph.state.SplitJoinNodePolicy;

                var res = this.__splitNode(node);
                if (res == null) {
                    return;
                }
                this.splitNodeEvent(res);
            }

            /**
             * Splits all the nodes passed in
             *
             * @param      {Array}  nodes   Array of nodes to be split
             */

        }, {
            key: 'splitMultipleNodes',
            value: function splitMultipleNodes(nodes) {
                var thisGraph = this.graph,
                    state = thisGraph.state.SplitJoinNodePolicy;
                var resNodes = [];
                for (var i = 0; i < nodes.length; i++) {
                    var res = this.__splitNode(nodes[i]);
                    resNodes = resNodes.concat(res);
                }

                this.splitMultipleNodesEvent(res);
            }

            /**
             * Called after a single node is split
             *
             * @param      {Array}  newNodes  The new nodes
             */

        }, {
            key: 'splitNodeEvent',
            value: function splitNodeEvent(newNodes) {
                var thisGraph = this.graph;
                thisGraph.setPositions();
                thisGraph.updateGraph();
            }

            /**
             * Called after multiple nodes are split at once
             *
             * @param      {Array}  newNodes  The new nodes
             */

        }, {
            key: 'splitMultipleNodesEvent',
            value: function splitMultipleNodesEvent(newNodes) {
                var thisGraph = this.graph;
                thisGraph.setPositions();
                thisGraph.updateGraph();
            }

            /**
             * used to share code between joinNode and joinMultipleNode
             * while preventing both handlers firing
             * 
             * @param      {Node}          node    The node to join
             * @return     {Node}  The new node after the join
             */

        }, {
            key: '__joinNode',
            value: function __joinNode(node) {
                var thisGraph = this.graph,
                    consts = thisGraph.consts.SplitJoinNodePolicy,
                    state = thisGraph.state.SplitJoinNodePolicy;

                //check that node still exists
                if (thisGraph.nodes.indexOf(node) == -1) {
                    return;
                }

                var children_struct = thisGraph.children_struct;
                var name = node.id;
                //if it has no ancestor, nothing to join
                if (children_struct.topLevel.indexOf(name) > -1) {
                    return;
                }

                var parent = node.parent;
                var to_be_deleted = [];
                var node_names_set = [];
                for (var i = 0; i < thisGraph.nodes.length; i++) {
                    //if node won't be collapsed
                    if (thisGraph.nodes[i].ancestors.indexOf(node.parent) == -1) {
                        node_names_set.push(thisGraph.nodes[i].id);
                    } else {
                        to_be_deleted.push(thisGraph.nodes[i]);
                    }
                }
                var new_node_id = node.parent;
                node_names_set.push(node.parent);

                //formatting data
                var radius = node.radius / thisGraph.consts.radiusDecay;
                var xLoc = node.x;
                var yLoc = node.y;
                var parent = node.ancestors[1];
                var ancestors = node.ancestors.slice(1);
                var new_node = new VisualizerNode.Node(xLoc, yLoc, new_node_id, new_node_id, radius, parent, ancestors);
                thisGraph.nodes.push(new_node);

                var retData = thisGraph.dataSource.getFlowBetweenSet(node_names_set);
                //remove all nodes that will be joined
                for (var i = 0; i < to_be_deleted.length; i++) {
                    var node_to_delete = to_be_deleted[i];
                    thisGraph.nodes.splice(thisGraph.nodes.indexOf(node_to_delete), 1);
                    thisGraph.spliceLinksForNode(node_to_delete);
                }
                thisGraph.links = thisGraph.dataSource.processLinkData(retData.linkData, thisGraph.nodes);
                thisGraph.initNodes();
                thisGraph.initLinks();

                state.splitNodes.splice(state.splitNodes.indexOf(new_node.id), 1);

                return new_node;
            }

            /**
             * Joins the given node
             *
             * @param      {Node}  node    The node to join
             */

        }, {
            key: 'joinNode',
            value: function joinNode(node) {
                var thisGraph = this.graph,
                    state = thisGraph.state.SplitJoinNodePolicy;

                var newNode = this.__joinNode(node);
                if (newNode != null) {
                    this.joinNodeEvent(newNode);
                }
            }

            /**
             * Joins all the given nodes
             *
             * @param      {Array}  nodes   The nodes to join
             */

        }, {
            key: 'joinMultipleNode',
            value: function joinMultipleNode(nodes) {
                var thisGraph = this.graph,
                    state = thisGraph.state.SplitJoinNodePolicy;

                var new_nodes = [];
                for (var i = 0; i < nodes.length; i++) {
                    var res = this.__joinNode(nodes[i]);
                    new_nodes.push(res);
                }
                this.joinMultipleNodesEvent(new_nodes);
            }

            /**
             * Called after a single node is joined
             *
             * @param      {Node}  newNode  The new node
             */

        }, {
            key: 'joinNodeEvent',
            value: function joinNodeEvent(newNode) {
                var thisGraph = this.graph;
                thisGraph.updateGraph();
            }

            /**
             * Called after multiple nodes are joined
             *
             * @param      {Array}  newNodes  The new nodes
             */

        }, {
            key: 'joinMultipleNodesEvent',
            value: function joinMultipleNodesEvent(newNodes) {
                var thisGraph = this.graph;
                thisGraph.updateGraph();
            }
        }]);

        return SplitJoinNodePolicy;
    }(NodeSelectionPolicy.Policy);

    return {
        Policy: SplitJoinNodePolicy
    };
}]);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This policy is used to change the view to focus on splitting and 
 * joining events.
 * Overrides the certain force layout functions of the graph to partition a split
 * into the focused nodes and the connected nodes.
 * 
 * Has save/load methods for the save state policy.
 * Has back button support.
 * Can auto change the title of the graph.
 */
angular.module('PolicyModule').factory('SplitJoinViewPolicy', ['SplitJoinNodePolicy', 'VisualizerNode', function (SplitJoinNodePolicy, VisualizerNode) {
    var SplitJoinViewPolicy = function (_SplitJoinNodePolicy$) {
        _inherits(SplitJoinViewPolicy, _SplitJoinNodePolicy$);

        function SplitJoinViewPolicy() {
            _classCallCheck(this, SplitJoinViewPolicy);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SplitJoinViewPolicy).call(this));

            _this.policyName = "SplitJoinViewPolicy";
            return _this;
        }

        _createClass(SplitJoinViewPolicy, [{
            key: 'initialize',
            value: function initialize(graph) {
                if (this.initialized) {
                    return;
                }
                _get(Object.getPrototypeOf(SplitJoinViewPolicy.prototype), 'initialize', this).call(this, graph);
                var state = graph.state.SplitJoinViewPolicy = {};
                state.savedStates = [];
                state.focusGroup = null;
                state.eventHistory = [];
                state.focusGroups = [];
                state.foci = [];
                state.zooms = {};
                state.layout = {};
                state.layoutDefault = null;
                state.nodeIdsToReshow = null;
                state.backButtonElem = null;
                state.titleElem = null;
                state.scale = graph.dragSvg.scale();
                state.translate = graph.dragSvg.translate();

                var consts = graph.consts.SplitJoinViewPolicy = {};
                consts.boundary = 0.8;

                //overriding d3force methods of the graph.
                graph.d3ForceBounds = this.d3ForceBounds;
                graph.d3ForceTick = this.d3ForceTick;
                graph.d3ForceStart = this.d3ForceStart;
            }

            /**
             * Links the provided element a back button feature
             * Doesn't trigger the on-click event
             * That should be done through angular ng-click.
             *
             * @param      {jQuery}  elem    The jquery selected element
             */

        }, {
            key: 'installBackButton',
            value: function installBackButton(elem) {
                var thisGraph = this.graph,
                    thisPolicy = this,
                    state = thisGraph.state.SplitJoinViewPolicy;

                state.backButtonElem = elem;
                state.backButton = function () {
                    if (state.eventHistory.length > 0) {
                        thisPolicy.undoLastEvent.call(thisPolicy);
                    }
                };
            }

            /**
             * Will allow this policy to change the title of the graph
             * as split and join events occur.
             *
             * @param      {jQuery}  elem    The jquery selected element
             */

        }, {
            key: 'installTitle',
            value: function installTitle(elem) {
                var thisGraph = this.graph,
                    thisPolicy = this,
                    state = thisGraph.state.SplitJoinViewPolicy;

                state.titleElem = elem;
            }

            /**
             * Called when the graph is being destroyed
             *
             * @param      {Object}  savedState  Any property on this
             *                                   object will be accessible
             *                                   when the view reloads
             */

        }, {
            key: 'destroy',
            value: function destroy(savedState) {
                //Only if the save state policy is installed
                if (savedState != null) {
                    this.save(savedState);
                }
            }

            /**
             * Will save the current state, and all history.
             *
             * @param      {Object}  savedState  Any property on this
             *                                   object will be accessible
             *                                   when the view reloads
             */

        }, {
            key: 'save',
            value: function save(savedState) {
                var thisGraph = this.graph,
                    state = thisGraph.state.SplitJoinViewPolicy;

                var nodes = this.graph.nodes;
                var links = this.graph.links;
                var currTitle = null;
                if (state.titleElem != null) {
                    currTitle = state.titleElem.text();
                }
                var focusGroup = state.focusGroup;
                var focusGroups = state.focusGroups;
                var eventHistory = state.eventHistory;
                // var foci = state.foci;
                var zooms = state.zooms;
                var layout = state.layout;

                //if there hasn't been a break event yet
                if (state.layoutDefault == null) {
                    var defaultLayout = {};
                    _.forEach(thisGraph.nodes, function (n) {
                        defaultLayout[n.id] = { x: n.x, y: n.y };
                    });
                    state.layoutDefault = defaultLayout;
                }

                var layoutDefault = state.layoutDefault;
                var ret = { nodes: nodes, links: links,
                    states: state.savedStates, currTitle: currTitle,
                    focusGroup: focusGroup, focusGroups: focusGroups,
                    eventHistory: eventHistory, zooms: zooms,
                    layout: layout, layoutDefault: layoutDefault
                };
                savedState.SplitJoinViewPolicy = ret;
            }

            /**
             * Will be called when the graph is reloaded, assuming
             * save state policy is installed
             *
             * @param      {Object}  loadState  Contains all the saved
             *                                  variables
             */

        }, {
            key: 'load',
            value: function load(loadState) {
                var thisPolicy = this;
                var thisGraph = this.graph,
                    state = thisGraph.state.SplitJoinViewPolicy;

                loadState = loadState.SplitJoinViewPolicy;
                state.savedStates = loadState.states;
                thisGraph.links = loadState.links;
                thisGraph.nodes = loadState.nodes;

                var currTitle = loadState.currTitle;
                if (state.titleElem != null) {
                    state.titleElem.text(currTitle);
                }
                state.focusGroup = loadState.focusGroup;
                state.eventHistory = loadState.eventHistory;
                state.focusGroups = loadState.focusGroups;
                state.zooms = loadState.zooms;
                state.layout = loadState.layout;
                state.layoutDefault = loadState.layoutDefault;

                if (state.backButtonElem != null) {
                    if (state.eventHistory.length > 0) {
                        state.backButtonElem.fadeTo('slow', 1);
                    }
                }

                var children_struct = thisGraph.children_struct;

                _.forEach(thisGraph.nodes, function (d) {
                    d.SplitJoinViewPolicy = {};
                    if (_.includes(children_struct[state.focusGroups[0]], d.id)) {
                        d.SplitJoinViewPolicy.type = "focus";
                    } else {
                        d.SplitJoinViewPolicy.type = "connected";
                    }
                });

                //loading a previous layout
                var layout;
                if (state.focusGroups.length === 0) {
                    thisGraph.zoomed([0, 0], 1);
                    layout = state.layoutDefault;
                } else {
                    var zoom = state.zooms[state.focusGroups];
                    if (zoom != null) {
                        thisGraph.zoomed(zoom[0], zoom[1]);
                    }
                    layout = state.layout[state.focusGroups];
                }

                //layout can't be null
                _.forEach(thisGraph.nodes, function (n) {
                    var pos = layout[n.id];
                    if (pos == null) {
                        console.log(layout, n);
                    }
                    n.x = pos.x;
                    n.y = pos.y;
                });
                thisGraph.state.initForce = true;
                thisGraph.updateGraph.call(thisGraph, function () {
                    thisPolicy.updateGraphCallback.call(thisPolicy);
                });
                state.scale = thisGraph.dragSvg.scale();
                state.translate = thisGraph.dragSvg.translate();
            }

            /**
             * Will be called during D3 force simulations
             * by the graph, so "this" will point to the graph object
             *
             * @param      {number}  width   D3 Layout Width
             * @param      {number}  height  D3 Layout Height
             */

        }, {
            key: 'd3ForceTick',
            value: function d3ForceTick(e, width, height) {
                var thisGraph = this,
                    state = thisGraph.state,
                    consts = thisGraph.consts,
                    statePolicy = state.SplitJoinViewPolicy;

                var offset = consts.displayOffset;
                var scale = state.SplitJoinViewPolicy.scale;
                var nodes = thisGraph.nodes;

                // Move nodes toward cluster focus.
                var foci = statePolicy.foci;
                function gravity(alpha) {
                    return function (d) {
                        if (foci.length === 2) {
                            if (d.SplitJoinViewPolicy.type === "focus") {
                                d.y += (foci[0] - d.y) * alpha;
                            } else {
                                d.y += (foci[1] - d.y) * alpha;
                            }
                            d.x += (width / 2 - d.x) * alpha;
                        } else {

                            d.y += (height / 2 - d.y) * alpha;
                            d.x += (width / 2 - d.x) * alpha;
                        }
                    };
                }

                // Make sure no nodes overlap
                var q = d3.geom.quadtree(thisGraph.nodes),
                    i = 0,
                    n = nodes.length;

                while (++i < n) {
                    q.visit(this.d3ForceCollide(nodes[i]));
                }

                // Make sure nodes are within bounds
                thisGraph.circles.each(this.d3ForceCollide(.5)).each(gravity(.2 * e.alpha)).attr("cx", function (d) {
                    return d.x = Math.max((d.radius + offset) / scale, Math.min(width + (-offset - d.radius) / scale, d.x));
                }).attr("cy", function (d) {
                    if (d.SplitJoinViewPolicy == null || d.SplitJoinViewPolicy == null) {
                        d.y = Math.max((d.radius + offset) / scale, Math.min(height + (-offset - d.radius) / scale, d.y));
                        return d.y;
                    } else if (d.SplitJoinViewPolicy.type === "focus") {
                        d.y = Math.max(d.radius + offset, Math.min((height + (-offset - d.radius) / scale) * consts.SplitJoinViewPolicy.boundary, d.y));
                        return d.y;
                    } else if (d.SplitJoinViewPolicy.type === "connected") {
                        d.y = Math.max((height + (offset - d.radius) / scale) * consts.SplitJoinViewPolicy.boundary, Math.min(height + (-offset - d.radius) / scale, d.y));
                        return d.y;
                    }
                });

                thisGraph.paths.attr('x1', function (d) {
                    return d.source.x;
                }).attr('y1', function (d) {
                    return d.source.y;
                }).attr('x2', function (d) {
                    return d.target.x;
                }).attr('y2', function (d) {
                    return d.target.y;
                });
            }

            /**
             * Calculates the boundaries of the simulation
             * 
             * Will be called during D3 force simulations
             * by the graph, so "this" will point to the graph object
             * 
             * @return     {Object}          Returns an object
             *                               that has the width
             *                               and height as 
             *                               properties 
             */

        }, {
            key: 'd3ForceBounds',
            value: function d3ForceBounds() {
                var thisGraph = this,
                    state = thisGraph.state,
                    consts = thisGraph.consts,
                    constsPolicy = consts.SplitJoinViewPolicy,
                    statePolicy = state.SplitJoinViewPolicy;
                var nodes = thisGraph.nodes;
                function calcMaxNodes(width, height) {
                    var area = width * height;
                    var radius = thisGraph.consts.startRadius;
                    //treating them as a square for approx
                    var length = radius * 3.5;
                    var amount = area / (length * length);
                    return amount;
                }
                //The offset is the buffer from the edges
                //Original Width and Height are given to the force layout
                //so that it is centered, but nodes will be forced to be
                //within the offset bounds
                var offset = consts.displayOffset;
                var svgWidth = $('#visualization-graph').width() / thisGraph.dragSvg.scale();
                var svgHeight = $('#visualization-graph').height() / thisGraph.dragSvg.scale();

                var width = svgWidth;
                var height = svgHeight;

                var amount = calcMaxNodes(width - 2 * offset, height - 2 * offset);
                var scale = 1;
                if (nodes.length > amount) {
                    scale = amount / nodes.length;
                    thisGraph.zoomed(thisGraph.dragSvg.translate(), scale);
                    width /= scale;
                    height /= scale;
                }

                //calculating foci for simulation
                var focusGroups = statePolicy.focusGroups;
                var foci = statePolicy.foci;
                if (focusGroups.length === 0) {
                    foci = [height / 2];
                } else {
                    //setting foci height position based on percentage
                    var focusNodes = thisGraph.children_struct[focusGroups[0]];
                    constsPolicy.boundary = focusNodes.length / nodes.length;
                    var top = height * constsPolicy.boundary;
                    var bot = height - top;
                    if (top < 2 * thisGraph.consts.maxRadius) {
                        constsPolicy.boundary = 2.5 * thisGraph.consts.maxRadius / height;
                        top = height * constsPolicy.boundary;
                        bot = height - top;
                    }
                    if (bot < 2 * thisGraph.consts.maxRadius) {
                        constsPolicy.boundary = 1 - 2.5 * thisGraph.consts.maxRadius / height;
                        top = height * constsPolicy.boundary;
                        bot = height - top;
                    }
                    foci = [top / 2, top + bot / 2];
                }
                return { width: width, height: height };
            }

            /**
             * Triggering split on double click
             * 
             * Focus group stores the node that is about to be split.
             * 
             * When focus group has length 0, the first split 
             * will just be pushed on.
             * The node will be split and pushed to the top half 
             * of the screen, and the bottom half will contain any
             * nodes it has connections to.
             * 
             * When a focus group length is >= 1, if the node to be
             * split is a focus node, it will replace focusGroup[0] and
             * the top half will be its children, and bottom half will
             * be the nodes it has connections to.
             * 
             * If the split is in the bottom half, then the bottom half
             * will display it's children and will only show connections between
             * the two groups, and will replace focusGroup[1].
             * 
             * @param      {D3Obj}  d3node  The d3 node
             * @param      {Object}  d      The matching data object
             */

        }, {
            key: 'dblclick',
            value: function dblclick(d3node, d) {
                var thisGraph = this.graph,
                    state = thisGraph.state.SplitJoinViewPolicy,
                    consts = thisGraph.consts.SplitJoinViewPolicy;

                //check if can split
                var name = d.id;
                var children_struct = thisGraph.children_struct;
                if (children_struct[name] === undefined) {
                    return;
                }

                //save current layout
                var layout = {};
                _.forEach(thisGraph.nodes, function (n) {
                    layout[n.id] = { x: n.x, y: n.y };
                });
                if (state.focusGroups.length === 0) {
                    //create new dict
                    state.layoutDefault = layout;
                }

                if (state.focusGroups.length === 0) {
                    //toplevel split
                    state.focusGroups.push(d.id);
                } else if (_.includes(children_struct[state.focusGroups[0]], d.id)) {
                    //splitting a focus node
                    state.focusGroups[0] = d.id;
                } else if (state.focusGroups.length === 1) {
                    //splitting a
                    //connected node
                    state.focusGroups.push(d.id);
                } else if (_.includes(children_struct[state.focusGroups[1]], d.id)) {
                    //splitting a
                    //connected node
                    state.focusGroups[1] = d.id;
                }

                if (state.focusGroups.length === 2 && state.focusGroups[1] === d.id) {
                    //Splitting a connected node, keep all focus nodes
                    var nodesToKeep = [d];
                    var nodeIdsToReshow = [];
                    var groupOneNodes = children_struct[state.focusGroups[0]];
                    _.forEach(thisGraph.nodes, function (node) {
                        if (_.includes(groupOneNodes, node.id)) {
                            nodeIdsToReshow.push(node.id);
                            nodesToKeep.push(node);
                        };
                    });
                } else {
                    //Make split nodes the focus and keep nodes that are connected
                    var nodesToKeep = [d];
                    var nodeIdsToReshow = [];
                    _.forEach(thisGraph.links, function (link) {
                        if (link.source === d && nodeIdsToReshow.indexOf(link.target.id) == -1) {
                            link.target.SplitJoinViewPolicy = {};
                            link.target.SplitJoinViewPolicy.type = "connected";
                            nodeIdsToReshow.push(link.target.id);
                            nodesToKeep.push(link.target);
                        } else if (link.target === d && nodeIdsToReshow.indexOf(link.source.id) == -1) {
                            link.source.SplitJoinViewPolicy = {};
                            link.source.SplitJoinViewPolicy.type = "connected";
                            nodeIdsToReshow.push(link.source.id);
                            nodesToKeep.push(link.source);
                        }
                    });
                }

                //Removing links from the node to be split
                thisGraph.circles.each(function (node) {
                    if (node.id !== d.id) {
                        thisGraph.spliceLinksForNode(node);
                    }
                });
                thisGraph.updateGraph();

                //disabling update graph to prevent new data from
                //redrawing links while there are animations going on
                thisGraph.state.disableUpdate = true;
                thisGraph.circles.each(function (node) {
                    if (node.id !== d.id) {
                        d3.select(this).transition().delay(200).duration(400).style("opacity", 0);
                    } else {
                        //disabling qtip
                        $(this).qtip('disable', true);
                    }
                });

                //scaling the graph to its original zoom for the current view
                var currScale = thisGraph.dragSvg.scale();
                var currTranslate = thisGraph.dragSvg.translate();
                if (currScale !== state.scale || currTranslate !== state.translate) {
                    thisGraph.zoomed(state.translate, state.scale);
                }

                //centering the node that is splitting
                var xLoc = $('#visualization-graph').width() / 2;
                var yLoc = $('#visualization-graph').height() / 2;

                d.xStart = d.x;
                d.yStart = d.y;
                d.x = xLoc;
                d.y = yLoc;
                d3node.transition("nodePositionTransition").duration(750).attrTween("transform", function (d) {
                    var xStart = d.xStart;
                    var yStart = d.yStart;
                    d.xStart = d.x;
                    d.yStart = d.y;
                    return d3.interpolateString("translate(" + xStart + "," + yStart + ")", "translate(" + d.x + "," + d.y + ")");
                });

                var splitNodeFunc = _get(Object.getPrototypeOf(SplitJoinViewPolicy.prototype), 'splitNode', this);
                state.nodeIdsToReshow = nodeIdsToReshow;
                //waiting for node transition
                var thisPolicy = this;
                setTimeout(function () {
                    thisGraph.nodes = nodesToKeep;
                    splitNodeFunc.call(thisPolicy, d);
                }, 750);
            }

            /**
             * To be called after the graph is split.
             * Brings all nodes back into view and sets their attributes
             */

        }, {
            key: 'updateGraphCallback',
            value: function updateGraphCallback() {
                var thisGraph = this.graph,
                    state = thisGraph.state.SplitJoinViewPolicy,
                    consts = thisGraph.consts.SplitJoinViewPolicy;

                thisGraph.circles.each(function (node) {
                    d3.select(this).transition().duration(400).style("opacity", 1);
                    d3.select(this).classed("focus", false);
                    d3.select(this).classed("connected", false);

                    if (node.SplitJoinViewPolicy != null) {
                        if (node.SplitJoinViewPolicy.type === "focus") {
                            d3.select(this).classed("focus", true);
                        } else if (node.SplitJoinViewPolicy.type === "connected") {
                            d3.select(this).classed("connected", true);
                        }
                    }
                });

                state.nodeIdsToReshow = null;

                thisGraph.updateGraph();
            }

            /**
             * Randomly sets the positions of any unset node
             */

        }, {
            key: 'setPositions',
            value: function setPositions() {
                var thisGraph = this.graph,
                    thisPolicy = this,
                    graphConsts = thisGraph.consts,
                    graphState = thisGraph.state;

                var offset = graphConsts.displayOffset;
                var nodes = thisGraph.nodes;
                var ret = thisPolicy.d3ForceBounds.call(thisGraph);

                function getRandomInt(min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                };

                _.forEach(nodes, function (node) {
                    if (node.x == null || node.y == null) {
                        var x = getRandomInt(node.radius + offset, ret.width - node.radius - offset);
                        var y = getRandomInt(node.radius + offset, ret.height - node.radius - offset);
                        node.x = x;
                        node.y = y;
                    }
                });
            }

            /**
             * Called on the start of the d3 force simulation
             * Will override the method of the graph
             * "this" points to the graph
             */

        }, {
            key: 'd3ForceStart',
            value: function d3ForceStart() {
                var thisGraph = this;
                thisGraph.circles.attr('cx', function (d) {
                    if (d.xStart != null) {
                        d.xStart = d.xStart * thisGraph.dragSvg.scale() + thisGraph.dragSvg.translate()[0];
                    }
                    return d.x;
                }).attr('cy', function (d) {
                    if (d.yStart != null) {
                        d.yStart = d.yStart * thisGraph.dragSvg.scale() + thisGraph.dragSvg.translate()[1];
                    }
                    return d.y;
                });

                thisGraph.paths.attr('x1', function (d) {
                    return d.source.x;
                }).attr('y1', function (d) {
                    return d.source.y;
                }).attr('x2', function (d) {
                    return d.target.x;
                }).attr('y2', function (d) {
                    return d.target.y;
                });
            }

            /**
             * Called after a single node is split
             * 
             * @param      {Array}  newNodes  The new nodes
             */

        }, {
            key: 'splitNodeEvent',
            value: function splitNodeEvent(newNodes) {
                var thisPolicy = this;
                var thisGraph = this.graph,
                    state = thisGraph.state.SplitJoinViewPolicy,
                    consts = thisGraph.consts.SplitJoinViewPolicy;

                var children_struct = thisGraph.children_struct;
                _.forEach(newNodes, function (d) {
                    d.SplitJoinViewPolicy = {};
                    if (_.includes(children_struct[state.focusGroups[0]], d.id)) {
                        d.SplitJoinViewPolicy.type = "focus";
                    } else {
                        d.SplitJoinViewPolicy.type = "connected";
                    }
                });

                thisGraph.state.initForce = false;
                thisPolicy.setPositions();
                var title = newNodes[0].parent;
                state.focusGroup = title;

                //if the last event has the same id, it must be the
                //oppposite of this event, so we remove that event from
                //the event stack.
                //Otherwise, we add the event ot the stack
                if (state.eventHistory.length !== 0 && state.eventHistory[state.eventHistory.length - 1].id === title) {
                    state.eventHistory.pop();
                } else {
                    state.eventHistory.push({ id: title, event: 'split' });
                }

                if (state.backButtonElem != null && state.eventHistory.length !== 0) {
                    state.backButtonElem.fadeTo('slow', 1);
                }

                if (state.titleElem != null) {
                    var text = "";
                    if (state.focusGroups.length > 0) {
                        text += state.focusGroups[0];
                    }
                    if (state.focusGroups.length === 2) {
                        text += ' & ' + state.focusGroups[1];
                    }
                    state.titleElem.text(text);
                }

                //re-enable graph update
                thisGraph.state.disableUpdate = false;
                thisGraph.updateGraph(function () {
                    thisPolicy.updateGraphCallback.call(thisPolicy);
                });
                state.zooms[state.focusGroups] = [thisGraph.dragSvg.translate(), thisGraph.dragSvg.scale()];
                state.scale = thisGraph.dragSvg.scale();
                state.translate = thisGraph.dragSvg.translate();

                //save current layout
                var layout = {};
                _.forEach(thisGraph.nodes, function (n) {
                    layout[n.id] = { x: n.x, y: n.y };
                });
                state.layout[state.focusGroups] = layout;
            }

            /**
             * Overriding from super class so that we can have
             * top level nodes reappear when they are hidden
             * due to there being two focus groups.
             * 
             * @param      {Node}          node    The node to join
             * @return     {Node}  The new node after the join
             */

        }, {
            key: '__joinNode',
            value: function __joinNode(node) {
                var thisGraph = this.graph,
                    consts = thisGraph.consts.SplitJoinNodePolicy,
                    stateSuper = thisGraph.state.SplitJoinNodePolicy,
                    state = thisGraph.state.SplitJoinViewPolicy;

                //check that node still exists
                if (thisGraph.nodes.indexOf(node) == -1) {
                    return;
                }

                var children_struct = thisGraph.children_struct;
                var name = node.id;
                //if it has no ancestor, nothing to join
                if (children_struct.topLevel.indexOf(name) > -1) {
                    return;
                }

                var parent = node.parent;
                var to_be_deleted = [];
                var nodeNameSet = [];
                for (var i = 0; i < thisGraph.nodes.length; i++) {
                    //if node won't be collapsed
                    if (thisGraph.nodes[i].ancestors.indexOf(node.parent) == -1) {
                        nodeNameSet.push(thisGraph.nodes[i].id);
                    } else {
                        to_be_deleted.push(thisGraph.nodes[i]);
                    }
                }
                var new_node_id = node.parent;
                nodeNameSet.push(node.parent);

                var ancestors_struct = thisGraph.ancestors_struct;
                var children_struct = thisGraph.children_struct;
                // - setting focusGroup -
                //either replacing one of the groups,
                //or joining back into a top level, so there is only
                //one focus
                var index = state.focusGroups.indexOf(parent);
                if (ancestors_struct[parent] != null) {
                    state.focusGroups[index] = ancestors_struct[parent];
                } else {
                    state.focusGroups.splice(index, 1);
                }

                //nameToAdd are top level nodes that are to be added
                //to the graph.
                var nameToAdd = [];
                //will only need to add a top level node if there is
                //only one focus
                if (state.focusGroups.length === 1) {
                    //Add only thost that aren't an ancestor of the node
                    //to join, the focus group or an ancestor of it,
                    //and aren't already in nodeNameSet.
                    //get flow between top level as long as
                    //the top level isn't an ancestor of the
                    //focus group, and isn't already part of the
                    //node set;
                    var ancestors = ancestors_struct[node.id];
                    ancestors.push(state.focusGroups[0]);
                    //the or empty array is to prevent concatenating a null
                    //or undefined value
                    ancestors = ancestors.concat(ancestors_struct[state.focusGroups[0]] || []);
                    _.forEach(children_struct.topLevel, function (n) {
                        if (ancestors.indexOf(n) === -1 && nodeNameSet.indexOf(n) == -1) {
                            nameToAdd.push(n);
                        }
                    });
                    nodeNameSet = nodeNameSet.concat(nameToAdd);
                } else if (state.focusGroups.length === 0) {
                    //no focus groups means we are at top level
                    //Should add any top level nodes that aren't
                    //already there
                    _.forEach(children_struct.topLevel, function (n) {
                        if (nodeNameSet.indexOf(n) == -1) {
                            nameToAdd.push(n);
                        }
                    });
                    nodeNameSet = nodeNameSet.concat(nameToAdd);
                }

                //formatting data
                var radius = node.radius / thisGraph.consts.radiusDecay;
                var xLoc = node.x;
                var yLoc = node.y;
                var parent = node.ancestors[1];
                var ancestors = node.ancestors.slice(1);
                var newNode = new VisualizerNode.Node(xLoc, yLoc, new_node_id, new_node_id, radius, parent, ancestors);
                thisGraph.nodes.push(newNode);

                //remove all nodes that will be joined
                for (var i = 0; i < to_be_deleted.length; i++) {
                    var node_to_delete = to_be_deleted[i];
                    thisGraph.nodes.splice(thisGraph.nodes.indexOf(node_to_delete), 1);
                    thisGraph.spliceLinksForNode(node_to_delete);
                }

                var retData = thisGraph.dataSource.getFlowBetweenSet(nodeNameSet);
                //holds the nodeData which will be processed
                var nodesToProcess = [];
                //finding the node data that corresponds to the top level
                //nodes to add - nameToAdd.
                var nodeData = retData.nodeData;
                for (var i = 0; i < nodeData.length; i++) {
                    if (nameToAdd.indexOf(nodeData[i].id) !== -1) {
                        nodesToProcess.push(nodeData[i]);
                    }
                }

                //The top level nodes that are added
                var newNodes = thisGraph.dataSource.processNodeData(nodesToProcess);
                _.forEach(newNodes, function (n) {
                    n.radius = n.radius || thisGraph.consts.startRadius;
                });
                thisGraph.nodes = thisGraph.nodes.concat(newNodes);

                thisGraph.links = thisGraph.dataSource.processLinkData(retData.linkData, thisGraph.nodes);
                //Only keep top level nodes that have connections to
                //the current focus group
                //we remove the node name from nameToAdd if we are
                //keeping it
                if (state.focusGroups.length === 1) {
                    _.forEach(thisGraph.links, function (l) {
                        //checking if there exists a link touching each of nameToAdd
                        if (nameToAdd.indexOf(l.source.id) !== -1) {
                            if (state.focusGroups[0] === l.target.parent) {
                                nameToAdd.splice(nameToAdd.indexOf(l.source.id), 1);
                            }
                        } else if (nameToAdd.indexOf(l.target.id) !== -1) {
                            if (state.focusGroups[0] === l.source.parent) {
                                nameToAdd.splice(nameToAdd.indexOf(l.target.id), 1);
                            }
                        }
                    });
                } else {
                    //We want to keep them all
                    //since any left in nameToAdd will be removed,
                    //we reset nameToAdd here.
                    nameToAdd = [];
                }

                //whatever is remaining in nameToAdd isn't connected
                //to the focus group, so we should remove it.
                var nodeToRemove = [];
                if (nameToAdd.length !== 0) {
                    for (var i = 0; i < thisGraph.nodes.length; i++) {
                        if (nameToAdd.indexOf(thisGraph.nodes[i].id) !== -1) {
                            nameToAdd.splice(nameToAdd.indexOf(thisGraph.nodes[i].id), 1);
                            thisGraph.spliceLinksForNode(thisGraph.nodes[i]);
                            nodeToRemove.push(thisGraph.nodes[i]);
                            if (nameToAdd.length === 0) {
                                break;
                            }
                        }
                    }
                }
                _.forEach(nodeToRemove, function (n) {
                    thisGraph.nodes.splice(thisGraph.nodes.indexOf(n, 1));
                });

                thisGraph.initNodes();
                thisGraph.initLinks();

                stateSuper.splitNodes.splice(stateSuper.splitNodes.indexOf(newNode.id), 1);

                return newNode;
            }

            /**
             * Called after a single node is joined
             * 
             * If the focus group has been seen before, it will
             * load that layout. Otherwise, it will run a d3 force
             * simulation to generate one.
             *
             * @param      {Node}  newNode  The new node
             */

        }, {
            key: 'joinNodeEvent',
            value: function joinNodeEvent(newNode) {
                var thisGraph = this.graph,
                    thisPolicy = this,
                    state = thisGraph.state.SplitJoinViewPolicy;

                //if the last event has the same id, it must be the
                //oppposite of this event, so we remove that event from
                //the event stack.
                //Otherwise, we add the event to the stack
                if (state.eventHistory.length !== 0 && state.eventHistory[state.eventHistory.length - 1].id === newNode.id) {
                    state.eventHistory.pop();
                } else {
                    state.eventHistory.push({ id: newNode.id, event: 'join' });
                }

                var children_struct = thisGraph.children_struct;

                _.forEach(thisGraph.nodes, function (d) {
                    d.SplitJoinViewPolicy = {};
                    if (_.includes(children_struct[state.focusGroups[0]], d.id)) {
                        d.SplitJoinViewPolicy.type = "focus";
                    } else {
                        d.SplitJoinViewPolicy.type = "connected";
                    }
                });

                //setting back button
                if (state.backButtonElem != null && state.eventHistory.length === 0) {
                    state.backButtonElem.fadeTo('slow', 0);
                }

                //setting title
                if (state.titleElem != null) {
                    var text = "";
                    if (state.focusGroups.length > 0) {
                        text += state.focusGroups[0];
                    }
                    if (state.focusGroups.length === 2) {
                        text += ' & ' + state.focusGroups[1];
                    }
                    state.titleElem.text(text);
                }

                //loading a previous layout
                var layout;
                if (state.focusGroups.length === 0) {
                    thisGraph.zoomed([0, 0], 1);
                    layout = state.layoutDefault;
                } else {
                    var zoom = state.zooms[state.focusGroups];
                    if (zoom != null) {
                        thisGraph.zoomed(zoom[0], zoom[1]);
                    }
                    layout = state.layout[state.focusGroups];
                }

                if (layout != null) {
                    _.forEach(thisGraph.nodes, function (n) {
                        var pos = layout[n.id];
                        if (pos == null) {
                            console.log(layout, n);
                        }
                        n.x = pos.x;
                        n.y = pos.y;
                    });
                    thisGraph.updateGraph.call(thisGraph, function () {
                        thisPolicy.updateGraphCallback.call(thisPolicy);
                    });
                    state.scale = thisGraph.dragSvg.scale();
                    state.translate = thisGraph.dragSvg.translate();
                } else {
                    //Need to run a force simulation as this layout
                    //hasn't been done before
                    thisGraph.state.initForce = false;
                    thisPolicy.setPositions();
                    thisGraph.updateGraph(function () {
                        thisPolicy.updateGraphCallback.call(thisPolicy);
                    });
                    state.zooms[state.focusGroups] = [thisGraph.dragSvg.translate(), thisGraph.dragSvg.scale()];
                    state.scale = thisGraph.dragSvg.scale();
                    state.translate = thisGraph.dragSvg.translate();

                    var layout = {};
                    _.forEach(thisGraph.nodes, function (n) {
                        layout[n.id] = { x: n.x, y: n.y };
                    });
                    state.layout[state.focusGroups] = layout;
                }
            }

            /**
             * Undoes the last split or join event.
             * Meant to be called by the back button.
             */

        }, {
            key: 'undoLastEvent',
            value: function undoLastEvent() {
                var thisGraph = this.graph,
                    thisPolicy = this,
                    state = thisGraph.state.SplitJoinViewPolicy;

                var last = state.eventHistory[state.eventHistory.length - 1];
                var id = last.id;
                var node;
                if (last.event === 'join') {
                    var children_struct = thisGraph.children_struct;
                    node = thisGraph.findNodeById(id);
                    var d3node = thisGraph.findD3Node(id);
                    thisPolicy.dblclick(d3node, node);
                } else {
                    var nodeId = thisGraph.dataSource.children_struct[id][0];
                    node = thisGraph.findNodeById(nodeId);
                    _get(Object.getPrototypeOf(SplitJoinViewPolicy.prototype), 'joinNode', this).call(thisPolicy, node);
                }
            }
        }]);

        return SplitJoinViewPolicy;
    }(SplitJoinNodePolicy.Policy);

    return {
        Policy: SplitJoinViewPolicy
    };
}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGFzb3VyY2UvbW9kdWxlLmpzIiwiZ3JhcGgvbW9kdWxlLmpzIiwibGluay9tb2R1bGUuanMiLCJub2RlL21vZHVsZS5qcyIsInBvbGljeS9tb2R1bGUuanMiLCJkYXRhc291cmNlL2RhdGFzb3VyY2UuanMiLCJncmFwaC9ncmFwaC5qcyIsImdyYXBoL3Zpc3VhbGl6ZXJncmFwaC5qcyIsImxpbmsvbGluay5qcyIsImxpbmsvdmlzdWFsaXplcmxpbmsuanMiLCJub2RlL25vZGUuanMiLCJub2RlL3Zpc3VhbGl6ZXJub2RlLmpzIiwicG9saWN5L25vZGVzZWxlY3Rpb25wb2xpY3kuanMiLCJwb2xpY3kvcGF0aHZpZXdjaGFuZ2Vwb2xpY3kuanMiLCJwb2xpY3kvcG9saWN5LmpzIiwicG9saWN5L3BvbGljeXNlcnZpY2UuanMiLCJwb2xpY3kvcXRpcHBvbGljeS5qcyIsInBvbGljeS9zYXZlc3RhdGVwb2xpY3kuanMiLCJwb2xpY3kvc3BsaXRqb2lubm9kZXBvbGljeS5qcyIsInBvbGljeS9zcGxpdGpvaW52aWV3cG9saWN5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQSxRQUFRLE1BQVIsQ0FBZSxZQUFmLEVBQTZCLENBQUMsWUFBRCxFQUFlLFlBQWYsQ0FBN0I7Ozs7Ozs7QUNEQSxRQUFRLE1BQVIsQ0FBZSxhQUFmLEVBQThCLENBQUMsY0FBRCxDQUE5Qjs7Ozs7OztBQ0FBLFFBQVEsTUFBUixDQUFlLFlBQWYsRUFBNkIsRUFBN0I7Ozs7Ozs7QUNBQSxRQUFRLE1BQVIsQ0FBZSxZQUFmLEVBQTZCLEVBQTdCOzs7Ozs7OztBQ0NBLFFBQVEsTUFBUixDQUFlLGNBQWYsRUFBK0IsQ0FBQyxZQUFELEVBQWUsWUFBZixDQUEvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ09BLFFBQVEsTUFBUixDQUFlLFlBQWYsRUFDSyxPQURMLENBQ2EsWUFEYixFQUMyQixDQUFDLGdCQUFELEVBQW1CLGdCQUFuQixFQUN0QixVQUFVLGNBQVYsRUFBMEIs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LEtBQUssS0FBckI7QUFBQSxvQkFDSSxhQUFhLElBRGpCO0FBQUEsb0JBRUksUUFBUSxVQUFVLEtBQVYsQ0FBZ0IsbUJBRjVCOztBQUlBLG9CQUFJLE9BQU8sTUFBTSxZQUFOLENBQW1CLE1BQU0sWUFBTixDQUFtQixNQUFuQixHQUE0QixDQUEvQyxDQUFYO0FBQ0Esb0JBQUksS0FBSyxLQUFLLEVBQWQ7QUFDQSxvQkFBSSxJQUFKO0FBQ0Esb0JBQUksS0FBSyxLQUFMLEtBQWUsTUFBbkIsRUFBMkI7QUFDdkIsd0JBQUksa0JBQWtCLFVBQVUsZUFBaEM7QUFDQSwyQkFBTyxVQUFVLFlBQVYsQ0FBdUIsRUFBdkIsQ0FBUDtBQUNBLHdCQUFJLFNBQVMsVUFBVSxVQUFWLENBQXFCLEVBQXJCLENBQWI7QUFDQSwrQkFBVyxRQUFYLENBQW9CLE1BQXBCLEVBQTRCLElBQTVCO0FBQ0gsaUJBTEQsTUFLTztBQUNILHdCQUFJLFNBQVMsVUFBVSxVQUFWLENBQXFCLGVBQXJCLENBQXFDLEVBQXJDLEVBQXlDLENBQXpDLENBQWI7QUFDQSwyQkFBTyxVQUFVLFlBQVYsQ0FBdUIsTUFBdkIsQ0FBUDtBQUNBLGlHQUFlLElBQWYsQ0FBb0IsVUFBcEIsRUFBZ0MsSUFBaEM7QUFDSDtBQUNKO0FBcjhCZ0g7O0FBQUE7QUFBQSxNQUNuRixvQkFBb0IsTUFEK0Q7O0FBdzhCckgsV0FBTztBQUNILGdCQUFRO0FBREwsS0FBUDtBQUdQLENBMzhCbUMsQ0FEcEMiLCJmaWxlIjoiYXBwL2J1bmRsZV9lczYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIERlZmluaW5nIHRoZSBEYXRhIE1vZHVsZS5cbiAqIFNlZSBkYXRhc291cmNlLmpzIGZvciB0aGUgYmFzZSBkYXRhIHNvdXJjZSBjbGFzcyBhbmQgXG4gKiBtb3JlIGluZm8gb24gRGF0YVNvdXJjZS5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ0RhdGFNb2R1bGUnLCBbJ05vZGVNb2R1bGUnLCAnTGlua01vZHVsZSddKTtcblxuXG5cblxuIiwiLyoqXG4gKiBEZWZpbmluZyB0aGUgZ3JhcGggbW9kdWxlLlxuICogU2VlIGdyYXBoLmpzIGZvciB0aGUgYmFzZSBncmFwaCBjbGFzcyBhbmQgbW9yZSBpbmZvIG9uIGdyYXBocy5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ0dyYXBoTW9kdWxlJywgWydQb2xpY3lNb2R1bGUnXSk7XG5cblxuXG5cblxuIiwiLyoqXG4gKiBEZWZpbmluZyB0aGUgTGluayBNb2R1bGUuXG4gKiBTZWUgbGluay5qcyBmb3IgdGhlIGJhc2UgbGluayBjbGFzcyBhbmQgbW9yZSBpbmZvIG9uIGxpbmtzLlxuICovXG5hbmd1bGFyLm1vZHVsZSgnTGlua01vZHVsZScsIFtdKTtcblxuXG5cblxuXG4iLCIvKipcbiAqIERlZmluaW5nIHRoZSBOb2RlIE1vZHVsZS5cbiAqIFNlZSBub2RlLmpzIGZvciB0aGUgYmFzZSBub2RlIGNsYXNzIGFuZCBtb3JlIGluZm8gb24gbm9kZXMuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdOb2RlTW9kdWxlJywgW10pO1xuXG5cblxuXG5cblxuXG5cblxuIiwiLyoqXG4gKiBEZWZpbmluZyB0aGUgUG9saWN5IE1vZHVsZS5cbiAqIFNlZSBwb2xpY3kuanMgZm9yIHRoZSBiYXNlIHBvbGljeSBjbGFzcyBhbmQgXG4gKiBpbmZvIG9uIGhvdyBwb2xpY2llcyB3b3JrLlxuICovXG5hbmd1bGFyLm1vZHVsZSgnUG9saWN5TW9kdWxlJywgWydOb2RlTW9kdWxlJywgJ0xpbmtNb2R1bGUnXSk7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGNsYXNzIHRoZSBEYXRhU291cmNlIG9iamVjdC5cbiAqIFxuICogVGhlIERhdGFTb3VyY2Ugb2JqZWN0IHRha2VzIGluIG5vZGUgYW5kIGxpbmsgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIsIFxuICogYW5kIHByb3ZpZGVzIG1ldGhvZHMgZm9yIGNvbnZlcnRpbmcgYW5kIG1hbmlwdWxhdGluZyB0aGUgZGF0YSBmb3JcbiAqIHRoZSBncmFwaCBvYmplY3QuXG4gKiBcbiAqIFRvIHdyaXRlIHlvdXIgb3duIERhdGFTb3VyY2Ugb2JqZWN0LCBjcmVhdGUgYSBuZXcgZmFjdG9yeSB0aGF0IHVzZXMgdGhlIERhdGFTb3VyY2VcbiAqIHlvdSB3YW50IHRvIGluaGVyaXQgYXMgYSBkZXBlbmRlbmN5LCBhbmQgZXh0ZW5kIGl0cyBEYXRhU291cmNlIGNsYXNzLiBcbiAqIFJldHVybiB0aGUgY2xhc3Mgb2JqZWN0IHdpdGggRGF0YVNvdXJjZSBhcyBrZXkuXG4gKiBcbiAqL1xuYW5ndWxhci5tb2R1bGUoJ0RhdGFNb2R1bGUnKVxuICAgIC5mYWN0b3J5KCdEYXRhU291cmNlJywgWydWaXN1YWxpemVyTm9kZScsICdWaXN1YWxpemVyTGluaycsIFxuICAgIFx0ZnVuY3Rpb24gKFZpc3VhbGl6ZXJOb2RlLCBWaXN1YWxpemVyTGluaykge1xuXG4gICAgXHRjbGFzcyBEYXRhU291cmNlIHtcblx0XHRcdGNvbnN0cnVjdG9yKG5vZGVzLCBsaW5rcywgY2hpbGRyZW5fc3RydWN0LCBhbmNlc3RvcnNfc3RydWN0LCBcblx0XHRcdFx0XHRlbmRwb2ludHMsIHByb3ZpZGVycywgbGFiZWxzLCBzZWxlY3RvcnMpIHtcblx0XHRcdFx0dGhpcy5ub2RlcyA9IG5vZGVzO1xuXHRcdFx0XHR0aGlzLmxpbmtzID0gbGlua3M7XG5cdFx0XHRcdHRoaXMuY2hpbGRyZW5fc3RydWN0ID0gY2hpbGRyZW5fc3RydWN0O1xuXHRcdFx0XHR0aGlzLmFuY2VzdG9yc19zdHJ1Y3QgPSBhbmNlc3RvcnNfc3RydWN0O1xuXHRcdFx0XHR0aGlzLmVuZHBvaW50cyA9IGVuZHBvaW50cztcblx0XHRcdFx0dGhpcy5wcm92aWRlcnMgPSBwcm92aWRlcnM7XG5cdFx0XHRcdHRoaXMubGFiZWxzID0gbGFiZWxzO1xuXHRcdFx0XHR0aGlzLnNlbGVjdG9ycyA9IHNlbGVjdG9ycztcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlTm9kZXMobm9kZXMpIHtcblx0XHRcdFx0dGhpcy5ub2RlcyA9IG5vZGVzO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGVMaW5rcyhsaW5rcykge1xuXHRcdFx0XHR0aGlzLmxpbmtzID0gbGlua3M7XG5cdFx0XHR9XG5cblx0XHRcdG5vZGVJZFRvTmFtZShpZCkge1xuXHRcdCAgICAgICAgdmFyIG5vZGVzID0gdGhpcy5ub2Rlcztcblx0XHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcblx0XHQgICAgICAgICAgICBpZiAobm9kZXNbaV0uaWQgPT0gaWQpIHtcblx0XHQgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVzW2ldLm5hbWU7XG5cdFx0ICAgICAgICAgICAgfVxuXHRcdCAgICAgICAgfVxuXHRcdCAgICB9XG5cblx0XHQgICAgLyoqXG5cdFx0ICAgICAqIEdpdmVuIGEgc2V0IG9mIG5vZGVzLCByZXR1cm5zIHRoZSBub2RlXG5cdFx0ICAgICAqIHRoYXQgbWF0Y2hlcyB0aGUgaWRcblx0XHQgICAgICpcblx0XHQgICAgICogQHBhcmFtICAgICAge3N0cmluZ30gaWQgICAgICBUaGUgaWRlbnRpZmllclxuXHRcdCAgICAgKiBAcGFyYW0gICAgICB7QXJyYXl9ICBub2RlcyAgIFRoZSBub2Rlc1xuXHRcdCAgICAgKiBAcmV0dXJuICAgICB7Tm9kZX0gICBUaGUgbm9kZSB3aXRoIHRoZSBtYXRjaGluZyBpZFxuXHRcdCAgICAgKi9cblx0XHQgICAgZmluZE5vZGVCeUlkKGlkLCBub2Rlcyl7XG5cdFx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0ICAgICAgICAgICAgaWYgKGlkID09IG5vZGVzW2ldLmlkKSB7XG5cdFx0ICAgICAgICAgICAgICAgIHJldHVybiBub2Rlc1tpXTtcblx0XHQgICAgICAgICAgICB9XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgIH07XG5cblx0XHQgICAgLyoqXG5cdFx0ICAgICAqIFNldHMgdGhlIHBhcmVudCBhbmQgYW5jZXN0b3JzIGF0dHJpYnV0ZSB1c2luZyBcblx0XHQgICAgICogYW5jZXN0b3JzX3N0cnVjdCBmb3IgYWxsIHRoZSBub2Rlc1xuXHRcdCAgICAgKiBBbHNvIGFkZHMgYW55IG5vZGVzIHdpdGhvdXQgYW5jZXN0b3JzLCB0aGF0IGFyZW4ndCBcblx0XHQgICAgICogdG9wbGV2ZWwgdG8gdGhlIGNsaWVudCBzZXJ2aWNlLlxuXHRcdCAgICAgKi9cblx0XHQgICAgc2V0QW5jZXN0b3JzKCkge1xuXHRcdCAgICBcdHZhciB0aGlzRGF0YVNvdXJjZSA9IHRoaXM7XG5cdFx0ICAgIFx0dmFyIGFkZGVkQ2xpZW50ID0gZmFsc2U7XG5cdFx0ICAgIFx0Xy5mb3JFYWNoKHRoaXNEYXRhU291cmNlLm5vZGVzLCBmdW5jdGlvbihub2RlKSB7XG5cdFx0ICAgIFx0XHRub2RlLmFuY2VzdG9ycyA9IHRoaXNEYXRhU291cmNlLmFuY2VzdG9yc19zdHJ1Y3Rbbm9kZS5pZF0gfHwgW107XG5cdFx0ICAgIFx0XHRpZiAoXy5pc0VtcHR5KG5vZGUuYW5jZXN0b3JzKSA9PT0gZmFsc2UpIHtcblx0XHQgICAgXHRcdFx0bm9kZS5wYXJlbnQgPSBub2RlLmFuY2VzdG9yc1swXTtcblx0XHQgICAgXHRcdH0gZWxzZSB7XG5cdFx0ICAgIFx0XHRcdGlmIChfLmluY2x1ZGVzKHRoaXNEYXRhU291cmNlLmNoaWxkcmVuX3N0cnVjdC50b3BMZXZlbCwgbm9kZS5pZCkgPT0gZmFsc2UpIHtcblx0XHQgICAgXHRcdFx0XHQvL2NvbnRhaW5lciBoYXMgbm8gcGFyZW50XG5cdFx0ICAgIFx0XHRcdFx0Ly9hZGRpbmcgdG8gY2xpZW50XG5cdFx0ICAgIFx0XHRcdFx0bm9kZS5hbmNlc3RvcnMucHVzaChcImNsaWVudFwiKTtcblx0XHQgICAgXHRcdFx0XHR0aGlzRGF0YVNvdXJjZS5hbmNlc3RvcnNfc3RydWN0W25vZGUuaWRdID0gW1wiY2xpZW50XCJdO1xuXHRcdCAgICBcdFx0XHRcdGlmIChhZGRlZENsaWVudCA9PT0gZmFsc2UpIHtcblx0XHQgICAgXHRcdFx0XHRcdGFkZGVkQ2xpZW50ID0gdHJ1ZTtcblx0XHRcdCAgICBcdFx0XHRcdHRoaXNEYXRhU291cmNlLmNoaWxkcmVuX3N0cnVjdC50b3BMZXZlbC5wdXNoKFwiY2xpZW50XCIpO1xuXHRcdCAgICBcdFx0XHRcdFx0dGhpc0RhdGFTb3VyY2UuY2hpbGRyZW5fc3RydWN0WydjbGllbnQnXSA9IFtdO1xuXHRcdCAgICBcdFx0XHRcdH1cblx0XHQgICAgXHRcdFx0XHR0aGlzRGF0YVNvdXJjZS5jaGlsZHJlbl9zdHJ1Y3RbJ2NsaWVudCddLnB1c2gobm9kZS5pZCk7XG5cdFx0XHQgICAgXHRcdH1cblx0XHQgICAgXHRcdH1cblx0XHQgICAgXHR9KVxuXHRcdCAgICB9XG5cblx0XHQgICAgLyoqXG5cdFx0ICAgICAqIFJldHVybnMgdGhlIGZsb3cgYmV0d2VlbiB0aGUgaGlnaGVzdCBsZXZlbCBncm91cGluZ1xuXHRcdCAgICAgKlxuXHRcdCAgICAgKiBAcmV0dXJuICAgICB7T2JqZWN0fSAgVGhlIHRvcCBsZXZlbCBmbG93LlxuXHRcdCAgICAgKi9cblx0XHQgICAgZ2V0VG9wTGV2ZWxGbG93KCkge1xuXHRcdCAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Rmxvd0JldHdlZW5TZXQodGhpcy5jaGlsZHJlbl9zdHJ1Y3QudG9wTGV2ZWwpO1xuXHRcdCAgICB9XG5cblx0XHQgICAgLyoqXG5cdFx0ICAgICAqIEdldHMgdGhlIGZsb3cgYmV0d2VlbiBhbnkgc2V0IG9mIG5vZGUgbGV2ZWxzXG5cdFx0ICAgICAqXG5cdFx0ICAgICAqIEBwYXJhbSAgICAgIHtBcnJheX0gIG5vZGVfbmFtZXMgIFRoZSBub2RlIG5hbWVzIGluIHRoZSBzZXRcblx0XHQgICAgICogQHJldHVybiAgICAge09iamVjdH0gIFRoZSBmbG93IGJldHdlZW4gc2V0LlxuXHRcdCAgICAgKi9cblx0XHQgICAgZ2V0Rmxvd0JldHdlZW5TZXQobm9kZV9uYW1lcykge1xuXHRcdCAgICAgICAgdmFyIGxvY2FsX25vZGVzID0gdGhpcy5ub2Rlcztcblx0XHQgICAgICAgIHZhciBpZE1hcHBpbmcgPSB7fTtcblx0XHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG9jYWxfbm9kZXMubGVuZ3RoOyBpKyspIHtcblx0XHQgICAgICAgICAgICB2YXIgbm9kZSA9IGxvY2FsX25vZGVzW2ldO1xuXG5cdFx0ICAgICAgICAgICAgLy9pZiBub2RlIGlzIGFscmVhZHkgYXQgaXRzIGhpZ2hlc3QgbGV2ZWxcblx0XHQgICAgICAgICAgICBpZiAobm9kZS5hbmNlc3RvcnMgPT09IG51bGwpIHtcblx0XHQgICAgICAgICAgICAgICAgaWRNYXBwaW5nW25vZGUuaWRdID0gbm9kZS5uYW1lO1xuXHRcdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdFx0ICAgICAgICAgICAgICAgIC8vY2hlY2sgdG8gc2VlIHdoaWNoIHRhZ3MgYXJlIHByZXNlbnQgaW4gdGhlIGFuY2VzdG9yIGxpc3Rcblx0XHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBub2RlX25hbWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0ICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5hbmNlc3RvcnMuaW5kZXhPZihub2RlX25hbWVzW2pdKSA+IC0xKSB7XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgaWRNYXBwaW5nW25vZGUuaWRdID0gbm9kZV9uYW1lc1tqXTtcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0XHQgICAgICAgICAgICAgICAgICAgIH1cblx0XHQgICAgICAgICAgICAgICAgfVxuXG5cdFx0ICAgICAgICAgICAgfVxuXHRcdCAgICAgICAgfSAgIFxuXHRcdCAgICAgICAgLy9tb2RpZnkgbGlua3Ncblx0XHQgICAgICAgIHZhciBsaW5rcyA9IHRoaXMubGlua3M7XG5cdFx0ICAgICAgICB2YXIgbGlua0RhdGEgPSBbXTtcblx0XHQgICAgICAgIFxuXHRcdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuXHRcdCAgICAgICAgICAgIHZhciBsaW5rID0gW107XG5cdFx0ICAgICAgICAgICAgbGluay5zb3VyY2UgPSBpZE1hcHBpbmdbbGlua3NbaV0uc291cmNlXSB8fCBsaW5rc1tpXS5zb3VyY2U7XG5cdFx0ICAgICAgICAgICAgbGluay50YXJnZXQgPSBpZE1hcHBpbmdbbGlua3NbaV0udGFyZ2V0XSB8fCBsaW5rc1tpXS50YXJnZXQ7XG5cdFx0ICAgICAgICAgICAgbGluay53ZWlnaHQgPSBsaW5rc1tpXS53ZWlnaHQ7XG5cdFx0ICAgICAgICAgICAgbGlua0RhdGEucHVzaChsaW5rKTtcblx0XHQgICAgICAgIH1cblxuXHRcdCAgICAgICAgLy9jcmVhdGluZyB0aGUgbm9kZURhdGFcblx0XHQgICAgICAgIHZhciBub2RlRGF0YSA9IFtdO1xuXHRcdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlX25hbWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0ICAgICAgICBcdHZhciBuZXdOb2RlO1xuXHRcdCAgICAgICAgICAgIHZhciBub2RlX3RvX2FkZCA9IFtdO1xuXHRcdCAgICAgICAgICAgIG5vZGVfdG9fYWRkLmlkID0gbm9kZV9uYW1lc1tpXTtcblx0XHQgICAgICAgICAgICBub2RlX3RvX2FkZC50ZXh0ID0gdGhpcy5ub2RlSWRUb05hbWUobm9kZV9uYW1lc1tpXSkgfHwgbm9kZV9uYW1lc1tpXTtcblxuXG5cdFx0ICAgICAgICAgICAgbm9kZV90b19hZGQuYW5jZXN0b3JzID0gdGhpcy5hbmNlc3RvcnNfc3RydWN0W25vZGVfbmFtZXNbaV1dIHx8IHRoaXMuYW5jZXN0b3JzX3N0cnVjdFtub2RlX3RvX2FkZC50ZXh0XSB8fCBbXTtcblx0XHQgICAgICAgICAgICBpZiAoXy5pc0VtcHR5KG5vZGVfdG9fYWRkLmFuY2VzdG9ycykgPT09IGZhbHNlKSB7XG5cdFx0ICAgICAgICAgICAgICAgIG5vZGVfdG9fYWRkLnBhcmVudCA9IG5vZGVfdG9fYWRkLmFuY2VzdG9yc1swXTtcblx0XHQgICAgICAgICAgICB9IGVsc2Uge1xuXHRcdCAgICAgICAgICAgICAgICBub2RlX3RvX2FkZC5wYXJlbnQgPSBudWxsO1xuXHRcdCAgICAgICAgICAgIH1cblx0XHQgICAgICAgICAgICBub2RlRGF0YS5wdXNoKG5vZGVfdG9fYWRkKTtcblx0XHQgICAgICAgIH1cblxuXHRcdCAgICAgICAgcmV0dXJuIHtub2RlRGF0YTpub2RlRGF0YSwgbGlua0RhdGE6bGlua0RhdGF9O1xuXHRcdCAgICB9XG5cblx0XHQgICAgLyoqXG5cdFx0ICAgICAqIHByb2Nlc3MgdGhlIG5vZGVEYXRhIG91dHB1dCBvZiBnZXRGbG93QmV0d2VlblNldFxuXHRcdCAgICAgKlxuXHRcdCAgICAgKiBAcGFyYW0gICAgICB7QXJyYXl9ICBub2RlRGF0YSAgTm9kZURhdGEgdG8gY29udmVydCBcblx0XHQgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIG5vZGUgb2JqZWN0c1xuXHRcdCAgICAgKiBAcmV0dXJuICAgICB7QXJyYXl9ICAgTm9kZSBvYmplY3RzXG5cdFx0ICAgICAqL1xuXHRcdCAgICBwcm9jZXNzTm9kZURhdGEobm9kZURhdGEpIHtcblx0XHQgICAgXHR2YXIgdGhpc0RhdGFTb3VyY2UgPSB0aGlzO1xuXHRcdCAgICAgICAgdmFyIG5vZGVzID0gW107XG5cdFx0ICAgICAgICBfLmZvckVhY2gobm9kZURhdGEsIGZ1bmN0aW9uKGRhdGEpIHtcblx0XHQgICAgICAgICAgICB2YXIgbmV3Tm9kZSA9IG5ldyBWaXN1YWxpemVyTm9kZS5Ob2RlKG51bGwsIG51bGwsIGRhdGEuaWQsIGRhdGEudGV4dCxcblx0XHQgICAgICAgICAgICAgICAgbnVsbCwgZGF0YS5wYXJlbnQsIGRhdGEuYW5jZXN0b3JzLCBudWxsLCBudWxsKTtcblx0XHQgICAgICAgICAgICBub2Rlcy5wdXNoKG5ld05vZGUpO1xuXHRcdCAgICAgICAgfSlcblx0XHQgICAgICAgIHJldHVybiBub2Rlcztcblx0XHQgICAgfVxuXG5cdFx0ICAgIC8qKlxuXHRcdCAgICAgKiBwcm9jZXNzIHRoZSBsaW5rRGF0YSBvdXRwdXQgb2YgZ2V0Rmxvd0JldHdlZW5TZXRcblx0XHQgICAgICpcblx0XHQgICAgICogQHBhcmFtICAgICAge0FycmF5fSAgbGlua0RhdGEgIFRoZSBsaW5rIGRhdGFcblx0XHQgICAgICogQHBhcmFtICAgICAge0FycmF5fSAgbm9kZXMgICAgIFRoZSBub2Rlc1xuXHRcdCAgICAgKiBAcmV0dXJuICAgICB7QXJyYXl9ICBMaW5rIG9iamVjdHNcblx0XHQgICAgICovXG5cdFx0ICAgIHByb2Nlc3NMaW5rRGF0YShsaW5rRGF0YSwgbm9kZXMpIHtcblx0XHQgICAgICAgIHZhciBsaW5rcyA9IFtdO1xuXHRcdCAgICAgICAgLy9hIG1hcHBpbmcgZnJvbSBzb3VyY2UuaWQtdGFyZ2V0LmlkIHRvIHRoZSBsaW5rIGFkZGVkXG5cdFx0ICAgICAgICB2YXIgYWRkZWRfbGlua3MgPSB7fTtcblx0XHQgICAgICAgIC8vdHJhbnNmb3JtaW5nIGxpbmsgZGF0YVxuXHRcdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5rRGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdCAgICAgICAgICAgIGlmIChsaW5rRGF0YVtpXS5zb3VyY2UgIT0gbGlua0RhdGFbaV0udGFyZ2V0KSB7XG5cdFx0ICAgICAgICAgICAgXHQvLyBjb25zb2xlLmxvZyhsaW5rRGF0YVtpXSlcblx0XHQgICAgICAgICAgICAgICAgdmFyIHNvdXJjZSA9IHRoaXMuZmluZE5vZGVCeUlkKGxpbmtEYXRhW2ldLnNvdXJjZSwgbm9kZXMpO1xuXHRcdCAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5maW5kTm9kZUJ5SWQobGlua0RhdGFbaV0udGFyZ2V0LCBub2Rlcyk7XG5cdFx0ICAgICAgICAgICAgICAgIHZhciB3ZWlnaHQgPSBsaW5rRGF0YVtpXS53ZWlnaHQ7XG5cdFx0ICAgICAgICAgICAgICAgIC8vaW4gb3JkZXIgdG8gc3VtIGFsbCB0aGUgd2VpZ2h0cyBvZiB0aGUgbGlua3Mgb2YgdGhlIHN1Yi1ub2Rlcyxcblx0XHQgICAgICAgICAgICAgICAgLy93ZSB1c2UgYWRkZWRfbGlua3MgdG8ga2VlcCB0cmFjayBpZiBhbiBsaW5rIHdhcyBhZGRlZFxuXHRcdCAgICAgICAgICAgICAgICAvL2lmIGl0IGlzLCB3ZSBtb2RpZnkgaXRzIHdlaWdodFxuXHRcdCAgICAgICAgICAgICAgICBpZiAoc291cmNlID09IG51bGwgfHwgdGFyZ2V0ID09IG51bGwpIHtcblx0XHQgICAgICAgICAgICAgICAgXHRjb250aW51ZTtcblx0XHQgICAgICAgICAgICAgICAgfVxuXHRcdCAgICAgICAgICAgICAgICBpZiAoYWRkZWRfbGlua3Nbc291cmNlLmlkICsgJy0nICsgdGFyZ2V0LmlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0ICAgICAgICAgICAgICAgICAgICB2YXIgbGluayA9IG5ldyBWaXN1YWxpemVyTGluay5MaW5rKHNvdXJjZSwgdGFyZ2V0LCB3ZWlnaHQpO1xuXHRcdCAgICAgICAgICAgICAgICAgICAgYWRkZWRfbGlua3Nbc291cmNlLmlkICsgJy0nICsgdGFyZ2V0LmlkXSA9IGxpbms7XG5cdFx0ICAgICAgICAgICAgICAgICAgICBsaW5rcy5wdXNoKGxpbmspO1xuXHRcdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHRcdCAgICAgICAgICAgICAgICAgICAgdmFyIGV4aXN0aW5nX2xpbmsgPSBhZGRlZF9saW5rc1tzb3VyY2UuaWQgKyAnLScgKyB0YXJnZXQuaWRdO1xuXHRcdCAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdfbGluay5zZXRXZWlnaHQoZXhpc3RpbmdfbGluay5nZXRSYXdXZWlnaHQoKSArIHdlaWdodCk7XG5cdFx0ICAgICAgICAgICAgICAgICAgICBleGlzdGluZ19saW5rLmluY3JlYXNlQ291bnQoKTtcblx0XHQgICAgICAgICAgICAgICAgfVxuXHRcdCAgICAgICAgICAgIH0gIFxuXHRcdCAgICAgICAgfVxuXHRcdCAgICAgICAgcmV0dXJuIGxpbmtzO1xuXHRcdCAgICB9XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHREYXRhU291cmNlOkRhdGFTb3VyY2Vcblx0XHR9XG59XSk7XG5cblxuXG5cblxuXG4iLCIvKipcbiAqIFRoZSBiYXNlIGNsYXNzIHRoZSBncmFwaCBvYmplY3QuXG4gKiBTdXBwb3J0cyBwb2xpY2llcy5cbiAqIFxuICogVG8gd3JpdGUgeW91ciBvd24gZ3JhcGggb2JqZWN0LCBjcmVhdGUgYSBuZXcgZmFjdG9yeSB0aGF0IHVzZXMgdGhlIGdyYXBoXG4gKiB5b3Ugd2FudCB0byBpbmhlcml0IGFzIGEgZGVwZW5kZW5jeSwgYW5kIGV4dGVuZCBpdHMgZ3JhcGggY2xhc3MuIFxuICogUmV0dXJuIHRoZSBjbGFzcyBvYmplY3Qgd2l0aCBHcmFwaCBhcyBrZXkuXG4gKiBcbiAqL1xuYW5ndWxhci5tb2R1bGUoJ0dyYXBoTW9kdWxlJylcbiAgICAuZmFjdG9yeSgnR3JhcGgnLCBbJ1BvbGljeVNlcnZpY2UnLCBmdW5jdGlvbiAoUG9saWN5U2VydmljZSkge1xuICAgICAgICBjbGFzcyBHcmFwaCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIGNvbnN0cnVjdG9yIGZvciB0aGUgZ3JhcGhcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7SFRNTCBTVkd9ICBzdmcgICAgIFRoZSBzdmcgdGhhdCB3aWxsIFxuICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob2xkIHRoZSBncmFwaFxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge05vZGV9ICBub2RlcyAgIExpc3Qgb2Ygbm9kZXMgZm9yIHRoZSBncmFwaFxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge0xpbmt9ICBsaW5rcyAgIExpc3Qgb2YgbGlua3MgZm9yIHRoZSBncmFwaFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcihzdmcsIG5vZGVzLCBsaW5rcykge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVzID0gbm9kZXMgfHwgW107XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmxpbmtzID0gbGlua3MgfHwgW107XG5cblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5kZWZhdWx0Tm9kZVBvbGljaWVzID0gW107XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmRlZmF1bHRQYXRoUG9saWNpZXMgPSBbXTtcblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5zdmdQb2xpY3kgPSBuZXcgUG9saWN5U2VydmljZS5Qb2xpY3koKTtcblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgY2FuWm9vbTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2FuUGFuOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBpbml0Rm9yY2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlVXBkYXRlOiBmYWxzZVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguY29uc3RzID0ge1xuICAgICAgICAgICAgICAgICAgICBjaXJjbGVHQ2xhc3M6IFwiY29uY2VwdEdcIixcbiAgICAgICAgICAgICAgICAgICAgZ3JhcGhDbGFzczogXCJncmFwaFwiLFxuICAgICAgICAgICAgICAgICAgICBwYXRoQ2xhc3M6IFwicGF0aFwiLFxuICAgICAgICAgICAgICAgICAgICBub2RlQ2xhc3M6IFwiY2lyY2xlXCIsXG4gICAgICAgICAgICAgICAgICAgIG5vZGVUZXh0OiBcIm5vZGVUZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0UmFkaXVzOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgbWF4UmFkaXVzOiA2MCxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNSxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU9mZnNldDogNjAsXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICBzdmcub24oXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGguc3ZnUG9saWN5W1wibW91c2VvdmVyXCJdLmNhbGwodGhpcywgZCk7ICAgIFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAub24oXCJkYmxjbGlja1wiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGguc3ZnUG9saWN5W1wiZGJsY2xpY2tcIl0uY2FsbCh0aGlzLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5vbihcImNvbnRleHRtZW51XCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5zdmdQb2xpY3lbXCJjb250ZXh0bWVudVwiXS5jYWxsKHRoaXMsIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGguc3ZnUG9saWN5W1wibW91c2VvdXRcIl0uY2FsbCh0aGlzLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5vbihcIm1vdXNlZG93blwiLCBmdW5jdGlvbihkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5zdmdQb2xpY3lbXCJtb3VzZWRvd25cIl0uY2FsbCh0aGlzLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5vbihcIm1vdXNldXBcIiwgZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGguc3ZnUG9saWN5W1wibW91c2V1cFwiXS5jYWxsKHRoaXMsIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIC8vIGRlZmluZSBhcnJvdyBtYXJrZXJzIGZvciBncmFwaCBsaW5rc1xuICAgICAgICAgICAgICAgIHZhciBkZWZzID0gc3ZnLmFwcGVuZCgnc3ZnOmRlZnMnKTtcbiAgICAgICAgICAgICAgICAgICAgZGVmcy5hcHBlbmQoJ3N2ZzptYXJrZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2lkJywgJ2VuZC1hcnJvdycpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInZpZXdCb3hcIiwgXCIwIC01IDEwIDEwXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInJlZlhcIiwgMjApXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInJlZllcIiwgLTEpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcIm1hcmtlcldpZHRoXCIsIDYpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcIm1hcmtlckhlaWdodFwiLCA2KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJvcmllbnRcIiwgXCJhdXRvXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJkXCIsIFwiTTAsLTVMMTAsMEwwLDVcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gZGVmaW5lIGFycm93IG1hcmtlcnMgZm9yIGxlYWRpbmcgYXJyb3dcbiAgICAgICAgICAgICAgICAgICAgZGVmcy5hcHBlbmQoJ3N2ZzptYXJrZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2lkJywgJ21hcmstZW5kLWFycm93JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCd2aWV3Qm94JywgJzAgLTUgMTAgMTAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3JlZlgnLCA3KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ21hcmtlcldpZHRoJywgMy41KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ21hcmtlckhlaWdodCcsIDMuNSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdvcmllbnQnLCAnYXV0bycpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCdzdmc6cGF0aCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZCcsICdNMCwtNUwxMCwwTDAsNScpO1xuXG5cbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguc3ZnID0gc3ZnO1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5zdmdHID0gc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgICAgICAgICAgLmNsYXNzZWQodGhpc0dyYXBoLmNvbnN0cy5ncmFwaENsYXNzLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB2YXIgc3ZnRyA9IHRoaXNHcmFwaC5zdmdHO1xuXG4gICAgICAgICAgICAgICAgLy8gc3ZnIG5vZGVzIGFuZCBsaW5rcyBcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgucGF0aHMgPSBzdmdHLmFwcGVuZChcImdcIikuc2VsZWN0QWxsKFwiZ1wiKTtcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguY2lyY2xlcyA9IHN2Z0cuYXBwZW5kKFwiZ1wiKS5zZWxlY3RBbGwoXCJnXCIpO1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5pbml0Tm9kZXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguaW5pdExpbmtzKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguc2V0UG9zaXRpb25zKCk7XG4gICAgICAgICAgICAgICAgLy8gdGhpc0dyYXBoLnVwZGF0ZUdyYXBoKCk7XG4gICAgICAgICAgICAgICAgLy8gdGhpc0dyYXBoLnNldEZvcmNlKCk7XG4gICAgICAgICAgICAgICAgdmFyIHJlc2l6ZUZ1bmMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLm9uV2luZG93UmVzaXplKHN2Zyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmJpbmRpbmdzID0ge1xuICAgICAgICAgICAgICAgICAgICByZXNpemU6cmVzaXplRnVuY1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkKHdpbmRvdykucmVzaXplKHJlc2l6ZUZ1bmMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIGNhbGxzIHRoZSBkZXN0cm95IG1ldGhvZCBmb3IgYWxsIHBvbGljaWVzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgIF8odGhpc0dyYXBoLmRlZmF1bHROb2RlUG9saWNpZXMpLmZvckVhY2goZnVuY3Rpb24ocG9saWN5KSB7XG4gICAgICAgICAgICAgICAgICAgIHBvbGljeS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXyh0aGlzR3JhcGguZGVmYXVsdFBhdGhQb2xpY2llcykuZm9yRWFjaChmdW5jdGlvbihwb2xpY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9saWN5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpc0dyYXBoLmJpbmRpbmdzKSB7XG4gICAgICAgICAgICAgICAgICAgICQod2luZG93KS5vZmYoa2V5LCB0aGlzR3JhcGguYmluZGluZ3Nba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJ1bnMgdGhlIGluaXQgZnVuY3Rpb24gZm9yIGFsbCB0aGUgbm9kZXNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaW5pdE5vZGVzKCkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzO1xuICAgICAgICAgICAgICAgIF8uZm9yRWFjaCh0aGlzR3JhcGgubm9kZXMsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pbml0aWFsaXplKHRoaXNHcmFwaCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUnVucyB0aGUgaW5pdCBmdW5jdGlvbiBmb3IgYWxsIHRoZSBsaW5rc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpbml0TGlua3MoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgXy5mb3JFYWNoKHRoaXNHcmFwaC5saW5rcywgZnVuY3Rpb24obGluaykge1xuICAgICAgICAgICAgICAgICAgICBsaW5rLmluaXRpYWxpemUodGhpc0dyYXBoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiByZXR1cm5zIHRoZSBub2RlIG1hdGNoaW5nIHRoZSBpZCwgXG4gICAgICAgICAgICAgKiBvciB1bmRlZmluZWQgaWYgdGhlcmUgaXMgbm9uZVxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtPYmplY3R9ICBpZCAgICAgIFRoZSBpZGVudGlmaWVyXG4gICAgICAgICAgICAgKiBAcmV0dXJuICAgICB7Tm9kZX0gIHsgbWF0Y2hpbmcgbm9kZSB9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZpbmROb2RlQnlJZChpZCl7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzR3JhcGgubm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkID09PSB0aGlzR3JhcGgubm9kZXNbaV0uaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzR3JhcGgubm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJldHVybnMgdGhlIGQzTm9kZSBvYmplY3QgdGhhdCBtYXRjaGVzIHRoZSBpZCxcbiAgICAgICAgICAgICAqIG9yIHVuZGVmaW5lZCBpZiB0aGVyZSBpcyBub25lXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge3N0cmluZ30gIGlkICAgICAgVGhlIGlkZW50aWZpZXJcbiAgICAgICAgICAgICAqIEByZXR1cm4gICAgIHtEM05vZGV9IFRoZSBkMyBub2RlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZpbmREM05vZGUoaWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcztcbiAgICAgICAgICAgICAgICB2YXIgZDNOb2RlO1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5jaXJjbGVzLmVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZC5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQzTm9kZSA9IGQzLnNlbGVjdCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgcmV0dXJuIGQzTm9kZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBVc2VkIHRvIGluc3RhbGwgYSBkcmFnIHBvbGljeSB0aGF0IHdpbGwgYmUgY2FsbGVkXG4gICAgICAgICAgICAgKiB3aGVuIG5vZGVzIGFyZSBkcmFnZ2VkXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge2QzLmJlaGF2aW9yLmRyYWd9ICBkM2RyYWcgIEQzIGRyYWcgb2JqZWN0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGluc3RhbGxEcmFnUG9saWN5KGQzZHJhZykge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZyA9IGQzZHJhZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBVc2VkIHRvIGluc3RhbGwgYSBwb2xpY3kgdGhhdCB3aWxsIGJlIGNhbGxlZCBcbiAgICAgICAgICAgICAqIHdoZW4gdGhlcmUgaXMgbW91c2UgaW50ZXJhY3Rpb25zIHdpdGggdGhlIGdyYXBoJ3Mgc3ZnXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge1BvbGljeX0gIHBvbGljeSAgVGhlIHBvbGljeSB0byBpbnN0YWxsXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGluc3RhbGxTdmdQb2xpY3kocG9saWN5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdmdQb2xpY3kgPSBwb2xpY3k7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVXNlZCB0byBpbnN0YWxsIHBvbGljaWVzIHRoYXQgYXJlIGNhbGxlZCB3aGVuIHRoZXJlIGlzXG4gICAgICAgICAgICAgKiBtb3VzZSBpbnRlcmFjdGlvbiB3aXRoIGEgbm9kZVxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtQb2xpY3l9ICBwb2xpY3kgIFRoZSBwb2xpY3kgdG8gaW5zdGFsbFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpbnN0YWxsRGVmYXVsdE5vZGVQb2xpY3kocG9saWN5KSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmRlZmF1bHROb2RlUG9saWNpZXMucHVzaChwb2xpY3kpO1xuICAgICAgICAgICAgICAgIHBvbGljeS5pbml0aWFsaXplKHRoaXNHcmFwaCk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBVc2VkIHRvIHJlbW92ZSBhbiBpbnN0YWxsZWQgcG9saWN5IGZvciBub2Rlc1xuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtOb2RlfSAgcG9saWN5UmVtb3ZlICBUaGUgcG9saWN5IHRvIHJlbW92ZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB1bmluc3RhbGxEZWZhdWx0Tm9kZVBvbGljeShwb2xpY3lSZW1vdmUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcG9saWN5UmVtb3ZlTmFtZTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBvbGljeVJlbW92ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9saWN5UmVtb3ZlTmFtZSA9IHBvbGljeVJlbW92ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwb2xpY3lSZW1vdmVOYW1lID0gcG9saWN5UmVtb3ZlLnBvbGljeU5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF8odGhpc0dyYXBoLmRlZmF1bHROb2RlUG9saWNpZXMpLmZvckVhY2goZnVuY3Rpb24ocG9saWN5LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9saWN5LnBvbGljeU5hbWUgPT09IHBvbGljeVJlbW92ZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvbGljeS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGguZGVmYXVsdE5vZGVQb2xpY2llcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmV0dXJucyB0aGUgbm9kZSBwb2xpY3kgb2JqZWN0IHdpdGggdGhlIGdpdmVuIG5hbWVcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7c3RyaW5nfSAgcG9saWN5TmFtZSAgVGhlIHBvbGljeSBuYW1lXG4gICAgICAgICAgICAgKiBAcmV0dXJuICAgICB7UG9saWN5fSAgcG9saWN5ICAgICAgVGhlIG1hdGNoaW5nIHBvbGljeVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXROb2RlUG9saWN5KHBvbGljeU5hbWUpIHtcbiAgICAgICAgICAgIFx0dmFyIHRoaXNHcmFwaCA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICBfKHRoaXNHcmFwaC5kZWZhdWx0Tm9kZVBvbGljaWVzKS5mb3JFYWNoKGZ1bmN0aW9uKHBvbGljeSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvbGljeS5wb2xpY3lOYW1lID09PSBwb2xpY3lOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9saWN5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVXNlZCB0byBpbnN0YWxsIHBvbGljaWVzIHRoYXQgYXJlIGNhbGxlZCB3aGVuIHRoZXJlIGlzIGFcbiAgICAgICAgICAgICAqIG1vdXNlIGludGVyYWN0aW9uIHdpdGggYSBwYXRoXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge1BvbGljeX0gIHBvbGljeSAgVGhlIHBvbGljeSB0byBpbnN0YWxsXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGluc3RhbGxEZWZhdWx0UGF0aFBvbGljeShwb2xpY3kpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguZGVmYXVsdFBhdGhQb2xpY2llcy5wdXNoKHBvbGljeSk7XG4gICAgICAgICAgICAgICAgcG9saWN5LmluaXRpYWxpemUodGhpc0dyYXBoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9Vc2VkIHRvIHJlbW92ZSBhbiBpbnN0YWxsZWQgcG9saWN5IGZvciBsaW5rc1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFVzZWQgdG8gcmVtb3ZlIGFuIGluc3RhbGxlZCBwb2xpY3kgZm9yIGxpbmtzXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge1BvbGljeX0gIHBvbGljeVJlbW92ZSAgVGhlIHBvbGljeSB0byByZW1vdmVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdW5pbnN0YWxsRGVmYXVsdFBhdGhQb2xpY3kocG9saWN5UmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBvbGljeVJlbW92ZU5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwb2xpY3lSZW1vdmUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvbGljeVJlbW92ZU5hbWUgPSBwb2xpY3lSZW1vdmU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9saWN5UmVtb3ZlTmFtZSA9IHBvbGljeVJlbW92ZS5wb2xpY3lOYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfKHRoaXNHcmFwaC5kZWZhdWx0UGF0aFBvbGljaWVzKS5mb3JFYWNoKGZ1bmN0aW9uKHBvbGljeSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvbGljeS5wb2xpY3lOYW1lID09PSBwb2xpY3lSZW1vdmVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb2xpY3kuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLmRlZmF1bHRQYXRoUG9saWNpZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGxlZCB3aGVuIHRoZXJlIGlzIGEgbW91c2UgaW50ZXJhY3Rpb24gd2l0aCBhIHBhdGhcbiAgICAgICAgICAgICAqIFByb3BvZ2F0ZXMgdGhlIGV2ZW50IHRvIGFsbCBpbnN0YWxsZWQgcGF0aCBwb2xpY2llc1xuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtzdHJpbmd9ICBldmVudCAgIFRoZSBldmVudCB0eXBlXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7ZDNvYmplY3R9ICBkM3BhdGggIFRoZSBkMyBwYXRoXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7UGF0aH0gIGQgICAgICAgVGhlIG1hdGNoaW5nIExpbmsgb2JqZWN0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHBhdGhQb2xpY3lFdmVudChldmVudCwgZDNwYXRoLCBkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgXyh0aGlzR3JhcGguZGVmYXVsdFBhdGhQb2xpY2llcykuZm9yRWFjaChmdW5jdGlvbihwb2xpY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9saWN5W2V2ZW50XShkM3BhdGgsIGQpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsbGVkIHdoZW4gdGhlcmUgaXMgYSBtb3VzZSBpbnRlcmFjdGlvbiB3aXRoIGEgbm9kZVxuICAgICAgICAgICAgICogUHJvcG9nYXRlcyB0aGUgZXZlbnQgdG8gYWxsIGluc3RhbGxlZCBub2RlIHBvbGljaWVzXG4gICAgICAgICAgICAgKiBcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtzdHJpbmd9ICBldmVudCAgIFRoZSBldmVudCB0eXBlXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7ZDNvYmplY3R9ICBkM25vZGUgIFRoZSBkMyBub2RlXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7UGF0aH0gIGQgICAgICAgVGhlIG1hdGNoaW5nIE5vZGUgb2JqZWN0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG5vZGVQb2xpY3lFdmVudChldmVudCwgZDNub2RlLCBkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgXy5mb3JFYWNoKHRoaXNHcmFwaC5kZWZhdWx0Tm9kZVBvbGljaWVzLCBmdW5jdGlvbihwb2xpY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9saWN5W2V2ZW50XShkM25vZGUsIGQpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU2V0cyBwYW4gYW5kIHpvb20gcnVsZXMgZm9yIHRoZSBncmFwaFxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtkMy5iZWhhdmlvci56b29tfSAgZDN6b29tICBEMyB6b29tIG9ialxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpbnN0YWxsWm9vbVBvbGljeShkM3pvb20pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdTdmcgPSBkM3pvb207XG4gICAgICAgICAgICAgICAgdGhpcy5zdmcuY2FsbCh0aGlzLmRyYWdTdmcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGxlZCB3aGVuIHRoZSB3aW5kb3cgaXMgcmVzaXplZFxuICAgICAgICAgICAgICogSG9vayBmb3Igb3ZlcnJpZGluZyBpbiBzdWJjbGFzc2VzXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge0hUTUwgU1ZHfSAgc3ZnICAgICBUaGUgc3ZnIHRoYXQgdGhlIGhhbmRsZXJcbiAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXMgYXR0YWNoZWQgdG9cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgb25XaW5kb3dSZXNpemUoc3ZnKSB7fVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEluc2VydHMgbGluZSBicmVha3MgaW4gbm9kZSB0ZXh0XG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge0hUTUwgRWxlbX0gIGdFbCAgICBUaGUgZWxlbSB0byBhZGQgdGV4dCB0b1xuICAgICAgICAgICAgICogQHBhcmFtICAgICAge3N0cmluZ30gIHRpdGxlICAgVGhlIHRpdGxlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGluc2VydFRpdGxlTGluZWJyZWFrcyAoZ0VsLCB0aXRsZSkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzO1xuICAgICAgICAgICAgICAgIHZhciB3b3JkcyA9IHRpdGxlLnNwbGl0KC9cXHMrL2cpLFxuICAgICAgICAgICAgICAgICAgICBud29yZHMgPSB3b3Jkcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gZ0VsLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgdGhpc0dyYXBoLmNvbnN0cy5ub2RlVGV4dClcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLFwibWlkZGxlXCIpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiZHlcIiwgXCItXCIgKyAobndvcmRzLTEpKjcuNSk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0c3BhbiA9IGVsLmFwcGVuZCgndHNwYW4nKS50ZXh0KHdvcmRzW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAoaSA+IDApXG4gICAgICAgICAgICAgICAgICAgIHRzcGFuLmF0dHIoJ3gnLCAwKS5hdHRyKCdkeScsICcxNScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZW1vdmVzIGFsbCBsaW5rcyBmcm9tIHRoZSBnaXZlbiBub2RlXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge05vZGV9ICBub2RlICAgIFRoZSBub2RlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNwbGljZUxpbmtzRm9yTm9kZShub2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIHRvU3BsaWNlID0gdGhpc0dyYXBoLmxpbmtzLmZpbHRlcihmdW5jdGlvbihsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGwuc291cmNlID09PSBub2RlIHx8IGwudGFyZ2V0ID09PSBub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdG9TcGxpY2UubWFwKGZ1bmN0aW9uKGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLmxpbmtzLnNwbGljZSh0aGlzR3JhcGgubGlua3MuaW5kZXhPZihsKSwgMSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQWRkcyB0aGUgbm9kZSB0byB0aGUgZ3JhcGggYW5kIHVwZGF0ZXNcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7Tm9kZX0gIG5vZGUgICAgVGhlIG5vZGVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgYWRkTm9kZShub2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgbm9kZS5pbml0aWFsaXplKHRoaXNHcmFwaClcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgudXBkYXRlR3JhcGgoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmVtb3ZlcyB0aGUgbm9kZSB0byB0aGUgZ3JhcGggYW5kIHVwZGF0ZXNcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7Tm9kZX0gIG5vZGUgICAgVGhlIG5vZGVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVtb3ZlTm9kZShub2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVzLnNwbGljZSh0aGlzR3JhcGgubm9kZXMuaW5kZXhPZihub2RlKSwgMSk7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLnNwbGljZUxpbmtzRm9yTm9kZShub2RlKTtcblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC51cGRhdGVHcmFwaCgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBZGRzIHRoZSBsaW5rIHRvIHRoZSBncmFwaCBhbmQgdXBkYXRlc1xuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtsaW5rfSAgbGluayAgICBUaGUgbGlua1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBhZGRMaW5rKGxpbmspIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgubGlua3MucHVzaChsaW5rKTtcbiAgICAgICAgICAgICAgICBsaW5rLmluaXRpYWxpemUodGhpc0dyYXBoKVxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC51cGRhdGVHcmFwaCgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZW1vdmVzIHRoZSBsaW5rIHRvIHRoZSBncmFwaCBhbmQgdXBkYXRlc1xuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtsaW5rfSAgbGluayAgICBUaGUgbGlua1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZW1vdmVMaW5rKGxpbmspIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgubGlua3Muc3BsaWNlKHRoaXNHcmFwaC5saW5rcy5pbmRleE9mKGxpbmspLCAxKTtcbiAgICAgICAgICAgICAgICBsaW5rLmluaXRpYWxpemUodGhpc0dyYXBoKVxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC51cGRhdGVHcmFwaCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGxlZCB3aGVuIHRoZSBncmFwaCBpcyB1cGRhdGluZyBleGlzdGluZyBwYXRoc1xuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtQYXRofSAgcGF0aHMgICBMaXN0IG9mIHBhdGhzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHVwZGF0ZUV4aXN0aW5nUGF0aHMocGF0aHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcztcbiAgICAgICAgICAgICAgICBwYXRocy5lYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgZC51cGRhdGVBdHRyKGQzLnNlbGVjdCh0aGlzKSwgZCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsbGVkIHdoZW4gdGhlIGdyYXBoIGlzIGFkZGluZyBuZXcgcGF0aHNcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7UGF0aH0gIG5ld1BhdGhzICBMaXN0IG9mIG5ldyBwYXRoc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB1cGRhdGVOZXdQYXRocyhuZXdQYXRocykge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmluaXRMaW5rcygpO1xuXG4gICAgICAgICAgICAgICAgbmV3UGF0aHMuZWFjaChmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgIGQubmV3UGF0aEF0dHIoZDMuc2VsZWN0KHRoaXMpLCBkKTtcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgLy9pZiBub2RlIGRvZXNuJ3QgaGF2ZSBpdHMgb3duIHBvbGljeSwgdXNlIGRlZmF1bHQgZm9yIHRoZSBncmFwaFxuICAgICAgICAgICAgICAgIG5ld1BhdGhzLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuaGFzUG9saWN5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5wYXRoUG9saWN5RXZlbnQoXCJtb3VzZW92ZXJcIiwgZDMuc2VsZWN0KHRoaXMpLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5wYXRoUG9saWN5RXZlbnQoXCJtb3VzZW92ZXJcIiwgZDMuc2VsZWN0KHRoaXMpLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5vbihcImRibGNsaWNrXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLmhhc1BvbGljeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQucGF0aFBvbGljeUV2ZW50KFwiZGJsY2xpY2tcIiwgZDMuc2VsZWN0KHRoaXMpLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5wYXRoUG9saWN5RXZlbnQoXCJkYmxjbGlja1wiLCBkMy5zZWxlY3QodGhpcyksIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLm9uKFwiY29udGV4dG1lbnVcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuaGFzUG9saWN5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5wYXRoUG9saWN5RXZlbnQoXCJjb250ZXh0bWVudVwiLCBkMy5zZWxlY3QodGhpcyksIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLnBhdGhQb2xpY3lFdmVudChcImNvbnRleHRtZW51XCIsIGQzLnNlbGVjdCh0aGlzKSwgZCk7ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAub24oXCJtb3VzZW91dFwiLCBmdW5jdGlvbihkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLmhhc1BvbGljeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQucGF0aFBvbGljeUV2ZW50KFwibW91c2VvdXRcIiwgZDMuc2VsZWN0KHRoaXMpLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5wYXRoUG9saWN5RXZlbnQoXCJtb3VzZW91dFwiLCBkMy5zZWxlY3QodGhpcyksIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLm9uKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuaGFzUG9saWN5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5wYXRoUG9saWN5RXZlbnQoXCJtb3VzZWRvd25cIiwgZDMuc2VsZWN0KHRoaXMpLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5wYXRoUG9saWN5RXZlbnQoXCJtb3VzZWRvd25cIiwgZDMuc2VsZWN0KHRoaXMpLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5vbihcIm1vdXNldXBcIiwgZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5oYXNQb2xpY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLnBhdGhQb2xpY3lFdmVudChcIm1vdXNldXBcIiwgZDMuc2VsZWN0KHRoaXMpLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5wYXRoUG9saWN5RXZlbnQoXCJtb3VzZXVwXCIsIGQzLnNlbGVjdCh0aGlzKSwgZCk7ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2FsbCh0aGlzR3JhcGguZHJhZyk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWxsZWQgd2hlbiB0aGUgZ3JhcGggaXMgdXBkYXRpbmcgZXhpc3Rpbmcgbm9kZXNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdXBkYXRlRXhpc3RpbmdOb2RlcygpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguY2lyY2xlcyA9IHRoaXMuY2lyY2xlcy5kYXRhKHRoaXNHcmFwaC5ub2RlcywgZnVuY3Rpb24oZCl7IHJldHVybiBkLmlkO30pXG4gICAgICAgICAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQudXBkYXRlQXR0cihkMy5zZWxlY3QodGhpcyksIGQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGxlZCB3aGVuIHRoZSBncmFwaCBpcyBhZGRpbmcgbmV3IG5vZGVzXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge05vZGV9ICBuZXdOb2RlcyAgTGlzdCBvZiBuZXcgbm9kZXNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdXBkYXRlTmV3Tm9kZXMobmV3Tm9kZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcztcblxuICAgICAgICAgICAgICAgIG5ld05vZGVzLmVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZC5ncmFwaCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkLmluaXRpYWxpemUodGhpc0dyYXBoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkLm5ld05vZGVBdHRyKGQzLnNlbGVjdCh0aGlzKSwgZCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL2lmIG5vZGUgZG9lc24ndCBoYXZlIGl0cyBvd24gcG9saWN5LCB1c2UgZGVmYXVsdCBmb3IgdGhlIGdyYXBoXG4gICAgICAgICAgICAgICAgbmV3Tm9kZXMub24oXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5oYXNQb2xpY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLm5vZGVQb2xpY3lFdmVudChcIm1vdXNlb3ZlclwiLCBkMy5zZWxlY3QodGhpcyksIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVQb2xpY3lFdmVudChcIm1vdXNlb3ZlclwiLCBkMy5zZWxlY3QodGhpcyksIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLm9uKFwiZGJsY2xpY2tcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuaGFzUG9saWN5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5ub2RlUG9saWN5RXZlbnQoXCJkYmxjbGlja1wiLCBkMy5zZWxlY3QodGhpcyksIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVQb2xpY3lFdmVudChcImRibGNsaWNrXCIsIGQzLnNlbGVjdCh0aGlzKSwgZCk7ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAub24oXCJjb250ZXh0bWVudVwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5oYXNQb2xpY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLm5vZGVQb2xpY3lFdmVudChcImNvbnRleHRtZW51XCIsIGQzLnNlbGVjdCh0aGlzKSwgZCk7ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGgubm9kZVBvbGljeUV2ZW50KFwiY29udGV4dG1lbnVcIiwgZDMuc2VsZWN0KHRoaXMpLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5vbihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuaGFzUG9saWN5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5ub2RlUG9saWN5RXZlbnQoXCJtb3VzZW91dFwiLCBkMy5zZWxlY3QodGhpcyksIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVQb2xpY3lFdmVudChcIm1vdXNlb3V0XCIsIGQzLnNlbGVjdCh0aGlzKSwgZCk7ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAub24oXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5oYXNQb2xpY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLm5vZGVQb2xpY3lFdmVudChcIm1vdXNlZG93blwiLCBkMy5zZWxlY3QodGhpcyksIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVQb2xpY3lFdmVudChcIm1vdXNlZG93blwiLCBkMy5zZWxlY3QodGhpcyksIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLm9uKFwibW91c2V1cFwiLCBmdW5jdGlvbihkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLmhhc1BvbGljeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQubm9kZVBvbGljeUV2ZW50KFwibW91c2V1cFwiLCBkMy5zZWxlY3QodGhpcyksIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVQb2xpY3lFdmVudChcIm1vdXNldXBcIiwgZDMuc2VsZWN0KHRoaXMpLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKHRoaXNHcmFwaC5kcmFnKTtcblxuICAgICAgICAgICAgICAgIG5ld05vZGVzLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiclwiLCBmdW5jdGlvbihkKSB7cmV0dXJuIFN0cmluZyhkLnJhZGl1cyl9KTtcblxuXG4gICAgICAgICAgICAgICAgbmV3Tm9kZXMuZWFjaChmdW5jdGlvbihkKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLmluc2VydFRpdGxlTGluZWJyZWFrcyhkMy5zZWxlY3QodGhpcyksIGQudGV4dCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUHJldmVudHMgbm9kZXMgZnJvbSBjb2xsaWRpbmdcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7bnVtYmVyfSAgYWxwaGEgICBBZmZlY3RzIGhvdyBtdWNoIGNoYW5nZVxuICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGNvbGxpc2lvbiBjYXVzZXNcbiAgICAgICAgICAgICAqIEByZXR1cm4gICAgIHtib29sZWFufSAge1doZXRoZXIgbm9kZXMgYXJlIGNvbGxpZGVkfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBkM0ZvcmNlQ29sbGlkZShhbHBoYSkge1xuICAgICAgICAgICAgXHR2YXIgdGhpc0dyYXBoID0gdGhpcyxcbiAgICAgICAgICAgIFx0XHRjb25zdHMgPSB0aGlzR3JhcGguY29uc3RzO1xuICAgICAgICAgICAgXHR2YXIgbm9kZXMgPSB0aGlzR3JhcGgubm9kZXM7XG4gICAgICAgICAgICBcdHZhciBxdWFkdHJlZSA9IGQzLmdlb20ucXVhZHRyZWUobm9kZXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgciA9IGQucmFkaXVzICsgY29uc3RzLm1heFJhZGl1cyArIGNvbnN0cy5wYWRkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbngxID0gZC54IC0gcixcbiAgICAgICAgICAgICAgICAgICAgICAgIG54MiA9IGQueCArIHIsXG4gICAgICAgICAgICAgICAgICAgICAgICBueTEgPSBkLnkgLSByLFxuICAgICAgICAgICAgICAgICAgICAgICAgbnkyID0gZC55ICsgcjtcbiAgICAgICAgICAgICAgICAgICAgcXVhZHRyZWUudmlzaXQoZnVuY3Rpb24ocXVhZCwgeDEsIHkxLCB4MiwgeTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxdWFkLnBvaW50ICYmIChxdWFkLnBvaW50ICE9PSBkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB4ID0gZC54IC0gcXVhZC5wb2ludC54LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ID0gZC55IC0gcXVhZC5wb2ludC55LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByID0gZC5yYWRpdXMgKyBxdWFkLnBvaW50LnJhZGl1cyArIGNvbnN0cy5wYWRkaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsIDwgcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA9IChsIC0gcikgLyBsICogYWxwaGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLnggLT0geCAqPSBsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZC55IC09IHkgKj0gbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YWQucG9pbnQueCArPSB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhZC5wb2ludC55ICs9IHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB4MSA+IG54MiB8fCB4MiA8IG54MSB8fCB5MSA+IG55MiB8fCB5MiA8IG55MTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUaWNrIG9mIHRoZSBkMyBmb3JjZSBzaW11bGF0aW9uXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge0QzdGljayBldmVudH0gIGUgICAgRDN0aWNrIGV2ZW50XG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7bnVtYmVyfSAgd2lkdGggIFRoZSB3aWR0aCBvZiB0aGUgc2ltdWxhdGlvblxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge251bWJlcn0gIGhlaWdodCBUaGUgaGVpZ2h0IG9mIHRoZSBzaW11bGF0aW9uXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGQzRm9yY2VUaWNrKGUsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgICAgIFx0dmFyIHRoaXNHcmFwaCA9IHRoaXMsXG4gICAgICAgICAgICBcdFx0Y29uc3RzID0gdGhpc0dyYXBoLmNvbnN0cztcblxuICAgICAgICAgICAgXHR2YXIgb2Zmc2V0ID0gY29uc3RzLmRpc3BsYXlPZmZzZXQ7XHRcbiAgICAgICAgICAgIFx0dmFyIG5vZGVzID0gdGhpc0dyYXBoLm5vZGVzO1xuICAgICAgICAgICAgXHR2YXIgcSA9IGQzLmdlb20ucXVhZHRyZWUodGhpc0dyYXBoLm5vZGVzKSxcbiAgICAgICAgICAgICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgICAgICAgICAgICBuID0gbm9kZXMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgICAgICAgICAgICAgICBxLnZpc2l0KHRoaXMuZDNGb3JjZUNvbGxpZGUobm9kZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5jaXJjbGVzLmVhY2godGhpcy5kM0ZvcmNlQ29sbGlkZSguNSkpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC54ID0gTWF0aC5tYXgoZC5yYWRpdXMgKyBvZmZzZXQsIE1hdGgubWluKHdpZHRoIC0gb2Zmc2V0IC0gZC5yYWRpdXMsIGQueCkpOyB9KVxuICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnkgPSBNYXRoLm1heChkLnJhZGl1cyArIG9mZnNldCwgTWF0aC5taW4oaGVpZ2h0IC0gb2Zmc2V0IC0gZC5yYWRpdXMsIGQueSkpOyB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5wYXRoc1xuICAgICAgICAgICAgICAgICAgICAuYXR0cigneDEnLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnNvdXJjZS54OyB9KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigneTEnLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnNvdXJjZS55OyB9KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigneDInLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnRhcmdldC54OyB9KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigneTInLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnRhcmdldC55OyB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBTdGFydHMgb24gc3RhcnQgb2YgdGhlIGZvcmNlIHNpbXVsYXRpb25cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZDNGb3JjZVN0YXJ0KCkge1xuICAgICAgICAgICAgXHR2YXIgdGhpc0dyYXBoID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgucGF0aHNcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3gxJywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5zb3VyY2UueDsgfSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3kxJywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5zb3VyY2UueTsgfSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3gyJywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC50YXJnZXQueDsgfSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3kyJywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC50YXJnZXQueTsgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsbGVkIG9uIHRoZSBlbmQgb2YgdGhlIGZvcmNlIHNpbXVsYXRpb25cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZDNGb3JjZUVuZCgpIHtcbiAgICAgICAgICAgIFx0dmFyIHRoaXNHcmFwaCA9IHRoaXM7XG4gICAgICAgICAgICBcdHRoaXNHcmFwaC5jaXJjbGVzXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdjeCcsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQueDsgfSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2N5JywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC55OyB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5wYXRocy5hdHRyKCd4MScsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuc291cmNlLng7IH0pXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd5MScsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuc291cmNlLnk7IH0pXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd4MicsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudGFyZ2V0Lng7IH0pXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd5MicsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudGFyZ2V0Lnk7IH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGN1bGF0ZXMgdGhlIHdpZHRoIGFuZCBoZWlnaHQgYm91bmRzIGZvciB0aGUgXG4gICAgICAgICAgICAgKiBmb3JjZSBzaW11bGF0aW9uXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHJldHVybiAgICAge09iamVjdH0gIHdpZHRoIGFuZCBoZWlnaHQgYXMgcHJvcGVydGllcyBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZDNGb3JjZUJvdW5kcygpIHtcbiAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gY29uc3RzLmRpc3BsYXlPZmZzZXQ7XG4gICAgICAgICAgICAgICAgdmFyIHN2Z1dpZHRoID0gJCgnI3Zpc3VhbGl6YXRpb24tZ3JhcGgnKS53aWR0aCgpO1xuICAgICAgICAgICAgICAgIHZhciBzdmdIZWlnaHQgPSAkKCcjdmlzdWFsaXphdGlvbi1ncmFwaCcpLmhlaWdodCgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gc3ZnV2lkdGg7XG4gICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IHN2Z0hlaWdodDtcbiAgICAgICAgICAgICAgICByZXR1cm4ge3dpZHRoOndpZHRoLCBoZWlnaHQ6aGVpZ2h0fTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEb2VzIGEgZDMgZm9yY2Ugc2ltdWxhdGlvblxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtGdW5jdGlvbn0gIGNhbGxiYWNrICBUaGUgY2FsbGJhY2tcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2V0Rm9yY2UoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgY29uc3RzID0gdGhpc0dyYXBoLmNvbnN0cztcblxuICAgICAgICAgICAgICAgIHZhciBub2RlcyA9IHRoaXNHcmFwaC5ub2RlcztcbiAgICAgICAgICAgICAgICB2YXIgbGlua3MgPSB0aGlzR3JhcGgubGlua3M7XG4gICAgICAgICAgICAgICAgaWYgKF8uaXNFbXB0eShub2RlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBib3VuZHMgPSB0aGlzLmQzRm9yY2VCb3VuZHMoKTtcblxuICAgICAgICAgICAgICAgIHZhciBmb3JjZSA9IGQzLmxheW91dC5mb3JjZSgpXG4gICAgICAgICAgICAgICAgICAgIC5zaXplKFtib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHRdKVxuICAgICAgICAgICAgICAgICAgICAubm9kZXMobm9kZXMpXG4gICAgICAgICAgICAgICAgICAgIC5jaGFyZ2UoZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC02MDAwO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAubGlua3MobGlua3MpO1xuXG4gICAgICAgICAgICAgICAgZm9yY2UubGlua0Rpc3RhbmNlKGJvdW5kcy53aWR0aC8zKTtcbiAgICAgICAgICAgICAgICBmb3JjZS5saW5rU3RyZW5ndGgoLjIpO1xuICAgICAgICAgICAgICAgIGZvcmNlLmdyYXZpdHkoLjIpO1xuXG4gICAgICAgICAgICAgICAgZm9yY2Uub24oJ3RpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgXHR0aGlzR3JhcGguZDNGb3JjZVRpY2suY2FsbCh0aGlzR3JhcGgsIFxuICAgICAgICAgICAgICAgIFx0XHRcdGUsIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBmb3JjZS5vbignc3RhcnQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBcdHRoaXNHcmFwaC5kM0ZvcmNlU3RhcnQuY2FsbCh0aGlzR3JhcGgpXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBmb3JjZS5vbignZW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgXHR0aGlzR3JhcGguZDNGb3JjZUVuZC5jYWxsKHRoaXNHcmFwaClcbiAgICAgICAgICAgICAgICB9KTsgXG5cblxuICAgICAgICAgICAgICAgIGZvcmNlLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgdmFyIGsgPSAwO1xuICAgICAgICAgICAgICAgIHdoaWxlICgoZm9yY2UuYWxwaGEoKSA+IDFlLTIpICYmIChrIDwgMTUwKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JjZS50aWNrKCksXG4gICAgICAgICAgICAgICAgICAgIGsgPSBrICsgMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yY2Uuc3RvcCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBcdGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFNldHMgdGhlIHBvc2l0aW9ucyB0byBiZSB0aGUgY2VudGVyIG9mIHRoZSBzY3JlZW4gaWYgXG4gICAgICAgICAgICAgKiBub3QgcHJvdmlkZWRcbiAgICAgICAgICAgICAqIGFsc28gc2V0cyB0aGUgcmFkaXVzIG9mIHRoZSBub2Rlc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZXRQb3NpdGlvbnMoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cyA9IHRoaXNHcmFwaC5jb25zdHMsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gdGhpc0dyYXBoLnN0YXRlO1xuXG4gICAgICAgICAgICAgICAgLy8gdmFyIGRvY0VsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgICAgICAgICAgIC8vICAgICBib2R5RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gdGhpc0dyYXBoLmNvbnN0cy5kaXNwbGF5T2Zmc2V0O1xuICAgICAgICAgICAgICAgIHZhciBzdmdXaWR0aCA9ICQoJyN2aXN1YWxpemF0aW9uLWdyYXBoJykud2lkdGgoKTtcbiAgICAgICAgICAgICAgICB2YXIgc3ZnSGVpZ2h0ID0gJCgnI3Zpc3VhbGl6YXRpb24tZ3JhcGgnKS5oZWlnaHQoKTtcblxuICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IHN2Z1dpZHRoIC0gKDIqb2Zmc2V0KTtcbiAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gc3ZnSGVpZ2h0IC0gKDIqb2Zmc2V0KTtcblxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgdmFyIG5vZGVzID0gdGhpc0dyYXBoLm5vZGVzO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBub2Rlc1tpXS5yYWRpdXMgPSBub2Rlc1tpXS5yYWRpdXMgfHwgdGhpc0dyYXBoLmNvbnN0cy5zdGFydFJhZGl1cztcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGVzW2ldLnggPT0gbnVsbCB8fCBub2Rlc1tpXS55ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vZGVzW2ldLnhTdGFydCA9IHdpZHRoLzIgICsgbm9kZXNbaV0ucmFkaXVzICsgb2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBub2Rlc1tpXS54ID0gd2lkdGgvMiAgKyBub2Rlc1tpXS5yYWRpdXMgKyBvZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vZGVzW2ldLnlTdGFydCA9IGhlaWdodC8yICsgbm9kZXNbaV0ucmFkaXVzICsgb2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBub2Rlc1tpXS55ID0gaGVpZ2h0LzIgKyBub2Rlc1tpXS5yYWRpdXMgKyBvZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWxsZWQgdG8gdXBkYXRlIHRoZSB2aWV3IG9mIHRoZSBncmFwaCB3aGVuXG4gICAgICAgICAgICAgKiBkYXRhIGNoYW5nZXNcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7RnVuY3Rpb259ICBjYWxsYmFjayAgVGhlIGNhbGxiYWNrXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHVwZGF0ZUdyYXBoKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cyA9IHRoaXNHcmFwaC5jb25zdHMsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gdGhpc0dyYXBoLnN0YXRlO1xuXG4gICAgICAgICAgICBcdGlmICh0aGlzR3JhcGguc3RhdGUuZGlzYWJsZVVwZGF0ZSkge1xuICAgICAgICAgICAgXHRcdHJldHVybjtcbiAgICAgICAgICAgIFx0fVxuXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVFeGlzdGluZ05vZGVzKCk7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0dzPSB0aGlzR3JhcGguY2lyY2xlcy5lbnRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpO1xuXG4gICAgICAgICAgICBcdC8vIGNvbnNvbGUubG9nKCd1cGRhdGUnLCBuZXdHcyk7XG4gICAgICAgICAgICAgICAgbmV3R3MuY2xhc3NlZChjb25zdHMuY2lyY2xlR0NsYXNzLCB0cnVlKTtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlTmV3Tm9kZXMobmV3R3MpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIG9sZCBub2Rlc1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5jaXJjbGVzLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5pbml0Rm9yY2UgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLnNldEZvcmNlKGZ1bmN0aW9uKCkge1xuICAgIFx0ICAgICAgICAgICAgICAgIHRoaXNHcmFwaC51cGRhdGVOZXdOb2Rlcy5jYWxsKHRoaXNHcmFwaCwgbmV3R3MpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuaW5pdEZvcmNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVOZXdOb2RlcyhuZXdHcyk7XG5cdCAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5wYXRocyA9IHRoaXNHcmFwaC5wYXRocy5kYXRhKHRoaXNHcmFwaC5saW5rcywgZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcoZC5zb3VyY2UuaWQpICsgXCIrXCIgKyBTdHJpbmcoZC50YXJnZXQuaWQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciBwYXRocyA9IHRoaXNHcmFwaC5wYXRocztcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUV4aXN0aW5nUGF0aHMocGF0aHMpO1xuXG4gICAgICAgICAgICAgICAgdmFyIG5ld3BhdGhzID0gcGF0aHMuZW50ZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdtYXJrZXItZW5kJywndXJsKCNlbmQtYXJyb3cpJylcbiAgICAgICAgICAgICAgICAuY2xhc3NlZChcImxpbmtcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVOZXdQYXRocyhuZXdwYXRocyk7XG5cbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgb2xkIGxpbmtzXG4gICAgICAgICAgICAgICAgcGF0aHMuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBcdGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgR3JhcGg6IEdyYXBoXG4gICAgICAgIH1cbn1dKTtcblxuXG4iLCIvKipcbiAqIFRoZSBncmFwaCB0aGF0IGlzIHVzZWQgc3BlY2lmaWNhbGx5IGZvciB0aGUgdmlzdWFsaXphdGlvbiB0YWIuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdHcmFwaE1vZHVsZScpXG4gICAgLmZhY3RvcnkoJ1Zpc3VhbGl6ZXJHcmFwaCcsIFsnR3JhcGgnLCBmdW5jdGlvbiAoR3JhcGgpIHtcbiAgICBcdGNsYXNzIFZpc3VhbGl6ZXJHcmFwaCBleHRlbmRzIEdyYXBoLkdyYXBoIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKHN2Zywgbm9kZXMsIGxpbmtzLCBkYXRhU291cmNlLCBjaGlsZHJlbl9zdHJ1Y3QsIGFuY2VzdG9yc19zdHJ1Y3QpIHtcbiAgICAgICAgICAgICAgICBzdXBlcihzdmcsIG5vZGVzLCBsaW5rcyk7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICAvL2hvbGRzIGN1cnJlbnQgdHJhbnNpdGlvbnMgdGhhdCBhcmUgb2NjdXJpbmdcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguc3RhdGUudHJhbnNpdGlvbiA9IFtdO1xuICAgICAgICAgICAgICAgIC8vTWluIGRpc3RhbmNlIGJldHdlZW4gbm9kZXMgd2hlbiBzcGF3bmluZyByYW5kb21seVxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5jb25zdHMuZWRnZV9idWZmZXIgPSAyMDA7XG4gICAgICAgICAgICAgICAgLy9TaXplIHJlZHVjdGlvbiBhcyB5b3UgZ28gdGhyb3VnaCBsZXZlbHMgaW4gbm9kZXNcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguY29uc3RzLnJhZGl1c0RlY2F5ID0gMTtcbiAgICAgICAgICAgICAgICAvL0NzcyBjbGFzcyBmb3Igbm9kZXMgdGhhdCBhcmUgY29udGFpbmVyc1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5jb25zdHMuY29udGFpbmVyQ2xhc3MgPSAnY29udGFpbmVyJztcblxuICAgICAgICAgICAgICAgIC8vZGF0YVNvdXJjZSBob2xkcyB0aGUgc2VydmVyIGRhdGEgYW5kIG1ldGhvZHMgZm9yXG4gICAgICAgICAgICAgICAgLy9jb252ZXJ0aW5nIGl0IHRvIGRhdGEgZm9yIHRoaXMgZ3JhcGhcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguZGF0YVNvdXJjZSA9IGRhdGFTb3VyY2U7XG4gICAgICAgICAgICAgICAgLy9IaWVyYXJjaHkgb2YgY2hpbGRyZW4gZm9yIG5vZGVzXG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmNoaWxkcmVuX3N0cnVjdCA9IGNoaWxkcmVuX3N0cnVjdDtcbiAgICAgICAgICAgICAgICAvL0hpZXJhcmNoeSBvZiBhbmNlc3RvcnMgZm9yIG5vZGVzXG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmFuY2VzdG9yc19zdHJ1Y3QgPSBhbmNlc3RvcnNfc3RydWN0O1xuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy9EcmFnIGJlaGF2aW9yIGZvciBub2Rlc1xuICAgICAgICAgICAgICAgIHZhciBkcmFnID0gZDMuYmVoYXZpb3IuZHJhZygpXG4gICAgICAgICAgICAgICAgICAgIC5vcmlnaW4oZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7eDogZC54LCB5OiBkLnl9O1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAub24oXCJkcmFnc3RhcnRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5vbihcImRyYWdcIiwgZnVuY3Rpb24oYXJncyl7XG4gICAgICAgICAgICAgICAgICAgIFx0ZDMuc2VsZWN0KCB0aGlzKS5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKCBkLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC54ICs9IGQzLmV2ZW50LmR4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQueSArPSBkMy5ldmVudC5keTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBbIGQueCxkLnkgXSArIFwiKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLnVwZGF0ZUdyYXBoKCk7XHRcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLm9uKFwiZHJhZ2VuZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguZHJhZyA9IGRyYWc7XG5cbiAgICAgICAgICAgICAgICAvL1BhbiBhbmQgWm9vbSBiZWhhdmlvciBmb3IgdGhlIGdyYXBoXG4gICAgICAgICAgICAgICAgdmFyIHpvb20gPSBkMy5iZWhhdmlvci56b29tKClcbiAgICAgICAgICAgICAgICAgICAgLm9uKFwiem9vbVwiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQzLmV2ZW50LnNvdXJjZUV2ZW50ICE9IG51bGwgJiYgZDMuZXZlbnQuc291cmNlRXZlbnQuY3RybEtleSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyAgdGhlIGludGVybmFsIGQzIHN0YXRlIGlzIHN0aWxsIGNoYW5naW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC56b29tZWQuY2FsbCh0aGlzR3JhcGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5vbihcInpvb21zdGFydFwiLCBmdW5jdGlvbihkLCBpKXtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmRyYWdTdmcgPSB6b29tO1xuXG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLnN2Zy5jYWxsKHpvb20pLm9uKFwiZGJsY2xpY2suem9vbVwiLCBudWxsKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvL0NhbGxlZCB3aGVuIHRoZSBncmFwaCBoYXMgYSB6b29tIGFjdGlvblxuICAgICAgICAgICAgem9vbWVkKHRyYW5zbGF0ZSwgc2NhbGUpe1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzR3JhcGguc3RhdGUucmlnaHRDbGljayA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5qdXN0U2NhbGVUcmFuc0dyYXBoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAodHJhbnNsYXRlICE9IG51bGwgJiYgc2NhbGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgem9vbSA9IHRoaXNHcmFwaC5kcmFnU3ZnO1xuICAgICAgICAgICAgICAgICAgICB6b29tLnNjYWxlKHNjYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgem9vbS50cmFuc2xhdGUodHJhbnNsYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgLy9jcmVhdGluZyBuYW1lcyB0byBwcmV2ZW50IHRyYW5zaXRpb24gY29uZmxpY3RzXG4gICAgICAgICAgICAgICAgICAgIHZhciB6b29tU2V0Q2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgXHR6b29tLnNjYWxlKHNjYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgXHR6b29tLnRyYW5zbGF0ZSh0cmFuc2xhdGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciB0cmFuc2xhdGVfbmFtZSA9IFwiem9vbVwiICsgdHJhbnNsYXRlO1xuICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3QoXCIuXCIgKyB0aGlzLmNvbnN0cy5ncmFwaENsYXNzKS50cmFuc2l0aW9uKHRyYW5zbGF0ZV9uYW1lKS5kZWxheSgxMDApLmR1cmF0aW9uKDc1MClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyB6b29tLnRyYW5zbGF0ZSgpICsgJykgc2NhbGUoJyArIHpvb20uc2NhbGUoKSArICcpJykuZWFjaChcImVuZFwiLCB6b29tU2V0Q2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBpZiAodGhpc0dyYXBoLnN0YXRlLmNhblpvb20pIHtcbiAgICAgICAgICAgICAgICAgICAgZDMuc2VsZWN0KFwiLlwiICsgdGhpcy5jb25zdHMuZ3JhcGhDbGFzcylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgdGhpc0dyYXBoLmRyYWdTdmcudHJhbnNsYXRlKCkgKyBcIikgc2NhbGUoXCIgK3RoaXNHcmFwaC5kcmFnU3ZnLnNjYWxlKCkgKyBcIilcIik7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vQ2FsbGVkIHdoZW4gd2luZG93IHJlc2l6ZXNcbiAgICAgICAgICAgIG9uV2luZG93UmVzaXplKHN2Zykge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzO1xuICAgICAgICAgICAgICAgIHZhciBkb2NFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgYm9keUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcbiAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gJCgnI3Zpc3VhbGl6YXRpb24tZ3JhcGgnKS5vZmZzZXQoKTtcbiAgICAgICAgICAgICAgICB2YXIgZGl2V2lkdGggPSAkKCcjdmlzdWFsaXphdGlvbi1ncmFwaCcpLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgdmFyIGRpdkhlaWdodCA9ICQoJyN2aXN1YWxpemF0aW9uLWdyYXBoJykuaGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IGJvZHlFbC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgc3ZnLmF0dHIoXCJ3aWR0aFwiLCBkaXZXaWR0aCkuYXR0cihcImhlaWdodFwiLCBoZWlnaHQgLSBvZmZzZXQudG9wIC0gMjApO1xuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvL0NhbGxlZCB3aGVuIHRoZSBzZXJ2ZXIgc2VuZHMgdXBkYXRlIHdlaWdodHMgZm9yIHRoZSBsaW5rc1xuICAgICAgICAgICAgdXBkYXRlTGlua0RhdGEoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVfbmFtZXNfc2V0ID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzR3JhcGgubm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZV9uYW1lc19zZXQucHVzaCh0aGlzR3JhcGgubm9kZXNbaV0uaWQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciByZXREYXRhID0gdGhpc0dyYXBoLmRhdGFTb3VyY2UuZ2V0Rmxvd0JldHdlZW5TZXQobm9kZV9uYW1lc19zZXQpO1xuICAgICAgICAgICAgICAgIHZhciBsaW5rRGF0YSA9IHJldERhdGEubGlua0RhdGE7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmxpbmtzID0gdGhpc0dyYXBoLmRhdGFTb3VyY2UucHJvY2Vzc0xpbmtEYXRhKGxpbmtEYXRhLCB0aGlzR3JhcGgubm9kZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdE5vZGVzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0TGlua3MoKTtcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgudXBkYXRlR3JhcGgoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgR3JhcGg6IFZpc3VhbGl6ZXJHcmFwaFxuICAgICAgICB9XG59XSk7XG5cblxuXG4iLCIvKipcbiAqIFRoZSBiYXNlIGNsYXNzIGZvciBsaW5rIG9iamVjdHMgZm9yIHRoZSBncmFwaC5cbiAqIFN1cHBvcnRzIHBvbGljaWVzLlxuICogXG4gKiBUbyB3cml0ZSB5b3VyIG93biBsaW5rIG9iamVjdCwgY3JlYXRlIGEgbmV3IGZhY3RvcnkgdGhhdCB1c2VzIHRoZSBsaW5rXG4gKiB5b3Ugd2FudCB0byBpbmhlcml0IGFzIGEgZGVwZW5kZW5jeSwgYW5kIGV4dGVuZCBpdHMgbGluayBjbGFzcy4gXG4gKiBSZXR1cm4gdGhlIGNsYXNzIG9iamVjdCB3aXRoIExpbmsgYXMga2V5XG4gKlxuICogXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdMaW5rTW9kdWxlJylcbiAgICAuZmFjdG9yeSgnTGluaycsIFtmdW5jdGlvbiAoKSB7XG4gICAgXHRjbGFzcyBMaW5rIHtcblx0XHRcdGNvbnN0cnVjdG9yKHNvdXJjZU5vZGUsIHRhcmdldE5vZGUpIHtcblx0XHRcdFx0dGhpcy5zb3VyY2UgPSBzb3VyY2VOb2RlO1xuXHRcdFx0XHR0aGlzLnRhcmdldCA9IHRhcmdldE5vZGU7XG5cdFx0XHRcdHRoaXMucG9saWN5ID0gbnVsbDtcblx0XHRcdFx0dGhpcy5oYXNQb2xpY3kgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5wYXRoUG9saWNpZXMgPSBbXTtcblx0XHRcdFx0dGhpcy5ncmFwaCA9IG51bGw7XG5cdFx0XHRcdHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Ly9DYWxsZWQgd2hlbiBhIGxpbmsgaXMgYWRkZWQgdG8gdGhlIGdyYXBoXG5cdFx0XHRpbml0aWFsaXplKGdyYXBoKSB7XG5cdFx0XHRcdGlmICh0aGlzLmluaXRpYWxpemVkID09IGZhbHNlKSB7XG5cdFx0XHRcdFx0dGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cdFx0XHRcdFx0dGhpcy5ncmFwaCA9IGdyYXBoO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vQ2FsbGVkIGR1cmluZyB0aGUgdXBkYXRlIGdyYXBoIGZvciBleGlzdGluZyBsaW5rc1xuXHRcdFx0dXBkYXRlQXR0cihkM3BhdGgpIHtcblx0XHRcdFx0ZDNwYXRoLnN0eWxlKCdtYXJrZXItZW5kJywgJ3VybCgjZW5kLWFycm93KScpXG5cdFx0ICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGFycm93UGF0aCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vQ2FsbGVkIGR1cmluZyB0aGUgZmlyc3QgdXBkYXRlIGdyYXBoIGZvciBhIGxpbmtcblx0XHRcdG5ld1BhdGhBdHRyKGQzcGF0aCkge1xuXHRcdFx0XHRkM3BhdGguYXR0cignZCcsIGFycm93UGF0aCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vQXJyb3cgcGF0aCBsb2dpY1xuXHRcdCAgICBhcnJvd1BhdGgoKSB7XG5cdFx0ICAgIFx0dmFyIGQgPSB0aGlzO1xuXHRcdCAgICAgICAgdmFyIGR4ID0gZC50YXJnZXQueCAtIGQuc291cmNlLngsXG5cdFx0ICAgICAgICAgICAgZHkgPSBkLnRhcmdldC55IC0gZC5zb3VyY2UueSxcblx0XHQgICAgICAgICAgICBkciA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG5cdFx0ICAgICAgICByZXR1cm4gXCJNXCIgKyBkLnNvdXJjZS54ICsgXCIsXCIgKyBkLnNvdXJjZS55ICsgXCJBXCIgKyBkciArIFwiLFwiICsgZHIgKyBcIiAwIDAsMSBcIiArIGQudGFyZ2V0LnggKyBcIixcIiArIGQudGFyZ2V0Lnk7XG5cdFx0ICAgIH1cblxuXG5cblx0XHQgICAgLy9Vc2VkIHRvIGluc3RhbGwgcG9saWNpZXMgdGhhdCBhcmUgY2FsbGVkIHdoZW4gdGhpcyBsaW5rXG5cdFx0ICAgIC8vaGFzIGEgbW91c2UgZXZlbnRcblx0XHRcdGluc3RhbGxQYXRoUG9saWN5KHBvbGljeSkge1xuXHRcdFx0XHR0aGlzLnBhdGhQb2xpY2llcy5wdXNoKHBvbGljeSk7XG5cdFx0XHRcdHBvbGljeS5pbml0aWFsaXplKHRoaXMuZ3JhcGgpO1xuXHRcdFx0fVxuXG5cdFx0XHQvL1VzZWQgdG8gdW5pbnN0YWxsIHBvbGljeSBmb3IgdGhpcyBsaW5rXG5cdFx0XHR1bmluc3RhbGxQYXRoUG9saWN5KHBvbGljeVJlbW92ZSkge1xuXHRcdFx0XHR2YXIgcG9saWN5UmVtb3ZlTmFtZTtcblx0XHRcdFx0aWYgKHR5cGVvZiBwb2xpY3lSZW1vdmUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0cG9saWN5UmVtb3ZlTmFtZSA9IHBvbGljeVJlbW92ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwb2xpY3lSZW1vdmVOYW1lID0gcG9saWN5UmVtb3ZlLnBvbGljeU5hbWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Xyh0aGlzR3JhcGgucGF0aFBvbGljaWVzKS5mb3JFYWNoKGZ1bmN0aW9uKHBvbGljeSwgaW5kZXgpIHtcblx0XHRcdFx0XHRpZiAocG9saWN5LnBvbGljeU5hbWUgPT09IHBvbGljeVJlbW92ZU5hbWUpIHtcblx0XHRcdFx0XHRcdHRoaXNHcmFwaC5wYXRoUG9saWNpZXMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvL2NhbGxlZCB3aGVuIHRoZXJlIGlzIGEgbW91c2UgZXZlbnQgZm9yIHRoaXMgcGF0aFxuXHRcdFx0cGF0aFBvbGljeUV2ZW50KGV2ZW50LCBkM3BhdGgsIGQpIHtcblx0XHRcdFx0dmFyIHRoaXNHcmFwaCA9IHRoaXM7XG5cdFx0XHRcdF8oZC5wYXRoUG9saWNpZXMpLmZvckVhY2goZnVuY3Rpb24ocG9saWN5KSB7XG5cdFx0XHRcdFx0cG9saWN5W2V2ZW50XShkM25vZGUsIGQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0TGluazogTGluayxcblx0XHR9XG59XSk7XG5cblxuXG5cblxuXG4iLCIvKipcbiAqIFRoZSBsaW5rIHRoYXQgaXMgdXNlZCBzcGVjaWZpY2FsbHkgZm9yIHRoZSB2aXN1YWxpemF0aW9uIHRhYi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ0xpbmtNb2R1bGUnKVxuICAgIC5mYWN0b3J5KCdWaXN1YWxpemVyTGluaycsIFsnTGluaycsIGZ1bmN0aW9uIChMaW5rKSB7XG5cdFx0Y2xhc3MgVmlzdWFsaXplckxpbmsgZXh0ZW5kcyBMaW5rLkxpbmsge1xuXHRcdCAgICBjb25zdHJ1Y3Rvcihzb3VyY2VOb2RlLCB0YXJnZXROb2RlLCB3ZWlnaHQpIHtcblx0XHQgICAgICAgIHN1cGVyKHNvdXJjZU5vZGUsIHRhcmdldE5vZGUpO1xuXHRcdCAgICAgICAgdGhpcy53ZWlnaHQgPSB3ZWlnaHQ7XG5cdFx0ICAgICAgICAvL0NvdW50IGlzIHVzZWQgdG8ga2VlcCB0cmFjayBvZiBob3cgbWFueVxuXHRcdCAgICAgICAgLy9wYXRocyB0byBpdHMgc3Vibm9kZXMgdGhlcmUgYXJlXG5cdFx0ICAgICAgICAvL2luIG9yZGVyIHRvIGNhbGN1bGF0ZSBhdmVyYWdlIHRyYWZmaWNcblx0XHQgICAgICAgIHRoaXMuY291bnQgPSAxO1xuXHRcdCAgICB9XG5cblx0XHQgICAgaW5jcmVhc2VDb3VudCgpIHtcblx0XHQgICAgICAgIHRoaXMuY291bnQgKz0gMTtcblx0XHQgICAgfVxuXG5cdFx0ICAgIGdldE1pZHBvaW50KCkge1xuXHRcdCAgICBcdHZhciByZXQ7XG5cdFx0ICAgIFx0dmFyIGQgPSB0aGlzO1xuXHRcdCAgICBcdHZhciBkeCA9IChkLnRhcmdldC54IC0gZC5zb3VyY2UueCkgLyAyLFxuXHRcdCAgICAgICAgICAgIGR5ID0gKGQudGFyZ2V0LnkgLSBkLnNvdXJjZS55KSAvIDI7XG5cdFx0ICAgIFx0aWYgKGQuc291cmNlLnggPCBkLnRhcmdldC54KSB7XG5cdCAgICBcdFx0XHRyZXQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBteTogJ3RvcCBjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXQ6ICdjZW50ZXIgY2VudGVyJywgLy8gYXQgdGhlIGJvdHRvbSByaWdodCBvZi4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGFyZ2V0OiAkKHRoaXNQYXRoKSAvLyBteSB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogW2R4LCBkeV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGp1c3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0eTogMTBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXHRcdCAgICBcdH0gZWxzZSB7XG5cdCAgICBcdFx0XHRyZXQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBteTogJ2JvdHRvbSBjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXQ6ICdjZW50ZXIgY2VudGVyJywgLy8gYXQgdGhlIGJvdHRvbSByaWdodCBvZi4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGFyZ2V0OiAkKHRoaXNQYXRoKSAvLyBteSB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogW2R4LCBkeV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGp1c3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0eTogLTEwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblx0XHQgICAgXHR9XG5cdFx0ICAgIFx0cmV0dXJuIHJldDtcblx0XHQgICAgXHRcblx0XHQgICAgfVxuXG5cdFx0ICAgIC8vQ2FsbGVkIHdoZW4gdGhlIGxpbmsgaXMgYWRkZWQgdG8gdGhlIGdyYXBoXG5cdFx0XHRpbml0aWFsaXplKGdyYXBoKSB7XG5cdFx0XHRcdGlmICh0aGlzLmluaXRpYWxpemVkID09IGZhbHNlKSB7XG5cdFx0XHRcdFx0c3VwZXIuaW5pdGlhbGl6ZShncmFwaCk7XG5cdFx0XHRcdFx0dmFyIHN0YXRlID0gZ3JhcGguc3RhdGUuVmlzdWFsaXplckxpbms7XG5cdFx0XHRcdFx0aWYgKHN0YXRlID09IG51bGwpIHtcblx0XHRcdFx0XHRcdHN0YXRlID0gZ3JhcGguc3RhdGUuVmlzdWFsaXplckxpbmsgPSB7fTtcblx0XHRcdFx0XHRcdHN0YXRlLm1heFdlaWdodCA9IG51bGw7XG5cdFx0XHRcdFx0XHRzdGF0ZS51c2VBdmdXZWlnaHQgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnVwZGF0ZU1heFdlaWdodCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vU2V0cyB3aGV0aGVyIHRoZSBncmFwaCBzaG91bGQgdXNlIGF2ZyB3ZWlnaHRcblx0XHRcdHNldFVzZUF2Z1dlaWdodCh2YWwpIHtcblx0XHQgICAgICAgIHRoaXMuZ3JhcGguc3RhdGUuVmlzdWFsaXplckxpbmsudXNlQXZnV2VpZ2h0ID0gISF2YWw7XG5cdFx0ICAgIH1cblxuXHRcdCAgICAvL1NldHMgdGhlIHdlaWdodCBvZiB0aGlzIGxpbmtcblx0XHQgICAgc2V0V2VpZ2h0KHdlaWdodCkge1xuXHRcdCAgICAgICAgdGhpcy53ZWlnaHQgPSB3ZWlnaHQ7XG5cdFx0ICAgIH1cblxuXHRcdCAgICAvL0dldHMgdGhlIGFjdHVhbCB3ZWlnaHQgdmFsdWUgb2YgdGhlIGxpbmtcblx0XHQgICAgZ2V0UmF3V2VpZ2h0KCkge1xuXHRcdCAgICAgICAgcmV0dXJuIHRoaXMud2VpZ2h0OyBcblx0XHQgICAgfVxuXG5cdFx0ICAgIC8vR2V0cyB0aGUgd2VpZ2h0IHZhbHVlIG9mIHRoZSBsaW5rLCBkZXBlbmRpbmcgb24gdGhlXG5cdFx0ICAgIC8vdXNlQXZnV2VpZ2h0IHNldHRpbmdcblx0XHQgICAgZ2V0V2VpZ2h0KCkge1xuXHRcdCAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGgsXG5cdFx0ICAgICAgICAgICAgc3RhdGUgPSB0aGlzR3JhcGguc3RhdGUuVmlzdWFsaXplckxpbms7XG5cblx0XHQgICAgICAgIGlmIChzdGF0ZS51c2VBdmdXZWlnaHQpIHtcblx0XHQgICAgICAgICAgICB2YXIgd2VpZ2h0ID0gdGhpcy53ZWlnaHQgLyB0aGlzLmNvdW50O1xuXHRcdCAgICAgICAgICAgIHJldHVybiB3ZWlnaHQ7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgICAgICByZXR1cm4gdGhpcy53ZWlnaHQ7XG5cdFx0ICAgIH1cblxuXHRcdCAgICAvL3VwZGF0ZXMgdGhlIG1heCB3ZWlnaHQgb2YgdGhlIGdyYXBoXG5cdFx0ICAgIHVwZGF0ZU1heFdlaWdodCAoKSB7XG5cdFx0ICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaCxcblx0XHQgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5WaXN1YWxpemVyTGluaztcblxuXHRcdCAgICAgICAgdmFyIG1heExpbmsgPSBfLm1heEJ5KHRoaXNHcmFwaC5saW5rcywgZnVuY3Rpb24obCkge1xuXHRcdCAgICAgICAgXHRpZiAobC5ncmFwaCAhPSBudWxsKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbC5nZXRXZWlnaHQoKTtcblx0XHQgICAgICAgIFx0fVxuXHRcdCAgICAgICAgXHRyZXR1cm4gMDtcblx0XHQgICAgICAgIH0pO1xuXHRcdCAgICAgICAgc3RhdGUubWF4V2VpZ2h0ID0gbWF4TGluay5nZXRXZWlnaHQoKTtcblx0XHQgICAgfVxuXG5cdFx0XHQvL0NhbGxlZCBkdXJpbmcgdGhlIHVwZGF0ZSBncmFwaCBmb3IgZXhpc3RpbmcgbGlua3Ncblx0XHRcdHVwZGF0ZUF0dHIoZDNwYXRoLCBkKSB7XG5cdFx0ICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaCxcblx0XHQgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5WaXN1YWxpemVyTGluaztcblx0XHQgICAgICAgIHRoaXMudXBkYXRlTWF4V2VpZ2h0KCk7XG5cdCAgICAgICAgICAgIHZhciBjb2xvclNjYWxlID0gZDMuc2NhbGUubGluZWFyKClcblx0ICAgICAgICAgICAgICAgIC5kb21haW4oWzAsIHN0YXRlLm1heFdlaWdodF0pXG5cdCAgICAgICAgICAgICAgICAucmFuZ2UoW1wiI2ZmYjM2NlwiLCBcIiNGOTI2MDZcIl0pO1xuXHQgICAgICAgICAgICBzdGF0ZS5jb2xvclNjYWxlID0gY29sb3JTY2FsZTtcblx0XHRcdFx0ZDNwYXRoLnN0eWxlKCdtYXJrZXItZW5kJywgJ3VybCgjZW5kLWFycm93KScpXG5cdFx0ICAgICAgICAgICAgLmNsYXNzZWQodGhpc0dyYXBoLmNvbnN0cy5zZWxlY3RlZENsYXNzLCBmdW5jdGlvbihkKXtcblx0XHQgICAgICAgICAgICAgICAgcmV0dXJuIGQgPT09IHN0YXRlLnNlbGVjdGVkRWRnZTtcblx0XHQgICAgICAgICAgICB9KVxuXHRcdCAgICAgICAgICAgIC5hdHRyKFwiZFwiLCB0aGlzLmFycm93UGF0aC5jYWxsKGQpKVxuXHRcdCAgICAgICAgICAgIC50cmFuc2l0aW9uKFwiZXhpc3RpbmdQYXRoVHJhbnNpdGlvblwiKVxuXHRcdCAgICAgICAgICAgIC5kdXJhdGlvbig3NTApXG5cdFx0ICAgICAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgZnVuY3Rpb24oZCl7XG5cdFx0ICAgICAgICAgICAgICAgIHZhciBjID0gY29sb3JTY2FsZShkLmdldFdlaWdodCgpKTtcblx0XHQgICAgICAgICAgICAgICAgcmV0dXJuIGM7XG5cdFx0ICAgICAgICAgICAgfSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vQ2FsbGVkIGR1cmluZyB0aGUgZmlyc3QgdXBkYXRlIGdyYXBoIGZvciBhIGxpbmtcblx0XHRcdG5ld1BhdGhBdHRyKGQzcGF0aCwgZCkge1xuXHRcdCAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGgsXG5cdFx0ICAgICAgICAgICAgc3RhdGUgPSB0aGlzR3JhcGguc3RhdGUuVmlzdWFsaXplckxpbms7XG5cdCAgICAgICAgICAgIHRoaXMudXBkYXRlTWF4V2VpZ2h0KCk7XG5cdCAgICAgICAgICAgIHZhciBjb2xvclNjYWxlID0gZDMuc2NhbGUubGluZWFyKClcblx0ICAgICAgICAgICAgICAgIC5kb21haW4oWzAsIHN0YXRlLm1heFdlaWdodF0pXG5cdCAgICAgICAgICAgICAgICAucmFuZ2UoW1wiI2ZmYjM2NlwiLCBcIiNGOTI2MDZcIl0pO1xuXHQgICAgICAgICAgICAgICAgXG5cdFx0XHRcdGQzcGF0aC50cmFuc2l0aW9uKFwibmV3UGF0aFRyYW5zaXRpb25cIilcblx0XHQgICAgICAgICAgICAuZHVyYXRpb24oNzUwKVxuXHRcdCAgICAgICAgICAgIC5hdHRyVHdlZW4oXCJvcGFjaXR5XCIsIGZ1bmN0aW9uKGQpIHtcblx0XHQgICAgICAgICAgICAgICAgcmV0dXJuIGQzLmludGVycG9sYXRlU3RyaW5nKDAsMSk7XG5cdFx0ICAgICAgICAgICAgfSlcblx0XHQgICAgICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBmdW5jdGlvbihkKXtcblx0XHQgICAgICAgICAgICAgICAgdmFyIGMgPSBjb2xvclNjYWxlKGQuZ2V0V2VpZ2h0KCkpO1xuXHRcdCAgICAgICAgICAgICAgICByZXR1cm4gYztcblx0XHQgICAgICAgICAgICB9KVxuXHRcdCAgICAgICAgICAgIC5hdHRyKCdkJywgdGhpcy5hcnJvd1BhdGguY2FsbChkKSk7XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0TGluayA6IFZpc3VhbGl6ZXJMaW5rXG5cdFx0fVxufV0pO1xuXG5cblxuXG5cbiIsIi8qKlxuICogVGhlIGJhc2UgY2xhc3MgZm9yIG5vZGUgb2JqZWN0cyBmb3IgdGhlIGdyYXBoLlxuICogU3VwcG9ydHMgcG9saWNpZXMuXG4gKiBcbiAqIFRvIHdyaXRlIHlvdXIgb3duIE5vZGUgb2JqZWN0LCBjcmVhdGUgYSBuZXcgZmFjdG9yeSB0aGF0IHVzZXMgdGhlIG5vZGVcbiAqIHlvdSB3YW50IHRvIGluaGVyaXQgYXMgYSBkZXBlbmRlbmN5LCBhbmQgZXh0ZW5kIGl0cyBub2RlIGNsYXNzLiBcbiAqIFJldHVybiB0aGUgY2xhc3Mgb2JqZWN0IHdpdGggTm9kZSBhcyBrZXlcbiAqIFxuICovXG5hbmd1bGFyLm1vZHVsZSgnTm9kZU1vZHVsZScpXG4gICAgLmZhY3RvcnkoJ05vZGUnLCBbZnVuY3Rpb24gKCkge1xuXG5cdFx0Y2xhc3MgTm9kZSB7XG5cdFx0XHRjb25zdHJ1Y3Rvcih4LCB5LCBpZCwgdGV4dCwgcmFkaXVzKSB7XG5cdFx0XHRcdHRoaXMueCA9IHg7XG5cdFx0XHRcdHRoaXMueSA9IHk7XG5cdFx0XHRcdHRoaXMucmFkaXVzID0gcmFkaXVzLFxuXHRcdFx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0XHRcdHRoaXMudGV4dCA9IHRleHQ7XG5cdFx0XHRcdHRoaXMucmFkaXVzID0gcmFkaXVzO1xuXHRcdFx0XHR0aGlzLmhhc1BvbGljeSA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLnBvbGljeSA9IG51bGw7XG5cdFx0XHRcdHRoaXMubm9kZVBvbGljaWVzID0gW107XG5cdFx0XHRcdHRoaXMuZ3JhcGggPSBudWxsO1xuXHRcdFx0XHR0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdC8vQ2FsbGVkIHdoZW4gYSBub2RlIGlzIGFkZGVkIHRvIHRoZSBncmFwaFxuXHRcdFx0aW5pdGlhbGl6ZShncmFwaCkge1xuXHRcdFx0XHRpZiAodGhpcy5pbml0aWFsaXplZCA9PSBmYWxzZSkge1xuXHRcdFx0XHRcdHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdHRoaXMuZ3JhcGggPSBncmFwaDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvL0NhbGxlZCBkdXJpbmcgdGhlIHVwZGF0ZSBncmFwaCBmb3IgZXhpc3Rpbmcgbm9kZXNcblx0XHRcdHVwZGF0ZUF0dHIoZDNub2RlLCBkKSB7XG5cdFx0XHRcdGQzbm9kZS5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpe3JldHVybiBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7fSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vQ2FsbGVkIGR1cmluZyB0aGUgZmlyc3QgdXBkYXRlIGdyYXBoIGZvciBhIG5vZGVcblx0XHRcdC8vSG9vayBmb3Igc3ViIGNsYXNzZXNcblx0XHRcdG5ld05vZGVBdHRyKGQzbm9kZSwgZCkge1xuXHRcdFx0fVxuXG5cdFx0XHQvL3NldHMgdGhlIHJhZGl1cyBvZiB0aGUgbm9kZVxuXHRcdFx0c2V0UmFkaXVzKHJhZGl1cykge1xuXHRcdFx0XHR0aGlzLnJhZGl1cyA9IHJhZGl1cztcblx0XHRcdH1cblxuXHRcdFx0Ly9Vc2VkIHRvIGluc3RhbGwgcG9saWNpZXMgdGhhdCBhcmUgY2FsbGVkIHdoZW4gdGhpcyBub2RlXG5cdFx0ICAgIC8vaGFzIGEgbW91c2UgZXZlbnRcblx0XHRcdGluc3RhbGxOb2RlUG9saWN5KHBvbGljeSkge1xuXHRcdFx0XHR0aGlzLm5vZGVQb2xpY2llcy5wdXNoKHBvbGljeSk7XG5cdFx0XHRcdHBvbGljeS5pbml0aWFsaXplKHRoaXMuZ3JhcGgpO1xuXHRcdFx0fVxuXG5cdFx0XHQvL1VzZWQgdG8gdW5pbnN0YWxsIHBvbGljeSBmb3IgdGhpcyBsaW5rXG5cdFx0XHR1bmluc3RhbGxOb2RlUG9saWN5KHBvbGljeVJlbW92ZSkge1xuXHRcdFx0XHR2YXIgcG9saWN5UmVtb3ZlTmFtZTtcblx0XHRcdFx0aWYgKHR5cGVvZiBwb2xpY3lSZW1vdmUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0cG9saWN5UmVtb3ZlTmFtZSA9IHBvbGljeVJlbW92ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwb2xpY3lSZW1vdmVOYW1lID0gcG9saWN5UmVtb3ZlLnBvbGljeU5hbWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Xyh0aGlzLm5vZGVQb2xpY2llcykuZm9yRWFjaChmdW5jdGlvbihwb2xpY3ksIGluZGV4KSB7XG5cdFx0XHRcdFx0aWYgKHBvbGljeS5wb2xpY3lOYW1lID09PSBwb2xpY3lSZW1vdmVOYW1lKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm5vZGVQb2xpY2llcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vQ2FsbGVkIHdoZW4gdGhlcmUgaXMgYSBtb3VzZSBldmVudCBmb3IgdGhpcyBub2RlXG5cdFx0XHRub2RlUG9saWN5RXZlbnQoZXZlbnQsIGQzbm9kZSwgZCkge1xuXHRcdFx0XHRfLmZvckVhY2godGhpcy5ub2RlUG9saWNpZXMsIGZ1bmN0aW9uKHBvbGljeSkge1xuXHRcdFx0XHRcdHBvbGljeVtldmVudF0oZDNub2RlLCBkKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHROb2RlOiBOb2RlXG5cdFx0fVxufV0pO1xuXG5cblxuXG5cblxuXG4iLCIvKipcbiAqIFRoZSBub2RlIHRoYXQgaXMgdXNlZCBzcGVjaWZpY2FsbHkgZm9yIHRoZSB2aXN1YWxpemF0aW9uIHRhYi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ05vZGVNb2R1bGUnKVxuICAgIC5mYWN0b3J5KCdWaXN1YWxpemVyTm9kZScsIFsnTm9kZScsIGZ1bmN0aW9uIChOb2RlKSB7XG5cblx0XHRjbGFzcyBWaXN1YWxpemVyTm9kZSBleHRlbmRzIE5vZGUuTm9kZSB7XG5cdFx0ICAgIGNvbnN0cnVjdG9yKHgsIHksIGlkLCB0ZXh0LCByYWRpdXMsIHBhcmVudCwgYW5jZXN0b3JzLCBcblx0XHQgICAgXHR4U3RhcnQsIHlTdGFydCkge1xuXHRcdCAgICAgICAgc3VwZXIoeCwgeSwgaWQsIHRleHQsIHJhZGl1cyk7XG5cdFx0ICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcblx0XHQgICAgICAgIHRoaXMuYW5jZXN0b3JzID0gYW5jZXN0b3JzO1xuXHRcdCAgICAgICAgdGhpcy54U3RhcnQgPSB4U3RhcnQgfHwgeDtcblx0XHQgICAgICAgIHRoaXMueVN0YXJ0ID0geVN0YXJ0IHx8IHk7XG5cdFx0ICAgIH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBDYWxsZWQgZHVyaW5nIHRoZSBmaXJzdCB1cGRhdGUgZ3JhcGggZm9yIGEgbm9kZVxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSAgICAgIHtEM09iamVjdH0gIGQzbm9kZSAgVGhlIGQzIG5vZGVcblx0XHRcdCAqIEBwYXJhbSAgICAgIHtPYmplY3R9ICAgIGQgICAgICAgVGhlIG1hdGNoaW5nIGRhdGEgb2JqZWN0XG5cdFx0XHQgKi9cblx0XHRcdG5ld05vZGVBdHRyKGQzbm9kZSwgZCkge1xuXHRcdFx0XHR2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaDtcblx0XHRcdFx0aWYgKHRoaXNHcmFwaC5jb25zdHMuY29udGFpbmVyQ2xhc3MgIT0gbnVsbCAmJlxuXHRcdFx0XHRcdFx0dGhpc0dyYXBoLmNoaWxkcmVuX3N0cnVjdFtkLmlkXSA9PSBudWxsKSB7XG5cdFx0XHRcdFx0ZDNub2RlLmNsYXNzZWQodGhpc0dyYXBoLmNvbnN0cy5jb250YWluZXJDbGFzcywgdHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZDNub2RlLnRyYW5zaXRpb24oXCJub2RlUG9zaXRpb25UcmFuc2l0aW9uXCIpXG5cdFx0ICAgICAgICAgICAgICAgIC5kdXJhdGlvbig3NTApXG5cdFx0ICAgICAgICAgICAgICAgIC5hdHRyVHdlZW4oXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkge1xuXHRcdCAgICAgICAgICAgICAgICAgICAgaWYgKGQueFN0YXJ0ICE9IG51bGwgJiYgZC55U3RhcnQgIT0gbnVsbCkge1xuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIHZhciB4U3RhcnQgPSBkLnhTdGFydDtcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICB2YXIgeVN0YXJ0ID0gZC55U3RhcnQ7XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgZC54U3RhcnQgPSBkLng7XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgZC55U3RhcnQgPSBkLnk7XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHpvb20gPSB0aGlzR3JhcGguZHJhZ1N2Zztcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZDMuaW50ZXJwb2xhdGVTdHJpbmcoXCJ0cmFuc2xhdGUoXCIgKyB4U3RhcnQgKyBcIixcIiArIHlTdGFydCArIFwiKVwiLCBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCIpO1xuXHRcdCAgICAgICAgICAgICAgICAgICAgfVxuXHRcdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQzLmludGVycG9sYXRlU3RyaW5nKFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIiwgXCJ0cmFuc2xhdGUoXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiKTtcblx0XHQgICAgICAgICAgICAgICAgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdE5vZGU6IFZpc3VhbGl6ZXJOb2RlLFxuXHRcdH1cblxufV0pO1xuXG5cblxuXG5cblxuXG5cbiIsIi8qKlxuICogVGhpcyBwb2xpY3kgaXMgdXNlZCB0byBhZGQgYSBzZWxlY3Qgbm9kZSBmZWF0dXJlLlxuICogU3VwcG9ydHMgc2VsZWN0aW5nIG11bHRpcGxlIG5vZGVzIGJ5IHVzaW5nIHRoZSBjdHJsIGtleS5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ1BvbGljeU1vZHVsZScpXG4gICAgLmZhY3RvcnkoJ05vZGVTZWxlY3Rpb25Qb2xpY3knLCBbJ1BvbGljeScsIGZ1bmN0aW9uIChQb2xpY3kpIHtcblxuICAgIFx0Y2xhc3MgTm9kZVNlbGVjdGlvblBvbGljeSBleHRlbmRzIFBvbGljeS5Qb2xpY3kge1xuICAgICAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAgICAgc3VwZXIoXCJOb2RlU2VsZWN0aW9uUG9saWN5XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGxlZCB3aGVuIGZpcnN0IGluc3RhbGxlZFxuICAgICAgICAgICAgICogT3ZlcndyaXRlcyB0aGUgb24gZHJhZyBldmVudCBvZiB0aGUgZ3JhcGhcbiAgICAgICAgICAgICAqIFxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge0dyYXBofSAgZ3JhcGggICBUaGUgZ3JhcGggaXQgaXMgXG4gICAgXHRcdCAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFsbGVkIG9uXG4gICAgXHRcdCAqL1xuICAgICAgICAgICAgaW5pdGlhbGl6ZShncmFwaCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZShncmFwaCk7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gZ3JhcGguc3RhdGUuTm9kZVNlbGVjdGlvblBvbGljeSA9IHt9O1xuICAgICAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkTm9kZXMgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgY29uc3RzID0gZ3JhcGguY29uc3RzLk5vZGVTZWxlY3Rpb25Qb2xpY3kgPSB7fTtcbiAgICAgICAgICAgICAgICBjb25zdHMuc2VsZWN0ZWRDbGFzcyA9IFwic2VsZWN0ZWRcIjtcbiAgICAgICAgICAgICAgICAvL292ZXJ3cml0dGluZyBncmFwaCdzIG5vZGUgb24gZHJhZyBldmVudCB0byBzdXBwb3J0XG4gICAgICAgICAgICAgICAgLy9tb3ZpbmcgbXVsdGlwbGUgbm9kZXMgYXQgb25jZVxuICAgICAgICAgICAgICAgIHZhciBkcmFnID0gZ3JhcGguZHJhZztcbiAgICAgICAgICAgICAgICBkcmFnLm9uKCdkcmFnJywgZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgICAgIFx0dmFyIHRoaXNHcmFwaCA9IGdyYXBoO1xuICAgICAgICAgICAgICAgIFx0aWYgKHRoaXNHcmFwaC5jb25zdHMuTm9kZVNlbGVjdGlvblBvbGljeSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgXHRcdHZhciBzZWxlY3RlZENsYXNzID0gdGhpc0dyYXBoLmNvbnN0cy5Ob2RlU2VsZWN0aW9uUG9saWN5LnNlbGVjdGVkQ2xhc3M7XG4gICAgICAgICAgICAgICAgXHRcdHZhciBzZWxlY3Rpb24gPSBkMy5zZWxlY3RBbGwoICcuJyArc2VsZWN0ZWRDbGFzcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBzZWxlY3Rpb25bMF0uaW5kZXhPZiggdGhpcyk9PS0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uLmNsYXNzZWQoc2VsZWN0ZWRDbGFzcywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbiA9IGQzLnNlbGVjdCggdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uLmNsYXNzZWQoc2VsZWN0ZWRDbGFzcywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24uYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbiggZCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQueCArPSBkMy5ldmVudC5keDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLnkgKz0gZDMuZXZlbnQuZHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgWyBkLngsZC55IF0gKyBcIilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC51cGRhdGVHcmFwaCgpO1xuICAgICAgICAgICAgICAgIFx0fVxuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWRkU2VsZWN0Tm9kZShkM05vZGUsIG5vZGVEYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGgsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gdGhpc0dyYXBoLnN0YXRlLk5vZGVTZWxlY3Rpb25Qb2xpY3ksXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cyA9IHRoaXNHcmFwaC5jb25zdHMuTm9kZVNlbGVjdGlvblBvbGljeTtcblxuICAgICAgICAgICAgICAgIGQzTm9kZS5jbGFzc2VkKGNvbnN0cy5zZWxlY3RlZENsYXNzLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZE5vZGVzLnB1c2gobm9kZURhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZW1vdmVTZWxlY3RGcm9tTm9kZShkM05vZGUsIG5vZGVEYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGgsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gdGhpc0dyYXBoLnN0YXRlLk5vZGVTZWxlY3Rpb25Qb2xpY3ksXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cyA9IHRoaXNHcmFwaC5jb25zdHMuTm9kZVNlbGVjdGlvblBvbGljeTtcblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5jaXJjbGVzLmZpbHRlcihmdW5jdGlvbihjZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2QuaWQgPT09IG5vZGVEYXRhLmlkO1xuICAgICAgICAgICAgICAgIH0pLmNsYXNzZWQoY29uc3RzLnNlbGVjdGVkQ2xhc3MsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBzdGF0ZS5zZWxlY3RlZE5vZGVzLmluZGV4T2Yobm9kZURhdGEpO1xuICAgICAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkTm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVtb3ZlQWxsU2VsZWN0ZWROb2RlcygpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB0aGlzR3JhcGguc3RhdGUuTm9kZVNlbGVjdGlvblBvbGljeSxcbiAgICAgICAgICAgICAgICAgICAgY29uc3RzID0gdGhpc0dyYXBoLmNvbnN0cy5Ob2RlU2VsZWN0aW9uUG9saWN5O1xuXG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmNpcmNsZXMuY2xhc3NlZChjb25zdHMuc2VsZWN0ZWRDbGFzcywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkTm9kZXMgPSBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW91c2Vkb3duKGQzbm9kZSwgZCkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5Ob2RlU2VsZWN0aW9uUG9saWN5LFxuICAgICAgICAgICAgICAgICAgICBjb25zdHMgPSB0aGlzR3JhcGguY29uc3RzLk5vZGVTZWxlY3Rpb25Qb2xpY3k7XG4gICAgICAgICAgICAgICAgZDMuZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKGQzLmV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLnNlbGVjdGVkTm9kZXMuaW5kZXhPZihkKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdEZyb21Ob2RlKGQzbm9kZSwgZCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFNlbGVjdE5vZGUoZDNub2RlLCBkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUuc2VsZWN0ZWROb2Rlcy5pbmRleE9mKGQpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vaWYgbm8gY29udHJvbCBrZXksIGFuZCBjbGlja2VkIG5vdCBzZWxlY3RlZCBub2RlLFxuICAgICAgICAgICAgICAgICAgICAvL3JlbW92ZSBhbGwgb2YgY3VycmVudCBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBbGxTZWxlY3RlZE5vZGVzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtb3VzZXVwKGQzbm9kZSwgZCkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5Ob2RlU2VsZWN0aW9uUG9saWN5LFxuICAgICAgICAgICAgICAgICAgICBjb25zdHMgPSB0aGlzR3JhcGguY29uc3RzLk5vZGVTZWxlY3Rpb25Qb2xpY3k7XG4gICAgICAgICAgICAgICAgaWYgKCFkMy5ldmVudC5jdHJsS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vaWYgbGVuZ3RoIGlzIGdyZWF0ZXIgdGhhbiAxLCB0aGVuIHdlIGFyZSBtb3ZpbmcgbXVsdGlwbGUgbm9kZXNcbiAgICAgICAgICAgICAgICAgICAgLy9sZWF2ZSB0aGVtIGFsbCBoaWdobGlnaHRlZFxuICAgICAgICAgICAgICAgICAgICAvL290aGVyd2lzZSB3ZSBhcmUganVzdCBtb3Zpbmcgb25lIG5vZGUsIHNvIHVuaGlnaGxpZ2h0XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5zZWxlY3RlZE5vZGVzLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdEZyb21Ob2RlKGQzbm9kZSwgZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBQb2xpY3k6IE5vZGVTZWxlY3Rpb25Qb2xpY3ksXG4gICAgICAgIH1cbn1dKTtcblxuXG5cblxuXG5cblxuIiwiLyoqXG4gKiBUaGlzIHBvbGljeSBjaGFuZ2VzIHRoZSB2aWV3IHRvIHRoZSB0aW1lZ3JhcGggb2YgbGluayBkYXRhIG9uIGNsaWNrLlxuICovXG5hbmd1bGFyLm1vZHVsZSgnUG9saWN5TW9kdWxlJylcbiAgICAuZmFjdG9yeSgnUGF0aENoYW5nZVZpZXdQb2xpY3knLCBbJ1BvbGljeScsIGZ1bmN0aW9uIChQb2xpY3kpIHtcbiAgICBcdGNsYXNzIFBhdGhDaGFuZ2VWaWV3UG9saWN5IGV4dGVuZHMgUG9saWN5LlBvbGljeSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGxlZCB0byBidWlsZCBwb2xpY3lcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICB7QW5ndWxhciBTdGF0ZX0gICAgJHN0YXRlICAgICAgVXNlZCB0byBjaGFuZ2Ugdmlld1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb25zdHJ1Y3Rvcigkc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBzdXBlcignUGF0aENoYW5nZVZpZXdQb2xpY3knKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDaGVja3MgaWYgdGhlIGdpdmVuIGlkIGlzIGEgRW5kcG9pbnQgbm9kZSBvciBhXG4gICAgICAgICAgICAgKiBQcm92aWRlciBub2RlXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge3N0cmluZ30gIGlkICAgICAgTm9kZSBJRFxuICAgICAgICAgICAgICogQHJldHVybiAgICAge3N0cmluZ30gIHR5cGUgICAgVGhlIHR5cGUsIHVuZGVmaW5lZCBcbiAgICAgICAgICAgICAqIFx0XHRcdFx0XHRcdFx0ICAgICBpZiBuZWl0aGVyLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXRUeXBlKGlkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHR5cGU7XG4gICAgICAgICAgICAgICAgaWYgKF8uaW5jbHVkZXModGhpcy5ncmFwaC5kYXRhU291cmNlLmVuZHBvaW50cywgaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcIkVuZHBvaW50SVBcIiBcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF8uaW5jbHVkZXModGhpcy5ncmFwaC5kYXRhU291cmNlLnByb3ZpZGVycywgaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcIlByb3ZpZGVySVBcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZW5lcmF0ZXMgYSBsaXN0IG9mIGFsbCBjaGlsZCBjb250YWluZXJzIG9mIHRoZSBzZXJ2aWNlXG4gICAgICAgICAgICAgKiBDYW4gaGFuZGxlIG5lc3RlZCBzZXJ2aWNlcy5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7c3RyaW5nfSAgaWQgICAgICBOb2RlIElEXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdlbmVyYXRlTGlzdChpZCkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzUG9saWN5ID0gdGhpcztcbiAgICAgICAgICAgICAgICB2YXIgcmV0TGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgIHZhciBub2RlSWRzID0gdGhpcy5ncmFwaC5kYXRhU291cmNlLmNoaWxkcmVuX3N0cnVjdFtpZF07XG4gICAgICAgICAgICAgICAgXy5mb3JFYWNoKG5vZGVJZHMsIGZ1bmN0aW9uKGNoaWxkSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHR5cGUgPSB0aGlzUG9saWN5LmdldFR5cGUoY2hpbGRJZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldExpc3QuY29uY2F0KHRoaXNQb2xpY3kuZ2VuZXJhdGVMaXN0KGNoaWxkSWQpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldExpc3QucHVzaChjaGlsZElkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldExpc3RcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBVc2VkIHRvIHJlcm91dGUgYW4gZWRnZSB3aGVuIGNsaWNrZWRcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7PHR5cGU+fSAgZWRnZSAgICBUaGUgY2xpY2tlZCBlZGdlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZpZXdFZGdlKGVkZ2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgc291cmNlVHlwZTtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0VHlwZTtcbiAgICAgICAgICAgICAgICB2YXIgc291cmNlTGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXRMaXN0ID0gW107XG4gICAgICAgICAgICAgICAgdmFyIHNvdXJjZUlkID0gZWRnZS5zb3VyY2UuaWQ7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldElkID0gZWRnZS50YXJnZXQuaWQ7XG5cbiAgICAgICAgICAgICAgICAvL3NhdmluZyBjdXJyZW50IGxheW91dCBpZiBzcGxpdCBwb2xpY3kgaXMgaW1wbGVtZW50ZWRcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5ncmFwaC5zYXZlR3JhcGggIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIFx0dGhpcy5TdGF0ZVNhdmUuc3RhdGUgPSB0aGlzLmdyYXBoLnNhdmVHcmFwaCgpO1xuICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgIHNvdXJjZVR5cGUgPSB0aGlzLmdldFR5cGUoc291cmNlSWQpO1xuICAgICAgICAgICAgICAgIGlmIChzb3VyY2VUeXBlID09IG51bGwpIHsvL05vdCBhIGNvbnRhaW5lciBub2RlLCBuZWVkIHRvIGFnZ3JlZ2F0ZVxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VMaXN0ID0gdGhpcy5nZW5lcmF0ZUxpc3Qoc291cmNlSWQpO1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2VUeXBlID0gdGhpcy5nZXRUeXBlKHNvdXJjZUxpc3RbMF0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZUxpc3QgPSBbc291cmNlSWRdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRhcmdldFR5cGUgPSB0aGlzLmdldFR5cGUodGFyZ2V0SWQpO1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRUeXBlID09IG51bGwpIHsvL05vdCBhIGNvbnRhaW5lciBub2RlLCBuZWVkIHRvIGFnZ3JlZ2F0ZVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRMaXN0ID0gdGhpcy5nZW5lcmF0ZUxpc3QodGFyZ2V0SWQpO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRUeXBlID0gdGhpcy5nZXRUeXBlKHRhcmdldExpc3RbMF0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExpc3QgPSBbdGFyZ2V0SWRdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRzdGF0ZS5nbygnY29udGl2Lm1lbnUudmlzdWFsaXphdGlvbi5lZGdlJywgXG4gICAgICAgICAgICAgICAgICAgIHtzb3VyY2VOYW1lOiBzb3VyY2VJZCwgdGFyZ2V0TmFtZTogdGFyZ2V0SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VMaXN0OiBzb3VyY2VMaXN0LCB0YXJnZXRMaXN0OiB0YXJnZXRMaXN0LCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVR5cGU6c291cmNlVHlwZSwgdGFyZ2V0VHlwZTp0YXJnZXRUeXBlfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1vdXNlZG93bihkM3BhdGgsIGQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdFZGdlKGQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFBvbGljeTogUGF0aENoYW5nZVZpZXdQb2xpY3ksXG4gICAgICAgIH1cbn1dKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCIvKipcbiAqIEJhc2UgcG9saWN5IGNsYXNzIGZvciB0aGUgZ3JhcGggb2JqZWN0XG4gKiBcbiAqIFBvbGljaWVzIGFyZSB1c2VkIHRvIGlzb2xhdGUgZmVhdHVyZXMgZm9yIGEgZ3JhcGguXG4gKiBQb2xpY2llcyBjYW4gYmUgaW5zdGFsbGVkIG9uIG5vZGVzLCBsaW5rcywgb3IgdGhlIGdyYXBoLlxuICogRWFjaCBwb2xpY3kgaGFzIGludGVyYWN0aW9uIGhhbmRsZXJzIHRoYXQgd2lsbCBiZSBjYWxsZWQgYnkgdGhlIGdyYXBoXG4gKiBpZiBpbnN0YWxsZWQuIFBvbGljaWVzIGNhbiBhbHNvIG1vZGlmeSBncmFwaCBmdW5jdGlvbnMgKHNlZSBRVGlwUG9saWN5KS5cbiAqIE11bHRpcGxlIHBvbGljaWVzIGNhbiBiZSBpbnN0YWxsZWQgZm9yIGEgbm9kZSBvciBsaW5rLiBcbiAqIFxuICogVG8gd3JpdGUgeW91ciBvd24gcG9saWN5LCBjcmVhdGUgYSBuZXcgZmFjdG9yeSB0aGF0IHVzZXMgdGhlIHBvbGljeVxuICogeW91IHdhbnQgdG8gaW5oZXJpdCBhcyBhIGRlcGVuZGVuY3ksIGFuZCBleHRlbmQgaXRzIHBvbGljeS4gXG4gKiBSZXR1cm4gdGhlIGNsYXNzIG9iamVjdCB3aXRoIFBvbGljeSBhcyBrZXksIGFuZCBcbiAqIGFkZCB0aGUgcG9saWN5IHRvIHRoZSBQb2xpY3lTZXJ2aWNlIGZhY3RvcnkuXG4gKiBcbiAqIEZvciBzYXZpbmcgc3RhdGUgb3IgY29uc3RzIGZvciB0aGUgcG9saWN5LCBjcmVhdGUgYSBuYW1lc3BhY2VcbiAqIGluIGdyYXBoLnN0YXRlIGFuZCBncmFwaC5jb25zdHMuXG4gKiBFeC4gXG4gKiAgICAgIGdyYXBoLnN0YXRlLm15UG9saWN5ID0ge307XG4gKiAgICAgIGdyYXBoLmNvbnN0cy5teVBvbGljeSA9IHt9O1xuICovXG5hbmd1bGFyLm1vZHVsZSgnUG9saWN5TW9kdWxlJylcbiAgICAuZmFjdG9yeSgnUG9saWN5JywgW2Z1bmN0aW9uICgpIHtcbiAgICAgICAgY2xhc3MgUG9saWN5IHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKHBvbGljeU5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvbGljeU5hbWUgPSBwb2xpY3lOYW1lO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGggPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWxsZWQgd2hlbiB0aGUgcG9saWN5IGlzIGluc3RhbGxlZC5cbiAgICAgICAgICAgICAqIFxuICAgICAgICAgICAgICogQHBhcmFtICB7R3JhcGh9ICBncmFwaCAgIFRoZSBHcmFwaCB0aGF0IHRoZSBwb2xpY3kgaXNcbiAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICBiZWluZyBpbnN0YWxsZWQgb25cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaW5pdGlhbGl6ZShncmFwaCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy5ncmFwaCA9IGdyYXBoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEhhbmRsZXIsIG1lYW50IHRvIGJlIG92ZXJyaWRkZW4gaW4gc3ViY2xhc3Nlc1xuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAge2QzIG9iamVjdH0gICAgZDNvYmogICAgVGhlIGQzb2JqZWN0XG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtOb2RlL0xpbmsvR3JhcGh9ICBkICAgVGhlIG9iamVjdCBpdCB3YXNcbiAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YWxsZWQgZm9yLiAgICBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbW91c2VvdmVyIChkM29iaiwgZCkge31cbiAgICAgICAgICAgIGRibGNsaWNrKGQzb2JqLCBkKSB7fVxuICAgICAgICAgICAgY29udGV4dG1lbnUoZDNvYmosIGQpIHt9XG4gICAgICAgICAgICBtb3VzZW91dChkM29iaiwgZCkge31cbiAgICAgICAgICAgIG1vdXNlZG93bihkM29iaiwgZCkge31cbiAgICAgICAgICAgIG1vdXNldXAoZDNvYmosIGQpIHt9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogV2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgZ3JhcGggaXMgYmVpbmcgZGVzdHJveWVkLlxuICAgICAgICAgICAgICogVXNlZCB0byByZW1vdmUgYW55IGVsZW1lbnRzIG9yIGJpbmRpbmdzIHRoZSBwb2xpY3lcbiAgICAgICAgICAgICAqIGhhcyBhZGRlZC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZGVzdHJveSgpIHt9XG4gICAgICAgIH1cbiAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBQb2xpY3k6IFBvbGljeSxcbiAgICAgICAgfVxufV0pO1xuXG5cblxuXG4iLCIvKipcbiAqIENvbnRhaW5zIGFsbCB0aGUgcG9saWNpZXMuXG4gKiBTZWUgcG9saWN5LmpzIGZvciBpbmZvIG9uIGhvdyBwb2xpY2llcyB3b3JrLlxuICovXG5hbmd1bGFyLm1vZHVsZSgnUG9saWN5TW9kdWxlJylcbiAgICAuZmFjdG9yeSgnUG9saWN5U2VydmljZScsIFsnUG9saWN5JywnUVRpcFBvbGljeScsICdQYXRoQ2hhbmdlVmlld1BvbGljeScsIFxuICAgICAgICAnTm9kZVNlbGVjdGlvblBvbGljeScsICdTcGxpdEpvaW5Ob2RlUG9saWN5JywgJ1NwbGl0Sm9pblZpZXdQb2xpY3knLFxuICAgICAgICAnU2F2ZVN0YXRlUG9saWN5JyxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChQb2xpY3ksIFFUaXBQb2xpY3ksIFBhdGhDaGFuZ2VWaWV3UG9saWN5LFxuICAgICAgICAgICAgICAgICAgICAgICAgTm9kZVNlbGVjdGlvblBvbGljeSwgIFNwbGl0Sm9pbk5vZGVQb2xpY3ksIFxuICAgICAgICAgICAgICAgICAgICAgICAgU3BsaXRKb2luVmlld1BvbGljeSwgU2F2ZVN0YXRlUG9saWN5KSB7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBQb2xpY3k6IFBvbGljeS5Qb2xpY3ksXG4gICAgICAgICAgICAgICAgICAgIFFUaXBQb2xpY3k6IFFUaXBQb2xpY3kuUG9saWN5LFxuICAgICAgICAgICAgICAgICAgICBQYXRoQ2hhbmdlVmlld1BvbGljeTogUGF0aENoYW5nZVZpZXdQb2xpY3kuUG9saWN5LFxuICAgICAgICAgICAgICAgICAgICBOb2RlU2VsZWN0aW9uUG9saWN5OiBOb2RlU2VsZWN0aW9uUG9saWN5LlBvbGljeSxcbiAgICAgICAgICAgICAgICAgICAgU3BsaXRKb2luTm9kZVBvbGljeTogU3BsaXRKb2luTm9kZVBvbGljeS5Qb2xpY3ksXG4gICAgICAgICAgICAgICAgICAgIFNwbGl0Sm9pblZpZXdQb2xpY3k6IFNwbGl0Sm9pblZpZXdQb2xpY3kuUG9saWN5LFxuICAgICAgICAgICAgICAgICAgICBTYXZlU3RhdGVQb2xpY3k6IFNhdmVTdGF0ZVBvbGljeS5Qb2xpY3ksXG4gICAgICAgICAgICAgICAgfVxufV0pOyIsIi8qKlxuICogVGhpcyBwb2xpY3kgYWRkcyB0b29sdGlwIGZ1bmN0aW9uYWxpdHkgdG8gbm9kZXMgYW5kIGxpbmtzLlxuICogV2hlbiBpbnN0YWxsaW5nLCBpbnN0YWxsIG9uIGJvdGggbGlua3MgYW5kIG5vZGVzLlxuICogXG4gKiBVc2VzIHRoZSBxVGlwIGpRdWVyeSBwbHVnaW5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ1BvbGljeU1vZHVsZScpXG4gICAgLmZhY3RvcnkoJ1FUaXBQb2xpY3knLCBbJ1BvbGljeScsIGZ1bmN0aW9uIChQb2xpY3kpIHtcbiAgICAgICAgY2xhc3MgUVRpcFBvbGljeSBleHRlbmRzIFBvbGljeS5Qb2xpY3kge1xuICAgICAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAgICAgc3VwZXIoXCJRVGlwUG9saWN5XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGxlZCB3aGVuIHRoZSBwb2xpY3kgaXMgaW5zdGFsbGVkXG4gICAgICAgICAgICAgKiBNb2RpZmllcyB0aGUgdXBkYXRlTmV3Tm9kZXMgYW5kIFxuICAgICAgICAgICAgICogdXBkYXRlTmV3UGF0aHMgbWV0aG9kIG9mIHRoZSBncmFwaCB0byBpbnN0YWxsIHF0aXBcbiAgICAgICAgICAgICAqIG9udG8gZWFjaCBub2RlIGFuZCBwYXRoLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtHcmFwaH0gIGdyYXBoICAgVGhlIGdyYXBoIGl0IGlzIFxuICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YWxsZWQgb25cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaW5pdGlhbGl6ZShncmFwaCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZShncmFwaCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgdGhpc1BvbGljeSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gZ3JhcGguc3RhdGUuUVRpcFBvbGljeSA9IHt9O1xuXG4gICAgICAgICAgICAgICAgc3RhdGUubW91c2Vkb3duID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICB2YXIgY29uc3RzID0gZ3JhcGguY29uc3RzLlFUaXBQb2xpY3kgPSB7fTtcblxuICAgICAgICAgICAgICAgIC8vVHJhY2tpbmcgbW91c2UgY2xpY2sgc3RhdGUgdG8gbWFrZSB0b29sdGlwXG4gICAgICAgICAgICAgICAgLy9kaXNhcHBlYXIgaWYgdGhlIG5vZGUgaXMgYmVpbmcgZHJhZ2dlZC5cbiAgICAgICAgICAgICAgICAkKCcjdmlzdWFsaXphdGlvbi1ncmFwaCcpLm1vdXNldXAoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5tb3VzZXVwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIC8vb3ZlcnJpZGUgdXBkYXRlTmV3Tm9kZXMgYW5kIHVwZGF0ZU5ld1BhdGhzXG4gICAgICAgICAgICAgICAgLy90byBpbnN0YWxsIHF0aXBcbiAgICAgICAgICAgICAgICB2YXIgZ3JhcGhVcGRhdGVOZXdOb2RlcyA9IGdyYXBoLnVwZGF0ZU5ld05vZGVzO1xuICAgICAgICAgICAgICAgIGdyYXBoLnVwZGF0ZU5ld05vZGVzID0gZnVuY3Rpb24obmV3Tm9kZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JhcGhVcGRhdGVOZXdOb2Rlcy5jYWxsKGdyYXBoLCBuZXdOb2Rlcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNQb2xpY3kudXBkYXRlTmV3Tm9kZXMobmV3Tm9kZXMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBncmFwaFVwZGF0ZU5ld1BhdGhzID0gZ3JhcGgudXBkYXRlTmV3UGF0aHM7XG4gICAgICAgICAgICAgICAgZ3JhcGgudXBkYXRlTmV3UGF0aHMgPSBmdW5jdGlvbihuZXdQYXRocykge1xuICAgICAgICAgICAgICAgICAgICBncmFwaFVwZGF0ZU5ld1BhdGhzLmNhbGwoZ3JhcGgsIG5ld1BhdGhzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1BvbGljeS51cGRhdGVOZXdQYXRocyhuZXdQYXRocyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZXN0cm95KCkge1xuICAgICAgICAgICAgICAgIC8vcmVtb3ZpbmcgYWxsIHF0aXAgZnJvbSBET01cbiAgICAgICAgICAgICAgICAkKCdbaWRePVwicXRpcFwiXScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogS2VlcGluZyB0cmFjayBvZiBtb3VzZWRvd24gc3RhdGVcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7ZDNPYmplY3R9ICBkM29iaiAgVGhlIGQzIHBiamVjdFxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge05vZGUvTGlua30gIGQgICAgIFRoZSBtYXRjaGluZyBkYXRhIG9iamVjdFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBtb3VzZWRvd24oZDNvYmosIGQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB0aGlzR3JhcGguc3RhdGUuUVRpcFBvbGljeTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5tb3VzZWRvd24gPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEtlZXBpbmcgdHJhY2sgb2YgbW91c2Vkb3duIHN0YXRlXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge2QzT2JqZWN0fSAgZDNvYmogIFRoZSBkMyBwYmplY3RcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtOb2RlL0xpbmt9ICBkICAgICBUaGUgbWF0Y2hpbmcgZGF0YSBvYmplY3RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbW91c2V1cChkM29iaiwgZCkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5RVGlwUG9saWN5O1xuICAgICAgICAgICAgICAgIHN0YXRlLm1vdXNlZG93biA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGxlZCB3aGVuIE5ldyBOb2RlcyBhcmUgYWRkZWQgZHVyaW5nIHRoZVxuICAgICAgICAgICAgICogdXBkYXRlIGdyYXBoIGZ1bmN0aW9uXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge2QzTm9kZX0gIG5ld05vZGVzICBUaGUgbmV3IG5vZGVzIHRoYXQgYXJlXG4gICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlaW5nIGFkZGVkIHRvIHRoZSBncmFwaFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB1cGRhdGVOZXdOb2RlcyhuZXdOb2Rlcykge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5RVGlwUG9saWN5O1xuXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAvL2luY2FzZSBsaWJyYXJ5IGhhc24ndCBsb2FkZWQgeWV0XG4gICAgICAgICAgICAgICAgaWYgKCQoZG9jdW1lbnQpLnF0aXAgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vYXR0YWNoaW5nIHF0aXBcbiAgICAgICAgICAgICAgICAgICAgbmV3Tm9kZXMuZWFjaChmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGhpc05vZGUgPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVTdGF0ZSA9IGQuc3RhdGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXh0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0lmIG5vZGUgaGFzIGNoaWxkcmVuLCB0aGVuIGl0IGlzIGEgc2VydmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNHcmFwaC5kYXRhU291cmNlLmNoaWxkcmVuX3N0cnVjdFtkLmlkXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IFwiPGI+PHU+U2VsZWN0b3JzOjwvYj48L3U+IFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3Rvck1hcCA9IHRoaXNHcmFwaC5kYXRhU291cmNlLnNlbGVjdG9yc1tkLmlkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGFzS2V5cyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBzZWxlY3Rvck1hcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGFzS2V5cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0ga2V5ICsgXCIgOiA8aT5cIisgc2VsZWN0b3JNYXBba2V5XSArIFwiPC9pPixcXG4gXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNLZXlzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbW1hIHdpbGwgYmUgcmVtb3ZlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gXCJObyBTZWxlY3RvcnMsIFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gXCI8Yj48dT5MYWJlbHM6PC9iPjwvdT4gXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxhYmVsc01hcCA9IHRoaXNHcmFwaC5kYXRhU291cmNlLmxhYmVsc1tkLmlkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGFzS2V5cyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBsYWJlbHNNYXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhhc0tleXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGtleSArIFwiIDogPGk+XCIrIGxhYmVsc01hcFtrZXldICsgXCI8L2k+LFxcbiBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc0tleXMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29tbWEgd2lsbCBiZSByZW1vdmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSBcIk5vIGxhYmVscywgXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy9yZW1vdmUgbGFzdCBjb21tYVxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IHRleHQuc2xpY2UoMCwgLTIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2YXIgb2Zmc2V0ID0gJCgnI3Zpc3VhbGl6YXRpb24tZ3JhcGgnKS5vZmZzZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZhciBwb3NpdGlvbiA9IFtvZmZzZXQubGVmdCArIGQueCArIGQucmFkaXVzLCBvZmZzZXQudG9wICsgZC55ICtkLnJhZGl1c107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpc05vZGUpLnF0aXAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50czogeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXBpID0gJCh0aGlzTm9kZSkucXRpcCgnYXBpJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gJCgnI2dyYXBoQ29udGFpbmVyJykub2Zmc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb24gPSBbb2Zmc2V0LmxlZnQgKyAoKGQueCAqIHRoaXNHcmFwaC5kcmFnU3ZnLnNjYWxlKCkpICsgdGhpc0dyYXBoLmRyYWdTdmcudHJhbnNsYXRlKClbMF0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0LnRvcCArICgoZC55ICtkLnJhZGl1cykgKiB0aGlzR3JhcGguZHJhZ1N2Zy5zY2FsZSgpKSAgKyB0aGlzR3JhcGguZHJhZ1N2Zy50cmFuc2xhdGUoKVsxXV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwaS5zZXQoJ3Bvc2l0aW9uLnRhcmdldCcsIHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhc3RhdGUubW91c2Vkb3duO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2xvOiAkKCcjdmlzdWFsaXphdGlvbi1ncmFwaCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiAncXRpcC1ibHVlIHF0aXAtc2hhZG93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15OiAndG9wIGNlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0OiAnYm90dG9tIGNlbnRlcicsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0YXJnZXQ6IHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiAnbW91c2Vkb3duIG1vdXNlbGVhdmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGxlZCB3aGVuIG5ldyBwYXRocyBhcmUgYWRkZWQgZHVyaW5nIHRoZVxuICAgICAgICAgICAgICogdXBkYXRlIGdyYXBoIGZ1bmN0aW9uXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge2QzUGF0aH0gIG5ld1BhdGhzICBUaGUgbmV3IHBhdGhzIHRoYXQgYXJlXG4gICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlaW5nIGFkZGVkIHRvIHRoZSBncmFwaFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB1cGRhdGVOZXdQYXRocyhuZXdQYXRocykge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5RVGlwUG9saWN5O1xuXG4gICAgICAgICAgICAgICAgLy9pbmNhc2UgbGlicmFyeSBoYXNuJ3QgbG9hZGVkIHlldFxuICAgICAgICAgICAgICAgIGlmICgkKGRvY3VtZW50KS5xdGlwICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvL2FkZGluZyBxdGlwXG4gICAgICAgICAgICAgICAgICAgIG5ld1BhdGhzLmVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRoaXNQYXRoID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZ2V0dGluZyBtaWRwb2ludCBvZiBwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGF0aEVsICAgPSBkMy5zZWxlY3QodGhpcykubm9kZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pZHBvaW50ID0gcGF0aEVsLmdldFBvaW50QXRMZW5ndGgocGF0aEVsLmdldFRvdGFsTGVuZ3RoKCkvMik7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0UmV0ID0gZC5nZXRNaWRwb2ludCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRleHQgPSBcIkJ5dGVzOiBcIiArIGQuZ2V0V2VpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXNQYXRoKS5xdGlwKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaWYgbW91c2UgaXMgZG93biwgZG9uJ3QgbGV0IHF0aXAgc2hvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFzdGF0ZS5tb3VzZWRvd247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvbG86ICQoJyNncmFwaENvbnRhaW5lcicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiAncXRpcC1ibHVlIHF0aXAtc2hhZG93J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXk6IHRhcmdldFJldC5teSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXQ6ICdjZW50ZXIgY2VudGVyJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogJ21vdXNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRqdXN0OiB0YXJnZXRSZXQuYWRqdXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiAnbW91c2Vkb3duIG1vdXNlbGVhdmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgUG9saWN5OiBRVGlwUG9saWN5LFxuICAgICAgICB9XG59XSk7XG5cblxuXG5cblxuXG5cblxuIiwiLyoqXG4gKiBUaGlzIHBvbGljeSBwcm92aWRlcyBhIHdheSBmb3IgcHJvcGVydGllcyB0byBiZSBzYXZlZCBcbiAqIGJldHdlZW4gdmlldyBjaGFuZ2VzXG4gKiBcbiAqIEl0IG1vZGlmaWVzIHRoZSBkZXN0cm95IGZ1bmN0aW9uIHRvIGFsc28gcGFzcyBpbiBhbiBvYmplY3QgdGhhdFxuICogd2lsbCBoYXZlIGFsbCBpdHMgcHJvcGVydGllcyBzYXZlZCBhbmQgd2lsbCBiZSBhdmFpbGFibGUgXG4gKiBvbiBncmFwaCBsb2FkLiBXaGVuIHNhdmluZyB2YXJpYWJsZXMgdG8gdGhlIG9iamVjdCwgbmFtZXNwYWNlIHdpdGhcbiAqIHRoZSBwb2xpY3kgbmFtZS5cbiAqIFxuICogVGhpcyBwb2xpY3kgbXVzdCBiZSBsb2FkZWQgZmlyc3QgaW4gb3JkZXIgZm9yIGl0IHNhdmVkIHZhcmlhYmxlcyBcbiAqIHRvIGJlIGxvYWRlZCB3aGVuIHRoZSB2aWV3IGNvbWVzIGJhY2sgdG8gdGhlIGdyYXBoXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdQb2xpY3lNb2R1bGUnKVxuICAgIC5mYWN0b3J5KCdTYXZlU3RhdGVQb2xpY3knLCBbJ1BvbGljeScsIGZ1bmN0aW9uIChQb2xpY3kpIHtcbiAgICBcdGNsYXNzIFNhdmVTdGF0ZVBvbGljeSBleHRlbmRzIFBvbGljeS5Qb2xpY3kge1xuICAgIFx0XHRcbiAgICBcdFx0LyoqXG4gICAgXHRcdCAqIFRha2VzIGluIHRoZSBhbmd1bGFyIHNlcnZpY2UgdG8gd2hpY2ggaXQgd2lsbFxuICAgIFx0XHQgKiBzYXZlIGl0J3MgcHJvcGVydGllcyB0by5cbiAgICBcdFx0ICpcbiAgICBcdFx0ICogQHBhcmFtICAgICAge09iamVjdH0gIHNhdmVkU3RhdGUgIE9iamVjdCB0byBzYXZlIFxuICAgIFx0XHQgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcyB0b1xuICAgIFx0XHQgKi9cbiAgICBcdFx0Y29uc3RydWN0b3Ioc2F2ZWRTdGF0ZSkge1xuICAgIFx0XHRcdHN1cGVyKCdTYXZlU3RhdGVQb2xpY3knKTtcbiAgICBcdFx0XHR0aGlzLnNhdmVkU3RhdGUgPSBzYXZlZFN0YXRlO1xuICAgIFx0XHR9XG5cbiAgICBcdFx0LyoqXG4gICAgXHRcdCAqIENhbGxlZCB3aGVuIHRoZSBwb2xpY3kgaXMgaW5zdGFsbGVkXG4gICAgXHRcdCAqIE1vZGlmaWVzIHRoZSBkZXN0cm95IG1ldGhvZCBcbiAgICBcdFx0ICogYW5kIGFkZHMgYSBsb2FkIG1ldGhvZCB0byB0aGUgZ3JhcGhcbiAgICBcdFx0ICpcbiAgICBcdFx0ICogQHBhcmFtICAgICAge0dyYXBofSAgZ3JhcGggICBUaGUgZ3JhcGggaXQgaXMgXG4gICAgXHRcdCAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFsbGVkIG9uXG4gICAgXHRcdCAqL1xuICAgIFx0XHRpbml0aWFsaXplKGdyYXBoKSB7XG4gICAgXHRcdFx0dGhpcy5ncmFwaCA9IGdyYXBoO1xuICAgIFx0XHRcdHZhciB0aGlzUG9saWN5ID0gdGhpcztcbiAgICBcdFx0XHRncmFwaC5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgXHRcdFx0XHR0aGlzUG9saWN5LmdyYXBoRGVzdHJveS5jYWxsKGdyYXBoLCB0aGlzUG9saWN5LnNhdmVkU3RhdGUpO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGdyYXBoLmxvYWQgPSBmdW5jdGlvbihzYXZlZFN0YXRlKSB7XG4gICAgXHRcdFx0XHR0aGlzUG9saWN5LmdyYXBoTG9hZC5jYWxsKGdyYXBoLCBzYXZlZFN0YXRlKTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH1cblxuICAgIFx0XHQvKipcbiAgICBcdFx0ICogV2lsbCBvdmVycmlkZSB0aGUgZ3JhcGgncyBkZWZhdWx0IGRlc3Ryb3ksIHdpdGggXG4gICAgXHRcdCAqIHRoaXMgcG9saWN5J3Mgc2F2ZWRTdGF0ZSBwYXNzZWQgaW4uXG4gICAgXHRcdCAqIENhbGxlZCB3aXRoIHRoaXMgYXMgdGhlIGdyYXBoXG4gICAgXHRcdCAqXG4gICAgXHRcdCAqIEBwYXJhbSAgICAgIHtPYmplY3R9ICBzYXZlZFN0YXRlICBUaGUgc2F2ZWQgc3RhdGVcbiAgICBcdFx0ICovXG4gICAgXHRcdGdyYXBoRGVzdHJveShzYXZlZFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgIF8odGhpc0dyYXBoLmRlZmF1bHROb2RlUG9saWNpZXMpLmZvckVhY2goZnVuY3Rpb24ocG9saWN5KSB7XG4gICAgICAgICAgICAgICAgICAgIHBvbGljeS5kZXN0cm95KHNhdmVkU3RhdGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIF8odGhpc0dyYXBoLmRlZmF1bHRQYXRoUG9saWNpZXMpLmZvckVhY2goZnVuY3Rpb24ocG9saWN5KSB7XG4gICAgICAgICAgICAgICAgICAgIHBvbGljeS5kZXN0cm95KHNhdmVkU3RhdGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzR3JhcGguYmluZGluZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLm9mZihrZXksIHRoaXNHcmFwaC5iaW5kaW5nc1trZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogV2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgZ3JhcGggYXMgdGhpc1xuICAgICAgICAgICAgICogVXNlZCB0byBoYXZlIGFsbCBvdGhlciBwb2xpY2llcyB1c2UgdGhlIGxvYWQgc3RhdGVcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7T2JqZWN0fSAgc2F2ZWRTdGF0ZSAgVGhlIHNhdmVkIHN0YXRlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdyYXBoTG9hZChzYXZlZFN0YXRlKSB7XG4gICAgICAgICAgICBcdHZhciB0aGlzR3JhcGggPSB0aGlzO1xuICAgICAgICAgICAgICAgICBfKHRoaXNHcmFwaC5kZWZhdWx0Tm9kZVBvbGljaWVzKS5mb3JFYWNoKGZ1bmN0aW9uKHBvbGljeSkge1xuICAgICAgICAgICAgICAgICBcdGlmIChwb2xpY3kubG9hZCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIFx0cG9saWN5LmxvYWQoc2F2ZWRTdGF0ZSk7XG4gICAgICAgICAgICAgICAgIFx0fVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIF8odGhpc0dyYXBoLmRlZmF1bHRQYXRoUG9saWNpZXMpLmZvckVhY2goZnVuY3Rpb24ocG9saWN5KSB7XG4gICAgICAgICAgICAgICAgIFx0aWYgKHBvbGljeS5sb2FkICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgXHRwb2xpY3kubG9hZChzYXZlZFN0YXRlKTtcbiAgICAgICAgICAgICAgICAgXHR9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgXHR9XG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRQb2xpY3k6IFNhdmVTdGF0ZVBvbGljeSxcbiAgICBcdH1cbn1dKTtcblxuXG5cblxuXG5cblxuIiwiLyoqXG4gKiBUaGlzIHBvbGljeSBpcyB1c2VkIGZvciBzcGxpdHRpbmcgYSBub2RlIGludG8gaXRzIGNoaWxkcmVuLFxuICogYW5kIGpvaW5pbmcgdGhlbSBiYWNrIHRvIHRoZWlyIHBhcmVudC5cbiAqIFNwbGl0cyBvbiBkb3VibGUgY2xpY2ssIGFuZCBqb2lucyBvbiByaWdodCBjbGljay5cbiAqIElmIG11bHRpcGxlIG5vZGVzIGFyZSBzZWxlY3RlZCBhdCB0aGUgdGltZSBvZiBhIHNwbGl0IG9yIGpvaW4gZXZlbnQsXG4gKiBpdCB3aWxsIHNwbGl0IG9yIGpvaW4gYWxsIG9mIHRoZW0uXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdQb2xpY3lNb2R1bGUnKVxuICAgIC5mYWN0b3J5KCdTcGxpdEpvaW5Ob2RlUG9saWN5JywgWydOb2RlU2VsZWN0aW9uUG9saWN5JywgJ1Zpc3VhbGl6ZXJOb2RlJywgXG4gICAgXHRcdGZ1bmN0aW9uIChOb2RlU2VsZWN0aW9uUG9saWN5LCBWaXN1YWxpemVyTm9kZSkge1xuXG5cdFx0Y2xhc3MgU3BsaXRKb2luTm9kZVBvbGljeSBleHRlbmRzIE5vZGVTZWxlY3Rpb25Qb2xpY3kuUG9saWN5IHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2xpY3lOYW1lID0gXCJTcGxpdEpvaW5Ob2RlUG9saWN5XCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGluaXRpYWxpemUoZ3JhcGgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN1cGVyLmluaXRpYWxpemUoZ3JhcGgpXG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gZ3JhcGguc3RhdGUuU3BsaXRKb2luTm9kZVBvbGljeSA9IHt9O1xuICAgICAgICAgICAgICAgIHN0YXRlLnNwbGl0Tm9kZXMgPSBbXTsgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVHJpZ2dlcmluZyBzcGxpdCBvbiBkb3VibGUgY2xpY2tcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7RDNPYmplY3R9ICBkM25vZGUgIFRoZSBkMyBub2RlXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7T2JqZWN0fSAgZCAgICAgIFRoZSBtYXRjaGluZyBkYXRhIG9iamVjdFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBkYmxjbGljayhkM25vZGUsIGQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaCxcbiAgICAgICAgICAgICAgICAgICAgc3VwZXJTdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5TcGxpdEpvaW5Ob2RlUG9saWN5LFxuICAgICAgICAgICAgICAgICAgICBzdXBlckNvbnN0cyA9IHRoaXNHcmFwaC5jb25zdHMuU3BsaXRKb2luTm9kZVBvbGljeTtcblxuICAgICAgICAgICAgICAgIGlmICghZDMuZXZlbnQuY3RybEtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3VwZXJTdGF0ZS5zZWxlY3RlZE5vZGVzLmluZGV4T2YoZCkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGxpdE11bHRpcGxlTm9kZXMoc3VwZXJTdGF0ZS5zZWxlY3RlZE5vZGVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQWxsU2VsZWN0ZWROb2RlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGxpdE5vZGUoZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRyaWdnZXJpbmcgam9pbiBvbiByaWdodCBjbGlja1xuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtEM09ian0gIGQzbm9kZSAgVGhlIGQzIG5vZGVcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtPYmplY3R9ICBkICAgICAgVGhlIG1hdGNoaW5nIGRhdGEgb2JqZWN0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnRleHRtZW51KGQzbm9kZSwgZCkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoLFxuICAgICAgICAgICAgICAgICAgICBzdXBlclN0YXRlID0gdGhpc0dyYXBoLnN0YXRlLk5vZGVTZWxlY3Rpb25Qb2xpY3ksXG4gICAgICAgICAgICAgICAgICAgIHN1cGVyQ29uc3RzID0gdGhpc0dyYXBoLmNvbnN0cy5Ob2RlU2VsZWN0aW9uUG9saWN5O1xuXG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGg7XG4gICAgICAgICAgICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoIWQzLmV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9pZiB0cnkgdG8gam9pbiBhIGhpZ2hsaWdodGVkIG5vZGUgd2hpbGUgbXVsdGlwbGUgbm9kZXMgYXJlIHNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAvL3dlIGpvaW4gYWxsIGhpZ2hsaWdodGVkIG5vZGVzXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZE5vZGVzID0gc3VwZXJTdGF0ZS5zZWxlY3RlZE5vZGVzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWROb2Rlcy5pbmRleE9mKGQpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuam9pbk5vZGUoc2VsZWN0ZWROb2Rlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2lmIHdlIHRyeSB0byBqb2luIGEgbm9kZSB0aGF0IGlzbid0IHBhcnQgb2YgYSBoaWdobGlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3dlIHJlbW92ZSBhbGwgaGlnaGxpZ2h0cyBhbmQgdGhlbiBqb2luIHRoZSBjbGlja2VkIG5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQWxsU2VsZWN0ZWROb2RlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5qb2luTm9kZShkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBTcGxpdHMgYSBub2RlLlxuICAgICAgICAgICAgICogdXNlZCB0byBzaGFyZSBjb2RlIGJldHdlZW4gc3BsaXROb2RlIGFuZCBzcGxpdE11bHRpcGxlTm9kZXNcbiAgICAgICAgICAgICAqIHdoaWxlIHByZXZlbnRpbmcgdGhlIGhhbmRsZXJzIGZvciB0aGVtIGJvdGggZmlyaW5nXG4gICAgICAgICAgICAgKiBcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtOb2RlfSAgbm9kZSAgICBUaGUgbm9kZSBiZWluZyBzcGxpdFxuICAgICAgICAgICAgICogQHJldHVybiAgICAge0FycmF5fSAgVGhlIG5ldyBub2RlcyBjcmVhdGVkIGJ5IHRoZSBzcGxpdFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBfX3NwbGl0Tm9kZShub2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGgsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gdGhpc0dyYXBoLnN0YXRlLlNwbGl0Sm9pbk5vZGVQb2xpY3k7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBub2RlLmlkXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkcmVuX3N0cnVjdCA9IHRoaXNHcmFwaC5jaGlsZHJlbl9zdHJ1Y3Q7XG4gICAgICAgICAgICAgICAgLy9pZiBpdCBoYXMgbm8gY2hpbGRyZW4gdG8gc3BsaXQgaW50b1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZHJlbl9zdHJ1Y3RbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9yZW1vdmluZyB0aGUgbm9kZSBmcm9tIHRoZSBsaXN0IG9mIG5vZGVzXG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVzID0gXy5maWx0ZXIodGhpc0dyYXBoLm5vZGVzLCBmdW5jdGlvbihncmFwaE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBncmFwaE5vZGVzICE9IG5vZGU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpc0dyYXBoLm5vZGVzKTtcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguc3BsaWNlTGlua3NGb3JOb2RlKG5vZGUpO1xuXG4gICAgICAgICAgICAgICAgLy9nZXR0aW5nIGFsbCB0aGUgbm9kZSBpZCdzIGZvciBmaW5kaW5nIGZsb3dcbiAgICAgICAgICAgICAgICB2YXIgbm9kZV9uYW1lc19zZXQgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXNHcmFwaC5ub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBub2RlX25hbWVzX3NldC5wdXNoKHRoaXNHcmFwaC5ub2Rlc1tpXS5pZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9zZXQgb2Ygbm9kZXMgYWZ0ZXIgdGhlIHNwbGl0XG4gICAgICAgICAgICAgICAgdmFyIG5ld19ub2RlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5fc3RydWN0W25hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVfbmFtZXNfc2V0LnB1c2goY2hpbGRyZW5fc3RydWN0W25hbWVdW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3X25vZGVzLnB1c2goY2hpbGRyZW5fc3RydWN0W25hbWVdW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHJldERhdGEgPSB0aGlzR3JhcGguZGF0YVNvdXJjZS5nZXRGbG93QmV0d2VlblNldChub2RlX25hbWVzX3NldCk7XG5cbiAgICAgICAgICAgICAgICAvL2Zvcm1hdHRpbmcgZGF0YSBmb3IgbmV3IG5vZGVzXG4gICAgICAgICAgICAgICAgdmFyIHhMb2MgPSBub2RlLng7XG4gICAgICAgICAgICAgICAgdmFyIHlMb2MgPSBub2RlLnk7XG4gICAgICAgICAgICAgICAgdmFyIGFuY2VzdG9ycyA9IG5vZGUuYW5jZXN0b3JzLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgLy9rZWVwaW5nIG9yZGVyaW5nIHRoYXQgZmlyc3QgaW4gYW5jZXN0b3IgbGlzdCBpcyBjbG9zZXN0IGluIHJlbGF0aW9uc2hpcFxuICAgICAgICAgICAgICAgIGFuY2VzdG9ycy5zcGxpY2UoMCwgMCwgbm9kZS5pZCk7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IG5vZGUuaWQ7XG4gICAgICAgICAgICAgICAgdmFyIG5ld19ub2RlX29ianMgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgcmFkaXVzID0gbm9kZS5yYWRpdXMgKiB0aGlzR3JhcGguY29uc3RzLnJhZGl1c0RlY2F5O1xuICAgICAgICAgICAgICAgIHZhciBub2RlRGF0YSA9IHJldERhdGEubm9kZURhdGE7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAvL2NhbGN1bGF0aW5nIHdoaWNoIG9mIHRoZSBub2RlcyBpbiByZXREYXRhWzBdIGFyZSBuZXdcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld19ub2Rlcy5pbmRleE9mKG5vZGVEYXRhW2ldLmlkKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWQgPSBub2RlRGF0YVtpXS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRleHQgPSBub2RlRGF0YVtpXS50ZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld19ub2RlID0gbmV3IFZpc3VhbGl6ZXJOb2RlLk5vZGUobnVsbCwgbnVsbCwgaWQsIHRleHQsIHJhZGl1cywgcGFyZW50LCBhbmNlc3RvcnMsIHhMb2MsIHlMb2MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3X25vZGUuaW5pdGlhbGl6ZSh0aGlzR3JhcGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVzLnB1c2gobmV3X25vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3X25vZGVfb2Jqcy5wdXNoKG5ld19ub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgubGlua3MgPSB0aGlzR3JhcGguZGF0YVNvdXJjZS5wcm9jZXNzTGlua0RhdGEocmV0RGF0YS5saW5rRGF0YSwgdGhpc0dyYXBoLm5vZGVzKTtcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguaW5pdE5vZGVzKCk7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmluaXRMaW5rcygpO1xuXG4gICAgICAgICAgICAgICAgc3RhdGUuc3BsaXROb2Rlcy5wdXNoKG5vZGUuaWQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdfbm9kZV9vYmpzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFNwbGl0cyB0aGUgZ2l2ZSBub2RlXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge05vZGV9ICBub2RlICAgIFRoZSBub2RlIGJlaW5nIHNwbGl0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNwbGl0Tm9kZShub2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGgsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gdGhpc0dyYXBoLnN0YXRlLlNwbGl0Sm9pbk5vZGVQb2xpY3k7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdmFyIHJlcyA9IHRoaXMuX19zcGxpdE5vZGUobm9kZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlcyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zcGxpdE5vZGVFdmVudChyZXMpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU3BsaXRzIGFsbCB0aGUgbm9kZXMgcGFzc2VkIGluXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge0FycmF5fSAgbm9kZXMgICBBcnJheSBvZiBub2RlcyB0byBiZSBzcGxpdFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzcGxpdE11bHRpcGxlTm9kZXMobm9kZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB0aGlzR3JhcGguc3RhdGUuU3BsaXRKb2luTm9kZVBvbGljeTtcbiAgICAgICAgICAgICAgICB2YXIgcmVzTm9kZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXMgPSB0aGlzLl9fc3BsaXROb2RlKG5vZGVzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzTm9kZXMgPSByZXNOb2Rlcy5jb25jYXQocmVzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNwbGl0TXVsdGlwbGVOb2Rlc0V2ZW50KHJlcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsbGVkIGFmdGVyIGEgc2luZ2xlIG5vZGUgaXMgc3BsaXRcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7QXJyYXl9ICBuZXdOb2RlcyAgVGhlIG5ldyBub2Rlc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzcGxpdE5vZGVFdmVudChuZXdOb2Rlcykge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoO1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5zZXRQb3NpdGlvbnMoKTtcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgudXBkYXRlR3JhcGgoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWxsZWQgYWZ0ZXIgbXVsdGlwbGUgbm9kZXMgYXJlIHNwbGl0IGF0IG9uY2VcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7QXJyYXl9ICBuZXdOb2RlcyAgVGhlIG5ldyBub2Rlc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzcGxpdE11bHRpcGxlTm9kZXNFdmVudChuZXdOb2Rlcykge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoO1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5zZXRQb3NpdGlvbnMoKTtcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgudXBkYXRlR3JhcGgoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiB1c2VkIHRvIHNoYXJlIGNvZGUgYmV0d2VlbiBqb2luTm9kZSBhbmQgam9pbk11bHRpcGxlTm9kZVxuICAgICAgICAgICAgICogd2hpbGUgcHJldmVudGluZyBib3RoIGhhbmRsZXJzIGZpcmluZ1xuICAgICAgICAgICAgICogXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7Tm9kZX0gICAgICAgICAgbm9kZSAgICBUaGUgbm9kZSB0byBqb2luXG4gICAgICAgICAgICAgKiBAcmV0dXJuICAgICB7Tm9kZX0gIFRoZSBuZXcgbm9kZSBhZnRlciB0aGUgam9pblxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBfX2pvaW5Ob2RlKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaCxcbiAgICAgICAgICAgICAgICAgICAgY29uc3RzID0gdGhpc0dyYXBoLmNvbnN0cy5TcGxpdEpvaW5Ob2RlUG9saWN5LFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5TcGxpdEpvaW5Ob2RlUG9saWN5O1xuXG4gICAgICAgICAgICAgICAgLy9jaGVjayB0aGF0IG5vZGUgc3RpbGwgZXhpc3RzXG4gICAgICAgICAgICAgICAgaWYgKHRoaXNHcmFwaC5ub2Rlcy5pbmRleE9mKG5vZGUpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRyZW5fc3RydWN0ID0gdGhpc0dyYXBoLmNoaWxkcmVuX3N0cnVjdDtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IG5vZGUuaWRcbiAgICAgICAgICAgICAgICAvL2lmIGl0IGhhcyBubyBhbmNlc3Rvciwgbm90aGluZyB0byBqb2luXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuX3N0cnVjdC50b3BMZXZlbC5pbmRleE9mKG5hbWUpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSBub2RlLnBhcmVudDtcbiAgICAgICAgICAgICAgICB2YXIgdG9fYmVfZGVsZXRlZCA9IFtdO1xuICAgICAgICAgICAgICAgIHZhciBub2RlX25hbWVzX3NldCA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpc0dyYXBoLm5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vaWYgbm9kZSB3b24ndCBiZSBjb2xsYXBzZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNHcmFwaC5ub2Rlc1tpXS5hbmNlc3RvcnMuaW5kZXhPZihub2RlLnBhcmVudCkgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVfbmFtZXNfc2V0LnB1c2godGhpc0dyYXBoLm5vZGVzW2ldLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvX2JlX2RlbGV0ZWQucHVzaCh0aGlzR3JhcGgubm9kZXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBuZXdfbm9kZV9pZCA9IG5vZGUucGFyZW50O1xuICAgICAgICAgICAgICAgIG5vZGVfbmFtZXNfc2V0LnB1c2gobm9kZS5wYXJlbnQpO1xuXG4gICAgICAgICAgICAgICAgLy9mb3JtYXR0aW5nIGRhdGFcbiAgICAgICAgICAgICAgICB2YXIgcmFkaXVzID0gbm9kZS5yYWRpdXMgLyB0aGlzR3JhcGguY29uc3RzLnJhZGl1c0RlY2F5OyBcbiAgICAgICAgICAgICAgICB2YXIgeExvYyA9IG5vZGUueDtcbiAgICAgICAgICAgICAgICB2YXIgeUxvYyA9IG5vZGUueTtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gbm9kZS5hbmNlc3RvcnNbMV07XG4gICAgICAgICAgICAgICAgdmFyIGFuY2VzdG9ycyA9IG5vZGUuYW5jZXN0b3JzLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgIHZhciBuZXdfbm9kZSA9IG5ldyBWaXN1YWxpemVyTm9kZS5Ob2RlKHhMb2MsIHlMb2MsIG5ld19ub2RlX2lkLCBuZXdfbm9kZV9pZCwgcmFkaXVzLCBwYXJlbnQsIGFuY2VzdG9ycyk7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVzLnB1c2gobmV3X25vZGUpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHJldERhdGEgPSB0aGlzR3JhcGguZGF0YVNvdXJjZS5nZXRGbG93QmV0d2VlblNldChub2RlX25hbWVzX3NldCk7XG4gICAgICAgICAgICAgICAgLy9yZW1vdmUgYWxsIG5vZGVzIHRoYXQgd2lsbCBiZSBqb2luZWRcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRvX2JlX2RlbGV0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGVfdG9fZGVsZXRlID0gdG9fYmVfZGVsZXRlZFtpXVxuICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGgubm9kZXMuc3BsaWNlKHRoaXNHcmFwaC5ub2Rlcy5pbmRleE9mKG5vZGVfdG9fZGVsZXRlKSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5zcGxpY2VMaW5rc0Zvck5vZGUobm9kZV90b19kZWxldGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgubGlua3MgPSB0aGlzR3JhcGguZGF0YVNvdXJjZS5wcm9jZXNzTGlua0RhdGEocmV0RGF0YS5saW5rRGF0YSwgdGhpc0dyYXBoLm5vZGVzKTtcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguaW5pdE5vZGVzKCk7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmluaXRMaW5rcygpO1xuXG4gICAgICAgICAgICAgICAgc3RhdGUuc3BsaXROb2Rlcy5zcGxpY2Uoc3RhdGUuc3BsaXROb2Rlcy5pbmRleE9mKG5ld19ub2RlLmlkKSwgMSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3X25vZGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSm9pbnMgdGhlIGdpdmVuIG5vZGVcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7Tm9kZX0gIG5vZGUgICAgVGhlIG5vZGUgdG8gam9pblxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBqb2luTm9kZShub2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGgsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gdGhpc0dyYXBoLnN0YXRlLlNwbGl0Sm9pbk5vZGVQb2xpY3k7XG5cbiAgICAgICAgICAgICAgICB2YXIgbmV3Tm9kZSA9IHRoaXMuX19qb2luTm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICBpZiAobmV3Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgXHR0aGlzLmpvaW5Ob2RlRXZlbnQobmV3Tm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEpvaW5zIGFsbCB0aGUgZ2l2ZW4gbm9kZXNcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7QXJyYXl9ICBub2RlcyAgIFRoZSBub2RlcyB0byBqb2luXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGpvaW5NdWx0aXBsZU5vZGUobm9kZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB0aGlzR3JhcGguc3RhdGUuU3BsaXRKb2luTm9kZVBvbGljeTtcblxuICAgICAgICAgICAgICAgIHZhciBuZXdfbm9kZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXMgPSB0aGlzLl9fam9pbk5vZGUobm9kZXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICBuZXdfbm9kZXMucHVzaChyZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmpvaW5NdWx0aXBsZU5vZGVzRXZlbnQobmV3X25vZGVzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWxsZWQgYWZ0ZXIgYSBzaW5nbGUgbm9kZSBpcyBqb2luZWRcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7Tm9kZX0gIG5ld05vZGUgIFRoZSBuZXcgbm9kZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBqb2luTm9kZUV2ZW50KG5ld05vZGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaDtcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgudXBkYXRlR3JhcGgoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWxsZWQgYWZ0ZXIgbXVsdGlwbGUgbm9kZXMgYXJlIGpvaW5lZFxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtBcnJheX0gIG5ld05vZGVzICBUaGUgbmV3IG5vZGVzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGpvaW5NdWx0aXBsZU5vZGVzRXZlbnQobmV3Tm9kZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaDtcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgudXBkYXRlR3JhcGgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBQb2xpY3k6IFNwbGl0Sm9pbk5vZGVQb2xpY3ksXG4gICAgICAgIH1cbn1dKTtcblxuXG5cblxuIiwiLyoqXG4gKiBUaGlzIHBvbGljeSBpcyB1c2VkIHRvIGNoYW5nZSB0aGUgdmlldyB0byBmb2N1cyBvbiBzcGxpdHRpbmcgYW5kIFxuICogam9pbmluZyBldmVudHMuXG4gKiBPdmVycmlkZXMgdGhlIGNlcnRhaW4gZm9yY2UgbGF5b3V0IGZ1bmN0aW9ucyBvZiB0aGUgZ3JhcGggdG8gcGFydGl0aW9uIGEgc3BsaXRcbiAqIGludG8gdGhlIGZvY3VzZWQgbm9kZXMgYW5kIHRoZSBjb25uZWN0ZWQgbm9kZXMuXG4gKiBcbiAqIEhhcyBzYXZlL2xvYWQgbWV0aG9kcyBmb3IgdGhlIHNhdmUgc3RhdGUgcG9saWN5LlxuICogSGFzIGJhY2sgYnV0dG9uIHN1cHBvcnQuXG4gKiBDYW4gYXV0byBjaGFuZ2UgdGhlIHRpdGxlIG9mIHRoZSBncmFwaC5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ1BvbGljeU1vZHVsZScpXG4gICAgLmZhY3RvcnkoJ1NwbGl0Sm9pblZpZXdQb2xpY3knLCBbJ1NwbGl0Sm9pbk5vZGVQb2xpY3knLCAnVmlzdWFsaXplck5vZGUnLCBmdW5jdGlvbiAoU3BsaXRKb2luTm9kZVBvbGljeSwgVmlzdWFsaXplck5vZGUpIHsgXG4gICAgICAgIGNsYXNzIFNwbGl0Sm9pblZpZXdQb2xpY3kgZXh0ZW5kcyBTcGxpdEpvaW5Ob2RlUG9saWN5LlBvbGljeXtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2xpY3lOYW1lID0gXCJTcGxpdEpvaW5WaWV3UG9saWN5XCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGluaXRpYWxpemUoZ3JhcGgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN1cGVyLmluaXRpYWxpemUoZ3JhcGgpXG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gZ3JhcGguc3RhdGUuU3BsaXRKb2luVmlld1BvbGljeSA9IHt9O1xuICAgICAgICAgICAgICAgIHN0YXRlLnNhdmVkU3RhdGVzID0gW107XG4gICAgICAgICAgICAgICAgc3RhdGUuZm9jdXNHcm91cCA9IG51bGw7XG4gICAgICAgICAgICAgICAgc3RhdGUuZXZlbnRIaXN0b3J5ID0gW107XG4gICAgICAgICAgICAgICAgc3RhdGUuZm9jdXNHcm91cHMgPSBbXTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5mb2NpID0gW107XG4gICAgICAgICAgICAgICAgc3RhdGUuem9vbXMgPSB7fTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5sYXlvdXQgPSB7fTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5sYXlvdXREZWZhdWx0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzdGF0ZS5ub2RlSWRzVG9SZXNob3cgPSBudWxsO1xuICAgICAgICAgICAgICAgIHN0YXRlLmJhY2tCdXR0b25FbGVtID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzdGF0ZS50aXRsZUVsZW0gPSBudWxsO1xuICAgICAgICAgICAgICAgIHN0YXRlLnNjYWxlID0gZ3JhcGguZHJhZ1N2Zy5zY2FsZSgpO1xuICAgICAgICAgICAgICAgIHN0YXRlLnRyYW5zbGF0ZSA9IGdyYXBoLmRyYWdTdmcudHJhbnNsYXRlKCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgY29uc3RzID0gZ3JhcGguY29uc3RzLlNwbGl0Sm9pblZpZXdQb2xpY3kgPSB7fTtcbiAgICAgICAgICAgICAgICBjb25zdHMuYm91bmRhcnkgPSAwLjg7XG5cbiAgICAgICAgICAgICAgICAvL292ZXJyaWRpbmcgZDNmb3JjZSBtZXRob2RzIG9mIHRoZSBncmFwaC5cbiAgICAgICAgICAgICAgICBncmFwaC5kM0ZvcmNlQm91bmRzID0gdGhpcy5kM0ZvcmNlQm91bmRzO1xuICAgICAgICAgICAgICAgIGdyYXBoLmQzRm9yY2VUaWNrID0gdGhpcy5kM0ZvcmNlVGljaztcbiAgICAgICAgICAgICAgICBncmFwaC5kM0ZvcmNlU3RhcnQgPSB0aGlzLmQzRm9yY2VTdGFydDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBMaW5rcyB0aGUgcHJvdmlkZWQgZWxlbWVudCBhIGJhY2sgYnV0dG9uIGZlYXR1cmVcbiAgICAgICAgICAgICAqIERvZXNuJ3QgdHJpZ2dlciB0aGUgb24tY2xpY2sgZXZlbnRcbiAgICAgICAgICAgICAqIFRoYXQgc2hvdWxkIGJlIGRvbmUgdGhyb3VnaCBhbmd1bGFyIG5nLWNsaWNrLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtqUXVlcnl9ICBlbGVtICAgIFRoZSBqcXVlcnkgc2VsZWN0ZWQgZWxlbWVudFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpbnN0YWxsQmFja0J1dHRvbihlbGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGgsXG4gICAgICAgICAgICAgICAgICAgIHRoaXNQb2xpY3kgPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5TcGxpdEpvaW5WaWV3UG9saWN5O1xuXG4gICAgICAgICAgICAgICAgc3RhdGUuYmFja0J1dHRvbkVsZW0gPSBlbGVtO1xuICAgICAgICAgICAgICAgIHN0YXRlLmJhY2tCdXR0b24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLmV2ZW50SGlzdG9yeS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzUG9saWN5LnVuZG9MYXN0RXZlbnQuY2FsbCh0aGlzUG9saWN5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBXaWxsIGFsbG93IHRoaXMgcG9saWN5IHRvIGNoYW5nZSB0aGUgdGl0bGUgb2YgdGhlIGdyYXBoXG4gICAgICAgICAgICAgKiBhcyBzcGxpdCBhbmQgam9pbiBldmVudHMgb2NjdXIuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge2pRdWVyeX0gIGVsZW0gICAgVGhlIGpxdWVyeSBzZWxlY3RlZCBlbGVtZW50XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGluc3RhbGxUaXRsZShlbGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGgsXG4gICAgICAgICAgICAgICAgICAgIHRoaXNQb2xpY3kgPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5TcGxpdEpvaW5WaWV3UG9saWN5O1xuXG4gICAgICAgICAgICAgICAgc3RhdGUudGl0bGVFbGVtID0gZWxlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWxsZWQgd2hlbiB0aGUgZ3JhcGggaXMgYmVpbmcgZGVzdHJveWVkXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge09iamVjdH0gIHNhdmVkU3RhdGUgIEFueSBwcm9wZXJ0eSBvbiB0aGlzXG4gICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0IHdpbGwgYmUgYWNjZXNzaWJsZVxuICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZW4gdGhlIHZpZXcgcmVsb2Fkc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBkZXN0cm95KHNhdmVkU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvL09ubHkgaWYgdGhlIHNhdmUgc3RhdGUgcG9saWN5IGlzIGluc3RhbGxlZFxuICAgICAgICAgICAgICAgIGlmIChzYXZlZFN0YXRlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlKHNhdmVkU3RhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBXaWxsIHNhdmUgdGhlIGN1cnJlbnQgc3RhdGUsIGFuZCBhbGwgaGlzdG9yeS5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7T2JqZWN0fSAgc2F2ZWRTdGF0ZSAgQW55IHByb3BlcnR5IG9uIHRoaXNcbiAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3Qgd2lsbCBiZSBhY2Nlc3NpYmxlXG4gICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlbiB0aGUgdmlldyByZWxvYWRzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNhdmUoc2F2ZWRTdGF0ZSkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5TcGxpdEpvaW5WaWV3UG9saWN5O1xuXG4gICAgICAgICAgICAgICAgdmFyIG5vZGVzID0gdGhpcy5ncmFwaC5ub2RlcztcbiAgICAgICAgICAgICAgICB2YXIgbGlua3MgPSB0aGlzLmdyYXBoLmxpbmtzO1xuICAgICAgICAgICAgICAgIHZhciBjdXJyVGl0bGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS50aXRsZUVsZW0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyVGl0bGUgPSBzdGF0ZS50aXRsZUVsZW0udGV4dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZm9jdXNHcm91cCA9IHN0YXRlLmZvY3VzR3JvdXA7XG4gICAgICAgICAgICAgICAgdmFyIGZvY3VzR3JvdXBzID0gc3RhdGUuZm9jdXNHcm91cHM7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50SGlzdG9yeSA9IHN0YXRlLmV2ZW50SGlzdG9yeTtcbiAgICAgICAgICAgICAgICAvLyB2YXIgZm9jaSA9IHN0YXRlLmZvY2k7XG4gICAgICAgICAgICAgICAgdmFyIHpvb21zID0gc3RhdGUuem9vbXM7XG4gICAgICAgICAgICAgICAgdmFyIGxheW91dCA9IHN0YXRlLmxheW91dDtcblxuICAgICAgICAgICAgICAgIC8vaWYgdGhlcmUgaGFzbid0IGJlZW4gYSBicmVhayBldmVudCB5ZXRcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUubGF5b3V0RGVmYXVsdCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWZhdWx0TGF5b3V0ID0ge307XG4gICAgICAgICAgICAgICAgICAgIF8uZm9yRWFjaCh0aGlzR3JhcGgubm9kZXMsIGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRMYXlvdXRbbi5pZF0gPSB7eDpuLngsIHk6bi55fTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUubGF5b3V0RGVmYXVsdCA9IGRlZmF1bHRMYXlvdXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBsYXlvdXREZWZhdWx0ID0gc3RhdGUubGF5b3V0RGVmYXVsdDtcbiAgICAgICAgICAgICAgICB2YXIgcmV0ID0ge25vZGVzOm5vZGVzLCBsaW5rczpsaW5rcywgXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlczpzdGF0ZS5zYXZlZFN0YXRlcywgY3VyclRpdGxlOmN1cnJUaXRsZSwgXG4gICAgICAgICAgICAgICAgICAgIGZvY3VzR3JvdXA6Zm9jdXNHcm91cCwgZm9jdXNHcm91cHM6IGZvY3VzR3JvdXBzLFxuICAgICAgICAgICAgICAgICAgICBldmVudEhpc3Rvcnk6ZXZlbnRIaXN0b3J5LCB6b29tczp6b29tcyxcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0OmxheW91dCwgbGF5b3V0RGVmYXVsdDpsYXlvdXREZWZhdWx0IFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHNhdmVkU3RhdGUuU3BsaXRKb2luVmlld1BvbGljeSA9IHJldDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBXaWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBncmFwaCBpcyByZWxvYWRlZCwgYXNzdW1pbmdcbiAgICAgICAgICAgICAqIHNhdmUgc3RhdGUgcG9saWN5IGlzIGluc3RhbGxlZFxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtPYmplY3R9ICBsb2FkU3RhdGUgIENvbnRhaW5zIGFsbCB0aGUgc2F2ZWRcbiAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBsb2FkKGxvYWRTdGF0ZSkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzUG9saWN5ID0gdGhpcztcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB0aGlzR3JhcGguc3RhdGUuU3BsaXRKb2luVmlld1BvbGljeTtcblxuICAgICAgICAgICAgICAgIGxvYWRTdGF0ZSA9IGxvYWRTdGF0ZS5TcGxpdEpvaW5WaWV3UG9saWN5O1xuICAgICAgICAgICAgICAgIHN0YXRlLnNhdmVkU3RhdGVzID0gbG9hZFN0YXRlLnN0YXRlcztcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgubGlua3MgPSBsb2FkU3RhdGUubGlua3M7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVzID0gbG9hZFN0YXRlLm5vZGVzO1xuXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJUaXRsZSA9IGxvYWRTdGF0ZS5jdXJyVGl0bGU7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLnRpdGxlRWxlbSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnRpdGxlRWxlbS50ZXh0KGN1cnJUaXRsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0YXRlLmZvY3VzR3JvdXAgPSBsb2FkU3RhdGUuZm9jdXNHcm91cDtcbiAgICAgICAgICAgICAgICBzdGF0ZS5ldmVudEhpc3RvcnkgPSBsb2FkU3RhdGUuZXZlbnRIaXN0b3J5O1xuICAgICAgICAgICAgICAgIHN0YXRlLmZvY3VzR3JvdXBzID0gbG9hZFN0YXRlLmZvY3VzR3JvdXBzO1xuICAgICAgICAgICAgICAgIHN0YXRlLnpvb21zID0gbG9hZFN0YXRlLnpvb21zO1xuICAgICAgICAgICAgICAgIHN0YXRlLmxheW91dCA9IGxvYWRTdGF0ZS5sYXlvdXQ7XG4gICAgICAgICAgICAgICAgc3RhdGUubGF5b3V0RGVmYXVsdCA9IGxvYWRTdGF0ZS5sYXlvdXREZWZhdWx0O1xuXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLmJhY2tCdXR0b25FbGVtICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLmV2ZW50SGlzdG9yeS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5iYWNrQnV0dG9uRWxlbS5mYWRlVG8oJ3Nsb3cnLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBjaGlsZHJlbl9zdHJ1Y3QgPSB0aGlzR3JhcGguY2hpbGRyZW5fc3RydWN0O1xuXG4gICAgICAgICAgICAgICAgXy5mb3JFYWNoKHRoaXNHcmFwaC5ub2RlcywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICBkLlNwbGl0Sm9pblZpZXdQb2xpY3kgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8uaW5jbHVkZXMoY2hpbGRyZW5fc3RydWN0W3N0YXRlLmZvY3VzR3JvdXBzWzBdXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuU3BsaXRKb2luVmlld1BvbGljeS50eXBlID0gXCJmb2N1c1wiO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZC5TcGxpdEpvaW5WaWV3UG9saWN5LnR5cGUgPSBcImNvbm5lY3RlZFwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIC8vbG9hZGluZyBhIHByZXZpb3VzIGxheW91dFxuICAgICAgICAgICAgICAgIHZhciBsYXlvdXQ7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLmZvY3VzR3JvdXBzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGguem9vbWVkKFswLDBdLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0ID0gc3RhdGUubGF5b3V0RGVmYXVsdDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgem9vbSA9IHN0YXRlLnpvb21zW3N0YXRlLmZvY3VzR3JvdXBzXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHpvb20gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLnpvb21lZCh6b29tWzBdLCB6b29tWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQgPSBzdGF0ZS5sYXlvdXRbc3RhdGUuZm9jdXNHcm91cHNdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vbGF5b3V0IGNhbid0IGJlIG51bGxcbiAgICAgICAgICAgICAgICBfLmZvckVhY2godGhpc0dyYXBoLm5vZGVzLCBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBsYXlvdXRbbi5pZF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3MgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobGF5b3V0LCBuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuLnggPSBwb3MueDtcbiAgICAgICAgICAgICAgICAgICAgbi55ID0gcG9zLnk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguc3RhdGUuaW5pdEZvcmNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgudXBkYXRlR3JhcGguY2FsbCh0aGlzR3JhcGgsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzUG9saWN5LnVwZGF0ZUdyYXBoQ2FsbGJhY2suY2FsbCh0aGlzUG9saWN5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zY2FsZSA9IHRoaXNHcmFwaC5kcmFnU3ZnLnNjYWxlKCk7XG4gICAgICAgICAgICAgICAgc3RhdGUudHJhbnNsYXRlID0gdGhpc0dyYXBoLmRyYWdTdmcudHJhbnNsYXRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogV2lsbCBiZSBjYWxsZWQgZHVyaW5nIEQzIGZvcmNlIHNpbXVsYXRpb25zXG4gICAgICAgICAgICAgKiBieSB0aGUgZ3JhcGgsIHNvIFwidGhpc1wiIHdpbGwgcG9pbnQgdG8gdGhlIGdyYXBoIG9iamVjdFxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtudW1iZXJ9ICB3aWR0aCAgIEQzIExheW91dCBXaWR0aFxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge251bWJlcn0gIGhlaWdodCAgRDMgTGF5b3V0IEhlaWdodFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBkM0ZvcmNlVGljayhlLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gdGhpc0dyYXBoLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBjb25zdHMgPSB0aGlzR3JhcGguY29uc3RzLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZVBvbGljeSA9IHN0YXRlLlNwbGl0Sm9pblZpZXdQb2xpY3k7XG5cbiAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gY29uc3RzLmRpc3BsYXlPZmZzZXQ7XG4gICAgICAgICAgICAgICAgdmFyIHNjYWxlID0gc3RhdGUuU3BsaXRKb2luVmlld1BvbGljeS5zY2FsZTtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZXMgPSB0aGlzR3JhcGgubm9kZXM7XG5cbiAgICAgICAgICAgICAgICAvLyBNb3ZlIG5vZGVzIHRvd2FyZCBjbHVzdGVyIGZvY3VzLlxuICAgICAgICAgICAgICAgIHZhciBmb2NpID0gc3RhdGVQb2xpY3kuZm9jaTtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBncmF2aXR5KGFscGhhKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZm9jaS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLlNwbGl0Sm9pblZpZXdQb2xpY3kudHlwZSA9PT0gXCJmb2N1c1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC55ICs9IChmb2NpWzBdIC0gZC55KSAqIGFscGhhO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLnkgKz0gKGZvY2lbMV0gLSBkLnkpICogYWxwaGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkLnggKz0gKHdpZHRoLzIgLSBkLngpICogYWxwaGE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGQueSArPSAoaGVpZ2h0LzIgLSBkLnkpICogYWxwaGE7XG4gICAgICAgICAgICAgICAgICAgICAgICBkLnggKz0gKHdpZHRoLzIgLSBkLngpICogYWxwaGE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIG5vIG5vZGVzIG92ZXJsYXBcbiAgICAgICAgICAgICAgICB2YXIgcSA9IGQzLmdlb20ucXVhZHRyZWUodGhpc0dyYXBoLm5vZGVzKSxcbiAgICAgICAgICAgICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgICAgICAgICAgICBuID0gbm9kZXMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgICAgICAgICAgICAgICBxLnZpc2l0KHRoaXMuZDNGb3JjZUNvbGxpZGUobm9kZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBub2RlcyBhcmUgd2l0aGluIGJvdW5kc1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5jaXJjbGVzLmVhY2godGhpcy5kM0ZvcmNlQ29sbGlkZSguNSkpXG4gICAgICAgICAgICAgICAgICAgIC5lYWNoKGdyYXZpdHkoLjIgKiBlLmFscGhhKSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJjeFwiLCBmdW5jdGlvbihkKSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQueCA9IE1hdGgubWF4KChkLnJhZGl1cyArIG9mZnNldCkvc2NhbGUsIE1hdGgubWluKHdpZHRoICsgKCgtb2Zmc2V0LSBkLnJhZGl1cykgLyBzY2FsZSksIGQueCkpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcImN5XCIsIGZ1bmN0aW9uKGQpIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5TcGxpdEpvaW5WaWV3UG9saWN5ID09IG51bGwgfHwgZC5TcGxpdEpvaW5WaWV3UG9saWN5ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLnkgPSBNYXRoLm1heCgoZC5yYWRpdXMgKyBvZmZzZXQpL3NjYWxlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWluKGhlaWdodCArICgoLW9mZnNldCAtIGQucmFkaXVzKS9zY2FsZSksIGQueSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkLnk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGQuU3BsaXRKb2luVmlld1BvbGljeS50eXBlID09PSBcImZvY3VzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLnkgPSBNYXRoLm1heChkLnJhZGl1cyArIG9mZnNldCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbigoaGVpZ2h0ICsgKCgtb2Zmc2V0IC0gZC5yYWRpdXMpL3NjYWxlKSkqY29uc3RzLlNwbGl0Sm9pblZpZXdQb2xpY3kuYm91bmRhcnksIGQueSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkLnk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGQuU3BsaXRKb2luVmlld1BvbGljeS50eXBlID09PSBcImNvbm5lY3RlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC55ID0gTWF0aC5tYXgoKGhlaWdodCArICgob2Zmc2V0IC0gZC5yYWRpdXMpL3NjYWxlKSkgKmNvbnN0cy5TcGxpdEpvaW5WaWV3UG9saWN5LmJvdW5kYXJ5LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWluKGhlaWdodCArICgoLW9mZnNldCAtIGQucmFkaXVzKS9zY2FsZSksIGQueSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkLnk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLnBhdGhzXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd4MScsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuc291cmNlLng7IH0pXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd5MScsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuc291cmNlLnk7IH0pXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd4MicsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudGFyZ2V0Lng7IH0pXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd5MicsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudGFyZ2V0Lnk7IH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsY3VsYXRlcyB0aGUgYm91bmRhcmllcyBvZiB0aGUgc2ltdWxhdGlvblxuICAgICAgICAgICAgICogXG4gICAgICAgICAgICAgKiBXaWxsIGJlIGNhbGxlZCBkdXJpbmcgRDMgZm9yY2Ugc2ltdWxhdGlvbnNcbiAgICAgICAgICAgICAqIGJ5IHRoZSBncmFwaCwgc28gXCJ0aGlzXCIgd2lsbCBwb2ludCB0byB0aGUgZ3JhcGggb2JqZWN0XG4gICAgICAgICAgICAgKiBcbiAgICAgICAgICAgICAqIEByZXR1cm4gICAgIHtPYmplY3R9ICAgICAgICAgIFJldHVybnMgYW4gb2JqZWN0XG4gICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0IGhhcyB0aGUgd2lkdGhcbiAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBoZWlnaHQgYXMgXG4gICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBkM0ZvcmNlQm91bmRzKCkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgY29uc3RzID0gdGhpc0dyYXBoLmNvbnN0cyxcbiAgICAgICAgICAgICAgICAgICAgY29uc3RzUG9saWN5ID0gY29uc3RzLlNwbGl0Sm9pblZpZXdQb2xpY3ksXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlUG9saWN5ID0gc3RhdGUuU3BsaXRKb2luVmlld1BvbGljeTtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZXMgPSB0aGlzR3JhcGgubm9kZXM7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY2FsY01heE5vZGVzKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyZWEgPSB3aWR0aCAqIGhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJhZGl1cyA9IHRoaXNHcmFwaC5jb25zdHMuc3RhcnRSYWRpdXM7XG4gICAgICAgICAgICAgICAgICAgIC8vdHJlYXRpbmcgdGhlbSBhcyBhIHNxdWFyZSBmb3IgYXBwcm94XG4gICAgICAgICAgICAgICAgICAgIHZhciBsZW5ndGggPSAocmFkaXVzICozLjUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYW1vdW50ID0gYXJlYSAvKGxlbmd0aCAqbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFtb3VudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9UaGUgb2Zmc2V0IGlzIHRoZSBidWZmZXIgZnJvbSB0aGUgZWRnZXNcbiAgICAgICAgICAgICAgICAvL09yaWdpbmFsIFdpZHRoIGFuZCBIZWlnaHQgYXJlIGdpdmVuIHRvIHRoZSBmb3JjZSBsYXlvdXRcbiAgICAgICAgICAgICAgICAvL3NvIHRoYXQgaXQgaXMgY2VudGVyZWQsIGJ1dCBub2RlcyB3aWxsIGJlIGZvcmNlZCB0byBiZVxuICAgICAgICAgICAgICAgIC8vd2l0aGluIHRoZSBvZmZzZXQgYm91bmRzXG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IGNvbnN0cy5kaXNwbGF5T2Zmc2V0O1xuICAgICAgICAgICAgICAgIHZhciBzdmdXaWR0aCA9ICQoJyN2aXN1YWxpemF0aW9uLWdyYXBoJykud2lkdGgoKSAvIHRoaXNHcmFwaC5kcmFnU3ZnLnNjYWxlKCk7XG4gICAgICAgICAgICAgICAgdmFyIHN2Z0hlaWdodCA9ICQoJyN2aXN1YWxpemF0aW9uLWdyYXBoJykuaGVpZ2h0KCkgLyB0aGlzR3JhcGguZHJhZ1N2Zy5zY2FsZSgpO1xuXG5cbiAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSBzdmdXaWR0aDtcbiAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gc3ZnSGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgdmFyIGFtb3VudCA9IGNhbGNNYXhOb2Rlcyh3aWR0aCAtICgyKm9mZnNldCksIGhlaWdodCAtICgyKm9mZnNldCkpO1xuICAgICAgICAgICAgICAgIHZhciBzY2FsZSA9IDE7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGVzLmxlbmd0aCA+IGFtb3VudCkge1xuICAgICAgICAgICAgICAgICAgICBzY2FsZSA9IGFtb3VudCAvIG5vZGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLnpvb21lZCh0aGlzR3JhcGguZHJhZ1N2Zy50cmFuc2xhdGUoKSwgc2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aCAvPSBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IC89IHNjYWxlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vY2FsY3VsYXRpbmcgZm9jaSBmb3Igc2ltdWxhdGlvblxuICAgICAgICAgICAgICAgIHZhciBmb2N1c0dyb3VwcyA9IHN0YXRlUG9saWN5LmZvY3VzR3JvdXBzO1xuICAgICAgICAgICAgICAgIHZhciBmb2NpID0gc3RhdGVQb2xpY3kuZm9jaTtcbiAgICAgICAgICAgICAgICBpZiAoZm9jdXNHcm91cHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvY2kgPSBbaGVpZ2h0LzJdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vc2V0dGluZyBmb2NpIGhlaWdodCBwb3NpdGlvbiBiYXNlZCBvbiBwZXJjZW50YWdlXG4gICAgICAgICAgICAgICAgICAgIHZhciBmb2N1c05vZGVzID0gdGhpc0dyYXBoLmNoaWxkcmVuX3N0cnVjdFtmb2N1c0dyb3Vwc1swXV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0c1BvbGljeS5ib3VuZGFyeSA9IGZvY3VzTm9kZXMubGVuZ3RoIC8gbm9kZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG9wID0gaGVpZ2h0ICogY29uc3RzUG9saWN5LmJvdW5kYXJ5O1xuICAgICAgICAgICAgICAgICAgICB2YXIgYm90ID0gaGVpZ2h0IC0gdG9wO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9wIDwgMip0aGlzR3JhcGguY29uc3RzLm1heFJhZGl1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3RzUG9saWN5LmJvdW5kYXJ5ID0gKDIuNSAqIHRoaXNHcmFwaC5jb25zdHMubWF4UmFkaXVzKSAvIGhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcCA9IGhlaWdodCAqIGNvbnN0c1BvbGljeS5ib3VuZGFyeTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdCA9IGhlaWdodCAtIHRvcDtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChib3QgPCAyKiB0aGlzR3JhcGguY29uc3RzLm1heFJhZGl1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3RzUG9saWN5LmJvdW5kYXJ5ID0gMSAtICgoMi41ICogdGhpc0dyYXBoLmNvbnN0cy5tYXhSYWRpdXMpIC8gaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcCA9IGhlaWdodCAqIGNvbnN0c1BvbGljeS5ib3VuZGFyeTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdCA9IGhlaWdodCAtIHRvcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb2NpID0gW3RvcC8yLCB0b3AgKyBib3QgLyAyXTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4ge3dpZHRoOndpZHRoLCBoZWlnaHQ6aGVpZ2h0fTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUcmlnZ2VyaW5nIHNwbGl0IG9uIGRvdWJsZSBjbGlja1xuICAgICAgICAgICAgICogXG4gICAgICAgICAgICAgKiBGb2N1cyBncm91cCBzdG9yZXMgdGhlIG5vZGUgdGhhdCBpcyBhYm91dCB0byBiZSBzcGxpdC5cbiAgICAgICAgICAgICAqIFxuICAgICAgICAgICAgICogV2hlbiBmb2N1cyBncm91cCBoYXMgbGVuZ3RoIDAsIHRoZSBmaXJzdCBzcGxpdCBcbiAgICAgICAgICAgICAqIHdpbGwganVzdCBiZSBwdXNoZWQgb24uXG4gICAgICAgICAgICAgKiBUaGUgbm9kZSB3aWxsIGJlIHNwbGl0IGFuZCBwdXNoZWQgdG8gdGhlIHRvcCBoYWxmIFxuICAgICAgICAgICAgICogb2YgdGhlIHNjcmVlbiwgYW5kIHRoZSBib3R0b20gaGFsZiB3aWxsIGNvbnRhaW4gYW55XG4gICAgICAgICAgICAgKiBub2RlcyBpdCBoYXMgY29ubmVjdGlvbnMgdG8uXG4gICAgICAgICAgICAgKiBcbiAgICAgICAgICAgICAqIFdoZW4gYSBmb2N1cyBncm91cCBsZW5ndGggaXMgPj0gMSwgaWYgdGhlIG5vZGUgdG8gYmVcbiAgICAgICAgICAgICAqIHNwbGl0IGlzIGEgZm9jdXMgbm9kZSwgaXQgd2lsbCByZXBsYWNlIGZvY3VzR3JvdXBbMF0gYW5kXG4gICAgICAgICAgICAgKiB0aGUgdG9wIGhhbGYgd2lsbCBiZSBpdHMgY2hpbGRyZW4sIGFuZCBib3R0b20gaGFsZiB3aWxsXG4gICAgICAgICAgICAgKiBiZSB0aGUgbm9kZXMgaXQgaGFzIGNvbm5lY3Rpb25zIHRvLlxuICAgICAgICAgICAgICogXG4gICAgICAgICAgICAgKiBJZiB0aGUgc3BsaXQgaXMgaW4gdGhlIGJvdHRvbSBoYWxmLCB0aGVuIHRoZSBib3R0b20gaGFsZlxuICAgICAgICAgICAgICogd2lsbCBkaXNwbGF5IGl0J3MgY2hpbGRyZW4gYW5kIHdpbGwgb25seSBzaG93IGNvbm5lY3Rpb25zIGJldHdlZW5cbiAgICAgICAgICAgICAqIHRoZSB0d28gZ3JvdXBzLCBhbmQgd2lsbCByZXBsYWNlIGZvY3VzR3JvdXBbMV0uXG4gICAgICAgICAgICAgKiBcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtEM09ian0gIGQzbm9kZSAgVGhlIGQzIG5vZGVcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtPYmplY3R9ICBkICAgICAgVGhlIG1hdGNoaW5nIGRhdGEgb2JqZWN0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGRibGNsaWNrKGQzbm9kZSwgZCkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5TcGxpdEpvaW5WaWV3UG9saWN5LFxuICAgICAgICAgICAgICAgICAgICBjb25zdHMgPSB0aGlzR3JhcGguY29uc3RzLlNwbGl0Sm9pblZpZXdQb2xpY3k7XG5cbiAgICAgICAgICAgICAgICAvL2NoZWNrIGlmIGNhbiBzcGxpdFxuICAgICAgICAgICAgICAgIHZhciBuYW1lID0gZC5pZDtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRyZW5fc3RydWN0ID0gdGhpc0dyYXBoLmNoaWxkcmVuX3N0cnVjdDtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRyZW5fc3RydWN0W25hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vc2F2ZSBjdXJyZW50IGxheW91dFxuICAgICAgICAgICAgICAgIHZhciBsYXlvdXQgPSB7fTtcbiAgICAgICAgICAgICAgICBfLmZvckVhY2godGhpc0dyYXBoLm5vZGVzLCBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgICAgICAgIGxheW91dFtuLmlkXSA9IHt4Om4ueCwgeTpuLnl9O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLmZvY3VzR3JvdXBzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvL2NyZWF0ZSBuZXcgZGljdFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5sYXlvdXREZWZhdWx0ID0gbGF5b3V0XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLmZvY3VzR3JvdXBzLmxlbmd0aCA9PT0gMCkgeyAvL3RvcGxldmVsIHNwbGl0XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmZvY3VzR3JvdXBzLnB1c2goZC5pZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfLmluY2x1ZGVzKGNoaWxkcmVuX3N0cnVjdFtzdGF0ZS5mb2N1c0dyb3Vwc1swXV0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLmlkKSkgeyAvL3NwbGl0dGluZyBhIGZvY3VzIG5vZGVcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZm9jdXNHcm91cHNbMF0gPSBkLmlkO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUuZm9jdXNHcm91cHMubGVuZ3RoID09PSAxKSB7Ly9zcGxpdHRpbmcgYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25uZWN0ZWQgbm9kZVxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5mb2N1c0dyb3Vwcy5wdXNoKGQuaWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5pbmNsdWRlcyhjaGlsZHJlbl9zdHJ1Y3Rbc3RhdGUuZm9jdXNHcm91cHNbMV1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLmlkKSkgey8vc3BsaXR0aW5nIGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2Nvbm5lY3RlZCBub2RlXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmZvY3VzR3JvdXBzWzFdID0gZC5pZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5mb2N1c0dyb3Vwcy5sZW5ndGggPT09IDIgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5mb2N1c0dyb3Vwc1sxXSA9PT0gZC5pZCkge1xuICAgICAgICAgICAgICAgICAgICAvL1NwbGl0dGluZyBhIGNvbm5lY3RlZCBub2RlLCBrZWVwIGFsbCBmb2N1cyBub2Rlc1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZXNUb0tlZXAgPSBbZF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBub2RlSWRzVG9SZXNob3cgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGdyb3VwT25lTm9kZXMgPSBjaGlsZHJlbl9zdHJ1Y3Rbc3RhdGUuZm9jdXNHcm91cHNbMF1dO1xuICAgICAgICAgICAgICAgICAgICBfLmZvckVhY2godGhpc0dyYXBoLm5vZGVzLCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5pbmNsdWRlcyhncm91cE9uZU5vZGVzLCBub2RlLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJZHNUb1Jlc2hvdy5wdXNoKG5vZGUuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzVG9LZWVwLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL01ha2Ugc3BsaXQgbm9kZXMgdGhlIGZvY3VzIGFuZCBrZWVwIG5vZGVzIHRoYXQgYXJlIGNvbm5lY3RlZFxuICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZXNUb0tlZXAgPSBbZF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBub2RlSWRzVG9SZXNob3cgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgXy5mb3JFYWNoKHRoaXNHcmFwaC5saW5rcywgZnVuY3Rpb24obGluaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmsuc291cmNlID09PSBkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJZHNUb1Jlc2hvdy5pbmRleE9mKGxpbmsudGFyZ2V0LmlkKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsudGFyZ2V0LlNwbGl0Sm9pblZpZXdQb2xpY3kgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLnRhcmdldC5TcGxpdEpvaW5WaWV3UG9saWN5LnR5cGUgPSBcImNvbm5lY3RlZFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJZHNUb1Jlc2hvdy5wdXNoKGxpbmsudGFyZ2V0LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2Rlc1RvS2VlcC5wdXNoKGxpbmsudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGluay50YXJnZXQgPT09IGQgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJZHNUb1Jlc2hvdy5pbmRleE9mKGxpbmsuc291cmNlLmlkKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuc291cmNlLlNwbGl0Sm9pblZpZXdQb2xpY3kgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLnNvdXJjZS5TcGxpdEpvaW5WaWV3UG9saWN5LnR5cGUgPSBcImNvbm5lY3RlZFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJZHNUb1Jlc2hvdy5wdXNoKGxpbmsuc291cmNlLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2Rlc1RvS2VlcC5wdXNoKGxpbmsuc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9SZW1vdmluZyBsaW5rcyBmcm9tIHRoZSBub2RlIHRvIGJlIHNwbGl0XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmNpcmNsZXMuZWFjaChmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmlkICE9PSBkLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGguc3BsaWNlTGlua3NGb3JOb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLnVwZGF0ZUdyYXBoKCk7XG5cbiAgICAgICAgICAgICAgICAvL2Rpc2FibGluZyB1cGRhdGUgZ3JhcGggdG8gcHJldmVudCBuZXcgZGF0YSBmcm9tXG4gICAgICAgICAgICAgICAgLy9yZWRyYXdpbmcgbGlua3Mgd2hpbGUgdGhlcmUgYXJlIGFuaW1hdGlvbnMgZ29pbmcgb25cbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguc3RhdGUuZGlzYWJsZVVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmNpcmNsZXMuZWFjaChmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmlkICE9PSBkLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpLmRlbGF5KDIwMCkuZHVyYXRpb24oNDAwKS5zdHlsZShcIm9wYWNpdHlcIiwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2Rpc2FibGluZyBxdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnF0aXAoJ2Rpc2FibGUnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAvL3NjYWxpbmcgdGhlIGdyYXBoIHRvIGl0cyBvcmlnaW5hbCB6b29tIGZvciB0aGUgY3VycmVudCB2aWV3XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJTY2FsZSA9IHRoaXNHcmFwaC5kcmFnU3ZnLnNjYWxlKCk7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJUcmFuc2xhdGUgPSB0aGlzR3JhcGguZHJhZ1N2Zy50cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAoY3VyclNjYWxlICE9PSBzdGF0ZS5zY2FsZSB8fCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJUcmFuc2xhdGUgIT09IHN0YXRlLnRyYW5zbGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGguem9vbWVkKHN0YXRlLnRyYW5zbGF0ZSwgc3RhdGUuc2NhbGUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vY2VudGVyaW5nIHRoZSBub2RlIHRoYXQgaXMgc3BsaXR0aW5nXG4gICAgICAgICAgICAgICAgdmFyIHhMb2MgPSAkKCcjdmlzdWFsaXphdGlvbi1ncmFwaCcpLndpZHRoKCkgLyAyO1xuICAgICAgICAgICAgICAgIHZhciB5TG9jID0gJCgnI3Zpc3VhbGl6YXRpb24tZ3JhcGgnKS5oZWlnaHQoKSAvIDI7XG5cbiAgICAgICAgICAgICAgICBkLnhTdGFydCA9IGQueDtcbiAgICAgICAgICAgICAgICBkLnlTdGFydCA9IGQueTtcbiAgICAgICAgICAgICAgICBkLnggPSB4TG9jO1xuICAgICAgICAgICAgICAgIGQueSA9IHlMb2M7XG4gICAgICAgICAgICAgICAgZDNub2RlLnRyYW5zaXRpb24oXCJub2RlUG9zaXRpb25UcmFuc2l0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZHVyYXRpb24oNzUwKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHJUd2VlbihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHhTdGFydCA9IGQueFN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB5U3RhcnQgPSBkLnlTdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLnhTdGFydCA9IGQueDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLnlTdGFydCA9IGQueTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZDMuaW50ZXJwb2xhdGVTdHJpbmcoXCJ0cmFuc2xhdGUoXCIgKyB4U3RhcnQgKyBcIixcIiArIHlTdGFydCArIFwiKVwiLCBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgc3BsaXROb2RlRnVuYyA9IHN1cGVyLnNwbGl0Tm9kZTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5ub2RlSWRzVG9SZXNob3cgPSBub2RlSWRzVG9SZXNob3c7XG4gICAgICAgICAgICAgICAgLy93YWl0aW5nIGZvciBub2RlIHRyYW5zaXRpb25cbiAgICAgICAgICAgICAgICB2YXIgdGhpc1BvbGljeSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVzID0gbm9kZXNUb0tlZXA7XG4gICAgICAgICAgICAgICAgICAgIHNwbGl0Tm9kZUZ1bmMuY2FsbCh0aGlzUG9saWN5LCBkKTtcbiAgICAgICAgICAgICAgICB9LCA3NTApO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVG8gYmUgY2FsbGVkIGFmdGVyIHRoZSBncmFwaCBpcyBzcGxpdC5cbiAgICAgICAgICAgICAqIEJyaW5ncyBhbGwgbm9kZXMgYmFjayBpbnRvIHZpZXcgYW5kIHNldHMgdGhlaXIgYXR0cmlidXRlc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB1cGRhdGVHcmFwaENhbGxiYWNrKCkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5TcGxpdEpvaW5WaWV3UG9saWN5LFxuICAgICAgICAgICAgICAgICAgICBjb25zdHMgPSB0aGlzR3JhcGguY29uc3RzLlNwbGl0Sm9pblZpZXdQb2xpY3k7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLmNpcmNsZXMuZWFjaChmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpLmR1cmF0aW9uKDQwMCkuc3R5bGUoXCJvcGFjaXR5XCIsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmNsYXNzZWQoXCJmb2N1c1wiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3QodGhpcykuY2xhc3NlZChcImNvbm5lY3RlZFwiLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLlNwbGl0Sm9pblZpZXdQb2xpY3kgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLlNwbGl0Sm9pblZpZXdQb2xpY3kudHlwZSA9PT0gXCJmb2N1c1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5jbGFzc2VkKFwiZm9jdXNcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlLlNwbGl0Sm9pblZpZXdQb2xpY3kudHlwZSA9PT0gXCJjb25uZWN0ZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3QodGhpcykuY2xhc3NlZChcImNvbm5lY3RlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLm5vZGVJZHNUb1Jlc2hvdyA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLnVwZGF0ZUdyYXBoKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmFuZG9tbHkgc2V0cyB0aGUgcG9zaXRpb25zIG9mIGFueSB1bnNldCBub2RlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNldFBvc2l0aW9ucygpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaCxcbiAgICAgICAgICAgICAgICAgICAgdGhpc1BvbGljeSA9IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIGdyYXBoQ29uc3RzID0gdGhpc0dyYXBoLmNvbnN0cyxcbiAgICAgICAgICAgICAgICAgICAgZ3JhcGhTdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZTtcblxuICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSBncmFwaENvbnN0cy5kaXNwbGF5T2Zmc2V0O1xuICAgICAgICAgICAgICAgIHZhciBub2RlcyA9IHRoaXNHcmFwaC5ub2RlcztcbiAgICAgICAgICAgICAgICB2YXIgcmV0ID0gdGhpc1BvbGljeS5kM0ZvcmNlQm91bmRzLmNhbGwodGhpc0dyYXBoKTtcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgXy5mb3JFYWNoKG5vZGVzLCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnggPT0gbnVsbCB8fCBub2RlLnkgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBnZXRSYW5kb21JbnQobm9kZS5yYWRpdXMgKyBvZmZzZXQsIHJldC53aWR0aCAtIG5vZGUucmFkaXVzIC0gb2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB5ID0gZ2V0UmFuZG9tSW50KG5vZGUucmFkaXVzICsgb2Zmc2V0LCByZXQuaGVpZ2h0IC0gbm9kZS5yYWRpdXMgLSBvZmZzZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS54ID0geDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUueSA9IHk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsbGVkIG9uIHRoZSBzdGFydCBvZiB0aGUgZDMgZm9yY2Ugc2ltdWxhdGlvblxuICAgICAgICAgICAgICogV2lsbCBvdmVycmlkZSB0aGUgbWV0aG9kIG9mIHRoZSBncmFwaFxuICAgICAgICAgICAgICogXCJ0aGlzXCIgcG9pbnRzIHRvIHRoZSBncmFwaFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBkM0ZvcmNlU3RhcnQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmNpcmNsZXNcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2N4JywgZnVuY3Rpb24oZCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLnhTdGFydCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC54U3RhcnQgPSAoZC54U3RhcnQgKiB0aGlzR3JhcGguZHJhZ1N2Zy5zY2FsZSgpKSArIHRoaXNHcmFwaC5kcmFnU3ZnLnRyYW5zbGF0ZSgpWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQueDtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2N5JywgZnVuY3Rpb24oZCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLnlTdGFydCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC55U3RhcnQgPSAoZC55U3RhcnQgKnRoaXNHcmFwaC5kcmFnU3ZnLnNjYWxlKCkpICsgdGhpc0dyYXBoLmRyYWdTdmcudHJhbnNsYXRlKClbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZC55O1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5wYXRoc1xuICAgICAgICAgICAgICAgICAgICAuYXR0cigneDEnLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnNvdXJjZS54OyB9KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigneTEnLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnNvdXJjZS55OyB9KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigneDInLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnRhcmdldC54OyB9KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigneTInLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnRhcmdldC55OyB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWxsZWQgYWZ0ZXIgYSBzaW5nbGUgbm9kZSBpcyBzcGxpdFxuICAgICAgICAgICAgICogXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7QXJyYXl9ICBuZXdOb2RlcyAgVGhlIG5ldyBub2Rlc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzcGxpdE5vZGVFdmVudChuZXdOb2Rlcykge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzUG9saWN5ID0gdGhpcztcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB0aGlzR3JhcGguc3RhdGUuU3BsaXRKb2luVmlld1BvbGljeSxcbiAgICAgICAgICAgICAgICAgICAgY29uc3RzID0gdGhpc0dyYXBoLmNvbnN0cy5TcGxpdEpvaW5WaWV3UG9saWN5O1xuXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkcmVuX3N0cnVjdCA9IHRoaXNHcmFwaC5jaGlsZHJlbl9zdHJ1Y3Q7XG4gICAgICAgICAgICAgICAgXy5mb3JFYWNoKG5ld05vZGVzLCBmdW5jdGlvbihkKXtcbiAgICAgICAgICAgICAgICAgICAgZC5TcGxpdEpvaW5WaWV3UG9saWN5ID0ge307XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLmluY2x1ZGVzKGNoaWxkcmVuX3N0cnVjdFtzdGF0ZS5mb2N1c0dyb3Vwc1swXV0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQuaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkLlNwbGl0Sm9pblZpZXdQb2xpY3kudHlwZSA9IFwiZm9jdXNcIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuU3BsaXRKb2luVmlld1BvbGljeS50eXBlID0gXCJjb25uZWN0ZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLnN0YXRlLmluaXRGb3JjZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXNQb2xpY3kuc2V0UG9zaXRpb25zKCk7XG4gICAgICAgICAgICAgICAgdmFyIHRpdGxlID0gbmV3Tm9kZXNbMF0ucGFyZW50O1xuICAgICAgICAgICAgICAgIHN0YXRlLmZvY3VzR3JvdXAgPSB0aXRsZTtcblxuICAgICAgICAgICAgICAgIC8vaWYgdGhlIGxhc3QgZXZlbnQgaGFzIHRoZSBzYW1lIGlkLCBpdCBtdXN0IGJlIHRoZVxuICAgICAgICAgICAgICAgIC8vb3BwcG9zaXRlIG9mIHRoaXMgZXZlbnQsIHNvIHdlIHJlbW92ZSB0aGF0IGV2ZW50IGZyb21cbiAgICAgICAgICAgICAgICAvL3RoZSBldmVudCBzdGFjay5cbiAgICAgICAgICAgICAgICAvL090aGVyd2lzZSwgd2UgYWRkIHRoZSBldmVudCBvdCB0aGUgc3RhY2tcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuZXZlbnRIaXN0b3J5Lmxlbmd0aCAhPT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuZXZlbnRIaXN0b3J5W3N0YXRlLmV2ZW50SGlzdG9yeS5sZW5ndGggLSAxXS5pZCA9PT0gdGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZXZlbnRIaXN0b3J5LnBvcCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmV2ZW50SGlzdG9yeS5wdXNoKHtpZDp0aXRsZSwgZXZlbnQ6J3NwbGl0J30pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5iYWNrQnV0dG9uRWxlbSAhPSBudWxsICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmV2ZW50SGlzdG9yeS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuYmFja0J1dHRvbkVsZW0uZmFkZVRvKCdzbG93JywgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS50aXRsZUVsZW0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5mb2N1c0dyb3Vwcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IHN0YXRlLmZvY3VzR3JvdXBzWzBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5mb2N1c0dyb3Vwcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gJyAmICcgKyBzdGF0ZS5mb2N1c0dyb3Vwc1sxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS50aXRsZUVsZW0udGV4dCh0ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL3JlLWVuYWJsZSBncmFwaCB1cGRhdGVcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguc3RhdGUuZGlzYWJsZVVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC51cGRhdGVHcmFwaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1BvbGljeS51cGRhdGVHcmFwaENhbGxiYWNrLmNhbGwodGhpc1BvbGljeSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3RhdGUuem9vbXNbc3RhdGUuZm9jdXNHcm91cHNdID0gW3RoaXNHcmFwaC5kcmFnU3ZnLnRyYW5zbGF0ZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5kcmFnU3ZnLnNjYWxlKCldO1xuICAgICAgICAgICAgICAgIHN0YXRlLnNjYWxlID0gdGhpc0dyYXBoLmRyYWdTdmcuc2NhbGUoKTtcbiAgICAgICAgICAgICAgICBzdGF0ZS50cmFuc2xhdGUgPSB0aGlzR3JhcGguZHJhZ1N2Zy50cmFuc2xhdGUoKTtcblxuICAgICAgICAgICAgICAgIC8vc2F2ZSBjdXJyZW50IGxheW91dFxuICAgICAgICAgICAgICAgIHZhciBsYXlvdXQgPSB7fTtcbiAgICAgICAgICAgICAgICBfLmZvckVhY2godGhpc0dyYXBoLm5vZGVzLCBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgICAgICAgIGxheW91dFtuLmlkXSA9IHt4Om4ueCwgeTpuLnl9O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgc3RhdGUubGF5b3V0W3N0YXRlLmZvY3VzR3JvdXBzXSA9IGxheW91dDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBPdmVycmlkaW5nIGZyb20gc3VwZXIgY2xhc3Mgc28gdGhhdCB3ZSBjYW4gaGF2ZVxuICAgICAgICAgICAgICogdG9wIGxldmVsIG5vZGVzIHJlYXBwZWFyIHdoZW4gdGhleSBhcmUgaGlkZGVuXG4gICAgICAgICAgICAgKiBkdWUgdG8gdGhlcmUgYmVpbmcgdHdvIGZvY3VzIGdyb3Vwcy5cbiAgICAgICAgICAgICAqIFxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge05vZGV9ICAgICAgICAgIG5vZGUgICAgVGhlIG5vZGUgdG8gam9pblxuICAgICAgICAgICAgICogQHJldHVybiAgICAge05vZGV9ICBUaGUgbmV3IG5vZGUgYWZ0ZXIgdGhlIGpvaW5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgX19qb2luTm9kZShub2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGgsXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cyA9IHRoaXNHcmFwaC5jb25zdHMuU3BsaXRKb2luTm9kZVBvbGljeSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVTdXBlciA9IHRoaXNHcmFwaC5zdGF0ZS5TcGxpdEpvaW5Ob2RlUG9saWN5LFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5TcGxpdEpvaW5WaWV3UG9saWN5O1xuXG4gICAgICAgICAgICAgICAgLy9jaGVjayB0aGF0IG5vZGUgc3RpbGwgZXhpc3RzXG4gICAgICAgICAgICAgICAgaWYgKHRoaXNHcmFwaC5ub2Rlcy5pbmRleE9mKG5vZGUpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRyZW5fc3RydWN0ID0gdGhpc0dyYXBoLmNoaWxkcmVuX3N0cnVjdDtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IG5vZGUuaWRcbiAgICAgICAgICAgICAgICAvL2lmIGl0IGhhcyBubyBhbmNlc3Rvciwgbm90aGluZyB0byBqb2luXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuX3N0cnVjdC50b3BMZXZlbC5pbmRleE9mKG5hbWUpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSBub2RlLnBhcmVudDtcbiAgICAgICAgICAgICAgICB2YXIgdG9fYmVfZGVsZXRlZCA9IFtdO1xuICAgICAgICAgICAgICAgIHZhciBub2RlTmFtZVNldCA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpc0dyYXBoLm5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vaWYgbm9kZSB3b24ndCBiZSBjb2xsYXBzZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNHcmFwaC5ub2Rlc1tpXS5hbmNlc3RvcnMuaW5kZXhPZihub2RlLnBhcmVudCkgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVOYW1lU2V0LnB1c2godGhpc0dyYXBoLm5vZGVzW2ldLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvX2JlX2RlbGV0ZWQucHVzaCh0aGlzR3JhcGgubm9kZXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBuZXdfbm9kZV9pZCA9IG5vZGUucGFyZW50O1xuICAgICAgICAgICAgICAgIG5vZGVOYW1lU2V0LnB1c2gobm9kZS5wYXJlbnQpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGFuY2VzdG9yc19zdHJ1Y3QgPSB0aGlzR3JhcGguYW5jZXN0b3JzX3N0cnVjdDtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRyZW5fc3RydWN0ID0gdGhpc0dyYXBoLmNoaWxkcmVuX3N0cnVjdDtcbiAgICAgICAgICAgICAgICAvLyAtIHNldHRpbmcgZm9jdXNHcm91cCAtXG4gICAgICAgICAgICAgICAgLy9laXRoZXIgcmVwbGFjaW5nIG9uZSBvZiB0aGUgZ3JvdXBzLFxuICAgICAgICAgICAgICAgIC8vb3Igam9pbmluZyBiYWNrIGludG8gYSB0b3AgbGV2ZWwsIHNvIHRoZXJlIGlzIG9ubHlcbiAgICAgICAgICAgICAgICAvL29uZSBmb2N1c1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHN0YXRlLmZvY3VzR3JvdXBzLmluZGV4T2YocGFyZW50KTtcbiAgICAgICAgICAgICAgICBpZiAoYW5jZXN0b3JzX3N0cnVjdFtwYXJlbnRdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZm9jdXNHcm91cHNbaW5kZXhdID0gYW5jZXN0b3JzX3N0cnVjdFtwYXJlbnRdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmZvY3VzR3JvdXBzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9uYW1lVG9BZGQgYXJlIHRvcCBsZXZlbCBub2RlcyB0aGF0IGFyZSB0byBiZSBhZGRlZFxuICAgICAgICAgICAgICAgIC8vdG8gdGhlIGdyYXBoLlxuICAgICAgICAgICAgICAgIHZhciBuYW1lVG9BZGQgPSBbXTtcbiAgICAgICAgICAgICAgICAvL3dpbGwgb25seSBuZWVkIHRvIGFkZCBhIHRvcCBsZXZlbCBub2RlIGlmIHRoZXJlIGlzXG4gICAgICAgICAgICAgICAgLy9vbmx5IG9uZSBmb2N1c1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5mb2N1c0dyb3Vwcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9BZGQgb25seSB0aG9zdCB0aGF0IGFyZW4ndCBhbiBhbmNlc3RvciBvZiB0aGUgbm9kZVxuICAgICAgICAgICAgICAgICAgICAvL3RvIGpvaW4sIHRoZSBmb2N1cyBncm91cCBvciBhbiBhbmNlc3RvciBvZiBpdCxcbiAgICAgICAgICAgICAgICAgICAgLy9hbmQgYXJlbid0IGFscmVhZHkgaW4gbm9kZU5hbWVTZXQuXG4gICAgICAgICAgICAgICAgICAgIC8vZ2V0IGZsb3cgYmV0d2VlbiB0b3AgbGV2ZWwgYXMgbG9uZyBhc1xuICAgICAgICAgICAgICAgICAgICAvL3RoZSB0b3AgbGV2ZWwgaXNuJ3QgYW4gYW5jZXN0b3Igb2YgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vZm9jdXMgZ3JvdXAsIGFuZCBpc24ndCBhbHJlYWR5IHBhcnQgb2YgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vbm9kZSBzZXQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhbmNlc3RvcnMgPSBhbmNlc3RvcnNfc3RydWN0W25vZGUuaWRdO1xuICAgICAgICAgICAgICAgICAgICBhbmNlc3RvcnMucHVzaChzdGF0ZS5mb2N1c0dyb3Vwc1swXSk7XG4gICAgICAgICAgICAgICAgICAgIC8vdGhlIG9yIGVtcHR5IGFycmF5IGlzIHRvIHByZXZlbnQgY29uY2F0ZW5hdGluZyBhIG51bGxcbiAgICAgICAgICAgICAgICAgICAgLy9vciB1bmRlZmluZWQgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgYW5jZXN0b3JzID0gYW5jZXN0b3JzLmNvbmNhdChhbmNlc3RvcnNfc3RydWN0W3N0YXRlLmZvY3VzR3JvdXBzWzBdXSB8fCBbXSk7XG4gICAgICAgICAgICAgICAgICAgIF8uZm9yRWFjaChjaGlsZHJlbl9zdHJ1Y3QudG9wTGV2ZWwsIGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbmNlc3RvcnMuaW5kZXhPZihuKSA9PT0gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZU5hbWVTZXQuaW5kZXhPZihuKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVUb0FkZC5wdXNoKG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBub2RlTmFtZVNldCA9IG5vZGVOYW1lU2V0LmNvbmNhdChuYW1lVG9BZGQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUuZm9jdXNHcm91cHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vbm8gZm9jdXMgZ3JvdXBzIG1lYW5zIHdlIGFyZSBhdCB0b3AgbGV2ZWxcbiAgICAgICAgICAgICAgICAgICAgLy9TaG91bGQgYWRkIGFueSB0b3AgbGV2ZWwgbm9kZXMgdGhhdCBhcmVuJ3RcbiAgICAgICAgICAgICAgICAgICAgLy9hbHJlYWR5IHRoZXJlXG4gICAgICAgICAgICAgICAgICAgIF8uZm9yRWFjaChjaGlsZHJlbl9zdHJ1Y3QudG9wTGV2ZWwsIGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlTmFtZVNldC5pbmRleE9mKG4pID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVRvQWRkLnB1c2gobik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIG5vZGVOYW1lU2V0ID0gbm9kZU5hbWVTZXQuY29uY2F0KG5hbWVUb0FkZCk7XG4gICAgICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgICAgIC8vZm9ybWF0dGluZyBkYXRhXG4gICAgICAgICAgICAgICAgdmFyIHJhZGl1cyA9IG5vZGUucmFkaXVzIC8gdGhpc0dyYXBoLmNvbnN0cy5yYWRpdXNEZWNheTsgXG4gICAgICAgICAgICAgICAgdmFyIHhMb2MgPSBub2RlLng7XG4gICAgICAgICAgICAgICAgdmFyIHlMb2MgPSBub2RlLnk7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IG5vZGUuYW5jZXN0b3JzWzFdO1xuICAgICAgICAgICAgICAgIHZhciBhbmNlc3RvcnMgPSBub2RlLmFuY2VzdG9ycy5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3Tm9kZSA9IG5ldyBWaXN1YWxpemVyTm9kZS5Ob2RlKHhMb2MsIHlMb2MsIG5ld19ub2RlX2lkLCBuZXdfbm9kZV9pZCwgcmFkaXVzLCBwYXJlbnQsIGFuY2VzdG9ycyk7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVzLnB1c2gobmV3Tm9kZSk7XG5cbiAgICAgICAgICAgICAgICAvL3JlbW92ZSBhbGwgbm9kZXMgdGhhdCB3aWxsIGJlIGpvaW5lZFxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9fYmVfZGVsZXRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZV90b19kZWxldGUgPSB0b19iZV9kZWxldGVkW2ldXG4gICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5ub2Rlcy5zcGxpY2UodGhpc0dyYXBoLm5vZGVzLmluZGV4T2Yobm9kZV90b19kZWxldGUpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLnNwbGljZUxpbmtzRm9yTm9kZShub2RlX3RvX2RlbGV0ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHJldERhdGEgPSB0aGlzR3JhcGguZGF0YVNvdXJjZS5nZXRGbG93QmV0d2VlblNldChub2RlTmFtZVNldCk7XG4gICAgICAgICAgICAgICAgLy9ob2xkcyB0aGUgbm9kZURhdGEgd2hpY2ggd2lsbCBiZSBwcm9jZXNzZWRcbiAgICAgICAgICAgICAgICB2YXIgbm9kZXNUb1Byb2Nlc3MgPSBbXTtcbiAgICAgICAgICAgICAgICAvL2ZpbmRpbmcgdGhlIG5vZGUgZGF0YSB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSB0b3AgbGV2ZWxcbiAgICAgICAgICAgICAgICAvL25vZGVzIHRvIGFkZCAtIG5hbWVUb0FkZC5cbiAgICAgICAgICAgICAgICB2YXIgbm9kZURhdGEgPSByZXREYXRhLm5vZGVEYXRhO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWVUb0FkZC5pbmRleE9mKG5vZGVEYXRhW2ldLmlkKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzVG9Qcm9jZXNzLnB1c2gobm9kZURhdGFbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9UaGUgdG9wIGxldmVsIG5vZGVzIHRoYXQgYXJlIGFkZGVkXG4gICAgICAgICAgICAgICAgdmFyIG5ld05vZGVzID0gdGhpc0dyYXBoLmRhdGFTb3VyY2UucHJvY2Vzc05vZGVEYXRhKG5vZGVzVG9Qcm9jZXNzKTtcbiAgICAgICAgICAgICAgICBfLmZvckVhY2gobmV3Tm9kZXMsIGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgbi5yYWRpdXMgPSBuLnJhZGl1cyB8fCB0aGlzR3JhcGguY29uc3RzLnN0YXJ0UmFkaXVzO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVzID0gdGhpc0dyYXBoLm5vZGVzLmNvbmNhdChuZXdOb2Rlcyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgubGlua3MgPSB0aGlzR3JhcGguZGF0YVNvdXJjZS5wcm9jZXNzTGlua0RhdGEocmV0RGF0YS5saW5rRGF0YSwgdGhpc0dyYXBoLm5vZGVzKTtcbiAgICAgICAgICAgICAgICAvL09ubHkga2VlcCB0b3AgbGV2ZWwgbm9kZXMgdGhhdCBoYXZlIGNvbm5lY3Rpb25zIHRvXG4gICAgICAgICAgICAgICAgLy90aGUgY3VycmVudCBmb2N1cyBncm91cFxuICAgICAgICAgICAgICAgIC8vd2UgcmVtb3ZlIHRoZSBub2RlIG5hbWUgZnJvbSBuYW1lVG9BZGQgaWYgd2UgYXJlXG4gICAgICAgICAgICAgICAgLy9rZWVwaW5nIGl0XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLmZvY3VzR3JvdXBzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBfLmZvckVhY2godGhpc0dyYXBoLmxpbmtzLCBmdW5jdGlvbihsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NoZWNraW5nIGlmIHRoZXJlIGV4aXN0cyBhIGxpbmsgdG91Y2hpbmcgZWFjaCBvZiBuYW1lVG9BZGRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lVG9BZGQuaW5kZXhPZihsLnNvdXJjZS5pZCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLmZvY3VzR3JvdXBzWzBdID09PSBsLnRhcmdldC5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVRvQWRkLnNwbGljZShuYW1lVG9BZGQuaW5kZXhPZihsLnNvdXJjZS5pZCksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmFtZVRvQWRkLmluZGV4T2YobC50YXJnZXQuaWQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5mb2N1c0dyb3Vwc1swXSA9PT0gbC5zb3VyY2UucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVUb0FkZC5zcGxpY2UobmFtZVRvQWRkLmluZGV4T2YobC50YXJnZXQuaWQpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy9XZSB3YW50IHRvIGtlZXAgdGhlbSBhbGxcbiAgICAgICAgICAgICAgICAgICAgLy9zaW5jZSBhbnkgbGVmdCBpbiBuYW1lVG9BZGQgd2lsbCBiZSByZW1vdmVkLFxuICAgICAgICAgICAgICAgICAgICAvL3dlIHJlc2V0IG5hbWVUb0FkZCBoZXJlLlxuICAgICAgICAgICAgICAgICAgICBuYW1lVG9BZGQgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy93aGF0ZXZlciBpcyByZW1haW5pbmcgaW4gbmFtZVRvQWRkIGlzbid0IGNvbm5lY3RlZFxuICAgICAgICAgICAgICAgIC8vdG8gdGhlIGZvY3VzIGdyb3VwLCBzbyB3ZSBzaG91bGQgcmVtb3ZlIGl0LlxuICAgICAgICAgICAgICAgIHZhciBub2RlVG9SZW1vdmUgPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAobmFtZVRvQWRkLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXNHcmFwaC5ub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWVUb0FkZC5pbmRleE9mKHRoaXNHcmFwaC5ub2Rlc1tpXS5pZCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVRvQWRkLnNwbGljZShuYW1lVG9BZGQuaW5kZXhPZih0aGlzR3JhcGgubm9kZXNbaV0uaWQpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGguc3BsaWNlTGlua3NGb3JOb2RlKHRoaXNHcmFwaC5ub2Rlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVRvUmVtb3ZlLnB1c2godGhpc0dyYXBoLm5vZGVzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZVRvQWRkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXy5mb3JFYWNoKG5vZGVUb1JlbW92ZSwgZnVuY3Rpb24obikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGgubm9kZXMuc3BsaWNlKHRoaXNHcmFwaC5ub2Rlcy5pbmRleE9mKG4sIDEpKTtcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmluaXROb2RlcygpO1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5pbml0TGlua3MoKTtcblxuICAgICAgICAgICAgICAgIHN0YXRlU3VwZXIuc3BsaXROb2Rlcy5zcGxpY2Uoc3RhdGVTdXBlci5zcGxpdE5vZGVzLmluZGV4T2YobmV3Tm9kZS5pZCksIDEpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld05vZGU7IFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGxlZCBhZnRlciBhIHNpbmdsZSBub2RlIGlzIGpvaW5lZFxuICAgICAgICAgICAgICogXG4gICAgICAgICAgICAgKiBJZiB0aGUgZm9jdXMgZ3JvdXAgaGFzIGJlZW4gc2VlbiBiZWZvcmUsIGl0IHdpbGxcbiAgICAgICAgICAgICAqIGxvYWQgdGhhdCBsYXlvdXQuIE90aGVyd2lzZSwgaXQgd2lsbCBydW4gYSBkMyBmb3JjZVxuICAgICAgICAgICAgICogc2ltdWxhdGlvbiB0byBnZW5lcmF0ZSBvbmUuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge05vZGV9ICBuZXdOb2RlICBUaGUgbmV3IG5vZGVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgam9pbk5vZGVFdmVudChuZXdOb2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGgsXG4gICAgICAgICAgICAgICAgICAgIHRoaXNQb2xpY3kgPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5TcGxpdEpvaW5WaWV3UG9saWN5O1xuXG4gICAgICAgICAgICAgICAgLy9pZiB0aGUgbGFzdCBldmVudCBoYXMgdGhlIHNhbWUgaWQsIGl0IG11c3QgYmUgdGhlXG4gICAgICAgICAgICAgICAgLy9vcHBwb3NpdGUgb2YgdGhpcyBldmVudCwgc28gd2UgcmVtb3ZlIHRoYXQgZXZlbnQgZnJvbVxuICAgICAgICAgICAgICAgIC8vdGhlIGV2ZW50IHN0YWNrLlxuICAgICAgICAgICAgICAgIC8vT3RoZXJ3aXNlLCB3ZSBhZGQgdGhlIGV2ZW50IHRvIHRoZSBzdGFja1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5ldmVudEhpc3RvcnkubGVuZ3RoICE9PSAwICYmXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmV2ZW50SGlzdG9yeVtzdGF0ZS5ldmVudEhpc3RvcnkubGVuZ3RoIC0gMV0uaWQgPT09IG5ld05vZGUuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZXZlbnRIaXN0b3J5LnBvcCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmV2ZW50SGlzdG9yeS5wdXNoKHtpZDpuZXdOb2RlLmlkLCBldmVudDonam9pbid9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBjaGlsZHJlbl9zdHJ1Y3QgPSB0aGlzR3JhcGguY2hpbGRyZW5fc3RydWN0O1xuXG4gICAgICAgICAgICAgICAgXy5mb3JFYWNoKHRoaXNHcmFwaC5ub2RlcywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICBkLlNwbGl0Sm9pblZpZXdQb2xpY3kgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8uaW5jbHVkZXMoY2hpbGRyZW5fc3RydWN0W3N0YXRlLmZvY3VzR3JvdXBzWzBdXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuU3BsaXRKb2luVmlld1BvbGljeS50eXBlID0gXCJmb2N1c1wiO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZC5TcGxpdEpvaW5WaWV3UG9saWN5LnR5cGUgPSBcImNvbm5lY3RlZFwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIC8vc2V0dGluZyBiYWNrIGJ1dHRvblxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5iYWNrQnV0dG9uRWxlbSAhPSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuZXZlbnRIaXN0b3J5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5iYWNrQnV0dG9uRWxlbS5mYWRlVG8oJ3Nsb3cnLCAwKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL3NldHRpbmcgdGl0bGVcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUudGl0bGVFbGVtICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRleHQgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUuZm9jdXNHcm91cHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBzdGF0ZS5mb2N1c0dyb3Vwc1swXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUuZm9jdXNHcm91cHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgJiAnICsgc3RhdGUuZm9jdXNHcm91cHNbMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3RhdGUudGl0bGVFbGVtLnRleHQodGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9sb2FkaW5nIGEgcHJldmlvdXMgbGF5b3V0XG4gICAgICAgICAgICAgICAgdmFyIGxheW91dDtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuZm9jdXNHcm91cHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC56b29tZWQoWzAsMF0sIDEpO1xuICAgICAgICAgICAgICAgICAgICBsYXlvdXQgPSBzdGF0ZS5sYXlvdXREZWZhdWx0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB6b29tID0gc3RhdGUuem9vbXNbc3RhdGUuZm9jdXNHcm91cHNdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoem9vbSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGguem9vbWVkKHpvb21bMF0sIHpvb21bMV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxheW91dCA9IHN0YXRlLmxheW91dFtzdGF0ZS5mb2N1c0dyb3Vwc107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGxheW91dCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uZm9yRWFjaCh0aGlzR3JhcGgubm9kZXMsIGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBsYXlvdXRbbi5pZF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsYXlvdXQsIG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbi54ID0gcG9zLng7XG4gICAgICAgICAgICAgICAgICAgICAgICBuLnkgPSBwb3MueTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLnVwZGF0ZUdyYXBoLmNhbGwodGhpc0dyYXBoLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNQb2xpY3kudXBkYXRlR3JhcGhDYWxsYmFjay5jYWxsKHRoaXNQb2xpY3kpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuc2NhbGUgPSB0aGlzR3JhcGguZHJhZ1N2Zy5zY2FsZSgpO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS50cmFuc2xhdGUgPSB0aGlzR3JhcGguZHJhZ1N2Zy50cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL05lZWQgdG8gcnVuIGEgZm9yY2Ugc2ltdWxhdGlvbiBhcyB0aGlzIGxheW91dFxuICAgICAgICAgICAgICAgICAgICAvL2hhc24ndCBiZWVuIGRvbmUgYmVmb3JlXG4gICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5zdGF0ZS5pbml0Rm9yY2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1BvbGljeS5zZXRQb3NpdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLnVwZGF0ZUdyYXBoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1BvbGljeS51cGRhdGVHcmFwaENhbGxiYWNrLmNhbGwodGhpc1BvbGljeSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS56b29tc1tzdGF0ZS5mb2N1c0dyb3Vwc10gPSBbdGhpc0dyYXBoLmRyYWdTdmcudHJhbnNsYXRlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5kcmFnU3ZnLnNjYWxlKCldO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5zY2FsZSA9IHRoaXNHcmFwaC5kcmFnU3ZnLnNjYWxlKCk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnRyYW5zbGF0ZSA9IHRoaXNHcmFwaC5kcmFnU3ZnLnRyYW5zbGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBsYXlvdXQgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgXy5mb3JFYWNoKHRoaXNHcmFwaC5ub2RlcywgZnVuY3Rpb24obikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0W24uaWRdID0ge3g6bi54LCB5Om4ueX07XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmxheW91dFtzdGF0ZS5mb2N1c0dyb3Vwc10gPSBsYXlvdXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFVuZG9lcyB0aGUgbGFzdCBzcGxpdCBvciBqb2luIGV2ZW50LlxuICAgICAgICAgICAgICogTWVhbnQgdG8gYmUgY2FsbGVkIGJ5IHRoZSBiYWNrIGJ1dHRvbi5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdW5kb0xhc3RFdmVudCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaCxcbiAgICAgICAgICAgICAgICAgICAgdGhpc1BvbGljeSA9IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gdGhpc0dyYXBoLnN0YXRlLlNwbGl0Sm9pblZpZXdQb2xpY3k7XG5cbiAgICAgICAgICAgICAgICB2YXIgbGFzdCA9IHN0YXRlLmV2ZW50SGlzdG9yeVtzdGF0ZS5ldmVudEhpc3RvcnkubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgdmFyIGlkID0gbGFzdC5pZDtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZTtcbiAgICAgICAgICAgICAgICBpZiAobGFzdC5ldmVudCA9PT0gJ2pvaW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZHJlbl9zdHJ1Y3QgPSB0aGlzR3JhcGguY2hpbGRyZW5fc3RydWN0OyBcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHRoaXNHcmFwaC5maW5kTm9kZUJ5SWQoaWQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZDNub2RlID0gdGhpc0dyYXBoLmZpbmREM05vZGUoaWQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzUG9saWN5LmRibGNsaWNrKGQzbm9kZSwgbm9kZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGVJZCA9IHRoaXNHcmFwaC5kYXRhU291cmNlLmNoaWxkcmVuX3N0cnVjdFtpZF1bMF07XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSB0aGlzR3JhcGguZmluZE5vZGVCeUlkKG5vZGVJZCk7XG4gICAgICAgICAgICAgICAgICAgIHN1cGVyLmpvaW5Ob2RlLmNhbGwodGhpc1BvbGljeSwgbm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFBvbGljeTogU3BsaXRKb2luVmlld1BvbGljeVxuICAgICAgICB9XG59XSk7XG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
