"use strict";
cc._RF.push(module, '820fen5tiRLeZXkrn1UdFkD', 'toggle');
// bundle/00_base/script/uiutils/toggle.ts

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