"use strict";
cc._RF.push(module, 'f82feBBIGFMt7WINpHI03XK', 'tip');
// bundle/01_hall/script/widget/tip.ts

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
var ComponentBase_1 = require("../../../00_base/script/common/ComponentBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var tip = /** @class */ (function (_super) {
    __extends(tip, _super);
    function tip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        _this.txt = null;
        return _this;
    }
    tip.prototype.start = function () {
        this.TouchOn(this.closeBtn, this.alertDestory);
        this._yesCb && this._yesCb();
    };
    tip.prototype.init = function (str, yesCb) {
        this.txt.string = str;
        this._yesCb = yesCb;
    };
    __decorate([
        property(cc.Node)
    ], tip.prototype, "closeBtn", void 0);
    __decorate([
        property(cc.Label)
    ], tip.prototype, "txt", void 0);
    tip = __decorate([
        ccclass
    ], tip);
    return tip;
}(ComponentBase_1.default));
exports.default = tip;

cc._RF.pop();