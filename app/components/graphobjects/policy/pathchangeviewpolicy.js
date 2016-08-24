/**
 * This policy changes the view to the timegraph of link data on click.
 */
angular.module('contiv.graph')
    .factory('PathChangeViewPolicy', ['Policy', function (Policy) {
    	class PathChangeViewPolicy extends Policy.Policy {
            /**
             * Called to build policy
             *
             * @param   {Angular State}    $state    Used to change view
             */
            constructor($state) {
                super('PathChangeViewPolicy');
                this.$state = $state;
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
                    if (thisPolicy.graph.dataSource.hasChild(childId) === true) {
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
             * @param      {Link}  edge    The clicked edge
             */
            viewEdge(edge) {
                var sourceList = [];
                var targetList = [];
                var sourceId = edge.source.id;
                var targetId = edge.target.id;

                if (this.graph.dataSource.hasChild(sourceId) === true) {//Not a container node, need to aggregate
                    sourceList = this.generateList(sourceId);
                } else {
                    sourceList = [sourceId];
                }

                if (this.graph.dataSource.hasChild(targetId) === true) {//Not a container node, need to aggregate
                    targetList = this.generateList(targetId);
                } else {
                    targetList = [targetId];
                }
                this.$state.go('contiv.menu.visualization.edge', 
                    {sourceName: sourceId, targetName: targetId,
                        sourceList: sourceList, targetList: targetList});
            }

            mousedown(d3path, d) {
                this.viewEdge(d);
            }

        }
        return {
            Policy: PathChangeViewPolicy,
        }
}]);











