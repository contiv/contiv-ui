/**
 * Created by hardik gandhi on 6/15/16.
 */

angular.module('contiv.models')
    .factory('BandwidthModel', ['$http', '$q', function ($http, $q) {
        var bandwidthmodel = new Collection($http, $q, ContivGlobals.BANDWIDTH_ENDPOINT);

        /**
         * Generate policy key to save policy on server
         * @param policy
         * @returns {string}
         */
        bandwidthmodel.generateKey = function (policy) {
            return policy.tenantName + ':' + policy.profileName;
        };

        return bandwidthmodel;
    }]);
