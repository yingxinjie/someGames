
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMF9iYXNlXFxzY3JpcHRcXGNvbW1vblxcQ29tcG9uZW50QmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTRDO0FBUXBDLElBQUEsUUFBUSxHQUFLLEVBQUUsQ0FBQyxVQUFVLFNBQWxCLENBQW1CO0FBRW5DO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBaUNDO1FBaENXLFlBQU0sR0FBa0IsRUFBRSxDQUFDOztJQWdDdkMsQ0FBQztJQTdCYSwrQkFBTyxHQUFqQixVQUFrQixNQUFlLEVBQUUsRUFBWSxFQUFFLEdBQXdCO1FBQXhCLG9CQUFBLEVBQUEsVUFBd0I7UUFDckUsSUFBSSxNQUFNLElBQUksRUFBRSxFQUFFO1lBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUM1RixNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDbkQ7SUFDTCxDQUFDO0lBRVMsK0JBQU8sR0FBakIsVUFBa0IsSUFBWSxFQUFFLEVBQVksRUFBRSxHQUF3QjtRQUF4QixvQkFBQSxFQUFBLFVBQXdCO1FBQ2xFLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ2pFLHlCQUFXLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBRVMsaUNBQVMsR0FBbkI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQWdCO1lBQ2pDLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtnQkFDWixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzdDO2lCQUFNO2dCQUNILHlCQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDOUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFHUyxvQ0FBWSxHQUF0QjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVMLG9CQUFDO0FBQUQsQ0FqQ0EsQUFpQ0MsQ0FqQzBDLEVBQUUsQ0FBQyxTQUFTLEdBaUN0RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50TWFuZ2VyIH0gZnJvbSBcIi4vRXZlbnRNYW5nZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRTdHJ1Y3Qge1xyXG4gICAgdGFyZ2V0OiBjYy5Ob2RlO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgY2I6IEZ1bmN0aW9uO1xyXG4gICAgY2JvOiBjYy5Db21wb25lbnQ7XHJcbn1cclxuY29uc3QgeyBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudEJhc2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBldmVudHM6IEV2ZW50U3RydWN0W10gPSBbXTtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIFRvdWNoT24odGFyZ2V0OiBjYy5Ob2RlLCBjYjogRnVuY3Rpb24sIGNibzogY2MuQ29tcG9uZW50ID0gdGhpcykge1xyXG4gICAgICAgIGlmICh0YXJnZXQgJiYgY2IpIHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudHMucHVzaCh7IHRhcmdldDogdGFyZ2V0LCBuYW1lOiBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgY2I6IGNiLCBjYm86IGNibyB9KTtcclxuICAgICAgICAgICAgdGFyZ2V0Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgY2IsIGNibyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBFdmVudE9uKG5hbWU6IHN0cmluZywgY2I6IEZ1bmN0aW9uLCBjYm86IGNjLkNvbXBvbmVudCA9IHRoaXMpIHtcclxuICAgICAgICBpZiAobmFtZSAmJiBuYW1lLmxlbmd0aCA+IDAgJiYgY2IpIHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudHMucHVzaCh7IHRhcmdldDogbnVsbCwgbmFtZTogbmFtZSwgY2I6IGNiLCBjYm86IGNibyB9KTtcclxuICAgICAgICAgICAgRXZlbnRNYW5nZXIub24obmFtZSwgY2IsIGNibyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaCgoZWxlOiBFdmVudFN0cnVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWxlLnRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgZWxlLnRhcmdldC5vZmYoZWxlLm5hbWUsIGVsZS5jYiwgZWxlLmNibyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBFdmVudE1hbmdlci5vZmYoZWxlLm5hbWUsIGVsZS5jYiwgZWxlLmNibyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIGFsZXJ0RGVzdG9yeSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIl19