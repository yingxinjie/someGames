"use strict";
cc._RF.push(module, 'd32dcf5FzVISrrCNyKrVe6Z', 'login');
// bundle/01_hall/script/view/login.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewManager_1 = require("../config/ViewManager");
var Utils_1 = require("../config/Utils");
var ComponentBase_1 = require("../../../00_base/script/common/ComponentBase");
var config_1 = require("../config/config");
var CountryCode_1 = require("../../../00_base/script/common/CountryCode");
var UserInfo_1 = require("../config/UserInfo");
var tips_1 = require("../../../00_base/script/uiutils/tips");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var login = /** @class */ (function (_super) {
    __extends(login, _super);
    function login() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selectBtn = null;
        _this.countryCode = null;
        _this.resetBtn = null;
        _this.regBtn = null;
        _this.phoneLoginBtn = null;
        _this.mailLoginBtn = null;
        _this.phoneAreaCode = null;
        _this.phoneEdit = null;
        _this.phonePwd = null;
        _this.mailEdit = null;
        _this.mailPwd = null;
        return _this;
    }
    login.prototype.start = function () {
        this.TouchOn(this.selectBtn, this.openCountryCode);
        this.TouchOn(this.resetBtn, this.openResetPanel);
        this.TouchOn(this.regBtn, this.openRegPanel);
        this.TouchOn(this.phoneLoginBtn, this.phoneLogin);
        this.TouchOn(this.mailLoginBtn, this.mailLogin);
        this.EventOn(config_1.EventName.SelectCountryCode, this.onSelectCountryCode);
    };
    login.prototype.openCountryCode = function () {
        ViewManager_1.ViewManager.Alert(config_1.WidgetEnum.CountryCode);
    };
    login.prototype.onSelectCountryCode = function (idx) {
        var codeObj = CountryCode_1.CountryCodeData[idx];
        this.countryCode.string = codeObj.code;
    };
    /** 重置密码 */
    login.prototype.openResetPanel = function () {
        ViewManager_1.ViewManager.Open(config_1.ViewEnum.Reset);
    };
    /** 注册新账号 */
    login.prototype.openRegPanel = function () {
        ViewManager_1.ViewManager.Open(config_1.ViewEnum.Reg);
    };
    /** 点击了手机登录的按钮 */
    login.prototype.phoneLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var phone, pwd, code, data, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        phone = this.phoneEdit.string;
                        pwd = this.phonePwd.string;
                        code = this.phoneAreaCode.string;
                        if (!Utils_1.Utils.IsPhone(phone)) {
                            tips_1.Tips.Show("请输入正确的手机号!");
                            return [2 /*return*/];
                        }
                        if (pwd.length < 6) {
                            tips_1.Tips.Show("密码长度不够,至少6位字符!");
                            return [2 /*return*/];
                        }
                        if (!this.phoneAreaCode || code == "") {
                            tips_1.Tips.Show("请选择区位码!");
                            return [2 /*return*/];
                        }
                        data = {
                            phoneAreaCode: this.phoneAreaCode.string,
                            phoneNumber: phone,
                            loginPwd: pwd,
                            device: Utils_1.Utils.CheckDeviceType(),
                            deviceInfo: "",
                            longitude: "",
                            latitude: "",
                            ip: "",
                        };
                        console.log("请求数据", JSON.stringify(data));
                        return [4 /*yield*/, Utils_1.Utils.Post(config_1.HttpPath.phoneLogin, data)];
                    case 1:
                        res = _a.sent();
                        console.log("登录数据返回", JSON.stringify(res));
                        if (res.code != 200) {
                            cc.error("手机登陆请求错误", config_1.HttpPath.phoneLogin, JSON.stringify(res));
                            return [2 /*return*/];
                        }
                        UserInfo_1.UserInfo.uuid = res.uuid;
                        UserInfo_1.UserInfo.nick = res.data.name;
                        UserInfo_1.UserInfo.headPic = res.data.headPic;
                        UserInfo_1.UserInfo.gender = res.data.sex;
                        UserInfo_1.UserInfo.vipValidityPeriod = res.data.vipValidityPeriod;
                        UserInfo_1.UserInfo.vipType = res.data.vipType;
                        UserInfo_1.UserInfo.uuid = res.uuid;
                        UserInfo_1.UserInfo.token = res.data.token;
                        return [4 /*yield*/, ViewManager_1.ViewManager.Alert(config_1.WidgetEnum.BottomToggle)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, ViewManager_1.ViewManager.Open(config_1.ViewEnum.FaXian)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    login.prototype.mailLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var mail, pwd, data, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mail = this.mailEdit.string;
                        pwd = this.mailPwd.string;
                        if (!Utils_1.Utils.IsMail(mail)) {
                            tips_1.Tips.Show("请输入正确的邮箱!");
                            return [2 /*return*/];
                        }
                        if (pwd.length < 6) {
                            tips_1.Tips.Show("密码长度不够,至少6位字符!");
                            return [2 /*return*/];
                        }
                        data = {
                            email: mail,
                            loginPwd: pwd,
                            ip: "",
                            longitude: "",
                            latitude: "",
                            device: Utils_1.Utils.CheckDeviceType(),
                            deviceInfo: "",
                            userAgent: navigator.userAgent.toLowerCase(),
                        };
                        console.log("请求数据", JSON.stringify(data));
                        return [4 /*yield*/, Utils_1.Utils.Post(config_1.HttpPath.emailLogin, data)];
                    case 1:
                        res = _a.sent();
                        console.log("登录数据返回", JSON.stringify(res));
                        if (res.code != 200) {
                            cc.error("手机登陆请求错误", config_1.HttpPath.emailLogin, JSON.stringify(res));
                            return [2 /*return*/];
                        }
                        UserInfo_1.UserInfo.uuid = res.uuid;
                        UserInfo_1.UserInfo.nick = res.data.name;
                        UserInfo_1.UserInfo.headPic = res.data.headPic;
                        UserInfo_1.UserInfo.gender = res.data.sex;
                        UserInfo_1.UserInfo.vipValidityPeriod = res.data.vipValidityPeriod;
                        UserInfo_1.UserInfo.vipType = res.data.vipType;
                        UserInfo_1.UserInfo.uuid = res.uuid;
                        UserInfo_1.UserInfo.token = res.data.token;
                        return [4 /*yield*/, ViewManager_1.ViewManager.Alert(config_1.WidgetEnum.BottomToggle)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, ViewManager_1.ViewManager.Open(config_1.ViewEnum.FaXian)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        property(cc.Node)
    ], login.prototype, "selectBtn", void 0);
    __decorate([
        property(cc.Label)
    ], login.prototype, "countryCode", void 0);
    __decorate([
        property(cc.Node)
    ], login.prototype, "resetBtn", void 0);
    __decorate([
        property(cc.Node)
    ], login.prototype, "regBtn", void 0);
    __decorate([
        property(cc.Node)
    ], login.prototype, "phoneLoginBtn", void 0);
    __decorate([
        property(cc.Node)
    ], login.prototype, "mailLoginBtn", void 0);
    __decorate([
        property(cc.Label)
    ], login.prototype, "phoneAreaCode", void 0);
    __decorate([
        property(cc.EditBox)
    ], login.prototype, "phoneEdit", void 0);
    __decorate([
        property(cc.EditBox)
    ], login.prototype, "phonePwd", void 0);
    __decorate([
        property(cc.EditBox)
    ], login.prototype, "mailEdit", void 0);
    __decorate([
        property(cc.EditBox)
    ], login.prototype, "mailPwd", void 0);
    login = __decorate([
        ccclass
    ], login);
    return login;
}(ComponentBase_1.default));
exports.default = login;

cc._RF.pop();