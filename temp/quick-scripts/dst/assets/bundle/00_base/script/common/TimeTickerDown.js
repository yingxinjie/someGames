
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/00_base/script/common/TimeTickerDown.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '938d9cocT1ARLr8IWyqhEtu', 'TimeTickerDown');
// bundle/00_base/script/common/TimeTickerDown.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ComponentBase_1 = require("./ComponentBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TimeTickerDown = /** @class */ (function (_super) {
    __extends(TimeTickerDown, _super);
    function TimeTickerDown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.total = 60;
        _this.down = false;
        _this.label = null;
        return _this;
    }
    TimeTickerDown.prototype.run = function () {
        this.down = true;
        this.label = this.node.getComponent(cc.Label) || this.node.getComponent(cc.RichText);
        this.label.string = String(this.total);
        this.node.children[0].active = false;
        this.down = true;
        this.schedule(this.timeDown, 1);
    };
    TimeTickerDown.prototype.timeDown = function () {
        this.total -= 1;
        this.label.string = String(this.total);
        //取消倒计时
        if (this.total <= 0) {
            this.unschedule(this.timeDown);
            this.label.string = "发送验证码";
            this.node.children[0].active = true;
            this.down = false;
            this.total = 60;
        }
    };
    TimeTickerDown = __decorate([
        ccclass
    ], TimeTickerDown);
    return TimeTickerDown;
}(ComponentBase_1.default));
exports.default = TimeTickerDown;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMF9iYXNlXFxzY3JpcHRcXGNvbW1vblxcVGltZVRpY2tlckRvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE0QztBQUN0QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBYTtJQUF6RDtRQUFBLHFFQWdDQztRQTlCVyxXQUFLLEdBQVcsRUFBRSxDQUFDO1FBRTNCLFVBQUksR0FBWSxLQUFLLENBQUM7UUFFZCxXQUFLLEdBQTJCLElBQUksQ0FBQzs7SUEwQmpELENBQUM7SUF4QkcsNEJBQUcsR0FBSDtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFFTyxpQ0FBUSxHQUFoQjtRQUNJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdkMsT0FBTztRQUNQLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDcEMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7WUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBN0JnQixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBZ0NsQztJQUFELHFCQUFDO0NBaENELEFBZ0NDLENBaEMyQyx1QkFBYSxHQWdDeEQ7a0JBaENvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudEJhc2UgZnJvbSBcIi4vQ29tcG9uZW50QmFzZVwiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVRpY2tlckRvd24gZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuXHJcbiAgICBwcml2YXRlIHRvdGFsOiBudW1iZXIgPSA2MDtcclxuXHJcbiAgICBkb3duOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBsYWJlbDogY2MuTGFiZWwgfCBjYy5SaWNoVGV4dCA9IG51bGw7XHJcblxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIHRoaXMuZG93biA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sYWJlbCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpIHx8IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpO1xyXG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gU3RyaW5nKHRoaXMudG90YWwpO1xyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRvd24gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy50aW1lRG93biwgMSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRpbWVEb3duKCkge1xyXG4gICAgICAgIHRoaXMudG90YWwgLT0gMTtcclxuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IFN0cmluZyh0aGlzLnRvdGFsKTtcclxuXHJcbiAgICAgICAgLy/lj5bmtojlgJLorqHml7ZcclxuICAgICAgICBpZiAodGhpcy50b3RhbCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRpbWVEb3duKTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIuWPkemAgemqjOivgeeggVwiO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5kb3duID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudG90YWwgPSA2MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==