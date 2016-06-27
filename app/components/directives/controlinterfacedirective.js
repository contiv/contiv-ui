angular.module("contiv.directives")
    .directive("ctvControlinterface", function () {
        return {
            restrict: 'E',
            templateUrl: 'components/directives/controlinterface.html',
            scope: {
                ctrl: "="
            }
        };
    });