
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

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var ComponentBase_1 = require("../../../00_base/script/common/ComponentBase");
var C_User_1 = require("../user/C_User");
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
        C_User_1.UserInfo.clearLogin();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXHdpZGdldFxcZXhpdEFjY291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsOEVBQXlFO0FBRXpFLHlDQUEwQztBQUMxQyxxREFBb0Q7QUFFOUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQWE7SUFBbkQ7UUFBQSxxRUErQkM7UUE3QlcsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBR3JCLFlBQU0sR0FBWSxJQUFJLENBQUM7O0lBdUJuQyxDQUFDO0lBckJhLHdCQUFLLEdBQWY7UUFBQSxpQkFRQztRQVBHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNmLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7YUFDbkIsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNwQyxLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzVDLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFHTyx5QkFBTSxHQUFkO1FBQ0ksaUJBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0Qix5QkFBVyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzVCLHlCQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzdCLENBQUM7SUFHTywyQkFBUSxHQUFoQjtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBNUJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ1k7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDVztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNhO0lBUmQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQStCNUI7SUFBRCxlQUFDO0NBL0JELEFBK0JDLENBL0JxQyx1QkFBYSxHQStCbEQ7a0JBL0JvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IENvbXBvbmVudEJhc2UgZnJvbSBcIi4uLy4uLy4uLzAwX2Jhc2Uvc2NyaXB0L2NvbW1vbi9Db21wb25lbnRCYXNlXCI7XHJcbmltcG9ydCB7IEV2ZW50TWFuZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLzAwX2Jhc2Uvc2NyaXB0L2NvbW1vbi9FdmVudE1hbmdlclwiO1xyXG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gXCIuLi91c2VyL0NfVXNlclwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCIuLi9jb25maWcvVmlld01hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIENvbXBvbmVudEJhc2Uge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIHBhbmVsOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgZXhpdDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGNhbmNlbDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMucGFuZWwpXHJcbiAgICAgICAgICAgIC50bygwLjMsIHsgeTogMjYwIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuVG91Y2hPbih0aGlzLmV4aXQsIHRoaXMub25FeGl0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5Ub3VjaE9uKHRoaXMuY2FuY2VsLCB0aGlzLm9uQ2FuY2VsKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBvbkV4aXQoKSB7XHJcbiAgICAgICAgVXNlckluZm8uY2xlYXJMb2dpbigpO1xyXG4gICAgICAgIFZpZXdNYW5hZ2VyLlJlbW92ZUFsbFZpZXcoKTtcclxuICAgICAgICBWaWV3TWFuYWdlci5PcGVuKFwibG9naW5cIilcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBvbkNhbmNlbCgpIHtcclxuICAgICAgICB0aGlzLmFsZXJ0RGVzdG9yeSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==