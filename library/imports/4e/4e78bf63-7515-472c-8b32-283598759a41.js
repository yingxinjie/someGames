"use strict";
cc._RF.push(module, '4e78b9jdRVHLIsyKDWYdZpB', 'reset');
// bundle/01_hall/script/view/reset.ts

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