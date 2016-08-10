
'use strict';

describe('contiv.visualization module', function () {
	var envVariables = {
		"nodes": [
			{
				"name":"Web",
				"id": 0,
			},
			{
				"name":"Passenger App Container",
				"id": 1,
			},
			{
				"name":"Passenger App Container",
				"id": 2,
			},
			{
				"name":"Passenger Db Container",
				"id": 3,
			},
			{
				"name":"Driver App Container",
				"id": 4,
			},
			{
				"name":"Driver Db Container",
				"id": 5,
			},
		],
		"links": [
			{
				"source": 0,
				"target": 1,
				"weight": 5,
			},
			{
				"source": 1,
				"target": 0,
				"weight": 5,
			},
			{
				"source": 0,
				"target": 2,
				"weight": 3,
			},
			{
				"source": 1,
				"target": 3,
				"weight": 2,
			},
			{
				"source": 2,
				"target": 3,
				"weight": 3,
			},
			{
				"source": 0,
				"target": 4,
				"weight": 6,
			},
			{
				"source": 4,
				"target": 5,
				"weight": 10,
			},
		]
	};
	var children_struct = {};
	children_struct.topLevel = ["Web", "Passenger", "Driver"];
	children_struct["Passenger"] = ["Passenger App", "Passenger Db"];
	children_struct["Driver"] = ["Driver App", "Driver Db"];
	children_struct["Passenger App"] = [1, 2];
	children_struct["Passenger Db"] = [3];
	children_struct["Driver App"] = [4]
	children_struct["Driver Db"] = [5]

	var ancestors_struct = {};
	ancestors_struct["Passenger App Container"] = ["Passenger App", "Passenger"];
	ancestors_struct["Passenger Db Container"] = ["Passenger Db", "Passenger"];
	ancestors_struct["Driver App Container"] = ["Driver App", "Driver"];
	ancestors_struct["Driver Db Container"] = ["Driver Db", "Driver"];
	ancestors_struct["Passenger App"] = ["Passenger"];
	ancestors_struct["Passenger Db"] = ["Passenger"];
	ancestors_struct["Driver App"] = ["Driver"];
	ancestors_struct["Driver Db"] = ["Driver"];
	ancestors_struct["Passenger"] = [null];
	ancestors_struct["Driver"] = [null];
	ancestors_struct["Web"] = [null];

	var structureData = {ancestors_struct:ancestors_struct, 
			children_struct:children_struct};

	var $compile, $rootScope, directiveElem, $httpBackend;

	var params = {
                    pretty:true,
                    db:"telegraf",
                    q:"SELECT BytesIn, BytesOut, EndpointIP, ProviderIP FROM httpjson_svcstats WHERE time > now() - 1m GROUP BY * LIMIT 1"
                };

    beforeEach(module('ui.router'));

    beforeEach(module('contiv.test.directives'));

    beforeEach(module('contiv.visualization'));



    beforeEach(inject(function (_$httpBackend_) {
        $httpBackend = _$httpBackend_;
        
        $httpBackend.when('GET', ContivGlobals.VISUALIZATION_ENDPOINT + 'influx/query', params).respond(envVariables);
        $httpBackend.when('GET', ContivGlobals.VISUALIZATION_ENDPOINT + 'data/services').respond(structureData);
    }));

    // afterEach(function () {
    //     $httpBackend.verifyNoOutstandingExpectation();
    //     $httpBackend.verifyNoOutstandingRequest();
    // });
    function getCompiledElement(){
	  	var element = angular.element('<div visualization-graph></div>');
	  	var compiledElement = $compile(element)($rootScope);
	  	$rootScope.$digest();
	  	return compiledElement;
	}

    beforeEach(inject(function(_$rootScope_, _$compile_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_.$new();
        directiveElem = getCompiledElement();
    }));

    it('should have svg element', function () {
	  	var svgElement = directiveElem.find('svg');
	  	expect(svgElement).toBeDefined();
	  	// $httpBackend.expectGET(ContivGlobals.NODES_LIST_ENDPOINT);	
      //   $httpBackend.expect('GET', ContivGlobals.VISUALIZATION_ENDPOINT + 'influx/query', params);
      //   $httpBackend.expect('GET', ContivGlobals.VISUALIZATION_ENDPOINT + 'data/services');
     	// $httpBackend.flush();
     	$rootScope.nodes = envVariables.nodes;
     	$rootScope.links = envVariables.links;
     	$rootScope.children_struct = children_struct;
     	$rootScope.ancestors_struct = ancestors_struct;
     	$rootScope.$digest();
	  	expect($rootScope.visualizationGraph).toBeDefined();
	});

   //  describe('visualization directive', function () {
   //      var $controller, isolateScope, element, graph;
   //      var visualizationListCtrl;
   //      beforeEach(inject(function(_$rootScope_, _$controller_) {

   //          // Compile a piece of HTML containing the directive
   //   //        $rootScope.graphData = envVariables;
   //   //        $rootScope.nodes = envVariables["nodes"];
	  // 		// $rootScope.links = envVariables["links"];
   //   //        $rootScope.children_struct = children_struct;
   //   //        $rootScope.ancestors_struct = ancestors_struct;
   //   	// angular.mock.module('contiv.visualization');
   //   	var service;
   //   	$rootScope = _$rootScope_;
   //      $controller = _$controller_;
    
	  //   //Needs to be changed to be from controller, not from service

	  //   // Get the service from the injector
	  //   angular.mock.inject(function GetDependencies(VisualizationService) {
	  //     service = VisualizationService;
	  //   });

	  //   var data = service.getGraphData();
	  //   var res = service.getStructureData();
	  //   var children_struct = res.children_struct;
	  //   var ancestors_struct = res.ancestors_struct;
	  //   // var ancestors_struct = service.getAncestorsStruct();
	  //   $httpBackend.flush();

	  //   var d = data.$$state.value;
	  //   $rootScope.graphData = d;
	  //   $rootScope.nodes = d.nodes;
	  //   $rootScope.links = d.links;
	  //   $rootScope.children_struct = children_struct.$$state.value;
	  //   $rootScope.ancestors_struct = ancestors_struct.$$state.value;

            
   //          visualizationListCtrl = $controller('VisualizationListCtrl', {$scope: $rootScope, VisualizationService:service});

   //          element = $compile("<div visualization-graph graph-data='envVariables' children-struct = 'children_struct' ancestors-struct = 'ancestors_struct'></div>")($rootScope);
			// // expect(visualizationListCtrl).toBeDefined();
   //          // fire all the watches, so the scope expression will be evaluated
   //          $rootScope.$digest();
   //          isolateScope = element.isolateScope();
   //      	graph = $rootScope.visualizationGraph;
   //      }));

   //      it('should be defined', function () {
   //          expect(visualizationListCtrl).toBeDefined();
   //          $httpBackend.flush();
   //      });

   //      it('should do get on load', function() {
   //      	// $httpBackend.expectGET(ContivGlobals.VISUALIZATION_ENDPOINT + 'data/graphdata');
   //      	// $httpBackend.expectGET(ContivGlobals.VISUALIZATION_ENDPOINT + 'data/children-struct');
   //      	// $httpBackend.expectGET(ContivGlobals.VISUALIZATION_ENDPOINT + 'data/ancestors-struct');
   //       //    $httpBackend.flush();
   //      })
   //  });
});
