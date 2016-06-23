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
            })
        ;
    }])
    .controller('NodeCommissionCtrl', [
        '$state', '$stateParams', 'NodesModel', 'CRUDHelperService', 'SettingService',
        function ($state, $stateParams, NodesModel, CRUDHelperService, SettingService) {
            var nodeCommissionCtrl = this;

            function returnToNodeDetails() {
                $state.go('contiv.menu.nodes.details.info', {'key': $stateParams.key});
            }

            function cancelCommissioningNode() {
                returnToNodeDetails();
            }

            function createExtraVars() {
                //Add ansible variables to extra_vars
                nodeCommissionCtrl.ansibleVariables.forEach(function (item) {
                    nodeCommissionCtrl.extra_vars[item.name] = item.value
                });
                //Add environment variables to extra_vars
                var envVars = {};
                nodeCommissionCtrl.envVariables.forEach(function (item) {
                    envVars[item.name] = item.value;
                });
                nodeCommissionCtrl.extra_vars['env'] = envVars;
                nodeCommissionCtrl.nodeOpsObj.extra_vars = JSON.stringify(nodeCommissionCtrl.extra_vars);
            }

            function commission() {
                if (nodeCommissionCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(nodeCommissionCtrl);
                    CRUDHelperService.startLoader(nodeCommissionCtrl);
                    nodeCommissionCtrl.nodeOpsObj.nodes = [$stateParams.key];
                    SettingService.cleanupExtraVars();
                    createExtraVars();
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

            nodeCommissionCtrl.cancelCommissioningNode = cancelCommissioningNode;
            nodeCommissionCtrl.commission = commission;

            CRUDHelperService.stopLoader(nodeCommissionCtrl);
            CRUDHelperService.hideServerError(nodeCommissionCtrl);
        }]);
