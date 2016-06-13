angular.module("contiv.directives", []);
/**
 * Created by vjain3 on 3/14/16.
 */
angular.module('contiv.models', []);
var ContivGlobals = (function () {

    return {
        //REST endpoints for 
        'NETWORKS_ENDPOINT': '/netmaster/api/v1/networks/',
        'POLICIES_ENDPOINT': '/netmaster/api/v1/policys/',
        'RULES_ENDPOINT': '/netmaster/api/v1/rules/',
        'APPLICATIONGROUPS_ENDPOINT': '/netmaster/api/v1/endpointGroups/',
        'SERVICELBS_ENDPOINT': '/netmaster/api/v1/serviceLBs/',
        'ORGANIZATIONS_ENDPOINT':'/netmaster/api/v1/tenants/',

        //REST endpoints for VOLMASTER
        'VOLUMES_ENDPOINT': '/volmaster/volumes/',
        'VOLUMES_CREATE_ENDPOINT': '/volmaster/volumes/create/',
        'VOLUMES_DELETE_ENDPOINT': '/volmaster/volumes/remove/',
        'VOLUMES_COPYSNAPSHOTS_ENDPOINT': '/volmaster/volumes/copy/',
        'VOLUMES_USES_ENDPOINT': '/volmaster/uses/mounts/',
        'VOLUMES_SNAPSHOTS_ENDPOINT': '/volmaster/snapshots/',

        'STORAGEPOLICIES_ENDPOINT': '/volmaster/policies/',


        //REST endpoints for CLUSTER
        'NODES_LIST_ENDPOINT': '/info/nodes',
        'NODES_DISCOVER_ENDPOINT': '/discover/nodes',
        'NODES_COMMISSION_ENDPOINT': '/commission/nodes',
        'NODES_DECOMMISSION_ENDPOINT': '/decommission/nodes',
        'NODES_MAINTENANCE_ENDPOINT': '/maintenance/nodes',

        //Refresh interval in milliseconds
        'REFRESH_INTERVAL': 5000,

        //RegEx for validation
        'CIDR_REGEX' : '^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\/([0-9]|[1-2][0-9]|3[0-2]))$'
    }
})();

/**
 * Created by vjain3 on 5/18/16.
 */
angular.module('contiv.utils', []);
/**
 * Created by vjain3 on 5/18/16.
 */
angular.module('contiv.applicationgroups', ['contiv.models', 'contiv.directives', 'contiv.utils'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.applicationgroups', {
                url: '/applicationgroups',
                abstract: true,
                template: '<div ui-view class="ui container"/>'
            })
    }]);

/**
 * Created by vjain3 on 5/18/16.
 */
angular.module('contiv.dashboard', ['contiv.models']);

/**
 * Created by vjain3 on 5/19/16.
 */
angular.module('contiv.login', ['contiv.utils']);
/**
 * Created by vjain3 on 5/19/16.
 */
angular.module('contiv.menu', []);
/**
 * Created by vjain3 on 5/18/16.
 */

angular.module('contiv.networkpolicies', ['contiv.models', 'contiv.directives', 'contiv.utils']);
/**
 * Created by vjain3 on 5/18/16.
 */
angular.module('contiv.networks', ['contiv.models', 'contiv.directives', 'contiv.utils'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('contiv.menu.networks', {
            url: '/networks',
            abstract: true,
            template: '<div ui-view class="ui container"/>'
        })
    }]);

/**
 * Created by vjain3 on 5/18/16.
 */
angular.module('contiv.nodes', ['contiv.models', 'contiv.directives', 'contiv.utils'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.nodes', {
                url: '/nodes',
                abstract: true,
                template: '<div ui-view class="ui container"/>'
            })
    }]);

angular.module('contiv.organizations', ['contiv.models', 'contiv.directives', 'contiv.utils'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('contiv.menu.organizations', {
            url: '/organizations',
            abstract: true,
            template: '<div ui-view class="ui container"/>'
        })
    }]);
/**
 * Created by vjain3 on 5/18/16.
 */
angular.module('contiv.servicelbs', ['contiv.models', 'contiv.directives', 'contiv.utils'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.servicelbs', {
                url: '/servicelbs',
                abstract: true,
                template: '<div ui-view class="ui container"/>'
            })
    }]);

/**
 * Created by vjain3 on 5/18/16.
 */
angular.module('contiv.storagepolicies', ['contiv.models', 'contiv.directives', 'contiv.utils'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.storagepolicies', {
                url: '/storagepolicies',
                abstract: true,
                template: '<div ui-view class="ui container"/>'
            })
    }]);
/**
 * Created by vjain3 on 5/18/16.
 */
angular.module('contiv.volumes', ['contiv.models', 'contiv.directives', 'contiv.utils'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.volumes', {
                url: '/volumes',
                abstract: true,
                template: '<div ui-view class="ui container"/>'
            })
    }]);

'use strict';


// Declare app level module which depends on views, and components
angular.module('contivApp', [
        'ui.router',
        'contiv.login',
        'contiv.menu',
        'contiv.dashboard',
        'contiv.applicationgroups',
        'contiv.networks',
        'contiv.networkpolicies',
        'contiv.storagepolicies',
        'contiv.servicelbs',
        'contiv.volumes',
        'contiv.nodes',
        'contiv.organizations'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        //abstract state serves as a PLACEHOLDER or NAMESPACE for application states
            .state('contiv', {
                url: '',
                abstract: true,
                template: '<div ui-view class="ui fluid container"/>'
            })
        ;

        $urlRouterProvider.otherwise('/');
    }]);

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
        'ApplicationGroupsModel',
        'NetworksModel',
        'PoliciesModel',
        'RulesModel',
        'ApplicationGroupService',
        'CRUDHelperService',
        function ($state,
                  ApplicationGroupsModel,
                  NetworksModel,
                  PoliciesModel,
                  RulesModel,
                  ApplicationGroupService,
                  CRUDHelperService) {
            var applicationGroupCreateCtrl = this;
            applicationGroupCreateCtrl.networks = [];
            applicationGroupCreateCtrl.isolationPolicies = [];
            applicationGroupCreateCtrl.applicationGroup = {};
            applicationGroupCreateCtrl.selectedNetwork = {};
            applicationGroupCreateCtrl.selectedPolicy = {};
            applicationGroupCreateCtrl.selectedPolicies = [];

            //To display incoming and outgoing rules for selected policies
            applicationGroupCreateCtrl.incomingRules = [];
            applicationGroupCreateCtrl.outgoingRules = [];

            applicationGroupCreateCtrl.isolationPoliciesVisible = false;

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

            /**
             * Get policies for the given tenant.
             */
            function getIsolationPolicies() {
                PoliciesModel.get().then(function (result) {
                    applicationGroupCreateCtrl.isolationPolicies = _.filter(result, {
                        'tenantName': 'default'//TODO: Remove hardcoded tenant.
                    });
                });
            }

            /**
             * Add policy to new application group
             */
            function addIsolationPolicy() {
                ApplicationGroupService.addIsolationPolicy(applicationGroupCreateCtrl);
            }

            /**
             * Remove policy from new application group
             */
            function removeIsolationPolicy(policyName) {
                ApplicationGroupService.removeIsolationPolicy(applicationGroupCreateCtrl, policyName);
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
                    groupName: '',
                    networkName: '',
                    policies: [],
                    tenantName: 'default'//TODO: Remove hardcoded tenant.
                };
            }

            getNetworks();
            getIsolationPolicies();

            applicationGroupCreateCtrl.createApplicationGroup = createApplicationGroup;
            applicationGroupCreateCtrl.cancelCreating = cancelCreating;
            applicationGroupCreateCtrl.addIsolationPolicy = addIsolationPolicy;
            applicationGroupCreateCtrl.removeIsolationPolicy = removeIsolationPolicy;

            resetForm();
        }]);
/**
 * Created by vjain3 on 3/15/16.
 */
angular.module('contiv.applicationgroups')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.applicationgroups.details', {
                url: '/details/:key',
                controller: 'ApplicationGroupDetailsCtrl as applicationGroupDetailsCtrl',
                templateUrl: 'applicationgroups/applicationgroupdetails.html'
            })
            .state('contiv.menu.applicationgroups.edit', {
                url: '/edit/:key',
                controller: 'ApplicationGroupDetailsCtrl as applicationGroupDetailsCtrl',
                templateUrl: 'applicationgroups/applicationgroupdetails.html'
            })
        ;
    }])
    .controller('ApplicationGroupDetailsCtrl', [
        '$state',
        '$stateParams',
        'ApplicationGroupsModel',
        'PoliciesModel',
        'RulesModel',
        'ApplicationGroupService',
        'CRUDHelperService',
        function ($state,
                  $stateParams,
                  ApplicationGroupsModel,
                  PoliciesModel,
                  RulesModel,
                  ApplicationGroupService,
                  CRUDHelperService) {
            var applicationGroupDetailsCtrl = this;
            applicationGroupDetailsCtrl.isolationPolicies = [];
            applicationGroupDetailsCtrl.applicationGroup = {};
            applicationGroupDetailsCtrl.selectedNetwork = {};
            applicationGroupDetailsCtrl.selectedPolicy = {};
            applicationGroupDetailsCtrl.selectedPolicies = [];

            //To display incoming and outgoing rules for selected policies
            applicationGroupDetailsCtrl.incomingRules = [];
            applicationGroupDetailsCtrl.outgoingRules = [];


            applicationGroupDetailsCtrl.isolationPoliciesVisible = false;

            /**
             * To show edit or details screen based on the route
             */
            function setMode() {
                if ($state.is('contiv.menu.applicationgroups.edit')) {
                    applicationGroupDetailsCtrl.mode = 'edit';
                } else {
                    applicationGroupDetailsCtrl.mode = 'details';
                }
            }

            function returnToApplicationGroup() {
                $state.go('contiv.menu.applicationgroups.list');
            }

            function returnToApplicationGroupDetails() {
                $state.go('contiv.menu.applicationgroups.details', {'key': applicationGroupDetailsCtrl.applicationGroup.key});
            }

            function cancelEditing() {
                returnToApplicationGroupDetails();
            }

            function getRules() {
                applicationGroupDetailsCtrl.applicationGroup.policies.forEach(function (policy) {
                    //To display rules of selected policies
                    RulesModel.getIncomingRules(policy, 'default')
                        .then(function (rules) {
                            Array.prototype.push.apply(applicationGroupDetailsCtrl.incomingRules, rules);
                        });
                    RulesModel.getOutgoingRules(policy, 'default')
                        .then(function (rules) {
                            Array.prototype.push.apply(applicationGroupDetailsCtrl.outgoingRules, rules);
                        });
                });

            }

            function deleteApplicationGroup() {
                CRUDHelperService.hideServerError(applicationGroupDetailsCtrl);
                CRUDHelperService.startLoader(applicationGroupDetailsCtrl);
                ApplicationGroupsModel.delete(applicationGroupDetailsCtrl.applicationGroup).then(
                    function successCallback(result) {
                        CRUDHelperService.stopLoader(applicationGroupDetailsCtrl);
                        returnToApplicationGroup();
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(applicationGroupDetailsCtrl);
                        CRUDHelperService.showServerError(applicationGroupDetailsCtrl, result);
                    });
            }

            /**
             * Get policies for the given tenant.
             */
            function getIsolationPolicies() {
                PoliciesModel.get().then(function (result) {
                    applicationGroupDetailsCtrl.isolationPolicies = _.filter(result, {
                        'tenantName': 'default'//TODO: Remove hardcoded tenant.
                    })
                });
            }

            /**
             * Add policy to application group
             */
            function addIsolationPolicy() {
                ApplicationGroupService.addIsolationPolicy(applicationGroupDetailsCtrl);
            }

            /**
             * Remove policy from application group
             */
            function removeIsolationPolicy(policyName) {
                ApplicationGroupService.removeIsolationPolicy(applicationGroupDetailsCtrl, policyName);
            }

            function saveApplicationGroup() {
                CRUDHelperService.hideServerError(applicationGroupDetailsCtrl);
                CRUDHelperService.startLoader(applicationGroupDetailsCtrl);
                ApplicationGroupsModel.save(applicationGroupDetailsCtrl.applicationGroup).then(function successCallback(result) {
                    CRUDHelperService.stopLoader(applicationGroupDetailsCtrl);
                    returnToApplicationGroupDetails();
                }, function errorCallback(result) {
                    CRUDHelperService.stopLoader(applicationGroupDetailsCtrl);
                    CRUDHelperService.showServerError(applicationGroupDetailsCtrl, result);
                });
            }

            CRUDHelperService.stopLoader(applicationGroupDetailsCtrl);
            CRUDHelperService.hideServerError(applicationGroupDetailsCtrl);

            ApplicationGroupsModel.getModelByKey($stateParams.key)
                .then(function (group) {
                    applicationGroupDetailsCtrl.applicationGroup = group;
                    //Application Groups might not have any policies associated with them so define an empty array
                    if (applicationGroupDetailsCtrl.applicationGroup.policies === undefined) {
                        applicationGroupDetailsCtrl.applicationGroup.policies = [];
                    }
                    getRules();
                });

            getIsolationPolicies();

            applicationGroupDetailsCtrl.saveApplicationGroup = saveApplicationGroup;
            applicationGroupDetailsCtrl.cancelEditing = cancelEditing;
            applicationGroupDetailsCtrl.addIsolationPolicy = addIsolationPolicy;
            applicationGroupDetailsCtrl.removeIsolationPolicy = removeIsolationPolicy;
            applicationGroupDetailsCtrl.deleteApplicationGroup = deleteApplicationGroup;

            setMode();

        }]);
/**
 * Created by vjain3 on 3/11/16.
 */
angular.module('contiv.applicationgroups')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.applicationgroups.list', {
                url: '/list',
                controller: 'ApplicationGroupListCtrl as applicationGroupListCtrl',
                templateUrl: 'applicationgroups/applicationgrouplist.html'
            })
        ;
    }])
    .controller('ApplicationGroupListCtrl',
        ['$scope', '$interval', '$filter', 'ApplicationGroupsModel', 'CRUDHelperService',
            function ($scope, $interval, $filter, ApplicationGroupsModel, CRUDHelperService) {
                var applicationGroupListCtrl = this;

                function getApplicationGroups(reload) {
                    ApplicationGroupsModel.get(reload)
                        .then(function successCallback(result) {
                            CRUDHelperService.stopLoader(applicationGroupListCtrl);
                            applicationGroupListCtrl.groups = $filter('orderBy')(result, 'groupName');
                        }, function errorCallback(result) {
                            CRUDHelperService.stopLoader(applicationGroupListCtrl);
                        });
                }

                //Load from cache for quick display initially
                getApplicationGroups(false);

                var promise;
                //Don't start auto-refresh if one is already in progress
                if (!angular.isDefined(promise)) {
                    promise = $interval(function () {
                        getApplicationGroups(true);
                    }, 5000);
                }
                //stop polling when user moves away from the page
                $scope.$on('$destroy', function () {
                    $interval.cancel(promise);
                });
            }]);

/**
 * Created by vjain3 on 3/16/16.
 */
angular.module('contiv.applicationgroups')
    .factory('ApplicationGroupService', ['RulesModel', function (RulesModel) {

        /**
         * Add policy to application group
         * @param applicationGroupCtrl Controller for application group edit or create operation
         */
        function addIsolationPolicy(applicationGroupCtrl) {
            if (_.find(applicationGroupCtrl.selectedPolicies, applicationGroupCtrl.selectedPolicy) === undefined ) {
                //To display selected policies
                applicationGroupCtrl.selectedPolicies.push(applicationGroupCtrl.selectedPolicy);

                //To display rules of selected policies
                RulesModel.getIncomingRules(applicationGroupCtrl.selectedPolicy.policyName, 'default')
                    .then(function (rules) {
                        Array.prototype.push.apply(applicationGroupCtrl.incomingRules, rules);
                    });
                RulesModel.getOutgoingRules(applicationGroupCtrl.selectedPolicy.policyName, 'default')
                    .then(function (rules) {
                        Array.prototype.push.apply(applicationGroupCtrl.outgoingRules, rules);
                    });

                //To be added to application group and saved to the server
                applicationGroupCtrl.applicationGroup.policies
                    .push(applicationGroupCtrl.selectedPolicy.policyName);
            }
        }

        /**
         * Remove policy from application group
         * @param applicationGroupCtrl Controller for application group edit or create operation
         */
        function removeIsolationPolicy(applicationGroupCtrl, policyName) {
            _.remove(applicationGroupCtrl.applicationGroup.policies, function (policy) {
                return policy == policyName;
            });
            _.remove(applicationGroupCtrl.incomingRules, function (rule) {
                return rule.policyName == policyName;
            });
            _.remove(applicationGroupCtrl.outgoingRules, function (rule) {
                return rule.policyName == policyName;
            });
        }

        return {
            addIsolationPolicy: addIsolationPolicy,
            removeIsolationPolicy: removeIsolationPolicy
        }

    }]);
/**
 * Created by vjain3 on 3/11/16.
 */
angular.module('contiv.dashboard')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.dashboard', {
                url: '/dashboard',
                controller: 'DashboardCtrl as dashboardCtrl',
                templateUrl: 'dashboard/dashboard.html'
            });
    }])
    .controller('DashboardCtrl',
        [
            '$scope',
            '$interval',
            'NodesModel',
            'NetworksModel',
            'VolumesModel',
            'ApplicationGroupsModel',
            'PoliciesModel',
            'StoragePoliciesModel',
            function ($scope,
                      $interval,
                      NodesModel,
                      NetworksModel,
                      VolumesModel,
                      ApplicationGroupsModel,
                      PoliciesModel,
                      StoragePoliciesModel) {
                var dashboardCtrl = this;

                function getDashboardInfo(reload) {
                    NodesModel.get(reload)
                        .then(function (result) {
                            dashboardCtrl.nodes = result.length;
                        });
                    NetworksModel.get(reload)
                        .then(function (result) {
                            dashboardCtrl.networks = result.length;
                        });
                    VolumesModel.get(reload)
                        .then(function (result) {
                            dashboardCtrl.volumes = result.length;
                        });
                    ApplicationGroupsModel.get(reload)
                        .then(function (result) {
                            dashboardCtrl.groups = result.length;
                        });
                    PoliciesModel.get(reload)
                        .then(function (result) {
                            dashboardCtrl.networkpolicies = result.length;
                        });
                    StoragePoliciesModel.get(reload)
                        .then(function (result) {
                            dashboardCtrl.storagepolicies = result.length;
                        });
                }

                //Will display 0 if there is error fetching data
                dashboardCtrl.nodes = 0;
                dashboardCtrl.networks = 0;
                dashboardCtrl.volumes = 0;
                dashboardCtrl.groups = 0;
                dashboardCtrl.networkpolicies = 0;
                dashboardCtrl.storagepolicies = 0;

                //Load from cache for quick display initially
                getDashboardInfo(false);

                var promise = $interval(function () {
                    getDashboardInfo(true);
                }, 5000);

                //stop polling when user moves away from the page
                $scope.$on('$destroy', function () {
                    $interval.cancel(promise);
                });
            }]);

/**
 * Created by vjain3 on 5/19/16.
 */
angular.module('contiv.login')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.login', {
                url: '/',
                templateUrl: 'login/login.html',
                controller: 'LoginCtrl as loginCtrl'
            })
        ;
    }])
    .controller('LoginCtrl', ['$state', 'CRUDHelperService',
        function ($state, CRUDHelperService) {
            var loginCtrl = this;

            function returnToDashboard() {
                $state.go('contiv.menu.dashboard', {username: loginCtrl.username});
            }

            function login() {
                returnToDashboard();
            }

            CRUDHelperService.stopLoader(loginCtrl);
            CRUDHelperService.hideServerError(loginCtrl);
            loginCtrl.login = login;

        }]);
/**
 * Created by vjain3 on 5/19/16.
 */
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

    }]);
/**
 * Created by vjain3 on 3/10/16.
 */
angular.module('contiv.networkpolicies')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.networkpolicies.isolation.create', {
                url: '/create',
                controller: 'IsolationPolicyCreateCtrl as isolationPolicyCreateCtrl',
                templateUrl: 'network_policies/isolationpolicycreate.html'
            })
        ;
    }])
    .controller('IsolationPolicyCreateCtrl', ['$state', 'PoliciesModel', 'CRUDHelperService',
        function ($state, PoliciesModel, CRUDHelperService) {
        var isolationPolicyCreateCtrl = this;

        function returnToPolicies() {
            $state.go('contiv.menu.networkpolicies.isolation.list');
        }

        function cancelCreating() {
            returnToPolicies();
        }

        function createPolicy() {
            if (isolationPolicyCreateCtrl.form.$valid) {
                CRUDHelperService.hideServerError(isolationPolicyCreateCtrl);
                CRUDHelperService.startLoader(isolationPolicyCreateCtrl);
                isolationPolicyCreateCtrl.newPolicy.key =
                    PoliciesModel.generateKey(isolationPolicyCreateCtrl.newPolicy);
                PoliciesModel.create(isolationPolicyCreateCtrl.newPolicy).then(function successCallback(result) {
                    CRUDHelperService.stopLoader(isolationPolicyCreateCtrl);
                    returnToPolicies();
                }, function errorCallback(result) {
                    CRUDHelperService.stopLoader(isolationPolicyCreateCtrl);
                    CRUDHelperService.showServerError(isolationPolicyCreateCtrl, result);
                });
            }
        }

        function resetForm() {
            CRUDHelperService.stopLoader(isolationPolicyCreateCtrl);
            CRUDHelperService.hideServerError(isolationPolicyCreateCtrl);
            isolationPolicyCreateCtrl.newPolicy = {
                policyName: '',
                tenantName: 'default'//TODO: Remove hardcoded tenant.
            };
        }

        isolationPolicyCreateCtrl.createPolicy = createPolicy;
        isolationPolicyCreateCtrl.cancelCreating = cancelCreating;

        resetForm();
    }]);

/**
 * Created by vjain3 on 3/8/16.
 */
angular.module('contiv.networkpolicies')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.networkpolicies.isolation.details', {
                url: '/details/:key',
                controller: 'IsolationPolicyDetailsCtrl as isolationPolicyDetailsCtrl',
                templateUrl: 'network_policies/isolationpolicydetails.html'
            });
    }])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.networkpolicies.isolation.edit', {
                url: '/edit/:key',
                controller: 'IsolationPolicyDetailsCtrl as isolationPolicyDetailsCtrl',
                templateUrl: 'network_policies/isolationpolicydetails.html'
            });
    }])
    .controller('IsolationPolicyDetailsCtrl', [
        '$state',
        '$stateParams',
        'PoliciesModel',
        'RulesModel',
        'NetworksModel',
        'ApplicationGroupsModel',
        'CRUDHelperService',
        function ($state, $stateParams, PoliciesModel, RulesModel, NetworksModel, ApplicationGroupsModel, CRUDHelperService) {
            var isolationPolicyDetailsCtrl = this;
            isolationPolicyDetailsCtrl.networks = [];
            isolationPolicyDetailsCtrl.applicationGroups = [];
            isolationPolicyDetailsCtrl.disableOutgoingNetworkSelection = false;
            isolationPolicyDetailsCtrl.disableIncomingNetworkSelection = false;
            isolationPolicyDetailsCtrl.disableOutgoingApplicationGroupSelection = false;
            isolationPolicyDetailsCtrl.disableIncomingApplicationGroupSelection = false;
            isolationPolicyDetailsCtrl.newIncomingSelectedApplicationGroup = '';
            isolationPolicyDetailsCtrl.newOutgoingSelectedApplicationGroup = '';

            function returnToPolicies() {
                $state.go('contiv.menu.networkpolicies.isolation.list');
            }

            function returnToPolicyDetails() {
                $state.go('contiv.menu.networkpolicies.isolation.details', {key: isolationPolicyDetailsCtrl.policy.key});
            }

            function cancelEditing() {
                returnToPolicyDetails();
            }

            /**
             * Go back to policy details after done editing
             */
            function doneEditing() {
                returnToPolicyDetails();
            }

            function deletePolicy() {
                CRUDHelperService.hideServerError(isolationPolicyDetailsCtrl);
                CRUDHelperService.startLoader(isolationPolicyDetailsCtrl);
                PoliciesModel.delete(isolationPolicyDetailsCtrl.policy).then(function successCallback(result) {
                    CRUDHelperService.stopLoader(isolationPolicyDetailsCtrl);
                    returnToPolicies();
                }, function errorCallback(result) {
                    CRUDHelperService.stopLoader(isolationPolicyDetailsCtrl);
                    CRUDHelperService.showServerError(isolationPolicyDetailsCtrl, result);
                });
            }

            /**
             * To show edit or details screen based on the route
             */
            function setMode() {
                if ($state.is('contiv.menu.networkpolicies.isolation.edit')) {
                    isolationPolicyDetailsCtrl.mode = 'edit';
                } else {
                    isolationPolicyDetailsCtrl.mode = 'details';
                }
            }

            function resetNewIncomingRule() {
                //Rule object to be created on server
                isolationPolicyDetailsCtrl.newIncomingRule = {
                    ruleId: '',
                    priority: 1,
                    action: 'allow',//to make it default selected option in UI
                    fromEndpointGroup: '',
                    fromNetwork: '',
                    fromIPAddress: '',
                    protocol: 'tcp',//to make it default selected option in UI
                    port: '',
                    direction: 'in',
                    tenantName: 'default',
                    policyName: isolationPolicyDetailsCtrl.policy.policyName
                };
                isolationPolicyDetailsCtrl.newIncomingSelectedApplicationGroup = '';
                isolationPolicyDetailsCtrl.disableIncomingNetworkSelection = false;
                isolationPolicyDetailsCtrl.disableIncomingApplicationGroupSelection = false;
            }

            function resetNewOutgoingRule() {
                //Rule object to be created on server
                isolationPolicyDetailsCtrl.newOutgoingRule = {
                    ruleId: '',
                    priority: 1,
                    action: 'allow',//to make it default selected option in UI
                    toEndpointGroup: '',
                    toNetwork: '',
                    toIPAddress: '',
                    protocol: 'tcp',//to make it default selected option in UI
                    port: '',
                    direction: 'out',
                    tenantName: 'default',
                    policyName: isolationPolicyDetailsCtrl.policy.policyName
                };
                isolationPolicyDetailsCtrl.newOutgoingSelectedApplicationGroup = '';
                isolationPolicyDetailsCtrl.disableOutgoingNetworkSelection = false;
                isolationPolicyDetailsCtrl.disableOutgoingApplicationGroupSelection = false;
            }

            /**
             * Get network names for the given tenant.
             */
            function getNetworks() {
                NetworksModel.get().then(function (result) {
                    //_.filter() returns a new array
                    isolationPolicyDetailsCtrl.networks = _.filter(result, {
                        'tenantName': 'default'//TODO: Remove hardcoded tenant.
                    });
                });
            }

            /**
             * Get application group names for the given tenant.
             */
            function getApplicationGroups() {
                ApplicationGroupsModel.get()
                    .then(function (result) {
                        //_.filter() returns a new array
                        isolationPolicyDetailsCtrl.applicationGroups = _.filter(result, {
                            'tenantName': 'default'//TODO: Remove hardcoded tenant.
                        });
                    });
            }

            /**
             * Event handler to disable network selection box once application group is selected while creating a new
             * rule.
             */
            function onChangeOutgoingApplicationGroupSelection() {
                if (isolationPolicyDetailsCtrl.newOutgoingSelectedApplicationGroup != null) {
                    //If application group has been selected
                    isolationPolicyDetailsCtrl.newOutgoingRule.toEndpointGroup =
                        isolationPolicyDetailsCtrl.newOutgoingSelectedApplicationGroup.groupName;
                    isolationPolicyDetailsCtrl.newOutgoingRule.toNetwork = '';
                    isolationPolicyDetailsCtrl.disableOutgoingNetworkSelection = true;
                } else {
                    //When 'none' is selected
                    isolationPolicyDetailsCtrl.newOutgoingRule.toEndpointGroup = '';
                    isolationPolicyDetailsCtrl.disableOutgoingNetworkSelection = false;
                }
            }

            /**
             * Event handler to disable network selection box once application group is selected while creating a new
             * rule.
             */
            function onChangeIncomingApplicationGroupSelection() {
                if (isolationPolicyDetailsCtrl.newIncomingSelectedApplicationGroup != null) {
                    //If application group has been selected
                    isolationPolicyDetailsCtrl.newIncomingRule.fromEndpointGroup =
                        isolationPolicyDetailsCtrl.newIncomingSelectedApplicationGroup.groupName;
                    isolationPolicyDetailsCtrl.newIncomingRule.fromNetwork = '';
                    isolationPolicyDetailsCtrl.disableIncomingNetworkSelection = true;
                } else {
                    //When 'none' is selected
                    isolationPolicyDetailsCtrl.newIncomingRule.fromEndpointGroup = '';
                    isolationPolicyDetailsCtrl.disableIncomingNetworkSelection = false;
                }

            }

            /**
             * Event handler to disable application group selection box once network is selected while creating a new
             * rule.
             */
            function onChangeOutgoingNetworkSelection() {
                if (isolationPolicyDetailsCtrl.newOutgoingRule.toNetwork != null) {
                    //If network has been selected
                    isolationPolicyDetailsCtrl.newOutgoingRule.ToEndpointGroup = '';
                    isolationPolicyDetailsCtrl.disableOutgoingApplicationGroupSelection = true;
                } else {
                    isolationPolicyDetailsCtrl.disableOutgoingApplicationGroupSelection = false;
                }
            }

            /**
             * Event handler to disable application group selection box once network is selected while creating a new
             * rule.
             */
            function onChangeIncomingNetworkSelection() {
                if (isolationPolicyDetailsCtrl.newIncomingRule.fromNetwork != null) {
                    //If network has been selected
                    isolationPolicyDetailsCtrl.newIncomingRule.fromEndpointGroup = '';
                    isolationPolicyDetailsCtrl.disableIncomingApplicationGroupSelection = true;
                } else {
                    isolationPolicyDetailsCtrl.disableIncomingApplicationGroupSelection = false;
                }
            }
            /**
             * Generates rule id
             * TODO Make it cryptographically stronger once we have multiple users updating same policy
             */
            function generateRuleId(rule) {
                rule.ruleId =
                    (isolationPolicyDetailsCtrl.incomingRules.length + isolationPolicyDetailsCtrl.outgoingRules.length + 1).toString() + '-' +
                    Date.now().toString();
            }

            /**
             * Rule is saved to server
             */
            function addIncomingRule() {
                CRUDHelperService.hideServerError(isolationPolicyDetailsCtrl);
                CRUDHelperService.startLoader(isolationPolicyDetailsCtrl);
                generateRuleId(isolationPolicyDetailsCtrl.newIncomingRule);
                isolationPolicyDetailsCtrl.newIncomingRule.key = RulesModel.generateKey(isolationPolicyDetailsCtrl.newIncomingRule);
                RulesModel.create(isolationPolicyDetailsCtrl.newIncomingRule).then(function successCallback(result) {
                    CRUDHelperService.stopLoader(isolationPolicyDetailsCtrl);
                    isolationPolicyDetailsCtrl.incomingRules.push(result);
                    resetNewIncomingRule();
                }, function errorCallback(result) {
                    CRUDHelperService.stopLoader(isolationPolicyDetailsCtrl);
                    CRUDHelperService.showServerError(isolationPolicyDetailsCtrl, result);
                });
            }

            /**
             * Rule is saved to server
             */
            function addOutgoingRule() {
                CRUDHelperService.hideServerError(isolationPolicyDetailsCtrl);
                CRUDHelperService.startLoader(isolationPolicyDetailsCtrl);
                generateRuleId(isolationPolicyDetailsCtrl.newOutgoingRule);
                isolationPolicyDetailsCtrl.newOutgoingRule.key = RulesModel.generateKey(isolationPolicyDetailsCtrl.newOutgoingRule);
                RulesModel.create(isolationPolicyDetailsCtrl.newOutgoingRule).then(function successCallback(result) {
                    CRUDHelperService.stopLoader(isolationPolicyDetailsCtrl);
                    isolationPolicyDetailsCtrl.outgoingRules.push(result);
                    resetNewOutgoingRule();
                }, function errorCallback(result) {
                    CRUDHelperService.stopLoader(isolationPolicyDetailsCtrl);
                    CRUDHelperService.showServerError(isolationPolicyDetailsCtrl, result);
                });
            }

            /**
             * Delete incoming rule from server
             */
            function deleteIncomingRule(key) {
                CRUDHelperService.hideServerError(isolationPolicyDetailsCtrl);
                CRUDHelperService.startLoader(isolationPolicyDetailsCtrl);
                RulesModel.deleteUsingKey(key).then(function successCallback(result) {
                    CRUDHelperService.stopLoader(isolationPolicyDetailsCtrl);
                    _.remove(isolationPolicyDetailsCtrl.incomingRules, function (n) {
                        return n.key == key;
                    });
                }, function errorCallback(result) {
                    CRUDHelperService.stopLoader(isolationPolicyDetailsCtrl);
                    CRUDHelperService.showServerError(isolationPolicyDetailsCtrl, result);
                });
            }

            /**
             * Delete outgoing rule from server
             */
            function deleteOutgoingRule(key) {
                CRUDHelperService.hideServerError(isolationPolicyDetailsCtrl);
                CRUDHelperService.startLoader(isolationPolicyDetailsCtrl);
                RulesModel.deleteUsingKey(key).then(function successCallback(result) {
                    CRUDHelperService.stopLoader(isolationPolicyDetailsCtrl);
                    _.remove(isolationPolicyDetailsCtrl.outgoingRules, function (n) {
                        return n.key == key;
                    });
                }, function errorCallback(result) {
                    CRUDHelperService.stopLoader(isolationPolicyDetailsCtrl);
                    CRUDHelperService.showServerError(isolationPolicyDetailsCtrl, result);
                });
            }

            CRUDHelperService.stopLoader(isolationPolicyDetailsCtrl);
            CRUDHelperService.hideServerError(isolationPolicyDetailsCtrl);

            PoliciesModel.getModelByKey($stateParams.key)
                .then(function (policy) {
                    isolationPolicyDetailsCtrl.policy = policy;
                    RulesModel.getIncomingRules(policy.policyName, 'default').then(function (result) {
                        isolationPolicyDetailsCtrl.incomingRules = result;
                        resetNewIncomingRule();
                    });
                    RulesModel.getOutgoingRules(policy.policyName, 'default').then(function (result) {
                        isolationPolicyDetailsCtrl.outgoingRules = result;
                        resetNewOutgoingRule();
                    });
                });

            getNetworks();
            getApplicationGroups();
            isolationPolicyDetailsCtrl.deletePolicy = deletePolicy;
            isolationPolicyDetailsCtrl.deleteIncomingRule = deleteIncomingRule;
            isolationPolicyDetailsCtrl.deleteOutgoingRule = deleteOutgoingRule;
            isolationPolicyDetailsCtrl.addIncomingRule = addIncomingRule;
            isolationPolicyDetailsCtrl.addOutgoingRule = addOutgoingRule;
            isolationPolicyDetailsCtrl.doneEditing = doneEditing;
            isolationPolicyDetailsCtrl.cancelEditing = cancelEditing;
            //Event Handlers
            isolationPolicyDetailsCtrl.onChangeOutgoingApplicationGroupSelection = onChangeOutgoingApplicationGroupSelection;
            isolationPolicyDetailsCtrl.onChangeIncomingApplicationGroupSelection = onChangeIncomingApplicationGroupSelection;
            isolationPolicyDetailsCtrl.onChangeOutgoingNetworkSelection = onChangeOutgoingNetworkSelection;
            isolationPolicyDetailsCtrl.onChangeIncomingNetworkSelection = onChangeIncomingNetworkSelection;

            setMode();

        }]);
angular.module('contiv.networkpolicies')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.networkpolicies.isolation.list', {
                url: '/list',
                controller: 'IsolationPolicyListCtrl as isolationPolicyListCtrl',
                templateUrl: 'network_policies/isolationpolicylist.html'
            })
        ;
    }])
    .controller('IsolationPolicyListCtrl', ['$scope', '$interval', '$filter', 'PoliciesModel', 'CRUDHelperService',
        function ($scope, $interval, $filter, PoliciesModel, CRUDHelperService) {
            var policiesListCtrl = this;

            function getPolicies(reload) {
                PoliciesModel.get(reload)
                    .then(function successCallback(result) {
                        CRUDHelperService.stopLoader(policiesListCtrl);
                        policiesListCtrl.policies = $filter('orderBy')(result, 'policyName');
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(policiesListCtrl);
                    });
            }

            //Load from cache for quick display initially
            getPolicies(false);

            var promise;
            //Don't start auto-refresh if one is already in progress
            if (!angular.isDefined(promise)) {
                promise = $interval(function () {
                    getPolicies(true);
                }, ContivGlobals.REFRESH_INTERVAL);
            }
            //stop polling when user moves away from the page
            $scope.$on('$destroy', function () {
                $interval.cancel(promise);
            });
        }]);

/**
 * Created by vjain3 on 3/9/16.
 */
angular.module('contiv.networkpolicies')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.networkpolicies', {
                url: '/networkpolicies',
                controller: 'NetworkPoliciesTabsCtrl as networkPoliciesTabsCtrl',
                templateUrl: 'network_policies/networkpoliciestabs.html'
            })
            .state('contiv.menu.networkpolicies.isolation', {
                url: '/isolation',
                abstract: true,
                template: '<ui-view/>'
            })
            .state('contiv.menu.networkpolicies.prioritization', {
                url: '/prioritization',
                controller: 'NetworkPoliciesTabsCtrl as networkPoliciesTabsCtrl',
                templateUrl: 'network_policies/prioritizationpolicylist.html'
            })
            .state('contiv.menu.networkpolicies.bandwidth', {
                url: '/bandwidth',
                controller: 'NetworkPoliciesTabsCtrl as networkPoliciesTabsCtrl',
                templateUrl: 'network_policies/bandwidthpolicylist.html'
            })
            .state('contiv.menu.networkpolicies.redirection', {
                url: '/redirection',
                controller: 'NetworkPoliciesTabsCtrl as networkPoliciesTabsCtrl',
                templateUrl: 'network_policies/redirectionpolicylist.html'
            })
        ;
    }])
    .controller('NetworkPoliciesTabsCtrl', ['$state', function ($state) {
    }]);

