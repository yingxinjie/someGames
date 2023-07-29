
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXHZpZXdcXGxvZ2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFvRDtBQUNwRCx5Q0FBd0M7QUFDeEMsOEVBQXlFO0FBQ3pFLDJDQUEwRjtBQUMxRiwwRUFBeUY7QUFDekYsK0NBQThDO0FBQzlDLDZEQUE0RDtBQUV0RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtQyx5QkFBYTtJQUFoRDtRQUFBLHFFQXdKQztRQXJKRyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRzdCLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFFeEIsWUFBTSxHQUFZLElBQUksQ0FBQTtRQUd0QixtQkFBYSxHQUFZLElBQUksQ0FBQTtRQUU3QixrQkFBWSxHQUFZLElBQUksQ0FBQTtRQWlDcEIsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0IsZUFBUyxHQUFlLElBQUksQ0FBQztRQUU3QixjQUFRLEdBQWUsSUFBSSxDQUFDO1FBb0Q1QixjQUFRLEdBQWUsSUFBSSxDQUFDO1FBRTVCLGFBQU8sR0FBZSxJQUFJLENBQUM7O0lBOEN2QyxDQUFDO0lBdklHLHFCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztR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YztJQTFHbEIsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQXdKekI7SUFBRCxZQUFDO0NBeEpELEFBd0pDLENBeEprQyx1QkFBYSxHQXdKL0M7a0JBeEpvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwiLi4vY29uZmlnL1ZpZXdNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4uL2NvbmZpZy9VdGlsc1wiO1xyXG5pbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tIFwiLi4vLi4vLi4vMDBfYmFzZS9zY3JpcHQvY29tbW9uL0NvbXBvbmVudEJhc2VcIjtcclxuaW1wb3J0IHsgQWNjb3VudFR5cGUsIEV2ZW50TmFtZSwgSHR0cFBhdGgsIFZpZXdFbnVtLCBXaWRnZXRFbnVtIH0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWdcIjtcclxuaW1wb3J0IHsgQ29kZVN0cnVjdCwgQ291bnRyeUNvZGVEYXRhIH0gZnJvbSBcIi4uLy4uLy4uLzAwX2Jhc2Uvc2NyaXB0L2NvbW1vbi9Db3VudHJ5Q29kZVwiO1xyXG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gXCIuLi9jb25maWcvVXNlckluZm9cIjtcclxuaW1wb3J0IHsgVGlwcyB9IGZyb20gXCIuLi8uLi8uLi8wMF9iYXNlL3NjcmlwdC91aXV0aWxzL3RpcHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsb2dpbiBleHRlbmRzIENvbXBvbmVudEJhc2Uge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc2VsZWN0QnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGNvdW50cnlDb2RlOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICByZXNldEJ0bjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcmVnQnRuOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGhvbmVMb2dpbkJ0bjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbWFpbExvZ2luQnRuOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuVG91Y2hPbih0aGlzLnNlbGVjdEJ0biwgdGhpcy5vcGVuQ291bnRyeUNvZGUpO1xyXG4gICAgICAgIHRoaXMuVG91Y2hPbih0aGlzLnJlc2V0QnRuLCB0aGlzLm9wZW5SZXNldFBhbmVsKTtcclxuICAgICAgICB0aGlzLlRvdWNoT24odGhpcy5yZWdCdG4sIHRoaXMub3BlblJlZ1BhbmVsKTtcclxuICAgICAgICB0aGlzLlRvdWNoT24odGhpcy5waG9uZUxvZ2luQnRuLCB0aGlzLnBob25lTG9naW4pO1xyXG4gICAgICAgIHRoaXMuVG91Y2hPbih0aGlzLm1haWxMb2dpbkJ0biwgdGhpcy5tYWlsTG9naW4pO1xyXG5cclxuICAgICAgICB0aGlzLkV2ZW50T24oRXZlbnROYW1lLlNlbGVjdENvdW50cnlDb2RlLCB0aGlzLm9uU2VsZWN0Q291bnRyeUNvZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb3BlbkNvdW50cnlDb2RlKCkge1xyXG4gICAgICAgIFZpZXdNYW5hZ2VyLkFsZXJ0KFdpZGdldEVudW0uQ291bnRyeUNvZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25TZWxlY3RDb3VudHJ5Q29kZShpZHg6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBjb2RlT2JqOiBDb2RlU3RydWN0ID0gQ291bnRyeUNvZGVEYXRhW2lkeF07XHJcbiAgICAgICAgdGhpcy5jb3VudHJ5Q29kZS5zdHJpbmcgPSBjb2RlT2JqLmNvZGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOmHjee9ruWvhueggSAqL1xyXG4gICAgcHJpdmF0ZSBvcGVuUmVzZXRQYW5lbCgpIHtcclxuICAgICAgICBWaWV3TWFuYWdlci5PcGVuKFZpZXdFbnVtLlJlc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5rOo5YaM5paw6LSm5Y+3ICovXHJcbiAgICBwcml2YXRlIG9wZW5SZWdQYW5lbCgpIHtcclxuICAgICAgICBWaWV3TWFuYWdlci5PcGVuKFZpZXdFbnVtLlJlZyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgcGhvbmVBcmVhQ29kZTogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXHJcbiAgICBwcml2YXRlIHBob25lRWRpdDogY2MuRWRpdEJveCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcclxuICAgIHByaXZhdGUgcGhvbmVQd2Q6IGNjLkVkaXRCb3ggPSBudWxsO1xyXG5cclxuICAgIC8qKiDngrnlh7vkuobmiYvmnLrnmbvlvZXnmoTmjInpkq4gKi9cclxuICAgIHByaXZhdGUgYXN5bmMgcGhvbmVMb2dpbigpIHtcclxuICAgICAgICBsZXQgcGhvbmU6IHN0cmluZyA9IHRoaXMucGhvbmVFZGl0LnN0cmluZztcclxuICAgICAgICBsZXQgcHdkOiBzdHJpbmcgPSB0aGlzLnBob25lUHdkLnN0cmluZztcclxuICAgICAgICBsZXQgY29kZTogc3RyaW5nID0gdGhpcy5waG9uZUFyZWFDb2RlLnN0cmluZztcclxuICAgICAgICBpZiAoIVV0aWxzLklzUGhvbmUocGhvbmUpKSB7XHJcbiAgICAgICAgICAgIFRpcHMuU2hvdyhcIuivt+i+k+WFpeato+ehrueahOaJi+acuuWPtyFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHB3ZC5sZW5ndGggPCA2KSB7XHJcbiAgICAgICAgICAgIFRpcHMuU2hvdyhcIuWvhueggemVv+W6puS4jeWknyzoh7PlsJE25L2N5a2X56ymIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMucGhvbmVBcmVhQ29kZSB8fCBjb2RlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgVGlwcy5TaG93KFwi6K+36YCJ5oup5Yy65L2N56CBIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHBob25lQXJlYUNvZGU6IHRoaXMucGhvbmVBcmVhQ29kZS5zdHJpbmcsXHJcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiBwaG9uZSxcclxuICAgICAgICAgICAgbG9naW5Qd2Q6IHB3ZCxcclxuICAgICAgICAgICAgZGV2aWNlOiBVdGlscy5DaGVja0RldmljZVR5cGUoKSxcclxuICAgICAgICAgICAgZGV2aWNlSW5mbzogXCJcIixcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBcIlwiLFxyXG4gICAgICAgICAgICBsYXRpdHVkZTogXCJcIixcclxuICAgICAgICAgICAgaXA6IFwiXCIsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6K+35rGC5pWw5o2uXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG4gICAgICAgIGxldCByZXM6IGFueSA9IGF3YWl0IFV0aWxzLlBvc3QoSHR0cFBhdGgucGhvbmVMb2dpbiwgZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLnmbvlvZXmlbDmja7ov5Tlm55cIiwgSlNPTi5zdHJpbmdpZnkocmVzKSlcclxuICAgICAgICBpZiAocmVzLmNvZGUgIT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKFwi5omL5py655m76ZmG6K+35rGC6ZSZ6K+vXCIsIEh0dHBQYXRoLnBob25lTG9naW4sIEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBVc2VySW5mby51dWlkID0gcmVzLnV1aWQ7XHJcbiAgICAgICAgVXNlckluZm8ubmljayA9IHJlcy5kYXRhLm5hbWU7XHJcbiAgICAgICAgVXNlckluZm8uaGVhZFBpYyA9IHJlcy5kYXRhLmhlYWRQaWM7XHJcbiAgICAgICAgVXNlckluZm8uZ2VuZGVyID0gcmVzLmRhdGEuc2V4O1xyXG4gICAgICAgIFVzZXJJbmZvLnZpcFZhbGlkaXR5UGVyaW9kID0gcmVzLmRhdGEudmlwVmFsaWRpdHlQZXJpb2Q7XHJcbiAgICAgICAgVXNlckluZm8udmlwVHlwZSA9IHJlcy5kYXRhLnZpcFR5cGU7XHJcbiAgICAgICAgVXNlckluZm8udXVpZCA9IHJlcy51dWlkO1xyXG4gICAgICAgIFVzZXJJbmZvLnRva2VuID0gcmVzLmRhdGEudG9rZW47XHJcblxyXG4gICAgICAgIGF3YWl0IFZpZXdNYW5hZ2VyLkFsZXJ0KFdpZGdldEVudW0uQm90dG9tVG9nZ2xlKTtcclxuICAgICAgICBhd2FpdCBWaWV3TWFuYWdlci5PcGVuKFZpZXdFbnVtLkZhWGlhbik7XHJcbiAgICB9XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXHJcbiAgICBwcml2YXRlIG1haWxFZGl0OiBjYy5FZGl0Qm94ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxyXG4gICAgcHJpdmF0ZSBtYWlsUHdkOiBjYy5FZGl0Qm94ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIG1haWxMb2dpbigpIHtcclxuICAgICAgICBsZXQgbWFpbDogc3RyaW5nID0gdGhpcy5tYWlsRWRpdC5zdHJpbmc7XHJcbiAgICAgICAgbGV0IHB3ZDogc3RyaW5nID0gdGhpcy5tYWlsUHdkLnN0cmluZztcclxuICAgICAgICBpZiAoIVV0aWxzLklzTWFpbChtYWlsKSkge1xyXG4gICAgICAgICAgICBUaXBzLlNob3coXCLor7fovpPlhaXmraPnoa7nmoTpgq7nrrEhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwd2QubGVuZ3RoIDwgNikge1xyXG4gICAgICAgICAgICBUaXBzLlNob3coXCLlr4bnoIHplb/luqbkuI3lpJ8s6Iez5bCRNuS9jeWtl+espiFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICBlbWFpbDogbWFpbCxcclxuICAgICAgICAgICAgbG9naW5Qd2Q6IHB3ZCxcclxuICAgICAgICAgICAgaXA6IFwiXCIsXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogXCJcIixcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IFwiXCIsXHJcbiAgICAgICAgICAgIGRldmljZTogVXRpbHMuQ2hlY2tEZXZpY2VUeXBlKCksXHJcbiAgICAgICAgICAgIGRldmljZUluZm86IFwiXCIsXHJcbiAgICAgICAgICAgIHVzZXJBZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLor7fmsYLmlbDmja5cIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcbiAgICAgICAgbGV0IHJlczogYW55ID0gYXdhaXQgVXRpbHMuUG9zdChIdHRwUGF0aC5lbWFpbExvZ2luLCBkYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIueZu+W9leaVsOaNrui/lOWbnlwiLCBKU09OLnN0cmluZ2lmeShyZXMpKVxyXG4gICAgICAgIGlmIChyZXMuY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCLmiYvmnLrnmbvpmYbor7fmsYLplJnor69cIiwgSHR0cFBhdGguZW1haWxMb2dpbiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFVzZXJJbmZvLnV1aWQgPSByZXMudXVpZDtcclxuICAgICAgICBVc2VySW5mby5uaWNrID0gcmVzLmRhdGEubmFtZTtcclxuICAgICAgICBVc2VySW5mby5oZWFkUGljID0gcmVzLmRhdGEuaGVhZFBpYztcclxuICAgICAgICBVc2VySW5mby5nZW5kZXIgPSByZXMuZGF0YS5zZXg7XHJcbiAgICAgICAgVXNlckluZm8udmlwVmFsaWRpdHlQZXJpb2QgPSByZXMuZGF0YS52aXBWYWxpZGl0eVBlcmlvZDtcclxuICAgICAgICBVc2VySW5mby52aXBUeXBlID0gcmVzLmRhdGEudmlwVHlwZTtcclxuICAgICAgICBVc2VySW5mby51dWlkID0gcmVzLnV1aWQ7XHJcbiAgICAgICAgVXNlckluZm8udG9rZW4gPSByZXMuZGF0YS50b2tlbjtcclxuXHJcbiAgICAgICAgYXdhaXQgVmlld01hbmFnZXIuQWxlcnQoV2lkZ2V0RW51bS5Cb3R0b21Ub2dnbGUpO1xyXG4gICAgICAgIGF3YWl0IFZpZXdNYW5hZ2VyLk9wZW4oVmlld0VudW0uRmFYaWFuKTtcclxuICAgIH1cclxuXHJcbn0iXX0=