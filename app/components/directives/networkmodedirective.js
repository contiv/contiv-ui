angular.module("contiv.directives")
    .directive("ctvNetworkmode", function () {
        return {
            restrict: 'EA',
            templateUrl: 'components/directives/networkmode.html',
            scope: {
                ctrl: "="
            }
        };
    });