angular.module('contiv.nodes')
    .factory('NodeService', ['$http', '$q', function ($http, $q) {
        function getActiveLogs(node) {
            var deferred = $q.defer();
            var url = ContivGlobals.ACTIVE_JOB_ENDPOINT;
            $http.get(url).then(function successCallback(result) {
                deferred.resolve(result.data);
            }, function errorCallback(result) {
                deferred.reject(result.data);
            });
            return deferred.promise;
        }

        function getLastLogs(node) {
            var deferred = $q.defer();
            var url = ContivGlobals.LAST_JOB_ENDPOINT;
            $http.get(url).then(function successCallback(result) {
                deferred.resolve(result.data);
            }, function errorCallback(result) {
                deferred.reject(result.data);
            });
            return deferred.promise;
        }

        return {
            getActiveLogs: getActiveLogs,
            getLastLogs: getLastLogs
        }
    }]);