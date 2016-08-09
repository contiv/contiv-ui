
// 'use strict';

// describe('contiv.visualization module', function () {
// 	var envVariables = {
// 		"nodes": [
// 			{
// 				"name":"Web",
// 				"id": 0,
// 				"ancestors": null,
// 			},
// 			{
// 				"name":"Passenger App Container",
// 				"id": 1,
// 				"parent": "Passenger App",
// 				"ancestors":"Passenger App, Passenger",
// 			},
// 			{
// 				"name":"Passenger App Container",
// 				"id": 2,
// 				"parent": "Passenger App",
// 				"ancestors":"Passenger App, Passenger",
// 			},
// 			{
// 				"name":"Passenger Db Container",
// 				"id": 3,
// 				"parent": "Passenger Db",
// 				"ancestors":"Passenger Db, Passenger",
// 			},
// 			{
// 				"name":"Driver App Container",
// 				"id": 4,
// 				"parent": "Driver App",
// 				"ancestors":"Driver App, Driver",
// 			},
// 			{
// 				"name":"Driver Db Container",
// 				"id": 5,
// 				"parent": "Driver Db",
// 				"ancestors":"Driver Db, Driver",
// 			},
// 		],
// 		"links": [
// 			{
// 				"source": 0,
// 				"target": 1,
// 				"weight": 5,
// 			},
// 			{
// 				"source": 1,
// 				"target": 0,
// 				"weight": 5,
// 			},
// 			{
// 				"source": 0,
// 				"target": 2,
// 				"weight": 3,
// 			},
// 			{
// 				"source": 1,
// 				"target": 3,
// 				"weight": 2,
// 			},
// 			{
// 				"source": 2,
// 				"target": 3,
// 				"weight": 3,
// 			},
// 			{
// 				"source": 0,
// 				"target": 4,
// 				"weight": 6,
// 			},
// 			{
// 				"source": 4,
// 				"target": 5,
// 				"weight": 10,
// 			},
// 		]
// 	};
// 	var children_struct = {};
// 	children_struct.topLevel = ["Web", "Passenger", "Driver"];
// 	children_struct["Passenger"] = ["Passenger App", "Passenger Db"];
// 	children_struct["Driver"] = ["Driver App", "Driver Db"];
// 	children_struct["Passenger App"] = [1, 2];
// 	children_struct["Passenger Db"] = [3];
// 	children_struct["Driver App"] = [4]
// 	children_struct["Driver Db"] = [5]

// 	var ancestors_struct = {};
// 	ancestors_struct["Passenger App Container"] = ["Passenger App", "Passenger"];
// 	ancestors_struct["Passenger Db Container"] = ["Passenger Db", "Passenger"];
// 	ancestors_struct["Driver App Container"] = ["Driver App", "Driver"];
// 	ancestors_struct["Driver Db Container"] = ["Driver Db", "Driver"];
// 	ancestors_struct["Passenger App"] = ["Passenger"];
// 	ancestors_struct["Passenger Db"] = ["Passenger"];
// 	ancestors_struct["Driver App"] = ["Driver"];
// 	ancestors_struct["Driver Db"] = ["Driver"];
// 	ancestors_struct["Passenger"] = [null];
// 	ancestors_struct["Driver"] = [null];
// 	ancestors_struct["Web"] = [null];

// 	var structureData = {ancestors_struct:ancestors_struct, 
// 			children_struct:children_struct};

// 	var $compile, $rootScope;

//     beforeEach(module('ui.router'));

//     beforeEach(module('contiv.visualization'));

//     beforeEach(module('contiv.test.directives'));

//     var $httpBackend;

//     beforeEach(inject(function (_$httpBackend_) {
//         $httpBackend = _$httpBackend_;
//         $httpBackend.when('GET', ContivGlobals.VISUALIZATION_ENDPOINT + 'data/graphdata').respond(envVariables);
//         $httpBackend.when('GET', ContivGlobals.VISUALIZATION_ENDPOINT + 'data/services').respond(structureData);
//         // $httpBackend.when('GET', ContivGlobals.VISUALIZATION_ENDPOINT + 'data/ancestors-struct').respond(ancestors_struct);
//         // $httpBackend.expect('GET', ContivGlobals.VISUALIZATION_ENDPOINT + 'visualizationtemplate.html')
//     }));

//     // afterEach(function () {
//     //     $httpBackend.verifyNoOutstandingExpectation();
//     //     $httpBackend.verifyNoOutstandingRequest();
//     // });

