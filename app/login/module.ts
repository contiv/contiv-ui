/**
 * Created by vjain3 on 5/19/16.
 */
angular.module('contiv.login', ['contiv.utils'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.login', {
                url: '/',
                component: 'login'
            })
    }]);