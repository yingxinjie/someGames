"use strict";
cc._RF.push(module, '0929b8NaixIbKsF2S2pIKko', 'ClickHide');
// bundle/00_base/script/common/ClickHide.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.WillHideTartget = null;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchNode, this);
    };
    NewClass.prototype.onTouchNode = function () {
        this.WillHideTartget.active = false;
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "WillHideTartget", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();