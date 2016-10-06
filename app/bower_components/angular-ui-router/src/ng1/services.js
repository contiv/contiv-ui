/**
 * # UI-Router for Angular 1
 *
 * - Provides an implementation for the [[CoreServices]] API, based on angular 1 services.
 * - Also registers some services with the angular 1 injector.
 * - Creates and bootstraps a new [[UIRouter]] object.  Ties it to the the angular 1 lifecycle.
 *
 * @module ng1
 * @preferred
 */
"use strict";
/** for typedoc */
var router_1 = require("../router");
var coreservices_1 = require("../common/coreservices");
var common_1 = require("../common/common");
var hof_1 = require("../common/hof");
var predicates_1 = require("../common/predicates");
var resolveService_1 = require("./legacy/resolveService");
var trace_1 = require("../common/trace");
var views_1 = require("./statebuilders/views");
var templateFactory_1 = require("./templateFactory");
var stateProvider_1 = require("./stateProvider");
var onEnterExitRetain_1 = require("./statebuilders/onEnterExitRetain");
var angular = require('angular');
/** @hidden */
var app = angular.module("ui.router.angular1", []);
/**
 * @ngdoc overview
 * @name ui.router.util
 *
 * @description
 * # ui.router.util sub-module
 *
 * This module is a dependency of other sub-modules. Do not include this module as a dependency
 * in your angular app (use {@link ui.router} module instead).
 *
 */
angular.module('ui.router.util', ['ng', 'ui.router.init']);
/**
 * @ngdoc overview
 * @name ui.router.router
 *
 * @requires ui.router.util
 *
 * @description
 * # ui.router.router sub-module
 *
 * This module is a dependency of other sub-modules. Do not include this module as a dependency
 * in your angular app (use {@link ui.router} module instead).
 */
angular.module('ui.router.router', ['ui.router.util']);
/**
 * @ngdoc overview
 * @name ui.router.state
 *
 * @requires ui.router.router
 * @requires ui.router.util
 *
 * @description
 * # ui.router.state sub-module
 *
 * This module is a dependency of the main ui.router module. Do not include this module as a dependency
 * in your angular app (use {@link ui.router} module instead).
 *
 */
angular.module('ui.router.state', ['ui.router.router', 'ui.router.util', 'ui.router.angular1']);
/**
 * @ngdoc overview
 * @name ui.router
 *
 * @requires ui.router.state
 *
 * @description
 * # ui.router
 *
 * ## The main module for ui.router
 * There are several sub-modules included with the ui.router module, however only this module is needed
 * as a dependency within your angular app. The other modules are for organization purposes.
 *
 * The modules are:
 * * ui.router - the main "umbrella" module
 * * ui.router.router -
 *
 * *You'll need to include **only** this module as the dependency within your angular app.*
 *
 * <pre>
 * <!doctype html>
 * <html ng-app="myApp">
 * <head>
 *   <script src="js/angular.js"></script>
 *   <!-- Include the ui-router script -->
 *   <script src="js/angular-ui-router.min.js"></script>
 *   <script>
 *     // ...and add 'ui.router' as a dependency
 *     var myApp = angular.module('myApp', ['ui.router']);
 *   </script>
 * </head>
 * <body>
 * </body>
 * </html>
 * </pre>
 */
angular.module('ui.router', ['ui.router.init', 'ui.router.state', 'ui.router.angular1']);
angular.module('ui.router.compat', ['ui.router']);
/**
 * Annotates a controller expression (may be a controller function(), a "controllername",
 * or "controllername as name")
 *
 * - Temporarily decorates $injector.instantiate.
 * - Invokes $controller() service
 *   - Calls $injector.instantiate with controller constructor
 * - Annotate constructor
 * - Undecorate $injector
 *
 * returns an array of strings, which are the arguments of the controller expression
 */
