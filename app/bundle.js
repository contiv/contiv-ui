angular.module("contiv.directives", []);
/**
 * Created by vjain3 on 3/14/16.
 */
angular.module('contiv.models', []);
var ContivGlobals = (function () {

    return {
        //REST endpoints for NETMASTER
        'NETWORKS_ENDPOINT': '/netmaster/api/v1/networks/',
        'NETWORKS_INSPECT_ENDPOINT':'/netmaster/api/v1/inspect/networks/',
        'SERVICELBS_INSPECT_ENDPOINT':'/netmaster/api/v1/inspect/serviceLBs/',
        'POLICIES_ENDPOINT': '/netmaster/api/v1/policys/',
        'RULES_ENDPOINT': '/netmaster/api/v1/rules/',
        'APPLICATIONGROUPS_ENDPOINT': '/netmaster/api/v1/endpointGroups/',
        'SERVICELBS_ENDPOINT': '/netmaster/api/v1/serviceLBs/',
        'ORGANIZATIONS_ENDPOINT':'/netmaster/api/v1/tenants/',
        'NETWORK_SETTINGS_ENDPOINT': '/netmaster/api/v1/globals/',
        'NETPROFILES_ENDPOINT': '/netmaster/api/v1/netprofiles/',
        'BGPS_ENDPOINT': '/netmaster/api/v1/Bgps/',
        'BGPS_INSPECT_ENDPOINT': '/netmaster/api/v1/inspect/Bgps/',

        //REST endpoints for VOLMASTER
        'VOLUMES_ENDPOINT': '/volmaster/volumes/',
        'VOLUMES_CREATE_ENDPOINT': '/volmaster/volumes/create/',
        'VOLUMES_DELETE_ENDPOINT': '/volmaster/volumes/remove/',
        'VOLUMES_COPYSNAPSHOTS_ENDPOINT': '/volmaster/volumes/copy/',
        'VOLUMES_USES_ENDPOINT': '/volmaster/uses/mounts/',
        'VOLUMES_SNAPSHOTS_ENDPOINT': '/volmaster/snapshots/',
        'STORAGEPOLICIES_ENDPOINT': '/volmaster/policies/',
        'VOLUMES_GLOBAL_ENDPOINT': '/volmaster/global/',

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
        'CIDR_REGEX' : '^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\/([0-9]|[1-2][0-9]|3[0-2]))$',
        'VLAN_REGEX' : '^([0-9]{1,4}?-[0-9]{1,4}?)$',
        'VXLAN_REGEX' : '^([0-9]{1,8}?-[0-9]{1,8}?)$',
        'NUMBER_REGEX' : '^[0-9]*$'
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

angular.module('contiv.networkpolicies', ['contiv.models', 'contiv.directives', 'contiv.utils'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.networkpolicies', {
                url: '/networkpolicies',
                abstract: true,
                template: '<div ui-view class="ui container"/>'
            })
            .state('contiv.menu.networkpolicies.isolation', {
                url: '/isolation',
                abstract: true,
                template: '<ui-view/>'
            })
            .state('contiv.menu.networkpolicies.bandwidth', {
                url: '/bandwidth',
                abstract: true,
                template: '<ui-view/>'
            })
            .state('contiv.menu.networkpolicies.redirection', {
                url: '/redirection',
                abstract: true,
                template: '<ui-view/>'
            })
        ;
    }]);

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
        'CRUDHelperService',
        function ($state,
                  $stateParams,
                  ApplicationGroupsModel,
                  CRUDHelperService) {
            var applicationGroupDetailsCtrl = this;

            applicationGroupDetailsCtrl.applicationGroup = {};
            applicationGroupDetailsCtrl.selectedNetwork = {};

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
                });

            applicationGroupDetailsCtrl.saveApplicationGroup = saveApplicationGroup;
            applicationGroupDetailsCtrl.cancelEditing = cancelEditing;
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
                            applicationGroupListCtrl.groups = result;
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
 * Created by hardik gandhi on 6/28/16.
 */

angular.module("contiv.applicationgroups")
    .directive("ctvBandwidthpolicy", function() {
        return {
            restrict: 'E',
            scope: {
                mode:"=",
                applicationgroup:'='
            },

            controller: [
                '$scope',
                'NetprofilesModel',
                function ($scope,
                          NetprofilesModel) {
                    $scope.netProfiles = [];
                    $scope.selectedNetprofile = {
                        policy:{}
                    };

                    /**
                     * Get profiles for the given tenant.
                     */
                    function getNetprofiles() {
                        NetprofilesModel.get().then(function (result) {
                            $scope.netProfiles = _.filter(result, {
                                'tenantName': 'default'        //TODO: Remove hardcoded tenant.
                            });
                            if($scope.applicationgroup.netProfile !== ''){
                                $scope.selectedNetprofile.policy = _.find($scope.netProfiles,function(policy){
                                    return policy.profileName === $scope.applicationgroup.netProfile;
                                });
                            }
                        });
                    }

                    /**
                     * Assign profileName to applicationgroup whichever user has given 
                     */
                    $scope.updateApplicationgroup = function(){
                        if($scope.selectedNetprofile.policy === null) {
                            $scope.applicationgroup.netProfile = '';
                        }else{
                            $scope.applicationgroup.netProfile = $scope.selectedNetprofile.policy.profileName;
                        }
                    };
             
                    getNetprofiles();
            }],

            templateUrl: 'applicationgroups/bandwidthpolicy.html'
        }
    });




/**
 * Created by hardik gandhi on 7/8/16.
 */

angular.module("contiv.applicationgroups")
    .directive("ctvIsolationpolicy",function(){
        return{
            restrict:'E',
            scope:{
                mode:'=',
                applicationgroup:'='
            },
            controller: [
                '$scope',
                '$stateParams',
                'ApplicationGroupsModel',
                'PoliciesModel',
                'RulesModel',
                function($scope,
                         $stateParams,
                         ApplicationGroupsModel,
                         PoliciesModel,
                         RulesModel){

                    $scope.incomingRules = [];
                    $scope.outgoingRules = [];
                    $scope.selectedPolicy = {
                        policy:{}
                    };
                    $scope.selectedPolicies = [];           // To Store policies selected by user to display
                    $scope.isolationPolicies = [];          // To Get all isolation policies of tenant


                    /**
                     * Get incoming and outgoing rules for each policy present in applicationgroup
                     */
                    function getRules() {
                        $scope.applicationgroup.policies.forEach(function (policy) {
                            //To display rules of selected policies
                            RulesModel.getIncomingRules(policy, 'default')
                                .then(function (rules) {
                                    Array.prototype.push.apply($scope.incomingRules, rules);
                                });
                            RulesModel.getOutgoingRules(policy, 'default')
                                .then(function (rules) {
                                    Array.prototype.push.apply($scope.outgoingRules, rules);
                                });
                        });
                    }

                    /**
                     * Get policies for the given tenant.
                     */
                    function getIsolationPolicies() {
                        PoliciesModel.get().then(function (result) {
                            $scope.isolationPolicies = _.filter(result, {
                                'tenantName': 'default'//TODO: Remove hardcoded tenant.
                            })
                        });
                    }
                    /**
                     * Add policy to application group
                     */
                    $scope.addIsolationPolicy = function() {
                        var currentPolicyName = $scope.selectedPolicy.policy.policyName;

                        if (currentPolicyName !== undefined && _.includes($scope.selectedPolicies, currentPolicyName) == false) {
                            //To display selected policies
                            $scope.selectedPolicies.push(currentPolicyName);

                            //To display rules of selected policies
                            RulesModel.getIncomingRules(currentPolicyName, 'default')
                                .then(function (rules) {
                                    Array.prototype.push.apply($scope.incomingRules, rules);
                                });
                            RulesModel.getOutgoingRules(currentPolicyName, 'default')
                                .then(function (rules) {
                                    Array.prototype.push.apply($scope.outgoingRules, rules);
                                });

                            //To be added to application group and saved to the server
                            $scope.applicationgroup.policies
                                .push(currentPolicyName);
                        }
                    };

                    /**
                     * Remove policy from application group
                     */
                    $scope.removeIsolationPolicy = function(policyName) {
                        _.remove($scope.selectedPolicies,function (policy) {
                            return policy === policyName;
                        });
                        _.remove($scope.applicationgroup.policies, function (policy) {
                            return policy === policyName;
                        });
                        _.remove($scope.incomingRules, function (rule) {
                            return rule.policyName === policyName;
                        });
                        _.remove($scope.outgoingRules, function (rule) {
                            return rule.policyName === policyName;
                        });
                    };

                    /**
                     *  To check 'details' or 'edit' mode (not create mode)
                     */
                    if($scope.mode == 'details' || ($scope.mode == 'edit' && $scope.applicationgroup.groupName != "")) {
                        //Application Groups might not have any policies associated with them so define an empty array
                        if ($scope.applicationgroup.policies === undefined) {
                            $scope.applicationgroup.policies = [];
                        }
                        getRules();
                    }
                    getIsolationPolicies();
                }],
            templateUrl:'applicationgroups/isolationpolicy.html'
        }
    });




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
 * Created by hardik gandhi on 6/24/16.
 */

angular.module("contiv.networkpolicies")
    .directive("ctvBandwidth", function () {
        return {
            restrict: 'E',
            scope: {
                bandwidthPolicy:'=',
                mode:"@"
            },

            link:function(scope) {

                if (scope.bandwidthPolicy.bandwidth != ''){
                    var bandwidthArray = scope.bandwidthPolicy.bandwidth.split(' ');
                 
                    scope.bandwidthPolicy.bandwidthNumber = Number(bandwidthArray[0]);
                    scope.bandwidthPolicy.bandwidthUnit = bandwidthArray[1];

                 }

            },

            templateUrl: 'network_policies/bandwidth.html'
        }
    });

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
    .controller('BandwidthPolicyCreateCtrl', ['$state', '$stateParams','NetprofilesModel', 'CRUDHelperService',
        function ($state, $stateParams, NetprofilesModel, CRUDHelperService) {
            var bandwidthPolicyCreateCtrl = this;

            function returnToPolicies() {
                $state.go('contiv.menu.networkpolicies.list.bandwidth');
            }

            function cancelCreating() {
                returnToPolicies();
            }

            function createPolicy() {
                if (bandwidthPolicyCreateCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(bandwidthPolicyCreateCtrl);
                    CRUDHelperService.startLoader(bandwidthPolicyCreateCtrl);

                    bandwidthPolicyCreateCtrl.newPolicy.key =
                        NetprofilesModel.generateKey(bandwidthPolicyCreateCtrl.newPolicy);
                    
                    bandwidthPolicyCreateCtrl.newPolicy.bandwidth = bandwidthPolicyCreateCtrl.newPolicy.bandwidthNumber
                        + " "+ bandwidthPolicyCreateCtrl.newPolicy.bandwidthUnit;
                    
                    NetprofilesModel.create(bandwidthPolicyCreateCtrl.newPolicy).then(function successCallback(result) {
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



/**
 * Created by hardik gandhi on 6/16/16.
 */


angular.module('contiv.networkpolicies')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.networkpolicies.bandwidth.details', {
                url: '/details/:key',
                controller: 'BandwidthPolicyDetailsCtrl as bandwidthPolicyDetailsCtrl',
                templateUrl: 'network_policies/bandwidthpolicydetails.html'
            });
    }])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.networkpolicies.bandwidth.edit', {
                url: '/edit/:key',
                controller: 'BandwidthPolicyDetailsCtrl as bandwidthPolicyDetailsCtrl',
                templateUrl: 'network_policies/bandwidthpolicydetails.html'
            });
    }])
    .controller('BandwidthPolicyDetailsCtrl', [
        '$state',
        '$stateParams',
        'NetprofilesModel',
        'CRUDHelperService',
        function ($state, $stateParams, NetprofilesModel, CRUDHelperService) {
            var bandwidthPolicyDetailsCtrl = this;

            bandwidthPolicyDetailsCtrl.bandwidthProfiles = [];

            /* Get particular Profile for based on key*/
            NetprofilesModel.getModelByKey($stateParams.key)
                .then(function (policy) {
                    bandwidthPolicyDetailsCtrl.policy = policy;
                });
            
            /**
             * To show edit or details screen based on the route
             */
            function setMode() {
                if ($state.is('contiv.menu.networkpolicies.bandwidth.edit')) {
                    bandwidthPolicyDetailsCtrl.mode = 'edit';
                } else {
                    bandwidthPolicyDetailsCtrl.mode = 'details';
                }
            }

            function deletePolicy() {
                CRUDHelperService.hideServerError(bandwidthPolicyDetailsCtrl);
                CRUDHelperService.startLoader(bandwidthPolicyDetailsCtrl);
                NetprofilesModel.deleteUsingKey(bandwidthPolicyDetailsCtrl.policy.key, 'name').then(
                    function successCallback(result) {
                        CRUDHelperService.stopLoader(bandwidthPolicyDetailsCtrl);
                        returnToPolicies();
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(bandwidthPolicyDetailsCtrl);
                        CRUDHelperService.showServerError(bandwidthPolicyDetailsCtrl, result);
                    });
            }


            function returnToPolicies() {
                $state.go('contiv.menu.networkpolicies.list.bandwidth');
            }

            function returnToPolicyDetails() {
                $state.go('contiv.menu.networkpolicies.bandwidth.details', {'key': bandwidthPolicyDetailsCtrl.policy.key});
            }

            function cancelEditing() {
                returnToPolicyDetails();
            }

            function savePolicy() {
                //form controller is injected by the html template
                //checking if all validations have passed
                if (bandwidthPolicyDetailsCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(bandwidthPolicyDetailsCtrl);
                    CRUDHelperService.startLoader(bandwidthPolicyDetailsCtrl);
                    bandwidthPolicyDetailsCtrl.policy.bandwidth = bandwidthPolicyDetailsCtrl.policy.bandwidthNumber + " " + bandwidthPolicyDetailsCtrl.policy.bandwidthUnit;
                    NetprofilesModel.save(bandwidthPolicyDetailsCtrl.policy).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(bandwidthPolicyDetailsCtrl);
                        returnToPolicyDetails();
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(bandwidthPolicyDetailsCtrl);
                        CRUDHelperService.showServerError(bandwidthPolicyDetailsCtrl, result);
                    });
                }

            }

            CRUDHelperService.stopLoader(bandwidthPolicyDetailsCtrl);
            CRUDHelperService.hideServerError(bandwidthPolicyDetailsCtrl);

            setMode();

            bandwidthPolicyDetailsCtrl.deletePolicy = deletePolicy;
            bandwidthPolicyDetailsCtrl.savePolicy = savePolicy;
            bandwidthPolicyDetailsCtrl.cancelEditing = cancelEditing;

        }]);

/**
 * Created by hardik gandhi on 6/14/16.
 */

angular.module('contiv.networkpolicies')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.networkpolicies.list.bandwidth', {
                url: '/bandwidth',
                controller: 'BandwidthPolicyListCtrl as bandwidthPolicyListCtrl',
                templateUrl: 'network_policies/bandwidthpolicylist.html'
            })
        ;
    }])
    .controller('BandwidthPolicyListCtrl', ['$scope', '$interval', '$filter', 'NetprofilesModel', 'CRUDHelperService',
        function ($scope, $interval, $filter, NetprofilesModel, CRUDHelperService) {
            var policiesListCtrl = this;

            function getPolicies(reload) {
                NetprofilesModel.get(reload)
                    .then(function successCallback(result) {
                        CRUDHelperService.stopLoader(policiesListCtrl);
                        policiesListCtrl.policies = $filter('orderBy')(result, 'profileName');
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(policiesListCtrl);
                    });
            }

            //Load from cache for quick display initially
            getPolicies(true);

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
            $state.go('contiv.menu.networkpolicies.list.isolation');
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
            isolationPolicyDetailsCtrl.disableIncomingIPAddressSelection = false;
            isolationPolicyDetailsCtrl.disableOutgoingIPAddressSelection = false;
            isolationPolicyDetailsCtrl.newIncomingSelectedApplicationGroup = '';
            isolationPolicyDetailsCtrl.newOutgoingSelectedApplicationGroup = '';
            isolationPolicyDetailsCtrl.newIncomingSelectedNetwork = '';
            isolationPolicyDetailsCtrl.newOutgoingSelectedNetwork = '';
            isolationPolicyDetailsCtrl.incorrectCIDR = false;


            function returnToPolicies() {
                $state.go('contiv.menu.networkpolicies.list.isolation');
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
                    fromIpAddress: '',
                    protocol: 'tcp',//to make it default selected option in UI
                    port: 0,
                    direction: 'in',
                    tenantName: 'default',
                    policyName: isolationPolicyDetailsCtrl.policy.policyName
                };
                isolationPolicyDetailsCtrl.newIncomingSelectedApplicationGroup = '';
                isolationPolicyDetailsCtrl.newIncomingSelectedNetwork = '';
                isolationPolicyDetailsCtrl.disableIncomingNetworkSelection = false;
                isolationPolicyDetailsCtrl.disableIncomingApplicationGroupSelection = false;
                isolationPolicyDetailsCtrl.disableIncomingIPAddressSelection = false;
            }

            function resetNewOutgoingRule() {
                //Rule object to be created on server
                isolationPolicyDetailsCtrl.newOutgoingRule = {
                    ruleId: '',
                    priority: 1,
                    action: 'allow',//to make it default selected option in UI
                    toEndpointGroup: '',
                    toNetwork: '',
                    toIpAddress: '',
                    protocol: 'tcp',//to make it default selected option in UI
                    port: 0,
                    direction: 'out',
                    tenantName: 'default',
                    policyName: isolationPolicyDetailsCtrl.policy.policyName
                };
                isolationPolicyDetailsCtrl.newOutgoingSelectedApplicationGroup = '';
                isolationPolicyDetailsCtrl.newOutgoingSelectedNetwork = '';
                isolationPolicyDetailsCtrl.disableOutgoingNetworkSelection = false;
                isolationPolicyDetailsCtrl.disableOutgoingApplicationGroupSelection = false;
                isolationPolicyDetailsCtrl.disableOutgoingIPAddressSelection = false;
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
                    isolationPolicyDetailsCtrl.disableOutgoingApplicationGroupSelection = false;
                    isolationPolicyDetailsCtrl.disableIncomingNetworkSelection = false;
                }

            }

            /**
             * Event handler to disable application group selection box once network is selected while creating a new
             * rule.
             */
            function onChangeOutgoingNetworkSelection() {
                if (isolationPolicyDetailsCtrl.newOutgoingSelectedNetwork!= null) {
                    //If network has been selected
                    isolationPolicyDetailsCtrl.newOutgoingRule.toNetwork =
                        isolationPolicyDetailsCtrl.newOutgoingSelectedNetwork;
                    isolationPolicyDetailsCtrl.newOutgoingRule.ToEndpointGroup = '';
                    isolationPolicyDetailsCtrl.disableOutgoingApplicationGroupSelection = true;
                    isolationPolicyDetailsCtrl.disableOutgoingIPAddressSelection = true;
                } else {
                    isolationPolicyDetailsCtrl.newOutgoingRule.toIpAddress = '';
                    isolationPolicyDetailsCtrl.disableOutgoingApplicationGroupSelection = false;
                    isolationPolicyDetailsCtrl.disableOutgoingIPAddressSelection = false;
                }
            }

            /**
             * Event handler to disable application group selection box once network is selected while creating a new
             * rule.
             */
            function onChangeIncomingNetworkSelection() {
                if (isolationPolicyDetailsCtrl.newIncomingSelectedNetwork != null) {
                    //If network has been selected
                    isolationPolicyDetailsCtrl.newIncomingRule.fromNetwork =
                        isolationPolicyDetailsCtrl.newIncomingSelectedNetwork;
                    isolationPolicyDetailsCtrl.newIncomingRule.fromEndpointGroup = '';
                    isolationPolicyDetailsCtrl.disableIncomingApplicationGroupSelection = true;
                    isolationPolicyDetailsCtrl.disableIncomingIPAddressSelection = true;
                } else {
                    isolationPolicyDetailsCtrl.newIncomingRule.fromNetwork = '';
                    isolationPolicyDetailsCtrl.disableIncomingApplicationGroupSelection = false;
                    isolationPolicyDetailsCtrl.disableIncomingIPAddressSelection = false;
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
                if((isolationPolicyDetailsCtrl.newIncomingRule.fromIpAddress == '') ||
                    (isolationPolicyDetailsCtrl.newIncomingRule.fromIpAddress != null &&
                    validateCIDR(isolationPolicyDetailsCtrl.newIncomingRule.fromIpAddress))) {
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
            }

            function onChangeIncomingIPAddress(){
                if(isolationPolicyDetailsCtrl.newIncomingRule.fromIpAddress == ''){
                    isolationPolicyDetailsCtrl.incorrectCIDR = false;
                }
            }
            
            function onChangeOutgoingIPAddress(){
                if(isolationPolicyDetailsCtrl.newOutgoingRule.toIpAddress == ''){
                    isolationPolicyDetailsCtrl.incorrectCIDR = false;
                }
            }

            function validateCIDR(ipaddress) {
                var cidrPattern = new RegExp(ContivGlobals.CIDR_REGEX);

                if (cidrPattern.test(ipaddress)) {
                    isolationPolicyDetailsCtrl.incorrectCIDR = false;
                    return true;
                }
                isolationPolicyDetailsCtrl.incorrectCIDR = true;
                return false;
            }

            /**
             * Rule is saved to server
             */
            function addOutgoingRule() {
                if((isolationPolicyDetailsCtrl.newOutgoingRule.toIpAddress == '') ||
                    (isolationPolicyDetailsCtrl.newOutgoingRule.toIpAddress != '' &&
                    validateCIDR(isolationPolicyDetailsCtrl.newOutgoingRule.toIpAddress))) {
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
            isolationPolicyDetailsCtrl.onChangeIncomingIPAddress = onChangeIncomingIPAddress;
            isolationPolicyDetailsCtrl.onChangeOutgoingIPAddress = onChangeOutgoingIPAddress;

            setMode();

        }]);
angular.module('contiv.networkpolicies')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.networkpolicies.list.isolation', {
                url: '/isolation',
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
    .controller('NetworkPoliciesTabsCtrl', ['$state',function ($state) {
        var networkPoliciesTabsCtrl = this;
        
        function createNetworkPolicy() {
            if($state.$current.includes['contiv.menu.networkpolicies.list.isolation']){
                $state.go('contiv.menu.networkpolicies.isolation.create');
            }
            if($state.$current.includes['contiv.menu.networkpolicies.list.bandwidth']) {
                $state.go('contiv.menu.networkpolicies.bandwidth.create');
            }
        }

        networkPoliciesTabsCtrl.createNetworkPolicy = createNetworkPolicy;
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
            })
            .state('contiv.menu.networks.details.info', {
                url: '/info',
                templateUrl: 'networks/networkinfo.html'
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
                            networksListCtrl.networks = result;
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
 * Created by cshampur on 6/23/16.
 */
angular.module('contiv.networks')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.networks.details.stats', {
                url: '/stats',
                controller: 'NetworkStatsCtrl as networkStatsCtrl',
                templateUrl: 'networks/networkstats.html'
            })
        ;
    }])
    .controller('NetworkStatsCtrl',
        ['$state', '$stateParams', '$scope', '$interval', '$filter', 'NetworksModel', 'InspectService',
            function ($state, $stateParams, $scope, $interval, $filter, NetworksModel, InspectService) {

                var networkStatsCtrl = this;

                /* Gets the Network Operational state from the server */
                function getNetworkInspect(refresh){
                    NetworksModel.getInspectByKey($stateParams.key, ContivGlobals.NETWORKS_INSPECT_ENDPOINT, refresh)
                        .then(function (result) {
                            networkStatsCtrl.networkInspectStats = result.Oper;
                            networkStatsCtrl.config = result.Config;
                            if(result.Oper.endpoints!=undefined){
                                var containerDetails = InspectService.buildEndPoints(result.Oper.endpoints);
                                if(InspectService.checkContainerChanged(networkStatsCtrl.containerDetails,containerDetails)){
                                    networkStatsCtrl.endpoints = result.Oper.endpoints;
                                    networkStatsCtrl.containerDetails = containerDetails;
                                }
                            }
                            else{
                                networkStatsCtrl.endpoints = []
                                networkStatsCtrl.containerDetails = {};
                            }
                        });
                }

                getNetworkInspect(false);
                
                var promise;
                //Don't do autorefresh if one is already in progress
                if (!angular.isDefined(promise)) {
                    promise = $interval(function () {
                        getNetworkInspect(true);
                    }, ContivGlobals.REFRESH_INTERVAL);
                }

                //stop polling when user moves away from the page
                $scope.$on('$destroy', function () {
                    $interval.cancel(promise);
                });
            }]);
angular.module('contiv.nodes')
    .factory('BgpService', ['$http', '$q', function ($http, $q) {

        function getBgp(ctrl) {
            var deferred = $q.defer();
            var url = ContivGlobals.BGPS_ENDPOINT + ctrl.key + '/';
            $http.get(url).then(function successCallback(result) {
                deferred.resolve(result.data);
                ctrl.neighbor = result.data;
                ctrl.neighbors.push({'name': ctrl.neighbor['neighbor'], 'value': ctrl.neighbor['neighbor-as']});
            }, function errorCallback(result) {
                deferred.reject(result.data);
            });
            return deferred.promise;
        }

        function updateBgp(ctrl) {
            var url = ContivGlobals.BGPS_ENDPOINT + ctrl.key + '/';
            return $http.post(url, ctrl.neighbor);
        };

        function getBgpInspect(key) {
            var deferred = $q.defer();
            var url = ContivGlobals.BGPS_INSPECT_ENDPOINT + key + '/';
            $http.get(url).then(function successCallback(result) {
                deferred.resolve(result.data);
            }, function errorCallback(result) {
                deferred.reject(result.data);
            });
            return deferred.promise;
        }
        return {
            getBgp: getBgp,
            updateBgp: updateBgp,
            getBgpInspect: getBgpInspect
        }
    }]);
angular.module("contiv.nodes")
    .directive("ctvLogs", function () {
        return {
            restrict: 'E',
            templateUrl: 'nodes/logs.html',
            scope: {
                log: "=",
                title: "@"
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
angular.module('contiv.nodes')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.nodes.activelog', {
                url: '/activelog',
                controller: 'NodeActiveJobLogsCtrl as nodeActiveJobLogsCtrl',
                template: '<ctv-logs title="Active Job" log="nodeActiveJobLogsCtrl.activeLogs"></ctv-logs>'
            })
        ;
    }])
    .controller('NodeActiveJobLogsCtrl', ['$scope', '$interval', 'LogService',
        function ($scope, $interval, LogService) {
        var nodeActiveJobLogsCtrl = this;

        function getActiveLogs() {
            LogService.getActiveLogs().then(function successCallback(result) {
                nodeActiveJobLogsCtrl.activeLogs = result;
            }, function errorCallback(result) {
                //Once the job finishes, endpoint returns 500 error. So reset the activeLogs
                nodeActiveJobLogsCtrl.activeLogs = {
                    desc: 'There is currently no active job. Check Last Job for a job that recently finished.'
                };
            });
        }
        getActiveLogs();

        var promise;
        //Don't do auto-refresh if one is already in progress
        if (!angular.isDefined(promise)) {
            promise = $interval(function () {
                getActiveLogs();
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
            .state('contiv.menu.nodes.details.edit', {
                url: '/edit',
                controller: 'NodeDetailsCtrl as nodeDetailsCtrl',
                templateUrl: 'nodes/nodeinfo.html'
            });

    }])
    .controller('NodeDetailsCtrl', ['$state', '$stateParams', '$scope', '$interval', 'NodesModel', 'BgpService',
        function ($state, $stateParams, $scope, $interval, NodesModel, BgpService) {
            var nodeDetailsCtrl = this;
            nodeDetailsCtrl.numberpattern = ContivGlobals.NUMBER_REGEX;

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

            function setMode() {
                if ($state.is('contiv.menu.nodes.details.edit')) {
                    nodeDetailsCtrl.mode = 'edit';
                } else {
                    nodeDetailsCtrl.mode = 'details';
                }
            }

            function returnToInfo() {
                $state.go('contiv.menu.nodes.details.info');
            }

            function updateBgpInfo() {
                if (nodeDetailsCtrl.form.$valid) {
                    nodeDetailsCtrl.neighbor.key = $stateParams.key;

                    // backend only supports adding one neighbor currently
                    nodeDetailsCtrl.neighbors.forEach(function (item) {
                        nodeDetailsCtrl.neighbor['neighbor'] = item.name;
                        nodeDetailsCtrl.neighbor['neighbor-as'] = item.value;
                    });

                    BgpService.updateBgp(nodeDetailsCtrl).then(function successCallback(result) {
                        nodeDetailsCtrl.neighbor = result.config.data;
                        returnToInfo();

                    }, function errorCallback(result) {
                    });
                }
            }

            function getBgpInfo() {
                BgpService.getBgp(nodeDetailsCtrl).then(function successCallback(result) {
                    nodeDetailsCtrl.neighbor = result;
                }, function errorCallback(result) {
                });
            }

            function getBgpInspect() {
                BgpService.getBgpInspect($stateParams.key).then(function successCallback(result) {
                    nodeDetailsCtrl.inspect = result;
                    nodeDetailsCtrl.routes = result.Oper.routes;
                    nodeDetailsCtrl.filteredroutes = result.Oper.routes;
                }, function errorCallback(result) {
                });
            }

            nodeDetailsCtrl.decommission = decommission;
            nodeDetailsCtrl.upgrade = upgrade;

            nodeDetailsCtrl.setMode = setMode;
            nodeDetailsCtrl.updateBgpInfo = updateBgpInfo;
            nodeDetailsCtrl.returnToInfo = returnToInfo;
            nodeDetailsCtrl.neighbors = [];
            nodeDetailsCtrl.neighbor = {};
            nodeDetailsCtrl.key = $stateParams.key;
            getBgpInfo();
            getBgpInspect();
            setMode();

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

            NodesService.getSettings(nodeDiscoverCtrl);

            nodeDiscoverCtrl.discover = discover;
            nodeDiscoverCtrl.cancelDiscoveringNode = cancelDiscoveringNode;

            CRUDHelperService.stopLoader(nodeDiscoverCtrl);
            CRUDHelperService.hideServerError(nodeDiscoverCtrl);
        }]);

angular.module('contiv.nodes')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.nodes.lastlog', {
                url: '/lastlog',
                controller: 'NodeLastJobLogsCtrl as nodeLastJobLogsCtrl',
                template: '<ctv-logs title="Last Job" log="nodeLastJobLogsCtrl.lastLogs"></ctv-logs>'
            })
        ;
    }])
    .controller('NodeLastJobLogsCtrl', ['$scope', '$interval', 'LogService',
        function ($scope, $interval, LogService) {
        var nodeLastJobLogsCtrl = this;

        function getLastLogs() {
            LogService.getLastLogs().then(function successCallback(result) {
                nodeLastJobLogsCtrl.lastLogs = result;
            }, function errorCallback(result) {
            });
        }
        getLastLogs();

        var promise;
        //Don't do auto-refresh if one is already in progress
        if (!angular.isDefined(promise)) {
            promise = $interval(function () {
                getLastLogs();
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
                    nodeListCtrl.nodes = result;
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
    .controller('OrganizationCreateCtrl', ['$state', 'OrganizationsModel', 'CRUDHelperService',
        function ($state, OrganizationsModel, CRUDHelperService) {
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
        ['$state', '$stateParams', 'OrganizationsModel', 'CRUDHelperService',
            function ($state, $stateParams, OrganizationsModel, CRUDHelperService) {
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
                            organizationsListCtrl.organizations = result;
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
                params: {state:null},       // To reload parent view 
                controller: 'ServicelbDetailsCtrl as servicelbDetailsCtrl',
                templateUrl: 'service_lbs/servicelbdetails.html'
            })
            .state('contiv.menu.servicelbs.details.info', {
                url: '/info',
                controller: 'ServicelbDetailsCtrl as servicelbDetailsCtrl',
                templateUrl: 'service_lbs/servicelbinfo.html'
            })
            .state('contiv.menu.servicelbs.details.edit', {
                url: '/edit/:key',
                controller: 'ServicelbDetailsCtrl as servicelbDetailsCtrl',
                templateUrl: 'service_lbs/servicelbinfo.html'
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
                    if ($state.is('contiv.menu.servicelbs.details.edit')) {
                        servicelbDetailsCtrl.mode = 'edit';
                    } else {
                        servicelbDetailsCtrl.mode = 'details';
                    }
                }

                function returnToServicelbs() {
                    $state.go('contiv.menu.servicelbs.list');
                }

                function returnToServicelbDetails() {
                    $state.go('contiv.menu.servicelbs.details.info', {'key': servicelbDetailsCtrl.servicelb.key,'state':'details'});
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
                    var existingLabels = servicelbDetailsCtrl.servicelb.selectors;
                    createLabelSelectorStrings();
                    ServicelbsModel.save(servicelbDetailsCtrl.servicelb).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(servicelbDetailsCtrl);
                        returnToServicelbDetails();
                    }, function errorCallback(result) {
                        servicelbDetailsCtrl.servicelb.selectors = existingLabels;
                        createLabelSelectors();
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
                            servicelbListCtrl.servicelbs = result;
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
 * Created by cshampur on 7/17/16.
 */
angular.module('contiv.servicelbs')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.servicelbs.details.stats', {
                url: '/stats',
                controller: 'ServicelbStatsCtrl as servicelbStatsCtrl',
                templateUrl: 'service_lbs/servicelbstats.html'
            })
        ;
    }])
    .controller('ServicelbStatsCtrl',
        ['$state', '$stateParams', '$scope', '$interval', '$filter', 'ServicelbsModel', 'InspectService',
            function ($state, $stateParams, $scope, $interval, $filter, ServicelbsModel, InspectService) {

                var servicelbStatsCtrl = this;

                /* Gets the Network Operational state from the server */
                function getServicelbInspect(refresh){
                    ServicelbsModel.getInspectByKey($stateParams.key, ContivGlobals.SERVICELBS_INSPECT_ENDPOINT, refresh)
                        .then(function (result) {
                            servicelbStatsCtrl.servicelbInspectStats = result.Oper;
                            servicelbStatsCtrl.config = result.Config;
                            if(result.Oper.providers!=undefined) {
                                var providerDetails = InspectService.buildEndPoints(result.Oper.providers);
                                if (InspectService.checkContainerChanged(servicelbStatsCtrl.providerDetails, providerDetails)) {
                                    servicelbStatsCtrl.providers = result.Oper.providers;
                                    servicelbStatsCtrl.providerDetails = providerDetails;
                                }
                            }
                            else{
                                servicelbStatsCtrl.providers = [];
                                servicelbStatsCtrl.providerDetails = {};
                            }
                        });
                }

                getServicelbInspect(false);

                var promise;
                //Don't do autorefresh if one is already in progress
                if (!angular.isDefined(promise)) {
                    promise = $interval(function () {
                        getServicelbInspect(true);
                    }, ContivGlobals.REFRESH_INTERVAL);
                }

                //stop polling when user moves away from the page
                $scope.$on('$destroy', function () {
                    $interval.cancel(promise);
                });
            }]);
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
    .controller('ClusterSettingCtrl', ['$stateParams', 'CRUDHelperService', 'NodesService',
        function ($stateParams, CRUDHelperService, NodesService) {
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

angular.module('contiv.settings')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.settings.details.networks', {
                url: '/networks',
                controller: 'NetworkSettingCtrl as networkSettingCtrl',
                templateUrl: 'settings/networksettings.html'
            })
        ;
    }])
    .controller('NetworkSettingCtrl', ['CRUDHelperService', 'NetworkService',
        function (CRUDHelperService, NetworkService) {
            var networkSettingCtrl = this;
            networkSettingCtrl.vlanPattern = ContivGlobals.VLAN_REGEX;
            networkSettingCtrl.vxlanPattern = ContivGlobals.VXLAN_REGEX;

            function updateNetworkSettings() {
                if (networkSettingCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(networkSettingCtrl);
                    CRUDHelperService.startLoader(networkSettingCtrl);
                    NetworkService.updateSettings(networkSettingCtrl.setting).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(networkSettingCtrl);

                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(networkSettingCtrl);
                        CRUDHelperService.showServerError(networkSettingCtrl, result);
                    });
                }
            }

            function getNetworkSettings() {
                NetworkService.getSettings().then(function successCallback(result) {
                    networkSettingCtrl.setting = result;
                }, function errorCallback(result) {
                });
            }
            getNetworkSettings();
            networkSettingCtrl.updateNetworkSettings = updateNetworkSettings;

            CRUDHelperService.stopLoader(networkSettingCtrl);
            CRUDHelperService.hideServerError(networkSettingCtrl);
        }]);
angular.module('contiv.settings')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.settings.details.volumes', {
                url: '/volumes',
                controller: 'VolumeSettingCtrl as volumeSettingCtrl',
                templateUrl: '/settings/volumesettings.html'
            })
        ;
    }])
    .controller('VolumeSettingCtrl', ['CRUDHelperService', 'VolumeSettingService',
        function (CRUDHelperService, VolumeSettingService) {
            var volumeSettingCtrl = this;

            function updateVolumeSettings() {
                if (volumeSettingCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(volumeSettingCtrl);
                    CRUDHelperService.startLoader(volumeSettingCtrl);
                    VolumeSettingService.updateSettings(volumeSettingCtrl.setting).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(volumeSettingCtrl);

                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(volumeSettingCtrl);
                        CRUDHelperService.showServerError(volumeSettingCtrl, result);
                    });
                }
            }

            function getVolumeSettings() {
                VolumeSettingService.getSettings().then(function successCallback(result) {
                    volumeSettingCtrl.setting = result;
                }, function errorCallback(result) {
                });
            }
            getVolumeSettings();
            volumeSettingCtrl.updateVolumeSettings = updateVolumeSettings;

            CRUDHelperService.stopLoader(volumeSettingCtrl);
            CRUDHelperService.hideServerError(volumeSettingCtrl);
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
                        storagePolicyListCtrl.policies = result;
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
                        volumeListCtrl.volumes = result;
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
 * Created by cshampur on 7/1/16.
 */
angular.module("contiv.directives")
    .directive("ctvAccordion", function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                items: '=',
            },
            link:function(scope, element){
                if(typeof element.find('.ui.accordion').accordion == 'function')
                    element.find('.ui.accordion').accordion();
            },
            templateUrl: 'components/directives/accordion.html'
        }
    });
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

/*
Directive Usage :

a) ctvTable -
   usage : <ctv-table defaultsortcolumn='name' items='tableItems' filtereditems='filtItems' size='size'></ctv-table>
   attribute details :  defaultsortcolumn - The default column name(corresponding key inside the object of items array) on which the table will be sorted when it is loaded.
                        items - An array of objects which will be displayed by the ctv-table directive.
                        size - number of rows to be displayed inside the table. If items.length > size then remaining items
                               will be displayed in next page.
                        filtereditems - This is an output field which produces a filtered subset of items specefied by
                                        the previous attribute, Items are filtered based on search text defined inside ctv-search,
                                        and by the size mentioned in the ctv-table attribute
b) ctvTH -
   usage : <ctv-th sortfield='name'>name</ctv-th>
   attribute details : sortfield - This is the key of the object present inside items array specefied in ctvTable, for eg :
                                   if the array object is : [{ip: "20.1.2.3", host: "cluster-1"},{ip: "20.1.2.4", host: "cluster-2"}]
                                   then directive will be <ctv-th sortfield="'ip'"> Ip Address </ctv-th>
   Table can only be sorted on columns which has sortfield attribute specefied.

c) ctvTsearch -
   usage : <ctv-tsearch placeholder='Search' size='30'></ctv-tsearch>
   attribute details : placeholder - specify the placeholder for the input text field
                       size - specify the maximum length of the search string
   Only items matching the search string are displayed inside the table.

d) ctvTpagination -
   usage : <ctv-tpagination></ctv-tpagination>
   Provides link for moving back and forth of the result page.

 */
angular.module("contiv.directives")
    .directive("ctvTable", ['filterFilter', 'limitToFilter', function (filterFilter, limitToFilter) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                items: '=',
                filtereditems: '=',
                size: '@',
                defaultsortcolumn: '@'
            },
            controller: ['$scope', '$element', '$attrs', '$filter', function ($scope, $element, $attrs, $filter) {
                var tableCtrl = this;
                tableCtrl.chunks = [];
                tableCtrl.pageNo = 0;
                tableCtrl.sortObj=initializeSort($scope.defaultsortcolumn);

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
                        searchTextFilteredItems = $filter('orderBy')(searchTextFilteredItems, tableCtrl.sortObj.field, tableCtrl.sortObj.reverse);
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
                        $scope.filtereditems=tableCtrl.filteredItems;
                    }
                    return false;
                }

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

                function initializeSort(sortfield){
                    return {
                        field:sortfield,
                        reverse: false,
                        iconDirection: {"angle down icon": true, "angle up icon": false}
                    }
                }

                function sort(sortfield){
                    if (sortfield == tableCtrl.sortObj.field){
                        tableCtrl.sortObj.field = sortfield;
                        tableCtrl.sortObj.reverse = !tableCtrl.sortObj.reverse;
                        tableCtrl.sortObj.iconDirection = {
                            "angle down icon": !tableCtrl.sortObj.reverse,
                            "angle up icon": tableCtrl.sortObj.reverse
                        }
                    }
                    else{
                        tableCtrl.sortObj = initializeSort(sortfield);
                    }
                    tableCtrl.showChunk(tableCtrl.pageNo, tableCtrl.searchText);
                    $scope.$apply();
                }

                tableCtrl.showChunk = showChunk;
                tableCtrl.showNextChunk = showNextChunk;
                tableCtrl.showPrevChunk = showPrevChunk;
                tableCtrl.addPaginationMenu = addPaginationMenu;
                tableCtrl.sort = sort;
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
            require: '^^ctvTable',
            scope: {
                class: '@',
                sortfield: '='
            },
            link:function(scope, element, attrs, tableCtrl){
                scope.tablectrl = tableCtrl;
                if(scope.sortfield != undefined && scope.sortfield != null){
                    element.bind('click', function(){
                        tableCtrl.sort(scope.sortfield);
                    });
                }
            },
            templateUrl: 'components/directives/tableheader.html'
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
            scope: {
                colspan: '@'
            },
            replace:true,
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
    this.inspectStats = {};
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


Collection.prototype.getInspectByKey = function(key, url, refresh){
    var collection = this;
    var deferred = collection.$q.defer();
    if(key in collection.inspectStats && refresh == false){
        deferred.resolve(collection.inspectStats[key]);
    }
    else {
        collection.$http.get(url + key + '/')
            .then(function successCallback(response) {
                    var responseStats = collection.extract(response);
                    collection.inspectStats[key] = responseStats
                    deferred.resolve(responseStats);
                }
                , function errorCallback(error) {
                    deferred.reject(error);
                });
    }
    return deferred.promise;
};
/**
 * Created by hardik gandhi on 6/15/16.
 */

angular.module('contiv.models')
    .factory('NetprofilesModel', ['$http', '$q', function ($http, $q) {
        var netprofilesModel = new Collection($http, $q, ContivGlobals.NETPROFILES_ENDPOINT);

        /**
         * Generate policy key to save policy on server
         * @param policy
         * @returns {string}
         */
        netprofilesModel.generateKey = function (policy) {
            return policy.tenantName + ':' + policy.profileName;
        };

        return netprofilesModel;
    }]);

angular.module('contiv.models')
    .factory('NetworksModel', ['$http', '$q', function ($http, $q) {
        return new Collection($http, $q, ContivGlobals.NETWORKS_ENDPOINT);
    }]);

/**
 * Created by vjain3 on 3/22/16.
 */
angular.module('contiv.models')
    .factory('NodesModel', ['$http', '$q', function ($http, $q) {
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
        var nodesmodel = new NodesCollection($http, $q);
        return nodesmodel;
    }]);

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

/**
 * Created by cshampur on 7/17/16.
 */
angular.module("contiv.utils")
    .factory("InspectService", function(){

        /* This function would build the containerDetails object.
         eg :
         containerDetails={
         ContainerId1 : [{name: "homingHost", value: "cluster-node1", type: "string", format: "none"},
         {name: macAddress, value: "02:02", type:"string", format:"none"}
         ],
         ContainerId2 : [{name: "homingHost", value: "cluster-node1" type: "string", format: "none"},
         {name: macAddress, value: "02:04", type: "string", format: "none"}
         ]
         }
         --Used in displaying the container detail inside an accordion.
         */
        function buildEndPoints(endpoints){
            var containerDetails = {};
            for(var i in endpoints ){
                var containerAttributes = [];
                for(var key in endpoints[i]){
                    var endpointAttribute = {};
                    endpointAttribute.name = key;
                    endpointAttribute.format = 'none';
                    endpointAttribute.type = 'string';
                    switch (key){
                        case "ipAddress" :  endpointAttribute.value = endpoints[i][key].filter(function(ipAddress){return ipAddress.length > 0;}).join();
                            break;
                        case "labels" :     endpointAttribute.value = endpoints[i][key].replace(/(map\[|\])/gi,'').replace(/(:)/gi, '=').split(' ')
                            .filter(function(v){return v.length > 0});
                            endpointAttribute.format = 'label';
                            endpointAttribute.type = 'array';
                            break;
                        default :           endpointAttribute.value = endpoints[i][key];
                    }
                    containerAttributes.push(endpointAttribute);
                }
                containerDetails[endpoints[i].containerID] = containerAttributes;
            }
            return containerDetails
        }
        
        /*  This function checks whether any new containers were added or not
         View is updated only when there is a change in container configuration
         */
        function checkContainerChanged(contDetailsA, contDetailsB){
            if(contDetailsA == undefined)
                return true;
            else{
                if(Object.keys(contDetailsA).length != Object.keys(contDetailsB).length)
                    return true;
                for(var key in contDetailsB){
                    if(!(key in contDetailsA))
                        return true;
                }
                return false;
            }
        }
        
        return {
            buildEndPoints : buildEndPoints,
            checkContainerChanged : checkContainerChanged
        }
    });

angular.module('contiv.utils')
    .factory('NetworkService', ['$http', '$q', function ($http, $q) {

        function getSettings() {
            var deferred = $q.defer();
            var url = ContivGlobals.NETWORK_SETTINGS_ENDPOINT;
            $http.get(url).then(function successCallback(result) {
                deferred.resolve(result.data[0]);
            }, function errorCallback(result) {
                deferred.reject(result.data);
            });
            return deferred.promise;
        }

        function updateSettings(setting) {
            return $http.post(ContivGlobals.NETWORK_SETTINGS_ENDPOINT 
                + 'global/', setting);
        };

        return {
            getSettings: getSettings,
            updateSettings: updateSettings
        }
    }]);
angular.module('contiv.utils')
    .factory('NodesService', ['$http', '$q',
        function ($http, $q) {
            var node_constants = {
                APIC_CONTR_UNRESTRICT_MODE: 'apic_contracts_unrestricted_mode',
                APIC_EPG_BRIDGE_DOMAIN: 'apic_epg_bridge_domain',
                APIC_LEAF_NODES: 'apic_leaf_nodes',
                APIC_PASSWORD: 'apic_password',
                APIC_PHYS_DOMAIN: 'apic_phys_domain',
                APIC_URL: 'apic_url',
                APIC_USERNAME: 'apic_username',
                CONTIV_NET_MODE: 'contiv_network_mode',
                CONTROL_INTERFACE: 'control_interface',
                ENV: 'env',
                FWD_MODE: 'fwd_mode',
                DATA_INTERFACE: 'netplugin_if',
                SCHED_PROVIDER: 'scheduler_provider',
                VIP_ADDR: 'service_vip',
                UCP_BOOTSTRAP_NODE: 'ucp_bootstrap_node_name',
                CLUSTER_NAME: 'cluster_name'};

            function getSettings(ctrl) {
                var deferred = $q.defer();
                var url = ContivGlobals.NODES_SETTINGS_GET_ENDPOINT;
                $http.get(url).then(function successCallback(result) {
                    deferred.resolve(result.data);
                    ctrl.setting = result.data;
                    var extraVars = ctrl.setting.extra_vars;
                    var sched_provider = extraVars[node_constants.SCHED_PROVIDER];
                    var network_mode = extraVars[node_constants.CONTIV_NET_MODE];

                    if (extraVars[node_constants.CONTROL_INTERFACE]) {
                        ctrl.extra_vars[node_constants.CONTROL_INTERFACE] = 
                            extraVars[node_constants.CONTROL_INTERFACE]; 
                    }
                    if (extraVars[node_constants.DATA_INTERFACE]) {
                        ctrl.extra_vars[node_constants.DATA_INTERFACE] = 
                            extraVars[node_constants.DATA_INTERFACE]; 
                    }
                    if (extraVars[node_constants.VIP_ADDR]) {
                        ctrl.extra_vars[node_constants.VIP_ADDR] = extraVars[node_constants.VIP_ADDR]; 
                    }
                    if (sched_provider) {
                        ctrl.extra_vars[node_constants.SCHED_PROVIDER] = sched_provider;
                        if (sched_provider === 'ucp-swarm') {
                            ctrl.extra_vars[node_constants.UCP_BOOTSTRAP_NODE] = 
                                extraVars[node_constants.UCP_BOOTSTRAP_NODE];
                        }
                    }
                    if (network_mode) {
                        ctrl.extra_vars[node_constants.CONTIV_NET_MODE] = network_mode;
                        if (network_mode === 'standalone') {
                            ctrl.extra_vars[node_constants.FWD_MODE] = extraVars[node_constants.FWD_MODE];
                        }
                        else if (network_mode === 'aci') {
                            ctrl.extra_vars[node_constants.APIC_CONTR_UNRESTRICT_MODE] = 
                                extraVars[node_constants.APIC_CONTR_UNRESTRICT_MODE];
                            ctrl.extra_vars[node_constants.APIC_EPG_BRIDGE_DOMAIN] = 
                                extraVars[node_constants.APIC_EPG_BRIDGE_DOMAIN];
                            ctrl.extra_vars[node_constants.APIC_LEAF_NODES] = 
                                extraVars[node_constants.APIC_LEAF_NODES];
                            ctrl.extra_vars[node_constants.APIC_PASSWORD] = 
                                extraVars[node_constants.APIC_PASSWORD];
                            ctrl.extra_vars[node_constants.APIC_PHYS_DOMAIN] = 
                                extraVars[node_constants.APIC_PHYS_DOMAIN];
                            ctrl.extra_vars[node_constants.APIC_URL] = 
                                extraVars[node_constants.APIC_URL];
                            ctrl.extra_vars[node_constants.APIC_USERNAME] = 
                                extraVars[node_constants.APIC_USERNAME];                        
                        }
                    }
                    if (extraVars[node_constants.CLUSTER_NAME]) {
                        ctrl.extra_vars[node_constants.CLUSTER_NAME] =
                            extraVars[node_constants.CLUSTER_NAME];
                    }
                    createEnvVariables(extraVars[node_constants.ENV], ctrl.envVariables);
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
                var setting_filter = [node_constants.APIC_CONTR_UNRESTRICT_MODE,
                    node_constants.APIC_EPG_BRIDGE_DOMAIN, node_constants.APIC_LEAF_NODES, 
                    node_constants.APIC_PASSWORD, node_constants.APIC_PHYS_DOMAIN, 
                    node_constants.APIC_URL, node_constants.APIC_USERNAME, 
                    node_constants.CONTIV_NET_MODE, node_constants.CONTROL_INTERFACE, 
                    node_constants.ENV, node_constants.FWD_MODE, node_constants.DATA_INTERFACE, 
                    node_constants.SCHED_PROVIDER, node_constants.VIP_ADDR, 
                    node_constants.UCP_BOOTSTRAP_NODE, node_constants.CLUSTER_NAME];
                var i;

                for (i in extraVars) {
                    if (setting_filter.indexOf(i) === -1) {
                        ansibleVariables.push({'name': i, 'value': extraVars[i]});
                    }
                }
            };

            function updateSettings(nodeOpsObj) {
                return $http.post(ContivGlobals.NODES_SETTINGS_SET_ENDPOINT, nodeOpsObj, {
                        'headers': {
                            'Content-Type': 'application/json'
                        }
                    });
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
                ctrl.extra_vars[node_constants.ENV] = envVars;
                ctrl.nodeOpsObj.extra_vars = JSON.stringify(ctrl.extra_vars);
            };

            /**
             * Cleanup ansible variables for network mode and scheduler. ng-if removes it from the view (DOM) but not from
             * the model.
             */
            function cleanupExtraVars(ctrl) {
                //Cleanup for network mode
                if (ctrl.extra_vars[node_constants.CONTIV_NET_MODE] == 'aci') {
                    delete ctrl.extra_vars[node_constants.FWD_MODE];
                } else {
                    delete ctrl.extra_vars[node_constants.APIC_URL];
                    delete ctrl.extra_vars[node_constants.APIC_USERNAME];
                    delete ctrl.extra_vars[node_constants.APIC_PASSWORD];
                    delete ctrl.extra_vars[node_constants.APIC_LEAF_NODES];
                    delete ctrl.extra_vars[node_constants.APIC_PHYS_DOMAIN];
                    delete ctrl.extra_vars[node_constants.APIC_EPG_BRIDGE_DOMAIN];
                    delete ctrl.extra_vars[node_constants.APIC_CONTR_UNRESTRICT_MODE];
                }
                //Cleanup for scheduler
                if (ctrl.extra_vars[node_constants.SCHED_PROVIDER] == 'native-swarm') {
                    delete ctrl.extra_vars[node_constants.UCP_BOOTSTRAP_NODE];
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
angular.module('contiv.utils')
    .factory('VolumeSettingService', ['$http', '$q', function ($http, $q) {

        function getSettings() {
            var deferred = $q.defer();
            var url = ContivGlobals.VOLUMES_GLOBAL_ENDPOINT;
            $http.get(url).then(function successCallback(result) {
                deferred.resolve(result.data);
            }, function errorCallback(result) {
                deferred.reject(result.data);
            });
            return deferred.promise;
        }

        function updateSettings(setting) {
            return $http.post(ContivGlobals.VOLUMES_GLOBAL_ENDPOINT, setting);
        }

        return {
            getSettings: getSettings,
            updateSettings: updateSettings
        }
    }]);
angular.module("contiv.directives")
    .directive("ctvAcivalid", function () {
        return {
            restrict: 'E',
            templateUrl: 'components/directives/nodes/acivalid.html',
            scope: {
                form: "="
            }
        };
    });
angular.module("contiv.directives")
    .directive("ctvControlinterface", function () {
        return {
            restrict: 'E',
            templateUrl: 'components/directives/nodes/controlinterface.html',
            scope: {
                extravars: "="
            }
        };
    });
angular.module("contiv.directives")
    .directive("ctvNetworkmode", function () {
        return {
            restrict: 'E',
            templateUrl: 'components/directives/nodes/networkmode.html',
            scope: {
                extravars: "="
            }
        };
    });
angular.module("contiv.directives")
    .directive("ctvScheduler", function () {
        return {
            restrict: 'E',
            templateUrl: 'components/directives/nodes/scheduler.html',
            scope: {
                extravars: "="
            }
        };
    });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvbW9kdWxlLmpzIiwibW9kZWxzL21vZHVsZS5qcyIsInV0aWxzL21vZHVsZS5qcyIsImFwcGxpY2F0aW9uZ3JvdXBzL21vZHVsZS5qcyIsImRhc2hib2FyZC9tb2R1bGUuanMiLCJsb2dpbi9tb2R1bGUuanMiLCJtZW51L21vZHVsZS5qcyIsIm5ldHdvcmtfcG9saWNpZXMvbW9kdWxlLmpzIiwibmV0d29ya3MvbW9kdWxlLmpzIiwibm9kZXMvbW9kdWxlLmpzIiwib3JnYW5pemF0aW9ucy9tb2R1bGUuanMiLCJzZXJ2aWNlX2xicy9tb2R1bGUuanMiLCJzZXR0aW5ncy9tb2R1bGUuanMiLCJzdG9yYWdlX3BvbGljaWVzL21vZHVsZS5qcyIsInZvbHVtZXMvbW9kdWxlLmpzIiwiYXBwLmpzIiwiYXBwbGljYXRpb25ncm91cHMvYXBwbGljYXRpb25ncm91cGNyZWF0ZWN0cmwuanMiLCJhcHBsaWNhdGlvbmdyb3Vwcy9hcHBsaWNhdGlvbmdyb3VwZGV0YWlsc2N0cmwuanMiLCJhcHBsaWNhdGlvbmdyb3Vwcy9hcHBsaWNhdGlvbmdyb3VwbGlzdGN0cmwuanMiLCJhcHBsaWNhdGlvbmdyb3Vwcy9iYW5kd2lkdGhwb2xpY3lkaXJlY3RpdmUuanMiLCJhcHBsaWNhdGlvbmdyb3Vwcy9pc29sYXRpb25wb2xpY3lkaXJlY3RpdmUuanMiLCJkYXNoYm9hcmQvZGFzaGJvYXJkY3RybC5qcyIsImxvZ2luL2xvZ2luY3RybC5qcyIsIm1lbnUvbWVudUN0cmwuanMiLCJuZXR3b3JrX3BvbGljaWVzL2JhbmR3aWR0aGRpcmVjdGl2ZS5qcyIsIm5ldHdvcmtfcG9saWNpZXMvYmFuZHdpZHRocG9saWN5Y3JlYXRlY3RybC5qcyIsIm5ldHdvcmtfcG9saWNpZXMvYmFuZHdpZHRocG9saWN5ZGV0YWlsc2N0cmwuanMiLCJuZXR3b3JrX3BvbGljaWVzL2JhbmR3aWR0aHBvbGljeWxpc3RjdHJsLmpzIiwibmV0d29ya19wb2xpY2llcy9pc29sYXRpb25wb2xpY3ljcmVhdGVjdHJsLmpzIiwibmV0d29ya19wb2xpY2llcy9pc29sYXRpb25wb2xpY3lkZXRhaWxzY3RybC5qcyIsIm5ldHdvcmtfcG9saWNpZXMvaXNvbGF0aW9ucG9saWN5bGlzdGN0cmwuanMiLCJuZXR3b3JrX3BvbGljaWVzL25ldHdvcmtwb2xpY2llc3RhYnNjdHJsLmpzIiwibmV0d29ya3MvbmV0d29ya2NyZWF0ZWN0cmwuanMiLCJuZXR3b3Jrcy9uZXR3b3JrZGV0YWlsc2N0cmwuanMiLCJuZXR3b3Jrcy9uZXR3b3JrbGlzdGN0cmwuanMiLCJuZXR3b3Jrcy9uZXR3b3Jrc3RhdHNjdHJsLmpzIiwibm9kZXMvYmdwc2VydmljZS5qcyIsIm5vZGVzL2xvZ3NkaXJlY3RpdmUuanMiLCJub2Rlcy9sb2dzZXJ2aWNlLmpzIiwibm9kZXMvbm9kZWFjdGl2ZWpvYmxvZ3NjdHJsLmpzIiwibm9kZXMvbm9kZWNvbW1pc3Npb25jdHJsLmpzIiwibm9kZXMvbm9kZWRldGFpbHNjdHJsLmpzIiwibm9kZXMvbm9kZWRpcmVjdGl2ZS5qcyIsIm5vZGVzL25vZGVkaXNjb3ZlcmN0cmwuanMiLCJub2Rlcy9ub2RlbGFzdGpvYmxvZ3NjdHJsLmpzIiwibm9kZXMvbm9kZWxpc3RjdHJsLmpzIiwib3JnYW5pemF0aW9ucy9vcmdhbml6YXRpb25jcmVhdGVjdHJsLmpzIiwib3JnYW5pemF0aW9ucy9vcmdhbml6YXRpb25kZXRhaWxzY3RybC5qcyIsIm9yZ2FuaXphdGlvbnMvb3JnYW5pemF0aW9ubGlzdGN0cmwuanMiLCJzZXJ2aWNlX2xicy9zZXJ2aWNlbGJjcmVhdGVjdHJsLmpzIiwic2VydmljZV9sYnMvc2VydmljZWxiZGV0YWlsc2N0cmwuanMiLCJzZXJ2aWNlX2xicy9zZXJ2aWNlbGJsaXN0Y3RybC5qcyIsInNlcnZpY2VfbGJzL3NlcnZpY2VsYnBvcnRzZGlyZWN0aXZlLmpzIiwic2VydmljZV9sYnMvc2VydmljZWxic3RhdHNjdHJsLmpzIiwic2V0dGluZ3MvY2x1c3RlcnNldHRpbmdjdHJsLmpzIiwic2V0dGluZ3MvbmV0d29ya3NldHRpbmdjdHJsLmpzIiwic2V0dGluZ3Mvdm9sdW1lc2V0dGluZ2N0cmwuanMiLCJzdG9yYWdlX3BvbGljaWVzL3N0b3JhZ2Vwb2xpY3ljcmVhdGVjdHJsLmpzIiwic3RvcmFnZV9wb2xpY2llcy9zdG9yYWdlcG9saWN5ZGV0YWlsc2N0cmwuanMiLCJzdG9yYWdlX3BvbGljaWVzL3N0b3JhZ2Vwb2xpY3lkaXJlY3RpdmUuanMiLCJzdG9yYWdlX3BvbGljaWVzL3N0b3JhZ2Vwb2xpY3lsaXN0Y3RybC5qcyIsInZvbHVtZXMvdm9sdW1lY3JlYXRlY3RybC5qcyIsInZvbHVtZXMvdm9sdW1lZGV0YWlsc2N0cmwuanMiLCJ2b2x1bWVzL3ZvbHVtZWxpc3RjdHJsLmpzIiwidm9sdW1lcy92b2x1bWVzZXJ2aWNlLmpzIiwiY29tcG9uZW50cy9kaXJlY3RpdmVzL2FjY29kaW9uZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9kaXJlY3RpdmVzL2NvbGxhcHNpYmxlZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9kaXJlY3RpdmVzL2Vycm9ybWVzc2FnZWRpcmVjdGl2ZS5qcyIsImNvbXBvbmVudHMvZGlyZWN0aXZlcy9uYW1ldmFsdWVkaXJlY3RpdmUuanMiLCJjb21wb25lbnRzL2RpcmVjdGl2ZXMvdGFibGVkaXJlY3RpdmUuanMiLCJjb21wb25lbnRzL21vZGVscy9hcHBsaWNhdGlvbmdyb3Vwc21vZGVsLmpzIiwiY29tcG9uZW50cy9tb2RlbHMvY29sbGVjdGlvbi5qcyIsImNvbXBvbmVudHMvbW9kZWxzL25ldHByb2ZpbGVzbW9kZWwuanMiLCJjb21wb25lbnRzL21vZGVscy9uZXR3b3Jrc21vZGVsLmpzIiwiY29tcG9uZW50cy9tb2RlbHMvbm9kZXNtb2RlbC5qcyIsImNvbXBvbmVudHMvbW9kZWxzL29yZ2FuaXphdGlvbnNtb2RlbC5qcyIsImNvbXBvbmVudHMvbW9kZWxzL3BvbGljaWVzbW9kZWwuanMiLCJjb21wb25lbnRzL21vZGVscy9ydWxlc21vZGVsLmpzIiwiY29tcG9uZW50cy9tb2RlbHMvc2VydmljZWxic21vZGVsLmpzIiwiY29tcG9uZW50cy9tb2RlbHMvc3RvcmFnZXBvbGljaWVzbW9kZWwuanMiLCJjb21wb25lbnRzL21vZGVscy92b2x1bWVzbW9kZWwuanMiLCJjb21wb25lbnRzL3V0aWxzL2NydWRoZWxwZXJzZXJ2aWNlLmpzIiwiY29tcG9uZW50cy91dGlscy9pbnNwZWN0c2VydmljZS5qcyIsImNvbXBvbmVudHMvdXRpbHMvbmV0d29ya3NlcnZpY2UuanMiLCJjb21wb25lbnRzL3V0aWxzL25vZGVzc2VydmljZS5qcyIsImNvbXBvbmVudHMvdXRpbHMvdm9sdW1lc2V0dGluZ3NlcnZpY2UuanMiLCJjb21wb25lbnRzL2RpcmVjdGl2ZXMvbm9kZXMvYWNpdmFsaWRkaXJlY3RpdmUuanMiLCJjb21wb25lbnRzL2RpcmVjdGl2ZXMvbm9kZXMvY29udHJvbGludGVyZmFjZWRpcmVjdGl2ZS5qcyIsImNvbXBvbmVudHMvZGlyZWN0aXZlcy9ub2Rlcy9uZXR3b3JrbW9kZWRpcmVjdGl2ZS5qcyIsImNvbXBvbmVudHMvZGlyZWN0aXZlcy9ub2Rlcy9zY2hlZHVsZXJkaXJlY3RpdmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RIQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKFwiY29udGl2LmRpcmVjdGl2ZXNcIiwgW10pOyIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gMy8xNC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5tb2RlbHMnLCBbXSk7XG52YXIgQ29udGl2R2xvYmFscyA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvL1JFU1QgZW5kcG9pbnRzIGZvciBORVRNQVNURVJcbiAgICAgICAgJ05FVFdPUktTX0VORFBPSU5UJzogJy9uZXRtYXN0ZXIvYXBpL3YxL25ldHdvcmtzLycsXG4gICAgICAgICdORVRXT1JLU19JTlNQRUNUX0VORFBPSU5UJzonL25ldG1hc3Rlci9hcGkvdjEvaW5zcGVjdC9uZXR3b3Jrcy8nLFxuICAgICAgICAnU0VSVklDRUxCU19JTlNQRUNUX0VORFBPSU5UJzonL25ldG1hc3Rlci9hcGkvdjEvaW5zcGVjdC9zZXJ2aWNlTEJzLycsXG4gICAgICAgICdQT0xJQ0lFU19FTkRQT0lOVCc6ICcvbmV0bWFzdGVyL2FwaS92MS9wb2xpY3lzLycsXG4gICAgICAgICdSVUxFU19FTkRQT0lOVCc6ICcvbmV0bWFzdGVyL2FwaS92MS9ydWxlcy8nLFxuICAgICAgICAnQVBQTElDQVRJT05HUk9VUFNfRU5EUE9JTlQnOiAnL25ldG1hc3Rlci9hcGkvdjEvZW5kcG9pbnRHcm91cHMvJyxcbiAgICAgICAgJ1NFUlZJQ0VMQlNfRU5EUE9JTlQnOiAnL25ldG1hc3Rlci9hcGkvdjEvc2VydmljZUxCcy8nLFxuICAgICAgICAnT1JHQU5JWkFUSU9OU19FTkRQT0lOVCc6Jy9uZXRtYXN0ZXIvYXBpL3YxL3RlbmFudHMvJyxcbiAgICAgICAgJ05FVFdPUktfU0VUVElOR1NfRU5EUE9JTlQnOiAnL25ldG1hc3Rlci9hcGkvdjEvZ2xvYmFscy8nLFxuICAgICAgICAnTkVUUFJPRklMRVNfRU5EUE9JTlQnOiAnL25ldG1hc3Rlci9hcGkvdjEvbmV0cHJvZmlsZXMvJyxcbiAgICAgICAgJ0JHUFNfRU5EUE9JTlQnOiAnL25ldG1hc3Rlci9hcGkvdjEvQmdwcy8nLFxuICAgICAgICAnQkdQU19JTlNQRUNUX0VORFBPSU5UJzogJy9uZXRtYXN0ZXIvYXBpL3YxL2luc3BlY3QvQmdwcy8nLFxuXG4gICAgICAgIC8vUkVTVCBlbmRwb2ludHMgZm9yIFZPTE1BU1RFUlxuICAgICAgICAnVk9MVU1FU19FTkRQT0lOVCc6ICcvdm9sbWFzdGVyL3ZvbHVtZXMvJyxcbiAgICAgICAgJ1ZPTFVNRVNfQ1JFQVRFX0VORFBPSU5UJzogJy92b2xtYXN0ZXIvdm9sdW1lcy9jcmVhdGUvJyxcbiAgICAgICAgJ1ZPTFVNRVNfREVMRVRFX0VORFBPSU5UJzogJy92b2xtYXN0ZXIvdm9sdW1lcy9yZW1vdmUvJyxcbiAgICAgICAgJ1ZPTFVNRVNfQ09QWVNOQVBTSE9UU19FTkRQT0lOVCc6ICcvdm9sbWFzdGVyL3ZvbHVtZXMvY29weS8nLFxuICAgICAgICAnVk9MVU1FU19VU0VTX0VORFBPSU5UJzogJy92b2xtYXN0ZXIvdXNlcy9tb3VudHMvJyxcbiAgICAgICAgJ1ZPTFVNRVNfU05BUFNIT1RTX0VORFBPSU5UJzogJy92b2xtYXN0ZXIvc25hcHNob3RzLycsXG4gICAgICAgICdTVE9SQUdFUE9MSUNJRVNfRU5EUE9JTlQnOiAnL3ZvbG1hc3Rlci9wb2xpY2llcy8nLFxuICAgICAgICAnVk9MVU1FU19HTE9CQUxfRU5EUE9JTlQnOiAnL3ZvbG1hc3Rlci9nbG9iYWwvJyxcblxuICAgICAgICAvL1JFU1QgZW5kcG9pbnRzIGZvciBDTFVTVEVSXG4gICAgICAgICdOT0RFU19MSVNUX0VORFBPSU5UJzogJy9pbmZvL25vZGVzJyxcbiAgICAgICAgJ05PREVTX0RJU0NPVkVSX0VORFBPSU5UJzogJy9kaXNjb3Zlci9ub2RlcycsXG4gICAgICAgICdOT0RFU19DT01NSVNTSU9OX0VORFBPSU5UJzogJy9jb21taXNzaW9uL25vZGVzJyxcbiAgICAgICAgJ05PREVTX0RFQ09NTUlTU0lPTl9FTkRQT0lOVCc6ICcvZGVjb21taXNzaW9uL25vZGVzJyxcbiAgICAgICAgJ05PREVTX01BSU5URU5BTkNFX0VORFBPSU5UJzogJy9tYWludGVuYW5jZS9ub2RlcycsXG4gICAgICAgICdOT0RFU19MQVNUX0pPQl9FTkRQT0lOVCc6ICcvaW5mby9qb2IvbGFzdCcsXG4gICAgICAgICdOT0RFU19BQ1RJVkVfSk9CX0VORFBPSU5UJzogJy9pbmZvL2pvYi9hY3RpdmUnLFxuICAgICAgICAnTk9ERVNfU0VUVElOR1NfU0VUX0VORFBPSU5UJzogJy9nbG9iYWxzJyxcbiAgICAgICAgJ05PREVTX1NFVFRJTkdTX0dFVF9FTkRQT0lOVCc6ICcvaW5mby9nbG9iYWxzJyxcblxuICAgICAgICAvL1JlZnJlc2ggaW50ZXJ2YWwgaW4gbWlsbGlzZWNvbmRzXG4gICAgICAgICdSRUZSRVNIX0lOVEVSVkFMJzogNTAwMCxcblxuICAgICAgICAvL1JlZ0V4IGZvciB2YWxpZGF0aW9uXG4gICAgICAgICdDSURSX1JFR0VYJyA6ICdeKChbMC05XXxbMS05XVswLTldfDFbMC05XXsyfXwyWzAtNF1bMC05XXwyNVswLTVdKVxcLil7M30oWzAtOV18WzEtOV1bMC05XXwxWzAtOV17Mn18MlswLTRdWzAtOV18MjVbMC01XSkoXFwvKFswLTldfFsxLTJdWzAtOV18M1swLTJdKSkkJyxcbiAgICAgICAgJ1ZMQU5fUkVHRVgnIDogJ14oWzAtOV17MSw0fT8tWzAtOV17MSw0fT8pJCcsXG4gICAgICAgICdWWExBTl9SRUdFWCcgOiAnXihbMC05XXsxLDh9Py1bMC05XXsxLDh9PykkJyxcbiAgICAgICAgJ05VTUJFUl9SRUdFWCcgOiAnXlswLTldKiQnXG4gICAgfVxufSkoKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xOC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi51dGlscycsIFtdKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTgvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuYXBwbGljYXRpb25ncm91cHMnLCBbJ2NvbnRpdi5tb2RlbHMnLCAnY29udGl2LmRpcmVjdGl2ZXMnLCAnY29udGl2LnV0aWxzJ10pXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LmFwcGxpY2F0aW9uZ3JvdXBzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9hcHBsaWNhdGlvbmdyb3VwcycsXG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IHVpLXZpZXcgY2xhc3M9XCJ1aSBjb250YWluZXJcIi8+J1xuICAgICAgICAgICAgfSlcbiAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTgvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuZGFzaGJvYXJkJywgWydjb250aXYubW9kZWxzJ10pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzE5LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LmxvZ2luJywgWydjb250aXYudXRpbHMnXSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzE5LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm1lbnUnLCBbXSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzE4LzE2LlxuICovXG5cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubmV0d29ya3BvbGljaWVzJywgWydjb250aXYubW9kZWxzJywgJ2NvbnRpdi5kaXJlY3RpdmVzJywgJ2NvbnRpdi51dGlscyddKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL25ldHdvcmtwb2xpY2llcycsXG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IHVpLXZpZXcgY2xhc3M9XCJ1aSBjb250YWluZXJcIi8+J1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzLmlzb2xhdGlvbicsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvaXNvbGF0aW9uJyxcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJzx1aS12aWV3Lz4nXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMuYmFuZHdpZHRoJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9iYW5kd2lkdGgnLFxuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnPHVpLXZpZXcvPidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5ldHdvcmtwb2xpY2llcy5yZWRpcmVjdGlvbicsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvcmVkaXJlY3Rpb24nLFxuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnPHVpLXZpZXcvPidcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTgvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubmV0d29ya3MnLCBbJ2NvbnRpdi5tb2RlbHMnLCAnY29udGl2LmRpcmVjdGl2ZXMnLCAnY29udGl2LnV0aWxzJ10pXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3JrcycsIHtcbiAgICAgICAgICAgIHVybDogJy9uZXR3b3JrcycsXG4gICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnPGRpdiB1aS12aWV3IGNsYXNzPVwidWkgY29udGFpbmVyXCIvPidcbiAgICAgICAgfSlcbiAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTgvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubm9kZXMnLCBbJ2NvbnRpdi5tb2RlbHMnLCAnY29udGl2LmRpcmVjdGl2ZXMnLCAnY29udGl2LnV0aWxzJ10pXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5vZGVzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9ub2RlcycsXG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IHVpLXZpZXcgY2xhc3M9XCJ1aSBjb250YWluZXJcIi8+J1xuICAgICAgICAgICAgfSlcbiAgICB9XSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2Lm9yZ2FuaXphdGlvbnMnLCBbJ2NvbnRpdi5tb2RlbHMnLCAnY29udGl2LmRpcmVjdGl2ZXMnLCAnY29udGl2LnV0aWxzJ10pXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdjb250aXYubWVudS5vcmdhbml6YXRpb25zJywge1xuICAgICAgICAgICAgdXJsOiAnL29yZ2FuaXphdGlvbnMnLFxuICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJzxkaXYgdWktdmlldyBjbGFzcz1cInVpIGNvbnRhaW5lclwiLz4nXG4gICAgICAgIH0pXG4gICAgfV0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xOC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5zZXJ2aWNlbGJzJywgWydjb250aXYubW9kZWxzJywgJ2NvbnRpdi5kaXJlY3RpdmVzJywgJ2NvbnRpdi51dGlscyddKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5zZXJ2aWNlbGJzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9zZXJ2aWNlbGJzJyxcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJzxkaXYgdWktdmlldyBjbGFzcz1cInVpIGNvbnRhaW5lclwiLz4nXG4gICAgICAgICAgICB9KVxuICAgIH1dKTtcbiIsImFuZ3VsYXIubW9kdWxlKCdjb250aXYuc2V0dGluZ3MnLCBbJ2NvbnRpdi5tb2RlbHMnLCAnY29udGl2LmRpcmVjdGl2ZXMnLCAnY29udGl2LnV0aWxzJ10pXHJcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcclxuICAgICAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnNldHRpbmdzJywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2dsb2JhbCcsXHJcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnPGRpdiB1aS12aWV3IGNsYXNzPVwidWkgY29udGFpbmVyXCIvPidcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5zZXR0aW5ncy5kZXRhaWxzJywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3NldHRpbmdzJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2V0dGluZ3Mvc2V0dGluZ3NtZW51Lmh0bWwnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc2V0dGluZ3MuZGV0YWlscy5sb2dzJywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2xvZ3MnLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJycsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5zZXR0aW5ncy5kZXRhaWxzLmF1dGgnLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvYXV0aCcsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnNldHRpbmdzLmRldGFpbHMubGljZW5zZScsIHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9saWNlbnNlJyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICcnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc2V0dGluZ3MuZGV0YWlscy5wb2xpY2llcycsIHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9wb2xpY2llcycsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfV0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xOC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5zdG9yYWdlcG9saWNpZXMnLCBbJ2NvbnRpdi5tb2RlbHMnLCAnY29udGl2LmRpcmVjdGl2ZXMnLCAnY29udGl2LnV0aWxzJ10pXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnN0b3JhZ2Vwb2xpY2llcycsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvc3RvcmFnZXBvbGljaWVzJyxcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJzxkaXYgdWktdmlldyBjbGFzcz1cInVpIGNvbnRhaW5lclwiLz4nXG4gICAgICAgICAgICB9KVxuICAgIH1dKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTgvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYudm9sdW1lcycsIFsnY29udGl2Lm1vZGVscycsICdjb250aXYuZGlyZWN0aXZlcycsICdjb250aXYudXRpbHMnXSlcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUudm9sdW1lcycsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvdm9sdW1lcycsXG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IHVpLXZpZXcgY2xhc3M9XCJ1aSBjb250YWluZXJcIi8+J1xuICAgICAgICAgICAgfSlcbiAgICB9XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cblxuLy8gRGVjbGFyZSBhcHAgbGV2ZWwgbW9kdWxlIHdoaWNoIGRlcGVuZHMgb24gdmlld3MsIGFuZCBjb21wb25lbnRzXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2QXBwJywgW1xuICAgICAgICAndWkucm91dGVyJyxcbiAgICAgICAgJ2NvbnRpdi5sb2dpbicsXG4gICAgICAgICdjb250aXYubWVudScsXG4gICAgICAgICdjb250aXYuZGFzaGJvYXJkJyxcbiAgICAgICAgJ2NvbnRpdi5hcHBsaWNhdGlvbmdyb3VwcycsXG4gICAgICAgICdjb250aXYubmV0d29ya3MnLFxuICAgICAgICAnY29udGl2Lm5ldHdvcmtwb2xpY2llcycsXG4gICAgICAgICdjb250aXYuc3RvcmFnZXBvbGljaWVzJyxcbiAgICAgICAgJ2NvbnRpdi5zZXJ2aWNlbGJzJyxcbiAgICAgICAgJ2NvbnRpdi52b2x1bWVzJyxcbiAgICAgICAgJ2NvbnRpdi5ub2RlcycsXG4gICAgICAgICdjb250aXYub3JnYW5pemF0aW9ucycsXG4gICAgICAgICdjb250aXYuc2V0dGluZ3MnLFxuICAgIF0pXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgIC8vYWJzdHJhY3Qgc3RhdGUgc2VydmVzIGFzIGEgUExBQ0VIT0xERVIgb3IgTkFNRVNQQUNFIGZvciBhcHBsaWNhdGlvbiBzdGF0ZXNcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Jywge1xuICAgICAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IHVpLXZpZXcgY2xhc3M9XCJ1aSBmbHVpZCBjb250YWluZXJcIi8+J1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuXG4gICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMTEvMTYuXG4gKi9cbi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gMy8xMC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5hcHBsaWNhdGlvbmdyb3VwcycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LmFwcGxpY2F0aW9uZ3JvdXBzLmNyZWF0ZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvY3JlYXRlJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnQXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwgYXMgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwbGljYXRpb25ncm91cHMvYXBwbGljYXRpb25ncm91cGNyZWF0ZS5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdBcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybCcsIFtcbiAgICAgICAgJyRzdGF0ZScsXG4gICAgICAgICckc3RhdGVQYXJhbXMnLFxuICAgICAgICAnQXBwbGljYXRpb25Hcm91cHNNb2RlbCcsXG4gICAgICAgICdOZXR3b3Jrc01vZGVsJyxcbiAgICAgICAgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSxcbiAgICAgICAgICAgICAgICAgICRzdGF0ZVBhcmFtcyxcbiAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uR3JvdXBzTW9kZWwsXG4gICAgICAgICAgICAgICAgICBOZXR3b3Jrc01vZGVsLFxuICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybCA9IHRoaXM7XG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5uZXR3b3JrcyA9IFtdO1xuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuYXBwbGljYXRpb25Hcm91cCA9IHt9O1xuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuc2VsZWN0ZWROZXR3b3JrID0ge307XG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5tb2RlID0gXCJlZGl0XCI7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvQXBwbGljYXRpb25Hcm91cCgpIHtcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51LmFwcGxpY2F0aW9uZ3JvdXBzLmxpc3QnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY2FuY2VsQ3JlYXRpbmcoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVG9BcHBsaWNhdGlvbkdyb3VwKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IG5ldHdvcmtzIGZvciB0aGUgZ2l2ZW4gdGVuYW50LlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXROZXR3b3JrcygpIHtcbiAgICAgICAgICAgICAgICBOZXR3b3Jrc01vZGVsLmdldCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5uZXR3b3JrcyA9IF8uZmlsdGVyKHJlc3VsdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3RlbmFudE5hbWUnOiAnZGVmYXVsdCcvL1RPRE86IFJlbW92ZSBoYXJkY29kZWQgdGVuYW50LlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlQXBwbGljYXRpb25Hcm91cCgpIHtcbiAgICAgICAgICAgICAgICAvL2Zvcm0gY29udHJvbGxlciBpcyBpbmplY3RlZCBieSB0aGUgaHRtbCB0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIC8vY2hlY2tpbmcgaWYgYWxsIHZhbGlkYXRpb25zIGhhdmUgcGFzc2VkXG4gICAgICAgICAgICAgICAgaWYgKGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLmZvcm0uJHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuYXBwbGljYXRpb25Hcm91cC5uZXR3b3JrTmFtZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5zZWxlY3RlZE5ldHdvcmsubmV0d29ya05hbWU7XG5cbiAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuYXBwbGljYXRpb25Hcm91cC5rZXkgPVxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cHNNb2RlbC5nZW5lcmF0ZUtleShhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5hcHBsaWNhdGlvbkdyb3VwKTtcblxuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogYXBwbGljYXRpb25Hcm91cCBjb25zaXN0IG9mIEdyb3VwIE5hbWUsIE5ldHdvcmsgTmFtZSwgSXNvbGF0aW9uIFBvbGljaWVzLCBCYW5kd2lkdGggUG9saWN5XG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cHNNb2RlbC5jcmVhdGUoYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuYXBwbGljYXRpb25Hcm91cCkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub0FwcGxpY2F0aW9uR3JvdXAoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBmdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5hcHBsaWNhdGlvbkdyb3VwID0ge1xuICAgICAgICAgICAgICAgICAgICBncm91cE5hbWU6ICcnLCAgICAgICAgICAvLyBGb3IgR3JvdXAgTmFtZVxuICAgICAgICAgICAgICAgICAgICBuZXR3b3JrTmFtZTogJycsICAgICAgICAvLyBGb3IgTmV0d29yayBOYW1lXG4gICAgICAgICAgICAgICAgICAgIHBvbGljaWVzOiBbXSwgICAgICAgICAgIC8vIEZvciBJc29sYXRpb24gcG9saWNpZXNcbiAgICAgICAgICAgICAgICAgICAgbmV0UHJvZmlsZTogJycsICAgICAgICAgLy8gRm9yIEJhbmR3aWR0aCBwb2xpY3kgTmFtZVxuICAgICAgICAgICAgICAgICAgICB0ZW5hbnROYW1lOiAnZGVmYXVsdCcvL1RPRE86IFJlbW92ZSBoYXJkY29kZWQgdGVuYW50LlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGdldE5ldHdvcmtzKCk7XG5cbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLmNyZWF0ZUFwcGxpY2F0aW9uR3JvdXAgPSBjcmVhdGVBcHBsaWNhdGlvbkdyb3VwO1xuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuY2FuY2VsQ3JlYXRpbmcgPSBjYW5jZWxDcmVhdGluZztcblxuICAgICAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgICAgIH1dKTsiLCIgLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzE1LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LmFwcGxpY2F0aW9uZ3JvdXBzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuYXBwbGljYXRpb25ncm91cHMuZGV0YWlscycsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZGV0YWlscy86a2V5JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnQXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsIGFzIGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHBsaWNhdGlvbmdyb3Vwcy9hcHBsaWNhdGlvbmdyb3VwZGV0YWlscy5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuYXBwbGljYXRpb25ncm91cHMuZWRpdCcsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZWRpdC86a2V5JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnQXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsIGFzIGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHBsaWNhdGlvbmdyb3Vwcy9hcHBsaWNhdGlvbmdyb3VwZGV0YWlscy5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdBcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwnLCBbXG4gICAgICAgICckc3RhdGUnLFxuICAgICAgICAnJHN0YXRlUGFyYW1zJyxcbiAgICAgICAgJ0FwcGxpY2F0aW9uR3JvdXBzTW9kZWwnLFxuICAgICAgICAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLFxuICAgICAgICAgICAgICAgICAgJHN0YXRlUGFyYW1zLFxuICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cHNNb2RlbCxcbiAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICB2YXIgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsID0gdGhpcztcblxuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmFwcGxpY2F0aW9uR3JvdXAgPSB7fTtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5zZWxlY3RlZE5ldHdvcmsgPSB7fTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUbyBzaG93IGVkaXQgb3IgZGV0YWlscyBzY3JlZW4gYmFzZWQgb24gdGhlIHJvdXRlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldE1vZGUoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCRzdGF0ZS5pcygnY29udGl2Lm1lbnUuYXBwbGljYXRpb25ncm91cHMuZWRpdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5tb2RlID0gJ2VkaXQnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5tb2RlID0gJ2RldGFpbHMnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9BcHBsaWNhdGlvbkdyb3VwKCkge1xuICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUuYXBwbGljYXRpb25ncm91cHMubGlzdCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub0FwcGxpY2F0aW9uR3JvdXBEZXRhaWxzKCkge1xuICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUuYXBwbGljYXRpb25ncm91cHMuZGV0YWlscycsIHsna2V5JzogYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmFwcGxpY2F0aW9uR3JvdXAua2V5fSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNhbmNlbEVkaXRpbmcoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVG9BcHBsaWNhdGlvbkdyb3VwRGV0YWlscygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBkZWxldGVBcHBsaWNhdGlvbkdyb3VwKCkge1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cHNNb2RlbC5kZWxldGUoYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmFwcGxpY2F0aW9uR3JvdXApLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvQXBwbGljYXRpb25Hcm91cCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHNhdmVBcHBsaWNhdGlvbkdyb3VwKCkge1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCk7XG5cbiAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbkdyb3Vwc01vZGVsLnNhdmUoYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmFwcGxpY2F0aW9uR3JvdXApLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblRvQXBwbGljYXRpb25Hcm91cERldGFpbHMoKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsKTtcbiAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwpO1xuXG4gICAgICAgICAgICBBcHBsaWNhdGlvbkdyb3Vwc01vZGVsLmdldE1vZGVsQnlLZXkoJHN0YXRlUGFyYW1zLmtleSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmFwcGxpY2F0aW9uR3JvdXAgPSBncm91cDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLnNhdmVBcHBsaWNhdGlvbkdyb3VwID0gc2F2ZUFwcGxpY2F0aW9uR3JvdXA7XG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuY2FuY2VsRWRpdGluZyA9IGNhbmNlbEVkaXRpbmc7XG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuZGVsZXRlQXBwbGljYXRpb25Hcm91cCA9IGRlbGV0ZUFwcGxpY2F0aW9uR3JvdXA7XG5cbiAgICAgICAgICAgIHNldE1vZGUoKTtcblxuICAgICAgICB9XSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzExLzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LmFwcGxpY2F0aW9uZ3JvdXBzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuYXBwbGljYXRpb25ncm91cHMubGlzdCcsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvbGlzdCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0FwcGxpY2F0aW9uR3JvdXBMaXN0Q3RybCBhcyBhcHBsaWNhdGlvbkdyb3VwTGlzdEN0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwbGljYXRpb25ncm91cHMvYXBwbGljYXRpb25ncm91cGxpc3QuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignQXBwbGljYXRpb25Hcm91cExpc3RDdHJsJyxcbiAgICAgICAgWyckc2NvcGUnLCAnJGludGVydmFsJywgJyRmaWx0ZXInLCAnQXBwbGljYXRpb25Hcm91cHNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsXG4gICAgICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkaW50ZXJ2YWwsICRmaWx0ZXIsIEFwcGxpY2F0aW9uR3JvdXBzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFwcGxpY2F0aW9uR3JvdXBMaXN0Q3RybCA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRBcHBsaWNhdGlvbkdyb3VwcyhyZWxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cHNNb2RlbC5nZXQocmVsb2FkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoYXBwbGljYXRpb25Hcm91cExpc3RDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwTGlzdEN0cmwuZ3JvdXBzID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGFwcGxpY2F0aW9uR3JvdXBMaXN0Q3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL0xvYWQgZnJvbSBjYWNoZSBmb3IgcXVpY2sgZGlzcGxheSBpbml0aWFsbHlcbiAgICAgICAgICAgICAgICBnZXRBcHBsaWNhdGlvbkdyb3VwcyhmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZTtcbiAgICAgICAgICAgICAgICAvL0Rvbid0IHN0YXJ0IGF1dG8tcmVmcmVzaCBpZiBvbmUgaXMgYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQocHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9ICRpbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRBcHBsaWNhdGlvbkdyb3Vwcyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vc3RvcCBwb2xsaW5nIHdoZW4gdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJGludGVydmFsLmNhbmNlbChwcm9taXNlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBoYXJkaWsgZ2FuZGhpIG9uIDYvMjgvMTYuXG4gKi9cblxuYW5ndWxhci5tb2R1bGUoXCJjb250aXYuYXBwbGljYXRpb25ncm91cHNcIilcbiAgICAuZGlyZWN0aXZlKFwiY3R2QmFuZHdpZHRocG9saWN5XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgbW9kZTpcIj1cIixcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbmdyb3VwOic9J1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgY29udHJvbGxlcjogW1xuICAgICAgICAgICAgICAgICckc2NvcGUnLFxuICAgICAgICAgICAgICAgICdOZXRwcm9maWxlc01vZGVsJyxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBOZXRwcm9maWxlc01vZGVsKSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5uZXRQcm9maWxlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWROZXRwcm9maWxlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9saWN5Ont9XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIEdldCBwcm9maWxlcyBmb3IgdGhlIGdpdmVuIHRlbmFudC5cbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldE5ldHByb2ZpbGVzKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgTmV0cHJvZmlsZXNNb2RlbC5nZXQoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubmV0UHJvZmlsZXMgPSBfLmZpbHRlcihyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RlbmFudE5hbWUnOiAnZGVmYXVsdCcgICAgICAgIC8vVE9ETzogUmVtb3ZlIGhhcmRjb2RlZCB0ZW5hbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoJHNjb3BlLmFwcGxpY2F0aW9uZ3JvdXAubmV0UHJvZmlsZSAhPT0gJycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWROZXRwcm9maWxlLnBvbGljeSA9IF8uZmluZCgkc2NvcGUubmV0UHJvZmlsZXMsZnVuY3Rpb24ocG9saWN5KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwb2xpY3kucHJvZmlsZU5hbWUgPT09ICRzY29wZS5hcHBsaWNhdGlvbmdyb3VwLm5ldFByb2ZpbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIEFzc2lnbiBwcm9maWxlTmFtZSB0byBhcHBsaWNhdGlvbmdyb3VwIHdoaWNoZXZlciB1c2VyIGhhcyBnaXZlbiBcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS51cGRhdGVBcHBsaWNhdGlvbmdyb3VwID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCRzY29wZS5zZWxlY3RlZE5ldHByb2ZpbGUucG9saWN5ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmFwcGxpY2F0aW9uZ3JvdXAubmV0UHJvZmlsZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmFwcGxpY2F0aW9uZ3JvdXAubmV0UHJvZmlsZSA9ICRzY29wZS5zZWxlY3RlZE5ldHByb2ZpbGUucG9saWN5LnByb2ZpbGVOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBnZXROZXRwcm9maWxlcygpO1xuICAgICAgICAgICAgfV0sXG5cbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwbGljYXRpb25ncm91cHMvYmFuZHdpZHRocG9saWN5Lmh0bWwnXG4gICAgICAgIH1cbiAgICB9KTtcblxuXG5cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBoYXJkaWsgZ2FuZGhpIG9uIDcvOC8xNi5cbiAqL1xuXG5hbmd1bGFyLm1vZHVsZShcImNvbnRpdi5hcHBsaWNhdGlvbmdyb3Vwc1wiKVxuICAgIC5kaXJlY3RpdmUoXCJjdHZJc29sYXRpb25wb2xpY3lcIixmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm57XG4gICAgICAgICAgICByZXN0cmljdDonRScsXG4gICAgICAgICAgICBzY29wZTp7XG4gICAgICAgICAgICAgICAgbW9kZTonPScsXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb25ncm91cDonPSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250cm9sbGVyOiBbXG4gICAgICAgICAgICAgICAgJyRzY29wZScsXG4gICAgICAgICAgICAgICAgJyRzdGF0ZVBhcmFtcycsXG4gICAgICAgICAgICAgICAgJ0FwcGxpY2F0aW9uR3JvdXBzTW9kZWwnLFxuICAgICAgICAgICAgICAgICdQb2xpY2llc01vZGVsJyxcbiAgICAgICAgICAgICAgICAnUnVsZXNNb2RlbCcsXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oJHNjb3BlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICRzdGF0ZVBhcmFtcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbkdyb3Vwc01vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgIFBvbGljaWVzTW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgUnVsZXNNb2RlbCl7XG5cbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmluY29taW5nUnVsZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm91dGdvaW5nUnVsZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkUG9saWN5ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9saWN5Ont9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZFBvbGljaWVzID0gW107ICAgICAgICAgICAvLyBUbyBTdG9yZSBwb2xpY2llcyBzZWxlY3RlZCBieSB1c2VyIHRvIGRpc3BsYXlcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmlzb2xhdGlvblBvbGljaWVzID0gW107ICAgICAgICAgIC8vIFRvIEdldCBhbGwgaXNvbGF0aW9uIHBvbGljaWVzIG9mIHRlbmFudFxuXG5cbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIEdldCBpbmNvbWluZyBhbmQgb3V0Z29pbmcgcnVsZXMgZm9yIGVhY2ggcG9saWN5IHByZXNlbnQgaW4gYXBwbGljYXRpb25ncm91cFxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UnVsZXMoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYXBwbGljYXRpb25ncm91cC5wb2xpY2llcy5mb3JFYWNoKGZ1bmN0aW9uIChwb2xpY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1RvIGRpc3BsYXkgcnVsZXMgb2Ygc2VsZWN0ZWQgcG9saWNpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSdWxlc01vZGVsLmdldEluY29taW5nUnVsZXMocG9saWN5LCAnZGVmYXVsdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChydWxlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoJHNjb3BlLmluY29taW5nUnVsZXMsIHJ1bGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUnVsZXNNb2RlbC5nZXRPdXRnb2luZ1J1bGVzKHBvbGljeSwgJ2RlZmF1bHQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocnVsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KCRzY29wZS5vdXRnb2luZ1J1bGVzLCBydWxlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogR2V0IHBvbGljaWVzIGZvciB0aGUgZ2l2ZW4gdGVuYW50LlxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0SXNvbGF0aW9uUG9saWNpZXMoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBQb2xpY2llc01vZGVsLmdldCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5pc29sYXRpb25Qb2xpY2llcyA9IF8uZmlsdGVyKHJlc3VsdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGVuYW50TmFtZSc6ICdkZWZhdWx0Jy8vVE9ETzogUmVtb3ZlIGhhcmRjb2RlZCB0ZW5hbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBBZGQgcG9saWN5IHRvIGFwcGxpY2F0aW9uIGdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYWRkSXNvbGF0aW9uUG9saWN5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFBvbGljeU5hbWUgPSAkc2NvcGUuc2VsZWN0ZWRQb2xpY3kucG9saWN5LnBvbGljeU5hbWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UG9saWN5TmFtZSAhPT0gdW5kZWZpbmVkICYmIF8uaW5jbHVkZXMoJHNjb3BlLnNlbGVjdGVkUG9saWNpZXMsIGN1cnJlbnRQb2xpY3lOYW1lKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVG8gZGlzcGxheSBzZWxlY3RlZCBwb2xpY2llc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZFBvbGljaWVzLnB1c2goY3VycmVudFBvbGljeU5hbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9UbyBkaXNwbGF5IHJ1bGVzIG9mIHNlbGVjdGVkIHBvbGljaWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUnVsZXNNb2RlbC5nZXRJbmNvbWluZ1J1bGVzKGN1cnJlbnRQb2xpY3lOYW1lLCAnZGVmYXVsdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChydWxlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoJHNjb3BlLmluY29taW5nUnVsZXMsIHJ1bGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUnVsZXNNb2RlbC5nZXRPdXRnb2luZ1J1bGVzKGN1cnJlbnRQb2xpY3lOYW1lLCAnZGVmYXVsdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChydWxlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoJHNjb3BlLm91dGdvaW5nUnVsZXMsIHJ1bGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1RvIGJlIGFkZGVkIHRvIGFwcGxpY2F0aW9uIGdyb3VwIGFuZCBzYXZlZCB0byB0aGUgc2VydmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmFwcGxpY2F0aW9uZ3JvdXAucG9saWNpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnB1c2goY3VycmVudFBvbGljeU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBSZW1vdmUgcG9saWN5IGZyb20gYXBwbGljYXRpb24gZ3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5yZW1vdmVJc29sYXRpb25Qb2xpY3kgPSBmdW5jdGlvbihwb2xpY3lOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnJlbW92ZSgkc2NvcGUuc2VsZWN0ZWRQb2xpY2llcyxmdW5jdGlvbiAocG9saWN5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvbGljeSA9PT0gcG9saWN5TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5yZW1vdmUoJHNjb3BlLmFwcGxpY2F0aW9uZ3JvdXAucG9saWNpZXMsIGZ1bmN0aW9uIChwb2xpY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9saWN5ID09PSBwb2xpY3lOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnJlbW92ZSgkc2NvcGUuaW5jb21pbmdSdWxlcywgZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcnVsZS5wb2xpY3lOYW1lID09PSBwb2xpY3lOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnJlbW92ZSgkc2NvcGUub3V0Z29pbmdSdWxlcywgZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcnVsZS5wb2xpY3lOYW1lID09PSBwb2xpY3lOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqICBUbyBjaGVjayAnZGV0YWlscycgb3IgJ2VkaXQnIG1vZGUgKG5vdCBjcmVhdGUgbW9kZSlcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIGlmKCRzY29wZS5tb2RlID09ICdkZXRhaWxzJyB8fCAoJHNjb3BlLm1vZGUgPT0gJ2VkaXQnICYmICRzY29wZS5hcHBsaWNhdGlvbmdyb3VwLmdyb3VwTmFtZSAhPSBcIlwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9BcHBsaWNhdGlvbiBHcm91cHMgbWlnaHQgbm90IGhhdmUgYW55IHBvbGljaWVzIGFzc29jaWF0ZWQgd2l0aCB0aGVtIHNvIGRlZmluZSBhbiBlbXB0eSBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5hcHBsaWNhdGlvbmdyb3VwLnBvbGljaWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYXBwbGljYXRpb25ncm91cC5wb2xpY2llcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UnVsZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBnZXRJc29sYXRpb25Qb2xpY2llcygpO1xuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6J2FwcGxpY2F0aW9uZ3JvdXBzL2lzb2xhdGlvbnBvbGljeS5odG1sJ1xuICAgICAgICB9XG4gICAgfSk7XG5cblxuXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMTEvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuZGFzaGJvYXJkJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuZGFzaGJvYXJkJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9kYXNoYm9hcmQnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdEYXNoYm9hcmRDdHJsIGFzIGRhc2hib2FyZEN0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnZGFzaGJvYXJkL2Rhc2hib2FyZC5odG1sJ1xuICAgICAgICAgICAgfSk7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ0Rhc2hib2FyZEN0cmwnLFxuICAgICAgICBbXG4gICAgICAgICAgICAnJHNjb3BlJyxcbiAgICAgICAgICAgICckaW50ZXJ2YWwnLFxuICAgICAgICAgICAgJ05vZGVzTW9kZWwnLFxuICAgICAgICAgICAgJ05ldHdvcmtzTW9kZWwnLFxuICAgICAgICAgICAgJ1ZvbHVtZXNNb2RlbCcsXG4gICAgICAgICAgICAnQXBwbGljYXRpb25Hcm91cHNNb2RlbCcsXG4gICAgICAgICAgICAnUG9saWNpZXNNb2RlbCcsXG4gICAgICAgICAgICAnU3RvcmFnZVBvbGljaWVzTW9kZWwnLFxuICAgICAgICAgICAgZnVuY3Rpb24gKCRzY29wZSxcbiAgICAgICAgICAgICAgICAgICAgICAkaW50ZXJ2YWwsXG4gICAgICAgICAgICAgICAgICAgICAgTm9kZXNNb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICBOZXR3b3Jrc01vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgIFZvbHVtZXNNb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbkdyb3Vwc01vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgIFBvbGljaWVzTW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgU3RvcmFnZVBvbGljaWVzTW9kZWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGFzaGJvYXJkQ3RybCA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXREYXNoYm9hcmRJbmZvKHJlbG9hZCkge1xuICAgICAgICAgICAgICAgICAgICBOb2Rlc01vZGVsLmdldChyZWxvYWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFzaGJvYXJkQ3RybC5ub2RlcyA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgTmV0d29ya3NNb2RlbC5nZXQocmVsb2FkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhc2hib2FyZEN0cmwubmV0d29ya3MgPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFZvbHVtZXNNb2RlbC5nZXQocmVsb2FkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhc2hib2FyZEN0cmwudm9sdW1lcyA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cHNNb2RlbC5nZXQocmVsb2FkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhc2hib2FyZEN0cmwuZ3JvdXBzID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBQb2xpY2llc01vZGVsLmdldChyZWxvYWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFzaGJvYXJkQ3RybC5uZXR3b3JrcG9saWNpZXMgPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFN0b3JhZ2VQb2xpY2llc01vZGVsLmdldChyZWxvYWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFzaGJvYXJkQ3RybC5zdG9yYWdlcG9saWNpZXMgPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9XaWxsIGRpc3BsYXkgMCBpZiB0aGVyZSBpcyBlcnJvciBmZXRjaGluZyBkYXRhXG4gICAgICAgICAgICAgICAgZGFzaGJvYXJkQ3RybC5ub2RlcyA9IDA7XG4gICAgICAgICAgICAgICAgZGFzaGJvYXJkQ3RybC5uZXR3b3JrcyA9IDA7XG4gICAgICAgICAgICAgICAgZGFzaGJvYXJkQ3RybC52b2x1bWVzID0gMDtcbiAgICAgICAgICAgICAgICBkYXNoYm9hcmRDdHJsLmdyb3VwcyA9IDA7XG4gICAgICAgICAgICAgICAgZGFzaGJvYXJkQ3RybC5uZXR3b3JrcG9saWNpZXMgPSAwO1xuICAgICAgICAgICAgICAgIGRhc2hib2FyZEN0cmwuc3RvcmFnZXBvbGljaWVzID0gMDtcblxuICAgICAgICAgICAgICAgIC8vTG9hZCBmcm9tIGNhY2hlIGZvciBxdWljayBkaXNwbGF5IGluaXRpYWxseVxuICAgICAgICAgICAgICAgIGdldERhc2hib2FyZEluZm8oZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBnZXREYXNoYm9hcmRJbmZvKHRydWUpO1xuICAgICAgICAgICAgICAgIH0sIDUwMDApO1xuXG4gICAgICAgICAgICAgICAgLy9zdG9wIHBvbGxpbmcgd2hlbiB1c2VyIG1vdmVzIGF3YXkgZnJvbSB0aGUgcGFnZVxuICAgICAgICAgICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHByb21pc2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzE5LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LmxvZ2luJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2LmxvZ2luJywge1xuICAgICAgICAgICAgICAgIHVybDogJy8nLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbG9naW4vbG9naW4uaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0xvZ2luQ3RybCBhcyBsb2dpbkN0cmwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ0xvZ2luQ3RybCcsIFsnJHN0YXRlJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBsb2dpbkN0cmwgPSB0aGlzO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub0Rhc2hib2FyZCgpIHtcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51LmRhc2hib2FyZCcsIHt1c2VybmFtZTogbG9naW5DdHJsLnVzZXJuYW1lfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGxvZ2luKCkge1xuICAgICAgICAgICAgICAgIHJldHVyblRvRGFzaGJvYXJkKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobG9naW5DdHJsKTtcbiAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihsb2dpbkN0cmwpO1xuICAgICAgICAgICAgbG9naW5DdHJsLmxvZ2luID0gbG9naW47XG5cbiAgICAgICAgfV0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xOS8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5tZW51JylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL20nLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbWVudS9tZW51Lmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNZW51Q3RybCBhcyBtZW51Q3RybCcsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7dXNlcm5hbWU6IG51bGx9XG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ01lbnVDdHJsJywgWyckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgIHZhciBtZW51Q3RybCA9IHRoaXM7XG5cbiAgICAgICAgZnVuY3Rpb24gbG9nb3V0KCkge1xuICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubG9naW4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lbnVDdHJsLnVzZXJuYW1lID0gJHN0YXRlUGFyYW1zLnVzZXJuYW1lO1xuICAgICAgICBtZW51Q3RybC5sb2dvdXQgPSBsb2dvdXQ7XG5cbiAgICB9XSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGhhcmRpayBnYW5kaGkgb24gNi8yNC8xNi5cbiAqL1xuXG5hbmd1bGFyLm1vZHVsZShcImNvbnRpdi5uZXR3b3JrcG9saWNpZXNcIilcbiAgICAuZGlyZWN0aXZlKFwiY3R2QmFuZHdpZHRoXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgIGJhbmR3aWR0aFBvbGljeTonPScsXG4gICAgICAgICAgICAgICAgbW9kZTpcIkBcIlxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgbGluazpmdW5jdGlvbihzY29wZSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlLmJhbmR3aWR0aFBvbGljeS5iYW5kd2lkdGggIT0gJycpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgYmFuZHdpZHRoQXJyYXkgPSBzY29wZS5iYW5kd2lkdGhQb2xpY3kuYmFuZHdpZHRoLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzY29wZS5iYW5kd2lkdGhQb2xpY3kuYmFuZHdpZHRoTnVtYmVyID0gTnVtYmVyKGJhbmR3aWR0aEFycmF5WzBdKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuYmFuZHdpZHRoUG9saWN5LmJhbmR3aWR0aFVuaXQgPSBiYW5kd2lkdGhBcnJheVsxXTtcblxuICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbmV0d29ya19wb2xpY2llcy9iYW5kd2lkdGguaHRtbCdcbiAgICAgICAgfVxuICAgIH0pO1xuIiwiLypcbi8qKlxuICogQ3JlYXRlZCBieSBoYXJkaWsgZ2FuZGhpIG9uIDYvMTQvMTYuXG4gKi9cblxuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5uZXR3b3JrcG9saWNpZXMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMuYmFuZHdpZHRoLmNyZWF0ZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvY3JlYXRlJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnQmFuZHdpZHRoUG9saWN5Q3JlYXRlQ3RybCBhcyBiYW5kd2lkdGhQb2xpY3lDcmVhdGVDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25ldHdvcmtfcG9saWNpZXMvYmFuZHdpZHRocG9saWN5Y3JlYXRlLmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ0JhbmR3aWR0aFBvbGljeUNyZWF0ZUN0cmwnLCBbJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCdOZXRwcm9maWxlc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBOZXRwcm9maWxlc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIGJhbmR3aWR0aFBvbGljeUNyZWF0ZUN0cmwgPSB0aGlzO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub1BvbGljaWVzKCkge1xuICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzLmxpc3QuYmFuZHdpZHRoJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNhbmNlbENyZWF0aW5nKCkge1xuICAgICAgICAgICAgICAgIHJldHVyblRvUG9saWNpZXMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlUG9saWN5KCkge1xuICAgICAgICAgICAgICAgIGlmIChiYW5kd2lkdGhQb2xpY3lDcmVhdGVDdHJsLmZvcm0uJHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihiYW5kd2lkdGhQb2xpY3lDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIoYmFuZHdpZHRoUG9saWN5Q3JlYXRlQ3RybCk7XG5cbiAgICAgICAgICAgICAgICAgICAgYmFuZHdpZHRoUG9saWN5Q3JlYXRlQ3RybC5uZXdQb2xpY3kua2V5ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIE5ldHByb2ZpbGVzTW9kZWwuZ2VuZXJhdGVLZXkoYmFuZHdpZHRoUG9saWN5Q3JlYXRlQ3RybC5uZXdQb2xpY3kpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYmFuZHdpZHRoUG9saWN5Q3JlYXRlQ3RybC5uZXdQb2xpY3kuYmFuZHdpZHRoID0gYmFuZHdpZHRoUG9saWN5Q3JlYXRlQ3RybC5uZXdQb2xpY3kuYmFuZHdpZHRoTnVtYmVyXG4gICAgICAgICAgICAgICAgICAgICAgICArIFwiIFwiKyBiYW5kd2lkdGhQb2xpY3lDcmVhdGVDdHJsLm5ld1BvbGljeS5iYW5kd2lkdGhVbml0O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgTmV0cHJvZmlsZXNNb2RlbC5jcmVhdGUoYmFuZHdpZHRoUG9saWN5Q3JlYXRlQ3RybC5uZXdQb2xpY3kpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihiYW5kd2lkdGhQb2xpY3lDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvUG9saWNpZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoYmFuZHdpZHRoUG9saWN5Q3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoYmFuZHdpZHRoUG9saWN5Q3JlYXRlQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihiYW5kd2lkdGhQb2xpY3lDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IoYmFuZHdpZHRoUG9saWN5Q3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgYmFuZHdpZHRoUG9saWN5Q3JlYXRlQ3RybC5uZXdQb2xpY3kgPSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGVOYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgdGVuYW50TmFtZTogJ2RlZmF1bHQnLCAvL1RPRE86IFJlbW92ZSBoYXJkY29kZWQgdGVuYW50LlxuICAgICAgICAgICAgICAgICAgICBiYW5kd2lkdGg6ICcnLFxuICAgICAgICAgICAgICAgICAgICBEU0NQOiAnJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJhbmR3aWR0aFBvbGljeUNyZWF0ZUN0cmwuY3JlYXRlUG9saWN5ID0gY3JlYXRlUG9saWN5O1xuICAgICAgICAgICAgYmFuZHdpZHRoUG9saWN5Q3JlYXRlQ3RybC5jYW5jZWxDcmVhdGluZyA9IGNhbmNlbENyZWF0aW5nO1xuXG4gICAgICAgICAgICByZXNldEZvcm0oKTtcbiAgICAgICAgfV0pO1xuXG5cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBoYXJkaWsgZ2FuZGhpIG9uIDYvMTYvMTYuXG4gKi9cblxuXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm5ldHdvcmtwb2xpY2llcycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5ldHdvcmtwb2xpY2llcy5iYW5kd2lkdGguZGV0YWlscycsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZGV0YWlscy86a2V5JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnQmFuZHdpZHRoUG9saWN5RGV0YWlsc0N0cmwgYXMgYmFuZHdpZHRoUG9saWN5RGV0YWlsc0N0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbmV0d29ya19wb2xpY2llcy9iYW5kd2lkdGhwb2xpY3lkZXRhaWxzLmh0bWwnXG4gICAgICAgICAgICB9KTtcbiAgICB9XSlcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzLmJhbmR3aWR0aC5lZGl0Jywge1xuICAgICAgICAgICAgICAgIHVybDogJy9lZGl0LzprZXknLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdCYW5kd2lkdGhQb2xpY3lEZXRhaWxzQ3RybCBhcyBiYW5kd2lkdGhQb2xpY3lEZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICduZXR3b3JrX3BvbGljaWVzL2JhbmR3aWR0aHBvbGljeWRldGFpbHMuaHRtbCdcbiAgICAgICAgICAgIH0pO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdCYW5kd2lkdGhQb2xpY3lEZXRhaWxzQ3RybCcsIFtcbiAgICAgICAgJyRzdGF0ZScsXG4gICAgICAgICckc3RhdGVQYXJhbXMnLFxuICAgICAgICAnTmV0cHJvZmlsZXNNb2RlbCcsXG4gICAgICAgICdDUlVESGVscGVyU2VydmljZScsXG4gICAgICAgIGZ1bmN0aW9uICgkc3RhdGUsICRzdGF0ZVBhcmFtcywgTmV0cHJvZmlsZXNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBiYW5kd2lkdGhQb2xpY3lEZXRhaWxzQ3RybCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGJhbmR3aWR0aFBvbGljeURldGFpbHNDdHJsLmJhbmR3aWR0aFByb2ZpbGVzID0gW107XG5cbiAgICAgICAgICAgIC8qIEdldCBwYXJ0aWN1bGFyIFByb2ZpbGUgZm9yIGJhc2VkIG9uIGtleSovXG4gICAgICAgICAgICBOZXRwcm9maWxlc01vZGVsLmdldE1vZGVsQnlLZXkoJHN0YXRlUGFyYW1zLmtleSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocG9saWN5KSB7XG4gICAgICAgICAgICAgICAgICAgIGJhbmR3aWR0aFBvbGljeURldGFpbHNDdHJsLnBvbGljeSA9IHBvbGljeTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUbyBzaG93IGVkaXQgb3IgZGV0YWlscyBzY3JlZW4gYmFzZWQgb24gdGhlIHJvdXRlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldE1vZGUoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCRzdGF0ZS5pcygnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzLmJhbmR3aWR0aC5lZGl0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgYmFuZHdpZHRoUG9saWN5RGV0YWlsc0N0cmwubW9kZSA9ICdlZGl0JztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBiYW5kd2lkdGhQb2xpY3lEZXRhaWxzQ3RybC5tb2RlID0gJ2RldGFpbHMnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gZGVsZXRlUG9saWN5KCkge1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihiYW5kd2lkdGhQb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIoYmFuZHdpZHRoUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgIE5ldHByb2ZpbGVzTW9kZWwuZGVsZXRlVXNpbmdLZXkoYmFuZHdpZHRoUG9saWN5RGV0YWlsc0N0cmwucG9saWN5LmtleSwgJ25hbWUnKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGJhbmR3aWR0aFBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvUG9saWNpZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoYmFuZHdpZHRoUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGJhbmR3aWR0aFBvbGljeURldGFpbHNDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub1BvbGljaWVzKCkge1xuICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzLmxpc3QuYmFuZHdpZHRoJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvUG9saWN5RGV0YWlscygpIHtcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51Lm5ldHdvcmtwb2xpY2llcy5iYW5kd2lkdGguZGV0YWlscycsIHsna2V5JzogYmFuZHdpZHRoUG9saWN5RGV0YWlsc0N0cmwucG9saWN5LmtleX0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjYW5jZWxFZGl0aW5nKCkge1xuICAgICAgICAgICAgICAgIHJldHVyblRvUG9saWN5RGV0YWlscygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBzYXZlUG9saWN5KCkge1xuICAgICAgICAgICAgICAgIC8vZm9ybSBjb250cm9sbGVyIGlzIGluamVjdGVkIGJ5IHRoZSBodG1sIHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgLy9jaGVja2luZyBpZiBhbGwgdmFsaWRhdGlvbnMgaGF2ZSBwYXNzZWRcbiAgICAgICAgICAgICAgICBpZiAoYmFuZHdpZHRoUG9saWN5RGV0YWlsc0N0cmwuZm9ybS4kdmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKGJhbmR3aWR0aFBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIoYmFuZHdpZHRoUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBiYW5kd2lkdGhQb2xpY3lEZXRhaWxzQ3RybC5wb2xpY3kuYmFuZHdpZHRoID0gYmFuZHdpZHRoUG9saWN5RGV0YWlsc0N0cmwucG9saWN5LmJhbmR3aWR0aE51bWJlciArIFwiIFwiICsgYmFuZHdpZHRoUG9saWN5RGV0YWlsc0N0cmwucG9saWN5LmJhbmR3aWR0aFVuaXQ7XG4gICAgICAgICAgICAgICAgICAgIE5ldHByb2ZpbGVzTW9kZWwuc2F2ZShiYW5kd2lkdGhQb2xpY3lEZXRhaWxzQ3RybC5wb2xpY3kpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihiYW5kd2lkdGhQb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub1BvbGljeURldGFpbHMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoYmFuZHdpZHRoUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGJhbmR3aWR0aFBvbGljeURldGFpbHNDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihiYW5kd2lkdGhQb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IoYmFuZHdpZHRoUG9saWN5RGV0YWlsc0N0cmwpO1xuXG4gICAgICAgICAgICBzZXRNb2RlKCk7XG5cbiAgICAgICAgICAgIGJhbmR3aWR0aFBvbGljeURldGFpbHNDdHJsLmRlbGV0ZVBvbGljeSA9IGRlbGV0ZVBvbGljeTtcbiAgICAgICAgICAgIGJhbmR3aWR0aFBvbGljeURldGFpbHNDdHJsLnNhdmVQb2xpY3kgPSBzYXZlUG9saWN5O1xuICAgICAgICAgICAgYmFuZHdpZHRoUG9saWN5RGV0YWlsc0N0cmwuY2FuY2VsRWRpdGluZyA9IGNhbmNlbEVkaXRpbmc7XG5cbiAgICAgICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGhhcmRpayBnYW5kaGkgb24gNi8xNC8xNi5cbiAqL1xuXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm5ldHdvcmtwb2xpY2llcycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5ldHdvcmtwb2xpY2llcy5saXN0LmJhbmR3aWR0aCcsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvYmFuZHdpZHRoJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnQmFuZHdpZHRoUG9saWN5TGlzdEN0cmwgYXMgYmFuZHdpZHRoUG9saWN5TGlzdEN0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbmV0d29ya19wb2xpY2llcy9iYW5kd2lkdGhwb2xpY3lsaXN0Lmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ0JhbmR3aWR0aFBvbGljeUxpc3RDdHJsJywgWyckc2NvcGUnLCAnJGludGVydmFsJywgJyRmaWx0ZXInLCAnTmV0cHJvZmlsZXNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICRpbnRlcnZhbCwgJGZpbHRlciwgTmV0cHJvZmlsZXNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBwb2xpY2llc0xpc3RDdHJsID0gdGhpcztcblxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UG9saWNpZXMocmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgTmV0cHJvZmlsZXNNb2RlbC5nZXQocmVsb2FkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHBvbGljaWVzTGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9saWNpZXNMaXN0Q3RybC5wb2xpY2llcyA9ICRmaWx0ZXIoJ29yZGVyQnknKShyZXN1bHQsICdwcm9maWxlTmFtZScpO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihwb2xpY2llc0xpc3RDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vTG9hZCBmcm9tIGNhY2hlIGZvciBxdWljayBkaXNwbGF5IGluaXRpYWxseVxuICAgICAgICAgICAgZ2V0UG9saWNpZXModHJ1ZSk7XG5cbiAgICAgICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICAgICAgLy9Eb24ndCBzdGFydCBhdXRvLXJlZnJlc2ggaWYgb25lIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQocHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0UG9saWNpZXModHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSwgQ29udGl2R2xvYmFscy5SRUZSRVNIX0lOVEVSVkFMKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vc3RvcCBwb2xsaW5nIHdoZW4gdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcbiAgICAgICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRpbnRlcnZhbC5jYW5jZWwocHJvbWlzZSk7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gMy8xMC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5uZXR3b3JrcG9saWNpZXMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMuaXNvbGF0aW9uLmNyZWF0ZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvY3JlYXRlJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybCBhcyBpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25ldHdvcmtfcG9saWNpZXMvaXNvbGF0aW9ucG9saWN5Y3JlYXRlLmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ0lzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwnLCBbJyRzdGF0ZScsICdQb2xpY2llc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgUG9saWNpZXNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgdmFyIGlzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwgPSB0aGlzO1xuXG4gICAgICAgIGZ1bmN0aW9uIHJldHVyblRvUG9saWNpZXMoKSB7XG4gICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51Lm5ldHdvcmtwb2xpY2llcy5saXN0Lmlzb2xhdGlvbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY2FuY2VsQ3JlYXRpbmcoKSB7XG4gICAgICAgICAgICByZXR1cm5Ub1BvbGljaWVzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQb2xpY3koKSB7XG4gICAgICAgICAgICBpZiAoaXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybC5mb3JtLiR2YWxpZCkge1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsLm5ld1BvbGljeS5rZXkgPVxuICAgICAgICAgICAgICAgICAgICBQb2xpY2llc01vZGVsLmdlbmVyYXRlS2V5KGlzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwubmV3UG9saWN5KTtcbiAgICAgICAgICAgICAgICBQb2xpY2llc01vZGVsLmNyZWF0ZShpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsLm5ld1BvbGljeSkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoaXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblRvUG9saWNpZXMoKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGlzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoaXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoaXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybCk7XG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IoaXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybCk7XG4gICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsLm5ld1BvbGljeSA9IHtcbiAgICAgICAgICAgICAgICBwb2xpY3lOYW1lOiAnJyxcbiAgICAgICAgICAgICAgICB0ZW5hbnROYW1lOiAnZGVmYXVsdCcvL1RPRE86IFJlbW92ZSBoYXJkY29kZWQgdGVuYW50LlxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwuY3JlYXRlUG9saWN5ID0gY3JlYXRlUG9saWN5O1xuICAgICAgICBpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsLmNhbmNlbENyZWF0aW5nID0gY2FuY2VsQ3JlYXRpbmc7XG5cbiAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzgvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubmV0d29ya3BvbGljaWVzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzLmlzb2xhdGlvbi5kZXRhaWxzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9kZXRhaWxzLzprZXknLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdJc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCBhcyBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICduZXR3b3JrX3BvbGljaWVzL2lzb2xhdGlvbnBvbGljeWRldGFpbHMuaHRtbCdcbiAgICAgICAgICAgIH0pO1xuICAgIH1dKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMuaXNvbGF0aW9uLmVkaXQnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2VkaXQvOmtleScsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0lzb2xhdGlvblBvbGljeURldGFpbHNDdHJsIGFzIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25ldHdvcmtfcG9saWNpZXMvaXNvbGF0aW9ucG9saWN5ZGV0YWlscy5odG1sJ1xuICAgICAgICAgICAgfSk7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ0lzb2xhdGlvblBvbGljeURldGFpbHNDdHJsJywgW1xuICAgICAgICAnJHN0YXRlJyxcbiAgICAgICAgJyRzdGF0ZVBhcmFtcycsXG4gICAgICAgICdQb2xpY2llc01vZGVsJyxcbiAgICAgICAgJ1J1bGVzTW9kZWwnLFxuICAgICAgICAnTmV0d29ya3NNb2RlbCcsXG4gICAgICAgICdBcHBsaWNhdGlvbkdyb3Vwc01vZGVsJyxcbiAgICAgICAgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBQb2xpY2llc01vZGVsLCBSdWxlc01vZGVsLCBOZXR3b3Jrc01vZGVsLCBBcHBsaWNhdGlvbkdyb3Vwc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsID0gdGhpcztcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ldHdvcmtzID0gW107XG4gICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5hcHBsaWNhdGlvbkdyb3VwcyA9IFtdO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZU91dGdvaW5nTmV0d29ya1NlbGVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZUluY29taW5nTmV0d29ya1NlbGVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZU91dGdvaW5nQXBwbGljYXRpb25Hcm91cFNlbGVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZUluY29taW5nQXBwbGljYXRpb25Hcm91cFNlbGVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZUluY29taW5nSVBBZGRyZXNzU2VsZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlT3V0Z29pbmdJUEFkZHJlc3NTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld0luY29taW5nU2VsZWN0ZWRBcHBsaWNhdGlvbkdyb3VwID0gJyc7XG4gICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdPdXRnb2luZ1NlbGVjdGVkQXBwbGljYXRpb25Hcm91cCA9ICcnO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3SW5jb21pbmdTZWxlY3RlZE5ldHdvcmsgPSAnJztcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld091dGdvaW5nU2VsZWN0ZWROZXR3b3JrID0gJyc7XG4gICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5pbmNvcnJlY3RDSURSID0gZmFsc2U7XG5cblxuICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9Qb2xpY2llcygpIHtcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51Lm5ldHdvcmtwb2xpY2llcy5saXN0Lmlzb2xhdGlvbicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub1BvbGljeURldGFpbHMoKSB7XG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMuaXNvbGF0aW9uLmRldGFpbHMnLCB7a2V5OiBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5wb2xpY3kua2V5fSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNhbmNlbEVkaXRpbmcoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVG9Qb2xpY3lEZXRhaWxzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR28gYmFjayB0byBwb2xpY3kgZGV0YWlscyBhZnRlciBkb25lIGVkaXRpbmdcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gZG9uZUVkaXRpbmcoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVG9Qb2xpY3lEZXRhaWxzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRlbGV0ZVBvbGljeSgpIHtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBQb2xpY2llc01vZGVsLmRlbGV0ZShpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5wb2xpY3kpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9Qb2xpY2llcygpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVG8gc2hvdyBlZGl0IG9yIGRldGFpbHMgc2NyZWVuIGJhc2VkIG9uIHRoZSByb3V0ZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXRNb2RlKCkge1xuICAgICAgICAgICAgICAgIGlmICgkc3RhdGUuaXMoJ2NvbnRpdi5tZW51Lm5ldHdvcmtwb2xpY2llcy5pc29sYXRpb24uZWRpdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm1vZGUgPSAnZWRpdCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubW9kZSA9ICdkZXRhaWxzJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlc2V0TmV3SW5jb21pbmdSdWxlKCkge1xuICAgICAgICAgICAgICAgIC8vUnVsZSBvYmplY3QgdG8gYmUgY3JlYXRlZCBvbiBzZXJ2ZXJcbiAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdJbmNvbWluZ1J1bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bGVJZDogJycsXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdhbGxvdycsLy90byBtYWtlIGl0IGRlZmF1bHQgc2VsZWN0ZWQgb3B0aW9uIGluIFVJXG4gICAgICAgICAgICAgICAgICAgIGZyb21FbmRwb2ludEdyb3VwOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZnJvbU5ldHdvcms6ICcnLFxuICAgICAgICAgICAgICAgICAgICBmcm9tSXBBZGRyZXNzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG9jb2w6ICd0Y3AnLC8vdG8gbWFrZSBpdCBkZWZhdWx0IHNlbGVjdGVkIG9wdGlvbiBpbiBVSVxuICAgICAgICAgICAgICAgICAgICBwb3J0OiAwLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdpbicsXG4gICAgICAgICAgICAgICAgICAgIHRlbmFudE5hbWU6ICdkZWZhdWx0JyxcbiAgICAgICAgICAgICAgICAgICAgcG9saWN5TmFtZTogaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwucG9saWN5LnBvbGljeU5hbWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld0luY29taW5nU2VsZWN0ZWRBcHBsaWNhdGlvbkdyb3VwID0gJyc7XG4gICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3SW5jb21pbmdTZWxlY3RlZE5ldHdvcmsgPSAnJztcbiAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlSW5jb21pbmdOZXR3b3JrU2VsZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZUluY29taW5nQXBwbGljYXRpb25Hcm91cFNlbGVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRpc2FibGVJbmNvbWluZ0lQQWRkcmVzc1NlbGVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXNldE5ld091dGdvaW5nUnVsZSgpIHtcbiAgICAgICAgICAgICAgICAvL1J1bGUgb2JqZWN0IHRvIGJlIGNyZWF0ZWQgb24gc2VydmVyXG4gICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3T3V0Z29pbmdSdWxlID0ge1xuICAgICAgICAgICAgICAgICAgICBydWxlSWQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnYWxsb3cnLC8vdG8gbWFrZSBpdCBkZWZhdWx0IHNlbGVjdGVkIG9wdGlvbiBpbiBVSVxuICAgICAgICAgICAgICAgICAgICB0b0VuZHBvaW50R3JvdXA6ICcnLFxuICAgICAgICAgICAgICAgICAgICB0b05ldHdvcms6ICcnLFxuICAgICAgICAgICAgICAgICAgICB0b0lwQWRkcmVzczogJycsXG4gICAgICAgICAgICAgICAgICAgIHByb3RvY29sOiAndGNwJywvL3RvIG1ha2UgaXQgZGVmYXVsdCBzZWxlY3RlZCBvcHRpb24gaW4gVUlcbiAgICAgICAgICAgICAgICAgICAgcG9ydDogMCxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnb3V0JyxcbiAgICAgICAgICAgICAgICAgICAgdGVuYW50TmFtZTogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgICAgICAgICBwb2xpY3lOYW1lOiBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5wb2xpY3kucG9saWN5TmFtZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3T3V0Z29pbmdTZWxlY3RlZEFwcGxpY2F0aW9uR3JvdXAgPSAnJztcbiAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdPdXRnb2luZ1NlbGVjdGVkTmV0d29yayA9ICcnO1xuICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRpc2FibGVPdXRnb2luZ05ldHdvcmtTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlT3V0Z29pbmdBcHBsaWNhdGlvbkdyb3VwU2VsZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZU91dGdvaW5nSVBBZGRyZXNzU2VsZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IG5ldHdvcmsgbmFtZXMgZm9yIHRoZSBnaXZlbiB0ZW5hbnQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldE5ldHdvcmtzKCkge1xuICAgICAgICAgICAgICAgIE5ldHdvcmtzTW9kZWwuZ2V0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vXy5maWx0ZXIoKSByZXR1cm5zIGEgbmV3IGFycmF5XG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ldHdvcmtzID0gXy5maWx0ZXIocmVzdWx0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAndGVuYW50TmFtZSc6ICdkZWZhdWx0Jy8vVE9ETzogUmVtb3ZlIGhhcmRjb2RlZCB0ZW5hbnQuXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdldCBhcHBsaWNhdGlvbiBncm91cCBuYW1lcyBmb3IgdGhlIGdpdmVuIHRlbmFudC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0QXBwbGljYXRpb25Hcm91cHMoKSB7XG4gICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cHNNb2RlbC5nZXQoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL18uZmlsdGVyKCkgcmV0dXJucyBhIG5ldyBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuYXBwbGljYXRpb25Hcm91cHMgPSBfLmZpbHRlcihyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGVuYW50TmFtZSc6ICdkZWZhdWx0Jy8vVE9ETzogUmVtb3ZlIGhhcmRjb2RlZCB0ZW5hbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRXZlbnQgaGFuZGxlciB0byBkaXNhYmxlIG5ldHdvcmsgc2VsZWN0aW9uIGJveCBvbmNlIGFwcGxpY2F0aW9uIGdyb3VwIGlzIHNlbGVjdGVkIHdoaWxlIGNyZWF0aW5nIGEgbmV3XG4gICAgICAgICAgICAgKiBydWxlLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBvbkNoYW5nZU91dGdvaW5nQXBwbGljYXRpb25Hcm91cFNlbGVjdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3T3V0Z29pbmdTZWxlY3RlZEFwcGxpY2F0aW9uR3JvdXAgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAvL0lmIGFwcGxpY2F0aW9uIGdyb3VwIGhhcyBiZWVuIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld091dGdvaW5nUnVsZS50b0VuZHBvaW50R3JvdXAgPVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3T3V0Z29pbmdTZWxlY3RlZEFwcGxpY2F0aW9uR3JvdXAuZ3JvdXBOYW1lO1xuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdPdXRnb2luZ1J1bGUudG9OZXR3b3JrID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRpc2FibGVPdXRnb2luZ05ldHdvcmtTZWxlY3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vV2hlbiAnbm9uZScgaXMgc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3T3V0Z29pbmdSdWxlLnRvRW5kcG9pbnRHcm91cCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlT3V0Z29pbmdOZXR3b3JrU2VsZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEV2ZW50IGhhbmRsZXIgdG8gZGlzYWJsZSBuZXR3b3JrIHNlbGVjdGlvbiBib3ggb25jZSBhcHBsaWNhdGlvbiBncm91cCBpcyBzZWxlY3RlZCB3aGlsZSBjcmVhdGluZyBhIG5ld1xuICAgICAgICAgICAgICogcnVsZS5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gb25DaGFuZ2VJbmNvbWluZ0FwcGxpY2F0aW9uR3JvdXBTZWxlY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld0luY29taW5nU2VsZWN0ZWRBcHBsaWNhdGlvbkdyb3VwICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9JZiBhcHBsaWNhdGlvbiBncm91cCBoYXMgYmVlbiBzZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdJbmNvbWluZ1J1bGUuZnJvbUVuZHBvaW50R3JvdXAgPVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3SW5jb21pbmdTZWxlY3RlZEFwcGxpY2F0aW9uR3JvdXAuZ3JvdXBOYW1lO1xuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdJbmNvbWluZ1J1bGUuZnJvbU5ldHdvcmsgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZUluY29taW5nTmV0d29ya1NlbGVjdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy9XaGVuICdub25lJyBpcyBzZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdJbmNvbWluZ1J1bGUuZnJvbUVuZHBvaW50R3JvdXAgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZU91dGdvaW5nQXBwbGljYXRpb25Hcm91cFNlbGVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlSW5jb21pbmdOZXR3b3JrU2VsZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRXZlbnQgaGFuZGxlciB0byBkaXNhYmxlIGFwcGxpY2F0aW9uIGdyb3VwIHNlbGVjdGlvbiBib3ggb25jZSBuZXR3b3JrIGlzIHNlbGVjdGVkIHdoaWxlIGNyZWF0aW5nIGEgbmV3XG4gICAgICAgICAgICAgKiBydWxlLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBvbkNoYW5nZU91dGdvaW5nTmV0d29ya1NlbGVjdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3T3V0Z29pbmdTZWxlY3RlZE5ldHdvcmshPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vSWYgbmV0d29yayBoYXMgYmVlbiBzZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdPdXRnb2luZ1J1bGUudG9OZXR3b3JrID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld091dGdvaW5nU2VsZWN0ZWROZXR3b3JrO1xuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdPdXRnb2luZ1J1bGUuVG9FbmRwb2ludEdyb3VwID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRpc2FibGVPdXRnb2luZ0FwcGxpY2F0aW9uR3JvdXBTZWxlY3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlT3V0Z29pbmdJUEFkZHJlc3NTZWxlY3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld091dGdvaW5nUnVsZS50b0lwQWRkcmVzcyA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlT3V0Z29pbmdBcHBsaWNhdGlvbkdyb3VwU2VsZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRpc2FibGVPdXRnb2luZ0lQQWRkcmVzc1NlbGVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFdmVudCBoYW5kbGVyIHRvIGRpc2FibGUgYXBwbGljYXRpb24gZ3JvdXAgc2VsZWN0aW9uIGJveCBvbmNlIG5ldHdvcmsgaXMgc2VsZWN0ZWQgd2hpbGUgY3JlYXRpbmcgYSBuZXdcbiAgICAgICAgICAgICAqIHJ1bGUuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uQ2hhbmdlSW5jb21pbmdOZXR3b3JrU2VsZWN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdJbmNvbWluZ1NlbGVjdGVkTmV0d29yayAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vSWYgbmV0d29yayBoYXMgYmVlbiBzZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdJbmNvbWluZ1J1bGUuZnJvbU5ldHdvcmsgPVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3SW5jb21pbmdTZWxlY3RlZE5ldHdvcms7XG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld0luY29taW5nUnVsZS5mcm9tRW5kcG9pbnRHcm91cCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlSW5jb21pbmdBcHBsaWNhdGlvbkdyb3VwU2VsZWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZUluY29taW5nSVBBZGRyZXNzU2VsZWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdJbmNvbWluZ1J1bGUuZnJvbU5ldHdvcmsgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZUluY29taW5nQXBwbGljYXRpb25Hcm91cFNlbGVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlSW5jb21pbmdJUEFkZHJlc3NTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2VuZXJhdGVzIHJ1bGUgaWRcbiAgICAgICAgICAgICAqIFRPRE8gTWFrZSBpdCBjcnlwdG9ncmFwaGljYWxseSBzdHJvbmdlciBvbmNlIHdlIGhhdmUgbXVsdGlwbGUgdXNlcnMgdXBkYXRpbmcgc2FtZSBwb2xpY3lcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVSdWxlSWQocnVsZSkge1xuICAgICAgICAgICAgICAgIHJ1bGUucnVsZUlkID1cbiAgICAgICAgICAgICAgICAgICAgKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmluY29taW5nUnVsZXMubGVuZ3RoICsgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwub3V0Z29pbmdSdWxlcy5sZW5ndGggKyAxKS50b1N0cmluZygpICsgJy0nICtcbiAgICAgICAgICAgICAgICAgICAgRGF0ZS5ub3coKS50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJ1bGUgaXMgc2F2ZWQgdG8gc2VydmVyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGFkZEluY29taW5nUnVsZSgpIHtcbiAgICAgICAgICAgICAgICBpZigoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3SW5jb21pbmdSdWxlLmZyb21JcEFkZHJlc3MgPT0gJycpIHx8XG4gICAgICAgICAgICAgICAgICAgIChpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdJbmNvbWluZ1J1bGUuZnJvbUlwQWRkcmVzcyAhPSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlQ0lEUihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdJbmNvbWluZ1J1bGUuZnJvbUlwQWRkcmVzcykpKSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVSdWxlSWQoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3SW5jb21pbmdSdWxlKTtcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3SW5jb21pbmdSdWxlLmtleSA9IFJ1bGVzTW9kZWwuZ2VuZXJhdGVLZXkoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3SW5jb21pbmdSdWxlKTtcblxuICAgICAgICAgICAgICAgICAgICBSdWxlc01vZGVsLmNyZWF0ZShpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdJbmNvbWluZ1J1bGUpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5pbmNvbWluZ1J1bGVzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0TmV3SW5jb21pbmdSdWxlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBvbkNoYW5nZUluY29taW5nSVBBZGRyZXNzKCl7XG4gICAgICAgICAgICAgICAgaWYoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3SW5jb21pbmdSdWxlLmZyb21JcEFkZHJlc3MgPT0gJycpe1xuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5pbmNvcnJlY3RDSURSID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBmdW5jdGlvbiBvbkNoYW5nZU91dGdvaW5nSVBBZGRyZXNzKCl7XG4gICAgICAgICAgICAgICAgaWYoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3T3V0Z29pbmdSdWxlLnRvSXBBZGRyZXNzID09ICcnKXtcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuaW5jb3JyZWN0Q0lEUiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGVDSURSKGlwYWRkcmVzcykge1xuICAgICAgICAgICAgICAgIHZhciBjaWRyUGF0dGVybiA9IG5ldyBSZWdFeHAoQ29udGl2R2xvYmFscy5DSURSX1JFR0VYKTtcblxuICAgICAgICAgICAgICAgIGlmIChjaWRyUGF0dGVybi50ZXN0KGlwYWRkcmVzcykpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuaW5jb3JyZWN0Q0lEUiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuaW5jb3JyZWN0Q0lEUiA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJ1bGUgaXMgc2F2ZWQgdG8gc2VydmVyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGFkZE91dGdvaW5nUnVsZSgpIHtcbiAgICAgICAgICAgICAgICBpZigoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3T3V0Z29pbmdSdWxlLnRvSXBBZGRyZXNzID09ICcnKSB8fFxuICAgICAgICAgICAgICAgICAgICAoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3T3V0Z29pbmdSdWxlLnRvSXBBZGRyZXNzICE9ICcnICYmXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlQ0lEUihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdPdXRnb2luZ1J1bGUudG9JcEFkZHJlc3MpKSkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlUnVsZUlkKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld091dGdvaW5nUnVsZSk7XG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld091dGdvaW5nUnVsZS5rZXkgPSBSdWxlc01vZGVsLmdlbmVyYXRlS2V5KGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld091dGdvaW5nUnVsZSk7XG4gICAgICAgICAgICAgICAgICAgIFJ1bGVzTW9kZWwuY3JlYXRlKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld091dGdvaW5nUnVsZSkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm91dGdvaW5nUnVsZXMucHVzaChyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXROZXdPdXRnb2luZ1J1bGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRGVsZXRlIGluY29taW5nIHJ1bGUgZnJvbSBzZXJ2ZXJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gZGVsZXRlSW5jb21pbmdSdWxlKGtleSkge1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgIFJ1bGVzTW9kZWwuZGVsZXRlVXNpbmdLZXkoa2V5KS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIF8ucmVtb3ZlKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmluY29taW5nUnVsZXMsIGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbi5rZXkgPT0ga2V5O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIERlbGV0ZSBvdXRnb2luZyBydWxlIGZyb20gc2VydmVyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRlbGV0ZU91dGdvaW5nUnVsZShrZXkpIHtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBSdWxlc01vZGVsLmRlbGV0ZVVzaW5nS2V5KGtleSkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBfLnJlbW92ZShpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5vdXRnb2luZ1J1bGVzLCBmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4ua2V5ID09IGtleTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuXG4gICAgICAgICAgICBQb2xpY2llc01vZGVsLmdldE1vZGVsQnlLZXkoJHN0YXRlUGFyYW1zLmtleSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocG9saWN5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLnBvbGljeSA9IHBvbGljeTtcbiAgICAgICAgICAgICAgICAgICAgUnVsZXNNb2RlbC5nZXRJbmNvbWluZ1J1bGVzKHBvbGljeS5wb2xpY3lOYW1lLCAnZGVmYXVsdCcpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuaW5jb21pbmdSdWxlcyA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0TmV3SW5jb21pbmdSdWxlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBSdWxlc01vZGVsLmdldE91dGdvaW5nUnVsZXMocG9saWN5LnBvbGljeU5hbWUsICdkZWZhdWx0JykudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5vdXRnb2luZ1J1bGVzID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXROZXdPdXRnb2luZ1J1bGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGdldE5ldHdvcmtzKCk7XG4gICAgICAgICAgICBnZXRBcHBsaWNhdGlvbkdyb3VwcygpO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGVsZXRlUG9saWN5ID0gZGVsZXRlUG9saWN5O1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGVsZXRlSW5jb21pbmdSdWxlID0gZGVsZXRlSW5jb21pbmdSdWxlO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGVsZXRlT3V0Z29pbmdSdWxlID0gZGVsZXRlT3V0Z29pbmdSdWxlO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuYWRkSW5jb21pbmdSdWxlID0gYWRkSW5jb21pbmdSdWxlO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuYWRkT3V0Z29pbmdSdWxlID0gYWRkT3V0Z29pbmdSdWxlO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZG9uZUVkaXRpbmcgPSBkb25lRWRpdGluZztcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmNhbmNlbEVkaXRpbmcgPSBjYW5jZWxFZGl0aW5nO1xuICAgICAgICAgICAgLy9FdmVudCBIYW5kbGVyc1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwub25DaGFuZ2VPdXRnb2luZ0FwcGxpY2F0aW9uR3JvdXBTZWxlY3Rpb24gPSBvbkNoYW5nZU91dGdvaW5nQXBwbGljYXRpb25Hcm91cFNlbGVjdGlvbjtcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm9uQ2hhbmdlSW5jb21pbmdBcHBsaWNhdGlvbkdyb3VwU2VsZWN0aW9uID0gb25DaGFuZ2VJbmNvbWluZ0FwcGxpY2F0aW9uR3JvdXBTZWxlY3Rpb247XG4gICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5vbkNoYW5nZU91dGdvaW5nTmV0d29ya1NlbGVjdGlvbiA9IG9uQ2hhbmdlT3V0Z29pbmdOZXR3b3JrU2VsZWN0aW9uO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwub25DaGFuZ2VJbmNvbWluZ05ldHdvcmtTZWxlY3Rpb24gPSBvbkNoYW5nZUluY29taW5nTmV0d29ya1NlbGVjdGlvbjtcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm9uQ2hhbmdlSW5jb21pbmdJUEFkZHJlc3MgPSBvbkNoYW5nZUluY29taW5nSVBBZGRyZXNzO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwub25DaGFuZ2VPdXRnb2luZ0lQQWRkcmVzcyA9IG9uQ2hhbmdlT3V0Z29pbmdJUEFkZHJlc3M7XG5cbiAgICAgICAgICAgIHNldE1vZGUoKTtcblxuICAgICAgICB9XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5uZXR3b3JrcG9saWNpZXMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMubGlzdC5pc29sYXRpb24nLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2lzb2xhdGlvbicsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0lzb2xhdGlvblBvbGljeUxpc3RDdHJsIGFzIGlzb2xhdGlvblBvbGljeUxpc3RDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25ldHdvcmtfcG9saWNpZXMvaXNvbGF0aW9ucG9saWN5bGlzdC5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdJc29sYXRpb25Qb2xpY3lMaXN0Q3RybCcsIFsnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckZmlsdGVyJywgJ1BvbGljaWVzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkaW50ZXJ2YWwsICRmaWx0ZXIsIFBvbGljaWVzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICB2YXIgcG9saWNpZXNMaXN0Q3RybCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFBvbGljaWVzKHJlbG9hZCkge1xuICAgICAgICAgICAgICAgIFBvbGljaWVzTW9kZWwuZ2V0KHJlbG9hZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHBvbGljaWVzTGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9saWNpZXNMaXN0Q3RybC5wb2xpY2llcyA9ICRmaWx0ZXIoJ29yZGVyQnknKShyZXN1bHQsICdwb2xpY3lOYW1lJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHBvbGljaWVzTGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9Mb2FkIGZyb20gY2FjaGUgZm9yIHF1aWNrIGRpc3BsYXkgaW5pdGlhbGx5XG4gICAgICAgICAgICBnZXRQb2xpY2llcyhmYWxzZSk7XG5cbiAgICAgICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICAgICAgLy9Eb24ndCBzdGFydCBhdXRvLXJlZnJlc2ggaWYgb25lIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQocHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0UG9saWNpZXModHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSwgQ29udGl2R2xvYmFscy5SRUZSRVNIX0lOVEVSVkFMKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vc3RvcCBwb2xsaW5nIHdoZW4gdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcbiAgICAgICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRpbnRlcnZhbC5jYW5jZWwocHJvbWlzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzkvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubmV0d29ya3BvbGljaWVzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzLmxpc3QnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2xpc3QnLFxuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOZXR3b3JrUG9saWNpZXNUYWJzQ3RybCBhcyBuZXR3b3JrUG9saWNpZXNUYWJzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICduZXR3b3JrX3BvbGljaWVzL25ldHdvcmtwb2xpY2llc3RhYnMuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5ldHdvcmtwb2xpY2llcy5saXN0LnJlZGlyZWN0aW9uJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9yZWRpcmVjdGlvbicsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICcnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ05ldHdvcmtQb2xpY2llc1RhYnNDdHJsJywgWyckc3RhdGUnLGZ1bmN0aW9uICgkc3RhdGUpIHtcbiAgICAgICAgdmFyIG5ldHdvcmtQb2xpY2llc1RhYnNDdHJsID0gdGhpcztcbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZU5ldHdvcmtQb2xpY3koKSB7XG4gICAgICAgICAgICBpZigkc3RhdGUuJGN1cnJlbnQuaW5jbHVkZXNbJ2NvbnRpdi5tZW51Lm5ldHdvcmtwb2xpY2llcy5saXN0Lmlzb2xhdGlvbiddKXtcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51Lm5ldHdvcmtwb2xpY2llcy5pc29sYXRpb24uY3JlYXRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZigkc3RhdGUuJGN1cnJlbnQuaW5jbHVkZXNbJ2NvbnRpdi5tZW51Lm5ldHdvcmtwb2xpY2llcy5saXN0LmJhbmR3aWR0aCddKSB7XG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMuYmFuZHdpZHRoLmNyZWF0ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbmV0d29ya1BvbGljaWVzVGFic0N0cmwuY3JlYXRlTmV0d29ya1BvbGljeSA9IGNyZWF0ZU5ldHdvcmtQb2xpY3k7XG4gICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAyLzE5LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm5ldHdvcmtzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3MuY3JlYXRlJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9jcmVhdGUnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbmV0d29ya3MvbmV0d29ya2NyZWF0ZS5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTmV0d29ya0NyZWF0ZUN0cmwgYXMgbmV0d29ya0NyZWF0ZUN0cmwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ05ldHdvcmtDcmVhdGVDdHJsJywgWyckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ05ldHdvcmtzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsIE5ldHdvcmtzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICB2YXIgbmV0d29ya0NyZWF0ZUN0cmwgPSB0aGlzO1xuICAgICAgICAgICAgbmV0d29ya0NyZWF0ZUN0cmwuY2lkclBhdHRlcm4gPSBDb250aXZHbG9iYWxzLkNJRFJfUkVHRVg7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvTmV0d29ya3MoKSB7XG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5uZXR3b3Jrcy5saXN0Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNhbmNlbENyZWF0aW5nKCkge1xuICAgICAgICAgICAgICAgIHJldHVyblRvTmV0d29ya3MoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlTmV0d29yaygpIHtcbiAgICAgICAgICAgICAgICAvL2Zvcm0gY29udHJvbGxlciBpcyBpbmplY3RlZCBieSB0aGUgaHRtbCB0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIC8vY2hlY2tpbmcgaWYgYWxsIHZhbGlkYXRpb25zIGhhdmUgcGFzc2VkXG4gICAgICAgICAgICAgICAgaWYgKG5ldHdvcmtDcmVhdGVDdHJsLmZvcm0uJHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihuZXR3b3JrQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKG5ldHdvcmtDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgbmV0d29ya0NyZWF0ZUN0cmwubmV3TmV0d29yay5rZXkgPVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29ya0NyZWF0ZUN0cmwubmV3TmV0d29yay50ZW5hbnROYW1lICsgJzonICsgbmV0d29ya0NyZWF0ZUN0cmwubmV3TmV0d29yay5uZXR3b3JrTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgTmV0d29ya3NNb2RlbC5jcmVhdGUobmV0d29ya0NyZWF0ZUN0cmwubmV3TmV0d29yaykudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5ldHdvcmtDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvTmV0d29ya3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobmV0d29ya0NyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKG5ldHdvcmtDcmVhdGVDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobmV0d29ya0NyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihuZXR3b3JrQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgbmV0d29ya0NyZWF0ZUN0cmwubmV3TmV0d29yayA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmV0d29ya05hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBlbmNhcDogJ3Z4bGFuJyxcbiAgICAgICAgICAgICAgICAgICAgc3VibmV0OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZ2F0ZXdheTogJycsXG4gICAgICAgICAgICAgICAgICAgIHRlbmFudE5hbWU6ICdkZWZhdWx0Jy8vVE9ETzogUmVtb3ZlIGhhcmRjb2RlZCB0ZW5hbnQuXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV0d29ya0NyZWF0ZUN0cmwuY3JlYXRlTmV0d29yayA9IGNyZWF0ZU5ldHdvcms7XG4gICAgICAgICAgICBuZXR3b3JrQ3JlYXRlQ3RybC5jYW5jZWxDcmVhdGluZyA9IGNhbmNlbENyZWF0aW5nO1xuXG4gICAgICAgICAgICByZXNldEZvcm0oKTtcbiAgICAgICAgfV0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5uZXR3b3JrcycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5ldHdvcmtzLmRldGFpbHMnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2RldGFpbHMvOmtleScsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05ldHdvcmtEZXRhaWxzQ3RybCBhcyBuZXR3b3JrRGV0YWlsc0N0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbmV0d29ya3MvbmV0d29ya2RldGFpbHMuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5ldHdvcmtzLmRldGFpbHMuaW5mbycsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvaW5mbycsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICduZXR3b3Jrcy9uZXR3b3JraW5mby5odG1sJ1xuICAgICAgICAgICAgfSk7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ05ldHdvcmtEZXRhaWxzQ3RybCcsXG4gICAgICAgIFsnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICckc2NvcGUnLCAnJGludGVydmFsJywgJyRmaWx0ZXInLCAnTmV0d29ya3NNb2RlbCcsICdBcHBsaWNhdGlvbkdyb3Vwc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uICgkc3RhdGUsICRzdGF0ZVBhcmFtcywgJHNjb3BlLCAkaW50ZXJ2YWwsICRmaWx0ZXIsIE5ldHdvcmtzTW9kZWwsIEFwcGxpY2F0aW9uR3JvdXBzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ldHdvcmtEZXRhaWxzQ3RybCA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub05ldHdvcmtzKCkge1xuICAgICAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51Lm5ldHdvcmtzLmxpc3QnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkZWxldGVOZXR3b3JrKCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IobmV0d29ya0RldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIobmV0d29ya0RldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgTmV0d29ya3NNb2RlbC5kZWxldGUobmV0d29ya0RldGFpbHNDdHJsLm5ldHdvcmspLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihuZXR3b3JrRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9OZXR3b3JrcygpO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihuZXR3b3JrRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKG5ldHdvcmtEZXRhaWxzQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogR2V0IGFwcGxpY2F0aW9uIGdyb3VwcyBiZWxvbmdpbmcgdG8gYSBuZXR3b3JrXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0QXBwbGljYXRpb25Hcm91cHMocmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uR3JvdXBzTW9kZWwuZ2V0KHJlbG9hZCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXR3b3JrRGV0YWlsc0N0cmwuYXBwbGljYXRpb25Hcm91cHMgPSAkZmlsdGVyKCdvcmRlckJ5JykoXy5maWx0ZXIocmVzdWx0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25ldHdvcmtOYW1lJzogbmV0d29ya0RldGFpbHNDdHJsLm5ldHdvcmsubmV0d29ya05hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAnZ3JvdXBOYW1lJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobmV0d29ya0RldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IobmV0d29ya0RldGFpbHNDdHJsKTtcblxuICAgICAgICAgICAgICAgIE5ldHdvcmtzTW9kZWwuZ2V0TW9kZWxCeUtleSgkc3RhdGVQYXJhbXMua2V5KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAobmV0d29yaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29ya0RldGFpbHNDdHJsLm5ldHdvcmsgPSBuZXR3b3JrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0QXBwbGljYXRpb25Hcm91cHMoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIG5ldHdvcmtEZXRhaWxzQ3RybC5kZWxldGVOZXR3b3JrID0gZGVsZXRlTmV0d29yaztcblxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICAgICAgICAgIC8vRG9uJ3QgZG8gYXV0b3JlZnJlc2ggaWYgb25lIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICBpZiAoIWFuZ3VsYXIuaXNEZWZpbmVkKHByb21pc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0QXBwbGljYXRpb25Hcm91cHModHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIENvbnRpdkdsb2JhbHMuUkVGUkVTSF9JTlRFUlZBTCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9zdG9wIHBvbGxpbmcgd2hlbiB1c2VyIG1vdmVzIGF3YXkgZnJvbSB0aGUgcGFnZVxuICAgICAgICAgICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHByb21pc2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfV0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5uZXR3b3JrcycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5ldHdvcmtzLmxpc3QnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2xpc3QnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOZXR3b3Jrc0xpc3RDdHJsIGFzIG5ldHdvcmtzTGlzdEN0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbmV0d29ya3MvbmV0d29ya2xpc3QuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignTmV0d29ya3NMaXN0Q3RybCcsIFsnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckZmlsdGVyJywgJ05ldHdvcmtzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkaW50ZXJ2YWwsICRmaWx0ZXIsIE5ldHdvcmtzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICB2YXIgbmV0d29ya3NMaXN0Q3RybCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldE5ldHdvcmtzKHJlbG9hZCkge1xuICAgICAgICAgICAgICAgIE5ldHdvcmtzTW9kZWwuZ2V0KHJlbG9hZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobmV0d29ya3NMaXN0Q3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29ya3NMaXN0Q3RybC5uZXR3b3JrcyA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobmV0d29ya3NMaXN0Q3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9Mb2FkIGZyb20gY2FjaGUgZm9yIHF1aWNrIGRpc3BsYXkgaW5pdGlhbGx5XG4gICAgICAgICAgICBnZXROZXR3b3JrcyhmYWxzZSk7XG5cbiAgICAgICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICAgICAgLy9Eb24ndCBkbyBhdXRvcmVmcmVzaCBpZiBvbmUgaXMgYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKCFhbmd1bGFyLmlzRGVmaW5lZChwcm9taXNlKSkge1xuICAgICAgICAgICAgICAgIHByb21pc2UgPSAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBnZXROZXR3b3Jrcyh0cnVlKTtcbiAgICAgICAgICAgICAgICB9LCBDb250aXZHbG9iYWxzLlJFRlJFU0hfSU5URVJWQUwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL3N0b3AgcG9sbGluZyB3aGVuIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXG4gICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHByb21pc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBjc2hhbXB1ciBvbiA2LzIzLzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm5ldHdvcmtzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3MuZGV0YWlscy5zdGF0cycsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvc3RhdHMnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOZXR3b3JrU3RhdHNDdHJsIGFzIG5ldHdvcmtTdGF0c0N0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbmV0d29ya3MvbmV0d29ya3N0YXRzLmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ05ldHdvcmtTdGF0c0N0cmwnLFxuICAgICAgICBbJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckZmlsdGVyJywgJ05ldHdvcmtzTW9kZWwnLCAnSW5zcGVjdFNlcnZpY2UnLFxuICAgICAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkc2NvcGUsICRpbnRlcnZhbCwgJGZpbHRlciwgTmV0d29ya3NNb2RlbCwgSW5zcGVjdFNlcnZpY2UpIHtcblxuICAgICAgICAgICAgICAgIHZhciBuZXR3b3JrU3RhdHNDdHJsID0gdGhpcztcblxuICAgICAgICAgICAgICAgIC8qIEdldHMgdGhlIE5ldHdvcmsgT3BlcmF0aW9uYWwgc3RhdGUgZnJvbSB0aGUgc2VydmVyICovXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0TmV0d29ya0luc3BlY3QocmVmcmVzaCl7XG4gICAgICAgICAgICAgICAgICAgIE5ldHdvcmtzTW9kZWwuZ2V0SW5zcGVjdEJ5S2V5KCRzdGF0ZVBhcmFtcy5rZXksIENvbnRpdkdsb2JhbHMuTkVUV09SS1NfSU5TUEVDVF9FTkRQT0lOVCwgcmVmcmVzaClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXR3b3JrU3RhdHNDdHJsLm5ldHdvcmtJbnNwZWN0U3RhdHMgPSByZXN1bHQuT3BlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXR3b3JrU3RhdHNDdHJsLmNvbmZpZyA9IHJlc3VsdC5Db25maWc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0Lk9wZXIuZW5kcG9pbnRzIT11bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyRGV0YWlscyA9IEluc3BlY3RTZXJ2aWNlLmJ1aWxkRW5kUG9pbnRzKHJlc3VsdC5PcGVyLmVuZHBvaW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKEluc3BlY3RTZXJ2aWNlLmNoZWNrQ29udGFpbmVyQ2hhbmdlZChuZXR3b3JrU3RhdHNDdHJsLmNvbnRhaW5lckRldGFpbHMsY29udGFpbmVyRGV0YWlscykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29ya1N0YXRzQ3RybC5lbmRwb2ludHMgPSByZXN1bHQuT3Blci5lbmRwb2ludHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXR3b3JrU3RhdHNDdHJsLmNvbnRhaW5lckRldGFpbHMgPSBjb250YWluZXJEZXRhaWxzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcmtTdGF0c0N0cmwuZW5kcG9pbnRzID0gW11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29ya1N0YXRzQ3RybC5jb250YWluZXJEZXRhaWxzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZ2V0TmV0d29ya0luc3BlY3QoZmFsc2UpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICAgICAgICAgIC8vRG9uJ3QgZG8gYXV0b3JlZnJlc2ggaWYgb25lIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICBpZiAoIWFuZ3VsYXIuaXNEZWZpbmVkKHByb21pc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TmV0d29ya0luc3BlY3QodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIENvbnRpdkdsb2JhbHMuUkVGUkVTSF9JTlRFUlZBTCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9zdG9wIHBvbGxpbmcgd2hlbiB1c2VyIG1vdmVzIGF3YXkgZnJvbSB0aGUgcGFnZVxuICAgICAgICAgICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHByb21pc2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfV0pOyIsImFuZ3VsYXIubW9kdWxlKCdjb250aXYubm9kZXMnKVxuICAgIC5mYWN0b3J5KCdCZ3BTZXJ2aWNlJywgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcblxuICAgICAgICBmdW5jdGlvbiBnZXRCZ3AoY3RybCkge1xuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICAgICAgIHZhciB1cmwgPSBDb250aXZHbG9iYWxzLkJHUFNfRU5EUE9JTlQgKyBjdHJsLmtleSArICcvJztcbiAgICAgICAgICAgICRodHRwLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgICAgIGN0cmwubmVpZ2hib3IgPSByZXN1bHQuZGF0YTtcbiAgICAgICAgICAgICAgICBjdHJsLm5laWdoYm9ycy5wdXNoKHsnbmFtZSc6IGN0cmwubmVpZ2hib3JbJ25laWdoYm9yJ10sICd2YWx1ZSc6IGN0cmwubmVpZ2hib3JbJ25laWdoYm9yLWFzJ119KTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVCZ3AoY3RybCkge1xuICAgICAgICAgICAgdmFyIHVybCA9IENvbnRpdkdsb2JhbHMuQkdQU19FTkRQT0lOVCArIGN0cmwua2V5ICsgJy8nO1xuICAgICAgICAgICAgcmV0dXJuICRodHRwLnBvc3QodXJsLCBjdHJsLm5laWdoYm9yKTtcbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiBnZXRCZ3BJbnNwZWN0KGtleSkge1xuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICAgICAgIHZhciB1cmwgPSBDb250aXZHbG9iYWxzLkJHUFNfSU5TUEVDVF9FTkRQT0lOVCArIGtleSArICcvJztcbiAgICAgICAgICAgICRodHRwLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0QmdwOiBnZXRCZ3AsXG4gICAgICAgICAgICB1cGRhdGVCZ3A6IHVwZGF0ZUJncCxcbiAgICAgICAgICAgIGdldEJncEluc3BlY3Q6IGdldEJncEluc3BlY3RcbiAgICAgICAgfVxuICAgIH1dKTsiLCJhbmd1bGFyLm1vZHVsZShcImNvbnRpdi5ub2Rlc1wiKVxuICAgIC5kaXJlY3RpdmUoXCJjdHZMb2dzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25vZGVzL2xvZ3MuaHRtbCcsXG4gICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgIGxvZzogXCI9XCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSk7IiwiYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5ub2RlcycpXG4gICAgLmZhY3RvcnkoJ0xvZ1NlcnZpY2UnLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xuICAgICAgICBmdW5jdGlvbiBnZXRBY3RpdmVMb2dzKCkge1xuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICAgICAgIHZhciB1cmwgPSBDb250aXZHbG9iYWxzLk5PREVTX0FDVElWRV9KT0JfRU5EUE9JTlQ7XG4gICAgICAgICAgICAkaHR0cC5nZXQodXJsKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRMYXN0TG9ncygpIHtcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICAgICB2YXIgdXJsID0gQ29udGl2R2xvYmFscy5OT0RFU19MQVNUX0pPQl9FTkRQT0lOVDtcbiAgICAgICAgICAgICRodHRwLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXRBY3RpdmVMb2dzOiBnZXRBY3RpdmVMb2dzLFxuICAgICAgICAgICAgZ2V0TGFzdExvZ3M6IGdldExhc3RMb2dzXG4gICAgICAgIH1cbiAgICB9XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5ub2RlcycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5vZGVzLmFjdGl2ZWxvZycsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvYWN0aXZlbG9nJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9kZUFjdGl2ZUpvYkxvZ3NDdHJsIGFzIG5vZGVBY3RpdmVKb2JMb2dzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8Y3R2LWxvZ3MgdGl0bGU9XCJBY3RpdmUgSm9iXCIgbG9nPVwibm9kZUFjdGl2ZUpvYkxvZ3NDdHJsLmFjdGl2ZUxvZ3NcIj48L2N0di1sb2dzPidcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignTm9kZUFjdGl2ZUpvYkxvZ3NDdHJsJywgWyckc2NvcGUnLCAnJGludGVydmFsJywgJ0xvZ1NlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkaW50ZXJ2YWwsIExvZ1NlcnZpY2UpIHtcbiAgICAgICAgdmFyIG5vZGVBY3RpdmVKb2JMb2dzQ3RybCA9IHRoaXM7XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0QWN0aXZlTG9ncygpIHtcbiAgICAgICAgICAgIExvZ1NlcnZpY2UuZ2V0QWN0aXZlTG9ncygpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIG5vZGVBY3RpdmVKb2JMb2dzQ3RybC5hY3RpdmVMb2dzID0gcmVzdWx0O1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAvL09uY2UgdGhlIGpvYiBmaW5pc2hlcywgZW5kcG9pbnQgcmV0dXJucyA1MDAgZXJyb3IuIFNvIHJlc2V0IHRoZSBhY3RpdmVMb2dzXG4gICAgICAgICAgICAgICAgbm9kZUFjdGl2ZUpvYkxvZ3NDdHJsLmFjdGl2ZUxvZ3MgPSB7XG4gICAgICAgICAgICAgICAgICAgIGRlc2M6ICdUaGVyZSBpcyBjdXJyZW50bHkgbm8gYWN0aXZlIGpvYi4gQ2hlY2sgTGFzdCBKb2IgZm9yIGEgam9iIHRoYXQgcmVjZW50bHkgZmluaXNoZWQuJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBnZXRBY3RpdmVMb2dzKCk7XG5cbiAgICAgICAgdmFyIHByb21pc2U7XG4gICAgICAgIC8vRG9uJ3QgZG8gYXV0by1yZWZyZXNoIGlmIG9uZSBpcyBhbHJlYWR5IGluIHByb2dyZXNzXG4gICAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQocHJvbWlzZSkpIHtcbiAgICAgICAgICAgIHByb21pc2UgPSAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGdldEFjdGl2ZUxvZ3MoKTtcbiAgICAgICAgICAgIH0sIENvbnRpdkdsb2JhbHMuUkVGUkVTSF9JTlRFUlZBTCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9zdG9wIHBvbGxpbmcgd2hlbiB1c2VyIG1vdmVzIGF3YXkgZnJvbSB0aGUgcGFnZVxuICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRpbnRlcnZhbC5jYW5jZWwocHJvbWlzZSk7XG4gICAgICAgIH0pO1xuICAgIH1dKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMjUvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubm9kZXMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5ub2Rlcy5jb21taXNzaW9uJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9jb21taXNzaW9uLzprZXknLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb2RlQ29tbWlzc2lvbkN0cmwgYXMgbm9kZUNvbW1pc3Npb25DdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25vZGVzL25vZGVjb21taXNzaW9uLmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ05vZGVDb21taXNzaW9uQ3RybCcsIFtcbiAgICAgICAgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnTm9kZXNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsICdOb2Rlc1NlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsIE5vZGVzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlLCBOb2Rlc1NlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBub2RlQ29tbWlzc2lvbkN0cmwgPSB0aGlzO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub05vZGVEZXRhaWxzKCkge1xuICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUubm9kZXMuZGV0YWlscy5pbmZvJywgeydrZXknOiAkc3RhdGVQYXJhbXMua2V5fSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNhbmNlbENvbW1pc3Npb25pbmdOb2RlKCkge1xuICAgICAgICAgICAgICAgIHJldHVyblRvTm9kZURldGFpbHMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY29tbWlzc2lvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZUNvbW1pc3Npb25DdHJsLmZvcm0uJHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihub2RlQ29tbWlzc2lvbkN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihub2RlQ29tbWlzc2lvbkN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwubm9kZU9wc09iai5ub2RlcyA9IFskc3RhdGVQYXJhbXMua2V5XTtcbiAgICAgICAgICAgICAgICAgICAgTm9kZXNTZXJ2aWNlLmNsZWFudXBFeHRyYVZhcnMobm9kZUNvbW1pc3Npb25DdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgTm9kZXNTZXJ2aWNlLmNyZWF0ZUV4dHJhVmFycyhub2RlQ29tbWlzc2lvbkN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBOb2Rlc01vZGVsLmNvbW1pc3Npb24obm9kZUNvbW1pc3Npb25DdHJsLm5vZGVPcHNPYmopLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihub2RlQ29tbWlzc2lvbkN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9Ob2RlRGV0YWlscygpO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihub2RlQ29tbWlzc2lvbkN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKG5vZGVDb21taXNzaW9uQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwubm9kZU9wc09iaiA9IHt9O1xuICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmV4dHJhX3ZhcnMgPSB7fTsgLy9UT0RPIEludGlhbGl6ZSBmcm9tIGdsb2JhbCBzZXR0aW5nc1xuICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmFuc2libGVWYXJpYWJsZXMgPSBbXTtcbiAgICAgICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5lbnZWYXJpYWJsZXMgPSBbXTtcblxuICAgICAgICAgICAgTm9kZXNTZXJ2aWNlLmdldFNldHRpbmdzKG5vZGVDb21taXNzaW9uQ3RybCk7XG5cbiAgICAgICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5jYW5jZWxDb21taXNzaW9uaW5nTm9kZSA9IGNhbmNlbENvbW1pc3Npb25pbmdOb2RlO1xuICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmNvbW1pc3Npb24gPSBjb21taXNzaW9uO1xuXG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5vZGVDb21taXNzaW9uQ3RybCk7XG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Iobm9kZUNvbW1pc3Npb25DdHJsKTtcbiAgICAgICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzI1LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm5vZGVzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubm9kZXMuZGV0YWlscycsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZGV0YWlscy86a2V5JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9kZURldGFpbHNDdHJsIGFzIG5vZGVEZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdub2Rlcy9ub2RlZGV0YWlscy5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubm9kZXMuZGV0YWlscy5pbmZvJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9pbmZvJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9kZURldGFpbHNDdHJsIGFzIG5vZGVEZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdub2Rlcy9ub2RlaW5mby5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubm9kZXMuZGV0YWlscy5zdGF0cycsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvc3RhdHMnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb2RlRGV0YWlsc0N0cmwgYXMgbm9kZURldGFpbHNDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25vZGVzL25vZGVzdGF0cy5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubm9kZXMuZGV0YWlscy5sb2dzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9sb2dzJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9kZURldGFpbHNDdHJsIGFzIG5vZGVEZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdub2Rlcy9ub2RlbG9ncy5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubm9kZXMuZGV0YWlscy5lZGl0Jywge1xuICAgICAgICAgICAgICAgIHVybDogJy9lZGl0JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9kZURldGFpbHNDdHJsIGFzIG5vZGVEZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdub2Rlcy9ub2RlaW5mby5odG1sJ1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignTm9kZURldGFpbHNDdHJsJywgWyckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJyRzY29wZScsICckaW50ZXJ2YWwnLCAnTm9kZXNNb2RlbCcsICdCZ3BTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkc2NvcGUsICRpbnRlcnZhbCwgTm9kZXNNb2RlbCwgQmdwU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIG5vZGVEZXRhaWxzQ3RybCA9IHRoaXM7XG4gICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwubnVtYmVycGF0dGVybiA9IENvbnRpdkdsb2JhbHMuTlVNQkVSX1JFR0VYO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBkZWNvbW1pc3Npb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVPcHNPYmogPSB7XG4gICAgICAgICAgICAgICAgICBub2RlczogWyRzdGF0ZVBhcmFtcy5rZXldXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBOb2Rlc01vZGVsLmRlY29tbWlzc2lvbihub2RlT3BzT2JqKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9EaXNhYmxlIGFsbCBidXR0b25zIGluaXRpYWxseS4gUG9sbCB3aWxsIGFzc2lnbiB2YWx1ZXMgYXBwcm9wcmlhdGVseS5cbiAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnNob3dDb21taXNzaW9uQnV0dG9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5jb21taXNzaW9uQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwudXBncmFkZUJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gdXBncmFkZSgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZU9wc09iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXM6IFskc3RhdGVQYXJhbXMua2V5XVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgTm9kZXNNb2RlbC51cGdyYWRlKG5vZGVPcHNPYmopLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAvL0Rpc2FibGUgYWxsIGJ1dHRvbnMgaW5pdGlhbGx5LiBQb2xsIHdpbGwgYXNzaWduIHZhbHVlcyBhcHByb3ByaWF0ZWx5LlxuICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuc2hvd0NvbW1pc3Npb25CdXR0b24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLmNvbW1pc3Npb25CdXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC51cGdyYWRlQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIERpc3BsYXkgYnV0dG9ucyBiYXNlZCBvbiBzdGF0dXMgb2Ygbm9kZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXRCdXR0b25EaXNwbGF5KCkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobm9kZURldGFpbHNDdHJsLm5vZGVbJ2ludmVudG9yeV9zdGF0ZSddLnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdVbmFsbG9jYXRlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuc2hvd0NvbW1pc3Npb25CdXR0b24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLmNvbW1pc3Npb25CdXR0b25FbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC51cGdyYWRlQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0RlY29tbWlzc2lvbmVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5zaG93Q29tbWlzc2lvbkJ1dHRvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuY29tbWlzc2lvbkJ1dHRvbkVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnVwZ3JhZGVCdXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnUHJvdmlzaW9uaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5zaG93Q29tbWlzc2lvbkJ1dHRvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuY29tbWlzc2lvbkJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC51cGdyYWRlQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0FsbG9jYXRlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuc2hvd0NvbW1pc3Npb25CdXR0b24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5jb21taXNzaW9uQnV0dG9uRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwudXBncmFkZUJ1dHRvbkVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0NhbmNlbGxlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuc2hvd0NvbW1pc3Npb25CdXR0b24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5jb21taXNzaW9uQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnVwZ3JhZGVCdXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnTWFpbnRlbmFuY2UnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnNob3dDb21taXNzaW9uQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5jb21taXNzaW9uQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnVwZ3JhZGVCdXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDovL0NsdXN0ZXIgc2hvdWxkIG5vdCBiZSBpbiB0aGlzIHN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuc2hvd0NvbW1pc3Npb25CdXR0b24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLmNvbW1pc3Npb25CdXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwudXBncmFkZUJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Tm9kZUluZm8ocmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgTm9kZXNNb2RlbC5nZXRNb2RlbEJ5S2V5KCRzdGF0ZVBhcmFtcy5rZXksIHJlbG9hZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5ub2RlID0gbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEJ1dHRvbkRpc3BsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldE1vZGUoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCRzdGF0ZS5pcygnY29udGl2Lm1lbnUubm9kZXMuZGV0YWlscy5lZGl0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLm1vZGUgPSAnZWRpdCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLm1vZGUgPSAnZGV0YWlscyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub0luZm8oKSB7XG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5ub2Rlcy5kZXRhaWxzLmluZm8nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlQmdwSW5mbygpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZURldGFpbHNDdHJsLmZvcm0uJHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5uZWlnaGJvci5rZXkgPSAkc3RhdGVQYXJhbXMua2V5O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGJhY2tlbmQgb25seSBzdXBwb3J0cyBhZGRpbmcgb25lIG5laWdoYm9yIGN1cnJlbnRseVxuICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwubmVpZ2hib3JzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5uZWlnaGJvclsnbmVpZ2hib3InXSA9IGl0ZW0ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5uZWlnaGJvclsnbmVpZ2hib3ItYXMnXSA9IGl0ZW0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIEJncFNlcnZpY2UudXBkYXRlQmdwKG5vZGVEZXRhaWxzQ3RybCkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwubmVpZ2hib3IgPSByZXN1bHQuY29uZmlnLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub0luZm8oKTtcblxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEJncEluZm8oKSB7XG4gICAgICAgICAgICAgICAgQmdwU2VydmljZS5nZXRCZ3Aobm9kZURldGFpbHNDdHJsKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLm5laWdoYm9yID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEJncEluc3BlY3QoKSB7XG4gICAgICAgICAgICAgICAgQmdwU2VydmljZS5nZXRCZ3BJbnNwZWN0KCRzdGF0ZVBhcmFtcy5rZXkpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuaW5zcGVjdCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnJvdXRlcyA9IHJlc3VsdC5PcGVyLnJvdXRlcztcbiAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLmZpbHRlcmVkcm91dGVzID0gcmVzdWx0Lk9wZXIucm91dGVzO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5kZWNvbW1pc3Npb24gPSBkZWNvbW1pc3Npb247XG4gICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwudXBncmFkZSA9IHVwZ3JhZGU7XG5cbiAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5zZXRNb2RlID0gc2V0TW9kZTtcbiAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC51cGRhdGVCZ3BJbmZvID0gdXBkYXRlQmdwSW5mbztcbiAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5yZXR1cm5Ub0luZm8gPSByZXR1cm5Ub0luZm87XG4gICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwubmVpZ2hib3JzID0gW107XG4gICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwubmVpZ2hib3IgPSB7fTtcbiAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5rZXkgPSAkc3RhdGVQYXJhbXMua2V5O1xuICAgICAgICAgICAgZ2V0QmdwSW5mbygpO1xuICAgICAgICAgICAgZ2V0QmdwSW5zcGVjdCgpO1xuICAgICAgICAgICAgc2V0TW9kZSgpO1xuXG4gICAgICAgICAgICAvL0xvYWQgZnJvbSBjYWNoZSBmb3IgcXVpY2sgZGlzcGxheSBpbml0aWFsbHlcbiAgICAgICAgICAgIGdldE5vZGVJbmZvKGZhbHNlKTtcblxuICAgICAgICAgICAgdmFyIHByb21pc2U7XG4gICAgICAgICAgICAvL0Rvbid0IGRvIGF1dG8tcmVmcmVzaCBpZiBvbmUgaXMgYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKCFhbmd1bGFyLmlzRGVmaW5lZChwcm9taXNlKSkge1xuICAgICAgICAgICAgICAgIHByb21pc2UgPSAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBnZXROb2RlSW5mbyh0cnVlKTtcbiAgICAgICAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vc3RvcCBwb2xsaW5nIHdoZW4gdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcbiAgICAgICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRpbnRlcnZhbC5jYW5jZWwocHJvbWlzZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA2LzE0LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZShcImNvbnRpdi5ub2Rlc1wiKVxuICAgIC5kaXJlY3RpdmUoXCJjdHZOb2Rlc3RhdHVzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgbm9kZTogJz0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdub2Rlcy9ub2Rlc3RhdHVzLmh0bWwnXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC5kaXJlY3RpdmUoXCJjdHZOb2Rlc3RhdGVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgICBub2RlOiAnPSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25vZGVzL25vZGVzdGF0ZS5odG1sJ1xuICAgICAgICB9XG4gICAgfSk7IiwiYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5ub2RlcycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5vZGVzLmRpc2NvdmVyJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9kaXNjb3ZlcicsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05vZGVEaXNjb3ZlckN0cmwgYXMgbm9kZURpc2NvdmVyQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdub2Rlcy9ub2RlZGlzY292ZXIuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignTm9kZURpc2NvdmVyQ3RybCcsIFtcbiAgICAgICAgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnTm9kZXNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsICdOb2Rlc1NlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsIE5vZGVzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlLCBOb2Rlc1NlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBub2RlRGlzY292ZXJDdHJsID0gdGhpcztcblxuICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9Ob2RlcygpIHtcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51Lm5vZGVzLmxpc3QnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY2FuY2VsRGlzY292ZXJpbmdOb2RlKCkge1xuICAgICAgICAgICAgICAgIHJldHVyblRvTm9kZXMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gZGlzY292ZXIoKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGVEaXNjb3ZlckN0cmwuZm9ybS4kdmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKG5vZGVEaXNjb3ZlckN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihub2RlRGlzY292ZXJDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlSVBBZGRyQXJyYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgTm9kZXNTZXJ2aWNlLmNyZWF0ZUV4dHJhVmFycyhub2RlRGlzY292ZXJDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgTm9kZXNNb2RlbC5kaXNjb3Zlcihub2RlRGlzY292ZXJDdHJsLm5vZGVPcHNPYmopLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihub2RlRGlzY292ZXJDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvTm9kZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobm9kZURpc2NvdmVyQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3Iobm9kZURpc2NvdmVyQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVJUEFkZHJBcnJheSgpIHtcbiAgICAgICAgICAgICAgICBub2RlRGlzY292ZXJDdHJsLm5vZGVPcHNPYmouYWRkcnMgPSBfLndvcmRzKG5vZGVEaXNjb3ZlckN0cmwubm9kZUlQQWRkciwgL1teLCBdKy9nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm9kZURpc2NvdmVyQ3RybC5ub2RlT3BzT2JqID0ge307XG4gICAgICAgICAgICBub2RlRGlzY292ZXJDdHJsLmV4dHJhX3ZhcnMgPSB7fTsgLy9UT0RPIEludGlhbGl6ZSBmcm9tIGdsb2JhbCBzZXR0aW5nc1xuICAgICAgICAgICAgbm9kZURpc2NvdmVyQ3RybC5hbnNpYmxlVmFyaWFibGVzID0gW107XG4gICAgICAgICAgICBub2RlRGlzY292ZXJDdHJsLmVudlZhcmlhYmxlcyA9IFtdO1xuICAgICAgICAgICAgbm9kZURpc2NvdmVyQ3RybC5ub2RlSVBBZGRyID0gJyc7IC8vSVAgYWRkcmVzcyBvZiBub2RlcyB0byBkaXNjb3ZlclxuXG4gICAgICAgICAgICBOb2Rlc1NlcnZpY2UuZ2V0U2V0dGluZ3Mobm9kZURpc2NvdmVyQ3RybCk7XG5cbiAgICAgICAgICAgIG5vZGVEaXNjb3ZlckN0cmwuZGlzY292ZXIgPSBkaXNjb3ZlcjtcbiAgICAgICAgICAgIG5vZGVEaXNjb3ZlckN0cmwuY2FuY2VsRGlzY292ZXJpbmdOb2RlID0gY2FuY2VsRGlzY292ZXJpbmdOb2RlO1xuXG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5vZGVEaXNjb3ZlckN0cmwpO1xuICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKG5vZGVEaXNjb3ZlckN0cmwpO1xuICAgICAgICB9XSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2Lm5vZGVzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubm9kZXMubGFzdGxvZycsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvbGFzdGxvZycsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05vZGVMYXN0Sm9iTG9nc0N0cmwgYXMgbm9kZUxhc3RKb2JMb2dzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8Y3R2LWxvZ3MgdGl0bGU9XCJMYXN0IEpvYlwiIGxvZz1cIm5vZGVMYXN0Sm9iTG9nc0N0cmwubGFzdExvZ3NcIj48L2N0di1sb2dzPidcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignTm9kZUxhc3RKb2JMb2dzQ3RybCcsIFsnJHNjb3BlJywgJyRpbnRlcnZhbCcsICdMb2dTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzY29wZSwgJGludGVydmFsLCBMb2dTZXJ2aWNlKSB7XG4gICAgICAgIHZhciBub2RlTGFzdEpvYkxvZ3NDdHJsID0gdGhpcztcblxuICAgICAgICBmdW5jdGlvbiBnZXRMYXN0TG9ncygpIHtcbiAgICAgICAgICAgIExvZ1NlcnZpY2UuZ2V0TGFzdExvZ3MoKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBub2RlTGFzdEpvYkxvZ3NDdHJsLmxhc3RMb2dzID0gcmVzdWx0O1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGdldExhc3RMb2dzKCk7XG5cbiAgICAgICAgdmFyIHByb21pc2U7XG4gICAgICAgIC8vRG9uJ3QgZG8gYXV0by1yZWZyZXNoIGlmIG9uZSBpcyBhbHJlYWR5IGluIHByb2dyZXNzXG4gICAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQocHJvbWlzZSkpIHtcbiAgICAgICAgICAgIHByb21pc2UgPSAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGdldExhc3RMb2dzKCk7XG4gICAgICAgICAgICB9LCBDb250aXZHbG9iYWxzLlJFRlJFU0hfSU5URVJWQUwpO1xuICAgICAgICB9XG4gICAgICAgIC8vc3RvcCBwb2xsaW5nIHdoZW4gdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcbiAgICAgICAgJHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHByb21pc2UpO1xuICAgICAgICB9KTtcbiAgICB9XSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzIyLzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm5vZGVzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubm9kZXMubGlzdCcsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvbGlzdCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05vZGVMaXN0Q3RybCBhcyBub2RlTGlzdEN0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbm9kZXMvbm9kZWxpc3QuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignTm9kZUxpc3RDdHJsJywgWyckc2NvcGUnLCAnJGludGVydmFsJywgJyRmaWx0ZXInLCAnTm9kZXNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICRpbnRlcnZhbCwgJGZpbHRlciwgTm9kZXNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgdmFyIG5vZGVMaXN0Q3RybCA9IHRoaXM7XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0Tm9kZXMocmVsb2FkKSB7XG4gICAgICAgICAgICBOb2Rlc01vZGVsLmdldChyZWxvYWQpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5vZGVMaXN0Q3RybCk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0Q3RybC5ub2RlcyA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5vZGVMaXN0Q3RybCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL0xvYWQgZnJvbSBjYWNoZSBmb3IgcXVpY2sgZGlzcGxheSBpbml0aWFsbHlcbiAgICAgICAgZ2V0Tm9kZXMoZmFsc2UpO1xuXG4gICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICAvL0Rvbid0IGRvIGF1dG8tcmVmcmVzaCBpZiBvbmUgaXMgYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgICBpZiAoIWFuZ3VsYXIuaXNEZWZpbmVkKHByb21pc2UpKSB7XG4gICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBnZXROb2Rlcyh0cnVlKTtcbiAgICAgICAgICAgIH0sIENvbnRpdkdsb2JhbHMuUkVGUkVTSF9JTlRFUlZBTCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9zdG9wIHBvbGxpbmcgd2hlbiB1c2VyIG1vdmVzIGF3YXkgZnJvbSB0aGUgcGFnZVxuICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRpbnRlcnZhbC5jYW5jZWwocHJvbWlzZSk7XG4gICAgICAgIH0pO1xuICAgIH1dKTsiLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2Lm9yZ2FuaXphdGlvbnMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5vcmdhbml6YXRpb25zLmNyZWF0ZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvY3JlYXRlJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ29yZ2FuaXphdGlvbnMvb3JnYW5pemF0aW9uY3JlYXRlLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdPcmdhbml6YXRpb25DcmVhdGVDdHJsIGFzIG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ09yZ2FuaXphdGlvbkNyZWF0ZUN0cmwnLCBbJyRzdGF0ZScsICdPcmdhbml6YXRpb25zTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCBPcmdhbml6YXRpb25zTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICB2YXIgb3JnYW5pemF0aW9uQ3JlYXRlQ3RybCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvT3JnYW5pemF0aW9ucygpIHtcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51Lm9yZ2FuaXphdGlvbnMubGlzdCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjYW5jZWxDcmVhdGluZygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5Ub09yZ2FuaXphdGlvbnMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlT3JnYW5pemF0aW9uKCkge1xuICAgICAgICAgICAgICAgIC8vZm9ybSBjb250cm9sbGVyIGlzIGluamVjdGVkIGJ5IHRoZSBodG1sIHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgLy9jaGVja2luZyBpZiBhbGwgdmFsaWRhdGlvbnMgaGF2ZSBwYXNzZWRcbiAgICAgICAgICAgICAgICBpZiAob3JnYW5pemF0aW9uQ3JlYXRlQ3RybC5mb3JtLiR2YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Iob3JnYW5pemF0aW9uQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBvcmdhbml6YXRpb25DcmVhdGVDdHJsLm5ld09yZ2FuaXphdGlvbi5rZXkgPSBvcmdhbml6YXRpb25DcmVhdGVDdHJsLm5ld09yZ2FuaXphdGlvbi50ZW5hbnROYW1lOyBcbiAgICAgICAgICAgICAgICAgICAgT3JnYW5pemF0aW9uc01vZGVsLmNyZWF0ZShvcmdhbml6YXRpb25DcmVhdGVDdHJsLm5ld09yZ2FuaXphdGlvbikudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9Pcmdhbml6YXRpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIob3JnYW5pemF0aW9uQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgIG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwubmV3T3JnYW5pemF0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICB0ZW5hbnROYW1lOiAnJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwuY3JlYXRlT3JnYW5pemF0aW9uID0gY3JlYXRlT3JnYW5pemF0aW9uO1xuICAgICAgICAgICAgb3JnYW5pemF0aW9uQ3JlYXRlQ3RybC5jYW5jZWxDcmVhdGluZyA9IGNhbmNlbENyZWF0aW5nO1xuXG4gICAgICAgICAgICByZXNldEZvcm0oKTtcbiAgICAgICAgfV0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5vcmdhbml6YXRpb25zJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUub3JnYW5pemF0aW9ucy5kZXRhaWxzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9kZXRhaWxzLzprZXknLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdPcmdhbml6YXRpb25EZXRhaWxzQ3RybCBhcyBvcmdhbml6YXRpb25EZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdvcmdhbml6YXRpb25zL29yZ2FuaXphdGlvbmRldGFpbHMuaHRtbCdcbiAgICAgICAgICAgIH0pO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdPcmdhbml6YXRpb25EZXRhaWxzQ3RybCcsXG4gICAgICAgIFsnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdPcmdhbml6YXRpb25zTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBPcmdhbml6YXRpb25zTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsID0gdGhpcztcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvT3JnYW5pemF0aW9ucygpIHtcbiAgICAgICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5vcmdhbml6YXRpb25zLmxpc3QnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkZWxldGVPcmdhbml6YXRpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihvcmdhbml6YXRpb25EZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgT3JnYW5pemF0aW9uc01vZGVsLmRlbGV0ZShvcmdhbml6YXRpb25EZXRhaWxzQ3RybC5vcmdhbml6YXRpb24pLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihvcmdhbml6YXRpb25EZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub09yZ2FuaXphdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIob3JnYW5pemF0aW9uRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Iob3JnYW5pemF0aW9uRGV0YWlsc0N0cmwpO1xuXG4gICAgICAgICAgICAgICAgT3JnYW5pemF0aW9uc01vZGVsLmdldE1vZGVsQnlLZXkoJHN0YXRlUGFyYW1zLmtleSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKG9yZ2FuaXphdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JnYW5pemF0aW9uRGV0YWlsc0N0cmwub3JnYW5pemF0aW9uID0gb3JnYW5pemF0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsLmRlbGV0ZU9yZ2FuaXphdGlvbiA9IGRlbGV0ZU9yZ2FuaXphdGlvbjtcbiAgICAgICAgICAgIH1dKTsiLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2Lm9yZ2FuaXphdGlvbnMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5vcmdhbml6YXRpb25zLmxpc3QnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2xpc3QnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdPcmdhbml6YXRpb25zTGlzdEN0cmwgYXMgb3JnYW5pemF0aW9uc0xpc3RDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ29yZ2FuaXphdGlvbnMvb3JnYW5pemF0aW9ubGlzdC5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdPcmdhbml6YXRpb25zTGlzdEN0cmwnLCBbJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJGZpbHRlcicsICdPcmdhbml6YXRpb25zTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkaW50ZXJ2YWwsICRmaWx0ZXIsIE9yZ2FuaXphdGlvbnNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBvcmdhbml6YXRpb25zTGlzdEN0cmwgPSB0aGlzO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRPcmdhbml6YXRpb25zKHJlbG9hZCkge1xuICAgICAgICAgICAgICAgIE9yZ2FuaXphdGlvbnNNb2RlbC5nZXQocmVsb2FkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihvcmdhbml6YXRpb25zTGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZ2FuaXphdGlvbnNMaXN0Q3RybC5vcmdhbml6YXRpb25zID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihvcmdhbml6YXRpb25zTGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vTG9hZCBmcm9tIGNhY2hlIGZvciBxdWljayBkaXNwbGF5IGluaXRpYWxseVxuICAgICAgICAgICAgZ2V0T3JnYW5pemF0aW9ucyhmYWxzZSk7XG5cbiAgICAgICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICAgICAgLy9Eb24ndCBkbyBhdXRvcmVmcmVzaCBpZiBvbmUgaXMgYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKCFhbmd1bGFyLmlzRGVmaW5lZChwcm9taXNlKSkge1xuICAgICAgICAgICAgICAgIHByb21pc2UgPSAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBnZXRPcmdhbml6YXRpb25zKHRydWUpO1xuICAgICAgICAgICAgICAgIH0sIENvbnRpdkdsb2JhbHMuUkVGUkVTSF9JTlRFUlZBTCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vc3RvcCBwb2xsaW5nIHdoZW4gdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcbiAgICAgICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRpbnRlcnZhbC5jYW5jZWwocHJvbWlzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfV0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xMi8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5zZXJ2aWNlbGJzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc2VydmljZWxicy5jcmVhdGUnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2NyZWF0ZScsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzZXJ2aWNlX2xicy9zZXJ2aWNlbGJjcmVhdGUuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1NlcnZpY2VsYkNyZWF0ZUN0cmwgYXMgc2VydmljZWxiQ3JlYXRlQ3RybCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignU2VydmljZWxiQ3JlYXRlQ3RybCcsIFtcbiAgICAgICAgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnU2VydmljZWxic01vZGVsJywgJ05ldHdvcmtzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsIFNlcnZpY2VsYnNNb2RlbCwgTmV0d29ya3NNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBzZXJ2aWNlbGJDcmVhdGVDdHJsID0gdGhpcztcbiAgICAgICAgICAgIHNlcnZpY2VsYkNyZWF0ZUN0cmwubGFiZWxTZWxlY3RvcnMgPSBbXTtcbiAgICAgICAgICAgIHNlcnZpY2VsYkNyZWF0ZUN0cmwubmV0d29ya3MgPSBbXTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9TZXJ2aWNlbGJzKCkge1xuICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUuc2VydmljZWxicy5saXN0Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNhbmNlbENyZWF0aW5nKCkge1xuICAgICAgICAgICAgICAgIHJldHVyblRvU2VydmljZWxicygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdldCBuZXR3b3JrcyBmb3IgdGhlIGdpdmVuIHRlbmFudC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0TmV0d29ya3MoKSB7XG4gICAgICAgICAgICAgICAgTmV0d29ya3NNb2RlbC5nZXQoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZWxiQ3JlYXRlQ3RybC5uZXR3b3JrcyA9IF8uZmlsdGVyKHJlc3VsdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3RlbmFudE5hbWUnOiAnZGVmYXVsdCcvL1RPRE86IFJlbW92ZSBoYXJkY29kZWQgdGVuYW50LlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlTGFiZWxTZWxlY3RvclN0cmluZ3MoKSB7XG4gICAgICAgICAgICAgICAgLy9FbXB0eSBvdXQgdGhlIHNlbGVjdG9ycy4gSW4gY2FzZSBvZiBzZXJ2ZXIgZXJyb3JzIHRoaXMgbmVlZHMgdG8gYmUgcmVzZXQuXG4gICAgICAgICAgICAgICAgc2VydmljZWxiQ3JlYXRlQ3RybC5zZXJ2aWNlbGIuc2VsZWN0b3JzID0gW107XG4gICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHNlcnZpY2VsYkNyZWF0ZUN0cmwubGFiZWxTZWxlY3RvcnMsIGZ1bmN0aW9uKGxhYmVsU2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdG9yU3RyaW5nID0gbGFiZWxTZWxlY3Rvci5uYW1lICsgJz0nICsgbGFiZWxTZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZWxiQ3JlYXRlQ3RybC5zZXJ2aWNlbGIuc2VsZWN0b3JzLnB1c2goc2VsZWN0b3JTdHJpbmcpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVTZXJ2aWNlbGIoKSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlTGFiZWxTZWxlY3RvclN0cmluZ3MoKTtcbiAgICAgICAgICAgICAgICAvL2Zvcm0gY29udHJvbGxlciBpcyBpbmplY3RlZCBieSB0aGUgaHRtbCB0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIC8vY2hlY2tpbmcgaWYgYWxsIHZhbGlkYXRpb25zIGhhdmUgcGFzc2VkXG4gICAgICAgICAgICAgICAgaWYgKHNlcnZpY2VsYkNyZWF0ZUN0cmwuZm9ybS4kdmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKHNlcnZpY2VsYkNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihzZXJ2aWNlbGJDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZWxiQ3JlYXRlQ3RybC5zZXJ2aWNlbGIua2V5ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VsYkNyZWF0ZUN0cmwuc2VydmljZWxiLnRlbmFudE5hbWUgKyAnOicgKyBzZXJ2aWNlbGJDcmVhdGVDdHJsLnNlcnZpY2VsYi5zZXJ2aWNlTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgU2VydmljZWxic01vZGVsLmNyZWF0ZShzZXJ2aWNlbGJDcmVhdGVDdHJsLnNlcnZpY2VsYikudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHNlcnZpY2VsYkNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9TZXJ2aWNlbGJzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHNlcnZpY2VsYkNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKHNlcnZpY2VsYkNyZWF0ZUN0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzZXJ2aWNlbGJDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Ioc2VydmljZWxiQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgc2VydmljZWxiQ3JlYXRlQ3RybC5zZXJ2aWNlbGIgPSB7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2VOYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgbmV0d29ya05hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBpcEFkZHJlc3M6ICcnLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcnM6IFtdLFxuICAgICAgICAgICAgICAgICAgICBwb3J0czogW10sXG4gICAgICAgICAgICAgICAgICAgIHRlbmFudE5hbWU6ICdkZWZhdWx0Jy8vVE9ETzogUmVtb3ZlIGhhcmRjb2RlZCB0ZW5hbnQuXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlcnZpY2VsYkNyZWF0ZUN0cmwuY3JlYXRlU2VydmljZWxiID0gY3JlYXRlU2VydmljZWxiO1xuICAgICAgICAgICAgc2VydmljZWxiQ3JlYXRlQ3RybC5jYW5jZWxDcmVhdGluZyA9IGNhbmNlbENyZWF0aW5nO1xuXG4gICAgICAgICAgICBnZXROZXR3b3JrcygpO1xuICAgICAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xMS8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5zZXJ2aWNlbGJzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc2VydmljZWxicy5kZXRhaWxzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9kZXRhaWxzLzprZXknLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge3N0YXRlOm51bGx9LCAgICAgICAvLyBUbyByZWxvYWQgcGFyZW50IHZpZXcgXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1NlcnZpY2VsYkRldGFpbHNDdHJsIGFzIHNlcnZpY2VsYkRldGFpbHNDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NlcnZpY2VfbGJzL3NlcnZpY2VsYmRldGFpbHMuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnNlcnZpY2VsYnMuZGV0YWlscy5pbmZvJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9pbmZvJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnU2VydmljZWxiRGV0YWlsc0N0cmwgYXMgc2VydmljZWxiRGV0YWlsc0N0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2VydmljZV9sYnMvc2VydmljZWxiaW5mby5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc2VydmljZWxicy5kZXRhaWxzLmVkaXQnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2VkaXQvOmtleScsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1NlcnZpY2VsYkRldGFpbHNDdHJsIGFzIHNlcnZpY2VsYkRldGFpbHNDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NlcnZpY2VfbGJzL3NlcnZpY2VsYmluZm8uaHRtbCdcbiAgICAgICAgICAgIH0pO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdTZXJ2aWNlbGJEZXRhaWxzQ3RybCcsXG4gICAgICAgIFsnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdTZXJ2aWNlbGJzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBTZXJ2aWNlbGJzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlcnZpY2VsYkRldGFpbHNDdHJsID0gdGhpcztcbiAgICAgICAgICAgICAgICBzZXJ2aWNlbGJEZXRhaWxzQ3RybC5sYWJlbFNlbGVjdG9ycyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogVG8gc2hvdyBlZGl0IG9yIGRldGFpbHMgc2NyZWVuIGJhc2VkIG9uIHRoZSByb3V0ZVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNldE1vZGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkc3RhdGUuaXMoJ2NvbnRpdi5tZW51LnNlcnZpY2VsYnMuZGV0YWlscy5lZGl0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VsYkRldGFpbHNDdHJsLm1vZGUgPSAnZWRpdCc7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlbGJEZXRhaWxzQ3RybC5tb2RlID0gJ2RldGFpbHMnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9TZXJ2aWNlbGJzKCkge1xuICAgICAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51LnNlcnZpY2VsYnMubGlzdCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvU2VydmljZWxiRGV0YWlscygpIHtcbiAgICAgICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5zZXJ2aWNlbGJzLmRldGFpbHMuaW5mbycsIHsna2V5Jzogc2VydmljZWxiRGV0YWlsc0N0cmwuc2VydmljZWxiLmtleSwnc3RhdGUnOidkZXRhaWxzJ30pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNhbmNlbEVkaXRpbmcoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblRvU2VydmljZWxiRGV0YWlscygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRlbGV0ZVNlcnZpY2VsYigpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKHNlcnZpY2VsYkRldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIoc2VydmljZWxiRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlbGJzTW9kZWwuZGVsZXRlKHNlcnZpY2VsYkRldGFpbHNDdHJsLnNlcnZpY2VsYikudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHNlcnZpY2VsYkRldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvU2VydmljZWxicygpO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzZXJ2aWNlbGJEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3Ioc2VydmljZWxiRGV0YWlsc0N0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNhdmVTZXJ2aWNlbGIoKSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihzZXJ2aWNlbGJEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKHNlcnZpY2VsYkRldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV4aXN0aW5nTGFiZWxzID0gc2VydmljZWxiRGV0YWlsc0N0cmwuc2VydmljZWxiLnNlbGVjdG9ycztcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlTGFiZWxTZWxlY3RvclN0cmluZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgU2VydmljZWxic01vZGVsLnNhdmUoc2VydmljZWxiRGV0YWlsc0N0cmwuc2VydmljZWxiKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc2VydmljZWxiRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9TZXJ2aWNlbGJEZXRhaWxzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlbGJEZXRhaWxzQ3RybC5zZXJ2aWNlbGIuc2VsZWN0b3JzID0gZXhpc3RpbmdMYWJlbHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVMYWJlbFNlbGVjdG9ycygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzZXJ2aWNlbGJEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3Ioc2VydmljZWxiRGV0YWlsc0N0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUxhYmVsU2VsZWN0b3JzKCkge1xuICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2goc2VydmljZWxiRGV0YWlsc0N0cmwuc2VydmljZWxiLnNlbGVjdG9ycywgZnVuY3Rpb24oc2VsZWN0b3JTdHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RvciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBzZWxlY3RvclN0ci5zcGxpdCgnPScpWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxlY3RvclN0ci5zcGxpdCgnPScpWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZWxiRGV0YWlsc0N0cmwubGFiZWxTZWxlY3RvcnMucHVzaChzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUxhYmVsU2VsZWN0b3JTdHJpbmdzKCkge1xuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlbGJEZXRhaWxzQ3RybC5zZXJ2aWNlbGIuc2VsZWN0b3JzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChzZXJ2aWNlbGJEZXRhaWxzQ3RybC5sYWJlbFNlbGVjdG9ycywgZnVuY3Rpb24obGFiZWxTZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdG9yU3RyaW5nID0gbGFiZWxTZWxlY3Rvci5uYW1lICsgJz0nICsgbGFiZWxTZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VsYkRldGFpbHNDdHJsLnNlcnZpY2VsYi5zZWxlY3RvcnMucHVzaChzZWxlY3RvclN0cmluZyk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzZXJ2aWNlbGJEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKHNlcnZpY2VsYkRldGFpbHNDdHJsKTtcblxuICAgICAgICAgICAgICAgIFNlcnZpY2VsYnNNb2RlbC5nZXRNb2RlbEJ5S2V5KCRzdGF0ZVBhcmFtcy5rZXkpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhzZXJ2aWNlbGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VsYkRldGFpbHNDdHJsLnNlcnZpY2VsYiA9IHNlcnZpY2VsYjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUxhYmVsU2VsZWN0b3JzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgc2VydmljZWxiRGV0YWlsc0N0cmwuc2F2ZVNlcnZpY2VsYiA9IHNhdmVTZXJ2aWNlbGI7XG4gICAgICAgICAgICAgICAgc2VydmljZWxiRGV0YWlsc0N0cmwuY2FuY2VsRWRpdGluZyA9IGNhbmNlbEVkaXRpbmc7XG4gICAgICAgICAgICAgICAgc2VydmljZWxiRGV0YWlsc0N0cmwuZGVsZXRlU2VydmljZWxiID0gZGVsZXRlU2VydmljZWxiO1xuICAgICAgICAgICAgICAgIHNldE1vZGUoKTtcblxuICAgICAgICAgICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzExLzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnNlcnZpY2VsYnMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5zZXJ2aWNlbGJzLmxpc3QnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2xpc3QnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdTZXJ2aWNlbGJMaXN0Q3RybCBhcyBzZXJ2aWNlbGJMaXN0Q3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzZXJ2aWNlX2xicy9zZXJ2aWNlbGJsaXN0Lmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ1NlcnZpY2VsYkxpc3RDdHJsJywgWyckc2NvcGUnLCAnJGludGVydmFsJywgJyRmaWx0ZXInLCAnU2VydmljZWxic01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzY29wZSwgJGludGVydmFsLCAkZmlsdGVyLCBTZXJ2aWNlbGJzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICB2YXIgc2VydmljZWxiTGlzdEN0cmwgPSB0aGlzO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRTZXJ2aWNlbGJzKHJlbG9hZCkge1xuICAgICAgICAgICAgICAgIFNlcnZpY2VsYnNNb2RlbC5nZXQocmVsb2FkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzZXJ2aWNlbGJMaXN0Q3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZWxiTGlzdEN0cmwuc2VydmljZWxicyA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc2VydmljZWxiTGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vTG9hZCBmcm9tIGNhY2hlIGZvciBxdWljayBkaXNwbGF5IGluaXRpYWxseVxuICAgICAgICAgICAgZ2V0U2VydmljZWxicyhmYWxzZSk7XG5cbiAgICAgICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICAgICAgLy9Eb24ndCBkbyBhdXRvcmVmcmVzaCBpZiBvbmUgaXMgYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKCFhbmd1bGFyLmlzRGVmaW5lZChwcm9taXNlKSkge1xuICAgICAgICAgICAgICAgIHByb21pc2UgPSAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBnZXRTZXJ2aWNlbGJzKHRydWUpO1xuICAgICAgICAgICAgICAgIH0sIENvbnRpdkdsb2JhbHMuUkVGUkVTSF9JTlRFUlZBTCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vc3RvcCBwb2xsaW5nIHdoZW4gdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcbiAgICAgICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRpbnRlcnZhbC5jYW5jZWwocHJvbWlzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzEzLzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZShcImNvbnRpdi5zZXJ2aWNlbGJzXCIpXG4gICAgLmRpcmVjdGl2ZShcImN0dlNlcnZpY2VsYnBvcnRzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgIHJldHVybiB7XG4gICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgaXRlbXM6ICc9J1xuICAgICAgICAgICB9LFxuICAgICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSkge1xuICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgKiBDb21wYXJlIGlmIHR3byBpdGVtcyBoYXZlIHNhbWUgcG9ydHMgYW5kIHByb3RvY29sc1xuICAgICAgICAgICAgICAgICogQHBhcmFtIHZhbDFcbiAgICAgICAgICAgICAgICAqIEBwYXJhbSB2YWwyXG4gICAgICAgICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgZnVuY3Rpb24gY29tcGFyZSh2YWwxLCB2YWwyKSB7XG4gICAgICAgICAgICAgICAgICAgcmV0dXJuICh2YWwxID09PSB2YWwyKTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVzZXROZXdJdGVtKCkge1xuICAgICAgICAgICAgICAgICAgIHNjb3BlLm5ld0l0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VQb3J0OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJQb3J0OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgcHJvdG9jb2w6ICcnXG4gICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgZnVuY3Rpb24gaXNFbXB0eUl0ZW0oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgIHJldHVybiAoaXRlbS5zZXJ2aWNlUG9ydCA9PT0gJycgJiYgaXRlbS5wcm92aWRlclBvcnQgPT09ICcnICYmIGl0ZW0ucHJvdG9jb2wgPT09ICcnKTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgc2NvcGUuYWRkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgaWYgKGlzRW1wdHlJdGVtKHNjb3BlLm5ld0l0ZW0pKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgaWYgKHNjb3BlLml0ZW1zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuaXRlbXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgdmFyIG5ld0l0ZW1TdHIgPSBzY29wZS5uZXdJdGVtLnNlcnZpY2VQb3J0ICsgJzonXG4gICAgICAgICAgICAgICAgICAgICAgICsgc2NvcGUubmV3SXRlbS5wcm92aWRlclBvcnQgKyAnOidcbiAgICAgICAgICAgICAgICAgICAgICAgKyBzY29wZS5uZXdJdGVtLnByb3RvY29sO1xuICAgICAgICAgICAgICAgICAgIC8vUmVtb3ZlcyBleGlzdGluZyBpdGVtIHdpdGggdGhlIHNhbWUgdmFsdWUgZmlyc3QgaWYgaXQgZXhpc3RzLlxuICAgICAgICAgICAgICAgICAgIF8ucHVsbEFsbFdpdGgoc2NvcGUuaXRlbXMsIFtuZXdJdGVtU3RyXSwgY29tcGFyZSk7XG4gICAgICAgICAgICAgICAgICAgc2NvcGUuaXRlbXMucHVzaChuZXdJdGVtU3RyKTtcbiAgICAgICAgICAgICAgICAgICByZXNldE5ld0l0ZW0oKTtcbiAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgIHNjb3BlLnJlbW92ZSA9IGZ1bmN0aW9uKHBhc3NlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICBfLnJlbW92ZShzY29wZS5pdGVtcywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmUoaXRlbSwgcGFzc2VkSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgcmVzZXROZXdJdGVtKCk7XG4gICAgICAgICAgIH0sXG4gICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2VydmljZV9sYnMvc2VydmljZWxicG9ydHMuaHRtbCdcbiAgICAgICB9XG4gICAgfSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgY3NoYW1wdXIgb24gNy8xNy8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5zZXJ2aWNlbGJzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc2VydmljZWxicy5kZXRhaWxzLnN0YXRzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9zdGF0cycsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1NlcnZpY2VsYlN0YXRzQ3RybCBhcyBzZXJ2aWNlbGJTdGF0c0N0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2VydmljZV9sYnMvc2VydmljZWxic3RhdHMuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignU2VydmljZWxiU3RhdHNDdHJsJyxcbiAgICAgICAgWyckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJGZpbHRlcicsICdTZXJ2aWNlbGJzTW9kZWwnLCAnSW5zcGVjdFNlcnZpY2UnLFxuICAgICAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkc2NvcGUsICRpbnRlcnZhbCwgJGZpbHRlciwgU2VydmljZWxic01vZGVsLCBJbnNwZWN0U2VydmljZSkge1xuXG4gICAgICAgICAgICAgICAgdmFyIHNlcnZpY2VsYlN0YXRzQ3RybCA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICAvKiBHZXRzIHRoZSBOZXR3b3JrIE9wZXJhdGlvbmFsIHN0YXRlIGZyb20gdGhlIHNlcnZlciAqL1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldFNlcnZpY2VsYkluc3BlY3QocmVmcmVzaCl7XG4gICAgICAgICAgICAgICAgICAgIFNlcnZpY2VsYnNNb2RlbC5nZXRJbnNwZWN0QnlLZXkoJHN0YXRlUGFyYW1zLmtleSwgQ29udGl2R2xvYmFscy5TRVJWSUNFTEJTX0lOU1BFQ1RfRU5EUE9JTlQsIHJlZnJlc2gpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZWxiU3RhdHNDdHJsLnNlcnZpY2VsYkluc3BlY3RTdGF0cyA9IHJlc3VsdC5PcGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VsYlN0YXRzQ3RybC5jb25maWcgPSByZXN1bHQuQ29uZmlnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5PcGVyLnByb3ZpZGVycyE9dW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm92aWRlckRldGFpbHMgPSBJbnNwZWN0U2VydmljZS5idWlsZEVuZFBvaW50cyhyZXN1bHQuT3Blci5wcm92aWRlcnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoSW5zcGVjdFNlcnZpY2UuY2hlY2tDb250YWluZXJDaGFuZ2VkKHNlcnZpY2VsYlN0YXRzQ3RybC5wcm92aWRlckRldGFpbHMsIHByb3ZpZGVyRGV0YWlscykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VsYlN0YXRzQ3RybC5wcm92aWRlcnMgPSByZXN1bHQuT3Blci5wcm92aWRlcnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlbGJTdGF0c0N0cmwucHJvdmlkZXJEZXRhaWxzID0gcHJvdmlkZXJEZXRhaWxzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VsYlN0YXRzQ3RybC5wcm92aWRlcnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZWxiU3RhdHNDdHJsLnByb3ZpZGVyRGV0YWlscyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGdldFNlcnZpY2VsYkluc3BlY3QoZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2U7XG4gICAgICAgICAgICAgICAgLy9Eb24ndCBkbyBhdXRvcmVmcmVzaCBpZiBvbmUgaXMgYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQocHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9ICRpbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRTZXJ2aWNlbGJJbnNwZWN0KHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9LCBDb250aXZHbG9iYWxzLlJFRlJFU0hfSU5URVJWQUwpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vc3RvcCBwb2xsaW5nIHdoZW4gdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJGludGVydmFsLmNhbmNlbChwcm9taXNlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1dKTsiLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2LnNldHRpbmdzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc2V0dGluZ3MuZGV0YWlscy5jbHVzdGVyJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9jbHVzdGVyJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnQ2x1c3RlclNldHRpbmdDdHJsIGFzIGNsdXN0ZXJTZXR0aW5nQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzZXR0aW5ncy9jbHVzdGVyc2V0dGluZ3MuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignQ2x1c3RlclNldHRpbmdDdHJsJywgWyckc3RhdGVQYXJhbXMnLCAnQ1JVREhlbHBlclNlcnZpY2UnLCAnTm9kZXNTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZVBhcmFtcywgQ1JVREhlbHBlclNlcnZpY2UsIE5vZGVzU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIGNsdXN0ZXJTZXR0aW5nQ3RybCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUNsdXN0ZXJTZXR0aW5ncygpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2x1c3RlclNldHRpbmdDdHJsLmZvcm0uJHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihjbHVzdGVyU2V0dGluZ0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihjbHVzdGVyU2V0dGluZ0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBjbHVzdGVyU2V0dGluZ0N0cmwubm9kZU9wc09iai5ub2RlcyA9IFskc3RhdGVQYXJhbXMua2V5XTtcbiAgICAgICAgICAgICAgICAgICAgTm9kZXNTZXJ2aWNlLmNsZWFudXBFeHRyYVZhcnMoY2x1c3RlclNldHRpbmdDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgTm9kZXNTZXJ2aWNlLmNyZWF0ZUV4dHJhVmFycyhjbHVzdGVyU2V0dGluZ0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBOb2Rlc1NlcnZpY2UudXBkYXRlU2V0dGluZ3MoY2x1c3RlclNldHRpbmdDdHJsLm5vZGVPcHNPYmopLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihjbHVzdGVyU2V0dGluZ0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihjbHVzdGVyU2V0dGluZ0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGNsdXN0ZXJTZXR0aW5nQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjbHVzdGVyU2V0dGluZ0N0cmwubm9kZU9wc09iaiA9IHt9O1xuICAgICAgICAgICAgY2x1c3RlclNldHRpbmdDdHJsLmV4dHJhX3ZhcnMgPSB7fTsgLy9UT0RPIEludGlhbGl6ZSBmcm9tIGdsb2JhbCBzZXR0aW5nc1xuICAgICAgICAgICAgY2x1c3RlclNldHRpbmdDdHJsLmFuc2libGVWYXJpYWJsZXMgPSBbXTtcbiAgICAgICAgICAgIGNsdXN0ZXJTZXR0aW5nQ3RybC5lbnZWYXJpYWJsZXMgPSBbXTtcblxuICAgICAgICAgICAgTm9kZXNTZXJ2aWNlLmdldFNldHRpbmdzKGNsdXN0ZXJTZXR0aW5nQ3RybCk7XG5cbiAgICAgICAgICAgIGNsdXN0ZXJTZXR0aW5nQ3RybC51cGRhdGVDbHVzdGVyU2V0dGluZ3MgPSB1cGRhdGVDbHVzdGVyU2V0dGluZ3M7XG5cbiAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoY2x1c3RlclNldHRpbmdDdHJsKTtcbiAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihjbHVzdGVyU2V0dGluZ0N0cmwpO1xuICAgICAgICB9XSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2LnNldHRpbmdzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc2V0dGluZ3MuZGV0YWlscy5uZXR3b3JrcycsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvbmV0d29ya3MnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOZXR3b3JrU2V0dGluZ0N0cmwgYXMgbmV0d29ya1NldHRpbmdDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NldHRpbmdzL25ldHdvcmtzZXR0aW5ncy5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdOZXR3b3JrU2V0dGluZ0N0cmwnLCBbJ0NSVURIZWxwZXJTZXJ2aWNlJywgJ05ldHdvcmtTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKENSVURIZWxwZXJTZXJ2aWNlLCBOZXR3b3JrU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIG5ldHdvcmtTZXR0aW5nQ3RybCA9IHRoaXM7XG4gICAgICAgICAgICBuZXR3b3JrU2V0dGluZ0N0cmwudmxhblBhdHRlcm4gPSBDb250aXZHbG9iYWxzLlZMQU5fUkVHRVg7XG4gICAgICAgICAgICBuZXR3b3JrU2V0dGluZ0N0cmwudnhsYW5QYXR0ZXJuID0gQ29udGl2R2xvYmFscy5WWExBTl9SRUdFWDtcblxuICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlTmV0d29ya1NldHRpbmdzKCkge1xuICAgICAgICAgICAgICAgIGlmIChuZXR3b3JrU2V0dGluZ0N0cmwuZm9ybS4kdmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKG5ldHdvcmtTZXR0aW5nQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKG5ldHdvcmtTZXR0aW5nQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIE5ldHdvcmtTZXJ2aWNlLnVwZGF0ZVNldHRpbmdzKG5ldHdvcmtTZXR0aW5nQ3RybC5zZXR0aW5nKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobmV0d29ya1NldHRpbmdDdHJsKTtcblxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihuZXR3b3JrU2V0dGluZ0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKG5ldHdvcmtTZXR0aW5nQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXROZXR3b3JrU2V0dGluZ3MoKSB7XG4gICAgICAgICAgICAgICAgTmV0d29ya1NlcnZpY2UuZ2V0U2V0dGluZ3MoKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV0d29ya1NldHRpbmdDdHJsLnNldHRpbmcgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdldE5ldHdvcmtTZXR0aW5ncygpO1xuICAgICAgICAgICAgbmV0d29ya1NldHRpbmdDdHJsLnVwZGF0ZU5ldHdvcmtTZXR0aW5ncyA9IHVwZGF0ZU5ldHdvcmtTZXR0aW5ncztcblxuICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihuZXR3b3JrU2V0dGluZ0N0cmwpO1xuICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKG5ldHdvcmtTZXR0aW5nQ3RybCk7XG4gICAgICAgIH1dKTsiLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2LnNldHRpbmdzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc2V0dGluZ3MuZGV0YWlscy52b2x1bWVzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy92b2x1bWVzJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVm9sdW1lU2V0dGluZ0N0cmwgYXMgdm9sdW1lU2V0dGluZ0N0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL3NldHRpbmdzL3ZvbHVtZXNldHRpbmdzLmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ1ZvbHVtZVNldHRpbmdDdHJsJywgWydDUlVESGVscGVyU2VydmljZScsICdWb2x1bWVTZXR0aW5nU2VydmljZScsXG4gICAgICAgIGZ1bmN0aW9uIChDUlVESGVscGVyU2VydmljZSwgVm9sdW1lU2V0dGluZ1NlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciB2b2x1bWVTZXR0aW5nQ3RybCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVZvbHVtZVNldHRpbmdzKCkge1xuICAgICAgICAgICAgICAgIGlmICh2b2x1bWVTZXR0aW5nQ3RybC5mb3JtLiR2YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Iodm9sdW1lU2V0dGluZ0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcih2b2x1bWVTZXR0aW5nQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIFZvbHVtZVNldHRpbmdTZXJ2aWNlLnVwZGF0ZVNldHRpbmdzKHZvbHVtZVNldHRpbmdDdHJsLnNldHRpbmcpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcih2b2x1bWVTZXR0aW5nQ3RybCk7XG5cbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIodm9sdW1lU2V0dGluZ0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKHZvbHVtZVNldHRpbmdDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFZvbHVtZVNldHRpbmdzKCkge1xuICAgICAgICAgICAgICAgIFZvbHVtZVNldHRpbmdTZXJ2aWNlLmdldFNldHRpbmdzKCkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZVNldHRpbmdDdHJsLnNldHRpbmcgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdldFZvbHVtZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB2b2x1bWVTZXR0aW5nQ3RybC51cGRhdGVWb2x1bWVTZXR0aW5ncyA9IHVwZGF0ZVZvbHVtZVNldHRpbmdzO1xuXG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHZvbHVtZVNldHRpbmdDdHJsKTtcbiAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcih2b2x1bWVTZXR0aW5nQ3RybCk7XG4gICAgICAgIH1dKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDYvMS8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5zdG9yYWdlcG9saWNpZXMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5zdG9yYWdlcG9saWNpZXMuY3JlYXRlJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9jcmVhdGUnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc3RvcmFnZV9wb2xpY2llcy9zdG9yYWdlcG9saWN5Y3JlYXRlLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdTdG9yYWdlUG9saWN5Q3JlYXRlQ3RybCBhcyBzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignU3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwnLCBbJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnU3RvcmFnZVBvbGljaWVzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsIFN0b3JhZ2VQb2xpY2llc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIHN0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsID0gdGhpcztcblxuICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9TdG9yYWdlUG9saWNpZXMoKSB7XG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5zdG9yYWdlcG9saWNpZXMubGlzdCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjYW5jZWxDcmVhdGluZygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5Ub1N0b3JhZ2VQb2xpY2llcygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVGaWxlc3lzdGVtQ21kcygpIHtcbiAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybC5maWxlc3lzdGVtY21kcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsLm5ld1N0b3JhZ2VQb2xpY3kuZmlsZXN5c3RlbXNbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVBvbGljeSgpIHtcbiAgICAgICAgICAgICAgICAvL2Zvcm0gY29udHJvbGxlciBpcyBpbmplY3RlZCBieSB0aGUgaHRtbCB0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIC8vY2hlY2tpbmcgaWYgYWxsIHZhbGlkYXRpb25zIGhhdmUgcGFzc2VkXG4gICAgICAgICAgICAgICAgaWYgKHN0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsLmZvcm0uJHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKHN0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlRmlsZXN5c3RlbUNtZHMoKTtcbiAgICAgICAgICAgICAgICAgICAgU3RvcmFnZVBvbGljaWVzTW9kZWwuY3JlYXRlKHN0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsLm5ld1N0b3JhZ2VQb2xpY3kpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9TdG9yYWdlUG9saWNpZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKHN0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHN0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Ioc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsLm5ld1N0b3JhZ2VQb2xpY3kgPSB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBcImJhY2tlbmRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY3J1ZFwiOiBcImNlcGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibW91bnRcIjogXCJjZXBoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNuYXBzaG90XCI6IFwiY2VwaFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwidW5sb2NrZWRcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIFwiZHJpdmVyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicG9vbFwiOiBcInJiZFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlsZXN5c3RlbVwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwicnVudGltZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNuYXBzaG90c1wiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzbmFwc2hvdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcmVxdWVuY3lcIjogXCIzMG1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtlZXBcIjogMjBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJhdGUtbGltaXRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid3JpdGUtaW9wc1wiOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVhZC1pb3BzXCI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3cml0ZS1icHNcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlYWQtYnBzXCI6IDAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiZmlsZXN5c3RlbXNcIjoge31cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybC5jcmVhdGVQb2xpY3kgPSBjcmVhdGVQb2xpY3k7XG4gICAgICAgICAgICBzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybC5jYW5jZWxDcmVhdGluZyA9IGNhbmNlbENyZWF0aW5nO1xuICAgICAgICAgICAgc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwuZmlsZXN5c3RlbWNtZHMgPSBbXTtcblxuICAgICAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8yNy8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5zdG9yYWdlcG9saWNpZXMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5zdG9yYWdlcG9saWNpZXMuZGV0YWlscycsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZGV0YWlscy86a2V5JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnU3RvcmFnZVBvbGljeURldGFpbHNDdHJsIGFzIHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzdG9yYWdlX3BvbGljaWVzL3N0b3JhZ2Vwb2xpY3lkZXRhaWxzLmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5zdG9yYWdlcG9saWNpZXMuZWRpdCcsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZGV0YWlscy86a2V5JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnU3RvcmFnZVBvbGljeURldGFpbHNDdHJsIGFzIHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzdG9yYWdlX3BvbGljaWVzL3N0b3JhZ2Vwb2xpY3lkZXRhaWxzLmh0bWwnXG4gICAgICAgICAgICB9KTtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignU3RvcmFnZVBvbGljeURldGFpbHNDdHJsJyxcbiAgICAgICAgWyckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJGZpbHRlcicsICdTdG9yYWdlUG9saWNpZXNNb2RlbCcsICdWb2x1bWVzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkc2NvcGUsICRpbnRlcnZhbCwgJGZpbHRlciwgU3RvcmFnZVBvbGljaWVzTW9kZWwsIFZvbHVtZXNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RvcmFnZVBvbGljeURldGFpbHNDdHJsID0gdGhpcztcbiAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwuZmlsZXN5c3RlbWNtZHMgPSBbXTtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFRvIHNob3cgZWRpdCBvciBkZXRhaWxzIHNjcmVlbiBiYXNlZCBvbiB0aGUgcm91dGVcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzZXRNb2RlKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJHN0YXRlLmlzKCdjb250aXYubWVudS5zdG9yYWdlcG9saWNpZXMuZWRpdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwubW9kZSA9ICdlZGl0JztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5tb2RlID0gJ2RldGFpbHMnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9Qb2xpY2llcygpIHtcbiAgICAgICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5zdG9yYWdlcG9saWNpZXMubGlzdCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvUG9saWN5RGV0YWlscygpIHtcbiAgICAgICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5zdG9yYWdlcG9saWNpZXMuZGV0YWlscycsIHsna2V5Jzogc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLnBvbGljeS5uYW1lfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY2FuY2VsRWRpdGluZygpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9Qb2xpY3lEZXRhaWxzKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZGVsZXRlUG9saWN5KCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Ioc3RvcmFnZVBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIoc3RvcmFnZVBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgU3RvcmFnZVBvbGljaWVzTW9kZWwuZGVsZXRlVXNpbmdLZXkoc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLnBvbGljeS5uYW1lLCAnbmFtZScpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvUG9saWNpZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBHZXQgdm9sdW1lcyBiZWxvbmdpbmcgdG8gYSBwb2xpY3lcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRWb2x1bWVzKHJlbG9hZCkge1xuICAgICAgICAgICAgICAgICAgICBWb2x1bWVzTW9kZWwuZ2V0KHJlbG9hZCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwudm9sdW1lcyA9ICRmaWx0ZXIoJ29yZGVyQnknKShfLmZpbHRlcihyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncG9saWN5Jzogc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLnBvbGljeS5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgJ25hbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaW5pdGlhbGl6ZUZpbGVzeXN0ZW1DbWRzQXJyYXkoKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwucG9saWN5LmZpbGVzeXN0ZW1zLCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1c2goe25hbWU6IGtleSwgdmFsdWU6IHZhbHVlfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5maWxlc3lzdGVtY21kcyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlRmlsZXN5c3RlbUNtZHMoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5maWxlc3lzdGVtY21kcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwucG9saWN5LmZpbGVzeXN0ZW1zW2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzYXZlUG9saWN5KCkge1xuICAgICAgICAgICAgICAgICAgICAvL2Zvcm0gY29udHJvbGxlciBpcyBpbmplY3RlZCBieSB0aGUgaHRtbCB0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAvL2NoZWNraW5nIGlmIGFsbCB2YWxpZGF0aW9ucyBoYXZlIHBhc3NlZFxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLmZvcm0uJHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Ioc3RvcmFnZVBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVGaWxlc3lzdGVtQ21kcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgU3RvcmFnZVBvbGljaWVzTW9kZWwuc2F2ZShzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwucG9saWN5KS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9Qb2xpY3lEZXRhaWxzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc3RvcmFnZVBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3Ioc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCk7XG5cbiAgICAgICAgICAgICAgICBTdG9yYWdlUG9saWNpZXNNb2RlbC5nZXRNb2RlbEJ5S2V5KCRzdGF0ZVBhcmFtcy5rZXksIGZhbHNlLCAnbmFtZScpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChwb2xpY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5wb2xpY3kgPSBwb2xpY3k7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsaXplRmlsZXN5c3RlbUNtZHNBcnJheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9nZXRWb2x1bWVzKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5kZWxldGVQb2xpY3kgPSBkZWxldGVQb2xpY3k7XG4gICAgICAgICAgICAgICAgc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLnNhdmVQb2xpY3kgPSBzYXZlUG9saWN5O1xuICAgICAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5jYW5jZWxFZGl0aW5nID0gY2FuY2VsRWRpdGluZztcblxuICAgICAgICAgICAgICAgIHNldE1vZGUoKTtcblxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICAgICAgICAgIC8vRG9uJ3QgZG8gYXV0b3JlZnJlc2ggaWYgb25lIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICBpZiAoIWFuZ3VsYXIuaXNEZWZpbmVkKHByb21pc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9nZXRWb2x1bWVzKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9LCBDb250aXZHbG9iYWxzLlJFRlJFU0hfSU5URVJWQUwpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vc3RvcCBwb2xsaW5nIHdoZW4gdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJGludGVydmFsLmNhbmNlbChwcm9taXNlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNi8yLzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZShcImNvbnRpdi5zdG9yYWdlcG9saWNpZXNcIilcbiAgICAuZGlyZWN0aXZlKFwiY3R2U3RvcmFnZXBvbGljeWJhc2ljc2V0dGluZ3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG5cbiAgICAgICAgfVxuICAgIH0pXG4gICAgLmRpcmVjdGl2ZShcImN0dlN0b3JhZ2Vwb2xpY3lmaWxlc3lzdGVtc2V0dGluZ3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgICBwb2xpY3k6ICc9JyxcbiAgICAgICAgICAgICAgICBmaWxlc3lzdGVtY21kczogJz0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUpIHtcbiAgICAgICAgICAgICAgICBzY29wZS5maWxlc3lzdGVtcyA9IFsnZXh0NCcsICdidHJmcyddO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc3RvcmFnZV9wb2xpY2llcy9maWxlc3lzdGVtc2V0dGluZ3MuaHRtbCdcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLmRpcmVjdGl2ZShcImN0dlN0b3JhZ2Vwb2xpY3lzbmFwc2hvdHNldHRpbmdzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgcG9saWN5OiAnPSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3N0b3JhZ2VfcG9saWNpZXMvc25hcHNob3RzZXR0aW5ncy5odG1sJ1xuICAgICAgICB9XG4gICAgfSlcbiAgICAuZGlyZWN0aXZlKFwiY3R2U3RvcmFnZXBvbGljeXJ3b3Bzc2V0dGluZ3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgICBwb2xpY3k6ICc9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc3RvcmFnZV9wb2xpY2llcy9yd29wc3NldHRpbmdzLmh0bWwnXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC5kaXJlY3RpdmUoXCJjdHZTdG9yYWdlcG9saWN5YmFja2VuZGRyaXZlcnNcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgICBwb2xpY3k6ICc9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc3RvcmFnZV9wb2xpY2llcy9iYWNrZW5kZHJpdmVycy5odG1sJ1xuICAgICAgICB9XG4gICAgfSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDQvMTgvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuc3RvcmFnZXBvbGljaWVzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc3RvcmFnZXBvbGljaWVzLmxpc3QnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2xpc3QnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdTdG9yYWdlUG9saWN5TGlzdEN0cmwgYXMgc3RvcmFnZVBvbGljeUxpc3RDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3N0b3JhZ2VfcG9saWNpZXMvc3RvcmFnZXBvbGljeWxpc3QuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignU3RvcmFnZVBvbGljeUxpc3RDdHJsJywgWyckc2NvcGUnLCAnJGludGVydmFsJywgJyRmaWx0ZXInLCAnU3RvcmFnZVBvbGljaWVzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkaW50ZXJ2YWwsICRmaWx0ZXIsIFN0b3JhZ2VQb2xpY2llc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIHN0b3JhZ2VQb2xpY3lMaXN0Q3RybCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFBvbGljaWVzKHJlbG9hZCkge1xuICAgICAgICAgICAgICAgIFN0b3JhZ2VQb2xpY2llc01vZGVsLmdldChyZWxvYWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc3RvcmFnZVBvbGljeUxpc3RDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lMaXN0Q3RybC5wb2xpY2llcyA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc3RvcmFnZVBvbGljeUxpc3RDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vTG9hZCBmcm9tIGNhY2hlIGZvciBxdWljayBkaXNwbGF5IGluaXRpYWxseVxuICAgICAgICAgICAgZ2V0UG9saWNpZXMoZmFsc2UpO1xuXG4gICAgICAgICAgICB2YXIgcHJvbWlzZTtcbiAgICAgICAgICAgIC8vRG9uJ3QgZG8gYXV0by1yZWZyZXNoIGlmIG9uZSBpcyBhbHJlYWR5IGluIHByb2dyZXNzXG4gICAgICAgICAgICBpZiAoIWFuZ3VsYXIuaXNEZWZpbmVkKHByb21pc2UpKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZSA9ICRpbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGdldFBvbGljaWVzKHRydWUpO1xuICAgICAgICAgICAgICAgIH0sIENvbnRpdkdsb2JhbHMuUkVGUkVTSF9JTlRFUlZBTCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL3N0b3AgcG9sbGluZyB3aGVuIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXG4gICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHByb21pc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1dKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDYvMy8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi52b2x1bWVzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUudm9sdW1lcy5jcmVhdGUnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2NyZWF0ZScsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd2b2x1bWVzL3ZvbHVtZWNyZWF0ZS5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVm9sdW1lQ3JlYXRlQ3RybCBhcyB2b2x1bWVDcmVhdGVDdHJsJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdWb2x1bWVDcmVhdGVDdHJsJywgWyckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ1ZvbHVtZXNNb2RlbCcsICdTdG9yYWdlUG9saWNpZXNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsXG4gICAgICAgIGZ1bmN0aW9uICgkc3RhdGUsICRzdGF0ZVBhcmFtcywgVm9sdW1lc01vZGVsLCBTdG9yYWdlUG9saWNpZXNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciB2b2x1bWVDcmVhdGVDdHJsID0gdGhpcztcbiAgICAgICAgICAgIHZvbHVtZUNyZWF0ZUN0cmwuZmlsZXN5c3RlbXMgPSBbJ2V4dDQnLCAnYnRyZnMnXTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9Wb2x1bWVzTW9kZWwoKSB7XG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS52b2x1bWVzLmxpc3QnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY2FuY2VsQ3JlYXRpbmcoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVG9Wb2x1bWVzTW9kZWwoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXQgc3RvcmFnZSBwb2xpY2llcy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0U3RvcmFnZVBvbGljaWVzKCkge1xuICAgICAgICAgICAgICAgIFN0b3JhZ2VQb2xpY2llc01vZGVsLmdldCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICB2b2x1bWVDcmVhdGVDdHJsLnBvbGljaWVzID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBhcHBseVBvbGljeVNldHRpbmdzKCkge1xuICAgICAgICAgICAgICAgIHZvbHVtZUNyZWF0ZUN0cmwubmV3Vm9sdW1lLnBvbGljeSA9IHZvbHVtZUNyZWF0ZUN0cmwuc2VsZWN0ZWRQb2xpY3kubmFtZTtcbiAgICAgICAgICAgICAgICB2b2x1bWVDcmVhdGVDdHJsLm5ld1ZvbHVtZS5iYWNrZW5kcyA9IHZvbHVtZUNyZWF0ZUN0cmwuc2VsZWN0ZWRQb2xpY3kuYmFja2VuZHM7XG4gICAgICAgICAgICAgICAgdm9sdW1lQ3JlYXRlQ3RybC5uZXdWb2x1bWUuZHJpdmVyID0gdm9sdW1lQ3JlYXRlQ3RybC5zZWxlY3RlZFBvbGljeS5kcml2ZXI7XG4gICAgICAgICAgICAgICAgdm9sdW1lQ3JlYXRlQ3RybC5uZXdWb2x1bWUuY3JlYXRlID0gdm9sdW1lQ3JlYXRlQ3RybC5zZWxlY3RlZFBvbGljeS5jcmVhdGU7XG4gICAgICAgICAgICAgICAgdm9sdW1lQ3JlYXRlQ3RybC5uZXdWb2x1bWUucnVudGltZSA9IHZvbHVtZUNyZWF0ZUN0cmwuc2VsZWN0ZWRQb2xpY3kucnVudGltZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlVm9sdW1lKCkge1xuICAgICAgICAgICAgICAgIC8vZm9ybSBjb250cm9sbGVyIGlzIGluamVjdGVkIGJ5IHRoZSBodG1sIHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgLy9jaGVja2luZyBpZiBhbGwgdmFsaWRhdGlvbnMgaGF2ZSBwYXNzZWRcbiAgICAgICAgICAgICAgICBpZiAodm9sdW1lQ3JlYXRlQ3RybC5mb3JtLiR2YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Iodm9sdW1lQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKHZvbHVtZUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBhcHBseVBvbGljeVNldHRpbmdzKCk7XG4gICAgICAgICAgICAgICAgICAgIFZvbHVtZXNNb2RlbC5jcmVhdGUodm9sdW1lQ3JlYXRlQ3RybC5uZXdWb2x1bWUpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcih2b2x1bWVDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvVm9sdW1lc01vZGVsKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHZvbHVtZUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKHZvbHVtZUNyZWF0ZUN0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcih2b2x1bWVDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Iodm9sdW1lQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgdm9sdW1lQ3JlYXRlQ3RybC5uZXdWb2x1bWUgPSB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBcImJhY2tlbmRzXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICBcImRyaXZlclwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVcIjoge30sXG4gICAgICAgICAgICAgICAgICAgIFwicnVudGltZVwiOiB7fVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZvbHVtZUNyZWF0ZUN0cmwuY3JlYXRlVm9sdW1lID0gY3JlYXRlVm9sdW1lO1xuICAgICAgICAgICAgdm9sdW1lQ3JlYXRlQ3RybC5jYW5jZWxDcmVhdGluZyA9IGNhbmNlbENyZWF0aW5nO1xuXG4gICAgICAgICAgICBnZXRTdG9yYWdlUG9saWNpZXMoKTtcblxuICAgICAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNC8xNS8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi52b2x1bWVzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUudm9sdW1lcy5kZXRhaWxzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9kZXRhaWxzLzprZXknLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdWb2x1bWVEZXRhaWxzQ3RybCBhcyB2b2x1bWVEZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd2b2x1bWVzL3ZvbHVtZWRldGFpbHMuaHRtbCdcbiAgICAgICAgICAgIH0pO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdWb2x1bWVEZXRhaWxzQ3RybCcsXG4gICAgICAgIFsnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICckc2NvcGUnLCAnJGludGVydmFsJywgJyRodHRwJywgJ1ZvbHVtZXNNb2RlbCcsICdWb2x1bWVTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkc2NvcGUsICRpbnRlcnZhbCwgJGh0dHAsIFZvbHVtZXNNb2RlbCwgVm9sdW1lU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIHZvbHVtZURldGFpbHNDdHJsID0gdGhpcztcblxuICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9Wb2x1bWVzKCkge1xuICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUudm9sdW1lcy5saXN0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBkZWxldGVWb2x1bWUoKSB7XG4gICAgICAgICAgICAgICAgVm9sdW1lc01vZGVsLmRlbGV0ZSh2b2x1bWVEZXRhaWxzQ3RybC52b2x1bWUpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub1ZvbHVtZXMoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Vm9sdW1lSW5mbyhyZWxvYWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdG9rZW5zID0gJHN0YXRlUGFyYW1zLmtleS5zcGxpdCgnLycpO1xuICAgICAgICAgICAgICAgIHZhciBtb2RlbCA9e307XG4gICAgICAgICAgICAgICAgbW9kZWwucG9saWN5ID0gdG9rZW5zWzBdO1xuICAgICAgICAgICAgICAgIG1vZGVsLm5hbWUgPSB0b2tlbnNbMV07XG4gICAgICAgICAgICAgICAgVm9sdW1lc01vZGVsLmdldE1vZGVsKG1vZGVsLCByZWxvYWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh2b2x1bWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZvbHVtZURldGFpbHNDdHJsLnZvbHVtZSA9IHZvbHVtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFZvbHVtZVVzZUluZm8oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFZvbHVtZVNuYXBzaG90cygpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Vm9sdW1lVXNlSW5mbygpIHtcbiAgICAgICAgICAgICAgICBWb2x1bWVTZXJ2aWNlLmdldFZvbHVtZVVzZUluZm8odm9sdW1lRGV0YWlsc0N0cmwudm9sdW1lKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lRGV0YWlsc0N0cmwudm9sdW1lVXNlID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vUmV0dXJucyBlcnJvciBpZiB2b2x1bWUgaXMgbm90IG1vdW50ZWQgYnkgYW55IGNvbnRhaW5lclxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRWb2x1bWVTbmFwc2hvdHMoKSB7XG4gICAgICAgICAgICAgICAgVm9sdW1lU2VydmljZS5nZXRWb2x1bWVTbmFwc2hvdHModm9sdW1lRGV0YWlsc0N0cmwudm9sdW1lKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lRGV0YWlsc0N0cmwuc25hcHNob3RzID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY29weVNuYXBzaG90KHNuYXBzaG90LCBuZXdWb2x1bWUpIHtcbiAgICAgICAgICAgICAgICBWb2x1bWVzTW9kZWwuY29weShtb2RlbCwgc25hcHNob3QsIG5ld1ZvbHVtZSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdm9sdW1lRGV0YWlsc0N0cmwuZGVsZXRlVm9sdW1lID0gZGVsZXRlVm9sdW1lO1xuICAgICAgICAgICAgdm9sdW1lRGV0YWlsc0N0cmwuY29weVNuYXBzaG90ID0gY29weVNuYXBzaG90O1xuXG4gICAgICAgICAgICAvL0xvYWQgZnJvbSBjYWNoZSBmb3IgcXVpY2sgZGlzcGxheSBpbml0aWFsbHlcbiAgICAgICAgICAgIGdldFZvbHVtZUluZm8oZmFsc2UpO1xuXG4gICAgICAgICAgICB2YXIgcHJvbWlzZTtcbiAgICAgICAgICAgIC8vRG9uJ3QgZG8gYXV0by1yZWZyZXNoIGlmIG9uZSBpcyBhbHJlYWR5IGluIHByb2dyZXNzXG4gICAgICAgICAgICBpZiAoIWFuZ3VsYXIuaXNEZWZpbmVkKHByb21pc2UpKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZSA9ICRpbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGdldFZvbHVtZUluZm8odHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSwgQ29udGl2R2xvYmFscy5SRUZSRVNIX0lOVEVSVkFMKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vc3RvcCBwb2xsaW5nIHdoZW4gdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcbiAgICAgICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRpbnRlcnZhbC5jYW5jZWwocHJvbWlzZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzIyLzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnZvbHVtZXMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS52b2x1bWVzLmxpc3QnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2xpc3QnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdWb2x1bWVMaXN0Q3RybCBhcyB2b2x1bWVMaXN0Q3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd2b2x1bWVzL3ZvbHVtZWxpc3QuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignVm9sdW1lTGlzdEN0cmwnLCBbJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJGZpbHRlcicsICdWb2x1bWVzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkaW50ZXJ2YWwsICRmaWx0ZXIsIFZvbHVtZXNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciB2b2x1bWVMaXN0Q3RybCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFZvbHVtZXMocmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgVm9sdW1lc01vZGVsLmdldChyZWxvYWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIodm9sdW1lTGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdm9sdW1lTGlzdEN0cmwudm9sdW1lcyA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIodm9sdW1lTGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9Mb2FkIGZyb20gY2FjaGUgZm9yIHF1aWNrIGRpc3BsYXkgaW5pdGlhbGx5XG4gICAgICAgICAgICBnZXRWb2x1bWVzKGZhbHNlKTtcblxuICAgICAgICAgICAgdmFyIHByb21pc2U7XG4gICAgICAgICAgICAvL0Rvbid0IGRvIGF1dG8tcmVmcmVzaCBpZiBvbmUgaXMgYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKCFhbmd1bGFyLmlzRGVmaW5lZChwcm9taXNlKSkge1xuICAgICAgICAgICAgICAgIHByb21pc2UgPSAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBnZXRWb2x1bWVzKHRydWUpO1xuICAgICAgICAgICAgICAgIH0sIENvbnRpdkdsb2JhbHMuUkVGUkVTSF9JTlRFUlZBTCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL3N0b3AgcG9sbGluZyB3aGVuIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXG4gICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHByb21pc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNi81LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnZvbHVtZXMnKVxuICAgIC5mYWN0b3J5KCdWb2x1bWVTZXJ2aWNlJywgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcbiAgICAgICAgZnVuY3Rpb24gZ2V0Vm9sdW1lVXNlSW5mbyh2b2x1bWUpIHtcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICAgICB2YXIgdXJsID0gQ29udGl2R2xvYmFscy5WT0xVTUVTX1VTRVNfRU5EUE9JTlRcbiAgICAgICAgICAgICAgICArIHZvbHVtZS5wb2xpY3lcbiAgICAgICAgICAgICAgICArICcvJyArIHZvbHVtZS5uYW1lO1xuICAgICAgICAgICAgJGh0dHAuZ2V0KHVybCkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIC8vUmV0dXJucyBlcnJvciBpZiB2b2x1bWUgaXMgbm90IG1vdW50ZWQgYnkgYW55IGNvbnRhaW5lclxuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0Vm9sdW1lU25hcHNob3RzKHZvbHVtZSkge1xuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICAgICAgIHZhciB1cmwgPSBDb250aXZHbG9iYWxzLlZPTFVNRVNfU05BUFNIT1RTX0VORFBPSU5UXG4gICAgICAgICAgICAgICAgKyB2b2x1bWUucG9saWN5XG4gICAgICAgICAgICAgICAgKyAnLycgKyB2b2x1bWUubmFtZTtcbiAgICAgICAgICAgICRodHRwLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXRWb2x1bWVVc2VJbmZvOiBnZXRWb2x1bWVVc2VJbmZvLFxuICAgICAgICAgICAgZ2V0Vm9sdW1lU25hcHNob3RzOiBnZXRWb2x1bWVTbmFwc2hvdHNcbiAgICAgICAgfVxuICAgIH1dKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgY3NoYW1wdXIgb24gNy8xLzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZShcImNvbnRpdi5kaXJlY3RpdmVzXCIpXG4gICAgLmRpcmVjdGl2ZShcImN0dkFjY29yZGlvblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6ICc9JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5rOmZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50KXtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgZWxlbWVudC5maW5kKCcudWkuYWNjb3JkaW9uJykuYWNjb3JkaW9uID09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZmluZCgnLnVpLmFjY29yZGlvbicpLmFjY29yZGlvbigpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9kaXJlY3RpdmVzL2FjY29yZGlvbi5odG1sJ1xuICAgICAgICB9XG4gICAgfSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA2LzIvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKFwiY29udGl2LmRpcmVjdGl2ZXNcIilcbiAgICAuZGlyZWN0aXZlKFwiY3R2Q29sbGFwc2libGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdAJyxcbiAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6ICdAJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2NvcGUuY29sbGFwc2VkID09PSB1bmRlZmluZWQpIHNjb3BlLmNvbGxhcHNlZCA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2RpcmVjdGl2ZXMvY29sbGFwc2libGUuaHRtbCdcbiAgICAgICAgfVxuICAgIH0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA0LzI4LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZShcImNvbnRpdi5kaXJlY3RpdmVzXCIpXG4gICAgLmRpcmVjdGl2ZShcImN0dkVycm9yXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgIGhlYWRlcjogJ0AnLFxuICAgICAgICAgICAgICAgIGVycm9yOiAnPSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHIpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmZpbmQoJ2knKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcygnbmctaGlkZScpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2RpcmVjdGl2ZXMvZXJyb3JtZXNzYWdlLmh0bWwnXG4gICAgICAgIH1cbiAgICB9KTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTEvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKFwiY29udGl2LmRpcmVjdGl2ZXNcIilcbiAgICAuZGlyZWN0aXZlKFwiY3R2TmFtZXZhbHVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgIHJldHVybiB7XG4gICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICBpdGVtczogJz0nLFxuICAgICAgICAgICAgICAgbmFtZWhlYWRlcjogJ0AnLC8vRmllbGQgbmFtZSB0byBkaXNwbGF5IGZvciBrZXlcbiAgICAgICAgICAgICAgIHZhbHVlaGVhZGVyOiAnQCcsLy9GaWVsZCBuYW1lIHRvIGRpc3BsYXkgZm9yIHZhbHVlXG4gICAgICAgICAgICAgICB0eXBlOiAnQCcsLy8ndGV4dCcgb3IgJ3NlbGVjdCcgdG8gY2hvb3NlIGlucHV0IG9yIHNlbGVjdCBodG1sIHRhZyBmb3Iga2V5XG4gICAgICAgICAgICAgICBvcHRpb25zOiAnPScvL1RvIGJlIHVzZWQgd2hlbiB0eXBlIGlzICdzZWxlY3QnXG4gICAgICAgICAgIH0sXG4gICAgICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlKSB7XG4gICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAqIENvbXBhcmUgaWYgdHdvIGl0ZW1zIGhhdmUgc2FtZSBuYW1lXG4gICAgICAgICAgICAgICAgKiBAcGFyYW0gdmFsMVxuICAgICAgICAgICAgICAgICogQHBhcmFtIHZhbDJcbiAgICAgICAgICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICBmdW5jdGlvbiBjb21wYXJlKHZhbDEsIHZhbDIpIHtcbiAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsMS5uYW1lID09IHZhbDIubmFtZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVzZXROZXdJdGVtKCkge1xuICAgICAgICAgICAgICAgICAgIHNjb3BlLm5ld0l0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICBmdW5jdGlvbiBpc0VtcHR5SXRlbShpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgcmV0dXJuIChpdGVtLm5hbWUgPT09ICcnICYmIGl0ZW0udmFsdWUgPT09ICcnKTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgc2NvcGUuYWRkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgaWYgKGlzRW1wdHlJdGVtKHNjb3BlLm5ld0l0ZW0pKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgaWYgKHNjb3BlLml0ZW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5pdGVtID0gW107XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIC8vUmVtb3ZlcyBleGlzdGluZyBpdGVtIHdpdGggdGhlIHNhbWUgbmFtZSBmaXJzdCBpZiBpdCBleGlzdHMuXG4gICAgICAgICAgICAgICAgICAgXy5wdWxsQWxsV2l0aChzY29wZS5pdGVtcywgW3Njb3BlLm5ld0l0ZW1dLCBjb21wYXJlKTtcbiAgICAgICAgICAgICAgICAgICBzY29wZS5pdGVtcy5wdXNoKHNjb3BlLm5ld0l0ZW0pO1xuICAgICAgICAgICAgICAgICAgIHJlc2V0TmV3SXRlbSgpO1xuICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgc2NvcGUucmVtb3ZlID0gZnVuY3Rpb24ocGFzc2VkSXRlbSkge1xuICAgICAgICAgICAgICAgICAgIF8ucmVtb3ZlKHNjb3BlLml0ZW1zLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5uYW1lID09IHBhc3NlZEl0ZW0ubmFtZTtcbiAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICByZXNldE5ld0l0ZW0oKTtcblxuICAgICAgICAgICAgICAgaWYgKHNjb3BlLm5hbWVoZWFkZXIgPT09IHVuZGVmaW5lZCkgc2NvcGUubmFtZWhlYWRlciA9ICdOYW1lJztcbiAgICAgICAgICAgICAgIGlmIChzY29wZS52YWx1ZWhlYWRlciA9PT0gdW5kZWZpbmVkKSBzY29wZS52YWx1ZWhlYWRlciA9ICdWYWx1ZSc7XG4gICAgICAgICAgICAgICBpZiAoc2NvcGUudHlwZSA9PT0gdW5kZWZpbmVkKSBzY29wZS50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICB9LFxuICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvZGlyZWN0aXZlcy9uYW1ldmFsdWUuaHRtbCdcbiAgICAgICB9XG4gICAgfSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvNC8xNi5cbiAqL1xuXG4vKlxuRGlyZWN0aXZlIFVzYWdlIDpcblxuYSkgY3R2VGFibGUgLVxuICAgdXNhZ2UgOiA8Y3R2LXRhYmxlIGRlZmF1bHRzb3J0Y29sdW1uPSduYW1lJyBpdGVtcz0ndGFibGVJdGVtcycgZmlsdGVyZWRpdGVtcz0nZmlsdEl0ZW1zJyBzaXplPSdzaXplJz48L2N0di10YWJsZT5cbiAgIGF0dHJpYnV0ZSBkZXRhaWxzIDogIGRlZmF1bHRzb3J0Y29sdW1uIC0gVGhlIGRlZmF1bHQgY29sdW1uIG5hbWUoY29ycmVzcG9uZGluZyBrZXkgaW5zaWRlIHRoZSBvYmplY3Qgb2YgaXRlbXMgYXJyYXkpIG9uIHdoaWNoIHRoZSB0YWJsZSB3aWxsIGJlIHNvcnRlZCB3aGVuIGl0IGlzIGxvYWRlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zIC0gQW4gYXJyYXkgb2Ygb2JqZWN0cyB3aGljaCB3aWxsIGJlIGRpc3BsYXllZCBieSB0aGUgY3R2LXRhYmxlIGRpcmVjdGl2ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemUgLSBudW1iZXIgb2Ygcm93cyB0byBiZSBkaXNwbGF5ZWQgaW5zaWRlIHRoZSB0YWJsZS4gSWYgaXRlbXMubGVuZ3RoID4gc2l6ZSB0aGVuIHJlbWFpbmluZyBpdGVtc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbGwgYmUgZGlzcGxheWVkIGluIG5leHQgcGFnZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkaXRlbXMgLSBUaGlzIGlzIGFuIG91dHB1dCBmaWVsZCB3aGljaCBwcm9kdWNlcyBhIGZpbHRlcmVkIHN1YnNldCBvZiBpdGVtcyBzcGVjZWZpZWQgYnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgcHJldmlvdXMgYXR0cmlidXRlLCBJdGVtcyBhcmUgZmlsdGVyZWQgYmFzZWQgb24gc2VhcmNoIHRleHQgZGVmaW5lZCBpbnNpZGUgY3R2LXNlYXJjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgYnkgdGhlIHNpemUgbWVudGlvbmVkIGluIHRoZSBjdHYtdGFibGUgYXR0cmlidXRlXG5iKSBjdHZUSCAtXG4gICB1c2FnZSA6IDxjdHYtdGggc29ydGZpZWxkPSduYW1lJz5uYW1lPC9jdHYtdGg+XG4gICBhdHRyaWJ1dGUgZGV0YWlscyA6IHNvcnRmaWVsZCAtIFRoaXMgaXMgdGhlIGtleSBvZiB0aGUgb2JqZWN0IHByZXNlbnQgaW5zaWRlIGl0ZW1zIGFycmF5IHNwZWNlZmllZCBpbiBjdHZUYWJsZSwgZm9yIGVnIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgdGhlIGFycmF5IG9iamVjdCBpcyA6IFt7aXA6IFwiMjAuMS4yLjNcIiwgaG9zdDogXCJjbHVzdGVyLTFcIn0se2lwOiBcIjIwLjEuMi40XCIsIGhvc3Q6IFwiY2x1c3Rlci0yXCJ9XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVuIGRpcmVjdGl2ZSB3aWxsIGJlIDxjdHYtdGggc29ydGZpZWxkPVwiJ2lwJ1wiPiBJcCBBZGRyZXNzIDwvY3R2LXRoPlxuICAgVGFibGUgY2FuIG9ubHkgYmUgc29ydGVkIG9uIGNvbHVtbnMgd2hpY2ggaGFzIHNvcnRmaWVsZCBhdHRyaWJ1dGUgc3BlY2VmaWVkLlxuXG5jKSBjdHZUc2VhcmNoIC1cbiAgIHVzYWdlIDogPGN0di10c2VhcmNoIHBsYWNlaG9sZGVyPSdTZWFyY2gnIHNpemU9JzMwJz48L2N0di10c2VhcmNoPlxuICAgYXR0cmlidXRlIGRldGFpbHMgOiBwbGFjZWhvbGRlciAtIHNwZWNpZnkgdGhlIHBsYWNlaG9sZGVyIGZvciB0aGUgaW5wdXQgdGV4dCBmaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICBzaXplIC0gc3BlY2lmeSB0aGUgbWF4aW11bSBsZW5ndGggb2YgdGhlIHNlYXJjaCBzdHJpbmdcbiAgIE9ubHkgaXRlbXMgbWF0Y2hpbmcgdGhlIHNlYXJjaCBzdHJpbmcgYXJlIGRpc3BsYXllZCBpbnNpZGUgdGhlIHRhYmxlLlxuXG5kKSBjdHZUcGFnaW5hdGlvbiAtXG4gICB1c2FnZSA6IDxjdHYtdHBhZ2luYXRpb24+PC9jdHYtdHBhZ2luYXRpb24+XG4gICBQcm92aWRlcyBsaW5rIGZvciBtb3ZpbmcgYmFjayBhbmQgZm9ydGggb2YgdGhlIHJlc3VsdCBwYWdlLlxuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKFwiY29udGl2LmRpcmVjdGl2ZXNcIilcbiAgICAuZGlyZWN0aXZlKFwiY3R2VGFibGVcIiwgWydmaWx0ZXJGaWx0ZXInLCAnbGltaXRUb0ZpbHRlcicsIGZ1bmN0aW9uIChmaWx0ZXJGaWx0ZXIsIGxpbWl0VG9GaWx0ZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogJz0nLFxuICAgICAgICAgICAgICAgIGZpbHRlcmVkaXRlbXM6ICc9JyxcbiAgICAgICAgICAgICAgICBzaXplOiAnQCcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdHNvcnRjb2x1bW46ICdAJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6IFsnJHNjb3BlJywgJyRlbGVtZW50JywgJyRhdHRycycsICckZmlsdGVyJywgZnVuY3Rpb24gKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycywgJGZpbHRlcikge1xuICAgICAgICAgICAgICAgIHZhciB0YWJsZUN0cmwgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5jaHVua3MgPSBbXTtcbiAgICAgICAgICAgICAgICB0YWJsZUN0cmwucGFnZU5vID0gMDtcbiAgICAgICAgICAgICAgICB0YWJsZUN0cmwuc29ydE9iaj1pbml0aWFsaXplU29ydCgkc2NvcGUuZGVmYXVsdHNvcnRjb2x1bW4pO1xuXG4gICAgICAgICAgICAgICAgdGFibGVDdHJsLnNpemUgPSBwYXJzZUludCgkc2NvcGUuc2l6ZSwgMTApO1xuICAgICAgICAgICAgICAgIGlmIChpc05hTih0YWJsZUN0cmwuc2l6ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFibGVDdHJsLnNpemUgPSAxMjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBBbHdheXMgY2FsbCBzaG93Q2h1bmsgd2l0aCBib3RoIHBhcmFtZXRlcnMuXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHBhZ2VOb1xuICAgICAgICAgICAgICAgICAqIEBwYXJhbSBzZWFyY2hUZXh0XG4gICAgICAgICAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc2hvd0NodW5rKHBhZ2VObywgc2VhcmNoVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB0YWJsZUN0cmwuc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYWdlTm8gPT09IHVuZGVmaW5lZCB8fCBwYWdlTm8gPCAwKSBwYWdlTm8gPSAwO1xuICAgICAgICAgICAgICAgICAgICB0YWJsZUN0cmwucGFnZU5vID0gcGFnZU5vO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuaXRlbXMgIT09IHVuZGVmaW5lZCkgey8vVE9ETzogQ2hlY2sgd2h5IGl0ZW1zIGFyZSB1bmRlZmluZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VhcmNoVGV4dEZpbHRlcmVkSXRlbXMgPSBmaWx0ZXJGaWx0ZXIoJHNjb3BlLml0ZW1zLCB0YWJsZUN0cmwuc2VhcmNoVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hUZXh0RmlsdGVyZWRJdGVtcyA9ICRmaWx0ZXIoJ29yZGVyQnknKShzZWFyY2hUZXh0RmlsdGVyZWRJdGVtcywgdGFibGVDdHJsLnNvcnRPYmouZmllbGQsIHRhYmxlQ3RybC5zb3J0T2JqLnJldmVyc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vT2ZDaHVua3MgPSBNYXRoLmNlaWwoc2VhcmNoVGV4dEZpbHRlcmVkSXRlbXMubGVuZ3RoIC8gdGFibGVDdHJsLnNpemUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vT2ZDaHVua3MgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vT2ZDaHVua3MgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDdHJsLmNodW5rcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub09mQ2h1bmtzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUN0cmwuY2h1bmtzLnB1c2goe3NlbGVjdGVkOiBmYWxzZSwgcGFnZU5vOiBpfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vQWZ0ZXIgZmlsdGVyaW5nIG51bWJlciBvZiBjaHVua3MgY291bGQgY2hhbmdlIHNvIHJlc2V0IHBhZ2Ugbm8gaWYgaXQgaXMgZ3JlYXRlciB0aGFuIG5vIG9mIGNodW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhZ2VObyA+PSB0YWJsZUN0cmwuY2h1bmtzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5wYWdlTm8gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDdHJsLmNodW5rc1t0YWJsZUN0cmwucGFnZU5vXS5zZWxlY3RlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vVXBkYXRlIG51bWJlciBvZiBjaHVua3MgZm9yIHBhZ2luYXRpb24gbWVudVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhYmxlQ3RybC5jaHVua3MubGVuZ3RoID4gNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzbGljZVN0YXJ0LCBzbGljZUVuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGljZVN0YXJ0ID0gdGFibGVDdHJsLnBhZ2VObyAtIDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2VFbmQgPSB0YWJsZUN0cmwucGFnZU5vICsgMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2xpY2VTdGFydCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2VFbmQgPSBzbGljZUVuZCAtIHNsaWNlU3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlU3RhcnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2xpY2VFbmQgPiB0YWJsZUN0cmwuY2h1bmtzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGljZVN0YXJ0ID0gc2xpY2VTdGFydCAtIChzbGljZUVuZCAtIHRhYmxlQ3RybC5jaHVua3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2VFbmQgPSB0YWJsZUN0cmwuY2h1bmtzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnBhZ2luYXRpb25NZW51LmNodW5rcyA9IHRhYmxlQ3RybC5jaHVua3Muc2xpY2Uoc2xpY2VTdGFydCwgc2xpY2VFbmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUucGFnaW5hdGlvbk1lbnUuY2h1bmtzID0gdGFibGVDdHJsLmNodW5rcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDdHJsLmZpbHRlcmVkSXRlbXMgPSBsaW1pdFRvRmlsdGVyKHNlYXJjaFRleHRGaWx0ZXJlZEl0ZW1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5wYWdlTm8gKiB0YWJsZUN0cmwuc2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmlsdGVyZWRpdGVtcz10YWJsZUN0cmwuZmlsdGVyZWRJdGVtcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc2hvd1ByZXZDaHVuaygpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZDaHVuaztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhYmxlQ3RybC5wYWdlTm8gPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldkNodW5rID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZDaHVuayA9IHRhYmxlQ3RybC5wYWdlTm8gLSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzaG93Q2h1bmsocHJldkNodW5rKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzaG93TmV4dENodW5rKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dENodW5rO1xuICAgICAgICAgICAgICAgICAgICBuZXh0Q2h1bmsgPSB0YWJsZUN0cmwucGFnZU5vICsgMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRDaHVuayA+IHRhYmxlQ3RybC5jaHVua3MubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dENodW5rID0gdGFibGVDdHJsLmNodW5rcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzaG93Q2h1bmsobmV4dENodW5rKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBTYXZlIHBhZ2luYXRpb24gc2NvcGUgdG8gcHJvdmlkZSBjaHVuayBpbmZvcm1hdGlvbiB0byBwYWdpbmF0aW9uIG1lbnUuXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIG1lbnVcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBhZGRQYWdpbmF0aW9uTWVudShtZW51KSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5wYWdpbmF0aW9uTWVudSA9IG1lbnU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaW5pdGlhbGl6ZVNvcnQoc29ydGZpZWxkKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOnNvcnRmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldmVyc2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkRpcmVjdGlvbjoge1wiYW5nbGUgZG93biBpY29uXCI6IHRydWUsIFwiYW5nbGUgdXAgaWNvblwiOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNvcnQoc29ydGZpZWxkKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNvcnRmaWVsZCA9PSB0YWJsZUN0cmwuc29ydE9iai5maWVsZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUN0cmwuc29ydE9iai5maWVsZCA9IHNvcnRmaWVsZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5zb3J0T2JqLnJldmVyc2UgPSAhdGFibGVDdHJsLnNvcnRPYmoucmV2ZXJzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5zb3J0T2JqLmljb25EaXJlY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbmdsZSBkb3duIGljb25cIjogIXRhYmxlQ3RybC5zb3J0T2JqLnJldmVyc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbmdsZSB1cCBpY29uXCI6IHRhYmxlQ3RybC5zb3J0T2JqLnJldmVyc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDdHJsLnNvcnRPYmogPSBpbml0aWFsaXplU29ydChzb3J0ZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5zaG93Q2h1bmsodGFibGVDdHJsLnBhZ2VObywgdGFibGVDdHJsLnNlYXJjaFRleHQpO1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGFibGVDdHJsLnNob3dDaHVuayA9IHNob3dDaHVuaztcbiAgICAgICAgICAgICAgICB0YWJsZUN0cmwuc2hvd05leHRDaHVuayA9IHNob3dOZXh0Q2h1bms7XG4gICAgICAgICAgICAgICAgdGFibGVDdHJsLnNob3dQcmV2Q2h1bmsgPSBzaG93UHJldkNodW5rO1xuICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5hZGRQYWdpbmF0aW9uTWVudSA9IGFkZFBhZ2luYXRpb25NZW51O1xuICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5zb3J0ID0gc29ydDtcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycywgdGFibGVDdHJsKSB7XG4gICAgICAgICAgICAgICAgLy9XYXRjaCBmb3IgaXRlbXMgYXMgdGhleSB3aWxsIGJlIGF1dG8gcmVmcmVzaGVkXG4gICAgICAgICAgICAgICAgc2NvcGUuJHBhcmVudC4kd2F0Y2goYXR0cnMuaXRlbXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFibGVDdHJsLnNob3dDaHVuayh0YWJsZUN0cmwucGFnZU5vLCB0YWJsZUN0cmwuc2VhcmNoVGV4dCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvZGlyZWN0aXZlcy90YWJsZS5odG1sJ1xuICAgICAgICB9XG4gICAgfV0pXG4gICAgLmRpcmVjdGl2ZShcImN0dlRoZWFkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnPHRoZWFkIG5nLXRyYW5zY2x1ZGU+PC90aGVhZD4nXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC5kaXJlY3RpdmUoXCJjdHZUaFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICByZXF1aXJlOiAnXl5jdHZUYWJsZScsXG4gICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgIGNsYXNzOiAnQCcsXG4gICAgICAgICAgICAgICAgc29ydGZpZWxkOiAnPSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5rOmZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgdGFibGVDdHJsKXtcbiAgICAgICAgICAgICAgICBzY29wZS50YWJsZWN0cmwgPSB0YWJsZUN0cmw7XG4gICAgICAgICAgICAgICAgaWYoc2NvcGUuc29ydGZpZWxkICE9IHVuZGVmaW5lZCAmJiBzY29wZS5zb3J0ZmllbGQgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYmluZCgnY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDdHJsLnNvcnQoc2NvcGUuc29ydGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9kaXJlY3RpdmVzL3RhYmxlaGVhZGVyLmh0bWwnXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC5kaXJlY3RpdmUoXCJjdHZUYm9keVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgc2NvcGU6IHt9LFxuICAgICAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJzx0Ym9keSBuZy10cmFuc2NsdWRlPjwvdGJvZHk+J1xuICAgICAgICB9XG4gICAgfSlcbiAgICAuZGlyZWN0aXZlKFwiY3R2VGZvb3RcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHNjb3BlOiB7fSxcbiAgICAgICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICc8dGZvb3QgbmctdHJhbnNjbHVkZT48L3Rmb290PidcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLmRpcmVjdGl2ZShcImN0dlRzZWFyY2hcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHJlcXVpcmU6ICdeXmN0dlRhYmxlJyxcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdAJyxcbiAgICAgICAgICAgICAgICBzaXplOiAnQCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHIsIHRhYmxlQ3RybCkge1xuICAgICAgICAgICAgICAgIHNjb3BlLnNob3dDaHVuayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFibGVDdHJsLnNob3dDaHVuayh0YWJsZUN0cmwucGFnZU5vLCBzY29wZS5zZWFyY2hUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2RpcmVjdGl2ZXMvc2VhcmNoaW5wdXQuaHRtbCdcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLmRpcmVjdGl2ZShcImN0dlRyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICB0cmFuc2NsdWRlOiAndHJ1ZScsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgc2NvcGU6IHt9LFxuICAgICAgICAgICAgdGVtcGxhdGU6ICc8dHIgbmctdHJhbnNjbHVkZT48L3RyPidcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLmRpcmVjdGl2ZShcImN0dlRkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIHNjb3BlOiB0cnVlLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICc8dGQgbmctdHJhbnNjbHVkZT48L3RkPidcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLmRpcmVjdGl2ZShcImN0dlRwYWdpbmF0aW9uXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICByZXF1aXJlOiAnXl5jdHZUYWJsZScsXG4gICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgIGNvbHNwYW46ICdAJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlcGxhY2U6dHJ1ZSxcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0ciwgdGFibGVDdHJsKSB7XG4gICAgICAgICAgICAgICAgdGFibGVDdHJsLmFkZFBhZ2luYXRpb25NZW51KHNjb3BlKTtcbiAgICAgICAgICAgICAgICAvL3Nob3dDaHVuaygpIHdpbGwgY2FsY3VsYXRlIGFuZCBzZXQgY2h1bmtzIGluIHNjb3BlXG4gICAgICAgICAgICAgICAgdGFibGVDdHJsLnNob3dDaHVuayh0YWJsZUN0cmwucGFnZU5vLCB0YWJsZUN0cmwuc2VhcmNoVGV4dCk7XG4gICAgICAgICAgICAgICAgc2NvcGUuc2hvd0NodW5rID0gZnVuY3Rpb24gKHBhZ2VObykge1xuICAgICAgICAgICAgICAgICAgICB0YWJsZUN0cmwuc2hvd0NodW5rKHBhZ2VObywgdGFibGVDdHJsLnNlYXJjaFRleHQpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgc2NvcGUuc2hvd1ByZXZDaHVuayA9IHRhYmxlQ3RybC5zaG93UHJldkNodW5rO1xuICAgICAgICAgICAgICAgIHNjb3BlLnNob3dOZXh0Q2h1bmsgPSB0YWJsZUN0cmwuc2hvd05leHRDaHVuaztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvZGlyZWN0aXZlcy9wYWdpbmF0aW9ubWVudS5odG1sJ1xuICAgICAgICB9XG4gICAgfSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMTEvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubW9kZWxzJylcbiAgICAuZmFjdG9yeSgnQXBwbGljYXRpb25Hcm91cHNNb2RlbCcsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XG4gICAgICAgIHZhciBncm91cHNtb2RlbCA9IG5ldyBDb2xsZWN0aW9uKCRodHRwLCAkcSwgQ29udGl2R2xvYmFscy5BUFBMSUNBVElPTkdST1VQU19FTkRQT0lOVCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdlbmVyYXRlIGtleSBmb3IgYXBwbGljYXRpb24gZ3JvdXBcbiAgICAgICAgICogQHBhcmFtIGdyb3VwXG4gICAgICAgICAqL1xuICAgICAgICBncm91cHNtb2RlbC5nZW5lcmF0ZUtleSA9IGZ1bmN0aW9uIChncm91cCkge1xuICAgICAgICAgICAgcmV0dXJuIGdyb3VwLnRlbmFudE5hbWUgKyAnOicgKyBncm91cC5ncm91cE5hbWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGdyb3Vwc21vZGVsO1xuICAgIH1dKTsiLCIvKipcbiAqIEJhc2VDb2xsZWN0aW9uIGNsYXNzIHRoYXQgZG9lcyBqdXN0IGZldGNoIG9mIHRoZSBvYmplY3RzLlxuICogQHBhcmFtICRodHRwXG4gKiBAcGFyYW0gJHFcbiAqIEBwYXJhbSB1cmwgVXNlZCBmb3IgZG9pbmcgSFRUUCBHRVQgYW5kIGZldGNoIG9iamVjdHMgZnJvbSBzZXJ2ZXJcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBCYXNlQ29sbGVjdGlvbigkaHR0cCwgJHEsIHVybCkge1xuICAgIHRoaXMubW9kZWxzID0gW107XG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgIHRoaXMuJHEgPSAkcTtcbiAgICB0aGlzLnVybCA9IHVybDtcbn1cblxuQmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLmV4dHJhY3QgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHJlbG9hZCBPcHRpb25hbC4gRGVmYXVsdCBpcyBmYWxzZVxuICogQHJldHVybnMgeyp9XG4gKi9cbkJhc2VDb2xsZWN0aW9uLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAocmVsb2FkKSB7XG4gICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzO1xuICAgIGlmIChyZWxvYWQgPT09IHVuZGVmaW5lZCkgcmVsb2FkID0gZmFsc2U7XG4gICAgcmV0dXJuICghcmVsb2FkICYmIGNvbGxlY3Rpb24ubW9kZWxzLmxlbmd0aCA+IDApID9cbiAgICAgICAgY29sbGVjdGlvbi4kcS53aGVuKGNvbGxlY3Rpb24ubW9kZWxzKSA6IGNvbGxlY3Rpb24uJGh0dHAuZ2V0KGNvbGxlY3Rpb24udXJsKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICBjb2xsZWN0aW9uLm1vZGVscyA9IGNvbGxlY3Rpb24uZXh0cmFjdChyZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb24ubW9kZWxzO1xuICAgICAgICB9KTtcbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBrZXlcbiAqIEBwYXJhbSByZWxvYWQgT3B0aW9uYWwuIERlZmF1bHQgaXMgZmFsc2VcbiAqIEBwYXJhbSBrZXluYW1lXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLmdldE1vZGVsQnlLZXkgPSBmdW5jdGlvbiAoa2V5LCByZWxvYWQsIGtleW5hbWUpIHtcbiAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgaWYgKHJlbG9hZCA9PT0gdW5kZWZpbmVkKSByZWxvYWQgPSBmYWxzZTtcbiAgICBpZiAoa2V5bmFtZSA9PT0gdW5kZWZpbmVkKSBrZXluYW1lID0gJ2tleSc7XG5cbiAgICB2YXIgZGVmZXJyZWQgPSBjb2xsZWN0aW9uLiRxLmRlZmVyKCk7XG5cbiAgICBmdW5jdGlvbiBmaW5kTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfLmZpbmQoY29sbGVjdGlvbi5tb2RlbHMsIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICByZXR1cm4gY1trZXluYW1lXSA9PSBrZXk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKCFyZWxvYWQgJiYgY29sbGVjdGlvbi5tb2RlbHMubGVuZ3RoID4gMCkge1xuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGZpbmRNb2RlbCgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb2xsZWN0aW9uLmdldChyZWxvYWQpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShmaW5kTW9kZWwoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBtb2RlbFxuICogQHBhcmFtIHJlbG9hZCBPcHRpb25hbC4gRGVmYXVsdCBpcyBmYWxzZVxuICogQHJldHVybnMgeyp9XG4gKi9cbkJhc2VDb2xsZWN0aW9uLnByb3RvdHlwZS5nZXRNb2RlbCA9IGZ1bmN0aW9uIChtb2RlbCwgcmVsb2FkKSB7XG4gICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzO1xuICAgIGlmIChyZWxvYWQgPT09IHVuZGVmaW5lZCkgcmVsb2FkID0gZmFsc2U7XG5cbiAgICB2YXIgZGVmZXJyZWQgPSBjb2xsZWN0aW9uLiRxLmRlZmVyKCk7XG5cbiAgICBmdW5jdGlvbiBmaW5kTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfLmZpbmQoY29sbGVjdGlvbi5tb2RlbHMsIG1vZGVsKVxuICAgIH1cblxuICAgIGlmICghcmVsb2FkICYmIGNvbGxlY3Rpb24ubW9kZWxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShmaW5kTW9kZWwoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29sbGVjdGlvbi5nZXQocmVsb2FkKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoZmluZE1vZGVsKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59O1xuXG5cbi8qKlxuICogRXh0ZW5kcyBCYXNlQ29sbGVjdGlvbiBjbGFzcyB0byBkbyBjcmVhdGUsIHVwZGF0ZSBhbmQgZGVsZXRlIHVzaW5nIFBPU1QsIFBVVCBhbmQgREVMRVRFIHZlcmJzLlxuICogQHBhcmFtICRodHRwXG4gKiBAcGFyYW0gJHFcbiAqIEBwYXJhbSB1cmwgVXNlZCBmb3IgZG9pbmcgSFRUUCBHRVQgYW5kIGZldGNoIG9iamVjdHMgZnJvbSBzZXJ2ZXJcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDb2xsZWN0aW9uKCRodHRwLCAkcSwgdXJsKSB7XG4gICAgQmFzZUNvbGxlY3Rpb24uY2FsbCh0aGlzLCAkaHR0cCwgJHEsIHVybCk7XG4gICAgdGhpcy5pbnNwZWN0U3RhdHMgPSB7fTtcbn1cblxuQ29sbGVjdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2VDb2xsZWN0aW9uLnByb3RvdHlwZSk7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBtb2RlbFxuICogQHBhcmFtIHVybCBPcHRpb25hbCBpZiBub3QgcGFzc2VkIGl0IGlzIGNvbnN0cnVjdGVkIHVzaW5nIGtleSBhbmQgdXJsIHBhc3NlZCBpbiBjb25zdHJ1Y3RvclxuICogQHJldHVybnMgeyp9XG4gKi9cbkNvbGxlY3Rpb24ucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIChtb2RlbCwgdXJsKSB7XG4gICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzO1xuICAgIHZhciBkZWZlcnJlZCA9IGNvbGxlY3Rpb24uJHEuZGVmZXIoKTtcbiAgICBcbiAgICBpZiAodXJsID09PSB1bmRlZmluZWQpIHVybCA9IGNvbGxlY3Rpb24udXJsICsgbW9kZWwua2V5ICsgJy8nO1xuICAgIGNvbGxlY3Rpb24uJGh0dHAucG9zdCh1cmwsIG1vZGVsKVxuICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZURhdGEgPSBjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpO1xuICAgICAgICAgICAgLy9Gb3IgcmVzdCBlbmRwb2ludHMgdGhhdCBkbyBub3QgcmV0dXJuIGNyZWF0ZWQganNvbiBvYmplY3QgaW4gcmVzcG9uc2VcbiAgICAgICAgICAgIGlmICgocmVzcG9uc2VEYXRhID09PSB1bmRlZmluZWQpIHx8IChyZXNwb25zZURhdGEgPT09ICcnKSkge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlRGF0YSA9IG1vZGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9jb2xsZWN0aW9uLm1vZGVscy5wdXNoKGNvbGxlY3Rpb24uZXh0cmFjdChyZXNwb25zZSkpO1xuICAgICAgICAgICAgY29sbGVjdGlvbi5tb2RlbHMucHVzaChyZXNwb25zZURhdGEpO1xuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGNvbGxlY3Rpb24uZXh0cmFjdChyZXNwb25zZSkpO1xuICAgICAgICB9KTtcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbi8qKlxuICogVGhpcyBpcyBmb3IgbmV0bWFzdGVyIHNwZWNpZmljIGVuZHBvaW50cyBhbmQgdXNlZCBieSBuZXRtYXN0ZXIgb2JqZWN0cyBvbmx5LlxuICogVE9ETzogR2VuZXJhbGl6ZVxuICogQHBhcmFtIG1vZGVsXG4gKiBAcGFyYW0gdXJsIE9wdGlvbmFsXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ29sbGVjdGlvbi5wcm90b3R5cGUuc2F2ZSA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcztcbiAgICB2YXIgZGVmZXJyZWQgPSBjb2xsZWN0aW9uLiRxLmRlZmVyKCk7XG4gICAgdmFyIHVybCA9IGNvbGxlY3Rpb24udXJsICsgbW9kZWwua2V5ICsgJy8nO1xuICAgIGNvbGxlY3Rpb24uJGh0dHAucHV0KHVybCwgbW9kZWwpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgXy5yZW1vdmUoY29sbGVjdGlvbi5tb2RlbHMsIGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG4ua2V5ID09IG1vZGVsLmtleTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29sbGVjdGlvbi5tb2RlbHMucHVzaChjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcbiAgICAgICAgfSk7XG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59O1xuXG4vKipcbiAqIFRoaXMgaXMgZm9yIG5ldG1hc3RlciBzcGVjaWZpYyBlbmRwb2ludHMgYW5kIHVzZWQgYnkgbmV0bWFzdGVyIG9iamVjdHMgb25seS5cbiAqIFRPRE86IEdlbmVyYWxpemVcbiAqIEBwYXJhbSBtb2RlbFxuICogQHJldHVybnMgeyp9XG4gKi9cbkNvbGxlY3Rpb24ucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcztcbiAgICB2YXIgZGVmZXJyZWQgPSBjb2xsZWN0aW9uLiRxLmRlZmVyKCk7XG4gICAgdmFyIHVybCA9IGNvbGxlY3Rpb24udXJsICsgbW9kZWwua2V5ICsgJy8nO1xuICAgIGNvbGxlY3Rpb24uJGh0dHAuZGVsZXRlKHVybClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBfLnJlbW92ZShjb2xsZWN0aW9uLm1vZGVscywgZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbi5rZXkgPT0gbW9kZWwua2V5O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGNvbGxlY3Rpb24uZXh0cmFjdChyZXNwb25zZSkpO1xuICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XG4gICAgICAgIH0pO1xuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIGtleVxuICogQHBhcmFtIGtleW5hbWVcbiAqIEBwYXJhbSB1cmwgT3B0aW9uYWwgaWYgbm90IHBhc3NlZCBpdCBpcyBjb25zdHJ1Y3RlZCB1c2luZyBrZXkgYW5kIHVybCBwYXNzZWQgaW4gY29uc3RydWN0b3JcbiAqIEByZXR1cm5zIHsqfVxuICovXG5Db2xsZWN0aW9uLnByb3RvdHlwZS5kZWxldGVVc2luZ0tleSA9IGZ1bmN0aW9uIChrZXksIGtleW5hbWUsIHVybCkge1xuICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcztcbiAgICBpZiAoa2V5bmFtZSA9PT0gdW5kZWZpbmVkKSBrZXluYW1lID0gJ2tleSc7XG5cbiAgICB2YXIgZGVmZXJyZWQgPSBjb2xsZWN0aW9uLiRxLmRlZmVyKCk7XG4gICAgaWYgKHVybCA9PT0gdW5kZWZpbmVkKSB1cmwgPSBjb2xsZWN0aW9uLnVybCArIGtleSArICcvJztcbiAgICBjb2xsZWN0aW9uLiRodHRwLmRlbGV0ZSh1cmwpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgXy5yZW1vdmUoY29sbGVjdGlvbi5tb2RlbHMsIGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ba2V5bmFtZV0gPT0ga2V5O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGNvbGxlY3Rpb24uZXh0cmFjdChyZXNwb25zZSkpO1xuICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XG4gICAgICAgIH0pO1xuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTtcblxuXG5Db2xsZWN0aW9uLnByb3RvdHlwZS5nZXRJbnNwZWN0QnlLZXkgPSBmdW5jdGlvbihrZXksIHVybCwgcmVmcmVzaCl7XG4gICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzO1xuICAgIHZhciBkZWZlcnJlZCA9IGNvbGxlY3Rpb24uJHEuZGVmZXIoKTtcbiAgICBpZihrZXkgaW4gY29sbGVjdGlvbi5pbnNwZWN0U3RhdHMgJiYgcmVmcmVzaCA9PSBmYWxzZSl7XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUoY29sbGVjdGlvbi5pbnNwZWN0U3RhdHNba2V5XSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb2xsZWN0aW9uLiRodHRwLmdldCh1cmwgKyBrZXkgKyAnLycpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlU3RhdHMgPSBjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uLmluc3BlY3RTdGF0c1trZXldID0gcmVzcG9uc2VTdGF0c1xuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3BvbnNlU3RhdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAsIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2soZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59OyIsIi8qKlxuICogQ3JlYXRlZCBieSBoYXJkaWsgZ2FuZGhpIG9uIDYvMTUvMTYuXG4gKi9cblxuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5tb2RlbHMnKVxuICAgIC5mYWN0b3J5KCdOZXRwcm9maWxlc01vZGVsJywgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcbiAgICAgICAgdmFyIG5ldHByb2ZpbGVzTW9kZWwgPSBuZXcgQ29sbGVjdGlvbigkaHR0cCwgJHEsIENvbnRpdkdsb2JhbHMuTkVUUFJPRklMRVNfRU5EUE9JTlQpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZW5lcmF0ZSBwb2xpY3kga2V5IHRvIHNhdmUgcG9saWN5IG9uIHNlcnZlclxuICAgICAgICAgKiBAcGFyYW0gcG9saWN5XG4gICAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICBuZXRwcm9maWxlc01vZGVsLmdlbmVyYXRlS2V5ID0gZnVuY3Rpb24gKHBvbGljeSkge1xuICAgICAgICAgICAgcmV0dXJuIHBvbGljeS50ZW5hbnROYW1lICsgJzonICsgcG9saWN5LnByb2ZpbGVOYW1lO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXRwcm9maWxlc01vZGVsO1xuICAgIH1dKTtcbiIsImFuZ3VsYXIubW9kdWxlKCdjb250aXYubW9kZWxzJylcbiAgICAuZmFjdG9yeSgnTmV0d29ya3NNb2RlbCcsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29sbGVjdGlvbigkaHR0cCwgJHEsIENvbnRpdkdsb2JhbHMuTkVUV09SS1NfRU5EUE9JTlQpO1xuICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gMy8yMi8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5tb2RlbHMnKVxuICAgIC5mYWN0b3J5KCdOb2Rlc01vZGVsJywgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5vZGVzQ29sbGVjdGlvbiBleHRlbmRzIGZyb20gQmFzZUNvbGxlY3Rpb24uIEl0IG92ZXJyaWRlcyBleHRyYWN0KCkgYW5kIGFkZHMgY29tbWlzc2lvbiwgZGVjb21taXNzaW9uLCB1cGdyYWRlIGFuZFxuICAgICAgICAgKiBkaXNjb3ZlciBtZXRob2RzXG4gICAgICAgICAqIEBwYXJhbSAkaHR0cFxuICAgICAgICAgKiBAcGFyYW0gJHFcbiAgICAgICAgICogQGNvbnN0cnVjdG9yXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBOb2Rlc0NvbGxlY3Rpb24oJGh0dHAsICRxKSB7XG4gICAgICAgICAgICBCYXNlQ29sbGVjdGlvbi5jYWxsKHRoaXMsICRodHRwLCAkcSwgQ29udGl2R2xvYmFscy5OT0RFU19MSVNUX0VORFBPSU5UKTtcbiAgICAgICAgfVxuXG4gICAgICAgIE5vZGVzQ29sbGVjdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2VDb2xsZWN0aW9uLnByb3RvdHlwZSk7XG5cbiAgICAgICAgTm9kZXNDb2xsZWN0aW9uLnByb3RvdHlwZS5leHRyYWN0ID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgLy9Db252ZXJ0IHRvIGFycmF5IGlmIHRoZSByZXR1cm5lZCBjb2xsZWN0aW9uIGlzIG5vdCBhbiBhcnJheVxuICAgICAgICAgICAgcmV0dXJuIF8ubWFwKHJlc3VsdC5kYXRhLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmtleSA9IGtleTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ga2V5XG4gICAgICAgICAqIEBwYXJhbSBleHRyYVZhcnMgSlNPTiBvYmplY3Qgb2YgZXh0cmEgYW5zaWJsZSBhbmQgZW52aXJvbm1lbnQgdmFyaWFibGVzIHRvIGJlIHBhc3NlZCB3aGlsZSBjb21taXNzaW9uaW5nIGEgbm9kZVxuICAgICAgICAgKiB7XG4gICAgICAgICAgICAgKiBcImVudlwiOntcImh0dHBfcHJveHlcIjpcImh0dHA6Ly9wcm94eS5lc2wuY2lzY28uY29tOjgwODBcIiwgXCJodHRwc19wcm94eVwiOlwiaHR0cDovL3Byb3h5LmVzbC5jaXNjby5jb206ODA4MFwifSxcbiAgICAgICAgICAgICAqIFwiY29udHJvbF9pbnRlcmZhY2VcIjogXCJldGgxXCIsIFwic2VydmljZV92aXBcIjogXCIxOTIuMTY4LjIuMjUyXCIsIFwidmFsaWRhdGVfY2VydHNcIjogXCJmYWxzZVwiLCBcIm5ldHBsdWdpbl9pZlwiIDogXCJldGgyXCJcbiAgICAgICAgICAgICAqIH1cbiAgICAgICAgICogQHJldHVybnMgeyp9XG4gICAgICAgICAqL1xuICAgICAgICBOb2Rlc0NvbGxlY3Rpb24ucHJvdG90eXBlLmNvbW1pc3Npb24gPSBmdW5jdGlvbiAobm9kZU9wc09iaikge1xuICAgICAgICAgICAgdmFyIG5vZGVzY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSBub2Rlc2NvbGxlY3Rpb24uJHEuZGVmZXIoKTtcbiAgICAgICAgICAgIHZhciB1cmwgPSBDb250aXZHbG9iYWxzLk5PREVTX0NPTU1JU1NJT05fRU5EUE9JTlQ7XG4gICAgICAgICAgICBub2Rlc2NvbGxlY3Rpb24uJGh0dHAucG9zdCh1cmwsIG5vZGVPcHNPYmosIHtcbiAgICAgICAgICAgICAgICAgICAgJ2hlYWRlcnMnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAvL1NlcnZlciBkb2Vzbid0IHJldHVybiBhbnkganNvbiBpbiByZXNwb25zZVxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgICAgIH07XG5cbiAgICAgICAgTm9kZXNDb2xsZWN0aW9uLnByb3RvdHlwZS5kZWNvbW1pc3Npb24gPSBmdW5jdGlvbiAobm9kZU9wc09iaikge1xuICAgICAgICAgICAgdmFyIG5vZGVzY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSBub2Rlc2NvbGxlY3Rpb24uJHEuZGVmZXIoKTtcbiAgICAgICAgICAgIHZhciB1cmwgPSBDb250aXZHbG9iYWxzLk5PREVTX0RFQ09NTUlTU0lPTl9FTkRQT0lOVDtcbiAgICAgICAgICAgIG5vZGVzY29sbGVjdGlvbi4kaHR0cC5wb3N0KHVybCwgbm9kZU9wc09iaiwge1xuICAgICAgICAgICAgICAgICAgICAnaGVhZGVycyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgICAgfTtcblxuICAgICAgICBOb2Rlc0NvbGxlY3Rpb24ucHJvdG90eXBlLnVwZ3JhZGUgPSBmdW5jdGlvbiAobm9kZU9wc09iaikge1xuICAgICAgICAgICAgdmFyIG5vZGVzY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSBub2Rlc2NvbGxlY3Rpb24uJHEuZGVmZXIoKTtcbiAgICAgICAgICAgIHZhciB1cmwgPSBDb250aXZHbG9iYWxzLk5PREVTX01BSU5URU5BTkNFX0VORFBPSU5UO1xuICAgICAgICAgICAgbm9kZXNjb2xsZWN0aW9uLiRodHRwLnBvc3QodXJsLCBub2RlT3BzT2JqLCB7XG4gICAgICAgICAgICAgICAgICAgICdoZWFkZXJzJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gaXBcbiAgICAgICAgICogQHBhcmFtIGV4dHJhVmFycyBKU09OIG9iamVjdCBvZiBleHRyYSBhbnNpYmxlIGFuZCBlbnZpcm9ubWVudCB2YXJpYWJsZXMgdG8gYmUgcGFzc2VkIHdoaWxlIGRpc2NvdmVyaW5nIGEgbm9kZVxuICAgICAgICAgKiB7XG4gICAgICAgICAgICAgKiBcImVudlwiOntcImh0dHBfcHJveHlcIjpcImh0dHA6Ly9wcm94eS5lc2wuY2lzY28uY29tOjgwODBcIiwgXCJodHRwc19wcm94eVwiOlwiaHR0cDovL3Byb3h5LmVzbC5jaXNjby5jb206ODA4MFwifSxcbiAgICAgICAgICAgICAqIFwiY29udHJvbF9pbnRlcmZhY2VcIjogXCJldGgxXCIsIFwic2VydmljZV92aXBcIjogXCIxOTIuMTY4LjIuMjUyXCIsIFwiY2x1c3Rlci1uYW1lXCI6IFwiY29udGl2XCIsIFwibm9kZS1sYWJlbFwiIDogXCJub2RlMVwiXG4gICAgICAgICAgICAgKiB9XG4gICAgICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAgICAgKi9cbiAgICAgICAgTm9kZXNDb2xsZWN0aW9uLnByb3RvdHlwZS5kaXNjb3ZlciA9IGZ1bmN0aW9uIChub2RlT3BzT2JqKSB7XG4gICAgICAgICAgICB2YXIgbm9kZXNjb2xsZWN0aW9uID0gdGhpcztcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9IG5vZGVzY29sbGVjdGlvbi4kcS5kZWZlcigpO1xuICAgICAgICAgICAgdmFyIHVybCA9IENvbnRpdkdsb2JhbHMuTk9ERVNfRElTQ09WRVJfRU5EUE9JTlQ7XG4gICAgICAgICAgICBub2Rlc2NvbGxlY3Rpb24uJGh0dHAucG9zdCh1cmwsIG5vZGVPcHNPYmosIHtcbiAgICAgICAgICAgICAgICAgICAgJ2hlYWRlcnMnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBub2Rlc21vZGVsID0gbmV3IE5vZGVzQ29sbGVjdGlvbigkaHR0cCwgJHEpO1xuICAgICAgICByZXR1cm4gbm9kZXNtb2RlbDtcbiAgICB9XSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2Lm1vZGVscycpXG4gICAgLmZhY3RvcnkoJ09yZ2FuaXphdGlvbnNNb2RlbCcsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29sbGVjdGlvbigkaHR0cCwgJHEsIENvbnRpdkdsb2JhbHMuT1JHQU5JWkFUSU9OU19FTkRQT0lOVCk7XG4gICAgfV0pOyIsImFuZ3VsYXIubW9kdWxlKCdjb250aXYubW9kZWxzJylcbiAgICAuZmFjdG9yeSgnUG9saWNpZXNNb2RlbCcsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XG4gICAgICAgIHZhciBwb2xpY2llc21vZGVsID0gbmV3IENvbGxlY3Rpb24oJGh0dHAsICRxLCBDb250aXZHbG9iYWxzLlBPTElDSUVTX0VORFBPSU5UKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2VuZXJhdGUgcG9saWN5IGtleSB0byBzYXZlIHBvbGljeSBvbiBzZXJ2ZXJcbiAgICAgICAgICogQHBhcmFtIHBvbGljeVxuICAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgcG9saWNpZXNtb2RlbC5nZW5lcmF0ZUtleSA9IGZ1bmN0aW9uIChwb2xpY3kpIHtcbiAgICAgICAgICAgIHJldHVybiBwb2xpY3kudGVuYW50TmFtZSArICc6JyArIHBvbGljeS5wb2xpY3lOYW1lO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBwb2xpY2llc21vZGVsO1xuICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gMy84LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm1vZGVscycpXG4gICAgLmZhY3RvcnkoJ1J1bGVzTW9kZWwnLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xuICAgICAgICB2YXIgcnVsZXNtb2RlbCA9IG5ldyBDb2xsZWN0aW9uKCRodHRwLCAkcSwgQ29udGl2R2xvYmFscy5SVUxFU19FTkRQT0lOVCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBpbmNvbWluZyBydWxlcyBmb3IgYSBnaXZlbiBwb2xpY3kgYW5kIGEgdGVuYW50XG4gICAgICAgICAqIEBwYXJhbSBwb2xpY3lOYW1lXG4gICAgICAgICAqIEBwYXJhbSB0ZW5hbnROYW1lXG4gICAgICAgICAqIEByZXR1cm5zIHsqfHdlYmRyaXZlci5wcm9taXNlLlByb21pc2V9XG4gICAgICAgICAqL1xuICAgICAgICBydWxlc21vZGVsLmdldEluY29taW5nUnVsZXMgPSBmdW5jdGlvbiAocG9saWN5TmFtZSwgdGVuYW50TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJ1bGVzbW9kZWwuZ2V0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF8uZmlsdGVyKHJlc3VsdCwge1xuICAgICAgICAgICAgICAgICAgICAncG9saWN5TmFtZSc6IHBvbGljeU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICdkaXJlY3Rpb24nOiAnaW4nLFxuICAgICAgICAgICAgICAgICAgICAndGVuYW50TmFtZSc6IHRlbmFudE5hbWVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBvdXRnb2luZyBydWxlcyBmb3IgYSBnaXZlbiBwb2xpY3kgYW5kIGEgdGVuYW50XG4gICAgICAgICAqIEBwYXJhbSBwb2xpY3lOYW1lXG4gICAgICAgICAqIEBwYXJhbSB0ZW5hbnROYW1lXG4gICAgICAgICAqIEByZXR1cm5zIHsqfHdlYmRyaXZlci5wcm9taXNlLlByb21pc2V9XG4gICAgICAgICAqL1xuICAgICAgICBydWxlc21vZGVsLmdldE91dGdvaW5nUnVsZXMgPSBmdW5jdGlvbiAocG9saWN5TmFtZSwgdGVuYW50TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJ1bGVzbW9kZWwuZ2V0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF8uZmlsdGVyKHJlc3VsdCwge1xuICAgICAgICAgICAgICAgICAgICAncG9saWN5TmFtZSc6IHBvbGljeU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICdkaXJlY3Rpb24nOiAnb3V0JyxcbiAgICAgICAgICAgICAgICAgICAgJ3RlbmFudE5hbWUnOiB0ZW5hbnROYW1lXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZW5lcmF0ZSBydWxlIGtleSB0byBzYXZlIHJ1bGUgb24gc2VydmVyXG4gICAgICAgICAqIEBwYXJhbSBydWxlXG4gICAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICBydWxlc21vZGVsLmdlbmVyYXRlS2V5ID0gZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiBydWxlLnRlbmFudE5hbWUgKyAnOicgKyBydWxlLnBvbGljeU5hbWUgKyAnOicgKyBydWxlLnJ1bGVJZDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gcnVsZXNtb2RlbDtcbiAgICB9XSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzExLzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm1vZGVscycpXG4gICAgLmZhY3RvcnkoJ1NlcnZpY2VsYnNNb2RlbCcsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29sbGVjdGlvbigkaHR0cCwgJHEsIENvbnRpdkdsb2JhbHMuU0VSVklDRUxCU19FTkRQT0lOVCk7XG4gICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA0LzE4LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm1vZGVscycpXG4gICAgLmZhY3RvcnkoJ1N0b3JhZ2VQb2xpY2llc01vZGVsJywgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0b3JhZ2VQb2xpY2llc0NvbGxlY3Rpb24gZXh0ZW5kcyBmcm9tIEJhc2VDb2xsZWN0aW9uXG4gICAgICAgICAqIEBwYXJhbSAkaHR0cFxuICAgICAgICAgKiBAcGFyYW0gJHFcbiAgICAgICAgICogQGNvbnN0cnVjdG9yXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBTdG9yYWdlUG9saWNpZXNDb2xsZWN0aW9uKCRodHRwLCAkcSkge1xuICAgICAgICAgICAgQ29sbGVjdGlvbi5jYWxsKHRoaXMsICRodHRwLCAkcSwgQ29udGl2R2xvYmFscy5TVE9SQUdFUE9MSUNJRVNfRU5EUE9JTlQpO1xuICAgICAgICB9XG5cbiAgICAgICAgU3RvcmFnZVBvbGljaWVzQ29sbGVjdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENvbGxlY3Rpb24ucHJvdG90eXBlKTtcblxuICAgICAgICBTdG9yYWdlUG9saWNpZXNDb2xsZWN0aW9uLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAobW9kZWwpIHtcbiAgICAgICAgICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcztcbiAgICAgICAgICAgIHZhciB1cmwgPSBjb2xsZWN0aW9uLnVybCArIG1vZGVsLm5hbWU7XG4gICAgICAgICAgICByZXR1cm4gQ29sbGVjdGlvbi5wcm90b3R5cGUuY3JlYXRlLmNhbGwoY29sbGVjdGlvbiwgbW9kZWwsIHVybCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgU3RvcmFnZVBvbGljaWVzQ29sbGVjdGlvbi5wcm90b3R5cGUuc2F2ZSA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgICAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gY29sbGVjdGlvbi4kcS5kZWZlcigpO1xuICAgICAgICAgICAgdmFyIHVybCA9IGNvbGxlY3Rpb24udXJsICsgbW9kZWwubmFtZTtcbiAgICAgICAgICAgIGNvbGxlY3Rpb24uJGh0dHAucG9zdCh1cmwsIG1vZGVsKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBfLnJlbW92ZShjb2xsZWN0aW9uLm1vZGVscywgZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuLm5hbWUgPT0gbW9kZWwubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb24ubW9kZWxzLnB1c2gobW9kZWwpO1xuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGNvbGxlY3Rpb24uZXh0cmFjdChyZXNwb25zZSkpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGNvbGxlY3Rpb24uZXh0cmFjdChyZXNwb25zZSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBwb2xpY2llc21vZGVsID0gbmV3IFN0b3JhZ2VQb2xpY2llc0NvbGxlY3Rpb24oJGh0dHAsICRxKTtcbiAgICAgICAgcmV0dXJuIHBvbGljaWVzbW9kZWw7XG4gICAgfV0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gMy8yMi8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5tb2RlbHMnKVxuICAgIC5mYWN0b3J5KCdWb2x1bWVzTW9kZWwnLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogVm9sdW1lc0NvbGxlY3Rpb24gZXh0ZW5kcyBmcm9tIEJhc2VDb2xsZWN0aW9uXG4gICAgICAgICAqIEBwYXJhbSAkaHR0cFxuICAgICAgICAgKiBAcGFyYW0gJHFcbiAgICAgICAgICogQGNvbnN0cnVjdG9yXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBWb2x1bWVzQ29sbGVjdGlvbigkaHR0cCwgJHEpIHtcbiAgICAgICAgICAgIENvbGxlY3Rpb24uY2FsbCh0aGlzLCAkaHR0cCwgJHEsIENvbnRpdkdsb2JhbHMuVk9MVU1FU19FTkRQT0lOVCk7XG4gICAgICAgIH1cblxuICAgICAgICBWb2x1bWVzQ29sbGVjdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENvbGxlY3Rpb24ucHJvdG90eXBlKTtcblxuICAgICAgICBWb2x1bWVzQ29sbGVjdGlvbi5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgICAgICAgICB2YXIgdm9sdW1lc2NvbGxlY3Rpb24gPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gdm9sdW1lc2NvbGxlY3Rpb24uJHEuZGVmZXIoKTtcbiAgICAgICAgICAgIHZhciB1cmwgPSBDb250aXZHbG9iYWxzLlZPTFVNRVNfREVMRVRFX0VORFBPSU5UO1xuICAgICAgICAgICAgLy9kZWxldGUgZW5kcG9pbnQgZXhwZWN0cyB2b2x1bWUgcHJvcGVydHkgaW4gYWRkaXRpb24gdG8gcG9saWN5LiBUT0RPIGFzayB0byBiZSBmaXhlZFxuICAgICAgICAgICAgbW9kZWwudm9sdW1lID0gbW9kZWwubmFtZTtcbiAgICAgICAgICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgZGF0YTogbW9kZWxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2b2x1bWVzY29sbGVjdGlvbi4kaHR0cC5kZWxldGUodXJsLCBjb25maWcpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucmVtb3ZlKHZvbHVtZXNjb2xsZWN0aW9uLm1vZGVscywgZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAobi5uYW1lID09IG1vZGVsLm5hbWUgJiYgbi5wb2xpY3kgPT0gbW9kZWwucG9saWN5KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUodm9sdW1lc2NvbGxlY3Rpb24uZXh0cmFjdChyZXNwb25zZSkpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHZvbHVtZXNjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgICAgICB9O1xuXG4gICAgICAgIFZvbHVtZXNDb2xsZWN0aW9uLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAobW9kZWwpIHtcbiAgICAgICAgICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcztcbiAgICAgICAgICAgIHZhciB1cmwgPSBDb250aXZHbG9iYWxzLlZPTFVNRVNfQ1JFQVRFX0VORFBPSU5UO1xuICAgICAgICAgICAgcmV0dXJuIENvbGxlY3Rpb24ucHJvdG90eXBlLmNyZWF0ZS5jYWxsKGNvbGxlY3Rpb24sIG1vZGVsLCB1cmwpO1xuICAgICAgICB9O1xuXG4gICAgICAgIFZvbHVtZXNDb2xsZWN0aW9uLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKG1vZGVsLCBzbmFwc2hvdCwgbmV3Vm9sdW1lKSB7XG4gICAgICAgICAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSBjb2xsZWN0aW9uLiRxLmRlZmVyKCk7XG4gICAgICAgICAgICB2YXIgdXJsID0gQ29udGl2R2xvYmFscy5WT0xVTUVTX0NPUFlTTkFQU0hPVFNfRU5EUE9JTlQ7XG4gICAgICAgICAgICB2YXIgdm9sY29weW1vZGVsID0ge1xuICAgICAgICAgICAgICAgIHZvbHVtZTogbW9kZWwubmFtZSxcbiAgICAgICAgICAgICAgICBwb2xpY3k6IG1vZGVsLnBvbGljeSxcbiAgICAgICAgICAgICAgICBPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogbmV3Vm9sdW1lLFxuICAgICAgICAgICAgICAgICAgICBzbmFwc2hvdDogc25hcHNob3RcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29sbGVjdGlvbi4kaHR0cC5wb3N0KHVybCwgdm9sY29weW1vZGVsKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAvL1RPRE86IEFkZCB0aGUgbmV3IHZvbHVtZSB0byB0aGUgY29sbGVjdGlvblxuICAgICAgICAgICAgICAgICAgICAvL2NvbGxlY3Rpb24ubW9kZWxzLnB1c2goY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgdm9sdW1lc21vZGVsID0gbmV3IFZvbHVtZXNDb2xsZWN0aW9uKCRodHRwLCAkcSk7XG4gICAgICAgIHJldHVybiB2b2x1bWVzbW9kZWw7XG4gICAgfV0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNC8yOS8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi51dGlscycpXG4gICAgLmZhY3RvcnkoJ0NSVURIZWxwZXJTZXJ2aWNlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gc3RhcnRMb2FkZXIoY29udHJvbGxlcikge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuc2hvd0xvYWRlciA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHN0b3BMb2FkZXIoY29udHJvbGxlcikge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuc2hvd0xvYWRlciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBzaG93U2VydmVyRXJyb3IoY29udHJvbGxlciwgbWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuc2hvd1NlcnZlckVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnNlcnZlckVycm9yTWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGhpZGVTZXJ2ZXJFcnJvcihjb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5zaG93U2VydmVyRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdGFydExvYWRlcjogc3RhcnRMb2FkZXIsXG4gICAgICAgICAgICAgICAgc3RvcExvYWRlcjogc3RvcExvYWRlcixcbiAgICAgICAgICAgICAgICBzaG93U2VydmVyRXJyb3I6IHNob3dTZXJ2ZXJFcnJvcixcbiAgICAgICAgICAgICAgICBoaWRlU2VydmVyRXJyb3I6IGhpZGVTZXJ2ZXJFcnJvclxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBjc2hhbXB1ciBvbiA3LzE3LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZShcImNvbnRpdi51dGlsc1wiKVxuICAgIC5mYWN0b3J5KFwiSW5zcGVjdFNlcnZpY2VcIiwgZnVuY3Rpb24oKXtcblxuICAgICAgICAvKiBUaGlzIGZ1bmN0aW9uIHdvdWxkIGJ1aWxkIHRoZSBjb250YWluZXJEZXRhaWxzIG9iamVjdC5cbiAgICAgICAgIGVnIDpcbiAgICAgICAgIGNvbnRhaW5lckRldGFpbHM9e1xuICAgICAgICAgQ29udGFpbmVySWQxIDogW3tuYW1lOiBcImhvbWluZ0hvc3RcIiwgdmFsdWU6IFwiY2x1c3Rlci1ub2RlMVwiLCB0eXBlOiBcInN0cmluZ1wiLCBmb3JtYXQ6IFwibm9uZVwifSxcbiAgICAgICAgIHtuYW1lOiBtYWNBZGRyZXNzLCB2YWx1ZTogXCIwMjowMlwiLCB0eXBlOlwic3RyaW5nXCIsIGZvcm1hdDpcIm5vbmVcIn1cbiAgICAgICAgIF0sXG4gICAgICAgICBDb250YWluZXJJZDIgOiBbe25hbWU6IFwiaG9taW5nSG9zdFwiLCB2YWx1ZTogXCJjbHVzdGVyLW5vZGUxXCIgdHlwZTogXCJzdHJpbmdcIiwgZm9ybWF0OiBcIm5vbmVcIn0sXG4gICAgICAgICB7bmFtZTogbWFjQWRkcmVzcywgdmFsdWU6IFwiMDI6MDRcIiwgdHlwZTogXCJzdHJpbmdcIiwgZm9ybWF0OiBcIm5vbmVcIn1cbiAgICAgICAgIF1cbiAgICAgICAgIH1cbiAgICAgICAgIC0tVXNlZCBpbiBkaXNwbGF5aW5nIHRoZSBjb250YWluZXIgZGV0YWlsIGluc2lkZSBhbiBhY2NvcmRpb24uXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBidWlsZEVuZFBvaW50cyhlbmRwb2ludHMpe1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lckRldGFpbHMgPSB7fTtcbiAgICAgICAgICAgIGZvcih2YXIgaSBpbiBlbmRwb2ludHMgKXtcbiAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyQXR0cmlidXRlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvcih2YXIga2V5IGluIGVuZHBvaW50c1tpXSl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbmRwb2ludEF0dHJpYnV0ZSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBlbmRwb2ludEF0dHJpYnV0ZS5uYW1lID0ga2V5O1xuICAgICAgICAgICAgICAgICAgICBlbmRwb2ludEF0dHJpYnV0ZS5mb3JtYXQgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGVuZHBvaW50QXR0cmlidXRlLnR5cGUgPSAnc3RyaW5nJztcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChrZXkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImlwQWRkcmVzc1wiIDogIGVuZHBvaW50QXR0cmlidXRlLnZhbHVlID0gZW5kcG9pbnRzW2ldW2tleV0uZmlsdGVyKGZ1bmN0aW9uKGlwQWRkcmVzcyl7cmV0dXJuIGlwQWRkcmVzcy5sZW5ndGggPiAwO30pLmpvaW4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJsYWJlbHNcIiA6ICAgICBlbmRwb2ludEF0dHJpYnV0ZS52YWx1ZSA9IGVuZHBvaW50c1tpXVtrZXldLnJlcGxhY2UoLyhtYXBcXFt8XFxdKS9naSwnJykucmVwbGFjZSgvKDopL2dpLCAnPScpLnNwbGl0KCcgJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKHYpe3JldHVybiB2Lmxlbmd0aCA+IDB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludEF0dHJpYnV0ZS5mb3JtYXQgPSAnbGFiZWwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZHBvaW50QXR0cmlidXRlLnR5cGUgPSAnYXJyYXknO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdCA6ICAgICAgICAgICBlbmRwb2ludEF0dHJpYnV0ZS52YWx1ZSA9IGVuZHBvaW50c1tpXVtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckF0dHJpYnV0ZXMucHVzaChlbmRwb2ludEF0dHJpYnV0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lckRldGFpbHNbZW5kcG9pbnRzW2ldLmNvbnRhaW5lcklEXSA9IGNvbnRhaW5lckF0dHJpYnV0ZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29udGFpbmVyRGV0YWlsc1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvKiAgVGhpcyBmdW5jdGlvbiBjaGVja3Mgd2hldGhlciBhbnkgbmV3IGNvbnRhaW5lcnMgd2VyZSBhZGRlZCBvciBub3RcbiAgICAgICAgIFZpZXcgaXMgdXBkYXRlZCBvbmx5IHdoZW4gdGhlcmUgaXMgYSBjaGFuZ2UgaW4gY29udGFpbmVyIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrQ29udGFpbmVyQ2hhbmdlZChjb250RGV0YWlsc0EsIGNvbnREZXRhaWxzQil7XG4gICAgICAgICAgICBpZihjb250RGV0YWlsc0EgPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBpZihPYmplY3Qua2V5cyhjb250RGV0YWlsc0EpLmxlbmd0aCAhPSBPYmplY3Qua2V5cyhjb250RGV0YWlsc0IpLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgZm9yKHZhciBrZXkgaW4gY29udERldGFpbHNCKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoIShrZXkgaW4gY29udERldGFpbHNBKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBidWlsZEVuZFBvaW50cyA6IGJ1aWxkRW5kUG9pbnRzLFxuICAgICAgICAgICAgY2hlY2tDb250YWluZXJDaGFuZ2VkIDogY2hlY2tDb250YWluZXJDaGFuZ2VkXG4gICAgICAgIH1cbiAgICB9KTtcbiIsImFuZ3VsYXIubW9kdWxlKCdjb250aXYudXRpbHMnKVxuICAgIC5mYWN0b3J5KCdOZXR3b3JrU2VydmljZScsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0U2V0dGluZ3MoKSB7XG4gICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgICAgICAgdmFyIHVybCA9IENvbnRpdkdsb2JhbHMuTkVUV09SS19TRVRUSU5HU19FTkRQT0lOVDtcbiAgICAgICAgICAgICRodHRwLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGFbMF0pO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVNldHRpbmdzKHNldHRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiAkaHR0cC5wb3N0KENvbnRpdkdsb2JhbHMuTkVUV09SS19TRVRUSU5HU19FTkRQT0lOVCBcbiAgICAgICAgICAgICAgICArICdnbG9iYWwvJywgc2V0dGluZyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdldFNldHRpbmdzOiBnZXRTZXR0aW5ncyxcbiAgICAgICAgICAgIHVwZGF0ZVNldHRpbmdzOiB1cGRhdGVTZXR0aW5nc1xuICAgICAgICB9XG4gICAgfV0pOyIsImFuZ3VsYXIubW9kdWxlKCdjb250aXYudXRpbHMnKVxuICAgIC5mYWN0b3J5KCdOb2Rlc1NlcnZpY2UnLCBbJyRodHRwJywgJyRxJyxcbiAgICAgICAgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xuICAgICAgICAgICAgdmFyIG5vZGVfY29uc3RhbnRzID0ge1xuICAgICAgICAgICAgICAgIEFQSUNfQ09OVFJfVU5SRVNUUklDVF9NT0RFOiAnYXBpY19jb250cmFjdHNfdW5yZXN0cmljdGVkX21vZGUnLFxuICAgICAgICAgICAgICAgIEFQSUNfRVBHX0JSSURHRV9ET01BSU46ICdhcGljX2VwZ19icmlkZ2VfZG9tYWluJyxcbiAgICAgICAgICAgICAgICBBUElDX0xFQUZfTk9ERVM6ICdhcGljX2xlYWZfbm9kZXMnLFxuICAgICAgICAgICAgICAgIEFQSUNfUEFTU1dPUkQ6ICdhcGljX3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICBBUElDX1BIWVNfRE9NQUlOOiAnYXBpY19waHlzX2RvbWFpbicsXG4gICAgICAgICAgICAgICAgQVBJQ19VUkw6ICdhcGljX3VybCcsXG4gICAgICAgICAgICAgICAgQVBJQ19VU0VSTkFNRTogJ2FwaWNfdXNlcm5hbWUnLFxuICAgICAgICAgICAgICAgIENPTlRJVl9ORVRfTU9ERTogJ2NvbnRpdl9uZXR3b3JrX21vZGUnLFxuICAgICAgICAgICAgICAgIENPTlRST0xfSU5URVJGQUNFOiAnY29udHJvbF9pbnRlcmZhY2UnLFxuICAgICAgICAgICAgICAgIEVOVjogJ2VudicsXG4gICAgICAgICAgICAgICAgRldEX01PREU6ICdmd2RfbW9kZScsXG4gICAgICAgICAgICAgICAgREFUQV9JTlRFUkZBQ0U6ICduZXRwbHVnaW5faWYnLFxuICAgICAgICAgICAgICAgIFNDSEVEX1BST1ZJREVSOiAnc2NoZWR1bGVyX3Byb3ZpZGVyJyxcbiAgICAgICAgICAgICAgICBWSVBfQUREUjogJ3NlcnZpY2VfdmlwJyxcbiAgICAgICAgICAgICAgICBVQ1BfQk9PVFNUUkFQX05PREU6ICd1Y3BfYm9vdHN0cmFwX25vZGVfbmFtZScsXG4gICAgICAgICAgICAgICAgQ0xVU1RFUl9OQU1FOiAnY2x1c3Rlcl9uYW1lJ307XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFNldHRpbmdzKGN0cmwpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBDb250aXZHbG9iYWxzLk5PREVTX1NFVFRJTkdTX0dFVF9FTkRQT0lOVDtcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQodXJsKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGN0cmwuc2V0dGluZyA9IHJlc3VsdC5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXh0cmFWYXJzID0gY3RybC5zZXR0aW5nLmV4dHJhX3ZhcnM7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzY2hlZF9wcm92aWRlciA9IGV4dHJhVmFyc1tub2RlX2NvbnN0YW50cy5TQ0hFRF9QUk9WSURFUl07XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXR3b3JrX21vZGUgPSBleHRyYVZhcnNbbm9kZV9jb25zdGFudHMuQ09OVElWX05FVF9NT0RFXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZXh0cmFWYXJzW25vZGVfY29uc3RhbnRzLkNPTlRST0xfSU5URVJGQUNFXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3RybC5leHRyYV92YXJzW25vZGVfY29uc3RhbnRzLkNPTlRST0xfSU5URVJGQUNFXSA9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhVmFyc1tub2RlX2NvbnN0YW50cy5DT05UUk9MX0lOVEVSRkFDRV07IFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChleHRyYVZhcnNbbm9kZV9jb25zdGFudHMuREFUQV9JTlRFUkZBQ0VdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHJsLmV4dHJhX3ZhcnNbbm9kZV9jb25zdGFudHMuREFUQV9JTlRFUkZBQ0VdID0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFWYXJzW25vZGVfY29uc3RhbnRzLkRBVEFfSU5URVJGQUNFXTsgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4dHJhVmFyc1tub2RlX2NvbnN0YW50cy5WSVBfQUREUl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0cmwuZXh0cmFfdmFyc1tub2RlX2NvbnN0YW50cy5WSVBfQUREUl0gPSBleHRyYVZhcnNbbm9kZV9jb25zdGFudHMuVklQX0FERFJdOyBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoc2NoZWRfcHJvdmlkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0cmwuZXh0cmFfdmFyc1tub2RlX2NvbnN0YW50cy5TQ0hFRF9QUk9WSURFUl0gPSBzY2hlZF9wcm92aWRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY2hlZF9wcm92aWRlciA9PT0gJ3VjcC1zd2FybScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHJsLmV4dHJhX3ZhcnNbbm9kZV9jb25zdGFudHMuVUNQX0JPT1RTVFJBUF9OT0RFXSA9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYVZhcnNbbm9kZV9jb25zdGFudHMuVUNQX0JPT1RTVFJBUF9OT0RFXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobmV0d29ya19tb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHJsLmV4dHJhX3ZhcnNbbm9kZV9jb25zdGFudHMuQ09OVElWX05FVF9NT0RFXSA9IG5ldHdvcmtfbW9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXR3b3JrX21vZGUgPT09ICdzdGFuZGFsb25lJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0cmwuZXh0cmFfdmFyc1tub2RlX2NvbnN0YW50cy5GV0RfTU9ERV0gPSBleHRyYVZhcnNbbm9kZV9jb25zdGFudHMuRldEX01PREVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobmV0d29ya19tb2RlID09PSAnYWNpJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0cmwuZXh0cmFfdmFyc1tub2RlX2NvbnN0YW50cy5BUElDX0NPTlRSX1VOUkVTVFJJQ1RfTU9ERV0gPSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFWYXJzW25vZGVfY29uc3RhbnRzLkFQSUNfQ09OVFJfVU5SRVNUUklDVF9NT0RFXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHJsLmV4dHJhX3ZhcnNbbm9kZV9jb25zdGFudHMuQVBJQ19FUEdfQlJJREdFX0RPTUFJTl0gPSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFWYXJzW25vZGVfY29uc3RhbnRzLkFQSUNfRVBHX0JSSURHRV9ET01BSU5dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0cmwuZXh0cmFfdmFyc1tub2RlX2NvbnN0YW50cy5BUElDX0xFQUZfTk9ERVNdID0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhVmFyc1tub2RlX2NvbnN0YW50cy5BUElDX0xFQUZfTk9ERVNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0cmwuZXh0cmFfdmFyc1tub2RlX2NvbnN0YW50cy5BUElDX1BBU1NXT1JEXSA9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYVZhcnNbbm9kZV9jb25zdGFudHMuQVBJQ19QQVNTV09SRF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3RybC5leHRyYV92YXJzW25vZGVfY29uc3RhbnRzLkFQSUNfUEhZU19ET01BSU5dID0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhVmFyc1tub2RlX2NvbnN0YW50cy5BUElDX1BIWVNfRE9NQUlOXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHJsLmV4dHJhX3ZhcnNbbm9kZV9jb25zdGFudHMuQVBJQ19VUkxdID0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhVmFyc1tub2RlX2NvbnN0YW50cy5BUElDX1VSTF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3RybC5leHRyYV92YXJzW25vZGVfY29uc3RhbnRzLkFQSUNfVVNFUk5BTUVdID0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhVmFyc1tub2RlX2NvbnN0YW50cy5BUElDX1VTRVJOQU1FXTsgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXh0cmFWYXJzW25vZGVfY29uc3RhbnRzLkNMVVNURVJfTkFNRV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0cmwuZXh0cmFfdmFyc1tub2RlX2NvbnN0YW50cy5DTFVTVEVSX05BTUVdID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYVZhcnNbbm9kZV9jb25zdGFudHMuQ0xVU1RFUl9OQU1FXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVFbnZWYXJpYWJsZXMoZXh0cmFWYXJzW25vZGVfY29uc3RhbnRzLkVOVl0sIGN0cmwuZW52VmFyaWFibGVzKTtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlQW5zaWJsZVZhcmlhYmxlcyhleHRyYVZhcnMsIGN0cmwuYW5zaWJsZVZhcmlhYmxlcyk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUVudlZhcmlhYmxlcyhlbnZWYXJzLCBlbnZWYXJpYWJsZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgICAgICBmb3IgKGkgaW4gZW52VmFycykge1xuICAgICAgICAgICAgICAgICAgICBlbnZWYXJpYWJsZXMucHVzaCh7J25hbWUnOiBpLCAndmFsdWUnOiBlbnZWYXJzW2ldfSk7XG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUFuc2libGVWYXJpYWJsZXMoZXh0cmFWYXJzLCBhbnNpYmxlVmFyaWFibGVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNldHRpbmdfZmlsdGVyID0gW25vZGVfY29uc3RhbnRzLkFQSUNfQ09OVFJfVU5SRVNUUklDVF9NT0RFLFxuICAgICAgICAgICAgICAgICAgICBub2RlX2NvbnN0YW50cy5BUElDX0VQR19CUklER0VfRE9NQUlOLCBub2RlX2NvbnN0YW50cy5BUElDX0xFQUZfTk9ERVMsIFxuICAgICAgICAgICAgICAgICAgICBub2RlX2NvbnN0YW50cy5BUElDX1BBU1NXT1JELCBub2RlX2NvbnN0YW50cy5BUElDX1BIWVNfRE9NQUlOLCBcbiAgICAgICAgICAgICAgICAgICAgbm9kZV9jb25zdGFudHMuQVBJQ19VUkwsIG5vZGVfY29uc3RhbnRzLkFQSUNfVVNFUk5BTUUsIFxuICAgICAgICAgICAgICAgICAgICBub2RlX2NvbnN0YW50cy5DT05USVZfTkVUX01PREUsIG5vZGVfY29uc3RhbnRzLkNPTlRST0xfSU5URVJGQUNFLCBcbiAgICAgICAgICAgICAgICAgICAgbm9kZV9jb25zdGFudHMuRU5WLCBub2RlX2NvbnN0YW50cy5GV0RfTU9ERSwgbm9kZV9jb25zdGFudHMuREFUQV9JTlRFUkZBQ0UsIFxuICAgICAgICAgICAgICAgICAgICBub2RlX2NvbnN0YW50cy5TQ0hFRF9QUk9WSURFUiwgbm9kZV9jb25zdGFudHMuVklQX0FERFIsIFxuICAgICAgICAgICAgICAgICAgICBub2RlX2NvbnN0YW50cy5VQ1BfQk9PVFNUUkFQX05PREUsIG5vZGVfY29uc3RhbnRzLkNMVVNURVJfTkFNRV07XG4gICAgICAgICAgICAgICAgdmFyIGk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgaW4gZXh0cmFWYXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXR0aW5nX2ZpbHRlci5pbmRleE9mKGkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5zaWJsZVZhcmlhYmxlcy5wdXNoKHsnbmFtZSc6IGksICd2YWx1ZSc6IGV4dHJhVmFyc1tpXX0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlU2V0dGluZ3Mobm9kZU9wc09iaikge1xuICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5wb3N0KENvbnRpdkdsb2JhbHMuTk9ERVNfU0VUVElOR1NfU0VUX0VORFBPSU5ULCBub2RlT3BzT2JqLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnaGVhZGVycyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlRXh0cmFWYXJzKGN0cmwpIHtcbiAgICAgICAgICAgICAgICAvL0FkZCBhbnNpYmxlIHZhcmlhYmxlcyB0byBleHRyYV92YXJzXG4gICAgICAgICAgICAgICAgY3RybC5hbnNpYmxlVmFyaWFibGVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgY3RybC5leHRyYV92YXJzW2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy9BZGQgZW52aXJvbm1lbnQgdmFyaWFibGVzIHRvIGV4dHJhX3ZhcnNcbiAgICAgICAgICAgICAgICB2YXIgZW52VmFycyA9IHt9O1xuICAgICAgICAgICAgICAgIGN0cmwuZW52VmFyaWFibGVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgZW52VmFyc1tpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjdHJsLmV4dHJhX3ZhcnNbbm9kZV9jb25zdGFudHMuRU5WXSA9IGVudlZhcnM7XG4gICAgICAgICAgICAgICAgY3RybC5ub2RlT3BzT2JqLmV4dHJhX3ZhcnMgPSBKU09OLnN0cmluZ2lmeShjdHJsLmV4dHJhX3ZhcnMpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDbGVhbnVwIGFuc2libGUgdmFyaWFibGVzIGZvciBuZXR3b3JrIG1vZGUgYW5kIHNjaGVkdWxlci4gbmctaWYgcmVtb3ZlcyBpdCBmcm9tIHRoZSB2aWV3IChET00pIGJ1dCBub3QgZnJvbVxuICAgICAgICAgICAgICogdGhlIG1vZGVsLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBjbGVhbnVwRXh0cmFWYXJzKGN0cmwpIHtcbiAgICAgICAgICAgICAgICAvL0NsZWFudXAgZm9yIG5ldHdvcmsgbW9kZVxuICAgICAgICAgICAgICAgIGlmIChjdHJsLmV4dHJhX3ZhcnNbbm9kZV9jb25zdGFudHMuQ09OVElWX05FVF9NT0RFXSA9PSAnYWNpJykge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY3RybC5leHRyYV92YXJzW25vZGVfY29uc3RhbnRzLkZXRF9NT0RFXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY3RybC5leHRyYV92YXJzW25vZGVfY29uc3RhbnRzLkFQSUNfVVJMXTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGN0cmwuZXh0cmFfdmFyc1tub2RlX2NvbnN0YW50cy5BUElDX1VTRVJOQU1FXTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGN0cmwuZXh0cmFfdmFyc1tub2RlX2NvbnN0YW50cy5BUElDX1BBU1NXT1JEXTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGN0cmwuZXh0cmFfdmFyc1tub2RlX2NvbnN0YW50cy5BUElDX0xFQUZfTk9ERVNdO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY3RybC5leHRyYV92YXJzW25vZGVfY29uc3RhbnRzLkFQSUNfUEhZU19ET01BSU5dO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY3RybC5leHRyYV92YXJzW25vZGVfY29uc3RhbnRzLkFQSUNfRVBHX0JSSURHRV9ET01BSU5dO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY3RybC5leHRyYV92YXJzW25vZGVfY29uc3RhbnRzLkFQSUNfQ09OVFJfVU5SRVNUUklDVF9NT0RFXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9DbGVhbnVwIGZvciBzY2hlZHVsZXJcbiAgICAgICAgICAgICAgICBpZiAoY3RybC5leHRyYV92YXJzW25vZGVfY29uc3RhbnRzLlNDSEVEX1BST1ZJREVSXSA9PSAnbmF0aXZlLXN3YXJtJykge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY3RybC5leHRyYV92YXJzW25vZGVfY29uc3RhbnRzLlVDUF9CT09UU1RSQVBfTk9ERV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0U2V0dGluZ3M6IGdldFNldHRpbmdzLFxuICAgICAgICAgICAgY3JlYXRlRW52VmFyaWFibGVzOiBjcmVhdGVFbnZWYXJpYWJsZXMsXG4gICAgICAgICAgICBjcmVhdGVBbnNpYmxlVmFyaWFibGVzOiBjcmVhdGVBbnNpYmxlVmFyaWFibGVzLFxuICAgICAgICAgICAgdXBkYXRlU2V0dGluZ3M6IHVwZGF0ZVNldHRpbmdzLFxuICAgICAgICAgICAgY3JlYXRlRXh0cmFWYXJzOiBjcmVhdGVFeHRyYVZhcnMsXG4gICAgICAgICAgICBjbGVhbnVwRXh0cmFWYXJzOiBjbGVhbnVwRXh0cmFWYXJzXG4gICAgICAgIH1cbiAgICB9XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi51dGlscycpXG4gICAgLmZhY3RvcnkoJ1ZvbHVtZVNldHRpbmdTZXJ2aWNlJywgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcblxuICAgICAgICBmdW5jdGlvbiBnZXRTZXR0aW5ncygpIHtcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICAgICB2YXIgdXJsID0gQ29udGl2R2xvYmFscy5WT0xVTUVTX0dMT0JBTF9FTkRQT0lOVDtcbiAgICAgICAgICAgICRodHRwLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVNldHRpbmdzKHNldHRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiAkaHR0cC5wb3N0KENvbnRpdkdsb2JhbHMuVk9MVU1FU19HTE9CQUxfRU5EUE9JTlQsIHNldHRpbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdldFNldHRpbmdzOiBnZXRTZXR0aW5ncyxcbiAgICAgICAgICAgIHVwZGF0ZVNldHRpbmdzOiB1cGRhdGVTZXR0aW5nc1xuICAgICAgICB9XG4gICAgfV0pOyIsImFuZ3VsYXIubW9kdWxlKFwiY29udGl2LmRpcmVjdGl2ZXNcIilcbiAgICAuZGlyZWN0aXZlKFwiY3R2QWNpdmFsaWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9kaXJlY3RpdmVzL25vZGVzL2FjaXZhbGlkLmh0bWwnLFxuICAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgICBmb3JtOiBcIj1cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0pOyIsImFuZ3VsYXIubW9kdWxlKFwiY29udGl2LmRpcmVjdGl2ZXNcIilcbiAgICAuZGlyZWN0aXZlKFwiY3R2Q29udHJvbGludGVyZmFjZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2RpcmVjdGl2ZXMvbm9kZXMvY29udHJvbGludGVyZmFjZS5odG1sJyxcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgZXh0cmF2YXJzOiBcIj1cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0pOyIsImFuZ3VsYXIubW9kdWxlKFwiY29udGl2LmRpcmVjdGl2ZXNcIilcbiAgICAuZGlyZWN0aXZlKFwiY3R2TmV0d29ya21vZGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9kaXJlY3RpdmVzL25vZGVzL25ldHdvcmttb2RlLmh0bWwnLFxuICAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgICBleHRyYXZhcnM6IFwiPVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSk7IiwiYW5ndWxhci5tb2R1bGUoXCJjb250aXYuZGlyZWN0aXZlc1wiKVxuICAgIC5kaXJlY3RpdmUoXCJjdHZTY2hlZHVsZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9kaXJlY3RpdmVzL25vZGVzL3NjaGVkdWxlci5odG1sJyxcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgZXh0cmF2YXJzOiBcIj1cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
