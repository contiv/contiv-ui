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
        '$state', '$stateParams', 'GlobalsettingsModel', 'CRUDHelperService', 'ExtravarsService',
        function ($state, $stateParams, GlobalsettingsModel, CRUDHelperService, ExtravarsService) {
            var nodeCommissionCtrl = this;

            function returnToMenu() {
                $state.go('contiv.menu.globalsettings.settings');
            }

            function updateClusterSettings() {
                if (nodeCommissionCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(nodeCommissionCtrl);
                    CRUDHelperService.startLoader(nodeCommissionCtrl);
                    nodeCommissionCtrl.nodeOpsObj.nodes = [$stateParams.key];
                    ExtravarsService.cleanupExtraVars(nodeCommissionCtrl);
                    ExtravarsService.createExtraVars(nodeCommissionCtrl);
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

            ExtravarsService.setSettings(nodeCommissionCtrl);

            nodeCommissionCtrl.updateClusterSettings = updateClusterSettings;
            nodeCommissionCtrl.returnToMenu = returnToMenu;

            CRUDHelperService.stopLoader(nodeCommissionCtrl);
            CRUDHelperService.hideServerError(nodeCommissionCtrl);
        }]);
