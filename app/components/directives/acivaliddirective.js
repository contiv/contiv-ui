angular.module("contiv.directives")
    .directive("ctvAcivalid", function () {
        return {
            restrict: 'E',
            templateUrl: 'components/directives/acivalid.html',
            scope: {
                ctrl: "="
            }
        };
    });