function annotateController(controllerExpression) {
    var $injector = coreservices_1.services.$injector;
    var $controller = $injector.get("$controller");
    var oldInstantiate = $injector.instantiate;
    try {
        var deps_1;
        $injector.instantiate = function fakeInstantiate(constructorFunction) {
            $injector.instantiate = oldInstantiate; // Un-decorate ASAP
            deps_1 = $injector.annotate(constructorFunction);
        };
        $controller(controllerExpression, { $scope: {} });
        return deps_1;
    }
    finally {
        $injector.instantiate = oldInstantiate;
    }
}
exports.annotateController = annotateController;
var router = null;
$uiRouter.$inject = ['$locationProvider'];
/** This angular 1 provider instantiates a Router and exposes its services via the angular injector */
function $uiRouter($locationProvider) {
    // Create a new instance of the Router when the $uiRouterProvider is initialized
    router = new router_1.UIRouter();
    router.stateProvider = new stateProvider_1.StateProvider(router.stateRegistry, router.stateService);
    // Apply ng1 specific StateBuilder code for `views`, `resolve`, and `onExit/Retain/Enter` properties
    router.stateRegistry.decorator("views", views_1.ng1ViewsBuilder);
    router.stateRegistry.decorator("onExit", onEnterExitRetain_1.getStateHookBuilder("onExit"));
    router.stateRegistry.decorator("onRetain", onEnterExitRetain_1.getStateHookBuilder("onRetain"));
    router.stateRegistry.decorator("onEnter", onEnterExitRetain_1.getStateHookBuilder("onEnter"));
    router.viewService.viewConfigFactory('ng1', views_1.ng1ViewConfigFactory);
    // Bind LocationConfig.hashPrefix to $locationProvider.hashPrefix
    common_1.bindFunctions($locationProvider, coreservices_1.services.locationConfig, $locationProvider, ['hashPrefix']);
    // Create a LocationService.onChange registry
    var urlListeners = [];
    coreservices_1.services.location.onChange = function (callback) {
        urlListeners.push(callback);
        return function () { return common_1.removeFrom(urlListeners)(callback); };
    };
    this.$get = $get;
    $get.$inject = ['$location', '$browser', '$sniffer', '$rootScope', '$http', '$templateCache'];
    function $get($location, $browser, $sniffer, $rootScope, $http, $templateCache) {
        // Bind $locationChangeSuccess to the listeners registered in LocationService.onChange
        $rootScope.$on("$locationChangeSuccess", function (evt) { return urlListeners.forEach(function (fn) { return fn(evt); }); });
        // Bind LocationConfig.html5Mode to $locationProvider.html5Mode and $sniffer.history
        coreservices_1.services.locationConfig.html5Mode = function () {
            var html5Mode = $locationProvider.html5Mode();
            html5Mode = predicates_1.isObject(html5Mode) ? html5Mode.enabled : html5Mode;
            return html5Mode && $sniffer.history;
        };
        coreservices_1.services.location.setUrl = function (newUrl, replace) {
            if (replace === void 0) { replace = false; }
            $location.url(newUrl);
            if (replace)
                $location.replace();
        };
        coreservices_1.services.template.get = function (url) {
            return $http.get(url, { cache: $templateCache, headers: { Accept: 'text/html' } }).then(hof_1.prop("data"));
        };
        // Bind these LocationService functions to $location
        common_1.bindFunctions($location, coreservices_1.services.location, $location, ["replace", "url", "path", "search", "hash"]);
        // Bind these LocationConfig functions to $location
        common_1.bindFunctions($location, coreservices_1.services.locationConfig, $location, ['port', 'protocol', 'host']);
        // Bind these LocationConfig functions to $browser
        common_1.bindFunctions($browser, coreservices_1.services.locationConfig, $browser, ['baseHref']);
        return router;
    }
}
// The 'ui.router' ng1 module depends on 'ui.router.init' module.
angular.module('ui.router.init', []).provider("$uiRouter", $uiRouter);
runBlock.$inject = ['$injector', '$q'];
function runBlock($injector, $q) {
    coreservices_1.services.$injector = $injector;
    coreservices_1.services.$q = $q;
}
angular.module('ui.router.init').run(runBlock);
// This effectively calls $get() to init when we enter runtime
angular.module('ui.router.init').run(['$uiRouter', function ($uiRouter) { }]);
// $urlMatcherFactory service and $urlMatcherFactoryProvider
angular.module('ui.router.util').provider('$urlMatcherFactory', ['$uiRouterProvider', function () { return router.urlMatcherFactory; }]);
angular.module('ui.router.util').run(['$urlMatcherFactory', function ($urlMatcherFactory) { }]);
// $urlRouter service and $urlRouterProvider
function getUrlRouterProvider() {
    router.urlRouterProvider["$get"] = function () {
        router.urlRouter.update(true);
        if (!this.interceptDeferred)
            router.urlRouter.listen();
        return router.urlRouter;
    };
    return router.urlRouterProvider;
}
angular.module('ui.router.router').provider('$urlRouter', ['$uiRouterProvider', getUrlRouterProvider]);
angular.module('ui.router.router').run(['$urlRouter', function ($urlRouter) { }]);
// $state service and $stateProvider
// $urlRouter service and $urlRouterProvider
function getStateProvider() {
    router.stateProvider["$get"] = function () {
        // Autoflush once we are in runtime
        router.stateRegistry.stateQueue.autoFlush(router.stateService);
        return router.stateService;
    };
    return router.stateProvider;
}
angular.module('ui.router.state').provider('$state', ['$uiRouterProvider', getStateProvider]);
angular.module('ui.router.state').run(['$state', function ($state) { }]);
// $stateParams service
angular.module('ui.router.state').factory('$stateParams', ['$uiRouter', function ($uiRouter) {
        return $uiRouter.globals.params;
    }]);
