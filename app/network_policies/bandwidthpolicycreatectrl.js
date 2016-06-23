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
    .controller('BandwidthPolicyCreateCtrl', ['$state', 'BandwidthModel', 'CRUDHelperService',
        function ($state, BandwidthModel, CRUDHelperService) {
            var bandwidthPolicyCreateCtrl = this;
            

            function returnToPolicies() {
                $state.go('contiv.menu.networkpolicies.bandwidth.list');
            }

            function cancelCreating() {
                returnToPolicies();
            }

            function createPolicy() {
                if (bandwidthPolicyCreateCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(bandwidthPolicyCreateCtrl);
                    CRUDHelperService.startLoader(bandwidthPolicyCreateCtrl);
                    
                    
                    bandwidthPolicyCreateCtrl.newPolicy.key =
                        BandwidthModel.generateKey(bandwidthPolicyCreateCtrl.newPolicy);

                    bandwidthPolicyCreateCtrl.newPolicy.bandwidth = bandwidthPolicyCreateCtrl.bandwidthNumber + " "+ bandwidthPolicyCreateCtrl.bandwidthUnit;
                    
                    BandwidthModel.create(bandwidthPolicyCreateCtrl.newPolicy).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(bandwidthPolicyCreateCtrl);
                        returnToPolicies();
                    }, function errorCallback(result) {
                        console.log("Coming here:"+result);
                        CRUDHelperService.stopLoader(bandwidthPolicyCreateCtrl);
                        CRUDHelperService.showServerError(bandwidthPolicyCreateCtrl, result);
                    });
                }
            }

            function resetForm() {
                CRUDHelperService.stopLoader(bandwidthPolicyCreateCtrl);
                CRUDHelperService.hideServerError(bandwidthPolicyCreateCtrl);
                bandwidthPolicyCreateCtrl.newPolicy = {
                    profileName: '',
                    tenantName: 'default', //TODO: Remove hardcoded tenant.
                    bandwidth: '',
                    DSCP: ''
                };
            }

            bandwidthPolicyCreateCtrl.createPolicy = createPolicy;
            bandwidthPolicyCreateCtrl.cancelCreating = cancelCreating;

            resetForm();

            
        }]);


