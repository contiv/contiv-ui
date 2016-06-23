angular.module("contiv.directives")
    .directive("ctvControlinterface", function () {
        return {
            restrict: 'EA',
            templateUrl: 'components/directives/control_interface.html'
        };
    });