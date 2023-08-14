"use strict";
cc._RF.push(module, 'a7271HlvnJMKa3fuDlcePsU', 'i18n');
// bundle/01_hall/script/config/i18n.ts

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
var Languages_1 = require("../../../../res/i18n/Languages");
var C_User_1 = require("../user/C_User");
var Utils_1 = require("./Utils");
var EventManger_1 = require("../../../00_base/script/common/EventManger");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var i18n = /** @class */ (function (_super) {
    __extends(i18n, _super);
    function i18n() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lanStr = "";
        _this.lanKey = "";
        return _this;
    }
    i18n_1 = i18n;
    i18n.prototype.start = function () {
        if (this.lanStr == "") {
            cc.error("\u8282\u70B9 " + Utils_1.Utils.FindPath(this.node) + " \u7684\u591A\u8BED\u8A00key\u4E3A\u7A7A");
            return;
        }
        EventManger_1.EventManger.on(i18n_1.LanguageChange, this.onChangeLanguage, this);
        var cfg = Languages_1.LanguagesCfg[0]; //解析中文,找key
        for (var key in cfg) {
            var element = cfg[key];
            if (element == this.lanStr) {
                this.lanKey = key;
            }
        }
        this.onChangeLanguage();
    };
    i18n.prototype.onChangeLanguage = function () {
        var cfg = Languages_1.LanguagesCfg[C_User_1.C_User.ins.language];
        if (this.node && this.node.getComponent(cc.Label)) {
            this.node.getComponent(cc.Label).string = cfg[this.lanKey];
        }
    };
    var i18n_1;
    i18n.LanguageChange = "LanguageChange";
    __decorate([
        property
    ], i18n.prototype, "lanStr", void 0);
    i18n = i18n_1 = __decorate([
        ccclass
    ], i18n);
    return i18n;
}(cc.Component));
exports.default = i18n;

cc._RF.pop();