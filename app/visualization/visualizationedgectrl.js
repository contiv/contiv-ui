

angular.module('contiv.visualization')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.visualization.edge', {
                url: '/edge/{sourceName, targetName, sourceList, targetList, sourceType, targetType}',
                params: {
                    sourceName: null,
                    targetName: null,
                    sourceList: null,
                    targetList: null,
                    sourceType: null,
                    targetType: null
                },
                controller: 'VisualizationEdgeCtrl as visualizationedgeCtrl',
                templateUrl: 'visualization/visualizationedge.html'
            })
        ;
    }])
    .controller('VisualizationEdgeCtrl', ["$scope", "$http", '$stateParams', 'VisualizationService', '$interval',
        function($scope, $http, $stateParams, VisualizationService, $interval) {
            var sourceName = $stateParams.sourceName;
            var targetName = $stateParams.targetName;
            var sourceList = $stateParams.sourceList;
            var targetList = $stateParams.targetList;
            var sourceType = $stateParams.sourceType;
            var targetType = $stateParams.targetType;
            // console.log($stateParams);

            var d = new Date();
            var t = d.getSeconds();
            $scope.edgeDataInterval = 
                $interval(function() {
                    VisualizationService.getEdgeData(sourceList, targetList, sourceType, targetType, t.toString())
                        .then(function successCallback(result) {
                            //hardcoding for demo
                            // if (source == 1) {
                            //     source = "Passenger App Container -id:1"
                            // } else if (source == 7) {
                            //     source = "Passenger Db Container -id:7"
                            // }
                            // if (target == 1) {
                            //     target = "Passenger App Container -id:1"
                            // } else if (target == 7) {
                            //     target = "Passenger Db Container -id:7"
                            // }
                            // if (_.isEmpty(result.results[0])) {
                            //     return;
                            // }
                            var data = result.results[0].series[0].values[0][1];
                            $scope.sourceName = sourceName;
                            $scope.targetName = targetName;
                            $scope.edgeData = data;
                            $scope.edgeDataTime = t;
                        }, function errorCallback(result) {
                            console.log("couldn't load current link data");
                        });
                    }, 3000);

            //Destroying the interval function on route change
            $scope.$on('$destroy', function () { $interval.cancel($scope.edgeDataInterval); });

            // var dereg = $rootScope.$on('$locationChangeSuccess', function() {
            //     $interval.cancel($scope.interval);
            //     dereg();
            // });


            VisualizationService.getOldEdgeData(sourceList, targetList, sourceType, targetType)
                .then(function successCallback(result) {
                    // console.log(result);
                    // if (_.isEmpty(result.results[0])) {
                    //     return;
                    // }
                    var data = result.results[0].series[0].values;
                    var edgeData = [];
                    _.forEach(data, function(d) {
                        edgeData.push(d[1]);
                    })

                    $scope.sourceName = sourceName;
                    $scope.targetName = targetName;
                    $scope.sourceList = sourceList;
                    $scope.targetList = targetList;
                    $scope.oldEdgeData = edgeData;
                }, function errorCallback(result) {
                    console.log("couldn't load last minute of link data");
                });
    }]);




