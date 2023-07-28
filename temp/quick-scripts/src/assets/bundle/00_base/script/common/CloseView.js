"use strict";
cc._RF.push(module, '675d3rrX8FLI6wnz4ghIyiS', 'CloseView');
// bundle/00_base/script/common/CloseView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CloseView = /** @class */ (function (_super) {
    __extends(CloseView, _super);
    function CloseView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.WillCloseTartget = null;
        return _this;
    }
    CloseView.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchNode, this);
    };
    CloseView.prototype.onTouchNode = function () {
        this.WillCloseTartget.destroy();
    };
    __decorate([
        property(cc.Node)
    ], CloseView.prototype, "WillCloseTartget", void 0);
    CloseView = __decorate([
        ccclass
    ], CloseView);
    return CloseView;
}(cc.Component));
exports.default = CloseView;

cc._RF.pop();