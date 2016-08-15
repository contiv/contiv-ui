/**
 * Created by hardik gandhi on 7/8/16.
 */

angular.module("contiv.applicationgroups")
    .directive("ctvPolicy",function(){
        return{
            restrict:'E',
            scope:{
                mode:'@',
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

                        if (currentPolicyName != undefined && _.includes($scope.selectedPolicies, currentPolicyName) == false) {
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
                    }

                    /**
                     * Remove policy from application group
                     */
                    $scope.removeIsolationPolicy = function(policyName) {
                        _.remove($scope.selectedPolicies,function (policy) {
                            return policy == policyName;
                        });
                        _.remove($scope.applicationgroup.policies, function (policy) {
                            return policy == policyName;
                        });
                        _.remove($scope.incomingRules, function (rule) {
                            return rule.policyName == policyName;
                        });
                        _.remove($scope.outgoingRules, function (rule) {
                            return rule.policyName == policyName;
                        });
                    }


                    if($scope.mode == 'details' || $scope.applicationgroup.groupName != "") {
                        ApplicationGroupsModel.getModelByKey($stateParams.key)
                            .then(function (group) {
                                $scope.applicationgroup.policies = group.policies;

                                //Application Groups might not have any policies associated with them so define an empty array
                                if ($scope.applicationgroup.policies === undefined) {
                                    $scope.applicationgroup.policies = [];
                                }
                                getRules();
                            });
                    }

                    getIsolationPolicies();
                }],
            templateUrl:'applicationgroups/isolationpolicy.html'
        }
    });



