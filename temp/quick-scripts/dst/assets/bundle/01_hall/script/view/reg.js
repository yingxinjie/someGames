
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXHZpZXdcXHJlZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBb0Q7QUFDcEQsMEVBQXlGO0FBQ3pGLDJDQUFtRztBQUNuRyw4RUFBeUU7QUFDekUseUNBQXdDO0FBQ3hDLGdGQUEyRTtBQUMzRSw2REFBNEQ7QUFFdEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBaUMsdUJBQWE7SUFBOUM7UUFBQSxxRUFtTkM7UUFqTkcsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QiwwQkFBb0IsR0FBWSxJQUFJLENBQUM7UUEwQjdCLGlCQUFXLEdBQWEsSUFBSSxDQUFBO1FBRTVCLHNCQUFnQixHQUFZLElBQUksQ0FBQztRQUVqQyxlQUFTLEdBQWUsSUFBSSxDQUFBO1FBRTVCLG1CQUFhLEdBQWUsSUFBSSxDQUFBO1FBRWhDLGtCQUFZLEdBQWUsSUFBSSxDQUFDO1FBRWhDLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBMEZyQyw4QkFBOEI7UUFFOUIscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFFeEIsY0FBUSxHQUFlLElBQUksQ0FBQTtRQUUzQixrQkFBWSxHQUFlLElBQUksQ0FBQTtRQUUvQixpQkFBVyxHQUFlLElBQUksQ0FBQztRQUUvQixpQkFBVyxHQUFZLElBQUksQ0FBQzs7SUF1RXhDLENBQUM7SUE1TUcsbUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFD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O1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7eUNBQ2M7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs2Q0FDa0I7SUFFdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs0Q0FDa0I7SUFFdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDa0I7SUE1SW5CLEdBQUc7UUFEdkIsT0FBTztPQUNhLEdBQUcsQ0FtTnZCO0lBQUQsVUFBQztDQW5ORCxBQW1OQyxDQW5OZ0MsdUJBQWEsR0FtTjdDO2tCQW5Ob0IsR0FBRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcIi4uL2NvbmZpZy9WaWV3TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBDb2RlU3RydWN0LCBDb3VudHJ5Q29kZURhdGEgfSBmcm9tIFwiLi4vLi4vLi4vMDBfYmFzZS9zY3JpcHQvY29tbW9uL0NvdW50cnlDb2RlXCI7XHJcbmltcG9ydCB7IEFjY291bnRUeXBlLCBFdmVudE5hbWUsIEh0dHBQYXRoLCBVc2VyU2V4LCBWaWV3RW51bSwgV2lkZ2V0RW51bSB9IGZyb20gXCIuLi9jb25maWcvY29uZmlnXCI7XHJcbmltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gXCIuLi8uLi8uLi8wMF9iYXNlL3NjcmlwdC9jb21tb24vQ29tcG9uZW50QmFzZVwiO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi9jb25maWcvVXRpbHNcIjtcclxuaW1wb3J0IFRpbWVUaWNrZXJEb3duIGZyb20gXCIuLi8uLi8uLi8wMF9iYXNlL3NjcmlwdC9jb21tb24vVGltZVRpY2tlckRvd25cIjtcclxuaW1wb3J0IHsgVGlwcyB9IGZyb20gXCIuLi8uLi8uLi8wMF9iYXNlL3NjcmlwdC91aXV0aWxzL3RpcHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByZWcgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFja0J0bjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNlbGVjdENvdW50cnlDb2RlQnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5Ub3VjaE9uKHRoaXMuYmFja0J0biwgdGhpcy5iYWNrTG9naW4pO1xyXG5cclxuICAgICAgICB0aGlzLlRvdWNoT24odGhpcy5zZWxlY3RDb3VudHJ5Q29kZUJ0biwgdGhpcy5vcGVuQ291bnRyeUNvZGUpO1xyXG4gICAgICAgIHRoaXMuVG91Y2hPbih0aGlzLnNlbmRQaG9uZUNvZGVCdG4sIHRoaXMub25TZW5kUGhvbmVDb2RlKTtcclxuICAgICAgICB0aGlzLlRvdWNoT24odGhpcy5waG9uZU5leHRCdG4sIHRoaXMubmV4dFBob25lQWNjb3VudCk7XHJcblxyXG4gICAgICAgIHRoaXMuVG91Y2hPbih0aGlzLnNlbmRNYWlsQ29kZUJ0biwgdGhpcy5vblNlbmRNYWlsQ29kZSk7XHJcbiAgICAgICAgdGhpcy5Ub3VjaE9uKHRoaXMubWFpbE5leHRCdG4sIHRoaXMubmV4dE1haWxBY2NvdW50KVxyXG4gICAgICAgIHRoaXMuRXZlbnRPbihFdmVudE5hbWUuU2VsZWN0Q291bnRyeUNvZGUsIHRoaXMub25TZWxlY3RDb3VudHJ5Q29kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBiYWNrTG9naW4oKSB7XHJcbiAgICAgICAgVmlld01hbmFnZXIuT3BlbihWaWV3RW51bS5Mb2dpbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvcGVuQ291bnRyeUNvZGUoKSB7XHJcbiAgICAgICAgVmlld01hbmFnZXIuQWxlcnQoV2lkZ2V0RW51bS5Db3VudHJ5Q29kZSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIGNvdW50cnlDb2RlOiBjYy5MYWJlbCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBzZW5kUGhvbmVDb2RlQnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxyXG4gICAgcHJpdmF0ZSBwaG9uZUVkaXQ6IGNjLkVkaXRCb3ggPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcclxuICAgIHByaXZhdGUgcGhvbmVDb2RlRWRpdDogY2MuRWRpdEJveCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxyXG4gICAgcHJpdmF0ZSBwaG9uZVB3ZEVkaXQ6IGNjLkVkaXRCb3ggPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIHBob25lTmV4dEJ0bjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIHByaXZhdGUgb25TZWxlY3RDb3VudHJ5Q29kZShpZHg6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBjb2RlT2JqOiBDb2RlU3RydWN0ID0gQ291bnRyeUNvZGVEYXRhW2lkeF07XHJcbiAgICAgICAgdGhpcy5jb3VudHJ5Q29kZS5zdHJpbmcgPSBjb2RlT2JqLmNvZGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOaJi+acuumqjOivgeeggSAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBvblNlbmRQaG9uZUNvZGUoKSB7XHJcbiAgICAgICAgbGV0IHR0ZCA9IHRoaXMuc2VuZFBob25lQ29kZUJ0bi5nZXRDb21wb25lbnQoVGltZVRpY2tlckRvd24pIGFzIFRpbWVUaWNrZXJEb3duO1xyXG4gICAgICAgIGlmICh0dGQuZG93bikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcGhvbmUgPSB0aGlzLnBob25lRWRpdC5zdHJpbmc7XHJcbiAgICAgICAgbGV0IGFyZWFDb2RlID0gdGhpcy5jb3VudHJ5Q29kZS5zdHJpbmc7XHJcbiAgICAgICAgaWYgKCFVdGlscy5Jc1Bob25lKHBob25lKSkge1xyXG4gICAgICAgICAgICBUaXBzLlNob3coXCLmiYvmnLrlj7fplJnor68hXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYXJlYUNvZGUgPT0gXCJcIikge1xyXG4gICAgICAgICAgICBUaXBzLlNob3coXCLlm73pmYXnoIHkuI3og73kuLrnqbohXCIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByZXM6IHsgY29kZTogbnVtYmVyLCBtc2c6IHN0cmluZyB9ID0gYXdhaXQgVXRpbHMuUG9zdChIdHRwUGF0aC5waG9uZUNhcHRjaGEsIHsgcGhvbmVBcmVhQ29kZTogYXJlYUNvZGUsIHBob25lTnVtYmVyOiBwaG9uZSB9KSBhcyB1bmtub3duIGFzIHsgY29kZTogbnVtYmVyLCBtc2c6IHN0cmluZyB9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6K+35rGC5omL5py66aqM6K+B56CBXCIsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG4gICAgICAgIGlmIChyZXMuY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoYOivt+axgumqjOivgeeggeWksei0pSznqI3lkI7lho3or5UhYClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgVGlwcy5TaG93KFwi6aqM6K+B56CB5bey5Y+R6YCBIVwiKVxyXG4gICAgICAgIHR0ZC5ydW4oKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIC8qKiDmiYvmnLrms6jlhowgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgbmV4dFBob25lQWNjb3VudCgpIHtcclxuICAgICAgICBsZXQgcGhvbmU6IHN0cmluZyA9IHRoaXMucGhvbmVFZGl0LnN0cmluZztcclxuICAgICAgICBsZXQgcHdkOiBzdHJpbmcgPSB0aGlzLnBob25lUHdkRWRpdC5zdHJpbmc7XHJcbiAgICAgICAgbGV0IHl6bTogc3RyaW5nID0gdGhpcy5waG9uZUNvZGVFZGl0LnN0cmluZztcclxuICAgICAgICBsZXQgYXJlYUNvZGU6IHN0cmluZyA9IHRoaXMuY291bnRyeUNvZGUuc3RyaW5nO1xyXG4gICAgICAgIGlmICghVXRpbHMuSXNQaG9uZShwaG9uZSkpIHtcclxuICAgICAgICAgICAgVGlwcy5TaG93KFwi5omL5py65Y+35LiN5a+5IVwiKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh5em0ubGVuZ3RoIDwgNikge1xyXG4gICAgICAgICAgICBUaXBzLlNob3coXCLpqozor4HnoIHloavlhpnplJnor69cIilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHdkLmxlbmd0aCA8IDYpIHtcclxuICAgICAgICAgICAgVGlwcy5TaG93KFwi5a+G56CB5LiN6IO95bCP5LqONuS9jSFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyZWFDb2RlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgVGlwcy5TaG93KFwi5Zu96ZmF56CB5LiN6IO95Li656m6IVwiKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaW5mbyA9IHtcclxuICAgICAgICAgICAgXCJwaG9uZUFyZWFDb2RlXCI6IGFyZWFDb2RlLC8v5Yy65Y+3XHJcbiAgICAgICAgICAgIFwicGhvbmVOdW1iZXJcIjogcGhvbmUsLy/miYvmnLrlj7dcclxuICAgICAgICAgICAgXCJsb2dpblB3ZFwiOiBwd2QsLy/lr4bnoIFcclxuICAgICAgICAgICAgXCJjYXB0Y2hhXCI6IHl6bSwvL+mqjOivgeeggVxyXG4gICAgICAgICAgICBcInNleFwiOiBVc2VyU2V4LkJPWSwvL+aAp+WIq1xyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiBcIlwiLC8vXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogXCJcIixcclxuICAgICAgICAgICAgXCJpcFwiOiBcIlwiLFxyXG4gICAgICAgICAgICBcImRldmljZVwiOiBVdGlscy5DaGVja0RldmljZVR5cGUoKSxcclxuICAgICAgICAgICAgXCJkZXZpY2VJbmZvXCI6IFwiXCIsXHJcbiAgICAgICAgICAgIFwidXNlckFnZW50XCI6IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5omL5py65rOo5YaM5L+h5oGvXCIsIEpTT04uc3RyaW5naWZ5KGluZm8pKTtcclxuICAgICAgICBsZXQgcmVzOiB7IGNvZGU6IG51bWJlciwgbXNnOiBzdHJpbmcgfSA9IGF3YWl0IFV0aWxzLlBvc3QoSHR0cFBhdGgucGhvbmVSZWcsIGluZm8pIGFzIHVua25vd24gYXMgeyBjb2RlOiBudW1iZXIsIG1zZzogc3RyaW5nIH07XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmiYvmnLrms6jlhozov5Tlm57kv6Hmga9cIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcbiAgICAgICAgaWYgKHJlcy5jb2RlICE9IDIwMCkge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihg5rOo5YaM5aSx6LSlLGNvZGU6JHtyZXMuY29kZX1gKTtcclxuICAgICAgICAgICAgVGlwcy5TaG93KFwi5rOo5YaM5aSx6LSlLOeojeWQjuWGjeivlSFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFRpcHMuU2hvdyhcIuazqOWGjOaIkOWKnyFcIik7XHJcbiAgICAgICAgVmlld01hbmFnZXIuT3BlbihWaWV3RW51bS5Mb2dpbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzZW5kTWFpbENvZGVCdG46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXHJcbiAgICBwcml2YXRlIG1haWxFZGl0OiBjYy5FZGl0Qm94ID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXHJcbiAgICBwcml2YXRlIG1haWxDb2RlRWRpdDogY2MuRWRpdEJveCA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxyXG4gICAgcHJpdmF0ZSBtYWlsUHdkRWRpdDogY2MuRWRpdEJveCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgbWFpbE5leHRCdG46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8qKiDpgq7nrrHpqozor4HnoIEgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgb25TZW5kTWFpbENvZGUoKSB7XHJcbiAgICAgICAgbGV0IHR0ZCA9IHRoaXMuc2VuZE1haWxDb2RlQnRuLmdldENvbXBvbmVudChUaW1lVGlja2VyRG93bikgYXMgVGltZVRpY2tlckRvd247XHJcbiAgICAgICAgaWYgKHR0ZC5kb3duKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBtYWlsID0gdGhpcy5tYWlsRWRpdC5zdHJpbmc7XHJcbiAgICAgICAgaWYgKCFVdGlscy5Jc01haWwobWFpbCkpIHtcclxuICAgICAgICAgICAgVGlwcy5TaG93KFwi6YKu566x5qC85byP6ZSZ6K+vIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJlczogeyBjb2RlOiBudW1iZXIsIG1zZzogc3RyaW5nIH0gPSBhd2FpdCBVdGlscy5Qb3N0KEh0dHBQYXRoLmVtYWlsQ2FwdGNoYSwgeyBlbWFpbDogbWFpbCB9KSBhcyB1bmtub3duIGFzIHsgY29kZTogbnVtYmVyLCBtc2c6IHN0cmluZyB9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6K+35rGC6YKu566x6aqM6K+B56CBXCIsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG4gICAgICAgIGlmIChyZXMuY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoYOivt+axgumqjOivgeeggeWksei0pSznqI3lkI7lho3or5UhYCk7XHJcbiAgICAgICAgICAgIFRpcHMuU2hvdyhcIumqjOivgeeggeiOt+WPluWksei0pSznqI3lkI7lho3or5UhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgVGlwcy5TaG93KFwi6aqM6K+B56CB5bey5Y+R6YCBLOivt+WIsOmCrueuseafpeaUtiFcIik7XHJcbiAgICAgICAgdHRkLnJ1bigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDpgq7nrrHms6jlhowgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgbmV4dE1haWxBY2NvdW50KCkge1xyXG4gICAgICAgIGxldCBtYWlsOiBzdHJpbmcgPSB0aGlzLm1haWxFZGl0LnN0cmluZztcclxuICAgICAgICBsZXQgcHdkOiBzdHJpbmcgPSB0aGlzLm1haWxQd2RFZGl0LnN0cmluZztcclxuICAgICAgICBsZXQgeXptOiBzdHJpbmcgPSB0aGlzLm1haWxDb2RlRWRpdC5zdHJpbmc7XHJcbiAgICAgICAgaWYgKCFVdGlscy5Jc01haWwobWFpbCkpIHtcclxuICAgICAgICAgICAgVGlwcy5TaG93KFwi6YKu566x5qC85byP5LiN5a+5IVwiKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh5em0ubGVuZ3RoIDwgNikge1xyXG4gICAgICAgICAgICBUaXBzLlNob3coXCLpqozor4HnoIHplb/luqbplJnor69cIilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHdkLmxlbmd0aCA8IDYpIHtcclxuICAgICAgICAgICAgVGlwcy5TaG93KFwi5a+G56CB5LiN6IO95bCP5LqONuS9jSFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpbmZvID0ge1xyXG4gICAgICAgICAgICBcImVtYWlsXCI6IG1haWwsXHJcbiAgICAgICAgICAgIFwibG9naW5Qd2RcIjogcHdkLFxyXG4gICAgICAgICAgICBcImNhcHRjaGFcIjogeXptLFxyXG4gICAgICAgICAgICBcInNleFwiOiBVc2VyU2V4LkJPWSxcclxuICAgICAgICAgICAgXCJpcFwiOiBcIlwiLFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiBcIlwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IFwiXCIsXHJcbiAgICAgICAgICAgIFwiZGV2aWNlXCI6IFV0aWxzLkNoZWNrRGV2aWNlVHlwZSgpLFxyXG4gICAgICAgICAgICBcImRldmljZUluZm9cIjogXCJcIixcclxuICAgICAgICAgICAgXCJ1c2VyQWdlbnRcIjogbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcIumCrueuseazqOWGjOS/oeaBr1wiLCBKU09OLnN0cmluZ2lmeShpbmZvKSk7XHJcbiAgICAgICAgbGV0IHJlczogeyBjb2RlOiBudW1iZXIsIG1zZzogc3RyaW5nIH0gPSBhd2FpdCBVdGlscy5Qb3N0KEh0dHBQYXRoLmVtYWlsUmVnLCBpbmZvKSBhcyB1bmtub3duIGFzIHsgY29kZTogbnVtYmVyLCBtc2c6IHN0cmluZyB9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6YKu566x5rOo5YaM5L+h5oGv6L+U5ZueXCIsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG4gICAgICAgIGlmIChyZXMuY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoYOazqOWGjOWksei0pSxjb2RlOiR7cmVzLmNvZGV9YCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFRpcHMuU2hvdyhcIuazqOWGjOaIkOWKnyFcIik7XHJcbiAgICAgICAgVmlld01hbmFnZXIuT3BlbihWaWV3RW51bS5Mb2dpbik7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=