/**
 * Main entry point for angular 1.x build
 * @module ng1
 */
/** for typedoc */
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require("./core"));
__export(require("./ng1/services"));
__export(require("./ng1/statebuilders/views"));
__export(require("./ng1/stateProvider"));
require("./ng1/directives/stateDirectives");
require("./ng1/stateFilters");
require("./ng1/directives/viewDirective");
require("./ng1/viewScroll");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = "ui.router";
//# sourceMappingURL=ng1.js.map