/**
 * Created by vjain3 on 2/19/16.
 */
angular.module('contiv.networks')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.networks.create', {
                url: '/create',
                templateUrl: 'networks/networkcreate.html',
                controller: 'NetworkCreateCtrl as networkCreateCtrl'
            })
        ;
    }])
    .controller('NetworkCreateCtrl', ['$state', '$stateParams', 'NetworksModel', 'CRUDHelperService',
        function ($state, $stateParams, NetworksModel, CRUDHelperService) {
            var networkCreateCtrl = this;
            networkCreateCtrl.cidrPattern = ContivGlobals.CIDR_REGEX;

            function returnToNetworks() {
                $state.go('contiv.menu.networks.list');
            }

            function cancelCreating() {
                returnToNetworks();
            }

            function createNetwork() {
                //form controller is injected by the html template
                //checking if all validations have passed
                if (networkCreateCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(networkCreateCtrl);
                    CRUDHelperService.startLoader(networkCreateCtrl);
                    networkCreateCtrl.newNetwork.key =
                        networkCreateCtrl.newNetwork.tenantName + ':' + networkCreateCtrl.newNetwork.networkName;
                    NetworksModel.create(networkCreateCtrl.newNetwork).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(networkCreateCtrl);
                        returnToNetworks();
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(networkCreateCtrl);
                        CRUDHelperService.showServerError(networkCreateCtrl, result);
                    });
                }

            }

            function resetForm() {
                CRUDHelperService.stopLoader(networkCreateCtrl);
                CRUDHelperService.hideServerError(networkCreateCtrl);
                networkCreateCtrl.newNetwork = {
                    networkName: '',
                    encap: 'vxlan',
                    subnet: '',
                    gateway: '',
                    tenantName: 'default'//TODO: Remove hardcoded tenant.
                };
            }

            networkCreateCtrl.createNetwork = createNetwork;
            networkCreateCtrl.cancelCreating = cancelCreating;

            resetForm();
        }]);

angular.module('contiv.networks')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.networks.details', {
                url: '/details/:key',
                controller: 'NetworkDetailsCtrl as networkDetailsCtrl',
                templateUrl: 'networks/networkdetails.html'
            });
    }])
    .controller('NetworkDetailsCtrl',
        ['$state', '$stateParams', '$scope', '$interval', '$filter', 'NetworksModel', 'ApplicationGroupsModel', 'CRUDHelperService',
            function ($state, $stateParams, $scope, $interval, $filter, NetworksModel, ApplicationGroupsModel, CRUDHelperService) {
                var networkDetailsCtrl = this;

                function returnToNetworks() {
                    $state.go('contiv.menu.networks.list');
                }

                function deleteNetwork() {
                    CRUDHelperService.hideServerError(networkDetailsCtrl);
                    CRUDHelperService.startLoader(networkDetailsCtrl);
                    NetworksModel.delete(networkDetailsCtrl.network).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(networkDetailsCtrl);
                        returnToNetworks();
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(networkDetailsCtrl);
                        CRUDHelperService.showServerError(networkDetailsCtrl, result);
                    });
                }

                /**
                 * Get application groups belonging to a network
                 */
                function getApplicationGroups(reload) {
                    ApplicationGroupsModel.get(reload).then(function (result) {
                        networkDetailsCtrl.applicationGroups = $filter('orderBy')(_.filter(result, {
                            'networkName': networkDetailsCtrl.network.networkName
                        }), 'groupName');
                    });
                }

                CRUDHelperService.stopLoader(networkDetailsCtrl);
                CRUDHelperService.hideServerError(networkDetailsCtrl);

                NetworksModel.getModelByKey($stateParams.key)
                    .then(function (network) {
                        networkDetailsCtrl.network = network;
                        getApplicationGroups(false);
                    });

                networkDetailsCtrl.deleteNetwork = deleteNetwork;

                var promise;
                //Don't do autorefresh if one is already in progress
                if (!angular.isDefined(promise)) {
                    promise = $interval(function () {
                        getApplicationGroups(true);
                    }, ContivGlobals.REFRESH_INTERVAL);
                }

                //stop polling when user moves away from the page
                $scope.$on('$destroy', function () {
                    $interval.cancel(promise);
                });
            }]);

angular.module('contiv.networks')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.networks.list', {
                url: '/list',
                controller: 'NetworksListCtrl as networksListCtrl',
                templateUrl: 'networks/networklist.html'
            })
        ;
    }])
    .controller('NetworksListCtrl', ['$scope', '$interval', '$filter', 'NetworksModel', 'CRUDHelperService',
        function ($scope, $interval, $filter, NetworksModel, CRUDHelperService) {
            var networksListCtrl = this;

            function getNetworks(reload) {
                NetworksModel.get(reload)
                    .then(function successCallback(result) {
                            CRUDHelperService.stopLoader(networksListCtrl);
                            networksListCtrl.networks = $filter('orderBy')(result, 'networkName');
                        },
                        function errorCallback(result) {
                            CRUDHelperService.stopLoader(networksListCtrl);
                        });
            }

            //Load from cache for quick display initially
            getNetworks(false);

            var promise;
            //Don't do autorefresh if one is already in progress
            if (!angular.isDefined(promise)) {
                promise = $interval(function () {
                    getNetworks(true);
                }, ContivGlobals.REFRESH_INTERVAL);
            }

            //stop polling when user moves away from the page
            $scope.$on('$destroy', function () {
                $interval.cancel(promise);
            });
        }]);

/**
 * Created by vjain3 on 3/25/16.
 */
angular.module('contiv.nodes')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.nodes.commission', {
                url: '/commission/:key',
                controller: 'NodeCommissionCtrl as nodeCommissionCtrl',
                templateUrl: 'nodes/nodecommission.html'
            })
            .state('contiv.menu.nodes.discover', {
                url: '/discover',
                controller: 'NodeCommissionCtrl as nodeCommissionCtrl',
                templateUrl: 'nodes/nodecommission.html'
            })
        ;
    }])
    .controller('NodeCommissionCtrl', [
        '$state', '$stateParams', 'NodesModel', 'CRUDHelperService',
        function ($state, $stateParams, NodesModel, CRUDHelperService) {
            var nodeCommissionCtrl = this;

            /**
             * To show commission or discover screen based on the route
             */
            function setMode() {
                if ($state.is('contiv.menu.nodes.commission')) {
                    nodeCommissionCtrl.mode = 'commission';
                } else {
                    nodeCommissionCtrl.mode = 'discover';
                }
            }

            function returnToNodeDetails() {
                $state.go('contiv.menu.nodes.details.info', {'key': $stateParams.key});
            }

            function returnToNodes() {
                $state.go('contiv.menu.nodes.list');
            }

            function cancelCommissioningNode() {
                returnToNodeDetails();
            }

            function cancelDiscoveringNode() {
                returnToNodes();
            }

            function createExtraVars() {
                //Add ansible variables to extra_vars
                nodeCommissionCtrl.ansibleVariables.forEach(function (item) {
                    nodeCommissionCtrl.extra_vars[item.name] = item.value
                });
                //Add environment variables to extra_vars
                var envVars = {};
                nodeCommissionCtrl.envVariables.forEach(function (item) {
                    envVars[item.name] = item.value;
                });
                nodeCommissionCtrl.extra_vars['env'] = envVars;
                nodeCommissionCtrl.nodeOpsObj.extra_vars = JSON.stringify(nodeCommissionCtrl.extra_vars);
            }

            function commission() {
                if (nodeCommissionCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(nodeCommissionCtrl);
                    CRUDHelperService.startLoader(nodeCommissionCtrl);
                    nodeCommissionCtrl.nodeOpsObj.nodes = [$stateParams.key];
                    cleanupExtraVars();
                    createExtraVars();
                    NodesModel.commission(nodeCommissionCtrl.nodeOpsObj).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(nodeCommissionCtrl);
                        returnToNodeDetails();
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(nodeCommissionCtrl);
                        CRUDHelperService.showServerError(nodeCommissionCtrl, result);
                    });
                }
            }

            function discover() {
                if (nodeCommissionCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(nodeCommissionCtrl);
                    CRUDHelperService.startLoader(nodeCommissionCtrl);
                    createIPAddrArray();
                    createExtraVars();
                    NodesModel.discover(nodeCommissionCtrl.nodeOpsObj).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(nodeCommissionCtrl);
                        returnToNodes();
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(nodeCommissionCtrl);
                        CRUDHelperService.showServerError(nodeCommissionCtrl, result);
                    });
                }
            }

            /**
             * Cleanup ansible variables for network mode and scheduler. ng-if removes it from the view (DOM) but not from
             * the model.
             */
            function cleanupExtraVars() {
                //Cleanup for network mode
                if (nodeCommissionCtrl.extra_vars['contiv_network_mode'] == 'aci') {
                    delete nodeCommissionCtrl.extra_vars['fwd_mode'];
                } else {
                    delete nodeCommissionCtrl.extra_vars['apic_url'];
                    delete nodeCommissionCtrl.extra_vars['apic_username'];
                    delete nodeCommissionCtrl.extra_vars['apic_password'];
                    delete nodeCommissionCtrl.extra_vars['apic_leaf_nodes'];
                    delete nodeCommissionCtrl.extra_vars['apic_phys_domain'];
                    delete nodeCommissionCtrl.extra_vars['apic_epg_bridge_domain'];
                    delete nodeCommissionCtrl.extra_vars['apic_contracts_unrestricted_mode'];
                }
                //Cleanup for scheduler
                if (nodeCommissionCtrl.extra_vars['scheduler_provider'] == 'native-swarm') {
                    delete nodeCommissionCtrl.extra_vars['ucp_bootstrap_node_name'];
                }
            }

            function createIPAddrArray() {
                nodeCommissionCtrl.nodeOpsObj.addrs = _.words(nodeCommissionCtrl.nodeIPAddr, /[^, ]+/g);
            }

            nodeCommissionCtrl.nodeOpsObj = {};
            nodeCommissionCtrl.extra_vars = {}; //TODO Intialize from global settings
            nodeCommissionCtrl.ansibleVariables = [];
            nodeCommissionCtrl.envVariables = [];
            nodeCommissionCtrl.nodeIPAddr = ''; //IP address of nodes to discover

            nodeCommissionCtrl.cancelCommissioningNode = cancelCommissioningNode;
            nodeCommissionCtrl.commission = commission;
            nodeCommissionCtrl.discover = discover;
            nodeCommissionCtrl.cancelDiscoveringNode = cancelDiscoveringNode;

            setMode();
            CRUDHelperService.stopLoader(nodeCommissionCtrl);
            CRUDHelperService.hideServerError(nodeCommissionCtrl);

        }]);

/**
 * Created by vjain3 on 3/25/16.
 */
angular.module('contiv.nodes')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.nodes.details', {
                url: '/details/:key',
                controller: 'NodeDetailsCtrl as nodeDetailsCtrl',
                templateUrl: 'nodes/nodedetails.html'
            })
            .state('contiv.menu.nodes.details.info', {
                url: '/info',
                controller: 'NodeDetailsCtrl as nodeDetailsCtrl',
                templateUrl: 'nodes/nodeinfo.html'
            })
            .state('contiv.menu.nodes.details.stats', {
                url: '/stats',
                controller: 'NodeDetailsCtrl as nodeDetailsCtrl',
                templateUrl: 'nodes/nodestats.html'
            })
            .state('contiv.menu.nodes.details.logs', {
                url: '/logs',
                controller: 'NodeDetailsCtrl as nodeDetailsCtrl',
                templateUrl: 'nodes/nodelogs.html'
            })
        ;
    }])
    .controller('NodeDetailsCtrl', ['$state', '$stateParams', '$scope', '$interval', 'NodesModel',
        function ($state, $stateParams, $scope, $interval, NodesModel) {
            var nodeDetailsCtrl = this;

            function decommission() {
                var nodeOpsObj = {
                  nodes: [$stateParams.key]
                };
                NodesModel.decommission(nodeOpsObj).then(function (result) {
                    //Disable all buttons initially. Poll will assign values appropriately.
                    nodeDetailsCtrl.showCommissionButton = false;
                    nodeDetailsCtrl.commissionButtonEnabled = false;
                    nodeDetailsCtrl.upgradeButtonEnabled = false;
                });
            }

            function upgrade() {
                var nodeOpsObj = {
                    nodes: [$stateParams.key]
                };
                NodesModel.upgrade(nodeOpsObj).then(function (result) {
                    //Disable all buttons initially. Poll will assign values appropriately.
                    nodeDetailsCtrl.showCommissionButton = false;
                    nodeDetailsCtrl.commissionButtonEnabled = false;
                    nodeDetailsCtrl.upgradeButtonEnabled = false;
                });
            }

            /**
             * Display buttons based on status of node
             */
            function setButtonDisplay() {
                switch (nodeDetailsCtrl.node['inventory_state'].status) {
                    case 'Unallocated':
                        nodeDetailsCtrl.showCommissionButton = true;
                        nodeDetailsCtrl.commissionButtonEnabled = true;
                        nodeDetailsCtrl.upgradeButtonEnabled = false;
                        break;
                    case 'Decommissioned':
                        nodeDetailsCtrl.showCommissionButton = true;
                        nodeDetailsCtrl.commissionButtonEnabled = true;
                        nodeDetailsCtrl.upgradeButtonEnabled = false;
                        break;
                    case 'Provisioning':
                        nodeDetailsCtrl.showCommissionButton = true;
                        nodeDetailsCtrl.commissionButtonEnabled = false;
                        nodeDetailsCtrl.upgradeButtonEnabled = false;
                        break;
                    case 'Allocated':
                        nodeDetailsCtrl.showCommissionButton = false;
                        nodeDetailsCtrl.commissionButtonEnabled = true;
                        nodeDetailsCtrl.upgradeButtonEnabled = true;
                        break;
                    case 'Cancelled':
                        nodeDetailsCtrl.showCommissionButton = false;
                        nodeDetailsCtrl.commissionButtonEnabled = false;
                        nodeDetailsCtrl.upgradeButtonEnabled = false;
                        break;
                    case 'Maintenance':
                        nodeDetailsCtrl.showCommissionButton = true;
                        nodeDetailsCtrl.commissionButtonEnabled = false;
                        nodeDetailsCtrl.upgradeButtonEnabled = false;
                        break;
                    default://Cluster should not be in this state
                        nodeDetailsCtrl.showCommissionButton = true;
                        nodeDetailsCtrl.commissionButtonEnabled = false;
                        nodeDetailsCtrl.upgradeButtonEnabled = false;
                        break;
                }
            }

            function getNodeInfo(reload) {
                NodesModel.getModelByKey($stateParams.key, reload)
                    .then(function (node) {
                        nodeDetailsCtrl.node = node;
                        setButtonDisplay();
                    });
            }

            nodeDetailsCtrl.decommission = decommission;
            nodeDetailsCtrl.upgrade = upgrade;

            //Load from cache for quick display initially
            getNodeInfo(false);

            var promise;
            //Don't do auto-refresh if one is already in progress
            if (!angular.isDefined(promise)) {
                promise = $interval(function () {
                    getNodeInfo(true);
                }, 5000);
            }
            //stop polling when user moves away from the page
            $scope.$on('$destroy', function () {
                $interval.cancel(promise);
            });

        }]);
/**
 * Created by vjain3 on 3/22/16.
 */
angular.module('contiv.nodes')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.nodes.list', {
                url: '/list',
                controller: 'NodeListCtrl as nodeListCtrl',
                templateUrl: 'nodes/nodelist.html'
            })
        ;
    }])
    .controller('NodeListCtrl', ['$scope', '$interval', '$filter', 'NodesModel', 'CRUDHelperService',
        function ($scope, $interval, $filter, NodesModel, CRUDHelperService) {
        var nodeListCtrl = this;

        function getNodes(reload) {
            NodesModel.get(reload)
                .then(function successCallback(result) {
                    CRUDHelperService.stopLoader(nodeListCtrl);
                    nodeListCtrl.nodes = $filter('orderBy')(result, 'key');
                }, function errorCallback(result) {
                    CRUDHelperService.stopLoader(nodeListCtrl);
                });
        }

        //Load from cache for quick display initially
        getNodes(false);

        var promise;
        //Don't do auto-refresh if one is already in progress
        if (!angular.isDefined(promise)) {
            promise = $interval(function () {
                getNodes(true);
            }, ContivGlobals.REFRESH_INTERVAL);
        }
        //stop polling when user moves away from the page
        $scope.$on('$destroy', function () {
            $interval.cancel(promise);
        });

    }]);
angular.module('contiv.organizations')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.organizations.create', {
                url: '/create',
                templateUrl: 'organizations/organizationcreate.html',
                controller: 'OrganizationCreateCtrl as organizationCreateCtrl'
            })
        ;
    }])
    .controller('OrganizationCreateCtrl', ['$state', '$stateParams', 'OrganizationsModel', 'CRUDHelperService',
        function ($state, $stateParams, OrganizationsModel, CRUDHelperService) {
            var organizationCreateCtrl = this;

            function returnToOrganizations() {
                $state.go('contiv.menu.organizations.list');
            }

            function cancelCreating() {
                returnToOrganizations();
            }

            function createOrganization() {
                //form controller is injected by the html template
                //checking if all validations have passed
                if (organizationCreateCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(organizationCreateCtrl);
                    CRUDHelperService.startLoader(organizationCreateCtrl);
                    organizationCreateCtrl.newOrganization.key = organizationCreateCtrl.newOrganization.tenantName; 
                    OrganizationsModel.create(organizationCreateCtrl.newOrganization).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(organizationCreateCtrl);
                        returnToOrganizations();
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(organizationCreateCtrl);
                        CRUDHelperService.showServerError(organizationCreateCtrl, result);
                    });
                }
            }

            function resetForm() {
                CRUDHelperService.stopLoader(organizationCreateCtrl);
                CRUDHelperService.hideServerError(organizationCreateCtrl);
                organizationCreateCtrl.newOrganization = {
                    tenantName: ''
                };
            }

            organizationCreateCtrl.createOrganization = createOrganization;
            organizationCreateCtrl.cancelCreating = cancelCreating;

            resetForm();
        }]);

angular.module('contiv.organizations')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.organizations.details', {
                url: '/details/:key',
                controller: 'OrganizationDetailsCtrl as organizationDetailsCtrl',
                templateUrl: 'organizations/organizationdetails.html'
            });
    }])
    .controller('OrganizationDetailsCtrl',
        ['$state', '$stateParams', '$scope', '$interval', '$filter', 'OrganizationsModel', 'CRUDHelperService',
            function ($state, $stateParams, $scope, $interval, $filter, OrganizationsModel, CRUDHelperService) {
                var organizationDetailsCtrl = this;

                function returnToOrganizations() {
                    $state.go('contiv.menu.organizations.list');
                }

                function deleteOrganization() {
                    CRUDHelperService.hideServerError(organizationDetailsCtrl);
                    CRUDHelperService.startLoader(organizationDetailsCtrl);
                    OrganizationsModel.delete(organizationDetailsCtrl.organization).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(organizationDetailsCtrl);
                        returnToOrganizations();
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(organizationDetailsCtrl);
                        CRUDHelperService.showServerError(organizationDetailsCtrl, result);
                    });
                }

                CRUDHelperService.stopLoader(organizationDetailsCtrl);
                CRUDHelperService.hideServerError(organizationDetailsCtrl);

                OrganizationsModel.getModelByKey($stateParams.key)
                    .then(function (organization) {
                        organizationDetailsCtrl.organization = organization;
                    });

                organizationDetailsCtrl.deleteOrganization = deleteOrganization;
            }]);
angular.module('contiv.organizations')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.organizations.list', {
                url: '/list',
                controller: 'OrganizationsListCtrl as organizationsListCtrl',
                templateUrl: 'organizations/organizationlist.html'
            })
        ;
    }])
    .controller('OrganizationsListCtrl', ['$scope', '$interval', '$filter', 'OrganizationsModel', 'CRUDHelperService',
        function ($scope, $interval, $filter, OrganizationsModel, CRUDHelperService) {
            var organizationsListCtrl = this;

            function getOrganizations(reload) {
                OrganizationsModel.get(reload)
                    .then(function successCallback(result) {
                            CRUDHelperService.stopLoader(organizationsListCtrl);
                            organizationsListCtrl.organizations = $filter('orderBy')(result, 'tenantName');
                        },
                        function errorCallback(result) {
                            CRUDHelperService.stopLoader(organizationsListCtrl);
                        });
            }

            //Load from cache for quick display initially
            getOrganizations(false);

            var promise;
            //Don't do autorefresh if one is already in progress
            if (!angular.isDefined(promise)) {
                promise = $interval(function () {
                    getOrganizations(true);
                }, ContivGlobals.REFRESH_INTERVAL);
            }

            //stop polling when user moves away from the page
            $scope.$on('$destroy', function () {
                $interval.cancel(promise);
            });
        }]);
/**
 * Created by vjain3 on 5/12/16.
 */
angular.module('contiv.servicelbs')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.servicelbs.create', {
                url: '/create',
                templateUrl: 'service_lbs/servicelbcreate.html',
                controller: 'ServicelbCreateCtrl as servicelbCreateCtrl'
            })
        ;
    }])
    .controller('ServicelbCreateCtrl', [
        '$state', '$stateParams', 'ServicelbsModel', 'NetworksModel', 'CRUDHelperService',
        function ($state, $stateParams, ServicelbsModel, NetworksModel, CRUDHelperService) {
            var servicelbCreateCtrl = this;
            servicelbCreateCtrl.labelSelectors = [];
            servicelbCreateCtrl.networks = [];

            function returnToServicelbs() {
                $state.go('contiv.menu.servicelbs.list');
            }

            function cancelCreating() {
                returnToServicelbs();
            }

            /**
             * Get networks for the given tenant.
             */
            function getNetworks() {
                NetworksModel.get().then(function (result) {
                    servicelbCreateCtrl.networks = _.filter(result, {
                        'tenantName': 'default'//TODO: Remove hardcoded tenant.
                    });
                });
            }

            function createLabelSelectorStrings() {
                //Empty out the selectors. In case of server errors this needs to be reset.
                servicelbCreateCtrl.servicelb.selectors = [];
                angular.forEach(servicelbCreateCtrl.labelSelectors, function(labelSelector) {
                    var selectorString = labelSelector.name + '=' + labelSelector.value;
                    servicelbCreateCtrl.servicelb.selectors.push(selectorString);
                })
            }
            function createServicelb() {
                createLabelSelectorStrings();
                //form controller is injected by the html template
                //checking if all validations have passed
                if (servicelbCreateCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(servicelbCreateCtrl);
                    CRUDHelperService.startLoader(servicelbCreateCtrl);
                    servicelbCreateCtrl.servicelb.key =
                        servicelbCreateCtrl.servicelb.tenantName + ':' + servicelbCreateCtrl.servicelb.serviceName;
                    ServicelbsModel.create(servicelbCreateCtrl.servicelb).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(servicelbCreateCtrl);
                        returnToServicelbs();
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(servicelbCreateCtrl);
                        CRUDHelperService.showServerError(servicelbCreateCtrl, result);
                    });
                }

            }

            function resetForm() {
                CRUDHelperService.stopLoader(servicelbCreateCtrl);
                CRUDHelperService.hideServerError(servicelbCreateCtrl);
                servicelbCreateCtrl.servicelb = {
                    serviceName: '',
                    networkName: '',
                    ipAddress: '',
                    selectors: [],
                    ports: [],
                    tenantName: 'default'//TODO: Remove hardcoded tenant.
                };
            }
            servicelbCreateCtrl.createServicelb = createServicelb;
            servicelbCreateCtrl.cancelCreating = cancelCreating;

            getNetworks();
            resetForm();
        }]);

/**
 * Created by vjain3 on 5/11/16.
 */
angular.module('contiv.servicelbs')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.servicelbs.details', {
                url: '/details/:key',
                controller: 'ServicelbDetailsCtrl as servicelbDetailsCtrl',
                templateUrl: 'service_lbs/servicelbdetails.html'
            })
            .state('contiv.menu.servicelbs.edit', {
                url: '/edit/:key',
                controller: 'ServicelbDetailsCtrl as servicelbDetailsCtrl',
                templateUrl: 'service_lbs/servicelbdetails.html'
            });
    }])
    .controller('ServicelbDetailsCtrl',
        ['$state', '$stateParams', 'ServicelbsModel', 'CRUDHelperService',
            function ($state, $stateParams, ServicelbsModel, CRUDHelperService) {
                var servicelbDetailsCtrl = this;
                servicelbDetailsCtrl.labelSelectors = [];

                /**
                 * To show edit or details screen based on the route
                 */
                function setMode() {
                    if ($state.is('contiv.menu.servicelbs.edit')) {
                        servicelbDetailsCtrl.mode = 'edit';
                    } else {
                        servicelbDetailsCtrl.mode = 'details';
                    }
                }

                function returnToServicelbs() {
                    $state.go('contiv.menu.servicelbs.list');
                }

                function returnToServicelbDetails() {
                    $state.go('contiv.menu.servicelbs.details', {'key': servicelbDetailsCtrl.servicelb.key});
                }

                function cancelEditing() {
                    returnToServicelbDetails();
                }

                function deleteServicelb() {
                    CRUDHelperService.hideServerError(servicelbDetailsCtrl);
                    CRUDHelperService.startLoader(servicelbDetailsCtrl);
                    ServicelbsModel.delete(servicelbDetailsCtrl.servicelb).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(servicelbDetailsCtrl);
                        returnToServicelbs();
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(servicelbDetailsCtrl);
                        CRUDHelperService.showServerError(servicelbDetailsCtrl, result);
                    });
                }

                function saveServicelb() {
                    CRUDHelperService.hideServerError(servicelbDetailsCtrl);
                    CRUDHelperService.startLoader(servicelbDetailsCtrl);
                    createLabelSelectorStrings();
                    ServicelbsModel.save(servicelbDetailsCtrl.servicelb).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(servicelbDetailsCtrl);
                        returnToServicelbDetails();
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(servicelbDetailsCtrl);
                        CRUDHelperService.showServerError(servicelbDetailsCtrl, result);
                    });
                }

                function createLabelSelectors() {
                    angular.forEach(servicelbDetailsCtrl.servicelb.selectors, function(selectorStr) {
                        var selector = {
                            name: selectorStr.split('=')[0],
                            value: selectorStr.split('=')[1]
                        };
                        servicelbDetailsCtrl.labelSelectors.push(selector);
                    });
                }

                function createLabelSelectorStrings() {
                    servicelbDetailsCtrl.servicelb.selectors = [];
                    angular.forEach(servicelbDetailsCtrl.labelSelectors, function(labelSelector) {
                        var selectorString = labelSelector.name + '=' + labelSelector.value;
                        servicelbDetailsCtrl.servicelb.selectors.push(selectorString);
                    })
                }

                CRUDHelperService.stopLoader(servicelbDetailsCtrl);
                CRUDHelperService.hideServerError(servicelbDetailsCtrl);

                ServicelbsModel.getModelByKey($stateParams.key)
                    .then(function successCallback(servicelb) {
                        servicelbDetailsCtrl.servicelb = servicelb;
                        createLabelSelectors();
                    });

                servicelbDetailsCtrl.saveServicelb = saveServicelb;
                servicelbDetailsCtrl.cancelEditing = cancelEditing;
                servicelbDetailsCtrl.deleteServicelb = deleteServicelb;
                setMode();

            }]);

/**
 * Created by vjain3 on 5/11/16.
 */
angular.module('contiv.servicelbs')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.servicelbs.list', {
                url: '/list',
                controller: 'ServicelbListCtrl as servicelbListCtrl',
                templateUrl: 'service_lbs/servicelblist.html'
            })
        ;
    }])
    .controller('ServicelbListCtrl', ['$scope', '$interval', '$filter', 'ServicelbsModel', 'CRUDHelperService',
        function ($scope, $interval, $filter, ServicelbsModel, CRUDHelperService) {
            var servicelbListCtrl = this;

            function getServicelbs(reload) {
                ServicelbsModel.get(reload)
                    .then(function successCallback(result) {
                            CRUDHelperService.stopLoader(servicelbListCtrl);
                            servicelbListCtrl.servicelbs = $filter('orderBy')(result, 'serviceName');
                        },
                        function errorCallback(result) {
                            CRUDHelperService.stopLoader(servicelbListCtrl);
                        });
            }

            //Load from cache for quick display initially
            getServicelbs(false);

            var promise;
            //Don't do autorefresh if one is already in progress
            if (!angular.isDefined(promise)) {
                promise = $interval(function () {
                    getServicelbs(true);
                }, ContivGlobals.REFRESH_INTERVAL);
            }

            //stop polling when user moves away from the page
            $scope.$on('$destroy', function () {
                $interval.cancel(promise);
            });
        }]);

/**
 * Created by vjain3 on 5/13/16.
 */
angular.module("contiv.servicelbs")
    .directive("ctvServicelbports", function() {
       return {
           restrict: 'E',
           scope: {
             items: '='
           },
           link: function(scope) {
               /**
                * Compare if two items have same ports and protocols
                * @param val1
                * @param val2
                * @returns {boolean}
                */
               function compare(val1, val2) {
                   return (val1 === val2);
               }

               function resetNewItem() {
                   scope.newItem = {
                       servicePort: '',
                       providerPort: '',
                       protocol: ''
                   };
               }

               function isEmptyItem(item) {
                   return (item.servicePort === '' && item.providerPort === '' && item.protocol === '');
               }

               scope.add = function() {
                   if (isEmptyItem(scope.newItem)) return;
                   if (scope.items === undefined) {
                       scope.items = [];
                   }
                   var newItemStr = scope.newItem.servicePort + ':'
                       + scope.newItem.providerPort + ':'
                       + scope.newItem.protocol;
                   //Removes existing item with the same value first if it exists.
                   _.pullAllWith(scope.items, [newItemStr], compare);
                   scope.items.push(newItemStr);
                   resetNewItem();
               };

               scope.remove = function(passedItem) {
                   _.remove(scope.items, function (item) {
                       return compare(item, passedItem);
                   });
               };
               resetNewItem();
           },
           templateUrl: 'service_lbs/servicelbports.html'
       }
    });

/**
 * Created by vjain3 on 6/1/16.
 */
angular.module('contiv.storagepolicies')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.storagepolicies.create', {
                url: '/create',
                templateUrl: 'storage_policies/storagepolicycreate.html',
                controller: 'StoragePolicyCreateCtrl as storagePolicyCreateCtrl'
            })
        ;
    }])
    .controller('StoragePolicyCreateCtrl', ['$state', '$stateParams', 'StoragePoliciesModel', 'CRUDHelperService',
        function ($state, $stateParams, StoragePoliciesModel, CRUDHelperService) {
            var storagePolicyCreateCtrl = this;

            function returnToStoragePolicies() {
                $state.go('contiv.menu.storagepolicies.list');
            }

            function cancelCreating() {
                returnToStoragePolicies();
            }

            function createFilesystemCmds() {
                storagePolicyCreateCtrl.filesystemcmds.forEach(function (item) {
                    storagePolicyCreateCtrl.newStoragePolicy.filesystems[item.name] = item.value;
                });
            }

            function createPolicy() {
                //form controller is injected by the html template
                //checking if all validations have passed
                if (storagePolicyCreateCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(storagePolicyCreateCtrl);
                    CRUDHelperService.startLoader(storagePolicyCreateCtrl);
                    createFilesystemCmds();
                    StoragePoliciesModel.create(storagePolicyCreateCtrl.newStoragePolicy)
                        .then(function successCallback(result) {
                            CRUDHelperService.stopLoader(storagePolicyCreateCtrl);
                            returnToStoragePolicies();
                        }, function errorCallback(result) {
                            CRUDHelperService.stopLoader(storagePolicyCreateCtrl);
                            CRUDHelperService.showServerError(storagePolicyCreateCtrl, result);
                        });
                }

            }

            function resetForm() {
                CRUDHelperService.stopLoader(storagePolicyCreateCtrl);
                CRUDHelperService.hideServerError(storagePolicyCreateCtrl);
                storagePolicyCreateCtrl.newStoragePolicy = {
                    "name": "",
                    "backends": {
                        "crud": "ceph",
                        "mount": "ceph",
                        "snapshot": "ceph"
                    },
                    "unlocked": false,
                    "driver": {
                        "pool": "rbd"
                    },
                    "create": {
                        "size": "10MB",
                        "filesystem": "ext4"
                    },
                    "runtime": {
                        "snapshots": true,
                        "snapshot": {
                            "frequency": "30m",
                            "keep": 20
                        },
                        "rate-limit": {
                            "write-iops": 1000,
                            "read-iops": 1000,
                            "write-bps": 100000000,
                            "read-bps": 100000000
                        }
                    },
                    "filesystems": {}
                };
            }

            storagePolicyCreateCtrl.createPolicy = createPolicy;
            storagePolicyCreateCtrl.cancelCreating = cancelCreating;
            storagePolicyCreateCtrl.filesystemcmds = [];

            resetForm();
        }]);

/**
 * Created by vjain3 on 5/27/16.
 */
angular.module('contiv.storagepolicies')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.storagepolicies.details', {
                url: '/details/:key',
                controller: 'StoragePolicyDetailsCtrl as storagePolicyDetailsCtrl',
                templateUrl: 'storage_policies/storagepolicydetails.html'
            })
            .state('contiv.menu.storagepolicies.edit', {
                url: '/details/:key',
                controller: 'StoragePolicyDetailsCtrl as storagePolicyDetailsCtrl',
                templateUrl: 'storage_policies/storagepolicydetails.html'
            });
    }])
    .controller('StoragePolicyDetailsCtrl',
        ['$state', '$stateParams', '$scope', '$interval', '$filter', 'StoragePoliciesModel', 'VolumesModel', 'CRUDHelperService',
            function ($state, $stateParams, $scope, $interval, $filter, StoragePoliciesModel, VolumesModel, CRUDHelperService) {
                var storagePolicyDetailsCtrl = this;
                storagePolicyDetailsCtrl.filesystemcmds = [];

                /**
                 * To show edit or details screen based on the route
                 */
                function setMode() {
                    if ($state.is('contiv.menu.storagepolicies.edit')) {
                        storagePolicyDetailsCtrl.mode = 'edit';
                    } else {
                        storagePolicyDetailsCtrl.mode = 'details';
                    }
                }

                function returnToPolicies() {
                    $state.go('contiv.menu.storagepolicies.list');
                }

                function returnToPolicyDetails() {
                    $state.go('contiv.menu.storagepolicies.details', {'key': storagePolicyDetailsCtrl.policy.name});
                }

                function cancelEditing() {
                    returnToPolicyDetails();
                }

                function deletePolicy() {
                    CRUDHelperService.hideServerError(storagePolicyDetailsCtrl);
                    CRUDHelperService.startLoader(storagePolicyDetailsCtrl);
                    StoragePoliciesModel.deleteUsingKey(storagePolicyDetailsCtrl.policy.name, 'name').then(
                        function successCallback(result) {
                            CRUDHelperService.stopLoader(storagePolicyDetailsCtrl);
                            returnToPolicies();
                        }, function errorCallback(result) {
                            CRUDHelperService.stopLoader(storagePolicyDetailsCtrl);
                            CRUDHelperService.showServerError(storagePolicyDetailsCtrl, result);
                        });
                }

                /**
                 * Get volumes belonging to a policy
                 */
                function getVolumes(reload) {
                    VolumesModel.get(reload).then(function (result) {
                        storagePolicyDetailsCtrl.volumes = $filter('orderBy')(_.filter(result, {
                            'policy': storagePolicyDetailsCtrl.policy.name
                        }), 'name');
                    });
                }

                function initializeFilesystemCmdsArray() {
                    angular.forEach(storagePolicyDetailsCtrl.policy.filesystems, function(value, key) {
                        this.push({name: key, value: value});
                    }, storagePolicyDetailsCtrl.filesystemcmds);
                }

                function createFilesystemCmds() {
                    storagePolicyDetailsCtrl.filesystemcmds.forEach(function (item) {
                        storagePolicyDetailsCtrl.policy.filesystems[item.name] = item.value;
                    });
                }

                function savePolicy() {
                    //form controller is injected by the html template
                    //checking if all validations have passed
                    if (storagePolicyDetailsCtrl.form.$valid) {
                        CRUDHelperService.hideServerError(storagePolicyDetailsCtrl);
                        CRUDHelperService.startLoader(storagePolicyDetailsCtrl);
                        createFilesystemCmds();
                        StoragePoliciesModel.save(storagePolicyDetailsCtrl.policy).then(function successCallback(result) {
                            CRUDHelperService.stopLoader(storagePolicyDetailsCtrl);
                            returnToPolicyDetails();
                        }, function errorCallback(result) {
                            CRUDHelperService.stopLoader(storagePolicyDetailsCtrl);
                            CRUDHelperService.showServerError(storagePolicyDetailsCtrl, result);
                        });
                    }

                }
                CRUDHelperService.stopLoader(storagePolicyDetailsCtrl);
                CRUDHelperService.hideServerError(storagePolicyDetailsCtrl);

                StoragePoliciesModel.getModelByKey($stateParams.key, false, 'name')
                    .then(function (policy) {
                        storagePolicyDetailsCtrl.policy = policy;
                        initializeFilesystemCmdsArray();
                        //getVolumes(false);
                    });


                storagePolicyDetailsCtrl.deletePolicy = deletePolicy;
                storagePolicyDetailsCtrl.savePolicy = savePolicy;
                storagePolicyDetailsCtrl.cancelEditing = cancelEditing;

                setMode();

                var promise;
                //Don't do autorefresh if one is already in progress
                if (!angular.isDefined(promise)) {
                    promise = $interval(function () {
                        //getVolumes(true);
                    }, ContivGlobals.REFRESH_INTERVAL);
                }

                //stop polling when user moves away from the page
                $scope.$on('$destroy', function () {
                    $interval.cancel(promise);
                });
            }]);

/**
 * Created by vjain3 on 6/2/16.
 */
