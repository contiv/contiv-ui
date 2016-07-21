angular.module('contiv.utils')
    .factory('NetworkService', ['$http', '$q', function ($http, $q) {

        function getSettings(url) {
            var deferred = $q.defer();
            $http.get(url).then(function successCallback(result) {
                deferred.resolve(result.data);
            }, function errorCallback(result) {
                deferred.reject(result.data);
            });
            return deferred.promise;
        }

        function updateSettings(setting) {
            return $http.post(ContivGlobals.NETWORK_SETTINGS_ENDPOINT 
                + 'global/', setting);
        };

        return {
            getSettings: getSettings,
            updateSettings: updateSettings
        }
    }]);