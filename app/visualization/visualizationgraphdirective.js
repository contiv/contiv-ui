
angular.module('contiv.visualization')
    .service('StateSave', function () {
        this.savedStates = {};
    })
    .directive("visualizationGraph", ['$window', '$state', 'VisualizerGraph', 'PolicyService', 'DataSource', 'StateSave',
        function($window, $state, VisualizerGraph, PolicyService, DataSource, StateSave) {
            function visualizationlistd3(scope, elem, attrs, d3, VisualizerGraph, PolicyService, DataSource, StateSave) {
                //don't run until all initialization calls have returned
                if (scope.nodes === undefined || scope.links === undefined || scope.children_struct === undefined ||
                    scope.ancestors_struct === undefined) {
                    return;
                }

                //creating DataSource
                var dataSource = new DataSource.DataSource(scope.nodes, scope.links, scope.children_struct, 
                                    scope.ancestors_struct, scope.endpoints, scope.providers, scope.labels,
                                    scope.serviceSelectors);
                dataSource.setAncestors();

                var nodes, links;

                var topData = dataSource.getTopLevelFlow();
                nodes = dataSource.processNodeData(topData.nodeData);
                links = dataSource.processLinkData(topData.linkData, nodes);


                var docEl = document.documentElement,
                    bodyEl = document.getElementsByTagName('body')[0];
              
                var width = bodyEl.clientWidth,
                    height =  bodyEl.clientHeight;

                /** MAIN SVG **/
                var rawSvg=elem.find('svg');

                var offset = $('#visualization-graph').offset();

                var divWidth = $('#visualization-graph').width();

                var svg = d3.select(rawSvg[0])
                    .attr("width", divWidth)
                    .attr("height", height - offset.top - 20);

                //installing policies
                scope.visualizationGraph = new VisualizerGraph.Graph(svg, nodes, links, dataSource, 
                            scope.children_struct, scope.ancestors_struct);
                scope.visualizationGraph.installDefaultPathPolicy(new PolicyService.SaveStatePolicy(StateSave.savedStates));
                scope.visualizationGraph.installDefaultPathPolicy(new PolicyService.PathChangeViewPolicy($state));
                //QTipPolicy is for both Nodes and Paths, install same one on both
                var qTipPolicy = new PolicyService.QTipPolicy();
                scope.visualizationGraph.installDefaultNodePolicy(qTipPolicy);
                scope.visualizationGraph.installDefaultPathPolicy(qTipPolicy);
                var splitJoinViewPolicy = new PolicyService.SplitJoinViewPolicy();
                scope.visualizationGraph.installDefaultNodePolicy(splitJoinViewPolicy);
                splitJoinViewPolicy.installBackButton($('#backButton'));
                splitJoinViewPolicy.installTitle($('#graph-title'));

                //load old view if it exists.
                if (_.isEmpty(StateSave.savedStates) == false) {
                    var graph = scope.visualizationGraph;
                    graph.load(StateSave.savedStates);
                } else {
                    scope.visualizationGraph.updateGraph();
                }
                
            }

            return{
                restrict:'EA',
                replace: false,
                templateUrl: 'visualization/visualizationtemplate.html',
                link: function(scope, elem, attrs){
                    scope.$on('$destroy', function () { 
                        $('#visualization-graph').unbind();
                        scope.visualizationGraph.destroy();})
                    scope.$watchGroup(['nodes', 'links', 'children_struct', 'ancestors_struct'],
                            function() {
                        if (scope.nodes != null &&
                                scope.links != null &&
                                scope.children_struct != null &&
                                scope.ancestors_struct != null) {
                            if (!scope.initialized) {
                                scope.initialized = true;
                                var d3 = $window.d3;
                                visualizationlistd3(scope, elem, attrs, d3, VisualizerGraph, PolicyService, DataSource, StateSave);
                            } else {
                                scope.visualizationGraph.dataSource.links = scope.links;
                                scope.visualizationGraph.updateLinkData();
                            }
                        }

                    });
               }
           };
        }
    ]
);












