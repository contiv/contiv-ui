"use strict";
/** @module core */ /** */
var urlMatcherFactory_1 = require("./url/urlMatcherFactory");
var urlRouter_1 = require("./url/urlRouter");
var urlRouter_2 = require("./url/urlRouter");
var transitionService_1 = require("./transition/transitionService");
var view_1 = require("./view/view");
var stateRegistry_1 = require("./state/stateRegistry");
var stateService_1 = require("./state/stateService");
var globals_1 = require("./globals");
/**
 * The master class used to instantiate an instance of UI-Router.
 *
 * This class instantiates and wires the global UI-Router services.
 *
 * After instantiating a new instance of the Router class, configure it for your app.  For instance, register
 * your app states with the [[stateRegistry]] (and set url options using ...).  Then, tell UI-Router to monitor
 * the URL by calling `urlRouter.listen()` ([[URLRouter.listen]])
 */
var UIRouter = (function () {
    function UIRouter() {
        this.viewService = new view_1.ViewService();
        this.transitionService = new transitionService_1.TransitionService(this);
        this.globals = new globals_1.Globals(this.transitionService);
        this.urlMatcherFactory = new urlMatcherFactory_1.UrlMatcherFactory();
        this.urlRouterProvider = new urlRouter_1.UrlRouterProvider(this.urlMatcherFactory, this.globals.params);
        this.urlRouter = new urlRouter_2.UrlRouter(this.urlRouterProvider);
        this.stateRegistry = new stateRegistry_1.StateRegistry(this.urlMatcherFactory, this.urlRouterProvider);
        this.stateService = new stateService_1.StateService(this);
        this.viewService.rootContext(this.stateRegistry.root());
        this.globals.$current = this.stateRegistry.root();
        this.globals.current = this.globals.$current.self;
    }
    return UIRouter;
}());
exports.UIRouter = UIRouter;
//# sourceMappingURL=router.js.map