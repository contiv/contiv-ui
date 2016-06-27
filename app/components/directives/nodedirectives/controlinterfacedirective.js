angular.module("contiv.directives")
    .directive("ctvControlinterface", function () {
        return {
            restrict: 'E',
            templateUrl: 'components/directives/nodedirectives/controlinterface.html',
            scope: {
                extravars: "="
            }
        };
    });