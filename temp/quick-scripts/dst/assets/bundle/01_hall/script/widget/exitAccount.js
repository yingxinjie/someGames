
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/01_hall/script/widget/exitAccount.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2df76K0mVtGuKT8UR+8Ex4A', 'exitAccount');
// bundle/01_hall/script/widget/exitAccount.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentBase_1 = require("../../../00_base/script/common/ComponentBase");
var UserInfo_1 = require("../config/UserInfo");
var ViewManager_1 = require("../config/ViewManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.panel = null;
        _this.exit = null;
        _this.cancel = null;
        return _this;
    }
    NewClass.prototype.start = function () {
        var _this = this;
        cc.tween(this.panel)
            .to(0.3, { y: 260 })
            .call(function () {
            _this.TouchOn(_this.exit, _this.onExit);
            _this.TouchOn(_this.cancel, _this.onCancel);
        })
            .start();
    };
    NewClass.prototype.onExit = function () {
        UserInfo_1.UserInfo.clearLogin();
        ViewManager_1.ViewManager.RemoveAllView();
        ViewManager_1.ViewManager.Open("login");
    };
    NewClass.prototype.onCancel = function () {
        this.alertDestory();
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "panel", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "exit", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "cancel", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(ComponentBase_1.default));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXHdpZGdldFxcZXhpdEFjY291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7O0FBRXRGLDhFQUF5RTtBQUV6RSwrQ0FBOEM7QUFDOUMscURBQW9EO0FBRTlDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFhO0lBQW5EO1FBQUEscUVBK0JDO1FBN0JXLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUdyQixZQUFNLEdBQVksSUFBSSxDQUFDOztJQXVCbkMsQ0FBQztJQXJCYSx3QkFBSyxHQUFmO1FBQUEsaUJBUUM7UUFQRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDZixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO2FBQ25CLElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDcEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsTUFBTSxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUM1QyxDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBR08seUJBQU0sR0FBZDtRQUNJLG1CQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdEIseUJBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM1Qix5QkFBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBR08sMkJBQVEsR0FBaEI7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQTVCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNZO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ1c7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDYTtJQVJkLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0ErQjVCO0lBQUQsZUFBQztDQS9CRCxBQStCQyxDQS9CcUMsdUJBQWEsR0ErQmxEO2tCQS9Cb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tIFwiLi4vLi4vLi4vMDBfYmFzZS9zY3JpcHQvY29tbW9uL0NvbXBvbmVudEJhc2VcIjtcbmltcG9ydCB7IEV2ZW50TWFuZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLzAwX2Jhc2Uvc2NyaXB0L2NvbW1vbi9FdmVudE1hbmdlclwiO1xuaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tIFwiLi4vY29uZmlnL1VzZXJJbmZvXCI7XG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCIuLi9jb25maWcvVmlld01hbmFnZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBwYW5lbDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGV4aXQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBjYW5jZWw6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICBjYy50d2Vlbih0aGlzLnBhbmVsKVxuICAgICAgICAgICAgLnRvKDAuMywgeyB5OiAyNjAgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLlRvdWNoT24odGhpcy5leGl0LCB0aGlzLm9uRXhpdClcbiAgICAgICAgICAgICAgICB0aGlzLlRvdWNoT24odGhpcy5jYW5jZWwsIHRoaXMub25DYW5jZWwpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIG9uRXhpdCgpIHtcbiAgICAgICAgVXNlckluZm8uY2xlYXJMb2dpbigpO1xuICAgICAgICBWaWV3TWFuYWdlci5SZW1vdmVBbGxWaWV3KCk7XG4gICAgICAgIFZpZXdNYW5hZ2VyLk9wZW4oXCJsb2dpblwiKVxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBvbkNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5hbGVydERlc3RvcnkoKTtcbiAgICB9XG59XG4iXX0=