angular.module("contiv.storagepolicies")
    .directive("ctvStoragepolicybasicsettings", function() {
        return {

        }
    })
    .directive("ctvStoragepolicyfilesystemsettings", function() {
        return {
            restrict: 'E',
            scope: {
                policy: '=',
                filesystemcmds: '='
            },
            link: function(scope) {
                scope.filesystems = ['ext4', 'btrfs'];
            },
            templateUrl: 'storage_policies/filesystemsettings.html'
        }
    })
    .directive("ctvStoragepolicysnapshotsettings", function() {
        return {
            restrict: 'E',
            scope: {
                policy: '='
            },
            templateUrl: 'storage_policies/snapshotsettings.html'
        }
    })
    .directive("ctvStoragepolicyrwopssettings", function() {
        return {
            restrict: 'E',
            scope: {
                policy: '='
            },
            templateUrl: 'storage_policies/rwopssettings.html'
        }
    })
    .directive("ctvStoragepolicybackenddrivers", function() {
        return {
            restrict: 'E',
            scope: {
                policy: '='
            },
            templateUrl: 'storage_policies/backenddrivers.html'
        }
    });

/**
 * Created by vjain3 on 4/18/16.
 */
angular.module('contiv.storagepolicies')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.storagepolicies.list', {
                url: '/list',
                controller: 'StoragePolicyListCtrl as storagePolicyListCtrl',
                templateUrl: 'storage_policies/storagepolicylist.html'
            })
        ;
    }])
    .controller('StoragePolicyListCtrl', ['$scope', '$interval', '$filter', 'StoragePoliciesModel', 'CRUDHelperService',
        function ($scope, $interval, $filter, StoragePoliciesModel, CRUDHelperService) {
            var storagePolicyListCtrl = this;

            function getPolicies(reload) {
                StoragePoliciesModel.get(reload)
                    .then(function successCallback(result) {
                        CRUDHelperService.stopLoader(storagePolicyListCtrl);
                        storagePolicyListCtrl.policies = $filter('orderBy')(result, 'name');
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(storagePolicyListCtrl);
                    });
            }

            //Load from cache for quick display initially
            getPolicies(false);

            var promise;
            //Don't do auto-refresh if one is already in progress
            if (!angular.isDefined(promise)) {
                promise = $interval(function () {
                    getPolicies(true);
                }, ContivGlobals.REFRESH_INTERVAL);
            }
            //stop polling when user moves away from the page
            $scope.$on('$destroy', function () {
                $interval.cancel(promise);
            });
        }]);
/**
 * Created by vjain3 on 6/3/16.
 */
angular.module('contiv.volumes')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.volumes.create', {
                url: '/create',
                templateUrl: 'volumes/volumecreate.html',
                controller: 'VolumeCreateCtrl as volumeCreateCtrl'
            })
        ;
    }])
    .controller('VolumeCreateCtrl', ['$state', '$stateParams', 'VolumesModel', 'StoragePoliciesModel', 'CRUDHelperService',
        function ($state, $stateParams, VolumesModel, StoragePoliciesModel, CRUDHelperService) {
            var volumeCreateCtrl = this;
            volumeCreateCtrl.filesystems = ['ext4', 'btrfs'];

            function returnToVolumesModel() {
                $state.go('contiv.menu.volumes.list');
            }

            function cancelCreating() {
                returnToVolumesModel();
            }

            /**
             * Get storage policies.
             */
            function getStoragePolicies() {
                StoragePoliciesModel.get().then(function (result) {
                    volumeCreateCtrl.policies = result;
                });
            }

            function applyPolicySettings() {
                volumeCreateCtrl.newVolume.policy = volumeCreateCtrl.selectedPolicy.name;
                volumeCreateCtrl.newVolume.backends = volumeCreateCtrl.selectedPolicy.backends;
                volumeCreateCtrl.newVolume.driver = volumeCreateCtrl.selectedPolicy.driver;
                volumeCreateCtrl.newVolume.create = volumeCreateCtrl.selectedPolicy.create;
                volumeCreateCtrl.newVolume.runtime = volumeCreateCtrl.selectedPolicy.runtime;
            }

            function createVolume() {
                //form controller is injected by the html template
                //checking if all validations have passed
                if (volumeCreateCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(volumeCreateCtrl);
                    CRUDHelperService.startLoader(volumeCreateCtrl);
                    applyPolicySettings();
                    VolumesModel.create(volumeCreateCtrl.newVolume).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(volumeCreateCtrl);
                        returnToVolumesModel();
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(volumeCreateCtrl);
                        CRUDHelperService.showServerError(volumeCreateCtrl, result);
                    });
                }

            }

            function resetForm() {
                CRUDHelperService.stopLoader(volumeCreateCtrl);
                CRUDHelperService.hideServerError(volumeCreateCtrl);
                volumeCreateCtrl.newVolume = {
                    "name": "",
                    "backends": {},
                    "driver": {},
                    "create": {},
                    "runtime": {}
                };
            }

            volumeCreateCtrl.createVolume = createVolume;
            volumeCreateCtrl.cancelCreating = cancelCreating;

            getStoragePolicies();

            resetForm();
        }]);

/**
 * Created by vjain3 on 4/15/16.
 */
angular.module('contiv.volumes')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.volumes.details', {
                url: '/details/:key',
                controller: 'VolumeDetailsCtrl as volumeDetailsCtrl',
                templateUrl: 'volumes/volumedetails.html'
            });
    }])
    .controller('VolumeDetailsCtrl',
        ['$state', '$stateParams', '$scope', '$interval', '$http', 'VolumesModel', 'VolumeService',
        function ($state, $stateParams, $scope, $interval, $http, VolumesModel, VolumeService) {
            var volumeDetailsCtrl = this;

            function returnToVolumes() {
                $state.go('contiv.menu.volumes.list');
            }
            function deleteVolume() {
                VolumesModel.delete(volumeDetailsCtrl.volume).then(function (result) {
                    returnToVolumes();
                });
            }

            function getVolumeInfo(reload) {
                var tokens = $stateParams.key.split('/');
                var model ={};
                model.policy = tokens[0];
                model.name = tokens[1];
                VolumesModel.getModel(model, reload)
                    .then(function (volume) {
                        volumeDetailsCtrl.volume = volume;
                        getVolumeUseInfo();
                        getVolumeSnapshots();
                    });
            }

            function getVolumeUseInfo() {
                VolumeService.getVolumeUseInfo(volumeDetailsCtrl.volume).then(function successCallback(result) {
                    volumeDetailsCtrl.volumeUse = result;
                }, function errorCallback(result) {
                    //Returns error if volume is not mounted by any container
                });
            }

            function getVolumeSnapshots() {
                VolumeService.getVolumeSnapshots(volumeDetailsCtrl.volume).then(function successCallback(result) {
                    volumeDetailsCtrl.snapshots = result;
                }, function errorCallback(result) {
                })
            }

            function copySnapshot(snapshot, newVolume) {
                VolumesModel.copy(model, snapshot, newVolume)
                    .then(function successCallback(result) {

                    }, function errorCallback(result) {

                    })
            }

            volumeDetailsCtrl.deleteVolume = deleteVolume;
            volumeDetailsCtrl.copySnapshot = copySnapshot;

            //Load from cache for quick display initially
            getVolumeInfo(false);

            var promise;
            //Don't do auto-refresh if one is already in progress
            if (!angular.isDefined(promise)) {
                promise = $interval(function () {
                    getVolumeInfo(true);
                }, ContivGlobals.REFRESH_INTERVAL);
            }
            //stop polling when user moves away from the page
            $scope.$on('$destroy', function () {
                $interval.cancel(promise);
            });

        }]);
/**
 * Created by vjain3 on 3/22/16.
 */
angular.module('contiv.volumes')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.volumes.list', {
                url: '/list',
                controller: 'VolumeListCtrl as volumeListCtrl',
                templateUrl: 'volumes/volumelist.html'
            })
        ;
    }])
    .controller('VolumeListCtrl', ['$scope', '$interval', '$filter', 'VolumesModel', 'CRUDHelperService',
        function ($scope, $interval, $filter, VolumesModel, CRUDHelperService) {
            var volumeListCtrl = this;

            function getVolumes(reload) {
                VolumesModel.get(reload)
                    .then(function successCallback(result) {
                        CRUDHelperService.stopLoader(volumeListCtrl);
                        volumeListCtrl.volumes = $filter('orderBy')(result, 'name');
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(volumeListCtrl);
                    });
            }

            //Load from cache for quick display initially
            getVolumes(false);

            var promise;
            //Don't do auto-refresh if one is already in progress
            if (!angular.isDefined(promise)) {
                promise = $interval(function () {
                    getVolumes(true);
                }, ContivGlobals.REFRESH_INTERVAL);
            }
            //stop polling when user moves away from the page
            $scope.$on('$destroy', function () {
                $interval.cancel(promise);
            });
        }]);

/**
 * Created by vjain3 on 6/5/16.
 */
angular.module('contiv.volumes')
    .factory('VolumeService', ['$http', '$q', function ($http, $q) {
        function getVolumeUseInfo(volume) {
            var deferred = $q.defer();
            var url = ContivGlobals.VOLUMES_USES_ENDPOINT
                + volume.policy
                + '/' + volume.name;
            $http.get(url).then(function successCallback(result) {
                deferred.resolve(result.data);
            }, function errorCallback(result) {
                //Returns error if volume is not mounted by any container
                deferred.reject(result.data);
            });
            return deferred.promise;
        }

        function getVolumeSnapshots(volume) {
            var deferred = $q.defer();
            var url = ContivGlobals.VOLUMES_SNAPSHOTS_ENDPOINT
                + volume.policy
                + '/' + volume.name;
            $http.get(url).then(function successCallback(result) {
                deferred.resolve(result.data);
            }, function errorCallback(result) {
                deferred.reject(result.data);
            });
            return deferred.promise;
        }

        return {
            getVolumeUseInfo: getVolumeUseInfo,
            getVolumeSnapshots: getVolumeSnapshots
        }
    }]);
/**
 * Created by vjain3 on 6/2/16.
 */
angular.module("contiv.directives")
    .directive("ctvCollapsible", function () {
        return {
            restrict: 'E',
            scope: {
                title: '@',
                collapsed: '@'
            },
            transclude: true,
            link: function (scope) {
                if (scope.collapsed === undefined) scope.collapsed = true;
            },
            templateUrl: 'components/directives/collapsible.html'
        }
    });

/**
 * Created by vjain3 on 4/28/16.
 */
angular.module("contiv.directives")
    .directive("ctvError", function () {
        return {
            restrict: 'E',
            scope: {
                header: '@',
                error: '='
            },
            link: function (scope, element, attr) {
                element.find('i').on('click', function() {
                    element.addClass('ng-hide');
                })
            },
            templateUrl: 'components/directives/errormessage.html'
        }
    });

/**
 * Created by vjain3 on 5/11/16.
 */
angular.module("contiv.directives")
    .directive("ctvNamevalue", function() {
       return {
           restrict: 'E',
           scope: {
               items: '=',
               nameheader: '@',//Field name to display for key
               valueheader: '@',//Field name to display for value
               type: '@',//'text' or 'select' to choose input or select html tag for key
               options: '='//To be used when type is 'select'
           },
           link: function(scope) {
               /**
                * Compare if two items have same name
                * @param val1
                * @param val2
                * @returns {boolean}
                */
               function compare(val1, val2) {
                   return val1.name == val2.name;
               }

               function resetNewItem() {
                   scope.newItem = {
                       name: '',
                       value: ''
                   };
               }

               function isEmptyItem(item) {
                   return (item.name === '' && item.value === '');
               }

               scope.add = function() {
                   if (isEmptyItem(scope.newItem)) return;
                   if (scope.item === undefined) {
                       scope.item = [];
                   }
                   //Removes existing item with the same name first if it exists.
                   _.pullAllWith(scope.items, [scope.newItem], compare);
                   scope.items.push(scope.newItem);
                   resetNewItem();
               };

               scope.remove = function(passedItem) {
                   _.remove(scope.items, function (item) {
                       return item.name == passedItem.name;
                   });
               };
               resetNewItem();

               if (scope.nameheader === undefined) scope.nameheader = 'Name';
               if (scope.valueheader === undefined) scope.valueheader = 'Value';
               if (scope.type === undefined) scope.type = 'text';
           },
           templateUrl: 'components/directives/namevalue.html'
       }
    });

/**
 * Created by vjain3 on 5/4/16.
 */
angular.module("contiv.directives")
    .directive("ctvTable", ['filterFilter', 'limitToFilter', function (filterFilter, limitToFilter) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                items: '=',
                filtereditems: '=',
                size: '@'
            },
            controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
                var tableCtrl = this;
                tableCtrl.chunks = [];
                tableCtrl.pageNo = 0;

                tableCtrl.size = parseInt($scope.size, 10);
                if (isNaN(tableCtrl.size)) {
                    tableCtrl.size = 12;
                }

                /**
                 * Always call showChunk with both parameters.
                 * @param pageNo
                 * @param searchText
                 * @returns {boolean}
                 */
                function showChunk(pageNo, searchText) {
                    tableCtrl.searchText = searchText;

                    if (pageNo === undefined || pageNo < 0) pageNo = 0;
                    tableCtrl.pageNo = pageNo;

                    if ($scope.items !== undefined) {//TODO: Check why items are undefined during initialization
                        var searchTextFilteredItems = filterFilter($scope.items, tableCtrl.searchText);

                        var noOfChunks = Math.ceil(searchTextFilteredItems.length / tableCtrl.size);
                        if (noOfChunks == 0) {
                            noOfChunks = 1;
                        }
                        tableCtrl.chunks = [];
                        for (var i = 0; i < noOfChunks; i++) {
                            tableCtrl.chunks.push({selected: false, pageNo: i});
                        }

                        //After filtering number of chunks could change so reset page no if it is greater than no of chunks
                        if (pageNo >= tableCtrl.chunks.length) {
                            tableCtrl.pageNo = 0;
                        }

                        tableCtrl.chunks[tableCtrl.pageNo].selected = true;

                        //Update number of chunks for pagination menu
                        if (tableCtrl.chunks.length > 5) {
                            var sliceStart, sliceEnd;
                            sliceStart = tableCtrl.pageNo - 2;
                            sliceEnd = tableCtrl.pageNo + 3;
                            if (sliceStart < 0) {
                                sliceEnd = sliceEnd - sliceStart;
                                sliceStart = 0;
                            }
                            if (sliceEnd > tableCtrl.chunks.length) {
                                sliceStart = sliceStart - (sliceEnd - tableCtrl.chunks.length);
                                sliceEnd = tableCtrl.chunks.length;
                            }
                            $scope.paginationMenu.chunks = tableCtrl.chunks.slice(sliceStart, sliceEnd);
                        } else {
                            $scope.paginationMenu.chunks = tableCtrl.chunks;
                        }

                        tableCtrl.filteredItems = limitToFilter(searchTextFilteredItems,
                            tableCtrl.size,
                            tableCtrl.pageNo * tableCtrl.size);
                        $scope.filtereditems = tableCtrl.filteredItems;
                    }
                    return false;
                };

                function showPrevChunk() {
                    var prevChunk;
                    if (tableCtrl.pageNo <= 0) {
                        prevChunk = 0;
                    } else {
                        prevChunk = tableCtrl.pageNo - 1;
                    }
                    return showChunk(prevChunk);
                }

                function showNextChunk() {
                    var nextChunk;
                    nextChunk = tableCtrl.pageNo + 1;
                    if (nextChunk > tableCtrl.chunks.length - 1) {
                        nextChunk = tableCtrl.chunks.length - 1;
                    }
                    return showChunk(nextChunk);
                }

                /**
                 * Save pagination scope to provide chunk information to pagination menu.
                 * @param menu
                 */
                function addPaginationMenu(menu) {
                    $scope.paginationMenu = menu;
                }

                tableCtrl.showChunk = showChunk;
                tableCtrl.showNextChunk = showNextChunk;
                tableCtrl.showPrevChunk = showPrevChunk;
                tableCtrl.addPaginationMenu = addPaginationMenu;
            }],
            link: function (scope, element, attrs, tableCtrl) {
                //Watch for items as they will be auto refreshed
                scope.$parent.$watch(attrs.items, function () {
                    tableCtrl.showChunk(tableCtrl.pageNo, tableCtrl.searchText);
                });

            },
            templateUrl: 'components/directives/table.html'
        }
    }])
    .directive("ctvThead", function () {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            template: '<thead ng-transclude></thead>'
        }
    })
    .directive("ctvTh", function () {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            scope: {
                class: '@'
            },
            template: '<th ng-class="class" ng-transclude></th>'
        }
    })
    .directive("ctvTbody", function () {
        return {
            restrict: 'E',
            scope: {},
            transclude: true,
            replace: true,
            template: '<tbody ng-transclude></tbody>'
        }
    })
    .directive("ctvTfoot", function () {
        return {
            restrict: 'E',
            scope: {},
            transclude: true,
            replace: true,
            template: '<tfoot ng-transclude></tfoot>'
        }
    })
    .directive("ctvTsearch", function () {
        return {
            restrict: 'E',
            require: '^^ctvTable',
            scope: {
                placeholder: '@',
                size: '@'
            },
            link: function (scope, element, attr, tableCtrl) {
                scope.showChunk = function () {
                    tableCtrl.showChunk(tableCtrl.pageNo, scope.searchText);
                }
            },
            templateUrl: 'components/directives/searchinput.html'
        }
    })
    .directive("ctvTr", function () {
        return {
            restrict: 'E',
            transclude: 'true',
            replace: true,
            scope: {},
            template: '<tr ng-transclude></tr>'
        }
    })
    .directive("ctvTd", function () {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            scope: true,
            template: '<td ng-transclude></td>'
        }
    })
    .directive("ctvTpagination", function () {
        return {
            restrict: 'E',
            require: '^^ctvTable',
            scope: {},
            link: function (scope, element, attr, tableCtrl) {
                tableCtrl.addPaginationMenu(scope);
                //showChunk() will calculate and set chunks in scope
                tableCtrl.showChunk(tableCtrl.pageNo, tableCtrl.searchText);
                scope.showChunk = function (pageNo) {
                    tableCtrl.showChunk(pageNo, tableCtrl.searchText);
                };
                scope.showPrevChunk = tableCtrl.showPrevChunk;
                scope.showNextChunk = tableCtrl.showNextChunk;
            },
            templateUrl: 'components/directives/paginationmenu.html'
        }
    });

/**
 * Created by vjain3 on 3/11/16.
 */
angular.module('contiv.models')
    .factory('ApplicationGroupsModel', ['$http', '$q', function ($http, $q) {
        var groupsmodel = new Collection($http, $q, ContivGlobals.APPLICATIONGROUPS_ENDPOINT);

        /**
         * Generate key for application group
         * @param group
         */
        groupsmodel.generateKey = function (group) {
            return group.tenantName + ':' + group.groupName;
        };

        return groupsmodel;
    }]);
/**
 * BaseCollection class that does just fetch of the objects.
 * @param $http
 * @param $q
 * @param url Used for doing HTTP GET and fetch objects from server
 * @constructor
 */
function BaseCollection($http, $q, url) {
    this.models = [];
    this.$http = $http;
    this.$q = $q;
    this.url = url;
}

BaseCollection.prototype.extract = function (result) {
    return result.data;
};

/**
 *
 * @param reload Optional. Default is false
 * @returns {*}
 */
BaseCollection.prototype.get = function (reload) {
    var collection = this;
    if (reload === undefined) reload = false;
    return (!reload && collection.models.length > 0) ?
        collection.$q.when(collection.models) : collection.$http.get(collection.url)
        .then(function (result) {
            collection.models = collection.extract(result);
            return collection.models;
        });
};

/**
 *
 * @param key
 * @param reload Optional. Default is false
 * @param keyname
 * @returns {*}
 */
BaseCollection.prototype.getModelByKey = function (key, reload, keyname) {
    var collection = this;
    if (reload === undefined) reload = false;
    if (keyname === undefined) keyname = 'key';

    var deferred = collection.$q.defer();

    function findModel() {
        return _.find(collection.models, function (c) {
            return c[keyname] == key;
        })
    }

    if (!reload && collection.models.length > 0) {
        deferred.resolve(findModel());
    } else {
        collection.get(reload)
            .then(function () {
                deferred.resolve(findModel());
            });
    }

    return deferred.promise;
};

/**
 *
 * @param model
 * @param reload Optional. Default is false
 * @returns {*}
 */
BaseCollection.prototype.getModel = function (model, reload) {
    var collection = this;
    if (reload === undefined) reload = false;

    var deferred = collection.$q.defer();

    function findModel() {
        return _.find(collection.models, model)
    }

    if (!reload && collection.models.length > 0) {
        deferred.resolve(findModel());
    } else {
        collection.get(reload)
            .then(function () {
                deferred.resolve(findModel());
            });
    }

    return deferred.promise;
};


/**
 * Extends BaseCollection class to do create, update and delete using POST, PUT and DELETE verbs.
 * @param $http
 * @param $q
 * @param url Used for doing HTTP GET and fetch objects from server
 * @constructor
 */
function Collection($http, $q, url) {
    BaseCollection.call(this, $http, $q, url);
}

Collection.prototype = Object.create(BaseCollection.prototype);

/**
 *
 * @param model
 * @param url Optional if not passed it is constructed using key and url passed in constructor
 * @returns {*}
 */
Collection.prototype.create = function (model, url) {
    var collection = this;
    var deferred = collection.$q.defer();
    if (url === undefined) url = collection.url + model.key + '/';
    collection.$http.post(url, model)
        .then(function successCallback(response) {
            var responseData = collection.extract(response);
            //For rest endpoints that do not return created json object in response
            if ((responseData === undefined) || (responseData === '')) {
                responseData = model;
            }
            //collection.models.push(collection.extract(response));
            collection.models.push(responseData);
            deferred.resolve(collection.extract(response));
        }, function errorCallback(response) {
            deferred.reject(collection.extract(response));
        });
    return deferred.promise;
};

/**
 * This is for netmaster specific endpoints and used by netmaster objects only.
 * TODO: Generalize
 * @param model
 * @param url Optional
 * @returns {*}
 */
Collection.prototype.save = function (model) {
    var collection = this;
    var deferred = collection.$q.defer();
    var url = collection.url + model.key + '/';
    collection.$http.put(url, model)
        .then(function successCallback(response) {
            _.remove(collection.models, function (n) {
                return n.key == model.key;
            });
            collection.models.push(collection.extract(response));
            deferred.resolve(collection.extract(response));
        }, function errorCallback(response) {
            deferred.reject(collection.extract(response));
        });
    return deferred.promise;
};

/**
 * This is for netmaster specific endpoints and used by netmaster objects only.
 * TODO: Generalize
 * @param model
 * @returns {*}
 */
Collection.prototype.delete = function (model) {
    var collection = this;
    var deferred = collection.$q.defer();
    var url = collection.url + model.key + '/';
    collection.$http.delete(url)
        .then(function successCallback(response) {
            _.remove(collection.models, function (n) {
                return n.key == model.key;
            });
            deferred.resolve(collection.extract(response));
        }, function errorCallback(response) {
            deferred.reject(collection.extract(response));
        });
    return deferred.promise;
};

/**
 *
 * @param key
 * @param keyname
 * @param url Optional if not passed it is constructed using key and url passed in constructor
 * @returns {*}
 */
Collection.prototype.deleteUsingKey = function (key, keyname, url) {
    var collection = this;
    if (keyname === undefined) keyname = 'key';

    var deferred = collection.$q.defer();
    if (url === undefined) url = collection.url + key + '/';
    collection.$http.delete(url)
        .then(function successCallback(response) {
            _.remove(collection.models, function (n) {
                return n[keyname] == key;
            });
            deferred.resolve(collection.extract(response));
        }, function errorCallback(response) {
            deferred.reject(collection.extract(response));
        });
    return deferred.promise;
};
angular.module('contiv.models')
    .factory('NetworksModel', ['$http', '$q', function ($http, $q) {
        return new Collection($http, $q, ContivGlobals.NETWORKS_ENDPOINT);
    }]);

/**
 * Created by vjain3 on 3/22/16.
 */
angular.module('contiv.models')
    .factory('NodesModel', ['$http', '$q', function ($http, $q) {
        var nodesmodel = new NodesCollection($http, $q);
        return nodesmodel;
    }]);

/**
 * NodesCollection extends from BaseCollection. It overrides extract() and adds commission, decommission, upgrade and
 * discover methods
 * @param $http
 * @param $q
 * @constructor
 */
function NodesCollection($http, $q) {
    BaseCollection.call(this, $http, $q, ContivGlobals.NODES_LIST_ENDPOINT);
}

NodesCollection.prototype = Object.create(BaseCollection.prototype);

NodesCollection.prototype.extract = function (result) {
    //Convert to array if the returned collection is not an array
    return _.map(result.data, function (value, key) {
        value.key = key;
        return value;
    });
};


/**
 *
 * @param key
 * @param extraVars JSON object of extra ansible and environment variables to be passed while commissioning a node
 * {
     * "env":{"http_proxy":"http://proxy.esl.cisco.com:8080", "https_proxy":"http://proxy.esl.cisco.com:8080"},
     * "control_interface": "eth1", "service_vip": "192.168.2.252", "validate_certs": "false", "netplugin_if" : "eth2"
     * }
 * @returns {*}
 */
NodesCollection.prototype.commission = function (nodeOpsObj) {
    var nodescollection = this;
    var deferred = nodescollection.$q.defer();
    var url = ContivGlobals.NODES_COMMISSION_ENDPOINT;
    nodescollection.$http.post(url, nodeOpsObj, {
            'headers': {
                'Content-Type': 'application/json'
            }
        })
        .then(function successCallback(response) {
            //Server doesn't return any json in response
            deferred.resolve();
        }, function errorCallback(response) {
            deferred.reject(response);
        });
    return deferred.promise;
};

NodesCollection.prototype.decommission = function (nodeOpsObj) {
    var nodescollection = this;
    var deferred = nodescollection.$q.defer();
    var url = ContivGlobals.NODES_DECOMMISSION_ENDPOINT;
    nodescollection.$http.post(url, nodeOpsObj, {
            'headers': {
                'Content-Type': 'application/json'
            }
        })
        .then(function successCallback(response) {
            deferred.resolve();
        }, function errorCallback(response) {
            deferred.reject(response);
        });
    return deferred.promise;
};

NodesCollection.prototype.upgrade = function (nodeOpsObj) {
    var nodescollection = this;
    var deferred = nodescollection.$q.defer();
    var url = ContivGlobals.NODES_MAINTENANCE_ENDPOINT;
    nodescollection.$http.post(url, nodeOpsObj, {
            'headers': {
                'Content-Type': 'application/json'
            }
        })
        .then(function successCallback(response) {
            deferred.resolve();
        }, function errorCallback(response) {
            deferred.reject(response);
        });
    return deferred.promise;
};

/**
 *
 * @param ip
 * @param extraVars JSON object of extra ansible and environment variables to be passed while discovering a node
 * {
     * "env":{"http_proxy":"http://proxy.esl.cisco.com:8080", "https_proxy":"http://proxy.esl.cisco.com:8080"},
     * "control_interface": "eth1", "service_vip": "192.168.2.252", "cluster-name": "contiv", "node-label" : "node1"
     * }
 * @returns {*}
 */
NodesCollection.prototype.discover = function (nodeOpsObj) {
    var nodescollection = this;
    var deferred = nodescollection.$q.defer();
    var url = ContivGlobals.NODES_DISCOVER_ENDPOINT;
    nodescollection.$http.post(url, nodeOpsObj, {
            'headers': {
                'Content-Type': 'application/json'
            }
        })
        .then(function successCallback(response) {
            deferred.resolve();
        }, function errorCallback(response) {
            deferred.reject(response);
        });
    return deferred.promise;
};
angular.module('contiv.models')
    .factory('OrganizationsModel', ['$http', '$q', function ($http, $q) {
        return new Collection($http, $q, ContivGlobals.ORGANIZATIONS_ENDPOINT);
    }]);
angular.module('contiv.models')
    .factory('PoliciesModel', ['$http', '$q', function ($http, $q) {
        var policiesmodel = new Collection($http, $q, ContivGlobals.POLICIES_ENDPOINT);

        /**
         * Generate policy key to save policy on server
         * @param policy
         * @returns {string}
         */
        policiesmodel.generateKey = function (policy) {
            return policy.tenantName + ':' + policy.policyName;
        };

        return policiesmodel;
    }]);

/**
 * Created by vjain3 on 3/8/16.
 */
angular.module('contiv.models')
    .factory('RulesModel', ['$http', '$q', function ($http, $q) {
        var rulesmodel = new Collection($http, $q, ContivGlobals.RULES_ENDPOINT);

        /**
         * Get incoming rules for a given policy and a tenant
         * @param policyName
         * @param tenantName
         * @returns {*|webdriver.promise.Promise}
         */
        rulesmodel.getIncomingRules = function (policyName, tenantName) {
            return rulesmodel.get().then(function (result) {
                return _.filter(result, {
                    'policyName': policyName,
                    'direction': 'in',
                    'tenantName': tenantName
                });

            });
        };

        /**
         * Get outgoing rules for a given policy and a tenant
         * @param policyName
         * @param tenantName
         * @returns {*|webdriver.promise.Promise}
         */
        rulesmodel.getOutgoingRules = function (policyName, tenantName) {
            return rulesmodel.get().then(function (result) {
                return _.filter(result, {
                    'policyName': policyName,
                    'direction': 'out',
                    'tenantName': tenantName
                });

            });
        };

        /**
         * Generate rule key to save rule on server
         * @param rule
         * @returns {string}
         */
        rulesmodel.generateKey = function (rule) {
            return rule.tenantName + ':' + rule.policyName + ':' + rule.ruleId;
        };

        return rulesmodel;
    }]);
/**
 * Created by vjain3 on 5/11/16.
 */
angular.module('contiv.models')
    .factory('ServicelbsModel', ['$http', '$q', function ($http, $q) {
        return new Collection($http, $q, ContivGlobals.SERVICELBS_ENDPOINT);
    }]);

/**
 * Created by vjain3 on 4/18/16.
 */
angular.module('contiv.models')
    .factory('StoragePoliciesModel', ['$http', '$q', function ($http, $q) {
        /**
         * StoragePoliciesCollection extends from BaseCollection
         * @param $http
         * @param $q
         * @constructor
         */
        function StoragePoliciesCollection($http, $q) {
            Collection.call(this, $http, $q, ContivGlobals.STORAGEPOLICIES_ENDPOINT);
        }

        StoragePoliciesCollection.prototype = Object.create(Collection.prototype);

        StoragePoliciesCollection.prototype.create = function (model) {
            var collection = this;
            var url = collection.url + model.name;
            return Collection.prototype.create.call(collection, model, url);
        };

        StoragePoliciesCollection.prototype.save = function (model) {
            var collection = this;
            var deferred = collection.$q.defer();
            var url = collection.url + model.name;
            collection.$http.post(url, model)
                .then(function successCallback(response) {
                    _.remove(collection.models, function (n) {
                        return n.name == model.name;
                    });
                    collection.models.push(model);
                    deferred.resolve(collection.extract(response));
                }, function errorCallback(response) {
                    deferred.reject(collection.extract(response));
                });
            return deferred.promise;
        };
        var policiesmodel = new StoragePoliciesCollection($http, $q);
        return policiesmodel;
    }]);
/**
 * Created by vjain3 on 3/22/16.
 */
angular.module('contiv.models')
    .factory('VolumesModel', ['$http', '$q', function ($http, $q) {
        /**
         * VolumesCollection extends from BaseCollection
         * @param $http
         * @param $q
         * @constructor
         */
        function VolumesCollection($http, $q) {
            Collection.call(this, $http, $q, ContivGlobals.VOLUMES_ENDPOINT);
        }

        VolumesCollection.prototype = Object.create(Collection.prototype);

        VolumesCollection.prototype.delete = function (model) {
            var volumescollection = this;
            var deferred = volumescollection.$q.defer();
            var url = ContivGlobals.VOLUMES_DELETE_ENDPOINT;
            //delete endpoint expects volume property in addition to policy. TODO ask to be fixed
            model.volume = model.name;
            var config = {
                data: model
            };
            volumescollection.$http.delete(url, config)
                .then(function successCallback(response) {
                    _.remove(volumescollection.models, function (n) {
                        return (n.name == model.name && n.policy == model.policy);
                    });
                    deferred.resolve(volumescollection.extract(response));
                }, function errorCallback(response) {
                    deferred.reject(volumescollection.extract(response));
                });
            return deferred.promise;
        };

        VolumesCollection.prototype.create = function (model) {
            var collection = this;
            var url = ContivGlobals.VOLUMES_CREATE_ENDPOINT;
            return Collection.prototype.create.call(collection, model, url);
        };

        VolumesCollection.prototype.copy = function (model, snapshot, newVolume) {
            var collection = this;
            var deferred = collection.$q.defer();
            var url = ContivGlobals.VOLUMES_COPYSNAPSHOTS_ENDPOINT;
            var volcopymodel = {
                volume: model.name,
                policy: model.policy,
                Options: {
                    target: newVolume,
                    snapshot: snapshot
                }
            };
            collection.$http.post(url, volcopymodel)
                .then(function successCallback(response) {
                    //TODO: Add the new volume to the collection
                    //collection.models.push(collection.extract(response));
                    deferred.resolve(collection.extract(response));
                }, function errorCallback(response) {
                    deferred.reject(collection.extract(response));
                });
            return deferred.promise;
        };

        var volumesmodel = new VolumesCollection($http, $q);
        return volumesmodel;
    }]);
/**
 * Created by vjain3 on 4/29/16.
 */
