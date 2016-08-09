angular.module('contiv.visualization')
    .factory('VisualizationService', ['$http', '$q', function ($http, $q) {
        function makeGet(url, config) {
            var deferred = $q.defer();
            $http.get(url, config).then(function successCallback(result) {
                deferred.resolve(result.data);
            }, function errorCallback(result) {
                deferred.reject(result.data);
            });
            return deferred.promise;
        }

        // function getGraphData() {
        //     var nodeData = getNodeData();
        //     var linkData = getLinkData();
        //     return {nodeData:nodeData, linkData:linkData}
        // }

        // function getNodeData() {
        //     var url = ContivGlobals.VISUALIZATION_ENDPOINT
        //     url += 'influx/';
        //     var endpointUrl = url + `query?pretty=true --data-urlencode "db=telegraf" --data-urlencode 'q=show TAG VALUES from httpjson_svcstats with key = "EndpointIP"'`;
        //     var endpoints = makeGet(endpointUrl);
        //     var providerUrl = url + `query?pretty=true --data-urlencode "db=telegraf" --data-urlencode 'q=show TAG VALUES from httpjson_svcstats with key = "ProviderIP"'`;
        //     var providers = makeGet(providerUrl);
        //     return {endpoints:endpoints, providers:providers};
        // }

        function getGraphData() {
            var url = ContivGlobals.VISUALIZATION_ENDPOINT
            url += 'influx/query';
            var linkInfluxData = [];
            // var epUrl = url + `/query?pretty=true --data-urlencode "db=telegraf" --data-urlencode "q=SELECT BytesIn, BytesOut, EndpointIP, ProviderIP FROM httpjson_svcstats WHERE time > now() - 1m GROUP BY * LIMIT 1"`;
            // console.log(epUrl);
            config = {
                params: {
                    pretty:true,
                    db:"telegraf",
                    q:"SELECT BytesIn, BytesOut, EndpointIP, ProviderIP FROM httpjson_svcstats WHERE time > now() - 1m GROUP BY * LIMIT 1"
                }
            }
            return makeGet(url, config);
        }

        // function getChildrenStruct() {
        //     var url = ContivGlobals.VISUALIZATION_ENDPOINT
        //     url += 'data/children-struct'
        //     return makeGet(url);
        // }

        // function getAncestorsStruct() {
        //     var url = ContivGlobals.VISUALIZATION_ENDPOINT
        //     url += 'data/ancestors-struct'
        //     return makeGet(url);
        // }

        function getStructureData() {
            var url = ContivGlobals.VISUALIZATION_ENDPOINT
            url += 'services';
            return makeGet(url);
        }

        function buildWhereQuery(points, type) {
            var query = "(";
            query += type + "="
            query += "'" + points[0] + "' ";
            //starts at 1, so will not run if length is 1
            for (var i = 1; i < points.length; i++) {
                query += 'OR ';
                query += type + "="
                query += "'" + points[i] + "' ";
            }
            query += ")";
            return query;
        }

        function getEdgeData(sourceList, targetList, sourceType, targetType, time) {
            var direction;
            var url = ContivGlobals.VISUALIZATION_ENDPOINT
            url += 'influx/query';

            if (sourceType == 'EndpointIP') {
                direction = 'BytesOut';
            } else {
                direction = 'BytesIn';
            }
            config = {
                params: {
                    pretty : true,
                    db : "telegraf",
                    q: "SELECT sum(" + direction + ") from httpjson_svcstats WHERE time > now() - 15s AND "
                         + buildWhereQuery(sourceList, sourceType) +" AND " 
                         + buildWhereQuery(targetList, targetType) 
                         + "GROUP BY time(20s) LIMIT 1"
                }
            }
             // console.log('q', config.params.q);
            // url += 'timedata/' + sourceId +'/' + targetId + '/' + time;
            return makeGet(url, config);
        }

        

        function getOldEdgeData(sourceList, targetList, sourceType, targetType) {
            var direction;
            // console.log(sourceList, targetList, sourceType, targetType);
            var url = ContivGlobals.VISUALIZATION_ENDPOINT
            url += 'influx/query';

            if (sourceType == 'EndpointIP') {
                direction = 'BytesOut';
            } else {
                direction = 'BytesIn';
            }

            config = {
                params: {
                    pretty : true,
                    db : "telegraf",
                    q: "SELECT sum(" + direction + ") FROM httpjson_svcstats WHERE time > now() - 1m AND "
                         + buildWhereQuery(sourceList, sourceType) +" AND " 
                         + buildWhereQuery(targetList, targetType) 
                         + " GROUP BY time(10s) fill(none)"
                }
            }

            return makeGet(url, config);
        }

        return {
            getGraphData: getGraphData,
            // getAncestorsStruct: getAncestorsStruct,
            // getChildrenStruct: getChildrenStruct,
            getStructureData: getStructureData,
            getEdgeData: getEdgeData,
            getOldEdgeData: getOldEdgeData
        }
    }])






