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
            })
        ;
    }])
    .controller('NodeListCtrl', ['$scope', '$interval', '$filter', 'NodesModel', 'CRUDHelperService', 'NodeService',
        function ($scope, $interval, $filter, NodesModel, CRUDHelperService, NodeService) {
        var nodeListCtrl = this;

        function getNodes(reload) {
            NodesModel.get(reload)
                .then(function successCallback(result) {
                    CRUDHelperService.stopLoader(nodeListCtrl);
                    nodeListCtrl.nodes = $filter('orderBy')(result, 'key');
                }, function errorCallback(result) {
                    CRUDHelperService.stopLoader(nodeListCtrl);
                });
        }

        function getLogInfo(reload) {
            NodesModel.get(reload).then(function (result) {
                getActiveLogs();
                getLastLogs();
            })
        }

        function getActiveLogs() {
            NodeService.getActiveLogs(nodeListCtrl.nodes).then(function successCallback(result) {
                nodeListCtrl.activeLogs = result;
            }, function errorCallback(result) {
            });
        }

        function getLastLogs() {
            NodeService.getLastLogs(nodeListCtrl.nodes).then(function successCallback(result) {
                nodeListCtrl.lastLogs = result;
            }, function errorCallback(result) {
            });
        }

        nodeListCtrl.getActiveLogs = getActiveLogs;
        nodeListCtrl.getLastLogs = getLastLogs;

        //Load from cache for quick display initially
        getNodes(false);
        getLogInfo(false);

        var promise;
        //Don't do auto-refresh if one is already in progress
        if (!angular.isDefined(promise)) {
            promise = $interval(function () {
                getNodes(true);
                getLogInfo(true);
            }, ContivGlobals.REFRESH_INTERVAL);
        }
        //stop polling when user moves away from the page
        $scope.$on('$destroy', function () {
            $interval.cancel(promise);
        });
    }]);