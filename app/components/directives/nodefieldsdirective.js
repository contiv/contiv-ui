angular.module("contiv.directives")
    .directive("ctvNodefields", function () {
        return {
            restrict: 'EA',
            templateUrl: 'components/directives/nodefields.html'
        };
    });