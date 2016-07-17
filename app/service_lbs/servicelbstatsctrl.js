/**
 * Created by cshampur on 7/17/16.
 */
angular.module('contiv.servicelbs')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.servicelbs.details.stats', {
                url: '/stats',
                controller: 'ServicelbStatsCtrl as servicelbStatsCtrl',
                templateUrl: 'service_lbs/servicelbstats.html'
            })
        ;
    }])
    .controller('ServicelnStatsCtrl',
        ['$state', '$stateParams', '$scope', '$interval', '$filter', 'ServicelbsModel', 'InspectService',
            function ($state, $stateParams, $scope, $interval, $filter, ServicelbsModel, InspectService) {

                var servicelbStatsCtrl = this;

                /* Gets the Network Operational state from the server */
                function getServicelbInspect(refresh){
                    ServicelbsModel.getInspectByKey($stateParams.key, ContivGlobals.SERVICELBS_INSPECT_ENDPOINT, refresh)
                        .then(function (result) {
                            servicelbStatsCtrl.servicelbInspectStats = result.Oper;
                            var endpoints = $filter('orderBy')(result.Oper.endpoints, 'name');
                            var containerDetails = InspectService.buildEndPoints(endpoints);
                            if(InspectService.checkContainerChanged(servicelbStatsCtrl.containerDetails,containerDetails)){
                                servicelbStatsCtrl.endpoints = endpoints;
                                servicelbStatsCtrl.containerDetails = containerDetails;
                            }
                        });
                }

                getServicelbInspect(false);

                var promise;
                //Don't do autorefresh if one is already in progress
                if (!angular.isDefined(promise)) {
                    promise = $interval(function () {
                        getServicelbInspect(true);
                    }, ContivGlobals.REFRESH_INTERVAL);
                }

                //stop polling when user moves away from the page
                $scope.$on('$destroy', function () {
                    $interval.cancel(promise);
                });
            }]);