//     beforeEach(inject(function(_$rootScope_, _$compile_){
//         // The injector unwraps the underscores (_) from around the parameter names when matching
//         $compile = _$compile_;
//         $rootScope = _$rootScope_;

//     }));

//     describe('visualization directive', function () {
//         var $controller, isolateScope, element, graph;
//         var visualizationListCtrl;
//         beforeEach(inject(function(_$rootScope_, _$controller_) {

//             // Compile a piece of HTML containing the directive
//      //        $rootScope.graphData = envVariables;
//      //        $rootScope.nodes = envVariables["nodes"];
// 	  		// $rootScope.links = envVariables["links"];
//      //        $rootScope.children_struct = children_struct;
//      //        $rootScope.ancestors_struct = ancestors_struct;
//      	// angular.mock.module('contiv.visualization');
//      	var service;
//      	$rootScope = _$rootScope_;
//         $controller = _$controller_;
    
// 	    //Needs to be changed to be from controller, not from service

// 	    // Get the service from the injector
// 	    angular.mock.inject(function GetDependencies(VisualizationService) {
// 	      service = VisualizationService;
// 	    });

// 	    var data = service.getGraphData();
// 	    var res = service.getStructureData();
// 	    var children_struct = res.children_struct;
// 	    var ancestors_struct = res.ancestors_struct;
// 	    // var ancestors_struct = service.getAncestorsStruct();
// 	    $httpBackend.flush();

// 	    var d = data.$$state.value;
// 	    $rootScope.graphData = d;
// 	    $rootScope.nodes = d.nodes;
// 	    $rootScope.links = d.links;
// 	    $rootScope.children_struct = children_struct.$$state.value;
// 	    $rootScope.ancestors_struct = ancestors_struct.$$state.value;

            
//             visualizationListCtrl = $controller('VisualizationListCtrl', {$scope: $rootScope, VisualizationService:service});

//             element = $compile("<div visualization-graph graph-data='envVariables' children-struct = 'children_struct' ancestors-struct = 'ancestors_struct'></div>")($rootScope);
// 			// expect(visualizationListCtrl).toBeDefined();
//             // fire all the watches, so the scope expression will be evaluated
//             $rootScope.$digest();
//             isolateScope = element.isolateScope();
//         	graph = $rootScope.visualizationGraph;
//         }));

//         it('should be defined', function () {
//             expect(visualizationListCtrl).toBeDefined();
//             $httpBackend.flush();
//         });

//         it('should do get on load', function() {
//         	// $httpBackend.expectGET(ContivGlobals.VISUALIZATION_ENDPOINT + 'data/graphdata');
//         	// $httpBackend.expectGET(ContivGlobals.VISUALIZATION_ENDPOINT + 'data/children-struct');
//         	// $httpBackend.expectGET(ContivGlobals.VISUALIZATION_ENDPOINT + 'data/ancestors-struct');
//          //    $httpBackend.flush();
//         })

//         function checkWeights(graph, expectation, avgMaxWeight, totalMaxWeight) {
// 			// console.log('g', graph.links.length);
// 			for (var i = 0; i < graph.links.length; i++) {
// 				var edge = graph.links[i];
// 				// console.log(edge.source.id + ' ' + edge.target.id);
// 				var expWeight = expectation[edge.source.id + ' ' + edge.target.id];
// 				// console.log(edge.weight);
// 				if (expWeight === undefined) {
// 					console.log(edge.source.id, edge.target.id, expectation);
// 				}
// 				expect(edge.weight).toBe(expWeight);
// 			}
// 			// graph.links[0].updateMaxWeight();

// 			// graph.setAvgWeight(true);
//    //      	expectation["maxWeight"] = avgMaxWeight;
// 			expect(graph.state.VisualizerLink.maxWeight).toBe(avgMaxWeight);
// 			// graph.setAvgWeight(false);
//    //      	expectation["maxWeight"] = totalMaxWeight;
// 			// expect(graph.maxWeight).toBe(expectation["maxWeight"]);
// 		}

// 		function findSplitJoinNodePolicy() {
// 			for (var i = 0; i < graph.defaultNodePolicies.length; i++) {
// 				// console.log(graph.defaultNodePolicies);
// 				if (graph.defaultNodePolicies[i].policyName === "SplitJoinNodePolicy") {
// 					return graph.defaultNodePolicies[i];
// 				}
// 			}
// 		}