// $transitions service and $transitionsProvider
function getTransitionsProvider() {
    router.transitionService["$get"] = function () { return router.transitionService; };
    return router.transitionService;
}
angular.module('ui.router.state').provider('$transitions', ['$uiRouterProvider', getTransitionsProvider]);
// $templateFactory service
angular.module('ui.router.util').factory('$templateFactory', ['$uiRouter', function () { return new templateFactory_1.TemplateFactory(); }]);
// The $view service
angular.module('ui.router').factory('$view', function () { return router.viewService; });
// The old $resolve service
angular.module('ui.router').factory('$resolve', resolveService_1.resolveFactory);
// $trace service
angular.module("ui.router").service("$trace", function () { return trace_1.trace; });
watchDigests.$inject = ['$rootScope'];
function watchDigests($rootScope) {
    $rootScope.$watch(function () { trace_1.trace.approximateDigests++; });
}
exports.watchDigests = watchDigests;
angular.module("ui.router").run(watchDigests);
exports.getLocals = function (ctx) {
    var tokens = ctx.getTokens().filter(predicates_1.isString);
    var tuples = tokens.map(function (key) { return [key, ctx.getResolvable(key).data]; });
    return tuples.reduce(common_1.applyPairs, {});
};
/** Injectable services */
/**
 * An injectable service object which has the current state parameters
 *
 * This angular service (singleton object) holds the current state parameters.
 * The values in `$stateParams` are not updated until *after* a [[Transition]] successfully completes.
 *
 * This object can be injected into other services.
 *
 * @example
 * ```js
 *
 * SomeService.$inject = ['$http', '$stateParams'];
 * function SomeService($http, $stateParams) {
 *   return {
 *     getUser: function() {
 *       return $http.get('/api/users/' + $stateParams.username);
 *     }
 *   }
 * };
 * angular.service('SomeService', SomeService);
 * ```
 *
 * ### Deprecation warning:
 *
 * When `$stateParams` is injected into transition hooks, resolves and view controllers, they receive a different
 * object than this global service object.  In those cases, the injected object has the parameter values for the
 * *pending* Transition.
 *
 * Because of these confusing details, this service is deprecated.
 *
 * @deprecated Instead of using `$stateParams, inject the current [[Transition]] as `$transition$` and use [[Transition.params]]
 * ```js
 * MyController.$inject = ['$transition$'];
 * function MyController($transition$) {
 *   var username = $transition$.params().username;
 *   // .. do something with username
 * }
 * ```
 */
var $stateParams;
/**
 * An injectable service primarily used to register transition hooks
 *
 * This angular service exposes the [[TransitionService]] singleton, which is primarily used to add transition hooks.
 *
 * The same object is also exposed as [[$transitionsProvider]] for injection during angular config time.
 */
var $transitions;
/**
 * A config-time injectable provider primarily used to register transition hooks
 *
 * This angular provider exposes the [[TransitionService]] singleton, which is primarily used to add transition hooks.
 *
 * The same object is also exposed as [[$transitions]] for injection at runtime.
 */
var $transitionsProvider;
/**
 * An injectable service used to query for current state information.
 *
 * This angular service exposes the [[StateService]] singleton.
 */
var $state;
/**
 * A config-time injectable provider used to register states.
 *
 * This angular service exposes the [[StateProvider]] singleton.
 */
var $stateProvider;
/**
 * A config-time injectable provider used to manage the URL.
 *
 * This angular service exposes the [[UrlRouterProvider]] singleton.
 */
var $urlRouterProvider;
/**
 * An injectable service used to configure URL redirects.
 *
 * This angular service exposes the [[UrlRouter]] singleton.
 */
var $urlRouter;
/**
 * An injectable service used to configure the URL.
 *
 * This service is used to set url mapping options, and create [[UrlMatcher]] objects.
 *
 * This angular service exposes the [[UrlMatcherFactory]] singleton.
 * The singleton is also exposed at config-time as the [[$urlMatcherFactoryProvider]].
 */
var $urlMatcherFactory;
/**
 * An injectable service used to configure the URL.
 *
 * This service is used to set url mapping options, and create [[UrlMatcher]] objects.
 *
 * This angular service exposes the [[UrlMatcherFactory]] singleton at config-time.
 * The singleton is also exposed at runtime as the [[$urlMatcherFactory]].
 */
var $urlMatcherFactoryProvider;
//# sourceMappingURL=services.js.map