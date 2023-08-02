
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
var C_User_1 = require("../config/C_User");
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
                        C_User_1.C_User.ins.me.uid = res.uuid;
                        C_User_1.C_User.ins.me.name = res.data.name;
                        C_User_1.C_User.ins.me.headPic = res.data.headPic;
                        C_User_1.C_User.ins.me.sex = res.data.sex;
                        C_User_1.C_User.ins.me.vipValidityPeriod = res.data.vipValidityPeriod;
                        C_User_1.C_User.ins.me.vipType = res.data.vipType;
                        C_User_1.C_User.ins.uid = res.uuid;
                        C_User_1.C_User.ins.token = res.data.token;
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
                        C_User_1.C_User.ins.uid = res.uuid;
                        C_User_1.C_User.ins.me.name = res.data.name;
                        C_User_1.C_User.ins.me.headPic = res.data.headPic;
                        C_User_1.C_User.ins.me.sex = res.data.sex;
                        C_User_1.C_User.ins.me.vipValidityPeriod = res.data.vipValidityPeriod;
                        C_User_1.C_User.ins.me.vipType = res.data.vipType;
                        C_User_1.C_User.ins.me.uid = res.uuid;
                        C_User_1.C_User.ins.token = res.data.token;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXHZpZXdcXGxvZ2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFvRDtBQUNwRCx5Q0FBd0M7QUFDeEMsOEVBQXlFO0FBQ3pFLDJDQUEwRjtBQUMxRiwwRUFBeUY7QUFDekYsMkNBQTBDO0FBQzFDLDZEQUE0RDtBQUV0RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtQyx5QkFBYTtJQUFoRDtRQUFBLHFFQXdKQztRQXJKRyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRzdCLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFFeEIsWUFBTSxHQUFZLElBQUksQ0FBQTtRQUd0QixtQkFBYSxHQUFZLElBQUksQ0FBQTtRQUU3QixrQkFBWSxHQUFZLElBQUksQ0FBQTtRQWlDcEIsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0IsZUFBUyxHQUFlLElBQUksQ0FBQztRQUU3QixjQUFRLEdBQWUsSUFBSSxDQUFDO1FBb0Q1QixjQUFRLEdBQWUsSUFBSSxDQUFDO1FBRTVCLGFBQU8sR0FBZSxJQUFJLENBQUM7O0lBOEN2QyxDQUFDO0lBdklHLHFCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBUyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFTywrQkFBZSxHQUF2QjtRQUNJLHlCQUFXLENBQUMsS0FBSyxDQUFDLG1CQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVPLG1DQUFtQixHQUEzQixVQUE0QixHQUFXO1FBQ25DLElBQUksT0FBTyxHQUFlLDZCQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztJQUMzQyxDQUFDO0lBRUQsV0FBVztJQUNILDhCQUFjLEdBQXRCO1FBQ0kseUJBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsWUFBWTtJQUNKLDRCQUFZLEdBQXBCO1FBQ0kseUJBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBVUQsaUJBQWlCO0lBQ0gsMEJBQVUsR0FBeEI7Ozs7Ozt3QkFDUSxLQUFLLEdBQVcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7d0JBQ3RDLEdBQUcsR0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzt3QkFDbkMsSUFBSSxHQUFXLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO3dCQUM3QyxJQUFJLENBQUMsYUFBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTs0QkFDdkIsV0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzs0QkFDeEIsc0JBQU87eUJBQ1Y7d0JBQ0QsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs0QkFDaEIsV0FBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOzRCQUM1QixzQkFBTzt5QkFDVjt3QkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLElBQUksRUFBRSxFQUFFOzRCQUNuQyxXQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzRCQUNyQixzQkFBTzt5QkFDVjt3QkFFRyxJQUFJLEdBQUc7NEJBQ1AsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTTs0QkFDeEMsV0FBVyxFQUFFLEtBQUs7NEJBQ2xCLFFBQVEsRUFBRSxHQUFHOzRCQUNiLE1BQU0sRUFBRSxhQUFLLENBQUMsZUFBZSxFQUFFOzRCQUMvQixVQUFVLEVBQUUsRUFBRTs0QkFDZCxTQUFTLEVBQUUsRUFBRTs0QkFDYixRQUFRLEVBQUUsRUFBRTs0QkFDWixFQUFFLEVBQUUsRUFBRTt5QkFDVCxDQUFBO3dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTt3QkFDMUIscUJBQU0sYUFBSyxDQUFDLElBQUksQ0FBQyxpQkFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsRUFBQTs7d0JBQXRELEdBQUcsR0FBUSxTQUEyQzt3QkFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO3dCQUMxQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFFOzRCQUNqQixFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxpQkFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQy9ELHNCQUFPO3lCQUNWO3dCQUVELGVBQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO3dCQUM3QixlQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7d0JBQ25DLGVBQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDekMsZUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO3dCQUNqQyxlQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO3dCQUM3RCxlQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ3pDLGVBQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7d0JBQzFCLGVBQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO3dCQUVsQyxxQkFBTSx5QkFBVyxDQUFDLEtBQUssQ0FBQyxtQkFBVSxDQUFDLFlBQVksQ0FBQyxFQUFBOzt3QkFBaEQsU0FBZ0QsQ0FBQzt3QkFDakQscUJBQU0seUJBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQVEsQ0FBQyxNQUFNLENBQUMsRUFBQTs7d0JBQXZDLFNBQXVDLENBQUM7Ozs7O0tBQzNDO0lBT2EseUJBQVMsR0FBdkI7Ozs7Ozt3QkFDUSxJQUFJLEdBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7d0JBQ3BDLEdBQUcsR0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQzt3QkFDdEMsSUFBSSxDQUFDLGFBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7NEJBQ3JCLFdBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7NEJBQ3ZCLHNCQUFPO3lCQUNWO3dCQUNELElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7NEJBQ2hCLFdBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs0QkFDNUIsc0JBQU87eUJBQ1Y7d0JBRUcsSUFBSSxHQUFHOzRCQUNQLEtBQUssRUFBRSxJQUFJOzRCQUNYLFFBQVEsRUFBRSxHQUFHOzRCQUNiLEVBQUUsRUFBRSxFQUFFOzRCQUNOLFNBQVMsRUFBRSxFQUFFOzRCQUNiLFFBQVEsRUFBRSxFQUFFOzRCQUNaLE1BQU0sRUFBRSxhQUFLLENBQUMsZUFBZSxFQUFFOzRCQUMvQixVQUFVLEVBQUUsRUFBRTs0QkFDZCxTQUFTLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUU7eUJBQy9DLENBQUE7d0JBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO3dCQUMxQixxQkFBTSxhQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxFQUFBOzt3QkFBdEQsR0FBRyxHQUFRLFNBQTJDO3dCQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7d0JBQzFDLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLEVBQUU7NEJBQ2pCLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLGlCQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDL0Qsc0JBQU87eUJBQ1Y7d0JBRUQsZUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQzt3QkFDMUIsZUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3dCQUNuQyxlQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ3pDLGVBQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzt3QkFDakMsZUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQzt3QkFDN0QsZUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO3dCQUN6QyxlQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQzt3QkFDN0IsZUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7d0JBRWxDLHFCQUFNLHlCQUFXLENBQUMsS0FBSyxDQUFDLG1CQUFVLENBQUMsWUFBWSxDQUFDLEVBQUE7O3dCQUFoRCxTQUFnRCxDQUFDO3dCQUNqRCxxQkFBTSx5QkFBVyxDQUFDLElBQUksQ0FBQyxpQkFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFBOzt3QkFBdkMsU0FBdUMsQ0FBQzs7Ozs7S0FDM0M7SUFuSkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNVO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNXO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1U7SUFpQzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ29CO0lBRXZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7NENBQ2dCO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7MkNBQ2U7SUFvRHBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7MkNBQ2U7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzswQ0FDYztJQTFHbEIsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQXdKekI7SUFBRCxZQUFDO0NBeEpELEFBd0pDLENBeEprQyx1QkFBYSxHQXdKL0M7a0JBeEpvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwiLi4vY29uZmlnL1ZpZXdNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4uL2NvbmZpZy9VdGlsc1wiO1xyXG5pbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tIFwiLi4vLi4vLi4vMDBfYmFzZS9zY3JpcHQvY29tbW9uL0NvbXBvbmVudEJhc2VcIjtcclxuaW1wb3J0IHsgQWNjb3VudFR5cGUsIEV2ZW50TmFtZSwgSHR0cFBhdGgsIFZpZXdFbnVtLCBXaWRnZXRFbnVtIH0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWdcIjtcclxuaW1wb3J0IHsgQ29kZVN0cnVjdCwgQ291bnRyeUNvZGVEYXRhIH0gZnJvbSBcIi4uLy4uLy4uLzAwX2Jhc2Uvc2NyaXB0L2NvbW1vbi9Db3VudHJ5Q29kZVwiO1xyXG5pbXBvcnQgeyBDX1VzZXIgfSBmcm9tIFwiLi4vY29uZmlnL0NfVXNlclwiO1xyXG5pbXBvcnQgeyBUaXBzIH0gZnJvbSBcIi4uLy4uLy4uLzAwX2Jhc2Uvc2NyaXB0L3VpdXRpbHMvdGlwc1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGxvZ2luIGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzZWxlY3RCdG46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgY291bnRyeUNvZGU6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHJlc2V0QnRuOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICByZWdCdG46IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwaG9uZUxvZ2luQnRuOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtYWlsTG9naW5CdG46IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5Ub3VjaE9uKHRoaXMuc2VsZWN0QnRuLCB0aGlzLm9wZW5Db3VudHJ5Q29kZSk7XHJcbiAgICAgICAgdGhpcy5Ub3VjaE9uKHRoaXMucmVzZXRCdG4sIHRoaXMub3BlblJlc2V0UGFuZWwpO1xyXG4gICAgICAgIHRoaXMuVG91Y2hPbih0aGlzLnJlZ0J0biwgdGhpcy5vcGVuUmVnUGFuZWwpO1xyXG4gICAgICAgIHRoaXMuVG91Y2hPbih0aGlzLnBob25lTG9naW5CdG4sIHRoaXMucGhvbmVMb2dpbik7XHJcbiAgICAgICAgdGhpcy5Ub3VjaE9uKHRoaXMubWFpbExvZ2luQnRuLCB0aGlzLm1haWxMb2dpbik7XHJcblxyXG4gICAgICAgIHRoaXMuRXZlbnRPbihFdmVudE5hbWUuU2VsZWN0Q291bnRyeUNvZGUsIHRoaXMub25TZWxlY3RDb3VudHJ5Q29kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvcGVuQ291bnRyeUNvZGUoKSB7XHJcbiAgICAgICAgVmlld01hbmFnZXIuQWxlcnQoV2lkZ2V0RW51bS5Db3VudHJ5Q29kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblNlbGVjdENvdW50cnlDb2RlKGlkeDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGNvZGVPYmo6IENvZGVTdHJ1Y3QgPSBDb3VudHJ5Q29kZURhdGFbaWR4XTtcclxuICAgICAgICB0aGlzLmNvdW50cnlDb2RlLnN0cmluZyA9IGNvZGVPYmouY29kZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog6YeN572u5a+G56CBICovXHJcbiAgICBwcml2YXRlIG9wZW5SZXNldFBhbmVsKCkge1xyXG4gICAgICAgIFZpZXdNYW5hZ2VyLk9wZW4oVmlld0VudW0uUmVzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDms6jlhozmlrDotKblj7cgKi9cclxuICAgIHByaXZhdGUgb3BlblJlZ1BhbmVsKCkge1xyXG4gICAgICAgIFZpZXdNYW5hZ2VyLk9wZW4oVmlld0VudW0uUmVnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBwaG9uZUFyZWFDb2RlOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcclxuICAgIHByaXZhdGUgcGhvbmVFZGl0OiBjYy5FZGl0Qm94ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxyXG4gICAgcHJpdmF0ZSBwaG9uZVB3ZDogY2MuRWRpdEJveCA9IG51bGw7XHJcblxyXG4gICAgLyoqIOeCueWHu+S6huaJi+acuueZu+W9leeahOaMiemSriAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBwaG9uZUxvZ2luKCkge1xyXG4gICAgICAgIGxldCBwaG9uZTogc3RyaW5nID0gdGhpcy5waG9uZUVkaXQuc3RyaW5nO1xyXG4gICAgICAgIGxldCBwd2Q6IHN0cmluZyA9IHRoaXMucGhvbmVQd2Quc3RyaW5nO1xyXG4gICAgICAgIGxldCBjb2RlOiBzdHJpbmcgPSB0aGlzLnBob25lQXJlYUNvZGUuc3RyaW5nO1xyXG4gICAgICAgIGlmICghVXRpbHMuSXNQaG9uZShwaG9uZSkpIHtcclxuICAgICAgICAgICAgVGlwcy5TaG93KFwi6K+36L6T5YWl5q2j56Gu55qE5omL5py65Y+3IVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHdkLmxlbmd0aCA8IDYpIHtcclxuICAgICAgICAgICAgVGlwcy5TaG93KFwi5a+G56CB6ZW/5bqm5LiN5aSfLOiHs+WwkTbkvY3lrZfnrKYhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5waG9uZUFyZWFDb2RlIHx8IGNvZGUgPT0gXCJcIikge1xyXG4gICAgICAgICAgICBUaXBzLlNob3coXCLor7fpgInmi6nljLrkvY3noIEhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgcGhvbmVBcmVhQ29kZTogdGhpcy5waG9uZUFyZWFDb2RlLnN0cmluZyxcclxuICAgICAgICAgICAgcGhvbmVOdW1iZXI6IHBob25lLFxyXG4gICAgICAgICAgICBsb2dpblB3ZDogcHdkLFxyXG4gICAgICAgICAgICBkZXZpY2U6IFV0aWxzLkNoZWNrRGV2aWNlVHlwZSgpLFxyXG4gICAgICAgICAgICBkZXZpY2VJbmZvOiBcIlwiLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IFwiXCIsXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBcIlwiLFxyXG4gICAgICAgICAgICBpcDogXCJcIixcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLor7fmsYLmlbDmja5cIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcbiAgICAgICAgbGV0IHJlczogYW55ID0gYXdhaXQgVXRpbHMuUG9zdChIdHRwUGF0aC5waG9uZUxvZ2luLCBkYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIueZu+W9leaVsOaNrui/lOWbnlwiLCBKU09OLnN0cmluZ2lmeShyZXMpKVxyXG4gICAgICAgIGlmIChyZXMuY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCLmiYvmnLrnmbvpmYbor7fmsYLplJnor69cIiwgSHR0cFBhdGgucGhvbmVMb2dpbiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIENfVXNlci5pbnMubWUudWlkID0gcmVzLnV1aWQ7XHJcbiAgICAgICAgQ19Vc2VyLmlucy5tZS5uYW1lID0gcmVzLmRhdGEubmFtZTtcclxuICAgICAgICBDX1VzZXIuaW5zLm1lLmhlYWRQaWMgPSByZXMuZGF0YS5oZWFkUGljO1xyXG4gICAgICAgIENfVXNlci5pbnMubWUuc2V4ID0gcmVzLmRhdGEuc2V4O1xyXG4gICAgICAgIENfVXNlci5pbnMubWUudmlwVmFsaWRpdHlQZXJpb2QgPSByZXMuZGF0YS52aXBWYWxpZGl0eVBlcmlvZDtcclxuICAgICAgICBDX1VzZXIuaW5zLm1lLnZpcFR5cGUgPSByZXMuZGF0YS52aXBUeXBlO1xyXG4gICAgICAgIENfVXNlci5pbnMudWlkID0gcmVzLnV1aWQ7XHJcbiAgICAgICAgQ19Vc2VyLmlucy50b2tlbiA9IHJlcy5kYXRhLnRva2VuO1xyXG5cclxuICAgICAgICBhd2FpdCBWaWV3TWFuYWdlci5BbGVydChXaWRnZXRFbnVtLkJvdHRvbVRvZ2dsZSk7XHJcbiAgICAgICAgYXdhaXQgVmlld01hbmFnZXIuT3BlbihWaWV3RW51bS5GYVhpYW4pO1xyXG4gICAgfVxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxyXG4gICAgcHJpdmF0ZSBtYWlsRWRpdDogY2MuRWRpdEJveCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcclxuICAgIHByaXZhdGUgbWFpbFB3ZDogY2MuRWRpdEJveCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBtYWlsTG9naW4oKSB7XHJcbiAgICAgICAgbGV0IG1haWw6IHN0cmluZyA9IHRoaXMubWFpbEVkaXQuc3RyaW5nO1xyXG4gICAgICAgIGxldCBwd2Q6IHN0cmluZyA9IHRoaXMubWFpbFB3ZC5zdHJpbmc7XHJcbiAgICAgICAgaWYgKCFVdGlscy5Jc01haWwobWFpbCkpIHtcclxuICAgICAgICAgICAgVGlwcy5TaG93KFwi6K+36L6T5YWl5q2j56Gu55qE6YKu566xIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHdkLmxlbmd0aCA8IDYpIHtcclxuICAgICAgICAgICAgVGlwcy5TaG93KFwi5a+G56CB6ZW/5bqm5LiN5aSfLOiHs+WwkTbkvY3lrZfnrKYhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgZW1haWw6IG1haWwsXHJcbiAgICAgICAgICAgIGxvZ2luUHdkOiBwd2QsXHJcbiAgICAgICAgICAgIGlwOiBcIlwiLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IFwiXCIsXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBcIlwiLFxyXG4gICAgICAgICAgICBkZXZpY2U6IFV0aWxzLkNoZWNrRGV2aWNlVHlwZSgpLFxyXG4gICAgICAgICAgICBkZXZpY2VJbmZvOiBcIlwiLFxyXG4gICAgICAgICAgICB1c2VyQWdlbnQ6IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6K+35rGC5pWw5o2uXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG4gICAgICAgIGxldCByZXM6IGFueSA9IGF3YWl0IFV0aWxzLlBvc3QoSHR0cFBhdGguZW1haWxMb2dpbiwgZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLnmbvlvZXmlbDmja7ov5Tlm55cIiwgSlNPTi5zdHJpbmdpZnkocmVzKSlcclxuICAgICAgICBpZiAocmVzLmNvZGUgIT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKFwi5omL5py655m76ZmG6K+35rGC6ZSZ6K+vXCIsIEh0dHBQYXRoLmVtYWlsTG9naW4sIEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBDX1VzZXIuaW5zLnVpZCA9IHJlcy51dWlkO1xyXG4gICAgICAgIENfVXNlci5pbnMubWUubmFtZSA9IHJlcy5kYXRhLm5hbWU7XHJcbiAgICAgICAgQ19Vc2VyLmlucy5tZS5oZWFkUGljID0gcmVzLmRhdGEuaGVhZFBpYztcclxuICAgICAgICBDX1VzZXIuaW5zLm1lLnNleCA9IHJlcy5kYXRhLnNleDtcclxuICAgICAgICBDX1VzZXIuaW5zLm1lLnZpcFZhbGlkaXR5UGVyaW9kID0gcmVzLmRhdGEudmlwVmFsaWRpdHlQZXJpb2Q7XHJcbiAgICAgICAgQ19Vc2VyLmlucy5tZS52aXBUeXBlID0gcmVzLmRhdGEudmlwVHlwZTtcclxuICAgICAgICBDX1VzZXIuaW5zLm1lLnVpZCA9IHJlcy51dWlkO1xyXG4gICAgICAgIENfVXNlci5pbnMudG9rZW4gPSByZXMuZGF0YS50b2tlbjtcclxuXHJcbiAgICAgICAgYXdhaXQgVmlld01hbmFnZXIuQWxlcnQoV2lkZ2V0RW51bS5Cb3R0b21Ub2dnbGUpO1xyXG4gICAgICAgIGF3YWl0IFZpZXdNYW5hZ2VyLk9wZW4oVmlld0VudW0uRmFYaWFuKTtcclxuICAgIH1cclxuXHJcbn0iXX0=