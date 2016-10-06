/** @module common */ /** */
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require("./common/module"));
__export(require("./params/module"));
__export(require("./path/module"));
__export(require("./resolve/module"));
__export(require("./state/module"));
__export(require("./transition/module"));
__export(require("./url/module"));
__export(require("./view/module"));
__export(require("./globals"));
var router_1 = require("./router");
exports.UIRouter = router_1.UIRouter;
//# sourceMappingURL=core.js.map