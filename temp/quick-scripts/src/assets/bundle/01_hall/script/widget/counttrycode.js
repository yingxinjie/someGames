"use strict";
cc._RF.push(module, '2b272YxrLRLDLVlEu78E3TM', 'counttrycode');
// bundle/01_hall/script/widget/counttrycode.ts

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
var EventManger_1 = require("../../../00_base/script/common/EventManger");
var ComponentBase_1 = require("../../../00_base/script/common/ComponentBase");
var config_1 = require("../config/config");
var CountryCode_1 = require("../../../00_base/script/common/CountryCode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var countrycode = /** @class */ (function (_super) {
    __extends(countrycode, _super);
    function countrycode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maskNode = null;
        _this.itemNode = null;
        _this.itemContent = null;
        return _this;
    }
    countrycode.prototype.start = function () {
        var _this = this;
        this.TouchOn(this.maskNode, this.closeView);
        this.itemContent.removeAllChildren();
        var list = CountryCode_1.CountryCodeData;
        list.forEach(function (ele, idx) {
            var item = cc.instantiate(_this.itemNode);
            item.name = idx + "";
            item.active = true;
            item.x = 0;
            _this.itemContent.addChild(item);
            item.on(cc.Node.EventType.TOUCH_END, _this.selectCountry, _this);
            item.children[0].getComponent(cc.Label).string = "  " + ele.code + " - " + ele.zh;
        });
    };
    countrycode.prototype.closeView = function () {
        this.node.destroy();
        this.maskNode.off(cc.Node.EventType.TOUCH_START, this.closeView, this);
    };
    countrycode.prototype.selectCountry = function (evt) {
        if (!evt) {
            cc.error("事件不存在");
            return;
        }
        var node = evt.currentTarget;
        console.log(node.name);
        EventManger_1.EventManger.emit(config_1.EventName.SelectCountryCode, node.name);
        this.closeView();
    };
    __decorate([
        property(cc.Node)
    ], countrycode.prototype, "maskNode", void 0);
    __decorate([
        property(cc.Node)
    ], countrycode.prototype, "itemNode", void 0);
    __decorate([
        property(cc.Node)
    ], countrycode.prototype, "itemContent", void 0);
    countrycode = __decorate([
        ccclass
    ], countrycode);
    return countrycode;
}(ComponentBase_1.default));
exports.default = countrycode;

cc._RF.pop();