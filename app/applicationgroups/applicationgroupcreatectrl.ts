/**
 * Created by vjain3 on 3/11/16.
 */
/**
 * Created by vjain3 on 3/10/16.
 */
angular.module('contiv.applicationgroups')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.applicationgroups.create', {
                url: '/create',
                controller: 'ApplicationGroupCreateCtrl as applicationGroupCreateCtrl',
                templateUrl: 'applicationgroups/applicationgroupcreate.html'
            })
        ;
    }])
    .controller('ApplicationGroupCreateCtrl', [
        '$state',
        '$stateParams',
        'ApplicationGroupsModel',
        'NetworksModel',
        'CRUDHelperService',
        function ($state,
                  $stateParams,
                  ApplicationGroupsModel,
                  NetworksModel,
                  CRUDHelperService) {
            var applicationGroupCreateCtrl = this;
            applicationGroupCreateCtrl.networks = [];
            applicationGroupCreateCtrl.applicationGroup = {};
            applicationGroupCreateCtrl.selectedNetwork = {};
            applicationGroupCreateCtrl.mode = "edit";

            function returnToApplicationGroup() {
                $state.go('contiv.menu.applicationgroups.list');
            }

            function cancelCreating() {
                returnToApplicationGroup();
            }

            /**
             * Get networks for the given tenant.
             */
            function getNetworks() {
                NetworksModel.get().then(function (result) {
                    applicationGroupCreateCtrl.networks = _.filter(result, {
                        'tenantName': 'default'//TODO: Remove hardcoded tenant.
                    });
                });
            }

            function createApplicationGroup() {
                //form controller is injected by the html template
                //checking if all validations have passed
                if (applicationGroupCreateCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(applicationGroupCreateCtrl);
                    CRUDHelperService.startLoader(applicationGroupCreateCtrl);
                    applicationGroupCreateCtrl.applicationGroup.networkName =
                        applicationGroupCreateCtrl.selectedNetwork.networkName;

                    applicationGroupCreateCtrl.applicationGroup.key =
                        ApplicationGroupsModel.generateKey(applicationGroupCreateCtrl.applicationGroup);

                    /**
                     * applicationGroup consist of Group Name, Network Name, Isolation Policies, Bandwidth Policy
                     */
                    
                    ApplicationGroupsModel.create(applicationGroupCreateCtrl.applicationGroup).then(
                        function successCallback(result) {
                            CRUDHelperService.stopLoader(applicationGroupCreateCtrl);
                            returnToApplicationGroup();
                        }, function errorCallback(result) {
                            CRUDHelperService.stopLoader(applicationGroupCreateCtrl);
                            CRUDHelperService.showServerError(applicationGroupCreateCtrl, result);
                        });
                }
            }
            
            function resetForm() {
                CRUDHelperService.stopLoader(applicationGroupCreateCtrl);
                CRUDHelperService.hideServerError(applicationGroupCreateCtrl);
                applicationGroupCreateCtrl.applicationGroup = {
                    groupName: '',          // For Group Name
                    networkName: '',        // For Network Name
                    policies: [],           // For Isolation policies
                    netProfile: '',         // For Bandwidth policy Name
                    tenantName: 'default'//TODO: Remove hardcoded tenant.
                };
            }

            getNetworks();

            applicationGroupCreateCtrl.createApplicationGroup = createApplicationGroup;
            applicationGroupCreateCtrl.cancelCreating = cancelCreating;

            resetForm();
        }]);