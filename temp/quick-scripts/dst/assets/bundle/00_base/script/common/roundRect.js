
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/00_base/script/common/roundRect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMF9iYXNlXFxzY3JpcHRcXGNvbW1vblxccm91bmRSZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNHLElBQUEsS0FBMkMsRUFBRSxDQUFDLFVBQVUsRUFBdEQsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsaUJBQWlCLHVCQUFrQixDQUFDO0FBSS9EO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBY0M7UUFYRyxZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBRW5CLFVBQUksR0FBZ0IsSUFBSSxDQUFDOztJQVM3QixDQUFDO0lBUEcseUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pILElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQVREO1FBREMsUUFBUSxFQUFFOzZDQUNRO0lBSEYsU0FBUztRQUY3QixPQUFPO1FBQ1AsaUJBQWlCO09BQ0csU0FBUyxDQWM3QjtJQUFELGdCQUFDO0NBZEQsQUFjQyxDQWRzQyxFQUFFLENBQUMsU0FBUyxHQWNsRDtrQkFkb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDpnIDopoHlnKhub2Rl6IqC54K55LiK5re75YqgZ3JhcGhpY3PoioLngrlcclxuICovXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIGV4ZWN1dGVJbkVkaXRNb2RlIH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuQGV4ZWN1dGVJbkVkaXRNb2RlXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHJvdW5kUmVjdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KClcclxuICAgIHJhZGl1czogbnVtYmVyID0gMDtcclxuXHJcbiAgICBncmFwOiBjYy5HcmFwaGljcyA9IG51bGw7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5ncmFwID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuZ3JhcCA9PSBudWxsKSB0aGlzLmdyYXAgPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICB0aGlzLmdyYXAucm91bmRSZWN0KC10aGlzLm5vZGUud2lkdGggLyAyLCAtdGhpcy5ub2RlLmhlaWdodCAvIDIsIHRoaXMubm9kZS53aWR0aCwgdGhpcy5ub2RlLmhlaWdodCwgdGhpcy5yYWRpdXMpO1xyXG4gICAgICAgIHRoaXMuZ3JhcC5maWxsKCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==