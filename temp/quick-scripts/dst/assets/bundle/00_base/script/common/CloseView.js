
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/00_base/script/common/CloseView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMF9iYXNlXFxzY3JpcHRcXGNvbW1vblxcQ2xvc2VWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQVlDO1FBVFcsc0JBQWdCLEdBQVksSUFBSSxDQUFDOztJQVM3QyxDQUFDO0lBUEcseUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFTywrQkFBVyxHQUFuQjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBUkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDdUI7SUFIeEIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQVk3QjtJQUFELGdCQUFDO0NBWkQsQUFZQyxDQVpzQyxFQUFFLENBQUMsU0FBUyxHQVlsRDtrQkFab0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG9zZVZpZXcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBXaWxsQ2xvc2VUYXJ0Z2V0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hOb2RlLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uVG91Y2hOb2RlKCkge1xyXG4gICAgICAgIHRoaXMuV2lsbENsb3NlVGFydGdldC5kZXN0cm95KCk7XHJcbiAgICB9XHJcbn1cclxuIl19