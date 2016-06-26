angular.module("contiv.directives")
    .directive("ctvAnsibleenvironment", function () {
        return {
            restrict: 'EA',
            templateUrl: 'components/directives/ansibleenvironment.html'
        };
    });