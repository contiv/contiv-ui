angular.module('contiv.settings')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.settings.details.networks', {
                url: '/networks',
                controller: 'NetworkSettingCtrl as networkSettingCtrl',
                templateUrl: 'settings/networksettings.html'
            })
        ;
    }])
    .controller('NetworkSettingCtrl', ['CRUDHelperService', 'NetworkService',
        function (CRUDHelperService, NetworkService) {
            var networkSettingCtrl = this;

            function updateNetworkSettings() {
                if (networkSettingCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(networkSettingCtrl);
                    CRUDHelperService.startLoader(networkSettingCtrl);
                    NetworkService.updateSettings(networkSettingCtrl).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(networkSettingCtrl);
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(networkSettingCtrl);
                        CRUDHelperService.showServerError(networkSettingCtrl, result);
                    });
                }
            }
            networkSettingCtrl.setting = {};
            NetworkService.getSettings(networkSettingCtrl);
            networkSettingCtrl.updateNetworkSettings = updateNetworkSettings;

            CRUDHelperService.stopLoader(networkSettingCtrl);
            CRUDHelperService.hideServerError(networkSettingCtrl);
        }]);