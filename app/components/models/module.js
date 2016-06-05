/**
 * Created by vjain3 on 3/14/16.
 */
angular.module('contiv.models', []);
var ContivGlobals = (function () {

    return {
        //REST endpoints for 
        'NETWORKS_ENDPOINT': '/api/networks/',
        'POLICIES_ENDPOINT': '/api/policys/',
        'RULES_ENDPOINT': '/api/rules/',
        'APPLICATIONGROUPS_ENDPOINT': '/api/endpointGroups/',
        'SERVICELBS_ENDPOINT': '/api/serviceLBs/',

        //REST endpoints for VOLMASTER
        'VOLUMES_ENDPOINT': '/volumes/',
        'VOLUMES_CREATE_ENDPOINT': '/volumes/create/',
        'VOLUMES_DELETE_ENDPOINT': '/volumes/remove/',
        'VOLUMES_COPYSNAPSHOTS_ENDPOINT': '/volumes/copy/',
        'VOLUMES_USES_ENDPOINT': '/uses/mounts/',
        'VOLUMES_SNAPSHOTS_ENDPOINT': '/snapshots/',

        'STORAGEPOLICIES_ENDPOINT': '/policies/',


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
