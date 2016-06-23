angular.module('contiv.models')
    .factory('GlobalsettingsModel', ['$http', '$q', function ($http, $q) {
        var globalsettingsmodel = new SettingsCollection($http, $q);
        return globalsettingsmodel;
    }]);

function SettingsCollection($http, $q) {
    BaseCollection.call(this, $http, $q, ContivGlobals.GLOBAL_GET_ENDPOINT);
}

SettingsCollection.prototype = Object.create(BaseCollection.prototype);

SettingsCollection.prototype.update = function (nodeOpsObj) {
    var settingscollection = this;
    var deferred = settingscollection.$q.defer();
    var url = ContivGlobals.GLOBAL_SET_ENDPOINT;
    settingscollection.$http.post(url, nodeOpsObj, {
            'headers': {
                'Content-Type': 'application/json'
            }
        })
        .then(function successCallback(response) {
            //Server doesn't return any json in response
            deferred.resolve();
        }, function errorCallback(response) {
            deferred.reject(response);
        });
    return deferred.promise;
};