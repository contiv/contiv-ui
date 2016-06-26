angular.module('contiv.globalsettings')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.globalsettings.settings.cluster', {
                url: '/cluster',
                controller: 'ClusterSettingCtrl as clusterSettingCtrl',
                templateUrl: 'global_settings/setting_cluster.html'
            })
        ;
    }])
    .controller('ClusterSettingCtrl', [
        '$state', '$stateParams', 'GlobalsettingsModel', 'CRUDHelperService', 'ExtravarsService',
        function ($state, $stateParams, GlobalsettingsModel, CRUDHelperService, ExtravarsService) {
            var clusterSettingCtrl = this;

            function returnToMenu() {
                $state.go('contiv.menu.globalsettings.settings');
            }

            function updateClusterSettings() {
                if (clusterSettingCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(clusterSettingCtrl);
                    CRUDHelperService.startLoader(clusterSettingCtrl);
                    clusterSettingCtrl.nodeOpsObj.nodes = [$stateParams.key];
                    ExtravarsService.cleanupExtraVars(clusterSettingCtrl);
                    ExtravarsService.createExtraVars(clusterSettingCtrl);
                    GlobalsettingsModel.update(clusterSettingCtrl.nodeOpsObj).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(clusterSettingCtrl);
                        returnToMenu();
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(clusterSettingCtrl);
                        CRUDHelperService.showServerError(clusterSettingCtrl, result);
                    });
                }
            }

            clusterSettingCtrl.nodeOpsObj = {};
            clusterSettingCtrl.extra_vars = {}; //TODO Intialize from global settings
            clusterSettingCtrl.ansibleVariables = [];
            clusterSettingCtrl.envVariables = [];

            ExtravarsService.setSettings(clusterSettingCtrl);

            clusterSettingCtrl.updateClusterSettings = updateClusterSettings;
            clusterSettingCtrl.returnToMenu = returnToMenu;

            CRUDHelperService.stopLoader(clusterSettingCtrl);
            CRUDHelperService.hideServerError(clusterSettingCtrl);
        }]);
