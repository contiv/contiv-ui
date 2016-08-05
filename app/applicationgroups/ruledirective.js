/**
 * Created by hardik gandhi on 7/8/16.
 */

angular.module("contiv.applicationgroups")
    .controller('IsolationRuleCtrl',[
        '$scope',
        '$stateParams',
        'ApplicationGroupsModel',
        'ApplicationGroupService',
        'PoliciesModel',
        'RulesModel',
        'CRUDHelperService',
        function($scope,
                 $stateParams,
                 ApplicationGroupsModel,
                 ApplicationGroupService,
                 PoliciesModel,
                 RulesModel,
                 CRUDHelperService){

        $scope.appGroupCtrl = {
            applicationGroup : {},
            selectedPolicy : {},
            selectedPolicies : [],
            incomingRules : [],
            outgoingRules : [],
            isolationPolicies : []
        };

        function resetForm() {
            CRUDHelperService.stopLoader($scope.appGroupCtrl);
            CRUDHelperService.hideServerError($scope.appGroupCtrl);
            $scope.appGroupCtrl.applicationGroup = {
                groupName: '',
                networkName: '',
                policies: [],
                tenantName: 'default'//TODO: Remove hardcoded tenant.
            };
        }

        function getRules() {
            $scope.appGroupCtrl.applicationGroup.policies.forEach(function (policy) {
                //To display rules of selected policies
                RulesModel.getIncomingRules(policy, 'default')
                    .then(function (rules) {
                        Array.prototype.push.apply($scope.appGroupCtrl.incomingRules, rules);
                    });
                RulesModel.getOutgoingRules(policy, 'default')
                    .then(function (rules) {
                        Array.prototype.push.apply($scope.appGroupCtrl.outgoingRules, rules);
                    });
            });
        }

        if($scope.mode == 'details' || $scope.applicationGroup.groupName != "") {
            ApplicationGroupsModel.getModelByKey($stateParams.key)
                .then(function (group) {
                    $scope.appGroupCtrl.applicationGroup.policies = group.policies;

                    //Application Groups might not have any policies associated with them so define an empty array
                    if ($scope.appGroupCtrl.applicationGroup.policies === undefined) {
                        $scope.appGroupCtrl.applicationGroup.policies = [];
                    }

                    getRules();
                });
            }


        if($scope.mode == 'edit' && $scope.applicationGroup.groupName == "")   {
            resetForm()
        }

        /**
         * Get policies for the given tenant.
         */
        function getIsolationPolicies() {
            PoliciesModel.get().then(function (result) {
                    $scope.appGroupCtrl.isolationPolicies = _.filter(result, {
                    'tenantName': 'default'//TODO: Remove hardcoded tenant.
                })
            });
        }
        /**
         * Add policy to application group
         */
        $scope.addIsolationPolicy = function() {
            ApplicationGroupService.addIsolationPolicy($scope.appGroupCtrl);
            $scope.applicationGroup.policies = $scope.appGroupCtrl.applicationGroup.policies;
        }

        /**
         * Remove policy from application group
         */
        $scope.removeIsolationPolicy = function(policyName) {
            ApplicationGroupService.removeIsolationPolicy($scope.appGroupCtrl, policyName);
            $scope.applicationGroup.policies = $scope.appGroupCtrl.applicationGroup.policies;
        }
        getIsolationPolicies()

    }])
    .directive("ctvRule",function(){
        return{
            return:'E',
            scope:{
                mode:'@',
                applicationGroup:'='
            },
            controller: 'IsolationRuleCtrl',
            templateUrl:'applicationgroups/rule.html'
        }
    });

