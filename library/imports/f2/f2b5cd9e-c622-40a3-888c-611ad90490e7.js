"use strict";
cc._RF.push(module, 'f2b5c2exiJAo4iMYRrZBJDn', 'wo');
// bundle/01_hall/script/view/wo.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ComponentBase_1 = require("../../../00_base/script/common/ComponentBase");
var ViewManager_1 = require("../config/ViewManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.setting = null;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.TouchOn(this.setting, this.openSetting);
    };
    NewClass.prototype.openSetting = function () {
        ViewManager_1.ViewManager.Alert("setting");
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "setting", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(ComponentBase_1.default));
exports.default = NewClass;

cc._RF.pop();