"use strict";
cc._RF.push(module, 'eb0509zNZNGk4/2tizeheU/', 'setting');
// bundle/01_hall/script/widget/setting.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentBase_1 = require("../../../00_base/script/common/ComponentBase");
var ViewManager_1 = require("../config/ViewManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.backBtn = null;
        _this.changeAccount = null;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.TouchOn(this.backBtn, this.alertDestory);
        this.TouchOn(this.changeAccount, this.onChangeAccount);
    };
    NewClass.prototype.onChangeAccount = function () {
        ViewManager_1.ViewManager.Alert("exitAccount");
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "backBtn", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "changeAccount", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(ComponentBase_1.default));
exports.default = NewClass;

cc._RF.pop();