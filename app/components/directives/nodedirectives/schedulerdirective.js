angular.module("contiv.directives")
    .directive("ctvScheduler", function () {
        return {
            restrict: 'E',
            templateUrl: 'components/directives/nodedirectives/scheduler.html',
            scope: {
                extravars: "="
            }
        };
    });