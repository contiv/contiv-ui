'use strict';

/**
 * Defining the Graph Module.
 * See DESIGN.md for info on Graph Objects.
 */
angular.module('contiv.graph', []);
angular.module("contiv.directives", []);
//# sourceMappingURL=module.js.map
/**
 * Created by vjain3 on 3/14/16.
 */
angular.module('contiv.models', []);
var ContivGlobals = (function () {
    return {
        //REST endpoints for NETMASTER
        'NETWORKS_ENDPOINT': '/netmaster/api/v1/networks/',
        'NETWORKS_INSPECT_ENDPOINT': '/netmaster/api/v1/inspect/networks/',
        'SERVICELBS_INSPECT_ENDPOINT': '/netmaster/api/v1/inspect/serviceLBs/',
        'POLICIES_ENDPOINT': '/netmaster/api/v1/policys/',
        'RULES_ENDPOINT': '/netmaster/api/v1/rules/',
        'APPLICATIONGROUPS_ENDPOINT': '/netmaster/api/v1/endpointGroups/',
        'SERVICELBS_ENDPOINT': '/netmaster/api/v1/serviceLBs/',
        'ORGANIZATIONS_ENDPOINT': '/netmaster/api/v1/tenants/',
        'NETWORK_SETTINGS_ENDPOINT': '/netmaster/api/v1/globals/',
        'NETPROFILES_ENDPOINT': '/netmaster/api/v1/netprofiles/',
        'BGPS_ENDPOINT': '/netmaster/api/v1/Bgps/',
        'BGPS_INSPECT_ENDPOINT': '/netmaster/api/v1/inspect/Bgps/',
        'VISUALIZATION_ENDPOINT': '/visualization/',
        //REST endpoints for VOLMASTER
        'VOLUMES_ENDPOINT': '/volmaster/volumes/',
        'VOLUMES_CREATE_ENDPOINT': '/volmaster/volumes/create/',
        'VOLUMES_DELETE_ENDPOINT': '/volmaster/volumes/remove/',
        'VOLUMES_COPYSNAPSHOTS_ENDPOINT': '/volmaster/volumes/copy',
        'VOLUMES_USES_ENDPOINT': '/volmaster/uses/mounts/',
        'VOLUMES_SNAPSHOTS_ENDPOINT': '/volmaster/snapshots/',
        'STORAGEPOLICIES_ENDPOINT': '/volmaster/policies/',
        'VOLUMES_GLOBAL_ENDPOINT': '/volmaster/global/',
        //REST endpoints for CLUSTER
        'NODES_LIST_ENDPOINT': '/info/nodes',
        'NODES_DISCOVER_ENDPOINT': '/discover/nodes',
        'NODES_COMMISSION_ENDPOINT': '/commission/nodes',
        'NODES_DECOMMISSION_ENDPOINT': '/decommission/nodes',
        'NODES_MAINTENANCE_ENDPOINT': '/maintenance/nodes',
        'NODES_LAST_JOB_ENDPOINT': '/info/job/last',
        'NODES_ACTIVE_JOB_ENDPOINT': '/info/job/active',
        'NODES_SETTINGS_SET_ENDPOINT': '/globals',
        'NODES_SETTINGS_GET_ENDPOINT': '/info/globals',
        //Refresh interval in milliseconds
        'REFRESH_INTERVAL': 5000,
        //RegEx for validation
        'CIDR_REGEX': '^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\/([0-9]|[1-2][0-9]|3[0-2]))$',
        'VLAN_REGEX': '^([0-9]{1,4}?-[0-9]{1,4}?)$',
        'VXLAN_REGEX': '^([0-9]{1,8}?-[0-9]{1,8}?)$',
        'NUMBER_REGEX': '^[0-9]*$'
    };
})();
//# sourceMappingURL=module.js.map
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
 * To write your own DataSource object, create a new factory that uses the 
 * DataSource you want to inherit as a dependency, and extend 
 * its DataSource class. 
 * Return the class object with DataSource as key.
 * 
 * Node data is expected to be in the following format:
 * {id:node_id, text:node_text}
 * 
 * Link data is expected to be in the following format:
 * {source: sourceNodeId, target: targetNodeId}
 * 
 */
angular.module('contiv.graph').factory('DataSource', ['Node', 'Link', function (Node, Link) {
	var DataSource = function () {
		/**
   * Constructs the object.
   *
   * @param      {Array}   nodes              The node data 
   * @param      {Array}   links              The link data
   */
		function DataSource(nodes, links) {
			_classCallCheck(this, DataSource);

			this.nodes = nodes;
			this.links = links;
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
    * process the nodeData to create Node objects
    *
    * @param      {Array}  nodeData  NodeData to convert 
    *                                to node objects
    * @return     {Array}  Node objects
    */

		}, {
			key: 'processNodeData',
			value: function processNodeData(nodeData) {
				var nodes = [];
				_.forEach(nodeData, function (data) {
					var newNode = new Node.Node(null, null, data.id, data.text, null);
					nodes.push(newNode);
				});
				return nodes;
			}

			/**
    * process the linkData
    *
    * @param      {Array}  linkData  The link data
    * @param      {Array}  nodes     The nodes from processNodeData
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
				}

				var links = [];
				//transforming link data
				for (var i = 0; i < linkData.length; i++) {
					if (linkData[i].source != linkData[i].target) {
						var source = findNodeById(linkData[i].source, nodes);
						var target = findNodeById(linkData[i].target, nodes);
						if (source == null || target == null) {
							continue;
						}
						var link = new Link.Link(source, target);
						links.push(link);
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
/**
 * Created by vjain3 on 5/18/16.
 */
angular.module('contiv.utils', []);
//# sourceMappingURL=module.js.map
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The DataSource used for the visualization tab.
 * 
 * Node Data from the server is expected to be in the following format:
 * {id: node_id, text: node_text}
 * Parent and Ancestor attributes can be set by calling setAncestors
 * 
 * Link Data from the server is expected to be in the following format:
 * {source: sourceNodeId, target: targetNodeId, weight: linkWeight}
 * 
 */
angular.module('contiv.graph').factory('VisualizerDataSource', ['DataSource', 'VisualizerNode', 'VisualizerLink', function (DataSource, VisualizerNode, VisualizerLink) {
	var VisualizerDataSource = function (_DataSource$DataSourc) {
		_inherits(VisualizerDataSource, _DataSource$DataSourc);

		/**
   * Constructs the object.
   * 
   * Children Struct and ancestors_struct are JSON objects,
   * mapping a node Id to a list of it's children or ancestors.
   * Children Struct is also expected to have a field called
   * topLevel, that maps to a list of all the nodes that don't
   * have any parents.
   *
   * @param      {Array}   nodes              The node data 
   * @param      {Array}   links              The link data
   * @param      {Object}  children_struct    The children structure
   * @param      {Object}  ancestors_struct   The ancestors structure
   * @param      {Array}   labels             The labels
   * @param      {Array}   selectors          The selectors
   */
		function VisualizerDataSource(nodes, links, children_struct, ancestors_struct, labels, selectors) {
			_classCallCheck(this, VisualizerDataSource);

			var _this = _possibleConstructorReturn(this, (VisualizerDataSource.__proto__ || Object.getPrototypeOf(VisualizerDataSource)).call(this, nodes, links));

			_this.children_struct = children_struct;
			_this.ancestors_struct = ancestors_struct;
			_this.labels = labels;
			_this.selectors = selectors;
			return _this;
		}

		/**
   * Determines if it has child.
   *
   * @param      {string}   id      The identifier
   * @return     {boolean}  True if has child, False otherwise.
   */


		_createClass(VisualizerDataSource, [{
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
				}

				var links = [];
				//a mapping from source.id-target.id to the link added
				var added_links = {};
				//transforming link data
				for (var i = 0; i < linkData.length; i++) {
					if (linkData[i].source != linkData[i].target) {
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

		return VisualizerDataSource;
	}(DataSource.DataSource);

	return {
		DataSource: VisualizerDataSource
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
angular.module('contiv.graph').factory('Graph', ['PolicyService', function (PolicyService) {
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
                thisGraph.svgPolicy.destroy();
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
                var thisGraph = this;
                if (typeof policyRemove === 'string') {
                    policyRemoveName = policyRemove;
                } else {
                    policyRemoveName = policyRemove.policyName;
                }
                _(thisGraph.defaultPathPolicies).forEach(function (policy, index) {
                    if (policy.policyName === policyRemoveName) {
                        policy.destroy();
                        thisGraph.defaultPathPolicies.splice(index, 1);
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
                var thisGraph = this;

                var nodes = thisGraph.nodes;
                var links = thisGraph.links;
                if (_.isEmpty(nodes)) {
                    return;
                }

                var bounds = thisGraph.d3ForceBounds();

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
                    force.tick();
                    k = k + 1;
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
                var thisGraph = this;

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
angular.module('contiv.graph').factory('VisualizerGraph', ['Graph', function (Graph) {
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
         */
        function VisualizerGraph(svg, nodes, links, dataSource) {
            _classCallCheck(this, VisualizerGraph);

            var _this = _possibleConstructorReturn(this, (VisualizerGraph.__proto__ || Object.getPrototypeOf(VisualizerGraph)).call(this, svg, nodes, links));

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
                var bodyEl = document.getElementsByTagName('body')[0];
                var offset = $('#visualization-graph').offset();
                var divWidth = $('#visualization-graph').width();
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
angular.module('contiv.graph').factory('Link', [function () {
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
    * @param      {Link}  	   d       Matching Link Object       
    */

		}, {
			key: 'updateAttr',
			value: function updateAttr(d3path, d) {
				d3path.style('marker-end', 'url(#end-arrow)').attr("d", arrowPath);
			}

			/**
    * Called during the first update graph for a link
    *
    * @param      {D3Object}  d3path  The d3 path
    * @param      {Link}  	   d       Matching Link Object       
    */

		}, {
			key: 'newPathAttr',
			value: function newPathAttr(d3path, d) {
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
				this.hasPolicy = true;
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
				var thisPath = this;
				if (typeof policyRemove === 'string') {
					policyRemoveName = policyRemove;
				} else {
					policyRemoveName = policyRemove.policyName;
				}
				_(thisPath.pathPolicies).forEach(function (policy, index) {
					if (policy.policyName === policyRemoveName) {
						policy.destroy();
						thisPath.pathPolicies.splice(index, 1);
					}
				});
				if (thisPath.pathPolicies.length === 0) {
					thisPath.hasPolicy = false;
				}
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
				_(d.pathPolicies).forEach(function (policy) {
					policy[event](d3path, d);
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
angular.module('contiv.graph').factory('VisualizerLink', ['Link', function (Link) {
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

			var _this = _possibleConstructorReturn(this, (VisualizerLink.__proto__ || Object.getPrototypeOf(VisualizerLink)).call(this, sourceNode, targetNode));

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
					_get(VisualizerLink.prototype.__proto__ || Object.getPrototypeOf(VisualizerLink.prototype), 'initialize', this).call(this, graph);
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
angular.module('contiv.graph').factory('Node', [function () {
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
			this.radius = radius;
			this.id = id;
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
				this.hasPolicy = true;
				this.nodePolicies.push(policy);
				policy.initialize(this.graph);
			}

			/**
    * Used to uninstall policy for this node
    *
    * @param      {Policy|string}  policyRemove  The policy to remove
    */

		}, {
			key: 'uninstallNodePolicy',
			value: function uninstallNodePolicy(policyRemove) {
				var policyRemoveName;
				var thisNode = this;
				if (typeof policyRemove === 'string') {
					policyRemoveName = policyRemove;
				} else {
					policyRemoveName = policyRemove.policyName;
				}
				_(thisNode.nodePolicies).forEach(function (policy, index) {
					if (policy.policyName === policyRemoveName) {
						policy.destroy();
						thisNode.nodePolicies.splice(index, 1);
					}
				});
				if (thisNode.nodePolicies.length === 0) {
					thisNode.hasPolicy = false;
				}
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
angular.module('contiv.graph').factory('VisualizerNode', ['Node', function (Node) {
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
   * @param      {Array}   ancestors  Array of ancestors Id
   * @param      {number}  xStart     x loc to start animation
   * @param      {number}  yStart     y loc to start animation
   */
		function VisualizerNode(x, y, id, text, radius, parent, ancestors, xStart, yStart) {
			_classCallCheck(this, VisualizerNode);

			var _this = _possibleConstructorReturn(this, (VisualizerNode.__proto__ || Object.getPrototypeOf(VisualizerNode)).call(this, x, y, id, text, radius));

			_this.parent = parent;
			_this.ancestors = ancestors;
			if (xStart == null) {
				_this.xStart = x;
			} else {
				_this.xStart = xStart;
			}
			if (yStart == null) {
				_this.yStart = y;
			} else {
				_this.yStart = yStart;
			}
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
				if (thisGraph.consts.containerClass != null && thisGraph.dataSource.children_struct[d.id] == null) {
					d3node.classed(thisGraph.consts.containerClass, true);
				}
				d3node.transition("nodePositionTransition").duration(750).attrTween("transform", function (d) {
					if (d.xStart != null && d.yStart != null) {
						var xStart = d.xStart;
						var yStart = d.yStart;
						d.xStart = d.x;
						d.yStart = d.y;
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
angular.module('contiv.graph').factory('NodeSelectionPolicy', ['Policy', function (Policy) {
    var NodeSelectionPolicy = function (_Policy$Policy) {
        _inherits(NodeSelectionPolicy, _Policy$Policy);

        /**
         * Constructs the object.
         */
        function NodeSelectionPolicy() {
            _classCallCheck(this, NodeSelectionPolicy);

            return _possibleConstructorReturn(this, (NodeSelectionPolicy.__proto__ || Object.getPrototypeOf(NodeSelectionPolicy)).call(this, "NodeSelectionPolicy"));
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
                _get(NodeSelectionPolicy.prototype.__proto__ || Object.getPrototypeOf(NodeSelectionPolicy.prototype), 'initialize', this).call(this, graph);
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
                    state = thisGraph.state.NodeSelectionPolicy;
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
                    state = thisGraph.state.NodeSelectionPolicy;
                if (!d3.event.ctrlKey) {
                    //if length is greater than 1, then we are moving multiple nodes
                    //leave them all highlighted
                    //otherwise we are just moving one node, so unhighlight
                    if (state.selectedNodes.length <= 1) {
                        this.removeSelectFromNode(d3node, d);
                    }
                }
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
angular.module('contiv.graph').factory('PathChangeViewPolicy', ['Policy', function (Policy) {
    var PathChangeViewPolicy = function (_Policy$Policy) {
        _inherits(PathChangeViewPolicy, _Policy$Policy);

        /**
         * Called to build policy
         *
         * @param   {Angular State}    $state    Used to change view
         */
        function PathChangeViewPolicy($state) {
            _classCallCheck(this, PathChangeViewPolicy);

            var _this = _possibleConstructorReturn(this, (PathChangeViewPolicy.__proto__ || Object.getPrototypeOf(PathChangeViewPolicy)).call(this, 'PathChangeViewPolicy'));

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
                var generateListHelper = function generateListHelper(id, retList) {
                    var nodeIds = thisPolicy.graph.dataSource.children_struct[id];
                    for (var i = 0; i < nodeIds.length; i++) {
                        var childId = nodeIds[i];
                        if (thisPolicy.graph.dataSource.hasChild(childId) === true) {
                            var subRetList = generateListHelper(childId, retList);
                            retList.concat(subRetList);
                        } else {
                            retList.push(childId);
                        }
                    }
                };
                generateListHelper(id, retList);
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
/**
 * Created by vjain3 on 5/18/16.
 */
angular.module('contiv.applicationgroups', ['contiv.models', 'contiv.directives', 'contiv.utils'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.applicationgroups', {
            url: '/applicationgroups',
            abstract: true,
            template: '<div ui-view class="ui container"/>'
        })
            .state('contiv.menu.applicationgroups.create', {
            url: '/create',
            component: 'applicationgroupcreate'
        })
            .state('contiv.menu.applicationgroups.details', {
            url: '/details/:key',
            component: 'applicationgroupdetails'
        })
            .state('contiv.menu.applicationgroups.edit', {
            url: '/edit/:key',
            component: 'applicationgroupdetails'
        })
            .state('contiv.menu.applicationgroups.list', {
            url: '/list',
            component: 'applicationGrouplist'
        });
    }]);
//# sourceMappingURL=module.js.map
/**
 * Created by vjain3 on 5/18/16.
 */
angular.module('contiv.dashboard', ['contiv.models'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.dashboard', {
            url: '/dashboard',
            component: 'dashboard'
        });
    }]);
//# sourceMappingURL=module.js.map
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
angular.module('contiv.graph').factory('Policy', [function () {
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
/**
 * Created by vjain3 on 5/19/16.
 */
angular.module('contiv.login', ['contiv.utils']);
//# sourceMappingURL=module.js.map
/**
 * Created by vjain3 on 5/19/16.
 */
angular.module('contiv.menu', []);
//# sourceMappingURL=module.js.map
'use strict';

/**
 * Contains all the policies.
 * See policy.js for info on how policies work.
 */
angular.module('contiv.graph').factory('PolicyService', ['Policy', 'QTipPolicy', 'PathChangeViewPolicy', 'NodeSelectionPolicy', 'SplitJoinNodePolicy', 'SplitJoinViewPolicy', 'SaveStatePolicy', function (Policy, QTipPolicy, PathChangeViewPolicy, NodeSelectionPolicy, SplitJoinNodePolicy, SplitJoinViewPolicy, SaveStatePolicy) {

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
/**
 * Created by vjain3 on 5/18/16.
 */
angular.module('contiv.networkpolicies', ['contiv.models', 'contiv.directives', 'contiv.utils'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.networkpolicies', {
            url: '/networkpolicies',
            abstract: true,
            template: '<div ui-view class="ui container"/>'
        })
            .state('contiv.menu.networkpolicies.isolation', {
            url: '/isolation',
            abstract: true,
            template: '<ui-view/>'
        })
            .state('contiv.menu.networkpolicies.isolation.create', {
            url: '/create',
            component: 'isolationpolicycreate'
        })
            .state('contiv.menu.networkpolicies.isolation.details', {
            url: '/details/:key',
            component: 'isolationpolicydetails'
        })
            .state('contiv.menu.networkpolicies.isolation.edit', {
            url: '/edit/:key',
            component: 'isolationpolicydetails'
        })
            .state('contiv.menu.networkpolicies.bandwidth', {
            url: '/bandwidth',
            abstract: true,
            template: '<ui-view/>'
        })
            .state('contiv.menu.networkpolicies.bandwidth.create', {
            url: '/create',
            component: 'bandwidthpolicycreate'
        })
            .state('contiv.menu.networkpolicies.bandwidth.details', {
            url: '/details/:key',
            component: 'bandwidthpolicydetails'
        })
            .state('contiv.menu.networkpolicies.bandwidth.edit', {
            url: '/edit/:key',
            component: 'bandwidthpolicydetails'
        })
            .state('contiv.menu.networkpolicies.redirection', {
            url: '/redirection',
            abstract: true,
            template: '<ui-view/>'
        })
            .state('contiv.menu.networkpolicies.list', {
            url: '/list',
            //abstract: true,
            component: 'networkpoliciestabs'
        });
    }]);
//# sourceMappingURL=module.js.map
/**
 * Created by vjain3 on 5/18/16.
 */
angular.module('contiv.networks', ['contiv.models', 'contiv.directives', 'contiv.utils'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('contiv.menu.networks', {
            url: '/networks',
            abstract: true,
            template: '<div ui-view class="ui container"/>'
        })
            .state('contiv.menu.networks.list', {
            url: '/list',
            component: 'networkList'
        }).
            state('contiv.menu.networks.details', {
            url: '/details/:key',
            component: 'networkdetails'
        })
            .state('contiv.menu.networks.create', {
            url: '/create',
            component: 'networkcreate'
        });
    }]);
//# sourceMappingURL=module.js.map
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
angular.module('contiv.graph').factory('QTipPolicy', ['Policy', function (Policy) {
    var QTipPolicy = function (_Policy$Policy) {
        _inherits(QTipPolicy, _Policy$Policy);

        /**
         * Constructs the object.
         */
        function QTipPolicy() {
            _classCallCheck(this, QTipPolicy);

            return _possibleConstructorReturn(this, (QTipPolicy.__proto__ || Object.getPrototypeOf(QTipPolicy)).call(this, "QTipPolicy"));
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
                _get(QTipPolicy.prototype.__proto__ || Object.getPrototypeOf(QTipPolicy.prototype), 'initialize', this).call(this, graph);

                var thisPolicy = this;
                var state = graph.state.QTipPolicy = {};

                state.mousedown = false;

                graph.consts.QTipPolicy = {};

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
        }, {
            key: 'whenQTipAvailable',
            value: function whenQTipAvailable(callback) {
                var thisPolicy = this;
                var interval = 500; // ms
                window.setTimeout(function () {
                    if ($(document).qtip != null) {
                        callback();
                    } else {
                        window.setTimeout(thisPolicy.whenQTipAvailable(callback), interval);
                    }
                }, interval);
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

                function attachQTip() {
                    //attaching qtip
                    newNodes.each(function (d) {
                        var thisNode = this;

                        var text;

                        //If node has children, then it is a service
                        if (thisGraph.dataSource.children_struct[d.id] != null) {
                            text = "<b><u>Selectors:</b></u> ";
                            var selectorMap = thisGraph.dataSource.selectors[d.id];
                            var hasKeys = false;
                            for (var key in selectorMap) {
                                hasKeys = true;
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
                                hasKeys = true;
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
                                // target: position
                            },
                            hide: {
                                event: 'mousedown mouseleave'
                            }
                        });
                    });
                }
                //incase library hasn't loaded yet
                if ($(document).qtip != undefined) {
                    attachQTip();
                } else {
                    this.whenQTipAvailable(attachQTip);
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
/**
 * Created by vjain3 on 5/18/16.
 */
angular.module('contiv.nodes', ['contiv.models', 'contiv.directives', 'contiv.utils'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.nodes', {
            url: '/nodes',
            abstract: true,
            template: '<div ui-view class="ui container"/>'
        });
    }]);
//# sourceMappingURL=module.js.map
angular.module('contiv.organizations', ['contiv.models', 'contiv.directives', 'contiv.utils'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('contiv.menu.organizations', {
            url: '/organizations',
            abstract: true,
            template: '<div ui-view class="ui container"/>'
        })
            .state('contiv.menu.organizations.list', {
            url: '/list',
            component: 'organizationlist'
        });
    }]);
//# sourceMappingURL=module.js.map
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
angular.module('contiv.graph').factory('SaveStatePolicy', ['Policy', function (Policy) {
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

            var _this = _possibleConstructorReturn(this, (SaveStatePolicy.__proto__ || Object.getPrototypeOf(SaveStatePolicy)).call(this, 'SaveStatePolicy'));

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
/**
 * Created by vjain3 on 5/18/16.
 */
angular.module('contiv.servicelbs', ['contiv.models', 'contiv.directives', 'contiv.utils'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.servicelbs', {
            url: '/servicelbs',
            abstract: true,
            template: '<div ui-view class="ui container"/>'
        })
            .state('contiv.menu.servicelbs.list', {
            url: '/list',
            component: 'servicelbList'
        })
            .state('contiv.menu.servicelbs.create', {
            url: '/create',
            component: 'servicelbCreate'
        })
            .state('contiv.menu.servicelbs.details', {
            url: '/details/:key',
            component: 'servicelbDetails'
        });
    }]);
//# sourceMappingURL=module.js.map
angular.module('contiv.settings', ['contiv.models', 'contiv.directives', 'contiv.utils'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.settings', {
            url: '/global',
            abstract: true,
            template: '<div ui-view class="ui container"/>'
        })
            .state('contiv.menu.settings.details', {
            url: '/settings',
            templateUrl: 'settings/settingsmenu.html'
        })
            .state('contiv.menu.settings.details.logs', {
            url: '/logs',
            controller: '',
            templateUrl: ''
        })
            .state('contiv.menu.settings.details.auth', {
            url: '/auth',
            controller: '',
            templateUrl: ''
        })
            .state('contiv.menu.settings.details.license', {
            url: '/license',
            controller: '',
            templateUrl: ''
        })
            .state('contiv.menu.settings.details.policies', {
            url: '/policies',
            controller: '',
            templateUrl: ''
        })
            .state('contiv.menu.settings.details.networks', {
            url: '/networks',
            component: 'networksetting'
        })
            .state('contiv.menu.settings.details.volumes', {
            url: '/volumes',
            component: 'volumesetting'
        });
    }]);
//# sourceMappingURL=module.js.map
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
angular.module('contiv.graph').factory('SplitJoinNodePolicy', ['NodeSelectionPolicy', 'VisualizerNode', function (NodeSelectionPolicy, VisualizerNode) {
    var SplitJoinNodePolicy = function (_NodeSelectionPolicy$) {
        _inherits(SplitJoinNodePolicy, _NodeSelectionPolicy$);

        /**
         * Constructs the object.
         */
        function SplitJoinNodePolicy() {
            _classCallCheck(this, SplitJoinNodePolicy);

            var _this = _possibleConstructorReturn(this, (SplitJoinNodePolicy.__proto__ || Object.getPrototypeOf(SplitJoinNodePolicy)).call(this));

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
                _get(SplitJoinNodePolicy.prototype.__proto__ || Object.getPrototypeOf(SplitJoinNodePolicy.prototype), 'initialize', this).call(this, graph);
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
                    superState = thisGraph.state.SplitJoinNodePolicy;

                if (!d3.event.ctrlKey) {
                    if (superState.selectedNodes.indexOf(d) > -1) {
                        this.splitMultipleNodes(superState.selectedNodes);
                    } else {
                        this.removeAllSelectedNodes();
                        this.splitNode(d);
                    }
                }
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
                    superState = thisGraph.state.NodeSelectionPolicy;
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
                var children_struct = thisGraph.dataSource.children_struct;
                //if it has no children to split into
                if (children_struct[name] === undefined || _.isEmpty(children_struct[name])) {
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
                var thisGraph = this.graph;
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
                    state = thisGraph.state.SplitJoinNodePolicy;

                //check that node still exists
                if (thisGraph.nodes.indexOf(node) == -1) {
                    return;
                }

                var children_struct = thisGraph.dataSource.children_struct;
                var name = node.id;
                //if it has no ancestor, nothing to join
                if (children_struct.topLevel.indexOf(name) > -1) {
                    return;
                }

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
/**
 * Created by vjain3 on 5/18/16.
 */
angular.module('contiv.storagepolicies', ['contiv.models', 'contiv.directives', 'contiv.utils'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.storagepolicies', {
            url: '/storagepolicies',
            abstract: true,
            template: '<div ui-view class="ui container"/>'
        })
            .state('contiv.menu.storagepolicies.list', {
            url: '/list',
            component: 'storagepolicylist'
        });
    }]);
//# sourceMappingURL=module.js.map


angular.module('contiv.visualization', ['contiv.models', 'contiv.directives', 'contiv.utils', 
	'contiv.graph'])
 .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('contiv.menu.visualization', {
            url: '/visualization',
            abstract: true,
            template: '<div ui-view class="ui container"/>'
        })
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
angular.module('contiv.graph').factory('SplitJoinViewPolicy', ['SplitJoinNodePolicy', 'VisualizerNode', function (SplitJoinNodePolicy, VisualizerNode) {
    var SplitJoinViewPolicy = function (_SplitJoinNodePolicy$) {
        _inherits(SplitJoinViewPolicy, _SplitJoinNodePolicy$);

        /**
         * Constructs the object.
         */
        function SplitJoinViewPolicy() {
            _classCallCheck(this, SplitJoinViewPolicy);

            var _this = _possibleConstructorReturn(this, (SplitJoinViewPolicy.__proto__ || Object.getPrototypeOf(SplitJoinViewPolicy)).call(this));

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
                _get(SplitJoinViewPolicy.prototype.__proto__ || Object.getPrototypeOf(SplitJoinViewPolicy.prototype), 'initialize', this).call(this, graph);
                var state = graph.state.SplitJoinViewPolicy = {};
                state.savedStates = [];
                // state.focusGroup = null;
                state.eventHistory = [];
                state.focusGroups = [];
                state.foci = [];
                state.zooms = {};
                state.layout = {};
                state.layoutDefault = null;
                state.zoomDefault = null;
                state.nodeIdsToReshow = null;
                state.backButtonElem = null;
                state.titleElem = null;

                var consts = graph.consts.SplitJoinViewPolicy = {};
                consts.boundary = 0.8;

                //overriding d3force methods of the graph.
                graph.d3ForceBounds = this.d3ForceBounds;
                graph.d3ForceTick = this.d3ForceTick;
                graph.d3ForceStart = this.d3ForceStart;
                graph.d3ForceEnd = this.d3ForceEnd;
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

                var nodes = thisGraph.nodes;
                var links = thisGraph.links;
                var currTitle = null;
                if (state.titleElem != null) {
                    currTitle = state.titleElem.text();
                }
                var focusGroups = state.focusGroups;
                var eventHistory = state.eventHistory;
                var zooms = state.zooms;
                var layout = state.layout;

                var layoutDefault = state.layoutDefault;
                var zoomDefault = state.zoomDefault;
                var ret = { nodes: nodes, links: links,
                    states: state.savedStates, currTitle: currTitle,
                    focusGroups: focusGroups,
                    eventHistory: eventHistory, zooms: zooms,
                    layout: layout, layoutDefault: layoutDefault,
                    zoomDefault: zoomDefault };
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
                state.eventHistory = loadState.eventHistory;
                state.focusGroups = loadState.focusGroups;
                state.zooms = loadState.zooms;
                state.layout = loadState.layout;
                state.layoutDefault = loadState.layoutDefault;
                state.zoomDefault = loadState.zoomDefault;

                if (state.backButtonElem != null) {
                    if (state.eventHistory.length > 0) {
                        state.backButtonElem.fadeTo('slow', 1);
                    }
                }

                var children_struct = thisGraph.dataSource.children_struct;

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
                    layout = state.layoutDefault;
                    var zoom = state.zoomDefault;
                    thisGraph.zoomed(zoom[0], zoom[1]);
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
             * split is a focus node, it will replace focusGroups[0] and
             * the top half will be its children, and bottom half will
             * be the nodes it has connections to.
             * 
             * If the split is in the bottom half, then the bottom half
             * will display it's children and will only show connections between
             * the two groups, and will replace focusGroups[1].
             * 
             * @param      {D3Obj}   d3node  The d3 node
             * @param      {Object}  d       The matching data object
             */

        }, {
            key: 'dblclick',
            value: function dblclick(d3node, d) {
                var thisGraph = this.graph,
                    state = thisGraph.state.SplitJoinViewPolicy;

                //check if can split
                var name = d.id;
                var children_struct = thisGraph.dataSource.children_struct;
                if (children_struct[name] === undefined || _.isEmpty(children_struct[name])) {
                    return;
                }

                state.focusGroups.slice();

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
                        }
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
                        //disabling qtip if installed
                        if ($(this).qtip != null) {
                            $(this).qtip('disable', true);
                        }
                    }
                });

                var translate = thisGraph.dragSvg.translate();
                var scale = thisGraph.dragSvg.scale();
                var xLoc = parseFloat(thisGraph.svg.style("width")) / scale / 2 + translate[0];
                var yLoc = parseFloat(thisGraph.svg.style("height")) / scale / 2 + translate[1];
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

                var splitNodeFunc = _get(SplitJoinViewPolicy.prototype.__proto__ || Object.getPrototypeOf(SplitJoinViewPolicy.prototype), 'splitNode', this);
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
                    state = thisGraph.state.SplitJoinViewPolicy;

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
                    graphConsts = thisGraph.consts;

                var offset = graphConsts.displayOffset;
                var nodes = thisGraph.nodes;
                var ret = thisPolicy.d3ForceBounds.call(thisGraph);

                function getRandomInt(min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                }

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
             * Called on the start of the d3 force simulation
             * Will override the method of the graph
             * "this" points to the graph
             */

        }, {
            key: 'd3ForceEnd',
            value: function d3ForceEnd() {
                var thisGraph = this,
                    state = thisGraph.state,
                    statePolicy = state.SplitJoinViewPolicy;
                if (statePolicy.layoutDefault == null) {
                    var defaultLayout = {};
                    _.forEach(thisGraph.nodes, function (n) {
                        defaultLayout[n.id] = { x: n.x, y: n.y };
                    });
                    statePolicy.layoutDefault = defaultLayout;
                    var scale = thisGraph.dragSvg.scale();
                    var translate = thisGraph.dragSvg.translate();
                    statePolicy.zoomDefault = [translate, scale];
                }

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
                var scale = thisGraph.dragSvg.scale();

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
                var svgWidth = parseFloat(thisGraph.svg.style("width"));
                var svgHeight = parseFloat(thisGraph.svg.style("height"));

                var width = svgWidth;
                var height = svgHeight;

                var amount = calcMaxNodes(width - 2 * offset, height - 2 * offset);
                var scale = 1;
                if (nodes.length > amount) {
                    scale = amount / nodes.length;
                    thisGraph.zoomed(thisGraph.dragSvg.translate(), scale);
                    width /= scale;
                    height /= scale;
                } else {
                    thisGraph.zoomed(thisGraph.dragSvg.translate(), scale);
                }

                //calculating foci for simulation
                var focusGroups = statePolicy.focusGroups;
                var foci;
                if (focusGroups.length === 0) {
                    foci = [height / 2];
                } else {
                    //setting foci height position based on percentage
                    var focusNodes = thisGraph.dataSource.children_struct[focusGroups[0]];
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
                statePolicy.foci = foci;
                return { width: width, height: height };
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
                    state = thisGraph.state.SplitJoinViewPolicy;

                var children_struct = thisGraph.dataSource.children_struct;
                _.forEach(newNodes, function (d) {
                    d.SplitJoinViewPolicy = {};
                    if (_.includes(children_struct[state.focusGroups[0]], d.id)) {
                        d.SplitJoinViewPolicy.type = "focus";
                    } else {
                        d.SplitJoinViewPolicy.type = "connected";
                    }
                });

                var title = newNodes[0].parent;
                // state.focusGroup = title;

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
                thisPolicy.setLayout();
            }

            /**
             * Sets the layout of the nodes. 
             * If there is a previous layout, it will be loaded.
             * Else, it will run a D3 Force simulation and create one.
             */

        }, {
            key: 'setLayout',
            value: function setLayout() {
                var thisPolicy = this;
                var thisGraph = this.graph,
                    state = thisGraph.state.SplitJoinViewPolicy;
                var layout;
                if (state.focusGroups.length === 0) {
                    layout = state.layoutDefault;
                    var zoom = state.zoomDefault;
                    thisGraph.zoomed(zoom[0], zoom[1]);
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
                } else {
                    //Need to run a force simulation as this layout
                    //hasn't been done before
                    thisGraph.state.initForce = false;
                    // thisPolicy.setPositions();
                    thisGraph.updateGraph(function () {
                        thisPolicy.updateGraphCallback.call(thisPolicy);
                    });
                    state.zooms[state.focusGroups] = [thisGraph.dragSvg.translate(), thisGraph.dragSvg.scale()];
                    var layout = {};
                    _.forEach(thisGraph.nodes, function (n) {
                        layout[n.id] = { x: n.x, y: n.y };
                    });
                    state.layout[state.focusGroups] = layout;
                }
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
                    stateSuper = thisGraph.state.SplitJoinNodePolicy,
                    state = thisGraph.state.SplitJoinViewPolicy;

                //check that node still exists
                if (thisGraph.nodes.indexOf(node) == -1) {
                    return;
                }

                var children_struct = thisGraph.dataSource.children_struct;
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

                var ancestors_struct = thisGraph.dataSource.ancestors_struct;
                var children_struct = thisGraph.dataSource.children_struct;
                // - setting focusGroups -
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
                    thisGraph.nodes.splice(thisGraph.nodes.indexOf(n), 1);
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

                var children_struct = thisGraph.dataSource.children_struct;

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
                thisPolicy.setLayout();
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
                    node = thisGraph.findNodeById(id);
                    var d3node = thisGraph.findD3Node(id);
                    thisPolicy.dblclick(d3node, node);
                } else {
                    var nodeId = thisGraph.dataSource.children_struct[id][0];
                    node = thisGraph.findNodeById(nodeId);
                    _get(SplitJoinViewPolicy.prototype.__proto__ || Object.getPrototypeOf(SplitJoinViewPolicy.prototype), 'joinNode', this).call(thisPolicy, node);
                }
            }
        }]);

        return SplitJoinViewPolicy;
    }(SplitJoinNodePolicy.Policy);

    return {
        Policy: SplitJoinViewPolicy
    };
}]);
/**
 * Created by vjain3 on 5/18/16.
 */
angular.module('contiv.volumes', ['contiv.models', 'contiv.directives', 'contiv.utils'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.volumes', {
            url: '/volumes',
            abstract: true,
            template: '<div ui-view class="ui container"/>'
        })
            .state('contiv.menu.volumes.list', {
            url: '/list',
            component: 'volumelist'
        })
            .state('contiv.menu.volumes.details', {
            url: '/details/:key',
            component: 'volumedetails'
        });
    }]);
//# sourceMappingURL=module.js.map
'use strict';
// Declare app level module which depends on views, and components
angular.module('contivApp', [
    'ui.router',
    'contiv.login',
    'contiv.menu',
    'contiv.dashboard',
    'contiv.applicationgroups',
    'contiv.networks',
    'contiv.networkpolicies',
    'contiv.storagepolicies',
    'contiv.servicelbs',
    'contiv.volumes',
    'contiv.nodes',
    'contiv.organizations',
    'contiv.settings',
    'contiv.visualization'
])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('contiv', {
            url: '',
            abstract: true,
            template: '<div ui-view class="ui fluid container"/>'
        });
        $urlRouterProvider.otherwise('/');
    }]);
//# sourceMappingURL=app.js.map
/**
 * Created by vjain3 on 5/19/16.
 */
angular.module('contiv.login')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.login', {
            url: '/',
            templateUrl: 'login/login.html',
            controller: 'LoginCtrl as loginCtrl'
        });
    }])
    .controller('LoginCtrl', ['$state', 'CRUDHelperService',
    function ($state, CRUDHelperService) {
        var loginCtrl = this;
        function returnToDashboard() {
            $state.go('contiv.menu.dashboard', { username: loginCtrl.username });
        }
        function login() {
            returnToDashboard();
        }
        CRUDHelperService.stopLoader(loginCtrl);
        CRUDHelperService.hideServerError(loginCtrl);
        loginCtrl.login = login;
    }]);
//# sourceMappingURL=loginctrl.js.map
/**
 * Created by vjain3 on 5/19/16.
 */
angular.module('contiv.menu')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu', {
            url: '/m',
            templateUrl: 'menu/menu.html',
            controller: 'MenuCtrl as menuCtrl',
            params: { username: null }
        });
    }])
    .controller('MenuCtrl', ['$state', '$stateParams', function ($state, $stateParams) {
        var menuCtrl = this;
        function logout() {
            $state.go('contiv.login');
        }
        menuCtrl.username = $stateParams.username;
        menuCtrl.logout = logout;
    }]);
//# sourceMappingURL=menuCtrl.js.map
angular.module('contiv.nodes')
    .factory('BgpService', ['$http', '$q', function ($http, $q) {
        function getBgp(ctrl) {
            var deferred = $q.defer();
            var url = ContivGlobals.BGPS_ENDPOINT + ctrl.key + '/';
            $http.get(url).then(function successCallback(result) {
                deferred.resolve(result.data);
                ctrl.neighbor = result.data;
                ctrl.neighbors.push({ 'name': ctrl.neighbor['neighbor'], 'value': ctrl.neighbor['neighbor-as'] });
            }, function errorCallback(result) {
                deferred.reject(result.data);
            });
            return deferred.promise;
        }
        function updateBgp(ctrl) {
            var url = ContivGlobals.BGPS_ENDPOINT + ctrl.key + '/';
            return $http.post(url, ctrl.neighbor);
        }
        ;
        function getBgpInspect(key) {
            var deferred = $q.defer();
            var url = ContivGlobals.BGPS_INSPECT_ENDPOINT + key + '/';
            $http.get(url).then(function successCallback(result) {
                deferred.resolve(result.data);
            }, function errorCallback(result) {
                deferred.reject(result.data);
            });
            return deferred.promise;
        }
        return {
            getBgp: getBgp,
            updateBgp: updateBgp,
            getBgpInspect: getBgpInspect
        };
    }]);
//# sourceMappingURL=bgpservice.js.map
angular.module("contiv.nodes")
    .directive("ctvLogs", function () {
    return {
        restrict: 'E',
        templateUrl: 'nodes/logs.html',
        scope: {
            log: "=",
            title: "@"
        }
    };
});
//# sourceMappingURL=logsdirective.js.map
angular.module('contiv.nodes')
    .factory('LogService', ['$http', '$q', function ($http, $q) {
        function getActiveLogs() {
            var deferred = $q.defer();
            var url = ContivGlobals.NODES_ACTIVE_JOB_ENDPOINT;
            $http.get(url).then(function successCallback(result) {
                deferred.resolve(result.data);
            }, function errorCallback(result) {
                deferred.reject(result.data);
            });
            return deferred.promise;
        }
        function getLastLogs() {
            var deferred = $q.defer();
            var url = ContivGlobals.NODES_LAST_JOB_ENDPOINT;
            $http.get(url).then(function successCallback(result) {
                deferred.resolve(result.data);
            }, function errorCallback(result) {
                deferred.reject(result.data);
            });
            return deferred.promise;
        }
        return {
            getActiveLogs: getActiveLogs,
            getLastLogs: getLastLogs
        };
    }]);
//# sourceMappingURL=logservice.js.map
angular.module('contiv.nodes')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.nodes.activelog', {
            url: '/activelog',
            controller: 'NodeActiveJobLogsCtrl as nodeActiveJobLogsCtrl',
            template: '<ctv-logs title="Active Job" log="nodeActiveJobLogsCtrl.activeLogs"></ctv-logs>'
        });
    }])
    .controller('NodeActiveJobLogsCtrl', ['$scope', '$interval', 'LogService',
    function ($scope, $interval, LogService) {
        var nodeActiveJobLogsCtrl = this;
        function getActiveLogs() {
            LogService.getActiveLogs().then(function successCallback(result) {
                nodeActiveJobLogsCtrl.activeLogs = result;
            }, function errorCallback(result) {
                //Once the job finishes, endpoint returns 500 error. So reset the activeLogs
                nodeActiveJobLogsCtrl.activeLogs = {
                    desc: 'There is currently no active job. Check Last Job for a job that recently finished.'
                };
            });
        }
        getActiveLogs();
        var promise;
        //Don't do auto-refresh if one is already in progress
        if (!angular.isDefined(promise)) {
            promise = $interval(function () {
                getActiveLogs();
            }, ContivGlobals.REFRESH_INTERVAL);
        }
        //stop polling when user moves away from the page
        $scope.$on('$destroy', function () {
            $interval.cancel(promise);
        });
    }]);
//# sourceMappingURL=nodeactivejoblogsctrl.js.map
/**
 * Created by vjain3 on 3/25/16.
 */
angular.module('contiv.nodes')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.nodes.commission', {
            url: '/commission/:key',
            controller: 'NodeCommissionCtrl as nodeCommissionCtrl',
            templateUrl: 'nodes/nodecommission.html'
        });
    }])
    .controller('NodeCommissionCtrl', [
    '$state', '$stateParams', 'NodesModel', 'CRUDHelperService', 'NodesService',
    function ($state, $stateParams, NodesModel, CRUDHelperService, NodesService) {
        var nodeCommissionCtrl = this;
        function returnToNodeDetails() {
            $state.go('contiv.menu.nodes.details.info', { 'key': $stateParams.key });
        }
        function cancelCommissioningNode() {
            returnToNodeDetails();
        }
        function commission() {
            if (nodeCommissionCtrl.form.$valid) {
                CRUDHelperService.hideServerError(nodeCommissionCtrl);
                CRUDHelperService.startLoader(nodeCommissionCtrl);
                nodeCommissionCtrl.nodeOpsObj.nodes = [$stateParams.key];
                NodesService.cleanupExtraVars(nodeCommissionCtrl);
                NodesService.createExtraVars(nodeCommissionCtrl);
                NodesModel.commission(nodeCommissionCtrl.nodeOpsObj).then(function successCallback(result) {
                    CRUDHelperService.stopLoader(nodeCommissionCtrl);
                    returnToNodeDetails();
                }, function errorCallback(result) {
                    CRUDHelperService.stopLoader(nodeCommissionCtrl);
                    CRUDHelperService.showServerError(nodeCommissionCtrl, result);
                });
            }
        }
        nodeCommissionCtrl.nodeOpsObj = {};
        nodeCommissionCtrl.extra_vars = {}; //TODO Intialize from global settings
        nodeCommissionCtrl.ansibleVariables = [];
        nodeCommissionCtrl.envVariables = [];
        NodesService.getSettings(nodeCommissionCtrl);
        nodeCommissionCtrl.cancelCommissioningNode = cancelCommissioningNode;
        nodeCommissionCtrl.commission = commission;
        CRUDHelperService.stopLoader(nodeCommissionCtrl);
        CRUDHelperService.hideServerError(nodeCommissionCtrl);
    }]);
//# sourceMappingURL=nodecommissionctrl.js.map
/**
 * Created by vjain3 on 3/25/16.
 */
angular.module('contiv.nodes')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.nodes.details', {
            url: '/details/:key',
            controller: 'NodeDetailsCtrl as nodeDetailsCtrl',
            templateUrl: 'nodes/nodedetails.html'
        })
            .state('contiv.menu.nodes.details.info', {
            url: '/info',
            controller: 'NodeDetailsCtrl as nodeDetailsCtrl',
            templateUrl: 'nodes/nodeinfo.html'
        })
            .state('contiv.menu.nodes.details.stats', {
            url: '/stats',
            controller: 'NodeDetailsCtrl as nodeDetailsCtrl',
            templateUrl: 'nodes/nodestats.html'
        })
            .state('contiv.menu.nodes.details.logs', {
            url: '/logs',
            controller: 'NodeDetailsCtrl as nodeDetailsCtrl',
            templateUrl: 'nodes/nodelogs.html'
        })
            .state('contiv.menu.nodes.details.edit', {
            url: '/edit',
            controller: 'NodeDetailsCtrl as nodeDetailsCtrl',
            templateUrl: 'nodes/nodeinfo.html'
        });
    }])
    .controller('NodeDetailsCtrl', ['$state', '$stateParams', '$scope', '$interval', 'NodesModel', 'BgpService',
    function ($state, $stateParams, $scope, $interval, NodesModel, BgpService) {
        var nodeDetailsCtrl = this;
        nodeDetailsCtrl.numberpattern = ContivGlobals.NUMBER_REGEX;
        function decommission() {
            var nodeOpsObj = {
                nodes: [$stateParams.key]
            };
            NodesModel.decommission(nodeOpsObj).then(function (result) {
                //Disable all buttons initially. Poll will assign values appropriately.
                nodeDetailsCtrl.showCommissionButton = false;
                nodeDetailsCtrl.commissionButtonEnabled = false;
                nodeDetailsCtrl.upgradeButtonEnabled = false;
            });
        }
        function upgrade() {
            var nodeOpsObj = {
                nodes: [$stateParams.key]
            };
            NodesModel.upgrade(nodeOpsObj).then(function (result) {
                //Disable all buttons initially. Poll will assign values appropriately.
                nodeDetailsCtrl.showCommissionButton = false;
                nodeDetailsCtrl.commissionButtonEnabled = false;
                nodeDetailsCtrl.upgradeButtonEnabled = false;
            });
        }
        /**
         * Display buttons based on status of node
         */
        function setButtonDisplay() {
            switch (nodeDetailsCtrl.node['inventory_state'].status) {
                case 'Unallocated':
                    nodeDetailsCtrl.showCommissionButton = true;
                    nodeDetailsCtrl.commissionButtonEnabled = true;
                    nodeDetailsCtrl.upgradeButtonEnabled = false;
                    break;
                case 'Decommissioned':
                    nodeDetailsCtrl.showCommissionButton = true;
                    nodeDetailsCtrl.commissionButtonEnabled = true;
                    nodeDetailsCtrl.upgradeButtonEnabled = false;
                    break;
                case 'Provisioning':
                    nodeDetailsCtrl.showCommissionButton = true;
                    nodeDetailsCtrl.commissionButtonEnabled = false;
                    nodeDetailsCtrl.upgradeButtonEnabled = false;
                    break;
                case 'Allocated':
                    nodeDetailsCtrl.showCommissionButton = false;
                    nodeDetailsCtrl.commissionButtonEnabled = true;
                    nodeDetailsCtrl.upgradeButtonEnabled = true;
                    break;
                case 'Cancelled':
                    nodeDetailsCtrl.showCommissionButton = false;
                    nodeDetailsCtrl.commissionButtonEnabled = false;
                    nodeDetailsCtrl.upgradeButtonEnabled = false;
                    break;
                case 'Maintenance':
                    nodeDetailsCtrl.showCommissionButton = true;
                    nodeDetailsCtrl.commissionButtonEnabled = false;
                    nodeDetailsCtrl.upgradeButtonEnabled = false;
                    break;
                default:
                    nodeDetailsCtrl.showCommissionButton = true;
                    nodeDetailsCtrl.commissionButtonEnabled = false;
                    nodeDetailsCtrl.upgradeButtonEnabled = false;
                    break;
            }
        }
        function getNodeInfo(reload) {
            NodesModel.getModelByKey($stateParams.key, reload)
                .then(function (node) {
                nodeDetailsCtrl.node = node;
                setButtonDisplay();
            });
        }
        function setMode() {
            if ($state.is('contiv.menu.nodes.details.edit')) {
                nodeDetailsCtrl.mode = 'edit';
            }
            else {
                nodeDetailsCtrl.mode = 'details';
            }
        }
        function returnToInfo() {
            $state.go('contiv.menu.nodes.details.info');
        }
        function updateBgpInfo() {
            if (nodeDetailsCtrl.form.$valid) {
                nodeDetailsCtrl.neighbor.key = $stateParams.key;
                // backend only supports adding one neighbor currently
                nodeDetailsCtrl.neighbors.forEach(function (item) {
                    nodeDetailsCtrl.neighbor['neighbor'] = item.name;
                    nodeDetailsCtrl.neighbor['neighbor-as'] = item.value;
                });
                BgpService.updateBgp(nodeDetailsCtrl).then(function successCallback(result) {
                    nodeDetailsCtrl.neighbor = result.config.data;
                    returnToInfo();
                }, function errorCallback(result) {
                });
            }
        }
        function getBgpInfo() {
            BgpService.getBgp(nodeDetailsCtrl).then(function successCallback(result) {
                nodeDetailsCtrl.neighbor = result;
            }, function errorCallback(result) {
            });
        }
        function getBgpInspect() {
            BgpService.getBgpInspect($stateParams.key).then(function successCallback(result) {
                nodeDetailsCtrl.inspect = result;
                nodeDetailsCtrl.routes = result.Oper.routes;
                nodeDetailsCtrl.filteredroutes = result.Oper.routes;
            }, function errorCallback(result) {
            });
        }
        nodeDetailsCtrl.decommission = decommission;
        nodeDetailsCtrl.upgrade = upgrade;
        nodeDetailsCtrl.setMode = setMode;
        nodeDetailsCtrl.updateBgpInfo = updateBgpInfo;
        nodeDetailsCtrl.returnToInfo = returnToInfo;
        nodeDetailsCtrl.neighbors = [];
        nodeDetailsCtrl.neighbor = {};
        nodeDetailsCtrl.key = $stateParams.key;
        getBgpInfo();
        getBgpInspect();
        setMode();
        //Load from cache for quick display initially
        getNodeInfo(false);
        var promise;
        //Don't do auto-refresh if one is already in progress
        if (!angular.isDefined(promise)) {
            promise = $interval(function () {
                getNodeInfo(true);
            }, 5000);
        }
        //stop polling when user moves away from the page
        $scope.$on('$destroy', function () {
            $interval.cancel(promise);
        });
    }]);
//# sourceMappingURL=nodedetailsctrl.js.map
/**
 * Created by vjain3 on 6/14/16.
 */
angular.module("contiv.nodes")
    .directive("ctvNodestatus", function () {
    return {
        restrict: 'E',
        scope: {
            node: '='
        },
        templateUrl: 'nodes/nodestatus.html'
    };
})
    .directive("ctvNodestate", function () {
    return {
        restrict: 'E',
        scope: {
            node: '='
        },
        templateUrl: 'nodes/nodestate.html'
    };
});
//# sourceMappingURL=nodedirective.js.map
angular.module('contiv.nodes')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.nodes.discover', {
            url: '/discover',
            controller: 'NodeDiscoverCtrl as nodeDiscoverCtrl',
            templateUrl: 'nodes/nodediscover.html'
        });
    }])
    .controller('NodeDiscoverCtrl', [
    '$state', '$stateParams', 'NodesModel', 'CRUDHelperService', 'NodesService',
    function ($state, $stateParams, NodesModel, CRUDHelperService, NodesService) {
        var nodeDiscoverCtrl = this;
        function returnToNodes() {
            $state.go('contiv.menu.nodes.list');
        }
        function cancelDiscoveringNode() {
            returnToNodes();
        }
        function discover() {
            if (nodeDiscoverCtrl.form.$valid) {
                CRUDHelperService.hideServerError(nodeDiscoverCtrl);
                CRUDHelperService.startLoader(nodeDiscoverCtrl);
                createIPAddrArray();
                NodesService.createExtraVars(nodeDiscoverCtrl);
                NodesModel.discover(nodeDiscoverCtrl.nodeOpsObj).then(function successCallback(result) {
                    CRUDHelperService.stopLoader(nodeDiscoverCtrl);
                    returnToNodes();
                }, function errorCallback(result) {
                    CRUDHelperService.stopLoader(nodeDiscoverCtrl);
                    CRUDHelperService.showServerError(nodeDiscoverCtrl, result);
                });
            }
        }
        function createIPAddrArray() {
            nodeDiscoverCtrl.nodeOpsObj.addrs = _.words(nodeDiscoverCtrl.nodeIPAddr, /[^, ]+/g);
        }
        nodeDiscoverCtrl.nodeOpsObj = {};
        nodeDiscoverCtrl.extra_vars = {}; //TODO Intialize from global settings
        nodeDiscoverCtrl.ansibleVariables = [];
        nodeDiscoverCtrl.envVariables = [];
        nodeDiscoverCtrl.nodeIPAddr = ''; //IP address of nodes to discover
        NodesService.getSettings(nodeDiscoverCtrl);
        nodeDiscoverCtrl.discover = discover;
        nodeDiscoverCtrl.cancelDiscoveringNode = cancelDiscoveringNode;
        CRUDHelperService.stopLoader(nodeDiscoverCtrl);
        CRUDHelperService.hideServerError(nodeDiscoverCtrl);
    }]);
//# sourceMappingURL=nodediscoverctrl.js.map
angular.module('contiv.nodes')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.nodes.lastlog', {
            url: '/lastlog',
            controller: 'NodeLastJobLogsCtrl as nodeLastJobLogsCtrl',
            template: '<ctv-logs title="Last Job" log="nodeLastJobLogsCtrl.lastLogs"></ctv-logs>'
        });
    }])
    .controller('NodeLastJobLogsCtrl', ['$scope', '$interval', 'LogService',
    function ($scope, $interval, LogService) {
        var nodeLastJobLogsCtrl = this;
        function getLastLogs() {
            LogService.getLastLogs().then(function successCallback(result) {
                nodeLastJobLogsCtrl.lastLogs = result;
            }, function errorCallback(result) {
            });
        }
        getLastLogs();
        var promise;
        //Don't do auto-refresh if one is already in progress
        if (!angular.isDefined(promise)) {
            promise = $interval(function () {
                getLastLogs();
            }, ContivGlobals.REFRESH_INTERVAL);
        }
        //stop polling when user moves away from the page
        $scope.$on('$destroy', function () {
            $interval.cancel(promise);
        });
    }]);
//# sourceMappingURL=nodelastjoblogsctrl.js.map
/**
 * Created by vjain3 on 3/22/16.
 */
angular.module('contiv.nodes')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.nodes.list', {
            url: '/list',
            controller: 'NodeListCtrl as nodeListCtrl',
            templateUrl: 'nodes/nodelist.html'
        });
    }])
    .controller('NodeListCtrl', ['$scope', '$interval', '$filter', 'NodesModel', 'CRUDHelperService',
    function ($scope, $interval, $filter, NodesModel, CRUDHelperService) {
        var nodeListCtrl = this;
        function getNodes(reload) {
            NodesModel.get(reload)
                .then(function successCallback(result) {
                CRUDHelperService.stopLoader(nodeListCtrl);
                nodeListCtrl.nodes = result;
            }, function errorCallback(result) {
                CRUDHelperService.stopLoader(nodeListCtrl);
            });
        }
        //Load from cache for quick display initially
        getNodes(false);
        var promise;
        //Don't do auto-refresh if one is already in progress
        if (!angular.isDefined(promise)) {
            promise = $interval(function () {
                getNodes(true);
            }, ContivGlobals.REFRESH_INTERVAL);
        }
        //stop polling when user moves away from the page
        $scope.$on('$destroy', function () {
            $interval.cancel(promise);
        });
    }]);
//# sourceMappingURL=nodelistctrl.js.map
angular.module('contiv.organizations')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.organizations.create', {
            url: '/create',
            templateUrl: 'organizations/organizationcreate.html',
            controller: 'OrganizationCreateCtrl as organizationCreateCtrl'
        });
    }])
    .controller('OrganizationCreateCtrl', ['$state', 'OrganizationsModel', 'CRUDHelperService',
    function ($state, OrganizationsModel, CRUDHelperService) {
        var organizationCreateCtrl = this;
        function returnToOrganizations() {
            $state.go('contiv.menu.organizations.list');
        }
        function cancelCreating() {
            returnToOrganizations();
        }
        function createOrganization() {
            //form controller is injected by the html template
            //checking if all validations have passed
            if (organizationCreateCtrl.form.$valid) {
                CRUDHelperService.hideServerError(organizationCreateCtrl);
                CRUDHelperService.startLoader(organizationCreateCtrl);
                organizationCreateCtrl.newOrganization.key = organizationCreateCtrl.newOrganization.tenantName;
                OrganizationsModel.create(organizationCreateCtrl.newOrganization).then(function successCallback(result) {
                    CRUDHelperService.stopLoader(organizationCreateCtrl);
                    returnToOrganizations();
                }, function errorCallback(result) {
                    CRUDHelperService.stopLoader(organizationCreateCtrl);
                    CRUDHelperService.showServerError(organizationCreateCtrl, result);
                });
            }
        }
        function resetForm() {
            CRUDHelperService.stopLoader(organizationCreateCtrl);
            CRUDHelperService.hideServerError(organizationCreateCtrl);
            organizationCreateCtrl.newOrganization = {
                tenantName: ''
            };
        }
        organizationCreateCtrl.createOrganization = createOrganization;
        organizationCreateCtrl.cancelCreating = cancelCreating;
        resetForm();
    }]);
//# sourceMappingURL=organizationcreatectrl.js.map
angular.module('contiv.organizations')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.organizations.details', {
            url: '/details/:key',
            controller: 'OrganizationDetailsCtrl as organizationDetailsCtrl',
            templateUrl: 'organizations/organizationdetails.html'
        });
    }])
    .controller('OrganizationDetailsCtrl', ['$state', '$stateParams', 'OrganizationsModel', 'CRUDHelperService',
    function ($state, $stateParams, OrganizationsModel, CRUDHelperService) {
        var organizationDetailsCtrl = this;
        function returnToOrganizations() {
            $state.go('contiv.menu.organizations.list');
        }
        function deleteOrganization() {
            CRUDHelperService.hideServerError(organizationDetailsCtrl);
            CRUDHelperService.startLoader(organizationDetailsCtrl);
            OrganizationsModel.delete(organizationDetailsCtrl.organization).then(function successCallback(result) {
                CRUDHelperService.stopLoader(organizationDetailsCtrl);
                returnToOrganizations();
            }, function errorCallback(result) {
                CRUDHelperService.stopLoader(organizationDetailsCtrl);
                CRUDHelperService.showServerError(organizationDetailsCtrl, result);
            });
        }
        CRUDHelperService.stopLoader(organizationDetailsCtrl);
        CRUDHelperService.hideServerError(organizationDetailsCtrl);
        OrganizationsModel.getModelByKey($stateParams.key)
            .then(function (organization) {
            organizationDetailsCtrl.organization = organization;
        });
        organizationDetailsCtrl.deleteOrganization = deleteOrganization;
    }]);
//# sourceMappingURL=organizationdetailsctrl.js.map
angular.module('contiv.settings')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.settings.details.cluster', {
            url: '/cluster',
            controller: 'ClusterSettingCtrl as clusterSettingCtrl',
            templateUrl: 'settings/clustersettings.html'
        });
    }])
    .controller('ClusterSettingCtrl', ['$stateParams', 'CRUDHelperService', 'NodesService',
    function ($stateParams, CRUDHelperService, NodesService) {
        var clusterSettingCtrl = this;
        function updateClusterSettings() {
            if (clusterSettingCtrl.form.$valid) {
                CRUDHelperService.hideServerError(clusterSettingCtrl);
                CRUDHelperService.startLoader(clusterSettingCtrl);
                clusterSettingCtrl.nodeOpsObj.nodes = [$stateParams.key];
                NodesService.cleanupExtraVars(clusterSettingCtrl);
                NodesService.createExtraVars(clusterSettingCtrl);
                NodesService.updateSettings(clusterSettingCtrl.nodeOpsObj).then(function successCallback(result) {
                    CRUDHelperService.stopLoader(clusterSettingCtrl);
                }, function errorCallback(result) {
                    CRUDHelperService.stopLoader(clusterSettingCtrl);
                    CRUDHelperService.showServerError(clusterSettingCtrl, result);
                });
            }
        }
        clusterSettingCtrl.nodeOpsObj = {};
        clusterSettingCtrl.extra_vars = {}; //TODO Intialize from global settings
        clusterSettingCtrl.ansibleVariables = [];
        clusterSettingCtrl.envVariables = [];
        NodesService.getSettings(clusterSettingCtrl);
        clusterSettingCtrl.updateClusterSettings = updateClusterSettings;
        CRUDHelperService.stopLoader(clusterSettingCtrl);
        CRUDHelperService.hideServerError(clusterSettingCtrl);
    }]);
//# sourceMappingURL=clustersettingctrl.js.map
/**
 * Created by vjain3 on 6/1/16.
 */
angular.module('contiv.storagepolicies')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.storagepolicies.create', {
            url: '/create',
            templateUrl: 'storage_policies/storagepolicycreate.html',
            controller: 'StoragePolicyCreateCtrl as storagePolicyCreateCtrl'
        });
    }])
    .controller('StoragePolicyCreateCtrl', ['$state', '$stateParams', 'StoragePoliciesModel', 'CRUDHelperService',
    function ($state, $stateParams, StoragePoliciesModel, CRUDHelperService) {
        var storagePolicyCreateCtrl = this;
        function returnToStoragePolicies() {
            $state.go('contiv.menu.storagepolicies.list');
        }
        function cancelCreating() {
            returnToStoragePolicies();
        }
        function createFilesystemCmds() {
            storagePolicyCreateCtrl.filesystemcmds.forEach(function (item) {
                storagePolicyCreateCtrl.newStoragePolicy.filesystems[item.name] = item.value;
            });
        }
        function createPolicy() {
            //form controller is injected by the html template
            //checking if all validations have passed
            if (storagePolicyCreateCtrl.form.$valid) {
                CRUDHelperService.hideServerError(storagePolicyCreateCtrl);
                CRUDHelperService.startLoader(storagePolicyCreateCtrl);
                createFilesystemCmds();
                StoragePoliciesModel.create(storagePolicyCreateCtrl.newStoragePolicy)
                    .then(function successCallback(result) {
                    CRUDHelperService.stopLoader(storagePolicyCreateCtrl);
                    returnToStoragePolicies();
                }, function errorCallback(result) {
                    CRUDHelperService.stopLoader(storagePolicyCreateCtrl);
                    CRUDHelperService.showServerError(storagePolicyCreateCtrl, result);
                });
            }
        }
        function resetForm() {
            CRUDHelperService.stopLoader(storagePolicyCreateCtrl);
            CRUDHelperService.hideServerError(storagePolicyCreateCtrl);
            storagePolicyCreateCtrl.newStoragePolicy = {
                "name": "",
                "backends": {
                    "crud": "ceph",
                    "mount": "ceph",
                    "snapshot": "ceph"
                },
                "unlocked": false,
                "driver": {
                    "pool": "rbd"
                },
                "create": {
                    "size": "0",
                    "filesystem": ""
                },
                "runtime": {
                    "snapshots": true,
                    "snapshot": {
                        "frequency": "30m",
                        "keep": 20
                    },
                    "rate-limit": {
                        "write-iops": 0,
                        "read-iops": 0,
                        "write-bps": 0,
                        "read-bps": 0
                    }
                },
                "filesystems": {}
            };
        }
        storagePolicyCreateCtrl.createPolicy = createPolicy;
        storagePolicyCreateCtrl.cancelCreating = cancelCreating;
        storagePolicyCreateCtrl.filesystemcmds = [];
        resetForm();
    }]);
//# sourceMappingURL=storagepolicycreatectrl.js.map
/**
 * Created by vjain3 on 5/27/16.
 */
angular.module('contiv.storagepolicies')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.storagepolicies.details', {
            url: '/details/:key',
            controller: 'StoragePolicyDetailsCtrl as storagePolicyDetailsCtrl',
            templateUrl: 'storage_policies/storagepolicydetails.html'
        })
            .state('contiv.menu.storagepolicies.edit', {
            url: '/details/:key',
            controller: 'StoragePolicyDetailsCtrl as storagePolicyDetailsCtrl',
            templateUrl: 'storage_policies/storagepolicydetails.html'
        });
    }])
    .controller('StoragePolicyDetailsCtrl', ['$state', '$stateParams', '$scope', '$interval', '$filter', 'StoragePoliciesModel', 'VolumesModel', 'CRUDHelperService',
    function ($state, $stateParams, $scope, $interval, $filter, StoragePoliciesModel, VolumesModel, CRUDHelperService) {
        var storagePolicyDetailsCtrl = this;
        storagePolicyDetailsCtrl.filesystemcmds = [];
        /**
         * To show edit or details screen based on the route
         */
        function setMode() {
            if ($state.is('contiv.menu.storagepolicies.edit')) {
                storagePolicyDetailsCtrl.mode = 'edit';
            }
            else {
                storagePolicyDetailsCtrl.mode = 'details';
            }
        }
        function returnToPolicies() {
            $state.go('contiv.menu.storagepolicies.list');
        }
        function returnToPolicyDetails() {
            $state.go('contiv.menu.storagepolicies.details', { 'key': storagePolicyDetailsCtrl.policy.name });
        }
        function cancelEditing() {
            returnToPolicyDetails();
        }
        function deletePolicy() {
            CRUDHelperService.hideServerError(storagePolicyDetailsCtrl);
            CRUDHelperService.startLoader(storagePolicyDetailsCtrl);
            StoragePoliciesModel.deleteUsingKey(storagePolicyDetailsCtrl.policy.name, 'name').then(function successCallback(result) {
                CRUDHelperService.stopLoader(storagePolicyDetailsCtrl);
                returnToPolicies();
            }, function errorCallback(result) {
                CRUDHelperService.stopLoader(storagePolicyDetailsCtrl);
                CRUDHelperService.showServerError(storagePolicyDetailsCtrl, result);
            });
        }
        /**
         * Get volumes belonging to a policy
         */
        function getVolumes(reload) {
            VolumesModel.get(reload).then(function (result) {
                storagePolicyDetailsCtrl.volumes = $filter('orderBy')(_.filter(result, {
                    'policy': storagePolicyDetailsCtrl.policy.name
                }), 'name');
            });
        }
        function initializeFilesystemCmdsArray() {
            angular.forEach(storagePolicyDetailsCtrl.policy.filesystems, function (value, key) {
                this.push({ name: key, value: value });
            }, storagePolicyDetailsCtrl.filesystemcmds);
        }
        function createFilesystemCmds() {
            storagePolicyDetailsCtrl.filesystemcmds.forEach(function (item) {
                storagePolicyDetailsCtrl.policy.filesystems[item.name] = item.value;
            });
        }
        function savePolicy() {
            //form controller is injected by the html template
            //checking if all validations have passed
            if (storagePolicyDetailsCtrl.form.$valid) {
                CRUDHelperService.hideServerError(storagePolicyDetailsCtrl);
                CRUDHelperService.startLoader(storagePolicyDetailsCtrl);
                createFilesystemCmds();
                StoragePoliciesModel.save(storagePolicyDetailsCtrl.policy).then(function successCallback(result) {
                    CRUDHelperService.stopLoader(storagePolicyDetailsCtrl);
                    returnToPolicyDetails();
                }, function errorCallback(result) {
                    CRUDHelperService.stopLoader(storagePolicyDetailsCtrl);
                    CRUDHelperService.showServerError(storagePolicyDetailsCtrl, result);
                });
            }
        }
        CRUDHelperService.stopLoader(storagePolicyDetailsCtrl);
        CRUDHelperService.hideServerError(storagePolicyDetailsCtrl);
        StoragePoliciesModel.getModelByKey($stateParams.key, false, 'name')
            .then(function (policy) {
            storagePolicyDetailsCtrl.policy = policy;
            initializeFilesystemCmdsArray();
            getVolumes(false);
        });
        storagePolicyDetailsCtrl.deletePolicy = deletePolicy;
        storagePolicyDetailsCtrl.savePolicy = savePolicy;
        storagePolicyDetailsCtrl.cancelEditing = cancelEditing;
        setMode();
        var promise;
        //Don't do autorefresh if one is already in progress
        if (!angular.isDefined(promise)) {
            promise = $interval(function () {
                getVolumes(true);
            }, ContivGlobals.REFRESH_INTERVAL);
        }
        //stop polling when user moves away from the page
        $scope.$on('$destroy', function () {
            $interval.cancel(promise);
        });
    }]);
//# sourceMappingURL=storagepolicydetailsctrl.js.map
/**
 * Created by vjain3 on 6/2/16.
 */
angular.module("contiv.storagepolicies")
    .directive("ctvStoragepolicybasicsettings", function () {
    return {};
})
    .directive("ctvStoragepolicyfilesystemsettings", function () {
    return {
        restrict: 'E',
        scope: {
            policy: '=',
            filesystemcmds: '='
        },
        link: function (scope) {
            scope.filesystems = ['ext4', 'btrfs'];
        },
        templateUrl: 'storage_policies/filesystemsettings.html'
    };
})
    .directive("ctvStoragepolicysnapshotsettings", function () {
    return {
        restrict: 'E',
        scope: {
            policy: '='
        },
        templateUrl: 'storage_policies/snapshotsettings.html'
    };
})
    .directive("ctvStoragepolicyrwopssettings", function () {
    return {
        restrict: 'E',
        scope: {
            policy: '='
        },
        templateUrl: 'storage_policies/rwopssettings.html'
    };
})
    .directive("ctvStoragepolicybackenddrivers", function () {
    return {
        restrict: 'E',
        scope: {
            policy: '='
        },
        templateUrl: 'storage_policies/backenddrivers.html'
    };
});
//# sourceMappingURL=storagepolicydirective.js.map


angular.module('contiv.visualization')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.visualization.edge', {
                url: '/edge/{sourceName, targetName, sourceList, targetList}',
                params: {
                    sourceName: null,
                    targetName: null,
                    sourceList: null,
                    targetList: null
                },
                controller: 'VisualizationEdgeCtrl as visualizationedgeCtrl',
                templateUrl: 'visualization/visualizationedge.html'
            })
        ;
    }])
    .controller('VisualizationEdgeCtrl', ["$scope", "$http", '$state', '$stateParams', 'VisualizationService', '$interval',
        function($scope, $http, $state, $stateParams, VisualizationService, $interval) {
            var sourceName = $stateParams.sourceName;
            var targetName = $stateParams.targetName;
            var sourceList = $stateParams.sourceList;
            var targetList = $stateParams.targetList;

            //If the page is reloaded, these state params are all null,
            //so it will route them back to the visualization tab top view
            if (sourceList == null || targetList == null) {
                $state.go('contiv.menu.visualization.list');
                return;
            }

            var d = new Date();
            var t = d.getSeconds();
            $scope.edgeDataInterval = 
                $interval(function() {
                    VisualizationService.getEdgeData(sourceList, targetList, t.toString())
                        .then(function successCallback(result) {
                            var results = result.results;
                            var data = 0;
                            _.forEach(results, function(r) {
                                if (_.isEmpty(r) === false) {
                                    data += r.series[0].values[0][1];
                                }
                            });
                            $scope.sourceName = sourceName;
                            $scope.targetName = targetName;
                            $scope.edgeData = data;
                            $scope.edgeDataTime = t;
                        }, function errorCallback(result) {
                        });
                    }, 3000);

            //Destroying the interval function on route change
            $scope.$on('$destroy', function () { $interval.cancel($scope.edgeDataInterval); });


            VisualizationService.getOldEdgeData(sourceList, targetList)
                .then(function successCallback(result) {
                    var results = result.results;
                    var edgeData = [];
                    //results, if not empty, are expected to have
                    //6 data entries
                    _.forEach(results, function(r) {
                        if (_.isEmpty(r) === false) {
                            var data = r.series[0].values;
                            if (_.isEmpty(edgeData)) {
                                _.forEach(data, function(d) {
                                    edgeData.push(d[1]);
                                })
                            } else {
                                _.forEach(data, function(d, i) {
                                    edgeData[i] += d[1];
                                })
                            }
                        }
                    });

                    $scope.sourceName = sourceName;
                    $scope.targetName = targetName;
                    $scope.sourceList = sourceList;
                    $scope.targetList = targetList;
                    $scope.oldEdgeData = edgeData;
                }, function errorCallback(result) {
                });
    }]);







angular.module('contiv.visualization')
    .directive("visualizationEdge", ['$window',
        function($window) {
            function visualizationEdgeD3(scope, d3) {
                var bodyEl = document.getElementsByTagName('body')[0];
              
                var width = bodyEl.clientWidth - 400,
                    height =  bodyEl.clientHeight - 400;


                //taken from http://bl.ocks.org/simenbrekken/6634070
                // /** MAIN SVG **/
                var limit = 59,
                duration = 750,
                now = new Date(Date.now() - duration);

                var groups = {
                    current: {
                        value: 0,
                        color: 'orange',
                        data: d3.range(limit).map(function(d) {
                            return scope.oldEdgeData[Math.floor(d/10)] || 0;
                        })
                    }
                };
                var x = d3.time.scale()
                    .domain([now - (limit - 2), now - duration])
                    .range([0, width]);

                var y = d3.scale.linear()
                    .domain([0, d3.max(groups.current.data, function (d) { return d + 10; })])
                    .range([height, 0]);

                var line = d3.svg.line()
                    .interpolate('basis')
                    .x(function(d, i) {
                        return x(now - (limit - 1 - i) * duration)
                    })
                    .y(function(d) {
                        return y(d)
                    });

                var xSvg = d3.select('.graph').append('svg')
                    .attr('width', 25)
                    .style('overflow', 'visible')
                    .style('position', 'fixed');

                

                var yAxis = xSvg.append('g')
                    .attr('class', 'y axis')
                    // .attr('transform', 'translate(0,' + width + ')')
                    .call(y.axis = d3.svg.axis().scale(y).orient('left'));
                
                var svg= d3.select('.graph').append('svg')
                    .attr('class', 'chart')
                    .attr('width', width - 50)
                    .attr('height', height + 50);
                    // .style('overflow', "visible");

                var axis = svg.append('g')
                    .attr('class', 'x axis')
                    .attr('transform', 'translate(0,' + height + ')')
                    .call(x.axis = d3.svg.axis().scale(x).orient('bottom'));

                var paths = svg.append('g');

                for (var name in groups) {
                    var group = groups[name];
                    group.path = paths.append('path')
                        .data([group.data])
                        .attr('class', name + ' group')
                        .style('stroke', group.color)
                }

                function tick() {
                    now = new Date();

                    // Add new values
                    for (var name in groups) {
                        var group = groups[name];
                        group.data.push(scope.edgeData || 0);
                        group.path.attr('d', line)
                    }

                    // Shift domain
                    x.domain([now - (limit - 2) * duration, now - duration]);

                    // Slide x-axis left
                    axis.transition()
                        .duration(duration)
                        .ease('linear')
                        .call(x.axis);

                    yAxis.transition()
                        .duration(duration)
                        .ease('linear')
                        .call(y.axis);

                    // Slide paths left
                    paths.attr('transform', null)
                        .transition()
                        .duration(duration)
                        .ease('linear')
                        .attr('transform', 'translate(' + x(now - (limit - 1) * duration) + ')')
                        .each('end', function() {
                            tick()
                        });

                    // Remove oldest data point from each group
                    for (var name in groups) {
                        var group = groups[name];
                        group.data.shift()
                    }
                }
                tick()
            }

            return{
                restrict:'EA',
                replace: false,
                templateUrl: 'visualization/visualizationedgetemplate.html',
                link: function(scope){
                    scope.$watchGroup(['edgeData', 'oldEdgeData'],
                        function() {
                            if (scope.edgeData != null &&
                                    scope.oldEdgeData != null ) {
                                if (!scope.initialize) {
                                    scope.initialize = true;
                                    var d3 = $window.d3;  
                                    visualizationEdgeD3(scope, d3);
                                }
                            } 
                        });
               }
           };
        }
    ]
);


angular.module('contiv.visualization')
    .service('StateSave', function () {
        this.savedStates = {};
    })
    .directive("visualizationGraph", ['$window', '$state', 'VisualizerGraph', 'PolicyService', 'VisualizerDataSource', 'StateSave',
        function($window, $state, VisualizerGraph, PolicyService, VisualizerDataSource, StateSave) {
            function visualizationlistd3(scope, elem, VisualizerGraph, PolicyService, VisualizerDataSource, StateSave) {
                //don't run until all initialization calls have returned
                if (scope.nodes === undefined || scope.links === undefined || scope.children_struct === undefined ||
                    scope.ancestors_struct === undefined) {
                    return;
                }

                //creating DataSource
                var dataSource = new VisualizerDataSource.DataSource(scope.nodes, scope.links, scope.children_struct, 
                                    scope.ancestors_struct, scope.labels, scope.serviceSelectors);
                dataSource.setAncestors();

                var nodes, links;

                var topData = dataSource.getTopLevelFlow();
                nodes = dataSource.processNodeData(topData.nodeData);
                links = dataSource.processLinkData(topData.linkData, nodes);

                var bodyEl = document.getElementsByTagName('body')[0];
              
                var width = bodyEl.clientWidth,
                    height =  bodyEl.clientHeight;

                /** MAIN SVG **/
                var rawSvg=elem.find('svg');

                var offset = $(rawSvg.parent()).offset();

                var divWidth = $(rawSvg.parent()).width();

                var svg = d3.select(rawSvg[0])
                    .attr("width", divWidth)
                    .attr("height", height - offset.top - 20);

                //installing policies
                scope.visualizationGraph = new VisualizerGraph.Graph(svg, nodes, links, dataSource, 
                            scope.children_struct, scope.ancestors_struct);
                scope.visualizationGraph.installDefaultPathPolicy(new PolicyService.SaveStatePolicy(StateSave.savedStates));
                scope.visualizationGraph.installDefaultPathPolicy(new PolicyService.PathChangeViewPolicy($state));
                //QTipPolicy is for both Nodes and Paths, install same one on both
                var qTipPolicy = new PolicyService.QTipPolicy();
                scope.visualizationGraph.installDefaultNodePolicy(qTipPolicy);
                scope.visualizationGraph.installDefaultPathPolicy(qTipPolicy);
                var splitJoinViewPolicy = new PolicyService.SplitJoinViewPolicy();
                scope.visualizationGraph.installDefaultNodePolicy(splitJoinViewPolicy);
                splitJoinViewPolicy.installBackButton($('#backButton'));
                splitJoinViewPolicy.installTitle($('#graph-title'));

                //load old view if it exists.
                if (_.isEmpty(StateSave.savedStates) == false) {
                    var graph = scope.visualizationGraph;
                    graph.load(StateSave.savedStates);
                } else {
                    scope.visualizationGraph.updateGraph();
                }
            }

            return{
                restrict:'EA',
                replace: false,
                templateUrl: 'visualization/visualizationtemplate.html',
                link: function(scope, elem){
                    scope.$on('$destroy', function () { 
                        $('#visualization-graph').unbind();
                        scope.visualizationGraph.destroy();});
                    scope.$watchGroup(['nodes', 'links', 'children_struct', 'ancestors_struct'],
                            function() {
                        if (scope.nodes != null &&
                                scope.links != null &&
                                scope.children_struct != null &&
                                scope.ancestors_struct != null) {
                            if (!scope.initialized) {
                                scope.initialized = true;
                                visualizationlistd3(scope, elem, VisualizerGraph, PolicyService, VisualizerDataSource, StateSave);
                            } else {
                                scope.visualizationGraph.dataSource.links = scope.links;
                                scope.visualizationGraph.updateLinkData();
                            }
                        }
                    });
               }
           };
        }
    ]
);













angular.module('contiv.visualization')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.visualization.list', {
                url: '/list',
                controller: 'VisualizationListCtrl as visualizationListCtrl',
                templateUrl: 'visualization/visualizationlist.html'
            })
        ;
    }])
    .controller('VisualizationListCtrl', ["$scope", "$http", 'VisualizationService', '$interval', 
        function($scope, $http, VisualizationService, $interval) {
            //to see the expected format to be returned from these calls,
            //look at app/components/graphobjects/datasource/visualizerdatasource.js
            var successGraphDataCallback = function(result) {
                var nodes = [];
                var links = [];
                var nodeIds = [];
                _.forEach(result.results[0].series, function(series) {
                    var endpoint = series.tags.EndpointIP;
                    var provider = series.tags.ProviderIP;
                    var node;
                    //creating nodes
                    if (_.includes(nodeIds, endpoint) == false) {
                        node = {
                            name: endpoint,
                            id: endpoint,
                            parent: null,
                            ancestors: null
                        };
                        nodes.push(node);
                        nodeIds.push(endpoint);
                    }
                    if (_.includes(nodeIds, provider) == false) {
                        node = {
                            name: provider,
                            id: provider,
                            parent: null,
                            ancestors: null
                        };
                        nodes.push(node);
                        nodeIds.push(provider);
                    }
                    //creating links
                    var linkOut = {
                        source: endpoint,
                        target: provider,
                        weight: series.values[0][2]
                    };
                    links.push(linkOut);
                    var linkIn = {
                        source: provider,
                        target: endpoint,
                        weight: series.values[0][1]
                    };
                    links.push(linkIn);
                });
                $scope.nodes = nodes;
                $scope.links = links;
            };
            //initial call
            VisualizationService.getGraphData().then(successGraphDataCallback, function errorCallback(result) {
                //will fail silently, graph won't be displayed
            });

            $scope.$on('$destroy', function () { $interval.cancel($scope.graphDataInterval); });

            VisualizationService.getStructureData().then(function successCallback(result) {
                //to see the expected form of ancestor_struct and children_struct, 
                //look at app/components/graphobjects/datasource/visualizerdatasource.js
                $scope.ancestors_struct = result.ancestors_struct;
                $scope.children_struct = result.children_struct;
                $scope.labels = result.labels;
                $scope.serviceSelectors = result.serviceSelectors;
            }, function errorCallback(result) {
                //will fail silently, graph won't be displayed
            });
    }]);












angular.module('contiv.visualization')
    .factory('VisualizationService', ['$http', '$q', function ($http, $q) {
        /**
         * Makes a get request with the url and config.
         *
         * @param      {string}  url     The url
         * @param      {Object}  config  The configurations
         * @return     {$Http Promise}   Promise of the request
         */
        function makeGet(url, config) {
            var deferred = $q.defer();
            $http.get(url, config).then(function successCallback(result) {
                deferred.resolve(result.data);
            }, function errorCallback(result) {
                deferred.reject(result.data);
            });
            return deferred.promise;
        }

        /**
         * Makes a post request with the url and data
         *
         * @param      {string}  url     The url
         * @param      {JSON}    data    The data
         * @return     {$Http Promise}   Promise of the request
         */
        function makePost(url, data) {
            /**
             * converts the data into x-www-from-urlencoded
             *
             * @param      {JSON}  obj     JSON data object
             * @return     {string}  x-www-form-urlencoded string
             */
            var param = function(obj) {
                var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
                for (name in obj) {
                  value = obj[name];

                    if (value instanceof Array) {
                        for (i=0; i<value.length; ++i) {
                            subValue = value[i];
                            fullSubName = name + '[' + i + ']';
                            innerObj = {};
                            innerObj[fullSubName] = subValue;
                            query += param(innerObj) + '&';
                        }
                    } else if (value instanceof Object) {
                        for (subName in value) {
                            subValue = value[subName];
                            fullSubName = name + '[' + subName + ']';
                            innerObj = {};
                            innerObj[fullSubName] = subValue;
                            query += param(innerObj) + '&';
                        }
                    } else if(value !== undefined && value !== null) {
                        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
                   }
                }

                return query.length ? query.substr(0, query.length - 1) : query;
            };

            var deferred = $q.defer();
            $http({
                url:url,
                method:'POST',
                data: data,
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                transformRequest: [function(data) {
                    return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
                  }]
            })
            .then(function successCallback(result) {
                deferred.resolve(result.data);
            }, function errorCallback(result) {
                deferred.reject(result.data);
            });
            return deferred.promise;
        }

        function getGraphData() {
            var url = ContivGlobals.VISUALIZATION_ENDPOINT;
            url += 'influx/query';
            var config = {
                params: {
                    db:"telegraf",
                    q:"SELECT BytesIn, BytesOut, EndpointIP, ProviderIP FROM httpjson_svcstats WHERE time > now() - 1m GROUP BY * LIMIT 1"
                }
            };
            return makeGet(url, config);
        }

        function getStructureData() {
            var url = ContivGlobals.VISUALIZATION_ENDPOINT;
            url += 'services';
            return makeGet(url);
        }

        function buildWhereQuery(points, type) {
            var query = "(";
            query += type + "=";
            query += "'" + points[0] + "' ";
            //starts at 1, so will not run if length is 1
            for (var i = 1; i < points.length; i++) {
                query += 'OR ';
                query += type + "=";
                query += "'" + points[i] + "' ";
            }
            query += ")";
            return query;
        }

        function getEdgeData(sourceList, targetList, time) {
            var url = ContivGlobals.VISUALIZATION_ENDPOINT;
            url += 'influx/query';

            var data = {
                    db : "telegraf",
                    q: "SELECT sum(" + 'BytesOut' + ") from httpjson_svcstats WHERE time > now() - 15s AND "
                         + buildWhereQuery(sourceList, "EndpointIP") +" AND " 
                         + buildWhereQuery(targetList, 'ProviderIP') 
                         + "GROUP BY time(20s) LIMIT 1; SELECT sum(" + 'BytesIn' + ") from httpjson_svcstats WHERE time > now() - 15s AND "
                         + buildWhereQuery(sourceList, 'ProviderIP') +" AND " 
                         + buildWhereQuery(targetList, 'EndpointIP') 
                         + "GROUP BY time(20s) fill(0) LIMIT 1"
                     };
            return makePost(url, data);
        }

        

        function getOldEdgeData(sourceList, targetList) {
            var url = ContivGlobals.VISUALIZATION_ENDPOINT;
            url += 'influx/query';
            var data = {
                    db : "telegraf",
                    q: "SELECT sum(" + 'BytesOut' + ") FROM httpjson_svcstats WHERE time > now() - 1m AND "
                         + buildWhereQuery(sourceList, "EndpointIP") +" AND " 
                         + buildWhereQuery(targetList, "ProviderIP") 
                         + " GROUP BY time(10s) fill(0) LIMIT 6; SELECT sum(" + 'BytesIn' + ") FROM httpjson_svcstats WHERE time > now() - 1m AND "
                         + buildWhereQuery(sourceList, "ProviderIP") +" AND " 
                         + buildWhereQuery(targetList, "EndpointIP") 
                         + " GROUP BY time(10s) fill(0) LIMIT 6"
                     };
            return makePost(url, data);
        }

        return {
            getGraphData: getGraphData,
            getStructureData: getStructureData,
            getEdgeData: getEdgeData,
            getOldEdgeData: getOldEdgeData
        }
    }]);







/**
 * Created by vjain3 on 6/3/16.
 */
angular.module('contiv.volumes')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.volumes.create', {
            url: '/create',
            templateUrl: 'volumes/volumecreate.html',
            controller: 'VolumeCreateCtrl as volumeCreateCtrl'
        });
    }])
    .controller('VolumeCreateCtrl', ['$state', '$stateParams', 'VolumesModel', 'StoragePoliciesModel', 'CRUDHelperService',
    function ($state, $stateParams, VolumesModel, StoragePoliciesModel, CRUDHelperService) {
        var volumeCreateCtrl = this;
        volumeCreateCtrl.filesystems = ['ext4', 'btrfs'];
        function returnToVolumesModel() {
            $state.go('contiv.menu.volumes.list');
        }
        function cancelCreating() {
            returnToVolumesModel();
        }
        /**
         * Get storage policies.
         */
        function getStoragePolicies() {
            StoragePoliciesModel.get().then(function (result) {
                volumeCreateCtrl.policies = result;
            });
        }
        function applyPolicySettings() {
            volumeCreateCtrl.newVolume.policy = volumeCreateCtrl.selectedPolicy.name;
            volumeCreateCtrl.newVolume.backends = volumeCreateCtrl.selectedPolicy.backends;
            volumeCreateCtrl.newVolume.driver = volumeCreateCtrl.selectedPolicy.driver;
            volumeCreateCtrl.newVolume.create = volumeCreateCtrl.selectedPolicy.create;
            volumeCreateCtrl.newVolume.runtime = volumeCreateCtrl.selectedPolicy.runtime;
        }
        function createVolume() {
            //form controller is injected by the html template
            //checking if all validations have passed
            if (volumeCreateCtrl.form.$valid) {
                CRUDHelperService.hideServerError(volumeCreateCtrl);
                CRUDHelperService.startLoader(volumeCreateCtrl);
                applyPolicySettings();
                VolumesModel.create(volumeCreateCtrl.newVolume).then(function successCallback(result) {
                    CRUDHelperService.stopLoader(volumeCreateCtrl);
                    returnToVolumesModel();
                }, function errorCallback(result) {
                    CRUDHelperService.stopLoader(volumeCreateCtrl);
                    CRUDHelperService.showServerError(volumeCreateCtrl, result);
                });
            }
        }
        function resetForm() {
            CRUDHelperService.stopLoader(volumeCreateCtrl);
            CRUDHelperService.hideServerError(volumeCreateCtrl);
            volumeCreateCtrl.newVolume = {
                "name": "",
                "backends": {},
                "driver": {},
                "create": {},
                "runtime": {}
            };
        }
        volumeCreateCtrl.createVolume = createVolume;
        volumeCreateCtrl.cancelCreating = cancelCreating;
        getStoragePolicies();
        resetForm();
    }]);
//# sourceMappingURL=volumecreatectrl.js.map
/**
 * Created by cshampur on 8/9/16.
 */
angular.module('contiv.volumes')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.volumes.copy', {
            url: '/copy/',
            params: { snapshot: null, policy: null, volume: null },
            controller: 'VolumeSnapshotCopyCtrl as volumeSnapshotCopyCtrl',
            templateUrl: 'volumes/volumesnapshotcopy.html'
        });
    }])
    .controller('VolumeSnapshotCopyCtrl', ['$state', '$stateParams', '$scope', '$interval', '$http', 'VolumesModel', 'CRUDHelperService',
    function ($state, $stateParams, $scope, $interval, $http, VolumesModel, CRUDHelperService) {
        var volumeSnapshotCopyCtrl = this;
        function cancelCopy() {
            $state.go('contiv.menu.volumes.details', { key: $stateParams.policy + '/' + $stateParams.volume });
        }
        function goToNewVolume() {
            $state.go('contiv.menu.volumes.details', { key: $stateParams.policy + '/' + volumeSnapshotCopyCtrl.newvolume });
        }
        function copySnapshot() {
            if (volumeSnapshotCopyCtrl.form.$valid) {
                CRUDHelperService.hideServerError(volumeSnapshotCopyCtrl);
                CRUDHelperService.startLoader(volumeSnapshotCopyCtrl);
                var model = {};
                model.policy = $stateParams.policy;
                model.name = $stateParams.volume;
                VolumesModel.copy(model, $stateParams.snapshot, volumeSnapshotCopyCtrl.newvolume)
                    .then(function successCallback(result) {
                    CRUDHelperService.stopLoader(volumeSnapshotCopyCtrl);
                    goToNewVolume();
                }, function errorCallback(result) {
                    CRUDHelperService.stopLoader(volumeSnapshotCopyCtrl);
                    CRUDHelperService.showServerError(volumeSnapshotCopyCtrl, result);
                });
            }
        }
        volumeSnapshotCopyCtrl.policy = $stateParams.policy;
        volumeSnapshotCopyCtrl.volume = $stateParams.volume;
        volumeSnapshotCopyCtrl.snapshot = $stateParams.snapshot;
        volumeSnapshotCopyCtrl.copySnapshot = copySnapshot;
        volumeSnapshotCopyCtrl.cancelCopy = cancelCopy;
    }]);
//# sourceMappingURL=volumesnapshotcopyctrl.js.map
/**
 * Created by vjain3 on 10/14/16.
 */
//# sourceMappingURL=models.module.js.map
angular.module("contiv.directives")
    .directive("ctvAcivalid", function () {
        return {
            restrict: 'E',
            templateUrl: 'components/directives/nodes/acivalid.html',
            scope: {
                form: "="
            }
        };
    });
angular.module("contiv.directives")
    .directive("ctvControlinterface", function () {
        return {
            restrict: 'E',
            templateUrl: 'components/directives/nodes/controlinterface.html',
            scope: {
                extravars: "="
            }
        };
    });
angular.module("contiv.directives")
    .directive("ctvNetworkmode", function () {
        return {
            restrict: 'E',
            templateUrl: 'components/directives/nodes/networkmode.html',
            scope: {
                extravars: "="
            }
        };
    });
angular.module("contiv.directives")
    .directive("ctvScheduler", function () {
        return {
            restrict: 'E',
            templateUrl: 'components/directives/nodes/scheduler.html',
            scope: {
                extravars: "="
            }
        };
    });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImRpcmVjdGl2ZXMvbW9kdWxlLmpzIiwibW9kZWxzL21vZHVsZS5qcyIsImRhdGFzb3VyY2UvZGF0YXNvdXJjZS5qcyIsInV0aWxzL21vZHVsZS5qcyIsImRhdGFzb3VyY2UvdmlzdWFsaXplcmRhdGFzb3VyY2UuanMiLCJncmFwaC9ncmFwaC5qcyIsImdyYXBoL3Zpc3VhbGl6ZXJncmFwaC5qcyIsImxpbmsvbGluay5qcyIsImxpbmsvdmlzdWFsaXplcmxpbmsuanMiLCJub2RlL25vZGUuanMiLCJub2RlL3Zpc3VhbGl6ZXJub2RlLmpzIiwicG9saWN5L25vZGVzZWxlY3Rpb25wb2xpY3kuanMiLCJwb2xpY3kvcGF0aGNoYW5nZXZpZXdwb2xpY3kuanMiLCJhcHBsaWNhdGlvbmdyb3Vwcy9tb2R1bGUuanMiLCJkYXNoYm9hcmQvbW9kdWxlLmpzIiwicG9saWN5L3BvbGljeS5qcyIsImxvZ2luL21vZHVsZS5qcyIsIm1lbnUvbW9kdWxlLmpzIiwicG9saWN5L3BvbGljeXNlcnZpY2UuanMiLCJuZXR3b3JrX3BvbGljaWVzL21vZHVsZS5qcyIsIm5ldHdvcmtzL21vZHVsZS5qcyIsInBvbGljeS9xdGlwcG9saWN5LmpzIiwibm9kZXMvbW9kdWxlLmpzIiwib3JnYW5pemF0aW9ucy9tb2R1bGUuanMiLCJwb2xpY3kvc2F2ZXN0YXRlcG9saWN5LmpzIiwic2VydmljZV9sYnMvbW9kdWxlLmpzIiwic2V0dGluZ3MvbW9kdWxlLmpzIiwicG9saWN5L3NwbGl0am9pbm5vZGVwb2xpY3kuanMiLCJzdG9yYWdlX3BvbGljaWVzL21vZHVsZS5qcyIsInZpc3VhbGl6YXRpb24vbW9kdWxlLmpzIiwicG9saWN5L3NwbGl0am9pbnZpZXdwb2xpY3kuanMiLCJ2b2x1bWVzL21vZHVsZS5qcyIsImFwcC5qcyIsImxvZ2luL2xvZ2luY3RybC5qcyIsIm1lbnUvbWVudUN0cmwuanMiLCJub2Rlcy9iZ3BzZXJ2aWNlLmpzIiwibm9kZXMvbG9nc2RpcmVjdGl2ZS5qcyIsIm5vZGVzL2xvZ3NlcnZpY2UuanMiLCJub2Rlcy9ub2RlYWN0aXZlam9ibG9nc2N0cmwuanMiLCJub2Rlcy9ub2RlY29tbWlzc2lvbmN0cmwuanMiLCJub2Rlcy9ub2RlZGV0YWlsc2N0cmwuanMiLCJub2Rlcy9ub2RlZGlyZWN0aXZlLmpzIiwibm9kZXMvbm9kZWRpc2NvdmVyY3RybC5qcyIsIm5vZGVzL25vZGVsYXN0am9ibG9nc2N0cmwuanMiLCJub2Rlcy9ub2RlbGlzdGN0cmwuanMiLCJvcmdhbml6YXRpb25zL29yZ2FuaXphdGlvbmNyZWF0ZWN0cmwuanMiLCJvcmdhbml6YXRpb25zL29yZ2FuaXphdGlvbmRldGFpbHNjdHJsLmpzIiwic2V0dGluZ3MvY2x1c3RlcnNldHRpbmdjdHJsLmpzIiwic3RvcmFnZV9wb2xpY2llcy9zdG9yYWdlcG9saWN5Y3JlYXRlY3RybC5qcyIsInN0b3JhZ2VfcG9saWNpZXMvc3RvcmFnZXBvbGljeWRldGFpbHNjdHJsLmpzIiwic3RvcmFnZV9wb2xpY2llcy9zdG9yYWdlcG9saWN5ZGlyZWN0aXZlLmpzIiwidmlzdWFsaXphdGlvbi92aXN1YWxpemF0aW9uZWRnZWN0cmwuanMiLCJ2aXN1YWxpemF0aW9uL3Zpc3VhbGl6YXRpb25lZGdlZGlyZWN0aXZlLmpzIiwidmlzdWFsaXphdGlvbi92aXN1YWxpemF0aW9uZ3JhcGhkaXJlY3RpdmUuanMiLCJ2aXN1YWxpemF0aW9uL3Zpc3VhbGl6YXRpb25saXN0Y3RybC5qcyIsInZpc3VhbGl6YXRpb24vdmlzdWFsaXphdGlvbnNlcnZpY2UuanMiLCJ2b2x1bWVzL3ZvbHVtZWNyZWF0ZWN0cmwuanMiLCJ2b2x1bWVzL3ZvbHVtZXNuYXBzaG90Y29weWN0cmwuanMiLCJjb21wb25lbnRzL21vZGVscy9tb2RlbHMubW9kdWxlLmpzIiwiY29tcG9uZW50cy9kaXJlY3RpdmVzL25vZGVzL2FjaXZhbGlkZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9kaXJlY3RpdmVzL25vZGVzL2NvbnRyb2xpbnRlcmZhY2VkaXJlY3RpdmUuanMiLCJjb21wb25lbnRzL2RpcmVjdGl2ZXMvbm9kZXMvbmV0d29ya21vZGVkaXJlY3RpdmUuanMiLCJjb21wb25lbnRzL2RpcmVjdGl2ZXMvbm9kZXMvc2NoZWR1bGVyZGlyZWN0aXZlLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJmYWN0b3J5IiwiTm9kZSIsIkxpbmsiLCJEYXRhU291cmNlIiwibm9kZXMiLCJsaW5rcyIsImlkIiwiaSIsImxlbmd0aCIsIm5hbWUiLCJub2RlRGF0YSIsIl8iLCJmb3JFYWNoIiwiZGF0YSIsIm5ld05vZGUiLCJ0ZXh0IiwicHVzaCIsImxpbmtEYXRhIiwiZmluZE5vZGVCeUlkIiwic291cmNlIiwidGFyZ2V0IiwibGluayIsIlZpc3VhbGl6ZXJOb2RlIiwiVmlzdWFsaXplckxpbmsiLCJWaXN1YWxpemVyRGF0YVNvdXJjZSIsImNoaWxkcmVuX3N0cnVjdCIsImFuY2VzdG9yc19zdHJ1Y3QiLCJsYWJlbHMiLCJzZWxlY3RvcnMiLCJ0aGlzRGF0YVNvdXJjZSIsImFkZGVkQ2xpZW50Iiwibm9kZSIsImFuY2VzdG9ycyIsImlzRW1wdHkiLCJwYXJlbnQiLCJpbmNsdWRlcyIsInRvcExldmVsIiwiZ2V0Rmxvd0JldHdlZW5TZXQiLCJub2RlX25hbWVzIiwibG9jYWxfbm9kZXMiLCJpZE1hcHBpbmciLCJqIiwiaW5kZXhPZiIsIndlaWdodCIsIm5vZGVfdG9fYWRkIiwibm9kZUlkVG9OYW1lIiwiYWRkZWRfbGlua3MiLCJ1bmRlZmluZWQiLCJleGlzdGluZ19saW5rIiwic2V0V2VpZ2h0IiwiZ2V0UmF3V2VpZ2h0IiwiaW5jcmVhc2VDb3VudCIsIlBvbGljeVNlcnZpY2UiLCJHcmFwaCIsInN2ZyIsInRoaXNHcmFwaCIsImRlZmF1bHROb2RlUG9saWNpZXMiLCJkZWZhdWx0UGF0aFBvbGljaWVzIiwic3ZnUG9saWN5IiwiUG9saWN5Iiwic3RhdGUiLCJjYW5ab29tIiwiY2FuUGFuIiwiaW5pdEZvcmNlIiwiZGlzYWJsZVVwZGF0ZSIsImNvbnN0cyIsImNpcmNsZUdDbGFzcyIsImdyYXBoQ2xhc3MiLCJwYXRoQ2xhc3MiLCJub2RlQ2xhc3MiLCJub2RlVGV4dCIsInN0YXJ0UmFkaXVzIiwibWF4UmFkaXVzIiwicGFkZGluZyIsImRpc3BsYXlPZmZzZXQiLCJvbiIsImQiLCJjYWxsIiwiZGVmcyIsImFwcGVuZCIsImF0dHIiLCJzdmdHIiwiY2xhc3NlZCIsInBhdGhzIiwic2VsZWN0QWxsIiwiY2lyY2xlcyIsImluaXROb2RlcyIsImluaXRMaW5rcyIsInNldFBvc2l0aW9ucyIsInJlc2l6ZUZ1bmMiLCJvbldpbmRvd1Jlc2l6ZSIsImJpbmRpbmdzIiwicmVzaXplIiwiJCIsIndpbmRvdyIsInBvbGljeSIsImRlc3Ryb3kiLCJrZXkiLCJvZmYiLCJpbml0aWFsaXplIiwiZDNOb2RlIiwiZWFjaCIsImQzIiwic2VsZWN0IiwiZDNkcmFnIiwiZHJhZyIsInBvbGljeVJlbW92ZSIsInBvbGljeVJlbW92ZU5hbWUiLCJwb2xpY3lOYW1lIiwiaW5kZXgiLCJzcGxpY2UiLCJldmVudCIsImQzcGF0aCIsImQzbm9kZSIsImQzem9vbSIsImRyYWdTdmciLCJnRWwiLCJ0aXRsZSIsIndvcmRzIiwic3BsaXQiLCJud29yZHMiLCJlbCIsInRzcGFuIiwidG9TcGxpY2UiLCJmaWx0ZXIiLCJsIiwibWFwIiwidXBkYXRlR3JhcGgiLCJzcGxpY2VMaW5rc0Zvck5vZGUiLCJ1cGRhdGVBdHRyIiwibmV3UGF0aHMiLCJuZXdQYXRoQXR0ciIsImhhc1BvbGljeSIsInBhdGhQb2xpY3lFdmVudCIsIm5ld05vZGVzIiwiZ3JhcGgiLCJuZXdOb2RlQXR0ciIsIm5vZGVQb2xpY3lFdmVudCIsIlN0cmluZyIsInJhZGl1cyIsImluc2VydFRpdGxlTGluZWJyZWFrcyIsImFscGhhIiwicXVhZHRyZWUiLCJnZW9tIiwiciIsIm54MSIsIngiLCJueDIiLCJueTEiLCJ5IiwibnkyIiwidmlzaXQiLCJxdWFkIiwieDEiLCJ5MSIsIngyIiwieTIiLCJwb2ludCIsIk1hdGgiLCJzcXJ0IiwiZSIsIndpZHRoIiwiaGVpZ2h0Iiwib2Zmc2V0IiwicSIsIm4iLCJkM0ZvcmNlQ29sbGlkZSIsIm1heCIsIm1pbiIsInN2Z1dpZHRoIiwic3ZnSGVpZ2h0IiwiY2FsbGJhY2siLCJib3VuZHMiLCJkM0ZvcmNlQm91bmRzIiwiZm9yY2UiLCJsYXlvdXQiLCJzaXplIiwiY2hhcmdlIiwibGlua0Rpc3RhbmNlIiwibGlua1N0cmVuZ3RoIiwiZ3Jhdml0eSIsImQzRm9yY2VUaWNrIiwiZDNGb3JjZVN0YXJ0IiwiZDNGb3JjZUVuZCIsInN0YXJ0IiwiayIsInRpY2siLCJzdG9wIiwidXBkYXRlRXhpc3RpbmdOb2RlcyIsIm5ld0dzIiwiZW50ZXIiLCJleGl0IiwicmVtb3ZlIiwic2V0Rm9yY2UiLCJ1cGRhdGVOZXdOb2RlcyIsInVwZGF0ZUV4aXN0aW5nUGF0aHMiLCJuZXdwYXRocyIsInN0eWxlIiwidXBkYXRlTmV3UGF0aHMiLCJWaXN1YWxpemVyR3JhcGgiLCJkYXRhU291cmNlIiwidHJhbnNpdGlvbiIsImVkZ2VfYnVmZmVyIiwicmFkaXVzRGVjYXkiLCJjb250YWluZXJDbGFzcyIsImJlaGF2aW9yIiwib3JpZ2luIiwiYXJncyIsImR4IiwiZHkiLCJ6b29tIiwic291cmNlRXZlbnQiLCJjdHJsS2V5Iiwiem9vbWVkIiwidHJhbnNsYXRlIiwic2NhbGUiLCJyaWdodENsaWNrIiwianVzdFNjYWxlVHJhbnNHcmFwaCIsInpvb21TZXRDYWxsYmFjayIsInRyYW5zbGF0ZV9uYW1lIiwiZGVsYXkiLCJkdXJhdGlvbiIsImJvZHlFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJkaXZXaWR0aCIsImNsaWVudEhlaWdodCIsInRvcCIsIm5vZGVfbmFtZXNfc2V0IiwicmV0RGF0YSIsInByb2Nlc3NMaW5rRGF0YSIsInNvdXJjZU5vZGUiLCJ0YXJnZXROb2RlIiwicGF0aFBvbGljaWVzIiwiaW5pdGlhbGl6ZWQiLCJhcnJvd1BhdGgiLCJkciIsInRoaXNQYXRoIiwiY291bnQiLCJyZXQiLCJteSIsImF0IiwiYWRqdXN0IiwibWF4V2VpZ2h0IiwidXNlQXZnV2VpZ2h0IiwidXBkYXRlTWF4V2VpZ2h0IiwidmFsIiwibWF4TGluayIsIm1heEJ5IiwiZ2V0V2VpZ2h0IiwiY29sb3JTY2FsZSIsImxpbmVhciIsImRvbWFpbiIsInJhbmdlIiwic2VsZWN0ZWRDbGFzcyIsInNlbGVjdGVkRWRnZSIsImMiLCJhdHRyVHdlZW4iLCJpbnRlcnBvbGF0ZVN0cmluZyIsIm5vZGVQb2xpY2llcyIsInRoaXNOb2RlIiwieFN0YXJ0IiwieVN0YXJ0IiwiTm9kZVNlbGVjdGlvblBvbGljeSIsInNlbGVjdGVkTm9kZXMiLCJzZWxlY3Rpb24iLCJjZCIsInN0b3BQcm9wYWdhdGlvbiIsInJlbW92ZVNlbGVjdEZyb21Ob2RlIiwiYWRkU2VsZWN0Tm9kZSIsInJlbW92ZUFsbFNlbGVjdGVkTm9kZXMiLCJQYXRoQ2hhbmdlVmlld1BvbGljeSIsIiRzdGF0ZSIsInRoaXNQb2xpY3kiLCJyZXRMaXN0IiwiZ2VuZXJhdGVMaXN0SGVscGVyIiwibm9kZUlkcyIsImNoaWxkSWQiLCJoYXNDaGlsZCIsInN1YlJldExpc3QiLCJjb25jYXQiLCJlZGdlIiwic291cmNlTGlzdCIsInRhcmdldExpc3QiLCJzb3VyY2VJZCIsInRhcmdldElkIiwiZ2VuZXJhdGVMaXN0IiwiZ28iLCJzb3VyY2VOYW1lIiwidGFyZ2V0TmFtZSIsInZpZXdFZGdlIiwiZDNvYmoiLCJRVGlwUG9saWN5IiwiU3BsaXRKb2luTm9kZVBvbGljeSIsIlNwbGl0Sm9pblZpZXdQb2xpY3kiLCJTYXZlU3RhdGVQb2xpY3kiLCJtb3VzZWRvd24iLCJtb3VzZXVwIiwiZ3JhcGhVcGRhdGVOZXdOb2RlcyIsImdyYXBoVXBkYXRlTmV3UGF0aHMiLCJpbnRlcnZhbCIsInNldFRpbWVvdXQiLCJxdGlwIiwid2hlblFUaXBBdmFpbGFibGUiLCJhdHRhY2hRVGlwIiwic2VsZWN0b3JNYXAiLCJoYXNLZXlzIiwibGFiZWxzTWFwIiwic2xpY2UiLCJjb250ZW50IiwiZXZlbnRzIiwic2hvdyIsImFwaSIsInBvc2l0aW9uIiwibGVmdCIsInNldCIsInNvbG8iLCJjbGFzc2VzIiwiaGlkZSIsInBhdGhFbCIsIm1pZHBvaW50IiwiZ2V0UG9pbnRBdExlbmd0aCIsImdldFRvdGFsTGVuZ3RoIiwidGFyZ2V0UmV0IiwicXRpcEhlbHBlciIsInNhdmVkU3RhdGUiLCJncmFwaERlc3Ryb3kiLCJsb2FkIiwiZ3JhcGhMb2FkIiwic3BsaXROb2RlcyIsInN1cGVyU3RhdGUiLCJzcGxpdE11bHRpcGxlTm9kZXMiLCJzcGxpdE5vZGUiLCJwcmV2ZW50RGVmYXVsdCIsImpvaW5Ob2RlIiwiZ3JhcGhOb2RlcyIsIm5ld19ub2RlcyIsInhMb2MiLCJ5TG9jIiwibmV3X25vZGVfb2JqcyIsIm5ld19ub2RlIiwicmVzIiwiX19zcGxpdE5vZGUiLCJzcGxpdE5vZGVFdmVudCIsInJlc05vZGVzIiwic3BsaXRNdWx0aXBsZU5vZGVzRXZlbnQiLCJ0b19iZV9kZWxldGVkIiwibmV3X25vZGVfaWQiLCJub2RlX3RvX2RlbGV0ZSIsIl9fam9pbk5vZGUiLCJqb2luTm9kZUV2ZW50Iiwiam9pbk11bHRpcGxlTm9kZXNFdmVudCIsInNhdmVkU3RhdGVzIiwiZXZlbnRIaXN0b3J5IiwiZm9jdXNHcm91cHMiLCJmb2NpIiwiem9vbXMiLCJsYXlvdXREZWZhdWx0Iiwiem9vbURlZmF1bHQiLCJub2RlSWRzVG9SZXNob3ciLCJiYWNrQnV0dG9uRWxlbSIsInRpdGxlRWxlbSIsImJvdW5kYXJ5IiwiZWxlbSIsImJhY2tCdXR0b24iLCJ1bmRvTGFzdEV2ZW50Iiwic2F2ZSIsImN1cnJUaXRsZSIsInN0YXRlcyIsImxvYWRTdGF0ZSIsImZhZGVUbyIsInR5cGUiLCJwb3MiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlR3JhcGhDYWxsYmFjayIsIm5vZGVzVG9LZWVwIiwiZ3JvdXBPbmVOb2RlcyIsInBhcnNlRmxvYXQiLCJzcGxpdE5vZGVGdW5jIiwiZ3JhcGhDb25zdHMiLCJnZXRSYW5kb21JbnQiLCJmbG9vciIsInJhbmRvbSIsInN0YXRlUG9saWN5IiwiZGVmYXVsdExheW91dCIsImNvbnN0c1BvbGljeSIsImNhbGNNYXhOb2RlcyIsImFyZWEiLCJhbW91bnQiLCJmb2N1c05vZGVzIiwiYm90IiwicG9wIiwic2V0TGF5b3V0Iiwic3RhdGVTdXBlciIsIm5vZGVOYW1lU2V0IiwibmFtZVRvQWRkIiwibm9kZXNUb1Byb2Nlc3MiLCJwcm9jZXNzTm9kZURhdGEiLCJub2RlVG9SZW1vdmUiLCJsYXN0IiwiZmluZEQzTm9kZSIsImRibGNsaWNrIiwibm9kZUlkIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBSUFBLFFBQVFDLE1BQVIsQ0FBZSxjQUFmLEVBQStCLEVBQS9CO0FDSkE7QUFDQTtBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaERBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBRCxRQUFRQyxNQUFSLENBQWUsY0FBZixFQUNLQyxPQURMLENBQ2EsWUFEYixFQUMyQixDQUFDLE1BQUQsRUFBUyxNQUFULEVBQ3RCLFVBQVVDLElBQVYsRUFBZ0JDLElBQWhCLEVBQXNCO0FBQUEsS0FFaEJDLFVBRmdCO0FBR3JCOzs7Ozs7QUFNSCxzQkFBWUMsS0FBWixFQUFtQkMsS0FBbkIsRUFBMEI7QUFBQTs7QUFDekIsUUFBS0QsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsUUFBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0E7O0FBRUQ7Ozs7Ozs7QUFkd0I7QUFBQTtBQUFBLCtCQW1CWkQsS0FuQlksRUFtQkw7QUFDbEIsU0FBS0Es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QTtBQUNBO0FBQ0E7QUFDQTtBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRGVmaW5pbmcgdGhlIEdyYXBoIE1vZHVsZS5cbiAqIFNlZSBERVNJR04ubWQgZm9yIGluZm8gb24gR3JhcGggT2JqZWN0cy5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5ncmFwaCcsIFtdKTtcblxuXG5cblxuIiwiYW5ndWxhci5tb2R1bGUoXCJjb250aXYuZGlyZWN0aXZlc1wiLCBbXSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb2R1bGUuanMubWFwIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzE0LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm1vZGVscycsIFtdKTtcbnZhciBDb250aXZHbG9iYWxzID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvL1JFU1QgZW5kcG9pbnRzIGZvciBORVRNQVNURVJcbiAgICAgICAgJ05FVFdPUktTX0VORFBPSU5UJzogJy9uZXRtYXN0ZXIvYXBpL3YxL25ldHdvcmtzLycsXG4gICAgICAgICdORVRXT1JLU19JTlNQRUNUX0VORFBPSU5UJzogJy9uZXRtYXN0ZXIvYXBpL3YxL2luc3BlY3QvbmV0d29ya3MvJyxcbiAgICAgICAgJ1NFUlZJQ0VMQlNfSU5TUEVDVF9FTkRQT0lOVCc6ICcvbmV0bWFzdGVyL2FwaS92MS9pbnNwZWN0L3NlcnZpY2VMQnMvJyxcbiAgICAgICAgJ1BPTElDSUVTX0VORFBPSU5UJzogJy9uZXRtYXN0ZXIvYXBpL3YxL3BvbGljeXMvJyxcbiAgICAgICAgJ1JVTEVTX0VORFBPSU5UJzogJy9uZXRtYXN0ZXIvYXBpL3YxL3J1bGVzLycsXG4gICAgICAgICdBUFBMSUNBVElPTkdST1VQU19FTkRQT0lOVCc6ICcvbmV0bWFzdGVyL2FwaS92MS9lbmRwb2ludEdyb3Vwcy8nLFxuICAgICAgICAnU0VSVklDRUxCU19FTkRQT0lOVCc6ICcvbmV0bWFzdGVyL2FwaS92MS9zZXJ2aWNlTEJzLycsXG4gICAgICAgICdPUkdBTklaQVRJT05TX0VORFBPSU5UJzogJy9uZXRtYXN0ZXIvYXBpL3YxL3RlbmFudHMvJyxcbiAgICAgICAgJ05FVFdPUktfU0VUVElOR1NfRU5EUE9JTlQnOiAnL25ldG1hc3Rlci9hcGkvdjEvZ2xvYmFscy8nLFxuICAgICAgICAnTkVUUFJPRklMRVNfRU5EUE9JTlQnOiAnL25ldG1hc3Rlci9hcGkvdjEvbmV0cHJvZmlsZXMvJyxcbiAgICAgICAgJ0JHUFNfRU5EUE9JTlQnOiAnL25ldG1hc3Rlci9hcGkvdjEvQmdwcy8nLFxuICAgICAgICAnQkdQU19JTlNQRUNUX0VORFBPSU5UJzogJy9uZXRtYXN0ZXIvYXBpL3YxL2luc3BlY3QvQmdwcy8nLFxuICAgICAgICAnVklTVUFMSVpBVElPTl9FTkRQT0lOVCc6ICcvdmlzdWFsaXphdGlvbi8nLFxuICAgICAgICAvL1JFU1QgZW5kcG9pbnRzIGZvciBWT0xNQVNURVJcbiAgICAgICAgJ1ZPTFVNRVNfRU5EUE9JTlQnOiAnL3ZvbG1hc3Rlci92b2x1bWVzLycsXG4gICAgICAgICdWT0xVTUVTX0NSRUFURV9FTkRQT0lOVCc6ICcvdm9sbWFzdGVyL3ZvbHVtZXMvY3JlYXRlLycsXG4gICAgICAgICdWT0xVTUVTX0RFTEVURV9FTkRQT0lOVCc6ICcvdm9sbWFzdGVyL3ZvbHVtZXMvcmVtb3ZlLycsXG4gICAgICAgICdWT0xVTUVTX0NPUFlTTkFQU0hPVFNfRU5EUE9JTlQnOiAnL3ZvbG1hc3Rlci92b2x1bWVzL2NvcHknLFxuICAgICAgICAnVk9MVU1FU19VU0VTX0VORFBPSU5UJzogJy92b2xtYXN0ZXIvdXNlcy9tb3VudHMvJyxcbiAgICAgICAgJ1ZPTFVNRVNfU05BUFNIT1RTX0VORFBPSU5UJzogJy92b2xtYXN0ZXIvc25hcHNob3RzLycsXG4gICAgICAgICdTVE9SQUdFUE9MSUNJRVNfRU5EUE9JTlQnOiAnL3ZvbG1hc3Rlci9wb2xpY2llcy8nLFxuICAgICAgICAnVk9MVU1FU19HTE9CQUxfRU5EUE9JTlQnOiAnL3ZvbG1hc3Rlci9nbG9iYWwvJyxcbiAgICAgICAgLy9SRVNUIGVuZHBvaW50cyBmb3IgQ0xVU1RFUlxuICAgICAgICAnTk9ERVNfTElTVF9FTkRQT0lOVCc6ICcvaW5mby9ub2RlcycsXG4gICAgICAgICdOT0RFU19ESVNDT1ZFUl9FTkRQT0lOVCc6ICcvZGlzY292ZXIvbm9kZXMnLFxuICAgICAgICAnTk9ERVNfQ09NTUlTU0lPTl9FTkRQT0lOVCc6ICcvY29tbWlzc2lvbi9ub2RlcycsXG4gICAgICAgICdOT0RFU19ERUNPTU1JU1NJT05fRU5EUE9JTlQnOiAnL2RlY29tbWlzc2lvbi9ub2RlcycsXG4gICAgICAgICdOT0RFU19NQUlOVEVOQU5DRV9FTkRQT0lOVCc6ICcvbWFpbnRlbmFuY2Uvbm9kZXMnLFxuICAgICAgICAnTk9ERVNfTEFTVF9KT0JfRU5EUE9JTlQnOiAnL2luZm8vam9iL2xhc3QnLFxuICAgICAgICAnTk9ERVNfQUNUSVZFX0pPQl9FTkRQT0lOVCc6ICcvaW5mby9qb2IvYWN0aXZlJyxcbiAgICAgICAgJ05PREVTX1NFVFRJTkdTX1NFVF9FTkRQT0lOVCc6ICcvZ2xvYmFscycsXG4gICAgICAgICdOT0RFU19TRVRUSU5HU19HRVRfRU5EUE9JTlQnOiAnL2luZm8vZ2xvYmFscycsXG4gICAgICAgIC8vUmVmcmVzaCBpbnRlcnZhbCBpbiBtaWxsaXNlY29uZHNcbiAgICAgICAgJ1JFRlJFU0hfSU5URVJWQUwnOiA1MDAwLFxuICAgICAgICAvL1JlZ0V4IGZvciB2YWxpZGF0aW9uXG4gICAgICAgICdDSURSX1JFR0VYJzogJ14oKFswLTldfFsxLTldWzAtOV18MVswLTldezJ9fDJbMC00XVswLTldfDI1WzAtNV0pXFwuKXszfShbMC05XXxbMS05XVswLTldfDFbMC05XXsyfXwyWzAtNF1bMC05XXwyNVswLTVdKShcXC8oWzAtOV18WzEtMl1bMC05XXwzWzAtMl0pKSQnLFxuICAgICAgICAnVkxBTl9SRUdFWCc6ICdeKFswLTldezEsNH0/LVswLTldezEsNH0/KSQnLFxuICAgICAgICAnVlhMQU5fUkVHRVgnOiAnXihbMC05XXsxLDh9Py1bMC05XXsxLDh9PykkJyxcbiAgICAgICAgJ05VTUJFUl9SRUdFWCc6ICdeWzAtOV0qJCdcbiAgICB9O1xufSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vZHVsZS5qcy5tYXAiLCIvKipcbiAqIFRoZSBiYXNlIGNsYXNzIHRoZSBEYXRhU291cmNlIG9iamVjdC5cbiAqIFxuICogVGhlIERhdGFTb3VyY2Ugb2JqZWN0IHRha2VzIGluIG5vZGUgYW5kIGxpbmsgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIsIFxuICogYW5kIHByb3ZpZGVzIG1ldGhvZHMgZm9yIGNvbnZlcnRpbmcgYW5kIG1hbmlwdWxhdGluZyB0aGUgZGF0YSBmb3JcbiAqIHRoZSBncmFwaCBvYmplY3QuXG4gKiBcbiAqIFRvIHdyaXRlIHlvdXIgb3duIERhdGFTb3VyY2Ugb2JqZWN0LCBjcmVhdGUgYSBuZXcgZmFjdG9yeSB0aGF0IHVzZXMgdGhlIFxuICogRGF0YVNvdXJjZSB5b3Ugd2FudCB0byBpbmhlcml0IGFzIGEgZGVwZW5kZW5jeSwgYW5kIGV4dGVuZCBcbiAqIGl0cyBEYXRhU291cmNlIGNsYXNzLiBcbiAqIFJldHVybiB0aGUgY2xhc3Mgb2JqZWN0IHdpdGggRGF0YVNvdXJjZSBhcyBrZXkuXG4gKiBcbiAqIE5vZGUgZGF0YSBpcyBleHBlY3RlZCB0byBiZSBpbiB0aGUgZm9sbG93aW5nIGZvcm1hdDpcbiAqIHtpZDpub2RlX2lkLCB0ZXh0Om5vZGVfdGV4dH1cbiAqIFxuICogTGluayBkYXRhIGlzIGV4cGVjdGVkIHRvIGJlIGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0OlxuICoge3NvdXJjZTogc291cmNlTm9kZUlkLCB0YXJnZXQ6IHRhcmdldE5vZGVJZH1cbiAqIFxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LmdyYXBoJylcbiAgICAuZmFjdG9yeSgnRGF0YVNvdXJjZScsIFsnTm9kZScsICdMaW5rJywgXG4gICAgXHRmdW5jdGlvbiAoTm9kZSwgTGluaykge1xuXG4gICAgXHRjbGFzcyBEYXRhU291cmNlIHtcbiAgICBcdFx0LyoqXG4gICAgXHRcdCAqIENvbnN0cnVjdHMgdGhlIG9iamVjdC5cbiAgICBcdFx0ICpcbiAgICBcdFx0ICogQHBhcmFtICAgICAge0FycmF5fSAgIG5vZGVzICAgICAgICAgICAgICBUaGUgbm9kZSBkYXRhIFxuICAgIFx0XHQgKiBAcGFyYW0gICAgICB7QXJyYXl9ICAgbGlua3MgICAgICAgICAgICAgIFRoZSBsaW5rIGRhdGFcbiAgICBcdFx0ICovXG5cdFx0XHRjb25zdHJ1Y3Rvcihub2RlcywgbGlua3MpIHtcblx0XHRcdFx0dGhpcy5ub2RlcyA9IG5vZGVzO1xuXHRcdFx0XHR0aGlzLmxpbmtzID0gbGlua3M7XG5cdFx0XHR9XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogUmVwbGFjZXMgdGhlIG5vZGUgZGF0YVxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSAgICAgIHtOb2RlfSAgbm9kZXMgICBUaGUgbm9kZXNcblx0XHRcdCAqL1xuXHRcdFx0dXBkYXRlTm9kZXMobm9kZXMpIHtcblx0XHRcdFx0dGhpcy5ub2RlcyA9IG5vZGVzO1xuXHRcdFx0fVxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFJlcGxhY2VzIHRoZSBsaW5rIGRhdGFcblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0gICAgICB7TGlua30gIGxpbmtzICAgVGhlIGxpbmtzXG5cdFx0XHQgKi9cblx0XHRcdHVwZGF0ZUxpbmtzKGxpbmtzKSB7XG5cdFx0XHRcdHRoaXMubGlua3MgPSBsaW5rcztcblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBSZXR1cm5zIHRoZSBOYW1lIGF0dHJpYnV0ZSBvZiB0aGUgTm9kZSB3aXRoIHRoZSBcblx0XHRcdCAqIG1hdGNoaW5nIGlkXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtICAgICAge3N0cmluZ30gIGlkICAgICAgVGhlIGlkZW50aWZpZXJcblx0XHRcdCAqIEByZXR1cm4gICAgIHtzdHJpbmd9ICBuYW1lIG9mIHRoZSBtYXRjaGluZyBub2RlXG5cdFx0XHQgKi9cblx0XHRcdG5vZGVJZFRvTmFtZShpZCkge1xuXHRcdCAgICAgICAgdmFyIG5vZGVzID0gdGhpcy5ub2Rlcztcblx0XHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcblx0XHQgICAgICAgICAgICBpZiAobm9kZXNbaV0uaWQgPT0gaWQpIHtcblx0XHQgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVzW2ldLm5hbWU7XG5cdFx0ICAgICAgICAgICAgfVxuXHRcdCAgICAgICAgfVxuXHRcdCAgICB9XG5cblx0XHQgICAgLyoqXG5cdFx0ICAgICAqIHByb2Nlc3MgdGhlIG5vZGVEYXRhIHRvIGNyZWF0ZSBOb2RlIG9iamVjdHNcblx0XHQgICAgICpcblx0XHQgICAgICogQHBhcmFtICAgICAge0FycmF5fSAgbm9kZURhdGEgIE5vZGVEYXRhIHRvIGNvbnZlcnQgXG5cdFx0ICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBub2RlIG9iamVjdHNcblx0XHQgICAgICogQHJldHVybiAgICAge0FycmF5fSAgTm9kZSBvYmplY3RzXG5cdFx0ICAgICAqL1xuXHRcdCAgICBwcm9jZXNzTm9kZURhdGEobm9kZURhdGEpIHtcblx0XHQgICAgICAgIHZhciBub2RlcyA9IFtdO1xuXHRcdCAgICAgICAgXy5mb3JFYWNoKG5vZGVEYXRhLCBmdW5jdGlvbihkYXRhKSB7XG5cdFx0ICAgICAgICAgICAgdmFyIG5ld05vZGUgPSBuZXcgTm9kZS5Ob2RlKG51bGwsIG51bGwsIGRhdGEuaWQsIGRhdGEudGV4dCwgbnVsbCk7XG5cdFx0ICAgICAgICAgICAgbm9kZXMucHVzaChuZXdOb2RlKTtcblx0XHQgICAgICAgIH0pO1xuXHRcdCAgICAgICAgcmV0dXJuIG5vZGVzO1xuXHRcdCAgICB9XG5cblx0XHQgICAgLyoqXG5cdFx0ICAgICAqIHByb2Nlc3MgdGhlIGxpbmtEYXRhXG5cdFx0ICAgICAqXG5cdFx0ICAgICAqIEBwYXJhbSAgICAgIHtBcnJheX0gIGxpbmtEYXRhICBUaGUgbGluayBkYXRhXG5cdFx0ICAgICAqIEBwYXJhbSAgICAgIHtBcnJheX0gIG5vZGVzICAgICBUaGUgbm9kZXMgZnJvbSBwcm9jZXNzTm9kZURhdGFcblx0XHQgICAgICogQHJldHVybiAgICAge0FycmF5fSAgTGluayBvYmplY3RzXG5cdFx0ICAgICAqL1xuXHRcdCAgICBwcm9jZXNzTGlua0RhdGEobGlua0RhdGEsIG5vZGVzKSB7XG5cdFx0ICAgIFx0LyoqXG5cdFx0XHQgICAgICogUmV0dXJucyB0aGUgbm9kZSB0aGF0IG1hdGNoZXMgdGhlIGlkXG5cdFx0XHQgICAgICpcblx0XHRcdCAgICAgKiBAcGFyYW0gICAgICB7c3RyaW5nfSBpZCAgICAgIFRoZSBpZGVudGlmaWVyXG5cdFx0XHQgICAgICogQHJldHVybiAgICAge05vZGV9ICAgVGhlIG5vZGUgd2l0aCB0aGUgbWF0Y2hpbmcgaWRcblx0XHRcdCAgICAgKi9cblx0XHRcdCAgICBmdW5jdGlvbiBmaW5kTm9kZUJ5SWQoaWQsIG5vZGVzKSB7XG5cdFx0XHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdCAgICAgICAgICAgIGlmIChpZCA9PSBub2Rlc1tpXS5pZCkge1xuXHRcdFx0ICAgICAgICAgICAgICAgIHJldHVybiBub2Rlc1tpXTtcblx0XHRcdCAgICAgICAgICAgIH1cblx0XHRcdCAgICAgICAgfVxuXHRcdFx0ICAgIH1cblxuXHRcdCAgICAgICAgdmFyIGxpbmtzID0gW107XG5cdFx0ICAgICAgICAvL3RyYW5zZm9ybWluZyBsaW5rIGRhdGFcblx0XHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlua0RhdGEubGVuZ3RoOyBpKyspIHtcblx0XHQgICAgICAgICAgICBpZiAobGlua0RhdGFbaV0uc291cmNlICE9IGxpbmtEYXRhW2ldLnRhcmdldCkge1xuXHRcdCAgICAgICAgICAgICAgICB2YXIgc291cmNlID0gZmluZE5vZGVCeUlkKGxpbmtEYXRhW2ldLnNvdXJjZSwgbm9kZXMpO1xuXHRcdCAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZmluZE5vZGVCeUlkKGxpbmtEYXRhW2ldLnRhcmdldCwgbm9kZXMpO1xuXHRcdCAgICAgICAgICAgICAgICBpZiAoc291cmNlID09IG51bGwgfHwgdGFyZ2V0ID09IG51bGwpIHtcblx0XHQgICAgICAgICAgICAgICAgXHRjb250aW51ZTtcblx0XHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBsaW5rID0gbmV3IExpbmsuTGluayhzb3VyY2UsIHRhcmdldCk7XG5cdCAgICAgICAgICAgICAgICAgICAgbGlua3MucHVzaChsaW5rKTtcblx0XHQgICAgICAgICAgICB9ICBcblx0XHQgICAgICAgIH1cblx0XHQgICAgICAgIHJldHVybiBsaW5rcztcblx0XHQgICAgfVxuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0RGF0YVNvdXJjZTpEYXRhU291cmNlXG5cdFx0fVxufV0pO1xuXG5cblxuXG5cblxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzE4LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnV0aWxzJywgW10pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW9kdWxlLmpzLm1hcCIsIi8qKlxuICogVGhlIERhdGFTb3VyY2UgdXNlZCBmb3IgdGhlIHZpc3VhbGl6YXRpb24gdGFiLlxuICogXG4gKiBOb2RlIERhdGEgZnJvbSB0aGUgc2VydmVyIGlzIGV4cGVjdGVkIHRvIGJlIGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0OlxuICoge2lkOiBub2RlX2lkLCB0ZXh0OiBub2RlX3RleHR9XG4gKiBQYXJlbnQgYW5kIEFuY2VzdG9yIGF0dHJpYnV0ZXMgY2FuIGJlIHNldCBieSBjYWxsaW5nIHNldEFuY2VzdG9yc1xuICogXG4gKiBMaW5rIERhdGEgZnJvbSB0aGUgc2VydmVyIGlzIGV4cGVjdGVkIHRvIGJlIGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0OlxuICoge3NvdXJjZTogc291cmNlTm9kZUlkLCB0YXJnZXQ6IHRhcmdldE5vZGVJZCwgd2VpZ2h0OiBsaW5rV2VpZ2h0fVxuICogXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuZ3JhcGgnKVxuICAgIC5mYWN0b3J5KCdWaXN1YWxpemVyRGF0YVNvdXJjZScsIFsnRGF0YVNvdXJjZScsICdWaXN1YWxpemVyTm9kZScsICdWaXN1YWxpemVyTGluaycsIFxuICAgIFx0ZnVuY3Rpb24gKERhdGFTb3VyY2UsIFZpc3VhbGl6ZXJOb2RlLCBWaXN1YWxpemVyTGluaykge1xuXG4gICAgXHRjbGFzcyBWaXN1YWxpemVyRGF0YVNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2UuRGF0YVNvdXJjZSB7XG4gICAgXHRcdC8qKlxuICAgIFx0XHQgKiBDb25zdHJ1Y3RzIHRoZSBvYmplY3QuXG4gICAgXHRcdCAqIFxuICAgIFx0XHQgKiBDaGlsZHJlbiBTdHJ1Y3QgYW5kIGFuY2VzdG9yc19zdHJ1Y3QgYXJlIEpTT04gb2JqZWN0cyxcbiAgICBcdFx0ICogbWFwcGluZyBhIG5vZGUgSWQgdG8gYSBsaXN0IG9mIGl0J3MgY2hpbGRyZW4gb3IgYW5jZXN0b3JzLlxuICAgIFx0XHQgKiBDaGlsZHJlbiBTdHJ1Y3QgaXMgYWxzbyBleHBlY3RlZCB0byBoYXZlIGEgZmllbGQgY2FsbGVkXG4gICAgXHRcdCAqIHRvcExldmVsLCB0aGF0IG1hcHMgdG8gYSBsaXN0IG9mIGFsbCB0aGUgbm9kZXMgdGhhdCBkb24ndFxuICAgIFx0XHQgKiBoYXZlIGFueSBwYXJlbnRzLlxuICAgIFx0XHQgKlxuICAgIFx0XHQgKiBAcGFyYW0gICAgICB7QXJyYXl9ICAgbm9kZXMgICAgICAgICAgICAgIFRoZSBub2RlIGRhdGEgXG4gICAgXHRcdCAqIEBwYXJhbSAgICAgIHtBcnJheX0gICBsaW5rcyAgICAgICAgICAgICAgVGhlIGxpbmsgZGF0YVxuICAgIFx0XHQgKiBAcGFyYW0gICAgICB7T2JqZWN0fSAgY2hpbGRyZW5fc3RydWN0ICAgIFRoZSBjaGlsZHJlbiBzdHJ1Y3R1cmVcbiAgICBcdFx0ICogQHBhcmFtICAgICAge09iamVjdH0gIGFuY2VzdG9yc19zdHJ1Y3QgICBUaGUgYW5jZXN0b3JzIHN0cnVjdHVyZVxuICAgIFx0XHQgKiBAcGFyYW0gICAgICB7QXJyYXl9ICAgbGFiZWxzICAgICAgICAgICAgIFRoZSBsYWJlbHNcbiAgICBcdFx0ICogQHBhcmFtICAgICAge0FycmF5fSAgIHNlbGVjdG9ycyAgICAgICAgICBUaGUgc2VsZWN0b3JzXG4gICAgXHRcdCAqL1xuXHRcdFx0Y29uc3RydWN0b3Iobm9kZXMsIGxpbmtzLCBjaGlsZHJlbl9zdHJ1Y3QsIGFuY2VzdG9yc19zdHJ1Y3QsIFxuXHRcdFx0XHRcdGxhYmVscywgc2VsZWN0b3JzKSB7XG5cdFx0XHRcdHN1cGVyKG5vZGVzLGxpbmtzKTtcblx0XHRcdFx0dGhpcy5jaGlsZHJlbl9zdHJ1Y3QgPSBjaGlsZHJlbl9zdHJ1Y3Q7XG5cdFx0XHRcdHRoaXMuYW5jZXN0b3JzX3N0cnVjdCA9IGFuY2VzdG9yc19zdHJ1Y3Q7XG5cdFx0XHRcdHRoaXMubGFiZWxzID0gbGFiZWxzO1xuXHRcdFx0XHR0aGlzLnNlbGVjdG9ycyA9IHNlbGVjdG9ycztcblx0XHRcdH1cblxuXHRcdCAgICAvKipcblx0XHQgICAgICogRGV0ZXJtaW5lcyBpZiBpdCBoYXMgY2hpbGQuXG5cdFx0ICAgICAqXG5cdFx0ICAgICAqIEBwYXJhbSAgICAgIHtzdHJpbmd9ICAgaWQgICAgICBUaGUgaWRlbnRpZmllclxuXHRcdCAgICAgKiBAcmV0dXJuICAgICB7Ym9vbGVhbn0gIFRydWUgaWYgaGFzIGNoaWxkLCBGYWxzZSBvdGhlcndpc2UuXG5cdFx0ICAgICAqL1xuXHRcdCAgICBoYXNDaGlsZChpZCkge1xuXHRcdCAgICBcdGlmICh0aGlzLmNoaWxkcmVuX3N0cnVjdFtpZF0gPT0gbnVsbCkge1xuICAgICAgICAgICAgXHRcdHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIFx0fVxuICAgICAgICAgICAgXHRyZXR1cm4gdHJ1ZTtcdFxuXHRcdCAgICB9XG5cblx0XHQgICAgLyoqXG5cdFx0ICAgICAqIFNldHMgdGhlIHBhcmVudCBhbmQgYW5jZXN0b3JzIGF0dHJpYnV0ZSB1c2luZyBcblx0XHQgICAgICogYW5jZXN0b3JzX3N0cnVjdCBmb3IgYWxsIHRoZSBub2Rlc1xuXHRcdCAgICAgKiBBbHNvIGFkZHMgYW55IG5vZGVzIHdpdGhvdXQgYW5jZXN0b3JzLCB0aGF0IGFyZW4ndCBcblx0XHQgICAgICogdG9wbGV2ZWwgdG8gdGhlIGNsaWVudCBzZXJ2aWNlLlxuXHRcdCAgICAgKi9cblx0XHQgICAgc2V0QW5jZXN0b3JzKCkge1xuXHRcdCAgICBcdHZhciB0aGlzRGF0YVNvdXJjZSA9IHRoaXM7XG5cdFx0ICAgIFx0dmFyIGFkZGVkQ2xpZW50ID0gZmFsc2U7XG5cdFx0ICAgIFx0Xy5mb3JFYWNoKHRoaXNEYXRhU291cmNlLm5vZGVzLCBmdW5jdGlvbihub2RlKSB7XG5cdFx0ICAgIFx0XHRub2RlLmFuY2VzdG9ycyA9IHRoaXNEYXRhU291cmNlLmFuY2VzdG9yc19zdHJ1Y3Rbbm9kZS5pZF0gfHwgW107XG5cdFx0ICAgIFx0XHRpZiAoXy5pc0VtcHR5KG5vZGUuYW5jZXN0b3JzKSA9PT0gZmFsc2UpIHtcblx0XHQgICAgXHRcdFx0bm9kZS5wYXJlbnQgPSBub2RlLmFuY2VzdG9yc1swXTtcblx0XHQgICAgXHRcdH0gZWxzZSB7XG5cdFx0ICAgIFx0XHRcdGlmIChfLmluY2x1ZGVzKHRoaXNEYXRhU291cmNlLmNoaWxkcmVuX3N0cnVjdC50b3BMZXZlbCwgbm9kZS5pZCkgPT0gZmFsc2UpIHtcblx0XHQgICAgXHRcdFx0XHQvL2NvbnRhaW5lciBoYXMgbm8gcGFyZW50XG5cdFx0ICAgIFx0XHRcdFx0Ly9hZGRpbmcgdG8gY2xpZW50XG5cdFx0ICAgIFx0XHRcdFx0bm9kZS5hbmNlc3RvcnMucHVzaChcImNsaWVudFwiKTtcblx0XHQgICAgXHRcdFx0XHR0aGlzRGF0YVNvdXJjZS5hbmNlc3RvcnNfc3RydWN0W25vZGUuaWRdID0gW1wiY2xpZW50XCJdO1xuXHRcdCAgICBcdFx0XHRcdGlmIChhZGRlZENsaWVudCA9PT0gZmFsc2UpIHtcblx0XHQgICAgXHRcdFx0XHRcdGFkZGVkQ2xpZW50ID0gdHJ1ZTtcblx0XHRcdCAgICBcdFx0XHRcdHRoaXNEYXRhU291cmNlLmNoaWxkcmVuX3N0cnVjdC50b3BMZXZlbC5wdXNoKFwiY2xpZW50XCIpO1xuXHRcdCAgICBcdFx0XHRcdFx0dGhpc0RhdGFTb3VyY2UuY2hpbGRyZW5fc3RydWN0WydjbGllbnQnXSA9IFtdO1xuXHRcdCAgICBcdFx0XHRcdH1cblx0XHQgICAgXHRcdFx0XHR0aGlzRGF0YVNvdXJjZS5jaGlsZHJlbl9zdHJ1Y3RbJ2NsaWVudCddLnB1c2gobm9kZS5pZCk7XG5cdFx0XHQgICAgXHRcdH1cblx0XHQgICAgXHRcdH1cblx0XHQgICAgXHR9KVxuXHRcdCAgICB9XG5cblx0XHQgICAgLyoqXG5cdFx0ICAgICAqIFJldHVybnMgdGhlIGZsb3cgYmV0d2VlbiB0aGUgaGlnaGVzdCBsZXZlbCBncm91cGluZ1xuXHRcdCAgICAgKlxuXHRcdCAgICAgKiBAcmV0dXJuICAgICB7T2JqZWN0fSAgVGhlIHRvcCBsZXZlbCBmbG93LlxuXHRcdCAgICAgKi9cblx0XHQgICAgZ2V0VG9wTGV2ZWxGbG93KCkge1xuXHRcdCAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Rmxvd0JldHdlZW5TZXQodGhpcy5jaGlsZHJlbl9zdHJ1Y3QudG9wTGV2ZWwpO1xuXHRcdCAgICB9XG5cblx0XHQgICAgLyoqXG5cdFx0ICAgICAqIEdldHMgdGhlIGZsb3cgYmV0d2VlbiBhbnkgc2V0IG9mIG5vZGUgbGV2ZWxzXG5cdFx0ICAgICAqXG5cdFx0ICAgICAqIEBwYXJhbSAgICAgIHtBcnJheX0gIG5vZGVfbmFtZXMgIFRoZSBub2RlIG5hbWVzIGluIHRoZSBzZXRcblx0XHQgICAgICogQHJldHVybiAgICAge09iamVjdH0gIFRoZSBmbG93IGJldHdlZW4gc2V0LlxuXHRcdCAgICAgKi9cblx0XHQgICAgZ2V0Rmxvd0JldHdlZW5TZXQobm9kZV9uYW1lcykge1xuXHRcdCAgICAgICAgdmFyIGxvY2FsX25vZGVzID0gdGhpcy5ub2Rlcztcblx0XHQgICAgICAgIHZhciBpZE1hcHBpbmcgPSB7fTtcblx0XHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG9jYWxfbm9kZXMubGVuZ3RoOyBpKyspIHtcblx0XHQgICAgICAgICAgICB2YXIgbm9kZSA9IGxvY2FsX25vZGVzW2ldO1xuXG5cdFx0ICAgICAgICAgICAgLy9pZiBub2RlIGlzIGFscmVhZHkgYXQgaXRzIGhpZ2hlc3QgbGV2ZWxcblx0XHQgICAgICAgICAgICBpZiAobm9kZS5hbmNlc3RvcnMgPT09IG51bGwpIHtcblx0XHQgICAgICAgICAgICAgICAgaWRNYXBwaW5nW25vZGUuaWRdID0gbm9kZS5uYW1lO1xuXHRcdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdFx0ICAgICAgICAgICAgICAgIC8vY2hlY2sgdG8gc2VlIHdoaWNoIHRhZ3MgYXJlIHByZXNlbnQgaW4gdGhlIGFuY2VzdG9yIGxpc3Rcblx0XHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBub2RlX25hbWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0ICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5hbmNlc3RvcnMuaW5kZXhPZihub2RlX25hbWVzW2pdKSA+IC0xKSB7XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgaWRNYXBwaW5nW25vZGUuaWRdID0gbm9kZV9uYW1lc1tqXTtcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0XHQgICAgICAgICAgICAgICAgICAgIH1cblx0XHQgICAgICAgICAgICAgICAgfVxuXHRcdCAgICAgICAgICAgIH1cblx0XHQgICAgICAgIH0gICBcblx0XHQgICAgICAgIC8vbW9kaWZ5IGxpbmtzXG5cdFx0ICAgICAgICB2YXIgbGlua3MgPSB0aGlzLmxpbmtzO1xuXHRcdCAgICAgICAgdmFyIGxpbmtEYXRhID0gW107XG5cdFx0ICAgICAgICBcblx0XHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcblx0XHQgICAgICAgICAgICB2YXIgbGluayA9IFtdO1xuXHRcdCAgICAgICAgICAgIGxpbmsuc291cmNlID0gaWRNYXBwaW5nW2xpbmtzW2ldLnNvdXJjZV0gfHwgbGlua3NbaV0uc291cmNlO1xuXHRcdCAgICAgICAgICAgIGxpbmsudGFyZ2V0ID0gaWRNYXBwaW5nW2xpbmtzW2ldLnRhcmdldF0gfHwgbGlua3NbaV0udGFyZ2V0O1xuXHRcdCAgICAgICAgICAgIGxpbmsud2VpZ2h0ID0gbGlua3NbaV0ud2VpZ2h0O1xuXHRcdCAgICAgICAgICAgIGxpbmtEYXRhLnB1c2gobGluayk7XG5cdFx0ICAgICAgICB9XG5cblx0XHQgICAgICAgIC8vY3JlYXRpbmcgdGhlIG5vZGVEYXRhXG5cdFx0ICAgICAgICB2YXIgbm9kZURhdGEgPSBbXTtcblx0XHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZV9uYW1lcy5sZW5ndGg7IGkrKykge1xuXHRcdCAgICAgICAgICAgIHZhciBub2RlX3RvX2FkZCA9IFtdO1xuXHRcdCAgICAgICAgICAgIG5vZGVfdG9fYWRkLmlkID0gbm9kZV9uYW1lc1tpXTtcblx0XHQgICAgICAgICAgICBub2RlX3RvX2FkZC50ZXh0ID0gdGhpcy5ub2RlSWRUb05hbWUobm9kZV9uYW1lc1tpXSkgfHwgbm9kZV9uYW1lc1tpXTtcblxuXG5cdFx0ICAgICAgICAgICAgbm9kZV90b19hZGQuYW5jZXN0b3JzID0gdGhpcy5hbmNlc3RvcnNfc3RydWN0W25vZGVfbmFtZXNbaV1dIHx8IHRoaXMuYW5jZXN0b3JzX3N0cnVjdFtub2RlX3RvX2FkZC50ZXh0XSB8fCBbXTtcblx0XHQgICAgICAgICAgICBpZiAoXy5pc0VtcHR5KG5vZGVfdG9fYWRkLmFuY2VzdG9ycykgPT09IGZhbHNlKSB7XG5cdFx0ICAgICAgICAgICAgICAgIG5vZGVfdG9fYWRkLnBhcmVudCA9IG5vZGVfdG9fYWRkLmFuY2VzdG9yc1swXTtcblx0XHQgICAgICAgICAgICB9IGVsc2Uge1xuXHRcdCAgICAgICAgICAgICAgICBub2RlX3RvX2FkZC5wYXJlbnQgPSBudWxsO1xuXHRcdCAgICAgICAgICAgIH1cblx0XHQgICAgICAgICAgICBub2RlRGF0YS5wdXNoKG5vZGVfdG9fYWRkKTtcblx0XHQgICAgICAgIH1cblxuXHRcdCAgICAgICAgcmV0dXJuIHtub2RlRGF0YTpub2RlRGF0YSwgbGlua0RhdGE6bGlua0RhdGF9O1xuXHRcdCAgICB9XG5cblx0XHQgICAgLyoqXG5cdFx0ICAgICAqIHByb2Nlc3MgdGhlIG5vZGVEYXRhIG91dHB1dCBvZiBnZXRGbG93QmV0d2VlblNldFxuXHRcdCAgICAgKlxuXHRcdCAgICAgKiBAcGFyYW0gICAgICB7QXJyYXl9ICBub2RlRGF0YSAgTm9kZURhdGEgdG8gY29udmVydCBcblx0XHQgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIG5vZGUgb2JqZWN0c1xuXHRcdCAgICAgKiBAcmV0dXJuICAgICB7QXJyYXl9ICBOb2RlIG9iamVjdHNcblx0XHQgICAgICovXG5cdFx0ICAgIHByb2Nlc3NOb2RlRGF0YShub2RlRGF0YSkge1xuXHRcdCAgICAgICAgdmFyIG5vZGVzID0gW107XG5cdFx0ICAgICAgICBfLmZvckVhY2gobm9kZURhdGEsIGZ1bmN0aW9uKGRhdGEpIHtcblx0XHQgICAgICAgICAgICB2YXIgbmV3Tm9kZSA9IG5ldyBWaXN1YWxpemVyTm9kZS5Ob2RlKG51bGwsIG51bGwsIGRhdGEuaWQsIGRhdGEudGV4dCxcblx0XHQgICAgICAgICAgICAgICAgbnVsbCwgZGF0YS5wYXJlbnQsIGRhdGEuYW5jZXN0b3JzLCBudWxsLCBudWxsKTtcblx0XHQgICAgICAgICAgICBub2Rlcy5wdXNoKG5ld05vZGUpO1xuXHRcdCAgICAgICAgfSk7XG5cdFx0ICAgICAgICByZXR1cm4gbm9kZXM7XG5cdFx0ICAgIH1cblxuXHRcdCAgICAvKipcblx0XHQgICAgICogcHJvY2VzcyB0aGUgbGlua0RhdGEgb3V0cHV0IG9mIGdldEZsb3dCZXR3ZWVuU2V0XG5cdFx0ICAgICAqXG5cdFx0ICAgICAqIEBwYXJhbSAgICAgIHtBcnJheX0gIGxpbmtEYXRhICBUaGUgbGluayBkYXRhXG5cdFx0ICAgICAqIEBwYXJhbSAgICAgIHtBcnJheX0gIG5vZGVzICAgICBUaGUgbm9kZXNcblx0XHQgICAgICogQHJldHVybiAgICAge0FycmF5fSAgTGluayBvYmplY3RzXG5cdFx0ICAgICAqL1xuXHRcdCAgICBwcm9jZXNzTGlua0RhdGEobGlua0RhdGEsIG5vZGVzKSB7XG5cdFx0ICAgIFx0LyoqXG5cdFx0XHQgICAgICogUmV0dXJucyB0aGUgbm9kZSB0aGF0IG1hdGNoZXMgdGhlIGlkXG5cdFx0XHQgICAgICpcblx0XHRcdCAgICAgKiBAcGFyYW0gICAgICB7c3RyaW5nfSBpZCAgICAgIFRoZSBpZGVudGlmaWVyXG5cdFx0XHQgICAgICogQHJldHVybiAgICAge05vZGV9ICAgVGhlIG5vZGUgd2l0aCB0aGUgbWF0Y2hpbmcgaWRcblx0XHRcdCAgICAgKi9cblx0XHRcdCAgICBmdW5jdGlvbiBmaW5kTm9kZUJ5SWQoaWQsIG5vZGVzKSB7XG5cdFx0XHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdCAgICAgICAgICAgIGlmIChpZCA9PSBub2Rlc1tpXS5pZCkge1xuXHRcdFx0ICAgICAgICAgICAgICAgIHJldHVybiBub2Rlc1tpXTtcblx0XHRcdCAgICAgICAgICAgIH1cblx0XHRcdCAgICAgICAgfVxuXHRcdFx0ICAgIH1cblxuXHRcdCAgICAgICAgdmFyIGxpbmtzID0gW107XG5cdFx0ICAgICAgICAvL2EgbWFwcGluZyBmcm9tIHNvdXJjZS5pZC10YXJnZXQuaWQgdG8gdGhlIGxpbmsgYWRkZWRcblx0XHQgICAgICAgIHZhciBhZGRlZF9saW5rcyA9IHt9O1xuXHRcdCAgICAgICAgLy90cmFuc2Zvcm1pbmcgbGluayBkYXRhXG5cdFx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmtEYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0ICAgICAgICAgICAgaWYgKGxpbmtEYXRhW2ldLnNvdXJjZSAhPSBsaW5rRGF0YVtpXS50YXJnZXQpIHtcblx0XHQgICAgICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGZpbmROb2RlQnlJZChsaW5rRGF0YVtpXS5zb3VyY2UsIG5vZGVzKTtcblx0XHQgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGZpbmROb2RlQnlJZChsaW5rRGF0YVtpXS50YXJnZXQsIG5vZGVzKTtcblx0XHQgICAgICAgICAgICAgICAgdmFyIHdlaWdodCA9IGxpbmtEYXRhW2ldLndlaWdodDtcblx0XHQgICAgICAgICAgICAgICAgLy9pbiBvcmRlciB0byBzdW0gYWxsIHRoZSB3ZWlnaHRzIG9mIHRoZSBsaW5rcyBvZiB0aGUgc3ViLW5vZGVzLFxuXHRcdCAgICAgICAgICAgICAgICAvL3dlIHVzZSBhZGRlZF9saW5rcyB0byBrZWVwIHRyYWNrIGlmIGFuIGxpbmsgd2FzIGFkZGVkXG5cdFx0ICAgICAgICAgICAgICAgIC8vaWYgaXQgaXMsIHdlIG1vZGlmeSBpdHMgd2VpZ2h0XG5cdFx0ICAgICAgICAgICAgICAgIGlmIChzb3VyY2UgPT0gbnVsbCB8fCB0YXJnZXQgPT0gbnVsbCkge1xuXHRcdCAgICAgICAgICAgICAgICBcdGNvbnRpbnVlO1xuXHRcdCAgICAgICAgICAgICAgICB9XG5cdFx0ICAgICAgICAgICAgICAgIGlmIChhZGRlZF9saW5rc1tzb3VyY2UuaWQgKyAnLScgKyB0YXJnZXQuaWRdID09PSB1bmRlZmluZWQpIHtcblx0XHQgICAgICAgICAgICAgICAgICAgIHZhciBsaW5rID0gbmV3IFZpc3VhbGl6ZXJMaW5rLkxpbmsoc291cmNlLCB0YXJnZXQsIHdlaWdodCk7XG5cdFx0ICAgICAgICAgICAgICAgICAgICBhZGRlZF9saW5rc1tzb3VyY2UuaWQgKyAnLScgKyB0YXJnZXQuaWRdID0gbGluaztcblx0XHQgICAgICAgICAgICAgICAgICAgIGxpbmtzLnB1c2gobGluayk7XG5cdFx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdFx0ICAgICAgICAgICAgICAgICAgICB2YXIgZXhpc3RpbmdfbGluayA9IGFkZGVkX2xpbmtzW3NvdXJjZS5pZCArICctJyArIHRhcmdldC5pZF07XG5cdFx0ICAgICAgICAgICAgICAgICAgICBleGlzdGluZ19saW5rLnNldFdlaWdodChleGlzdGluZ19saW5rLmdldFJhd1dlaWdodCgpICsgd2VpZ2h0KTtcblx0XHQgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nX2xpbmsuaW5jcmVhc2VDb3VudCgpO1xuXHRcdCAgICAgICAgICAgICAgICB9XG5cdFx0ICAgICAgICAgICAgfSAgXG5cdFx0ICAgICAgICB9XG5cdFx0ICAgICAgICByZXR1cm4gbGlua3M7XG5cdFx0ICAgIH1cblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdERhdGFTb3VyY2U6IFZpc3VhbGl6ZXJEYXRhU291cmNlXG5cdFx0fVxufV0pO1xuXG5cblxuXG5cblxuIiwiLyoqXG4gKiBUaGUgYmFzZSBjbGFzcyB0aGUgZ3JhcGggb2JqZWN0LiBBbnkgbm9kZXMgb3IgbGlua3MgdGhhdCBhcmUgY29udGFpbmVkIGluXG4gKiBpdHMgbm9kZXMgb3IgbGlua3MgcHJvcGVydHkgd2lsbCBiZSBkcmF3biBvbiB1cGRhdGVHcmFwaC5cbiAqIFN1cHBvcnRzIHBvbGljaWVzLlxuICogXG4gKiBUbyB3cml0ZSB5b3VyIG93biBncmFwaCBvYmplY3QsIGNyZWF0ZSBhIG5ldyBmYWN0b3J5IHRoYXQgdXNlcyB0aGUgZ3JhcGhcbiAqIHlvdSB3YW50IHRvIGluaGVyaXQgYXMgYSBkZXBlbmRlbmN5LCBhbmQgZXh0ZW5kIGl0cyBncmFwaCBjbGFzcy4gXG4gKiBSZXR1cm4gdGhlIGNsYXNzIG9iamVjdCB3aXRoIEdyYXBoIGFzIGtleS5cbiAqIFxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LmdyYXBoJylcbiAgICAuZmFjdG9yeSgnR3JhcGgnLCBbJ1BvbGljeVNlcnZpY2UnLCBmdW5jdGlvbiAoUG9saWN5U2VydmljZSkge1xuICAgICAgICBjbGFzcyBHcmFwaCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIGNvbnN0cnVjdG9yIGZvciB0aGUgZ3JhcGhcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7SFRNTCBTVkd9ICBzdmcgICAgIFRoZSBzdmcgdGhhdCB3aWxsIFxuICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob2xkIHRoZSBncmFwaFxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge0FycmF5fSAgbm9kZXMgICAgICBMaXN0IG9mIG5vZGVzIGZvciB0aGUgZ3JhcGhcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtBcnJheX0gIGxpbmtzICAgICAgTGlzdCBvZiBsaW5rcyBmb3IgdGhlIGdyYXBoXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKHN2Zywgbm9kZXMsIGxpbmtzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgubm9kZXMgPSBub2RlcyB8fCBbXTtcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgubGlua3MgPSBsaW5rcyB8fCBbXTtcblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5kZWZhdWx0Tm9kZVBvbGljaWVzID0gW107XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmRlZmF1bHRQYXRoUG9saWNpZXMgPSBbXTtcblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5zdmdQb2xpY3kgPSBuZXcgUG9saWN5U2VydmljZS5Qb2xpY3koKTtcblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgY2FuWm9vbTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2FuUGFuOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBpbml0Rm9yY2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlVXBkYXRlOiBmYWxzZVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguY29uc3RzID0ge1xuICAgICAgICAgICAgICAgICAgICBjaXJjbGVHQ2xhc3M6IFwiY29uY2VwdEdcIixcbiAgICAgICAgICAgICAgICAgICAgZ3JhcGhDbGFzczogXCJncmFwaFwiLFxuICAgICAgICAgICAgICAgICAgICBwYXRoQ2xhc3M6IFwicGF0aFwiLFxuICAgICAgICAgICAgICAgICAgICBub2RlQ2xhc3M6IFwiY2lyY2xlXCIsXG4gICAgICAgICAgICAgICAgICAgIG5vZGVUZXh0OiBcIm5vZGVUZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0UmFkaXVzOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgbWF4UmFkaXVzOiA2MCxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNSxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU9mZnNldDogNjBcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgc3ZnLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLnN2Z1BvbGljeVtcIm1vdXNlb3ZlclwiXS5jYWxsKHRoaXMsIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLm9uKFwiZGJsY2xpY2tcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLnN2Z1BvbGljeVtcImRibGNsaWNrXCJdLmNhbGwodGhpcywgZCk7ICAgIFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAub24oXCJjb250ZXh0bWVudVwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGguc3ZnUG9saWN5W1wiY29udGV4dG1lbnVcIl0uY2FsbCh0aGlzLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5vbihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLnN2Z1BvbGljeVtcIm1vdXNlb3V0XCJdLmNhbGwodGhpcywgZCk7ICAgIFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAub24oXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGguc3ZnUG9saWN5W1wibW91c2Vkb3duXCJdLmNhbGwodGhpcywgZCk7ICAgIFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAub24oXCJtb3VzZXVwXCIsIGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLnN2Z1BvbGljeVtcIm1vdXNldXBcIl0uY2FsbCh0aGlzLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gZGVmaW5lIGFycm93IG1hcmtlcnMgZm9yIGdyYXBoIGxpbmtzXG4gICAgICAgICAgICAgICAgdmFyIGRlZnMgPSBzdmcuYXBwZW5kKCdzdmc6ZGVmcycpO1xuICAgICAgICAgICAgICAgIGRlZnMuYXBwZW5kKCdzdmc6bWFya2VyJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2lkJywgJ2VuZC1hcnJvdycpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidmlld0JveFwiLCBcIjAgLTUgMTAgMTBcIilcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJyZWZYXCIsIDIwKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcInJlZllcIiwgLTEpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwibWFya2VyV2lkdGhcIiwgNilcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJtYXJrZXJIZWlnaHRcIiwgNilcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJvcmllbnRcIiwgXCJhdXRvXCIpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBcIk0wLC01TDEwLDBMMCw1XCIpO1xuXG4gICAgICAgICAgICAgICAgLy8gZGVmaW5lIGFycm93IG1hcmtlcnMgZm9yIGxlYWRpbmcgYXJyb3dcbiAgICAgICAgICAgICAgICBkZWZzLmFwcGVuZCgnc3ZnOm1hcmtlcicpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdpZCcsICdtYXJrLWVuZC1hcnJvdycpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd2aWV3Qm94JywgJzAgLTUgMTAgMTAnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigncmVmWCcsIDcpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdtYXJrZXJXaWR0aCcsIDMuNSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ21hcmtlckhlaWdodCcsIDMuNSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ29yaWVudCcsICdhdXRvJylcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgnc3ZnOnBhdGgnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZCcsICdNMCwtNUwxMCwwTDAsNScpO1xuXG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLnN2ZyA9IHN2ZztcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguc3ZnRyA9IHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAgICAgICAgIC5jbGFzc2VkKHRoaXNHcmFwaC5jb25zdHMuZ3JhcGhDbGFzcywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdmFyIHN2Z0cgPSB0aGlzR3JhcGguc3ZnRztcblxuICAgICAgICAgICAgICAgIC8vIHN2ZyBub2RlcyBhbmQgbGlua3MgXG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLnBhdGhzID0gc3ZnRy5hcHBlbmQoXCJnXCIpLnNlbGVjdEFsbChcImdcIik7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmNpcmNsZXMgPSBzdmdHLmFwcGVuZChcImdcIikuc2VsZWN0QWxsKFwiZ1wiKTtcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguaW5pdE5vZGVzKCk7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmluaXRMaW5rcygpO1xuXG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLnNldFBvc2l0aW9ucygpO1xuICAgICAgICAgICAgICAgIHZhciByZXNpemVGdW5jID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5vbldpbmRvd1Jlc2l6ZShzdmcpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguYmluZGluZ3MgPSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZTpyZXNpemVGdW5jXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAkKHdpbmRvdykucmVzaXplKHJlc2l6ZUZ1bmMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIGNhbGxzIHRoZSBkZXN0cm95IG1ldGhvZCBmb3IgYWxsIHBvbGljaWVzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgIF8odGhpc0dyYXBoLmRlZmF1bHROb2RlUG9saWNpZXMpLmZvckVhY2goZnVuY3Rpb24ocG9saWN5KSB7XG4gICAgICAgICAgICAgICAgICAgIHBvbGljeS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXyh0aGlzR3JhcGguZGVmYXVsdFBhdGhQb2xpY2llcykuZm9yRWFjaChmdW5jdGlvbihwb2xpY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9saWN5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguc3ZnUG9saWN5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpc0dyYXBoLmJpbmRpbmdzKSB7XG4gICAgICAgICAgICAgICAgICAgICQod2luZG93KS5vZmYoa2V5LCB0aGlzR3JhcGguYmluZGluZ3Nba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJ1bnMgdGhlIGluaXQgZnVuY3Rpb24gZm9yIGFsbCB0aGUgbm9kZXNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaW5pdE5vZGVzKCkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzO1xuICAgICAgICAgICAgICAgIF8uZm9yRWFjaCh0aGlzR3JhcGgubm9kZXMsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pbml0aWFsaXplKHRoaXNHcmFwaCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUnVucyB0aGUgaW5pdCBmdW5jdGlvbiBmb3IgYWxsIHRoZSBsaW5rc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpbml0TGlua3MoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgXy5mb3JFYWNoKHRoaXNHcmFwaC5saW5rcywgZnVuY3Rpb24obGluaykge1xuICAgICAgICAgICAgICAgICAgICBsaW5rLmluaXRpYWxpemUodGhpc0dyYXBoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiByZXR1cm5zIHRoZSBub2RlIG1hdGNoaW5nIHRoZSBpZCwgXG4gICAgICAgICAgICAgKiBvciB1bmRlZmluZWQgaWYgdGhlcmUgaXMgbm9uZVxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtPYmplY3R9ICBpZCAgICAgIFRoZSBpZGVudGlmaWVyXG4gICAgICAgICAgICAgKiBAcmV0dXJuICAgICB7Tm9kZX0gIHsgbWF0Y2hpbmcgbm9kZSB9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZpbmROb2RlQnlJZChpZCl7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzR3JhcGgubm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkID09PSB0aGlzR3JhcGgubm9kZXNbaV0uaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzR3JhcGgubm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJldHVybnMgdGhlIGQzTm9kZSBvYmplY3QgdGhhdCBtYXRjaGVzIHRoZSBpZCxcbiAgICAgICAgICAgICAqIG9yIHVuZGVmaW5lZCBpZiB0aGVyZSBpcyBub25lXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge3N0cmluZ30gIGlkICAgICAgVGhlIGlkZW50aWZpZXJcbiAgICAgICAgICAgICAqIEByZXR1cm4gICAgIHtEM05vZGV9IFRoZSBkMyBub2RlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZpbmREM05vZGUoaWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcztcbiAgICAgICAgICAgICAgICB2YXIgZDNOb2RlO1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5jaXJjbGVzLmVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZC5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQzTm9kZSA9IGQzLnNlbGVjdCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBkM05vZGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVXNlZCB0byBpbnN0YWxsIGEgZHJhZyBwb2xpY3kgdGhhdCB3aWxsIGJlIGNhbGxlZFxuICAgICAgICAgICAgICogd2hlbiBub2RlcyBhcmUgZHJhZ2dlZFxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtkMy5iZWhhdmlvci5kcmFnfSAgZDNkcmFnICBEMyBkcmFnIG9iamVjdFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpbnN0YWxsRHJhZ1BvbGljeShkM2RyYWcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWcgPSBkM2RyYWc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVXNlZCB0byBpbnN0YWxsIGEgcG9saWN5IHRoYXQgd2lsbCBiZSBjYWxsZWQgXG4gICAgICAgICAgICAgKiB3aGVuIHRoZXJlIGlzIG1vdXNlIGludGVyYWN0aW9ucyB3aXRoIHRoZSBncmFwaCdzIHN2Z1xuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtQb2xpY3l9ICBwb2xpY3kgIFRoZSBwb2xpY3kgdG8gaW5zdGFsbFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpbnN0YWxsU3ZnUG9saWN5KHBvbGljeSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3ZnUG9saWN5ID0gcG9saWN5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFVzZWQgdG8gaW5zdGFsbCBwb2xpY2llcyB0aGF0IGFyZSBjYWxsZWQgd2hlbiB0aGVyZSBpc1xuICAgICAgICAgICAgICogbW91c2UgaW50ZXJhY3Rpb24gd2l0aCBhIG5vZGVcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7UG9saWN5fSAgcG9saWN5ICBUaGUgcG9saWN5IHRvIGluc3RhbGxcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaW5zdGFsbERlZmF1bHROb2RlUG9saWN5KHBvbGljeSkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5kZWZhdWx0Tm9kZVBvbGljaWVzLnB1c2gocG9saWN5KTtcbiAgICAgICAgICAgICAgICBwb2xpY3kuaW5pdGlhbGl6ZSh0aGlzR3JhcGgpO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVXNlZCB0byByZW1vdmUgYW4gaW5zdGFsbGVkIHBvbGljeSBmb3Igbm9kZXNcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7Tm9kZX0gIHBvbGljeVJlbW92ZSAgVGhlIHBvbGljeSB0byByZW1vdmVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdW5pbnN0YWxsRGVmYXVsdE5vZGVQb2xpY3kocG9saWN5UmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBvbGljeVJlbW92ZU5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwb2xpY3lSZW1vdmUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvbGljeVJlbW92ZU5hbWUgPSBwb2xpY3lSZW1vdmU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9saWN5UmVtb3ZlTmFtZSA9IHBvbGljeVJlbW92ZS5wb2xpY3lOYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfKHRoaXNHcmFwaC5kZWZhdWx0Tm9kZVBvbGljaWVzKS5mb3JFYWNoKGZ1bmN0aW9uKHBvbGljeSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvbGljeS5wb2xpY3lOYW1lID09PSBwb2xpY3lSZW1vdmVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb2xpY3kuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLmRlZmF1bHROb2RlUG9saWNpZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJldHVybnMgdGhlIG5vZGUgcG9saWN5IG9iamVjdCB3aXRoIHRoZSBnaXZlbiBuYW1lXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge3N0cmluZ30gIHBvbGljeU5hbWUgIFRoZSBwb2xpY3kgbmFtZVxuICAgICAgICAgICAgICogQHJldHVybiAgICAge1BvbGljeX0gIHBvbGljeSAgICAgIFRoZSBtYXRjaGluZyBwb2xpY3lcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0Tm9kZVBvbGljeShwb2xpY3lOYW1lKSB7XG4gICAgICAgICAgICBcdHZhciB0aGlzR3JhcGggPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgXyh0aGlzR3JhcGguZGVmYXVsdE5vZGVQb2xpY2llcykuZm9yRWFjaChmdW5jdGlvbihwb2xpY3ksIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2xpY3kucG9saWN5TmFtZSA9PT0gcG9saWN5TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvbGljeTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFVzZWQgdG8gaW5zdGFsbCBwb2xpY2llcyB0aGF0IGFyZSBjYWxsZWQgd2hlbiB0aGVyZSBpcyBhXG4gICAgICAgICAgICAgKiBtb3VzZSBpbnRlcmFjdGlvbiB3aXRoIGEgcGF0aFxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtQb2xpY3l9ICBwb2xpY3kgIFRoZSBwb2xpY3kgdG8gaW5zdGFsbFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpbnN0YWxsRGVmYXVsdFBhdGhQb2xpY3kocG9saWN5KSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmRlZmF1bHRQYXRoUG9saWNpZXMucHVzaChwb2xpY3kpO1xuICAgICAgICAgICAgICAgIHBvbGljeS5pbml0aWFsaXplKHRoaXNHcmFwaCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVXNlZCB0byByZW1vdmUgYW4gaW5zdGFsbGVkIHBvbGljeSBmb3IgbGlua3NcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7UG9saWN5fSAgcG9saWN5UmVtb3ZlICBUaGUgcG9saWN5IHRvIHJlbW92ZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB1bmluc3RhbGxEZWZhdWx0UGF0aFBvbGljeShwb2xpY3lSZW1vdmUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcG9saWN5UmVtb3ZlTmFtZTtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcztcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBvbGljeVJlbW92ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9saWN5UmVtb3ZlTmFtZSA9IHBvbGljeVJlbW92ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwb2xpY3lSZW1vdmVOYW1lID0gcG9saWN5UmVtb3ZlLnBvbGljeU5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF8odGhpc0dyYXBoLmRlZmF1bHRQYXRoUG9saWNpZXMpLmZvckVhY2goZnVuY3Rpb24ocG9saWN5LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9saWN5LnBvbGljeU5hbWUgPT09IHBvbGljeVJlbW92ZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvbGljeS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGguZGVmYXVsdFBhdGhQb2xpY2llcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsbGVkIHdoZW4gdGhlcmUgaXMgYSBtb3VzZSBpbnRlcmFjdGlvbiB3aXRoIGEgcGF0aFxuICAgICAgICAgICAgICogUHJvcG9nYXRlcyB0aGUgZXZlbnQgdG8gYWxsIGluc3RhbGxlZCBwYXRoIHBvbGljaWVzXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge3N0cmluZ30gIGV2ZW50ICAgVGhlIGV2ZW50IHR5cGVcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtkM29iamVjdH0gIGQzcGF0aCAgVGhlIGQzIHBhdGhcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtQYXRofSAgZCAgICAgICBUaGUgbWF0Y2hpbmcgTGluayBvYmplY3RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcGF0aFBvbGljeUV2ZW50KGV2ZW50LCBkM3BhdGgsIGQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcztcbiAgICAgICAgICAgICAgICBfKHRoaXNHcmFwaC5kZWZhdWx0UGF0aFBvbGljaWVzKS5mb3JFYWNoKGZ1bmN0aW9uKHBvbGljeSkge1xuICAgICAgICAgICAgICAgICAgICBwb2xpY3lbZXZlbnRdKGQzcGF0aCwgZCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWxsZWQgd2hlbiB0aGVyZSBpcyBhIG1vdXNlIGludGVyYWN0aW9uIHdpdGggYSBub2RlXG4gICAgICAgICAgICAgKiBQcm9wb2dhdGVzIHRoZSBldmVudCB0byBhbGwgaW5zdGFsbGVkIG5vZGUgcG9saWNpZXNcbiAgICAgICAgICAgICAqIFxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge3N0cmluZ30gIGV2ZW50ICAgVGhlIGV2ZW50IHR5cGVcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtkM29iamVjdH0gIGQzbm9kZSAgVGhlIGQzIG5vZGVcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtQYXRofSAgZCAgICAgICBUaGUgbWF0Y2hpbmcgTm9kZSBvYmplY3RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbm9kZVBvbGljeUV2ZW50KGV2ZW50LCBkM25vZGUsIGQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcztcbiAgICAgICAgICAgICAgICBfLmZvckVhY2godGhpc0dyYXBoLmRlZmF1bHROb2RlUG9saWNpZXMsIGZ1bmN0aW9uKHBvbGljeSkge1xuICAgICAgICAgICAgICAgICAgICBwb2xpY3lbZXZlbnRdKGQzbm9kZSwgZCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBTZXRzIHBhbiBhbmQgem9vbSBydWxlcyBmb3IgdGhlIGdyYXBoXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge2QzLmJlaGF2aW9yLnpvb219ICBkM3pvb20gIEQzIHpvb20gb2JqXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGluc3RhbGxab29tUG9saWN5KGQzem9vbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ1N2ZyA9IGQzem9vbTtcbiAgICAgICAgICAgICAgICB0aGlzLnN2Zy5jYWxsKHRoaXMuZHJhZ1N2Zyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsbGVkIHdoZW4gdGhlIHdpbmRvdyBpcyByZXNpemVkXG4gICAgICAgICAgICAgKiBIb29rIGZvciBvdmVycmlkaW5nIGluIHN1YmNsYXNzZXNcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7SFRNTCBTVkd9ICBzdmcgICAgIFRoZSBzdmcgdGhhdCB0aGUgaGFuZGxlclxuICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpcyBhdHRhY2hlZCB0b1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBvbldpbmRvd1Jlc2l6ZShzdmcpIHt9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSW5zZXJ0cyBsaW5lIGJyZWFrcyBpbiBub2RlIHRleHRcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7SFRNTCBFbGVtfSAgZ0VsICAgIFRoZSBlbGVtIHRvIGFkZCB0ZXh0IHRvXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7c3RyaW5nfSAgdGl0bGUgICBUaGUgdGl0bGVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaW5zZXJ0VGl0bGVMaW5lYnJlYWtzIChnRWwsIHRpdGxlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdmFyIHdvcmRzID0gdGl0bGUuc3BsaXQoL1xccysvZyksXG4gICAgICAgICAgICAgICAgICAgIG53b3JkcyA9IHdvcmRzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSBnRWwuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignY2xhc3MnLCB0aGlzR3JhcGguY29uc3RzLm5vZGVUZXh0KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsXCJtaWRkbGVcIilcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJkeVwiLCBcIi1cIiArIChud29yZHMtMSkqNy41KTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRzcGFuID0gZWwuYXBwZW5kKCd0c3BhbicpLnRleHQod29yZHNbaV0pO1xuICAgICAgICAgICAgICAgIGlmIChpID4gMClcbiAgICAgICAgICAgICAgICAgICAgdHNwYW4uYXR0cigneCcsIDApLmF0dHIoJ2R5JywgJzE1Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJlbW92ZXMgYWxsIGxpbmtzIGZyb20gdGhlIGdpdmVuIG5vZGVcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7Tm9kZX0gIG5vZGUgICAgVGhlIG5vZGVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc3BsaWNlTGlua3NGb3JOb2RlKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgdG9TcGxpY2UgPSB0aGlzR3JhcGgubGlua3MuZmlsdGVyKGZ1bmN0aW9uKGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAobC5zb3VyY2UgPT09IG5vZGUgfHwgbC50YXJnZXQgPT09IG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0b1NwbGljZS5tYXAoZnVuY3Rpb24obCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGgubGlua3Muc3BsaWNlKHRoaXNHcmFwaC5saW5rcy5pbmRleE9mKGwpLCAxKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBZGRzIHRoZSBub2RlIHRvIHRoZSBncmFwaCBhbmQgdXBkYXRlc1xuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtOb2RlfSAgbm9kZSAgICBUaGUgbm9kZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBhZGROb2RlKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgubm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgICAgICAgICBub2RlLmluaXRpYWxpemUodGhpc0dyYXBoKTtcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgudXBkYXRlR3JhcGgoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmVtb3ZlcyB0aGUgbm9kZSB0byB0aGUgZ3JhcGggYW5kIHVwZGF0ZXNcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7Tm9kZX0gIG5vZGUgICAgVGhlIG5vZGVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVtb3ZlTm9kZShub2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVzLnNwbGljZSh0aGlzR3JhcGgubm9kZXMuaW5kZXhPZihub2RlKSwgMSk7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLnNwbGljZUxpbmtzRm9yTm9kZShub2RlKTtcblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC51cGRhdGVHcmFwaCgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBZGRzIHRoZSBsaW5rIHRvIHRoZSBncmFwaCBhbmQgdXBkYXRlc1xuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtsaW5rfSAgbGluayAgICBUaGUgbGlua1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBhZGRMaW5rKGxpbmspIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgubGlua3MucHVzaChsaW5rKTtcbiAgICAgICAgICAgICAgICBsaW5rLmluaXRpYWxpemUodGhpc0dyYXBoKTtcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgudXBkYXRlR3JhcGgoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmVtb3ZlcyB0aGUgbGluayB0byB0aGUgZ3JhcGggYW5kIHVwZGF0ZXNcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7bGlua30gIGxpbmsgICAgVGhlIGxpbmtcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVtb3ZlTGluayhsaW5rKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmxpbmtzLnNwbGljZSh0aGlzR3JhcGgubGlua3MuaW5kZXhPZihsaW5rKSwgMSk7XG4gICAgICAgICAgICAgICAgbGluay5pbml0aWFsaXplKHRoaXNHcmFwaCk7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLnVwZGF0ZUdyYXBoKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsbGVkIHdoZW4gdGhlIGdyYXBoIGlzIHVwZGF0aW5nIGV4aXN0aW5nIHBhdGhzXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge1BhdGh9ICBwYXRocyAgIExpc3Qgb2YgcGF0aHNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdXBkYXRlRXhpc3RpbmdQYXRocyhwYXRocykge1xuICAgICAgICAgICAgICAgIHBhdGhzLmVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICBkLnVwZGF0ZUF0dHIoZDMuc2VsZWN0KHRoaXMpLCBkKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWxsZWQgd2hlbiB0aGUgZ3JhcGggaXMgYWRkaW5nIG5ldyBwYXRoc1xuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtQYXRofSAgbmV3UGF0aHMgIExpc3Qgb2YgbmV3IHBhdGhzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHVwZGF0ZU5ld1BhdGhzKG5ld1BhdGhzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguaW5pdExpbmtzKCk7XG5cbiAgICAgICAgICAgICAgICBuZXdQYXRocy5lYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgZC5uZXdQYXRoQXR0cihkMy5zZWxlY3QodGhpcyksIGQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy9pZiBub2RlIGRvZXNuJ3QgaGF2ZSBpdHMgb3duIHBvbGljeSwgdXNlIGRlZmF1bHQgZm9yIHRoZSBncmFwaFxuICAgICAgICAgICAgICAgIG5ld1BhdGhzLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuaGFzUG9saWN5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5wYXRoUG9saWN5RXZlbnQoXCJtb3VzZW92ZXJcIiwgZDMuc2VsZWN0KHRoaXMpLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5wYXRoUG9saWN5RXZlbnQoXCJtb3VzZW92ZXJcIiwgZDMuc2VsZWN0KHRoaXMpLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5vbihcImRibGNsaWNrXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLmhhc1BvbGljeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQucGF0aFBvbGljeUV2ZW50KFwiZGJsY2xpY2tcIiwgZDMuc2VsZWN0KHRoaXMpLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5wYXRoUG9saWN5RXZlbnQoXCJkYmxjbGlja1wiLCBkMy5zZWxlY3QodGhpcyksIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLm9uKFwiY29udGV4dG1lbnVcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuaGFzUG9saWN5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5wYXRoUG9saWN5RXZlbnQoXCJjb250ZXh0bWVudVwiLCBkMy5zZWxlY3QodGhpcyksIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLnBhdGhQb2xpY3lFdmVudChcImNvbnRleHRtZW51XCIsIGQzLnNlbGVjdCh0aGlzKSwgZCk7ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAub24oXCJtb3VzZW91dFwiLCBmdW5jdGlvbihkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLmhhc1BvbGljeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQucGF0aFBvbGljeUV2ZW50KFwibW91c2VvdXRcIiwgZDMuc2VsZWN0KHRoaXMpLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5wYXRoUG9saWN5RXZlbnQoXCJtb3VzZW91dFwiLCBkMy5zZWxlY3QodGhpcyksIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLm9uKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuaGFzUG9saWN5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5wYXRoUG9saWN5RXZlbnQoXCJtb3VzZWRvd25cIiwgZDMuc2VsZWN0KHRoaXMpLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5wYXRoUG9saWN5RXZlbnQoXCJtb3VzZWRvd25cIiwgZDMuc2VsZWN0KHRoaXMpLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5vbihcIm1vdXNldXBcIiwgZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5oYXNQb2xpY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLnBhdGhQb2xpY3lFdmVudChcIm1vdXNldXBcIiwgZDMuc2VsZWN0KHRoaXMpLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5wYXRoUG9saWN5RXZlbnQoXCJtb3VzZXVwXCIsIGQzLnNlbGVjdCh0aGlzKSwgZCk7ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2FsbCh0aGlzR3JhcGguZHJhZyk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWxsZWQgd2hlbiB0aGUgZ3JhcGggaXMgdXBkYXRpbmcgZXhpc3Rpbmcgbm9kZXNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdXBkYXRlRXhpc3RpbmdOb2RlcygpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguY2lyY2xlcyA9IHRoaXMuY2lyY2xlcy5kYXRhKHRoaXNHcmFwaC5ub2RlcywgZnVuY3Rpb24oZCl7IHJldHVybiBkLmlkO30pXG4gICAgICAgICAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQudXBkYXRlQXR0cihkMy5zZWxlY3QodGhpcyksIGQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGxlZCB3aGVuIHRoZSBncmFwaCBpcyBhZGRpbmcgbmV3IG5vZGVzXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge05vZGV9ICBuZXdOb2RlcyAgTGlzdCBvZiBuZXcgbm9kZXNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdXBkYXRlTmV3Tm9kZXMobmV3Tm9kZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcztcblxuICAgICAgICAgICAgICAgIG5ld05vZGVzLmVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZC5ncmFwaCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkLmluaXRpYWxpemUodGhpc0dyYXBoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkLm5ld05vZGVBdHRyKGQzLnNlbGVjdCh0aGlzKSwgZCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL2lmIG5vZGUgZG9lc24ndCBoYXZlIGl0cyBvd24gcG9saWN5LCB1c2UgZGVmYXVsdCBmb3IgdGhlIGdyYXBoXG4gICAgICAgICAgICAgICAgbmV3Tm9kZXMub24oXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5oYXNQb2xpY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLm5vZGVQb2xpY3lFdmVudChcIm1vdXNlb3ZlclwiLCBkMy5zZWxlY3QodGhpcyksIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVQb2xpY3lFdmVudChcIm1vdXNlb3ZlclwiLCBkMy5zZWxlY3QodGhpcyksIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLm9uKFwiZGJsY2xpY2tcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuaGFzUG9saWN5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5ub2RlUG9saWN5RXZlbnQoXCJkYmxjbGlja1wiLCBkMy5zZWxlY3QodGhpcyksIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVQb2xpY3lFdmVudChcImRibGNsaWNrXCIsIGQzLnNlbGVjdCh0aGlzKSwgZCk7ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAub24oXCJjb250ZXh0bWVudVwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5oYXNQb2xpY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLm5vZGVQb2xpY3lFdmVudChcImNvbnRleHRtZW51XCIsIGQzLnNlbGVjdCh0aGlzKSwgZCk7ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGgubm9kZVBvbGljeUV2ZW50KFwiY29udGV4dG1lbnVcIiwgZDMuc2VsZWN0KHRoaXMpLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5vbihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuaGFzUG9saWN5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5ub2RlUG9saWN5RXZlbnQoXCJtb3VzZW91dFwiLCBkMy5zZWxlY3QodGhpcyksIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVQb2xpY3lFdmVudChcIm1vdXNlb3V0XCIsIGQzLnNlbGVjdCh0aGlzKSwgZCk7ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAub24oXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5oYXNQb2xpY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLm5vZGVQb2xpY3lFdmVudChcIm1vdXNlZG93blwiLCBkMy5zZWxlY3QodGhpcyksIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVQb2xpY3lFdmVudChcIm1vdXNlZG93blwiLCBkMy5zZWxlY3QodGhpcyksIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLm9uKFwibW91c2V1cFwiLCBmdW5jdGlvbihkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLmhhc1BvbGljeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQubm9kZVBvbGljeUV2ZW50KFwibW91c2V1cFwiLCBkMy5zZWxlY3QodGhpcyksIGQpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVQb2xpY3lFdmVudChcIm1vdXNldXBcIiwgZDMuc2VsZWN0KHRoaXMpLCBkKTsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKHRoaXNHcmFwaC5kcmFnKTtcblxuICAgICAgICAgICAgICAgIG5ld05vZGVzLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiclwiLCBmdW5jdGlvbihkKSB7cmV0dXJuIFN0cmluZyhkLnJhZGl1cyl9KTtcblxuXG4gICAgICAgICAgICAgICAgbmV3Tm9kZXMuZWFjaChmdW5jdGlvbihkKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLmluc2VydFRpdGxlTGluZWJyZWFrcyhkMy5zZWxlY3QodGhpcyksIGQudGV4dCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUHJldmVudHMgbm9kZXMgZnJvbSBjb2xsaWRpbmdcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7bnVtYmVyfSAgYWxwaGEgICBBZmZlY3RzIGhvdyBtdWNoIGNoYW5nZVxuICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGNvbGxpc2lvbiBjYXVzZXNcbiAgICAgICAgICAgICAqIEByZXR1cm4gICAgIHtib29sZWFufSAge1doZXRoZXIgbm9kZXMgYXJlIGNvbGxpZGVkfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBkM0ZvcmNlQ29sbGlkZShhbHBoYSkge1xuICAgICAgICAgICAgXHR2YXIgdGhpc0dyYXBoID0gdGhpcyxcbiAgICAgICAgICAgIFx0XHRjb25zdHMgPSB0aGlzR3JhcGguY29uc3RzO1xuICAgICAgICAgICAgXHR2YXIgbm9kZXMgPSB0aGlzR3JhcGgubm9kZXM7XG4gICAgICAgICAgICBcdHZhciBxdWFkdHJlZSA9IGQzLmdlb20ucXVhZHRyZWUobm9kZXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgciA9IGQucmFkaXVzICsgY29uc3RzLm1heFJhZGl1cyArIGNvbnN0cy5wYWRkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbngxID0gZC54IC0gcixcbiAgICAgICAgICAgICAgICAgICAgICAgIG54MiA9IGQueCArIHIsXG4gICAgICAgICAgICAgICAgICAgICAgICBueTEgPSBkLnkgLSByLFxuICAgICAgICAgICAgICAgICAgICAgICAgbnkyID0gZC55ICsgcjtcbiAgICAgICAgICAgICAgICAgICAgcXVhZHRyZWUudmlzaXQoZnVuY3Rpb24ocXVhZCwgeDEsIHkxLCB4MiwgeTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxdWFkLnBvaW50ICYmIChxdWFkLnBvaW50ICE9PSBkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB4ID0gZC54IC0gcXVhZC5wb2ludC54LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ID0gZC55IC0gcXVhZC5wb2ludC55LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByID0gZC5yYWRpdXMgKyBxdWFkLnBvaW50LnJhZGl1cyArIGNvbnN0cy5wYWRkaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsIDwgcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA9IChsIC0gcikgLyBsICogYWxwaGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLnggLT0geCAqPSBsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZC55IC09IHkgKj0gbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YWQucG9pbnQueCArPSB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhZC5wb2ludC55ICs9IHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB4MSA+IG54MiB8fCB4MiA8IG54MSB8fCB5MSA+IG55MiB8fCB5MiA8IG55MTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUaWNrIG9mIHRoZSBkMyBmb3JjZSBzaW11bGF0aW9uXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge0QzdGljayBldmVudH0gIGUgICAgRDN0aWNrIGV2ZW50XG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7bnVtYmVyfSAgd2lkdGggIFRoZSB3aWR0aCBvZiB0aGUgc2ltdWxhdGlvblxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge251bWJlcn0gIGhlaWdodCBUaGUgaGVpZ2h0IG9mIHRoZSBzaW11bGF0aW9uXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGQzRm9yY2VUaWNrKGUsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgICAgIFx0dmFyIHRoaXNHcmFwaCA9IHRoaXMsXG4gICAgICAgICAgICBcdFx0Y29uc3RzID0gdGhpc0dyYXBoLmNvbnN0cztcblxuICAgICAgICAgICAgXHR2YXIgb2Zmc2V0ID0gY29uc3RzLmRpc3BsYXlPZmZzZXQ7XHRcbiAgICAgICAgICAgIFx0dmFyIG5vZGVzID0gdGhpc0dyYXBoLm5vZGVzO1xuICAgICAgICAgICAgXHR2YXIgcSA9IGQzLmdlb20ucXVhZHRyZWUodGhpc0dyYXBoLm5vZGVzKSxcbiAgICAgICAgICAgICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgICAgICAgICAgICBuID0gbm9kZXMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgICAgICAgICAgICAgICBxLnZpc2l0KHRoaXMuZDNGb3JjZUNvbGxpZGUobm9kZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5jaXJjbGVzLmVhY2godGhpcy5kM0ZvcmNlQ29sbGlkZSguNSkpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC54ID0gTWF0aC5tYXgoZC5yYWRpdXMgKyBvZmZzZXQsIE1hdGgubWluKHdpZHRoIC0gb2Zmc2V0IC0gZC5yYWRpdXMsIGQueCkpOyB9KVxuICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnkgPSBNYXRoLm1heChkLnJhZGl1cyArIG9mZnNldCwgTWF0aC5taW4oaGVpZ2h0IC0gb2Zmc2V0IC0gZC5yYWRpdXMsIGQueSkpOyB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5wYXRoc1xuICAgICAgICAgICAgICAgICAgICAuYXR0cigneDEnLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnNvdXJjZS54OyB9KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigneTEnLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnNvdXJjZS55OyB9KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigneDInLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnRhcmdldC54OyB9KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigneTInLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnRhcmdldC55OyB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBTdGFydHMgb24gc3RhcnQgb2YgdGhlIGZvcmNlIHNpbXVsYXRpb25cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZDNGb3JjZVN0YXJ0KCkge1xuICAgICAgICAgICAgXHR2YXIgdGhpc0dyYXBoID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgucGF0aHNcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3gxJywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5zb3VyY2UueDsgfSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3kxJywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5zb3VyY2UueTsgfSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3gyJywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC50YXJnZXQueDsgfSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3kyJywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC50YXJnZXQueTsgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsbGVkIG9uIHRoZSBlbmQgb2YgdGhlIGZvcmNlIHNpbXVsYXRpb25cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZDNGb3JjZUVuZCgpIHtcbiAgICAgICAgICAgIFx0dmFyIHRoaXNHcmFwaCA9IHRoaXM7XG4gICAgICAgICAgICBcdHRoaXNHcmFwaC5jaXJjbGVzXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdjeCcsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQueDsgfSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2N5JywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC55OyB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5wYXRocy5hdHRyKCd4MScsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuc291cmNlLng7IH0pXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd5MScsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuc291cmNlLnk7IH0pXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd4MicsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudGFyZ2V0Lng7IH0pXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd5MicsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudGFyZ2V0Lnk7IH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGN1bGF0ZXMgdGhlIHdpZHRoIGFuZCBoZWlnaHQgYm91bmRzIGZvciB0aGUgXG4gICAgICAgICAgICAgKiBmb3JjZSBzaW11bGF0aW9uXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHJldHVybiAgICAge09iamVjdH0gIHdpZHRoIGFuZCBoZWlnaHQgYXMgcHJvcGVydGllcyBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZDNGb3JjZUJvdW5kcygpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3ZnV2lkdGggPSAkKCcjdmlzdWFsaXphdGlvbi1ncmFwaCcpLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgdmFyIHN2Z0hlaWdodCA9ICQoJyN2aXN1YWxpemF0aW9uLWdyYXBoJykuaGVpZ2h0KCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSBzdmdXaWR0aDtcbiAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gc3ZnSGVpZ2h0O1xuICAgICAgICAgICAgICAgIHJldHVybiB7d2lkdGg6d2lkdGgsIGhlaWdodDpoZWlnaHR9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIERvZXMgYSBkMyBmb3JjZSBzaW11bGF0aW9uXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge0Z1bmN0aW9ufSAgY2FsbGJhY2sgIFRoZSBjYWxsYmFja1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZXRGb3JjZShjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgdmFyIG5vZGVzID0gdGhpc0dyYXBoLm5vZGVzO1xuICAgICAgICAgICAgICAgIHZhciBsaW5rcyA9IHRoaXNHcmFwaC5saW5rcztcbiAgICAgICAgICAgICAgICBpZiAoXy5pc0VtcHR5KG5vZGVzKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGJvdW5kcyA9IHRoaXNHcmFwaC5kM0ZvcmNlQm91bmRzKCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgZm9yY2UgPSBkMy5sYXlvdXQuZm9yY2UoKVxuICAgICAgICAgICAgICAgICAgICAuc2l6ZShbYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0XSlcbiAgICAgICAgICAgICAgICAgICAgLm5vZGVzKG5vZGVzKVxuICAgICAgICAgICAgICAgICAgICAuY2hhcmdlKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtNjAwMDtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmxpbmtzKGxpbmtzKTtcblxuICAgICAgICAgICAgICAgIGZvcmNlLmxpbmtEaXN0YW5jZShib3VuZHMud2lkdGgvMyk7XG4gICAgICAgICAgICAgICAgZm9yY2UubGlua1N0cmVuZ3RoKC4yKTtcbiAgICAgICAgICAgICAgICBmb3JjZS5ncmF2aXR5KC4yKTtcblxuICAgICAgICAgICAgICAgIGZvcmNlLm9uKCd0aWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIFx0dGhpc0dyYXBoLmQzRm9yY2VUaWNrLmNhbGwodGhpc0dyYXBoLCBcbiAgICAgICAgICAgICAgICBcdFx0XHRlLCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZm9yY2Uub24oJ3N0YXJ0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgXHR0aGlzR3JhcGguZDNGb3JjZVN0YXJ0LmNhbGwodGhpc0dyYXBoKVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZm9yY2Uub24oJ2VuZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIFx0dGhpc0dyYXBoLmQzRm9yY2VFbmQuY2FsbCh0aGlzR3JhcGgpXG4gICAgICAgICAgICAgICAgfSk7IFxuXG5cbiAgICAgICAgICAgICAgICBmb3JjZS5zdGFydCgpO1xuICAgICAgICAgICAgICAgIHZhciBrID0gMDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoKGZvcmNlLmFscGhhKCkgPiAxZS0yKSAmJiAoayA8IDE1MCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yY2UudGljaygpO1xuICAgICAgICAgICAgICAgICAgICBrID0gayArIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvcmNlLnN0b3AoKTtcblxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgXHRjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBTZXRzIHRoZSBwb3NpdGlvbnMgdG8gYmUgdGhlIGNlbnRlciBvZiB0aGUgc2NyZWVuIGlmIFxuICAgICAgICAgICAgICogbm90IHByb3ZpZGVkXG4gICAgICAgICAgICAgKiBhbHNvIHNldHMgdGhlIHJhZGl1cyBvZiB0aGUgbm9kZXNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2V0UG9zaXRpb25zKCkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IHRoaXNHcmFwaC5jb25zdHMuZGlzcGxheU9mZnNldDtcbiAgICAgICAgICAgICAgICB2YXIgc3ZnV2lkdGggPSAkKCcjdmlzdWFsaXphdGlvbi1ncmFwaCcpLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgdmFyIHN2Z0hlaWdodCA9ICQoJyN2aXN1YWxpemF0aW9uLWdyYXBoJykuaGVpZ2h0KCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSBzdmdXaWR0aCAtICgyKm9mZnNldCk7XG4gICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IHN2Z0hlaWdodCAtICgyKm9mZnNldCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgbm9kZXMgPSB0aGlzR3JhcGgubm9kZXM7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzW2ldLnJhZGl1cyA9IG5vZGVzW2ldLnJhZGl1cyB8fCB0aGlzR3JhcGguY29uc3RzLnN0YXJ0UmFkaXVzO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZXNbaV0ueCA9PSBudWxsIHx8IG5vZGVzW2ldLnkgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm9kZXNbaV0ueFN0YXJ0ID0gd2lkdGgvMiAgKyBub2Rlc1tpXS5yYWRpdXMgKyBvZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzW2ldLnggPSB3aWR0aC8yICArIG5vZGVzW2ldLnJhZGl1cyArIG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vZGVzW2ldLnlTdGFydCA9IGhlaWdodC8yICsgbm9kZXNbaV0ucmFkaXVzICsgb2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBub2Rlc1tpXS55ID0gaGVpZ2h0LzIgKyBub2Rlc1tpXS5yYWRpdXMgKyBvZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWxsZWQgdG8gdXBkYXRlIHRoZSB2aWV3IG9mIHRoZSBncmFwaCB3aGVuXG4gICAgICAgICAgICAgKiBkYXRhIGNoYW5nZXNcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7RnVuY3Rpb259ICBjYWxsYmFjayAgVGhlIGNhbGxiYWNrXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHVwZGF0ZUdyYXBoKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cyA9IHRoaXNHcmFwaC5jb25zdHMsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gdGhpc0dyYXBoLnN0YXRlO1xuXG4gICAgICAgICAgICBcdGlmICh0aGlzR3JhcGguc3RhdGUuZGlzYWJsZVVwZGF0ZSkge1xuICAgICAgICAgICAgXHRcdHJldHVybjtcbiAgICAgICAgICAgIFx0fVxuXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVFeGlzdGluZ05vZGVzKCk7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0dzPSB0aGlzR3JhcGguY2lyY2xlcy5lbnRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpO1xuXG4gICAgICAgICAgICBcdC8vIGNvbnNvbGUubG9nKCd1cGRhdGUnLCBuZXdHcyk7XG4gICAgICAgICAgICAgICAgbmV3R3MuY2xhc3NlZChjb25zdHMuY2lyY2xlR0NsYXNzLCB0cnVlKTtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlTmV3Tm9kZXMobmV3R3MpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIG9sZCBub2Rlc1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5jaXJjbGVzLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5pbml0Rm9yY2UgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLnNldEZvcmNlKGZ1bmN0aW9uKCkge1xuICAgIFx0ICAgICAgICAgICAgICAgIHRoaXNHcmFwaC51cGRhdGVOZXdOb2Rlcy5jYWxsKHRoaXNHcmFwaCwgbmV3R3MpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuaW5pdEZvcmNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVOZXdOb2RlcyhuZXdHcyk7XG5cdCAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5wYXRocyA9IHRoaXNHcmFwaC5wYXRocy5kYXRhKHRoaXNHcmFwaC5saW5rcywgZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcoZC5zb3VyY2UuaWQpICsgXCIrXCIgKyBTdHJpbmcoZC50YXJnZXQuaWQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciBwYXRocyA9IHRoaXNHcmFwaC5wYXRocztcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUV4aXN0aW5nUGF0aHMocGF0aHMpO1xuXG4gICAgICAgICAgICAgICAgdmFyIG5ld3BhdGhzID0gcGF0aHMuZW50ZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdtYXJrZXItZW5kJywndXJsKCNlbmQtYXJyb3cpJylcbiAgICAgICAgICAgICAgICAuY2xhc3NlZChcImxpbmtcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVOZXdQYXRocyhuZXdwYXRocyk7XG5cbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgb2xkIGxpbmtzXG4gICAgICAgICAgICAgICAgcGF0aHMuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBcdGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgR3JhcGg6IEdyYXBoXG4gICAgICAgIH1cbn1dKTtcblxuXG4iLCIvKipcbiAqIFRoZSBncmFwaCB0aGF0IGlzIHVzZWQgc3BlY2lmaWNhbGx5IGZvciB0aGUgdmlzdWFsaXphdGlvbiB0YWIuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuZ3JhcGgnKVxuICAgIC5mYWN0b3J5KCdWaXN1YWxpemVyR3JhcGgnLCBbJ0dyYXBoJywgZnVuY3Rpb24gKEdyYXBoKSB7XG4gICAgXHRjbGFzcyBWaXN1YWxpemVyR3JhcGggZXh0ZW5kcyBHcmFwaC5HcmFwaCB7XG4gICAgXHRcdC8qKlxuICAgIFx0XHQgKiBDb25zdHJ1Y3RzIHRoZSBvYmplY3QuXG4gICAgXHRcdCAqXG4gICAgXHRcdCAqIEBwYXJhbSAgIHtIVE1MIFNWR30gIHN2ZyAgICAgICAgICAgICBUaGUgc3ZnIHRoYXQgd2lsbCBcbiAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob2xkIHRoZSBncmFwaFxuICAgICAgICAgICAgICogQHBhcmFtICAge0FycmF5fSAgbm9kZXMgICBcdFx0ICAgIExpc3Qgb2Ygbm9kZXNcbiAgICAgICAgICAgICAqIEBwYXJhbSAgIHtBcnJheX0gIGxpbmtzICAgXHRcdCAgICBMaXN0IG9mIGxpbmtzXG4gICAgXHRcdCAqIEBwYXJhbSAgIHtEYXRhU291cmNlfSAgZGF0YVNvdXJjZSAgICBUaGUgZGF0YSBzb3VyY2VcbiAgICBcdFx0ICovXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcihzdmcsIG5vZGVzLCBsaW5rcywgZGF0YVNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHN1cGVyKHN2Zywgbm9kZXMsIGxpbmtzKTtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcztcblxuICAgICAgICAgICAgICAgIC8vaG9sZHMgY3VycmVudCB0cmFuc2l0aW9ucyB0aGF0IGFyZSBvY2N1cmluZ1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5zdGF0ZS50cmFuc2l0aW9uID0gW107XG4gICAgICAgICAgICAgICAgLy9NaW4gZGlzdGFuY2UgYmV0d2VlbiBub2RlcyB3aGVuIHNwYXduaW5nIHJhbmRvbWx5XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmNvbnN0cy5lZGdlX2J1ZmZlciA9IDIwMDtcbiAgICAgICAgICAgICAgICAvL1NpemUgcmVkdWN0aW9uIGFzIHlvdSBnbyB0aHJvdWdoIGxldmVscyBpbiBub2Rlc1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5jb25zdHMucmFkaXVzRGVjYXkgPSAxO1xuICAgICAgICAgICAgICAgIC8vQ3NzIGNsYXNzIGZvciBub2RlcyB0aGF0IGFyZSBjb250YWluZXJzXG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmNvbnN0cy5jb250YWluZXJDbGFzcyA9ICdjb250YWluZXInO1xuXG4gICAgICAgICAgICAgICAgLy9kYXRhU291cmNlIGhvbGRzIHRoZSBzZXJ2ZXIgZGF0YSBhbmQgbWV0aG9kcyBmb3JcbiAgICAgICAgICAgICAgICAvL2NvbnZlcnRpbmcgaXQgdG8gZGF0YSBmb3IgdGhlIGdyYXBoXG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmRhdGFTb3VyY2UgPSBkYXRhU291cmNlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vRHJhZyBiZWhhdmlvciBmb3Igbm9kZXNcbiAgICAgICAgICAgICAgICB2YXIgZHJhZyA9IGQzLmJlaGF2aW9yLmRyYWcoKVxuICAgICAgICAgICAgICAgICAgICAub3JpZ2luKGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge3g6IGQueCwgeTogZC55fTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLm9uKFwiZHJhZ3N0YXJ0XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAub24oXCJkcmFnXCIsIGZ1bmN0aW9uKGFyZ3Mpe1xuICAgICAgICAgICAgICAgICAgICBcdGQzLnNlbGVjdCggdGhpcykuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbiggZCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQueCArPSBkMy5ldmVudC5keDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLnkgKz0gZDMuZXZlbnQuZHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgWyBkLngsZC55IF0gKyBcIilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGgudXBkYXRlR3JhcGgoKTtcdFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAub24oXCJkcmFnZW5kXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5kcmFnID0gZHJhZztcblxuICAgICAgICAgICAgICAgIC8vUGFuIGFuZCBab29tIGJlaGF2aW9yIGZvciB0aGUgZ3JhcGhcbiAgICAgICAgICAgICAgICB2YXIgem9vbSA9IGQzLmJlaGF2aW9yLnpvb20oKVxuICAgICAgICAgICAgICAgICAgICAub24oXCJ6b29tXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZDMuZXZlbnQuc291cmNlRXZlbnQgIT0gbnVsbCAmJiBkMy5ldmVudC5zb3VyY2VFdmVudC5jdHJsS2V5KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLnpvb21lZC5jYWxsKHRoaXNHcmFwaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLm9uKFwiem9vbXN0YXJ0XCIsIGZ1bmN0aW9uKGQsIGkpe1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguZHJhZ1N2ZyA9IHpvb207XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLnN2Zy5jYWxsKHpvb20pLm9uKFwiZGJsY2xpY2suem9vbVwiLCBudWxsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWxsZWQgd2l0aCBubyBhcmdzIHdoZW4gdGhlIGdyYXBoIGhhcyBhIHpvb20gYWN0aW9uXG4gICAgICAgICAgICAgKiBDYW4gYWxzbyBiZSBjYWxsZWQgd2l0aCBhcmdzIHRvIGZvcmNlIGEgem9vbSBvciBwYW4gXG4gICAgICAgICAgICAgKiBldmVudCBmb3IgdGhlIGdyYXBoLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtBcnJheX0gICB0cmFuc2xhdGUgIFRoZSBhbW91bnQgdG8gdHJhbnNsYXRlXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7bnVtYmVyfSAgc2NhbGUgICAgICBUaGUgYW1vdW50IHRvIHNjYWxlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHpvb21lZCh0cmFuc2xhdGUsIHNjYWxlKXtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcztcbiAgICAgICAgICAgICAgICBpZiAodGhpc0dyYXBoLnN0YXRlLnJpZ2h0Q2xpY2sgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuanVzdFNjYWxlVHJhbnNHcmFwaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKHRyYW5zbGF0ZSAhPSBudWxsICYmIHNjYWxlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHpvb20gPSB0aGlzR3JhcGguZHJhZ1N2ZztcbiAgICAgICAgICAgICAgICAgICAgem9vbS5zY2FsZShzY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIHpvb20udHJhbnNsYXRlKHRyYW5zbGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vY3JlYXRpbmcgbmFtZXMgdG8gcHJldmVudCB0cmFuc2l0aW9uIGNvbmZsaWN0c1xuICAgICAgICAgICAgICAgICAgICB2YXIgem9vbVNldENhbGxiYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIFx0em9vbS5zY2FsZShzY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIFx0em9vbS50cmFuc2xhdGUodHJhbnNsYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZV9uYW1lID0gXCJ6b29tXCIgKyB0cmFuc2xhdGU7XG4gICAgICAgICAgICAgICAgICAgIGQzLnNlbGVjdChcIi5cIiArIHRoaXMuY29uc3RzLmdyYXBoQ2xhc3MpLnRyYW5zaXRpb24odHJhbnNsYXRlX25hbWUpLmRlbGF5KDEwMCkuZHVyYXRpb24oNzUwKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIHpvb20udHJhbnNsYXRlKCkgKyAnKSBzY2FsZSgnICsgem9vbS5zY2FsZSgpICsgJyknKS5lYWNoKFwiZW5kXCIsIHpvb21TZXRDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGlmICh0aGlzR3JhcGguc3RhdGUuY2FuWm9vbSkge1xuICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3QoXCIuXCIgKyB0aGlzLmNvbnN0cy5ncmFwaENsYXNzKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB0aGlzR3JhcGguZHJhZ1N2Zy50cmFuc2xhdGUoKSArIFwiKSBzY2FsZShcIiArdGhpc0dyYXBoLmRyYWdTdmcuc2NhbGUoKSArIFwiKVwiKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWxsZWQgd2hlbiB0aGUgd2luZG93IHJlc2l6ZXNcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7SFRNTCBTVkd9ICBzdmcgICAgVGhlIHN2ZyB0byByZXNpemVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgb25XaW5kb3dSZXNpemUoc3ZnKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJvZHlFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9ICQoJyN2aXN1YWxpemF0aW9uLWdyYXBoJykub2Zmc2V0KCk7XG4gICAgICAgICAgICAgICAgdmFyIGRpdldpZHRoID0gJCgnI3Zpc3VhbGl6YXRpb24tZ3JhcGgnKS53aWR0aCgpO1xuICAgICAgICAgICAgICAgIHZhciBoZWlnaHQgPSBib2R5RWwuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgICAgIHN2Zy5hdHRyKFwid2lkdGhcIiwgZGl2V2lkdGgpLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0IC0gb2Zmc2V0LnRvcCAtIDIwKTtcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWxsZWQgd2hlbiB0aGUgc2VydmVyIHNlbmRzIHVwZGF0ZWQgZGF0YSBmb3IgdGhlIGxpbmtzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHVwZGF0ZUxpbmtEYXRhKCkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzO1xuICAgICAgICAgICAgICAgIHZhciBub2RlX25hbWVzX3NldCA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpc0dyYXBoLm5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVfbmFtZXNfc2V0LnB1c2godGhpc0dyYXBoLm5vZGVzW2ldLmlkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcmV0RGF0YSA9IHRoaXNHcmFwaC5kYXRhU291cmNlLmdldEZsb3dCZXR3ZWVuU2V0KG5vZGVfbmFtZXNfc2V0KTtcbiAgICAgICAgICAgICAgICB2YXIgbGlua0RhdGEgPSByZXREYXRhLmxpbmtEYXRhO1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5saW5rcyA9IHRoaXNHcmFwaC5kYXRhU291cmNlLnByb2Nlc3NMaW5rRGF0YShsaW5rRGF0YSwgdGhpc0dyYXBoLm5vZGVzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXROb2RlcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdExpbmtzKCk7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLnVwZGF0ZUdyYXBoKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIEdyYXBoOiBWaXN1YWxpemVyR3JhcGhcbiAgICAgICAgfVxufV0pO1xuXG5cblxuIiwiLyoqXG4gKiBUaGUgYmFzZSBjbGFzcyBmb3IgbGluayBvYmplY3RzIGZvciB0aGUgZ3JhcGguXG4gKiBTdXBwb3J0cyBwb2xpY2llcy5cbiAqIFxuICogVG8gd3JpdGUgeW91ciBvd24gbGluayBvYmplY3QsIGNyZWF0ZSBhIG5ldyBmYWN0b3J5IHRoYXQgdXNlcyB0aGUgbGlua1xuICogeW91IHdhbnQgdG8gaW5oZXJpdCBhcyBhIGRlcGVuZGVuY3ksIGFuZCBleHRlbmQgaXRzIGxpbmsgY2xhc3MuIFxuICogUmV0dXJuIHRoZSBjbGFzcyBvYmplY3Qgd2l0aCBMaW5rIGFzIGtleVxuICogXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuZ3JhcGgnKVxuICAgIC5mYWN0b3J5KCdMaW5rJywgW2Z1bmN0aW9uICgpIHtcbiAgICBcdGNsYXNzIExpbmsge1xuICAgIFx0XHQvKipcbiAgICBcdFx0ICogQ29uc3RydWN0cyB0aGUgb2JqZWN0LlxuICAgIFx0XHQgKlxuICAgIFx0XHQgKiBAcGFyYW0gICAgICB7Tm9kZX0gIHNvdXJjZU5vZGUgIFRoZSBzb3VyY2Ugbm9kZVxuICAgIFx0XHQgKiBAcGFyYW0gICAgICB7Tm9kZX0gIHRhcmdldE5vZGUgIFRoZSB0YXJnZXQgbm9kZVxuICAgIFx0XHQgKi9cblx0XHRcdGNvbnN0cnVjdG9yKHNvdXJjZU5vZGUsIHRhcmdldE5vZGUpIHtcblx0XHRcdFx0dGhpcy5zb3VyY2UgPSBzb3VyY2VOb2RlO1xuXHRcdFx0XHR0aGlzLnRhcmdldCA9IHRhcmdldE5vZGU7XG5cdFx0XHRcdHRoaXMuaGFzUG9saWN5ID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMucGF0aFBvbGljaWVzID0gW107XG5cdFx0XHRcdHRoaXMuZ3JhcGggPSBudWxsO1xuXHRcdFx0XHR0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQ2FsbGVkIHdoZW4gYSBsaW5rIGlzIGFkZGVkIHRvIHRoZSBncmFwaFxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSAgICAgIHtHcmFwaH0gIGdyYXBoICAgVGhlIGdyYXBoIGl0IGlzIGFkZGVkIHRvXG5cdFx0XHQgKi9cblx0XHRcdGluaXRpYWxpemUoZ3JhcGgpIHtcblx0XHRcdFx0aWYgKHRoaXMuaW5pdGlhbGl6ZWQgPT0gZmFsc2UpIHtcblx0XHRcdFx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblx0XHRcdFx0XHR0aGlzLmdyYXBoID0gZ3JhcGg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBDYWxsZWQgZHVyaW5nIHRoZSB1cGRhdGUgZ3JhcGggZm9yIGV4aXN0aW5nIGxpbmtzXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtICAgICAge0QzT2JqZWN0fSAgZDNwYXRoICBUaGUgZDMgcGF0aFxuXHRcdFx0ICogQHBhcmFtICAgICAge0xpbmt9ICBcdCAgIGQgICAgICAgTWF0Y2hpbmcgTGluayBPYmplY3QgICAgICAgXG5cdFx0XHQgKi9cblx0XHRcdHVwZGF0ZUF0dHIoZDNwYXRoLCBkKSB7XG5cdFx0XHRcdGQzcGF0aC5zdHlsZSgnbWFya2VyLWVuZCcsICd1cmwoI2VuZC1hcnJvdyknKVxuXHRcdCAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBhcnJvd1BhdGgpO1xuXHRcdFx0fVxuXG5cdFx0XHQvKipcblx0XHRcdCAqIENhbGxlZCBkdXJpbmcgdGhlIGZpcnN0IHVwZGF0ZSBncmFwaCBmb3IgYSBsaW5rXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtICAgICAge0QzT2JqZWN0fSAgZDNwYXRoICBUaGUgZDMgcGF0aFxuXHRcdFx0ICogQHBhcmFtICAgICAge0xpbmt9ICBcdCAgIGQgICAgICAgTWF0Y2hpbmcgTGluayBPYmplY3QgICAgICAgXG5cdFx0XHQgKi9cblx0XHRcdG5ld1BhdGhBdHRyKGQzcGF0aCwgZCkge1xuXHRcdFx0XHRkM3BhdGguYXR0cignZCcsIGFycm93UGF0aCk7XG5cdFx0XHR9XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQ2FsY3VsYXRlcyB0aGUgYXJyb3cgcGF0aFxuXHRcdFx0ICpcblx0XHRcdCAqIEByZXR1cm4gICAgIHtzdHJpbmd9ICBUaGUgcGF0aCB0byBkcmF3XG5cdFx0XHQgKi9cblx0XHQgICAgYXJyb3dQYXRoKCkge1xuXHRcdCAgICBcdHZhciBkID0gdGhpcztcblx0XHQgICAgICAgIHZhciBkeCA9IGQudGFyZ2V0LnggLSBkLnNvdXJjZS54LFxuXHRcdCAgICAgICAgICAgIGR5ID0gZC50YXJnZXQueSAtIGQuc291cmNlLnksXG5cdFx0ICAgICAgICAgICAgZHIgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuXHRcdCAgICAgICAgcmV0dXJuIFwiTVwiICsgZC5zb3VyY2UueCArIFwiLFwiICsgZC5zb3VyY2UueSArIFwiQVwiICsgZHIgKyBcIixcIiArIGRyICsgXCIgMCAwLDEgXCIgKyBkLnRhcmdldC54ICsgXCIsXCIgKyBkLnRhcmdldC55O1xuXHRcdCAgICB9XG5cblx0XHQgICAgLyoqXG5cdFx0ICAgICAqIFVzZWQgdG8gaW5zdGFsbCBwb2xpY2llcyB0aGF0IGFyZSBjYWxsZWQgd2hlbiB0aGlzXG5cdFx0ICAgICAqIGxpbmsgaGFzIGEgbW91c2UgZXZlbnRcblx0XHQgICAgICpcblx0XHQgICAgICogQHBhcmFtICAgICAge1BvbGljeX0gIHBvbGljeSAgVGhlIHBvbGljeSB0byBpbnN0YWxsXG5cdFx0ICAgICAqL1xuXHRcdFx0aW5zdGFsbFBhdGhQb2xpY3kocG9saWN5KSB7XG5cdFx0XHRcdHRoaXMuaGFzUG9saWN5ID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5wYXRoUG9saWNpZXMucHVzaChwb2xpY3kpO1xuXHRcdFx0XHRwb2xpY3kuaW5pdGlhbGl6ZSh0aGlzLmdyYXBoKTtcblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBVc2VkIHRvIHVuaW5zdGFsbCBwb2xpY3kgZm9yIHRoaXMgbGlua1xuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSAgICAgIHtQb2xpY3l9ICBwb2xpY3lSZW1vdmUgIFRoZSBwb2xpY3kgdG8gcmVtb3ZlXG5cdFx0XHQgKi9cblx0XHRcdHVuaW5zdGFsbFBhdGhQb2xpY3kocG9saWN5UmVtb3ZlKSB7XG5cdFx0XHRcdHZhciBwb2xpY3lSZW1vdmVOYW1lO1xuXHRcdFx0XHR2YXIgdGhpc1BhdGggPSB0aGlzO1xuXHRcdFx0XHRpZiAodHlwZW9mIHBvbGljeVJlbW92ZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRwb2xpY3lSZW1vdmVOYW1lID0gcG9saWN5UmVtb3ZlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHBvbGljeVJlbW92ZU5hbWUgPSBwb2xpY3lSZW1vdmUucG9saWN5TmFtZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfKHRoaXNQYXRoLnBhdGhQb2xpY2llcykuZm9yRWFjaChmdW5jdGlvbihwb2xpY3ksIGluZGV4KSB7XG5cdFx0XHRcdFx0aWYgKHBvbGljeS5wb2xpY3lOYW1lID09PSBwb2xpY3lSZW1vdmVOYW1lKSB7XG5cdFx0XHRcdFx0XHRwb2xpY3kuZGVzdHJveSgpO1xuXHRcdFx0XHRcdFx0dGhpc1BhdGgucGF0aFBvbGljaWVzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYgKHRoaXNQYXRoLnBhdGhQb2xpY2llcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHR0aGlzUGF0aC5oYXNQb2xpY3kgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvKipcblx0XHRcdCAqIENhbGxlZCB3aGVuIHRoZXJlIGlzIGEgbW91c2UgZXZlbnQgZm9yIHRoaXMgcGF0aFxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSAgICAgIHtzdHJpbmd9ICBldmVudCAgICAgVGhlIG1vdXNlIGV2ZW50XG5cdFx0XHQgKiBAcGFyYW0gICAgICB7RDNPYmplY3R9ICBkM3BhdGggIFRoZSBkMyBwYXRoXG5cdFx0XHQgKiBAcGFyYW0gICAgICB7T2JqZWN0fSAgZCAgICAgICAgIFRoZSBtYXRjaGluZyBsaW5rIG9iamVjdFxuXHRcdFx0ICovXG5cdFx0XHRwYXRoUG9saWN5RXZlbnQoZXZlbnQsIGQzcGF0aCwgZCkge1xuXHRcdFx0XHRfKGQucGF0aFBvbGljaWVzKS5mb3JFYWNoKGZ1bmN0aW9uKHBvbGljeSkge1xuXHRcdFx0XHRcdHBvbGljeVtldmVudF0oZDNwYXRoLCBkKTtcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdExpbms6IExpbmtcblx0XHR9XG59XSk7XG5cblxuXG5cblxuXG4iLCIvKipcbiAqIFRoZSBsaW5rIHRoYXQgaXMgdXNlZCBzcGVjaWZpY2FsbHkgZm9yIHRoZSB2aXN1YWxpemF0aW9uIHRhYi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5ncmFwaCcpXG4gICAgLmZhY3RvcnkoJ1Zpc3VhbGl6ZXJMaW5rJywgWydMaW5rJywgZnVuY3Rpb24gKExpbmspIHtcblx0XHRjbGFzcyBWaXN1YWxpemVyTGluayBleHRlbmRzIExpbmsuTGluayB7XG5cdFx0XHQvKipcblx0XHRcdCAqIENvbnN0cnVjdHMgdGhlIG9iamVjdC5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0gICAgICB7Tm9kZX0gIHNvdXJjZU5vZGUgIFRoZSBzb3VyY2Ugbm9kZVxuXHRcdFx0ICogQHBhcmFtICAgICAge05vZGV9ICB0YXJnZXROb2RlICBUaGUgdGFyZ2V0IG5vZGVcblx0XHRcdCAqIEBwYXJhbSAgICAgIHtudW1iZXJ9ICB3ZWlnaHQgICAgVGhlIHdlaWdodCBvZiB0aGUgbGlua1xuXHRcdFx0ICovXG5cdFx0ICAgIGNvbnN0cnVjdG9yKHNvdXJjZU5vZGUsIHRhcmdldE5vZGUsIHdlaWdodCkge1xuXHRcdCAgICAgICAgc3VwZXIoc291cmNlTm9kZSwgdGFyZ2V0Tm9kZSk7XG5cdFx0ICAgICAgICB0aGlzLndlaWdodCA9IHdlaWdodDtcblx0XHQgICAgICAgIC8vQ291bnQgaXMgdXNlZCB0byBrZWVwIHRyYWNrIG9mIGhvdyBtYW55XG5cdFx0ICAgICAgICAvL3BhdGhzIHRvIGl0cyBzdWJub2RlcyB0aGVyZSBhcmVcblx0XHQgICAgICAgIC8vaW4gb3JkZXIgdG8gY2FsY3VsYXRlIGF2ZXJhZ2UgdHJhZmZpY1xuXHRcdCAgICAgICAgdGhpcy5jb3VudCA9IDE7XG5cdFx0ICAgIH1cblxuXHRcdCAgICAvKipcblx0XHQgICAgICogSW5jcmVhc2VzIHRoZSBjb3VudCBvZiB0aGUgbGlua1xuXHRcdCAgICAgKiBVU2VkIHRvIGtlZXAgdHJhY2sgb2YgaG93IG1hbnkgcGF0aHMgdG8gaXRzIHN1Ym5vZGVzXG5cdFx0ICAgICAqIHRoZXJlIGFyZSBpbiBvcmRlciB0byBjYWxjdWxhdGUgYXZlcmFnZSB0cmFmZmljXG5cdFx0ICAgICAqL1xuXHRcdCAgICBpbmNyZWFzZUNvdW50KCkge1xuXHRcdCAgICAgICAgdGhpcy5jb3VudCArPSAxO1xuXHRcdCAgICB9XG5cblx0XHQgICAgLyoqXG5cdFx0ICAgICAqIENhbGN1bGF0ZXMgd2hlcmUgdG8gcGxhY2UgcXRpcCBmb3Jcblx0XHQgICAgICpcblx0XHQgICAgICogQHJldHVybiAgICAge09iamVjdH0gIE9iamVjdCB3aXRoIHFUaXAgc2V0dGluZ3Ncblx0XHQgICAgICovXG5cdFx0ICAgIHF0aXBIZWxwZXIoKSB7XG5cdFx0ICAgIFx0dmFyIHJldDtcblx0XHQgICAgXHR2YXIgZCA9IHRoaXM7XG5cdFx0ICAgIFx0dmFyIGR4ID0gKGQudGFyZ2V0LnggLSBkLnNvdXJjZS54KSAvIDIsXG5cdFx0ICAgICAgICAgICAgZHkgPSAoZC50YXJnZXQueSAtIGQuc291cmNlLnkpIC8gMjtcblx0XHQgICAgXHRpZiAoZC5zb3VyY2UueCA8IGQudGFyZ2V0LngpIHtcblx0ICAgIFx0XHRcdHJldCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG15OiAndG9wIGNlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdDogJ2NlbnRlciBjZW50ZXInLCAvLyBhdCB0aGUgYm90dG9tIHJpZ2h0IG9mLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IFtkeCwgZHldLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRqdXN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcdHk6IDEwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblx0XHQgICAgXHR9IGVsc2Uge1xuXHQgICAgXHRcdFx0cmV0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXk6ICdib3R0b20gY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0OiAnY2VudGVyIGNlbnRlcicsIC8vIGF0IHRoZSBib3R0b20gcmlnaHQgb2YuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogW2R4LCBkeV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGp1c3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0eTogLTEwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblx0XHQgICAgXHR9XG5cdFx0ICAgIFx0cmV0dXJuIHJldDtcblx0XHQgICAgfVxuXG5cdFx0ICAgIC8qKlxuXHRcdFx0ICogQ2FsbGVkIHdoZW4gYSBsaW5rIGlzIGFkZGVkIHRvIHRoZSBncmFwaFxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSAgICAgIHtHcmFwaH0gIGdyYXBoICAgVGhlIGdyYXBoIGl0IGlzIGFkZGVkIHRvXG5cdFx0XHQgKi9cblx0XHRcdGluaXRpYWxpemUoZ3JhcGgpIHtcblx0XHRcdFx0aWYgKHRoaXMuaW5pdGlhbGl6ZWQgPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRzdXBlci5pbml0aWFsaXplKGdyYXBoKTtcblx0XHRcdFx0XHR2YXIgc3RhdGUgPSBncmFwaC5zdGF0ZS5WaXN1YWxpemVyTGluaztcblx0XHRcdFx0XHRpZiAoc3RhdGUgPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0c3RhdGUgPSBncmFwaC5zdGF0ZS5WaXN1YWxpemVyTGluayA9IHt9O1xuXHRcdFx0XHRcdFx0c3RhdGUubWF4V2VpZ2h0ID0gbnVsbDtcblx0XHRcdFx0XHRcdHN0YXRlLnVzZUF2Z1dlaWdodCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMudXBkYXRlTWF4V2VpZ2h0KCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBTZXRzIHdoZXRoZXIgdGhlIGdyYXBoIHNob3VsZCB1c2UgYXZnIHdlaWdodFxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSAgICAgIHtib29sZWFufSAgdmFsICAgICBUaGUgdmFsdWUgdG8gc2V0IHRvXG5cdFx0XHQgKi9cblx0XHRcdHNldFVzZUF2Z1dlaWdodCh2YWwpIHtcblx0XHQgICAgICAgIHRoaXMuZ3JhcGguc3RhdGUuVmlzdWFsaXplckxpbmsudXNlQXZnV2VpZ2h0ID0gISF2YWw7XG5cdFx0ICAgIH1cblxuXHRcdCAgICAvKipcblx0XHQgICAgICogU2V0cyB0aGUgd2VpZ2h0IG9mIHRoaXMgbGlua1xuXHRcdCAgICAgKlxuXHRcdCAgICAgKiBAcGFyYW0gICAgICB7bnVtYmVyfSAgd2VpZ2h0ICBUaGUgd2VpZ2h0IHRvIHNldCB0b1xuXHRcdCAgICAgKi9cblx0XHQgICAgc2V0V2VpZ2h0KHdlaWdodCkge1xuXHRcdCAgICAgICAgdGhpcy53ZWlnaHQgPSB3ZWlnaHQ7XG5cdFx0ICAgIH1cblxuXHRcdCAgICAvKipcblx0XHQgICAgICogR2V0cyB0aGUgcmF3IHdlaWdodC5cblx0XHQgICAgICpcblx0XHQgICAgICogQHJldHVybiAgICAge251bWJlcn0gIFRoZSByYXcgd2VpZ2h0LlxuXHRcdCAgICAgKi9cblx0XHQgICAgZ2V0UmF3V2VpZ2h0KCkge1xuXHRcdCAgICAgICAgcmV0dXJuIHRoaXMud2VpZ2h0OyBcblx0XHQgICAgfVxuXG5cdFx0ICAgIC8qKlxuXHRcdCAgICAgKiBHZXRzIHRoZSB3ZWlnaHQgdmFsdWUgb2YgdGhlIGxpbmssIGRlcGVuZGluZyBvbiB0aGVcblx0XHQgICAgICogdXNlQXZnV2VpZ3RoIHNldHRpbmdcblx0XHQgICAgICpcblx0XHQgICAgICogQHJldHVybiAgICAge251bWJlcn0gIFRoZSB3ZWlnaHQuXG5cdFx0ICAgICAqL1xuXHRcdCAgICBnZXRXZWlnaHQoKSB7XG5cdFx0ICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaCxcblx0XHQgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5WaXN1YWxpemVyTGluaztcblxuXHRcdCAgICAgICAgaWYgKHN0YXRlLnVzZUF2Z1dlaWdodCkge1xuXHRcdCAgICAgICAgICAgIHZhciB3ZWlnaHQgPSB0aGlzLndlaWdodCAvIHRoaXMuY291bnQ7XG5cdFx0ICAgICAgICAgICAgcmV0dXJuIHdlaWdodDtcblx0XHQgICAgICAgIH1cblx0XHQgICAgICAgIHJldHVybiB0aGlzLndlaWdodDtcblx0XHQgICAgfVxuXG5cdFx0ICAgIC8qKlxuXHRcdCAgICAgKiBVcGRhdGVzIHRoZSBtYXggd2VpZ2h0IG9mIHRoZSBncmFwaFxuXHRcdCAgICAgKi9cblx0XHQgICAgdXBkYXRlTWF4V2VpZ2h0ICgpIHtcblx0XHQgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoLFxuXHRcdCAgICAgICAgICAgIHN0YXRlID0gdGhpc0dyYXBoLnN0YXRlLlZpc3VhbGl6ZXJMaW5rO1xuXG5cdFx0ICAgICAgICB2YXIgbWF4TGluayA9IF8ubWF4QnkodGhpc0dyYXBoLmxpbmtzLCBmdW5jdGlvbihsKSB7XG5cdFx0ICAgICAgICBcdGlmIChsLmdyYXBoICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdHJldHVybiBsLmdldFdlaWdodCgpO1xuXHRcdCAgICAgICAgXHR9XG5cdFx0ICAgICAgICBcdHJldHVybiAwO1xuXHRcdCAgICAgICAgfSk7XG5cdFx0ICAgICAgICBzdGF0ZS5tYXhXZWlnaHQgPSBtYXhMaW5rLmdldFdlaWdodCgpO1xuXHRcdCAgICB9XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQ2FsbGVkIGR1cmluZyB0aGUgdXBkYXRlIGdyYXBoIGZvciBleGlzdGluZyBsaW5rc1xuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSAgICAgIHtEM09iamVjdH0gIGQzcGF0aCAgVGhlIGQzIHBhdGhcblx0XHRcdCAqIEBwYXJhbSAgICAgIHtMaW5rfSAgXHQgICBkICAgICAgIE1hdGNoaW5nIExpbmsgT2JqZWN0ICAgICAgIFxuXHRcdFx0ICovXG5cdFx0XHR1cGRhdGVBdHRyKGQzcGF0aCwgZCkge1xuXHRcdCAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGgsXG5cdFx0ICAgICAgICAgICAgc3RhdGUgPSB0aGlzR3JhcGguc3RhdGUuVmlzdWFsaXplckxpbms7XG5cdFx0ICAgICAgICB0aGlzLnVwZGF0ZU1heFdlaWdodCgpO1xuXHQgICAgICAgICAgICB2YXIgY29sb3JTY2FsZSA9IGQzLnNjYWxlLmxpbmVhcigpXG5cdCAgICAgICAgICAgICAgICAuZG9tYWluKFswLCBzdGF0ZS5tYXhXZWlnaHRdKVxuXHQgICAgICAgICAgICAgICAgLnJhbmdlKFtcIiNmZmIzNjZcIiwgXCIjRjkyNjA2XCJdKTtcblx0ICAgICAgICAgICAgc3RhdGUuY29sb3JTY2FsZSA9IGNvbG9yU2NhbGU7XG5cdFx0XHRcdGQzcGF0aC5zdHlsZSgnbWFya2VyLWVuZCcsICd1cmwoI2VuZC1hcnJvdyknKVxuXHRcdCAgICAgICAgICAgIC5jbGFzc2VkKHRoaXNHcmFwaC5jb25zdHMuc2VsZWN0ZWRDbGFzcywgZnVuY3Rpb24oZCl7XG5cdFx0ICAgICAgICAgICAgICAgIHJldHVybiBkID09PSBzdGF0ZS5zZWxlY3RlZEVkZ2U7XG5cdFx0ICAgICAgICAgICAgfSlcblx0XHQgICAgICAgICAgICAuYXR0cihcImRcIiwgdGhpcy5hcnJvd1BhdGguY2FsbChkKSlcblx0XHQgICAgICAgICAgICAudHJhbnNpdGlvbihcImV4aXN0aW5nUGF0aFRyYW5zaXRpb25cIilcblx0XHQgICAgICAgICAgICAuZHVyYXRpb24oNzUwKVxuXHRcdCAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIGZ1bmN0aW9uKGQpe1xuXHRcdCAgICAgICAgICAgICAgICB2YXIgYyA9IGNvbG9yU2NhbGUoZC5nZXRXZWlnaHQoKSk7XG5cdFx0ICAgICAgICAgICAgICAgIHJldHVybiBjO1xuXHRcdCAgICAgICAgICAgIH0pO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvKipcblx0XHRcdCAqIENhbGxlZCBkdXJpbmcgdGhlIGZpcnN0IHVwZGF0ZSBncmFwaCBmb3IgdGhpcyBsaW5rXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtICAgICAge0QzT2JqZWN0fSAgZDNwYXRoICBUaGUgZDMgcGF0aFxuXHRcdFx0ICogQHBhcmFtICAgICAge0xpbmt9ICBcdCAgIGQgICAgICAgTWF0Y2hpbmcgTGluayBPYmplY3Rcblx0XHRcdCAqL1xuXHRcdFx0bmV3UGF0aEF0dHIoZDNwYXRoLCBkKSB7XG5cdFx0ICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaCxcblx0XHQgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5WaXN1YWxpemVyTGluaztcblx0ICAgICAgICAgICAgdGhpcy51cGRhdGVNYXhXZWlnaHQoKTtcblx0ICAgICAgICAgICAgdmFyIGNvbG9yU2NhbGUgPSBkMy5zY2FsZS5saW5lYXIoKVxuXHQgICAgICAgICAgICAgICAgLmRvbWFpbihbMCwgc3RhdGUubWF4V2VpZ2h0XSlcblx0ICAgICAgICAgICAgICAgIC5yYW5nZShbXCIjZmZiMzY2XCIsIFwiI0Y5MjYwNlwiXSk7XG5cdCAgICAgICAgICAgICAgICBcblx0XHRcdFx0ZDNwYXRoLnRyYW5zaXRpb24oXCJuZXdQYXRoVHJhbnNpdGlvblwiKVxuXHRcdCAgICAgICAgICAgIC5kdXJhdGlvbig3NTApXG5cdFx0ICAgICAgICAgICAgLmF0dHJUd2VlbihcIm9wYWNpdHlcIiwgZnVuY3Rpb24oZCkge1xuXHRcdCAgICAgICAgICAgICAgICByZXR1cm4gZDMuaW50ZXJwb2xhdGVTdHJpbmcoMCwxKTtcblx0XHQgICAgICAgICAgICB9KVxuXHRcdCAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIGZ1bmN0aW9uKGQpe1xuXHRcdCAgICAgICAgICAgICAgICB2YXIgYyA9IGNvbG9yU2NhbGUoZC5nZXRXZWlnaHQoKSk7XG5cdFx0ICAgICAgICAgICAgICAgIHJldHVybiBjO1xuXHRcdCAgICAgICAgICAgIH0pXG5cdFx0ICAgICAgICAgICAgLmF0dHIoJ2QnLCB0aGlzLmFycm93UGF0aC5jYWxsKGQpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0TGluayA6IFZpc3VhbGl6ZXJMaW5rXG5cdFx0fVxufV0pO1xuXG5cblxuXG5cbiIsIi8qKlxuICogVGhlIGJhc2UgY2xhc3MgZm9yIG5vZGUgb2JqZWN0cyBmb3IgdGhlIGdyYXBoLlxuICogU3VwcG9ydHMgcG9saWNpZXMuXG4gKiBcbiAqIFRvIHdyaXRlIHlvdXIgb3duIE5vZGUgb2JqZWN0LCBjcmVhdGUgYSBuZXcgZmFjdG9yeSB0aGF0IHVzZXMgdGhlIG5vZGVcbiAqIHlvdSB3YW50IHRvIGluaGVyaXQgYXMgYSBkZXBlbmRlbmN5LCBhbmQgZXh0ZW5kIGl0cyBub2RlIGNsYXNzLiBcbiAqIFJldHVybiB0aGUgY2xhc3Mgb2JqZWN0IHdpdGggTm9kZSBhcyBrZXlcbiAqIFxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LmdyYXBoJylcbiAgICAuZmFjdG9yeSgnTm9kZScsIFtmdW5jdGlvbiAoKSB7XG5cdFx0Y2xhc3MgTm9kZSB7XG5cdFx0XHQvKipcblx0XHRcdCAqIENvbnN0cnVjdHMgdGhlIG9iamVjdC5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0gICAgICB7bnVtYmVyfSAgeCAgICAgICB4IGxvY2F0aW9uXG5cdFx0XHQgKiBAcGFyYW0gICAgICB7bnVtYmVyfSAgeSAgICAgICB5IGxvY2F0aW9uXG5cdFx0XHQgKiBAcGFyYW0gICAgICB7c3RyaW5nfSAgaWQgICAgICBUaGUgaWRlbnRpZmllclxuXHRcdFx0ICogQHBhcmFtICAgICAge3N0cmluZ30gIHRleHQgICAgVGhlIHRleHQgdG8gZGlzcGxheVxuXHRcdFx0ICogQHBhcmFtICAgICAge251bWJlcn0gIHJhZGl1cyAgVGhlIHJhZGl1cyBvZiB0aGUgbm9kZVxuXHRcdFx0ICovXG5cdFx0XHRjb25zdHJ1Y3Rvcih4LCB5LCBpZCwgdGV4dCwgcmFkaXVzKSB7XG5cdFx0XHRcdHRoaXMueCA9IHg7XG5cdFx0XHRcdHRoaXMueSA9IHk7XG5cdFx0XHRcdHRoaXMucmFkaXVzID0gcmFkaXVzO1xuXHRcdFx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0XHRcdHRoaXMudGV4dCA9IHRleHQ7XG5cdFx0XHRcdHRoaXMucmFkaXVzID0gcmFkaXVzO1xuXHRcdFx0XHR0aGlzLmhhc1BvbGljeSA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLnBvbGljeSA9IG51bGw7XG5cdFx0XHRcdHRoaXMubm9kZVBvbGljaWVzID0gW107XG5cdFx0XHRcdHRoaXMuZ3JhcGggPSBudWxsO1xuXHRcdFx0XHR0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQ2FsbGVkIHdoZW4gYSBub2RlIGlzIGFkZGVkIHRvIHRoZSBncmFwaFxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSAgICAgIHtHcmFwaH0gIGdyYXBoICAgVGhlIGdyYXBoIGl0IGlzIGFkZGVkIHRvXG5cdFx0XHQgKi9cblx0XHRcdGluaXRpYWxpemUoZ3JhcGgpIHtcblx0XHRcdFx0aWYgKHRoaXMuaW5pdGlhbGl6ZWQgPT0gZmFsc2UpIHtcblx0XHRcdFx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblx0XHRcdFx0XHR0aGlzLmdyYXBoID0gZ3JhcGg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBDYWxsZWQgZHVyaW5nIHRoZSB1cGRhdGUgZ3JhcGggZm9yIGV4aXN0aW5nIGxpbmtzXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtICAgICAge0QzT2JqZWN0fSAgZDNub2RlICBUaGUgZDMgbm9kZVxuXHRcdFx0ICovXG5cdFx0XHR1cGRhdGVBdHRyKGQzbm9kZSwgZCkge1xuXHRcdFx0XHRkM25vZGUuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKXtyZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiO30pO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvKipcblx0XHRcdCAqIENhbGxlZCBkdXJpbmcgdGhlIGZpcnN0IHVwZGF0ZSBncmFwaCBmb3IgYSBub2RlXG5cdFx0XHQgKiBIb29rIGZvciBzdWIgY2xhc3Nlc1xuXHRcdFx0ICogXG5cdFx0XHQgKiBAcGFyYW0gICAgICB7RDNPYmplY3R9ICBkM25vZGUgIFRoZSBkMyBub2RlXG5cdFx0XHQgKiBAcGFyYW0gICAgICB7Tm9kZX0gICAgICBkICAgICAgIE1hdGNoaW5nIE5vZGUgT2JqZWN0XG5cdFx0XHQgKi9cblx0XHRcdG5ld05vZGVBdHRyKGQzbm9kZSwgZCkge1xuXHRcdFx0fVxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFNldHMgdGhlIHJhZGl1cyBvZiB0aGUgbm9kZS5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0gICAgICB7bnVtYmVyfSAgcmFkaXVzICBUaGUgcmFkaXVzXG5cdFx0XHQgKi9cblx0XHRcdHNldFJhZGl1cyhyYWRpdXMpIHtcblx0XHRcdFx0dGhpcy5yYWRpdXMgPSByYWRpdXM7XG5cdFx0XHR9XG5cblx0XHQgICAgLyoqXG5cdFx0ICAgICAqIFVzZWQgdG8gaW5zdGFsbCBwb2xpY2llcyB0aGF0IGFyZSBjYWxsZWQgd2hlbiB0aGlzXG5cdFx0ICAgICAqIG5vZGUgaGFzIGEgbW91c2UgZXZlbnRcblx0XHQgICAgICpcblx0XHQgICAgICogQHBhcmFtICAgICAge1BvbGljeX0gIHBvbGljeSAgVGhlIHBvbGljeSB0byBpbnN0YWxsXG5cdFx0ICAgICAqL1xuXHRcdFx0aW5zdGFsbE5vZGVQb2xpY3kocG9saWN5KSB7XG5cdFx0XHRcdHRoaXMuaGFzUG9saWN5ID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5ub2RlUG9saWNpZXMucHVzaChwb2xpY3kpO1xuXHRcdFx0XHRwb2xpY3kuaW5pdGlhbGl6ZSh0aGlzLmdyYXBoKTtcblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBVc2VkIHRvIHVuaW5zdGFsbCBwb2xpY3kgZm9yIHRoaXMgbm9kZVxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSAgICAgIHtQb2xpY3l8c3RyaW5nfSAgcG9saWN5UmVtb3ZlICBUaGUgcG9saWN5IHRvIHJlbW92ZVxuXHRcdFx0ICovXHRcdFx0XG5cdFx0XHR1bmluc3RhbGxOb2RlUG9saWN5KHBvbGljeVJlbW92ZSkge1xuXHRcdFx0XHR2YXIgcG9saWN5UmVtb3ZlTmFtZTtcblx0XHRcdFx0dmFyIHRoaXNOb2RlID0gdGhpcztcblx0XHRcdFx0aWYgKHR5cGVvZiBwb2xpY3lSZW1vdmUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0cG9saWN5UmVtb3ZlTmFtZSA9IHBvbGljeVJlbW92ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwb2xpY3lSZW1vdmVOYW1lID0gcG9saWN5UmVtb3ZlLnBvbGljeU5hbWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Xyh0aGlzTm9kZS5ub2RlUG9saWNpZXMpLmZvckVhY2goZnVuY3Rpb24ocG9saWN5LCBpbmRleCkge1xuXHRcdFx0XHRcdGlmIChwb2xpY3kucG9saWN5TmFtZSA9PT0gcG9saWN5UmVtb3ZlTmFtZSkge1xuXHRcdFx0XHRcdFx0cG9saWN5LmRlc3Ryb3koKTtcblx0XHRcdFx0XHRcdHRoaXNOb2RlLm5vZGVQb2xpY2llcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlmICh0aGlzTm9kZS5ub2RlUG9saWNpZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0dGhpc05vZGUuaGFzUG9saWN5ID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBDYWxsZWQgd2hlbiB0aGVyZSBpcyBhIG1vdXNlIGV2ZW50IGZvciB0aGlzIG5vZGVcblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0gICAgICB7c3RyaW5nfSAgZXZlbnQgICAgIFRoZSBtb3VzZSBldmVudFxuXHRcdFx0ICogQHBhcmFtICAgICAge0QzT2JqZWN0fSAgZDNub2RlICBUaGUgZDMgbm9kZVxuXHRcdFx0ICogQHBhcmFtICAgICAge09iamVjdH0gIGQgICAgICAgICBUaGUgbWF0Y2hpbmcgbm9kZSBvYmplY3Rcblx0XHRcdCAqL1xuXHRcdFx0bm9kZVBvbGljeUV2ZW50KGV2ZW50LCBkM25vZGUsIGQpIHtcblx0XHRcdFx0Xy5mb3JFYWNoKHRoaXMubm9kZVBvbGljaWVzLCBmdW5jdGlvbihwb2xpY3kpIHtcblx0XHRcdFx0XHRwb2xpY3lbZXZlbnRdKGQzbm9kZSwgZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0Tm9kZTogTm9kZVxuXHRcdH1cbn1dKTtcblxuXG5cblxuXG5cblxuIiwiLyoqXG4gKiBUaGUgbm9kZSB0aGF0IGlzIHVzZWQgc3BlY2lmaWNhbGx5IGZvciB0aGUgdmlzdWFsaXphdGlvbiB0YWIuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuZ3JhcGgnKVxuICAgIC5mYWN0b3J5KCdWaXN1YWxpemVyTm9kZScsIFsnTm9kZScsIGZ1bmN0aW9uIChOb2RlKSB7XG5cdFx0Y2xhc3MgVmlzdWFsaXplck5vZGUgZXh0ZW5kcyBOb2RlLk5vZGUge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBDb25zdHJ1Y3RzIHRoZSBvYmplY3QuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtICAgICAge251bWJlcn0gIHggICAgICAgXHR4IGxvY2F0aW9uXG5cdFx0XHQgKiBAcGFyYW0gICAgICB7bnVtYmVyfSAgeSAgICAgICBcdHkgbG9jYXRpb25cblx0XHRcdCAqIEBwYXJhbSAgICAgIHtzdHJpbmd9ICBpZCAgICAgIFx0VGhlIGlkZW50aWZpZXJcblx0XHRcdCAqIEBwYXJhbSAgICAgIHtzdHJpbmd9ICB0ZXh0ICAgIFx0VGhlIHRleHQgdG8gZGlzcGxheVxuXHRcdFx0ICogQHBhcmFtICAgICAge251bWJlcn0gIHJhZGl1cyAgXHRUaGUgcmFkaXVzIG9mIHRoZSBub2RlXG5cdFx0XHQgKiBAcGFyYW0gICAgICB7c3RyaW5nfSAgcGFyZW50ICAgICBUaGUgcGFyZW50IGlkXG5cdFx0XHQgKiBAcGFyYW0gICAgICB7QXJyYXl9ICAgYW5jZXN0b3JzICBBcnJheSBvZiBhbmNlc3RvcnMgSWRcblx0XHRcdCAqIEBwYXJhbSAgICAgIHtudW1iZXJ9ICB4U3RhcnQgICAgIHggbG9jIHRvIHN0YXJ0IGFuaW1hdGlvblxuXHRcdFx0ICogQHBhcmFtICAgICAge251bWJlcn0gIHlTdGFydCAgICAgeSBsb2MgdG8gc3RhcnQgYW5pbWF0aW9uXG5cdFx0XHQgKi9cblx0XHQgICAgY29uc3RydWN0b3IoeCwgeSwgaWQsIHRleHQsIHJhZGl1cywgcGFyZW50LCBhbmNlc3RvcnMsIFxuXHRcdCAgICBcdHhTdGFydCwgeVN0YXJ0KSB7XG5cdFx0ICAgICAgICBzdXBlcih4LCB5LCBpZCwgdGV4dCwgcmFkaXVzKTtcblx0XHQgICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuXHRcdCAgICAgICAgdGhpcy5hbmNlc3RvcnMgPSBhbmNlc3RvcnM7XG5cdFx0ICAgICAgICBpZiAoeFN0YXJ0ID09IG51bGwpIHtcblx0XHQgICAgICAgIFx0dGhpcy54U3RhcnQgPSB4O1xuXHRcdCAgICAgICAgfSBlbHNlIHtcblx0XHQgICAgICAgIFx0dGhpcy54U3RhcnQgPSB4U3RhcnQ7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgICAgICBpZiAoeVN0YXJ0ID09IG51bGwpIHtcblx0XHQgICAgICAgIFx0dGhpcy55U3RhcnQgPSB5O1xuXHRcdCAgICAgICAgfSBlbHNlIHtcblx0XHQgICAgICAgIFx0dGhpcy55U3RhcnQgPSB5U3RhcnQ7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgIH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBDYWxsZWQgZHVyaW5nIHRoZSBmaXJzdCB1cGRhdGUgZ3JhcGggZm9yIGEgbm9kZVxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSAgICAgIHtEM09iamVjdH0gIGQzbm9kZSAgVGhlIGQzIG5vZGVcblx0XHRcdCAqIEBwYXJhbSAgICAgIHtOb2RlfSAgICBkICAgICAgICAgVGhlIG1hdGNoaW5nIE5vZGVcblx0XHRcdCAqL1xuXHRcdFx0bmV3Tm9kZUF0dHIoZDNub2RlLCBkKSB7XG5cdFx0XHRcdHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoO1xuXHRcdFx0XHRpZiAodGhpc0dyYXBoLmNvbnN0cy5jb250YWluZXJDbGFzcyAhPSBudWxsICYmXG5cdFx0XHRcdFx0XHR0aGlzR3JhcGguZGF0YVNvdXJjZS5jaGlsZHJlbl9zdHJ1Y3RbZC5pZF0gPT0gbnVsbCkge1xuXHRcdFx0XHRcdGQzbm9kZS5jbGFzc2VkKHRoaXNHcmFwaC5jb25zdHMuY29udGFpbmVyQ2xhc3MsIHRydWUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGQzbm9kZS50cmFuc2l0aW9uKFwibm9kZVBvc2l0aW9uVHJhbnNpdGlvblwiKVxuXHRcdCAgICAgICAgICAgICAgICAuZHVyYXRpb24oNzUwKVxuXHRcdCAgICAgICAgICAgICAgICAuYXR0clR3ZWVuKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHQgICAgICAgICAgICAgICAgICAgIGlmIChkLnhTdGFydCAhPSBudWxsICYmIGQueVN0YXJ0ICE9IG51bGwpIHtcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICB2YXIgeFN0YXJ0ID0gZC54U3RhcnQ7XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHlTdGFydCA9IGQueVN0YXJ0O1xuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIGQueFN0YXJ0ID0gZC54O1xuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIGQueVN0YXJ0ID0gZC55O1xuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkMy5pbnRlcnBvbGF0ZVN0cmluZyhcInRyYW5zbGF0ZShcIiArIHhTdGFydCArIFwiLFwiICsgeVN0YXJ0ICsgXCIpXCIsIFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIik7XG5cdFx0ICAgICAgICAgICAgICAgICAgICB9XG5cdFx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gZDMuaW50ZXJwb2xhdGVTdHJpbmcoXCJ0cmFuc2xhdGUoXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiLCBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCIpO1xuXHRcdCAgICAgICAgICAgICAgICB9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0Tm9kZTogVmlzdWFsaXplck5vZGVcblx0XHR9XG5cbn1dKTtcblxuXG5cblxuXG5cblxuXG4iLCIvKipcbiAqIFRoaXMgcG9saWN5IGlzIHVzZWQgdG8gYWRkIGEgc2VsZWN0IG5vZGUgZmVhdHVyZS5cbiAqIFN1cHBvcnRzIHNlbGVjdGluZyBtdWx0aXBsZSBub2RlcyBieSB1c2luZyB0aGUgY3RybCBrZXkuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuZ3JhcGgnKVxuICAgIC5mYWN0b3J5KCdOb2RlU2VsZWN0aW9uUG9saWN5JywgWydQb2xpY3knLCBmdW5jdGlvbiAoUG9saWN5KSB7XG5cbiAgICBcdGNsYXNzIE5vZGVTZWxlY3Rpb25Qb2xpY3kgZXh0ZW5kcyBQb2xpY3kuUG9saWN5IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ29uc3RydWN0cyB0aGUgb2JqZWN0LlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgICAgICBzdXBlcihcIk5vZGVTZWxlY3Rpb25Qb2xpY3lcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsbGVkIHdoZW4gcG9saWN5IGlzIGluc3RhbGxlZFxuICAgICAgICAgICAgICogT3ZlcndyaXRlcyB0aGUgb24gZHJhZyBldmVudCBvZiB0aGUgZ3JhcGhcbiAgICAgICAgICAgICAqIFxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge0dyYXBofSAgZ3JhcGggICBUaGUgZ3JhcGggaXQgaXMgXG4gICAgXHRcdCAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFsbGVkIG9uXG4gICAgXHRcdCAqL1xuICAgICAgICAgICAgaW5pdGlhbGl6ZShncmFwaCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZShncmFwaCk7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gZ3JhcGguc3RhdGUuTm9kZVNlbGVjdGlvblBvbGljeSA9IHt9O1xuICAgICAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkTm9kZXMgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgY29uc3RzID0gZ3JhcGguY29uc3RzLk5vZGVTZWxlY3Rpb25Qb2xpY3kgPSB7fTtcbiAgICAgICAgICAgICAgICBjb25zdHMuc2VsZWN0ZWRDbGFzcyA9IFwic2VsZWN0ZWRcIjtcbiAgICAgICAgICAgICAgICAvL292ZXJ3cml0dGluZyBncmFwaCdzIG5vZGUgb24gZHJhZyBldmVudCB0byBzdXBwb3J0XG4gICAgICAgICAgICAgICAgLy9tb3ZpbmcgbXVsdGlwbGUgbm9kZXMgYXQgb25jZVxuICAgICAgICAgICAgICAgIHZhciBkcmFnID0gZ3JhcGguZHJhZztcbiAgICAgICAgICAgICAgICBkcmFnLm9uKCdkcmFnJywgZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgICAgIFx0dmFyIHRoaXNHcmFwaCA9IGdyYXBoO1xuICAgICAgICAgICAgICAgIFx0aWYgKHRoaXNHcmFwaC5jb25zdHMuTm9kZVNlbGVjdGlvblBvbGljeSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgXHRcdHZhciBzZWxlY3RlZENsYXNzID0gdGhpc0dyYXBoLmNvbnN0cy5Ob2RlU2VsZWN0aW9uUG9saWN5LnNlbGVjdGVkQ2xhc3M7XG4gICAgICAgICAgICAgICAgXHRcdHZhciBzZWxlY3Rpb24gPSBkMy5zZWxlY3RBbGwoICcuJyArc2VsZWN0ZWRDbGFzcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBzZWxlY3Rpb25bMF0uaW5kZXhPZiggdGhpcyk9PS0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uLmNsYXNzZWQoc2VsZWN0ZWRDbGFzcywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbiA9IGQzLnNlbGVjdCggdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uLmNsYXNzZWQoc2VsZWN0ZWRDbGFzcywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24uYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbiggZCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQueCArPSBkMy5ldmVudC5keDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLnkgKz0gZDMuZXZlbnQuZHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgWyBkLngsZC55IF0gKyBcIilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGgudXBkYXRlR3JhcGgoKTtcbiAgICAgICAgICAgICAgICBcdH1cblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQWRkcyB0aGUgZ2l2ZW4gbm9kZSB0byB0aGUgYXJyYXkgb2Ygc2VsZWN0ZWQgbm9kZXNcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7RDNPYmplY3R9ICBkM05vZGUgICAgVGhlIGQzIG5vZGVcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtOb2RlfSAgICAgIG5vZGVEYXRhICBNYXRjaGluZyBOb2RlIG9iamVjdFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBhZGRTZWxlY3ROb2RlKGQzTm9kZSwgbm9kZURhdGEpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB0aGlzR3JhcGguc3RhdGUuTm9kZVNlbGVjdGlvblBvbGljeSxcbiAgICAgICAgICAgICAgICAgICAgY29uc3RzID0gdGhpc0dyYXBoLmNvbnN0cy5Ob2RlU2VsZWN0aW9uUG9saWN5O1xuXG4gICAgICAgICAgICAgICAgZDNOb2RlLmNsYXNzZWQoY29uc3RzLnNlbGVjdGVkQ2xhc3MsIHRydWUpO1xuICAgICAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkTm9kZXMucHVzaChub2RlRGF0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmVtb3ZlcyB0aGUgZ2l2ZW4gbm9kZSBmcm9tIHRoZSBhcnJheSBvZiBzZWxlY3RlZCBub2Rlcy5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7RDNPYmplY3R9ICBkM05vZGUgICAgVGhlIGQzIG5vZGVcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtOb2RlfSAgICAgIG5vZGVEYXRhICBNYXRjaGluZyBub2RlIG9iamVjdCBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVtb3ZlU2VsZWN0RnJvbU5vZGUoZDNOb2RlLCBub2RlRGF0YSkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5Ob2RlU2VsZWN0aW9uUG9saWN5LFxuICAgICAgICAgICAgICAgICAgICBjb25zdHMgPSB0aGlzR3JhcGguY29uc3RzLk5vZGVTZWxlY3Rpb25Qb2xpY3k7XG5cbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguY2lyY2xlcy5maWx0ZXIoZnVuY3Rpb24oY2QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNkLmlkID09PSBub2RlRGF0YS5pZDtcbiAgICAgICAgICAgICAgICB9KS5jbGFzc2VkKGNvbnN0cy5zZWxlY3RlZENsYXNzLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gc3RhdGUuc2VsZWN0ZWROb2Rlcy5pbmRleE9mKG5vZGVEYXRhKTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZE5vZGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmVtb3ZlcyBhbGwgc2VsZWN0ZWQgbm9kZXMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlbW92ZUFsbFNlbGVjdGVkTm9kZXMoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGgsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gdGhpc0dyYXBoLnN0YXRlLk5vZGVTZWxlY3Rpb25Qb2xpY3ksXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cyA9IHRoaXNHcmFwaC5jb25zdHMuTm9kZVNlbGVjdGlvblBvbGljeTtcblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5jaXJjbGVzLmNsYXNzZWQoY29uc3RzLnNlbGVjdGVkQ2xhc3MsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZE5vZGVzID0gW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogT24gTW91c2Vkb3duLCBkZXRlcm1pbmVzIHdoZXRoZXIgdG8gY2hhbmdlIHRoZVxuICAgICAgICAgICAgICogc2VsZWN0ZWQgc3RhdHVzIG9mIHRoZSBjbGlja2VkIG5vZGUuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge0QzT2JqZWN0fSAgZDNub2RlICBUaGUgZDMgbm9kZVxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge05vZGV9ICAgICAgZCAgICAgICBNYXRjaGluZyBOb2RlIE9iamVjdCAgICAgICBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbW91c2Vkb3duKGQzbm9kZSwgZCkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5Ob2RlU2VsZWN0aW9uUG9saWN5O1xuICAgICAgICAgICAgICAgIGQzLmV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmIChkMy5ldmVudC5jdHJsS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5zZWxlY3RlZE5vZGVzLmluZGV4T2YoZCkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RGcm9tTm9kZShkM25vZGUsIGQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRTZWxlY3ROb2RlKGQzbm9kZSwgZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRlLnNlbGVjdGVkTm9kZXMuaW5kZXhPZihkKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAvL2lmIG5vIGNvbnRyb2wga2V5LCBhbmQgY2xpY2tlZCBub3Qgc2VsZWN0ZWQgbm9kZSxcbiAgICAgICAgICAgICAgICAgICAgLy9yZW1vdmUgYWxsIG9mIGN1cnJlbnQgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQWxsU2VsZWN0ZWROb2RlcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBPbiBNb3VzZXVwLCBkZXRlcm1pbmVzIHdoZXRoZXIgdG8gY2hhbmdlIHRoZVxuICAgICAgICAgICAgICogc2VsZWN0ZWQgc3RhdHVzIG9mIHRoZSBjbGlja2VkIG5vZGUuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge0QzT2JqZWN0fSAgZDNub2RlICBUaGUgZDMgbm9kZVxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge05vZGV9ICAgICAgZCAgICAgICBNYXRjaGluZyBOb2RlIE9iamVjdFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBtb3VzZXVwKGQzbm9kZSwgZCkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5Ob2RlU2VsZWN0aW9uUG9saWN5O1xuICAgICAgICAgICAgICAgIGlmICghZDMuZXZlbnQuY3RybEtleSkge1xuICAgICAgICAgICAgICAgICAgICAvL2lmIGxlbmd0aCBpcyBncmVhdGVyIHRoYW4gMSwgdGhlbiB3ZSBhcmUgbW92aW5nIG11bHRpcGxlIG5vZGVzXG4gICAgICAgICAgICAgICAgICAgIC8vbGVhdmUgdGhlbSBhbGwgaGlnaGxpZ2h0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy9vdGhlcndpc2Ugd2UgYXJlIGp1c3QgbW92aW5nIG9uZSBub2RlLCBzbyB1bmhpZ2hsaWdodFxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUuc2VsZWN0ZWROb2Rlcy5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RGcm9tTm9kZShkM25vZGUsIGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBQb2xpY3k6IE5vZGVTZWxlY3Rpb25Qb2xpY3lcbiAgICAgICAgfVxufV0pO1xuXG5cblxuXG5cblxuXG4iLCIvKipcbiAqIFRoaXMgcG9saWN5IGNoYW5nZXMgdGhlIHZpZXcgdG8gdGhlIHRpbWVncmFwaCBvZiBsaW5rIGRhdGEgb24gY2xpY2suXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuZ3JhcGgnKVxuICAgIC5mYWN0b3J5KCdQYXRoQ2hhbmdlVmlld1BvbGljeScsIFsnUG9saWN5JywgZnVuY3Rpb24gKFBvbGljeSkge1xuICAgIFx0Y2xhc3MgUGF0aENoYW5nZVZpZXdQb2xpY3kgZXh0ZW5kcyBQb2xpY3kuUG9saWN5IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsbGVkIHRvIGJ1aWxkIHBvbGljeVxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgIHtBbmd1bGFyIFN0YXRlfSAgICAkc3RhdGUgICAgVXNlZCB0byBjaGFuZ2Ugdmlld1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb25zdHJ1Y3Rvcigkc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBzdXBlcignUGF0aENoYW5nZVZpZXdQb2xpY3knKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2VuZXJhdGVzIGEgbGlzdCBvZiBhbGwgY2hpbGQgY29udGFpbmVycyBvZiB0aGUgc2VydmljZVxuICAgICAgICAgICAgICogQ2FuIGhhbmRsZSBuZXN0ZWQgc2VydmljZXMuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge3N0cmluZ30gIGlkICAgICAgTm9kZSBJRFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZW5lcmF0ZUxpc3QoaWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc1BvbGljeSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdmFyIHJldExpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgZ2VuZXJhdGVMaXN0SGVscGVyID0gZnVuY3Rpb24oaWQsIHJldExpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGVJZHMgPSB0aGlzUG9saWN5LmdyYXBoLmRhdGFTb3VyY2UuY2hpbGRyZW5fc3RydWN0W2lkXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlSWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGRJZCA9IG5vZGVJZHNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpc1BvbGljeS5ncmFwaC5kYXRhU291cmNlLmhhc0NoaWxkKGNoaWxkSWQpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN1YlJldExpc3QgPSBnZW5lcmF0ZUxpc3RIZWxwZXIoY2hpbGRJZCwgcmV0TGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0TGlzdC5jb25jYXQoc3ViUmV0TGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldExpc3QucHVzaChjaGlsZElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBnZW5lcmF0ZUxpc3RIZWxwZXIoaWQsIHJldExpc3QpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXRMaXN0XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVXNlZCB0byByZXJvdXRlIGFuIGVkZ2Ugd2hlbiBjbGlja2VkXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge0xpbmt9ICBlZGdlICAgIFRoZSBjbGlja2VkIGVkZ2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmlld0VkZ2UoZWRnZSkge1xuICAgICAgICAgICAgICAgIHZhciBzb3VyY2VMaXN0ID0gW107XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldExpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgc291cmNlSWQgPSBlZGdlLnNvdXJjZS5pZDtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0SWQgPSBlZGdlLnRhcmdldC5pZDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdyYXBoLmRhdGFTb3VyY2UuaGFzQ2hpbGQoc291cmNlSWQpID09PSB0cnVlKSB7Ly9Ob3QgYSBjb250YWluZXIgbm9kZSwgbmVlZCB0byBhZ2dyZWdhdGVcbiAgICAgICAgICAgICAgICAgICAgc291cmNlTGlzdCA9IHRoaXMuZ2VuZXJhdGVMaXN0KHNvdXJjZUlkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2VMaXN0ID0gW3NvdXJjZUlkXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ncmFwaC5kYXRhU291cmNlLmhhc0NoaWxkKHRhcmdldElkKSA9PT0gdHJ1ZSkgey8vTm90IGEgY29udGFpbmVyIG5vZGUsIG5lZWQgdG8gYWdncmVnYXRlXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExpc3QgPSB0aGlzLmdlbmVyYXRlTGlzdCh0YXJnZXRJZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGlzdCA9IFt0YXJnZXRJZF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJHN0YXRlLmdvKCdjb250aXYubWVudS52aXN1YWxpemF0aW9uLmVkZ2UnLCBcbiAgICAgICAgICAgICAgICAgICAge3NvdXJjZU5hbWU6IHNvdXJjZUlkLCB0YXJnZXROYW1lOiB0YXJnZXRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUxpc3Q6IHNvdXJjZUxpc3QsIHRhcmdldExpc3Q6IHRhcmdldExpc3R9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW91c2Vkb3duKGQzcGF0aCwgZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlld0VkZ2UoZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgUG9saWN5OiBQYXRoQ2hhbmdlVmlld1BvbGljeVxuICAgICAgICB9XG59XSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzE4LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LmFwcGxpY2F0aW9uZ3JvdXBzJywgWydjb250aXYubW9kZWxzJywgJ2NvbnRpdi5kaXJlY3RpdmVzJywgJ2NvbnRpdi51dGlscyddKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5hcHBsaWNhdGlvbmdyb3VwcycsIHtcbiAgICAgICAgICAgIHVybDogJy9hcHBsaWNhdGlvbmdyb3VwcycsXG4gICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnPGRpdiB1aS12aWV3IGNsYXNzPVwidWkgY29udGFpbmVyXCIvPidcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuYXBwbGljYXRpb25ncm91cHMuY3JlYXRlJywge1xuICAgICAgICAgICAgdXJsOiAnL2NyZWF0ZScsXG4gICAgICAgICAgICBjb21wb25lbnQ6ICdhcHBsaWNhdGlvbmdyb3VwY3JlYXRlJ1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5hcHBsaWNhdGlvbmdyb3Vwcy5kZXRhaWxzJywge1xuICAgICAgICAgICAgdXJsOiAnL2RldGFpbHMvOmtleScsXG4gICAgICAgICAgICBjb21wb25lbnQ6ICdhcHBsaWNhdGlvbmdyb3VwZGV0YWlscydcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuYXBwbGljYXRpb25ncm91cHMuZWRpdCcsIHtcbiAgICAgICAgICAgIHVybDogJy9lZGl0LzprZXknLFxuICAgICAgICAgICAgY29tcG9uZW50OiAnYXBwbGljYXRpb25ncm91cGRldGFpbHMnXG4gICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LmFwcGxpY2F0aW9uZ3JvdXBzLmxpc3QnLCB7XG4gICAgICAgICAgICB1cmw6ICcvbGlzdCcsXG4gICAgICAgICAgICBjb21wb25lbnQ6ICdhcHBsaWNhdGlvbkdyb3VwbGlzdCdcbiAgICAgICAgfSk7XG4gICAgfV0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW9kdWxlLmpzLm1hcCIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xOC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5kYXNoYm9hcmQnLCBbJ2NvbnRpdi5tb2RlbHMnXSlcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuZGFzaGJvYXJkJywge1xuICAgICAgICAgICAgdXJsOiAnL2Rhc2hib2FyZCcsXG4gICAgICAgICAgICBjb21wb25lbnQ6ICdkYXNoYm9hcmQnXG4gICAgICAgIH0pO1xuICAgIH1dKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vZHVsZS5qcy5tYXAiLCIvKipcbiAqIEJhc2UgcG9saWN5IGNsYXNzIGZvciB0aGUgZ3JhcGggb2JqZWN0XG4gKiBcbiAqIFBvbGljaWVzIGFyZSB1c2VkIHRvIGlzb2xhdGUgZmVhdHVyZXMgZm9yIGEgZ3JhcGguXG4gKiBQb2xpY2llcyBjYW4gYmUgaW5zdGFsbGVkIG9uIG5vZGVzLCBsaW5rcywgb3IgdGhlIGdyYXBoLlxuICogRWFjaCBwb2xpY3kgaGFzIGludGVyYWN0aW9uIGhhbmRsZXJzIHRoYXQgd2lsbCBiZSBjYWxsZWQgYnkgdGhlIGdyYXBoXG4gKiBpZiBpbnN0YWxsZWQuIFBvbGljaWVzIGNhbiBhbHNvIG1vZGlmeSBncmFwaCBmdW5jdGlvbnMgKHNlZSBRVGlwUG9saWN5KS5cbiAqIE11bHRpcGxlIHBvbGljaWVzIGNhbiBiZSBpbnN0YWxsZWQgZm9yIGEgbm9kZSBvciBsaW5rLiBcbiAqIFxuICogVG8gd3JpdGUgeW91ciBvd24gcG9saWN5LCBjcmVhdGUgYSBuZXcgZmFjdG9yeSB0aGF0IHVzZXMgdGhlIHBvbGljeVxuICogeW91IHdhbnQgdG8gaW5oZXJpdCBhcyBhIGRlcGVuZGVuY3ksIGFuZCBleHRlbmQgaXRzIHBvbGljeS4gXG4gKiBSZXR1cm4gdGhlIGNsYXNzIG9iamVjdCB3aXRoIFBvbGljeSBhcyBrZXksIGFuZCBcbiAqIGFkZCB0aGUgcG9saWN5IHRvIHRoZSBQb2xpY3lTZXJ2aWNlIGZhY3RvcnkuXG4gKiBcbiAqIEZvciBzYXZpbmcgc3RhdGUgb3IgY29uc3RzIGZvciB0aGUgcG9saWN5LCBjcmVhdGUgYSBuYW1lc3BhY2VcbiAqIGluIGdyYXBoLnN0YXRlIGFuZCBncmFwaC5jb25zdHMuXG4gKiBFeC4gXG4gKiAgICAgIGdyYXBoLnN0YXRlLm15UG9saWN5ID0ge307XG4gKiAgICAgIGdyYXBoLmNvbnN0cy5teVBvbGljeSA9IHt9O1xuICogICAgICBcbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5ncmFwaCcpXG4gICAgLmZhY3RvcnkoJ1BvbGljeScsIFtmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsYXNzIFBvbGljeSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENvbnN0cnVjdHMgdGhlIG9iamVjdC5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7c3RyaW5nfSAgcG9saWN5TmFtZSAgVGhlIHBvbGljeSBuYW1lXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKHBvbGljeU5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvbGljeU5hbWUgPSBwb2xpY3lOYW1lO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGggPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWxsZWQgd2hlbiB0aGUgcG9saWN5IGlzIGluc3RhbGxlZC5cbiAgICAgICAgICAgICAqIFxuICAgICAgICAgICAgICogQHBhcmFtICB7R3JhcGh9ICBncmFwaCAgIFRoZSBHcmFwaCB0aGF0IHRoZSBwb2xpY3kgaXNcbiAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICBiZWluZyBpbnN0YWxsZWQgb25cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaW5pdGlhbGl6ZShncmFwaCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGggPSBncmFwaDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBIYW5kbGVyLCBtZWFudCB0byBiZSBvdmVycmlkZGVuIGluIHN1YmNsYXNzZXNcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtkMyBvYmplY3R9ICAgIGQzb2JqICAgIFRoZSBkM29iamVjdFxuICAgICAgICAgICAgICogQHBhcmFtICB7Tm9kZS9MaW5rL0dyYXBofSAgZCAgIFRoZSBvYmplY3QgaXQgd2FzXG4gICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFsbGVkIGZvci4gICAgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG1vdXNlb3ZlciAoZDNvYmosIGQpIHt9XG4gICAgICAgICAgICBkYmxjbGljayhkM29iaiwgZCkge31cbiAgICAgICAgICAgIGNvbnRleHRtZW51KGQzb2JqLCBkKSB7fVxuICAgICAgICAgICAgbW91c2VvdXQoZDNvYmosIGQpIHt9XG4gICAgICAgICAgICBtb3VzZWRvd24oZDNvYmosIGQpIHt9XG4gICAgICAgICAgICBtb3VzZXVwKGQzb2JqLCBkKSB7fVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGdyYXBoIGlzIGJlaW5nIGRlc3Ryb3llZC5cbiAgICAgICAgICAgICAqIFVzZWQgdG8gcmVtb3ZlIGFueSBlbGVtZW50cyBvciBiaW5kaW5ncyB0aGUgcG9saWN5XG4gICAgICAgICAgICAgKiBoYXMgYWRkZWQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGRlc3Ryb3koKSB7fVxuICAgICAgICB9XG4gICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgUG9saWN5OiBQb2xpY3lcbiAgICAgICAgfVxufV0pO1xuXG5cblxuXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTkvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubG9naW4nLCBbJ2NvbnRpdi51dGlscyddKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vZHVsZS5qcy5tYXAiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTkvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubWVudScsIFtdKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vZHVsZS5qcy5tYXAiLCIvKipcbiAqIENvbnRhaW5zIGFsbCB0aGUgcG9saWNpZXMuXG4gKiBTZWUgcG9saWN5LmpzIGZvciBpbmZvIG9uIGhvdyBwb2xpY2llcyB3b3JrLlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LmdyYXBoJylcbiAgICAuZmFjdG9yeSgnUG9saWN5U2VydmljZScsIFsnUG9saWN5JywnUVRpcFBvbGljeScsICdQYXRoQ2hhbmdlVmlld1BvbGljeScsIFxuICAgICAgICAnTm9kZVNlbGVjdGlvblBvbGljeScsICdTcGxpdEpvaW5Ob2RlUG9saWN5JywgJ1NwbGl0Sm9pblZpZXdQb2xpY3knLFxuICAgICAgICAnU2F2ZVN0YXRlUG9saWN5JyxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChQb2xpY3ksIFFUaXBQb2xpY3ksIFBhdGhDaGFuZ2VWaWV3UG9saWN5LFxuICAgICAgICAgICAgICAgICAgICAgICAgTm9kZVNlbGVjdGlvblBvbGljeSwgIFNwbGl0Sm9pbk5vZGVQb2xpY3ksIFxuICAgICAgICAgICAgICAgICAgICAgICAgU3BsaXRKb2luVmlld1BvbGljeSwgU2F2ZVN0YXRlUG9saWN5KSB7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBQb2xpY3k6IFBvbGljeS5Qb2xpY3ksXG4gICAgICAgICAgICAgICAgICAgIFFUaXBQb2xpY3k6IFFUaXBQb2xpY3kuUG9saWN5LFxuICAgICAgICAgICAgICAgICAgICBQYXRoQ2hhbmdlVmlld1BvbGljeTogUGF0aENoYW5nZVZpZXdQb2xpY3kuUG9saWN5LFxuICAgICAgICAgICAgICAgICAgICBOb2RlU2VsZWN0aW9uUG9saWN5OiBOb2RlU2VsZWN0aW9uUG9saWN5LlBvbGljeSxcbiAgICAgICAgICAgICAgICAgICAgU3BsaXRKb2luTm9kZVBvbGljeTogU3BsaXRKb2luTm9kZVBvbGljeS5Qb2xpY3ksXG4gICAgICAgICAgICAgICAgICAgIFNwbGl0Sm9pblZpZXdQb2xpY3k6IFNwbGl0Sm9pblZpZXdQb2xpY3kuUG9saWN5LFxuICAgICAgICAgICAgICAgICAgICBTYXZlU3RhdGVQb2xpY3k6IFNhdmVTdGF0ZVBvbGljeS5Qb2xpY3lcbiAgICAgICAgICAgICAgICB9XG59XSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzE4LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm5ldHdvcmtwb2xpY2llcycsIFsnY29udGl2Lm1vZGVscycsICdjb250aXYuZGlyZWN0aXZlcycsICdjb250aXYudXRpbHMnXSlcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzJywge1xuICAgICAgICAgICAgdXJsOiAnL25ldHdvcmtwb2xpY2llcycsXG4gICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnPGRpdiB1aS12aWV3IGNsYXNzPVwidWkgY29udGFpbmVyXCIvPidcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzLmlzb2xhdGlvbicsIHtcbiAgICAgICAgICAgIHVybDogJy9pc29sYXRpb24nLFxuICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJzx1aS12aWV3Lz4nXG4gICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5ldHdvcmtwb2xpY2llcy5pc29sYXRpb24uY3JlYXRlJywge1xuICAgICAgICAgICAgdXJsOiAnL2NyZWF0ZScsXG4gICAgICAgICAgICBjb21wb25lbnQ6ICdpc29sYXRpb25wb2xpY3ljcmVhdGUnXG4gICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5ldHdvcmtwb2xpY2llcy5pc29sYXRpb24uZGV0YWlscycsIHtcbiAgICAgICAgICAgIHVybDogJy9kZXRhaWxzLzprZXknLFxuICAgICAgICAgICAgY29tcG9uZW50OiAnaXNvbGF0aW9ucG9saWN5ZGV0YWlscydcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzLmlzb2xhdGlvbi5lZGl0Jywge1xuICAgICAgICAgICAgdXJsOiAnL2VkaXQvOmtleScsXG4gICAgICAgICAgICBjb21wb25lbnQ6ICdpc29sYXRpb25wb2xpY3lkZXRhaWxzJ1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMuYmFuZHdpZHRoJywge1xuICAgICAgICAgICAgdXJsOiAnL2JhbmR3aWR0aCcsXG4gICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnPHVpLXZpZXcvPidcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzLmJhbmR3aWR0aC5jcmVhdGUnLCB7XG4gICAgICAgICAgICB1cmw6ICcvY3JlYXRlJyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogJ2JhbmR3aWR0aHBvbGljeWNyZWF0ZSdcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzLmJhbmR3aWR0aC5kZXRhaWxzJywge1xuICAgICAgICAgICAgdXJsOiAnL2RldGFpbHMvOmtleScsXG4gICAgICAgICAgICBjb21wb25lbnQ6ICdiYW5kd2lkdGhwb2xpY3lkZXRhaWxzJ1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMuYmFuZHdpZHRoLmVkaXQnLCB7XG4gICAgICAgICAgICB1cmw6ICcvZWRpdC86a2V5JyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogJ2JhbmR3aWR0aHBvbGljeWRldGFpbHMnXG4gICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5ldHdvcmtwb2xpY2llcy5yZWRpcmVjdGlvbicsIHtcbiAgICAgICAgICAgIHVybDogJy9yZWRpcmVjdGlvbicsXG4gICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnPHVpLXZpZXcvPidcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzLmxpc3QnLCB7XG4gICAgICAgICAgICB1cmw6ICcvbGlzdCcsXG4gICAgICAgICAgICAvL2Fic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgY29tcG9uZW50OiAnbmV0d29ya3BvbGljaWVzdGFicydcbiAgICAgICAgfSk7XG4gICAgfV0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW9kdWxlLmpzLm1hcCIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xOC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5uZXR3b3JrcycsIFsnY29udGl2Lm1vZGVscycsICdjb250aXYuZGlyZWN0aXZlcycsICdjb250aXYudXRpbHMnXSlcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2NvbnRpdi5tZW51Lm5ldHdvcmtzJywge1xuICAgICAgICAgICAgdXJsOiAnL25ldHdvcmtzJyxcbiAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IHVpLXZpZXcgY2xhc3M9XCJ1aSBjb250YWluZXJcIi8+J1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3Jrcy5saXN0Jywge1xuICAgICAgICAgICAgdXJsOiAnL2xpc3QnLFxuICAgICAgICAgICAgY29tcG9uZW50OiAnbmV0d29ya0xpc3QnXG4gICAgICAgIH0pLlxuICAgICAgICAgICAgc3RhdGUoJ2NvbnRpdi5tZW51Lm5ldHdvcmtzLmRldGFpbHMnLCB7XG4gICAgICAgICAgICB1cmw6ICcvZGV0YWlscy86a2V5JyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogJ25ldHdvcmtkZXRhaWxzJ1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3Jrcy5jcmVhdGUnLCB7XG4gICAgICAgICAgICB1cmw6ICcvY3JlYXRlJyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogJ25ldHdvcmtjcmVhdGUnXG4gICAgICAgIH0pO1xuICAgIH1dKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vZHVsZS5qcy5tYXAiLCIvKipcbiAqIFRoaXMgcG9saWN5IGFkZHMgdG9vbHRpcCBmdW5jdGlvbmFsaXR5IHRvIG5vZGVzIGFuZCBsaW5rcy5cbiAqIFdoZW4gaW5zdGFsbGluZywgaW5zdGFsbCBvbiBib3RoIGxpbmtzIGFuZCBub2Rlcy5cbiAqIFxuICogVXNlcyB0aGUgcVRpcCBqUXVlcnkgcGx1Z2luXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuZ3JhcGgnKVxuICAgIC5mYWN0b3J5KCdRVGlwUG9saWN5JywgWydQb2xpY3knLCBmdW5jdGlvbiAoUG9saWN5KSB7XG4gICAgICAgIGNsYXNzIFFUaXBQb2xpY3kgZXh0ZW5kcyBQb2xpY3kuUG9saWN5IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ29uc3RydWN0cyB0aGUgb2JqZWN0LlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgICAgICBzdXBlcihcIlFUaXBQb2xpY3lcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsbGVkIHdoZW4gdGhlIHBvbGljeSBpcyBpbnN0YWxsZWRcbiAgICAgICAgICAgICAqIE1vZGlmaWVzIHRoZSB1cGRhdGVOZXdOb2RlcyBhbmQgXG4gICAgICAgICAgICAgKiB1cGRhdGVOZXdQYXRocyBtZXRob2Qgb2YgdGhlIGdyYXBoIHRvIGluc3RhbGwgcXRpcFxuICAgICAgICAgICAgICogb250byBlYWNoIG5vZGUgYW5kIHBhdGguXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge0dyYXBofSAgZ3JhcGggICBUaGUgZ3JhcGggaXQgaXMgXG4gICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbGxlZCBvblxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpbml0aWFsaXplKGdyYXBoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdXBlci5pbml0aWFsaXplKGdyYXBoKTtcblxuICAgICAgICAgICAgICAgIHZhciB0aGlzUG9saWN5ID0gdGhpcztcbiAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBncmFwaC5zdGF0ZS5RVGlwUG9saWN5ID0ge307XG5cbiAgICAgICAgICAgICAgICBzdGF0ZS5tb3VzZWRvd24gPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGdyYXBoLmNvbnN0cy5RVGlwUG9saWN5ID0ge307XG5cbiAgICAgICAgICAgICAgICAvL1RyYWNraW5nIG1vdXNlIGNsaWNrIHN0YXRlIHRvIG1ha2UgdG9vbHRpcFxuICAgICAgICAgICAgICAgIC8vZGlzYXBwZWFyIGlmIHRoZSBub2RlIGlzIGJlaW5nIGRyYWdnZWQuXG4gICAgICAgICAgICAgICAgJCgnI3Zpc3VhbGl6YXRpb24tZ3JhcGgnKS5tb3VzZXVwKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUubW91c2V1cCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy9vdmVycmlkZSB1cGRhdGVOZXdOb2RlcyBhbmQgdXBkYXRlTmV3UGF0aHNcbiAgICAgICAgICAgICAgICAvL3RvIGluc3RhbGwgcXRpcFxuICAgICAgICAgICAgICAgIHZhciBncmFwaFVwZGF0ZU5ld05vZGVzID0gZ3JhcGgudXBkYXRlTmV3Tm9kZXM7XG4gICAgICAgICAgICAgICAgZ3JhcGgudXBkYXRlTmV3Tm9kZXMgPSBmdW5jdGlvbihuZXdOb2Rlcykge1xuICAgICAgICAgICAgICAgICAgICBncmFwaFVwZGF0ZU5ld05vZGVzLmNhbGwoZ3JhcGgsIG5ld05vZGVzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1BvbGljeS51cGRhdGVOZXdOb2RlcyhuZXdOb2Rlcyk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHZhciBncmFwaFVwZGF0ZU5ld1BhdGhzID0gZ3JhcGgudXBkYXRlTmV3UGF0aHM7XG4gICAgICAgICAgICAgICAgZ3JhcGgudXBkYXRlTmV3UGF0aHMgPSBmdW5jdGlvbihuZXdQYXRocykge1xuICAgICAgICAgICAgICAgICAgICBncmFwaFVwZGF0ZU5ld1BhdGhzLmNhbGwoZ3JhcGgsIG5ld1BhdGhzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1BvbGljeS51cGRhdGVOZXdQYXRocyhuZXdQYXRocyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJlbW92ZXMgYWxsIHFUaXBzIGZyb20gdGhlIERPTS5cbiAgICAgICAgICAgICAqIENhbGxlZCB3aGVuIHRoZSBwb2xpY3kgaXMgdW5pbnN0YWxsZWQgb3JcbiAgICAgICAgICAgICAqIHRoZSBncmFwaCBpcyBkZXN0cm95ZWQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICAgICAgLy9yZW1vdmluZyBhbGwgcXRpcCBmcm9tIERPTVxuICAgICAgICAgICAgICAgICQoJ1tpZF49XCJxdGlwXCJdJykucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogS2VlcGluZyB0cmFjayBvZiBtb3VzZWRvd24gc3RhdGVcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7ZDNPYmplY3R9ICBkM29iaiAgVGhlIGQzIHBiamVjdFxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge05vZGUvTGlua30gIGQgICAgIFRoZSBtYXRjaGluZyBkYXRhIG9iamVjdFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBtb3VzZWRvd24oZDNvYmosIGQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB0aGlzR3JhcGguc3RhdGUuUVRpcFBvbGljeTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5tb3VzZWRvd24gPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEtlZXBpbmcgdHJhY2sgb2YgbW91c2Vkb3duIHN0YXRlXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge2QzT2JqZWN0fSAgZDNvYmogIFRoZSBkMyBwYmplY3RcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtOb2RlL0xpbmt9ICBkICAgICBUaGUgbWF0Y2hpbmcgZGF0YSBvYmplY3RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbW91c2V1cChkM29iaiwgZCkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5RVGlwUG9saWN5O1xuICAgICAgICAgICAgICAgIHN0YXRlLm1vdXNlZG93biA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aGVuUVRpcEF2YWlsYWJsZShjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzUG9saWN5ID0gdGhpcztcbiAgICAgICAgICAgICAgICB2YXIgaW50ZXJ2YWwgPSA1MDA7IC8vIG1zXG4gICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkKGRvY3VtZW50KS5xdGlwICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCh0aGlzUG9saWN5LndoZW5RVGlwQXZhaWxhYmxlKGNhbGxiYWNrKSwgaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgaW50ZXJ2YWwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGxlZCB3aGVuIE5ldyBOb2RlcyBhcmUgYWRkZWQgZHVyaW5nIHRoZVxuICAgICAgICAgICAgICogdXBkYXRlIGdyYXBoIGZ1bmN0aW9uXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge2QzTm9kZX0gIG5ld05vZGVzICBUaGUgbmV3IG5vZGVzIHRoYXQgYXJlXG4gICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlaW5nIGFkZGVkIHRvIHRoZSBncmFwaFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB1cGRhdGVOZXdOb2RlcyhuZXdOb2Rlcykge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5RVGlwUG9saWN5O1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gYXR0YWNoUVRpcCgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9hdHRhY2hpbmcgcXRpcFxuICAgICAgICAgICAgICAgICAgICBuZXdOb2Rlcy5lYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aGlzTm9kZSA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXh0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0lmIG5vZGUgaGFzIGNoaWxkcmVuLCB0aGVuIGl0IGlzIGEgc2VydmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNHcmFwaC5kYXRhU291cmNlLmNoaWxkcmVuX3N0cnVjdFtkLmlkXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IFwiPGI+PHU+U2VsZWN0b3JzOjwvYj48L3U+IFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3Rvck1hcCA9IHRoaXNHcmFwaC5kYXRhU291cmNlLnNlbGVjdG9yc1tkLmlkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGFzS2V5cyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBzZWxlY3Rvck1hcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNLZXlzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBrZXkgKyBcIiA6IDxpPlwiKyBzZWxlY3Rvck1hcFtrZXldICsgXCI8L2k+LFxcbiBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc0tleXMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29tbWEgd2lsbCBiZSByZW1vdmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSBcIk5vIFNlbGVjdG9ycywgXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSBcIjxiPjx1PkxhYmVsczo8L2I+PC91PiBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGFiZWxzTWFwID0gdGhpc0dyYXBoLmRhdGFTb3VyY2UubGFiZWxzW2QuaWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoYXNLZXlzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGxhYmVsc01hcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNLZXlzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBrZXkgKyBcIiA6IDxpPlwiKyBsYWJlbHNNYXBba2V5XSArIFwiPC9pPixcXG4gXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNLZXlzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbW1hIHdpbGwgYmUgcmVtb3ZlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gXCJObyBsYWJlbHMsIFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcmVtb3ZlIGxhc3QgY29tbWFcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSB0ZXh0LnNsaWNlKDAsIC0yKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzTm9kZSkucXRpcCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogZC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRzOiB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcGkgPSAkKHRoaXNOb2RlKS5xdGlwKCdhcGknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSAkKCcjZ3JhcGhDb250YWluZXInKS5vZmZzZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IFtvZmZzZXQubGVmdCArICgoZC54ICogdGhpc0dyYXBoLmRyYWdTdmcuc2NhbGUoKSkgKyB0aGlzR3JhcGguZHJhZ1N2Zy50cmFuc2xhdGUoKVswXSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQudG9wICsgKChkLnkgK2QucmFkaXVzKSAqIHRoaXNHcmFwaC5kcmFnU3ZnLnNjYWxlKCkpICArIHRoaXNHcmFwaC5kcmFnU3ZnLnRyYW5zbGF0ZSgpWzFdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwaS5zZXQoJ3Bvc2l0aW9uLnRhcmdldCcsIHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhc3RhdGUubW91c2Vkb3duO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2xvOiAkKCcjdmlzdWFsaXphdGlvbi1ncmFwaCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiAncXRpcC1ibHVlIHF0aXAtc2hhZG93J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXk6ICd0b3AgY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXQ6ICdib3R0b20gY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0YXJnZXQ6IHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiAnbW91c2Vkb3duIG1vdXNlbGVhdmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vaW5jYXNlIGxpYnJhcnkgaGFzbid0IGxvYWRlZCB5ZXRcbiAgICAgICAgICAgICAgICBpZiAoJChkb2N1bWVudCkucXRpcCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNoUVRpcCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2hlblFUaXBBdmFpbGFibGUoYXR0YWNoUVRpcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGxlZCB3aGVuIG5ldyBwYXRocyBhcmUgYWRkZWQgZHVyaW5nIHRoZVxuICAgICAgICAgICAgICogdXBkYXRlIGdyYXBoIGZ1bmN0aW9uXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge2QzUGF0aH0gIG5ld1BhdGhzICBUaGUgbmV3IHBhdGhzIHRoYXQgYXJlXG4gICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlaW5nIGFkZGVkIHRvIHRoZSBncmFwaFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB1cGRhdGVOZXdQYXRocyhuZXdQYXRocykge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5RVGlwUG9saWN5O1xuXG4gICAgICAgICAgICAgICAgLy9pbmNhc2UgbGlicmFyeSBoYXNuJ3QgbG9hZGVkIHlldFxuICAgICAgICAgICAgICAgIGlmICgkKGRvY3VtZW50KS5xdGlwICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvL2FkZGluZyBxdGlwXG4gICAgICAgICAgICAgICAgICAgIG5ld1BhdGhzLmVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRoaXNQYXRoID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZ2V0dGluZyBtaWRwb2ludCBvZiBwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGF0aEVsICAgPSBkMy5zZWxlY3QodGhpcykubm9kZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pZHBvaW50ID0gcGF0aEVsLmdldFBvaW50QXRMZW5ndGgocGF0aEVsLmdldFRvdGFsTGVuZ3RoKCkvMik7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0UmV0ID0gZC5xdGlwSGVscGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IFwiQnl0ZXM6IFwiICsgZC5nZXRXZWlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpc1BhdGgpLnF0aXAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pZiBtb3VzZSBpcyBkb3duLCBkb24ndCBsZXQgcXRpcCBzaG93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIXN0YXRlLm1vdXNlZG93bjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29sbzogJCgnI2dyYXBoQ29udGFpbmVyJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6ICdxdGlwLWJsdWUgcXRpcC1zaGFkb3cnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteTogdGFyZ2V0UmV0Lm15LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdDogJ2NlbnRlciBjZW50ZXInLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiAnbW91c2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGp1c3Q6IHRhcmdldFJldC5hZGp1c3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6ICdtb3VzZWRvd24gbW91c2VsZWF2ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBQb2xpY3k6IFFUaXBQb2xpY3lcbiAgICAgICAgfVxufV0pO1xuXG5cblxuXG5cblxuXG5cbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xOC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5ub2RlcycsIFsnY29udGl2Lm1vZGVscycsICdjb250aXYuZGlyZWN0aXZlcycsICdjb250aXYudXRpbHMnXSlcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubm9kZXMnLCB7XG4gICAgICAgICAgICB1cmw6ICcvbm9kZXMnLFxuICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJzxkaXYgdWktdmlldyBjbGFzcz1cInVpIGNvbnRhaW5lclwiLz4nXG4gICAgICAgIH0pO1xuICAgIH1dKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vZHVsZS5qcy5tYXAiLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2Lm9yZ2FuaXphdGlvbnMnLCBbJ2NvbnRpdi5tb2RlbHMnLCAnY29udGl2LmRpcmVjdGl2ZXMnLCAnY29udGl2LnV0aWxzJ10pXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdjb250aXYubWVudS5vcmdhbml6YXRpb25zJywge1xuICAgICAgICAgICAgdXJsOiAnL29yZ2FuaXphdGlvbnMnLFxuICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJzxkaXYgdWktdmlldyBjbGFzcz1cInVpIGNvbnRhaW5lclwiLz4nXG4gICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm9yZ2FuaXphdGlvbnMubGlzdCcsIHtcbiAgICAgICAgICAgIHVybDogJy9saXN0JyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogJ29yZ2FuaXphdGlvbmxpc3QnXG4gICAgICAgIH0pO1xuICAgIH1dKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vZHVsZS5qcy5tYXAiLCIvKipcbiAqIFRoaXMgcG9saWN5IHByb3ZpZGVzIGEgd2F5IGZvciBwcm9wZXJ0aWVzIHRvIGJlIHNhdmVkIFxuICogYmV0d2VlbiB2aWV3IGNoYW5nZXNcbiAqIFxuICogSXQgbW9kaWZpZXMgdGhlIGRlc3Ryb3kgZnVuY3Rpb24gdG8gYWxzbyBwYXNzIGluIGFuIG9iamVjdCB0aGF0XG4gKiB3aWxsIGhhdmUgYWxsIGl0cyBwcm9wZXJ0aWVzIHNhdmVkIGFuZCB3aWxsIGJlIGF2YWlsYWJsZSBcbiAqIG9uIGdyYXBoIGxvYWQuIFdoZW4gc2F2aW5nIHZhcmlhYmxlcyB0byB0aGUgb2JqZWN0LCBuYW1lc3BhY2Ugd2l0aFxuICogdGhlIHBvbGljeSBuYW1lLlxuICogXG4gKiBUaGlzIHBvbGljeSBtdXN0IGJlIGxvYWRlZCBmaXJzdCBpbiBvcmRlciBmb3IgaXQgc2F2ZWQgdmFyaWFibGVzIFxuICogdG8gYmUgbG9hZGVkIHdoZW4gdGhlIHZpZXcgY29tZXMgYmFjayB0byB0aGUgZ3JhcGhcbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5ncmFwaCcpXG4gICAgLmZhY3RvcnkoJ1NhdmVTdGF0ZVBvbGljeScsIFsnUG9saWN5JywgZnVuY3Rpb24gKFBvbGljeSkge1xuICAgIFx0Y2xhc3MgU2F2ZVN0YXRlUG9saWN5IGV4dGVuZHMgUG9saWN5LlBvbGljeSB7XG4gICAgXHRcdFxuICAgIFx0XHQvKipcbiAgICBcdFx0ICogVGFrZXMgaW4gdGhlIGFuZ3VsYXIgc2VydmljZSB0byB3aGljaCBpdCB3aWxsXG4gICAgXHRcdCAqIHNhdmUgaXQncyBwcm9wZXJ0aWVzIHRvLlxuICAgIFx0XHQgKlxuICAgIFx0XHQgKiBAcGFyYW0gICAgICB7T2JqZWN0fSAgc2F2ZWRTdGF0ZSAgT2JqZWN0IHRvIHNhdmUgXG4gICAgXHRcdCAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzIHRvXG4gICAgXHRcdCAqL1xuICAgIFx0XHRjb25zdHJ1Y3RvcihzYXZlZFN0YXRlKSB7XG4gICAgXHRcdFx0c3VwZXIoJ1NhdmVTdGF0ZVBvbGljeScpO1xuICAgIFx0XHRcdHRoaXMuc2F2ZWRTdGF0ZSA9IHNhdmVkU3RhdGU7XG4gICAgXHRcdH1cblxuICAgIFx0XHQvKipcbiAgICBcdFx0ICogQ2FsbGVkIHdoZW4gdGhlIHBvbGljeSBpcyBpbnN0YWxsZWRcbiAgICBcdFx0ICogTW9kaWZpZXMgdGhlIGRlc3Ryb3kgbWV0aG9kIFxuICAgIFx0XHQgKiBhbmQgYWRkcyBhIGxvYWQgbWV0aG9kIHRvIHRoZSBncmFwaFxuICAgIFx0XHQgKlxuICAgIFx0XHQgKiBAcGFyYW0gICAgICB7R3JhcGh9ICBncmFwaCAgIFRoZSBncmFwaCBpdCBpcyBcbiAgICBcdFx0ICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YWxsZWQgb25cbiAgICBcdFx0ICovXG4gICAgXHRcdGluaXRpYWxpemUoZ3JhcGgpIHtcbiAgICBcdFx0XHR0aGlzLmdyYXBoID0gZ3JhcGg7XG4gICAgXHRcdFx0dmFyIHRoaXNQb2xpY3kgPSB0aGlzO1xuICAgIFx0XHRcdGdyYXBoLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBcdFx0XHRcdHRoaXNQb2xpY3kuZ3JhcGhEZXN0cm95LmNhbGwoZ3JhcGgsIHRoaXNQb2xpY3kuc2F2ZWRTdGF0ZSk7XG4gICAgXHRcdFx0fTtcblxuICAgIFx0XHRcdGdyYXBoLmxvYWQgPSBmdW5jdGlvbihzYXZlZFN0YXRlKSB7XG4gICAgXHRcdFx0XHR0aGlzUG9saWN5LmdyYXBoTG9hZC5jYWxsKGdyYXBoLCBzYXZlZFN0YXRlKTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH1cblxuICAgIFx0XHQvKipcbiAgICBcdFx0ICogV2lsbCBvdmVycmlkZSB0aGUgZ3JhcGgncyBkZWZhdWx0IGRlc3Ryb3ksIHdpdGggXG4gICAgXHRcdCAqIHRoaXMgcG9saWN5J3Mgc2F2ZWRTdGF0ZSBwYXNzZWQgaW4uXG4gICAgXHRcdCAqIENhbGxlZCB3aXRoIHRoaXMgYXMgdGhlIGdyYXBoXG4gICAgXHRcdCAqXG4gICAgXHRcdCAqIEBwYXJhbSAgICAgIHtPYmplY3R9ICBzYXZlZFN0YXRlICBUaGUgc2F2ZWQgc3RhdGVcbiAgICBcdFx0ICovXG4gICAgXHRcdGdyYXBoRGVzdHJveShzYXZlZFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgIF8odGhpc0dyYXBoLmRlZmF1bHROb2RlUG9saWNpZXMpLmZvckVhY2goZnVuY3Rpb24ocG9saWN5KSB7XG4gICAgICAgICAgICAgICAgICAgIHBvbGljeS5kZXN0cm95KHNhdmVkU3RhdGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIF8odGhpc0dyYXBoLmRlZmF1bHRQYXRoUG9saWNpZXMpLmZvckVhY2goZnVuY3Rpb24ocG9saWN5KSB7XG4gICAgICAgICAgICAgICAgICAgIHBvbGljeS5kZXN0cm95KHNhdmVkU3RhdGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzR3JhcGguYmluZGluZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLm9mZihrZXksIHRoaXNHcmFwaC5iaW5kaW5nc1trZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogV2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgZ3JhcGggYXMgdGhpc1xuICAgICAgICAgICAgICogVXNlZCB0byBoYXZlIGFsbCBvdGhlciBwb2xpY2llcyB1c2UgdGhlIGxvYWQgc3RhdGVcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7T2JqZWN0fSAgc2F2ZWRTdGF0ZSAgVGhlIHNhdmVkIHN0YXRlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdyYXBoTG9hZChzYXZlZFN0YXRlKSB7XG4gICAgICAgICAgICBcdHZhciB0aGlzR3JhcGggPSB0aGlzO1xuICAgICAgICAgICAgICAgICBfKHRoaXNHcmFwaC5kZWZhdWx0Tm9kZVBvbGljaWVzKS5mb3JFYWNoKGZ1bmN0aW9uKHBvbGljeSkge1xuICAgICAgICAgICAgICAgICBcdGlmIChwb2xpY3kubG9hZCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIFx0cG9saWN5LmxvYWQoc2F2ZWRTdGF0ZSk7XG4gICAgICAgICAgICAgICAgIFx0fVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIF8odGhpc0dyYXBoLmRlZmF1bHRQYXRoUG9saWNpZXMpLmZvckVhY2goZnVuY3Rpb24ocG9saWN5KSB7XG4gICAgICAgICAgICAgICAgIFx0aWYgKHBvbGljeS5sb2FkICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgXHRwb2xpY3kubG9hZChzYXZlZFN0YXRlKTtcbiAgICAgICAgICAgICAgICAgXHR9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgXHR9XG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRQb2xpY3k6IFNhdmVTdGF0ZVBvbGljeVxuICAgIFx0fVxufV0pO1xuXG5cblxuXG5cblxuXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTgvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuc2VydmljZWxicycsIFsnY29udGl2Lm1vZGVscycsICdjb250aXYuZGlyZWN0aXZlcycsICdjb250aXYudXRpbHMnXSlcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc2VydmljZWxicycsIHtcbiAgICAgICAgICAgIHVybDogJy9zZXJ2aWNlbGJzJyxcbiAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IHVpLXZpZXcgY2xhc3M9XCJ1aSBjb250YWluZXJcIi8+J1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5zZXJ2aWNlbGJzLmxpc3QnLCB7XG4gICAgICAgICAgICB1cmw6ICcvbGlzdCcsXG4gICAgICAgICAgICBjb21wb25lbnQ6ICdzZXJ2aWNlbGJMaXN0J1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5zZXJ2aWNlbGJzLmNyZWF0ZScsIHtcbiAgICAgICAgICAgIHVybDogJy9jcmVhdGUnLFxuICAgICAgICAgICAgY29tcG9uZW50OiAnc2VydmljZWxiQ3JlYXRlJ1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5zZXJ2aWNlbGJzLmRldGFpbHMnLCB7XG4gICAgICAgICAgICB1cmw6ICcvZGV0YWlscy86a2V5JyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogJ3NlcnZpY2VsYkRldGFpbHMnXG4gICAgICAgIH0pO1xuICAgIH1dKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vZHVsZS5qcy5tYXAiLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2LnNldHRpbmdzJywgWydjb250aXYubW9kZWxzJywgJ2NvbnRpdi5kaXJlY3RpdmVzJywgJ2NvbnRpdi51dGlscyddKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5zZXR0aW5ncycsIHtcbiAgICAgICAgICAgIHVybDogJy9nbG9iYWwnLFxuICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJzxkaXYgdWktdmlldyBjbGFzcz1cInVpIGNvbnRhaW5lclwiLz4nXG4gICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnNldHRpbmdzLmRldGFpbHMnLCB7XG4gICAgICAgICAgICB1cmw6ICcvc2V0dGluZ3MnLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzZXR0aW5ncy9zZXR0aW5nc21lbnUuaHRtbCdcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc2V0dGluZ3MuZGV0YWlscy5sb2dzJywge1xuICAgICAgICAgICAgdXJsOiAnL2xvZ3MnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJycsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJydcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc2V0dGluZ3MuZGV0YWlscy5hdXRoJywge1xuICAgICAgICAgICAgdXJsOiAnL2F1dGgnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJycsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJydcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc2V0dGluZ3MuZGV0YWlscy5saWNlbnNlJywge1xuICAgICAgICAgICAgdXJsOiAnL2xpY2Vuc2UnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJycsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJydcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc2V0dGluZ3MuZGV0YWlscy5wb2xpY2llcycsIHtcbiAgICAgICAgICAgIHVybDogJy9wb2xpY2llcycsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnJyxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnJ1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5zZXR0aW5ncy5kZXRhaWxzLm5ldHdvcmtzJywge1xuICAgICAgICAgICAgdXJsOiAnL25ldHdvcmtzJyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogJ25ldHdvcmtzZXR0aW5nJ1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5zZXR0aW5ncy5kZXRhaWxzLnZvbHVtZXMnLCB7XG4gICAgICAgICAgICB1cmw6ICcvdm9sdW1lcycsXG4gICAgICAgICAgICBjb21wb25lbnQ6ICd2b2x1bWVzZXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb2R1bGUuanMubWFwIiwiLyoqXG4gKiBUaGlzIHBvbGljeSBpcyB1c2VkIGZvciBzcGxpdHRpbmcgYSBub2RlIGludG8gaXRzIGNoaWxkcmVuLFxuICogYW5kIGpvaW5pbmcgdGhlbSBiYWNrIHRvIHRoZWlyIHBhcmVudC5cbiAqIFNwbGl0cyBvbiBkb3VibGUgY2xpY2ssIGFuZCBqb2lucyBvbiByaWdodCBjbGljay5cbiAqIElmIG11bHRpcGxlIG5vZGVzIGFyZSBzZWxlY3RlZCBhdCB0aGUgdGltZSBvZiBhIHNwbGl0IG9yIGpvaW4gZXZlbnQsXG4gKiBpdCB3aWxsIHNwbGl0IG9yIGpvaW4gYWxsIG9mIHRoZW0uXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuZ3JhcGgnKVxuICAgIC5mYWN0b3J5KCdTcGxpdEpvaW5Ob2RlUG9saWN5JywgWydOb2RlU2VsZWN0aW9uUG9saWN5JywgJ1Zpc3VhbGl6ZXJOb2RlJywgXG4gICAgXHRcdGZ1bmN0aW9uIChOb2RlU2VsZWN0aW9uUG9saWN5LCBWaXN1YWxpemVyTm9kZSkge1xuXHRcdGNsYXNzIFNwbGl0Sm9pbk5vZGVQb2xpY3kgZXh0ZW5kcyBOb2RlU2VsZWN0aW9uUG9saWN5LlBvbGljeSB7XG5cdFx0XHQvKipcblx0XHRcdCAqIENvbnN0cnVjdHMgdGhlIG9iamVjdC5cblx0XHRcdCAqL1xuICAgICAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvbGljeU5hbWUgPSBcIlNwbGl0Sm9pbk5vZGVQb2xpY3lcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWxsZWQgd2hlbiBwb2xpY3kgaXMgaW5zdGFsbGVkXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge0dyYXBofSAgZ3JhcGggICBUaGUgZ3JhcGhcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaW5pdGlhbGl6ZShncmFwaCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZShncmFwaCk7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gZ3JhcGguc3RhdGUuU3BsaXRKb2luTm9kZVBvbGljeSA9IHt9O1xuICAgICAgICAgICAgICAgIHN0YXRlLnNwbGl0Tm9kZXMgPSBbXTsgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVHJpZ2dlcmluZyBzcGxpdCBvbiBkb3VibGUgY2xpY2tcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7RDNPYmplY3R9ICBkM25vZGUgIFRoZSBkMyBub2RlXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7T2JqZWN0fSAgZCAgICAgIFRoZSBtYXRjaGluZyBkYXRhIG9iamVjdFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBkYmxjbGljayhkM25vZGUsIGQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaCxcbiAgICAgICAgICAgICAgICAgICAgc3VwZXJTdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5TcGxpdEpvaW5Ob2RlUG9saWN5O1xuXG4gICAgICAgICAgICAgICAgaWYgKCFkMy5ldmVudC5jdHJsS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdXBlclN0YXRlLnNlbGVjdGVkTm9kZXMuaW5kZXhPZihkKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwbGl0TXVsdGlwbGVOb2RlcyhzdXBlclN0YXRlLnNlbGVjdGVkTm9kZXMpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBbGxTZWxlY3RlZE5vZGVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwbGl0Tm9kZShkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUcmlnZ2VyaW5nIGpvaW4gb24gcmlnaHQgY2xpY2tcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7RDNPYmp9ICBkM25vZGUgIFRoZSBkMyBub2RlXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7T2JqZWN0fSAgZCAgICAgIFRoZSBtYXRjaGluZyBkYXRhIG9iamVjdFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb250ZXh0bWVudShkM25vZGUsIGQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaCxcbiAgICAgICAgICAgICAgICAgICAgc3VwZXJTdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5Ob2RlU2VsZWN0aW9uUG9saWN5O1xuICAgICAgICAgICAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgaWYgKCFkMy5ldmVudC5jdHJsS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vaWYgdHJ5IHRvIGpvaW4gYSBoaWdobGlnaHRlZCBub2RlIHdoaWxlIG11bHRpcGxlIG5vZGVzIGFyZSBzZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgLy93ZSBqb2luIGFsbCBoaWdobGlnaHRlZCBub2Rlc1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWROb2RlcyA9IHN1cGVyU3RhdGUuc2VsZWN0ZWROb2RlcztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkTm9kZXMuaW5kZXhPZihkKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmpvaW5Ob2RlKHNlbGVjdGVkTm9kZXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9pZiB3ZSB0cnkgdG8gam9pbiBhIG5vZGUgdGhhdCBpc24ndCBwYXJ0IG9mIGEgaGlnaGxpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy93ZSByZW1vdmUgYWxsIGhpZ2hsaWdodHMgYW5kIHRoZW4gam9pbiB0aGUgY2xpY2tlZCBub2RlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUFsbFNlbGVjdGVkTm9kZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuam9pbk5vZGUoZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU3BsaXRzIGEgbm9kZS5cbiAgICAgICAgICAgICAqIHVzZWQgdG8gc2hhcmUgY29kZSBiZXR3ZWVuIHNwbGl0Tm9kZSBhbmQgc3BsaXRNdWx0aXBsZU5vZGVzXG4gICAgICAgICAgICAgKiB3aGlsZSBwcmV2ZW50aW5nIHRoZSBoYW5kbGVycyBmb3IgdGhlbSBib3RoIGZpcmluZ1xuICAgICAgICAgICAgICogXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7Tm9kZX0gIG5vZGUgICAgVGhlIG5vZGUgYmVpbmcgc3BsaXRcbiAgICAgICAgICAgICAqIEByZXR1cm4gICAgIHtBcnJheX0gIFRoZSBuZXcgbm9kZXMgY3JlYXRlZCBieSB0aGUgc3BsaXRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgX19zcGxpdE5vZGUobm9kZSkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5TcGxpdEpvaW5Ob2RlUG9saWN5O1xuICAgICAgICAgICAgICAgIHZhciBuYW1lID0gbm9kZS5pZDtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRyZW5fc3RydWN0ID0gdGhpc0dyYXBoLmRhdGFTb3VyY2UuY2hpbGRyZW5fc3RydWN0O1xuICAgICAgICAgICAgICAgIC8vaWYgaXQgaGFzIG5vIGNoaWxkcmVuIHRvIHNwbGl0IGludG9cbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRyZW5fc3RydWN0W25hbWVdID09PSB1bmRlZmluZWQgfHwgXy5pc0VtcHR5KGNoaWxkcmVuX3N0cnVjdFtuYW1lXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vcmVtb3ZpbmcgdGhlIG5vZGUgZnJvbSB0aGUgbGlzdCBvZiBub2Rlc1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5ub2RlcyA9IF8uZmlsdGVyKHRoaXNHcmFwaC5ub2RlcywgZnVuY3Rpb24oZ3JhcGhOb2Rlcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ3JhcGhOb2RlcyAhPSBub2RlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXNHcmFwaC5ub2Rlcyk7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLnNwbGljZUxpbmtzRm9yTm9kZShub2RlKTtcblxuICAgICAgICAgICAgICAgIC8vZ2V0dGluZyBhbGwgdGhlIG5vZGUgaWQncyBmb3IgZmluZGluZyBmbG93XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVfbmFtZXNfc2V0ID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzR3JhcGgubm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZV9uYW1lc19zZXQucHVzaCh0aGlzR3JhcGgubm9kZXNbaV0uaWQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vc2V0IG9mIG5vZGVzIGFmdGVyIHRoZSBzcGxpdFxuICAgICAgICAgICAgICAgIHZhciBuZXdfbm9kZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuX3N0cnVjdFtuYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBub2RlX25hbWVzX3NldC5wdXNoKGNoaWxkcmVuX3N0cnVjdFtuYW1lXVtpXSk7XG4gICAgICAgICAgICAgICAgICAgIG5ld19ub2Rlcy5wdXNoKGNoaWxkcmVuX3N0cnVjdFtuYW1lXVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciByZXREYXRhID0gdGhpc0dyYXBoLmRhdGFTb3VyY2UuZ2V0Rmxvd0JldHdlZW5TZXQobm9kZV9uYW1lc19zZXQpO1xuXG4gICAgICAgICAgICAgICAgLy9mb3JtYXR0aW5nIGRhdGEgZm9yIG5ldyBub2Rlc1xuICAgICAgICAgICAgICAgIHZhciB4TG9jID0gbm9kZS54O1xuICAgICAgICAgICAgICAgIHZhciB5TG9jID0gbm9kZS55O1xuICAgICAgICAgICAgICAgIHZhciBhbmNlc3RvcnMgPSBub2RlLmFuY2VzdG9ycy5zbGljZSgpO1xuICAgICAgICAgICAgICAgIC8va2VlcGluZyBvcmRlcmluZyB0aGF0IGZpcnN0IGluIGFuY2VzdG9yIGxpc3QgaXMgY2xvc2VzdCBpbiByZWxhdGlvbnNoaXBcbiAgICAgICAgICAgICAgICBhbmNlc3RvcnMuc3BsaWNlKDAsIDAsIG5vZGUuaWQpO1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSBub2RlLmlkO1xuICAgICAgICAgICAgICAgIHZhciBuZXdfbm9kZV9vYmpzID0gW107XG4gICAgICAgICAgICAgICAgdmFyIHJhZGl1cyA9IG5vZGUucmFkaXVzICogdGhpc0dyYXBoLmNvbnN0cy5yYWRpdXNEZWNheTtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZURhdGEgPSByZXREYXRhLm5vZGVEYXRhO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy9jYWxjdWxhdGluZyB3aGljaCBvZiB0aGUgbm9kZXMgaW4gcmV0RGF0YVswXSBhcmUgbmV3XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdfbm9kZXMuaW5kZXhPZihub2RlRGF0YVtpXS5pZCkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkID0gbm9kZURhdGFbaV0uaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IG5vZGVEYXRhW2ldLnRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3X25vZGUgPSBuZXcgVmlzdWFsaXplck5vZGUuTm9kZShudWxsLCBudWxsLCBpZCwgdGV4dCwgcmFkaXVzLCBwYXJlbnQsIGFuY2VzdG9ycywgeExvYywgeUxvYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdfbm9kZS5pbml0aWFsaXplKHRoaXNHcmFwaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGgubm9kZXMucHVzaChuZXdfbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdfbm9kZV9vYmpzLnB1c2gobmV3X25vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5saW5rcyA9IHRoaXNHcmFwaC5kYXRhU291cmNlLnByb2Nlc3NMaW5rRGF0YShyZXREYXRhLmxpbmtEYXRhLCB0aGlzR3JhcGgubm9kZXMpO1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5pbml0Tm9kZXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguaW5pdExpbmtzKCk7XG5cbiAgICAgICAgICAgICAgICBzdGF0ZS5zcGxpdE5vZGVzLnB1c2gobm9kZS5pZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld19ub2RlX29ianM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU3BsaXRzIHRoZSBnaXZlIG5vZGVcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7Tm9kZX0gIG5vZGUgICAgVGhlIG5vZGUgYmVpbmcgc3BsaXRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc3BsaXROb2RlKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzID0gdGhpcy5fX3NwbGl0Tm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNwbGl0Tm9kZUV2ZW50KHJlcyk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBTcGxpdHMgYWxsIHRoZSBub2RlcyBwYXNzZWQgaW5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7QXJyYXl9ICBub2RlcyAgIEFycmF5IG9mIG5vZGVzIHRvIGJlIHNwbGl0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNwbGl0TXVsdGlwbGVOb2Rlcyhub2Rlcykge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoO1xuICAgICAgICAgICAgICAgIHZhciByZXNOb2RlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcyA9IHRoaXMuX19zcGxpdE5vZGUobm9kZXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICByZXNOb2RlcyA9IHJlc05vZGVzLmNvbmNhdChyZXMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuc3BsaXRNdWx0aXBsZU5vZGVzRXZlbnQocmVzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWxsZWQgYWZ0ZXIgYSBzaW5nbGUgbm9kZSBpcyBzcGxpdFxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtBcnJheX0gIG5ld05vZGVzICBUaGUgbmV3IG5vZGVzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNwbGl0Tm9kZUV2ZW50KG5ld05vZGVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGg7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLnNldFBvc2l0aW9ucygpO1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC51cGRhdGVHcmFwaCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGxlZCBhZnRlciBtdWx0aXBsZSBub2RlcyBhcmUgc3BsaXQgYXQgb25jZVxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtBcnJheX0gIG5ld05vZGVzICBUaGUgbmV3IG5vZGVzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNwbGl0TXVsdGlwbGVOb2Rlc0V2ZW50KG5ld05vZGVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGg7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLnNldFBvc2l0aW9ucygpO1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC51cGRhdGVHcmFwaCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIHVzZWQgdG8gc2hhcmUgY29kZSBiZXR3ZWVuIGpvaW5Ob2RlIGFuZCBqb2luTXVsdGlwbGVOb2RlXG4gICAgICAgICAgICAgKiB3aGlsZSBwcmV2ZW50aW5nIGJvdGggaGFuZGxlcnMgZmlyaW5nXG4gICAgICAgICAgICAgKiBcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtOb2RlfSAgICAgICAgICBub2RlICAgIFRoZSBub2RlIHRvIGpvaW5cbiAgICAgICAgICAgICAqIEByZXR1cm4gICAgIHtOb2RlfSAgVGhlIG5ldyBub2RlIGFmdGVyIHRoZSBqb2luXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIF9fam9pbk5vZGUobm9kZSkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5TcGxpdEpvaW5Ob2RlUG9saWN5O1xuXG4gICAgICAgICAgICAgICAgLy9jaGVjayB0aGF0IG5vZGUgc3RpbGwgZXhpc3RzXG4gICAgICAgICAgICAgICAgaWYgKHRoaXNHcmFwaC5ub2Rlcy5pbmRleE9mKG5vZGUpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRyZW5fc3RydWN0ID0gdGhpc0dyYXBoLmRhdGFTb3VyY2UuY2hpbGRyZW5fc3RydWN0O1xuICAgICAgICAgICAgICAgIHZhciBuYW1lID0gbm9kZS5pZDtcbiAgICAgICAgICAgICAgICAvL2lmIGl0IGhhcyBubyBhbmNlc3Rvciwgbm90aGluZyB0byBqb2luXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuX3N0cnVjdC50b3BMZXZlbC5pbmRleE9mKG5hbWUpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciB0b19iZV9kZWxldGVkID0gW107XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVfbmFtZXNfc2V0ID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzR3JhcGgubm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy9pZiBub2RlIHdvbid0IGJlIGNvbGxhcHNlZFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpc0dyYXBoLm5vZGVzW2ldLmFuY2VzdG9ycy5pbmRleE9mKG5vZGUucGFyZW50KSA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZV9uYW1lc19zZXQucHVzaCh0aGlzR3JhcGgubm9kZXNbaV0uaWQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9fYmVfZGVsZXRlZC5wdXNoKHRoaXNHcmFwaC5ub2Rlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG5ld19ub2RlX2lkID0gbm9kZS5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgbm9kZV9uYW1lc19zZXQucHVzaChub2RlLnBhcmVudCk7XG5cbiAgICAgICAgICAgICAgICAvL2Zvcm1hdHRpbmcgZGF0YVxuICAgICAgICAgICAgICAgIHZhciByYWRpdXMgPSBub2RlLnJhZGl1cyAvIHRoaXNHcmFwaC5jb25zdHMucmFkaXVzRGVjYXk7IFxuICAgICAgICAgICAgICAgIHZhciB4TG9jID0gbm9kZS54O1xuICAgICAgICAgICAgICAgIHZhciB5TG9jID0gbm9kZS55O1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSBub2RlLmFuY2VzdG9yc1sxXTtcbiAgICAgICAgICAgICAgICB2YXIgYW5jZXN0b3JzID0gbm9kZS5hbmNlc3RvcnMuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgdmFyIG5ld19ub2RlID0gbmV3IFZpc3VhbGl6ZXJOb2RlLk5vZGUoeExvYywgeUxvYywgbmV3X25vZGVfaWQsIG5ld19ub2RlX2lkLCByYWRpdXMsIHBhcmVudCwgYW5jZXN0b3JzKTtcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgubm9kZXMucHVzaChuZXdfbm9kZSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgcmV0RGF0YSA9IHRoaXNHcmFwaC5kYXRhU291cmNlLmdldEZsb3dCZXR3ZWVuU2V0KG5vZGVfbmFtZXNfc2V0KTtcbiAgICAgICAgICAgICAgICAvL3JlbW92ZSBhbGwgbm9kZXMgdGhhdCB3aWxsIGJlIGpvaW5lZFxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9fYmVfZGVsZXRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZV90b19kZWxldGUgPSB0b19iZV9kZWxldGVkW2ldO1xuICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGgubm9kZXMuc3BsaWNlKHRoaXNHcmFwaC5ub2Rlcy5pbmRleE9mKG5vZGVfdG9fZGVsZXRlKSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5zcGxpY2VMaW5rc0Zvck5vZGUobm9kZV90b19kZWxldGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgubGlua3MgPSB0aGlzR3JhcGguZGF0YVNvdXJjZS5wcm9jZXNzTGlua0RhdGEocmV0RGF0YS5saW5rRGF0YSwgdGhpc0dyYXBoLm5vZGVzKTtcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguaW5pdE5vZGVzKCk7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmluaXRMaW5rcygpO1xuXG4gICAgICAgICAgICAgICAgc3RhdGUuc3BsaXROb2Rlcy5zcGxpY2Uoc3RhdGUuc3BsaXROb2Rlcy5pbmRleE9mKG5ld19ub2RlLmlkKSwgMSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3X25vZGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSm9pbnMgdGhlIGdpdmVuIG5vZGVcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7Tm9kZX0gIG5vZGUgICAgVGhlIG5vZGUgdG8gam9pblxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBqb2luTm9kZShub2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld05vZGUgPSB0aGlzLl9fam9pbk5vZGUobm9kZSk7XG4gICAgICAgICAgICAgICAgaWYgKG5ld05vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIFx0dGhpcy5qb2luTm9kZUV2ZW50KG5ld05vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBKb2lucyBhbGwgdGhlIGdpdmVuIG5vZGVzXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge0FycmF5fSAgbm9kZXMgICBUaGUgbm9kZXMgdG8gam9pblxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBqb2luTXVsdGlwbGVOb2RlKG5vZGVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld19ub2RlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcyA9IHRoaXMuX19qb2luTm9kZShub2Rlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIG5ld19ub2Rlcy5wdXNoKHJlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuam9pbk11bHRpcGxlTm9kZXNFdmVudChuZXdfbm9kZXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGxlZCBhZnRlciBhIHNpbmdsZSBub2RlIGlzIGpvaW5lZFxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtOb2RlfSAgbmV3Tm9kZSAgVGhlIG5ldyBub2RlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGpvaW5Ob2RlRXZlbnQobmV3Tm9kZSkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoO1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC51cGRhdGVHcmFwaCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGxlZCBhZnRlciBtdWx0aXBsZSBub2RlcyBhcmUgam9pbmVkXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge0FycmF5fSAgbmV3Tm9kZXMgIFRoZSBuZXcgbm9kZXNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgam9pbk11bHRpcGxlTm9kZXNFdmVudChuZXdOb2Rlcykge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoO1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC51cGRhdGVHcmFwaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFBvbGljeTogU3BsaXRKb2luTm9kZVBvbGljeVxuICAgICAgICB9XG59XSk7XG5cblxuXG5cbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xOC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5zdG9yYWdlcG9saWNpZXMnLCBbJ2NvbnRpdi5tb2RlbHMnLCAnY29udGl2LmRpcmVjdGl2ZXMnLCAnY29udGl2LnV0aWxzJ10pXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnN0b3JhZ2Vwb2xpY2llcycsIHtcbiAgICAgICAgICAgIHVybDogJy9zdG9yYWdlcG9saWNpZXMnLFxuICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJzxkaXYgdWktdmlldyBjbGFzcz1cInVpIGNvbnRhaW5lclwiLz4nXG4gICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnN0b3JhZ2Vwb2xpY2llcy5saXN0Jywge1xuICAgICAgICAgICAgdXJsOiAnL2xpc3QnLFxuICAgICAgICAgICAgY29tcG9uZW50OiAnc3RvcmFnZXBvbGljeWxpc3QnXG4gICAgICAgIH0pO1xuICAgIH1dKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vZHVsZS5qcy5tYXAiLCJcblxuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi52aXN1YWxpemF0aW9uJywgWydjb250aXYubW9kZWxzJywgJ2NvbnRpdi5kaXJlY3RpdmVzJywgJ2NvbnRpdi51dGlscycsIFxuXHQnY29udGl2LmdyYXBoJ10pXG4gLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdjb250aXYubWVudS52aXN1YWxpemF0aW9uJywge1xuICAgICAgICAgICAgdXJsOiAnL3Zpc3VhbGl6YXRpb24nLFxuICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJzxkaXYgdWktdmlldyBjbGFzcz1cInVpIGNvbnRhaW5lclwiLz4nXG4gICAgICAgIH0pXG4gICAgfV0pO1xuIiwiLyoqXG4gKiBUaGlzIHBvbGljeSBpcyB1c2VkIHRvIGNoYW5nZSB0aGUgdmlldyB0byBmb2N1cyBvbiBzcGxpdHRpbmcgYW5kIFxuICogam9pbmluZyBldmVudHMuXG4gKiBPdmVycmlkZXMgdGhlIGNlcnRhaW4gZm9yY2UgbGF5b3V0IGZ1bmN0aW9ucyBvZiB0aGUgZ3JhcGggdG8gcGFydGl0aW9uIGEgc3BsaXRcbiAqIGludG8gdGhlIGZvY3VzZWQgbm9kZXMgYW5kIHRoZSBjb25uZWN0ZWQgbm9kZXMuXG4gKiBcbiAqIEhhcyBzYXZlL2xvYWQgbWV0aG9kcyBmb3IgdGhlIHNhdmUgc3RhdGUgcG9saWN5LlxuICogSGFzIGJhY2sgYnV0dG9uIHN1cHBvcnQuXG4gKiBDYW4gYXV0byBjaGFuZ2UgdGhlIHRpdGxlIG9mIHRoZSBncmFwaC5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5ncmFwaCcpXG4gICAgLmZhY3RvcnkoJ1NwbGl0Sm9pblZpZXdQb2xpY3knLCBbJ1NwbGl0Sm9pbk5vZGVQb2xpY3knLCAnVmlzdWFsaXplck5vZGUnLCBmdW5jdGlvbiAoU3BsaXRKb2luTm9kZVBvbGljeSwgVmlzdWFsaXplck5vZGUpIHsgXG4gICAgICAgIGNsYXNzIFNwbGl0Sm9pblZpZXdQb2xpY3kgZXh0ZW5kcyBTcGxpdEpvaW5Ob2RlUG9saWN5LlBvbGljeXtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ29uc3RydWN0cyB0aGUgb2JqZWN0LlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9saWN5TmFtZSA9IFwiU3BsaXRKb2luVmlld1BvbGljeVwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGxlZCB3aGVuIHBvbGljeSBpcyBpbnN0YWxsZWRcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7R3JhcGh9ICBncmFwaCAgIFRoZSBncmFwaFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpbml0aWFsaXplKGdyYXBoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdXBlci5pbml0aWFsaXplKGdyYXBoKTtcbiAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBncmFwaC5zdGF0ZS5TcGxpdEpvaW5WaWV3UG9saWN5ID0ge307XG4gICAgICAgICAgICAgICAgc3RhdGUuc2F2ZWRTdGF0ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAvLyBzdGF0ZS5mb2N1c0dyb3VwID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzdGF0ZS5ldmVudEhpc3RvcnkgPSBbXTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5mb2N1c0dyb3VwcyA9IFtdO1xuICAgICAgICAgICAgICAgIHN0YXRlLmZvY2kgPSBbXTtcbiAgICAgICAgICAgICAgICBzdGF0ZS56b29tcyA9IHt9O1xuICAgICAgICAgICAgICAgIHN0YXRlLmxheW91dCA9IHt9O1xuICAgICAgICAgICAgICAgIHN0YXRlLmxheW91dERlZmF1bHQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHN0YXRlLnpvb21EZWZhdWx0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzdGF0ZS5ub2RlSWRzVG9SZXNob3cgPSBudWxsO1xuICAgICAgICAgICAgICAgIHN0YXRlLmJhY2tCdXR0b25FbGVtID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzdGF0ZS50aXRsZUVsZW0gPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgdmFyIGNvbnN0cyA9IGdyYXBoLmNvbnN0cy5TcGxpdEpvaW5WaWV3UG9saWN5ID0ge307XG4gICAgICAgICAgICAgICAgY29uc3RzLmJvdW5kYXJ5ID0gMC44O1xuXG4gICAgICAgICAgICAgICAgLy9vdmVycmlkaW5nIGQzZm9yY2UgbWV0aG9kcyBvZiB0aGUgZ3JhcGguXG4gICAgICAgICAgICAgICAgZ3JhcGguZDNGb3JjZUJvdW5kcyA9IHRoaXMuZDNGb3JjZUJvdW5kcztcbiAgICAgICAgICAgICAgICBncmFwaC5kM0ZvcmNlVGljayA9IHRoaXMuZDNGb3JjZVRpY2s7XG4gICAgICAgICAgICAgICAgZ3JhcGguZDNGb3JjZVN0YXJ0ID0gdGhpcy5kM0ZvcmNlU3RhcnQ7XG4gICAgICAgICAgICAgICAgZ3JhcGguZDNGb3JjZUVuZCA9IHRoaXMuZDNGb3JjZUVuZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBMaW5rcyB0aGUgcHJvdmlkZWQgZWxlbWVudCBhIGJhY2sgYnV0dG9uIGZlYXR1cmVcbiAgICAgICAgICAgICAqIERvZXNuJ3QgdHJpZ2dlciB0aGUgb24tY2xpY2sgZXZlbnRcbiAgICAgICAgICAgICAqIFRoYXQgc2hvdWxkIGJlIGRvbmUgdGhyb3VnaCBhbmd1bGFyIG5nLWNsaWNrLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtqUXVlcnl9ICBlbGVtICAgIFRoZSBqcXVlcnkgc2VsZWN0ZWQgZWxlbWVudFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpbnN0YWxsQmFja0J1dHRvbihlbGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGgsXG4gICAgICAgICAgICAgICAgICAgIHRoaXNQb2xpY3kgPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5TcGxpdEpvaW5WaWV3UG9saWN5O1xuXG4gICAgICAgICAgICAgICAgc3RhdGUuYmFja0J1dHRvbkVsZW0gPSBlbGVtO1xuICAgICAgICAgICAgICAgIHN0YXRlLmJhY2tCdXR0b24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLmV2ZW50SGlzdG9yeS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzUG9saWN5LnVuZG9MYXN0RXZlbnQuY2FsbCh0aGlzUG9saWN5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBXaWxsIGFsbG93IHRoaXMgcG9saWN5IHRvIGNoYW5nZSB0aGUgdGl0bGUgb2YgdGhlIGdyYXBoXG4gICAgICAgICAgICAgKiBhcyBzcGxpdCBhbmQgam9pbiBldmVudHMgb2NjdXIuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge2pRdWVyeX0gIGVsZW0gICAgVGhlIGpxdWVyeSBzZWxlY3RlZCBlbGVtZW50XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGluc3RhbGxUaXRsZShlbGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGgsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gdGhpc0dyYXBoLnN0YXRlLlNwbGl0Sm9pblZpZXdQb2xpY3k7XG5cbiAgICAgICAgICAgICAgICBzdGF0ZS50aXRsZUVsZW0gPSBlbGVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGxlZCB3aGVuIHRoZSBncmFwaCBpcyBiZWluZyBkZXN0cm95ZWRcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7T2JqZWN0fSAgc2F2ZWRTdGF0ZSAgQW55IHByb3BlcnR5IG9uIHRoaXNcbiAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3Qgd2lsbCBiZSBhY2Nlc3NpYmxlXG4gICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlbiB0aGUgdmlldyByZWxvYWRzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGRlc3Ryb3koc2F2ZWRTdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vT25seSBpZiB0aGUgc2F2ZSBzdGF0ZSBwb2xpY3kgaXMgaW5zdGFsbGVkXG4gICAgICAgICAgICAgICAgaWYgKHNhdmVkU3RhdGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmUoc2F2ZWRTdGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFdpbGwgc2F2ZSB0aGUgY3VycmVudCBzdGF0ZSwgYW5kIGFsbCBoaXN0b3J5LlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtPYmplY3R9ICBzYXZlZFN0YXRlICBBbnkgcHJvcGVydHkgb24gdGhpc1xuICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdCB3aWxsIGJlIGFjY2Vzc2libGVcbiAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVuIHRoZSB2aWV3IHJlbG9hZHNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2F2ZShzYXZlZFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGgsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gdGhpc0dyYXBoLnN0YXRlLlNwbGl0Sm9pblZpZXdQb2xpY3k7XG5cbiAgICAgICAgICAgICAgICB2YXIgbm9kZXMgPSB0aGlzR3JhcGgubm9kZXM7XG4gICAgICAgICAgICAgICAgdmFyIGxpbmtzID0gdGhpc0dyYXBoLmxpbmtzO1xuICAgICAgICAgICAgICAgIHZhciBjdXJyVGl0bGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS50aXRsZUVsZW0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyVGl0bGUgPSBzdGF0ZS50aXRsZUVsZW0udGV4dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZm9jdXNHcm91cHMgPSBzdGF0ZS5mb2N1c0dyb3VwcztcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnRIaXN0b3J5ID0gc3RhdGUuZXZlbnRIaXN0b3J5O1xuICAgICAgICAgICAgICAgIHZhciB6b29tcyA9IHN0YXRlLnpvb21zO1xuICAgICAgICAgICAgICAgIHZhciBsYXlvdXQgPSBzdGF0ZS5sYXlvdXQ7XG5cbiAgICAgICAgICAgICAgICB2YXIgbGF5b3V0RGVmYXVsdCA9IHN0YXRlLmxheW91dERlZmF1bHQ7XG4gICAgICAgICAgICAgICAgdmFyIHpvb21EZWZhdWx0ID0gc3RhdGUuem9vbURlZmF1bHQ7XG4gICAgICAgICAgICAgICAgdmFyIHJldCA9IHtub2Rlczpub2RlcywgbGlua3M6bGlua3MsIFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZXM6c3RhdGUuc2F2ZWRTdGF0ZXMsIGN1cnJUaXRsZTpjdXJyVGl0bGUsIFxuICAgICAgICAgICAgICAgICAgICBmb2N1c0dyb3VwczogZm9jdXNHcm91cHMsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50SGlzdG9yeTpldmVudEhpc3RvcnksIHpvb21zOnpvb21zLFxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ6bGF5b3V0LCBsYXlvdXREZWZhdWx0OmxheW91dERlZmF1bHQsXG4gICAgICAgICAgICAgICAgICAgIHpvb21EZWZhdWx0Onpvb21EZWZhdWx0fTtcbiAgICAgICAgICAgICAgICBzYXZlZFN0YXRlLlNwbGl0Sm9pblZpZXdQb2xpY3kgPSByZXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogV2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgZ3JhcGggaXMgcmVsb2FkZWQsIGFzc3VtaW5nXG4gICAgICAgICAgICAgKiBzYXZlIHN0YXRlIHBvbGljeSBpcyBpbnN0YWxsZWRcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7T2JqZWN0fSAgbG9hZFN0YXRlICBDb250YWlucyBhbGwgdGhlIHNhdmVkXG4gICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbG9hZChsb2FkU3RhdGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc1BvbGljeSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGgsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gdGhpc0dyYXBoLnN0YXRlLlNwbGl0Sm9pblZpZXdQb2xpY3k7XG5cbiAgICAgICAgICAgICAgICBsb2FkU3RhdGUgPSBsb2FkU3RhdGUuU3BsaXRKb2luVmlld1BvbGljeTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zYXZlZFN0YXRlcyA9IGxvYWRTdGF0ZS5zdGF0ZXM7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmxpbmtzID0gbG9hZFN0YXRlLmxpbmtzO1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5ub2RlcyA9IGxvYWRTdGF0ZS5ub2RlcztcblxuICAgICAgICAgICAgICAgIHZhciBjdXJyVGl0bGUgPSBsb2FkU3RhdGUuY3VyclRpdGxlO1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS50aXRsZUVsZW0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS50aXRsZUVsZW0udGV4dChjdXJyVGl0bGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdGF0ZS5ldmVudEhpc3RvcnkgPSBsb2FkU3RhdGUuZXZlbnRIaXN0b3J5O1xuICAgICAgICAgICAgICAgIHN0YXRlLmZvY3VzR3JvdXBzID0gbG9hZFN0YXRlLmZvY3VzR3JvdXBzO1xuICAgICAgICAgICAgICAgIHN0YXRlLnpvb21zID0gbG9hZFN0YXRlLnpvb21zO1xuICAgICAgICAgICAgICAgIHN0YXRlLmxheW91dCA9IGxvYWRTdGF0ZS5sYXlvdXQ7XG4gICAgICAgICAgICAgICAgc3RhdGUubGF5b3V0RGVmYXVsdCA9IGxvYWRTdGF0ZS5sYXlvdXREZWZhdWx0O1xuICAgICAgICAgICAgICAgIHN0YXRlLnpvb21EZWZhdWx0ID0gbG9hZFN0YXRlLnpvb21EZWZhdWx0O1xuXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLmJhY2tCdXR0b25FbGVtICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLmV2ZW50SGlzdG9yeS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5iYWNrQnV0dG9uRWxlbS5mYWRlVG8oJ3Nsb3cnLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBjaGlsZHJlbl9zdHJ1Y3QgPSB0aGlzR3JhcGguZGF0YVNvdXJjZS5jaGlsZHJlbl9zdHJ1Y3Q7XG5cbiAgICAgICAgICAgICAgICBfLmZvckVhY2godGhpc0dyYXBoLm5vZGVzLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgIGQuU3BsaXRKb2luVmlld1BvbGljeSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBpZiAoXy5pbmNsdWRlcyhjaGlsZHJlbl9zdHJ1Y3Rbc3RhdGUuZm9jdXNHcm91cHNbMF1dLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZC5TcGxpdEpvaW5WaWV3UG9saWN5LnR5cGUgPSBcImZvY3VzXCI7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkLlNwbGl0Sm9pblZpZXdQb2xpY3kudHlwZSA9IFwiY29ubmVjdGVkXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vbG9hZGluZyBhIHByZXZpb3VzIGxheW91dFxuICAgICAgICAgICAgICAgIHZhciBsYXlvdXQ7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLmZvY3VzR3JvdXBzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBsYXlvdXQgPSBzdGF0ZS5sYXlvdXREZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICB2YXIgem9vbSA9IHN0YXRlLnpvb21EZWZhdWx0OyBcbiAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLnpvb21lZCh6b29tWzBdLCB6b29tWzFdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgem9vbSA9IHN0YXRlLnpvb21zW3N0YXRlLmZvY3VzR3JvdXBzXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHpvb20gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLnpvb21lZCh6b29tWzBdLCB6b29tWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQgPSBzdGF0ZS5sYXlvdXRbc3RhdGUuZm9jdXNHcm91cHNdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vbGF5b3V0IGNhbid0IGJlIG51bGxcbiAgICAgICAgICAgICAgICBfLmZvckVhY2godGhpc0dyYXBoLm5vZGVzLCBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBsYXlvdXRbbi5pZF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3MgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobGF5b3V0LCBuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuLnggPSBwb3MueDtcbiAgICAgICAgICAgICAgICAgICAgbi55ID0gcG9zLnk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLnN0YXRlLmluaXRGb3JjZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLnVwZGF0ZUdyYXBoLmNhbGwodGhpc0dyYXBoLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1BvbGljeS51cGRhdGVHcmFwaENhbGxiYWNrLmNhbGwodGhpc1BvbGljeSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVHJpZ2dlcmluZyBzcGxpdCBvbiBkb3VibGUgY2xpY2tcbiAgICAgICAgICAgICAqIFxuICAgICAgICAgICAgICogRm9jdXMgZ3JvdXAgc3RvcmVzIHRoZSBub2RlIHRoYXQgaXMgYWJvdXQgdG8gYmUgc3BsaXQuXG4gICAgICAgICAgICAgKiBcbiAgICAgICAgICAgICAqIFdoZW4gZm9jdXMgZ3JvdXAgaGFzIGxlbmd0aCAwLCB0aGUgZmlyc3Qgc3BsaXQgXG4gICAgICAgICAgICAgKiB3aWxsIGp1c3QgYmUgcHVzaGVkIG9uLlxuICAgICAgICAgICAgICogVGhlIG5vZGUgd2lsbCBiZSBzcGxpdCBhbmQgcHVzaGVkIHRvIHRoZSB0b3AgaGFsZiBcbiAgICAgICAgICAgICAqIG9mIHRoZSBzY3JlZW4sIGFuZCB0aGUgYm90dG9tIGhhbGYgd2lsbCBjb250YWluIGFueVxuICAgICAgICAgICAgICogbm9kZXMgaXQgaGFzIGNvbm5lY3Rpb25zIHRvLlxuICAgICAgICAgICAgICogXG4gICAgICAgICAgICAgKiBXaGVuIGEgZm9jdXMgZ3JvdXAgbGVuZ3RoIGlzID49IDEsIGlmIHRoZSBub2RlIHRvIGJlXG4gICAgICAgICAgICAgKiBzcGxpdCBpcyBhIGZvY3VzIG5vZGUsIGl0IHdpbGwgcmVwbGFjZSBmb2N1c0dyb3Vwc1swXSBhbmRcbiAgICAgICAgICAgICAqIHRoZSB0b3AgaGFsZiB3aWxsIGJlIGl0cyBjaGlsZHJlbiwgYW5kIGJvdHRvbSBoYWxmIHdpbGxcbiAgICAgICAgICAgICAqIGJlIHRoZSBub2RlcyBpdCBoYXMgY29ubmVjdGlvbnMgdG8uXG4gICAgICAgICAgICAgKiBcbiAgICAgICAgICAgICAqIElmIHRoZSBzcGxpdCBpcyBpbiB0aGUgYm90dG9tIGhhbGYsIHRoZW4gdGhlIGJvdHRvbSBoYWxmXG4gICAgICAgICAgICAgKiB3aWxsIGRpc3BsYXkgaXQncyBjaGlsZHJlbiBhbmQgd2lsbCBvbmx5IHNob3cgY29ubmVjdGlvbnMgYmV0d2VlblxuICAgICAgICAgICAgICogdGhlIHR3byBncm91cHMsIGFuZCB3aWxsIHJlcGxhY2UgZm9jdXNHcm91cHNbMV0uXG4gICAgICAgICAgICAgKiBcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtEM09ian0gICBkM25vZGUgIFRoZSBkMyBub2RlXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7T2JqZWN0fSAgZCAgICAgICBUaGUgbWF0Y2hpbmcgZGF0YSBvYmplY3RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZGJsY2xpY2soZDNub2RlLCBkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGgsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gdGhpc0dyYXBoLnN0YXRlLlNwbGl0Sm9pblZpZXdQb2xpY3k7XG5cbiAgICAgICAgICAgICAgICAvL2NoZWNrIGlmIGNhbiBzcGxpdFxuICAgICAgICAgICAgICAgIHZhciBuYW1lID0gZC5pZDtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRyZW5fc3RydWN0ID0gdGhpc0dyYXBoLmRhdGFTb3VyY2UuY2hpbGRyZW5fc3RydWN0O1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZHJlbl9zdHJ1Y3RbbmFtZV0gPT09IHVuZGVmaW5lZCB8fCBfLmlzRW1wdHkoY2hpbGRyZW5fc3RydWN0W25hbWVdKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3RhdGUuZm9jdXNHcm91cHMuc2xpY2UoKTtcblxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5mb2N1c0dyb3Vwcy5sZW5ndGggPT09IDApIHsgLy90b3BsZXZlbCBzcGxpdFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5mb2N1c0dyb3Vwcy5wdXNoKGQuaWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5pbmNsdWRlcyhjaGlsZHJlbl9zdHJ1Y3Rbc3RhdGUuZm9jdXNHcm91cHNbMF1dLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5pZCkpIHsgLy9zcGxpdHRpbmcgYSBmb2N1cyBub2RlXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmZvY3VzR3JvdXBzWzBdID0gZC5pZDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRlLmZvY3VzR3JvdXBzLmxlbmd0aCA9PT0gMSkgey8vc3BsaXR0aW5nIGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29ubmVjdGVkIG5vZGVcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZm9jdXNHcm91cHMucHVzaChkLmlkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF8uaW5jbHVkZXMoY2hpbGRyZW5fc3RydWN0W3N0YXRlLmZvY3VzR3JvdXBzWzFdXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5pZCkpIHsvL3NwbGl0dGluZyBhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25uZWN0ZWQgbm9kZVxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5mb2N1c0dyb3Vwc1sxXSA9IGQuaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuZm9jdXNHcm91cHMubGVuZ3RoID09PSAyICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuZm9jdXNHcm91cHNbMV0gPT09IGQuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9TcGxpdHRpbmcgYSBjb25uZWN0ZWQgbm9kZSwga2VlcCBhbGwgZm9jdXMgbm9kZXNcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGVzVG9LZWVwID0gW2RdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZUlkc1RvUmVzaG93ID0gW107XG4gICAgICAgICAgICAgICAgICAgIHZhciBncm91cE9uZU5vZGVzID0gY2hpbGRyZW5fc3RydWN0W3N0YXRlLmZvY3VzR3JvdXBzWzBdXTtcbiAgICAgICAgICAgICAgICAgICAgXy5mb3JFYWNoKHRoaXNHcmFwaC5ub2RlcywgZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF8uaW5jbHVkZXMoZ3JvdXBPbmVOb2Rlcywgbm9kZS5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlSWRzVG9SZXNob3cucHVzaChub2RlLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2Rlc1RvS2VlcC5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL01ha2Ugc3BsaXQgbm9kZXMgdGhlIGZvY3VzIGFuZCBrZWVwIG5vZGVzIHRoYXQgYXJlIGNvbm5lY3RlZFxuICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZXNUb0tlZXAgPSBbZF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBub2RlSWRzVG9SZXNob3cgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgXy5mb3JFYWNoKHRoaXNHcmFwaC5saW5rcywgZnVuY3Rpb24obGluaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmsuc291cmNlID09PSBkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJZHNUb1Jlc2hvdy5pbmRleE9mKGxpbmsudGFyZ2V0LmlkKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsudGFyZ2V0LlNwbGl0Sm9pblZpZXdQb2xpY3kgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLnRhcmdldC5TcGxpdEpvaW5WaWV3UG9saWN5LnR5cGUgPSBcImNvbm5lY3RlZFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJZHNUb1Jlc2hvdy5wdXNoKGxpbmsudGFyZ2V0LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2Rlc1RvS2VlcC5wdXNoKGxpbmsudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGluay50YXJnZXQgPT09IGQgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJZHNUb1Jlc2hvdy5pbmRleE9mKGxpbmsuc291cmNlLmlkKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuc291cmNlLlNwbGl0Sm9pblZpZXdQb2xpY3kgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLnNvdXJjZS5TcGxpdEpvaW5WaWV3UG9saWN5LnR5cGUgPSBcImNvbm5lY3RlZFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJZHNUb1Jlc2hvdy5wdXNoKGxpbmsuc291cmNlLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2Rlc1RvS2VlcC5wdXNoKGxpbmsuc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9SZW1vdmluZyBsaW5rcyBmcm9tIHRoZSBub2RlIHRvIGJlIHNwbGl0XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmNpcmNsZXMuZWFjaChmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmlkICE9PSBkLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGguc3BsaWNlTGlua3NGb3JOb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLnVwZGF0ZUdyYXBoKCk7XG5cbiAgICAgICAgICAgICAgICAvL2Rpc2FibGluZyB1cGRhdGUgZ3JhcGggdG8gcHJldmVudCBuZXcgZGF0YSBmcm9tXG4gICAgICAgICAgICAgICAgLy9yZWRyYXdpbmcgbGlua3Mgd2hpbGUgdGhlcmUgYXJlIGFuaW1hdGlvbnMgZ29pbmcgb25cbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguc3RhdGUuZGlzYWJsZVVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmNpcmNsZXMuZWFjaChmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmlkICE9PSBkLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpLmRlbGF5KDIwMCkuZHVyYXRpb24oNDAwKS5zdHlsZShcIm9wYWNpdHlcIiwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2Rpc2FibGluZyBxdGlwIGlmIGluc3RhbGxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykucXRpcCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5xdGlwKCdkaXNhYmxlJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHZhciB0cmFuc2xhdGUgPSB0aGlzR3JhcGguZHJhZ1N2Zy50cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICB2YXIgc2NhbGUgPSB0aGlzR3JhcGguZHJhZ1N2Zy5zY2FsZSgpO1xuICAgICAgICAgICAgICAgIHZhciB4TG9jID0gKHBhcnNlRmxvYXQodGhpc0dyYXBoLnN2Zy5zdHlsZShcIndpZHRoXCIpKSAvIHNjYWxlKSAvIDIgICsgdHJhbnNsYXRlWzBdO1xuICAgICAgICAgICAgICAgIHZhciB5TG9jID0gKHBhcnNlRmxvYXQodGhpc0dyYXBoLnN2Zy5zdHlsZShcImhlaWdodFwiKSkgLyBzY2FsZSkvIDIgICsgdHJhbnNsYXRlWzFdO1xuICAgICAgICAgICAgICAgIGQueFN0YXJ0ID0gZC54O1xuICAgICAgICAgICAgICAgIGQueVN0YXJ0ID0gZC55O1xuICAgICAgICAgICAgICAgIGQueCA9IHhMb2M7XG4gICAgICAgICAgICAgICAgZC55ID0geUxvYztcbiAgICAgICAgICAgICAgICBkM25vZGUudHJhbnNpdGlvbihcIm5vZGVQb3NpdGlvblRyYW5zaXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0clR3ZWVuKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgeFN0YXJ0ID0gZC54U3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHlTdGFydCA9IGQueVN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQueFN0YXJ0ID0gZC54O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQueVN0YXJ0ID0gZC55O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkMy5pbnRlcnBvbGF0ZVN0cmluZyhcInRyYW5zbGF0ZShcIiArIHhTdGFydCArIFwiLFwiICsgeVN0YXJ0ICsgXCIpXCIsIFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHZhciBzcGxpdE5vZGVGdW5jID0gc3VwZXIuc3BsaXROb2RlO1xuICAgICAgICAgICAgICAgIHN0YXRlLm5vZGVJZHNUb1Jlc2hvdyA9IG5vZGVJZHNUb1Jlc2hvdztcbiAgICAgICAgICAgICAgICAvL3dhaXRpbmcgZm9yIG5vZGUgdHJhbnNpdGlvblxuICAgICAgICAgICAgICAgIHZhciB0aGlzUG9saWN5ID0gdGhpcztcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGgubm9kZXMgPSBub2Rlc1RvS2VlcDtcbiAgICAgICAgICAgICAgICAgICAgc3BsaXROb2RlRnVuYy5jYWxsKHRoaXNQb2xpY3ksIGQpO1xuICAgICAgICAgICAgICAgIH0sIDc1MCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVG8gYmUgY2FsbGVkIGFmdGVyIHRoZSBncmFwaCBpcyBzcGxpdC5cbiAgICAgICAgICAgICAqIEJyaW5ncyBhbGwgbm9kZXMgYmFjayBpbnRvIHZpZXcgYW5kIHNldHMgdGhlaXIgYXR0cmlidXRlc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB1cGRhdGVHcmFwaENhbGxiYWNrKCkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5TcGxpdEpvaW5WaWV3UG9saWN5O1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5jaXJjbGVzLmVhY2goZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKS5kdXJhdGlvbig0MDApLnN0eWxlKFwib3BhY2l0eVwiLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5jbGFzc2VkKFwiZm9jdXNcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmNsYXNzZWQoXCJjb25uZWN0ZWRcIiwgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5TcGxpdEpvaW5WaWV3UG9saWN5ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5TcGxpdEpvaW5WaWV3UG9saWN5LnR5cGUgPT09IFwiZm9jdXNcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3QodGhpcykuY2xhc3NlZChcImZvY3VzXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS5TcGxpdEpvaW5WaWV3UG9saWN5LnR5cGUgPT09IFwiY29ubmVjdGVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmNsYXNzZWQoXCJjb25uZWN0ZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5ub2RlSWRzVG9SZXNob3cgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC51cGRhdGVHcmFwaCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJhbmRvbWx5IHNldHMgdGhlIHBvc2l0aW9ucyBvZiBhbnkgdW5zZXQgbm9kZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZXRQb3NpdGlvbnMoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGgsXG4gICAgICAgICAgICAgICAgICAgIHRoaXNQb2xpY3kgPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBncmFwaENvbnN0cyA9IHRoaXNHcmFwaC5jb25zdHM7XG5cbiAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gZ3JhcGhDb25zdHMuZGlzcGxheU9mZnNldDtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZXMgPSB0aGlzR3JhcGgubm9kZXM7XG4gICAgICAgICAgICAgICAgdmFyIHJldCA9IHRoaXNQb2xpY3kuZDNGb3JjZUJvdW5kcy5jYWxsKHRoaXNHcmFwaCk7XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgXy5mb3JFYWNoKG5vZGVzLCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnggPT0gbnVsbCB8fCBub2RlLnkgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBnZXRSYW5kb21JbnQobm9kZS5yYWRpdXMgKyBvZmZzZXQsIHJldC53aWR0aCAtIG5vZGUucmFkaXVzIC0gb2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB5ID0gZ2V0UmFuZG9tSW50KG5vZGUucmFkaXVzICsgb2Zmc2V0LCByZXQuaGVpZ2h0IC0gbm9kZS5yYWRpdXMgLSBvZmZzZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS54ID0geDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUueSA9IHk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGxlZCBvbiB0aGUgc3RhcnQgb2YgdGhlIGQzIGZvcmNlIHNpbXVsYXRpb25cbiAgICAgICAgICAgICAqIFdpbGwgb3ZlcnJpZGUgdGhlIG1ldGhvZCBvZiB0aGUgZ3JhcGhcbiAgICAgICAgICAgICAqIFwidGhpc1wiIHBvaW50cyB0byB0aGUgZ3JhcGhcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZDNGb3JjZVN0YXJ0KCkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5jaXJjbGVzXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdjeCcsIGZ1bmN0aW9uKGQpIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC54U3RhcnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQueFN0YXJ0ID0gKGQueFN0YXJ0ICogdGhpc0dyYXBoLmRyYWdTdmcuc2NhbGUoKSkgKyB0aGlzR3JhcGguZHJhZ1N2Zy50cmFuc2xhdGUoKVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkLng7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdjeScsIGZ1bmN0aW9uKGQpIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC55U3RhcnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQueVN0YXJ0ID0gKGQueVN0YXJ0ICp0aGlzR3JhcGguZHJhZ1N2Zy5zY2FsZSgpKSArIHRoaXNHcmFwaC5kcmFnU3ZnLnRyYW5zbGF0ZSgpWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQueTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgucGF0aHNcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3gxJywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5zb3VyY2UueDsgfSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3kxJywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5zb3VyY2UueTsgfSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3gyJywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC50YXJnZXQueDsgfSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3kyJywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC50YXJnZXQueTsgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsbGVkIG9uIHRoZSBzdGFydCBvZiB0aGUgZDMgZm9yY2Ugc2ltdWxhdGlvblxuICAgICAgICAgICAgICogV2lsbCBvdmVycmlkZSB0aGUgbWV0aG9kIG9mIHRoZSBncmFwaFxuICAgICAgICAgICAgICogXCJ0aGlzXCIgcG9pbnRzIHRvIHRoZSBncmFwaFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBkM0ZvcmNlRW5kKCkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVQb2xpY3kgPSBzdGF0ZS5TcGxpdEpvaW5WaWV3UG9saWN5O1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZVBvbGljeS5sYXlvdXREZWZhdWx0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRMYXlvdXQgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgXy5mb3JFYWNoKHRoaXNHcmFwaC5ub2RlcywgZnVuY3Rpb24obikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdExheW91dFtuLmlkXSA9IHt4Om4ueCwgeTpuLnl9O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVQb2xpY3kubGF5b3V0RGVmYXVsdCA9IGRlZmF1bHRMYXlvdXQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzY2FsZSA9IHRoaXNHcmFwaC5kcmFnU3ZnLnNjYWxlKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0cmFuc2xhdGUgPSB0aGlzR3JhcGguZHJhZ1N2Zy50cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVQb2xpY3kuem9vbURlZmF1bHQgPSBbdHJhbnNsYXRlLCBzY2FsZV07IFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5jaXJjbGVzXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdjeCcsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQueDsgfSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2N5JywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC55OyB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5wYXRocy5hdHRyKCd4MScsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuc291cmNlLng7IH0pXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd5MScsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuc291cmNlLnk7IH0pXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd4MicsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudGFyZ2V0Lng7IH0pXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd5MicsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudGFyZ2V0Lnk7IH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFdpbGwgYmUgY2FsbGVkIGR1cmluZyBEMyBmb3JjZSBzaW11bGF0aW9uc1xuICAgICAgICAgICAgICogYnkgdGhlIGdyYXBoLCBzbyBcInRoaXNcIiB3aWxsIHBvaW50IHRvIHRoZSBncmFwaCBvYmplY3RcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7bnVtYmVyfSAgd2lkdGggICBEMyBMYXlvdXQgV2lkdGhcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtudW1iZXJ9ICBoZWlnaHQgIEQzIExheW91dCBIZWlnaHRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZDNGb3JjZVRpY2soZSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgY29uc3RzID0gdGhpc0dyYXBoLmNvbnN0cyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVQb2xpY3kgPSBzdGF0ZS5TcGxpdEpvaW5WaWV3UG9saWN5O1xuXG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IGNvbnN0cy5kaXNwbGF5T2Zmc2V0O1xuICAgICAgICAgICAgICAgIHZhciBzY2FsZSA9IHRoaXNHcmFwaC5kcmFnU3ZnLnNjYWxlKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBNb3ZlIG5vZGVzIHRvd2FyZCBjbHVzdGVyIGZvY3VzLlxuICAgICAgICAgICAgICAgIHZhciBmb2NpID0gc3RhdGVQb2xpY3kuZm9jaTtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBncmF2aXR5KGFscGhhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9jaS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5TcGxpdEpvaW5WaWV3UG9saWN5LnR5cGUgPT09IFwiZm9jdXNcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLnkgKz0gKGZvY2lbMF0gLSBkLnkpICogYWxwaGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZC55ICs9IChmb2NpWzFdIC0gZC55KSAqIGFscGhhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLnggKz0gKHdpZHRoLzIgLSBkLngpICogYWxwaGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQueSArPSAoaGVpZ2h0LzIgLSBkLnkpICogYWxwaGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC54ICs9ICh3aWR0aC8yIC0gZC54KSAqIGFscGhhO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBub2RlcyBhcmUgd2l0aGluIGJvdW5kc1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5jaXJjbGVzXG4gICAgICAgICAgICAgICAgICAgIC5lYWNoKHRoaXMuZDNGb3JjZUNvbGxpZGUoLjUpKVxuICAgICAgICAgICAgICAgICAgICAuZWFjaChncmF2aXR5KC4yICogZS5hbHBoYSkpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24oZCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkLnggPSBNYXRoLm1heCgoZC5yYWRpdXMgKyBvZmZzZXQpL3NjYWxlLCBNYXRoLm1pbih3aWR0aCArICgoLW9mZnNldC0gZC5yYWRpdXMpIC8gc2NhbGUpLCBkLngpKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbihkKSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuU3BsaXRKb2luVmlld1BvbGljeSA9PSBudWxsIHx8IGQuU3BsaXRKb2luVmlld1BvbGljeSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC55ID0gTWF0aC5tYXgoKGQucmFkaXVzICsgb2Zmc2V0KS9zY2FsZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbihoZWlnaHQgKyAoKC1vZmZzZXQgLSBkLnJhZGl1cykvc2NhbGUpLCBkLnkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZC55O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkLlNwbGl0Sm9pblZpZXdQb2xpY3kudHlwZSA9PT0gXCJmb2N1c1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC55ID0gTWF0aC5tYXgoZC5yYWRpdXMgKyBvZmZzZXQsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5taW4oKGhlaWdodCArICgoLW9mZnNldCAtIGQucmFkaXVzKS9zY2FsZSkpKmNvbnN0cy5TcGxpdEpvaW5WaWV3UG9saWN5LmJvdW5kYXJ5LCBkLnkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZC55O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkLlNwbGl0Sm9pblZpZXdQb2xpY3kudHlwZSA9PT0gXCJjb25uZWN0ZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQueSA9IE1hdGgubWF4KChoZWlnaHQgKyAoKG9mZnNldCAtIGQucmFkaXVzKS9zY2FsZSkpICpjb25zdHMuU3BsaXRKb2luVmlld1BvbGljeS5ib3VuZGFyeSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbihoZWlnaHQgKyAoKC1vZmZzZXQgLSBkLnJhZGl1cykvc2NhbGUpLCBkLnkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZC55O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5wYXRoc1xuICAgICAgICAgICAgICAgICAgICAuYXR0cigneDEnLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnNvdXJjZS54OyB9KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigneTEnLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnNvdXJjZS55OyB9KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigneDInLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnRhcmdldC54OyB9KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigneTInLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnRhcmdldC55OyB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGN1bGF0ZXMgdGhlIGJvdW5kYXJpZXMgb2YgdGhlIHNpbXVsYXRpb25cbiAgICAgICAgICAgICAqIFxuICAgICAgICAgICAgICogV2lsbCBiZSBjYWxsZWQgZHVyaW5nIEQzIGZvcmNlIHNpbXVsYXRpb25zXG4gICAgICAgICAgICAgKiBieSB0aGUgZ3JhcGgsIHNvIFwidGhpc1wiIHdpbGwgcG9pbnQgdG8gdGhlIGdyYXBoIG9iamVjdFxuICAgICAgICAgICAgICogXG4gICAgICAgICAgICAgKiBAcmV0dXJuICAgICB7T2JqZWN0fSAgICAgICAgICBSZXR1cm5zIGFuIG9iamVjdFxuICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdCBoYXMgdGhlIHdpZHRoXG4gICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgaGVpZ2h0IGFzIFxuICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcyBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZDNGb3JjZUJvdW5kcygpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB0aGlzR3JhcGguc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cyA9IHRoaXNHcmFwaC5jb25zdHMsXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0c1BvbGljeSA9IGNvbnN0cy5TcGxpdEpvaW5WaWV3UG9saWN5LFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZVBvbGljeSA9IHN0YXRlLlNwbGl0Sm9pblZpZXdQb2xpY3k7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVzID0gdGhpc0dyYXBoLm5vZGVzO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNhbGNNYXhOb2Rlcyh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcmVhID0gd2lkdGggKiBoZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciByYWRpdXMgPSB0aGlzR3JhcGguY29uc3RzLnN0YXJ0UmFkaXVzO1xuICAgICAgICAgICAgICAgICAgICAvL3RyZWF0aW5nIHRoZW0gYXMgYSBzcXVhcmUgZm9yIGFwcHJveFxuICAgICAgICAgICAgICAgICAgICB2YXIgbGVuZ3RoID0gKHJhZGl1cyAqMy41KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFtb3VudCA9IGFyZWEgLyhsZW5ndGggKmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhbW91bnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vVGhlIG9mZnNldCBpcyB0aGUgYnVmZmVyIGZyb20gdGhlIGVkZ2VzXG4gICAgICAgICAgICAgICAgLy9PcmlnaW5hbCBXaWR0aCBhbmQgSGVpZ2h0IGFyZSBnaXZlbiB0byB0aGUgZm9yY2UgbGF5b3V0XG4gICAgICAgICAgICAgICAgLy9zbyB0aGF0IGl0IGlzIGNlbnRlcmVkLCBidXQgbm9kZXMgd2lsbCBiZSBmb3JjZWQgdG8gYmVcbiAgICAgICAgICAgICAgICAvL3dpdGhpbiB0aGUgb2Zmc2V0IGJvdW5kc1xuICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSBjb25zdHMuZGlzcGxheU9mZnNldDtcbiAgICAgICAgICAgICAgICB2YXIgc3ZnV2lkdGggPSBwYXJzZUZsb2F0KHRoaXNHcmFwaC5zdmcuc3R5bGUoXCJ3aWR0aFwiKSk7XG4gICAgICAgICAgICAgICAgdmFyIHN2Z0hlaWdodCA9IHBhcnNlRmxvYXQodGhpc0dyYXBoLnN2Zy5zdHlsZShcImhlaWdodFwiKSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSBzdmdXaWR0aDtcbiAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gc3ZnSGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgdmFyIGFtb3VudCA9IGNhbGNNYXhOb2Rlcyh3aWR0aCAtICgyKm9mZnNldCksIGhlaWdodCAtICgyKm9mZnNldCkpO1xuICAgICAgICAgICAgICAgIHZhciBzY2FsZSA9IDE7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGVzLmxlbmd0aCA+IGFtb3VudCkge1xuICAgICAgICAgICAgICAgICAgICBzY2FsZSA9IGFtb3VudCAvIG5vZGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLnpvb21lZCh0aGlzR3JhcGguZHJhZ1N2Zy50cmFuc2xhdGUoKSwgc2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aCAvPSBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IC89IHNjYWxlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC56b29tZWQodGhpc0dyYXBoLmRyYWdTdmcudHJhbnNsYXRlKCksIHNjYWxlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL2NhbGN1bGF0aW5nIGZvY2kgZm9yIHNpbXVsYXRpb25cbiAgICAgICAgICAgICAgICB2YXIgZm9jdXNHcm91cHMgPSBzdGF0ZVBvbGljeS5mb2N1c0dyb3VwcztcbiAgICAgICAgICAgICAgICB2YXIgZm9jaTtcbiAgICAgICAgICAgICAgICBpZiAoZm9jdXNHcm91cHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvY2kgPSBbaGVpZ2h0LzJdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vc2V0dGluZyBmb2NpIGhlaWdodCBwb3NpdGlvbiBiYXNlZCBvbiBwZXJjZW50YWdlXG4gICAgICAgICAgICAgICAgICAgIHZhciBmb2N1c05vZGVzID0gdGhpc0dyYXBoLmRhdGFTb3VyY2UuY2hpbGRyZW5fc3RydWN0W2ZvY3VzR3JvdXBzWzBdXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3RzUG9saWN5LmJvdW5kYXJ5ID0gZm9jdXNOb2Rlcy5sZW5ndGggLyBub2Rlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0b3AgPSBoZWlnaHQgKiBjb25zdHNQb2xpY3kuYm91bmRhcnk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBib3QgPSBoZWlnaHQgLSB0b3A7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b3AgPCAyKnRoaXNHcmFwaC5jb25zdHMubWF4UmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdHNQb2xpY3kuYm91bmRhcnkgPSAoMi41ICogdGhpc0dyYXBoLmNvbnN0cy5tYXhSYWRpdXMpIC8gaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wID0gaGVpZ2h0ICogY29uc3RzUG9saWN5LmJvdW5kYXJ5O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90ID0gaGVpZ2h0IC0gdG9wO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvdCA8IDIqIHRoaXNHcmFwaC5jb25zdHMubWF4UmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdHNQb2xpY3kuYm91bmRhcnkgPSAxIC0gKCgyLjUgKiB0aGlzR3JhcGguY29uc3RzLm1heFJhZGl1cykgLyBoZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wID0gaGVpZ2h0ICogY29uc3RzUG9saWN5LmJvdW5kYXJ5O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90ID0gaGVpZ2h0IC0gdG9wO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvY2kgPSBbdG9wLzIsIHRvcCArIGJvdCAvIDJdO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0YXRlUG9saWN5LmZvY2kgPSBmb2NpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7d2lkdGg6d2lkdGgsIGhlaWdodDpoZWlnaHR9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGxlZCBhZnRlciBhIHNpbmdsZSBub2RlIGlzIHNwbGl0XG4gICAgICAgICAgICAgKiBcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtBcnJheX0gIG5ld05vZGVzICBUaGUgbmV3IG5vZGVzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNwbGl0Tm9kZUV2ZW50KG5ld05vZGVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNQb2xpY3kgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5TcGxpdEpvaW5WaWV3UG9saWN5O1xuXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkcmVuX3N0cnVjdCA9IHRoaXNHcmFwaC5kYXRhU291cmNlLmNoaWxkcmVuX3N0cnVjdDtcbiAgICAgICAgICAgICAgICBfLmZvckVhY2gobmV3Tm9kZXMsIGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgICAgICAgICBkLlNwbGl0Sm9pblZpZXdQb2xpY3kgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8uaW5jbHVkZXMoY2hpbGRyZW5fc3RydWN0W3N0YXRlLmZvY3VzR3JvdXBzWzBdXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuU3BsaXRKb2luVmlld1BvbGljeS50eXBlID0gXCJmb2N1c1wiO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZC5TcGxpdEpvaW5WaWV3UG9saWN5LnR5cGUgPSBcImNvbm5lY3RlZFwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgdGl0bGUgPSBuZXdOb2Rlc1swXS5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgLy8gc3RhdGUuZm9jdXNHcm91cCA9IHRpdGxlO1xuXG4gICAgICAgICAgICAgICAgLy9pZiB0aGUgbGFzdCBldmVudCBoYXMgdGhlIHNhbWUgaWQsIGl0IG11c3QgYmUgdGhlXG4gICAgICAgICAgICAgICAgLy9vcHBwb3NpdGUgb2YgdGhpcyBldmVudCwgc28gd2UgcmVtb3ZlIHRoYXQgZXZlbnQgZnJvbVxuICAgICAgICAgICAgICAgIC8vdGhlIGV2ZW50IHN0YWNrLlxuICAgICAgICAgICAgICAgIC8vT3RoZXJ3aXNlLCB3ZSBhZGQgdGhlIGV2ZW50IG90IHRoZSBzdGFja1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5ldmVudEhpc3RvcnkubGVuZ3RoICE9PSAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5ldmVudEhpc3Rvcnlbc3RhdGUuZXZlbnRIaXN0b3J5Lmxlbmd0aCAtIDFdLmlkID09PSB0aXRsZSkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5ldmVudEhpc3RvcnkucG9wKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZXZlbnRIaXN0b3J5LnB1c2goe2lkOnRpdGxlLCBldmVudDonc3BsaXQnfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLmJhY2tCdXR0b25FbGVtICE9IG51bGwgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuZXZlbnRIaXN0b3J5Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5iYWNrQnV0dG9uRWxlbS5mYWRlVG8oJ3Nsb3cnLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLnRpdGxlRWxlbSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLmZvY3VzR3JvdXBzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gc3RhdGUuZm9jdXNHcm91cHNbMF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLmZvY3VzR3JvdXBzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSAnICYgJyArIHN0YXRlLmZvY3VzR3JvdXBzWzFdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnRpdGxlRWxlbS50ZXh0KHRleHQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vcmUtZW5hYmxlIGdyYXBoIHVwZGF0ZVxuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5zdGF0ZS5kaXNhYmxlVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpc1BvbGljeS5zZXRMYXlvdXQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBTZXRzIHRoZSBsYXlvdXQgb2YgdGhlIG5vZGVzLiBcbiAgICAgICAgICAgICAqIElmIHRoZXJlIGlzIGEgcHJldmlvdXMgbGF5b3V0LCBpdCB3aWxsIGJlIGxvYWRlZC5cbiAgICAgICAgICAgICAqIEVsc2UsIGl0IHdpbGwgcnVuIGEgRDMgRm9yY2Ugc2ltdWxhdGlvbiBhbmQgY3JlYXRlIG9uZS5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2V0TGF5b3V0KCkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzUG9saWN5ID0gdGhpcztcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB0aGlzR3JhcGguc3RhdGUuU3BsaXRKb2luVmlld1BvbGljeTtcbiAgICAgICAgICAgICAgICB2YXIgbGF5b3V0O1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5mb2N1c0dyb3Vwcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0ID0gc3RhdGUubGF5b3V0RGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHpvb20gPSBzdGF0ZS56b29tRGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLnpvb21lZCh6b29tWzBdLCB6b29tWzFdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgem9vbSA9IHN0YXRlLnpvb21zW3N0YXRlLmZvY3VzR3JvdXBzXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHpvb20gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLnpvb21lZCh6b29tWzBdLCB6b29tWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQgPSBzdGF0ZS5sYXlvdXRbc3RhdGUuZm9jdXNHcm91cHNdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChsYXlvdXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBfLmZvckVhY2godGhpc0dyYXBoLm5vZGVzLCBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gbGF5b3V0W24uaWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvcyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobGF5b3V0LCBuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG4ueCA9IHBvcy54O1xuICAgICAgICAgICAgICAgICAgICAgICAgbi55ID0gcG9zLnk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGgudXBkYXRlR3JhcGguY2FsbCh0aGlzR3JhcGgsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1BvbGljeS51cGRhdGVHcmFwaENhbGxiYWNrLmNhbGwodGhpc1BvbGljeSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vTmVlZCB0byBydW4gYSBmb3JjZSBzaW11bGF0aW9uIGFzIHRoaXMgbGF5b3V0XG4gICAgICAgICAgICAgICAgICAgIC8vaGFzbid0IGJlZW4gZG9uZSBiZWZvcmVcbiAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLnN0YXRlLmluaXRGb3JjZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzUG9saWN5LnNldFBvc2l0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzR3JhcGgudXBkYXRlR3JhcGgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzUG9saWN5LnVwZGF0ZUdyYXBoQ2FsbGJhY2suY2FsbCh0aGlzUG9saWN5KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnpvb21zW3N0YXRlLmZvY3VzR3JvdXBzXSA9IFt0aGlzR3JhcGguZHJhZ1N2Zy50cmFuc2xhdGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLmRyYWdTdmcuc2NhbGUoKV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBsYXlvdXQgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgXy5mb3JFYWNoKHRoaXNHcmFwaC5ub2RlcywgZnVuY3Rpb24obikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0W24uaWRdID0ge3g6bi54LCB5Om4ueX07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5sYXlvdXRbc3RhdGUuZm9jdXNHcm91cHNdID0gbGF5b3V0O1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogT3ZlcnJpZGluZyBmcm9tIHN1cGVyIGNsYXNzIHNvIHRoYXQgd2UgY2FuIGhhdmVcbiAgICAgICAgICAgICAqIHRvcCBsZXZlbCBub2RlcyByZWFwcGVhciB3aGVuIHRoZXkgYXJlIGhpZGRlblxuICAgICAgICAgICAgICogZHVlIHRvIHRoZXJlIGJlaW5nIHR3byBmb2N1cyBncm91cHMuXG4gICAgICAgICAgICAgKiBcbiAgICAgICAgICAgICAqIEBwYXJhbSAgICAgIHtOb2RlfSAgICAgICAgICBub2RlICAgIFRoZSBub2RlIHRvIGpvaW5cbiAgICAgICAgICAgICAqIEByZXR1cm4gICAgIHtOb2RlfSAgVGhlIG5ldyBub2RlIGFmdGVyIHRoZSBqb2luXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIF9fam9pbk5vZGUobm9kZSkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzR3JhcGggPSB0aGlzLmdyYXBoLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZVN1cGVyID0gdGhpc0dyYXBoLnN0YXRlLlNwbGl0Sm9pbk5vZGVQb2xpY3ksXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gdGhpc0dyYXBoLnN0YXRlLlNwbGl0Sm9pblZpZXdQb2xpY3k7XG5cbiAgICAgICAgICAgICAgICAvL2NoZWNrIHRoYXQgbm9kZSBzdGlsbCBleGlzdHNcbiAgICAgICAgICAgICAgICBpZiAodGhpc0dyYXBoLm5vZGVzLmluZGV4T2Yobm9kZSkgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBjaGlsZHJlbl9zdHJ1Y3QgPSB0aGlzR3JhcGguZGF0YVNvdXJjZS5jaGlsZHJlbl9zdHJ1Y3Q7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBub2RlLmlkO1xuICAgICAgICAgICAgICAgIC8vaWYgaXQgaGFzIG5vIGFuY2VzdG9yLCBub3RoaW5nIHRvIGpvaW5cbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRyZW5fc3RydWN0LnRvcExldmVsLmluZGV4T2YobmFtZSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IG5vZGUucGFyZW50O1xuICAgICAgICAgICAgICAgIHZhciB0b19iZV9kZWxldGVkID0gW107XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVOYW1lU2V0ID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzR3JhcGgubm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy9pZiBub2RlIHdvbid0IGJlIGNvbGxhcHNlZFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpc0dyYXBoLm5vZGVzW2ldLmFuY2VzdG9ycy5pbmRleE9mKG5vZGUucGFyZW50KSA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZU5hbWVTZXQucHVzaCh0aGlzR3JhcGgubm9kZXNbaV0uaWQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9fYmVfZGVsZXRlZC5wdXNoKHRoaXNHcmFwaC5ub2Rlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG5ld19ub2RlX2lkID0gbm9kZS5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgbm9kZU5hbWVTZXQucHVzaChub2RlLnBhcmVudCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgYW5jZXN0b3JzX3N0cnVjdCA9IHRoaXNHcmFwaC5kYXRhU291cmNlLmFuY2VzdG9yc19zdHJ1Y3Q7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkcmVuX3N0cnVjdCA9IHRoaXNHcmFwaC5kYXRhU291cmNlLmNoaWxkcmVuX3N0cnVjdDtcbiAgICAgICAgICAgICAgICAvLyAtIHNldHRpbmcgZm9jdXNHcm91cHMgLVxuICAgICAgICAgICAgICAgIC8vZWl0aGVyIHJlcGxhY2luZyBvbmUgb2YgdGhlIGdyb3VwcyxcbiAgICAgICAgICAgICAgICAvL29yIGpvaW5pbmcgYmFjayBpbnRvIGEgdG9wIGxldmVsLCBzbyB0aGVyZSBpcyBvbmx5XG4gICAgICAgICAgICAgICAgLy9vbmUgZm9jdXNcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBzdGF0ZS5mb2N1c0dyb3Vwcy5pbmRleE9mKHBhcmVudCk7XG4gICAgICAgICAgICAgICAgaWYgKGFuY2VzdG9yc19zdHJ1Y3RbcGFyZW50XSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmZvY3VzR3JvdXBzW2luZGV4XSA9IGFuY2VzdG9yc19zdHJ1Y3RbcGFyZW50XTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5mb2N1c0dyb3Vwcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vbmFtZVRvQWRkIGFyZSB0b3AgbGV2ZWwgbm9kZXMgdGhhdCBhcmUgdG8gYmUgYWRkZWRcbiAgICAgICAgICAgICAgICAvL3RvIHRoZSBncmFwaC5cbiAgICAgICAgICAgICAgICB2YXIgbmFtZVRvQWRkID0gW107XG4gICAgICAgICAgICAgICAgLy93aWxsIG9ubHkgbmVlZCB0byBhZGQgYSB0b3AgbGV2ZWwgbm9kZSBpZiB0aGVyZSBpc1xuICAgICAgICAgICAgICAgIC8vb25seSBvbmUgZm9jdXNcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuZm9jdXNHcm91cHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vQWRkIG9ubHkgdGhvc3QgdGhhdCBhcmVuJ3QgYW4gYW5jZXN0b3Igb2YgdGhlIG5vZGVcbiAgICAgICAgICAgICAgICAgICAgLy90byBqb2luLCB0aGUgZm9jdXMgZ3JvdXAgb3IgYW4gYW5jZXN0b3Igb2YgaXQsXG4gICAgICAgICAgICAgICAgICAgIC8vYW5kIGFyZW4ndCBhbHJlYWR5IGluIG5vZGVOYW1lU2V0LlxuICAgICAgICAgICAgICAgICAgICAvL2dldCBmbG93IGJldHdlZW4gdG9wIGxldmVsIGFzIGxvbmcgYXNcbiAgICAgICAgICAgICAgICAgICAgLy90aGUgdG9wIGxldmVsIGlzbid0IGFuIGFuY2VzdG9yIG9mIHRoZVxuICAgICAgICAgICAgICAgICAgICAvL2ZvY3VzIGdyb3VwLCBhbmQgaXNuJ3QgYWxyZWFkeSBwYXJ0IG9mIHRoZVxuICAgICAgICAgICAgICAgICAgICAvL25vZGUgc2V0O1xuICAgICAgICAgICAgICAgICAgICB2YXIgYW5jZXN0b3JzID0gYW5jZXN0b3JzX3N0cnVjdFtub2RlLmlkXTtcbiAgICAgICAgICAgICAgICAgICAgYW5jZXN0b3JzLnB1c2goc3RhdGUuZm9jdXNHcm91cHNbMF0pO1xuICAgICAgICAgICAgICAgICAgICAvL3RoZSBvciBlbXB0eSBhcnJheSBpcyB0byBwcmV2ZW50IGNvbmNhdGVuYXRpbmcgYSBudWxsXG4gICAgICAgICAgICAgICAgICAgIC8vb3IgdW5kZWZpbmVkIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGFuY2VzdG9ycyA9IGFuY2VzdG9ycy5jb25jYXQoYW5jZXN0b3JzX3N0cnVjdFtzdGF0ZS5mb2N1c0dyb3Vwc1swXV0gfHwgW10pO1xuICAgICAgICAgICAgICAgICAgICBfLmZvckVhY2goY2hpbGRyZW5fc3RydWN0LnRvcExldmVsLCBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5jZXN0b3JzLmluZGV4T2YobikgPT09IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVOYW1lU2V0LmluZGV4T2YobikgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lVG9BZGQucHVzaChuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVOYW1lU2V0ID0gbm9kZU5hbWVTZXQuY29uY2F0KG5hbWVUb0FkZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0ZS5mb2N1c0dyb3Vwcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy9ubyBmb2N1cyBncm91cHMgbWVhbnMgd2UgYXJlIGF0IHRvcCBsZXZlbFxuICAgICAgICAgICAgICAgICAgICAvL1Nob3VsZCBhZGQgYW55IHRvcCBsZXZlbCBub2RlcyB0aGF0IGFyZW4ndFxuICAgICAgICAgICAgICAgICAgICAvL2FscmVhZHkgdGhlcmVcbiAgICAgICAgICAgICAgICAgICAgXy5mb3JFYWNoKGNoaWxkcmVuX3N0cnVjdC50b3BMZXZlbCwgZnVuY3Rpb24obikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGVOYW1lU2V0LmluZGV4T2YobikgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lVG9BZGQucHVzaChuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVOYW1lU2V0ID0gbm9kZU5hbWVTZXQuY29uY2F0KG5hbWVUb0FkZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9mb3JtYXR0aW5nIGRhdGFcbiAgICAgICAgICAgICAgICB2YXIgcmFkaXVzID0gbm9kZS5yYWRpdXMgLyB0aGlzR3JhcGguY29uc3RzLnJhZGl1c0RlY2F5OyBcbiAgICAgICAgICAgICAgICB2YXIgeExvYyA9IG5vZGUueDtcbiAgICAgICAgICAgICAgICB2YXIgeUxvYyA9IG5vZGUueTtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gbm9kZS5hbmNlc3RvcnNbMV07XG4gICAgICAgICAgICAgICAgdmFyIGFuY2VzdG9ycyA9IG5vZGUuYW5jZXN0b3JzLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgIHZhciBuZXdOb2RlID0gbmV3IFZpc3VhbGl6ZXJOb2RlLk5vZGUoeExvYywgeUxvYywgbmV3X25vZGVfaWQsIG5ld19ub2RlX2lkLCByYWRpdXMsIHBhcmVudCwgYW5jZXN0b3JzKTtcbiAgICAgICAgICAgICAgICB0aGlzR3JhcGgubm9kZXMucHVzaChuZXdOb2RlKTtcblxuICAgICAgICAgICAgICAgIC8vcmVtb3ZlIGFsbCBub2RlcyB0aGF0IHdpbGwgYmUgam9pbmVkXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b19iZV9kZWxldGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub2RlX3RvX2RlbGV0ZSA9IHRvX2JlX2RlbGV0ZWRbaV07XG4gICAgICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5ub2Rlcy5zcGxpY2UodGhpc0dyYXBoLm5vZGVzLmluZGV4T2Yobm9kZV90b19kZWxldGUpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLnNwbGljZUxpbmtzRm9yTm9kZShub2RlX3RvX2RlbGV0ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHJldERhdGEgPSB0aGlzR3JhcGguZGF0YVNvdXJjZS5nZXRGbG93QmV0d2VlblNldChub2RlTmFtZVNldCk7XG4gICAgICAgICAgICAgICAgLy9ob2xkcyB0aGUgbm9kZURhdGEgd2hpY2ggd2lsbCBiZSBwcm9jZXNzZWRcbiAgICAgICAgICAgICAgICB2YXIgbm9kZXNUb1Byb2Nlc3MgPSBbXTtcbiAgICAgICAgICAgICAgICAvL2ZpbmRpbmcgdGhlIG5vZGUgZGF0YSB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSB0b3AgbGV2ZWxcbiAgICAgICAgICAgICAgICAvL25vZGVzIHRvIGFkZCAtIG5hbWVUb0FkZC5cbiAgICAgICAgICAgICAgICB2YXIgbm9kZURhdGEgPSByZXREYXRhLm5vZGVEYXRhO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWVUb0FkZC5pbmRleE9mKG5vZGVEYXRhW2ldLmlkKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzVG9Qcm9jZXNzLnB1c2gobm9kZURhdGFbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9UaGUgdG9wIGxldmVsIG5vZGVzIHRoYXQgYXJlIGFkZGVkXG4gICAgICAgICAgICAgICAgdmFyIG5ld05vZGVzID0gdGhpc0dyYXBoLmRhdGFTb3VyY2UucHJvY2Vzc05vZGVEYXRhKG5vZGVzVG9Qcm9jZXNzKTtcbiAgICAgICAgICAgICAgICBfLmZvckVhY2gobmV3Tm9kZXMsIGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgbi5yYWRpdXMgPSBuLnJhZGl1cyB8fCB0aGlzR3JhcGguY29uc3RzLnN0YXJ0UmFkaXVzO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXNHcmFwaC5ub2RlcyA9IHRoaXNHcmFwaC5ub2Rlcy5jb25jYXQobmV3Tm9kZXMpO1xuXG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmxpbmtzID0gdGhpc0dyYXBoLmRhdGFTb3VyY2UucHJvY2Vzc0xpbmtEYXRhKHJldERhdGEubGlua0RhdGEsIHRoaXNHcmFwaC5ub2Rlcyk7XG4gICAgICAgICAgICAgICAgLy9Pbmx5IGtlZXAgdG9wIGxldmVsIG5vZGVzIHRoYXQgaGF2ZSBjb25uZWN0aW9ucyB0b1xuICAgICAgICAgICAgICAgIC8vdGhlIGN1cnJlbnQgZm9jdXMgZ3JvdXBcbiAgICAgICAgICAgICAgICAvL3dlIHJlbW92ZSB0aGUgbm9kZSBuYW1lIGZyb20gbmFtZVRvQWRkIGlmIHdlIGFyZVxuICAgICAgICAgICAgICAgIC8va2VlcGluZyBpdFxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5mb2N1c0dyb3Vwcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5mb3JFYWNoKHRoaXNHcmFwaC5saW5rcywgZnVuY3Rpb24obCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jaGVja2luZyBpZiB0aGVyZSBleGlzdHMgYSBsaW5rIHRvdWNoaW5nIGVhY2ggb2YgbmFtZVRvQWRkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZVRvQWRkLmluZGV4T2YobC5zb3VyY2UuaWQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5mb2N1c0dyb3Vwc1swXSA9PT0gbC50YXJnZXQucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVUb0FkZC5zcGxpY2UobmFtZVRvQWRkLmluZGV4T2YobC5zb3VyY2UuaWQpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5hbWVUb0FkZC5pbmRleE9mKGwudGFyZ2V0LmlkKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUuZm9jdXNHcm91cHNbMF0gPT09IGwuc291cmNlLnBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lVG9BZGQuc3BsaWNlKG5hbWVUb0FkZC5pbmRleE9mKGwudGFyZ2V0LmlkKSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vV2Ugd2FudCB0byBrZWVwIHRoZW0gYWxsXG4gICAgICAgICAgICAgICAgICAgIC8vc2luY2UgYW55IGxlZnQgaW4gbmFtZVRvQWRkIHdpbGwgYmUgcmVtb3ZlZCxcbiAgICAgICAgICAgICAgICAgICAgLy93ZSByZXNldCBuYW1lVG9BZGQgaGVyZS5cbiAgICAgICAgICAgICAgICAgICAgbmFtZVRvQWRkID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vd2hhdGV2ZXIgaXMgcmVtYWluaW5nIGluIG5hbWVUb0FkZCBpc24ndCBjb25uZWN0ZWRcbiAgICAgICAgICAgICAgICAvL3RvIHRoZSBmb2N1cyBncm91cCwgc28gd2Ugc2hvdWxkIHJlbW92ZSBpdC5cbiAgICAgICAgICAgICAgICB2YXIgbm9kZVRvUmVtb3ZlID0gW107XG4gICAgICAgICAgICAgICAgaWYgKG5hbWVUb0FkZC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzR3JhcGgubm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lVG9BZGQuaW5kZXhPZih0aGlzR3JhcGgubm9kZXNbaV0uaWQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVUb0FkZC5zcGxpY2UobmFtZVRvQWRkLmluZGV4T2YodGhpc0dyYXBoLm5vZGVzW2ldLmlkKSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLnNwbGljZUxpbmtzRm9yTm9kZSh0aGlzR3JhcGgubm9kZXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVUb1JlbW92ZS5wdXNoKHRoaXNHcmFwaC5ub2Rlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWVUb0FkZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF8uZm9yRWFjaChub2RlVG9SZW1vdmUsIGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc0dyYXBoLm5vZGVzLnNwbGljZSh0aGlzR3JhcGgubm9kZXMuaW5kZXhPZihuKSwgMSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzR3JhcGguaW5pdE5vZGVzKCk7XG4gICAgICAgICAgICAgICAgdGhpc0dyYXBoLmluaXRMaW5rcygpO1xuXG4gICAgICAgICAgICAgICAgc3RhdGVTdXBlci5zcGxpdE5vZGVzLnNwbGljZShzdGF0ZVN1cGVyLnNwbGl0Tm9kZXMuaW5kZXhPZihuZXdOb2RlLmlkKSwgMSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3Tm9kZTsgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsbGVkIGFmdGVyIGEgc2luZ2xlIG5vZGUgaXMgam9pbmVkXG4gICAgICAgICAgICAgKiBcbiAgICAgICAgICAgICAqIElmIHRoZSBmb2N1cyBncm91cCBoYXMgYmVlbiBzZWVuIGJlZm9yZSwgaXQgd2lsbFxuICAgICAgICAgICAgICogbG9hZCB0aGF0IGxheW91dC4gT3RoZXJ3aXNlLCBpdCB3aWxsIHJ1biBhIGQzIGZvcmNlXG4gICAgICAgICAgICAgKiBzaW11bGF0aW9uIHRvIGdlbmVyYXRlIG9uZS5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICAgICB7Tm9kZX0gIG5ld05vZGUgIFRoZSBuZXcgbm9kZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBqb2luTm9kZUV2ZW50KG5ld05vZGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0dyYXBoID0gdGhpcy5ncmFwaCxcbiAgICAgICAgICAgICAgICAgICAgdGhpc1BvbGljeSA9IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gdGhpc0dyYXBoLnN0YXRlLlNwbGl0Sm9pblZpZXdQb2xpY3k7XG5cbiAgICAgICAgICAgICAgICAvL2lmIHRoZSBsYXN0IGV2ZW50IGhhcyB0aGUgc2FtZSBpZCwgaXQgbXVzdCBiZSB0aGVcbiAgICAgICAgICAgICAgICAvL29wcHBvc2l0ZSBvZiB0aGlzIGV2ZW50LCBzbyB3ZSByZW1vdmUgdGhhdCBldmVudCBmcm9tXG4gICAgICAgICAgICAgICAgLy90aGUgZXZlbnQgc3RhY2suXG4gICAgICAgICAgICAgICAgLy9PdGhlcndpc2UsIHdlIGFkZCB0aGUgZXZlbnQgdG8gdGhlIHN0YWNrXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLmV2ZW50SGlzdG9yeS5sZW5ndGggIT09IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZXZlbnRIaXN0b3J5W3N0YXRlLmV2ZW50SGlzdG9yeS5sZW5ndGggLSAxXS5pZCA9PT0gbmV3Tm9kZS5pZCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5ldmVudEhpc3RvcnkucG9wKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZXZlbnRIaXN0b3J5LnB1c2goe2lkOm5ld05vZGUuaWQsIGV2ZW50Oidqb2luJ30pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkcmVuX3N0cnVjdCA9IHRoaXNHcmFwaC5kYXRhU291cmNlLmNoaWxkcmVuX3N0cnVjdDtcblxuICAgICAgICAgICAgICAgIF8uZm9yRWFjaCh0aGlzR3JhcGgubm9kZXMsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgZC5TcGxpdEpvaW5WaWV3UG9saWN5ID0ge307XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLmluY2x1ZGVzKGNoaWxkcmVuX3N0cnVjdFtzdGF0ZS5mb2N1c0dyb3Vwc1swXV0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQuaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkLlNwbGl0Sm9pblZpZXdQb2xpY3kudHlwZSA9IFwiZm9jdXNcIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuU3BsaXRKb2luVmlld1BvbGljeS50eXBlID0gXCJjb25uZWN0ZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy9zZXR0aW5nIGJhY2sgYnV0dG9uXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLmJhY2tCdXR0b25FbGVtICE9IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5ldmVudEhpc3RvcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmJhY2tCdXR0b25FbGVtLmZhZGVUbygnc2xvdycsIDApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vc2V0dGluZyB0aXRsZVxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS50aXRsZUVsZW0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5mb2N1c0dyb3Vwcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IHN0YXRlLmZvY3VzR3JvdXBzWzBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5mb2N1c0dyb3Vwcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gJyAmICcgKyBzdGF0ZS5mb2N1c0dyb3Vwc1sxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS50aXRsZUVsZW0udGV4dCh0ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpc1BvbGljeS5zZXRMYXlvdXQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBVbmRvZXMgdGhlIGxhc3Qgc3BsaXQgb3Igam9pbiBldmVudC5cbiAgICAgICAgICAgICAqIE1lYW50IHRvIGJlIGNhbGxlZCBieSB0aGUgYmFjayBidXR0b24uXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHVuZG9MYXN0RXZlbnQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNHcmFwaCA9IHRoaXMuZ3JhcGgsXG4gICAgICAgICAgICAgICAgICAgIHRoaXNQb2xpY3kgPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXNHcmFwaC5zdGF0ZS5TcGxpdEpvaW5WaWV3UG9saWN5O1xuXG4gICAgICAgICAgICAgICAgdmFyIGxhc3QgPSBzdGF0ZS5ldmVudEhpc3Rvcnlbc3RhdGUuZXZlbnRIaXN0b3J5Lmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIHZhciBpZCA9IGxhc3QuaWQ7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGU7XG4gICAgICAgICAgICAgICAgaWYgKGxhc3QuZXZlbnQgPT09ICdqb2luJykge1xuICAgICAgICAgICAgICAgICAgICBub2RlID0gdGhpc0dyYXBoLmZpbmROb2RlQnlJZChpZCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkM25vZGUgPSB0aGlzR3JhcGguZmluZEQzTm9kZShpZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNQb2xpY3kuZGJsY2xpY2soZDNub2RlLCBub2RlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZUlkID0gdGhpc0dyYXBoLmRhdGFTb3VyY2UuY2hpbGRyZW5fc3RydWN0W2lkXVswXTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHRoaXNHcmFwaC5maW5kTm9kZUJ5SWQobm9kZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgc3VwZXIuam9pbk5vZGUuY2FsbCh0aGlzUG9saWN5LCBub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgUG9saWN5OiBTcGxpdEpvaW5WaWV3UG9saWN5XG4gICAgICAgIH1cbn1dKTtcblxuXG5cblxuXG5cblxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzE4LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnZvbHVtZXMnLCBbJ2NvbnRpdi5tb2RlbHMnLCAnY29udGl2LmRpcmVjdGl2ZXMnLCAnY29udGl2LnV0aWxzJ10pXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnZvbHVtZXMnLCB7XG4gICAgICAgICAgICB1cmw6ICcvdm9sdW1lcycsXG4gICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnPGRpdiB1aS12aWV3IGNsYXNzPVwidWkgY29udGFpbmVyXCIvPidcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUudm9sdW1lcy5saXN0Jywge1xuICAgICAgICAgICAgdXJsOiAnL2xpc3QnLFxuICAgICAgICAgICAgY29tcG9uZW50OiAndm9sdW1lbGlzdCdcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUudm9sdW1lcy5kZXRhaWxzJywge1xuICAgICAgICAgICAgdXJsOiAnL2RldGFpbHMvOmtleScsXG4gICAgICAgICAgICBjb21wb25lbnQ6ICd2b2x1bWVkZXRhaWxzJ1xuICAgICAgICB9KTtcbiAgICB9XSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb2R1bGUuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRGVjbGFyZSBhcHAgbGV2ZWwgbW9kdWxlIHdoaWNoIGRlcGVuZHMgb24gdmlld3MsIGFuZCBjb21wb25lbnRzXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2QXBwJywgW1xuICAgICd1aS5yb3V0ZXInLFxuICAgICdjb250aXYubG9naW4nLFxuICAgICdjb250aXYubWVudScsXG4gICAgJ2NvbnRpdi5kYXNoYm9hcmQnLFxuICAgICdjb250aXYuYXBwbGljYXRpb25ncm91cHMnLFxuICAgICdjb250aXYubmV0d29ya3MnLFxuICAgICdjb250aXYubmV0d29ya3BvbGljaWVzJyxcbiAgICAnY29udGl2LnN0b3JhZ2Vwb2xpY2llcycsXG4gICAgJ2NvbnRpdi5zZXJ2aWNlbGJzJyxcbiAgICAnY29udGl2LnZvbHVtZXMnLFxuICAgICdjb250aXYubm9kZXMnLFxuICAgICdjb250aXYub3JnYW5pemF0aW9ucycsXG4gICAgJ2NvbnRpdi5zZXR0aW5ncycsXG4gICAgJ2NvbnRpdi52aXN1YWxpemF0aW9uJ1xuXSlcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCAnJHVybFJvdXRlclByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Jywge1xuICAgICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IHVpLXZpZXcgY2xhc3M9XCJ1aSBmbHVpZCBjb250YWluZXJcIi8+J1xuICAgICAgICB9KTtcbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICAgIH1dKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC5qcy5tYXAiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTkvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubG9naW4nKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubG9naW4nLCB7XG4gICAgICAgICAgICB1cmw6ICcvJyxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbG9naW4vbG9naW4uaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTG9naW5DdHJsIGFzIGxvZ2luQ3RybCdcbiAgICAgICAgfSk7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ0xvZ2luQ3RybCcsIFsnJHN0YXRlJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICBmdW5jdGlvbiAoJHN0YXRlLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICB2YXIgbG9naW5DdHJsID0gdGhpcztcbiAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9EYXNoYm9hcmQoKSB7XG4gICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51LmRhc2hib2FyZCcsIHsgdXNlcm5hbWU6IGxvZ2luQ3RybC51c2VybmFtZSB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBsb2dpbigpIHtcbiAgICAgICAgICAgIHJldHVyblRvRGFzaGJvYXJkKCk7XG4gICAgICAgIH1cbiAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihsb2dpbkN0cmwpO1xuICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IobG9naW5DdHJsKTtcbiAgICAgICAgbG9naW5DdHJsLmxvZ2luID0gbG9naW47XG4gICAgfV0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bG9naW5jdHJsLmpzLm1hcCIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xOS8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5tZW51JylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUnLCB7XG4gICAgICAgICAgICB1cmw6ICcvbScsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21lbnUvbWVudS5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNZW51Q3RybCBhcyBtZW51Q3RybCcsXG4gICAgICAgICAgICBwYXJhbXM6IHsgdXNlcm5hbWU6IG51bGwgfVxuICAgICAgICB9KTtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignTWVudUN0cmwnLCBbJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgdmFyIG1lbnVDdHJsID0gdGhpcztcbiAgICAgICAgZnVuY3Rpb24gbG9nb3V0KCkge1xuICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubG9naW4nKTtcbiAgICAgICAgfVxuICAgICAgICBtZW51Q3RybC51c2VybmFtZSA9ICRzdGF0ZVBhcmFtcy51c2VybmFtZTtcbiAgICAgICAgbWVudUN0cmwubG9nb3V0ID0gbG9nb3V0O1xuICAgIH1dKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1lbnVDdHJsLmpzLm1hcCIsImFuZ3VsYXIubW9kdWxlKCdjb250aXYubm9kZXMnKVxuICAgIC5mYWN0b3J5KCdCZ3BTZXJ2aWNlJywgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcbiAgICAgICAgZnVuY3Rpb24gZ2V0QmdwKGN0cmwpIHtcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICAgICB2YXIgdXJsID0gQ29udGl2R2xvYmFscy5CR1BTX0VORFBPSU5UICsgY3RybC5rZXkgKyAnLyc7XG4gICAgICAgICAgICAkaHR0cC5nZXQodXJsKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgICAgICBjdHJsLm5laWdoYm9yID0gcmVzdWx0LmRhdGE7XG4gICAgICAgICAgICAgICAgY3RybC5uZWlnaGJvcnMucHVzaCh7ICduYW1lJzogY3RybC5uZWlnaGJvclsnbmVpZ2hib3InXSwgJ3ZhbHVlJzogY3RybC5uZWlnaGJvclsnbmVpZ2hib3ItYXMnXSB9KTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlQmdwKGN0cmwpIHtcbiAgICAgICAgICAgIHZhciB1cmwgPSBDb250aXZHbG9iYWxzLkJHUFNfRU5EUE9JTlQgKyBjdHJsLmtleSArICcvJztcbiAgICAgICAgICAgIHJldHVybiAkaHR0cC5wb3N0KHVybCwgY3RybC5uZWlnaGJvcik7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgICAgICBmdW5jdGlvbiBnZXRCZ3BJbnNwZWN0KGtleSkge1xuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICAgICAgIHZhciB1cmwgPSBDb250aXZHbG9iYWxzLkJHUFNfSU5TUEVDVF9FTkRQT0lOVCArIGtleSArICcvJztcbiAgICAgICAgICAgICRodHRwLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0QmdwOiBnZXRCZ3AsXG4gICAgICAgICAgICB1cGRhdGVCZ3A6IHVwZGF0ZUJncCxcbiAgICAgICAgICAgIGdldEJncEluc3BlY3Q6IGdldEJncEluc3BlY3RcbiAgICAgICAgfTtcbiAgICB9XSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iZ3BzZXJ2aWNlLmpzLm1hcCIsImFuZ3VsYXIubW9kdWxlKFwiY29udGl2Lm5vZGVzXCIpXG4gICAgLmRpcmVjdGl2ZShcImN0dkxvZ3NcIiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnbm9kZXMvbG9ncy5odG1sJyxcbiAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgIGxvZzogXCI9XCIsXG4gICAgICAgICAgICB0aXRsZTogXCJAXCJcbiAgICAgICAgfVxuICAgIH07XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxvZ3NkaXJlY3RpdmUuanMubWFwIiwiYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5ub2RlcycpXG4gICAgLmZhY3RvcnkoJ0xvZ1NlcnZpY2UnLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xuICAgICAgICBmdW5jdGlvbiBnZXRBY3RpdmVMb2dzKCkge1xuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICAgICAgIHZhciB1cmwgPSBDb250aXZHbG9iYWxzLk5PREVTX0FDVElWRV9KT0JfRU5EUE9JTlQ7XG4gICAgICAgICAgICAkaHR0cC5nZXQodXJsKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0TGFzdExvZ3MoKSB7XG4gICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgICAgICAgdmFyIHVybCA9IENvbnRpdkdsb2JhbHMuTk9ERVNfTEFTVF9KT0JfRU5EUE9JTlQ7XG4gICAgICAgICAgICAkaHR0cC5nZXQodXJsKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdldEFjdGl2ZUxvZ3M6IGdldEFjdGl2ZUxvZ3MsXG4gICAgICAgICAgICBnZXRMYXN0TG9nczogZ2V0TGFzdExvZ3NcbiAgICAgICAgfTtcbiAgICB9XSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1sb2dzZXJ2aWNlLmpzLm1hcCIsImFuZ3VsYXIubW9kdWxlKCdjb250aXYubm9kZXMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5ub2Rlcy5hY3RpdmVsb2cnLCB7XG4gICAgICAgICAgICB1cmw6ICcvYWN0aXZlbG9nJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb2RlQWN0aXZlSm9iTG9nc0N0cmwgYXMgbm9kZUFjdGl2ZUpvYkxvZ3NDdHJsJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnPGN0di1sb2dzIHRpdGxlPVwiQWN0aXZlIEpvYlwiIGxvZz1cIm5vZGVBY3RpdmVKb2JMb2dzQ3RybC5hY3RpdmVMb2dzXCI+PC9jdHYtbG9ncz4nXG4gICAgICAgIH0pO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdOb2RlQWN0aXZlSm9iTG9nc0N0cmwnLCBbJyRzY29wZScsICckaW50ZXJ2YWwnLCAnTG9nU2VydmljZScsXG4gICAgZnVuY3Rpb24gKCRzY29wZSwgJGludGVydmFsLCBMb2dTZXJ2aWNlKSB7XG4gICAgICAgIHZhciBub2RlQWN0aXZlSm9iTG9nc0N0cmwgPSB0aGlzO1xuICAgICAgICBmdW5jdGlvbiBnZXRBY3RpdmVMb2dzKCkge1xuICAgICAgICAgICAgTG9nU2VydmljZS5nZXRBY3RpdmVMb2dzKCkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgbm9kZUFjdGl2ZUpvYkxvZ3NDdHJsLmFjdGl2ZUxvZ3MgPSByZXN1bHQ7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIC8vT25jZSB0aGUgam9iIGZpbmlzaGVzLCBlbmRwb2ludCByZXR1cm5zIDUwMCBlcnJvci4gU28gcmVzZXQgdGhlIGFjdGl2ZUxvZ3NcbiAgICAgICAgICAgICAgICBub2RlQWN0aXZlSm9iTG9nc0N0cmwuYWN0aXZlTG9ncyA9IHtcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ1RoZXJlIGlzIGN1cnJlbnRseSBubyBhY3RpdmUgam9iLiBDaGVjayBMYXN0IEpvYiBmb3IgYSBqb2IgdGhhdCByZWNlbnRseSBmaW5pc2hlZC4nXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGdldEFjdGl2ZUxvZ3MoKTtcbiAgICAgICAgdmFyIHByb21pc2U7XG4gICAgICAgIC8vRG9uJ3QgZG8gYXV0by1yZWZyZXNoIGlmIG9uZSBpcyBhbHJlYWR5IGluIHByb2dyZXNzXG4gICAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQocHJvbWlzZSkpIHtcbiAgICAgICAgICAgIHByb21pc2UgPSAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGdldEFjdGl2ZUxvZ3MoKTtcbiAgICAgICAgICAgIH0sIENvbnRpdkdsb2JhbHMuUkVGUkVTSF9JTlRFUlZBTCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9zdG9wIHBvbGxpbmcgd2hlbiB1c2VyIG1vdmVzIGF3YXkgZnJvbSB0aGUgcGFnZVxuICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRpbnRlcnZhbC5jYW5jZWwocHJvbWlzZSk7XG4gICAgICAgIH0pO1xuICAgIH1dKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vZGVhY3RpdmVqb2Jsb2dzY3RybC5qcy5tYXAiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMjUvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubm9kZXMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5ub2Rlcy5jb21taXNzaW9uJywge1xuICAgICAgICAgICAgdXJsOiAnL2NvbW1pc3Npb24vOmtleScsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTm9kZUNvbW1pc3Npb25DdHJsIGFzIG5vZGVDb21taXNzaW9uQ3RybCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25vZGVzL25vZGVjb21taXNzaW9uLmh0bWwnXG4gICAgICAgIH0pO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdOb2RlQ29tbWlzc2lvbkN0cmwnLCBbXG4gICAgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnTm9kZXNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsICdOb2Rlc1NlcnZpY2UnLFxuICAgIGZ1bmN0aW9uICgkc3RhdGUsICRzdGF0ZVBhcmFtcywgTm9kZXNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UsIE5vZGVzU2VydmljZSkge1xuICAgICAgICB2YXIgbm9kZUNvbW1pc3Npb25DdHJsID0gdGhpcztcbiAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9Ob2RlRGV0YWlscygpIHtcbiAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUubm9kZXMuZGV0YWlscy5pbmZvJywgeyAna2V5JzogJHN0YXRlUGFyYW1zLmtleSB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjYW5jZWxDb21taXNzaW9uaW5nTm9kZSgpIHtcbiAgICAgICAgICAgIHJldHVyblRvTm9kZURldGFpbHMoKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjb21taXNzaW9uKCkge1xuICAgICAgICAgICAgaWYgKG5vZGVDb21taXNzaW9uQ3RybC5mb3JtLiR2YWxpZCkge1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihub2RlQ29tbWlzc2lvbkN0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKG5vZGVDb21taXNzaW9uQ3RybCk7XG4gICAgICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLm5vZGVPcHNPYmoubm9kZXMgPSBbJHN0YXRlUGFyYW1zLmtleV07XG4gICAgICAgICAgICAgICAgTm9kZXNTZXJ2aWNlLmNsZWFudXBFeHRyYVZhcnMobm9kZUNvbW1pc3Npb25DdHJsKTtcbiAgICAgICAgICAgICAgICBOb2Rlc1NlcnZpY2UuY3JlYXRlRXh0cmFWYXJzKG5vZGVDb21taXNzaW9uQ3RybCk7XG4gICAgICAgICAgICAgICAgTm9kZXNNb2RlbC5jb21taXNzaW9uKG5vZGVDb21taXNzaW9uQ3RybC5ub2RlT3BzT2JqKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihub2RlQ29tbWlzc2lvbkN0cmwpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub05vZGVEZXRhaWxzKCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihub2RlQ29tbWlzc2lvbkN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3Iobm9kZUNvbW1pc3Npb25DdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5ub2RlT3BzT2JqID0ge307XG4gICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5leHRyYV92YXJzID0ge307IC8vVE9ETyBJbnRpYWxpemUgZnJvbSBnbG9iYWwgc2V0dGluZ3NcbiAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmFuc2libGVWYXJpYWJsZXMgPSBbXTtcbiAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmVudlZhcmlhYmxlcyA9IFtdO1xuICAgICAgICBOb2Rlc1NlcnZpY2UuZ2V0U2V0dGluZ3Mobm9kZUNvbW1pc3Npb25DdHJsKTtcbiAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmNhbmNlbENvbW1pc3Npb25pbmdOb2RlID0gY2FuY2VsQ29tbWlzc2lvbmluZ05vZGU7XG4gICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5jb21taXNzaW9uID0gY29tbWlzc2lvbjtcbiAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihub2RlQ29tbWlzc2lvbkN0cmwpO1xuICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Iobm9kZUNvbW1pc3Npb25DdHJsKTtcbiAgICB9XSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub2RlY29tbWlzc2lvbmN0cmwuanMubWFwIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzI1LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm5vZGVzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubm9kZXMuZGV0YWlscycsIHtcbiAgICAgICAgICAgIHVybDogJy9kZXRhaWxzLzprZXknLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ05vZGVEZXRhaWxzQ3RybCBhcyBub2RlRGV0YWlsc0N0cmwnLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdub2Rlcy9ub2RlZGV0YWlscy5odG1sJ1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5ub2Rlcy5kZXRhaWxzLmluZm8nLCB7XG4gICAgICAgICAgICB1cmw6ICcvaW5mbycsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTm9kZURldGFpbHNDdHJsIGFzIG5vZGVEZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25vZGVzL25vZGVpbmZvLmh0bWwnXG4gICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5vZGVzLmRldGFpbHMuc3RhdHMnLCB7XG4gICAgICAgICAgICB1cmw6ICcvc3RhdHMnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ05vZGVEZXRhaWxzQ3RybCBhcyBub2RlRGV0YWlsc0N0cmwnLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdub2Rlcy9ub2Rlc3RhdHMuaHRtbCdcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubm9kZXMuZGV0YWlscy5sb2dzJywge1xuICAgICAgICAgICAgdXJsOiAnL2xvZ3MnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ05vZGVEZXRhaWxzQ3RybCBhcyBub2RlRGV0YWlsc0N0cmwnLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdub2Rlcy9ub2RlbG9ncy5odG1sJ1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5ub2Rlcy5kZXRhaWxzLmVkaXQnLCB7XG4gICAgICAgICAgICB1cmw6ICcvZWRpdCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTm9kZURldGFpbHNDdHJsIGFzIG5vZGVEZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25vZGVzL25vZGVpbmZvLmh0bWwnXG4gICAgICAgIH0pO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdOb2RlRGV0YWlsc0N0cmwnLCBbJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnJHNjb3BlJywgJyRpbnRlcnZhbCcsICdOb2Rlc01vZGVsJywgJ0JncFNlcnZpY2UnLFxuICAgIGZ1bmN0aW9uICgkc3RhdGUsICRzdGF0ZVBhcmFtcywgJHNjb3BlLCAkaW50ZXJ2YWwsIE5vZGVzTW9kZWwsIEJncFNlcnZpY2UpIHtcbiAgICAgICAgdmFyIG5vZGVEZXRhaWxzQ3RybCA9IHRoaXM7XG4gICAgICAgIG5vZGVEZXRhaWxzQ3RybC5udW1iZXJwYXR0ZXJuID0gQ29udGl2R2xvYmFscy5OVU1CRVJfUkVHRVg7XG4gICAgICAgIGZ1bmN0aW9uIGRlY29tbWlzc2lvbigpIHtcbiAgICAgICAgICAgIHZhciBub2RlT3BzT2JqID0ge1xuICAgICAgICAgICAgICAgIG5vZGVzOiBbJHN0YXRlUGFyYW1zLmtleV1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBOb2Rlc01vZGVsLmRlY29tbWlzc2lvbihub2RlT3BzT2JqKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAvL0Rpc2FibGUgYWxsIGJ1dHRvbnMgaW5pdGlhbGx5LiBQb2xsIHdpbGwgYXNzaWduIHZhbHVlcyBhcHByb3ByaWF0ZWx5LlxuICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5zaG93Q29tbWlzc2lvbkJ1dHRvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5jb21taXNzaW9uQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC51cGdyYWRlQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdXBncmFkZSgpIHtcbiAgICAgICAgICAgIHZhciBub2RlT3BzT2JqID0ge1xuICAgICAgICAgICAgICAgIG5vZGVzOiBbJHN0YXRlUGFyYW1zLmtleV1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBOb2Rlc01vZGVsLnVwZ3JhZGUobm9kZU9wc09iaikudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgLy9EaXNhYmxlIGFsbCBidXR0b25zIGluaXRpYWxseS4gUG9sbCB3aWxsIGFzc2lnbiB2YWx1ZXMgYXBwcm9wcmlhdGVseS5cbiAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuc2hvd0NvbW1pc3Npb25CdXR0b24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuY29tbWlzc2lvbkJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwudXBncmFkZUJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNwbGF5IGJ1dHRvbnMgYmFzZWQgb24gc3RhdHVzIG9mIG5vZGVcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIHNldEJ1dHRvbkRpc3BsYXkoKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKG5vZGVEZXRhaWxzQ3RybC5ub2RlWydpbnZlbnRvcnlfc3RhdGUnXS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdVbmFsbG9jYXRlZCc6XG4gICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5zaG93Q29tbWlzc2lvbkJ1dHRvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5jb21taXNzaW9uQnV0dG9uRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC51cGdyYWRlQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdEZWNvbW1pc3Npb25lZCc6XG4gICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5zaG93Q29tbWlzc2lvbkJ1dHRvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5jb21taXNzaW9uQnV0dG9uRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC51cGdyYWRlQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdQcm92aXNpb25pbmcnOlxuICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuc2hvd0NvbW1pc3Npb25CdXR0b24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuY29tbWlzc2lvbkJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnVwZ3JhZGVCdXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0FsbG9jYXRlZCc6XG4gICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5zaG93Q29tbWlzc2lvbkJ1dHRvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuY29tbWlzc2lvbkJ1dHRvbkVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwudXBncmFkZUJ1dHRvbkVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdDYW5jZWxsZWQnOlxuICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuc2hvd0NvbW1pc3Npb25CdXR0b24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLmNvbW1pc3Npb25CdXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC51cGdyYWRlQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdNYWludGVuYW5jZSc6XG4gICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5zaG93Q29tbWlzc2lvbkJ1dHRvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5jb21taXNzaW9uQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwudXBncmFkZUJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnNob3dDb21taXNzaW9uQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLmNvbW1pc3Npb25CdXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC51cGdyYWRlQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXROb2RlSW5mbyhyZWxvYWQpIHtcbiAgICAgICAgICAgIE5vZGVzTW9kZWwuZ2V0TW9kZWxCeUtleSgkc3RhdGVQYXJhbXMua2V5LCByZWxvYWQpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwubm9kZSA9IG5vZGU7XG4gICAgICAgICAgICAgICAgc2V0QnV0dG9uRGlzcGxheSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc2V0TW9kZSgpIHtcbiAgICAgICAgICAgIGlmICgkc3RhdGUuaXMoJ2NvbnRpdi5tZW51Lm5vZGVzLmRldGFpbHMuZWRpdCcpKSB7XG4gICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLm1vZGUgPSAnZWRpdCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwubW9kZSA9ICdkZXRhaWxzJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub0luZm8oKSB7XG4gICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51Lm5vZGVzLmRldGFpbHMuaW5mbycpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUJncEluZm8oKSB7XG4gICAgICAgICAgICBpZiAobm9kZURldGFpbHNDdHJsLmZvcm0uJHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLm5laWdoYm9yLmtleSA9ICRzdGF0ZVBhcmFtcy5rZXk7XG4gICAgICAgICAgICAgICAgLy8gYmFja2VuZCBvbmx5IHN1cHBvcnRzIGFkZGluZyBvbmUgbmVpZ2hib3IgY3VycmVudGx5XG4gICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLm5laWdoYm9ycy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5uZWlnaGJvclsnbmVpZ2hib3InXSA9IGl0ZW0ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLm5laWdoYm9yWyduZWlnaGJvci1hcyddID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBCZ3BTZXJ2aWNlLnVwZGF0ZUJncChub2RlRGV0YWlsc0N0cmwpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwubmVpZ2hib3IgPSByZXN1bHQuY29uZmlnLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblRvSW5mbygpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0QmdwSW5mbygpIHtcbiAgICAgICAgICAgIEJncFNlcnZpY2UuZ2V0QmdwKG5vZGVEZXRhaWxzQ3RybCkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLm5laWdoYm9yID0gcmVzdWx0O1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldEJncEluc3BlY3QoKSB7XG4gICAgICAgICAgICBCZ3BTZXJ2aWNlLmdldEJncEluc3BlY3QoJHN0YXRlUGFyYW1zLmtleSkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLmluc3BlY3QgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnJvdXRlcyA9IHJlc3VsdC5PcGVyLnJvdXRlcztcbiAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuZmlsdGVyZWRyb3V0ZXMgPSByZXN1bHQuT3Blci5yb3V0ZXM7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZURldGFpbHNDdHJsLmRlY29tbWlzc2lvbiA9IGRlY29tbWlzc2lvbjtcbiAgICAgICAgbm9kZURldGFpbHNDdHJsLnVwZ3JhZGUgPSB1cGdyYWRlO1xuICAgICAgICBub2RlRGV0YWlsc0N0cmwuc2V0TW9kZSA9IHNldE1vZGU7XG4gICAgICAgIG5vZGVEZXRhaWxzQ3RybC51cGRhdGVCZ3BJbmZvID0gdXBkYXRlQmdwSW5mbztcbiAgICAgICAgbm9kZURldGFpbHNDdHJsLnJldHVyblRvSW5mbyA9IHJldHVyblRvSW5mbztcbiAgICAgICAgbm9kZURldGFpbHNDdHJsLm5laWdoYm9ycyA9IFtdO1xuICAgICAgICBub2RlRGV0YWlsc0N0cmwubmVpZ2hib3IgPSB7fTtcbiAgICAgICAgbm9kZURldGFpbHNDdHJsLmtleSA9ICRzdGF0ZVBhcmFtcy5rZXk7XG4gICAgICAgIGdldEJncEluZm8oKTtcbiAgICAgICAgZ2V0QmdwSW5zcGVjdCgpO1xuICAgICAgICBzZXRNb2RlKCk7XG4gICAgICAgIC8vTG9hZCBmcm9tIGNhY2hlIGZvciBxdWljayBkaXNwbGF5IGluaXRpYWxseVxuICAgICAgICBnZXROb2RlSW5mbyhmYWxzZSk7XG4gICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICAvL0Rvbid0IGRvIGF1dG8tcmVmcmVzaCBpZiBvbmUgaXMgYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgICBpZiAoIWFuZ3VsYXIuaXNEZWZpbmVkKHByb21pc2UpKSB7XG4gICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBnZXROb2RlSW5mbyh0cnVlKTtcbiAgICAgICAgICAgIH0sIDUwMDApO1xuICAgICAgICB9XG4gICAgICAgIC8vc3RvcCBwb2xsaW5nIHdoZW4gdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcbiAgICAgICAgJHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHByb21pc2UpO1xuICAgICAgICB9KTtcbiAgICB9XSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub2RlZGV0YWlsc2N0cmwuanMubWFwIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA2LzE0LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZShcImNvbnRpdi5ub2Rlc1wiKVxuICAgIC5kaXJlY3RpdmUoXCJjdHZOb2Rlc3RhdHVzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgbm9kZTogJz0nXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnbm9kZXMvbm9kZXN0YXR1cy5odG1sJ1xuICAgIH07XG59KVxuICAgIC5kaXJlY3RpdmUoXCJjdHZOb2Rlc3RhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICBub2RlOiAnPSdcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdub2Rlcy9ub2Rlc3RhdGUuaHRtbCdcbiAgICB9O1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub2RlZGlyZWN0aXZlLmpzLm1hcCIsImFuZ3VsYXIubW9kdWxlKCdjb250aXYubm9kZXMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5ub2Rlcy5kaXNjb3ZlcicsIHtcbiAgICAgICAgICAgIHVybDogJy9kaXNjb3ZlcicsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTm9kZURpc2NvdmVyQ3RybCBhcyBub2RlRGlzY292ZXJDdHJsJyxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbm9kZXMvbm9kZWRpc2NvdmVyLmh0bWwnXG4gICAgICAgIH0pO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdOb2RlRGlzY292ZXJDdHJsJywgW1xuICAgICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ05vZGVzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLCAnTm9kZXNTZXJ2aWNlJyxcbiAgICBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsIE5vZGVzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlLCBOb2Rlc1NlcnZpY2UpIHtcbiAgICAgICAgdmFyIG5vZGVEaXNjb3ZlckN0cmwgPSB0aGlzO1xuICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub05vZGVzKCkge1xuICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5ub2Rlcy5saXN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY2FuY2VsRGlzY292ZXJpbmdOb2RlKCkge1xuICAgICAgICAgICAgcmV0dXJuVG9Ob2RlcygpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGRpc2NvdmVyKCkge1xuICAgICAgICAgICAgaWYgKG5vZGVEaXNjb3ZlckN0cmwuZm9ybS4kdmFsaWQpIHtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Iobm9kZURpc2NvdmVyQ3RybCk7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIobm9kZURpc2NvdmVyQ3RybCk7XG4gICAgICAgICAgICAgICAgY3JlYXRlSVBBZGRyQXJyYXkoKTtcbiAgICAgICAgICAgICAgICBOb2Rlc1NlcnZpY2UuY3JlYXRlRXh0cmFWYXJzKG5vZGVEaXNjb3ZlckN0cmwpO1xuICAgICAgICAgICAgICAgIE5vZGVzTW9kZWwuZGlzY292ZXIobm9kZURpc2NvdmVyQ3RybC5ub2RlT3BzT2JqKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihub2RlRGlzY292ZXJDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9Ob2RlcygpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobm9kZURpc2NvdmVyQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihub2RlRGlzY292ZXJDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUlQQWRkckFycmF5KCkge1xuICAgICAgICAgICAgbm9kZURpc2NvdmVyQ3RybC5ub2RlT3BzT2JqLmFkZHJzID0gXy53b3Jkcyhub2RlRGlzY292ZXJDdHJsLm5vZGVJUEFkZHIsIC9bXiwgXSsvZyk7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZURpc2NvdmVyQ3RybC5ub2RlT3BzT2JqID0ge307XG4gICAgICAgIG5vZGVEaXNjb3ZlckN0cmwuZXh0cmFfdmFycyA9IHt9OyAvL1RPRE8gSW50aWFsaXplIGZyb20gZ2xvYmFsIHNldHRpbmdzXG4gICAgICAgIG5vZGVEaXNjb3ZlckN0cmwuYW5zaWJsZVZhcmlhYmxlcyA9IFtdO1xuICAgICAgICBub2RlRGlzY292ZXJDdHJsLmVudlZhcmlhYmxlcyA9IFtdO1xuICAgICAgICBub2RlRGlzY292ZXJDdHJsLm5vZGVJUEFkZHIgPSAnJzsgLy9JUCBhZGRyZXNzIG9mIG5vZGVzIHRvIGRpc2NvdmVyXG4gICAgICAgIE5vZGVzU2VydmljZS5nZXRTZXR0aW5ncyhub2RlRGlzY292ZXJDdHJsKTtcbiAgICAgICAgbm9kZURpc2NvdmVyQ3RybC5kaXNjb3ZlciA9IGRpc2NvdmVyO1xuICAgICAgICBub2RlRGlzY292ZXJDdHJsLmNhbmNlbERpc2NvdmVyaW5nTm9kZSA9IGNhbmNlbERpc2NvdmVyaW5nTm9kZTtcbiAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihub2RlRGlzY292ZXJDdHJsKTtcbiAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKG5vZGVEaXNjb3ZlckN0cmwpO1xuICAgIH1dKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vZGVkaXNjb3ZlcmN0cmwuanMubWFwIiwiYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5ub2RlcycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5vZGVzLmxhc3Rsb2cnLCB7XG4gICAgICAgICAgICB1cmw6ICcvbGFzdGxvZycsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTm9kZUxhc3RKb2JMb2dzQ3RybCBhcyBub2RlTGFzdEpvYkxvZ3NDdHJsJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnPGN0di1sb2dzIHRpdGxlPVwiTGFzdCBKb2JcIiBsb2c9XCJub2RlTGFzdEpvYkxvZ3NDdHJsLmxhc3RMb2dzXCI+PC9jdHYtbG9ncz4nXG4gICAgICAgIH0pO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdOb2RlTGFzdEpvYkxvZ3NDdHJsJywgWyckc2NvcGUnLCAnJGludGVydmFsJywgJ0xvZ1NlcnZpY2UnLFxuICAgIGZ1bmN0aW9uICgkc2NvcGUsICRpbnRlcnZhbCwgTG9nU2VydmljZSkge1xuICAgICAgICB2YXIgbm9kZUxhc3RKb2JMb2dzQ3RybCA9IHRoaXM7XG4gICAgICAgIGZ1bmN0aW9uIGdldExhc3RMb2dzKCkge1xuICAgICAgICAgICAgTG9nU2VydmljZS5nZXRMYXN0TG9ncygpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIG5vZGVMYXN0Sm9iTG9nc0N0cmwubGFzdExvZ3MgPSByZXN1bHQ7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0TGFzdExvZ3MoKTtcbiAgICAgICAgdmFyIHByb21pc2U7XG4gICAgICAgIC8vRG9uJ3QgZG8gYXV0by1yZWZyZXNoIGlmIG9uZSBpcyBhbHJlYWR5IGluIHByb2dyZXNzXG4gICAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQocHJvbWlzZSkpIHtcbiAgICAgICAgICAgIHByb21pc2UgPSAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGdldExhc3RMb2dzKCk7XG4gICAgICAgICAgICB9LCBDb250aXZHbG9iYWxzLlJFRlJFU0hfSU5URVJWQUwpO1xuICAgICAgICB9XG4gICAgICAgIC8vc3RvcCBwb2xsaW5nIHdoZW4gdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcbiAgICAgICAgJHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHByb21pc2UpO1xuICAgICAgICB9KTtcbiAgICB9XSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub2RlbGFzdGpvYmxvZ3NjdHJsLmpzLm1hcCIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gMy8yMi8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5ub2RlcycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5vZGVzLmxpc3QnLCB7XG4gICAgICAgICAgICB1cmw6ICcvbGlzdCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTm9kZUxpc3RDdHJsIGFzIG5vZGVMaXN0Q3RybCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25vZGVzL25vZGVsaXN0Lmh0bWwnXG4gICAgICAgIH0pO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdOb2RlTGlzdEN0cmwnLCBbJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJGZpbHRlcicsICdOb2Rlc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICBmdW5jdGlvbiAoJHNjb3BlLCAkaW50ZXJ2YWwsICRmaWx0ZXIsIE5vZGVzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgIHZhciBub2RlTGlzdEN0cmwgPSB0aGlzO1xuICAgICAgICBmdW5jdGlvbiBnZXROb2RlcyhyZWxvYWQpIHtcbiAgICAgICAgICAgIE5vZGVzTW9kZWwuZ2V0KHJlbG9hZClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihub2RlTGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgIG5vZGVMaXN0Q3RybC5ub2RlcyA9IHJlc3VsdDtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihub2RlTGlzdEN0cmwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9Mb2FkIGZyb20gY2FjaGUgZm9yIHF1aWNrIGRpc3BsYXkgaW5pdGlhbGx5XG4gICAgICAgIGdldE5vZGVzKGZhbHNlKTtcbiAgICAgICAgdmFyIHByb21pc2U7XG4gICAgICAgIC8vRG9uJ3QgZG8gYXV0by1yZWZyZXNoIGlmIG9uZSBpcyBhbHJlYWR5IGluIHByb2dyZXNzXG4gICAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQocHJvbWlzZSkpIHtcbiAgICAgICAgICAgIHByb21pc2UgPSAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGdldE5vZGVzKHRydWUpO1xuICAgICAgICAgICAgfSwgQ29udGl2R2xvYmFscy5SRUZSRVNIX0lOVEVSVkFMKTtcbiAgICAgICAgfVxuICAgICAgICAvL3N0b3AgcG9sbGluZyB3aGVuIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXG4gICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJGludGVydmFsLmNhbmNlbChwcm9taXNlKTtcbiAgICAgICAgfSk7XG4gICAgfV0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9kZWxpc3RjdHJsLmpzLm1hcCIsImFuZ3VsYXIubW9kdWxlKCdjb250aXYub3JnYW5pemF0aW9ucycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm9yZ2FuaXphdGlvbnMuY3JlYXRlJywge1xuICAgICAgICAgICAgdXJsOiAnL2NyZWF0ZScsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ29yZ2FuaXphdGlvbnMvb3JnYW5pemF0aW9uY3JlYXRlLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ09yZ2FuaXphdGlvbkNyZWF0ZUN0cmwgYXMgb3JnYW5pemF0aW9uQ3JlYXRlQ3RybCdcbiAgICAgICAgfSk7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ09yZ2FuaXphdGlvbkNyZWF0ZUN0cmwnLCBbJyRzdGF0ZScsICdPcmdhbml6YXRpb25zTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgIGZ1bmN0aW9uICgkc3RhdGUsIE9yZ2FuaXphdGlvbnNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgdmFyIG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwgPSB0aGlzO1xuICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub09yZ2FuaXphdGlvbnMoKSB7XG4gICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51Lm9yZ2FuaXphdGlvbnMubGlzdCcpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNhbmNlbENyZWF0aW5nKCkge1xuICAgICAgICAgICAgcmV0dXJuVG9Pcmdhbml6YXRpb25zKCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlT3JnYW5pemF0aW9uKCkge1xuICAgICAgICAgICAgLy9mb3JtIGNvbnRyb2xsZXIgaXMgaW5qZWN0ZWQgYnkgdGhlIGh0bWwgdGVtcGxhdGVcbiAgICAgICAgICAgIC8vY2hlY2tpbmcgaWYgYWxsIHZhbGlkYXRpb25zIGhhdmUgcGFzc2VkXG4gICAgICAgICAgICBpZiAob3JnYW5pemF0aW9uQ3JlYXRlQ3RybC5mb3JtLiR2YWxpZCkge1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihvcmdhbml6YXRpb25DcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihvcmdhbml6YXRpb25DcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICBvcmdhbml6YXRpb25DcmVhdGVDdHJsLm5ld09yZ2FuaXphdGlvbi5rZXkgPSBvcmdhbml6YXRpb25DcmVhdGVDdHJsLm5ld09yZ2FuaXphdGlvbi50ZW5hbnROYW1lO1xuICAgICAgICAgICAgICAgIE9yZ2FuaXphdGlvbnNNb2RlbC5jcmVhdGUob3JnYW5pemF0aW9uQ3JlYXRlQ3RybC5uZXdPcmdhbml6YXRpb24pLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub09yZ2FuaXphdGlvbnMoKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3Iob3JnYW5pemF0aW9uQ3JlYXRlQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgb3JnYW5pemF0aW9uQ3JlYXRlQ3RybC5uZXdPcmdhbml6YXRpb24gPSB7XG4gICAgICAgICAgICAgICAgdGVuYW50TmFtZTogJydcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgb3JnYW5pemF0aW9uQ3JlYXRlQ3RybC5jcmVhdGVPcmdhbml6YXRpb24gPSBjcmVhdGVPcmdhbml6YXRpb247XG4gICAgICAgIG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwuY2FuY2VsQ3JlYXRpbmcgPSBjYW5jZWxDcmVhdGluZztcbiAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgfV0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b3JnYW5pemF0aW9uY3JlYXRlY3RybC5qcy5tYXAiLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2Lm9yZ2FuaXphdGlvbnMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5vcmdhbml6YXRpb25zLmRldGFpbHMnLCB7XG4gICAgICAgICAgICB1cmw6ICcvZGV0YWlscy86a2V5JyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdPcmdhbml6YXRpb25EZXRhaWxzQ3RybCBhcyBvcmdhbml6YXRpb25EZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ29yZ2FuaXphdGlvbnMvb3JnYW5pemF0aW9uZGV0YWlscy5odG1sJ1xuICAgICAgICB9KTtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignT3JnYW5pemF0aW9uRGV0YWlsc0N0cmwnLCBbJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnT3JnYW5pemF0aW9uc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsIE9yZ2FuaXphdGlvbnNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgdmFyIG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsID0gdGhpcztcbiAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9Pcmdhbml6YXRpb25zKCkge1xuICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5vcmdhbml6YXRpb25zLmxpc3QnKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBkZWxldGVPcmdhbml6YXRpb24oKSB7XG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Iob3JnYW5pemF0aW9uRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIob3JnYW5pemF0aW9uRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgT3JnYW5pemF0aW9uc01vZGVsLmRlbGV0ZShvcmdhbml6YXRpb25EZXRhaWxzQ3RybC5vcmdhbml6YXRpb24pLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIob3JnYW5pemF0aW9uRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgIHJldHVyblRvT3JnYW5pemF0aW9ucygpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3Iob3JnYW5pemF0aW9uRGV0YWlsc0N0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsKTtcbiAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsKTtcbiAgICAgICAgT3JnYW5pemF0aW9uc01vZGVsLmdldE1vZGVsQnlLZXkoJHN0YXRlUGFyYW1zLmtleSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChvcmdhbml6YXRpb24pIHtcbiAgICAgICAgICAgIG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsLm9yZ2FuaXphdGlvbiA9IG9yZ2FuaXphdGlvbjtcbiAgICAgICAgfSk7XG4gICAgICAgIG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsLmRlbGV0ZU9yZ2FuaXphdGlvbiA9IGRlbGV0ZU9yZ2FuaXphdGlvbjtcbiAgICB9XSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vcmdhbml6YXRpb25kZXRhaWxzY3RybC5qcy5tYXAiLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2LnNldHRpbmdzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc2V0dGluZ3MuZGV0YWlscy5jbHVzdGVyJywge1xuICAgICAgICAgICAgdXJsOiAnL2NsdXN0ZXInLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0NsdXN0ZXJTZXR0aW5nQ3RybCBhcyBjbHVzdGVyU2V0dGluZ0N0cmwnLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzZXR0aW5ncy9jbHVzdGVyc2V0dGluZ3MuaHRtbCdcbiAgICAgICAgfSk7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ0NsdXN0ZXJTZXR0aW5nQ3RybCcsIFsnJHN0YXRlUGFyYW1zJywgJ0NSVURIZWxwZXJTZXJ2aWNlJywgJ05vZGVzU2VydmljZScsXG4gICAgZnVuY3Rpb24gKCRzdGF0ZVBhcmFtcywgQ1JVREhlbHBlclNlcnZpY2UsIE5vZGVzU2VydmljZSkge1xuICAgICAgICB2YXIgY2x1c3RlclNldHRpbmdDdHJsID0gdGhpcztcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlQ2x1c3RlclNldHRpbmdzKCkge1xuICAgICAgICAgICAgaWYgKGNsdXN0ZXJTZXR0aW5nQ3RybC5mb3JtLiR2YWxpZCkge1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihjbHVzdGVyU2V0dGluZ0N0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKGNsdXN0ZXJTZXR0aW5nQ3RybCk7XG4gICAgICAgICAgICAgICAgY2x1c3RlclNldHRpbmdDdHJsLm5vZGVPcHNPYmoubm9kZXMgPSBbJHN0YXRlUGFyYW1zLmtleV07XG4gICAgICAgICAgICAgICAgTm9kZXNTZXJ2aWNlLmNsZWFudXBFeHRyYVZhcnMoY2x1c3RlclNldHRpbmdDdHJsKTtcbiAgICAgICAgICAgICAgICBOb2Rlc1NlcnZpY2UuY3JlYXRlRXh0cmFWYXJzKGNsdXN0ZXJTZXR0aW5nQ3RybCk7XG4gICAgICAgICAgICAgICAgTm9kZXNTZXJ2aWNlLnVwZGF0ZVNldHRpbmdzKGNsdXN0ZXJTZXR0aW5nQ3RybC5ub2RlT3BzT2JqKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihjbHVzdGVyU2V0dGluZ0N0cmwpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoY2x1c3RlclNldHRpbmdDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGNsdXN0ZXJTZXR0aW5nQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjbHVzdGVyU2V0dGluZ0N0cmwubm9kZU9wc09iaiA9IHt9O1xuICAgICAgICBjbHVzdGVyU2V0dGluZ0N0cmwuZXh0cmFfdmFycyA9IHt9OyAvL1RPRE8gSW50aWFsaXplIGZyb20gZ2xvYmFsIHNldHRpbmdzXG4gICAgICAgIGNsdXN0ZXJTZXR0aW5nQ3RybC5hbnNpYmxlVmFyaWFibGVzID0gW107XG4gICAgICAgIGNsdXN0ZXJTZXR0aW5nQ3RybC5lbnZWYXJpYWJsZXMgPSBbXTtcbiAgICAgICAgTm9kZXNTZXJ2aWNlLmdldFNldHRpbmdzKGNsdXN0ZXJTZXR0aW5nQ3RybCk7XG4gICAgICAgIGNsdXN0ZXJTZXR0aW5nQ3RybC51cGRhdGVDbHVzdGVyU2V0dGluZ3MgPSB1cGRhdGVDbHVzdGVyU2V0dGluZ3M7XG4gICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoY2x1c3RlclNldHRpbmdDdHJsKTtcbiAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKGNsdXN0ZXJTZXR0aW5nQ3RybCk7XG4gICAgfV0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2x1c3RlcnNldHRpbmdjdHJsLmpzLm1hcCIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNi8xLzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnN0b3JhZ2Vwb2xpY2llcycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnN0b3JhZ2Vwb2xpY2llcy5jcmVhdGUnLCB7XG4gICAgICAgICAgICB1cmw6ICcvY3JlYXRlJyxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc3RvcmFnZV9wb2xpY2llcy9zdG9yYWdlcG9saWN5Y3JlYXRlLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1N0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsIGFzIHN0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsJ1xuICAgICAgICB9KTtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignU3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwnLCBbJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnU3RvcmFnZVBvbGljaWVzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgIGZ1bmN0aW9uICgkc3RhdGUsICRzdGF0ZVBhcmFtcywgU3RvcmFnZVBvbGljaWVzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgIHZhciBzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybCA9IHRoaXM7XG4gICAgICAgIGZ1bmN0aW9uIHJldHVyblRvU3RvcmFnZVBvbGljaWVzKCkge1xuICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5zdG9yYWdlcG9saWNpZXMubGlzdCcpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNhbmNlbENyZWF0aW5nKCkge1xuICAgICAgICAgICAgcmV0dXJuVG9TdG9yYWdlUG9saWNpZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVGaWxlc3lzdGVtQ21kcygpIHtcbiAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsLmZpbGVzeXN0ZW1jbWRzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybC5uZXdTdG9yYWdlUG9saWN5LmZpbGVzeXN0ZW1zW2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUG9saWN5KCkge1xuICAgICAgICAgICAgLy9mb3JtIGNvbnRyb2xsZXIgaXMgaW5qZWN0ZWQgYnkgdGhlIGh0bWwgdGVtcGxhdGVcbiAgICAgICAgICAgIC8vY2hlY2tpbmcgaWYgYWxsIHZhbGlkYXRpb25zIGhhdmUgcGFzc2VkXG4gICAgICAgICAgICBpZiAoc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwuZm9ybS4kdmFsaWQpIHtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Ioc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKHN0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVGaWxlc3lzdGVtQ21kcygpO1xuICAgICAgICAgICAgICAgIFN0b3JhZ2VQb2xpY2llc01vZGVsLmNyZWF0ZShzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybC5uZXdTdG9yYWdlUG9saWN5KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub1N0b3JhZ2VQb2xpY2llcygpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3Ioc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybCk7XG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Ioc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwubmV3U3RvcmFnZVBvbGljeSA9IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcImJhY2tlbmRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjcnVkXCI6IFwiY2VwaFwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1vdW50XCI6IFwiY2VwaFwiLFxuICAgICAgICAgICAgICAgICAgICBcInNuYXBzaG90XCI6IFwiY2VwaFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcInVubG9ja2VkXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZHJpdmVyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJwb29sXCI6IFwicmJkXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICBcImZpbGVzeXN0ZW1cIjogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJydW50aW1lXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJzbmFwc2hvdHNcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJzbmFwc2hvdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImZyZXF1ZW5jeVwiOiBcIjMwbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJrZWVwXCI6IDIwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwicmF0ZS1saW1pdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIndyaXRlLWlvcHNcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVhZC1pb3BzXCI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndyaXRlLWJwc1wiOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWFkLWJwc1wiOiAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZmlsZXN5c3RlbXNcIjoge31cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwuY3JlYXRlUG9saWN5ID0gY3JlYXRlUG9saWN5O1xuICAgICAgICBzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybC5jYW5jZWxDcmVhdGluZyA9IGNhbmNlbENyZWF0aW5nO1xuICAgICAgICBzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybC5maWxlc3lzdGVtY21kcyA9IFtdO1xuICAgICAgICByZXNldEZvcm0oKTtcbiAgICB9XSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdG9yYWdlcG9saWN5Y3JlYXRlY3RybC5qcy5tYXAiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMjcvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuc3RvcmFnZXBvbGljaWVzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc3RvcmFnZXBvbGljaWVzLmRldGFpbHMnLCB7XG4gICAgICAgICAgICB1cmw6ICcvZGV0YWlscy86a2V5JyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdTdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwgYXMgc3RvcmFnZVBvbGljeURldGFpbHNDdHJsJyxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc3RvcmFnZV9wb2xpY2llcy9zdG9yYWdlcG9saWN5ZGV0YWlscy5odG1sJ1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5zdG9yYWdlcG9saWNpZXMuZWRpdCcsIHtcbiAgICAgICAgICAgIHVybDogJy9kZXRhaWxzLzprZXknLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1N0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCBhcyBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwnLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzdG9yYWdlX3BvbGljaWVzL3N0b3JhZ2Vwb2xpY3lkZXRhaWxzLmh0bWwnXG4gICAgICAgIH0pO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdTdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwnLCBbJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckZmlsdGVyJywgJ1N0b3JhZ2VQb2xpY2llc01vZGVsJywgJ1ZvbHVtZXNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsXG4gICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkc2NvcGUsICRpbnRlcnZhbCwgJGZpbHRlciwgU3RvcmFnZVBvbGljaWVzTW9kZWwsIFZvbHVtZXNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgdmFyIHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCA9IHRoaXM7XG4gICAgICAgIHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5maWxlc3lzdGVtY21kcyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogVG8gc2hvdyBlZGl0IG9yIGRldGFpbHMgc2NyZWVuIGJhc2VkIG9uIHRoZSByb3V0ZVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gc2V0TW9kZSgpIHtcbiAgICAgICAgICAgIGlmICgkc3RhdGUuaXMoJ2NvbnRpdi5tZW51LnN0b3JhZ2Vwb2xpY2llcy5lZGl0JykpIHtcbiAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwubW9kZSA9ICdlZGl0JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5tb2RlID0gJ2RldGFpbHMnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHJldHVyblRvUG9saWNpZXMoKSB7XG4gICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51LnN0b3JhZ2Vwb2xpY2llcy5saXN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9Qb2xpY3lEZXRhaWxzKCkge1xuICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5zdG9yYWdlcG9saWNpZXMuZGV0YWlscycsIHsgJ2tleSc6IHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5wb2xpY3kubmFtZSB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjYW5jZWxFZGl0aW5nKCkge1xuICAgICAgICAgICAgcmV0dXJuVG9Qb2xpY3lEZXRhaWxzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZGVsZXRlUG9saWN5KCkge1xuICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgU3RvcmFnZVBvbGljaWVzTW9kZWwuZGVsZXRlVXNpbmdLZXkoc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLnBvbGljeS5uYW1lLCAnbmFtZScpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc3RvcmFnZVBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICByZXR1cm5Ub1BvbGljaWVzKCk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc3RvcmFnZVBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3Ioc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB2b2x1bWVzIGJlbG9uZ2luZyB0byBhIHBvbGljeVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gZ2V0Vm9sdW1lcyhyZWxvYWQpIHtcbiAgICAgICAgICAgIFZvbHVtZXNNb2RlbC5nZXQocmVsb2FkKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwudm9sdW1lcyA9ICRmaWx0ZXIoJ29yZGVyQnknKShfLmZpbHRlcihyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgJ3BvbGljeSc6IHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5wb2xpY3kubmFtZVxuICAgICAgICAgICAgICAgIH0pLCAnbmFtZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaW5pdGlhbGl6ZUZpbGVzeXN0ZW1DbWRzQXJyYXkoKSB7XG4gICAgICAgICAgICBhbmd1bGFyLmZvckVhY2goc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLnBvbGljeS5maWxlc3lzdGVtcywgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2goeyBuYW1lOiBrZXksIHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgICAgIH0sIHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5maWxlc3lzdGVtY21kcyk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlRmlsZXN5c3RlbUNtZHMoKSB7XG4gICAgICAgICAgICBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwuZmlsZXN5c3RlbWNtZHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5wb2xpY3kuZmlsZXN5c3RlbXNbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzYXZlUG9saWN5KCkge1xuICAgICAgICAgICAgLy9mb3JtIGNvbnRyb2xsZXIgaXMgaW5qZWN0ZWQgYnkgdGhlIGh0bWwgdGVtcGxhdGVcbiAgICAgICAgICAgIC8vY2hlY2tpbmcgaWYgYWxsIHZhbGlkYXRpb25zIGhhdmUgcGFzc2VkXG4gICAgICAgICAgICBpZiAoc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLmZvcm0uJHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIoc3RvcmFnZVBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVGaWxlc3lzdGVtQ21kcygpO1xuICAgICAgICAgICAgICAgIFN0b3JhZ2VQb2xpY2llc01vZGVsLnNhdmUoc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLnBvbGljeSkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc3RvcmFnZVBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9Qb2xpY3lEZXRhaWxzKCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3Ioc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc3RvcmFnZVBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgIFN0b3JhZ2VQb2xpY2llc01vZGVsLmdldE1vZGVsQnlLZXkoJHN0YXRlUGFyYW1zLmtleSwgZmFsc2UsICduYW1lJylcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChwb2xpY3kpIHtcbiAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5wb2xpY3kgPSBwb2xpY3k7XG4gICAgICAgICAgICBpbml0aWFsaXplRmlsZXN5c3RlbUNtZHNBcnJheSgpO1xuICAgICAgICAgICAgZ2V0Vm9sdW1lcyhmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwuZGVsZXRlUG9saWN5ID0gZGVsZXRlUG9saWN5O1xuICAgICAgICBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwuc2F2ZVBvbGljeSA9IHNhdmVQb2xpY3k7XG4gICAgICAgIHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5jYW5jZWxFZGl0aW5nID0gY2FuY2VsRWRpdGluZztcbiAgICAgICAgc2V0TW9kZSgpO1xuICAgICAgICB2YXIgcHJvbWlzZTtcbiAgICAgICAgLy9Eb24ndCBkbyBhdXRvcmVmcmVzaCBpZiBvbmUgaXMgYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgICBpZiAoIWFuZ3VsYXIuaXNEZWZpbmVkKHByb21pc2UpKSB7XG4gICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBnZXRWb2x1bWVzKHRydWUpO1xuICAgICAgICAgICAgfSwgQ29udGl2R2xvYmFscy5SRUZSRVNIX0lOVEVSVkFMKTtcbiAgICAgICAgfVxuICAgICAgICAvL3N0b3AgcG9sbGluZyB3aGVuIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXG4gICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJGludGVydmFsLmNhbmNlbChwcm9taXNlKTtcbiAgICAgICAgfSk7XG4gICAgfV0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RvcmFnZXBvbGljeWRldGFpbHNjdHJsLmpzLm1hcCIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNi8yLzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZShcImNvbnRpdi5zdG9yYWdlcG9saWNpZXNcIilcbiAgICAuZGlyZWN0aXZlKFwiY3R2U3RvcmFnZXBvbGljeWJhc2ljc2V0dGluZ3NcIiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7fTtcbn0pXG4gICAgLmRpcmVjdGl2ZShcImN0dlN0b3JhZ2Vwb2xpY3lmaWxlc3lzdGVtc2V0dGluZ3NcIiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICBwb2xpY3k6ICc9JyxcbiAgICAgICAgICAgIGZpbGVzeXN0ZW1jbWRzOiAnPSdcbiAgICAgICAgfSxcbiAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlKSB7XG4gICAgICAgICAgICBzY29wZS5maWxlc3lzdGVtcyA9IFsnZXh0NCcsICdidHJmcyddO1xuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3N0b3JhZ2VfcG9saWNpZXMvZmlsZXN5c3RlbXNldHRpbmdzLmh0bWwnXG4gICAgfTtcbn0pXG4gICAgLmRpcmVjdGl2ZShcImN0dlN0b3JhZ2Vwb2xpY3lzbmFwc2hvdHNldHRpbmdzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgcG9saWN5OiAnPSdcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdzdG9yYWdlX3BvbGljaWVzL3NuYXBzaG90c2V0dGluZ3MuaHRtbCdcbiAgICB9O1xufSlcbiAgICAuZGlyZWN0aXZlKFwiY3R2U3RvcmFnZXBvbGljeXJ3b3Bzc2V0dGluZ3NcIiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICBwb2xpY3k6ICc9J1xuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3N0b3JhZ2VfcG9saWNpZXMvcndvcHNzZXR0aW5ncy5odG1sJ1xuICAgIH07XG59KVxuICAgIC5kaXJlY3RpdmUoXCJjdHZTdG9yYWdlcG9saWN5YmFja2VuZGRyaXZlcnNcIiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICBwb2xpY3k6ICc9J1xuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3N0b3JhZ2VfcG9saWNpZXMvYmFja2VuZGRyaXZlcnMuaHRtbCdcbiAgICB9O1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdG9yYWdlcG9saWN5ZGlyZWN0aXZlLmpzLm1hcCIsIlxuXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnZpc3VhbGl6YXRpb24nKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS52aXN1YWxpemF0aW9uLmVkZ2UnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2VkZ2Uve3NvdXJjZU5hbWUsIHRhcmdldE5hbWUsIHNvdXJjZUxpc3QsIHRhcmdldExpc3R9JyxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlTmFtZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TmFtZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgc291cmNlTGlzdDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGlzdDogbnVsbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1Zpc3VhbGl6YXRpb25FZGdlQ3RybCBhcyB2aXN1YWxpemF0aW9uZWRnZUN0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndmlzdWFsaXphdGlvbi92aXN1YWxpemF0aW9uZWRnZS5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdWaXN1YWxpemF0aW9uRWRnZUN0cmwnLCBbXCIkc2NvcGVcIiwgXCIkaHR0cFwiLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdWaXN1YWxpemF0aW9uU2VydmljZScsICckaW50ZXJ2YWwnLFxuICAgICAgICBmdW5jdGlvbigkc2NvcGUsICRodHRwLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgVmlzdWFsaXphdGlvblNlcnZpY2UsICRpbnRlcnZhbCkge1xuICAgICAgICAgICAgdmFyIHNvdXJjZU5hbWUgPSAkc3RhdGVQYXJhbXMuc291cmNlTmFtZTtcbiAgICAgICAgICAgIHZhciB0YXJnZXROYW1lID0gJHN0YXRlUGFyYW1zLnRhcmdldE5hbWU7XG4gICAgICAgICAgICB2YXIgc291cmNlTGlzdCA9ICRzdGF0ZVBhcmFtcy5zb3VyY2VMaXN0O1xuICAgICAgICAgICAgdmFyIHRhcmdldExpc3QgPSAkc3RhdGVQYXJhbXMudGFyZ2V0TGlzdDtcblxuICAgICAgICAgICAgLy9JZiB0aGUgcGFnZSBpcyByZWxvYWRlZCwgdGhlc2Ugc3RhdGUgcGFyYW1zIGFyZSBhbGwgbnVsbCxcbiAgICAgICAgICAgIC8vc28gaXQgd2lsbCByb3V0ZSB0aGVtIGJhY2sgdG8gdGhlIHZpc3VhbGl6YXRpb24gdGFiIHRvcCB2aWV3XG4gICAgICAgICAgICBpZiAoc291cmNlTGlzdCA9PSBudWxsIHx8IHRhcmdldExpc3QgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUudmlzdWFsaXphdGlvbi5saXN0Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICB2YXIgdCA9IGQuZ2V0U2Vjb25kcygpO1xuICAgICAgICAgICAgJHNjb3BlLmVkZ2VEYXRhSW50ZXJ2YWwgPSBcbiAgICAgICAgICAgICAgICAkaW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIFZpc3VhbGl6YXRpb25TZXJ2aWNlLmdldEVkZ2VEYXRhKHNvdXJjZUxpc3QsIHRhcmdldExpc3QsIHQudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0cyA9IHJlc3VsdC5yZXN1bHRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmZvckVhY2gocmVzdWx0cywgZnVuY3Rpb24ocikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5pc0VtcHR5KHIpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSArPSByLnNlcmllc1swXS52YWx1ZXNbMF1bMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc291cmNlTmFtZSA9IHNvdXJjZU5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnRhcmdldE5hbWUgPSB0YXJnZXROYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5lZGdlRGF0YSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmVkZ2VEYXRhVGltZSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMDApO1xuXG4gICAgICAgICAgICAvL0Rlc3Ryb3lpbmcgdGhlIGludGVydmFsIGZ1bmN0aW9uIG9uIHJvdXRlIGNoYW5nZVxuICAgICAgICAgICAgJHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7ICRpbnRlcnZhbC5jYW5jZWwoJHNjb3BlLmVkZ2VEYXRhSW50ZXJ2YWwpOyB9KTtcblxuXG4gICAgICAgICAgICBWaXN1YWxpemF0aW9uU2VydmljZS5nZXRPbGRFZGdlRGF0YShzb3VyY2VMaXN0LCB0YXJnZXRMaXN0KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdHMgPSByZXN1bHQucmVzdWx0cztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVkZ2VEYXRhID0gW107XG4gICAgICAgICAgICAgICAgICAgIC8vcmVzdWx0cywgaWYgbm90IGVtcHR5LCBhcmUgZXhwZWN0ZWQgdG8gaGF2ZVxuICAgICAgICAgICAgICAgICAgICAvLzYgZGF0YSBlbnRyaWVzXG4gICAgICAgICAgICAgICAgICAgIF8uZm9yRWFjaChyZXN1bHRzLCBmdW5jdGlvbihyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5pc0VtcHR5KHIpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gci5zZXJpZXNbMF0udmFsdWVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLmlzRW1wdHkoZWRnZURhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uZm9yRWFjaChkYXRhLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlRGF0YS5wdXNoKGRbMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uZm9yRWFjaChkYXRhLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlRGF0YVtpXSArPSBkWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnNvdXJjZU5hbWUgPSBzb3VyY2VOYW1lO1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGFyZ2V0TmFtZSA9IHRhcmdldE5hbWU7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5zb3VyY2VMaXN0ID0gc291cmNlTGlzdDtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnRhcmdldExpc3QgPSB0YXJnZXRMaXN0O1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUub2xkRWRnZURhdGEgPSBlZGdlRGF0YTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIH0pO1xuICAgIH1dKTtcblxuXG5cblxuIiwiXG5cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYudmlzdWFsaXphdGlvbicpXG4gICAgLmRpcmVjdGl2ZShcInZpc3VhbGl6YXRpb25FZGdlXCIsIFsnJHdpbmRvdycsXG4gICAgICAgIGZ1bmN0aW9uKCR3aW5kb3cpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHZpc3VhbGl6YXRpb25FZGdlRDMoc2NvcGUsIGQzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJvZHlFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IGJvZHlFbC5jbGllbnRXaWR0aCAtIDQwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gIGJvZHlFbC5jbGllbnRIZWlnaHQgLSA0MDA7XG5cblxuICAgICAgICAgICAgICAgIC8vdGFrZW4gZnJvbSBodHRwOi8vYmwub2Nrcy5vcmcvc2ltZW5icmVra2VuLzY2MzQwNzBcbiAgICAgICAgICAgICAgICAvLyAvKiogTUFJTiBTVkcgKiovXG4gICAgICAgICAgICAgICAgdmFyIGxpbWl0ID0gNTksXG4gICAgICAgICAgICAgICAgZHVyYXRpb24gPSA3NTAsXG4gICAgICAgICAgICAgICAgbm93ID0gbmV3IERhdGUoRGF0ZS5ub3coKSAtIGR1cmF0aW9uKTtcblxuICAgICAgICAgICAgICAgIHZhciBncm91cHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdvcmFuZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZDMucmFuZ2UobGltaXQpLm1hcChmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlLm9sZEVkZ2VEYXRhW01hdGguZmxvb3IoZC8xMCldIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB2YXIgeCA9IGQzLnRpbWUuc2NhbGUoKVxuICAgICAgICAgICAgICAgICAgICAuZG9tYWluKFtub3cgLSAobGltaXQgLSAyKSwgbm93IC0gZHVyYXRpb25dKVxuICAgICAgICAgICAgICAgICAgICAucmFuZ2UoWzAsIHdpZHRoXSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgeSA9IGQzLnNjYWxlLmxpbmVhcigpXG4gICAgICAgICAgICAgICAgICAgIC5kb21haW4oWzAsIGQzLm1heChncm91cHMuY3VycmVudC5kYXRhLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gZCArIDEwOyB9KV0pXG4gICAgICAgICAgICAgICAgICAgIC5yYW5nZShbaGVpZ2h0LCAwXSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgbGluZSA9IGQzLnN2Zy5saW5lKClcbiAgICAgICAgICAgICAgICAgICAgLmludGVycG9sYXRlKCdiYXNpcycpXG4gICAgICAgICAgICAgICAgICAgIC54KGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB4KG5vdyAtIChsaW1pdCAtIDEgLSBpKSAqIGR1cmF0aW9uKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAueShmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geShkKVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHZhciB4U3ZnID0gZDMuc2VsZWN0KCcuZ3JhcGgnKS5hcHBlbmQoJ3N2ZycpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIDI1KVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ292ZXJmbG93JywgJ3Zpc2libGUnKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ3Bvc2l0aW9uJywgJ2ZpeGVkJyk7XG5cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIHZhciB5QXhpcyA9IHhTdmcuYXBwZW5kKCdnJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3kgYXhpcycpXG4gICAgICAgICAgICAgICAgICAgIC8vIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsJyArIHdpZHRoICsgJyknKVxuICAgICAgICAgICAgICAgICAgICAuY2FsbCh5LmF4aXMgPSBkMy5zdmcuYXhpcygpLnNjYWxlKHkpLm9yaWVudCgnbGVmdCcpKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgc3ZnPSBkMy5zZWxlY3QoJy5ncmFwaCcpLmFwcGVuZCgnc3ZnJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2NoYXJ0JylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGggLSA1MClcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodCArIDUwKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gLnN0eWxlKCdvdmVyZmxvdycsIFwidmlzaWJsZVwiKTtcblxuICAgICAgICAgICAgICAgIHZhciBheGlzID0gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICd4IGF4aXMnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLCcgKyBoZWlnaHQgKyAnKScpXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKHguYXhpcyA9IGQzLnN2Zy5heGlzKCkuc2NhbGUoeCkub3JpZW50KCdib3R0b20nKSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgcGF0aHMgPSBzdmcuYXBwZW5kKCdnJyk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuYW1lIGluIGdyb3Vwcykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZ3JvdXAgPSBncm91cHNbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwLnBhdGggPSBwYXRocy5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRhdGEoW2dyb3VwLmRhdGFdKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgbmFtZSArICcgZ3JvdXAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdzdHJva2UnLCBncm91cC5jb2xvcilcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB0aWNrKCkge1xuICAgICAgICAgICAgICAgICAgICBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBuZXcgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG5hbWUgaW4gZ3JvdXBzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZ3JvdXAgPSBncm91cHNbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cC5kYXRhLnB1c2goc2NvcGUuZWRnZURhdGEgfHwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cC5wYXRoLmF0dHIoJ2QnLCBsaW5lKVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gU2hpZnQgZG9tYWluXG4gICAgICAgICAgICAgICAgICAgIHguZG9tYWluKFtub3cgLSAobGltaXQgLSAyKSAqIGR1cmF0aW9uLCBub3cgLSBkdXJhdGlvbl0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFNsaWRlIHgtYXhpcyBsZWZ0XG4gICAgICAgICAgICAgICAgICAgIGF4aXMudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZHVyYXRpb24oZHVyYXRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAuZWFzZSgnbGluZWFyJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKHguYXhpcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgeUF4aXMudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZHVyYXRpb24oZHVyYXRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAuZWFzZSgnbGluZWFyJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKHkuYXhpcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gU2xpZGUgcGF0aHMgbGVmdFxuICAgICAgICAgICAgICAgICAgICBwYXRocy5hdHRyKCd0cmFuc2Zvcm0nLCBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmR1cmF0aW9uKGR1cmF0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmVhc2UoJ2xpbmVhcicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgeChub3cgLSAobGltaXQgLSAxKSAqIGR1cmF0aW9uKSArICcpJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5lYWNoKCdlbmQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBvbGRlc3QgZGF0YSBwb2ludCBmcm9tIGVhY2ggZ3JvdXBcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBncm91cHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBncm91cCA9IGdyb3Vwc1tuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwLmRhdGEuc2hpZnQoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRpY2soKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6J0VBJyxcbiAgICAgICAgICAgICAgICByZXBsYWNlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3Zpc3VhbGl6YXRpb24vdmlzdWFsaXphdGlvbmVkZ2V0ZW1wbGF0ZS5odG1sJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSl7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLiR3YXRjaEdyb3VwKFsnZWRnZURhdGEnLCAnb2xkRWRnZURhdGEnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY29wZS5lZGdlRGF0YSAhPSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5vbGRFZGdlRGF0YSAhPSBudWxsICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNjb3BlLmluaXRpYWxpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLmluaXRpYWxpemUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGQzID0gJHdpbmRvdy5kMzsgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzdWFsaXphdGlvbkVkZ2VEMyhzY29wZSwgZDMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgXVxuKTtcbiIsIlxuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi52aXN1YWxpemF0aW9uJylcbiAgICAuc2VydmljZSgnU3RhdGVTYXZlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNhdmVkU3RhdGVzID0ge307XG4gICAgfSlcbiAgICAuZGlyZWN0aXZlKFwidmlzdWFsaXphdGlvbkdyYXBoXCIsIFsnJHdpbmRvdycsICckc3RhdGUnLCAnVmlzdWFsaXplckdyYXBoJywgJ1BvbGljeVNlcnZpY2UnLCAnVmlzdWFsaXplckRhdGFTb3VyY2UnLCAnU3RhdGVTYXZlJyxcbiAgICAgICAgZnVuY3Rpb24oJHdpbmRvdywgJHN0YXRlLCBWaXN1YWxpemVyR3JhcGgsIFBvbGljeVNlcnZpY2UsIFZpc3VhbGl6ZXJEYXRhU291cmNlLCBTdGF0ZVNhdmUpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHZpc3VhbGl6YXRpb25saXN0ZDMoc2NvcGUsIGVsZW0sIFZpc3VhbGl6ZXJHcmFwaCwgUG9saWN5U2VydmljZSwgVmlzdWFsaXplckRhdGFTb3VyY2UsIFN0YXRlU2F2ZSkge1xuICAgICAgICAgICAgICAgIC8vZG9uJ3QgcnVuIHVudGlsIGFsbCBpbml0aWFsaXphdGlvbiBjYWxscyBoYXZlIHJldHVybmVkXG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlLm5vZGVzID09PSB1bmRlZmluZWQgfHwgc2NvcGUubGlua3MgPT09IHVuZGVmaW5lZCB8fCBzY29wZS5jaGlsZHJlbl9zdHJ1Y3QgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgICAgICAgICBzY29wZS5hbmNlc3RvcnNfc3RydWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vY3JlYXRpbmcgRGF0YVNvdXJjZVxuICAgICAgICAgICAgICAgIHZhciBkYXRhU291cmNlID0gbmV3IFZpc3VhbGl6ZXJEYXRhU291cmNlLkRhdGFTb3VyY2Uoc2NvcGUubm9kZXMsIHNjb3BlLmxpbmtzLCBzY29wZS5jaGlsZHJlbl9zdHJ1Y3QsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuYW5jZXN0b3JzX3N0cnVjdCwgc2NvcGUubGFiZWxzLCBzY29wZS5zZXJ2aWNlU2VsZWN0b3JzKTtcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlLnNldEFuY2VzdG9ycygpO1xuXG4gICAgICAgICAgICAgICAgdmFyIG5vZGVzLCBsaW5rcztcblxuICAgICAgICAgICAgICAgIHZhciB0b3BEYXRhID0gZGF0YVNvdXJjZS5nZXRUb3BMZXZlbEZsb3coKTtcbiAgICAgICAgICAgICAgICBub2RlcyA9IGRhdGFTb3VyY2UucHJvY2Vzc05vZGVEYXRhKHRvcERhdGEubm9kZURhdGEpO1xuICAgICAgICAgICAgICAgIGxpbmtzID0gZGF0YVNvdXJjZS5wcm9jZXNzTGlua0RhdGEodG9wRGF0YS5saW5rRGF0YSwgbm9kZXMpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGJvZHlFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IGJvZHlFbC5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gIGJvZHlFbC5jbGllbnRIZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICAvKiogTUFJTiBTVkcgKiovXG4gICAgICAgICAgICAgICAgdmFyIHJhd1N2Zz1lbGVtLmZpbmQoJ3N2ZycpO1xuXG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9ICQocmF3U3ZnLnBhcmVudCgpKS5vZmZzZXQoKTtcblxuICAgICAgICAgICAgICAgIHZhciBkaXZXaWR0aCA9ICQocmF3U3ZnLnBhcmVudCgpKS53aWR0aCgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHN2ZyA9IGQzLnNlbGVjdChyYXdTdmdbMF0pXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgZGl2V2lkdGgpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCAtIG9mZnNldC50b3AgLSAyMCk7XG5cbiAgICAgICAgICAgICAgICAvL2luc3RhbGxpbmcgcG9saWNpZXNcbiAgICAgICAgICAgICAgICBzY29wZS52aXN1YWxpemF0aW9uR3JhcGggPSBuZXcgVmlzdWFsaXplckdyYXBoLkdyYXBoKHN2Zywgbm9kZXMsIGxpbmtzLCBkYXRhU291cmNlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5jaGlsZHJlbl9zdHJ1Y3QsIHNjb3BlLmFuY2VzdG9yc19zdHJ1Y3QpO1xuICAgICAgICAgICAgICAgIHNjb3BlLnZpc3VhbGl6YXRpb25HcmFwaC5pbnN0YWxsRGVmYXVsdFBhdGhQb2xpY3kobmV3IFBvbGljeVNlcnZpY2UuU2F2ZVN0YXRlUG9saWN5KFN0YXRlU2F2ZS5zYXZlZFN0YXRlcykpO1xuICAgICAgICAgICAgICAgIHNjb3BlLnZpc3VhbGl6YXRpb25HcmFwaC5pbnN0YWxsRGVmYXVsdFBhdGhQb2xpY3kobmV3IFBvbGljeVNlcnZpY2UuUGF0aENoYW5nZVZpZXdQb2xpY3koJHN0YXRlKSk7XG4gICAgICAgICAgICAgICAgLy9RVGlwUG9saWN5IGlzIGZvciBib3RoIE5vZGVzIGFuZCBQYXRocywgaW5zdGFsbCBzYW1lIG9uZSBvbiBib3RoXG4gICAgICAgICAgICAgICAgdmFyIHFUaXBQb2xpY3kgPSBuZXcgUG9saWN5U2VydmljZS5RVGlwUG9saWN5KCk7XG4gICAgICAgICAgICAgICAgc2NvcGUudmlzdWFsaXphdGlvbkdyYXBoLmluc3RhbGxEZWZhdWx0Tm9kZVBvbGljeShxVGlwUG9saWN5KTtcbiAgICAgICAgICAgICAgICBzY29wZS52aXN1YWxpemF0aW9uR3JhcGguaW5zdGFsbERlZmF1bHRQYXRoUG9saWN5KHFUaXBQb2xpY3kpO1xuICAgICAgICAgICAgICAgIHZhciBzcGxpdEpvaW5WaWV3UG9saWN5ID0gbmV3IFBvbGljeVNlcnZpY2UuU3BsaXRKb2luVmlld1BvbGljeSgpO1xuICAgICAgICAgICAgICAgIHNjb3BlLnZpc3VhbGl6YXRpb25HcmFwaC5pbnN0YWxsRGVmYXVsdE5vZGVQb2xpY3koc3BsaXRKb2luVmlld1BvbGljeSk7XG4gICAgICAgICAgICAgICAgc3BsaXRKb2luVmlld1BvbGljeS5pbnN0YWxsQmFja0J1dHRvbigkKCcjYmFja0J1dHRvbicpKTtcbiAgICAgICAgICAgICAgICBzcGxpdEpvaW5WaWV3UG9saWN5Lmluc3RhbGxUaXRsZSgkKCcjZ3JhcGgtdGl0bGUnKSk7XG5cbiAgICAgICAgICAgICAgICAvL2xvYWQgb2xkIHZpZXcgaWYgaXQgZXhpc3RzLlxuICAgICAgICAgICAgICAgIGlmIChfLmlzRW1wdHkoU3RhdGVTYXZlLnNhdmVkU3RhdGVzKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZ3JhcGggPSBzY29wZS52aXN1YWxpemF0aW9uR3JhcGg7XG4gICAgICAgICAgICAgICAgICAgIGdyYXBoLmxvYWQoU3RhdGVTYXZlLnNhdmVkU3RhdGVzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzY29wZS52aXN1YWxpemF0aW9uR3JhcGgudXBkYXRlR3JhcGgoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICByZXN0cmljdDonRUEnLFxuICAgICAgICAgICAgICAgIHJlcGxhY2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndmlzdWFsaXphdGlvbi92aXN1YWxpemF0aW9udGVtcGxhdGUuaHRtbCcsXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW0pe1xuICAgICAgICAgICAgICAgICAgICBzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyN2aXN1YWxpemF0aW9uLWdyYXBoJykudW5iaW5kKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS52aXN1YWxpemF0aW9uR3JhcGguZGVzdHJveSgpO30pO1xuICAgICAgICAgICAgICAgICAgICBzY29wZS4kd2F0Y2hHcm91cChbJ25vZGVzJywgJ2xpbmtzJywgJ2NoaWxkcmVuX3N0cnVjdCcsICdhbmNlc3RvcnNfc3RydWN0J10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NvcGUubm9kZXMgIT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5saW5rcyAhPSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLmNoaWxkcmVuX3N0cnVjdCAhPSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLmFuY2VzdG9yc19zdHJ1Y3QgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2NvcGUuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXN1YWxpemF0aW9ubGlzdGQzKHNjb3BlLCBlbGVtLCBWaXN1YWxpemVyR3JhcGgsIFBvbGljeVNlcnZpY2UsIFZpc3VhbGl6ZXJEYXRhU291cmNlLCBTdGF0ZVNhdmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLnZpc3VhbGl6YXRpb25HcmFwaC5kYXRhU291cmNlLmxpbmtzID0gc2NvcGUubGlua3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLnZpc3VhbGl6YXRpb25HcmFwaC51cGRhdGVMaW5rRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICBdXG4pO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi52aXN1YWxpemF0aW9uJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUudmlzdWFsaXphdGlvbi5saXN0Jywge1xuICAgICAgICAgICAgICAgIHVybDogJy9saXN0JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVmlzdWFsaXphdGlvbkxpc3RDdHJsIGFzIHZpc3VhbGl6YXRpb25MaXN0Q3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd2aXN1YWxpemF0aW9uL3Zpc3VhbGl6YXRpb25saXN0Lmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ1Zpc3VhbGl6YXRpb25MaXN0Q3RybCcsIFtcIiRzY29wZVwiLCBcIiRodHRwXCIsICdWaXN1YWxpemF0aW9uU2VydmljZScsICckaW50ZXJ2YWwnLCBcbiAgICAgICAgZnVuY3Rpb24oJHNjb3BlLCAkaHR0cCwgVmlzdWFsaXphdGlvblNlcnZpY2UsICRpbnRlcnZhbCkge1xuICAgICAgICAgICAgLy90byBzZWUgdGhlIGV4cGVjdGVkIGZvcm1hdCB0byBiZSByZXR1cm5lZCBmcm9tIHRoZXNlIGNhbGxzLFxuICAgICAgICAgICAgLy9sb29rIGF0IGFwcC9jb21wb25lbnRzL2dyYXBob2JqZWN0cy9kYXRhc291cmNlL3Zpc3VhbGl6ZXJkYXRhc291cmNlLmpzXG4gICAgICAgICAgICB2YXIgc3VjY2Vzc0dyYXBoRGF0YUNhbGxiYWNrID0gZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVzID0gW107XG4gICAgICAgICAgICAgICAgdmFyIGxpbmtzID0gW107XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVJZHMgPSBbXTtcbiAgICAgICAgICAgICAgICBfLmZvckVhY2gocmVzdWx0LnJlc3VsdHNbMF0uc2VyaWVzLCBmdW5jdGlvbihzZXJpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVuZHBvaW50ID0gc2VyaWVzLnRhZ3MuRW5kcG9pbnRJUDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3ZpZGVyID0gc2VyaWVzLnRhZ3MuUHJvdmlkZXJJUDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGU7XG4gICAgICAgICAgICAgICAgICAgIC8vY3JlYXRpbmcgbm9kZXNcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8uaW5jbHVkZXMobm9kZUlkcywgZW5kcG9pbnQpID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGVuZHBvaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBlbmRwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jZXN0b3JzOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJZHMucHVzaChlbmRwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKF8uaW5jbHVkZXMobm9kZUlkcywgcHJvdmlkZXIpID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb3ZpZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBwcm92aWRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jZXN0b3JzOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJZHMucHVzaChwcm92aWRlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9jcmVhdGluZyBsaW5rc1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGlua091dCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogZW5kcG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHByb3ZpZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2VpZ2h0OiBzZXJpZXMudmFsdWVzWzBdWzJdXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGxpbmtzLnB1c2gobGlua091dCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsaW5rSW4gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IHByb3ZpZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBlbmRwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlaWdodDogc2VyaWVzLnZhbHVlc1swXVsxXVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBsaW5rcy5wdXNoKGxpbmtJbik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJHNjb3BlLm5vZGVzID0gbm9kZXM7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmxpbmtzID0gbGlua3M7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy9pbml0aWFsIGNhbGxcbiAgICAgICAgICAgIFZpc3VhbGl6YXRpb25TZXJ2aWNlLmdldEdyYXBoRGF0YSgpLnRoZW4oc3VjY2Vzc0dyYXBoRGF0YUNhbGxiYWNrLCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIC8vd2lsbCBmYWlsIHNpbGVudGx5LCBncmFwaCB3b24ndCBiZSBkaXNwbGF5ZWRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHsgJGludGVydmFsLmNhbmNlbCgkc2NvcGUuZ3JhcGhEYXRhSW50ZXJ2YWwpOyB9KTtcblxuICAgICAgICAgICAgVmlzdWFsaXphdGlvblNlcnZpY2UuZ2V0U3RydWN0dXJlRGF0YSgpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIC8vdG8gc2VlIHRoZSBleHBlY3RlZCBmb3JtIG9mIGFuY2VzdG9yX3N0cnVjdCBhbmQgY2hpbGRyZW5fc3RydWN0LCBcbiAgICAgICAgICAgICAgICAvL2xvb2sgYXQgYXBwL2NvbXBvbmVudHMvZ3JhcGhvYmplY3RzL2RhdGFzb3VyY2UvdmlzdWFsaXplcmRhdGFzb3VyY2UuanNcbiAgICAgICAgICAgICAgICAkc2NvcGUuYW5jZXN0b3JzX3N0cnVjdCA9IHJlc3VsdC5hbmNlc3RvcnNfc3RydWN0O1xuICAgICAgICAgICAgICAgICRzY29wZS5jaGlsZHJlbl9zdHJ1Y3QgPSByZXN1bHQuY2hpbGRyZW5fc3RydWN0O1xuICAgICAgICAgICAgICAgICRzY29wZS5sYWJlbHMgPSByZXN1bHQubGFiZWxzO1xuICAgICAgICAgICAgICAgICRzY29wZS5zZXJ2aWNlU2VsZWN0b3JzID0gcmVzdWx0LnNlcnZpY2VTZWxlY3RvcnM7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIC8vd2lsbCBmYWlsIHNpbGVudGx5LCBncmFwaCB3b24ndCBiZSBkaXNwbGF5ZWRcbiAgICAgICAgICAgIH0pO1xuICAgIH1dKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2LnZpc3VhbGl6YXRpb24nKVxuICAgIC5mYWN0b3J5KCdWaXN1YWxpemF0aW9uU2VydmljZScsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYWtlcyBhIGdldCByZXF1ZXN0IHdpdGggdGhlIHVybCBhbmQgY29uZmlnLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gICAgICB7c3RyaW5nfSAgdXJsICAgICBUaGUgdXJsXG4gICAgICAgICAqIEBwYXJhbSAgICAgIHtPYmplY3R9ICBjb25maWcgIFRoZSBjb25maWd1cmF0aW9uc1xuICAgICAgICAgKiBAcmV0dXJuICAgICB7JEh0dHAgUHJvbWlzZX0gICBQcm9taXNlIG9mIHRoZSByZXF1ZXN0XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBtYWtlR2V0KHVybCwgY29uZmlnKSB7XG4gICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgICAgICAgJGh0dHAuZ2V0KHVybCwgY29uZmlnKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTWFrZXMgYSBwb3N0IHJlcXVlc3Qgd2l0aCB0aGUgdXJsIGFuZCBkYXRhXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSAgICAgIHtzdHJpbmd9ICB1cmwgICAgIFRoZSB1cmxcbiAgICAgICAgICogQHBhcmFtICAgICAge0pTT059ICAgIGRhdGEgICAgVGhlIGRhdGFcbiAgICAgICAgICogQHJldHVybiAgICAgeyRIdHRwIFByb21pc2V9ICAgUHJvbWlzZSBvZiB0aGUgcmVxdWVzdFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gbWFrZVBvc3QodXJsLCBkYXRhKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIGNvbnZlcnRzIHRoZSBkYXRhIGludG8geC13d3ctZnJvbS11cmxlbmNvZGVkXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAgICAge0pTT059ICBvYmogICAgIEpTT04gZGF0YSBvYmplY3RcbiAgICAgICAgICAgICAqIEByZXR1cm4gICAgIHtzdHJpbmd9ICB4LXd3dy1mb3JtLXVybGVuY29kZWQgc3RyaW5nXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhciBwYXJhbSA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgICAgICAgIHZhciBxdWVyeSA9ICcnLCBuYW1lLCB2YWx1ZSwgZnVsbFN1Yk5hbWUsIHN1Yk5hbWUsIHN1YlZhbHVlLCBpbm5lck9iaiwgaTtcbiAgICAgICAgICAgICAgICBmb3IgKG5hbWUgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZSA9IG9ialtuYW1lXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpPTA7IGk8dmFsdWUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJWYWx1ZSA9IHZhbHVlW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxTdWJOYW1lID0gbmFtZSArICdbJyArIGkgKyAnXSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJPYmogPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lck9ialtmdWxsU3ViTmFtZV0gPSBzdWJWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSArPSBwYXJhbShpbm5lck9iaikgKyAnJic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoc3ViTmFtZSBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YlZhbHVlID0gdmFsdWVbc3ViTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFN1Yk5hbWUgPSBuYW1lICsgJ1snICsgc3ViTmFtZSArICddJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lck9iaiA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyT2JqW2Z1bGxTdWJOYW1lXSA9IHN1YlZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5ICs9IHBhcmFtKGlubmVyT2JqKSArICcmJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5ICs9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkgKyAnJic7XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeS5sZW5ndGggPyBxdWVyeS5zdWJzdHIoMCwgcXVlcnkubGVuZ3RoIC0gMSkgOiBxdWVyeTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICAgICAkaHR0cCh7XG4gICAgICAgICAgICAgICAgdXJsOnVybCxcbiAgICAgICAgICAgICAgICBtZXRob2Q6J1BPU1QnLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYW5ndWxhci5pc09iamVjdChkYXRhKSAmJiBTdHJpbmcoZGF0YSkgIT09ICdbb2JqZWN0IEZpbGVdJyA/IHBhcmFtKGRhdGEpIDogZGF0YTtcbiAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldEdyYXBoRGF0YSgpIHtcbiAgICAgICAgICAgIHZhciB1cmwgPSBDb250aXZHbG9iYWxzLlZJU1VBTElaQVRJT05fRU5EUE9JTlQ7XG4gICAgICAgICAgICB1cmwgKz0gJ2luZmx1eC9xdWVyeSc7XG4gICAgICAgICAgICB2YXIgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBkYjpcInRlbGVncmFmXCIsXG4gICAgICAgICAgICAgICAgICAgIHE6XCJTRUxFQ1QgQnl0ZXNJbiwgQnl0ZXNPdXQsIEVuZHBvaW50SVAsIFByb3ZpZGVySVAgRlJPTSBodHRwanNvbl9zdmNzdGF0cyBXSEVSRSB0aW1lID4gbm93KCkgLSAxbSBHUk9VUCBCWSAqIExJTUlUIDFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gbWFrZUdldCh1cmwsIGNvbmZpZyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRTdHJ1Y3R1cmVEYXRhKCkge1xuICAgICAgICAgICAgdmFyIHVybCA9IENvbnRpdkdsb2JhbHMuVklTVUFMSVpBVElPTl9FTkRQT0lOVDtcbiAgICAgICAgICAgIHVybCArPSAnc2VydmljZXMnO1xuICAgICAgICAgICAgcmV0dXJuIG1ha2VHZXQodXJsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGJ1aWxkV2hlcmVRdWVyeShwb2ludHMsIHR5cGUpIHtcbiAgICAgICAgICAgIHZhciBxdWVyeSA9IFwiKFwiO1xuICAgICAgICAgICAgcXVlcnkgKz0gdHlwZSArIFwiPVwiO1xuICAgICAgICAgICAgcXVlcnkgKz0gXCInXCIgKyBwb2ludHNbMF0gKyBcIicgXCI7XG4gICAgICAgICAgICAvL3N0YXJ0cyBhdCAxLCBzbyB3aWxsIG5vdCBydW4gaWYgbGVuZ3RoIGlzIDFcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcXVlcnkgKz0gJ09SICc7XG4gICAgICAgICAgICAgICAgcXVlcnkgKz0gdHlwZSArIFwiPVwiO1xuICAgICAgICAgICAgICAgIHF1ZXJ5ICs9IFwiJ1wiICsgcG9pbnRzW2ldICsgXCInIFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcXVlcnkgKz0gXCIpXCI7XG4gICAgICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRFZGdlRGF0YShzb3VyY2VMaXN0LCB0YXJnZXRMaXN0LCB0aW1lKSB7XG4gICAgICAgICAgICB2YXIgdXJsID0gQ29udGl2R2xvYmFscy5WSVNVQUxJWkFUSU9OX0VORFBPSU5UO1xuICAgICAgICAgICAgdXJsICs9ICdpbmZsdXgvcXVlcnknO1xuXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgZGIgOiBcInRlbGVncmFmXCIsXG4gICAgICAgICAgICAgICAgICAgIHE6IFwiU0VMRUNUIHN1bShcIiArICdCeXRlc091dCcgKyBcIikgZnJvbSBodHRwanNvbl9zdmNzdGF0cyBXSEVSRSB0aW1lID4gbm93KCkgLSAxNXMgQU5EIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgKyBidWlsZFdoZXJlUXVlcnkoc291cmNlTGlzdCwgXCJFbmRwb2ludElQXCIpICtcIiBBTkQgXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgKyBidWlsZFdoZXJlUXVlcnkodGFyZ2V0TGlzdCwgJ1Byb3ZpZGVySVAnKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICArIFwiR1JPVVAgQlkgdGltZSgyMHMpIExJTUlUIDE7IFNFTEVDVCBzdW0oXCIgKyAnQnl0ZXNJbicgKyBcIikgZnJvbSBodHRwanNvbl9zdmNzdGF0cyBXSEVSRSB0aW1lID4gbm93KCkgLSAxNXMgQU5EIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgKyBidWlsZFdoZXJlUXVlcnkoc291cmNlTGlzdCwgJ1Byb3ZpZGVySVAnKSArXCIgQU5EIFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICsgYnVpbGRXaGVyZVF1ZXJ5KHRhcmdldExpc3QsICdFbmRwb2ludElQJykgXG4gICAgICAgICAgICAgICAgICAgICAgICAgKyBcIkdST1VQIEJZIHRpbWUoMjBzKSBmaWxsKDApIExJTUlUIDFcIlxuICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBtYWtlUG9zdCh1cmwsIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgXG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0T2xkRWRnZURhdGEoc291cmNlTGlzdCwgdGFyZ2V0TGlzdCkge1xuICAgICAgICAgICAgdmFyIHVybCA9IENvbnRpdkdsb2JhbHMuVklTVUFMSVpBVElPTl9FTkRQT0lOVDtcbiAgICAgICAgICAgIHVybCArPSAnaW5mbHV4L3F1ZXJ5JztcbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBkYiA6IFwidGVsZWdyYWZcIixcbiAgICAgICAgICAgICAgICAgICAgcTogXCJTRUxFQ1Qgc3VtKFwiICsgJ0J5dGVzT3V0JyArIFwiKSBGUk9NIGh0dHBqc29uX3N2Y3N0YXRzIFdIRVJFIHRpbWUgPiBub3coKSAtIDFtIEFORCBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICsgYnVpbGRXaGVyZVF1ZXJ5KHNvdXJjZUxpc3QsIFwiRW5kcG9pbnRJUFwiKSArXCIgQU5EIFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICsgYnVpbGRXaGVyZVF1ZXJ5KHRhcmdldExpc3QsIFwiUHJvdmlkZXJJUFwiKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICArIFwiIEdST1VQIEJZIHRpbWUoMTBzKSBmaWxsKDApIExJTUlUIDY7IFNFTEVDVCBzdW0oXCIgKyAnQnl0ZXNJbicgKyBcIikgRlJPTSBodHRwanNvbl9zdmNzdGF0cyBXSEVSRSB0aW1lID4gbm93KCkgLSAxbSBBTkQgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICArIGJ1aWxkV2hlcmVRdWVyeShzb3VyY2VMaXN0LCBcIlByb3ZpZGVySVBcIikgK1wiIEFORCBcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICArIGJ1aWxkV2hlcmVRdWVyeSh0YXJnZXRMaXN0LCBcIkVuZHBvaW50SVBcIikgXG4gICAgICAgICAgICAgICAgICAgICAgICAgKyBcIiBHUk9VUCBCWSB0aW1lKDEwcykgZmlsbCgwKSBMSU1JVCA2XCJcbiAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gbWFrZVBvc3QodXJsLCBkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXRHcmFwaERhdGE6IGdldEdyYXBoRGF0YSxcbiAgICAgICAgICAgIGdldFN0cnVjdHVyZURhdGE6IGdldFN0cnVjdHVyZURhdGEsXG4gICAgICAgICAgICBnZXRFZGdlRGF0YTogZ2V0RWRnZURhdGEsXG4gICAgICAgICAgICBnZXRPbGRFZGdlRGF0YTogZ2V0T2xkRWRnZURhdGFcbiAgICAgICAgfVxuICAgIH1dKTtcblxuXG5cblxuXG5cbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNi8zLzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnZvbHVtZXMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS52b2x1bWVzLmNyZWF0ZScsIHtcbiAgICAgICAgICAgIHVybDogJy9jcmVhdGUnLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd2b2x1bWVzL3ZvbHVtZWNyZWF0ZS5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdWb2x1bWVDcmVhdGVDdHJsIGFzIHZvbHVtZUNyZWF0ZUN0cmwnXG4gICAgICAgIH0pO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdWb2x1bWVDcmVhdGVDdHJsJywgWyckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ1ZvbHVtZXNNb2RlbCcsICdTdG9yYWdlUG9saWNpZXNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsXG4gICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBWb2x1bWVzTW9kZWwsIFN0b3JhZ2VQb2xpY2llc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICB2YXIgdm9sdW1lQ3JlYXRlQ3RybCA9IHRoaXM7XG4gICAgICAgIHZvbHVtZUNyZWF0ZUN0cmwuZmlsZXN5c3RlbXMgPSBbJ2V4dDQnLCAnYnRyZnMnXTtcbiAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9Wb2x1bWVzTW9kZWwoKSB7XG4gICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51LnZvbHVtZXMubGlzdCcpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNhbmNlbENyZWF0aW5nKCkge1xuICAgICAgICAgICAgcmV0dXJuVG9Wb2x1bWVzTW9kZWwoKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHN0b3JhZ2UgcG9saWNpZXMuXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBnZXRTdG9yYWdlUG9saWNpZXMoKSB7XG4gICAgICAgICAgICBTdG9yYWdlUG9saWNpZXNNb2RlbC5nZXQoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB2b2x1bWVDcmVhdGVDdHJsLnBvbGljaWVzID0gcmVzdWx0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYXBwbHlQb2xpY3lTZXR0aW5ncygpIHtcbiAgICAgICAgICAgIHZvbHVtZUNyZWF0ZUN0cmwubmV3Vm9sdW1lLnBvbGljeSA9IHZvbHVtZUNyZWF0ZUN0cmwuc2VsZWN0ZWRQb2xpY3kubmFtZTtcbiAgICAgICAgICAgIHZvbHVtZUNyZWF0ZUN0cmwubmV3Vm9sdW1lLmJhY2tlbmRzID0gdm9sdW1lQ3JlYXRlQ3RybC5zZWxlY3RlZFBvbGljeS5iYWNrZW5kcztcbiAgICAgICAgICAgIHZvbHVtZUNyZWF0ZUN0cmwubmV3Vm9sdW1lLmRyaXZlciA9IHZvbHVtZUNyZWF0ZUN0cmwuc2VsZWN0ZWRQb2xpY3kuZHJpdmVyO1xuICAgICAgICAgICAgdm9sdW1lQ3JlYXRlQ3RybC5uZXdWb2x1bWUuY3JlYXRlID0gdm9sdW1lQ3JlYXRlQ3RybC5zZWxlY3RlZFBvbGljeS5jcmVhdGU7XG4gICAgICAgICAgICB2b2x1bWVDcmVhdGVDdHJsLm5ld1ZvbHVtZS5ydW50aW1lID0gdm9sdW1lQ3JlYXRlQ3RybC5zZWxlY3RlZFBvbGljeS5ydW50aW1lO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVZvbHVtZSgpIHtcbiAgICAgICAgICAgIC8vZm9ybSBjb250cm9sbGVyIGlzIGluamVjdGVkIGJ5IHRoZSBodG1sIHRlbXBsYXRlXG4gICAgICAgICAgICAvL2NoZWNraW5nIGlmIGFsbCB2YWxpZGF0aW9ucyBoYXZlIHBhc3NlZFxuICAgICAgICAgICAgaWYgKHZvbHVtZUNyZWF0ZUN0cmwuZm9ybS4kdmFsaWQpIHtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Iodm9sdW1lQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIodm9sdW1lQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgYXBwbHlQb2xpY3lTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgIFZvbHVtZXNNb2RlbC5jcmVhdGUodm9sdW1lQ3JlYXRlQ3RybC5uZXdWb2x1bWUpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHZvbHVtZUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub1ZvbHVtZXNNb2RlbCgpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIodm9sdW1lQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcih2b2x1bWVDcmVhdGVDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIodm9sdW1lQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Iodm9sdW1lQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICB2b2x1bWVDcmVhdGVDdHJsLm5ld1ZvbHVtZSA9IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcImJhY2tlbmRzXCI6IHt9LFxuICAgICAgICAgICAgICAgIFwiZHJpdmVyXCI6IHt9LFxuICAgICAgICAgICAgICAgIFwiY3JlYXRlXCI6IHt9LFxuICAgICAgICAgICAgICAgIFwicnVudGltZVwiOiB7fVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB2b2x1bWVDcmVhdGVDdHJsLmNyZWF0ZVZvbHVtZSA9IGNyZWF0ZVZvbHVtZTtcbiAgICAgICAgdm9sdW1lQ3JlYXRlQ3RybC5jYW5jZWxDcmVhdGluZyA9IGNhbmNlbENyZWF0aW5nO1xuICAgICAgICBnZXRTdG9yYWdlUG9saWNpZXMoKTtcbiAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgfV0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dm9sdW1lY3JlYXRlY3RybC5qcy5tYXAiLCIvKipcbiAqIENyZWF0ZWQgYnkgY3NoYW1wdXIgb24gOC85LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnZvbHVtZXMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS52b2x1bWVzLmNvcHknLCB7XG4gICAgICAgICAgICB1cmw6ICcvY29weS8nLFxuICAgICAgICAgICAgcGFyYW1zOiB7IHNuYXBzaG90OiBudWxsLCBwb2xpY3k6IG51bGwsIHZvbHVtZTogbnVsbCB9LFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1ZvbHVtZVNuYXBzaG90Q29weUN0cmwgYXMgdm9sdW1lU25hcHNob3RDb3B5Q3RybCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZvbHVtZXMvdm9sdW1lc25hcHNob3Rjb3B5Lmh0bWwnXG4gICAgICAgIH0pO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdWb2x1bWVTbmFwc2hvdENvcHlDdHJsJywgWyckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJGh0dHAnLCAnVm9sdW1lc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsICRzY29wZSwgJGludGVydmFsLCAkaHR0cCwgVm9sdW1lc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICB2YXIgdm9sdW1lU25hcHNob3RDb3B5Q3RybCA9IHRoaXM7XG4gICAgICAgIGZ1bmN0aW9uIGNhbmNlbENvcHkoKSB7XG4gICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51LnZvbHVtZXMuZGV0YWlscycsIHsga2V5OiAkc3RhdGVQYXJhbXMucG9saWN5ICsgJy8nICsgJHN0YXRlUGFyYW1zLnZvbHVtZSB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnb1RvTmV3Vm9sdW1lKCkge1xuICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS52b2x1bWVzLmRldGFpbHMnLCB7IGtleTogJHN0YXRlUGFyYW1zLnBvbGljeSArICcvJyArIHZvbHVtZVNuYXBzaG90Q29weUN0cmwubmV3dm9sdW1lIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNvcHlTbmFwc2hvdCgpIHtcbiAgICAgICAgICAgIGlmICh2b2x1bWVTbmFwc2hvdENvcHlDdHJsLmZvcm0uJHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKHZvbHVtZVNuYXBzaG90Q29weUN0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKHZvbHVtZVNuYXBzaG90Q29weUN0cmwpO1xuICAgICAgICAgICAgICAgIHZhciBtb2RlbCA9IHt9O1xuICAgICAgICAgICAgICAgIG1vZGVsLnBvbGljeSA9ICRzdGF0ZVBhcmFtcy5wb2xpY3k7XG4gICAgICAgICAgICAgICAgbW9kZWwubmFtZSA9ICRzdGF0ZVBhcmFtcy52b2x1bWU7XG4gICAgICAgICAgICAgICAgVm9sdW1lc01vZGVsLmNvcHkobW9kZWwsICRzdGF0ZVBhcmFtcy5zbmFwc2hvdCwgdm9sdW1lU25hcHNob3RDb3B5Q3RybC5uZXd2b2x1bWUpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcih2b2x1bWVTbmFwc2hvdENvcHlDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgZ29Ub05ld1ZvbHVtZSgpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIodm9sdW1lU25hcHNob3RDb3B5Q3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcih2b2x1bWVTbmFwc2hvdENvcHlDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZvbHVtZVNuYXBzaG90Q29weUN0cmwucG9saWN5ID0gJHN0YXRlUGFyYW1zLnBvbGljeTtcbiAgICAgICAgdm9sdW1lU25hcHNob3RDb3B5Q3RybC52b2x1bWUgPSAkc3RhdGVQYXJhbXMudm9sdW1lO1xuICAgICAgICB2b2x1bWVTbmFwc2hvdENvcHlDdHJsLnNuYXBzaG90ID0gJHN0YXRlUGFyYW1zLnNuYXBzaG90O1xuICAgICAgICB2b2x1bWVTbmFwc2hvdENvcHlDdHJsLmNvcHlTbmFwc2hvdCA9IGNvcHlTbmFwc2hvdDtcbiAgICAgICAgdm9sdW1lU25hcHNob3RDb3B5Q3RybC5jYW5jZWxDb3B5ID0gY2FuY2VsQ29weTtcbiAgICB9XSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD12b2x1bWVzbmFwc2hvdGNvcHljdHJsLmpzLm1hcCIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gMTAvMTQvMTYuXG4gKi9cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vZGVscy5tb2R1bGUuanMubWFwIiwiYW5ndWxhci5tb2R1bGUoXCJjb250aXYuZGlyZWN0aXZlc1wiKVxuICAgIC5kaXJlY3RpdmUoXCJjdHZBY2l2YWxpZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2RpcmVjdGl2ZXMvbm9kZXMvYWNpdmFsaWQuaHRtbCcsXG4gICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgIGZvcm06IFwiPVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSk7IiwiYW5ndWxhci5tb2R1bGUoXCJjb250aXYuZGlyZWN0aXZlc1wiKVxuICAgIC5kaXJlY3RpdmUoXCJjdHZDb250cm9saW50ZXJmYWNlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvZGlyZWN0aXZlcy9ub2Rlcy9jb250cm9saW50ZXJmYWNlLmh0bWwnLFxuICAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgICBleHRyYXZhcnM6IFwiPVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSk7IiwiYW5ndWxhci5tb2R1bGUoXCJjb250aXYuZGlyZWN0aXZlc1wiKVxuICAgIC5kaXJlY3RpdmUoXCJjdHZOZXR3b3JrbW9kZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2RpcmVjdGl2ZXMvbm9kZXMvbmV0d29ya21vZGUuaHRtbCcsXG4gICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgIGV4dHJhdmFyczogXCI9XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9KTsiLCJhbmd1bGFyLm1vZHVsZShcImNvbnRpdi5kaXJlY3RpdmVzXCIpXG4gICAgLmRpcmVjdGl2ZShcImN0dlNjaGVkdWxlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2RpcmVjdGl2ZXMvbm9kZXMvc2NoZWR1bGVyLmh0bWwnLFxuICAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgICBleHRyYXZhcnM6IFwiPVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
