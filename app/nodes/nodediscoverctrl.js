angular.module('contiv.nodes')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.nodes.discover', {
                url: '/discover',
                controller: 'NodeDiscoverCtrl as nodeCommissionCtrl',
                templateUrl: 'nodes/nodediscover.html'
            })
        ;
    }])
    .controller('NodeDiscoverCtrl', [
        '$state', '$stateParams', 'NodesModel', 'CRUDHelperService', 
        function ($state, $stateParams, NodesModel, CRUDHelperService) {
            var nodeCommissionCtrl = this;

            function returnToNodes() {
                $state.go('contiv.menu.nodes.list');
            }

            function cancelDiscoveringNode() {
                returnToNodes();
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

            function discover() {
                if (nodeCommissionCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(nodeCommissionCtrl);
                    CRUDHelperService.startLoader(nodeCommissionCtrl);
                    createIPAddrArray();
                    createExtraVars();
                    NodesModel.discover(nodeCommissionCtrl.nodeOpsObj).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(nodeCommissionCtrl);
                        returnToNodes();
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(nodeCommissionCtrl);
                        CRUDHelperService.showServerError(nodeCommissionCtrl, result);
                    });
                }
            }

            function createIPAddrArray() {
                nodeCommissionCtrl.nodeOpsObj.addrs = _.words(nodeCommissionCtrl.nodeIPAddr, /[^, ]+/g);
            }

            nodeCommissionCtrl.nodeOpsObj = {};
            nodeCommissionCtrl.extra_vars = {}; //TODO Intialize from global settings
            nodeCommissionCtrl.ansibleVariables = [];
            nodeCommissionCtrl.envVariables = [];
            nodeCommissionCtrl.nodeIPAddr = ''; //IP address of nodes to discover

            nodeCommissionCtrl.discover = discover;
            nodeCommissionCtrl.cancelDiscoveringNode = cancelDiscoveringNode;

            CRUDHelperService.stopLoader(nodeCommissionCtrl);
            CRUDHelperService.hideServerError(nodeCommissionCtrl);
        }]);