// 		function checkSplitNode(graph, node, expectation) {
// 			var policy = findSplitJoinNodePolicy();
// 			policy.splitNode(node);	
// 			for (var i = 0; i < graph.nodes.length; i++) {
// 				if (expectation[graph.nodes[i].id] === undefined) {
// 					console.log(graph.nodes[i].id, expectation);
// 				}
// 				expect(expectation[graph.nodes[i].id]).toBe(true);
// 			}
// 		}

// 		function checkJoinNode(graph, node, expectation) {
// 			var policy = findSplitJoinNodePolicy();
// 			policy.joinNode(node);	
// 			for (var i = 0; i < graph.nodes.length; i++) {
// 				if (expectation[graph.nodes[i].id] === undefined) {
// 					console.log(graph.nodes[i].id, expectation);
// 				}
// 				expect(expectation[graph.nodes[i].id]).toBe(true);
// 			}
// 		}

//         it('visualization initialization', function() {
//         	//original setup, 3 nodes, 3 edges
//         	expect(graph.nodes.length).toBe(3);
//         	expect(graph.links.length).toBe(3);
//         	//checking that edge weights are computed correctly
//         	var expectation = {"Web Passenger": 8, 
//         						"Web Driver": 6, 
//         						"Passenger Web": 5};
//         	checkWeights(graph, expectation, 6, 8);
//         });
//         it('splitting and joining nodes', function() {
//         	//splitting passenger
//         	var expectation;
//         	var node = graph.findNodeById("Passenger");
//         	expectation = {"Web":true,
//     						"Passenger App": true,
//     						"Passenger Db": true,
//     						"Driver": true};
//         	checkSplitNode(graph, node, expectation);
//         	expectation = {"Web Passenger App": 8, 
// 							"Passenger App Passenger Db": 5, 
//     						"Web Driver": 6, 
//     						"Passenger App Web": 5};

//         	checkWeights(graph, expectation, 6, 8);

//         	//checking that splitting web does nothing
//         	var node = graph.findNodeById("Web");
//         	expectation = {"Web":true,
//     						"Passenger App": true,
//     						"Passenger Db": true,
//     						"Driver": true};
//         	checkSplitNode(graph, node, expectation);

//         	//splitting passsenger app and db
//         	var node = graph.findNodeById("Passenger App");
//         	expectation = {"Web":true,
//     						"1": true,
//     						"2": true,
//     						"Passenger Db": true,
//     						"Driver": true};
//         	checkSplitNode(graph, node, expectation);
//         	var node = graph.findNodeById("Driver");
//         	expectation = {"Web":true,
//     						"1": true,
//     						"2": true,
//     						"Passenger Db": true,
//     						"Driver Db": true,
//     						"Driver App": true};
//         	checkSplitNode(graph, node, expectation);
// 			expectation = {"Web 1": 5, 
//     						"Web 2": 3, 
//     						"2 Passenger Db": 3, 
//     						"1 Passenger Db": 2, 
//     						"Web Driver App": 6, 
//     						"Driver App Driver Db": 10, 
//     						"1 Web": 5};

//         	checkWeights(graph, expectation, 10, 10);


//         	//checking that splitting a container node does nothing
//         	var node = graph.findNodeById("1");
//         	expectation = {"Web":true,
//     						"1": true,
//     						"2": true,
//     						"Passenger Db": true,
//     						"Driver Db": true,
//     						"Driver App": true};
//         	checkSplitNode(graph, node, expectation);

//         	//joining driver db node
//         	var node = graph.findNodeById("Driver Db");
//         	expectation = {"Web":true,
//     						"1": true,
//     						"2": true,
//     						"Passenger Db": true,
//     						"Driver": true};
//         	checkJoinNode(graph, node, expectation);
//         	expectation = {"Web 1": 5, 
//     						"Web 2": 3, 
//     						"2 Passenger Db": 3, 
//     						"1 Passenger Db": 2, 
//     						"Web Driver": 6, 
//     						"1 Web": 5};

//         	checkWeights(graph, expectation, 6, 6);
//         	//joining passenger db -- will join the passenger
//         	//app container as well
//         	var node = graph.findNodeById("Passenger Db");
//         	expectation = {"Web":true,
//     						"Passenger": true,
//     						"Driver": true};
//         	checkJoinNode(graph, node, expectation);
//         	expectation = {"Web Passenger": 8, 
//     						"Web Driver": 6, 
//     						"Passenger Web": 5};
//         	checkWeights(graph, expectation, 6, 8);

//         });
//     });
// });
