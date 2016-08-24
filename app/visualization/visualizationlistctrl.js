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
            var graphData = function() {
                var nodes = [];
                var links = [];
                //endpoint ip
                nodes.push({name: '11.1.1.2', id:'11.1.1.2', parent:null, ancestors:null});
                nodes.push({name: '11.1.1.3', id:'11.1.1.3', parent:null, ancestors:null});
                nodes.push({name: '11.1.1.4', id:'11.1.1.4', parent:null, ancestors:null});
                nodes.push({name: '11.1.1.5', id:'11.1.1.5', parent:null, ancestors:null});
                nodes.push({name: '11.1.1.6', id:'11.1.1.6', parent:null, ancestors:null});
                nodes.push({name: '11.1.1.7', id:'11.1.1.7', parent:null, ancestors:null});
                nodes.push({name: '11.1.1.8', id:'11.1.1.8', parent:null, ancestors:null});

                //app-svc provider ip
                nodes.push({name: '10.1.1.1', id:'10.1.1.1', parent:null, ancestors:null});
                nodes.push({name: '10.1.1.2', id:'10.1.1.2', parent:null, ancestors:null});
                nodes.push({name: '10.1.1.3', id:'10.1.1.3', parent:null, ancestors:null});
                nodes.push({name: '10.1.1.4', id:'10.1.1.4', parent:null, ancestors:null});
                nodes.push({name: '10.1.1.5', id:'10.1.1.5', parent:null, ancestors:null});
                nodes.push({name: '10.1.1.6', id:'10.1.1.6', parent:null, ancestors:null});
                nodes.push({name: '10.1.1.7', id:'10.1.1.7', parent:null, ancestors:null});
                nodes.push({name: '10.1.1.8', id:'10.1.1.8', parent:null, ancestors:null});
                nodes.push({name: '10.1.1.9', id:'10.1.1.9', parent:null, ancestors:null});

                //app-db provider ip
                nodes.push({name: '10.1.1.10', id:'10.1.1.10', parent:null, ancestors:null});
                nodes.push({name: '10.1.1.11', id:'10.1.1.11', parent:null, ancestors:null});
                nodes.push({name: '10.1.1.12', id:'10.1.1.12', parent:null, ancestors:null});

                //app-svc links
                links.push({source: '11.1.1.2', target: '10.1.1.1', weight:54});
                links.push({source: '10.1.1.1', target: '11.1.1.2', weight:95});
                links.push({source: '11.1.1.3', target: '10.1.1.1', weight:80});
                links.push({source: '10.1.1.1', target: '11.1.1.3', weight:54});
                links.push({source: '11.1.1.4', target: '10.1.1.3', weight:48});
                links.push({source: '10.1.1.3', target: '11.1.1.4', weight:24});
                links.push({source: '11.1.1.5', target: '10.1.1.6', weight:23});
                links.push({source: '10.1.1.6', target: '11.1.1.5', weight:54});
                links.push({source: '11.1.1.6', target: '10.1.1.7', weight:65});
                links.push({source: '10.1.1.7', target: '11.1.1.6', weight:43});
                links.push({source: '11.1.1.7', target: '10.1.1.8', weight:90});
                links.push({source: '10.1.1.8', target: '11.1.1.7', weight:48});
                links.push({source: '11.1.1.8', target: '10.1.1.9', weight:54});
                links.push({source: '10.1.1.9', target: '11.1.1.8', weight:54});

                //app-db links
                links.push({source: '11.1.1.8', target: '10.1.1.10', weight:54});
                links.push({source: '10.1.1.10', target: '11.1.1.8', weight:78});
                return {nodes:nodes, links:links};
            }

            var structureData = function() {
                var labels = {
                    "10.1.1.10": {
                        "environment": "prod",
                        "release": "stable",
                        "version": "1.0",
                        "tier": "db"
                    },
                    "10.1.1.11": {
                        "environment": "prod",
                        "release": "stable",
                        "version": "1.0",
                        "tier": "db"
                    },
                    "10.1.1.12": {
                        "environment": "prod",
                        "release": "stable",
                        "version": "1.0",
                        "tier": "db"
                    },
                    "10.1.1.1": {
                        "environment": "prod",
                        "release": "stable",
                        "version": "1.0",
                        "tier": "web"
                    },
                    "10.1.1.9": {
                        "environment": "prod",
                        "release": "stable",
                        "version": "1.0",
                        "tier": "web"
                    },
                    "10.1.1.8": {
                        "environment": "prod",
                        "release": "stable",
                        "version": "1.0",
                        "tier": "web"
                    },
                    "10.1.1.3": {
                        "environment": "prod",
                        "release": "stable",
                        "version": "1.0",
                        "tier": "web"
                    },
                    "10.1.1.2": {
                        "environment": "prod",
                        "release": "stable",
                        "version": "1.0",
                        "tier": "web"
                    },
                    "10.1.1.5": {
                        "environment": "prod",
                        "release": "stable",
                        "version": "1.0",
                        "tier": "web"
                    },
                    "10.1.1.4": {
                        "environment": "prod",
                        "release": "stable",
                        "version": "1.0",
                        "tier": "web"
                    },
                    "10.1.1.7": {
                        "environment": "prod",
                        "release": "stable",
                        "version": "1.0",
                        "tier": "web"
                    },
                    "10.1.1.6": {
                        "release": "stable",
                        "tier": "web",
                        "version": "1.0",
                        "environment": "prod"
                    }
                };
                var serviceSelectors = {
                    "app-db": {
                        "tier": "db",
                        "release": "stable",
                        "environment": "prod"
                    },
                    "app-svc": {
                        "tier": "web",
                        "release": "stable",
                        "environment": "prod"
                    }
                }
                var children_struct = {
                    "topLevel": [
                        "app-svc",
                        "app-db",
                        "app0-svc",
                        "app0-db",
                        "app1-svc",
                        "app1-db",
                        "app2-svc",
                        "app2-db",
                        "app3-svc",
                        "app3-db",
                        "app4-svc",
                        "app4-db",
                        "app5-svc",
                        "app5-db",
                        "app6-svc",
                        "app6-db",
                        "app7-svc",
                        "app7-db",
                        "app8-svc",
                        "app8-db",
                        "app9-svc",
                        "app9-db",
                        "app10-svc",
                        "app10-db",
                        "app11-svc",
                        "app11-db",
                        "app01-svc",
                        "app02-db",
                        "app03-svc",
                        "app03-db",
                        "app20-svc",
                        "app20-db",
                        "app30-svc",
                        "app30-db",
                        "app40-svc",
                        "app40-db",
                        "app50-svc",
                        "app50-db",
                        "app60-svc",
                        "app60-db",
                        "app70-svc",
                        "app70-db",
                        "app80-svc",
                        "app80-db",
                        "app90-svc",
                        "app90-db",
                        "app100-svc",
                        "app100-db",
                        "app110-svc",
                        "app110-db"

                    ],
                    // "app0-svc": [],
                    // "app0-db": [],
                    "app-svc": [
                        "10.1.1.1",
                        "10.1.1.2",
                        "10.1.1.3",
                        "10.1.1.4",
                        "10.1.1.5",
                        "10.1.1.6",
                        "10.1.1.7",
                        "10.1.1.8",
                        "10.1.1.9"
                    ],
                    "app-db": [
                        "10.1.1.10",
                        "10.1.1.11",
                        "10.1.1.12"
                    ]
                };

                _.forEach(children_struct['topLevel'], function(s) {
                    if (children_struct[s] == null) {
                        children_struct[s] = [];
                    }
                });

                var ancestors_struct = {};
                _.forEach(children_struct['app-svc'], function(s) {
                    ancestors_struct[s] = ['app-svc'];
                });
                _.forEach(children_struct['app-db'], function(s) {
                    ancestors_struct[s] = ['app-db'];
                });

                return {children_struct:children_struct, ancestors_struct:ancestors_struct,
                    labels:labels, serviceSelectors:serviceSelectors};
            }
            VisualizationService.getGraphData().then(function successCallback(result) {
                var data = graphData();
                $scope.nodes = data.nodes;
                $scope.links = data.links;
                // $scope.endpoints = endpoints;
                // $scope.providers = providers;
            }, function errorCallback(result) {
                // console.log("Couldn't load graph data");
                var data = graphData();
                $scope.nodes = data.nodes;
                $scope.links = data.links;
            });
            $scope.graphDataInterval = $interval(function() {
                VisualizationService.getGraphData().then(function successCallback(result) {
                    var data = graphData();
                    $scope.nodes = data.nodes;
                    $scope.links = data.links;
                    // $scope.endpoints = endpoints;
                    // $scope.providers = providers;
                }, function errorCallback(result) {
                    // console.log("Couldn't load graph data");
                    var data = graphData();
                    $scope.nodes = data.nodes;
                    $scope.links = data.links;
                });
            }, 3000);

            $scope.$on('$destroy', function () { $interval.cancel($scope.graphDataInterval); });


            VisualizationService.getStructureData().then(function successCallback(result) {

                var data = structureData();
                $scope.ancestors_struct = data.ancestors_struct;
                $scope.children_struct = data.children_struct;
                $scope.labels = data.labels;
                $scope.serviceSelectors = data.serviceSelectors;

            }, function errorCallback(result) {
                // console.log("Couldn't load structure data");
                var data = structureData();
                $scope.ancestors_struct = data.ancestors_struct;
                $scope.children_struct = data.children_struct;
                $scope.labels = data.labels;
                $scope.serviceSelectors = data.serviceSelectors;
            });
        }]);

/*angular.module('contiv.visualization')
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
    }]);*/











