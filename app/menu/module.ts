/**
 * Created by vjain3 on 5/19/16.
 */
angular.module('contiv.menu', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu', {
                url: '/m',
                component: 'menu',
                params: {username: null}
            });
    }]);