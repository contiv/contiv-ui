angular.module("contiv.directives")
    .directive("ctvScheduler", function () {
        return {
            restrict: 'EA',
            templateUrl: 'components/directives/scheduler.html',
            scope: {
                ctrl: "="
            }
        };
    });