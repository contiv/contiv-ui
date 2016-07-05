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
        ['$state', '$stateParams', '$scope', '$interval', '$filter', 'NetworksModel',
            function ($state, $stateParams, $scope, $interval, $filter, NetworksModel) {

                var networkStatsCtrl = this;

                /* Gets the Network Operational state from the server */
                function getNetworkInspect(refresh){
                    NetworksModel.getInspectByKey($stateParams.key, ContivGlobals.NETWORKS_INSPECT_ENDPOINT,refresh)
                        .then(function (networkInspectStats) {
                            networkStatsCtrl.networkInspectStats = networkInspectStats;
                            buildEndPoints(networkInspectStats.Oper.endpoints);
                        });
                }

                getNetworkInspect(false);


                /* This function would build the snaphots array and the endpoints object.
                eg :
                 networkStatsCtrl.snapshots=["ContainerName1","ContainerName2","ContainerName3"..]
                        --Used in displaying the list of Containers inside ctv-table directive

                 networkStatsCtrl.endPoints={ContainerName1:[{name:"homingHost",value:"cluster-node1"},{name:macAddress,value:"02:02"}],
                                             ContainerName2:[{name:"homingHost",value:"cluster-node1"},{name:macAddress,value:"02:04"}]}
                        --Used in displaying the container detail inside an accordion.
                 */
                function buildEndPoints(list){
                    var endpointList=list;
                    var containerList=[];
                    var containerDetails={};
                    for(var i in endpointList ){
                        var containerNameAndAttr = endpointList[i].name;
                        var containerAttributes=[];
                        for(var key in endpointList[i]){
                            var endpointAttribute={};
                            endpointAttribute.name=key;
                            switch (key){
                                case "ipAddress" :  endpointAttribute.value=endpointList[i][key].filter(function(ipAddress){return ipAddress.length > 0;}).join();
                                                    break;
                                case "labels" : var str = endpointList[i][key];
                                                var newstr = str.replace(/(map\[|\])/gi,'');
                                                if(newstr.length>0) {
                                                    var newstr = newstr.replace(/(:)/gi, '=');
                                                    var labellist = newstr.split(' ');
                                                }
                                                else{
                                                    var labellist='';
                                                }
                                                endpointAttribute.value=labellist;
                                                break;
                                default : endpointAttribute.value=endpointList[i][key];
                            }
                            containerNameAndAttr+=" "+endpointAttribute.value.toString();
                            containerAttributes.push(endpointAttribute);
                        }
                        containerList.push(containerNameAndAttr);
                        containerDetails[endpointList[i].name]=containerAttributes;
                    }

                    if(checkContainerChanged(networkStatsCtrl.containerDetails,containerDetails)){
                            networkStatsCtrl.containerList=containerList;
                            networkStatsCtrl.containerDetails=containerDetails;
                    }
                }

                /* This function checks whether any new containers were added or not */
                function checkContainerChanged(contDetailsA,contDetailsB){
                    if(contDetailsA==undefined)
                        return true;
                    else{
                        if(contDetailsA!=undefined && contDetailsB!=undefined){
                            if(Object.keys(contDetailsA).length!=Object.keys(contDetailsB).length)
                                return true;
                            for(var key in contDetailsB){
                                if(!key in contDetailsA)
                                    return true;
                            }
                            return false;
                        }
                    }

                }

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