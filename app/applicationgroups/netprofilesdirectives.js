/**
 * Created by hardik gandhi on 6/28/16.
 */

angular.module("contiv.applicationgroups")
    .directive("ctvNetprofiles", function() {
        return {
            restrict: 'E',
            scope: {
                type:"@",
                netprofile:'='
            },

            controller: ['$scope','NetprofilesModel', function ($scope,NetprofilesModel) {

                var netProfiles = [];
                /**
                 * Get profiles for the given tenant.
                 */
                function getNetprofiles() {
                    NetprofilesModel.get().then(function (result) {
                        $scope.netProfiles = _.filter(result, {
                            'tenantName': 'default'        //TODO: Remove hardcoded tenant.
                        });
                    });
                }
                getNetprofiles();
            }],

            
            templateUrl: 'applicationgroups/netprofiles.html'
        }
    });



