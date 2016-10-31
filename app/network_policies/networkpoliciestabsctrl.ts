/**
 * Created by vjain3 on 3/9/16.
 */
import { Component, Inject } from '@angular/core';
import { StateService } from "angular-ui-router/commonjs/ng1";

/*
angular.module('contiv.networkpolicies')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.networkpolicies.list', {
                url: '/list',
                abstract: true,
                controller: 'NetworkPoliciesTabsCtrl as networkPoliciesTabsCtrl',
                templateUrl: 'network_policies/networkpoliciestabs.html'
            })
            .state('contiv.menu.networkpolicies.list.redirection', {
                url: '/redirection',
                template: ''
            })
        ;
    }])
    .controller('NetworkPoliciesTabsCtrl', ['$state', function ($state) {
        var networkPoliciesTabsCtrl = this;

        function createNetworkPolicy() {
            if ($state.$current.includes['contiv.menu.networkpolicies.list.isolation']) {
                $state.go('contiv.menu.networkpolicies.isolation.create');
            }
            if ($state.$current.includes['contiv.menu.networkpolicies.list.bandwidth']) {
                $state.go('contiv.menu.networkpolicies.bandwidth.create');
            }
        }

        networkPoliciesTabsCtrl.createNetworkPolicy = createNetworkPolicy;
    }]);*/

enum PolicyTab {
    isolation,
    bandwidth
}

@Component({
    selector: 'networkpoliciestabs',
    templateUrl: 'network_policies/networkpoliciestabs.html'
})
export class NetworkPoliciesTabsComponent {
    isolationPolicySelected:boolean = true;
    bandwidthPolicySelected:boolean = false;
    policyTab = PolicyTab;


    constructor(@Inject('$state') private $state:StateService) {
    }

    createNetworkPolicy() {
        if (this.$state.$current.includes['contiv.menu.networkpolicies.list.isolation']) {
            this.$state.go('contiv.menu.networkpolicies.isolation.create');
        }
        if (this.$state.$current.includes['contiv.menu.networkpolicies.list.bandwidth']) {
            this.$state.go('contiv.menu.networkpolicies.bandwidth.create');
        }
    }

    selectPolicyTab(tab:PolicyTab) {
        switch (tab) {
            case PolicyTab.isolation:
                this.isolationPolicySelected = true;
                this.bandwidthPolicySelected = false;
                break;
            case PolicyTab.bandwidth:
                this.isolationPolicySelected = false;
                this.bandwidthPolicySelected = true;
                break;
            default:
                this.isolationPolicySelected = true;
                this.bandwidthPolicySelected = false;
                break;
        }
    }
}