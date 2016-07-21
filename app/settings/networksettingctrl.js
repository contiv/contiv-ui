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
    .controller('NetworkSettingCtrl', ['CRUDHelperService', 'NetworkService', '$interval', '$scope',
        function (CRUDHelperService, NetworkService, $interval, $scope) {
            var networkSettingCtrl = this;
            networkSettingCtrl.vlanPattern = ContivGlobals.VLAN_REGEX;
            networkSettingCtrl.vxlanPattern = ContivGlobals.VXLAN_REGEX;

            function updateNetworkSettings() {
                if (networkSettingCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(networkSettingCtrl);
                    CRUDHelperService.startLoader(networkSettingCtrl);
                    NetworkService.updateSettings(networkSettingCtrl.setting).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(networkSettingCtrl);

                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(networkSettingCtrl);
                        CRUDHelperService.showServerError(networkSettingCtrl, result);
                    });
                }
            }

            function getNetworkSettings() {
                NetworkService.getSettings(ContivGlobals.NETWORK_SETTINGS_ENDPOINT).then(function successCallback(result) {
                    networkSettingCtrl.setting = result[0];
                }, function errorCallback(result) {
                });
            }
            getNetworkSettings();
            networkSettingCtrl.updateNetworkSettings = updateNetworkSettings;

            function getGlobalOperStatus(){
                NetworkService.getSettings(ContivGlobals.GLOBAL_OPERATIONAL_ENDPOINT).then(function(result){
                    var globOperStat = [];
                    var operState = result["Oper"];
                    for(var key in operState){
                        globOperStat.push({globProperty: key, globPropertyVal: operState[key]});
                    }
                    networkSettingCtrl.globalOperStat = globOperStat;
                });
            }

            getGlobalOperStatus();

            var promise;
            //Don't do autorefresh if one is already in progress
            if (!angular.isDefined(promise)) {
                promise = $interval(function () {
                    getGlobalOperStatus();
                }, ContivGlobals.REFRESH_INTERVAL);
            }

            //stop polling when user moves away from the page
            $scope.$on('$destroy', function () {
                $interval.cancel(promise);
            });

            CRUDHelperService.stopLoader(networkSettingCtrl);
            CRUDHelperService.hideServerError(networkSettingCtrl);
        }]);