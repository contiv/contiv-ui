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
		/**
   * Constructs the object.
   *
   * @param      {Array}   nodes              The node data 
   * @param      {Array}   links              The link data
   * @param      {Object}  children_struct    The children structure
   * @param      {Object}  ancestors_struct   The ancestors structure
   * @param      {Array}   labels             The labels
   * @param      {Array}   selectors          The selectors
   */

		function DataSource(nodes, links, children_struct, ancestors_struct, labels, selectors) {
			_classCallCheck(this, DataSource);

			this.nodes = nodes;
			this.links = links;
			this.children_struct = children_struct;
			this.ancestors_struct = ancestors_struct;
			this.labels = labels;
			this.selectors = selectors;
		}

		/**
   * Replaces the node data
   *
   * @param      {Node}  nodes   The nodes
   */


		_createClass(DataSource, [{
			key: 'updateNodes',
			value: function updateNodes(nodes) {
				this.nodes = nodes;
			}

			/**
    * Replaces the link data
    *
    * @param      {Link}  links   The links
    */

		}, {
			key: 'updateLinks',
			value: function updateLinks(links) {
				this.links = links;
			}

			/**
    * Returns the Name attribute of the Node with the 
    * matching id
    *
    * @param      {string}  id      The identifier
    * @return     {string}  name of the matching node
    */

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
    * Determines if it has child.
    *
    * @param      {string}   id      The identifier
    * @return     {boolean}  True if has child, False otherwise.
    */

		}, {
			key: 'hasChild',
			value: function hasChild(id) {
				if (this.children_struct[id] == null) {
					return false;
				}
				return true;
			}

			/**
    * Sets the parent and ancestors attribute using 
    * ancestors_struct for all the nodes
    * Also adds any nodes without ancestors, that aren't 
    * toplevel to the client service.
    */

		}, {
			key: 'setAncestors',
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
    * @return     {Array}  Node objects
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
				/**
     * Returns the node that matches the id
     *
     * @param      {string} id      The identifier
     * @return     {Node}   The node with the matching id
     */
				function findNodeById(id, nodes) {
					for (var i = 0; i < nodes.length; i++) {
						if (id == nodes[i].id) {
							return nodes[i];
						}
					}
				};

				var links = [];
				//a mapping from source.id-target.id to the link added
				var added_links = {};
				//transforming link data
				for (var i = 0; i < linkData.length; i++) {
					if (linkData[i].source != linkData[i].target) {
						// console.log(linkData[i])
						var source = findNodeById(linkData[i].source, nodes);
						var target = findNodeById(linkData[i].target, nodes);
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
 * The base class the graph object. Any nodes or links that are contained in
 * its nodes or links property will be drawn on updateGraph.
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
         * @param      {Array}  nodes      List of nodes for the graph
         * @param      {Array}  links      List of links for the graph
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

        /**
         * Constructs the object.
         *
         * @param   {HTML SVG}  svg             The svg that will 
               *                                      hold the graph
               * @param   {Array}  nodes   		    List of nodes
               * @param   {Array}  links   		    List of links
         * @param   {DataSource}  dataSource    The data source
         * @param   {Object}  children_struct   The children structure
         * @param   {Object}  ancestors_struct  The ancestors structure
         */

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
            //converting it to data for the graph
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

        /**
         * Called with no args when the graph has a zoom action
         * Can also be called with args to force a zoom or pan 
         * event for the graph.
         *
         * @param      {Array}   translate  The amount to translate
         * @param      {number}  scale      The amount to scale
         */


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


            /**
             * Called when the window resizes
             *
             * @param      {HTML SVG}  svg    The svg to resize
             */
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


            /**
             * Called when the server sends updated data for the links
             */
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
 */
angular.module('LinkModule').factory('Link', [function () {
	var Link = function () {
		/**
   * Constructs the object.
   *
   * @param      {Node}  sourceNode  The source node
   * @param      {Node}  targetNode  The target node
   */

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

		/**
   * Called when a link is added to the graph
   *
   * @param      {Graph}  graph   The graph it is added to
   */


		_createClass(Link, [{
			key: 'initialize',
			value: function initialize(graph) {
				if (this.initialized == false) {
					this.initialized = true;
					this.graph = graph;
				}
			}

			/**
    * Called during the update graph for existing links
    *
    * @param      {D3Object}  d3path  The d3 path
    */

		}, {
			key: 'updateAttr',
			value: function updateAttr(d3path) {
				d3path.style('marker-end', 'url(#end-arrow)').attr("d", arrowPath);
			}

			/**
    * Called during the first update graph for a link
    *
    * @param      {D3Object}  d3path  The d3 path
    */

		}, {
			key: 'newPathAttr',
			value: function newPathAttr(d3path) {
				d3path.attr('d', arrowPath);
			}

			/**
    * Calculates the arrow path
    *
    * @return     {string}  The path to draw
    */

		}, {
			key: 'arrowPath',
			value: function arrowPath() {
				var d = this;
				var dx = d.target.x - d.source.x,
				    dy = d.target.y - d.source.y,
				    dr = Math.sqrt(dx * dx + dy * dy);
				return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
			}

			/**
    * Used to install policies that are called when this
    * link has a mouse event
    *
    * @param      {Policy}  policy  The policy to install
    */

		}, {
			key: 'installPathPolicy',
			value: function installPathPolicy(policy) {
				this.pathPolicies.push(policy);
				policy.initialize(this.graph);
			}

			/**
    * Used to uninstall policy for this link
    *
    * @param      {Policy}  policyRemove  The policy to remove
    */

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

			/**
    * Called when there is a mouse event for this path
    *
    * @param      {string}  event     The mouse event
    * @param      {D3Object}  d3path  The d3 path
    * @param      {Object}  d         The matching link object
    */

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

		/**
   * Constructs the object.
   *
   * @param      {Node}  sourceNode  The source node
   * @param      {Node}  targetNode  The target node
   * @param      {number}  weight    The weight of the link
   */

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

		/**
   * Increases the count of the link
   * USed to keep track of how many paths to its subnodes
   * there are in order to calculate average traffic
   */


		_createClass(VisualizerLink, [{
			key: 'increaseCount',
			value: function increaseCount() {
				this.count += 1;
			}

			/**
    * Calculates where to place qtip for
    *
    * @return     {Object}  Object with qTip settings
    */

		}, {
			key: 'qtipHelper',
			value: function qtipHelper() {
				var ret;
				var d = this;
				var dx = (d.target.x - d.source.x) / 2,
				    dy = (d.target.y - d.source.y) / 2;
				if (d.source.x < d.target.x) {
					ret = {
						my: 'top center',
						at: 'center center', // at the bottom right of...
						target: [dx, dy],
						adjust: {
							y: 10
						}
					};
				} else {
					ret = {
						my: 'bottom center',
						at: 'center center', // at the bottom right of...
						target: [dx, dy],
						adjust: {
							y: -10
						}
					};
				}
				return ret;
			}

			/**
   * Called when a link is added to the graph
   *
   * @param      {Graph}  graph   The graph it is added to
   */

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

			/**
    * Sets whether the graph should use avg weight
    *
    * @param      {boolean}  val     The value to set to
    */

		}, {
			key: 'setUseAvgWeight',
			value: function setUseAvgWeight(val) {
				this.graph.state.VisualizerLink.useAvgWeight = !!val;
			}

			/**
    * Sets the weight of this link
    *
    * @param      {number}  weight  The weight to set to
    */

		}, {
			key: 'setWeight',
			value: function setWeight(weight) {
				this.weight = weight;
			}

			/**
    * Gets the raw weight.
    *
    * @return     {number}  The raw weight.
    */

		}, {
			key: 'getRawWeight',
			value: function getRawWeight() {
				return this.weight;
			}

			/**
    * Gets the weight value of the link, depending on the
    * useAvgWeigth setting
    *
    * @return     {number}  The weight.
    */

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

			/**
    * Updates the max weight of the graph
    */

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

			/**
    * Called during the update graph for existing links
    *
    * @param      {D3Object}  d3path  The d3 path
    * @param      {Link}  	   d       Matching Link Object       
    */

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

			/**
    * Called during the first update graph for this link
    *
    * @param      {D3Object}  d3path  The d3 path
    * @param      {Link}  	   d       Matching Link Object
    */

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
		/**
   * Constructs the object.
   *
   * @param      {number}  x       x location
   * @param      {number}  y       y location
   * @param      {string}  id      The identifier
   * @param      {string}  text    The text to display
   * @param      {number}  radius  The radius of the node
   */

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

		/**
   * Called when a node is added to the graph
   *
   * @param      {Graph}  graph   The graph it is added to
   */


		_createClass(Node, [{
			key: 'initialize',
			value: function initialize(graph) {
				if (this.initialized == false) {
					this.initialized = true;
					this.graph = graph;
				}
			}

			/**
    * Called during the update graph for existing links
    *
    * @param      {D3Object}  d3node  The d3 node
    */

		}, {
			key: 'updateAttr',
			value: function updateAttr(d3node, d) {
				d3node.attr("transform", function (d) {
					return "translate(" + d.x + "," + d.y + ")";
				});
			}

			/**
    * Called during the first update graph for a node
    * Hook for sub classes
    * 
    * @param      {D3Object}  d3node  The d3 node
    * @param      {Node}      d       Matching Node Object
    */

		}, {
			key: 'newNodeAttr',
			value: function newNodeAttr(d3node, d) {}

			/**
    * Sets the radius of the node.
    *
    * @param      {number}  radius  The radius
    */

		}, {
			key: 'setRadius',
			value: function setRadius(radius) {
				this.radius = radius;
			}

			/**
    * Used to install policies that are called when this
    * node has a mouse event
    *
    * @param      {Policy}  policy  The policy to install
    */

		}, {
			key: 'installNodePolicy',
			value: function installNodePolicy(policy) {
				this.nodePolicies.push(policy);
				policy.initialize(this.graph);
			}

			/**
    * Used to uninstall policy for this node
    *
    * @param      {Policy}  policyRemove  The policy to remove
    */

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

			/**
    * Called when there is a mouse event for this node
    *
    * @param      {string}  event     The mouse event
    * @param      {D3Object}  d3node  The d3 node
    * @param      {Object}  d         The matching node object
    */

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

		/**
   * Constructs the object.
   *
   * @param      {number}  x       	x location
   * @param      {number}  y       	y location
   * @param      {string}  id      	The identifier
   * @param      {string}  text    	The text to display
   * @param      {number}  radius  	The radius of the node
   * @param      {string}  parent     The parent id
   * @param      {Array}   ancestors  Array of ancestors
   * @param      {number}  xStart     x loc to start animation
   * @param      {number}  yStart     y loc to start animation
   */

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
   * @param      {Node}    d         The matching Node
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

        /**
         * Constructs the object.
         */

        function NodeSelectionPolicy() {
            _classCallCheck(this, NodeSelectionPolicy);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(NodeSelectionPolicy).call(this, "NodeSelectionPolicy"));
        }

        /**
         * Called when policy is installed
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

            /**
             * Adds the given node to the array of selected nodes
             *
             * @param      {D3Object}  d3Node    The d3 node
             * @param      {Node}      nodeData  Matching Node object
             */

        }, {
            key: 'addSelectNode',
            value: function addSelectNode(d3Node, nodeData) {
                var thisGraph = this.graph,
                    state = thisGraph.state.NodeSelectionPolicy,
                    consts = thisGraph.consts.NodeSelectionPolicy;

                d3Node.classed(consts.selectedClass, true);
                state.selectedNodes.push(nodeData);
            }

            /**
             * Removes the given node from the array of selected nodes.
             *
             * @param      {D3Object}  d3Node    The d3 node
             * @param      {Node}      nodeData  Matching node object 
             */

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

            /**
             * Removes all selected nodes.
             */

        }, {
            key: 'removeAllSelectedNodes',
            value: function removeAllSelectedNodes() {
                var thisGraph = this.graph,
                    state = thisGraph.state.NodeSelectionPolicy,
                    consts = thisGraph.consts.NodeSelectionPolicy;

                thisGraph.circles.classed(consts.selectedClass, false);
                state.selectedNodes = [];
            }

            /**
             * On Mousedown, determines whether to change the
             * selected status of the clicked node.
             *
             * @param      {D3Object}  d3node  The d3 node
             * @param      {Node}      d       Matching Node Object       
             */

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

            /**
             * On Mouseup, determines whether to change the
             * selected status of the clicked node.
             *
             * @param      {D3Object}  d3node  The d3 node
             * @param      {Node}      d       Matching Node Object
             */

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
         * @param   {Angular State}    $state    Used to change view
         */

        function PathChangeViewPolicy($state) {
            _classCallCheck(this, PathChangeViewPolicy);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PathChangeViewPolicy).call(this, 'PathChangeViewPolicy'));

            _this.$state = $state;
            return _this;
        }

        /**
         * Generates a list of all child containers of the service
         * Can handle nested services.
         *
         * @param      {string}  id      Node ID
         */


        _createClass(PathChangeViewPolicy, [{
            key: 'generateList',
            value: function generateList(id) {
                var thisPolicy = this;
                var retList = [];
                var nodeIds = this.graph.dataSource.children_struct[id];
                _.forEach(nodeIds, function (childId) {
                    if (thisPolicy.graph.dataSource.hasChild(childId) === true) {
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
             * @param      {Link}  edge    The clicked edge
             */

        }, {
            key: 'viewEdge',
            value: function viewEdge(edge) {
                var sourceList = [];
                var targetList = [];
                var sourceId = edge.source.id;
                var targetId = edge.target.id;

                if (this.graph.dataSource.hasChild(sourceId) === true) {
                    //Not a container node, need to aggregate
                    sourceList = this.generateList(sourceId);
                } else {
                    sourceList = [sourceId];
                }

                if (this.graph.dataSource.hasChild(targetId) === true) {
                    //Not a container node, need to aggregate
                    targetList = this.generateList(targetId);
                } else {
                    targetList = [targetId];
                }
                this.$state.go('contiv.menu.visualization.edge', { sourceName: sourceId, targetName: targetId,
                    sourceList: sourceList, targetList: targetList });
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
 *      
 */
angular.module('PolicyModule').factory('Policy', [function () {
  var Policy = function () {
    /**
     * Constructs the object.
     *
     * @param      {string}  policyName  The policy name
     */

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

        /**
         * Constructs the object.
         */

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

            /**
             * Removes all qTips from the DOM.
             * Called when the policy is uninstalled or
             * the graph is destroyed.
             */

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
                        var targetRet = d.qtipHelper();
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

        /**
         * Constructs the object.
         */

        function SplitJoinNodePolicy() {
            _classCallCheck(this, SplitJoinNodePolicy);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SplitJoinNodePolicy).call(this));

            _this.policyName = "SplitJoinNodePolicy";
            return _this;
        }

        /**
         * Called when policy is installed
         *
         * @param      {Graph}  graph   The graph
         */


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

        /**
         * Constructs the object.
         */

        function SplitJoinViewPolicy() {
            _classCallCheck(this, SplitJoinViewPolicy);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SplitJoinViewPolicy).call(this));

            _this.policyName = "SplitJoinViewPolicy";
            return _this;
        }

        /**
         * Called when policy is installed
         *
         * @param      {Graph}  graph   The graph
         */


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
             * @param      {D3Obj}   d3node  The d3 node
             * @param      {Object}  d       The matching data object
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGFzb3VyY2UvbW9kdWxlLmpzIiwiZ3JhcGgvbW9kdWxlLmpzIiwibGluay9tb2R1bGUuanMiLCJub2RlL21vZHVsZS5qcyIsInBvbGljeS9tb2R1bGUuanMiLCJkYXRhc291cmNlL2RhdGFzb3VyY2UuanMiLCJncmFwaC9ncmFwaC5qcyIsImdyYXBoL3Zpc3VhbGl6ZXJncmFwaC5qcyIsImxpbmsvbGluay5qcyIsImxpbmsvdmlzdWFsaXplcmxpbmsuanMiLCJub2RlL25vZGUuanMiLCJub2RlL3Zpc3VhbGl6ZXJub2RlLmpzIiwicG9saWN5L25vZGVzZWxlY3Rpb25wb2xpY3kuanMiLCJwb2xpY3kvcGF0aHZpZXdjaGFuZ2Vwb2xpY3kuanMiLCJwb2xpY3kvcG9saWN5LmpzIiwicG9saWN5L3BvbGljeXNlcnZpY2UuanMiLCJwb2xpY3kvcXRpcHBvbGljeS5qcyIsInBvbGljeS9zYXZlc3RhdGVwb2xpY3kuanMiLCJwb2xpY3kvc3BsaXRqb2lubm9kZXBvbGljeS5qcyIsInBvbGljeS9zcGxpdGpvaW52aWV3cG9saWN5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQSxRQUFRLE1BQVIsQ0FBZSxZQUFmLEVBQTZCLENBQUMsWUFBRCxFQUFlLFlBQWYsQ0FBN0I7Ozs7Ozs7QUNEQSxRQUFRLE1BQVIsQ0FBZSxhQUFmLEVBQThCLENBQUMsY0FBRCxDQUE5Qjs7Ozs7OztBQ0FBLFFBQVEsTUFBUixDQUFlLFlBQWYsRUFBNkIsRUFBN0I7Ozs7Ozs7QUNBQSxRQUFRLE1BQVIsQ0FBZSxZQUFmLEVBQTZCLEVBQTdCOzs7Ozs7OztBQ0NBLFFBQVEsTUFBUixDQUFlLGNBQWYsRUFBK0IsQ0FBQyxZQUFELEVBQWUsWUFBZixDQUEvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ09BLFFBQVEsTUFBUixDQUFlLFlBQWYsRUFDSyxPQURMLENBQ2EsWUFEYixFQUMyQixDQUFDLGdCQUFELEVBQW1CLGdCQUFuQixFQUN0QixVQUFVLGNBQVYsRUFBMEIs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QU4sQ0FBbUIsTUFBbkIsR0FBNEIsQ0FBL0MsQ0FBWDtBQUNBLG9CQUFJLEtBQUssS0FBSyxFQUFkO0FBQ0Esb0JBQUksSUFBSjtBQUNBLG9CQUFJLEtBQUssS0FBTCxLQUFlLE1BQW5CLEVBQTJCO0FBQ3ZCLHdCQUFJLGtCQUFrQixVQUFVLGVBQWhDO0FBQ0EsMkJBQU8sVUFBVSxZQUFWLENBQXVCLEVBQXZCLENBQVA7QUFDQSx3QkFBSSxTQUFTLFVBQVUsVUFBVixDQUFxQixFQUFyQixDQUFiO0FBQ0EsK0JBQVcsUUFBWCxDQUFvQixNQUFwQixFQUE0QixJQUE1QjtBQUNILGlCQUxELE1BS087QUFDSCx3QkFBSSxTQUFTLFVBQVUsVUFBVixDQUFxQixlQUFyQixDQUFxQyxFQUFyQyxFQUF5QyxDQUF6QyxDQUFiO0FBQ0EsMkJBQU8sVUFBVSxZQUFWLENBQXVCLE1BQXZCLENBQVA7QUFDQSxpR0FBZSxJQUFmLENBQW9CLFVBQXBCLEVBQWdDLElBQWhDO0FBQ0g7QUFDSjtBQTc4QmdIOztBQUFBO0FBQUEsTUFDbkYsb0JBQW9CLE1BRCtEOztBQWc5QnJILFdBQU87QUFDSCxnQkFBUTtBQURMLEtBQVA7QUFHUCxDQW45Qm1DLENBRHBDIiwiZmlsZSI6ImFwcC9idW5kbGVfZXM2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBEZWZpbmluZyB0aGUgRGF0YSBNb2R1bGUuXG4gKiBTZWUgZGF0YXNvdXJjZS5qcyBmb3IgdGhlIGJhc2UgZGF0YSBzb3VyY2UgY2xhc3MgYW5kIFxuICogbW9yZSBpbmZvIG9uIERhdGFTb3VyY2UuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdEYXRhTW9kdWxlJywgWydOb2RlTW9kdWxlJywgJ0xpbmtNb2R1bGUnXSk7XG5cblxuXG5cbiIsIi8qKlxuICogRGVmaW5pbmcgdGhlIGdyYXBoIG1vZHVsZS5cbiAqIFNlZSBncmFwaC5qcyBmb3IgdGhlIGJhc2UgZ3JhcGggY2xhc3MgYW5kIG1vcmUgaW5mbyBvbiBncmFwaHMuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdHcmFwaE1vZHVsZScsIFsnUG9saWN5TW9kdWxlJ10pO1xuXG5cblxuXG5cbiIsIi8qKlxuICogRGVmaW5pbmcgdGhlIExpbmsgTW9kdWxlLlxuICogU2VlIGxpbmsuanMgZm9yIHRoZSBiYXNlIGxpbmsgY2xhc3MgYW5kIG1vcmUgaW5mbyBvbiBsaW5rcy5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ0xpbmtNb2R1bGUnLCBbXSk7XG5cblxuXG5cblxuIiwiLyoqXG4gKiBEZWZpbmluZyB0aGUgTm9kZSBNb2R1bGUuXG4gKiBTZWUgbm9kZS5qcyBmb3IgdGhlIGJhc2Ugbm9kZSBjbGFzcyBhbmQgbW9yZSBpbmZvIG9uIG5vZGVzLlxuICovXG5hbmd1bGFyLm1vZHVsZSgnTm9kZU1vZHVsZScsIFtdKTtcblxuXG5cblxuXG5cblxuXG5cbiIsIi8qKlxuICogRGVmaW5pbmcgdGhlIFBvbGljeSBNb2R1bGUuXG4gKiBTZWUgcG9saWN5LmpzIGZvciB0aGUgYmFzZSBwb2xpY3kgY2xhc3MgYW5kXG4gKiBpbmZvIG9uIGhvdyBwb2xpY2llcyB3b3JrLlxuICovXG5hbmd1bGFyLm1vZHVsZSgnUG9saWN5TW9kdWxlJywgWydOb2RlTW9kdWxlJywgJ0xpbmtNb2R1bGUnXSk7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGNsYXNzIHRoZSBEYXRhU291cmNlIG9iamVjdC5cbiAqIFxuICogVGhlIERhdGFTb3VyY2Ugb2JqZWN0IHRha2VzIGluIG5vZGUgYW5kIGxpbmsgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIsIFxuICogYW5kIHByb3ZpZGVzIG1ldGhvZHMgZm9yIGNvbnZlcnRpbmcgYW5kIG1hbmlwdWxhdGluZyB0aGUgZGF0YSBmb3JcbiAqIHRoZSBncmFwaCBvYmplY3QuXG4gKiBcbiAqIFRvIHdyaXRlIHlvdXIgb3duIERhdGFTb3VyY2Ugb2JqZWN0LCBjcmVhdGUgYSBuZXcgZmFjdG9yeSB0aGF0IHVzZXMgdGhlIERhdGFTb3VyY2VcbiAqIHlvdSB3YW50IHRvIGluaGVyaXQgYXMgYSBkZXBlbmRlbmN5LCBhbmQgZXh0ZW5kIGl0cyBEYXRhU291cmNlIGNsYXNzLiBcbiAqIFJldHVybiB0aGUgY2xhc3Mgb2JqZWN0IHdpdGggRGF0YVNvdXJjZSBhcyBrZXkuXG4gKiBcbiAqL1xuYW5ndWxhci5tb2R1bGUoJ0RhdGFNb2R1bGUnKVxuICAgIC5mYWN0b3J5KCdEYXRhU291cmNlJywgWydWaXN1YWxpemVyTm9kZScsICdWaXN1YWxpemVyTGluaycsIFxuICAgIFx0ZnVuY3Rpb24gKFZpc3VhbGl6ZXJOb2RlLCBWaXN1YWxpemVyTGluaykge1xuXG4gICAgXHRjbGFzcyBEYXRhU291cmNlIHtcbiAgICBcdFx0LyoqXG4gICAgXHRcdCAqIENvbnN0cnVjdHMgdGhlIG9iamVjdC5cbiAgICBcdFx0ICpcbiAgICBcdFx0ICogQHBhcmFtICAgICAge0FycmF5fSAgIG5vZGVzICAgICAgICAgICAgICBUaGUgbm9kZSBkYXRhIFxuICAgIFx0XHQgKiBAcGFyYW0gICAgICB7QXJyYXl9ICAgbGlua3MgICAgICAgICAgICAgIFRoZSBsaW5rIGRhdGFcbiAgICBcdFx0ICogQHBhcmFtICAgICAge09iamVjdH0gIGNoaWxkcmVuX3N0cnVjdCAgICBUaGUgY2hpbGRyZW4gc3RydWN0dXJlXG4gICAgXHRcdCAqIEBwYXJhbSAgICAgIHtPYmplY3R9ICBhbmNlc3RvcnNfc3RydWN0ICAgVGhlIGFuY2VzdG9ycyBzdHJ1Y3R1cmVcbiAgICBcdFx0ICogQHBhcmFtICAgICAge0FycmF5fSAgIGxhYmVscyAgICAgICAgICAgICBUaGUgbGFiZWxzXG4gICAgXHRcdCAqIEBwYXJhbSAgICAgIHtBcnJheX0gICBzZWxlY3RvcnMgICAgICAgICAgVGhlIHNlbGVjdG9yc1xuICAgIFx0XHQgKi9cblx0XHRcdGNvbnN0cnVjdG9yKG5vZGVzLCBsaW5rcywgY2hpbGRyZW5fc3RydWN0LCBhbmNlc3RvcnNfc3RydWN0LCBcblx0XHRcdFx0XHRsYWJlbHMsIHNlbGVjdG9ycykge1xuXHRcdFx0XHR0aGlzLm5vZGVzID0gbm9kZXM7XG5cdFx0XHRcdHRoaXMubGlua3MgPSBsaW5rcztcblx0XHRcdFx0dGhpcy5jaGlsZHJlbl9zdHJ1Y3QgPSBjaGlsZHJlbl9zdHJ1Y3Q7XG5cdFx0XHRcdHRoaXMuYW5jZXN0b3JzX3N0cnVjdCA9IGFuY2VzdG9yc19zdHJ1Y3Q7XG5cdFx0XHRcdHRoaXMubGFiZWxzID0gbGFiZWxzO1xuXHRcdFx0XHR0aGlzLnNlbGVjdG9ycyA9IHNlbGVjdG9ycztcblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBSZXBsYWNlcyB0aGUgbm9kZSBkYXRhXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtICAgICAge05vZGV9ICBub2RlcyAgIFRoZSBub2Rlc1xuXHRcdFx0ICovXG5cdFx0XHR1cGRhdGVOb2Rlcyhub2Rlcykge1xuXHRcdFx0XHR0aGlzLm5vZGVzID0gbm9kZXM7XG5cdFx0XHR9XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogUmVwbGFjZXMgdGhlIGxpbmsgZGF0YVxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSAgICAgIHtMaW5rfSAgbGlua3MgICBUaGUgbGlua3Ncblx0XHRcdCAqL1xuXHRcdFx0dXBkYXRlTGlua3MobGlua3MpIHtcblx0XHRcdFx0dGhpcy5saW5rcyA9IGxpbmtzO1xuXHRcdFx0fVxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFJldHVybnMgdGhlIE5hbWUgYXR0cmlidXRlIG9mIHRoZSBOb2RlIHdpdGggdGhlIFxuXHRcdFx0ICogbWF0Y2hpbmcgaWRcblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0gICAgICB7c3RyaW5nfSAgaWQgICAgICBUaGUgaWRlbnRpZmllclxuXHRcdFx0ICogQHJldHVybiAgICAge3N0cmluZ30gIG5hbWUgb2YgdGhlIG1hdGNoaW5nIG5vZGVcblx0XHRcdCAqL1xuXHRcdFx0bm9kZUlkVG9OYW1lKGlkKSB7XG5cdFx0ICAgICAgICB2YXIgbm9kZXMgPSB0aGlzLm5vZGVzO1xuXHRcdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuXHRcdCAgICAgICAgICAgIGlmIChub2Rlc1tpXS5pZCA9PSBpZCkge1xuXHRcdCAgICAgICAgICAgICAgICByZXR1cm4gbm9kZXNbaV0ubmFtZTtcblx0XHQgICAgICAgICAgICB9XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgIH1cblxuXHRcdCAgICAvKipcblx0XHQgICAgICogRGV0ZXJtaW5lcyBpZiBpdCBoYXMgY2hpbGQuXG5cdFx0ICAgICAqXG5cdFx0ICAgICAqIEBwYXJhbSAgICAgIHtzdHJpbmd9ICAgaWQgICAgICBUaGUgaWRlbnRpZmllclxuXHRcdCAgICAgKiBAcmV0dXJuICAgICB7Ym9vbGVhbn0gIFRydWUgaWYgaGFzIGNoaWxkLCBGYWxzZSBvdGhlcndpc2UuXG5cdFx0ICAgICAqL1xuXHRcdCAgICBoYXNDaGlsZChpZCkge1xuXHRcdCAgICBcdGlmICh0aGlzLmNoaWxkcmVuX3N0cnVjdFtpZF0gPT0gbnVsbCkge1xuICAgICAgICAgICAgXHRcdHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIFx0fVxuICAgICAgICAgICAgXHRyZXR1cm4gdHJ1ZTtcdFxuXHRcdCAgICB9XG5cblx0XHQgICAgLyoqXG5cdFx0ICAgICAqIFNldHMgdGhlIHBhcmVudCBhbmQgYW5jZXN0b3JzIGF0dHJpYnV0ZSB1c2luZyBcblx0XHQgICAgICogYW5jZXN0b3JzX3N0cnVjdCBmb3IgYWxsIHRoZSBub2Rlc1xuXHRcdCAgICAgKiBBbHNvIGFkZHMgYW55IG5vZGVzIHdpdGhvdXQgYW5jZXN0b3JzLCB0aGF0IGFyZW4ndCBcblx0XHQgICAgICogdG9wbGV2ZWwgdG8gdGhlIGNsaWVudCBzZXJ2aWNlLlxuXHRcdCAgICAgKi9cblx0XHQgICAgc2V0QW5jZXN0b3JzKCkge1xuXHRcdCAgICBcdHZhciB0aGlzRGF0YVNvdXJjZSA9IHRoaXM7XG5cdFx0ICAgIFx0dmFyIGFkZGVkQ2xpZW50ID0gZmFsc2U7XG5cdFx0ICAgIFx0Xy5mb3JFYWNoKHRoaXNEYXRhU291cmNlLm5vZGVzLCBmdW5jdGlvbihub2RlKSB7XG5cdFx0ICAgIFx0XHRub2RlLmFuY2VzdG9ycyA9IHRoaXNEYXRhU291cmNlLmFuY2VzdG9yc19zdHJ1Y3Rbbm9kZS5pZF0gfHwgW107XG5cdFx0ICAgIFx0XHRpZiAoXy5pc0VtcHR5KG5vZGUuYW5jZXN0b3JzKSA9PT0gZmFsc2UpIHtcblx0XHQgICAgXHRcdFx0bm9kZS5wYXJlbnQgPSBub2RlLmFuY2VzdG9yc1swXTtcblx0XHQgICAgXHRcdH0gZWxzZSB7XG5cdFx0ICAgIFx0XHRcdGlmIChfLmluY2x1ZGVzKHRoaXNEYXRhU291cmNlLmNoaWxkcmVuX3N0cnVjdC50b3BMZXZlbCwgbm9kZS5pZCkgPT0gZmFsc2UpIHtcblx0XHQgICAgXHRcdFx0XHQvL2NvbnRhaW5lciBoYXMgbm8gcGFyZW50XG5cdFx0ICAgIFx0XHRcdFx0Ly9hZGRpbmcgdG8gY2xpZW50XG5cdFx0ICAgIFx0XHRcdFx0bm9kZS5hbmNlc3RvcnMucHVzaChcImNsaWVudFwiKTtcblx0XHQgICAgXHRcdFx0XHR0aGlzRGF0YVNvdXJjZS5hbmNlc3RvcnNfc3RydWN0W25vZGUuaWRdID0gW1wiY2xpZW50XCJdO1xuXHRcdCAgICBcdFx0XHRcdGlmIChhZGRlZENsaWVudCA9PT0gZmFsc2UpIHtcblx0XHQgICAgXHRcdFx0XHRcdGFkZGVkQ2xpZW50ID0gdHJ1ZTtcblx0XHRcdCAgICBcdFx0XHRcdHRoaXNEYXRhU291cmNlLmNoaWxkcmVuX3N0cnVjdC50b3BMZXZlbC5wdXNoKFwiY2xpZW50XCIpO1xuXHRcdCAgICBcdFx0XHRcdFx0dGhpc0RhdGFTb3VyY2UuY2hpbGRyZW5fc3RydWN0WydjbGllbnQnXSA9IFtdO1xuXHRcdCAgICBcdFx0XHRcdH1cblx0XHQgICAgXHRcdFx0XHR0aGlzRGF0YVNvdXJjZS5jaGlsZHJlbl9zdHJ1Y3RbJ2NsaWVudCddLnB1c2gobm9kZS5pZCk7XG5cdFx0XHQgICAgXHRcdH1cblx0XHQgICAgXHRcdH1cblx0XHQgICAgXHR9KVxuXHRcdCAgICB9XG5cblx0XHQgICAgLyoqXG5cdFx0ICAgICAqIFJldHVybnMgdGhlIGZsb3cgYmV0d2VlbiB0aGUgaGlnaGVzdCBsZXZlbCBncm91cGluZ1xuXHRcdCAgICAgKlxuXHRcdCAgICAgKiBAcmV0dXJuICAgICB7T2JqZWN0fSAgVGhlIHRvcCBsZXZlbCBmbG93LlxuXHRcdCAgICAgKi9cblx0XHQgICAgZ2V0VG9wTGV2ZWxGbG93KCkge1xuXHRcdCAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Rmxvd0JldHdlZW5TZXQodGhpcy5jaGlsZHJlbl9zdHJ1Y3QudG9wTGV2ZWwpO1xuXHRcdCAgICB9XG5cblx0XHQgICAgLyoqXG5cdFx0ICAgICAqIEdldHMgdGhlIGZsb3cgYmV0d2VlbiBhbnkgc2V0IG9mIG5vZGUgbGV2ZWxzXG5cdFx0ICAgICAqXG5cdFx0ICAgICAqIEBwYXJhbSAgICAgIHtBcnJheX0gIG5vZGVfbmFtZXMgIFRoZSBub2RlIG5hbWVzIGluIHRoZSBzZXRcblx0XHQgICAgICogQHJldHVybiAgICAge09iamVjdH0gIFRoZSBmbG93IGJldHdlZW4gc2V0LlxuXHRcdCAgICAgKi9cblx0XHQgICAgZ2V0Rmxvd0JldHdlZW5TZXQobm9kZV9uYW1lcykge1xuXHRcdCAgICAgICAgdmFyIGxvY2FsX25vZGVzID0gdGhpcy5ub2Rlcztcblx0XHQgICAgICAgIHZhciBpZE1hcHBpbmcgPSB7fTtcblx0XHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG9jYWxfbm9kZXMubGVuZ3RoOyBpKyspIHtcblx0XHQgICAgICAgICAgICB2YXIgbm9kZSA9IGxvY2FsX25vZGVzW2ldO1xuXG5cdFx0ICAgICAgICAgICAgLy9pZiBub2RlIGlzIGFscmVhZHkgYXQgaXRzIGhpZ2hlc3QgbGV2ZWxcblx0XHQgICAgICAgICAgICBpZiAobm9kZS5hbmNlc3RvcnMgPT09IG51bGwpIHtcblx0XHQgICAgICAgICAgICAgICAgaWRNYXBwaW5nW25vZGUuaWRdID0gbm9kZS5uYW1lO1xuXHRcdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdFx0ICAgICAgICAgICAgICAgIC8vY2hlY2sgdG8gc2VlIHdoaWNoIHRhZ3MgYXJlIHByZXNlbnQgaW4gdGhlIGFuY2VzdG9yIGxpc3Rcblx0XHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBub2RlX25hbWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0ICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5hbmNlc3RvcnMuaW5kZXhPZihub2RlX25hbWVzW2pdKSA+IC0xKSB7XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgaWRNYXBwaW5nW25vZGUuaWRdID0gbm9kZV9uYW1lc1tqXTtcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0XHQgICAgICAgICAgICAgICAgICAgIH1cblx0XHQgICAgICAgICAgICAgICAgfVxuXHRcdCAgICAgICAgICAgIH1cblx0XHQgICAgICAgIH0gICBcblx0XHQgICAgICAgIC8vbW9kaWZ5IGxpbmtzXG5cdFx0ICAgICAgICB2YXIgbGlua3MgPSB0aGlzLmxpbmtzO1xuXHRcdCAgICAgICAgdmFyIGxpbmtEYXRhID0gW107XG5cdFx0ICAgICAgICBcblx0XHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcblx0XHQgICAgICAgICAgICB2YXIgbGluayA9IFtdO1xuXHRcdCAgICAgICAgICAgIGxpbmsuc291cmNlID0gaWRNYXBwaW5nW2xpbmtzW2ldLnNvdXJjZV0gfHwgbGlua3NbaV0uc291cmNlO1xuXHRcdCAgICAgICAgICAgIGxpbmsudGFyZ2V0ID0gaWRNYXBwaW5nW2xpbmtzW2ldLnRhcmdldF0gfHwgbGlua3NbaV0udGFyZ2V0O1xuXHRcdCAgICAgICAgICAgIGxpbmsud2VpZ2h0ID0gbGlua3NbaV0ud2VpZ2h0O1xuXHRcdCAgICAgICAgICAgIGxpbmtEYXRhLnB1c2gobGluayk7XG5cdFx0ICAgICAgICB9XG5cblx0XHQgICAgICAgIC8vY3JlYXRpbmcgdGhlIG5vZGVEYXRhXG5cdFx0ICAgICAgICB2YXIgbm9kZURhdGEgPSBbXTtcblx0XHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZV9uYW1lcy5sZW5ndGg7IGkrKykge1xuXHRcdCAgICAgICAgXHR2YXIgbmV3Tm9kZTtcblx0XHQgICAgICAgICAgICB2YXIgbm9kZV90b19hZGQgPSBbXTtcblx0XHQgICAgICAgICAgICBub2RlX3RvX2FkZC5pZCA9IG5vZGVfbmFtZXNbaV07XG5cdFx0ICAgICAgICAgICAgbm9kZV90b19hZGQudGV4dCA9IHRoaXMubm9kZUlkVG9OYW1lKG5vZGVfbmFtZXNbaV0pIHx8IG5vZGVfbmFtZXNbaV07XG5cblxuXHRcdCAgICAgICAgICAgIG5vZGVfdG9fYWRkLmFuY2VzdG9ycyA9IHRoaXMuYW5jZXN0b3JzX3N0cnVjdFtub2RlX25hbWVzW2ldXSB8fCB0aGlzLmFuY2VzdG9yc19zdHJ1Y3Rbbm9kZV90b19hZGQudGV4dF0gfHwgW107XG5cdFx0ICAgICAgICAgICAgaWYgKF8uaXNFbXB0eShub2RlX3RvX2FkZC5hbmNlc3RvcnMpID09PSBmYWxzZSkge1xuXHRcdCAgICAgICAgICAgICAgICBub2RlX3RvX2FkZC5wYXJlbnQgPSBub2RlX3RvX2FkZC5hbmNlc3RvcnNbMF07XG5cdFx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0XHQgICAgICAgICAgICAgICAgbm9kZV90b19hZGQucGFyZW50ID0gbnVsbDtcblx0XHQgICAgICAgICAgICB9XG5cdFx0ICAgICAgICAgICAgbm9kZURhdGEucHVzaChub2RlX3RvX2FkZCk7XG5cdFx0ICAgICAgICB9XG5cblx0XHQgICAgICAgIHJldHVybiB7bm9kZURhdGE6bm9kZURhdGEsIGxpbmtEYXRhOmxpbmtEYXRhfTtcblx0XHQgICAgfVxuXG5cdFx0ICAgIC8qKlxuXHRcdCAgICAgKiBwcm9jZXNzIHRoZSBub2RlRGF0YSBvdXRwdXQgb2YgZ2V0Rmxvd0JldHdlZW5TZXRcblx0XHQgICAgICpcblx0XHQgICAgICogQHBhcmFtICAgICAge0FycmF5fSAgbm9kZURhdGEgIE5vZGVEYXRhIHRvIGNvbnZlcnQgXG5cdFx0ICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBub2RlIG9iamVjdHNcblx0XHQgICAgICogQHJldHVybiAgICAge0FycmF5fSAgTm9kZSBvYmplY3RzXG5cdFx0ICAgICAqL1xuXHRcdCAgICBwcm9jZXNzTm9kZURhdGEobm9kZURhdGEpIHtcblx0XHQgICAgXHR2YXIgdGhpc0RhdGFTb3VyY2UgPSB0aGlzO1xuXHRcdCAgICAgICAgdmFyIG5vZGVzID0gW107XG5cdFx0ICAgICAgICBfLmZvckVhY2gobm9kZURhdGEsIGZ1bmN0aW9uKGRhdGEpIHtcblx0XHQgICAgICAgICAgICB2YXIgbmV3Tm9kZSA9IG5ldyBWaXN1YWxpemVyTm9kZS5Ob2RlKG51bGwsIG51bGwsIGRhdGEuaWQsIGRhdGEudGV4dCxcblx0XHQgICAgICAgICAgICAgICAgbnVsbCwgZGF0YS5wYXJlbnQsIGRhdGEuYW5jZXN0b3JzLCBudWxsLCBudWxsKTtcblx0XHQgICAgICAgICAgICBub2Rlcy5wdXNoKG5ld05vZGUpO1xuXHRcdCAgICAgICAgfSlcblx0XHQgICAgICAgIHJldHVybiBub2Rlcztcblx0XHQgICAgfVxuXG5cdFx0ICAgIC8qKlxuXHRcdCAgICAgKiBwcm9jZXNzIHRoZSBsaW5rRGF0YSBvdXRwdXQgb2YgZ2V0Rmxvd0JldHdlZW5TZXRcblx0XHQgICAgICpcblx0XHQgICAgICogQHBhcmFtICAgICAge0FycmF5fSAgbGlua0RhdGEgIFRoZSBsaW5rIGRhdGFcblx0XHQgICAgICogQHBhcmFtICAgICAge0FycmF5fSAgbm9kZXMgICAgIFRoZSBub2Rlc1xuXHRcdCAgICAgKiBAcmV0dXJuICAgICB7QXJyYXl9ICBMaW5rIG9iamVjdHNcblx0XHQgICAgICovXG5cdFx0ICAgIHByb2Nlc3NMaW5rRGF0YShsaW5rRGF0YSwgbm9kZXMpIHtcblx0XHQgICAgXHQvKipcblx0XHRcdCAgICAgKiBSZXR1cm5zIHRoZSBub2RlIHRoYXQgbWF0Y2hlcyB0aGUgaWRcblx0XHRcdCAgICAgKlxuXHRcdFx0ICAgICAqIEBwYXJhbSAgICAgIHtzdHJpbmd9IGlkICAgICAgVGhlIGlkZW50aWZpZXJcblx0XHRcdCAgICAgKiBAcmV0dXJuICAgICB7Tm9kZX0gICBUaGUgbm9kZSB3aXRoIHRoZSBtYXRjaGluZyBpZFxuXHRcdFx0ICAgICAqL1xuXHRcdFx0ICAgIGZ1bmN0aW9uIGZpbmROb2RlQnlJZChpZCwgbm9kZXMpIHtcblx0XHRcdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0ICAgICAgICAgICAgaWYgKGlkID09IG5vZGVzW2ldLmlkKSB7XG5cdFx0XHQgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVzW2ldO1xuXHRcdFx0ICAgICAgICAgICAgfVxuXHRcdFx0ICAgICAgICB9XG5cdFx0XHQgICAgfTtcblxuXHRcdCAgICAgICAgdmFyIGxpbmtzID0gW107XG5cdFx0ICAgICAgICAvL2EgbWFwcGluZyBmcm9tIHNvdXJjZS5pZC10YXJnZXQuaWQgdG8gdGhlIGxpbmsgYWRkZWRcblx0XHQgICAgICAgIHZhciBhZGRlZF9saW5rcyA9IHt9O1xuXHRcdCAgICAgICAgLy90cmFuc2Zvcm1pbmcgbGluayBkYXRhXG5cdFx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmtEYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0ICAgICAgICAgICAgaWYgKGxpbmtEYXRhW2ldLnNvdXJjZSAhPSBsaW5rRGF0YVtpXS50YXJnZXQpIHtcblx0XHQgICAgICAgICAgICBcdC8vIGNvbnNvbGUubG9nKGxpbmtEYXRhW2ldKVxuXHRcdCAgICAgICAgICAgICAgICB2YXIgc291cmNlID0gZmluZE5vZGVCeUlkKGxpbmtEYXRhW2ldLnNvdXJjZSwgbm9kZXMpO1xuXHRcdCAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZmluZE5vZGVCeUlkKGxpbmtEYXRhW2ldLnRhcmdldCwgbm9kZXMpO1xuXHRcdCAgICAgICAgICAgICAgICB2YXIgd2VpZ2h0ID0gbGlua0RhdGFbaV0ud2VpZ2h0O1xuXHRcdCAgICAgICAgICAgICAgICAvL2luIG9yZGVyIHRvIHN1bSBhbGwgdGhlIHdlaWdodHMgb2YgdGhlIGxpbmtzIG9mIHRoZSBzdWItbm9kZXMsXG5cdFx0ICAgICAgICAgICAgICAgIC8vd2UgdXNlIGFkZGVkX2xpbmtzIHRvIGtlZXAgdHJhY2sgaWYgYW4gbGluayB3YXMgYWRkZWRcblx0XHQgICAgICAgICAgICAgICAgLy9pZiBpdCBpcywgd2UgbW9kaWZ5IGl0cyB3ZWlnaHRcblx0XHQgICAgICAgICAgICAgICAgaWYgKHNvdXJjZSA9PSBudWxsIHx8IHRhcmdldCA9PSBudWxsKSB7XG5cdFx0ICAgICAgICAgICAgICAgIFx0Y29udGludWU7XG5cdFx0ICAgICAgICAgICAgICAgIH1cblx0XHQgICAgICAgICAgICAgICAgaWYgKGFkZGVkX2xpbmtzW3NvdXJjZS5pZCArICctJyArIHRhcmdldC5pZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdCAgICAgICAgICAgICAgICAgICAgdmFyIGxpbmsgPSBuZXcgVmlzdWFsaXplckxpbmsuTGluayhzb3VyY2UsIHRhcmdldCwgd2VpZ2h0KTtcblx0XHQgICAgICAgICAgICAgICAgICAgIGFkZGVkX2xpbmtzW3NvdXJjZS5pZCArICctJyArIHRhcmdldC5pZF0gPSBsaW5rO1xuXHRcdCAgICAgICAgICAgICAgICAgICAgbGlua3MucHVzaChsaW5rKTtcblx0XHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0XHQgICAgICAgICAgICAgICAgICAgIHZhciBleGlzdGluZ19saW5rID0gYWRkZWRfbGlua3Nbc291cmNlLmlkICsgJy0nICsgdGFyZ2V0LmlkXTtcblx0XHQgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nX2xpbmsuc2V0V2VpZ2h0KGV4aXN0aW5nX2xpbmsuZ2V0UmF3V2VpZ2h0KCkgKyB3ZWlnaHQpO1xuXHRcdCAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdfbGluay5pbmNyZWFzZUNvdW50KCk7XG5cdFx0ICAgICAgICAgICAgICAgIH1cblx0XHQgICAgICAgICAgICB9ICBcblx0XHQgICAgICAgIH1cblx0XHQgICAgICAgIHJldHVybiBsaW5rcztcblx0XHQgICAgfVxuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0RGF0YVNvdXJjZTpEYXRhU291cmNlXG5cdFx0fVxufV0pO1xuXG5cblxuXG5cblxuIiwiLyoqXG4gKiBUaGUgYmFzZSBjbGFzcyB0aGUgZ3JhcGggb2JqZWN0LiBBbnkgbm9kZXMgb3IgbGlua3MgdGhhdCBhcmUgY29udGFpbmVkIGluXG4gKiBpdHMgbm9kZXMgb3IgbGlua3MgcHJvcGVydHkgd2lsbCBiZSBkcmF3biBvbiB1cGRhdGVHcmFwaC5cbiAqIFN1cHBvcnRzIHBvbGljaWVzLlxuICogXG4gKiBUbyB3cml0ZSB5b3VyIG93biBncmFwaCBvYmplY3QsIGNyZWF0ZSBhIG5ldyBmYWN0b3J5IHRoYXQgdXNlcyB0aGUgZ3JhcGhcbiAqIHlvdSB3YW50IHRvIGluaGVyaXQgYXMgYSBkZXBlbmRlbmN5LCBhbmQgZXh0ZW5kIGl0cyBncmFwaCBjbGFzcy4gXG4gKiBSZXR1cm4gdGhlIGNsYXNzIG9iamVjdCB3aXRoIEdyYXBoIGFzIGtleS5cbiAqIFxuICovXG5hbmd1bGFyLm1vZHVsZSgnR3JhcGhNb2R1bGUnKVxuICAgIC5mYWN0b3J5KCdHcmFwaCcsIFsnUG9saWN5U2VydmljZScsIGZ1bmN0aW9uIChQb2xpY3lTZXJ2aWNlKSB7XG4gICAgICAgIGNsYXNzIEdyYXBoIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogY29uc3RydWN0b3IgZm9yIHRoZSBncmFwaFxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtIVE1MIFNWR30gIHN2ZyAgICAgVGhlIHN2ZyB0aGF0IHdpbGwgXG4gICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvbGQgdGhlIGdyYXBoXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7QXJyYXl9ICBub2RlcyAgICAgIExpc3Qgb2Ygbm9kZXMgZm9yIHRoZSBncmFwaFxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge0FycmF5fSAgbGlua3MgICAgICBMaXN0IG9mIGxpbmtzIGZvciB0aGUgZ3JhcGhcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY29uc3RydWN0b3Ioc3ZnLCBub2RlcywgbGlua3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcztcblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5ub2RlcyA9IG5vZGVzIHx8IFtdO1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5saW5rcyA9IGxpbmtzIHx8IFtdO1xuXG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmRlZmF1bHROb2RlUG9saWNpZXMgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguZGVmYXVsdFBhdGhQb2xpY2llcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLnN2Z1BvbGljeSA9IG5ldyBQb2xpY3lTZXJ2aWNlLlBvbGljeSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgICAgICBjYW5ab29tOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjYW5QYW46IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGluaXRGb3JjZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVVcGRhdGU6IGZhbHNlXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5jb25zdHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZUdDbGFzczogXCJjb25jZXB0R1wiLFxuICAgICAgICAgICAgICAgICAgICBncmFwaENsYXNzOiBcImdyYXBoXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhdGhDbGFzczogXCJwYXRoXCIsXG4gICAgICAgICAgICAgICAgICAgIG5vZGVDbGFzczogXCJjaXJjbGVcIixcbiAgICAgICAgICAgICAgICAgICAgbm9kZVRleHQ6IFwibm9kZVRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRSYWRpdXM6IDUwLFxuICAgICAgICAgICAgICAgICAgICBtYXhSYWRpdXM6IDYwLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5T2Zmc2V0OiA2MCxcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzdmcub24oXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGguc3ZnUG9saWN5W1wibW91c2VvdmVyXCJdLmNhbGwodGhpcywgZCk7ICAgIFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAub24oXCJkYmxjbGlja1wiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGguc3ZnUG9saWN5W1wiZGJsY2xpY2tcIl0uY2FsbCh0aGlzLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5vbihcImNvbnRleHRtZW51XCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5zdmdQb2xpY3lbXCJjb250ZXh0bWVudVwiXS5jYWxsKHRoaXMsIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGguc3ZnUG9saWN5W1wibW91c2VvdXRcIl0uY2FsbCh0aGlzLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5vbihcIm1vdXNlZG93blwiLCBmdW5jdGlvbihkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5zdmdQb2xpY3lbXCJtb3VzZWRvd25cIl0uY2FsbCh0aGlzLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5vbihcIm1vdXNldXBcIiwgZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGguc3ZnUG9saWN5W1wibW91c2V1cFwiXS5jYWxsKHRoaXMsIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIC8vIGRlZmluZSBhcnJvdyBtYXJrZXJzIGZvciBncmFwaCBsaW5rc1xuICAgICAgICAgICAgICAgIHZhciBkZWZzID0gc3ZnLmFwcGVuZCgnc3ZnOmRlZnMnKTtcbiAgICAgICAgICAgICAgICBkZWZzLmFwcGVuZCgnc3ZnOm1hcmtlcicpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdpZCcsICdlbmQtYXJyb3cnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcInZpZXdCb3hcIiwgXCIwIC01IDEwIDEwXCIpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwicmVmWFwiLCAyMClcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJyZWZZXCIsIC0xKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcIm1hcmtlcldpZHRoXCIsIDYpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwibWFya2VySGVpZ2h0XCIsIDYpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwib3JpZW50XCIsIFwiYXV0b1wiKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcImRcIiwgXCJNMCwtNUwxMCwwTDAsNVwiKTtcblxuICAgICAgICAgICAgICAgIC8vIGRlZmluZSBhcnJvdyBtYXJrZXJzIGZvciBsZWFkaW5nIGFycm93XG4gICAgICAgICAgICAgICAgZGVmcy5hcHBlbmQoJ3N2ZzptYXJrZXInKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignaWQnLCAnbWFyay1lbmQtYXJyb3cnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigndmlld0JveCcsICcwIC01IDEwIDEwJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3JlZlgnLCA3KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignbWFya2VyV2lkdGgnLCAzLjUpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdtYXJrZXJIZWlnaHQnLCAzLjUpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdvcmllbnQnLCAnYXV0bycpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJ3N2ZzpwYXRoJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2QnLCAnTTAsLTVMMTAsMEwwLDUnKTtcblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5zdmcgPSBzdmc7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLnN2Z0cgPSBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgICAgICAgICAuY2xhc3NlZCh0aGlzR3JhcGguY29uc3RzLmdyYXBoQ2xhc3MsIHRydWUpO1xuICAgICAgICAgICAgICAgIHZhciBzdmdHID0gdGhpc0dyYXBoLnN2Z0c7XG5cbiAgICAgICAgICAgICAgICAvLyBzdmcgbm9kZXMgYW5kIGxpbmtzIFxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5wYXRocyA9IHN2Z0cuYXBwZW5kKFwiZ1wiKS5zZWxlY3RBbGwoXCJnXCIpO1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5jaXJjbGVzID0gc3ZnRy5hcHBlbmQoXCJnXCIpLnNlbGVjdEFsbChcImdcIik7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmluaXROb2RlcygpO1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5pbml0TGlua3MoKTtcblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5zZXRQb3NpdGlvbnMoKTtcbiAgICAgICAgICAgICAgICB2YXIgcmVzaXplRnVuYyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGgub25XaW5kb3dSZXNpemUoc3ZnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguYmluZGluZ3MgPSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZTpyZXNpemVGdW5jXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICQod2luZG93KS5yZXNpemUocmVzaXplRnVuYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogY2FsbHMgdGhlIGRlc3Ryb3kgbWV0aG9kIGZvciBhbGwgcG9saWNpZXNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZGVzdHJveSgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcztcbiAgICAgICAgICAgICAgICAgXyh0aGlzR3JhcGguZGVmYXVsdE5vZGVQb2xpY2llcykuZm9yRWFjaChmdW5jdGlvbihwb2xpY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9saWN5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBfKHRoaXNHcmFwaC5kZWZhdWx0UGF0aFBvbGljaWVzKS5mb3JFYWNoKGZ1bmN0aW9uKHBvbGljeSkge1xuICAgICAgICAgICAgICAgICAgICBwb2xpY3kuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzR3JhcGguYmluZGluZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLm9mZihrZXksIHRoaXNHcmFwaC5iaW5kaW5nc1trZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUnVucyB0aGUgaW5pdCBmdW5jdGlvbiBmb3IgYWxsIHRoZSBub2Rlc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpbml0Tm9kZXMoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgXy5mb3JFYWNoKHRoaXNHcmFwaC5ub2RlcywgZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmluaXRpYWxpemUodGhpc0dyYXBoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSdW5zIHRoZSBpbml0IGZ1bmN0aW9uIGZvciBhbGwgdGhlIGxpbmtzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGluaXRMaW5rcygpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcztcbiAgICAgICAgICAgICAgICBfLmZvckVhY2godGhpc0dyYXBoLmxpbmtzLCBmdW5jdGlvbihsaW5rKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmsuaW5pdGlhbGl6ZSh0aGlzR3JhcGgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIHJldHVybnMgdGhlIG5vZGUgbWF0Y2hpbmcgdGhlIGlkLCBcbiAgICAgICAgICAgICAqIG9yIHVuZGVmaW5lZCBpZiB0aGVyZSBpcyBub25lXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge09iamVjdH0gIGlkICAgICAgVGhlIGlkZW50aWZpZXJcbiAgICAgICAgICAgICAqIEByZXR1cm4gICAgIHtOb2RlfSAgeyBtYXRjaGluZyBub2RlIH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZmluZE5vZGVCeUlkKGlkKXtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcztcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXNHcmFwaC5ub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaWQgPT09IHRoaXNHcmFwaC5ub2Rlc1tpXS5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNHcmFwaC5ub2Rlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmV0dXJucyB0aGUgZDNOb2RlIG9iamVjdCB0aGF0IG1hdGNoZXMgdGhlIGlkLFxuICAgICAgICAgICAgICogb3IgdW5kZWZpbmVkIGlmIHRoZXJlIGlzIG5vbmVcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7c3RyaW5nfSAgaWQgICAgICBUaGUgaWRlbnRpZmllclxuICAgICAgICAgICAgICogQHJldHVybiAgICAge0QzTm9kZX0gVGhlIGQzIG5vZGVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZmluZEQzTm9kZShpZCkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzO1xuICAgICAgICAgICAgICAgIHZhciBkM05vZGU7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmNpcmNsZXMuZWFjaChmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZDNOb2RlID0gZDMuc2VsZWN0KHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZDNOb2RlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFVzZWQgdG8gaW5zdGFsbCBhIGRyYWcgcG9saWN5IHRoYXQgd2lsbCBiZSBjYWxsZWRcbiAgICAgICAgICAgICAqIHdoZW4gbm9kZXMgYXJlIGRyYWdnZWRcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7ZDMuYmVoYXZpb3IuZHJhZ30gIGQzZHJhZyAgRDMgZHJhZyBvYmplY3RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaW5zdGFsbERyYWdQb2xpY3koZDNkcmFnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnID0gZDNkcmFnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFVzZWQgdG8gaW5zdGFsbCBhIHBvbGljeSB0aGF0IHdpbGwgYmUgY2FsbGVkIFxuICAgICAgICAgICAgICogd2hlbiB0aGVyZSBpcyBtb3VzZSBpbnRlcmFjdGlvbnMgd2l0aCB0aGUgZ3JhcGgncyBzdmdcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7UG9saWN5fSAgcG9saWN5ICBUaGUgcG9saWN5IHRvIGluc3RhbGxcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaW5zdGFsbFN2Z1BvbGljeShwb2xpY3kpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN2Z1BvbGljeSA9IHBvbGljeTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBVc2VkIHRvIGluc3RhbGwgcG9saWNpZXMgdGhhdCBhcmUgY2FsbGVkIHdoZW4gdGhlcmUgaXNcbiAgICAgICAgICAgICAqIG1vdXNlIGludGVyYWN0aW9uIHdpdGggYSBub2RlXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge1BvbGljeX0gIHBvbGljeSAgVGhlIHBvbGljeSB0byBpbnN0YWxsXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGluc3RhbGxEZWZhdWx0Tm9kZVBvbGljeShwb2xpY3kpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguZGVmYXVsdE5vZGVQb2xpY2llcy5wdXNoKHBvbGljeSk7XG4gICAgICAgICAgICAgICAgcG9saWN5LmluaXRpYWxpemUodGhpc0dyYXBoKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFVzZWQgdG8gcmVtb3ZlIGFuIGluc3RhbGxlZCBwb2xpY3kgZm9yIG5vZGVzXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge05vZGV9ICBwb2xpY3lSZW1vdmUgIFRoZSBwb2xpY3kgdG8gcmVtb3ZlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHVuaW5zdGFsbERlZmF1bHROb2RlUG9saWN5KHBvbGljeVJlbW92ZSkge1xuICAgICAgICAgICAgICAgIHZhciBwb2xpY3lSZW1vdmVOYW1lO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcG9saWN5UmVtb3ZlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBwb2xpY3lSZW1vdmVOYW1lID0gcG9saWN5UmVtb3ZlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvbGljeVJlbW92ZU5hbWUgPSBwb2xpY3lSZW1vdmUucG9saWN5TmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXyh0aGlzR3JhcGguZGVmYXVsdE5vZGVQb2xpY2llcykuZm9yRWFjaChmdW5jdGlvbihwb2xpY3ksIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2xpY3kucG9saWN5TmFtZSA9PT0gcG9saWN5UmVtb3ZlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9saWN5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5kZWZhdWx0Tm9kZVBvbGljaWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZXR1cm5zIHRoZSBub2RlIHBvbGljeSBvYmplY3Qgd2l0aCB0aGUgZ2l2ZW4gbmFtZVxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtzdHJpbmd9ICBwb2xpY3lOYW1lICBUaGUgcG9saWN5IG5hbWVcbiAgICAgICAgICAgICAqIEByZXR1cm4gICAgIHtQb2xpY3l9ICBwb2xpY3kgICAgICBUaGUgbWF0Y2hpbmcgcG9saWN5XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldE5vZGVQb2xpY3kocG9saWN5TmFtZSkge1xuICAgICAgICAgICAgXHR2YXIgdGhpc0dyYXBoID0gdGhpcztcblxuICAgICAgICAgICAgICAgIF8odGhpc0dyYXBoLmRlZmF1bHROb2RlUG9saWNpZXMpLmZvckVhY2goZnVuY3Rpb24ocG9saWN5LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9saWN5LnBvbGljeU5hbWUgPT09IHBvbGljeU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwb2xpY3k7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBVc2VkIHRvIGluc3RhbGwgcG9saWNpZXMgdGhhdCBhcmUgY2FsbGVkIHdoZW4gdGhlcmUgaXMgYVxuICAgICAgICAgICAgICogbW91c2UgaW50ZXJhY3Rpb24gd2l0aCBhIHBhdGhcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7UG9saWN5fSAgcG9saWN5ICBUaGUgcG9saWN5IHRvIGluc3RhbGxcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaW5zdGFsbERlZmF1bHRQYXRoUG9saWN5KHBvbGljeSkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5kZWZhdWx0UGF0aFBvbGljaWVzLnB1c2gocG9saWN5KTtcbiAgICAgICAgICAgICAgICBwb2xpY3kuaW5pdGlhbGl6ZSh0aGlzR3JhcGgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFVzZWQgdG8gcmVtb3ZlIGFuIGluc3RhbGxlZCBwb2xpY3kgZm9yIGxpbmtzXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge1BvbGljeX0gIHBvbGljeVJlbW92ZSAgVGhlIHBvbGljeSB0byByZW1vdmVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdW5pbnN0YWxsRGVmYXVsdFBhdGhQb2xpY3kocG9saWN5UmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBvbGljeVJlbW92ZU5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwb2xpY3lSZW1vdmUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvbGljeVJlbW92ZU5hbWUgPSBwb2xpY3lSZW1vdmU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9saWN5UmVtb3ZlTmFtZSA9IHBvbGljeVJlbW92ZS5wb2xpY3lOYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfKHRoaXNHcmFwaC5kZWZhdWx0UGF0aFBvbGljaWVzKS5mb3JFYWNoKGZ1bmN0aW9uKHBvbGljeSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvbGljeS5wb2xpY3lOYW1lID09PSBwb2xpY3lSZW1vdmVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb2xpY3kuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLmRlZmF1bHRQYXRoUG9saWNpZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGxlZCB3aGVuIHRoZXJlIGlzIGEgbW91c2UgaW50ZXJhY3Rpb24gd2l0aCBhIHBhdGhcbiAgICAgICAgICAgICAqIFByb3BvZ2F0ZXMgdGhlIGV2ZW50IHRvIGFsbCBpbnN0YWxsZWQgcGF0aCBwb2xpY2llc1xuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtzdHJpbmd9ICBldmVudCAgIFRoZSBldmVudCB0eXBlXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7ZDNvYmplY3R9ICBkM3BhdGggIFRoZSBkMyBwYXRoXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7UGF0aH0gIGQgICAgICAgVGhlIG1hdGNoaW5nIExpbmsgb2JqZWN0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHBhdGhQb2xpY3lFdmVudChldmVudCwgZDNwYXRoLCBkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgXyh0aGlzR3JhcGguZGVmYXVsdFBhdGhQb2xpY2llcykuZm9yRWFjaChmdW5jdGlvbihwb2xpY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9saWN5W2V2ZW50XShkM3BhdGgsIGQpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsbGVkIHdoZW4gdGhlcmUgaXMgYSBtb3VzZSBpbnRlcmFjdGlvbiB3aXRoIGEgbm9kZVxuICAgICAgICAgICAgICogUHJvcG9nYXRlcyB0aGUgZXZlbnQgdG8gYWxsIGluc3RhbGxlZCBub2RlIHBvbGljaWVzXG4gICAgICAgICAgICAgKiBcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtzdHJpbmd9ICBldmVudCAgIFRoZSBldmVudCB0eXBlXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7ZDNvYmplY3R9ICBkM25vZGUgIFRoZSBkMyBub2RlXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7UGF0aH0gIGQgICAgICAgVGhlIG1hdGNoaW5nIE5vZGUgb2JqZWN0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG5vZGVQb2xpY3lFdmVudChldmVudCwgZDNub2RlLCBkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgXy5mb3JFYWNoKHRoaXNHcmFwaC5kZWZhdWx0Tm9kZVBvbGljaWVzLCBmdW5jdGlvbihwb2xpY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9saWN5W2V2ZW50XShkM25vZGUsIGQpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU2V0cyBwYW4gYW5kIHpvb20gcnVsZXMgZm9yIHRoZSBncmFwaFxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtkMy5iZWhhdmlvci56b29tfSAgZDN6b29tICBEMyB6b29tIG9ialxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpbnN0YWxsWm9vbVBvbGljeShkM3pvb20pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdTdmcgPSBkM3pvb207XG4gICAgICAgICAgICAgICAgdGhpcy5zdmcuY2FsbCh0aGlzLmRyYWdTdmcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGxlZCB3aGVuIHRoZSB3aW5kb3cgaXMgcmVzaXplZFxuICAgICAgICAgICAgICogSG9vayBmb3Igb3ZlcnJpZGluZyBpbiBzdWJjbGFzc2VzXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge0hUTUwgU1ZHfSAgc3ZnICAgICBUaGUgc3ZnIHRoYXQgdGhlIGhhbmRsZXJcbiAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXMgYXR0YWNoZWQgdG9cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgb25XaW5kb3dSZXNpemUoc3ZnKSB7fVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEluc2VydHMgbGluZSBicmVha3MgaW4gbm9kZSB0ZXh0XG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge0hUTUwgRWxlbX0gIGdFbCAgICBUaGUgZWxlbSB0byBhZGQgdGV4dCB0b1xuICAgICAgICAgICAgICogQHBhcmFtICAgICAge3N0cmluZ30gIHRpdGxlICAgVGhlIHRpdGxlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGluc2VydFRpdGxlTGluZWJyZWFrcyAoZ0VsLCB0aXRsZSkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzO1xuICAgICAgICAgICAgICAgIHZhciB3b3JkcyA9IHRpdGxlLnNwbGl0KC9cXHMrL2cpLFxuICAgICAgICAgICAgICAgICAgICBud29yZHMgPSB3b3Jkcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gZ0VsLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgdGhpc0dyYXBoLmNvbnN0cy5ub2RlVGV4dClcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLFwibWlkZGxlXCIpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiZHlcIiwgXCItXCIgKyAobndvcmRzLTEpKjcuNSk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0c3BhbiA9IGVsLmFwcGVuZCgndHNwYW4nKS50ZXh0KHdvcmRzW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAoaSA+IDApXG4gICAgICAgICAgICAgICAgICAgIHRzcGFuLmF0dHIoJ3gnLCAwKS5hdHRyKCdkeScsICcxNScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZW1vdmVzIGFsbCBsaW5rcyBmcm9tIHRoZSBnaXZlbiBub2RlXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge05vZGV9ICBub2RlICAgIFRoZSBub2RlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNwbGljZUxpbmtzRm9yTm9kZShub2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIHRvU3BsaWNlID0gdGhpc0dyYXBoLmxpbmtzLmZpbHRlcihmdW5jdGlvbihsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGwuc291cmNlID09PSBub2RlIHx8IGwudGFyZ2V0ID09PSBub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdG9TcGxpY2UubWFwKGZ1bmN0aW9uKGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLmxpbmtzLnNwbGljZSh0aGlzR3JhcGgubGlua3MuaW5kZXhPZihsKSwgMSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQWRkcyB0aGUgbm9kZSB0byB0aGUgZ3JhcGggYW5kIHVwZGF0ZXNcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7Tm9kZX0gIG5vZGUgICAgVGhlIG5vZGVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgYWRkTm9kZShub2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgbm9kZS5pbml0aWFsaXplKHRoaXNHcmFwaClcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgudXBkYXRlR3JhcGgoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmVtb3ZlcyB0aGUgbm9kZSB0byB0aGUgZ3JhcGggYW5kIHVwZGF0ZXNcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7Tm9kZX0gIG5vZGUgICAgVGhlIG5vZGVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVtb3ZlTm9kZShub2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVzLnNwbGljZSh0aGlzR3JhcGgubm9kZXMuaW5kZXhPZihub2RlKSwgMSk7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLnNwbGljZUxpbmtzRm9yTm9kZShub2RlKTtcblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC51cGRhdGVHcmFwaCgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBZGRzIHRoZSBsaW5rIHRvIHRoZSBncmFwaCBhbmQgdXBkYXRlc1xuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtsaW5rfSAgbGluayAgICBUaGUgbGlua1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBhZGRMaW5rKGxpbmspIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgubGlua3MucHVzaChsaW5rKTtcbiAgICAgICAgICAgICAgICBsaW5rLmluaXRpYWxpemUodGhpc0dyYXBoKVxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC51cGRhdGVHcmFwaCgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZW1vdmVzIHRoZSBsaW5rIHRvIHRoZSBncmFwaCBhbmQgdXBkYXRlc1xuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtsaW5rfSAgbGluayAgICBUaGUgbGlua1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZW1vdmVMaW5rKGxpbmspIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgubGlua3Muc3BsaWNlKHRoaXNHcmFwaC5saW5rcy5pbmRleE9mKGxpbmspLCAxKTtcbiAgICAgICAgICAgICAgICBsaW5rLmluaXRpYWxpemUodGhpc0dyYXBoKVxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC51cGRhdGVHcmFwaCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGxlZCB3aGVuIHRoZSBncmFwaCBpcyB1cGRhdGluZyBleGlzdGluZyBwYXRoc1xuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtQYXRofSAgcGF0aHMgICBMaXN0IG9mIHBhdGhzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHVwZGF0ZUV4aXN0aW5nUGF0aHMocGF0aHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcztcbiAgICAgICAgICAgICAgICBwYXRocy5lYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgZC51cGRhdGVBdHRyKGQzLnNlbGVjdCh0aGlzKSwgZCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsbGVkIHdoZW4gdGhlIGdyYXBoIGlzIGFkZGluZyBuZXcgcGF0aHNcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7UGF0aH0gIG5ld1BhdGhzICBMaXN0IG9mIG5ldyBwYXRoc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB1cGRhdGVOZXdQYXRocyhuZXdQYXRocykge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmluaXRMaW5rcygpO1xuXG4gICAgICAgICAgICAgICAgbmV3UGF0aHMuZWFjaChmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgIGQubmV3UGF0aEF0dHIoZDMuc2VsZWN0KHRoaXMpLCBkKTtcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgLy9pZiBub2RlIGRvZXNuJ3QgaGF2ZSBpdHMgb3duIHBvbGljeSwgdXNlIGRlZmF1bHQgZm9yIHRoZSBncmFwaFxuICAgICAgICAgICAgICAgIG5ld1BhdGhzLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuaGFzUG9saWN5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5wYXRoUG9saWN5RXZlbnQoXCJtb3VzZW92ZXJcIiwgZDMuc2VsZWN0KHRoaXMpLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5wYXRoUG9saWN5RXZlbnQoXCJtb3VzZW92ZXJcIiwgZDMuc2VsZWN0KHRoaXMpLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5vbihcImRibGNsaWNrXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLmhhc1BvbGljeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQucGF0aFBvbGljeUV2ZW50KFwiZGJsY2xpY2tcIiwgZDMuc2VsZWN0KHRoaXMpLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5wYXRoUG9saWN5RXZlbnQoXCJkYmxjbGlja1wiLCBkMy5zZWxlY3QodGhpcyksIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLm9uKFwiY29udGV4dG1lbnVcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuaGFzUG9saWN5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5wYXRoUG9saWN5RXZlbnQoXCJjb250ZXh0bWVudVwiLCBkMy5zZWxlY3QodGhpcyksIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLnBhdGhQb2xpY3lFdmVudChcImNvbnRleHRtZW51XCIsIGQzLnNlbGVjdCh0aGlzKSwgZCk7ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAub24oXCJtb3VzZW91dFwiLCBmdW5jdGlvbihkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLmhhc1BvbGljeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQucGF0aFBvbGljeUV2ZW50KFwibW91c2VvdXRcIiwgZDMuc2VsZWN0KHRoaXMpLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5wYXRoUG9saWN5RXZlbnQoXCJtb3VzZW91dFwiLCBkMy5zZWxlY3QodGhpcyksIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLm9uKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuaGFzUG9saWN5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5wYXRoUG9saWN5RXZlbnQoXCJtb3VzZWRvd25cIiwgZDMuc2VsZWN0KHRoaXMpLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5wYXRoUG9saWN5RXZlbnQoXCJtb3VzZWRvd25cIiwgZDMuc2VsZWN0KHRoaXMpLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5vbihcIm1vdXNldXBcIiwgZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5oYXNQb2xpY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLnBhdGhQb2xpY3lFdmVudChcIm1vdXNldXBcIiwgZDMuc2VsZWN0KHRoaXMpLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5wYXRoUG9saWN5RXZlbnQoXCJtb3VzZXVwXCIsIGQzLnNlbGVjdCh0aGlzKSwgZCk7ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2FsbCh0aGlzR3JhcGguZHJhZyk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWxsZWQgd2hlbiB0aGUgZ3JhcGggaXMgdXBkYXRpbmcgZXhpc3Rpbmcgbm9kZXNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdXBkYXRlRXhpc3RpbmdOb2RlcygpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguY2lyY2xlcyA9IHRoaXMuY2lyY2xlcy5kYXRhKHRoaXNHcmFwaC5ub2RlcywgZnVuY3Rpb24oZCl7IHJldHVybiBkLmlkO30pXG4gICAgICAgICAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQudXBkYXRlQXR0cihkMy5zZWxlY3QodGhpcyksIGQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGxlZCB3aGVuIHRoZSBncmFwaCBpcyBhZGRpbmcgbmV3IG5vZGVzXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge05vZGV9ICBuZXdOb2RlcyAgTGlzdCBvZiBuZXcgbm9kZXNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdXBkYXRlTmV3Tm9kZXMobmV3Tm9kZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcztcblxuICAgICAgICAgICAgICAgIG5ld05vZGVzLmVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZC5ncmFwaCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkLmluaXRpYWxpemUodGhpc0dyYXBoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkLm5ld05vZGVBdHRyKGQzLnNlbGVjdCh0aGlzKSwgZCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL2lmIG5vZGUgZG9lc24ndCBoYXZlIGl0cyBvd24gcG9saWN5LCB1c2UgZGVmYXVsdCBmb3IgdGhlIGdyYXBoXG4gICAgICAgICAgICAgICAgbmV3Tm9kZXMub24oXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5oYXNQb2xpY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLm5vZGVQb2xpY3lFdmVudChcIm1vdXNlb3ZlclwiLCBkMy5zZWxlY3QodGhpcyksIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVQb2xpY3lFdmVudChcIm1vdXNlb3ZlclwiLCBkMy5zZWxlY3QodGhpcyksIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLm9uKFwiZGJsY2xpY2tcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuaGFzUG9saWN5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5ub2RlUG9saWN5RXZlbnQoXCJkYmxjbGlja1wiLCBkMy5zZWxlY3QodGhpcyksIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVQb2xpY3lFdmVudChcImRibGNsaWNrXCIsIGQzLnNlbGVjdCh0aGlzKSwgZCk7ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAub24oXCJjb250ZXh0bWVudVwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5oYXNQb2xpY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLm5vZGVQb2xpY3lFdmVudChcImNvbnRleHRtZW51XCIsIGQzLnNlbGVjdCh0aGlzKSwgZCk7ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGgubm9kZVBvbGljeUV2ZW50KFwiY29udGV4dG1lbnVcIiwgZDMuc2VsZWN0KHRoaXMpLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5vbihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuaGFzUG9saWN5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5ub2RlUG9saWN5RXZlbnQoXCJtb3VzZW91dFwiLCBkMy5zZWxlY3QodGhpcyksIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVQb2xpY3lFdmVudChcIm1vdXNlb3V0XCIsIGQzLnNlbGVjdCh0aGlzKSwgZCk7ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAub24oXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5oYXNQb2xpY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLm5vZGVQb2xpY3lFdmVudChcIm1vdXNlZG93blwiLCBkMy5zZWxlY3QodGhpcyksIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVQb2xpY3lFdmVudChcIm1vdXNlZG93blwiLCBkMy5zZWxlY3QodGhpcyksIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLm9uKFwibW91c2V1cFwiLCBmdW5jdGlvbihkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLmhhc1BvbGljeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQubm9kZVBvbGljeUV2ZW50KFwibW91c2V1cFwiLCBkMy5zZWxlY3QodGhpcyksIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVQb2xpY3lFdmVudChcIm1vdXNldXBcIiwgZDMuc2VsZWN0KHRoaXMpLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKHRoaXNHcmFwaC5kcmFnKTtcblxuICAgICAgICAgICAgICAgIG5ld05vZGVzLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiclwiLCBmdW5jdGlvbihkKSB7cmV0dXJuIFN0cmluZyhkLnJhZGl1cyl9KTtcblxuXG4gICAgICAgICAgICAgICAgbmV3Tm9kZXMuZWFjaChmdW5jdGlvbihkKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLmluc2VydFRpdGxlTGluZWJyZWFrcyhkMy5zZWxlY3QodGhpcyksIGQudGV4dCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUHJldmVudHMgbm9kZXMgZnJvbSBjb2xsaWRpbmdcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7bnVtYmVyfSAgYWxwaGEgICBBZmZlY3RzIGhvdyBtdWNoIGNoYW5nZVxuICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGNvbGxpc2lvbiBjYXVzZXNcbiAgICAgICAgICAgICAqIEByZXR1cm4gICAgIHtib29sZWFufSAge1doZXRoZXIgbm9kZXMgYXJlIGNvbGxpZGVkfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBkM0ZvcmNlQ29sbGlkZShhbHBoYSkge1xuICAgICAgICAgICAgXHR2YXIgdGhpc0dyYXBoID0gdGhpcyxcbiAgICAgICAgICAgIFx0XHRjb25zdHMgPSB0aGlzR3JhcGguY29uc3RzO1xuICAgICAgICAgICAgXHR2YXIgbm9kZXMgPSB0aGlzR3JhcGgubm9kZXM7XG4gICAgICAgICAgICBcdHZhciBxdWFkdHJlZSA9IGQzLmdlb20ucXVhZHRyZWUobm9kZXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgciA9IGQucmFkaXVzICsgY29uc3RzLm1heFJhZGl1cyArIGNvbnN0cy5wYWRkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbngxID0gZC54IC0gcixcbiAgICAgICAgICAgICAgICAgICAgICAgIG54MiA9IGQueCArIHIsXG4gICAgICAgICAgICAgICAgICAgICAgICBueTEgPSBkLnkgLSByLFxuICAgICAgICAgICAgICAgICAgICAgICAgbnkyID0gZC55ICsgcjtcbiAgICAgICAgICAgICAgICAgICAgcXVhZHRyZWUudmlzaXQoZnVuY3Rpb24ocXVhZCwgeDEsIHkxLCB4MiwgeTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxdWFkLnBvaW50ICYmIChxdWFkLnBvaW50ICE9PSBkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB4ID0gZC54IC0gcXVhZC5wb2ludC54LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ID0gZC55IC0gcXVhZC5wb2ludC55LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByID0gZC5yYWRpdXMgKyBxdWFkLnBvaW50LnJhZGl1cyArIGNvbnN0cy5wYWRkaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsIDwgcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA9IChsIC0gcikgLyBsICogYWxwaGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLnggLT0geCAqPSBsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZC55IC09IHkgKj0gbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YWQucG9pbnQueCArPSB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhZC5wb2ludC55ICs9IHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB4MSA+IG54MiB8fCB4MiA8IG54MSB8fCB5MSA+IG55MiB8fCB5MiA8IG55MTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUaWNrIG9mIHRoZSBkMyBmb3JjZSBzaW11bGF0aW9uXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge0QzdGljayBldmVudH0gIGUgICAgRDN0aWNrIGV2ZW50XG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7bnVtYmVyfSAgd2lkdGggIFRoZSB3aWR0aCBvZiB0aGUgc2ltdWxhdGlvblxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge251bWJlcn0gIGhlaWdodCBUaGUgaGVpZ2h0IG9mIHRoZSBzaW11bGF0aW9uXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGQzRm9yY2VUaWNrKGUsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgICAgIFx0dmFyIHRoaXNHcmFwaCA9IHRoaXMsXG4gICAgICAgICAgICBcdFx0Y29uc3RzID0gdGhpc0dyYXBoLmNvbnN0cztcblxuICAgICAgICAgICAgXHR2YXIgb2Zmc2V0ID0gY29uc3RzLmRpc3BsYXlPZmZzZXQ7XHRcbiAgICAgICAgICAgIFx0dmFyIG5vZGVzID0gdGhpc0dyYXBoLm5vZGVzO1xuICAgICAgICAgICAgXHR2YXIgcSA9IGQzLmdlb20ucXVhZHRyZWUodGhpc0dyYXBoLm5vZGVzKSxcbiAgICAgICAgICAgICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgICAgICAgICAgICBuID0gbm9kZXMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgICAgICAgICAgICAgICBxLnZpc2l0KHRoaXMuZDNGb3JjZUNvbGxpZGUobm9kZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5jaXJjbGVzLmVhY2godGhpcy5kM0ZvcmNlQ29sbGlkZSguNSkpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC54ID0gTWF0aC5tYXgoZC5yYWRpdXMgKyBvZmZzZXQsIE1hdGgubWluKHdpZHRoIC0gb2Zmc2V0IC0gZC5yYWRpdXMsIGQueCkpOyB9KVxuICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnkgPSBNYXRoLm1heChkLnJhZGl1cyArIG9mZnNldCwgTWF0aC5taW4oaGVpZ2h0IC0gb2Zmc2V0IC0gZC5yYWRpdXMsIGQueSkpOyB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5wYXRoc1xuICAgICAgICAgICAgICAgICAgICAuYXR0cigneDEnLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnNvdXJjZS54OyB9KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigneTEnLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnNvdXJjZS55OyB9KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigneDInLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnRhcmdldC54OyB9KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigneTInLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnRhcmdldC55OyB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBTdGFydHMgb24gc3RhcnQgb2YgdGhlIGZvcmNlIHNpbXVsYXRpb25cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZDNGb3JjZVN0YXJ0KCkge1xuICAgICAgICAgICAgXHR2YXIgdGhpc0dyYXBoID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgucGF0aHNcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3gxJywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5zb3VyY2UueDsgfSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3kxJywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5zb3VyY2UueTsgfSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3gyJywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC50YXJnZXQueDsgfSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3kyJywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC50YXJnZXQueTsgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsbGVkIG9uIHRoZSBlbmQgb2YgdGhlIGZvcmNlIHNpbXVsYXRpb25cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZDNGb3JjZUVuZCgpIHtcbiAgICAgICAgICAgIFx0dmFyIHRoaXNHcmFwaCA9IHRoaXM7XG4gICAgICAgICAgICBcdHRoaXNHcmFwaC5jaXJjbGVzXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdjeCcsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQueDsgfSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2N5JywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC55OyB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5wYXRocy5hdHRyKCd4MScsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuc291cmNlLng7IH0pXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd5MScsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuc291cmNlLnk7IH0pXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd4MicsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudGFyZ2V0Lng7IH0pXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd5MicsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudGFyZ2V0Lnk7IH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGN1bGF0ZXMgdGhlIHdpZHRoIGFuZCBoZWlnaHQgYm91bmRzIGZvciB0aGUgXG4gICAgICAgICAgICAgKiBmb3JjZSBzaW11bGF0aW9uXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHJldHVybiAgICAge09iamVjdH0gIHdpZHRoIGFuZCBoZWlnaHQgYXMgcHJvcGVydGllcyBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZDNGb3JjZUJvdW5kcygpIHtcbiAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gY29uc3RzLmRpc3BsYXlPZmZzZXQ7XG4gICAgICAgICAgICAgICAgdmFyIHN2Z1dpZHRoID0gJCgnI3Zpc3VhbGl6YXRpb24tZ3JhcGgnKS53aWR0aCgpO1xuICAgICAgICAgICAgICAgIHZhciBzdmdIZWlnaHQgPSAkKCcjdmlzdWFsaXphdGlvbi1ncmFwaCcpLmhlaWdodCgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gc3ZnV2lkdGg7XG4gICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IHN2Z0hlaWdodDtcbiAgICAgICAgICAgICAgICByZXR1cm4ge3dpZHRoOndpZHRoLCBoZWlnaHQ6aGVpZ2h0fTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEb2VzIGEgZDMgZm9yY2Ugc2ltdWxhdGlvblxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtGdW5jdGlvbn0gIGNhbGxiYWNrICBUaGUgY2FsbGJhY2tcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2V0Rm9yY2UoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgY29uc3RzID0gdGhpc0dyYXBoLmNvbnN0cztcblxuICAgICAgICAgICAgICAgIHZhciBub2RlcyA9IHRoaXNHcmFwaC5ub2RlcztcbiAgICAgICAgICAgICAgICB2YXIgbGlua3MgPSB0aGlzR3JhcGgubGlua3M7XG4gICAgICAgICAgICAgICAgaWYgKF8uaXNFbXB0eShub2RlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBib3VuZHMgPSB0aGlzLmQzRm9yY2VCb3VuZHMoKTtcblxuICAgICAgICAgICAgICAgIHZhciBmb3JjZSA9IGQzLmxheW91dC5mb3JjZSgpXG4gICAgICAgICAgICAgICAgICAgIC5zaXplKFtib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHRdKVxuICAgICAgICAgICAgICAgICAgICAubm9kZXMobm9kZXMpXG4gICAgICAgICAgICAgICAgICAgIC5jaGFyZ2UoZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC02MDAwO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAubGlua3MobGlua3MpO1xuXG4gICAgICAgICAgICAgICAgZm9yY2UubGlua0Rpc3RhbmNlKGJvdW5kcy53aWR0aC8zKTtcbiAgICAgICAgICAgICAgICBmb3JjZS5saW5rU3RyZW5ndGgoLjIpO1xuICAgICAgICAgICAgICAgIGZvcmNlLmdyYXZpdHkoLjIpO1xuXG4gICAgICAgICAgICAgICAgZm9yY2Uub24oJ3RpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgXHR0aGlzR3JhcGguZDNGb3JjZVRpY2suY2FsbCh0aGlzR3JhcGgsIFxuICAgICAgICAgICAgICAgIFx0XHRcdGUsIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBmb3JjZS5vbignc3RhcnQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBcdHRoaXNHcmFwaC5kM0ZvcmNlU3RhcnQuY2FsbCh0aGlzR3JhcGgpXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBmb3JjZS5vbignZW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgXHR0aGlzR3JhcGguZDNGb3JjZUVuZC5jYWxsKHRoaXNHcmFwaClcbiAgICAgICAgICAgICAgICB9KTsgXG5cblxuICAgICAgICAgICAgICAgIGZvcmNlLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgdmFyIGsgPSAwO1xuICAgICAgICAgICAgICAgIHdoaWxlICgoZm9yY2UuYWxwaGEoKSA+IDFlLTIpICYmIChrIDwgMTUwKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JjZS50aWNrKCksXG4gICAgICAgICAgICAgICAgICAgIGsgPSBrICsgMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yY2Uuc3RvcCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBcdGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFNldHMgdGhlIHBvc2l0aW9ucyB0byBiZSB0aGUgY2VudGVyIG9mIHRoZSBzY3JlZW4gaWYgXG4gICAgICAgICAgICAgKiBub3QgcHJvdmlkZWRcbiAgICAgICAgICAgICAqIGFsc28gc2V0cyB0aGUgcmFkaXVzIG9mIHRoZSBub2Rlc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZXRQb3NpdGlvbnMoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cyA9IHRoaXNHcmFwaC5jb25zdHMsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gdGhpc0dyYXBoLnN0YXRlO1xuXG4gICAgICAgICAgICAgICAgLy8gdmFyIGRvY0VsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgICAgICAgICAgIC8vICAgICBib2R5RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gdGhpc0dyYXBoLmNvbnN0cy5kaXNwbGF5T2Zmc2V0O1xuICAgICAgICAgICAgICAgIHZhciBzdmdXaWR0aCA9ICQoJyN2aXN1YWxpemF0aW9uLWdyYXBoJykud2lkdGgoKTtcbiAgICAgICAgICAgICAgICB2YXIgc3ZnSGVpZ2h0ID0gJCgnI3Zpc3VhbGl6YXRpb24tZ3JhcGgnKS5oZWlnaHQoKTtcblxuICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IHN2Z1dpZHRoIC0gKDIqb2Zmc2V0KTtcbiAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gc3ZnSGVpZ2h0IC0gKDIqb2Zmc2V0KTtcblxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgdmFyIG5vZGVzID0gdGhpc0dyYXBoLm5vZGVzO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBub2Rlc1tpXS5yYWRpdXMgPSBub2Rlc1tpXS5yYWRpdXMgfHwgdGhpc0dyYXBoLmNvbnN0cy5zdGFydFJhZGl1cztcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGVzW2ldLnggPT0gbnVsbCB8fCBub2Rlc1tpXS55ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vZGVzW2ldLnhTdGFydCA9IHdpZHRoLzIgICsgbm9kZXNbaV0ucmFkaXVzICsgb2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBub2Rlc1tpXS54ID0gd2lkdGgvMiAgKyBub2Rlc1tpXS5yYWRpdXMgKyBvZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vZGVzW2ldLnlTdGFydCA9IGhlaWdodC8yICsgbm9kZXNbaV0ucmFkaXVzICsgb2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBub2Rlc1tpXS55ID0gaGVpZ2h0LzIgKyBub2Rlc1tpXS5yYWRpdXMgKyBvZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWxsZWQgdG8gdXBkYXRlIHRoZSB2aWV3IG9mIHRoZSBncmFwaCB3aGVuXG4gICAgICAgICAgICAgKiBkYXRhIGNoYW5nZXNcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7RnVuY3Rpb259ICBjYWxsYmFjayAgVGhlIGNhbGxiYWNrXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHVwZGF0ZUdyYXBoKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cyA9IHRoaXNHcmFwaC5jb25zdHMsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gdGhpc0dyYXBoLnN0YXRlO1xuXG4gICAgICAgICAgICBcdGlmICh0aGlzR3JhcGguc3RhdGUuZGlzYWJsZVVwZGF0ZSkge1xuICAgICAgICAgICAgXHRcdHJldHVybjtcbiAgICAgICAgICAgIFx0fVxuXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVFeGlzdGluZ05vZGVzKCk7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0dzPSB0aGlzR3JhcGguY2lyY2xlcy5lbnRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpO1xuXG4gICAgICAgICAgICBcdC8vIGNvbnNvbGUubG9nKCd1cGRhdGUnLCBuZXdHcyk7XG4gICAgICAgICAgICAgICAgbmV3R3MuY2xhc3NlZChjb25zdHMuY2lyY2xlR0NsYXNzLCB0cnVlKTtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlTmV3Tm9kZXMobmV3R3MpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIG9sZCBub2Rlc1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5jaXJjbGVzLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5pbml0Rm9yY2UgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLnNldEZvcmNlKGZ1bmN0aW9uKCkge1xuICAgIFx0ICAgICAgICAgICAgICAgIHRoaXNHcmFwaC51cGRhdGVOZXdOb2Rlcy5jYWxsKHRoaXNHcmFwaCwgbmV3R3MpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuaW5pdEZvcmNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVOZXdOb2RlcyhuZXdHcyk7XG5cdCAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5wYXRocyA9IHRoaXNHcmFwaC5wYXRocy5kYXRhKHRoaXNHcmFwaC5saW5rcywgZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcoZC5zb3VyY2UuaWQpICsgXCIrXCIgKyBTdHJpbmcoZC50YXJnZXQuaWQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciBwYXRocyA9IHRoaXNHcmFwaC5wYXRocztcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUV4aXN0aW5nUGF0aHMocGF0aHMpO1xuXG4gICAgICAgICAgICAgICAgdmFyIG5ld3BhdGhzID0gcGF0aHMuZW50ZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdtYXJrZXItZW5kJywndXJsKCNlbmQtYXJyb3cpJylcbiAgICAgICAgICAgICAgICAuY2xhc3NlZChcImxpbmtcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVOZXdQYXRocyhuZXdwYXRocyk7XG5cbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgb2xkIGxpbmtzXG4gICAgICAgICAgICAgICAgcGF0aHMuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBcdGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgR3JhcGg6IEdyYXBoXG4gICAgICAgIH1cbn1dKTtcblxuXG4iLCIvKipcbiAqIFRoZSBncmFwaCB0aGF0IGlzIHVzZWQgc3BlY2lmaWNhbGx5IGZvciB0aGUgdmlzdWFsaXphdGlvbiB0YWIuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdHcmFwaE1vZHVsZScpXG4gICAgLmZhY3RvcnkoJ1Zpc3VhbGl6ZXJHcmFwaCcsIFsnR3JhcGgnLCBmdW5jdGlvbiAoR3JhcGgpIHtcbiAgICBcdGNsYXNzIFZpc3VhbGl6ZXJHcmFwaCBleHRlbmRzIEdyYXBoLkdyYXBoIHtcbiAgICBcdFx0LyoqXG4gICAgXHRcdCAqIENvbnN0cnVjdHMgdGhlIG9iamVjdC5cbiAgICBcdFx0ICpcbiAgICBcdFx0ICogQHBhcmFtICAge0hUTUwgU1ZHfSAgc3ZnICAgICAgICAgICAgIFRoZSBzdmcgdGhhdCB3aWxsIFxuICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvbGQgdGhlIGdyYXBoXG4gICAgICAgICAgICAgKiBAcGFyYW0gICB7QXJyYXl9ICBub2RlcyAgIFx0XHQgICAgTGlzdCBvZiBub2Rlc1xuICAgICAgICAgICAgICogQHBhcmFtICAge0FycmF5fSAgbGlua3MgICBcdFx0ICAgIExpc3Qgb2YgbGlua3NcbiAgICBcdFx0ICogQHBhcmFtICAge0RhdGFTb3VyY2V9ICBkYXRhU291cmNlICAgIFRoZSBkYXRhIHNvdXJjZVxuICAgIFx0XHQgKiBAcGFyYW0gICB7T2JqZWN0fSAgY2hpbGRyZW5fc3RydWN0ICAgVGhlIGNoaWxkcmVuIHN0cnVjdHVyZVxuICAgIFx0XHQgKiBAcGFyYW0gICB7T2JqZWN0fSAgYW5jZXN0b3JzX3N0cnVjdCAgVGhlIGFuY2VzdG9ycyBzdHJ1Y3R1cmVcbiAgICBcdFx0ICovXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcihzdmcsIG5vZGVzLCBsaW5rcywgZGF0YVNvdXJjZSwgY2hpbGRyZW5fc3RydWN0LCBhbmNlc3RvcnNfc3RydWN0KSB7XG4gICAgICAgICAgICAgICAgc3VwZXIoc3ZnLCBub2RlcywgbGlua3MpO1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgLy9ob2xkcyBjdXJyZW50IHRyYW5zaXRpb25zIHRoYXQgYXJlIG9jY3VyaW5nXG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLnN0YXRlLnRyYW5zaXRpb24gPSBbXTtcbiAgICAgICAgICAgICAgICAvL01pbiBkaXN0YW5jZSBiZXR3ZWVuIG5vZGVzIHdoZW4gc3Bhd25pbmcgcmFuZG9tbHlcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguY29uc3RzLmVkZ2VfYnVmZmVyID0gMjAwO1xuICAgICAgICAgICAgICAgIC8vU2l6ZSByZWR1Y3Rpb24gYXMgeW91IGdvIHRocm91Z2ggbGV2ZWxzIGluIG5vZGVzXG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmNvbnN0cy5yYWRpdXNEZWNheSA9IDE7XG4gICAgICAgICAgICAgICAgLy9Dc3MgY2xhc3MgZm9yIG5vZGVzIHRoYXQgYXJlIGNvbnRhaW5lcnNcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguY29uc3RzLmNvbnRhaW5lckNsYXNzID0gJ2NvbnRhaW5lcic7XG5cbiAgICAgICAgICAgICAgICAvL2RhdGFTb3VyY2UgaG9sZHMgdGhlIHNlcnZlciBkYXRhIGFuZCBtZXRob2RzIGZvclxuICAgICAgICAgICAgICAgIC8vY29udmVydGluZyBpdCB0byBkYXRhIGZvciB0aGUgZ3JhcGhcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguZGF0YVNvdXJjZSA9IGRhdGFTb3VyY2U7XG4gICAgICAgICAgICAgICAgLy9IaWVyYXJjaHkgb2YgY2hpbGRyZW4gZm9yIG5vZGVzXG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmNoaWxkcmVuX3N0cnVjdCA9IGNoaWxkcmVuX3N0cnVjdDtcbiAgICAgICAgICAgICAgICAvL0hpZXJhcmNoeSBvZiBhbmNlc3RvcnMgZm9yIG5vZGVzXG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmFuY2VzdG9yc19zdHJ1Y3QgPSBhbmNlc3RvcnNfc3RydWN0O1xuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy9EcmFnIGJlaGF2aW9yIGZvciBub2Rlc1xuICAgICAgICAgICAgICAgIHZhciBkcmFnID0gZDMuYmVoYXZpb3IuZHJhZygpXG4gICAgICAgICAgICAgICAgICAgIC5vcmlnaW4oZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7eDogZC54LCB5OiBkLnl9O1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAub24oXCJkcmFnc3RhcnRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5vbihcImRyYWdcIiwgZnVuY3Rpb24oYXJncyl7XG4gICAgICAgICAgICAgICAgICAgIFx0ZDMuc2VsZWN0KCB0aGlzKS5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKCBkLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC54ICs9IGQzLmV2ZW50LmR4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQueSArPSBkMy5ldmVudC5keTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBbIGQueCxkLnkgXSArIFwiKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLnVwZGF0ZUdyYXBoKCk7XHRcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLm9uKFwiZHJhZ2VuZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguZHJhZyA9IGRyYWc7XG5cbiAgICAgICAgICAgICAgICAvL1BhbiBhbmQgWm9vbSBiZWhhdmlvciBmb3IgdGhlIGdyYXBoXG4gICAgICAgICAgICAgICAgdmFyIHpvb20gPSBkMy5iZWhhdmlvci56b29tKClcbiAgICAgICAgICAgICAgICAgICAgLm9uKFwiem9vbVwiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQzLmV2ZW50LnNvdXJjZUV2ZW50ICE9IG51bGwgJiYgZDMuZXZlbnQuc291cmNlRXZlbnQuY3RybEtleSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC56b29tZWQuY2FsbCh0aGlzR3JhcGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5vbihcInpvb21zdGFydFwiLCBmdW5jdGlvbihkLCBpKXtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmRyYWdTdmcgPSB6b29tO1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5zdmcuY2FsbCh6b29tKS5vbihcImRibGNsaWNrLnpvb21cIiwgbnVsbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsbGVkIHdpdGggbm8gYXJncyB3aGVuIHRoZSBncmFwaCBoYXMgYSB6b29tIGFjdGlvblxuICAgICAgICAgICAgICogQ2FuIGFsc28gYmUgY2FsbGVkIHdpdGggYXJncyB0byBmb3JjZSBhIHpvb20gb3IgcGFuIFxuICAgICAgICAgICAgICogZXZlbnQgZm9yIHRoZSBncmFwaC5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7QXJyYXl9ICAgdHJhbnNsYXRlICBUaGUgYW1vdW50IHRvIHRyYW5zbGF0ZVxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge251bWJlcn0gIHNjYWxlICAgICAgVGhlIGFtb3VudCB0byBzY2FsZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB6b29tZWQodHJhbnNsYXRlLCBzY2FsZSl7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXNHcmFwaC5zdGF0ZS5yaWdodENsaWNrID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmp1c3RTY2FsZVRyYW5zR3JhcGggPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGUgIT0gbnVsbCAmJiBzY2FsZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB6b29tID0gdGhpc0dyYXBoLmRyYWdTdmc7XG4gICAgICAgICAgICAgICAgICAgIHpvb20uc2NhbGUoc2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICB6b29tLnRyYW5zbGF0ZSh0cmFuc2xhdGUpO1xuICAgICAgICAgICAgICAgICAgICAvL2NyZWF0aW5nIG5hbWVzIHRvIHByZXZlbnQgdHJhbnNpdGlvbiBjb25mbGljdHNcbiAgICAgICAgICAgICAgICAgICAgdmFyIHpvb21TZXRDYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBcdHpvb20uc2NhbGUoc2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICBcdHpvb20udHJhbnNsYXRlKHRyYW5zbGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZV9uYW1lID0gXCJ6b29tXCIgKyB0cmFuc2xhdGU7XG4gICAgICAgICAgICAgICAgICAgIGQzLnNlbGVjdChcIi5cIiArIHRoaXMuY29uc3RzLmdyYXBoQ2xhc3MpLnRyYW5zaXRpb24odHJhbnNsYXRlX25hbWUpLmRlbGF5KDEwMCkuZHVyYXRpb24oNzUwKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIHpvb20udHJhbnNsYXRlKCkgKyAnKSBzY2FsZSgnICsgem9vbS5zY2FsZSgpICsgJyknKS5lYWNoKFwiZW5kXCIsIHpvb21TZXRDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGlmICh0aGlzR3JhcGguc3RhdGUuY2FuWm9vbSkge1xuICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3QoXCIuXCIgKyB0aGlzLmNvbnN0cy5ncmFwaENsYXNzKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB0aGlzR3JhcGguZHJhZ1N2Zy50cmFuc2xhdGUoKSArIFwiKSBzY2FsZShcIiArdGhpc0dyYXBoLmRyYWdTdmcuc2NhbGUoKSArIFwiKVwiKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWxsZWQgd2hlbiB0aGUgd2luZG93IHJlc2l6ZXNcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7SFRNTCBTVkd9ICBzdmcgICAgVGhlIHN2ZyB0byByZXNpemVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgb25XaW5kb3dSZXNpemUoc3ZnKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdmFyIGRvY0VsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICBib2R5RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSAkKCcjdmlzdWFsaXphdGlvbi1ncmFwaCcpLm9mZnNldCgpO1xuICAgICAgICAgICAgICAgIHZhciBkaXZXaWR0aCA9ICQoJyN2aXN1YWxpemF0aW9uLWdyYXBoJykud2lkdGgoKTtcbiAgICAgICAgICAgICAgICB2YXIgZGl2SGVpZ2h0ID0gJCgnI3Zpc3VhbGl6YXRpb24tZ3JhcGgnKS5oZWlnaHQoKTtcbiAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gYm9keUVsLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICBzdmcuYXR0cihcIndpZHRoXCIsIGRpdldpZHRoKS5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCAtIG9mZnNldC50b3AgLSAyMCk7XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsbGVkIHdoZW4gdGhlIHNlcnZlciBzZW5kcyB1cGRhdGVkIGRhdGEgZm9yIHRoZSBsaW5rc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB1cGRhdGVMaW5rRGF0YSgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcztcbiAgICAgICAgICAgICAgICB2YXIgbm9kZV9uYW1lc19zZXQgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXNHcmFwaC5ub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBub2RlX25hbWVzX3NldC5wdXNoKHRoaXNHcmFwaC5ub2Rlc1tpXS5pZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHJldERhdGEgPSB0aGlzR3JhcGguZGF0YVNvdXJjZS5nZXRGbG93QmV0d2VlblNldChub2RlX25hbWVzX3NldCk7XG4gICAgICAgICAgICAgICAgdmFyIGxpbmtEYXRhID0gcmV0RGF0YS5saW5rRGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgubGlua3MgPSB0aGlzR3JhcGguZGF0YVNvdXJjZS5wcm9jZXNzTGlua0RhdGEobGlua0RhdGEsIHRoaXNHcmFwaC5ub2Rlcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0Tm9kZXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRMaW5rcygpO1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC51cGRhdGVHcmFwaCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBHcmFwaDogVmlzdWFsaXplckdyYXBoXG4gICAgICAgIH1cbn1dKTtcblxuXG5cbiIsIi8qKlxuICogVGhlIGJhc2UgY2xhc3MgZm9yIGxpbmsgb2JqZWN0cyBmb3IgdGhlIGdyYXBoLlxuICogU3VwcG9ydHMgcG9saWNpZXMuXG4gKiBcbiAqIFRvIHdyaXRlIHlvdXIgb3duIGxpbmsgb2JqZWN0LCBjcmVhdGUgYSBuZXcgZmFjdG9yeSB0aGF0IHVzZXMgdGhlIGxpbmtcbiAqIHlvdSB3YW50IHRvIGluaGVyaXQgYXMgYSBkZXBlbmRlbmN5LCBhbmQgZXh0ZW5kIGl0cyBsaW5rIGNsYXNzLiBcbiAqIFJldHVybiB0aGUgY2xhc3Mgb2JqZWN0IHdpdGggTGluayBhcyBrZXlcbiAqIFxuICovXG5hbmd1bGFyLm1vZHVsZSgnTGlua01vZHVsZScpXG4gICAgLmZhY3RvcnkoJ0xpbmsnLCBbZnVuY3Rpb24gKCkge1xuICAgIFx0Y2xhc3MgTGluayB7XG4gICAgXHRcdC8qKlxuICAgIFx0XHQgKiBDb25zdHJ1Y3RzIHRoZSBvYmplY3QuXG4gICAgXHRcdCAqXG4gICAgXHRcdCAqIEBwYXJhbSAgICAgIHtOb2RlfSAgc291cmNlTm9kZSAgVGhlIHNvdXJjZSBub2RlXG4gICAgXHRcdCAqIEBwYXJhbSAgICAgIHtOb2RlfSAgdGFyZ2V0Tm9kZSAgVGhlIHRhcmdldCBub2RlXG4gICAgXHRcdCAqL1xuXHRcdFx0Y29uc3RydWN0b3Ioc291cmNlTm9kZSwgdGFyZ2V0Tm9kZSkge1xuXHRcdFx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZU5vZGU7XG5cdFx0XHRcdHRoaXMudGFyZ2V0ID0gdGFyZ2V0Tm9kZTtcblx0XHRcdFx0dGhpcy5wb2xpY3kgPSBudWxsO1xuXHRcdFx0XHR0aGlzLmhhc1BvbGljeSA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLnBhdGhQb2xpY2llcyA9IFtdO1xuXHRcdFx0XHR0aGlzLmdyYXBoID0gbnVsbDtcblx0XHRcdFx0dGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHQvKipcblx0XHRcdCAqIENhbGxlZCB3aGVuIGEgbGluayBpcyBhZGRlZCB0byB0aGUgZ3JhcGhcblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0gICAgICB7R3JhcGh9ICBncmFwaCAgIFRoZSBncmFwaCBpdCBpcyBhZGRlZCB0b1xuXHRcdFx0ICovXG5cdFx0XHRpbml0aWFsaXplKGdyYXBoKSB7XG5cdFx0XHRcdGlmICh0aGlzLmluaXRpYWxpemVkID09IGZhbHNlKSB7XG5cdFx0XHRcdFx0dGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cdFx0XHRcdFx0dGhpcy5ncmFwaCA9IGdyYXBoO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQ2FsbGVkIGR1cmluZyB0aGUgdXBkYXRlIGdyYXBoIGZvciBleGlzdGluZyBsaW5rc1xuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSAgICAgIHtEM09iamVjdH0gIGQzcGF0aCAgVGhlIGQzIHBhdGhcblx0XHRcdCAqL1xuXHRcdFx0dXBkYXRlQXR0cihkM3BhdGgpIHtcblx0XHRcdFx0ZDNwYXRoLnN0eWxlKCdtYXJrZXItZW5kJywgJ3VybCgjZW5kLWFycm93KScpXG5cdFx0ICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGFycm93UGF0aCk7XG5cdFx0XHR9XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQ2FsbGVkIGR1cmluZyB0aGUgZmlyc3QgdXBkYXRlIGdyYXBoIGZvciBhIGxpbmtcblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0gICAgICB7RDNPYmplY3R9ICBkM3BhdGggIFRoZSBkMyBwYXRoXG5cdFx0XHQgKi9cblx0XHRcdG5ld1BhdGhBdHRyKGQzcGF0aCkge1xuXHRcdFx0XHRkM3BhdGguYXR0cignZCcsIGFycm93UGF0aCk7XG5cdFx0XHR9XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQ2FsY3VsYXRlcyB0aGUgYXJyb3cgcGF0aFxuXHRcdFx0ICpcblx0XHRcdCAqIEByZXR1cm4gICAgIHtzdHJpbmd9ICBUaGUgcGF0aCB0byBkcmF3XG5cdFx0XHQgKi9cblx0XHQgICAgYXJyb3dQYXRoKCkge1xuXHRcdCAgICBcdHZhciBkID0gdGhpcztcblx0XHQgICAgICAgIHZhciBkeCA9IGQudGFyZ2V0LnggLSBkLnNvdXJjZS54LFxuXHRcdCAgICAgICAgICAgIGR5ID0gZC50YXJnZXQueSAtIGQuc291cmNlLnksXG5cdFx0ICAgICAgICAgICAgZHIgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuXHRcdCAgICAgICAgcmV0dXJuIFwiTVwiICsgZC5zb3VyY2UueCArIFwiLFwiICsgZC5zb3VyY2UueSArIFwiQVwiICsgZHIgKyBcIixcIiArIGRyICsgXCIgMCAwLDEgXCIgKyBkLnRhcmdldC54ICsgXCIsXCIgKyBkLnRhcmdldC55O1xuXHRcdCAgICB9XG5cblx0XHQgICAgLyoqXG5cdFx0ICAgICAqIFVzZWQgdG8gaW5zdGFsbCBwb2xpY2llcyB0aGF0IGFyZSBjYWxsZWQgd2hlbiB0aGlzXG5cdFx0ICAgICAqIGxpbmsgaGFzIGEgbW91c2UgZXZlbnRcblx0XHQgICAgICpcblx0XHQgICAgICogQHBhcmFtICAgICAge1BvbGljeX0gIHBvbGljeSAgVGhlIHBvbGljeSB0byBpbnN0YWxsXG5cdFx0ICAgICAqL1xuXHRcdFx0aW5zdGFsbFBhdGhQb2xpY3kocG9saWN5KSB7XG5cdFx0XHRcdHRoaXMucGF0aFBvbGljaWVzLnB1c2gocG9saWN5KTtcblx0XHRcdFx0cG9saWN5LmluaXRpYWxpemUodGhpcy5ncmFwaCk7XG5cdFx0XHR9XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogVXNlZCB0byB1bmluc3RhbGwgcG9saWN5IGZvciB0aGlzIGxpbmtcblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0gICAgICB7UG9saWN5fSAgcG9saWN5UmVtb3ZlICBUaGUgcG9saWN5IHRvIHJlbW92ZVxuXHRcdFx0ICovXG5cdFx0XHR1bmluc3RhbGxQYXRoUG9saWN5KHBvbGljeVJlbW92ZSkge1xuXHRcdFx0XHR2YXIgcG9saWN5UmVtb3ZlTmFtZTtcblx0XHRcdFx0aWYgKHR5cGVvZiBwb2xpY3lSZW1vdmUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0cG9saWN5UmVtb3ZlTmFtZSA9IHBvbGljeVJlbW92ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwb2xpY3lSZW1vdmVOYW1lID0gcG9saWN5UmVtb3ZlLnBvbGljeU5hbWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Xyh0aGlzR3JhcGgucGF0aFBvbGljaWVzKS5mb3JFYWNoKGZ1bmN0aW9uKHBvbGljeSwgaW5kZXgpIHtcblx0XHRcdFx0XHRpZiAocG9saWN5LnBvbGljeU5hbWUgPT09IHBvbGljeVJlbW92ZU5hbWUpIHtcblx0XHRcdFx0XHRcdHRoaXNHcmFwaC5wYXRoUG9saWNpZXMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvKipcblx0XHRcdCAqIENhbGxlZCB3aGVuIHRoZXJlIGlzIGEgbW91c2UgZXZlbnQgZm9yIHRoaXMgcGF0aFxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSAgICAgIHtzdHJpbmd9ICBldmVudCAgICAgVGhlIG1vdXNlIGV2ZW50XG5cdFx0XHQgKiBAcGFyYW0gICAgICB7RDNPYmplY3R9ICBkM3BhdGggIFRoZSBkMyBwYXRoXG5cdFx0XHQgKiBAcGFyYW0gICAgICB7T2JqZWN0fSAgZCAgICAgICAgIFRoZSBtYXRjaGluZyBsaW5rIG9iamVjdFxuXHRcdFx0ICovXG5cdFx0XHRwYXRoUG9saWN5RXZlbnQoZXZlbnQsIGQzcGF0aCwgZCkge1xuXHRcdFx0XHR2YXIgdGhpc0dyYXBoID0gdGhpcztcblx0XHRcdFx0XyhkLnBhdGhQb2xpY2llcykuZm9yRWFjaChmdW5jdGlvbihwb2xpY3kpIHtcblx0XHRcdFx0XHRwb2xpY3lbZXZlbnRdKGQzbm9kZSwgZCk7XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRMaW5rOiBMaW5rLFxuXHRcdH1cbn1dKTtcblxuXG5cblxuXG5cbiIsIi8qKlxuICogVGhlIGxpbmsgdGhhdCBpcyB1c2VkIHNwZWNpZmljYWxseSBmb3IgdGhlIHZpc3VhbGl6YXRpb24gdGFiLlxuICovXG5hbmd1bGFyLm1vZHVsZSgnTGlua01vZHVsZScpXG4gICAgLmZhY3RvcnkoJ1Zpc3VhbGl6ZXJMaW5rJywgWydMaW5rJywgZnVuY3Rpb24gKExpbmspIHtcblx0XHRjbGFzcyBWaXN1YWxpemVyTGluayBleHRlbmRzIExpbmsuTGluayB7XG5cdFx0XHQvKipcblx0XHRcdCAqIENvbnN0cnVjdHMgdGhlIG9iamVjdC5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0gICAgICB7Tm9kZX0gIHNvdXJjZU5vZGUgIFRoZSBzb3VyY2Ugbm9kZVxuXHRcdFx0ICogQHBhcmFtICAgICAge05vZGV9ICB0YXJnZXROb2RlICBUaGUgdGFyZ2V0IG5vZGVcblx0XHRcdCAqIEBwYXJhbSAgICAgIHtudW1iZXJ9ICB3ZWlnaHQgICAgVGhlIHdlaWdodCBvZiB0aGUgbGlua1xuXHRcdFx0ICovXG5cdFx0ICAgIGNvbnN0cnVjdG9yKHNvdXJjZU5vZGUsIHRhcmdldE5vZGUsIHdlaWdodCkge1xuXHRcdCAgICAgICAgc3VwZXIoc291cmNlTm9kZSwgdGFyZ2V0Tm9kZSk7XG5cdFx0ICAgICAgICB0aGlzLndlaWdodCA9IHdlaWdodDtcblx0XHQgICAgICAgIC8vQ291bnQgaXMgdXNlZCB0byBrZWVwIHRyYWNrIG9mIGhvdyBtYW55XG5cdFx0ICAgICAgICAvL3BhdGhzIHRvIGl0cyBzdWJub2RlcyB0aGVyZSBhcmVcblx0XHQgICAgICAgIC8vaW4gb3JkZXIgdG8gY2FsY3VsYXRlIGF2ZXJhZ2UgdHJhZmZpY1xuXHRcdCAgICAgICAgdGhpcy5jb3VudCA9IDE7XG5cdFx0ICAgIH1cblxuXHRcdCAgICAvKipcblx0XHQgICAgICogSW5jcmVhc2VzIHRoZSBjb3VudCBvZiB0aGUgbGlua1xuXHRcdCAgICAgKiBVU2VkIHRvIGtlZXAgdHJhY2sgb2YgaG93IG1hbnkgcGF0aHMgdG8gaXRzIHN1Ym5vZGVzXG5cdFx0ICAgICAqIHRoZXJlIGFyZSBpbiBvcmRlciB0byBjYWxjdWxhdGUgYXZlcmFnZSB0cmFmZmljXG5cdFx0ICAgICAqL1xuXHRcdCAgICBpbmNyZWFzZUNvdW50KCkge1xuXHRcdCAgICAgICAgdGhpcy5jb3VudCArPSAxO1xuXHRcdCAgICB9XG5cblx0XHQgICAgLyoqXG5cdFx0ICAgICAqIENhbGN1bGF0ZXMgd2hlcmUgdG8gcGxhY2UgcXRpcCBmb3Jcblx0XHQgICAgICpcblx0XHQgICAgICogQHJldHVybiAgICAge09iamVjdH0gIE9iamVjdCB3aXRoIHFUaXAgc2V0dGluZ3Ncblx0XHQgICAgICovXG5cdFx0ICAgIHF0aXBIZWxwZXIoKSB7XG5cdFx0ICAgIFx0dmFyIHJldDtcblx0XHQgICAgXHR2YXIgZCA9IHRoaXM7XG5cdFx0ICAgIFx0dmFyIGR4ID0gKGQudGFyZ2V0LnggLSBkLnNvdXJjZS54KSAvIDIsXG5cdFx0ICAgICAgICAgICAgZHkgPSAoZC50YXJnZXQueSAtIGQuc291cmNlLnkpIC8gMjtcblx0XHQgICAgXHRpZiAoZC5zb3VyY2UueCA8IGQudGFyZ2V0LngpIHtcblx0ICAgIFx0XHRcdHJldCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG15OiAndG9wIGNlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdDogJ2NlbnRlciBjZW50ZXInLCAvLyBhdCB0aGUgYm90dG9tIHJpZ2h0IG9mLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IFtkeCwgZHldLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRqdXN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcdHk6IDEwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblx0XHQgICAgXHR9IGVsc2Uge1xuXHQgICAgXHRcdFx0cmV0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXk6ICdib3R0b20gY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0OiAnY2VudGVyIGNlbnRlcicsIC8vIGF0IHRoZSBib3R0b20gcmlnaHQgb2YuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogW2R4LCBkeV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGp1c3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0eTogLTEwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblx0XHQgICAgXHR9XG5cdFx0ICAgIFx0cmV0dXJuIHJldDtcblx0XHQgICAgfVxuXG5cdFx0ICAgIC8qKlxuXHRcdFx0ICogQ2FsbGVkIHdoZW4gYSBsaW5rIGlzIGFkZGVkIHRvIHRoZSBncmFwaFxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSAgICAgIHtHcmFwaH0gIGdyYXBoICAgVGhlIGdyYXBoIGl0IGlzIGFkZGVkIHRvXG5cdFx0XHQgKi9cblx0XHRcdGluaXRpYWxpemUoZ3JhcGgpIHtcblx0XHRcdFx0aWYgKHRoaXMuaW5pdGlhbGl6ZWQgPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRzdXBlci5pbml0aWFsaXplKGdyYXBoKTtcblx0XHRcdFx0XHR2YXIgc3RhdGUgPSBncmFwaC5zdGF0ZS5WaXN1YWxpemVyTGluaztcblx0XHRcdFx0XHRpZiAoc3RhdGUgPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0c3RhdGUgPSBncmFwaC5zdGF0ZS5WaXN1YWxpemVyTGluayA9IHt9O1xuXHRcdFx0XHRcdFx0c3RhdGUubWF4V2VpZ2h0ID0gbnVsbDtcblx0XHRcdFx0XHRcdHN0YXRlLnVzZUF2Z1dlaWdodCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMudXBkYXRlTWF4V2VpZ2h0KCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBTZXRzIHdoZXRoZXIgdGhlIGdyYXBoIHNob3VsZCB1c2UgYXZnIHdlaWdodFxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSAgICAgIHtib29sZWFufSAgdmFsICAgICBUaGUgdmFsdWUgdG8gc2V0IHRvXG5cdFx0XHQgKi9cblx0XHRcdHNldFVzZUF2Z1dlaWdodCh2YWwpIHtcblx0XHQgICAgICAgIHRoaXMuZ3JhcGguc3RhdGUuVmlzdWFsaXplckxpbmsudXNlQXZnV2VpZ2h0ID0gISF2YWw7XG5cdFx0ICAgIH1cblxuXHRcdCAgICAvKipcblx0XHQgICAgICogU2V0cyB0aGUgd2VpZ2h0IG9mIHRoaXMgbGlua1xuXHRcdCAgICAgKlxuXHRcdCAgICAgKiBAcGFyYW0gICAgICB7bnVtYmVyfSAgd2VpZ2h0ICBUaGUgd2VpZ2h0IHRvIHNldCB0b1xuXHRcdCAgICAgKi9cblx0XHQgICAgc2V0V2VpZ2h0KHdlaWdodCkge1xuXHRcdCAgICAgICAgdGhpcy53ZWlnaHQgPSB3ZWlnaHQ7XG5cdFx0ICAgIH1cblxuXHRcdCAgICAvKipcblx0XHQgICAgICogR2V0cyB0aGUgcmF3IHdlaWdodC5cblx0XHQgICAgICpcblx0XHQgICAgICogQHJldHVybiAgICAge251bWJlcn0gIFRoZSByYXcgd2VpZ2h0LlxuXHRcdCAgICAgKi9cblx0XHQgICAgZ2V0UmF3V2VpZ2h0KCkge1xuXHRcdCAgICAgICAgcmV0dXJuIHRoaXMud2VpZ2h0OyBcblx0XHQgICAgfVxuXG5cdFx0ICAgIC8qKlxuXHRcdCAgICAgKiBHZXRzIHRoZSB3ZWlnaHQgdmFsdWUgb2YgdGhlIGxpbmssIGRlcGVuZGluZyBvbiB0aGVcblx0XHQgICAgICogdXNlQXZnV2VpZ3RoIHNldHRpbmdcblx0XHQgICAgICpcblx0XHQgICAgICogQHJldHVybiAgICAge251bWJlcn0gIFRoZSB3ZWlnaHQuXG5cdFx0ICAgICAqL1xuXHRcdCAgICBnZXRXZWlnaHQoKSB7XG5cdFx0ICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaCxcblx0XHQgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5WaXN1YWxpemVyTGluaztcblxuXHRcdCAgICAgICAgaWYgKHN0YXRlLnVzZUF2Z1dlaWdodCkge1xuXHRcdCAgICAgICAgICAgIHZhciB3ZWlnaHQgPSB0aGlzLndlaWdodCAvIHRoaXMuY291bnQ7XG5cdFx0ICAgICAgICAgICAgcmV0dXJuIHdlaWdodDtcblx0XHQgICAgICAgIH1cblx0XHQgICAgICAgIHJldHVybiB0aGlzLndlaWdodDtcblx0XHQgICAgfVxuXG5cdFx0ICAgIC8qKlxuXHRcdCAgICAgKiBVcGRhdGVzIHRoZSBtYXggd2VpZ2h0IG9mIHRoZSBncmFwaFxuXHRcdCAgICAgKi9cblx0XHQgICAgdXBkYXRlTWF4V2VpZ2h0ICgpIHtcblx0XHQgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoLFxuXHRcdCAgICAgICAgICAgIHN0YXRlID0gdGhpc0dyYXBoLnN0YXRlLlZpc3VhbGl6ZXJMaW5rO1xuXG5cdFx0ICAgICAgICB2YXIgbWF4TGluayA9IF8ubWF4QnkodGhpc0dyYXBoLmxpbmtzLCBmdW5jdGlvbihsKSB7XG5cdFx0ICAgICAgICBcdGlmIChsLmdyYXBoICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdHJldHVybiBsLmdldFdlaWdodCgpO1xuXHRcdCAgICAgICAgXHR9XG5cdFx0ICAgICAgICBcdHJldHVybiAwO1xuXHRcdCAgICAgICAgfSk7XG5cdFx0ICAgICAgICBzdGF0ZS5tYXhXZWlnaHQgPSBtYXhMaW5rLmdldFdlaWdodCgpO1xuXHRcdCAgICB9XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQ2FsbGVkIGR1cmluZyB0aGUgdXBkYXRlIGdyYXBoIGZvciBleGlzdGluZyBsaW5rc1xuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSAgICAgIHtEM09iamVjdH0gIGQzcGF0aCAgVGhlIGQzIHBhdGhcblx0XHRcdCAqIEBwYXJhbSAgICAgIHtMaW5rfSAgXHQgICBkICAgICAgIE1hdGNoaW5nIExpbmsgT2JqZWN0ICAgICAgIFxuXHRcdFx0ICovXG5cdFx0XHR1cGRhdGVBdHRyKGQzcGF0aCwgZCkge1xuXHRcdCAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGgsXG5cdFx0ICAgICAgICAgICAgc3RhdGUgPSB0aGlzR3JhcGguc3RhdGUuVmlzdWFsaXplckxpbms7XG5cdFx0ICAgICAgICB0aGlzLnVwZGF0ZU1heFdlaWdodCgpO1xuXHQgICAgICAgICAgICB2YXIgY29sb3JTY2FsZSA9IGQzLnNjYWxlLmxpbmVhcigpXG5cdCAgICAgICAgICAgICAgICAuZG9tYWluKFswLCBzdGF0ZS5tYXhXZWlnaHRdKVxuXHQgICAgICAgICAgICAgICAgLnJhbmdlKFtcIiNmZmIzNjZcIiwgXCIjRjkyNjA2XCJdKTtcblx0ICAgICAgICAgICAgc3RhdGUuY29sb3JTY2FsZSA9IGNvbG9yU2NhbGU7XG5cdFx0XHRcdGQzcGF0aC5zdHlsZSgnbWFya2VyLWVuZCcsICd1cmwoI2VuZC1hcnJvdyknKVxuXHRcdCAgICAgICAgICAgIC5jbGFzc2VkKHRoaXNHcmFwaC5jb25zdHMuc2VsZWN0ZWRDbGFzcywgZnVuY3Rpb24oZCl7XG5cdFx0ICAgICAgICAgICAgICAgIHJldHVybiBkID09PSBzdGF0ZS5zZWxlY3RlZEVkZ2U7XG5cdFx0ICAgICAgICAgICAgfSlcblx0XHQgICAgICAgICAgICAuYXR0cihcImRcIiwgdGhpcy5hcnJvd1BhdGguY2FsbChkKSlcblx0XHQgICAgICAgICAgICAudHJhbnNpdGlvbihcImV4aXN0aW5nUGF0aFRyYW5zaXRpb25cIilcblx0XHQgICAgICAgICAgICAuZHVyYXRpb24oNzUwKVxuXHRcdCAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIGZ1bmN0aW9uKGQpe1xuXHRcdCAgICAgICAgICAgICAgICB2YXIgYyA9IGNvbG9yU2NhbGUoZC5nZXRXZWlnaHQoKSk7XG5cdFx0ICAgICAgICAgICAgICAgIHJldHVybiBjO1xuXHRcdCAgICAgICAgICAgIH0pO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvKipcblx0XHRcdCAqIENhbGxlZCBkdXJpbmcgdGhlIGZpcnN0IHVwZGF0ZSBncmFwaCBmb3IgdGhpcyBsaW5rXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtICAgICAge0QzT2JqZWN0fSAgZDNwYXRoICBUaGUgZDMgcGF0aFxuXHRcdFx0ICogQHBhcmFtICAgICAge0xpbmt9ICBcdCAgIGQgICAgICAgTWF0Y2hpbmcgTGluayBPYmplY3Rcblx0XHRcdCAqL1xuXHRcdFx0bmV3UGF0aEF0dHIoZDNwYXRoLCBkKSB7XG5cdFx0ICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaCxcblx0XHQgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5WaXN1YWxpemVyTGluaztcblx0ICAgICAgICAgICAgdGhpcy51cGRhdGVNYXhXZWlnaHQoKTtcblx0ICAgICAgICAgICAgdmFyIGNvbG9yU2NhbGUgPSBkMy5zY2FsZS5saW5lYXIoKVxuXHQgICAgICAgICAgICAgICAgLmRvbWFpbihbMCwgc3RhdGUubWF4V2VpZ2h0XSlcblx0ICAgICAgICAgICAgICAgIC5yYW5nZShbXCIjZmZiMzY2XCIsIFwiI0Y5MjYwNlwiXSk7XG5cdCAgICAgICAgICAgICAgICBcblx0XHRcdFx0ZDNwYXRoLnRyYW5zaXRpb24oXCJuZXdQYXRoVHJhbnNpdGlvblwiKVxuXHRcdCAgICAgICAgICAgIC5kdXJhdGlvbig3NTApXG5cdFx0ICAgICAgICAgICAgLmF0dHJUd2VlbihcIm9wYWNpdHlcIiwgZnVuY3Rpb24oZCkge1xuXHRcdCAgICAgICAgICAgICAgICByZXR1cm4gZDMuaW50ZXJwb2xhdGVTdHJpbmcoMCwxKTtcblx0XHQgICAgICAgICAgICB9KVxuXHRcdCAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIGZ1bmN0aW9uKGQpe1xuXHRcdCAgICAgICAgICAgICAgICB2YXIgYyA9IGNvbG9yU2NhbGUoZC5nZXRXZWlnaHQoKSk7XG5cdFx0ICAgICAgICAgICAgICAgIHJldHVybiBjO1xuXHRcdCAgICAgICAgICAgIH0pXG5cdFx0ICAgICAgICAgICAgLmF0dHIoJ2QnLCB0aGlzLmFycm93UGF0aC5jYWxsKGQpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0TGluayA6IFZpc3VhbGl6ZXJMaW5rXG5cdFx0fVxufV0pO1xuXG5cblxuXG5cbiIsIi8qKlxuICogVGhlIGJhc2UgY2xhc3MgZm9yIG5vZGUgb2JqZWN0cyBmb3IgdGhlIGdyYXBoLlxuICogU3VwcG9ydHMgcG9saWNpZXMuXG4gKiBcbiAqIFRvIHdyaXRlIHlvdXIgb3duIE5vZGUgb2JqZWN0LCBjcmVhdGUgYSBuZXcgZmFjdG9yeSB0aGF0IHVzZXMgdGhlIG5vZGVcbiAqIHlvdSB3YW50IHRvIGluaGVyaXQgYXMgYSBkZXBlbmRlbmN5LCBhbmQgZXh0ZW5kIGl0cyBub2RlIGNsYXNzLiBcbiAqIFJldHVybiB0aGUgY2xhc3Mgb2JqZWN0IHdpdGggTm9kZSBhcyBrZXlcbiAqIFxuICovXG5hbmd1bGFyLm1vZHVsZSgnTm9kZU1vZHVsZScpXG4gICAgLmZhY3RvcnkoJ05vZGUnLCBbZnVuY3Rpb24gKCkge1xuXHRcdGNsYXNzIE5vZGUge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBDb25zdHJ1Y3RzIHRoZSBvYmplY3QuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtICAgICAge251bWJlcn0gIHggICAgICAgeCBsb2NhdGlvblxuXHRcdFx0ICogQHBhcmFtICAgICAge251bWJlcn0gIHkgICAgICAgeSBsb2NhdGlvblxuXHRcdFx0ICogQHBhcmFtICAgICAge3N0cmluZ30gIGlkICAgICAgVGhlIGlkZW50aWZpZXJcblx0XHRcdCAqIEBwYXJhbSAgICAgIHtzdHJpbmd9ICB0ZXh0ICAgIFRoZSB0ZXh0IHRvIGRpc3BsYXlcblx0XHRcdCAqIEBwYXJhbSAgICAgIHtudW1iZXJ9ICByYWRpdXMgIFRoZSByYWRpdXMgb2YgdGhlIG5vZGVcblx0XHRcdCAqL1xuXHRcdFx0Y29uc3RydWN0b3IoeCwgeSwgaWQsIHRleHQsIHJhZGl1cykge1xuXHRcdFx0XHR0aGlzLnggPSB4O1xuXHRcdFx0XHR0aGlzLnkgPSB5O1xuXHRcdFx0XHR0aGlzLnJhZGl1cyA9IHJhZGl1cyxcblx0XHRcdFx0dGhpcy5pZCA9IGlkO1xuXHRcdFx0XHR0aGlzLnRleHQgPSB0ZXh0O1xuXHRcdFx0XHR0aGlzLnJhZGl1cyA9IHJhZGl1cztcblx0XHRcdFx0dGhpcy5oYXNQb2xpY3kgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5wb2xpY3kgPSBudWxsO1xuXHRcdFx0XHR0aGlzLm5vZGVQb2xpY2llcyA9IFtdO1xuXHRcdFx0XHR0aGlzLmdyYXBoID0gbnVsbDtcblx0XHRcdFx0dGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHQvKipcblx0XHRcdCAqIENhbGxlZCB3aGVuIGEgbm9kZSBpcyBhZGRlZCB0byB0aGUgZ3JhcGhcblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0gICAgICB7R3JhcGh9ICBncmFwaCAgIFRoZSBncmFwaCBpdCBpcyBhZGRlZCB0b1xuXHRcdFx0ICovXG5cdFx0XHRpbml0aWFsaXplKGdyYXBoKSB7XG5cdFx0XHRcdGlmICh0aGlzLmluaXRpYWxpemVkID09IGZhbHNlKSB7XG5cdFx0XHRcdFx0dGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cdFx0XHRcdFx0dGhpcy5ncmFwaCA9IGdyYXBoO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQ2FsbGVkIGR1cmluZyB0aGUgdXBkYXRlIGdyYXBoIGZvciBleGlzdGluZyBsaW5rc1xuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSAgICAgIHtEM09iamVjdH0gIGQzbm9kZSAgVGhlIGQzIG5vZGVcblx0XHRcdCAqL1xuXHRcdFx0dXBkYXRlQXR0cihkM25vZGUsIGQpIHtcblx0XHRcdFx0ZDNub2RlLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCl7cmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjt9KTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBDYWxsZWQgZHVyaW5nIHRoZSBmaXJzdCB1cGRhdGUgZ3JhcGggZm9yIGEgbm9kZVxuXHRcdFx0ICogSG9vayBmb3Igc3ViIGNsYXNzZXNcblx0XHRcdCAqIFxuXHRcdFx0ICogQHBhcmFtICAgICAge0QzT2JqZWN0fSAgZDNub2RlICBUaGUgZDMgbm9kZVxuXHRcdFx0ICogQHBhcmFtICAgICAge05vZGV9ICAgICAgZCAgICAgICBNYXRjaGluZyBOb2RlIE9iamVjdFxuXHRcdFx0ICovXG5cdFx0XHRuZXdOb2RlQXR0cihkM25vZGUsIGQpIHtcblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBTZXRzIHRoZSByYWRpdXMgb2YgdGhlIG5vZGUuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtICAgICAge251bWJlcn0gIHJhZGl1cyAgVGhlIHJhZGl1c1xuXHRcdFx0ICovXG5cdFx0XHRzZXRSYWRpdXMocmFkaXVzKSB7XG5cdFx0XHRcdHRoaXMucmFkaXVzID0gcmFkaXVzO1xuXHRcdFx0fVxuXG5cdFx0ICAgIC8qKlxuXHRcdCAgICAgKiBVc2VkIHRvIGluc3RhbGwgcG9saWNpZXMgdGhhdCBhcmUgY2FsbGVkIHdoZW4gdGhpc1xuXHRcdCAgICAgKiBub2RlIGhhcyBhIG1vdXNlIGV2ZW50XG5cdFx0ICAgICAqXG5cdFx0ICAgICAqIEBwYXJhbSAgICAgIHtQb2xpY3l9ICBwb2xpY3kgIFRoZSBwb2xpY3kgdG8gaW5zdGFsbFxuXHRcdCAgICAgKi9cblx0XHRcdGluc3RhbGxOb2RlUG9saWN5KHBvbGljeSkge1xuXHRcdFx0XHR0aGlzLm5vZGVQb2xpY2llcy5wdXNoKHBvbGljeSk7XG5cdFx0XHRcdHBvbGljeS5pbml0aWFsaXplKHRoaXMuZ3JhcGgpO1xuXHRcdFx0fVxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFVzZWQgdG8gdW5pbnN0YWxsIHBvbGljeSBmb3IgdGhpcyBub2RlXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtICAgICAge1BvbGljeX0gIHBvbGljeVJlbW92ZSAgVGhlIHBvbGljeSB0byByZW1vdmVcblx0XHRcdCAqL1x0XHRcdFxuXHRcdFx0dW5pbnN0YWxsTm9kZVBvbGljeShwb2xpY3lSZW1vdmUpIHtcblx0XHRcdFx0dmFyIHBvbGljeVJlbW92ZU5hbWU7XG5cdFx0XHRcdGlmICh0eXBlb2YgcG9saWN5UmVtb3ZlID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdHBvbGljeVJlbW92ZU5hbWUgPSBwb2xpY3lSZW1vdmU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cG9saWN5UmVtb3ZlTmFtZSA9IHBvbGljeVJlbW92ZS5wb2xpY3lOYW1lO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF8odGhpcy5ub2RlUG9saWNpZXMpLmZvckVhY2goZnVuY3Rpb24ocG9saWN5LCBpbmRleCkge1xuXHRcdFx0XHRcdGlmIChwb2xpY3kucG9saWN5TmFtZSA9PT0gcG9saWN5UmVtb3ZlTmFtZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5ub2RlUG9saWNpZXMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvKipcblx0XHRcdCAqIENhbGxlZCB3aGVuIHRoZXJlIGlzIGEgbW91c2UgZXZlbnQgZm9yIHRoaXMgbm9kZVxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSAgICAgIHtzdHJpbmd9ICBldmVudCAgICAgVGhlIG1vdXNlIGV2ZW50XG5cdFx0XHQgKiBAcGFyYW0gICAgICB7RDNPYmplY3R9ICBkM25vZGUgIFRoZSBkMyBub2RlXG5cdFx0XHQgKiBAcGFyYW0gICAgICB7T2JqZWN0fSAgZCAgICAgICAgIFRoZSBtYXRjaGluZyBub2RlIG9iamVjdFxuXHRcdFx0ICovXG5cdFx0XHRub2RlUG9saWN5RXZlbnQoZXZlbnQsIGQzbm9kZSwgZCkge1xuXHRcdFx0XHRfLmZvckVhY2godGhpcy5ub2RlUG9saWNpZXMsIGZ1bmN0aW9uKHBvbGljeSkge1xuXHRcdFx0XHRcdHBvbGljeVtldmVudF0oZDNub2RlLCBkKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHROb2RlOiBOb2RlXG5cdFx0fVxufV0pO1xuXG5cblxuXG5cblxuXG4iLCIvKipcbiAqIFRoZSBub2RlIHRoYXQgaXMgdXNlZCBzcGVjaWZpY2FsbHkgZm9yIHRoZSB2aXN1YWxpemF0aW9uIHRhYi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ05vZGVNb2R1bGUnKVxuICAgIC5mYWN0b3J5KCdWaXN1YWxpemVyTm9kZScsIFsnTm9kZScsIGZ1bmN0aW9uIChOb2RlKSB7XG5cdFx0Y2xhc3MgVmlzdWFsaXplck5vZGUgZXh0ZW5kcyBOb2RlLk5vZGUge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBDb25zdHJ1Y3RzIHRoZSBvYmplY3QuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtICAgICAge251bWJlcn0gIHggICAgICAgXHR4IGxvY2F0aW9uXG5cdFx0XHQgKiBAcGFyYW0gICAgICB7bnVtYmVyfSAgeSAgICAgICBcdHkgbG9jYXRpb25cblx0XHRcdCAqIEBwYXJhbSAgICAgIHtzdHJpbmd9ICBpZCAgICAgIFx0VGhlIGlkZW50aWZpZXJcblx0XHRcdCAqIEBwYXJhbSAgICAgIHtzdHJpbmd9ICB0ZXh0ICAgIFx0VGhlIHRleHQgdG8gZGlzcGxheVxuXHRcdFx0ICogQHBhcmFtICAgICAge251bWJlcn0gIHJhZGl1cyAgXHRUaGUgcmFkaXVzIG9mIHRoZSBub2RlXG5cdFx0XHQgKiBAcGFyYW0gICAgICB7c3RyaW5nfSAgcGFyZW50ICAgICBUaGUgcGFyZW50IGlkXG5cdFx0XHQgKiBAcGFyYW0gICAgICB7QXJyYXl9ICAgYW5jZXN0b3JzICBBcnJheSBvZiBhbmNlc3RvcnNcblx0XHRcdCAqIEBwYXJhbSAgICAgIHtudW1iZXJ9ICB4U3RhcnQgICAgIHggbG9jIHRvIHN0YXJ0IGFuaW1hdGlvblxuXHRcdFx0ICogQHBhcmFtICAgICAge251bWJlcn0gIHlTdGFydCAgICAgeSBsb2MgdG8gc3RhcnQgYW5pbWF0aW9uXG5cdFx0XHQgKi9cblx0XHQgICAgY29uc3RydWN0b3IoeCwgeSwgaWQsIHRleHQsIHJhZGl1cywgcGFyZW50LCBhbmNlc3RvcnMsIFxuXHRcdCAgICBcdHhTdGFydCwgeVN0YXJ0KSB7XG5cdFx0ICAgICAgICBzdXBlcih4LCB5LCBpZCwgdGV4dCwgcmFkaXVzKTtcblx0XHQgICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuXHRcdCAgICAgICAgdGhpcy5hbmNlc3RvcnMgPSBhbmNlc3RvcnM7XG5cdFx0ICAgICAgICB0aGlzLnhTdGFydCA9IHhTdGFydCB8fCB4O1xuXHRcdCAgICAgICAgdGhpcy55U3RhcnQgPSB5U3RhcnQgfHwgeTtcblx0XHQgICAgfVxuXG5cdFx0XHQvKipcblx0XHRcdCAqIENhbGxlZCBkdXJpbmcgdGhlIGZpcnN0IHVwZGF0ZSBncmFwaCBmb3IgYSBub2RlXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtICAgICAge0QzT2JqZWN0fSAgZDNub2RlICBUaGUgZDMgbm9kZVxuXHRcdFx0ICogQHBhcmFtICAgICAge05vZGV9ICAgIGQgICAgICAgICBUaGUgbWF0Y2hpbmcgTm9kZVxuXHRcdFx0ICovXG5cdFx0XHRuZXdOb2RlQXR0cihkM25vZGUsIGQpIHtcblx0XHRcdFx0dmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGg7XG5cdFx0XHRcdGlmICh0aGlzR3JhcGguY29uc3RzLmNvbnRhaW5lckNsYXNzICE9IG51bGwgJiZcblx0XHRcdFx0XHRcdHRoaXNHcmFwaC5jaGlsZHJlbl9zdHJ1Y3RbZC5pZF0gPT0gbnVsbCkge1xuXHRcdFx0XHRcdGQzbm9kZS5jbGFzc2VkKHRoaXNHcmFwaC5jb25zdHMuY29udGFpbmVyQ2xhc3MsIHRydWUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGQzbm9kZS50cmFuc2l0aW9uKFwibm9kZVBvc2l0aW9uVHJhbnNpdGlvblwiKVxuXHRcdCAgICAgICAgICAgICAgICAuZHVyYXRpb24oNzUwKVxuXHRcdCAgICAgICAgICAgICAgICAuYXR0clR3ZWVuKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHQgICAgICAgICAgICAgICAgICAgIGlmIChkLnhTdGFydCAhPSBudWxsICYmIGQueVN0YXJ0ICE9IG51bGwpIHtcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICB2YXIgeFN0YXJ0ID0gZC54U3RhcnQ7XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHlTdGFydCA9IGQueVN0YXJ0O1xuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIGQueFN0YXJ0ID0gZC54O1xuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIGQueVN0YXJ0ID0gZC55O1xuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIHZhciB6b29tID0gdGhpc0dyYXBoLmRyYWdTdmc7XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQzLmludGVycG9sYXRlU3RyaW5nKFwidHJhbnNsYXRlKFwiICsgeFN0YXJ0ICsgXCIsXCIgKyB5U3RhcnQgKyBcIilcIiwgXCJ0cmFuc2xhdGUoXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiKTtcblx0XHQgICAgICAgICAgICAgICAgICAgIH1cblx0XHQgICAgICAgICAgICAgICAgICAgIHJldHVybiBkMy5pbnRlcnBvbGF0ZVN0cmluZyhcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCIsIFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIik7XG5cdFx0ICAgICAgICAgICAgICAgIH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHROb2RlOiBWaXN1YWxpemVyTm9kZSxcblx0XHR9XG5cbn1dKTtcblxuXG5cblxuXG5cblxuXG4iLCIvKipcbiAqIFRoaXMgcG9saWN5IGlzIHVzZWQgdG8gYWRkIGEgc2VsZWN0IG5vZGUgZmVhdHVyZS5cbiAqIFN1cHBvcnRzIHNlbGVjdGluZyBtdWx0aXBsZSBub2RlcyBieSB1c2luZyB0aGUgY3RybCBrZXkuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdQb2xpY3lNb2R1bGUnKVxuICAgIC5mYWN0b3J5KCdOb2RlU2VsZWN0aW9uUG9saWN5JywgWydQb2xpY3knLCBmdW5jdGlvbiAoUG9saWN5KSB7XG5cbiAgICBcdGNsYXNzIE5vZGVTZWxlY3Rpb25Qb2xpY3kgZXh0ZW5kcyBQb2xpY3kuUG9saWN5IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ29uc3RydWN0cyB0aGUgb2JqZWN0LlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgICAgICBzdXBlcihcIk5vZGVTZWxlY3Rpb25Qb2xpY3lcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsbGVkIHdoZW4gcG9saWN5IGlzIGluc3RhbGxlZFxuICAgICAgICAgICAgICogT3ZlcndyaXRlcyB0aGUgb24gZHJhZyBldmVudCBvZiB0aGUgZ3JhcGhcbiAgICAgICAgICAgICAqIFxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge0dyYXBofSAgZ3JhcGggICBUaGUgZ3JhcGggaXQgaXMgXG4gICAgXHRcdCAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFsbGVkIG9uXG4gICAgXHRcdCAqL1xuICAgICAgICAgICAgaW5pdGlhbGl6ZShncmFwaCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZShncmFwaCk7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gZ3JhcGguc3RhdGUuTm9kZVNlbGVjdGlvblBvbGljeSA9IHt9O1xuICAgICAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkTm9kZXMgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgY29uc3RzID0gZ3JhcGguY29uc3RzLk5vZGVTZWxlY3Rpb25Qb2xpY3kgPSB7fTtcbiAgICAgICAgICAgICAgICBjb25zdHMuc2VsZWN0ZWRDbGFzcyA9IFwic2VsZWN0ZWRcIjtcbiAgICAgICAgICAgICAgICAvL292ZXJ3cml0dGluZyBncmFwaCdzIG5vZGUgb24gZHJhZyBldmVudCB0byBzdXBwb3J0XG4gICAgICAgICAgICAgICAgLy9tb3ZpbmcgbXVsdGlwbGUgbm9kZXMgYXQgb25jZVxuICAgICAgICAgICAgICAgIHZhciBkcmFnID0gZ3JhcGguZHJhZztcbiAgICAgICAgICAgICAgICBkcmFnLm9uKCdkcmFnJywgZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgICAgIFx0dmFyIHRoaXNHcmFwaCA9IGdyYXBoO1xuICAgICAgICAgICAgICAgIFx0aWYgKHRoaXNHcmFwaC5jb25zdHMuTm9kZVNlbGVjdGlvblBvbGljeSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgXHRcdHZhciBzZWxlY3RlZENsYXNzID0gdGhpc0dyYXBoLmNvbnN0cy5Ob2RlU2VsZWN0aW9uUG9saWN5LnNlbGVjdGVkQ2xhc3M7XG4gICAgICAgICAgICAgICAgXHRcdHZhciBzZWxlY3Rpb24gPSBkMy5zZWxlY3RBbGwoICcuJyArc2VsZWN0ZWRDbGFzcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBzZWxlY3Rpb25bMF0uaW5kZXhPZiggdGhpcyk9PS0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uLmNsYXNzZWQoc2VsZWN0ZWRDbGFzcywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbiA9IGQzLnNlbGVjdCggdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uLmNsYXNzZWQoc2VsZWN0ZWRDbGFzcywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24uYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbiggZCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQueCArPSBkMy5ldmVudC5keDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLnkgKz0gZDMuZXZlbnQuZHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgWyBkLngsZC55IF0gKyBcIilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC51cGRhdGVHcmFwaCgpO1xuICAgICAgICAgICAgICAgIFx0fVxuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBZGRzIHRoZSBnaXZlbiBub2RlIHRvIHRoZSBhcnJheSBvZiBzZWxlY3RlZCBub2Rlc1xuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtEM09iamVjdH0gIGQzTm9kZSAgICBUaGUgZDMgbm9kZVxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge05vZGV9ICAgICAgbm9kZURhdGEgIE1hdGNoaW5nIE5vZGUgb2JqZWN0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGFkZFNlbGVjdE5vZGUoZDNOb2RlLCBub2RlRGF0YSkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5Ob2RlU2VsZWN0aW9uUG9saWN5LFxuICAgICAgICAgICAgICAgICAgICBjb25zdHMgPSB0aGlzR3JhcGguY29uc3RzLk5vZGVTZWxlY3Rpb25Qb2xpY3k7XG5cbiAgICAgICAgICAgICAgICBkM05vZGUuY2xhc3NlZChjb25zdHMuc2VsZWN0ZWRDbGFzcywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWROb2Rlcy5wdXNoKG5vZGVEYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZW1vdmVzIHRoZSBnaXZlbiBub2RlIGZyb20gdGhlIGFycmF5IG9mIHNlbGVjdGVkIG5vZGVzLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtEM09iamVjdH0gIGQzTm9kZSAgICBUaGUgZDMgbm9kZVxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge05vZGV9ICAgICAgbm9kZURhdGEgIE1hdGNoaW5nIG5vZGUgb2JqZWN0IFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZW1vdmVTZWxlY3RGcm9tTm9kZShkM05vZGUsIG5vZGVEYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGgsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gdGhpc0dyYXBoLnN0YXRlLk5vZGVTZWxlY3Rpb25Qb2xpY3ksXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cyA9IHRoaXNHcmFwaC5jb25zdHMuTm9kZVNlbGVjdGlvblBvbGljeTtcblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5jaXJjbGVzLmZpbHRlcihmdW5jdGlvbihjZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2QuaWQgPT09IG5vZGVEYXRhLmlkO1xuICAgICAgICAgICAgICAgIH0pLmNsYXNzZWQoY29uc3RzLnNlbGVjdGVkQ2xhc3MsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBzdGF0ZS5zZWxlY3RlZE5vZGVzLmluZGV4T2Yobm9kZURhdGEpO1xuICAgICAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkTm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZW1vdmVzIGFsbCBzZWxlY3RlZCBub2Rlcy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVtb3ZlQWxsU2VsZWN0ZWROb2RlcygpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB0aGlzR3JhcGguc3RhdGUuTm9kZVNlbGVjdGlvblBvbGljeSxcbiAgICAgICAgICAgICAgICAgICAgY29uc3RzID0gdGhpc0dyYXBoLmNvbnN0cy5Ob2RlU2VsZWN0aW9uUG9saWN5O1xuXG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmNpcmNsZXMuY2xhc3NlZChjb25zdHMuc2VsZWN0ZWRDbGFzcywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkTm9kZXMgPSBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBPbiBNb3VzZWRvd24sIGRldGVybWluZXMgd2hldGhlciB0byBjaGFuZ2UgdGhlXG4gICAgICAgICAgICAgKiBzZWxlY3RlZCBzdGF0dXMgb2YgdGhlIGNsaWNrZWQgbm9kZS5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7RDNPYmplY3R9ICBkM25vZGUgIFRoZSBkMyBub2RlXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7Tm9kZX0gICAgICBkICAgICAgIE1hdGNoaW5nIE5vZGUgT2JqZWN0ICAgICAgIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBtb3VzZWRvd24oZDNub2RlLCBkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGgsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gdGhpc0dyYXBoLnN0YXRlLk5vZGVTZWxlY3Rpb25Qb2xpY3ksXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cyA9IHRoaXNHcmFwaC5jb25zdHMuTm9kZVNlbGVjdGlvblBvbGljeTtcbiAgICAgICAgICAgICAgICBkMy5ldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAoZDMuZXZlbnQuY3RybEtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUuc2VsZWN0ZWROb2Rlcy5pbmRleE9mKGQpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0RnJvbU5vZGUoZDNub2RlLCBkKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkU2VsZWN0Tm9kZShkM25vZGUsIGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0ZS5zZWxlY3RlZE5vZGVzLmluZGV4T2YoZCkgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9pZiBubyBjb250cm9sIGtleSwgYW5kIGNsaWNrZWQgbm90IHNlbGVjdGVkIG5vZGUsXG4gICAgICAgICAgICAgICAgICAgIC8vcmVtb3ZlIGFsbCBvZiBjdXJyZW50IHNlbGVjdGlvblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUFsbFNlbGVjdGVkTm9kZXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogT24gTW91c2V1cCwgZGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGNoYW5nZSB0aGVcbiAgICAgICAgICAgICAqIHNlbGVjdGVkIHN0YXR1cyBvZiB0aGUgY2xpY2tlZCBub2RlLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtEM09iamVjdH0gIGQzbm9kZSAgVGhlIGQzIG5vZGVcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtOb2RlfSAgICAgIGQgICAgICAgTWF0Y2hpbmcgTm9kZSBPYmplY3RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbW91c2V1cChkM25vZGUsIGQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB0aGlzR3JhcGguc3RhdGUuTm9kZVNlbGVjdGlvblBvbGljeSxcbiAgICAgICAgICAgICAgICAgICAgY29uc3RzID0gdGhpc0dyYXBoLmNvbnN0cy5Ob2RlU2VsZWN0aW9uUG9saWN5O1xuICAgICAgICAgICAgICAgIGlmICghZDMuZXZlbnQuY3RybEtleSkge1xuICAgICAgICAgICAgICAgICAgICAvL2lmIGxlbmd0aCBpcyBncmVhdGVyIHRoYW4gMSwgdGhlbiB3ZSBhcmUgbW92aW5nIG11bHRpcGxlIG5vZGVzXG4gICAgICAgICAgICAgICAgICAgIC8vbGVhdmUgdGhlbSBhbGwgaGlnaGxpZ2h0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy9vdGhlcndpc2Ugd2UgYXJlIGp1c3QgbW92aW5nIG9uZSBub2RlLCBzbyB1bmhpZ2hsaWdodFxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUuc2VsZWN0ZWROb2Rlcy5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RGcm9tTm9kZShkM25vZGUsIGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgUG9saWN5OiBOb2RlU2VsZWN0aW9uUG9saWN5LFxuICAgICAgICB9XG59XSk7XG5cblxuXG5cblxuXG5cbiIsIi8qKlxuICogVGhpcyBwb2xpY3kgY2hhbmdlcyB0aGUgdmlldyB0byB0aGUgdGltZWdyYXBoIG9mIGxpbmsgZGF0YSBvbiBjbGljay5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ1BvbGljeU1vZHVsZScpXG4gICAgLmZhY3RvcnkoJ1BhdGhDaGFuZ2VWaWV3UG9saWN5JywgWydQb2xpY3knLCBmdW5jdGlvbiAoUG9saWN5KSB7XG4gICAgXHRjbGFzcyBQYXRoQ2hhbmdlVmlld1BvbGljeSBleHRlbmRzIFBvbGljeS5Qb2xpY3kge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWxsZWQgdG8gYnVpbGQgcG9saWN5XG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAge0FuZ3VsYXIgU3RhdGV9ICAgICRzdGF0ZSAgICBVc2VkIHRvIGNoYW5nZSB2aWV3XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKCRzdGF0ZSkge1xuICAgICAgICAgICAgICAgIHN1cGVyKCdQYXRoQ2hhbmdlVmlld1BvbGljeScpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdlbmVyYXRlcyBhIGxpc3Qgb2YgYWxsIGNoaWxkIGNvbnRhaW5lcnMgb2YgdGhlIHNlcnZpY2VcbiAgICAgICAgICAgICAqIENhbiBoYW5kbGUgbmVzdGVkIHNlcnZpY2VzLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtzdHJpbmd9ICBpZCAgICAgIE5vZGUgSURcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2VuZXJhdGVMaXN0KGlkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNQb2xpY3kgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHZhciByZXRMaXN0ID0gW107XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVJZHMgPSB0aGlzLmdyYXBoLmRhdGFTb3VyY2UuY2hpbGRyZW5fc3RydWN0W2lkXTtcbiAgICAgICAgICAgICAgICBfLmZvckVhY2gobm9kZUlkcywgZnVuY3Rpb24oY2hpbGRJZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpc1BvbGljeS5ncmFwaC5kYXRhU291cmNlLmhhc0NoaWxkKGNoaWxkSWQpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXRMaXN0LmNvbmNhdCh0aGlzUG9saWN5LmdlbmVyYXRlTGlzdChjaGlsZElkKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXRMaXN0LnB1c2goY2hpbGRJZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHJldHVybiByZXRMaXN0XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVXNlZCB0byByZXJvdXRlIGFuIGVkZ2Ugd2hlbiBjbGlja2VkXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge0xpbmt9ICBlZGdlICAgIFRoZSBjbGlja2VkIGVkZ2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmlld0VkZ2UoZWRnZSkge1xuICAgICAgICAgICAgICAgIHZhciBzb3VyY2VMaXN0ID0gW107XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldExpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgc291cmNlSWQgPSBlZGdlLnNvdXJjZS5pZDtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0SWQgPSBlZGdlLnRhcmdldC5pZDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdyYXBoLmRhdGFTb3VyY2UuaGFzQ2hpbGQoc291cmNlSWQpID09PSB0cnVlKSB7Ly9Ob3QgYSBjb250YWluZXIgbm9kZSwgbmVlZCB0byBhZ2dyZWdhdGVcbiAgICAgICAgICAgICAgICAgICAgc291cmNlTGlzdCA9IHRoaXMuZ2VuZXJhdGVMaXN0KHNvdXJjZUlkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2VMaXN0ID0gW3NvdXJjZUlkXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ncmFwaC5kYXRhU291cmNlLmhhc0NoaWxkKHRhcmdldElkKSA9PT0gdHJ1ZSkgey8vTm90IGEgY29udGFpbmVyIG5vZGUsIG5lZWQgdG8gYWdncmVnYXRlXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExpc3QgPSB0aGlzLmdlbmVyYXRlTGlzdCh0YXJnZXRJZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGlzdCA9IFt0YXJnZXRJZF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJHN0YXRlLmdvKCdjb250aXYubWVudS52aXN1YWxpemF0aW9uLmVkZ2UnLCBcbiAgICAgICAgICAgICAgICAgICAge3NvdXJjZU5hbWU6IHNvdXJjZUlkLCB0YXJnZXROYW1lOiB0YXJnZXRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUxpc3Q6IHNvdXJjZUxpc3QsIHRhcmdldExpc3Q6IHRhcmdldExpc3R9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW91c2Vkb3duKGQzcGF0aCwgZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlld0VkZ2UoZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgUG9saWN5OiBQYXRoQ2hhbmdlVmlld1BvbGljeSxcbiAgICAgICAgfVxufV0pO1xuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsIi8qKlxuICogQmFzZSBwb2xpY3kgY2xhc3MgZm9yIHRoZSBncmFwaCBvYmplY3RcbiAqIFxuICogUG9saWNpZXMgYXJlIHVzZWQgdG8gaXNvbGF0ZSBmZWF0dXJlcyBmb3IgYSBncmFwaC5cbiAqIFBvbGljaWVzIGNhbiBiZSBpbnN0YWxsZWQgb24gbm9kZXMsIGxpbmtzLCBvciB0aGUgZ3JhcGguXG4gKiBFYWNoIHBvbGljeSBoYXMgaW50ZXJhY3Rpb24gaGFuZGxlcnMgdGhhdCB3aWxsIGJlIGNhbGxlZCBieSB0aGUgZ3JhcGhcbiAqIGlmIGluc3RhbGxlZC4gUG9saWNpZXMgY2FuIGFsc28gbW9kaWZ5IGdyYXBoIGZ1bmN0aW9ucyAoc2VlIFFUaXBQb2xpY3kpLlxuICogTXVsdGlwbGUgcG9saWNpZXMgY2FuIGJlIGluc3RhbGxlZCBmb3IgYSBub2RlIG9yIGxpbmsuIFxuICogXG4gKiBUbyB3cml0ZSB5b3VyIG93biBwb2xpY3ksIGNyZWF0ZSBhIG5ldyBmYWN0b3J5IHRoYXQgdXNlcyB0aGUgcG9saWN5XG4gKiB5b3Ugd2FudCB0byBpbmhlcml0IGFzIGEgZGVwZW5kZW5jeSwgYW5kIGV4dGVuZCBpdHMgcG9saWN5LiBcbiAqIFJldHVybiB0aGUgY2xhc3Mgb2JqZWN0IHdpdGggUG9saWN5IGFzIGtleSwgYW5kIFxuICogYWRkIHRoZSBwb2xpY3kgdG8gdGhlIFBvbGljeVNlcnZpY2UgZmFjdG9yeS5cbiAqIFxuICogRm9yIHNhdmluZyBzdGF0ZSBvciBjb25zdHMgZm9yIHRoZSBwb2xpY3ksIGNyZWF0ZSBhIG5hbWVzcGFjZVxuICogaW4gZ3JhcGguc3RhdGUgYW5kIGdyYXBoLmNvbnN0cy5cbiAqIEV4LiBcbiAqICAgICAgZ3JhcGguc3RhdGUubXlQb2xpY3kgPSB7fTtcbiAqICAgICAgZ3JhcGguY29uc3RzLm15UG9saWN5ID0ge307XG4gKiAgICAgIFxuICovXG5hbmd1bGFyLm1vZHVsZSgnUG9saWN5TW9kdWxlJylcbiAgICAuZmFjdG9yeSgnUG9saWN5JywgW2Z1bmN0aW9uICgpIHtcbiAgICAgICAgY2xhc3MgUG9saWN5IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ29uc3RydWN0cyB0aGUgb2JqZWN0LlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtzdHJpbmd9ICBwb2xpY3lOYW1lICBUaGUgcG9saWN5IG5hbWVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY29uc3RydWN0b3IocG9saWN5TmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9saWN5TmFtZSA9IHBvbGljeU5hbWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmFwaCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGxlZCB3aGVuIHRoZSBwb2xpY3kgaXMgaW5zdGFsbGVkLlxuICAgICAgICAgICAgICogXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtHcmFwaH0gIGdyYXBoICAgVGhlIEdyYXBoIHRoYXQgdGhlIHBvbGljeSBpc1xuICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgIGJlaW5nIGluc3RhbGxlZCBvblxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpbml0aWFsaXplKGdyYXBoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoID0gZ3JhcGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSGFuZGxlciwgbWVhbnQgdG8gYmUgb3ZlcnJpZGRlbiBpbiBzdWJjbGFzc2VzXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICB7ZDMgb2JqZWN0fSAgICBkM29iaiAgICBUaGUgZDNvYmplY3RcbiAgICAgICAgICAgICAqIEBwYXJhbSAge05vZGUvTGluay9HcmFwaH0gIGQgICBUaGUgb2JqZWN0IGl0IHdhc1xuICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbGxlZCBmb3IuICAgIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBtb3VzZW92ZXIgKGQzb2JqLCBkKSB7fVxuICAgICAgICAgICAgZGJsY2xpY2soZDNvYmosIGQpIHt9XG4gICAgICAgICAgICBjb250ZXh0bWVudShkM29iaiwgZCkge31cbiAgICAgICAgICAgIG1vdXNlb3V0KGQzb2JqLCBkKSB7fVxuICAgICAgICAgICAgbW91c2Vkb3duKGQzb2JqLCBkKSB7fVxuICAgICAgICAgICAgbW91c2V1cChkM29iaiwgZCkge31cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBXaWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBncmFwaCBpcyBiZWluZyBkZXN0cm95ZWQuXG4gICAgICAgICAgICAgKiBVc2VkIHRvIHJlbW92ZSBhbnkgZWxlbWVudHMgb3IgYmluZGluZ3MgdGhlIHBvbGljeVxuICAgICAgICAgICAgICogaGFzIGFkZGVkLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBkZXN0cm95KCkge31cbiAgICAgICAgfVxuICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFBvbGljeTogUG9saWN5LFxuICAgICAgICB9XG59XSk7XG5cblxuXG5cbiIsIi8qKlxuICogQ29udGFpbnMgYWxsIHRoZSBwb2xpY2llcy5cbiAqIFNlZSBwb2xpY3kuanMgZm9yIGluZm8gb24gaG93IHBvbGljaWVzIHdvcmsuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdQb2xpY3lNb2R1bGUnKVxuICAgIC5mYWN0b3J5KCdQb2xpY3lTZXJ2aWNlJywgWydQb2xpY3knLCdRVGlwUG9saWN5JywgJ1BhdGhDaGFuZ2VWaWV3UG9saWN5JywgXG4gICAgICAgICdOb2RlU2VsZWN0aW9uUG9saWN5JywgJ1NwbGl0Sm9pbk5vZGVQb2xpY3knLCAnU3BsaXRKb2luVmlld1BvbGljeScsXG4gICAgICAgICdTYXZlU3RhdGVQb2xpY3knLFxuICAgICAgICAgICAgZnVuY3Rpb24gKFBvbGljeSwgUVRpcFBvbGljeSwgUGF0aENoYW5nZVZpZXdQb2xpY3ksXG4gICAgICAgICAgICAgICAgICAgICAgICBOb2RlU2VsZWN0aW9uUG9saWN5LCAgU3BsaXRKb2luTm9kZVBvbGljeSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBTcGxpdEpvaW5WaWV3UG9saWN5LCBTYXZlU3RhdGVQb2xpY3kpIHtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIFBvbGljeTogUG9saWN5LlBvbGljeSxcbiAgICAgICAgICAgICAgICAgICAgUVRpcFBvbGljeTogUVRpcFBvbGljeS5Qb2xpY3ksXG4gICAgICAgICAgICAgICAgICAgIFBhdGhDaGFuZ2VWaWV3UG9saWN5OiBQYXRoQ2hhbmdlVmlld1BvbGljeS5Qb2xpY3ksXG4gICAgICAgICAgICAgICAgICAgIE5vZGVTZWxlY3Rpb25Qb2xpY3k6IE5vZGVTZWxlY3Rpb25Qb2xpY3kuUG9saWN5LFxuICAgICAgICAgICAgICAgICAgICBTcGxpdEpvaW5Ob2RlUG9saWN5OiBTcGxpdEpvaW5Ob2RlUG9saWN5LlBvbGljeSxcbiAgICAgICAgICAgICAgICAgICAgU3BsaXRKb2luVmlld1BvbGljeTogU3BsaXRKb2luVmlld1BvbGljeS5Qb2xpY3ksXG4gICAgICAgICAgICAgICAgICAgIFNhdmVTdGF0ZVBvbGljeTogU2F2ZVN0YXRlUG9saWN5LlBvbGljeSxcbiAgICAgICAgICAgICAgICB9XG59XSk7IiwiLyoqXG4gKiBUaGlzIHBvbGljeSBhZGRzIHRvb2x0aXAgZnVuY3Rpb25hbGl0eSB0byBub2RlcyBhbmQgbGlua3MuXG4gKiBXaGVuIGluc3RhbGxpbmcsIGluc3RhbGwgb24gYm90aCBsaW5rcyBhbmQgbm9kZXMuXG4gKiBcbiAqIFVzZXMgdGhlIHFUaXAgalF1ZXJ5IHBsdWdpblxuICovXG5hbmd1bGFyLm1vZHVsZSgnUG9saWN5TW9kdWxlJylcbiAgICAuZmFjdG9yeSgnUVRpcFBvbGljeScsIFsnUG9saWN5JywgZnVuY3Rpb24gKFBvbGljeSkge1xuICAgICAgICBjbGFzcyBRVGlwUG9saWN5IGV4dGVuZHMgUG9saWN5LlBvbGljeSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENvbnN0cnVjdHMgdGhlIG9iamVjdC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAgICAgc3VwZXIoXCJRVGlwUG9saWN5XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGxlZCB3aGVuIHRoZSBwb2xpY3kgaXMgaW5zdGFsbGVkXG4gICAgICAgICAgICAgKiBNb2RpZmllcyB0aGUgdXBkYXRlTmV3Tm9kZXMgYW5kIFxuICAgICAgICAgICAgICogdXBkYXRlTmV3UGF0aHMgbWV0aG9kIG9mIHRoZSBncmFwaCB0byBpbnN0YWxsIHF0aXBcbiAgICAgICAgICAgICAqIG9udG8gZWFjaCBub2RlIGFuZCBwYXRoLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtHcmFwaH0gIGdyYXBoICAgVGhlIGdyYXBoIGl0IGlzIFxuICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YWxsZWQgb25cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaW5pdGlhbGl6ZShncmFwaCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZShncmFwaCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgdGhpc1BvbGljeSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gZ3JhcGguc3RhdGUuUVRpcFBvbGljeSA9IHt9O1xuXG4gICAgICAgICAgICAgICAgc3RhdGUubW91c2Vkb3duID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICB2YXIgY29uc3RzID0gZ3JhcGguY29uc3RzLlFUaXBQb2xpY3kgPSB7fTtcblxuICAgICAgICAgICAgICAgIC8vVHJhY2tpbmcgbW91c2UgY2xpY2sgc3RhdGUgdG8gbWFrZSB0b29sdGlwXG4gICAgICAgICAgICAgICAgLy9kaXNhcHBlYXIgaWYgdGhlIG5vZGUgaXMgYmVpbmcgZHJhZ2dlZC5cbiAgICAgICAgICAgICAgICAkKCcjdmlzdWFsaXphdGlvbi1ncmFwaCcpLm1vdXNldXAoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5tb3VzZXVwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIC8vb3ZlcnJpZGUgdXBkYXRlTmV3Tm9kZXMgYW5kIHVwZGF0ZU5ld1BhdGhzXG4gICAgICAgICAgICAgICAgLy90byBpbnN0YWxsIHF0aXBcbiAgICAgICAgICAgICAgICB2YXIgZ3JhcGhVcGRhdGVOZXdOb2RlcyA9IGdyYXBoLnVwZGF0ZU5ld05vZGVzO1xuICAgICAgICAgICAgICAgIGdyYXBoLnVwZGF0ZU5ld05vZGVzID0gZnVuY3Rpb24obmV3Tm9kZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JhcGhVcGRhdGVOZXdOb2Rlcy5jYWxsKGdyYXBoLCBuZXdOb2Rlcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNQb2xpY3kudXBkYXRlTmV3Tm9kZXMobmV3Tm9kZXMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBncmFwaFVwZGF0ZU5ld1BhdGhzID0gZ3JhcGgudXBkYXRlTmV3UGF0aHM7XG4gICAgICAgICAgICAgICAgZ3JhcGgudXBkYXRlTmV3UGF0aHMgPSBmdW5jdGlvbihuZXdQYXRocykge1xuICAgICAgICAgICAgICAgICAgICBncmFwaFVwZGF0ZU5ld1BhdGhzLmNhbGwoZ3JhcGgsIG5ld1BhdGhzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1BvbGljeS51cGRhdGVOZXdQYXRocyhuZXdQYXRocyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJlbW92ZXMgYWxsIHFUaXBzIGZyb20gdGhlIERPTS5cbiAgICAgICAgICAgICAqIENhbGxlZCB3aGVuIHRoZSBwb2xpY3kgaXMgdW5pbnN0YWxsZWQgb3JcbiAgICAgICAgICAgICAqIHRoZSBncmFwaCBpcyBkZXN0cm95ZWQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICAgICAgLy9yZW1vdmluZyBhbGwgcXRpcCBmcm9tIERPTVxuICAgICAgICAgICAgICAgICQoJ1tpZF49XCJxdGlwXCJdJykucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogS2VlcGluZyB0cmFjayBvZiBtb3VzZWRvd24gc3RhdGVcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7ZDNPYmplY3R9ICBkM29iaiAgVGhlIGQzIHBiamVjdFxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge05vZGUvTGlua30gIGQgICAgIFRoZSBtYXRjaGluZyBkYXRhIG9iamVjdFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBtb3VzZWRvd24oZDNvYmosIGQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB0aGlzR3JhcGguc3RhdGUuUVRpcFBvbGljeTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5tb3VzZWRvd24gPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEtlZXBpbmcgdHJhY2sgb2YgbW91c2Vkb3duIHN0YXRlXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge2QzT2JqZWN0fSAgZDNvYmogIFRoZSBkMyBwYmplY3RcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtOb2RlL0xpbmt9ICBkICAgICBUaGUgbWF0Y2hpbmcgZGF0YSBvYmplY3RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbW91c2V1cChkM29iaiwgZCkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5RVGlwUG9saWN5O1xuICAgICAgICAgICAgICAgIHN0YXRlLm1vdXNlZG93biA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGxlZCB3aGVuIE5ldyBOb2RlcyBhcmUgYWRkZWQgZHVyaW5nIHRoZVxuICAgICAgICAgICAgICogdXBkYXRlIGdyYXBoIGZ1bmN0aW9uXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge2QzTm9kZX0gIG5ld05vZGVzICBUaGUgbmV3IG5vZGVzIHRoYXQgYXJlXG4gICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlaW5nIGFkZGVkIHRvIHRoZSBncmFwaFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB1cGRhdGVOZXdOb2RlcyhuZXdOb2Rlcykge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5RVGlwUG9saWN5O1xuXG4gICAgICAgICAgICAgICAgLy9pbmNhc2UgbGlicmFyeSBoYXNuJ3QgbG9hZGVkIHlldFxuICAgICAgICAgICAgICAgIGlmICgkKGRvY3VtZW50KS5xdGlwICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvL2F0dGFjaGluZyBxdGlwXG4gICAgICAgICAgICAgICAgICAgIG5ld05vZGVzLmVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRoaXNOb2RlID0gdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlU3RhdGUgPSBkLnN0YXRlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9JZiBub2RlIGhhcyBjaGlsZHJlbiwgdGhlbiBpdCBpcyBhIHNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzR3JhcGguZGF0YVNvdXJjZS5jaGlsZHJlbl9zdHJ1Y3RbZC5pZF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSBcIjxiPjx1PlNlbGVjdG9yczo8L2I+PC91PiBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0b3JNYXAgPSB0aGlzR3JhcGguZGF0YVNvdXJjZS5zZWxlY3RvcnNbZC5pZF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhhc0tleXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gc2VsZWN0b3JNYXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhhc0tleXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGtleSArIFwiIDogPGk+XCIrIHNlbGVjdG9yTWFwW2tleV0gKyBcIjwvaT4sXFxuIFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzS2V5cyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb21tYSB3aWxsIGJlIHJlbW92ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IFwiTm8gU2VsZWN0b3JzLCBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IFwiPGI+PHU+TGFiZWxzOjwvYj48L3U+IFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYWJlbHNNYXAgPSB0aGlzR3JhcGguZGF0YVNvdXJjZS5sYWJlbHNbZC5pZF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhhc0tleXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gbGFiZWxzTWFwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoYXNLZXlzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBrZXkgKyBcIiA6IDxpPlwiKyBsYWJlbHNNYXBba2V5XSArIFwiPC9pPixcXG4gXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNLZXlzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbW1hIHdpbGwgYmUgcmVtb3ZlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gXCJObyBsYWJlbHMsIFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcmVtb3ZlIGxhc3QgY29tbWFcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSB0ZXh0LnNsaWNlKDAsIC0yKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzTm9kZSkucXRpcCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogZC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRzOiB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcGkgPSAkKHRoaXNOb2RlKS5xdGlwKCdhcGknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSAkKCcjZ3JhcGhDb250YWluZXInKS5vZmZzZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IFtvZmZzZXQubGVmdCArICgoZC54ICogdGhpc0dyYXBoLmRyYWdTdmcuc2NhbGUoKSkgKyB0aGlzR3JhcGguZHJhZ1N2Zy50cmFuc2xhdGUoKVswXSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQudG9wICsgKChkLnkgK2QucmFkaXVzKSAqIHRoaXNHcmFwaC5kcmFnU3ZnLnNjYWxlKCkpICArIHRoaXNHcmFwaC5kcmFnU3ZnLnRyYW5zbGF0ZSgpWzFdXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBpLnNldCgncG9zaXRpb24udGFyZ2V0JywgcG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFzdGF0ZS5tb3VzZWRvd247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvbG86ICQoJyN2aXN1YWxpemF0aW9uLWdyYXBoJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6ICdxdGlwLWJsdWUgcXRpcC1zaGFkb3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXk6ICd0b3AgY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXQ6ICdib3R0b20gY2VudGVyJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRhcmdldDogcG9zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6ICdtb3VzZWRvd24gbW91c2VsZWF2ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsbGVkIHdoZW4gbmV3IHBhdGhzIGFyZSBhZGRlZCBkdXJpbmcgdGhlXG4gICAgICAgICAgICAgKiB1cGRhdGUgZ3JhcGggZnVuY3Rpb25cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7ZDNQYXRofSAgbmV3UGF0aHMgIFRoZSBuZXcgcGF0aHMgdGhhdCBhcmVcbiAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVpbmcgYWRkZWQgdG8gdGhlIGdyYXBoXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHVwZGF0ZU5ld1BhdGhzKG5ld1BhdGhzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGgsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gdGhpc0dyYXBoLnN0YXRlLlFUaXBQb2xpY3k7XG5cbiAgICAgICAgICAgICAgICAvL2luY2FzZSBsaWJyYXJ5IGhhc24ndCBsb2FkZWQgeWV0XG4gICAgICAgICAgICAgICAgaWYgKCQoZG9jdW1lbnQpLnF0aXAgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vYWRkaW5nIHF0aXBcbiAgICAgICAgICAgICAgICAgICAgbmV3UGF0aHMuZWFjaChmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGhpc1BhdGggPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9nZXR0aW5nIG1pZHBvaW50IG9mIHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXRoRWwgICA9IGQzLnNlbGVjdCh0aGlzKS5ub2RlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWlkcG9pbnQgPSBwYXRoRWwuZ2V0UG9pbnRBdExlbmd0aChwYXRoRWwuZ2V0VG90YWxMZW5ndGgoKS8yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXRSZXQgPSBkLnF0aXBIZWxwZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gXCJCeXRlczogXCIgKyBkLmdldFdlaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzUGF0aCkucXRpcCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2lmIG1vdXNlIGlzIGRvd24sIGRvbid0IGxldCBxdGlwIHNob3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhc3RhdGUubW91c2Vkb3duO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2xvOiAkKCcjZ3JhcGhDb250YWluZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogJ3F0aXAtYmx1ZSBxdGlwLXNoYWRvdydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15OiB0YXJnZXRSZXQubXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0OiAnY2VudGVyIGNlbnRlcicsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6ICdtb3VzZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkanVzdDogdGFyZ2V0UmV0LmFkanVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudDogJ21vdXNlZG93biBtb3VzZWxlYXZlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFBvbGljeTogUVRpcFBvbGljeSxcbiAgICAgICAgfVxufV0pO1xuXG5cblxuXG5cblxuXG5cbiIsIi8qKlxuICogVGhpcyBwb2xpY3kgcHJvdmlkZXMgYSB3YXkgZm9yIHByb3BlcnRpZXMgdG8gYmUgc2F2ZWQgXG4gKiBiZXR3ZWVuIHZpZXcgY2hhbmdlc1xuICogXG4gKiBJdCBtb2RpZmllcyB0aGUgZGVzdHJveSBmdW5jdGlvbiB0byBhbHNvIHBhc3MgaW4gYW4gb2JqZWN0IHRoYXRcbiAqIHdpbGwgaGF2ZSBhbGwgaXRzIHByb3BlcnRpZXMgc2F2ZWQgYW5kIHdpbGwgYmUgYXZhaWxhYmxlIFxuICogb24gZ3JhcGggbG9hZC4gV2hlbiBzYXZpbmcgdmFyaWFibGVzIHRvIHRoZSBvYmplY3QsIG5hbWVzcGFjZSB3aXRoXG4gKiB0aGUgcG9saWN5IG5hbWUuXG4gKiBcbiAqIFRoaXMgcG9saWN5IG11c3QgYmUgbG9hZGVkIGZpcnN0IGluIG9yZGVyIGZvciBpdCBzYXZlZCB2YXJpYWJsZXMgXG4gKiB0byBiZSBsb2FkZWQgd2hlbiB0aGUgdmlldyBjb21lcyBiYWNrIHRvIHRoZSBncmFwaFxuICovXG5hbmd1bGFyLm1vZHVsZSgnUG9saWN5TW9kdWxlJylcbiAgICAuZmFjdG9yeSgnU2F2ZVN0YXRlUG9saWN5JywgWydQb2xpY3knLCBmdW5jdGlvbiAoUG9saWN5KSB7XG4gICAgXHRjbGFzcyBTYXZlU3RhdGVQb2xpY3kgZXh0ZW5kcyBQb2xpY3kuUG9saWN5IHtcbiAgICBcdFx0XG4gICAgXHRcdC8qKlxuICAgIFx0XHQgKiBUYWtlcyBpbiB0aGUgYW5ndWxhciBzZXJ2aWNlIHRvIHdoaWNoIGl0IHdpbGxcbiAgICBcdFx0ICogc2F2ZSBpdCdzIHByb3BlcnRpZXMgdG8uXG4gICAgXHRcdCAqXG4gICAgXHRcdCAqIEBwYXJhbSAgICAgIHtPYmplY3R9ICBzYXZlZFN0YXRlICBPYmplY3QgdG8gc2F2ZSBcbiAgICBcdFx0ICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMgdG9cbiAgICBcdFx0ICovXG4gICAgXHRcdGNvbnN0cnVjdG9yKHNhdmVkU3RhdGUpIHtcbiAgICBcdFx0XHRzdXBlcignU2F2ZVN0YXRlUG9saWN5Jyk7XG4gICAgXHRcdFx0dGhpcy5zYXZlZFN0YXRlID0gc2F2ZWRTdGF0ZTtcbiAgICBcdFx0fVxuXG4gICAgXHRcdC8qKlxuICAgIFx0XHQgKiBDYWxsZWQgd2hlbiB0aGUgcG9saWN5IGlzIGluc3RhbGxlZFxuICAgIFx0XHQgKiBNb2RpZmllcyB0aGUgZGVzdHJveSBtZXRob2QgXG4gICAgXHRcdCAqIGFuZCBhZGRzIGEgbG9hZCBtZXRob2QgdG8gdGhlIGdyYXBoXG4gICAgXHRcdCAqXG4gICAgXHRcdCAqIEBwYXJhbSAgICAgIHtHcmFwaH0gIGdyYXBoICAgVGhlIGdyYXBoIGl0IGlzIFxuICAgIFx0XHQgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbGxlZCBvblxuICAgIFx0XHQgKi9cbiAgICBcdFx0aW5pdGlhbGl6ZShncmFwaCkge1xuICAgIFx0XHRcdHRoaXMuZ3JhcGggPSBncmFwaDtcbiAgICBcdFx0XHR2YXIgdGhpc1BvbGljeSA9IHRoaXM7XG4gICAgXHRcdFx0Z3JhcGguZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIFx0XHRcdFx0dGhpc1BvbGljeS5ncmFwaERlc3Ryb3kuY2FsbChncmFwaCwgdGhpc1BvbGljeS5zYXZlZFN0YXRlKTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRncmFwaC5sb2FkID0gZnVuY3Rpb24oc2F2ZWRTdGF0ZSkge1xuICAgIFx0XHRcdFx0dGhpc1BvbGljeS5ncmFwaExvYWQuY2FsbChncmFwaCwgc2F2ZWRTdGF0ZSk7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9XG5cbiAgICBcdFx0LyoqXG4gICAgXHRcdCAqIFdpbGwgb3ZlcnJpZGUgdGhlIGdyYXBoJ3MgZGVmYXVsdCBkZXN0cm95LCB3aXRoIFxuICAgIFx0XHQgKiB0aGlzIHBvbGljeSdzIHNhdmVkU3RhdGUgcGFzc2VkIGluLlxuICAgIFx0XHQgKiBDYWxsZWQgd2l0aCB0aGlzIGFzIHRoZSBncmFwaFxuICAgIFx0XHQgKlxuICAgIFx0XHQgKiBAcGFyYW0gICAgICB7T2JqZWN0fSAgc2F2ZWRTdGF0ZSAgVGhlIHNhdmVkIHN0YXRlXG4gICAgXHRcdCAqL1xuICAgIFx0XHRncmFwaERlc3Ryb3koc2F2ZWRTdGF0ZSkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzO1xuICAgICAgICAgICAgICAgICBfKHRoaXNHcmFwaC5kZWZhdWx0Tm9kZVBvbGljaWVzKS5mb3JFYWNoKGZ1bmN0aW9uKHBvbGljeSkge1xuICAgICAgICAgICAgICAgICAgICBwb2xpY3kuZGVzdHJveShzYXZlZFN0YXRlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBfKHRoaXNHcmFwaC5kZWZhdWx0UGF0aFBvbGljaWVzKS5mb3JFYWNoKGZ1bmN0aW9uKHBvbGljeSkge1xuICAgICAgICAgICAgICAgICAgICBwb2xpY3kuZGVzdHJveShzYXZlZFN0YXRlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpc0dyYXBoLmJpbmRpbmdzKSB7XG4gICAgICAgICAgICAgICAgICAgICQod2luZG93KS5vZmYoa2V5LCB0aGlzR3JhcGguYmluZGluZ3Nba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGdyYXBoIGFzIHRoaXNcbiAgICAgICAgICAgICAqIFVzZWQgdG8gaGF2ZSBhbGwgb3RoZXIgcG9saWNpZXMgdXNlIHRoZSBsb2FkIHN0YXRlXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge09iamVjdH0gIHNhdmVkU3RhdGUgIFRoZSBzYXZlZCBzdGF0ZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBncmFwaExvYWQoc2F2ZWRTdGF0ZSkge1xuICAgICAgICAgICAgXHR2YXIgdGhpc0dyYXBoID0gdGhpcztcbiAgICAgICAgICAgICAgICAgXyh0aGlzR3JhcGguZGVmYXVsdE5vZGVQb2xpY2llcykuZm9yRWFjaChmdW5jdGlvbihwb2xpY3kpIHtcbiAgICAgICAgICAgICAgICAgXHRpZiAocG9saWN5LmxvYWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBcdHBvbGljeS5sb2FkKHNhdmVkU3RhdGUpO1xuICAgICAgICAgICAgICAgICBcdH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBfKHRoaXNHcmFwaC5kZWZhdWx0UGF0aFBvbGljaWVzKS5mb3JFYWNoKGZ1bmN0aW9uKHBvbGljeSkge1xuICAgICAgICAgICAgICAgICBcdGlmIChwb2xpY3kubG9hZCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIFx0cG9saWN5LmxvYWQoc2F2ZWRTdGF0ZSk7XG4gICAgICAgICAgICAgICAgIFx0fVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgIFx0fVxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0UG9saWN5OiBTYXZlU3RhdGVQb2xpY3ksXG4gICAgXHR9XG59XSk7XG5cblxuXG5cblxuXG5cbiIsIi8qKlxuICogVGhpcyBwb2xpY3kgaXMgdXNlZCBmb3Igc3BsaXR0aW5nIGEgbm9kZSBpbnRvIGl0cyBjaGlsZHJlbixcbiAqIGFuZCBqb2luaW5nIHRoZW0gYmFjayB0byB0aGVpciBwYXJlbnQuXG4gKiBTcGxpdHMgb24gZG91YmxlIGNsaWNrLCBhbmQgam9pbnMgb24gcmlnaHQgY2xpY2suXG4gKiBJZiBtdWx0aXBsZSBub2RlcyBhcmUgc2VsZWN0ZWQgYXQgdGhlIHRpbWUgb2YgYSBzcGxpdCBvciBqb2luIGV2ZW50LFxuICogaXQgd2lsbCBzcGxpdCBvciBqb2luIGFsbCBvZiB0aGVtLlxuICovXG5hbmd1bGFyLm1vZHVsZSgnUG9saWN5TW9kdWxlJylcbiAgICAuZmFjdG9yeSgnU3BsaXRKb2luTm9kZVBvbGljeScsIFsnTm9kZVNlbGVjdGlvblBvbGljeScsICdWaXN1YWxpemVyTm9kZScsIFxuICAgIFx0XHRmdW5jdGlvbiAoTm9kZVNlbGVjdGlvblBvbGljeSwgVmlzdWFsaXplck5vZGUpIHtcblx0XHRjbGFzcyBTcGxpdEpvaW5Ob2RlUG9saWN5IGV4dGVuZHMgTm9kZVNlbGVjdGlvblBvbGljeS5Qb2xpY3kge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBDb25zdHJ1Y3RzIHRoZSBvYmplY3QuXG5cdFx0XHQgKi9cbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2xpY3lOYW1lID0gXCJTcGxpdEpvaW5Ob2RlUG9saWN5XCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsbGVkIHdoZW4gcG9saWN5IGlzIGluc3RhbGxlZFxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtHcmFwaH0gIGdyYXBoICAgVGhlIGdyYXBoXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGluaXRpYWxpemUoZ3JhcGgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN1cGVyLmluaXRpYWxpemUoZ3JhcGgpXG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gZ3JhcGguc3RhdGUuU3BsaXRKb2luTm9kZVBvbGljeSA9IHt9O1xuICAgICAgICAgICAgICAgIHN0YXRlLnNwbGl0Tm9kZXMgPSBbXTsgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVHJpZ2dlcmluZyBzcGxpdCBvbiBkb3VibGUgY2xpY2tcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7RDNPYmplY3R9ICBkM25vZGUgIFRoZSBkMyBub2RlXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7T2JqZWN0fSAgZCAgICAgIFRoZSBtYXRjaGluZyBkYXRhIG9iamVjdFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBkYmxjbGljayhkM25vZGUsIGQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaCxcbiAgICAgICAgICAgICAgICAgICAgc3VwZXJTdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5TcGxpdEpvaW5Ob2RlUG9saWN5LFxuICAgICAgICAgICAgICAgICAgICBzdXBlckNvbnN0cyA9IHRoaXNHcmFwaC5jb25zdHMuU3BsaXRKb2luTm9kZVBvbGljeTtcblxuICAgICAgICAgICAgICAgIGlmICghZDMuZXZlbnQuY3RybEtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3VwZXJTdGF0ZS5zZWxlY3RlZE5vZGVzLmluZGV4T2YoZCkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGxpdE11bHRpcGxlTm9kZXMoc3VwZXJTdGF0ZS5zZWxlY3RlZE5vZGVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQWxsU2VsZWN0ZWROb2RlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGxpdE5vZGUoZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRyaWdnZXJpbmcgam9pbiBvbiByaWdodCBjbGlja1xuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtEM09ian0gIGQzbm9kZSAgVGhlIGQzIG5vZGVcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtPYmplY3R9ICBkICAgICAgVGhlIG1hdGNoaW5nIGRhdGEgb2JqZWN0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnRleHRtZW51KGQzbm9kZSwgZCkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoLFxuICAgICAgICAgICAgICAgICAgICBzdXBlclN0YXRlID0gdGhpc0dyYXBoLnN0YXRlLk5vZGVTZWxlY3Rpb25Qb2xpY3ksXG4gICAgICAgICAgICAgICAgICAgIHN1cGVyQ29uc3RzID0gdGhpc0dyYXBoLmNvbnN0cy5Ob2RlU2VsZWN0aW9uUG9saWN5O1xuXG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGg7XG4gICAgICAgICAgICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoIWQzLmV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9pZiB0cnkgdG8gam9pbiBhIGhpZ2hsaWdodGVkIG5vZGUgd2hpbGUgbXVsdGlwbGUgbm9kZXMgYXJlIHNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAvL3dlIGpvaW4gYWxsIGhpZ2hsaWdodGVkIG5vZGVzXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZE5vZGVzID0gc3VwZXJTdGF0ZS5zZWxlY3RlZE5vZGVzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWROb2Rlcy5pbmRleE9mKGQpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuam9pbk5vZGUoc2VsZWN0ZWROb2Rlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2lmIHdlIHRyeSB0byBqb2luIGEgbm9kZSB0aGF0IGlzbid0IHBhcnQgb2YgYSBoaWdobGlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3dlIHJlbW92ZSBhbGwgaGlnaGxpZ2h0cyBhbmQgdGhlbiBqb2luIHRoZSBjbGlja2VkIG5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQWxsU2VsZWN0ZWROb2RlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5qb2luTm9kZShkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBTcGxpdHMgYSBub2RlLlxuICAgICAgICAgICAgICogdXNlZCB0byBzaGFyZSBjb2RlIGJldHdlZW4gc3BsaXROb2RlIGFuZCBzcGxpdE11bHRpcGxlTm9kZXNcbiAgICAgICAgICAgICAqIHdoaWxlIHByZXZlbnRpbmcgdGhlIGhhbmRsZXJzIGZvciB0aGVtIGJvdGggZmlyaW5nXG4gICAgICAgICAgICAgKiBcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtOb2RlfSAgbm9kZSAgICBUaGUgbm9kZSBiZWluZyBzcGxpdFxuICAgICAgICAgICAgICogQHJldHVybiAgICAge0FycmF5fSAgVGhlIG5ldyBub2RlcyBjcmVhdGVkIGJ5IHRoZSBzcGxpdFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBfX3NwbGl0Tm9kZShub2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGgsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gdGhpc0dyYXBoLnN0YXRlLlNwbGl0Sm9pbk5vZGVQb2xpY3k7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBub2RlLmlkXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkcmVuX3N0cnVjdCA9IHRoaXNHcmFwaC5jaGlsZHJlbl9zdHJ1Y3Q7XG4gICAgICAgICAgICAgICAgLy9pZiBpdCBoYXMgbm8gY2hpbGRyZW4gdG8gc3BsaXQgaW50b1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZHJlbl9zdHJ1Y3RbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9yZW1vdmluZyB0aGUgbm9kZSBmcm9tIHRoZSBsaXN0IG9mIG5vZGVzXG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVzID0gXy5maWx0ZXIodGhpc0dyYXBoLm5vZGVzLCBmdW5jdGlvbihncmFwaE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBncmFwaE5vZGVzICE9IG5vZGU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpc0dyYXBoLm5vZGVzKTtcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguc3BsaWNlTGlua3NGb3JOb2RlKG5vZGUpO1xuXG4gICAgICAgICAgICAgICAgLy9nZXR0aW5nIGFsbCB0aGUgbm9kZSBpZCdzIGZvciBmaW5kaW5nIGZsb3dcbiAgICAgICAgICAgICAgICB2YXIgbm9kZV9uYW1lc19zZXQgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXNHcmFwaC5ub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBub2RlX25hbWVzX3NldC5wdXNoKHRoaXNHcmFwaC5ub2Rlc1tpXS5pZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9zZXQgb2Ygbm9kZXMgYWZ0ZXIgdGhlIHNwbGl0XG4gICAgICAgICAgICAgICAgdmFyIG5ld19ub2RlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5fc3RydWN0W25hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVfbmFtZXNfc2V0LnB1c2goY2hpbGRyZW5fc3RydWN0W25hbWVdW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3X25vZGVzLnB1c2goY2hpbGRyZW5fc3RydWN0W25hbWVdW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHJldERhdGEgPSB0aGlzR3JhcGguZGF0YVNvdXJjZS5nZXRGbG93QmV0d2VlblNldChub2RlX25hbWVzX3NldCk7XG5cbiAgICAgICAgICAgICAgICAvL2Zvcm1hdHRpbmcgZGF0YSBmb3IgbmV3IG5vZGVzXG4gICAgICAgICAgICAgICAgdmFyIHhMb2MgPSBub2RlLng7XG4gICAgICAgICAgICAgICAgdmFyIHlMb2MgPSBub2RlLnk7XG4gICAgICAgICAgICAgICAgdmFyIGFuY2VzdG9ycyA9IG5vZGUuYW5jZXN0b3JzLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgLy9rZWVwaW5nIG9yZGVyaW5nIHRoYXQgZmlyc3QgaW4gYW5jZXN0b3IgbGlzdCBpcyBjbG9zZXN0IGluIHJlbGF0aW9uc2hpcFxuICAgICAgICAgICAgICAgIGFuY2VzdG9ycy5zcGxpY2UoMCwgMCwgbm9kZS5pZCk7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IG5vZGUuaWQ7XG4gICAgICAgICAgICAgICAgdmFyIG5ld19ub2RlX29ianMgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgcmFkaXVzID0gbm9kZS5yYWRpdXMgKiB0aGlzR3JhcGguY29uc3RzLnJhZGl1c0RlY2F5O1xuICAgICAgICAgICAgICAgIHZhciBub2RlRGF0YSA9IHJldERhdGEubm9kZURhdGE7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAvL2NhbGN1bGF0aW5nIHdoaWNoIG9mIHRoZSBub2RlcyBpbiByZXREYXRhWzBdIGFyZSBuZXdcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld19ub2Rlcy5pbmRleE9mKG5vZGVEYXRhW2ldLmlkKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWQgPSBub2RlRGF0YVtpXS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRleHQgPSBub2RlRGF0YVtpXS50ZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld19ub2RlID0gbmV3IFZpc3VhbGl6ZXJOb2RlLk5vZGUobnVsbCwgbnVsbCwgaWQsIHRleHQsIHJhZGl1cywgcGFyZW50LCBhbmNlc3RvcnMsIHhMb2MsIHlMb2MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3X25vZGUuaW5pdGlhbGl6ZSh0aGlzR3JhcGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVzLnB1c2gobmV3X25vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3X25vZGVfb2Jqcy5wdXNoKG5ld19ub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgubGlua3MgPSB0aGlzR3JhcGguZGF0YVNvdXJjZS5wcm9jZXNzTGlua0RhdGEocmV0RGF0YS5saW5rRGF0YSwgdGhpc0dyYXBoLm5vZGVzKTtcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguaW5pdE5vZGVzKCk7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmluaXRMaW5rcygpO1xuXG4gICAgICAgICAgICAgICAgc3RhdGUuc3BsaXROb2Rlcy5wdXNoKG5vZGUuaWQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdfbm9kZV9vYmpzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFNwbGl0cyB0aGUgZ2l2ZSBub2RlXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge05vZGV9ICBub2RlICAgIFRoZSBub2RlIGJlaW5nIHNwbGl0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNwbGl0Tm9kZShub2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGgsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gdGhpc0dyYXBoLnN0YXRlLlNwbGl0Sm9pbk5vZGVQb2xpY3k7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdmFyIHJlcyA9IHRoaXMuX19zcGxpdE5vZGUobm9kZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlcyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zcGxpdE5vZGVFdmVudChyZXMpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU3BsaXRzIGFsbCB0aGUgbm9kZXMgcGFzc2VkIGluXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge0FycmF5fSAgbm9kZXMgICBBcnJheSBvZiBub2RlcyB0byBiZSBzcGxpdFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzcGxpdE11bHRpcGxlTm9kZXMobm9kZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB0aGlzR3JhcGguc3RhdGUuU3BsaXRKb2luTm9kZVBvbGljeTtcbiAgICAgICAgICAgICAgICB2YXIgcmVzTm9kZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXMgPSB0aGlzLl9fc3BsaXROb2RlKG5vZGVzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzTm9kZXMgPSByZXNOb2Rlcy5jb25jYXQocmVzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNwbGl0TXVsdGlwbGVOb2Rlc0V2ZW50KHJlcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsbGVkIGFmdGVyIGEgc2luZ2xlIG5vZGUgaXMgc3BsaXRcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7QXJyYXl9ICBuZXdOb2RlcyAgVGhlIG5ldyBub2Rlc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzcGxpdE5vZGVFdmVudChuZXdOb2Rlcykge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoO1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5zZXRQb3NpdGlvbnMoKTtcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgudXBkYXRlR3JhcGgoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWxsZWQgYWZ0ZXIgbXVsdGlwbGUgbm9kZXMgYXJlIHNwbGl0IGF0IG9uY2VcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7QXJyYXl9ICBuZXdOb2RlcyAgVGhlIG5ldyBub2Rlc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzcGxpdE11bHRpcGxlTm9kZXNFdmVudChuZXdOb2Rlcykge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoO1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5zZXRQb3NpdGlvbnMoKTtcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgudXBkYXRlR3JhcGgoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiB1c2VkIHRvIHNoYXJlIGNvZGUgYmV0d2VlbiBqb2luTm9kZSBhbmQgam9pbk11bHRpcGxlTm9kZVxuICAgICAgICAgICAgICogd2hpbGUgcHJldmVudGluZyBib3RoIGhhbmRsZXJzIGZpcmluZ1xuICAgICAgICAgICAgICogXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7Tm9kZX0gICAgICAgICAgbm9kZSAgICBUaGUgbm9kZSB0byBqb2luXG4gICAgICAgICAgICAgKiBAcmV0dXJuICAgICB7Tm9kZX0gIFRoZSBuZXcgbm9kZSBhZnRlciB0aGUgam9pblxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBfX2pvaW5Ob2RlKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaCxcbiAgICAgICAgICAgICAgICAgICAgY29uc3RzID0gdGhpc0dyYXBoLmNvbnN0cy5TcGxpdEpvaW5Ob2RlUG9saWN5LFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5TcGxpdEpvaW5Ob2RlUG9saWN5O1xuXG4gICAgICAgICAgICAgICAgLy9jaGVjayB0aGF0IG5vZGUgc3RpbGwgZXhpc3RzXG4gICAgICAgICAgICAgICAgaWYgKHRoaXNHcmFwaC5ub2Rlcy5pbmRleE9mKG5vZGUpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRyZW5fc3RydWN0ID0gdGhpc0dyYXBoLmNoaWxkcmVuX3N0cnVjdDtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IG5vZGUuaWRcbiAgICAgICAgICAgICAgICAvL2lmIGl0IGhhcyBubyBhbmNlc3Rvciwgbm90aGluZyB0byBqb2luXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuX3N0cnVjdC50b3BMZXZlbC5pbmRleE9mKG5hbWUpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSBub2RlLnBhcmVudDtcbiAgICAgICAgICAgICAgICB2YXIgdG9fYmVfZGVsZXRlZCA9IFtdO1xuICAgICAgICAgICAgICAgIHZhciBub2RlX25hbWVzX3NldCA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpc0dyYXBoLm5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vaWYgbm9kZSB3b24ndCBiZSBjb2xsYXBzZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNHcmFwaC5ub2Rlc1tpXS5hbmNlc3RvcnMuaW5kZXhPZihub2RlLnBhcmVudCkgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVfbmFtZXNfc2V0LnB1c2godGhpc0dyYXBoLm5vZGVzW2ldLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvX2JlX2RlbGV0ZWQucHVzaCh0aGlzR3JhcGgubm9kZXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBuZXdfbm9kZV9pZCA9IG5vZGUucGFyZW50O1xuICAgICAgICAgICAgICAgIG5vZGVfbmFtZXNfc2V0LnB1c2gobm9kZS5wYXJlbnQpO1xuXG4gICAgICAgICAgICAgICAgLy9mb3JtYXR0aW5nIGRhdGFcbiAgICAgICAgICAgICAgICB2YXIgcmFkaXVzID0gbm9kZS5yYWRpdXMgLyB0aGlzR3JhcGguY29uc3RzLnJhZGl1c0RlY2F5OyBcbiAgICAgICAgICAgICAgICB2YXIgeExvYyA9IG5vZGUueDtcbiAgICAgICAgICAgICAgICB2YXIgeUxvYyA9IG5vZGUueTtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gbm9kZS5hbmNlc3RvcnNbMV07XG4gICAgICAgICAgICAgICAgdmFyIGFuY2VzdG9ycyA9IG5vZGUuYW5jZXN0b3JzLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgIHZhciBuZXdfbm9kZSA9IG5ldyBWaXN1YWxpemVyTm9kZS5Ob2RlKHhMb2MsIHlMb2MsIG5ld19ub2RlX2lkLCBuZXdfbm9kZV9pZCwgcmFkaXVzLCBwYXJlbnQsIGFuY2VzdG9ycyk7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVzLnB1c2gobmV3X25vZGUpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHJldERhdGEgPSB0aGlzR3JhcGguZGF0YVNvdXJjZS5nZXRGbG93QmV0d2VlblNldChub2RlX25hbWVzX3NldCk7XG4gICAgICAgICAgICAgICAgLy9yZW1vdmUgYWxsIG5vZGVzIHRoYXQgd2lsbCBiZSBqb2luZWRcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRvX2JlX2RlbGV0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGVfdG9fZGVsZXRlID0gdG9fYmVfZGVsZXRlZFtpXVxuICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGgubm9kZXMuc3BsaWNlKHRoaXNHcmFwaC5ub2Rlcy5pbmRleE9mKG5vZGVfdG9fZGVsZXRlKSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5zcGxpY2VMaW5rc0Zvck5vZGUobm9kZV90b19kZWxldGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgubGlua3MgPSB0aGlzR3JhcGguZGF0YVNvdXJjZS5wcm9jZXNzTGlua0RhdGEocmV0RGF0YS5saW5rRGF0YSwgdGhpc0dyYXBoLm5vZGVzKTtcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguaW5pdE5vZGVzKCk7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmluaXRMaW5rcygpO1xuXG4gICAgICAgICAgICAgICAgc3RhdGUuc3BsaXROb2Rlcy5zcGxpY2Uoc3RhdGUuc3BsaXROb2Rlcy5pbmRleE9mKG5ld19ub2RlLmlkKSwgMSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3X25vZGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSm9pbnMgdGhlIGdpdmVuIG5vZGVcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7Tm9kZX0gIG5vZGUgICAgVGhlIG5vZGUgdG8gam9pblxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBqb2luTm9kZShub2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGgsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gdGhpc0dyYXBoLnN0YXRlLlNwbGl0Sm9pbk5vZGVQb2xpY3k7XG5cbiAgICAgICAgICAgICAgICB2YXIgbmV3Tm9kZSA9IHRoaXMuX19qb2luTm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICBpZiAobmV3Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgXHR0aGlzLmpvaW5Ob2RlRXZlbnQobmV3Tm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEpvaW5zIGFsbCB0aGUgZ2l2ZW4gbm9kZXNcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7QXJyYXl9ICBub2RlcyAgIFRoZSBub2RlcyB0byBqb2luXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGpvaW5NdWx0aXBsZU5vZGUobm9kZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB0aGlzR3JhcGguc3RhdGUuU3BsaXRKb2luTm9kZVBvbGljeTtcblxuICAgICAgICAgICAgICAgIHZhciBuZXdfbm9kZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXMgPSB0aGlzLl9fam9pbk5vZGUobm9kZXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICBuZXdfbm9kZXMucHVzaChyZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmpvaW5NdWx0aXBsZU5vZGVzRXZlbnQobmV3X25vZGVzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWxsZWQgYWZ0ZXIgYSBzaW5nbGUgbm9kZSBpcyBqb2luZWRcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7Tm9kZX0gIG5ld05vZGUgIFRoZSBuZXcgbm9kZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBqb2luTm9kZUV2ZW50KG5ld05vZGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaDtcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgudXBkYXRlR3JhcGgoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWxsZWQgYWZ0ZXIgbXVsdGlwbGUgbm9kZXMgYXJlIGpvaW5lZFxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtBcnJheX0gIG5ld05vZGVzICBUaGUgbmV3IG5vZGVzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGpvaW5NdWx0aXBsZU5vZGVzRXZlbnQobmV3Tm9kZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaDtcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgudXBkYXRlR3JhcGgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBQb2xpY3k6IFNwbGl0Sm9pbk5vZGVQb2xpY3ksXG4gICAgICAgIH1cbn1dKTtcblxuXG5cblxuIiwiLyoqXG4gKiBUaGlzIHBvbGljeSBpcyB1c2VkIHRvIGNoYW5nZSB0aGUgdmlldyB0byBmb2N1cyBvbiBzcGxpdHRpbmcgYW5kIFxuICogam9pbmluZyBldmVudHMuXG4gKiBPdmVycmlkZXMgdGhlIGNlcnRhaW4gZm9yY2UgbGF5b3V0IGZ1bmN0aW9ucyBvZiB0aGUgZ3JhcGggdG8gcGFydGl0aW9uIGEgc3BsaXRcbiAqIGludG8gdGhlIGZvY3VzZWQgbm9kZXMgYW5kIHRoZSBjb25uZWN0ZWQgbm9kZXMuXG4gKiBcbiAqIEhhcyBzYXZlL2xvYWQgbWV0aG9kcyBmb3IgdGhlIHNhdmUgc3RhdGUgcG9saWN5LlxuICogSGFzIGJhY2sgYnV0dG9uIHN1cHBvcnQuXG4gKiBDYW4gYXV0byBjaGFuZ2UgdGhlIHRpdGxlIG9mIHRoZSBncmFwaC5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ1BvbGljeU1vZHVsZScpXG4gICAgLmZhY3RvcnkoJ1NwbGl0Sm9pblZpZXdQb2xpY3knLCBbJ1NwbGl0Sm9pbk5vZGVQb2xpY3knLCAnVmlzdWFsaXplck5vZGUnLCBmdW5jdGlvbiAoU3BsaXRKb2luTm9kZVBvbGljeSwgVmlzdWFsaXplck5vZGUpIHsgXG4gICAgICAgIGNsYXNzIFNwbGl0Sm9pblZpZXdQb2xpY3kgZXh0ZW5kcyBTcGxpdEpvaW5Ob2RlUG9saWN5LlBvbGljeXtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ29uc3RydWN0cyB0aGUgb2JqZWN0LlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9saWN5TmFtZSA9IFwiU3BsaXRKb2luVmlld1BvbGljeVwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGxlZCB3aGVuIHBvbGljeSBpcyBpbnN0YWxsZWRcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7R3JhcGh9ICBncmFwaCAgIFRoZSBncmFwaFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpbml0aWFsaXplKGdyYXBoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdXBlci5pbml0aWFsaXplKGdyYXBoKVxuICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9IGdyYXBoLnN0YXRlLlNwbGl0Sm9pblZpZXdQb2xpY3kgPSB7fTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zYXZlZFN0YXRlcyA9IFtdO1xuICAgICAgICAgICAgICAgIHN0YXRlLmZvY3VzR3JvdXAgPSBudWxsO1xuICAgICAgICAgICAgICAgIHN0YXRlLmV2ZW50SGlzdG9yeSA9IFtdO1xuICAgICAgICAgICAgICAgIHN0YXRlLmZvY3VzR3JvdXBzID0gW107XG4gICAgICAgICAgICAgICAgc3RhdGUuZm9jaSA9IFtdO1xuICAgICAgICAgICAgICAgIHN0YXRlLnpvb21zID0ge307XG4gICAgICAgICAgICAgICAgc3RhdGUubGF5b3V0ID0ge307XG4gICAgICAgICAgICAgICAgc3RhdGUubGF5b3V0RGVmYXVsdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgc3RhdGUubm9kZUlkc1RvUmVzaG93ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzdGF0ZS5iYWNrQnV0dG9uRWxlbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgc3RhdGUudGl0bGVFbGVtID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zY2FsZSA9IGdyYXBoLmRyYWdTdmcuc2NhbGUoKTtcbiAgICAgICAgICAgICAgICBzdGF0ZS50cmFuc2xhdGUgPSBncmFwaC5kcmFnU3ZnLnRyYW5zbGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGNvbnN0cyA9IGdyYXBoLmNvbnN0cy5TcGxpdEpvaW5WaWV3UG9saWN5ID0ge307XG4gICAgICAgICAgICAgICAgY29uc3RzLmJvdW5kYXJ5ID0gMC44O1xuXG4gICAgICAgICAgICAgICAgLy9vdmVycmlkaW5nIGQzZm9yY2UgbWV0aG9kcyBvZiB0aGUgZ3JhcGguXG4gICAgICAgICAgICAgICAgZ3JhcGguZDNGb3JjZUJvdW5kcyA9IHRoaXMuZDNGb3JjZUJvdW5kcztcbiAgICAgICAgICAgICAgICBncmFwaC5kM0ZvcmNlVGljayA9IHRoaXMuZDNGb3JjZVRpY2s7XG4gICAgICAgICAgICAgICAgZ3JhcGguZDNGb3JjZVN0YXJ0ID0gdGhpcy5kM0ZvcmNlU3RhcnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogTGlua3MgdGhlIHByb3ZpZGVkIGVsZW1lbnQgYSBiYWNrIGJ1dHRvbiBmZWF0dXJlXG4gICAgICAgICAgICAgKiBEb2Vzbid0IHRyaWdnZXIgdGhlIG9uLWNsaWNrIGV2ZW50XG4gICAgICAgICAgICAgKiBUaGF0IHNob3VsZCBiZSBkb25lIHRocm91Z2ggYW5ndWxhciBuZy1jbGljay5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7alF1ZXJ5fSAgZWxlbSAgICBUaGUganF1ZXJ5IHNlbGVjdGVkIGVsZW1lbnRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaW5zdGFsbEJhY2tCdXR0b24oZWxlbSkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoLFxuICAgICAgICAgICAgICAgICAgICB0aGlzUG9saWN5ID0gdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB0aGlzR3JhcGguc3RhdGUuU3BsaXRKb2luVmlld1BvbGljeTtcblxuICAgICAgICAgICAgICAgIHN0YXRlLmJhY2tCdXR0b25FbGVtID0gZWxlbTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5iYWNrQnV0dG9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5ldmVudEhpc3RvcnkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1BvbGljeS51bmRvTGFzdEV2ZW50LmNhbGwodGhpc1BvbGljeSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogV2lsbCBhbGxvdyB0aGlzIHBvbGljeSB0byBjaGFuZ2UgdGhlIHRpdGxlIG9mIHRoZSBncmFwaFxuICAgICAgICAgICAgICogYXMgc3BsaXQgYW5kIGpvaW4gZXZlbnRzIG9jY3VyLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtqUXVlcnl9ICBlbGVtICAgIFRoZSBqcXVlcnkgc2VsZWN0ZWQgZWxlbWVudFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpbnN0YWxsVGl0bGUoZWxlbSkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoLFxuICAgICAgICAgICAgICAgICAgICB0aGlzUG9saWN5ID0gdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB0aGlzR3JhcGguc3RhdGUuU3BsaXRKb2luVmlld1BvbGljeTtcblxuICAgICAgICAgICAgICAgIHN0YXRlLnRpdGxlRWxlbSA9IGVsZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsbGVkIHdoZW4gdGhlIGdyYXBoIGlzIGJlaW5nIGRlc3Ryb3llZFxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtPYmplY3R9ICBzYXZlZFN0YXRlICBBbnkgcHJvcGVydHkgb24gdGhpc1xuICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdCB3aWxsIGJlIGFjY2Vzc2libGVcbiAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVuIHRoZSB2aWV3IHJlbG9hZHNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZGVzdHJveShzYXZlZFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy9Pbmx5IGlmIHRoZSBzYXZlIHN0YXRlIHBvbGljeSBpcyBpbnN0YWxsZWRcbiAgICAgICAgICAgICAgICBpZiAoc2F2ZWRTdGF0ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZShzYXZlZFN0YXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogV2lsbCBzYXZlIHRoZSBjdXJyZW50IHN0YXRlLCBhbmQgYWxsIGhpc3RvcnkuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge09iamVjdH0gIHNhdmVkU3RhdGUgIEFueSBwcm9wZXJ0eSBvbiB0aGlzXG4gICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0IHdpbGwgYmUgYWNjZXNzaWJsZVxuICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZW4gdGhlIHZpZXcgcmVsb2Fkc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzYXZlKHNhdmVkU3RhdGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB0aGlzR3JhcGguc3RhdGUuU3BsaXRKb2luVmlld1BvbGljeTtcblxuICAgICAgICAgICAgICAgIHZhciBub2RlcyA9IHRoaXMuZ3JhcGgubm9kZXM7XG4gICAgICAgICAgICAgICAgdmFyIGxpbmtzID0gdGhpcy5ncmFwaC5saW5rcztcbiAgICAgICAgICAgICAgICB2YXIgY3VyclRpdGxlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUudGl0bGVFbGVtICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VyclRpdGxlID0gc3RhdGUudGl0bGVFbGVtLnRleHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGZvY3VzR3JvdXAgPSBzdGF0ZS5mb2N1c0dyb3VwO1xuICAgICAgICAgICAgICAgIHZhciBmb2N1c0dyb3VwcyA9IHN0YXRlLmZvY3VzR3JvdXBzO1xuICAgICAgICAgICAgICAgIHZhciBldmVudEhpc3RvcnkgPSBzdGF0ZS5ldmVudEhpc3Rvcnk7XG4gICAgICAgICAgICAgICAgLy8gdmFyIGZvY2kgPSBzdGF0ZS5mb2NpO1xuICAgICAgICAgICAgICAgIHZhciB6b29tcyA9IHN0YXRlLnpvb21zO1xuICAgICAgICAgICAgICAgIHZhciBsYXlvdXQgPSBzdGF0ZS5sYXlvdXQ7XG5cbiAgICAgICAgICAgICAgICAvL2lmIHRoZXJlIGhhc24ndCBiZWVuIGEgYnJlYWsgZXZlbnQgeWV0XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLmxheW91dERlZmF1bHQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVmYXVsdExheW91dCA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBfLmZvckVhY2godGhpc0dyYXBoLm5vZGVzLCBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TGF5b3V0W24uaWRdID0ge3g6bi54LCB5Om4ueX07XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmxheW91dERlZmF1bHQgPSBkZWZhdWx0TGF5b3V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgbGF5b3V0RGVmYXVsdCA9IHN0YXRlLmxheW91dERlZmF1bHQ7XG4gICAgICAgICAgICAgICAgdmFyIHJldCA9IHtub2Rlczpub2RlcywgbGlua3M6bGlua3MsIFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZXM6c3RhdGUuc2F2ZWRTdGF0ZXMsIGN1cnJUaXRsZTpjdXJyVGl0bGUsIFxuICAgICAgICAgICAgICAgICAgICBmb2N1c0dyb3VwOmZvY3VzR3JvdXAsIGZvY3VzR3JvdXBzOiBmb2N1c0dyb3VwcyxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRIaXN0b3J5OmV2ZW50SGlzdG9yeSwgem9vbXM6em9vbXMsXG4gICAgICAgICAgICAgICAgICAgIGxheW91dDpsYXlvdXQsIGxheW91dERlZmF1bHQ6bGF5b3V0RGVmYXVsdCBcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBzYXZlZFN0YXRlLlNwbGl0Sm9pblZpZXdQb2xpY3kgPSByZXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogV2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgZ3JhcGggaXMgcmVsb2FkZWQsIGFzc3VtaW5nXG4gICAgICAgICAgICAgKiBzYXZlIHN0YXRlIHBvbGljeSBpcyBpbnN0YWxsZWRcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7T2JqZWN0fSAgbG9hZFN0YXRlICBDb250YWlucyBhbGwgdGhlIHNhdmVkXG4gICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbG9hZChsb2FkU3RhdGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc1BvbGljeSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGgsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gdGhpc0dyYXBoLnN0YXRlLlNwbGl0Sm9pblZpZXdQb2xpY3k7XG5cbiAgICAgICAgICAgICAgICBsb2FkU3RhdGUgPSBsb2FkU3RhdGUuU3BsaXRKb2luVmlld1BvbGljeTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zYXZlZFN0YXRlcyA9IGxvYWRTdGF0ZS5zdGF0ZXM7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmxpbmtzID0gbG9hZFN0YXRlLmxpbmtzO1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5ub2RlcyA9IGxvYWRTdGF0ZS5ub2RlcztcblxuICAgICAgICAgICAgICAgIHZhciBjdXJyVGl0bGUgPSBsb2FkU3RhdGUuY3VyclRpdGxlO1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS50aXRsZUVsZW0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS50aXRsZUVsZW0udGV4dChjdXJyVGl0bGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdGF0ZS5mb2N1c0dyb3VwID0gbG9hZFN0YXRlLmZvY3VzR3JvdXA7XG4gICAgICAgICAgICAgICAgc3RhdGUuZXZlbnRIaXN0b3J5ID0gbG9hZFN0YXRlLmV2ZW50SGlzdG9yeTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5mb2N1c0dyb3VwcyA9IGxvYWRTdGF0ZS5mb2N1c0dyb3VwcztcbiAgICAgICAgICAgICAgICBzdGF0ZS56b29tcyA9IGxvYWRTdGF0ZS56b29tcztcbiAgICAgICAgICAgICAgICBzdGF0ZS5sYXlvdXQgPSBsb2FkU3RhdGUubGF5b3V0O1xuICAgICAgICAgICAgICAgIHN0YXRlLmxheW91dERlZmF1bHQgPSBsb2FkU3RhdGUubGF5b3V0RGVmYXVsdDtcblxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5iYWNrQnV0dG9uRWxlbSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5ldmVudEhpc3RvcnkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuYmFja0J1dHRvbkVsZW0uZmFkZVRvKCdzbG93JywgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRyZW5fc3RydWN0ID0gdGhpc0dyYXBoLmNoaWxkcmVuX3N0cnVjdDtcblxuICAgICAgICAgICAgICAgIF8uZm9yRWFjaCh0aGlzR3JhcGgubm9kZXMsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgZC5TcGxpdEpvaW5WaWV3UG9saWN5ID0ge307XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLmluY2x1ZGVzKGNoaWxkcmVuX3N0cnVjdFtzdGF0ZS5mb2N1c0dyb3Vwc1swXV0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQuaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkLlNwbGl0Sm9pblZpZXdQb2xpY3kudHlwZSA9IFwiZm9jdXNcIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuU3BsaXRKb2luVmlld1BvbGljeS50eXBlID0gXCJjb25uZWN0ZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAvL2xvYWRpbmcgYSBwcmV2aW91cyBsYXlvdXRcbiAgICAgICAgICAgICAgICB2YXIgbGF5b3V0O1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5mb2N1c0dyb3Vwcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLnpvb21lZChbMCwwXSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGxheW91dCA9IHN0YXRlLmxheW91dERlZmF1bHQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHpvb20gPSBzdGF0ZS56b29tc1tzdGF0ZS5mb2N1c0dyb3Vwc107XG4gICAgICAgICAgICAgICAgICAgIGlmICh6b29tICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC56b29tZWQoem9vbVswXSwgem9vbVsxXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0ID0gc3RhdGUubGF5b3V0W3N0YXRlLmZvY3VzR3JvdXBzXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL2xheW91dCBjYW4ndCBiZSBudWxsXG4gICAgICAgICAgICAgICAgXy5mb3JFYWNoKHRoaXNHcmFwaC5ub2RlcywgZnVuY3Rpb24obikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gbGF5b3V0W24uaWRdO1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9zID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxheW91dCwgbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbi54ID0gcG9zLng7XG4gICAgICAgICAgICAgICAgICAgIG4ueSA9IHBvcy55O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLnN0YXRlLmluaXRGb3JjZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLnVwZGF0ZUdyYXBoLmNhbGwodGhpc0dyYXBoLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1BvbGljeS51cGRhdGVHcmFwaENhbGxiYWNrLmNhbGwodGhpc1BvbGljeSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3RhdGUuc2NhbGUgPSB0aGlzR3JhcGguZHJhZ1N2Zy5zY2FsZSgpO1xuICAgICAgICAgICAgICAgIHN0YXRlLnRyYW5zbGF0ZSA9IHRoaXNHcmFwaC5kcmFnU3ZnLnRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFdpbGwgYmUgY2FsbGVkIGR1cmluZyBEMyBmb3JjZSBzaW11bGF0aW9uc1xuICAgICAgICAgICAgICogYnkgdGhlIGdyYXBoLCBzbyBcInRoaXNcIiB3aWxsIHBvaW50IHRvIHRoZSBncmFwaCBvYmplY3RcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7bnVtYmVyfSAgd2lkdGggICBEMyBMYXlvdXQgV2lkdGhcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtudW1iZXJ9ICBoZWlnaHQgIEQzIExheW91dCBIZWlnaHRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZDNGb3JjZVRpY2soZSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgY29uc3RzID0gdGhpc0dyYXBoLmNvbnN0cyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVQb2xpY3kgPSBzdGF0ZS5TcGxpdEpvaW5WaWV3UG9saWN5O1xuXG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IGNvbnN0cy5kaXNwbGF5T2Zmc2V0O1xuICAgICAgICAgICAgICAgIHZhciBzY2FsZSA9IHN0YXRlLlNwbGl0Sm9pblZpZXdQb2xpY3kuc2NhbGU7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVzID0gdGhpc0dyYXBoLm5vZGVzO1xuXG4gICAgICAgICAgICAgICAgLy8gTW92ZSBub2RlcyB0b3dhcmQgY2x1c3RlciBmb2N1cy5cbiAgICAgICAgICAgICAgICB2YXIgZm9jaSA9IHN0YXRlUG9saWN5LmZvY2k7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZ3Jhdml0eShhbHBoYSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvY2kubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5TcGxpdEpvaW5WaWV3UG9saWN5LnR5cGUgPT09IFwiZm9jdXNcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQueSArPSAoZm9jaVswXSAtIGQueSkgKiBhbHBoYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC55ICs9IChmb2NpWzFdIC0gZC55KSAqIGFscGhhO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZC54ICs9ICh3aWR0aC8yIC0gZC54KSAqIGFscGhhO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBkLnkgKz0gKGhlaWdodC8yIC0gZC55KSAqIGFscGhhO1xuICAgICAgICAgICAgICAgICAgICAgICAgZC54ICs9ICh3aWR0aC8yIC0gZC54KSAqIGFscGhhO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBubyBub2RlcyBvdmVybGFwXG4gICAgICAgICAgICAgICAgdmFyIHEgPSBkMy5nZW9tLnF1YWR0cmVlKHRoaXNHcmFwaC5ub2RlcyksXG4gICAgICAgICAgICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICAgICAgICAgICAgbiA9IG5vZGVzLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgICAgICAgICAgICAgICAgcS52aXNpdCh0aGlzLmQzRm9yY2VDb2xsaWRlKG5vZGVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgbm9kZXMgYXJlIHdpdGhpbiBib3VuZHNcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguY2lyY2xlcy5lYWNoKHRoaXMuZDNGb3JjZUNvbGxpZGUoLjUpKVxuICAgICAgICAgICAgICAgICAgICAuZWFjaChncmF2aXR5KC4yICogZS5hbHBoYSkpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24oZCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkLnggPSBNYXRoLm1heCgoZC5yYWRpdXMgKyBvZmZzZXQpL3NjYWxlLCBNYXRoLm1pbih3aWR0aCArICgoLW9mZnNldC0gZC5yYWRpdXMpIC8gc2NhbGUpLCBkLngpKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbihkKSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuU3BsaXRKb2luVmlld1BvbGljeSA9PSBudWxsIHx8IGQuU3BsaXRKb2luVmlld1BvbGljeSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC55ID0gTWF0aC5tYXgoKGQucmFkaXVzICsgb2Zmc2V0KS9zY2FsZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbihoZWlnaHQgKyAoKC1vZmZzZXQgLSBkLnJhZGl1cykvc2NhbGUpLCBkLnkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZC55O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkLlNwbGl0Sm9pblZpZXdQb2xpY3kudHlwZSA9PT0gXCJmb2N1c1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC55ID0gTWF0aC5tYXgoZC5yYWRpdXMgKyBvZmZzZXQsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5taW4oKGhlaWdodCArICgoLW9mZnNldCAtIGQucmFkaXVzKS9zY2FsZSkpKmNvbnN0cy5TcGxpdEpvaW5WaWV3UG9saWN5LmJvdW5kYXJ5LCBkLnkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZC55O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkLlNwbGl0Sm9pblZpZXdQb2xpY3kudHlwZSA9PT0gXCJjb25uZWN0ZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQueSA9IE1hdGgubWF4KChoZWlnaHQgKyAoKG9mZnNldCAtIGQucmFkaXVzKS9zY2FsZSkpICpjb25zdHMuU3BsaXRKb2luVmlld1BvbGljeS5ib3VuZGFyeSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbihoZWlnaHQgKyAoKC1vZmZzZXQgLSBkLnJhZGl1cykvc2NhbGUpLCBkLnkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZC55O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5wYXRoc1xuICAgICAgICAgICAgICAgICAgICAuYXR0cigneDEnLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnNvdXJjZS54OyB9KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigneTEnLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnNvdXJjZS55OyB9KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigneDInLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnRhcmdldC54OyB9KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigneTInLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnRhcmdldC55OyB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGN1bGF0ZXMgdGhlIGJvdW5kYXJpZXMgb2YgdGhlIHNpbXVsYXRpb25cbiAgICAgICAgICAgICAqIFxuICAgICAgICAgICAgICogV2lsbCBiZSBjYWxsZWQgZHVyaW5nIEQzIGZvcmNlIHNpbXVsYXRpb25zXG4gICAgICAgICAgICAgKiBieSB0aGUgZ3JhcGgsIHNvIFwidGhpc1wiIHdpbGwgcG9pbnQgdG8gdGhlIGdyYXBoIG9iamVjdFxuICAgICAgICAgICAgICogXG4gICAgICAgICAgICAgKiBAcmV0dXJuICAgICB7T2JqZWN0fSAgICAgICAgICBSZXR1cm5zIGFuIG9iamVjdFxuICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdCBoYXMgdGhlIHdpZHRoXG4gICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgaGVpZ2h0IGFzIFxuICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcyBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZDNGb3JjZUJvdW5kcygpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB0aGlzR3JhcGguc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cyA9IHRoaXNHcmFwaC5jb25zdHMsXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0c1BvbGljeSA9IGNvbnN0cy5TcGxpdEpvaW5WaWV3UG9saWN5LFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZVBvbGljeSA9IHN0YXRlLlNwbGl0Sm9pblZpZXdQb2xpY3k7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVzID0gdGhpc0dyYXBoLm5vZGVzO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNhbGNNYXhOb2Rlcyh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcmVhID0gd2lkdGggKiBoZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciByYWRpdXMgPSB0aGlzR3JhcGguY29uc3RzLnN0YXJ0UmFkaXVzO1xuICAgICAgICAgICAgICAgICAgICAvL3RyZWF0aW5nIHRoZW0gYXMgYSBzcXVhcmUgZm9yIGFwcHJveFxuICAgICAgICAgICAgICAgICAgICB2YXIgbGVuZ3RoID0gKHJhZGl1cyAqMy41KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFtb3VudCA9IGFyZWEgLyhsZW5ndGggKmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhbW91bnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vVGhlIG9mZnNldCBpcyB0aGUgYnVmZmVyIGZyb20gdGhlIGVkZ2VzXG4gICAgICAgICAgICAgICAgLy9PcmlnaW5hbCBXaWR0aCBhbmQgSGVpZ2h0IGFyZSBnaXZlbiB0byB0aGUgZm9yY2UgbGF5b3V0XG4gICAgICAgICAgICAgICAgLy9zbyB0aGF0IGl0IGlzIGNlbnRlcmVkLCBidXQgbm9kZXMgd2lsbCBiZSBmb3JjZWQgdG8gYmVcbiAgICAgICAgICAgICAgICAvL3dpdGhpbiB0aGUgb2Zmc2V0IGJvdW5kc1xuICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSBjb25zdHMuZGlzcGxheU9mZnNldDtcbiAgICAgICAgICAgICAgICB2YXIgc3ZnV2lkdGggPSAkKCcjdmlzdWFsaXphdGlvbi1ncmFwaCcpLndpZHRoKCkgLyB0aGlzR3JhcGguZHJhZ1N2Zy5zY2FsZSgpO1xuICAgICAgICAgICAgICAgIHZhciBzdmdIZWlnaHQgPSAkKCcjdmlzdWFsaXphdGlvbi1ncmFwaCcpLmhlaWdodCgpIC8gdGhpc0dyYXBoLmRyYWdTdmcuc2NhbGUoKTtcblxuXG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gc3ZnV2lkdGg7XG4gICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IHN2Z0hlaWdodDtcblxuICAgICAgICAgICAgICAgIHZhciBhbW91bnQgPSBjYWxjTWF4Tm9kZXMod2lkdGggLSAoMipvZmZzZXQpLCBoZWlnaHQgLSAoMipvZmZzZXQpKTtcbiAgICAgICAgICAgICAgICB2YXIgc2NhbGUgPSAxO1xuICAgICAgICAgICAgICAgIGlmIChub2Rlcy5sZW5ndGggPiBhbW91bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NhbGUgPSBhbW91bnQgLyBub2Rlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC56b29tZWQodGhpc0dyYXBoLmRyYWdTdmcudHJhbnNsYXRlKCksIHNjYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggLz0gc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCAvPSBzY2FsZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL2NhbGN1bGF0aW5nIGZvY2kgZm9yIHNpbXVsYXRpb25cbiAgICAgICAgICAgICAgICB2YXIgZm9jdXNHcm91cHMgPSBzdGF0ZVBvbGljeS5mb2N1c0dyb3VwcztcbiAgICAgICAgICAgICAgICB2YXIgZm9jaSA9IHN0YXRlUG9saWN5LmZvY2k7XG4gICAgICAgICAgICAgICAgaWYgKGZvY3VzR3JvdXBzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBmb2NpID0gW2hlaWdodC8yXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL3NldHRpbmcgZm9jaSBoZWlnaHQgcG9zaXRpb24gYmFzZWQgb24gcGVyY2VudGFnZVxuICAgICAgICAgICAgICAgICAgICB2YXIgZm9jdXNOb2RlcyA9IHRoaXNHcmFwaC5jaGlsZHJlbl9zdHJ1Y3RbZm9jdXNHcm91cHNbMF1dO1xuICAgICAgICAgICAgICAgICAgICBjb25zdHNQb2xpY3kuYm91bmRhcnkgPSBmb2N1c05vZGVzLmxlbmd0aCAvIG5vZGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvcCA9IGhlaWdodCAqIGNvbnN0c1BvbGljeS5ib3VuZGFyeTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJvdCA9IGhlaWdodCAtIHRvcDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvcCA8IDIqdGhpc0dyYXBoLmNvbnN0cy5tYXhSYWRpdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0c1BvbGljeS5ib3VuZGFyeSA9ICgyLjUgKiB0aGlzR3JhcGguY29uc3RzLm1heFJhZGl1cykgLyBoZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3AgPSBoZWlnaHQgKiBjb25zdHNQb2xpY3kuYm91bmRhcnk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3QgPSBoZWlnaHQgLSB0b3A7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYm90IDwgMiogdGhpc0dyYXBoLmNvbnN0cy5tYXhSYWRpdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0c1BvbGljeS5ib3VuZGFyeSA9IDEgLSAoKDIuNSAqIHRoaXNHcmFwaC5jb25zdHMubWF4UmFkaXVzKSAvIGhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3AgPSBoZWlnaHQgKiBjb25zdHNQb2xpY3kuYm91bmRhcnk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3QgPSBoZWlnaHQgLSB0b3A7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9jaSA9IFt0b3AvMiwgdG9wICsgYm90IC8gMl07XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHt3aWR0aDp3aWR0aCwgaGVpZ2h0OmhlaWdodH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVHJpZ2dlcmluZyBzcGxpdCBvbiBkb3VibGUgY2xpY2tcbiAgICAgICAgICAgICAqIFxuICAgICAgICAgICAgICogRm9jdXMgZ3JvdXAgc3RvcmVzIHRoZSBub2RlIHRoYXQgaXMgYWJvdXQgdG8gYmUgc3BsaXQuXG4gICAgICAgICAgICAgKiBcbiAgICAgICAgICAgICAqIFdoZW4gZm9jdXMgZ3JvdXAgaGFzIGxlbmd0aCAwLCB0aGUgZmlyc3Qgc3BsaXQgXG4gICAgICAgICAgICAgKiB3aWxsIGp1c3QgYmUgcHVzaGVkIG9uLlxuICAgICAgICAgICAgICogVGhlIG5vZGUgd2lsbCBiZSBzcGxpdCBhbmQgcHVzaGVkIHRvIHRoZSB0b3AgaGFsZiBcbiAgICAgICAgICAgICAqIG9mIHRoZSBzY3JlZW4sIGFuZCB0aGUgYm90dG9tIGhhbGYgd2lsbCBjb250YWluIGFueVxuICAgICAgICAgICAgICogbm9kZXMgaXQgaGFzIGNvbm5lY3Rpb25zIHRvLlxuICAgICAgICAgICAgICogXG4gICAgICAgICAgICAgKiBXaGVuIGEgZm9jdXMgZ3JvdXAgbGVuZ3RoIGlzID49IDEsIGlmIHRoZSBub2RlIHRvIGJlXG4gICAgICAgICAgICAgKiBzcGxpdCBpcyBhIGZvY3VzIG5vZGUsIGl0IHdpbGwgcmVwbGFjZSBmb2N1c0dyb3VwWzBdIGFuZFxuICAgICAgICAgICAgICogdGhlIHRvcCBoYWxmIHdpbGwgYmUgaXRzIGNoaWxkcmVuLCBhbmQgYm90dG9tIGhhbGYgd2lsbFxuICAgICAgICAgICAgICogYmUgdGhlIG5vZGVzIGl0IGhhcyBjb25uZWN0aW9ucyB0by5cbiAgICAgICAgICAgICAqIFxuICAgICAgICAgICAgICogSWYgdGhlIHNwbGl0IGlzIGluIHRoZSBib3R0b20gaGFsZiwgdGhlbiB0aGUgYm90dG9tIGhhbGZcbiAgICAgICAgICAgICAqIHdpbGwgZGlzcGxheSBpdCdzIGNoaWxkcmVuIGFuZCB3aWxsIG9ubHkgc2hvdyBjb25uZWN0aW9ucyBiZXR3ZWVuXG4gICAgICAgICAgICAgKiB0aGUgdHdvIGdyb3VwcywgYW5kIHdpbGwgcmVwbGFjZSBmb2N1c0dyb3VwWzFdLlxuICAgICAgICAgICAgICogXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7RDNPYmp9ICAgZDNub2RlICBUaGUgZDMgbm9kZVxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge09iamVjdH0gIGQgICAgICAgVGhlIG1hdGNoaW5nIGRhdGEgb2JqZWN0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGRibGNsaWNrKGQzbm9kZSwgZCkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5TcGxpdEpvaW5WaWV3UG9saWN5LFxuICAgICAgICAgICAgICAgICAgICBjb25zdHMgPSB0aGlzR3JhcGguY29uc3RzLlNwbGl0Sm9pblZpZXdQb2xpY3k7XG5cbiAgICAgICAgICAgICAgICAvL2NoZWNrIGlmIGNhbiBzcGxpdFxuICAgICAgICAgICAgICAgIHZhciBuYW1lID0gZC5pZDtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRyZW5fc3RydWN0ID0gdGhpc0dyYXBoLmNoaWxkcmVuX3N0cnVjdDtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRyZW5fc3RydWN0W25hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vc2F2ZSBjdXJyZW50IGxheW91dFxuICAgICAgICAgICAgICAgIHZhciBsYXlvdXQgPSB7fTtcbiAgICAgICAgICAgICAgICBfLmZvckVhY2godGhpc0dyYXBoLm5vZGVzLCBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgICAgICAgIGxheW91dFtuLmlkXSA9IHt4Om4ueCwgeTpuLnl9O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLmZvY3VzR3JvdXBzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvL2NyZWF0ZSBuZXcgZGljdFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5sYXlvdXREZWZhdWx0ID0gbGF5b3V0XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLmZvY3VzR3JvdXBzLmxlbmd0aCA9PT0gMCkgeyAvL3RvcGxldmVsIHNwbGl0XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmZvY3VzR3JvdXBzLnB1c2goZC5pZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfLmluY2x1ZGVzKGNoaWxkcmVuX3N0cnVjdFtzdGF0ZS5mb2N1c0dyb3Vwc1swXV0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLmlkKSkgeyAvL3NwbGl0dGluZyBhIGZvY3VzIG5vZGVcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZm9jdXNHcm91cHNbMF0gPSBkLmlkO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUuZm9jdXNHcm91cHMubGVuZ3RoID09PSAxKSB7Ly9zcGxpdHRpbmcgYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25uZWN0ZWQgbm9kZVxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5mb2N1c0dyb3Vwcy5wdXNoKGQuaWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5pbmNsdWRlcyhjaGlsZHJlbl9zdHJ1Y3Rbc3RhdGUuZm9jdXNHcm91cHNbMV1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLmlkKSkgey8vc3BsaXR0aW5nIGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2Nvbm5lY3RlZCBub2RlXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmZvY3VzR3JvdXBzWzFdID0gZC5pZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5mb2N1c0dyb3Vwcy5sZW5ndGggPT09IDIgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5mb2N1c0dyb3Vwc1sxXSA9PT0gZC5pZCkge1xuICAgICAgICAgICAgICAgICAgICAvL1NwbGl0dGluZyBhIGNvbm5lY3RlZCBub2RlLCBrZWVwIGFsbCBmb2N1cyBub2Rlc1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZXNUb0tlZXAgPSBbZF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBub2RlSWRzVG9SZXNob3cgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGdyb3VwT25lTm9kZXMgPSBjaGlsZHJlbl9zdHJ1Y3Rbc3RhdGUuZm9jdXNHcm91cHNbMF1dO1xuICAgICAgICAgICAgICAgICAgICBfLmZvckVhY2godGhpc0dyYXBoLm5vZGVzLCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5pbmNsdWRlcyhncm91cE9uZU5vZGVzLCBub2RlLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJZHNUb1Jlc2hvdy5wdXNoKG5vZGUuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzVG9LZWVwLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL01ha2Ugc3BsaXQgbm9kZXMgdGhlIGZvY3VzIGFuZCBrZWVwIG5vZGVzIHRoYXQgYXJlIGNvbm5lY3RlZFxuICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZXNUb0tlZXAgPSBbZF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBub2RlSWRzVG9SZXNob3cgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgXy5mb3JFYWNoKHRoaXNHcmFwaC5saW5rcywgZnVuY3Rpb24obGluaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmsuc291cmNlID09PSBkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJZHNUb1Jlc2hvdy5pbmRleE9mKGxpbmsudGFyZ2V0LmlkKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsudGFyZ2V0LlNwbGl0Sm9pblZpZXdQb2xpY3kgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLnRhcmdldC5TcGxpdEpvaW5WaWV3UG9saWN5LnR5cGUgPSBcImNvbm5lY3RlZFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJZHNUb1Jlc2hvdy5wdXNoKGxpbmsudGFyZ2V0LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2Rlc1RvS2VlcC5wdXNoKGxpbmsudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGluay50YXJnZXQgPT09IGQgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJZHNUb1Jlc2hvdy5pbmRleE9mKGxpbmsuc291cmNlLmlkKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuc291cmNlLlNwbGl0Sm9pblZpZXdQb2xpY3kgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLnNvdXJjZS5TcGxpdEpvaW5WaWV3UG9saWN5LnR5cGUgPSBcImNvbm5lY3RlZFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJZHNUb1Jlc2hvdy5wdXNoKGxpbmsuc291cmNlLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2Rlc1RvS2VlcC5wdXNoKGxpbmsuc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9SZW1vdmluZyBsaW5rcyBmcm9tIHRoZSBub2RlIHRvIGJlIHNwbGl0XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmNpcmNsZXMuZWFjaChmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmlkICE9PSBkLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGguc3BsaWNlTGlua3NGb3JOb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLnVwZGF0ZUdyYXBoKCk7XG5cbiAgICAgICAgICAgICAgICAvL2Rpc2FibGluZyB1cGRhdGUgZ3JhcGggdG8gcHJldmVudCBuZXcgZGF0YSBmcm9tXG4gICAgICAgICAgICAgICAgLy9yZWRyYXdpbmcgbGlua3Mgd2hpbGUgdGhlcmUgYXJlIGFuaW1hdGlvbnMgZ29pbmcgb25cbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguc3RhdGUuZGlzYWJsZVVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmNpcmNsZXMuZWFjaChmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmlkICE9PSBkLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpLmRlbGF5KDIwMCkuZHVyYXRpb24oNDAwKS5zdHlsZShcIm9wYWNpdHlcIiwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2Rpc2FibGluZyBxdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnF0aXAoJ2Rpc2FibGUnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAvL3NjYWxpbmcgdGhlIGdyYXBoIHRvIGl0cyBvcmlnaW5hbCB6b29tIGZvciB0aGUgY3VycmVudCB2aWV3XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJTY2FsZSA9IHRoaXNHcmFwaC5kcmFnU3ZnLnNjYWxlKCk7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJUcmFuc2xhdGUgPSB0aGlzR3JhcGguZHJhZ1N2Zy50cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAoY3VyclNjYWxlICE9PSBzdGF0ZS5zY2FsZSB8fCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJUcmFuc2xhdGUgIT09IHN0YXRlLnRyYW5zbGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGguem9vbWVkKHN0YXRlLnRyYW5zbGF0ZSwgc3RhdGUuc2NhbGUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vY2VudGVyaW5nIHRoZSBub2RlIHRoYXQgaXMgc3BsaXR0aW5nXG4gICAgICAgICAgICAgICAgdmFyIHhMb2MgPSAkKCcjdmlzdWFsaXphdGlvbi1ncmFwaCcpLndpZHRoKCkgLyAyO1xuICAgICAgICAgICAgICAgIHZhciB5TG9jID0gJCgnI3Zpc3VhbGl6YXRpb24tZ3JhcGgnKS5oZWlnaHQoKSAvIDI7XG5cbiAgICAgICAgICAgICAgICBkLnhTdGFydCA9IGQueDtcbiAgICAgICAgICAgICAgICBkLnlTdGFydCA9IGQueTtcbiAgICAgICAgICAgICAgICBkLnggPSB4TG9jO1xuICAgICAgICAgICAgICAgIGQueSA9IHlMb2M7XG4gICAgICAgICAgICAgICAgZDNub2RlLnRyYW5zaXRpb24oXCJub2RlUG9zaXRpb25UcmFuc2l0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZHVyYXRpb24oNzUwKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHJUd2VlbihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHhTdGFydCA9IGQueFN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB5U3RhcnQgPSBkLnlTdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLnhTdGFydCA9IGQueDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLnlTdGFydCA9IGQueTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZDMuaW50ZXJwb2xhdGVTdHJpbmcoXCJ0cmFuc2xhdGUoXCIgKyB4U3RhcnQgKyBcIixcIiArIHlTdGFydCArIFwiKVwiLCBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgc3BsaXROb2RlRnVuYyA9IHN1cGVyLnNwbGl0Tm9kZTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5ub2RlSWRzVG9SZXNob3cgPSBub2RlSWRzVG9SZXNob3c7XG4gICAgICAgICAgICAgICAgLy93YWl0aW5nIGZvciBub2RlIHRyYW5zaXRpb25cbiAgICAgICAgICAgICAgICB2YXIgdGhpc1BvbGljeSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVzID0gbm9kZXNUb0tlZXA7XG4gICAgICAgICAgICAgICAgICAgIHNwbGl0Tm9kZUZ1bmMuY2FsbCh0aGlzUG9saWN5LCBkKTtcbiAgICAgICAgICAgICAgICB9LCA3NTApO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVG8gYmUgY2FsbGVkIGFmdGVyIHRoZSBncmFwaCBpcyBzcGxpdC5cbiAgICAgICAgICAgICAqIEJyaW5ncyBhbGwgbm9kZXMgYmFjayBpbnRvIHZpZXcgYW5kIHNldHMgdGhlaXIgYXR0cmlidXRlc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB1cGRhdGVHcmFwaENhbGxiYWNrKCkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5TcGxpdEpvaW5WaWV3UG9saWN5LFxuICAgICAgICAgICAgICAgICAgICBjb25zdHMgPSB0aGlzR3JhcGguY29uc3RzLlNwbGl0Sm9pblZpZXdQb2xpY3k7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLmNpcmNsZXMuZWFjaChmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpLmR1cmF0aW9uKDQwMCkuc3R5bGUoXCJvcGFjaXR5XCIsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmNsYXNzZWQoXCJmb2N1c1wiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3QodGhpcykuY2xhc3NlZChcImNvbm5lY3RlZFwiLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLlNwbGl0Sm9pblZpZXdQb2xpY3kgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLlNwbGl0Sm9pblZpZXdQb2xpY3kudHlwZSA9PT0gXCJmb2N1c1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5jbGFzc2VkKFwiZm9jdXNcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlLlNwbGl0Sm9pblZpZXdQb2xpY3kudHlwZSA9PT0gXCJjb25uZWN0ZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3QodGhpcykuY2xhc3NlZChcImNvbm5lY3RlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLm5vZGVJZHNUb1Jlc2hvdyA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLnVwZGF0ZUdyYXBoKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmFuZG9tbHkgc2V0cyB0aGUgcG9zaXRpb25zIG9mIGFueSB1bnNldCBub2RlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNldFBvc2l0aW9ucygpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaCxcbiAgICAgICAgICAgICAgICAgICAgdGhpc1BvbGljeSA9IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIGdyYXBoQ29uc3RzID0gdGhpc0dyYXBoLmNvbnN0cyxcbiAgICAgICAgICAgICAgICAgICAgZ3JhcGhTdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZTtcblxuICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSBncmFwaENvbnN0cy5kaXNwbGF5T2Zmc2V0O1xuICAgICAgICAgICAgICAgIHZhciBub2RlcyA9IHRoaXNHcmFwaC5ub2RlcztcbiAgICAgICAgICAgICAgICB2YXIgcmV0ID0gdGhpc1BvbGljeS5kM0ZvcmNlQm91bmRzLmNhbGwodGhpc0dyYXBoKTtcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgXy5mb3JFYWNoKG5vZGVzLCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnggPT0gbnVsbCB8fCBub2RlLnkgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBnZXRSYW5kb21JbnQobm9kZS5yYWRpdXMgKyBvZmZzZXQsIHJldC53aWR0aCAtIG5vZGUucmFkaXVzIC0gb2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB5ID0gZ2V0UmFuZG9tSW50KG5vZGUucmFkaXVzICsgb2Zmc2V0LCByZXQuaGVpZ2h0IC0gbm9kZS5yYWRpdXMgLSBvZmZzZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS54ID0geDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUueSA9IHk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsbGVkIG9uIHRoZSBzdGFydCBvZiB0aGUgZDMgZm9yY2Ugc2ltdWxhdGlvblxuICAgICAgICAgICAgICogV2lsbCBvdmVycmlkZSB0aGUgbWV0aG9kIG9mIHRoZSBncmFwaFxuICAgICAgICAgICAgICogXCJ0aGlzXCIgcG9pbnRzIHRvIHRoZSBncmFwaFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBkM0ZvcmNlU3RhcnQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmNpcmNsZXNcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2N4JywgZnVuY3Rpb24oZCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLnhTdGFydCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC54U3RhcnQgPSAoZC54U3RhcnQgKiB0aGlzR3JhcGguZHJhZ1N2Zy5zY2FsZSgpKSArIHRoaXNHcmFwaC5kcmFnU3ZnLnRyYW5zbGF0ZSgpWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQueDtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2N5JywgZnVuY3Rpb24oZCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLnlTdGFydCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC55U3RhcnQgPSAoZC55U3RhcnQgKnRoaXNHcmFwaC5kcmFnU3ZnLnNjYWxlKCkpICsgdGhpc0dyYXBoLmRyYWdTdmcudHJhbnNsYXRlKClbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZC55O1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5wYXRoc1xuICAgICAgICAgICAgICAgICAgICAuYXR0cigneDEnLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnNvdXJjZS54OyB9KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigneTEnLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnNvdXJjZS55OyB9KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigneDInLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnRhcmdldC54OyB9KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigneTInLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnRhcmdldC55OyB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWxsZWQgYWZ0ZXIgYSBzaW5nbGUgbm9kZSBpcyBzcGxpdFxuICAgICAgICAgICAgICogXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7QXJyYXl9ICBuZXdOb2RlcyAgVGhlIG5ldyBub2Rlc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzcGxpdE5vZGVFdmVudChuZXdOb2Rlcykge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzUG9saWN5ID0gdGhpcztcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB0aGlzR3JhcGguc3RhdGUuU3BsaXRKb2luVmlld1BvbGljeSxcbiAgICAgICAgICAgICAgICAgICAgY29uc3RzID0gdGhpc0dyYXBoLmNvbnN0cy5TcGxpdEpvaW5WaWV3UG9saWN5O1xuXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkcmVuX3N0cnVjdCA9IHRoaXNHcmFwaC5jaGlsZHJlbl9zdHJ1Y3Q7XG4gICAgICAgICAgICAgICAgXy5mb3JFYWNoKG5ld05vZGVzLCBmdW5jdGlvbihkKXtcbiAgICAgICAgICAgICAgICAgICAgZC5TcGxpdEpvaW5WaWV3UG9saWN5ID0ge307XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLmluY2x1ZGVzKGNoaWxkcmVuX3N0cnVjdFtzdGF0ZS5mb2N1c0dyb3Vwc1swXV0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQuaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkLlNwbGl0Sm9pblZpZXdQb2xpY3kudHlwZSA9IFwiZm9jdXNcIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuU3BsaXRKb2luVmlld1BvbGljeS50eXBlID0gXCJjb25uZWN0ZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLnN0YXRlLmluaXRGb3JjZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXNQb2xpY3kuc2V0UG9zaXRpb25zKCk7XG4gICAgICAgICAgICAgICAgdmFyIHRpdGxlID0gbmV3Tm9kZXNbMF0ucGFyZW50O1xuICAgICAgICAgICAgICAgIHN0YXRlLmZvY3VzR3JvdXAgPSB0aXRsZTtcblxuICAgICAgICAgICAgICAgIC8vaWYgdGhlIGxhc3QgZXZlbnQgaGFzIHRoZSBzYW1lIGlkLCBpdCBtdXN0IGJlIHRoZVxuICAgICAgICAgICAgICAgIC8vb3BwcG9zaXRlIG9mIHRoaXMgZXZlbnQsIHNvIHdlIHJlbW92ZSB0aGF0IGV2ZW50IGZyb21cbiAgICAgICAgICAgICAgICAvL3RoZSBldmVudCBzdGFjay5cbiAgICAgICAgICAgICAgICAvL090aGVyd2lzZSwgd2UgYWRkIHRoZSBldmVudCBvdCB0aGUgc3RhY2tcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuZXZlbnRIaXN0b3J5Lmxlbmd0aCAhPT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuZXZlbnRIaXN0b3J5W3N0YXRlLmV2ZW50SGlzdG9yeS5sZW5ndGggLSAxXS5pZCA9PT0gdGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZXZlbnRIaXN0b3J5LnBvcCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmV2ZW50SGlzdG9yeS5wdXNoKHtpZDp0aXRsZSwgZXZlbnQ6J3NwbGl0J30pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5iYWNrQnV0dG9uRWxlbSAhPSBudWxsICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmV2ZW50SGlzdG9yeS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuYmFja0J1dHRvbkVsZW0uZmFkZVRvKCdzbG93JywgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS50aXRsZUVsZW0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5mb2N1c0dyb3Vwcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IHN0YXRlLmZvY3VzR3JvdXBzWzBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5mb2N1c0dyb3Vwcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gJyAmICcgKyBzdGF0ZS5mb2N1c0dyb3Vwc1sxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS50aXRsZUVsZW0udGV4dCh0ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL3JlLWVuYWJsZSBncmFwaCB1cGRhdGVcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguc3RhdGUuZGlzYWJsZVVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC51cGRhdGVHcmFwaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1BvbGljeS51cGRhdGVHcmFwaENhbGxiYWNrLmNhbGwodGhpc1BvbGljeSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3RhdGUuem9vbXNbc3RhdGUuZm9jdXNHcm91cHNdID0gW3RoaXNHcmFwaC5kcmFnU3ZnLnRyYW5zbGF0ZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5kcmFnU3ZnLnNjYWxlKCldO1xuICAgICAgICAgICAgICAgIHN0YXRlLnNjYWxlID0gdGhpc0dyYXBoLmRyYWdTdmcuc2NhbGUoKTtcbiAgICAgICAgICAgICAgICBzdGF0ZS50cmFuc2xhdGUgPSB0aGlzR3JhcGguZHJhZ1N2Zy50cmFuc2xhdGUoKTtcblxuICAgICAgICAgICAgICAgIC8vc2F2ZSBjdXJyZW50IGxheW91dFxuICAgICAgICAgICAgICAgIHZhciBsYXlvdXQgPSB7fTtcbiAgICAgICAgICAgICAgICBfLmZvckVhY2godGhpc0dyYXBoLm5vZGVzLCBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgICAgICAgIGxheW91dFtuLmlkXSA9IHt4Om4ueCwgeTpuLnl9O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgc3RhdGUubGF5b3V0W3N0YXRlLmZvY3VzR3JvdXBzXSA9IGxheW91dDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBPdmVycmlkaW5nIGZyb20gc3VwZXIgY2xhc3Mgc28gdGhhdCB3ZSBjYW4gaGF2ZVxuICAgICAgICAgICAgICogdG9wIGxldmVsIG5vZGVzIHJlYXBwZWFyIHdoZW4gdGhleSBhcmUgaGlkZGVuXG4gICAgICAgICAgICAgKiBkdWUgdG8gdGhlcmUgYmVpbmcgdHdvIGZvY3VzIGdyb3Vwcy5cbiAgICAgICAgICAgICAqIFxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge05vZGV9ICAgICAgICAgIG5vZGUgICAgVGhlIG5vZGUgdG8gam9pblxuICAgICAgICAgICAgICogQHJldHVybiAgICAge05vZGV9ICBUaGUgbmV3IG5vZGUgYWZ0ZXIgdGhlIGpvaW5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgX19qb2luTm9kZShub2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGgsXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cyA9IHRoaXNHcmFwaC5jb25zdHMuU3BsaXRKb2luTm9kZVBvbGljeSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVTdXBlciA9IHRoaXNHcmFwaC5zdGF0ZS5TcGxpdEpvaW5Ob2RlUG9saWN5LFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5TcGxpdEpvaW5WaWV3UG9saWN5O1xuXG4gICAgICAgICAgICAgICAgLy9jaGVjayB0aGF0IG5vZGUgc3RpbGwgZXhpc3RzXG4gICAgICAgICAgICAgICAgaWYgKHRoaXNHcmFwaC5ub2Rlcy5pbmRleE9mKG5vZGUpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRyZW5fc3RydWN0ID0gdGhpc0dyYXBoLmNoaWxkcmVuX3N0cnVjdDtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IG5vZGUuaWRcbiAgICAgICAgICAgICAgICAvL2lmIGl0IGhhcyBubyBhbmNlc3Rvciwgbm90aGluZyB0byBqb2luXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuX3N0cnVjdC50b3BMZXZlbC5pbmRleE9mKG5hbWUpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSBub2RlLnBhcmVudDtcbiAgICAgICAgICAgICAgICB2YXIgdG9fYmVfZGVsZXRlZCA9IFtdO1xuICAgICAgICAgICAgICAgIHZhciBub2RlTmFtZVNldCA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpc0dyYXBoLm5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vaWYgbm9kZSB3b24ndCBiZSBjb2xsYXBzZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNHcmFwaC5ub2Rlc1tpXS5hbmNlc3RvcnMuaW5kZXhPZihub2RlLnBhcmVudCkgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVOYW1lU2V0LnB1c2godGhpc0dyYXBoLm5vZGVzW2ldLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvX2JlX2RlbGV0ZWQucHVzaCh0aGlzR3JhcGgubm9kZXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBuZXdfbm9kZV9pZCA9IG5vZGUucGFyZW50O1xuICAgICAgICAgICAgICAgIG5vZGVOYW1lU2V0LnB1c2gobm9kZS5wYXJlbnQpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGFuY2VzdG9yc19zdHJ1Y3QgPSB0aGlzR3JhcGguYW5jZXN0b3JzX3N0cnVjdDtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRyZW5fc3RydWN0ID0gdGhpc0dyYXBoLmNoaWxkcmVuX3N0cnVjdDtcbiAgICAgICAgICAgICAgICAvLyAtIHNldHRpbmcgZm9jdXNHcm91cCAtXG4gICAgICAgICAgICAgICAgLy9laXRoZXIgcmVwbGFjaW5nIG9uZSBvZiB0aGUgZ3JvdXBzLFxuICAgICAgICAgICAgICAgIC8vb3Igam9pbmluZyBiYWNrIGludG8gYSB0b3AgbGV2ZWwsIHNvIHRoZXJlIGlzIG9ubHlcbiAgICAgICAgICAgICAgICAvL29uZSBmb2N1c1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHN0YXRlLmZvY3VzR3JvdXBzLmluZGV4T2YocGFyZW50KTtcbiAgICAgICAgICAgICAgICBpZiAoYW5jZXN0b3JzX3N0cnVjdFtwYXJlbnRdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZm9jdXNHcm91cHNbaW5kZXhdID0gYW5jZXN0b3JzX3N0cnVjdFtwYXJlbnRdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmZvY3VzR3JvdXBzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9uYW1lVG9BZGQgYXJlIHRvcCBsZXZlbCBub2RlcyB0aGF0IGFyZSB0byBiZSBhZGRlZFxuICAgICAgICAgICAgICAgIC8vdG8gdGhlIGdyYXBoLlxuICAgICAgICAgICAgICAgIHZhciBuYW1lVG9BZGQgPSBbXTtcbiAgICAgICAgICAgICAgICAvL3dpbGwgb25seSBuZWVkIHRvIGFkZCBhIHRvcCBsZXZlbCBub2RlIGlmIHRoZXJlIGlzXG4gICAgICAgICAgICAgICAgLy9vbmx5IG9uZSBmb2N1c1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5mb2N1c0dyb3Vwcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9BZGQgb25seSB0aG9zdCB0aGF0IGFyZW4ndCBhbiBhbmNlc3RvciBvZiB0aGUgbm9kZVxuICAgICAgICAgICAgICAgICAgICAvL3RvIGpvaW4sIHRoZSBmb2N1cyBncm91cCBvciBhbiBhbmNlc3RvciBvZiBpdCxcbiAgICAgICAgICAgICAgICAgICAgLy9hbmQgYXJlbid0IGFscmVhZHkgaW4gbm9kZU5hbWVTZXQuXG4gICAgICAgICAgICAgICAgICAgIC8vZ2V0IGZsb3cgYmV0d2VlbiB0b3AgbGV2ZWwgYXMgbG9uZyBhc1xuICAgICAgICAgICAgICAgICAgICAvL3RoZSB0b3AgbGV2ZWwgaXNuJ3QgYW4gYW5jZXN0b3Igb2YgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vZm9jdXMgZ3JvdXAsIGFuZCBpc24ndCBhbHJlYWR5IHBhcnQgb2YgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vbm9kZSBzZXQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhbmNlc3RvcnMgPSBhbmNlc3RvcnNfc3RydWN0W25vZGUuaWRdO1xuICAgICAgICAgICAgICAgICAgICBhbmNlc3RvcnMucHVzaChzdGF0ZS5mb2N1c0dyb3Vwc1swXSk7XG4gICAgICAgICAgICAgICAgICAgIC8vdGhlIG9yIGVtcHR5IGFycmF5IGlzIHRvIHByZXZlbnQgY29uY2F0ZW5hdGluZyBhIG51bGxcbiAgICAgICAgICAgICAgICAgICAgLy9vciB1bmRlZmluZWQgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgYW5jZXN0b3JzID0gYW5jZXN0b3JzLmNvbmNhdChhbmNlc3RvcnNfc3RydWN0W3N0YXRlLmZvY3VzR3JvdXBzWzBdXSB8fCBbXSk7XG4gICAgICAgICAgICAgICAgICAgIF8uZm9yRWFjaChjaGlsZHJlbl9zdHJ1Y3QudG9wTGV2ZWwsIGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbmNlc3RvcnMuaW5kZXhPZihuKSA9PT0gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZU5hbWVTZXQuaW5kZXhPZihuKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVUb0FkZC5wdXNoKG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBub2RlTmFtZVNldCA9IG5vZGVOYW1lU2V0LmNvbmNhdChuYW1lVG9BZGQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUuZm9jdXNHcm91cHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vbm8gZm9jdXMgZ3JvdXBzIG1lYW5zIHdlIGFyZSBhdCB0b3AgbGV2ZWxcbiAgICAgICAgICAgICAgICAgICAgLy9TaG91bGQgYWRkIGFueSB0b3AgbGV2ZWwgbm9kZXMgdGhhdCBhcmVuJ3RcbiAgICAgICAgICAgICAgICAgICAgLy9hbHJlYWR5IHRoZXJlXG4gICAgICAgICAgICAgICAgICAgIF8uZm9yRWFjaChjaGlsZHJlbl9zdHJ1Y3QudG9wTGV2ZWwsIGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlTmFtZVNldC5pbmRleE9mKG4pID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVRvQWRkLnB1c2gobik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIG5vZGVOYW1lU2V0ID0gbm9kZU5hbWVTZXQuY29uY2F0KG5hbWVUb0FkZCk7XG4gICAgICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgICAgIC8vZm9ybWF0dGluZyBkYXRhXG4gICAgICAgICAgICAgICAgdmFyIHJhZGl1cyA9IG5vZGUucmFkaXVzIC8gdGhpc0dyYXBoLmNvbnN0cy5yYWRpdXNEZWNheTsgXG4gICAgICAgICAgICAgICAgdmFyIHhMb2MgPSBub2RlLng7XG4gICAgICAgICAgICAgICAgdmFyIHlMb2MgPSBub2RlLnk7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IG5vZGUuYW5jZXN0b3JzWzFdO1xuICAgICAgICAgICAgICAgIHZhciBhbmNlc3RvcnMgPSBub2RlLmFuY2VzdG9ycy5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3Tm9kZSA9IG5ldyBWaXN1YWxpemVyTm9kZS5Ob2RlKHhMb2MsIHlMb2MsIG5ld19ub2RlX2lkLCBuZXdfbm9kZV9pZCwgcmFkaXVzLCBwYXJlbnQsIGFuY2VzdG9ycyk7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVzLnB1c2gobmV3Tm9kZSk7XG5cbiAgICAgICAgICAgICAgICAvL3JlbW92ZSBhbGwgbm9kZXMgdGhhdCB3aWxsIGJlIGpvaW5lZFxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9fYmVfZGVsZXRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZV90b19kZWxldGUgPSB0b19iZV9kZWxldGVkW2ldXG4gICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5ub2Rlcy5zcGxpY2UodGhpc0dyYXBoLm5vZGVzLmluZGV4T2Yobm9kZV90b19kZWxldGUpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLnNwbGljZUxpbmtzRm9yTm9kZShub2RlX3RvX2RlbGV0ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHJldERhdGEgPSB0aGlzR3JhcGguZGF0YVNvdXJjZS5nZXRGbG93QmV0d2VlblNldChub2RlTmFtZVNldCk7XG4gICAgICAgICAgICAgICAgLy9ob2xkcyB0aGUgbm9kZURhdGEgd2hpY2ggd2lsbCBiZSBwcm9jZXNzZWRcbiAgICAgICAgICAgICAgICB2YXIgbm9kZXNUb1Byb2Nlc3MgPSBbXTtcbiAgICAgICAgICAgICAgICAvL2ZpbmRpbmcgdGhlIG5vZGUgZGF0YSB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSB0b3AgbGV2ZWxcbiAgICAgICAgICAgICAgICAvL25vZGVzIHRvIGFkZCAtIG5hbWVUb0FkZC5cbiAgICAgICAgICAgICAgICB2YXIgbm9kZURhdGEgPSByZXREYXRhLm5vZGVEYXRhO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWVUb0FkZC5pbmRleE9mKG5vZGVEYXRhW2ldLmlkKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzVG9Qcm9jZXNzLnB1c2gobm9kZURhdGFbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9UaGUgdG9wIGxldmVsIG5vZGVzIHRoYXQgYXJlIGFkZGVkXG4gICAgICAgICAgICAgICAgdmFyIG5ld05vZGVzID0gdGhpc0dyYXBoLmRhdGFTb3VyY2UucHJvY2Vzc05vZGVEYXRhKG5vZGVzVG9Qcm9jZXNzKTtcbiAgICAgICAgICAgICAgICBfLmZvckVhY2gobmV3Tm9kZXMsIGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgbi5yYWRpdXMgPSBuLnJhZGl1cyB8fCB0aGlzR3JhcGguY29uc3RzLnN0YXJ0UmFkaXVzO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVzID0gdGhpc0dyYXBoLm5vZGVzLmNvbmNhdChuZXdOb2Rlcyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgubGlua3MgPSB0aGlzR3JhcGguZGF0YVNvdXJjZS5wcm9jZXNzTGlua0RhdGEocmV0RGF0YS5saW5rRGF0YSwgdGhpc0dyYXBoLm5vZGVzKTtcbiAgICAgICAgICAgICAgICAvL09ubHkga2VlcCB0b3AgbGV2ZWwgbm9kZXMgdGhhdCBoYXZlIGNvbm5lY3Rpb25zIHRvXG4gICAgICAgICAgICAgICAgLy90aGUgY3VycmVudCBmb2N1cyBncm91cFxuICAgICAgICAgICAgICAgIC8vd2UgcmVtb3ZlIHRoZSBub2RlIG5hbWUgZnJvbSBuYW1lVG9BZGQgaWYgd2UgYXJlXG4gICAgICAgICAgICAgICAgLy9rZWVwaW5nIGl0XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLmZvY3VzR3JvdXBzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBfLmZvckVhY2godGhpc0dyYXBoLmxpbmtzLCBmdW5jdGlvbihsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NoZWNraW5nIGlmIHRoZXJlIGV4aXN0cyBhIGxpbmsgdG91Y2hpbmcgZWFjaCBvZiBuYW1lVG9BZGRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lVG9BZGQuaW5kZXhPZihsLnNvdXJjZS5pZCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLmZvY3VzR3JvdXBzWzBdID09PSBsLnRhcmdldC5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVRvQWRkLnNwbGljZShuYW1lVG9BZGQuaW5kZXhPZihsLnNvdXJjZS5pZCksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmFtZVRvQWRkLmluZGV4T2YobC50YXJnZXQuaWQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5mb2N1c0dyb3Vwc1swXSA9PT0gbC5zb3VyY2UucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVUb0FkZC5zcGxpY2UobmFtZVRvQWRkLmluZGV4T2YobC50YXJnZXQuaWQpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy9XZSB3YW50IHRvIGtlZXAgdGhlbSBhbGxcbiAgICAgICAgICAgICAgICAgICAgLy9zaW5jZSBhbnkgbGVmdCBpbiBuYW1lVG9BZGQgd2lsbCBiZSByZW1vdmVkLFxuICAgICAgICAgICAgICAgICAgICAvL3dlIHJlc2V0IG5hbWVUb0FkZCBoZXJlLlxuICAgICAgICAgICAgICAgICAgICBuYW1lVG9BZGQgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy93aGF0ZXZlciBpcyByZW1haW5pbmcgaW4gbmFtZVRvQWRkIGlzbid0IGNvbm5lY3RlZFxuICAgICAgICAgICAgICAgIC8vdG8gdGhlIGZvY3VzIGdyb3VwLCBzbyB3ZSBzaG91bGQgcmVtb3ZlIGl0LlxuICAgICAgICAgICAgICAgIHZhciBub2RlVG9SZW1vdmUgPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAobmFtZVRvQWRkLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXNHcmFwaC5ub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWVUb0FkZC5pbmRleE9mKHRoaXNHcmFwaC5ub2Rlc1tpXS5pZCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVRvQWRkLnNwbGljZShuYW1lVG9BZGQuaW5kZXhPZih0aGlzR3JhcGgubm9kZXNbaV0uaWQpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGguc3BsaWNlTGlua3NGb3JOb2RlKHRoaXNHcmFwaC5ub2Rlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVRvUmVtb3ZlLnB1c2godGhpc0dyYXBoLm5vZGVzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZVRvQWRkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXy5mb3JFYWNoKG5vZGVUb1JlbW92ZSwgZnVuY3Rpb24obikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGgubm9kZXMuc3BsaWNlKHRoaXNHcmFwaC5ub2Rlcy5pbmRleE9mKG4sIDEpKTtcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmluaXROb2RlcygpO1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5pbml0TGlua3MoKTtcblxuICAgICAgICAgICAgICAgIHN0YXRlU3VwZXIuc3BsaXROb2Rlcy5zcGxpY2Uoc3RhdGVTdXBlci5zcGxpdE5vZGVzLmluZGV4T2YobmV3Tm9kZS5pZCksIDEpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld05vZGU7IFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGxlZCBhZnRlciBhIHNpbmdsZSBub2RlIGlzIGpvaW5lZFxuICAgICAgICAgICAgICogXG4gICAgICAgICAgICAgKiBJZiB0aGUgZm9jdXMgZ3JvdXAgaGFzIGJlZW4gc2VlbiBiZWZvcmUsIGl0IHdpbGxcbiAgICAgICAgICAgICAqIGxvYWQgdGhhdCBsYXlvdXQuIE90aGVyd2lzZSwgaXQgd2lsbCBydW4gYSBkMyBmb3JjZVxuICAgICAgICAgICAgICogc2ltdWxhdGlvbiB0byBnZW5lcmF0ZSBvbmUuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge05vZGV9ICBuZXdOb2RlICBUaGUgbmV3IG5vZGVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgam9pbk5vZGVFdmVudChuZXdOb2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGgsXG4gICAgICAgICAgICAgICAgICAgIHRoaXNQb2xpY3kgPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5TcGxpdEpvaW5WaWV3UG9saWN5O1xuXG4gICAgICAgICAgICAgICAgLy9pZiB0aGUgbGFzdCBldmVudCBoYXMgdGhlIHNhbWUgaWQsIGl0IG11c3QgYmUgdGhlXG4gICAgICAgICAgICAgICAgLy9vcHBwb3NpdGUgb2YgdGhpcyBldmVudCwgc28gd2UgcmVtb3ZlIHRoYXQgZXZlbnQgZnJvbVxuICAgICAgICAgICAgICAgIC8vdGhlIGV2ZW50IHN0YWNrLlxuICAgICAgICAgICAgICAgIC8vT3RoZXJ3aXNlLCB3ZSBhZGQgdGhlIGV2ZW50IHRvIHRoZSBzdGFja1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5ldmVudEhpc3RvcnkubGVuZ3RoICE9PSAwICYmXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmV2ZW50SGlzdG9yeVtzdGF0ZS5ldmVudEhpc3RvcnkubGVuZ3RoIC0gMV0uaWQgPT09IG5ld05vZGUuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZXZlbnRIaXN0b3J5LnBvcCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmV2ZW50SGlzdG9yeS5wdXNoKHtpZDpuZXdOb2RlLmlkLCBldmVudDonam9pbid9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBjaGlsZHJlbl9zdHJ1Y3QgPSB0aGlzR3JhcGguY2hpbGRyZW5fc3RydWN0O1xuXG4gICAgICAgICAgICAgICAgXy5mb3JFYWNoKHRoaXNHcmFwaC5ub2RlcywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICBkLlNwbGl0Sm9pblZpZXdQb2xpY3kgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8uaW5jbHVkZXMoY2hpbGRyZW5fc3RydWN0W3N0YXRlLmZvY3VzR3JvdXBzWzBdXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuU3BsaXRKb2luVmlld1BvbGljeS50eXBlID0gXCJmb2N1c1wiO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZC5TcGxpdEpvaW5WaWV3UG9saWN5LnR5cGUgPSBcImNvbm5lY3RlZFwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIC8vc2V0dGluZyBiYWNrIGJ1dHRvblxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5iYWNrQnV0dG9uRWxlbSAhPSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuZXZlbnRIaXN0b3J5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5iYWNrQnV0dG9uRWxlbS5mYWRlVG8oJ3Nsb3cnLCAwKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL3NldHRpbmcgdGl0bGVcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUudGl0bGVFbGVtICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRleHQgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUuZm9jdXNHcm91cHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBzdGF0ZS5mb2N1c0dyb3Vwc1swXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUuZm9jdXNHcm91cHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgJiAnICsgc3RhdGUuZm9jdXNHcm91cHNbMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3RhdGUudGl0bGVFbGVtLnRleHQodGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9sb2FkaW5nIGEgcHJldmlvdXMgbGF5b3V0XG4gICAgICAgICAgICAgICAgdmFyIGxheW91dDtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuZm9jdXNHcm91cHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC56b29tZWQoWzAsMF0sIDEpO1xuICAgICAgICAgICAgICAgICAgICBsYXlvdXQgPSBzdGF0ZS5sYXlvdXREZWZhdWx0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB6b29tID0gc3RhdGUuem9vbXNbc3RhdGUuZm9jdXNHcm91cHNdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoem9vbSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGguem9vbWVkKHpvb21bMF0sIHpvb21bMV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxheW91dCA9IHN0YXRlLmxheW91dFtzdGF0ZS5mb2N1c0dyb3Vwc107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGxheW91dCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uZm9yRWFjaCh0aGlzR3JhcGgubm9kZXMsIGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBsYXlvdXRbbi5pZF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsYXlvdXQsIG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbi54ID0gcG9zLng7XG4gICAgICAgICAgICAgICAgICAgICAgICBuLnkgPSBwb3MueTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLnVwZGF0ZUdyYXBoLmNhbGwodGhpc0dyYXBoLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNQb2xpY3kudXBkYXRlR3JhcGhDYWxsYmFjay5jYWxsKHRoaXNQb2xpY3kpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuc2NhbGUgPSB0aGlzR3JhcGguZHJhZ1N2Zy5zY2FsZSgpO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS50cmFuc2xhdGUgPSB0aGlzR3JhcGguZHJhZ1N2Zy50cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL05lZWQgdG8gcnVuIGEgZm9yY2Ugc2ltdWxhdGlvbiBhcyB0aGlzIGxheW91dFxuICAgICAgICAgICAgICAgICAgICAvL2hhc24ndCBiZWVuIGRvbmUgYmVmb3JlXG4gICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5zdGF0ZS5pbml0Rm9yY2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1BvbGljeS5zZXRQb3NpdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLnVwZGF0ZUdyYXBoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1BvbGljeS51cGRhdGVHcmFwaENhbGxiYWNrLmNhbGwodGhpc1BvbGljeSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS56b29tc1tzdGF0ZS5mb2N1c0dyb3Vwc10gPSBbdGhpc0dyYXBoLmRyYWdTdmcudHJhbnNsYXRlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5kcmFnU3ZnLnNjYWxlKCldO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5zY2FsZSA9IHRoaXNHcmFwaC5kcmFnU3ZnLnNjYWxlKCk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnRyYW5zbGF0ZSA9IHRoaXNHcmFwaC5kcmFnU3ZnLnRyYW5zbGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBsYXlvdXQgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgXy5mb3JFYWNoKHRoaXNHcmFwaC5ub2RlcywgZnVuY3Rpb24obikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0W24uaWRdID0ge3g6bi54LCB5Om4ueX07XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmxheW91dFtzdGF0ZS5mb2N1c0dyb3Vwc10gPSBsYXlvdXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFVuZG9lcyB0aGUgbGFzdCBzcGxpdCBvciBqb2luIGV2ZW50LlxuICAgICAgICAgICAgICogTWVhbnQgdG8gYmUgY2FsbGVkIGJ5IHRoZSBiYWNrIGJ1dHRvbi5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdW5kb0xhc3RFdmVudCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaCxcbiAgICAgICAgICAgICAgICAgICAgdGhpc1BvbGljeSA9IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gdGhpc0dyYXBoLnN0YXRlLlNwbGl0Sm9pblZpZXdQb2xpY3k7XG5cbiAgICAgICAgICAgICAgICB2YXIgbGFzdCA9IHN0YXRlLmV2ZW50SGlzdG9yeVtzdGF0ZS5ldmVudEhpc3RvcnkubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgdmFyIGlkID0gbGFzdC5pZDtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZTtcbiAgICAgICAgICAgICAgICBpZiAobGFzdC5ldmVudCA9PT0gJ2pvaW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZHJlbl9zdHJ1Y3QgPSB0aGlzR3JhcGguY2hpbGRyZW5fc3RydWN0OyBcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHRoaXNHcmFwaC5maW5kTm9kZUJ5SWQoaWQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZDNub2RlID0gdGhpc0dyYXBoLmZpbmREM05vZGUoaWQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzUG9saWN5LmRibGNsaWNrKGQzbm9kZSwgbm9kZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGVJZCA9IHRoaXNHcmFwaC5kYXRhU291cmNlLmNoaWxkcmVuX3N0cnVjdFtpZF1bMF07XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSB0aGlzR3JhcGguZmluZE5vZGVCeUlkKG5vZGVJZCk7XG4gICAgICAgICAgICAgICAgICAgIHN1cGVyLmpvaW5Ob2RlLmNhbGwodGhpc1BvbGljeSwgbm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFBvbGljeTogU3BsaXRKb2luVmlld1BvbGljeVxuICAgICAgICB9XG59XSk7XG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
