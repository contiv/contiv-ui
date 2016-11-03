/**
 * Created by vjain3 on 5/19/16.
 */
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

/*
angular.module('contiv.menu')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu', {
                url: '/m',
                templateUrl: 'menu/menu.html',
                controller: 'MenuCtrl as menuCtrl',
                params: {username: null}
            })
        ;
    }])
    .controller('MenuCtrl', ['$state', '$stateParams', function ($state, $stateParams) {
        var menuCtrl = this;

        function logout() {
            $state.go('contiv.login');
        }

        menuCtrl.username = $stateParams.username;
        menuCtrl.logout = logout;

    }]);*/
@Component({
    selector: 'menu',
    templateUrl: 'menu/menu.html'
})
export class MenuComponent {
    username: string;
    constructor(activatedRoute: ActivatedRoute, private router: Router) {
        this.username = activatedRoute.snapshot.params['username'];
    }

    logout() {
        this.router.navigate(['/login']);
    }
}