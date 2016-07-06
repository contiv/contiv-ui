/*
/**
 * Created by hardik gandhi on 6/14/16.
 */

angular.module('contiv.networkpolicies')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.networkpolicies.bandwidth.create', {
                url: '/create',
                controller: 'BandwidthPolicyCreateCtrl as bandwidthPolicyCreateCtrl',
                templateUrl: 'network_policies/bandwidthpolicycreate.html'
            })
        ;
    }])
    .controller('BandwidthPolicyCreateCtrl', ['$state', 'PoliciesModel', 'CRUDHelperService',
        function ($state, PoliciesModel, CRUDHelperService) {
            var bandwidthPolicyCreateCtrl = this;

            function returnToPolicies() {
                $state.go('contiv.menu.networkpolicies.bandwidth.list');
            }

            function cancelCreating() {
                returnToPolicies();
            }

           /* function createPolicy() {
                if (bandwidthPolicyCreateCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(bandwidthPolicyCreateCtrl);
                    CRUDHelperService.startLoader(bandwidthPolicyCreateCtrl);
                    bandwidthPolicyCreateCtrl.newPolicy.key =
                        PoliciesModel.generateKey(bandwidthPolicyCreateCtrl.newPolicy);
                    PoliciesModel.create(bandwidthPolicyCreateCtrl.newPolicy).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(bandwidthPolicyCreateCtrl);
                        returnToPolicies();
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(bandwidthPolicyCreateCtrl);
                        CRUDHelperService.showServerError(bandwidthPolicyCreateCtrl, result);
                    });
                }
            }

            function resetForm() {
                CRUDHelperService.stopLoader(bandwidthPolicyCreateCtrl);
                CRUDHelperService.hideServerError(bandwidthPolicyCreateCtrl);
                bandwidthPolicyCreateCtrl.newPolicy = {
                    policyName: '',
                    //tenantName: 'default'//TODO: Remove hardcoded tenant.
                    bandwidth: '',
                    DSCP: ''
                };
            }*/

            //bandwidthPolicyCreateCtrl.createPolicy = createPolicy;
            bandwidthPolicyCreateCtrl.cancelCreating = cancelCreating;

            //resetForm();

            
        }]);


