
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/00_base/script/common/ComponentBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0f083/vumVP77OTLWsYwiZO', 'ComponentBase');
// bundle/00_base/script/common/ComponentBase.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var EventManger_1 = require("./EventManger");
var property = cc._decorator.property;
var ComponentBase = /** @class */ (function (_super) {
    __extends(ComponentBase, _super);
    function ComponentBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.events = [];
        return _this;
    }
    ComponentBase.prototype.TouchOn = function (target, cb, cbo) {
        if (cbo === void 0) { cbo = this; }
        if (target && cb) {
            this.events.push({ target: target, name: cc.Node.EventType.TOUCH_START, cb: cb, cbo: cbo });
            target.on(cc.Node.EventType.TOUCH_END, cb, cbo);
        }
    };
    ComponentBase.prototype.EventOn = function (name, cb, cbo) {
        if (cbo === void 0) { cbo = this; }
        if (name && name.length > 0 && cb) {
            this.events.push({ target: null, name: name, cb: cb, cbo: cbo });
            EventManger_1.EventManger.on(name, cb, cbo);
        }
    };
    ComponentBase.prototype.onDestroy = function () {
        this.events.forEach(function (ele) {
            if (ele.target) {
                ele.target.off(ele.name, ele.cb, ele.cbo);
            }
            else {
                EventManger_1.EventManger.off(ele.name, ele.cb, ele.cbo);
            }
        });
    };
    ComponentBase.prototype.alertDestory = function () {
        this.node.destroy();
    };
    return ComponentBase;
}(cc.Component));
exports.default = ComponentBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMF9iYXNlXFxzY3JpcHRcXGNvbW1vblxcQ29tcG9uZW50QmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBNEM7QUFRcEMsSUFBQSxRQUFRLEdBQUssRUFBRSxDQUFDLFVBQVUsU0FBbEIsQ0FBbUI7QUFFbkM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUFpQ0M7UUFoQ1csWUFBTSxHQUFrQixFQUFFLENBQUM7O0lBZ0N2QyxDQUFDO0lBN0JhLCtCQUFPLEdBQWpCLFVBQWtCLE1BQWUsRUFBRSxFQUFZLEVBQUUsR0FBd0I7UUFBeEIsb0JBQUEsRUFBQSxVQUF3QjtRQUNyRSxJQUFJLE1BQU0sSUFBSSxFQUFFLEVBQUU7WUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQzVGLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNuRDtJQUNMLENBQUM7SUFFUywrQkFBTyxHQUFqQixVQUFrQixJQUFZLEVBQUUsRUFBWSxFQUFFLEdBQXdCO1FBQXhCLG9CQUFBLEVBQUEsVUFBd0I7UUFDbEUsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDakUseUJBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNqQztJQUNMLENBQUM7SUFFUyxpQ0FBUyxHQUFuQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBZ0I7WUFDakMsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO2dCQUNaLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDN0M7aUJBQU07Z0JBQ0gseUJBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM5QztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUdTLG9DQUFZLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUwsb0JBQUM7QUFBRCxDQWpDQSxBQWlDQyxDQWpDMEMsRUFBRSxDQUFDLFNBQVMsR0FpQ3REIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRNYW5nZXIgfSBmcm9tIFwiLi9FdmVudE1hbmdlclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudFN0cnVjdCB7XHJcbiAgICB0YXJnZXQ6IGNjLk5vZGU7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBjYjogRnVuY3Rpb247XHJcbiAgICBjYm86IGNjLkNvbXBvbmVudDtcclxufVxyXG5jb25zdCB7IHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50QmFzZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIGV2ZW50czogRXZlbnRTdHJ1Y3RbXSA9IFtdO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgVG91Y2hPbih0YXJnZXQ6IGNjLk5vZGUsIGNiOiBGdW5jdGlvbiwgY2JvOiBjYy5Db21wb25lbnQgPSB0aGlzKSB7XHJcbiAgICAgICAgaWYgKHRhcmdldCAmJiBjYikge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5wdXNoKHsgdGFyZ2V0OiB0YXJnZXQsIG5hbWU6IGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBjYjogY2IsIGNibzogY2JvIH0pO1xyXG4gICAgICAgICAgICB0YXJnZXQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBjYiwgY2JvKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIEV2ZW50T24obmFtZTogc3RyaW5nLCBjYjogRnVuY3Rpb24sIGNibzogY2MuQ29tcG9uZW50ID0gdGhpcykge1xyXG4gICAgICAgIGlmIChuYW1lICYmIG5hbWUubGVuZ3RoID4gMCAmJiBjYikge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5wdXNoKHsgdGFyZ2V0OiBudWxsLCBuYW1lOiBuYW1lLCBjYjogY2IsIGNibzogY2JvIH0pO1xyXG4gICAgICAgICAgICBFdmVudE1hbmdlci5vbihuYW1lLCBjYiwgY2JvKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKChlbGU6IEV2ZW50U3RydWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGUudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICBlbGUudGFyZ2V0Lm9mZihlbGUubmFtZSwgZWxlLmNiLCBlbGUuY2JvKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIEV2ZW50TWFuZ2VyLm9mZihlbGUubmFtZSwgZWxlLmNiLCBlbGUuY2JvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgYWxlcnREZXN0b3J5KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iXX0=