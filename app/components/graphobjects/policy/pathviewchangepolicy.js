/**
 * This policy changes the view to the timegraph of link data on click.
 */
angular.module('PolicyModule')
    .factory('PathChangeViewPolicy', ['Policy', function (Policy) {
    	class PathChangeViewPolicy extends Policy.Policy {
            /**
             * Called to build policy
             *
             * @param   {Angular State}    $state      Used to change view
             */
            constructor($state) {
                super('PathChangeViewPolicy');
                this.$state = $state;
            }

            /**
             * Checks if the given id is a Endpoint node or a
             * Provider node
             *
             * @param      {string}  id      Node ID
             * @return     {string}  type    The type, undefined 
             * 							     if neither.
             */
            getType(id) {
                var type;
                if (_.includes(this.graph.dataSource.endpoints, id)) {
                    type = "EndpointIP" 
                } else if (_.includes(this.graph.dataSource.providers, id)) {
                    type = "ProviderIP"
                }
                return type;
            }

            /**
             * Generates a list of all child containers of the service
             * Can handle nested services.
             *
             * @param      {string}  id      Node ID
             */
            generateList(id) {
                var thisPolicy = this;
                var retList = [];
                var nodeIds = this.graph.dataSource.children_struct[id];
                _.forEach(nodeIds, function(childId) {
                    var type = thisPolicy.getType(childId);
                    if (type == null) {
                        retList.concat(thisPolicy.generateList(childId));
                    } else {
                        retList.push(childId);
                    }
                })
                return retList
            }

            /**
             * Used to reroute an edge when clicked
             *
             * @param      {<type>}  edge    The clicked edge
             */
            viewEdge(edge) {
                var sourceType;
                var targetType;
                var sourceList = [];
                var targetList = [];
                var sourceId = edge.source.id;
                var targetId = edge.target.id;

                //saving current layout if split policy is implemented
                // if (this.graph.saveGraph != null) {
                // 	this.StateSave.state = this.graph.saveGraph();
                // }

                sourceType = this.getType(sourceId);
                if (sourceType == null) {//Not a container node, need to aggregate
                    sourceList = this.generateList(sourceId);
                    sourceType = this.getType(sourceList[0]);
                } else {
                    sourceList = [sourceId];
                }

                targetType = this.getType(targetId);
                if (targetType == null) {//Not a container node, need to aggregate
                    targetList = this.generateList(targetId);
                    targetType = this.getType(targetList[0]);
                } else {
                    targetList = [targetId];
                }
                this.$state.go('contiv.menu.visualization.edge', 
                    {sourceName: sourceId, targetName: targetId,
                        sourceList: sourceList, targetList: targetList, 
                        sourceType:sourceType, targetType:targetType});
            }

            mousedown(d3path, d) {
                this.viewEdge(d);
            }

        }
        return {
            Policy: PathChangeViewPolicy,
        }
}]);











