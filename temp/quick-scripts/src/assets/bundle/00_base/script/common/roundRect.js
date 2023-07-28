"use strict";
cc._RF.push(module, 'a641fsX1MlHubm4STildnLZ', 'roundRect');
// bundle/00_base/script/common/roundRect.ts

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 需要在node节点上添加graphics节点
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var roundRect = /** @class */ (function (_super) {
    __extends(roundRect, _super);
    function roundRect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.radius = 0;
        _this.grap = null;
        return _this;
    }
    roundRect.prototype.start = function () {
        this.grap = this.node.getComponent(cc.Graphics);
        if (this.grap == null)
            this.grap = this.node.addComponent(cc.Graphics);
        this.grap.roundRect(-this.node.width / 2, -this.node.height / 2, this.node.width, this.node.height, this.radius);
        this.grap.fill();
    };
    __decorate([
        property()
    ], roundRect.prototype, "radius", void 0);
    roundRect = __decorate([
        ccclass,
        executeInEditMode
    ], roundRect);
    return roundRect;
}(cc.Component));
exports.default = roundRect;

cc._RF.pop();