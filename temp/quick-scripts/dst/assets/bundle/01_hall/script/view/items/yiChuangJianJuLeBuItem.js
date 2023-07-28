
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/01_hall/script/view/items/yiChuangJianJuLeBuItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXHZpZXdcXGl0ZW1zXFx5aUNodWFuZ0ppYW5KdUxlQnVJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvRCwwQ0FBWTtJQUFoRTtRQUFBLHFFQVlDO1FBVlcsZUFBUyxHQUFhLElBQUksQ0FBQztRQUczQixhQUFPLEdBQWEsSUFBSSxDQUFDOztJQU9yQyxDQUFDO0lBTEcsb0NBQUcsR0FBSCxVQUFJLElBQVM7UUFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDM0MsQ0FBQztJQVJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkRBQ2dCO0lBR25DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkRBQ2M7SUFMaEIsc0JBQXNCO1FBRDFDLE9BQU87T0FDYSxzQkFBc0IsQ0FZMUM7SUFBRCw2QkFBQztDQVpELEFBWUMsQ0FabUQsRUFBRSxDQUFDLFNBQVMsR0FZL0Q7a0JBWm9CLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHlpQ2h1YW5nSmlhbkp1TGVCdUl0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml2YXRlIG1pbmdDaGVuZzogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHByaXZhdGUgbWlhb1NodTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcnVuKGluZm86IGFueSkge1xuICAgICAgICB0aGlzLm1pbmdDaGVuZy5zdHJpbmcgPSBpbmZvLm5hbWU7XG4gICAgICAgIHRoaXMubWlhb1NodS5zdHJpbmcgPSBpbmZvLmRlc2NyaXB0aW9uO1xuICAgIH1cblxufVxuIl19