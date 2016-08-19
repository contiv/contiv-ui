

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
            $scope.graphDataInterval = $interval(function() {
                VisualizationService.getGraphData().then(function successCallback(result) {
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
                                    ancestors: null,
                                };
                                nodes.push(node);
                                nodeIds.push(endpoint);
                            }
                            if (_.includes(nodeIds, provider) == false) {
                                node = {
                                    name: provider,
                                    id: provider,
                                    parent: null,
                                    ancestors: null,
                                };
                                nodes.push(node);
                                nodeIds.push(provider);
                            }
                            //creating links
                            var linkOut = {
                                source: endpoint,
                                target: provider,
                                weight: series.values[0][2]
                            }
                            links.push(linkOut);
                            var linkIn = {
                                source: provider,
                                target: endpoint,
                                weight: series.values[0][1]
                            }
                            links.push(linkIn);
                        })
                        $scope.nodes = nodes;
                        $scope.links = links;
                    }, function errorCallback(result) {
                        console.log("Couldn't load graph data");
                    });
                }, 3000);

            $scope.$on('$destroy', function () { $interval.cancel($scope.graphDataInterval); });

                       
            VisualizationService.getStructureData().then(function successCallback(result) {
                    $scope.ancestors_struct = result.ancestors_struct;
                    $scope.children_struct = result.children_struct;
                    $scope.labels = result.labels;
                    $scope.serviceSelectors = result.serviceSelectors;
                }, function errorCallback(result) {
                    console.log("Couldn't load structure data");
                });
    }]);











