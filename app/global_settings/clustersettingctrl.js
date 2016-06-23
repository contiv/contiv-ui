angular.module('contiv.globalsettings')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.globalsettings.settings.cluster', {
                url: '/cluster',
                controller: 'ClusterSettingCtrl as nodeCommissionCtrl',
                templateUrl: 'global_settings/setting_cluster.html'
            })
        ;
    }])
    .controller('ClusterSettingCtrl', [
        '$state', '$stateParams', 'GlobalsettingsModel', 'CRUDHelperService', 'SettingService',
        function ($state, $stateParams, GlobalsettingsModel, CRUDHelperService, SettingService) {
            var nodeCommissionCtrl = this;

            function returnToMenu() {
                $state.go('contiv.menu.globalsettings.settings');
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

            function updateClusterSettings() {
                if (nodeCommissionCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(nodeCommissionCtrl);
                    CRUDHelperService.startLoader(nodeCommissionCtrl);
                    nodeCommissionCtrl.nodeOpsObj.nodes = [$stateParams.key];
                    SettingService.cleanupExtraVars();
                    createExtraVars();
                    GlobalsettingsModel.update(nodeCommissionCtrl.nodeOpsObj).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(nodeCommissionCtrl);
                        returnToMenu();
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

            nodeCommissionCtrl.updateClusterSettings = updateClusterSettings;
            nodeCommissionCtrl.returnToMenu = returnToMenu;

            CRUDHelperService.stopLoader(nodeCommissionCtrl);
            CRUDHelperService.hideServerError(nodeCommissionCtrl);
        }]);
