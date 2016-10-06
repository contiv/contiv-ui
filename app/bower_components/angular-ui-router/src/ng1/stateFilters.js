/** @module state */ /** for typedoc */
"use strict";
var angular = require('angular');
/**
 * @ngdoc filter
 * @name ui.router.state.filter:isState
 *
 * @requires ui.router.state.$state
 *
 * @description
 * Translates to {@link ui.router.state.$state#methods_is $state.is("stateName")}.
 */
$IsStateFilter.$inject = ['$state'];
function $IsStateFilter($state) {
    var isFilter = function (state, params, options) {
        return $state.is(state, params, options);
    };
    isFilter.$stateful = true;
    return isFilter;
}
exports.$IsStateFilter = $IsStateFilter;
/**
 * @ngdoc filter
 * @name ui.router.state.filter:includedByState
 *
 * @requires ui.router.state.$state
 *
 * @description
 * Translates to {@link ui.router.state.$state#methods_includes $state.includes('fullOrPartialStateName')}.
 */
$IncludedByStateFilter.$inject = ['$state'];
function $IncludedByStateFilter($state) {
    var includesFilter = function (state, params, options) {
        return $state.includes(state, params, options);
    };
    includesFilter.$stateful = true;
    return includesFilter;
}
exports.$IncludedByStateFilter = $IncludedByStateFilter;
angular.module('ui.router.state')
    .filter('isState', $IsStateFilter)
    .filter('includedByState', $IncludedByStateFilter);
//# sourceMappingURL=stateFilters.js.map