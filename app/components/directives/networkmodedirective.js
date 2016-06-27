angular.module("contiv.directives")
    .directive("ctvNetworkmode", function () {
        return {
            restrict: 'E',
            templateUrl: 'components/directives/networkmode.html',
            scope: {
                extravars: "="
            }
        };
    });