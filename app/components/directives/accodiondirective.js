/**
 * Created by cshampur on 7/1/16.
 */
angular.module("contiv.directives")
    .directive("ctvAccordion", function () {
        return {
            restrict: 'E',
            scope: {
                items: '=',
                title: '='
            },
            link:function(scope, element){
                if(typeof element.find('.ui.accordion').accordion == 'function')
                    element.find('.ui.accordion').accordion();
                if(scope.title.ipAddress != undefined)
                    if(typeof  scope.title.ipAddress.filter == 'function')
                        scope.title.ipAddress = scope.title.ipAddress.filter(function(v){return v.length > 0}).join();
            },
            templateUrl: 'components/directives/accordion.html'
        }
    });