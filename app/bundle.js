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
        'NODES_LAST_JOB_ENDPOINT': '/info/job/last',
        'NODES_ACTIVE_JOB_ENDPOINT': '/info/job/active',
        'NODES_SETTINGS_SET_ENDPOINT': '/globals',
        'NODES_SETTINGS_GET_ENDPOINT': '/info/globals',

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

angular.module('contiv.settings', ['contiv.models', 'contiv.directives', 'contiv.utils'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.settings', {
                url: '/global',
                abstract: true,
                template: '<div ui-view class="ui container"/>'
            })
            .state('contiv.menu.settings.details', {
                url: '/settings',
                templateUrl: 'settings/settingsmenu.html'
            })
            .state('contiv.menu.settings.details.logs', {
                url: '/logs',
                controller: '',
                templateUrl: ''
            })
            .state('contiv.menu.settings.details.auth', {
                url: '/auth',
                controller: '',
                templateUrl: ''
            })
            .state('contiv.menu.settings.details.license', {
                url: '/license',
                controller: '',
                templateUrl: ''
            })
            .state('contiv.menu.settings.details.networks', {
                url: '/networks',
                controller: '',
                templateUrl: ''
            })
            .state('contiv.menu.settings.details.policies', {
                url: '/policies',
                controller: '',
                templateUrl: ''
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
        'contiv.organizations',
        'contiv.settings',
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

angular.module("contiv.nodes")
    .directive("ctvLogs", function () {
        return {
            restrict: 'E',
            templateUrl: 'nodes/logs.html',
            scope: {
                log: "=",
                title: "@",
                modalid: "@"
            }
        };
    });
angular.module('contiv.nodes')
    .factory('LogService', ['$http', '$q', function ($http, $q) {
        function getActiveLogs() {
            var deferred = $q.defer();
            var url = ContivGlobals.NODES_ACTIVE_JOB_ENDPOINT;
            $http.get(url).then(function successCallback(result) {
                deferred.resolve(result.data);
            }, function errorCallback(result) {
                deferred.reject(result.data);
            });
            return deferred.promise;
        }

        function getLastLogs() {
            var deferred = $q.defer();
            var url = ContivGlobals.NODES_LAST_JOB_ENDPOINT;
            $http.get(url).then(function successCallback(result) {
                deferred.resolve(result.data);
            }, function errorCallback(result) {
                deferred.reject(result.data);
            });
            return deferred.promise;
        }

        return {
            getActiveLogs: getActiveLogs,
            getLastLogs: getLastLogs
        }
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
        ;
    }])
    .controller('NodeCommissionCtrl', [
        '$state', '$stateParams', 'NodesModel', 'CRUDHelperService', 'NodesService',
        function ($state, $stateParams, NodesModel, CRUDHelperService, NodesService) {
            var nodeCommissionCtrl = this;

            function returnToNodeDetails() {
                $state.go('contiv.menu.nodes.details.info', {'key': $stateParams.key});
            }

            function cancelCommissioningNode() {
                returnToNodeDetails();
            }

            function commission() {
                if (nodeCommissionCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(nodeCommissionCtrl);
                    CRUDHelperService.startLoader(nodeCommissionCtrl);
                    nodeCommissionCtrl.nodeOpsObj.nodes = [$stateParams.key];
                    NodesService.cleanupExtraVars(nodeCommissionCtrl);
                    NodesService.createExtraVars(nodeCommissionCtrl);
                    NodesModel.commission(nodeCommissionCtrl.nodeOpsObj).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(nodeCommissionCtrl);
                        returnToNodeDetails();
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(nodeCommissionCtrl);
                        CRUDHelperService.showServerError(nodeCommissionCtrl, result);
                    });
                }
            }

            nodeCommissionCtrl.nodeOpsObj = {};
            nodeCommissionCtrl.extra_vars = {}; //TODO Intialize from global settings
            nodeCommissionCtrl.ansibleVariables = [];
            nodeCommissionCtrl.envVariables = [];

            NodesService.getSettings(nodeCommissionCtrl);

            nodeCommissionCtrl.cancelCommissioningNode = cancelCommissioningNode;
            nodeCommissionCtrl.commission = commission;

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
 * Created by vjain3 on 6/14/16.
 */
angular.module("contiv.nodes")
    .directive("ctvNodestatus", function() {
        return {
            restrict: 'E',
            scope: {
                node: '='
            },
            templateUrl: 'nodes/nodestatus.html'
        }
    })
    .directive("ctvNodestate", function() {
        return {
            restrict: 'E',
            scope: {
                node: '='
            },
            templateUrl: 'nodes/nodestate.html'
        }
    });
angular.module('contiv.nodes')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.nodes.discover', {
                url: '/discover',
                controller: 'NodeDiscoverCtrl as nodeDiscoverCtrl',
                templateUrl: 'nodes/nodediscover.html'
            })
        ;
    }])
    .controller('NodeDiscoverCtrl', [
        '$state', '$stateParams', 'NodesModel', 'CRUDHelperService', 'NodesService',
        function ($state, $stateParams, NodesModel, CRUDHelperService, NodesService) {
            var nodeDiscoverCtrl = this;

            function returnToNodes() {
                $state.go('contiv.menu.nodes.list');
            }

            function cancelDiscoveringNode() {
                returnToNodes();
            }

            function discover() {
                if (nodeDiscoverCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(nodeDiscoverCtrl);
                    CRUDHelperService.startLoader(nodeDiscoverCtrl);
                    createIPAddrArray();
                    NodesService.createExtraVars(nodeDiscoverCtrl);
                    NodesModel.discover(nodeDiscoverCtrl.nodeOpsObj).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(nodeDiscoverCtrl);
                        returnToNodes();
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(nodeDiscoverCtrl);
                        CRUDHelperService.showServerError(nodeDiscoverCtrl, result);
                    });
                }
            }

            function createIPAddrArray() {
                nodeDiscoverCtrl.nodeOpsObj.addrs = _.words(nodeDiscoverCtrl.nodeIPAddr, /[^, ]+/g);
            }

            nodeDiscoverCtrl.nodeOpsObj = {};
            nodeDiscoverCtrl.extra_vars = {}; //TODO Intialize from global settings
            nodeDiscoverCtrl.ansibleVariables = [];
            nodeDiscoverCtrl.envVariables = [];
            nodeDiscoverCtrl.nodeIPAddr = ''; //IP address of nodes to discover

            nodeDiscoverCtrl.discover = discover;
            nodeDiscoverCtrl.cancelDiscoveringNode = cancelDiscoveringNode;

            CRUDHelperService.stopLoader(nodeDiscoverCtrl);
            CRUDHelperService.hideServerError(nodeDiscoverCtrl);
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
    .controller('NodeListCtrl', ['$scope', '$interval', '$filter', 'NodesModel', 'CRUDHelperService', 'LogService',
        function ($scope, $interval, $filter, NodesModel, CRUDHelperService, LogService) {
        var nodeListCtrl = this;

        function getNodes(reload) {
            NodesModel.get(reload)
                .then(function successCallback(result) {
                    CRUDHelperService.stopLoader(nodeListCtrl);
                    nodeListCtrl.nodes = $filter('orderBy')(result, 'key');
                }, function errorCallback(result) {
                    CRUDHelperService.stopLoader(nodeListCtrl);
                });
                getActiveLogs();
                getLastLogs();
        }

        function getActiveLogs() {
            LogService.getActiveLogs().then(function successCallback(result) {
                nodeListCtrl.activeLogs = result;
            }, function errorCallback(result) {
                //Once the job finishes, endpoint returns 500 error. So reset the activeLogs
                nodeListCtrl.activeLogs = {
                    desc: 'There is currently no active job. Check Last Job for a job that recently finished.'
                };
            });
        }

        function getLastLogs() {
            LogService.getLastLogs().then(function successCallback(result) {
                nodeListCtrl.lastLogs = result;
            }, function errorCallback(result) {
            });
        }

        nodeListCtrl.getActiveLogs = getActiveLogs;
        nodeListCtrl.getLastLogs = getLastLogs;

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

angular.module('contiv.settings')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.settings.details.cluster', {
                url: '/cluster',
                controller: 'ClusterSettingCtrl as clusterSettingCtrl',
                templateUrl: 'settings/clustersettings.html'
            })
        ;
    }])
    .controller('ClusterSettingCtrl', [
        '$state', '$stateParams', 'CRUDHelperService', 'NodesService',
        function ($state, $stateParams, CRUDHelperService, NodesService) {
            var clusterSettingCtrl = this;

            function updateClusterSettings() {
                if (clusterSettingCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(clusterSettingCtrl);
                    CRUDHelperService.startLoader(clusterSettingCtrl);
                    clusterSettingCtrl.nodeOpsObj.nodes = [$stateParams.key];
                    NodesService.cleanupExtraVars(clusterSettingCtrl);
                    NodesService.createExtraVars(clusterSettingCtrl);
                    NodesService.updateSettings(clusterSettingCtrl.nodeOpsObj).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(clusterSettingCtrl);
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(clusterSettingCtrl);
                        CRUDHelperService.showServerError(clusterSettingCtrl, result);
                    });
                }
            }

            clusterSettingCtrl.nodeOpsObj = {};
            clusterSettingCtrl.extra_vars = {}; //TODO Intialize from global settings
            clusterSettingCtrl.ansibleVariables = [];
            clusterSettingCtrl.envVariables = [];

            NodesService.getSettings(clusterSettingCtrl);

            clusterSettingCtrl.updateClusterSettings = updateClusterSettings;

            CRUDHelperService.stopLoader(clusterSettingCtrl);
            CRUDHelperService.hideServerError(clusterSettingCtrl);
        }]);

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
                        "size": "0",
                        "filesystem": ""
                    },
                    "runtime": {
                        "snapshots": true,
                        "snapshot": {
                            "frequency": "30m",
                            "keep": 20
                        },
                        "rate-limit": {
                            "write-iops": 0,
                            "read-iops": 0,
                            "write-bps": 0,
                            "read-bps": 0 
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

angular.module('contiv.utils')
    .factory('NodesService', ['$http', '$q',
        function ($http, $q) {
            const APIC_CONTR_UNRESTRICT_MODE = 'apic_contracts_unrestricted_mode';
            const APIC_EPG_BRIDGE_DOMAIN = 'apic_epg_bridge_domain';
            const APIC_LEAF_NODES = 'apic_leaf_nodes';
            const APIC_PASSWORD = 'apic_password';
            const APIC_PHYS_DOMAIN = 'apic_phys_domain';
            const APIC_URL = 'apic_url';
            const APIC_USERNAME = 'apic_username';
            const CONTIV_NET_MODE = 'contiv_network_mode';
            const CONTROL_INTERFACE = 'control_interface';
            const ENV = 'env';
            const FWD_MODE = 'fwd_mode';
            const DATA_INTERFACE = 'netplugin_if';
            const SCHED_PROVIDER = 'scheduler_provider';
            const VIP_ADDR = 'service_vip';
            const UCP_BOOTSTRAP_NODE = 'ucp_bootstrap_node_name';

            function getSettings(ctrl) {
                var deferred = $q.defer();
                var url = ContivGlobals.NODES_SETTINGS_GET_ENDPOINT;
                $http.get(url).then(function successCallback(result) {
                    deferred.resolve(result.data);
                    ctrl.setting = result.data;
                    var extraVars = ctrl.setting.extra_vars;
                    var sched_provider = extraVars[SCHED_PROVIDER];
                    var network_mode = extraVars[CONTIV_NET_MODE];

                    if (extraVars[CONTROL_INTERFACE]) {
                        ctrl.extra_vars[CONTROL_INTERFACE] = extraVars[CONTROL_INTERFACE]; 
                    }
                    if (extraVars[DATA_INTERFACE]) {
                        ctrl.extra_vars[DATA_INTERFACE] = extraVars[DATA_INTERFACE]; 
                    }
                    if (extraVars[VIP_ADDR]) {
                        ctrl.extra_vars[VIP_ADDR] = extraVars[VIP_ADDR]; 
                    }
                    if (sched_provider) {
                        ctrl.extra_vars[SCHED_PROVIDER] = sched_provider;
                        if (sched_provider === 'ucp-swarm') {
                            ctrl.extra_vars[UCP_BOOTSTRAP_NODE] = extraVars[UCP_BOOTSTRAP_NODE];
                        }
                    }
                    if (network_mode) {
                        ctrl.extra_vars[CONTIV_NET_MODE] = network_mode;
                        if (network_mode === 'standalone') {
                            ctrl.extra_vars[FWD_MODE] = extraVars[FWD_MODE];
                        }
                        else if (network_mode === 'aci') {
                            ctrl.extra_vars[APIC_CONTR_UNRESTRICT_MODE] = 
                                extraVars[APIC_CONTR_UNRESTRICT_MODE];
                            ctrl.extra_vars[APIC_EPG_BRIDGE_DOMAIN] = 
                                extraVars[APIC_EPG_BRIDGE_DOMAIN];
                            ctrl.extra_vars[APIC_LEAF_NODES] = extraVars[APIC_LEAF_NODES];
                            ctrl.extra_vars[APIC_PASSWORD] = extraVars[APIC_PASSWORD];
                            ctrl.extra_vars[APIC_PHYS_DOMAIN] = extraVars[APIC_PHYS_DOMAIN];
                            ctrl.extra_vars[APIC_URL] = extraVars[APIC_URL];
                            ctrl.extra_vars[APIC_USERNAME] = extraVars[APIC_USERNAME];                        
                        }
                    }
                    createEnvVariables(extraVars[ENV], ctrl.envVariables);
                    createAnsibleVariables(extraVars, ctrl.ansibleVariables);
                }, function errorCallback(result) {
                    deferred.reject(result.data);
                });
                return deferred.promise;
            };

            function createEnvVariables(envVars, envVariables) {
                var i;
                for (i in envVars) {
                    envVariables.push({'name': i, 'value': envVars[i]});
                }                
            };

            function createAnsibleVariables(extraVars, ansibleVariables) {
                var setting_filter = [APIC_CONTR_UNRESTRICT_MODE,
                    APIC_EPG_BRIDGE_DOMAIN, APIC_LEAF_NODES, APIC_PASSWORD,
                    APIC_PHYS_DOMAIN, APIC_URL, APIC_USERNAME, CONTIV_NET_MODE,
                    CONTROL_INTERFACE, ENV, FWD_MODE, DATA_INTERFACE, SCHED_PROVIDER,
                    VIP_ADDR, UCP_BOOTSTRAP_NODE];
                var i;

                for (i in extraVars) {
                    if (setting_filter.indexOf(i) === -1) {
                        ansibleVariables.push({'name': i, 'value': extraVars[i]});
                    }
                }
            };

            function updateSettings(nodeOpsObj) {
                BaseCollection.call(this, $http, $q, ContivGlobals.NODES_SETTINGS_GET_ENDPOINT);
                var settingscollection = this;
                var deferred = settingscollection.$q.defer();
                var url = ContivGlobals.NODES_SETTINGS_SET_ENDPOINT;
                settingscollection.$http.post(url, nodeOpsObj, {
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

            function createExtraVars(ctrl) {
                //Add ansible variables to extra_vars
                ctrl.ansibleVariables.forEach(function (item) {
                    ctrl.extra_vars[item.name] = item.value
                });
                //Add environment variables to extra_vars
                var envVars = {};
                ctrl.envVariables.forEach(function (item) {
                    envVars[item.name] = item.value;
                });
                ctrl.extra_vars[ENV] = envVars;
                ctrl.nodeOpsObj.extra_vars = JSON.stringify(ctrl.extra_vars);
            };

            /**
             * Cleanup ansible variables for network mode and scheduler. ng-if removes it from the view (DOM) but not from
             * the model.
             */
            function cleanupExtraVars(ctrl) {
                //Cleanup for network mode
                if (ctrl.extra_vars[CONTIV_NET_MODE] == 'aci') {
                    delete ctrl.extra_vars[FWD_MODE];
                } else {
                    delete ctrl.extra_vars[APIC_URL];
                    delete ctrl.extra_vars[APIC_USERNAME];
                    delete ctrl.extra_vars[APIC_PASSWORD];
                    delete ctrl.extra_vars[APIC_LEAF_NODES];
                    delete ctrl.extra_vars[APIC_PHYS_DOMAIN];
                    delete ctrl.extra_vars[APIC_EPG_BRIDGE_DOMAIN];
                    delete ctrl.extra_vars[APIC_CONTR_UNRESTRICT_MODE];
                }
                //Cleanup for scheduler
                if (ctrl.extra_vars[SCHED_PROVIDER] == 'native-swarm') {
                    delete ctrl.extra_vars[UCP_BOOTSTRAP_NODE];
                }
            };

        return {
            getSettings: getSettings,
            createEnvVariables: createEnvVariables,
            createAnsibleVariables: createAnsibleVariables,
            updateSettings: updateSettings,
            createExtraVars: createExtraVars,
            cleanupExtraVars: cleanupExtraVars
        }
    }]);
angular.module("contiv.directives")
    .directive("ctvAcivalid", function () {
        return {
            restrict: 'E',
            templateUrl: 'components/directives/nodedirectives/acivalid.html',
            scope: {
                ctrl: "=",
                errorListId: "=",
                form: "="
            }
        };
    });
angular.module("contiv.directives")
    .directive("ctvControlinterface", function () {
        return {
            restrict: 'E',
            templateUrl: 'components/directives/nodedirectives/controlinterface.html',
            scope: {
                extravars: "="
            }
        };
    });
angular.module("contiv.directives")
    .directive("ctvNetworkmode", function ($compile) {
        return {
            restrict: 'E',
            templateUrl: 'components/directives/nodedirectives/networkmode.html',
            // replace: true,
            scope: {
                extravars: "=",
                errorListId: "=",
                form: "="
            },
            link: function (scope, element, attrs) {
                // var validation_html = 
                //     '<!-- APIC settings validation, part of commissioning node -->\
                //     <li ng-show="scope.form.apicURL.$error.required">\
                //         Please enter URL for APIC\
                //     </li>\
                //     <li ng-show="scope.form.apicUserName.$error.required">\
                //         Please enter user name for APIC\
                //     </li>\
                //     <li ng-show="scope.form.apicPassword.$error.required">\
                //         Please enter password for APIC\
                //     </li>\
                //     <li ng-show="scope.form.apicLeafNodes.$error.required">\
                //         Please enter leaf nodes for APIC\
                //     </li>';
                // $(scope.errorListId).append($compile(validation_html)(scope));
                // scope.$apply();
                // element.append(validation_html);
            }
        };
    });
angular.module("contiv.directives")
    .directive("ctvScheduler", function () {
        return {
            restrict: 'E',
            templateUrl: 'components/directives/nodedirectives/scheduler.html',
            scope: {
                extravars: "="
            }
        };
    });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvbW9kdWxlLmpzIiwibW9kZWxzL21vZHVsZS5qcyIsInV0aWxzL21vZHVsZS5qcyIsImFwcGxpY2F0aW9uZ3JvdXBzL21vZHVsZS5qcyIsImRhc2hib2FyZC9tb2R1bGUuanMiLCJsb2dpbi9tb2R1bGUuanMiLCJtZW51L21vZHVsZS5qcyIsIm5ldHdvcmtfcG9saWNpZXMvbW9kdWxlLmpzIiwibmV0d29ya3MvbW9kdWxlLmpzIiwibm9kZXMvbW9kdWxlLmpzIiwib3JnYW5pemF0aW9ucy9tb2R1bGUuanMiLCJzZXJ2aWNlX2xicy9tb2R1bGUuanMiLCJzZXR0aW5ncy9tb2R1bGUuanMiLCJzdG9yYWdlX3BvbGljaWVzL21vZHVsZS5qcyIsInZvbHVtZXMvbW9kdWxlLmpzIiwiYXBwLmpzIiwiYXBwbGljYXRpb25ncm91cHMvYXBwbGljYXRpb25ncm91cGNyZWF0ZWN0cmwuanMiLCJhcHBsaWNhdGlvbmdyb3Vwcy9hcHBsaWNhdGlvbmdyb3VwZGV0YWlsc2N0cmwuanMiLCJhcHBsaWNhdGlvbmdyb3Vwcy9hcHBsaWNhdGlvbmdyb3VwbGlzdGN0cmwuanMiLCJhcHBsaWNhdGlvbmdyb3Vwcy9hcHBsaWNhdGlvbmdyb3Vwc2VydmljZS5qcyIsImRhc2hib2FyZC9kYXNoYm9hcmRjdHJsLmpzIiwibG9naW4vbG9naW5jdHJsLmpzIiwibWVudS9tZW51Q3RybC5qcyIsIm5ldHdvcmtfcG9saWNpZXMvaXNvbGF0aW9ucG9saWN5Y3JlYXRlY3RybC5qcyIsIm5ldHdvcmtfcG9saWNpZXMvaXNvbGF0aW9ucG9saWN5ZGV0YWlsc2N0cmwuanMiLCJuZXR3b3JrX3BvbGljaWVzL2lzb2xhdGlvbnBvbGljeWxpc3RjdHJsLmpzIiwibmV0d29ya19wb2xpY2llcy9uZXR3b3JrcG9saWNpZXN0YWJzY3RybC5qcyIsIm5ldHdvcmtzL25ldHdvcmtjcmVhdGVjdHJsLmpzIiwibmV0d29ya3MvbmV0d29ya2RldGFpbHNjdHJsLmpzIiwibmV0d29ya3MvbmV0d29ya2xpc3RjdHJsLmpzIiwibm9kZXMvbG9nc2RpcmVjdGl2ZS5qcyIsIm5vZGVzL2xvZ3NlcnZpY2UuanMiLCJub2Rlcy9ub2RlY29tbWlzc2lvbmN0cmwuanMiLCJub2Rlcy9ub2RlZGV0YWlsc2N0cmwuanMiLCJub2Rlcy9ub2RlZGlyZWN0aXZlLmpzIiwibm9kZXMvbm9kZWRpc2NvdmVyY3RybC5qcyIsIm5vZGVzL25vZGVsaXN0Y3RybC5qcyIsIm9yZ2FuaXphdGlvbnMvb3JnYW5pemF0aW9uY3JlYXRlY3RybC5qcyIsIm9yZ2FuaXphdGlvbnMvb3JnYW5pemF0aW9uZGV0YWlsc2N0cmwuanMiLCJvcmdhbml6YXRpb25zL29yZ2FuaXphdGlvbmxpc3RjdHJsLmpzIiwic2VydmljZV9sYnMvc2VydmljZWxiY3JlYXRlY3RybC5qcyIsInNlcnZpY2VfbGJzL3NlcnZpY2VsYmRldGFpbHNjdHJsLmpzIiwic2VydmljZV9sYnMvc2VydmljZWxibGlzdGN0cmwuanMiLCJzZXJ2aWNlX2xicy9zZXJ2aWNlbGJwb3J0c2RpcmVjdGl2ZS5qcyIsInNldHRpbmdzL2NsdXN0ZXJzZXR0aW5nY3RybC5qcyIsInN0b3JhZ2VfcG9saWNpZXMvc3RvcmFnZXBvbGljeWNyZWF0ZWN0cmwuanMiLCJzdG9yYWdlX3BvbGljaWVzL3N0b3JhZ2Vwb2xpY3lkZXRhaWxzY3RybC5qcyIsInN0b3JhZ2VfcG9saWNpZXMvc3RvcmFnZXBvbGljeWRpcmVjdGl2ZS5qcyIsInN0b3JhZ2VfcG9saWNpZXMvc3RvcmFnZXBvbGljeWxpc3RjdHJsLmpzIiwidm9sdW1lcy92b2x1bWVjcmVhdGVjdHJsLmpzIiwidm9sdW1lcy92b2x1bWVkZXRhaWxzY3RybC5qcyIsInZvbHVtZXMvdm9sdW1lbGlzdGN0cmwuanMiLCJ2b2x1bWVzL3ZvbHVtZXNlcnZpY2UuanMiLCJjb21wb25lbnRzL2RpcmVjdGl2ZXMvY29sbGFwc2libGVkaXJlY3RpdmUuanMiLCJjb21wb25lbnRzL2RpcmVjdGl2ZXMvZXJyb3JtZXNzYWdlZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9kaXJlY3RpdmVzL25hbWV2YWx1ZWRpcmVjdGl2ZS5qcyIsImNvbXBvbmVudHMvZGlyZWN0aXZlcy90YWJsZWRpcmVjdGl2ZS5qcyIsImNvbXBvbmVudHMvbW9kZWxzL2FwcGxpY2F0aW9uZ3JvdXBzbW9kZWwuanMiLCJjb21wb25lbnRzL21vZGVscy9jb2xsZWN0aW9uLmpzIiwiY29tcG9uZW50cy9tb2RlbHMvbmV0d29ya3Ntb2RlbC5qcyIsImNvbXBvbmVudHMvbW9kZWxzL25vZGVzbW9kZWwuanMiLCJjb21wb25lbnRzL21vZGVscy9vcmdhbml6YXRpb25zbW9kZWwuanMiLCJjb21wb25lbnRzL21vZGVscy9wb2xpY2llc21vZGVsLmpzIiwiY29tcG9uZW50cy9tb2RlbHMvcnVsZXNtb2RlbC5qcyIsImNvbXBvbmVudHMvbW9kZWxzL3NlcnZpY2VsYnNtb2RlbC5qcyIsImNvbXBvbmVudHMvbW9kZWxzL3N0b3JhZ2Vwb2xpY2llc21vZGVsLmpzIiwiY29tcG9uZW50cy9tb2RlbHMvdm9sdW1lc21vZGVsLmpzIiwiY29tcG9uZW50cy91dGlscy9jcnVkaGVscGVyc2VydmljZS5qcyIsImNvbXBvbmVudHMvdXRpbHMvbm9kZXNzZXJ2aWNlLmpzIiwiY29tcG9uZW50cy9kaXJlY3RpdmVzL25vZGVkaXJlY3RpdmVzL2FjaXZhbGlkZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9kaXJlY3RpdmVzL25vZGVkaXJlY3RpdmVzL2NvbnRyb2xpbnRlcmZhY2VkaXJlY3RpdmUuanMiLCJjb21wb25lbnRzL2RpcmVjdGl2ZXMvbm9kZWRpcmVjdGl2ZXMvbmV0d29ya21vZGVkaXJlY3RpdmUuanMiLCJjb21wb25lbnRzL2RpcmVjdGl2ZXMvbm9kZWRpcmVjdGl2ZXMvc2NoZWR1bGVyZGlyZWN0aXZlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDblVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25OQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RIQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZShcImNvbnRpdi5kaXJlY3RpdmVzXCIsIFtdKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMTQvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubW9kZWxzJywgW10pO1xudmFyIENvbnRpdkdsb2JhbHMgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy9SRVNUIGVuZHBvaW50cyBmb3IgXG4gICAgICAgICdORVRXT1JLU19FTkRQT0lOVCc6ICcvbmV0bWFzdGVyL2FwaS92MS9uZXR3b3Jrcy8nLFxuICAgICAgICAnUE9MSUNJRVNfRU5EUE9JTlQnOiAnL25ldG1hc3Rlci9hcGkvdjEvcG9saWN5cy8nLFxuICAgICAgICAnUlVMRVNfRU5EUE9JTlQnOiAnL25ldG1hc3Rlci9hcGkvdjEvcnVsZXMvJyxcbiAgICAgICAgJ0FQUExJQ0FUSU9OR1JPVVBTX0VORFBPSU5UJzogJy9uZXRtYXN0ZXIvYXBpL3YxL2VuZHBvaW50R3JvdXBzLycsXG4gICAgICAgICdTRVJWSUNFTEJTX0VORFBPSU5UJzogJy9uZXRtYXN0ZXIvYXBpL3YxL3NlcnZpY2VMQnMvJyxcbiAgICAgICAgJ09SR0FOSVpBVElPTlNfRU5EUE9JTlQnOicvbmV0bWFzdGVyL2FwaS92MS90ZW5hbnRzLycsXG5cbiAgICAgICAgLy9SRVNUIGVuZHBvaW50cyBmb3IgVk9MTUFTVEVSXG4gICAgICAgICdWT0xVTUVTX0VORFBPSU5UJzogJy92b2xtYXN0ZXIvdm9sdW1lcy8nLFxuICAgICAgICAnVk9MVU1FU19DUkVBVEVfRU5EUE9JTlQnOiAnL3ZvbG1hc3Rlci92b2x1bWVzL2NyZWF0ZS8nLFxuICAgICAgICAnVk9MVU1FU19ERUxFVEVfRU5EUE9JTlQnOiAnL3ZvbG1hc3Rlci92b2x1bWVzL3JlbW92ZS8nLFxuICAgICAgICAnVk9MVU1FU19DT1BZU05BUFNIT1RTX0VORFBPSU5UJzogJy92b2xtYXN0ZXIvdm9sdW1lcy9jb3B5LycsXG4gICAgICAgICdWT0xVTUVTX1VTRVNfRU5EUE9JTlQnOiAnL3ZvbG1hc3Rlci91c2VzL21vdW50cy8nLFxuICAgICAgICAnVk9MVU1FU19TTkFQU0hPVFNfRU5EUE9JTlQnOiAnL3ZvbG1hc3Rlci9zbmFwc2hvdHMvJyxcblxuICAgICAgICAnU1RPUkFHRVBPTElDSUVTX0VORFBPSU5UJzogJy92b2xtYXN0ZXIvcG9saWNpZXMvJyxcblxuXG4gICAgICAgIC8vUkVTVCBlbmRwb2ludHMgZm9yIENMVVNURVJcbiAgICAgICAgJ05PREVTX0xJU1RfRU5EUE9JTlQnOiAnL2luZm8vbm9kZXMnLFxuICAgICAgICAnTk9ERVNfRElTQ09WRVJfRU5EUE9JTlQnOiAnL2Rpc2NvdmVyL25vZGVzJyxcbiAgICAgICAgJ05PREVTX0NPTU1JU1NJT05fRU5EUE9JTlQnOiAnL2NvbW1pc3Npb24vbm9kZXMnLFxuICAgICAgICAnTk9ERVNfREVDT01NSVNTSU9OX0VORFBPSU5UJzogJy9kZWNvbW1pc3Npb24vbm9kZXMnLFxuICAgICAgICAnTk9ERVNfTUFJTlRFTkFOQ0VfRU5EUE9JTlQnOiAnL21haW50ZW5hbmNlL25vZGVzJyxcbiAgICAgICAgJ05PREVTX0xBU1RfSk9CX0VORFBPSU5UJzogJy9pbmZvL2pvYi9sYXN0JyxcbiAgICAgICAgJ05PREVTX0FDVElWRV9KT0JfRU5EUE9JTlQnOiAnL2luZm8vam9iL2FjdGl2ZScsXG4gICAgICAgICdOT0RFU19TRVRUSU5HU19TRVRfRU5EUE9JTlQnOiAnL2dsb2JhbHMnLFxuICAgICAgICAnTk9ERVNfU0VUVElOR1NfR0VUX0VORFBPSU5UJzogJy9pbmZvL2dsb2JhbHMnLFxuXG4gICAgICAgIC8vUmVmcmVzaCBpbnRlcnZhbCBpbiBtaWxsaXNlY29uZHNcbiAgICAgICAgJ1JFRlJFU0hfSU5URVJWQUwnOiA1MDAwLFxuXG4gICAgICAgIC8vUmVnRXggZm9yIHZhbGlkYXRpb25cbiAgICAgICAgJ0NJRFJfUkVHRVgnIDogJ14oKFswLTldfFsxLTldWzAtOV18MVswLTldezJ9fDJbMC00XVswLTldfDI1WzAtNV0pXFwuKXszfShbMC05XXxbMS05XVswLTldfDFbMC05XXsyfXwyWzAtNF1bMC05XXwyNVswLTVdKShcXC8oWzAtOV18WzEtMl1bMC05XXwzWzAtMl0pKSQnXG4gICAgfVxufSkoKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xOC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi51dGlscycsIFtdKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTgvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuYXBwbGljYXRpb25ncm91cHMnLCBbJ2NvbnRpdi5tb2RlbHMnLCAnY29udGl2LmRpcmVjdGl2ZXMnLCAnY29udGl2LnV0aWxzJ10pXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LmFwcGxpY2F0aW9uZ3JvdXBzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9hcHBsaWNhdGlvbmdyb3VwcycsXG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IHVpLXZpZXcgY2xhc3M9XCJ1aSBjb250YWluZXJcIi8+J1xuICAgICAgICAgICAgfSlcbiAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTgvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuZGFzaGJvYXJkJywgWydjb250aXYubW9kZWxzJ10pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzE5LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LmxvZ2luJywgWydjb250aXYudXRpbHMnXSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzE5LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm1lbnUnLCBbXSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzE4LzE2LlxuICovXG5cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubmV0d29ya3BvbGljaWVzJywgWydjb250aXYubW9kZWxzJywgJ2NvbnRpdi5kaXJlY3RpdmVzJywgJ2NvbnRpdi51dGlscyddKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTgvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubmV0d29ya3MnLCBbJ2NvbnRpdi5tb2RlbHMnLCAnY29udGl2LmRpcmVjdGl2ZXMnLCAnY29udGl2LnV0aWxzJ10pXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3JrcycsIHtcbiAgICAgICAgICAgIHVybDogJy9uZXR3b3JrcycsXG4gICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnPGRpdiB1aS12aWV3IGNsYXNzPVwidWkgY29udGFpbmVyXCIvPidcbiAgICAgICAgfSlcbiAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTgvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubm9kZXMnLCBbJ2NvbnRpdi5tb2RlbHMnLCAnY29udGl2LmRpcmVjdGl2ZXMnLCAnY29udGl2LnV0aWxzJ10pXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5vZGVzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9ub2RlcycsXG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IHVpLXZpZXcgY2xhc3M9XCJ1aSBjb250YWluZXJcIi8+J1xuICAgICAgICAgICAgfSlcbiAgICB9XSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2Lm9yZ2FuaXphdGlvbnMnLCBbJ2NvbnRpdi5tb2RlbHMnLCAnY29udGl2LmRpcmVjdGl2ZXMnLCAnY29udGl2LnV0aWxzJ10pXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdjb250aXYubWVudS5vcmdhbml6YXRpb25zJywge1xuICAgICAgICAgICAgdXJsOiAnL29yZ2FuaXphdGlvbnMnLFxuICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJzxkaXYgdWktdmlldyBjbGFzcz1cInVpIGNvbnRhaW5lclwiLz4nXG4gICAgICAgIH0pXG4gICAgfV0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xOC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5zZXJ2aWNlbGJzJywgWydjb250aXYubW9kZWxzJywgJ2NvbnRpdi5kaXJlY3RpdmVzJywgJ2NvbnRpdi51dGlscyddKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5zZXJ2aWNlbGJzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9zZXJ2aWNlbGJzJyxcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJzxkaXYgdWktdmlldyBjbGFzcz1cInVpIGNvbnRhaW5lclwiLz4nXG4gICAgICAgICAgICB9KVxuICAgIH1dKTtcbiIsImFuZ3VsYXIubW9kdWxlKCdjb250aXYuc2V0dGluZ3MnLCBbJ2NvbnRpdi5tb2RlbHMnLCAnY29udGl2LmRpcmVjdGl2ZXMnLCAnY29udGl2LnV0aWxzJ10pXHJcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcclxuICAgICAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnNldHRpbmdzJywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2dsb2JhbCcsXHJcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnPGRpdiB1aS12aWV3IGNsYXNzPVwidWkgY29udGFpbmVyXCIvPidcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5zZXR0aW5ncy5kZXRhaWxzJywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3NldHRpbmdzJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2V0dGluZ3Mvc2V0dGluZ3NtZW51Lmh0bWwnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc2V0dGluZ3MuZGV0YWlscy5sb2dzJywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2xvZ3MnLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJycsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5zZXR0aW5ncy5kZXRhaWxzLmF1dGgnLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvYXV0aCcsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnNldHRpbmdzLmRldGFpbHMubGljZW5zZScsIHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9saWNlbnNlJyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICcnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc2V0dGluZ3MuZGV0YWlscy5uZXR3b3JrcycsIHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9uZXR3b3JrcycsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnNldHRpbmdzLmRldGFpbHMucG9saWNpZXMnLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcG9saWNpZXMnLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJycsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJydcclxuICAgICAgICAgICAgfSlcclxuICAgIH1dKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTgvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuc3RvcmFnZXBvbGljaWVzJywgWydjb250aXYubW9kZWxzJywgJ2NvbnRpdi5kaXJlY3RpdmVzJywgJ2NvbnRpdi51dGlscyddKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5zdG9yYWdlcG9saWNpZXMnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL3N0b3JhZ2Vwb2xpY2llcycsXG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IHVpLXZpZXcgY2xhc3M9XCJ1aSBjb250YWluZXJcIi8+J1xuICAgICAgICAgICAgfSlcbiAgICB9XSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzE4LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnZvbHVtZXMnLCBbJ2NvbnRpdi5tb2RlbHMnLCAnY29udGl2LmRpcmVjdGl2ZXMnLCAnY29udGl2LnV0aWxzJ10pXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnZvbHVtZXMnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL3ZvbHVtZXMnLFxuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnPGRpdiB1aS12aWV3IGNsYXNzPVwidWkgY29udGFpbmVyXCIvPidcbiAgICAgICAgICAgIH0pXG4gICAgfV0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5cbi8vIERlY2xhcmUgYXBwIGxldmVsIG1vZHVsZSB3aGljaCBkZXBlbmRzIG9uIHZpZXdzLCBhbmQgY29tcG9uZW50c1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdkFwcCcsIFtcbiAgICAgICAgJ3VpLnJvdXRlcicsXG4gICAgICAgICdjb250aXYubG9naW4nLFxuICAgICAgICAnY29udGl2Lm1lbnUnLFxuICAgICAgICAnY29udGl2LmRhc2hib2FyZCcsXG4gICAgICAgICdjb250aXYuYXBwbGljYXRpb25ncm91cHMnLFxuICAgICAgICAnY29udGl2Lm5ldHdvcmtzJyxcbiAgICAgICAgJ2NvbnRpdi5uZXR3b3JrcG9saWNpZXMnLFxuICAgICAgICAnY29udGl2LnN0b3JhZ2Vwb2xpY2llcycsXG4gICAgICAgICdjb250aXYuc2VydmljZWxicycsXG4gICAgICAgICdjb250aXYudm9sdW1lcycsXG4gICAgICAgICdjb250aXYubm9kZXMnLFxuICAgICAgICAnY29udGl2Lm9yZ2FuaXphdGlvbnMnLFxuICAgICAgICAnY29udGl2LnNldHRpbmdzJyxcbiAgICBdKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAvL2Fic3RyYWN0IHN0YXRlIHNlcnZlcyBhcyBhIFBMQUNFSE9MREVSIG9yIE5BTUVTUEFDRSBmb3IgYXBwbGljYXRpb24gc3RhdGVzXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdicsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnPGRpdiB1aS12aWV3IGNsYXNzPVwidWkgZmx1aWQgY29udGFpbmVyXCIvPidcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcblxuICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzExLzE2LlxuICovXG4vKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMTAvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuYXBwbGljYXRpb25ncm91cHMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5hcHBsaWNhdGlvbmdyb3Vwcy5jcmVhdGUnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2NyZWF0ZScsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0FwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsIGFzIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcGxpY2F0aW9uZ3JvdXBzL2FwcGxpY2F0aW9uZ3JvdXBjcmVhdGUuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignQXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwnLCBbXG4gICAgICAgICckc3RhdGUnLFxuICAgICAgICAnQXBwbGljYXRpb25Hcm91cHNNb2RlbCcsXG4gICAgICAgICdOZXR3b3Jrc01vZGVsJyxcbiAgICAgICAgJ1BvbGljaWVzTW9kZWwnLFxuICAgICAgICAnUnVsZXNNb2RlbCcsXG4gICAgICAgICdBcHBsaWNhdGlvbkdyb3VwU2VydmljZScsXG4gICAgICAgICdDUlVESGVscGVyU2VydmljZScsXG4gICAgICAgIGZ1bmN0aW9uICgkc3RhdGUsXG4gICAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbkdyb3Vwc01vZGVsLFxuICAgICAgICAgICAgICAgICAgTmV0d29ya3NNb2RlbCxcbiAgICAgICAgICAgICAgICAgIFBvbGljaWVzTW9kZWwsXG4gICAgICAgICAgICAgICAgICBSdWxlc01vZGVsLFxuICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsID0gdGhpcztcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLm5ldHdvcmtzID0gW107XG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5pc29sYXRpb25Qb2xpY2llcyA9IFtdO1xuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuYXBwbGljYXRpb25Hcm91cCA9IHt9O1xuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuc2VsZWN0ZWROZXR3b3JrID0ge307XG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5zZWxlY3RlZFBvbGljeSA9IHt9O1xuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuc2VsZWN0ZWRQb2xpY2llcyA9IFtdO1xuXG4gICAgICAgICAgICAvL1RvIGRpc3BsYXkgaW5jb21pbmcgYW5kIG91dGdvaW5nIHJ1bGVzIGZvciBzZWxlY3RlZCBwb2xpY2llc1xuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuaW5jb21pbmdSdWxlcyA9IFtdO1xuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwub3V0Z29pbmdSdWxlcyA9IFtdO1xuXG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5pc29sYXRpb25Qb2xpY2llc1Zpc2libGUgPSBmYWxzZTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9BcHBsaWNhdGlvbkdyb3VwKCkge1xuICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUuYXBwbGljYXRpb25ncm91cHMubGlzdCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjYW5jZWxDcmVhdGluZygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5Ub0FwcGxpY2F0aW9uR3JvdXAoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXQgbmV0d29ya3MgZm9yIHRoZSBnaXZlbiB0ZW5hbnQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldE5ldHdvcmtzKCkge1xuICAgICAgICAgICAgICAgIE5ldHdvcmtzTW9kZWwuZ2V0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLm5ldHdvcmtzID0gXy5maWx0ZXIocmVzdWx0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAndGVuYW50TmFtZSc6ICdkZWZhdWx0Jy8vVE9ETzogUmVtb3ZlIGhhcmRjb2RlZCB0ZW5hbnQuXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdldCBwb2xpY2llcyBmb3IgdGhlIGdpdmVuIHRlbmFudC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0SXNvbGF0aW9uUG9saWNpZXMoKSB7XG4gICAgICAgICAgICAgICAgUG9saWNpZXNNb2RlbC5nZXQoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuaXNvbGF0aW9uUG9saWNpZXMgPSBfLmZpbHRlcihyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZW5hbnROYW1lJzogJ2RlZmF1bHQnLy9UT0RPOiBSZW1vdmUgaGFyZGNvZGVkIHRlbmFudC5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQWRkIHBvbGljeSB0byBuZXcgYXBwbGljYXRpb24gZ3JvdXBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gYWRkSXNvbGF0aW9uUG9saWN5KCkge1xuICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uR3JvdXBTZXJ2aWNlLmFkZElzb2xhdGlvblBvbGljeShhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmVtb3ZlIHBvbGljeSBmcm9tIG5ldyBhcHBsaWNhdGlvbiBncm91cFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiByZW1vdmVJc29sYXRpb25Qb2xpY3kocG9saWN5TmFtZSkge1xuICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uR3JvdXBTZXJ2aWNlLnJlbW92ZUlzb2xhdGlvblBvbGljeShhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybCwgcG9saWN5TmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUFwcGxpY2F0aW9uR3JvdXAoKSB7XG4gICAgICAgICAgICAgICAgLy9mb3JtIGNvbnRyb2xsZXIgaXMgaW5qZWN0ZWQgYnkgdGhlIGh0bWwgdGVtcGxhdGVcbiAgICAgICAgICAgICAgICAvL2NoZWNraW5nIGlmIGFsbCB2YWxpZGF0aW9ucyBoYXZlIHBhc3NlZFxuICAgICAgICAgICAgICAgIGlmIChhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5mb3JtLiR2YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IoYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLmFwcGxpY2F0aW9uR3JvdXAubmV0d29ya05hbWUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuc2VsZWN0ZWROZXR3b3JrLm5ldHdvcmtOYW1lO1xuICAgICAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5hcHBsaWNhdGlvbkdyb3VwLmtleSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbkdyb3Vwc01vZGVsLmdlbmVyYXRlS2V5KGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLmFwcGxpY2F0aW9uR3JvdXApO1xuXG4gICAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uR3JvdXBzTW9kZWwuY3JlYXRlKGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLmFwcGxpY2F0aW9uR3JvdXApLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9BcHBsaWNhdGlvbkdyb3VwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuYXBwbGljYXRpb25Hcm91cCA9IHtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBOYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgbmV0d29ya05hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBwb2xpY2llczogW10sXG4gICAgICAgICAgICAgICAgICAgIHRlbmFudE5hbWU6ICdkZWZhdWx0Jy8vVE9ETzogUmVtb3ZlIGhhcmRjb2RlZCB0ZW5hbnQuXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ2V0TmV0d29ya3MoKTtcbiAgICAgICAgICAgIGdldElzb2xhdGlvblBvbGljaWVzKCk7XG5cbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLmNyZWF0ZUFwcGxpY2F0aW9uR3JvdXAgPSBjcmVhdGVBcHBsaWNhdGlvbkdyb3VwO1xuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuY2FuY2VsQ3JlYXRpbmcgPSBjYW5jZWxDcmVhdGluZztcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLmFkZElzb2xhdGlvblBvbGljeSA9IGFkZElzb2xhdGlvblBvbGljeTtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLnJlbW92ZUlzb2xhdGlvblBvbGljeSA9IHJlbW92ZUlzb2xhdGlvblBvbGljeTtcblxuICAgICAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgICAgIH1dKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMTUvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuYXBwbGljYXRpb25ncm91cHMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5hcHBsaWNhdGlvbmdyb3Vwcy5kZXRhaWxzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9kZXRhaWxzLzprZXknLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwgYXMgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcGxpY2F0aW9uZ3JvdXBzL2FwcGxpY2F0aW9uZ3JvdXBkZXRhaWxzLmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5hcHBsaWNhdGlvbmdyb3Vwcy5lZGl0Jywge1xuICAgICAgICAgICAgICAgIHVybDogJy9lZGl0LzprZXknLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwgYXMgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcGxpY2F0aW9uZ3JvdXBzL2FwcGxpY2F0aW9uZ3JvdXBkZXRhaWxzLmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ0FwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCcsIFtcbiAgICAgICAgJyRzdGF0ZScsXG4gICAgICAgICckc3RhdGVQYXJhbXMnLFxuICAgICAgICAnQXBwbGljYXRpb25Hcm91cHNNb2RlbCcsXG4gICAgICAgICdQb2xpY2llc01vZGVsJyxcbiAgICAgICAgJ1J1bGVzTW9kZWwnLFxuICAgICAgICAnQXBwbGljYXRpb25Hcm91cFNlcnZpY2UnLFxuICAgICAgICAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLFxuICAgICAgICAgICAgICAgICAgJHN0YXRlUGFyYW1zLFxuICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cHNNb2RlbCxcbiAgICAgICAgICAgICAgICAgIFBvbGljaWVzTW9kZWwsXG4gICAgICAgICAgICAgICAgICBSdWxlc01vZGVsLFxuICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCA9IHRoaXM7XG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuaXNvbGF0aW9uUG9saWNpZXMgPSBbXTtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5hcHBsaWNhdGlvbkdyb3VwID0ge307XG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuc2VsZWN0ZWROZXR3b3JrID0ge307XG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuc2VsZWN0ZWRQb2xpY3kgPSB7fTtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5zZWxlY3RlZFBvbGljaWVzID0gW107XG5cbiAgICAgICAgICAgIC8vVG8gZGlzcGxheSBpbmNvbWluZyBhbmQgb3V0Z29pbmcgcnVsZXMgZm9yIHNlbGVjdGVkIHBvbGljaWVzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuaW5jb21pbmdSdWxlcyA9IFtdO1xuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLm91dGdvaW5nUnVsZXMgPSBbXTtcblxuXG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuaXNvbGF0aW9uUG9saWNpZXNWaXNpYmxlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVG8gc2hvdyBlZGl0IG9yIGRldGFpbHMgc2NyZWVuIGJhc2VkIG9uIHRoZSByb3V0ZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXRNb2RlKCkge1xuICAgICAgICAgICAgICAgIGlmICgkc3RhdGUuaXMoJ2NvbnRpdi5tZW51LmFwcGxpY2F0aW9uZ3JvdXBzLmVkaXQnKSkge1xuICAgICAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwubW9kZSA9ICdlZGl0JztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwubW9kZSA9ICdkZXRhaWxzJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvQXBwbGljYXRpb25Hcm91cCgpIHtcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51LmFwcGxpY2F0aW9uZ3JvdXBzLmxpc3QnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9BcHBsaWNhdGlvbkdyb3VwRGV0YWlscygpIHtcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51LmFwcGxpY2F0aW9uZ3JvdXBzLmRldGFpbHMnLCB7J2tleSc6IGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5hcHBsaWNhdGlvbkdyb3VwLmtleX0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjYW5jZWxFZGl0aW5nKCkge1xuICAgICAgICAgICAgICAgIHJldHVyblRvQXBwbGljYXRpb25Hcm91cERldGFpbHMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UnVsZXMoKSB7XG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmFwcGxpY2F0aW9uR3JvdXAucG9saWNpZXMuZm9yRWFjaChmdW5jdGlvbiAocG9saWN5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vVG8gZGlzcGxheSBydWxlcyBvZiBzZWxlY3RlZCBwb2xpY2llc1xuICAgICAgICAgICAgICAgICAgICBSdWxlc01vZGVsLmdldEluY29taW5nUnVsZXMocG9saWN5LCAnZGVmYXVsdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocnVsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuaW5jb21pbmdSdWxlcywgcnVsZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFJ1bGVzTW9kZWwuZ2V0T3V0Z29pbmdSdWxlcyhwb2xpY3ksICdkZWZhdWx0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChydWxlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5vdXRnb2luZ1J1bGVzLCBydWxlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBkZWxldGVBcHBsaWNhdGlvbkdyb3VwKCkge1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cHNNb2RlbC5kZWxldGUoYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmFwcGxpY2F0aW9uR3JvdXApLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvQXBwbGljYXRpb25Hcm91cCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IHBvbGljaWVzIGZvciB0aGUgZ2l2ZW4gdGVuYW50LlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRJc29sYXRpb25Qb2xpY2llcygpIHtcbiAgICAgICAgICAgICAgICBQb2xpY2llc01vZGVsLmdldCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuaXNvbGF0aW9uUG9saWNpZXMgPSBfLmZpbHRlcihyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZW5hbnROYW1lJzogJ2RlZmF1bHQnLy9UT0RPOiBSZW1vdmUgaGFyZGNvZGVkIHRlbmFudC5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBZGQgcG9saWN5IHRvIGFwcGxpY2F0aW9uIGdyb3VwXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGFkZElzb2xhdGlvblBvbGljeSgpIHtcbiAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbkdyb3VwU2VydmljZS5hZGRJc29sYXRpb25Qb2xpY3koYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZW1vdmUgcG9saWN5IGZyb20gYXBwbGljYXRpb24gZ3JvdXBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gcmVtb3ZlSXNvbGF0aW9uUG9saWN5KHBvbGljeU5hbWUpIHtcbiAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbkdyb3VwU2VydmljZS5yZW1vdmVJc29sYXRpb25Qb2xpY3koYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLCBwb2xpY3lOYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gc2F2ZUFwcGxpY2F0aW9uR3JvdXAoKSB7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIoYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbkdyb3Vwc01vZGVsLnNhdmUoYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmFwcGxpY2F0aW9uR3JvdXApLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblRvQXBwbGljYXRpb25Hcm91cERldGFpbHMoKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsKTtcbiAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwpO1xuXG4gICAgICAgICAgICBBcHBsaWNhdGlvbkdyb3Vwc01vZGVsLmdldE1vZGVsQnlLZXkoJHN0YXRlUGFyYW1zLmtleSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmFwcGxpY2F0aW9uR3JvdXAgPSBncm91cDtcbiAgICAgICAgICAgICAgICAgICAgLy9BcHBsaWNhdGlvbiBHcm91cHMgbWlnaHQgbm90IGhhdmUgYW55IHBvbGljaWVzIGFzc29jaWF0ZWQgd2l0aCB0aGVtIHNvIGRlZmluZSBhbiBlbXB0eSBhcnJheVxuICAgICAgICAgICAgICAgICAgICBpZiAoYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmFwcGxpY2F0aW9uR3JvdXAucG9saWNpZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmFwcGxpY2F0aW9uR3JvdXAucG9saWNpZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBnZXRSdWxlcygpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBnZXRJc29sYXRpb25Qb2xpY2llcygpO1xuXG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuc2F2ZUFwcGxpY2F0aW9uR3JvdXAgPSBzYXZlQXBwbGljYXRpb25Hcm91cDtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5jYW5jZWxFZGl0aW5nID0gY2FuY2VsRWRpdGluZztcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5hZGRJc29sYXRpb25Qb2xpY3kgPSBhZGRJc29sYXRpb25Qb2xpY3k7XG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwucmVtb3ZlSXNvbGF0aW9uUG9saWN5ID0gcmVtb3ZlSXNvbGF0aW9uUG9saWN5O1xuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmRlbGV0ZUFwcGxpY2F0aW9uR3JvdXAgPSBkZWxldGVBcHBsaWNhdGlvbkdyb3VwO1xuXG4gICAgICAgICAgICBzZXRNb2RlKCk7XG5cbiAgICAgICAgfV0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gMy8xMS8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5hcHBsaWNhdGlvbmdyb3VwcycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LmFwcGxpY2F0aW9uZ3JvdXBzLmxpc3QnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2xpc3QnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBcHBsaWNhdGlvbkdyb3VwTGlzdEN0cmwgYXMgYXBwbGljYXRpb25Hcm91cExpc3RDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcGxpY2F0aW9uZ3JvdXBzL2FwcGxpY2F0aW9uZ3JvdXBsaXN0Lmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ0FwcGxpY2F0aW9uR3JvdXBMaXN0Q3RybCcsXG4gICAgICAgIFsnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckZmlsdGVyJywgJ0FwcGxpY2F0aW9uR3JvdXBzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICAgICAgZnVuY3Rpb24gKCRzY29wZSwgJGludGVydmFsLCAkZmlsdGVyLCBBcHBsaWNhdGlvbkdyb3Vwc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgICAgIHZhciBhcHBsaWNhdGlvbkdyb3VwTGlzdEN0cmwgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0QXBwbGljYXRpb25Hcm91cHMocmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uR3JvdXBzTW9kZWwuZ2V0KHJlbG9hZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGFwcGxpY2F0aW9uR3JvdXBMaXN0Q3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cExpc3RDdHJsLmdyb3VwcyA9ICRmaWx0ZXIoJ29yZGVyQnknKShyZXN1bHQsICdncm91cE5hbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihhcHBsaWNhdGlvbkdyb3VwTGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9Mb2FkIGZyb20gY2FjaGUgZm9yIHF1aWNrIGRpc3BsYXkgaW5pdGlhbGx5XG4gICAgICAgICAgICAgICAgZ2V0QXBwbGljYXRpb25Hcm91cHMoZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2U7XG4gICAgICAgICAgICAgICAgLy9Eb24ndCBzdGFydCBhdXRvLXJlZnJlc2ggaWYgb25lIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICBpZiAoIWFuZ3VsYXIuaXNEZWZpbmVkKHByb21pc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0QXBwbGljYXRpb25Hcm91cHModHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL3N0b3AgcG9sbGluZyB3aGVuIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgJHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICRpbnRlcnZhbC5jYW5jZWwocHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMTYvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuYXBwbGljYXRpb25ncm91cHMnKVxuICAgIC5mYWN0b3J5KCdBcHBsaWNhdGlvbkdyb3VwU2VydmljZScsIFsnUnVsZXNNb2RlbCcsIGZ1bmN0aW9uIChSdWxlc01vZGVsKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBwb2xpY3kgdG8gYXBwbGljYXRpb24gZ3JvdXBcbiAgICAgICAgICogQHBhcmFtIGFwcGxpY2F0aW9uR3JvdXBDdHJsIENvbnRyb2xsZXIgZm9yIGFwcGxpY2F0aW9uIGdyb3VwIGVkaXQgb3IgY3JlYXRlIG9wZXJhdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gYWRkSXNvbGF0aW9uUG9saWN5KGFwcGxpY2F0aW9uR3JvdXBDdHJsKSB7XG4gICAgICAgICAgICBpZiAoXy5maW5kKGFwcGxpY2F0aW9uR3JvdXBDdHJsLnNlbGVjdGVkUG9saWNpZXMsIGFwcGxpY2F0aW9uR3JvdXBDdHJsLnNlbGVjdGVkUG9saWN5KSA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgICAgIC8vVG8gZGlzcGxheSBzZWxlY3RlZCBwb2xpY2llc1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDdHJsLnNlbGVjdGVkUG9saWNpZXMucHVzaChhcHBsaWNhdGlvbkdyb3VwQ3RybC5zZWxlY3RlZFBvbGljeSk7XG5cbiAgICAgICAgICAgICAgICAvL1RvIGRpc3BsYXkgcnVsZXMgb2Ygc2VsZWN0ZWQgcG9saWNpZXNcbiAgICAgICAgICAgICAgICBSdWxlc01vZGVsLmdldEluY29taW5nUnVsZXMoYXBwbGljYXRpb25Hcm91cEN0cmwuc2VsZWN0ZWRQb2xpY3kucG9saWN5TmFtZSwgJ2RlZmF1bHQnKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocnVsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFwcGxpY2F0aW9uR3JvdXBDdHJsLmluY29taW5nUnVsZXMsIHJ1bGVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgUnVsZXNNb2RlbC5nZXRPdXRnb2luZ1J1bGVzKGFwcGxpY2F0aW9uR3JvdXBDdHJsLnNlbGVjdGVkUG9saWN5LnBvbGljeU5hbWUsICdkZWZhdWx0JylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJ1bGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcHBsaWNhdGlvbkdyb3VwQ3RybC5vdXRnb2luZ1J1bGVzLCBydWxlcyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy9UbyBiZSBhZGRlZCB0byBhcHBsaWNhdGlvbiBncm91cCBhbmQgc2F2ZWQgdG8gdGhlIHNlcnZlclxuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDdHJsLmFwcGxpY2F0aW9uR3JvdXAucG9saWNpZXNcbiAgICAgICAgICAgICAgICAgICAgLnB1c2goYXBwbGljYXRpb25Hcm91cEN0cmwuc2VsZWN0ZWRQb2xpY3kucG9saWN5TmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIHBvbGljeSBmcm9tIGFwcGxpY2F0aW9uIGdyb3VwXG4gICAgICAgICAqIEBwYXJhbSBhcHBsaWNhdGlvbkdyb3VwQ3RybCBDb250cm9sbGVyIGZvciBhcHBsaWNhdGlvbiBncm91cCBlZGl0IG9yIGNyZWF0ZSBvcGVyYXRpb25cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUlzb2xhdGlvblBvbGljeShhcHBsaWNhdGlvbkdyb3VwQ3RybCwgcG9saWN5TmFtZSkge1xuICAgICAgICAgICAgXy5yZW1vdmUoYXBwbGljYXRpb25Hcm91cEN0cmwuYXBwbGljYXRpb25Hcm91cC5wb2xpY2llcywgZnVuY3Rpb24gKHBvbGljeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwb2xpY3kgPT0gcG9saWN5TmFtZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXy5yZW1vdmUoYXBwbGljYXRpb25Hcm91cEN0cmwuaW5jb21pbmdSdWxlcywgZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcnVsZS5wb2xpY3lOYW1lID09IHBvbGljeU5hbWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIF8ucmVtb3ZlKGFwcGxpY2F0aW9uR3JvdXBDdHJsLm91dGdvaW5nUnVsZXMsIGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJ1bGUucG9saWN5TmFtZSA9PSBwb2xpY3lOYW1lO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkSXNvbGF0aW9uUG9saWN5OiBhZGRJc29sYXRpb25Qb2xpY3ksXG4gICAgICAgICAgICByZW1vdmVJc29sYXRpb25Qb2xpY3k6IHJlbW92ZUlzb2xhdGlvblBvbGljeVxuICAgICAgICB9XG5cbiAgICB9XSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzExLzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LmRhc2hib2FyZCcpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LmRhc2hib2FyZCcsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZGFzaGJvYXJkJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnRGFzaGJvYXJkQ3RybCBhcyBkYXNoYm9hcmRDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2Rhc2hib2FyZC9kYXNoYm9hcmQuaHRtbCdcbiAgICAgICAgICAgIH0pO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdEYXNoYm9hcmRDdHJsJyxcbiAgICAgICAgW1xuICAgICAgICAgICAgJyRzY29wZScsXG4gICAgICAgICAgICAnJGludGVydmFsJyxcbiAgICAgICAgICAgICdOb2Rlc01vZGVsJyxcbiAgICAgICAgICAgICdOZXR3b3Jrc01vZGVsJyxcbiAgICAgICAgICAgICdWb2x1bWVzTW9kZWwnLFxuICAgICAgICAgICAgJ0FwcGxpY2F0aW9uR3JvdXBzTW9kZWwnLFxuICAgICAgICAgICAgJ1BvbGljaWVzTW9kZWwnLFxuICAgICAgICAgICAgJ1N0b3JhZ2VQb2xpY2llc01vZGVsJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsXG4gICAgICAgICAgICAgICAgICAgICAgJGludGVydmFsLFxuICAgICAgICAgICAgICAgICAgICAgIE5vZGVzTW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgTmV0d29ya3NNb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICBWb2x1bWVzTW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cHNNb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICBQb2xpY2llc01vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgIFN0b3JhZ2VQb2xpY2llc01vZGVsKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhc2hib2FyZEN0cmwgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0RGFzaGJvYXJkSW5mbyhyZWxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgTm9kZXNNb2RlbC5nZXQocmVsb2FkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhc2hib2FyZEN0cmwubm9kZXMgPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIE5ldHdvcmtzTW9kZWwuZ2V0KHJlbG9hZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXNoYm9hcmRDdHJsLm5ldHdvcmtzID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBWb2x1bWVzTW9kZWwuZ2V0KHJlbG9hZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXNoYm9hcmRDdHJsLnZvbHVtZXMgPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uR3JvdXBzTW9kZWwuZ2V0KHJlbG9hZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXNoYm9hcmRDdHJsLmdyb3VwcyA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgUG9saWNpZXNNb2RlbC5nZXQocmVsb2FkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhc2hib2FyZEN0cmwubmV0d29ya3BvbGljaWVzID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBTdG9yYWdlUG9saWNpZXNNb2RlbC5nZXQocmVsb2FkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhc2hib2FyZEN0cmwuc3RvcmFnZXBvbGljaWVzID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vV2lsbCBkaXNwbGF5IDAgaWYgdGhlcmUgaXMgZXJyb3IgZmV0Y2hpbmcgZGF0YVxuICAgICAgICAgICAgICAgIGRhc2hib2FyZEN0cmwubm9kZXMgPSAwO1xuICAgICAgICAgICAgICAgIGRhc2hib2FyZEN0cmwubmV0d29ya3MgPSAwO1xuICAgICAgICAgICAgICAgIGRhc2hib2FyZEN0cmwudm9sdW1lcyA9IDA7XG4gICAgICAgICAgICAgICAgZGFzaGJvYXJkQ3RybC5ncm91cHMgPSAwO1xuICAgICAgICAgICAgICAgIGRhc2hib2FyZEN0cmwubmV0d29ya3BvbGljaWVzID0gMDtcbiAgICAgICAgICAgICAgICBkYXNoYm9hcmRDdHJsLnN0b3JhZ2Vwb2xpY2llcyA9IDA7XG5cbiAgICAgICAgICAgICAgICAvL0xvYWQgZnJvbSBjYWNoZSBmb3IgcXVpY2sgZGlzcGxheSBpbml0aWFsbHlcbiAgICAgICAgICAgICAgICBnZXREYXNoYm9hcmRJbmZvKGZhbHNlKTtcblxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0RGFzaGJvYXJkSW5mbyh0cnVlKTtcbiAgICAgICAgICAgICAgICB9LCA1MDAwKTtcblxuICAgICAgICAgICAgICAgIC8vc3RvcCBwb2xsaW5nIHdoZW4gdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJGludGVydmFsLmNhbmNlbChwcm9taXNlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xOS8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5sb2dpbicpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5sb2dpbicsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2xvZ2luL2xvZ2luLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkN0cmwgYXMgbG9naW5DdHJsJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdMb2dpbkN0cmwnLCBbJyRzdGF0ZScsICdDUlVESGVscGVyU2VydmljZScsXG4gICAgICAgIGZ1bmN0aW9uICgkc3RhdGUsIENSVURIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICB2YXIgbG9naW5DdHJsID0gdGhpcztcblxuICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9EYXNoYm9hcmQoKSB7XG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5kYXNoYm9hcmQnLCB7dXNlcm5hbWU6IGxvZ2luQ3RybC51c2VybmFtZX0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBsb2dpbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5Ub0Rhc2hib2FyZCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGxvZ2luQ3RybCk7XG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IobG9naW5DdHJsKTtcbiAgICAgICAgICAgIGxvZ2luQ3RybC5sb2dpbiA9IGxvZ2luO1xuXG4gICAgICAgIH1dKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTkvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubWVudScpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Jywge1xuICAgICAgICAgICAgICAgIHVybDogJy9tJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21lbnUvbWVudS5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTWVudUN0cmwgYXMgbWVudUN0cmwnLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge3VzZXJuYW1lOiBudWxsfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdNZW51Q3RybCcsIFsnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsIGZ1bmN0aW9uICgkc3RhdGUsICRzdGF0ZVBhcmFtcykge1xuICAgICAgICB2YXIgbWVudUN0cmwgPSB0aGlzO1xuXG4gICAgICAgIGZ1bmN0aW9uIGxvZ291dCgpIHtcbiAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2LmxvZ2luJyk7XG4gICAgICAgIH1cblxuICAgICAgICBtZW51Q3RybC51c2VybmFtZSA9ICRzdGF0ZVBhcmFtcy51c2VybmFtZTtcbiAgICAgICAgbWVudUN0cmwubG9nb3V0ID0gbG9nb3V0O1xuXG4gICAgfV0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gMy8xMC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5uZXR3b3JrcG9saWNpZXMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMuaXNvbGF0aW9uLmNyZWF0ZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvY3JlYXRlJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybCBhcyBpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25ldHdvcmtfcG9saWNpZXMvaXNvbGF0aW9ucG9saWN5Y3JlYXRlLmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ0lzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwnLCBbJyRzdGF0ZScsICdQb2xpY2llc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgUG9saWNpZXNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgdmFyIGlzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwgPSB0aGlzO1xuXG4gICAgICAgIGZ1bmN0aW9uIHJldHVyblRvUG9saWNpZXMoKSB7XG4gICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51Lm5ldHdvcmtwb2xpY2llcy5pc29sYXRpb24ubGlzdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY2FuY2VsQ3JlYXRpbmcoKSB7XG4gICAgICAgICAgICByZXR1cm5Ub1BvbGljaWVzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQb2xpY3koKSB7XG4gICAgICAgICAgICBpZiAoaXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybC5mb3JtLiR2YWxpZCkge1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsLm5ld1BvbGljeS5rZXkgPVxuICAgICAgICAgICAgICAgICAgICBQb2xpY2llc01vZGVsLmdlbmVyYXRlS2V5KGlzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwubmV3UG9saWN5KTtcbiAgICAgICAgICAgICAgICBQb2xpY2llc01vZGVsLmNyZWF0ZShpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsLm5ld1BvbGljeSkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoaXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblRvUG9saWNpZXMoKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGlzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoaXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoaXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybCk7XG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IoaXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybCk7XG4gICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsLm5ld1BvbGljeSA9IHtcbiAgICAgICAgICAgICAgICBwb2xpY3lOYW1lOiAnJyxcbiAgICAgICAgICAgICAgICB0ZW5hbnROYW1lOiAnZGVmYXVsdCcvL1RPRE86IFJlbW92ZSBoYXJkY29kZWQgdGVuYW50LlxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwuY3JlYXRlUG9saWN5ID0gY3JlYXRlUG9saWN5O1xuICAgICAgICBpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsLmNhbmNlbENyZWF0aW5nID0gY2FuY2VsQ3JlYXRpbmc7XG5cbiAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzgvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubmV0d29ya3BvbGljaWVzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzLmlzb2xhdGlvbi5kZXRhaWxzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9kZXRhaWxzLzprZXknLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdJc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCBhcyBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICduZXR3b3JrX3BvbGljaWVzL2lzb2xhdGlvbnBvbGljeWRldGFpbHMuaHRtbCdcbiAgICAgICAgICAgIH0pO1xuICAgIH1dKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMuaXNvbGF0aW9uLmVkaXQnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2VkaXQvOmtleScsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0lzb2xhdGlvblBvbGljeURldGFpbHNDdHJsIGFzIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25ldHdvcmtfcG9saWNpZXMvaXNvbGF0aW9ucG9saWN5ZGV0YWlscy5odG1sJ1xuICAgICAgICAgICAgfSk7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ0lzb2xhdGlvblBvbGljeURldGFpbHNDdHJsJywgW1xuICAgICAgICAnJHN0YXRlJyxcbiAgICAgICAgJyRzdGF0ZVBhcmFtcycsXG4gICAgICAgICdQb2xpY2llc01vZGVsJyxcbiAgICAgICAgJ1J1bGVzTW9kZWwnLFxuICAgICAgICAnTmV0d29ya3NNb2RlbCcsXG4gICAgICAgICdBcHBsaWNhdGlvbkdyb3Vwc01vZGVsJyxcbiAgICAgICAgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBQb2xpY2llc01vZGVsLCBSdWxlc01vZGVsLCBOZXR3b3Jrc01vZGVsLCBBcHBsaWNhdGlvbkdyb3Vwc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsID0gdGhpcztcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ldHdvcmtzID0gW107XG4gICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5hcHBsaWNhdGlvbkdyb3VwcyA9IFtdO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZU91dGdvaW5nTmV0d29ya1NlbGVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZUluY29taW5nTmV0d29ya1NlbGVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZU91dGdvaW5nQXBwbGljYXRpb25Hcm91cFNlbGVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZUluY29taW5nQXBwbGljYXRpb25Hcm91cFNlbGVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3SW5jb21pbmdTZWxlY3RlZEFwcGxpY2F0aW9uR3JvdXAgPSAnJztcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld091dGdvaW5nU2VsZWN0ZWRBcHBsaWNhdGlvbkdyb3VwID0gJyc7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvUG9saWNpZXMoKSB7XG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMuaXNvbGF0aW9uLmxpc3QnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9Qb2xpY3lEZXRhaWxzKCkge1xuICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzLmlzb2xhdGlvbi5kZXRhaWxzJywge2tleTogaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwucG9saWN5LmtleX0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjYW5jZWxFZGl0aW5nKCkge1xuICAgICAgICAgICAgICAgIHJldHVyblRvUG9saWN5RGV0YWlscygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdvIGJhY2sgdG8gcG9saWN5IGRldGFpbHMgYWZ0ZXIgZG9uZSBlZGl0aW5nXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRvbmVFZGl0aW5nKCkge1xuICAgICAgICAgICAgICAgIHJldHVyblRvUG9saWN5RGV0YWlscygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBkZWxldGVQb2xpY3koKSB7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgUG9saWNpZXNNb2RlbC5kZWxldGUoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwucG9saWN5KS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblRvUG9saWNpZXMoKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRvIHNob3cgZWRpdCBvciBkZXRhaWxzIHNjcmVlbiBiYXNlZCBvbiB0aGUgcm91dGVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gc2V0TW9kZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAoJHN0YXRlLmlzKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMuaXNvbGF0aW9uLmVkaXQnKSkge1xuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5tb2RlID0gJ2VkaXQnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm1vZGUgPSAnZGV0YWlscyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXNldE5ld0luY29taW5nUnVsZSgpIHtcbiAgICAgICAgICAgICAgICAvL1J1bGUgb2JqZWN0IHRvIGJlIGNyZWF0ZWQgb24gc2VydmVyXG4gICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3SW5jb21pbmdSdWxlID0ge1xuICAgICAgICAgICAgICAgICAgICBydWxlSWQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnYWxsb3cnLC8vdG8gbWFrZSBpdCBkZWZhdWx0IHNlbGVjdGVkIG9wdGlvbiBpbiBVSVxuICAgICAgICAgICAgICAgICAgICBmcm9tRW5kcG9pbnRHcm91cDogJycsXG4gICAgICAgICAgICAgICAgICAgIGZyb21OZXR3b3JrOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZnJvbUlQQWRkcmVzczogJycsXG4gICAgICAgICAgICAgICAgICAgIHByb3RvY29sOiAndGNwJywvL3RvIG1ha2UgaXQgZGVmYXVsdCBzZWxlY3RlZCBvcHRpb24gaW4gVUlcbiAgICAgICAgICAgICAgICAgICAgcG9ydDogJycsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2luJyxcbiAgICAgICAgICAgICAgICAgICAgdGVuYW50TmFtZTogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgICAgICAgICBwb2xpY3lOYW1lOiBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5wb2xpY3kucG9saWN5TmFtZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3SW5jb21pbmdTZWxlY3RlZEFwcGxpY2F0aW9uR3JvdXAgPSAnJztcbiAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlSW5jb21pbmdOZXR3b3JrU2VsZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZUluY29taW5nQXBwbGljYXRpb25Hcm91cFNlbGVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXNldE5ld091dGdvaW5nUnVsZSgpIHtcbiAgICAgICAgICAgICAgICAvL1J1bGUgb2JqZWN0IHRvIGJlIGNyZWF0ZWQgb24gc2VydmVyXG4gICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3T3V0Z29pbmdSdWxlID0ge1xuICAgICAgICAgICAgICAgICAgICBydWxlSWQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnYWxsb3cnLC8vdG8gbWFrZSBpdCBkZWZhdWx0IHNlbGVjdGVkIG9wdGlvbiBpbiBVSVxuICAgICAgICAgICAgICAgICAgICB0b0VuZHBvaW50R3JvdXA6ICcnLFxuICAgICAgICAgICAgICAgICAgICB0b05ldHdvcms6ICcnLFxuICAgICAgICAgICAgICAgICAgICB0b0lQQWRkcmVzczogJycsXG4gICAgICAgICAgICAgICAgICAgIHByb3RvY29sOiAndGNwJywvL3RvIG1ha2UgaXQgZGVmYXVsdCBzZWxlY3RlZCBvcHRpb24gaW4gVUlcbiAgICAgICAgICAgICAgICAgICAgcG9ydDogJycsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ291dCcsXG4gICAgICAgICAgICAgICAgICAgIHRlbmFudE5hbWU6ICdkZWZhdWx0JyxcbiAgICAgICAgICAgICAgICAgICAgcG9saWN5TmFtZTogaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwucG9saWN5LnBvbGljeU5hbWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld091dGdvaW5nU2VsZWN0ZWRBcHBsaWNhdGlvbkdyb3VwID0gJyc7XG4gICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZU91dGdvaW5nTmV0d29ya1NlbGVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRpc2FibGVPdXRnb2luZ0FwcGxpY2F0aW9uR3JvdXBTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXQgbmV0d29yayBuYW1lcyBmb3IgdGhlIGdpdmVuIHRlbmFudC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0TmV0d29ya3MoKSB7XG4gICAgICAgICAgICAgICAgTmV0d29ya3NNb2RlbC5nZXQoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9fLmZpbHRlcigpIHJldHVybnMgYSBuZXcgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV0d29ya3MgPSBfLmZpbHRlcihyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZW5hbnROYW1lJzogJ2RlZmF1bHQnLy9UT0RPOiBSZW1vdmUgaGFyZGNvZGVkIHRlbmFudC5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IGFwcGxpY2F0aW9uIGdyb3VwIG5hbWVzIGZvciB0aGUgZ2l2ZW4gdGVuYW50LlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRBcHBsaWNhdGlvbkdyb3VwcygpIHtcbiAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbkdyb3Vwc01vZGVsLmdldCgpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vXy5maWx0ZXIoKSByZXR1cm5zIGEgbmV3IGFycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5hcHBsaWNhdGlvbkdyb3VwcyA9IF8uZmlsdGVyKHJlc3VsdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZW5hbnROYW1lJzogJ2RlZmF1bHQnLy9UT0RPOiBSZW1vdmUgaGFyZGNvZGVkIHRlbmFudC5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFdmVudCBoYW5kbGVyIHRvIGRpc2FibGUgbmV0d29yayBzZWxlY3Rpb24gYm94IG9uY2UgYXBwbGljYXRpb24gZ3JvdXAgaXMgc2VsZWN0ZWQgd2hpbGUgY3JlYXRpbmcgYSBuZXdcbiAgICAgICAgICAgICAqIHJ1bGUuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uQ2hhbmdlT3V0Z29pbmdBcHBsaWNhdGlvbkdyb3VwU2VsZWN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdPdXRnb2luZ1NlbGVjdGVkQXBwbGljYXRpb25Hcm91cCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vSWYgYXBwbGljYXRpb24gZ3JvdXAgaGFzIGJlZW4gc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3T3V0Z29pbmdSdWxlLnRvRW5kcG9pbnRHcm91cCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdPdXRnb2luZ1NlbGVjdGVkQXBwbGljYXRpb25Hcm91cC5ncm91cE5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld091dGdvaW5nUnVsZS50b05ldHdvcmsgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZU91dGdvaW5nTmV0d29ya1NlbGVjdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy9XaGVuICdub25lJyBpcyBzZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdPdXRnb2luZ1J1bGUudG9FbmRwb2ludEdyb3VwID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRpc2FibGVPdXRnb2luZ05ldHdvcmtTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRXZlbnQgaGFuZGxlciB0byBkaXNhYmxlIG5ldHdvcmsgc2VsZWN0aW9uIGJveCBvbmNlIGFwcGxpY2F0aW9uIGdyb3VwIGlzIHNlbGVjdGVkIHdoaWxlIGNyZWF0aW5nIGEgbmV3XG4gICAgICAgICAgICAgKiBydWxlLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBvbkNoYW5nZUluY29taW5nQXBwbGljYXRpb25Hcm91cFNlbGVjdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3SW5jb21pbmdTZWxlY3RlZEFwcGxpY2F0aW9uR3JvdXAgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAvL0lmIGFwcGxpY2F0aW9uIGdyb3VwIGhhcyBiZWVuIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld0luY29taW5nUnVsZS5mcm9tRW5kcG9pbnRHcm91cCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdJbmNvbWluZ1NlbGVjdGVkQXBwbGljYXRpb25Hcm91cC5ncm91cE5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld0luY29taW5nUnVsZS5mcm9tTmV0d29yayA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlSW5jb21pbmdOZXR3b3JrU2VsZWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL1doZW4gJ25vbmUnIGlzIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld0luY29taW5nUnVsZS5mcm9tRW5kcG9pbnRHcm91cCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlSW5jb21pbmdOZXR3b3JrU2VsZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRXZlbnQgaGFuZGxlciB0byBkaXNhYmxlIGFwcGxpY2F0aW9uIGdyb3VwIHNlbGVjdGlvbiBib3ggb25jZSBuZXR3b3JrIGlzIHNlbGVjdGVkIHdoaWxlIGNyZWF0aW5nIGEgbmV3XG4gICAgICAgICAgICAgKiBydWxlLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBvbkNoYW5nZU91dGdvaW5nTmV0d29ya1NlbGVjdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3T3V0Z29pbmdSdWxlLnRvTmV0d29yayAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vSWYgbmV0d29yayBoYXMgYmVlbiBzZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdPdXRnb2luZ1J1bGUuVG9FbmRwb2ludEdyb3VwID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRpc2FibGVPdXRnb2luZ0FwcGxpY2F0aW9uR3JvdXBTZWxlY3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRpc2FibGVPdXRnb2luZ0FwcGxpY2F0aW9uR3JvdXBTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRXZlbnQgaGFuZGxlciB0byBkaXNhYmxlIGFwcGxpY2F0aW9uIGdyb3VwIHNlbGVjdGlvbiBib3ggb25jZSBuZXR3b3JrIGlzIHNlbGVjdGVkIHdoaWxlIGNyZWF0aW5nIGEgbmV3XG4gICAgICAgICAgICAgKiBydWxlLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBvbkNoYW5nZUluY29taW5nTmV0d29ya1NlbGVjdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3SW5jb21pbmdSdWxlLmZyb21OZXR3b3JrICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9JZiBuZXR3b3JrIGhhcyBiZWVuIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld0luY29taW5nUnVsZS5mcm9tRW5kcG9pbnRHcm91cCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlSW5jb21pbmdBcHBsaWNhdGlvbkdyb3VwU2VsZWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlSW5jb21pbmdBcHBsaWNhdGlvbkdyb3VwU2VsZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZW5lcmF0ZXMgcnVsZSBpZFxuICAgICAgICAgICAgICogVE9ETyBNYWtlIGl0IGNyeXB0b2dyYXBoaWNhbGx5IHN0cm9uZ2VyIG9uY2Ugd2UgaGF2ZSBtdWx0aXBsZSB1c2VycyB1cGRhdGluZyBzYW1lIHBvbGljeVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZVJ1bGVJZChydWxlKSB7XG4gICAgICAgICAgICAgICAgcnVsZS5ydWxlSWQgPVxuICAgICAgICAgICAgICAgICAgICAoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuaW5jb21pbmdSdWxlcy5sZW5ndGggKyBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5vdXRnb2luZ1J1bGVzLmxlbmd0aCArIDEpLnRvU3RyaW5nKCkgKyAnLScgK1xuICAgICAgICAgICAgICAgICAgICBEYXRlLm5vdygpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUnVsZSBpcyBzYXZlZCB0byBzZXJ2ZXJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gYWRkSW5jb21pbmdSdWxlKCkge1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgIGdlbmVyYXRlUnVsZUlkKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld0luY29taW5nUnVsZSk7XG4gICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3SW5jb21pbmdSdWxlLmtleSA9IFJ1bGVzTW9kZWwuZ2VuZXJhdGVLZXkoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3SW5jb21pbmdSdWxlKTtcbiAgICAgICAgICAgICAgICBSdWxlc01vZGVsLmNyZWF0ZShpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdJbmNvbWluZ1J1bGUpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuaW5jb21pbmdSdWxlcy5wdXNoKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc2V0TmV3SW5jb21pbmdSdWxlKCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSdWxlIGlzIHNhdmVkIHRvIHNlcnZlclxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBhZGRPdXRnb2luZ1J1bGUoKSB7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVSdWxlSWQoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3T3V0Z29pbmdSdWxlKTtcbiAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdPdXRnb2luZ1J1bGUua2V5ID0gUnVsZXNNb2RlbC5nZW5lcmF0ZUtleShpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdPdXRnb2luZ1J1bGUpO1xuICAgICAgICAgICAgICAgIFJ1bGVzTW9kZWwuY3JlYXRlKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld091dGdvaW5nUnVsZSkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5vdXRnb2luZ1J1bGVzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzZXROZXdPdXRnb2luZ1J1bGUoKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIERlbGV0ZSBpbmNvbWluZyBydWxlIGZyb20gc2VydmVyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRlbGV0ZUluY29taW5nUnVsZShrZXkpIHtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBSdWxlc01vZGVsLmRlbGV0ZVVzaW5nS2V5KGtleSkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBfLnJlbW92ZShpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5pbmNvbWluZ1J1bGVzLCBmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4ua2V5ID09IGtleTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEZWxldGUgb3V0Z29pbmcgcnVsZSBmcm9tIHNlcnZlclxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBkZWxldGVPdXRnb2luZ1J1bGUoa2V5KSB7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgUnVsZXNNb2RlbC5kZWxldGVVc2luZ0tleShrZXkpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgXy5yZW1vdmUoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwub3V0Z29pbmdSdWxlcywgZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuLmtleSA9PSBrZXk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcblxuICAgICAgICAgICAgUG9saWNpZXNNb2RlbC5nZXRNb2RlbEJ5S2V5KCRzdGF0ZVBhcmFtcy5rZXkpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHBvbGljeSkge1xuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5wb2xpY3kgPSBwb2xpY3k7XG4gICAgICAgICAgICAgICAgICAgIFJ1bGVzTW9kZWwuZ2V0SW5jb21pbmdSdWxlcyhwb2xpY3kucG9saWN5TmFtZSwgJ2RlZmF1bHQnKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmluY29taW5nUnVsZXMgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNldE5ld0luY29taW5nUnVsZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgUnVsZXNNb2RlbC5nZXRPdXRnb2luZ1J1bGVzKHBvbGljeS5wb2xpY3lOYW1lLCAnZGVmYXVsdCcpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwub3V0Z29pbmdSdWxlcyA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0TmV3T3V0Z29pbmdSdWxlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBnZXROZXR3b3JrcygpO1xuICAgICAgICAgICAgZ2V0QXBwbGljYXRpb25Hcm91cHMoKTtcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRlbGV0ZVBvbGljeSA9IGRlbGV0ZVBvbGljeTtcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRlbGV0ZUluY29taW5nUnVsZSA9IGRlbGV0ZUluY29taW5nUnVsZTtcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRlbGV0ZU91dGdvaW5nUnVsZSA9IGRlbGV0ZU91dGdvaW5nUnVsZTtcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmFkZEluY29taW5nUnVsZSA9IGFkZEluY29taW5nUnVsZTtcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmFkZE91dGdvaW5nUnVsZSA9IGFkZE91dGdvaW5nUnVsZTtcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRvbmVFZGl0aW5nID0gZG9uZUVkaXRpbmc7XG4gICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5jYW5jZWxFZGl0aW5nID0gY2FuY2VsRWRpdGluZztcbiAgICAgICAgICAgIC8vRXZlbnQgSGFuZGxlcnNcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm9uQ2hhbmdlT3V0Z29pbmdBcHBsaWNhdGlvbkdyb3VwU2VsZWN0aW9uID0gb25DaGFuZ2VPdXRnb2luZ0FwcGxpY2F0aW9uR3JvdXBTZWxlY3Rpb247XG4gICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5vbkNoYW5nZUluY29taW5nQXBwbGljYXRpb25Hcm91cFNlbGVjdGlvbiA9IG9uQ2hhbmdlSW5jb21pbmdBcHBsaWNhdGlvbkdyb3VwU2VsZWN0aW9uO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwub25DaGFuZ2VPdXRnb2luZ05ldHdvcmtTZWxlY3Rpb24gPSBvbkNoYW5nZU91dGdvaW5nTmV0d29ya1NlbGVjdGlvbjtcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm9uQ2hhbmdlSW5jb21pbmdOZXR3b3JrU2VsZWN0aW9uID0gb25DaGFuZ2VJbmNvbWluZ05ldHdvcmtTZWxlY3Rpb247XG5cbiAgICAgICAgICAgIHNldE1vZGUoKTtcblxuICAgICAgICB9XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5uZXR3b3JrcG9saWNpZXMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMuaXNvbGF0aW9uLmxpc3QnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2xpc3QnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdJc29sYXRpb25Qb2xpY3lMaXN0Q3RybCBhcyBpc29sYXRpb25Qb2xpY3lMaXN0Q3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICduZXR3b3JrX3BvbGljaWVzL2lzb2xhdGlvbnBvbGljeWxpc3QuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignSXNvbGF0aW9uUG9saWN5TGlzdEN0cmwnLCBbJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJGZpbHRlcicsICdQb2xpY2llc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzY29wZSwgJGludGVydmFsLCAkZmlsdGVyLCBQb2xpY2llc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIHBvbGljaWVzTGlzdEN0cmwgPSB0aGlzO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRQb2xpY2llcyhyZWxvYWQpIHtcbiAgICAgICAgICAgICAgICBQb2xpY2llc01vZGVsLmdldChyZWxvYWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIocG9saWNpZXNMaXN0Q3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb2xpY2llc0xpc3RDdHJsLnBvbGljaWVzID0gJGZpbHRlcignb3JkZXJCeScpKHJlc3VsdCwgJ3BvbGljeU5hbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIocG9saWNpZXNMaXN0Q3RybCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0xvYWQgZnJvbSBjYWNoZSBmb3IgcXVpY2sgZGlzcGxheSBpbml0aWFsbHlcbiAgICAgICAgICAgIGdldFBvbGljaWVzKGZhbHNlKTtcblxuICAgICAgICAgICAgdmFyIHByb21pc2U7XG4gICAgICAgICAgICAvL0Rvbid0IHN0YXJ0IGF1dG8tcmVmcmVzaCBpZiBvbmUgaXMgYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKCFhbmd1bGFyLmlzRGVmaW5lZChwcm9taXNlKSkge1xuICAgICAgICAgICAgICAgIHByb21pc2UgPSAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBnZXRQb2xpY2llcyh0cnVlKTtcbiAgICAgICAgICAgICAgICB9LCBDb250aXZHbG9iYWxzLlJFRlJFU0hfSU5URVJWQUwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9zdG9wIHBvbGxpbmcgd2hlbiB1c2VyIG1vdmVzIGF3YXkgZnJvbSB0aGUgcGFnZVxuICAgICAgICAgICAgJHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJGludGVydmFsLmNhbmNlbChwcm9taXNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvOS8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5uZXR3b3JrcG9saWNpZXMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL25ldHdvcmtwb2xpY2llcycsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05ldHdvcmtQb2xpY2llc1RhYnNDdHJsIGFzIG5ldHdvcmtQb2xpY2llc1RhYnNDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25ldHdvcmtfcG9saWNpZXMvbmV0d29ya3BvbGljaWVzdGFicy5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzLmlzb2xhdGlvbicsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvaXNvbGF0aW9uJyxcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJzx1aS12aWV3Lz4nXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMucHJpb3JpdGl6YXRpb24nLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL3ByaW9yaXRpemF0aW9uJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTmV0d29ya1BvbGljaWVzVGFic0N0cmwgYXMgbmV0d29ya1BvbGljaWVzVGFic0N0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbmV0d29ya19wb2xpY2llcy9wcmlvcml0aXphdGlvbnBvbGljeWxpc3QuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5ldHdvcmtwb2xpY2llcy5iYW5kd2lkdGgnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2JhbmR3aWR0aCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05ldHdvcmtQb2xpY2llc1RhYnNDdHJsIGFzIG5ldHdvcmtQb2xpY2llc1RhYnNDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25ldHdvcmtfcG9saWNpZXMvYmFuZHdpZHRocG9saWN5bGlzdC5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzLnJlZGlyZWN0aW9uJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9yZWRpcmVjdGlvbicsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05ldHdvcmtQb2xpY2llc1RhYnNDdHJsIGFzIG5ldHdvcmtQb2xpY2llc1RhYnNDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25ldHdvcmtfcG9saWNpZXMvcmVkaXJlY3Rpb25wb2xpY3lsaXN0Lmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ05ldHdvcmtQb2xpY2llc1RhYnNDdHJsJywgWyckc3RhdGUnLCBmdW5jdGlvbiAoJHN0YXRlKSB7XG4gICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAyLzE5LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm5ldHdvcmtzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3MuY3JlYXRlJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9jcmVhdGUnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbmV0d29ya3MvbmV0d29ya2NyZWF0ZS5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTmV0d29ya0NyZWF0ZUN0cmwgYXMgbmV0d29ya0NyZWF0ZUN0cmwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ05ldHdvcmtDcmVhdGVDdHJsJywgWyckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ05ldHdvcmtzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsIE5ldHdvcmtzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICB2YXIgbmV0d29ya0NyZWF0ZUN0cmwgPSB0aGlzO1xuICAgICAgICAgICAgbmV0d29ya0NyZWF0ZUN0cmwuY2lkclBhdHRlcm4gPSBDb250aXZHbG9iYWxzLkNJRFJfUkVHRVg7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvTmV0d29ya3MoKSB7XG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5uZXR3b3Jrcy5saXN0Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNhbmNlbENyZWF0aW5nKCkge1xuICAgICAgICAgICAgICAgIHJldHVyblRvTmV0d29ya3MoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlTmV0d29yaygpIHtcbiAgICAgICAgICAgICAgICAvL2Zvcm0gY29udHJvbGxlciBpcyBpbmplY3RlZCBieSB0aGUgaHRtbCB0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIC8vY2hlY2tpbmcgaWYgYWxsIHZhbGlkYXRpb25zIGhhdmUgcGFzc2VkXG4gICAgICAgICAgICAgICAgaWYgKG5ldHdvcmtDcmVhdGVDdHJsLmZvcm0uJHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihuZXR3b3JrQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKG5ldHdvcmtDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgbmV0d29ya0NyZWF0ZUN0cmwubmV3TmV0d29yay5rZXkgPVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29ya0NyZWF0ZUN0cmwubmV3TmV0d29yay50ZW5hbnROYW1lICsgJzonICsgbmV0d29ya0NyZWF0ZUN0cmwubmV3TmV0d29yay5uZXR3b3JrTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgTmV0d29ya3NNb2RlbC5jcmVhdGUobmV0d29ya0NyZWF0ZUN0cmwubmV3TmV0d29yaykudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5ldHdvcmtDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvTmV0d29ya3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobmV0d29ya0NyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKG5ldHdvcmtDcmVhdGVDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobmV0d29ya0NyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihuZXR3b3JrQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgbmV0d29ya0NyZWF0ZUN0cmwubmV3TmV0d29yayA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmV0d29ya05hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBlbmNhcDogJ3Z4bGFuJyxcbiAgICAgICAgICAgICAgICAgICAgc3VibmV0OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZ2F0ZXdheTogJycsXG4gICAgICAgICAgICAgICAgICAgIHRlbmFudE5hbWU6ICdkZWZhdWx0Jy8vVE9ETzogUmVtb3ZlIGhhcmRjb2RlZCB0ZW5hbnQuXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV0d29ya0NyZWF0ZUN0cmwuY3JlYXRlTmV0d29yayA9IGNyZWF0ZU5ldHdvcms7XG4gICAgICAgICAgICBuZXR3b3JrQ3JlYXRlQ3RybC5jYW5jZWxDcmVhdGluZyA9IGNhbmNlbENyZWF0aW5nO1xuXG4gICAgICAgICAgICByZXNldEZvcm0oKTtcbiAgICAgICAgfV0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5uZXR3b3JrcycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5ldHdvcmtzLmRldGFpbHMnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2RldGFpbHMvOmtleScsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05ldHdvcmtEZXRhaWxzQ3RybCBhcyBuZXR3b3JrRGV0YWlsc0N0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbmV0d29ya3MvbmV0d29ya2RldGFpbHMuaHRtbCdcbiAgICAgICAgICAgIH0pO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdOZXR3b3JrRGV0YWlsc0N0cmwnLFxuICAgICAgICBbJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckZmlsdGVyJywgJ05ldHdvcmtzTW9kZWwnLCAnQXBwbGljYXRpb25Hcm91cHNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsXG4gICAgICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsICRzY29wZSwgJGludGVydmFsLCAkZmlsdGVyLCBOZXR3b3Jrc01vZGVsLCBBcHBsaWNhdGlvbkdyb3Vwc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgICAgIHZhciBuZXR3b3JrRGV0YWlsc0N0cmwgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9OZXR3b3JrcygpIHtcbiAgICAgICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5uZXR3b3Jrcy5saXN0Jyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZGVsZXRlTmV0d29yaygpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKG5ldHdvcmtEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKG5ldHdvcmtEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIE5ldHdvcmtzTW9kZWwuZGVsZXRlKG5ldHdvcmtEZXRhaWxzQ3RybC5uZXR3b3JrKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobmV0d29ya0RldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvTmV0d29ya3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobmV0d29ya0RldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihuZXR3b3JrRGV0YWlsc0N0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEdldCBhcHBsaWNhdGlvbiBncm91cHMgYmVsb25naW5nIHRvIGEgbmV0d29ya1xuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldEFwcGxpY2F0aW9uR3JvdXBzKHJlbG9hZCkge1xuICAgICAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbkdyb3Vwc01vZGVsLmdldChyZWxvYWQpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29ya0RldGFpbHNDdHJsLmFwcGxpY2F0aW9uR3JvdXBzID0gJGZpbHRlcignb3JkZXJCeScpKF8uZmlsdGVyKHJlc3VsdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICduZXR3b3JrTmFtZSc6IG5ldHdvcmtEZXRhaWxzQ3RybC5uZXR3b3JrLm5ldHdvcmtOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgJ2dyb3VwTmFtZScpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5ldHdvcmtEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKG5ldHdvcmtEZXRhaWxzQ3RybCk7XG5cbiAgICAgICAgICAgICAgICBOZXR3b3Jrc01vZGVsLmdldE1vZGVsQnlLZXkoJHN0YXRlUGFyYW1zLmtleSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKG5ldHdvcmspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcmtEZXRhaWxzQ3RybC5uZXR3b3JrID0gbmV0d29yaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldEFwcGxpY2F0aW9uR3JvdXBzKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBuZXR3b3JrRGV0YWlsc0N0cmwuZGVsZXRlTmV0d29yayA9IGRlbGV0ZU5ldHdvcms7XG5cbiAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZTtcbiAgICAgICAgICAgICAgICAvL0Rvbid0IGRvIGF1dG9yZWZyZXNoIGlmIG9uZSBpcyBhbHJlYWR5IGluIHByb2dyZXNzXG4gICAgICAgICAgICAgICAgaWYgKCFhbmd1bGFyLmlzRGVmaW5lZChwcm9taXNlKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldEFwcGxpY2F0aW9uR3JvdXBzKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9LCBDb250aXZHbG9iYWxzLlJFRlJFU0hfSU5URVJWQUwpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vc3RvcCBwb2xsaW5nIHdoZW4gdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJGludGVydmFsLmNhbmNlbChwcm9taXNlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1dKTtcbiIsImFuZ3VsYXIubW9kdWxlKCdjb250aXYubmV0d29ya3MnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3Jrcy5saXN0Jywge1xuICAgICAgICAgICAgICAgIHVybDogJy9saXN0JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTmV0d29ya3NMaXN0Q3RybCBhcyBuZXR3b3Jrc0xpc3RDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25ldHdvcmtzL25ldHdvcmtsaXN0Lmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ05ldHdvcmtzTGlzdEN0cmwnLCBbJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJGZpbHRlcicsICdOZXR3b3Jrc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzY29wZSwgJGludGVydmFsLCAkZmlsdGVyLCBOZXR3b3Jrc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIG5ldHdvcmtzTGlzdEN0cmwgPSB0aGlzO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXROZXR3b3JrcyhyZWxvYWQpIHtcbiAgICAgICAgICAgICAgICBOZXR3b3Jrc01vZGVsLmdldChyZWxvYWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5ldHdvcmtzTGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcmtzTGlzdEN0cmwubmV0d29ya3MgPSAkZmlsdGVyKCdvcmRlckJ5JykocmVzdWx0LCAnbmV0d29ya05hbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobmV0d29ya3NMaXN0Q3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9Mb2FkIGZyb20gY2FjaGUgZm9yIHF1aWNrIGRpc3BsYXkgaW5pdGlhbGx5XG4gICAgICAgICAgICBnZXROZXR3b3JrcyhmYWxzZSk7XG5cbiAgICAgICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICAgICAgLy9Eb24ndCBkbyBhdXRvcmVmcmVzaCBpZiBvbmUgaXMgYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKCFhbmd1bGFyLmlzRGVmaW5lZChwcm9taXNlKSkge1xuICAgICAgICAgICAgICAgIHByb21pc2UgPSAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBnZXROZXR3b3Jrcyh0cnVlKTtcbiAgICAgICAgICAgICAgICB9LCBDb250aXZHbG9iYWxzLlJFRlJFU0hfSU5URVJWQUwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL3N0b3AgcG9sbGluZyB3aGVuIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXG4gICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHByb21pc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1dKTtcbiIsImFuZ3VsYXIubW9kdWxlKFwiY29udGl2Lm5vZGVzXCIpXG4gICAgLmRpcmVjdGl2ZShcImN0dkxvZ3NcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbm9kZXMvbG9ncy5odG1sJyxcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgbG9nOiBcIj1cIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJAXCIsXG4gICAgICAgICAgICAgICAgbW9kYWxpZDogXCJAXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9KTsiLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2Lm5vZGVzJylcbiAgICAuZmFjdG9yeSgnTG9nU2VydmljZScsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XG4gICAgICAgIGZ1bmN0aW9uIGdldEFjdGl2ZUxvZ3MoKSB7XG4gICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgICAgICAgdmFyIHVybCA9IENvbnRpdkdsb2JhbHMuTk9ERVNfQUNUSVZFX0pPQl9FTkRQT0lOVDtcbiAgICAgICAgICAgICRodHRwLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldExhc3RMb2dzKCkge1xuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICAgICAgIHZhciB1cmwgPSBDb250aXZHbG9iYWxzLk5PREVTX0xBU1RfSk9CX0VORFBPSU5UO1xuICAgICAgICAgICAgJGh0dHAuZ2V0KHVybCkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdldEFjdGl2ZUxvZ3M6IGdldEFjdGl2ZUxvZ3MsXG4gICAgICAgICAgICBnZXRMYXN0TG9nczogZ2V0TGFzdExvZ3NcbiAgICAgICAgfVxuICAgIH1dKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMjUvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubm9kZXMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5ub2Rlcy5jb21taXNzaW9uJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9jb21taXNzaW9uLzprZXknLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb2RlQ29tbWlzc2lvbkN0cmwgYXMgbm9kZUNvbW1pc3Npb25DdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25vZGVzL25vZGVjb21taXNzaW9uLmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ05vZGVDb21taXNzaW9uQ3RybCcsIFtcbiAgICAgICAgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnTm9kZXNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsICdOb2Rlc1NlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsIE5vZGVzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlLCBOb2Rlc1NlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBub2RlQ29tbWlzc2lvbkN0cmwgPSB0aGlzO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub05vZGVEZXRhaWxzKCkge1xuICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUubm9kZXMuZGV0YWlscy5pbmZvJywgeydrZXknOiAkc3RhdGVQYXJhbXMua2V5fSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNhbmNlbENvbW1pc3Npb25pbmdOb2RlKCkge1xuICAgICAgICAgICAgICAgIHJldHVyblRvTm9kZURldGFpbHMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY29tbWlzc2lvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZUNvbW1pc3Npb25DdHJsLmZvcm0uJHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihub2RlQ29tbWlzc2lvbkN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihub2RlQ29tbWlzc2lvbkN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwubm9kZU9wc09iai5ub2RlcyA9IFskc3RhdGVQYXJhbXMua2V5XTtcbiAgICAgICAgICAgICAgICAgICAgTm9kZXNTZXJ2aWNlLmNsZWFudXBFeHRyYVZhcnMobm9kZUNvbW1pc3Npb25DdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgTm9kZXNTZXJ2aWNlLmNyZWF0ZUV4dHJhVmFycyhub2RlQ29tbWlzc2lvbkN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBOb2Rlc01vZGVsLmNvbW1pc3Npb24obm9kZUNvbW1pc3Npb25DdHJsLm5vZGVPcHNPYmopLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihub2RlQ29tbWlzc2lvbkN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9Ob2RlRGV0YWlscygpO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihub2RlQ29tbWlzc2lvbkN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKG5vZGVDb21taXNzaW9uQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwubm9kZU9wc09iaiA9IHt9O1xuICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmV4dHJhX3ZhcnMgPSB7fTsgLy9UT0RPIEludGlhbGl6ZSBmcm9tIGdsb2JhbCBzZXR0aW5nc1xuICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmFuc2libGVWYXJpYWJsZXMgPSBbXTtcbiAgICAgICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5lbnZWYXJpYWJsZXMgPSBbXTtcblxuICAgICAgICAgICAgTm9kZXNTZXJ2aWNlLmdldFNldHRpbmdzKG5vZGVDb21taXNzaW9uQ3RybCk7XG5cbiAgICAgICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5jYW5jZWxDb21taXNzaW9uaW5nTm9kZSA9IGNhbmNlbENvbW1pc3Npb25pbmdOb2RlO1xuICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmNvbW1pc3Npb24gPSBjb21taXNzaW9uO1xuXG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5vZGVDb21taXNzaW9uQ3RybCk7XG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Iobm9kZUNvbW1pc3Npb25DdHJsKTtcbiAgICAgICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzI1LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm5vZGVzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubm9kZXMuZGV0YWlscycsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZGV0YWlscy86a2V5JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9kZURldGFpbHNDdHJsIGFzIG5vZGVEZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdub2Rlcy9ub2RlZGV0YWlscy5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubm9kZXMuZGV0YWlscy5pbmZvJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9pbmZvJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9kZURldGFpbHNDdHJsIGFzIG5vZGVEZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdub2Rlcy9ub2RlaW5mby5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubm9kZXMuZGV0YWlscy5zdGF0cycsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvc3RhdHMnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb2RlRGV0YWlsc0N0cmwgYXMgbm9kZURldGFpbHNDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25vZGVzL25vZGVzdGF0cy5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubm9kZXMuZGV0YWlscy5sb2dzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9sb2dzJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9kZURldGFpbHNDdHJsIGFzIG5vZGVEZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdub2Rlcy9ub2RlbG9ncy5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdOb2RlRGV0YWlsc0N0cmwnLCBbJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnJHNjb3BlJywgJyRpbnRlcnZhbCcsICdOb2Rlc01vZGVsJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkc2NvcGUsICRpbnRlcnZhbCwgTm9kZXNNb2RlbCkge1xuICAgICAgICAgICAgdmFyIG5vZGVEZXRhaWxzQ3RybCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRlY29tbWlzc2lvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZU9wc09iaiA9IHtcbiAgICAgICAgICAgICAgICAgIG5vZGVzOiBbJHN0YXRlUGFyYW1zLmtleV1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIE5vZGVzTW9kZWwuZGVjb21taXNzaW9uKG5vZGVPcHNPYmopLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAvL0Rpc2FibGUgYWxsIGJ1dHRvbnMgaW5pdGlhbGx5LiBQb2xsIHdpbGwgYXNzaWduIHZhbHVlcyBhcHByb3ByaWF0ZWx5LlxuICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuc2hvd0NvbW1pc3Npb25CdXR0b24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLmNvbW1pc3Npb25CdXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC51cGdyYWRlQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiB1cGdyYWRlKCkge1xuICAgICAgICAgICAgICAgIHZhciBub2RlT3BzT2JqID0ge1xuICAgICAgICAgICAgICAgICAgICBub2RlczogWyRzdGF0ZVBhcmFtcy5rZXldXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBOb2Rlc01vZGVsLnVwZ3JhZGUobm9kZU9wc09iaikudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vRGlzYWJsZSBhbGwgYnV0dG9ucyBpbml0aWFsbHkuIFBvbGwgd2lsbCBhc3NpZ24gdmFsdWVzIGFwcHJvcHJpYXRlbHkuXG4gICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5zaG93Q29tbWlzc2lvbkJ1dHRvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuY29tbWlzc2lvbkJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnVwZ3JhZGVCdXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRGlzcGxheSBidXR0b25zIGJhc2VkIG9uIHN0YXR1cyBvZiBub2RlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldEJ1dHRvbkRpc3BsYXkoKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChub2RlRGV0YWlsc0N0cmwubm9kZVsnaW52ZW50b3J5X3N0YXRlJ10uc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1VuYWxsb2NhdGVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5zaG93Q29tbWlzc2lvbkJ1dHRvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuY29tbWlzc2lvbkJ1dHRvbkVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnVwZ3JhZGVCdXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnRGVjb21taXNzaW9uZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnNob3dDb21taXNzaW9uQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5jb21taXNzaW9uQnV0dG9uRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwudXBncmFkZUJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdQcm92aXNpb25pbmcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnNob3dDb21taXNzaW9uQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5jb21taXNzaW9uQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnVwZ3JhZGVCdXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQWxsb2NhdGVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5zaG93Q29tbWlzc2lvbkJ1dHRvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLmNvbW1pc3Npb25CdXR0b25FbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC51cGdyYWRlQnV0dG9uRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQ2FuY2VsbGVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5zaG93Q29tbWlzc2lvbkJ1dHRvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLmNvbW1pc3Npb25CdXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwudXBncmFkZUJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdNYWludGVuYW5jZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuc2hvd0NvbW1pc3Npb25CdXR0b24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLmNvbW1pc3Npb25CdXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwudXBncmFkZUJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Oi8vQ2x1c3RlciBzaG91bGQgbm90IGJlIGluIHRoaXMgc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5zaG93Q29tbWlzc2lvbkJ1dHRvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuY29tbWlzc2lvbkJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC51cGdyYWRlQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXROb2RlSW5mbyhyZWxvYWQpIHtcbiAgICAgICAgICAgICAgICBOb2Rlc01vZGVsLmdldE1vZGVsQnlLZXkoJHN0YXRlUGFyYW1zLmtleSwgcmVsb2FkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLm5vZGUgPSBub2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QnV0dG9uRGlzcGxheSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLmRlY29tbWlzc2lvbiA9IGRlY29tbWlzc2lvbjtcbiAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC51cGdyYWRlID0gdXBncmFkZTtcblxuICAgICAgICAgICAgLy9Mb2FkIGZyb20gY2FjaGUgZm9yIHF1aWNrIGRpc3BsYXkgaW5pdGlhbGx5XG4gICAgICAgICAgICBnZXROb2RlSW5mbyhmYWxzZSk7XG5cbiAgICAgICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICAgICAgLy9Eb24ndCBkbyBhdXRvLXJlZnJlc2ggaWYgb25lIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQocHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0Tm9kZUluZm8odHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL3N0b3AgcG9sbGluZyB3aGVuIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXG4gICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHByb21pc2UpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfV0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNi8xNC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoXCJjb250aXYubm9kZXNcIilcbiAgICAuZGlyZWN0aXZlKFwiY3R2Tm9kZXN0YXR1c1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgIG5vZGU6ICc9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbm9kZXMvbm9kZXN0YXR1cy5odG1sJ1xuICAgICAgICB9XG4gICAgfSlcbiAgICAuZGlyZWN0aXZlKFwiY3R2Tm9kZXN0YXRlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgbm9kZTogJz0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdub2Rlcy9ub2Rlc3RhdGUuaHRtbCdcbiAgICAgICAgfVxuICAgIH0pOyIsImFuZ3VsYXIubW9kdWxlKCdjb250aXYubm9kZXMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5ub2Rlcy5kaXNjb3ZlcicsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZGlzY292ZXInLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb2RlRGlzY292ZXJDdHJsIGFzIG5vZGVEaXNjb3ZlckN0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbm9kZXMvbm9kZWRpc2NvdmVyLmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ05vZGVEaXNjb3ZlckN0cmwnLCBbXG4gICAgICAgICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ05vZGVzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLCAnTm9kZXNTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBOb2Rlc01vZGVsLCBDUlVESGVscGVyU2VydmljZSwgTm9kZXNTZXJ2aWNlKSB7XG4gICAgICAgICAgICB2YXIgbm9kZURpc2NvdmVyQ3RybCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvTm9kZXMoKSB7XG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5ub2Rlcy5saXN0Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNhbmNlbERpc2NvdmVyaW5nTm9kZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5Ub05vZGVzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRpc2NvdmVyKCkge1xuICAgICAgICAgICAgICAgIGlmIChub2RlRGlzY292ZXJDdHJsLmZvcm0uJHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihub2RlRGlzY292ZXJDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIobm9kZURpc2NvdmVyQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUlQQWRkckFycmF5KCk7XG4gICAgICAgICAgICAgICAgICAgIE5vZGVzU2VydmljZS5jcmVhdGVFeHRyYVZhcnMobm9kZURpc2NvdmVyQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIE5vZGVzTW9kZWwuZGlzY292ZXIobm9kZURpc2NvdmVyQ3RybC5ub2RlT3BzT2JqKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobm9kZURpc2NvdmVyQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub05vZGVzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5vZGVEaXNjb3ZlckN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKG5vZGVEaXNjb3ZlckN0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlSVBBZGRyQXJyYXkoKSB7XG4gICAgICAgICAgICAgICAgbm9kZURpc2NvdmVyQ3RybC5ub2RlT3BzT2JqLmFkZHJzID0gXy53b3Jkcyhub2RlRGlzY292ZXJDdHJsLm5vZGVJUEFkZHIsIC9bXiwgXSsvZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5vZGVEaXNjb3ZlckN0cmwubm9kZU9wc09iaiA9IHt9O1xuICAgICAgICAgICAgbm9kZURpc2NvdmVyQ3RybC5leHRyYV92YXJzID0ge307IC8vVE9ETyBJbnRpYWxpemUgZnJvbSBnbG9iYWwgc2V0dGluZ3NcbiAgICAgICAgICAgIG5vZGVEaXNjb3ZlckN0cmwuYW5zaWJsZVZhcmlhYmxlcyA9IFtdO1xuICAgICAgICAgICAgbm9kZURpc2NvdmVyQ3RybC5lbnZWYXJpYWJsZXMgPSBbXTtcbiAgICAgICAgICAgIG5vZGVEaXNjb3ZlckN0cmwubm9kZUlQQWRkciA9ICcnOyAvL0lQIGFkZHJlc3Mgb2Ygbm9kZXMgdG8gZGlzY292ZXJcblxuICAgICAgICAgICAgbm9kZURpc2NvdmVyQ3RybC5kaXNjb3ZlciA9IGRpc2NvdmVyO1xuICAgICAgICAgICAgbm9kZURpc2NvdmVyQ3RybC5jYW5jZWxEaXNjb3ZlcmluZ05vZGUgPSBjYW5jZWxEaXNjb3ZlcmluZ05vZGU7XG5cbiAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobm9kZURpc2NvdmVyQ3RybCk7XG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Iobm9kZURpc2NvdmVyQ3RybCk7XG4gICAgICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gMy8yMi8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5ub2RlcycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5vZGVzLmxpc3QnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2xpc3QnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb2RlTGlzdEN0cmwgYXMgbm9kZUxpc3RDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25vZGVzL25vZGVsaXN0Lmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ05vZGVMaXN0Q3RybCcsIFsnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckZmlsdGVyJywgJ05vZGVzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLCAnTG9nU2VydmljZScsXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICRpbnRlcnZhbCwgJGZpbHRlciwgTm9kZXNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UsIExvZ1NlcnZpY2UpIHtcbiAgICAgICAgdmFyIG5vZGVMaXN0Q3RybCA9IHRoaXM7XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0Tm9kZXMocmVsb2FkKSB7XG4gICAgICAgICAgICBOb2Rlc01vZGVsLmdldChyZWxvYWQpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5vZGVMaXN0Q3RybCk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0Q3RybC5ub2RlcyA9ICRmaWx0ZXIoJ29yZGVyQnknKShyZXN1bHQsICdrZXknKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5vZGVMaXN0Q3RybCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZ2V0QWN0aXZlTG9ncygpO1xuICAgICAgICAgICAgICAgIGdldExhc3RMb2dzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRBY3RpdmVMb2dzKCkge1xuICAgICAgICAgICAgTG9nU2VydmljZS5nZXRBY3RpdmVMb2dzKCkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgbm9kZUxpc3RDdHJsLmFjdGl2ZUxvZ3MgPSByZXN1bHQ7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIC8vT25jZSB0aGUgam9iIGZpbmlzaGVzLCBlbmRwb2ludCByZXR1cm5zIDUwMCBlcnJvci4gU28gcmVzZXQgdGhlIGFjdGl2ZUxvZ3NcbiAgICAgICAgICAgICAgICBub2RlTGlzdEN0cmwuYWN0aXZlTG9ncyA9IHtcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ1RoZXJlIGlzIGN1cnJlbnRseSBubyBhY3RpdmUgam9iLiBDaGVjayBMYXN0IEpvYiBmb3IgYSBqb2IgdGhhdCByZWNlbnRseSBmaW5pc2hlZC4nXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0TGFzdExvZ3MoKSB7XG4gICAgICAgICAgICBMb2dTZXJ2aWNlLmdldExhc3RMb2dzKCkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgbm9kZUxpc3RDdHJsLmxhc3RMb2dzID0gcmVzdWx0O1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbm9kZUxpc3RDdHJsLmdldEFjdGl2ZUxvZ3MgPSBnZXRBY3RpdmVMb2dzO1xuICAgICAgICBub2RlTGlzdEN0cmwuZ2V0TGFzdExvZ3MgPSBnZXRMYXN0TG9ncztcblxuICAgICAgICAvL0xvYWQgZnJvbSBjYWNoZSBmb3IgcXVpY2sgZGlzcGxheSBpbml0aWFsbHlcbiAgICAgICAgZ2V0Tm9kZXMoZmFsc2UpO1xuXG4gICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICAvL0Rvbid0IGRvIGF1dG8tcmVmcmVzaCBpZiBvbmUgaXMgYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgICBpZiAoIWFuZ3VsYXIuaXNEZWZpbmVkKHByb21pc2UpKSB7XG4gICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBnZXROb2Rlcyh0cnVlKTtcbiAgICAgICAgICAgIH0sIENvbnRpdkdsb2JhbHMuUkVGUkVTSF9JTlRFUlZBTCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9zdG9wIHBvbGxpbmcgd2hlbiB1c2VyIG1vdmVzIGF3YXkgZnJvbSB0aGUgcGFnZVxuICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRpbnRlcnZhbC5jYW5jZWwocHJvbWlzZSk7XG4gICAgICAgIH0pO1xuICAgIH1dKTsiLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2Lm9yZ2FuaXphdGlvbnMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5vcmdhbml6YXRpb25zLmNyZWF0ZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvY3JlYXRlJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ29yZ2FuaXphdGlvbnMvb3JnYW5pemF0aW9uY3JlYXRlLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdPcmdhbml6YXRpb25DcmVhdGVDdHJsIGFzIG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ09yZ2FuaXphdGlvbkNyZWF0ZUN0cmwnLCBbJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnT3JnYW5pemF0aW9uc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBPcmdhbml6YXRpb25zTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICB2YXIgb3JnYW5pemF0aW9uQ3JlYXRlQ3RybCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvT3JnYW5pemF0aW9ucygpIHtcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51Lm9yZ2FuaXphdGlvbnMubGlzdCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjYW5jZWxDcmVhdGluZygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5Ub09yZ2FuaXphdGlvbnMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlT3JnYW5pemF0aW9uKCkge1xuICAgICAgICAgICAgICAgIC8vZm9ybSBjb250cm9sbGVyIGlzIGluamVjdGVkIGJ5IHRoZSBodG1sIHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgLy9jaGVja2luZyBpZiBhbGwgdmFsaWRhdGlvbnMgaGF2ZSBwYXNzZWRcbiAgICAgICAgICAgICAgICBpZiAob3JnYW5pemF0aW9uQ3JlYXRlQ3RybC5mb3JtLiR2YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Iob3JnYW5pemF0aW9uQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBvcmdhbml6YXRpb25DcmVhdGVDdHJsLm5ld09yZ2FuaXphdGlvbi5rZXkgPSBvcmdhbml6YXRpb25DcmVhdGVDdHJsLm5ld09yZ2FuaXphdGlvbi50ZW5hbnROYW1lOyBcbiAgICAgICAgICAgICAgICAgICAgT3JnYW5pemF0aW9uc01vZGVsLmNyZWF0ZShvcmdhbml6YXRpb25DcmVhdGVDdHJsLm5ld09yZ2FuaXphdGlvbikudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9Pcmdhbml6YXRpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIob3JnYW5pemF0aW9uQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgIG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwubmV3T3JnYW5pemF0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICB0ZW5hbnROYW1lOiAnJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwuY3JlYXRlT3JnYW5pemF0aW9uID0gY3JlYXRlT3JnYW5pemF0aW9uO1xuICAgICAgICAgICAgb3JnYW5pemF0aW9uQ3JlYXRlQ3RybC5jYW5jZWxDcmVhdGluZyA9IGNhbmNlbENyZWF0aW5nO1xuXG4gICAgICAgICAgICByZXNldEZvcm0oKTtcbiAgICAgICAgfV0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5vcmdhbml6YXRpb25zJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUub3JnYW5pemF0aW9ucy5kZXRhaWxzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9kZXRhaWxzLzprZXknLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdPcmdhbml6YXRpb25EZXRhaWxzQ3RybCBhcyBvcmdhbml6YXRpb25EZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdvcmdhbml6YXRpb25zL29yZ2FuaXphdGlvbmRldGFpbHMuaHRtbCdcbiAgICAgICAgICAgIH0pO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdPcmdhbml6YXRpb25EZXRhaWxzQ3RybCcsXG4gICAgICAgIFsnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICckc2NvcGUnLCAnJGludGVydmFsJywgJyRmaWx0ZXInLCAnT3JnYW5pemF0aW9uc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uICgkc3RhdGUsICRzdGF0ZVBhcmFtcywgJHNjb3BlLCAkaW50ZXJ2YWwsICRmaWx0ZXIsIE9yZ2FuaXphdGlvbnNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3JnYW5pemF0aW9uRGV0YWlsc0N0cmwgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9Pcmdhbml6YXRpb25zKCkge1xuICAgICAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51Lm9yZ2FuaXphdGlvbnMubGlzdCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRlbGV0ZU9yZ2FuaXphdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIob3JnYW5pemF0aW9uRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBPcmdhbml6YXRpb25zTW9kZWwuZGVsZXRlKG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsLm9yZ2FuaXphdGlvbikudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvT3JnYW5pemF0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihvcmdhbml6YXRpb25EZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3Iob3JnYW5pemF0aW9uRGV0YWlsc0N0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIob3JnYW5pemF0aW9uRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihvcmdhbml6YXRpb25EZXRhaWxzQ3RybCk7XG5cbiAgICAgICAgICAgICAgICBPcmdhbml6YXRpb25zTW9kZWwuZ2V0TW9kZWxCeUtleSgkc3RhdGVQYXJhbXMua2V5KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAob3JnYW5pemF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcmdhbml6YXRpb25EZXRhaWxzQ3RybC5vcmdhbml6YXRpb24gPSBvcmdhbml6YXRpb247XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgb3JnYW5pemF0aW9uRGV0YWlsc0N0cmwuZGVsZXRlT3JnYW5pemF0aW9uID0gZGVsZXRlT3JnYW5pemF0aW9uO1xuICAgICAgICAgICAgfV0pOyIsImFuZ3VsYXIubW9kdWxlKCdjb250aXYub3JnYW5pemF0aW9ucycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm9yZ2FuaXphdGlvbnMubGlzdCcsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvbGlzdCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ09yZ2FuaXphdGlvbnNMaXN0Q3RybCBhcyBvcmdhbml6YXRpb25zTGlzdEN0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnb3JnYW5pemF0aW9ucy9vcmdhbml6YXRpb25saXN0Lmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ09yZ2FuaXphdGlvbnNMaXN0Q3RybCcsIFsnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckZmlsdGVyJywgJ09yZ2FuaXphdGlvbnNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICRpbnRlcnZhbCwgJGZpbHRlciwgT3JnYW5pemF0aW9uc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIG9yZ2FuaXphdGlvbnNMaXN0Q3RybCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldE9yZ2FuaXphdGlvbnMocmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgT3JnYW5pemF0aW9uc01vZGVsLmdldChyZWxvYWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG9yZ2FuaXphdGlvbnNMaXN0Q3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JnYW5pemF0aW9uc0xpc3RDdHJsLm9yZ2FuaXphdGlvbnMgPSAkZmlsdGVyKCdvcmRlckJ5JykocmVzdWx0LCAndGVuYW50TmFtZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihvcmdhbml6YXRpb25zTGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vTG9hZCBmcm9tIGNhY2hlIGZvciBxdWljayBkaXNwbGF5IGluaXRpYWxseVxuICAgICAgICAgICAgZ2V0T3JnYW5pemF0aW9ucyhmYWxzZSk7XG5cbiAgICAgICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICAgICAgLy9Eb24ndCBkbyBhdXRvcmVmcmVzaCBpZiBvbmUgaXMgYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKCFhbmd1bGFyLmlzRGVmaW5lZChwcm9taXNlKSkge1xuICAgICAgICAgICAgICAgIHByb21pc2UgPSAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBnZXRPcmdhbml6YXRpb25zKHRydWUpO1xuICAgICAgICAgICAgICAgIH0sIENvbnRpdkdsb2JhbHMuUkVGUkVTSF9JTlRFUlZBTCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vc3RvcCBwb2xsaW5nIHdoZW4gdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcbiAgICAgICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRpbnRlcnZhbC5jYW5jZWwocHJvbWlzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfV0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xMi8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5zZXJ2aWNlbGJzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc2VydmljZWxicy5jcmVhdGUnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2NyZWF0ZScsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzZXJ2aWNlX2xicy9zZXJ2aWNlbGJjcmVhdGUuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1NlcnZpY2VsYkNyZWF0ZUN0cmwgYXMgc2VydmljZWxiQ3JlYXRlQ3RybCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignU2VydmljZWxiQ3JlYXRlQ3RybCcsIFtcbiAgICAgICAgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnU2VydmljZWxic01vZGVsJywgJ05ldHdvcmtzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsIFNlcnZpY2VsYnNNb2RlbCwgTmV0d29ya3NNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBzZXJ2aWNlbGJDcmVhdGVDdHJsID0gdGhpcztcbiAgICAgICAgICAgIHNlcnZpY2VsYkNyZWF0ZUN0cmwubGFiZWxTZWxlY3RvcnMgPSBbXTtcbiAgICAgICAgICAgIHNlcnZpY2VsYkNyZWF0ZUN0cmwubmV0d29ya3MgPSBbXTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9TZXJ2aWNlbGJzKCkge1xuICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUuc2VydmljZWxicy5saXN0Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNhbmNlbENyZWF0aW5nKCkge1xuICAgICAgICAgICAgICAgIHJldHVyblRvU2VydmljZWxicygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdldCBuZXR3b3JrcyBmb3IgdGhlIGdpdmVuIHRlbmFudC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0TmV0d29ya3MoKSB7XG4gICAgICAgICAgICAgICAgTmV0d29ya3NNb2RlbC5nZXQoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZWxiQ3JlYXRlQ3RybC5uZXR3b3JrcyA9IF8uZmlsdGVyKHJlc3VsdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3RlbmFudE5hbWUnOiAnZGVmYXVsdCcvL1RPRE86IFJlbW92ZSBoYXJkY29kZWQgdGVuYW50LlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlTGFiZWxTZWxlY3RvclN0cmluZ3MoKSB7XG4gICAgICAgICAgICAgICAgLy9FbXB0eSBvdXQgdGhlIHNlbGVjdG9ycy4gSW4gY2FzZSBvZiBzZXJ2ZXIgZXJyb3JzIHRoaXMgbmVlZHMgdG8gYmUgcmVzZXQuXG4gICAgICAgICAgICAgICAgc2VydmljZWxiQ3JlYXRlQ3RybC5zZXJ2aWNlbGIuc2VsZWN0b3JzID0gW107XG4gICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHNlcnZpY2VsYkNyZWF0ZUN0cmwubGFiZWxTZWxlY3RvcnMsIGZ1bmN0aW9uKGxhYmVsU2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdG9yU3RyaW5nID0gbGFiZWxTZWxlY3Rvci5uYW1lICsgJz0nICsgbGFiZWxTZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZWxiQ3JlYXRlQ3RybC5zZXJ2aWNlbGIuc2VsZWN0b3JzLnB1c2goc2VsZWN0b3JTdHJpbmcpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVTZXJ2aWNlbGIoKSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlTGFiZWxTZWxlY3RvclN0cmluZ3MoKTtcbiAgICAgICAgICAgICAgICAvL2Zvcm0gY29udHJvbGxlciBpcyBpbmplY3RlZCBieSB0aGUgaHRtbCB0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIC8vY2hlY2tpbmcgaWYgYWxsIHZhbGlkYXRpb25zIGhhdmUgcGFzc2VkXG4gICAgICAgICAgICAgICAgaWYgKHNlcnZpY2VsYkNyZWF0ZUN0cmwuZm9ybS4kdmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKHNlcnZpY2VsYkNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihzZXJ2aWNlbGJDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZWxiQ3JlYXRlQ3RybC5zZXJ2aWNlbGIua2V5ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VsYkNyZWF0ZUN0cmwuc2VydmljZWxiLnRlbmFudE5hbWUgKyAnOicgKyBzZXJ2aWNlbGJDcmVhdGVDdHJsLnNlcnZpY2VsYi5zZXJ2aWNlTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgU2VydmljZWxic01vZGVsLmNyZWF0ZShzZXJ2aWNlbGJDcmVhdGVDdHJsLnNlcnZpY2VsYikudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHNlcnZpY2VsYkNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9TZXJ2aWNlbGJzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHNlcnZpY2VsYkNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKHNlcnZpY2VsYkNyZWF0ZUN0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzZXJ2aWNlbGJDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Ioc2VydmljZWxiQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgc2VydmljZWxiQ3JlYXRlQ3RybC5zZXJ2aWNlbGIgPSB7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2VOYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgbmV0d29ya05hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBpcEFkZHJlc3M6ICcnLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcnM6IFtdLFxuICAgICAgICAgICAgICAgICAgICBwb3J0czogW10sXG4gICAgICAgICAgICAgICAgICAgIHRlbmFudE5hbWU6ICdkZWZhdWx0Jy8vVE9ETzogUmVtb3ZlIGhhcmRjb2RlZCB0ZW5hbnQuXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlcnZpY2VsYkNyZWF0ZUN0cmwuY3JlYXRlU2VydmljZWxiID0gY3JlYXRlU2VydmljZWxiO1xuICAgICAgICAgICAgc2VydmljZWxiQ3JlYXRlQ3RybC5jYW5jZWxDcmVhdGluZyA9IGNhbmNlbENyZWF0aW5nO1xuXG4gICAgICAgICAgICBnZXROZXR3b3JrcygpO1xuICAgICAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xMS8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5zZXJ2aWNlbGJzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc2VydmljZWxicy5kZXRhaWxzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9kZXRhaWxzLzprZXknLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdTZXJ2aWNlbGJEZXRhaWxzQ3RybCBhcyBzZXJ2aWNlbGJEZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzZXJ2aWNlX2xicy9zZXJ2aWNlbGJkZXRhaWxzLmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5zZXJ2aWNlbGJzLmVkaXQnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2VkaXQvOmtleScsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1NlcnZpY2VsYkRldGFpbHNDdHJsIGFzIHNlcnZpY2VsYkRldGFpbHNDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NlcnZpY2VfbGJzL3NlcnZpY2VsYmRldGFpbHMuaHRtbCdcbiAgICAgICAgICAgIH0pO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdTZXJ2aWNlbGJEZXRhaWxzQ3RybCcsXG4gICAgICAgIFsnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdTZXJ2aWNlbGJzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBTZXJ2aWNlbGJzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlcnZpY2VsYkRldGFpbHNDdHJsID0gdGhpcztcbiAgICAgICAgICAgICAgICBzZXJ2aWNlbGJEZXRhaWxzQ3RybC5sYWJlbFNlbGVjdG9ycyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogVG8gc2hvdyBlZGl0IG9yIGRldGFpbHMgc2NyZWVuIGJhc2VkIG9uIHRoZSByb3V0ZVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNldE1vZGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkc3RhdGUuaXMoJ2NvbnRpdi5tZW51LnNlcnZpY2VsYnMuZWRpdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlbGJEZXRhaWxzQ3RybC5tb2RlID0gJ2VkaXQnO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZWxiRGV0YWlsc0N0cmwubW9kZSA9ICdkZXRhaWxzJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvU2VydmljZWxicygpIHtcbiAgICAgICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5zZXJ2aWNlbGJzLmxpc3QnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub1NlcnZpY2VsYkRldGFpbHMoKSB7XG4gICAgICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUuc2VydmljZWxicy5kZXRhaWxzJywgeydrZXknOiBzZXJ2aWNlbGJEZXRhaWxzQ3RybC5zZXJ2aWNlbGIua2V5fSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY2FuY2VsRWRpdGluZygpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9TZXJ2aWNlbGJEZXRhaWxzKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZGVsZXRlU2VydmljZWxiKCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Ioc2VydmljZWxiRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihzZXJ2aWNlbGJEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIFNlcnZpY2VsYnNNb2RlbC5kZWxldGUoc2VydmljZWxiRGV0YWlsc0N0cmwuc2VydmljZWxiKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc2VydmljZWxiRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9TZXJ2aWNlbGJzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHNlcnZpY2VsYkRldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihzZXJ2aWNlbGJEZXRhaWxzQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc2F2ZVNlcnZpY2VsYigpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKHNlcnZpY2VsYkRldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIoc2VydmljZWxiRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVMYWJlbFNlbGVjdG9yU3RyaW5ncygpO1xuICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlbGJzTW9kZWwuc2F2ZShzZXJ2aWNlbGJEZXRhaWxzQ3RybC5zZXJ2aWNlbGIpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzZXJ2aWNlbGJEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub1NlcnZpY2VsYkRldGFpbHMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc2VydmljZWxiRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKHNlcnZpY2VsYkRldGFpbHNDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVMYWJlbFNlbGVjdG9ycygpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHNlcnZpY2VsYkRldGFpbHNDdHJsLnNlcnZpY2VsYi5zZWxlY3RvcnMsIGZ1bmN0aW9uKHNlbGVjdG9yU3RyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0b3IgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogc2VsZWN0b3JTdHIuc3BsaXQoJz0nKVswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZWN0b3JTdHIuc3BsaXQoJz0nKVsxXVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VsYkRldGFpbHNDdHJsLmxhYmVsU2VsZWN0b3JzLnB1c2goc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVMYWJlbFNlbGVjdG9yU3RyaW5ncygpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZWxiRGV0YWlsc0N0cmwuc2VydmljZWxiLnNlbGVjdG9ycyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2goc2VydmljZWxiRGV0YWlsc0N0cmwubGFiZWxTZWxlY3RvcnMsIGZ1bmN0aW9uKGxhYmVsU2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RvclN0cmluZyA9IGxhYmVsU2VsZWN0b3IubmFtZSArICc9JyArIGxhYmVsU2VsZWN0b3IudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlbGJEZXRhaWxzQ3RybC5zZXJ2aWNlbGIuc2VsZWN0b3JzLnB1c2goc2VsZWN0b3JTdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc2VydmljZWxiRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihzZXJ2aWNlbGJEZXRhaWxzQ3RybCk7XG5cbiAgICAgICAgICAgICAgICBTZXJ2aWNlbGJzTW9kZWwuZ2V0TW9kZWxCeUtleSgkc3RhdGVQYXJhbXMua2V5KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2soc2VydmljZWxiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlbGJEZXRhaWxzQ3RybC5zZXJ2aWNlbGIgPSBzZXJ2aWNlbGI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVMYWJlbFNlbGVjdG9ycygpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHNlcnZpY2VsYkRldGFpbHNDdHJsLnNhdmVTZXJ2aWNlbGIgPSBzYXZlU2VydmljZWxiO1xuICAgICAgICAgICAgICAgIHNlcnZpY2VsYkRldGFpbHNDdHJsLmNhbmNlbEVkaXRpbmcgPSBjYW5jZWxFZGl0aW5nO1xuICAgICAgICAgICAgICAgIHNlcnZpY2VsYkRldGFpbHNDdHJsLmRlbGV0ZVNlcnZpY2VsYiA9IGRlbGV0ZVNlcnZpY2VsYjtcbiAgICAgICAgICAgICAgICBzZXRNb2RlKCk7XG5cbiAgICAgICAgICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xMS8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5zZXJ2aWNlbGJzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc2VydmljZWxicy5saXN0Jywge1xuICAgICAgICAgICAgICAgIHVybDogJy9saXN0JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnU2VydmljZWxiTGlzdEN0cmwgYXMgc2VydmljZWxiTGlzdEN0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2VydmljZV9sYnMvc2VydmljZWxibGlzdC5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdTZXJ2aWNlbGJMaXN0Q3RybCcsIFsnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckZmlsdGVyJywgJ1NlcnZpY2VsYnNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICRpbnRlcnZhbCwgJGZpbHRlciwgU2VydmljZWxic01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIHNlcnZpY2VsYkxpc3RDdHJsID0gdGhpcztcblxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0U2VydmljZWxicyhyZWxvYWQpIHtcbiAgICAgICAgICAgICAgICBTZXJ2aWNlbGJzTW9kZWwuZ2V0KHJlbG9hZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc2VydmljZWxiTGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VsYkxpc3RDdHJsLnNlcnZpY2VsYnMgPSAkZmlsdGVyKCdvcmRlckJ5JykocmVzdWx0LCAnc2VydmljZU5hbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc2VydmljZWxiTGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vTG9hZCBmcm9tIGNhY2hlIGZvciBxdWljayBkaXNwbGF5IGluaXRpYWxseVxuICAgICAgICAgICAgZ2V0U2VydmljZWxicyhmYWxzZSk7XG5cbiAgICAgICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICAgICAgLy9Eb24ndCBkbyBhdXRvcmVmcmVzaCBpZiBvbmUgaXMgYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKCFhbmd1bGFyLmlzRGVmaW5lZChwcm9taXNlKSkge1xuICAgICAgICAgICAgICAgIHByb21pc2UgPSAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBnZXRTZXJ2aWNlbGJzKHRydWUpO1xuICAgICAgICAgICAgICAgIH0sIENvbnRpdkdsb2JhbHMuUkVGUkVTSF9JTlRFUlZBTCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vc3RvcCBwb2xsaW5nIHdoZW4gdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcbiAgICAgICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRpbnRlcnZhbC5jYW5jZWwocHJvbWlzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzEzLzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZShcImNvbnRpdi5zZXJ2aWNlbGJzXCIpXG4gICAgLmRpcmVjdGl2ZShcImN0dlNlcnZpY2VsYnBvcnRzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgIHJldHVybiB7XG4gICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgaXRlbXM6ICc9J1xuICAgICAgICAgICB9LFxuICAgICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSkge1xuICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgKiBDb21wYXJlIGlmIHR3byBpdGVtcyBoYXZlIHNhbWUgcG9ydHMgYW5kIHByb3RvY29sc1xuICAgICAgICAgICAgICAgICogQHBhcmFtIHZhbDFcbiAgICAgICAgICAgICAgICAqIEBwYXJhbSB2YWwyXG4gICAgICAgICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgZnVuY3Rpb24gY29tcGFyZSh2YWwxLCB2YWwyKSB7XG4gICAgICAgICAgICAgICAgICAgcmV0dXJuICh2YWwxID09PSB2YWwyKTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVzZXROZXdJdGVtKCkge1xuICAgICAgICAgICAgICAgICAgIHNjb3BlLm5ld0l0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VQb3J0OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJQb3J0OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgcHJvdG9jb2w6ICcnXG4gICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgZnVuY3Rpb24gaXNFbXB0eUl0ZW0oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgIHJldHVybiAoaXRlbS5zZXJ2aWNlUG9ydCA9PT0gJycgJiYgaXRlbS5wcm92aWRlclBvcnQgPT09ICcnICYmIGl0ZW0ucHJvdG9jb2wgPT09ICcnKTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgc2NvcGUuYWRkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgaWYgKGlzRW1wdHlJdGVtKHNjb3BlLm5ld0l0ZW0pKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgaWYgKHNjb3BlLml0ZW1zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuaXRlbXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgdmFyIG5ld0l0ZW1TdHIgPSBzY29wZS5uZXdJdGVtLnNlcnZpY2VQb3J0ICsgJzonXG4gICAgICAgICAgICAgICAgICAgICAgICsgc2NvcGUubmV3SXRlbS5wcm92aWRlclBvcnQgKyAnOidcbiAgICAgICAgICAgICAgICAgICAgICAgKyBzY29wZS5uZXdJdGVtLnByb3RvY29sO1xuICAgICAgICAgICAgICAgICAgIC8vUmVtb3ZlcyBleGlzdGluZyBpdGVtIHdpdGggdGhlIHNhbWUgdmFsdWUgZmlyc3QgaWYgaXQgZXhpc3RzLlxuICAgICAgICAgICAgICAgICAgIF8ucHVsbEFsbFdpdGgoc2NvcGUuaXRlbXMsIFtuZXdJdGVtU3RyXSwgY29tcGFyZSk7XG4gICAgICAgICAgICAgICAgICAgc2NvcGUuaXRlbXMucHVzaChuZXdJdGVtU3RyKTtcbiAgICAgICAgICAgICAgICAgICByZXNldE5ld0l0ZW0oKTtcbiAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgIHNjb3BlLnJlbW92ZSA9IGZ1bmN0aW9uKHBhc3NlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICBfLnJlbW92ZShzY29wZS5pdGVtcywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmUoaXRlbSwgcGFzc2VkSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgcmVzZXROZXdJdGVtKCk7XG4gICAgICAgICAgIH0sXG4gICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2VydmljZV9sYnMvc2VydmljZWxicG9ydHMuaHRtbCdcbiAgICAgICB9XG4gICAgfSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2LnNldHRpbmdzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc2V0dGluZ3MuZGV0YWlscy5jbHVzdGVyJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9jbHVzdGVyJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnQ2x1c3RlclNldHRpbmdDdHJsIGFzIGNsdXN0ZXJTZXR0aW5nQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzZXR0aW5ncy9jbHVzdGVyc2V0dGluZ3MuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignQ2x1c3RlclNldHRpbmdDdHJsJywgW1xuICAgICAgICAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdDUlVESGVscGVyU2VydmljZScsICdOb2Rlc1NlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsIENSVURIZWxwZXJTZXJ2aWNlLCBOb2Rlc1NlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBjbHVzdGVyU2V0dGluZ0N0cmwgPSB0aGlzO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVDbHVzdGVyU2V0dGluZ3MoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNsdXN0ZXJTZXR0aW5nQ3RybC5mb3JtLiR2YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IoY2x1c3RlclNldHRpbmdDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIoY2x1c3RlclNldHRpbmdDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgY2x1c3RlclNldHRpbmdDdHJsLm5vZGVPcHNPYmoubm9kZXMgPSBbJHN0YXRlUGFyYW1zLmtleV07XG4gICAgICAgICAgICAgICAgICAgIE5vZGVzU2VydmljZS5jbGVhbnVwRXh0cmFWYXJzKGNsdXN0ZXJTZXR0aW5nQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIE5vZGVzU2VydmljZS5jcmVhdGVFeHRyYVZhcnMoY2x1c3RlclNldHRpbmdDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgTm9kZXNTZXJ2aWNlLnVwZGF0ZVNldHRpbmdzKGNsdXN0ZXJTZXR0aW5nQ3RybC5ub2RlT3BzT2JqKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoY2x1c3RlclNldHRpbmdDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoY2x1c3RlclNldHRpbmdDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihjbHVzdGVyU2V0dGluZ0N0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2x1c3RlclNldHRpbmdDdHJsLm5vZGVPcHNPYmogPSB7fTtcbiAgICAgICAgICAgIGNsdXN0ZXJTZXR0aW5nQ3RybC5leHRyYV92YXJzID0ge307IC8vVE9ETyBJbnRpYWxpemUgZnJvbSBnbG9iYWwgc2V0dGluZ3NcbiAgICAgICAgICAgIGNsdXN0ZXJTZXR0aW5nQ3RybC5hbnNpYmxlVmFyaWFibGVzID0gW107XG4gICAgICAgICAgICBjbHVzdGVyU2V0dGluZ0N0cmwuZW52VmFyaWFibGVzID0gW107XG5cbiAgICAgICAgICAgIE5vZGVzU2VydmljZS5nZXRTZXR0aW5ncyhjbHVzdGVyU2V0dGluZ0N0cmwpO1xuXG4gICAgICAgICAgICBjbHVzdGVyU2V0dGluZ0N0cmwudXBkYXRlQ2x1c3RlclNldHRpbmdzID0gdXBkYXRlQ2x1c3RlclNldHRpbmdzO1xuXG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGNsdXN0ZXJTZXR0aW5nQ3RybCk7XG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IoY2x1c3RlclNldHRpbmdDdHJsKTtcbiAgICAgICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA2LzEvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuc3RvcmFnZXBvbGljaWVzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc3RvcmFnZXBvbGljaWVzLmNyZWF0ZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvY3JlYXRlJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3N0b3JhZ2VfcG9saWNpZXMvc3RvcmFnZXBvbGljeWNyZWF0ZS5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnU3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwgYXMgc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ1N0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsJywgWyckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ1N0b3JhZ2VQb2xpY2llc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBTdG9yYWdlUG9saWNpZXNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvU3RvcmFnZVBvbGljaWVzKCkge1xuICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUuc3RvcmFnZXBvbGljaWVzLmxpc3QnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY2FuY2VsQ3JlYXRpbmcoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVG9TdG9yYWdlUG9saWNpZXMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlRmlsZXN5c3RlbUNtZHMoKSB7XG4gICAgICAgICAgICAgICAgc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwuZmlsZXN5c3RlbWNtZHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybC5uZXdTdG9yYWdlUG9saWN5LmZpbGVzeXN0ZW1zW2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVQb2xpY3koKSB7XG4gICAgICAgICAgICAgICAgLy9mb3JtIGNvbnRyb2xsZXIgaXMgaW5qZWN0ZWQgYnkgdGhlIGh0bWwgdGVtcGxhdGVcbiAgICAgICAgICAgICAgICAvL2NoZWNraW5nIGlmIGFsbCB2YWxpZGF0aW9ucyBoYXZlIHBhc3NlZFxuICAgICAgICAgICAgICAgIGlmIChzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybC5mb3JtLiR2YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Ioc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUZpbGVzeXN0ZW1DbWRzKCk7XG4gICAgICAgICAgICAgICAgICAgIFN0b3JhZ2VQb2xpY2llc01vZGVsLmNyZWF0ZShzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybC5uZXdTdG9yYWdlUG9saWN5KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvU3RvcmFnZVBvbGljaWVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKHN0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybC5uZXdTdG9yYWdlUG9saWN5ID0ge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJiYWNrZW5kc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNydWRcIjogXCJjZXBoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1vdW50XCI6IFwiY2VwaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzbmFwc2hvdFwiOiBcImNlcGhcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInVubG9ja2VkXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBcImRyaXZlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInBvb2xcIjogXCJyYmRcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZpbGVzeXN0ZW1cIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInJ1bnRpbWVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzbmFwc2hvdHNcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic25hcHNob3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJlcXVlbmN5XCI6IFwiMzBtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrZWVwXCI6IDIwXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyYXRlLWxpbWl0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndyaXRlLWlvcHNcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlYWQtaW9wc1wiOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid3JpdGUtYnBzXCI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWFkLWJwc1wiOiAwIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcImZpbGVzeXN0ZW1zXCI6IHt9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwuY3JlYXRlUG9saWN5ID0gY3JlYXRlUG9saWN5O1xuICAgICAgICAgICAgc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwuY2FuY2VsQ3JlYXRpbmcgPSBjYW5jZWxDcmVhdGluZztcbiAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsLmZpbGVzeXN0ZW1jbWRzID0gW107XG5cbiAgICAgICAgICAgIHJlc2V0Rm9ybSgpO1xuICAgICAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMjcvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuc3RvcmFnZXBvbGljaWVzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc3RvcmFnZXBvbGljaWVzLmRldGFpbHMnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2RldGFpbHMvOmtleScsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1N0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCBhcyBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc3RvcmFnZV9wb2xpY2llcy9zdG9yYWdlcG9saWN5ZGV0YWlscy5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc3RvcmFnZXBvbGljaWVzLmVkaXQnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2RldGFpbHMvOmtleScsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1N0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCBhcyBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc3RvcmFnZV9wb2xpY2llcy9zdG9yYWdlcG9saWN5ZGV0YWlscy5odG1sJ1xuICAgICAgICAgICAgfSk7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ1N0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCcsXG4gICAgICAgIFsnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICckc2NvcGUnLCAnJGludGVydmFsJywgJyRmaWx0ZXInLCAnU3RvcmFnZVBvbGljaWVzTW9kZWwnLCAnVm9sdW1lc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uICgkc3RhdGUsICRzdGF0ZVBhcmFtcywgJHNjb3BlLCAkaW50ZXJ2YWwsICRmaWx0ZXIsIFN0b3JhZ2VQb2xpY2llc01vZGVsLCBWb2x1bWVzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLmZpbGVzeXN0ZW1jbWRzID0gW107XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBUbyBzaG93IGVkaXQgb3IgZGV0YWlscyBzY3JlZW4gYmFzZWQgb24gdGhlIHJvdXRlXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc2V0TW9kZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRzdGF0ZS5pcygnY29udGl2Lm1lbnUuc3RvcmFnZXBvbGljaWVzLmVkaXQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLm1vZGUgPSAnZWRpdCc7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwubW9kZSA9ICdkZXRhaWxzJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvUG9saWNpZXMoKSB7XG4gICAgICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUuc3RvcmFnZXBvbGljaWVzLmxpc3QnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub1BvbGljeURldGFpbHMoKSB7XG4gICAgICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUuc3RvcmFnZXBvbGljaWVzLmRldGFpbHMnLCB7J2tleSc6IHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5wb2xpY3kubmFtZX0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNhbmNlbEVkaXRpbmcoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblRvUG9saWN5RGV0YWlscygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRlbGV0ZVBvbGljeSgpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIFN0b3JhZ2VQb2xpY2llc01vZGVsLmRlbGV0ZVVzaW5nS2V5KHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5wb2xpY3kubmFtZSwgJ25hbWUnKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc3RvcmFnZVBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub1BvbGljaWVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc3RvcmFnZVBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3Ioc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogR2V0IHZvbHVtZXMgYmVsb25naW5nIHRvIGEgcG9saWN5XG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Vm9sdW1lcyhyZWxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgVm9sdW1lc01vZGVsLmdldChyZWxvYWQpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLnZvbHVtZXMgPSAkZmlsdGVyKCdvcmRlckJ5JykoXy5maWx0ZXIocmVzdWx0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BvbGljeSc6IHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5wb2xpY3kubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksICduYW1lJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGluaXRpYWxpemVGaWxlc3lzdGVtQ21kc0FycmF5KCkge1xuICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2goc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLnBvbGljeS5maWxlc3lzdGVtcywgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXNoKHtuYW1lOiBrZXksIHZhbHVlOiB2YWx1ZX0pO1xuICAgICAgICAgICAgICAgICAgICB9LCBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwuZmlsZXN5c3RlbWNtZHMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUZpbGVzeXN0ZW1DbWRzKCkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwuZmlsZXN5c3RlbWNtZHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLnBvbGljeS5maWxlc3lzdGVtc1tpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc2F2ZVBvbGljeSgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9mb3JtIGNvbnRyb2xsZXIgaXMgaW5qZWN0ZWQgYnkgdGhlIGh0bWwgdGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgLy9jaGVja2luZyBpZiBhbGwgdmFsaWRhdGlvbnMgaGF2ZSBwYXNzZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5mb3JtLiR2YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlRmlsZXN5c3RlbUNtZHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0b3JhZ2VQb2xpY2llc01vZGVsLnNhdmUoc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLnBvbGljeSkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvUG9saWN5RGV0YWlscygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwpO1xuXG4gICAgICAgICAgICAgICAgU3RvcmFnZVBvbGljaWVzTW9kZWwuZ2V0TW9kZWxCeUtleSgkc3RhdGVQYXJhbXMua2V5LCBmYWxzZSwgJ25hbWUnKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocG9saWN5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwucG9saWN5ID0gcG9saWN5O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbGl6ZUZpbGVzeXN0ZW1DbWRzQXJyYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZ2V0Vm9sdW1lcyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwuZGVsZXRlUG9saWN5ID0gZGVsZXRlUG9saWN5O1xuICAgICAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5zYXZlUG9saWN5ID0gc2F2ZVBvbGljeTtcbiAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwuY2FuY2VsRWRpdGluZyA9IGNhbmNlbEVkaXRpbmc7XG5cbiAgICAgICAgICAgICAgICBzZXRNb2RlKCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZTtcbiAgICAgICAgICAgICAgICAvL0Rvbid0IGRvIGF1dG9yZWZyZXNoIGlmIG9uZSBpcyBhbHJlYWR5IGluIHByb2dyZXNzXG4gICAgICAgICAgICAgICAgaWYgKCFhbmd1bGFyLmlzRGVmaW5lZChwcm9taXNlKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZ2V0Vm9sdW1lcyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgQ29udGl2R2xvYmFscy5SRUZSRVNIX0lOVEVSVkFMKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL3N0b3AgcG9sbGluZyB3aGVuIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgJHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICRpbnRlcnZhbC5jYW5jZWwocHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDYvMi8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoXCJjb250aXYuc3RvcmFnZXBvbGljaWVzXCIpXG4gICAgLmRpcmVjdGl2ZShcImN0dlN0b3JhZ2Vwb2xpY3liYXNpY3NldHRpbmdzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC5kaXJlY3RpdmUoXCJjdHZTdG9yYWdlcG9saWN5ZmlsZXN5c3RlbXNldHRpbmdzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgcG9saWN5OiAnPScsXG4gICAgICAgICAgICAgICAgZmlsZXN5c3RlbWNtZHM6ICc9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUuZmlsZXN5c3RlbXMgPSBbJ2V4dDQnLCAnYnRyZnMnXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3N0b3JhZ2VfcG9saWNpZXMvZmlsZXN5c3RlbXNldHRpbmdzLmh0bWwnXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC5kaXJlY3RpdmUoXCJjdHZTdG9yYWdlcG9saWN5c25hcHNob3RzZXR0aW5nc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgIHBvbGljeTogJz0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzdG9yYWdlX3BvbGljaWVzL3NuYXBzaG90c2V0dGluZ3MuaHRtbCdcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLmRpcmVjdGl2ZShcImN0dlN0b3JhZ2Vwb2xpY3lyd29wc3NldHRpbmdzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgcG9saWN5OiAnPSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3N0b3JhZ2VfcG9saWNpZXMvcndvcHNzZXR0aW5ncy5odG1sJ1xuICAgICAgICB9XG4gICAgfSlcbiAgICAuZGlyZWN0aXZlKFwiY3R2U3RvcmFnZXBvbGljeWJhY2tlbmRkcml2ZXJzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgcG9saWN5OiAnPSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3N0b3JhZ2VfcG9saWNpZXMvYmFja2VuZGRyaXZlcnMuaHRtbCdcbiAgICAgICAgfVxuICAgIH0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA0LzE4LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnN0b3JhZ2Vwb2xpY2llcycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnN0b3JhZ2Vwb2xpY2llcy5saXN0Jywge1xuICAgICAgICAgICAgICAgIHVybDogJy9saXN0JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnU3RvcmFnZVBvbGljeUxpc3RDdHJsIGFzIHN0b3JhZ2VQb2xpY3lMaXN0Q3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzdG9yYWdlX3BvbGljaWVzL3N0b3JhZ2Vwb2xpY3lsaXN0Lmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ1N0b3JhZ2VQb2xpY3lMaXN0Q3RybCcsIFsnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckZmlsdGVyJywgJ1N0b3JhZ2VQb2xpY2llc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzY29wZSwgJGludGVydmFsLCAkZmlsdGVyLCBTdG9yYWdlUG9saWNpZXNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBzdG9yYWdlUG9saWN5TGlzdEN0cmwgPSB0aGlzO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRQb2xpY2llcyhyZWxvYWQpIHtcbiAgICAgICAgICAgICAgICBTdG9yYWdlUG9saWNpZXNNb2RlbC5nZXQocmVsb2FkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHN0b3JhZ2VQb2xpY3lMaXN0Q3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5TGlzdEN0cmwucG9saWNpZXMgPSAkZmlsdGVyKCdvcmRlckJ5JykocmVzdWx0LCAnbmFtZScpO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzdG9yYWdlUG9saWN5TGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9Mb2FkIGZyb20gY2FjaGUgZm9yIHF1aWNrIGRpc3BsYXkgaW5pdGlhbGx5XG4gICAgICAgICAgICBnZXRQb2xpY2llcyhmYWxzZSk7XG5cbiAgICAgICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICAgICAgLy9Eb24ndCBkbyBhdXRvLXJlZnJlc2ggaWYgb25lIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQocHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0UG9saWNpZXModHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSwgQ29udGl2R2xvYmFscy5SRUZSRVNIX0lOVEVSVkFMKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vc3RvcCBwb2xsaW5nIHdoZW4gdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcbiAgICAgICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRpbnRlcnZhbC5jYW5jZWwocHJvbWlzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfV0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNi8zLzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnZvbHVtZXMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS52b2x1bWVzLmNyZWF0ZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvY3JlYXRlJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZvbHVtZXMvdm9sdW1lY3JlYXRlLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdWb2x1bWVDcmVhdGVDdHJsIGFzIHZvbHVtZUNyZWF0ZUN0cmwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ1ZvbHVtZUNyZWF0ZUN0cmwnLCBbJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnVm9sdW1lc01vZGVsJywgJ1N0b3JhZ2VQb2xpY2llc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBWb2x1bWVzTW9kZWwsIFN0b3JhZ2VQb2xpY2llc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIHZvbHVtZUNyZWF0ZUN0cmwgPSB0aGlzO1xuICAgICAgICAgICAgdm9sdW1lQ3JlYXRlQ3RybC5maWxlc3lzdGVtcyA9IFsnZXh0NCcsICdidHJmcyddO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub1ZvbHVtZXNNb2RlbCgpIHtcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51LnZvbHVtZXMubGlzdCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjYW5jZWxDcmVhdGluZygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5Ub1ZvbHVtZXNNb2RlbCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdldCBzdG9yYWdlIHBvbGljaWVzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRTdG9yYWdlUG9saWNpZXMoKSB7XG4gICAgICAgICAgICAgICAgU3RvcmFnZVBvbGljaWVzTW9kZWwuZ2V0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZUNyZWF0ZUN0cmwucG9saWNpZXMgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGFwcGx5UG9saWN5U2V0dGluZ3MoKSB7XG4gICAgICAgICAgICAgICAgdm9sdW1lQ3JlYXRlQ3RybC5uZXdWb2x1bWUucG9saWN5ID0gdm9sdW1lQ3JlYXRlQ3RybC5zZWxlY3RlZFBvbGljeS5uYW1lO1xuICAgICAgICAgICAgICAgIHZvbHVtZUNyZWF0ZUN0cmwubmV3Vm9sdW1lLmJhY2tlbmRzID0gdm9sdW1lQ3JlYXRlQ3RybC5zZWxlY3RlZFBvbGljeS5iYWNrZW5kcztcbiAgICAgICAgICAgICAgICB2b2x1bWVDcmVhdGVDdHJsLm5ld1ZvbHVtZS5kcml2ZXIgPSB2b2x1bWVDcmVhdGVDdHJsLnNlbGVjdGVkUG9saWN5LmRyaXZlcjtcbiAgICAgICAgICAgICAgICB2b2x1bWVDcmVhdGVDdHJsLm5ld1ZvbHVtZS5jcmVhdGUgPSB2b2x1bWVDcmVhdGVDdHJsLnNlbGVjdGVkUG9saWN5LmNyZWF0ZTtcbiAgICAgICAgICAgICAgICB2b2x1bWVDcmVhdGVDdHJsLm5ld1ZvbHVtZS5ydW50aW1lID0gdm9sdW1lQ3JlYXRlQ3RybC5zZWxlY3RlZFBvbGljeS5ydW50aW1lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVWb2x1bWUoKSB7XG4gICAgICAgICAgICAgICAgLy9mb3JtIGNvbnRyb2xsZXIgaXMgaW5qZWN0ZWQgYnkgdGhlIGh0bWwgdGVtcGxhdGVcbiAgICAgICAgICAgICAgICAvL2NoZWNraW5nIGlmIGFsbCB2YWxpZGF0aW9ucyBoYXZlIHBhc3NlZFxuICAgICAgICAgICAgICAgIGlmICh2b2x1bWVDcmVhdGVDdHJsLmZvcm0uJHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcih2b2x1bWVDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIodm9sdW1lQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIGFwcGx5UG9saWN5U2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgVm9sdW1lc01vZGVsLmNyZWF0ZSh2b2x1bWVDcmVhdGVDdHJsLm5ld1ZvbHVtZSkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHZvbHVtZUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9Wb2x1bWVzTW9kZWwoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIodm9sdW1lQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3Iodm9sdW1lQ3JlYXRlQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHZvbHVtZUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcih2b2x1bWVDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICB2b2x1bWVDcmVhdGVDdHJsLm5ld1ZvbHVtZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYmFja2VuZHNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgIFwiZHJpdmVyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZVwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgXCJydW50aW1lXCI6IHt9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdm9sdW1lQ3JlYXRlQ3RybC5jcmVhdGVWb2x1bWUgPSBjcmVhdGVWb2x1bWU7XG4gICAgICAgICAgICB2b2x1bWVDcmVhdGVDdHJsLmNhbmNlbENyZWF0aW5nID0gY2FuY2VsQ3JlYXRpbmc7XG5cbiAgICAgICAgICAgIGdldFN0b3JhZ2VQb2xpY2llcygpO1xuXG4gICAgICAgICAgICByZXNldEZvcm0oKTtcbiAgICAgICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA0LzE1LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnZvbHVtZXMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS52b2x1bWVzLmRldGFpbHMnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2RldGFpbHMvOmtleScsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1ZvbHVtZURldGFpbHNDdHJsIGFzIHZvbHVtZURldGFpbHNDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZvbHVtZXMvdm9sdW1lZGV0YWlscy5odG1sJ1xuICAgICAgICAgICAgfSk7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ1ZvbHVtZURldGFpbHNDdHJsJyxcbiAgICAgICAgWyckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJGh0dHAnLCAnVm9sdW1lc01vZGVsJywgJ1ZvbHVtZVNlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsICRzY29wZSwgJGludGVydmFsLCAkaHR0cCwgVm9sdW1lc01vZGVsLCBWb2x1bWVTZXJ2aWNlKSB7XG4gICAgICAgICAgICB2YXIgdm9sdW1lRGV0YWlsc0N0cmwgPSB0aGlzO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub1ZvbHVtZXMoKSB7XG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS52b2x1bWVzLmxpc3QnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRlbGV0ZVZvbHVtZSgpIHtcbiAgICAgICAgICAgICAgICBWb2x1bWVzTW9kZWwuZGVsZXRlKHZvbHVtZURldGFpbHNDdHJsLnZvbHVtZSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblRvVm9sdW1lcygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRWb2x1bWVJbmZvKHJlbG9hZCkge1xuICAgICAgICAgICAgICAgIHZhciB0b2tlbnMgPSAkc3RhdGVQYXJhbXMua2V5LnNwbGl0KCcvJyk7XG4gICAgICAgICAgICAgICAgdmFyIG1vZGVsID17fTtcbiAgICAgICAgICAgICAgICBtb2RlbC5wb2xpY3kgPSB0b2tlbnNbMF07XG4gICAgICAgICAgICAgICAgbW9kZWwubmFtZSA9IHRva2Vuc1sxXTtcbiAgICAgICAgICAgICAgICBWb2x1bWVzTW9kZWwuZ2V0TW9kZWwobW9kZWwsIHJlbG9hZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHZvbHVtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm9sdW1lRGV0YWlsc0N0cmwudm9sdW1lID0gdm9sdW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Vm9sdW1lVXNlSW5mbygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Vm9sdW1lU25hcHNob3RzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRWb2x1bWVVc2VJbmZvKCkge1xuICAgICAgICAgICAgICAgIFZvbHVtZVNlcnZpY2UuZ2V0Vm9sdW1lVXNlSW5mbyh2b2x1bWVEZXRhaWxzQ3RybC52b2x1bWUpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICB2b2x1bWVEZXRhaWxzQ3RybC52b2x1bWVVc2UgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9SZXR1cm5zIGVycm9yIGlmIHZvbHVtZSBpcyBub3QgbW91bnRlZCBieSBhbnkgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFZvbHVtZVNuYXBzaG90cygpIHtcbiAgICAgICAgICAgICAgICBWb2x1bWVTZXJ2aWNlLmdldFZvbHVtZVNuYXBzaG90cyh2b2x1bWVEZXRhaWxzQ3RybC52b2x1bWUpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICB2b2x1bWVEZXRhaWxzQ3RybC5zbmFwc2hvdHMgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjb3B5U25hcHNob3Qoc25hcHNob3QsIG5ld1ZvbHVtZSkge1xuICAgICAgICAgICAgICAgIFZvbHVtZXNNb2RlbC5jb3B5KG1vZGVsLCBzbmFwc2hvdCwgbmV3Vm9sdW1lKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcblxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2b2x1bWVEZXRhaWxzQ3RybC5kZWxldGVWb2x1bWUgPSBkZWxldGVWb2x1bWU7XG4gICAgICAgICAgICB2b2x1bWVEZXRhaWxzQ3RybC5jb3B5U25hcHNob3QgPSBjb3B5U25hcHNob3Q7XG5cbiAgICAgICAgICAgIC8vTG9hZCBmcm9tIGNhY2hlIGZvciBxdWljayBkaXNwbGF5IGluaXRpYWxseVxuICAgICAgICAgICAgZ2V0Vm9sdW1lSW5mbyhmYWxzZSk7XG5cbiAgICAgICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICAgICAgLy9Eb24ndCBkbyBhdXRvLXJlZnJlc2ggaWYgb25lIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQocHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0Vm9sdW1lSW5mbyh0cnVlKTtcbiAgICAgICAgICAgICAgICB9LCBDb250aXZHbG9iYWxzLlJFRlJFU0hfSU5URVJWQUwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9zdG9wIHBvbGxpbmcgd2hlbiB1c2VyIG1vdmVzIGF3YXkgZnJvbSB0aGUgcGFnZVxuICAgICAgICAgICAgJHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJGludGVydmFsLmNhbmNlbChwcm9taXNlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1dKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMjIvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYudm9sdW1lcycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnZvbHVtZXMubGlzdCcsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvbGlzdCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1ZvbHVtZUxpc3RDdHJsIGFzIHZvbHVtZUxpc3RDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZvbHVtZXMvdm9sdW1lbGlzdC5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdWb2x1bWVMaXN0Q3RybCcsIFsnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckZmlsdGVyJywgJ1ZvbHVtZXNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICRpbnRlcnZhbCwgJGZpbHRlciwgVm9sdW1lc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIHZvbHVtZUxpc3RDdHJsID0gdGhpcztcblxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Vm9sdW1lcyhyZWxvYWQpIHtcbiAgICAgICAgICAgICAgICBWb2x1bWVzTW9kZWwuZ2V0KHJlbG9hZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcih2b2x1bWVMaXN0Q3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2b2x1bWVMaXN0Q3RybC52b2x1bWVzID0gJGZpbHRlcignb3JkZXJCeScpKHJlc3VsdCwgJ25hbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIodm9sdW1lTGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9Mb2FkIGZyb20gY2FjaGUgZm9yIHF1aWNrIGRpc3BsYXkgaW5pdGlhbGx5XG4gICAgICAgICAgICBnZXRWb2x1bWVzKGZhbHNlKTtcblxuICAgICAgICAgICAgdmFyIHByb21pc2U7XG4gICAgICAgICAgICAvL0Rvbid0IGRvIGF1dG8tcmVmcmVzaCBpZiBvbmUgaXMgYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKCFhbmd1bGFyLmlzRGVmaW5lZChwcm9taXNlKSkge1xuICAgICAgICAgICAgICAgIHByb21pc2UgPSAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBnZXRWb2x1bWVzKHRydWUpO1xuICAgICAgICAgICAgICAgIH0sIENvbnRpdkdsb2JhbHMuUkVGUkVTSF9JTlRFUlZBTCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL3N0b3AgcG9sbGluZyB3aGVuIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXG4gICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHByb21pc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNi81LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnZvbHVtZXMnKVxuICAgIC5mYWN0b3J5KCdWb2x1bWVTZXJ2aWNlJywgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcbiAgICAgICAgZnVuY3Rpb24gZ2V0Vm9sdW1lVXNlSW5mbyh2b2x1bWUpIHtcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICAgICB2YXIgdXJsID0gQ29udGl2R2xvYmFscy5WT0xVTUVTX1VTRVNfRU5EUE9JTlRcbiAgICAgICAgICAgICAgICArIHZvbHVtZS5wb2xpY3lcbiAgICAgICAgICAgICAgICArICcvJyArIHZvbHVtZS5uYW1lO1xuICAgICAgICAgICAgJGh0dHAuZ2V0KHVybCkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIC8vUmV0dXJucyBlcnJvciBpZiB2b2x1bWUgaXMgbm90IG1vdW50ZWQgYnkgYW55IGNvbnRhaW5lclxuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0Vm9sdW1lU25hcHNob3RzKHZvbHVtZSkge1xuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICAgICAgIHZhciB1cmwgPSBDb250aXZHbG9iYWxzLlZPTFVNRVNfU05BUFNIT1RTX0VORFBPSU5UXG4gICAgICAgICAgICAgICAgKyB2b2x1bWUucG9saWN5XG4gICAgICAgICAgICAgICAgKyAnLycgKyB2b2x1bWUubmFtZTtcbiAgICAgICAgICAgICRodHRwLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXRWb2x1bWVVc2VJbmZvOiBnZXRWb2x1bWVVc2VJbmZvLFxuICAgICAgICAgICAgZ2V0Vm9sdW1lU25hcHNob3RzOiBnZXRWb2x1bWVTbmFwc2hvdHNcbiAgICAgICAgfVxuICAgIH1dKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDYvMi8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoXCJjb250aXYuZGlyZWN0aXZlc1wiKVxuICAgIC5kaXJlY3RpdmUoXCJjdHZDb2xsYXBzaWJsZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0AnLFxuICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogJ0AnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSkge1xuICAgICAgICAgICAgICAgIGlmIChzY29wZS5jb2xsYXBzZWQgPT09IHVuZGVmaW5lZCkgc2NvcGUuY29sbGFwc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvZGlyZWN0aXZlcy9jb2xsYXBzaWJsZS5odG1sJ1xuICAgICAgICB9XG4gICAgfSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDQvMjgvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKFwiY29udGl2LmRpcmVjdGl2ZXNcIilcbiAgICAuZGlyZWN0aXZlKFwiY3R2RXJyb3JcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyOiAnQCcsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICc9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cikge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuZmluZCgnaScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKCduZy1oaWRlJyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvZGlyZWN0aXZlcy9lcnJvcm1lc3NhZ2UuaHRtbCdcbiAgICAgICAgfVxuICAgIH0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzExLzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZShcImNvbnRpdi5kaXJlY3RpdmVzXCIpXG4gICAgLmRpcmVjdGl2ZShcImN0dk5hbWV2YWx1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICByZXR1cm4ge1xuICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgaXRlbXM6ICc9JyxcbiAgICAgICAgICAgICAgIG5hbWVoZWFkZXI6ICdAJywvL0ZpZWxkIG5hbWUgdG8gZGlzcGxheSBmb3Iga2V5XG4gICAgICAgICAgICAgICB2YWx1ZWhlYWRlcjogJ0AnLC8vRmllbGQgbmFtZSB0byBkaXNwbGF5IGZvciB2YWx1ZVxuICAgICAgICAgICAgICAgdHlwZTogJ0AnLC8vJ3RleHQnIG9yICdzZWxlY3QnIHRvIGNob29zZSBpbnB1dCBvciBzZWxlY3QgaHRtbCB0YWcgZm9yIGtleVxuICAgICAgICAgICAgICAgb3B0aW9uczogJz0nLy9UbyBiZSB1c2VkIHdoZW4gdHlwZSBpcyAnc2VsZWN0J1xuICAgICAgICAgICB9LFxuICAgICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSkge1xuICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgKiBDb21wYXJlIGlmIHR3byBpdGVtcyBoYXZlIHNhbWUgbmFtZVxuICAgICAgICAgICAgICAgICogQHBhcmFtIHZhbDFcbiAgICAgICAgICAgICAgICAqIEBwYXJhbSB2YWwyXG4gICAgICAgICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgZnVuY3Rpb24gY29tcGFyZSh2YWwxLCB2YWwyKSB7XG4gICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbDEubmFtZSA9PSB2YWwyLm5hbWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlc2V0TmV3SXRlbSgpIHtcbiAgICAgICAgICAgICAgICAgICBzY29wZS5uZXdJdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgZnVuY3Rpb24gaXNFbXB0eUl0ZW0oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgIHJldHVybiAoaXRlbS5uYW1lID09PSAnJyAmJiBpdGVtLnZhbHVlID09PSAnJyk7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIHNjb3BlLmFkZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgIGlmIChpc0VtcHR5SXRlbShzY29wZS5uZXdJdGVtKSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgIGlmIChzY29wZS5pdGVtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuaXRlbSA9IFtdO1xuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAvL1JlbW92ZXMgZXhpc3RpbmcgaXRlbSB3aXRoIHRoZSBzYW1lIG5hbWUgZmlyc3QgaWYgaXQgZXhpc3RzLlxuICAgICAgICAgICAgICAgICAgIF8ucHVsbEFsbFdpdGgoc2NvcGUuaXRlbXMsIFtzY29wZS5uZXdJdGVtXSwgY29tcGFyZSk7XG4gICAgICAgICAgICAgICAgICAgc2NvcGUuaXRlbXMucHVzaChzY29wZS5uZXdJdGVtKTtcbiAgICAgICAgICAgICAgICAgICByZXNldE5ld0l0ZW0oKTtcbiAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgIHNjb3BlLnJlbW92ZSA9IGZ1bmN0aW9uKHBhc3NlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICBfLnJlbW92ZShzY29wZS5pdGVtcywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ubmFtZSA9PSBwYXNzZWRJdGVtLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgcmVzZXROZXdJdGVtKCk7XG5cbiAgICAgICAgICAgICAgIGlmIChzY29wZS5uYW1laGVhZGVyID09PSB1bmRlZmluZWQpIHNjb3BlLm5hbWVoZWFkZXIgPSAnTmFtZSc7XG4gICAgICAgICAgICAgICBpZiAoc2NvcGUudmFsdWVoZWFkZXIgPT09IHVuZGVmaW5lZCkgc2NvcGUudmFsdWVoZWFkZXIgPSAnVmFsdWUnO1xuICAgICAgICAgICAgICAgaWYgKHNjb3BlLnR5cGUgPT09IHVuZGVmaW5lZCkgc2NvcGUudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgfSxcbiAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2RpcmVjdGl2ZXMvbmFtZXZhbHVlLmh0bWwnXG4gICAgICAgfVxuICAgIH0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzQvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKFwiY29udGl2LmRpcmVjdGl2ZXNcIilcbiAgICAuZGlyZWN0aXZlKFwiY3R2VGFibGVcIiwgWydmaWx0ZXJGaWx0ZXInLCAnbGltaXRUb0ZpbHRlcicsIGZ1bmN0aW9uIChmaWx0ZXJGaWx0ZXIsIGxpbWl0VG9GaWx0ZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogJz0nLFxuICAgICAgICAgICAgICAgIGZpbHRlcmVkaXRlbXM6ICc9JyxcbiAgICAgICAgICAgICAgICBzaXplOiAnQCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250cm9sbGVyOiBbJyRzY29wZScsICckZWxlbWVudCcsICckYXR0cnMnLCBmdW5jdGlvbiAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhYmxlQ3RybCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGFibGVDdHJsLmNodW5rcyA9IFtdO1xuICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5wYWdlTm8gPSAwO1xuXG4gICAgICAgICAgICAgICAgdGFibGVDdHJsLnNpemUgPSBwYXJzZUludCgkc2NvcGUuc2l6ZSwgMTApO1xuICAgICAgICAgICAgICAgIGlmIChpc05hTih0YWJsZUN0cmwuc2l6ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFibGVDdHJsLnNpemUgPSAxMjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBBbHdheXMgY2FsbCBzaG93Q2h1bmsgd2l0aCBib3RoIHBhcmFtZXRlcnMuXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHBhZ2VOb1xuICAgICAgICAgICAgICAgICAqIEBwYXJhbSBzZWFyY2hUZXh0XG4gICAgICAgICAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc2hvd0NodW5rKHBhZ2VObywgc2VhcmNoVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB0YWJsZUN0cmwuc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhZ2VObyA9PT0gdW5kZWZpbmVkIHx8IHBhZ2VObyA8IDApIHBhZ2VObyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5wYWdlTm8gPSBwYWdlTm87XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5pdGVtcyAhPT0gdW5kZWZpbmVkKSB7Ly9UT0RPOiBDaGVjayB3aHkgaXRlbXMgYXJlIHVuZGVmaW5lZCBkdXJpbmcgaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWFyY2hUZXh0RmlsdGVyZWRJdGVtcyA9IGZpbHRlckZpbHRlcigkc2NvcGUuaXRlbXMsIHRhYmxlQ3RybC5zZWFyY2hUZXh0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vT2ZDaHVua3MgPSBNYXRoLmNlaWwoc2VhcmNoVGV4dEZpbHRlcmVkSXRlbXMubGVuZ3RoIC8gdGFibGVDdHJsLnNpemUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vT2ZDaHVua3MgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vT2ZDaHVua3MgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDdHJsLmNodW5rcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub09mQ2h1bmtzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUN0cmwuY2h1bmtzLnB1c2goe3NlbGVjdGVkOiBmYWxzZSwgcGFnZU5vOiBpfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vQWZ0ZXIgZmlsdGVyaW5nIG51bWJlciBvZiBjaHVua3MgY291bGQgY2hhbmdlIHNvIHJlc2V0IHBhZ2Ugbm8gaWYgaXQgaXMgZ3JlYXRlciB0aGFuIG5vIG9mIGNodW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhZ2VObyA+PSB0YWJsZUN0cmwuY2h1bmtzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5wYWdlTm8gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUN0cmwuY2h1bmtzW3RhYmxlQ3RybC5wYWdlTm9dLnNlbGVjdGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9VcGRhdGUgbnVtYmVyIG9mIGNodW5rcyBmb3IgcGFnaW5hdGlvbiBtZW51XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFibGVDdHJsLmNodW5rcy5sZW5ndGggPiA1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWNlU3RhcnQsIHNsaWNlRW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlU3RhcnQgPSB0YWJsZUN0cmwucGFnZU5vIC0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGljZUVuZCA9IHRhYmxlQ3RybC5wYWdlTm8gKyAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzbGljZVN0YXJ0IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGljZUVuZCA9IHNsaWNlRW5kIC0gc2xpY2VTdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2VTdGFydCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzbGljZUVuZCA+IHRhYmxlQ3RybC5jaHVua3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlU3RhcnQgPSBzbGljZVN0YXJ0IC0gKHNsaWNlRW5kIC0gdGFibGVDdHJsLmNodW5rcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGljZUVuZCA9IHRhYmxlQ3RybC5jaHVua3MubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUucGFnaW5hdGlvbk1lbnUuY2h1bmtzID0gdGFibGVDdHJsLmNodW5rcy5zbGljZShzbGljZVN0YXJ0LCBzbGljZUVuZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5wYWdpbmF0aW9uTWVudS5jaHVua3MgPSB0YWJsZUN0cmwuY2h1bmtzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUN0cmwuZmlsdGVyZWRJdGVtcyA9IGxpbWl0VG9GaWx0ZXIoc2VhcmNoVGV4dEZpbHRlcmVkSXRlbXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDdHJsLnNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDdHJsLnBhZ2VObyAqIHRhYmxlQ3RybC5zaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5maWx0ZXJlZGl0ZW1zID0gdGFibGVDdHJsLmZpbHRlcmVkSXRlbXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzaG93UHJldkNodW5rKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldkNodW5rO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFibGVDdHJsLnBhZ2VObyA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2Q2h1bmsgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldkNodW5rID0gdGFibGVDdHJsLnBhZ2VObyAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNob3dDaHVuayhwcmV2Q2h1bmspO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNob3dOZXh0Q2h1bmsoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXh0Q2h1bms7XG4gICAgICAgICAgICAgICAgICAgIG5leHRDaHVuayA9IHRhYmxlQ3RybC5wYWdlTm8gKyAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dENodW5rID4gdGFibGVDdHJsLmNodW5rcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0Q2h1bmsgPSB0YWJsZUN0cmwuY2h1bmtzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNob3dDaHVuayhuZXh0Q2h1bmspO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFNhdmUgcGFnaW5hdGlvbiBzY29wZSB0byBwcm92aWRlIGNodW5rIGluZm9ybWF0aW9uIHRvIHBhZ2luYXRpb24gbWVudS5cbiAgICAgICAgICAgICAgICAgKiBAcGFyYW0gbWVudVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGFkZFBhZ2luYXRpb25NZW51KG1lbnUpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnBhZ2luYXRpb25NZW51ID0gbWVudTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0YWJsZUN0cmwuc2hvd0NodW5rID0gc2hvd0NodW5rO1xuICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5zaG93TmV4dENodW5rID0gc2hvd05leHRDaHVuaztcbiAgICAgICAgICAgICAgICB0YWJsZUN0cmwuc2hvd1ByZXZDaHVuayA9IHNob3dQcmV2Q2h1bms7XG4gICAgICAgICAgICAgICAgdGFibGVDdHJsLmFkZFBhZ2luYXRpb25NZW51ID0gYWRkUGFnaW5hdGlvbk1lbnU7XG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMsIHRhYmxlQ3RybCkge1xuICAgICAgICAgICAgICAgIC8vV2F0Y2ggZm9yIGl0ZW1zIGFzIHRoZXkgd2lsbCBiZSBhdXRvIHJlZnJlc2hlZFxuICAgICAgICAgICAgICAgIHNjb3BlLiRwYXJlbnQuJHdhdGNoKGF0dHJzLml0ZW1zLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5zaG93Q2h1bmsodGFibGVDdHJsLnBhZ2VObywgdGFibGVDdHJsLnNlYXJjaFRleHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2RpcmVjdGl2ZXMvdGFibGUuaHRtbCdcbiAgICAgICAgfVxuICAgIH1dKVxuICAgIC5kaXJlY3RpdmUoXCJjdHZUaGVhZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJzx0aGVhZCBuZy10cmFuc2NsdWRlPjwvdGhlYWQ+J1xuICAgICAgICB9XG4gICAgfSlcbiAgICAuZGlyZWN0aXZlKFwiY3R2VGhcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgICBjbGFzczogJ0AnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGU6ICc8dGggbmctY2xhc3M9XCJjbGFzc1wiIG5nLXRyYW5zY2x1ZGU+PC90aD4nXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC5kaXJlY3RpdmUoXCJjdHZUYm9keVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgc2NvcGU6IHt9LFxuICAgICAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJzx0Ym9keSBuZy10cmFuc2NsdWRlPjwvdGJvZHk+J1xuICAgICAgICB9XG4gICAgfSlcbiAgICAuZGlyZWN0aXZlKFwiY3R2VGZvb3RcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHNjb3BlOiB7fSxcbiAgICAgICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICc8dGZvb3QgbmctdHJhbnNjbHVkZT48L3Rmb290PidcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLmRpcmVjdGl2ZShcImN0dlRzZWFyY2hcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHJlcXVpcmU6ICdeXmN0dlRhYmxlJyxcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdAJyxcbiAgICAgICAgICAgICAgICBzaXplOiAnQCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHIsIHRhYmxlQ3RybCkge1xuICAgICAgICAgICAgICAgIHNjb3BlLnNob3dDaHVuayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFibGVDdHJsLnNob3dDaHVuayh0YWJsZUN0cmwucGFnZU5vLCBzY29wZS5zZWFyY2hUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2RpcmVjdGl2ZXMvc2VhcmNoaW5wdXQuaHRtbCdcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLmRpcmVjdGl2ZShcImN0dlRyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICB0cmFuc2NsdWRlOiAndHJ1ZScsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgc2NvcGU6IHt9LFxuICAgICAgICAgICAgdGVtcGxhdGU6ICc8dHIgbmctdHJhbnNjbHVkZT48L3RyPidcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLmRpcmVjdGl2ZShcImN0dlRkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIHNjb3BlOiB0cnVlLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICc8dGQgbmctdHJhbnNjbHVkZT48L3RkPidcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLmRpcmVjdGl2ZShcImN0dlRwYWdpbmF0aW9uXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICByZXF1aXJlOiAnXl5jdHZUYWJsZScsXG4gICAgICAgICAgICBzY29wZToge30sXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHIsIHRhYmxlQ3RybCkge1xuICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5hZGRQYWdpbmF0aW9uTWVudShzY29wZSk7XG4gICAgICAgICAgICAgICAgLy9zaG93Q2h1bmsoKSB3aWxsIGNhbGN1bGF0ZSBhbmQgc2V0IGNodW5rcyBpbiBzY29wZVxuICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5zaG93Q2h1bmsodGFibGVDdHJsLnBhZ2VObywgdGFibGVDdHJsLnNlYXJjaFRleHQpO1xuICAgICAgICAgICAgICAgIHNjb3BlLnNob3dDaHVuayA9IGZ1bmN0aW9uIChwYWdlTm8pIHtcbiAgICAgICAgICAgICAgICAgICAgdGFibGVDdHJsLnNob3dDaHVuayhwYWdlTm8sIHRhYmxlQ3RybC5zZWFyY2hUZXh0KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHNjb3BlLnNob3dQcmV2Q2h1bmsgPSB0YWJsZUN0cmwuc2hvd1ByZXZDaHVuaztcbiAgICAgICAgICAgICAgICBzY29wZS5zaG93TmV4dENodW5rID0gdGFibGVDdHJsLnNob3dOZXh0Q2h1bms7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2RpcmVjdGl2ZXMvcGFnaW5hdGlvbm1lbnUuaHRtbCdcbiAgICAgICAgfVxuICAgIH0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzExLzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm1vZGVscycpXG4gICAgLmZhY3RvcnkoJ0FwcGxpY2F0aW9uR3JvdXBzTW9kZWwnLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xuICAgICAgICB2YXIgZ3JvdXBzbW9kZWwgPSBuZXcgQ29sbGVjdGlvbigkaHR0cCwgJHEsIENvbnRpdkdsb2JhbHMuQVBQTElDQVRJT05HUk9VUFNfRU5EUE9JTlQpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZW5lcmF0ZSBrZXkgZm9yIGFwcGxpY2F0aW9uIGdyb3VwXG4gICAgICAgICAqIEBwYXJhbSBncm91cFxuICAgICAgICAgKi9cbiAgICAgICAgZ3JvdXBzbW9kZWwuZ2VuZXJhdGVLZXkgPSBmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgICAgICAgIHJldHVybiBncm91cC50ZW5hbnROYW1lICsgJzonICsgZ3JvdXAuZ3JvdXBOYW1lO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBncm91cHNtb2RlbDtcbiAgICB9XSk7IiwiLyoqXG4gKiBCYXNlQ29sbGVjdGlvbiBjbGFzcyB0aGF0IGRvZXMganVzdCBmZXRjaCBvZiB0aGUgb2JqZWN0cy5cbiAqIEBwYXJhbSAkaHR0cFxuICogQHBhcmFtICRxXG4gKiBAcGFyYW0gdXJsIFVzZWQgZm9yIGRvaW5nIEhUVFAgR0VUIGFuZCBmZXRjaCBvYmplY3RzIGZyb20gc2VydmVyXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQmFzZUNvbGxlY3Rpb24oJGh0dHAsICRxLCB1cmwpIHtcbiAgICB0aGlzLm1vZGVscyA9IFtdO1xuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICB0aGlzLiRxID0gJHE7XG4gICAgdGhpcy51cmwgPSB1cmw7XG59XG5cbkJhc2VDb2xsZWN0aW9uLnByb3RvdHlwZS5leHRyYWN0ID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIHJldHVybiByZXN1bHQuZGF0YTtcbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSByZWxvYWQgT3B0aW9uYWwuIERlZmF1bHQgaXMgZmFsc2VcbiAqIEByZXR1cm5zIHsqfVxuICovXG5CYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHJlbG9hZCkge1xuICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcztcbiAgICBpZiAocmVsb2FkID09PSB1bmRlZmluZWQpIHJlbG9hZCA9IGZhbHNlO1xuICAgIHJldHVybiAoIXJlbG9hZCAmJiBjb2xsZWN0aW9uLm1vZGVscy5sZW5ndGggPiAwKSA/XG4gICAgICAgIGNvbGxlY3Rpb24uJHEud2hlbihjb2xsZWN0aW9uLm1vZGVscykgOiBjb2xsZWN0aW9uLiRodHRwLmdldChjb2xsZWN0aW9uLnVybClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgY29sbGVjdGlvbi5tb2RlbHMgPSBjb2xsZWN0aW9uLmV4dHJhY3QocmVzdWx0KTtcbiAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uLm1vZGVscztcbiAgICAgICAgfSk7XG59O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ga2V5XG4gKiBAcGFyYW0gcmVsb2FkIE9wdGlvbmFsLiBEZWZhdWx0IGlzIGZhbHNlXG4gKiBAcGFyYW0ga2V5bmFtZVxuICogQHJldHVybnMgeyp9XG4gKi9cbkJhc2VDb2xsZWN0aW9uLnByb3RvdHlwZS5nZXRNb2RlbEJ5S2V5ID0gZnVuY3Rpb24gKGtleSwgcmVsb2FkLCBrZXluYW1lKSB7XG4gICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzO1xuICAgIGlmIChyZWxvYWQgPT09IHVuZGVmaW5lZCkgcmVsb2FkID0gZmFsc2U7XG4gICAgaWYgKGtleW5hbWUgPT09IHVuZGVmaW5lZCkga2V5bmFtZSA9ICdrZXknO1xuXG4gICAgdmFyIGRlZmVycmVkID0gY29sbGVjdGlvbi4kcS5kZWZlcigpO1xuXG4gICAgZnVuY3Rpb24gZmluZE1vZGVsKCkge1xuICAgICAgICByZXR1cm4gXy5maW5kKGNvbGxlY3Rpb24ubW9kZWxzLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgcmV0dXJuIGNba2V5bmFtZV0gPT0ga2V5O1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGlmICghcmVsb2FkICYmIGNvbGxlY3Rpb24ubW9kZWxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShmaW5kTW9kZWwoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29sbGVjdGlvbi5nZXQocmVsb2FkKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoZmluZE1vZGVsKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gbW9kZWxcbiAqIEBwYXJhbSByZWxvYWQgT3B0aW9uYWwuIERlZmF1bHQgaXMgZmFsc2VcbiAqIEByZXR1cm5zIHsqfVxuICovXG5CYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUuZ2V0TW9kZWwgPSBmdW5jdGlvbiAobW9kZWwsIHJlbG9hZCkge1xuICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcztcbiAgICBpZiAocmVsb2FkID09PSB1bmRlZmluZWQpIHJlbG9hZCA9IGZhbHNlO1xuXG4gICAgdmFyIGRlZmVycmVkID0gY29sbGVjdGlvbi4kcS5kZWZlcigpO1xuXG4gICAgZnVuY3Rpb24gZmluZE1vZGVsKCkge1xuICAgICAgICByZXR1cm4gXy5maW5kKGNvbGxlY3Rpb24ubW9kZWxzLCBtb2RlbClcbiAgICB9XG5cbiAgICBpZiAoIXJlbG9hZCAmJiBjb2xsZWN0aW9uLm1vZGVscy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUoZmluZE1vZGVsKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbGxlY3Rpb24uZ2V0KHJlbG9hZClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGZpbmRNb2RlbCgpKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTtcblxuXG4vKipcbiAqIEV4dGVuZHMgQmFzZUNvbGxlY3Rpb24gY2xhc3MgdG8gZG8gY3JlYXRlLCB1cGRhdGUgYW5kIGRlbGV0ZSB1c2luZyBQT1NULCBQVVQgYW5kIERFTEVURSB2ZXJicy5cbiAqIEBwYXJhbSAkaHR0cFxuICogQHBhcmFtICRxXG4gKiBAcGFyYW0gdXJsIFVzZWQgZm9yIGRvaW5nIEhUVFAgR0VUIGFuZCBmZXRjaCBvYmplY3RzIGZyb20gc2VydmVyXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQ29sbGVjdGlvbigkaHR0cCwgJHEsIHVybCkge1xuICAgIEJhc2VDb2xsZWN0aW9uLmNhbGwodGhpcywgJGh0dHAsICRxLCB1cmwpO1xufVxuXG5Db2xsZWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlKTtcblxuLyoqXG4gKlxuICogQHBhcmFtIG1vZGVsXG4gKiBAcGFyYW0gdXJsIE9wdGlvbmFsIGlmIG5vdCBwYXNzZWQgaXQgaXMgY29uc3RydWN0ZWQgdXNpbmcga2V5IGFuZCB1cmwgcGFzc2VkIGluIGNvbnN0cnVjdG9yXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ29sbGVjdGlvbi5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKG1vZGVsLCB1cmwpIHtcbiAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgdmFyIGRlZmVycmVkID0gY29sbGVjdGlvbi4kcS5kZWZlcigpO1xuICAgIGlmICh1cmwgPT09IHVuZGVmaW5lZCkgdXJsID0gY29sbGVjdGlvbi51cmwgKyBtb2RlbC5rZXkgKyAnLyc7XG4gICAgY29sbGVjdGlvbi4kaHR0cC5wb3N0KHVybCwgbW9kZWwpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9IGNvbGxlY3Rpb24uZXh0cmFjdChyZXNwb25zZSk7XG4gICAgICAgICAgICAvL0ZvciByZXN0IGVuZHBvaW50cyB0aGF0IGRvIG5vdCByZXR1cm4gY3JlYXRlZCBqc29uIG9iamVjdCBpbiByZXNwb25zZVxuICAgICAgICAgICAgaWYgKChyZXNwb25zZURhdGEgPT09IHVuZGVmaW5lZCkgfHwgKHJlc3BvbnNlRGF0YSA9PT0gJycpKSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VEYXRhID0gbW9kZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2NvbGxlY3Rpb24ubW9kZWxzLnB1c2goY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XG4gICAgICAgICAgICBjb2xsZWN0aW9uLm1vZGVscy5wdXNoKHJlc3BvbnNlRGF0YSk7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGNvbGxlY3Rpb24uZXh0cmFjdChyZXNwb25zZSkpO1xuICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XG4gICAgICAgIH0pO1xuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTtcblxuLyoqXG4gKiBUaGlzIGlzIGZvciBuZXRtYXN0ZXIgc3BlY2lmaWMgZW5kcG9pbnRzIGFuZCB1c2VkIGJ5IG5ldG1hc3RlciBvYmplY3RzIG9ubHkuXG4gKiBUT0RPOiBHZW5lcmFsaXplXG4gKiBAcGFyYW0gbW9kZWxcbiAqIEBwYXJhbSB1cmwgT3B0aW9uYWxcbiAqIEByZXR1cm5zIHsqfVxuICovXG5Db2xsZWN0aW9uLnByb3RvdHlwZS5zYXZlID0gZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzO1xuICAgIHZhciBkZWZlcnJlZCA9IGNvbGxlY3Rpb24uJHEuZGVmZXIoKTtcbiAgICB2YXIgdXJsID0gY29sbGVjdGlvbi51cmwgKyBtb2RlbC5rZXkgKyAnLyc7XG4gICAgY29sbGVjdGlvbi4kaHR0cC5wdXQodXJsLCBtb2RlbClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBfLnJlbW92ZShjb2xsZWN0aW9uLm1vZGVscywgZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbi5rZXkgPT0gbW9kZWwua2V5O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb2xsZWN0aW9uLm1vZGVscy5wdXNoKGNvbGxlY3Rpb24uZXh0cmFjdChyZXNwb25zZSkpO1xuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGNvbGxlY3Rpb24uZXh0cmFjdChyZXNwb25zZSkpO1xuICAgICAgICB9KTtcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbi8qKlxuICogVGhpcyBpcyBmb3IgbmV0bWFzdGVyIHNwZWNpZmljIGVuZHBvaW50cyBhbmQgdXNlZCBieSBuZXRtYXN0ZXIgb2JqZWN0cyBvbmx5LlxuICogVE9ETzogR2VuZXJhbGl6ZVxuICogQHBhcmFtIG1vZGVsXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ29sbGVjdGlvbi5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzO1xuICAgIHZhciBkZWZlcnJlZCA9IGNvbGxlY3Rpb24uJHEuZGVmZXIoKTtcbiAgICB2YXIgdXJsID0gY29sbGVjdGlvbi51cmwgKyBtb2RlbC5rZXkgKyAnLyc7XG4gICAgY29sbGVjdGlvbi4kaHR0cC5kZWxldGUodXJsKVxuICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgIF8ucmVtb3ZlKGNvbGxlY3Rpb24ubW9kZWxzLCBmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICAgIHJldHVybiBuLmtleSA9PSBtb2RlbC5rZXk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcbiAgICAgICAgfSk7XG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ga2V5XG4gKiBAcGFyYW0ga2V5bmFtZVxuICogQHBhcmFtIHVybCBPcHRpb25hbCBpZiBub3QgcGFzc2VkIGl0IGlzIGNvbnN0cnVjdGVkIHVzaW5nIGtleSBhbmQgdXJsIHBhc3NlZCBpbiBjb25zdHJ1Y3RvclxuICogQHJldHVybnMgeyp9XG4gKi9cbkNvbGxlY3Rpb24ucHJvdG90eXBlLmRlbGV0ZVVzaW5nS2V5ID0gZnVuY3Rpb24gKGtleSwga2V5bmFtZSwgdXJsKSB7XG4gICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzO1xuICAgIGlmIChrZXluYW1lID09PSB1bmRlZmluZWQpIGtleW5hbWUgPSAna2V5JztcblxuICAgIHZhciBkZWZlcnJlZCA9IGNvbGxlY3Rpb24uJHEuZGVmZXIoKTtcbiAgICBpZiAodXJsID09PSB1bmRlZmluZWQpIHVybCA9IGNvbGxlY3Rpb24udXJsICsga2V5ICsgJy8nO1xuICAgIGNvbGxlY3Rpb24uJGh0dHAuZGVsZXRlKHVybClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBfLnJlbW92ZShjb2xsZWN0aW9uLm1vZGVscywgZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbltrZXluYW1lXSA9PSBrZXk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcbiAgICAgICAgfSk7XG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59OyIsImFuZ3VsYXIubW9kdWxlKCdjb250aXYubW9kZWxzJylcbiAgICAuZmFjdG9yeSgnTmV0d29ya3NNb2RlbCcsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29sbGVjdGlvbigkaHR0cCwgJHEsIENvbnRpdkdsb2JhbHMuTkVUV09SS1NfRU5EUE9JTlQpO1xuICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gMy8yMi8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5tb2RlbHMnKVxuICAgIC5mYWN0b3J5KCdOb2Rlc01vZGVsJywgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcbiAgICAgICAgdmFyIG5vZGVzbW9kZWwgPSBuZXcgTm9kZXNDb2xsZWN0aW9uKCRodHRwLCAkcSk7XG4gICAgICAgIHJldHVybiBub2Rlc21vZGVsO1xuICAgIH1dKTtcblxuLyoqXG4gKiBOb2Rlc0NvbGxlY3Rpb24gZXh0ZW5kcyBmcm9tIEJhc2VDb2xsZWN0aW9uLiBJdCBvdmVycmlkZXMgZXh0cmFjdCgpIGFuZCBhZGRzIGNvbW1pc3Npb24sIGRlY29tbWlzc2lvbiwgdXBncmFkZSBhbmRcbiAqIGRpc2NvdmVyIG1ldGhvZHNcbiAqIEBwYXJhbSAkaHR0cFxuICogQHBhcmFtICRxXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gTm9kZXNDb2xsZWN0aW9uKCRodHRwLCAkcSkge1xuICAgIEJhc2VDb2xsZWN0aW9uLmNhbGwodGhpcywgJGh0dHAsICRxLCBDb250aXZHbG9iYWxzLk5PREVTX0xJU1RfRU5EUE9JTlQpO1xufVxuXG5Ob2Rlc0NvbGxlY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShCYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUpO1xuXG5Ob2Rlc0NvbGxlY3Rpb24ucHJvdG90eXBlLmV4dHJhY3QgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgLy9Db252ZXJ0IHRvIGFycmF5IGlmIHRoZSByZXR1cm5lZCBjb2xsZWN0aW9uIGlzIG5vdCBhbiBhcnJheVxuICAgIHJldHVybiBfLm1hcChyZXN1bHQuZGF0YSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgdmFsdWUua2V5ID0ga2V5O1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSk7XG59O1xuXG5cbi8qKlxuICpcbiAqIEBwYXJhbSBrZXlcbiAqIEBwYXJhbSBleHRyYVZhcnMgSlNPTiBvYmplY3Qgb2YgZXh0cmEgYW5zaWJsZSBhbmQgZW52aXJvbm1lbnQgdmFyaWFibGVzIHRvIGJlIHBhc3NlZCB3aGlsZSBjb21taXNzaW9uaW5nIGEgbm9kZVxuICoge1xuICAgICAqIFwiZW52XCI6e1wiaHR0cF9wcm94eVwiOlwiaHR0cDovL3Byb3h5LmVzbC5jaXNjby5jb206ODA4MFwiLCBcImh0dHBzX3Byb3h5XCI6XCJodHRwOi8vcHJveHkuZXNsLmNpc2NvLmNvbTo4MDgwXCJ9LFxuICAgICAqIFwiY29udHJvbF9pbnRlcmZhY2VcIjogXCJldGgxXCIsIFwic2VydmljZV92aXBcIjogXCIxOTIuMTY4LjIuMjUyXCIsIFwidmFsaWRhdGVfY2VydHNcIjogXCJmYWxzZVwiLCBcIm5ldHBsdWdpbl9pZlwiIDogXCJldGgyXCJcbiAgICAgKiB9XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuTm9kZXNDb2xsZWN0aW9uLnByb3RvdHlwZS5jb21taXNzaW9uID0gZnVuY3Rpb24gKG5vZGVPcHNPYmopIHtcbiAgICB2YXIgbm9kZXNjb2xsZWN0aW9uID0gdGhpcztcbiAgICB2YXIgZGVmZXJyZWQgPSBub2Rlc2NvbGxlY3Rpb24uJHEuZGVmZXIoKTtcbiAgICB2YXIgdXJsID0gQ29udGl2R2xvYmFscy5OT0RFU19DT01NSVNTSU9OX0VORFBPSU5UO1xuICAgIG5vZGVzY29sbGVjdGlvbi4kaHR0cC5wb3N0KHVybCwgbm9kZU9wc09iaiwge1xuICAgICAgICAgICAgJ2hlYWRlcnMnOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgIC8vU2VydmVyIGRvZXNuJ3QgcmV0dXJuIGFueSBqc29uIGluIHJlc3BvbnNlXG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTtcblxuTm9kZXNDb2xsZWN0aW9uLnByb3RvdHlwZS5kZWNvbW1pc3Npb24gPSBmdW5jdGlvbiAobm9kZU9wc09iaikge1xuICAgIHZhciBub2Rlc2NvbGxlY3Rpb24gPSB0aGlzO1xuICAgIHZhciBkZWZlcnJlZCA9IG5vZGVzY29sbGVjdGlvbi4kcS5kZWZlcigpO1xuICAgIHZhciB1cmwgPSBDb250aXZHbG9iYWxzLk5PREVTX0RFQ09NTUlTU0lPTl9FTkRQT0lOVDtcbiAgICBub2Rlc2NvbGxlY3Rpb24uJGh0dHAucG9zdCh1cmwsIG5vZGVPcHNPYmosIHtcbiAgICAgICAgICAgICdoZWFkZXJzJzoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTtcblxuTm9kZXNDb2xsZWN0aW9uLnByb3RvdHlwZS51cGdyYWRlID0gZnVuY3Rpb24gKG5vZGVPcHNPYmopIHtcbiAgICB2YXIgbm9kZXNjb2xsZWN0aW9uID0gdGhpcztcbiAgICB2YXIgZGVmZXJyZWQgPSBub2Rlc2NvbGxlY3Rpb24uJHEuZGVmZXIoKTtcbiAgICB2YXIgdXJsID0gQ29udGl2R2xvYmFscy5OT0RFU19NQUlOVEVOQU5DRV9FTkRQT0lOVDtcbiAgICBub2Rlc2NvbGxlY3Rpb24uJGh0dHAucG9zdCh1cmwsIG5vZGVPcHNPYmosIHtcbiAgICAgICAgICAgICdoZWFkZXJzJzoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIGlwXG4gKiBAcGFyYW0gZXh0cmFWYXJzIEpTT04gb2JqZWN0IG9mIGV4dHJhIGFuc2libGUgYW5kIGVudmlyb25tZW50IHZhcmlhYmxlcyB0byBiZSBwYXNzZWQgd2hpbGUgZGlzY292ZXJpbmcgYSBub2RlXG4gKiB7XG4gICAgICogXCJlbnZcIjp7XCJodHRwX3Byb3h5XCI6XCJodHRwOi8vcHJveHkuZXNsLmNpc2NvLmNvbTo4MDgwXCIsIFwiaHR0cHNfcHJveHlcIjpcImh0dHA6Ly9wcm94eS5lc2wuY2lzY28uY29tOjgwODBcIn0sXG4gICAgICogXCJjb250cm9sX2ludGVyZmFjZVwiOiBcImV0aDFcIiwgXCJzZXJ2aWNlX3ZpcFwiOiBcIjE5Mi4xNjguMi4yNTJcIiwgXCJjbHVzdGVyLW5hbWVcIjogXCJjb250aXZcIiwgXCJub2RlLWxhYmVsXCIgOiBcIm5vZGUxXCJcbiAgICAgKiB9XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuTm9kZXNDb2xsZWN0aW9uLnByb3RvdHlwZS5kaXNjb3ZlciA9IGZ1bmN0aW9uIChub2RlT3BzT2JqKSB7XG4gICAgdmFyIG5vZGVzY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgdmFyIGRlZmVycmVkID0gbm9kZXNjb2xsZWN0aW9uLiRxLmRlZmVyKCk7XG4gICAgdmFyIHVybCA9IENvbnRpdkdsb2JhbHMuTk9ERVNfRElTQ09WRVJfRU5EUE9JTlQ7XG4gICAgbm9kZXNjb2xsZWN0aW9uLiRodHRwLnBvc3QodXJsLCBub2RlT3BzT2JqLCB7XG4gICAgICAgICAgICAnaGVhZGVycyc6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xuICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07IiwiYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5tb2RlbHMnKVxuICAgIC5mYWN0b3J5KCdPcmdhbml6YXRpb25zTW9kZWwnLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xuICAgICAgICByZXR1cm4gbmV3IENvbGxlY3Rpb24oJGh0dHAsICRxLCBDb250aXZHbG9iYWxzLk9SR0FOSVpBVElPTlNfRU5EUE9JTlQpO1xuICAgIH1dKTsiLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2Lm1vZGVscycpXG4gICAgLmZhY3RvcnkoJ1BvbGljaWVzTW9kZWwnLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xuICAgICAgICB2YXIgcG9saWNpZXNtb2RlbCA9IG5ldyBDb2xsZWN0aW9uKCRodHRwLCAkcSwgQ29udGl2R2xvYmFscy5QT0xJQ0lFU19FTkRQT0lOVCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdlbmVyYXRlIHBvbGljeSBrZXkgdG8gc2F2ZSBwb2xpY3kgb24gc2VydmVyXG4gICAgICAgICAqIEBwYXJhbSBwb2xpY3lcbiAgICAgICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHBvbGljaWVzbW9kZWwuZ2VuZXJhdGVLZXkgPSBmdW5jdGlvbiAocG9saWN5KSB7XG4gICAgICAgICAgICByZXR1cm4gcG9saWN5LnRlbmFudE5hbWUgKyAnOicgKyBwb2xpY3kucG9saWN5TmFtZTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gcG9saWNpZXNtb2RlbDtcbiAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvOC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5tb2RlbHMnKVxuICAgIC5mYWN0b3J5KCdSdWxlc01vZGVsJywgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcbiAgICAgICAgdmFyIHJ1bGVzbW9kZWwgPSBuZXcgQ29sbGVjdGlvbigkaHR0cCwgJHEsIENvbnRpdkdsb2JhbHMuUlVMRVNfRU5EUE9JTlQpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgaW5jb21pbmcgcnVsZXMgZm9yIGEgZ2l2ZW4gcG9saWN5IGFuZCBhIHRlbmFudFxuICAgICAgICAgKiBAcGFyYW0gcG9saWN5TmFtZVxuICAgICAgICAgKiBAcGFyYW0gdGVuYW50TmFtZVxuICAgICAgICAgKiBAcmV0dXJucyB7Knx3ZWJkcml2ZXIucHJvbWlzZS5Qcm9taXNlfVxuICAgICAgICAgKi9cbiAgICAgICAgcnVsZXNtb2RlbC5nZXRJbmNvbWluZ1J1bGVzID0gZnVuY3Rpb24gKHBvbGljeU5hbWUsIHRlbmFudE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBydWxlc21vZGVsLmdldCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfLmZpbHRlcihyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgJ3BvbGljeU5hbWUnOiBwb2xpY3lOYW1lLFxuICAgICAgICAgICAgICAgICAgICAnZGlyZWN0aW9uJzogJ2luJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RlbmFudE5hbWUnOiB0ZW5hbnROYW1lXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgb3V0Z29pbmcgcnVsZXMgZm9yIGEgZ2l2ZW4gcG9saWN5IGFuZCBhIHRlbmFudFxuICAgICAgICAgKiBAcGFyYW0gcG9saWN5TmFtZVxuICAgICAgICAgKiBAcGFyYW0gdGVuYW50TmFtZVxuICAgICAgICAgKiBAcmV0dXJucyB7Knx3ZWJkcml2ZXIucHJvbWlzZS5Qcm9taXNlfVxuICAgICAgICAgKi9cbiAgICAgICAgcnVsZXNtb2RlbC5nZXRPdXRnb2luZ1J1bGVzID0gZnVuY3Rpb24gKHBvbGljeU5hbWUsIHRlbmFudE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBydWxlc21vZGVsLmdldCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfLmZpbHRlcihyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgJ3BvbGljeU5hbWUnOiBwb2xpY3lOYW1lLFxuICAgICAgICAgICAgICAgICAgICAnZGlyZWN0aW9uJzogJ291dCcsXG4gICAgICAgICAgICAgICAgICAgICd0ZW5hbnROYW1lJzogdGVuYW50TmFtZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2VuZXJhdGUgcnVsZSBrZXkgdG8gc2F2ZSBydWxlIG9uIHNlcnZlclxuICAgICAgICAgKiBAcGFyYW0gcnVsZVxuICAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgcnVsZXNtb2RlbC5nZW5lcmF0ZUtleSA9IGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gcnVsZS50ZW5hbnROYW1lICsgJzonICsgcnVsZS5wb2xpY3lOYW1lICsgJzonICsgcnVsZS5ydWxlSWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHJ1bGVzbW9kZWw7XG4gICAgfV0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xMS8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5tb2RlbHMnKVxuICAgIC5mYWN0b3J5KCdTZXJ2aWNlbGJzTW9kZWwnLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xuICAgICAgICByZXR1cm4gbmV3IENvbGxlY3Rpb24oJGh0dHAsICRxLCBDb250aXZHbG9iYWxzLlNFUlZJQ0VMQlNfRU5EUE9JTlQpO1xuICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNC8xOC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5tb2RlbHMnKVxuICAgIC5mYWN0b3J5KCdTdG9yYWdlUG9saWNpZXNNb2RlbCcsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdG9yYWdlUG9saWNpZXNDb2xsZWN0aW9uIGV4dGVuZHMgZnJvbSBCYXNlQ29sbGVjdGlvblxuICAgICAgICAgKiBAcGFyYW0gJGh0dHBcbiAgICAgICAgICogQHBhcmFtICRxXG4gICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gU3RvcmFnZVBvbGljaWVzQ29sbGVjdGlvbigkaHR0cCwgJHEpIHtcbiAgICAgICAgICAgIENvbGxlY3Rpb24uY2FsbCh0aGlzLCAkaHR0cCwgJHEsIENvbnRpdkdsb2JhbHMuU1RPUkFHRVBPTElDSUVTX0VORFBPSU5UKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFN0b3JhZ2VQb2xpY2llc0NvbGxlY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDb2xsZWN0aW9uLnByb3RvdHlwZSk7XG5cbiAgICAgICAgU3RvcmFnZVBvbGljaWVzQ29sbGVjdGlvbi5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgICAgICAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgdXJsID0gY29sbGVjdGlvbi51cmwgKyBtb2RlbC5uYW1lO1xuICAgICAgICAgICAgcmV0dXJuIENvbGxlY3Rpb24ucHJvdG90eXBlLmNyZWF0ZS5jYWxsKGNvbGxlY3Rpb24sIG1vZGVsLCB1cmwpO1xuICAgICAgICB9O1xuXG4gICAgICAgIFN0b3JhZ2VQb2xpY2llc0NvbGxlY3Rpb24ucHJvdG90eXBlLnNhdmUgPSBmdW5jdGlvbiAobW9kZWwpIHtcbiAgICAgICAgICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcztcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9IGNvbGxlY3Rpb24uJHEuZGVmZXIoKTtcbiAgICAgICAgICAgIHZhciB1cmwgPSBjb2xsZWN0aW9uLnVybCArIG1vZGVsLm5hbWU7XG4gICAgICAgICAgICBjb2xsZWN0aW9uLiRodHRwLnBvc3QodXJsLCBtb2RlbClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5yZW1vdmUoY29sbGVjdGlvbi5tb2RlbHMsIGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbi5uYW1lID09IG1vZGVsLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uLm1vZGVscy5wdXNoKG1vZGVsKTtcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgcG9saWNpZXNtb2RlbCA9IG5ldyBTdG9yYWdlUG9saWNpZXNDb2xsZWN0aW9uKCRodHRwLCAkcSk7XG4gICAgICAgIHJldHVybiBwb2xpY2llc21vZGVsO1xuICAgIH1dKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMjIvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubW9kZWxzJylcbiAgICAuZmFjdG9yeSgnVm9sdW1lc01vZGVsJywgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZvbHVtZXNDb2xsZWN0aW9uIGV4dGVuZHMgZnJvbSBCYXNlQ29sbGVjdGlvblxuICAgICAgICAgKiBAcGFyYW0gJGh0dHBcbiAgICAgICAgICogQHBhcmFtICRxXG4gICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gVm9sdW1lc0NvbGxlY3Rpb24oJGh0dHAsICRxKSB7XG4gICAgICAgICAgICBDb2xsZWN0aW9uLmNhbGwodGhpcywgJGh0dHAsICRxLCBDb250aXZHbG9iYWxzLlZPTFVNRVNfRU5EUE9JTlQpO1xuICAgICAgICB9XG5cbiAgICAgICAgVm9sdW1lc0NvbGxlY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDb2xsZWN0aW9uLnByb3RvdHlwZSk7XG5cbiAgICAgICAgVm9sdW1lc0NvbGxlY3Rpb24ucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgICAgICAgICAgdmFyIHZvbHVtZXNjb2xsZWN0aW9uID0gdGhpcztcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9IHZvbHVtZXNjb2xsZWN0aW9uLiRxLmRlZmVyKCk7XG4gICAgICAgICAgICB2YXIgdXJsID0gQ29udGl2R2xvYmFscy5WT0xVTUVTX0RFTEVURV9FTkRQT0lOVDtcbiAgICAgICAgICAgIC8vZGVsZXRlIGVuZHBvaW50IGV4cGVjdHMgdm9sdW1lIHByb3BlcnR5IGluIGFkZGl0aW9uIHRvIHBvbGljeS4gVE9ETyBhc2sgdG8gYmUgZml4ZWRcbiAgICAgICAgICAgIG1vZGVsLnZvbHVtZSA9IG1vZGVsLm5hbWU7XG4gICAgICAgICAgICB2YXIgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIGRhdGE6IG1vZGVsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdm9sdW1lc2NvbGxlY3Rpb24uJGh0dHAuZGVsZXRlKHVybCwgY29uZmlnKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBfLnJlbW92ZSh2b2x1bWVzY29sbGVjdGlvbi5tb2RlbHMsIGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG4ubmFtZSA9PSBtb2RlbC5uYW1lICYmIG4ucG9saWN5ID09IG1vZGVsLnBvbGljeSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHZvbHVtZXNjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh2b2x1bWVzY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgICAgfTtcblxuICAgICAgICBWb2x1bWVzQ29sbGVjdGlvbi5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgICAgICAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgdXJsID0gQ29udGl2R2xvYmFscy5WT0xVTUVTX0NSRUFURV9FTkRQT0lOVDtcbiAgICAgICAgICAgIHJldHVybiBDb2xsZWN0aW9uLnByb3RvdHlwZS5jcmVhdGUuY2FsbChjb2xsZWN0aW9uLCBtb2RlbCwgdXJsKTtcbiAgICAgICAgfTtcblxuICAgICAgICBWb2x1bWVzQ29sbGVjdGlvbi5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIChtb2RlbCwgc25hcHNob3QsIG5ld1ZvbHVtZSkge1xuICAgICAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gY29sbGVjdGlvbi4kcS5kZWZlcigpO1xuICAgICAgICAgICAgdmFyIHVybCA9IENvbnRpdkdsb2JhbHMuVk9MVU1FU19DT1BZU05BUFNIT1RTX0VORFBPSU5UO1xuICAgICAgICAgICAgdmFyIHZvbGNvcHltb2RlbCA9IHtcbiAgICAgICAgICAgICAgICB2b2x1bWU6IG1vZGVsLm5hbWUsXG4gICAgICAgICAgICAgICAgcG9saWN5OiBtb2RlbC5wb2xpY3ksXG4gICAgICAgICAgICAgICAgT3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IG5ld1ZvbHVtZSxcbiAgICAgICAgICAgICAgICAgICAgc25hcHNob3Q6IHNuYXBzaG90XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbGxlY3Rpb24uJGh0dHAucG9zdCh1cmwsIHZvbGNvcHltb2RlbClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9UT0RPOiBBZGQgdGhlIG5ldyB2b2x1bWUgdG8gdGhlIGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgLy9jb2xsZWN0aW9uLm1vZGVscy5wdXNoKGNvbGxlY3Rpb24uZXh0cmFjdChyZXNwb25zZSkpO1xuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGNvbGxlY3Rpb24uZXh0cmFjdChyZXNwb25zZSkpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGNvbGxlY3Rpb24uZXh0cmFjdChyZXNwb25zZSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHZvbHVtZXNtb2RlbCA9IG5ldyBWb2x1bWVzQ29sbGVjdGlvbigkaHR0cCwgJHEpO1xuICAgICAgICByZXR1cm4gdm9sdW1lc21vZGVsO1xuICAgIH1dKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDQvMjkvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYudXRpbHMnKVxuICAgIC5mYWN0b3J5KCdDUlVESGVscGVyU2VydmljZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHN0YXJ0TG9hZGVyKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnNob3dMb2FkZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBzdG9wTG9hZGVyKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnNob3dMb2FkZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gc2hvd1NlcnZlckVycm9yKGNvbnRyb2xsZXIsIG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnNob3dTZXJ2ZXJFcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5zZXJ2ZXJFcnJvck1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBoaWRlU2VydmVyRXJyb3IoY29udHJvbGxlcikge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuc2hvd1NlcnZlckVycm9yID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhcnRMb2FkZXI6IHN0YXJ0TG9hZGVyLFxuICAgICAgICAgICAgICAgIHN0b3BMb2FkZXI6IHN0b3BMb2FkZXIsXG4gICAgICAgICAgICAgICAgc2hvd1NlcnZlckVycm9yOiBzaG93U2VydmVyRXJyb3IsXG4gICAgICAgICAgICAgICAgaGlkZVNlcnZlckVycm9yOiBoaWRlU2VydmVyRXJyb3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2LnV0aWxzJylcbiAgICAuZmFjdG9yeSgnTm9kZXNTZXJ2aWNlJywgWyckaHR0cCcsICckcScsXG4gICAgICAgIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcbiAgICAgICAgICAgIGNvbnN0IEFQSUNfQ09OVFJfVU5SRVNUUklDVF9NT0RFID0gJ2FwaWNfY29udHJhY3RzX3VucmVzdHJpY3RlZF9tb2RlJztcbiAgICAgICAgICAgIGNvbnN0IEFQSUNfRVBHX0JSSURHRV9ET01BSU4gPSAnYXBpY19lcGdfYnJpZGdlX2RvbWFpbic7XG4gICAgICAgICAgICBjb25zdCBBUElDX0xFQUZfTk9ERVMgPSAnYXBpY19sZWFmX25vZGVzJztcbiAgICAgICAgICAgIGNvbnN0IEFQSUNfUEFTU1dPUkQgPSAnYXBpY19wYXNzd29yZCc7XG4gICAgICAgICAgICBjb25zdCBBUElDX1BIWVNfRE9NQUlOID0gJ2FwaWNfcGh5c19kb21haW4nO1xuICAgICAgICAgICAgY29uc3QgQVBJQ19VUkwgPSAnYXBpY191cmwnO1xuICAgICAgICAgICAgY29uc3QgQVBJQ19VU0VSTkFNRSA9ICdhcGljX3VzZXJuYW1lJztcbiAgICAgICAgICAgIGNvbnN0IENPTlRJVl9ORVRfTU9ERSA9ICdjb250aXZfbmV0d29ya19tb2RlJztcbiAgICAgICAgICAgIGNvbnN0IENPTlRST0xfSU5URVJGQUNFID0gJ2NvbnRyb2xfaW50ZXJmYWNlJztcbiAgICAgICAgICAgIGNvbnN0IEVOViA9ICdlbnYnO1xuICAgICAgICAgICAgY29uc3QgRldEX01PREUgPSAnZndkX21vZGUnO1xuICAgICAgICAgICAgY29uc3QgREFUQV9JTlRFUkZBQ0UgPSAnbmV0cGx1Z2luX2lmJztcbiAgICAgICAgICAgIGNvbnN0IFNDSEVEX1BST1ZJREVSID0gJ3NjaGVkdWxlcl9wcm92aWRlcic7XG4gICAgICAgICAgICBjb25zdCBWSVBfQUREUiA9ICdzZXJ2aWNlX3ZpcCc7XG4gICAgICAgICAgICBjb25zdCBVQ1BfQk9PVFNUUkFQX05PREUgPSAndWNwX2Jvb3RzdHJhcF9ub2RlX25hbWUnO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRTZXR0aW5ncyhjdHJsKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gQ29udGl2R2xvYmFscy5OT0RFU19TRVRUSU5HU19HRVRfRU5EUE9JTlQ7XG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KHVybCkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBjdHJsLnNldHRpbmcgPSByZXN1bHQuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV4dHJhVmFycyA9IGN0cmwuc2V0dGluZy5leHRyYV92YXJzO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2NoZWRfcHJvdmlkZXIgPSBleHRyYVZhcnNbU0NIRURfUFJPVklERVJdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV0d29ya19tb2RlID0gZXh0cmFWYXJzW0NPTlRJVl9ORVRfTU9ERV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4dHJhVmFyc1tDT05UUk9MX0lOVEVSRkFDRV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0cmwuZXh0cmFfdmFyc1tDT05UUk9MX0lOVEVSRkFDRV0gPSBleHRyYVZhcnNbQ09OVFJPTF9JTlRFUkZBQ0VdOyBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXh0cmFWYXJzW0RBVEFfSU5URVJGQUNFXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3RybC5leHRyYV92YXJzW0RBVEFfSU5URVJGQUNFXSA9IGV4dHJhVmFyc1tEQVRBX0lOVEVSRkFDRV07IFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChleHRyYVZhcnNbVklQX0FERFJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHJsLmV4dHJhX3ZhcnNbVklQX0FERFJdID0gZXh0cmFWYXJzW1ZJUF9BRERSXTsgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjaGVkX3Byb3ZpZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHJsLmV4dHJhX3ZhcnNbU0NIRURfUFJPVklERVJdID0gc2NoZWRfcHJvdmlkZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NoZWRfcHJvdmlkZXIgPT09ICd1Y3Atc3dhcm0nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3RybC5leHRyYV92YXJzW1VDUF9CT09UU1RSQVBfTk9ERV0gPSBleHRyYVZhcnNbVUNQX0JPT1RTVFJBUF9OT0RFXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobmV0d29ya19tb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHJsLmV4dHJhX3ZhcnNbQ09OVElWX05FVF9NT0RFXSA9IG5ldHdvcmtfbW9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXR3b3JrX21vZGUgPT09ICdzdGFuZGFsb25lJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0cmwuZXh0cmFfdmFyc1tGV0RfTU9ERV0gPSBleHRyYVZhcnNbRldEX01PREVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobmV0d29ya19tb2RlID09PSAnYWNpJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0cmwuZXh0cmFfdmFyc1tBUElDX0NPTlRSX1VOUkVTVFJJQ1RfTU9ERV0gPSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFWYXJzW0FQSUNfQ09OVFJfVU5SRVNUUklDVF9NT0RFXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHJsLmV4dHJhX3ZhcnNbQVBJQ19FUEdfQlJJREdFX0RPTUFJTl0gPSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFWYXJzW0FQSUNfRVBHX0JSSURHRV9ET01BSU5dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0cmwuZXh0cmFfdmFyc1tBUElDX0xFQUZfTk9ERVNdID0gZXh0cmFWYXJzW0FQSUNfTEVBRl9OT0RFU107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3RybC5leHRyYV92YXJzW0FQSUNfUEFTU1dPUkRdID0gZXh0cmFWYXJzW0FQSUNfUEFTU1dPUkRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0cmwuZXh0cmFfdmFyc1tBUElDX1BIWVNfRE9NQUlOXSA9IGV4dHJhVmFyc1tBUElDX1BIWVNfRE9NQUlOXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHJsLmV4dHJhX3ZhcnNbQVBJQ19VUkxdID0gZXh0cmFWYXJzW0FQSUNfVVJMXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHJsLmV4dHJhX3ZhcnNbQVBJQ19VU0VSTkFNRV0gPSBleHRyYVZhcnNbQVBJQ19VU0VSTkFNRV07ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlRW52VmFyaWFibGVzKGV4dHJhVmFyc1tFTlZdLCBjdHJsLmVudlZhcmlhYmxlcyk7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUFuc2libGVWYXJpYWJsZXMoZXh0cmFWYXJzLCBjdHJsLmFuc2libGVWYXJpYWJsZXMpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVFbnZWYXJpYWJsZXMoZW52VmFycywgZW52VmFyaWFibGVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICAgICAgZm9yIChpIGluIGVudlZhcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgZW52VmFyaWFibGVzLnB1c2goeyduYW1lJzogaSwgJ3ZhbHVlJzogZW52VmFyc1tpXX0pO1xuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVBbnNpYmxlVmFyaWFibGVzKGV4dHJhVmFycywgYW5zaWJsZVZhcmlhYmxlcykge1xuICAgICAgICAgICAgICAgIHZhciBzZXR0aW5nX2ZpbHRlciA9IFtBUElDX0NPTlRSX1VOUkVTVFJJQ1RfTU9ERSxcbiAgICAgICAgICAgICAgICAgICAgQVBJQ19FUEdfQlJJREdFX0RPTUFJTiwgQVBJQ19MRUFGX05PREVTLCBBUElDX1BBU1NXT1JELFxuICAgICAgICAgICAgICAgICAgICBBUElDX1BIWVNfRE9NQUlOLCBBUElDX1VSTCwgQVBJQ19VU0VSTkFNRSwgQ09OVElWX05FVF9NT0RFLFxuICAgICAgICAgICAgICAgICAgICBDT05UUk9MX0lOVEVSRkFDRSwgRU5WLCBGV0RfTU9ERSwgREFUQV9JTlRFUkZBQ0UsIFNDSEVEX1BST1ZJREVSLFxuICAgICAgICAgICAgICAgICAgICBWSVBfQUREUiwgVUNQX0JPT1RTVFJBUF9OT0RFXTtcbiAgICAgICAgICAgICAgICB2YXIgaTtcblxuICAgICAgICAgICAgICAgIGZvciAoaSBpbiBleHRyYVZhcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNldHRpbmdfZmlsdGVyLmluZGV4T2YoaSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnNpYmxlVmFyaWFibGVzLnB1c2goeyduYW1lJzogaSwgJ3ZhbHVlJzogZXh0cmFWYXJzW2ldfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVTZXR0aW5ncyhub2RlT3BzT2JqKSB7XG4gICAgICAgICAgICAgICAgQmFzZUNvbGxlY3Rpb24uY2FsbCh0aGlzLCAkaHR0cCwgJHEsIENvbnRpdkdsb2JhbHMuTk9ERVNfU0VUVElOR1NfR0VUX0VORFBPSU5UKTtcbiAgICAgICAgICAgICAgICB2YXIgc2V0dGluZ3Njb2xsZWN0aW9uID0gdGhpcztcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSBzZXR0aW5nc2NvbGxlY3Rpb24uJHEuZGVmZXIoKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gQ29udGl2R2xvYmFscy5OT0RFU19TRVRUSU5HU19TRVRfRU5EUE9JTlQ7XG4gICAgICAgICAgICAgICAgc2V0dGluZ3Njb2xsZWN0aW9uLiRodHRwLnBvc3QodXJsLCBub2RlT3BzT2JqLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnaGVhZGVycyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9TZXJ2ZXIgZG9lc24ndCByZXR1cm4gYW55IGpzb24gaW4gcmVzcG9uc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVFeHRyYVZhcnMoY3RybCkge1xuICAgICAgICAgICAgICAgIC8vQWRkIGFuc2libGUgdmFyaWFibGVzIHRvIGV4dHJhX3ZhcnNcbiAgICAgICAgICAgICAgICBjdHJsLmFuc2libGVWYXJpYWJsZXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBjdHJsLmV4dHJhX3ZhcnNbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvL0FkZCBlbnZpcm9ubWVudCB2YXJpYWJsZXMgdG8gZXh0cmFfdmFyc1xuICAgICAgICAgICAgICAgIHZhciBlbnZWYXJzID0ge307XG4gICAgICAgICAgICAgICAgY3RybC5lbnZWYXJpYWJsZXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBlbnZWYXJzW2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGN0cmwuZXh0cmFfdmFyc1tFTlZdID0gZW52VmFycztcbiAgICAgICAgICAgICAgICBjdHJsLm5vZGVPcHNPYmouZXh0cmFfdmFycyA9IEpTT04uc3RyaW5naWZ5KGN0cmwuZXh0cmFfdmFycyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENsZWFudXAgYW5zaWJsZSB2YXJpYWJsZXMgZm9yIG5ldHdvcmsgbW9kZSBhbmQgc2NoZWR1bGVyLiBuZy1pZiByZW1vdmVzIGl0IGZyb20gdGhlIHZpZXcgKERPTSkgYnV0IG5vdCBmcm9tXG4gICAgICAgICAgICAgKiB0aGUgbW9kZWwuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNsZWFudXBFeHRyYVZhcnMoY3RybCkge1xuICAgICAgICAgICAgICAgIC8vQ2xlYW51cCBmb3IgbmV0d29yayBtb2RlXG4gICAgICAgICAgICAgICAgaWYgKGN0cmwuZXh0cmFfdmFyc1tDT05USVZfTkVUX01PREVdID09ICdhY2knKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjdHJsLmV4dHJhX3ZhcnNbRldEX01PREVdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjdHJsLmV4dHJhX3ZhcnNbQVBJQ19VUkxdO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY3RybC5leHRyYV92YXJzW0FQSUNfVVNFUk5BTUVdO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY3RybC5leHRyYV92YXJzW0FQSUNfUEFTU1dPUkRdO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY3RybC5leHRyYV92YXJzW0FQSUNfTEVBRl9OT0RFU107XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjdHJsLmV4dHJhX3ZhcnNbQVBJQ19QSFlTX0RPTUFJTl07XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjdHJsLmV4dHJhX3ZhcnNbQVBJQ19FUEdfQlJJREdFX0RPTUFJTl07XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjdHJsLmV4dHJhX3ZhcnNbQVBJQ19DT05UUl9VTlJFU1RSSUNUX01PREVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL0NsZWFudXAgZm9yIHNjaGVkdWxlclxuICAgICAgICAgICAgICAgIGlmIChjdHJsLmV4dHJhX3ZhcnNbU0NIRURfUFJPVklERVJdID09ICduYXRpdmUtc3dhcm0nKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjdHJsLmV4dHJhX3ZhcnNbVUNQX0JPT1RTVFJBUF9OT0RFXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXRTZXR0aW5nczogZ2V0U2V0dGluZ3MsXG4gICAgICAgICAgICBjcmVhdGVFbnZWYXJpYWJsZXM6IGNyZWF0ZUVudlZhcmlhYmxlcyxcbiAgICAgICAgICAgIGNyZWF0ZUFuc2libGVWYXJpYWJsZXM6IGNyZWF0ZUFuc2libGVWYXJpYWJsZXMsXG4gICAgICAgICAgICB1cGRhdGVTZXR0aW5nczogdXBkYXRlU2V0dGluZ3MsXG4gICAgICAgICAgICBjcmVhdGVFeHRyYVZhcnM6IGNyZWF0ZUV4dHJhVmFycyxcbiAgICAgICAgICAgIGNsZWFudXBFeHRyYVZhcnM6IGNsZWFudXBFeHRyYVZhcnNcbiAgICAgICAgfVxuICAgIH1dKTsiLCJhbmd1bGFyLm1vZHVsZShcImNvbnRpdi5kaXJlY3RpdmVzXCIpXG4gICAgLmRpcmVjdGl2ZShcImN0dkFjaXZhbGlkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvZGlyZWN0aXZlcy9ub2RlZGlyZWN0aXZlcy9hY2l2YWxpZC5odG1sJyxcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgY3RybDogXCI9XCIsXG4gICAgICAgICAgICAgICAgZXJyb3JMaXN0SWQ6IFwiPVwiLFxuICAgICAgICAgICAgICAgIGZvcm06IFwiPVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSk7IiwiYW5ndWxhci5tb2R1bGUoXCJjb250aXYuZGlyZWN0aXZlc1wiKVxuICAgIC5kaXJlY3RpdmUoXCJjdHZDb250cm9saW50ZXJmYWNlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvZGlyZWN0aXZlcy9ub2RlZGlyZWN0aXZlcy9jb250cm9saW50ZXJmYWNlLmh0bWwnLFxuICAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgICBleHRyYXZhcnM6IFwiPVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSk7IiwiYW5ndWxhci5tb2R1bGUoXCJjb250aXYuZGlyZWN0aXZlc1wiKVxuICAgIC5kaXJlY3RpdmUoXCJjdHZOZXR3b3JrbW9kZVwiLCBmdW5jdGlvbiAoJGNvbXBpbGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvZGlyZWN0aXZlcy9ub2RlZGlyZWN0aXZlcy9uZXR3b3JrbW9kZS5odG1sJyxcbiAgICAgICAgICAgIC8vIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgIGV4dHJhdmFyczogXCI9XCIsXG4gICAgICAgICAgICAgICAgZXJyb3JMaXN0SWQ6IFwiPVwiLFxuICAgICAgICAgICAgICAgIGZvcm06IFwiPVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICAgICAgICAgIC8vIHZhciB2YWxpZGF0aW9uX2h0bWwgPSBcbiAgICAgICAgICAgICAgICAvLyAgICAgJzwhLS0gQVBJQyBzZXR0aW5ncyB2YWxpZGF0aW9uLCBwYXJ0IG9mIGNvbW1pc3Npb25pbmcgbm9kZSAtLT5cXFxuICAgICAgICAgICAgICAgIC8vICAgICA8bGkgbmctc2hvdz1cInNjb3BlLmZvcm0uYXBpY1VSTC4kZXJyb3IucmVxdWlyZWRcIj5cXFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgUGxlYXNlIGVudGVyIFVSTCBmb3IgQVBJQ1xcXG4gICAgICAgICAgICAgICAgLy8gICAgIDwvbGk+XFxcbiAgICAgICAgICAgICAgICAvLyAgICAgPGxpIG5nLXNob3c9XCJzY29wZS5mb3JtLmFwaWNVc2VyTmFtZS4kZXJyb3IucmVxdWlyZWRcIj5cXFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgUGxlYXNlIGVudGVyIHVzZXIgbmFtZSBmb3IgQVBJQ1xcXG4gICAgICAgICAgICAgICAgLy8gICAgIDwvbGk+XFxcbiAgICAgICAgICAgICAgICAvLyAgICAgPGxpIG5nLXNob3c9XCJzY29wZS5mb3JtLmFwaWNQYXNzd29yZC4kZXJyb3IucmVxdWlyZWRcIj5cXFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgUGxlYXNlIGVudGVyIHBhc3N3b3JkIGZvciBBUElDXFxcbiAgICAgICAgICAgICAgICAvLyAgICAgPC9saT5cXFxuICAgICAgICAgICAgICAgIC8vICAgICA8bGkgbmctc2hvdz1cInNjb3BlLmZvcm0uYXBpY0xlYWZOb2Rlcy4kZXJyb3IucmVxdWlyZWRcIj5cXFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgUGxlYXNlIGVudGVyIGxlYWYgbm9kZXMgZm9yIEFQSUNcXFxuICAgICAgICAgICAgICAgIC8vICAgICA8L2xpPic7XG4gICAgICAgICAgICAgICAgLy8gJChzY29wZS5lcnJvckxpc3RJZCkuYXBwZW5kKCRjb21waWxlKHZhbGlkYXRpb25faHRtbCkoc2NvcGUpKTtcbiAgICAgICAgICAgICAgICAvLyBzY29wZS4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAvLyBlbGVtZW50LmFwcGVuZCh2YWxpZGF0aW9uX2h0bWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0pOyIsImFuZ3VsYXIubW9kdWxlKFwiY29udGl2LmRpcmVjdGl2ZXNcIilcbiAgICAuZGlyZWN0aXZlKFwiY3R2U2NoZWR1bGVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvZGlyZWN0aXZlcy9ub2RlZGlyZWN0aXZlcy9zY2hlZHVsZXIuaHRtbCcsXG4gICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgIGV4dHJhdmFyczogXCI9XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
