<<<<<<< 9d1bf67c3b783cfc580d92ecf7e06d47e520119d
function BaseCollection(e,t,o){this.models=[],this.$http=e,this.$q=t,this.url=o}function Collection(e,t,o){BaseCollection.call(this,e,t,o)}function NodesCollection(e,t){BaseCollection.call(this,e,t,ContivGlobals.NODES_LIST_ENDPOINT)}angular.module("contiv.directives",[]),angular.module("contiv.models",[]);var ContivGlobals=function(){return{NETWORKS_ENDPOINT:"/netmaster/api/v1/networks/",POLICIES_ENDPOINT:"/netmaster/api/v1/policys/",RULES_ENDPOINT:"/netmaster/api/v1/rules/",APPLICATIONGROUPS_ENDPOINT:"/netmaster/api/v1/endpointGroups/",SERVICELBS_ENDPOINT:"/netmaster/api/v1/serviceLBs/",ORGANIZATIONS_ENDPOINT:"/netmaster/api/v1/tenants/",VOLUMES_ENDPOINT:"/volmaster/volumes/",VOLUMES_CREATE_ENDPOINT:"/volmaster/volumes/create/",VOLUMES_DELETE_ENDPOINT:"/volmaster/volumes/remove/",VOLUMES_COPYSNAPSHOTS_ENDPOINT:"/volmaster/volumes/copy/",VOLUMES_USES_ENDPOINT:"/volmaster/uses/mounts/",VOLUMES_SNAPSHOTS_ENDPOINT:"/volmaster/snapshots/",STORAGEPOLICIES_ENDPOINT:"/volmaster/policies/",NODES_LIST_ENDPOINT:"/info/nodes",NODES_DISCOVER_ENDPOINT:"/discover/nodes",NODES_COMMISSION_ENDPOINT:"/commission/nodes",NODES_DECOMMISSION_ENDPOINT:"/decommission/nodes",NODES_MAINTENANCE_ENDPOINT:"/maintenance/nodes",NODES_LAST_JOB_ENDPOINT:"/info/job/last",NODES_ACTIVE_JOB_ENDPOINT:"/info/job/active",REFRESH_INTERVAL:5e3,CIDR_REGEX:"^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(/([0-9]|[1-2][0-9]|3[0-2]))$"}}();angular.module("contiv.utils",[]),angular.module("contiv.applicationgroups",["contiv.models","contiv.directives","contiv.utils"]).config(["$stateProvider",function(e){e.state("contiv.menu.applicationgroups",{url:"/applicationgroups","abstract":!0,template:'<div ui-view class="ui container"/>'})}]),angular.module("contiv.dashboard",["contiv.models"]),angular.module("contiv.login",["contiv.utils"]),angular.module("contiv.menu",[]),angular.module("contiv.networkpolicies",["contiv.models","contiv.directives","contiv.utils"]),angular.module("contiv.networks",["contiv.models","contiv.directives","contiv.utils"]).config(["$stateProvider",function(e){e.state("contiv.menu.networks",{url:"/networks","abstract":!0,template:'<div ui-view class="ui container"/>'})}]),angular.module("contiv.nodes",["contiv.models","contiv.directives","contiv.utils"]).config(["$stateProvider",function(e){e.state("contiv.menu.nodes",{url:"/nodes","abstract":!0,template:'<div ui-view class="ui container"/>'})}]),angular.module("contiv.organizations",["contiv.models","contiv.directives","contiv.utils"]).config(["$stateProvider",function(e){e.state("contiv.menu.organizations",{url:"/organizations","abstract":!0,template:'<div ui-view class="ui container"/>'})}]),angular.module("contiv.servicelbs",["contiv.models","contiv.directives","contiv.utils"]).config(["$stateProvider",function(e){e.state("contiv.menu.servicelbs",{url:"/servicelbs","abstract":!0,template:'<div ui-view class="ui container"/>'})}]),angular.module("contiv.storagepolicies",["contiv.models","contiv.directives","contiv.utils"]).config(["$stateProvider",function(e){e.state("contiv.menu.storagepolicies",{url:"/storagepolicies","abstract":!0,template:'<div ui-view class="ui container"/>'})}]),angular.module("contiv.volumes",["contiv.models","contiv.directives","contiv.utils"]).config(["$stateProvider",function(e){e.state("contiv.menu.volumes",{url:"/volumes","abstract":!0,template:'<div ui-view class="ui container"/>'})}]),angular.module("contivApp",["ui.router","contiv.login","contiv.menu","contiv.dashboard","contiv.applicationgroups","contiv.networks","contiv.networkpolicies","contiv.storagepolicies","contiv.servicelbs","contiv.volumes","contiv.nodes","contiv.organizations"]).config(["$stateProvider","$urlRouterProvider",function(e,t){e.state("contiv",{url:"","abstract":!0,template:'<div ui-view class="ui fluid container"/>'}),t.otherwise("/")}]),angular.module("contiv.applicationgroups").config(["$stateProvider",function(e){e.state("contiv.menu.applicationgroups.create",{url:"/create",controller:"ApplicationGroupCreateCtrl as applicationGroupCreateCtrl",templateUrl:"applicationgroups/applicationgroupcreate.html"})}]).controller("ApplicationGroupCreateCtrl",["$state","ApplicationGroupsModel","NetworksModel","PoliciesModel","RulesModel","ApplicationGroupService","CRUDHelperService",function(e,t,o,n,i,r,l){function a(){e.go("contiv.menu.applicationgroups.list")}function c(){a()}function s(){o.get().then(function(e){f.networks=_.filter(e,{tenantName:"default"})})}function u(){n.get().then(function(e){f.isolationPolicies=_.filter(e,{tenantName:"default"})})}function d(){r.addIsolationPolicy(f)}function p(e){r.removeIsolationPolicy(f,e)}function v(){f.form.$valid&&(l.hideServerError(f),l.startLoader(f),f.applicationGroup.networkName=f.selectedNetwork.networkName,f.applicationGroup.key=t.generateKey(f.applicationGroup),t.create(f.applicationGroup).then(function(e){l.stopLoader(f),a()},function(e){l.stopLoader(f),l.showServerError(f,e)}))}function m(){l.stopLoader(f),l.hideServerError(f),f.applicationGroup={groupName:"",networkName:"",policies:[],tenantName:"default"}}var f=this;f.networks=[],f.isolationPolicies=[],f.applicationGroup={},f.selectedNetwork={},f.selectedPolicy={},f.selectedPolicies=[],f.incomingRules=[],f.outgoingRules=[],f.isolationPoliciesVisible=!1,s(),u(),f.createApplicationGroup=v,f.cancelCreating=c,f.addIsolationPolicy=d,f.removeIsolationPolicy=p,m()}]),angular.module("contiv.applicationgroups").config(["$stateProvider",function(e){e.state("contiv.menu.applicationgroups.details",{url:"/details/:key",controller:"ApplicationGroupDetailsCtrl as applicationGroupDetailsCtrl",templateUrl:"applicationgroups/applicationgroupdetails.html"}).state("contiv.menu.applicationgroups.edit",{url:"/edit/:key",controller:"ApplicationGroupDetailsCtrl as applicationGroupDetailsCtrl",templateUrl:"applicationgroups/applicationgroupdetails.html"})}]).controller("ApplicationGroupDetailsCtrl",["$state","$stateParams","ApplicationGroupsModel","PoliciesModel","RulesModel","ApplicationGroupService","CRUDHelperService",function(e,t,o,n,i,r,l){function a(){e.is("contiv.menu.applicationgroups.edit")?h.mode="edit":h.mode="details"}function c(){e.go("contiv.menu.applicationgroups.list")}function s(){e.go("contiv.menu.applicationgroups.details",{key:h.applicationGroup.key})}function u(){s()}function d(){h.applicationGroup.policies.forEach(function(e){i.getIncomingRules(e,"default").then(function(e){Array.prototype.push.apply(h.incomingRules,e)}),i.getOutgoingRules(e,"default").then(function(e){Array.prototype.push.apply(h.outgoingRules,e)})})}function p(){l.hideServerError(h),l.startLoader(h),o["delete"](h.applicationGroup).then(function(e){l.stopLoader(h),c()},function(e){l.stopLoader(h),l.showServerError(h,e)})}function v(){n.get().then(function(e){h.isolationPolicies=_.filter(e,{tenantName:"default"})})}function m(){r.addIsolationPolicy(h)}function f(e){r.removeIsolationPolicy(h,e)}function g(){l.hideServerError(h),l.startLoader(h),o.save(h.applicationGroup).then(function(e){l.stopLoader(h),s()},function(e){l.stopLoader(h),l.showServerError(h,e)})}var h=this;h.isolationPolicies=[],h.applicationGroup={},h.selectedNetwork={},h.selectedPolicy={},h.selectedPolicies=[],h.incomingRules=[],h.outgoingRules=[],h.isolationPoliciesVisible=!1,l.stopLoader(h),l.hideServerError(h),o.getModelByKey(t.key).then(function(e){h.applicationGroup=e,void 0===h.applicationGroup.policies&&(h.applicationGroup.policies=[]),d()}),v(),h.saveApplicationGroup=g,h.cancelEditing=u,h.addIsolationPolicy=m,h.removeIsolationPolicy=f,h.deleteApplicationGroup=p,a()}]),angular.module("contiv.applicationgroups").config(["$stateProvider",function(e){e.state("contiv.menu.applicationgroups.list",{url:"/list",controller:"ApplicationGroupListCtrl as applicationGroupListCtrl",templateUrl:"applicationgroups/applicationgrouplist.html"})}]).controller("ApplicationGroupListCtrl",["$scope","$interval","$filter","ApplicationGroupsModel","CRUDHelperService",function(e,t,o,n,i){function r(e){n.get(e).then(function(e){i.stopLoader(l),l.groups=o("orderBy")(e,"groupName")},function(e){i.stopLoader(l)})}var l=this;r(!1);var a;angular.isDefined(a)||(a=t(function(){r(!0)},5e3)),e.$on("$destroy",function(){t.cancel(a)})}]),angular.module("contiv.applicationgroups").factory("ApplicationGroupService",["RulesModel",function(e){function t(t){void 0===_.find(t.selectedPolicies,t.selectedPolicy)&&(t.selectedPolicies.push(t.selectedPolicy),e.getIncomingRules(t.selectedPolicy.policyName,"default").then(function(e){Array.prototype.push.apply(t.incomingRules,e)}),e.getOutgoingRules(t.selectedPolicy.policyName,"default").then(function(e){Array.prototype.push.apply(t.outgoingRules,e)}),t.applicationGroup.policies.push(t.selectedPolicy.policyName))}function o(e,t){_.remove(e.applicationGroup.policies,function(e){return e==t}),_.remove(e.incomingRules,function(e){return e.policyName==t}),_.remove(e.outgoingRules,function(e){return e.policyName==t})}return{addIsolationPolicy:t,removeIsolationPolicy:o}}]),angular.module("contiv.dashboard").config(["$stateProvider",function(e){e.state("contiv.menu.dashboard",{url:"/dashboard",controller:"DashboardCtrl as dashboardCtrl",templateUrl:"dashboard/dashboard.html"})}]).controller("DashboardCtrl",["$scope","$interval","NodesModel","NetworksModel","VolumesModel","ApplicationGroupsModel","PoliciesModel","StoragePoliciesModel",function(e,t,o,n,i,r,l,a){function c(e){o.get(e).then(function(e){s.nodes=e.length}),n.get(e).then(function(e){s.networks=e.length}),i.get(e).then(function(e){s.volumes=e.length}),r.get(e).then(function(e){s.groups=e.length}),l.get(e).then(function(e){s.networkpolicies=e.length}),a.get(e).then(function(e){s.storagepolicies=e.length})}var s=this;s.nodes=0,s.networks=0,s.volumes=0,s.groups=0,s.networkpolicies=0,s.storagepolicies=0,c(!1);var u=t(function(){c(!0)},5e3);e.$on("$destroy",function(){t.cancel(u)})}]),angular.module("contiv.login").config(["$stateProvider",function(e){e.state("contiv.login",{url:"/",templateUrl:"login/login.html",controller:"LoginCtrl as loginCtrl"})}]).controller("LoginCtrl",["$state","CRUDHelperService",function(e,t){function o(){e.go("contiv.menu.dashboard",{username:i.username})}function n(){o()}var i=this;t.stopLoader(i),t.hideServerError(i),i.login=n}]),angular.module("contiv.menu").config(["$stateProvider",function(e){e.state("contiv.menu",{url:"/m",templateUrl:"menu/menu.html",controller:"MenuCtrl as menuCtrl",params:{username:null}})}]).controller("MenuCtrl",["$state","$stateParams",function(e,t){function o(){e.go("contiv.login")}var n=this;n.username=t.username,n.logout=o}]),angular.module("contiv.networkpolicies").config(["$stateProvider",function(e){e.state("contiv.menu.networkpolicies.isolation.create",{url:"/create",controller:"IsolationPolicyCreateCtrl as isolationPolicyCreateCtrl",templateUrl:"network_policies/isolationpolicycreate.html"})}]).controller("IsolationPolicyCreateCtrl",["$state","PoliciesModel","CRUDHelperService",function(e,t,o){function n(){e.go("contiv.menu.networkpolicies.isolation.list")}function i(){n()}function r(){a.form.$valid&&(o.hideServerError(a),o.startLoader(a),a.newPolicy.key=t.generateKey(a.newPolicy),t.create(a.newPolicy).then(function(e){o.stopLoader(a),n()},function(e){o.stopLoader(a),o.showServerError(a,e)}))}function l(){o.stopLoader(a),o.hideServerError(a),a.newPolicy={policyName:"",tenantName:"default"}}var a=this;a.createPolicy=r,a.cancelCreating=i,l()}]),angular.module("contiv.networkpolicies").config(["$stateProvider",function(e){e.state("contiv.menu.networkpolicies.isolation.details",{url:"/details/:key",controller:"IsolationPolicyDetailsCtrl as isolationPolicyDetailsCtrl",templateUrl:"network_policies/isolationpolicydetails.html"})}]).config(["$stateProvider",function(e){e.state("contiv.menu.networkpolicies.isolation.edit",{url:"/edit/:key",controller:"IsolationPolicyDetailsCtrl as isolationPolicyDetailsCtrl",templateUrl:"network_policies/isolationpolicydetails.html"})}]).controller("IsolationPolicyDetailsCtrl",["$state","$stateParams","PoliciesModel","RulesModel","NetworksModel","ApplicationGroupsModel","CRUDHelperService",function(e,t,o,n,i,r,l){function a(){e.go("contiv.menu.networkpolicies.isolation.list")}function c(){e.go("contiv.menu.networkpolicies.isolation.details",{key:P.policy.key})}function s(){c()}function u(){c()}function d(){l.hideServerError(P),l.startLoader(P),o["delete"](P.policy).then(function(e){l.stopLoader(P),a()},function(e){l.stopLoader(P),l.showServerError(P,e)})}function p(){e.is("contiv.menu.networkpolicies.isolation.edit")?P.mode="edit":P.mode="details"}function v(){P.newIncomingRule={ruleId:"",priority:1,action:"allow",fromEndpointGroup:"",fromNetwork:"",fromIPAddress:"",protocol:"tcp",port:"",direction:"in",tenantName:"default",policyName:P.policy.policyName},P.newIncomingSelectedApplicationGroup="",P.disableIncomingNetworkSelection=!1,P.disableIncomingApplicationGroupSelection=!1}function m(){P.newOutgoingRule={ruleId:"",priority:1,action:"allow",toEndpointGroup:"",toNetwork:"",toIPAddress:"",protocol:"tcp",port:"",direction:"out",tenantName:"default",policyName:P.policy.policyName},P.newOutgoingSelectedApplicationGroup="",P.disableOutgoingNetworkSelection=!1,P.disableOutgoingApplicationGroupSelection=!1}function f(){i.get().then(function(e){P.networks=_.filter(e,{tenantName:"default"})})}function g(){r.get().then(function(e){P.applicationGroups=_.filter(e,{tenantName:"default"})})}function h(){null!=P.newOutgoingSelectedApplicationGroup?(P.newOutgoingRule.toEndpointGroup=P.newOutgoingSelectedApplicationGroup.groupName,P.newOutgoingRule.toNetwork="",P.disableOutgoingNetworkSelection=!0):(P.newOutgoingRule.toEndpointGroup="",P.disableOutgoingNetworkSelection=!1)}function y(){null!=P.newIncomingSelectedApplicationGroup?(P.newIncomingRule.fromEndpointGroup=P.newIncomingSelectedApplicationGroup.groupName,P.newIncomingRule.fromNetwork="",P.disableIncomingNetworkSelection=!0):(P.newIncomingRule.fromEndpointGroup="",P.disableIncomingNetworkSelection=!1)}function C(){null!=P.newOutgoingRule.toNetwork?(P.newOutgoingRule.ToEndpointGroup="",P.disableOutgoingApplicationGroupSelection=!0):P.disableOutgoingApplicationGroupSelection=!1}function N(){null!=P.newIncomingRule.fromNetwork?(P.newIncomingRule.fromEndpointGroup="",P.disableIncomingApplicationGroupSelection=!0):P.disableIncomingApplicationGroupSelection=!1}function w(e){e.ruleId=(P.incomingRules.length+P.outgoingRules.length+1).toString()+"-"+Date.now().toString()}function E(){l.hideServerError(P),l.startLoader(P),w(P.newIncomingRule),P.newIncomingRule.key=n.generateKey(P.newIncomingRule),n.create(P.newIncomingRule).then(function(e){l.stopLoader(P),P.incomingRules.push(e),v()},function(e){l.stopLoader(P),l.showServerError(P,e)})}function S(){l.hideServerError(P),l.startLoader(P),w(P.newOutgoingRule),P.newOutgoingRule.key=n.generateKey(P.newOutgoingRule),n.create(P.newOutgoingRule).then(function(e){l.stopLoader(P),P.outgoingRules.push(e),m()},function(e){l.stopLoader(P),l.showServerError(P,e)})}function k(e){l.hideServerError(P),l.startLoader(P),n.deleteUsingKey(e).then(function(t){l.stopLoader(P),_.remove(P.incomingRules,function(t){return t.key==e})},function(e){l.stopLoader(P),l.showServerError(P,e)})}function b(e){l.hideServerError(P),l.startLoader(P),n.deleteUsingKey(e).then(function(t){l.stopLoader(P),_.remove(P.outgoingRules,function(t){return t.key==e})},function(e){l.stopLoader(P),l.showServerError(P,e)})}var P=this;P.networks=[],P.applicationGroups=[],P.disableOutgoingNetworkSelection=!1,P.disableIncomingNetworkSelection=!1,P.disableOutgoingApplicationGroupSelection=!1,P.disableIncomingApplicationGroupSelection=!1,P.newIncomingSelectedApplicationGroup="",P.newOutgoingSelectedApplicationGroup="",l.stopLoader(P),l.hideServerError(P),o.getModelByKey(t.key).then(function(e){P.policy=e,n.getIncomingRules(e.policyName,"default").then(function(e){P.incomingRules=e,v()}),n.getOutgoingRules(e.policyName,"default").then(function(e){P.outgoingRules=e,m()})}),f(),g(),P.deletePolicy=d,P.deleteIncomingRule=k,P.deleteOutgoingRule=b,P.addIncomingRule=E,P.addOutgoingRule=S,P.doneEditing=u,P.cancelEditing=s,P.onChangeOutgoingApplicationGroupSelection=h,P.onChangeIncomingApplicationGroupSelection=y,P.onChangeOutgoingNetworkSelection=C,P.onChangeIncomingNetworkSelection=N,p()}]),angular.module("contiv.networkpolicies").config(["$stateProvider",function(e){e.state("contiv.menu.networkpolicies.isolation.list",{url:"/list",controller:"IsolationPolicyListCtrl as isolationPolicyListCtrl",templateUrl:"network_policies/isolationpolicylist.html"})}]).controller("IsolationPolicyListCtrl",["$scope","$interval","$filter","PoliciesModel","CRUDHelperService",function(e,t,o,n,i){function r(e){n.get(e).then(function(e){i.stopLoader(l),l.policies=o("orderBy")(e,"policyName")},function(e){i.stopLoader(l)})}var l=this;r(!1);var a;angular.isDefined(a)||(a=t(function(){r(!0)},ContivGlobals.REFRESH_INTERVAL)),e.$on("$destroy",function(){t.cancel(a)})}]),angular.module("contiv.networkpolicies").config(["$stateProvider",function(e){e.state("contiv.menu.networkpolicies",{url:"/networkpolicies",controller:"NetworkPoliciesTabsCtrl as networkPoliciesTabsCtrl",templateUrl:"network_policies/networkpoliciestabs.html"}).state("contiv.menu.networkpolicies.isolation",{url:"/isolation","abstract":!0,template:"<ui-view/>"}).state("contiv.menu.networkpolicies.prioritization",{url:"/prioritization",controller:"NetworkPoliciesTabsCtrl as networkPoliciesTabsCtrl",templateUrl:"network_policies/prioritizationpolicylist.html"}).state("contiv.menu.networkpolicies.bandwidth",{url:"/bandwidth",controller:"NetworkPoliciesTabsCtrl as networkPoliciesTabsCtrl",templateUrl:"network_policies/bandwidthpolicylist.html"}).state("contiv.menu.networkpolicies.redirection",{url:"/redirection",controller:"NetworkPoliciesTabsCtrl as networkPoliciesTabsCtrl",templateUrl:"network_policies/redirectionpolicylist.html"})}]).controller("NetworkPoliciesTabsCtrl",["$state",function(e){}]),angular.module("contiv.networks").config(["$stateProvider",function(e){e.state("contiv.menu.networks.create",{url:"/create",templateUrl:"networks/networkcreate.html",controller:"NetworkCreateCtrl as networkCreateCtrl"})}]).controller("NetworkCreateCtrl",["$state","$stateParams","NetworksModel","CRUDHelperService",function(e,t,o,n){function i(){e.go("contiv.menu.networks.list")}function r(){i()}function l(){c.form.$valid&&(n.hideServerError(c),n.startLoader(c),c.newNetwork.key=c.newNetwork.tenantName+":"+c.newNetwork.networkName,o.create(c.newNetwork).then(function(e){n.stopLoader(c),i()},function(e){n.stopLoader(c),n.showServerError(c,e)}))}function a(){n.stopLoader(c),n.hideServerError(c),c.newNetwork={networkName:"",encap:"vxlan",subnet:"",gateway:"",tenantName:"default"}}var c=this;c.cidrPattern=ContivGlobals.CIDR_REGEX,c.createNetwork=l,c.cancelCreating=r,a()}]),angular.module("contiv.networks").config(["$stateProvider",function(e){e.state("contiv.menu.networks.details",{url:"/details/:key",controller:"NetworkDetailsCtrl as networkDetailsCtrl",templateUrl:"networks/networkdetails.html"})}]).controller("NetworkDetailsCtrl",["$state","$stateParams","$scope","$interval","$filter","NetworksModel","ApplicationGroupsModel","CRUDHelperService",function(e,t,o,n,i,r,l,a){function c(){e.go("contiv.menu.networks.list")}function s(){a.hideServerError(d),a.startLoader(d),r["delete"](d.network).then(function(e){a.stopLoader(d),c()},function(e){a.stopLoader(d),a.showServerError(d,e)})}function u(e){l.get(e).then(function(e){d.applicationGroups=i("orderBy")(_.filter(e,{networkName:d.network.networkName}),"groupName")})}var d=this;a.stopLoader(d),a.hideServerError(d),r.getModelByKey(t.key).then(function(e){d.network=e,u(!1)}),d.deleteNetwork=s;var p;angular.isDefined(p)||(p=n(function(){u(!0)},ContivGlobals.REFRESH_INTERVAL)),o.$on("$destroy",function(){n.cancel(p)})}]),angular.module("contiv.networks").config(["$stateProvider",function(e){e.state("contiv.menu.networks.list",{url:"/list",controller:"NetworksListCtrl as networksListCtrl",templateUrl:"networks/networklist.html"})}]).controller("NetworksListCtrl",["$scope","$interval","$filter","NetworksModel","CRUDHelperService",function(e,t,o,n,i){function r(e){n.get(e).then(function(e){i.stopLoader(l),l.networks=o("orderBy")(e,"networkName")},function(e){i.stopLoader(l)})}var l=this;r(!1);var a;angular.isDefined(a)||(a=t(function(){r(!0)},ContivGlobals.REFRESH_INTERVAL)),e.$on("$destroy",function(){t.cancel(a)})}]),angular.module("contiv.nodes").config(["$stateProvider",function(e){e.state("contiv.menu.nodes.commission",{url:"/commission/:key",controller:"NodeCommissionCtrl as nodeCommissionCtrl",templateUrl:"nodes/nodecommission.html"}).state("contiv.menu.nodes.discover",{url:"/discover",controller:"NodeCommissionCtrl as nodeCommissionCtrl",templateUrl:"nodes/nodecommission.html"})}]).controller("NodeCommissionCtrl",["$state","$stateParams","NodesModel","CRUDHelperService",function(e,t,o,n){function i(){e.is("contiv.menu.nodes.commission")?m.mode="commission":m.mode="discover"}function r(){e.go("contiv.menu.nodes.details.info",{key:t.key})}function l(){e.go("contiv.menu.nodes.list")}function a(){r()}function c(){l()}function s(){m.ansibleVariables.forEach(function(e){m.extra_vars[e.name]=e.value});var e={};m.envVariables.forEach(function(t){e[t.name]=t.value}),m.extra_vars.env=e,m.nodeOpsObj.extra_vars=JSON.stringify(m.extra_vars)}function u(){m.form.$valid&&(n.hideServerError(m),n.startLoader(m),m.nodeOpsObj.nodes=[t.key],p(),s(),o.commission(m.nodeOpsObj).then(function(e){n.stopLoader(m),r()},function(e){n.stopLoader(m),n.showServerError(m,e)}))}function d(){m.form.$valid&&(n.hideServerError(m),n.startLoader(m),v(),s(),o.discover(m.nodeOpsObj).then(function(e){n.stopLoader(m),l()},function(e){n.stopLoader(m),n.showServerError(m,e)}))}function p(){"aci"==m.extra_vars.contiv_network_mode?delete m.extra_vars.fwd_mode:(delete m.extra_vars.apic_url,delete m.extra_vars.apic_username,delete m.extra_vars.apic_password,delete m.extra_vars.apic_leaf_nodes,delete m.extra_vars.apic_phys_domain,delete m.extra_vars.apic_epg_bridge_domain,delete m.extra_vars.apic_contracts_unrestricted_mode),"native-swarm"==m.extra_vars.scheduler_provider&&delete m.extra_vars.ucp_bootstrap_node_name}function v(){m.nodeOpsObj.addrs=_.words(m.nodeIPAddr,/[^, ]+/g)}var m=this;m.nodeOpsObj={},m.extra_vars={},m.ansibleVariables=[],m.envVariables=[],m.nodeIPAddr="",m.cancelCommissioningNode=a,m.commission=u,m.discover=d,m.cancelDiscoveringNode=c,i(),n.stopLoader(m),n.hideServerError(m)}]),angular.module("contiv.nodes").config(["$stateProvider",function(e){e.state("contiv.menu.nodes.details",{url:"/details/:key",controller:"NodeDetailsCtrl as nodeDetailsCtrl",templateUrl:"nodes/nodedetails.html"}).state("contiv.menu.nodes.details.info",{url:"/info",controller:"NodeDetailsCtrl as nodeDetailsCtrl",templateUrl:"nodes/nodeinfo.html"}).state("contiv.menu.nodes.details.stats",{url:"/stats",controller:"NodeDetailsCtrl as nodeDetailsCtrl",templateUrl:"nodes/nodestats.html"}).state("contiv.menu.nodes.details.logs",{url:"/logs",controller:"NodeDetailsCtrl as nodeDetailsCtrl",templateUrl:"nodes/nodelogs.html"})}]).controller("NodeDetailsCtrl",["$state","$stateParams","$scope","$interval","NodesModel",function(e,t,o,n,i){function r(){var e={nodes:[t.key]};i.decommission(e).then(function(e){s.showCommissionButton=!1,s.commissionButtonEnabled=!1,s.upgradeButtonEnabled=!1})}function l(){var e={nodes:[t.key]};i.upgrade(e).then(function(e){s.showCommissionButton=!1,s.commissionButtonEnabled=!1,s.upgradeButtonEnabled=!1})}function a(){switch(s.node.inventory_state.status){case"Unallocated":s.showCommissionButton=!0,s.commissionButtonEnabled=!0,s.upgradeButtonEnabled=!1;break;case"Decommissioned":s.showCommissionButton=!0,s.commissionButtonEnabled=!0,s.upgradeButtonEnabled=!1;break;case"Provisioning":s.showCommissionButton=!0,s.commissionButtonEnabled=!1,s.upgradeButtonEnabled=!1;break;case"Allocated":s.showCommissionButton=!1,s.commissionButtonEnabled=!0,s.upgradeButtonEnabled=!0;break;case"Cancelled":s.showCommissionButton=!1,s.commissionButtonEnabled=!1,s.upgradeButtonEnabled=!1;break;case"Maintenance":s.showCommissionButton=!0,s.commissionButtonEnabled=!1,s.upgradeButtonEnabled=!1;break;default:s.showCommissionButton=!0,s.commissionButtonEnabled=!1,s.upgradeButtonEnabled=!1}}function c(e){i.getModelByKey(t.key,e).then(function(e){s.node=e,a()})}var s=this;s.decommission=r,s.upgrade=l,c(!1);var u;angular.isDefined(u)||(u=n(function(){c(!0)},5e3)),o.$on("$destroy",function(){n.cancel(u)})}]),angular.module("contiv.nodes").directive("ctvNodestatus",function(){return{restrict:"E",scope:{node:"="},templateUrl:"nodes/nodestatus.html"}}).directive("ctvNodestate",function(){return{restrict:"E",scope:{node:"="},templateUrl:"nodes/nodestate.html"}}),angular.module("contiv.nodes").config(["$stateProvider",function(e){e.state("contiv.menu.nodes.list",{url:"/list",controller:"NodeListCtrl as nodeListCtrl",templateUrl:"nodes/nodelist.html"})}]).controller("NodeListCtrl",["$scope","$interval","$filter","NodesModel","CRUDHelperService","NodeService",function(e,t,o,n,i,r){function l(e){n.get(e).then(function(e){i.stopLoader(s),s.nodes=o("orderBy")(e,"key")},function(e){i.stopLoader(s)}),a(),c()}function a(){r.getActiveLogs().then(function(e){s.activeLogs=e},function(e){s.activeLogs={desc:"There is currently no active job. Check Last Job for a job that recently finished."}})}function c(){r.getLastLogs().then(function(e){s.lastLogs=e},function(e){})}var s=this;s.getActiveLogs=a,s.getLastLogs=c,l(!1);var u;angular.isDefined(u)||(u=t(function(){l(!0)},ContivGlobals.REFRESH_INTERVAL)),e.$on("$destroy",function(){t.cancel(u)})}]),angular.module("contiv.nodes").factory("NodeService",["$http","$q",function(e,t){function o(){var o=t.defer(),n=ContivGlobals.NODES_ACTIVE_JOB_ENDPOINT;return e.get(n).then(function(e){o.resolve(e.data)},function(e){o.reject(e.data)}),o.promise}function n(){var o=t.defer(),n=ContivGlobals.NODES_LAST_JOB_ENDPOINT;return e.get(n).then(function(e){o.resolve(e.data)},function(e){o.reject(e.data)}),o.promise}return{getActiveLogs:o,getLastLogs:n}}]),angular.module("contiv.organizations").config(["$stateProvider",function(e){e.state("contiv.menu.organizations.create",{url:"/create",templateUrl:"organizations/organizationcreate.html",controller:"OrganizationCreateCtrl as organizationCreateCtrl"})}]).controller("OrganizationCreateCtrl",["$state","$stateParams","OrganizationsModel","CRUDHelperService",function(e,t,o,n){function i(){e.go("contiv.menu.organizations.list")}function r(){i()}function l(){c.form.$valid&&(n.hideServerError(c),n.startLoader(c),c.newOrganization.key=c.newOrganization.tenantName,o.create(c.newOrganization).then(function(e){n.stopLoader(c),i()},function(e){n.stopLoader(c),n.showServerError(c,e)}))}function a(){n.stopLoader(c),n.hideServerError(c),c.newOrganization={tenantName:""}}var c=this;c.createOrganization=l,c.cancelCreating=r,a()}]),angular.module("contiv.organizations").config(["$stateProvider",function(e){e.state("contiv.menu.organizations.details",{url:"/details/:key",controller:"OrganizationDetailsCtrl as organizationDetailsCtrl",templateUrl:"organizations/organizationdetails.html"})}]).controller("OrganizationDetailsCtrl",["$state","$stateParams","$scope","$interval","$filter","OrganizationsModel","CRUDHelperService",function(e,t,o,n,i,r,l){function a(){e.go("contiv.menu.organizations.list")}function c(){l.hideServerError(s),l.startLoader(s),r["delete"](s.organization).then(function(e){l.stopLoader(s),a()},function(e){l.stopLoader(s),l.showServerError(s,e)})}var s=this;l.stopLoader(s),l.hideServerError(s),r.getModelByKey(t.key).then(function(e){s.organization=e}),s.deleteOrganization=c}]),angular.module("contiv.organizations").config(["$stateProvider",function(e){e.state("contiv.menu.organizations.list",{url:"/list",controller:"OrganizationsListCtrl as organizationsListCtrl",templateUrl:"organizations/organizationlist.html"})}]).controller("OrganizationsListCtrl",["$scope","$interval","$filter","OrganizationsModel","CRUDHelperService",function(e,t,o,n,i){function r(e){n.get(e).then(function(e){i.stopLoader(l),l.organizations=o("orderBy")(e,"tenantName")},function(e){i.stopLoader(l)})}var l=this;r(!1);var a;angular.isDefined(a)||(a=t(function(){r(!0)},ContivGlobals.REFRESH_INTERVAL)),e.$on("$destroy",function(){t.cancel(a)})}]),angular.module("contiv.servicelbs").config(["$stateProvider",function(e){e.state("contiv.menu.servicelbs.create",{url:"/create",templateUrl:"service_lbs/servicelbcreate.html",controller:"ServicelbCreateCtrl as servicelbCreateCtrl"})}]).controller("ServicelbCreateCtrl",["$state","$stateParams","ServicelbsModel","NetworksModel","CRUDHelperService",function(e,t,o,n,i){function r(){e.go("contiv.menu.servicelbs.list")}function l(){r()}function a(){n.get().then(function(e){d.networks=_.filter(e,{tenantName:"default"})})}function c(){d.servicelb.selectors=[],angular.forEach(d.labelSelectors,function(e){var t=e.name+"="+e.value;d.servicelb.selectors.push(t)})}function s(){c(),d.form.$valid&&(i.hideServerError(d),i.startLoader(d),d.servicelb.key=d.servicelb.tenantName+":"+d.servicelb.serviceName,o.create(d.servicelb).then(function(e){i.stopLoader(d),r()},function(e){i.stopLoader(d),i.showServerError(d,e)}))}function u(){i.stopLoader(d),i.hideServerError(d),d.servicelb={serviceName:"",networkName:"",ipAddress:"",selectors:[],ports:[],tenantName:"default"}}var d=this;d.labelSelectors=[],d.networks=[],d.createServicelb=s,d.cancelCreating=l,a(),u()}]),angular.module("contiv.servicelbs").config(["$stateProvider",function(e){e.state("contiv.menu.servicelbs.details",{url:"/details/:key",controller:"ServicelbDetailsCtrl as servicelbDetailsCtrl",templateUrl:"service_lbs/servicelbdetails.html"}).state("contiv.menu.servicelbs.edit",{url:"/edit/:key",controller:"ServicelbDetailsCtrl as servicelbDetailsCtrl",templateUrl:"service_lbs/servicelbdetails.html"})}]).controller("ServicelbDetailsCtrl",["$state","$stateParams","ServicelbsModel","CRUDHelperService",function(e,t,o,n){function i(){e.is("contiv.menu.servicelbs.edit")?p.mode="edit":p.mode="details"}function r(){e.go("contiv.menu.servicelbs.list")}function l(){e.go("contiv.menu.servicelbs.details",{key:p.servicelb.key})}function a(){l()}function c(){n.hideServerError(p),n.startLoader(p),o["delete"](p.servicelb).then(function(e){n.stopLoader(p),r()},function(e){n.stopLoader(p),n.showServerError(p,e)})}function s(){n.hideServerError(p),n.startLoader(p),d(),o.save(p.servicelb).then(function(e){n.stopLoader(p),l()},function(e){n.stopLoader(p),n.showServerError(p,e)})}function u(){angular.forEach(p.servicelb.selectors,function(e){var t={name:e.split("=")[0],value:e.split("=")[1]};p.labelSelectors.push(t)})}function d(){p.servicelb.selectors=[],angular.forEach(p.labelSelectors,function(e){var t=e.name+"="+e.value;p.servicelb.selectors.push(t)})}var p=this;p.labelSelectors=[],n.stopLoader(p),n.hideServerError(p),o.getModelByKey(t.key).then(function(e){p.servicelb=e,u()}),p.saveServicelb=s,p.cancelEditing=a,p.deleteServicelb=c,i()}]),angular.module("contiv.servicelbs").config(["$stateProvider",function(e){e.state("contiv.menu.servicelbs.list",{url:"/list",controller:"ServicelbListCtrl as servicelbListCtrl",templateUrl:"service_lbs/servicelblist.html"})}]).controller("ServicelbListCtrl",["$scope","$interval","$filter","ServicelbsModel","CRUDHelperService",function(e,t,o,n,i){function r(e){n.get(e).then(function(e){i.stopLoader(l),l.servicelbs=o("orderBy")(e,"serviceName")},function(e){i.stopLoader(l)})}var l=this;r(!1);var a;angular.isDefined(a)||(a=t(function(){r(!0)},ContivGlobals.REFRESH_INTERVAL)),e.$on("$destroy",function(){t.cancel(a)})}]),angular.module("contiv.servicelbs").directive("ctvServicelbports",function(){return{restrict:"E",scope:{items:"="},link:function(e){function t(e,t){return e===t}function o(){e.newItem={
servicePort:"",providerPort:"",protocol:""}}function n(e){return""===e.servicePort&&""===e.providerPort&&""===e.protocol}e.add=function(){if(!n(e.newItem)){void 0===e.items&&(e.items=[]);var i=e.newItem.servicePort+":"+e.newItem.providerPort+":"+e.newItem.protocol;_.pullAllWith(e.items,[i],t),e.items.push(i),o()}},e.remove=function(o){_.remove(e.items,function(e){return t(e,o)})},o()},templateUrl:"service_lbs/servicelbports.html"}}),angular.module("contiv.storagepolicies").config(["$stateProvider",function(e){e.state("contiv.menu.storagepolicies.create",{url:"/create",templateUrl:"storage_policies/storagepolicycreate.html",controller:"StoragePolicyCreateCtrl as storagePolicyCreateCtrl"})}]).controller("StoragePolicyCreateCtrl",["$state","$stateParams","StoragePoliciesModel","CRUDHelperService",function(e,t,o,n){function i(){e.go("contiv.menu.storagepolicies.list")}function r(){i()}function l(){s.filesystemcmds.forEach(function(e){s.newStoragePolicy.filesystems[e.name]=e.value})}function a(){s.form.$valid&&(n.hideServerError(s),n.startLoader(s),l(),o.create(s.newStoragePolicy).then(function(e){n.stopLoader(s),i()},function(e){n.stopLoader(s),n.showServerError(s,e)}))}function c(){n.stopLoader(s),n.hideServerError(s),s.newStoragePolicy={name:"",backends:{crud:"ceph",mount:"ceph",snapshot:"ceph"},unlocked:!1,driver:{pool:"rbd"},create:{size:"0",filesystem:""},runtime:{snapshots:!0,snapshot:{frequency:"30m",keep:20},"rate-limit":{"write-iops":0,"read-iops":0,"write-bps":0,"read-bps":0}},filesystems:{}}}var s=this;s.createPolicy=a,s.cancelCreating=r,s.filesystemcmds=[],c()}]),angular.module("contiv.storagepolicies").config(["$stateProvider",function(e){e.state("contiv.menu.storagepolicies.details",{url:"/details/:key",controller:"StoragePolicyDetailsCtrl as storagePolicyDetailsCtrl",templateUrl:"storage_policies/storagepolicydetails.html"}).state("contiv.menu.storagepolicies.edit",{url:"/details/:key",controller:"StoragePolicyDetailsCtrl as storagePolicyDetailsCtrl",templateUrl:"storage_policies/storagepolicydetails.html"})}]).controller("StoragePolicyDetailsCtrl",["$state","$stateParams","$scope","$interval","$filter","StoragePoliciesModel","VolumesModel","CRUDHelperService",function(e,t,o,n,i,r,l,a){function c(){e.is("contiv.menu.storagepolicies.edit")?g.mode="edit":g.mode="details"}function s(){e.go("contiv.menu.storagepolicies.list")}function u(){e.go("contiv.menu.storagepolicies.details",{key:g.policy.name})}function d(){u()}function p(){a.hideServerError(g),a.startLoader(g),r.deleteUsingKey(g.policy.name,"name").then(function(e){a.stopLoader(g),s()},function(e){a.stopLoader(g),a.showServerError(g,e)})}function v(){angular.forEach(g.policy.filesystems,function(e,t){this.push({name:t,value:e})},g.filesystemcmds)}function m(){g.filesystemcmds.forEach(function(e){g.policy.filesystems[e.name]=e.value})}function f(){g.form.$valid&&(a.hideServerError(g),a.startLoader(g),m(),r.save(g.policy).then(function(e){a.stopLoader(g),u()},function(e){a.stopLoader(g),a.showServerError(g,e)}))}var g=this;g.filesystemcmds=[],a.stopLoader(g),a.hideServerError(g),r.getModelByKey(t.key,!1,"name").then(function(e){g.policy=e,v()}),g.deletePolicy=p,g.savePolicy=f,g.cancelEditing=d,c();var h;angular.isDefined(h)||(h=n(function(){},ContivGlobals.REFRESH_INTERVAL)),o.$on("$destroy",function(){n.cancel(h)})}]),angular.module("contiv.storagepolicies").directive("ctvStoragepolicybasicsettings",function(){return{}}).directive("ctvStoragepolicyfilesystemsettings",function(){return{restrict:"E",scope:{policy:"=",filesystemcmds:"="},link:function(e){e.filesystems=["ext4","btrfs"]},templateUrl:"storage_policies/filesystemsettings.html"}}).directive("ctvStoragepolicysnapshotsettings",function(){return{restrict:"E",scope:{policy:"="},templateUrl:"storage_policies/snapshotsettings.html"}}).directive("ctvStoragepolicyrwopssettings",function(){return{restrict:"E",scope:{policy:"="},templateUrl:"storage_policies/rwopssettings.html"}}).directive("ctvStoragepolicybackenddrivers",function(){return{restrict:"E",scope:{policy:"="},templateUrl:"storage_policies/backenddrivers.html"}}),angular.module("contiv.storagepolicies").config(["$stateProvider",function(e){e.state("contiv.menu.storagepolicies.list",{url:"/list",controller:"StoragePolicyListCtrl as storagePolicyListCtrl",templateUrl:"storage_policies/storagepolicylist.html"})}]).controller("StoragePolicyListCtrl",["$scope","$interval","$filter","StoragePoliciesModel","CRUDHelperService",function(e,t,o,n,i){function r(e){n.get(e).then(function(e){i.stopLoader(l),l.policies=o("orderBy")(e,"name")},function(e){i.stopLoader(l)})}var l=this;r(!1);var a;angular.isDefined(a)||(a=t(function(){r(!0)},ContivGlobals.REFRESH_INTERVAL)),e.$on("$destroy",function(){t.cancel(a)})}]),angular.module("contiv.volumes").config(["$stateProvider",function(e){e.state("contiv.menu.volumes.create",{url:"/create",templateUrl:"volumes/volumecreate.html",controller:"VolumeCreateCtrl as volumeCreateCtrl"})}]).controller("VolumeCreateCtrl",["$state","$stateParams","VolumesModel","StoragePoliciesModel","CRUDHelperService",function(e,t,o,n,i){function r(){e.go("contiv.menu.volumes.list")}function l(){r()}function a(){n.get().then(function(e){d.policies=e})}function c(){d.newVolume.policy=d.selectedPolicy.name,d.newVolume.backends=d.selectedPolicy.backends,d.newVolume.driver=d.selectedPolicy.driver,d.newVolume.create=d.selectedPolicy.create,d.newVolume.runtime=d.selectedPolicy.runtime}function s(){d.form.$valid&&(i.hideServerError(d),i.startLoader(d),c(),o.create(d.newVolume).then(function(e){i.stopLoader(d),r()},function(e){i.stopLoader(d),i.showServerError(d,e)}))}function u(){i.stopLoader(d),i.hideServerError(d),d.newVolume={name:"",backends:{},driver:{},create:{},runtime:{}}}var d=this;d.filesystems=["ext4","btrfs"],d.createVolume=s,d.cancelCreating=l,a(),u()}]),angular.module("contiv.volumes").config(["$stateProvider",function(e){e.state("contiv.menu.volumes.details",{url:"/details/:key",controller:"VolumeDetailsCtrl as volumeDetailsCtrl",templateUrl:"volumes/volumedetails.html"})}]).controller("VolumeDetailsCtrl",["$state","$stateParams","$scope","$interval","$http","VolumesModel","VolumeService",function(e,t,o,n,i,r,l){function a(){e.go("contiv.menu.volumes.list")}function c(){r["delete"](v.volume).then(function(e){a()})}function s(e){var o=t.key.split("/"),n={};n.policy=o[0],n.name=o[1],r.getModel(n,e).then(function(e){v.volume=e,u(),d()})}function u(){l.getVolumeUseInfo(v.volume).then(function(e){v.volumeUse=e},function(e){})}function d(){l.getVolumeSnapshots(v.volume).then(function(e){v.snapshots=e},function(e){})}function p(e,t){r.copy(model,e,t).then(function(e){},function(e){})}var v=this;v.deleteVolume=c,v.copySnapshot=p,s(!1);var m;angular.isDefined(m)||(m=n(function(){s(!0)},ContivGlobals.REFRESH_INTERVAL)),o.$on("$destroy",function(){n.cancel(m)})}]),angular.module("contiv.volumes").config(["$stateProvider",function(e){e.state("contiv.menu.volumes.list",{url:"/list",controller:"VolumeListCtrl as volumeListCtrl",templateUrl:"volumes/volumelist.html"})}]).controller("VolumeListCtrl",["$scope","$interval","$filter","VolumesModel","CRUDHelperService",function(e,t,o,n,i){function r(e){n.get(e).then(function(e){i.stopLoader(l),l.volumes=o("orderBy")(e,"name")},function(e){i.stopLoader(l)})}var l=this;r(!1);var a;angular.isDefined(a)||(a=t(function(){r(!0)},ContivGlobals.REFRESH_INTERVAL)),e.$on("$destroy",function(){t.cancel(a)})}]),angular.module("contiv.volumes").factory("VolumeService",["$http","$q",function(e,t){function o(o){var n=t.defer(),i=ContivGlobals.VOLUMES_USES_ENDPOINT+o.policy+"/"+o.name;return e.get(i).then(function(e){n.resolve(e.data)},function(e){n.reject(e.data)}),n.promise}function n(o){var n=t.defer(),i=ContivGlobals.VOLUMES_SNAPSHOTS_ENDPOINT+o.policy+"/"+o.name;return e.get(i).then(function(e){n.resolve(e.data)},function(e){n.reject(e.data)}),n.promise}return{getVolumeUseInfo:o,getVolumeSnapshots:n}}]),angular.module("contiv.directives").directive("ctvCollapsible",function(){return{restrict:"E",scope:{title:"@",collapsed:"@"},transclude:!0,link:function(e){void 0===e.collapsed&&(e.collapsed=!0)},templateUrl:"components/directives/collapsible.html"}}),angular.module("contiv.directives").directive("ctvError",function(){return{restrict:"E",scope:{header:"@",error:"="},link:function(e,t,o){t.find("i").on("click",function(){t.addClass("ng-hide")})},templateUrl:"components/directives/errormessage.html"}}),angular.module("contiv.directives").directive("ctvNamevalue",function(){return{restrict:"E",scope:{items:"=",nameheader:"@",valueheader:"@",type:"@",options:"="},link:function(e){function t(e,t){return e.name==t.name}function o(){e.newItem={name:"",value:""}}function n(e){return""===e.name&&""===e.value}e.add=function(){n(e.newItem)||(void 0===e.item&&(e.item=[]),_.pullAllWith(e.items,[e.newItem],t),e.items.push(e.newItem),o())},e.remove=function(t){_.remove(e.items,function(e){return e.name==t.name})},o(),void 0===e.nameheader&&(e.nameheader="Name"),void 0===e.valueheader&&(e.valueheader="Value"),void 0===e.type&&(e.type="text")},templateUrl:"components/directives/namevalue.html"}}),angular.module("contiv.directives").directive("ctvTable",["filterFilter","limitToFilter",function(e,t){return{restrict:"E",transclude:!0,scope:{items:"=",filtereditems:"=",size:"@"},controller:["$scope","$element","$attrs",function(o,n,i){function r(n,i){if(s.searchText=i,(void 0===n||0>n)&&(n=0),s.pageNo=n,void 0!==o.items){var r=e(o.items,s.searchText),l=Math.ceil(r.length/s.size);0==l&&(l=1),s.chunks=[];for(var a=0;l>a;a++)s.chunks.push({selected:!1,pageNo:a});if(n>=s.chunks.length&&(s.pageNo=0),s.chunks[s.pageNo].selected=!0,s.chunks.length>5){var c,u;c=s.pageNo-2,u=s.pageNo+3,0>c&&(u-=c,c=0),u>s.chunks.length&&(c-=u-s.chunks.length,u=s.chunks.length),o.paginationMenu.chunks=s.chunks.slice(c,u)}else o.paginationMenu.chunks=s.chunks;s.filteredItems=t(r,s.size,s.pageNo*s.size),o.filtereditems=s.filteredItems}return!1}function l(){var e;return e=s.pageNo<=0?0:s.pageNo-1,r(e)}function a(){var e;return e=s.pageNo+1,e>s.chunks.length-1&&(e=s.chunks.length-1),r(e)}function c(e){o.paginationMenu=e}var s=this;s.chunks=[],s.pageNo=0,s.size=parseInt(o.size,10),isNaN(s.size)&&(s.size=12),s.showChunk=r,s.showNextChunk=a,s.showPrevChunk=l,s.addPaginationMenu=c}],link:function(e,t,o,n){e.$parent.$watch(o.items,function(){n.showChunk(n.pageNo,n.searchText)})},templateUrl:"components/directives/table.html"}}]).directive("ctvThead",function(){return{restrict:"E",transclude:!0,replace:!0,template:"<thead ng-transclude></thead>"}}).directive("ctvTh",function(){return{restrict:"E",transclude:!0,replace:!0,scope:{"class":"@"},template:'<th ng-class="class" ng-transclude></th>'}}).directive("ctvTbody",function(){return{restrict:"E",scope:{},transclude:!0,replace:!0,template:"<tbody ng-transclude></tbody>"}}).directive("ctvTfoot",function(){return{restrict:"E",scope:{},transclude:!0,replace:!0,template:"<tfoot ng-transclude></tfoot>"}}).directive("ctvTsearch",function(){return{restrict:"E",require:"^^ctvTable",scope:{placeholder:"@",size:"@"},link:function(e,t,o,n){e.showChunk=function(){n.showChunk(n.pageNo,e.searchText)}},templateUrl:"components/directives/searchinput.html"}}).directive("ctvTr",function(){return{restrict:"E",transclude:"true",replace:!0,scope:{},template:"<tr ng-transclude></tr>"}}).directive("ctvTd",function(){return{restrict:"E",transclude:!0,replace:!0,scope:!0,template:"<td ng-transclude></td>"}}).directive("ctvTpagination",function(){return{restrict:"E",require:"^^ctvTable",scope:{},link:function(e,t,o,n){n.addPaginationMenu(e),n.showChunk(n.pageNo,n.searchText),e.showChunk=function(e){n.showChunk(e,n.searchText)},e.showPrevChunk=n.showPrevChunk,e.showNextChunk=n.showNextChunk},templateUrl:"components/directives/paginationmenu.html"}}),angular.module("contiv.models").factory("ApplicationGroupsModel",["$http","$q",function(e,t){var o=new Collection(e,t,ContivGlobals.APPLICATIONGROUPS_ENDPOINT);return o.generateKey=function(e){return e.tenantName+":"+e.groupName},o}]),BaseCollection.prototype.extract=function(e){return e.data},BaseCollection.prototype.get=function(e){var t=this;return void 0===e&&(e=!1),!e&&t.models.length>0?t.$q.when(t.models):t.$http.get(t.url).then(function(e){return t.models=t.extract(e),t.models})},BaseCollection.prototype.getModelByKey=function(e,t,o){function n(){return _.find(i.models,function(t){return t[o]==e})}var i=this;void 0===t&&(t=!1),void 0===o&&(o="key");var r=i.$q.defer();return!t&&i.models.length>0?r.resolve(n()):i.get(t).then(function(){r.resolve(n())}),r.promise},BaseCollection.prototype.getModel=function(e,t){function o(){return _.find(n.models,e)}var n=this;void 0===t&&(t=!1);var i=n.$q.defer();return!t&&n.models.length>0?i.resolve(o()):n.get(t).then(function(){i.resolve(o())}),i.promise},Collection.prototype=Object.create(BaseCollection.prototype),Collection.prototype.create=function(e,t){var o=this,n=o.$q.defer();return void 0===t&&(t=o.url+e.key+"/"),o.$http.post(t,e).then(function(t){var i=o.extract(t);void 0!==i&&""!==i||(i=e),o.models.push(i),n.resolve(o.extract(t))},function(e){n.reject(o.extract(e))}),n.promise},Collection.prototype.save=function(e){var t=this,o=t.$q.defer(),n=t.url+e.key+"/";return t.$http.put(n,e).then(function(n){_.remove(t.models,function(t){return t.key==e.key}),t.models.push(t.extract(n)),o.resolve(t.extract(n))},function(e){o.reject(t.extract(e))}),o.promise},Collection.prototype["delete"]=function(e){var t=this,o=t.$q.defer(),n=t.url+e.key+"/";return t.$http["delete"](n).then(function(n){_.remove(t.models,function(t){return t.key==e.key}),o.resolve(t.extract(n))},function(e){o.reject(t.extract(e))}),o.promise},Collection.prototype.deleteUsingKey=function(e,t,o){var n=this;void 0===t&&(t="key");var i=n.$q.defer();return void 0===o&&(o=n.url+e+"/"),n.$http["delete"](o).then(function(o){_.remove(n.models,function(o){return o[t]==e}),i.resolve(n.extract(o))},function(e){i.reject(n.extract(e))}),i.promise},angular.module("contiv.models").factory("NetworksModel",["$http","$q",function(e,t){return new Collection(e,t,ContivGlobals.NETWORKS_ENDPOINT)}]),angular.module("contiv.models").factory("NodesModel",["$http","$q",function(e,t){var o=new NodesCollection(e,t);return o}]),NodesCollection.prototype=Object.create(BaseCollection.prototype),NodesCollection.prototype.extract=function(e){return _.map(e.data,function(e,t){return e.key=t,e})},NodesCollection.prototype.commission=function(e){var t=this,o=t.$q.defer(),n=ContivGlobals.NODES_COMMISSION_ENDPOINT;return t.$http.post(n,e,{headers:{"Content-Type":"application/json"}}).then(function(e){o.resolve()},function(e){o.reject(e)}),o.promise},NodesCollection.prototype.decommission=function(e){var t=this,o=t.$q.defer(),n=ContivGlobals.NODES_DECOMMISSION_ENDPOINT;return t.$http.post(n,e,{headers:{"Content-Type":"application/json"}}).then(function(e){o.resolve()},function(e){o.reject(e)}),o.promise},NodesCollection.prototype.upgrade=function(e){var t=this,o=t.$q.defer(),n=ContivGlobals.NODES_MAINTENANCE_ENDPOINT;return t.$http.post(n,e,{headers:{"Content-Type":"application/json"}}).then(function(e){o.resolve()},function(e){o.reject(e)}),o.promise},NodesCollection.prototype.discover=function(e){var t=this,o=t.$q.defer(),n=ContivGlobals.NODES_DISCOVER_ENDPOINT;return t.$http.post(n,e,{headers:{"Content-Type":"application/json"}}).then(function(e){o.resolve()},function(e){o.reject(e)}),o.promise},angular.module("contiv.models").factory("OrganizationsModel",["$http","$q",function(e,t){return new Collection(e,t,ContivGlobals.ORGANIZATIONS_ENDPOINT)}]),angular.module("contiv.models").factory("PoliciesModel",["$http","$q",function(e,t){var o=new Collection(e,t,ContivGlobals.POLICIES_ENDPOINT);return o.generateKey=function(e){return e.tenantName+":"+e.policyName},o}]),angular.module("contiv.models").factory("RulesModel",["$http","$q",function(e,t){var o=new Collection(e,t,ContivGlobals.RULES_ENDPOINT);return o.getIncomingRules=function(e,t){return o.get().then(function(o){return _.filter(o,{policyName:e,direction:"in",tenantName:t})})},o.getOutgoingRules=function(e,t){return o.get().then(function(o){return _.filter(o,{policyName:e,direction:"out",tenantName:t})})},o.generateKey=function(e){return e.tenantName+":"+e.policyName+":"+e.ruleId},o}]),angular.module("contiv.models").factory("ServicelbsModel",["$http","$q",function(e,t){return new Collection(e,t,ContivGlobals.SERVICELBS_ENDPOINT)}]),angular.module("contiv.models").factory("StoragePoliciesModel",["$http","$q",function(e,t){function o(e,t){Collection.call(this,e,t,ContivGlobals.STORAGEPOLICIES_ENDPOINT)}o.prototype=Object.create(Collection.prototype),o.prototype.create=function(e){var t=this,o=t.url+e.name;return Collection.prototype.create.call(t,e,o)},o.prototype.save=function(e){var t=this,o=t.$q.defer(),n=t.url+e.name;return t.$http.post(n,e).then(function(n){_.remove(t.models,function(t){return t.name==e.name}),t.models.push(e),o.resolve(t.extract(n))},function(e){o.reject(t.extract(e))}),o.promise};var n=new o(e,t);return n}]),angular.module("contiv.models").factory("VolumesModel",["$http","$q",function(e,t){function o(e,t){Collection.call(this,e,t,ContivGlobals.VOLUMES_ENDPOINT)}o.prototype=Object.create(Collection.prototype),o.prototype["delete"]=function(e){var t=this,o=t.$q.defer(),n=ContivGlobals.VOLUMES_DELETE_ENDPOINT;e.volume=e.name;var i={data:e};return t.$http["delete"](n,i).then(function(n){_.remove(t.models,function(t){return t.name==e.name&&t.policy==e.policy}),o.resolve(t.extract(n))},function(e){o.reject(t.extract(e))}),o.promise},o.prototype.create=function(e){var t=this,o=ContivGlobals.VOLUMES_CREATE_ENDPOINT;return Collection.prototype.create.call(t,e,o)},o.prototype.copy=function(e,t,o){var n=this,i=n.$q.defer(),r=ContivGlobals.VOLUMES_COPYSNAPSHOTS_ENDPOINT,l={volume:e.name,policy:e.policy,Options:{target:o,snapshot:t}};return n.$http.post(r,l).then(function(e){i.resolve(n.extract(e))},function(e){i.reject(n.extract(e))}),i.promise};var n=new o(e,t);return n}]),angular.module("contiv.utils").factory("CRUDHelperService",function(){function e(e){e.showLoader=!0}function t(e){e.showLoader=!1}function o(e,t){e.showServerError=!0,e.serverErrorMessage=t}function n(e){e.showServerError=!1}return{startLoader:e,stopLoader:t,showServerError:o,hideServerError:n}});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbW9kZWxzL2NvbGxlY3Rpb24uanMiLCJjb21wb25lbnRzL21vZGVscy9ub2Rlc21vZGVsLmpzIiwiZGlyZWN0aXZlcy9tb2R1bGUuanMiLCJtb2RlbHMvbW9kdWxlLmpzIiwidXRpbHMvbW9kdWxlLmpzIiwiYXBwbGljYXRpb25ncm91cHMvbW9kdWxlLmpzIiwiZGFzaGJvYXJkL21vZHVsZS5qcyIsImxvZ2luL21vZHVsZS5qcyIsIm1lbnUvbW9kdWxlLmpzIiwibmV0d29ya19wb2xpY2llcy9tb2R1bGUuanMiLCJuZXR3b3Jrcy9tb2R1bGUuanMiLCJub2Rlcy9tb2R1bGUuanMiLCJvcmdhbml6YXRpb25zL21vZHVsZS5qcyIsInNlcnZpY2VfbGJzL21vZHVsZS5qcyIsInN0b3JhZ2VfcG9saWNpZXMvbW9kdWxlLmpzIiwidm9sdW1lcy9tb2R1bGUuanMiLCJhcHAuanMiLCJhcHBsaWNhdGlvbmdyb3Vwcy9hcHBsaWNhdGlvbmdyb3VwY3JlYXRlY3RybC5qcyIsImFwcGxpY2F0aW9uZ3JvdXBzL2FwcGxpY2F0aW9uZ3JvdXBkZXRhaWxzY3RybC5qcyIsImFwcGxpY2F0aW9uZ3JvdXBzL2FwcGxpY2F0aW9uZ3JvdXBsaXN0Y3RybC5qcyIsImFwcGxpY2F0aW9uZ3JvdXBzL2FwcGxpY2F0aW9uZ3JvdXBzZXJ2aWNlLmpzIiwiZGFzaGJvYXJkL2Rhc2hib2FyZGN0cmwuanMiLCJsb2dpbi9sb2dpbmN0cmwuanMiLCJtZW51L21lbnVDdHJsLmpzIiwibmV0d29ya19wb2xpY2llcy9pc29sYXRpb25wb2xpY3ljcmVhdGVjdHJsLmpzIiwibmV0d29ya19wb2xpY2llcy9pc29sYXRpb25wb2xpY3lkZXRhaWxzY3RybC5qcyIsIm5ldHdvcmtfcG9saWNpZXMvaXNvbGF0aW9ucG9saWN5bGlzdGN0cmwuanMiLCJuZXR3b3JrX3BvbGljaWVzL25ldHdvcmtwb2xpY2llc3RhYnNjdHJsLmpzIiwibmV0d29ya3MvbmV0d29ya2NyZWF0ZWN0cmwuanMiLCJuZXR3b3Jrcy9uZXR3b3JrZGV0YWlsc2N0cmwuanMiLCJuZXR3b3Jrcy9uZXR3b3JrbGlzdGN0cmwuanMiLCJub2Rlcy9ub2RlY29tbWlzc2lvbmN0cmwuanMiLCJub2Rlcy9ub2RlZGV0YWlsc2N0cmwuanMiLCJub2Rlcy9ub2RlZGlyZWN0aXZlLmpzIiwibm9kZXMvbm9kZWxpc3RjdHJsLmpzIiwibm9kZXMvbm9kZXNlcnZpY2UuanMiLCJvcmdhbml6YXRpb25zL29yZ2FuaXphdGlvbmNyZWF0ZWN0cmwuanMiLCJvcmdhbml6YXRpb25zL29yZ2FuaXphdGlvbmRldGFpbHNjdHJsLmpzIiwib3JnYW5pemF0aW9ucy9vcmdhbml6YXRpb25saXN0Y3RybC5qcyIsInNlcnZpY2VfbGJzL3NlcnZpY2VsYmNyZWF0ZWN0cmwuanMiLCJzZXJ2aWNlX2xicy9zZXJ2aWNlbGJkZXRhaWxzY3RybC5qcyIsInNlcnZpY2VfbGJzL3NlcnZpY2VsYmxpc3RjdHJsLmpzIiwic2VydmljZV9sYnMvc2VydmljZWxicG9ydHNkaXJlY3RpdmUuanMiLCJzdG9yYWdlX3BvbGljaWVzL3N0b3JhZ2Vwb2xpY3ljcmVhdGVjdHJsLmpzIiwic3RvcmFnZV9wb2xpY2llcy9zdG9yYWdlcG9saWN5ZGV0YWlsc2N0cmwuanMiLCJzdG9yYWdlX3BvbGljaWVzL3N0b3JhZ2Vwb2xpY3lkaXJlY3RpdmUuanMiLCJzdG9yYWdlX3BvbGljaWVzL3N0b3JhZ2Vwb2xpY3lsaXN0Y3RybC5qcyIsInZvbHVtZXMvdm9sdW1lY3JlYXRlY3RybC5qcyIsInZvbHVtZXMvdm9sdW1lZGV0YWlsc2N0cmwuanMiLCJ2b2x1bWVzL3ZvbHVtZWxpc3RjdHJsLmpzIiwidm9sdW1lcy92b2x1bWVzZXJ2aWNlLmpzIiwiY29tcG9uZW50cy9kaXJlY3RpdmVzL2NvbGxhcHNpYmxlZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9kaXJlY3RpdmVzL2Vycm9ybWVzc2FnZWRpcmVjdGl2ZS5qcyIsImNvbXBvbmVudHMvZGlyZWN0aXZlcy9uYW1ldmFsdWVkaXJlY3RpdmUuanMiLCJjb21wb25lbnRzL2RpcmVjdGl2ZXMvdGFibGVkaXJlY3RpdmUuanMiLCJjb21wb25lbnRzL21vZGVscy9hcHBsaWNhdGlvbmdyb3Vwc21vZGVsLmpzIiwiY29tcG9uZW50cy9tb2RlbHMvbmV0d29ya3Ntb2RlbC5qcyIsImNvbXBvbmVudHMvbW9kZWxzL29yZ2FuaXphdGlvbnNtb2RlbC5qcyIsImNvbXBvbmVudHMvbW9kZWxzL3BvbGljaWVzbW9kZWwuanMiLCJjb21wb25lbnRzL21vZGVscy9ydWxlc21vZGVsLmpzIiwiY29tcG9uZW50cy9tb2RlbHMvc2VydmljZWxic21vZGVsLmpzIiwiY29tcG9uZW50cy9tb2RlbHMvc3RvcmFnZXBvbGljaWVzbW9kZWwuanMiLCJjb21wb25lbnRzL21vZGVscy92b2x1bWVzbW9kZWwuanMiLCJjb21wb25lbnRzL3V0aWxzL2NydWRoZWxwZXJzZXJ2aWNlLmpzIl0sIm5hbWVzIjpbIkJhc2VDb2xsZWN0aW9uIiwiJGh0dHAiLCIkcSIsInVybCIsInRoaXMiLCJtb2RlbHMiLCJDb2xsZWN0aW9uIiwiY2FsbCIsIk5vZGVzQ29sbGVjdGlvbiIsIkNvbnRpdkdsb2JhbHMiLCJOT0RFU19MSVNUX0VORFBPSU5UIiwiYW5ndWxhciIsIm1vZHVsZSIsIk5FVFdPUktTX0VORFBPSU5UIiwiUE9MSUNJRVNfRU5EUE9JTlQiLCJSVUxFU19FTkRQT0lOVCIsIkFQUExJQ0FUSU9OR1JPVVBTX0VORFBPSU5UIiwiU0VSVklDRUxCU19FTkRQT0lOVCIsIk9SR0FOSVpBVElPTlNfRU5EUE9JTlQiLCJWT0xVTUVTX0VORFBPSU5UIiwiVk9MVU1FU19DUkVBVEVfRU5EUE9JTlQiLCJWT0xVTUVTX0RFTEVURV9FTkRQT0lOVCIsIlZPTFVNRVNfQ09QWVNOQVBTSE9UU19FTkRQT0lOVCIsIlZPTFVNRVNfVVNFU19FTkRQT0lOVCIsIlZPTFVNRVNfU05BUFNIT1RTX0VORFBPSU5UIiwiU1RPUkFHRVBPTElDSUVTX0VORFBPSU5UIiwiTk9ERVNfRElTQ09WRVJfRU5EUE9JTlQiLCJOT0RFU19DT01NSVNTSU9OX0VORFBPSU5UIiwiTk9ERVNfREVDT01NSVNTSU9OX0VORFBPSU5UIiwiTk9ERVNfTUFJTlRFTkFOQ0VfRU5EUE9JTlQiLCJOT0RFU19MQVNUX0pPQl9FTkRQT0lOVCIsIk5PREVTX0FDVElWRV9KT0JfRU5EUE9JTlQiLCJSRUZSRVNIX0lOVEVSVkFMIiwiQ0lEUl9SRUdFWCIsImNvbmZpZyIsIiRzdGF0ZVByb3ZpZGVyIiwic3RhdGUiLCJhYnN0cmFjdCIsInRlbXBsYXRlIiwiJHVybFJvdXRlclByb3ZpZGVyIiwib3RoZXJ3aXNlIiwiY29udHJvbGxlciIsInRlbXBsYXRlVXJsIiwiJHN0YXRlIiwiQXBwbGljYXRpb25Hcm91cHNNb2RlbCIsIk5ldHdvcmtzTW9kZWwiLCJQb2xpY2llc01vZGVsIiwiUnVsZXNNb2RlbCIsIkFwcGxpY2F0aW9uR3JvdXBTZXJ2aWNlIiwiQ1JVREhlbHBlclNlcnZpY2UiLCJyZXR1cm5Ub0FwcGxpY2F0aW9uR3JvdXAiLCJnbyIsImNhbmNlbENyZWF0aW5nIiwiZ2V0TmV0d29ya3MiLCJnZXQiLCJ0aGVuIiwicmVzdWx0IiwiYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwiLCJuZXR3b3JrcyIsIl8iLCJmaWx0ZXIiLCJ0ZW5hbnROYW1lIiwiZ2V0SXNvbGF0aW9uUG9saWNpZXMiLCJpc29sYXRpb25Qb2xpY2llcyIsImFkZElzb2xhdGlvblBvbGljeSIsInJlbW92ZUlzb2xhdGlvblBvbGljeSIsInBvbGljeU5hbWUiLCJjcmVhdGVBcHBsaWNhdGlvbkdyb3VwIiwiZm9ybSIsIiR2YWxpZCIsImhpZGVTZXJ2ZXJFcnJvciIsInN0YXJ0TG9hZGVyIiwiYXBwbGljYXRpb25Hcm91cCIsIm5ldHdvcmtOYW1lIiwic2VsZWN0ZWROZXR3b3JrIiwia2V5IiwiZ2VuZXJhdGVLZXkiLCJjcmVhdGUiLCJzdG9wTG9hZGVyIiwic2hvd1NlcnZlckVycm9yIiwicmVzZXRGb3JtIiwiZ3JvdXBOYW1lIiwicG9saWNpZXMiLCJzZWxlY3RlZFBvbGljeSIsInNlbGVjdGVkUG9saWNpZXMiLCJpbmNvbWluZ1J1bGVzIiwib3V0Z29pbmdSdWxlcyIsImlzb2xhdGlvblBvbGljaWVzVmlzaWJsZSIsIiRzdGF0ZVBhcmFtcyIsInNldE1vZGUiLCJpcyIsImFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCIsIm1vZGUiLCJyZXR1cm5Ub0FwcGxpY2F0aW9uR3JvdXBEZXRhaWxzIiwiY2FuY2VsRWRpdGluZyIsImdldFJ1bGVzIiwiZm9yRWFjaCIsInBvbGljeSIsImdldEluY29taW5nUnVsZXMiLCJydWxlcyIsIkFycmF5IiwicHJvdG90eXBlIiwicHVzaCIsImFwcGx5IiwiZ2V0T3V0Z29pbmdSdWxlcyIsImRlbGV0ZUFwcGxpY2F0aW9uR3JvdXAiLCJzYXZlQXBwbGljYXRpb25Hcm91cCIsInNhdmUiLCJnZXRNb2RlbEJ5S2V5IiwiZ3JvdXAiLCJ1bmRlZmluZWQiLCIkc2NvcGUiLCIkaW50ZXJ2YWwiLCIkZmlsdGVyIiwiZ2V0QXBwbGljYXRpb25Hcm91cHMiLCJyZWxvYWQiLCJhcHBsaWNhdGlvbkdyb3VwTGlzdEN0cmwiLCJncm91cHMiLCJwcm9taXNlIiwiaXNEZWZpbmVkIiwiJG9uIiwiY2FuY2VsIiwiZmFjdG9yeSIsImFwcGxpY2F0aW9uR3JvdXBDdHJsIiwiZmluZCIsInJlbW92ZSIsInJ1bGUiLCJOb2Rlc01vZGVsIiwiVm9sdW1lc01vZGVsIiwiU3RvcmFnZVBvbGljaWVzTW9kZWwiLCJnZXREYXNoYm9hcmRJbmZvIiwiZGFzaGJvYXJkQ3RybCIsIm5vZGVzIiwibGVuZ3RoIiwidm9sdW1lcyIsIm5ldHdvcmtwb2xpY2llcyIsInN0b3JhZ2Vwb2xpY2llcyIsInJldHVyblRvRGFzaGJvYXJkIiwidXNlcm5hbWUiLCJsb2dpbkN0cmwiLCJsb2dpbiIsInBhcmFtcyIsImxvZ291dCIsIm1lbnVDdHJsIiwicmV0dXJuVG9Qb2xpY2llcyIsImNyZWF0ZVBvbGljeSIsImlzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwiLCJuZXdQb2xpY3kiLCJyZXR1cm5Ub1BvbGljeURldGFpbHMiLCJpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCIsImRvbmVFZGl0aW5nIiwiZGVsZXRlUG9saWN5IiwicmVzZXROZXdJbmNvbWluZ1J1bGUiLCJuZXdJbmNvbWluZ1J1bGUiLCJydWxlSWQiLCJwcmlvcml0eSIsImFjdGlvbiIsImZyb21FbmRwb2ludEdyb3VwIiwiZnJvbU5ldHdvcmsiLCJmcm9tSVBBZGRyZXNzIiwicHJvdG9jb2wiLCJwb3J0IiwiZGlyZWN0aW9uIiwibmV3SW5jb21pbmdTZWxlY3RlZEFwcGxpY2F0aW9uR3JvdXAiLCJkaXNhYmxlSW5jb21pbmdOZXR3b3JrU2VsZWN0aW9uIiwiZGlzYWJsZUluY29taW5nQXBwbGljYXRpb25Hcm91cFNlbGVjdGlvbiIsInJlc2V0TmV3T3V0Z29pbmdSdWxlIiwibmV3T3V0Z29pbmdSdWxlIiwidG9FbmRwb2ludEdyb3VwIiwidG9OZXR3b3JrIiwidG9JUEFkZHJlc3MiLCJuZXdPdXRnb2luZ1NlbGVjdGVkQXBwbGljYXRpb25Hcm91cCIsImRpc2FibGVPdXRnb2luZ05ldHdvcmtTZWxlY3Rpb24iLCJkaXNhYmxlT3V0Z29pbmdBcHBsaWNhdGlvbkdyb3VwU2VsZWN0aW9uIiwiYXBwbGljYXRpb25Hcm91cHMiLCJvbkNoYW5nZU91dGdvaW5nQXBwbGljYXRpb25Hcm91cFNlbGVjdGlvbiIsIm9uQ2hhbmdlSW5jb21pbmdBcHBsaWNhdGlvbkdyb3VwU2VsZWN0aW9uIiwib25DaGFuZ2VPdXRnb2luZ05ldHdvcmtTZWxlY3Rpb24iLCJUb0VuZHBvaW50R3JvdXAiLCJvbkNoYW5nZUluY29taW5nTmV0d29ya1NlbGVjdGlvbiIsImdlbmVyYXRlUnVsZUlkIiwidG9TdHJpbmciLCJEYXRlIiwibm93IiwiYWRkSW5jb21pbmdSdWxlIiwiYWRkT3V0Z29pbmdSdWxlIiwiZGVsZXRlSW5jb21pbmdSdWxlIiwiZGVsZXRlVXNpbmdLZXkiLCJuIiwiZGVsZXRlT3V0Z29pbmdSdWxlIiwiZ2V0UG9saWNpZXMiLCJwb2xpY2llc0xpc3RDdHJsIiwicmV0dXJuVG9OZXR3b3JrcyIsImNyZWF0ZU5ldHdvcmsiLCJuZXR3b3JrQ3JlYXRlQ3RybCIsIm5ld05ldHdvcmsiLCJlbmNhcCIsInN1Ym5ldCIsImdhdGV3YXkiLCJjaWRyUGF0dGVybiIsImRlbGV0ZU5ldHdvcmsiLCJuZXR3b3JrRGV0YWlsc0N0cmwiLCJuZXR3b3JrIiwibmV0d29ya3NMaXN0Q3RybCIsIm5vZGVDb21taXNzaW9uQ3RybCIsInJldHVyblRvTm9kZURldGFpbHMiLCJyZXR1cm5Ub05vZGVzIiwiY2FuY2VsQ29tbWlzc2lvbmluZ05vZGUiLCJjYW5jZWxEaXNjb3ZlcmluZ05vZGUiLCJjcmVhdGVFeHRyYVZhcnMiLCJhbnNpYmxlVmFyaWFibGVzIiwiaXRlbSIsImV4dHJhX3ZhcnMiLCJuYW1lIiwidmFsdWUiLCJlbnZWYXJzIiwiZW52VmFyaWFibGVzIiwibm9kZU9wc09iaiIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb21taXNzaW9uIiwiY2xlYW51cEV4dHJhVmFycyIsImRpc2NvdmVyIiwiY3JlYXRlSVBBZGRyQXJyYXkiLCJhZGRycyIsIndvcmRzIiwibm9kZUlQQWRkciIsImRlY29tbWlzc2lvbiIsIm5vZGVEZXRhaWxzQ3RybCIsInNob3dDb21taXNzaW9uQnV0dG9uIiwiY29tbWlzc2lvbkJ1dHRvbkVuYWJsZWQiLCJ1cGdyYWRlQnV0dG9uRW5hYmxlZCIsInVwZ3JhZGUiLCJzZXRCdXR0b25EaXNwbGF5Iiwibm9kZSIsInN0YXR1cyIsImdldE5vZGVJbmZvIiwiZGlyZWN0aXZlIiwicmVzdHJpY3QiLCJzY29wZSIsIk5vZGVTZXJ2aWNlIiwiZ2V0Tm9kZXMiLCJub2RlTGlzdEN0cmwiLCJnZXRBY3RpdmVMb2dzIiwiZ2V0TGFzdExvZ3MiLCJhY3RpdmVMb2dzIiwiZGVzYyIsImxhc3RMb2dzIiwiZGVmZXJyZWQiLCJkZWZlciIsInJlc29sdmUiLCJkYXRhIiwicmVqZWN0IiwiT3JnYW5pemF0aW9uc01vZGVsIiwicmV0dXJuVG9Pcmdhbml6YXRpb25zIiwiY3JlYXRlT3JnYW5pemF0aW9uIiwib3JnYW5pemF0aW9uQ3JlYXRlQ3RybCIsIm5ld09yZ2FuaXphdGlvbiIsImRlbGV0ZU9yZ2FuaXphdGlvbiIsIm9yZ2FuaXphdGlvbkRldGFpbHNDdHJsIiwib3JnYW5pemF0aW9uIiwiZ2V0T3JnYW5pemF0aW9ucyIsIm9yZ2FuaXphdGlvbnNMaXN0Q3RybCIsIm9yZ2FuaXphdGlvbnMiLCJTZXJ2aWNlbGJzTW9kZWwiLCJyZXR1cm5Ub1NlcnZpY2VsYnMiLCJzZXJ2aWNlbGJDcmVhdGVDdHJsIiwiY3JlYXRlTGFiZWxTZWxlY3RvclN0cmluZ3MiLCJzZXJ2aWNlbGIiLCJzZWxlY3RvcnMiLCJsYWJlbFNlbGVjdG9ycyIsImxhYmVsU2VsZWN0b3IiLCJzZWxlY3RvclN0cmluZyIsImNyZWF0ZVNlcnZpY2VsYiIsInNlcnZpY2VOYW1lIiwiaXBBZGRyZXNzIiwicG9ydHMiLCJzZXJ2aWNlbGJEZXRhaWxzQ3RybCIsInJldHVyblRvU2VydmljZWxiRGV0YWlscyIsImRlbGV0ZVNlcnZpY2VsYiIsInNhdmVTZXJ2aWNlbGIiLCJjcmVhdGVMYWJlbFNlbGVjdG9ycyIsInNlbGVjdG9yU3RyIiwic2VsZWN0b3IiLCJzcGxpdCIsImdldFNlcnZpY2VsYnMiLCJzZXJ2aWNlbGJMaXN0Q3RybCIsInNlcnZpY2VsYnMiLCJpdGVtcyIsImxpbmsiLCJjb21wYXJlIiwidmFsMSIsInZhbDIiLCJyZXNldE5ld0l0ZW0iLCJuZXdJdGVtIiwic2VydmljZVBvcnQiLCJwcm92aWRlclBvcnQiLCJpc0VtcHR5SXRlbSIsImFkZCIsIm5ld0l0ZW1TdHIiLCJwdWxsQWxsV2l0aCIsInBhc3NlZEl0ZW0iLCJyZXR1cm5Ub1N0b3JhZ2VQb2xpY2llcyIsImNyZWF0ZUZpbGVzeXN0ZW1DbWRzIiwic3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwiLCJmaWxlc3lzdGVtY21kcyIsIm5ld1N0b3JhZ2VQb2xpY3kiLCJmaWxlc3lzdGVtcyIsImJhY2tlbmRzIiwiY3J1ZCIsIm1vdW50Iiwic25hcHNob3QiLCJ1bmxvY2tlZCIsImRyaXZlciIsInBvb2wiLCJzaXplIiwiZmlsZXN5c3RlbSIsInJ1bnRpbWUiLCJzbmFwc2hvdHMiLCJmcmVxdWVuY3kiLCJrZWVwIiwicmF0ZS1saW1pdCIsIndyaXRlLWlvcHMiLCJyZWFkLWlvcHMiLCJ3cml0ZS1icHMiLCJyZWFkLWJwcyIsInN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCIsImluaXRpYWxpemVGaWxlc3lzdGVtQ21kc0FycmF5Iiwic2F2ZVBvbGljeSIsInN0b3JhZ2VQb2xpY3lMaXN0Q3RybCIsInJldHVyblRvVm9sdW1lc01vZGVsIiwiZ2V0U3RvcmFnZVBvbGljaWVzIiwidm9sdW1lQ3JlYXRlQ3RybCIsImFwcGx5UG9saWN5U2V0dGluZ3MiLCJuZXdWb2x1bWUiLCJjcmVhdGVWb2x1bWUiLCJWb2x1bWVTZXJ2aWNlIiwicmV0dXJuVG9Wb2x1bWVzIiwiZGVsZXRlVm9sdW1lIiwidm9sdW1lRGV0YWlsc0N0cmwiLCJ2b2x1bWUiLCJnZXRWb2x1bWVJbmZvIiwidG9rZW5zIiwibW9kZWwiLCJnZXRNb2RlbCIsImdldFZvbHVtZVVzZUluZm8iLCJnZXRWb2x1bWVTbmFwc2hvdHMiLCJ2b2x1bWVVc2UiLCJjb3B5U25hcHNob3QiLCJjb3B5IiwiZ2V0Vm9sdW1lcyIsInZvbHVtZUxpc3RDdHJsIiwidGl0bGUiLCJjb2xsYXBzZWQiLCJ0cmFuc2NsdWRlIiwiaGVhZGVyIiwiZXJyb3IiLCJlbGVtZW50IiwiYXR0ciIsIm9uIiwiYWRkQ2xhc3MiLCJuYW1laGVhZGVyIiwidmFsdWVoZWFkZXIiLCJ0eXBlIiwib3B0aW9ucyIsImZpbHRlckZpbHRlciIsImxpbWl0VG9GaWx0ZXIiLCJmaWx0ZXJlZGl0ZW1zIiwiJGVsZW1lbnQiLCIkYXR0cnMiLCJzaG93Q2h1bmsiLCJwYWdlTm8iLCJzZWFyY2hUZXh0IiwidGFibGVDdHJsIiwic2VhcmNoVGV4dEZpbHRlcmVkSXRlbXMiLCJub09mQ2h1bmtzIiwiTWF0aCIsImNlaWwiLCJjaHVua3MiLCJpIiwic2VsZWN0ZWQiLCJzbGljZVN0YXJ0Iiwic2xpY2VFbmQiLCJwYWdpbmF0aW9uTWVudSIsInNsaWNlIiwiZmlsdGVyZWRJdGVtcyIsInNob3dQcmV2Q2h1bmsiLCJwcmV2Q2h1bmsiLCJzaG93TmV4dENodW5rIiwibmV4dENodW5rIiwiYWRkUGFnaW5hdGlvbk1lbnUiLCJtZW51IiwicGFyc2VJbnQiLCJpc05hTiIsImF0dHJzIiwiJHBhcmVudCIsIiR3YXRjaCIsInJlcGxhY2UiLCJjbGFzcyIsInJlcXVpcmUiLCJwbGFjZWhvbGRlciIsImdyb3Vwc21vZGVsIiwiZXh0cmFjdCIsImNvbGxlY3Rpb24iLCJ3aGVuIiwia2V5bmFtZSIsImZpbmRNb2RlbCIsImMiLCJPYmplY3QiLCJwb3N0IiwicmVzcG9uc2UiLCJyZXNwb25zZURhdGEiLCJwdXQiLCJub2Rlc21vZGVsIiwibWFwIiwibm9kZXNjb2xsZWN0aW9uIiwiaGVhZGVycyIsIkNvbnRlbnQtVHlwZSIsInBvbGljaWVzbW9kZWwiLCJydWxlc21vZGVsIiwiU3RvcmFnZVBvbGljaWVzQ29sbGVjdGlvbiIsIlZvbHVtZXNDb2xsZWN0aW9uIiwidm9sdW1lc2NvbGxlY3Rpb24iLCJ2b2xjb3B5bW9kZWwiLCJPcHRpb25zIiwidGFyZ2V0Iiwidm9sdW1lc21vZGVsIiwic2hvd0xvYWRlciIsIm1lc3NhZ2UiLCJzZXJ2ZXJFcnJvck1lc3NhZ2UiXSwibWFwcGluZ3MiOiJBQU9BLFFBQUFBLGdCQUFBQyxFQUFBQyxFQUFBQyxHQUNBQyxLQUFBQyxVQUNBRCxLQUFBSCxNQUFBQSxFQUNBRyxLQUFBRixHQUFBQSxFQUNBRSxLQUFBRCxJQUFBQSxFQTJGQSxRQUFBRyxZQUFBTCxFQUFBQyxFQUFBQyxHQUNBSCxlQUFBTyxLQUFBSCxLQUFBSCxFQUFBQyxFQUFBQyxHQ3ZGQSxRQUFBSyxpQkFBQVAsRUFBQUMsR0FDQUYsZUFBQU8sS0FBQUgsS0FBQUgsRUFBQUMsRUFBQU8sY0FBQUMscUJDakJBQyxRQUFBQyxPQUFBLHdCQ0dBRCxRQUFBQyxPQUFBLG1C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QUFBTSxjQUFBYSwrQkFDQWlaLEdBQ0FuRixPQUFBRyxFQUFBbEksS0FDQXBILE9BQUFzUCxFQUFBdFAsT0FDQXVVLFNBQ0FDLE9BQUEzRixFQUNBdkIsU0FBQUEsR0FXQSxPQVJBNEYsR0FBQWxaLE1BQUF3WixLQUFBdFosRUFBQW9hLEdBQ0FoWCxLQUFBLFNBQUFtVyxHQUdBbEssRUFBQUUsUUFBQXlKLEVBQUFELFFBQUFRLEtBQ0EsU0FBQUEsR0FDQWxLLEVBQUFJLE9BQUF1SixFQUFBRCxRQUFBUSxNQUVBbEssRUFBQWxJLFFBR0EsSUFBQW9ULEdBQUEsR0FBQUwsR0FBQXBhLEVBQUFDLEVBQ0EsT0FBQXdhLE1DakVBL1osUUFBQUMsT0FBQSxnQkFDQThHLFFBQUEsb0JBQUEsV0FDQSxRQUFBbkQsR0FBQTlCLEdBQ0FBLEVBQUFrWSxZQUFBLEVBR0EsUUFBQTdWLEdBQUFyQyxHQUNBQSxFQUFBa1ksWUFBQSxFQUdBLFFBQUE1VixHQUFBdEMsRUFBQW1ZLEdBQ0FuWSxFQUFBc0MsaUJBQUEsRUFDQXRDLEVBQUFvWSxtQkFBQUQsRUFHQSxRQUFBdFcsR0FBQTdCLEdBQ0FBLEVBQUFzQyxpQkFBQSxFQUdBLE9BQ0FSLFlBQUFBLEVBQ0FPLFdBQUFBLEVBQ0FDLGdCQUFBQSxFQUNBVCxnQkFBQUEiLCJmaWxlIjoiYXBwL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQmFzZUNvbGxlY3Rpb24gY2xhc3MgdGhhdCBkb2VzIGp1c3QgZmV0Y2ggb2YgdGhlIG9iamVjdHMuXG4gKiBAcGFyYW0gJGh0dHBcbiAqIEBwYXJhbSAkcVxuICogQHBhcmFtIHVybCBVc2VkIGZvciBkb2luZyBIVFRQIEdFVCBhbmQgZmV0Y2ggb2JqZWN0cyBmcm9tIHNlcnZlclxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEJhc2VDb2xsZWN0aW9uKCRodHRwLCAkcSwgdXJsKSB7XG4gICAgdGhpcy5tb2RlbHMgPSBbXTtcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy4kcSA9ICRxO1xuICAgIHRoaXMudXJsID0gdXJsO1xufVxuXG5CYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUuZXh0cmFjdCA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG59O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gcmVsb2FkIE9wdGlvbmFsLiBEZWZhdWx0IGlzIGZhbHNlXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChyZWxvYWQpIHtcbiAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgaWYgKHJlbG9hZCA9PT0gdW5kZWZpbmVkKSByZWxvYWQgPSBmYWxzZTtcbiAgICByZXR1cm4gKCFyZWxvYWQgJiYgY29sbGVjdGlvbi5tb2RlbHMubGVuZ3RoID4gMCkgP1xuICAgICAgICBjb2xsZWN0aW9uLiRxLndoZW4oY29sbGVjdGlvbi5tb2RlbHMpIDogY29sbGVjdGlvbi4kaHR0cC5nZXQoY29sbGVjdGlvbi51cmwpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb24ubW9kZWxzID0gY29sbGVjdGlvbi5leHRyYWN0KHJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm4gY29sbGVjdGlvbi5tb2RlbHM7XG4gICAgICAgIH0pO1xufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIGtleVxuICogQHBhcmFtIHJlbG9hZCBPcHRpb25hbC4gRGVmYXVsdCBpcyBmYWxzZVxuICogQHBhcmFtIGtleW5hbWVcbiAqIEByZXR1cm5zIHsqfVxuICovXG5CYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUuZ2V0TW9kZWxCeUtleSA9IGZ1bmN0aW9uIChrZXksIHJlbG9hZCwga2V5bmFtZSkge1xuICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcztcbiAgICBpZiAocmVsb2FkID09PSB1bmRlZmluZWQpIHJlbG9hZCA9IGZhbHNlO1xuICAgIGlmIChrZXluYW1lID09PSB1bmRlZmluZWQpIGtleW5hbWUgPSAna2V5JztcblxuICAgIHZhciBkZWZlcnJlZCA9IGNvbGxlY3Rpb24uJHEuZGVmZXIoKTtcblxuICAgIGZ1bmN0aW9uIGZpbmRNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF8uZmluZChjb2xsZWN0aW9uLm1vZGVscywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHJldHVybiBjW2tleW5hbWVdID09IGtleTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoIXJlbG9hZCAmJiBjb2xsZWN0aW9uLm1vZGVscy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUoZmluZE1vZGVsKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbGxlY3Rpb24uZ2V0KHJlbG9hZClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGZpbmRNb2RlbCgpKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIG1vZGVsXG4gKiBAcGFyYW0gcmVsb2FkIE9wdGlvbmFsLiBEZWZhdWx0IGlzIGZhbHNlXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLmdldE1vZGVsID0gZnVuY3Rpb24gKG1vZGVsLCByZWxvYWQpIHtcbiAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgaWYgKHJlbG9hZCA9PT0gdW5kZWZpbmVkKSByZWxvYWQgPSBmYWxzZTtcblxuICAgIHZhciBkZWZlcnJlZCA9IGNvbGxlY3Rpb24uJHEuZGVmZXIoKTtcblxuICAgIGZ1bmN0aW9uIGZpbmRNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF8uZmluZChjb2xsZWN0aW9uLm1vZGVscywgbW9kZWwpXG4gICAgfVxuXG4gICAgaWYgKCFyZWxvYWQgJiYgY29sbGVjdGlvbi5tb2RlbHMubGVuZ3RoID4gMCkge1xuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGZpbmRNb2RlbCgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb2xsZWN0aW9uLmdldChyZWxvYWQpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShmaW5kTW9kZWwoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cblxuLyoqXG4gKiBFeHRlbmRzIEJhc2VDb2xsZWN0aW9uIGNsYXNzIHRvIGRvIGNyZWF0ZSwgdXBkYXRlIGFuZCBkZWxldGUgdXNpbmcgUE9TVCwgUFVUIGFuZCBERUxFVEUgdmVyYnMuXG4gKiBAcGFyYW0gJGh0dHBcbiAqIEBwYXJhbSAkcVxuICogQHBhcmFtIHVybCBVc2VkIGZvciBkb2luZyBIVFRQIEdFVCBhbmQgZmV0Y2ggb2JqZWN0cyBmcm9tIHNlcnZlclxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIENvbGxlY3Rpb24oJGh0dHAsICRxLCB1cmwpIHtcbiAgICBCYXNlQ29sbGVjdGlvbi5jYWxsKHRoaXMsICRodHRwLCAkcSwgdXJsKTtcbn1cblxuQ29sbGVjdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2VDb2xsZWN0aW9uLnByb3RvdHlwZSk7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBtb2RlbFxuICogQHBhcmFtIHVybCBPcHRpb25hbCBpZiBub3QgcGFzc2VkIGl0IGlzIGNvbnN0cnVjdGVkIHVzaW5nIGtleSBhbmQgdXJsIHBhc3NlZCBpbiBjb25zdHJ1Y3RvclxuICogQHJldHVybnMgeyp9XG4gKi9cbkNvbGxlY3Rpb24ucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIChtb2RlbCwgdXJsKSB7XG4gICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzO1xuICAgIHZhciBkZWZlcnJlZCA9IGNvbGxlY3Rpb24uJHEuZGVmZXIoKTtcbiAgICBpZiAodXJsID09PSB1bmRlZmluZWQpIHVybCA9IGNvbGxlY3Rpb24udXJsICsgbW9kZWwua2V5ICsgJy8nO1xuICAgIGNvbGxlY3Rpb24uJGh0dHAucG9zdCh1cmwsIG1vZGVsKVxuICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZURhdGEgPSBjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpO1xuICAgICAgICAgICAgLy9Gb3IgcmVzdCBlbmRwb2ludHMgdGhhdCBkbyBub3QgcmV0dXJuIGNyZWF0ZWQganNvbiBvYmplY3QgaW4gcmVzcG9uc2VcbiAgICAgICAgICAgIGlmICgocmVzcG9uc2VEYXRhID09PSB1bmRlZmluZWQpIHx8IChyZXNwb25zZURhdGEgPT09ICcnKSkge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlRGF0YSA9IG1vZGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9jb2xsZWN0aW9uLm1vZGVscy5wdXNoKGNvbGxlY3Rpb24uZXh0cmFjdChyZXNwb25zZSkpO1xuICAgICAgICAgICAgY29sbGVjdGlvbi5tb2RlbHMucHVzaChyZXNwb25zZURhdGEpO1xuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGNvbGxlY3Rpb24uZXh0cmFjdChyZXNwb25zZSkpO1xuICAgICAgICB9KTtcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbi8qKlxuICogVGhpcyBpcyBmb3IgbmV0bWFzdGVyIHNwZWNpZmljIGVuZHBvaW50cyBhbmQgdXNlZCBieSBuZXRtYXN0ZXIgb2JqZWN0cyBvbmx5LlxuICogVE9ETzogR2VuZXJhbGl6ZVxuICogQHBhcmFtIG1vZGVsXG4gKiBAcGFyYW0gdXJsIE9wdGlvbmFsXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ29sbGVjdGlvbi5wcm90b3R5cGUuc2F2ZSA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcztcbiAgICB2YXIgZGVmZXJyZWQgPSBjb2xsZWN0aW9uLiRxLmRlZmVyKCk7XG4gICAgdmFyIHVybCA9IGNvbGxlY3Rpb24udXJsICsgbW9kZWwua2V5ICsgJy8nO1xuICAgIGNvbGxlY3Rpb24uJGh0dHAucHV0KHVybCwgbW9kZWwpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgXy5yZW1vdmUoY29sbGVjdGlvbi5tb2RlbHMsIGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG4ua2V5ID09IG1vZGVsLmtleTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29sbGVjdGlvbi5tb2RlbHMucHVzaChjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcbiAgICAgICAgfSk7XG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59O1xuXG4vKipcbiAqIFRoaXMgaXMgZm9yIG5ldG1hc3RlciBzcGVjaWZpYyBlbmRwb2ludHMgYW5kIHVzZWQgYnkgbmV0bWFzdGVyIG9iamVjdHMgb25seS5cbiAqIFRPRE86IEdlbmVyYWxpemVcbiAqIEBwYXJhbSBtb2RlbFxuICogQHJldHVybnMgeyp9XG4gKi9cbkNvbGxlY3Rpb24ucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcztcbiAgICB2YXIgZGVmZXJyZWQgPSBjb2xsZWN0aW9uLiRxLmRlZmVyKCk7XG4gICAgdmFyIHVybCA9IGNvbGxlY3Rpb24udXJsICsgbW9kZWwua2V5ICsgJy8nO1xuICAgIGNvbGxlY3Rpb24uJGh0dHAuZGVsZXRlKHVybClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBfLnJlbW92ZShjb2xsZWN0aW9uLm1vZGVscywgZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbi5rZXkgPT0gbW9kZWwua2V5O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGNvbGxlY3Rpb24uZXh0cmFjdChyZXNwb25zZSkpO1xuICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XG4gICAgICAgIH0pO1xuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIGtleVxuICogQHBhcmFtIGtleW5hbWVcbiAqIEBwYXJhbSB1cmwgT3B0aW9uYWwgaWYgbm90IHBhc3NlZCBpdCBpcyBjb25zdHJ1Y3RlZCB1c2luZyBrZXkgYW5kIHVybCBwYXNzZWQgaW4gY29uc3RydWN0b3JcbiAqIEByZXR1cm5zIHsqfVxuICovXG5Db2xsZWN0aW9uLnByb3RvdHlwZS5kZWxldGVVc2luZ0tleSA9IGZ1bmN0aW9uIChrZXksIGtleW5hbWUsIHVybCkge1xuICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcztcbiAgICBpZiAoa2V5bmFtZSA9PT0gdW5kZWZpbmVkKSBrZXluYW1lID0gJ2tleSc7XG5cbiAgICB2YXIgZGVmZXJyZWQgPSBjb2xsZWN0aW9uLiRxLmRlZmVyKCk7XG4gICAgaWYgKHVybCA9PT0gdW5kZWZpbmVkKSB1cmwgPSBjb2xsZWN0aW9uLnVybCArIGtleSArICcvJztcbiAgICBjb2xsZWN0aW9uLiRodHRwLmRlbGV0ZSh1cmwpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgXy5yZW1vdmUoY29sbGVjdGlvbi5tb2RlbHMsIGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ba2V5bmFtZV0gPT0ga2V5O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGNvbGxlY3Rpb24uZXh0cmFjdChyZXNwb25zZSkpO1xuICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XG4gICAgICAgIH0pO1xuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMjIvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubW9kZWxzJylcbiAgICAuZmFjdG9yeSgnTm9kZXNNb2RlbCcsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XG4gICAgICAgIHZhciBub2Rlc21vZGVsID0gbmV3IE5vZGVzQ29sbGVjdGlvbigkaHR0cCwgJHEpO1xuICAgICAgICByZXR1cm4gbm9kZXNtb2RlbDtcbiAgICB9XSk7XG5cbi8qKlxuICogTm9kZXNDb2xsZWN0aW9uIGV4dGVuZHMgZnJvbSBCYXNlQ29sbGVjdGlvbi4gSXQgb3ZlcnJpZGVzIGV4dHJhY3QoKSBhbmQgYWRkcyBjb21taXNzaW9uLCBkZWNvbW1pc3Npb24sIHVwZ3JhZGUgYW5kXG4gKiBkaXNjb3ZlciBtZXRob2RzXG4gKiBAcGFyYW0gJGh0dHBcbiAqIEBwYXJhbSAkcVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIE5vZGVzQ29sbGVjdGlvbigkaHR0cCwgJHEpIHtcbiAgICBCYXNlQ29sbGVjdGlvbi5jYWxsKHRoaXMsICRodHRwLCAkcSwgQ29udGl2R2xvYmFscy5OT0RFU19MSVNUX0VORFBPSU5UKTtcbn1cblxuTm9kZXNDb2xsZWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlKTtcblxuTm9kZXNDb2xsZWN0aW9uLnByb3RvdHlwZS5leHRyYWN0ID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIC8vQ29udmVydCB0byBhcnJheSBpZiB0aGUgcmV0dXJuZWQgY29sbGVjdGlvbiBpcyBub3QgYW4gYXJyYXlcbiAgICByZXR1cm4gXy5tYXAocmVzdWx0LmRhdGEsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIHZhbHVlLmtleSA9IGtleTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0pO1xufTtcblxuXG4vKipcbiAqXG4gKiBAcGFyYW0ga2V5XG4gKiBAcGFyYW0gZXh0cmFWYXJzIEpTT04gb2JqZWN0IG9mIGV4dHJhIGFuc2libGUgYW5kIGVudmlyb25tZW50IHZhcmlhYmxlcyB0byBiZSBwYXNzZWQgd2hpbGUgY29tbWlzc2lvbmluZyBhIG5vZGVcbiAqIHtcbiAgICAgKiBcImVudlwiOntcImh0dHBfcHJveHlcIjpcImh0dHA6Ly9wcm94eS5lc2wuY2lzY28uY29tOjgwODBcIiwgXCJodHRwc19wcm94eVwiOlwiaHR0cDovL3Byb3h5LmVzbC5jaXNjby5jb206ODA4MFwifSxcbiAgICAgKiBcImNvbnRyb2xfaW50ZXJmYWNlXCI6IFwiZXRoMVwiLCBcInNlcnZpY2VfdmlwXCI6IFwiMTkyLjE2OC4yLjI1MlwiLCBcInZhbGlkYXRlX2NlcnRzXCI6IFwiZmFsc2VcIiwgXCJuZXRwbHVnaW5faWZcIiA6IFwiZXRoMlwiXG4gICAgICogfVxuICogQHJldHVybnMgeyp9XG4gKi9cbk5vZGVzQ29sbGVjdGlvbi5wcm90b3R5cGUuY29tbWlzc2lvbiA9IGZ1bmN0aW9uIChub2RlT3BzT2JqKSB7XG4gICAgdmFyIG5vZGVzY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgdmFyIGRlZmVycmVkID0gbm9kZXNjb2xsZWN0aW9uLiRxLmRlZmVyKCk7XG4gICAgdmFyIHVybCA9IENvbnRpdkdsb2JhbHMuTk9ERVNfQ09NTUlTU0lPTl9FTkRQT0lOVDtcbiAgICBub2Rlc2NvbGxlY3Rpb24uJGh0dHAucG9zdCh1cmwsIG5vZGVPcHNPYmosIHtcbiAgICAgICAgICAgICdoZWFkZXJzJzoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAvL1NlcnZlciBkb2Vzbid0IHJldHVybiBhbnkganNvbiBpbiByZXNwb25zZVxuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xuICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbk5vZGVzQ29sbGVjdGlvbi5wcm90b3R5cGUuZGVjb21taXNzaW9uID0gZnVuY3Rpb24gKG5vZGVPcHNPYmopIHtcbiAgICB2YXIgbm9kZXNjb2xsZWN0aW9uID0gdGhpcztcbiAgICB2YXIgZGVmZXJyZWQgPSBub2Rlc2NvbGxlY3Rpb24uJHEuZGVmZXIoKTtcbiAgICB2YXIgdXJsID0gQ29udGl2R2xvYmFscy5OT0RFU19ERUNPTU1JU1NJT05fRU5EUE9JTlQ7XG4gICAgbm9kZXNjb2xsZWN0aW9uLiRodHRwLnBvc3QodXJsLCBub2RlT3BzT2JqLCB7XG4gICAgICAgICAgICAnaGVhZGVycyc6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xuICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbk5vZGVzQ29sbGVjdGlvbi5wcm90b3R5cGUudXBncmFkZSA9IGZ1bmN0aW9uIChub2RlT3BzT2JqKSB7XG4gICAgdmFyIG5vZGVzY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgdmFyIGRlZmVycmVkID0gbm9kZXNjb2xsZWN0aW9uLiRxLmRlZmVyKCk7XG4gICAgdmFyIHVybCA9IENvbnRpdkdsb2JhbHMuTk9ERVNfTUFJTlRFTkFOQ0VfRU5EUE9JTlQ7XG4gICAgbm9kZXNjb2xsZWN0aW9uLiRodHRwLnBvc3QodXJsLCBub2RlT3BzT2JqLCB7XG4gICAgICAgICAgICAnaGVhZGVycyc6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xuICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBpcFxuICogQHBhcmFtIGV4dHJhVmFycyBKU09OIG9iamVjdCBvZiBleHRyYSBhbnNpYmxlIGFuZCBlbnZpcm9ubWVudCB2YXJpYWJsZXMgdG8gYmUgcGFzc2VkIHdoaWxlIGRpc2NvdmVyaW5nIGEgbm9kZVxuICoge1xuICAgICAqIFwiZW52XCI6e1wiaHR0cF9wcm94eVwiOlwiaHR0cDovL3Byb3h5LmVzbC5jaXNjby5jb206ODA4MFwiLCBcImh0dHBzX3Byb3h5XCI6XCJodHRwOi8vcHJveHkuZXNsLmNpc2NvLmNvbTo4MDgwXCJ9LFxuICAgICAqIFwiY29udHJvbF9pbnRlcmZhY2VcIjogXCJldGgxXCIsIFwic2VydmljZV92aXBcIjogXCIxOTIuMTY4LjIuMjUyXCIsIFwiY2x1c3Rlci1uYW1lXCI6IFwiY29udGl2XCIsIFwibm9kZS1sYWJlbFwiIDogXCJub2RlMVwiXG4gICAgICogfVxuICogQHJldHVybnMgeyp9XG4gKi9cbk5vZGVzQ29sbGVjdGlvbi5wcm90b3R5cGUuZGlzY292ZXIgPSBmdW5jdGlvbiAobm9kZU9wc09iaikge1xuICAgIHZhciBub2Rlc2NvbGxlY3Rpb24gPSB0aGlzO1xuICAgIHZhciBkZWZlcnJlZCA9IG5vZGVzY29sbGVjdGlvbi4kcS5kZWZlcigpO1xuICAgIHZhciB1cmwgPSBDb250aXZHbG9iYWxzLk5PREVTX0RJU0NPVkVSX0VORFBPSU5UO1xuICAgIG5vZGVzY29sbGVjdGlvbi4kaHR0cC5wb3N0KHVybCwgbm9kZU9wc09iaiwge1xuICAgICAgICAgICAgJ2hlYWRlcnMnOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59OyIsImFuZ3VsYXIubW9kdWxlKFwiY29udGl2LmRpcmVjdGl2ZXNcIiwgW10pOyIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gMy8xNC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5tb2RlbHMnLCBbXSk7XG52YXIgQ29udGl2R2xvYmFscyA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvL1JFU1QgZW5kcG9pbnRzIGZvciBcbiAgICAgICAgJ05FVFdPUktTX0VORFBPSU5UJzogJy9uZXRtYXN0ZXIvYXBpL3YxL25ldHdvcmtzLycsXG4gICAgICAgICdQT0xJQ0lFU19FTkRQT0lOVCc6ICcvbmV0bWFzdGVyL2FwaS92MS9wb2xpY3lzLycsXG4gICAgICAgICdSVUxFU19FTkRQT0lOVCc6ICcvbmV0bWFzdGVyL2FwaS92MS9ydWxlcy8nLFxuICAgICAgICAnQVBQTElDQVRJT05HUk9VUFNfRU5EUE9JTlQnOiAnL25ldG1hc3Rlci9hcGkvdjEvZW5kcG9pbnRHcm91cHMvJyxcbiAgICAgICAgJ1NFUlZJQ0VMQlNfRU5EUE9JTlQnOiAnL25ldG1hc3Rlci9hcGkvdjEvc2VydmljZUxCcy8nLFxuICAgICAgICAnT1JHQU5JWkFUSU9OU19FTkRQT0lOVCc6Jy9uZXRtYXN0ZXIvYXBpL3YxL3RlbmFudHMvJyxcblxuICAgICAgICAvL1JFU1QgZW5kcG9pbnRzIGZvciBWT0xNQVNURVJcbiAgICAgICAgJ1ZPTFVNRVNfRU5EUE9JTlQnOiAnL3ZvbG1hc3Rlci92b2x1bWVzLycsXG4gICAgICAgICdWT0xVTUVTX0NSRUFURV9FTkRQT0lOVCc6ICcvdm9sbWFzdGVyL3ZvbHVtZXMvY3JlYXRlLycsXG4gICAgICAgICdWT0xVTUVTX0RFTEVURV9FTkRQT0lOVCc6ICcvdm9sbWFzdGVyL3ZvbHVtZXMvcmVtb3ZlLycsXG4gICAgICAgICdWT0xVTUVTX0NPUFlTTkFQU0hPVFNfRU5EUE9JTlQnOiAnL3ZvbG1hc3Rlci92b2x1bWVzL2NvcHkvJyxcbiAgICAgICAgJ1ZPTFVNRVNfVVNFU19FTkRQT0lOVCc6ICcvdm9sbWFzdGVyL3VzZXMvbW91bnRzLycsXG4gICAgICAgICdWT0xVTUVTX1NOQVBTSE9UU19FTkRQT0lOVCc6ICcvdm9sbWFzdGVyL3NuYXBzaG90cy8nLFxuXG4gICAgICAgICdTVE9SQUdFUE9MSUNJRVNfRU5EUE9JTlQnOiAnL3ZvbG1hc3Rlci9wb2xpY2llcy8nLFxuXG5cbiAgICAgICAgLy9SRVNUIGVuZHBvaW50cyBmb3IgQ0xVU1RFUlxuICAgICAgICAnTk9ERVNfTElTVF9FTkRQT0lOVCc6ICcvaW5mby9ub2RlcycsXG4gICAgICAgICdOT0RFU19ESVNDT1ZFUl9FTkRQT0lOVCc6ICcvZGlzY292ZXIvbm9kZXMnLFxuICAgICAgICAnTk9ERVNfQ09NTUlTU0lPTl9FTkRQT0lOVCc6ICcvY29tbWlzc2lvbi9ub2RlcycsXG4gICAgICAgICdOT0RFU19ERUNPTU1JU1NJT05fRU5EUE9JTlQnOiAnL2RlY29tbWlzc2lvbi9ub2RlcycsXG4gICAgICAgICdOT0RFU19NQUlOVEVOQU5DRV9FTkRQT0lOVCc6ICcvbWFpbnRlbmFuY2Uvbm9kZXMnLFxuICAgICAgICAnTk9ERVNfTEFTVF9KT0JfRU5EUE9JTlQnOiAnL2luZm8vam9iL2xhc3QnLFxuICAgICAgICAnTk9ERVNfQUNUSVZFX0pPQl9FTkRQT0lOVCc6ICcvaW5mby9qb2IvYWN0aXZlJyxcblxuICAgICAgICAvL1JlZnJlc2ggaW50ZXJ2YWwgaW4gbWlsbGlzZWNvbmRzXG4gICAgICAgICdSRUZSRVNIX0lOVEVSVkFMJzogNTAwMCxcblxuICAgICAgICAvL1JlZ0V4IGZvciB2YWxpZGF0aW9uXG4gICAgICAgICdDSURSX1JFR0VYJyA6ICdeKChbMC05XXxbMS05XVswLTldfDFbMC05XXsyfXwyWzAtNF1bMC05XXwyNVswLTVdKVxcLil7M30oWzAtOV18WzEtOV1bMC05XXwxWzAtOV17Mn18MlswLTRdWzAtOV18MjVbMC01XSkoXFwvKFswLTldfFsxLTJdWzAtOV18M1swLTJdKSkkJ1xuICAgIH1cbn0pKCk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTgvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYudXRpbHMnLCBbXSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzE4LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LmFwcGxpY2F0aW9uZ3JvdXBzJywgWydjb250aXYubW9kZWxzJywgJ2NvbnRpdi5kaXJlY3RpdmVzJywgJ2NvbnRpdi51dGlscyddKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5hcHBsaWNhdGlvbmdyb3VwcycsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvYXBwbGljYXRpb25ncm91cHMnLFxuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnPGRpdiB1aS12aWV3IGNsYXNzPVwidWkgY29udGFpbmVyXCIvPidcbiAgICAgICAgICAgIH0pXG4gICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzE4LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LmRhc2hib2FyZCcsIFsnY29udGl2Lm1vZGVscyddKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xOS8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5sb2dpbicsIFsnY29udGl2LnV0aWxzJ10pOyIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xOS8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5tZW51JywgW10pOyIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xOC8xNi5cbiAqL1xuXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm5ldHdvcmtwb2xpY2llcycsIFsnY29udGl2Lm1vZGVscycsICdjb250aXYuZGlyZWN0aXZlcycsICdjb250aXYudXRpbHMnXSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzE4LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm5ldHdvcmtzJywgWydjb250aXYubW9kZWxzJywgJ2NvbnRpdi5kaXJlY3RpdmVzJywgJ2NvbnRpdi51dGlscyddKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3MnLCB7XG4gICAgICAgICAgICB1cmw6ICcvbmV0d29ya3MnLFxuICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJzxkaXYgdWktdmlldyBjbGFzcz1cInVpIGNvbnRhaW5lclwiLz4nXG4gICAgICAgIH0pXG4gICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzE4LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm5vZGVzJywgWydjb250aXYubW9kZWxzJywgJ2NvbnRpdi5kaXJlY3RpdmVzJywgJ2NvbnRpdi51dGlscyddKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5ub2RlcycsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvbm9kZXMnLFxuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnPGRpdiB1aS12aWV3IGNsYXNzPVwidWkgY29udGFpbmVyXCIvPidcbiAgICAgICAgICAgIH0pXG4gICAgfV0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5vcmdhbml6YXRpb25zJywgWydjb250aXYubW9kZWxzJywgJ2NvbnRpdi5kaXJlY3RpdmVzJywgJ2NvbnRpdi51dGlscyddKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnY29udGl2Lm1lbnUub3JnYW5pemF0aW9ucycsIHtcbiAgICAgICAgICAgIHVybDogJy9vcmdhbml6YXRpb25zJyxcbiAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IHVpLXZpZXcgY2xhc3M9XCJ1aSBjb250YWluZXJcIi8+J1xuICAgICAgICB9KVxuICAgIH1dKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTgvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuc2VydmljZWxicycsIFsnY29udGl2Lm1vZGVscycsICdjb250aXYuZGlyZWN0aXZlcycsICdjb250aXYudXRpbHMnXSlcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc2VydmljZWxicycsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvc2VydmljZWxicycsXG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IHVpLXZpZXcgY2xhc3M9XCJ1aSBjb250YWluZXJcIi8+J1xuICAgICAgICAgICAgfSlcbiAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTgvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuc3RvcmFnZXBvbGljaWVzJywgWydjb250aXYubW9kZWxzJywgJ2NvbnRpdi5kaXJlY3RpdmVzJywgJ2NvbnRpdi51dGlscyddKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5zdG9yYWdlcG9saWNpZXMnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL3N0b3JhZ2Vwb2xpY2llcycsXG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IHVpLXZpZXcgY2xhc3M9XCJ1aSBjb250YWluZXJcIi8+J1xuICAgICAgICAgICAgfSlcbiAgICB9XSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzE4LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnZvbHVtZXMnLCBbJ2NvbnRpdi5tb2RlbHMnLCAnY29udGl2LmRpcmVjdGl2ZXMnLCAnY29udGl2LnV0aWxzJ10pXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnZvbHVtZXMnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL3ZvbHVtZXMnLFxuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnPGRpdiB1aS12aWV3IGNsYXNzPVwidWkgY29udGFpbmVyXCIvPidcbiAgICAgICAgICAgIH0pXG4gICAgfV0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5cbi8vIERlY2xhcmUgYXBwIGxldmVsIG1vZHVsZSB3aGljaCBkZXBlbmRzIG9uIHZpZXdzLCBhbmQgY29tcG9uZW50c1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdkFwcCcsIFtcbiAgICAgICAgJ3VpLnJvdXRlcicsXG4gICAgICAgICdjb250aXYubG9naW4nLFxuICAgICAgICAnY29udGl2Lm1lbnUnLFxuICAgICAgICAnY29udGl2LmRhc2hib2FyZCcsXG4gICAgICAgICdjb250aXYuYXBwbGljYXRpb25ncm91cHMnLFxuICAgICAgICAnY29udGl2Lm5ldHdvcmtzJyxcbiAgICAgICAgJ2NvbnRpdi5uZXR3b3JrcG9saWNpZXMnLFxuICAgICAgICAnY29udGl2LnN0b3JhZ2Vwb2xpY2llcycsXG4gICAgICAgICdjb250aXYuc2VydmljZWxicycsXG4gICAgICAgICdjb250aXYudm9sdW1lcycsXG4gICAgICAgICdjb250aXYubm9kZXMnLFxuICAgICAgICAnY29udGl2Lm9yZ2FuaXphdGlvbnMnXG4gICAgXSlcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCAnJHVybFJvdXRlclByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgLy9hYnN0cmFjdCBzdGF0ZSBzZXJ2ZXMgYXMgYSBQTEFDRUhPTERFUiBvciBOQU1FU1BBQ0UgZm9yIGFwcGxpY2F0aW9uIHN0YXRlc1xuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJzxkaXYgdWktdmlldyBjbGFzcz1cInVpIGZsdWlkIGNvbnRhaW5lclwiLz4nXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG5cbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gMy8xMS8xNi5cbiAqL1xuLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzEwLzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LmFwcGxpY2F0aW9uZ3JvdXBzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuYXBwbGljYXRpb25ncm91cHMuY3JlYXRlJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9jcmVhdGUnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybCBhcyBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHBsaWNhdGlvbmdyb3Vwcy9hcHBsaWNhdGlvbmdyb3VwY3JlYXRlLmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ0FwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsJywgW1xuICAgICAgICAnJHN0YXRlJyxcbiAgICAgICAgJ0FwcGxpY2F0aW9uR3JvdXBzTW9kZWwnLFxuICAgICAgICAnTmV0d29ya3NNb2RlbCcsXG4gICAgICAgICdQb2xpY2llc01vZGVsJyxcbiAgICAgICAgJ1J1bGVzTW9kZWwnLFxuICAgICAgICAnQXBwbGljYXRpb25Hcm91cFNlcnZpY2UnLFxuICAgICAgICAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLFxuICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cHNNb2RlbCxcbiAgICAgICAgICAgICAgICAgIE5ldHdvcmtzTW9kZWwsXG4gICAgICAgICAgICAgICAgICBQb2xpY2llc01vZGVsLFxuICAgICAgICAgICAgICAgICAgUnVsZXNNb2RlbCxcbiAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uR3JvdXBTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybCA9IHRoaXM7XG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5uZXR3b3JrcyA9IFtdO1xuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuaXNvbGF0aW9uUG9saWNpZXMgPSBbXTtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLmFwcGxpY2F0aW9uR3JvdXAgPSB7fTtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLnNlbGVjdGVkTmV0d29yayA9IHt9O1xuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuc2VsZWN0ZWRQb2xpY3kgPSB7fTtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLnNlbGVjdGVkUG9saWNpZXMgPSBbXTtcblxuICAgICAgICAgICAgLy9UbyBkaXNwbGF5IGluY29taW5nIGFuZCBvdXRnb2luZyBydWxlcyBmb3Igc2VsZWN0ZWQgcG9saWNpZXNcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLmluY29taW5nUnVsZXMgPSBbXTtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLm91dGdvaW5nUnVsZXMgPSBbXTtcblxuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuaXNvbGF0aW9uUG9saWNpZXNWaXNpYmxlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvQXBwbGljYXRpb25Hcm91cCgpIHtcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51LmFwcGxpY2F0aW9uZ3JvdXBzLmxpc3QnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY2FuY2VsQ3JlYXRpbmcoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVG9BcHBsaWNhdGlvbkdyb3VwKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IG5ldHdvcmtzIGZvciB0aGUgZ2l2ZW4gdGVuYW50LlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXROZXR3b3JrcygpIHtcbiAgICAgICAgICAgICAgICBOZXR3b3Jrc01vZGVsLmdldCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5uZXR3b3JrcyA9IF8uZmlsdGVyKHJlc3VsdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3RlbmFudE5hbWUnOiAnZGVmYXVsdCcvL1RPRE86IFJlbW92ZSBoYXJkY29kZWQgdGVuYW50LlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXQgcG9saWNpZXMgZm9yIHRoZSBnaXZlbiB0ZW5hbnQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldElzb2xhdGlvblBvbGljaWVzKCkge1xuICAgICAgICAgICAgICAgIFBvbGljaWVzTW9kZWwuZ2V0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLmlzb2xhdGlvblBvbGljaWVzID0gXy5maWx0ZXIocmVzdWx0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAndGVuYW50TmFtZSc6ICdkZWZhdWx0Jy8vVE9ETzogUmVtb3ZlIGhhcmRjb2RlZCB0ZW5hbnQuXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEFkZCBwb2xpY3kgdG8gbmV3IGFwcGxpY2F0aW9uIGdyb3VwXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGFkZElzb2xhdGlvblBvbGljeSgpIHtcbiAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbkdyb3VwU2VydmljZS5hZGRJc29sYXRpb25Qb2xpY3koYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJlbW92ZSBwb2xpY3kgZnJvbSBuZXcgYXBwbGljYXRpb24gZ3JvdXBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gcmVtb3ZlSXNvbGF0aW9uUG9saWN5KHBvbGljeU5hbWUpIHtcbiAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbkdyb3VwU2VydmljZS5yZW1vdmVJc29sYXRpb25Qb2xpY3koYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwsIHBvbGljeU5hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVBcHBsaWNhdGlvbkdyb3VwKCkge1xuICAgICAgICAgICAgICAgIC8vZm9ybSBjb250cm9sbGVyIGlzIGluamVjdGVkIGJ5IHRoZSBodG1sIHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgLy9jaGVja2luZyBpZiBhbGwgdmFsaWRhdGlvbnMgaGF2ZSBwYXNzZWRcbiAgICAgICAgICAgICAgICBpZiAoYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuZm9ybS4kdmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIoYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5hcHBsaWNhdGlvbkdyb3VwLm5ldHdvcmtOYW1lID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLnNlbGVjdGVkTmV0d29yay5uZXR3b3JrTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuYXBwbGljYXRpb25Hcm91cC5rZXkgPVxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cHNNb2RlbC5nZW5lcmF0ZUtleShhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5hcHBsaWNhdGlvbkdyb3VwKTtcblxuICAgICAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbkdyb3Vwc01vZGVsLmNyZWF0ZShhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5hcHBsaWNhdGlvbkdyb3VwKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvQXBwbGljYXRpb25Hcm91cCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IoYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLmFwcGxpY2F0aW9uR3JvdXAgPSB7XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwTmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIG5ldHdvcmtOYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcG9saWNpZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICB0ZW5hbnROYW1lOiAnZGVmYXVsdCcvL1RPRE86IFJlbW92ZSBoYXJkY29kZWQgdGVuYW50LlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGdldE5ldHdvcmtzKCk7XG4gICAgICAgICAgICBnZXRJc29sYXRpb25Qb2xpY2llcygpO1xuXG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5jcmVhdGVBcHBsaWNhdGlvbkdyb3VwID0gY3JlYXRlQXBwbGljYXRpb25Hcm91cDtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLmNhbmNlbENyZWF0aW5nID0gY2FuY2VsQ3JlYXRpbmc7XG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5hZGRJc29sYXRpb25Qb2xpY3kgPSBhZGRJc29sYXRpb25Qb2xpY3k7XG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5yZW1vdmVJc29sYXRpb25Qb2xpY3kgPSByZW1vdmVJc29sYXRpb25Qb2xpY3k7XG5cbiAgICAgICAgICAgIHJlc2V0Rm9ybSgpO1xuICAgICAgICB9XSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzE1LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LmFwcGxpY2F0aW9uZ3JvdXBzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuYXBwbGljYXRpb25ncm91cHMuZGV0YWlscycsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZGV0YWlscy86a2V5JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnQXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsIGFzIGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHBsaWNhdGlvbmdyb3Vwcy9hcHBsaWNhdGlvbmdyb3VwZGV0YWlscy5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuYXBwbGljYXRpb25ncm91cHMuZWRpdCcsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZWRpdC86a2V5JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnQXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsIGFzIGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHBsaWNhdGlvbmdyb3Vwcy9hcHBsaWNhdGlvbmdyb3VwZGV0YWlscy5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdBcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwnLCBbXG4gICAgICAgICckc3RhdGUnLFxuICAgICAgICAnJHN0YXRlUGFyYW1zJyxcbiAgICAgICAgJ0FwcGxpY2F0aW9uR3JvdXBzTW9kZWwnLFxuICAgICAgICAnUG9saWNpZXNNb2RlbCcsXG4gICAgICAgICdSdWxlc01vZGVsJyxcbiAgICAgICAgJ0FwcGxpY2F0aW9uR3JvdXBTZXJ2aWNlJyxcbiAgICAgICAgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSxcbiAgICAgICAgICAgICAgICAgICRzdGF0ZVBhcmFtcyxcbiAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uR3JvdXBzTW9kZWwsXG4gICAgICAgICAgICAgICAgICBQb2xpY2llc01vZGVsLFxuICAgICAgICAgICAgICAgICAgUnVsZXNNb2RlbCxcbiAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uR3JvdXBTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwgPSB0aGlzO1xuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmlzb2xhdGlvblBvbGljaWVzID0gW107XG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuYXBwbGljYXRpb25Hcm91cCA9IHt9O1xuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLnNlbGVjdGVkTmV0d29yayA9IHt9O1xuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLnNlbGVjdGVkUG9saWN5ID0ge307XG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuc2VsZWN0ZWRQb2xpY2llcyA9IFtdO1xuXG4gICAgICAgICAgICAvL1RvIGRpc3BsYXkgaW5jb21pbmcgYW5kIG91dGdvaW5nIHJ1bGVzIGZvciBzZWxlY3RlZCBwb2xpY2llc1xuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmluY29taW5nUnVsZXMgPSBbXTtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5vdXRnb2luZ1J1bGVzID0gW107XG5cblxuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmlzb2xhdGlvblBvbGljaWVzVmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRvIHNob3cgZWRpdCBvciBkZXRhaWxzIHNjcmVlbiBiYXNlZCBvbiB0aGUgcm91dGVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gc2V0TW9kZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAoJHN0YXRlLmlzKCdjb250aXYubWVudS5hcHBsaWNhdGlvbmdyb3Vwcy5lZGl0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLm1vZGUgPSAnZWRpdCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLm1vZGUgPSAnZGV0YWlscyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub0FwcGxpY2F0aW9uR3JvdXAoKSB7XG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5hcHBsaWNhdGlvbmdyb3Vwcy5saXN0Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvQXBwbGljYXRpb25Hcm91cERldGFpbHMoKSB7XG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5hcHBsaWNhdGlvbmdyb3Vwcy5kZXRhaWxzJywgeydrZXknOiBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuYXBwbGljYXRpb25Hcm91cC5rZXl9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY2FuY2VsRWRpdGluZygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5Ub0FwcGxpY2F0aW9uR3JvdXBEZXRhaWxzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFJ1bGVzKCkge1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5hcHBsaWNhdGlvbkdyb3VwLnBvbGljaWVzLmZvckVhY2goZnVuY3Rpb24gKHBvbGljeSkge1xuICAgICAgICAgICAgICAgICAgICAvL1RvIGRpc3BsYXkgcnVsZXMgb2Ygc2VsZWN0ZWQgcG9saWNpZXNcbiAgICAgICAgICAgICAgICAgICAgUnVsZXNNb2RlbC5nZXRJbmNvbWluZ1J1bGVzKHBvbGljeSwgJ2RlZmF1bHQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJ1bGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmluY29taW5nUnVsZXMsIHJ1bGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBSdWxlc01vZGVsLmdldE91dGdvaW5nUnVsZXMocG9saWN5LCAnZGVmYXVsdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocnVsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwub3V0Z29pbmdSdWxlcywgcnVsZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gZGVsZXRlQXBwbGljYXRpb25Hcm91cCgpIHtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IoYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uR3JvdXBzTW9kZWwuZGVsZXRlKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5hcHBsaWNhdGlvbkdyb3VwKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub0FwcGxpY2F0aW9uR3JvdXAoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdldCBwb2xpY2llcyBmb3IgdGhlIGdpdmVuIHRlbmFudC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0SXNvbGF0aW9uUG9saWNpZXMoKSB7XG4gICAgICAgICAgICAgICAgUG9saWNpZXNNb2RlbC5nZXQoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmlzb2xhdGlvblBvbGljaWVzID0gXy5maWx0ZXIocmVzdWx0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAndGVuYW50TmFtZSc6ICdkZWZhdWx0Jy8vVE9ETzogUmVtb3ZlIGhhcmRjb2RlZCB0ZW5hbnQuXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQWRkIHBvbGljeSB0byBhcHBsaWNhdGlvbiBncm91cFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBhZGRJc29sYXRpb25Qb2xpY3koKSB7XG4gICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cFNlcnZpY2UuYWRkSXNvbGF0aW9uUG9saWN5KGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmVtb3ZlIHBvbGljeSBmcm9tIGFwcGxpY2F0aW9uIGdyb3VwXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlbW92ZUlzb2xhdGlvblBvbGljeShwb2xpY3lOYW1lKSB7XG4gICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cFNlcnZpY2UucmVtb3ZlSXNvbGF0aW9uUG9saWN5KGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCwgcG9saWN5TmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHNhdmVBcHBsaWNhdGlvbkdyb3VwKCkge1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cHNNb2RlbC5zYXZlKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5hcHBsaWNhdGlvbkdyb3VwKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub0FwcGxpY2F0aW9uR3JvdXBEZXRhaWxzKCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IoYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsKTtcblxuICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cHNNb2RlbC5nZXRNb2RlbEJ5S2V5KCRzdGF0ZVBhcmFtcy5rZXkpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5hcHBsaWNhdGlvbkdyb3VwID0gZ3JvdXA7XG4gICAgICAgICAgICAgICAgICAgIC8vQXBwbGljYXRpb24gR3JvdXBzIG1pZ2h0IG5vdCBoYXZlIGFueSBwb2xpY2llcyBhc3NvY2lhdGVkIHdpdGggdGhlbSBzbyBkZWZpbmUgYW4gZW1wdHkgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5hcHBsaWNhdGlvbkdyb3VwLnBvbGljaWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5hcHBsaWNhdGlvbkdyb3VwLnBvbGljaWVzID0gW107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZ2V0UnVsZXMoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZ2V0SXNvbGF0aW9uUG9saWNpZXMoKTtcblxuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLnNhdmVBcHBsaWNhdGlvbkdyb3VwID0gc2F2ZUFwcGxpY2F0aW9uR3JvdXA7XG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuY2FuY2VsRWRpdGluZyA9IGNhbmNlbEVkaXRpbmc7XG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuYWRkSXNvbGF0aW9uUG9saWN5ID0gYWRkSXNvbGF0aW9uUG9saWN5O1xuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLnJlbW92ZUlzb2xhdGlvblBvbGljeSA9IHJlbW92ZUlzb2xhdGlvblBvbGljeTtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5kZWxldGVBcHBsaWNhdGlvbkdyb3VwID0gZGVsZXRlQXBwbGljYXRpb25Hcm91cDtcblxuICAgICAgICAgICAgc2V0TW9kZSgpO1xuXG4gICAgICAgIH1dKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMTEvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuYXBwbGljYXRpb25ncm91cHMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5hcHBsaWNhdGlvbmdyb3Vwcy5saXN0Jywge1xuICAgICAgICAgICAgICAgIHVybDogJy9saXN0JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnQXBwbGljYXRpb25Hcm91cExpc3RDdHJsIGFzIGFwcGxpY2F0aW9uR3JvdXBMaXN0Q3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHBsaWNhdGlvbmdyb3Vwcy9hcHBsaWNhdGlvbmdyb3VwbGlzdC5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdBcHBsaWNhdGlvbkdyb3VwTGlzdEN0cmwnLFxuICAgICAgICBbJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJGZpbHRlcicsICdBcHBsaWNhdGlvbkdyb3Vwc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICRpbnRlcnZhbCwgJGZpbHRlciwgQXBwbGljYXRpb25Hcm91cHNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXBwbGljYXRpb25Hcm91cExpc3RDdHJsID0gdGhpcztcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldEFwcGxpY2F0aW9uR3JvdXBzKHJlbG9hZCkge1xuICAgICAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbkdyb3Vwc01vZGVsLmdldChyZWxvYWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihhcHBsaWNhdGlvbkdyb3VwTGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBMaXN0Q3RybC5ncm91cHMgPSAkZmlsdGVyKCdvcmRlckJ5JykocmVzdWx0LCAnZ3JvdXBOYW1lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoYXBwbGljYXRpb25Hcm91cExpc3RDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vTG9hZCBmcm9tIGNhY2hlIGZvciBxdWljayBkaXNwbGF5IGluaXRpYWxseVxuICAgICAgICAgICAgICAgIGdldEFwcGxpY2F0aW9uR3JvdXBzKGZhbHNlKTtcblxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICAgICAgICAgIC8vRG9uJ3Qgc3RhcnQgYXV0by1yZWZyZXNoIGlmIG9uZSBpcyBhbHJlYWR5IGluIHByb2dyZXNzXG4gICAgICAgICAgICAgICAgaWYgKCFhbmd1bGFyLmlzRGVmaW5lZChwcm9taXNlKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldEFwcGxpY2F0aW9uR3JvdXBzKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9zdG9wIHBvbGxpbmcgd2hlbiB1c2VyIG1vdmVzIGF3YXkgZnJvbSB0aGUgcGFnZVxuICAgICAgICAgICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHByb21pc2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzE2LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LmFwcGxpY2F0aW9uZ3JvdXBzJylcbiAgICAuZmFjdG9yeSgnQXBwbGljYXRpb25Hcm91cFNlcnZpY2UnLCBbJ1J1bGVzTW9kZWwnLCBmdW5jdGlvbiAoUnVsZXNNb2RlbCkge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgcG9saWN5IHRvIGFwcGxpY2F0aW9uIGdyb3VwXG4gICAgICAgICAqIEBwYXJhbSBhcHBsaWNhdGlvbkdyb3VwQ3RybCBDb250cm9sbGVyIGZvciBhcHBsaWNhdGlvbiBncm91cCBlZGl0IG9yIGNyZWF0ZSBvcGVyYXRpb25cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGFkZElzb2xhdGlvblBvbGljeShhcHBsaWNhdGlvbkdyb3VwQ3RybCkge1xuICAgICAgICAgICAgaWYgKF8uZmluZChhcHBsaWNhdGlvbkdyb3VwQ3RybC5zZWxlY3RlZFBvbGljaWVzLCBhcHBsaWNhdGlvbkdyb3VwQ3RybC5zZWxlY3RlZFBvbGljeSkgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICAvL1RvIGRpc3BsYXkgc2VsZWN0ZWQgcG9saWNpZXNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3RybC5zZWxlY3RlZFBvbGljaWVzLnB1c2goYXBwbGljYXRpb25Hcm91cEN0cmwuc2VsZWN0ZWRQb2xpY3kpO1xuXG4gICAgICAgICAgICAgICAgLy9UbyBkaXNwbGF5IHJ1bGVzIG9mIHNlbGVjdGVkIHBvbGljaWVzXG4gICAgICAgICAgICAgICAgUnVsZXNNb2RlbC5nZXRJbmNvbWluZ1J1bGVzKGFwcGxpY2F0aW9uR3JvdXBDdHJsLnNlbGVjdGVkUG9saWN5LnBvbGljeU5hbWUsICdkZWZhdWx0JylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJ1bGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcHBsaWNhdGlvbkdyb3VwQ3RybC5pbmNvbWluZ1J1bGVzLCBydWxlcyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFJ1bGVzTW9kZWwuZ2V0T3V0Z29pbmdSdWxlcyhhcHBsaWNhdGlvbkdyb3VwQ3RybC5zZWxlY3RlZFBvbGljeS5wb2xpY3lOYW1lLCAnZGVmYXVsdCcpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChydWxlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXBwbGljYXRpb25Hcm91cEN0cmwub3V0Z29pbmdSdWxlcywgcnVsZXMpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vVG8gYmUgYWRkZWQgdG8gYXBwbGljYXRpb24gZ3JvdXAgYW5kIHNhdmVkIHRvIHRoZSBzZXJ2ZXJcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3RybC5hcHBsaWNhdGlvbkdyb3VwLnBvbGljaWVzXG4gICAgICAgICAgICAgICAgICAgIC5wdXNoKGFwcGxpY2F0aW9uR3JvdXBDdHJsLnNlbGVjdGVkUG9saWN5LnBvbGljeU5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSBwb2xpY3kgZnJvbSBhcHBsaWNhdGlvbiBncm91cFxuICAgICAgICAgKiBAcGFyYW0gYXBwbGljYXRpb25Hcm91cEN0cmwgQ29udHJvbGxlciBmb3IgYXBwbGljYXRpb24gZ3JvdXAgZWRpdCBvciBjcmVhdGUgb3BlcmF0aW9uXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiByZW1vdmVJc29sYXRpb25Qb2xpY3koYXBwbGljYXRpb25Hcm91cEN0cmwsIHBvbGljeU5hbWUpIHtcbiAgICAgICAgICAgIF8ucmVtb3ZlKGFwcGxpY2F0aW9uR3JvdXBDdHJsLmFwcGxpY2F0aW9uR3JvdXAucG9saWNpZXMsIGZ1bmN0aW9uIChwb2xpY3kpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9saWN5ID09IHBvbGljeU5hbWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIF8ucmVtb3ZlKGFwcGxpY2F0aW9uR3JvdXBDdHJsLmluY29taW5nUnVsZXMsIGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJ1bGUucG9saWN5TmFtZSA9PSBwb2xpY3lOYW1lO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBfLnJlbW92ZShhcHBsaWNhdGlvbkdyb3VwQ3RybC5vdXRnb2luZ1J1bGVzLCBmdW5jdGlvbiAocnVsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBydWxlLnBvbGljeU5hbWUgPT0gcG9saWN5TmFtZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZElzb2xhdGlvblBvbGljeTogYWRkSXNvbGF0aW9uUG9saWN5LFxuICAgICAgICAgICAgcmVtb3ZlSXNvbGF0aW9uUG9saWN5OiByZW1vdmVJc29sYXRpb25Qb2xpY3lcbiAgICAgICAgfVxuXG4gICAgfV0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gMy8xMS8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5kYXNoYm9hcmQnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5kYXNoYm9hcmQnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2Rhc2hib2FyZCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0Rhc2hib2FyZEN0cmwgYXMgZGFzaGJvYXJkQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdkYXNoYm9hcmQvZGFzaGJvYXJkLmh0bWwnXG4gICAgICAgICAgICB9KTtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignRGFzaGJvYXJkQ3RybCcsXG4gICAgICAgIFtcbiAgICAgICAgICAgICckc2NvcGUnLFxuICAgICAgICAgICAgJyRpbnRlcnZhbCcsXG4gICAgICAgICAgICAnTm9kZXNNb2RlbCcsXG4gICAgICAgICAgICAnTmV0d29ya3NNb2RlbCcsXG4gICAgICAgICAgICAnVm9sdW1lc01vZGVsJyxcbiAgICAgICAgICAgICdBcHBsaWNhdGlvbkdyb3Vwc01vZGVsJyxcbiAgICAgICAgICAgICdQb2xpY2llc01vZGVsJyxcbiAgICAgICAgICAgICdTdG9yYWdlUG9saWNpZXNNb2RlbCcsXG4gICAgICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLFxuICAgICAgICAgICAgICAgICAgICAgICRpbnRlcnZhbCxcbiAgICAgICAgICAgICAgICAgICAgICBOb2Rlc01vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgIE5ldHdvcmtzTW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgVm9sdW1lc01vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uR3JvdXBzTW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgUG9saWNpZXNNb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICBTdG9yYWdlUG9saWNpZXNNb2RlbCkge1xuICAgICAgICAgICAgICAgIHZhciBkYXNoYm9hcmRDdHJsID0gdGhpcztcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldERhc2hib2FyZEluZm8ocmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgIE5vZGVzTW9kZWwuZ2V0KHJlbG9hZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXNoYm9hcmRDdHJsLm5vZGVzID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBOZXR3b3Jrc01vZGVsLmdldChyZWxvYWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFzaGJvYXJkQ3RybC5uZXR3b3JrcyA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgVm9sdW1lc01vZGVsLmdldChyZWxvYWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFzaGJvYXJkQ3RybC52b2x1bWVzID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbkdyb3Vwc01vZGVsLmdldChyZWxvYWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFzaGJvYXJkQ3RybC5ncm91cHMgPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFBvbGljaWVzTW9kZWwuZ2V0KHJlbG9hZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXNoYm9hcmRDdHJsLm5ldHdvcmtwb2xpY2llcyA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgU3RvcmFnZVBvbGljaWVzTW9kZWwuZ2V0KHJlbG9hZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXNoYm9hcmRDdHJsLnN0b3JhZ2Vwb2xpY2llcyA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL1dpbGwgZGlzcGxheSAwIGlmIHRoZXJlIGlzIGVycm9yIGZldGNoaW5nIGRhdGFcbiAgICAgICAgICAgICAgICBkYXNoYm9hcmRDdHJsLm5vZGVzID0gMDtcbiAgICAgICAgICAgICAgICBkYXNoYm9hcmRDdHJsLm5ldHdvcmtzID0gMDtcbiAgICAgICAgICAgICAgICBkYXNoYm9hcmRDdHJsLnZvbHVtZXMgPSAwO1xuICAgICAgICAgICAgICAgIGRhc2hib2FyZEN0cmwuZ3JvdXBzID0gMDtcbiAgICAgICAgICAgICAgICBkYXNoYm9hcmRDdHJsLm5ldHdvcmtwb2xpY2llcyA9IDA7XG4gICAgICAgICAgICAgICAgZGFzaGJvYXJkQ3RybC5zdG9yYWdlcG9saWNpZXMgPSAwO1xuXG4gICAgICAgICAgICAgICAgLy9Mb2FkIGZyb20gY2FjaGUgZm9yIHF1aWNrIGRpc3BsYXkgaW5pdGlhbGx5XG4gICAgICAgICAgICAgICAgZ2V0RGFzaGJvYXJkSW5mbyhmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9ICRpbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGdldERhc2hib2FyZEluZm8odHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSwgNTAwMCk7XG5cbiAgICAgICAgICAgICAgICAvL3N0b3AgcG9sbGluZyB3aGVuIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgJHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICRpbnRlcnZhbC5jYW5jZWwocHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTkvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubG9naW4nKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubG9naW4nLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnLycsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdsb2dpbi9sb2dpbi5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTG9naW5DdHJsIGFzIGxvZ2luQ3RybCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignTG9naW5DdHJsJywgWyckc3RhdGUnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIGxvZ2luQ3RybCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvRGFzaGJvYXJkKCkge1xuICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUuZGFzaGJvYXJkJywge3VzZXJuYW1lOiBsb2dpbkN0cmwudXNlcm5hbWV9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gbG9naW4oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVG9EYXNoYm9hcmQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihsb2dpbkN0cmwpO1xuICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKGxvZ2luQ3RybCk7XG4gICAgICAgICAgICBsb2dpbkN0cmwubG9naW4gPSBsb2dpbjtcblxuICAgICAgICB9XSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzE5LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm1lbnUnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudScsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvbScsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtZW51L21lbnUuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ01lbnVDdHJsIGFzIG1lbnVDdHJsJyxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHt1c2VybmFtZTogbnVsbH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignTWVudUN0cmwnLCBbJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgdmFyIG1lbnVDdHJsID0gdGhpcztcblxuICAgICAgICBmdW5jdGlvbiBsb2dvdXQoKSB7XG4gICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5sb2dpbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVudUN0cmwudXNlcm5hbWUgPSAkc3RhdGVQYXJhbXMudXNlcm5hbWU7XG4gICAgICAgIG1lbnVDdHJsLmxvZ291dCA9IGxvZ291dDtcblxuICAgIH1dKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMTAvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubmV0d29ya3BvbGljaWVzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzLmlzb2xhdGlvbi5jcmVhdGUnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2NyZWF0ZScsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0lzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwgYXMgaXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICduZXR3b3JrX3BvbGljaWVzL2lzb2xhdGlvbnBvbGljeWNyZWF0ZS5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdJc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsJywgWyckc3RhdGUnLCAnUG9saWNpZXNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsXG4gICAgICAgIGZ1bmN0aW9uICgkc3RhdGUsIFBvbGljaWVzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgIHZhciBpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsID0gdGhpcztcblxuICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub1BvbGljaWVzKCkge1xuICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMuaXNvbGF0aW9uLmxpc3QnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNhbmNlbENyZWF0aW5nKCkge1xuICAgICAgICAgICAgcmV0dXJuVG9Qb2xpY2llcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUG9saWN5KCkge1xuICAgICAgICAgICAgaWYgKGlzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwuZm9ybS4kdmFsaWQpIHtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IoaXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIoaXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybC5uZXdQb2xpY3kua2V5ID1cbiAgICAgICAgICAgICAgICAgICAgUG9saWNpZXNNb2RlbC5nZW5lcmF0ZUtleShpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsLm5ld1BvbGljeSk7XG4gICAgICAgICAgICAgICAgUG9saWNpZXNNb2RlbC5jcmVhdGUoaXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybC5uZXdQb2xpY3kpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGlzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub1BvbGljaWVzKCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGlzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGlzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKGlzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybC5uZXdQb2xpY3kgPSB7XG4gICAgICAgICAgICAgICAgcG9saWN5TmFtZTogJycsXG4gICAgICAgICAgICAgICAgdGVuYW50TmFtZTogJ2RlZmF1bHQnLy9UT0RPOiBSZW1vdmUgaGFyZGNvZGVkIHRlbmFudC5cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsLmNyZWF0ZVBvbGljeSA9IGNyZWF0ZVBvbGljeTtcbiAgICAgICAgaXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybC5jYW5jZWxDcmVhdGluZyA9IGNhbmNlbENyZWF0aW5nO1xuXG4gICAgICAgIHJlc2V0Rm9ybSgpO1xuICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gMy84LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm5ldHdvcmtwb2xpY2llcycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5ldHdvcmtwb2xpY2llcy5pc29sYXRpb24uZGV0YWlscycsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZGV0YWlscy86a2V5JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwgYXMgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbmV0d29ya19wb2xpY2llcy9pc29sYXRpb25wb2xpY3lkZXRhaWxzLmh0bWwnXG4gICAgICAgICAgICB9KTtcbiAgICB9XSlcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzLmlzb2xhdGlvbi5lZGl0Jywge1xuICAgICAgICAgICAgICAgIHVybDogJy9lZGl0LzprZXknLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdJc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCBhcyBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICduZXR3b3JrX3BvbGljaWVzL2lzb2xhdGlvbnBvbGljeWRldGFpbHMuaHRtbCdcbiAgICAgICAgICAgIH0pO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdJc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCcsIFtcbiAgICAgICAgJyRzdGF0ZScsXG4gICAgICAgICckc3RhdGVQYXJhbXMnLFxuICAgICAgICAnUG9saWNpZXNNb2RlbCcsXG4gICAgICAgICdSdWxlc01vZGVsJyxcbiAgICAgICAgJ05ldHdvcmtzTW9kZWwnLFxuICAgICAgICAnQXBwbGljYXRpb25Hcm91cHNNb2RlbCcsXG4gICAgICAgICdDUlVESGVscGVyU2VydmljZScsXG4gICAgICAgIGZ1bmN0aW9uICgkc3RhdGUsICRzdGF0ZVBhcmFtcywgUG9saWNpZXNNb2RlbCwgUnVsZXNNb2RlbCwgTmV0d29ya3NNb2RlbCwgQXBwbGljYXRpb25Hcm91cHNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCA9IHRoaXM7XG4gICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXR3b3JrcyA9IFtdO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuYXBwbGljYXRpb25Hcm91cHMgPSBbXTtcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRpc2FibGVPdXRnb2luZ05ldHdvcmtTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRpc2FibGVJbmNvbWluZ05ldHdvcmtTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRpc2FibGVPdXRnb2luZ0FwcGxpY2F0aW9uR3JvdXBTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRpc2FibGVJbmNvbWluZ0FwcGxpY2F0aW9uR3JvdXBTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld0luY29taW5nU2VsZWN0ZWRBcHBsaWNhdGlvbkdyb3VwID0gJyc7XG4gICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdPdXRnb2luZ1NlbGVjdGVkQXBwbGljYXRpb25Hcm91cCA9ICcnO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub1BvbGljaWVzKCkge1xuICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzLmlzb2xhdGlvbi5saXN0Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvUG9saWN5RGV0YWlscygpIHtcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51Lm5ldHdvcmtwb2xpY2llcy5pc29sYXRpb24uZGV0YWlscycsIHtrZXk6IGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLnBvbGljeS5rZXl9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY2FuY2VsRWRpdGluZygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5Ub1BvbGljeURldGFpbHMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHbyBiYWNrIHRvIHBvbGljeSBkZXRhaWxzIGFmdGVyIGRvbmUgZWRpdGluZ1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBkb25lRWRpdGluZygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5Ub1BvbGljeURldGFpbHMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gZGVsZXRlUG9saWN5KCkge1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgIFBvbGljaWVzTW9kZWwuZGVsZXRlKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLnBvbGljeSkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub1BvbGljaWVzKCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUbyBzaG93IGVkaXQgb3IgZGV0YWlscyBzY3JlZW4gYmFzZWQgb24gdGhlIHJvdXRlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldE1vZGUoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCRzdGF0ZS5pcygnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzLmlzb2xhdGlvbi5lZGl0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubW9kZSA9ICdlZGl0JztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5tb2RlID0gJ2RldGFpbHMnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcmVzZXROZXdJbmNvbWluZ1J1bGUoKSB7XG4gICAgICAgICAgICAgICAgLy9SdWxlIG9iamVjdCB0byBiZSBjcmVhdGVkIG9uIHNlcnZlclxuICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld0luY29taW5nUnVsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgcnVsZUlkOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IDEsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ2FsbG93JywvL3RvIG1ha2UgaXQgZGVmYXVsdCBzZWxlY3RlZCBvcHRpb24gaW4gVUlcbiAgICAgICAgICAgICAgICAgICAgZnJvbUVuZHBvaW50R3JvdXA6ICcnLFxuICAgICAgICAgICAgICAgICAgICBmcm9tTmV0d29yazogJycsXG4gICAgICAgICAgICAgICAgICAgIGZyb21JUEFkZHJlc3M6ICcnLFxuICAgICAgICAgICAgICAgICAgICBwcm90b2NvbDogJ3RjcCcsLy90byBtYWtlIGl0IGRlZmF1bHQgc2VsZWN0ZWQgb3B0aW9uIGluIFVJXG4gICAgICAgICAgICAgICAgICAgIHBvcnQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdpbicsXG4gICAgICAgICAgICAgICAgICAgIHRlbmFudE5hbWU6ICdkZWZhdWx0JyxcbiAgICAgICAgICAgICAgICAgICAgcG9saWN5TmFtZTogaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwucG9saWN5LnBvbGljeU5hbWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld0luY29taW5nU2VsZWN0ZWRBcHBsaWNhdGlvbkdyb3VwID0gJyc7XG4gICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZUluY29taW5nTmV0d29ya1NlbGVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRpc2FibGVJbmNvbWluZ0FwcGxpY2F0aW9uR3JvdXBTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcmVzZXROZXdPdXRnb2luZ1J1bGUoKSB7XG4gICAgICAgICAgICAgICAgLy9SdWxlIG9iamVjdCB0byBiZSBjcmVhdGVkIG9uIHNlcnZlclxuICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld091dGdvaW5nUnVsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgcnVsZUlkOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IDEsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ2FsbG93JywvL3RvIG1ha2UgaXQgZGVmYXVsdCBzZWxlY3RlZCBvcHRpb24gaW4gVUlcbiAgICAgICAgICAgICAgICAgICAgdG9FbmRwb2ludEdyb3VwOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgdG9OZXR3b3JrOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgdG9JUEFkZHJlc3M6ICcnLFxuICAgICAgICAgICAgICAgICAgICBwcm90b2NvbDogJ3RjcCcsLy90byBtYWtlIGl0IGRlZmF1bHQgc2VsZWN0ZWQgb3B0aW9uIGluIFVJXG4gICAgICAgICAgICAgICAgICAgIHBvcnQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdvdXQnLFxuICAgICAgICAgICAgICAgICAgICB0ZW5hbnROYW1lOiAnZGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgICAgIHBvbGljeU5hbWU6IGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLnBvbGljeS5wb2xpY3lOYW1lXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdPdXRnb2luZ1NlbGVjdGVkQXBwbGljYXRpb25Hcm91cCA9ICcnO1xuICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRpc2FibGVPdXRnb2luZ05ldHdvcmtTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlT3V0Z29pbmdBcHBsaWNhdGlvbkdyb3VwU2VsZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IG5ldHdvcmsgbmFtZXMgZm9yIHRoZSBnaXZlbiB0ZW5hbnQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldE5ldHdvcmtzKCkge1xuICAgICAgICAgICAgICAgIE5ldHdvcmtzTW9kZWwuZ2V0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vXy5maWx0ZXIoKSByZXR1cm5zIGEgbmV3IGFycmF5XG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ldHdvcmtzID0gXy5maWx0ZXIocmVzdWx0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAndGVuYW50TmFtZSc6ICdkZWZhdWx0Jy8vVE9ETzogUmVtb3ZlIGhhcmRjb2RlZCB0ZW5hbnQuXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdldCBhcHBsaWNhdGlvbiBncm91cCBuYW1lcyBmb3IgdGhlIGdpdmVuIHRlbmFudC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0QXBwbGljYXRpb25Hcm91cHMoKSB7XG4gICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cHNNb2RlbC5nZXQoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL18uZmlsdGVyKCkgcmV0dXJucyBhIG5ldyBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuYXBwbGljYXRpb25Hcm91cHMgPSBfLmZpbHRlcihyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGVuYW50TmFtZSc6ICdkZWZhdWx0Jy8vVE9ETzogUmVtb3ZlIGhhcmRjb2RlZCB0ZW5hbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRXZlbnQgaGFuZGxlciB0byBkaXNhYmxlIG5ldHdvcmsgc2VsZWN0aW9uIGJveCBvbmNlIGFwcGxpY2F0aW9uIGdyb3VwIGlzIHNlbGVjdGVkIHdoaWxlIGNyZWF0aW5nIGEgbmV3XG4gICAgICAgICAgICAgKiBydWxlLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBvbkNoYW5nZU91dGdvaW5nQXBwbGljYXRpb25Hcm91cFNlbGVjdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3T3V0Z29pbmdTZWxlY3RlZEFwcGxpY2F0aW9uR3JvdXAgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAvL0lmIGFwcGxpY2F0aW9uIGdyb3VwIGhhcyBiZWVuIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld091dGdvaW5nUnVsZS50b0VuZHBvaW50R3JvdXAgPVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3T3V0Z29pbmdTZWxlY3RlZEFwcGxpY2F0aW9uR3JvdXAuZ3JvdXBOYW1lO1xuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdPdXRnb2luZ1J1bGUudG9OZXR3b3JrID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRpc2FibGVPdXRnb2luZ05ldHdvcmtTZWxlY3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vV2hlbiAnbm9uZScgaXMgc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3T3V0Z29pbmdSdWxlLnRvRW5kcG9pbnRHcm91cCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlT3V0Z29pbmdOZXR3b3JrU2VsZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEV2ZW50IGhhbmRsZXIgdG8gZGlzYWJsZSBuZXR3b3JrIHNlbGVjdGlvbiBib3ggb25jZSBhcHBsaWNhdGlvbiBncm91cCBpcyBzZWxlY3RlZCB3aGlsZSBjcmVhdGluZyBhIG5ld1xuICAgICAgICAgICAgICogcnVsZS5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gb25DaGFuZ2VJbmNvbWluZ0FwcGxpY2F0aW9uR3JvdXBTZWxlY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld0luY29taW5nU2VsZWN0ZWRBcHBsaWNhdGlvbkdyb3VwICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9JZiBhcHBsaWNhdGlvbiBncm91cCBoYXMgYmVlbiBzZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdJbmNvbWluZ1J1bGUuZnJvbUVuZHBvaW50R3JvdXAgPVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3SW5jb21pbmdTZWxlY3RlZEFwcGxpY2F0aW9uR3JvdXAuZ3JvdXBOYW1lO1xuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdJbmNvbWluZ1J1bGUuZnJvbU5ldHdvcmsgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZUluY29taW5nTmV0d29ya1NlbGVjdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy9XaGVuICdub25lJyBpcyBzZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdJbmNvbWluZ1J1bGUuZnJvbUVuZHBvaW50R3JvdXAgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZUluY29taW5nTmV0d29ya1NlbGVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEV2ZW50IGhhbmRsZXIgdG8gZGlzYWJsZSBhcHBsaWNhdGlvbiBncm91cCBzZWxlY3Rpb24gYm94IG9uY2UgbmV0d29yayBpcyBzZWxlY3RlZCB3aGlsZSBjcmVhdGluZyBhIG5ld1xuICAgICAgICAgICAgICogcnVsZS5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gb25DaGFuZ2VPdXRnb2luZ05ldHdvcmtTZWxlY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld091dGdvaW5nUnVsZS50b05ldHdvcmsgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAvL0lmIG5ldHdvcmsgaGFzIGJlZW4gc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3T3V0Z29pbmdSdWxlLlRvRW5kcG9pbnRHcm91cCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlT3V0Z29pbmdBcHBsaWNhdGlvbkdyb3VwU2VsZWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlT3V0Z29pbmdBcHBsaWNhdGlvbkdyb3VwU2VsZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEV2ZW50IGhhbmRsZXIgdG8gZGlzYWJsZSBhcHBsaWNhdGlvbiBncm91cCBzZWxlY3Rpb24gYm94IG9uY2UgbmV0d29yayBpcyBzZWxlY3RlZCB3aGlsZSBjcmVhdGluZyBhIG5ld1xuICAgICAgICAgICAgICogcnVsZS5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gb25DaGFuZ2VJbmNvbWluZ05ldHdvcmtTZWxlY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld0luY29taW5nUnVsZS5mcm9tTmV0d29yayAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vSWYgbmV0d29yayBoYXMgYmVlbiBzZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdJbmNvbWluZ1J1bGUuZnJvbUVuZHBvaW50R3JvdXAgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZUluY29taW5nQXBwbGljYXRpb25Hcm91cFNlbGVjdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZUluY29taW5nQXBwbGljYXRpb25Hcm91cFNlbGVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2VuZXJhdGVzIHJ1bGUgaWRcbiAgICAgICAgICAgICAqIFRPRE8gTWFrZSBpdCBjcnlwdG9ncmFwaGljYWxseSBzdHJvbmdlciBvbmNlIHdlIGhhdmUgbXVsdGlwbGUgdXNlcnMgdXBkYXRpbmcgc2FtZSBwb2xpY3lcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVSdWxlSWQocnVsZSkge1xuICAgICAgICAgICAgICAgIHJ1bGUucnVsZUlkID1cbiAgICAgICAgICAgICAgICAgICAgKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmluY29taW5nUnVsZXMubGVuZ3RoICsgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwub3V0Z29pbmdSdWxlcy5sZW5ndGggKyAxKS50b1N0cmluZygpICsgJy0nICtcbiAgICAgICAgICAgICAgICAgICAgRGF0ZS5ub3coKS50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJ1bGUgaXMgc2F2ZWQgdG8gc2VydmVyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGFkZEluY29taW5nUnVsZSgpIHtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZVJ1bGVJZChpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdJbmNvbWluZ1J1bGUpO1xuICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld0luY29taW5nUnVsZS5rZXkgPSBSdWxlc01vZGVsLmdlbmVyYXRlS2V5KGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld0luY29taW5nUnVsZSk7XG4gICAgICAgICAgICAgICAgUnVsZXNNb2RlbC5jcmVhdGUoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3SW5jb21pbmdSdWxlKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmluY29taW5nUnVsZXMucHVzaChyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICByZXNldE5ld0luY29taW5nUnVsZSgpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUnVsZSBpcyBzYXZlZCB0byBzZXJ2ZXJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gYWRkT3V0Z29pbmdSdWxlKCkge1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgIGdlbmVyYXRlUnVsZUlkKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld091dGdvaW5nUnVsZSk7XG4gICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3T3V0Z29pbmdSdWxlLmtleSA9IFJ1bGVzTW9kZWwuZ2VuZXJhdGVLZXkoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3T3V0Z29pbmdSdWxlKTtcbiAgICAgICAgICAgICAgICBSdWxlc01vZGVsLmNyZWF0ZShpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdPdXRnb2luZ1J1bGUpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwub3V0Z29pbmdSdWxlcy5wdXNoKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc2V0TmV3T3V0Z29pbmdSdWxlKCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEZWxldGUgaW5jb21pbmcgcnVsZSBmcm9tIHNlcnZlclxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBkZWxldGVJbmNvbWluZ1J1bGUoa2V5KSB7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgUnVsZXNNb2RlbC5kZWxldGVVc2luZ0tleShrZXkpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgXy5yZW1vdmUoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuaW5jb21pbmdSdWxlcywgZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuLmtleSA9PSBrZXk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRGVsZXRlIG91dGdvaW5nIHJ1bGUgZnJvbSBzZXJ2ZXJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gZGVsZXRlT3V0Z29pbmdSdWxlKGtleSkge1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgIFJ1bGVzTW9kZWwuZGVsZXRlVXNpbmdLZXkoa2V5KS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIF8ucmVtb3ZlKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm91dGdvaW5nUnVsZXMsIGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbi5rZXkgPT0ga2V5O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG5cbiAgICAgICAgICAgIFBvbGljaWVzTW9kZWwuZ2V0TW9kZWxCeUtleSgkc3RhdGVQYXJhbXMua2V5KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChwb2xpY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwucG9saWN5ID0gcG9saWN5O1xuICAgICAgICAgICAgICAgICAgICBSdWxlc01vZGVsLmdldEluY29taW5nUnVsZXMocG9saWN5LnBvbGljeU5hbWUsICdkZWZhdWx0JykudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5pbmNvbWluZ1J1bGVzID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXROZXdJbmNvbWluZ1J1bGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFJ1bGVzTW9kZWwuZ2V0T3V0Z29pbmdSdWxlcyhwb2xpY3kucG9saWN5TmFtZSwgJ2RlZmF1bHQnKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm91dGdvaW5nUnVsZXMgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNldE5ld091dGdvaW5nUnVsZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZ2V0TmV0d29ya3MoKTtcbiAgICAgICAgICAgIGdldEFwcGxpY2F0aW9uR3JvdXBzKCk7XG4gICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kZWxldGVQb2xpY3kgPSBkZWxldGVQb2xpY3k7XG4gICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kZWxldGVJbmNvbWluZ1J1bGUgPSBkZWxldGVJbmNvbWluZ1J1bGU7XG4gICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kZWxldGVPdXRnb2luZ1J1bGUgPSBkZWxldGVPdXRnb2luZ1J1bGU7XG4gICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5hZGRJbmNvbWluZ1J1bGUgPSBhZGRJbmNvbWluZ1J1bGU7XG4gICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5hZGRPdXRnb2luZ1J1bGUgPSBhZGRPdXRnb2luZ1J1bGU7XG4gICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kb25lRWRpdGluZyA9IGRvbmVFZGl0aW5nO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuY2FuY2VsRWRpdGluZyA9IGNhbmNlbEVkaXRpbmc7XG4gICAgICAgICAgICAvL0V2ZW50IEhhbmRsZXJzXG4gICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5vbkNoYW5nZU91dGdvaW5nQXBwbGljYXRpb25Hcm91cFNlbGVjdGlvbiA9IG9uQ2hhbmdlT3V0Z29pbmdBcHBsaWNhdGlvbkdyb3VwU2VsZWN0aW9uO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwub25DaGFuZ2VJbmNvbWluZ0FwcGxpY2F0aW9uR3JvdXBTZWxlY3Rpb24gPSBvbkNoYW5nZUluY29taW5nQXBwbGljYXRpb25Hcm91cFNlbGVjdGlvbjtcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm9uQ2hhbmdlT3V0Z29pbmdOZXR3b3JrU2VsZWN0aW9uID0gb25DaGFuZ2VPdXRnb2luZ05ldHdvcmtTZWxlY3Rpb247XG4gICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5vbkNoYW5nZUluY29taW5nTmV0d29ya1NlbGVjdGlvbiA9IG9uQ2hhbmdlSW5jb21pbmdOZXR3b3JrU2VsZWN0aW9uO1xuXG4gICAgICAgICAgICBzZXRNb2RlKCk7XG5cbiAgICAgICAgfV0pOyIsImFuZ3VsYXIubW9kdWxlKCdjb250aXYubmV0d29ya3BvbGljaWVzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzLmlzb2xhdGlvbi5saXN0Jywge1xuICAgICAgICAgICAgICAgIHVybDogJy9saXN0JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSXNvbGF0aW9uUG9saWN5TGlzdEN0cmwgYXMgaXNvbGF0aW9uUG9saWN5TGlzdEN0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbmV0d29ya19wb2xpY2llcy9pc29sYXRpb25wb2xpY3lsaXN0Lmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ0lzb2xhdGlvblBvbGljeUxpc3RDdHJsJywgWyckc2NvcGUnLCAnJGludGVydmFsJywgJyRmaWx0ZXInLCAnUG9saWNpZXNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICRpbnRlcnZhbCwgJGZpbHRlciwgUG9saWNpZXNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBwb2xpY2llc0xpc3RDdHJsID0gdGhpcztcblxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UG9saWNpZXMocmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgUG9saWNpZXNNb2RlbC5nZXQocmVsb2FkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHBvbGljaWVzTGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9saWNpZXNMaXN0Q3RybC5wb2xpY2llcyA9ICRmaWx0ZXIoJ29yZGVyQnknKShyZXN1bHQsICdwb2xpY3lOYW1lJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHBvbGljaWVzTGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9Mb2FkIGZyb20gY2FjaGUgZm9yIHF1aWNrIGRpc3BsYXkgaW5pdGlhbGx5XG4gICAgICAgICAgICBnZXRQb2xpY2llcyhmYWxzZSk7XG5cbiAgICAgICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICAgICAgLy9Eb24ndCBzdGFydCBhdXRvLXJlZnJlc2ggaWYgb25lIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQocHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0UG9saWNpZXModHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSwgQ29udGl2R2xvYmFscy5SRUZSRVNIX0lOVEVSVkFMKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vc3RvcCBwb2xsaW5nIHdoZW4gdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcbiAgICAgICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRpbnRlcnZhbC5jYW5jZWwocHJvbWlzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzkvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubmV0d29ya3BvbGljaWVzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9uZXR3b3JrcG9saWNpZXMnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOZXR3b3JrUG9saWNpZXNUYWJzQ3RybCBhcyBuZXR3b3JrUG9saWNpZXNUYWJzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICduZXR3b3JrX3BvbGljaWVzL25ldHdvcmtwb2xpY2llc3RhYnMuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5ldHdvcmtwb2xpY2llcy5pc29sYXRpb24nLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2lzb2xhdGlvbicsXG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8dWktdmlldy8+J1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzLnByaW9yaXRpemF0aW9uJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9wcmlvcml0aXphdGlvbicsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05ldHdvcmtQb2xpY2llc1RhYnNDdHJsIGFzIG5ldHdvcmtQb2xpY2llc1RhYnNDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25ldHdvcmtfcG9saWNpZXMvcHJpb3JpdGl6YXRpb25wb2xpY3lsaXN0Lmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMuYmFuZHdpZHRoJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9iYW5kd2lkdGgnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOZXR3b3JrUG9saWNpZXNUYWJzQ3RybCBhcyBuZXR3b3JrUG9saWNpZXNUYWJzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICduZXR3b3JrX3BvbGljaWVzL2JhbmR3aWR0aHBvbGljeWxpc3QuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5ldHdvcmtwb2xpY2llcy5yZWRpcmVjdGlvbicsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvcmVkaXJlY3Rpb24nLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOZXR3b3JrUG9saWNpZXNUYWJzQ3RybCBhcyBuZXR3b3JrUG9saWNpZXNUYWJzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICduZXR3b3JrX3BvbGljaWVzL3JlZGlyZWN0aW9ucG9saWN5bGlzdC5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdOZXR3b3JrUG9saWNpZXNUYWJzQ3RybCcsIFsnJHN0YXRlJywgZnVuY3Rpb24gKCRzdGF0ZSkge1xuICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gMi8xOS8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5uZXR3b3JrcycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5ldHdvcmtzLmNyZWF0ZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvY3JlYXRlJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25ldHdvcmtzL25ldHdvcmtjcmVhdGUuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05ldHdvcmtDcmVhdGVDdHJsIGFzIG5ldHdvcmtDcmVhdGVDdHJsJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdOZXR3b3JrQ3JlYXRlQ3RybCcsIFsnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdOZXR3b3Jrc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBOZXR3b3Jrc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIG5ldHdvcmtDcmVhdGVDdHJsID0gdGhpcztcbiAgICAgICAgICAgIG5ldHdvcmtDcmVhdGVDdHJsLmNpZHJQYXR0ZXJuID0gQ29udGl2R2xvYmFscy5DSURSX1JFR0VYO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub05ldHdvcmtzKCkge1xuICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUubmV0d29ya3MubGlzdCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjYW5jZWxDcmVhdGluZygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5Ub05ldHdvcmtzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZU5ldHdvcmsoKSB7XG4gICAgICAgICAgICAgICAgLy9mb3JtIGNvbnRyb2xsZXIgaXMgaW5qZWN0ZWQgYnkgdGhlIGh0bWwgdGVtcGxhdGVcbiAgICAgICAgICAgICAgICAvL2NoZWNraW5nIGlmIGFsbCB2YWxpZGF0aW9ucyBoYXZlIHBhc3NlZFxuICAgICAgICAgICAgICAgIGlmIChuZXR3b3JrQ3JlYXRlQ3RybC5mb3JtLiR2YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IobmV0d29ya0NyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihuZXR3b3JrQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIG5ldHdvcmtDcmVhdGVDdHJsLm5ld05ldHdvcmsua2V5ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcmtDcmVhdGVDdHJsLm5ld05ldHdvcmsudGVuYW50TmFtZSArICc6JyArIG5ldHdvcmtDcmVhdGVDdHJsLm5ld05ldHdvcmsubmV0d29ya05hbWU7XG4gICAgICAgICAgICAgICAgICAgIE5ldHdvcmtzTW9kZWwuY3JlYXRlKG5ldHdvcmtDcmVhdGVDdHJsLm5ld05ldHdvcmspLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihuZXR3b3JrQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub05ldHdvcmtzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5ldHdvcmtDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihuZXR3b3JrQ3JlYXRlQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5ldHdvcmtDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IobmV0d29ya0NyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgIG5ldHdvcmtDcmVhdGVDdHJsLm5ld05ldHdvcmsgPSB7XG4gICAgICAgICAgICAgICAgICAgIG5ldHdvcmtOYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZW5jYXA6ICd2eGxhbicsXG4gICAgICAgICAgICAgICAgICAgIHN1Ym5ldDogJycsXG4gICAgICAgICAgICAgICAgICAgIGdhdGV3YXk6ICcnLFxuICAgICAgICAgICAgICAgICAgICB0ZW5hbnROYW1lOiAnZGVmYXVsdCcvL1RPRE86IFJlbW92ZSBoYXJkY29kZWQgdGVuYW50LlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5ldHdvcmtDcmVhdGVDdHJsLmNyZWF0ZU5ldHdvcmsgPSBjcmVhdGVOZXR3b3JrO1xuICAgICAgICAgICAgbmV0d29ya0NyZWF0ZUN0cmwuY2FuY2VsQ3JlYXRpbmcgPSBjYW5jZWxDcmVhdGluZztcblxuICAgICAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgICAgIH1dKTtcbiIsImFuZ3VsYXIubW9kdWxlKCdjb250aXYubmV0d29ya3MnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3Jrcy5kZXRhaWxzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9kZXRhaWxzLzprZXknLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOZXR3b3JrRGV0YWlsc0N0cmwgYXMgbmV0d29ya0RldGFpbHNDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25ldHdvcmtzL25ldHdvcmtkZXRhaWxzLmh0bWwnXG4gICAgICAgICAgICB9KTtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignTmV0d29ya0RldGFpbHNDdHJsJyxcbiAgICAgICAgWyckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJGZpbHRlcicsICdOZXR3b3Jrc01vZGVsJywgJ0FwcGxpY2F0aW9uR3JvdXBzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkc2NvcGUsICRpbnRlcnZhbCwgJGZpbHRlciwgTmV0d29ya3NNb2RlbCwgQXBwbGljYXRpb25Hcm91cHNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV0d29ya0RldGFpbHNDdHJsID0gdGhpcztcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvTmV0d29ya3MoKSB7XG4gICAgICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUubmV0d29ya3MubGlzdCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRlbGV0ZU5ldHdvcmsoKSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihuZXR3b3JrRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihuZXR3b3JrRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBOZXR3b3Jrc01vZGVsLmRlbGV0ZShuZXR3b3JrRGV0YWlsc0N0cmwubmV0d29yaykudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5ldHdvcmtEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub05ldHdvcmtzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5ldHdvcmtEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IobmV0d29ya0RldGFpbHNDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBHZXQgYXBwbGljYXRpb24gZ3JvdXBzIGJlbG9uZ2luZyB0byBhIG5ldHdvcmtcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRBcHBsaWNhdGlvbkdyb3VwcyhyZWxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cHNNb2RlbC5nZXQocmVsb2FkKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcmtEZXRhaWxzQ3RybC5hcHBsaWNhdGlvbkdyb3VwcyA9ICRmaWx0ZXIoJ29yZGVyQnknKShfLmZpbHRlcihyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmV0d29ya05hbWUnOiBuZXR3b3JrRGV0YWlsc0N0cmwubmV0d29yay5uZXR3b3JrTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksICdncm91cE5hbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihuZXR3b3JrRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihuZXR3b3JrRGV0YWlsc0N0cmwpO1xuXG4gICAgICAgICAgICAgICAgTmV0d29ya3NNb2RlbC5nZXRNb2RlbEJ5S2V5KCRzdGF0ZVBhcmFtcy5rZXkpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChuZXR3b3JrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXR3b3JrRGV0YWlsc0N0cmwubmV0d29yayA9IG5ldHdvcms7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRBcHBsaWNhdGlvbkdyb3VwcyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbmV0d29ya0RldGFpbHNDdHJsLmRlbGV0ZU5ldHdvcmsgPSBkZWxldGVOZXR3b3JrO1xuXG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2U7XG4gICAgICAgICAgICAgICAgLy9Eb24ndCBkbyBhdXRvcmVmcmVzaCBpZiBvbmUgaXMgYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQocHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9ICRpbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRBcHBsaWNhdGlvbkdyb3Vwcyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgQ29udGl2R2xvYmFscy5SRUZSRVNIX0lOVEVSVkFMKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL3N0b3AgcG9sbGluZyB3aGVuIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgJHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICRpbnRlcnZhbC5jYW5jZWwocHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2Lm5ldHdvcmtzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3MubGlzdCcsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvbGlzdCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05ldHdvcmtzTGlzdEN0cmwgYXMgbmV0d29ya3NMaXN0Q3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICduZXR3b3Jrcy9uZXR3b3JrbGlzdC5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdOZXR3b3Jrc0xpc3RDdHJsJywgWyckc2NvcGUnLCAnJGludGVydmFsJywgJyRmaWx0ZXInLCAnTmV0d29ya3NNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICRpbnRlcnZhbCwgJGZpbHRlciwgTmV0d29ya3NNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBuZXR3b3Jrc0xpc3RDdHJsID0gdGhpcztcblxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0TmV0d29ya3MocmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgTmV0d29ya3NNb2RlbC5nZXQocmVsb2FkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihuZXR3b3Jrc0xpc3RDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXR3b3Jrc0xpc3RDdHJsLm5ldHdvcmtzID0gJGZpbHRlcignb3JkZXJCeScpKHJlc3VsdCwgJ25ldHdvcmtOYW1lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5ldHdvcmtzTGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vTG9hZCBmcm9tIGNhY2hlIGZvciBxdWljayBkaXNwbGF5IGluaXRpYWxseVxuICAgICAgICAgICAgZ2V0TmV0d29ya3MoZmFsc2UpO1xuXG4gICAgICAgICAgICB2YXIgcHJvbWlzZTtcbiAgICAgICAgICAgIC8vRG9uJ3QgZG8gYXV0b3JlZnJlc2ggaWYgb25lIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQocHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0TmV0d29ya3ModHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSwgQ29udGl2R2xvYmFscy5SRUZSRVNIX0lOVEVSVkFMKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9zdG9wIHBvbGxpbmcgd2hlbiB1c2VyIG1vdmVzIGF3YXkgZnJvbSB0aGUgcGFnZVxuICAgICAgICAgICAgJHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJGludGVydmFsLmNhbmNlbChwcm9taXNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMjUvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubm9kZXMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5ub2Rlcy5jb21taXNzaW9uJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9jb21taXNzaW9uLzprZXknLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb2RlQ29tbWlzc2lvbkN0cmwgYXMgbm9kZUNvbW1pc3Npb25DdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25vZGVzL25vZGVjb21taXNzaW9uLmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5ub2Rlcy5kaXNjb3ZlcicsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZGlzY292ZXInLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb2RlQ29tbWlzc2lvbkN0cmwgYXMgbm9kZUNvbW1pc3Npb25DdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25vZGVzL25vZGVjb21taXNzaW9uLmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ05vZGVDb21taXNzaW9uQ3RybCcsIFtcbiAgICAgICAgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnTm9kZXNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsXG4gICAgICAgIGZ1bmN0aW9uICgkc3RhdGUsICRzdGF0ZVBhcmFtcywgTm9kZXNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBub2RlQ29tbWlzc2lvbkN0cmwgPSB0aGlzO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRvIHNob3cgY29tbWlzc2lvbiBvciBkaXNjb3ZlciBzY3JlZW4gYmFzZWQgb24gdGhlIHJvdXRlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldE1vZGUoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCRzdGF0ZS5pcygnY29udGl2Lm1lbnUubm9kZXMuY29tbWlzc2lvbicpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5tb2RlID0gJ2NvbW1pc3Npb24nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5tb2RlID0gJ2Rpc2NvdmVyJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvTm9kZURldGFpbHMoKSB7XG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5ub2Rlcy5kZXRhaWxzLmluZm8nLCB7J2tleSc6ICRzdGF0ZVBhcmFtcy5rZXl9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9Ob2RlcygpIHtcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51Lm5vZGVzLmxpc3QnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY2FuY2VsQ29tbWlzc2lvbmluZ05vZGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVG9Ob2RlRGV0YWlscygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjYW5jZWxEaXNjb3ZlcmluZ05vZGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVG9Ob2RlcygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVFeHRyYVZhcnMoKSB7XG4gICAgICAgICAgICAgICAgLy9BZGQgYW5zaWJsZSB2YXJpYWJsZXMgdG8gZXh0cmFfdmFyc1xuICAgICAgICAgICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5hbnNpYmxlVmFyaWFibGVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmV4dHJhX3ZhcnNbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvL0FkZCBlbnZpcm9ubWVudCB2YXJpYWJsZXMgdG8gZXh0cmFfdmFyc1xuICAgICAgICAgICAgICAgIHZhciBlbnZWYXJzID0ge307XG4gICAgICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmVudlZhcmlhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGVudlZhcnNbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmV4dHJhX3ZhcnNbJ2VudiddID0gZW52VmFycztcbiAgICAgICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwubm9kZU9wc09iai5leHRyYV92YXJzID0gSlNPTi5zdHJpbmdpZnkobm9kZUNvbW1pc3Npb25DdHJsLmV4dHJhX3ZhcnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjb21taXNzaW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChub2RlQ29tbWlzc2lvbkN0cmwuZm9ybS4kdmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKG5vZGVDb21taXNzaW9uQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKG5vZGVDb21taXNzaW9uQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5ub2RlT3BzT2JqLm5vZGVzID0gWyRzdGF0ZVBhcmFtcy5rZXldO1xuICAgICAgICAgICAgICAgICAgICBjbGVhbnVwRXh0cmFWYXJzKCk7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUV4dHJhVmFycygpO1xuICAgICAgICAgICAgICAgICAgICBOb2Rlc01vZGVsLmNvbW1pc3Npb24obm9kZUNvbW1pc3Npb25DdHJsLm5vZGVPcHNPYmopLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihub2RlQ29tbWlzc2lvbkN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9Ob2RlRGV0YWlscygpO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihub2RlQ29tbWlzc2lvbkN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKG5vZGVDb21taXNzaW9uQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBkaXNjb3ZlcigpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZUNvbW1pc3Npb25DdHJsLmZvcm0uJHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihub2RlQ29tbWlzc2lvbkN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihub2RlQ29tbWlzc2lvbkN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVJUEFkZHJBcnJheSgpO1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVFeHRyYVZhcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgTm9kZXNNb2RlbC5kaXNjb3Zlcihub2RlQ29tbWlzc2lvbkN0cmwubm9kZU9wc09iaikudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5vZGVDb21taXNzaW9uQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub05vZGVzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5vZGVDb21taXNzaW9uQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3Iobm9kZUNvbW1pc3Npb25DdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2xlYW51cCBhbnNpYmxlIHZhcmlhYmxlcyBmb3IgbmV0d29yayBtb2RlIGFuZCBzY2hlZHVsZXIuIG5nLWlmIHJlbW92ZXMgaXQgZnJvbSB0aGUgdmlldyAoRE9NKSBidXQgbm90IGZyb21cbiAgICAgICAgICAgICAqIHRoZSBtb2RlbC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gY2xlYW51cEV4dHJhVmFycygpIHtcbiAgICAgICAgICAgICAgICAvL0NsZWFudXAgZm9yIG5ldHdvcmsgbW9kZVxuICAgICAgICAgICAgICAgIGlmIChub2RlQ29tbWlzc2lvbkN0cmwuZXh0cmFfdmFyc1snY29udGl2X25ldHdvcmtfbW9kZSddID09ICdhY2knKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBub2RlQ29tbWlzc2lvbkN0cmwuZXh0cmFfdmFyc1snZndkX21vZGUnXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbm9kZUNvbW1pc3Npb25DdHJsLmV4dHJhX3ZhcnNbJ2FwaWNfdXJsJ107XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBub2RlQ29tbWlzc2lvbkN0cmwuZXh0cmFfdmFyc1snYXBpY191c2VybmFtZSddO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbm9kZUNvbW1pc3Npb25DdHJsLmV4dHJhX3ZhcnNbJ2FwaWNfcGFzc3dvcmQnXTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG5vZGVDb21taXNzaW9uQ3RybC5leHRyYV92YXJzWydhcGljX2xlYWZfbm9kZXMnXTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG5vZGVDb21taXNzaW9uQ3RybC5leHRyYV92YXJzWydhcGljX3BoeXNfZG9tYWluJ107XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBub2RlQ29tbWlzc2lvbkN0cmwuZXh0cmFfdmFyc1snYXBpY19lcGdfYnJpZGdlX2RvbWFpbiddO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbm9kZUNvbW1pc3Npb25DdHJsLmV4dHJhX3ZhcnNbJ2FwaWNfY29udHJhY3RzX3VucmVzdHJpY3RlZF9tb2RlJ107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vQ2xlYW51cCBmb3Igc2NoZWR1bGVyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGVDb21taXNzaW9uQ3RybC5leHRyYV92YXJzWydzY2hlZHVsZXJfcHJvdmlkZXInXSA9PSAnbmF0aXZlLXN3YXJtJykge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbm9kZUNvbW1pc3Npb25DdHJsLmV4dHJhX3ZhcnNbJ3VjcF9ib290c3RyYXBfbm9kZV9uYW1lJ107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVJUEFkZHJBcnJheSgpIHtcbiAgICAgICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwubm9kZU9wc09iai5hZGRycyA9IF8ud29yZHMobm9kZUNvbW1pc3Npb25DdHJsLm5vZGVJUEFkZHIsIC9bXiwgXSsvZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5ub2RlT3BzT2JqID0ge307XG4gICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwuZXh0cmFfdmFycyA9IHt9OyAvL1RPRE8gSW50aWFsaXplIGZyb20gZ2xvYmFsIHNldHRpbmdzXG4gICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwuYW5zaWJsZVZhcmlhYmxlcyA9IFtdO1xuICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmVudlZhcmlhYmxlcyA9IFtdO1xuICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLm5vZGVJUEFkZHIgPSAnJzsgLy9JUCBhZGRyZXNzIG9mIG5vZGVzIHRvIGRpc2NvdmVyXG5cbiAgICAgICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5jYW5jZWxDb21taXNzaW9uaW5nTm9kZSA9IGNhbmNlbENvbW1pc3Npb25pbmdOb2RlO1xuICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmNvbW1pc3Npb24gPSBjb21taXNzaW9uO1xuICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmRpc2NvdmVyID0gZGlzY292ZXI7XG4gICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwuY2FuY2VsRGlzY292ZXJpbmdOb2RlID0gY2FuY2VsRGlzY292ZXJpbmdOb2RlO1xuXG4gICAgICAgICAgICBzZXRNb2RlKCk7XG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5vZGVDb21taXNzaW9uQ3RybCk7XG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Iobm9kZUNvbW1pc3Npb25DdHJsKTtcblxuICAgICAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMjUvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubm9kZXMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5ub2Rlcy5kZXRhaWxzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9kZXRhaWxzLzprZXknLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb2RlRGV0YWlsc0N0cmwgYXMgbm9kZURldGFpbHNDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25vZGVzL25vZGVkZXRhaWxzLmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5ub2Rlcy5kZXRhaWxzLmluZm8nLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2luZm8nLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb2RlRGV0YWlsc0N0cmwgYXMgbm9kZURldGFpbHNDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25vZGVzL25vZGVpbmZvLmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5ub2Rlcy5kZXRhaWxzLnN0YXRzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9zdGF0cycsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05vZGVEZXRhaWxzQ3RybCBhcyBub2RlRGV0YWlsc0N0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbm9kZXMvbm9kZXN0YXRzLmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5ub2Rlcy5kZXRhaWxzLmxvZ3MnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2xvZ3MnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb2RlRGV0YWlsc0N0cmwgYXMgbm9kZURldGFpbHNDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25vZGVzL25vZGVsb2dzLmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ05vZGVEZXRhaWxzQ3RybCcsIFsnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICckc2NvcGUnLCAnJGludGVydmFsJywgJ05vZGVzTW9kZWwnLFxuICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsICRzY29wZSwgJGludGVydmFsLCBOb2Rlc01vZGVsKSB7XG4gICAgICAgICAgICB2YXIgbm9kZURldGFpbHNDdHJsID0gdGhpcztcblxuICAgICAgICAgICAgZnVuY3Rpb24gZGVjb21taXNzaW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBub2RlT3BzT2JqID0ge1xuICAgICAgICAgICAgICAgICAgbm9kZXM6IFskc3RhdGVQYXJhbXMua2V5XVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgTm9kZXNNb2RlbC5kZWNvbW1pc3Npb24obm9kZU9wc09iaikudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vRGlzYWJsZSBhbGwgYnV0dG9ucyBpbml0aWFsbHkuIFBvbGwgd2lsbCBhc3NpZ24gdmFsdWVzIGFwcHJvcHJpYXRlbHkuXG4gICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5zaG93Q29tbWlzc2lvbkJ1dHRvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuY29tbWlzc2lvbkJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnVwZ3JhZGVCdXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZ3JhZGUoKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVPcHNPYmogPSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzOiBbJHN0YXRlUGFyYW1zLmtleV1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIE5vZGVzTW9kZWwudXBncmFkZShub2RlT3BzT2JqKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9EaXNhYmxlIGFsbCBidXR0b25zIGluaXRpYWxseS4gUG9sbCB3aWxsIGFzc2lnbiB2YWx1ZXMgYXBwcm9wcmlhdGVseS5cbiAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnNob3dDb21taXNzaW9uQnV0dG9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5jb21taXNzaW9uQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwudXBncmFkZUJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEaXNwbGF5IGJ1dHRvbnMgYmFzZWQgb24gc3RhdHVzIG9mIG5vZGVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gc2V0QnV0dG9uRGlzcGxheSgpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG5vZGVEZXRhaWxzQ3RybC5ub2RlWydpbnZlbnRvcnlfc3RhdGUnXS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnVW5hbGxvY2F0ZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnNob3dDb21taXNzaW9uQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5jb21taXNzaW9uQnV0dG9uRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwudXBncmFkZUJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdEZWNvbW1pc3Npb25lZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuc2hvd0NvbW1pc3Npb25CdXR0b24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLmNvbW1pc3Npb25CdXR0b25FbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC51cGdyYWRlQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1Byb3Zpc2lvbmluZyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuc2hvd0NvbW1pc3Npb25CdXR0b24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLmNvbW1pc3Npb25CdXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwudXBncmFkZUJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdBbGxvY2F0ZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnNob3dDb21taXNzaW9uQnV0dG9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuY29tbWlzc2lvbkJ1dHRvbkVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnVwZ3JhZGVCdXR0b25FbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdDYW5jZWxsZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnNob3dDb21taXNzaW9uQnV0dG9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuY29tbWlzc2lvbkJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC51cGdyYWRlQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ01haW50ZW5hbmNlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5zaG93Q29tbWlzc2lvbkJ1dHRvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuY29tbWlzc2lvbkJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC51cGdyYWRlQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6Ly9DbHVzdGVyIHNob3VsZCBub3QgYmUgaW4gdGhpcyBzdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnNob3dDb21taXNzaW9uQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5jb21taXNzaW9uQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnVwZ3JhZGVCdXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldE5vZGVJbmZvKHJlbG9hZCkge1xuICAgICAgICAgICAgICAgIE5vZGVzTW9kZWwuZ2V0TW9kZWxCeUtleSgkc3RhdGVQYXJhbXMua2V5LCByZWxvYWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwubm9kZSA9IG5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCdXR0b25EaXNwbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuZGVjb21taXNzaW9uID0gZGVjb21taXNzaW9uO1xuICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnVwZ3JhZGUgPSB1cGdyYWRlO1xuXG4gICAgICAgICAgICAvL0xvYWQgZnJvbSBjYWNoZSBmb3IgcXVpY2sgZGlzcGxheSBpbml0aWFsbHlcbiAgICAgICAgICAgIGdldE5vZGVJbmZvKGZhbHNlKTtcblxuICAgICAgICAgICAgdmFyIHByb21pc2U7XG4gICAgICAgICAgICAvL0Rvbid0IGRvIGF1dG8tcmVmcmVzaCBpZiBvbmUgaXMgYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKCFhbmd1bGFyLmlzRGVmaW5lZChwcm9taXNlKSkge1xuICAgICAgICAgICAgICAgIHByb21pc2UgPSAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBnZXROb2RlSW5mbyh0cnVlKTtcbiAgICAgICAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vc3RvcCBwb2xsaW5nIHdoZW4gdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcbiAgICAgICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRpbnRlcnZhbC5jYW5jZWwocHJvbWlzZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA2LzE0LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZShcImNvbnRpdi5ub2Rlc1wiKVxuICAgIC5kaXJlY3RpdmUoXCJjdHZOb2Rlc3RhdHVzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgbm9kZTogJz0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdub2Rlcy9ub2Rlc3RhdHVzLmh0bWwnXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC5kaXJlY3RpdmUoXCJjdHZOb2Rlc3RhdGVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgICBub2RlOiAnPSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25vZGVzL25vZGVzdGF0ZS5odG1sJ1xuICAgICAgICB9XG4gICAgfSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzIyLzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm5vZGVzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubm9kZXMubGlzdCcsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvbGlzdCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05vZGVMaXN0Q3RybCBhcyBub2RlTGlzdEN0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbm9kZXMvbm9kZWxpc3QuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignTm9kZUxpc3RDdHJsJywgWyckc2NvcGUnLCAnJGludGVydmFsJywgJyRmaWx0ZXInLCAnTm9kZXNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsICdOb2RlU2VydmljZScsXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICRpbnRlcnZhbCwgJGZpbHRlciwgTm9kZXNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UsIE5vZGVTZXJ2aWNlKSB7XG4gICAgICAgIHZhciBub2RlTGlzdEN0cmwgPSB0aGlzO1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldE5vZGVzKHJlbG9hZCkge1xuICAgICAgICAgICAgTm9kZXNNb2RlbC5nZXQocmVsb2FkKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihub2RlTGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBub2RlTGlzdEN0cmwubm9kZXMgPSAkZmlsdGVyKCdvcmRlckJ5JykocmVzdWx0LCAna2V5Jyk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihub2RlTGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGdldEFjdGl2ZUxvZ3MoKTtcbiAgICAgICAgICAgICAgICBnZXRMYXN0TG9ncygpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0QWN0aXZlTG9ncygpIHtcbiAgICAgICAgICAgIE5vZGVTZXJ2aWNlLmdldEFjdGl2ZUxvZ3MoKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBub2RlTGlzdEN0cmwuYWN0aXZlTG9ncyA9IHJlc3VsdDtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgLy9PbmNlIHRoZSBqb2IgZmluaXNoZXMsIGVuZHBvaW50IHJldHVybnMgNTAwIGVycm9yLiBTbyByZXNldCB0aGUgYWN0aXZlTG9nc1xuICAgICAgICAgICAgICAgIG5vZGVMaXN0Q3RybC5hY3RpdmVMb2dzID0ge1xuICAgICAgICAgICAgICAgICAgICBkZXNjOiAnVGhlcmUgaXMgY3VycmVudGx5IG5vIGFjdGl2ZSBqb2IuIENoZWNrIExhc3QgSm9iIGZvciBhIGpvYiB0aGF0IHJlY2VudGx5IGZpbmlzaGVkLidcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRMYXN0TG9ncygpIHtcbiAgICAgICAgICAgIE5vZGVTZXJ2aWNlLmdldExhc3RMb2dzKCkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgbm9kZUxpc3RDdHJsLmxhc3RMb2dzID0gcmVzdWx0O1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbm9kZUxpc3RDdHJsLmdldEFjdGl2ZUxvZ3MgPSBnZXRBY3RpdmVMb2dzO1xuICAgICAgICBub2RlTGlzdEN0cmwuZ2V0TGFzdExvZ3MgPSBnZXRMYXN0TG9ncztcblxuICAgICAgICAvL0xvYWQgZnJvbSBjYWNoZSBmb3IgcXVpY2sgZGlzcGxheSBpbml0aWFsbHlcbiAgICAgICAgZ2V0Tm9kZXMoZmFsc2UpO1xuXG4gICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICAvL0Rvbid0IGRvIGF1dG8tcmVmcmVzaCBpZiBvbmUgaXMgYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgICBpZiAoIWFuZ3VsYXIuaXNEZWZpbmVkKHByb21pc2UpKSB7XG4gICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBnZXROb2Rlcyh0cnVlKTtcbiAgICAgICAgICAgIH0sIENvbnRpdkdsb2JhbHMuUkVGUkVTSF9JTlRFUlZBTCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9zdG9wIHBvbGxpbmcgd2hlbiB1c2VyIG1vdmVzIGF3YXkgZnJvbSB0aGUgcGFnZVxuICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRpbnRlcnZhbC5jYW5jZWwocHJvbWlzZSk7XG4gICAgICAgIH0pO1xuICAgIH1dKTsiLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2Lm5vZGVzJylcbiAgICAuZmFjdG9yeSgnTm9kZVNlcnZpY2UnLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xuICAgICAgICBmdW5jdGlvbiBnZXRBY3RpdmVMb2dzKCkge1xuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICAgICAgIHZhciB1cmwgPSBDb250aXZHbG9iYWxzLk5PREVTX0FDVElWRV9KT0JfRU5EUE9JTlQ7XG4gICAgICAgICAgICAkaHR0cC5nZXQodXJsKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRMYXN0TG9ncygpIHtcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICAgICB2YXIgdXJsID0gQ29udGl2R2xvYmFscy5OT0RFU19MQVNUX0pPQl9FTkRQT0lOVDtcbiAgICAgICAgICAgICRodHRwLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXRBY3RpdmVMb2dzOiBnZXRBY3RpdmVMb2dzLFxuICAgICAgICAgICAgZ2V0TGFzdExvZ3M6IGdldExhc3RMb2dzXG4gICAgICAgIH1cbiAgICB9XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5vcmdhbml6YXRpb25zJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUub3JnYW5pemF0aW9ucy5jcmVhdGUnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2NyZWF0ZScsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdvcmdhbml6YXRpb25zL29yZ2FuaXphdGlvbmNyZWF0ZS5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnT3JnYW5pemF0aW9uQ3JlYXRlQ3RybCBhcyBvcmdhbml6YXRpb25DcmVhdGVDdHJsJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdPcmdhbml6YXRpb25DcmVhdGVDdHJsJywgWyckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ09yZ2FuaXphdGlvbnNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsXG4gICAgICAgIGZ1bmN0aW9uICgkc3RhdGUsICRzdGF0ZVBhcmFtcywgT3JnYW5pemF0aW9uc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwgPSB0aGlzO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub09yZ2FuaXphdGlvbnMoKSB7XG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5vcmdhbml6YXRpb25zLmxpc3QnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY2FuY2VsQ3JlYXRpbmcoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVG9Pcmdhbml6YXRpb25zKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZU9yZ2FuaXphdGlvbigpIHtcbiAgICAgICAgICAgICAgICAvL2Zvcm0gY29udHJvbGxlciBpcyBpbmplY3RlZCBieSB0aGUgaHRtbCB0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIC8vY2hlY2tpbmcgaWYgYWxsIHZhbGlkYXRpb25zIGhhdmUgcGFzc2VkXG4gICAgICAgICAgICAgICAgaWYgKG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwuZm9ybS4kdmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihvcmdhbml6YXRpb25DcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgb3JnYW5pemF0aW9uQ3JlYXRlQ3RybC5uZXdPcmdhbml6YXRpb24ua2V5ID0gb3JnYW5pemF0aW9uQ3JlYXRlQ3RybC5uZXdPcmdhbml6YXRpb24udGVuYW50TmFtZTsgXG4gICAgICAgICAgICAgICAgICAgIE9yZ2FuaXphdGlvbnNNb2RlbC5jcmVhdGUob3JnYW5pemF0aW9uQ3JlYXRlQ3RybC5uZXdPcmdhbml6YXRpb24pLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihvcmdhbml6YXRpb25DcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvT3JnYW5pemF0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihvcmdhbml6YXRpb25DcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihvcmdhbml6YXRpb25DcmVhdGVDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihvcmdhbml6YXRpb25DcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICBvcmdhbml6YXRpb25DcmVhdGVDdHJsLm5ld09yZ2FuaXphdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgdGVuYW50TmFtZTogJydcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvcmdhbml6YXRpb25DcmVhdGVDdHJsLmNyZWF0ZU9yZ2FuaXphdGlvbiA9IGNyZWF0ZU9yZ2FuaXphdGlvbjtcbiAgICAgICAgICAgIG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwuY2FuY2VsQ3JlYXRpbmcgPSBjYW5jZWxDcmVhdGluZztcblxuICAgICAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgICAgIH1dKTtcbiIsImFuZ3VsYXIubW9kdWxlKCdjb250aXYub3JnYW5pemF0aW9ucycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm9yZ2FuaXphdGlvbnMuZGV0YWlscycsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZGV0YWlscy86a2V5JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnT3JnYW5pemF0aW9uRGV0YWlsc0N0cmwgYXMgb3JnYW5pemF0aW9uRGV0YWlsc0N0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnb3JnYW5pemF0aW9ucy9vcmdhbml6YXRpb25kZXRhaWxzLmh0bWwnXG4gICAgICAgICAgICB9KTtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignT3JnYW5pemF0aW9uRGV0YWlsc0N0cmwnLFxuICAgICAgICBbJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckZmlsdGVyJywgJ09yZ2FuaXphdGlvbnNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsXG4gICAgICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsICRzY29wZSwgJGludGVydmFsLCAkZmlsdGVyLCBPcmdhbml6YXRpb25zTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsID0gdGhpcztcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvT3JnYW5pemF0aW9ucygpIHtcbiAgICAgICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5vcmdhbml6YXRpb25zLmxpc3QnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkZWxldGVPcmdhbml6YXRpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihvcmdhbml6YXRpb25EZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgT3JnYW5pemF0aW9uc01vZGVsLmRlbGV0ZShvcmdhbml6YXRpb25EZXRhaWxzQ3RybC5vcmdhbml6YXRpb24pLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihvcmdhbml6YXRpb25EZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub09yZ2FuaXphdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIob3JnYW5pemF0aW9uRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Iob3JnYW5pemF0aW9uRGV0YWlsc0N0cmwpO1xuXG4gICAgICAgICAgICAgICAgT3JnYW5pemF0aW9uc01vZGVsLmdldE1vZGVsQnlLZXkoJHN0YXRlUGFyYW1zLmtleSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKG9yZ2FuaXphdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JnYW5pemF0aW9uRGV0YWlsc0N0cmwub3JnYW5pemF0aW9uID0gb3JnYW5pemF0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsLmRlbGV0ZU9yZ2FuaXphdGlvbiA9IGRlbGV0ZU9yZ2FuaXphdGlvbjtcbiAgICAgICAgICAgIH1dKTsiLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2Lm9yZ2FuaXphdGlvbnMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5vcmdhbml6YXRpb25zLmxpc3QnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2xpc3QnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdPcmdhbml6YXRpb25zTGlzdEN0cmwgYXMgb3JnYW5pemF0aW9uc0xpc3RDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ29yZ2FuaXphdGlvbnMvb3JnYW5pemF0aW9ubGlzdC5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdPcmdhbml6YXRpb25zTGlzdEN0cmwnLCBbJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJGZpbHRlcicsICdPcmdhbml6YXRpb25zTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkaW50ZXJ2YWwsICRmaWx0ZXIsIE9yZ2FuaXphdGlvbnNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBvcmdhbml6YXRpb25zTGlzdEN0cmwgPSB0aGlzO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRPcmdhbml6YXRpb25zKHJlbG9hZCkge1xuICAgICAgICAgICAgICAgIE9yZ2FuaXphdGlvbnNNb2RlbC5nZXQocmVsb2FkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihvcmdhbml6YXRpb25zTGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZ2FuaXphdGlvbnNMaXN0Q3RybC5vcmdhbml6YXRpb25zID0gJGZpbHRlcignb3JkZXJCeScpKHJlc3VsdCwgJ3RlbmFudE5hbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIob3JnYW5pemF0aW9uc0xpc3RDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0xvYWQgZnJvbSBjYWNoZSBmb3IgcXVpY2sgZGlzcGxheSBpbml0aWFsbHlcbiAgICAgICAgICAgIGdldE9yZ2FuaXphdGlvbnMoZmFsc2UpO1xuXG4gICAgICAgICAgICB2YXIgcHJvbWlzZTtcbiAgICAgICAgICAgIC8vRG9uJ3QgZG8gYXV0b3JlZnJlc2ggaWYgb25lIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQocHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0T3JnYW5pemF0aW9ucyh0cnVlKTtcbiAgICAgICAgICAgICAgICB9LCBDb250aXZHbG9iYWxzLlJFRlJFU0hfSU5URVJWQUwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL3N0b3AgcG9sbGluZyB3aGVuIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXG4gICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHByb21pc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1dKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTIvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuc2VydmljZWxicycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnNlcnZpY2VsYnMuY3JlYXRlJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9jcmVhdGUnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2VydmljZV9sYnMvc2VydmljZWxiY3JlYXRlLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdTZXJ2aWNlbGJDcmVhdGVDdHJsIGFzIHNlcnZpY2VsYkNyZWF0ZUN0cmwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ1NlcnZpY2VsYkNyZWF0ZUN0cmwnLCBbXG4gICAgICAgICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ1NlcnZpY2VsYnNNb2RlbCcsICdOZXR3b3Jrc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBTZXJ2aWNlbGJzTW9kZWwsIE5ldHdvcmtzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICB2YXIgc2VydmljZWxiQ3JlYXRlQ3RybCA9IHRoaXM7XG4gICAgICAgICAgICBzZXJ2aWNlbGJDcmVhdGVDdHJsLmxhYmVsU2VsZWN0b3JzID0gW107XG4gICAgICAgICAgICBzZXJ2aWNlbGJDcmVhdGVDdHJsLm5ldHdvcmtzID0gW107XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvU2VydmljZWxicygpIHtcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51LnNlcnZpY2VsYnMubGlzdCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjYW5jZWxDcmVhdGluZygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5Ub1NlcnZpY2VsYnMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXQgbmV0d29ya3MgZm9yIHRoZSBnaXZlbiB0ZW5hbnQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldE5ldHdvcmtzKCkge1xuICAgICAgICAgICAgICAgIE5ldHdvcmtzTW9kZWwuZ2V0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2VsYkNyZWF0ZUN0cmwubmV0d29ya3MgPSBfLmZpbHRlcihyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZW5hbnROYW1lJzogJ2RlZmF1bHQnLy9UT0RPOiBSZW1vdmUgaGFyZGNvZGVkIHRlbmFudC5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUxhYmVsU2VsZWN0b3JTdHJpbmdzKCkge1xuICAgICAgICAgICAgICAgIC8vRW1wdHkgb3V0IHRoZSBzZWxlY3RvcnMuIEluIGNhc2Ugb2Ygc2VydmVyIGVycm9ycyB0aGlzIG5lZWRzIHRvIGJlIHJlc2V0LlxuICAgICAgICAgICAgICAgIHNlcnZpY2VsYkNyZWF0ZUN0cmwuc2VydmljZWxiLnNlbGVjdG9ycyA9IFtdO1xuICAgICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChzZXJ2aWNlbGJDcmVhdGVDdHJsLmxhYmVsU2VsZWN0b3JzLCBmdW5jdGlvbihsYWJlbFNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RvclN0cmluZyA9IGxhYmVsU2VsZWN0b3IubmFtZSArICc9JyArIGxhYmVsU2VsZWN0b3IudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2VsYkNyZWF0ZUN0cmwuc2VydmljZWxiLnNlbGVjdG9ycy5wdXNoKHNlbGVjdG9yU3RyaW5nKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlU2VydmljZWxiKCkge1xuICAgICAgICAgICAgICAgIGNyZWF0ZUxhYmVsU2VsZWN0b3JTdHJpbmdzKCk7XG4gICAgICAgICAgICAgICAgLy9mb3JtIGNvbnRyb2xsZXIgaXMgaW5qZWN0ZWQgYnkgdGhlIGh0bWwgdGVtcGxhdGVcbiAgICAgICAgICAgICAgICAvL2NoZWNraW5nIGlmIGFsbCB2YWxpZGF0aW9ucyBoYXZlIHBhc3NlZFxuICAgICAgICAgICAgICAgIGlmIChzZXJ2aWNlbGJDcmVhdGVDdHJsLmZvcm0uJHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihzZXJ2aWNlbGJDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIoc2VydmljZWxiQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2VsYkNyZWF0ZUN0cmwuc2VydmljZWxiLmtleSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlbGJDcmVhdGVDdHJsLnNlcnZpY2VsYi50ZW5hbnROYW1lICsgJzonICsgc2VydmljZWxiQ3JlYXRlQ3RybC5zZXJ2aWNlbGIuc2VydmljZU5hbWU7XG4gICAgICAgICAgICAgICAgICAgIFNlcnZpY2VsYnNNb2RlbC5jcmVhdGUoc2VydmljZWxiQ3JlYXRlQ3RybC5zZXJ2aWNlbGIpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzZXJ2aWNlbGJDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvU2VydmljZWxicygpO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzZXJ2aWNlbGJDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihzZXJ2aWNlbGJDcmVhdGVDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc2VydmljZWxiQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKHNlcnZpY2VsYkNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgIHNlcnZpY2VsYkNyZWF0ZUN0cmwuc2VydmljZWxiID0ge1xuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlTmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIG5ldHdvcmtOYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgaXBBZGRyZXNzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3JzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgcG9ydHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICB0ZW5hbnROYW1lOiAnZGVmYXVsdCcvL1RPRE86IFJlbW92ZSBoYXJkY29kZWQgdGVuYW50LlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXJ2aWNlbGJDcmVhdGVDdHJsLmNyZWF0ZVNlcnZpY2VsYiA9IGNyZWF0ZVNlcnZpY2VsYjtcbiAgICAgICAgICAgIHNlcnZpY2VsYkNyZWF0ZUN0cmwuY2FuY2VsQ3JlYXRpbmcgPSBjYW5jZWxDcmVhdGluZztcblxuICAgICAgICAgICAgZ2V0TmV0d29ya3MoKTtcbiAgICAgICAgICAgIHJlc2V0Rm9ybSgpO1xuICAgICAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTEvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuc2VydmljZWxicycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnNlcnZpY2VsYnMuZGV0YWlscycsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZGV0YWlscy86a2V5JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnU2VydmljZWxiRGV0YWlsc0N0cmwgYXMgc2VydmljZWxiRGV0YWlsc0N0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2VydmljZV9sYnMvc2VydmljZWxiZGV0YWlscy5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc2VydmljZWxicy5lZGl0Jywge1xuICAgICAgICAgICAgICAgIHVybDogJy9lZGl0LzprZXknLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdTZXJ2aWNlbGJEZXRhaWxzQ3RybCBhcyBzZXJ2aWNlbGJEZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzZXJ2aWNlX2xicy9zZXJ2aWNlbGJkZXRhaWxzLmh0bWwnXG4gICAgICAgICAgICB9KTtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignU2VydmljZWxiRGV0YWlsc0N0cmwnLFxuICAgICAgICBbJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnU2VydmljZWxic01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uICgkc3RhdGUsICRzdGF0ZVBhcmFtcywgU2VydmljZWxic01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgICAgIHZhciBzZXJ2aWNlbGJEZXRhaWxzQ3RybCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgc2VydmljZWxiRGV0YWlsc0N0cmwubGFiZWxTZWxlY3RvcnMgPSBbXTtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFRvIHNob3cgZWRpdCBvciBkZXRhaWxzIHNjcmVlbiBiYXNlZCBvbiB0aGUgcm91dGVcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzZXRNb2RlKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJHN0YXRlLmlzKCdjb250aXYubWVudS5zZXJ2aWNlbGJzLmVkaXQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZWxiRGV0YWlsc0N0cmwubW9kZSA9ICdlZGl0JztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VsYkRldGFpbHNDdHJsLm1vZGUgPSAnZGV0YWlscyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub1NlcnZpY2VsYnMoKSB7XG4gICAgICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUuc2VydmljZWxicy5saXN0Jyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9TZXJ2aWNlbGJEZXRhaWxzKCkge1xuICAgICAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51LnNlcnZpY2VsYnMuZGV0YWlscycsIHsna2V5Jzogc2VydmljZWxiRGV0YWlsc0N0cmwuc2VydmljZWxiLmtleX0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNhbmNlbEVkaXRpbmcoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblRvU2VydmljZWxiRGV0YWlscygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRlbGV0ZVNlcnZpY2VsYigpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKHNlcnZpY2VsYkRldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIoc2VydmljZWxiRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlbGJzTW9kZWwuZGVsZXRlKHNlcnZpY2VsYkRldGFpbHNDdHJsLnNlcnZpY2VsYikudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHNlcnZpY2VsYkRldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvU2VydmljZWxicygpO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzZXJ2aWNlbGJEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3Ioc2VydmljZWxiRGV0YWlsc0N0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNhdmVTZXJ2aWNlbGIoKSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihzZXJ2aWNlbGJEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKHNlcnZpY2VsYkRldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlTGFiZWxTZWxlY3RvclN0cmluZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgU2VydmljZWxic01vZGVsLnNhdmUoc2VydmljZWxiRGV0YWlsc0N0cmwuc2VydmljZWxiKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc2VydmljZWxiRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9TZXJ2aWNlbGJEZXRhaWxzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHNlcnZpY2VsYkRldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihzZXJ2aWNlbGJEZXRhaWxzQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlTGFiZWxTZWxlY3RvcnMoKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChzZXJ2aWNlbGJEZXRhaWxzQ3RybC5zZXJ2aWNlbGIuc2VsZWN0b3JzLCBmdW5jdGlvbihzZWxlY3RvclN0cikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdG9yID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHNlbGVjdG9yU3RyLnNwbGl0KCc9JylbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNlbGVjdG9yU3RyLnNwbGl0KCc9JylbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlbGJEZXRhaWxzQ3RybC5sYWJlbFNlbGVjdG9ycy5wdXNoKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlTGFiZWxTZWxlY3RvclN0cmluZ3MoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2VsYkRldGFpbHNDdHJsLnNlcnZpY2VsYi5zZWxlY3RvcnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHNlcnZpY2VsYkRldGFpbHNDdHJsLmxhYmVsU2VsZWN0b3JzLCBmdW5jdGlvbihsYWJlbFNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0b3JTdHJpbmcgPSBsYWJlbFNlbGVjdG9yLm5hbWUgKyAnPScgKyBsYWJlbFNlbGVjdG9yLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZWxiRGV0YWlsc0N0cmwuc2VydmljZWxiLnNlbGVjdG9ycy5wdXNoKHNlbGVjdG9yU3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHNlcnZpY2VsYkRldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Ioc2VydmljZWxiRGV0YWlsc0N0cmwpO1xuXG4gICAgICAgICAgICAgICAgU2VydmljZWxic01vZGVsLmdldE1vZGVsQnlLZXkoJHN0YXRlUGFyYW1zLmtleSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHNlcnZpY2VsYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZWxiRGV0YWlsc0N0cmwuc2VydmljZWxiID0gc2VydmljZWxiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTGFiZWxTZWxlY3RvcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzZXJ2aWNlbGJEZXRhaWxzQ3RybC5zYXZlU2VydmljZWxiID0gc2F2ZVNlcnZpY2VsYjtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlbGJEZXRhaWxzQ3RybC5jYW5jZWxFZGl0aW5nID0gY2FuY2VsRWRpdGluZztcbiAgICAgICAgICAgICAgICBzZXJ2aWNlbGJEZXRhaWxzQ3RybC5kZWxldGVTZXJ2aWNlbGIgPSBkZWxldGVTZXJ2aWNlbGI7XG4gICAgICAgICAgICAgICAgc2V0TW9kZSgpO1xuXG4gICAgICAgICAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTEvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuc2VydmljZWxicycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnNlcnZpY2VsYnMubGlzdCcsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvbGlzdCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1NlcnZpY2VsYkxpc3RDdHJsIGFzIHNlcnZpY2VsYkxpc3RDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NlcnZpY2VfbGJzL3NlcnZpY2VsYmxpc3QuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignU2VydmljZWxiTGlzdEN0cmwnLCBbJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJGZpbHRlcicsICdTZXJ2aWNlbGJzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkaW50ZXJ2YWwsICRmaWx0ZXIsIFNlcnZpY2VsYnNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBzZXJ2aWNlbGJMaXN0Q3RybCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFNlcnZpY2VsYnMocmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgU2VydmljZWxic01vZGVsLmdldChyZWxvYWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHNlcnZpY2VsYkxpc3RDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlbGJMaXN0Q3RybC5zZXJ2aWNlbGJzID0gJGZpbHRlcignb3JkZXJCeScpKHJlc3VsdCwgJ3NlcnZpY2VOYW1lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHNlcnZpY2VsYkxpc3RDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0xvYWQgZnJvbSBjYWNoZSBmb3IgcXVpY2sgZGlzcGxheSBpbml0aWFsbHlcbiAgICAgICAgICAgIGdldFNlcnZpY2VsYnMoZmFsc2UpO1xuXG4gICAgICAgICAgICB2YXIgcHJvbWlzZTtcbiAgICAgICAgICAgIC8vRG9uJ3QgZG8gYXV0b3JlZnJlc2ggaWYgb25lIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQocHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0U2VydmljZWxicyh0cnVlKTtcbiAgICAgICAgICAgICAgICB9LCBDb250aXZHbG9iYWxzLlJFRlJFU0hfSU5URVJWQUwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL3N0b3AgcG9sbGluZyB3aGVuIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXG4gICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHByb21pc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xMy8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoXCJjb250aXYuc2VydmljZWxic1wiKVxuICAgIC5kaXJlY3RpdmUoXCJjdHZTZXJ2aWNlbGJwb3J0c1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICByZXR1cm4ge1xuICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgIGl0ZW1zOiAnPSdcbiAgICAgICAgICAgfSxcbiAgICAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUpIHtcbiAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICogQ29tcGFyZSBpZiB0d28gaXRlbXMgaGF2ZSBzYW1lIHBvcnRzIGFuZCBwcm90b2NvbHNcbiAgICAgICAgICAgICAgICAqIEBwYXJhbSB2YWwxXG4gICAgICAgICAgICAgICAgKiBAcGFyYW0gdmFsMlxuICAgICAgICAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNvbXBhcmUodmFsMSwgdmFsMikge1xuICAgICAgICAgICAgICAgICAgIHJldHVybiAodmFsMSA9PT0gdmFsMik7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlc2V0TmV3SXRlbSgpIHtcbiAgICAgICAgICAgICAgICAgICBzY29wZS5uZXdJdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlUG9ydDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyUG9ydDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgIHByb3RvY29sOiAnJ1xuICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGZ1bmN0aW9uIGlzRW1wdHlJdGVtKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICByZXR1cm4gKGl0ZW0uc2VydmljZVBvcnQgPT09ICcnICYmIGl0ZW0ucHJvdmlkZXJQb3J0ID09PSAnJyAmJiBpdGVtLnByb3RvY29sID09PSAnJyk7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIHNjb3BlLmFkZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgIGlmIChpc0VtcHR5SXRlbShzY29wZS5uZXdJdGVtKSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgIGlmIChzY29wZS5pdGVtcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLml0ZW1zID0gW107XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIHZhciBuZXdJdGVtU3RyID0gc2NvcGUubmV3SXRlbS5zZXJ2aWNlUG9ydCArICc6J1xuICAgICAgICAgICAgICAgICAgICAgICArIHNjb3BlLm5ld0l0ZW0ucHJvdmlkZXJQb3J0ICsgJzonXG4gICAgICAgICAgICAgICAgICAgICAgICsgc2NvcGUubmV3SXRlbS5wcm90b2NvbDtcbiAgICAgICAgICAgICAgICAgICAvL1JlbW92ZXMgZXhpc3RpbmcgaXRlbSB3aXRoIHRoZSBzYW1lIHZhbHVlIGZpcnN0IGlmIGl0IGV4aXN0cy5cbiAgICAgICAgICAgICAgICAgICBfLnB1bGxBbGxXaXRoKHNjb3BlLml0ZW1zLCBbbmV3SXRlbVN0cl0sIGNvbXBhcmUpO1xuICAgICAgICAgICAgICAgICAgIHNjb3BlLml0ZW1zLnB1c2gobmV3SXRlbVN0cik7XG4gICAgICAgICAgICAgICAgICAgcmVzZXROZXdJdGVtKCk7XG4gICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICBzY29wZS5yZW1vdmUgPSBmdW5jdGlvbihwYXNzZWRJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgXy5yZW1vdmUoc2NvcGUuaXRlbXMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb21wYXJlKGl0ZW0sIHBhc3NlZEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgIHJlc2V0TmV3SXRlbSgpO1xuICAgICAgICAgICB9LFxuICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NlcnZpY2VfbGJzL3NlcnZpY2VsYnBvcnRzLmh0bWwnXG4gICAgICAgfVxuICAgIH0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA2LzEvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuc3RvcmFnZXBvbGljaWVzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc3RvcmFnZXBvbGljaWVzLmNyZWF0ZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvY3JlYXRlJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3N0b3JhZ2VfcG9saWNpZXMvc3RvcmFnZXBvbGljeWNyZWF0ZS5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnU3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwgYXMgc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ1N0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsJywgWyckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ1N0b3JhZ2VQb2xpY2llc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBTdG9yYWdlUG9saWNpZXNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvU3RvcmFnZVBvbGljaWVzKCkge1xuICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUuc3RvcmFnZXBvbGljaWVzLmxpc3QnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY2FuY2VsQ3JlYXRpbmcoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVG9TdG9yYWdlUG9saWNpZXMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlRmlsZXN5c3RlbUNtZHMoKSB7XG4gICAgICAgICAgICAgICAgc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwuZmlsZXN5c3RlbWNtZHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybC5uZXdTdG9yYWdlUG9saWN5LmZpbGVzeXN0ZW1zW2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVQb2xpY3koKSB7XG4gICAgICAgICAgICAgICAgLy9mb3JtIGNvbnRyb2xsZXIgaXMgaW5qZWN0ZWQgYnkgdGhlIGh0bWwgdGVtcGxhdGVcbiAgICAgICAgICAgICAgICAvL2NoZWNraW5nIGlmIGFsbCB2YWxpZGF0aW9ucyBoYXZlIHBhc3NlZFxuICAgICAgICAgICAgICAgIGlmIChzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybC5mb3JtLiR2YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Ioc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUZpbGVzeXN0ZW1DbWRzKCk7XG4gICAgICAgICAgICAgICAgICAgIFN0b3JhZ2VQb2xpY2llc01vZGVsLmNyZWF0ZShzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybC5uZXdTdG9yYWdlUG9saWN5KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvU3RvcmFnZVBvbGljaWVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKHN0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybC5uZXdTdG9yYWdlUG9saWN5ID0ge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJiYWNrZW5kc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNydWRcIjogXCJjZXBoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1vdW50XCI6IFwiY2VwaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzbmFwc2hvdFwiOiBcImNlcGhcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInVubG9ja2VkXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBcImRyaXZlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInBvb2xcIjogXCJyYmRcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZpbGVzeXN0ZW1cIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInJ1bnRpbWVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzbmFwc2hvdHNcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic25hcHNob3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJlcXVlbmN5XCI6IFwiMzBtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrZWVwXCI6IDIwXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyYXRlLWxpbWl0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndyaXRlLWlvcHNcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlYWQtaW9wc1wiOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid3JpdGUtYnBzXCI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWFkLWJwc1wiOiAwIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcImZpbGVzeXN0ZW1zXCI6IHt9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwuY3JlYXRlUG9saWN5ID0gY3JlYXRlUG9saWN5O1xuICAgICAgICAgICAgc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwuY2FuY2VsQ3JlYXRpbmcgPSBjYW5jZWxDcmVhdGluZztcbiAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsLmZpbGVzeXN0ZW1jbWRzID0gW107XG5cbiAgICAgICAgICAgIHJlc2V0Rm9ybSgpO1xuICAgICAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMjcvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuc3RvcmFnZXBvbGljaWVzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc3RvcmFnZXBvbGljaWVzLmRldGFpbHMnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2RldGFpbHMvOmtleScsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1N0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCBhcyBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc3RvcmFnZV9wb2xpY2llcy9zdG9yYWdlcG9saWN5ZGV0YWlscy5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc3RvcmFnZXBvbGljaWVzLmVkaXQnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2RldGFpbHMvOmtleScsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1N0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCBhcyBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc3RvcmFnZV9wb2xpY2llcy9zdG9yYWdlcG9saWN5ZGV0YWlscy5odG1sJ1xuICAgICAgICAgICAgfSk7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ1N0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCcsXG4gICAgICAgIFsnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICckc2NvcGUnLCAnJGludGVydmFsJywgJyRmaWx0ZXInLCAnU3RvcmFnZVBvbGljaWVzTW9kZWwnLCAnVm9sdW1lc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uICgkc3RhdGUsICRzdGF0ZVBhcmFtcywgJHNjb3BlLCAkaW50ZXJ2YWwsICRmaWx0ZXIsIFN0b3JhZ2VQb2xpY2llc01vZGVsLCBWb2x1bWVzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLmZpbGVzeXN0ZW1jbWRzID0gW107XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBUbyBzaG93IGVkaXQgb3IgZGV0YWlscyBzY3JlZW4gYmFzZWQgb24gdGhlIHJvdXRlXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc2V0TW9kZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRzdGF0ZS5pcygnY29udGl2Lm1lbnUuc3RvcmFnZXBvbGljaWVzLmVkaXQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLm1vZGUgPSAnZWRpdCc7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwubW9kZSA9ICdkZXRhaWxzJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvUG9saWNpZXMoKSB7XG4gICAgICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUuc3RvcmFnZXBvbGljaWVzLmxpc3QnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub1BvbGljeURldGFpbHMoKSB7XG4gICAgICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUuc3RvcmFnZXBvbGljaWVzLmRldGFpbHMnLCB7J2tleSc6IHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5wb2xpY3kubmFtZX0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNhbmNlbEVkaXRpbmcoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblRvUG9saWN5RGV0YWlscygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRlbGV0ZVBvbGljeSgpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIFN0b3JhZ2VQb2xpY2llc01vZGVsLmRlbGV0ZVVzaW5nS2V5KHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5wb2xpY3kubmFtZSwgJ25hbWUnKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc3RvcmFnZVBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub1BvbGljaWVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc3RvcmFnZVBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3Ioc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogR2V0IHZvbHVtZXMgYmVsb25naW5nIHRvIGEgcG9saWN5XG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Vm9sdW1lcyhyZWxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgVm9sdW1lc01vZGVsLmdldChyZWxvYWQpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLnZvbHVtZXMgPSAkZmlsdGVyKCdvcmRlckJ5JykoXy5maWx0ZXIocmVzdWx0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BvbGljeSc6IHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5wb2xpY3kubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksICduYW1lJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGluaXRpYWxpemVGaWxlc3lzdGVtQ21kc0FycmF5KCkge1xuICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2goc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLnBvbGljeS5maWxlc3lzdGVtcywgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXNoKHtuYW1lOiBrZXksIHZhbHVlOiB2YWx1ZX0pO1xuICAgICAgICAgICAgICAgICAgICB9LCBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwuZmlsZXN5c3RlbWNtZHMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUZpbGVzeXN0ZW1DbWRzKCkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwuZmlsZXN5c3RlbWNtZHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLnBvbGljeS5maWxlc3lzdGVtc1tpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc2F2ZVBvbGljeSgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9mb3JtIGNvbnRyb2xsZXIgaXMgaW5qZWN0ZWQgYnkgdGhlIGh0bWwgdGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgLy9jaGVja2luZyBpZiBhbGwgdmFsaWRhdGlvbnMgaGF2ZSBwYXNzZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5mb3JtLiR2YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlRmlsZXN5c3RlbUNtZHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0b3JhZ2VQb2xpY2llc01vZGVsLnNhdmUoc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLnBvbGljeSkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvUG9saWN5RGV0YWlscygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwpO1xuXG4gICAgICAgICAgICAgICAgU3RvcmFnZVBvbGljaWVzTW9kZWwuZ2V0TW9kZWxCeUtleSgkc3RhdGVQYXJhbXMua2V5LCBmYWxzZSwgJ25hbWUnKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocG9saWN5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwucG9saWN5ID0gcG9saWN5O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbGl6ZUZpbGVzeXN0ZW1DbWRzQXJyYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZ2V0Vm9sdW1lcyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwuZGVsZXRlUG9saWN5ID0gZGVsZXRlUG9saWN5O1xuICAgICAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5zYXZlUG9saWN5ID0gc2F2ZVBvbGljeTtcbiAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwuY2FuY2VsRWRpdGluZyA9IGNhbmNlbEVkaXRpbmc7XG5cbiAgICAgICAgICAgICAgICBzZXRNb2RlKCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZTtcbiAgICAgICAgICAgICAgICAvL0Rvbid0IGRvIGF1dG9yZWZyZXNoIGlmIG9uZSBpcyBhbHJlYWR5IGluIHByb2dyZXNzXG4gICAgICAgICAgICAgICAgaWYgKCFhbmd1bGFyLmlzRGVmaW5lZChwcm9taXNlKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZ2V0Vm9sdW1lcyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgQ29udGl2R2xvYmFscy5SRUZSRVNIX0lOVEVSVkFMKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL3N0b3AgcG9sbGluZyB3aGVuIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgJHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICRpbnRlcnZhbC5jYW5jZWwocHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDYvMi8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoXCJjb250aXYuc3RvcmFnZXBvbGljaWVzXCIpXG4gICAgLmRpcmVjdGl2ZShcImN0dlN0b3JhZ2Vwb2xpY3liYXNpY3NldHRpbmdzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC5kaXJlY3RpdmUoXCJjdHZTdG9yYWdlcG9saWN5ZmlsZXN5c3RlbXNldHRpbmdzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgcG9saWN5OiAnPScsXG4gICAgICAgICAgICAgICAgZmlsZXN5c3RlbWNtZHM6ICc9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUuZmlsZXN5c3RlbXMgPSBbJ2V4dDQnLCAnYnRyZnMnXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3N0b3JhZ2VfcG9saWNpZXMvZmlsZXN5c3RlbXNldHRpbmdzLmh0bWwnXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC5kaXJlY3RpdmUoXCJjdHZTdG9yYWdlcG9saWN5c25hcHNob3RzZXR0aW5nc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgIHBvbGljeTogJz0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzdG9yYWdlX3BvbGljaWVzL3NuYXBzaG90c2V0dGluZ3MuaHRtbCdcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLmRpcmVjdGl2ZShcImN0dlN0b3JhZ2Vwb2xpY3lyd29wc3NldHRpbmdzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgcG9saWN5OiAnPSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3N0b3JhZ2VfcG9saWNpZXMvcndvcHNzZXR0aW5ncy5odG1sJ1xuICAgICAgICB9XG4gICAgfSlcbiAgICAuZGlyZWN0aXZlKFwiY3R2U3RvcmFnZXBvbGljeWJhY2tlbmRkcml2ZXJzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgcG9saWN5OiAnPSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3N0b3JhZ2VfcG9saWNpZXMvYmFja2VuZGRyaXZlcnMuaHRtbCdcbiAgICAgICAgfVxuICAgIH0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA0LzE4LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnN0b3JhZ2Vwb2xpY2llcycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnN0b3JhZ2Vwb2xpY2llcy5saXN0Jywge1xuICAgICAgICAgICAgICAgIHVybDogJy9saXN0JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnU3RvcmFnZVBvbGljeUxpc3RDdHJsIGFzIHN0b3JhZ2VQb2xpY3lMaXN0Q3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzdG9yYWdlX3BvbGljaWVzL3N0b3JhZ2Vwb2xpY3lsaXN0Lmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ1N0b3JhZ2VQb2xpY3lMaXN0Q3RybCcsIFsnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckZmlsdGVyJywgJ1N0b3JhZ2VQb2xpY2llc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzY29wZSwgJGludGVydmFsLCAkZmlsdGVyLCBTdG9yYWdlUG9saWNpZXNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBzdG9yYWdlUG9saWN5TGlzdEN0cmwgPSB0aGlzO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRQb2xpY2llcyhyZWxvYWQpIHtcbiAgICAgICAgICAgICAgICBTdG9yYWdlUG9saWNpZXNNb2RlbC5nZXQocmVsb2FkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHN0b3JhZ2VQb2xpY3lMaXN0Q3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5TGlzdEN0cmwucG9saWNpZXMgPSAkZmlsdGVyKCdvcmRlckJ5JykocmVzdWx0LCAnbmFtZScpO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzdG9yYWdlUG9saWN5TGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9Mb2FkIGZyb20gY2FjaGUgZm9yIHF1aWNrIGRpc3BsYXkgaW5pdGlhbGx5XG4gICAgICAgICAgICBnZXRQb2xpY2llcyhmYWxzZSk7XG5cbiAgICAgICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICAgICAgLy9Eb24ndCBkbyBhdXRvLXJlZnJlc2ggaWYgb25lIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQocHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0UG9saWNpZXModHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSwgQ29udGl2R2xvYmFscy5SRUZSRVNIX0lOVEVSVkFMKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vc3RvcCBwb2xsaW5nIHdoZW4gdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcbiAgICAgICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRpbnRlcnZhbC5jYW5jZWwocHJvbWlzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfV0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNi8zLzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnZvbHVtZXMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS52b2x1bWVzLmNyZWF0ZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvY3JlYXRlJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZvbHVtZXMvdm9sdW1lY3JlYXRlLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdWb2x1bWVDcmVhdGVDdHJsIGFzIHZvbHVtZUNyZWF0ZUN0cmwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ1ZvbHVtZUNyZWF0ZUN0cmwnLCBbJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnVm9sdW1lc01vZGVsJywgJ1N0b3JhZ2VQb2xpY2llc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBWb2x1bWVzTW9kZWwsIFN0b3JhZ2VQb2xpY2llc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIHZvbHVtZUNyZWF0ZUN0cmwgPSB0aGlzO1xuICAgICAgICAgICAgdm9sdW1lQ3JlYXRlQ3RybC5maWxlc3lzdGVtcyA9IFsnZXh0NCcsICdidHJmcyddO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub1ZvbHVtZXNNb2RlbCgpIHtcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51LnZvbHVtZXMubGlzdCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjYW5jZWxDcmVhdGluZygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5Ub1ZvbHVtZXNNb2RlbCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdldCBzdG9yYWdlIHBvbGljaWVzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRTdG9yYWdlUG9saWNpZXMoKSB7XG4gICAgICAgICAgICAgICAgU3RvcmFnZVBvbGljaWVzTW9kZWwuZ2V0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZUNyZWF0ZUN0cmwucG9saWNpZXMgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGFwcGx5UG9saWN5U2V0dGluZ3MoKSB7XG4gICAgICAgICAgICAgICAgdm9sdW1lQ3JlYXRlQ3RybC5uZXdWb2x1bWUucG9saWN5ID0gdm9sdW1lQ3JlYXRlQ3RybC5zZWxlY3RlZFBvbGljeS5uYW1lO1xuICAgICAgICAgICAgICAgIHZvbHVtZUNyZWF0ZUN0cmwubmV3Vm9sdW1lLmJhY2tlbmRzID0gdm9sdW1lQ3JlYXRlQ3RybC5zZWxlY3RlZFBvbGljeS5iYWNrZW5kcztcbiAgICAgICAgICAgICAgICB2b2x1bWVDcmVhdGVDdHJsLm5ld1ZvbHVtZS5kcml2ZXIgPSB2b2x1bWVDcmVhdGVDdHJsLnNlbGVjdGVkUG9saWN5LmRyaXZlcjtcbiAgICAgICAgICAgICAgICB2b2x1bWVDcmVhdGVDdHJsLm5ld1ZvbHVtZS5jcmVhdGUgPSB2b2x1bWVDcmVhdGVDdHJsLnNlbGVjdGVkUG9saWN5LmNyZWF0ZTtcbiAgICAgICAgICAgICAgICB2b2x1bWVDcmVhdGVDdHJsLm5ld1ZvbHVtZS5ydW50aW1lID0gdm9sdW1lQ3JlYXRlQ3RybC5zZWxlY3RlZFBvbGljeS5ydW50aW1lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVWb2x1bWUoKSB7XG4gICAgICAgICAgICAgICAgLy9mb3JtIGNvbnRyb2xsZXIgaXMgaW5qZWN0ZWQgYnkgdGhlIGh0bWwgdGVtcGxhdGVcbiAgICAgICAgICAgICAgICAvL2NoZWNraW5nIGlmIGFsbCB2YWxpZGF0aW9ucyBoYXZlIHBhc3NlZFxuICAgICAgICAgICAgICAgIGlmICh2b2x1bWVDcmVhdGVDdHJsLmZvcm0uJHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcih2b2x1bWVDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIodm9sdW1lQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIGFwcGx5UG9saWN5U2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgVm9sdW1lc01vZGVsLmNyZWF0ZSh2b2x1bWVDcmVhdGVDdHJsLm5ld1ZvbHVtZSkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHZvbHVtZUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9Wb2x1bWVzTW9kZWwoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIodm9sdW1lQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3Iodm9sdW1lQ3JlYXRlQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHZvbHVtZUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcih2b2x1bWVDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICB2b2x1bWVDcmVhdGVDdHJsLm5ld1ZvbHVtZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYmFja2VuZHNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgIFwiZHJpdmVyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZVwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgXCJydW50aW1lXCI6IHt9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdm9sdW1lQ3JlYXRlQ3RybC5jcmVhdGVWb2x1bWUgPSBjcmVhdGVWb2x1bWU7XG4gICAgICAgICAgICB2b2x1bWVDcmVhdGVDdHJsLmNhbmNlbENyZWF0aW5nID0gY2FuY2VsQ3JlYXRpbmc7XG5cbiAgICAgICAgICAgIGdldFN0b3JhZ2VQb2xpY2llcygpO1xuXG4gICAgICAgICAgICByZXNldEZvcm0oKTtcbiAgICAgICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA0LzE1LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnZvbHVtZXMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS52b2x1bWVzLmRldGFpbHMnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2RldGFpbHMvOmtleScsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1ZvbHVtZURldGFpbHNDdHJsIGFzIHZvbHVtZURldGFpbHNDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZvbHVtZXMvdm9sdW1lZGV0YWlscy5odG1sJ1xuICAgICAgICAgICAgfSk7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ1ZvbHVtZURldGFpbHNDdHJsJyxcbiAgICAgICAgWyckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJGh0dHAnLCAnVm9sdW1lc01vZGVsJywgJ1ZvbHVtZVNlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsICRzY29wZSwgJGludGVydmFsLCAkaHR0cCwgVm9sdW1lc01vZGVsLCBWb2x1bWVTZXJ2aWNlKSB7XG4gICAgICAgICAgICB2YXIgdm9sdW1lRGV0YWlsc0N0cmwgPSB0aGlzO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub1ZvbHVtZXMoKSB7XG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS52b2x1bWVzLmxpc3QnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRlbGV0ZVZvbHVtZSgpIHtcbiAgICAgICAgICAgICAgICBWb2x1bWVzTW9kZWwuZGVsZXRlKHZvbHVtZURldGFpbHNDdHJsLnZvbHVtZSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblRvVm9sdW1lcygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRWb2x1bWVJbmZvKHJlbG9hZCkge1xuICAgICAgICAgICAgICAgIHZhciB0b2tlbnMgPSAkc3RhdGVQYXJhbXMua2V5LnNwbGl0KCcvJyk7XG4gICAgICAgICAgICAgICAgdmFyIG1vZGVsID17fTtcbiAgICAgICAgICAgICAgICBtb2RlbC5wb2xpY3kgPSB0b2tlbnNbMF07XG4gICAgICAgICAgICAgICAgbW9kZWwubmFtZSA9IHRva2Vuc1sxXTtcbiAgICAgICAgICAgICAgICBWb2x1bWVzTW9kZWwuZ2V0TW9kZWwobW9kZWwsIHJlbG9hZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHZvbHVtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm9sdW1lRGV0YWlsc0N0cmwudm9sdW1lID0gdm9sdW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Vm9sdW1lVXNlSW5mbygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Vm9sdW1lU25hcHNob3RzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRWb2x1bWVVc2VJbmZvKCkge1xuICAgICAgICAgICAgICAgIFZvbHVtZVNlcnZpY2UuZ2V0Vm9sdW1lVXNlSW5mbyh2b2x1bWVEZXRhaWxzQ3RybC52b2x1bWUpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICB2b2x1bWVEZXRhaWxzQ3RybC52b2x1bWVVc2UgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9SZXR1cm5zIGVycm9yIGlmIHZvbHVtZSBpcyBub3QgbW91bnRlZCBieSBhbnkgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFZvbHVtZVNuYXBzaG90cygpIHtcbiAgICAgICAgICAgICAgICBWb2x1bWVTZXJ2aWNlLmdldFZvbHVtZVNuYXBzaG90cyh2b2x1bWVEZXRhaWxzQ3RybC52b2x1bWUpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICB2b2x1bWVEZXRhaWxzQ3RybC5zbmFwc2hvdHMgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjb3B5U25hcHNob3Qoc25hcHNob3QsIG5ld1ZvbHVtZSkge1xuICAgICAgICAgICAgICAgIFZvbHVtZXNNb2RlbC5jb3B5KG1vZGVsLCBzbmFwc2hvdCwgbmV3Vm9sdW1lKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcblxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2b2x1bWVEZXRhaWxzQ3RybC5kZWxldGVWb2x1bWUgPSBkZWxldGVWb2x1bWU7XG4gICAgICAgICAgICB2b2x1bWVEZXRhaWxzQ3RybC5jb3B5U25hcHNob3QgPSBjb3B5U25hcHNob3Q7XG5cbiAgICAgICAgICAgIC8vTG9hZCBmcm9tIGNhY2hlIGZvciBxdWljayBkaXNwbGF5IGluaXRpYWxseVxuICAgICAgICAgICAgZ2V0Vm9sdW1lSW5mbyhmYWxzZSk7XG5cbiAgICAgICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICAgICAgLy9Eb24ndCBkbyBhdXRvLXJlZnJlc2ggaWYgb25lIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQocHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0Vm9sdW1lSW5mbyh0cnVlKTtcbiAgICAgICAgICAgICAgICB9LCBDb250aXZHbG9iYWxzLlJFRlJFU0hfSU5URVJWQUwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9zdG9wIHBvbGxpbmcgd2hlbiB1c2VyIG1vdmVzIGF3YXkgZnJvbSB0aGUgcGFnZVxuICAgICAgICAgICAgJHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJGludGVydmFsLmNhbmNlbChwcm9taXNlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1dKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMjIvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYudm9sdW1lcycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnZvbHVtZXMubGlzdCcsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvbGlzdCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1ZvbHVtZUxpc3RDdHJsIGFzIHZvbHVtZUxpc3RDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZvbHVtZXMvdm9sdW1lbGlzdC5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdWb2x1bWVMaXN0Q3RybCcsIFsnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckZmlsdGVyJywgJ1ZvbHVtZXNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICRpbnRlcnZhbCwgJGZpbHRlciwgVm9sdW1lc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIHZvbHVtZUxpc3RDdHJsID0gdGhpcztcblxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Vm9sdW1lcyhyZWxvYWQpIHtcbiAgICAgICAgICAgICAgICBWb2x1bWVzTW9kZWwuZ2V0KHJlbG9hZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcih2b2x1bWVMaXN0Q3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2b2x1bWVMaXN0Q3RybC52b2x1bWVzID0gJGZpbHRlcignb3JkZXJCeScpKHJlc3VsdCwgJ25hbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIodm9sdW1lTGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9Mb2FkIGZyb20gY2FjaGUgZm9yIHF1aWNrIGRpc3BsYXkgaW5pdGlhbGx5XG4gICAgICAgICAgICBnZXRWb2x1bWVzKGZhbHNlKTtcblxuICAgICAgICAgICAgdmFyIHByb21pc2U7XG4gICAgICAgICAgICAvL0Rvbid0IGRvIGF1dG8tcmVmcmVzaCBpZiBvbmUgaXMgYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKCFhbmd1bGFyLmlzRGVmaW5lZChwcm9taXNlKSkge1xuICAgICAgICAgICAgICAgIHByb21pc2UgPSAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBnZXRWb2x1bWVzKHRydWUpO1xuICAgICAgICAgICAgICAgIH0sIENvbnRpdkdsb2JhbHMuUkVGUkVTSF9JTlRFUlZBTCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL3N0b3AgcG9sbGluZyB3aGVuIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXG4gICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHByb21pc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNi81LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnZvbHVtZXMnKVxuICAgIC5mYWN0b3J5KCdWb2x1bWVTZXJ2aWNlJywgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcbiAgICAgICAgZnVuY3Rpb24gZ2V0Vm9sdW1lVXNlSW5mbyh2b2x1bWUpIHtcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICAgICB2YXIgdXJsID0gQ29udGl2R2xvYmFscy5WT0xVTUVTX1VTRVNfRU5EUE9JTlRcbiAgICAgICAgICAgICAgICArIHZvbHVtZS5wb2xpY3lcbiAgICAgICAgICAgICAgICArICcvJyArIHZvbHVtZS5uYW1lO1xuICAgICAgICAgICAgJGh0dHAuZ2V0KHVybCkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIC8vUmV0dXJucyBlcnJvciBpZiB2b2x1bWUgaXMgbm90IG1vdW50ZWQgYnkgYW55IGNvbnRhaW5lclxuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0Vm9sdW1lU25hcHNob3RzKHZvbHVtZSkge1xuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICAgICAgIHZhciB1cmwgPSBDb250aXZHbG9iYWxzLlZPTFVNRVNfU05BUFNIT1RTX0VORFBPSU5UXG4gICAgICAgICAgICAgICAgKyB2b2x1bWUucG9saWN5XG4gICAgICAgICAgICAgICAgKyAnLycgKyB2b2x1bWUubmFtZTtcbiAgICAgICAgICAgICRodHRwLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXRWb2x1bWVVc2VJbmZvOiBnZXRWb2x1bWVVc2VJbmZvLFxuICAgICAgICAgICAgZ2V0Vm9sdW1lU25hcHNob3RzOiBnZXRWb2x1bWVTbmFwc2hvdHNcbiAgICAgICAgfVxuICAgIH1dKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDYvMi8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoXCJjb250aXYuZGlyZWN0aXZlc1wiKVxuICAgIC5kaXJlY3RpdmUoXCJjdHZDb2xsYXBzaWJsZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0AnLFxuICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogJ0AnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSkge1xuICAgICAgICAgICAgICAgIGlmIChzY29wZS5jb2xsYXBzZWQgPT09IHVuZGVmaW5lZCkgc2NvcGUuY29sbGFwc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvZGlyZWN0aXZlcy9jb2xsYXBzaWJsZS5odG1sJ1xuICAgICAgICB9XG4gICAgfSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDQvMjgvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKFwiY29udGl2LmRpcmVjdGl2ZXNcIilcbiAgICAuZGlyZWN0aXZlKFwiY3R2RXJyb3JcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyOiAnQCcsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICc9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cikge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuZmluZCgnaScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKCduZy1oaWRlJyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvZGlyZWN0aXZlcy9lcnJvcm1lc3NhZ2UuaHRtbCdcbiAgICAgICAgfVxuICAgIH0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzExLzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZShcImNvbnRpdi5kaXJlY3RpdmVzXCIpXG4gICAgLmRpcmVjdGl2ZShcImN0dk5hbWV2YWx1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICByZXR1cm4ge1xuICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgaXRlbXM6ICc9JyxcbiAgICAgICAgICAgICAgIG5hbWVoZWFkZXI6ICdAJywvL0ZpZWxkIG5hbWUgdG8gZGlzcGxheSBmb3Iga2V5XG4gICAgICAgICAgICAgICB2YWx1ZWhlYWRlcjogJ0AnLC8vRmllbGQgbmFtZSB0byBkaXNwbGF5IGZvciB2YWx1ZVxuICAgICAgICAgICAgICAgdHlwZTogJ0AnLC8vJ3RleHQnIG9yICdzZWxlY3QnIHRvIGNob29zZSBpbnB1dCBvciBzZWxlY3QgaHRtbCB0YWcgZm9yIGtleVxuICAgICAgICAgICAgICAgb3B0aW9uczogJz0nLy9UbyBiZSB1c2VkIHdoZW4gdHlwZSBpcyAnc2VsZWN0J1xuICAgICAgICAgICB9LFxuICAgICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSkge1xuICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgKiBDb21wYXJlIGlmIHR3byBpdGVtcyBoYXZlIHNhbWUgbmFtZVxuICAgICAgICAgICAgICAgICogQHBhcmFtIHZhbDFcbiAgICAgICAgICAgICAgICAqIEBwYXJhbSB2YWwyXG4gICAgICAgICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgZnVuY3Rpb24gY29tcGFyZSh2YWwxLCB2YWwyKSB7XG4gICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbDEubmFtZSA9PSB2YWwyLm5hbWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlc2V0TmV3SXRlbSgpIHtcbiAgICAgICAgICAgICAgICAgICBzY29wZS5uZXdJdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgZnVuY3Rpb24gaXNFbXB0eUl0ZW0oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgIHJldHVybiAoaXRlbS5uYW1lID09PSAnJyAmJiBpdGVtLnZhbHVlID09PSAnJyk7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIHNjb3BlLmFkZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgIGlmIChpc0VtcHR5SXRlbShzY29wZS5uZXdJdGVtKSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgIGlmIChzY29wZS5pdGVtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuaXRlbSA9IFtdO1xuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAvL1JlbW92ZXMgZXhpc3RpbmcgaXRlbSB3aXRoIHRoZSBzYW1lIG5hbWUgZmlyc3QgaWYgaXQgZXhpc3RzLlxuICAgICAgICAgICAgICAgICAgIF8ucHVsbEFsbFdpdGgoc2NvcGUuaXRlbXMsIFtzY29wZS5uZXdJdGVtXSwgY29tcGFyZSk7XG4gICAgICAgICAgICAgICAgICAgc2NvcGUuaXRlbXMucHVzaChzY29wZS5uZXdJdGVtKTtcbiAgICAgICAgICAgICAgICAgICByZXNldE5ld0l0ZW0oKTtcbiAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgIHNjb3BlLnJlbW92ZSA9IGZ1bmN0aW9uKHBhc3NlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICBfLnJlbW92ZShzY29wZS5pdGVtcywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ubmFtZSA9PSBwYXNzZWRJdGVtLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgcmVzZXROZXdJdGVtKCk7XG5cbiAgICAgICAgICAgICAgIGlmIChzY29wZS5uYW1laGVhZGVyID09PSB1bmRlZmluZWQpIHNjb3BlLm5hbWVoZWFkZXIgPSAnTmFtZSc7XG4gICAgICAgICAgICAgICBpZiAoc2NvcGUudmFsdWVoZWFkZXIgPT09IHVuZGVmaW5lZCkgc2NvcGUudmFsdWVoZWFkZXIgPSAnVmFsdWUnO1xuICAgICAgICAgICAgICAgaWYgKHNjb3BlLnR5cGUgPT09IHVuZGVmaW5lZCkgc2NvcGUudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgfSxcbiAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2RpcmVjdGl2ZXMvbmFtZXZhbHVlLmh0bWwnXG4gICAgICAgfVxuICAgIH0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzQvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKFwiY29udGl2LmRpcmVjdGl2ZXNcIilcbiAgICAuZGlyZWN0aXZlKFwiY3R2VGFibGVcIiwgWydmaWx0ZXJGaWx0ZXInLCAnbGltaXRUb0ZpbHRlcicsIGZ1bmN0aW9uIChmaWx0ZXJGaWx0ZXIsIGxpbWl0VG9GaWx0ZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogJz0nLFxuICAgICAgICAgICAgICAgIGZpbHRlcmVkaXRlbXM6ICc9JyxcbiAgICAgICAgICAgICAgICBzaXplOiAnQCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250cm9sbGVyOiBbJyRzY29wZScsICckZWxlbWVudCcsICckYXR0cnMnLCBmdW5jdGlvbiAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhYmxlQ3RybCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGFibGVDdHJsLmNodW5rcyA9IFtdO1xuICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5wYWdlTm8gPSAwO1xuXG4gICAgICAgICAgICAgICAgdGFibGVDdHJsLnNpemUgPSBwYXJzZUludCgkc2NvcGUuc2l6ZSwgMTApO1xuICAgICAgICAgICAgICAgIGlmIChpc05hTih0YWJsZUN0cmwuc2l6ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFibGVDdHJsLnNpemUgPSAxMjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBBbHdheXMgY2FsbCBzaG93Q2h1bmsgd2l0aCBib3RoIHBhcmFtZXRlcnMuXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHBhZ2VOb1xuICAgICAgICAgICAgICAgICAqIEBwYXJhbSBzZWFyY2hUZXh0XG4gICAgICAgICAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc2hvd0NodW5rKHBhZ2VObywgc2VhcmNoVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB0YWJsZUN0cmwuc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhZ2VObyA9PT0gdW5kZWZpbmVkIHx8IHBhZ2VObyA8IDApIHBhZ2VObyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5wYWdlTm8gPSBwYWdlTm87XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5pdGVtcyAhPT0gdW5kZWZpbmVkKSB7Ly9UT0RPOiBDaGVjayB3aHkgaXRlbXMgYXJlIHVuZGVmaW5lZCBkdXJpbmcgaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWFyY2hUZXh0RmlsdGVyZWRJdGVtcyA9IGZpbHRlckZpbHRlcigkc2NvcGUuaXRlbXMsIHRhYmxlQ3RybC5zZWFyY2hUZXh0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vT2ZDaHVua3MgPSBNYXRoLmNlaWwoc2VhcmNoVGV4dEZpbHRlcmVkSXRlbXMubGVuZ3RoIC8gdGFibGVDdHJsLnNpemUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vT2ZDaHVua3MgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vT2ZDaHVua3MgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDdHJsLmNodW5rcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub09mQ2h1bmtzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUN0cmwuY2h1bmtzLnB1c2goe3NlbGVjdGVkOiBmYWxzZSwgcGFnZU5vOiBpfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vQWZ0ZXIgZmlsdGVyaW5nIG51bWJlciBvZiBjaHVua3MgY291bGQgY2hhbmdlIHNvIHJlc2V0IHBhZ2Ugbm8gaWYgaXQgaXMgZ3JlYXRlciB0aGFuIG5vIG9mIGNodW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhZ2VObyA+PSB0YWJsZUN0cmwuY2h1bmtzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5wYWdlTm8gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUN0cmwuY2h1bmtzW3RhYmxlQ3RybC5wYWdlTm9dLnNlbGVjdGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9VcGRhdGUgbnVtYmVyIG9mIGNodW5rcyBmb3IgcGFnaW5hdGlvbiBtZW51XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFibGVDdHJsLmNodW5rcy5sZW5ndGggPiA1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWNlU3RhcnQsIHNsaWNlRW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlU3RhcnQgPSB0YWJsZUN0cmwucGFnZU5vIC0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGljZUVuZCA9IHRhYmxlQ3RybC5wYWdlTm8gKyAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzbGljZVN0YXJ0IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGljZUVuZCA9IHNsaWNlRW5kIC0gc2xpY2VTdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2VTdGFydCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzbGljZUVuZCA+IHRhYmxlQ3RybC5jaHVua3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlU3RhcnQgPSBzbGljZVN0YXJ0IC0gKHNsaWNlRW5kIC0gdGFibGVDdHJsLmNodW5rcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGljZUVuZCA9IHRhYmxlQ3RybC5jaHVua3MubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUucGFnaW5hdGlvbk1lbnUuY2h1bmtzID0gdGFibGVDdHJsLmNodW5rcy5zbGljZShzbGljZVN0YXJ0LCBzbGljZUVuZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5wYWdpbmF0aW9uTWVudS5jaHVua3MgPSB0YWJsZUN0cmwuY2h1bmtzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUN0cmwuZmlsdGVyZWRJdGVtcyA9IGxpbWl0VG9GaWx0ZXIoc2VhcmNoVGV4dEZpbHRlcmVkSXRlbXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDdHJsLnNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDdHJsLnBhZ2VObyAqIHRhYmxlQ3RybC5zaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5maWx0ZXJlZGl0ZW1zID0gdGFibGVDdHJsLmZpbHRlcmVkSXRlbXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzaG93UHJldkNodW5rKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldkNodW5rO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFibGVDdHJsLnBhZ2VObyA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2Q2h1bmsgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldkNodW5rID0gdGFibGVDdHJsLnBhZ2VObyAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNob3dDaHVuayhwcmV2Q2h1bmspO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNob3dOZXh0Q2h1bmsoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXh0Q2h1bms7XG4gICAgICAgICAgICAgICAgICAgIG5leHRDaHVuayA9IHRhYmxlQ3RybC5wYWdlTm8gKyAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dENodW5rID4gdGFibGVDdHJsLmNodW5rcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0Q2h1bmsgPSB0YWJsZUN0cmwuY2h1bmtzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNob3dDaHVuayhuZXh0Q2h1bmspO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFNhdmUgcGFnaW5hdGlvbiBzY29wZSB0byBwcm92aWRlIGNodW5rIGluZm9ybWF0aW9uIHRvIHBhZ2luYXRpb24gbWVudS5cbiAgICAgICAgICAgICAgICAgKiBAcGFyYW0gbWVudVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGFkZFBhZ2luYXRpb25NZW51KG1lbnUpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnBhZ2luYXRpb25NZW51ID0gbWVudTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0YWJsZUN0cmwuc2hvd0NodW5rID0gc2hvd0NodW5rO1xuICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5zaG93TmV4dENodW5rID0gc2hvd05leHRDaHVuaztcbiAgICAgICAgICAgICAgICB0YWJsZUN0cmwuc2hvd1ByZXZDaHVuayA9IHNob3dQcmV2Q2h1bms7XG4gICAgICAgICAgICAgICAgdGFibGVDdHJsLmFkZFBhZ2luYXRpb25NZW51ID0gYWRkUGFnaW5hdGlvbk1lbnU7XG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMsIHRhYmxlQ3RybCkge1xuICAgICAgICAgICAgICAgIC8vV2F0Y2ggZm9yIGl0ZW1zIGFzIHRoZXkgd2lsbCBiZSBhdXRvIHJlZnJlc2hlZFxuICAgICAgICAgICAgICAgIHNjb3BlLiRwYXJlbnQuJHdhdGNoKGF0dHJzLml0ZW1zLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5zaG93Q2h1bmsodGFibGVDdHJsLnBhZ2VObywgdGFibGVDdHJsLnNlYXJjaFRleHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2RpcmVjdGl2ZXMvdGFibGUuaHRtbCdcbiAgICAgICAgfVxuICAgIH1dKVxuICAgIC5kaXJlY3RpdmUoXCJjdHZUaGVhZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJzx0aGVhZCBuZy10cmFuc2NsdWRlPjwvdGhlYWQ+J1xuICAgICAgICB9XG4gICAgfSlcbiAgICAuZGlyZWN0aXZlKFwiY3R2VGhcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgICBjbGFzczogJ0AnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGU6ICc8dGggbmctY2xhc3M9XCJjbGFzc1wiIG5nLXRyYW5zY2x1ZGU+PC90aD4nXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC5kaXJlY3RpdmUoXCJjdHZUYm9keVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgc2NvcGU6IHt9LFxuICAgICAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJzx0Ym9keSBuZy10cmFuc2NsdWRlPjwvdGJvZHk+J1xuICAgICAgICB9XG4gICAgfSlcbiAgICAuZGlyZWN0aXZlKFwiY3R2VGZvb3RcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHNjb3BlOiB7fSxcbiAgICAgICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICc8dGZvb3QgbmctdHJhbnNjbHVkZT48L3Rmb290PidcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLmRpcmVjdGl2ZShcImN0dlRzZWFyY2hcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHJlcXVpcmU6ICdeXmN0dlRhYmxlJyxcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdAJyxcbiAgICAgICAgICAgICAgICBzaXplOiAnQCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHIsIHRhYmxlQ3RybCkge1xuICAgICAgICAgICAgICAgIHNjb3BlLnNob3dDaHVuayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFibGVDdHJsLnNob3dDaHVuayh0YWJsZUN0cmwucGFnZU5vLCBzY29wZS5zZWFyY2hUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2RpcmVjdGl2ZXMvc2VhcmNoaW5wdXQuaHRtbCdcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLmRpcmVjdGl2ZShcImN0dlRyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICB0cmFuc2NsdWRlOiAndHJ1ZScsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgc2NvcGU6IHt9LFxuICAgICAgICAgICAgdGVtcGxhdGU6ICc8dHIgbmctdHJhbnNjbHVkZT48L3RyPidcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLmRpcmVjdGl2ZShcImN0dlRkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIHNjb3BlOiB0cnVlLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICc8dGQgbmctdHJhbnNjbHVkZT48L3RkPidcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLmRpcmVjdGl2ZShcImN0dlRwYWdpbmF0aW9uXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICByZXF1aXJlOiAnXl5jdHZUYWJsZScsXG4gICAgICAgICAgICBzY29wZToge30sXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHIsIHRhYmxlQ3RybCkge1xuICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5hZGRQYWdpbmF0aW9uTWVudShzY29wZSk7XG4gICAgICAgICAgICAgICAgLy9zaG93Q2h1bmsoKSB3aWxsIGNhbGN1bGF0ZSBhbmQgc2V0IGNodW5rcyBpbiBzY29wZVxuICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5zaG93Q2h1bmsodGFibGVDdHJsLnBhZ2VObywgdGFibGVDdHJsLnNlYXJjaFRleHQpO1xuICAgICAgICAgICAgICAgIHNjb3BlLnNob3dDaHVuayA9IGZ1bmN0aW9uIChwYWdlTm8pIHtcbiAgICAgICAgICAgICAgICAgICAgdGFibGVDdHJsLnNob3dDaHVuayhwYWdlTm8sIHRhYmxlQ3RybC5zZWFyY2hUZXh0KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHNjb3BlLnNob3dQcmV2Q2h1bmsgPSB0YWJsZUN0cmwuc2hvd1ByZXZDaHVuaztcbiAgICAgICAgICAgICAgICBzY29wZS5zaG93TmV4dENodW5rID0gdGFibGVDdHJsLnNob3dOZXh0Q2h1bms7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2RpcmVjdGl2ZXMvcGFnaW5hdGlvbm1lbnUuaHRtbCdcbiAgICAgICAgfVxuICAgIH0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzExLzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm1vZGVscycpXG4gICAgLmZhY3RvcnkoJ0FwcGxpY2F0aW9uR3JvdXBzTW9kZWwnLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xuICAgICAgICB2YXIgZ3JvdXBzbW9kZWwgPSBuZXcgQ29sbGVjdGlvbigkaHR0cCwgJHEsIENvbnRpdkdsb2JhbHMuQVBQTElDQVRJT05HUk9VUFNfRU5EUE9JTlQpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZW5lcmF0ZSBrZXkgZm9yIGFwcGxpY2F0aW9uIGdyb3VwXG4gICAgICAgICAqIEBwYXJhbSBncm91cFxuICAgICAgICAgKi9cbiAgICAgICAgZ3JvdXBzbW9kZWwuZ2VuZXJhdGVLZXkgPSBmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgICAgICAgIHJldHVybiBncm91cC50ZW5hbnROYW1lICsgJzonICsgZ3JvdXAuZ3JvdXBOYW1lO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBncm91cHNtb2RlbDtcbiAgICB9XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5tb2RlbHMnKVxuICAgIC5mYWN0b3J5KCdOZXR3b3Jrc01vZGVsJywgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xsZWN0aW9uKCRodHRwLCAkcSwgQ29udGl2R2xvYmFscy5ORVRXT1JLU19FTkRQT0lOVCk7XG4gICAgfV0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5tb2RlbHMnKVxuICAgIC5mYWN0b3J5KCdPcmdhbml6YXRpb25zTW9kZWwnLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xuICAgICAgICByZXR1cm4gbmV3IENvbGxlY3Rpb24oJGh0dHAsICRxLCBDb250aXZHbG9iYWxzLk9SR0FOSVpBVElPTlNfRU5EUE9JTlQpO1xuICAgIH1dKTsiLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2Lm1vZGVscycpXG4gICAgLmZhY3RvcnkoJ1BvbGljaWVzTW9kZWwnLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xuICAgICAgICB2YXIgcG9saWNpZXNtb2RlbCA9IG5ldyBDb2xsZWN0aW9uKCRodHRwLCAkcSwgQ29udGl2R2xvYmFscy5QT0xJQ0lFU19FTkRQT0lOVCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdlbmVyYXRlIHBvbGljeSBrZXkgdG8gc2F2ZSBwb2xpY3kgb24gc2VydmVyXG4gICAgICAgICAqIEBwYXJhbSBwb2xpY3lcbiAgICAgICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHBvbGljaWVzbW9kZWwuZ2VuZXJhdGVLZXkgPSBmdW5jdGlvbiAocG9saWN5KSB7XG4gICAgICAgICAgICByZXR1cm4gcG9saWN5LnRlbmFudE5hbWUgKyAnOicgKyBwb2xpY3kucG9saWN5TmFtZTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gcG9saWNpZXNtb2RlbDtcbiAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvOC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5tb2RlbHMnKVxuICAgIC5mYWN0b3J5KCdSdWxlc01vZGVsJywgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcbiAgICAgICAgdmFyIHJ1bGVzbW9kZWwgPSBuZXcgQ29sbGVjdGlvbigkaHR0cCwgJHEsIENvbnRpdkdsb2JhbHMuUlVMRVNfRU5EUE9JTlQpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgaW5jb21pbmcgcnVsZXMgZm9yIGEgZ2l2ZW4gcG9saWN5IGFuZCBhIHRlbmFudFxuICAgICAgICAgKiBAcGFyYW0gcG9saWN5TmFtZVxuICAgICAgICAgKiBAcGFyYW0gdGVuYW50TmFtZVxuICAgICAgICAgKiBAcmV0dXJucyB7Knx3ZWJkcml2ZXIucHJvbWlzZS5Qcm9taXNlfVxuICAgICAgICAgKi9cbiAgICAgICAgcnVsZXNtb2RlbC5nZXRJbmNvbWluZ1J1bGVzID0gZnVuY3Rpb24gKHBvbGljeU5hbWUsIHRlbmFudE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBydWxlc21vZGVsLmdldCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfLmZpbHRlcihyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgJ3BvbGljeU5hbWUnOiBwb2xpY3lOYW1lLFxuICAgICAgICAgICAgICAgICAgICAnZGlyZWN0aW9uJzogJ2luJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RlbmFudE5hbWUnOiB0ZW5hbnROYW1lXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgb3V0Z29pbmcgcnVsZXMgZm9yIGEgZ2l2ZW4gcG9saWN5IGFuZCBhIHRlbmFudFxuICAgICAgICAgKiBAcGFyYW0gcG9saWN5TmFtZVxuICAgICAgICAgKiBAcGFyYW0gdGVuYW50TmFtZVxuICAgICAgICAgKiBAcmV0dXJucyB7Knx3ZWJkcml2ZXIucHJvbWlzZS5Qcm9taXNlfVxuICAgICAgICAgKi9cbiAgICAgICAgcnVsZXNtb2RlbC5nZXRPdXRnb2luZ1J1bGVzID0gZnVuY3Rpb24gKHBvbGljeU5hbWUsIHRlbmFudE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBydWxlc21vZGVsLmdldCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfLmZpbHRlcihyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgJ3BvbGljeU5hbWUnOiBwb2xpY3lOYW1lLFxuICAgICAgICAgICAgICAgICAgICAnZGlyZWN0aW9uJzogJ291dCcsXG4gICAgICAgICAgICAgICAgICAgICd0ZW5hbnROYW1lJzogdGVuYW50TmFtZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2VuZXJhdGUgcnVsZSBrZXkgdG8gc2F2ZSBydWxlIG9uIHNlcnZlclxuICAgICAgICAgKiBAcGFyYW0gcnVsZVxuICAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgcnVsZXNtb2RlbC5nZW5lcmF0ZUtleSA9IGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gcnVsZS50ZW5hbnROYW1lICsgJzonICsgcnVsZS5wb2xpY3lOYW1lICsgJzonICsgcnVsZS5ydWxlSWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHJ1bGVzbW9kZWw7XG4gICAgfV0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xMS8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5tb2RlbHMnKVxuICAgIC5mYWN0b3J5KCdTZXJ2aWNlbGJzTW9kZWwnLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xuICAgICAgICByZXR1cm4gbmV3IENvbGxlY3Rpb24oJGh0dHAsICRxLCBDb250aXZHbG9iYWxzLlNFUlZJQ0VMQlNfRU5EUE9JTlQpO1xuICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNC8xOC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5tb2RlbHMnKVxuICAgIC5mYWN0b3J5KCdTdG9yYWdlUG9saWNpZXNNb2RlbCcsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdG9yYWdlUG9saWNpZXNDb2xsZWN0aW9uIGV4dGVuZHMgZnJvbSBCYXNlQ29sbGVjdGlvblxuICAgICAgICAgKiBAcGFyYW0gJGh0dHBcbiAgICAgICAgICogQHBhcmFtICRxXG4gICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gU3RvcmFnZVBvbGljaWVzQ29sbGVjdGlvbigkaHR0cCwgJHEpIHtcbiAgICAgICAgICAgIENvbGxlY3Rpb24uY2FsbCh0aGlzLCAkaHR0cCwgJHEsIENvbnRpdkdsb2JhbHMuU1RPUkFHRVBPTElDSUVTX0VORFBPSU5UKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFN0b3JhZ2VQb2xpY2llc0NvbGxlY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDb2xsZWN0aW9uLnByb3RvdHlwZSk7XG5cbiAgICAgICAgU3RvcmFnZVBvbGljaWVzQ29sbGVjdGlvbi5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgICAgICAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgdXJsID0gY29sbGVjdGlvbi51cmwgKyBtb2RlbC5uYW1lO1xuICAgICAgICAgICAgcmV0dXJuIENvbGxlY3Rpb24ucHJvdG90eXBlLmNyZWF0ZS5jYWxsKGNvbGxlY3Rpb24sIG1vZGVsLCB1cmwpO1xuICAgICAgICB9O1xuXG4gICAgICAgIFN0b3JhZ2VQb2xpY2llc0NvbGxlY3Rpb24ucHJvdG90eXBlLnNhdmUgPSBmdW5jdGlvbiAobW9kZWwpIHtcbiAgICAgICAgICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcztcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9IGNvbGxlY3Rpb24uJHEuZGVmZXIoKTtcbiAgICAgICAgICAgIHZhciB1cmwgPSBjb2xsZWN0aW9uLnVybCArIG1vZGVsLm5hbWU7XG4gICAgICAgICAgICBjb2xsZWN0aW9uLiRodHRwLnBvc3QodXJsLCBtb2RlbClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5yZW1vdmUoY29sbGVjdGlvbi5tb2RlbHMsIGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbi5uYW1lID09IG1vZGVsLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uLm1vZGVscy5wdXNoKG1vZGVsKTtcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgcG9saWNpZXNtb2RlbCA9IG5ldyBTdG9yYWdlUG9saWNpZXNDb2xsZWN0aW9uKCRodHRwLCAkcSk7XG4gICAgICAgIHJldHVybiBwb2xpY2llc21vZGVsO1xuICAgIH1dKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMjIvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubW9kZWxzJylcbiAgICAuZmFjdG9yeSgnVm9sdW1lc01vZGVsJywgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZvbHVtZXNDb2xsZWN0aW9uIGV4dGVuZHMgZnJvbSBCYXNlQ29sbGVjdGlvblxuICAgICAgICAgKiBAcGFyYW0gJGh0dHBcbiAgICAgICAgICogQHBhcmFtICRxXG4gICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gVm9sdW1lc0NvbGxlY3Rpb24oJGh0dHAsICRxKSB7XG4gICAgICAgICAgICBDb2xsZWN0aW9uLmNhbGwodGhpcywgJGh0dHAsICRxLCBDb250aXZHbG9iYWxzLlZPTFVNRVNfRU5EUE9JTlQpO1xuICAgICAgICB9XG5cbiAgICAgICAgVm9sdW1lc0NvbGxlY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDb2xsZWN0aW9uLnByb3RvdHlwZSk7XG5cbiAgICAgICAgVm9sdW1lc0NvbGxlY3Rpb24ucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgICAgICAgICAgdmFyIHZvbHVtZXNjb2xsZWN0aW9uID0gdGhpcztcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9IHZvbHVtZXNjb2xsZWN0aW9uLiRxLmRlZmVyKCk7XG4gICAgICAgICAgICB2YXIgdXJsID0gQ29udGl2R2xvYmFscy5WT0xVTUVTX0RFTEVURV9FTkRQT0lOVDtcbiAgICAgICAgICAgIC8vZGVsZXRlIGVuZHBvaW50IGV4cGVjdHMgdm9sdW1lIHByb3BlcnR5IGluIGFkZGl0aW9uIHRvIHBvbGljeS4gVE9ETyBhc2sgdG8gYmUgZml4ZWRcbiAgICAgICAgICAgIG1vZGVsLnZvbHVtZSA9IG1vZGVsLm5hbWU7XG4gICAgICAgICAgICB2YXIgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIGRhdGE6IG1vZGVsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdm9sdW1lc2NvbGxlY3Rpb24uJGh0dHAuZGVsZXRlKHVybCwgY29uZmlnKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBfLnJlbW92ZSh2b2x1bWVzY29sbGVjdGlvbi5tb2RlbHMsIGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG4ubmFtZSA9PSBtb2RlbC5uYW1lICYmIG4ucG9saWN5ID09IG1vZGVsLnBvbGljeSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHZvbHVtZXNjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh2b2x1bWVzY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgICAgfTtcblxuICAgICAgICBWb2x1bWVzQ29sbGVjdGlvbi5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgICAgICAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgdXJsID0gQ29udGl2R2xvYmFscy5WT0xVTUVTX0NSRUFURV9FTkRQT0lOVDtcbiAgICAgICAgICAgIHJldHVybiBDb2xsZWN0aW9uLnByb3RvdHlwZS5jcmVhdGUuY2FsbChjb2xsZWN0aW9uLCBtb2RlbCwgdXJsKTtcbiAgICAgICAgfTtcblxuICAgICAgICBWb2x1bWVzQ29sbGVjdGlvbi5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIChtb2RlbCwgc25hcHNob3QsIG5ld1ZvbHVtZSkge1xuICAgICAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gY29sbGVjdGlvbi4kcS5kZWZlcigpO1xuICAgICAgICAgICAgdmFyIHVybCA9IENvbnRpdkdsb2JhbHMuVk9MVU1FU19DT1BZU05BUFNIT1RTX0VORFBPSU5UO1xuICAgICAgICAgICAgdmFyIHZvbGNvcHltb2RlbCA9IHtcbiAgICAgICAgICAgICAgICB2b2x1bWU6IG1vZGVsLm5hbWUsXG4gICAgICAgICAgICAgICAgcG9saWN5OiBtb2RlbC5wb2xpY3ksXG4gICAgICAgICAgICAgICAgT3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IG5ld1ZvbHVtZSxcbiAgICAgICAgICAgICAgICAgICAgc25hcHNob3Q6IHNuYXBzaG90XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbGxlY3Rpb24uJGh0dHAucG9zdCh1cmwsIHZvbGNvcHltb2RlbClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9UT0RPOiBBZGQgdGhlIG5ldyB2b2x1bWUgdG8gdGhlIGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgLy9jb2xsZWN0aW9uLm1vZGVscy5wdXNoKGNvbGxlY3Rpb24uZXh0cmFjdChyZXNwb25zZSkpO1xuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGNvbGxlY3Rpb24uZXh0cmFjdChyZXNwb25zZSkpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGNvbGxlY3Rpb24uZXh0cmFjdChyZXNwb25zZSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHZvbHVtZXNtb2RlbCA9IG5ldyBWb2x1bWVzQ29sbGVjdGlvbigkaHR0cCwgJHEpO1xuICAgICAgICByZXR1cm4gdm9sdW1lc21vZGVsO1xuICAgIH1dKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDQvMjkvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYudXRpbHMnKVxuICAgIC5mYWN0b3J5KCdDUlVESGVscGVyU2VydmljZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHN0YXJ0TG9hZGVyKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnNob3dMb2FkZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBzdG9wTG9hZGVyKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnNob3dMb2FkZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gc2hvd1NlcnZlckVycm9yKGNvbnRyb2xsZXIsIG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnNob3dTZXJ2ZXJFcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5zZXJ2ZXJFcnJvck1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBoaWRlU2VydmVyRXJyb3IoY29udHJvbGxlcikge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuc2hvd1NlcnZlckVycm9yID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhcnRMb2FkZXI6IHN0YXJ0TG9hZGVyLFxuICAgICAgICAgICAgICAgIHN0b3BMb2FkZXI6IHN0b3BMb2FkZXIsXG4gICAgICAgICAgICAgICAgc2hvd1NlcnZlckVycm9yOiBzaG93U2VydmVyRXJyb3IsXG4gICAgICAgICAgICAgICAgaGlkZVNlcnZlckVycm9yOiBoaWRlU2VydmVyRXJyb3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
=======
angular.module("contiv.directives", []);
/**
 * Created by vjain3 on 3/14/16.
 */
angular.module('contiv.models', []);
var ContivGlobals = (function () {

    return {
        //REST endpoints for 
        'NETWORKS_ENDPOINT': '/netmaster/api/v1/networks/',
        'POLICIES_ENDPOINT': '/netmaster/api/v1/policys/',
        'RULES_ENDPOINT': '/netmaster/api/v1/rules/',
        'APPLICATIONGROUPS_ENDPOINT': '/netmaster/api/v1/endpointGroups/',
        'SERVICELBS_ENDPOINT': '/netmaster/api/v1/serviceLBs/',
        'ORGANIZATIONS_ENDPOINT':'/netmaster/api/v1/tenants/',

        //REST endpoints for VOLMASTER
        'VOLUMES_ENDPOINT': '/volmaster/volumes/',
        'VOLUMES_CREATE_ENDPOINT': '/volmaster/volumes/create/',
        'VOLUMES_DELETE_ENDPOINT': '/volmaster/volumes/remove/',
        'VOLUMES_COPYSNAPSHOTS_ENDPOINT': '/volmaster/volumes/copy/',
        'VOLUMES_USES_ENDPOINT': '/volmaster/uses/mounts/',
        'VOLUMES_SNAPSHOTS_ENDPOINT': '/volmaster/snapshots/',

        'STORAGEPOLICIES_ENDPOINT': '/volmaster/policies/',


        //REST endpoints for CLUSTER
        'NODES_LIST_ENDPOINT': '/info/nodes',
        'NODES_DISCOVER_ENDPOINT': '/discover/nodes',
        'NODES_COMMISSION_ENDPOINT': '/commission/nodes',
        'NODES_DECOMMISSION_ENDPOINT': '/decommission/nodes',
        'NODES_MAINTENANCE_ENDPOINT': '/maintenance/nodes',
        'NODES_LAST_JOB_ENDPOINT': '/info/job/last',
        'NODES_ACTIVE_JOB_ENDPOINT': '/info/job/active',

        'GLOBAL_SET_ENDPOINT': '/globals',
        'GLOBAL_GET_ENDPOINT': '/info/globals',

        //Refresh interval in milliseconds
        'REFRESH_INTERVAL': 5000,

        //RegEx for validation
        'CIDR_REGEX' : '^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\/([0-9]|[1-2][0-9]|3[0-2]))$'
    }
})();

/**
 * Created by vjain3 on 5/18/16.
 */
angular.module('contiv.utils', []);
/**
 * Created by vjain3 on 5/18/16.
 */
angular.module('contiv.applicationgroups', ['contiv.models', 'contiv.directives', 'contiv.utils'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.applicationgroups', {
                url: '/applicationgroups',
                abstract: true,
                template: '<div ui-view class="ui container"/>'
            })
    }]);

/**
 * Created by vjain3 on 5/18/16.
 */
angular.module('contiv.dashboard', ['contiv.models']);

angular.module('contiv.globalsettings', ['contiv.models', 'contiv.directives', 'contiv.utils'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
	        .state('contiv.menu.globalsettings', {
	            url: '/global',
	            abstract: true,
	            template: '<div ui-view class="ui container"/>'
	        })
	        .state('contiv.menu.globalsettings.settings', {
                url: '/settings',
                templateUrl: 'global_settings/globalsmenu.html'
            })
	        .state('contiv.menu.globalsettings.settings.logs', {
                url: '/logs',
                controller: '',
                templateUrl: ''
	        })
	        .state('contiv.menu.globalsettings.settings.auth', {
	            url: '/auth',
	            controller: '',
	            templateUrl: ''
	        })
	        .state('contiv.menu.globalsettings.settings.license', {
	            url: '/license',
	            controller: '',
	            templateUrl: ''
	        })
	        .state('contiv.menu.globalsettings.settings.networks', {
                url: '/networks',
                controller: '',
                templateUrl: ''
            })
	        .state('contiv.menu.globalsettings.settings.policies', {
                url: '/policies',
                controller: '',
                templateUrl: ''
            })
    }]);
/**
 * Created by vjain3 on 5/19/16.
 */
angular.module('contiv.login', ['contiv.utils']);
/**
 * Created by vjain3 on 5/19/16.
 */
angular.module('contiv.menu', []);
/**
 * Created by vjain3 on 5/18/16.
 */

angular.module('contiv.networkpolicies', ['contiv.models', 'contiv.directives', 'contiv.utils']);
/**
 * Created by vjain3 on 5/18/16.
 */
angular.module('contiv.networks', ['contiv.models', 'contiv.directives', 'contiv.utils'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('contiv.menu.networks', {
            url: '/networks',
            abstract: true,
            template: '<div ui-view class="ui container"/>'
        })
    }]);

/**
 * Created by vjain3 on 5/18/16.
 */
angular.module('contiv.nodes', ['contiv.models', 'contiv.directives', 'contiv.utils'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.nodes', {
                url: '/nodes',
                abstract: true,
                template: '<div ui-view class="ui container"/>'
            })
    }]);

angular.module('contiv.organizations', ['contiv.models', 'contiv.directives', 'contiv.utils'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('contiv.menu.organizations', {
            url: '/organizations',
            abstract: true,
            template: '<div ui-view class="ui container"/>'
        })
    }]);
/**
 * Created by vjain3 on 5/18/16.
 */
angular.module('contiv.servicelbs', ['contiv.models', 'contiv.directives', 'contiv.utils'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.servicelbs', {
                url: '/servicelbs',
                abstract: true,
                template: '<div ui-view class="ui container"/>'
            })
    }]);

/**
 * Created by vjain3 on 5/18/16.
 */
angular.module('contiv.storagepolicies', ['contiv.models', 'contiv.directives', 'contiv.utils'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.storagepolicies', {
                url: '/storagepolicies',
                abstract: true,
                template: '<div ui-view class="ui container"/>'
            })
    }]);
/**
 * Created by vjain3 on 5/18/16.
 */
angular.module('contiv.volumes', ['contiv.models', 'contiv.directives', 'contiv.utils'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.volumes', {
                url: '/volumes',
                abstract: true,
                template: '<div ui-view class="ui container"/>'
            })
    }]);

'use strict';


// Declare app level module which depends on views, and components
angular.module('contivApp', [
        'ui.router',
        'contiv.login',
        'contiv.menu',
        'contiv.dashboard',
        'contiv.applicationgroups',
        'contiv.networks',
        'contiv.networkpolicies',
        'contiv.storagepolicies',
        'contiv.servicelbs',
        'contiv.volumes',
        'contiv.nodes',
        'contiv.organizations',
        'contiv.globalsettings',
    ])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        //abstract state serves as a PLACEHOLDER or NAMESPACE for application states
            .state('contiv', {
                url: '',
                abstract: true,
                template: '<div ui-view class="ui fluid container"/>'
            })
        ;

        $urlRouterProvider.otherwise('/');
    }]);

/**
 * Created by vjain3 on 3/11/16.
 */
/**
 * Created by vjain3 on 3/10/16.
 */
angular.module('contiv.applicationgroups')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.applicationgroups.create', {
                url: '/create',
                controller: 'ApplicationGroupCreateCtrl as applicationGroupCreateCtrl',
                templateUrl: 'applicationgroups/applicationgroupcreate.html'
            })
        ;
    }])
    .controller('ApplicationGroupCreateCtrl', [
        '$state',
        'ApplicationGroupsModel',
        'NetworksModel',
        'PoliciesModel',
        'RulesModel',
        'ApplicationGroupService',
        'CRUDHelperService',
        function ($state,
                  ApplicationGroupsModel,
                  NetworksModel,
                  PoliciesModel,
                  RulesModel,
                  ApplicationGroupService,
                  CRUDHelperService) {
            var applicationGroupCreateCtrl = this;
            applicationGroupCreateCtrl.networks = [];
            applicationGroupCreateCtrl.isolationPolicies = [];
            applicationGroupCreateCtrl.applicationGroup = {};
            applicationGroupCreateCtrl.selectedNetwork = {};
            applicationGroupCreateCtrl.selectedPolicy = {};
            applicationGroupCreateCtrl.selectedPolicies = [];

            //To display incoming and outgoing rules for selected policies
            applicationGroupCreateCtrl.incomingRules = [];
            applicationGroupCreateCtrl.outgoingRules = [];

            applicationGroupCreateCtrl.isolationPoliciesVisible = false;

            function returnToApplicationGroup() {
                $state.go('contiv.menu.applicationgroups.list');
            }

            function cancelCreating() {
                returnToApplicationGroup();
            }

            /**
             * Get networks for the given tenant.
             */
            function getNetworks() {
                NetworksModel.get().then(function (result) {
                    applicationGroupCreateCtrl.networks = _.filter(result, {
                        'tenantName': 'default'//TODO: Remove hardcoded tenant.
                    });
                });
            }

            /**
             * Get policies for the given tenant.
             */
            function getIsolationPolicies() {
                PoliciesModel.get().then(function (result) {
                    applicationGroupCreateCtrl.isolationPolicies = _.filter(result, {
                        'tenantName': 'default'//TODO: Remove hardcoded tenant.
                    });
                });
            }

            /**
             * Add policy to new application group
             */
            function addIsolationPolicy() {
                ApplicationGroupService.addIsolationPolicy(applicationGroupCreateCtrl);
            }

            /**
             * Remove policy from new application group
             */
            function removeIsolationPolicy(policyName) {
                ApplicationGroupService.removeIsolationPolicy(applicationGroupCreateCtrl, policyName);
            }

            function createApplicationGroup() {
                //form controller is injected by the html template
                //checking if all validations have passed
                if (applicationGroupCreateCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(applicationGroupCreateCtrl);
                    CRUDHelperService.startLoader(applicationGroupCreateCtrl);
                    applicationGroupCreateCtrl.applicationGroup.networkName =
                        applicationGroupCreateCtrl.selectedNetwork.networkName;
                    applicationGroupCreateCtrl.applicationGroup.key =
                        ApplicationGroupsModel.generateKey(applicationGroupCreateCtrl.applicationGroup);

                    ApplicationGroupsModel.create(applicationGroupCreateCtrl.applicationGroup).then(
                        function successCallback(result) {
                            CRUDHelperService.stopLoader(applicationGroupCreateCtrl);
                            returnToApplicationGroup();
                        }, function errorCallback(result) {
                            CRUDHelperService.stopLoader(applicationGroupCreateCtrl);
                            CRUDHelperService.showServerError(applicationGroupCreateCtrl, result);
                        });
                }
            }

            function resetForm() {
                CRUDHelperService.stopLoader(applicationGroupCreateCtrl);
                CRUDHelperService.hideServerError(applicationGroupCreateCtrl);
                applicationGroupCreateCtrl.applicationGroup = {
                    groupName: '',
                    networkName: '',
                    policies: [],
                    tenantName: 'default'//TODO: Remove hardcoded tenant.
                };
            }

            getNetworks();
            getIsolationPolicies();

            applicationGroupCreateCtrl.createApplicationGroup = createApplicationGroup;
            applicationGroupCreateCtrl.cancelCreating = cancelCreating;
            applicationGroupCreateCtrl.addIsolationPolicy = addIsolationPolicy;
            applicationGroupCreateCtrl.removeIsolationPolicy = removeIsolationPolicy;

            resetForm();
        }]);
/**
 * Created by vjain3 on 3/15/16.
 */
angular.module('contiv.applicationgroups')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.applicationgroups.details', {
                url: '/details/:key',
                controller: 'ApplicationGroupDetailsCtrl as applicationGroupDetailsCtrl',
                templateUrl: 'applicationgroups/applicationgroupdetails.html'
            })
            .state('contiv.menu.applicationgroups.edit', {
                url: '/edit/:key',
                controller: 'ApplicationGroupDetailsCtrl as applicationGroupDetailsCtrl',
                templateUrl: 'applicationgroups/applicationgroupdetails.html'
            })
        ;
    }])
    .controller('ApplicationGroupDetailsCtrl', [
        '$state',
        '$stateParams',
        'ApplicationGroupsModel',
        'PoliciesModel',
        'RulesModel',
        'ApplicationGroupService',
        'CRUDHelperService',
        function ($state,
                  $stateParams,
                  ApplicationGroupsModel,
                  PoliciesModel,
                  RulesModel,
                  ApplicationGroupService,
                  CRUDHelperService) {
            var applicationGroupDetailsCtrl = this;
            applicationGroupDetailsCtrl.isolationPolicies = [];
            applicationGroupDetailsCtrl.applicationGroup = {};
            applicationGroupDetailsCtrl.selectedNetwork = {};
            applicationGroupDetailsCtrl.selectedPolicy = {};
            applicationGroupDetailsCtrl.selectedPolicies = [];

            //To display incoming and outgoing rules for selected policies
            applicationGroupDetailsCtrl.incomingRules = [];
            applicationGroupDetailsCtrl.outgoingRules = [];


            applicationGroupDetailsCtrl.isolationPoliciesVisible = false;

            /**
             * To show edit or details screen based on the route
             */
            function setMode() {
                if ($state.is('contiv.menu.applicationgroups.edit')) {
                    applicationGroupDetailsCtrl.mode = 'edit';
                } else {
                    applicationGroupDetailsCtrl.mode = 'details';
                }
            }

            function returnToApplicationGroup() {
                $state.go('contiv.menu.applicationgroups.list');
            }

            function returnToApplicationGroupDetails() {
                $state.go('contiv.menu.applicationgroups.details', {'key': applicationGroupDetailsCtrl.applicationGroup.key});
            }

            function cancelEditing() {
                returnToApplicationGroupDetails();
            }

            function getRules() {
                applicationGroupDetailsCtrl.applicationGroup.policies.forEach(function (policy) {
                    //To display rules of selected policies
                    RulesModel.getIncomingRules(policy, 'default')
                        .then(function (rules) {
                            Array.prototype.push.apply(applicationGroupDetailsCtrl.incomingRules, rules);
                        });
                    RulesModel.getOutgoingRules(policy, 'default')
                        .then(function (rules) {
                            Array.prototype.push.apply(applicationGroupDetailsCtrl.outgoingRules, rules);
                        });
                });

            }

            function deleteApplicationGroup() {
                CRUDHelperService.hideServerError(applicationGroupDetailsCtrl);
                CRUDHelperService.startLoader(applicationGroupDetailsCtrl);
                ApplicationGroupsModel.delete(applicationGroupDetailsCtrl.applicationGroup).then(
                    function successCallback(result) {
                        CRUDHelperService.stopLoader(applicationGroupDetailsCtrl);
                        returnToApplicationGroup();
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(applicationGroupDetailsCtrl);
                        CRUDHelperService.showServerError(applicationGroupDetailsCtrl, result);
                    });
            }

            /**
             * Get policies for the given tenant.
             */
            function getIsolationPolicies() {
                PoliciesModel.get().then(function (result) {
                    applicationGroupDetailsCtrl.isolationPolicies = _.filter(result, {
                        'tenantName': 'default'//TODO: Remove hardcoded tenant.
                    })
                });
            }

            /**
             * Add policy to application group
             */
            function addIsolationPolicy() {
                ApplicationGroupService.addIsolationPolicy(applicationGroupDetailsCtrl);
            }

            /**
             * Remove policy from application group
             */
            function removeIsolationPolicy(policyName) {
                ApplicationGroupService.removeIsolationPolicy(applicationGroupDetailsCtrl, policyName);
            }

            function saveApplicationGroup() {
                CRUDHelperService.hideServerError(applicationGroupDetailsCtrl);
                CRUDHelperService.startLoader(applicationGroupDetailsCtrl);
                ApplicationGroupsModel.save(applicationGroupDetailsCtrl.applicationGroup).then(function successCallback(result) {
                    CRUDHelperService.stopLoader(applicationGroupDetailsCtrl);
                    returnToApplicationGroupDetails();
                }, function errorCallback(result) {
                    CRUDHelperService.stopLoader(applicationGroupDetailsCtrl);
                    CRUDHelperService.showServerError(applicationGroupDetailsCtrl, result);
                });
            }

            CRUDHelperService.stopLoader(applicationGroupDetailsCtrl);
            CRUDHelperService.hideServerError(applicationGroupDetailsCtrl);

            ApplicationGroupsModel.getModelByKey($stateParams.key)
                .then(function (group) {
                    applicationGroupDetailsCtrl.applicationGroup = group;
                    //Application Groups might not have any policies associated with them so define an empty array
                    if (applicationGroupDetailsCtrl.applicationGroup.policies === undefined) {
                        applicationGroupDetailsCtrl.applicationGroup.policies = [];
                    }
                    getRules();
                });

            getIsolationPolicies();

            applicationGroupDetailsCtrl.saveApplicationGroup = saveApplicationGroup;
            applicationGroupDetailsCtrl.cancelEditing = cancelEditing;
            applicationGroupDetailsCtrl.addIsolationPolicy = addIsolationPolicy;
            applicationGroupDetailsCtrl.removeIsolationPolicy = removeIsolationPolicy;
            applicationGroupDetailsCtrl.deleteApplicationGroup = deleteApplicationGroup;

            setMode();

        }]);
/**
 * Created by vjain3 on 3/11/16.
 */
angular.module('contiv.applicationgroups')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.applicationgroups.list', {
                url: '/list',
                controller: 'ApplicationGroupListCtrl as applicationGroupListCtrl',
                templateUrl: 'applicationgroups/applicationgrouplist.html'
            })
        ;
    }])
    .controller('ApplicationGroupListCtrl',
        ['$scope', '$interval', '$filter', 'ApplicationGroupsModel', 'CRUDHelperService',
            function ($scope, $interval, $filter, ApplicationGroupsModel, CRUDHelperService) {
                var applicationGroupListCtrl = this;

                function getApplicationGroups(reload) {
                    ApplicationGroupsModel.get(reload)
                        .then(function successCallback(result) {
                            CRUDHelperService.stopLoader(applicationGroupListCtrl);
                            applicationGroupListCtrl.groups = $filter('orderBy')(result, 'groupName');
                        }, function errorCallback(result) {
                            CRUDHelperService.stopLoader(applicationGroupListCtrl);
                        });
                }

                //Load from cache for quick display initially
                getApplicationGroups(false);

                var promise;
                //Don't start auto-refresh if one is already in progress
                if (!angular.isDefined(promise)) {
                    promise = $interval(function () {
                        getApplicationGroups(true);
                    }, 5000);
                }
                //stop polling when user moves away from the page
                $scope.$on('$destroy', function () {
                    $interval.cancel(promise);
                });
            }]);

/**
 * Created by vjain3 on 3/16/16.
 */
angular.module('contiv.applicationgroups')
    .factory('ApplicationGroupService', ['RulesModel', function (RulesModel) {

        /**
         * Add policy to application group
         * @param applicationGroupCtrl Controller for application group edit or create operation
         */
        function addIsolationPolicy(applicationGroupCtrl) {
            if (_.find(applicationGroupCtrl.selectedPolicies, applicationGroupCtrl.selectedPolicy) === undefined ) {
                //To display selected policies
                applicationGroupCtrl.selectedPolicies.push(applicationGroupCtrl.selectedPolicy);

                //To display rules of selected policies
                RulesModel.getIncomingRules(applicationGroupCtrl.selectedPolicy.policyName, 'default')
                    .then(function (rules) {
                        Array.prototype.push.apply(applicationGroupCtrl.incomingRules, rules);
                    });
                RulesModel.getOutgoingRules(applicationGroupCtrl.selectedPolicy.policyName, 'default')
                    .then(function (rules) {
                        Array.prototype.push.apply(applicationGroupCtrl.outgoingRules, rules);
                    });

                //To be added to application group and saved to the server
                applicationGroupCtrl.applicationGroup.policies
                    .push(applicationGroupCtrl.selectedPolicy.policyName);
            }
        }

        /**
         * Remove policy from application group
         * @param applicationGroupCtrl Controller for application group edit or create operation
         */
        function removeIsolationPolicy(applicationGroupCtrl, policyName) {
            _.remove(applicationGroupCtrl.applicationGroup.policies, function (policy) {
                return policy == policyName;
            });
            _.remove(applicationGroupCtrl.incomingRules, function (rule) {
                return rule.policyName == policyName;
            });
            _.remove(applicationGroupCtrl.outgoingRules, function (rule) {
                return rule.policyName == policyName;
            });
        }

        return {
            addIsolationPolicy: addIsolationPolicy,
            removeIsolationPolicy: removeIsolationPolicy
        }

    }]);
/**
 * Created by vjain3 on 3/11/16.
 */
angular.module('contiv.dashboard')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.dashboard', {
                url: '/dashboard',
                controller: 'DashboardCtrl as dashboardCtrl',
                templateUrl: 'dashboard/dashboard.html'
            });
    }])
    .controller('DashboardCtrl',
        [
            '$scope',
            '$interval',
            'NodesModel',
            'NetworksModel',
            'VolumesModel',
            'ApplicationGroupsModel',
            'PoliciesModel',
            'StoragePoliciesModel',
            function ($scope,
                      $interval,
                      NodesModel,
                      NetworksModel,
                      VolumesModel,
                      ApplicationGroupsModel,
                      PoliciesModel,
                      StoragePoliciesModel) {
                var dashboardCtrl = this;

                function getDashboardInfo(reload) {
                    NodesModel.get(reload)
                        .then(function (result) {
                            dashboardCtrl.nodes = result.length;
                        });
                    NetworksModel.get(reload)
                        .then(function (result) {
                            dashboardCtrl.networks = result.length;
                        });
                    VolumesModel.get(reload)
                        .then(function (result) {
                            dashboardCtrl.volumes = result.length;
                        });
                    ApplicationGroupsModel.get(reload)
                        .then(function (result) {
                            dashboardCtrl.groups = result.length;
                        });
                    PoliciesModel.get(reload)
                        .then(function (result) {
                            dashboardCtrl.networkpolicies = result.length;
                        });
                    StoragePoliciesModel.get(reload)
                        .then(function (result) {
                            dashboardCtrl.storagepolicies = result.length;
                        });
                }

                //Will display 0 if there is error fetching data
                dashboardCtrl.nodes = 0;
                dashboardCtrl.networks = 0;
                dashboardCtrl.volumes = 0;
                dashboardCtrl.groups = 0;
                dashboardCtrl.networkpolicies = 0;
                dashboardCtrl.storagepolicies = 0;

                //Load from cache for quick display initially
                getDashboardInfo(false);

                var promise = $interval(function () {
                    getDashboardInfo(true);
                }, 5000);

                //stop polling when user moves away from the page
                $scope.$on('$destroy', function () {
                    $interval.cancel(promise);
                });
            }]);

angular.module('contiv.globalsettings')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.globalsettings.settings.cluster', {
                url: '/cluster',
                controller: 'ClusterSettingCtrl as nodeCommissionCtrl',
                templateUrl: 'global_settings/setting_cluster.html'
            })
        ;
    }])
    .controller('ClusterSettingCtrl', [
        '$state', '$stateParams', 'GlobalsettingsModel', 'CRUDHelperService', 'SettingService',
        function ($state, $stateParams, GlobalsettingsModel, CRUDHelperService, SettingService) {
            var nodeCommissionCtrl = this;

            function returnToMenu() {
                $state.go('contiv.menu.globalsettings.settings');
            }

            function createExtraVars() {
                //Add ansible variables to extra_vars
                nodeCommissionCtrl.ansibleVariables.forEach(function (item) {
                    nodeCommissionCtrl.extra_vars[item.name] = item.value
                });
                //Add environment variables to extra_vars
                var envVars = {};
                nodeCommissionCtrl.envVariables.forEach(function (item) {
                    envVars[item.name] = item.value;
                });
                nodeCommissionCtrl.extra_vars['env'] = envVars;
                nodeCommissionCtrl.nodeOpsObj.extra_vars = JSON.stringify(nodeCommissionCtrl.extra_vars);
            }

            function updateClusterSettings() {
                if (nodeCommissionCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(nodeCommissionCtrl);
                    CRUDHelperService.startLoader(nodeCommissionCtrl);
                    nodeCommissionCtrl.nodeOpsObj.nodes = [$stateParams.key];
                    SettingService.cleanupExtraVars();
                    createExtraVars();
                    GlobalsettingsModel.update(nodeCommissionCtrl.nodeOpsObj).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(nodeCommissionCtrl);
                        returnToMenu();
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(nodeCommissionCtrl);
                        CRUDHelperService.showServerError(nodeCommissionCtrl, result);
                    });
                }
            }

            nodeCommissionCtrl.nodeOpsObj = {};
            nodeCommissionCtrl.extra_vars = {}; //TODO Intialize from global settings
            nodeCommissionCtrl.ansibleVariables = [];
            nodeCommissionCtrl.envVariables = [];

            nodeCommissionCtrl.updateClusterSettings = updateClusterSettings;
            nodeCommissionCtrl.returnToMenu = returnToMenu;

            CRUDHelperService.stopLoader(nodeCommissionCtrl);
            CRUDHelperService.hideServerError(nodeCommissionCtrl);
        }]);

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
/**
 * Created by vjain3 on 5/19/16.
 */
angular.module('contiv.login')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.login', {
                url: '/',
                templateUrl: 'login/login.html',
                controller: 'LoginCtrl as loginCtrl'
            })
        ;
    }])
    .controller('LoginCtrl', ['$state', 'CRUDHelperService',
        function ($state, CRUDHelperService) {
            var loginCtrl = this;

            function returnToDashboard() {
                $state.go('contiv.menu.dashboard', {username: loginCtrl.username});
            }

            function login() {
                returnToDashboard();
            }

            CRUDHelperService.stopLoader(loginCtrl);
            CRUDHelperService.hideServerError(loginCtrl);
            loginCtrl.login = login;

        }]);
/**
 * Created by vjain3 on 5/19/16.
 */
angular.module('contiv.menu')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu', {
                url: '/m',
                templateUrl: 'menu/menu.html',
                controller: 'MenuCtrl as menuCtrl',
                params: {username: null}
            })
        ;
    }])
    .controller('MenuCtrl', ['$state', '$stateParams', function ($state, $stateParams) {
        var menuCtrl = this;

        function logout() {
            $state.go('contiv.login');
        }

        menuCtrl.username = $stateParams.username;
        menuCtrl.logout = logout;

    }]);
/**
 * Created by vjain3 on 3/10/16.
 */
angular.module('contiv.networkpolicies')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.networkpolicies.isolation.create', {
                url: '/create',
                controller: 'IsolationPolicyCreateCtrl as isolationPolicyCreateCtrl',
                templateUrl: 'network_policies/isolationpolicycreate.html'
            })
        ;
    }])
    .controller('IsolationPolicyCreateCtrl', ['$state', 'PoliciesModel', 'CRUDHelperService',
        function ($state, PoliciesModel, CRUDHelperService) {
        var isolationPolicyCreateCtrl = this;

        function returnToPolicies() {
            $state.go('contiv.menu.networkpolicies.isolation.list');
        }

        function cancelCreating() {
            returnToPolicies();
        }

        function createPolicy() {
            if (isolationPolicyCreateCtrl.form.$valid) {
                CRUDHelperService.hideServerError(isolationPolicyCreateCtrl);
                CRUDHelperService.startLoader(isolationPolicyCreateCtrl);
                isolationPolicyCreateCtrl.newPolicy.key =
                    PoliciesModel.generateKey(isolationPolicyCreateCtrl.newPolicy);
                PoliciesModel.create(isolationPolicyCreateCtrl.newPolicy).then(function successCallback(result) {
                    CRUDHelperService.stopLoader(isolationPolicyCreateCtrl);
                    returnToPolicies();
                }, function errorCallback(result) {
                    CRUDHelperService.stopLoader(isolationPolicyCreateCtrl);
                    CRUDHelperService.showServerError(isolationPolicyCreateCtrl, result);
                });
            }
        }

        function resetForm() {
            CRUDHelperService.stopLoader(isolationPolicyCreateCtrl);
            CRUDHelperService.hideServerError(isolationPolicyCreateCtrl);
            isolationPolicyCreateCtrl.newPolicy = {
                policyName: '',
                tenantName: 'default'//TODO: Remove hardcoded tenant.
            };
        }

        isolationPolicyCreateCtrl.createPolicy = createPolicy;
        isolationPolicyCreateCtrl.cancelCreating = cancelCreating;

        resetForm();
    }]);

/**
 * Created by vjain3 on 3/8/16.
 */
angular.module('contiv.networkpolicies')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.networkpolicies.isolation.details', {
                url: '/details/:key',
                controller: 'IsolationPolicyDetailsCtrl as isolationPolicyDetailsCtrl',
                templateUrl: 'network_policies/isolationpolicydetails.html'
            });
    }])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.networkpolicies.isolation.edit', {
                url: '/edit/:key',
                controller: 'IsolationPolicyDetailsCtrl as isolationPolicyDetailsCtrl',
                templateUrl: 'network_policies/isolationpolicydetails.html'
            });
    }])
    .controller('IsolationPolicyDetailsCtrl', [
        '$state',
        '$stateParams',
        'PoliciesModel',
        'RulesModel',
        'NetworksModel',
        'ApplicationGroupsModel',
        'CRUDHelperService',
        function ($state, $stateParams, PoliciesModel, RulesModel, NetworksModel, ApplicationGroupsModel, CRUDHelperService) {
            var isolationPolicyDetailsCtrl = this;
            isolationPolicyDetailsCtrl.networks = [];
            isolationPolicyDetailsCtrl.applicationGroups = [];
            isolationPolicyDetailsCtrl.disableOutgoingNetworkSelection = false;
            isolationPolicyDetailsCtrl.disableIncomingNetworkSelection = false;
            isolationPolicyDetailsCtrl.disableOutgoingApplicationGroupSelection = false;
            isolationPolicyDetailsCtrl.disableIncomingApplicationGroupSelection = false;
            isolationPolicyDetailsCtrl.newIncomingSelectedApplicationGroup = '';
            isolationPolicyDetailsCtrl.newOutgoingSelectedApplicationGroup = '';

            function returnToPolicies() {
                $state.go('contiv.menu.networkpolicies.isolation.list');
            }

            function returnToPolicyDetails() {
                $state.go('contiv.menu.networkpolicies.isolation.details', {key: isolationPolicyDetailsCtrl.policy.key});
            }

            function cancelEditing() {
                returnToPolicyDetails();
            }

            /**
             * Go back to policy details after done editing
             */
            function doneEditing() {
                returnToPolicyDetails();
            }

            function deletePolicy() {
                CRUDHelperService.hideServerError(isolationPolicyDetailsCtrl);
                CRUDHelperService.startLoader(isolationPolicyDetailsCtrl);
                PoliciesModel.delete(isolationPolicyDetailsCtrl.policy).then(function successCallback(result) {
                    CRUDHelperService.stopLoader(isolationPolicyDetailsCtrl);
                    returnToPolicies();
                }, function errorCallback(result) {
                    CRUDHelperService.stopLoader(isolationPolicyDetailsCtrl);
                    CRUDHelperService.showServerError(isolationPolicyDetailsCtrl, result);
                });
            }

            /**
             * To show edit or details screen based on the route
             */
            function setMode() {
                if ($state.is('contiv.menu.networkpolicies.isolation.edit')) {
                    isolationPolicyDetailsCtrl.mode = 'edit';
                } else {
                    isolationPolicyDetailsCtrl.mode = 'details';
                }
            }

            function resetNewIncomingRule() {
                //Rule object to be created on server
                isolationPolicyDetailsCtrl.newIncomingRule = {
                    ruleId: '',
                    priority: 1,
                    action: 'allow',//to make it default selected option in UI
                    fromEndpointGroup: '',
                    fromNetwork: '',
                    fromIPAddress: '',
                    protocol: 'tcp',//to make it default selected option in UI
                    port: '',
                    direction: 'in',
                    tenantName: 'default',
                    policyName: isolationPolicyDetailsCtrl.policy.policyName
                };
                isolationPolicyDetailsCtrl.newIncomingSelectedApplicationGroup = '';
                isolationPolicyDetailsCtrl.disableIncomingNetworkSelection = false;
                isolationPolicyDetailsCtrl.disableIncomingApplicationGroupSelection = false;
            }

            function resetNewOutgoingRule() {
                //Rule object to be created on server
                isolationPolicyDetailsCtrl.newOutgoingRule = {
                    ruleId: '',
                    priority: 1,
                    action: 'allow',//to make it default selected option in UI
                    toEndpointGroup: '',
                    toNetwork: '',
                    toIPAddress: '',
                    protocol: 'tcp',//to make it default selected option in UI
                    port: '',
                    direction: 'out',
                    tenantName: 'default',
                    policyName: isolationPolicyDetailsCtrl.policy.policyName
                };
                isolationPolicyDetailsCtrl.newOutgoingSelectedApplicationGroup = '';
                isolationPolicyDetailsCtrl.disableOutgoingNetworkSelection = false;
                isolationPolicyDetailsCtrl.disableOutgoingApplicationGroupSelection = false;
            }

            /**
             * Get network names for the given tenant.
             */
            function getNetworks() {
                NetworksModel.get().then(function (result) {
                    //_.filter() returns a new array
                    isolationPolicyDetailsCtrl.networks = _.filter(result, {
                        'tenantName': 'default'//TODO: Remove hardcoded tenant.
                    });
                });
            }

            /**
             * Get application group names for the given tenant.
             */
            function getApplicationGroups() {
                ApplicationGroupsModel.get()
                    .then(function (result) {
                        //_.filter() returns a new array
                        isolationPolicyDetailsCtrl.applicationGroups = _.filter(result, {
                            'tenantName': 'default'//TODO: Remove hardcoded tenant.
                        });
                    });
            }

            /**
             * Event handler to disable network selection box once application group is selected while creating a new
             * rule.
             */
            function onChangeOutgoingApplicationGroupSelection() {
                if (isolationPolicyDetailsCtrl.newOutgoingSelectedApplicationGroup != null) {
                    //If application group has been selected
                    isolationPolicyDetailsCtrl.newOutgoingRule.toEndpointGroup =
                        isolationPolicyDetailsCtrl.newOutgoingSelectedApplicationGroup.groupName;
                    isolationPolicyDetailsCtrl.newOutgoingRule.toNetwork = '';
                    isolationPolicyDetailsCtrl.disableOutgoingNetworkSelection = true;
                } else {
                    //When 'none' is selected
                    isolationPolicyDetailsCtrl.newOutgoingRule.toEndpointGroup = '';
                    isolationPolicyDetailsCtrl.disableOutgoingNetworkSelection = false;
                }
            }

            /**
             * Event handler to disable network selection box once application group is selected while creating a new
             * rule.
             */
            function onChangeIncomingApplicationGroupSelection() {
                if (isolationPolicyDetailsCtrl.newIncomingSelectedApplicationGroup != null) {
                    //If application group has been selected
                    isolationPolicyDetailsCtrl.newIncomingRule.fromEndpointGroup =
                        isolationPolicyDetailsCtrl.newIncomingSelectedApplicationGroup.groupName;
                    isolationPolicyDetailsCtrl.newIncomingRule.fromNetwork = '';
                    isolationPolicyDetailsCtrl.disableIncomingNetworkSelection = true;
                } else {
                    //When 'none' is selected
                    isolationPolicyDetailsCtrl.newIncomingRule.fromEndpointGroup = '';
                    isolationPolicyDetailsCtrl.disableIncomingNetworkSelection = false;
                }

            }

            /**
             * Event handler to disable application group selection box once network is selected while creating a new
             * rule.
             */
            function onChangeOutgoingNetworkSelection() {
                if (isolationPolicyDetailsCtrl.newOutgoingRule.toNetwork != null) {
                    //If network has been selected
                    isolationPolicyDetailsCtrl.newOutgoingRule.ToEndpointGroup = '';
                    isolationPolicyDetailsCtrl.disableOutgoingApplicationGroupSelection = true;
                } else {
                    isolationPolicyDetailsCtrl.disableOutgoingApplicationGroupSelection = false;
                }
            }

            /**
             * Event handler to disable application group selection box once network is selected while creating a new
             * rule.
             */
            function onChangeIncomingNetworkSelection() {
                if (isolationPolicyDetailsCtrl.newIncomingRule.fromNetwork != null) {
                    //If network has been selected
                    isolationPolicyDetailsCtrl.newIncomingRule.fromEndpointGroup = '';
                    isolationPolicyDetailsCtrl.disableIncomingApplicationGroupSelection = true;
                } else {
                    isolationPolicyDetailsCtrl.disableIncomingApplicationGroupSelection = false;
                }
            }
            /**
             * Generates rule id
             * TODO Make it cryptographically stronger once we have multiple users updating same policy
             */
            function generateRuleId(rule) {
                rule.ruleId =
                    (isolationPolicyDetailsCtrl.incomingRules.length + isolationPolicyDetailsCtrl.outgoingRules.length + 1).toString() + '-' +
                    Date.now().toString();
            }

            /**
             * Rule is saved to server
             */
            function addIncomingRule() {
                CRUDHelperService.hideServerError(isolationPolicyDetailsCtrl);
                CRUDHelperService.startLoader(isolationPolicyDetailsCtrl);
                generateRuleId(isolationPolicyDetailsCtrl.newIncomingRule);
                isolationPolicyDetailsCtrl.newIncomingRule.key = RulesModel.generateKey(isolationPolicyDetailsCtrl.newIncomingRule);
                RulesModel.create(isolationPolicyDetailsCtrl.newIncomingRule).then(function successCallback(result) {
                    CRUDHelperService.stopLoader(isolationPolicyDetailsCtrl);
                    isolationPolicyDetailsCtrl.incomingRules.push(result);
                    resetNewIncomingRule();
                }, function errorCallback(result) {
                    CRUDHelperService.stopLoader(isolationPolicyDetailsCtrl);
                    CRUDHelperService.showServerError(isolationPolicyDetailsCtrl, result);
                });
            }

            /**
             * Rule is saved to server
             */
            function addOutgoingRule() {
                CRUDHelperService.hideServerError(isolationPolicyDetailsCtrl);
                CRUDHelperService.startLoader(isolationPolicyDetailsCtrl);
                generateRuleId(isolationPolicyDetailsCtrl.newOutgoingRule);
                isolationPolicyDetailsCtrl.newOutgoingRule.key = RulesModel.generateKey(isolationPolicyDetailsCtrl.newOutgoingRule);
                RulesModel.create(isolationPolicyDetailsCtrl.newOutgoingRule).then(function successCallback(result) {
                    CRUDHelperService.stopLoader(isolationPolicyDetailsCtrl);
                    isolationPolicyDetailsCtrl.outgoingRules.push(result);
                    resetNewOutgoingRule();
                }, function errorCallback(result) {
                    CRUDHelperService.stopLoader(isolationPolicyDetailsCtrl);
                    CRUDHelperService.showServerError(isolationPolicyDetailsCtrl, result);
                });
            }

            /**
             * Delete incoming rule from server
             */
            function deleteIncomingRule(key) {
                CRUDHelperService.hideServerError(isolationPolicyDetailsCtrl);
                CRUDHelperService.startLoader(isolationPolicyDetailsCtrl);
                RulesModel.deleteUsingKey(key).then(function successCallback(result) {
                    CRUDHelperService.stopLoader(isolationPolicyDetailsCtrl);
                    _.remove(isolationPolicyDetailsCtrl.incomingRules, function (n) {
                        return n.key == key;
                    });
                }, function errorCallback(result) {
                    CRUDHelperService.stopLoader(isolationPolicyDetailsCtrl);
                    CRUDHelperService.showServerError(isolationPolicyDetailsCtrl, result);
                });
            }

            /**
             * Delete outgoing rule from server
             */
            function deleteOutgoingRule(key) {
                CRUDHelperService.hideServerError(isolationPolicyDetailsCtrl);
                CRUDHelperService.startLoader(isolationPolicyDetailsCtrl);
                RulesModel.deleteUsingKey(key).then(function successCallback(result) {
                    CRUDHelperService.stopLoader(isolationPolicyDetailsCtrl);
                    _.remove(isolationPolicyDetailsCtrl.outgoingRules, function (n) {
                        return n.key == key;
                    });
                }, function errorCallback(result) {
                    CRUDHelperService.stopLoader(isolationPolicyDetailsCtrl);
                    CRUDHelperService.showServerError(isolationPolicyDetailsCtrl, result);
                });
            }

            CRUDHelperService.stopLoader(isolationPolicyDetailsCtrl);
            CRUDHelperService.hideServerError(isolationPolicyDetailsCtrl);

            PoliciesModel.getModelByKey($stateParams.key)
                .then(function (policy) {
                    isolationPolicyDetailsCtrl.policy = policy;
                    RulesModel.getIncomingRules(policy.policyName, 'default').then(function (result) {
                        isolationPolicyDetailsCtrl.incomingRules = result;
                        resetNewIncomingRule();
                    });
                    RulesModel.getOutgoingRules(policy.policyName, 'default').then(function (result) {
                        isolationPolicyDetailsCtrl.outgoingRules = result;
                        resetNewOutgoingRule();
                    });
                });

            getNetworks();
            getApplicationGroups();
            isolationPolicyDetailsCtrl.deletePolicy = deletePolicy;
            isolationPolicyDetailsCtrl.deleteIncomingRule = deleteIncomingRule;
            isolationPolicyDetailsCtrl.deleteOutgoingRule = deleteOutgoingRule;
            isolationPolicyDetailsCtrl.addIncomingRule = addIncomingRule;
            isolationPolicyDetailsCtrl.addOutgoingRule = addOutgoingRule;
            isolationPolicyDetailsCtrl.doneEditing = doneEditing;
            isolationPolicyDetailsCtrl.cancelEditing = cancelEditing;
            //Event Handlers
            isolationPolicyDetailsCtrl.onChangeOutgoingApplicationGroupSelection = onChangeOutgoingApplicationGroupSelection;
            isolationPolicyDetailsCtrl.onChangeIncomingApplicationGroupSelection = onChangeIncomingApplicationGroupSelection;
            isolationPolicyDetailsCtrl.onChangeOutgoingNetworkSelection = onChangeOutgoingNetworkSelection;
            isolationPolicyDetailsCtrl.onChangeIncomingNetworkSelection = onChangeIncomingNetworkSelection;

            setMode();

        }]);
angular.module('contiv.networkpolicies')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.networkpolicies.isolation.list', {
                url: '/list',
                controller: 'IsolationPolicyListCtrl as isolationPolicyListCtrl',
                templateUrl: 'network_policies/isolationpolicylist.html'
            })
        ;
    }])
    .controller('IsolationPolicyListCtrl', ['$scope', '$interval', '$filter', 'PoliciesModel', 'CRUDHelperService',
        function ($scope, $interval, $filter, PoliciesModel, CRUDHelperService) {
            var policiesListCtrl = this;

            function getPolicies(reload) {
                PoliciesModel.get(reload)
                    .then(function successCallback(result) {
                        CRUDHelperService.stopLoader(policiesListCtrl);
                        policiesListCtrl.policies = $filter('orderBy')(result, 'policyName');
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(policiesListCtrl);
                    });
            }

            //Load from cache for quick display initially
            getPolicies(false);

            var promise;
            //Don't start auto-refresh if one is already in progress
            if (!angular.isDefined(promise)) {
                promise = $interval(function () {
                    getPolicies(true);
                }, ContivGlobals.REFRESH_INTERVAL);
            }
            //stop polling when user moves away from the page
            $scope.$on('$destroy', function () {
                $interval.cancel(promise);
            });
        }]);

/**
 * Created by vjain3 on 3/9/16.
 */
angular.module('contiv.networkpolicies')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.networkpolicies', {
                url: '/networkpolicies',
                controller: 'NetworkPoliciesTabsCtrl as networkPoliciesTabsCtrl',
                templateUrl: 'network_policies/networkpoliciestabs.html'
            })
            .state('contiv.menu.networkpolicies.isolation', {
                url: '/isolation',
                abstract: true,
                template: '<ui-view/>'
            })
            .state('contiv.menu.networkpolicies.prioritization', {
                url: '/prioritization',
                controller: 'NetworkPoliciesTabsCtrl as networkPoliciesTabsCtrl',
                templateUrl: 'network_policies/prioritizationpolicylist.html'
            })
            .state('contiv.menu.networkpolicies.bandwidth', {
                url: '/bandwidth',
                controller: 'NetworkPoliciesTabsCtrl as networkPoliciesTabsCtrl',
                templateUrl: 'network_policies/bandwidthpolicylist.html'
            })
            .state('contiv.menu.networkpolicies.redirection', {
                url: '/redirection',
                controller: 'NetworkPoliciesTabsCtrl as networkPoliciesTabsCtrl',
                templateUrl: 'network_policies/redirectionpolicylist.html'
            })
        ;
    }])
    .controller('NetworkPoliciesTabsCtrl', ['$state', function ($state) {
    }]);

/**
 * Created by vjain3 on 2/19/16.
 */
angular.module('contiv.networks')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.networks.create', {
                url: '/create',
                templateUrl: 'networks/networkcreate.html',
                controller: 'NetworkCreateCtrl as networkCreateCtrl'
            })
        ;
    }])
    .controller('NetworkCreateCtrl', ['$state', '$stateParams', 'NetworksModel', 'CRUDHelperService',
        function ($state, $stateParams, NetworksModel, CRUDHelperService) {
            var networkCreateCtrl = this;
            networkCreateCtrl.cidrPattern = ContivGlobals.CIDR_REGEX;

            function returnToNetworks() {
                $state.go('contiv.menu.networks.list');
            }

            function cancelCreating() {
                returnToNetworks();
            }

            function createNetwork() {
                //form controller is injected by the html template
                //checking if all validations have passed
                if (networkCreateCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(networkCreateCtrl);
                    CRUDHelperService.startLoader(networkCreateCtrl);
                    networkCreateCtrl.newNetwork.key =
                        networkCreateCtrl.newNetwork.tenantName + ':' + networkCreateCtrl.newNetwork.networkName;
                    NetworksModel.create(networkCreateCtrl.newNetwork).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(networkCreateCtrl);
                        returnToNetworks();
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(networkCreateCtrl);
                        CRUDHelperService.showServerError(networkCreateCtrl, result);
                    });
                }

            }

            function resetForm() {
                CRUDHelperService.stopLoader(networkCreateCtrl);
                CRUDHelperService.hideServerError(networkCreateCtrl);
                networkCreateCtrl.newNetwork = {
                    networkName: '',
                    encap: 'vxlan',
                    subnet: '',
                    gateway: '',
                    tenantName: 'default'//TODO: Remove hardcoded tenant.
                };
            }

            networkCreateCtrl.createNetwork = createNetwork;
            networkCreateCtrl.cancelCreating = cancelCreating;

            resetForm();
        }]);

angular.module('contiv.networks')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.networks.details', {
                url: '/details/:key',
                controller: 'NetworkDetailsCtrl as networkDetailsCtrl',
                templateUrl: 'networks/networkdetails.html'
            });
    }])
    .controller('NetworkDetailsCtrl',
        ['$state', '$stateParams', '$scope', '$interval', '$filter', 'NetworksModel', 'ApplicationGroupsModel', 'CRUDHelperService',
            function ($state, $stateParams, $scope, $interval, $filter, NetworksModel, ApplicationGroupsModel, CRUDHelperService) {
                var networkDetailsCtrl = this;

                function returnToNetworks() {
                    $state.go('contiv.menu.networks.list');
                }

                function deleteNetwork() {
                    CRUDHelperService.hideServerError(networkDetailsCtrl);
                    CRUDHelperService.startLoader(networkDetailsCtrl);
                    NetworksModel.delete(networkDetailsCtrl.network).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(networkDetailsCtrl);
                        returnToNetworks();
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(networkDetailsCtrl);
                        CRUDHelperService.showServerError(networkDetailsCtrl, result);
                    });
                }

                /**
                 * Get application groups belonging to a network
                 */
                function getApplicationGroups(reload) {
                    ApplicationGroupsModel.get(reload).then(function (result) {
                        networkDetailsCtrl.applicationGroups = $filter('orderBy')(_.filter(result, {
                            'networkName': networkDetailsCtrl.network.networkName
                        }), 'groupName');
                    });
                }

                CRUDHelperService.stopLoader(networkDetailsCtrl);
                CRUDHelperService.hideServerError(networkDetailsCtrl);

                NetworksModel.getModelByKey($stateParams.key)
                    .then(function (network) {
                        networkDetailsCtrl.network = network;
                        getApplicationGroups(false);
                    });

                networkDetailsCtrl.deleteNetwork = deleteNetwork;

                var promise;
                //Don't do autorefresh if one is already in progress
                if (!angular.isDefined(promise)) {
                    promise = $interval(function () {
                        getApplicationGroups(true);
                    }, ContivGlobals.REFRESH_INTERVAL);
                }

                //stop polling when user moves away from the page
                $scope.$on('$destroy', function () {
                    $interval.cancel(promise);
                });
            }]);

angular.module('contiv.networks')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.networks.list', {
                url: '/list',
                controller: 'NetworksListCtrl as networksListCtrl',
                templateUrl: 'networks/networklist.html'
            })
        ;
    }])
    .controller('NetworksListCtrl', ['$scope', '$interval', '$filter', 'NetworksModel', 'CRUDHelperService',
        function ($scope, $interval, $filter, NetworksModel, CRUDHelperService) {
            var networksListCtrl = this;

            function getNetworks(reload) {
                NetworksModel.get(reload)
                    .then(function successCallback(result) {
                            CRUDHelperService.stopLoader(networksListCtrl);
                            networksListCtrl.networks = $filter('orderBy')(result, 'networkName');
                        },
                        function errorCallback(result) {
                            CRUDHelperService.stopLoader(networksListCtrl);
                        });
            }

            //Load from cache for quick display initially
            getNetworks(false);

            var promise;
            //Don't do autorefresh if one is already in progress
            if (!angular.isDefined(promise)) {
                promise = $interval(function () {
                    getNetworks(true);
                }, ContivGlobals.REFRESH_INTERVAL);
            }

            //stop polling when user moves away from the page
            $scope.$on('$destroy', function () {
                $interval.cancel(promise);
            });
        }]);

/**
 * Created by vjain3 on 3/25/16.
 */
angular.module('contiv.nodes')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.nodes.commission', {
                url: '/commission/:key',
                controller: 'NodeCommissionCtrl as nodeCommissionCtrl',
                templateUrl: 'nodes/nodecommission.html'
            })
        ;
    }])
    .controller('NodeCommissionCtrl', [
        '$state', '$stateParams', 'NodesModel', 'CRUDHelperService', 'SettingService',
        function ($state, $stateParams, NodesModel, CRUDHelperService, SettingService) {
            var nodeCommissionCtrl = this;

            function returnToNodeDetails() {
                $state.go('contiv.menu.nodes.details.info', {'key': $stateParams.key});
            }

            function cancelCommissioningNode() {
                returnToNodeDetails();
            }

            function createExtraVars() {
                //Add ansible variables to extra_vars
                nodeCommissionCtrl.ansibleVariables.forEach(function (item) {
                    nodeCommissionCtrl.extra_vars[item.name] = item.value
                });
                //Add environment variables to extra_vars
                var envVars = {};
                nodeCommissionCtrl.envVariables.forEach(function (item) {
                    envVars[item.name] = item.value;
                });
                nodeCommissionCtrl.extra_vars['env'] = envVars;
                nodeCommissionCtrl.nodeOpsObj.extra_vars = JSON.stringify(nodeCommissionCtrl.extra_vars);
            }

            function commission() {
                if (nodeCommissionCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(nodeCommissionCtrl);
                    CRUDHelperService.startLoader(nodeCommissionCtrl);
                    nodeCommissionCtrl.nodeOpsObj.nodes = [$stateParams.key];
                    SettingService.cleanupExtraVars();
                    createExtraVars();
                    NodesModel.commission(nodeCommissionCtrl.nodeOpsObj).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(nodeCommissionCtrl);
                        returnToNodeDetails();
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(nodeCommissionCtrl);
                        CRUDHelperService.showServerError(nodeCommissionCtrl, result);
                    });
                }
            }

            nodeCommissionCtrl.nodeOpsObj = {};
            nodeCommissionCtrl.extra_vars = {}; //TODO Intialize from global settings
            nodeCommissionCtrl.ansibleVariables = [];
            nodeCommissionCtrl.envVariables = [];

            nodeCommissionCtrl.cancelCommissioningNode = cancelCommissioningNode;
            nodeCommissionCtrl.commission = commission;

            CRUDHelperService.stopLoader(nodeCommissionCtrl);
            CRUDHelperService.hideServerError(nodeCommissionCtrl);
        }]);

/**
 * Created by vjain3 on 3/25/16.
 */
angular.module('contiv.nodes')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.nodes.details', {
                url: '/details/:key',
                controller: 'NodeDetailsCtrl as nodeDetailsCtrl',
                templateUrl: 'nodes/nodedetails.html'
            })
            .state('contiv.menu.nodes.details.info', {
                url: '/info',
                controller: 'NodeDetailsCtrl as nodeDetailsCtrl',
                templateUrl: 'nodes/nodeinfo.html'
            })
            .state('contiv.menu.nodes.details.stats', {
                url: '/stats',
                controller: 'NodeDetailsCtrl as nodeDetailsCtrl',
                templateUrl: 'nodes/nodestats.html'
            })
            .state('contiv.menu.nodes.details.logs', {
                url: '/logs',
                controller: 'NodeDetailsCtrl as nodeDetailsCtrl',
                templateUrl: 'nodes/nodelogs.html'
            })
        ;
    }])
    .controller('NodeDetailsCtrl', ['$state', '$stateParams', '$scope', '$interval', 'NodesModel',
        function ($state, $stateParams, $scope, $interval, NodesModel) {
            var nodeDetailsCtrl = this;

            function decommission() {
                var nodeOpsObj = {
                  nodes: [$stateParams.key]
                };
                NodesModel.decommission(nodeOpsObj).then(function (result) {
                    //Disable all buttons initially. Poll will assign values appropriately.
                    nodeDetailsCtrl.showCommissionButton = false;
                    nodeDetailsCtrl.commissionButtonEnabled = false;
                    nodeDetailsCtrl.upgradeButtonEnabled = false;
                });
            }

            function upgrade() {
                var nodeOpsObj = {
                    nodes: [$stateParams.key]
                };
                NodesModel.upgrade(nodeOpsObj).then(function (result) {
                    //Disable all buttons initially. Poll will assign values appropriately.
                    nodeDetailsCtrl.showCommissionButton = false;
                    nodeDetailsCtrl.commissionButtonEnabled = false;
                    nodeDetailsCtrl.upgradeButtonEnabled = false;
                });
            }

            /**
             * Display buttons based on status of node
             */
            function setButtonDisplay() {
                switch (nodeDetailsCtrl.node['inventory_state'].status) {
                    case 'Unallocated':
                        nodeDetailsCtrl.showCommissionButton = true;
                        nodeDetailsCtrl.commissionButtonEnabled = true;
                        nodeDetailsCtrl.upgradeButtonEnabled = false;
                        break;
                    case 'Decommissioned':
                        nodeDetailsCtrl.showCommissionButton = true;
                        nodeDetailsCtrl.commissionButtonEnabled = true;
                        nodeDetailsCtrl.upgradeButtonEnabled = false;
                        break;
                    case 'Provisioning':
                        nodeDetailsCtrl.showCommissionButton = true;
                        nodeDetailsCtrl.commissionButtonEnabled = false;
                        nodeDetailsCtrl.upgradeButtonEnabled = false;
                        break;
                    case 'Allocated':
                        nodeDetailsCtrl.showCommissionButton = false;
                        nodeDetailsCtrl.commissionButtonEnabled = true;
                        nodeDetailsCtrl.upgradeButtonEnabled = true;
                        break;
                    case 'Cancelled':
                        nodeDetailsCtrl.showCommissionButton = false;
                        nodeDetailsCtrl.commissionButtonEnabled = false;
                        nodeDetailsCtrl.upgradeButtonEnabled = false;
                        break;
                    case 'Maintenance':
                        nodeDetailsCtrl.showCommissionButton = true;
                        nodeDetailsCtrl.commissionButtonEnabled = false;
                        nodeDetailsCtrl.upgradeButtonEnabled = false;
                        break;
                    default://Cluster should not be in this state
                        nodeDetailsCtrl.showCommissionButton = true;
                        nodeDetailsCtrl.commissionButtonEnabled = false;
                        nodeDetailsCtrl.upgradeButtonEnabled = false;
                        break;
                }
            }

            function getNodeInfo(reload) {
                NodesModel.getModelByKey($stateParams.key, reload)
                    .then(function (node) {
                        nodeDetailsCtrl.node = node;
                        setButtonDisplay();
                    });
            }

            nodeDetailsCtrl.decommission = decommission;
            nodeDetailsCtrl.upgrade = upgrade;

            //Load from cache for quick display initially
            getNodeInfo(false);

            var promise;
            //Don't do auto-refresh if one is already in progress
            if (!angular.isDefined(promise)) {
                promise = $interval(function () {
                    getNodeInfo(true);
                }, 5000);
            }
            //stop polling when user moves away from the page
            $scope.$on('$destroy', function () {
                $interval.cancel(promise);
            });

        }]);
/**
 * Created by vjain3 on 6/14/16.
 */
angular.module("contiv.nodes")
    .directive("ctvNodestatus", function() {
        return {
            restrict: 'E',
            scope: {
                node: '='
            },
            templateUrl: 'nodes/nodestatus.html'
        }
    })
    .directive("ctvNodestate", function() {
        return {
            restrict: 'E',
            scope: {
                node: '='
            },
            templateUrl: 'nodes/nodestate.html'
        }
    });
angular.module('contiv.nodes')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.nodes.discover', {
                url: '/discover',
                controller: 'NodeDiscoverCtrl as nodeCommissionCtrl',
                templateUrl: 'nodes/nodediscover.html'
            })
        ;
    }])
    .controller('NodeDiscoverCtrl', [
        '$state', '$stateParams', 'NodesModel', 'CRUDHelperService', 
        function ($state, $stateParams, NodesModel, CRUDHelperService) {
            var nodeCommissionCtrl = this;

            function returnToNodes() {
                $state.go('contiv.menu.nodes.list');
            }

            function cancelDiscoveringNode() {
                returnToNodes();
            }

            function createExtraVars() {
                //Add ansible variables to extra_vars
                nodeCommissionCtrl.ansibleVariables.forEach(function (item) {
                    nodeCommissionCtrl.extra_vars[item.name] = item.value
                });
                //Add environment variables to extra_vars
                var envVars = {};
                nodeCommissionCtrl.envVariables.forEach(function (item) {
                    envVars[item.name] = item.value;
                });
                nodeCommissionCtrl.extra_vars['env'] = envVars;
                nodeCommissionCtrl.nodeOpsObj.extra_vars = JSON.stringify(nodeCommissionCtrl.extra_vars);
            }

            function discover() {
                if (nodeCommissionCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(nodeCommissionCtrl);
                    CRUDHelperService.startLoader(nodeCommissionCtrl);
                    createIPAddrArray();
                    createExtraVars();
                    NodesModel.discover(nodeCommissionCtrl.nodeOpsObj).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(nodeCommissionCtrl);
                        returnToNodes();
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(nodeCommissionCtrl);
                        CRUDHelperService.showServerError(nodeCommissionCtrl, result);
                    });
                }
            }

            function createIPAddrArray() {
                nodeCommissionCtrl.nodeOpsObj.addrs = _.words(nodeCommissionCtrl.nodeIPAddr, /[^, ]+/g);
            }

            nodeCommissionCtrl.nodeOpsObj = {};
            nodeCommissionCtrl.extra_vars = {}; //TODO Intialize from global settings
            nodeCommissionCtrl.ansibleVariables = [];
            nodeCommissionCtrl.envVariables = [];
            nodeCommissionCtrl.nodeIPAddr = ''; //IP address of nodes to discover

            nodeCommissionCtrl.discover = discover;
            nodeCommissionCtrl.cancelDiscoveringNode = cancelDiscoveringNode;

            CRUDHelperService.stopLoader(nodeCommissionCtrl);
            CRUDHelperService.hideServerError(nodeCommissionCtrl);
        }]);

/**
 * Created by vjain3 on 3/22/16.
 */
angular.module('contiv.nodes')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.nodes.list', {
                url: '/list',
                controller: 'NodeListCtrl as nodeListCtrl',
                templateUrl: 'nodes/nodelist.html'
            })
        ;
    }])
    .controller('NodeListCtrl', ['$scope', '$interval', '$filter', 'NodesModel', 'CRUDHelperService', 'NodeService',
        function ($scope, $interval, $filter, NodesModel, CRUDHelperService, NodeService) {
        var nodeListCtrl = this;

        function getNodes(reload) {
            NodesModel.get(reload)
                .then(function successCallback(result) {
                    CRUDHelperService.stopLoader(nodeListCtrl);
                    nodeListCtrl.nodes = $filter('orderBy')(result, 'key');
                }, function errorCallback(result) {
                    CRUDHelperService.stopLoader(nodeListCtrl);
                });
                getActiveLogs();
                getLastLogs();
        }

        function getActiveLogs() {
            NodeService.getActiveLogs().then(function successCallback(result) {
                nodeListCtrl.activeLogs = result;
            }, function errorCallback(result) {
                //Once the job finishes, endpoint returns 500 error. So reset the activeLogs
                nodeListCtrl.activeLogs = {
                    desc: 'There is currently no active job. Check Last Job for a job that recently finished.'
                };
            });
        }

        function getLastLogs() {
            NodeService.getLastLogs().then(function successCallback(result) {
                nodeListCtrl.lastLogs = result;
            }, function errorCallback(result) {
            });
        }

        nodeListCtrl.getActiveLogs = getActiveLogs;
        nodeListCtrl.getLastLogs = getLastLogs;

        //Load from cache for quick display initially
        getNodes(false);

        var promise;
        //Don't do auto-refresh if one is already in progress
        if (!angular.isDefined(promise)) {
            promise = $interval(function () {
                getNodes(true);
            }, ContivGlobals.REFRESH_INTERVAL);
        }
        //stop polling when user moves away from the page
        $scope.$on('$destroy', function () {
            $interval.cancel(promise);
        });
    }]);
angular.module('contiv.nodes')
    .factory('NodeService', ['$http', '$q', function ($http, $q) {
        function getActiveLogs() {
            var deferred = $q.defer();
            var url = ContivGlobals.NODES_ACTIVE_JOB_ENDPOINT;
            $http.get(url).then(function successCallback(result) {
                deferred.resolve(result.data);
            }, function errorCallback(result) {
                deferred.reject(result.data);
            });
            return deferred.promise;
        }

        function getLastLogs() {
            var deferred = $q.defer();
            var url = ContivGlobals.NODES_LAST_JOB_ENDPOINT;
            $http.get(url).then(function successCallback(result) {
                deferred.resolve(result.data);
            }, function errorCallback(result) {
                deferred.reject(result.data);
            });
            return deferred.promise;
        }

        return {
            getActiveLogs: getActiveLogs,
            getLastLogs: getLastLogs
        }
    }]);
angular.module('contiv.organizations')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.organizations.create', {
                url: '/create',
                templateUrl: 'organizations/organizationcreate.html',
                controller: 'OrganizationCreateCtrl as organizationCreateCtrl'
            })
        ;
    }])
    .controller('OrganizationCreateCtrl', ['$state', '$stateParams', 'OrganizationsModel', 'CRUDHelperService',
        function ($state, $stateParams, OrganizationsModel, CRUDHelperService) {
            var organizationCreateCtrl = this;

            function returnToOrganizations() {
                $state.go('contiv.menu.organizations.list');
            }

            function cancelCreating() {
                returnToOrganizations();
            }

            function createOrganization() {
                //form controller is injected by the html template
                //checking if all validations have passed
                if (organizationCreateCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(organizationCreateCtrl);
                    CRUDHelperService.startLoader(organizationCreateCtrl);
                    organizationCreateCtrl.newOrganization.key = organizationCreateCtrl.newOrganization.tenantName; 
                    OrganizationsModel.create(organizationCreateCtrl.newOrganization).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(organizationCreateCtrl);
                        returnToOrganizations();
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(organizationCreateCtrl);
                        CRUDHelperService.showServerError(organizationCreateCtrl, result);
                    });
                }
            }

            function resetForm() {
                CRUDHelperService.stopLoader(organizationCreateCtrl);
                CRUDHelperService.hideServerError(organizationCreateCtrl);
                organizationCreateCtrl.newOrganization = {
                    tenantName: ''
                };
            }

            organizationCreateCtrl.createOrganization = createOrganization;
            organizationCreateCtrl.cancelCreating = cancelCreating;

            resetForm();
        }]);

angular.module('contiv.organizations')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.organizations.details', {
                url: '/details/:key',
                controller: 'OrganizationDetailsCtrl as organizationDetailsCtrl',
                templateUrl: 'organizations/organizationdetails.html'
            });
    }])
    .controller('OrganizationDetailsCtrl',
        ['$state', '$stateParams', '$scope', '$interval', '$filter', 'OrganizationsModel', 'CRUDHelperService',
            function ($state, $stateParams, $scope, $interval, $filter, OrganizationsModel, CRUDHelperService) {
                var organizationDetailsCtrl = this;

                function returnToOrganizations() {
                    $state.go('contiv.menu.organizations.list');
                }

                function deleteOrganization() {
                    CRUDHelperService.hideServerError(organizationDetailsCtrl);
                    CRUDHelperService.startLoader(organizationDetailsCtrl);
                    OrganizationsModel.delete(organizationDetailsCtrl.organization).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(organizationDetailsCtrl);
                        returnToOrganizations();
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(organizationDetailsCtrl);
                        CRUDHelperService.showServerError(organizationDetailsCtrl, result);
                    });
                }

                CRUDHelperService.stopLoader(organizationDetailsCtrl);
                CRUDHelperService.hideServerError(organizationDetailsCtrl);

                OrganizationsModel.getModelByKey($stateParams.key)
                    .then(function (organization) {
                        organizationDetailsCtrl.organization = organization;
                    });

                organizationDetailsCtrl.deleteOrganization = deleteOrganization;
            }]);
angular.module('contiv.organizations')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.organizations.list', {
                url: '/list',
                controller: 'OrganizationsListCtrl as organizationsListCtrl',
                templateUrl: 'organizations/organizationlist.html'
            })
        ;
    }])
    .controller('OrganizationsListCtrl', ['$scope', '$interval', '$filter', 'OrganizationsModel', 'CRUDHelperService',
        function ($scope, $interval, $filter, OrganizationsModel, CRUDHelperService) {
            var organizationsListCtrl = this;

            function getOrganizations(reload) {
                OrganizationsModel.get(reload)
                    .then(function successCallback(result) {
                            CRUDHelperService.stopLoader(organizationsListCtrl);
                            organizationsListCtrl.organizations = $filter('orderBy')(result, 'tenantName');
                        },
                        function errorCallback(result) {
                            CRUDHelperService.stopLoader(organizationsListCtrl);
                        });
            }

            //Load from cache for quick display initially
            getOrganizations(false);

            var promise;
            //Don't do autorefresh if one is already in progress
            if (!angular.isDefined(promise)) {
                promise = $interval(function () {
                    getOrganizations(true);
                }, ContivGlobals.REFRESH_INTERVAL);
            }

            //stop polling when user moves away from the page
            $scope.$on('$destroy', function () {
                $interval.cancel(promise);
            });
        }]);
/**
 * Created by vjain3 on 5/12/16.
 */
angular.module('contiv.servicelbs')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.servicelbs.create', {
                url: '/create',
                templateUrl: 'service_lbs/servicelbcreate.html',
                controller: 'ServicelbCreateCtrl as servicelbCreateCtrl'
            })
        ;
    }])
    .controller('ServicelbCreateCtrl', [
        '$state', '$stateParams', 'ServicelbsModel', 'NetworksModel', 'CRUDHelperService',
        function ($state, $stateParams, ServicelbsModel, NetworksModel, CRUDHelperService) {
            var servicelbCreateCtrl = this;
            servicelbCreateCtrl.labelSelectors = [];
            servicelbCreateCtrl.networks = [];

            function returnToServicelbs() {
                $state.go('contiv.menu.servicelbs.list');
            }

            function cancelCreating() {
                returnToServicelbs();
            }

            /**
             * Get networks for the given tenant.
             */
            function getNetworks() {
                NetworksModel.get().then(function (result) {
                    servicelbCreateCtrl.networks = _.filter(result, {
                        'tenantName': 'default'//TODO: Remove hardcoded tenant.
                    });
                });
            }

            function createLabelSelectorStrings() {
                //Empty out the selectors. In case of server errors this needs to be reset.
                servicelbCreateCtrl.servicelb.selectors = [];
                angular.forEach(servicelbCreateCtrl.labelSelectors, function(labelSelector) {
                    var selectorString = labelSelector.name + '=' + labelSelector.value;
                    servicelbCreateCtrl.servicelb.selectors.push(selectorString);
                })
            }
            function createServicelb() {
                createLabelSelectorStrings();
                //form controller is injected by the html template
                //checking if all validations have passed
                if (servicelbCreateCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(servicelbCreateCtrl);
                    CRUDHelperService.startLoader(servicelbCreateCtrl);
                    servicelbCreateCtrl.servicelb.key =
                        servicelbCreateCtrl.servicelb.tenantName + ':' + servicelbCreateCtrl.servicelb.serviceName;
                    ServicelbsModel.create(servicelbCreateCtrl.servicelb).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(servicelbCreateCtrl);
                        returnToServicelbs();
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(servicelbCreateCtrl);
                        CRUDHelperService.showServerError(servicelbCreateCtrl, result);
                    });
                }

            }

            function resetForm() {
                CRUDHelperService.stopLoader(servicelbCreateCtrl);
                CRUDHelperService.hideServerError(servicelbCreateCtrl);
                servicelbCreateCtrl.servicelb = {
                    serviceName: '',
                    networkName: '',
                    ipAddress: '',
                    selectors: [],
                    ports: [],
                    tenantName: 'default'//TODO: Remove hardcoded tenant.
                };
            }
            servicelbCreateCtrl.createServicelb = createServicelb;
            servicelbCreateCtrl.cancelCreating = cancelCreating;

            getNetworks();
            resetForm();
        }]);

/**
 * Created by vjain3 on 5/11/16.
 */
angular.module('contiv.servicelbs')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.servicelbs.details', {
                url: '/details/:key',
                controller: 'ServicelbDetailsCtrl as servicelbDetailsCtrl',
                templateUrl: 'service_lbs/servicelbdetails.html'
            })
            .state('contiv.menu.servicelbs.edit', {
                url: '/edit/:key',
                controller: 'ServicelbDetailsCtrl as servicelbDetailsCtrl',
                templateUrl: 'service_lbs/servicelbdetails.html'
            });
    }])
    .controller('ServicelbDetailsCtrl',
        ['$state', '$stateParams', 'ServicelbsModel', 'CRUDHelperService',
            function ($state, $stateParams, ServicelbsModel, CRUDHelperService) {
                var servicelbDetailsCtrl = this;
                servicelbDetailsCtrl.labelSelectors = [];

                /**
                 * To show edit or details screen based on the route
                 */
                function setMode() {
                    if ($state.is('contiv.menu.servicelbs.edit')) {
                        servicelbDetailsCtrl.mode = 'edit';
                    } else {
                        servicelbDetailsCtrl.mode = 'details';
                    }
                }

                function returnToServicelbs() {
                    $state.go('contiv.menu.servicelbs.list');
                }

                function returnToServicelbDetails() {
                    $state.go('contiv.menu.servicelbs.details', {'key': servicelbDetailsCtrl.servicelb.key});
                }

                function cancelEditing() {
                    returnToServicelbDetails();
                }

                function deleteServicelb() {
                    CRUDHelperService.hideServerError(servicelbDetailsCtrl);
                    CRUDHelperService.startLoader(servicelbDetailsCtrl);
                    ServicelbsModel.delete(servicelbDetailsCtrl.servicelb).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(servicelbDetailsCtrl);
                        returnToServicelbs();
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(servicelbDetailsCtrl);
                        CRUDHelperService.showServerError(servicelbDetailsCtrl, result);
                    });
                }

                function saveServicelb() {
                    CRUDHelperService.hideServerError(servicelbDetailsCtrl);
                    CRUDHelperService.startLoader(servicelbDetailsCtrl);
                    createLabelSelectorStrings();
                    ServicelbsModel.save(servicelbDetailsCtrl.servicelb).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(servicelbDetailsCtrl);
                        returnToServicelbDetails();
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(servicelbDetailsCtrl);
                        CRUDHelperService.showServerError(servicelbDetailsCtrl, result);
                    });
                }

                function createLabelSelectors() {
                    angular.forEach(servicelbDetailsCtrl.servicelb.selectors, function(selectorStr) {
                        var selector = {
                            name: selectorStr.split('=')[0],
                            value: selectorStr.split('=')[1]
                        };
                        servicelbDetailsCtrl.labelSelectors.push(selector);
                    });
                }

                function createLabelSelectorStrings() {
                    servicelbDetailsCtrl.servicelb.selectors = [];
                    angular.forEach(servicelbDetailsCtrl.labelSelectors, function(labelSelector) {
                        var selectorString = labelSelector.name + '=' + labelSelector.value;
                        servicelbDetailsCtrl.servicelb.selectors.push(selectorString);
                    })
                }

                CRUDHelperService.stopLoader(servicelbDetailsCtrl);
                CRUDHelperService.hideServerError(servicelbDetailsCtrl);

                ServicelbsModel.getModelByKey($stateParams.key)
                    .then(function successCallback(servicelb) {
                        servicelbDetailsCtrl.servicelb = servicelb;
                        createLabelSelectors();
                    });

                servicelbDetailsCtrl.saveServicelb = saveServicelb;
                servicelbDetailsCtrl.cancelEditing = cancelEditing;
                servicelbDetailsCtrl.deleteServicelb = deleteServicelb;
                setMode();

            }]);

/**
 * Created by vjain3 on 5/11/16.
 */
angular.module('contiv.servicelbs')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.servicelbs.list', {
                url: '/list',
                controller: 'ServicelbListCtrl as servicelbListCtrl',
                templateUrl: 'service_lbs/servicelblist.html'
            })
        ;
    }])
    .controller('ServicelbListCtrl', ['$scope', '$interval', '$filter', 'ServicelbsModel', 'CRUDHelperService',
        function ($scope, $interval, $filter, ServicelbsModel, CRUDHelperService) {
            var servicelbListCtrl = this;

            function getServicelbs(reload) {
                ServicelbsModel.get(reload)
                    .then(function successCallback(result) {
                            CRUDHelperService.stopLoader(servicelbListCtrl);
                            servicelbListCtrl.servicelbs = $filter('orderBy')(result, 'serviceName');
                        },
                        function errorCallback(result) {
                            CRUDHelperService.stopLoader(servicelbListCtrl);
                        });
            }

            //Load from cache for quick display initially
            getServicelbs(false);

            var promise;
            //Don't do autorefresh if one is already in progress
            if (!angular.isDefined(promise)) {
                promise = $interval(function () {
                    getServicelbs(true);
                }, ContivGlobals.REFRESH_INTERVAL);
            }

            //stop polling when user moves away from the page
            $scope.$on('$destroy', function () {
                $interval.cancel(promise);
            });
        }]);

/**
 * Created by vjain3 on 5/13/16.
 */
angular.module("contiv.servicelbs")
    .directive("ctvServicelbports", function() {
       return {
           restrict: 'E',
           scope: {
             items: '='
           },
           link: function(scope) {
               /**
                * Compare if two items have same ports and protocols
                * @param val1
                * @param val2
                * @returns {boolean}
                */
               function compare(val1, val2) {
                   return (val1 === val2);
               }

               function resetNewItem() {
                   scope.newItem = {
                       servicePort: '',
                       providerPort: '',
                       protocol: ''
                   };
               }

               function isEmptyItem(item) {
                   return (item.servicePort === '' && item.providerPort === '' && item.protocol === '');
               }

               scope.add = function() {
                   if (isEmptyItem(scope.newItem)) return;
                   if (scope.items === undefined) {
                       scope.items = [];
                   }
                   var newItemStr = scope.newItem.servicePort + ':'
                       + scope.newItem.providerPort + ':'
                       + scope.newItem.protocol;
                   //Removes existing item with the same value first if it exists.
                   _.pullAllWith(scope.items, [newItemStr], compare);
                   scope.items.push(newItemStr);
                   resetNewItem();
               };

               scope.remove = function(passedItem) {
                   _.remove(scope.items, function (item) {
                       return compare(item, passedItem);
                   });
               };
               resetNewItem();
           },
           templateUrl: 'service_lbs/servicelbports.html'
       }
    });

/**
 * Created by vjain3 on 6/1/16.
 */
angular.module('contiv.storagepolicies')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.storagepolicies.create', {
                url: '/create',
                templateUrl: 'storage_policies/storagepolicycreate.html',
                controller: 'StoragePolicyCreateCtrl as storagePolicyCreateCtrl'
            })
        ;
    }])
    .controller('StoragePolicyCreateCtrl', ['$state', '$stateParams', 'StoragePoliciesModel', 'CRUDHelperService',
        function ($state, $stateParams, StoragePoliciesModel, CRUDHelperService) {
            var storagePolicyCreateCtrl = this;

            function returnToStoragePolicies() {
                $state.go('contiv.menu.storagepolicies.list');
            }

            function cancelCreating() {
                returnToStoragePolicies();
            }

            function createFilesystemCmds() {
                storagePolicyCreateCtrl.filesystemcmds.forEach(function (item) {
                    storagePolicyCreateCtrl.newStoragePolicy.filesystems[item.name] = item.value;
                });
            }

            function createPolicy() {
                //form controller is injected by the html template
                //checking if all validations have passed
                if (storagePolicyCreateCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(storagePolicyCreateCtrl);
                    CRUDHelperService.startLoader(storagePolicyCreateCtrl);
                    createFilesystemCmds();
                    StoragePoliciesModel.create(storagePolicyCreateCtrl.newStoragePolicy)
                        .then(function successCallback(result) {
                            CRUDHelperService.stopLoader(storagePolicyCreateCtrl);
                            returnToStoragePolicies();
                        }, function errorCallback(result) {
                            CRUDHelperService.stopLoader(storagePolicyCreateCtrl);
                            CRUDHelperService.showServerError(storagePolicyCreateCtrl, result);
                        });
                }

            }

            function resetForm() {
                CRUDHelperService.stopLoader(storagePolicyCreateCtrl);
                CRUDHelperService.hideServerError(storagePolicyCreateCtrl);
                storagePolicyCreateCtrl.newStoragePolicy = {
                    "name": "",
                    "backends": {
                        "crud": "ceph",
                        "mount": "ceph",
                        "snapshot": "ceph"
                    },
                    "unlocked": false,
                    "driver": {
                        "pool": "rbd"
                    },
                    "create": {
                        "size": "10MB",
                        "filesystem": "ext4"
                    },
                    "runtime": {
                        "snapshots": true,
                        "snapshot": {
                            "frequency": "30m",
                            "keep": 20
                        },
                        "rate-limit": {
                            "write-iops": 1000,
                            "read-iops": 1000,
                            "write-bps": 100000000,
                            "read-bps": 100000000
                        }
                    },
                    "filesystems": {}
                };
            }

            storagePolicyCreateCtrl.createPolicy = createPolicy;
            storagePolicyCreateCtrl.cancelCreating = cancelCreating;
            storagePolicyCreateCtrl.filesystemcmds = [];

            resetForm();
        }]);

/**
 * Created by vjain3 on 5/27/16.
 */
angular.module('contiv.storagepolicies')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.storagepolicies.details', {
                url: '/details/:key',
                controller: 'StoragePolicyDetailsCtrl as storagePolicyDetailsCtrl',
                templateUrl: 'storage_policies/storagepolicydetails.html'
            })
            .state('contiv.menu.storagepolicies.edit', {
                url: '/details/:key',
                controller: 'StoragePolicyDetailsCtrl as storagePolicyDetailsCtrl',
                templateUrl: 'storage_policies/storagepolicydetails.html'
            });
    }])
    .controller('StoragePolicyDetailsCtrl',
        ['$state', '$stateParams', '$scope', '$interval', '$filter', 'StoragePoliciesModel', 'VolumesModel', 'CRUDHelperService',
            function ($state, $stateParams, $scope, $interval, $filter, StoragePoliciesModel, VolumesModel, CRUDHelperService) {
                var storagePolicyDetailsCtrl = this;
                storagePolicyDetailsCtrl.filesystemcmds = [];

                /**
                 * To show edit or details screen based on the route
                 */
                function setMode() {
                    if ($state.is('contiv.menu.storagepolicies.edit')) {
                        storagePolicyDetailsCtrl.mode = 'edit';
                    } else {
                        storagePolicyDetailsCtrl.mode = 'details';
                    }
                }

                function returnToPolicies() {
                    $state.go('contiv.menu.storagepolicies.list');
                }

                function returnToPolicyDetails() {
                    $state.go('contiv.menu.storagepolicies.details', {'key': storagePolicyDetailsCtrl.policy.name});
                }

                function cancelEditing() {
                    returnToPolicyDetails();
                }

                function deletePolicy() {
                    CRUDHelperService.hideServerError(storagePolicyDetailsCtrl);
                    CRUDHelperService.startLoader(storagePolicyDetailsCtrl);
                    StoragePoliciesModel.deleteUsingKey(storagePolicyDetailsCtrl.policy.name, 'name').then(
                        function successCallback(result) {
                            CRUDHelperService.stopLoader(storagePolicyDetailsCtrl);
                            returnToPolicies();
                        }, function errorCallback(result) {
                            CRUDHelperService.stopLoader(storagePolicyDetailsCtrl);
                            CRUDHelperService.showServerError(storagePolicyDetailsCtrl, result);
                        });
                }

                /**
                 * Get volumes belonging to a policy
                 */
                function getVolumes(reload) {
                    VolumesModel.get(reload).then(function (result) {
                        storagePolicyDetailsCtrl.volumes = $filter('orderBy')(_.filter(result, {
                            'policy': storagePolicyDetailsCtrl.policy.name
                        }), 'name');
                    });
                }

                function initializeFilesystemCmdsArray() {
                    angular.forEach(storagePolicyDetailsCtrl.policy.filesystems, function(value, key) {
                        this.push({name: key, value: value});
                    }, storagePolicyDetailsCtrl.filesystemcmds);
                }

                function createFilesystemCmds() {
                    storagePolicyDetailsCtrl.filesystemcmds.forEach(function (item) {
                        storagePolicyDetailsCtrl.policy.filesystems[item.name] = item.value;
                    });
                }

                function savePolicy() {
                    //form controller is injected by the html template
                    //checking if all validations have passed
                    if (storagePolicyDetailsCtrl.form.$valid) {
                        CRUDHelperService.hideServerError(storagePolicyDetailsCtrl);
                        CRUDHelperService.startLoader(storagePolicyDetailsCtrl);
                        createFilesystemCmds();
                        StoragePoliciesModel.save(storagePolicyDetailsCtrl.policy).then(function successCallback(result) {
                            CRUDHelperService.stopLoader(storagePolicyDetailsCtrl);
                            returnToPolicyDetails();
                        }, function errorCallback(result) {
                            CRUDHelperService.stopLoader(storagePolicyDetailsCtrl);
                            CRUDHelperService.showServerError(storagePolicyDetailsCtrl, result);
                        });
                    }

                }
                CRUDHelperService.stopLoader(storagePolicyDetailsCtrl);
                CRUDHelperService.hideServerError(storagePolicyDetailsCtrl);

                StoragePoliciesModel.getModelByKey($stateParams.key, false, 'name')
                    .then(function (policy) {
                        storagePolicyDetailsCtrl.policy = policy;
                        initializeFilesystemCmdsArray();
                        //getVolumes(false);
                    });


                storagePolicyDetailsCtrl.deletePolicy = deletePolicy;
                storagePolicyDetailsCtrl.savePolicy = savePolicy;
                storagePolicyDetailsCtrl.cancelEditing = cancelEditing;

                setMode();

                var promise;
                //Don't do autorefresh if one is already in progress
                if (!angular.isDefined(promise)) {
                    promise = $interval(function () {
                        //getVolumes(true);
                    }, ContivGlobals.REFRESH_INTERVAL);
                }

                //stop polling when user moves away from the page
                $scope.$on('$destroy', function () {
                    $interval.cancel(promise);
                });
            }]);

/**
 * Created by vjain3 on 6/2/16.
 */
angular.module("contiv.storagepolicies")
    .directive("ctvStoragepolicybasicsettings", function() {
        return {

        }
    })
    .directive("ctvStoragepolicyfilesystemsettings", function() {
        return {
            restrict: 'E',
            scope: {
                policy: '=',
                filesystemcmds: '='
            },
            link: function(scope) {
                scope.filesystems = ['ext4', 'btrfs'];
            },
            templateUrl: 'storage_policies/filesystemsettings.html'
        }
    })
    .directive("ctvStoragepolicysnapshotsettings", function() {
        return {
            restrict: 'E',
            scope: {
                policy: '='
            },
            templateUrl: 'storage_policies/snapshotsettings.html'
        }
    })
    .directive("ctvStoragepolicyrwopssettings", function() {
        return {
            restrict: 'E',
            scope: {
                policy: '='
            },
            templateUrl: 'storage_policies/rwopssettings.html'
        }
    })
    .directive("ctvStoragepolicybackenddrivers", function() {
        return {
            restrict: 'E',
            scope: {
                policy: '='
            },
            templateUrl: 'storage_policies/backenddrivers.html'
        }
    });

/**
 * Created by vjain3 on 4/18/16.
 */
angular.module('contiv.storagepolicies')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.storagepolicies.list', {
                url: '/list',
                controller: 'StoragePolicyListCtrl as storagePolicyListCtrl',
                templateUrl: 'storage_policies/storagepolicylist.html'
            })
        ;
    }])
    .controller('StoragePolicyListCtrl', ['$scope', '$interval', '$filter', 'StoragePoliciesModel', 'CRUDHelperService',
        function ($scope, $interval, $filter, StoragePoliciesModel, CRUDHelperService) {
            var storagePolicyListCtrl = this;

            function getPolicies(reload) {
                StoragePoliciesModel.get(reload)
                    .then(function successCallback(result) {
                        CRUDHelperService.stopLoader(storagePolicyListCtrl);
                        storagePolicyListCtrl.policies = $filter('orderBy')(result, 'name');
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(storagePolicyListCtrl);
                    });
            }

            //Load from cache for quick display initially
            getPolicies(false);

            var promise;
            //Don't do auto-refresh if one is already in progress
            if (!angular.isDefined(promise)) {
                promise = $interval(function () {
                    getPolicies(true);
                }, ContivGlobals.REFRESH_INTERVAL);
            }
            //stop polling when user moves away from the page
            $scope.$on('$destroy', function () {
                $interval.cancel(promise);
            });
        }]);
/**
 * Created by vjain3 on 6/3/16.
 */
angular.module('contiv.volumes')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.volumes.create', {
                url: '/create',
                templateUrl: 'volumes/volumecreate.html',
                controller: 'VolumeCreateCtrl as volumeCreateCtrl'
            })
        ;
    }])
    .controller('VolumeCreateCtrl', ['$state', '$stateParams', 'VolumesModel', 'StoragePoliciesModel', 'CRUDHelperService',
        function ($state, $stateParams, VolumesModel, StoragePoliciesModel, CRUDHelperService) {
            var volumeCreateCtrl = this;
            volumeCreateCtrl.filesystems = ['ext4', 'btrfs'];

            function returnToVolumesModel() {
                $state.go('contiv.menu.volumes.list');
            }

            function cancelCreating() {
                returnToVolumesModel();
            }

            /**
             * Get storage policies.
             */
            function getStoragePolicies() {
                StoragePoliciesModel.get().then(function (result) {
                    volumeCreateCtrl.policies = result;
                });
            }

            function applyPolicySettings() {
                volumeCreateCtrl.newVolume.policy = volumeCreateCtrl.selectedPolicy.name;
                volumeCreateCtrl.newVolume.backends = volumeCreateCtrl.selectedPolicy.backends;
                volumeCreateCtrl.newVolume.driver = volumeCreateCtrl.selectedPolicy.driver;
                volumeCreateCtrl.newVolume.create = volumeCreateCtrl.selectedPolicy.create;
                volumeCreateCtrl.newVolume.runtime = volumeCreateCtrl.selectedPolicy.runtime;
            }

            function createVolume() {
                //form controller is injected by the html template
                //checking if all validations have passed
                if (volumeCreateCtrl.form.$valid) {
                    CRUDHelperService.hideServerError(volumeCreateCtrl);
                    CRUDHelperService.startLoader(volumeCreateCtrl);
                    applyPolicySettings();
                    VolumesModel.create(volumeCreateCtrl.newVolume).then(function successCallback(result) {
                        CRUDHelperService.stopLoader(volumeCreateCtrl);
                        returnToVolumesModel();
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(volumeCreateCtrl);
                        CRUDHelperService.showServerError(volumeCreateCtrl, result);
                    });
                }

            }

            function resetForm() {
                CRUDHelperService.stopLoader(volumeCreateCtrl);
                CRUDHelperService.hideServerError(volumeCreateCtrl);
                volumeCreateCtrl.newVolume = {
                    "name": "",
                    "backends": {},
                    "driver": {},
                    "create": {},
                    "runtime": {}
                };
            }

            volumeCreateCtrl.createVolume = createVolume;
            volumeCreateCtrl.cancelCreating = cancelCreating;

            getStoragePolicies();

            resetForm();
        }]);

/**
 * Created by vjain3 on 4/15/16.
 */
angular.module('contiv.volumes')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.volumes.details', {
                url: '/details/:key',
                controller: 'VolumeDetailsCtrl as volumeDetailsCtrl',
                templateUrl: 'volumes/volumedetails.html'
            });
    }])
    .controller('VolumeDetailsCtrl',
        ['$state', '$stateParams', '$scope', '$interval', '$http', 'VolumesModel', 'VolumeService',
        function ($state, $stateParams, $scope, $interval, $http, VolumesModel, VolumeService) {
            var volumeDetailsCtrl = this;

            function returnToVolumes() {
                $state.go('contiv.menu.volumes.list');
            }
            function deleteVolume() {
                VolumesModel.delete(volumeDetailsCtrl.volume).then(function (result) {
                    returnToVolumes();
                });
            }

            function getVolumeInfo(reload) {
                var tokens = $stateParams.key.split('/');
                var model ={};
                model.policy = tokens[0];
                model.name = tokens[1];
                VolumesModel.getModel(model, reload)
                    .then(function (volume) {
                        volumeDetailsCtrl.volume = volume;
                        getVolumeUseInfo();
                        getVolumeSnapshots();
                    });
            }

            function getVolumeUseInfo() {
                VolumeService.getVolumeUseInfo(volumeDetailsCtrl.volume).then(function successCallback(result) {
                    volumeDetailsCtrl.volumeUse = result;
                }, function errorCallback(result) {
                    //Returns error if volume is not mounted by any container
                });
            }

            function getVolumeSnapshots() {
                VolumeService.getVolumeSnapshots(volumeDetailsCtrl.volume).then(function successCallback(result) {
                    volumeDetailsCtrl.snapshots = result;
                }, function errorCallback(result) {
                })
            }

            function copySnapshot(snapshot, newVolume) {
                VolumesModel.copy(model, snapshot, newVolume)
                    .then(function successCallback(result) {

                    }, function errorCallback(result) {

                    })
            }

            volumeDetailsCtrl.deleteVolume = deleteVolume;
            volumeDetailsCtrl.copySnapshot = copySnapshot;

            //Load from cache for quick display initially
            getVolumeInfo(false);

            var promise;
            //Don't do auto-refresh if one is already in progress
            if (!angular.isDefined(promise)) {
                promise = $interval(function () {
                    getVolumeInfo(true);
                }, ContivGlobals.REFRESH_INTERVAL);
            }
            //stop polling when user moves away from the page
            $scope.$on('$destroy', function () {
                $interval.cancel(promise);
            });

        }]);
/**
 * Created by vjain3 on 3/22/16.
 */
angular.module('contiv.volumes')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('contiv.menu.volumes.list', {
                url: '/list',
                controller: 'VolumeListCtrl as volumeListCtrl',
                templateUrl: 'volumes/volumelist.html'
            })
        ;
    }])
    .controller('VolumeListCtrl', ['$scope', '$interval', '$filter', 'VolumesModel', 'CRUDHelperService',
        function ($scope, $interval, $filter, VolumesModel, CRUDHelperService) {
            var volumeListCtrl = this;

            function getVolumes(reload) {
                VolumesModel.get(reload)
                    .then(function successCallback(result) {
                        CRUDHelperService.stopLoader(volumeListCtrl);
                        volumeListCtrl.volumes = $filter('orderBy')(result, 'name');
                    }, function errorCallback(result) {
                        CRUDHelperService.stopLoader(volumeListCtrl);
                    });
            }

            //Load from cache for quick display initially
            getVolumes(false);

            var promise;
            //Don't do auto-refresh if one is already in progress
            if (!angular.isDefined(promise)) {
                promise = $interval(function () {
                    getVolumes(true);
                }, ContivGlobals.REFRESH_INTERVAL);
            }
            //stop polling when user moves away from the page
            $scope.$on('$destroy', function () {
                $interval.cancel(promise);
            });
        }]);

/**
 * Created by vjain3 on 6/5/16.
 */
angular.module('contiv.volumes')
    .factory('VolumeService', ['$http', '$q', function ($http, $q) {
        function getVolumeUseInfo(volume) {
            var deferred = $q.defer();
            var url = ContivGlobals.VOLUMES_USES_ENDPOINT
                + volume.policy
                + '/' + volume.name;
            $http.get(url).then(function successCallback(result) {
                deferred.resolve(result.data);
            }, function errorCallback(result) {
                //Returns error if volume is not mounted by any container
                deferred.reject(result.data);
            });
            return deferred.promise;
        }

        function getVolumeSnapshots(volume) {
            var deferred = $q.defer();
            var url = ContivGlobals.VOLUMES_SNAPSHOTS_ENDPOINT
                + volume.policy
                + '/' + volume.name;
            $http.get(url).then(function successCallback(result) {
                deferred.resolve(result.data);
            }, function errorCallback(result) {
                deferred.reject(result.data);
            });
            return deferred.promise;
        }

        return {
            getVolumeUseInfo: getVolumeUseInfo,
            getVolumeSnapshots: getVolumeSnapshots
        }
    }]);
/**
 * Created by vjain3 on 6/2/16.
 */
angular.module("contiv.directives")
    .directive("ctvCollapsible", function () {
        return {
            restrict: 'E',
            scope: {
                title: '@',
                collapsed: '@'
            },
            transclude: true,
            link: function (scope) {
                if (scope.collapsed === undefined) scope.collapsed = true;
            },
            templateUrl: 'components/directives/collapsible.html'
        }
    });

angular.module("contiv.directives")
    .directive("ctvCommissionvalid", function () {
        return {
            restrict: 'EA',
            templateUrl: 'components/directives/commissionvalid.html'
        };
    });
angular.module("contiv.directives")
    .directive("ctvControlinterface", function () {
        return {
            restrict: 'EA',
            templateUrl: 'components/directives/control_interface.html'
        };
    });
/**
 * Created by vjain3 on 4/28/16.
 */
angular.module("contiv.directives")
    .directive("ctvError", function () {
        return {
            restrict: 'E',
            scope: {
                header: '@',
                error: '='
            },
            link: function (scope, element, attr) {
                element.find('i').on('click', function() {
                    element.addClass('ng-hide');
                })
            },
            templateUrl: 'components/directives/errormessage.html'
        }
    });

/**
 * Created by vjain3 on 5/11/16.
 */
angular.module("contiv.directives")
    .directive("ctvNamevalue", function() {
       return {
           restrict: 'E',
           scope: {
               items: '=',
               nameheader: '@',//Field name to display for key
               valueheader: '@',//Field name to display for value
               type: '@',//'text' or 'select' to choose input or select html tag for key
               options: '='//To be used when type is 'select'
           },
           link: function(scope) {
               /**
                * Compare if two items have same name
                * @param val1
                * @param val2
                * @returns {boolean}
                */
               function compare(val1, val2) {
                   return val1.name == val2.name;
               }

               function resetNewItem() {
                   scope.newItem = {
                       name: '',
                       value: ''
                   };
               }

               function isEmptyItem(item) {
                   return (item.name === '' && item.value === '');
               }

               scope.add = function() {
                   if (isEmptyItem(scope.newItem)) return;
                   if (scope.item === undefined) {
                       scope.item = [];
                   }
                   //Removes existing item with the same name first if it exists.
                   _.pullAllWith(scope.items, [scope.newItem], compare);
                   scope.items.push(scope.newItem);
                   resetNewItem();
               };

               scope.remove = function(passedItem) {
                   _.remove(scope.items, function (item) {
                       return item.name == passedItem.name;
                   });
               };
               resetNewItem();

               if (scope.nameheader === undefined) scope.nameheader = 'Name';
               if (scope.valueheader === undefined) scope.valueheader = 'Value';
               if (scope.type === undefined) scope.type = 'text';
           },
           templateUrl: 'components/directives/namevalue.html'
       }
    });

angular.module("contiv.directives")
    .directive("ctvNetworkmode", function () {
        return {
            restrict: 'EA',
            templateUrl: 'components/directives/networkmode.html'
        };
    });
angular.module("contiv.directives")
    .directive("ctvNodefields", function () {
        return {
            restrict: 'EA',
            templateUrl: 'components/directives/nodefields.html'
        };
    });
angular.module("contiv.directives")
    .directive("ctvScheduler", function () {
        return {
            restrict: 'EA',
            templateUrl: 'components/directives/scheduler.html'
        };
    });
/**
 * Created by vjain3 on 5/4/16.
 */
angular.module("contiv.directives")
    .directive("ctvTable", ['filterFilter', 'limitToFilter', function (filterFilter, limitToFilter) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                items: '=',
                filtereditems: '=',
                size: '@'
            },
            controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
                var tableCtrl = this;
                tableCtrl.chunks = [];
                tableCtrl.pageNo = 0;

                tableCtrl.size = parseInt($scope.size, 10);
                if (isNaN(tableCtrl.size)) {
                    tableCtrl.size = 12;
                }

                /**
                 * Always call showChunk with both parameters.
                 * @param pageNo
                 * @param searchText
                 * @returns {boolean}
                 */
                function showChunk(pageNo, searchText) {
                    tableCtrl.searchText = searchText;

                    if (pageNo === undefined || pageNo < 0) pageNo = 0;
                    tableCtrl.pageNo = pageNo;

                    if ($scope.items !== undefined) {//TODO: Check why items are undefined during initialization
                        var searchTextFilteredItems = filterFilter($scope.items, tableCtrl.searchText);

                        var noOfChunks = Math.ceil(searchTextFilteredItems.length / tableCtrl.size);
                        if (noOfChunks == 0) {
                            noOfChunks = 1;
                        }
                        tableCtrl.chunks = [];
                        for (var i = 0; i < noOfChunks; i++) {
                            tableCtrl.chunks.push({selected: false, pageNo: i});
                        }

                        //After filtering number of chunks could change so reset page no if it is greater than no of chunks
                        if (pageNo >= tableCtrl.chunks.length) {
                            tableCtrl.pageNo = 0;
                        }

                        tableCtrl.chunks[tableCtrl.pageNo].selected = true;

                        //Update number of chunks for pagination menu
                        if (tableCtrl.chunks.length > 5) {
                            var sliceStart, sliceEnd;
                            sliceStart = tableCtrl.pageNo - 2;
                            sliceEnd = tableCtrl.pageNo + 3;
                            if (sliceStart < 0) {
                                sliceEnd = sliceEnd - sliceStart;
                                sliceStart = 0;
                            }
                            if (sliceEnd > tableCtrl.chunks.length) {
                                sliceStart = sliceStart - (sliceEnd - tableCtrl.chunks.length);
                                sliceEnd = tableCtrl.chunks.length;
                            }
                            $scope.paginationMenu.chunks = tableCtrl.chunks.slice(sliceStart, sliceEnd);
                        } else {
                            $scope.paginationMenu.chunks = tableCtrl.chunks;
                        }

                        tableCtrl.filteredItems = limitToFilter(searchTextFilteredItems,
                            tableCtrl.size,
                            tableCtrl.pageNo * tableCtrl.size);
                        $scope.filtereditems = tableCtrl.filteredItems;
                    }
                    return false;
                };

                function showPrevChunk() {
                    var prevChunk;
                    if (tableCtrl.pageNo <= 0) {
                        prevChunk = 0;
                    } else {
                        prevChunk = tableCtrl.pageNo - 1;
                    }
                    return showChunk(prevChunk);
                }

                function showNextChunk() {
                    var nextChunk;
                    nextChunk = tableCtrl.pageNo + 1;
                    if (nextChunk > tableCtrl.chunks.length - 1) {
                        nextChunk = tableCtrl.chunks.length - 1;
                    }
                    return showChunk(nextChunk);
                }

                /**
                 * Save pagination scope to provide chunk information to pagination menu.
                 * @param menu
                 */
                function addPaginationMenu(menu) {
                    $scope.paginationMenu = menu;
                }

                tableCtrl.showChunk = showChunk;
                tableCtrl.showNextChunk = showNextChunk;
                tableCtrl.showPrevChunk = showPrevChunk;
                tableCtrl.addPaginationMenu = addPaginationMenu;
            }],
            link: function (scope, element, attrs, tableCtrl) {
                //Watch for items as they will be auto refreshed
                scope.$parent.$watch(attrs.items, function () {
                    tableCtrl.showChunk(tableCtrl.pageNo, tableCtrl.searchText);
                });

            },
            templateUrl: 'components/directives/table.html'
        }
    }])
    .directive("ctvThead", function () {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            template: '<thead ng-transclude></thead>'
        }
    })
    .directive("ctvTh", function () {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            scope: {
                class: '@'
            },
            template: '<th ng-class="class" ng-transclude></th>'
        }
    })
    .directive("ctvTbody", function () {
        return {
            restrict: 'E',
            scope: {},
            transclude: true,
            replace: true,
            template: '<tbody ng-transclude></tbody>'
        }
    })
    .directive("ctvTfoot", function () {
        return {
            restrict: 'E',
            scope: {},
            transclude: true,
            replace: true,
            template: '<tfoot ng-transclude></tfoot>'
        }
    })
    .directive("ctvTsearch", function () {
        return {
            restrict: 'E',
            require: '^^ctvTable',
            scope: {
                placeholder: '@',
                size: '@'
            },
            link: function (scope, element, attr, tableCtrl) {
                scope.showChunk = function () {
                    tableCtrl.showChunk(tableCtrl.pageNo, scope.searchText);
                }
            },
            templateUrl: 'components/directives/searchinput.html'
        }
    })
    .directive("ctvTr", function () {
        return {
            restrict: 'E',
            transclude: 'true',
            replace: true,
            scope: {},
            template: '<tr ng-transclude></tr>'
        }
    })
    .directive("ctvTd", function () {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            scope: true,
            template: '<td ng-transclude></td>'
        }
    })
    .directive("ctvTpagination", function () {
        return {
            restrict: 'E',
            require: '^^ctvTable',
            scope: {},
            link: function (scope, element, attr, tableCtrl) {
                tableCtrl.addPaginationMenu(scope);
                //showChunk() will calculate and set chunks in scope
                tableCtrl.showChunk(tableCtrl.pageNo, tableCtrl.searchText);
                scope.showChunk = function (pageNo) {
                    tableCtrl.showChunk(pageNo, tableCtrl.searchText);
                };
                scope.showPrevChunk = tableCtrl.showPrevChunk;
                scope.showNextChunk = tableCtrl.showNextChunk;
            },
            templateUrl: 'components/directives/paginationmenu.html'
        }
    });

/**
 * Created by vjain3 on 3/11/16.
 */
angular.module('contiv.models')
    .factory('ApplicationGroupsModel', ['$http', '$q', function ($http, $q) {
        var groupsmodel = new Collection($http, $q, ContivGlobals.APPLICATIONGROUPS_ENDPOINT);

        /**
         * Generate key for application group
         * @param group
         */
        groupsmodel.generateKey = function (group) {
            return group.tenantName + ':' + group.groupName;
        };

        return groupsmodel;
    }]);
/**
 * BaseCollection class that does just fetch of the objects.
 * @param $http
 * @param $q
 * @param url Used for doing HTTP GET and fetch objects from server
 * @constructor
 */
function BaseCollection($http, $q, url) {
    this.models = [];
    this.$http = $http;
    this.$q = $q;
    this.url = url;
}

BaseCollection.prototype.extract = function (result) {
    return result.data;
};

/**
 *
 * @param reload Optional. Default is false
 * @returns {*}
 */
BaseCollection.prototype.get = function (reload) {
    var collection = this;
    if (reload === undefined) reload = false;
    return (!reload && collection.models.length > 0) ?
        collection.$q.when(collection.models) : collection.$http.get(collection.url)
        .then(function (result) {
            collection.models = collection.extract(result);
            return collection.models;
        });
};

/**
 *
 * @param key
 * @param reload Optional. Default is false
 * @param keyname
 * @returns {*}
 */
BaseCollection.prototype.getModelByKey = function (key, reload, keyname) {
    var collection = this;
    if (reload === undefined) reload = false;
    if (keyname === undefined) keyname = 'key';

    var deferred = collection.$q.defer();

    function findModel() {
        return _.find(collection.models, function (c) {
            return c[keyname] == key;
        })
    }

    if (!reload && collection.models.length > 0) {
        deferred.resolve(findModel());
    } else {
        collection.get(reload)
            .then(function () {
                deferred.resolve(findModel());
            });
    }

    return deferred.promise;
};

/**
 *
 * @param model
 * @param reload Optional. Default is false
 * @returns {*}
 */
BaseCollection.prototype.getModel = function (model, reload) {
    var collection = this;
    if (reload === undefined) reload = false;

    var deferred = collection.$q.defer();

    function findModel() {
        return _.find(collection.models, model)
    }

    if (!reload && collection.models.length > 0) {
        deferred.resolve(findModel());
    } else {
        collection.get(reload)
            .then(function () {
                deferred.resolve(findModel());
            });
    }

    return deferred.promise;
};


/**
 * Extends BaseCollection class to do create, update and delete using POST, PUT and DELETE verbs.
 * @param $http
 * @param $q
 * @param url Used for doing HTTP GET and fetch objects from server
 * @constructor
 */
function Collection($http, $q, url) {
    BaseCollection.call(this, $http, $q, url);
}

Collection.prototype = Object.create(BaseCollection.prototype);

/**
 *
 * @param model
 * @param url Optional if not passed it is constructed using key and url passed in constructor
 * @returns {*}
 */
Collection.prototype.create = function (model, url) {
    var collection = this;
    var deferred = collection.$q.defer();
    if (url === undefined) url = collection.url + model.key + '/';
    collection.$http.post(url, model)
        .then(function successCallback(response) {
            var responseData = collection.extract(response);
            //For rest endpoints that do not return created json object in response
            if ((responseData === undefined) || (responseData === '')) {
                responseData = model;
            }
            //collection.models.push(collection.extract(response));
            collection.models.push(responseData);
            deferred.resolve(collection.extract(response));
        }, function errorCallback(response) {
            deferred.reject(collection.extract(response));
        });
    return deferred.promise;
};

/**
 * This is for netmaster specific endpoints and used by netmaster objects only.
 * TODO: Generalize
 * @param model
 * @param url Optional
 * @returns {*}
 */
Collection.prototype.save = function (model) {
    var collection = this;
    var deferred = collection.$q.defer();
    var url = collection.url + model.key + '/';
    collection.$http.put(url, model)
        .then(function successCallback(response) {
            _.remove(collection.models, function (n) {
                return n.key == model.key;
            });
            collection.models.push(collection.extract(response));
            deferred.resolve(collection.extract(response));
        }, function errorCallback(response) {
            deferred.reject(collection.extract(response));
        });
    return deferred.promise;
};

/**
 * This is for netmaster specific endpoints and used by netmaster objects only.
 * TODO: Generalize
 * @param model
 * @returns {*}
 */
Collection.prototype.delete = function (model) {
    var collection = this;
    var deferred = collection.$q.defer();
    var url = collection.url + model.key + '/';
    collection.$http.delete(url)
        .then(function successCallback(response) {
            _.remove(collection.models, function (n) {
                return n.key == model.key;
            });
            deferred.resolve(collection.extract(response));
        }, function errorCallback(response) {
            deferred.reject(collection.extract(response));
        });
    return deferred.promise;
};

/**
 *
 * @param key
 * @param keyname
 * @param url Optional if not passed it is constructed using key and url passed in constructor
 * @returns {*}
 */
Collection.prototype.deleteUsingKey = function (key, keyname, url) {
    var collection = this;
    if (keyname === undefined) keyname = 'key';

    var deferred = collection.$q.defer();
    if (url === undefined) url = collection.url + key + '/';
    collection.$http.delete(url)
        .then(function successCallback(response) {
            _.remove(collection.models, function (n) {
                return n[keyname] == key;
            });
            deferred.resolve(collection.extract(response));
        }, function errorCallback(response) {
            deferred.reject(collection.extract(response));
        });
    return deferred.promise;
};
angular.module('contiv.models')
    .factory('GlobalsettingsModel', ['$http', '$q', function ($http, $q) {
        var globalsettingsmodel = new SettingsCollection($http, $q);
        return globalsettingsmodel;
    }]);

function SettingsCollection($http, $q) {
    BaseCollection.call(this, $http, $q, ContivGlobals.GLOBAL_GET_ENDPOINT);
}

SettingsCollection.prototype = Object.create(BaseCollection.prototype);

SettingsCollection.prototype.update = function (nodeOpsObj) {
    var settingscollection = this;
    var deferred = settingscollection.$q.defer();
    var url = ContivGlobals.GLOBAL_SET_ENDPOINT;
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
angular.module('contiv.models')
    .factory('NetworksModel', ['$http', '$q', function ($http, $q) {
        return new Collection($http, $q, ContivGlobals.NETWORKS_ENDPOINT);
    }]);

/**
 * Created by vjain3 on 3/22/16.
 */
angular.module('contiv.models')
    .factory('NodesModel', ['$http', '$q', function ($http, $q) {
        var nodesmodel = new NodesCollection($http, $q);
        return nodesmodel;
    }]);

/**
 * NodesCollection extends from BaseCollection. It overrides extract() and adds commission, decommission, upgrade and
 * discover methods
 * @param $http
 * @param $q
 * @constructor
 */
function NodesCollection($http, $q) {
    BaseCollection.call(this, $http, $q, ContivGlobals.NODES_LIST_ENDPOINT);
}

NodesCollection.prototype = Object.create(BaseCollection.prototype);

NodesCollection.prototype.extract = function (result) {
    //Convert to array if the returned collection is not an array
    return _.map(result.data, function (value, key) {
        value.key = key;
        return value;
    });
};


/**
 *
 * @param key
 * @param extraVars JSON object of extra ansible and environment variables to be passed while commissioning a node
 * {
     * "env":{"http_proxy":"http://proxy.esl.cisco.com:8080", "https_proxy":"http://proxy.esl.cisco.com:8080"},
     * "control_interface": "eth1", "service_vip": "192.168.2.252", "validate_certs": "false", "netplugin_if" : "eth2"
     * }
 * @returns {*}
 */
NodesCollection.prototype.commission = function (nodeOpsObj) {
    var nodescollection = this;
    var deferred = nodescollection.$q.defer();
    var url = ContivGlobals.NODES_COMMISSION_ENDPOINT;
    nodescollection.$http.post(url, nodeOpsObj, {
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

NodesCollection.prototype.decommission = function (nodeOpsObj) {
    var nodescollection = this;
    var deferred = nodescollection.$q.defer();
    var url = ContivGlobals.NODES_DECOMMISSION_ENDPOINT;
    nodescollection.$http.post(url, nodeOpsObj, {
            'headers': {
                'Content-Type': 'application/json'
            }
        })
        .then(function successCallback(response) {
            deferred.resolve();
        }, function errorCallback(response) {
            deferred.reject(response);
        });
    return deferred.promise;
};

NodesCollection.prototype.upgrade = function (nodeOpsObj) {
    var nodescollection = this;
    var deferred = nodescollection.$q.defer();
    var url = ContivGlobals.NODES_MAINTENANCE_ENDPOINT;
    nodescollection.$http.post(url, nodeOpsObj, {
            'headers': {
                'Content-Type': 'application/json'
            }
        })
        .then(function successCallback(response) {
            deferred.resolve();
        }, function errorCallback(response) {
            deferred.reject(response);
        });
    return deferred.promise;
};

/**
 *
 * @param ip
 * @param extraVars JSON object of extra ansible and environment variables to be passed while discovering a node
 * {
     * "env":{"http_proxy":"http://proxy.esl.cisco.com:8080", "https_proxy":"http://proxy.esl.cisco.com:8080"},
     * "control_interface": "eth1", "service_vip": "192.168.2.252", "cluster-name": "contiv", "node-label" : "node1"
     * }
 * @returns {*}
 */
NodesCollection.prototype.discover = function (nodeOpsObj) {
    var nodescollection = this;
    var deferred = nodescollection.$q.defer();
    var url = ContivGlobals.NODES_DISCOVER_ENDPOINT;
    nodescollection.$http.post(url, nodeOpsObj, {
            'headers': {
                'Content-Type': 'application/json'
            }
        })
        .then(function successCallback(response) {
            deferred.resolve();
        }, function errorCallback(response) {
            deferred.reject(response);
        });
    return deferred.promise;
};
angular.module('contiv.models')
    .factory('OrganizationsModel', ['$http', '$q', function ($http, $q) {
        return new Collection($http, $q, ContivGlobals.ORGANIZATIONS_ENDPOINT);
    }]);
angular.module('contiv.models')
    .factory('PoliciesModel', ['$http', '$q', function ($http, $q) {
        var policiesmodel = new Collection($http, $q, ContivGlobals.POLICIES_ENDPOINT);

        /**
         * Generate policy key to save policy on server
         * @param policy
         * @returns {string}
         */
        policiesmodel.generateKey = function (policy) {
            return policy.tenantName + ':' + policy.policyName;
        };

        return policiesmodel;
    }]);

/**
 * Created by vjain3 on 3/8/16.
 */
angular.module('contiv.models')
    .factory('RulesModel', ['$http', '$q', function ($http, $q) {
        var rulesmodel = new Collection($http, $q, ContivGlobals.RULES_ENDPOINT);

        /**
         * Get incoming rules for a given policy and a tenant
         * @param policyName
         * @param tenantName
         * @returns {*|webdriver.promise.Promise}
         */
        rulesmodel.getIncomingRules = function (policyName, tenantName) {
            return rulesmodel.get().then(function (result) {
                return _.filter(result, {
                    'policyName': policyName,
                    'direction': 'in',
                    'tenantName': tenantName
                });

            });
        };

        /**
         * Get outgoing rules for a given policy and a tenant
         * @param policyName
         * @param tenantName
         * @returns {*|webdriver.promise.Promise}
         */
        rulesmodel.getOutgoingRules = function (policyName, tenantName) {
            return rulesmodel.get().then(function (result) {
                return _.filter(result, {
                    'policyName': policyName,
                    'direction': 'out',
                    'tenantName': tenantName
                });

            });
        };

        /**
         * Generate rule key to save rule on server
         * @param rule
         * @returns {string}
         */
        rulesmodel.generateKey = function (rule) {
            return rule.tenantName + ':' + rule.policyName + ':' + rule.ruleId;
        };

        return rulesmodel;
    }]);
/**
 * Created by vjain3 on 5/11/16.
 */
angular.module('contiv.models')
    .factory('ServicelbsModel', ['$http', '$q', function ($http, $q) {
        return new Collection($http, $q, ContivGlobals.SERVICELBS_ENDPOINT);
    }]);

/**
 * Created by vjain3 on 4/18/16.
 */
angular.module('contiv.models')
    .factory('StoragePoliciesModel', ['$http', '$q', function ($http, $q) {
        /**
         * StoragePoliciesCollection extends from BaseCollection
         * @param $http
         * @param $q
         * @constructor
         */
        function StoragePoliciesCollection($http, $q) {
            Collection.call(this, $http, $q, ContivGlobals.STORAGEPOLICIES_ENDPOINT);
        }

        StoragePoliciesCollection.prototype = Object.create(Collection.prototype);

        StoragePoliciesCollection.prototype.create = function (model) {
            var collection = this;
            var url = collection.url + model.name;
            return Collection.prototype.create.call(collection, model, url);
        };

        StoragePoliciesCollection.prototype.save = function (model) {
            var collection = this;
            var deferred = collection.$q.defer();
            var url = collection.url + model.name;
            collection.$http.post(url, model)
                .then(function successCallback(response) {
                    _.remove(collection.models, function (n) {
                        return n.name == model.name;
                    });
                    collection.models.push(model);
                    deferred.resolve(collection.extract(response));
                }, function errorCallback(response) {
                    deferred.reject(collection.extract(response));
                });
            return deferred.promise;
        };
        var policiesmodel = new StoragePoliciesCollection($http, $q);
        return policiesmodel;
    }]);
/**
 * Created by vjain3 on 3/22/16.
 */
angular.module('contiv.models')
    .factory('VolumesModel', ['$http', '$q', function ($http, $q) {
        /**
         * VolumesCollection extends from BaseCollection
         * @param $http
         * @param $q
         * @constructor
         */
        function VolumesCollection($http, $q) {
            Collection.call(this, $http, $q, ContivGlobals.VOLUMES_ENDPOINT);
        }

        VolumesCollection.prototype = Object.create(Collection.prototype);

        VolumesCollection.prototype.delete = function (model) {
            var volumescollection = this;
            var deferred = volumescollection.$q.defer();
            var url = ContivGlobals.VOLUMES_DELETE_ENDPOINT;
            //delete endpoint expects volume property in addition to policy. TODO ask to be fixed
            model.volume = model.name;
            var config = {
                data: model
            };
            volumescollection.$http.delete(url, config)
                .then(function successCallback(response) {
                    _.remove(volumescollection.models, function (n) {
                        return (n.name == model.name && n.policy == model.policy);
                    });
                    deferred.resolve(volumescollection.extract(response));
                }, function errorCallback(response) {
                    deferred.reject(volumescollection.extract(response));
                });
            return deferred.promise;
        };

        VolumesCollection.prototype.create = function (model) {
            var collection = this;
            var url = ContivGlobals.VOLUMES_CREATE_ENDPOINT;
            return Collection.prototype.create.call(collection, model, url);
        };

        VolumesCollection.prototype.copy = function (model, snapshot, newVolume) {
            var collection = this;
            var deferred = collection.$q.defer();
            var url = ContivGlobals.VOLUMES_COPYSNAPSHOTS_ENDPOINT;
            var volcopymodel = {
                volume: model.name,
                policy: model.policy,
                Options: {
                    target: newVolume,
                    snapshot: snapshot
                }
            };
            collection.$http.post(url, volcopymodel)
                .then(function successCallback(response) {
                    //TODO: Add the new volume to the collection
                    //collection.models.push(collection.extract(response));
                    deferred.resolve(collection.extract(response));
                }, function errorCallback(response) {
                    deferred.reject(collection.extract(response));
                });
            return deferred.promise;
        };

        var volumesmodel = new VolumesCollection($http, $q);
        return volumesmodel;
    }]);
/**
 * Created by vjain3 on 4/29/16.
 */
angular.module('contiv.utils')
    .factory('CRUDHelperService', function () {
            function startLoader(controller) {
                controller.showLoader = true;
            }

            function stopLoader(controller) {
                controller.showLoader = false;
            }

            function showServerError(controller, message) {
                controller.showServerError = true;
                controller.serverErrorMessage = message;
            }

            function hideServerError(controller) {
                controller.showServerError = false;
            }

            return {
                startLoader: startLoader,
                stopLoader: stopLoader,
                showServerError: showServerError,
                hideServerError: hideServerError
            }
        }
    );

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvbW9kdWxlLmpzIiwibW9kZWxzL21vZHVsZS5qcyIsInV0aWxzL21vZHVsZS5qcyIsImFwcGxpY2F0aW9uZ3JvdXBzL21vZHVsZS5qcyIsImRhc2hib2FyZC9tb2R1bGUuanMiLCJnbG9iYWxfc2V0dGluZ3MvbW9kdWxlLmpzIiwibG9naW4vbW9kdWxlLmpzIiwibWVudS9tb2R1bGUuanMiLCJuZXR3b3JrX3BvbGljaWVzL21vZHVsZS5qcyIsIm5ldHdvcmtzL21vZHVsZS5qcyIsIm5vZGVzL21vZHVsZS5qcyIsIm9yZ2FuaXphdGlvbnMvbW9kdWxlLmpzIiwic2VydmljZV9sYnMvbW9kdWxlLmpzIiwic3RvcmFnZV9wb2xpY2llcy9tb2R1bGUuanMiLCJ2b2x1bWVzL21vZHVsZS5qcyIsImFwcC5qcyIsImFwcGxpY2F0aW9uZ3JvdXBzL2FwcGxpY2F0aW9uZ3JvdXBjcmVhdGVjdHJsLmpzIiwiYXBwbGljYXRpb25ncm91cHMvYXBwbGljYXRpb25ncm91cGRldGFpbHNjdHJsLmpzIiwiYXBwbGljYXRpb25ncm91cHMvYXBwbGljYXRpb25ncm91cGxpc3RjdHJsLmpzIiwiYXBwbGljYXRpb25ncm91cHMvYXBwbGljYXRpb25ncm91cHNlcnZpY2UuanMiLCJkYXNoYm9hcmQvZGFzaGJvYXJkY3RybC5qcyIsImdsb2JhbF9zZXR0aW5ncy9jbHVzdGVyc2V0dGluZ2N0cmwuanMiLCJnbG9iYWxfc2V0dGluZ3Mvc2V0dGluZ3NlcnZpY2UuanMiLCJsb2dpbi9sb2dpbmN0cmwuanMiLCJtZW51L21lbnVDdHJsLmpzIiwibmV0d29ya19wb2xpY2llcy9pc29sYXRpb25wb2xpY3ljcmVhdGVjdHJsLmpzIiwibmV0d29ya19wb2xpY2llcy9pc29sYXRpb25wb2xpY3lkZXRhaWxzY3RybC5qcyIsIm5ldHdvcmtfcG9saWNpZXMvaXNvbGF0aW9ucG9saWN5bGlzdGN0cmwuanMiLCJuZXR3b3JrX3BvbGljaWVzL25ldHdvcmtwb2xpY2llc3RhYnNjdHJsLmpzIiwibmV0d29ya3MvbmV0d29ya2NyZWF0ZWN0cmwuanMiLCJuZXR3b3Jrcy9uZXR3b3JrZGV0YWlsc2N0cmwuanMiLCJuZXR3b3Jrcy9uZXR3b3JrbGlzdGN0cmwuanMiLCJub2Rlcy9ub2RlY29tbWlzc2lvbmN0cmwuanMiLCJub2Rlcy9ub2RlZGV0YWlsc2N0cmwuanMiLCJub2Rlcy9ub2RlZGlyZWN0aXZlLmpzIiwibm9kZXMvbm9kZWRpc2NvdmVyY3RybC5qcyIsIm5vZGVzL25vZGVsaXN0Y3RybC5qcyIsIm5vZGVzL25vZGVzZXJ2aWNlLmpzIiwib3JnYW5pemF0aW9ucy9vcmdhbml6YXRpb25jcmVhdGVjdHJsLmpzIiwib3JnYW5pemF0aW9ucy9vcmdhbml6YXRpb25kZXRhaWxzY3RybC5qcyIsIm9yZ2FuaXphdGlvbnMvb3JnYW5pemF0aW9ubGlzdGN0cmwuanMiLCJzZXJ2aWNlX2xicy9zZXJ2aWNlbGJjcmVhdGVjdHJsLmpzIiwic2VydmljZV9sYnMvc2VydmljZWxiZGV0YWlsc2N0cmwuanMiLCJzZXJ2aWNlX2xicy9zZXJ2aWNlbGJsaXN0Y3RybC5qcyIsInNlcnZpY2VfbGJzL3NlcnZpY2VsYnBvcnRzZGlyZWN0aXZlLmpzIiwic3RvcmFnZV9wb2xpY2llcy9zdG9yYWdlcG9saWN5Y3JlYXRlY3RybC5qcyIsInN0b3JhZ2VfcG9saWNpZXMvc3RvcmFnZXBvbGljeWRldGFpbHNjdHJsLmpzIiwic3RvcmFnZV9wb2xpY2llcy9zdG9yYWdlcG9saWN5ZGlyZWN0aXZlLmpzIiwic3RvcmFnZV9wb2xpY2llcy9zdG9yYWdlcG9saWN5bGlzdGN0cmwuanMiLCJ2b2x1bWVzL3ZvbHVtZWNyZWF0ZWN0cmwuanMiLCJ2b2x1bWVzL3ZvbHVtZWRldGFpbHNjdHJsLmpzIiwidm9sdW1lcy92b2x1bWVsaXN0Y3RybC5qcyIsInZvbHVtZXMvdm9sdW1lc2VydmljZS5qcyIsImNvbXBvbmVudHMvZGlyZWN0aXZlcy9jb2xsYXBzaWJsZWRpcmVjdGl2ZS5qcyIsImNvbXBvbmVudHMvZGlyZWN0aXZlcy9jb21taXNzaW9udmFsaWRkaXJlY3RpdmUuanMiLCJjb21wb25lbnRzL2RpcmVjdGl2ZXMvY29udHJvbF9pbnRlcmZhY2VkaXJlY3RpdmUuanMiLCJjb21wb25lbnRzL2RpcmVjdGl2ZXMvZXJyb3JtZXNzYWdlZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9kaXJlY3RpdmVzL25hbWV2YWx1ZWRpcmVjdGl2ZS5qcyIsImNvbXBvbmVudHMvZGlyZWN0aXZlcy9uZXR3b3JrbW9kZWRpcmVjdGl2ZS5qcyIsImNvbXBvbmVudHMvZGlyZWN0aXZlcy9ub2RlZmllbGRzZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9kaXJlY3RpdmVzL3NjaGVkdWxlcmRpcmVjdGl2ZS5qcyIsImNvbXBvbmVudHMvZGlyZWN0aXZlcy90YWJsZWRpcmVjdGl2ZS5qcyIsImNvbXBvbmVudHMvbW9kZWxzL2FwcGxpY2F0aW9uZ3JvdXBzbW9kZWwuanMiLCJjb21wb25lbnRzL21vZGVscy9jb2xsZWN0aW9uLmpzIiwiY29tcG9uZW50cy9tb2RlbHMvZ2xvYmFsc2V0dGluZ3Ntb2RlbC5qcyIsImNvbXBvbmVudHMvbW9kZWxzL25ldHdvcmtzbW9kZWwuanMiLCJjb21wb25lbnRzL21vZGVscy9ub2Rlc21vZGVsLmpzIiwiY29tcG9uZW50cy9tb2RlbHMvb3JnYW5pemF0aW9uc21vZGVsLmpzIiwiY29tcG9uZW50cy9tb2RlbHMvcG9saWNpZXNtb2RlbC5qcyIsImNvbXBvbmVudHMvbW9kZWxzL3J1bGVzbW9kZWwuanMiLCJjb21wb25lbnRzL21vZGVscy9zZXJ2aWNlbGJzbW9kZWwuanMiLCJjb21wb25lbnRzL21vZGVscy9zdG9yYWdlcG9saWNpZXNtb2RlbC5qcyIsImNvbXBvbmVudHMvbW9kZWxzL3ZvbHVtZXNtb2RlbC5qcyIsImNvbXBvbmVudHMvdXRpbHMvY3J1ZGhlbHBlcnNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25VQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RIQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoXCJjb250aXYuZGlyZWN0aXZlc1wiLCBbXSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzE0LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm1vZGVscycsIFtdKTtcbnZhciBDb250aXZHbG9iYWxzID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vUkVTVCBlbmRwb2ludHMgZm9yIFxuICAgICAgICAnTkVUV09SS1NfRU5EUE9JTlQnOiAnL25ldG1hc3Rlci9hcGkvdjEvbmV0d29ya3MvJyxcbiAgICAgICAgJ1BPTElDSUVTX0VORFBPSU5UJzogJy9uZXRtYXN0ZXIvYXBpL3YxL3BvbGljeXMvJyxcbiAgICAgICAgJ1JVTEVTX0VORFBPSU5UJzogJy9uZXRtYXN0ZXIvYXBpL3YxL3J1bGVzLycsXG4gICAgICAgICdBUFBMSUNBVElPTkdST1VQU19FTkRQT0lOVCc6ICcvbmV0bWFzdGVyL2FwaS92MS9lbmRwb2ludEdyb3Vwcy8nLFxuICAgICAgICAnU0VSVklDRUxCU19FTkRQT0lOVCc6ICcvbmV0bWFzdGVyL2FwaS92MS9zZXJ2aWNlTEJzLycsXG4gICAgICAgICdPUkdBTklaQVRJT05TX0VORFBPSU5UJzonL25ldG1hc3Rlci9hcGkvdjEvdGVuYW50cy8nLFxuXG4gICAgICAgIC8vUkVTVCBlbmRwb2ludHMgZm9yIFZPTE1BU1RFUlxuICAgICAgICAnVk9MVU1FU19FTkRQT0lOVCc6ICcvdm9sbWFzdGVyL3ZvbHVtZXMvJyxcbiAgICAgICAgJ1ZPTFVNRVNfQ1JFQVRFX0VORFBPSU5UJzogJy92b2xtYXN0ZXIvdm9sdW1lcy9jcmVhdGUvJyxcbiAgICAgICAgJ1ZPTFVNRVNfREVMRVRFX0VORFBPSU5UJzogJy92b2xtYXN0ZXIvdm9sdW1lcy9yZW1vdmUvJyxcbiAgICAgICAgJ1ZPTFVNRVNfQ09QWVNOQVBTSE9UU19FTkRQT0lOVCc6ICcvdm9sbWFzdGVyL3ZvbHVtZXMvY29weS8nLFxuICAgICAgICAnVk9MVU1FU19VU0VTX0VORFBPSU5UJzogJy92b2xtYXN0ZXIvdXNlcy9tb3VudHMvJyxcbiAgICAgICAgJ1ZPTFVNRVNfU05BUFNIT1RTX0VORFBPSU5UJzogJy92b2xtYXN0ZXIvc25hcHNob3RzLycsXG5cbiAgICAgICAgJ1NUT1JBR0VQT0xJQ0lFU19FTkRQT0lOVCc6ICcvdm9sbWFzdGVyL3BvbGljaWVzLycsXG5cblxuICAgICAgICAvL1JFU1QgZW5kcG9pbnRzIGZvciBDTFVTVEVSXG4gICAgICAgICdOT0RFU19MSVNUX0VORFBPSU5UJzogJy9pbmZvL25vZGVzJyxcbiAgICAgICAgJ05PREVTX0RJU0NPVkVSX0VORFBPSU5UJzogJy9kaXNjb3Zlci9ub2RlcycsXG4gICAgICAgICdOT0RFU19DT01NSVNTSU9OX0VORFBPSU5UJzogJy9jb21taXNzaW9uL25vZGVzJyxcbiAgICAgICAgJ05PREVTX0RFQ09NTUlTU0lPTl9FTkRQT0lOVCc6ICcvZGVjb21taXNzaW9uL25vZGVzJyxcbiAgICAgICAgJ05PREVTX01BSU5URU5BTkNFX0VORFBPSU5UJzogJy9tYWludGVuYW5jZS9ub2RlcycsXG4gICAgICAgICdOT0RFU19MQVNUX0pPQl9FTkRQT0lOVCc6ICcvaW5mby9qb2IvbGFzdCcsXG4gICAgICAgICdOT0RFU19BQ1RJVkVfSk9CX0VORFBPSU5UJzogJy9pbmZvL2pvYi9hY3RpdmUnLFxuXG4gICAgICAgICdHTE9CQUxfU0VUX0VORFBPSU5UJzogJy9nbG9iYWxzJyxcbiAgICAgICAgJ0dMT0JBTF9HRVRfRU5EUE9JTlQnOiAnL2luZm8vZ2xvYmFscycsXG5cbiAgICAgICAgLy9SZWZyZXNoIGludGVydmFsIGluIG1pbGxpc2Vjb25kc1xuICAgICAgICAnUkVGUkVTSF9JTlRFUlZBTCc6IDUwMDAsXG5cbiAgICAgICAgLy9SZWdFeCBmb3IgdmFsaWRhdGlvblxuICAgICAgICAnQ0lEUl9SRUdFWCcgOiAnXigoWzAtOV18WzEtOV1bMC05XXwxWzAtOV17Mn18MlswLTRdWzAtOV18MjVbMC01XSlcXC4pezN9KFswLTldfFsxLTldWzAtOV18MVswLTldezJ9fDJbMC00XVswLTldfDI1WzAtNV0pKFxcLyhbMC05XXxbMS0yXVswLTldfDNbMC0yXSkpJCdcbiAgICB9XG59KSgpO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzE4LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnV0aWxzJywgW10pOyIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xOC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5hcHBsaWNhdGlvbmdyb3VwcycsIFsnY29udGl2Lm1vZGVscycsICdjb250aXYuZGlyZWN0aXZlcycsICdjb250aXYudXRpbHMnXSlcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuYXBwbGljYXRpb25ncm91cHMnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2FwcGxpY2F0aW9uZ3JvdXBzJyxcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJzxkaXYgdWktdmlldyBjbGFzcz1cInVpIGNvbnRhaW5lclwiLz4nXG4gICAgICAgICAgICB9KVxuICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xOC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5kYXNoYm9hcmQnLCBbJ2NvbnRpdi5tb2RlbHMnXSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2Lmdsb2JhbHNldHRpbmdzJywgWydjb250aXYubW9kZWxzJywgJ2NvbnRpdi5kaXJlY3RpdmVzJywgJ2NvbnRpdi51dGlscyddKVxyXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcclxuXHQgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuZ2xvYmFsc2V0dGluZ3MnLCB7XHJcblx0ICAgICAgICAgICAgdXJsOiAnL2dsb2JhbCcsXHJcblx0ICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXHJcblx0ICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IHVpLXZpZXcgY2xhc3M9XCJ1aSBjb250YWluZXJcIi8+J1xyXG5cdCAgICAgICAgfSlcclxuXHQgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuZ2xvYmFsc2V0dGluZ3Muc2V0dGluZ3MnLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvc2V0dGluZ3MnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdnbG9iYWxfc2V0dGluZ3MvZ2xvYmFsc21lbnUuaHRtbCdcclxuICAgICAgICAgICAgfSlcclxuXHQgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuZ2xvYmFsc2V0dGluZ3Muc2V0dGluZ3MubG9ncycsIHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9sb2dzJyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICcnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcnXHJcblx0ICAgICAgICB9KVxyXG5cdCAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5nbG9iYWxzZXR0aW5ncy5zZXR0aW5ncy5hdXRoJywge1xyXG5cdCAgICAgICAgICAgIHVybDogJy9hdXRoJyxcclxuXHQgICAgICAgICAgICBjb250cm9sbGVyOiAnJyxcclxuXHQgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJydcclxuXHQgICAgICAgIH0pXHJcblx0ICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lmdsb2JhbHNldHRpbmdzLnNldHRpbmdzLmxpY2Vuc2UnLCB7XHJcblx0ICAgICAgICAgICAgdXJsOiAnL2xpY2Vuc2UnLFxyXG5cdCAgICAgICAgICAgIGNvbnRyb2xsZXI6ICcnLFxyXG5cdCAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnJ1xyXG5cdCAgICAgICAgfSlcclxuXHQgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuZ2xvYmFsc2V0dGluZ3Muc2V0dGluZ3MubmV0d29ya3MnLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvbmV0d29ya3MnLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJycsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJydcclxuICAgICAgICAgICAgfSlcclxuXHQgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuZ2xvYmFsc2V0dGluZ3Muc2V0dGluZ3MucG9saWNpZXMnLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcG9saWNpZXMnLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJycsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJydcclxuICAgICAgICAgICAgfSlcclxuICAgIH1dKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTkvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubG9naW4nLCBbJ2NvbnRpdi51dGlscyddKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTkvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubWVudScsIFtdKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTgvMTYuXG4gKi9cblxuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5uZXR3b3JrcG9saWNpZXMnLCBbJ2NvbnRpdi5tb2RlbHMnLCAnY29udGl2LmRpcmVjdGl2ZXMnLCAnY29udGl2LnV0aWxzJ10pOyIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xOC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5uZXR3b3JrcycsIFsnY29udGl2Lm1vZGVscycsICdjb250aXYuZGlyZWN0aXZlcycsICdjb250aXYudXRpbHMnXSlcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2NvbnRpdi5tZW51Lm5ldHdvcmtzJywge1xuICAgICAgICAgICAgdXJsOiAnL25ldHdvcmtzJyxcbiAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IHVpLXZpZXcgY2xhc3M9XCJ1aSBjb250YWluZXJcIi8+J1xuICAgICAgICB9KVxuICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xOC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5ub2RlcycsIFsnY29udGl2Lm1vZGVscycsICdjb250aXYuZGlyZWN0aXZlcycsICdjb250aXYudXRpbHMnXSlcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubm9kZXMnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL25vZGVzJyxcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJzxkaXYgdWktdmlldyBjbGFzcz1cInVpIGNvbnRhaW5lclwiLz4nXG4gICAgICAgICAgICB9KVxuICAgIH1dKTtcbiIsImFuZ3VsYXIubW9kdWxlKCdjb250aXYub3JnYW5pemF0aW9ucycsIFsnY29udGl2Lm1vZGVscycsICdjb250aXYuZGlyZWN0aXZlcycsICdjb250aXYudXRpbHMnXSlcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2NvbnRpdi5tZW51Lm9yZ2FuaXphdGlvbnMnLCB7XG4gICAgICAgICAgICB1cmw6ICcvb3JnYW5pemF0aW9ucycsXG4gICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnPGRpdiB1aS12aWV3IGNsYXNzPVwidWkgY29udGFpbmVyXCIvPidcbiAgICAgICAgfSlcbiAgICB9XSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzE4LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnNlcnZpY2VsYnMnLCBbJ2NvbnRpdi5tb2RlbHMnLCAnY29udGl2LmRpcmVjdGl2ZXMnLCAnY29udGl2LnV0aWxzJ10pXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnNlcnZpY2VsYnMnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL3NlcnZpY2VsYnMnLFxuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnPGRpdiB1aS12aWV3IGNsYXNzPVwidWkgY29udGFpbmVyXCIvPidcbiAgICAgICAgICAgIH0pXG4gICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzE4LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnN0b3JhZ2Vwb2xpY2llcycsIFsnY29udGl2Lm1vZGVscycsICdjb250aXYuZGlyZWN0aXZlcycsICdjb250aXYudXRpbHMnXSlcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc3RvcmFnZXBvbGljaWVzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9zdG9yYWdlcG9saWNpZXMnLFxuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnPGRpdiB1aS12aWV3IGNsYXNzPVwidWkgY29udGFpbmVyXCIvPidcbiAgICAgICAgICAgIH0pXG4gICAgfV0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xOC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi52b2x1bWVzJywgWydjb250aXYubW9kZWxzJywgJ2NvbnRpdi5kaXJlY3RpdmVzJywgJ2NvbnRpdi51dGlscyddKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS52b2x1bWVzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy92b2x1bWVzJyxcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJzxkaXYgdWktdmlldyBjbGFzcz1cInVpIGNvbnRhaW5lclwiLz4nXG4gICAgICAgICAgICB9KVxuICAgIH1dKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuXG4vLyBEZWNsYXJlIGFwcCBsZXZlbCBtb2R1bGUgd2hpY2ggZGVwZW5kcyBvbiB2aWV3cywgYW5kIGNvbXBvbmVudHNcbmFuZ3VsYXIubW9kdWxlKCdjb250aXZBcHAnLCBbXG4gICAgICAgICd1aS5yb3V0ZXInLFxuICAgICAgICAnY29udGl2LmxvZ2luJyxcbiAgICAgICAgJ2NvbnRpdi5tZW51JyxcbiAgICAgICAgJ2NvbnRpdi5kYXNoYm9hcmQnLFxuICAgICAgICAnY29udGl2LmFwcGxpY2F0aW9uZ3JvdXBzJyxcbiAgICAgICAgJ2NvbnRpdi5uZXR3b3JrcycsXG4gICAgICAgICdjb250aXYubmV0d29ya3BvbGljaWVzJyxcbiAgICAgICAgJ2NvbnRpdi5zdG9yYWdlcG9saWNpZXMnLFxuICAgICAgICAnY29udGl2LnNlcnZpY2VsYnMnLFxuICAgICAgICAnY29udGl2LnZvbHVtZXMnLFxuICAgICAgICAnY29udGl2Lm5vZGVzJyxcbiAgICAgICAgJ2NvbnRpdi5vcmdhbml6YXRpb25zJyxcbiAgICAgICAgJ2NvbnRpdi5nbG9iYWxzZXR0aW5ncycsXG4gICAgXSlcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCAnJHVybFJvdXRlclByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgLy9hYnN0cmFjdCBzdGF0ZSBzZXJ2ZXMgYXMgYSBQTEFDRUhPTERFUiBvciBOQU1FU1BBQ0UgZm9yIGFwcGxpY2F0aW9uIHN0YXRlc1xuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJzxkaXYgdWktdmlldyBjbGFzcz1cInVpIGZsdWlkIGNvbnRhaW5lclwiLz4nXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG5cbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gMy8xMS8xNi5cbiAqL1xuLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzEwLzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LmFwcGxpY2F0aW9uZ3JvdXBzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuYXBwbGljYXRpb25ncm91cHMuY3JlYXRlJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9jcmVhdGUnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybCBhcyBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHBsaWNhdGlvbmdyb3Vwcy9hcHBsaWNhdGlvbmdyb3VwY3JlYXRlLmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ0FwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsJywgW1xuICAgICAgICAnJHN0YXRlJyxcbiAgICAgICAgJ0FwcGxpY2F0aW9uR3JvdXBzTW9kZWwnLFxuICAgICAgICAnTmV0d29ya3NNb2RlbCcsXG4gICAgICAgICdQb2xpY2llc01vZGVsJyxcbiAgICAgICAgJ1J1bGVzTW9kZWwnLFxuICAgICAgICAnQXBwbGljYXRpb25Hcm91cFNlcnZpY2UnLFxuICAgICAgICAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLFxuICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cHNNb2RlbCxcbiAgICAgICAgICAgICAgICAgIE5ldHdvcmtzTW9kZWwsXG4gICAgICAgICAgICAgICAgICBQb2xpY2llc01vZGVsLFxuICAgICAgICAgICAgICAgICAgUnVsZXNNb2RlbCxcbiAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uR3JvdXBTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybCA9IHRoaXM7XG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5uZXR3b3JrcyA9IFtdO1xuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuaXNvbGF0aW9uUG9saWNpZXMgPSBbXTtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLmFwcGxpY2F0aW9uR3JvdXAgPSB7fTtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLnNlbGVjdGVkTmV0d29yayA9IHt9O1xuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuc2VsZWN0ZWRQb2xpY3kgPSB7fTtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLnNlbGVjdGVkUG9saWNpZXMgPSBbXTtcblxuICAgICAgICAgICAgLy9UbyBkaXNwbGF5IGluY29taW5nIGFuZCBvdXRnb2luZyBydWxlcyBmb3Igc2VsZWN0ZWQgcG9saWNpZXNcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLmluY29taW5nUnVsZXMgPSBbXTtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLm91dGdvaW5nUnVsZXMgPSBbXTtcblxuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuaXNvbGF0aW9uUG9saWNpZXNWaXNpYmxlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvQXBwbGljYXRpb25Hcm91cCgpIHtcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51LmFwcGxpY2F0aW9uZ3JvdXBzLmxpc3QnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY2FuY2VsQ3JlYXRpbmcoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVG9BcHBsaWNhdGlvbkdyb3VwKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IG5ldHdvcmtzIGZvciB0aGUgZ2l2ZW4gdGVuYW50LlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXROZXR3b3JrcygpIHtcbiAgICAgICAgICAgICAgICBOZXR3b3Jrc01vZGVsLmdldCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5uZXR3b3JrcyA9IF8uZmlsdGVyKHJlc3VsdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3RlbmFudE5hbWUnOiAnZGVmYXVsdCcvL1RPRE86IFJlbW92ZSBoYXJkY29kZWQgdGVuYW50LlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXQgcG9saWNpZXMgZm9yIHRoZSBnaXZlbiB0ZW5hbnQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldElzb2xhdGlvblBvbGljaWVzKCkge1xuICAgICAgICAgICAgICAgIFBvbGljaWVzTW9kZWwuZ2V0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLmlzb2xhdGlvblBvbGljaWVzID0gXy5maWx0ZXIocmVzdWx0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAndGVuYW50TmFtZSc6ICdkZWZhdWx0Jy8vVE9ETzogUmVtb3ZlIGhhcmRjb2RlZCB0ZW5hbnQuXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEFkZCBwb2xpY3kgdG8gbmV3IGFwcGxpY2F0aW9uIGdyb3VwXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGFkZElzb2xhdGlvblBvbGljeSgpIHtcbiAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbkdyb3VwU2VydmljZS5hZGRJc29sYXRpb25Qb2xpY3koYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJlbW92ZSBwb2xpY3kgZnJvbSBuZXcgYXBwbGljYXRpb24gZ3JvdXBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gcmVtb3ZlSXNvbGF0aW9uUG9saWN5KHBvbGljeU5hbWUpIHtcbiAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbkdyb3VwU2VydmljZS5yZW1vdmVJc29sYXRpb25Qb2xpY3koYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwsIHBvbGljeU5hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVBcHBsaWNhdGlvbkdyb3VwKCkge1xuICAgICAgICAgICAgICAgIC8vZm9ybSBjb250cm9sbGVyIGlzIGluamVjdGVkIGJ5IHRoZSBodG1sIHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgLy9jaGVja2luZyBpZiBhbGwgdmFsaWRhdGlvbnMgaGF2ZSBwYXNzZWRcbiAgICAgICAgICAgICAgICBpZiAoYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuZm9ybS4kdmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIoYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5hcHBsaWNhdGlvbkdyb3VwLm5ldHdvcmtOYW1lID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLnNlbGVjdGVkTmV0d29yay5uZXR3b3JrTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwuYXBwbGljYXRpb25Hcm91cC5rZXkgPVxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cHNNb2RlbC5nZW5lcmF0ZUtleShhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5hcHBsaWNhdGlvbkdyb3VwKTtcblxuICAgICAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbkdyb3Vwc01vZGVsLmNyZWF0ZShhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5hcHBsaWNhdGlvbkdyb3VwKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvQXBwbGljYXRpb25Hcm91cCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IoYXBwbGljYXRpb25Hcm91cENyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLmFwcGxpY2F0aW9uR3JvdXAgPSB7XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwTmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIG5ldHdvcmtOYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcG9saWNpZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICB0ZW5hbnROYW1lOiAnZGVmYXVsdCcvL1RPRE86IFJlbW92ZSBoYXJkY29kZWQgdGVuYW50LlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGdldE5ldHdvcmtzKCk7XG4gICAgICAgICAgICBnZXRJc29sYXRpb25Qb2xpY2llcygpO1xuXG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5jcmVhdGVBcHBsaWNhdGlvbkdyb3VwID0gY3JlYXRlQXBwbGljYXRpb25Hcm91cDtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBDcmVhdGVDdHJsLmNhbmNlbENyZWF0aW5nID0gY2FuY2VsQ3JlYXRpbmc7XG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5hZGRJc29sYXRpb25Qb2xpY3kgPSBhZGRJc29sYXRpb25Qb2xpY3k7XG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3JlYXRlQ3RybC5yZW1vdmVJc29sYXRpb25Qb2xpY3kgPSByZW1vdmVJc29sYXRpb25Qb2xpY3k7XG5cbiAgICAgICAgICAgIHJlc2V0Rm9ybSgpO1xuICAgICAgICB9XSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzE1LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LmFwcGxpY2F0aW9uZ3JvdXBzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuYXBwbGljYXRpb25ncm91cHMuZGV0YWlscycsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZGV0YWlscy86a2V5JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnQXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsIGFzIGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHBsaWNhdGlvbmdyb3Vwcy9hcHBsaWNhdGlvbmdyb3VwZGV0YWlscy5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuYXBwbGljYXRpb25ncm91cHMuZWRpdCcsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZWRpdC86a2V5JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnQXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsIGFzIGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHBsaWNhdGlvbmdyb3Vwcy9hcHBsaWNhdGlvbmdyb3VwZGV0YWlscy5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdBcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwnLCBbXG4gICAgICAgICckc3RhdGUnLFxuICAgICAgICAnJHN0YXRlUGFyYW1zJyxcbiAgICAgICAgJ0FwcGxpY2F0aW9uR3JvdXBzTW9kZWwnLFxuICAgICAgICAnUG9saWNpZXNNb2RlbCcsXG4gICAgICAgICdSdWxlc01vZGVsJyxcbiAgICAgICAgJ0FwcGxpY2F0aW9uR3JvdXBTZXJ2aWNlJyxcbiAgICAgICAgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSxcbiAgICAgICAgICAgICAgICAgICRzdGF0ZVBhcmFtcyxcbiAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uR3JvdXBzTW9kZWwsXG4gICAgICAgICAgICAgICAgICBQb2xpY2llc01vZGVsLFxuICAgICAgICAgICAgICAgICAgUnVsZXNNb2RlbCxcbiAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uR3JvdXBTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwgPSB0aGlzO1xuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmlzb2xhdGlvblBvbGljaWVzID0gW107XG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuYXBwbGljYXRpb25Hcm91cCA9IHt9O1xuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLnNlbGVjdGVkTmV0d29yayA9IHt9O1xuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLnNlbGVjdGVkUG9saWN5ID0ge307XG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuc2VsZWN0ZWRQb2xpY2llcyA9IFtdO1xuXG4gICAgICAgICAgICAvL1RvIGRpc3BsYXkgaW5jb21pbmcgYW5kIG91dGdvaW5nIHJ1bGVzIGZvciBzZWxlY3RlZCBwb2xpY2llc1xuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmluY29taW5nUnVsZXMgPSBbXTtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5vdXRnb2luZ1J1bGVzID0gW107XG5cblxuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmlzb2xhdGlvblBvbGljaWVzVmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRvIHNob3cgZWRpdCBvciBkZXRhaWxzIHNjcmVlbiBiYXNlZCBvbiB0aGUgcm91dGVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gc2V0TW9kZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAoJHN0YXRlLmlzKCdjb250aXYubWVudS5hcHBsaWNhdGlvbmdyb3Vwcy5lZGl0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLm1vZGUgPSAnZWRpdCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLm1vZGUgPSAnZGV0YWlscyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub0FwcGxpY2F0aW9uR3JvdXAoKSB7XG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5hcHBsaWNhdGlvbmdyb3Vwcy5saXN0Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvQXBwbGljYXRpb25Hcm91cERldGFpbHMoKSB7XG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5hcHBsaWNhdGlvbmdyb3Vwcy5kZXRhaWxzJywgeydrZXknOiBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuYXBwbGljYXRpb25Hcm91cC5rZXl9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY2FuY2VsRWRpdGluZygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5Ub0FwcGxpY2F0aW9uR3JvdXBEZXRhaWxzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFJ1bGVzKCkge1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5hcHBsaWNhdGlvbkdyb3VwLnBvbGljaWVzLmZvckVhY2goZnVuY3Rpb24gKHBvbGljeSkge1xuICAgICAgICAgICAgICAgICAgICAvL1RvIGRpc3BsYXkgcnVsZXMgb2Ygc2VsZWN0ZWQgcG9saWNpZXNcbiAgICAgICAgICAgICAgICAgICAgUnVsZXNNb2RlbC5nZXRJbmNvbWluZ1J1bGVzKHBvbGljeSwgJ2RlZmF1bHQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJ1bGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmluY29taW5nUnVsZXMsIHJ1bGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBSdWxlc01vZGVsLmdldE91dGdvaW5nUnVsZXMocG9saWN5LCAnZGVmYXVsdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocnVsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwub3V0Z29pbmdSdWxlcywgcnVsZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gZGVsZXRlQXBwbGljYXRpb25Hcm91cCgpIHtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IoYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uR3JvdXBzTW9kZWwuZGVsZXRlKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5hcHBsaWNhdGlvbkdyb3VwKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub0FwcGxpY2F0aW9uR3JvdXAoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdldCBwb2xpY2llcyBmb3IgdGhlIGdpdmVuIHRlbmFudC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0SXNvbGF0aW9uUG9saWNpZXMoKSB7XG4gICAgICAgICAgICAgICAgUG9saWNpZXNNb2RlbC5nZXQoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLmlzb2xhdGlvblBvbGljaWVzID0gXy5maWx0ZXIocmVzdWx0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAndGVuYW50TmFtZSc6ICdkZWZhdWx0Jy8vVE9ETzogUmVtb3ZlIGhhcmRjb2RlZCB0ZW5hbnQuXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQWRkIHBvbGljeSB0byBhcHBsaWNhdGlvbiBncm91cFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBhZGRJc29sYXRpb25Qb2xpY3koKSB7XG4gICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cFNlcnZpY2UuYWRkSXNvbGF0aW9uUG9saWN5KGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmVtb3ZlIHBvbGljeSBmcm9tIGFwcGxpY2F0aW9uIGdyb3VwXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlbW92ZUlzb2xhdGlvblBvbGljeShwb2xpY3lOYW1lKSB7XG4gICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cFNlcnZpY2UucmVtb3ZlSXNvbGF0aW9uUG9saWN5KGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCwgcG9saWN5TmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHNhdmVBcHBsaWNhdGlvbkdyb3VwKCkge1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cHNNb2RlbC5zYXZlKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5hcHBsaWNhdGlvbkdyb3VwKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub0FwcGxpY2F0aW9uR3JvdXBEZXRhaWxzKCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IoYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsKTtcblxuICAgICAgICAgICAgQXBwbGljYXRpb25Hcm91cHNNb2RlbC5nZXRNb2RlbEJ5S2V5KCRzdGF0ZVBhcmFtcy5rZXkpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5hcHBsaWNhdGlvbkdyb3VwID0gZ3JvdXA7XG4gICAgICAgICAgICAgICAgICAgIC8vQXBwbGljYXRpb24gR3JvdXBzIG1pZ2h0IG5vdCBoYXZlIGFueSBwb2xpY2llcyBhc3NvY2lhdGVkIHdpdGggdGhlbSBzbyBkZWZpbmUgYW4gZW1wdHkgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5hcHBsaWNhdGlvbkdyb3VwLnBvbGljaWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5hcHBsaWNhdGlvbkdyb3VwLnBvbGljaWVzID0gW107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZ2V0UnVsZXMoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZ2V0SXNvbGF0aW9uUG9saWNpZXMoKTtcblxuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLnNhdmVBcHBsaWNhdGlvbkdyb3VwID0gc2F2ZUFwcGxpY2F0aW9uR3JvdXA7XG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuY2FuY2VsRWRpdGluZyA9IGNhbmNlbEVkaXRpbmc7XG4gICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwRGV0YWlsc0N0cmwuYWRkSXNvbGF0aW9uUG9saWN5ID0gYWRkSXNvbGF0aW9uUG9saWN5O1xuICAgICAgICAgICAgYXBwbGljYXRpb25Hcm91cERldGFpbHNDdHJsLnJlbW92ZUlzb2xhdGlvblBvbGljeSA9IHJlbW92ZUlzb2xhdGlvblBvbGljeTtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBEZXRhaWxzQ3RybC5kZWxldGVBcHBsaWNhdGlvbkdyb3VwID0gZGVsZXRlQXBwbGljYXRpb25Hcm91cDtcblxuICAgICAgICAgICAgc2V0TW9kZSgpO1xuXG4gICAgICAgIH1dKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMTEvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuYXBwbGljYXRpb25ncm91cHMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5hcHBsaWNhdGlvbmdyb3Vwcy5saXN0Jywge1xuICAgICAgICAgICAgICAgIHVybDogJy9saXN0JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnQXBwbGljYXRpb25Hcm91cExpc3RDdHJsIGFzIGFwcGxpY2F0aW9uR3JvdXBMaXN0Q3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHBsaWNhdGlvbmdyb3Vwcy9hcHBsaWNhdGlvbmdyb3VwbGlzdC5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdBcHBsaWNhdGlvbkdyb3VwTGlzdEN0cmwnLFxuICAgICAgICBbJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJGZpbHRlcicsICdBcHBsaWNhdGlvbkdyb3Vwc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICRpbnRlcnZhbCwgJGZpbHRlciwgQXBwbGljYXRpb25Hcm91cHNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXBwbGljYXRpb25Hcm91cExpc3RDdHJsID0gdGhpcztcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldEFwcGxpY2F0aW9uR3JvdXBzKHJlbG9hZCkge1xuICAgICAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbkdyb3Vwc01vZGVsLmdldChyZWxvYWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihhcHBsaWNhdGlvbkdyb3VwTGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uR3JvdXBMaXN0Q3RybC5ncm91cHMgPSAkZmlsdGVyKCdvcmRlckJ5JykocmVzdWx0LCAnZ3JvdXBOYW1lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoYXBwbGljYXRpb25Hcm91cExpc3RDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vTG9hZCBmcm9tIGNhY2hlIGZvciBxdWljayBkaXNwbGF5IGluaXRpYWxseVxuICAgICAgICAgICAgICAgIGdldEFwcGxpY2F0aW9uR3JvdXBzKGZhbHNlKTtcblxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICAgICAgICAgIC8vRG9uJ3Qgc3RhcnQgYXV0by1yZWZyZXNoIGlmIG9uZSBpcyBhbHJlYWR5IGluIHByb2dyZXNzXG4gICAgICAgICAgICAgICAgaWYgKCFhbmd1bGFyLmlzRGVmaW5lZChwcm9taXNlKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldEFwcGxpY2F0aW9uR3JvdXBzKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9zdG9wIHBvbGxpbmcgd2hlbiB1c2VyIG1vdmVzIGF3YXkgZnJvbSB0aGUgcGFnZVxuICAgICAgICAgICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHByb21pc2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzE2LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LmFwcGxpY2F0aW9uZ3JvdXBzJylcbiAgICAuZmFjdG9yeSgnQXBwbGljYXRpb25Hcm91cFNlcnZpY2UnLCBbJ1J1bGVzTW9kZWwnLCBmdW5jdGlvbiAoUnVsZXNNb2RlbCkge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgcG9saWN5IHRvIGFwcGxpY2F0aW9uIGdyb3VwXG4gICAgICAgICAqIEBwYXJhbSBhcHBsaWNhdGlvbkdyb3VwQ3RybCBDb250cm9sbGVyIGZvciBhcHBsaWNhdGlvbiBncm91cCBlZGl0IG9yIGNyZWF0ZSBvcGVyYXRpb25cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGFkZElzb2xhdGlvblBvbGljeShhcHBsaWNhdGlvbkdyb3VwQ3RybCkge1xuICAgICAgICAgICAgaWYgKF8uZmluZChhcHBsaWNhdGlvbkdyb3VwQ3RybC5zZWxlY3RlZFBvbGljaWVzLCBhcHBsaWNhdGlvbkdyb3VwQ3RybC5zZWxlY3RlZFBvbGljeSkgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICAvL1RvIGRpc3BsYXkgc2VsZWN0ZWQgcG9saWNpZXNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3RybC5zZWxlY3RlZFBvbGljaWVzLnB1c2goYXBwbGljYXRpb25Hcm91cEN0cmwuc2VsZWN0ZWRQb2xpY3kpO1xuXG4gICAgICAgICAgICAgICAgLy9UbyBkaXNwbGF5IHJ1bGVzIG9mIHNlbGVjdGVkIHBvbGljaWVzXG4gICAgICAgICAgICAgICAgUnVsZXNNb2RlbC5nZXRJbmNvbWluZ1J1bGVzKGFwcGxpY2F0aW9uR3JvdXBDdHJsLnNlbGVjdGVkUG9saWN5LnBvbGljeU5hbWUsICdkZWZhdWx0JylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJ1bGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcHBsaWNhdGlvbkdyb3VwQ3RybC5pbmNvbWluZ1J1bGVzLCBydWxlcyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFJ1bGVzTW9kZWwuZ2V0T3V0Z29pbmdSdWxlcyhhcHBsaWNhdGlvbkdyb3VwQ3RybC5zZWxlY3RlZFBvbGljeS5wb2xpY3lOYW1lLCAnZGVmYXVsdCcpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChydWxlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXBwbGljYXRpb25Hcm91cEN0cmwub3V0Z29pbmdSdWxlcywgcnVsZXMpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vVG8gYmUgYWRkZWQgdG8gYXBwbGljYXRpb24gZ3JvdXAgYW5kIHNhdmVkIHRvIHRoZSBzZXJ2ZXJcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbkdyb3VwQ3RybC5hcHBsaWNhdGlvbkdyb3VwLnBvbGljaWVzXG4gICAgICAgICAgICAgICAgICAgIC5wdXNoKGFwcGxpY2F0aW9uR3JvdXBDdHJsLnNlbGVjdGVkUG9saWN5LnBvbGljeU5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSBwb2xpY3kgZnJvbSBhcHBsaWNhdGlvbiBncm91cFxuICAgICAgICAgKiBAcGFyYW0gYXBwbGljYXRpb25Hcm91cEN0cmwgQ29udHJvbGxlciBmb3IgYXBwbGljYXRpb24gZ3JvdXAgZWRpdCBvciBjcmVhdGUgb3BlcmF0aW9uXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiByZW1vdmVJc29sYXRpb25Qb2xpY3koYXBwbGljYXRpb25Hcm91cEN0cmwsIHBvbGljeU5hbWUpIHtcbiAgICAgICAgICAgIF8ucmVtb3ZlKGFwcGxpY2F0aW9uR3JvdXBDdHJsLmFwcGxpY2F0aW9uR3JvdXAucG9saWNpZXMsIGZ1bmN0aW9uIChwb2xpY3kpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9saWN5ID09IHBvbGljeU5hbWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIF8ucmVtb3ZlKGFwcGxpY2F0aW9uR3JvdXBDdHJsLmluY29taW5nUnVsZXMsIGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJ1bGUucG9saWN5TmFtZSA9PSBwb2xpY3lOYW1lO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBfLnJlbW92ZShhcHBsaWNhdGlvbkdyb3VwQ3RybC5vdXRnb2luZ1J1bGVzLCBmdW5jdGlvbiAocnVsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBydWxlLnBvbGljeU5hbWUgPT0gcG9saWN5TmFtZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZElzb2xhdGlvblBvbGljeTogYWRkSXNvbGF0aW9uUG9saWN5LFxuICAgICAgICAgICAgcmVtb3ZlSXNvbGF0aW9uUG9saWN5OiByZW1vdmVJc29sYXRpb25Qb2xpY3lcbiAgICAgICAgfVxuXG4gICAgfV0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gMy8xMS8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5kYXNoYm9hcmQnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5kYXNoYm9hcmQnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2Rhc2hib2FyZCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0Rhc2hib2FyZEN0cmwgYXMgZGFzaGJvYXJkQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdkYXNoYm9hcmQvZGFzaGJvYXJkLmh0bWwnXG4gICAgICAgICAgICB9KTtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignRGFzaGJvYXJkQ3RybCcsXG4gICAgICAgIFtcbiAgICAgICAgICAgICckc2NvcGUnLFxuICAgICAgICAgICAgJyRpbnRlcnZhbCcsXG4gICAgICAgICAgICAnTm9kZXNNb2RlbCcsXG4gICAgICAgICAgICAnTmV0d29ya3NNb2RlbCcsXG4gICAgICAgICAgICAnVm9sdW1lc01vZGVsJyxcbiAgICAgICAgICAgICdBcHBsaWNhdGlvbkdyb3Vwc01vZGVsJyxcbiAgICAgICAgICAgICdQb2xpY2llc01vZGVsJyxcbiAgICAgICAgICAgICdTdG9yYWdlUG9saWNpZXNNb2RlbCcsXG4gICAgICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLFxuICAgICAgICAgICAgICAgICAgICAgICRpbnRlcnZhbCxcbiAgICAgICAgICAgICAgICAgICAgICBOb2Rlc01vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgIE5ldHdvcmtzTW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgVm9sdW1lc01vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uR3JvdXBzTW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgUG9saWNpZXNNb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICBTdG9yYWdlUG9saWNpZXNNb2RlbCkge1xuICAgICAgICAgICAgICAgIHZhciBkYXNoYm9hcmRDdHJsID0gdGhpcztcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldERhc2hib2FyZEluZm8ocmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgIE5vZGVzTW9kZWwuZ2V0KHJlbG9hZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXNoYm9hcmRDdHJsLm5vZGVzID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBOZXR3b3Jrc01vZGVsLmdldChyZWxvYWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFzaGJvYXJkQ3RybC5uZXR3b3JrcyA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgVm9sdW1lc01vZGVsLmdldChyZWxvYWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFzaGJvYXJkQ3RybC52b2x1bWVzID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbkdyb3Vwc01vZGVsLmdldChyZWxvYWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFzaGJvYXJkQ3RybC5ncm91cHMgPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFBvbGljaWVzTW9kZWwuZ2V0KHJlbG9hZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXNoYm9hcmRDdHJsLm5ldHdvcmtwb2xpY2llcyA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgU3RvcmFnZVBvbGljaWVzTW9kZWwuZ2V0KHJlbG9hZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXNoYm9hcmRDdHJsLnN0b3JhZ2Vwb2xpY2llcyA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL1dpbGwgZGlzcGxheSAwIGlmIHRoZXJlIGlzIGVycm9yIGZldGNoaW5nIGRhdGFcbiAgICAgICAgICAgICAgICBkYXNoYm9hcmRDdHJsLm5vZGVzID0gMDtcbiAgICAgICAgICAgICAgICBkYXNoYm9hcmRDdHJsLm5ldHdvcmtzID0gMDtcbiAgICAgICAgICAgICAgICBkYXNoYm9hcmRDdHJsLnZvbHVtZXMgPSAwO1xuICAgICAgICAgICAgICAgIGRhc2hib2FyZEN0cmwuZ3JvdXBzID0gMDtcbiAgICAgICAgICAgICAgICBkYXNoYm9hcmRDdHJsLm5ldHdvcmtwb2xpY2llcyA9IDA7XG4gICAgICAgICAgICAgICAgZGFzaGJvYXJkQ3RybC5zdG9yYWdlcG9saWNpZXMgPSAwO1xuXG4gICAgICAgICAgICAgICAgLy9Mb2FkIGZyb20gY2FjaGUgZm9yIHF1aWNrIGRpc3BsYXkgaW5pdGlhbGx5XG4gICAgICAgICAgICAgICAgZ2V0RGFzaGJvYXJkSW5mbyhmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9ICRpbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGdldERhc2hib2FyZEluZm8odHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSwgNTAwMCk7XG5cbiAgICAgICAgICAgICAgICAvL3N0b3AgcG9sbGluZyB3aGVuIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgJHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICRpbnRlcnZhbC5jYW5jZWwocHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2Lmdsb2JhbHNldHRpbmdzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuZ2xvYmFsc2V0dGluZ3Muc2V0dGluZ3MuY2x1c3RlcicsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvY2x1c3RlcicsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0NsdXN0ZXJTZXR0aW5nQ3RybCBhcyBub2RlQ29tbWlzc2lvbkN0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnZ2xvYmFsX3NldHRpbmdzL3NldHRpbmdfY2x1c3Rlci5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdDbHVzdGVyU2V0dGluZ0N0cmwnLCBbXG4gICAgICAgICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ0dsb2JhbHNldHRpbmdzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLCAnU2V0dGluZ1NlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsIEdsb2JhbHNldHRpbmdzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlLCBTZXR0aW5nU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIG5vZGVDb21taXNzaW9uQ3RybCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvTWVudSgpIHtcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51Lmdsb2JhbHNldHRpbmdzLnNldHRpbmdzJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUV4dHJhVmFycygpIHtcbiAgICAgICAgICAgICAgICAvL0FkZCBhbnNpYmxlIHZhcmlhYmxlcyB0byBleHRyYV92YXJzXG4gICAgICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmFuc2libGVWYXJpYWJsZXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwuZXh0cmFfdmFyc1tpdGVtLm5hbWVdID0gaXRlbS52YWx1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vQWRkIGVudmlyb25tZW50IHZhcmlhYmxlcyB0byBleHRyYV92YXJzXG4gICAgICAgICAgICAgICAgdmFyIGVudlZhcnMgPSB7fTtcbiAgICAgICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwuZW52VmFyaWFibGVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgZW52VmFyc1tpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwuZXh0cmFfdmFyc1snZW52J10gPSBlbnZWYXJzO1xuICAgICAgICAgICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5ub2RlT3BzT2JqLmV4dHJhX3ZhcnMgPSBKU09OLnN0cmluZ2lmeShub2RlQ29tbWlzc2lvbkN0cmwuZXh0cmFfdmFycyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUNsdXN0ZXJTZXR0aW5ncygpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZUNvbW1pc3Npb25DdHJsLmZvcm0uJHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihub2RlQ29tbWlzc2lvbkN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihub2RlQ29tbWlzc2lvbkN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwubm9kZU9wc09iai5ub2RlcyA9IFskc3RhdGVQYXJhbXMua2V5XTtcbiAgICAgICAgICAgICAgICAgICAgU2V0dGluZ1NlcnZpY2UuY2xlYW51cEV4dHJhVmFycygpO1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVFeHRyYVZhcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgR2xvYmFsc2V0dGluZ3NNb2RlbC51cGRhdGUobm9kZUNvbW1pc3Npb25DdHJsLm5vZGVPcHNPYmopLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihub2RlQ29tbWlzc2lvbkN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9NZW51KCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5vZGVDb21taXNzaW9uQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3Iobm9kZUNvbW1pc3Npb25DdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5ub2RlT3BzT2JqID0ge307XG4gICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwuZXh0cmFfdmFycyA9IHt9OyAvL1RPRE8gSW50aWFsaXplIGZyb20gZ2xvYmFsIHNldHRpbmdzXG4gICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwuYW5zaWJsZVZhcmlhYmxlcyA9IFtdO1xuICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmVudlZhcmlhYmxlcyA9IFtdO1xuXG4gICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwudXBkYXRlQ2x1c3RlclNldHRpbmdzID0gdXBkYXRlQ2x1c3RlclNldHRpbmdzO1xuICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLnJldHVyblRvTWVudSA9IHJldHVyblRvTWVudTtcblxuICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihub2RlQ29tbWlzc2lvbkN0cmwpO1xuICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKG5vZGVDb21taXNzaW9uQ3RybCk7XG4gICAgICAgIH1dKTtcbiIsImFuZ3VsYXIubW9kdWxlKCdjb250aXYuZ2xvYmFsc2V0dGluZ3MnKVxuICAgIC5mYWN0b3J5KCdTZXR0aW5nU2VydmljZScsIFsnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdOb2Rlc01vZGVsJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBOb2Rlc01vZGVsKSB7XG4gICAgICAgICAgICB2YXIgbm9kZUNvbW1pc3Npb25DdHJsID0gdGhpcztcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDbGVhbnVwIGFuc2libGUgdmFyaWFibGVzIGZvciBuZXR3b3JrIG1vZGUgYW5kIHNjaGVkdWxlci4gbmctaWYgcmVtb3ZlcyBpdCBmcm9tIHRoZSB2aWV3IChET00pIGJ1dCBub3QgZnJvbVxuICAgICAgICAgICAgICogdGhlIG1vZGVsLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBjbGVhbnVwRXh0cmFWYXJzKCkge1xuICAgICAgICAgICAgICAgIC8vQ2xlYW51cCBmb3IgbmV0d29yayBtb2RlXG4gICAgICAgICAgICAgICAgaWYgKG5vZGVDb21taXNzaW9uQ3RybC5leHRyYV92YXJzWydjb250aXZfbmV0d29ya19tb2RlJ10gPT0gJ2FjaScpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG5vZGVDb21taXNzaW9uQ3RybC5leHRyYV92YXJzWydmd2RfbW9kZSddO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBub2RlQ29tbWlzc2lvbkN0cmwuZXh0cmFfdmFyc1snYXBpY191cmwnXTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG5vZGVDb21taXNzaW9uQ3RybC5leHRyYV92YXJzWydhcGljX3VzZXJuYW1lJ107XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBub2RlQ29tbWlzc2lvbkN0cmwuZXh0cmFfdmFyc1snYXBpY19wYXNzd29yZCddO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbm9kZUNvbW1pc3Npb25DdHJsLmV4dHJhX3ZhcnNbJ2FwaWNfbGVhZl9ub2RlcyddO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbm9kZUNvbW1pc3Npb25DdHJsLmV4dHJhX3ZhcnNbJ2FwaWNfcGh5c19kb21haW4nXTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG5vZGVDb21taXNzaW9uQ3RybC5leHRyYV92YXJzWydhcGljX2VwZ19icmlkZ2VfZG9tYWluJ107XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBub2RlQ29tbWlzc2lvbkN0cmwuZXh0cmFfdmFyc1snYXBpY19jb250cmFjdHNfdW5yZXN0cmljdGVkX21vZGUnXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9DbGVhbnVwIGZvciBzY2hlZHVsZXJcbiAgICAgICAgICAgICAgICBpZiAobm9kZUNvbW1pc3Npb25DdHJsLmV4dHJhX3ZhcnNbJ3NjaGVkdWxlcl9wcm92aWRlciddID09ICduYXRpdmUtc3dhcm0nKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBub2RlQ29tbWlzc2lvbkN0cmwuZXh0cmFfdmFyc1sndWNwX2Jvb3RzdHJhcF9ub2RlX25hbWUnXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwuZXh0cmFfdmFycyA9IHt9OyAvL1RPRE8gSW50aWFsaXplIGZyb20gZ2xvYmFsIHNldHRpbmdzXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsZWFudXBFeHRyYVZhcnM6IGNsZWFudXBFeHRyYVZhcnMsXG4gICAgICAgIH1cbiAgICB9XSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzE5LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LmxvZ2luJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2LmxvZ2luJywge1xuICAgICAgICAgICAgICAgIHVybDogJy8nLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbG9naW4vbG9naW4uaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0xvZ2luQ3RybCBhcyBsb2dpbkN0cmwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ0xvZ2luQ3RybCcsIFsnJHN0YXRlJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBsb2dpbkN0cmwgPSB0aGlzO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub0Rhc2hib2FyZCgpIHtcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51LmRhc2hib2FyZCcsIHt1c2VybmFtZTogbG9naW5DdHJsLnVzZXJuYW1lfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGxvZ2luKCkge1xuICAgICAgICAgICAgICAgIHJldHVyblRvRGFzaGJvYXJkKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobG9naW5DdHJsKTtcbiAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihsb2dpbkN0cmwpO1xuICAgICAgICAgICAgbG9naW5DdHJsLmxvZ2luID0gbG9naW47XG5cbiAgICAgICAgfV0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xOS8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5tZW51JylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL20nLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbWVudS9tZW51Lmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNZW51Q3RybCBhcyBtZW51Q3RybCcsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7dXNlcm5hbWU6IG51bGx9XG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ01lbnVDdHJsJywgWyckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgIHZhciBtZW51Q3RybCA9IHRoaXM7XG5cbiAgICAgICAgZnVuY3Rpb24gbG9nb3V0KCkge1xuICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubG9naW4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lbnVDdHJsLnVzZXJuYW1lID0gJHN0YXRlUGFyYW1zLnVzZXJuYW1lO1xuICAgICAgICBtZW51Q3RybC5sb2dvdXQgPSBsb2dvdXQ7XG5cbiAgICB9XSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzEwLzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm5ldHdvcmtwb2xpY2llcycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5ldHdvcmtwb2xpY2llcy5pc29sYXRpb24uY3JlYXRlJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9jcmVhdGUnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdJc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsIGFzIGlzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbmV0d29ya19wb2xpY2llcy9pc29sYXRpb25wb2xpY3ljcmVhdGUuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignSXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybCcsIFsnJHN0YXRlJywgJ1BvbGljaWVzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCBQb2xpY2llc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICB2YXIgaXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybCA9IHRoaXM7XG5cbiAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9Qb2xpY2llcygpIHtcbiAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzLmlzb2xhdGlvbi5saXN0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjYW5jZWxDcmVhdGluZygpIHtcbiAgICAgICAgICAgIHJldHVyblRvUG9saWNpZXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVBvbGljeSgpIHtcbiAgICAgICAgICAgIGlmIChpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsLmZvcm0uJHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKGlzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKGlzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwubmV3UG9saWN5LmtleSA9XG4gICAgICAgICAgICAgICAgICAgIFBvbGljaWVzTW9kZWwuZ2VuZXJhdGVLZXkoaXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybC5uZXdQb2xpY3kpO1xuICAgICAgICAgICAgICAgIFBvbGljaWVzTW9kZWwuY3JlYXRlKGlzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwubmV3UG9saWN5KS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9Qb2xpY2llcygpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoaXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihpc29sYXRpb25Qb2xpY3lDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwubmV3UG9saWN5ID0ge1xuICAgICAgICAgICAgICAgIHBvbGljeU5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIHRlbmFudE5hbWU6ICdkZWZhdWx0Jy8vVE9ETzogUmVtb3ZlIGhhcmRjb2RlZCB0ZW5hbnQuXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaXNvbGF0aW9uUG9saWN5Q3JlYXRlQ3RybC5jcmVhdGVQb2xpY3kgPSBjcmVhdGVQb2xpY3k7XG4gICAgICAgIGlzb2xhdGlvblBvbGljeUNyZWF0ZUN0cmwuY2FuY2VsQ3JlYXRpbmcgPSBjYW5jZWxDcmVhdGluZztcblxuICAgICAgICByZXNldEZvcm0oKTtcbiAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvOC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5uZXR3b3JrcG9saWNpZXMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMuaXNvbGF0aW9uLmRldGFpbHMnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2RldGFpbHMvOmtleScsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0lzb2xhdGlvblBvbGljeURldGFpbHNDdHJsIGFzIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25ldHdvcmtfcG9saWNpZXMvaXNvbGF0aW9ucG9saWN5ZGV0YWlscy5odG1sJ1xuICAgICAgICAgICAgfSk7XG4gICAgfV0pXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5ldHdvcmtwb2xpY2llcy5pc29sYXRpb24uZWRpdCcsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZWRpdC86a2V5JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwgYXMgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbmV0d29ya19wb2xpY2llcy9pc29sYXRpb25wb2xpY3lkZXRhaWxzLmh0bWwnXG4gICAgICAgICAgICB9KTtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignSXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwnLCBbXG4gICAgICAgICckc3RhdGUnLFxuICAgICAgICAnJHN0YXRlUGFyYW1zJyxcbiAgICAgICAgJ1BvbGljaWVzTW9kZWwnLFxuICAgICAgICAnUnVsZXNNb2RlbCcsXG4gICAgICAgICdOZXR3b3Jrc01vZGVsJyxcbiAgICAgICAgJ0FwcGxpY2F0aW9uR3JvdXBzTW9kZWwnLFxuICAgICAgICAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsIFBvbGljaWVzTW9kZWwsIFJ1bGVzTW9kZWwsIE5ldHdvcmtzTW9kZWwsIEFwcGxpY2F0aW9uR3JvdXBzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICB2YXIgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwgPSB0aGlzO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV0d29ya3MgPSBbXTtcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmFwcGxpY2F0aW9uR3JvdXBzID0gW107XG4gICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlT3V0Z29pbmdOZXR3b3JrU2VsZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlSW5jb21pbmdOZXR3b3JrU2VsZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlT3V0Z29pbmdBcHBsaWNhdGlvbkdyb3VwU2VsZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlSW5jb21pbmdBcHBsaWNhdGlvbkdyb3VwU2VsZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdJbmNvbWluZ1NlbGVjdGVkQXBwbGljYXRpb25Hcm91cCA9ICcnO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3T3V0Z29pbmdTZWxlY3RlZEFwcGxpY2F0aW9uR3JvdXAgPSAnJztcblxuICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9Qb2xpY2llcygpIHtcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51Lm5ldHdvcmtwb2xpY2llcy5pc29sYXRpb24ubGlzdCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub1BvbGljeURldGFpbHMoKSB7XG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMuaXNvbGF0aW9uLmRldGFpbHMnLCB7a2V5OiBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5wb2xpY3kua2V5fSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNhbmNlbEVkaXRpbmcoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVG9Qb2xpY3lEZXRhaWxzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR28gYmFjayB0byBwb2xpY3kgZGV0YWlscyBhZnRlciBkb25lIGVkaXRpbmdcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gZG9uZUVkaXRpbmcoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVG9Qb2xpY3lEZXRhaWxzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRlbGV0ZVBvbGljeSgpIHtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBQb2xpY2llc01vZGVsLmRlbGV0ZShpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5wb2xpY3kpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9Qb2xpY2llcygpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVG8gc2hvdyBlZGl0IG9yIGRldGFpbHMgc2NyZWVuIGJhc2VkIG9uIHRoZSByb3V0ZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXRNb2RlKCkge1xuICAgICAgICAgICAgICAgIGlmICgkc3RhdGUuaXMoJ2NvbnRpdi5tZW51Lm5ldHdvcmtwb2xpY2llcy5pc29sYXRpb24uZWRpdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm1vZGUgPSAnZWRpdCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubW9kZSA9ICdkZXRhaWxzJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlc2V0TmV3SW5jb21pbmdSdWxlKCkge1xuICAgICAgICAgICAgICAgIC8vUnVsZSBvYmplY3QgdG8gYmUgY3JlYXRlZCBvbiBzZXJ2ZXJcbiAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdJbmNvbWluZ1J1bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bGVJZDogJycsXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdhbGxvdycsLy90byBtYWtlIGl0IGRlZmF1bHQgc2VsZWN0ZWQgb3B0aW9uIGluIFVJXG4gICAgICAgICAgICAgICAgICAgIGZyb21FbmRwb2ludEdyb3VwOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZnJvbU5ldHdvcms6ICcnLFxuICAgICAgICAgICAgICAgICAgICBmcm9tSVBBZGRyZXNzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG9jb2w6ICd0Y3AnLC8vdG8gbWFrZSBpdCBkZWZhdWx0IHNlbGVjdGVkIG9wdGlvbiBpbiBVSVxuICAgICAgICAgICAgICAgICAgICBwb3J0OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnaW4nLFxuICAgICAgICAgICAgICAgICAgICB0ZW5hbnROYW1lOiAnZGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgICAgIHBvbGljeU5hbWU6IGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLnBvbGljeS5wb2xpY3lOYW1lXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdJbmNvbWluZ1NlbGVjdGVkQXBwbGljYXRpb25Hcm91cCA9ICcnO1xuICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRpc2FibGVJbmNvbWluZ05ldHdvcmtTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlSW5jb21pbmdBcHBsaWNhdGlvbkdyb3VwU2VsZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlc2V0TmV3T3V0Z29pbmdSdWxlKCkge1xuICAgICAgICAgICAgICAgIC8vUnVsZSBvYmplY3QgdG8gYmUgY3JlYXRlZCBvbiBzZXJ2ZXJcbiAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdPdXRnb2luZ1J1bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bGVJZDogJycsXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdhbGxvdycsLy90byBtYWtlIGl0IGRlZmF1bHQgc2VsZWN0ZWQgb3B0aW9uIGluIFVJXG4gICAgICAgICAgICAgICAgICAgIHRvRW5kcG9pbnRHcm91cDogJycsXG4gICAgICAgICAgICAgICAgICAgIHRvTmV0d29yazogJycsXG4gICAgICAgICAgICAgICAgICAgIHRvSVBBZGRyZXNzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG9jb2w6ICd0Y3AnLC8vdG8gbWFrZSBpdCBkZWZhdWx0IHNlbGVjdGVkIG9wdGlvbiBpbiBVSVxuICAgICAgICAgICAgICAgICAgICBwb3J0OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnb3V0JyxcbiAgICAgICAgICAgICAgICAgICAgdGVuYW50TmFtZTogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgICAgICAgICBwb2xpY3lOYW1lOiBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5wb2xpY3kucG9saWN5TmFtZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3T3V0Z29pbmdTZWxlY3RlZEFwcGxpY2F0aW9uR3JvdXAgPSAnJztcbiAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlT3V0Z29pbmdOZXR3b3JrU2VsZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZU91dGdvaW5nQXBwbGljYXRpb25Hcm91cFNlbGVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdldCBuZXR3b3JrIG5hbWVzIGZvciB0aGUgZ2l2ZW4gdGVuYW50LlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXROZXR3b3JrcygpIHtcbiAgICAgICAgICAgICAgICBOZXR3b3Jrc01vZGVsLmdldCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAvL18uZmlsdGVyKCkgcmV0dXJucyBhIG5ldyBhcnJheVxuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXR3b3JrcyA9IF8uZmlsdGVyKHJlc3VsdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3RlbmFudE5hbWUnOiAnZGVmYXVsdCcvL1RPRE86IFJlbW92ZSBoYXJkY29kZWQgdGVuYW50LlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXQgYXBwbGljYXRpb24gZ3JvdXAgbmFtZXMgZm9yIHRoZSBnaXZlbiB0ZW5hbnQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEFwcGxpY2F0aW9uR3JvdXBzKCkge1xuICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uR3JvdXBzTW9kZWwuZ2V0KClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9fLmZpbHRlcigpIHJldHVybnMgYSBuZXcgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmFwcGxpY2F0aW9uR3JvdXBzID0gXy5maWx0ZXIocmVzdWx0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RlbmFudE5hbWUnOiAnZGVmYXVsdCcvL1RPRE86IFJlbW92ZSBoYXJkY29kZWQgdGVuYW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEV2ZW50IGhhbmRsZXIgdG8gZGlzYWJsZSBuZXR3b3JrIHNlbGVjdGlvbiBib3ggb25jZSBhcHBsaWNhdGlvbiBncm91cCBpcyBzZWxlY3RlZCB3aGlsZSBjcmVhdGluZyBhIG5ld1xuICAgICAgICAgICAgICogcnVsZS5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gb25DaGFuZ2VPdXRnb2luZ0FwcGxpY2F0aW9uR3JvdXBTZWxlY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld091dGdvaW5nU2VsZWN0ZWRBcHBsaWNhdGlvbkdyb3VwICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9JZiBhcHBsaWNhdGlvbiBncm91cCBoYXMgYmVlbiBzZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdPdXRnb2luZ1J1bGUudG9FbmRwb2ludEdyb3VwID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld091dGdvaW5nU2VsZWN0ZWRBcHBsaWNhdGlvbkdyb3VwLmdyb3VwTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3T3V0Z29pbmdSdWxlLnRvTmV0d29yayA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5kaXNhYmxlT3V0Z29pbmdOZXR3b3JrU2VsZWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL1doZW4gJ25vbmUnIGlzIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld091dGdvaW5nUnVsZS50b0VuZHBvaW50R3JvdXAgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZU91dGdvaW5nTmV0d29ya1NlbGVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFdmVudCBoYW5kbGVyIHRvIGRpc2FibGUgbmV0d29yayBzZWxlY3Rpb24gYm94IG9uY2UgYXBwbGljYXRpb24gZ3JvdXAgaXMgc2VsZWN0ZWQgd2hpbGUgY3JlYXRpbmcgYSBuZXdcbiAgICAgICAgICAgICAqIHJ1bGUuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uQ2hhbmdlSW5jb21pbmdBcHBsaWNhdGlvbkdyb3VwU2VsZWN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdJbmNvbWluZ1NlbGVjdGVkQXBwbGljYXRpb25Hcm91cCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vSWYgYXBwbGljYXRpb24gZ3JvdXAgaGFzIGJlZW4gc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3SW5jb21pbmdSdWxlLmZyb21FbmRwb2ludEdyb3VwID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld0luY29taW5nU2VsZWN0ZWRBcHBsaWNhdGlvbkdyb3VwLmdyb3VwTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3SW5jb21pbmdSdWxlLmZyb21OZXR3b3JrID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRpc2FibGVJbmNvbWluZ05ldHdvcmtTZWxlY3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vV2hlbiAnbm9uZScgaXMgc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3SW5jb21pbmdSdWxlLmZyb21FbmRwb2ludEdyb3VwID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRpc2FibGVJbmNvbWluZ05ldHdvcmtTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFdmVudCBoYW5kbGVyIHRvIGRpc2FibGUgYXBwbGljYXRpb24gZ3JvdXAgc2VsZWN0aW9uIGJveCBvbmNlIG5ldHdvcmsgaXMgc2VsZWN0ZWQgd2hpbGUgY3JlYXRpbmcgYSBuZXdcbiAgICAgICAgICAgICAqIHJ1bGUuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uQ2hhbmdlT3V0Z29pbmdOZXR3b3JrU2VsZWN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdPdXRnb2luZ1J1bGUudG9OZXR3b3JrICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9JZiBuZXR3b3JrIGhhcyBiZWVuIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld091dGdvaW5nUnVsZS5Ub0VuZHBvaW50R3JvdXAgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZU91dGdvaW5nQXBwbGljYXRpb25Hcm91cFNlbGVjdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGlzYWJsZU91dGdvaW5nQXBwbGljYXRpb25Hcm91cFNlbGVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFdmVudCBoYW5kbGVyIHRvIGRpc2FibGUgYXBwbGljYXRpb24gZ3JvdXAgc2VsZWN0aW9uIGJveCBvbmNlIG5ldHdvcmsgaXMgc2VsZWN0ZWQgd2hpbGUgY3JlYXRpbmcgYSBuZXdcbiAgICAgICAgICAgICAqIHJ1bGUuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uQ2hhbmdlSW5jb21pbmdOZXR3b3JrU2VsZWN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdJbmNvbWluZ1J1bGUuZnJvbU5ldHdvcmsgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAvL0lmIG5ldHdvcmsgaGFzIGJlZW4gc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3SW5jb21pbmdSdWxlLmZyb21FbmRwb2ludEdyb3VwID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRpc2FibGVJbmNvbWluZ0FwcGxpY2F0aW9uR3JvdXBTZWxlY3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmRpc2FibGVJbmNvbWluZ0FwcGxpY2F0aW9uR3JvdXBTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdlbmVyYXRlcyBydWxlIGlkXG4gICAgICAgICAgICAgKiBUT0RPIE1ha2UgaXQgY3J5cHRvZ3JhcGhpY2FsbHkgc3Ryb25nZXIgb25jZSB3ZSBoYXZlIG11bHRpcGxlIHVzZXJzIHVwZGF0aW5nIHNhbWUgcG9saWN5XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlUnVsZUlkKHJ1bGUpIHtcbiAgICAgICAgICAgICAgICBydWxlLnJ1bGVJZCA9XG4gICAgICAgICAgICAgICAgICAgIChpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5pbmNvbWluZ1J1bGVzLmxlbmd0aCArIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm91dGdvaW5nUnVsZXMubGVuZ3RoICsgMSkudG9TdHJpbmcoKSArICctJyArXG4gICAgICAgICAgICAgICAgICAgIERhdGUubm93KCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSdWxlIGlzIHNhdmVkIHRvIHNlcnZlclxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBhZGRJbmNvbWluZ1J1bGUoKSB7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVSdWxlSWQoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3SW5jb21pbmdSdWxlKTtcbiAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdJbmNvbWluZ1J1bGUua2V5ID0gUnVsZXNNb2RlbC5nZW5lcmF0ZUtleShpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdJbmNvbWluZ1J1bGUpO1xuICAgICAgICAgICAgICAgIFJ1bGVzTW9kZWwuY3JlYXRlKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld0luY29taW5nUnVsZSkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5pbmNvbWluZ1J1bGVzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzZXROZXdJbmNvbWluZ1J1bGUoKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJ1bGUgaXMgc2F2ZWQgdG8gc2VydmVyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGFkZE91dGdvaW5nUnVsZSgpIHtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZVJ1bGVJZChpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5uZXdPdXRnb2luZ1J1bGUpO1xuICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld091dGdvaW5nUnVsZS5rZXkgPSBSdWxlc01vZGVsLmdlbmVyYXRlS2V5KGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm5ld091dGdvaW5nUnVsZSk7XG4gICAgICAgICAgICAgICAgUnVsZXNNb2RlbC5jcmVhdGUoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwubmV3T3V0Z29pbmdSdWxlKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm91dGdvaW5nUnVsZXMucHVzaChyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICByZXNldE5ld091dGdvaW5nUnVsZSgpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRGVsZXRlIGluY29taW5nIHJ1bGUgZnJvbSBzZXJ2ZXJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gZGVsZXRlSW5jb21pbmdSdWxlKGtleSkge1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgIFJ1bGVzTW9kZWwuZGVsZXRlVXNpbmdLZXkoa2V5KS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIF8ucmVtb3ZlKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmluY29taW5nUnVsZXMsIGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbi5rZXkgPT0ga2V5O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIERlbGV0ZSBvdXRnb2luZyBydWxlIGZyb20gc2VydmVyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRlbGV0ZU91dGdvaW5nUnVsZShrZXkpIHtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBSdWxlc01vZGVsLmRlbGV0ZVVzaW5nS2V5KGtleSkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBfLnJlbW92ZShpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5vdXRnb2luZ1J1bGVzLCBmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4ua2V5ID09IGtleTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IoaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwpO1xuXG4gICAgICAgICAgICBQb2xpY2llc01vZGVsLmdldE1vZGVsQnlLZXkoJHN0YXRlUGFyYW1zLmtleSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocG9saWN5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLnBvbGljeSA9IHBvbGljeTtcbiAgICAgICAgICAgICAgICAgICAgUnVsZXNNb2RlbC5nZXRJbmNvbWluZ1J1bGVzKHBvbGljeS5wb2xpY3lOYW1lLCAnZGVmYXVsdCcpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuaW5jb21pbmdSdWxlcyA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0TmV3SW5jb21pbmdSdWxlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBSdWxlc01vZGVsLmdldE91dGdvaW5nUnVsZXMocG9saWN5LnBvbGljeU5hbWUsICdkZWZhdWx0JykudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5vdXRnb2luZ1J1bGVzID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXROZXdPdXRnb2luZ1J1bGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGdldE5ldHdvcmtzKCk7XG4gICAgICAgICAgICBnZXRBcHBsaWNhdGlvbkdyb3VwcygpO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGVsZXRlUG9saWN5ID0gZGVsZXRlUG9saWN5O1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGVsZXRlSW5jb21pbmdSdWxlID0gZGVsZXRlSW5jb21pbmdSdWxlO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZGVsZXRlT3V0Z29pbmdSdWxlID0gZGVsZXRlT3V0Z29pbmdSdWxlO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuYWRkSW5jb21pbmdSdWxlID0gYWRkSW5jb21pbmdSdWxlO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuYWRkT3V0Z29pbmdSdWxlID0gYWRkT3V0Z29pbmdSdWxlO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwuZG9uZUVkaXRpbmcgPSBkb25lRWRpdGluZztcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLmNhbmNlbEVkaXRpbmcgPSBjYW5jZWxFZGl0aW5nO1xuICAgICAgICAgICAgLy9FdmVudCBIYW5kbGVyc1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwub25DaGFuZ2VPdXRnb2luZ0FwcGxpY2F0aW9uR3JvdXBTZWxlY3Rpb24gPSBvbkNoYW5nZU91dGdvaW5nQXBwbGljYXRpb25Hcm91cFNlbGVjdGlvbjtcbiAgICAgICAgICAgIGlzb2xhdGlvblBvbGljeURldGFpbHNDdHJsLm9uQ2hhbmdlSW5jb21pbmdBcHBsaWNhdGlvbkdyb3VwU2VsZWN0aW9uID0gb25DaGFuZ2VJbmNvbWluZ0FwcGxpY2F0aW9uR3JvdXBTZWxlY3Rpb247XG4gICAgICAgICAgICBpc29sYXRpb25Qb2xpY3lEZXRhaWxzQ3RybC5vbkNoYW5nZU91dGdvaW5nTmV0d29ya1NlbGVjdGlvbiA9IG9uQ2hhbmdlT3V0Z29pbmdOZXR3b3JrU2VsZWN0aW9uO1xuICAgICAgICAgICAgaXNvbGF0aW9uUG9saWN5RGV0YWlsc0N0cmwub25DaGFuZ2VJbmNvbWluZ05ldHdvcmtTZWxlY3Rpb24gPSBvbkNoYW5nZUluY29taW5nTmV0d29ya1NlbGVjdGlvbjtcblxuICAgICAgICAgICAgc2V0TW9kZSgpO1xuXG4gICAgICAgIH1dKTsiLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2Lm5ldHdvcmtwb2xpY2llcycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5ldHdvcmtwb2xpY2llcy5pc29sYXRpb24ubGlzdCcsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvbGlzdCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0lzb2xhdGlvblBvbGljeUxpc3RDdHJsIGFzIGlzb2xhdGlvblBvbGljeUxpc3RDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25ldHdvcmtfcG9saWNpZXMvaXNvbGF0aW9ucG9saWN5bGlzdC5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdJc29sYXRpb25Qb2xpY3lMaXN0Q3RybCcsIFsnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckZmlsdGVyJywgJ1BvbGljaWVzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkaW50ZXJ2YWwsICRmaWx0ZXIsIFBvbGljaWVzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICB2YXIgcG9saWNpZXNMaXN0Q3RybCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFBvbGljaWVzKHJlbG9hZCkge1xuICAgICAgICAgICAgICAgIFBvbGljaWVzTW9kZWwuZ2V0KHJlbG9hZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihwb2xpY2llc0xpc3RDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvbGljaWVzTGlzdEN0cmwucG9saWNpZXMgPSAkZmlsdGVyKCdvcmRlckJ5JykocmVzdWx0LCAncG9saWN5TmFtZScpO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihwb2xpY2llc0xpc3RDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vTG9hZCBmcm9tIGNhY2hlIGZvciBxdWljayBkaXNwbGF5IGluaXRpYWxseVxuICAgICAgICAgICAgZ2V0UG9saWNpZXMoZmFsc2UpO1xuXG4gICAgICAgICAgICB2YXIgcHJvbWlzZTtcbiAgICAgICAgICAgIC8vRG9uJ3Qgc3RhcnQgYXV0by1yZWZyZXNoIGlmIG9uZSBpcyBhbHJlYWR5IGluIHByb2dyZXNzXG4gICAgICAgICAgICBpZiAoIWFuZ3VsYXIuaXNEZWZpbmVkKHByb21pc2UpKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZSA9ICRpbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGdldFBvbGljaWVzKHRydWUpO1xuICAgICAgICAgICAgICAgIH0sIENvbnRpdkdsb2JhbHMuUkVGUkVTSF9JTlRFUlZBTCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL3N0b3AgcG9sbGluZyB3aGVuIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXG4gICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHByb21pc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gMy85LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm5ldHdvcmtwb2xpY2llcycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5ldHdvcmtwb2xpY2llcycsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvbmV0d29ya3BvbGljaWVzJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTmV0d29ya1BvbGljaWVzVGFic0N0cmwgYXMgbmV0d29ya1BvbGljaWVzVGFic0N0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbmV0d29ya19wb2xpY2llcy9uZXR3b3JrcG9saWNpZXN0YWJzLmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMuaXNvbGF0aW9uJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9pc29sYXRpb24nLFxuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnPHVpLXZpZXcvPidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5ldHdvcmtwb2xpY2llcy5wcmlvcml0aXphdGlvbicsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvcHJpb3JpdGl6YXRpb24nLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOZXR3b3JrUG9saWNpZXNUYWJzQ3RybCBhcyBuZXR3b3JrUG9saWNpZXNUYWJzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICduZXR3b3JrX3BvbGljaWVzL3ByaW9yaXRpemF0aW9ucG9saWN5bGlzdC5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3BvbGljaWVzLmJhbmR3aWR0aCcsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvYmFuZHdpZHRoJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTmV0d29ya1BvbGljaWVzVGFic0N0cmwgYXMgbmV0d29ya1BvbGljaWVzVGFic0N0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbmV0d29ya19wb2xpY2llcy9iYW5kd2lkdGhwb2xpY3lsaXN0Lmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3JrcG9saWNpZXMucmVkaXJlY3Rpb24nLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL3JlZGlyZWN0aW9uJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTmV0d29ya1BvbGljaWVzVGFic0N0cmwgYXMgbmV0d29ya1BvbGljaWVzVGFic0N0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbmV0d29ya19wb2xpY2llcy9yZWRpcmVjdGlvbnBvbGljeWxpc3QuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignTmV0d29ya1BvbGljaWVzVGFic0N0cmwnLCBbJyRzdGF0ZScsIGZ1bmN0aW9uICgkc3RhdGUpIHtcbiAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDIvMTkvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubmV0d29ya3MnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5uZXR3b3Jrcy5jcmVhdGUnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2NyZWF0ZScsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICduZXR3b3Jrcy9uZXR3b3JrY3JlYXRlLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOZXR3b3JrQ3JlYXRlQ3RybCBhcyBuZXR3b3JrQ3JlYXRlQ3RybCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignTmV0d29ya0NyZWF0ZUN0cmwnLCBbJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnTmV0d29ya3NNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsXG4gICAgICAgIGZ1bmN0aW9uICgkc3RhdGUsICRzdGF0ZVBhcmFtcywgTmV0d29ya3NNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBuZXR3b3JrQ3JlYXRlQ3RybCA9IHRoaXM7XG4gICAgICAgICAgICBuZXR3b3JrQ3JlYXRlQ3RybC5jaWRyUGF0dGVybiA9IENvbnRpdkdsb2JhbHMuQ0lEUl9SRUdFWDtcblxuICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9OZXR3b3JrcygpIHtcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51Lm5ldHdvcmtzLmxpc3QnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY2FuY2VsQ3JlYXRpbmcoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVG9OZXR3b3JrcygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVOZXR3b3JrKCkge1xuICAgICAgICAgICAgICAgIC8vZm9ybSBjb250cm9sbGVyIGlzIGluamVjdGVkIGJ5IHRoZSBodG1sIHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgLy9jaGVja2luZyBpZiBhbGwgdmFsaWRhdGlvbnMgaGF2ZSBwYXNzZWRcbiAgICAgICAgICAgICAgICBpZiAobmV0d29ya0NyZWF0ZUN0cmwuZm9ybS4kdmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKG5ldHdvcmtDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIobmV0d29ya0NyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBuZXR3b3JrQ3JlYXRlQ3RybC5uZXdOZXR3b3JrLmtleSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXR3b3JrQ3JlYXRlQ3RybC5uZXdOZXR3b3JrLnRlbmFudE5hbWUgKyAnOicgKyBuZXR3b3JrQ3JlYXRlQ3RybC5uZXdOZXR3b3JrLm5ldHdvcmtOYW1lO1xuICAgICAgICAgICAgICAgICAgICBOZXR3b3Jrc01vZGVsLmNyZWF0ZShuZXR3b3JrQ3JlYXRlQ3RybC5uZXdOZXR3b3JrKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobmV0d29ya0NyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9OZXR3b3JrcygpO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihuZXR3b3JrQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IobmV0d29ya0NyZWF0ZUN0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihuZXR3b3JrQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKG5ldHdvcmtDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICBuZXR3b3JrQ3JlYXRlQ3RybC5uZXdOZXR3b3JrID0ge1xuICAgICAgICAgICAgICAgICAgICBuZXR3b3JrTmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGVuY2FwOiAndnhsYW4nLFxuICAgICAgICAgICAgICAgICAgICBzdWJuZXQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICBnYXRld2F5OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgdGVuYW50TmFtZTogJ2RlZmF1bHQnLy9UT0RPOiBSZW1vdmUgaGFyZGNvZGVkIHRlbmFudC5cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXR3b3JrQ3JlYXRlQ3RybC5jcmVhdGVOZXR3b3JrID0gY3JlYXRlTmV0d29yaztcbiAgICAgICAgICAgIG5ldHdvcmtDcmVhdGVDdHJsLmNhbmNlbENyZWF0aW5nID0gY2FuY2VsQ3JlYXRpbmc7XG5cbiAgICAgICAgICAgIHJlc2V0Rm9ybSgpO1xuICAgICAgICB9XSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2Lm5ldHdvcmtzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubmV0d29ya3MuZGV0YWlscycsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZGV0YWlscy86a2V5JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTmV0d29ya0RldGFpbHNDdHJsIGFzIG5ldHdvcmtEZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICduZXR3b3Jrcy9uZXR3b3JrZGV0YWlscy5odG1sJ1xuICAgICAgICAgICAgfSk7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ05ldHdvcmtEZXRhaWxzQ3RybCcsXG4gICAgICAgIFsnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICckc2NvcGUnLCAnJGludGVydmFsJywgJyRmaWx0ZXInLCAnTmV0d29ya3NNb2RlbCcsICdBcHBsaWNhdGlvbkdyb3Vwc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uICgkc3RhdGUsICRzdGF0ZVBhcmFtcywgJHNjb3BlLCAkaW50ZXJ2YWwsICRmaWx0ZXIsIE5ldHdvcmtzTW9kZWwsIEFwcGxpY2F0aW9uR3JvdXBzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ldHdvcmtEZXRhaWxzQ3RybCA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub05ldHdvcmtzKCkge1xuICAgICAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51Lm5ldHdvcmtzLmxpc3QnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkZWxldGVOZXR3b3JrKCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IobmV0d29ya0RldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIobmV0d29ya0RldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgTmV0d29ya3NNb2RlbC5kZWxldGUobmV0d29ya0RldGFpbHNDdHJsLm5ldHdvcmspLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihuZXR3b3JrRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9OZXR3b3JrcygpO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihuZXR3b3JrRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKG5ldHdvcmtEZXRhaWxzQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogR2V0IGFwcGxpY2F0aW9uIGdyb3VwcyBiZWxvbmdpbmcgdG8gYSBuZXR3b3JrXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0QXBwbGljYXRpb25Hcm91cHMocmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uR3JvdXBzTW9kZWwuZ2V0KHJlbG9hZCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXR3b3JrRGV0YWlsc0N0cmwuYXBwbGljYXRpb25Hcm91cHMgPSAkZmlsdGVyKCdvcmRlckJ5JykoXy5maWx0ZXIocmVzdWx0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25ldHdvcmtOYW1lJzogbmV0d29ya0RldGFpbHNDdHJsLm5ldHdvcmsubmV0d29ya05hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAnZ3JvdXBOYW1lJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobmV0d29ya0RldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3IobmV0d29ya0RldGFpbHNDdHJsKTtcblxuICAgICAgICAgICAgICAgIE5ldHdvcmtzTW9kZWwuZ2V0TW9kZWxCeUtleSgkc3RhdGVQYXJhbXMua2V5KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAobmV0d29yaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29ya0RldGFpbHNDdHJsLm5ldHdvcmsgPSBuZXR3b3JrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0QXBwbGljYXRpb25Hcm91cHMoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIG5ldHdvcmtEZXRhaWxzQ3RybC5kZWxldGVOZXR3b3JrID0gZGVsZXRlTmV0d29yaztcblxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICAgICAgICAgIC8vRG9uJ3QgZG8gYXV0b3JlZnJlc2ggaWYgb25lIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICBpZiAoIWFuZ3VsYXIuaXNEZWZpbmVkKHByb21pc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0QXBwbGljYXRpb25Hcm91cHModHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIENvbnRpdkdsb2JhbHMuUkVGUkVTSF9JTlRFUlZBTCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9zdG9wIHBvbGxpbmcgd2hlbiB1c2VyIG1vdmVzIGF3YXkgZnJvbSB0aGUgcGFnZVxuICAgICAgICAgICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHByb21pc2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfV0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5uZXR3b3JrcycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5ldHdvcmtzLmxpc3QnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2xpc3QnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOZXR3b3Jrc0xpc3RDdHJsIGFzIG5ldHdvcmtzTGlzdEN0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbmV0d29ya3MvbmV0d29ya2xpc3QuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignTmV0d29ya3NMaXN0Q3RybCcsIFsnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckZmlsdGVyJywgJ05ldHdvcmtzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkaW50ZXJ2YWwsICRmaWx0ZXIsIE5ldHdvcmtzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICB2YXIgbmV0d29ya3NMaXN0Q3RybCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldE5ldHdvcmtzKHJlbG9hZCkge1xuICAgICAgICAgICAgICAgIE5ldHdvcmtzTW9kZWwuZ2V0KHJlbG9hZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobmV0d29ya3NMaXN0Q3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29ya3NMaXN0Q3RybC5uZXR3b3JrcyA9ICRmaWx0ZXIoJ29yZGVyQnknKShyZXN1bHQsICduZXR3b3JrTmFtZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihuZXR3b3Jrc0xpc3RDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0xvYWQgZnJvbSBjYWNoZSBmb3IgcXVpY2sgZGlzcGxheSBpbml0aWFsbHlcbiAgICAgICAgICAgIGdldE5ldHdvcmtzKGZhbHNlKTtcblxuICAgICAgICAgICAgdmFyIHByb21pc2U7XG4gICAgICAgICAgICAvL0Rvbid0IGRvIGF1dG9yZWZyZXNoIGlmIG9uZSBpcyBhbHJlYWR5IGluIHByb2dyZXNzXG4gICAgICAgICAgICBpZiAoIWFuZ3VsYXIuaXNEZWZpbmVkKHByb21pc2UpKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZSA9ICRpbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGdldE5ldHdvcmtzKHRydWUpO1xuICAgICAgICAgICAgICAgIH0sIENvbnRpdkdsb2JhbHMuUkVGUkVTSF9JTlRFUlZBTCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vc3RvcCBwb2xsaW5nIHdoZW4gdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcbiAgICAgICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRpbnRlcnZhbC5jYW5jZWwocHJvbWlzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzI1LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm5vZGVzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubm9kZXMuY29tbWlzc2lvbicsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvY29tbWlzc2lvbi86a2V5JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9kZUNvbW1pc3Npb25DdHJsIGFzIG5vZGVDb21taXNzaW9uQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdub2Rlcy9ub2RlY29tbWlzc2lvbi5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdOb2RlQ29tbWlzc2lvbkN0cmwnLCBbXG4gICAgICAgICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ05vZGVzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLCAnU2V0dGluZ1NlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsIE5vZGVzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlLCBTZXR0aW5nU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIG5vZGVDb21taXNzaW9uQ3RybCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvTm9kZURldGFpbHMoKSB7XG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5ub2Rlcy5kZXRhaWxzLmluZm8nLCB7J2tleSc6ICRzdGF0ZVBhcmFtcy5rZXl9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY2FuY2VsQ29tbWlzc2lvbmluZ05vZGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVG9Ob2RlRGV0YWlscygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVFeHRyYVZhcnMoKSB7XG4gICAgICAgICAgICAgICAgLy9BZGQgYW5zaWJsZSB2YXJpYWJsZXMgdG8gZXh0cmFfdmFyc1xuICAgICAgICAgICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5hbnNpYmxlVmFyaWFibGVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmV4dHJhX3ZhcnNbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvL0FkZCBlbnZpcm9ubWVudCB2YXJpYWJsZXMgdG8gZXh0cmFfdmFyc1xuICAgICAgICAgICAgICAgIHZhciBlbnZWYXJzID0ge307XG4gICAgICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmVudlZhcmlhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGVudlZhcnNbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmV4dHJhX3ZhcnNbJ2VudiddID0gZW52VmFycztcbiAgICAgICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwubm9kZU9wc09iai5leHRyYV92YXJzID0gSlNPTi5zdHJpbmdpZnkobm9kZUNvbW1pc3Npb25DdHJsLmV4dHJhX3ZhcnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjb21taXNzaW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChub2RlQ29tbWlzc2lvbkN0cmwuZm9ybS4kdmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKG5vZGVDb21taXNzaW9uQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKG5vZGVDb21taXNzaW9uQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5ub2RlT3BzT2JqLm5vZGVzID0gWyRzdGF0ZVBhcmFtcy5rZXldO1xuICAgICAgICAgICAgICAgICAgICBTZXR0aW5nU2VydmljZS5jbGVhbnVwRXh0cmFWYXJzKCk7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUV4dHJhVmFycygpO1xuICAgICAgICAgICAgICAgICAgICBOb2Rlc01vZGVsLmNvbW1pc3Npb24obm9kZUNvbW1pc3Npb25DdHJsLm5vZGVPcHNPYmopLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihub2RlQ29tbWlzc2lvbkN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9Ob2RlRGV0YWlscygpO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihub2RlQ29tbWlzc2lvbkN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKG5vZGVDb21taXNzaW9uQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwubm9kZU9wc09iaiA9IHt9O1xuICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmV4dHJhX3ZhcnMgPSB7fTsgLy9UT0RPIEludGlhbGl6ZSBmcm9tIGdsb2JhbCBzZXR0aW5nc1xuICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmFuc2libGVWYXJpYWJsZXMgPSBbXTtcbiAgICAgICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5lbnZWYXJpYWJsZXMgPSBbXTtcblxuICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmNhbmNlbENvbW1pc3Npb25pbmdOb2RlID0gY2FuY2VsQ29tbWlzc2lvbmluZ05vZGU7XG4gICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwuY29tbWlzc2lvbiA9IGNvbW1pc3Npb247XG5cbiAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIobm9kZUNvbW1pc3Npb25DdHJsKTtcbiAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihub2RlQ29tbWlzc2lvbkN0cmwpO1xuICAgICAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMjUvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubm9kZXMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5ub2Rlcy5kZXRhaWxzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9kZXRhaWxzLzprZXknLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb2RlRGV0YWlsc0N0cmwgYXMgbm9kZURldGFpbHNDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25vZGVzL25vZGVkZXRhaWxzLmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5ub2Rlcy5kZXRhaWxzLmluZm8nLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2luZm8nLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb2RlRGV0YWlsc0N0cmwgYXMgbm9kZURldGFpbHNDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25vZGVzL25vZGVpbmZvLmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5ub2Rlcy5kZXRhaWxzLnN0YXRzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9zdGF0cycsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05vZGVEZXRhaWxzQ3RybCBhcyBub2RlRGV0YWlsc0N0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbm9kZXMvbm9kZXN0YXRzLmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5ub2Rlcy5kZXRhaWxzLmxvZ3MnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2xvZ3MnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb2RlRGV0YWlsc0N0cmwgYXMgbm9kZURldGFpbHNDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25vZGVzL25vZGVsb2dzLmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ05vZGVEZXRhaWxzQ3RybCcsIFsnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICckc2NvcGUnLCAnJGludGVydmFsJywgJ05vZGVzTW9kZWwnLFxuICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsICRzY29wZSwgJGludGVydmFsLCBOb2Rlc01vZGVsKSB7XG4gICAgICAgICAgICB2YXIgbm9kZURldGFpbHNDdHJsID0gdGhpcztcblxuICAgICAgICAgICAgZnVuY3Rpb24gZGVjb21taXNzaW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBub2RlT3BzT2JqID0ge1xuICAgICAgICAgICAgICAgICAgbm9kZXM6IFskc3RhdGVQYXJhbXMua2V5XVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgTm9kZXNNb2RlbC5kZWNvbW1pc3Npb24obm9kZU9wc09iaikudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vRGlzYWJsZSBhbGwgYnV0dG9ucyBpbml0aWFsbHkuIFBvbGwgd2lsbCBhc3NpZ24gdmFsdWVzIGFwcHJvcHJpYXRlbHkuXG4gICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5zaG93Q29tbWlzc2lvbkJ1dHRvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuY29tbWlzc2lvbkJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnVwZ3JhZGVCdXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZ3JhZGUoKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVPcHNPYmogPSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzOiBbJHN0YXRlUGFyYW1zLmtleV1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIE5vZGVzTW9kZWwudXBncmFkZShub2RlT3BzT2JqKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9EaXNhYmxlIGFsbCBidXR0b25zIGluaXRpYWxseS4gUG9sbCB3aWxsIGFzc2lnbiB2YWx1ZXMgYXBwcm9wcmlhdGVseS5cbiAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnNob3dDb21taXNzaW9uQnV0dG9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5jb21taXNzaW9uQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwudXBncmFkZUJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEaXNwbGF5IGJ1dHRvbnMgYmFzZWQgb24gc3RhdHVzIG9mIG5vZGVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gc2V0QnV0dG9uRGlzcGxheSgpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG5vZGVEZXRhaWxzQ3RybC5ub2RlWydpbnZlbnRvcnlfc3RhdGUnXS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnVW5hbGxvY2F0ZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnNob3dDb21taXNzaW9uQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5jb21taXNzaW9uQnV0dG9uRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwudXBncmFkZUJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdEZWNvbW1pc3Npb25lZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuc2hvd0NvbW1pc3Npb25CdXR0b24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLmNvbW1pc3Npb25CdXR0b25FbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC51cGdyYWRlQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1Byb3Zpc2lvbmluZyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuc2hvd0NvbW1pc3Npb25CdXR0b24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLmNvbW1pc3Npb25CdXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwudXBncmFkZUJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdBbGxvY2F0ZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnNob3dDb21taXNzaW9uQnV0dG9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuY29tbWlzc2lvbkJ1dHRvbkVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnVwZ3JhZGVCdXR0b25FbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdDYW5jZWxsZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnNob3dDb21taXNzaW9uQnV0dG9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuY29tbWlzc2lvbkJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC51cGdyYWRlQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ01haW50ZW5hbmNlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5zaG93Q29tbWlzc2lvbkJ1dHRvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuY29tbWlzc2lvbkJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC51cGdyYWRlQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6Ly9DbHVzdGVyIHNob3VsZCBub3QgYmUgaW4gdGhpcyBzdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnNob3dDb21taXNzaW9uQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVEZXRhaWxzQ3RybC5jb21taXNzaW9uQnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnVwZ3JhZGVCdXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldE5vZGVJbmZvKHJlbG9hZCkge1xuICAgICAgICAgICAgICAgIE5vZGVzTW9kZWwuZ2V0TW9kZWxCeUtleSgkc3RhdGVQYXJhbXMua2V5LCByZWxvYWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwubm9kZSA9IG5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCdXR0b25EaXNwbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBub2RlRGV0YWlsc0N0cmwuZGVjb21taXNzaW9uID0gZGVjb21taXNzaW9uO1xuICAgICAgICAgICAgbm9kZURldGFpbHNDdHJsLnVwZ3JhZGUgPSB1cGdyYWRlO1xuXG4gICAgICAgICAgICAvL0xvYWQgZnJvbSBjYWNoZSBmb3IgcXVpY2sgZGlzcGxheSBpbml0aWFsbHlcbiAgICAgICAgICAgIGdldE5vZGVJbmZvKGZhbHNlKTtcblxuICAgICAgICAgICAgdmFyIHByb21pc2U7XG4gICAgICAgICAgICAvL0Rvbid0IGRvIGF1dG8tcmVmcmVzaCBpZiBvbmUgaXMgYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKCFhbmd1bGFyLmlzRGVmaW5lZChwcm9taXNlKSkge1xuICAgICAgICAgICAgICAgIHByb21pc2UgPSAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBnZXROb2RlSW5mbyh0cnVlKTtcbiAgICAgICAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vc3RvcCBwb2xsaW5nIHdoZW4gdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcbiAgICAgICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRpbnRlcnZhbC5jYW5jZWwocHJvbWlzZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA2LzE0LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZShcImNvbnRpdi5ub2Rlc1wiKVxuICAgIC5kaXJlY3RpdmUoXCJjdHZOb2Rlc3RhdHVzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgbm9kZTogJz0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdub2Rlcy9ub2Rlc3RhdHVzLmh0bWwnXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC5kaXJlY3RpdmUoXCJjdHZOb2Rlc3RhdGVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgICBub2RlOiAnPSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25vZGVzL25vZGVzdGF0ZS5odG1sJ1xuICAgICAgICB9XG4gICAgfSk7IiwiYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5ub2RlcycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm5vZGVzLmRpc2NvdmVyJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9kaXNjb3ZlcicsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05vZGVEaXNjb3ZlckN0cmwgYXMgbm9kZUNvbW1pc3Npb25DdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ25vZGVzL25vZGVkaXNjb3Zlci5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdOb2RlRGlzY292ZXJDdHJsJywgW1xuICAgICAgICAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdOb2Rlc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJywgXG4gICAgICAgIGZ1bmN0aW9uICgkc3RhdGUsICRzdGF0ZVBhcmFtcywgTm9kZXNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBub2RlQ29tbWlzc2lvbkN0cmwgPSB0aGlzO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub05vZGVzKCkge1xuICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUubm9kZXMubGlzdCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjYW5jZWxEaXNjb3ZlcmluZ05vZGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVG9Ob2RlcygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVFeHRyYVZhcnMoKSB7XG4gICAgICAgICAgICAgICAgLy9BZGQgYW5zaWJsZSB2YXJpYWJsZXMgdG8gZXh0cmFfdmFyc1xuICAgICAgICAgICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5hbnNpYmxlVmFyaWFibGVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmV4dHJhX3ZhcnNbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvL0FkZCBlbnZpcm9ubWVudCB2YXJpYWJsZXMgdG8gZXh0cmFfdmFyc1xuICAgICAgICAgICAgICAgIHZhciBlbnZWYXJzID0ge307XG4gICAgICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmVudlZhcmlhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGVudlZhcnNbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmV4dHJhX3ZhcnNbJ2VudiddID0gZW52VmFycztcbiAgICAgICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwubm9kZU9wc09iai5leHRyYV92YXJzID0gSlNPTi5zdHJpbmdpZnkobm9kZUNvbW1pc3Npb25DdHJsLmV4dHJhX3ZhcnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBkaXNjb3ZlcigpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZUNvbW1pc3Npb25DdHJsLmZvcm0uJHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihub2RlQ29tbWlzc2lvbkN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihub2RlQ29tbWlzc2lvbkN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVJUEFkZHJBcnJheSgpO1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVFeHRyYVZhcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgTm9kZXNNb2RlbC5kaXNjb3Zlcihub2RlQ29tbWlzc2lvbkN0cmwubm9kZU9wc09iaikudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5vZGVDb21taXNzaW9uQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub05vZGVzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5vZGVDb21taXNzaW9uQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3Iobm9kZUNvbW1pc3Npb25DdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUlQQWRkckFycmF5KCkge1xuICAgICAgICAgICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5ub2RlT3BzT2JqLmFkZHJzID0gXy53b3Jkcyhub2RlQ29tbWlzc2lvbkN0cmwubm9kZUlQQWRkciwgL1teLCBdKy9nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLm5vZGVPcHNPYmogPSB7fTtcbiAgICAgICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5leHRyYV92YXJzID0ge307IC8vVE9ETyBJbnRpYWxpemUgZnJvbSBnbG9iYWwgc2V0dGluZ3NcbiAgICAgICAgICAgIG5vZGVDb21taXNzaW9uQ3RybC5hbnNpYmxlVmFyaWFibGVzID0gW107XG4gICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwuZW52VmFyaWFibGVzID0gW107XG4gICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwubm9kZUlQQWRkciA9ICcnOyAvL0lQIGFkZHJlc3Mgb2Ygbm9kZXMgdG8gZGlzY292ZXJcblxuICAgICAgICAgICAgbm9kZUNvbW1pc3Npb25DdHJsLmRpc2NvdmVyID0gZGlzY292ZXI7XG4gICAgICAgICAgICBub2RlQ29tbWlzc2lvbkN0cmwuY2FuY2VsRGlzY292ZXJpbmdOb2RlID0gY2FuY2VsRGlzY292ZXJpbmdOb2RlO1xuXG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG5vZGVDb21taXNzaW9uQ3RybCk7XG4gICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Iobm9kZUNvbW1pc3Npb25DdHJsKTtcbiAgICAgICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzIyLzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm5vZGVzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUubm9kZXMubGlzdCcsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvbGlzdCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05vZGVMaXN0Q3RybCBhcyBub2RlTGlzdEN0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbm9kZXMvbm9kZWxpc3QuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignTm9kZUxpc3RDdHJsJywgWyckc2NvcGUnLCAnJGludGVydmFsJywgJyRmaWx0ZXInLCAnTm9kZXNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsICdOb2RlU2VydmljZScsXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICRpbnRlcnZhbCwgJGZpbHRlciwgTm9kZXNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UsIE5vZGVTZXJ2aWNlKSB7XG4gICAgICAgIHZhciBub2RlTGlzdEN0cmwgPSB0aGlzO1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldE5vZGVzKHJlbG9hZCkge1xuICAgICAgICAgICAgTm9kZXNNb2RlbC5nZXQocmVsb2FkKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihub2RlTGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBub2RlTGlzdEN0cmwubm9kZXMgPSAkZmlsdGVyKCdvcmRlckJ5JykocmVzdWx0LCAna2V5Jyk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihub2RlTGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGdldEFjdGl2ZUxvZ3MoKTtcbiAgICAgICAgICAgICAgICBnZXRMYXN0TG9ncygpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0QWN0aXZlTG9ncygpIHtcbiAgICAgICAgICAgIE5vZGVTZXJ2aWNlLmdldEFjdGl2ZUxvZ3MoKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBub2RlTGlzdEN0cmwuYWN0aXZlTG9ncyA9IHJlc3VsdDtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgLy9PbmNlIHRoZSBqb2IgZmluaXNoZXMsIGVuZHBvaW50IHJldHVybnMgNTAwIGVycm9yLiBTbyByZXNldCB0aGUgYWN0aXZlTG9nc1xuICAgICAgICAgICAgICAgIG5vZGVMaXN0Q3RybC5hY3RpdmVMb2dzID0ge1xuICAgICAgICAgICAgICAgICAgICBkZXNjOiAnVGhlcmUgaXMgY3VycmVudGx5IG5vIGFjdGl2ZSBqb2IuIENoZWNrIExhc3QgSm9iIGZvciBhIGpvYiB0aGF0IHJlY2VudGx5IGZpbmlzaGVkLidcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRMYXN0TG9ncygpIHtcbiAgICAgICAgICAgIE5vZGVTZXJ2aWNlLmdldExhc3RMb2dzKCkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgbm9kZUxpc3RDdHJsLmxhc3RMb2dzID0gcmVzdWx0O1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbm9kZUxpc3RDdHJsLmdldEFjdGl2ZUxvZ3MgPSBnZXRBY3RpdmVMb2dzO1xuICAgICAgICBub2RlTGlzdEN0cmwuZ2V0TGFzdExvZ3MgPSBnZXRMYXN0TG9ncztcblxuICAgICAgICAvL0xvYWQgZnJvbSBjYWNoZSBmb3IgcXVpY2sgZGlzcGxheSBpbml0aWFsbHlcbiAgICAgICAgZ2V0Tm9kZXMoZmFsc2UpO1xuXG4gICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICAvL0Rvbid0IGRvIGF1dG8tcmVmcmVzaCBpZiBvbmUgaXMgYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgICBpZiAoIWFuZ3VsYXIuaXNEZWZpbmVkKHByb21pc2UpKSB7XG4gICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBnZXROb2Rlcyh0cnVlKTtcbiAgICAgICAgICAgIH0sIENvbnRpdkdsb2JhbHMuUkVGUkVTSF9JTlRFUlZBTCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9zdG9wIHBvbGxpbmcgd2hlbiB1c2VyIG1vdmVzIGF3YXkgZnJvbSB0aGUgcGFnZVxuICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRpbnRlcnZhbC5jYW5jZWwocHJvbWlzZSk7XG4gICAgICAgIH0pO1xuICAgIH1dKTsiLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2Lm5vZGVzJylcbiAgICAuZmFjdG9yeSgnTm9kZVNlcnZpY2UnLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xuICAgICAgICBmdW5jdGlvbiBnZXRBY3RpdmVMb2dzKCkge1xuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICAgICAgIHZhciB1cmwgPSBDb250aXZHbG9iYWxzLk5PREVTX0FDVElWRV9KT0JfRU5EUE9JTlQ7XG4gICAgICAgICAgICAkaHR0cC5nZXQodXJsKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRMYXN0TG9ncygpIHtcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICAgICB2YXIgdXJsID0gQ29udGl2R2xvYmFscy5OT0RFU19MQVNUX0pPQl9FTkRQT0lOVDtcbiAgICAgICAgICAgICRodHRwLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXRBY3RpdmVMb2dzOiBnZXRBY3RpdmVMb2dzLFxuICAgICAgICAgICAgZ2V0TGFzdExvZ3M6IGdldExhc3RMb2dzXG4gICAgICAgIH1cbiAgICB9XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5vcmdhbml6YXRpb25zJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUub3JnYW5pemF0aW9ucy5jcmVhdGUnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2NyZWF0ZScsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdvcmdhbml6YXRpb25zL29yZ2FuaXphdGlvbmNyZWF0ZS5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnT3JnYW5pemF0aW9uQ3JlYXRlQ3RybCBhcyBvcmdhbml6YXRpb25DcmVhdGVDdHJsJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdPcmdhbml6YXRpb25DcmVhdGVDdHJsJywgWyckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ09yZ2FuaXphdGlvbnNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsXG4gICAgICAgIGZ1bmN0aW9uICgkc3RhdGUsICRzdGF0ZVBhcmFtcywgT3JnYW5pemF0aW9uc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwgPSB0aGlzO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub09yZ2FuaXphdGlvbnMoKSB7XG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5vcmdhbml6YXRpb25zLmxpc3QnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY2FuY2VsQ3JlYXRpbmcoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVG9Pcmdhbml6YXRpb25zKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZU9yZ2FuaXphdGlvbigpIHtcbiAgICAgICAgICAgICAgICAvL2Zvcm0gY29udHJvbGxlciBpcyBpbmplY3RlZCBieSB0aGUgaHRtbCB0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIC8vY2hlY2tpbmcgaWYgYWxsIHZhbGlkYXRpb25zIGhhdmUgcGFzc2VkXG4gICAgICAgICAgICAgICAgaWYgKG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwuZm9ybS4kdmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihvcmdhbml6YXRpb25DcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgb3JnYW5pemF0aW9uQ3JlYXRlQ3RybC5uZXdPcmdhbml6YXRpb24ua2V5ID0gb3JnYW5pemF0aW9uQ3JlYXRlQ3RybC5uZXdPcmdhbml6YXRpb24udGVuYW50TmFtZTsgXG4gICAgICAgICAgICAgICAgICAgIE9yZ2FuaXphdGlvbnNNb2RlbC5jcmVhdGUob3JnYW5pemF0aW9uQ3JlYXRlQ3RybC5uZXdPcmdhbml6YXRpb24pLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihvcmdhbml6YXRpb25DcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvT3JnYW5pemF0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihvcmdhbml6YXRpb25DcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihvcmdhbml6YXRpb25DcmVhdGVDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihvcmdhbml6YXRpb25DcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICBvcmdhbml6YXRpb25DcmVhdGVDdHJsLm5ld09yZ2FuaXphdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgdGVuYW50TmFtZTogJydcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvcmdhbml6YXRpb25DcmVhdGVDdHJsLmNyZWF0ZU9yZ2FuaXphdGlvbiA9IGNyZWF0ZU9yZ2FuaXphdGlvbjtcbiAgICAgICAgICAgIG9yZ2FuaXphdGlvbkNyZWF0ZUN0cmwuY2FuY2VsQ3JlYXRpbmcgPSBjYW5jZWxDcmVhdGluZztcblxuICAgICAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgICAgIH1dKTtcbiIsImFuZ3VsYXIubW9kdWxlKCdjb250aXYub3JnYW5pemF0aW9ucycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51Lm9yZ2FuaXphdGlvbnMuZGV0YWlscycsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZGV0YWlscy86a2V5JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnT3JnYW5pemF0aW9uRGV0YWlsc0N0cmwgYXMgb3JnYW5pemF0aW9uRGV0YWlsc0N0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnb3JnYW5pemF0aW9ucy9vcmdhbml6YXRpb25kZXRhaWxzLmh0bWwnXG4gICAgICAgICAgICB9KTtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignT3JnYW5pemF0aW9uRGV0YWlsc0N0cmwnLFxuICAgICAgICBbJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckZmlsdGVyJywgJ09yZ2FuaXphdGlvbnNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsXG4gICAgICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsICRzY29wZSwgJGludGVydmFsLCAkZmlsdGVyLCBPcmdhbml6YXRpb25zTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsID0gdGhpcztcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvT3JnYW5pemF0aW9ucygpIHtcbiAgICAgICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS5vcmdhbml6YXRpb25zLmxpc3QnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkZWxldGVPcmdhbml6YXRpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihvcmdhbml6YXRpb25EZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgT3JnYW5pemF0aW9uc01vZGVsLmRlbGV0ZShvcmdhbml6YXRpb25EZXRhaWxzQ3RybC5vcmdhbml6YXRpb24pLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihvcmdhbml6YXRpb25EZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub09yZ2FuaXphdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIob3JnYW5pemF0aW9uRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Iob3JnYW5pemF0aW9uRGV0YWlsc0N0cmwpO1xuXG4gICAgICAgICAgICAgICAgT3JnYW5pemF0aW9uc01vZGVsLmdldE1vZGVsQnlLZXkoJHN0YXRlUGFyYW1zLmtleSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKG9yZ2FuaXphdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JnYW5pemF0aW9uRGV0YWlsc0N0cmwub3JnYW5pemF0aW9uID0gb3JnYW5pemF0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIG9yZ2FuaXphdGlvbkRldGFpbHNDdHJsLmRlbGV0ZU9yZ2FuaXphdGlvbiA9IGRlbGV0ZU9yZ2FuaXphdGlvbjtcbiAgICAgICAgICAgIH1dKTsiLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2Lm9yZ2FuaXphdGlvbnMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5vcmdhbml6YXRpb25zLmxpc3QnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2xpc3QnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdPcmdhbml6YXRpb25zTGlzdEN0cmwgYXMgb3JnYW5pemF0aW9uc0xpc3RDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ29yZ2FuaXphdGlvbnMvb3JnYW5pemF0aW9ubGlzdC5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdPcmdhbml6YXRpb25zTGlzdEN0cmwnLCBbJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJGZpbHRlcicsICdPcmdhbml6YXRpb25zTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkaW50ZXJ2YWwsICRmaWx0ZXIsIE9yZ2FuaXphdGlvbnNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBvcmdhbml6YXRpb25zTGlzdEN0cmwgPSB0aGlzO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRPcmdhbml6YXRpb25zKHJlbG9hZCkge1xuICAgICAgICAgICAgICAgIE9yZ2FuaXphdGlvbnNNb2RlbC5nZXQocmVsb2FkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihvcmdhbml6YXRpb25zTGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZ2FuaXphdGlvbnNMaXN0Q3RybC5vcmdhbml6YXRpb25zID0gJGZpbHRlcignb3JkZXJCeScpKHJlc3VsdCwgJ3RlbmFudE5hbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIob3JnYW5pemF0aW9uc0xpc3RDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0xvYWQgZnJvbSBjYWNoZSBmb3IgcXVpY2sgZGlzcGxheSBpbml0aWFsbHlcbiAgICAgICAgICAgIGdldE9yZ2FuaXphdGlvbnMoZmFsc2UpO1xuXG4gICAgICAgICAgICB2YXIgcHJvbWlzZTtcbiAgICAgICAgICAgIC8vRG9uJ3QgZG8gYXV0b3JlZnJlc2ggaWYgb25lIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQocHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0T3JnYW5pemF0aW9ucyh0cnVlKTtcbiAgICAgICAgICAgICAgICB9LCBDb250aXZHbG9iYWxzLlJFRlJFU0hfSU5URVJWQUwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL3N0b3AgcG9sbGluZyB3aGVuIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXG4gICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHByb21pc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1dKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTIvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuc2VydmljZWxicycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnNlcnZpY2VsYnMuY3JlYXRlJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9jcmVhdGUnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2VydmljZV9sYnMvc2VydmljZWxiY3JlYXRlLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdTZXJ2aWNlbGJDcmVhdGVDdHJsIGFzIHNlcnZpY2VsYkNyZWF0ZUN0cmwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ1NlcnZpY2VsYkNyZWF0ZUN0cmwnLCBbXG4gICAgICAgICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ1NlcnZpY2VsYnNNb2RlbCcsICdOZXR3b3Jrc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBTZXJ2aWNlbGJzTW9kZWwsIE5ldHdvcmtzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICB2YXIgc2VydmljZWxiQ3JlYXRlQ3RybCA9IHRoaXM7XG4gICAgICAgICAgICBzZXJ2aWNlbGJDcmVhdGVDdHJsLmxhYmVsU2VsZWN0b3JzID0gW107XG4gICAgICAgICAgICBzZXJ2aWNlbGJDcmVhdGVDdHJsLm5ldHdvcmtzID0gW107XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvU2VydmljZWxicygpIHtcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51LnNlcnZpY2VsYnMubGlzdCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjYW5jZWxDcmVhdGluZygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5Ub1NlcnZpY2VsYnMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXQgbmV0d29ya3MgZm9yIHRoZSBnaXZlbiB0ZW5hbnQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldE5ldHdvcmtzKCkge1xuICAgICAgICAgICAgICAgIE5ldHdvcmtzTW9kZWwuZ2V0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2VsYkNyZWF0ZUN0cmwubmV0d29ya3MgPSBfLmZpbHRlcihyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZW5hbnROYW1lJzogJ2RlZmF1bHQnLy9UT0RPOiBSZW1vdmUgaGFyZGNvZGVkIHRlbmFudC5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUxhYmVsU2VsZWN0b3JTdHJpbmdzKCkge1xuICAgICAgICAgICAgICAgIC8vRW1wdHkgb3V0IHRoZSBzZWxlY3RvcnMuIEluIGNhc2Ugb2Ygc2VydmVyIGVycm9ycyB0aGlzIG5lZWRzIHRvIGJlIHJlc2V0LlxuICAgICAgICAgICAgICAgIHNlcnZpY2VsYkNyZWF0ZUN0cmwuc2VydmljZWxiLnNlbGVjdG9ycyA9IFtdO1xuICAgICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChzZXJ2aWNlbGJDcmVhdGVDdHJsLmxhYmVsU2VsZWN0b3JzLCBmdW5jdGlvbihsYWJlbFNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RvclN0cmluZyA9IGxhYmVsU2VsZWN0b3IubmFtZSArICc9JyArIGxhYmVsU2VsZWN0b3IudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2VsYkNyZWF0ZUN0cmwuc2VydmljZWxiLnNlbGVjdG9ycy5wdXNoKHNlbGVjdG9yU3RyaW5nKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlU2VydmljZWxiKCkge1xuICAgICAgICAgICAgICAgIGNyZWF0ZUxhYmVsU2VsZWN0b3JTdHJpbmdzKCk7XG4gICAgICAgICAgICAgICAgLy9mb3JtIGNvbnRyb2xsZXIgaXMgaW5qZWN0ZWQgYnkgdGhlIGh0bWwgdGVtcGxhdGVcbiAgICAgICAgICAgICAgICAvL2NoZWNraW5nIGlmIGFsbCB2YWxpZGF0aW9ucyBoYXZlIHBhc3NlZFxuICAgICAgICAgICAgICAgIGlmIChzZXJ2aWNlbGJDcmVhdGVDdHJsLmZvcm0uJHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihzZXJ2aWNlbGJDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIoc2VydmljZWxiQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2VsYkNyZWF0ZUN0cmwuc2VydmljZWxiLmtleSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlbGJDcmVhdGVDdHJsLnNlcnZpY2VsYi50ZW5hbnROYW1lICsgJzonICsgc2VydmljZWxiQ3JlYXRlQ3RybC5zZXJ2aWNlbGIuc2VydmljZU5hbWU7XG4gICAgICAgICAgICAgICAgICAgIFNlcnZpY2VsYnNNb2RlbC5jcmVhdGUoc2VydmljZWxiQ3JlYXRlQ3RybC5zZXJ2aWNlbGIpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzZXJ2aWNlbGJDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvU2VydmljZWxicygpO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzZXJ2aWNlbGJDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihzZXJ2aWNlbGJDcmVhdGVDdHJsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc2VydmljZWxiQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKHNlcnZpY2VsYkNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgIHNlcnZpY2VsYkNyZWF0ZUN0cmwuc2VydmljZWxiID0ge1xuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlTmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIG5ldHdvcmtOYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgaXBBZGRyZXNzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3JzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgcG9ydHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICB0ZW5hbnROYW1lOiAnZGVmYXVsdCcvL1RPRE86IFJlbW92ZSBoYXJkY29kZWQgdGVuYW50LlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXJ2aWNlbGJDcmVhdGVDdHJsLmNyZWF0ZVNlcnZpY2VsYiA9IGNyZWF0ZVNlcnZpY2VsYjtcbiAgICAgICAgICAgIHNlcnZpY2VsYkNyZWF0ZUN0cmwuY2FuY2VsQ3JlYXRpbmcgPSBjYW5jZWxDcmVhdGluZztcblxuICAgICAgICAgICAgZ2V0TmV0d29ya3MoKTtcbiAgICAgICAgICAgIHJlc2V0Rm9ybSgpO1xuICAgICAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTEvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuc2VydmljZWxicycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnNlcnZpY2VsYnMuZGV0YWlscycsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZGV0YWlscy86a2V5JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnU2VydmljZWxiRGV0YWlsc0N0cmwgYXMgc2VydmljZWxiRGV0YWlsc0N0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2VydmljZV9sYnMvc2VydmljZWxiZGV0YWlscy5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc2VydmljZWxicy5lZGl0Jywge1xuICAgICAgICAgICAgICAgIHVybDogJy9lZGl0LzprZXknLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdTZXJ2aWNlbGJEZXRhaWxzQ3RybCBhcyBzZXJ2aWNlbGJEZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzZXJ2aWNlX2xicy9zZXJ2aWNlbGJkZXRhaWxzLmh0bWwnXG4gICAgICAgICAgICB9KTtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignU2VydmljZWxiRGV0YWlsc0N0cmwnLFxuICAgICAgICBbJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnU2VydmljZWxic01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uICgkc3RhdGUsICRzdGF0ZVBhcmFtcywgU2VydmljZWxic01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgICAgIHZhciBzZXJ2aWNlbGJEZXRhaWxzQ3RybCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgc2VydmljZWxiRGV0YWlsc0N0cmwubGFiZWxTZWxlY3RvcnMgPSBbXTtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFRvIHNob3cgZWRpdCBvciBkZXRhaWxzIHNjcmVlbiBiYXNlZCBvbiB0aGUgcm91dGVcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzZXRNb2RlKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJHN0YXRlLmlzKCdjb250aXYubWVudS5zZXJ2aWNlbGJzLmVkaXQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZWxiRGV0YWlsc0N0cmwubW9kZSA9ICdlZGl0JztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VsYkRldGFpbHNDdHJsLm1vZGUgPSAnZGV0YWlscyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub1NlcnZpY2VsYnMoKSB7XG4gICAgICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUuc2VydmljZWxicy5saXN0Jyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9TZXJ2aWNlbGJEZXRhaWxzKCkge1xuICAgICAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51LnNlcnZpY2VsYnMuZGV0YWlscycsIHsna2V5Jzogc2VydmljZWxiRGV0YWlsc0N0cmwuc2VydmljZWxiLmtleX0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNhbmNlbEVkaXRpbmcoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblRvU2VydmljZWxiRGV0YWlscygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRlbGV0ZVNlcnZpY2VsYigpIHtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKHNlcnZpY2VsYkRldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIoc2VydmljZWxiRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlbGJzTW9kZWwuZGVsZXRlKHNlcnZpY2VsYkRldGFpbHNDdHJsLnNlcnZpY2VsYikudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHNlcnZpY2VsYkRldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvU2VydmljZWxicygpO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzZXJ2aWNlbGJEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zaG93U2VydmVyRXJyb3Ioc2VydmljZWxiRGV0YWlsc0N0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNhdmVTZXJ2aWNlbGIoKSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihzZXJ2aWNlbGJEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKHNlcnZpY2VsYkRldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlTGFiZWxTZWxlY3RvclN0cmluZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgU2VydmljZWxic01vZGVsLnNhdmUoc2VydmljZWxiRGV0YWlsc0N0cmwuc2VydmljZWxiKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc2VydmljZWxiRGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9TZXJ2aWNlbGJEZXRhaWxzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHNlcnZpY2VsYkRldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihzZXJ2aWNlbGJEZXRhaWxzQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlTGFiZWxTZWxlY3RvcnMoKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChzZXJ2aWNlbGJEZXRhaWxzQ3RybC5zZXJ2aWNlbGIuc2VsZWN0b3JzLCBmdW5jdGlvbihzZWxlY3RvclN0cikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdG9yID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHNlbGVjdG9yU3RyLnNwbGl0KCc9JylbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNlbGVjdG9yU3RyLnNwbGl0KCc9JylbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlbGJEZXRhaWxzQ3RybC5sYWJlbFNlbGVjdG9ycy5wdXNoKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlTGFiZWxTZWxlY3RvclN0cmluZ3MoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2VsYkRldGFpbHNDdHJsLnNlcnZpY2VsYi5zZWxlY3RvcnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHNlcnZpY2VsYkRldGFpbHNDdHJsLmxhYmVsU2VsZWN0b3JzLCBmdW5jdGlvbihsYWJlbFNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0b3JTdHJpbmcgPSBsYWJlbFNlbGVjdG9yLm5hbWUgKyAnPScgKyBsYWJlbFNlbGVjdG9yLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZWxiRGV0YWlsc0N0cmwuc2VydmljZWxiLnNlbGVjdG9ycy5wdXNoKHNlbGVjdG9yU3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHNlcnZpY2VsYkRldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Ioc2VydmljZWxiRGV0YWlsc0N0cmwpO1xuXG4gICAgICAgICAgICAgICAgU2VydmljZWxic01vZGVsLmdldE1vZGVsQnlLZXkoJHN0YXRlUGFyYW1zLmtleSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHNlcnZpY2VsYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZWxiRGV0YWlsc0N0cmwuc2VydmljZWxiID0gc2VydmljZWxiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTGFiZWxTZWxlY3RvcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzZXJ2aWNlbGJEZXRhaWxzQ3RybC5zYXZlU2VydmljZWxiID0gc2F2ZVNlcnZpY2VsYjtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlbGJEZXRhaWxzQ3RybC5jYW5jZWxFZGl0aW5nID0gY2FuY2VsRWRpdGluZztcbiAgICAgICAgICAgICAgICBzZXJ2aWNlbGJEZXRhaWxzQ3RybC5kZWxldGVTZXJ2aWNlbGIgPSBkZWxldGVTZXJ2aWNlbGI7XG4gICAgICAgICAgICAgICAgc2V0TW9kZSgpO1xuXG4gICAgICAgICAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTEvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuc2VydmljZWxicycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnNlcnZpY2VsYnMubGlzdCcsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvbGlzdCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1NlcnZpY2VsYkxpc3RDdHJsIGFzIHNlcnZpY2VsYkxpc3RDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NlcnZpY2VfbGJzL3NlcnZpY2VsYmxpc3QuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignU2VydmljZWxiTGlzdEN0cmwnLCBbJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJGZpbHRlcicsICdTZXJ2aWNlbGJzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkaW50ZXJ2YWwsICRmaWx0ZXIsIFNlcnZpY2VsYnNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBzZXJ2aWNlbGJMaXN0Q3RybCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFNlcnZpY2VsYnMocmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgU2VydmljZWxic01vZGVsLmdldChyZWxvYWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHNlcnZpY2VsYkxpc3RDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlbGJMaXN0Q3RybC5zZXJ2aWNlbGJzID0gJGZpbHRlcignb3JkZXJCeScpKHJlc3VsdCwgJ3NlcnZpY2VOYW1lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHNlcnZpY2VsYkxpc3RDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0xvYWQgZnJvbSBjYWNoZSBmb3IgcXVpY2sgZGlzcGxheSBpbml0aWFsbHlcbiAgICAgICAgICAgIGdldFNlcnZpY2VsYnMoZmFsc2UpO1xuXG4gICAgICAgICAgICB2YXIgcHJvbWlzZTtcbiAgICAgICAgICAgIC8vRG9uJ3QgZG8gYXV0b3JlZnJlc2ggaWYgb25lIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQocHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0U2VydmljZWxicyh0cnVlKTtcbiAgICAgICAgICAgICAgICB9LCBDb250aXZHbG9iYWxzLlJFRlJFU0hfSU5URVJWQUwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL3N0b3AgcG9sbGluZyB3aGVuIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXG4gICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHByb21pc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNS8xMy8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoXCJjb250aXYuc2VydmljZWxic1wiKVxuICAgIC5kaXJlY3RpdmUoXCJjdHZTZXJ2aWNlbGJwb3J0c1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICByZXR1cm4ge1xuICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgIGl0ZW1zOiAnPSdcbiAgICAgICAgICAgfSxcbiAgICAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUpIHtcbiAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICogQ29tcGFyZSBpZiB0d28gaXRlbXMgaGF2ZSBzYW1lIHBvcnRzIGFuZCBwcm90b2NvbHNcbiAgICAgICAgICAgICAgICAqIEBwYXJhbSB2YWwxXG4gICAgICAgICAgICAgICAgKiBAcGFyYW0gdmFsMlxuICAgICAgICAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNvbXBhcmUodmFsMSwgdmFsMikge1xuICAgICAgICAgICAgICAgICAgIHJldHVybiAodmFsMSA9PT0gdmFsMik7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlc2V0TmV3SXRlbSgpIHtcbiAgICAgICAgICAgICAgICAgICBzY29wZS5uZXdJdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlUG9ydDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyUG9ydDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgIHByb3RvY29sOiAnJ1xuICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGZ1bmN0aW9uIGlzRW1wdHlJdGVtKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICByZXR1cm4gKGl0ZW0uc2VydmljZVBvcnQgPT09ICcnICYmIGl0ZW0ucHJvdmlkZXJQb3J0ID09PSAnJyAmJiBpdGVtLnByb3RvY29sID09PSAnJyk7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIHNjb3BlLmFkZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgIGlmIChpc0VtcHR5SXRlbShzY29wZS5uZXdJdGVtKSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgIGlmIChzY29wZS5pdGVtcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLml0ZW1zID0gW107XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIHZhciBuZXdJdGVtU3RyID0gc2NvcGUubmV3SXRlbS5zZXJ2aWNlUG9ydCArICc6J1xuICAgICAgICAgICAgICAgICAgICAgICArIHNjb3BlLm5ld0l0ZW0ucHJvdmlkZXJQb3J0ICsgJzonXG4gICAgICAgICAgICAgICAgICAgICAgICsgc2NvcGUubmV3SXRlbS5wcm90b2NvbDtcbiAgICAgICAgICAgICAgICAgICAvL1JlbW92ZXMgZXhpc3RpbmcgaXRlbSB3aXRoIHRoZSBzYW1lIHZhbHVlIGZpcnN0IGlmIGl0IGV4aXN0cy5cbiAgICAgICAgICAgICAgICAgICBfLnB1bGxBbGxXaXRoKHNjb3BlLml0ZW1zLCBbbmV3SXRlbVN0cl0sIGNvbXBhcmUpO1xuICAgICAgICAgICAgICAgICAgIHNjb3BlLml0ZW1zLnB1c2gobmV3SXRlbVN0cik7XG4gICAgICAgICAgICAgICAgICAgcmVzZXROZXdJdGVtKCk7XG4gICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICBzY29wZS5yZW1vdmUgPSBmdW5jdGlvbihwYXNzZWRJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgXy5yZW1vdmUoc2NvcGUuaXRlbXMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb21wYXJlKGl0ZW0sIHBhc3NlZEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgIHJlc2V0TmV3SXRlbSgpO1xuICAgICAgICAgICB9LFxuICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NlcnZpY2VfbGJzL3NlcnZpY2VsYnBvcnRzLmh0bWwnXG4gICAgICAgfVxuICAgIH0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA2LzEvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYuc3RvcmFnZXBvbGljaWVzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUuc3RvcmFnZXBvbGljaWVzLmNyZWF0ZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvY3JlYXRlJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3N0b3JhZ2VfcG9saWNpZXMvc3RvcmFnZXBvbGljeWNyZWF0ZS5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnU3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwgYXMgc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwnXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG4gICAgLmNvbnRyb2xsZXIoJ1N0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsJywgWyckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ1N0b3JhZ2VQb2xpY2llc01vZGVsJywgJ0NSVURIZWxwZXJTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBTdG9yYWdlUG9saWNpZXNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVyblRvU3RvcmFnZVBvbGljaWVzKCkge1xuICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUuc3RvcmFnZXBvbGljaWVzLmxpc3QnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY2FuY2VsQ3JlYXRpbmcoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVG9TdG9yYWdlUG9saWNpZXMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlRmlsZXN5c3RlbUNtZHMoKSB7XG4gICAgICAgICAgICAgICAgc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwuZmlsZXN5c3RlbWNtZHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybC5uZXdTdG9yYWdlUG9saWN5LmZpbGVzeXN0ZW1zW2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVQb2xpY3koKSB7XG4gICAgICAgICAgICAgICAgLy9mb3JtIGNvbnRyb2xsZXIgaXMgaW5qZWN0ZWQgYnkgdGhlIGh0bWwgdGVtcGxhdGVcbiAgICAgICAgICAgICAgICAvL2NoZWNraW5nIGlmIGFsbCB2YWxpZGF0aW9ucyBoYXZlIHBhc3NlZFxuICAgICAgICAgICAgICAgIGlmIChzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybC5mb3JtLiR2YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Ioc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUZpbGVzeXN0ZW1DbWRzKCk7XG4gICAgICAgICAgICAgICAgICAgIFN0b3JhZ2VQb2xpY2llc01vZGVsLmNyZWF0ZShzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybC5uZXdTdG9yYWdlUG9saWN5KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvU3RvcmFnZVBvbGljaWVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc3RvcmFnZVBvbGljeUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2UuaGlkZVNlcnZlckVycm9yKHN0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybC5uZXdTdG9yYWdlUG9saWN5ID0ge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJiYWNrZW5kc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNydWRcIjogXCJjZXBoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1vdW50XCI6IFwiY2VwaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzbmFwc2hvdFwiOiBcImNlcGhcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInVubG9ja2VkXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBcImRyaXZlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInBvb2xcIjogXCJyYmRcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogXCIxME1CXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZpbGVzeXN0ZW1cIjogXCJleHQ0XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJydW50aW1lXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic25hcHNob3RzXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNuYXBzaG90XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZyZXF1ZW5jeVwiOiBcIjMwbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2VlcFwiOiAyMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmF0ZS1saW1pdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3cml0ZS1pb3BzXCI6IDEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWFkLWlvcHNcIjogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndyaXRlLWJwc1wiOiAxMDAwMDAwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWFkLWJwc1wiOiAxMDAwMDAwMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJmaWxlc3lzdGVtc1wiOiB7fVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsLmNyZWF0ZVBvbGljeSA9IGNyZWF0ZVBvbGljeTtcbiAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lDcmVhdGVDdHJsLmNhbmNlbENyZWF0aW5nID0gY2FuY2VsQ3JlYXRpbmc7XG4gICAgICAgICAgICBzdG9yYWdlUG9saWN5Q3JlYXRlQ3RybC5maWxlc3lzdGVtY21kcyA9IFtdO1xuXG4gICAgICAgICAgICByZXNldEZvcm0oKTtcbiAgICAgICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA1LzI3LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnN0b3JhZ2Vwb2xpY2llcycpXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnN0b3JhZ2Vwb2xpY2llcy5kZXRhaWxzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9kZXRhaWxzLzprZXknLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdTdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwgYXMgc3RvcmFnZVBvbGljeURldGFpbHNDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3N0b3JhZ2VfcG9saWNpZXMvc3RvcmFnZXBvbGljeWRldGFpbHMuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2NvbnRpdi5tZW51LnN0b3JhZ2Vwb2xpY2llcy5lZGl0Jywge1xuICAgICAgICAgICAgICAgIHVybDogJy9kZXRhaWxzLzprZXknLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdTdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwgYXMgc3RvcmFnZVBvbGljeURldGFpbHNDdHJsJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3N0b3JhZ2VfcG9saWNpZXMvc3RvcmFnZXBvbGljeWRldGFpbHMuaHRtbCdcbiAgICAgICAgICAgIH0pO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdTdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwnLFxuICAgICAgICBbJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckZmlsdGVyJywgJ1N0b3JhZ2VQb2xpY2llc01vZGVsJywgJ1ZvbHVtZXNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsXG4gICAgICAgICAgICBmdW5jdGlvbiAoJHN0YXRlLCAkc3RhdGVQYXJhbXMsICRzY29wZSwgJGludGVydmFsLCAkZmlsdGVyLCBTdG9yYWdlUG9saWNpZXNNb2RlbCwgVm9sdW1lc01vZGVsLCBDUlVESGVscGVyU2VydmljZSkge1xuICAgICAgICAgICAgICAgIHZhciBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5maWxlc3lzdGVtY21kcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogVG8gc2hvdyBlZGl0IG9yIGRldGFpbHMgc2NyZWVuIGJhc2VkIG9uIHRoZSByb3V0ZVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNldE1vZGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkc3RhdGUuaXMoJ2NvbnRpdi5tZW51LnN0b3JhZ2Vwb2xpY2llcy5lZGl0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5tb2RlID0gJ2VkaXQnO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLm1vZGUgPSAnZGV0YWlscyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub1BvbGljaWVzKCkge1xuICAgICAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51LnN0b3JhZ2Vwb2xpY2llcy5saXN0Jyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9Qb2xpY3lEZXRhaWxzKCkge1xuICAgICAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2NvbnRpdi5tZW51LnN0b3JhZ2Vwb2xpY2llcy5kZXRhaWxzJywgeydrZXknOiBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwucG9saWN5Lm5hbWV9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjYW5jZWxFZGl0aW5nKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub1BvbGljeURldGFpbHMoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkZWxldGVQb2xpY3koKSB7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdGFydExvYWRlcihzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICBTdG9yYWdlUG9saWNpZXNNb2RlbC5kZWxldGVVc2luZ0tleShzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwucG9saWN5Lm5hbWUsICduYW1lJykudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVG9Qb2xpY2llcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEdldCB2b2x1bWVzIGJlbG9uZ2luZyB0byBhIHBvbGljeVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldFZvbHVtZXMocmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgIFZvbHVtZXNNb2RlbC5nZXQocmVsb2FkKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC52b2x1bWVzID0gJGZpbHRlcignb3JkZXJCeScpKF8uZmlsdGVyKHJlc3VsdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwb2xpY3knOiBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwucG9saWN5Lm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAnbmFtZScpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBpbml0aWFsaXplRmlsZXN5c3RlbUNtZHNBcnJheSgpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5wb2xpY3kuZmlsZXN5c3RlbXMsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVzaCh7bmFtZToga2V5LCB2YWx1ZTogdmFsdWV9KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLmZpbGVzeXN0ZW1jbWRzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVGaWxlc3lzdGVtQ21kcygpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLmZpbGVzeXN0ZW1jbWRzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5wb2xpY3kuZmlsZXN5c3RlbXNbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNhdmVQb2xpY3koKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vZm9ybSBjb250cm9sbGVyIGlzIGluamVjdGVkIGJ5IHRoZSBodG1sIHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgIC8vY2hlY2tpbmcgaWYgYWxsIHZhbGlkYXRpb25zIGhhdmUgcGFzc2VkXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwuZm9ybS4kdmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLmhpZGVTZXJ2ZXJFcnJvcihzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RhcnRMb2FkZXIoc3RvcmFnZVBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUZpbGVzeXN0ZW1DbWRzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBTdG9yYWdlUG9saWNpZXNNb2RlbC5zYXZlKHN0b3JhZ2VQb2xpY3lEZXRhaWxzQ3RybC5wb2xpY3kpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc3RvcmFnZVBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub1BvbGljeURldGFpbHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc3RvcmFnZVBvbGljeURldGFpbHNDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Ioc3RvcmFnZVBvbGljeURldGFpbHNDdHJsKTtcblxuICAgICAgICAgICAgICAgIFN0b3JhZ2VQb2xpY2llc01vZGVsLmdldE1vZGVsQnlLZXkoJHN0YXRlUGFyYW1zLmtleSwgZmFsc2UsICduYW1lJylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHBvbGljeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLnBvbGljeSA9IHBvbGljeTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxpemVGaWxlc3lzdGVtQ21kc0FycmF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2dldFZvbHVtZXMoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAgICAgc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLmRlbGV0ZVBvbGljeSA9IGRlbGV0ZVBvbGljeTtcbiAgICAgICAgICAgICAgICBzdG9yYWdlUG9saWN5RGV0YWlsc0N0cmwuc2F2ZVBvbGljeSA9IHNhdmVQb2xpY3k7XG4gICAgICAgICAgICAgICAgc3RvcmFnZVBvbGljeURldGFpbHNDdHJsLmNhbmNlbEVkaXRpbmcgPSBjYW5jZWxFZGl0aW5nO1xuXG4gICAgICAgICAgICAgICAgc2V0TW9kZSgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2U7XG4gICAgICAgICAgICAgICAgLy9Eb24ndCBkbyBhdXRvcmVmcmVzaCBpZiBvbmUgaXMgYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQocHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9ICRpbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2dldFZvbHVtZXModHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIENvbnRpdkdsb2JhbHMuUkVGUkVTSF9JTlRFUlZBTCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9zdG9wIHBvbGxpbmcgd2hlbiB1c2VyIG1vdmVzIGF3YXkgZnJvbSB0aGUgcGFnZVxuICAgICAgICAgICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHByb21pc2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA2LzIvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKFwiY29udGl2LnN0b3JhZ2Vwb2xpY2llc1wiKVxuICAgIC5kaXJlY3RpdmUoXCJjdHZTdG9yYWdlcG9saWN5YmFzaWNzZXR0aW5nc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcblxuICAgICAgICB9XG4gICAgfSlcbiAgICAuZGlyZWN0aXZlKFwiY3R2U3RvcmFnZXBvbGljeWZpbGVzeXN0ZW1zZXR0aW5nc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgIHBvbGljeTogJz0nLFxuICAgICAgICAgICAgICAgIGZpbGVzeXN0ZW1jbWRzOiAnPSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSkge1xuICAgICAgICAgICAgICAgIHNjb3BlLmZpbGVzeXN0ZW1zID0gWydleHQ0JywgJ2J0cmZzJ107XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzdG9yYWdlX3BvbGljaWVzL2ZpbGVzeXN0ZW1zZXR0aW5ncy5odG1sJ1xuICAgICAgICB9XG4gICAgfSlcbiAgICAuZGlyZWN0aXZlKFwiY3R2U3RvcmFnZXBvbGljeXNuYXBzaG90c2V0dGluZ3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgICBwb2xpY3k6ICc9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc3RvcmFnZV9wb2xpY2llcy9zbmFwc2hvdHNldHRpbmdzLmh0bWwnXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC5kaXJlY3RpdmUoXCJjdHZTdG9yYWdlcG9saWN5cndvcHNzZXR0aW5nc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgIHBvbGljeTogJz0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzdG9yYWdlX3BvbGljaWVzL3J3b3Bzc2V0dGluZ3MuaHRtbCdcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLmRpcmVjdGl2ZShcImN0dlN0b3JhZ2Vwb2xpY3liYWNrZW5kZHJpdmVyc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgIHBvbGljeTogJz0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzdG9yYWdlX3BvbGljaWVzL2JhY2tlbmRkcml2ZXJzLmh0bWwnXG4gICAgICAgIH1cbiAgICB9KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNC8xOC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5zdG9yYWdlcG9saWNpZXMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS5zdG9yYWdlcG9saWNpZXMubGlzdCcsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvbGlzdCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1N0b3JhZ2VQb2xpY3lMaXN0Q3RybCBhcyBzdG9yYWdlUG9saWN5TGlzdEN0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc3RvcmFnZV9wb2xpY2llcy9zdG9yYWdlcG9saWN5bGlzdC5odG1sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdTdG9yYWdlUG9saWN5TGlzdEN0cmwnLCBbJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJGZpbHRlcicsICdTdG9yYWdlUG9saWNpZXNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICRpbnRlcnZhbCwgJGZpbHRlciwgU3RvcmFnZVBvbGljaWVzTW9kZWwsIENSVURIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICB2YXIgc3RvcmFnZVBvbGljeUxpc3RDdHJsID0gdGhpcztcblxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UG9saWNpZXMocmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgU3RvcmFnZVBvbGljaWVzTW9kZWwuZ2V0KHJlbG9hZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcihzdG9yYWdlUG9saWN5TGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVBvbGljeUxpc3RDdHJsLnBvbGljaWVzID0gJGZpbHRlcignb3JkZXJCeScpKHJlc3VsdCwgJ25hbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIoc3RvcmFnZVBvbGljeUxpc3RDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vTG9hZCBmcm9tIGNhY2hlIGZvciBxdWljayBkaXNwbGF5IGluaXRpYWxseVxuICAgICAgICAgICAgZ2V0UG9saWNpZXMoZmFsc2UpO1xuXG4gICAgICAgICAgICB2YXIgcHJvbWlzZTtcbiAgICAgICAgICAgIC8vRG9uJ3QgZG8gYXV0by1yZWZyZXNoIGlmIG9uZSBpcyBhbHJlYWR5IGluIHByb2dyZXNzXG4gICAgICAgICAgICBpZiAoIWFuZ3VsYXIuaXNEZWZpbmVkKHByb21pc2UpKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZSA9ICRpbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGdldFBvbGljaWVzKHRydWUpO1xuICAgICAgICAgICAgICAgIH0sIENvbnRpdkdsb2JhbHMuUkVGUkVTSF9JTlRFUlZBTCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL3N0b3AgcG9sbGluZyB3aGVuIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXG4gICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKHByb21pc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1dKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDYvMy8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi52b2x1bWVzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUudm9sdW1lcy5jcmVhdGUnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2NyZWF0ZScsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd2b2x1bWVzL3ZvbHVtZWNyZWF0ZS5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVm9sdW1lQ3JlYXRlQ3RybCBhcyB2b2x1bWVDcmVhdGVDdHJsJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdWb2x1bWVDcmVhdGVDdHJsJywgWyckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ1ZvbHVtZXNNb2RlbCcsICdTdG9yYWdlUG9saWNpZXNNb2RlbCcsICdDUlVESGVscGVyU2VydmljZScsXG4gICAgICAgIGZ1bmN0aW9uICgkc3RhdGUsICRzdGF0ZVBhcmFtcywgVm9sdW1lc01vZGVsLCBTdG9yYWdlUG9saWNpZXNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciB2b2x1bWVDcmVhdGVDdHJsID0gdGhpcztcbiAgICAgICAgICAgIHZvbHVtZUNyZWF0ZUN0cmwuZmlsZXN5c3RlbXMgPSBbJ2V4dDQnLCAnYnRyZnMnXTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9Wb2x1bWVzTW9kZWwoKSB7XG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdjb250aXYubWVudS52b2x1bWVzLmxpc3QnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY2FuY2VsQ3JlYXRpbmcoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVG9Wb2x1bWVzTW9kZWwoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXQgc3RvcmFnZSBwb2xpY2llcy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0U3RvcmFnZVBvbGljaWVzKCkge1xuICAgICAgICAgICAgICAgIFN0b3JhZ2VQb2xpY2llc01vZGVsLmdldCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICB2b2x1bWVDcmVhdGVDdHJsLnBvbGljaWVzID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBhcHBseVBvbGljeVNldHRpbmdzKCkge1xuICAgICAgICAgICAgICAgIHZvbHVtZUNyZWF0ZUN0cmwubmV3Vm9sdW1lLnBvbGljeSA9IHZvbHVtZUNyZWF0ZUN0cmwuc2VsZWN0ZWRQb2xpY3kubmFtZTtcbiAgICAgICAgICAgICAgICB2b2x1bWVDcmVhdGVDdHJsLm5ld1ZvbHVtZS5iYWNrZW5kcyA9IHZvbHVtZUNyZWF0ZUN0cmwuc2VsZWN0ZWRQb2xpY3kuYmFja2VuZHM7XG4gICAgICAgICAgICAgICAgdm9sdW1lQ3JlYXRlQ3RybC5uZXdWb2x1bWUuZHJpdmVyID0gdm9sdW1lQ3JlYXRlQ3RybC5zZWxlY3RlZFBvbGljeS5kcml2ZXI7XG4gICAgICAgICAgICAgICAgdm9sdW1lQ3JlYXRlQ3RybC5uZXdWb2x1bWUuY3JlYXRlID0gdm9sdW1lQ3JlYXRlQ3RybC5zZWxlY3RlZFBvbGljeS5jcmVhdGU7XG4gICAgICAgICAgICAgICAgdm9sdW1lQ3JlYXRlQ3RybC5uZXdWb2x1bWUucnVudGltZSA9IHZvbHVtZUNyZWF0ZUN0cmwuc2VsZWN0ZWRQb2xpY3kucnVudGltZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlVm9sdW1lKCkge1xuICAgICAgICAgICAgICAgIC8vZm9ybSBjb250cm9sbGVyIGlzIGluamVjdGVkIGJ5IHRoZSBodG1sIHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgLy9jaGVja2luZyBpZiBhbGwgdmFsaWRhdGlvbnMgaGF2ZSBwYXNzZWRcbiAgICAgICAgICAgICAgICBpZiAodm9sdW1lQ3JlYXRlQ3RybC5mb3JtLiR2YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Iodm9sdW1lQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0YXJ0TG9hZGVyKHZvbHVtZUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICBhcHBseVBvbGljeVNldHRpbmdzKCk7XG4gICAgICAgICAgICAgICAgICAgIFZvbHVtZXNNb2RlbC5jcmVhdGUodm9sdW1lQ3JlYXRlQ3RybC5uZXdWb2x1bWUpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcih2b2x1bWVDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRvVm9sdW1lc01vZGVsKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHZvbHVtZUNyZWF0ZUN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKHZvbHVtZUNyZWF0ZUN0cmwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gICAgICAgICAgICAgICAgQ1JVREhlbHBlclNlcnZpY2Uuc3RvcExvYWRlcih2b2x1bWVDcmVhdGVDdHJsKTtcbiAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5oaWRlU2VydmVyRXJyb3Iodm9sdW1lQ3JlYXRlQ3RybCk7XG4gICAgICAgICAgICAgICAgdm9sdW1lQ3JlYXRlQ3RybC5uZXdWb2x1bWUgPSB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBcImJhY2tlbmRzXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICBcImRyaXZlclwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVcIjoge30sXG4gICAgICAgICAgICAgICAgICAgIFwicnVudGltZVwiOiB7fVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZvbHVtZUNyZWF0ZUN0cmwuY3JlYXRlVm9sdW1lID0gY3JlYXRlVm9sdW1lO1xuICAgICAgICAgICAgdm9sdW1lQ3JlYXRlQ3RybC5jYW5jZWxDcmVhdGluZyA9IGNhbmNlbENyZWF0aW5nO1xuXG4gICAgICAgICAgICBnZXRTdG9yYWdlUG9saWNpZXMoKTtcblxuICAgICAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgICAgIH1dKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNC8xNS8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi52b2x1bWVzJylcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY29udGl2Lm1lbnUudm9sdW1lcy5kZXRhaWxzJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9kZXRhaWxzLzprZXknLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdWb2x1bWVEZXRhaWxzQ3RybCBhcyB2b2x1bWVEZXRhaWxzQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd2b2x1bWVzL3ZvbHVtZWRldGFpbHMuaHRtbCdcbiAgICAgICAgICAgIH0pO1xuICAgIH1dKVxuICAgIC5jb250cm9sbGVyKCdWb2x1bWVEZXRhaWxzQ3RybCcsXG4gICAgICAgIFsnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICckc2NvcGUnLCAnJGludGVydmFsJywgJyRodHRwJywgJ1ZvbHVtZXNNb2RlbCcsICdWb2x1bWVTZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkc2NvcGUsICRpbnRlcnZhbCwgJGh0dHAsIFZvbHVtZXNNb2RlbCwgVm9sdW1lU2VydmljZSkge1xuICAgICAgICAgICAgdmFyIHZvbHVtZURldGFpbHNDdHJsID0gdGhpcztcblxuICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9Wb2x1bWVzKCkge1xuICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnY29udGl2Lm1lbnUudm9sdW1lcy5saXN0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBkZWxldGVWb2x1bWUoKSB7XG4gICAgICAgICAgICAgICAgVm9sdW1lc01vZGVsLmRlbGV0ZSh2b2x1bWVEZXRhaWxzQ3RybC52b2x1bWUpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5Ub1ZvbHVtZXMoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Vm9sdW1lSW5mbyhyZWxvYWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdG9rZW5zID0gJHN0YXRlUGFyYW1zLmtleS5zcGxpdCgnLycpO1xuICAgICAgICAgICAgICAgIHZhciBtb2RlbCA9e307XG4gICAgICAgICAgICAgICAgbW9kZWwucG9saWN5ID0gdG9rZW5zWzBdO1xuICAgICAgICAgICAgICAgIG1vZGVsLm5hbWUgPSB0b2tlbnNbMV07XG4gICAgICAgICAgICAgICAgVm9sdW1lc01vZGVsLmdldE1vZGVsKG1vZGVsLCByZWxvYWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh2b2x1bWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZvbHVtZURldGFpbHNDdHJsLnZvbHVtZSA9IHZvbHVtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFZvbHVtZVVzZUluZm8oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFZvbHVtZVNuYXBzaG90cygpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Vm9sdW1lVXNlSW5mbygpIHtcbiAgICAgICAgICAgICAgICBWb2x1bWVTZXJ2aWNlLmdldFZvbHVtZVVzZUluZm8odm9sdW1lRGV0YWlsc0N0cmwudm9sdW1lKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lRGV0YWlsc0N0cmwudm9sdW1lVXNlID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vUmV0dXJucyBlcnJvciBpZiB2b2x1bWUgaXMgbm90IG1vdW50ZWQgYnkgYW55IGNvbnRhaW5lclxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRWb2x1bWVTbmFwc2hvdHMoKSB7XG4gICAgICAgICAgICAgICAgVm9sdW1lU2VydmljZS5nZXRWb2x1bWVTbmFwc2hvdHModm9sdW1lRGV0YWlsc0N0cmwudm9sdW1lKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lRGV0YWlsc0N0cmwuc25hcHNob3RzID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY29weVNuYXBzaG90KHNuYXBzaG90LCBuZXdWb2x1bWUpIHtcbiAgICAgICAgICAgICAgICBWb2x1bWVzTW9kZWwuY29weShtb2RlbCwgc25hcHNob3QsIG5ld1ZvbHVtZSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdm9sdW1lRGV0YWlsc0N0cmwuZGVsZXRlVm9sdW1lID0gZGVsZXRlVm9sdW1lO1xuICAgICAgICAgICAgdm9sdW1lRGV0YWlsc0N0cmwuY29weVNuYXBzaG90ID0gY29weVNuYXBzaG90O1xuXG4gICAgICAgICAgICAvL0xvYWQgZnJvbSBjYWNoZSBmb3IgcXVpY2sgZGlzcGxheSBpbml0aWFsbHlcbiAgICAgICAgICAgIGdldFZvbHVtZUluZm8oZmFsc2UpO1xuXG4gICAgICAgICAgICB2YXIgcHJvbWlzZTtcbiAgICAgICAgICAgIC8vRG9uJ3QgZG8gYXV0by1yZWZyZXNoIGlmIG9uZSBpcyBhbHJlYWR5IGluIHByb2dyZXNzXG4gICAgICAgICAgICBpZiAoIWFuZ3VsYXIuaXNEZWZpbmVkKHByb21pc2UpKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZSA9ICRpbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGdldFZvbHVtZUluZm8odHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSwgQ29udGl2R2xvYmFscy5SRUZSRVNIX0lOVEVSVkFMKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vc3RvcCBwb2xsaW5nIHdoZW4gdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcbiAgICAgICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRpbnRlcnZhbC5jYW5jZWwocHJvbWlzZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzIyLzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnZvbHVtZXMnKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjb250aXYubWVudS52b2x1bWVzLmxpc3QnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2xpc3QnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdWb2x1bWVMaXN0Q3RybCBhcyB2b2x1bWVMaXN0Q3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd2b2x1bWVzL3ZvbHVtZWxpc3QuaHRtbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XSlcbiAgICAuY29udHJvbGxlcignVm9sdW1lTGlzdEN0cmwnLCBbJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJGZpbHRlcicsICdWb2x1bWVzTW9kZWwnLCAnQ1JVREhlbHBlclNlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkaW50ZXJ2YWwsICRmaWx0ZXIsIFZvbHVtZXNNb2RlbCwgQ1JVREhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciB2b2x1bWVMaXN0Q3RybCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFZvbHVtZXMocmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgVm9sdW1lc01vZGVsLmdldChyZWxvYWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENSVURIZWxwZXJTZXJ2aWNlLnN0b3BMb2FkZXIodm9sdW1lTGlzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdm9sdW1lTGlzdEN0cmwudm9sdW1lcyA9ICRmaWx0ZXIoJ29yZGVyQnknKShyZXN1bHQsICduYW1lJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDUlVESGVscGVyU2VydmljZS5zdG9wTG9hZGVyKHZvbHVtZUxpc3RDdHJsKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vTG9hZCBmcm9tIGNhY2hlIGZvciBxdWljayBkaXNwbGF5IGluaXRpYWxseVxuICAgICAgICAgICAgZ2V0Vm9sdW1lcyhmYWxzZSk7XG5cbiAgICAgICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICAgICAgLy9Eb24ndCBkbyBhdXRvLXJlZnJlc2ggaWYgb25lIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmICghYW5ndWxhci5pc0RlZmluZWQocHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0Vm9sdW1lcyh0cnVlKTtcbiAgICAgICAgICAgICAgICB9LCBDb250aXZHbG9iYWxzLlJFRlJFU0hfSU5URVJWQUwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9zdG9wIHBvbGxpbmcgd2hlbiB1c2VyIG1vdmVzIGF3YXkgZnJvbSB0aGUgcGFnZVxuICAgICAgICAgICAgJHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJGludGVydmFsLmNhbmNlbChwcm9taXNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDYvNS8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi52b2x1bWVzJylcbiAgICAuZmFjdG9yeSgnVm9sdW1lU2VydmljZScsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XG4gICAgICAgIGZ1bmN0aW9uIGdldFZvbHVtZVVzZUluZm8odm9sdW1lKSB7XG4gICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgICAgICAgdmFyIHVybCA9IENvbnRpdkdsb2JhbHMuVk9MVU1FU19VU0VTX0VORFBPSU5UXG4gICAgICAgICAgICAgICAgKyB2b2x1bWUucG9saWN5XG4gICAgICAgICAgICAgICAgKyAnLycgKyB2b2x1bWUubmFtZTtcbiAgICAgICAgICAgICRodHRwLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAvL1JldHVybnMgZXJyb3IgaWYgdm9sdW1lIGlzIG5vdCBtb3VudGVkIGJ5IGFueSBjb250YWluZXJcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFZvbHVtZVNuYXBzaG90cyh2b2x1bWUpIHtcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICAgICB2YXIgdXJsID0gQ29udGl2R2xvYmFscy5WT0xVTUVTX1NOQVBTSE9UU19FTkRQT0lOVFxuICAgICAgICAgICAgICAgICsgdm9sdW1lLnBvbGljeVxuICAgICAgICAgICAgICAgICsgJy8nICsgdm9sdW1lLm5hbWU7XG4gICAgICAgICAgICAkaHR0cC5nZXQodXJsKS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0Vm9sdW1lVXNlSW5mbzogZ2V0Vm9sdW1lVXNlSW5mbyxcbiAgICAgICAgICAgIGdldFZvbHVtZVNuYXBzaG90czogZ2V0Vm9sdW1lU25hcHNob3RzXG4gICAgICAgIH1cbiAgICB9XSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA2LzIvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKFwiY29udGl2LmRpcmVjdGl2ZXNcIilcbiAgICAuZGlyZWN0aXZlKFwiY3R2Q29sbGFwc2libGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdAJyxcbiAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6ICdAJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2NvcGUuY29sbGFwc2VkID09PSB1bmRlZmluZWQpIHNjb3BlLmNvbGxhcHNlZCA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2RpcmVjdGl2ZXMvY29sbGFwc2libGUuaHRtbCdcbiAgICAgICAgfVxuICAgIH0pO1xuIiwiYW5ndWxhci5tb2R1bGUoXCJjb250aXYuZGlyZWN0aXZlc1wiKVxuICAgIC5kaXJlY3RpdmUoXCJjdHZDb21taXNzaW9udmFsaWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFQScsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvZGlyZWN0aXZlcy9jb21taXNzaW9udmFsaWQuaHRtbCdcbiAgICAgICAgfTtcbiAgICB9KTsiLCJhbmd1bGFyLm1vZHVsZShcImNvbnRpdi5kaXJlY3RpdmVzXCIpXG4gICAgLmRpcmVjdGl2ZShcImN0dkNvbnRyb2xpbnRlcmZhY2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFQScsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvZGlyZWN0aXZlcy9jb250cm9sX2ludGVyZmFjZS5odG1sJ1xuICAgICAgICB9O1xuICAgIH0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSB2amFpbjMgb24gNC8yOC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoXCJjb250aXYuZGlyZWN0aXZlc1wiKVxuICAgIC5kaXJlY3RpdmUoXCJjdHZFcnJvclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgICBoZWFkZXI6ICdAJyxcbiAgICAgICAgICAgICAgICBlcnJvcjogJz0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRyKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5maW5kKCdpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoJ25nLWhpZGUnKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9kaXJlY3RpdmVzL2Vycm9ybWVzc2FnZS5odG1sJ1xuICAgICAgICB9XG4gICAgfSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTEvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKFwiY29udGl2LmRpcmVjdGl2ZXNcIilcbiAgICAuZGlyZWN0aXZlKFwiY3R2TmFtZXZhbHVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgIHJldHVybiB7XG4gICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICBpdGVtczogJz0nLFxuICAgICAgICAgICAgICAgbmFtZWhlYWRlcjogJ0AnLC8vRmllbGQgbmFtZSB0byBkaXNwbGF5IGZvciBrZXlcbiAgICAgICAgICAgICAgIHZhbHVlaGVhZGVyOiAnQCcsLy9GaWVsZCBuYW1lIHRvIGRpc3BsYXkgZm9yIHZhbHVlXG4gICAgICAgICAgICAgICB0eXBlOiAnQCcsLy8ndGV4dCcgb3IgJ3NlbGVjdCcgdG8gY2hvb3NlIGlucHV0IG9yIHNlbGVjdCBodG1sIHRhZyBmb3Iga2V5XG4gICAgICAgICAgICAgICBvcHRpb25zOiAnPScvL1RvIGJlIHVzZWQgd2hlbiB0eXBlIGlzICdzZWxlY3QnXG4gICAgICAgICAgIH0sXG4gICAgICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlKSB7XG4gICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAqIENvbXBhcmUgaWYgdHdvIGl0ZW1zIGhhdmUgc2FtZSBuYW1lXG4gICAgICAgICAgICAgICAgKiBAcGFyYW0gdmFsMVxuICAgICAgICAgICAgICAgICogQHBhcmFtIHZhbDJcbiAgICAgICAgICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICBmdW5jdGlvbiBjb21wYXJlKHZhbDEsIHZhbDIpIHtcbiAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsMS5uYW1lID09IHZhbDIubmFtZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVzZXROZXdJdGVtKCkge1xuICAgICAgICAgICAgICAgICAgIHNjb3BlLm5ld0l0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICBmdW5jdGlvbiBpc0VtcHR5SXRlbShpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgcmV0dXJuIChpdGVtLm5hbWUgPT09ICcnICYmIGl0ZW0udmFsdWUgPT09ICcnKTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgc2NvcGUuYWRkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgaWYgKGlzRW1wdHlJdGVtKHNjb3BlLm5ld0l0ZW0pKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgaWYgKHNjb3BlLml0ZW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5pdGVtID0gW107XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIC8vUmVtb3ZlcyBleGlzdGluZyBpdGVtIHdpdGggdGhlIHNhbWUgbmFtZSBmaXJzdCBpZiBpdCBleGlzdHMuXG4gICAgICAgICAgICAgICAgICAgXy5wdWxsQWxsV2l0aChzY29wZS5pdGVtcywgW3Njb3BlLm5ld0l0ZW1dLCBjb21wYXJlKTtcbiAgICAgICAgICAgICAgICAgICBzY29wZS5pdGVtcy5wdXNoKHNjb3BlLm5ld0l0ZW0pO1xuICAgICAgICAgICAgICAgICAgIHJlc2V0TmV3SXRlbSgpO1xuICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgc2NvcGUucmVtb3ZlID0gZnVuY3Rpb24ocGFzc2VkSXRlbSkge1xuICAgICAgICAgICAgICAgICAgIF8ucmVtb3ZlKHNjb3BlLml0ZW1zLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5uYW1lID09IHBhc3NlZEl0ZW0ubmFtZTtcbiAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICByZXNldE5ld0l0ZW0oKTtcblxuICAgICAgICAgICAgICAgaWYgKHNjb3BlLm5hbWVoZWFkZXIgPT09IHVuZGVmaW5lZCkgc2NvcGUubmFtZWhlYWRlciA9ICdOYW1lJztcbiAgICAgICAgICAgICAgIGlmIChzY29wZS52YWx1ZWhlYWRlciA9PT0gdW5kZWZpbmVkKSBzY29wZS52YWx1ZWhlYWRlciA9ICdWYWx1ZSc7XG4gICAgICAgICAgICAgICBpZiAoc2NvcGUudHlwZSA9PT0gdW5kZWZpbmVkKSBzY29wZS50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICB9LFxuICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvZGlyZWN0aXZlcy9uYW1ldmFsdWUuaHRtbCdcbiAgICAgICB9XG4gICAgfSk7XG4iLCJhbmd1bGFyLm1vZHVsZShcImNvbnRpdi5kaXJlY3RpdmVzXCIpXG4gICAgLmRpcmVjdGl2ZShcImN0dk5ldHdvcmttb2RlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRUEnLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2RpcmVjdGl2ZXMvbmV0d29ya21vZGUuaHRtbCdcbiAgICAgICAgfTtcbiAgICB9KTsiLCJhbmd1bGFyLm1vZHVsZShcImNvbnRpdi5kaXJlY3RpdmVzXCIpXHJcbiAgICAuZGlyZWN0aXZlKFwiY3R2Tm9kZWZpZWxkc1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFQScsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9kaXJlY3RpdmVzL25vZGVmaWVsZHMuaHRtbCdcclxuICAgICAgICB9O1xyXG4gICAgfSk7IiwiYW5ndWxhci5tb2R1bGUoXCJjb250aXYuZGlyZWN0aXZlc1wiKVxuICAgIC5kaXJlY3RpdmUoXCJjdHZTY2hlZHVsZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFQScsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvZGlyZWN0aXZlcy9zY2hlZHVsZXIuaHRtbCdcbiAgICAgICAgfTtcbiAgICB9KTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvNC8xNi5cbiAqL1xuYW5ndWxhci5tb2R1bGUoXCJjb250aXYuZGlyZWN0aXZlc1wiKVxuICAgIC5kaXJlY3RpdmUoXCJjdHZUYWJsZVwiLCBbJ2ZpbHRlckZpbHRlcicsICdsaW1pdFRvRmlsdGVyJywgZnVuY3Rpb24gKGZpbHRlckZpbHRlciwgbGltaXRUb0ZpbHRlcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiAnPScsXG4gICAgICAgICAgICAgICAgZmlsdGVyZWRpdGVtczogJz0nLFxuICAgICAgICAgICAgICAgIHNpemU6ICdAJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6IFsnJHNjb3BlJywgJyRlbGVtZW50JywgJyRhdHRycycsIGZ1bmN0aW9uICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFibGVDdHJsID0gdGhpcztcbiAgICAgICAgICAgICAgICB0YWJsZUN0cmwuY2h1bmtzID0gW107XG4gICAgICAgICAgICAgICAgdGFibGVDdHJsLnBhZ2VObyA9IDA7XG5cbiAgICAgICAgICAgICAgICB0YWJsZUN0cmwuc2l6ZSA9IHBhcnNlSW50KCRzY29wZS5zaXplLCAxMCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzTmFOKHRhYmxlQ3RybC5zaXplKSkge1xuICAgICAgICAgICAgICAgICAgICB0YWJsZUN0cmwuc2l6ZSA9IDEyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEFsd2F5cyBjYWxsIHNob3dDaHVuayB3aXRoIGJvdGggcGFyYW1ldGVycy5cbiAgICAgICAgICAgICAgICAgKiBAcGFyYW0gcGFnZU5vXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHNlYXJjaFRleHRcbiAgICAgICAgICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzaG93Q2h1bmsocGFnZU5vLCBzZWFyY2hUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5zZWFyY2hUZXh0ID0gc2VhcmNoVGV4dDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocGFnZU5vID09PSB1bmRlZmluZWQgfHwgcGFnZU5vIDwgMCkgcGFnZU5vID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGFibGVDdHJsLnBhZ2VObyA9IHBhZ2VObztcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLml0ZW1zICE9PSB1bmRlZmluZWQpIHsvL1RPRE86IENoZWNrIHdoeSBpdGVtcyBhcmUgdW5kZWZpbmVkIGR1cmluZyBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlYXJjaFRleHRGaWx0ZXJlZEl0ZW1zID0gZmlsdGVyRmlsdGVyKCRzY29wZS5pdGVtcywgdGFibGVDdHJsLnNlYXJjaFRleHQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9PZkNodW5rcyA9IE1hdGguY2VpbChzZWFyY2hUZXh0RmlsdGVyZWRJdGVtcy5sZW5ndGggLyB0YWJsZUN0cmwuc2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9PZkNodW5rcyA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9PZkNodW5rcyA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUN0cmwuY2h1bmtzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vT2ZDaHVua3M7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5jaHVua3MucHVzaCh7c2VsZWN0ZWQ6IGZhbHNlLCBwYWdlTm86IGl9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9BZnRlciBmaWx0ZXJpbmcgbnVtYmVyIG9mIGNodW5rcyBjb3VsZCBjaGFuZ2Ugc28gcmVzZXQgcGFnZSBubyBpZiBpdCBpcyBncmVhdGVyIHRoYW4gbm8gb2YgY2h1bmtzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFnZU5vID49IHRhYmxlQ3RybC5jaHVua3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDdHJsLnBhZ2VObyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5jaHVua3NbdGFibGVDdHJsLnBhZ2VOb10uc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1VwZGF0ZSBudW1iZXIgb2YgY2h1bmtzIGZvciBwYWdpbmF0aW9uIG1lbnVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YWJsZUN0cmwuY2h1bmtzLmxlbmd0aCA+IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2xpY2VTdGFydCwgc2xpY2VFbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2VTdGFydCA9IHRhYmxlQ3RybC5wYWdlTm8gLSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlRW5kID0gdGFibGVDdHJsLnBhZ2VObyArIDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWNlU3RhcnQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlRW5kID0gc2xpY2VFbmQgLSBzbGljZVN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGljZVN0YXJ0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWNlRW5kID4gdGFibGVDdHJsLmNodW5rcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2VTdGFydCA9IHNsaWNlU3RhcnQgLSAoc2xpY2VFbmQgLSB0YWJsZUN0cmwuY2h1bmtzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlRW5kID0gdGFibGVDdHJsLmNodW5rcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5wYWdpbmF0aW9uTWVudS5jaHVua3MgPSB0YWJsZUN0cmwuY2h1bmtzLnNsaWNlKHNsaWNlU3RhcnQsIHNsaWNlRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnBhZ2luYXRpb25NZW51LmNodW5rcyA9IHRhYmxlQ3RybC5jaHVua3M7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5maWx0ZXJlZEl0ZW1zID0gbGltaXRUb0ZpbHRlcihzZWFyY2hUZXh0RmlsdGVyZWRJdGVtcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUN0cmwuc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUN0cmwucGFnZU5vICogdGFibGVDdHJsLnNpemUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZpbHRlcmVkaXRlbXMgPSB0YWJsZUN0cmwuZmlsdGVyZWRJdGVtcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNob3dQcmV2Q2h1bmsoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2Q2h1bms7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YWJsZUN0cmwucGFnZU5vIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZDaHVuayA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2Q2h1bmsgPSB0YWJsZUN0cmwucGFnZU5vIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2hvd0NodW5rKHByZXZDaHVuayk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc2hvd05leHRDaHVuaygpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5leHRDaHVuaztcbiAgICAgICAgICAgICAgICAgICAgbmV4dENodW5rID0gdGFibGVDdHJsLnBhZ2VObyArIDE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0Q2h1bmsgPiB0YWJsZUN0cmwuY2h1bmtzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRDaHVuayA9IHRhYmxlQ3RybC5jaHVua3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2hvd0NodW5rKG5leHRDaHVuayk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogU2F2ZSBwYWdpbmF0aW9uIHNjb3BlIHRvIHByb3ZpZGUgY2h1bmsgaW5mb3JtYXRpb24gdG8gcGFnaW5hdGlvbiBtZW51LlxuICAgICAgICAgICAgICAgICAqIEBwYXJhbSBtZW51XG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gYWRkUGFnaW5hdGlvbk1lbnUobWVudSkge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUucGFnaW5hdGlvbk1lbnUgPSBtZW51O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5zaG93Q2h1bmsgPSBzaG93Q2h1bms7XG4gICAgICAgICAgICAgICAgdGFibGVDdHJsLnNob3dOZXh0Q2h1bmsgPSBzaG93TmV4dENodW5rO1xuICAgICAgICAgICAgICAgIHRhYmxlQ3RybC5zaG93UHJldkNodW5rID0gc2hvd1ByZXZDaHVuaztcbiAgICAgICAgICAgICAgICB0YWJsZUN0cmwuYWRkUGFnaW5hdGlvbk1lbnUgPSBhZGRQYWdpbmF0aW9uTWVudTtcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycywgdGFibGVDdHJsKSB7XG4gICAgICAgICAgICAgICAgLy9XYXRjaCBmb3IgaXRlbXMgYXMgdGhleSB3aWxsIGJlIGF1dG8gcmVmcmVzaGVkXG4gICAgICAgICAgICAgICAgc2NvcGUuJHBhcmVudC4kd2F0Y2goYXR0cnMuaXRlbXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFibGVDdHJsLnNob3dDaHVuayh0YWJsZUN0cmwucGFnZU5vLCB0YWJsZUN0cmwuc2VhcmNoVGV4dCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvZGlyZWN0aXZlcy90YWJsZS5odG1sJ1xuICAgICAgICB9XG4gICAgfV0pXG4gICAgLmRpcmVjdGl2ZShcImN0dlRoZWFkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnPHRoZWFkIG5nLXRyYW5zY2x1ZGU+PC90aGVhZD4nXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC5kaXJlY3RpdmUoXCJjdHZUaFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgIGNsYXNzOiAnQCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJzx0aCBuZy1jbGFzcz1cImNsYXNzXCIgbmctdHJhbnNjbHVkZT48L3RoPidcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLmRpcmVjdGl2ZShcImN0dlRib2R5XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICBzY29wZToge30sXG4gICAgICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnPHRib2R5IG5nLXRyYW5zY2x1ZGU+PC90Ym9keT4nXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC5kaXJlY3RpdmUoXCJjdHZUZm9vdFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgc2NvcGU6IHt9LFxuICAgICAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJzx0Zm9vdCBuZy10cmFuc2NsdWRlPjwvdGZvb3Q+J1xuICAgICAgICB9XG4gICAgfSlcbiAgICAuZGlyZWN0aXZlKFwiY3R2VHNlYXJjaFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgcmVxdWlyZTogJ15eY3R2VGFibGUnLFxuICAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0AnLFxuICAgICAgICAgICAgICAgIHNpemU6ICdAJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0ciwgdGFibGVDdHJsKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUuc2hvd0NodW5rID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0YWJsZUN0cmwuc2hvd0NodW5rKHRhYmxlQ3RybC5wYWdlTm8sIHNjb3BlLnNlYXJjaFRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvZGlyZWN0aXZlcy9zZWFyY2hpbnB1dC5odG1sJ1xuICAgICAgICB9XG4gICAgfSlcbiAgICAuZGlyZWN0aXZlKFwiY3R2VHJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHRyYW5zY2x1ZGU6ICd0cnVlJyxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICBzY29wZToge30sXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJzx0ciBuZy10cmFuc2NsdWRlPjwvdHI+J1xuICAgICAgICB9XG4gICAgfSlcbiAgICAuZGlyZWN0aXZlKFwiY3R2VGRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgc2NvcGU6IHRydWUsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJzx0ZCBuZy10cmFuc2NsdWRlPjwvdGQ+J1xuICAgICAgICB9XG4gICAgfSlcbiAgICAuZGlyZWN0aXZlKFwiY3R2VHBhZ2luYXRpb25cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHJlcXVpcmU6ICdeXmN0dlRhYmxlJyxcbiAgICAgICAgICAgIHNjb3BlOiB7fSxcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0ciwgdGFibGVDdHJsKSB7XG4gICAgICAgICAgICAgICAgdGFibGVDdHJsLmFkZFBhZ2luYXRpb25NZW51KHNjb3BlKTtcbiAgICAgICAgICAgICAgICAvL3Nob3dDaHVuaygpIHdpbGwgY2FsY3VsYXRlIGFuZCBzZXQgY2h1bmtzIGluIHNjb3BlXG4gICAgICAgICAgICAgICAgdGFibGVDdHJsLnNob3dDaHVuayh0YWJsZUN0cmwucGFnZU5vLCB0YWJsZUN0cmwuc2VhcmNoVGV4dCk7XG4gICAgICAgICAgICAgICAgc2NvcGUuc2hvd0NodW5rID0gZnVuY3Rpb24gKHBhZ2VObykge1xuICAgICAgICAgICAgICAgICAgICB0YWJsZUN0cmwuc2hvd0NodW5rKHBhZ2VObywgdGFibGVDdHJsLnNlYXJjaFRleHQpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgc2NvcGUuc2hvd1ByZXZDaHVuayA9IHRhYmxlQ3RybC5zaG93UHJldkNodW5rO1xuICAgICAgICAgICAgICAgIHNjb3BlLnNob3dOZXh0Q2h1bmsgPSB0YWJsZUN0cmwuc2hvd05leHRDaHVuaztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvZGlyZWN0aXZlcy9wYWdpbmF0aW9ubWVudS5odG1sJ1xuICAgICAgICB9XG4gICAgfSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMTEvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubW9kZWxzJylcbiAgICAuZmFjdG9yeSgnQXBwbGljYXRpb25Hcm91cHNNb2RlbCcsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XG4gICAgICAgIHZhciBncm91cHNtb2RlbCA9IG5ldyBDb2xsZWN0aW9uKCRodHRwLCAkcSwgQ29udGl2R2xvYmFscy5BUFBMSUNBVElPTkdST1VQU19FTkRQT0lOVCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdlbmVyYXRlIGtleSBmb3IgYXBwbGljYXRpb24gZ3JvdXBcbiAgICAgICAgICogQHBhcmFtIGdyb3VwXG4gICAgICAgICAqL1xuICAgICAgICBncm91cHNtb2RlbC5nZW5lcmF0ZUtleSA9IGZ1bmN0aW9uIChncm91cCkge1xuICAgICAgICAgICAgcmV0dXJuIGdyb3VwLnRlbmFudE5hbWUgKyAnOicgKyBncm91cC5ncm91cE5hbWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGdyb3Vwc21vZGVsO1xuICAgIH1dKTsiLCIvKipcbiAqIEJhc2VDb2xsZWN0aW9uIGNsYXNzIHRoYXQgZG9lcyBqdXN0IGZldGNoIG9mIHRoZSBvYmplY3RzLlxuICogQHBhcmFtICRodHRwXG4gKiBAcGFyYW0gJHFcbiAqIEBwYXJhbSB1cmwgVXNlZCBmb3IgZG9pbmcgSFRUUCBHRVQgYW5kIGZldGNoIG9iamVjdHMgZnJvbSBzZXJ2ZXJcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBCYXNlQ29sbGVjdGlvbigkaHR0cCwgJHEsIHVybCkge1xuICAgIHRoaXMubW9kZWxzID0gW107XG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgIHRoaXMuJHEgPSAkcTtcbiAgICB0aGlzLnVybCA9IHVybDtcbn1cblxuQmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLmV4dHJhY3QgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHJlbG9hZCBPcHRpb25hbC4gRGVmYXVsdCBpcyBmYWxzZVxuICogQHJldHVybnMgeyp9XG4gKi9cbkJhc2VDb2xsZWN0aW9uLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAocmVsb2FkKSB7XG4gICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzO1xuICAgIGlmIChyZWxvYWQgPT09IHVuZGVmaW5lZCkgcmVsb2FkID0gZmFsc2U7XG4gICAgcmV0dXJuICghcmVsb2FkICYmIGNvbGxlY3Rpb24ubW9kZWxzLmxlbmd0aCA+IDApID9cbiAgICAgICAgY29sbGVjdGlvbi4kcS53aGVuKGNvbGxlY3Rpb24ubW9kZWxzKSA6IGNvbGxlY3Rpb24uJGh0dHAuZ2V0KGNvbGxlY3Rpb24udXJsKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICBjb2xsZWN0aW9uLm1vZGVscyA9IGNvbGxlY3Rpb24uZXh0cmFjdChyZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb24ubW9kZWxzO1xuICAgICAgICB9KTtcbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBrZXlcbiAqIEBwYXJhbSByZWxvYWQgT3B0aW9uYWwuIERlZmF1bHQgaXMgZmFsc2VcbiAqIEBwYXJhbSBrZXluYW1lXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLmdldE1vZGVsQnlLZXkgPSBmdW5jdGlvbiAoa2V5LCByZWxvYWQsIGtleW5hbWUpIHtcbiAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgaWYgKHJlbG9hZCA9PT0gdW5kZWZpbmVkKSByZWxvYWQgPSBmYWxzZTtcbiAgICBpZiAoa2V5bmFtZSA9PT0gdW5kZWZpbmVkKSBrZXluYW1lID0gJ2tleSc7XG5cbiAgICB2YXIgZGVmZXJyZWQgPSBjb2xsZWN0aW9uLiRxLmRlZmVyKCk7XG5cbiAgICBmdW5jdGlvbiBmaW5kTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfLmZpbmQoY29sbGVjdGlvbi5tb2RlbHMsIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICByZXR1cm4gY1trZXluYW1lXSA9PSBrZXk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKCFyZWxvYWQgJiYgY29sbGVjdGlvbi5tb2RlbHMubGVuZ3RoID4gMCkge1xuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGZpbmRNb2RlbCgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb2xsZWN0aW9uLmdldChyZWxvYWQpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShmaW5kTW9kZWwoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBtb2RlbFxuICogQHBhcmFtIHJlbG9hZCBPcHRpb25hbC4gRGVmYXVsdCBpcyBmYWxzZVxuICogQHJldHVybnMgeyp9XG4gKi9cbkJhc2VDb2xsZWN0aW9uLnByb3RvdHlwZS5nZXRNb2RlbCA9IGZ1bmN0aW9uIChtb2RlbCwgcmVsb2FkKSB7XG4gICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzO1xuICAgIGlmIChyZWxvYWQgPT09IHVuZGVmaW5lZCkgcmVsb2FkID0gZmFsc2U7XG5cbiAgICB2YXIgZGVmZXJyZWQgPSBjb2xsZWN0aW9uLiRxLmRlZmVyKCk7XG5cbiAgICBmdW5jdGlvbiBmaW5kTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfLmZpbmQoY29sbGVjdGlvbi5tb2RlbHMsIG1vZGVsKVxuICAgIH1cblxuICAgIGlmICghcmVsb2FkICYmIGNvbGxlY3Rpb24ubW9kZWxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShmaW5kTW9kZWwoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29sbGVjdGlvbi5nZXQocmVsb2FkKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoZmluZE1vZGVsKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59O1xuXG5cbi8qKlxuICogRXh0ZW5kcyBCYXNlQ29sbGVjdGlvbiBjbGFzcyB0byBkbyBjcmVhdGUsIHVwZGF0ZSBhbmQgZGVsZXRlIHVzaW5nIFBPU1QsIFBVVCBhbmQgREVMRVRFIHZlcmJzLlxuICogQHBhcmFtICRodHRwXG4gKiBAcGFyYW0gJHFcbiAqIEBwYXJhbSB1cmwgVXNlZCBmb3IgZG9pbmcgSFRUUCBHRVQgYW5kIGZldGNoIG9iamVjdHMgZnJvbSBzZXJ2ZXJcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDb2xsZWN0aW9uKCRodHRwLCAkcSwgdXJsKSB7XG4gICAgQmFzZUNvbGxlY3Rpb24uY2FsbCh0aGlzLCAkaHR0cCwgJHEsIHVybCk7XG59XG5cbkNvbGxlY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShCYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUpO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gbW9kZWxcbiAqIEBwYXJhbSB1cmwgT3B0aW9uYWwgaWYgbm90IHBhc3NlZCBpdCBpcyBjb25zdHJ1Y3RlZCB1c2luZyBrZXkgYW5kIHVybCBwYXNzZWQgaW4gY29uc3RydWN0b3JcbiAqIEByZXR1cm5zIHsqfVxuICovXG5Db2xsZWN0aW9uLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAobW9kZWwsIHVybCkge1xuICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcztcbiAgICB2YXIgZGVmZXJyZWQgPSBjb2xsZWN0aW9uLiRxLmRlZmVyKCk7XG4gICAgaWYgKHVybCA9PT0gdW5kZWZpbmVkKSB1cmwgPSBjb2xsZWN0aW9uLnVybCArIG1vZGVsLmtleSArICcvJztcbiAgICBjb2xsZWN0aW9uLiRodHRwLnBvc3QodXJsLCBtb2RlbClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2VEYXRhID0gY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKTtcbiAgICAgICAgICAgIC8vRm9yIHJlc3QgZW5kcG9pbnRzIHRoYXQgZG8gbm90IHJldHVybiBjcmVhdGVkIGpzb24gb2JqZWN0IGluIHJlc3BvbnNlXG4gICAgICAgICAgICBpZiAoKHJlc3BvbnNlRGF0YSA9PT0gdW5kZWZpbmVkKSB8fCAocmVzcG9uc2VEYXRhID09PSAnJykpIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZURhdGEgPSBtb2RlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vY29sbGVjdGlvbi5tb2RlbHMucHVzaChjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcbiAgICAgICAgICAgIGNvbGxlY3Rpb24ubW9kZWxzLnB1c2gocmVzcG9uc2VEYXRhKTtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcbiAgICAgICAgfSk7XG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59O1xuXG4vKipcbiAqIFRoaXMgaXMgZm9yIG5ldG1hc3RlciBzcGVjaWZpYyBlbmRwb2ludHMgYW5kIHVzZWQgYnkgbmV0bWFzdGVyIG9iamVjdHMgb25seS5cbiAqIFRPRE86IEdlbmVyYWxpemVcbiAqIEBwYXJhbSBtb2RlbFxuICogQHBhcmFtIHVybCBPcHRpb25hbFxuICogQHJldHVybnMgeyp9XG4gKi9cbkNvbGxlY3Rpb24ucHJvdG90eXBlLnNhdmUgPSBmdW5jdGlvbiAobW9kZWwpIHtcbiAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgdmFyIGRlZmVycmVkID0gY29sbGVjdGlvbi4kcS5kZWZlcigpO1xuICAgIHZhciB1cmwgPSBjb2xsZWN0aW9uLnVybCArIG1vZGVsLmtleSArICcvJztcbiAgICBjb2xsZWN0aW9uLiRodHRwLnB1dCh1cmwsIG1vZGVsKVxuICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgIF8ucmVtb3ZlKGNvbGxlY3Rpb24ubW9kZWxzLCBmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICAgIHJldHVybiBuLmtleSA9PSBtb2RlbC5rZXk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbGxlY3Rpb24ubW9kZWxzLnB1c2goY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGNvbGxlY3Rpb24uZXh0cmFjdChyZXNwb25zZSkpO1xuICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XG4gICAgICAgIH0pO1xuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTtcblxuLyoqXG4gKiBUaGlzIGlzIGZvciBuZXRtYXN0ZXIgc3BlY2lmaWMgZW5kcG9pbnRzIGFuZCB1c2VkIGJ5IG5ldG1hc3RlciBvYmplY3RzIG9ubHkuXG4gKiBUT0RPOiBHZW5lcmFsaXplXG4gKiBAcGFyYW0gbW9kZWxcbiAqIEByZXR1cm5zIHsqfVxuICovXG5Db2xsZWN0aW9uLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAobW9kZWwpIHtcbiAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgdmFyIGRlZmVycmVkID0gY29sbGVjdGlvbi4kcS5kZWZlcigpO1xuICAgIHZhciB1cmwgPSBjb2xsZWN0aW9uLnVybCArIG1vZGVsLmtleSArICcvJztcbiAgICBjb2xsZWN0aW9uLiRodHRwLmRlbGV0ZSh1cmwpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgXy5yZW1vdmUoY29sbGVjdGlvbi5tb2RlbHMsIGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG4ua2V5ID09IG1vZGVsLmtleTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGNvbGxlY3Rpb24uZXh0cmFjdChyZXNwb25zZSkpO1xuICAgICAgICB9KTtcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBrZXlcbiAqIEBwYXJhbSBrZXluYW1lXG4gKiBAcGFyYW0gdXJsIE9wdGlvbmFsIGlmIG5vdCBwYXNzZWQgaXQgaXMgY29uc3RydWN0ZWQgdXNpbmcga2V5IGFuZCB1cmwgcGFzc2VkIGluIGNvbnN0cnVjdG9yXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ29sbGVjdGlvbi5wcm90b3R5cGUuZGVsZXRlVXNpbmdLZXkgPSBmdW5jdGlvbiAoa2V5LCBrZXluYW1lLCB1cmwpIHtcbiAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgaWYgKGtleW5hbWUgPT09IHVuZGVmaW5lZCkga2V5bmFtZSA9ICdrZXknO1xuXG4gICAgdmFyIGRlZmVycmVkID0gY29sbGVjdGlvbi4kcS5kZWZlcigpO1xuICAgIGlmICh1cmwgPT09IHVuZGVmaW5lZCkgdXJsID0gY29sbGVjdGlvbi51cmwgKyBrZXkgKyAnLyc7XG4gICAgY29sbGVjdGlvbi4kaHR0cC5kZWxldGUodXJsKVxuICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgIF8ucmVtb3ZlKGNvbGxlY3Rpb24ubW9kZWxzLCBmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICAgIHJldHVybiBuW2tleW5hbWVdID09IGtleTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGNvbGxlY3Rpb24uZXh0cmFjdChyZXNwb25zZSkpO1xuICAgICAgICB9KTtcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07IiwiYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5tb2RlbHMnKVxyXG4gICAgLmZhY3RvcnkoJ0dsb2JhbHNldHRpbmdzTW9kZWwnLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xyXG4gICAgICAgIHZhciBnbG9iYWxzZXR0aW5nc21vZGVsID0gbmV3IFNldHRpbmdzQ29sbGVjdGlvbigkaHR0cCwgJHEpO1xyXG4gICAgICAgIHJldHVybiBnbG9iYWxzZXR0aW5nc21vZGVsO1xyXG4gICAgfV0pO1xyXG5cclxuZnVuY3Rpb24gU2V0dGluZ3NDb2xsZWN0aW9uKCRodHRwLCAkcSkge1xyXG4gICAgQmFzZUNvbGxlY3Rpb24uY2FsbCh0aGlzLCAkaHR0cCwgJHEsIENvbnRpdkdsb2JhbHMuR0xPQkFMX0dFVF9FTkRQT0lOVCk7XHJcbn1cclxuXHJcblNldHRpbmdzQ29sbGVjdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2VDb2xsZWN0aW9uLnByb3RvdHlwZSk7XHJcblxyXG5TZXR0aW5nc0NvbGxlY3Rpb24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChub2RlT3BzT2JqKSB7XHJcbiAgICB2YXIgc2V0dGluZ3Njb2xsZWN0aW9uID0gdGhpcztcclxuICAgIHZhciBkZWZlcnJlZCA9IHNldHRpbmdzY29sbGVjdGlvbi4kcS5kZWZlcigpO1xyXG4gICAgdmFyIHVybCA9IENvbnRpdkdsb2JhbHMuR0xPQkFMX1NFVF9FTkRQT0lOVDtcclxuICAgIHNldHRpbmdzY29sbGVjdGlvbi4kaHR0cC5wb3N0KHVybCwgbm9kZU9wc09iaiwge1xyXG4gICAgICAgICAgICAnaGVhZGVycyc6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIC8vU2VydmVyIGRvZXNuJ3QgcmV0dXJuIGFueSBqc29uIGluIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcclxuICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZXNwb25zZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxufTsiLCJhbmd1bGFyLm1vZHVsZSgnY29udGl2Lm1vZGVscycpXG4gICAgLmZhY3RvcnkoJ05ldHdvcmtzTW9kZWwnLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xuICAgICAgICByZXR1cm4gbmV3IENvbGxlY3Rpb24oJGh0dHAsICRxLCBDb250aXZHbG9iYWxzLk5FVFdPUktTX0VORFBPSU5UKTtcbiAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDMvMjIvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubW9kZWxzJylcbiAgICAuZmFjdG9yeSgnTm9kZXNNb2RlbCcsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XG4gICAgICAgIHZhciBub2Rlc21vZGVsID0gbmV3IE5vZGVzQ29sbGVjdGlvbigkaHR0cCwgJHEpO1xuICAgICAgICByZXR1cm4gbm9kZXNtb2RlbDtcbiAgICB9XSk7XG5cbi8qKlxuICogTm9kZXNDb2xsZWN0aW9uIGV4dGVuZHMgZnJvbSBCYXNlQ29sbGVjdGlvbi4gSXQgb3ZlcnJpZGVzIGV4dHJhY3QoKSBhbmQgYWRkcyBjb21taXNzaW9uLCBkZWNvbW1pc3Npb24sIHVwZ3JhZGUgYW5kXG4gKiBkaXNjb3ZlciBtZXRob2RzXG4gKiBAcGFyYW0gJGh0dHBcbiAqIEBwYXJhbSAkcVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIE5vZGVzQ29sbGVjdGlvbigkaHR0cCwgJHEpIHtcbiAgICBCYXNlQ29sbGVjdGlvbi5jYWxsKHRoaXMsICRodHRwLCAkcSwgQ29udGl2R2xvYmFscy5OT0RFU19MSVNUX0VORFBPSU5UKTtcbn1cblxuTm9kZXNDb2xsZWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlKTtcblxuTm9kZXNDb2xsZWN0aW9uLnByb3RvdHlwZS5leHRyYWN0ID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIC8vQ29udmVydCB0byBhcnJheSBpZiB0aGUgcmV0dXJuZWQgY29sbGVjdGlvbiBpcyBub3QgYW4gYXJyYXlcbiAgICByZXR1cm4gXy5tYXAocmVzdWx0LmRhdGEsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIHZhbHVlLmtleSA9IGtleTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0pO1xufTtcblxuXG4vKipcbiAqXG4gKiBAcGFyYW0ga2V5XG4gKiBAcGFyYW0gZXh0cmFWYXJzIEpTT04gb2JqZWN0IG9mIGV4dHJhIGFuc2libGUgYW5kIGVudmlyb25tZW50IHZhcmlhYmxlcyB0byBiZSBwYXNzZWQgd2hpbGUgY29tbWlzc2lvbmluZyBhIG5vZGVcbiAqIHtcbiAgICAgKiBcImVudlwiOntcImh0dHBfcHJveHlcIjpcImh0dHA6Ly9wcm94eS5lc2wuY2lzY28uY29tOjgwODBcIiwgXCJodHRwc19wcm94eVwiOlwiaHR0cDovL3Byb3h5LmVzbC5jaXNjby5jb206ODA4MFwifSxcbiAgICAgKiBcImNvbnRyb2xfaW50ZXJmYWNlXCI6IFwiZXRoMVwiLCBcInNlcnZpY2VfdmlwXCI6IFwiMTkyLjE2OC4yLjI1MlwiLCBcInZhbGlkYXRlX2NlcnRzXCI6IFwiZmFsc2VcIiwgXCJuZXRwbHVnaW5faWZcIiA6IFwiZXRoMlwiXG4gICAgICogfVxuICogQHJldHVybnMgeyp9XG4gKi9cbk5vZGVzQ29sbGVjdGlvbi5wcm90b3R5cGUuY29tbWlzc2lvbiA9IGZ1bmN0aW9uIChub2RlT3BzT2JqKSB7XG4gICAgdmFyIG5vZGVzY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgdmFyIGRlZmVycmVkID0gbm9kZXNjb2xsZWN0aW9uLiRxLmRlZmVyKCk7XG4gICAgdmFyIHVybCA9IENvbnRpdkdsb2JhbHMuTk9ERVNfQ09NTUlTU0lPTl9FTkRQT0lOVDtcbiAgICBub2Rlc2NvbGxlY3Rpb24uJGh0dHAucG9zdCh1cmwsIG5vZGVPcHNPYmosIHtcbiAgICAgICAgICAgICdoZWFkZXJzJzoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAvL1NlcnZlciBkb2Vzbid0IHJldHVybiBhbnkganNvbiBpbiByZXNwb25zZVxuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xuICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbk5vZGVzQ29sbGVjdGlvbi5wcm90b3R5cGUuZGVjb21taXNzaW9uID0gZnVuY3Rpb24gKG5vZGVPcHNPYmopIHtcbiAgICB2YXIgbm9kZXNjb2xsZWN0aW9uID0gdGhpcztcbiAgICB2YXIgZGVmZXJyZWQgPSBub2Rlc2NvbGxlY3Rpb24uJHEuZGVmZXIoKTtcbiAgICB2YXIgdXJsID0gQ29udGl2R2xvYmFscy5OT0RFU19ERUNPTU1JU1NJT05fRU5EUE9JTlQ7XG4gICAgbm9kZXNjb2xsZWN0aW9uLiRodHRwLnBvc3QodXJsLCBub2RlT3BzT2JqLCB7XG4gICAgICAgICAgICAnaGVhZGVycyc6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xuICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbk5vZGVzQ29sbGVjdGlvbi5wcm90b3R5cGUudXBncmFkZSA9IGZ1bmN0aW9uIChub2RlT3BzT2JqKSB7XG4gICAgdmFyIG5vZGVzY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgdmFyIGRlZmVycmVkID0gbm9kZXNjb2xsZWN0aW9uLiRxLmRlZmVyKCk7XG4gICAgdmFyIHVybCA9IENvbnRpdkdsb2JhbHMuTk9ERVNfTUFJTlRFTkFOQ0VfRU5EUE9JTlQ7XG4gICAgbm9kZXNjb2xsZWN0aW9uLiRodHRwLnBvc3QodXJsLCBub2RlT3BzT2JqLCB7XG4gICAgICAgICAgICAnaGVhZGVycyc6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xuICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBpcFxuICogQHBhcmFtIGV4dHJhVmFycyBKU09OIG9iamVjdCBvZiBleHRyYSBhbnNpYmxlIGFuZCBlbnZpcm9ubWVudCB2YXJpYWJsZXMgdG8gYmUgcGFzc2VkIHdoaWxlIGRpc2NvdmVyaW5nIGEgbm9kZVxuICoge1xuICAgICAqIFwiZW52XCI6e1wiaHR0cF9wcm94eVwiOlwiaHR0cDovL3Byb3h5LmVzbC5jaXNjby5jb206ODA4MFwiLCBcImh0dHBzX3Byb3h5XCI6XCJodHRwOi8vcHJveHkuZXNsLmNpc2NvLmNvbTo4MDgwXCJ9LFxuICAgICAqIFwiY29udHJvbF9pbnRlcmZhY2VcIjogXCJldGgxXCIsIFwic2VydmljZV92aXBcIjogXCIxOTIuMTY4LjIuMjUyXCIsIFwiY2x1c3Rlci1uYW1lXCI6IFwiY29udGl2XCIsIFwibm9kZS1sYWJlbFwiIDogXCJub2RlMVwiXG4gICAgICogfVxuICogQHJldHVybnMgeyp9XG4gKi9cbk5vZGVzQ29sbGVjdGlvbi5wcm90b3R5cGUuZGlzY292ZXIgPSBmdW5jdGlvbiAobm9kZU9wc09iaikge1xuICAgIHZhciBub2Rlc2NvbGxlY3Rpb24gPSB0aGlzO1xuICAgIHZhciBkZWZlcnJlZCA9IG5vZGVzY29sbGVjdGlvbi4kcS5kZWZlcigpO1xuICAgIHZhciB1cmwgPSBDb250aXZHbG9iYWxzLk5PREVTX0RJU0NPVkVSX0VORFBPSU5UO1xuICAgIG5vZGVzY29sbGVjdGlvbi4kaHR0cC5wb3N0KHVybCwgbm9kZU9wc09iaiwge1xuICAgICAgICAgICAgJ2hlYWRlcnMnOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59OyIsImFuZ3VsYXIubW9kdWxlKCdjb250aXYubW9kZWxzJylcbiAgICAuZmFjdG9yeSgnT3JnYW5pemF0aW9uc01vZGVsJywgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xsZWN0aW9uKCRodHRwLCAkcSwgQ29udGl2R2xvYmFscy5PUkdBTklaQVRJT05TX0VORFBPSU5UKTtcbiAgICB9XSk7IiwiYW5ndWxhci5tb2R1bGUoJ2NvbnRpdi5tb2RlbHMnKVxuICAgIC5mYWN0b3J5KCdQb2xpY2llc01vZGVsJywgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcbiAgICAgICAgdmFyIHBvbGljaWVzbW9kZWwgPSBuZXcgQ29sbGVjdGlvbigkaHR0cCwgJHEsIENvbnRpdkdsb2JhbHMuUE9MSUNJRVNfRU5EUE9JTlQpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZW5lcmF0ZSBwb2xpY3kga2V5IHRvIHNhdmUgcG9saWN5IG9uIHNlcnZlclxuICAgICAgICAgKiBAcGFyYW0gcG9saWN5XG4gICAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICBwb2xpY2llc21vZGVsLmdlbmVyYXRlS2V5ID0gZnVuY3Rpb24gKHBvbGljeSkge1xuICAgICAgICAgICAgcmV0dXJuIHBvbGljeS50ZW5hbnROYW1lICsgJzonICsgcG9saWN5LnBvbGljeU5hbWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHBvbGljaWVzbW9kZWw7XG4gICAgfV0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzgvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubW9kZWxzJylcbiAgICAuZmFjdG9yeSgnUnVsZXNNb2RlbCcsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XG4gICAgICAgIHZhciBydWxlc21vZGVsID0gbmV3IENvbGxlY3Rpb24oJGh0dHAsICRxLCBDb250aXZHbG9iYWxzLlJVTEVTX0VORFBPSU5UKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IGluY29taW5nIHJ1bGVzIGZvciBhIGdpdmVuIHBvbGljeSBhbmQgYSB0ZW5hbnRcbiAgICAgICAgICogQHBhcmFtIHBvbGljeU5hbWVcbiAgICAgICAgICogQHBhcmFtIHRlbmFudE5hbWVcbiAgICAgICAgICogQHJldHVybnMgeyp8d2ViZHJpdmVyLnByb21pc2UuUHJvbWlzZX1cbiAgICAgICAgICovXG4gICAgICAgIHJ1bGVzbW9kZWwuZ2V0SW5jb21pbmdSdWxlcyA9IGZ1bmN0aW9uIChwb2xpY3lOYW1lLCB0ZW5hbnROYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gcnVsZXNtb2RlbC5nZXQoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXy5maWx0ZXIocmVzdWx0LCB7XG4gICAgICAgICAgICAgICAgICAgICdwb2xpY3lOYW1lJzogcG9saWN5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgJ2RpcmVjdGlvbic6ICdpbicsXG4gICAgICAgICAgICAgICAgICAgICd0ZW5hbnROYW1lJzogdGVuYW50TmFtZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IG91dGdvaW5nIHJ1bGVzIGZvciBhIGdpdmVuIHBvbGljeSBhbmQgYSB0ZW5hbnRcbiAgICAgICAgICogQHBhcmFtIHBvbGljeU5hbWVcbiAgICAgICAgICogQHBhcmFtIHRlbmFudE5hbWVcbiAgICAgICAgICogQHJldHVybnMgeyp8d2ViZHJpdmVyLnByb21pc2UuUHJvbWlzZX1cbiAgICAgICAgICovXG4gICAgICAgIHJ1bGVzbW9kZWwuZ2V0T3V0Z29pbmdSdWxlcyA9IGZ1bmN0aW9uIChwb2xpY3lOYW1lLCB0ZW5hbnROYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gcnVsZXNtb2RlbC5nZXQoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXy5maWx0ZXIocmVzdWx0LCB7XG4gICAgICAgICAgICAgICAgICAgICdwb2xpY3lOYW1lJzogcG9saWN5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgJ2RpcmVjdGlvbic6ICdvdXQnLFxuICAgICAgICAgICAgICAgICAgICAndGVuYW50TmFtZSc6IHRlbmFudE5hbWVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdlbmVyYXRlIHJ1bGUga2V5IHRvIHNhdmUgcnVsZSBvbiBzZXJ2ZXJcbiAgICAgICAgICogQHBhcmFtIHJ1bGVcbiAgICAgICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHJ1bGVzbW9kZWwuZ2VuZXJhdGVLZXkgPSBmdW5jdGlvbiAocnVsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJ1bGUudGVuYW50TmFtZSArICc6JyArIHJ1bGUucG9saWN5TmFtZSArICc6JyArIHJ1bGUucnVsZUlkO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBydWxlc21vZGVsO1xuICAgIH1dKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDUvMTEvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubW9kZWxzJylcbiAgICAuZmFjdG9yeSgnU2VydmljZWxic01vZGVsJywgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xsZWN0aW9uKCRodHRwLCAkcSwgQ29udGl2R2xvYmFscy5TRVJWSUNFTEJTX0VORFBPSU5UKTtcbiAgICB9XSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgdmphaW4zIG9uIDQvMTgvMTYuXG4gKi9cbmFuZ3VsYXIubW9kdWxlKCdjb250aXYubW9kZWxzJylcbiAgICAuZmFjdG9yeSgnU3RvcmFnZVBvbGljaWVzTW9kZWwnLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogU3RvcmFnZVBvbGljaWVzQ29sbGVjdGlvbiBleHRlbmRzIGZyb20gQmFzZUNvbGxlY3Rpb25cbiAgICAgICAgICogQHBhcmFtICRodHRwXG4gICAgICAgICAqIEBwYXJhbSAkcVxuICAgICAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIFN0b3JhZ2VQb2xpY2llc0NvbGxlY3Rpb24oJGh0dHAsICRxKSB7XG4gICAgICAgICAgICBDb2xsZWN0aW9uLmNhbGwodGhpcywgJGh0dHAsICRxLCBDb250aXZHbG9iYWxzLlNUT1JBR0VQT0xJQ0lFU19FTkRQT0lOVCk7XG4gICAgICAgIH1cblxuICAgICAgICBTdG9yYWdlUG9saWNpZXNDb2xsZWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ29sbGVjdGlvbi5wcm90b3R5cGUpO1xuXG4gICAgICAgIFN0b3JhZ2VQb2xpY2llc0NvbGxlY3Rpb24ucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgICAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzO1xuICAgICAgICAgICAgdmFyIHVybCA9IGNvbGxlY3Rpb24udXJsICsgbW9kZWwubmFtZTtcbiAgICAgICAgICAgIHJldHVybiBDb2xsZWN0aW9uLnByb3RvdHlwZS5jcmVhdGUuY2FsbChjb2xsZWN0aW9uLCBtb2RlbCwgdXJsKTtcbiAgICAgICAgfTtcblxuICAgICAgICBTdG9yYWdlUG9saWNpZXNDb2xsZWN0aW9uLnByb3RvdHlwZS5zYXZlID0gZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgICAgICAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSBjb2xsZWN0aW9uLiRxLmRlZmVyKCk7XG4gICAgICAgICAgICB2YXIgdXJsID0gY29sbGVjdGlvbi51cmwgKyBtb2RlbC5uYW1lO1xuICAgICAgICAgICAgY29sbGVjdGlvbi4kaHR0cC5wb3N0KHVybCwgbW9kZWwpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucmVtb3ZlKGNvbGxlY3Rpb24ubW9kZWxzLCBmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4ubmFtZSA9PSBtb2RlbC5uYW1lO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbi5tb2RlbHMucHVzaChtb2RlbCk7XG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHBvbGljaWVzbW9kZWwgPSBuZXcgU3RvcmFnZVBvbGljaWVzQ29sbGVjdGlvbigkaHR0cCwgJHEpO1xuICAgICAgICByZXR1cm4gcG9saWNpZXNtb2RlbDtcbiAgICB9XSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiAzLzIyLzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2Lm1vZGVscycpXG4gICAgLmZhY3RvcnkoJ1ZvbHVtZXNNb2RlbCcsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWb2x1bWVzQ29sbGVjdGlvbiBleHRlbmRzIGZyb20gQmFzZUNvbGxlY3Rpb25cbiAgICAgICAgICogQHBhcmFtICRodHRwXG4gICAgICAgICAqIEBwYXJhbSAkcVxuICAgICAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIFZvbHVtZXNDb2xsZWN0aW9uKCRodHRwLCAkcSkge1xuICAgICAgICAgICAgQ29sbGVjdGlvbi5jYWxsKHRoaXMsICRodHRwLCAkcSwgQ29udGl2R2xvYmFscy5WT0xVTUVTX0VORFBPSU5UKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFZvbHVtZXNDb2xsZWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ29sbGVjdGlvbi5wcm90b3R5cGUpO1xuXG4gICAgICAgIFZvbHVtZXNDb2xsZWN0aW9uLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAobW9kZWwpIHtcbiAgICAgICAgICAgIHZhciB2b2x1bWVzY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSB2b2x1bWVzY29sbGVjdGlvbi4kcS5kZWZlcigpO1xuICAgICAgICAgICAgdmFyIHVybCA9IENvbnRpdkdsb2JhbHMuVk9MVU1FU19ERUxFVEVfRU5EUE9JTlQ7XG4gICAgICAgICAgICAvL2RlbGV0ZSBlbmRwb2ludCBleHBlY3RzIHZvbHVtZSBwcm9wZXJ0eSBpbiBhZGRpdGlvbiB0byBwb2xpY3kuIFRPRE8gYXNrIHRvIGJlIGZpeGVkXG4gICAgICAgICAgICBtb2RlbC52b2x1bWUgPSBtb2RlbC5uYW1lO1xuICAgICAgICAgICAgdmFyIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBkYXRhOiBtb2RlbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZvbHVtZXNjb2xsZWN0aW9uLiRodHRwLmRlbGV0ZSh1cmwsIGNvbmZpZylcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5yZW1vdmUodm9sdW1lc2NvbGxlY3Rpb24ubW9kZWxzLCBmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChuLm5hbWUgPT0gbW9kZWwubmFtZSAmJiBuLnBvbGljeSA9PSBtb2RlbC5wb2xpY3kpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh2b2x1bWVzY29sbGVjdGlvbi5leHRyYWN0KHJlc3BvbnNlKSk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3Qodm9sdW1lc2NvbGxlY3Rpb24uZXh0cmFjdChyZXNwb25zZSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgICAgIH07XG5cbiAgICAgICAgVm9sdW1lc0NvbGxlY3Rpb24ucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgICAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzO1xuICAgICAgICAgICAgdmFyIHVybCA9IENvbnRpdkdsb2JhbHMuVk9MVU1FU19DUkVBVEVfRU5EUE9JTlQ7XG4gICAgICAgICAgICByZXR1cm4gQ29sbGVjdGlvbi5wcm90b3R5cGUuY3JlYXRlLmNhbGwoY29sbGVjdGlvbiwgbW9kZWwsIHVybCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgVm9sdW1lc0NvbGxlY3Rpb24ucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAobW9kZWwsIHNuYXBzaG90LCBuZXdWb2x1bWUpIHtcbiAgICAgICAgICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcztcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9IGNvbGxlY3Rpb24uJHEuZGVmZXIoKTtcbiAgICAgICAgICAgIHZhciB1cmwgPSBDb250aXZHbG9iYWxzLlZPTFVNRVNfQ09QWVNOQVBTSE9UU19FTkRQT0lOVDtcbiAgICAgICAgICAgIHZhciB2b2xjb3B5bW9kZWwgPSB7XG4gICAgICAgICAgICAgICAgdm9sdW1lOiBtb2RlbC5uYW1lLFxuICAgICAgICAgICAgICAgIHBvbGljeTogbW9kZWwucG9saWN5LFxuICAgICAgICAgICAgICAgIE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBuZXdWb2x1bWUsXG4gICAgICAgICAgICAgICAgICAgIHNuYXBzaG90OiBzbmFwc2hvdFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb2xsZWN0aW9uLiRodHRwLnBvc3QodXJsLCB2b2xjb3B5bW9kZWwpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vVE9ETzogQWRkIHRoZSBuZXcgdm9sdW1lIHRvIHRoZSBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIC8vY29sbGVjdGlvbi5tb2RlbHMucHVzaChjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChjb2xsZWN0aW9uLmV4dHJhY3QocmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciB2b2x1bWVzbW9kZWwgPSBuZXcgVm9sdW1lc0NvbGxlY3Rpb24oJGh0dHAsICRxKTtcbiAgICAgICAgcmV0dXJuIHZvbHVtZXNtb2RlbDtcbiAgICB9XSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHZqYWluMyBvbiA0LzI5LzE2LlxuICovXG5hbmd1bGFyLm1vZHVsZSgnY29udGl2LnV0aWxzJylcbiAgICAuZmFjdG9yeSgnQ1JVREhlbHBlclNlcnZpY2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBzdGFydExvYWRlcihjb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5zaG93TG9hZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gc3RvcExvYWRlcihjb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5zaG93TG9hZGVyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHNob3dTZXJ2ZXJFcnJvcihjb250cm9sbGVyLCBtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5zaG93U2VydmVyRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuc2VydmVyRXJyb3JNZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gaGlkZVNlcnZlckVycm9yKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnNob3dTZXJ2ZXJFcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0YXJ0TG9hZGVyOiBzdGFydExvYWRlcixcbiAgICAgICAgICAgICAgICBzdG9wTG9hZGVyOiBzdG9wTG9hZGVyLFxuICAgICAgICAgICAgICAgIHNob3dTZXJ2ZXJFcnJvcjogc2hvd1NlcnZlckVycm9yLFxuICAgICAgICAgICAgICAgIGhpZGVTZXJ2ZXJFcnJvcjogaGlkZVNlcnZlckVycm9yXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICApO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
>>>>>>> cluster global settings implemented
