"use strict";
cc._RF.push(module, '4fe99Jy6KpIV6L0BeAKeemn', 'yiChuangJianJuLeBuItem');
// bundle/01_hall/script/view/items/yiChuangJianJuLeBuItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var yiChuangJianJuLeBuItem = /** @class */ (function (_super) {
    __extends(yiChuangJianJuLeBuItem, _super);
    function yiChuangJianJuLeBuItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mingCheng = null;
        _this.miaoShu = null;
        return _this;
    }
    yiChuangJianJuLeBuItem.prototype.run = function (info) {
        this.mingCheng.string = info.name;
        this.miaoShu.string = info.description;
    };
    __decorate([
        property(cc.Label)
    ], yiChuangJianJuLeBuItem.prototype, "mingCheng", void 0);
    __decorate([
        property(cc.Label)
    ], yiChuangJianJuLeBuItem.prototype, "miaoShu", void 0);
    yiChuangJianJuLeBuItem = __decorate([
        ccclass
    ], yiChuangJianJuLeBuItem);
    return yiChuangJianJuLeBuItem;
}(cc.Component));
exports.default = yiChuangJianJuLeBuItem;

cc._RF.pop();