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

angular.module('contiv.networkpolicies', ['contiv.models', 'contiv.directives', 'contiv.utils']);
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
<<<<<<< 250ea9033fa60b93b3c5000f6627380a2e7eda67
=======
                    //key: '',
>>>>>>> organizations tab ui
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvbW9kdWxlLmpzIiwibW9kZWxzL21vZHVsZS5qcyIsInV0aWxzL21vZHVsZS5qcyIsImFwcGxpY2F0aW9uZ3JvdXBzL21vZHVsZS5qcyIsImRhc2hib2FyZC9tb2R1bGUuanMiLCJsb2dpbi9tb2R1bGUuanMiLCJtZW51L21vZHVsZS5qcyIsIm5ldHdvcmtzL21vZHVsZS5qcyIsIm5ldHdvcmtfcG9saWNpZXMvbW9kdWxlLmpzIiwibm9kZXMvbW9kdWxlLmpzIiwib3JnYW5pemF0aW9ucy9tb2R1bGUuanMiLCJzZXJ2aWNlX2xicy9tb2R1bGUuanMiLCJzdG9yYWdlX3BvbGljaWVzL21vZHVsZS5qcyIsInZvbHVtZXMvbW9kdWxlLmpzIiwiYXBwLmpzIiwiYXBwbGljYXRpb25ncm91cHMvYXBwbGljYXRpb25ncm91cGNyZWF0ZWN0cmwuanMiLCJhcHBsaWNhdGlvbmdyb3Vwcy9hcHBsaWNhdGlvbmdyb3VwZGV0YWlsc2N0cmwuanMiLCJhcHBsaWNhdGlvbmdyb3Vwcy9hcHBsaWNhdGlvbmdyb3VwbGlzdGN0cmwuanMiLCJhcHBsaWNhdGlvbmdyb3Vwcy9hcHBsaWNhdGlvbmdyb3Vwc2VydmljZS5qcyIsImRhc2hib2FyZC9kYXNoYm9hcmRjdHJsLmpzIiwibG9naW4vbG9naW5jdHJsLmpzIiwibWVudS9tZW51Q3RybC5qcyIsIm5ldHdvcmtzL25ldHdvcmtjcmVhdGVjdHJsLmpzIiwibmV0d29ya3MvbmV0d29ya2RldGFpbHNjdHJsLmpzIiwibmV0d29ya3MvbmV0d29ya2xpc3RjdHJsLmpzIiwibmV0d29ya19wb2xpY2llcy9pc29sYXRpb25wb2xpY3ljcmVhdGVjdHJsLmpzIiwibmV0d29ya19wb2xpY2llcy9pc29sYXRpb25wb2xpY3lkZXRhaWxzY3RybC5qcyIsIm5ldHdvcmtfcG9saWNpZXMvaXNvbGF0aW9ucG9saWN5bGlzdGN0cmwuanMiLCJuZXR3b3JrX3BvbGljaWVzL25ldHdvcmtwb2xpY2llc3RhYnNjdHJsLmpzIiwibm9kZXMvbm9kZWNvbW1pc3Npb25jdHJsLmpzIiwibm9kZXMvbm9kZWRldGFpbHNjdHJsLmpzIiwibm9kZXMvbm9kZWxpc3RjdHJsLmpzIiwib3JnYW5pemF0aW9ucy9vcmdhbml6YXRpb25jcmVhdGVjdHJsLmpzIiwib3JnYW5pemF0aW9ucy9vcmdhbml6YXRpb25kZXRhaWxzY3RybC5qcyIsIm9yZ2FuaXphdGlvbnMvb3JnYW5pemF0aW9ubGlzdGN0cmwuanMiLCJzZXJ2aWNlX2xicy9zZXJ2aWNlbGJjcmVhdGVjdHJsLmpzIiwic2VydmljZV9sYnMvc2VydmljZWxiZGV0YWlsc2N0cmwuanMiLCJzZXJ2aWNlX2xicy9zZXJ2aWNlbGJsaXN0Y3RybC5qcyIsInNlcnZpY2VfbGJzL3NlcnZpY2VsYnBvcnRzZGlyZWN0aXZlLmpzIiwic3RvcmFnZV9wb2xpY2llcy9zdG9yYWdlcG9saWN5Y3JlYXRlY3RybC5qcyIsInN0b3JhZ2VfcG9saWNpZXMvc3RvcmFnZXBvbGljeWRldGFpbHNjdHJsLmpzIiwic3RvcmFnZV9wb2xpY2llcy9zdG9yYWdlcG9saWN5ZGlyZWN0aXZlLmpzIiwic3RvcmFnZV9wb2xpY2llcy9zdG9yYWdlcG9saWN5bGlzdGN0cmwuanMiLCJ2b2x1bWVzL3ZvbHVtZWNyZWF0ZWN0cmwuanMiLCJ2b2x1bWVzL3ZvbHVtZWRldGFpbHNjdHJsLmpzIiwidm9sdW1lcy92b2x1bWVsaXN0Y3RybC5qcyIsInZvbHVtZXMvdm9sdW1lc2VydmljZS5qcyIsImNvbXBvbmVudHMvZGlyZWN0aXZlcy9jb2xsYXBzaWJsZWRpcmVjdGl2ZS5qcyIsImNvbXBvbmVudHMvZGlyZWN0aXZlcy9lcnJvcm1lc3NhZ2VkaXJlY3RpdmUuanMiLCJjb21wb25lbnRzL2RpcmVjdGl2ZXMvbmFtZXZhbHVlZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9kaXJlY3RpdmVzL3RhYmxlZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9tb2RlbHMvYXBwbGljYXRpb25ncm91cHNtb2RlbC5qcyIsImNvbXBvbmVudHMvbW9kZWxzL2NvbGxlY3Rpb24uanMiLCJjb21wb25lbnRzL21vZGVscy9uZXR3b3Jrc21vZGVsLmpzIiwiY29tcG9uZW50cy9tb2RlbHMvbm9kZXNtb2RlbC5qcyIsImNvbXBvbmVudHMvbW9kZWxzL29yZ2FuaXphdGlvbnNtb2RlbC5qcyIsImNvbXBvbmVudHMvbW9kZWxzL3BvbGljaWVzbW9kZWwuanMiLCJjb21wb25lbnRzL21vZGVscy9ydWxlc21vZGVsLmpzIiwiY29tcG9uZW50cy9tb2RlbHMvc2VydmljZWxic21vZGVsLmpzIiwiY29tcG9uZW50cy9tb2RlbHMvc3RvcmFnZXBvbGljaWVzbW9kZWwuanMiLCJjb21wb25lbnRzL21vZGVscy92b2x1bWVzbW9kZWwuanMiLCJjb21wb25lbnRzL3V0aWxzL2NydWRoZWxwZXJzZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDblVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25OQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RIQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoXCJjb250aXYuZGlyZWN0aXZlc1wiLCBbXSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMTQvMTYuXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm1vZGVscycsIFtdKTtcclxudmFyIENvbnRpdkdsb2JhbHMgPSAoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy9SRVNUIGVuZHBvaW50cyBmb3IgXHJcbiAgICAgICAgJ05FVFdPUktTX0VORFBPSU5UJzogJy9uZXRtYXN0ZXIvYXBpL3YxL25ldHdvcmtzLycsXHJcbiAgICAgICAgJ1BPTElDSUVTX0VORFBPSU5UJzogJy9uZXRtYXN0ZXIvYXBpL3YxL3BvbGljeXMvJyxcclxuICAgICAgICAnUlVMRVNfRU5EUE9JTlQnOiAnL25ldG1hc3Rlci9hcGkvdjEvcnVsZXMvJyxcclxuICAgICAgICAnQVBQTElDQVRJT05HUk9VUFNfRU5EUE9JTlQnOiAnL25ldG1hc3Rlci9hcGkvdjEvZW5kcG9pbnRHcm91cHMvJyxcclxuICAgICAgICAnU0VSVklDRUxCU19FTkRQT0lOVCc6ICcvbmV0bWFzdGVyL2FwaS92MS9zZXJ2aWNlTEJzLycsXHJcbiAgICAgICAgJ09SR0FOSVpBVElPTlNfRU5EUE9JTlQnOicvbmV0bWFzdGVyL2FwaS92MS90ZW5hbnRzLycsXHJcblxyXG4gICAgICAgIC8vUkVTVCBlbmRwb2ludHMgZm9yIFZPTE1BU1RFUlxyXG4gICAgICAgICdWT0xVTUVTX0VORFBPSU5UJzogJy92b2xtYXN0ZXIvdm9sdW1lcy8nLFxyXG4gICAgICAgICdWT0xVTUVTX0NSRUFURV9FTkRQT0lOVCc6ICcvdm9sbWFzdGVyL3ZvbHVtZXMvY3JlYXRlLycsXHJcbiAgICAgICAgJ1ZPTFVNRVNfREVMRVRFX0VORFBPSU5UJzogJy92b2xtYXN0ZXIvdm9sdW1lcy9yZW1vdmUvJyxcclxuICAgICAgICAnVk9MVU1FU19DT1BZU05BUFNIT1RTX0VORFBPSU5UJzogJy92b2xtYXN0ZXIvdm9sdW1lcy9jb3B5LycsXHJcbiAgICAgICAgJ1ZPTFVNRVNfVVNFU19FTkRQT0lOVCc6ICcvdm9sbWFzdGVyL3VzZXMvbW91bnRzLycsXHJcbiAgICAgICAgJ1ZPTFVNRVNfU05BUFNIT1RTX0VORFBPSU5UJzogJy92b2xtYXN0ZXIvc25hcHNob3RzLycsXHJcblxyXG4gICAgICAgICdTVE9SQUdFUE9MSUNJRVNfRU5EUE9JTlQnOiAnL3ZvbG1hc3Rlci9wb2xpY2llcy8nLFxyXG5cclxuXHJcbiAgICAgICAgLy9SRVNUIGVuZHBvaW50cyBmb3IgQ0xVU1RFUlxyXG4gICAgICAgICdOT0RFU19MSVNUX0VORFBPSU5UJzogJy9pbmZvL25vZGVzJyxcclxuICAgICAgICAnTk9ERVNfRElTQ09WRVJfRU5EUE9JTlQnOiAnL2Rpc2NvdmVyL25vZGVzJyxcclxuICAgICAgICAnTk9ERVNfQ09NTUlTU0lPTl9FTkRQT0lOVCc6ICcvY29tbWlzc2lvbi9ub2RlcycsXHJcbiAgICAgICAgJ05PREVTX0RFQ09NTUlTU0lPTl9FTkRQT0lOVCc6ICcvZGVjb21taXNzaW9uL25vZGVzJyxcclxuICAgICAgICAnTk9ERVNfTUFJTlRFTkFOQ0VfRU5EUE9JTlQnOiAnL21haW50ZW5hbmNlL25vZGVzJyxcclxuXHJcbiAgICAgICAgLy9SZWZyZXNoIGludGVydmFsIGluIG1pbGxpc2Vjb25kc1xyXG4gICAgICAgICdSRUZSRVNIX0lOVEVSVkFMJzogNTAwMCxcclxuXHJcbiAgICAgICAgLy9SZWdFeCBmb3IgdmFsaWRhdGlvblxyXG4gICAgICAgICdDSURSX1JFR0VYJyA6ICdeKChbMC05XXxbMS05XVswLTldfDFbMC05XXsyfXwyWzAtNF1bMC05XXwyNVswLTVdKVxcLil7M30oWzAtOV18WzEtOV1bMC05XXwxWzAtOV17Mn18MlswLTRdWzAtOV18MjVbMC01XSkoXFwvKFswLTldfFsxLTJdWzAtOV18M1swLTJdKSkkJ1xyXG4gICAgfVxyXG59KSgpO1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xOC8xNi5cclxuICovXHJcbmFuZ3VsYXIubW9kdWxlKCdjb250aXYudXRpbHMnLCBbXSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTgvMTYuXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LmFwcGxpY2F0aW9uZ3JvdXBzJywgWydjb250aXYubW9kZWxzJywgJ2NvbnRpdi5kaXJlY3RpdmVzJywgJ2NvbnRpdi51dGlscyddKVxyXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5hcHBsaWNhdGlvbmdyb3VwcycsIHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9hcHBsaWNhdGlvbmdyb3VwcycsXHJcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnPGRpdiB1aS12aWV3IGNsYXNzPVwidWkgY29udGFpbmVyXCIvPidcclxuICAgICAgICAgICAgfSlcclxuICAgIH1dKTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTgvMTYuXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LmRhc2hib2FyZCcsIFsnY29udGl2Lm1vZGVscyddKTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTkvMTYuXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LmxvZ2luJywgWydjb250aXYudXRpbHMnXSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTkvMTYuXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm1lbnUnLCBbXSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTgvMTYuXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm5ldHdvcmtzJywgWydjb250aXYubW9kZWxzJywgJ2NvbnRpdi5kaXJlY3RpdmVzJywgJ2NvbnRpdi51dGlscyddKVxyXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2NvbnRpdi5tZW51Lm5ldHdvcmtzJywge1xyXG4gICAgICAgICAgICB1cmw6ICcvbmV0d29ya3MnLFxyXG4gICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcclxuICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IHVpLXZpZXcgY2xhc3M9XCJ1aSBjb250YWluZXJcIi8+J1xyXG4gICAgICAgIH0pXHJcbiAgICB9XSk7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzE4LzE2LlxyXG4gKi9cclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubmV0d29ya3BvbGljaWVzJywgWydjb250aXYubW9kZWxzJywgJ2NvbnRpdi5kaXJlY3RpdmVzJywgJ2NvbnRpdi51dGlscyddKTsiLCIvKipcclxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xOC8xNi5cclxuICovXHJcbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubm9kZXMnLCBbJ2NvbnRpdi5tb2RlbHMnLCAnY29udGl2LmRpcmVjdGl2ZXMnLCAnY29udGl2LnV0aWxzJ10pXHJcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcclxuICAgICAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5vZGVzJywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL25vZGVzJyxcclxuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IHVpLXZpZXcgY2xhc3M9XCJ1aSBjb250YWluZXJcIi8+J1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfV0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2Lm9yZ2FuaXphdGlvbnMnLCBbJ2NvbnRpdi5tb2RlbHMnLCAnY29udGl2LmRpcmVjdGl2ZXMnLCAnY29udGl2LnV0aWxzJ10pXHJcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcclxuICAgICAgICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnY29udGl2Lm1lbnUub3JnYW5pemF0aW9ucycsIHtcclxuICAgICAgICAgICAgdXJsOiAnL29yZ2FuaXphdGlvbnMnLFxyXG4gICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcclxuICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IHVpLXZpZXcgY2xhc3M9XCJ1aSBjb250YWluZXJcIi8+J1xyXG4gICAgICAgIH0pXHJcbiAgICB9XSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTgvMTYuXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnNlcnZpY2VsYnMnLCBbJ2NvbnRpdi5tb2RlbHMnLCAnY29udGl2LmRpcmVjdGl2ZXMnLCAnY29udGl2LnV0aWxzJ10pXHJcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcclxuICAgICAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnNlcnZpY2VsYnMnLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvc2VydmljZWxicycsXHJcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnPGRpdiB1aS12aWV3IGNsYXNzPVwidWkgY29udGFpbmVyXCIvPidcclxuICAgICAgICAgICAgfSlcclxuICAgIH1dKTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTgvMTYuXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnN0b3JhZ2Vwb2xpY2llcycsIFsnY29udGl2Lm1vZGVscycsICdjb250aXYuZGlyZWN0aXZlcycsICdjb250aXYudXRpbHMnXSlcclxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc3RvcmFnZXBvbGljaWVzJywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3N0b3JhZ2Vwb2xpY2llcycsXHJcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnPGRpdiB1aS12aWV3IGNsYXNzPVwidWkgY29udGFpbmVyXCIvPidcclxuICAgICAgICAgICAgfSlcclxuICAgIH1dKTsiLCIvKipcclxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xOC8xNi5cclxuICovXHJcbmFuZ3VsYXIubW9kdWxlKCdjb250aXYudm9sdW1lcycsIFsnY29udGl2Lm1vZGVscycsICdjb250aXYuZGlyZWN0aXZlcycsICdjb250aXYudXRpbHMnXSlcclxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUudm9sdW1lcycsIHtcclxuICAgICAgICAgICAgICAgIHVybDogJy92b2x1bWVzJyxcclxuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IHVpLXZpZXcgY2xhc3M9XCJ1aSBjb250YWluZXJcIi8+J1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfV0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5cclxuLy8gRGVjbGFyZSBhcHAgbGV2ZWwgbW9kdWxlIHdoaWNoIGRlcGVuZHMgb24gdmlld3MsIGFuZCBjb21wb25lbnRzXHJcbmFuZ3VsYXIubW9kdWxlKCdjb250aXZBcHAnLCBbXHJcbiAgICAgICAgJ3VpLnJvdXRlcicsXHJcbiAgICAgICAgJ2NvbnRpdi5sb2dpbicsXHJcbiAgICAgICAgJ2NvbnRpdi5tZW51JyxcclxuICAgICAgICAnY29udGl2LmRhc2hib2FyZCcsXHJcbiAgICAgICAgJ2NvbnRpdi5hcHBsaWNhdGlvbmdyb3VwcycsXHJcbiAgICAgICAgJ2NvbnRpdi5uZXR3b3JrcycsXHJcbiAgICAgICAgJ2NvbnRpdi5uZXR3b3JrcG9saWNpZXMnLFxyXG4gICAgICAgICdjb250aXYuc3RvcmFnZXBvbGljaWVzJyxcclxuICAgICAgICAnY29udGl2LnNlcnZpY2VsYnMnLFxyXG4gICAgICAgICdjb250aXYudm9sdW1lcycsXHJcbiAgICAgICAgJ2NvbnRpdi5ub2RlcycsXHJcbiAgICAgICAgJ2NvbnRpdi5vcmdhbml6YXRpb25zJ1xyXG4gICAgXSlcclxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgLy9hYnN0cmFjdCBzdGF0ZSBzZXJ2ZXMgYXMgYSBQTEFDRUhPTERFUiBvciBOQU1FU1BBQ0UgZm9yIGFwcGxpY2F0aW9uIHN0YXRlc1xyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdicsIHtcclxuICAgICAgICAgICAgICAgIHVybDogJycsXHJcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnPGRpdiB1aS12aWV3IGNsYXNzPVwidWkgZmx1aWQgY29udGFpbmVyXCIvPidcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICA7XHJcblxyXG4gICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcclxuICAgIH1dKTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMTEvMTYuXHJcbiAqL1xyXG4vKipcclxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gMy8xMC8xNi5cclxuICovXHJcbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuYXBwbGljYXRpb25ncm91cHMnKVxyXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5hcHBsaWNhdGlvbmdyb3Vwcy5jcmVhdGUnLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvY3JlYXRlJyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybCBhcyBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybCcsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcGxpY2F0aW9uZ3JvdXBzL2FwcGxpY2F0aW9uZ3JvdXBjcmVhdGUuaHRtbCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICA7XHJcbiAgICB9XSlcclxuICAgIC5jb250cm9sbGVyKCdBcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybCcsIFtcclxuICAgICAgICAnJHN0YXRlJyxcclxuICAgICAgICAnQXBwbGljYXRpb25Hcm91cHNNb2RlbCcsXHJcbiAgICAgICAgJ05ldHdvcmtzTW9kZWwnLFxyXG4gICAgICAgICdQb2xpY2llc01vZGVsJyxcclxuICAgICAgICAnUnVsZXNNb2RlbCcsXHJcbiAgICAgICAgJ0FwcGxpY2F0aW9uR3JvdXBTZXJ2aWNlJyxcclxuICAgICAgICAnQ1JVREhlbHBlclNlcnZpY2UnLFxyXG4gICAgICAgIGZ1bmN0aW9uICgkc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uR3JvdXBzTW9kZWwsXHJcbiAgICAgICAgICAgICAgICAgIE5ldHdvcmtzTW9kZWwsXHJcbiAgICAgICAgICAgICAgICAgIFBvbGljaWVzTW9kZWwsXHJcbiAgICAgICAgICAgICAgICAgIFJ1bGVzTW9kZWwsXHJcbiAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uR3JvdXBTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZSkge1xyXG4gICAgICAgICAgICB2YXIgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwgPSB0aGlzO1xyXG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5uZXR3b3JrcyA9IFtdO1xyXG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5pc29sYXRpb25Qb2xpY2llcyA9IFtdO1xyXG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5hcHBsaWNhdGlvbkdyb3VwID0ge307XHJcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLnNlbGVjdGVkTmV0d29yayA9IHt9O1xyXG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5zZWxlY3RlZFBvbGljeSA9IHt9O1xyXG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5zZWxlY3RlZFBvbGljaWVzID0gW107XHJcblxyXG4gICAgICAgICAgICAvL1RvIGRpc3BsYXkgaW5jb21pbmcgYW5kIG91dGdvaW5nIHJ1bGVzIGZvciBzZWxlY3RlZCBwb2xpY2llc1xyXG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5pbmNvbWluZ1J1bGVzID0gW107XHJcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLm91dGdvaW5nUnVsZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLmlzb2xhdGlvblBvbGljaWVzVmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9BcHBsaWNhdGlvbkdyb3VwKCkge1xyXG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5hcHBsaWNhdGlvbmdyb3Vwcy5saXN0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNhbmNlbENyZWF0aW5nKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuVG9BcHBsaWNhdGlvbkdyb3VwKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBHZXQgbmV0d29ya3MgZm9yIHRoZSBnaXZlbiB0ZW5hbnQuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXROZXR3b3JrcygpIHtcclxuICAgICAgICAgICAgICAgIE5ldHdvcmtzTW9kZWwuZ2V0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwubmV0d29ya3MgPSBfLmZpbHRlcihyZXN1bHQsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RlbmFudE5hbWUnOiAnZGVmYXVsdCcvL1RPRE86IFJlbW92ZSBoYXJkY29kZWQgdGVuYW50LlxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBHZXQgcG9saWNpZXMgZm9yIHRoZSBnaXZlbiB0ZW5hbnQuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRJc29sYXRpb25Qb2xpY2llcygpIHtcclxuICAgICAgICAgICAgICAgIFBvbGljaWVzTW9kZWwuZ2V0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuaXNvbGF0aW9uUG9saWNpZXMgPSBfLmZpbHRlcihyZXN1bHQsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RlbmFudE5hbWUnOiAnZGVmYXVsdCcvL1RPRE86IFJlbW92ZSBoYXJkY29kZWQgdGVuYW50LlxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBBZGQgcG9saWN5IHRvIG5ldyBhcHBsaWNhdGlvbiBncm91cFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZnVuY3Rpb24gYWRkSXNvbGF0aW9uUG9saWN5KCkge1xyXG4gICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cFNlcnZpY2UuYWRkSXNvbGF0aW9uUG9saWN5KGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFJlbW92ZSBwb2xpY3kgZnJvbSBuZXcgYXBwbGljYXRpb24gZ3JvdXBcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlbW92ZUlzb2xhdGlvblBvbGljeShwb2xpY3lOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbkdyb3VwU2VydmljZS5yZW1vdmVJc29sYXRpb25Qb2xpY3koYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwsIHBvbGljeU5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVBcHBsaWNhdGlvbkdyb3VwKCkge1xyXG4gICAgICAgICAgICAgICAgLy9mb3JtIGNvbnRyb2xsZXIgaXMgaW5qZWN0ZWQgYnkgdGhlIGh0bWwgdGVtcGxhdGVcclxuICAgICAgICAgICAgICAgIC8vY2hlY2tpbmcgaWYgYWxsIHZhbGlkYXRpb25zIGhhdmUgcGFzc2VkXHJcbiAgICAgICAgICAgICAgICBpZiAoYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuZm9ybS4kdmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IoYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5hcHBsaWNhdGlvbkdyb3VwLm5ldHdvcmtOYW1lID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuc2VsZWN0ZWROZXR3b3JrLm5ldHdvcmtOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLmFwcGxpY2F0aW9uR3JvdXAua2V5ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cHNNb2RlbC5nZW5lcmF0ZUtleShhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5hcHBsaWNhdGlvbkdyb3VwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cHNNb2RlbC5jcmVhdGUoYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuYXBwbGljYXRpb25Hcm91cCkudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub0FwcGxpY2F0aW9uR3JvdXAoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xyXG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybCk7XHJcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IoYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwpO1xyXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuYXBwbGljYXRpb25Hcm91cCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBncm91cE5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldHdvcmtOYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwb2xpY2llczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgdGVuYW50TmFtZTogJ2RlZmF1bHQnLy9UT0RPOiBSZW1vdmUgaGFyZGNvZGVkIHRlbmFudC5cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGdldE5ldHdvcmtzKCk7XHJcbiAgICAgICAgICAgIGdldElzb2xhdGlvblBvbGljaWVzKCk7XHJcblxyXG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5jcmVhdGVBcHBsaWNhdGlvbkdyb3VwID0gY3JlYXRlQXBwbGljYXRpb25Hcm91cDtcclxuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuY2FuY2VsQ3JlYXRpbmcgPSBjYW5jZWxDcmVhdGluZztcclxuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuYWRkSXNvbGF0aW9uUG9saWN5ID0gYWRkSXNvbGF0aW9uUG9saWN5O1xyXG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5yZW1vdmVJc29sYXRpb25Qb2xpY3kgPSByZW1vdmVJc29sYXRpb25Qb2xpY3k7XHJcblxyXG4gICAgICAgICAgICByZXNldEZvcm0oKTtcclxuICAgICAgICB9XSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMTUvMTYuXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LmFwcGxpY2F0aW9uZ3JvdXBzJylcclxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuYXBwbGljYXRpb25ncm91cHMuZGV0YWlscycsIHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9kZXRhaWxzLzprZXknLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0FwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCBhcyBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHBsaWNhdGlvbmdyb3Vwcy9hcHBsaWNhdGlvbmdyb3VwZGV0YWlscy5odG1sJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LmFwcGxpY2F0aW9uZ3JvdXBzLmVkaXQnLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvZWRpdC86a2V5JyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwgYXMgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwbGljYXRpb25ncm91cHMvYXBwbGljYXRpb25ncm91cGRldGFpbHMuaHRtbCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICA7XHJcbiAgICB9XSlcclxuICAgIC5jb250cm9sbGVyKCdBcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwnLCBbXHJcbiAgICAgICAgJyRzdGF0ZScsXHJcbiAgICAgICAgJyRzdGF0ZVBhcmFtcycsXHJcbiAgICAgICAgJ0FwcGxpY2F0aW9uR3JvdXBzTW9kZWwnLFxyXG4gICAgICAgICdQb2xpY2llc01vZGVsJyxcclxuICAgICAgICAnUnVsZXNNb2RlbCcsXHJcbiAgICAgICAgJ0FwcGxpY2F0aW9uR3JvdXBTZXJ2aWNlJyxcclxuICAgICAgICAnQ1JVREhlbHBlclNlcnZpY2UnLFxyXG4gICAgICAgIGZ1bmN0aW9uICgkc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICRzdGF0ZVBhcmFtcyxcclxuICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cHNNb2RlbCxcclxuICAgICAgICAgICAgICAgICAgUG9saWNpZXNNb2RlbCxcclxuICAgICAgICAgICAgICAgICAgUnVsZXNNb2RlbCxcclxuICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgICAgIHZhciBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwgPSB0aGlzO1xyXG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuaXNvbGF0aW9uUG9saWNpZXMgPSBbXTtcclxuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmFwcGxpY2F0aW9uR3JvdXAgPSB7fTtcclxuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLnNlbGVjdGVkTmV0d29yayA9IHt9O1xyXG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuc2VsZWN0ZWRQb2xpY3kgPSB7fTtcclxuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLnNlbGVjdGVkUG9saWNpZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIC8vVG8gZGlzcGxheSBpbmNvbWluZyBhbmQgb3V0Z29pbmcgcnVsZXMgZm9yIHNlbGVjdGVkIHBvbGljaWVzXHJcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5pbmNvbWluZ1J1bGVzID0gW107XHJcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5vdXRnb2luZ1J1bGVzID0gW107XHJcblxyXG5cclxuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmlzb2xhdGlvblBvbGljaWVzVmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFRvIHNob3cgZWRpdCBvciBkZXRhaWxzIHNjcmVlbiBiYXNlZCBvbiB0aGUgcm91dGVcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldE1vZGUoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJHN0YXRlLmlzKCdjb250aXYubWVudS5hcHBsaWNhdGlvbmdyb3Vwcy5lZGl0JykpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwubW9kZSA9ICdlZGl0JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLm1vZGUgPSAnZGV0YWlscyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvQXBwbGljYXRpb25Hcm91cCgpIHtcclxuICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUuYXBwbGljYXRpb25ncm91cHMubGlzdCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub0FwcGxpY2F0aW9uR3JvdXBEZXRhaWxzKCkge1xyXG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5hcHBsaWNhdGlvbmdyb3Vwcy5kZXRhaWxzJywgeydrZXknOiBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuYXBwbGljYXRpb25Hcm91cC5rZXl9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gY2FuY2VsRWRpdGluZygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVyblRvQXBwbGljYXRpb25Hcm91cERldGFpbHMoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UnVsZXMoKSB7XHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuYXBwbGljYXRpb25Hcm91cC5wb2xpY2llcy5mb3JFYWNoKGZ1bmN0aW9uIChwb2xpY3kpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL1RvIGRpc3BsYXkgcnVsZXMgb2Ygc2VsZWN0ZWQgcG9saWNpZXNcclxuICAgICAgICAgICAgICAgICAgICBSdWxlc01vZGVsLmdldEluY29taW5nUnVsZXMocG9saWN5LCAnZGVmYXVsdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChydWxlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmluY29taW5nUnVsZXMsIHJ1bGVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgUnVsZXNNb2RlbC5nZXRPdXRnb2luZ1J1bGVzKHBvbGljeSwgJ2RlZmF1bHQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocnVsZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5vdXRnb2luZ1J1bGVzLCBydWxlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBkZWxldGVBcHBsaWNhdGlvbkdyb3VwKCkge1xyXG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCk7XHJcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwpO1xyXG4gICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cHNNb2RlbC5kZWxldGUoYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmFwcGxpY2F0aW9uR3JvdXApLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvQXBwbGljYXRpb25Hcm91cCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCwgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEdldCBwb2xpY2llcyBmb3IgdGhlIGdpdmVuIHRlbmFudC5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldElzb2xhdGlvblBvbGljaWVzKCkge1xyXG4gICAgICAgICAgICAgICAgUG9saWNpZXNNb2RlbC5nZXQoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuaXNvbGF0aW9uUG9saWNpZXMgPSBfLmZpbHRlcihyZXN1bHQsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RlbmFudE5hbWUnOiAnZGVmYXVsdCcvL1RPRE86IFJlbW92ZSBoYXJkY29kZWQgdGVuYW50LlxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEFkZCBwb2xpY3kgdG8gYXBwbGljYXRpb24gZ3JvdXBcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGFkZElzb2xhdGlvblBvbGljeSgpIHtcclxuICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uR3JvdXBTZXJ2aWNlLmFkZElzb2xhdGlvblBvbGljeShhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogUmVtb3ZlIHBvbGljeSBmcm9tIGFwcGxpY2F0aW9uIGdyb3VwXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBmdW5jdGlvbiByZW1vdmVJc29sYXRpb25Qb2xpY3kocG9saWN5TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cFNlcnZpY2UucmVtb3ZlSXNvbGF0aW9uUG9saWN5KGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCwgcG9saWN5TmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNhdmVBcHBsaWNhdGlvbkdyb3VwKCkge1xyXG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCk7XHJcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwpO1xyXG4gICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cHNNb2RlbC5zYXZlKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5hcHBsaWNhdGlvbkdyb3VwKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9BcHBsaWNhdGlvbkdyb3VwRGV0YWlscygpO1xyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCwgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCk7XHJcbiAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwpO1xyXG5cclxuICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cHNNb2RlbC5nZXRNb2RlbEJ5S2V5KCRzdGF0ZVBhcmFtcy5rZXkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZ3JvdXApIHtcclxuICAgICAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuYXBwbGljYXRpb25Hcm91cCA9IGdyb3VwO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vQXBwbGljYXRpb24gR3JvdXBzIG1pZ2h0IG5vdCBoYXZlIGFueSBwb2xpY2llcyBhc3NvY2lhdGVkIHdpdGggdGhlbSBzbyBkZWZpbmUgYW4gZW1wdHkgYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmFwcGxpY2F0aW9uR3JvdXAucG9saWNpZXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuYXBwbGljYXRpb25Hcm91cC5wb2xpY2llcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBnZXRSdWxlcygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBnZXRJc29sYXRpb25Qb2xpY2llcygpO1xyXG5cclxuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLnNhdmVBcHBsaWNhdGlvbkdyb3VwID0gc2F2ZUFwcGxpY2F0aW9uR3JvdXA7XHJcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5jYW5jZWxFZGl0aW5nID0gY2FuY2VsRWRpdGluZztcclxuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmFkZElzb2xhdGlvblBvbGljeSA9IGFkZElzb2xhdGlvblBvbGljeTtcclxuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLnJlbW92ZUlzb2xhdGlvblBvbGljeSA9IHJlbW92ZUlzb2xhdGlvblBvbGljeTtcclxuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmRlbGV0ZUFwcGxpY2F0aW9uR3JvdXAgPSBkZWxldGVBcHBsaWNhdGlvbkdyb3VwO1xyXG5cclxuICAgICAgICAgICAgc2V0TW9kZSgpO1xyXG5cclxuICAgICAgICB9XSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMTEvMTYuXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LmFwcGxpY2F0aW9uZ3JvdXBzJylcclxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuYXBwbGljYXRpb25ncm91cHMubGlzdCcsIHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9saXN0JyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBcHBsaWNhdGlvbkdyb3VwTGlzdEN0cmwgYXMgYXBwbGljYXRpb25Hcm91cExpc3RDdHJsJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwbGljYXRpb25ncm91cHMvYXBwbGljYXRpb25ncm91cGxpc3QuaHRtbCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICA7XHJcbiAgICB9XSlcclxuICAgIC5jb250cm9sbGVyKCdBcHBsaWNhdGlvbkdyb3VwTGlzdEN0cmwnLFxyXG4gICAgICAgIFsnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckZmlsdGVyJywgJ0FwcGxpY2F0aW9uR3JvdXBzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkaW50ZXJ2YWwsICRmaWx0ZXIsIEFwcGxpY2F0aW9uR3JvdXBzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXBwbGljYXRpb25Hcm91cExpc3RDdHJsID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRBcHBsaWNhdGlvbkdyb3VwcyhyZWxvYWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbkdyb3Vwc01vZGVsLmdldChyZWxvYWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoYXBwbGljYXRpb25Hcm91cExpc3RDdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBMaXN0Q3RybC5ncm91cHMgPSAkZmlsdGVyKCdvcmRlckJ5JykocmVzdWx0LCAnZ3JvdXBOYW1lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGFwcGxpY2F0aW9uR3JvdXBMaXN0Q3RybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vTG9hZCBmcm9tIGNhY2hlIGZvciBxdWljayBkaXNwbGF5IGluaXRpYWxseVxyXG4gICAgICAgICAgICAgICAgZ2V0QXBwbGljYXRpb25Hcm91cHMoZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlO1xyXG4gICAgICAgICAgICAgICAgLy9Eb24ndCBzdGFydCBhdXRvLXJlZnJlc2ggaWYgb25lIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3NcclxuICAgICAgICAgICAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQocHJvbWlzZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0QXBwbGljYXRpb25Hcm91cHModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL3N0b3AgcG9sbGluZyB3aGVuIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHByb21pc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1dKTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMTYvMTYuXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LmFwcGxpY2F0aW9uZ3JvdXBzJylcclxuICAgIC5mYWN0b3J5KCdBcHBsaWNhdGlvbkdyb3VwU2VydmljZScsIFsnUnVsZXNNb2RlbCcsIGZ1bmN0aW9uIChSdWxlc01vZGVsKSB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFkZCBwb2xpY3kgdG8gYXBwbGljYXRpb24gZ3JvdXBcclxuICAgICAgICAgKiBAcGFyYW0gYXBwbGljYXRpb25Hcm91cEN0cmwgQ29udHJvbGxlciBmb3IgYXBwbGljYXRpb24gZ3JvdXAgZWRpdCBvciBjcmVhdGUgb3BlcmF0aW9uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkSXNvbGF0aW9uUG9saWN5KGFwcGxpY2F0aW9uR3JvdXBDdHJsKSB7XHJcbiAgICAgICAgICAgIGlmIChfLmZpbmQoYXBwbGljYXRpb25Hcm91cEN0cmwuc2VsZWN0ZWRQb2xpY2llcywgYXBwbGljYXRpb25Hcm91cEN0cmwuc2VsZWN0ZWRQb2xpY3kpID09PSB1bmRlZmluZWQgKSB7XHJcbiAgICAgICAgICAgICAgICAvL1RvIGRpc3BsYXkgc2VsZWN0ZWQgcG9saWNpZXNcclxuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDdHJsLnNlbGVjdGVkUG9saWNpZXMucHVzaChhcHBsaWNhdGlvbkdyb3VwQ3RybC5zZWxlY3RlZFBvbGljeSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9UbyBkaXNwbGF5IHJ1bGVzIG9mIHNlbGVjdGVkIHBvbGljaWVzXHJcbiAgICAgICAgICAgICAgICBSdWxlc01vZGVsLmdldEluY29taW5nUnVsZXMoYXBwbGljYXRpb25Hcm91cEN0cmwuc2VsZWN0ZWRQb2xpY3kucG9saWN5TmFtZSwgJ2RlZmF1bHQnKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChydWxlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcHBsaWNhdGlvbkdyb3VwQ3RybC5pbmNvbWluZ1J1bGVzLCBydWxlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBSdWxlc01vZGVsLmdldE91dGdvaW5nUnVsZXMoYXBwbGljYXRpb25Hcm91cEN0cmwuc2VsZWN0ZWRQb2xpY3kucG9saWN5TmFtZSwgJ2RlZmF1bHQnKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChydWxlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcHBsaWNhdGlvbkdyb3VwQ3RybC5vdXRnb2luZ1J1bGVzLCBydWxlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9UbyBiZSBhZGRlZCB0byBhcHBsaWNhdGlvbiBncm91cCBhbmQgc2F2ZWQgdG8gdGhlIHNlcnZlclxyXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cEN0cmwuYXBwbGljYXRpb25Hcm91cC5wb2xpY2llc1xyXG4gICAgICAgICAgICAgICAgICAgIC5wdXNoKGFwcGxpY2F0aW9uR3JvdXBDdHJsLnNlbGVjdGVkUG9saWN5LnBvbGljeU5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZW1vdmUgcG9saWN5IGZyb20gYXBwbGljYXRpb24gZ3JvdXBcclxuICAgICAgICAgKiBAcGFyYW0gYXBwbGljYXRpb25Hcm91cEN0cmwgQ29udHJvbGxlciBmb3IgYXBwbGljYXRpb24gZ3JvdXAgZWRpdCBvciBjcmVhdGUgb3BlcmF0aW9uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlSXNvbGF0aW9uUG9saWN5KGFwcGxpY2F0aW9uR3JvdXBDdHJsLCBwb2xpY3lOYW1lKSB7XHJcbiAgICAgICAgICAgIF8ucmVtb3ZlKGFwcGxpY2F0aW9uR3JvdXBDdHJsLmFwcGxpY2F0aW9uR3JvdXAucG9saWNpZXMsIGZ1bmN0aW9uIChwb2xpY3kpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwb2xpY3kgPT0gcG9saWN5TmFtZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIF8ucmVtb3ZlKGFwcGxpY2F0aW9uR3JvdXBDdHJsLmluY29taW5nUnVsZXMsIGZ1bmN0aW9uIChydWxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcnVsZS5wb2xpY3lOYW1lID09IHBvbGljeU5hbWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBfLnJlbW92ZShhcHBsaWNhdGlvbkdyb3VwQ3RybC5vdXRnb2luZ1J1bGVzLCBmdW5jdGlvbiAocnVsZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJ1bGUucG9saWN5TmFtZSA9PSBwb2xpY3lOYW1lO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGFkZElzb2xhdGlvblBvbGljeTogYWRkSXNvbGF0aW9uUG9saWN5LFxyXG4gICAgICAgICAgICByZW1vdmVJc29sYXRpb25Qb2xpY3k6IHJlbW92ZUlzb2xhdGlvblBvbGljeVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMTEvMTYuXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LmRhc2hib2FyZCcpXHJcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcclxuICAgICAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LmRhc2hib2FyZCcsIHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9kYXNoYm9hcmQnLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0Rhc2hib2FyZEN0cmwgYXMgZGFzaGJvYXJkQ3RybCcsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2Rhc2hib2FyZC9kYXNoYm9hcmQuaHRtbCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XSlcclxuICAgIC5jb250cm9sbGVyKCdEYXNoYm9hcmRDdHJsJyxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICckc2NvcGUnLFxyXG4gICAgICAgICAgICAnJGludGVydmFsJyxcclxuICAgICAgICAgICAgJ05vZGVzTW9kZWwnLFxyXG4gICAgICAgICAgICAnTmV0d29ya3NNb2RlbCcsXHJcbiAgICAgICAgICAgICdWb2x1bWVzTW9kZWwnLFxyXG4gICAgICAgICAgICAnQXBwbGljYXRpb25Hcm91cHNNb2RlbCcsXHJcbiAgICAgICAgICAgICdQb2xpY2llc01vZGVsJyxcclxuICAgICAgICAgICAgJ1N0b3JhZ2VQb2xpY2llc01vZGVsJyxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCRzY29wZSxcclxuICAgICAgICAgICAgICAgICAgICAgICRpbnRlcnZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgIE5vZGVzTW9kZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICBOZXR3b3Jrc01vZGVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgVm9sdW1lc01vZGVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cHNNb2RlbCxcclxuICAgICAgICAgICAgICAgICAgICAgIFBvbGljaWVzTW9kZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICBTdG9yYWdlUG9saWNpZXNNb2RlbCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhc2hib2FyZEN0cmwgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldERhc2hib2FyZEluZm8ocmVsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTm9kZXNNb2RlbC5nZXQocmVsb2FkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXNoYm9hcmRDdHJsLm5vZGVzID0gcmVzdWx0Lmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgTmV0d29ya3NNb2RlbC5nZXQocmVsb2FkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXNoYm9hcmRDdHJsLm5ldHdvcmtzID0gcmVzdWx0Lmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgVm9sdW1lc01vZGVsLmdldChyZWxvYWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhc2hib2FyZEN0cmwudm9sdW1lcyA9IHJlc3VsdC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uR3JvdXBzTW9kZWwuZ2V0KHJlbG9hZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFzaGJvYXJkQ3RybC5ncm91cHMgPSByZXN1bHQubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBQb2xpY2llc01vZGVsLmdldChyZWxvYWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhc2hib2FyZEN0cmwubmV0d29ya3BvbGljaWVzID0gcmVzdWx0Lmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgU3RvcmFnZVBvbGljaWVzTW9kZWwuZ2V0KHJlbG9hZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFzaGJvYXJkQ3RybC5zdG9yYWdlcG9saWNpZXMgPSByZXN1bHQubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL1dpbGwgZGlzcGxheSAwIGlmIHRoZXJlIGlzIGVycm9yIGZldGNoaW5nIGRhdGFcclxuICAgICAgICAgICAgICAgIGRhc2hib2FyZEN0cmwubm9kZXMgPSAwO1xyXG4gICAgICAgICAgICAgICAgZGFzaGJvYXJkQ3RybC5uZXR3b3JrcyA9IDA7XHJcbiAgICAgICAgICAgICAgICBkYXNoYm9hcmRDdHJsLnZvbHVtZXMgPSAwO1xyXG4gICAgICAgICAgICAgICAgZGFzaGJvYXJkQ3RybC5ncm91cHMgPSAwO1xyXG4gICAgICAgICAgICAgICAgZGFzaGJvYXJkQ3RybC5uZXR3b3JrcG9saWNpZXMgPSAwO1xyXG4gICAgICAgICAgICAgICAgZGFzaGJvYXJkQ3RybC5zdG9yYWdlcG9saWNpZXMgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vTG9hZCBmcm9tIGNhY2hlIGZvciBxdWljayBkaXNwbGF5IGluaXRpYWxseVxyXG4gICAgICAgICAgICAgICAgZ2V0RGFzaGJvYXJkSW5mbyhmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdldERhc2hib2FyZEluZm8odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9LCA1MDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3N0b3AgcG9sbGluZyB3aGVuIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHByb21pc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1dKTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTkvMTYuXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LmxvZ2luJylcclxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2LmxvZ2luJywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnLycsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2xvZ2luL2xvZ2luLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0xvZ2luQ3RybCBhcyBsb2dpbkN0cmwnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgO1xyXG4gICAgfV0pXHJcbiAgICAuY29udHJvbGxlcignTG9naW5DdHJsJywgWyckc3RhdGUnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxyXG4gICAgICAgIGZ1bmN0aW9uICgkc3RhdGUsIENSVURIZWxwZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgICAgIHZhciBsb2dpbkN0cmwgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9EYXNoYm9hcmQoKSB7XHJcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51LmRhc2hib2FyZCcsIHt1c2VybmFtZTogbG9naW5DdHJsLnVzZXJuYW1lfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGxvZ2luKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuVG9EYXNoYm9hcmQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihsb2dpbkN0cmwpO1xyXG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IobG9naW5DdHJsKTtcclxuICAgICAgICAgICAgbG9naW5DdHJsLmxvZ2luID0gbG9naW47XHJcblxyXG4gICAgICAgIH1dKTsiLCIvKipcclxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xOS8xNi5cclxuICovXHJcbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubWVudScpXHJcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcclxuICAgICAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Jywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL20nLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtZW51L21lbnUuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTWVudUN0cmwgYXMgbWVudUN0cmwnLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7dXNlcm5hbWU6IG51bGx9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgO1xyXG4gICAgfV0pXHJcbiAgICAuY29udHJvbGxlcignTWVudUN0cmwnLCBbJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbWVudUN0cmwgPSB0aGlzO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBsb2dvdXQoKSB7XHJcbiAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2LmxvZ2luJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZW51Q3RybC51c2VybmFtZSA9ICRzdGF0ZVBhcmFtcy51c2VybmFtZTtcclxuICAgICAgICBtZW51Q3RybC5sb2dvdXQgPSBsb2dvdXQ7XHJcblxyXG4gICAgfV0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAyLzE5LzE2LlxyXG4gKi9cclxuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5uZXR3b3JrcycpXHJcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcclxuICAgICAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5ldHdvcmtzLmNyZWF0ZScsIHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9jcmVhdGUnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICduZXR3b3Jrcy9uZXR3b3JrY3JlYXRlLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05ldHdvcmtDcmVhdGVDdHJsIGFzIG5ldHdvcmtDcmVhdGVDdHJsJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIDtcclxuICAgIH1dKVxyXG4gICAgLmNvbnRyb2xsZXIoJ05ldHdvcmtDcmVhdGVDdHJsJywgWyckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ05ldHdvcmtzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxyXG4gICAgICAgIGZ1bmN0aW9uICgkc3RhdGUsICRzdGF0ZVBhcmFtcywgTmV0d29ya3NNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcclxuICAgICAgICAgICAgdmFyIG5ldHdvcmtDcmVhdGVDdHJsID0gdGhpcztcclxuICAgICAgICAgICAgbmV0d29ya0NyZWF0ZUN0cmwuY2lkclBhdHRlcm4gPSBDb250aXZHbG9iYWxzLkNJRFJfUkVHRVg7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub05ldHdvcmtzKCkge1xyXG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5uZXR3b3Jrcy5saXN0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNhbmNlbENyZWF0aW5nKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuVG9OZXR3b3JrcygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVOZXR3b3JrKCkge1xyXG4gICAgICAgICAgICAgICAgLy9mb3JtIGNvbnRyb2xsZXIgaXMgaW5qZWN0ZWQgYnkgdGhlIGh0bWwgdGVtcGxhdGVcclxuICAgICAgICAgICAgICAgIC8vY2hlY2tpbmcgaWYgYWxsIHZhbGlkYXRpb25zIGhhdmUgcGFzc2VkXHJcbiAgICAgICAgICAgICAgICBpZiAobmV0d29ya0NyZWF0ZUN0cmwuZm9ybS4kdmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IobmV0d29ya0NyZWF0ZUN0cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKG5ldHdvcmtDcmVhdGVDdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXR3b3JrQ3JlYXRlQ3RybC5uZXdOZXR3b3JrLmtleSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcmtDcmVhdGVDdHJsLm5ld05ldHdvcmsudGVuYW50TmFtZSArICc6JyArIG5ldHdvcmtDcmVhdGVDdHJsLm5ld05ldHdvcmsubmV0d29ya05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgTmV0d29ya3NNb2RlbC5jcmVhdGUobmV0d29ya0NyZWF0ZUN0cmwubmV3TmV0d29yaykudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobmV0d29ya0NyZWF0ZUN0cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub05ldHdvcmtzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihuZXR3b3JrQ3JlYXRlQ3RybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihuZXR3b3JrQ3JlYXRlQ3RybCwgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcclxuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobmV0d29ya0NyZWF0ZUN0cmwpO1xyXG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKG5ldHdvcmtDcmVhdGVDdHJsKTtcclxuICAgICAgICAgICAgICAgIG5ldHdvcmtDcmVhdGVDdHJsLm5ld05ldHdvcmsgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV0d29ya05hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuY2FwOiAndnhsYW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Ym5ldDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgZ2F0ZXdheTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGVuYW50TmFtZTogJ2RlZmF1bHQnLy9UT0RPOiBSZW1vdmUgaGFyZGNvZGVkIHRlbmFudC5cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5ldHdvcmtDcmVhdGVDdHJsLmNyZWF0ZU5ldHdvcmsgPSBjcmVhdGVOZXR3b3JrO1xyXG4gICAgICAgICAgICBuZXR3b3JrQ3JlYXRlQ3RybC5jYW5jZWxDcmVhdGluZyA9IGNhbmNlbENyZWF0aW5nO1xyXG5cclxuICAgICAgICAgICAgcmVzZXRGb3JtKCk7XHJcbiAgICAgICAgfV0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2Lm5ldHdvcmtzJylcclxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3MuZGV0YWlscycsIHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9kZXRhaWxzLzprZXknLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05ldHdvcmtEZXRhaWxzQ3RybCBhcyBuZXR3b3JrRGV0YWlsc0N0cmwnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICduZXR3b3Jrcy9uZXR3b3JrZGV0YWlscy5odG1sJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1dKVxyXG4gICAgLmNvbnRyb2xsZXIoJ05ldHdvcmtEZXRhaWxzQ3RybCcsXHJcbiAgICAgICAgWyckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJGZpbHRlcicsICdOZXR3b3Jrc01vZGVsJywgJ0FwcGxpY2F0aW9uR3JvdXBzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsICRzY29wZSwgJGludGVydmFsLCAkZmlsdGVyLCBOZXR3b3Jrc01vZGVsLCBBcHBsaWNhdGlvbkdyb3Vwc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5ldHdvcmtEZXRhaWxzQ3RybCA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9OZXR3b3JrcygpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51Lm5ldHdvcmtzLmxpc3QnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkZWxldGVOZXR3b3JrKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihuZXR3b3JrRGV0YWlsc0N0cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKG5ldHdvcmtEZXRhaWxzQ3RybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgTmV0d29ya3NNb2RlbC5kZWxldGUobmV0d29ya0RldGFpbHNDdHJsLm5ldHdvcmspLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5ldHdvcmtEZXRhaWxzQ3RybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvTmV0d29ya3MoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5ldHdvcmtEZXRhaWxzQ3RybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihuZXR3b3JrRGV0YWlsc0N0cmwsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBHZXQgYXBwbGljYXRpb24gZ3JvdXBzIGJlbG9uZ2luZyB0byBhIG5ldHdvcmtcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0QXBwbGljYXRpb25Hcm91cHMocmVsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cHNNb2RlbC5nZXQocmVsb2FkKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29ya0RldGFpbHNDdHJsLmFwcGxpY2F0aW9uR3JvdXBzID0gJGZpbHRlcignb3JkZXJCeScpKF8uZmlsdGVyKHJlc3VsdCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25ldHdvcmtOYW1lJzogbmV0d29ya0RldGFpbHNDdHJsLm5ldHdvcmsubmV0d29ya05hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSksICdncm91cE5hbWUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5ldHdvcmtEZXRhaWxzQ3RybCk7XHJcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IobmV0d29ya0RldGFpbHNDdHJsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBOZXR3b3Jrc01vZGVsLmdldE1vZGVsQnlLZXkoJHN0YXRlUGFyYW1zLmtleSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAobmV0d29yaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXR3b3JrRGV0YWlsc0N0cmwubmV0d29yayA9IG5ldHdvcms7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldEFwcGxpY2F0aW9uR3JvdXBzKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBuZXR3b3JrRGV0YWlsc0N0cmwuZGVsZXRlTmV0d29yayA9IGRlbGV0ZU5ldHdvcms7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2U7XHJcbiAgICAgICAgICAgICAgICAvL0Rvbid0IGRvIGF1dG9yZWZyZXNoIGlmIG9uZSBpcyBhbHJlYWR5IGluIHByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICBpZiAoIWFuZ3VsYXIuaXNEZWZpbmVkKHByb21pc2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9ICRpbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldEFwcGxpY2F0aW9uR3JvdXBzKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIENvbnRpdkdsb2JhbHMuUkVGUkVTSF9JTlRFUlZBTCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9zdG9wIHBvbGxpbmcgd2hlbiB1c2VyIG1vdmVzIGF3YXkgZnJvbSB0aGUgcGFnZVxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGludGVydmFsLmNhbmNlbChwcm9taXNlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdjb250aXYubmV0d29ya3MnKVxyXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3Jrcy5saXN0Jywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2xpc3QnLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05ldHdvcmtzTGlzdEN0cmwgYXMgbmV0d29ya3NMaXN0Q3RybCcsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25ldHdvcmtzL25ldHdvcmtsaXN0Lmh0bWwnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgO1xyXG4gICAgfV0pXHJcbiAgICAuY29udHJvbGxlcignTmV0d29ya3NMaXN0Q3RybCcsIFsnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckZmlsdGVyJywgJ05ldHdvcmtzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxyXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICRpbnRlcnZhbCwgJGZpbHRlciwgTmV0d29ya3NNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcclxuICAgICAgICAgICAgdmFyIG5ldHdvcmtzTGlzdEN0cmwgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0TmV0d29ya3MocmVsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICBOZXR3b3Jrc01vZGVsLmdldChyZWxvYWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihuZXR3b3Jrc0xpc3RDdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcmtzTGlzdEN0cmwubmV0d29ya3MgPSAkZmlsdGVyKCdvcmRlckJ5JykocmVzdWx0LCAnbmV0d29ya05hbWUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobmV0d29ya3NMaXN0Q3RybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL0xvYWQgZnJvbSBjYWNoZSBmb3IgcXVpY2sgZGlzcGxheSBpbml0aWFsbHlcclxuICAgICAgICAgICAgZ2V0TmV0d29ya3MoZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHByb21pc2U7XHJcbiAgICAgICAgICAgIC8vRG9uJ3QgZG8gYXV0b3JlZnJlc2ggaWYgb25lIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3NcclxuICAgICAgICAgICAgaWYgKCFhbmd1bGFyLmlzRGVmaW5lZChwcm9taXNlKSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZSA9ICRpbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0TmV0d29ya3ModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9LCBDb250aXZHbG9iYWxzLlJFRlJFU0hfSU5URVJWQUwpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL3N0b3AgcG9sbGluZyB3aGVuIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXHJcbiAgICAgICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJGludGVydmFsLmNhbmNlbChwcm9taXNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfV0pO1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gMy8xMC8xNi5cclxuICovXHJcbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubmV0d29ya3BvbGljaWVzJylcclxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzLmlzb2xhdGlvbi5jcmVhdGUnLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvY3JlYXRlJyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdJc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsIGFzIGlzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICduZXR3b3JrX3BvbGljaWVzL2lzb2xhdGlvbnBvbGljeWNyZWF0ZS5odG1sJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIDtcclxuICAgIH1dKVxyXG4gICAgLmNvbnRyb2xsZXIoJ0lzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwnLCBbJyRzdGF0ZScsICdQb2xpY2llc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcclxuICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCBQb2xpY2llc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xyXG4gICAgICAgIHZhciBpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsID0gdGhpcztcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9Qb2xpY2llcygpIHtcclxuICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMuaXNvbGF0aW9uLmxpc3QnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNhbmNlbENyZWF0aW5nKCkge1xyXG4gICAgICAgICAgICByZXR1cm5Ub1BvbGljaWVzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQb2xpY3koKSB7XHJcbiAgICAgICAgICAgIGlmIChpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsLmZvcm0uJHZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IoaXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybCk7XHJcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsKTtcclxuICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwubmV3UG9saWN5LmtleSA9XHJcbiAgICAgICAgICAgICAgICAgICAgUG9saWNpZXNNb2RlbC5nZW5lcmF0ZUtleShpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsLm5ld1BvbGljeSk7XHJcbiAgICAgICAgICAgICAgICBQb2xpY2llc01vZGVsLmNyZWF0ZShpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsLm5ld1BvbGljeSkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub1BvbGljaWVzKCk7XHJcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoaXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGlzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xyXG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGlzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwpO1xyXG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IoaXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybCk7XHJcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwubmV3UG9saWN5ID0ge1xyXG4gICAgICAgICAgICAgICAgcG9saWN5TmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICB0ZW5hbnROYW1lOiAnZGVmYXVsdCcvL1RPRE86IFJlbW92ZSBoYXJkY29kZWQgdGVuYW50LlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybC5jcmVhdGVQb2xpY3kgPSBjcmVhdGVQb2xpY3k7XHJcbiAgICAgICAgaXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybC5jYW5jZWxDcmVhdGluZyA9IGNhbmNlbENyZWF0aW5nO1xyXG5cclxuICAgICAgICByZXNldEZvcm0oKTtcclxuICAgIH1dKTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvOC8xNi5cclxuICovXHJcbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubmV0d29ya3BvbGljaWVzJylcclxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzLmlzb2xhdGlvbi5kZXRhaWxzJywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2RldGFpbHMvOmtleScsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwgYXMgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICduZXR3b3JrX3BvbGljaWVzL2lzb2xhdGlvbnBvbGljeWRldGFpbHMuaHRtbCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XSlcclxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzLmlzb2xhdGlvbi5lZGl0Jywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2VkaXQvOmtleScsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwgYXMgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICduZXR3b3JrX3BvbGljaWVzL2lzb2xhdGlvbnBvbGljeWRldGFpbHMuaHRtbCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XSlcclxuICAgIC5jb250cm9sbGVyKCdJc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCcsIFtcclxuICAgICAgICAnJHN0YXRlJyxcclxuICAgICAgICAnJHN0YXRlUGFyYW1zJyxcclxuICAgICAgICAnUG9saWNpZXNNb2RlbCcsXHJcbiAgICAgICAgJ1J1bGVzTW9kZWwnLFxyXG4gICAgICAgICdOZXR3b3Jrc01vZGVsJyxcclxuICAgICAgICAnQXBwbGljYXRpb25Hcm91cHNNb2RlbCcsXHJcbiAgICAgICAgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcclxuICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsIFBvbGljaWVzTW9kZWwsIFJ1bGVzTW9kZWwsIE5ldHdvcmtzTW9kZWwsIEFwcGxpY2F0aW9uR3JvdXBzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgICAgIHZhciBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCA9IHRoaXM7XHJcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ldHdvcmtzID0gW107XHJcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmFwcGxpY2F0aW9uR3JvdXBzID0gW107XHJcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRpc2FibGVPdXRnb2luZ05ldHdvcmtTZWxlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZUluY29taW5nTmV0d29ya1NlbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlT3V0Z29pbmdBcHBsaWNhdGlvbkdyb3VwU2VsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRpc2FibGVJbmNvbWluZ0FwcGxpY2F0aW9uR3JvdXBTZWxlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3SW5jb21pbmdTZWxlY3RlZEFwcGxpY2F0aW9uR3JvdXAgPSAnJztcclxuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3T3V0Z29pbmdTZWxlY3RlZEFwcGxpY2F0aW9uR3JvdXAgPSAnJztcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvUG9saWNpZXMoKSB7XHJcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51Lm5ldHdvcmtwb2xpY2llcy5pc29sYXRpb24ubGlzdCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub1BvbGljeURldGFpbHMoKSB7XHJcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51Lm5ldHdvcmtwb2xpY2llcy5pc29sYXRpb24uZGV0YWlscycsIHtrZXk6IGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLnBvbGljeS5rZXl9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gY2FuY2VsRWRpdGluZygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVyblRvUG9saWN5RGV0YWlscygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogR28gYmFjayB0byBwb2xpY3kgZGV0YWlscyBhZnRlciBkb25lIGVkaXRpbmdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRvbmVFZGl0aW5nKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuVG9Qb2xpY3lEZXRhaWxzKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRlbGV0ZVBvbGljeSgpIHtcclxuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XHJcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XHJcbiAgICAgICAgICAgICAgICBQb2xpY2llc01vZGVsLmRlbGV0ZShpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5wb2xpY3kpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblRvUG9saWNpZXMoKTtcclxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBUbyBzaG93IGVkaXQgb3IgZGV0YWlscyBzY3JlZW4gYmFzZWQgb24gdGhlIHJvdXRlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXRNb2RlKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCRzdGF0ZS5pcygnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzLmlzb2xhdGlvbi5lZGl0JykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5tb2RlID0gJ2VkaXQnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5tb2RlID0gJ2RldGFpbHMnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZXNldE5ld0luY29taW5nUnVsZSgpIHtcclxuICAgICAgICAgICAgICAgIC8vUnVsZSBvYmplY3QgdG8gYmUgY3JlYXRlZCBvbiBzZXJ2ZXJcclxuICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld0luY29taW5nUnVsZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBydWxlSWQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ2FsbG93JywvL3RvIG1ha2UgaXQgZGVmYXVsdCBzZWxlY3RlZCBvcHRpb24gaW4gVUlcclxuICAgICAgICAgICAgICAgICAgICBmcm9tRW5kcG9pbnRHcm91cDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbU5ldHdvcms6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZyb21JUEFkZHJlc3M6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3RvY29sOiAndGNwJywvL3RvIG1ha2UgaXQgZGVmYXVsdCBzZWxlY3RlZCBvcHRpb24gaW4gVUlcclxuICAgICAgICAgICAgICAgICAgICBwb3J0OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGVuYW50TmFtZTogJ2RlZmF1bHQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvbGljeU5hbWU6IGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLnBvbGljeS5wb2xpY3lOYW1lXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3SW5jb21pbmdTZWxlY3RlZEFwcGxpY2F0aW9uR3JvdXAgPSAnJztcclxuICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRpc2FibGVJbmNvbWluZ05ldHdvcmtTZWxlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRpc2FibGVJbmNvbWluZ0FwcGxpY2F0aW9uR3JvdXBTZWxlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVzZXROZXdPdXRnb2luZ1J1bGUoKSB7XHJcbiAgICAgICAgICAgICAgICAvL1J1bGUgb2JqZWN0IHRvIGJlIGNyZWF0ZWQgb24gc2VydmVyXHJcbiAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdPdXRnb2luZ1J1bGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZUlkOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogMSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdhbGxvdycsLy90byBtYWtlIGl0IGRlZmF1bHQgc2VsZWN0ZWQgb3B0aW9uIGluIFVJXHJcbiAgICAgICAgICAgICAgICAgICAgdG9FbmRwb2ludEdyb3VwOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB0b05ldHdvcms6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvSVBBZGRyZXNzOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwcm90b2NvbDogJ3RjcCcsLy90byBtYWtlIGl0IGRlZmF1bHQgc2VsZWN0ZWQgb3B0aW9uIGluIFVJXHJcbiAgICAgICAgICAgICAgICAgICAgcG9ydDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICB0ZW5hbnROYW1lOiAnZGVmYXVsdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9saWN5TmFtZTogaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwucG9saWN5LnBvbGljeU5hbWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdPdXRnb2luZ1NlbGVjdGVkQXBwbGljYXRpb25Hcm91cCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZU91dGdvaW5nTmV0d29ya1NlbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZU91dGdvaW5nQXBwbGljYXRpb25Hcm91cFNlbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogR2V0IG5ldHdvcmsgbmFtZXMgZm9yIHRoZSBnaXZlbiB0ZW5hbnQuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXROZXR3b3JrcygpIHtcclxuICAgICAgICAgICAgICAgIE5ldHdvcmtzTW9kZWwuZ2V0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9fLmZpbHRlcigpIHJldHVybnMgYSBuZXcgYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXR3b3JrcyA9IF8uZmlsdGVyKHJlc3VsdCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAndGVuYW50TmFtZSc6ICdkZWZhdWx0Jy8vVE9ETzogUmVtb3ZlIGhhcmRjb2RlZCB0ZW5hbnQuXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEdldCBhcHBsaWNhdGlvbiBncm91cCBuYW1lcyBmb3IgdGhlIGdpdmVuIHRlbmFudC5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEFwcGxpY2F0aW9uR3JvdXBzKCkge1xyXG4gICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cHNNb2RlbC5nZXQoKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9fLmZpbHRlcigpIHJldHVybnMgYSBuZXcgYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuYXBwbGljYXRpb25Hcm91cHMgPSBfLmZpbHRlcihyZXN1bHQsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZW5hbnROYW1lJzogJ2RlZmF1bHQnLy9UT0RPOiBSZW1vdmUgaGFyZGNvZGVkIHRlbmFudC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBFdmVudCBoYW5kbGVyIHRvIGRpc2FibGUgbmV0d29yayBzZWxlY3Rpb24gYm94IG9uY2UgYXBwbGljYXRpb24gZ3JvdXAgaXMgc2VsZWN0ZWQgd2hpbGUgY3JlYXRpbmcgYSBuZXdcclxuICAgICAgICAgICAgICogcnVsZS5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uQ2hhbmdlT3V0Z29pbmdBcHBsaWNhdGlvbkdyb3VwU2VsZWN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld091dGdvaW5nU2VsZWN0ZWRBcHBsaWNhdGlvbkdyb3VwICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL0lmIGFwcGxpY2F0aW9uIGdyb3VwIGhhcyBiZWVuIHNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3T3V0Z29pbmdSdWxlLnRvRW5kcG9pbnRHcm91cCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld091dGdvaW5nU2VsZWN0ZWRBcHBsaWNhdGlvbkdyb3VwLmdyb3VwTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdPdXRnb2luZ1J1bGUudG9OZXR3b3JrID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZU91dGdvaW5nTmV0d29ya1NlbGVjdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vV2hlbiAnbm9uZScgaXMgc2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdPdXRnb2luZ1J1bGUudG9FbmRwb2ludEdyb3VwID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZU91dGdvaW5nTmV0d29ya1NlbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRXZlbnQgaGFuZGxlciB0byBkaXNhYmxlIG5ldHdvcmsgc2VsZWN0aW9uIGJveCBvbmNlIGFwcGxpY2F0aW9uIGdyb3VwIGlzIHNlbGVjdGVkIHdoaWxlIGNyZWF0aW5nIGEgbmV3XHJcbiAgICAgICAgICAgICAqIHJ1bGUuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBvbkNoYW5nZUluY29taW5nQXBwbGljYXRpb25Hcm91cFNlbGVjdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdJbmNvbWluZ1NlbGVjdGVkQXBwbGljYXRpb25Hcm91cCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9JZiBhcHBsaWNhdGlvbiBncm91cCBoYXMgYmVlbiBzZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld0luY29taW5nUnVsZS5mcm9tRW5kcG9pbnRHcm91cCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld0luY29taW5nU2VsZWN0ZWRBcHBsaWNhdGlvbkdyb3VwLmdyb3VwTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdJbmNvbWluZ1J1bGUuZnJvbU5ldHdvcmsgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlSW5jb21pbmdOZXR3b3JrU2VsZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9XaGVuICdub25lJyBpcyBzZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld0luY29taW5nUnVsZS5mcm9tRW5kcG9pbnRHcm91cCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRpc2FibGVJbmNvbWluZ05ldHdvcmtTZWxlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBFdmVudCBoYW5kbGVyIHRvIGRpc2FibGUgYXBwbGljYXRpb24gZ3JvdXAgc2VsZWN0aW9uIGJveCBvbmNlIG5ldHdvcmsgaXMgc2VsZWN0ZWQgd2hpbGUgY3JlYXRpbmcgYSBuZXdcclxuICAgICAgICAgICAgICogcnVsZS5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uQ2hhbmdlT3V0Z29pbmdOZXR3b3JrU2VsZWN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld091dGdvaW5nUnVsZS50b05ldHdvcmsgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vSWYgbmV0d29yayBoYXMgYmVlbiBzZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld091dGdvaW5nUnVsZS5Ub0VuZHBvaW50R3JvdXAgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlT3V0Z29pbmdBcHBsaWNhdGlvbkdyb3VwU2VsZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZU91dGdvaW5nQXBwbGljYXRpb25Hcm91cFNlbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRXZlbnQgaGFuZGxlciB0byBkaXNhYmxlIGFwcGxpY2F0aW9uIGdyb3VwIHNlbGVjdGlvbiBib3ggb25jZSBuZXR3b3JrIGlzIHNlbGVjdGVkIHdoaWxlIGNyZWF0aW5nIGEgbmV3XHJcbiAgICAgICAgICAgICAqIHJ1bGUuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBvbkNoYW5nZUluY29taW5nTmV0d29ya1NlbGVjdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdJbmNvbWluZ1J1bGUuZnJvbU5ldHdvcmsgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vSWYgbmV0d29yayBoYXMgYmVlbiBzZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld0luY29taW5nUnVsZS5mcm9tRW5kcG9pbnRHcm91cCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRpc2FibGVJbmNvbWluZ0FwcGxpY2F0aW9uR3JvdXBTZWxlY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlSW5jb21pbmdBcHBsaWNhdGlvbkdyb3VwU2VsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEdlbmVyYXRlcyBydWxlIGlkXHJcbiAgICAgICAgICAgICAqIFRPRE8gTWFrZSBpdCBjcnlwdG9ncmFwaGljYWxseSBzdHJvbmdlciBvbmNlIHdlIGhhdmUgbXVsdGlwbGUgdXNlcnMgdXBkYXRpbmcgc2FtZSBwb2xpY3lcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlUnVsZUlkKHJ1bGUpIHtcclxuICAgICAgICAgICAgICAgIHJ1bGUucnVsZUlkID1cclxuICAgICAgICAgICAgICAgICAgICAoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuaW5jb21pbmdSdWxlcy5sZW5ndGggKyBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5vdXRnb2luZ1J1bGVzLmxlbmd0aCArIDEpLnRvU3RyaW5nKCkgKyAnLScgK1xyXG4gICAgICAgICAgICAgICAgICAgIERhdGUubm93KCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFJ1bGUgaXMgc2F2ZWQgdG8gc2VydmVyXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBhZGRJbmNvbWluZ1J1bGUoKSB7XHJcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xyXG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xyXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVSdWxlSWQoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3SW5jb21pbmdSdWxlKTtcclxuICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld0luY29taW5nUnVsZS5rZXkgPSBSdWxlc01vZGVsLmdlbmVyYXRlS2V5KGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld0luY29taW5nUnVsZSk7XHJcbiAgICAgICAgICAgICAgICBSdWxlc01vZGVsLmNyZWF0ZShpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdJbmNvbWluZ1J1bGUpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmluY29taW5nUnVsZXMucHVzaChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc2V0TmV3SW5jb21pbmdSdWxlKCk7XHJcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCwgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogUnVsZSBpcyBzYXZlZCB0byBzZXJ2ZXJcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGFkZE91dGdvaW5nUnVsZSgpIHtcclxuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XHJcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XHJcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZVJ1bGVJZChpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdPdXRnb2luZ1J1bGUpO1xyXG4gICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3T3V0Z29pbmdSdWxlLmtleSA9IFJ1bGVzTW9kZWwuZ2VuZXJhdGVLZXkoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3T3V0Z29pbmdSdWxlKTtcclxuICAgICAgICAgICAgICAgIFJ1bGVzTW9kZWwuY3JlYXRlKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld091dGdvaW5nUnVsZSkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwub3V0Z29pbmdSdWxlcy5wdXNoKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzZXROZXdPdXRnb2luZ1J1bGUoKTtcclxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBEZWxldGUgaW5jb21pbmcgcnVsZSBmcm9tIHNlcnZlclxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZnVuY3Rpb24gZGVsZXRlSW5jb21pbmdSdWxlKGtleSkge1xyXG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcclxuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcclxuICAgICAgICAgICAgICAgIFJ1bGVzTW9kZWwuZGVsZXRlVXNpbmdLZXkoa2V5KS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnJlbW92ZShpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5pbmNvbWluZ1J1bGVzLCBmdW5jdGlvbiAobikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbi5rZXkgPT0ga2V5O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIERlbGV0ZSBvdXRnb2luZyBydWxlIGZyb20gc2VydmVyXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBkZWxldGVPdXRnb2luZ1J1bGUoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xyXG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xyXG4gICAgICAgICAgICAgICAgUnVsZXNNb2RlbC5kZWxldGVVc2luZ0tleShrZXkpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8ucmVtb3ZlKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm91dGdvaW5nUnVsZXMsIGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuLmtleSA9PSBrZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCwgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcclxuICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcclxuXHJcbiAgICAgICAgICAgIFBvbGljaWVzTW9kZWwuZ2V0TW9kZWxCeUtleSgkc3RhdGVQYXJhbXMua2V5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHBvbGljeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLnBvbGljeSA9IHBvbGljeTtcclxuICAgICAgICAgICAgICAgICAgICBSdWxlc01vZGVsLmdldEluY29taW5nUnVsZXMocG9saWN5LnBvbGljeU5hbWUsICdkZWZhdWx0JykudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmluY29taW5nUnVsZXMgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0TmV3SW5jb21pbmdSdWxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgUnVsZXNNb2RlbC5nZXRPdXRnb2luZ1J1bGVzKHBvbGljeS5wb2xpY3lOYW1lLCAnZGVmYXVsdCcpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5vdXRnb2luZ1J1bGVzID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNldE5ld091dGdvaW5nUnVsZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBnZXROZXR3b3JrcygpO1xyXG4gICAgICAgICAgICBnZXRBcHBsaWNhdGlvbkdyb3VwcygpO1xyXG4gICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kZWxldGVQb2xpY3kgPSBkZWxldGVQb2xpY3k7XHJcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRlbGV0ZUluY29taW5nUnVsZSA9IGRlbGV0ZUluY29taW5nUnVsZTtcclxuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGVsZXRlT3V0Z29pbmdSdWxlID0gZGVsZXRlT3V0Z29pbmdSdWxlO1xyXG4gICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5hZGRJbmNvbWluZ1J1bGUgPSBhZGRJbmNvbWluZ1J1bGU7XHJcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmFkZE91dGdvaW5nUnVsZSA9IGFkZE91dGdvaW5nUnVsZTtcclxuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZG9uZUVkaXRpbmcgPSBkb25lRWRpdGluZztcclxuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuY2FuY2VsRWRpdGluZyA9IGNhbmNlbEVkaXRpbmc7XHJcbiAgICAgICAgICAgIC8vRXZlbnQgSGFuZGxlcnNcclxuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwub25DaGFuZ2VPdXRnb2luZ0FwcGxpY2F0aW9uR3JvdXBTZWxlY3Rpb24gPSBvbkNoYW5nZU91dGdvaW5nQXBwbGljYXRpb25Hcm91cFNlbGVjdGlvbjtcclxuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwub25DaGFuZ2VJbmNvbWluZ0FwcGxpY2F0aW9uR3JvdXBTZWxlY3Rpb24gPSBvbkNoYW5nZUluY29taW5nQXBwbGljYXRpb25Hcm91cFNlbGVjdGlvbjtcclxuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwub25DaGFuZ2VPdXRnb2luZ05ldHdvcmtTZWxlY3Rpb24gPSBvbkNoYW5nZU91dGdvaW5nTmV0d29ya1NlbGVjdGlvbjtcclxuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwub25DaGFuZ2VJbmNvbWluZ05ldHdvcmtTZWxlY3Rpb24gPSBvbkNoYW5nZUluY29taW5nTmV0d29ya1NlbGVjdGlvbjtcclxuXHJcbiAgICAgICAgICAgIHNldE1vZGUoKTtcclxuXHJcbiAgICAgICAgfV0pOyIsImFuZ3VsYXIubW9kdWxlKCdjb250aXYubmV0d29ya3BvbGljaWVzJylcclxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzLmlzb2xhdGlvbi5saXN0Jywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2xpc3QnLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0lzb2xhdGlvblBvbGljeUxpc3RDdHJsIGFzIGlzb2xhdGlvblBvbGljeUxpc3RDdHJsJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbmV0d29ya19wb2xpY2llcy9pc29sYXRpb25wb2xpY3lsaXN0Lmh0bWwnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgO1xyXG4gICAgfV0pXHJcbiAgICAuY29udHJvbGxlcignSXNvbGF0aW9uUG9saWN5TGlzdEN0cmwnLCBbJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJGZpbHRlcicsICdQb2xpY2llc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcclxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkaW50ZXJ2YWwsICRmaWx0ZXIsIFBvbGljaWVzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgICAgIHZhciBwb2xpY2llc0xpc3RDdHJsID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFBvbGljaWVzKHJlbG9hZCkge1xyXG4gICAgICAgICAgICAgICAgUG9saWNpZXNNb2RlbC5nZXQocmVsb2FkKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihwb2xpY2llc0xpc3RDdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9saWNpZXNMaXN0Q3RybC5wb2xpY2llcyA9ICRmaWx0ZXIoJ29yZGVyQnknKShyZXN1bHQsICdwb2xpY3lOYW1lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihwb2xpY2llc0xpc3RDdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9Mb2FkIGZyb20gY2FjaGUgZm9yIHF1aWNrIGRpc3BsYXkgaW5pdGlhbGx5XHJcbiAgICAgICAgICAgIGdldFBvbGljaWVzKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBwcm9taXNlO1xyXG4gICAgICAgICAgICAvL0Rvbid0IHN0YXJ0IGF1dG8tcmVmcmVzaCBpZiBvbmUgaXMgYWxyZWFkeSBpbiBwcm9ncmVzc1xyXG4gICAgICAgICAgICBpZiAoIWFuZ3VsYXIuaXNEZWZpbmVkKHByb21pc2UpKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBnZXRQb2xpY2llcyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0sIENvbnRpdkdsb2JhbHMuUkVGUkVTSF9JTlRFUlZBTCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9zdG9wIHBvbGxpbmcgd2hlbiB1c2VyIG1vdmVzIGF3YXkgZnJvbSB0aGUgcGFnZVxyXG4gICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICRpbnRlcnZhbC5jYW5jZWwocHJvbWlzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1dKTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvOS8xNi5cclxuICovXHJcbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubmV0d29ya3BvbGljaWVzJylcclxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzJywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL25ldHdvcmtwb2xpY2llcycsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTmV0d29ya1BvbGljaWVzVGFic0N0cmwgYXMgbmV0d29ya1BvbGljaWVzVGFic0N0cmwnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICduZXR3b3JrX3BvbGljaWVzL25ldHdvcmtwb2xpY2llc3RhYnMuaHRtbCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMuaXNvbGF0aW9uJywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2lzb2xhdGlvbicsXHJcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnPHVpLXZpZXcvPidcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMucHJpb3JpdGl6YXRpb24nLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcHJpb3JpdGl6YXRpb24nLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05ldHdvcmtQb2xpY2llc1RhYnNDdHJsIGFzIG5ldHdvcmtQb2xpY2llc1RhYnNDdHJsJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbmV0d29ya19wb2xpY2llcy9wcmlvcml0aXphdGlvbnBvbGljeWxpc3QuaHRtbCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMuYmFuZHdpZHRoJywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2JhbmR3aWR0aCcsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTmV0d29ya1BvbGljaWVzVGFic0N0cmwgYXMgbmV0d29ya1BvbGljaWVzVGFic0N0cmwnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICduZXR3b3JrX3BvbGljaWVzL2JhbmR3aWR0aHBvbGljeWxpc3QuaHRtbCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMucmVkaXJlY3Rpb24nLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcmVkaXJlY3Rpb24nLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05ldHdvcmtQb2xpY2llc1RhYnNDdHJsIGFzIG5ldHdvcmtQb2xpY2llc1RhYnNDdHJsJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbmV0d29ya19wb2xpY2llcy9yZWRpcmVjdGlvbnBvbGljeWxpc3QuaHRtbCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICA7XHJcbiAgICB9XSlcclxuICAgIC5jb250cm9sbGVyKCdOZXR3b3JrUG9saWNpZXNUYWJzQ3RybCcsIFsnJHN0YXRlJywgZnVuY3Rpb24gKCRzdGF0ZSkge1xyXG4gICAgfV0pO1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gMy8yNS8xNi5cclxuICovXHJcbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubm9kZXMnKVxyXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5ub2Rlcy5jb21taXNzaW9uJywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2NvbW1pc3Npb24vOmtleScsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9kZUNvbW1pc3Npb25DdHJsIGFzIG5vZGVDb21taXNzaW9uQ3RybCcsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25vZGVzL25vZGVjb21taXNzaW9uLmh0bWwnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubm9kZXMuZGlzY292ZXInLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvZGlzY292ZXInLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05vZGVDb21taXNzaW9uQ3RybCBhcyBub2RlQ29tbWlzc2lvbkN0cmwnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdub2Rlcy9ub2RlY29tbWlzc2lvbi5odG1sJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIDtcclxuICAgIH1dKVxyXG4gICAgLmNvbnRyb2xsZXIoJ05vZGVDb21taXNzaW9uQ3RybCcsIFtcclxuICAgICAgICAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdOb2Rlc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcclxuICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsIE5vZGVzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgICAgIHZhciBub2RlQ29tbWlzc2lvbkN0cmwgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFRvIHNob3cgY29tbWlzc2lvbiBvciBkaXNjb3ZlciBzY3JlZW4gYmFzZWQgb24gdGhlIHJvdXRlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXRNb2RlKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCRzdGF0ZS5pcygnY29udGl2Lm1lbnUubm9kZXMuY29tbWlzc2lvbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLm1vZGUgPSAnY29tbWlzc2lvbic7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5tb2RlID0gJ2Rpc2NvdmVyJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9Ob2RlRGV0YWlscygpIHtcclxuICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUubm9kZXMuZGV0YWlscy5pbmZvJywgeydrZXknOiAkc3RhdGVQYXJhbXMua2V5fSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvTm9kZXMoKSB7XHJcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51Lm5vZGVzLmxpc3QnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gY2FuY2VsQ29tbWlzc2lvbmluZ05vZGUoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5Ub05vZGVEZXRhaWxzKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNhbmNlbERpc2NvdmVyaW5nTm9kZSgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVyblRvTm9kZXMoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlRXh0cmFWYXJzKCkge1xyXG4gICAgICAgICAgICAgICAgLy9BZGQgYW5zaWJsZSB2YXJpYWJsZXMgdG8gZXh0cmFfdmFyc1xyXG4gICAgICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmFuc2libGVWYXJpYWJsZXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5leHRyYV92YXJzW2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vQWRkIGVudmlyb25tZW50IHZhcmlhYmxlcyB0byBleHRyYV92YXJzXHJcbiAgICAgICAgICAgICAgICB2YXIgZW52VmFycyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmVudlZhcmlhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW52VmFyc1tpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmV4dHJhX3ZhcnNbJ2VudiddID0gZW52VmFycztcclxuICAgICAgICAgICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5ub2RlT3BzT2JqLmV4dHJhX3ZhcnMgPSBKU09OLnN0cmluZ2lmeShub2RlQ29tbWlzc2lvbkN0cmwuZXh0cmFfdmFycyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNvbW1pc3Npb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZUNvbW1pc3Npb25DdHJsLmZvcm0uJHZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKG5vZGVDb21taXNzaW9uQ3RybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIobm9kZUNvbW1pc3Npb25DdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwubm9kZU9wc09iai5ub2RlcyA9IFskc3RhdGVQYXJhbXMua2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhbnVwRXh0cmFWYXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlRXh0cmFWYXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgTm9kZXNNb2RlbC5jb21taXNzaW9uKG5vZGVDb21taXNzaW9uQ3RybC5ub2RlT3BzT2JqKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihub2RlQ29tbWlzc2lvbkN0cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub05vZGVEZXRhaWxzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihub2RlQ29tbWlzc2lvbkN0cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3Iobm9kZUNvbW1pc3Npb25DdHJsLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBkaXNjb3ZlcigpIHtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlQ29tbWlzc2lvbkN0cmwuZm9ybS4kdmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Iobm9kZUNvbW1pc3Npb25DdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihub2RlQ29tbWlzc2lvbkN0cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUlQQWRkckFycmF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlRXh0cmFWYXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgTm9kZXNNb2RlbC5kaXNjb3Zlcihub2RlQ29tbWlzc2lvbkN0cmwubm9kZU9wc09iaikudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobm9kZUNvbW1pc3Npb25DdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9Ob2RlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobm9kZUNvbW1pc3Npb25DdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKG5vZGVDb21taXNzaW9uQ3RybCwgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENsZWFudXAgYW5zaWJsZSB2YXJpYWJsZXMgZm9yIG5ldHdvcmsgbW9kZSBhbmQgc2NoZWR1bGVyLiBuZy1pZiByZW1vdmVzIGl0IGZyb20gdGhlIHZpZXcgKERPTSkgYnV0IG5vdCBmcm9tXHJcbiAgICAgICAgICAgICAqIHRoZSBtb2RlbC5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNsZWFudXBFeHRyYVZhcnMoKSB7XHJcbiAgICAgICAgICAgICAgICAvL0NsZWFudXAgZm9yIG5ldHdvcmsgbW9kZVxyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGVDb21taXNzaW9uQ3RybC5leHRyYV92YXJzWydjb250aXZfbmV0d29ya19tb2RlJ10gPT0gJ2FjaScpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbm9kZUNvbW1pc3Npb25DdHJsLmV4dHJhX3ZhcnNbJ2Z3ZF9tb2RlJ107XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBub2RlQ29tbWlzc2lvbkN0cmwuZXh0cmFfdmFyc1snYXBpY191cmwnXTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbm9kZUNvbW1pc3Npb25DdHJsLmV4dHJhX3ZhcnNbJ2FwaWNfdXNlcm5hbWUnXTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbm9kZUNvbW1pc3Npb25DdHJsLmV4dHJhX3ZhcnNbJ2FwaWNfcGFzc3dvcmQnXTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbm9kZUNvbW1pc3Npb25DdHJsLmV4dHJhX3ZhcnNbJ2FwaWNfbGVhZl9ub2RlcyddO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBub2RlQ29tbWlzc2lvbkN0cmwuZXh0cmFfdmFyc1snYXBpY19waHlzX2RvbWFpbiddO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBub2RlQ29tbWlzc2lvbkN0cmwuZXh0cmFfdmFyc1snYXBpY19lcGdfYnJpZGdlX2RvbWFpbiddO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBub2RlQ29tbWlzc2lvbkN0cmwuZXh0cmFfdmFyc1snYXBpY19jb250cmFjdHNfdW5yZXN0cmljdGVkX21vZGUnXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vQ2xlYW51cCBmb3Igc2NoZWR1bGVyXHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZUNvbW1pc3Npb25DdHJsLmV4dHJhX3ZhcnNbJ3NjaGVkdWxlcl9wcm92aWRlciddID09ICduYXRpdmUtc3dhcm0nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG5vZGVDb21taXNzaW9uQ3RybC5leHRyYV92YXJzWyd1Y3BfYm9vdHN0cmFwX25vZGVfbmFtZSddO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVJUEFkZHJBcnJheSgpIHtcclxuICAgICAgICAgICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5ub2RlT3BzT2JqLmFkZHJzID0gXy53b3Jkcyhub2RlQ29tbWlzc2lvbkN0cmwubm9kZUlQQWRkciwgL1teLCBdKy9nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLm5vZGVPcHNPYmogPSB7fTtcclxuICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmV4dHJhX3ZhcnMgPSB7fTsgLy9UT0RPIEludGlhbGl6ZSBmcm9tIGdsb2JhbCBzZXR0aW5nc1xyXG4gICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwuYW5zaWJsZVZhcmlhYmxlcyA9IFtdO1xyXG4gICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwuZW52VmFyaWFibGVzID0gW107XHJcbiAgICAgICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5ub2RlSVBBZGRyID0gJyc7IC8vSVAgYWRkcmVzcyBvZiBub2RlcyB0byBkaXNjb3ZlclxyXG5cclxuICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmNhbmNlbENvbW1pc3Npb25pbmdOb2RlID0gY2FuY2VsQ29tbWlzc2lvbmluZ05vZGU7XHJcbiAgICAgICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5jb21taXNzaW9uID0gY29tbWlzc2lvbjtcclxuICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmRpc2NvdmVyID0gZGlzY292ZXI7XHJcbiAgICAgICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5jYW5jZWxEaXNjb3ZlcmluZ05vZGUgPSBjYW5jZWxEaXNjb3ZlcmluZ05vZGU7XHJcblxyXG4gICAgICAgICAgICBzZXRNb2RlKCk7XHJcbiAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobm9kZUNvbW1pc3Npb25DdHJsKTtcclxuICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKG5vZGVDb21taXNzaW9uQ3RybCk7XHJcblxyXG4gICAgICAgIH1dKTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMjUvMTYuXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm5vZGVzJylcclxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubm9kZXMuZGV0YWlscycsIHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9kZXRhaWxzLzprZXknLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05vZGVEZXRhaWxzQ3RybCBhcyBub2RlRGV0YWlsc0N0cmwnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdub2Rlcy9ub2RlZGV0YWlscy5odG1sJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5vZGVzLmRldGFpbHMuaW5mbycsIHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9pbmZvJyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb2RlRGV0YWlsc0N0cmwgYXMgbm9kZURldGFpbHNDdHJsJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbm9kZXMvbm9kZWluZm8uaHRtbCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5ub2Rlcy5kZXRhaWxzLnN0YXRzJywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3N0YXRzJyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb2RlRGV0YWlsc0N0cmwgYXMgbm9kZURldGFpbHNDdHJsJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbm9kZXMvbm9kZXN0YXRzLmh0bWwnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubm9kZXMuZGV0YWlscy5sb2dzJywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2xvZ3MnLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05vZGVEZXRhaWxzQ3RybCBhcyBub2RlRGV0YWlsc0N0cmwnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdub2Rlcy9ub2RlbG9ncy5odG1sJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIDtcclxuICAgIH1dKVxyXG4gICAgLmNvbnRyb2xsZXIoJ05vZGVEZXRhaWxzQ3RybCcsIFsnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICckc2NvcGUnLCAnJGludGVydmFsJywgJ05vZGVzTW9kZWwnLFxyXG4gICAgICAgIGZ1bmN0aW9uICgkc3RhdGUsICRzdGF0ZVBhcmFtcywgJHNjb3BlLCAkaW50ZXJ2YWwsIE5vZGVzTW9kZWwpIHtcclxuICAgICAgICAgICAgdmFyIG5vZGVEZXRhaWxzQ3RybCA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBkZWNvbW1pc3Npb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbm9kZU9wc09iaiA9IHtcclxuICAgICAgICAgICAgICAgICAgbm9kZXM6IFskc3RhdGVQYXJhbXMua2V5XVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIE5vZGVzTW9kZWwuZGVjb21taXNzaW9uKG5vZGVPcHNPYmopLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vRGlzYWJsZSBhbGwgYnV0dG9ucyBpbml0aWFsbHkuIFBvbGwgd2lsbCBhc3NpZ24gdmFsdWVzIGFwcHJvcHJpYXRlbHkuXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnNob3dDb21taXNzaW9uQnV0dG9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLmNvbW1pc3Npb25CdXR0b25FbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnVwZ3JhZGVCdXR0b25FbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gdXBncmFkZSgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBub2RlT3BzT2JqID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVzOiBbJHN0YXRlUGFyYW1zLmtleV1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBOb2Rlc01vZGVsLnVwZ3JhZGUobm9kZU9wc09iaikudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9EaXNhYmxlIGFsbCBidXR0b25zIGluaXRpYWxseS4gUG9sbCB3aWxsIGFzc2lnbiB2YWx1ZXMgYXBwcm9wcmlhdGVseS5cclxuICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuc2hvd0NvbW1pc3Npb25CdXR0b24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuY29tbWlzc2lvbkJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwudXBncmFkZUJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRGlzcGxheSBidXR0b25zIGJhc2VkIG9uIHN0YXR1cyBvZiBub2RlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXRCdXR0b25EaXNwbGF5KCkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChub2RlRGV0YWlsc0N0cmwubm9kZVsnaW52ZW50b3J5X3N0YXRlJ10uc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnVW5hbGxvY2F0ZWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuc2hvd0NvbW1pc3Npb25CdXR0b24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuY29tbWlzc2lvbkJ1dHRvbkVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwudXBncmFkZUJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnRGVjb21taXNzaW9uZWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuc2hvd0NvbW1pc3Npb25CdXR0b24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuY29tbWlzc2lvbkJ1dHRvbkVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwudXBncmFkZUJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnUHJvdmlzaW9uaW5nJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnNob3dDb21taXNzaW9uQnV0dG9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLmNvbW1pc3Npb25CdXR0b25FbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC51cGdyYWRlQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdBbGxvY2F0ZWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuc2hvd0NvbW1pc3Npb25CdXR0b24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLmNvbW1pc3Npb25CdXR0b25FbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnVwZ3JhZGVCdXR0b25FbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQ2FuY2VsbGVkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnNob3dDb21taXNzaW9uQnV0dG9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5jb21taXNzaW9uQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwudXBncmFkZUJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnTWFpbnRlbmFuY2UnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuc2hvd0NvbW1pc3Npb25CdXR0b24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuY29tbWlzc2lvbkJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnVwZ3JhZGVCdXR0b25FbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6Ly9DbHVzdGVyIHNob3VsZCBub3QgYmUgaW4gdGhpcyBzdGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuc2hvd0NvbW1pc3Npb25CdXR0b24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuY29tbWlzc2lvbkJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnVwZ3JhZGVCdXR0b25FbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXROb2RlSW5mbyhyZWxvYWQpIHtcclxuICAgICAgICAgICAgICAgIE5vZGVzTW9kZWwuZ2V0TW9kZWxCeUtleSgkc3RhdGVQYXJhbXMua2V5LCByZWxvYWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLm5vZGUgPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCdXR0b25EaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5kZWNvbW1pc3Npb24gPSBkZWNvbW1pc3Npb247XHJcbiAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC51cGdyYWRlID0gdXBncmFkZTtcclxuXHJcbiAgICAgICAgICAgIC8vTG9hZCBmcm9tIGNhY2hlIGZvciBxdWljayBkaXNwbGF5IGluaXRpYWxseVxyXG4gICAgICAgICAgICBnZXROb2RlSW5mbyhmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcHJvbWlzZTtcclxuICAgICAgICAgICAgLy9Eb24ndCBkbyBhdXRvLXJlZnJlc2ggaWYgb25lIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3NcclxuICAgICAgICAgICAgaWYgKCFhbmd1bGFyLmlzRGVmaW5lZChwcm9taXNlKSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZSA9ICRpbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0Tm9kZUluZm8odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9LCA1MDAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL3N0b3AgcG9sbGluZyB3aGVuIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXHJcbiAgICAgICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJGludGVydmFsLmNhbmNlbChwcm9taXNlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1dKTsiLCIvKipcclxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gMy8yMi8xNi5cclxuICovXHJcbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubm9kZXMnKVxyXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5ub2Rlcy5saXN0Jywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2xpc3QnLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05vZGVMaXN0Q3RybCBhcyBub2RlTGlzdEN0cmwnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdub2Rlcy9ub2RlbGlzdC5odG1sJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIDtcclxuICAgIH1dKVxyXG4gICAgLmNvbnRyb2xsZXIoJ05vZGVMaXN0Q3RybCcsIFsnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckZmlsdGVyJywgJ05vZGVzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxyXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICRpbnRlcnZhbCwgJGZpbHRlciwgTm9kZXNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcclxuICAgICAgICB2YXIgbm9kZUxpc3RDdHJsID0gdGhpcztcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0Tm9kZXMocmVsb2FkKSB7XHJcbiAgICAgICAgICAgIE5vZGVzTW9kZWwuZ2V0KHJlbG9hZClcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5vZGVMaXN0Q3RybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RDdHJsLm5vZGVzID0gJGZpbHRlcignb3JkZXJCeScpKHJlc3VsdCwgJ2tleScpO1xyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5vZGVMaXN0Q3RybCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vTG9hZCBmcm9tIGNhY2hlIGZvciBxdWljayBkaXNwbGF5IGluaXRpYWxseVxyXG4gICAgICAgIGdldE5vZGVzKGZhbHNlKTtcclxuXHJcbiAgICAgICAgdmFyIHByb21pc2U7XHJcbiAgICAgICAgLy9Eb24ndCBkbyBhdXRvLXJlZnJlc2ggaWYgb25lIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3NcclxuICAgICAgICBpZiAoIWFuZ3VsYXIuaXNEZWZpbmVkKHByb21pc2UpKSB7XHJcbiAgICAgICAgICAgIHByb21pc2UgPSAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZ2V0Tm9kZXModHJ1ZSk7XHJcbiAgICAgICAgICAgIH0sIENvbnRpdkdsb2JhbHMuUkVGUkVTSF9JTlRFUlZBTCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vc3RvcCBwb2xsaW5nIHdoZW4gdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcclxuICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJGludGVydmFsLmNhbmNlbChwcm9taXNlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5vcmdhbml6YXRpb25zJylcclxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUub3JnYW5pemF0aW9ucy5jcmVhdGUnLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvY3JlYXRlJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnb3JnYW5pemF0aW9ucy9vcmdhbml6YXRpb25jcmVhdGUuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnT3JnYW5pemF0aW9uQ3JlYXRlQ3RybCBhcyBvcmdhbml6YXRpb25DcmVhdGVDdHJsJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIDtcclxuICAgIH1dKVxyXG4gICAgLmNvbnRyb2xsZXIoJ09yZ2FuaXphdGlvbkNyZWF0ZUN0cmwnLCBbJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnT3JnYW5pemF0aW9uc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcclxuICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsIE9yZ2FuaXphdGlvbnNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcclxuICAgICAgICAgICAgdmFyIG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9Pcmdhbml6YXRpb25zKCkge1xyXG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5vcmdhbml6YXRpb25zLmxpc3QnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gY2FuY2VsQ3JlYXRpbmcoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5Ub09yZ2FuaXphdGlvbnMoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlT3JnYW5pemF0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgLy9mb3JtIGNvbnRyb2xsZXIgaXMgaW5qZWN0ZWQgYnkgdGhlIGh0bWwgdGVtcGxhdGVcclxuICAgICAgICAgICAgICAgIC8vY2hlY2tpbmcgaWYgYWxsIHZhbGlkYXRpb25zIGhhdmUgcGFzc2VkXHJcbiAgICAgICAgICAgICAgICBpZiAob3JnYW5pemF0aW9uQ3JlYXRlQ3RybC5mb3JtLiR2YWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihvcmdhbml6YXRpb25DcmVhdGVDdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihvcmdhbml6YXRpb25DcmVhdGVDdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICBvcmdhbml6YXRpb25DcmVhdGVDdHJsLm5ld09yZ2FuaXphdGlvbi5rZXkgPSBvcmdhbml6YXRpb25DcmVhdGVDdHJsLm5ld09yZ2FuaXphdGlvbi50ZW5hbnROYW1lOyBcclxuICAgICAgICAgICAgICAgICAgICBPcmdhbml6YXRpb25zTW9kZWwuY3JlYXRlKG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwubmV3T3JnYW5pemF0aW9uKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihvcmdhbml6YXRpb25DcmVhdGVDdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9Pcmdhbml6YXRpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihvcmdhbml6YXRpb25DcmVhdGVDdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcclxuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIob3JnYW5pemF0aW9uQ3JlYXRlQ3RybCk7XHJcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Iob3JnYW5pemF0aW9uQ3JlYXRlQ3RybCk7XHJcbiAgICAgICAgICAgICAgICBvcmdhbml6YXRpb25DcmVhdGVDdHJsLm5ld09yZ2FuaXphdGlvbiA9IHtcclxuPDw8PDw8PCAyNTBlYTkwMzNmYTYwYjkzYjNjNTAwMGY2NjI3MzgwYTJlN2VkYTY3XHJcbj09PT09PT1cclxuICAgICAgICAgICAgICAgICAgICAvL2tleTogJycsXHJcbj4+Pj4+Pj4gb3JnYW5pemF0aW9ucyB0YWIgdWlcclxuICAgICAgICAgICAgICAgICAgICB0ZW5hbnROYW1lOiAnJ1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgb3JnYW5pemF0aW9uQ3JlYXRlQ3RybC5jcmVhdGVPcmdhbml6YXRpb24gPSBjcmVhdGVPcmdhbml6YXRpb247XHJcbiAgICAgICAgICAgIG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwuY2FuY2VsQ3JlYXRpbmcgPSBjYW5jZWxDcmVhdGluZztcclxuXHJcbiAgICAgICAgICAgIHJlc2V0Rm9ybSgpO1xyXG4gICAgICAgIH1dKTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5vcmdhbml6YXRpb25zJylcclxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUub3JnYW5pemF0aW9ucy5kZXRhaWxzJywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2RldGFpbHMvOmtleScsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnT3JnYW5pemF0aW9uRGV0YWlsc0N0cmwgYXMgb3JnYW5pemF0aW9uRGV0YWlsc0N0cmwnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdvcmdhbml6YXRpb25zL29yZ2FuaXphdGlvbmRldGFpbHMuaHRtbCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XSlcclxuICAgIC5jb250cm9sbGVyKCdPcmdhbml6YXRpb25EZXRhaWxzQ3RybCcsXHJcbiAgICAgICAgWyckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJGZpbHRlcicsICdPcmdhbml6YXRpb25zTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsICRzY29wZSwgJGludGVydmFsLCAkZmlsdGVyLCBPcmdhbml6YXRpb25zTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3JnYW5pemF0aW9uRGV0YWlsc0N0cmwgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvT3JnYW5pemF0aW9ucygpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51Lm9yZ2FuaXphdGlvbnMubGlzdCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRlbGV0ZU9yZ2FuaXphdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Iob3JnYW5pemF0aW9uRGV0YWlsc0N0cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICBPcmdhbml6YXRpb25zTW9kZWwuZGVsZXRlKG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsLm9yZ2FuaXphdGlvbikudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIob3JnYW5pemF0aW9uRGV0YWlsc0N0cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub09yZ2FuaXphdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIob3JnYW5pemF0aW9uRGV0YWlsc0N0cmwpO1xyXG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBPcmdhbml6YXRpb25zTW9kZWwuZ2V0TW9kZWxCeUtleSgkc3RhdGVQYXJhbXMua2V5KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChvcmdhbml6YXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JnYW5pemF0aW9uRGV0YWlsc0N0cmwub3JnYW5pemF0aW9uID0gb3JnYW5pemF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsLmRlbGV0ZU9yZ2FuaXphdGlvbiA9IGRlbGV0ZU9yZ2FuaXphdGlvbjtcclxuICAgICAgICAgICAgfV0pOyIsImFuZ3VsYXIubW9kdWxlKCdjb250aXYub3JnYW5pemF0aW9ucycpXHJcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcclxuICAgICAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm9yZ2FuaXphdGlvbnMubGlzdCcsIHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9saXN0JyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdPcmdhbml6YXRpb25zTGlzdEN0cmwgYXMgb3JnYW5pemF0aW9uc0xpc3RDdHJsJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnb3JnYW5pemF0aW9ucy9vcmdhbml6YXRpb25saXN0Lmh0bWwnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgO1xyXG4gICAgfV0pXHJcbiAgICAuY29udHJvbGxlcignT3JnYW5pemF0aW9uc0xpc3RDdHJsJywgWyckc2NvcGUnLCAnJGludGVydmFsJywgJyRmaWx0ZXInLCAnT3JnYW5pemF0aW9uc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcclxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkaW50ZXJ2YWwsICRmaWx0ZXIsIE9yZ2FuaXphdGlvbnNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcclxuICAgICAgICAgICAgdmFyIG9yZ2FuaXphdGlvbnNMaXN0Q3RybCA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRPcmdhbml6YXRpb25zKHJlbG9hZCkge1xyXG4gICAgICAgICAgICAgICAgT3JnYW5pemF0aW9uc01vZGVsLmdldChyZWxvYWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihvcmdhbml6YXRpb25zTGlzdEN0cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JnYW5pemF0aW9uc0xpc3RDdHJsLm9yZ2FuaXphdGlvbnMgPSAkZmlsdGVyKCdvcmRlckJ5JykocmVzdWx0LCAndGVuYW50TmFtZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihvcmdhbml6YXRpb25zTGlzdEN0cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9Mb2FkIGZyb20gY2FjaGUgZm9yIHF1aWNrIGRpc3BsYXkgaW5pdGlhbGx5XHJcbiAgICAgICAgICAgIGdldE9yZ2FuaXphdGlvbnMoZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHByb21pc2U7XHJcbiAgICAgICAgICAgIC8vRG9uJ3QgZG8gYXV0b3JlZnJlc2ggaWYgb25lIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3NcclxuICAgICAgICAgICAgaWYgKCFhbmd1bGFyLmlzRGVmaW5lZChwcm9taXNlKSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZSA9ICRpbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0T3JnYW5pemF0aW9ucyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0sIENvbnRpdkdsb2JhbHMuUkVGUkVTSF9JTlRFUlZBTCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vc3RvcCBwb2xsaW5nIHdoZW4gdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcclxuICAgICAgICAgICAgJHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHByb21pc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTIvMTYuXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnNlcnZpY2VsYnMnKVxyXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5zZXJ2aWNlbGJzLmNyZWF0ZScsIHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9jcmVhdGUnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzZXJ2aWNlX2xicy9zZXJ2aWNlbGJjcmVhdGUuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnU2VydmljZWxiQ3JlYXRlQ3RybCBhcyBzZXJ2aWNlbGJDcmVhdGVDdHJsJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIDtcclxuICAgIH1dKVxyXG4gICAgLmNvbnRyb2xsZXIoJ1NlcnZpY2VsYkNyZWF0ZUN0cmwnLCBbXHJcbiAgICAgICAgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnU2VydmljZWxic01vZGVsJywgJ05ldHdvcmtzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxyXG4gICAgICAgIGZ1bmN0aW9uICgkc3RhdGUsICRzdGF0ZVBhcmFtcywgU2VydmljZWxic01vZGVsLCBOZXR3b3Jrc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xyXG4gICAgICAgICAgICB2YXIgc2VydmljZWxiQ3JlYXRlQ3RybCA9IHRoaXM7XHJcbiAgICAgICAgICAgIHNlcnZpY2VsYkNyZWF0ZUN0cmwubGFiZWxTZWxlY3RvcnMgPSBbXTtcclxuICAgICAgICAgICAgc2VydmljZWxiQ3JlYXRlQ3RybC5uZXR3b3JrcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9TZXJ2aWNlbGJzKCkge1xyXG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5zZXJ2aWNlbGJzLmxpc3QnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gY2FuY2VsQ3JlYXRpbmcoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5Ub1NlcnZpY2VsYnMoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEdldCBuZXR3b3JrcyBmb3IgdGhlIGdpdmVuIHRlbmFudC5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldE5ldHdvcmtzKCkge1xyXG4gICAgICAgICAgICAgICAgTmV0d29ya3NNb2RlbC5nZXQoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlbGJDcmVhdGVDdHJsLm5ldHdvcmtzID0gXy5maWx0ZXIocmVzdWx0LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZW5hbnROYW1lJzogJ2RlZmF1bHQnLy9UT0RPOiBSZW1vdmUgaGFyZGNvZGVkIHRlbmFudC5cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVMYWJlbFNlbGVjdG9yU3RyaW5ncygpIHtcclxuICAgICAgICAgICAgICAgIC8vRW1wdHkgb3V0IHRoZSBzZWxlY3RvcnMuIEluIGNhc2Ugb2Ygc2VydmVyIGVycm9ycyB0aGlzIG5lZWRzIHRvIGJlIHJlc2V0LlxyXG4gICAgICAgICAgICAgICAgc2VydmljZWxiQ3JlYXRlQ3RybC5zZXJ2aWNlbGIuc2VsZWN0b3JzID0gW107XHJcbiAgICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2goc2VydmljZWxiQ3JlYXRlQ3RybC5sYWJlbFNlbGVjdG9ycywgZnVuY3Rpb24obGFiZWxTZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RvclN0cmluZyA9IGxhYmVsU2VsZWN0b3IubmFtZSArICc9JyArIGxhYmVsU2VsZWN0b3IudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZWxiQ3JlYXRlQ3RybC5zZXJ2aWNlbGIuc2VsZWN0b3JzLnB1c2goc2VsZWN0b3JTdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVTZXJ2aWNlbGIoKSB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVMYWJlbFNlbGVjdG9yU3RyaW5ncygpO1xyXG4gICAgICAgICAgICAgICAgLy9mb3JtIGNvbnRyb2xsZXIgaXMgaW5qZWN0ZWQgYnkgdGhlIGh0bWwgdGVtcGxhdGVcclxuICAgICAgICAgICAgICAgIC8vY2hlY2tpbmcgaWYgYWxsIHZhbGlkYXRpb25zIGhhdmUgcGFzc2VkXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VydmljZWxiQ3JlYXRlQ3RybC5mb3JtLiR2YWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihzZXJ2aWNlbGJDcmVhdGVDdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihzZXJ2aWNlbGJDcmVhdGVDdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlbGJDcmVhdGVDdHJsLnNlcnZpY2VsYi5rZXkgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlbGJDcmVhdGVDdHJsLnNlcnZpY2VsYi50ZW5hbnROYW1lICsgJzonICsgc2VydmljZWxiQ3JlYXRlQ3RybC5zZXJ2aWNlbGIuc2VydmljZU5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgU2VydmljZWxic01vZGVsLmNyZWF0ZShzZXJ2aWNlbGJDcmVhdGVDdHJsLnNlcnZpY2VsYikudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc2VydmljZWxiQ3JlYXRlQ3RybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvU2VydmljZWxicygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc2VydmljZWxiQ3JlYXRlQ3RybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihzZXJ2aWNlbGJDcmVhdGVDdHJsLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xyXG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzZXJ2aWNlbGJDcmVhdGVDdHJsKTtcclxuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihzZXJ2aWNlbGJDcmVhdGVDdHJsKTtcclxuICAgICAgICAgICAgICAgIHNlcnZpY2VsYkNyZWF0ZUN0cmwuc2VydmljZWxiID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2VOYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBuZXR3b3JrTmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgaXBBZGRyZXNzOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvcnRzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICB0ZW5hbnROYW1lOiAnZGVmYXVsdCcvL1RPRE86IFJlbW92ZSBoYXJkY29kZWQgdGVuYW50LlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXJ2aWNlbGJDcmVhdGVDdHJsLmNyZWF0ZVNlcnZpY2VsYiA9IGNyZWF0ZVNlcnZpY2VsYjtcclxuICAgICAgICAgICAgc2VydmljZWxiQ3JlYXRlQ3RybC5jYW5jZWxDcmVhdGluZyA9IGNhbmNlbENyZWF0aW5nO1xyXG5cclxuICAgICAgICAgICAgZ2V0TmV0d29ya3MoKTtcclxuICAgICAgICAgICAgcmVzZXRGb3JtKCk7XHJcbiAgICAgICAgfV0pO1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xMS8xNi5cclxuICovXHJcbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuc2VydmljZWxicycpXHJcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcclxuICAgICAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnNlcnZpY2VsYnMuZGV0YWlscycsIHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9kZXRhaWxzLzprZXknLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1NlcnZpY2VsYkRldGFpbHNDdHJsIGFzIHNlcnZpY2VsYkRldGFpbHNDdHJsJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2VydmljZV9sYnMvc2VydmljZWxiZGV0YWlscy5odG1sJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnNlcnZpY2VsYnMuZWRpdCcsIHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9lZGl0LzprZXknLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1NlcnZpY2VsYkRldGFpbHNDdHJsIGFzIHNlcnZpY2VsYkRldGFpbHNDdHJsJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2VydmljZV9sYnMvc2VydmljZWxiZGV0YWlscy5odG1sJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1dKVxyXG4gICAgLmNvbnRyb2xsZXIoJ1NlcnZpY2VsYkRldGFpbHNDdHJsJyxcclxuICAgICAgICBbJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnU2VydmljZWxic01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBTZXJ2aWNlbGJzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VydmljZWxiRGV0YWlsc0N0cmwgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgc2VydmljZWxiRGV0YWlsc0N0cmwubGFiZWxTZWxlY3RvcnMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFRvIHNob3cgZWRpdCBvciBkZXRhaWxzIHNjcmVlbiBiYXNlZCBvbiB0aGUgcm91dGVcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc2V0TW9kZSgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJHN0YXRlLmlzKCdjb250aXYubWVudS5zZXJ2aWNlbGJzLmVkaXQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlbGJEZXRhaWxzQ3RybC5tb2RlID0gJ2VkaXQnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VsYkRldGFpbHNDdHJsLm1vZGUgPSAnZGV0YWlscyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvU2VydmljZWxicygpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51LnNlcnZpY2VsYnMubGlzdCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvU2VydmljZWxiRGV0YWlscygpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51LnNlcnZpY2VsYnMuZGV0YWlscycsIHsna2V5Jzogc2VydmljZWxiRGV0YWlsc0N0cmwuc2VydmljZWxiLmtleX0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNhbmNlbEVkaXRpbmcoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9TZXJ2aWNlbGJEZXRhaWxzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZGVsZXRlU2VydmljZWxiKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihzZXJ2aWNlbGJEZXRhaWxzQ3RybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIoc2VydmljZWxiRGV0YWlsc0N0cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIFNlcnZpY2VsYnNNb2RlbC5kZWxldGUoc2VydmljZWxiRGV0YWlsc0N0cmwuc2VydmljZWxiKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzZXJ2aWNlbGJEZXRhaWxzQ3RybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvU2VydmljZWxicygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc2VydmljZWxiRGV0YWlsc0N0cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3Ioc2VydmljZWxiRGV0YWlsc0N0cmwsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc2F2ZVNlcnZpY2VsYigpIHtcclxuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Ioc2VydmljZWxiRGV0YWlsc0N0cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKHNlcnZpY2VsYkRldGFpbHNDdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVMYWJlbFNlbGVjdG9yU3RyaW5ncygpO1xyXG4gICAgICAgICAgICAgICAgICAgIFNlcnZpY2VsYnNNb2RlbC5zYXZlKHNlcnZpY2VsYkRldGFpbHNDdHJsLnNlcnZpY2VsYikudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc2VydmljZWxiRGV0YWlsc0N0cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub1NlcnZpY2VsYkRldGFpbHMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHNlcnZpY2VsYkRldGFpbHNDdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKHNlcnZpY2VsYkRldGFpbHNDdHJsLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUxhYmVsU2VsZWN0b3JzKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChzZXJ2aWNlbGJEZXRhaWxzQ3RybC5zZXJ2aWNlbGIuc2VsZWN0b3JzLCBmdW5jdGlvbihzZWxlY3RvclN0cikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0b3IgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBzZWxlY3RvclN0ci5zcGxpdCgnPScpWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNlbGVjdG9yU3RyLnNwbGl0KCc9JylbMV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZWxiRGV0YWlsc0N0cmwubGFiZWxTZWxlY3RvcnMucHVzaChzZWxlY3Rvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlTGFiZWxTZWxlY3RvclN0cmluZ3MoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZWxiRGV0YWlsc0N0cmwuc2VydmljZWxiLnNlbGVjdG9ycyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChzZXJ2aWNlbGJEZXRhaWxzQ3RybC5sYWJlbFNlbGVjdG9ycywgZnVuY3Rpb24obGFiZWxTZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0b3JTdHJpbmcgPSBsYWJlbFNlbGVjdG9yLm5hbWUgKyAnPScgKyBsYWJlbFNlbGVjdG9yLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlbGJEZXRhaWxzQ3RybC5zZXJ2aWNlbGIuc2VsZWN0b3JzLnB1c2goc2VsZWN0b3JTdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzZXJ2aWNlbGJEZXRhaWxzQ3RybCk7XHJcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Ioc2VydmljZWxiRGV0YWlsc0N0cmwpO1xyXG5cclxuICAgICAgICAgICAgICAgIFNlcnZpY2VsYnNNb2RlbC5nZXRNb2RlbEJ5S2V5KCRzdGF0ZVBhcmFtcy5rZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHNlcnZpY2VsYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlbGJEZXRhaWxzQ3RybC5zZXJ2aWNlbGIgPSBzZXJ2aWNlbGI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUxhYmVsU2VsZWN0b3JzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2VydmljZWxiRGV0YWlsc0N0cmwuc2F2ZVNlcnZpY2VsYiA9IHNhdmVTZXJ2aWNlbGI7XHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlbGJEZXRhaWxzQ3RybC5jYW5jZWxFZGl0aW5nID0gY2FuY2VsRWRpdGluZztcclxuICAgICAgICAgICAgICAgIHNlcnZpY2VsYkRldGFpbHNDdHJsLmRlbGV0ZVNlcnZpY2VsYiA9IGRlbGV0ZVNlcnZpY2VsYjtcclxuICAgICAgICAgICAgICAgIHNldE1vZGUoKTtcclxuXHJcbiAgICAgICAgICAgIH1dKTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTEvMTYuXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnNlcnZpY2VsYnMnKVxyXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5zZXJ2aWNlbGJzLmxpc3QnLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvbGlzdCcsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnU2VydmljZWxiTGlzdEN0cmwgYXMgc2VydmljZWxiTGlzdEN0cmwnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzZXJ2aWNlX2xicy9zZXJ2aWNlbGJsaXN0Lmh0bWwnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgO1xyXG4gICAgfV0pXHJcbiAgICAuY29udHJvbGxlcignU2VydmljZWxiTGlzdEN0cmwnLCBbJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJGZpbHRlcicsICdTZXJ2aWNlbGJzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxyXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICRpbnRlcnZhbCwgJGZpbHRlciwgU2VydmljZWxic01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xyXG4gICAgICAgICAgICB2YXIgc2VydmljZWxiTGlzdEN0cmwgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0U2VydmljZWxicyhyZWxvYWQpIHtcclxuICAgICAgICAgICAgICAgIFNlcnZpY2VsYnNNb2RlbC5nZXQocmVsb2FkKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc2VydmljZWxiTGlzdEN0cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZWxiTGlzdEN0cmwuc2VydmljZWxicyA9ICRmaWx0ZXIoJ29yZGVyQnknKShyZXN1bHQsICdzZXJ2aWNlTmFtZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzZXJ2aWNlbGJMaXN0Q3RybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL0xvYWQgZnJvbSBjYWNoZSBmb3IgcXVpY2sgZGlzcGxheSBpbml0aWFsbHlcclxuICAgICAgICAgICAgZ2V0U2VydmljZWxicyhmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcHJvbWlzZTtcclxuICAgICAgICAgICAgLy9Eb24ndCBkbyBhdXRvcmVmcmVzaCBpZiBvbmUgaXMgYWxyZWFkeSBpbiBwcm9ncmVzc1xyXG4gICAgICAgICAgICBpZiAoIWFuZ3VsYXIuaXNEZWZpbmVkKHByb21pc2UpKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBnZXRTZXJ2aWNlbGJzKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSwgQ29udGl2R2xvYmFscy5SRUZSRVNIX0lOVEVSVkFMKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9zdG9wIHBvbGxpbmcgd2hlbiB1c2VyIG1vdmVzIGF3YXkgZnJvbSB0aGUgcGFnZVxyXG4gICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICRpbnRlcnZhbC5jYW5jZWwocHJvbWlzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1dKTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTMvMTYuXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZShcImNvbnRpdi5zZXJ2aWNlbGJzXCIpXHJcbiAgICAuZGlyZWN0aXZlKFwiY3R2U2VydmljZWxicG9ydHNcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgIGl0ZW1zOiAnPSdcclxuICAgICAgICAgICB9LFxyXG4gICAgICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlKSB7XHJcbiAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgKiBDb21wYXJlIGlmIHR3byBpdGVtcyBoYXZlIHNhbWUgcG9ydHMgYW5kIHByb3RvY29sc1xyXG4gICAgICAgICAgICAgICAgKiBAcGFyYW0gdmFsMVxyXG4gICAgICAgICAgICAgICAgKiBAcGFyYW0gdmFsMlxyXG4gICAgICAgICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNvbXBhcmUodmFsMSwgdmFsMikge1xyXG4gICAgICAgICAgICAgICAgICAgcmV0dXJuICh2YWwxID09PSB2YWwyKTtcclxuICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVzZXROZXdJdGVtKCkge1xyXG4gICAgICAgICAgICAgICAgICAgc2NvcGUubmV3SXRlbSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlUG9ydDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJQb3J0OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICBwcm90b2NvbDogJydcclxuICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgIGZ1bmN0aW9uIGlzRW1wdHlJdGVtKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgIHJldHVybiAoaXRlbS5zZXJ2aWNlUG9ydCA9PT0gJycgJiYgaXRlbS5wcm92aWRlclBvcnQgPT09ICcnICYmIGl0ZW0ucHJvdG9jb2wgPT09ICcnKTtcclxuICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgc2NvcGUuYWRkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICBpZiAoaXNFbXB0eUl0ZW0oc2NvcGUubmV3SXRlbSkpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgIGlmIChzY29wZS5pdGVtcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuaXRlbXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIHZhciBuZXdJdGVtU3RyID0gc2NvcGUubmV3SXRlbS5zZXJ2aWNlUG9ydCArICc6J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICsgc2NvcGUubmV3SXRlbS5wcm92aWRlclBvcnQgKyAnOidcclxuICAgICAgICAgICAgICAgICAgICAgICArIHNjb3BlLm5ld0l0ZW0ucHJvdG9jb2w7XHJcbiAgICAgICAgICAgICAgICAgICAvL1JlbW92ZXMgZXhpc3RpbmcgaXRlbSB3aXRoIHRoZSBzYW1lIHZhbHVlIGZpcnN0IGlmIGl0IGV4aXN0cy5cclxuICAgICAgICAgICAgICAgICAgIF8ucHVsbEFsbFdpdGgoc2NvcGUuaXRlbXMsIFtuZXdJdGVtU3RyXSwgY29tcGFyZSk7XHJcbiAgICAgICAgICAgICAgICAgICBzY29wZS5pdGVtcy5wdXNoKG5ld0l0ZW1TdHIpO1xyXG4gICAgICAgICAgICAgICAgICAgcmVzZXROZXdJdGVtKCk7XHJcbiAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICBzY29wZS5yZW1vdmUgPSBmdW5jdGlvbihwYXNzZWRJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICBfLnJlbW92ZShzY29wZS5pdGVtcywgZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29tcGFyZShpdGVtLCBwYXNzZWRJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICByZXNldE5ld0l0ZW0oKTtcclxuICAgICAgICAgICB9LFxyXG4gICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2VydmljZV9sYnMvc2VydmljZWxicG9ydHMuaHRtbCdcclxuICAgICAgIH1cclxuICAgIH0pO1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNi8xLzE2LlxyXG4gKi9cclxuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5zdG9yYWdlcG9saWNpZXMnKVxyXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5zdG9yYWdlcG9saWNpZXMuY3JlYXRlJywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2NyZWF0ZScsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3N0b3JhZ2VfcG9saWNpZXMvc3RvcmFnZXBvbGljeWNyZWF0ZS5odG1sJyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdTdG9yYWdlUG9saWN5Q3JlYXRlQ3RybCBhcyBzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICA7XHJcbiAgICB9XSlcclxuICAgIC5jb250cm9sbGVyKCdTdG9yYWdlUG9saWN5Q3JlYXRlQ3RybCcsIFsnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdTdG9yYWdlUG9saWNpZXNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsXHJcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBTdG9yYWdlUG9saWNpZXNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcclxuICAgICAgICAgICAgdmFyIHN0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvU3RvcmFnZVBvbGljaWVzKCkge1xyXG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5zdG9yYWdlcG9saWNpZXMubGlzdCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjYW5jZWxDcmVhdGluZygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVyblRvU3RvcmFnZVBvbGljaWVzKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUZpbGVzeXN0ZW1DbWRzKCkge1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwuZmlsZXN5c3RlbWNtZHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsLm5ld1N0b3JhZ2VQb2xpY3kuZmlsZXN5c3RlbXNbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlUG9saWN5KCkge1xyXG4gICAgICAgICAgICAgICAgLy9mb3JtIGNvbnRyb2xsZXIgaXMgaW5qZWN0ZWQgYnkgdGhlIGh0bWwgdGVtcGxhdGVcclxuICAgICAgICAgICAgICAgIC8vY2hlY2tpbmcgaWYgYWxsIHZhbGlkYXRpb25zIGhhdmUgcGFzc2VkXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwuZm9ybS4kdmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Ioc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKHN0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVGaWxlc3lzdGVtQ21kcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIFN0b3JhZ2VQb2xpY2llc01vZGVsLmNyZWF0ZShzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybC5uZXdTdG9yYWdlUG9saWN5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHN0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvU3RvcmFnZVBvbGljaWVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHN0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybCwgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZXNldEZvcm0oKSB7XHJcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHN0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsKTtcclxuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybCk7XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybC5uZXdTdG9yYWdlUG9saWN5ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYmFja2VuZHNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNydWRcIjogXCJjZXBoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibW91bnRcIjogXCJjZXBoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic25hcHNob3RcIjogXCJjZXBoXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidW5sb2NrZWRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkcml2ZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBvb2xcIjogXCJyYmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogXCIxME1CXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlsZXN5c3RlbVwiOiBcImV4dDRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJydW50aW1lXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzbmFwc2hvdHNcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzbmFwc2hvdFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZyZXF1ZW5jeVwiOiBcIjMwbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrZWVwXCI6IDIwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmF0ZS1saW1pdFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndyaXRlLWlvcHNcIjogMTAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVhZC1pb3BzXCI6IDEwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndyaXRlLWJwc1wiOiAxMDAwMDAwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlYWQtYnBzXCI6IDEwMDAwMDAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcImZpbGVzeXN0ZW1zXCI6IHt9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybC5jcmVhdGVQb2xpY3kgPSBjcmVhdGVQb2xpY3k7XHJcbiAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsLmNhbmNlbENyZWF0aW5nID0gY2FuY2VsQ3JlYXRpbmc7XHJcbiAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsLmZpbGVzeXN0ZW1jbWRzID0gW107XHJcblxyXG4gICAgICAgICAgICByZXNldEZvcm0oKTtcclxuICAgICAgICB9XSk7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzI3LzE2LlxyXG4gKi9cclxuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5zdG9yYWdlcG9saWNpZXMnKVxyXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5zdG9yYWdlcG9saWNpZXMuZGV0YWlscycsIHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9kZXRhaWxzLzprZXknLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1N0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCBhcyBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzdG9yYWdlX3BvbGljaWVzL3N0b3JhZ2Vwb2xpY3lkZXRhaWxzLmh0bWwnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc3RvcmFnZXBvbGljaWVzLmVkaXQnLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvZGV0YWlscy86a2V5JyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdTdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwgYXMgc3RvcmFnZVBvbGljeURldGFpbHNDdHJsJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc3RvcmFnZV9wb2xpY2llcy9zdG9yYWdlcG9saWN5ZGV0YWlscy5odG1sJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1dKVxyXG4gICAgLmNvbnRyb2xsZXIoJ1N0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCcsXHJcbiAgICAgICAgWyckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJGZpbHRlcicsICdTdG9yYWdlUG9saWNpZXNNb2RlbCcsICdWb2x1bWVzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsICRzY29wZSwgJGludGVydmFsLCAkZmlsdGVyLCBTdG9yYWdlUG9saWNpZXNNb2RlbCwgVm9sdW1lc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwuZmlsZXN5c3RlbWNtZHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFRvIHNob3cgZWRpdCBvciBkZXRhaWxzIHNjcmVlbiBiYXNlZCBvbiB0aGUgcm91dGVcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc2V0TW9kZSgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJHN0YXRlLmlzKCdjb250aXYubWVudS5zdG9yYWdlcG9saWNpZXMuZWRpdCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5tb2RlID0gJ2VkaXQnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5tb2RlID0gJ2RldGFpbHMnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub1BvbGljaWVzKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUuc3RvcmFnZXBvbGljaWVzLmxpc3QnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub1BvbGljeURldGFpbHMoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5zdG9yYWdlcG9saWNpZXMuZGV0YWlscycsIHsna2V5Jzogc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLnBvbGljeS5uYW1lfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY2FuY2VsRWRpdGluZygpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub1BvbGljeURldGFpbHMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkZWxldGVQb2xpY3koKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIoc3RvcmFnZVBvbGljeURldGFpbHNDdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICBTdG9yYWdlUG9saWNpZXNNb2RlbC5kZWxldGVVc2luZ0tleShzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwucG9saWN5Lm5hbWUsICduYW1lJykudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9Qb2xpY2llcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCwgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBHZXQgdm9sdW1lcyBiZWxvbmdpbmcgdG8gYSBwb2xpY3lcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Vm9sdW1lcyhyZWxvYWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBWb2x1bWVzTW9kZWwuZ2V0KHJlbG9hZCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC52b2x1bWVzID0gJGZpbHRlcignb3JkZXJCeScpKF8uZmlsdGVyKHJlc3VsdCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BvbGljeSc6IHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5wb2xpY3kubmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgJ25hbWUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBpbml0aWFsaXplRmlsZXN5c3RlbUNtZHNBcnJheSgpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2goc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLnBvbGljeS5maWxlc3lzdGVtcywgZnVuY3Rpb24odmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1c2goe25hbWU6IGtleSwgdmFsdWU6IHZhbHVlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLmZpbGVzeXN0ZW1jbWRzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVGaWxlc3lzdGVtQ21kcygpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwuZmlsZXN5c3RlbWNtZHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwucG9saWN5LmZpbGVzeXN0ZW1zW2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNhdmVQb2xpY3koKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9mb3JtIGNvbnRyb2xsZXIgaXMgaW5qZWN0ZWQgYnkgdGhlIGh0bWwgdGVtcGxhdGVcclxuICAgICAgICAgICAgICAgICAgICAvL2NoZWNraW5nIGlmIGFsbCB2YWxpZGF0aW9ucyBoYXZlIHBhc3NlZFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwuZm9ybS4kdmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUZpbGVzeXN0ZW1DbWRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0b3JhZ2VQb2xpY2llc01vZGVsLnNhdmUoc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLnBvbGljeSkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub1BvbGljeURldGFpbHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc3RvcmFnZVBvbGljeURldGFpbHNDdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCk7XHJcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Ioc3RvcmFnZVBvbGljeURldGFpbHNDdHJsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBTdG9yYWdlUG9saWNpZXNNb2RlbC5nZXRNb2RlbEJ5S2V5KCRzdGF0ZVBhcmFtcy5rZXksIGZhbHNlLCAnbmFtZScpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHBvbGljeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwucG9saWN5ID0gcG9saWN5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsaXplRmlsZXN5c3RlbUNtZHNBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2dldFZvbHVtZXMoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwuZGVsZXRlUG9saWN5ID0gZGVsZXRlUG9saWN5O1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLnNhdmVQb2xpY3kgPSBzYXZlUG9saWN5O1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLmNhbmNlbEVkaXRpbmcgPSBjYW5jZWxFZGl0aW5nO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldE1vZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZTtcclxuICAgICAgICAgICAgICAgIC8vRG9uJ3QgZG8gYXV0b3JlZnJlc2ggaWYgb25lIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3NcclxuICAgICAgICAgICAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQocHJvbWlzZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9nZXRWb2x1bWVzKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIENvbnRpdkdsb2JhbHMuUkVGUkVTSF9JTlRFUlZBTCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9zdG9wIHBvbGxpbmcgd2hlbiB1c2VyIG1vdmVzIGF3YXkgZnJvbSB0aGUgcGFnZVxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGludGVydmFsLmNhbmNlbChwcm9taXNlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XSk7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA2LzIvMTYuXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZShcImNvbnRpdi5zdG9yYWdlcG9saWNpZXNcIilcclxuICAgIC5kaXJlY3RpdmUoXCJjdHZTdG9yYWdlcG9saWN5YmFzaWNzZXR0aW5nc1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmRpcmVjdGl2ZShcImN0dlN0b3JhZ2Vwb2xpY3lmaWxlc3lzdGVtc2V0dGluZ3NcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgICAgIHBvbGljeTogJz0nLFxyXG4gICAgICAgICAgICAgICAgZmlsZXN5c3RlbWNtZHM6ICc9J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSkge1xyXG4gICAgICAgICAgICAgICAgc2NvcGUuZmlsZXN5c3RlbXMgPSBbJ2V4dDQnLCAnYnRyZnMnXTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzdG9yYWdlX3BvbGljaWVzL2ZpbGVzeXN0ZW1zZXR0aW5ncy5odG1sJ1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuZGlyZWN0aXZlKFwiY3R2U3RvcmFnZXBvbGljeXNuYXBzaG90c2V0dGluZ3NcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgICAgIHBvbGljeTogJz0nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc3RvcmFnZV9wb2xpY2llcy9zbmFwc2hvdHNldHRpbmdzLmh0bWwnXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5kaXJlY3RpdmUoXCJjdHZTdG9yYWdlcG9saWN5cndvcHNzZXR0aW5nc1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICAgICAgcG9saWN5OiAnPSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzdG9yYWdlX3BvbGljaWVzL3J3b3Bzc2V0dGluZ3MuaHRtbCdcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmRpcmVjdGl2ZShcImN0dlN0b3JhZ2Vwb2xpY3liYWNrZW5kZHJpdmVyc1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICAgICAgcG9saWN5OiAnPSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzdG9yYWdlX3BvbGljaWVzL2JhY2tlbmRkcml2ZXJzLmh0bWwnXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA0LzE4LzE2LlxyXG4gKi9cclxuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5zdG9yYWdlcG9saWNpZXMnKVxyXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5zdG9yYWdlcG9saWNpZXMubGlzdCcsIHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9saXN0JyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdTdG9yYWdlUG9saWN5TGlzdEN0cmwgYXMgc3RvcmFnZVBvbGljeUxpc3RDdHJsJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc3RvcmFnZV9wb2xpY2llcy9zdG9yYWdlcG9saWN5bGlzdC5odG1sJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIDtcclxuICAgIH1dKVxyXG4gICAgLmNvbnRyb2xsZXIoJ1N0b3JhZ2VQb2xpY3lMaXN0Q3RybCcsIFsnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckZmlsdGVyJywgJ1N0b3JhZ2VQb2xpY2llc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcclxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkaW50ZXJ2YWwsICRmaWx0ZXIsIFN0b3JhZ2VQb2xpY2llc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xyXG4gICAgICAgICAgICB2YXIgc3RvcmFnZVBvbGljeUxpc3RDdHJsID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFBvbGljaWVzKHJlbG9hZCkge1xyXG4gICAgICAgICAgICAgICAgU3RvcmFnZVBvbGljaWVzTW9kZWwuZ2V0KHJlbG9hZClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc3RvcmFnZVBvbGljeUxpc3RDdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVBvbGljeUxpc3RDdHJsLnBvbGljaWVzID0gJGZpbHRlcignb3JkZXJCeScpKHJlc3VsdCwgJ25hbWUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHN0b3JhZ2VQb2xpY3lMaXN0Q3RybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vTG9hZCBmcm9tIGNhY2hlIGZvciBxdWljayBkaXNwbGF5IGluaXRpYWxseVxyXG4gICAgICAgICAgICBnZXRQb2xpY2llcyhmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcHJvbWlzZTtcclxuICAgICAgICAgICAgLy9Eb24ndCBkbyBhdXRvLXJlZnJlc2ggaWYgb25lIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3NcclxuICAgICAgICAgICAgaWYgKCFhbmd1bGFyLmlzRGVmaW5lZChwcm9taXNlKSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZSA9ICRpbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0UG9saWNpZXModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9LCBDb250aXZHbG9iYWxzLlJFRlJFU0hfSU5URVJWQUwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vc3RvcCBwb2xsaW5nIHdoZW4gdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcclxuICAgICAgICAgICAgJHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHByb21pc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDYvMy8xNi5cclxuICovXHJcbmFuZ3VsYXIubW9kdWxlKCdjb250aXYudm9sdW1lcycpXHJcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcclxuICAgICAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnZvbHVtZXMuY3JlYXRlJywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2NyZWF0ZScsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZvbHVtZXMvdm9sdW1lY3JlYXRlLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1ZvbHVtZUNyZWF0ZUN0cmwgYXMgdm9sdW1lQ3JlYXRlQ3RybCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICA7XHJcbiAgICB9XSlcclxuICAgIC5jb250cm9sbGVyKCdWb2x1bWVDcmVhdGVDdHJsJywgWyckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ1ZvbHVtZXNNb2RlbCcsICdTdG9yYWdlUG9saWNpZXNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsXHJcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBWb2x1bWVzTW9kZWwsIFN0b3JhZ2VQb2xpY2llc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xyXG4gICAgICAgICAgICB2YXIgdm9sdW1lQ3JlYXRlQ3RybCA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZvbHVtZUNyZWF0ZUN0cmwuZmlsZXN5c3RlbXMgPSBbJ2V4dDQnLCAnYnRyZnMnXTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvVm9sdW1lc01vZGVsKCkge1xyXG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS52b2x1bWVzLmxpc3QnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gY2FuY2VsQ3JlYXRpbmcoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5Ub1ZvbHVtZXNNb2RlbCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogR2V0IHN0b3JhZ2UgcG9saWNpZXMuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRTdG9yYWdlUG9saWNpZXMoKSB7XHJcbiAgICAgICAgICAgICAgICBTdG9yYWdlUG9saWNpZXNNb2RlbC5nZXQoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2b2x1bWVDcmVhdGVDdHJsLnBvbGljaWVzID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGFwcGx5UG9saWN5U2V0dGluZ3MoKSB7XHJcbiAgICAgICAgICAgICAgICB2b2x1bWVDcmVhdGVDdHJsLm5ld1ZvbHVtZS5wb2xpY3kgPSB2b2x1bWVDcmVhdGVDdHJsLnNlbGVjdGVkUG9saWN5Lm5hbWU7XHJcbiAgICAgICAgICAgICAgICB2b2x1bWVDcmVhdGVDdHJsLm5ld1ZvbHVtZS5iYWNrZW5kcyA9IHZvbHVtZUNyZWF0ZUN0cmwuc2VsZWN0ZWRQb2xpY3kuYmFja2VuZHM7XHJcbiAgICAgICAgICAgICAgICB2b2x1bWVDcmVhdGVDdHJsLm5ld1ZvbHVtZS5kcml2ZXIgPSB2b2x1bWVDcmVhdGVDdHJsLnNlbGVjdGVkUG9saWN5LmRyaXZlcjtcclxuICAgICAgICAgICAgICAgIHZvbHVtZUNyZWF0ZUN0cmwubmV3Vm9sdW1lLmNyZWF0ZSA9IHZvbHVtZUNyZWF0ZUN0cmwuc2VsZWN0ZWRQb2xpY3kuY3JlYXRlO1xyXG4gICAgICAgICAgICAgICAgdm9sdW1lQ3JlYXRlQ3RybC5uZXdWb2x1bWUucnVudGltZSA9IHZvbHVtZUNyZWF0ZUN0cmwuc2VsZWN0ZWRQb2xpY3kucnVudGltZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlVm9sdW1lKCkge1xyXG4gICAgICAgICAgICAgICAgLy9mb3JtIGNvbnRyb2xsZXIgaXMgaW5qZWN0ZWQgYnkgdGhlIGh0bWwgdGVtcGxhdGVcclxuICAgICAgICAgICAgICAgIC8vY2hlY2tpbmcgaWYgYWxsIHZhbGlkYXRpb25zIGhhdmUgcGFzc2VkXHJcbiAgICAgICAgICAgICAgICBpZiAodm9sdW1lQ3JlYXRlQ3RybC5mb3JtLiR2YWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcih2b2x1bWVDcmVhdGVDdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcih2b2x1bWVDcmVhdGVDdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICBhcHBseVBvbGljeVNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgVm9sdW1lc01vZGVsLmNyZWF0ZSh2b2x1bWVDcmVhdGVDdHJsLm5ld1ZvbHVtZSkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIodm9sdW1lQ3JlYXRlQ3RybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvVm9sdW1lc01vZGVsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcih2b2x1bWVDcmVhdGVDdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKHZvbHVtZUNyZWF0ZUN0cmwsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZXNldEZvcm0oKSB7XHJcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHZvbHVtZUNyZWF0ZUN0cmwpO1xyXG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKHZvbHVtZUNyZWF0ZUN0cmwpO1xyXG4gICAgICAgICAgICAgICAgdm9sdW1lQ3JlYXRlQ3RybC5uZXdWb2x1bWUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJiYWNrZW5kc1wiOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBcImRyaXZlclwiOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZVwiOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBcInJ1bnRpbWVcIjoge31cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZvbHVtZUNyZWF0ZUN0cmwuY3JlYXRlVm9sdW1lID0gY3JlYXRlVm9sdW1lO1xyXG4gICAgICAgICAgICB2b2x1bWVDcmVhdGVDdHJsLmNhbmNlbENyZWF0aW5nID0gY2FuY2VsQ3JlYXRpbmc7XHJcblxyXG4gICAgICAgICAgICBnZXRTdG9yYWdlUG9saWNpZXMoKTtcclxuXHJcbiAgICAgICAgICAgIHJlc2V0Rm9ybSgpO1xyXG4gICAgICAgIH1dKTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDQvMTUvMTYuXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnZvbHVtZXMnKVxyXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS52b2x1bWVzLmRldGFpbHMnLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvZGV0YWlscy86a2V5JyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdWb2x1bWVEZXRhaWxzQ3RybCBhcyB2b2x1bWVEZXRhaWxzQ3RybCcsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZvbHVtZXMvdm9sdW1lZGV0YWlscy5odG1sJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1dKVxyXG4gICAgLmNvbnRyb2xsZXIoJ1ZvbHVtZURldGFpbHNDdHJsJyxcclxuICAgICAgICBbJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckaHR0cCcsICdWb2x1bWVzTW9kZWwnLCAnVm9sdW1lU2VydmljZScsXHJcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkc2NvcGUsICRpbnRlcnZhbCwgJGh0dHAsIFZvbHVtZXNNb2RlbCwgVm9sdW1lU2VydmljZSkge1xyXG4gICAgICAgICAgICB2YXIgdm9sdW1lRGV0YWlsc0N0cmwgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9Wb2x1bWVzKCkge1xyXG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS52b2x1bWVzLmxpc3QnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBkZWxldGVWb2x1bWUoKSB7XHJcbiAgICAgICAgICAgICAgICBWb2x1bWVzTW9kZWwuZGVsZXRlKHZvbHVtZURldGFpbHNDdHJsLnZvbHVtZSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9Wb2x1bWVzKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Vm9sdW1lSW5mbyhyZWxvYWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0b2tlbnMgPSAkc3RhdGVQYXJhbXMua2V5LnNwbGl0KCcvJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbW9kZWwgPXt9O1xyXG4gICAgICAgICAgICAgICAgbW9kZWwucG9saWN5ID0gdG9rZW5zWzBdO1xyXG4gICAgICAgICAgICAgICAgbW9kZWwubmFtZSA9IHRva2Vuc1sxXTtcclxuICAgICAgICAgICAgICAgIFZvbHVtZXNNb2RlbC5nZXRNb2RlbChtb2RlbCwgcmVsb2FkKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh2b2x1bWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdm9sdW1lRGV0YWlsc0N0cmwudm9sdW1lID0gdm9sdW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRWb2x1bWVVc2VJbmZvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFZvbHVtZVNuYXBzaG90cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRWb2x1bWVVc2VJbmZvKCkge1xyXG4gICAgICAgICAgICAgICAgVm9sdW1lU2VydmljZS5nZXRWb2x1bWVVc2VJbmZvKHZvbHVtZURldGFpbHNDdHJsLnZvbHVtZSkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lRGV0YWlsc0N0cmwudm9sdW1lVXNlID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL1JldHVybnMgZXJyb3IgaWYgdm9sdW1lIGlzIG5vdCBtb3VudGVkIGJ5IGFueSBjb250YWluZXJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRWb2x1bWVTbmFwc2hvdHMoKSB7XHJcbiAgICAgICAgICAgICAgICBWb2x1bWVTZXJ2aWNlLmdldFZvbHVtZVNuYXBzaG90cyh2b2x1bWVEZXRhaWxzQ3RybC52b2x1bWUpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZURldGFpbHNDdHJsLnNuYXBzaG90cyA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjb3B5U25hcHNob3Qoc25hcHNob3QsIG5ld1ZvbHVtZSkge1xyXG4gICAgICAgICAgICAgICAgVm9sdW1lc01vZGVsLmNvcHkobW9kZWwsIHNuYXBzaG90LCBuZXdWb2x1bWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2b2x1bWVEZXRhaWxzQ3RybC5kZWxldGVWb2x1bWUgPSBkZWxldGVWb2x1bWU7XHJcbiAgICAgICAgICAgIHZvbHVtZURldGFpbHNDdHJsLmNvcHlTbmFwc2hvdCA9IGNvcHlTbmFwc2hvdDtcclxuXHJcbiAgICAgICAgICAgIC8vTG9hZCBmcm9tIGNhY2hlIGZvciBxdWljayBkaXNwbGF5IGluaXRpYWxseVxyXG4gICAgICAgICAgICBnZXRWb2x1bWVJbmZvKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBwcm9taXNlO1xyXG4gICAgICAgICAgICAvL0Rvbid0IGRvIGF1dG8tcmVmcmVzaCBpZiBvbmUgaXMgYWxyZWFkeSBpbiBwcm9ncmVzc1xyXG4gICAgICAgICAgICBpZiAoIWFuZ3VsYXIuaXNEZWZpbmVkKHByb21pc2UpKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBnZXRWb2x1bWVJbmZvKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSwgQ29udGl2R2xvYmFscy5SRUZSRVNIX0lOVEVSVkFMKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL3N0b3AgcG9sbGluZyB3aGVuIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXHJcbiAgICAgICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJGludGVydmFsLmNhbmNlbChwcm9taXNlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1dKTsiLCIvKipcclxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gMy8yMi8xNi5cclxuICovXHJcbmFuZ3VsYXIubW9kdWxlKCdjb250aXYudm9sdW1lcycpXHJcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcclxuICAgICAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnZvbHVtZXMubGlzdCcsIHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9saXN0JyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdWb2x1bWVMaXN0Q3RybCBhcyB2b2x1bWVMaXN0Q3RybCcsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZvbHVtZXMvdm9sdW1lbGlzdC5odG1sJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIDtcclxuICAgIH1dKVxyXG4gICAgLmNvbnRyb2xsZXIoJ1ZvbHVtZUxpc3RDdHJsJywgWyckc2NvcGUnLCAnJGludGVydmFsJywgJyRmaWx0ZXInLCAnVm9sdW1lc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcclxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkaW50ZXJ2YWwsICRmaWx0ZXIsIFZvbHVtZXNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcclxuICAgICAgICAgICAgdmFyIHZvbHVtZUxpc3RDdHJsID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFZvbHVtZXMocmVsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICBWb2x1bWVzTW9kZWwuZ2V0KHJlbG9hZClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIodm9sdW1lTGlzdEN0cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2b2x1bWVMaXN0Q3RybC52b2x1bWVzID0gJGZpbHRlcignb3JkZXJCeScpKHJlc3VsdCwgJ25hbWUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHZvbHVtZUxpc3RDdHJsKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9Mb2FkIGZyb20gY2FjaGUgZm9yIHF1aWNrIGRpc3BsYXkgaW5pdGlhbGx5XHJcbiAgICAgICAgICAgIGdldFZvbHVtZXMoZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHByb21pc2U7XHJcbiAgICAgICAgICAgIC8vRG9uJ3QgZG8gYXV0by1yZWZyZXNoIGlmIG9uZSBpcyBhbHJlYWR5IGluIHByb2dyZXNzXHJcbiAgICAgICAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQocHJvbWlzZSkpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2UgPSAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdldFZvbHVtZXModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9LCBDb250aXZHbG9iYWxzLlJFRlJFU0hfSU5URVJWQUwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vc3RvcCBwb2xsaW5nIHdoZW4gdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcclxuICAgICAgICAgICAgJHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHByb21pc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XSk7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA2LzUvMTYuXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnZvbHVtZXMnKVxyXG4gICAgLmZhY3RvcnkoJ1ZvbHVtZVNlcnZpY2UnLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFZvbHVtZVVzZUluZm8odm9sdW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcbiAgICAgICAgICAgIHZhciB1cmwgPSBDb250aXZHbG9iYWxzLlZPTFVNRVNfVVNFU19FTkRQT0lOVFxyXG4gICAgICAgICAgICAgICAgKyB2b2x1bWUucG9saWN5XHJcbiAgICAgICAgICAgICAgICArICcvJyArIHZvbHVtZS5uYW1lO1xyXG4gICAgICAgICAgICAkaHR0cC5nZXQodXJsKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgLy9SZXR1cm5zIGVycm9yIGlmIHZvbHVtZSBpcyBub3QgbW91bnRlZCBieSBhbnkgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRWb2x1bWVTbmFwc2hvdHModm9sdW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcbiAgICAgICAgICAgIHZhciB1cmwgPSBDb250aXZHbG9iYWxzLlZPTFVNRVNfU05BUFNIT1RTX0VORFBPSU5UXHJcbiAgICAgICAgICAgICAgICArIHZvbHVtZS5wb2xpY3lcclxuICAgICAgICAgICAgICAgICsgJy8nICsgdm9sdW1lLm5hbWU7XHJcbiAgICAgICAgICAgICRodHRwLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBnZXRWb2x1bWVVc2VJbmZvOiBnZXRWb2x1bWVVc2VJbmZvLFxyXG4gICAgICAgICAgICBnZXRWb2x1bWVTbmFwc2hvdHM6IGdldFZvbHVtZVNuYXBzaG90c1xyXG4gICAgICAgIH1cclxuICAgIH1dKTsiLCIvKipcclxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNi8yLzE2LlxyXG4gKi9cclxuYW5ndWxhci5tb2R1bGUoXCJjb250aXYuZGlyZWN0aXZlc1wiKVxyXG4gICAgLmRpcmVjdGl2ZShcImN0dkNvbGxhcHNpYmxlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdAJyxcclxuICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogJ0AnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlLmNvbGxhcHNlZCA9PT0gdW5kZWZpbmVkKSBzY29wZS5jb2xsYXBzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvZGlyZWN0aXZlcy9jb2xsYXBzaWJsZS5odG1sJ1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNC8yOC8xNi5cclxuICovXHJcbmFuZ3VsYXIubW9kdWxlKFwiY29udGl2LmRpcmVjdGl2ZXNcIilcclxuICAgIC5kaXJlY3RpdmUoXCJjdHZFcnJvclwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogJ0AnLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6ICc9J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHIpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuZmluZCgnaScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoJ25nLWhpZGUnKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9kaXJlY3RpdmVzL2Vycm9ybWVzc2FnZS5odG1sJ1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xMS8xNi5cclxuICovXHJcbmFuZ3VsYXIubW9kdWxlKFwiY29udGl2LmRpcmVjdGl2ZXNcIilcclxuICAgIC5kaXJlY3RpdmUoXCJjdHZOYW1ldmFsdWVcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgICAgaXRlbXM6ICc9JyxcclxuICAgICAgICAgICAgICAgbmFtZWhlYWRlcjogJ0AnLC8vRmllbGQgbmFtZSB0byBkaXNwbGF5IGZvciBrZXlcclxuICAgICAgICAgICAgICAgdmFsdWVoZWFkZXI6ICdAJywvL0ZpZWxkIG5hbWUgdG8gZGlzcGxheSBmb3IgdmFsdWVcclxuICAgICAgICAgICAgICAgdHlwZTogJ0AnLC8vJ3RleHQnIG9yICdzZWxlY3QnIHRvIGNob29zZSBpbnB1dCBvciBzZWxlY3QgaHRtbCB0YWcgZm9yIGtleVxyXG4gICAgICAgICAgICAgICBvcHRpb25zOiAnPScvL1RvIGJlIHVzZWQgd2hlbiB0eXBlIGlzICdzZWxlY3QnXHJcbiAgICAgICAgICAgfSxcclxuICAgICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSkge1xyXG4gICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICogQ29tcGFyZSBpZiB0d28gaXRlbXMgaGF2ZSBzYW1lIG5hbWVcclxuICAgICAgICAgICAgICAgICogQHBhcmFtIHZhbDFcclxuICAgICAgICAgICAgICAgICogQHBhcmFtIHZhbDJcclxuICAgICAgICAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICBmdW5jdGlvbiBjb21wYXJlKHZhbDEsIHZhbDIpIHtcclxuICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWwxLm5hbWUgPT0gdmFsMi5uYW1lO1xyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICBmdW5jdGlvbiByZXNldE5ld0l0ZW0oKSB7XHJcbiAgICAgICAgICAgICAgICAgICBzY29wZS5uZXdJdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgZnVuY3Rpb24gaXNFbXB0eUl0ZW0oaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgcmV0dXJuIChpdGVtLm5hbWUgPT09ICcnICYmIGl0ZW0udmFsdWUgPT09ICcnKTtcclxuICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgc2NvcGUuYWRkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICBpZiAoaXNFbXB0eUl0ZW0oc2NvcGUubmV3SXRlbSkpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgIGlmIChzY29wZS5pdGVtID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5pdGVtID0gW107XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAvL1JlbW92ZXMgZXhpc3RpbmcgaXRlbSB3aXRoIHRoZSBzYW1lIG5hbWUgZmlyc3QgaWYgaXQgZXhpc3RzLlxyXG4gICAgICAgICAgICAgICAgICAgXy5wdWxsQWxsV2l0aChzY29wZS5pdGVtcywgW3Njb3BlLm5ld0l0ZW1dLCBjb21wYXJlKTtcclxuICAgICAgICAgICAgICAgICAgIHNjb3BlLml0ZW1zLnB1c2goc2NvcGUubmV3SXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICByZXNldE5ld0l0ZW0oKTtcclxuICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgIHNjb3BlLnJlbW92ZSA9IGZ1bmN0aW9uKHBhc3NlZEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgIF8ucmVtb3ZlKHNjb3BlLml0ZW1zLCBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLm5hbWUgPT0gcGFzc2VkSXRlbS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgIHJlc2V0TmV3SXRlbSgpO1xyXG5cclxuICAgICAgICAgICAgICAgaWYgKHNjb3BlLm5hbWVoZWFkZXIgPT09IHVuZGVmaW5lZCkgc2NvcGUubmFtZWhlYWRlciA9ICdOYW1lJztcclxuICAgICAgICAgICAgICAgaWYgKHNjb3BlLnZhbHVlaGVhZGVyID09PSB1bmRlZmluZWQpIHNjb3BlLnZhbHVlaGVhZGVyID0gJ1ZhbHVlJztcclxuICAgICAgICAgICAgICAgaWYgKHNjb3BlLnR5cGUgPT09IHVuZGVmaW5lZCkgc2NvcGUudHlwZSA9ICd0ZXh0JztcclxuICAgICAgICAgICB9LFxyXG4gICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9kaXJlY3RpdmVzL25hbWV2YWx1ZS5odG1sJ1xyXG4gICAgICAgfVxyXG4gICAgfSk7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzQvMTYuXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZShcImNvbnRpdi5kaXJlY3RpdmVzXCIpXHJcbiAgICAuZGlyZWN0aXZlKFwiY3R2VGFibGVcIiwgWydmaWx0ZXJGaWx0ZXInLCAnbGltaXRUb0ZpbHRlcicsIGZ1bmN0aW9uIChmaWx0ZXJGaWx0ZXIsIGxpbWl0VG9GaWx0ZXIpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxyXG4gICAgICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6ICc9JyxcclxuICAgICAgICAgICAgICAgIGZpbHRlcmVkaXRlbXM6ICc9JyxcclxuICAgICAgICAgICAgICAgIHNpemU6ICdAJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiBbJyRzY29wZScsICckZWxlbWVudCcsICckYXR0cnMnLCBmdW5jdGlvbiAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGFibGVDdHJsID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5jaHVua3MgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5wYWdlTm8gPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5zaXplID0gcGFyc2VJbnQoJHNjb3BlLnNpemUsIDEwKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc05hTih0YWJsZUN0cmwuc2l6ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZUN0cmwuc2l6ZSA9IDEyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogQWx3YXlzIGNhbGwgc2hvd0NodW5rIHdpdGggYm90aCBwYXJhbWV0ZXJzLlxyXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHBhZ2VOb1xyXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHNlYXJjaFRleHRcclxuICAgICAgICAgICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzaG93Q2h1bmsocGFnZU5vLCBzZWFyY2hUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGVDdHJsLnNlYXJjaFRleHQgPSBzZWFyY2hUZXh0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFnZU5vID09PSB1bmRlZmluZWQgfHwgcGFnZU5vIDwgMCkgcGFnZU5vID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZUN0cmwucGFnZU5vID0gcGFnZU5vO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLml0ZW1zICE9PSB1bmRlZmluZWQpIHsvL1RPRE86IENoZWNrIHdoeSBpdGVtcyBhcmUgdW5kZWZpbmVkIGR1cmluZyBpbml0aWFsaXphdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VhcmNoVGV4dEZpbHRlcmVkSXRlbXMgPSBmaWx0ZXJGaWx0ZXIoJHNjb3BlLml0ZW1zLCB0YWJsZUN0cmwuc2VhcmNoVGV4dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9PZkNodW5rcyA9IE1hdGguY2VpbChzZWFyY2hUZXh0RmlsdGVyZWRJdGVtcy5sZW5ndGggLyB0YWJsZUN0cmwuc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub09mQ2h1bmtzID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vT2ZDaHVua3MgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5jaHVua3MgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub09mQ2h1bmtzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5jaHVua3MucHVzaCh7c2VsZWN0ZWQ6IGZhbHNlLCBwYWdlTm86IGl9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9BZnRlciBmaWx0ZXJpbmcgbnVtYmVyIG9mIGNodW5rcyBjb3VsZCBjaGFuZ2Ugc28gcmVzZXQgcGFnZSBubyBpZiBpdCBpcyBncmVhdGVyIHRoYW4gbm8gb2YgY2h1bmtzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYWdlTm8gPj0gdGFibGVDdHJsLmNodW5rcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5wYWdlTm8gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUN0cmwuY2h1bmtzW3RhYmxlQ3RybC5wYWdlTm9dLnNlbGVjdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vVXBkYXRlIG51bWJlciBvZiBjaHVua3MgZm9yIHBhZ2luYXRpb24gbWVudVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFibGVDdHJsLmNodW5rcy5sZW5ndGggPiA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2xpY2VTdGFydCwgc2xpY2VFbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGljZVN0YXJ0ID0gdGFibGVDdHJsLnBhZ2VObyAtIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGljZUVuZCA9IHRhYmxlQ3RybC5wYWdlTm8gKyAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWNlU3RhcnQgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2VFbmQgPSBzbGljZUVuZCAtIHNsaWNlU3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2VTdGFydCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2xpY2VFbmQgPiB0YWJsZUN0cmwuY2h1bmtzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlU3RhcnQgPSBzbGljZVN0YXJ0IC0gKHNsaWNlRW5kIC0gdGFibGVDdHJsLmNodW5rcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlRW5kID0gdGFibGVDdHJsLmNodW5rcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUucGFnaW5hdGlvbk1lbnUuY2h1bmtzID0gdGFibGVDdHJsLmNodW5rcy5zbGljZShzbGljZVN0YXJ0LCBzbGljZUVuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUucGFnaW5hdGlvbk1lbnUuY2h1bmtzID0gdGFibGVDdHJsLmNodW5rcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDdHJsLmZpbHRlcmVkSXRlbXMgPSBsaW1pdFRvRmlsdGVyKHNlYXJjaFRleHRGaWx0ZXJlZEl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDdHJsLnNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUN0cmwucGFnZU5vICogdGFibGVDdHJsLnNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmlsdGVyZWRpdGVtcyA9IHRhYmxlQ3RybC5maWx0ZXJlZEl0ZW1zO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNob3dQcmV2Q2h1bmsoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZDaHVuaztcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFibGVDdHJsLnBhZ2VObyA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZDaHVuayA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldkNodW5rID0gdGFibGVDdHJsLnBhZ2VObyAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzaG93Q2h1bmsocHJldkNodW5rKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzaG93TmV4dENodW5rKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXh0Q2h1bms7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dENodW5rID0gdGFibGVDdHJsLnBhZ2VObyArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRDaHVuayA+IHRhYmxlQ3RybC5jaHVua3MubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0Q2h1bmsgPSB0YWJsZUN0cmwuY2h1bmtzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzaG93Q2h1bmsobmV4dENodW5rKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFNhdmUgcGFnaW5hdGlvbiBzY29wZSB0byBwcm92aWRlIGNodW5rIGluZm9ybWF0aW9uIHRvIHBhZ2luYXRpb24gbWVudS5cclxuICAgICAgICAgICAgICAgICAqIEBwYXJhbSBtZW51XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGFkZFBhZ2luYXRpb25NZW51KG1lbnUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUucGFnaW5hdGlvbk1lbnUgPSBtZW51O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5zaG93Q2h1bmsgPSBzaG93Q2h1bms7XHJcbiAgICAgICAgICAgICAgICB0YWJsZUN0cmwuc2hvd05leHRDaHVuayA9IHNob3dOZXh0Q2h1bms7XHJcbiAgICAgICAgICAgICAgICB0YWJsZUN0cmwuc2hvd1ByZXZDaHVuayA9IHNob3dQcmV2Q2h1bms7XHJcbiAgICAgICAgICAgICAgICB0YWJsZUN0cmwuYWRkUGFnaW5hdGlvbk1lbnUgPSBhZGRQYWdpbmF0aW9uTWVudTtcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMsIHRhYmxlQ3RybCkge1xyXG4gICAgICAgICAgICAgICAgLy9XYXRjaCBmb3IgaXRlbXMgYXMgdGhleSB3aWxsIGJlIGF1dG8gcmVmcmVzaGVkXHJcbiAgICAgICAgICAgICAgICBzY29wZS4kcGFyZW50LiR3YXRjaChhdHRycy5pdGVtcywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5zaG93Q2h1bmsodGFibGVDdHJsLnBhZ2VObywgdGFibGVDdHJsLnNlYXJjaFRleHQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvZGlyZWN0aXZlcy90YWJsZS5odG1sJ1xyXG4gICAgICAgIH1cclxuICAgIH1dKVxyXG4gICAgLmRpcmVjdGl2ZShcImN0dlRoZWFkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxyXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJzx0aGVhZCBuZy10cmFuc2NsdWRlPjwvdGhlYWQ+J1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuZGlyZWN0aXZlKFwiY3R2VGhcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXHJcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXHJcbiAgICAgICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgICAgICBjbGFzczogJ0AnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnPHRoIG5nLWNsYXNzPVwiY2xhc3NcIiBuZy10cmFuc2NsdWRlPjwvdGg+J1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuZGlyZWN0aXZlKFwiY3R2VGJvZHlcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgICAgIHNjb3BlOiB7fSxcclxuICAgICAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcclxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgICAgICAgICAgdGVtcGxhdGU6ICc8dGJvZHkgbmctdHJhbnNjbHVkZT48L3Rib2R5PidcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmRpcmVjdGl2ZShcImN0dlRmb290XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICAgICAgICBzY29wZToge30sXHJcbiAgICAgICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXHJcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnPHRmb290IG5nLXRyYW5zY2x1ZGU+PC90Zm9vdD4nXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5kaXJlY3RpdmUoXCJjdHZUc2VhcmNoXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICAgICAgICByZXF1aXJlOiAnXl5jdHZUYWJsZScsXHJcbiAgICAgICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0AnLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogJ0AnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0ciwgdGFibGVDdHJsKSB7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5zaG93Q2h1bmsgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGVDdHJsLnNob3dDaHVuayh0YWJsZUN0cmwucGFnZU5vLCBzY29wZS5zZWFyY2hUZXh0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2RpcmVjdGl2ZXMvc2VhcmNoaW5wdXQuaHRtbCdcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmRpcmVjdGl2ZShcImN0dlRyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICAgICAgICB0cmFuc2NsdWRlOiAndHJ1ZScsXHJcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXHJcbiAgICAgICAgICAgIHNjb3BlOiB7fSxcclxuICAgICAgICAgICAgdGVtcGxhdGU6ICc8dHIgbmctdHJhbnNjbHVkZT48L3RyPidcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmRpcmVjdGl2ZShcImN0dlRkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxyXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxyXG4gICAgICAgICAgICBzY29wZTogdHJ1ZSxcclxuICAgICAgICAgICAgdGVtcGxhdGU6ICc8dGQgbmctdHJhbnNjbHVkZT48L3RkPidcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmRpcmVjdGl2ZShcImN0dlRwYWdpbmF0aW9uXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICAgICAgICByZXF1aXJlOiAnXl5jdHZUYWJsZScsXHJcbiAgICAgICAgICAgIHNjb3BlOiB7fSxcclxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRyLCB0YWJsZUN0cmwpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5hZGRQYWdpbmF0aW9uTWVudShzY29wZSk7XHJcbiAgICAgICAgICAgICAgICAvL3Nob3dDaHVuaygpIHdpbGwgY2FsY3VsYXRlIGFuZCBzZXQgY2h1bmtzIGluIHNjb3BlXHJcbiAgICAgICAgICAgICAgICB0YWJsZUN0cmwuc2hvd0NodW5rKHRhYmxlQ3RybC5wYWdlTm8sIHRhYmxlQ3RybC5zZWFyY2hUZXh0KTtcclxuICAgICAgICAgICAgICAgIHNjb3BlLnNob3dDaHVuayA9IGZ1bmN0aW9uIChwYWdlTm8pIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZUN0cmwuc2hvd0NodW5rKHBhZ2VObywgdGFibGVDdHJsLnNlYXJjaFRleHQpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHNjb3BlLnNob3dQcmV2Q2h1bmsgPSB0YWJsZUN0cmwuc2hvd1ByZXZDaHVuaztcclxuICAgICAgICAgICAgICAgIHNjb3BlLnNob3dOZXh0Q2h1bmsgPSB0YWJsZUN0cmwuc2hvd05leHRDaHVuaztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2RpcmVjdGl2ZXMvcGFnaW5hdGlvbm1lbnUuaHRtbCdcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMTEvMTYuXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm1vZGVscycpXHJcbiAgICAuZmFjdG9yeSgnQXBwbGljYXRpb25Hcm91cHNNb2RlbCcsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XHJcbiAgICAgICAgdmFyIGdyb3Vwc21vZGVsID0gbmV3IENvbGxlY3Rpb24oJGh0dHAsICRxLCBDb250aXZHbG9iYWxzLkFQUExJQ0FUSU9OR1JPVVBTX0VORFBPSU5UKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2VuZXJhdGUga2V5IGZvciBhcHBsaWNhdGlvbiBncm91cFxyXG4gICAgICAgICAqIEBwYXJhbSBncm91cFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdyb3Vwc21vZGVsLmdlbmVyYXRlS2V5ID0gZnVuY3Rpb24gKGdyb3VwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBncm91cC50ZW5hbnROYW1lICsgJzonICsgZ3JvdXAuZ3JvdXBOYW1lO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBncm91cHNtb2RlbDtcclxuICAgIH1dKTsiLCIvKipcclxuICogQmFzZUNvbGxlY3Rpb24gY2xhc3MgdGhhdCBkb2VzIGp1c3QgZmV0Y2ggb2YgdGhlIG9iamVjdHMuXHJcbiAqIEBwYXJhbSAkaHR0cFxyXG4gKiBAcGFyYW0gJHFcclxuICogQHBhcmFtIHVybCBVc2VkIGZvciBkb2luZyBIVFRQIEdFVCBhbmQgZmV0Y2ggb2JqZWN0cyBmcm9tIHNlcnZlclxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIEJhc2VDb2xsZWN0aW9uKCRodHRwLCAkcSwgdXJsKSB7XHJcbiAgICB0aGlzLm1vZGVscyA9IFtdO1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG4gICAgdGhpcy51cmwgPSB1cmw7XHJcbn1cclxuXHJcbkJhc2VDb2xsZWN0aW9uLnByb3RvdHlwZS5leHRyYWN0ID0gZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSByZWxvYWQgT3B0aW9uYWwuIERlZmF1bHQgaXMgZmFsc2VcclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5CYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHJlbG9hZCkge1xyXG4gICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzO1xyXG4gICAgaWYgKHJlbG9hZCA9PT0gdW5kZWZpbmVkKSByZWxvYWQgPSBmYWxzZTtcclxuICAgIHJldHVybiAoIXJlbG9hZCAmJiBjb2xsZWN0aW9uLm1vZGVscy5sZW5ndGggPiAwKSA/XHJcbiAgICAgICAgY29sbGVjdGlvbi4kcS53aGVuKGNvbGxlY3Rpb24ubW9kZWxzKSA6IGNvbGxlY3Rpb24uJGh0dHAuZ2V0KGNvbGxlY3Rpb24udXJsKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgY29sbGVjdGlvbi5tb2RlbHMgPSBjb2xsZWN0aW9uLmV4dHJhY3QocmVzdWx0KTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb24ubW9kZWxzO1xyXG4gICAgICAgIH0pO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBrZXlcclxuICogQHBhcmFtIHJlbG9hZCBPcHRpb25hbC4gRGVmYXVsdCBpcyBmYWxzZVxyXG4gKiBAcGFyYW0ga2V5bmFtZVxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbkJhc2VDb2xsZWN0aW9uLnByb3RvdHlwZS5nZXRNb2RlbEJ5S2V5ID0gZnVuY3Rpb24gKGtleSwgcmVsb2FkLCBrZXluYW1lKSB7XHJcbiAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXM7XHJcbiAgICBpZiAocmVsb2FkID09PSB1bmRlZmluZWQpIHJlbG9hZCA9IGZhbHNlO1xyXG4gICAgaWYgKGtleW5hbWUgPT09IHVuZGVmaW5lZCkga2V5bmFtZSA9ICdrZXknO1xyXG5cclxuICAgIHZhciBkZWZlcnJlZCA9IGNvbGxlY3Rpb24uJHEuZGVmZXIoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBmaW5kTW9kZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIF8uZmluZChjb2xsZWN0aW9uLm1vZGVscywgZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNba2V5bmFtZV0gPT0ga2V5O1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFyZWxvYWQgJiYgY29sbGVjdGlvbi5tb2RlbHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUoZmluZE1vZGVsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb2xsZWN0aW9uLmdldChyZWxvYWQpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoZmluZE1vZGVsKCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0gbW9kZWxcclxuICogQHBhcmFtIHJlbG9hZCBPcHRpb25hbC4gRGVmYXVsdCBpcyBmYWxzZVxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbkJhc2VDb2xsZWN0aW9uLnByb3RvdHlwZS5nZXRNb2RlbCA9IGZ1bmN0aW9uIChtb2RlbCwgcmVsb2FkKSB7XHJcbiAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXM7XHJcbiAgICBpZiAocmVsb2FkID09PSB1bmRlZmluZWQpIHJlbG9hZCA9IGZhbHNlO1xyXG5cclxuICAgIHZhciBkZWZlcnJlZCA9IGNvbGxlY3Rpb24uJHEuZGVmZXIoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBmaW5kTW9kZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIF8uZmluZChjb2xsZWN0aW9uLm1vZGVscywgbW9kZWwpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFyZWxvYWQgJiYgY29sbGVjdGlvbi5tb2RlbHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUoZmluZE1vZGVsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb2xsZWN0aW9uLmdldChyZWxvYWQpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoZmluZE1vZGVsKCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxufTtcclxuXHJcblxyXG4vKipcclxuICogRXh0ZW5kcyBCYXNlQ29sbGVjdGlvbiBjbGFzcyB0byBkbyBjcmVhdGUsIHVwZGF0ZSBhbmQgZGVsZXRlIHVzaW5nIFBPU1QsIFBVVCBhbmQgREVMRVRFIHZlcmJzLlxyXG4gKiBAcGFyYW0gJGh0dHBcclxuICogQHBhcmFtICRxXHJcbiAqIEBwYXJhbSB1cmwgVXNlZCBmb3IgZG9pbmcgSFRUUCBHRVQgYW5kIGZldGNoIG9iamVjdHMgZnJvbSBzZXJ2ZXJcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBDb2xsZWN0aW9uKCRodHRwLCAkcSwgdXJsKSB7XHJcbiAgICBCYXNlQ29sbGVjdGlvbi5jYWxsKHRoaXMsICRodHRwLCAkcSwgdXJsKTtcclxufVxyXG5cclxuQ29sbGVjdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2VDb2xsZWN0aW9uLnByb3RvdHlwZSk7XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIG1vZGVsXHJcbiAqIEBwYXJhbSB1cmwgT3B0aW9uYWwgaWYgbm90IHBhc3NlZCBpdCBpcyBjb25zdHJ1Y3RlZCB1c2luZyBrZXkgYW5kIHVybCBwYXNzZWQgaW4gY29uc3RydWN0b3JcclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5Db2xsZWN0aW9uLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAobW9kZWwsIHVybCkge1xyXG4gICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzO1xyXG4gICAgdmFyIGRlZmVycmVkID0gY29sbGVjdGlvbi4kcS5kZWZlcigpO1xyXG4gICAgaWYgKHVybCA9PT0gdW5kZWZpbmVkKSB1cmwgPSBjb2xsZWN0aW9uLnVybCArIG1vZGVsLmtleSArICcvJztcclxuICAgIGNvbGxlY3Rpb24uJGh0dHAucG9zdCh1cmwsIG1vZGVsKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2VEYXRhID0gY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgLy9Gb3IgcmVzdCBlbmRwb2ludHMgdGhhdCBkbyBub3QgcmV0dXJuIGNyZWF0ZWQganNvbiBvYmplY3QgaW4gcmVzcG9uc2VcclxuICAgICAgICAgICAgaWYgKChyZXNwb25zZURhdGEgPT09IHVuZGVmaW5lZCkgfHwgKHJlc3BvbnNlRGF0YSA9PT0gJycpKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZURhdGEgPSBtb2RlbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2NvbGxlY3Rpb24ubW9kZWxzLnB1c2goY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgIGNvbGxlY3Rpb24ubW9kZWxzLnB1c2gocmVzcG9uc2VEYXRhKTtcclxuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcclxuICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcclxuICAgICAgICB9KTtcclxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgaXMgZm9yIG5ldG1hc3RlciBzcGVjaWZpYyBlbmRwb2ludHMgYW5kIHVzZWQgYnkgbmV0bWFzdGVyIG9iamVjdHMgb25seS5cclxuICogVE9ETzogR2VuZXJhbGl6ZVxyXG4gKiBAcGFyYW0gbW9kZWxcclxuICogQHBhcmFtIHVybCBPcHRpb25hbFxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbkNvbGxlY3Rpb24ucHJvdG90eXBlLnNhdmUgPSBmdW5jdGlvbiAobW9kZWwpIHtcclxuICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcztcclxuICAgIHZhciBkZWZlcnJlZCA9IGNvbGxlY3Rpb24uJHEuZGVmZXIoKTtcclxuICAgIHZhciB1cmwgPSBjb2xsZWN0aW9uLnVybCArIG1vZGVsLmtleSArICcvJztcclxuICAgIGNvbGxlY3Rpb24uJGh0dHAucHV0KHVybCwgbW9kZWwpXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIF8ucmVtb3ZlKGNvbGxlY3Rpb24ubW9kZWxzLCBmdW5jdGlvbiAobikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG4ua2V5ID09IG1vZGVsLmtleTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbGxlY3Rpb24ubW9kZWxzLnB1c2goY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGlzIGZvciBuZXRtYXN0ZXIgc3BlY2lmaWMgZW5kcG9pbnRzIGFuZCB1c2VkIGJ5IG5ldG1hc3RlciBvYmplY3RzIG9ubHkuXHJcbiAqIFRPRE86IEdlbmVyYWxpemVcclxuICogQHBhcmFtIG1vZGVsXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxuQ29sbGVjdGlvbi5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKG1vZGVsKSB7XHJcbiAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXM7XHJcbiAgICB2YXIgZGVmZXJyZWQgPSBjb2xsZWN0aW9uLiRxLmRlZmVyKCk7XHJcbiAgICB2YXIgdXJsID0gY29sbGVjdGlvbi51cmwgKyBtb2RlbC5rZXkgKyAnLyc7XHJcbiAgICBjb2xsZWN0aW9uLiRodHRwLmRlbGV0ZSh1cmwpXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIF8ucmVtb3ZlKGNvbGxlY3Rpb24ubW9kZWxzLCBmdW5jdGlvbiAobikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG4ua2V5ID09IG1vZGVsLmtleTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ga2V5XHJcbiAqIEBwYXJhbSBrZXluYW1lXHJcbiAqIEBwYXJhbSB1cmwgT3B0aW9uYWwgaWYgbm90IHBhc3NlZCBpdCBpcyBjb25zdHJ1Y3RlZCB1c2luZyBrZXkgYW5kIHVybCBwYXNzZWQgaW4gY29uc3RydWN0b3JcclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5Db2xsZWN0aW9uLnByb3RvdHlwZS5kZWxldGVVc2luZ0tleSA9IGZ1bmN0aW9uIChrZXksIGtleW5hbWUsIHVybCkge1xyXG4gICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzO1xyXG4gICAgaWYgKGtleW5hbWUgPT09IHVuZGVmaW5lZCkga2V5bmFtZSA9ICdrZXknO1xyXG5cclxuICAgIHZhciBkZWZlcnJlZCA9IGNvbGxlY3Rpb24uJHEuZGVmZXIoKTtcclxuICAgIGlmICh1cmwgPT09IHVuZGVmaW5lZCkgdXJsID0gY29sbGVjdGlvbi51cmwgKyBrZXkgKyAnLyc7XHJcbiAgICBjb2xsZWN0aW9uLiRodHRwLmRlbGV0ZSh1cmwpXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIF8ucmVtb3ZlKGNvbGxlY3Rpb24ubW9kZWxzLCBmdW5jdGlvbiAobikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ba2V5bmFtZV0gPT0ga2V5O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcclxuICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcclxuICAgICAgICB9KTtcclxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG59OyIsImFuZ3VsYXIubW9kdWxlKCdjb250aXYubW9kZWxzJylcclxuICAgIC5mYWN0b3J5KCdOZXR3b3Jrc01vZGVsJywgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcclxuICAgICAgICByZXR1cm4gbmV3IENvbGxlY3Rpb24oJGh0dHAsICRxLCBDb250aXZHbG9iYWxzLk5FVFdPUktTX0VORFBPSU5UKTtcclxuICAgIH1dKTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMjIvMTYuXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm1vZGVscycpXHJcbiAgICAuZmFjdG9yeSgnTm9kZXNNb2RlbCcsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XHJcbiAgICAgICAgdmFyIG5vZGVzbW9kZWwgPSBuZXcgTm9kZXNDb2xsZWN0aW9uKCRodHRwLCAkcSk7XHJcbiAgICAgICAgcmV0dXJuIG5vZGVzbW9kZWw7XHJcbiAgICB9XSk7XHJcblxyXG4vKipcclxuICogTm9kZXNDb2xsZWN0aW9uIGV4dGVuZHMgZnJvbSBCYXNlQ29sbGVjdGlvbi4gSXQgb3ZlcnJpZGVzIGV4dHJhY3QoKSBhbmQgYWRkcyBjb21taXNzaW9uLCBkZWNvbW1pc3Npb24sIHVwZ3JhZGUgYW5kXHJcbiAqIGRpc2NvdmVyIG1ldGhvZHNcclxuICogQHBhcmFtICRodHRwXHJcbiAqIEBwYXJhbSAkcVxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIE5vZGVzQ29sbGVjdGlvbigkaHR0cCwgJHEpIHtcclxuICAgIEJhc2VDb2xsZWN0aW9uLmNhbGwodGhpcywgJGh0dHAsICRxLCBDb250aXZHbG9iYWxzLk5PREVTX0xJU1RfRU5EUE9JTlQpO1xyXG59XHJcblxyXG5Ob2Rlc0NvbGxlY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShCYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUpO1xyXG5cclxuTm9kZXNDb2xsZWN0aW9uLnByb3RvdHlwZS5leHRyYWN0ID0gZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgLy9Db252ZXJ0IHRvIGFycmF5IGlmIHRoZSByZXR1cm5lZCBjb2xsZWN0aW9uIGlzIG5vdCBhbiBhcnJheVxyXG4gICAgcmV0dXJuIF8ubWFwKHJlc3VsdC5kYXRhLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgIHZhbHVlLmtleSA9IGtleTtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9KTtcclxufTtcclxuXHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIGtleVxyXG4gKiBAcGFyYW0gZXh0cmFWYXJzIEpTT04gb2JqZWN0IG9mIGV4dHJhIGFuc2libGUgYW5kIGVudmlyb25tZW50IHZhcmlhYmxlcyB0byBiZSBwYXNzZWQgd2hpbGUgY29tbWlzc2lvbmluZyBhIG5vZGVcclxuICoge1xyXG4gICAgICogXCJlbnZcIjp7XCJodHRwX3Byb3h5XCI6XCJodHRwOi8vcHJveHkuZXNsLmNpc2NvLmNvbTo4MDgwXCIsIFwiaHR0cHNfcHJveHlcIjpcImh0dHA6Ly9wcm94eS5lc2wuY2lzY28uY29tOjgwODBcIn0sXHJcbiAgICAgKiBcImNvbnRyb2xfaW50ZXJmYWNlXCI6IFwiZXRoMVwiLCBcInNlcnZpY2VfdmlwXCI6IFwiMTkyLjE2OC4yLjI1MlwiLCBcInZhbGlkYXRlX2NlcnRzXCI6IFwiZmFsc2VcIiwgXCJuZXRwbHVnaW5faWZcIiA6IFwiZXRoMlwiXHJcbiAgICAgKiB9XHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxuTm9kZXNDb2xsZWN0aW9uLnByb3RvdHlwZS5jb21taXNzaW9uID0gZnVuY3Rpb24gKG5vZGVPcHNPYmopIHtcclxuICAgIHZhciBub2Rlc2NvbGxlY3Rpb24gPSB0aGlzO1xyXG4gICAgdmFyIGRlZmVycmVkID0gbm9kZXNjb2xsZWN0aW9uLiRxLmRlZmVyKCk7XHJcbiAgICB2YXIgdXJsID0gQ29udGl2R2xvYmFscy5OT0RFU19DT01NSVNTSU9OX0VORFBPSU5UO1xyXG4gICAgbm9kZXNjb2xsZWN0aW9uLiRodHRwLnBvc3QodXJsLCBub2RlT3BzT2JqLCB7XHJcbiAgICAgICAgICAgICdoZWFkZXJzJzoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgLy9TZXJ2ZXIgZG9lc24ndCByZXR1cm4gYW55IGpzb24gaW4gcmVzcG9uc2VcclxuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG59O1xyXG5cclxuTm9kZXNDb2xsZWN0aW9uLnByb3RvdHlwZS5kZWNvbW1pc3Npb24gPSBmdW5jdGlvbiAobm9kZU9wc09iaikge1xyXG4gICAgdmFyIG5vZGVzY29sbGVjdGlvbiA9IHRoaXM7XHJcbiAgICB2YXIgZGVmZXJyZWQgPSBub2Rlc2NvbGxlY3Rpb24uJHEuZGVmZXIoKTtcclxuICAgIHZhciB1cmwgPSBDb250aXZHbG9iYWxzLk5PREVTX0RFQ09NTUlTU0lPTl9FTkRQT0lOVDtcclxuICAgIG5vZGVzY29sbGVjdGlvbi4kaHR0cC5wb3N0KHVybCwgbm9kZU9wc09iaiwge1xyXG4gICAgICAgICAgICAnaGVhZGVycyc6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcclxuICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZXNwb25zZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxufTtcclxuXHJcbk5vZGVzQ29sbGVjdGlvbi5wcm90b3R5cGUudXBncmFkZSA9IGZ1bmN0aW9uIChub2RlT3BzT2JqKSB7XHJcbiAgICB2YXIgbm9kZXNjb2xsZWN0aW9uID0gdGhpcztcclxuICAgIHZhciBkZWZlcnJlZCA9IG5vZGVzY29sbGVjdGlvbi4kcS5kZWZlcigpO1xyXG4gICAgdmFyIHVybCA9IENvbnRpdkdsb2JhbHMuTk9ERVNfTUFJTlRFTkFOQ0VfRU5EUE9JTlQ7XHJcbiAgICBub2Rlc2NvbGxlY3Rpb24uJGh0dHAucG9zdCh1cmwsIG5vZGVPcHNPYmosIHtcclxuICAgICAgICAgICAgJ2hlYWRlcnMnOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbn07XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIGlwXHJcbiAqIEBwYXJhbSBleHRyYVZhcnMgSlNPTiBvYmplY3Qgb2YgZXh0cmEgYW5zaWJsZSBhbmQgZW52aXJvbm1lbnQgdmFyaWFibGVzIHRvIGJlIHBhc3NlZCB3aGlsZSBkaXNjb3ZlcmluZyBhIG5vZGVcclxuICoge1xyXG4gICAgICogXCJlbnZcIjp7XCJodHRwX3Byb3h5XCI6XCJodHRwOi8vcHJveHkuZXNsLmNpc2NvLmNvbTo4MDgwXCIsIFwiaHR0cHNfcHJveHlcIjpcImh0dHA6Ly9wcm94eS5lc2wuY2lzY28uY29tOjgwODBcIn0sXHJcbiAgICAgKiBcImNvbnRyb2xfaW50ZXJmYWNlXCI6IFwiZXRoMVwiLCBcInNlcnZpY2VfdmlwXCI6IFwiMTkyLjE2OC4yLjI1MlwiLCBcImNsdXN0ZXItbmFtZVwiOiBcImNvbnRpdlwiLCBcIm5vZGUtbGFiZWxcIiA6IFwibm9kZTFcIlxyXG4gICAgICogfVxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbk5vZGVzQ29sbGVjdGlvbi5wcm90b3R5cGUuZGlzY292ZXIgPSBmdW5jdGlvbiAobm9kZU9wc09iaikge1xyXG4gICAgdmFyIG5vZGVzY29sbGVjdGlvbiA9IHRoaXM7XHJcbiAgICB2YXIgZGVmZXJyZWQgPSBub2Rlc2NvbGxlY3Rpb24uJHEuZGVmZXIoKTtcclxuICAgIHZhciB1cmwgPSBDb250aXZHbG9iYWxzLk5PREVTX0RJU0NPVkVSX0VORFBPSU5UO1xyXG4gICAgbm9kZXNjb2xsZWN0aW9uLiRodHRwLnBvc3QodXJsLCBub2RlT3BzT2JqLCB7XHJcbiAgICAgICAgICAgICdoZWFkZXJzJzoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG59OyIsImFuZ3VsYXIubW9kdWxlKCdjb250aXYubW9kZWxzJylcclxuICAgIC5mYWN0b3J5KCdPcmdhbml6YXRpb25zTW9kZWwnLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ29sbGVjdGlvbigkaHR0cCwgJHEsIENvbnRpdkdsb2JhbHMuT1JHQU5JWkFUSU9OU19FTkRQT0lOVCk7XHJcbiAgICB9XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5tb2RlbHMnKVxyXG4gICAgLmZhY3RvcnkoJ1BvbGljaWVzTW9kZWwnLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xyXG4gICAgICAgIHZhciBwb2xpY2llc21vZGVsID0gbmV3IENvbGxlY3Rpb24oJGh0dHAsICRxLCBDb250aXZHbG9iYWxzLlBPTElDSUVTX0VORFBPSU5UKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2VuZXJhdGUgcG9saWN5IGtleSB0byBzYXZlIHBvbGljeSBvbiBzZXJ2ZXJcclxuICAgICAgICAgKiBAcGFyYW0gcG9saWN5XHJcbiAgICAgICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAgICAgKi9cclxuICAgICAgICBwb2xpY2llc21vZGVsLmdlbmVyYXRlS2V5ID0gZnVuY3Rpb24gKHBvbGljeSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcG9saWN5LnRlbmFudE5hbWUgKyAnOicgKyBwb2xpY3kucG9saWN5TmFtZTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gcG9saWNpZXNtb2RlbDtcclxuICAgIH1dKTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvOC8xNi5cclxuICovXHJcbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubW9kZWxzJylcclxuICAgIC5mYWN0b3J5KCdSdWxlc01vZGVsJywgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcclxuICAgICAgICB2YXIgcnVsZXNtb2RlbCA9IG5ldyBDb2xsZWN0aW9uKCRodHRwLCAkcSwgQ29udGl2R2xvYmFscy5SVUxFU19FTkRQT0lOVCk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldCBpbmNvbWluZyBydWxlcyBmb3IgYSBnaXZlbiBwb2xpY3kgYW5kIGEgdGVuYW50XHJcbiAgICAgICAgICogQHBhcmFtIHBvbGljeU5hbWVcclxuICAgICAgICAgKiBAcGFyYW0gdGVuYW50TmFtZVxyXG4gICAgICAgICAqIEByZXR1cm5zIHsqfHdlYmRyaXZlci5wcm9taXNlLlByb21pc2V9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcnVsZXNtb2RlbC5nZXRJbmNvbWluZ1J1bGVzID0gZnVuY3Rpb24gKHBvbGljeU5hbWUsIHRlbmFudE5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVzbW9kZWwuZ2V0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXy5maWx0ZXIocmVzdWx0LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3BvbGljeU5hbWUnOiBwb2xpY3lOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXJlY3Rpb24nOiAnaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICd0ZW5hbnROYW1lJzogdGVuYW50TmFtZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXQgb3V0Z29pbmcgcnVsZXMgZm9yIGEgZ2l2ZW4gcG9saWN5IGFuZCBhIHRlbmFudFxyXG4gICAgICAgICAqIEBwYXJhbSBwb2xpY3lOYW1lXHJcbiAgICAgICAgICogQHBhcmFtIHRlbmFudE5hbWVcclxuICAgICAgICAgKiBAcmV0dXJucyB7Knx3ZWJkcml2ZXIucHJvbWlzZS5Qcm9taXNlfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJ1bGVzbW9kZWwuZ2V0T3V0Z29pbmdSdWxlcyA9IGZ1bmN0aW9uIChwb2xpY3lOYW1lLCB0ZW5hbnROYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBydWxlc21vZGVsLmdldCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF8uZmlsdGVyKHJlc3VsdCwge1xyXG4gICAgICAgICAgICAgICAgICAgICdwb2xpY3lOYW1lJzogcG9saWN5TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAnZGlyZWN0aW9uJzogJ291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RlbmFudE5hbWUnOiB0ZW5hbnROYW1lXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdlbmVyYXRlIHJ1bGUga2V5IHRvIHNhdmUgcnVsZSBvbiBzZXJ2ZXJcclxuICAgICAgICAgKiBAcGFyYW0gcnVsZVxyXG4gICAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcnVsZXNtb2RlbC5nZW5lcmF0ZUtleSA9IGZ1bmN0aW9uIChydWxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBydWxlLnRlbmFudE5hbWUgKyAnOicgKyBydWxlLnBvbGljeU5hbWUgKyAnOicgKyBydWxlLnJ1bGVJZDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gcnVsZXNtb2RlbDtcclxuICAgIH1dKTsiLCIvKipcclxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xMS8xNi5cclxuICovXHJcbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubW9kZWxzJylcclxuICAgIC5mYWN0b3J5KCdTZXJ2aWNlbGJzTW9kZWwnLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ29sbGVjdGlvbigkaHR0cCwgJHEsIENvbnRpdkdsb2JhbHMuU0VSVklDRUxCU19FTkRQT0lOVCk7XHJcbiAgICB9XSk7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA0LzE4LzE2LlxyXG4gKi9cclxuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5tb2RlbHMnKVxyXG4gICAgLmZhY3RvcnkoJ1N0b3JhZ2VQb2xpY2llc01vZGVsJywgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTdG9yYWdlUG9saWNpZXNDb2xsZWN0aW9uIGV4dGVuZHMgZnJvbSBCYXNlQ29sbGVjdGlvblxyXG4gICAgICAgICAqIEBwYXJhbSAkaHR0cFxyXG4gICAgICAgICAqIEBwYXJhbSAkcVxyXG4gICAgICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIFN0b3JhZ2VQb2xpY2llc0NvbGxlY3Rpb24oJGh0dHAsICRxKSB7XHJcbiAgICAgICAgICAgIENvbGxlY3Rpb24uY2FsbCh0aGlzLCAkaHR0cCwgJHEsIENvbnRpdkdsb2JhbHMuU1RPUkFHRVBPTElDSUVTX0VORFBPSU5UKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFN0b3JhZ2VQb2xpY2llc0NvbGxlY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDb2xsZWN0aW9uLnByb3RvdHlwZSk7XHJcblxyXG4gICAgICAgIFN0b3JhZ2VQb2xpY2llc0NvbGxlY3Rpb24ucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIChtb2RlbCkge1xyXG4gICAgICAgICAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciB1cmwgPSBjb2xsZWN0aW9uLnVybCArIG1vZGVsLm5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiBDb2xsZWN0aW9uLnByb3RvdHlwZS5jcmVhdGUuY2FsbChjb2xsZWN0aW9uLCBtb2RlbCwgdXJsKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBTdG9yYWdlUG9saWNpZXNDb2xsZWN0aW9uLnByb3RvdHlwZS5zYXZlID0gZnVuY3Rpb24gKG1vZGVsKSB7XHJcbiAgICAgICAgICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gY29sbGVjdGlvbi4kcS5kZWZlcigpO1xyXG4gICAgICAgICAgICB2YXIgdXJsID0gY29sbGVjdGlvbi51cmwgKyBtb2RlbC5uYW1lO1xyXG4gICAgICAgICAgICBjb2xsZWN0aW9uLiRodHRwLnBvc3QodXJsLCBtb2RlbClcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF8ucmVtb3ZlKGNvbGxlY3Rpb24ubW9kZWxzLCBmdW5jdGlvbiAobikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbi5uYW1lID09IG1vZGVsLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbi5tb2RlbHMucHVzaChtb2RlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgcG9saWNpZXNtb2RlbCA9IG5ldyBTdG9yYWdlUG9saWNpZXNDb2xsZWN0aW9uKCRodHRwLCAkcSk7XHJcbiAgICAgICAgcmV0dXJuIHBvbGljaWVzbW9kZWw7XHJcbiAgICB9XSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMjIvMTYuXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm1vZGVscycpXHJcbiAgICAuZmFjdG9yeSgnVm9sdW1lc01vZGVsJywgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBWb2x1bWVzQ29sbGVjdGlvbiBleHRlbmRzIGZyb20gQmFzZUNvbGxlY3Rpb25cclxuICAgICAgICAgKiBAcGFyYW0gJGh0dHBcclxuICAgICAgICAgKiBAcGFyYW0gJHFcclxuICAgICAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBWb2x1bWVzQ29sbGVjdGlvbigkaHR0cCwgJHEpIHtcclxuICAgICAgICAgICAgQ29sbGVjdGlvbi5jYWxsKHRoaXMsICRodHRwLCAkcSwgQ29udGl2R2xvYmFscy5WT0xVTUVTX0VORFBPSU5UKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFZvbHVtZXNDb2xsZWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ29sbGVjdGlvbi5wcm90b3R5cGUpO1xyXG5cclxuICAgICAgICBWb2x1bWVzQ29sbGVjdGlvbi5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKG1vZGVsKSB7XHJcbiAgICAgICAgICAgIHZhciB2b2x1bWVzY29sbGVjdGlvbiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9IHZvbHVtZXNjb2xsZWN0aW9uLiRxLmRlZmVyKCk7XHJcbiAgICAgICAgICAgIHZhciB1cmwgPSBDb250aXZHbG9iYWxzLlZPTFVNRVNfREVMRVRFX0VORFBPSU5UO1xyXG4gICAgICAgICAgICAvL2RlbGV0ZSBlbmRwb2ludCBleHBlY3RzIHZvbHVtZSBwcm9wZXJ0eSBpbiBhZGRpdGlvbiB0byBwb2xpY3kuIFRPRE8gYXNrIHRvIGJlIGZpeGVkXHJcbiAgICAgICAgICAgIG1vZGVsLnZvbHVtZSA9IG1vZGVsLm5hbWU7XHJcbiAgICAgICAgICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBtb2RlbFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2b2x1bWVzY29sbGVjdGlvbi4kaHR0cC5kZWxldGUodXJsLCBjb25maWcpXHJcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBfLnJlbW92ZSh2b2x1bWVzY29sbGVjdGlvbi5tb2RlbHMsIGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAobi5uYW1lID09IG1vZGVsLm5hbWUgJiYgbi5wb2xpY3kgPT0gbW9kZWwucG9saWN5KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHZvbHVtZXNjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3Qodm9sdW1lc2NvbGxlY3Rpb24uZXh0cmFjdChyZXNwb25zZSkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIFZvbHVtZXNDb2xsZWN0aW9uLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAobW9kZWwpIHtcclxuICAgICAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgdXJsID0gQ29udGl2R2xvYmFscy5WT0xVTUVTX0NSRUFURV9FTkRQT0lOVDtcclxuICAgICAgICAgICAgcmV0dXJuIENvbGxlY3Rpb24ucHJvdG90eXBlLmNyZWF0ZS5jYWxsKGNvbGxlY3Rpb24sIG1vZGVsLCB1cmwpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIFZvbHVtZXNDb2xsZWN0aW9uLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKG1vZGVsLCBzbmFwc2hvdCwgbmV3Vm9sdW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gY29sbGVjdGlvbi4kcS5kZWZlcigpO1xyXG4gICAgICAgICAgICB2YXIgdXJsID0gQ29udGl2R2xvYmFscy5WT0xVTUVTX0NPUFlTTkFQU0hPVFNfRU5EUE9JTlQ7XHJcbiAgICAgICAgICAgIHZhciB2b2xjb3B5bW9kZWwgPSB7XHJcbiAgICAgICAgICAgICAgICB2b2x1bWU6IG1vZGVsLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBwb2xpY3k6IG1vZGVsLnBvbGljeSxcclxuICAgICAgICAgICAgICAgIE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IG5ld1ZvbHVtZSxcclxuICAgICAgICAgICAgICAgICAgICBzbmFwc2hvdDogc25hcHNob3RcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29sbGVjdGlvbi4kaHR0cC5wb3N0KHVybCwgdm9sY29weW1vZGVsKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9UT0RPOiBBZGQgdGhlIG5ldyB2b2x1bWUgdG8gdGhlIGNvbGxlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAvL2NvbGxlY3Rpb24ubW9kZWxzLnB1c2goY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHZvbHVtZXNtb2RlbCA9IG5ldyBWb2x1bWVzQ29sbGVjdGlvbigkaHR0cCwgJHEpO1xyXG4gICAgICAgIHJldHVybiB2b2x1bWVzbW9kZWw7XHJcbiAgICB9XSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDQvMjkvMTYuXHJcbiAqL1xyXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnV0aWxzJylcclxuICAgIC5mYWN0b3J5KCdDUlVESGVscGVyU2VydmljZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gc3RhcnRMb2FkZXIoY29udHJvbGxlcikge1xyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5zaG93TG9hZGVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gc3RvcExvYWRlcihjb250cm9sbGVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnNob3dMb2FkZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gc2hvd1NlcnZlckVycm9yKGNvbnRyb2xsZXIsIG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuc2hvd1NlcnZlckVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuc2VydmVyRXJyb3JNZXNzYWdlID0gbWVzc2FnZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gaGlkZVNlcnZlckVycm9yKGNvbnRyb2xsZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuc2hvd1NlcnZlckVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzdGFydExvYWRlcjogc3RhcnRMb2FkZXIsXHJcbiAgICAgICAgICAgICAgICBzdG9wTG9hZGVyOiBzdG9wTG9hZGVyLFxyXG4gICAgICAgICAgICAgICAgc2hvd1NlcnZlckVycm9yOiBzaG93U2VydmVyRXJyb3IsXHJcbiAgICAgICAgICAgICAgICBoaWRlU2VydmVyRXJyb3I6IGhpZGVTZXJ2ZXJFcnJvclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
