
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

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMF9iYXNlXFxzY3JpcHRcXGNvbW1vblxccm91bmRSZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0csSUFBQSxLQUEyQyxFQUFFLENBQUMsVUFBVSxFQUF0RCxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxpQkFBaUIsdUJBQWtCLENBQUM7QUFJL0Q7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUFjQztRQVhHLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFFbkIsVUFBSSxHQUFnQixJQUFJLENBQUM7O0lBUzdCLENBQUM7SUFQRyx5QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUk7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakgsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBVEQ7UUFEQyxRQUFRLEVBQUU7NkNBQ1E7SUFIRixTQUFTO1FBRjdCLE9BQU87UUFDUCxpQkFBaUI7T0FDRyxTQUFTLENBYzdCO0lBQUQsZ0JBQUM7Q0FkRCxBQWNDLENBZHNDLEVBQUUsQ0FBQyxTQUFTLEdBY2xEO2tCQWRvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOmcgOimgeWcqG5vZGXoioLngrnkuIrmt7vliqBncmFwaGljc+iKgueCuVxyXG4gKi9cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZXhlY3V0ZUluRWRpdE1vZGUgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5AZXhlY3V0ZUluRWRpdE1vZGVcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgcm91bmRSZWN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgcmFkaXVzOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGdyYXA6IGNjLkdyYXBoaWNzID0gbnVsbDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmdyYXAgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICBpZiAodGhpcy5ncmFwID09IG51bGwpIHRoaXMuZ3JhcCA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgIHRoaXMuZ3JhcC5yb3VuZFJlY3QoLXRoaXMubm9kZS53aWR0aCAvIDIsIC10aGlzLm5vZGUuaGVpZ2h0IC8gMiwgdGhpcy5ub2RlLndpZHRoLCB0aGlzLm5vZGUuaGVpZ2h0LCB0aGlzLnJhZGl1cyk7XHJcbiAgICAgICAgdGhpcy5ncmFwLmZpbGwoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19