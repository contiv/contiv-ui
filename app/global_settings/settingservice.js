angular.module('contiv.globalsettings')
    .factory('SettingService', ['$state', '$stateParams', 'NodesModel',
        function ($state, $stateParams, NodesModel) {
            var nodeCommissionCtrl = this;

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
            nodeCommissionCtrl.extra_vars = {}; //TODO Intialize from global settings

        return {
            cleanupExtraVars: cleanupExtraVars,
        }
    }]);