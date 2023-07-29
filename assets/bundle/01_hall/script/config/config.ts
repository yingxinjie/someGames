/** 值对应预制体名称 */
export enum ViewEnum {
    Reset = "reset",
    Reg = 'reg',
    Login = "login",
    FaXian = "faxian",
    Create = "create0",
    Game = "game",
}

/** 弹出组件的枚举 */
export enum WidgetEnum {
    BottomToggle = "bottomtoggle",
    CountryCode = "countrycode",
}

/** 全局配置参数 */
export const GlobalConfig = {
    // IPort: "175.27.169.117:4000",
    IPort: "192.168.31.39:4000",

}

/** http请求的路径整理 */
export const HttpPath = {
    phoneReg: "/zs/user/phone/register",//手机注册
    phoneCaptcha: "/zs/user/phone/captcha",//手机验证码
    phoneLogin: "/zs/user/phone/login",//手机登录


    emailReg: "/zs/user/email/register",//邮箱注册
    emailCaptcha: "/zs/user/email/captcha",//邮箱验证码
    emailLogin: "/zs/user/email/login",//邮箱登录

    createJuLeBu: "/zs/club/create",//创建俱乐部
    queryAddedJuLeBu: "/zs/club/pagejoined/query",//查询已经加入的俱乐部
    queryCreatedJuLeBu: "/zs/club/list/query",//查询创建的俱乐部


    queryPerson: "/zs/user/query",
    login: "/user/login",
    userinfo: "/user/userinfo",
    update: "/user/update",
    getcode: "/user/getcode"
}

export enum ComUseStr {
    UrlParamAddressKey = "address",
}

/** 登录账号的类型枚举 */
export enum AccountType {
    nomall,
    Phone,
    Mail,
}

/** 事件名称枚举 */
export enum EventName {
    SelectCountryCode = "SelectCountryCode",
}

/** 性别 */
export enum UserSex {
    BOY = "BOY",
    GIRL = "GIRL",
}

/** 设备类型 */
export enum DeviceType {
    Android = "ANDROID",
    Ios = "IOS",
    Web = "WEB",
}
