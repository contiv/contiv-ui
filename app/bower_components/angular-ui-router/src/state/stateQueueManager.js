"use strict";
/** @module state */ /** for typedoc */
var common_1 = require("../common/common");
var predicates_1 = require("../common/predicates");
var stateObject_1 = require("./stateObject");
var StateQueueManager = (function () {
    function StateQueueManager(states, builder, $urlRouterProvider, listeners) {
        this.states = states;
        this.builder = builder;
        this.$urlRouterProvider = $urlRouterProvider;
        this.listeners = listeners;
        this.queue = [];
    }
    StateQueueManager.prototype.register = function (config) {
        var _a = this, states = _a.states, queue = _a.queue, $state = _a.$state;
        // Wrap a new object around the state so we can store our private details easily.
        // @TODO: state = new State(extend({}, config, { ... }))
        var state = common_1.inherit(new stateObject_1.State(), common_1.extend({}, config, {
            self: config,
            resolve: config.resolve || [],
            toString: function () { return config.name; }
        }));
        if (!predicates_1.isString(state.name))
            throw new Error("State must have a valid name");
        if (states.hasOwnProperty(state.name) || common_1.pluck(queue, 'name').indexOf(state.name) !== -1)
            throw new Error("State '" + state.name + "' is already defined");
        queue.push(state);
        if (this.$state) {
            this.flush($state);
        }
        return state;
    };
    StateQueueManager.prototype.flush = function ($state) {
        var _a = this, queue = _a.queue, states = _a.states, builder = _a.builder;
        var registered = [], // states that got registered
        orphans = [], // states that dodn't yet have a parent registered
        previousQueueLength = {}; // keep track of how long the queue when an orphan was first encountered
        while (queue.length > 0) {
            var state = queue.shift();
            var result = builder.build(state);
            var orphanIdx = orphans.indexOf(state);
            if (result) {
                if (states.hasOwnProperty(state.name))
                    throw new Error("State '" + name + "' is already defined");
                states[state.name] = state;
                this.attachRoute($state, state);
                if (orphanIdx >= 0)
                    orphans.splice(orphanIdx, 1);
                registered.push(state);
                continue;
            }
            var prev = previousQueueLength[state.name];
            previousQueueLength[state.name] = queue.length;
            if (orphanIdx >= 0 && prev === queue.length) {
                // Wait until two consecutive iterations where no additional states were dequeued successfully.
                // throw new Error(`Cannot register orphaned state '${state.name}'`);
                queue.push(state);
                return states;
            }
            else if (orphanIdx < 0) {
                orphans.push(state);
            }
            queue.push(state);
        }
        if (registered.length) {
            this.listeners.forEach(function (listener) { return listener("registered", registered.map(function (s) { return s.self; })); });
        }
        return states;
    };
    StateQueueManager.prototype.autoFlush = function ($state) {
        this.$state = $state;
        this.flush($state);
    };
    StateQueueManager.prototype.attachRoute = function ($state, state) {
        var $urlRouterProvider = this.$urlRouterProvider;
        if (state.abstract || !state.url)
            return;
        $urlRouterProvider.when(state.url, ['$match', '$stateParams', function ($match, $stateParams) {
                if ($state.$current.navigable !== state || !common_1.equalForKeys($match, $stateParams)) {
                    $state.transitionTo(state, $match, { inherit: true, source: "url" });
                }
            }], function (rule) { return state._urlRule = rule; });
    };
    return StateQueueManager;
}());
exports.StateQueueManager = StateQueueManager;
//# sourceMappingURL=stateQueueManager.js.map