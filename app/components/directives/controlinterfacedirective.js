angular.module("contiv.directives")
    .directive("ctvControlinterface", function () {
        return {
            restrict: 'EA',
            templateUrl: 'components/directives/controlinterface.html',
            scope: {
                ctrl: "="
            }
        };
    });