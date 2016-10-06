"use strict";
var notImplemented = function (fnname) { return function () {
    throw new Error(fnname + "(): No coreservices implementation for UI-Router is loaded. You should include one of: ['angular1.js']");
}; };
var services = {
    $q: undefined,
    $injector: undefined,
    location: {},
    locationConfig: {},
    template: {}
};
exports.services = services;
["setUrl", "path", "search", "hash", "onChange"]
    .forEach(function (key) { return services.location[key] = notImplemented(key); });
["port", "protocol", "host", "baseHref", "html5Mode", "hashPrefix"]
    .forEach(function (key) { return services.locationConfig[key] = notImplemented(key); });
//# sourceMappingURL=coreservices.js.map