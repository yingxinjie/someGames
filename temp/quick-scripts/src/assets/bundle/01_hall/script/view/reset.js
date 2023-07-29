"use strict";
cc._RF.push(module, '4e78b9jdRVHLIsyKDWYdZpB', 'reset');
// bundle/01_hall/script/view/reset.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ViewManager_1 = require("../config/ViewManager");
var CountryCode_1 = require("../../../00_base/script/common/CountryCode");
var config_1 = require("../config/config");
var ComponentBase_1 = require("../../../00_base/script/common/ComponentBase");
var Utils_1 = require("../config/Utils");
var TimeTickerDown_1 = require("../../../00_base/script/common/TimeTickerDown");
var tips_1 = require("../../../00_base/script/uiutils/tips");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var reset = /** @class */ (function (_super) {
    __extends(reset, _super);
    function reset() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.backBtn = null;
        _this.selectCountryCodeBtn = null;
        _this.countryCode = null;
        _this.sendPhoneCodeBtn = null;
        _this.phoneEdit = null;
        _this.phoneCodeEdit = null;
        _this.phonePwdEdit = null;
        _this.phoneNextBtn = null;
        //============================
        _this.sendMailCodeBtn = null;
        _this.mailEdit = null;
        _this.mailCodeEdit = null;
        _this.mailPwdEdit = null;
        _this.mailNextBtn = null;
        return _this;
    }
    reset.prototype.start = function () {
        this.TouchOn(this.backBtn, this.backLogin);
        this.TouchOn(this.selectCountryCodeBtn, this.openCountryCode);
        this.TouchOn(this.sendPhoneCodeBtn, this.onSendPhoneCode);
        this.TouchOn(this.phoneNextBtn, this.nextPhoneAccount);
        this.TouchOn(this.sendMailCodeBtn, this.onSendMailCode);
        this.TouchOn(this.mailNextBtn, this.nextMailAccount);
        this.EventOn(config_1.EventName.SelectCountryCode, this.onSelectCountryCode);
    };
    reset.prototype.backLogin = function () {
        ViewManager_1.ViewManager.Open(config_1.ViewEnum.Login);
    };
    reset.prototype.openCountryCode = function () {
        ViewManager_1.ViewManager.Alert(config_1.WidgetEnum.CountryCode);
    };
    reset.prototype.onSelectCountryCode = function (idx) {
        var codeObj = CountryCode_1.CountryCodeData[idx];
        this.countryCode.string = codeObj.code;
    };
    /** 手机验证码 */
    reset.prototype.onSendPhoneCode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ttd, phone, areaCode, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ttd = this.sendPhoneCodeBtn.getComponent(TimeTickerDown_1.default);
                        if (ttd.down) {
                            return [2 /*return*/];
                        }
                        phone = this.phoneEdit.string;
                        areaCode = this.countryCode.string;
                        if (!Utils_1.Utils.IsPhone(phone)) {
                            tips_1.Tips.Show("手机号错误!");
                            return [2 /*return*/];
                        }
                        if (areaCode == "") {
                            tips_1.Tips.Show("国际码不能为空!");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, Utils_1.Utils.Post(config_1.HttpPath.phoneCaptcha, { phoneAreaCode: areaCode, phoneNumber: phone })];
                    case 1:
                        res = _a.sent();
                        console.log("请求手机验证码", JSON.stringify(res));
                        if (res.code != 200) {
                            cc.error("\u8BF7\u6C42\u9A8C\u8BC1\u7801\u5931\u8D25,\u7A0D\u540E\u518D\u8BD5!");
                            return [2 /*return*/];
                        }
                        tips_1.Tips.Show("验证码已发送!");
                        ttd.run();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    /** 手机注册 */
    reset.prototype.nextPhoneAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var phone, pwd, yzm, areaCode, info, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        phone = this.phoneEdit.string;
                        pwd = this.phonePwdEdit.string;
                        yzm = this.phoneCodeEdit.string;
                        areaCode = this.countryCode.string;
                        if (!Utils_1.Utils.IsPhone(phone)) {
                            tips_1.Tips.Show("手机号不对!");
                            return [2 /*return*/];
                        }
                        if (yzm.length < 6) {
                            tips_1.Tips.Show("验证码填写错误");
                            return [2 /*return*/];
                        }
                        if (pwd.length < 6) {
                            tips_1.Tips.Show("密码不能小于6位!");
                            return [2 /*return*/];
                        }
                        if (areaCode == "") {
                            tips_1.Tips.Show("国际码不能为空!");
                            return [2 /*return*/];
                        }
                        info = {
                            "phoneAreaCode": areaCode,
                            "phoneNumber": phone,
                            "loginPwd": pwd,
                            "captcha": yzm,
                            "sex": config_1.UserSex.BOY,
                            "longitude": "",
                            "latitude": "",
                            "ip": "",
                            "device": Utils_1.Utils.CheckDeviceType(),
                            "deviceInfo": "",
                            "userAgent": navigator.userAgent.toLowerCase(),
                        };
                        console.log("手机注册信息", JSON.stringify(info));
                        return [4 /*yield*/, Utils_1.Utils.Post(config_1.HttpPath.phoneReg, info)];
                    case 1:
                        res = _a.sent();
                        console.log("手机注册返回信息", JSON.stringify(res));
                        if (res.code != 200) {
                            cc.error("\u6CE8\u518C\u5931\u8D25,code:" + res.code);
                            tips_1.Tips.Show("注册失败,稍后再试!");
                            return [2 /*return*/];
                        }
                        tips_1.Tips.Show("注册成功!");
                        ViewManager_1.ViewManager.Open(config_1.ViewEnum.Login);
                        return [2 /*return*/];
                }
            });
        });
    };
    /** 邮箱验证码 */
    reset.prototype.onSendMailCode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ttd, mail, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ttd = this.sendMailCodeBtn.getComponent(TimeTickerDown_1.default);
                        if (ttd.down) {
                            return [2 /*return*/];
                        }
                        mail = this.mailEdit.string;
                        if (!Utils_1.Utils.IsMail(mail)) {
                            tips_1.Tips.Show("邮箱格式错误!");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, Utils_1.Utils.Post(config_1.HttpPath.emailCaptcha, { email: mail })];
                    case 1:
                        res = _a.sent();
                        console.log("请求邮箱验证码", JSON.stringify(res));
                        if (res.code != 200) {
                            cc.error("\u8BF7\u6C42\u9A8C\u8BC1\u7801\u5931\u8D25,\u7A0D\u540E\u518D\u8BD5!");
                            tips_1.Tips.Show("验证码获取失败,稍后再试!");
                            return [2 /*return*/];
                        }
                        tips_1.Tips.Show("验证码已发送,请到邮箱查收!");
                        ttd.run();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** 邮箱注册 */
    reset.prototype.nextMailAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var mail, pwd, yzm, info, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mail = this.mailEdit.string;
                        pwd = this.mailPwdEdit.string;
                        yzm = this.mailCodeEdit.string;
                        if (!Utils_1.Utils.IsMail(mail)) {
                            tips_1.Tips.Show("邮箱格式不对!");
                            return [2 /*return*/];
                        }
                        if (yzm.length < 6) {
                            tips_1.Tips.Show("验证码长度错误");
                            return [2 /*return*/];
                        }
                        if (pwd.length < 6) {
                            tips_1.Tips.Show("密码不能小于6位!");
                            return [2 /*return*/];
                        }
                        info = {
                            "email": mail,
                            "loginPwd": pwd,
                            "captcha": yzm,
                            "sex": config_1.UserSex.BOY,
                            "ip": "",
                            "longitude": "",
                            "latitude": "",
                            "device": Utils_1.Utils.CheckDeviceType(),
                            "deviceInfo": "",
                            "userAgent": navigator.userAgent.toLowerCase(),
                        };
                        console.log("邮箱注册信息", JSON.stringify(info));
                        return [4 /*yield*/, Utils_1.Utils.Post(config_1.HttpPath.emailReg, info)];
                    case 1:
                        res = _a.sent();
                        console.log("邮箱注册信息返回", JSON.stringify(res));
                        if (res.code != 200) {
                            cc.error("\u6CE8\u518C\u5931\u8D25,code:" + res.code);
                            return [2 /*return*/];
                        }
                        tips_1.Tips.Show("注册成功!");
                        ViewManager_1.ViewManager.Open(config_1.ViewEnum.Login);
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        property(cc.Node)
    ], reset.prototype, "backBtn", void 0);
    __decorate([
        property(cc.Node)
    ], reset.prototype, "selectCountryCodeBtn", void 0);
    __decorate([
        property(cc.Label)
    ], reset.prototype, "countryCode", void 0);
    __decorate([
        property(cc.Node)
    ], reset.prototype, "sendPhoneCodeBtn", void 0);
    __decorate([
        property(cc.EditBox)
    ], reset.prototype, "phoneEdit", void 0);
    __decorate([
        property(cc.EditBox)
    ], reset.prototype, "phoneCodeEdit", void 0);
    __decorate([
        property(cc.EditBox)
    ], reset.prototype, "phonePwdEdit", void 0);
    __decorate([
        property(cc.Node)
    ], reset.prototype, "phoneNextBtn", void 0);
    __decorate([
        property(cc.Node)
    ], reset.prototype, "sendMailCodeBtn", void 0);
    __decorate([
        property(cc.EditBox)
    ], reset.prototype, "mailEdit", void 0);
    __decorate([
        property(cc.EditBox)
    ], reset.prototype, "mailCodeEdit", void 0);
    __decorate([
        property(cc.EditBox)
    ], reset.prototype, "mailPwdEdit", void 0);
    __decorate([
        property(cc.Node)
    ], reset.prototype, "mailNextBtn", void 0);
    reset = __decorate([
        ccclass
    ], reset);
    return reset;
}(ComponentBase_1.default));
exports.default = reset;

cc._RF.pop();