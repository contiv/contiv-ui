/**
 * Created by hardik gandhi on 6/24/16.
 */

angular.module("contiv.networkpolicies")
    .directive("ctvBandwidth", function () {
        return {
            restrict: 'E',
            scope: {
                bandwidthPolicy:'=',
                type:"@"
            },

            link:function(scope) {

                if (scope.bandwidthPolicy.bandwidth != '') {
                    var bandwidthArray = scope.bandwidthPolicy.bandwidth.split(' ');
                 
                    scope.bandwidthPolicy.bandwidthNumber = bandwidthArray[0];
                    scope.bandwidthPolicy.bandwidthUnit = bandwidthArray[1];
                 }
                
                if(scope.type == "create"){
                    scope.bandwidthPolicy.mode = 'create';
                } else if (scope.type == "edit"){
                    scope.bandwidthPolicy.mode = 'edit';
                }
            },

            templateUrl: 'network_policies/bandwidthinput.html'
        }
    });
