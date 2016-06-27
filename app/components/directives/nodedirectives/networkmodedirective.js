angular.module("contiv.directives")
    .directive("ctvNetworkmode", function () { //$compile
        return {
            restrict: 'E',
            templateUrl: 'components/directives/nodedirectives/networkmode.html',
            // replace: true,
            scope: {
                extravars: "="
                // errorListId: "=",
                // form: "="
            }
            // link: function (scope, element, attrs) {
            //     // var validation_html = 
            //     //     '<!-- APIC settings validation, part of commissioning node -->\
            //     //     <li ng-show="scope.form.apicURL.$error.required">\
            //     //         Please enter URL for APIC\
            //     //     </li>\
            //     //     <li ng-show="scope.form.apicUserName.$error.required">\
            //     //         Please enter user name for APIC\
            //     //     </li>\
            //     //     <li ng-show="scope.form.apicPassword.$error.required">\
            //     //         Please enter password for APIC\
            //     //     </li>\
            //     //     <li ng-show="scope.form.apicLeafNodes.$error.required">\
            //     //         Please enter leaf nodes for APIC\
            //     //     </li>';
            //     // $(scope.errorListId).append($compile(validation_html)(scope));
            //     // scope.$apply();
            //     // element.append(validation_html);
            // }
        };
    });