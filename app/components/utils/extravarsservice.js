angular.module('contiv.utils')
    .factory('ExtravarsService', ['$http', '$q',
        function ($http, $q) {

            function getSetting() {
                var deferred = $q.defer();
                var url = ContivGlobals.GLOBAL_GET_ENDPOINT;
                $http.get(url).then(function successCallback(result) {
                    deferred.resolve(result.data);
                }, function errorCallback(result) {
                    deferred.reject(result.data);
                });
                return deferred.promise;
            }

            function setSettings(ctrl) {
                getSetting().then(function successCallback(result) {
                    ctrl.setting = result;
                    var ctrl_interface = ctrl.setting.extra_vars['control_interface'];
                    var data_interface = ctrl.setting.extra_vars['netplugin_if'];
                    var vip_addr = ctrl.setting.extra_vars['service_vip'];
                    var sched_provider = ctrl.setting.extra_vars['scheduler_provider'];
                    var network_mode = ctrl.setting.extra_vars['contiv_network_mode'];
                    var env_vars = ctrl.setting.extra_vars['env'];
                    var setting_filter = [ "apic_contracts_unrestricted_mode", "apic_epg_bridge_domain", 
                        "apic_leaf_nodes", "apic_password", "apic_phys_domain", "apic_url", "apic_username", 
                        "contiv_network_mode", "control_interface", "env", "fwd_mode", "netplugin_if", 
                        "scheduler_provider", "service_vip", "standalone", "ucp_bootstrap_node_name"];

                    if (ctrl_interface) {
                        ctrl.extra_vars['control_interface'] = ctrl_interface; 
                    }
                    if (data_interface) {
                        ctrl.extra_vars['netplugin_if'] = data_interface; 
                    }
                    if (vip_addr) {
                        ctrl.extra_vars['service_vip'] = vip_addr; 
                    }
                    if (sched_provider) {
                        ctrl.extra_vars['scheduler_provider'] = sched_provider;
                        ctrl.extra_vars['ucp_bootstrap_node_name'] = 
                            ctrl.setting.extra_vars['ucp_bootstrap_node_name']; 
                    }
                    if (network_mode) {
                        ctrl.extra_vars['contiv_network_mode'] = network_mode;
                        if (network_mode == "standalone") {
                            ctrl.extra_vars['fwd_mode'] = 
                                ctrl.setting.extra_vars['fwd_mode'];
                        }
                        else if (network_mode == "aci") {
                            ctrl.extra_vars['apic_contracts_unrestricted_mode'] = 
                                ctrl.setting.extra_vars['apic_contracts_unrestricted_mode'];
                            ctrl.extra_vars['apic_epg_bridge_domain'] = 
                                ctrl.setting.extra_vars['apic_epg_bridge_domain'];
                            ctrl.extra_vars['apic_leaf_nodes'] = 
                                ctrl.setting.extra_vars['apic_leaf_nodes'];
                            ctrl.extra_vars['apic_password'] = 
                                ctrl.setting.extra_vars['apic_password'];
                            ctrl.extra_vars['apic_phys_domain'] = 
                                ctrl.setting.extra_vars['apic_phys_domain'];
                            ctrl.extra_vars['apic_url'] = 
                                ctrl.setting.extra_vars['apic_url'];
                            ctrl.extra_vars['apic_username'] = 
                                ctrl.setting.extra_vars['apic_username'];                        
                        }
                    }

                    for (i in ctrl.setting.extra_vars) {
                        if (setting_filter.indexOf(i) === -1) {
                            ctrl.ansibleVariables.push({"name": i, "value": ctrl.setting.extra_vars[i]});
                        }
                    }

                    if (Object.keys(env_vars).length > 0) {
                        for (i in env_vars) {
                            ctrl.envVariables.push({"name": i, "value": env_vars[i]});
                        }
                    }

                }, function errorCallback(result) {
                });
            }

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
                ctrl.extra_vars['env'] = envVars;
                ctrl.nodeOpsObj.extra_vars = JSON.stringify(ctrl.extra_vars);
            }

            /**
             * Cleanup ansible variables for network mode and scheduler. ng-if removes it from the view (DOM) but not from
             * the model.
             */
            function cleanupExtraVars(ctrl) {
                //Cleanup for network mode
                if (ctrl.extra_vars['contiv_network_mode'] == 'aci') {
                    delete ctrl.extra_vars['fwd_mode'];
                } else {
                    delete ctrl.extra_vars['apic_url'];
                    delete ctrl.extra_vars['apic_username'];
                    delete ctrl.extra_vars['apic_password'];
                    delete ctrl.extra_vars['apic_leaf_nodes'];
                    delete ctrl.extra_vars['apic_phys_domain'];
                    delete ctrl.extra_vars['apic_epg_bridge_domain'];
                    delete ctrl.extra_vars['apic_contracts_unrestricted_mode'];
                }
                //Cleanup for scheduler
                if (ctrl.extra_vars['scheduler_provider'] == 'native-swarm') {
                    delete ctrl.extra_vars['ucp_bootstrap_node_name'];
                }
            }

        return {
            getSetting: getSetting,
            setSettings: setSettings,
            createExtraVars: createExtraVars,
            cleanupExtraVars: cleanupExtraVars
        }
    }]);