
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/01_hall/script/view/reg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f3fedlDC09KXpDASMmqfi2R', 'reg');
// bundle/01_hall/script/view/reg.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewManager_1 = require("../config/ViewManager");
var CountryCode_1 = require("../../../00_base/script/common/CountryCode");
var config_1 = require("../config/config");
var ComponentBase_1 = require("../../../00_base/script/common/ComponentBase");
var Utils_1 = require("../config/Utils");
var TimeTickerDown_1 = require("../../../00_base/script/common/TimeTickerDown");
var tips_1 = require("../../../00_base/script/uiutils/tips");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var reg = /** @class */ (function (_super) {
    __extends(reg, _super);
    function reg() {
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
    reg.prototype.start = function () {
        this.TouchOn(this.backBtn, this.backLogin);
        this.TouchOn(this.selectCountryCodeBtn, this.openCountryCode);
        this.TouchOn(this.sendPhoneCodeBtn, this.onSendPhoneCode);
        this.TouchOn(this.phoneNextBtn, this.nextPhoneAccount);
        this.TouchOn(this.sendMailCodeBtn, this.onSendMailCode);
        this.TouchOn(this.mailNextBtn, this.nextMailAccount);
        this.EventOn(config_1.EventName.SelectCountryCode, this.onSelectCountryCode);
    };
    reg.prototype.backLogin = function () {
        ViewManager_1.ViewManager.Open(config_1.ViewEnum.Login);
    };
    reg.prototype.openCountryCode = function () {
        ViewManager_1.ViewManager.Alert(config_1.WidgetEnum.CountryCode);
    };
    reg.prototype.onSelectCountryCode = function (idx) {
        var codeObj = CountryCode_1.CountryCodeData[idx];
        this.countryCode.string = codeObj.code;
    };
    /** 手机验证码 */
    reg.prototype.onSendPhoneCode = function () {
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
    reg.prototype.nextPhoneAccount = function () {
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
    reg.prototype.onSendMailCode = function () {
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
    reg.prototype.nextMailAccount = function () {
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
    ], reg.prototype, "backBtn", void 0);
    __decorate([
        property(cc.Node)
    ], reg.prototype, "selectCountryCodeBtn", void 0);
    __decorate([
        property(cc.Label)
    ], reg.prototype, "countryCode", void 0);
    __decorate([
        property(cc.Node)
    ], reg.prototype, "sendPhoneCodeBtn", void 0);
    __decorate([
        property(cc.EditBox)
    ], reg.prototype, "phoneEdit", void 0);
    __decorate([
        property(cc.EditBox)
    ], reg.prototype, "phoneCodeEdit", void 0);
    __decorate([
        property(cc.EditBox)
    ], reg.prototype, "phonePwdEdit", void 0);
    __decorate([
        property(cc.Node)
    ], reg.prototype, "phoneNextBtn", void 0);
    __decorate([
        property(cc.Node)
    ], reg.prototype, "sendMailCodeBtn", void 0);
    __decorate([
        property(cc.EditBox)
    ], reg.prototype, "mailEdit", void 0);
    __decorate([
        property(cc.EditBox)
    ], reg.prototype, "mailCodeEdit", void 0);
    __decorate([
        property(cc.EditBox)
    ], reg.prototype, "mailPwdEdit", void 0);
    __decorate([
        property(cc.Node)
    ], reg.prototype, "mailNextBtn", void 0);
    reg = __decorate([
        ccclass
    ], reg);
    return reg;
}(ComponentBase_1.default));
exports.default = reg;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXHZpZXdcXHJlZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQW9EO0FBQ3BELDBFQUF5RjtBQUN6RiwyQ0FBbUc7QUFDbkcsOEVBQXlFO0FBQ3pFLHlDQUF3QztBQUN4QyxnRkFBMkU7QUFDM0UsNkRBQTREO0FBRXRELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlDLHVCQUFhO0lBQTlDO1FBQUEscUVBbU5DO1FBak5HLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsMEJBQW9CLEdBQVksSUFBSSxDQUFDO1FBMEI3QixpQkFBVyxHQUFhLElBQUksQ0FBQTtRQUU1QixzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFFakMsZUFBUyxHQUFlLElBQUksQ0FBQTtRQUU1QixtQkFBYSxHQUFlLElBQUksQ0FBQTtRQUVoQyxrQkFBWSxHQUFlLElBQUksQ0FBQztRQUVoQyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQTBGckMsOEJBQThCO1FBRTlCLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBRXhCLGNBQVEsR0FBZSxJQUFJLENBQUE7UUFFM0Isa0JBQVksR0FBZSxJQUFJLENBQUE7UUFFL0IsaUJBQVcsR0FBZSxJQUFJLENBQUM7UUFFL0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7O0lBdUV4QyxDQUFDO0lBNU1HLG1CQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTNDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENB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USxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7NkNBQ2tCO0lBRXZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7NENBQ2tCO0lBRXZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ2tCO0lBNUluQixHQUFHO1FBRHZCLE9BQU87T0FDYSxHQUFHLENBbU52QjtJQUFELFVBQUM7Q0FuTkQsQUFtTkMsQ0FuTmdDLHVCQUFhLEdBbU43QztrQkFuTm9CLEdBQUciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCIuLi9jb25maWcvVmlld01hbmFnZXJcIjtcclxuaW1wb3J0IHsgQ29kZVN0cnVjdCwgQ291bnRyeUNvZGVEYXRhIH0gZnJvbSBcIi4uLy4uLy4uLzAwX2Jhc2Uvc2NyaXB0L2NvbW1vbi9Db3VudHJ5Q29kZVwiO1xyXG5pbXBvcnQgeyBBY2NvdW50VHlwZSwgRXZlbnROYW1lLCBIdHRwUGF0aCwgVXNlclNleCwgVmlld0VudW0sIFdpZGdldEVudW0gfSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ1wiO1xyXG5pbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tIFwiLi4vLi4vLi4vMDBfYmFzZS9zY3JpcHQvY29tbW9uL0NvbXBvbmVudEJhc2VcIjtcclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi4vY29uZmlnL1V0aWxzXCI7XHJcbmltcG9ydCBUaW1lVGlja2VyRG93biBmcm9tIFwiLi4vLi4vLi4vMDBfYmFzZS9zY3JpcHQvY29tbW9uL1RpbWVUaWNrZXJEb3duXCI7XHJcbmltcG9ydCB7IFRpcHMgfSBmcm9tIFwiLi4vLi4vLi4vMDBfYmFzZS9zY3JpcHQvdWl1dGlscy90aXBzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcmVnIGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhY2tCdG46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzZWxlY3RDb3VudHJ5Q29kZUJ0bjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuVG91Y2hPbih0aGlzLmJhY2tCdG4sIHRoaXMuYmFja0xvZ2luKTtcclxuXHJcbiAgICAgICAgdGhpcy5Ub3VjaE9uKHRoaXMuc2VsZWN0Q291bnRyeUNvZGVCdG4sIHRoaXMub3BlbkNvdW50cnlDb2RlKTtcclxuICAgICAgICB0aGlzLlRvdWNoT24odGhpcy5zZW5kUGhvbmVDb2RlQnRuLCB0aGlzLm9uU2VuZFBob25lQ29kZSk7XHJcbiAgICAgICAgdGhpcy5Ub3VjaE9uKHRoaXMucGhvbmVOZXh0QnRuLCB0aGlzLm5leHRQaG9uZUFjY291bnQpO1xyXG5cclxuICAgICAgICB0aGlzLlRvdWNoT24odGhpcy5zZW5kTWFpbENvZGVCdG4sIHRoaXMub25TZW5kTWFpbENvZGUpO1xyXG4gICAgICAgIHRoaXMuVG91Y2hPbih0aGlzLm1haWxOZXh0QnRuLCB0aGlzLm5leHRNYWlsQWNjb3VudClcclxuICAgICAgICB0aGlzLkV2ZW50T24oRXZlbnROYW1lLlNlbGVjdENvdW50cnlDb2RlLCB0aGlzLm9uU2VsZWN0Q291bnRyeUNvZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYmFja0xvZ2luKCkge1xyXG4gICAgICAgIFZpZXdNYW5hZ2VyLk9wZW4oVmlld0VudW0uTG9naW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb3BlbkNvdW50cnlDb2RlKCkge1xyXG4gICAgICAgIFZpZXdNYW5hZ2VyLkFsZXJ0KFdpZGdldEVudW0uQ291bnRyeUNvZGUpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBjb3VudHJ5Q29kZTogY2MuTGFiZWwgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgc2VuZFBob25lQ29kZUJ0bjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcclxuICAgIHByaXZhdGUgcGhvbmVFZGl0OiBjYy5FZGl0Qm94ID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXHJcbiAgICBwcml2YXRlIHBob25lQ29kZUVkaXQ6IGNjLkVkaXRCb3ggPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcclxuICAgIHByaXZhdGUgcGhvbmVQd2RFZGl0OiBjYy5FZGl0Qm94ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBwaG9uZU5leHRCdG46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIG9uU2VsZWN0Q291bnRyeUNvZGUoaWR4OiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgY29kZU9iajogQ29kZVN0cnVjdCA9IENvdW50cnlDb2RlRGF0YVtpZHhdO1xyXG4gICAgICAgIHRoaXMuY291bnRyeUNvZGUuc3RyaW5nID0gY29kZU9iai5jb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmiYvmnLrpqozor4HnoIEgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgb25TZW5kUGhvbmVDb2RlKCkge1xyXG4gICAgICAgIGxldCB0dGQgPSB0aGlzLnNlbmRQaG9uZUNvZGVCdG4uZ2V0Q29tcG9uZW50KFRpbWVUaWNrZXJEb3duKSBhcyBUaW1lVGlja2VyRG93bjtcclxuICAgICAgICBpZiAodHRkLmRvd24pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBob25lID0gdGhpcy5waG9uZUVkaXQuc3RyaW5nO1xyXG4gICAgICAgIGxldCBhcmVhQ29kZSA9IHRoaXMuY291bnRyeUNvZGUuc3RyaW5nO1xyXG4gICAgICAgIGlmICghVXRpbHMuSXNQaG9uZShwaG9uZSkpIHtcclxuICAgICAgICAgICAgVGlwcy5TaG93KFwi5omL5py65Y+36ZSZ6K+vIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFyZWFDb2RlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgVGlwcy5TaG93KFwi5Zu96ZmF56CB5LiN6IO95Li656m6IVwiKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmVzOiB7IGNvZGU6IG51bWJlciwgbXNnOiBzdHJpbmcgfSA9IGF3YWl0IFV0aWxzLlBvc3QoSHR0cFBhdGgucGhvbmVDYXB0Y2hhLCB7IHBob25lQXJlYUNvZGU6IGFyZWFDb2RlLCBwaG9uZU51bWJlcjogcGhvbmUgfSkgYXMgdW5rbm93biBhcyB7IGNvZGU6IG51bWJlciwgbXNnOiBzdHJpbmcgfTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuivt+axguaJi+acuumqjOivgeeggVwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuICAgICAgICBpZiAocmVzLmNvZGUgIT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKGDor7fmsYLpqozor4HnoIHlpLHotKUs56iN5ZCO5YaN6K+VIWApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFRpcHMuU2hvdyhcIumqjOivgeeggeW3suWPkemAgSFcIilcclxuICAgICAgICB0dGQucnVuKCk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAvKiog5omL5py65rOo5YaMICovXHJcbiAgICBwcml2YXRlIGFzeW5jIG5leHRQaG9uZUFjY291bnQoKSB7XHJcbiAgICAgICAgbGV0IHBob25lOiBzdHJpbmcgPSB0aGlzLnBob25lRWRpdC5zdHJpbmc7XHJcbiAgICAgICAgbGV0IHB3ZDogc3RyaW5nID0gdGhpcy5waG9uZVB3ZEVkaXQuc3RyaW5nO1xyXG4gICAgICAgIGxldCB5em06IHN0cmluZyA9IHRoaXMucGhvbmVDb2RlRWRpdC5zdHJpbmc7XHJcbiAgICAgICAgbGV0IGFyZWFDb2RlOiBzdHJpbmcgPSB0aGlzLmNvdW50cnlDb2RlLnN0cmluZztcclxuICAgICAgICBpZiAoIVV0aWxzLklzUGhvbmUocGhvbmUpKSB7XHJcbiAgICAgICAgICAgIFRpcHMuU2hvdyhcIuaJi+acuuWPt+S4jeWvuSFcIilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeXptLmxlbmd0aCA8IDYpIHtcclxuICAgICAgICAgICAgVGlwcy5TaG93KFwi6aqM6K+B56CB5aGr5YaZ6ZSZ6K+vXCIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHB3ZC5sZW5ndGggPCA2KSB7XHJcbiAgICAgICAgICAgIFRpcHMuU2hvdyhcIuWvhueggeS4jeiDveWwj+S6jjbkvY0hXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcmVhQ29kZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIFRpcHMuU2hvdyhcIuWbvemZheeggeS4jeiDveS4uuepuiFcIilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGluZm8gPSB7XHJcbiAgICAgICAgICAgIFwicGhvbmVBcmVhQ29kZVwiOiBhcmVhQ29kZSwvL+WMuuWPt1xyXG4gICAgICAgICAgICBcInBob25lTnVtYmVyXCI6IHBob25lLC8v5omL5py65Y+3XHJcbiAgICAgICAgICAgIFwibG9naW5Qd2RcIjogcHdkLC8v5a+G56CBXHJcbiAgICAgICAgICAgIFwiY2FwdGNoYVwiOiB5em0sLy/pqozor4HnoIFcclxuICAgICAgICAgICAgXCJzZXhcIjogVXNlclNleC5CT1ksLy/mgKfliKtcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogXCJcIiwvL1xyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IFwiXCIsXHJcbiAgICAgICAgICAgIFwiaXBcIjogXCJcIixcclxuICAgICAgICAgICAgXCJkZXZpY2VcIjogVXRpbHMuQ2hlY2tEZXZpY2VUeXBlKCksXHJcbiAgICAgICAgICAgIFwiZGV2aWNlSW5mb1wiOiBcIlwiLFxyXG4gICAgICAgICAgICBcInVzZXJBZ2VudFwiOiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIuaJi+acuuazqOWGjOS/oeaBr1wiLCBKU09OLnN0cmluZ2lmeShpbmZvKSk7XHJcbiAgICAgICAgbGV0IHJlczogeyBjb2RlOiBudW1iZXIsIG1zZzogc3RyaW5nIH0gPSBhd2FpdCBVdGlscy5Qb3N0KEh0dHBQYXRoLnBob25lUmVnLCBpbmZvKSBhcyB1bmtub3duIGFzIHsgY29kZTogbnVtYmVyLCBtc2c6IHN0cmluZyB9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5omL5py65rOo5YaM6L+U5Zue5L+h5oGvXCIsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG4gICAgICAgIGlmIChyZXMuY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoYOazqOWGjOWksei0pSxjb2RlOiR7cmVzLmNvZGV9YCk7XHJcbiAgICAgICAgICAgIFRpcHMuU2hvdyhcIuazqOWGjOWksei0pSznqI3lkI7lho3or5UhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBUaXBzLlNob3coXCLms6jlhozmiJDlip8hXCIpO1xyXG4gICAgICAgIFZpZXdNYW5hZ2VyLk9wZW4oVmlld0VudW0uTG9naW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc2VuZE1haWxDb2RlQnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxyXG4gICAgcHJpdmF0ZSBtYWlsRWRpdDogY2MuRWRpdEJveCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxyXG4gICAgcHJpdmF0ZSBtYWlsQ29kZUVkaXQ6IGNjLkVkaXRCb3ggPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcclxuICAgIHByaXZhdGUgbWFpbFB3ZEVkaXQ6IGNjLkVkaXRCb3ggPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIG1haWxOZXh0QnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvKiog6YKu566x6aqM6K+B56CBICovXHJcbiAgICBwcml2YXRlIGFzeW5jIG9uU2VuZE1haWxDb2RlKCkge1xyXG4gICAgICAgIGxldCB0dGQgPSB0aGlzLnNlbmRNYWlsQ29kZUJ0bi5nZXRDb21wb25lbnQoVGltZVRpY2tlckRvd24pIGFzIFRpbWVUaWNrZXJEb3duO1xyXG4gICAgICAgIGlmICh0dGQuZG93bikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbWFpbCA9IHRoaXMubWFpbEVkaXQuc3RyaW5nO1xyXG4gICAgICAgIGlmICghVXRpbHMuSXNNYWlsKG1haWwpKSB7XHJcbiAgICAgICAgICAgIFRpcHMuU2hvdyhcIumCrueuseagvOW8j+mUmeivryFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByZXM6IHsgY29kZTogbnVtYmVyLCBtc2c6IHN0cmluZyB9ID0gYXdhaXQgVXRpbHMuUG9zdChIdHRwUGF0aC5lbWFpbENhcHRjaGEsIHsgZW1haWw6IG1haWwgfSkgYXMgdW5rbm93biBhcyB7IGNvZGU6IG51bWJlciwgbXNnOiBzdHJpbmcgfTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuivt+axgumCrueusemqjOivgeeggVwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuICAgICAgICBpZiAocmVzLmNvZGUgIT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKGDor7fmsYLpqozor4HnoIHlpLHotKUs56iN5ZCO5YaN6K+VIWApO1xyXG4gICAgICAgICAgICBUaXBzLlNob3coXCLpqozor4HnoIHojrflj5blpLHotKUs56iN5ZCO5YaN6K+VIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIFRpcHMuU2hvdyhcIumqjOivgeeggeW3suWPkemAgSzor7fliLDpgq7nrrHmn6XmlLYhXCIpO1xyXG4gICAgICAgIHR0ZC5ydW4oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog6YKu566x5rOo5YaMICovXHJcbiAgICBwcml2YXRlIGFzeW5jIG5leHRNYWlsQWNjb3VudCgpIHtcclxuICAgICAgICBsZXQgbWFpbDogc3RyaW5nID0gdGhpcy5tYWlsRWRpdC5zdHJpbmc7XHJcbiAgICAgICAgbGV0IHB3ZDogc3RyaW5nID0gdGhpcy5tYWlsUHdkRWRpdC5zdHJpbmc7XHJcbiAgICAgICAgbGV0IHl6bTogc3RyaW5nID0gdGhpcy5tYWlsQ29kZUVkaXQuc3RyaW5nO1xyXG4gICAgICAgIGlmICghVXRpbHMuSXNNYWlsKG1haWwpKSB7XHJcbiAgICAgICAgICAgIFRpcHMuU2hvdyhcIumCrueuseagvOW8j+S4jeWvuSFcIilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeXptLmxlbmd0aCA8IDYpIHtcclxuICAgICAgICAgICAgVGlwcy5TaG93KFwi6aqM6K+B56CB6ZW/5bqm6ZSZ6K+vXCIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHB3ZC5sZW5ndGggPCA2KSB7XHJcbiAgICAgICAgICAgIFRpcHMuU2hvdyhcIuWvhueggeS4jeiDveWwj+S6jjbkvY0hXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaW5mbyA9IHtcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBtYWlsLFxyXG4gICAgICAgICAgICBcImxvZ2luUHdkXCI6IHB3ZCxcclxuICAgICAgICAgICAgXCJjYXB0Y2hhXCI6IHl6bSxcclxuICAgICAgICAgICAgXCJzZXhcIjogVXNlclNleC5CT1ksXHJcbiAgICAgICAgICAgIFwiaXBcIjogXCJcIixcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogXCJcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiBcIlwiLFxyXG4gICAgICAgICAgICBcImRldmljZVwiOiBVdGlscy5DaGVja0RldmljZVR5cGUoKSxcclxuICAgICAgICAgICAgXCJkZXZpY2VJbmZvXCI6IFwiXCIsXHJcbiAgICAgICAgICAgIFwidXNlckFnZW50XCI6IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLpgq7nrrHms6jlhozkv6Hmga9cIiwgSlNPTi5zdHJpbmdpZnkoaW5mbykpO1xyXG4gICAgICAgIGxldCByZXM6IHsgY29kZTogbnVtYmVyLCBtc2c6IHN0cmluZyB9ID0gYXdhaXQgVXRpbHMuUG9zdChIdHRwUGF0aC5lbWFpbFJlZywgaW5mbykgYXMgdW5rbm93biBhcyB7IGNvZGU6IG51bWJlciwgbXNnOiBzdHJpbmcgfTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIumCrueuseazqOWGjOS/oeaBr+i/lOWbnlwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuICAgICAgICBpZiAocmVzLmNvZGUgIT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKGDms6jlhozlpLHotKUsY29kZToke3Jlcy5jb2RlfWApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBUaXBzLlNob3coXCLms6jlhozmiJDlip8hXCIpO1xyXG4gICAgICAgIFZpZXdNYW5hZ2VyLk9wZW4oVmlld0VudW0uTG9naW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19