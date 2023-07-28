"use strict";
cc._RF.push(module, 'b24b9QQSnVPFqI0wZV2OSsV', 'config');
// bundle/01_hall/script/config/config.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceType = exports.UserSex = exports.EventName = exports.AccountType = exports.ComUseStr = exports.HttpPath = exports.GlobalConfig = exports.WidgetEnum = exports.ViewEnum = void 0;
/** 值对应预制体名称 */
var ViewEnum;
(function (ViewEnum) {
    ViewEnum["Reset"] = "reset";
    ViewEnum["Reg"] = "reg";
    ViewEnum["Login"] = "login";
    ViewEnum["FaXian"] = "faxian";
    ViewEnum["Create"] = "create0";
    ViewEnum["Game"] = "game";
})(ViewEnum = exports.ViewEnum || (exports.ViewEnum = {}));
/** 弹出组件的枚举 */
var WidgetEnum;
(function (WidgetEnum) {
    WidgetEnum["BottomToggle"] = "bottomtoggle";
    WidgetEnum["CountryCode"] = "countrycode";
})(WidgetEnum = exports.WidgetEnum || (exports.WidgetEnum = {}));
/** 全局配置参数 */
exports.GlobalConfig = {
    // IPort: "175.27.169.117:4000",
    IPort: "http://192.168.31.39:4000",
};
/** http请求的路径整理 */
exports.HttpPath = {
    phoneReg: "/zs/user/phone/register",
    phoneCaptcha: "/zs/user/phone/captcha",
    phoneLogin: "/zs/user/phone/login",
    emailReg: "/zs/user/email/register",
    emailCaptcha: "/zs/user/email/captcha",
    emailLogin: "/zs/user/email/login",
    createJuLeBu: "/zs/club/create",
    queryAddedJuLeBu: "/zs/club/pagejoined/query",
    queryCreatedJuLeBu: "/zs/club/list/query",
    queryPerson: "/zs/user/query",
    login: "/user/login",
    userinfo: "/user/userinfo",
    update: "/user/update",
    getcode: "/user/getcode"
};
var ComUseStr;
(function (ComUseStr) {
    ComUseStr["UrlParamAddressKey"] = "address";
})(ComUseStr = exports.ComUseStr || (exports.ComUseStr = {}));
/** 登录账号的类型枚举 */
var AccountType;
(function (AccountType) {
    AccountType[AccountType["nomall"] = 0] = "nomall";
    AccountType[AccountType["Phone"] = 1] = "Phone";
    AccountType[AccountType["Mail"] = 2] = "Mail";
})(AccountType = exports.AccountType || (exports.AccountType = {}));
/** 事件名称枚举 */
var EventName;
(function (EventName) {
    EventName["SelectCountryCode"] = "SelectCountryCode";
})(EventName = exports.EventName || (exports.EventName = {}));
/** 性别 */
var UserSex;
(function (UserSex) {
    UserSex["BOY"] = "BOY";
    UserSex["GIRL"] = "GIRL";
})(UserSex = exports.UserSex || (exports.UserSex = {}));
/** 设备类型 */
var DeviceType;
(function (DeviceType) {
    DeviceType["Android"] = "ANDROID";
    DeviceType["Ios"] = "IOS";
    DeviceType["Web"] = "WEB";
})(DeviceType = exports.DeviceType || (exports.DeviceType = {}));

cc._RF.pop();