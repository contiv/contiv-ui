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
        ['$state', '$stateParams', '$scope', '$interval', '$filter', 'NetworksModel', 'ApplicationGroupsModel', 'CRUDHelperService',
            function ($state, $stateParams, $scope, $interval, $filter, NetworksModel, ApplicationGroupsModel, CRUDHelperService) {

                var networkStatsCtrl = this;

                /* Gets the Network Operational state from the server */
                
                NetworksModel.getInspectByKey($stateParams.key, ContivGlobals.NETWORKS_INSPECT_ENDPOINT)
                    .then(function (networkInspectStats) {
                        networkStatsCtrl.networkInspectStats = networkInspectStats;
                        buildEndPoints(networkInspectStats.Oper.endpoints);
                    });

                /* This function would build the snaphots array and the endpoints object.
                eg :
                 networkStatsCtrl.snapshots=["ContainerName1","ContainerName2","ContainerName3"..]
                        --Used in displaying the list of Containers inside ctv-table directive

                 networkStatsCtrl.endPoints={ContainerName1:[{name:"homingHost",value:"cluster-node1"},{name:macAddress,value:"02:02"}],
                                             ContainerName2:[{name:"homingHost",value:"cluster-node1"},{name:macAddress,value:"02:04"}]}
                        --Used in displaying the container detail inside an accordion.
                 */
                function buildEndPoints(endpointsarray){
                    snapshots=[];
                    endpointsobj={};
                    for(var i in endpointsarray ){
                        snapshots.push(endpointsarray[i].name);
                        var keyvalpairs=[];
                        for(var key in endpointsarray[i]){
                            var endpoint={};
                            endpoint.name=key;
                            switch (key){
                                case "ipAddress" :  endpoint.value=endpointsarray[i][key].filter(function(ipAddress){return ipAddress.length > 0;}).join();
                                                    break;
                                case "labels" : var str = endpointsarray[i][key];
                                                var newstr = str.replace(/(map\[|\])/gi,'');
                                                if(newstr.length>0) {
                                                    var newstr = newstr.replace(/(:)/gi, '=');
                                                    var labellist = newstr.split(' ');
                                                }
                                                else{
                                                    var labellist='';
                                                }
                                                endpoint.value=labellist;
                                                break;
                                default : endpoint.value=endpointsarray[i][key];
                            }
                            keyvalpairs.push(endpoint);
                        }
                        endpointsobj[endpointsarray[i].name]=keyvalpairs;
                    }
                    networkStatsCtrl.snapshots=snapshots;
                    networkStatsCtrl.endpoints=endpointsobj;
                }
            }]);