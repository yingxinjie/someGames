"use strict";
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