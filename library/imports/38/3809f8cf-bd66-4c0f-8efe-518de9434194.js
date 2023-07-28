"use strict";
cc._RF.push(module, '3809fjPvWZMD47+UY3pQ0GU', 'bottomtoggle');
// bundle/01_hall/script/widget/bottomtoggle.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewManager_1 = require("../config/ViewManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var bottomtoggle = /** @class */ (function (_super) {
    __extends(bottomtoggle, _super);
    function bottomtoggle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** 底部的切换按钮 */
    bottomtoggle.prototype.toggleOpenView = function (targ) {
        console.log(targ.node.name);
        ViewManager_1.ViewManager.Open(targ.node.name);
    };
    bottomtoggle = __decorate([
        ccclass
    ], bottomtoggle);
    return bottomtoggle;
}(cc.Component));
exports.default = bottomtoggle;

cc._RF.pop();