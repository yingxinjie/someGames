"use strict";
cc._RF.push(module, '820fen5tiRLeZXkrn1UdFkD', 'toggle');
// bundle/00_base/script/uiutils/toggle.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var toggle = /** @class */ (function (_super) {
    __extends(toggle, _super);
    function toggle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewLeft = null;
        _this.viewRight = null;
        _this.leftToggle = null;
        _this.rightToggle = null;
        return _this;
    }
    toggle.prototype.start = function () {
        this.viewRight.active = false;
    };
    toggle.prototype.toggleContainerCall = function () {
        // console.log(this.leftToggle.isChecked, this.rightToggle.isChecked);
        this.viewLeft.active = this.leftToggle.isChecked;
        this.viewRight.active = this.rightToggle.isChecked;
    };
    __decorate([
        property(cc.Node)
    ], toggle.prototype, "viewLeft", void 0);
    __decorate([
        property(cc.Node)
    ], toggle.prototype, "viewRight", void 0);
    __decorate([
        property(cc.Toggle)
    ], toggle.prototype, "leftToggle", void 0);
    __decorate([
        property(cc.Toggle)
    ], toggle.prototype, "rightToggle", void 0);
    toggle = __decorate([
        ccclass
    ], toggle);
    return toggle;
}(cc.Component));
exports.default = toggle;

cc._RF.pop();