angular.module('contiv.utils')
    .factory('NetworkService', ['$http', '$q', function ($http, $q) {

        function getSettings(ctrl) {
            var deferred = $q.defer();
            var url = ContivGlobals.NETWORK_SETTINGS_ENDPOINT;
            $http.get(url).then(function successCallback(result) {
                deferred.resolve(result.data);
                ctrl.setting = result.data[0];
                ctrl.key = ctrl.setting.name;
                ctrl.name = ctrl.setting.name;

            }, function errorCallback(result) {
                deferred.reject(result.data);
            });
            return deferred.promise;
        }

        function updateSettings(ctrl) {
            var url = ContivGlobals.NETWORK_SETTINGS_ENDPOINT + ctrl.key + '/';
            BaseCollection.call(this, $http, $q, url);
            var settingscollection = this;
            var deferred = settingscollection.$q.defer();
            settingscollection.$http.post(url, ctrl.setting)
                .then(function successCallback(response) {
                    //Server doesn't return any json in response
                    deferred.resolve();
                }, function errorCallback(response) {
                    deferred.reject(response);
                });
            return deferred.promise;
        };

        return {
            getSettings: getSettings,
            updateSettings: updateSettings
        }
    }]);