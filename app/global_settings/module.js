angular.module('contiv.globalsettings', ['contiv.models', 'contiv.directives', 'contiv.utils'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.globalsettings', {
                url: '/global',
                abstract: true,
                template: '<div ui-view class="ui container"/>'
            })
            .state('contiv.menu.globalsettings.settings', {
                url: '/settings',
                templateUrl: 'global_settings/globalsmenu.html'
            })
            .state('contiv.menu.globalsettings.settings.logs', {
                url: '/logs',
                controller: '',
                templateUrl: ''
            })
            .state('contiv.menu.globalsettings.settings.auth', {
                url: '/auth',
                controller: '',
                templateUrl: ''
            })
            .state('contiv.menu.globalsettings.settings.license', {
                url: '/license',
                controller: '',
                templateUrl: ''
            })
            .state('contiv.menu.globalsettings.settings.networks', {
                url: '/networks',
                controller: '',
                templateUrl: ''
            })
            .state('contiv.menu.globalsettings.settings.policies', {
                url: '/policies',
                controller: '',
                templateUrl: ''
            })
    }]);