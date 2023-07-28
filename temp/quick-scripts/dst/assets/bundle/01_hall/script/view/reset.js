
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/01_hall/script/view/reset.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXHZpZXdcXHJlc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBb0Q7QUFDcEQsMEVBQXlGO0FBQ3pGLDJDQUFzRjtBQUN0Riw4RUFBeUU7QUFDekUseUNBQXdDO0FBQ3hDLGdGQUEyRTtBQUMzRSw2REFBNEQ7QUFFdEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUMseUJBQWE7SUFBaEQ7UUFBQSxxRUFtTkM7UUFqTkcsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QiwwQkFBb0IsR0FBWSxJQUFJLENBQUM7UUEwQjdCLGlCQUFXLEdBQWEsSUFBSSxDQUFBO1FBRTVCLHNCQUFnQixHQUFZLElBQUksQ0FBQztRQUVqQyxlQUFTLEdBQWUsSUFBSSxDQUFBO1FBRTVCLG1CQUFhLEdBQWUsSUFBSSxDQUFBO1FBRWhDLGtCQUFZLEdBQWUsSUFBSSxDQUFDO1FBRWhDLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBMEZyQyw4QkFBOEI7UUFFOUIscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFFeEIsY0FBUSxHQUFlLElBQUksQ0FBQTtRQUUzQixrQkFBWSxHQUFlLElBQUksQ0FBQTtRQUUvQixpQkFBVyxHQUFlLElBQUksQ0FBQztRQUUvQixpQkFBVyxHQUFZLElBQUksQ0FBQzs7SUF1RXhDLENBQUM7SUE1TUcscUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUks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QUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzsrQ0FDa0I7SUFFdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs4Q0FDa0I7SUFFdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDa0I7SUE1SW5CLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FtTnpCO0lBQUQsWUFBQztDQW5ORCxBQW1OQyxDQW5Oa0MsdUJBQWEsR0FtTi9DO2tCQW5Ob0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcIi4uL2NvbmZpZy9WaWV3TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBDb2RlU3RydWN0LCBDb3VudHJ5Q29kZURhdGEgfSBmcm9tIFwiLi4vLi4vLi4vMDBfYmFzZS9zY3JpcHQvY29tbW9uL0NvdW50cnlDb2RlXCI7XHJcbmltcG9ydCB7IEV2ZW50TmFtZSwgSHR0cFBhdGgsIFVzZXJTZXgsIFZpZXdFbnVtLCBXaWRnZXRFbnVtIH0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWdcIjtcclxuaW1wb3J0IENvbXBvbmVudEJhc2UgZnJvbSBcIi4uLy4uLy4uLzAwX2Jhc2Uvc2NyaXB0L2NvbW1vbi9Db21wb25lbnRCYXNlXCI7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4uL2NvbmZpZy9VdGlsc1wiO1xyXG5pbXBvcnQgVGltZVRpY2tlckRvd24gZnJvbSBcIi4uLy4uLy4uLzAwX2Jhc2Uvc2NyaXB0L2NvbW1vbi9UaW1lVGlja2VyRG93blwiO1xyXG5pbXBvcnQgeyBUaXBzIH0gZnJvbSBcIi4uLy4uLy4uLzAwX2Jhc2Uvc2NyaXB0L3VpdXRpbHMvdGlwc1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHJlc2V0IGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhY2tCdG46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzZWxlY3RDb3VudHJ5Q29kZUJ0bjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuVG91Y2hPbih0aGlzLmJhY2tCdG4sIHRoaXMuYmFja0xvZ2luKTtcclxuXHJcbiAgICAgICAgdGhpcy5Ub3VjaE9uKHRoaXMuc2VsZWN0Q291bnRyeUNvZGVCdG4sIHRoaXMub3BlbkNvdW50cnlDb2RlKTtcclxuICAgICAgICB0aGlzLlRvdWNoT24odGhpcy5zZW5kUGhvbmVDb2RlQnRuLCB0aGlzLm9uU2VuZFBob25lQ29kZSk7XHJcbiAgICAgICAgdGhpcy5Ub3VjaE9uKHRoaXMucGhvbmVOZXh0QnRuLCB0aGlzLm5leHRQaG9uZUFjY291bnQpO1xyXG5cclxuICAgICAgICB0aGlzLlRvdWNoT24odGhpcy5zZW5kTWFpbENvZGVCdG4sIHRoaXMub25TZW5kTWFpbENvZGUpO1xyXG4gICAgICAgIHRoaXMuVG91Y2hPbih0aGlzLm1haWxOZXh0QnRuLCB0aGlzLm5leHRNYWlsQWNjb3VudClcclxuICAgICAgICB0aGlzLkV2ZW50T24oRXZlbnROYW1lLlNlbGVjdENvdW50cnlDb2RlLCB0aGlzLm9uU2VsZWN0Q291bnRyeUNvZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYmFja0xvZ2luKCkge1xyXG4gICAgICAgIFZpZXdNYW5hZ2VyLk9wZW4oVmlld0VudW0uTG9naW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb3BlbkNvdW50cnlDb2RlKCkge1xyXG4gICAgICAgIFZpZXdNYW5hZ2VyLkFsZXJ0KFdpZGdldEVudW0uQ291bnRyeUNvZGUpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBjb3VudHJ5Q29kZTogY2MuTGFiZWwgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgc2VuZFBob25lQ29kZUJ0bjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcclxuICAgIHByaXZhdGUgcGhvbmVFZGl0OiBjYy5FZGl0Qm94ID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXHJcbiAgICBwcml2YXRlIHBob25lQ29kZUVkaXQ6IGNjLkVkaXRCb3ggPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcclxuICAgIHByaXZhdGUgcGhvbmVQd2RFZGl0OiBjYy5FZGl0Qm94ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBwaG9uZU5leHRCdG46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIG9uU2VsZWN0Q291bnRyeUNvZGUoaWR4OiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgY29kZU9iajogQ29kZVN0cnVjdCA9IENvdW50cnlDb2RlRGF0YVtpZHhdO1xyXG4gICAgICAgIHRoaXMuY291bnRyeUNvZGUuc3RyaW5nID0gY29kZU9iai5jb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmiYvmnLrpqozor4HnoIEgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgb25TZW5kUGhvbmVDb2RlKCkge1xyXG4gICAgICAgIGxldCB0dGQgPSB0aGlzLnNlbmRQaG9uZUNvZGVCdG4uZ2V0Q29tcG9uZW50KFRpbWVUaWNrZXJEb3duKSBhcyBUaW1lVGlja2VyRG93bjtcclxuICAgICAgICBpZiAodHRkLmRvd24pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBob25lID0gdGhpcy5waG9uZUVkaXQuc3RyaW5nO1xyXG4gICAgICAgIGxldCBhcmVhQ29kZSA9IHRoaXMuY291bnRyeUNvZGUuc3RyaW5nO1xyXG4gICAgICAgIGlmICghVXRpbHMuSXNQaG9uZShwaG9uZSkpIHtcclxuICAgICAgICAgICAgVGlwcy5TaG93KFwi5omL5py65Y+36ZSZ6K+vIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFyZWFDb2RlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgVGlwcy5TaG93KFwi5Zu96ZmF56CB5LiN6IO95Li656m6IVwiKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmVzOiB7IGNvZGU6IG51bWJlciwgbXNnOiBzdHJpbmcgfSA9IGF3YWl0IFV0aWxzLlBvc3QoSHR0cFBhdGgucGhvbmVDYXB0Y2hhLCB7IHBob25lQXJlYUNvZGU6IGFyZWFDb2RlLCBwaG9uZU51bWJlcjogcGhvbmUgfSkgYXMgdW5rbm93biBhcyB7IGNvZGU6IG51bWJlciwgbXNnOiBzdHJpbmcgfTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuivt+axguaJi+acuumqjOivgeeggVwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuICAgICAgICBpZiAocmVzLmNvZGUgIT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKGDor7fmsYLpqozor4HnoIHlpLHotKUs56iN5ZCO5YaN6K+VIWApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFRpcHMuU2hvdyhcIumqjOivgeeggeW3suWPkemAgSFcIilcclxuICAgICAgICB0dGQucnVuKCk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAvKiog5omL5py65rOo5YaMICovXHJcbiAgICBwcml2YXRlIGFzeW5jIG5leHRQaG9uZUFjY291bnQoKSB7XHJcbiAgICAgICAgbGV0IHBob25lOiBzdHJpbmcgPSB0aGlzLnBob25lRWRpdC5zdHJpbmc7XHJcbiAgICAgICAgbGV0IHB3ZDogc3RyaW5nID0gdGhpcy5waG9uZVB3ZEVkaXQuc3RyaW5nO1xyXG4gICAgICAgIGxldCB5em06IHN0cmluZyA9IHRoaXMucGhvbmVDb2RlRWRpdC5zdHJpbmc7XHJcbiAgICAgICAgbGV0IGFyZWFDb2RlOiBzdHJpbmcgPSB0aGlzLmNvdW50cnlDb2RlLnN0cmluZztcclxuICAgICAgICBpZiAoIVV0aWxzLklzUGhvbmUocGhvbmUpKSB7XHJcbiAgICAgICAgICAgIFRpcHMuU2hvdyhcIuaJi+acuuWPt+S4jeWvuSFcIilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeXptLmxlbmd0aCA8IDYpIHtcclxuICAgICAgICAgICAgVGlwcy5TaG93KFwi6aqM6K+B56CB5aGr5YaZ6ZSZ6K+vXCIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHB3ZC5sZW5ndGggPCA2KSB7XHJcbiAgICAgICAgICAgIFRpcHMuU2hvdyhcIuWvhueggeS4jeiDveWwj+S6jjbkvY0hXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcmVhQ29kZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIFRpcHMuU2hvdyhcIuWbvemZheeggeS4jeiDveS4uuepuiFcIilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGluZm8gPSB7XHJcbiAgICAgICAgICAgIFwicGhvbmVBcmVhQ29kZVwiOiBhcmVhQ29kZSwvL+WMuuWPt1xyXG4gICAgICAgICAgICBcInBob25lTnVtYmVyXCI6IHBob25lLC8v5omL5py65Y+3XHJcbiAgICAgICAgICAgIFwibG9naW5Qd2RcIjogcHdkLC8v5a+G56CBXHJcbiAgICAgICAgICAgIFwiY2FwdGNoYVwiOiB5em0sLy/pqozor4HnoIFcclxuICAgICAgICAgICAgXCJzZXhcIjogVXNlclNleC5CT1ksLy/mgKfliKtcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogXCJcIiwvL1xyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IFwiXCIsXHJcbiAgICAgICAgICAgIFwiaXBcIjogXCJcIixcclxuICAgICAgICAgICAgXCJkZXZpY2VcIjogVXRpbHMuQ2hlY2tEZXZpY2VUeXBlKCksXHJcbiAgICAgICAgICAgIFwiZGV2aWNlSW5mb1wiOiBcIlwiLFxyXG4gICAgICAgICAgICBcInVzZXJBZ2VudFwiOiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIuaJi+acuuazqOWGjOS/oeaBr1wiLCBKU09OLnN0cmluZ2lmeShpbmZvKSk7XHJcbiAgICAgICAgbGV0IHJlczogeyBjb2RlOiBudW1iZXIsIG1zZzogc3RyaW5nIH0gPSBhd2FpdCBVdGlscy5Qb3N0KEh0dHBQYXRoLnBob25lUmVnLCBpbmZvKSBhcyB1bmtub3duIGFzIHsgY29kZTogbnVtYmVyLCBtc2c6IHN0cmluZyB9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5omL5py65rOo5YaM6L+U5Zue5L+h5oGvXCIsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG4gICAgICAgIGlmIChyZXMuY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoYOazqOWGjOWksei0pSxjb2RlOiR7cmVzLmNvZGV9YCk7XHJcbiAgICAgICAgICAgIFRpcHMuU2hvdyhcIuazqOWGjOWksei0pSznqI3lkI7lho3or5UhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBUaXBzLlNob3coXCLms6jlhozmiJDlip8hXCIpO1xyXG4gICAgICAgIFZpZXdNYW5hZ2VyLk9wZW4oVmlld0VudW0uTG9naW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc2VuZE1haWxDb2RlQnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxyXG4gICAgcHJpdmF0ZSBtYWlsRWRpdDogY2MuRWRpdEJveCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxyXG4gICAgcHJpdmF0ZSBtYWlsQ29kZUVkaXQ6IGNjLkVkaXRCb3ggPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcclxuICAgIHByaXZhdGUgbWFpbFB3ZEVkaXQ6IGNjLkVkaXRCb3ggPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIG1haWxOZXh0QnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvKiog6YKu566x6aqM6K+B56CBICovXHJcbiAgICBwcml2YXRlIGFzeW5jIG9uU2VuZE1haWxDb2RlKCkge1xyXG4gICAgICAgIGxldCB0dGQgPSB0aGlzLnNlbmRNYWlsQ29kZUJ0bi5nZXRDb21wb25lbnQoVGltZVRpY2tlckRvd24pIGFzIFRpbWVUaWNrZXJEb3duO1xyXG4gICAgICAgIGlmICh0dGQuZG93bikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbWFpbCA9IHRoaXMubWFpbEVkaXQuc3RyaW5nO1xyXG4gICAgICAgIGlmICghVXRpbHMuSXNNYWlsKG1haWwpKSB7XHJcbiAgICAgICAgICAgIFRpcHMuU2hvdyhcIumCrueuseagvOW8j+mUmeivryFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByZXM6IHsgY29kZTogbnVtYmVyLCBtc2c6IHN0cmluZyB9ID0gYXdhaXQgVXRpbHMuUG9zdChIdHRwUGF0aC5lbWFpbENhcHRjaGEsIHsgZW1haWw6IG1haWwgfSkgYXMgdW5rbm93biBhcyB7IGNvZGU6IG51bWJlciwgbXNnOiBzdHJpbmcgfTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuivt+axgumCrueusemqjOivgeeggVwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuICAgICAgICBpZiAocmVzLmNvZGUgIT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKGDor7fmsYLpqozor4HnoIHlpLHotKUs56iN5ZCO5YaN6K+VIWApO1xyXG4gICAgICAgICAgICBUaXBzLlNob3coXCLpqozor4HnoIHojrflj5blpLHotKUs56iN5ZCO5YaN6K+VIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIFRpcHMuU2hvdyhcIumqjOivgeeggeW3suWPkemAgSzor7fliLDpgq7nrrHmn6XmlLYhXCIpO1xyXG4gICAgICAgIHR0ZC5ydW4oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog6YKu566x5rOo5YaMICovXHJcbiAgICBwcml2YXRlIGFzeW5jIG5leHRNYWlsQWNjb3VudCgpIHtcclxuICAgICAgICBsZXQgbWFpbDogc3RyaW5nID0gdGhpcy5tYWlsRWRpdC5zdHJpbmc7XHJcbiAgICAgICAgbGV0IHB3ZDogc3RyaW5nID0gdGhpcy5tYWlsUHdkRWRpdC5zdHJpbmc7XHJcbiAgICAgICAgbGV0IHl6bTogc3RyaW5nID0gdGhpcy5tYWlsQ29kZUVkaXQuc3RyaW5nO1xyXG4gICAgICAgIGlmICghVXRpbHMuSXNNYWlsKG1haWwpKSB7XHJcbiAgICAgICAgICAgIFRpcHMuU2hvdyhcIumCrueuseagvOW8j+S4jeWvuSFcIilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeXptLmxlbmd0aCA8IDYpIHtcclxuICAgICAgICAgICAgVGlwcy5TaG93KFwi6aqM6K+B56CB6ZW/5bqm6ZSZ6K+vXCIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHB3ZC5sZW5ndGggPCA2KSB7XHJcbiAgICAgICAgICAgIFRpcHMuU2hvdyhcIuWvhueggeS4jeiDveWwj+S6jjbkvY0hXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaW5mbyA9IHtcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBtYWlsLFxyXG4gICAgICAgICAgICBcImxvZ2luUHdkXCI6IHB3ZCxcclxuICAgICAgICAgICAgXCJjYXB0Y2hhXCI6IHl6bSxcclxuICAgICAgICAgICAgXCJzZXhcIjogVXNlclNleC5CT1ksXHJcbiAgICAgICAgICAgIFwiaXBcIjogXCJcIixcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogXCJcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiBcIlwiLFxyXG4gICAgICAgICAgICBcImRldmljZVwiOiBVdGlscy5DaGVja0RldmljZVR5cGUoKSxcclxuICAgICAgICAgICAgXCJkZXZpY2VJbmZvXCI6IFwiXCIsXHJcbiAgICAgICAgICAgIFwidXNlckFnZW50XCI6IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLpgq7nrrHms6jlhozkv6Hmga9cIiwgSlNPTi5zdHJpbmdpZnkoaW5mbykpO1xyXG4gICAgICAgIGxldCByZXM6IHsgY29kZTogbnVtYmVyLCBtc2c6IHN0cmluZyB9ID0gYXdhaXQgVXRpbHMuUG9zdChIdHRwUGF0aC5lbWFpbFJlZywgaW5mbykgYXMgdW5rbm93biBhcyB7IGNvZGU6IG51bWJlciwgbXNnOiBzdHJpbmcgfTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIumCrueuseazqOWGjOS/oeaBr+i/lOWbnlwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuICAgICAgICBpZiAocmVzLmNvZGUgIT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKGDms6jlhozlpLHotKUsY29kZToke3Jlcy5jb2RlfWApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBUaXBzLlNob3coXCLms6jlhozmiJDlip8hXCIpO1xyXG4gICAgICAgIFZpZXdNYW5hZ2VyLk9wZW4oVmlld0VudW0uTG9naW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19