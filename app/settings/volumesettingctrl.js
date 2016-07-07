angular.module('contiv.settings')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.settings.details.volumes', {
                url: '/volumes',
                controller: 'VolumeSettingCtrl as volumeSettingCtrl',
                templateUrl: '/settings/volumesetting.html'
            })
        ;
    }])
    .controller('VolumeSettingCtrl', ['CRUDHelperService', 'VolumesettingService',
        function (CRUDHelperService, VolumesettingService) {
            var volumeSettingCtrl = this;

            function updateVolumeSettings() {
                if (volumeSettingCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(volumeSettingCtrl);
                    CRUDHelperService.startLoader(volumeSettingCtrl);
                    VolumesettingService.updateSettings(volumeSettingCtrl.setting).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(volumeSettingCtrl);

                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(volumeSettingCtrl);
                        CRUDHelperService.showServerError(volumeSettingCtrl, result);
                    });
                }
            }

            function getVolumeSettings() {
                VolumesettingService.getSettings().then(function successCallback(result) {
                    volumeSettingCtrl.setting = result;
                }, function errorCallback(result) {
                });
            }
            getVolumeSettings();
            volumeSettingCtrl.updateVolumeSettings = updateVolumeSettings;

            CRUDHelperService.stopLoader(volumeSettingCtrl);
            CRUDHelperService.hideServerError(volumeSettingCtrl);
        }]);