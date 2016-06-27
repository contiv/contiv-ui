angular.module("contiv.directives")
    .directive("ctvAcivalid", function () {
        return {
            restrict: 'E',
            templateUrl: 'components/directives/nodedirectives/acivalid.html',
            scope: {
                ctrl: "=",
                errorListId: "=",
                form: "="
            }
        };
    });