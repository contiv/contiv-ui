/**
 * Created by hardik gandhi on 6/28/16.
 */

angular.module("contiv.applicationgroups")
    .directive("ctvNetprofiles", function() {
        return {
            restrict: 'E',
            scope: {
                type:"@",
                applicationGroup:'='
            },
            link:function(scope){},
            
            templateUrl: 'applicationgroups/netprofiles.html'
        }
    });



