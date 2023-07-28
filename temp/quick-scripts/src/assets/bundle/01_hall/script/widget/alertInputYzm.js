"use strict";
cc._RF.push(module, 'af281uQMENOnJQxV6w2RMvt', 'alertInputYzm');
// bundle/01_hall/script/widget/alertInputYzm.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentBase_1 = require("../../../00_base/script/common/ComponentBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var alertInputYzm = /** @class */ (function (_super) {
    __extends(alertInputYzm, _super);
    function alertInputYzm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        return _this;
    }
    alertInputYzm.prototype.start = function () {
        this.TouchOn(this.closeBtn, this.alertDestory);
    };
    alertInputYzm.prototype.onClickCloseBtn = function () {
        this.node.destroy();
    };
    __decorate([
        property(cc.Node)
    ], alertInputYzm.prototype, "closeBtn", void 0);
    alertInputYzm = __decorate([
        ccclass
    ], alertInputYzm);
    return alertInputYzm;
}(ComponentBase_1.default));
exports.default = alertInputYzm;

cc._RF.pop();