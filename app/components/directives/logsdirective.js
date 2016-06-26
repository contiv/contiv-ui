angular.module("contiv.directives")
    .directive("ctvLogs", function () {
        return {
            restrict: 'EA',
            templateUrl: 'components/directives/logs.html',
            scope: {
                log: "=",
                title: "@",
                modalid: "@"
            }
        };
    });