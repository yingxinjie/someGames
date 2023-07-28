"use strict";
cc._RF.push(module, '92ae42OwmRPAo5iZWrO+82S', 'closeScene');
// bundle/00_base/script/closeScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ComponentBase_1 = require("./common/ComponentBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var closeScene = /** @class */ (function (_super) {
    __extends(closeScene, _super);
    function closeScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    closeScene.prototype.start = function () {
        this.TouchOn(this.node, this.goToHall);
    };
    closeScene.prototype.goToHall = function () {
        cc.director.loadScene("hall");
    };
    closeScene = __decorate([
        ccclass
    ], closeScene);
    return closeScene;
}(ComponentBase_1.default));
exports.default = closeScene;

cc._RF.pop();