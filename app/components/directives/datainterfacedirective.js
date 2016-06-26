angular.module("contiv.directives")
    .directive("ctvDatainterface", function () {
        return {
            restrict: 'EA',
            templateUrl: 'components/directives/datainterface.html',
            scope: {
                ctrl: "="
            }
        };
    });