angular.module('contiv.utils')
    .factory('CRUDHelperService', function () {
            function startLoader(controller) {
                controller.showLoader = true;
            }

            function stopLoader(controller) {
                controller.showLoader = false;
            }

            function showServerError(controller, message) {
                controller.showServerError = true;
                controller.serverErrorMessage = message;
            }

            function hideServerError(controller) {
                controller.showServerError = false;
            }

            return {
                startLoader: startLoader,
                stopLoader: stopLoader,
                showServerError: showServerError,
                hideServerError: hideServerError
            }
        }
    );

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvbW9kdWxlLmpzIiwibW9kZWxzL21vZHVsZS5qcyIsInV0aWxzL21vZHVsZS5qcyIsImFwcGxpY2F0aW9uZ3JvdXBzL21vZHVsZS5qcyIsImRhc2hib2FyZC9tb2R1bGUuanMiLCJsb2dpbi9tb2R1bGUuanMiLCJtZW51L21vZHVsZS5qcyIsIm5ldHdvcmtfcG9saWNpZXMvbW9kdWxlLmpzIiwibmV0d29ya3MvbW9kdWxlLmpzIiwibm9kZXMvbW9kdWxlLmpzIiwib3JnYW5pemF0aW9ucy9tb2R1bGUuanMiLCJzZXJ2aWNlX2xicy9tb2R1bGUuanMiLCJzdG9yYWdlX3BvbGljaWVzL21vZHVsZS5qcyIsInZvbHVtZXMvbW9kdWxlLmpzIiwiYXBwLmpzIiwiYXBwbGljYXRpb25ncm91cHMvYXBwbGljYXRpb25ncm91cGNyZWF0ZWN0cmwuanMiLCJhcHBsaWNhdGlvbmdyb3Vwcy9hcHBsaWNhdGlvbmdyb3VwZGV0YWlsc2N0cmwuanMiLCJhcHBsaWNhdGlvbmdyb3Vwcy9hcHBsaWNhdGlvbmdyb3VwbGlzdGN0cmwuanMiLCJhcHBsaWNhdGlvbmdyb3Vwcy9hcHBsaWNhdGlvbmdyb3Vwc2VydmljZS5qcyIsImRhc2hib2FyZC9kYXNoYm9hcmRjdHJsLmpzIiwibG9naW4vbG9naW5jdHJsLmpzIiwibWVudS9tZW51Q3RybC5qcyIsIm5ldHdvcmtfcG9saWNpZXMvaXNvbGF0aW9ucG9saWN5Y3JlYXRlY3RybC5qcyIsIm5ldHdvcmtfcG9saWNpZXMvaXNvbGF0aW9ucG9saWN5ZGV0YWlsc2N0cmwuanMiLCJuZXR3b3JrX3BvbGljaWVzL2lzb2xhdGlvbnBvbGljeWxpc3RjdHJsLmpzIiwibmV0d29ya19wb2xpY2llcy9uZXR3b3JrcG9saWNpZXN0YWJzY3RybC5qcyIsIm5ldHdvcmtzL25ldHdvcmtjcmVhdGVjdHJsLmpzIiwibmV0d29ya3MvbmV0d29ya2RldGFpbHNjdHJsLmpzIiwibmV0d29ya3MvbmV0d29ya2xpc3RjdHJsLmpzIiwibm9kZXMvbm9kZWNvbW1pc3Npb25jdHJsLmpzIiwibm9kZXMvbm9kZWRldGFpbHNjdHJsLmpzIiwibm9kZXMvbm9kZWxpc3RjdHJsLmpzIiwib3JnYW5pemF0aW9ucy9vcmdhbml6YXRpb25jcmVhdGVjdHJsLmpzIiwib3JnYW5pemF0aW9ucy9vcmdhbml6YXRpb25kZXRhaWxzY3RybC5qcyIsIm9yZ2FuaXphdGlvbnMvb3JnYW5pemF0aW9ubGlzdGN0cmwuanMiLCJzZXJ2aWNlX2xicy9zZXJ2aWNlbGJjcmVhdGVjdHJsLmpzIiwic2VydmljZV9sYnMvc2VydmljZWxiZGV0YWlsc2N0cmwuanMiLCJzZXJ2aWNlX2xicy9zZXJ2aWNlbGJsaXN0Y3RybC5qcyIsInNlcnZpY2VfbGJzL3NlcnZpY2VsYnBvcnRzZGlyZWN0aXZlLmpzIiwic3RvcmFnZV9wb2xpY2llcy9zdG9yYWdlcG9saWN5Y3JlYXRlY3RybC5qcyIsInN0b3JhZ2VfcG9saWNpZXMvc3RvcmFnZXBvbGljeWRldGFpbHNjdHJsLmpzIiwic3RvcmFnZV9wb2xpY2llcy9zdG9yYWdlcG9saWN5ZGlyZWN0aXZlLmpzIiwic3RvcmFnZV9wb2xpY2llcy9zdG9yYWdlcG9saWN5bGlzdGN0cmwuanMiLCJ2b2x1bWVzL3ZvbHVtZWNyZWF0ZWN0cmwuanMiLCJ2b2x1bWVzL3ZvbHVtZWRldGFpbHNjdHJsLmpzIiwidm9sdW1lcy92b2x1bWVsaXN0Y3RybC5qcyIsInZvbHVtZXMvdm9sdW1lc2VydmljZS5qcyIsImNvbXBvbmVudHMvZGlyZWN0aXZlcy9jb2xsYXBzaWJsZWRpcmVjdGl2ZS5qcyIsImNvbXBvbmVudHMvZGlyZWN0aXZlcy9lcnJvcm1lc3NhZ2VkaXJlY3RpdmUuanMiLCJjb21wb25lbnRzL2RpcmVjdGl2ZXMvbmFtZXZhbHVlZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9kaXJlY3RpdmVzL3RhYmxlZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9tb2RlbHMvYXBwbGljYXRpb25ncm91cHNtb2RlbC5qcyIsImNvbXBvbmVudHMvbW9kZWxzL2NvbGxlY3Rpb24uanMiLCJjb21wb25lbnRzL21vZGVscy9uZXR3b3Jrc21vZGVsLmpzIiwiY29tcG9uZW50cy9tb2RlbHMvbm9kZXNtb2RlbC5qcyIsImNvbXBvbmVudHMvbW9kZWxzL29yZ2FuaXphdGlvbnNtb2RlbC5qcyIsImNvbXBvbmVudHMvbW9kZWxzL3BvbGljaWVzbW9kZWwuanMiLCJjb21wb25lbnRzL21vZGVscy9ydWxlc21vZGVsLmpzIiwiY29tcG9uZW50cy9tb2RlbHMvc2VydmljZWxic21vZGVsLmpzIiwiY29tcG9uZW50cy9tb2RlbHMvc3RvcmFnZXBvbGljaWVzbW9kZWwuanMiLCJjb21wb25lbnRzL21vZGVscy92b2x1bWVzbW9kZWwuanMiLCJjb21wb25lbnRzL3V0aWxzL2NydWRoZWxwZXJzZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDblVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0SEE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKFwiY29udGl2LmRpcmVjdGl2ZXNcIiwgW10pOyIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gMy8xNC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5tb2RlbHMnLCBbXSk7XG52YXIgQ29udGl2R2xvYmFscyA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvL1JFU1QgZW5kcG9pbnRzIGZvciBcbiAgICAgICAgJ05FVFdPUktTX0VORFBPSU5UJzogJy9uZXRtYXN0ZXIvYXBpL3YxL25ldHdvcmtzLycsXG4gICAgICAgICdQT0xJQ0lFU19FTkRQT0lOVCc6ICcvbmV0bWFzdGVyL2FwaS92MS9wb2xpY3lzLycsXG4gICAgICAgICdSVUxFU19FTkRQT0lOVCc6ICcvbmV0bWFzdGVyL2FwaS92MS9ydWxlcy8nLFxuICAgICAgICAnQVBQTElDQVRJT05HUk9VUFNfRU5EUE9JTlQnOiAnL25ldG1hc3Rlci9hcGkvdjEvZW5kcG9pbnRHcm91cHMvJyxcbiAgICAgICAgJ1NFUlZJQ0VMQlNfRU5EUE9JTlQnOiAnL25ldG1hc3Rlci9hcGkvdjEvc2VydmljZUxCcy8nLFxuICAgICAgICAnT1JHQU5JWkFUSU9OU19FTkRQT0lOVCc6Jy9uZXRtYXN0ZXIvYXBpL3YxL3RlbmFudHMvJyxcblxuICAgICAgICAvL1JFU1QgZW5kcG9pbnRzIGZvciBWT0xNQVNURVJcbiAgICAgICAgJ1ZPTFVNRVNfRU5EUE9JTlQnOiAnL3ZvbG1hc3Rlci92b2x1bWVzLycsXG4gICAgICAgICdWT0xVTUVTX0NSRUFURV9FTkRQT0lOVCc6ICcvdm9sbWFzdGVyL3ZvbHVtZXMvY3JlYXRlLycsXG4gICAgICAgICdWT0xVTUVTX0RFTEVURV9FTkRQT0lOVCc6ICcvdm9sbWFzdGVyL3ZvbHVtZXMvcmVtb3ZlLycsXG4gICAgICAgICdWT0xVTUVTX0NPUFlTTkFQU0hPVFNfRU5EUE9JTlQnOiAnL3ZvbG1hc3Rlci92b2x1bWVzL2NvcHkvJyxcbiAgICAgICAgJ1ZPTFVNRVNfVVNFU19FTkRQT0lOVCc6ICcvdm9sbWFzdGVyL3VzZXMvbW91bnRzLycsXG4gICAgICAgICdWT0xVTUVTX1NOQVBTSE9UU19FTkRQT0lOVCc6ICcvdm9sbWFzdGVyL3NuYXBzaG90cy8nLFxuXG4gICAgICAgICdTVE9SQUdFUE9MSUNJRVNfRU5EUE9JTlQnOiAnL3ZvbG1hc3Rlci9wb2xpY2llcy8nLFxuXG5cbiAgICAgICAgLy9SRVNUIGVuZHBvaW50cyBmb3IgQ0xVU1RFUlxuICAgICAgICAnTk9ERVNfTElTVF9FTkRQT0lOVCc6ICcvaW5mby9ub2RlcycsXG4gICAgICAgICdOT0RFU19ESVNDT1ZFUl9FTkRQT0lOVCc6ICcvZGlzY292ZXIvbm9kZXMnLFxuICAgICAgICAnTk9ERVNfQ09NTUlTU0lPTl9FTkRQT0lOVCc6ICcvY29tbWlzc2lvbi9ub2RlcycsXG4gICAgICAgICdOT0RFU19ERUNPTU1JU1NJT05fRU5EUE9JTlQnOiAnL2RlY29tbWlzc2lvbi9ub2RlcycsXG4gICAgICAgICdOT0RFU19NQUlOVEVOQU5DRV9FTkRQT0lOVCc6ICcvbWFpbnRlbmFuY2Uvbm9kZXMnLFxuXG4gICAgICAgIC8vUmVmcmVzaCBpbnRlcnZhbCBpbiBtaWxsaXNlY29uZHNcbiAgICAgICAgJ1JFRlJFU0hfSU5URVJWQUwnOiA1MDAwLFxuXG4gICAgICAgIC8vUmVnRXggZm9yIHZhbGlkYXRpb25cbiAgICAgICAgJ0NJRFJfUkVHRVgnIDogJ14oKFswLTldfFsxLTldWzAtOV18MVswLTldezJ9fDJbMC00XVswLTldfDI1WzAtNV0pXFwuKXszfShbMC05XXxbMS05XVswLTldfDFbMC05XXsyfXwyWzAtNF1bMC05XXwyNVswLTVdKShcXC8oWzAtOV18WzEtMl1bMC05XXwzWzAtMl0pKSQnXG4gICAgfVxufSkoKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xOC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi51dGlscycsIFtdKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTgvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuYXBwbGljYXRpb25ncm91cHMnLCBbJ2NvbnRpdi5tb2RlbHMnLCAnY29udGl2LmRpcmVjdGl2ZXMnLCAnY29udGl2LnV0aWxzJ10pXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LmFwcGxpY2F0aW9uZ3JvdXBzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9hcHBsaWNhdGlvbmdyb3VwcycsXG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IHVpLXZpZXcgY2xhc3M9XCJ1aSBjb250YWluZXJcIi8+J1xuICAgICAgICAgICAgfSlcbiAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTgvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuZGFzaGJvYXJkJywgWydjb250aXYubW9kZWxzJ10pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzE5LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LmxvZ2luJywgWydjb250aXYudXRpbHMnXSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzE5LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm1lbnUnLCBbXSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzE4LzE2LlxuICovXG5cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubmV0d29ya3BvbGljaWVzJywgWydjb250aXYubW9kZWxzJywgJ2NvbnRpdi5kaXJlY3RpdmVzJywgJ2NvbnRpdi51dGlscyddKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTgvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubmV0d29ya3MnLCBbJ2NvbnRpdi5tb2RlbHMnLCAnY29udGl2LmRpcmVjdGl2ZXMnLCAnY29udGl2LnV0aWxzJ10pXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3JrcycsIHtcbiAgICAgICAgICAgIHVybDogJy9uZXR3b3JrcycsXG4gICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnPGRpdiB1aS12aWV3IGNsYXNzPVwidWkgY29udGFpbmVyXCIvPidcbiAgICAgICAgfSlcbiAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTgvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubm9kZXMnLCBbJ2NvbnRpdi5tb2RlbHMnLCAnY29udGl2LmRpcmVjdGl2ZXMnLCAnY29udGl2LnV0aWxzJ10pXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5vZGVzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9ub2RlcycsXG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IHVpLXZpZXcgY2xhc3M9XCJ1aSBjb250YWluZXJcIi8+J1xuICAgICAgICAgICAgfSlcbiAgICB9XSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2Lm9yZ2FuaXphdGlvbnMnLCBbJ2NvbnRpdi5tb2RlbHMnLCAnY29udGl2LmRpcmVjdGl2ZXMnLCAnY29udGl2LnV0aWxzJ10pXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdjb250aXYubWVudS5vcmdhbml6YXRpb25zJywge1xuICAgICAgICAgICAgdXJsOiAnL29yZ2FuaXphdGlvbnMnLFxuICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJzxkaXYgdWktdmlldyBjbGFzcz1cInVpIGNvbnRhaW5lclwiLz4nXG4gICAgICAgIH0pXG4gICAgfV0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xOC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5zZXJ2aWNlbGJzJywgWydjb250aXYubW9kZWxzJywgJ2NvbnRpdi5kaXJlY3RpdmVzJywgJ2NvbnRpdi51dGlscyddKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5zZXJ2aWNlbGJzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9zZXJ2aWNlbGJzJyxcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJzxkaXYgdWktdmlldyBjbGFzcz1cInVpIGNvbnRhaW5lclwiLz4nXG4gICAgICAgICAgICB9KVxuICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xOC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5zdG9yYWdlcG9saWNpZXMnLCBbJ2NvbnRpdi5tb2RlbHMnLCAnY29udGl2LmRpcmVjdGl2ZXMnLCAnY29udGl2LnV0aWxzJ10pXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnN0b3JhZ2Vwb2xpY2llcycsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvc3RvcmFnZXBvbGljaWVzJyxcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJzxkaXYgdWktdmlldyBjbGFzcz1cInVpIGNvbnRhaW5lclwiLz4nXG4gICAgICAgICAgICB9KVxuICAgIH1dKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTgvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYudm9sdW1lcycsIFsnY29udGl2Lm1vZGVscycsICdjb250aXYuZGlyZWN0aXZlcycsICdjb250aXYudXRpbHMnXSlcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUudm9sdW1lcycsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvdm9sdW1lcycsXG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IHVpLXZpZXcgY2xhc3M9XCJ1aSBjb250YWluZXJcIi8+J1xuICAgICAgICAgICAgfSlcbiAgICB9XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cblxuLy8gRGVjbGFyZSBhcHAgbGV2ZWwgbW9kdWxlIHdoaWNoIGRlcGVuZHMgb24gdmlld3MsIGFuZCBjb21wb25lbnRzXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2QXBwJywgW1xuICAgICAgICAndWkucm91dGVyJyxcbiAgICAgICAgJ2NvbnRpdi5sb2dpbicsXG4gICAgICAgICdjb250aXYubWVudScsXG4gICAgICAgICdjb250aXYuZGFzaGJvYXJkJyxcbiAgICAgICAgJ2NvbnRpdi5hcHBsaWNhdGlvbmdyb3VwcycsXG4gICAgICAgICdjb250aXYubmV0d29ya3MnLFxuICAgICAgICAnY29udGl2Lm5ldHdvcmtwb2xpY2llcycsXG4gICAgICAgICdjb250aXYuc3RvcmFnZXBvbGljaWVzJyxcbiAgICAgICAgJ2NvbnRpdi5zZXJ2aWNlbGJzJyxcbiAgICAgICAgJ2NvbnRpdi52b2x1bWVzJyxcbiAgICAgICAgJ2NvbnRpdi5ub2RlcycsXG4gICAgICAgICdjb250aXYub3JnYW5pemF0aW9ucydcbiAgICBdKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAvL2Fic3RyYWN0IHN0YXRlIHNlcnZlcyBhcyBhIFBMQUNFSE9MREVSIG9yIE5BTUVTUEFDRSBmb3IgYXBwbGljYXRpb24gc3RhdGVzXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdicsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnPGRpdiB1aS12aWV3IGNsYXNzPVwidWkgZmx1aWQgY29udGFpbmVyXCIvPidcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcblxuICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzExLzE2LlxuICovXG4vKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMTAvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuYXBwbGljYXRpb25ncm91cHMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5hcHBsaWNhdGlvbmdyb3Vwcy5jcmVhdGUnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2NyZWF0ZScsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0FwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsIGFzIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcGxpY2F0aW9uZ3JvdXBzL2FwcGxpY2F0aW9uZ3JvdXBjcmVhdGUuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignQXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwnLCBbXG4gICAgICAgICckc3RhdGUnLFxuICAgICAgICAnQXBwbGljYXRpb25Hcm91cHNNb2RlbCcsXG4gICAgICAgICdOZXR3b3Jrc01vZGVsJyxcbiAgICAgICAgJ1BvbGljaWVzTW9kZWwnLFxuICAgICAgICAnUnVsZXNNb2RlbCcsXG4gICAgICAgICdBcHBsaWNhdGlvbkdyb3VwU2VydmljZScsXG4gICAgICAgICdDUlVESGVscGVyU2VydmljZScsXG4gICAgICAgIGZ1bmN0aW9uICgkc3RhdGUsXG4gICAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbkdyb3Vwc01vZGVsLFxuICAgICAgICAgICAgICAgICAgTmV0d29ya3NNb2RlbCxcbiAgICAgICAgICAgICAgICAgIFBvbGljaWVzTW9kZWwsXG4gICAgICAgICAgICAgICAgICBSdWxlc01vZGVsLFxuICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsID0gdGhpcztcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLm5ldHdvcmtzID0gW107XG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5pc29sYXRpb25Qb2xpY2llcyA9IFtdO1xuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuYXBwbGljYXRpb25Hcm91cCA9IHt9O1xuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuc2VsZWN0ZWROZXR3b3JrID0ge307XG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5zZWxlY3RlZFBvbGljeSA9IHt9O1xuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuc2VsZWN0ZWRQb2xpY2llcyA9IFtdO1xuXG4gICAgICAgICAgICAvL1RvIGRpc3BsYXkgaW5jb21pbmcgYW5kIG91dGdvaW5nIHJ1bGVzIGZvciBzZWxlY3RlZCBwb2xpY2llc1xuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuaW5jb21pbmdSdWxlcyA9IFtdO1xuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwub3V0Z29pbmdSdWxlcyA9IFtdO1xuXG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5pc29sYXRpb25Qb2xpY2llc1Zpc2libGUgPSBmYWxzZTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9BcHBsaWNhdGlvbkdyb3VwKCkge1xuICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUuYXBwbGljYXRpb25ncm91cHMubGlzdCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjYW5jZWxDcmVhdGluZygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5Ub0FwcGxpY2F0aW9uR3JvdXAoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXQgbmV0d29ya3MgZm9yIHRoZSBnaXZlbiB0ZW5hbnQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldE5ldHdvcmtzKCkge1xuICAgICAgICAgICAgICAgIE5ldHdvcmtzTW9kZWwuZ2V0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLm5ldHdvcmtzID0gXy5maWx0ZXIocmVzdWx0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAndGVuYW50TmFtZSc6ICdkZWZhdWx0Jy8vVE9ETzogUmVtb3ZlIGhhcmRjb2RlZCB0ZW5hbnQuXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdldCBwb2xpY2llcyBmb3IgdGhlIGdpdmVuIHRlbmFudC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0SXNvbGF0aW9uUG9saWNpZXMoKSB7XG4gICAgICAgICAgICAgICAgUG9saWNpZXNNb2RlbC5nZXQoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuaXNvbGF0aW9uUG9saWNpZXMgPSBfLmZpbHRlcihyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZW5hbnROYW1lJzogJ2RlZmF1bHQnLy9UT0RPOiBSZW1vdmUgaGFyZGNvZGVkIHRlbmFudC5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQWRkIHBvbGljeSB0byBuZXcgYXBwbGljYXRpb24gZ3JvdXBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gYWRkSXNvbGF0aW9uUG9saWN5KCkge1xuICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uR3JvdXBTZXJ2aWNlLmFkZElzb2xhdGlvblBvbGljeShhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmVtb3ZlIHBvbGljeSBmcm9tIG5ldyBhcHBsaWNhdGlvbiBncm91cFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiByZW1vdmVJc29sYXRpb25Qb2xpY3kocG9saWN5TmFtZSkge1xuICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uR3JvdXBTZXJ2aWNlLnJlbW92ZUlzb2xhdGlvblBvbGljeShhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybCwgcG9saWN5TmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUFwcGxpY2F0aW9uR3JvdXAoKSB7XG4gICAgICAgICAgICAgICAgLy9mb3JtIGNvbnRyb2xsZXIgaXMgaW5qZWN0ZWQgYnkgdGhlIGh0bWwgdGVtcGxhdGVcbiAgICAgICAgICAgICAgICAvL2NoZWNraW5nIGlmIGFsbCB2YWxpZGF0aW9ucyBoYXZlIHBhc3NlZFxuICAgICAgICAgICAgICAgIGlmIChhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5mb3JtLiR2YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IoYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLmFwcGxpY2F0aW9uR3JvdXAubmV0d29ya05hbWUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuc2VsZWN0ZWROZXR3b3JrLm5ldHdvcmtOYW1lO1xuICAgICAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5hcHBsaWNhdGlvbkdyb3VwLmtleSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbkdyb3Vwc01vZGVsLmdlbmVyYXRlS2V5KGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLmFwcGxpY2F0aW9uR3JvdXApO1xuXG4gICAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uR3JvdXBzTW9kZWwuY3JlYXRlKGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLmFwcGxpY2F0aW9uR3JvdXApLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9BcHBsaWNhdGlvbkdyb3VwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuYXBwbGljYXRpb25Hcm91cCA9IHtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBOYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgbmV0d29ya05hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBwb2xpY2llczogW10sXG4gICAgICAgICAgICAgICAgICAgIHRlbmFudE5hbWU6ICdkZWZhdWx0Jy8vVE9ETzogUmVtb3ZlIGhhcmRjb2RlZCB0ZW5hbnQuXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ2V0TmV0d29ya3MoKTtcbiAgICAgICAgICAgIGdldElzb2xhdGlvblBvbGljaWVzKCk7XG5cbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLmNyZWF0ZUFwcGxpY2F0aW9uR3JvdXAgPSBjcmVhdGVBcHBsaWNhdGlvbkdyb3VwO1xuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuY2FuY2VsQ3JlYXRpbmcgPSBjYW5jZWxDcmVhdGluZztcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLmFkZElzb2xhdGlvblBvbGljeSA9IGFkZElzb2xhdGlvblBvbGljeTtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLnJlbW92ZUlzb2xhdGlvblBvbGljeSA9IHJlbW92ZUlzb2xhdGlvblBvbGljeTtcblxuICAgICAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgICAgIH1dKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMTUvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuYXBwbGljYXRpb25ncm91cHMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5hcHBsaWNhdGlvbmdyb3Vwcy5kZXRhaWxzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9kZXRhaWxzLzprZXknLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwgYXMgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcGxpY2F0aW9uZ3JvdXBzL2FwcGxpY2F0aW9uZ3JvdXBkZXRhaWxzLmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5hcHBsaWNhdGlvbmdyb3Vwcy5lZGl0Jywge1xuICAgICAgICAgICAgICAgIHVybDogJy9lZGl0LzprZXknLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwgYXMgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcGxpY2F0aW9uZ3JvdXBzL2FwcGxpY2F0aW9uZ3JvdXBkZXRhaWxzLmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ0FwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCcsIFtcbiAgICAgICAgJyRzdGF0ZScsXG4gICAgICAgICckc3RhdGVQYXJhbXMnLFxuICAgICAgICAnQXBwbGljYXRpb25Hcm91cHNNb2RlbCcsXG4gICAgICAgICdQb2xpY2llc01vZGVsJyxcbiAgICAgICAgJ1J1bGVzTW9kZWwnLFxuICAgICAgICAnQXBwbGljYXRpb25Hcm91cFNlcnZpY2UnLFxuICAgICAgICAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLFxuICAgICAgICAgICAgICAgICAgJHN0YXRlUGFyYW1zLFxuICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cHNNb2RlbCxcbiAgICAgICAgICAgICAgICAgIFBvbGljaWVzTW9kZWwsXG4gICAgICAgICAgICAgICAgICBSdWxlc01vZGVsLFxuICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCA9IHRoaXM7XG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuaXNvbGF0aW9uUG9saWNpZXMgPSBbXTtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5hcHBsaWNhdGlvbkdyb3VwID0ge307XG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuc2VsZWN0ZWROZXR3b3JrID0ge307XG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuc2VsZWN0ZWRQb2xpY3kgPSB7fTtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5zZWxlY3RlZFBvbGljaWVzID0gW107XG5cbiAgICAgICAgICAgIC8vVG8gZGlzcGxheSBpbmNvbWluZyBhbmQgb3V0Z29pbmcgcnVsZXMgZm9yIHNlbGVjdGVkIHBvbGljaWVzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuaW5jb21pbmdSdWxlcyA9IFtdO1xuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLm91dGdvaW5nUnVsZXMgPSBbXTtcblxuXG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuaXNvbGF0aW9uUG9saWNpZXNWaXNpYmxlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVG8gc2hvdyBlZGl0IG9yIGRldGFpbHMgc2NyZWVuIGJhc2VkIG9uIHRoZSByb3V0ZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXRNb2RlKCkge1xuICAgICAgICAgICAgICAgIGlmICgkc3RhdGUuaXMoJ2NvbnRpdi5tZW51LmFwcGxpY2F0aW9uZ3JvdXBzLmVkaXQnKSkge1xuICAgICAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwubW9kZSA9ICdlZGl0JztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwubW9kZSA9ICdkZXRhaWxzJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvQXBwbGljYXRpb25Hcm91cCgpIHtcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51LmFwcGxpY2F0aW9uZ3JvdXBzLmxpc3QnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9BcHBsaWNhdGlvbkdyb3VwRGV0YWlscygpIHtcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51LmFwcGxpY2F0aW9uZ3JvdXBzLmRldGFpbHMnLCB7J2tleSc6IGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5hcHBsaWNhdGlvbkdyb3VwLmtleX0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjYW5jZWxFZGl0aW5nKCkge1xuICAgICAgICAgICAgICAgIHJldHVyblRvQXBwbGljYXRpb25Hcm91cERldGFpbHMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UnVsZXMoKSB7XG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmFwcGxpY2F0aW9uR3JvdXAucG9saWNpZXMuZm9yRWFjaChmdW5jdGlvbiAocG9saWN5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vVG8gZGlzcGxheSBydWxlcyBvZiBzZWxlY3RlZCBwb2xpY2llc1xuICAgICAgICAgICAgICAgICAgICBSdWxlc01vZGVsLmdldEluY29taW5nUnVsZXMocG9saWN5LCAnZGVmYXVsdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocnVsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuaW5jb21pbmdSdWxlcywgcnVsZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFJ1bGVzTW9kZWwuZ2V0T3V0Z29pbmdSdWxlcyhwb2xpY3ksICdkZWZhdWx0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChydWxlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5vdXRnb2luZ1J1bGVzLCBydWxlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBkZWxldGVBcHBsaWNhdGlvbkdyb3VwKCkge1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cHNNb2RlbC5kZWxldGUoYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmFwcGxpY2F0aW9uR3JvdXApLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvQXBwbGljYXRpb25Hcm91cCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IHBvbGljaWVzIGZvciB0aGUgZ2l2ZW4gdGVuYW50LlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRJc29sYXRpb25Qb2xpY2llcygpIHtcbiAgICAgICAgICAgICAgICBQb2xpY2llc01vZGVsLmdldCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuaXNvbGF0aW9uUG9saWNpZXMgPSBfLmZpbHRlcihyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZW5hbnROYW1lJzogJ2RlZmF1bHQnLy9UT0RPOiBSZW1vdmUgaGFyZGNvZGVkIHRlbmFudC5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBZGQgcG9saWN5IHRvIGFwcGxpY2F0aW9uIGdyb3VwXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGFkZElzb2xhdGlvblBvbGljeSgpIHtcbiAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbkdyb3VwU2VydmljZS5hZGRJc29sYXRpb25Qb2xpY3koYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZW1vdmUgcG9saWN5IGZyb20gYXBwbGljYXRpb24gZ3JvdXBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gcmVtb3ZlSXNvbGF0aW9uUG9saWN5KHBvbGljeU5hbWUpIHtcbiAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbkdyb3VwU2VydmljZS5yZW1vdmVJc29sYXRpb25Qb2xpY3koYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLCBwb2xpY3lOYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gc2F2ZUFwcGxpY2F0aW9uR3JvdXAoKSB7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIoYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbkdyb3Vwc01vZGVsLnNhdmUoYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmFwcGxpY2F0aW9uR3JvdXApLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblRvQXBwbGljYXRpb25Hcm91cERldGFpbHMoKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsKTtcbiAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwpO1xuXG4gICAgICAgICAgICBBcHBsaWNhdGlvbkdyb3Vwc01vZGVsLmdldE1vZGVsQnlLZXkoJHN0YXRlUGFyYW1zLmtleSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmFwcGxpY2F0aW9uR3JvdXAgPSBncm91cDtcbiAgICAgICAgICAgICAgICAgICAgLy9BcHBsaWNhdGlvbiBHcm91cHMgbWlnaHQgbm90IGhhdmUgYW55IHBvbGljaWVzIGFzc29jaWF0ZWQgd2l0aCB0aGVtIHNvIGRlZmluZSBhbiBlbXB0eSBhcnJheVxuICAgICAgICAgICAgICAgICAgICBpZiAoYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmFwcGxpY2F0aW9uR3JvdXAucG9saWNpZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmFwcGxpY2F0aW9uR3JvdXAucG9saWNpZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBnZXRSdWxlcygpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBnZXRJc29sYXRpb25Qb2xpY2llcygpO1xuXG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuc2F2ZUFwcGxpY2F0aW9uR3JvdXAgPSBzYXZlQXBwbGljYXRpb25Hcm91cDtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5jYW5jZWxFZGl0aW5nID0gY2FuY2VsRWRpdGluZztcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5hZGRJc29sYXRpb25Qb2xpY3kgPSBhZGRJc29sYXRpb25Qb2xpY3k7XG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwucmVtb3ZlSXNvbGF0aW9uUG9saWN5ID0gcmVtb3ZlSXNvbGF0aW9uUG9saWN5O1xuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmRlbGV0ZUFwcGxpY2F0aW9uR3JvdXAgPSBkZWxldGVBcHBsaWNhdGlvbkdyb3VwO1xuXG4gICAgICAgICAgICBzZXRNb2RlKCk7XG5cbiAgICAgICAgfV0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gMy8xMS8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5hcHBsaWNhdGlvbmdyb3VwcycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LmFwcGxpY2F0aW9uZ3JvdXBzLmxpc3QnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2xpc3QnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBcHBsaWNhdGlvbkdyb3VwTGlzdEN0cmwgYXMgYXBwbGljYXRpb25Hcm91cExpc3RDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcGxpY2F0aW9uZ3JvdXBzL2FwcGxpY2F0aW9uZ3JvdXBsaXN0Lmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ0FwcGxpY2F0aW9uR3JvdXBMaXN0Q3RybCcsXG4gICAgICAgIFsnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckZmlsdGVyJywgJ0FwcGxpY2F0aW9uR3JvdXBzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICAgICAgZnVuY3Rpb24gKCRzY29wZSwgJGludGVydmFsLCAkZmlsdGVyLCBBcHBsaWNhdGlvbkdyb3Vwc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgICAgIHZhciBhcHBsaWNhdGlvbkdyb3VwTGlzdEN0cmwgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0QXBwbGljYXRpb25Hcm91cHMocmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uR3JvdXBzTW9kZWwuZ2V0KHJlbG9hZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGFwcGxpY2F0aW9uR3JvdXBMaXN0Q3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cExpc3RDdHJsLmdyb3VwcyA9ICRmaWx0ZXIoJ29yZGVyQnknKShyZXN1bHQsICdncm91cE5hbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihhcHBsaWNhdGlvbkdyb3VwTGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9Mb2FkIGZyb20gY2FjaGUgZm9yIHF1aWNrIGRpc3BsYXkgaW5pdGlhbGx5XG4gICAgICAgICAgICAgICAgZ2V0QXBwbGljYXRpb25Hcm91cHMoZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2U7XG4gICAgICAgICAgICAgICAgLy9Eb24ndCBzdGFydCBhdXRvLXJlZnJlc2ggaWYgb25lIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICBpZiAoIWFuZ3VsYXIuaXNEZWZpbmVkKHByb21pc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0QXBwbGljYXRpb25Hcm91cHModHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL3N0b3AgcG9sbGluZyB3aGVuIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgJHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICRpbnRlcnZhbC5jYW5jZWwocHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMTYvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuYXBwbGljYXRpb25ncm91cHMnKVxuICAgIC5mYWN0b3J5KCdBcHBsaWNhdGlvbkdyb3VwU2VydmljZScsIFsnUnVsZXNNb2RlbCcsIGZ1bmN0aW9uIChSdWxlc01vZGVsKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBwb2xpY3kgdG8gYXBwbGljYXRpb24gZ3JvdXBcbiAgICAgICAgICogQHBhcmFtIGFwcGxpY2F0aW9uR3JvdXBDdHJsIENvbnRyb2xsZXIgZm9yIGFwcGxpY2F0aW9uIGdyb3VwIGVkaXQgb3IgY3JlYXRlIG9wZXJhdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gYWRkSXNvbGF0aW9uUG9saWN5KGFwcGxpY2F0aW9uR3JvdXBDdHJsKSB7XG4gICAgICAgICAgICBpZiAoXy5maW5kKGFwcGxpY2F0aW9uR3JvdXBDdHJsLnNlbGVjdGVkUG9saWNpZXMsIGFwcGxpY2F0aW9uR3JvdXBDdHJsLnNlbGVjdGVkUG9saWN5KSA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgICAgIC8vVG8gZGlzcGxheSBzZWxlY3RlZCBwb2xpY2llc1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDdHJsLnNlbGVjdGVkUG9saWNpZXMucHVzaChhcHBsaWNhdGlvbkdyb3VwQ3RybC5zZWxlY3RlZFBvbGljeSk7XG5cbiAgICAgICAgICAgICAgICAvL1RvIGRpc3BsYXkgcnVsZXMgb2Ygc2VsZWN0ZWQgcG9saWNpZXNcbiAgICAgICAgICAgICAgICBSdWxlc01vZGVsLmdldEluY29taW5nUnVsZXMoYXBwbGljYXRpb25Hcm91cEN0cmwuc2VsZWN0ZWRQb2xpY3kucG9saWN5TmFtZSwgJ2RlZmF1bHQnKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocnVsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFwcGxpY2F0aW9uR3JvdXBDdHJsLmluY29taW5nUnVsZXMsIHJ1bGVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgUnVsZXNNb2RlbC5nZXRPdXRnb2luZ1J1bGVzKGFwcGxpY2F0aW9uR3JvdXBDdHJsLnNlbGVjdGVkUG9saWN5LnBvbGljeU5hbWUsICdkZWZhdWx0JylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJ1bGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcHBsaWNhdGlvbkdyb3VwQ3RybC5vdXRnb2luZ1J1bGVzLCBydWxlcyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy9UbyBiZSBhZGRlZCB0byBhcHBsaWNhdGlvbiBncm91cCBhbmQgc2F2ZWQgdG8gdGhlIHNlcnZlclxuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDdHJsLmFwcGxpY2F0aW9uR3JvdXAucG9saWNpZXNcbiAgICAgICAgICAgICAgICAgICAgLnB1c2goYXBwbGljYXRpb25Hcm91cEN0cmwuc2VsZWN0ZWRQb2xpY3kucG9saWN5TmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIHBvbGljeSBmcm9tIGFwcGxpY2F0aW9uIGdyb3VwXG4gICAgICAgICAqIEBwYXJhbSBhcHBsaWNhdGlvbkdyb3VwQ3RybCBDb250cm9sbGVyIGZvciBhcHBsaWNhdGlvbiBncm91cCBlZGl0IG9yIGNyZWF0ZSBvcGVyYXRpb25cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUlzb2xhdGlvblBvbGljeShhcHBsaWNhdGlvbkdyb3VwQ3RybCwgcG9saWN5TmFtZSkge1xuICAgICAgICAgICAgXy5yZW1vdmUoYXBwbGljYXRpb25Hcm91cEN0cmwuYXBwbGljYXRpb25Hcm91cC5wb2xpY2llcywgZnVuY3Rpb24gKHBvbGljeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwb2xpY3kgPT0gcG9saWN5TmFtZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXy5yZW1vdmUoYXBwbGljYXRpb25Hcm91cEN0cmwuaW5jb21pbmdSdWxlcywgZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcnVsZS5wb2xpY3lOYW1lID09IHBvbGljeU5hbWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIF8ucmVtb3ZlKGFwcGxpY2F0aW9uR3JvdXBDdHJsLm91dGdvaW5nUnVsZXMsIGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJ1bGUucG9saWN5TmFtZSA9PSBwb2xpY3lOYW1lO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkSXNvbGF0aW9uUG9saWN5OiBhZGRJc29sYXRpb25Qb2xpY3ksXG4gICAgICAgICAgICByZW1vdmVJc29sYXRpb25Qb2xpY3k6IHJlbW92ZUlzb2xhdGlvblBvbGljeVxuICAgICAgICB9XG5cbiAgICB9XSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzExLzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LmRhc2hib2FyZCcpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LmRhc2hib2FyZCcsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZGFzaGJvYXJkJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnRGFzaGJvYXJkQ3RybCBhcyBkYXNoYm9hcmRDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2Rhc2hib2FyZC9kYXNoYm9hcmQuaHRtbCdcbiAgICAgICAgICAgIH0pO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdEYXNoYm9hcmRDdHJsJyxcbiAgICAgICAgW1xuICAgICAgICAgICAgJyRzY29wZScsXG4gICAgICAgICAgICAnJGludGVydmFsJyxcbiAgICAgICAgICAgICdOb2Rlc01vZGVsJyxcbiAgICAgICAgICAgICdOZXR3b3Jrc01vZGVsJyxcbiAgICAgICAgICAgICdWb2x1bWVzTW9kZWwnLFxuICAgICAgICAgICAgJ0FwcGxpY2F0aW9uR3JvdXBzTW9kZWwnLFxuICAgICAgICAgICAgJ1BvbGljaWVzTW9kZWwnLFxuICAgICAgICAgICAgJ1N0b3JhZ2VQb2xpY2llc01vZGVsJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsXG4gICAgICAgICAgICAgICAgICAgICAgJGludGVydmFsLFxuICAgICAgICAgICAgICAgICAgICAgIE5vZGVzTW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgTmV0d29ya3NNb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICBWb2x1bWVzTW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cHNNb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICBQb2xpY2llc01vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgIFN0b3JhZ2VQb2xpY2llc01vZGVsKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhc2hib2FyZEN0cmwgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0RGFzaGJvYXJkSW5mbyhyZWxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgTm9kZXNNb2RlbC5nZXQocmVsb2FkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhc2hib2FyZEN0cmwubm9kZXMgPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIE5ldHdvcmtzTW9kZWwuZ2V0KHJlbG9hZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXNoYm9hcmRDdHJsLm5ldHdvcmtzID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBWb2x1bWVzTW9kZWwuZ2V0KHJlbG9hZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXNoYm9hcmRDdHJsLnZvbHVtZXMgPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uR3JvdXBzTW9kZWwuZ2V0KHJlbG9hZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXNoYm9hcmRDdHJsLmdyb3VwcyA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgUG9saWNpZXNNb2RlbC5nZXQocmVsb2FkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhc2hib2FyZEN0cmwubmV0d29ya3BvbGljaWVzID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBTdG9yYWdlUG9saWNpZXNNb2RlbC5nZXQocmVsb2FkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhc2hib2FyZEN0cmwuc3RvcmFnZXBvbGljaWVzID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vV2lsbCBkaXNwbGF5IDAgaWYgdGhlcmUgaXMgZXJyb3IgZmV0Y2hpbmcgZGF0YVxuICAgICAgICAgICAgICAgIGRhc2hib2FyZEN0cmwubm9kZXMgPSAwO1xuICAgICAgICAgICAgICAgIGRhc2hib2FyZEN0cmwubmV0d29ya3MgPSAwO1xuICAgICAgICAgICAgICAgIGRhc2hib2FyZEN0cmwudm9sdW1lcyA9IDA7XG4gICAgICAgICAgICAgICAgZGFzaGJvYXJkQ3RybC5ncm91cHMgPSAwO1xuICAgICAgICAgICAgICAgIGRhc2hib2FyZEN0cmwubmV0d29ya3BvbGljaWVzID0gMDtcbiAgICAgICAgICAgICAgICBkYXNoYm9hcmRDdHJsLnN0b3JhZ2Vwb2xpY2llcyA9IDA7XG5cbiAgICAgICAgICAgICAgICAvL0xvYWQgZnJvbSBjYWNoZSBmb3IgcXVpY2sgZGlzcGxheSBpbml0aWFsbHlcbiAgICAgICAgICAgICAgICBnZXREYXNoYm9hcmRJbmZvKGZhbHNlKTtcblxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0RGFzaGJvYXJkSW5mbyh0cnVlKTtcbiAgICAgICAgICAgICAgICB9LCA1MDAwKTtcblxuICAgICAgICAgICAgICAgIC8vc3RvcCBwb2xsaW5nIHdoZW4gdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJGludGVydmFsLmNhbmNlbChwcm9taXNlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xOS8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5sb2dpbicpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5sb2dpbicsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2xvZ2luL2xvZ2luLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkN0cmwgYXMgbG9naW5DdHJsJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdMb2dpbkN0cmwnLCBbJyRzdGF0ZScsICdDUlVESGVscGVyU2VydmljZScsXG4gICAgICAgIGZ1bmN0aW9uICgkc3RhdGUsIENSVURIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICB2YXIgbG9naW5DdHJsID0gdGhpcztcblxuICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9EYXNoYm9hcmQoKSB7XG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5kYXNoYm9hcmQnLCB7dXNlcm5hbWU6IGxvZ2luQ3RybC51c2VybmFtZX0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBsb2dpbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5Ub0Rhc2hib2FyZCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGxvZ2luQ3RybCk7XG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IobG9naW5DdHJsKTtcbiAgICAgICAgICAgIGxvZ2luQ3RybC5sb2dpbiA9IGxvZ2luO1xuXG4gICAgICAgIH1dKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTkvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubWVudScpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Jywge1xuICAgICAgICAgICAgICAgIHVybDogJy9tJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21lbnUvbWVudS5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTWVudUN0cmwgYXMgbWVudUN0cmwnLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge3VzZXJuYW1lOiBudWxsfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdNZW51Q3RybCcsIFsnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsIGZ1bmN0aW9uICgkc3RhdGUsICRzdGF0ZVBhcmFtcykge1xuICAgICAgICB2YXIgbWVudUN0cmwgPSB0aGlzO1xuXG4gICAgICAgIGZ1bmN0aW9uIGxvZ291dCgpIHtcbiAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2LmxvZ2luJyk7XG4gICAgICAgIH1cblxuICAgICAgICBtZW51Q3RybC51c2VybmFtZSA9ICRzdGF0ZVBhcmFtcy51c2VybmFtZTtcbiAgICAgICAgbWVudUN0cmwubG9nb3V0ID0gbG9nb3V0O1xuXG4gICAgfV0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gMy8xMC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5uZXR3b3JrcG9saWNpZXMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMuaXNvbGF0aW9uLmNyZWF0ZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvY3JlYXRlJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybCBhcyBpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25ldHdvcmtfcG9saWNpZXMvaXNvbGF0aW9ucG9saWN5Y3JlYXRlLmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ0lzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwnLCBbJyRzdGF0ZScsICdQb2xpY2llc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgUG9saWNpZXNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgdmFyIGlzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwgPSB0aGlzO1xuXG4gICAgICAgIGZ1bmN0aW9uIHJldHVyblRvUG9saWNpZXMoKSB7XG4gICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51Lm5ldHdvcmtwb2xpY2llcy5pc29sYXRpb24ubGlzdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY2FuY2VsQ3JlYXRpbmcoKSB7XG4gICAgICAgICAgICByZXR1cm5Ub1BvbGljaWVzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQb2xpY3koKSB7XG4gICAgICAgICAgICBpZiAoaXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybC5mb3JtLiR2YWxpZCkge1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsLm5ld1BvbGljeS5rZXkgPVxuICAgICAgICAgICAgICAgICAgICBQb2xpY2llc01vZGVsLmdlbmVyYXRlS2V5KGlzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwubmV3UG9saWN5KTtcbiAgICAgICAgICAgICAgICBQb2xpY2llc01vZGVsLmNyZWF0ZShpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsLm5ld1BvbGljeSkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoaXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblRvUG9saWNpZXMoKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGlzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoaXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoaXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybCk7XG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IoaXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybCk7XG4gICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsLm5ld1BvbGljeSA9IHtcbiAgICAgICAgICAgICAgICBwb2xpY3lOYW1lOiAnJyxcbiAgICAgICAgICAgICAgICB0ZW5hbnROYW1lOiAnZGVmYXVsdCcvL1RPRE86IFJlbW92ZSBoYXJkY29kZWQgdGVuYW50LlxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwuY3JlYXRlUG9saWN5ID0gY3JlYXRlUG9saWN5O1xuICAgICAgICBpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsLmNhbmNlbENyZWF0aW5nID0gY2FuY2VsQ3JlYXRpbmc7XG5cbiAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzgvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubmV0d29ya3BvbGljaWVzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzLmlzb2xhdGlvbi5kZXRhaWxzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9kZXRhaWxzLzprZXknLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdJc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCBhcyBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICduZXR3b3JrX3BvbGljaWVzL2lzb2xhdGlvbnBvbGljeWRldGFpbHMuaHRtbCdcbiAgICAgICAgICAgIH0pO1xuICAgIH1dKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMuaXNvbGF0aW9uLmVkaXQnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2VkaXQvOmtleScsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0lzb2xhdGlvblBvbGljeURldGFpbHNDdHJsIGFzIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25ldHdvcmtfcG9saWNpZXMvaXNvbGF0aW9ucG9saWN5ZGV0YWlscy5odG1sJ1xuICAgICAgICAgICAgfSk7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ0lzb2xhdGlvblBvbGljeURldGFpbHNDdHJsJywgW1xuICAgICAgICAnJHN0YXRlJyxcbiAgICAgICAgJyRzdGF0ZVBhcmFtcycsXG4gICAgICAgICdQb2xpY2llc01vZGVsJyxcbiAgICAgICAgJ1J1bGVzTW9kZWwnLFxuICAgICAgICAnTmV0d29ya3NNb2RlbCcsXG4gICAgICAgICdBcHBsaWNhdGlvbkdyb3Vwc01vZGVsJyxcbiAgICAgICAgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBQb2xpY2llc01vZGVsLCBSdWxlc01vZGVsLCBOZXR3b3Jrc01vZGVsLCBBcHBsaWNhdGlvbkdyb3Vwc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsID0gdGhpcztcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ldHdvcmtzID0gW107XG4gICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5hcHBsaWNhdGlvbkdyb3VwcyA9IFtdO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZU91dGdvaW5nTmV0d29ya1NlbGVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZUluY29taW5nTmV0d29ya1NlbGVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZU91dGdvaW5nQXBwbGljYXRpb25Hcm91cFNlbGVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZUluY29taW5nQXBwbGljYXRpb25Hcm91cFNlbGVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3SW5jb21pbmdTZWxlY3RlZEFwcGxpY2F0aW9uR3JvdXAgPSAnJztcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld091dGdvaW5nU2VsZWN0ZWRBcHBsaWNhdGlvbkdyb3VwID0gJyc7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvUG9saWNpZXMoKSB7XG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMuaXNvbGF0aW9uLmxpc3QnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9Qb2xpY3lEZXRhaWxzKCkge1xuICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzLmlzb2xhdGlvbi5kZXRhaWxzJywge2tleTogaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwucG9saWN5LmtleX0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjYW5jZWxFZGl0aW5nKCkge1xuICAgICAgICAgICAgICAgIHJldHVyblRvUG9saWN5RGV0YWlscygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdvIGJhY2sgdG8gcG9saWN5IGRldGFpbHMgYWZ0ZXIgZG9uZSBlZGl0aW5nXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRvbmVFZGl0aW5nKCkge1xuICAgICAgICAgICAgICAgIHJldHVyblRvUG9saWN5RGV0YWlscygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBkZWxldGVQb2xpY3koKSB7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgUG9saWNpZXNNb2RlbC5kZWxldGUoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwucG9saWN5KS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblRvUG9saWNpZXMoKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRvIHNob3cgZWRpdCBvciBkZXRhaWxzIHNjcmVlbiBiYXNlZCBvbiB0aGUgcm91dGVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gc2V0TW9kZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAoJHN0YXRlLmlzKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMuaXNvbGF0aW9uLmVkaXQnKSkge1xuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5tb2RlID0gJ2VkaXQnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm1vZGUgPSAnZGV0YWlscyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXNldE5ld0luY29taW5nUnVsZSgpIHtcbiAgICAgICAgICAgICAgICAvL1J1bGUgb2JqZWN0IHRvIGJlIGNyZWF0ZWQgb24gc2VydmVyXG4gICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3SW5jb21pbmdSdWxlID0ge1xuICAgICAgICAgICAgICAgICAgICBydWxlSWQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnYWxsb3cnLC8vdG8gbWFrZSBpdCBkZWZhdWx0IHNlbGVjdGVkIG9wdGlvbiBpbiBVSVxuICAgICAgICAgICAgICAgICAgICBmcm9tRW5kcG9pbnRHcm91cDogJycsXG4gICAgICAgICAgICAgICAgICAgIGZyb21OZXR3b3JrOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZnJvbUlQQWRkcmVzczogJycsXG4gICAgICAgICAgICAgICAgICAgIHByb3RvY29sOiAndGNwJywvL3RvIG1ha2UgaXQgZGVmYXVsdCBzZWxlY3RlZCBvcHRpb24gaW4gVUlcbiAgICAgICAgICAgICAgICAgICAgcG9ydDogJycsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2luJyxcbiAgICAgICAgICAgICAgICAgICAgdGVuYW50TmFtZTogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgICAgICAgICBwb2xpY3lOYW1lOiBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5wb2xpY3kucG9saWN5TmFtZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3SW5jb21pbmdTZWxlY3RlZEFwcGxpY2F0aW9uR3JvdXAgPSAnJztcbiAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlSW5jb21pbmdOZXR3b3JrU2VsZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZUluY29taW5nQXBwbGljYXRpb25Hcm91cFNlbGVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXNldE5ld091dGdvaW5nUnVsZSgpIHtcbiAgICAgICAgICAgICAgICAvL1J1bGUgb2JqZWN0IHRvIGJlIGNyZWF0ZWQgb24gc2VydmVyXG4gICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3T3V0Z29pbmdSdWxlID0ge1xuICAgICAgICAgICAgICAgICAgICBydWxlSWQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnYWxsb3cnLC8vdG8gbWFrZSBpdCBkZWZhdWx0IHNlbGVjdGVkIG9wdGlvbiBpbiBVSVxuICAgICAgICAgICAgICAgICAgICB0b0VuZHBvaW50R3JvdXA6ICcnLFxuICAgICAgICAgICAgICAgICAgICB0b05ldHdvcms6ICcnLFxuICAgICAgICAgICAgICAgICAgICB0b0lQQWRkcmVzczogJycsXG4gICAgICAgICAgICAgICAgICAgIHByb3RvY29sOiAndGNwJywvL3RvIG1ha2UgaXQgZGVmYXVsdCBzZWxlY3RlZCBvcHRpb24gaW4gVUlcbiAgICAgICAgICAgICAgICAgICAgcG9ydDogJycsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ291dCcsXG4gICAgICAgICAgICAgICAgICAgIHRlbmFudE5hbWU6ICdkZWZhdWx0JyxcbiAgICAgICAgICAgICAgICAgICAgcG9saWN5TmFtZTogaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwucG9saWN5LnBvbGljeU5hbWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld091dGdvaW5nU2VsZWN0ZWRBcHBsaWNhdGlvbkdyb3VwID0gJyc7XG4gICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZU91dGdvaW5nTmV0d29ya1NlbGVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRpc2FibGVPdXRnb2luZ0FwcGxpY2F0aW9uR3JvdXBTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXQgbmV0d29yayBuYW1lcyBmb3IgdGhlIGdpdmVuIHRlbmFudC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0TmV0d29ya3MoKSB7XG4gICAgICAgICAgICAgICAgTmV0d29ya3NNb2RlbC5nZXQoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9fLmZpbHRlcigpIHJldHVybnMgYSBuZXcgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV0d29ya3MgPSBfLmZpbHRlcihyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZW5hbnROYW1lJzogJ2RlZmF1bHQnLy9UT0RPOiBSZW1vdmUgaGFyZGNvZGVkIHRlbmFudC5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IGFwcGxpY2F0aW9uIGdyb3VwIG5hbWVzIGZvciB0aGUgZ2l2ZW4gdGVuYW50LlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRBcHBsaWNhdGlvbkdyb3VwcygpIHtcbiAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbkdyb3Vwc01vZGVsLmdldCgpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vXy5maWx0ZXIoKSByZXR1cm5zIGEgbmV3IGFycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5hcHBsaWNhdGlvbkdyb3VwcyA9IF8uZmlsdGVyKHJlc3VsdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZW5hbnROYW1lJzogJ2RlZmF1bHQnLy9UT0RPOiBSZW1vdmUgaGFyZGNvZGVkIHRlbmFudC5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFdmVudCBoYW5kbGVyIHRvIGRpc2FibGUgbmV0d29yayBzZWxlY3Rpb24gYm94IG9uY2UgYXBwbGljYXRpb24gZ3JvdXAgaXMgc2VsZWN0ZWQgd2hpbGUgY3JlYXRpbmcgYSBuZXdcbiAgICAgICAgICAgICAqIHJ1bGUuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uQ2hhbmdlT3V0Z29pbmdBcHBsaWNhdGlvbkdyb3VwU2VsZWN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdPdXRnb2luZ1NlbGVjdGVkQXBwbGljYXRpb25Hcm91cCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vSWYgYXBwbGljYXRpb24gZ3JvdXAgaGFzIGJlZW4gc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3T3V0Z29pbmdSdWxlLnRvRW5kcG9pbnRHcm91cCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdPdXRnb2luZ1NlbGVjdGVkQXBwbGljYXRpb25Hcm91cC5ncm91cE5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld091dGdvaW5nUnVsZS50b05ldHdvcmsgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZU91dGdvaW5nTmV0d29ya1NlbGVjdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy9XaGVuICdub25lJyBpcyBzZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdPdXRnb2luZ1J1bGUudG9FbmRwb2ludEdyb3VwID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRpc2FibGVPdXRnb2luZ05ldHdvcmtTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRXZlbnQgaGFuZGxlciB0byBkaXNhYmxlIG5ldHdvcmsgc2VsZWN0aW9uIGJveCBvbmNlIGFwcGxpY2F0aW9uIGdyb3VwIGlzIHNlbGVjdGVkIHdoaWxlIGNyZWF0aW5nIGEgbmV3XG4gICAgICAgICAgICAgKiBydWxlLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBvbkNoYW5nZUluY29taW5nQXBwbGljYXRpb25Hcm91cFNlbGVjdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3SW5jb21pbmdTZWxlY3RlZEFwcGxpY2F0aW9uR3JvdXAgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAvL0lmIGFwcGxpY2F0aW9uIGdyb3VwIGhhcyBiZWVuIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld0luY29taW5nUnVsZS5mcm9tRW5kcG9pbnRHcm91cCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdJbmNvbWluZ1NlbGVjdGVkQXBwbGljYXRpb25Hcm91cC5ncm91cE5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld0luY29taW5nUnVsZS5mcm9tTmV0d29yayA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlSW5jb21pbmdOZXR3b3JrU2VsZWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL1doZW4gJ25vbmUnIGlzIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld0luY29taW5nUnVsZS5mcm9tRW5kcG9pbnRHcm91cCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlSW5jb21pbmdOZXR3b3JrU2VsZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRXZlbnQgaGFuZGxlciB0byBkaXNhYmxlIGFwcGxpY2F0aW9uIGdyb3VwIHNlbGVjdGlvbiBib3ggb25jZSBuZXR3b3JrIGlzIHNlbGVjdGVkIHdoaWxlIGNyZWF0aW5nIGEgbmV3XG4gICAgICAgICAgICAgKiBydWxlLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBvbkNoYW5nZU91dGdvaW5nTmV0d29ya1NlbGVjdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3T3V0Z29pbmdSdWxlLnRvTmV0d29yayAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vSWYgbmV0d29yayBoYXMgYmVlbiBzZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdPdXRnb2luZ1J1bGUuVG9FbmRwb2ludEdyb3VwID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRpc2FibGVPdXRnb2luZ0FwcGxpY2F0aW9uR3JvdXBTZWxlY3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRpc2FibGVPdXRnb2luZ0FwcGxpY2F0aW9uR3JvdXBTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRXZlbnQgaGFuZGxlciB0byBkaXNhYmxlIGFwcGxpY2F0aW9uIGdyb3VwIHNlbGVjdGlvbiBib3ggb25jZSBuZXR3b3JrIGlzIHNlbGVjdGVkIHdoaWxlIGNyZWF0aW5nIGEgbmV3XG4gICAgICAgICAgICAgKiBydWxlLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBvbkNoYW5nZUluY29taW5nTmV0d29ya1NlbGVjdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3SW5jb21pbmdSdWxlLmZyb21OZXR3b3JrICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9JZiBuZXR3b3JrIGhhcyBiZWVuIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld0luY29taW5nUnVsZS5mcm9tRW5kcG9pbnRHcm91cCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlSW5jb21pbmdBcHBsaWNhdGlvbkdyb3VwU2VsZWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlSW5jb21pbmdBcHBsaWNhdGlvbkdyb3VwU2VsZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZW5lcmF0ZXMgcnVsZSBpZFxuICAgICAgICAgICAgICogVE9ETyBNYWtlIGl0IGNyeXB0b2dyYXBoaWNhbGx5IHN0cm9uZ2VyIG9uY2Ugd2UgaGF2ZSBtdWx0aXBsZSB1c2VycyB1cGRhdGluZyBzYW1lIHBvbGljeVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZVJ1bGVJZChydWxlKSB7XG4gICAgICAgICAgICAgICAgcnVsZS5ydWxlSWQgPVxuICAgICAgICAgICAgICAgICAgICAoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuaW5jb21pbmdSdWxlcy5sZW5ndGggKyBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5vdXRnb2luZ1J1bGVzLmxlbmd0aCArIDEpLnRvU3RyaW5nKCkgKyAnLScgK1xuICAgICAgICAgICAgICAgICAgICBEYXRlLm5vdygpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUnVsZSBpcyBzYXZlZCB0byBzZXJ2ZXJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gYWRkSW5jb21pbmdSdWxlKCkge1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgIGdlbmVyYXRlUnVsZUlkKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld0luY29taW5nUnVsZSk7XG4gICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3SW5jb21pbmdSdWxlLmtleSA9IFJ1bGVzTW9kZWwuZ2VuZXJhdGVLZXkoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3SW5jb21pbmdSdWxlKTtcbiAgICAgICAgICAgICAgICBSdWxlc01vZGVsLmNyZWF0ZShpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdJbmNvbWluZ1J1bGUpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuaW5jb21pbmdSdWxlcy5wdXNoKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc2V0TmV3SW5jb21pbmdSdWxlKCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSdWxlIGlzIHNhdmVkIHRvIHNlcnZlclxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBhZGRPdXRnb2luZ1J1bGUoKSB7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVSdWxlSWQoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3T3V0Z29pbmdSdWxlKTtcbiAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdPdXRnb2luZ1J1bGUua2V5ID0gUnVsZXNNb2RlbC5nZW5lcmF0ZUtleShpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdPdXRnb2luZ1J1bGUpO1xuICAgICAgICAgICAgICAgIFJ1bGVzTW9kZWwuY3JlYXRlKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld091dGdvaW5nUnVsZSkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5vdXRnb2luZ1J1bGVzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzZXROZXdPdXRnb2luZ1J1bGUoKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIERlbGV0ZSBpbmNvbWluZyBydWxlIGZyb20gc2VydmVyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRlbGV0ZUluY29taW5nUnVsZShrZXkpIHtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBSdWxlc01vZGVsLmRlbGV0ZVVzaW5nS2V5KGtleSkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBfLnJlbW92ZShpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5pbmNvbWluZ1J1bGVzLCBmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4ua2V5ID09IGtleTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEZWxldGUgb3V0Z29pbmcgcnVsZSBmcm9tIHNlcnZlclxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBkZWxldGVPdXRnb2luZ1J1bGUoa2V5KSB7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgUnVsZXNNb2RlbC5kZWxldGVVc2luZ0tleShrZXkpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgXy5yZW1vdmUoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwub3V0Z29pbmdSdWxlcywgZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuLmtleSA9PSBrZXk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcblxuICAgICAgICAgICAgUG9saWNpZXNNb2RlbC5nZXRNb2RlbEJ5S2V5KCRzdGF0ZVBhcmFtcy5rZXkpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHBvbGljeSkge1xuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5wb2xpY3kgPSBwb2xpY3k7XG4gICAgICAgICAgICAgICAgICAgIFJ1bGVzTW9kZWwuZ2V0SW5jb21pbmdSdWxlcyhwb2xpY3kucG9saWN5TmFtZSwgJ2RlZmF1bHQnKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmluY29taW5nUnVsZXMgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNldE5ld0luY29taW5nUnVsZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgUnVsZXNNb2RlbC5nZXRPdXRnb2luZ1J1bGVzKHBvbGljeS5wb2xpY3lOYW1lLCAnZGVmYXVsdCcpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwub3V0Z29pbmdSdWxlcyA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0TmV3T3V0Z29pbmdSdWxlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBnZXROZXR3b3JrcygpO1xuICAgICAgICAgICAgZ2V0QXBwbGljYXRpb25Hcm91cHMoKTtcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRlbGV0ZVBvbGljeSA9IGRlbGV0ZVBvbGljeTtcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRlbGV0ZUluY29taW5nUnVsZSA9IGRlbGV0ZUluY29taW5nUnVsZTtcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRlbGV0ZU91dGdvaW5nUnVsZSA9IGRlbGV0ZU91dGdvaW5nUnVsZTtcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmFkZEluY29taW5nUnVsZSA9IGFkZEluY29taW5nUnVsZTtcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmFkZE91dGdvaW5nUnVsZSA9IGFkZE91dGdvaW5nUnVsZTtcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRvbmVFZGl0aW5nID0gZG9uZUVkaXRpbmc7XG4gICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5jYW5jZWxFZGl0aW5nID0gY2FuY2VsRWRpdGluZztcbiAgICAgICAgICAgIC8vRXZlbnQgSGFuZGxlcnNcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm9uQ2hhbmdlT3V0Z29pbmdBcHBsaWNhdGlvbkdyb3VwU2VsZWN0aW9uID0gb25DaGFuZ2VPdXRnb2luZ0FwcGxpY2F0aW9uR3JvdXBTZWxlY3Rpb247XG4gICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5vbkNoYW5nZUluY29taW5nQXBwbGljYXRpb25Hcm91cFNlbGVjdGlvbiA9IG9uQ2hhbmdlSW5jb21pbmdBcHBsaWNhdGlvbkdyb3VwU2VsZWN0aW9uO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwub25DaGFuZ2VPdXRnb2luZ05ldHdvcmtTZWxlY3Rpb24gPSBvbkNoYW5nZU91dGdvaW5nTmV0d29ya1NlbGVjdGlvbjtcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm9uQ2hhbmdlSW5jb21pbmdOZXR3b3JrU2VsZWN0aW9uID0gb25DaGFuZ2VJbmNvbWluZ05ldHdvcmtTZWxlY3Rpb247XG5cbiAgICAgICAgICAgIHNldE1vZGUoKTtcblxuICAgICAgICB9XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5uZXR3b3JrcG9saWNpZXMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMuaXNvbGF0aW9uLmxpc3QnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2xpc3QnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdJc29sYXRpb25Qb2xpY3lMaXN0Q3RybCBhcyBpc29sYXRpb25Qb2xpY3lMaXN0Q3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICduZXR3b3JrX3BvbGljaWVzL2lzb2xhdGlvbnBvbGljeWxpc3QuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignSXNvbGF0aW9uUG9saWN5TGlzdEN0cmwnLCBbJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJGZpbHRlcicsICdQb2xpY2llc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzY29wZSwgJGludGVydmFsLCAkZmlsdGVyLCBQb2xpY2llc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIHBvbGljaWVzTGlzdEN0cmwgPSB0aGlzO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRQb2xpY2llcyhyZWxvYWQpIHtcbiAgICAgICAgICAgICAgICBQb2xpY2llc01vZGVsLmdldChyZWxvYWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIocG9saWNpZXNMaXN0Q3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb2xpY2llc0xpc3RDdHJsLnBvbGljaWVzID0gJGZpbHRlcignb3JkZXJCeScpKHJlc3VsdCwgJ3BvbGljeU5hbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIocG9saWNpZXNMaXN0Q3RybCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0xvYWQgZnJvbSBjYWNoZSBmb3IgcXVpY2sgZGlzcGxheSBpbml0aWFsbHlcbiAgICAgICAgICAgIGdldFBvbGljaWVzKGZhbHNlKTtcblxuICAgICAgICAgICAgdmFyIHByb21pc2U7XG4gICAgICAgICAgICAvL0Rvbid0IHN0YXJ0IGF1dG8tcmVmcmVzaCBpZiBvbmUgaXMgYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKCFhbmd1bGFyLmlzRGVmaW5lZChwcm9taXNlKSkge1xuICAgICAgICAgICAgICAgIHByb21pc2UgPSAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBnZXRQb2xpY2llcyh0cnVlKTtcbiAgICAgICAgICAgICAgICB9LCBDb250aXZHbG9iYWxzLlJFRlJFU0hfSU5URVJWQUwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9zdG9wIHBvbGxpbmcgd2hlbiB1c2VyIG1vdmVzIGF3YXkgZnJvbSB0aGUgcGFnZVxuICAgICAgICAgICAgJHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJGludGVydmFsLmNhbmNlbChwcm9taXNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvOS8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5uZXR3b3JrcG9saWNpZXMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL25ldHdvcmtwb2xpY2llcycsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05ldHdvcmtQb2xpY2llc1RhYnNDdHJsIGFzIG5ldHdvcmtQb2xpY2llc1RhYnNDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25ldHdvcmtfcG9saWNpZXMvbmV0d29ya3BvbGljaWVzdGFicy5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzLmlzb2xhdGlvbicsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvaXNvbGF0aW9uJyxcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJzx1aS12aWV3Lz4nXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMucHJpb3JpdGl6YXRpb24nLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL3ByaW9yaXRpemF0aW9uJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTmV0d29ya1BvbGljaWVzVGFic0N0cmwgYXMgbmV0d29ya1BvbGljaWVzVGFic0N0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbmV0d29ya19wb2xpY2llcy9wcmlvcml0aXphdGlvbnBvbGljeWxpc3QuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5ldHdvcmtwb2xpY2llcy5iYW5kd2lkdGgnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2JhbmR3aWR0aCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05ldHdvcmtQb2xpY2llc1RhYnNDdHJsIGFzIG5ldHdvcmtQb2xpY2llc1RhYnNDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25ldHdvcmtfcG9saWNpZXMvYmFuZHdpZHRocG9saWN5bGlzdC5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzLnJlZGlyZWN0aW9uJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9yZWRpcmVjdGlvbicsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05ldHdvcmtQb2xpY2llc1RhYnNDdHJsIGFzIG5ldHdvcmtQb2xpY2llc1RhYnNDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25ldHdvcmtfcG9saWNpZXMvcmVkaXJlY3Rpb25wb2xpY3lsaXN0Lmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ05ldHdvcmtQb2xpY2llc1RhYnNDdHJsJywgWyckc3RhdGUnLCBmdW5jdGlvbiAoJHN0YXRlKSB7XG4gICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAyLzE5LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm5ldHdvcmtzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3MuY3JlYXRlJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9jcmVhdGUnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbmV0d29ya3MvbmV0d29ya2NyZWF0ZS5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTmV0d29ya0NyZWF0ZUN0cmwgYXMgbmV0d29ya0NyZWF0ZUN0cmwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ05ldHdvcmtDcmVhdGVDdHJsJywgWyckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ05ldHdvcmtzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsIE5ldHdvcmtzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICB2YXIgbmV0d29ya0NyZWF0ZUN0cmwgPSB0aGlzO1xuICAgICAgICAgICAgbmV0d29ya0NyZWF0ZUN0cmwuY2lkclBhdHRlcm4gPSBDb250aXZHbG9iYWxzLkNJRFJfUkVHRVg7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvTmV0d29ya3MoKSB7XG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5uZXR3b3Jrcy5saXN0Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNhbmNlbENyZWF0aW5nKCkge1xuICAgICAgICAgICAgICAgIHJldHVyblRvTmV0d29ya3MoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlTmV0d29yaygpIHtcbiAgICAgICAgICAgICAgICAvL2Zvcm0gY29udHJvbGxlciBpcyBpbmplY3RlZCBieSB0aGUgaHRtbCB0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIC8vY2hlY2tpbmcgaWYgYWxsIHZhbGlkYXRpb25zIGhhdmUgcGFzc2VkXG4gICAgICAgICAgICAgICAgaWYgKG5ldHdvcmtDcmVhdGVDdHJsLmZvcm0uJHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihuZXR3b3JrQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKG5ldHdvcmtDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgbmV0d29ya0NyZWF0ZUN0cmwubmV3TmV0d29yay5rZXkgPVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29ya0NyZWF0ZUN0cmwubmV3TmV0d29yay50ZW5hbnROYW1lICsgJzonICsgbmV0d29ya0NyZWF0ZUN0cmwubmV3TmV0d29yay5uZXR3b3JrTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgTmV0d29ya3NNb2RlbC5jcmVhdGUobmV0d29ya0NyZWF0ZUN0cmwubmV3TmV0d29yaykudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5ldHdvcmtDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvTmV0d29ya3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobmV0d29ya0NyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKG5ldHdvcmtDcmVhdGVDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobmV0d29ya0NyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihuZXR3b3JrQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgbmV0d29ya0NyZWF0ZUN0cmwubmV3TmV0d29yayA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmV0d29ya05hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBlbmNhcDogJ3Z4bGFuJyxcbiAgICAgICAgICAgICAgICAgICAgc3VibmV0OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZ2F0ZXdheTogJycsXG4gICAgICAgICAgICAgICAgICAgIHRlbmFudE5hbWU6ICdkZWZhdWx0Jy8vVE9ETzogUmVtb3ZlIGhhcmRjb2RlZCB0ZW5hbnQuXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV0d29ya0NyZWF0ZUN0cmwuY3JlYXRlTmV0d29yayA9IGNyZWF0ZU5ldHdvcms7XG4gICAgICAgICAgICBuZXR3b3JrQ3JlYXRlQ3RybC5jYW5jZWxDcmVhdGluZyA9IGNhbmNlbENyZWF0aW5nO1xuXG4gICAgICAgICAgICByZXNldEZvcm0oKTtcbiAgICAgICAgfV0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5uZXR3b3JrcycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5ldHdvcmtzLmRldGFpbHMnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2RldGFpbHMvOmtleScsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05ldHdvcmtEZXRhaWxzQ3RybCBhcyBuZXR3b3JrRGV0YWlsc0N0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbmV0d29ya3MvbmV0d29ya2RldGFpbHMuaHRtbCdcbiAgICAgICAgICAgIH0pO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdOZXR3b3JrRGV0YWlsc0N0cmwnLFxuICAgICAgICBbJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckZmlsdGVyJywgJ05ldHdvcmtzTW9kZWwnLCAnQXBwbGljYXRpb25Hcm91cHNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsXG4gICAgICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsICRzY29wZSwgJGludGVydmFsLCAkZmlsdGVyLCBOZXR3b3Jrc01vZGVsLCBBcHBsaWNhdGlvbkdyb3Vwc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgICAgIHZhciBuZXR3b3JrRGV0YWlsc0N0cmwgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9OZXR3b3JrcygpIHtcbiAgICAgICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5uZXR3b3Jrcy5saXN0Jyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZGVsZXRlTmV0d29yaygpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKG5ldHdvcmtEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKG5ldHdvcmtEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIE5ldHdvcmtzTW9kZWwuZGVsZXRlKG5ldHdvcmtEZXRhaWxzQ3RybC5uZXR3b3JrKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobmV0d29ya0RldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvTmV0d29ya3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobmV0d29ya0RldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihuZXR3b3JrRGV0YWlsc0N0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEdldCBhcHBsaWNhdGlvbiBncm91cHMgYmVsb25naW5nIHRvIGEgbmV0d29ya1xuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldEFwcGxpY2F0aW9uR3JvdXBzKHJlbG9hZCkge1xuICAgICAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbkdyb3Vwc01vZGVsLmdldChyZWxvYWQpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29ya0RldGFpbHNDdHJsLmFwcGxpY2F0aW9uR3JvdXBzID0gJGZpbHRlcignb3JkZXJCeScpKF8uZmlsdGVyKHJlc3VsdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICduZXR3b3JrTmFtZSc6IG5ldHdvcmtEZXRhaWxzQ3RybC5uZXR3b3JrLm5ldHdvcmtOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgJ2dyb3VwTmFtZScpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5ldHdvcmtEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKG5ldHdvcmtEZXRhaWxzQ3RybCk7XG5cbiAgICAgICAgICAgICAgICBOZXR3b3Jrc01vZGVsLmdldE1vZGVsQnlLZXkoJHN0YXRlUGFyYW1zLmtleSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKG5ldHdvcmspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcmtEZXRhaWxzQ3RybC5uZXR3b3JrID0gbmV0d29yaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldEFwcGxpY2F0aW9uR3JvdXBzKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBuZXR3b3JrRGV0YWlsc0N0cmwuZGVsZXRlTmV0d29yayA9IGRlbGV0ZU5ldHdvcms7XG5cbiAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZTtcbiAgICAgICAgICAgICAgICAvL0Rvbid0IGRvIGF1dG9yZWZyZXNoIGlmIG9uZSBpcyBhbHJlYWR5IGluIHByb2dyZXNzXG4gICAgICAgICAgICAgICAgaWYgKCFhbmd1bGFyLmlzRGVmaW5lZChwcm9taXNlKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldEFwcGxpY2F0aW9uR3JvdXBzKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9LCBDb250aXZHbG9iYWxzLlJFRlJFU0hfSU5URVJWQUwpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vc3RvcCBwb2xsaW5nIHdoZW4gdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJGludGVydmFsLmNhbmNlbChwcm9taXNlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1dKTtcbiIsImFuZ3VsYXIubW9kdWxlKCdjb250aXYubmV0d29ya3MnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3Jrcy5saXN0Jywge1xuICAgICAgICAgICAgICAgIHVybDogJy9saXN0JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTmV0d29ya3NMaXN0Q3RybCBhcyBuZXR3b3Jrc0xpc3RDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25ldHdvcmtzL25ldHdvcmtsaXN0Lmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ05ldHdvcmtzTGlzdEN0cmwnLCBbJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJGZpbHRlcicsICdOZXR3b3Jrc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzY29wZSwgJGludGVydmFsLCAkZmlsdGVyLCBOZXR3b3Jrc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIG5ldHdvcmtzTGlzdEN0cmwgPSB0aGlzO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXROZXR3b3JrcyhyZWxvYWQpIHtcbiAgICAgICAgICAgICAgICBOZXR3b3Jrc01vZGVsLmdldChyZWxvYWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5ldHdvcmtzTGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcmtzTGlzdEN0cmwubmV0d29ya3MgPSAkZmlsdGVyKCdvcmRlckJ5JykocmVzdWx0LCAnbmV0d29ya05hbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobmV0d29ya3NMaXN0Q3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9Mb2FkIGZyb20gY2FjaGUgZm9yIHF1aWNrIGRpc3BsYXkgaW5pdGlhbGx5XG4gICAgICAgICAgICBnZXROZXR3b3JrcyhmYWxzZSk7XG5cbiAgICAgICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICAgICAgLy9Eb24ndCBkbyBhdXRvcmVmcmVzaCBpZiBvbmUgaXMgYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKCFhbmd1bGFyLmlzRGVmaW5lZChwcm9taXNlKSkge1xuICAgICAgICAgICAgICAgIHByb21pc2UgPSAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBnZXROZXR3b3Jrcyh0cnVlKTtcbiAgICAgICAgICAgICAgICB9LCBDb250aXZHbG9iYWxzLlJFRlJFU0hfSU5URVJWQUwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL3N0b3AgcG9sbGluZyB3aGVuIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXG4gICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHByb21pc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gMy8yNS8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5ub2RlcycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5vZGVzLmNvbW1pc3Npb24nLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2NvbW1pc3Npb24vOmtleScsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05vZGVDb21taXNzaW9uQ3RybCBhcyBub2RlQ29tbWlzc2lvbkN0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbm9kZXMvbm9kZWNvbW1pc3Npb24uaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5vZGVzLmRpc2NvdmVyJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9kaXNjb3ZlcicsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05vZGVDb21taXNzaW9uQ3RybCBhcyBub2RlQ29tbWlzc2lvbkN0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbm9kZXMvbm9kZWNvbW1pc3Npb24uaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignTm9kZUNvbW1pc3Npb25DdHJsJywgW1xuICAgICAgICAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdOb2Rlc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBOb2Rlc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIG5vZGVDb21taXNzaW9uQ3RybCA9IHRoaXM7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVG8gc2hvdyBjb21taXNzaW9uIG9yIGRpc2NvdmVyIHNjcmVlbiBiYXNlZCBvbiB0aGUgcm91dGVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gc2V0TW9kZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAoJHN0YXRlLmlzKCdjb250aXYubWVudS5ub2Rlcy5jb21taXNzaW9uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLm1vZGUgPSAnY29tbWlzc2lvbic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLm1vZGUgPSAnZGlzY292ZXInO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9Ob2RlRGV0YWlscygpIHtcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51Lm5vZGVzLmRldGFpbHMuaW5mbycsIHsna2V5JzogJHN0YXRlUGFyYW1zLmtleX0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub05vZGVzKCkge1xuICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUubm9kZXMubGlzdCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjYW5jZWxDb21taXNzaW9uaW5nTm9kZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5Ub05vZGVEZXRhaWxzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNhbmNlbERpc2NvdmVyaW5nTm9kZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5Ub05vZGVzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUV4dHJhVmFycygpIHtcbiAgICAgICAgICAgICAgICAvL0FkZCBhbnNpYmxlIHZhcmlhYmxlcyB0byBleHRyYV92YXJzXG4gICAgICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmFuc2libGVWYXJpYWJsZXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwuZXh0cmFfdmFyc1tpdGVtLm5hbWVdID0gaXRlbS52YWx1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vQWRkIGVudmlyb25tZW50IHZhcmlhYmxlcyB0byBleHRyYV92YXJzXG4gICAgICAgICAgICAgICAgdmFyIGVudlZhcnMgPSB7fTtcbiAgICAgICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwuZW52VmFyaWFibGVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgZW52VmFyc1tpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwuZXh0cmFfdmFyc1snZW52J10gPSBlbnZWYXJzO1xuICAgICAgICAgICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5ub2RlT3BzT2JqLmV4dHJhX3ZhcnMgPSBKU09OLnN0cmluZ2lmeShub2RlQ29tbWlzc2lvbkN0cmwuZXh0cmFfdmFycyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNvbW1pc3Npb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGVDb21taXNzaW9uQ3RybC5mb3JtLiR2YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Iobm9kZUNvbW1pc3Npb25DdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIobm9kZUNvbW1pc3Npb25DdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLm5vZGVPcHNPYmoubm9kZXMgPSBbJHN0YXRlUGFyYW1zLmtleV07XG4gICAgICAgICAgICAgICAgICAgIGNsZWFudXBFeHRyYVZhcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlRXh0cmFWYXJzKCk7XG4gICAgICAgICAgICAgICAgICAgIE5vZGVzTW9kZWwuY29tbWlzc2lvbihub2RlQ29tbWlzc2lvbkN0cmwubm9kZU9wc09iaikudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5vZGVDb21taXNzaW9uQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub05vZGVEZXRhaWxzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5vZGVDb21taXNzaW9uQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3Iobm9kZUNvbW1pc3Npb25DdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRpc2NvdmVyKCkge1xuICAgICAgICAgICAgICAgIGlmIChub2RlQ29tbWlzc2lvbkN0cmwuZm9ybS4kdmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKG5vZGVDb21taXNzaW9uQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKG5vZGVDb21taXNzaW9uQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUlQQWRkckFycmF5KCk7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUV4dHJhVmFycygpO1xuICAgICAgICAgICAgICAgICAgICBOb2Rlc01vZGVsLmRpc2NvdmVyKG5vZGVDb21taXNzaW9uQ3RybC5ub2RlT3BzT2JqKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobm9kZUNvbW1pc3Npb25DdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvTm9kZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobm9kZUNvbW1pc3Npb25DdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihub2RlQ29tbWlzc2lvbkN0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDbGVhbnVwIGFuc2libGUgdmFyaWFibGVzIGZvciBuZXR3b3JrIG1vZGUgYW5kIHNjaGVkdWxlci4gbmctaWYgcmVtb3ZlcyBpdCBmcm9tIHRoZSB2aWV3IChET00pIGJ1dCBub3QgZnJvbVxuICAgICAgICAgICAgICogdGhlIG1vZGVsLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBjbGVhbnVwRXh0cmFWYXJzKCkge1xuICAgICAgICAgICAgICAgIC8vQ2xlYW51cCBmb3IgbmV0d29yayBtb2RlXG4gICAgICAgICAgICAgICAgaWYgKG5vZGVDb21taXNzaW9uQ3RybC5leHRyYV92YXJzWydjb250aXZfbmV0d29ya19tb2RlJ10gPT0gJ2FjaScpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG5vZGVDb21taXNzaW9uQ3RybC5leHRyYV92YXJzWydmd2RfbW9kZSddO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBub2RlQ29tbWlzc2lvbkN0cmwuZXh0cmFfdmFyc1snYXBpY191cmwnXTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG5vZGVDb21taXNzaW9uQ3RybC5leHRyYV92YXJzWydhcGljX3VzZXJuYW1lJ107XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBub2RlQ29tbWlzc2lvbkN0cmwuZXh0cmFfdmFyc1snYXBpY19wYXNzd29yZCddO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbm9kZUNvbW1pc3Npb25DdHJsLmV4dHJhX3ZhcnNbJ2FwaWNfbGVhZl9ub2RlcyddO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbm9kZUNvbW1pc3Npb25DdHJsLmV4dHJhX3ZhcnNbJ2FwaWNfcGh5c19kb21haW4nXTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG5vZGVDb21taXNzaW9uQ3RybC5leHRyYV92YXJzWydhcGljX2VwZ19icmlkZ2VfZG9tYWluJ107XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBub2RlQ29tbWlzc2lvbkN0cmwuZXh0cmFfdmFyc1snYXBpY19jb250cmFjdHNfdW5yZXN0cmljdGVkX21vZGUnXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9DbGVhbnVwIGZvciBzY2hlZHVsZXJcbiAgICAgICAgICAgICAgICBpZiAobm9kZUNvbW1pc3Npb25DdHJsLmV4dHJhX3ZhcnNbJ3NjaGVkdWxlcl9wcm92aWRlciddID09ICduYXRpdmUtc3dhcm0nKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBub2RlQ29tbWlzc2lvbkN0cmwuZXh0cmFfdmFyc1sndWNwX2Jvb3RzdHJhcF9ub2RlX25hbWUnXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUlQQWRkckFycmF5KCkge1xuICAgICAgICAgICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5ub2RlT3BzT2JqLmFkZHJzID0gXy53b3Jkcyhub2RlQ29tbWlzc2lvbkN0cmwubm9kZUlQQWRkciwgL1teLCBdKy9nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLm5vZGVPcHNPYmogPSB7fTtcbiAgICAgICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5leHRyYV92YXJzID0ge307IC8vVE9ETyBJbnRpYWxpemUgZnJvbSBnbG9iYWwgc2V0dGluZ3NcbiAgICAgICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5hbnNpYmxlVmFyaWFibGVzID0gW107XG4gICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwuZW52VmFyaWFibGVzID0gW107XG4gICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwubm9kZUlQQWRkciA9ICcnOyAvL0lQIGFkZHJlc3Mgb2Ygbm9kZXMgdG8gZGlzY292ZXJcblxuICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmNhbmNlbENvbW1pc3Npb25pbmdOb2RlID0gY2FuY2VsQ29tbWlzc2lvbmluZ05vZGU7XG4gICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwuY29tbWlzc2lvbiA9IGNvbW1pc3Npb247XG4gICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwuZGlzY292ZXIgPSBkaXNjb3ZlcjtcbiAgICAgICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5jYW5jZWxEaXNjb3ZlcmluZ05vZGUgPSBjYW5jZWxEaXNjb3ZlcmluZ05vZGU7XG5cbiAgICAgICAgICAgIHNldE1vZGUoKTtcbiAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobm9kZUNvbW1pc3Npb25DdHJsKTtcbiAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihub2RlQ29tbWlzc2lvbkN0cmwpO1xuXG4gICAgICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gMy8yNS8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5ub2RlcycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5vZGVzLmRldGFpbHMnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2RldGFpbHMvOmtleScsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05vZGVEZXRhaWxzQ3RybCBhcyBub2RlRGV0YWlsc0N0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbm9kZXMvbm9kZWRldGFpbHMuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5vZGVzLmRldGFpbHMuaW5mbycsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvaW5mbycsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05vZGVEZXRhaWxzQ3RybCBhcyBub2RlRGV0YWlsc0N0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbm9kZXMvbm9kZWluZm8uaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5vZGVzLmRldGFpbHMuc3RhdHMnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL3N0YXRzJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9kZURldGFpbHNDdHJsIGFzIG5vZGVEZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdub2Rlcy9ub2Rlc3RhdHMuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5vZGVzLmRldGFpbHMubG9ncycsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvbG9ncycsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05vZGVEZXRhaWxzQ3RybCBhcyBub2RlRGV0YWlsc0N0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbm9kZXMvbm9kZWxvZ3MuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignTm9kZURldGFpbHNDdHJsJywgWyckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJyRzY29wZScsICckaW50ZXJ2YWwnLCAnTm9kZXNNb2RlbCcsXG4gICAgICAgIGZ1bmN0aW9uICgkc3RhdGUsICRzdGF0ZVBhcmFtcywgJHNjb3BlLCAkaW50ZXJ2YWwsIE5vZGVzTW9kZWwpIHtcbiAgICAgICAgICAgIHZhciBub2RlRGV0YWlsc0N0cmwgPSB0aGlzO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBkZWNvbW1pc3Npb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVPcHNPYmogPSB7XG4gICAgICAgICAgICAgICAgICBub2RlczogWyRzdGF0ZVBhcmFtcy5rZXldXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBOb2Rlc01vZGVsLmRlY29tbWlzc2lvbihub2RlT3BzT2JqKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9EaXNhYmxlIGFsbCBidXR0b25zIGluaXRpYWxseS4gUG9sbCB3aWxsIGFzc2lnbiB2YWx1ZXMgYXBwcm9wcmlhdGVseS5cbiAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnNob3dDb21taXNzaW9uQnV0dG9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5jb21taXNzaW9uQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwudXBncmFkZUJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gdXBncmFkZSgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZU9wc09iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXM6IFskc3RhdGVQYXJhbXMua2V5XVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgTm9kZXNNb2RlbC51cGdyYWRlKG5vZGVPcHNPYmopLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAvL0Rpc2FibGUgYWxsIGJ1dHRvbnMgaW5pdGlhbGx5LiBQb2xsIHdpbGwgYXNzaWduIHZhbHVlcyBhcHByb3ByaWF0ZWx5LlxuICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuc2hvd0NvbW1pc3Npb25CdXR0b24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLmNvbW1pc3Npb25CdXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC51cGdyYWRlQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIERpc3BsYXkgYnV0dG9ucyBiYXNlZCBvbiBzdGF0dXMgb2Ygbm9kZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXRCdXR0b25EaXNwbGF5KCkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobm9kZURldGFpbHNDdHJsLm5vZGVbJ2ludmVudG9yeV9zdGF0ZSddLnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdVbmFsbG9jYXRlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuc2hvd0NvbW1pc3Npb25CdXR0b24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLmNvbW1pc3Npb25CdXR0b25FbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC51cGdyYWRlQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0RlY29tbWlzc2lvbmVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5zaG93Q29tbWlzc2lvbkJ1dHRvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuY29tbWlzc2lvbkJ1dHRvbkVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnVwZ3JhZGVCdXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnUHJvdmlzaW9uaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5zaG93Q29tbWlzc2lvbkJ1dHRvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuY29tbWlzc2lvbkJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC51cGdyYWRlQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0FsbG9jYXRlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuc2hvd0NvbW1pc3Npb25CdXR0b24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5jb21taXNzaW9uQnV0dG9uRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwudXBncmFkZUJ1dHRvbkVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0NhbmNlbGxlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuc2hvd0NvbW1pc3Npb25CdXR0b24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5jb21taXNzaW9uQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnVwZ3JhZGVCdXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnTWFpbnRlbmFuY2UnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnNob3dDb21taXNzaW9uQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5jb21taXNzaW9uQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnVwZ3JhZGVCdXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDovL0NsdXN0ZXIgc2hvdWxkIG5vdCBiZSBpbiB0aGlzIHN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuc2hvd0NvbW1pc3Npb25CdXR0b24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLmNvbW1pc3Npb25CdXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwudXBncmFkZUJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Tm9kZUluZm8ocmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgTm9kZXNNb2RlbC5nZXRNb2RlbEJ5S2V5KCRzdGF0ZVBhcmFtcy5rZXksIHJlbG9hZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5ub2RlID0gbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEJ1dHRvbkRpc3BsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5kZWNvbW1pc3Npb24gPSBkZWNvbW1pc3Npb247XG4gICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwudXBncmFkZSA9IHVwZ3JhZGU7XG5cbiAgICAgICAgICAgIC8vTG9hZCBmcm9tIGNhY2hlIGZvciBxdWljayBkaXNwbGF5IGluaXRpYWxseVxuICAgICAgICAgICAgZ2V0Tm9kZUluZm8oZmFsc2UpO1xuXG4gICAgICAgICAgICB2YXIgcHJvbWlzZTtcbiAgICAgICAgICAgIC8vRG9uJ3QgZG8gYXV0by1yZWZyZXNoIGlmIG9uZSBpcyBhbHJlYWR5IGluIHByb2dyZXNzXG4gICAgICAgICAgICBpZiAoIWFuZ3VsYXIuaXNEZWZpbmVkKHByb21pc2UpKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZSA9ICRpbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGdldE5vZGVJbmZvKHRydWUpO1xuICAgICAgICAgICAgICAgIH0sIDUwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9zdG9wIHBvbGxpbmcgd2hlbiB1c2VyIG1vdmVzIGF3YXkgZnJvbSB0aGUgcGFnZVxuICAgICAgICAgICAgJHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJGludGVydmFsLmNhbmNlbChwcm9taXNlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1dKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMjIvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubm9kZXMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5ub2Rlcy5saXN0Jywge1xuICAgICAgICAgICAgICAgIHVybDogJy9saXN0JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9kZUxpc3RDdHJsIGFzIG5vZGVMaXN0Q3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdub2Rlcy9ub2RlbGlzdC5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdOb2RlTGlzdEN0cmwnLCBbJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJGZpbHRlcicsICdOb2Rlc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzY29wZSwgJGludGVydmFsLCAkZmlsdGVyLCBOb2Rlc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICB2YXIgbm9kZUxpc3RDdHJsID0gdGhpcztcblxuICAgICAgICBmdW5jdGlvbiBnZXROb2RlcyhyZWxvYWQpIHtcbiAgICAgICAgICAgIE5vZGVzTW9kZWwuZ2V0KHJlbG9hZClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobm9kZUxpc3RDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RDdHJsLm5vZGVzID0gJGZpbHRlcignb3JkZXJCeScpKHJlc3VsdCwgJ2tleScpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobm9kZUxpc3RDdHJsKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vTG9hZCBmcm9tIGNhY2hlIGZvciBxdWljayBkaXNwbGF5IGluaXRpYWxseVxuICAgICAgICBnZXROb2RlcyhmYWxzZSk7XG5cbiAgICAgICAgdmFyIHByb21pc2U7XG4gICAgICAgIC8vRG9uJ3QgZG8gYXV0by1yZWZyZXNoIGlmIG9uZSBpcyBhbHJlYWR5IGluIHByb2dyZXNzXG4gICAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQocHJvbWlzZSkpIHtcbiAgICAgICAgICAgIHByb21pc2UgPSAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGdldE5vZGVzKHRydWUpO1xuICAgICAgICAgICAgfSwgQ29udGl2R2xvYmFscy5SRUZSRVNIX0lOVEVSVkFMKTtcbiAgICAgICAgfVxuICAgICAgICAvL3N0b3AgcG9sbGluZyB3aGVuIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXG4gICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJGludGVydmFsLmNhbmNlbChwcm9taXNlKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5vcmdhbml6YXRpb25zJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUub3JnYW5pemF0aW9ucy5jcmVhdGUnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2NyZWF0ZScsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdvcmdhbml6YXRpb25zL29yZ2FuaXphdGlvbmNyZWF0ZS5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnT3JnYW5pemF0aW9uQ3JlYXRlQ3RybCBhcyBvcmdhbml6YXRpb25DcmVhdGVDdHJsJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdPcmdhbml6YXRpb25DcmVhdGVDdHJsJywgWyckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ09yZ2FuaXphdGlvbnNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsXG4gICAgICAgIGZ1bmN0aW9uICgkc3RhdGUsICRzdGF0ZVBhcmFtcywgT3JnYW5pemF0aW9uc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwgPSB0aGlzO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub09yZ2FuaXphdGlvbnMoKSB7XG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5vcmdhbml6YXRpb25zLmxpc3QnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY2FuY2VsQ3JlYXRpbmcoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVG9Pcmdhbml6YXRpb25zKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZU9yZ2FuaXphdGlvbigpIHtcbiAgICAgICAgICAgICAgICAvL2Zvcm0gY29udHJvbGxlciBpcyBpbmplY3RlZCBieSB0aGUgaHRtbCB0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIC8vY2hlY2tpbmcgaWYgYWxsIHZhbGlkYXRpb25zIGhhdmUgcGFzc2VkXG4gICAgICAgICAgICAgICAgaWYgKG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwuZm9ybS4kdmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihvcmdhbml6YXRpb25DcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgb3JnYW5pemF0aW9uQ3JlYXRlQ3RybC5uZXdPcmdhbml6YXRpb24ua2V5ID0gb3JnYW5pemF0aW9uQ3JlYXRlQ3RybC5uZXdPcmdhbml6YXRpb24udGVuYW50TmFtZTsgXG4gICAgICAgICAgICAgICAgICAgIE9yZ2FuaXphdGlvbnNNb2RlbC5jcmVhdGUob3JnYW5pemF0aW9uQ3JlYXRlQ3RybC5uZXdPcmdhbml6YXRpb24pLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihvcmdhbml6YXRpb25DcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvT3JnYW5pemF0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihvcmdhbml6YXRpb25DcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihvcmdhbml6YXRpb25DcmVhdGVDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihvcmdhbml6YXRpb25DcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICBvcmdhbml6YXRpb25DcmVhdGVDdHJsLm5ld09yZ2FuaXphdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgdGVuYW50TmFtZTogJydcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvcmdhbml6YXRpb25DcmVhdGVDdHJsLmNyZWF0ZU9yZ2FuaXphdGlvbiA9IGNyZWF0ZU9yZ2FuaXphdGlvbjtcbiAgICAgICAgICAgIG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwuY2FuY2VsQ3JlYXRpbmcgPSBjYW5jZWxDcmVhdGluZztcblxuICAgICAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgICAgIH1dKTtcbiIsImFuZ3VsYXIubW9kdWxlKCdjb250aXYub3JnYW5pemF0aW9ucycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm9yZ2FuaXphdGlvbnMuZGV0YWlscycsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZGV0YWlscy86a2V5JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnT3JnYW5pemF0aW9uRGV0YWlsc0N0cmwgYXMgb3JnYW5pemF0aW9uRGV0YWlsc0N0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnb3JnYW5pemF0aW9ucy9vcmdhbml6YXRpb25kZXRhaWxzLmh0bWwnXG4gICAgICAgICAgICB9KTtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignT3JnYW5pemF0aW9uRGV0YWlsc0N0cmwnLFxuICAgICAgICBbJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckZmlsdGVyJywgJ09yZ2FuaXphdGlvbnNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsXG4gICAgICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsICRzY29wZSwgJGludGVydmFsLCAkZmlsdGVyLCBPcmdhbml6YXRpb25zTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsID0gdGhpcztcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvT3JnYW5pemF0aW9ucygpIHtcbiAgICAgICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5vcmdhbml6YXRpb25zLmxpc3QnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkZWxldGVPcmdhbml6YXRpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihvcmdhbml6YXRpb25EZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgT3JnYW5pemF0aW9uc01vZGVsLmRlbGV0ZShvcmdhbml6YXRpb25EZXRhaWxzQ3RybC5vcmdhbml6YXRpb24pLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihvcmdhbml6YXRpb25EZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub09yZ2FuaXphdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIob3JnYW5pemF0aW9uRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Iob3JnYW5pemF0aW9uRGV0YWlsc0N0cmwpO1xuXG4gICAgICAgICAgICAgICAgT3JnYW5pemF0aW9uc01vZGVsLmdldE1vZGVsQnlLZXkoJHN0YXRlUGFyYW1zLmtleSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKG9yZ2FuaXphdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JnYW5pemF0aW9uRGV0YWlsc0N0cmwub3JnYW5pemF0aW9uID0gb3JnYW5pemF0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsLmRlbGV0ZU9yZ2FuaXphdGlvbiA9IGRlbGV0ZU9yZ2FuaXphdGlvbjtcbiAgICAgICAgICAgIH1dKTsiLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2Lm9yZ2FuaXphdGlvbnMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5vcmdhbml6YXRpb25zLmxpc3QnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2xpc3QnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdPcmdhbml6YXRpb25zTGlzdEN0cmwgYXMgb3JnYW5pemF0aW9uc0xpc3RDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ29yZ2FuaXphdGlvbnMvb3JnYW5pemF0aW9ubGlzdC5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdPcmdhbml6YXRpb25zTGlzdEN0cmwnLCBbJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJGZpbHRlcicsICdPcmdhbml6YXRpb25zTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkaW50ZXJ2YWwsICRmaWx0ZXIsIE9yZ2FuaXphdGlvbnNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBvcmdhbml6YXRpb25zTGlzdEN0cmwgPSB0aGlzO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRPcmdhbml6YXRpb25zKHJlbG9hZCkge1xuICAgICAgICAgICAgICAgIE9yZ2FuaXphdGlvbnNNb2RlbC5nZXQocmVsb2FkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihvcmdhbml6YXRpb25zTGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZ2FuaXphdGlvbnNMaXN0Q3RybC5vcmdhbml6YXRpb25zID0gJGZpbHRlcignb3JkZXJCeScpKHJlc3VsdCwgJ3RlbmFudE5hbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIob3JnYW5pemF0aW9uc0xpc3RDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0xvYWQgZnJvbSBjYWNoZSBmb3IgcXVpY2sgZGlzcGxheSBpbml0aWFsbHlcbiAgICAgICAgICAgIGdldE9yZ2FuaXphdGlvbnMoZmFsc2UpO1xuXG4gICAgICAgICAgICB2YXIgcHJvbWlzZTtcbiAgICAgICAgICAgIC8vRG9uJ3QgZG8gYXV0b3JlZnJlc2ggaWYgb25lIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQocHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0T3JnYW5pemF0aW9ucyh0cnVlKTtcbiAgICAgICAgICAgICAgICB9LCBDb250aXZHbG9iYWxzLlJFRlJFU0hfSU5URVJWQUwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL3N0b3AgcG9sbGluZyB3aGVuIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXG4gICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHByb21pc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1dKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTIvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuc2VydmljZWxicycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnNlcnZpY2VsYnMuY3JlYXRlJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9jcmVhdGUnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2VydmljZV9sYnMvc2VydmljZWxiY3JlYXRlLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdTZXJ2aWNlbGJDcmVhdGVDdHJsIGFzIHNlcnZpY2VsYkNyZWF0ZUN0cmwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ1NlcnZpY2VsYkNyZWF0ZUN0cmwnLCBbXG4gICAgICAgICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ1NlcnZpY2VsYnNNb2RlbCcsICdOZXR3b3Jrc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBTZXJ2aWNlbGJzTW9kZWwsIE5ldHdvcmtzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICB2YXIgc2VydmljZWxiQ3JlYXRlQ3RybCA9IHRoaXM7XG4gICAgICAgICAgICBzZXJ2aWNlbGJDcmVhdGVDdHJsLmxhYmVsU2VsZWN0b3JzID0gW107XG4gICAgICAgICAgICBzZXJ2aWNlbGJDcmVhdGVDdHJsLm5ldHdvcmtzID0gW107XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvU2VydmljZWxicygpIHtcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51LnNlcnZpY2VsYnMubGlzdCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjYW5jZWxDcmVhdGluZygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5Ub1NlcnZpY2VsYnMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXQgbmV0d29ya3MgZm9yIHRoZSBnaXZlbiB0ZW5hbnQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldE5ldHdvcmtzKCkge1xuICAgICAgICAgICAgICAgIE5ldHdvcmtzTW9kZWwuZ2V0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2VsYkNyZWF0ZUN0cmwubmV0d29ya3MgPSBfLmZpbHRlcihyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZW5hbnROYW1lJzogJ2RlZmF1bHQnLy9UT0RPOiBSZW1vdmUgaGFyZGNvZGVkIHRlbmFudC5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUxhYmVsU2VsZWN0b3JTdHJpbmdzKCkge1xuICAgICAgICAgICAgICAgIC8vRW1wdHkgb3V0IHRoZSBzZWxlY3RvcnMuIEluIGNhc2Ugb2Ygc2VydmVyIGVycm9ycyB0aGlzIG5lZWRzIHRvIGJlIHJlc2V0LlxuICAgICAgICAgICAgICAgIHNlcnZpY2VsYkNyZWF0ZUN0cmwuc2VydmljZWxiLnNlbGVjdG9ycyA9IFtdO1xuICAgICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChzZXJ2aWNlbGJDcmVhdGVDdHJsLmxhYmVsU2VsZWN0b3JzLCBmdW5jdGlvbihsYWJlbFNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RvclN0cmluZyA9IGxhYmVsU2VsZWN0b3IubmFtZSArICc9JyArIGxhYmVsU2VsZWN0b3IudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2VsYkNyZWF0ZUN0cmwuc2VydmljZWxiLnNlbGVjdG9ycy5wdXNoKHNlbGVjdG9yU3RyaW5nKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlU2VydmljZWxiKCkge1xuICAgICAgICAgICAgICAgIGNyZWF0ZUxhYmVsU2VsZWN0b3JTdHJpbmdzKCk7XG4gICAgICAgICAgICAgICAgLy9mb3JtIGNvbnRyb2xsZXIgaXMgaW5qZWN0ZWQgYnkgdGhlIGh0bWwgdGVtcGxhdGVcbiAgICAgICAgICAgICAgICAvL2NoZWNraW5nIGlmIGFsbCB2YWxpZGF0aW9ucyBoYXZlIHBhc3NlZFxuICAgICAgICAgICAgICAgIGlmIChzZXJ2aWNlbGJDcmVhdGVDdHJsLmZvcm0uJHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihzZXJ2aWNlbGJDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIoc2VydmljZWxiQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2VsYkNyZWF0ZUN0cmwuc2VydmljZWxiLmtleSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlbGJDcmVhdGVDdHJsLnNlcnZpY2VsYi50ZW5hbnROYW1lICsgJzonICsgc2VydmljZWxiQ3JlYXRlQ3RybC5zZXJ2aWNlbGIuc2VydmljZU5hbWU7XG4gICAgICAgICAgICAgICAgICAgIFNlcnZpY2VsYnNNb2RlbC5jcmVhdGUoc2VydmljZWxiQ3JlYXRlQ3RybC5zZXJ2aWNlbGIpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzZXJ2aWNlbGJDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvU2VydmljZWxicygpO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzZXJ2aWNlbGJDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihzZXJ2aWNlbGJDcmVhdGVDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc2VydmljZWxiQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKHNlcnZpY2VsYkNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgIHNlcnZpY2VsYkNyZWF0ZUN0cmwuc2VydmljZWxiID0ge1xuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlTmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIG5ldHdvcmtOYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgaXBBZGRyZXNzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3JzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgcG9ydHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICB0ZW5hbnROYW1lOiAnZGVmYXVsdCcvL1RPRE86IFJlbW92ZSBoYXJkY29kZWQgdGVuYW50LlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXJ2aWNlbGJDcmVhdGVDdHJsLmNyZWF0ZVNlcnZpY2VsYiA9IGNyZWF0ZVNlcnZpY2VsYjtcbiAgICAgICAgICAgIHNlcnZpY2VsYkNyZWF0ZUN0cmwuY2FuY2VsQ3JlYXRpbmcgPSBjYW5jZWxDcmVhdGluZztcblxuICAgICAgICAgICAgZ2V0TmV0d29ya3MoKTtcbiAgICAgICAgICAgIHJlc2V0Rm9ybSgpO1xuICAgICAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTEvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuc2VydmljZWxicycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnNlcnZpY2VsYnMuZGV0YWlscycsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZGV0YWlscy86a2V5JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnU2VydmljZWxiRGV0YWlsc0N0cmwgYXMgc2VydmljZWxiRGV0YWlsc0N0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2VydmljZV9sYnMvc2VydmljZWxiZGV0YWlscy5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc2VydmljZWxicy5lZGl0Jywge1xuICAgICAgICAgICAgICAgIHVybDogJy9lZGl0LzprZXknLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdTZXJ2aWNlbGJEZXRhaWxzQ3RybCBhcyBzZXJ2aWNlbGJEZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzZXJ2aWNlX2xicy9zZXJ2aWNlbGJkZXRhaWxzLmh0bWwnXG4gICAgICAgICAgICB9KTtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignU2VydmljZWxiRGV0YWlsc0N0cmwnLFxuICAgICAgICBbJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnU2VydmljZWxic01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uICgkc3RhdGUsICRzdGF0ZVBhcmFtcywgU2VydmljZWxic01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgICAgIHZhciBzZXJ2aWNlbGJEZXRhaWxzQ3RybCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgc2VydmljZWxiRGV0YWlsc0N0cmwubGFiZWxTZWxlY3RvcnMgPSBbXTtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFRvIHNob3cgZWRpdCBvciBkZXRhaWxzIHNjcmVlbiBiYXNlZCBvbiB0aGUgcm91dGVcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzZXRNb2RlKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJHN0YXRlLmlzKCdjb250aXYubWVudS5zZXJ2aWNlbGJzLmVkaXQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZWxiRGV0YWlsc0N0cmwubW9kZSA9ICdlZGl0JztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VsYkRldGFpbHNDdHJsLm1vZGUgPSAnZGV0YWlscyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub1NlcnZpY2VsYnMoKSB7XG4gICAgICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUuc2VydmljZWxicy5saXN0Jyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9TZXJ2aWNlbGJEZXRhaWxzKCkge1xuICAgICAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51LnNlcnZpY2VsYnMuZGV0YWlscycsIHsna2V5Jzogc2VydmljZWxiRGV0YWlsc0N0cmwuc2VydmljZWxiLmtleX0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNhbmNlbEVkaXRpbmcoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblRvU2VydmljZWxiRGV0YWlscygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRlbGV0ZVNlcnZpY2VsYigpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKHNlcnZpY2VsYkRldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIoc2VydmljZWxiRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlbGJzTW9kZWwuZGVsZXRlKHNlcnZpY2VsYkRldGFpbHNDdHJsLnNlcnZpY2VsYikudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHNlcnZpY2VsYkRldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvU2VydmljZWxicygpO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzZXJ2aWNlbGJEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3Ioc2VydmljZWxiRGV0YWlsc0N0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNhdmVTZXJ2aWNlbGIoKSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihzZXJ2aWNlbGJEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKHNlcnZpY2VsYkRldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlTGFiZWxTZWxlY3RvclN0cmluZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgU2VydmljZWxic01vZGVsLnNhdmUoc2VydmljZWxiRGV0YWlsc0N0cmwuc2VydmljZWxiKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc2VydmljZWxiRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9TZXJ2aWNlbGJEZXRhaWxzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHNlcnZpY2VsYkRldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihzZXJ2aWNlbGJEZXRhaWxzQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlTGFiZWxTZWxlY3RvcnMoKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChzZXJ2aWNlbGJEZXRhaWxzQ3RybC5zZXJ2aWNlbGIuc2VsZWN0b3JzLCBmdW5jdGlvbihzZWxlY3RvclN0cikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdG9yID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHNlbGVjdG9yU3RyLnNwbGl0KCc9JylbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNlbGVjdG9yU3RyLnNwbGl0KCc9JylbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlbGJEZXRhaWxzQ3RybC5sYWJlbFNlbGVjdG9ycy5wdXNoKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlTGFiZWxTZWxlY3RvclN0cmluZ3MoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2VsYkRldGFpbHNDdHJsLnNlcnZpY2VsYi5zZWxlY3RvcnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHNlcnZpY2VsYkRldGFpbHNDdHJsLmxhYmVsU2VsZWN0b3JzLCBmdW5jdGlvbihsYWJlbFNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0b3JTdHJpbmcgPSBsYWJlbFNlbGVjdG9yLm5hbWUgKyAnPScgKyBsYWJlbFNlbGVjdG9yLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZWxiRGV0YWlsc0N0cmwuc2VydmljZWxiLnNlbGVjdG9ycy5wdXNoKHNlbGVjdG9yU3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHNlcnZpY2VsYkRldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Ioc2VydmljZWxiRGV0YWlsc0N0cmwpO1xuXG4gICAgICAgICAgICAgICAgU2VydmljZWxic01vZGVsLmdldE1vZGVsQnlLZXkoJHN0YXRlUGFyYW1zLmtleSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHNlcnZpY2VsYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZWxiRGV0YWlsc0N0cmwuc2VydmljZWxiID0gc2VydmljZWxiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTGFiZWxTZWxlY3RvcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzZXJ2aWNlbGJEZXRhaWxzQ3RybC5zYXZlU2VydmljZWxiID0gc2F2ZVNlcnZpY2VsYjtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlbGJEZXRhaWxzQ3RybC5jYW5jZWxFZGl0aW5nID0gY2FuY2VsRWRpdGluZztcbiAgICAgICAgICAgICAgICBzZXJ2aWNlbGJEZXRhaWxzQ3RybC5kZWxldGVTZXJ2aWNlbGIgPSBkZWxldGVTZXJ2aWNlbGI7XG4gICAgICAgICAgICAgICAgc2V0TW9kZSgpO1xuXG4gICAgICAgICAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTEvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuc2VydmljZWxicycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnNlcnZpY2VsYnMubGlzdCcsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvbGlzdCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1NlcnZpY2VsYkxpc3RDdHJsIGFzIHNlcnZpY2VsYkxpc3RDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NlcnZpY2VfbGJzL3NlcnZpY2VsYmxpc3QuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignU2VydmljZWxiTGlzdEN0cmwnLCBbJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJGZpbHRlcicsICdTZXJ2aWNlbGJzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkaW50ZXJ2YWwsICRmaWx0ZXIsIFNlcnZpY2VsYnNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBzZXJ2aWNlbGJMaXN0Q3RybCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFNlcnZpY2VsYnMocmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgU2VydmljZWxic01vZGVsLmdldChyZWxvYWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHNlcnZpY2VsYkxpc3RDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlbGJMaXN0Q3RybC5zZXJ2aWNlbGJzID0gJGZpbHRlcignb3JkZXJCeScpKHJlc3VsdCwgJ3NlcnZpY2VOYW1lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHNlcnZpY2VsYkxpc3RDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0xvYWQgZnJvbSBjYWNoZSBmb3IgcXVpY2sgZGlzcGxheSBpbml0aWFsbHlcbiAgICAgICAgICAgIGdldFNlcnZpY2VsYnMoZmFsc2UpO1xuXG4gICAgICAgICAgICB2YXIgcHJvbWlzZTtcbiAgICAgICAgICAgIC8vRG9uJ3QgZG8gYXV0b3JlZnJlc2ggaWYgb25lIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQocHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0U2VydmljZWxicyh0cnVlKTtcbiAgICAgICAgICAgICAgICB9LCBDb250aXZHbG9iYWxzLlJFRlJFU0hfSU5URVJWQUwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL3N0b3AgcG9sbGluZyB3aGVuIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXG4gICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHByb21pc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xMy8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoXCJjb250aXYuc2VydmljZWxic1wiKVxuICAgIC5kaXJlY3RpdmUoXCJjdHZTZXJ2aWNlbGJwb3J0c1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICByZXR1cm4ge1xuICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgIGl0ZW1zOiAnPSdcbiAgICAgICAgICAgfSxcbiAgICAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUpIHtcbiAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICogQ29tcGFyZSBpZiB0d28gaXRlbXMgaGF2ZSBzYW1lIHBvcnRzIGFuZCBwcm90b2NvbHNcbiAgICAgICAgICAgICAgICAqIEBwYXJhbSB2YWwxXG4gICAgICAgICAgICAgICAgKiBAcGFyYW0gdmFsMlxuICAgICAgICAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNvbXBhcmUodmFsMSwgdmFsMikge1xuICAgICAgICAgICAgICAgICAgIHJldHVybiAodmFsMSA9PT0gdmFsMik7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlc2V0TmV3SXRlbSgpIHtcbiAgICAgICAgICAgICAgICAgICBzY29wZS5uZXdJdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlUG9ydDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyUG9ydDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgIHByb3RvY29sOiAnJ1xuICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGZ1bmN0aW9uIGlzRW1wdHlJdGVtKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICByZXR1cm4gKGl0ZW0uc2VydmljZVBvcnQgPT09ICcnICYmIGl0ZW0ucHJvdmlkZXJQb3J0ID09PSAnJyAmJiBpdGVtLnByb3RvY29sID09PSAnJyk7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIHNjb3BlLmFkZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgIGlmIChpc0VtcHR5SXRlbShzY29wZS5uZXdJdGVtKSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgIGlmIChzY29wZS5pdGVtcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLml0ZW1zID0gW107XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIHZhciBuZXdJdGVtU3RyID0gc2NvcGUubmV3SXRlbS5zZXJ2aWNlUG9ydCArICc6J1xuICAgICAgICAgICAgICAgICAgICAgICArIHNjb3BlLm5ld0l0ZW0ucHJvdmlkZXJQb3J0ICsgJzonXG4gICAgICAgICAgICAgICAgICAgICAgICsgc2NvcGUubmV3SXRlbS5wcm90b2NvbDtcbiAgICAgICAgICAgICAgICAgICAvL1JlbW92ZXMgZXhpc3RpbmcgaXRlbSB3aXRoIHRoZSBzYW1lIHZhbHVlIGZpcnN0IGlmIGl0IGV4aXN0cy5cbiAgICAgICAgICAgICAgICAgICBfLnB1bGxBbGxXaXRoKHNjb3BlLml0ZW1zLCBbbmV3SXRlbVN0cl0sIGNvbXBhcmUpO1xuICAgICAgICAgICAgICAgICAgIHNjb3BlLml0ZW1zLnB1c2gobmV3SXRlbVN0cik7XG4gICAgICAgICAgICAgICAgICAgcmVzZXROZXdJdGVtKCk7XG4gICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICBzY29wZS5yZW1vdmUgPSBmdW5jdGlvbihwYXNzZWRJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgXy5yZW1vdmUoc2NvcGUuaXRlbXMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb21wYXJlKGl0ZW0sIHBhc3NlZEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgIHJlc2V0TmV3SXRlbSgpO1xuICAgICAgICAgICB9LFxuICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NlcnZpY2VfbGJzL3NlcnZpY2VsYnBvcnRzLmh0bWwnXG4gICAgICAgfVxuICAgIH0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA2LzEvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuc3RvcmFnZXBvbGljaWVzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc3RvcmFnZXBvbGljaWVzLmNyZWF0ZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvY3JlYXRlJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3N0b3JhZ2VfcG9saWNpZXMvc3RvcmFnZXBvbGljeWNyZWF0ZS5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnU3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwgYXMgc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ1N0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsJywgWyckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ1N0b3JhZ2VQb2xpY2llc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBTdG9yYWdlUG9saWNpZXNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvU3RvcmFnZVBvbGljaWVzKCkge1xuICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUuc3RvcmFnZXBvbGljaWVzLmxpc3QnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY2FuY2VsQ3JlYXRpbmcoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVG9TdG9yYWdlUG9saWNpZXMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlRmlsZXN5c3RlbUNtZHMoKSB7XG4gICAgICAgICAgICAgICAgc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwuZmlsZXN5c3RlbWNtZHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybC5uZXdTdG9yYWdlUG9saWN5LmZpbGVzeXN0ZW1zW2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVQb2xpY3koKSB7XG4gICAgICAgICAgICAgICAgLy9mb3JtIGNvbnRyb2xsZXIgaXMgaW5qZWN0ZWQgYnkgdGhlIGh0bWwgdGVtcGxhdGVcbiAgICAgICAgICAgICAgICAvL2NoZWNraW5nIGlmIGFsbCB2YWxpZGF0aW9ucyBoYXZlIHBhc3NlZFxuICAgICAgICAgICAgICAgIGlmIChzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybC5mb3JtLiR2YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Ioc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUZpbGVzeXN0ZW1DbWRzKCk7XG4gICAgICAgICAgICAgICAgICAgIFN0b3JhZ2VQb2xpY2llc01vZGVsLmNyZWF0ZShzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybC5uZXdTdG9yYWdlUG9saWN5KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvU3RvcmFnZVBvbGljaWVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKHN0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybC5uZXdTdG9yYWdlUG9saWN5ID0ge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJiYWNrZW5kc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNydWRcIjogXCJjZXBoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1vdW50XCI6IFwiY2VwaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzbmFwc2hvdFwiOiBcImNlcGhcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInVubG9ja2VkXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBcImRyaXZlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInBvb2xcIjogXCJyYmRcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogXCIxME1CXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZpbGVzeXN0ZW1cIjogXCJleHQ0XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJydW50aW1lXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic25hcHNob3RzXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNuYXBzaG90XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZyZXF1ZW5jeVwiOiBcIjMwbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2VlcFwiOiAyMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmF0ZS1saW1pdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3cml0ZS1pb3BzXCI6IDEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWFkLWlvcHNcIjogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndyaXRlLWJwc1wiOiAxMDAwMDAwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWFkLWJwc1wiOiAxMDAwMDAwMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJmaWxlc3lzdGVtc1wiOiB7fVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsLmNyZWF0ZVBvbGljeSA9IGNyZWF0ZVBvbGljeTtcbiAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsLmNhbmNlbENyZWF0aW5nID0gY2FuY2VsQ3JlYXRpbmc7XG4gICAgICAgICAgICBzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybC5maWxlc3lzdGVtY21kcyA9IFtdO1xuXG4gICAgICAgICAgICByZXNldEZvcm0oKTtcbiAgICAgICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzI3LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnN0b3JhZ2Vwb2xpY2llcycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnN0b3JhZ2Vwb2xpY2llcy5kZXRhaWxzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9kZXRhaWxzLzprZXknLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdTdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwgYXMgc3RvcmFnZVBvbGljeURldGFpbHNDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3N0b3JhZ2VfcG9saWNpZXMvc3RvcmFnZXBvbGljeWRldGFpbHMuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnN0b3JhZ2Vwb2xpY2llcy5lZGl0Jywge1xuICAgICAgICAgICAgICAgIHVybDogJy9kZXRhaWxzLzprZXknLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdTdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwgYXMgc3RvcmFnZVBvbGljeURldGFpbHNDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3N0b3JhZ2VfcG9saWNpZXMvc3RvcmFnZXBvbGljeWRldGFpbHMuaHRtbCdcbiAgICAgICAgICAgIH0pO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdTdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwnLFxuICAgICAgICBbJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckZmlsdGVyJywgJ1N0b3JhZ2VQb2xpY2llc01vZGVsJywgJ1ZvbHVtZXNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsXG4gICAgICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsICRzY29wZSwgJGludGVydmFsLCAkZmlsdGVyLCBTdG9yYWdlUG9saWNpZXNNb2RlbCwgVm9sdW1lc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgICAgIHZhciBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5maWxlc3lzdGVtY21kcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogVG8gc2hvdyBlZGl0IG9yIGRldGFpbHMgc2NyZWVuIGJhc2VkIG9uIHRoZSByb3V0ZVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNldE1vZGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkc3RhdGUuaXMoJ2NvbnRpdi5tZW51LnN0b3JhZ2Vwb2xpY2llcy5lZGl0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5tb2RlID0gJ2VkaXQnO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLm1vZGUgPSAnZGV0YWlscyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub1BvbGljaWVzKCkge1xuICAgICAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51LnN0b3JhZ2Vwb2xpY2llcy5saXN0Jyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9Qb2xpY3lEZXRhaWxzKCkge1xuICAgICAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51LnN0b3JhZ2Vwb2xpY2llcy5kZXRhaWxzJywgeydrZXknOiBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwucG9saWN5Lm5hbWV9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjYW5jZWxFZGl0aW5nKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub1BvbGljeURldGFpbHMoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkZWxldGVQb2xpY3koKSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBTdG9yYWdlUG9saWNpZXNNb2RlbC5kZWxldGVVc2luZ0tleShzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwucG9saWN5Lm5hbWUsICduYW1lJykudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9Qb2xpY2llcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEdldCB2b2x1bWVzIGJlbG9uZ2luZyB0byBhIHBvbGljeVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldFZvbHVtZXMocmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgIFZvbHVtZXNNb2RlbC5nZXQocmVsb2FkKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC52b2x1bWVzID0gJGZpbHRlcignb3JkZXJCeScpKF8uZmlsdGVyKHJlc3VsdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwb2xpY3knOiBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwucG9saWN5Lm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAnbmFtZScpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBpbml0aWFsaXplRmlsZXN5c3RlbUNtZHNBcnJheSgpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5wb2xpY3kuZmlsZXN5c3RlbXMsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVzaCh7bmFtZToga2V5LCB2YWx1ZTogdmFsdWV9KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLmZpbGVzeXN0ZW1jbWRzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVGaWxlc3lzdGVtQ21kcygpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLmZpbGVzeXN0ZW1jbWRzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5wb2xpY3kuZmlsZXN5c3RlbXNbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNhdmVQb2xpY3koKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vZm9ybSBjb250cm9sbGVyIGlzIGluamVjdGVkIGJ5IHRoZSBodG1sIHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgIC8vY2hlY2tpbmcgaWYgYWxsIHZhbGlkYXRpb25zIGhhdmUgcGFzc2VkXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwuZm9ybS4kdmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIoc3RvcmFnZVBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUZpbGVzeXN0ZW1DbWRzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBTdG9yYWdlUG9saWNpZXNNb2RlbC5zYXZlKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5wb2xpY3kpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc3RvcmFnZVBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub1BvbGljeURldGFpbHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc3RvcmFnZVBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Ioc3RvcmFnZVBvbGljeURldGFpbHNDdHJsKTtcblxuICAgICAgICAgICAgICAgIFN0b3JhZ2VQb2xpY2llc01vZGVsLmdldE1vZGVsQnlLZXkoJHN0YXRlUGFyYW1zLmtleSwgZmFsc2UsICduYW1lJylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHBvbGljeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLnBvbGljeSA9IHBvbGljeTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxpemVGaWxlc3lzdGVtQ21kc0FycmF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2dldFZvbHVtZXMoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAgICAgc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLmRlbGV0ZVBvbGljeSA9IGRlbGV0ZVBvbGljeTtcbiAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwuc2F2ZVBvbGljeSA9IHNhdmVQb2xpY3k7XG4gICAgICAgICAgICAgICAgc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLmNhbmNlbEVkaXRpbmcgPSBjYW5jZWxFZGl0aW5nO1xuXG4gICAgICAgICAgICAgICAgc2V0TW9kZSgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2U7XG4gICAgICAgICAgICAgICAgLy9Eb24ndCBkbyBhdXRvcmVmcmVzaCBpZiBvbmUgaXMgYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQocHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9ICRpbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2dldFZvbHVtZXModHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIENvbnRpdkdsb2JhbHMuUkVGUkVTSF9JTlRFUlZBTCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9zdG9wIHBvbGxpbmcgd2hlbiB1c2VyIG1vdmVzIGF3YXkgZnJvbSB0aGUgcGFnZVxuICAgICAgICAgICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHByb21pc2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA2LzIvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKFwiY29udGl2LnN0b3JhZ2Vwb2xpY2llc1wiKVxuICAgIC5kaXJlY3RpdmUoXCJjdHZTdG9yYWdlcG9saWN5YmFzaWNzZXR0aW5nc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcblxuICAgICAgICB9XG4gICAgfSlcbiAgICAuZGlyZWN0aXZlKFwiY3R2U3RvcmFnZXBvbGljeWZpbGVzeXN0ZW1zZXR0aW5nc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgIHBvbGljeTogJz0nLFxuICAgICAgICAgICAgICAgIGZpbGVzeXN0ZW1jbWRzOiAnPSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSkge1xuICAgICAgICAgICAgICAgIHNjb3BlLmZpbGVzeXN0ZW1zID0gWydleHQ0JywgJ2J0cmZzJ107XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzdG9yYWdlX3BvbGljaWVzL2ZpbGVzeXN0ZW1zZXR0aW5ncy5odG1sJ1xuICAgICAgICB9XG4gICAgfSlcbiAgICAuZGlyZWN0aXZlKFwiY3R2U3RvcmFnZXBvbGljeXNuYXBzaG90c2V0dGluZ3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgICBwb2xpY3k6ICc9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc3RvcmFnZV9wb2xpY2llcy9zbmFwc2hvdHNldHRpbmdzLmh0bWwnXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC5kaXJlY3RpdmUoXCJjdHZTdG9yYWdlcG9saWN5cndvcHNzZXR0aW5nc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgIHBvbGljeTogJz0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzdG9yYWdlX3BvbGljaWVzL3J3b3Bzc2V0dGluZ3MuaHRtbCdcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLmRpcmVjdGl2ZShcImN0dlN0b3JhZ2Vwb2xpY3liYWNrZW5kZHJpdmVyc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgIHBvbGljeTogJz0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzdG9yYWdlX3BvbGljaWVzL2JhY2tlbmRkcml2ZXJzLmh0bWwnXG4gICAgICAgIH1cbiAgICB9KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNC8xOC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5zdG9yYWdlcG9saWNpZXMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5zdG9yYWdlcG9saWNpZXMubGlzdCcsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvbGlzdCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1N0b3JhZ2VQb2xpY3lMaXN0Q3RybCBhcyBzdG9yYWdlUG9saWN5TGlzdEN0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc3RvcmFnZV9wb2xpY2llcy9zdG9yYWdlcG9saWN5bGlzdC5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdTdG9yYWdlUG9saWN5TGlzdEN0cmwnLCBbJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJGZpbHRlcicsICdTdG9yYWdlUG9saWNpZXNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICRpbnRlcnZhbCwgJGZpbHRlciwgU3RvcmFnZVBvbGljaWVzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICB2YXIgc3RvcmFnZVBvbGljeUxpc3RDdHJsID0gdGhpcztcblxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UG9saWNpZXMocmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgU3RvcmFnZVBvbGljaWVzTW9kZWwuZ2V0KHJlbG9hZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzdG9yYWdlUG9saWN5TGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVBvbGljeUxpc3RDdHJsLnBvbGljaWVzID0gJGZpbHRlcignb3JkZXJCeScpKHJlc3VsdCwgJ25hbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc3RvcmFnZVBvbGljeUxpc3RDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vTG9hZCBmcm9tIGNhY2hlIGZvciBxdWljayBkaXNwbGF5IGluaXRpYWxseVxuICAgICAgICAgICAgZ2V0UG9saWNpZXMoZmFsc2UpO1xuXG4gICAgICAgICAgICB2YXIgcHJvbWlzZTtcbiAgICAgICAgICAgIC8vRG9uJ3QgZG8gYXV0by1yZWZyZXNoIGlmIG9uZSBpcyBhbHJlYWR5IGluIHByb2dyZXNzXG4gICAgICAgICAgICBpZiAoIWFuZ3VsYXIuaXNEZWZpbmVkKHByb21pc2UpKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZSA9ICRpbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGdldFBvbGljaWVzKHRydWUpO1xuICAgICAgICAgICAgICAgIH0sIENvbnRpdkdsb2JhbHMuUkVGUkVTSF9JTlRFUlZBTCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL3N0b3AgcG9sbGluZyB3aGVuIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXG4gICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHByb21pc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1dKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDYvMy8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi52b2x1bWVzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUudm9sdW1lcy5jcmVhdGUnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2NyZWF0ZScsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd2b2x1bWVzL3ZvbHVtZWNyZWF0ZS5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVm9sdW1lQ3JlYXRlQ3RybCBhcyB2b2x1bWVDcmVhdGVDdHJsJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdWb2x1bWVDcmVhdGVDdHJsJywgWyckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ1ZvbHVtZXNNb2RlbCcsICdTdG9yYWdlUG9saWNpZXNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsXG4gICAgICAgIGZ1bmN0aW9uICgkc3RhdGUsICRzdGF0ZVBhcmFtcywgVm9sdW1lc01vZGVsLCBTdG9yYWdlUG9saWNpZXNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciB2b2x1bWVDcmVhdGVDdHJsID0gdGhpcztcbiAgICAgICAgICAgIHZvbHVtZUNyZWF0ZUN0cmwuZmlsZXN5c3RlbXMgPSBbJ2V4dDQnLCAnYnRyZnMnXTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9Wb2x1bWVzTW9kZWwoKSB7XG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS52b2x1bWVzLmxpc3QnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY2FuY2VsQ3JlYXRpbmcoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVG9Wb2x1bWVzTW9kZWwoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXQgc3RvcmFnZSBwb2xpY2llcy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0U3RvcmFnZVBvbGljaWVzKCkge1xuICAgICAgICAgICAgICAgIFN0b3JhZ2VQb2xpY2llc01vZGVsLmdldCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICB2b2x1bWVDcmVhdGVDdHJsLnBvbGljaWVzID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBhcHBseVBvbGljeVNldHRpbmdzKCkge1xuICAgICAgICAgICAgICAgIHZvbHVtZUNyZWF0ZUN0cmwubmV3Vm9sdW1lLnBvbGljeSA9IHZvbHVtZUNyZWF0ZUN0cmwuc2VsZWN0ZWRQb2xpY3kubmFtZTtcbiAgICAgICAgICAgICAgICB2b2x1bWVDcmVhdGVDdHJsLm5ld1ZvbHVtZS5iYWNrZW5kcyA9IHZvbHVtZUNyZWF0ZUN0cmwuc2VsZWN0ZWRQb2xpY3kuYmFja2VuZHM7XG4gICAgICAgICAgICAgICAgdm9sdW1lQ3JlYXRlQ3RybC5uZXdWb2x1bWUuZHJpdmVyID0gdm9sdW1lQ3JlYXRlQ3RybC5zZWxlY3RlZFBvbGljeS5kcml2ZXI7XG4gICAgICAgICAgICAgICAgdm9sdW1lQ3JlYXRlQ3RybC5uZXdWb2x1bWUuY3JlYXRlID0gdm9sdW1lQ3JlYXRlQ3RybC5zZWxlY3RlZFBvbGljeS5jcmVhdGU7XG4gICAgICAgICAgICAgICAgdm9sdW1lQ3JlYXRlQ3RybC5uZXdWb2x1bWUucnVudGltZSA9IHZvbHVtZUNyZWF0ZUN0cmwuc2VsZWN0ZWRQb2xpY3kucnVudGltZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlVm9sdW1lKCkge1xuICAgICAgICAgICAgICAgIC8vZm9ybSBjb250cm9sbGVyIGlzIGluamVjdGVkIGJ5IHRoZSBodG1sIHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgLy9jaGVja2luZyBpZiBhbGwgdmFsaWRhdGlvbnMgaGF2ZSBwYXNzZWRcbiAgICAgICAgICAgICAgICBpZiAodm9sdW1lQ3JlYXRlQ3RybC5mb3JtLiR2YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Iodm9sdW1lQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKHZvbHVtZUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBhcHBseVBvbGljeVNldHRpbmdzKCk7XG4gICAgICAgICAgICAgICAgICAgIFZvbHVtZXNNb2RlbC5jcmVhdGUodm9sdW1lQ3JlYXRlQ3RybC5uZXdWb2x1bWUpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcih2b2x1bWVDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvVm9sdW1lc01vZGVsKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHZvbHVtZUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKHZvbHVtZUNyZWF0ZUN0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcih2b2x1bWVDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Iodm9sdW1lQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgdm9sdW1lQ3JlYXRlQ3RybC5uZXdWb2x1bWUgPSB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBcImJhY2tlbmRzXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICBcImRyaXZlclwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVcIjoge30sXG4gICAgICAgICAgICAgICAgICAgIFwicnVudGltZVwiOiB7fVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZvbHVtZUNyZWF0ZUN0cmwuY3JlYXRlVm9sdW1lID0gY3JlYXRlVm9sdW1lO1xuICAgICAgICAgICAgdm9sdW1lQ3JlYXRlQ3RybC5jYW5jZWxDcmVhdGluZyA9IGNhbmNlbENyZWF0aW5nO1xuXG4gICAgICAgICAgICBnZXRTdG9yYWdlUG9saWNpZXMoKTtcblxuICAgICAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNC8xNS8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi52b2x1bWVzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUudm9sdW1lcy5kZXRhaWxzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9kZXRhaWxzLzprZXknLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdWb2x1bWVEZXRhaWxzQ3RybCBhcyB2b2x1bWVEZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd2b2x1bWVzL3ZvbHVtZWRldGFpbHMuaHRtbCdcbiAgICAgICAgICAgIH0pO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdWb2x1bWVEZXRhaWxzQ3RybCcsXG4gICAgICAgIFsnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICckc2NvcGUnLCAnJGludGVydmFsJywgJyRodHRwJywgJ1ZvbHVtZXNNb2RlbCcsICdWb2x1bWVTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkc2NvcGUsICRpbnRlcnZhbCwgJGh0dHAsIFZvbHVtZXNNb2RlbCwgVm9sdW1lU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIHZvbHVtZURldGFpbHNDdHJsID0gdGhpcztcblxuICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9Wb2x1bWVzKCkge1xuICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUudm9sdW1lcy5saXN0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBkZWxldGVWb2x1bWUoKSB7XG4gICAgICAgICAgICAgICAgVm9sdW1lc01vZGVsLmRlbGV0ZSh2b2x1bWVEZXRhaWxzQ3RybC52b2x1bWUpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub1ZvbHVtZXMoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Vm9sdW1lSW5mbyhyZWxvYWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdG9rZW5zID0gJHN0YXRlUGFyYW1zLmtleS5zcGxpdCgnLycpO1xuICAgICAgICAgICAgICAgIHZhciBtb2RlbCA9e307XG4gICAgICAgICAgICAgICAgbW9kZWwucG9saWN5ID0gdG9rZW5zWzBdO1xuICAgICAgICAgICAgICAgIG1vZGVsLm5hbWUgPSB0b2tlbnNbMV07XG4gICAgICAgICAgICAgICAgVm9sdW1lc01vZGVsLmdldE1vZGVsKG1vZGVsLCByZWxvYWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh2b2x1bWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZvbHVtZURldGFpbHNDdHJsLnZvbHVtZSA9IHZvbHVtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFZvbHVtZVVzZUluZm8oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFZvbHVtZVNuYXBzaG90cygpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Vm9sdW1lVXNlSW5mbygpIHtcbiAgICAgICAgICAgICAgICBWb2x1bWVTZXJ2aWNlLmdldFZvbHVtZVVzZUluZm8odm9sdW1lRGV0YWlsc0N0cmwudm9sdW1lKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lRGV0YWlsc0N0cmwudm9sdW1lVXNlID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vUmV0dXJucyBlcnJvciBpZiB2b2x1bWUgaXMgbm90IG1vdW50ZWQgYnkgYW55IGNvbnRhaW5lclxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRWb2x1bWVTbmFwc2hvdHMoKSB7XG4gICAgICAgICAgICAgICAgVm9sdW1lU2VydmljZS5nZXRWb2x1bWVTbmFwc2hvdHModm9sdW1lRGV0YWlsc0N0cmwudm9sdW1lKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lRGV0YWlsc0N0cmwuc25hcHNob3RzID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY29weVNuYXBzaG90KHNuYXBzaG90LCBuZXdWb2x1bWUpIHtcbiAgICAgICAgICAgICAgICBWb2x1bWVzTW9kZWwuY29weShtb2RlbCwgc25hcHNob3QsIG5ld1ZvbHVtZSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdm9sdW1lRGV0YWlsc0N0cmwuZGVsZXRlVm9sdW1lID0gZGVsZXRlVm9sdW1lO1xuICAgICAgICAgICAgdm9sdW1lRGV0YWlsc0N0cmwuY29weVNuYXBzaG90ID0gY29weVNuYXBzaG90O1xuXG4gICAgICAgICAgICAvL0xvYWQgZnJvbSBjYWNoZSBmb3IgcXVpY2sgZGlzcGxheSBpbml0aWFsbHlcbiAgICAgICAgICAgIGdldFZvbHVtZUluZm8oZmFsc2UpO1xuXG4gICAgICAgICAgICB2YXIgcHJvbWlzZTtcbiAgICAgICAgICAgIC8vRG9uJ3QgZG8gYXV0by1yZWZyZXNoIGlmIG9uZSBpcyBhbHJlYWR5IGluIHByb2dyZXNzXG4gICAgICAgICAgICBpZiAoIWFuZ3VsYXIuaXNEZWZpbmVkKHByb21pc2UpKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZSA9ICRpbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGdldFZvbHVtZUluZm8odHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSwgQ29udGl2R2xvYmFscy5SRUZSRVNIX0lOVEVSVkFMKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vc3RvcCBwb2xsaW5nIHdoZW4gdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcbiAgICAgICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRpbnRlcnZhbC5jYW5jZWwocHJvbWlzZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzIyLzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnZvbHVtZXMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS52b2x1bWVzLmxpc3QnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2xpc3QnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdWb2x1bWVMaXN0Q3RybCBhcyB2b2x1bWVMaXN0Q3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd2b2x1bWVzL3ZvbHVtZWxpc3QuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignVm9sdW1lTGlzdEN0cmwnLCBbJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJGZpbHRlcicsICdWb2x1bWVzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkaW50ZXJ2YWwsICRmaWx0ZXIsIFZvbHVtZXNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciB2b2x1bWVMaXN0Q3RybCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFZvbHVtZXMocmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgVm9sdW1lc01vZGVsLmdldChyZWxvYWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIodm9sdW1lTGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdm9sdW1lTGlzdEN0cmwudm9sdW1lcyA9ICRmaWx0ZXIoJ29yZGVyQnknKShyZXN1bHQsICduYW1lJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHZvbHVtZUxpc3RDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vTG9hZCBmcm9tIGNhY2hlIGZvciBxdWljayBkaXNwbGF5IGluaXRpYWxseVxuICAgICAgICAgICAgZ2V0Vm9sdW1lcyhmYWxzZSk7XG5cbiAgICAgICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICAgICAgLy9Eb24ndCBkbyBhdXRvLXJlZnJlc2ggaWYgb25lIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQocHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0Vm9sdW1lcyh0cnVlKTtcbiAgICAgICAgICAgICAgICB9LCBDb250aXZHbG9iYWxzLlJFRlJFU0hfSU5URVJWQUwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9zdG9wIHBvbGxpbmcgd2hlbiB1c2VyIG1vdmVzIGF3YXkgZnJvbSB0aGUgcGFnZVxuICAgICAgICAgICAgJHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJGludGVydmFsLmNhbmNlbChwcm9taXNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDYvNS8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi52b2x1bWVzJylcbiAgICAuZmFjdG9yeSgnVm9sdW1lU2VydmljZScsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XG4gICAgICAgIGZ1bmN0aW9uIGdldFZvbHVtZVVzZUluZm8odm9sdW1lKSB7XG4gICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgICAgICAgdmFyIHVybCA9IENvbnRpdkdsb2JhbHMuVk9MVU1FU19VU0VTX0VORFBPSU5UXG4gICAgICAgICAgICAgICAgKyB2b2x1bWUucG9saWN5XG4gICAgICAgICAgICAgICAgKyAnLycgKyB2b2x1bWUubmFtZTtcbiAgICAgICAgICAgICRodHRwLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAvL1JldHVybnMgZXJyb3IgaWYgdm9sdW1lIGlzIG5vdCBtb3VudGVkIGJ5IGFueSBjb250YWluZXJcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFZvbHVtZVNuYXBzaG90cyh2b2x1bWUpIHtcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICAgICB2YXIgdXJsID0gQ29udGl2R2xvYmFscy5WT0xVTUVTX1NOQVBTSE9UU19FTkRQT0lOVFxuICAgICAgICAgICAgICAgICsgdm9sdW1lLnBvbGljeVxuICAgICAgICAgICAgICAgICsgJy8nICsgdm9sdW1lLm5hbWU7XG4gICAgICAgICAgICAkaHR0cC5nZXQodXJsKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0Vm9sdW1lVXNlSW5mbzogZ2V0Vm9sdW1lVXNlSW5mbyxcbiAgICAgICAgICAgIGdldFZvbHVtZVNuYXBzaG90czogZ2V0Vm9sdW1lU25hcHNob3RzXG4gICAgICAgIH1cbiAgICB9XSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA2LzIvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKFwiY29udGl2LmRpcmVjdGl2ZXNcIilcbiAgICAuZGlyZWN0aXZlKFwiY3R2Q29sbGFwc2libGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdAJyxcbiAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6ICdAJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2NvcGUuY29sbGFwc2VkID09PSB1bmRlZmluZWQpIHNjb3BlLmNvbGxhcHNlZCA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2RpcmVjdGl2ZXMvY29sbGFwc2libGUuaHRtbCdcbiAgICAgICAgfVxuICAgIH0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA0LzI4LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZShcImNvbnRpdi5kaXJlY3RpdmVzXCIpXG4gICAgLmRpcmVjdGl2ZShcImN0dkVycm9yXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgIGhlYWRlcjogJ0AnLFxuICAgICAgICAgICAgICAgIGVycm9yOiAnPSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHIpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmZpbmQoJ2knKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcygnbmctaGlkZScpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2RpcmVjdGl2ZXMvZXJyb3JtZXNzYWdlLmh0bWwnXG4gICAgICAgIH1cbiAgICB9KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xMS8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoXCJjb250aXYuZGlyZWN0aXZlc1wiKVxuICAgIC5kaXJlY3RpdmUoXCJjdHZOYW1ldmFsdWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgIGl0ZW1zOiAnPScsXG4gICAgICAgICAgICAgICBuYW1laGVhZGVyOiAnQCcsLy9GaWVsZCBuYW1lIHRvIGRpc3BsYXkgZm9yIGtleVxuICAgICAgICAgICAgICAgdmFsdWVoZWFkZXI6ICdAJywvL0ZpZWxkIG5hbWUgdG8gZGlzcGxheSBmb3IgdmFsdWVcbiAgICAgICAgICAgICAgIHR5cGU6ICdAJywvLyd0ZXh0JyBvciAnc2VsZWN0JyB0byBjaG9vc2UgaW5wdXQgb3Igc2VsZWN0IGh0bWwgdGFnIGZvciBrZXlcbiAgICAgICAgICAgICAgIG9wdGlvbnM6ICc9Jy8vVG8gYmUgdXNlZCB3aGVuIHR5cGUgaXMgJ3NlbGVjdCdcbiAgICAgICAgICAgfSxcbiAgICAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUpIHtcbiAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICogQ29tcGFyZSBpZiB0d28gaXRlbXMgaGF2ZSBzYW1lIG5hbWVcbiAgICAgICAgICAgICAgICAqIEBwYXJhbSB2YWwxXG4gICAgICAgICAgICAgICAgKiBAcGFyYW0gdmFsMlxuICAgICAgICAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNvbXBhcmUodmFsMSwgdmFsMikge1xuICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWwxLm5hbWUgPT0gdmFsMi5uYW1lO1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICBmdW5jdGlvbiByZXNldE5ld0l0ZW0oKSB7XG4gICAgICAgICAgICAgICAgICAgc2NvcGUubmV3SXRlbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGZ1bmN0aW9uIGlzRW1wdHlJdGVtKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICByZXR1cm4gKGl0ZW0ubmFtZSA9PT0gJycgJiYgaXRlbS52YWx1ZSA9PT0gJycpO1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICBzY29wZS5hZGQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICBpZiAoaXNFbXB0eUl0ZW0oc2NvcGUubmV3SXRlbSkpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICBpZiAoc2NvcGUuaXRlbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLml0ZW0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgLy9SZW1vdmVzIGV4aXN0aW5nIGl0ZW0gd2l0aCB0aGUgc2FtZSBuYW1lIGZpcnN0IGlmIGl0IGV4aXN0cy5cbiAgICAgICAgICAgICAgICAgICBfLnB1bGxBbGxXaXRoKHNjb3BlLml0ZW1zLCBbc2NvcGUubmV3SXRlbV0sIGNvbXBhcmUpO1xuICAgICAgICAgICAgICAgICAgIHNjb3BlLml0ZW1zLnB1c2goc2NvcGUubmV3SXRlbSk7XG4gICAgICAgICAgICAgICAgICAgcmVzZXROZXdJdGVtKCk7XG4gICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICBzY29wZS5yZW1vdmUgPSBmdW5jdGlvbihwYXNzZWRJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgXy5yZW1vdmUoc2NvcGUuaXRlbXMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLm5hbWUgPT0gcGFzc2VkSXRlbS5uYW1lO1xuICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgIHJlc2V0TmV3SXRlbSgpO1xuXG4gICAgICAgICAgICAgICBpZiAoc2NvcGUubmFtZWhlYWRlciA9PT0gdW5kZWZpbmVkKSBzY29wZS5uYW1laGVhZGVyID0gJ05hbWUnO1xuICAgICAgICAgICAgICAgaWYgKHNjb3BlLnZhbHVlaGVhZGVyID09PSB1bmRlZmluZWQpIHNjb3BlLnZhbHVlaGVhZGVyID0gJ1ZhbHVlJztcbiAgICAgICAgICAgICAgIGlmIChzY29wZS50eXBlID09PSB1bmRlZmluZWQpIHNjb3BlLnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgIH0sXG4gICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9kaXJlY3RpdmVzL25hbWV2YWx1ZS5odG1sJ1xuICAgICAgIH1cbiAgICB9KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS80LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZShcImNvbnRpdi5kaXJlY3RpdmVzXCIpXG4gICAgLmRpcmVjdGl2ZShcImN0dlRhYmxlXCIsIFsnZmlsdGVyRmlsdGVyJywgJ2xpbWl0VG9GaWx0ZXInLCBmdW5jdGlvbiAoZmlsdGVyRmlsdGVyLCBsaW1pdFRvRmlsdGVyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6ICc9JyxcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZGl0ZW1zOiAnPScsXG4gICAgICAgICAgICAgICAgc2l6ZTogJ0AnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udHJvbGxlcjogWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJGF0dHJzJywgZnVuY3Rpb24gKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycykge1xuICAgICAgICAgICAgICAgIHZhciB0YWJsZUN0cmwgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5jaHVua3MgPSBbXTtcbiAgICAgICAgICAgICAgICB0YWJsZUN0cmwucGFnZU5vID0gMDtcblxuICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5zaXplID0gcGFyc2VJbnQoJHNjb3BlLnNpemUsIDEwKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4odGFibGVDdHJsLnNpemUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5zaXplID0gMTI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogQWx3YXlzIGNhbGwgc2hvd0NodW5rIHdpdGggYm90aCBwYXJhbWV0ZXJzLlxuICAgICAgICAgICAgICAgICAqIEBwYXJhbSBwYWdlTm9cbiAgICAgICAgICAgICAgICAgKiBAcGFyYW0gc2VhcmNoVGV4dFxuICAgICAgICAgICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNob3dDaHVuayhwYWdlTm8sIHNlYXJjaFRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFibGVDdHJsLnNlYXJjaFRleHQgPSBzZWFyY2hUZXh0O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYWdlTm8gPT09IHVuZGVmaW5lZCB8fCBwYWdlTm8gPCAwKSBwYWdlTm8gPSAwO1xuICAgICAgICAgICAgICAgICAgICB0YWJsZUN0cmwucGFnZU5vID0gcGFnZU5vO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuaXRlbXMgIT09IHVuZGVmaW5lZCkgey8vVE9ETzogQ2hlY2sgd2h5IGl0ZW1zIGFyZSB1bmRlZmluZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VhcmNoVGV4dEZpbHRlcmVkSXRlbXMgPSBmaWx0ZXJGaWx0ZXIoJHNjb3BlLml0ZW1zLCB0YWJsZUN0cmwuc2VhcmNoVGV4dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub09mQ2h1bmtzID0gTWF0aC5jZWlsKHNlYXJjaFRleHRGaWx0ZXJlZEl0ZW1zLmxlbmd0aCAvIHRhYmxlQ3RybC5zaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub09mQ2h1bmtzID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub09mQ2h1bmtzID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5jaHVua3MgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9PZkNodW5rczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDdHJsLmNodW5rcy5wdXNoKHtzZWxlY3RlZDogZmFsc2UsIHBhZ2VObzogaX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0FmdGVyIGZpbHRlcmluZyBudW1iZXIgb2YgY2h1bmtzIGNvdWxkIGNoYW5nZSBzbyByZXNldCBwYWdlIG5vIGlmIGl0IGlzIGdyZWF0ZXIgdGhhbiBubyBvZiBjaHVua3NcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYWdlTm8gPj0gdGFibGVDdHJsLmNodW5rcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUN0cmwucGFnZU5vID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDdHJsLmNodW5rc1t0YWJsZUN0cmwucGFnZU5vXS5zZWxlY3RlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vVXBkYXRlIG51bWJlciBvZiBjaHVua3MgZm9yIHBhZ2luYXRpb24gbWVudVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhYmxlQ3RybC5jaHVua3MubGVuZ3RoID4gNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzbGljZVN0YXJ0LCBzbGljZUVuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGljZVN0YXJ0ID0gdGFibGVDdHJsLnBhZ2VObyAtIDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2VFbmQgPSB0YWJsZUN0cmwucGFnZU5vICsgMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2xpY2VTdGFydCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2VFbmQgPSBzbGljZUVuZCAtIHNsaWNlU3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlU3RhcnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2xpY2VFbmQgPiB0YWJsZUN0cmwuY2h1bmtzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGljZVN0YXJ0ID0gc2xpY2VTdGFydCAtIChzbGljZUVuZCAtIHRhYmxlQ3RybC5jaHVua3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2VFbmQgPSB0YWJsZUN0cmwuY2h1bmtzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnBhZ2luYXRpb25NZW51LmNodW5rcyA9IHRhYmxlQ3RybC5jaHVua3Muc2xpY2Uoc2xpY2VTdGFydCwgc2xpY2VFbmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUucGFnaW5hdGlvbk1lbnUuY2h1bmtzID0gdGFibGVDdHJsLmNodW5rcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDdHJsLmZpbHRlcmVkSXRlbXMgPSBsaW1pdFRvRmlsdGVyKHNlYXJjaFRleHRGaWx0ZXJlZEl0ZW1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5wYWdlTm8gKiB0YWJsZUN0cmwuc2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmlsdGVyZWRpdGVtcyA9IHRhYmxlQ3RybC5maWx0ZXJlZEl0ZW1zO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc2hvd1ByZXZDaHVuaygpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZDaHVuaztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhYmxlQ3RybC5wYWdlTm8gPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldkNodW5rID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZDaHVuayA9IHRhYmxlQ3RybC5wYWdlTm8gLSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzaG93Q2h1bmsocHJldkNodW5rKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzaG93TmV4dENodW5rKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dENodW5rO1xuICAgICAgICAgICAgICAgICAgICBuZXh0Q2h1bmsgPSB0YWJsZUN0cmwucGFnZU5vICsgMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRDaHVuayA+IHRhYmxlQ3RybC5jaHVua3MubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dENodW5rID0gdGFibGVDdHJsLmNodW5rcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzaG93Q2h1bmsobmV4dENodW5rKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBTYXZlIHBhZ2luYXRpb24gc2NvcGUgdG8gcHJvdmlkZSBjaHVuayBpbmZvcm1hdGlvbiB0byBwYWdpbmF0aW9uIG1lbnUuXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIG1lbnVcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBhZGRQYWdpbmF0aW9uTWVudShtZW51KSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5wYWdpbmF0aW9uTWVudSA9IG1lbnU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGFibGVDdHJsLnNob3dDaHVuayA9IHNob3dDaHVuaztcbiAgICAgICAgICAgICAgICB0YWJsZUN0cmwuc2hvd05leHRDaHVuayA9IHNob3dOZXh0Q2h1bms7XG4gICAgICAgICAgICAgICAgdGFibGVDdHJsLnNob3dQcmV2Q2h1bmsgPSBzaG93UHJldkNodW5rO1xuICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5hZGRQYWdpbmF0aW9uTWVudSA9IGFkZFBhZ2luYXRpb25NZW51O1xuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCB0YWJsZUN0cmwpIHtcbiAgICAgICAgICAgICAgICAvL1dhdGNoIGZvciBpdGVtcyBhcyB0aGV5IHdpbGwgYmUgYXV0byByZWZyZXNoZWRcbiAgICAgICAgICAgICAgICBzY29wZS4kcGFyZW50LiR3YXRjaChhdHRycy5pdGVtcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0YWJsZUN0cmwuc2hvd0NodW5rKHRhYmxlQ3RybC5wYWdlTm8sIHRhYmxlQ3RybC5zZWFyY2hUZXh0KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9kaXJlY3RpdmVzL3RhYmxlLmh0bWwnXG4gICAgICAgIH1cbiAgICB9XSlcbiAgICAuZGlyZWN0aXZlKFwiY3R2VGhlYWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICc8dGhlYWQgbmctdHJhbnNjbHVkZT48L3RoZWFkPidcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLmRpcmVjdGl2ZShcImN0dlRoXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgY2xhc3M6ICdAJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnPHRoIG5nLWNsYXNzPVwiY2xhc3NcIiBuZy10cmFuc2NsdWRlPjwvdGg+J1xuICAgICAgICB9XG4gICAgfSlcbiAgICAuZGlyZWN0aXZlKFwiY3R2VGJvZHlcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHNjb3BlOiB7fSxcbiAgICAgICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICc8dGJvZHkgbmctdHJhbnNjbHVkZT48L3Rib2R5PidcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLmRpcmVjdGl2ZShcImN0dlRmb290XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICBzY29wZToge30sXG4gICAgICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnPHRmb290IG5nLXRyYW5zY2x1ZGU+PC90Zm9vdD4nXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC5kaXJlY3RpdmUoXCJjdHZUc2VhcmNoXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICByZXF1aXJlOiAnXl5jdHZUYWJsZScsXG4gICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnQCcsXG4gICAgICAgICAgICAgICAgc2l6ZTogJ0AnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRyLCB0YWJsZUN0cmwpIHtcbiAgICAgICAgICAgICAgICBzY29wZS5zaG93Q2h1bmsgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5zaG93Q2h1bmsodGFibGVDdHJsLnBhZ2VObywgc2NvcGUuc2VhcmNoVGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9kaXJlY3RpdmVzL3NlYXJjaGlucHV0Lmh0bWwnXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC5kaXJlY3RpdmUoXCJjdHZUclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgdHJhbnNjbHVkZTogJ3RydWUnLFxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIHNjb3BlOiB7fSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnPHRyIG5nLXRyYW5zY2x1ZGU+PC90cj4nXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC5kaXJlY3RpdmUoXCJjdHZUZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICBzY29wZTogdHJ1ZSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnPHRkIG5nLXRyYW5zY2x1ZGU+PC90ZD4nXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC5kaXJlY3RpdmUoXCJjdHZUcGFnaW5hdGlvblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgcmVxdWlyZTogJ15eY3R2VGFibGUnLFxuICAgICAgICAgICAgc2NvcGU6IHt9LFxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRyLCB0YWJsZUN0cmwpIHtcbiAgICAgICAgICAgICAgICB0YWJsZUN0cmwuYWRkUGFnaW5hdGlvbk1lbnUoc2NvcGUpO1xuICAgICAgICAgICAgICAgIC8vc2hvd0NodW5rKCkgd2lsbCBjYWxjdWxhdGUgYW5kIHNldCBjaHVua3MgaW4gc2NvcGVcbiAgICAgICAgICAgICAgICB0YWJsZUN0cmwuc2hvd0NodW5rKHRhYmxlQ3RybC5wYWdlTm8sIHRhYmxlQ3RybC5zZWFyY2hUZXh0KTtcbiAgICAgICAgICAgICAgICBzY29wZS5zaG93Q2h1bmsgPSBmdW5jdGlvbiAocGFnZU5vKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5zaG93Q2h1bmsocGFnZU5vLCB0YWJsZUN0cmwuc2VhcmNoVGV4dCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBzY29wZS5zaG93UHJldkNodW5rID0gdGFibGVDdHJsLnNob3dQcmV2Q2h1bms7XG4gICAgICAgICAgICAgICAgc2NvcGUuc2hvd05leHRDaHVuayA9IHRhYmxlQ3RybC5zaG93TmV4dENodW5rO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9kaXJlY3RpdmVzL3BhZ2luYXRpb25tZW51Lmh0bWwnXG4gICAgICAgIH1cbiAgICB9KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gMy8xMS8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5tb2RlbHMnKVxuICAgIC5mYWN0b3J5KCdBcHBsaWNhdGlvbkdyb3Vwc01vZGVsJywgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcbiAgICAgICAgdmFyIGdyb3Vwc21vZGVsID0gbmV3IENvbGxlY3Rpb24oJGh0dHAsICRxLCBDb250aXZHbG9iYWxzLkFQUExJQ0FUSU9OR1JPVVBTX0VORFBPSU5UKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2VuZXJhdGUga2V5IGZvciBhcHBsaWNhdGlvbiBncm91cFxuICAgICAgICAgKiBAcGFyYW0gZ3JvdXBcbiAgICAgICAgICovXG4gICAgICAgIGdyb3Vwc21vZGVsLmdlbmVyYXRlS2V5ID0gZnVuY3Rpb24gKGdyb3VwKSB7XG4gICAgICAgICAgICByZXR1cm4gZ3JvdXAudGVuYW50TmFtZSArICc6JyArIGdyb3VwLmdyb3VwTmFtZTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZ3JvdXBzbW9kZWw7XG4gICAgfV0pOyIsIi8qKlxuICogQmFzZUNvbGxlY3Rpb24gY2xhc3MgdGhhdCBkb2VzIGp1c3QgZmV0Y2ggb2YgdGhlIG9iamVjdHMuXG4gKiBAcGFyYW0gJGh0dHBcbiAqIEBwYXJhbSAkcVxuICogQHBhcmFtIHVybCBVc2VkIGZvciBkb2luZyBIVFRQIEdFVCBhbmQgZmV0Y2ggb2JqZWN0cyBmcm9tIHNlcnZlclxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEJhc2VDb2xsZWN0aW9uKCRodHRwLCAkcSwgdXJsKSB7XG4gICAgdGhpcy5tb2RlbHMgPSBbXTtcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy4kcSA9ICRxO1xuICAgIHRoaXMudXJsID0gdXJsO1xufVxuXG5CYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUuZXh0cmFjdCA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG59O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gcmVsb2FkIE9wdGlvbmFsLiBEZWZhdWx0IGlzIGZhbHNlXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChyZWxvYWQpIHtcbiAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgaWYgKHJlbG9hZCA9PT0gdW5kZWZpbmVkKSByZWxvYWQgPSBmYWxzZTtcbiAgICByZXR1cm4gKCFyZWxvYWQgJiYgY29sbGVjdGlvbi5tb2RlbHMubGVuZ3RoID4gMCkgP1xuICAgICAgICBjb2xsZWN0aW9uLiRxLndoZW4oY29sbGVjdGlvbi5tb2RlbHMpIDogY29sbGVjdGlvbi4kaHR0cC5nZXQoY29sbGVjdGlvbi51cmwpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb24ubW9kZWxzID0gY29sbGVjdGlvbi5leHRyYWN0KHJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm4gY29sbGVjdGlvbi5tb2RlbHM7XG4gICAgICAgIH0pO1xufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIGtleVxuICogQHBhcmFtIHJlbG9hZCBPcHRpb25hbC4gRGVmYXVsdCBpcyBmYWxzZVxuICogQHBhcmFtIGtleW5hbWVcbiAqIEByZXR1cm5zIHsqfVxuICovXG5CYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUuZ2V0TW9kZWxCeUtleSA9IGZ1bmN0aW9uIChrZXksIHJlbG9hZCwga2V5bmFtZSkge1xuICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcztcbiAgICBpZiAocmVsb2FkID09PSB1bmRlZmluZWQpIHJlbG9hZCA9IGZhbHNlO1xuICAgIGlmIChrZXluYW1lID09PSB1bmRlZmluZWQpIGtleW5hbWUgPSAna2V5JztcblxuICAgIHZhciBkZWZlcnJlZCA9IGNvbGxlY3Rpb24uJHEuZGVmZXIoKTtcblxuICAgIGZ1bmN0aW9uIGZpbmRNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF8uZmluZChjb2xsZWN0aW9uLm1vZGVscywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHJldHVybiBjW2tleW5hbWVdID09IGtleTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoIXJlbG9hZCAmJiBjb2xsZWN0aW9uLm1vZGVscy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUoZmluZE1vZGVsKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbGxlY3Rpb24uZ2V0KHJlbG9hZClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGZpbmRNb2RlbCgpKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIG1vZGVsXG4gKiBAcGFyYW0gcmVsb2FkIE9wdGlvbmFsLiBEZWZhdWx0IGlzIGZhbHNlXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLmdldE1vZGVsID0gZnVuY3Rpb24gKG1vZGVsLCByZWxvYWQpIHtcbiAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgaWYgKHJlbG9hZCA9PT0gdW5kZWZpbmVkKSByZWxvYWQgPSBmYWxzZTtcblxuICAgIHZhciBkZWZlcnJlZCA9IGNvbGxlY3Rpb24uJHEuZGVmZXIoKTtcblxuICAgIGZ1bmN0aW9uIGZpbmRNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF8uZmluZChjb2xsZWN0aW9uLm1vZGVscywgbW9kZWwpXG4gICAgfVxuXG4gICAgaWYgKCFyZWxvYWQgJiYgY29sbGVjdGlvbi5tb2RlbHMubGVuZ3RoID4gMCkge1xuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGZpbmRNb2RlbCgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb2xsZWN0aW9uLmdldChyZWxvYWQpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShmaW5kTW9kZWwoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cblxuLyoqXG4gKiBFeHRlbmRzIEJhc2VDb2xsZWN0aW9uIGNsYXNzIHRvIGRvIGNyZWF0ZSwgdXBkYXRlIGFuZCBkZWxldGUgdXNpbmcgUE9TVCwgUFVUIGFuZCBERUxFVEUgdmVyYnMuXG4gKiBAcGFyYW0gJGh0dHBcbiAqIEBwYXJhbSAkcVxuICogQHBhcmFtIHVybCBVc2VkIGZvciBkb2luZyBIVFRQIEdFVCBhbmQgZmV0Y2ggb2JqZWN0cyBmcm9tIHNlcnZlclxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIENvbGxlY3Rpb24oJGh0dHAsICRxLCB1cmwpIHtcbiAgICBCYXNlQ29sbGVjdGlvbi5jYWxsKHRoaXMsICRodHRwLCAkcSwgdXJsKTtcbn1cblxuQ29sbGVjdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2VDb2xsZWN0aW9uLnByb3RvdHlwZSk7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBtb2RlbFxuICogQHBhcmFtIHVybCBPcHRpb25hbCBpZiBub3QgcGFzc2VkIGl0IGlzIGNvbnN0cnVjdGVkIHVzaW5nIGtleSBhbmQgdXJsIHBhc3NlZCBpbiBjb25zdHJ1Y3RvclxuICogQHJldHVybnMgeyp9XG4gKi9cbkNvbGxlY3Rpb24ucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIChtb2RlbCwgdXJsKSB7XG4gICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzO1xuICAgIHZhciBkZWZlcnJlZCA9IGNvbGxlY3Rpb24uJHEuZGVmZXIoKTtcbiAgICBpZiAodXJsID09PSB1bmRlZmluZWQpIHVybCA9IGNvbGxlY3Rpb24udXJsICsgbW9kZWwua2V5ICsgJy8nO1xuICAgIGNvbGxlY3Rpb24uJGh0dHAucG9zdCh1cmwsIG1vZGVsKVxuICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZURhdGEgPSBjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpO1xuICAgICAgICAgICAgLy9Gb3IgcmVzdCBlbmRwb2ludHMgdGhhdCBkbyBub3QgcmV0dXJuIGNyZWF0ZWQganNvbiBvYmplY3QgaW4gcmVzcG9uc2VcbiAgICAgICAgICAgIGlmICgocmVzcG9uc2VEYXRhID09PSB1bmRlZmluZWQpIHx8IChyZXNwb25zZURhdGEgPT09ICcnKSkge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlRGF0YSA9IG1vZGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9jb2xsZWN0aW9uLm1vZGVscy5wdXNoKGNvbGxlY3Rpb24uZXh0cmFjdChyZXNwb25zZSkpO1xuICAgICAgICAgICAgY29sbGVjdGlvbi5tb2RlbHMucHVzaChyZXNwb25zZURhdGEpO1xuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGNvbGxlY3Rpb24uZXh0cmFjdChyZXNwb25zZSkpO1xuICAgICAgICB9KTtcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbi8qKlxuICogVGhpcyBpcyBmb3IgbmV0bWFzdGVyIHNwZWNpZmljIGVuZHBvaW50cyBhbmQgdXNlZCBieSBuZXRtYXN0ZXIgb2JqZWN0cyBvbmx5LlxuICogVE9ETzogR2VuZXJhbGl6ZVxuICogQHBhcmFtIG1vZGVsXG4gKiBAcGFyYW0gdXJsIE9wdGlvbmFsXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ29sbGVjdGlvbi5wcm90b3R5cGUuc2F2ZSA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcztcbiAgICB2YXIgZGVmZXJyZWQgPSBjb2xsZWN0aW9uLiRxLmRlZmVyKCk7XG4gICAgdmFyIHVybCA9IGNvbGxlY3Rpb24udXJsICsgbW9kZWwua2V5ICsgJy8nO1xuICAgIGNvbGxlY3Rpb24uJGh0dHAucHV0KHVybCwgbW9kZWwpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgXy5yZW1vdmUoY29sbGVjdGlvbi5tb2RlbHMsIGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG4ua2V5ID09IG1vZGVsLmtleTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29sbGVjdGlvbi5tb2RlbHMucHVzaChjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcbiAgICAgICAgfSk7XG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59O1xuXG4vKipcbiAqIFRoaXMgaXMgZm9yIG5ldG1hc3RlciBzcGVjaWZpYyBlbmRwb2ludHMgYW5kIHVzZWQgYnkgbmV0bWFzdGVyIG9iamVjdHMgb25seS5cbiAqIFRPRE86IEdlbmVyYWxpemVcbiAqIEBwYXJhbSBtb2RlbFxuICogQHJldHVybnMgeyp9XG4gKi9cbkNvbGxlY3Rpb24ucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcztcbiAgICB2YXIgZGVmZXJyZWQgPSBjb2xsZWN0aW9uLiRxLmRlZmVyKCk7XG4gICAgdmFyIHVybCA9IGNvbGxlY3Rpb24udXJsICsgbW9kZWwua2V5ICsgJy8nO1xuICAgIGNvbGxlY3Rpb24uJGh0dHAuZGVsZXRlKHVybClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBfLnJlbW92ZShjb2xsZWN0aW9uLm1vZGVscywgZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbi5rZXkgPT0gbW9kZWwua2V5O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGNvbGxlY3Rpb24uZXh0cmFjdChyZXNwb25zZSkpO1xuICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XG4gICAgICAgIH0pO1xuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIGtleVxuICogQHBhcmFtIGtleW5hbWVcbiAqIEBwYXJhbSB1cmwgT3B0aW9uYWwgaWYgbm90IHBhc3NlZCBpdCBpcyBjb25zdHJ1Y3RlZCB1c2luZyBrZXkgYW5kIHVybCBwYXNzZWQgaW4gY29uc3RydWN0b3JcbiAqIEByZXR1cm5zIHsqfVxuICovXG5Db2xsZWN0aW9uLnByb3RvdHlwZS5kZWxldGVVc2luZ0tleSA9IGZ1bmN0aW9uIChrZXksIGtleW5hbWUsIHVybCkge1xuICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcztcbiAgICBpZiAoa2V5bmFtZSA9PT0gdW5kZWZpbmVkKSBrZXluYW1lID0gJ2tleSc7XG5cbiAgICB2YXIgZGVmZXJyZWQgPSBjb2xsZWN0aW9uLiRxLmRlZmVyKCk7XG4gICAgaWYgKHVybCA9PT0gdW5kZWZpbmVkKSB1cmwgPSBjb2xsZWN0aW9uLnVybCArIGtleSArICcvJztcbiAgICBjb2xsZWN0aW9uLiRodHRwLmRlbGV0ZSh1cmwpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgXy5yZW1vdmUoY29sbGVjdGlvbi5tb2RlbHMsIGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ba2V5bmFtZV0gPT0ga2V5O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGNvbGxlY3Rpb24uZXh0cmFjdChyZXNwb25zZSkpO1xuICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XG4gICAgICAgIH0pO1xuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTsiLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2Lm1vZGVscycpXG4gICAgLmZhY3RvcnkoJ05ldHdvcmtzTW9kZWwnLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xuICAgICAgICByZXR1cm4gbmV3IENvbGxlY3Rpb24oJGh0dHAsICRxLCBDb250aXZHbG9iYWxzLk5FVFdPUktTX0VORFBPSU5UKTtcbiAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMjIvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubW9kZWxzJylcbiAgICAuZmFjdG9yeSgnTm9kZXNNb2RlbCcsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XG4gICAgICAgIHZhciBub2Rlc21vZGVsID0gbmV3IE5vZGVzQ29sbGVjdGlvbigkaHR0cCwgJHEpO1xuICAgICAgICByZXR1cm4gbm9kZXNtb2RlbDtcbiAgICB9XSk7XG5cbi8qKlxuICogTm9kZXNDb2xsZWN0aW9uIGV4dGVuZHMgZnJvbSBCYXNlQ29sbGVjdGlvbi4gSXQgb3ZlcnJpZGVzIGV4dHJhY3QoKSBhbmQgYWRkcyBjb21taXNzaW9uLCBkZWNvbW1pc3Npb24sIHVwZ3JhZGUgYW5kXG4gKiBkaXNjb3ZlciBtZXRob2RzXG4gKiBAcGFyYW0gJGh0dHBcbiAqIEBwYXJhbSAkcVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIE5vZGVzQ29sbGVjdGlvbigkaHR0cCwgJHEpIHtcbiAgICBCYXNlQ29sbGVjdGlvbi5jYWxsKHRoaXMsICRodHRwLCAkcSwgQ29udGl2R2xvYmFscy5OT0RFU19MSVNUX0VORFBPSU5UKTtcbn1cblxuTm9kZXNDb2xsZWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlKTtcblxuTm9kZXNDb2xsZWN0aW9uLnByb3RvdHlwZS5leHRyYWN0ID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIC8vQ29udmVydCB0byBhcnJheSBpZiB0aGUgcmV0dXJuZWQgY29sbGVjdGlvbiBpcyBub3QgYW4gYXJyYXlcbiAgICByZXR1cm4gXy5tYXAocmVzdWx0LmRhdGEsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIHZhbHVlLmtleSA9IGtleTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0pO1xufTtcblxuXG4vKipcbiAqXG4gKiBAcGFyYW0ga2V5XG4gKiBAcGFyYW0gZXh0cmFWYXJzIEpTT04gb2JqZWN0IG9mIGV4dHJhIGFuc2libGUgYW5kIGVudmlyb25tZW50IHZhcmlhYmxlcyB0byBiZSBwYXNzZWQgd2hpbGUgY29tbWlzc2lvbmluZyBhIG5vZGVcbiAqIHtcbiAgICAgKiBcImVudlwiOntcImh0dHBfcHJveHlcIjpcImh0dHA6Ly9wcm94eS5lc2wuY2lzY28uY29tOjgwODBcIiwgXCJodHRwc19wcm94eVwiOlwiaHR0cDovL3Byb3h5LmVzbC5jaXNjby5jb206ODA4MFwifSxcbiAgICAgKiBcImNvbnRyb2xfaW50ZXJmYWNlXCI6IFwiZXRoMVwiLCBcInNlcnZpY2VfdmlwXCI6IFwiMTkyLjE2OC4yLjI1MlwiLCBcInZhbGlkYXRlX2NlcnRzXCI6IFwiZmFsc2VcIiwgXCJuZXRwbHVnaW5faWZcIiA6IFwiZXRoMlwiXG4gICAgICogfVxuICogQHJldHVybnMgeyp9XG4gKi9cbk5vZGVzQ29sbGVjdGlvbi5wcm90b3R5cGUuY29tbWlzc2lvbiA9IGZ1bmN0aW9uIChub2RlT3BzT2JqKSB7XG4gICAgdmFyIG5vZGVzY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgdmFyIGRlZmVycmVkID0gbm9kZXNjb2xsZWN0aW9uLiRxLmRlZmVyKCk7XG4gICAgdmFyIHVybCA9IENvbnRpdkdsb2JhbHMuTk9ERVNfQ09NTUlTU0lPTl9FTkRQT0lOVDtcbiAgICBub2Rlc2NvbGxlY3Rpb24uJGh0dHAucG9zdCh1cmwsIG5vZGVPcHNPYmosIHtcbiAgICAgICAgICAgICdoZWFkZXJzJzoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAvL1NlcnZlciBkb2Vzbid0IHJldHVybiBhbnkganNvbiBpbiByZXNwb25zZVxuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xuICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbk5vZGVzQ29sbGVjdGlvbi5wcm90b3R5cGUuZGVjb21taXNzaW9uID0gZnVuY3Rpb24gKG5vZGVPcHNPYmopIHtcbiAgICB2YXIgbm9kZXNjb2xsZWN0aW9uID0gdGhpcztcbiAgICB2YXIgZGVmZXJyZWQgPSBub2Rlc2NvbGxlY3Rpb24uJHEuZGVmZXIoKTtcbiAgICB2YXIgdXJsID0gQ29udGl2R2xvYmFscy5OT0RFU19ERUNPTU1JU1NJT05fRU5EUE9JTlQ7XG4gICAgbm9kZXNjb2xsZWN0aW9uLiRodHRwLnBvc3QodXJsLCBub2RlT3BzT2JqLCB7XG4gICAgICAgICAgICAnaGVhZGVycyc6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xuICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbk5vZGVzQ29sbGVjdGlvbi5wcm90b3R5cGUudXBncmFkZSA9IGZ1bmN0aW9uIChub2RlT3BzT2JqKSB7XG4gICAgdmFyIG5vZGVzY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgdmFyIGRlZmVycmVkID0gbm9kZXNjb2xsZWN0aW9uLiRxLmRlZmVyKCk7XG4gICAgdmFyIHVybCA9IENvbnRpdkdsb2JhbHMuTk9ERVNfTUFJTlRFTkFOQ0VfRU5EUE9JTlQ7XG4gICAgbm9kZXNjb2xsZWN0aW9uLiRodHRwLnBvc3QodXJsLCBub2RlT3BzT2JqLCB7XG4gICAgICAgICAgICAnaGVhZGVycyc6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xuICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBpcFxuICogQHBhcmFtIGV4dHJhVmFycyBKU09OIG9iamVjdCBvZiBleHRyYSBhbnNpYmxlIGFuZCBlbnZpcm9ubWVudCB2YXJpYWJsZXMgdG8gYmUgcGFzc2VkIHdoaWxlIGRpc2NvdmVyaW5nIGEgbm9kZVxuICoge1xuICAgICAqIFwiZW52XCI6e1wiaHR0cF9wcm94eVwiOlwiaHR0cDovL3Byb3h5LmVzbC5jaXNjby5jb206ODA4MFwiLCBcImh0dHBzX3Byb3h5XCI6XCJodHRwOi8vcHJveHkuZXNsLmNpc2NvLmNvbTo4MDgwXCJ9LFxuICAgICAqIFwiY29udHJvbF9pbnRlcmZhY2VcIjogXCJldGgxXCIsIFwic2VydmljZV92aXBcIjogXCIxOTIuMTY4LjIuMjUyXCIsIFwiY2x1c3Rlci1uYW1lXCI6IFwiY29udGl2XCIsIFwibm9kZS1sYWJlbFwiIDogXCJub2RlMVwiXG4gICAgICogfVxuICogQHJldHVybnMgeyp9XG4gKi9cbk5vZGVzQ29sbGVjdGlvbi5wcm90b3R5cGUuZGlzY292ZXIgPSBmdW5jdGlvbiAobm9kZU9wc09iaikge1xuICAgIHZhciBub2Rlc2NvbGxlY3Rpb24gPSB0aGlzO1xuICAgIHZhciBkZWZlcnJlZCA9IG5vZGVzY29sbGVjdGlvbi4kcS5kZWZlcigpO1xuICAgIHZhciB1cmwgPSBDb250aXZHbG9iYWxzLk5PREVTX0RJU0NPVkVSX0VORFBPSU5UO1xuICAgIG5vZGVzY29sbGVjdGlvbi4kaHR0cC5wb3N0KHVybCwgbm9kZU9wc09iaiwge1xuICAgICAgICAgICAgJ2hlYWRlcnMnOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59OyIsImFuZ3VsYXIubW9kdWxlKCdjb250aXYubW9kZWxzJylcbiAgICAuZmFjdG9yeSgnT3JnYW5pemF0aW9uc01vZGVsJywgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xsZWN0aW9uKCRodHRwLCAkcSwgQ29udGl2R2xvYmFscy5PUkdBTklaQVRJT05TX0VORFBPSU5UKTtcbiAgICB9XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5tb2RlbHMnKVxuICAgIC5mYWN0b3J5KCdQb2xpY2llc01vZGVsJywgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcbiAgICAgICAgdmFyIHBvbGljaWVzbW9kZWwgPSBuZXcgQ29sbGVjdGlvbigkaHR0cCwgJHEsIENvbnRpdkdsb2JhbHMuUE9MSUNJRVNfRU5EUE9JTlQpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZW5lcmF0ZSBwb2xpY3kga2V5IHRvIHNhdmUgcG9saWN5IG9uIHNlcnZlclxuICAgICAgICAgKiBAcGFyYW0gcG9saWN5XG4gICAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICBwb2xpY2llc21vZGVsLmdlbmVyYXRlS2V5ID0gZnVuY3Rpb24gKHBvbGljeSkge1xuICAgICAgICAgICAgcmV0dXJuIHBvbGljeS50ZW5hbnROYW1lICsgJzonICsgcG9saWN5LnBvbGljeU5hbWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHBvbGljaWVzbW9kZWw7XG4gICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzgvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubW9kZWxzJylcbiAgICAuZmFjdG9yeSgnUnVsZXNNb2RlbCcsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XG4gICAgICAgIHZhciBydWxlc21vZGVsID0gbmV3IENvbGxlY3Rpb24oJGh0dHAsICRxLCBDb250aXZHbG9iYWxzLlJVTEVTX0VORFBPSU5UKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IGluY29taW5nIHJ1bGVzIGZvciBhIGdpdmVuIHBvbGljeSBhbmQgYSB0ZW5hbnRcbiAgICAgICAgICogQHBhcmFtIHBvbGljeU5hbWVcbiAgICAgICAgICogQHBhcmFtIHRlbmFudE5hbWVcbiAgICAgICAgICogQHJldHVybnMgeyp8d2ViZHJpdmVyLnByb21pc2UuUHJvbWlzZX1cbiAgICAgICAgICovXG4gICAgICAgIHJ1bGVzbW9kZWwuZ2V0SW5jb21pbmdSdWxlcyA9IGZ1bmN0aW9uIChwb2xpY3lOYW1lLCB0ZW5hbnROYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gcnVsZXNtb2RlbC5nZXQoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXy5maWx0ZXIocmVzdWx0LCB7XG4gICAgICAgICAgICAgICAgICAgICdwb2xpY3lOYW1lJzogcG9saWN5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgJ2RpcmVjdGlvbic6ICdpbicsXG4gICAgICAgICAgICAgICAgICAgICd0ZW5hbnROYW1lJzogdGVuYW50TmFtZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IG91dGdvaW5nIHJ1bGVzIGZvciBhIGdpdmVuIHBvbGljeSBhbmQgYSB0ZW5hbnRcbiAgICAgICAgICogQHBhcmFtIHBvbGljeU5hbWVcbiAgICAgICAgICogQHBhcmFtIHRlbmFudE5hbWVcbiAgICAgICAgICogQHJldHVybnMgeyp8d2ViZHJpdmVyLnByb21pc2UuUHJvbWlzZX1cbiAgICAgICAgICovXG4gICAgICAgIHJ1bGVzbW9kZWwuZ2V0T3V0Z29pbmdSdWxlcyA9IGZ1bmN0aW9uIChwb2xpY3lOYW1lLCB0ZW5hbnROYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gcnVsZXNtb2RlbC5nZXQoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXy5maWx0ZXIocmVzdWx0LCB7XG4gICAgICAgICAgICAgICAgICAgICdwb2xpY3lOYW1lJzogcG9saWN5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgJ2RpcmVjdGlvbic6ICdvdXQnLFxuICAgICAgICAgICAgICAgICAgICAndGVuYW50TmFtZSc6IHRlbmFudE5hbWVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdlbmVyYXRlIHJ1bGUga2V5IHRvIHNhdmUgcnVsZSBvbiBzZXJ2ZXJcbiAgICAgICAgICogQHBhcmFtIHJ1bGVcbiAgICAgICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHJ1bGVzbW9kZWwuZ2VuZXJhdGVLZXkgPSBmdW5jdGlvbiAocnVsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJ1bGUudGVuYW50TmFtZSArICc6JyArIHJ1bGUucG9saWN5TmFtZSArICc6JyArIHJ1bGUucnVsZUlkO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBydWxlc21vZGVsO1xuICAgIH1dKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTEvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubW9kZWxzJylcbiAgICAuZmFjdG9yeSgnU2VydmljZWxic01vZGVsJywgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xsZWN0aW9uKCRodHRwLCAkcSwgQ29udGl2R2xvYmFscy5TRVJWSUNFTEJTX0VORFBPSU5UKTtcbiAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDQvMTgvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubW9kZWxzJylcbiAgICAuZmFjdG9yeSgnU3RvcmFnZVBvbGljaWVzTW9kZWwnLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogU3RvcmFnZVBvbGljaWVzQ29sbGVjdGlvbiBleHRlbmRzIGZyb20gQmFzZUNvbGxlY3Rpb25cbiAgICAgICAgICogQHBhcmFtICRodHRwXG4gICAgICAgICAqIEBwYXJhbSAkcVxuICAgICAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIFN0b3JhZ2VQb2xpY2llc0NvbGxlY3Rpb24oJGh0dHAsICRxKSB7XG4gICAgICAgICAgICBDb2xsZWN0aW9uLmNhbGwodGhpcywgJGh0dHAsICRxLCBDb250aXZHbG9iYWxzLlNUT1JBR0VQT0xJQ0lFU19FTkRQT0lOVCk7XG4gICAgICAgIH1cblxuICAgICAgICBTdG9yYWdlUG9saWNpZXNDb2xsZWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ29sbGVjdGlvbi5wcm90b3R5cGUpO1xuXG4gICAgICAgIFN0b3JhZ2VQb2xpY2llc0NvbGxlY3Rpb24ucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgICAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzO1xuICAgICAgICAgICAgdmFyIHVybCA9IGNvbGxlY3Rpb24udXJsICsgbW9kZWwubmFtZTtcbiAgICAgICAgICAgIHJldHVybiBDb2xsZWN0aW9uLnByb3RvdHlwZS5jcmVhdGUuY2FsbChjb2xsZWN0aW9uLCBtb2RlbCwgdXJsKTtcbiAgICAgICAgfTtcblxuICAgICAgICBTdG9yYWdlUG9saWNpZXNDb2xsZWN0aW9uLnByb3RvdHlwZS5zYXZlID0gZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgICAgICAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSBjb2xsZWN0aW9uLiRxLmRlZmVyKCk7XG4gICAgICAgICAgICB2YXIgdXJsID0gY29sbGVjdGlvbi51cmwgKyBtb2RlbC5uYW1lO1xuICAgICAgICAgICAgY29sbGVjdGlvbi4kaHR0cC5wb3N0KHVybCwgbW9kZWwpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucmVtb3ZlKGNvbGxlY3Rpb24ubW9kZWxzLCBmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4ubmFtZSA9PSBtb2RlbC5uYW1lO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbi5tb2RlbHMucHVzaChtb2RlbCk7XG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHBvbGljaWVzbW9kZWwgPSBuZXcgU3RvcmFnZVBvbGljaWVzQ29sbGVjdGlvbigkaHR0cCwgJHEpO1xuICAgICAgICByZXR1cm4gcG9saWNpZXNtb2RlbDtcbiAgICB9XSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzIyLzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm1vZGVscycpXG4gICAgLmZhY3RvcnkoJ1ZvbHVtZXNNb2RlbCcsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWb2x1bWVzQ29sbGVjdGlvbiBleHRlbmRzIGZyb20gQmFzZUNvbGxlY3Rpb25cbiAgICAgICAgICogQHBhcmFtICRodHRwXG4gICAgICAgICAqIEBwYXJhbSAkcVxuICAgICAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIFZvbHVtZXNDb2xsZWN0aW9uKCRodHRwLCAkcSkge1xuICAgICAgICAgICAgQ29sbGVjdGlvbi5jYWxsKHRoaXMsICRodHRwLCAkcSwgQ29udGl2R2xvYmFscy5WT0xVTUVTX0VORFBPSU5UKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFZvbHVtZXNDb2xsZWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ29sbGVjdGlvbi5wcm90b3R5cGUpO1xuXG4gICAgICAgIFZvbHVtZXNDb2xsZWN0aW9uLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAobW9kZWwpIHtcbiAgICAgICAgICAgIHZhciB2b2x1bWVzY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSB2b2x1bWVzY29sbGVjdGlvbi4kcS5kZWZlcigpO1xuICAgICAgICAgICAgdmFyIHVybCA9IENvbnRpdkdsb2JhbHMuVk9MVU1FU19ERUxFVEVfRU5EUE9JTlQ7XG4gICAgICAgICAgICAvL2RlbGV0ZSBlbmRwb2ludCBleHBlY3RzIHZvbHVtZSBwcm9wZXJ0eSBpbiBhZGRpdGlvbiB0byBwb2xpY3kuIFRPRE8gYXNrIHRvIGJlIGZpeGVkXG4gICAgICAgICAgICBtb2RlbC52b2x1bWUgPSBtb2RlbC5uYW1lO1xuICAgICAgICAgICAgdmFyIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBkYXRhOiBtb2RlbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZvbHVtZXNjb2xsZWN0aW9uLiRodHRwLmRlbGV0ZSh1cmwsIGNvbmZpZylcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5yZW1vdmUodm9sdW1lc2NvbGxlY3Rpb24ubW9kZWxzLCBmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChuLm5hbWUgPT0gbW9kZWwubmFtZSAmJiBuLnBvbGljeSA9PSBtb2RlbC5wb2xpY3kpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh2b2x1bWVzY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3Qodm9sdW1lc2NvbGxlY3Rpb24uZXh0cmFjdChyZXNwb25zZSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgICAgIH07XG5cbiAgICAgICAgVm9sdW1lc0NvbGxlY3Rpb24ucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgICAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzO1xuICAgICAgICAgICAgdmFyIHVybCA9IENvbnRpdkdsb2JhbHMuVk9MVU1FU19DUkVBVEVfRU5EUE9JTlQ7XG4gICAgICAgICAgICByZXR1cm4gQ29sbGVjdGlvbi5wcm90b3R5cGUuY3JlYXRlLmNhbGwoY29sbGVjdGlvbiwgbW9kZWwsIHVybCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgVm9sdW1lc0NvbGxlY3Rpb24ucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAobW9kZWwsIHNuYXBzaG90LCBuZXdWb2x1bWUpIHtcbiAgICAgICAgICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcztcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9IGNvbGxlY3Rpb24uJHEuZGVmZXIoKTtcbiAgICAgICAgICAgIHZhciB1cmwgPSBDb250aXZHbG9iYWxzLlZPTFVNRVNfQ09QWVNOQVBTSE9UU19FTkRQT0lOVDtcbiAgICAgICAgICAgIHZhciB2b2xjb3B5bW9kZWwgPSB7XG4gICAgICAgICAgICAgICAgdm9sdW1lOiBtb2RlbC5uYW1lLFxuICAgICAgICAgICAgICAgIHBvbGljeTogbW9kZWwucG9saWN5LFxuICAgICAgICAgICAgICAgIE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBuZXdWb2x1bWUsXG4gICAgICAgICAgICAgICAgICAgIHNuYXBzaG90OiBzbmFwc2hvdFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb2xsZWN0aW9uLiRodHRwLnBvc3QodXJsLCB2b2xjb3B5bW9kZWwpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vVE9ETzogQWRkIHRoZSBuZXcgdm9sdW1lIHRvIHRoZSBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIC8vY29sbGVjdGlvbi5tb2RlbHMucHVzaChjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciB2b2x1bWVzbW9kZWwgPSBuZXcgVm9sdW1lc0NvbGxlY3Rpb24oJGh0dHAsICRxKTtcbiAgICAgICAgcmV0dXJuIHZvbHVtZXNtb2RlbDtcbiAgICB9XSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA0LzI5LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnV0aWxzJylcbiAgICAuZmFjdG9yeSgnQ1JVREhlbHBlclNlcnZpY2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBzdGFydExvYWRlcihjb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5zaG93TG9hZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gc3RvcExvYWRlcihjb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5zaG93TG9hZGVyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHNob3dTZXJ2ZXJFcnJvcihjb250cm9sbGVyLCBtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5zaG93U2VydmVyRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuc2VydmVyRXJyb3JNZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gaGlkZVNlcnZlckVycm9yKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnNob3dTZXJ2ZXJFcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0YXJ0TG9hZGVyOiBzdGFydExvYWRlcixcbiAgICAgICAgICAgICAgICBzdG9wTG9hZGVyOiBzdG9wTG9hZGVyLFxuICAgICAgICAgICAgICAgIHNob3dTZXJ2ZXJFcnJvcjogc2hvd1NlcnZlckVycm9yLFxuICAgICAgICAgICAgICAgIGhpZGVTZXJ2ZXJFcnJvcjogaGlkZVNlcnZlckVycm9yXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICApO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
