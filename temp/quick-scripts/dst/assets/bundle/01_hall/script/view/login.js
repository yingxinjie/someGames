
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/01_hall/script/view/login.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXHZpZXdcXGxvZ2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBb0Q7QUFDcEQseUNBQXdDO0FBQ3hDLDhFQUF5RTtBQUN6RSwyQ0FBMEY7QUFDMUYsMEVBQXlGO0FBQ3pGLCtDQUE4QztBQUM5Qyw2REFBNEQ7QUFFdEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUMseUJBQWE7SUFBaEQ7UUFBQSxxRUF3SkM7UUFySkcsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUc3QixjQUFRLEdBQVksSUFBSSxDQUFBO1FBRXhCLFlBQU0sR0FBWSxJQUFJLENBQUE7UUFHdEIsbUJBQWEsR0FBWSxJQUFJLENBQUE7UUFFN0Isa0JBQVksR0FBWSxJQUFJLENBQUE7UUFpQ3BCLG1CQUFhLEdBQWEsSUFBSSxDQUFDO1FBRS9CLGVBQVMsR0FBZSxJQUFJLENBQUM7UUFFN0IsY0FBUSxHQUFlLElBQUksQ0FBQztRQW9ENUIsY0FBUSxHQUFlLElBQUksQ0FBQztRQUU1QixhQUFPLEdBQWUsSUFBSSxDQUFDOztJQThDdkMsQ0FBQztJQXZJRyxxQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxV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RCxBQXdKQyxDQXhKa0MsdUJBQWEsR0F3Si9DO2tCQXhKb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcIi4uL2NvbmZpZy9WaWV3TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi9jb25maWcvVXRpbHNcIjtcclxuaW1wb3J0IENvbXBvbmVudEJhc2UgZnJvbSBcIi4uLy4uLy4uLzAwX2Jhc2Uvc2NyaXB0L2NvbW1vbi9Db21wb25lbnRCYXNlXCI7XHJcbmltcG9ydCB7IEFjY291bnRUeXBlLCBFdmVudE5hbWUsIEh0dHBQYXRoLCBWaWV3RW51bSwgV2lkZ2V0RW51bSB9IGZyb20gXCIuLi9jb25maWcvY29uZmlnXCI7XHJcbmltcG9ydCB7IENvZGVTdHJ1Y3QsIENvdW50cnlDb2RlRGF0YSB9IGZyb20gXCIuLi8uLi8uLi8wMF9iYXNlL3NjcmlwdC9jb21tb24vQ291bnRyeUNvZGVcIjtcclxuaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tIFwiLi4vY29uZmlnL1VzZXJJbmZvXCI7XHJcbmltcG9ydCB7IFRpcHMgfSBmcm9tIFwiLi4vLi4vLi4vMDBfYmFzZS9zY3JpcHQvdWl1dGlscy90aXBzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbG9naW4gZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNlbGVjdEJ0bjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBjb3VudHJ5Q29kZTogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcmVzZXRCdG46IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHJlZ0J0bjogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBob25lTG9naW5CdG46IGNjLk5vZGUgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1haWxMb2dpbkJ0bjogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLlRvdWNoT24odGhpcy5zZWxlY3RCdG4sIHRoaXMub3BlbkNvdW50cnlDb2RlKTtcclxuICAgICAgICB0aGlzLlRvdWNoT24odGhpcy5yZXNldEJ0biwgdGhpcy5vcGVuUmVzZXRQYW5lbCk7XHJcbiAgICAgICAgdGhpcy5Ub3VjaE9uKHRoaXMucmVnQnRuLCB0aGlzLm9wZW5SZWdQYW5lbCk7XHJcbiAgICAgICAgdGhpcy5Ub3VjaE9uKHRoaXMucGhvbmVMb2dpbkJ0biwgdGhpcy5waG9uZUxvZ2luKTtcclxuICAgICAgICB0aGlzLlRvdWNoT24odGhpcy5tYWlsTG9naW5CdG4sIHRoaXMubWFpbExvZ2luKTtcclxuXHJcbiAgICAgICAgdGhpcy5FdmVudE9uKEV2ZW50TmFtZS5TZWxlY3RDb3VudHJ5Q29kZSwgdGhpcy5vblNlbGVjdENvdW50cnlDb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9wZW5Db3VudHJ5Q29kZSgpIHtcclxuICAgICAgICBWaWV3TWFuYWdlci5BbGVydChXaWRnZXRFbnVtLkNvdW50cnlDb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uU2VsZWN0Q291bnRyeUNvZGUoaWR4OiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgY29kZU9iajogQ29kZVN0cnVjdCA9IENvdW50cnlDb2RlRGF0YVtpZHhdO1xyXG4gICAgICAgIHRoaXMuY291bnRyeUNvZGUuc3RyaW5nID0gY29kZU9iai5jb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDph43nva7lr4bnoIEgKi9cclxuICAgIHByaXZhdGUgb3BlblJlc2V0UGFuZWwoKSB7XHJcbiAgICAgICAgVmlld01hbmFnZXIuT3BlbihWaWV3RW51bS5SZXNldCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOazqOWGjOaWsOi0puWPtyAqL1xyXG4gICAgcHJpdmF0ZSBvcGVuUmVnUGFuZWwoKSB7XHJcbiAgICAgICAgVmlld01hbmFnZXIuT3BlbihWaWV3RW51bS5SZWcpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIHBob25lQXJlYUNvZGU6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxyXG4gICAgcHJpdmF0ZSBwaG9uZUVkaXQ6IGNjLkVkaXRCb3ggPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXHJcbiAgICBwcml2YXRlIHBob25lUHdkOiBjYy5FZGl0Qm94ID0gbnVsbDtcclxuXHJcbiAgICAvKiog54K55Ye75LqG5omL5py655m75b2V55qE5oyJ6ZKuICovXHJcbiAgICBwcml2YXRlIGFzeW5jIHBob25lTG9naW4oKSB7XHJcbiAgICAgICAgbGV0IHBob25lOiBzdHJpbmcgPSB0aGlzLnBob25lRWRpdC5zdHJpbmc7XHJcbiAgICAgICAgbGV0IHB3ZDogc3RyaW5nID0gdGhpcy5waG9uZVB3ZC5zdHJpbmc7XHJcbiAgICAgICAgbGV0IGNvZGU6IHN0cmluZyA9IHRoaXMucGhvbmVBcmVhQ29kZS5zdHJpbmc7XHJcbiAgICAgICAgaWYgKCFVdGlscy5Jc1Bob25lKHBob25lKSkge1xyXG4gICAgICAgICAgICBUaXBzLlNob3coXCLor7fovpPlhaXmraPnoa7nmoTmiYvmnLrlj7chXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwd2QubGVuZ3RoIDwgNikge1xyXG4gICAgICAgICAgICBUaXBzLlNob3coXCLlr4bnoIHplb/luqbkuI3lpJ8s6Iez5bCRNuS9jeWtl+espiFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnBob25lQXJlYUNvZGUgfHwgY29kZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIFRpcHMuU2hvdyhcIuivt+mAieaLqeWMuuS9jeeggSFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICBwaG9uZUFyZWFDb2RlOiB0aGlzLnBob25lQXJlYUNvZGUuc3RyaW5nLFxyXG4gICAgICAgICAgICBwaG9uZU51bWJlcjogcGhvbmUsXHJcbiAgICAgICAgICAgIGxvZ2luUHdkOiBwd2QsXHJcbiAgICAgICAgICAgIGRldmljZTogVXRpbHMuQ2hlY2tEZXZpY2VUeXBlKCksXHJcbiAgICAgICAgICAgIGRldmljZUluZm86IFwiXCIsXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogXCJcIixcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IFwiXCIsXHJcbiAgICAgICAgICAgIGlwOiBcIlwiLFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcIuivt+axguaVsOaNrlwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuICAgICAgICBsZXQgcmVzOiBhbnkgPSBhd2FpdCBVdGlscy5Qb3N0KEh0dHBQYXRoLnBob25lTG9naW4sIGRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi55m75b2V5pWw5o2u6L+U5ZueXCIsIEpTT04uc3RyaW5naWZ5KHJlcykpXHJcbiAgICAgICAgaWYgKHJlcy5jb2RlICE9IDIwMCkge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihcIuaJi+acuueZu+mZhuivt+axgumUmeivr1wiLCBIdHRwUGF0aC5waG9uZUxvZ2luLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgVXNlckluZm8udXVpZCA9IHJlcy51dWlkO1xyXG4gICAgICAgIFVzZXJJbmZvLm5pY2sgPSByZXMuZGF0YS5uYW1lO1xyXG4gICAgICAgIFVzZXJJbmZvLmhlYWRQaWMgPSByZXMuZGF0YS5oZWFkUGljO1xyXG4gICAgICAgIFVzZXJJbmZvLmdlbmRlciA9IHJlcy5kYXRhLnNleDtcclxuICAgICAgICBVc2VySW5mby52aXBWYWxpZGl0eVBlcmlvZCA9IHJlcy5kYXRhLnZpcFZhbGlkaXR5UGVyaW9kO1xyXG4gICAgICAgIFVzZXJJbmZvLnZpcFR5cGUgPSByZXMuZGF0YS52aXBUeXBlO1xyXG4gICAgICAgIFVzZXJJbmZvLnV1aWQgPSByZXMudXVpZDtcclxuICAgICAgICBVc2VySW5mby50b2tlbiA9IHJlcy5kYXRhLnRva2VuO1xyXG5cclxuICAgICAgICBhd2FpdCBWaWV3TWFuYWdlci5BbGVydChXaWRnZXRFbnVtLkJvdHRvbVRvZ2dsZSk7XHJcbiAgICAgICAgYXdhaXQgVmlld01hbmFnZXIuT3BlbihWaWV3RW51bS5GYVhpYW4pO1xyXG4gICAgfVxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxyXG4gICAgcHJpdmF0ZSBtYWlsRWRpdDogY2MuRWRpdEJveCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcclxuICAgIHByaXZhdGUgbWFpbFB3ZDogY2MuRWRpdEJveCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBtYWlsTG9naW4oKSB7XHJcbiAgICAgICAgbGV0IG1haWw6IHN0cmluZyA9IHRoaXMubWFpbEVkaXQuc3RyaW5nO1xyXG4gICAgICAgIGxldCBwd2Q6IHN0cmluZyA9IHRoaXMubWFpbFB3ZC5zdHJpbmc7XHJcbiAgICAgICAgaWYgKCFVdGlscy5Jc01haWwobWFpbCkpIHtcclxuICAgICAgICAgICAgVGlwcy5TaG93KFwi6K+36L6T5YWl5q2j56Gu55qE6YKu566xIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHdkLmxlbmd0aCA8IDYpIHtcclxuICAgICAgICAgICAgVGlwcy5TaG93KFwi5a+G56CB6ZW/5bqm5LiN5aSfLOiHs+WwkTbkvY3lrZfnrKYhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgZW1haWw6IG1haWwsXHJcbiAgICAgICAgICAgIGxvZ2luUHdkOiBwd2QsXHJcbiAgICAgICAgICAgIGlwOiBcIlwiLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IFwiXCIsXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBcIlwiLFxyXG4gICAgICAgICAgICBkZXZpY2U6IFV0aWxzLkNoZWNrRGV2aWNlVHlwZSgpLFxyXG4gICAgICAgICAgICBkZXZpY2VJbmZvOiBcIlwiLFxyXG4gICAgICAgICAgICB1c2VyQWdlbnQ6IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6K+35rGC5pWw5o2uXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG4gICAgICAgIGxldCByZXM6IGFueSA9IGF3YWl0IFV0aWxzLlBvc3QoSHR0cFBhdGguZW1haWxMb2dpbiwgZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLnmbvlvZXmlbDmja7ov5Tlm55cIiwgSlNPTi5zdHJpbmdpZnkocmVzKSlcclxuICAgICAgICBpZiAocmVzLmNvZGUgIT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKFwi5omL5py655m76ZmG6K+35rGC6ZSZ6K+vXCIsIEh0dHBQYXRoLmVtYWlsTG9naW4sIEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBVc2VySW5mby51dWlkID0gcmVzLnV1aWQ7XHJcbiAgICAgICAgVXNlckluZm8ubmljayA9IHJlcy5kYXRhLm5hbWU7XHJcbiAgICAgICAgVXNlckluZm8uaGVhZFBpYyA9IHJlcy5kYXRhLmhlYWRQaWM7XHJcbiAgICAgICAgVXNlckluZm8uZ2VuZGVyID0gcmVzLmRhdGEuc2V4O1xyXG4gICAgICAgIFVzZXJJbmZvLnZpcFZhbGlkaXR5UGVyaW9kID0gcmVzLmRhdGEudmlwVmFsaWRpdHlQZXJpb2Q7XHJcbiAgICAgICAgVXNlckluZm8udmlwVHlwZSA9IHJlcy5kYXRhLnZpcFR5cGU7XHJcbiAgICAgICAgVXNlckluZm8udXVpZCA9IHJlcy51dWlkO1xyXG4gICAgICAgIFVzZXJJbmZvLnRva2VuID0gcmVzLmRhdGEudG9rZW47XHJcblxyXG4gICAgICAgIGF3YWl0IFZpZXdNYW5hZ2VyLkFsZXJ0KFdpZGdldEVudW0uQm90dG9tVG9nZ2xlKTtcclxuICAgICAgICBhd2FpdCBWaWV3TWFuYWdlci5PcGVuKFZpZXdFbnVtLkZhWGlhbik7XHJcbiAgICB9XHJcblxyXG59Il19