angular.module("contiv.directives")
    .directive("ctvScheduler", function () {
        return {
            restrict: 'E',
            templateUrl: 'components/directives/scheduler.html',
            scope: {
                extravars: "="
            }
        };
    });