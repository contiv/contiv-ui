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