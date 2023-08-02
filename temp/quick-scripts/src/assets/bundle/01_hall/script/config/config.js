"use strict";
cc._RF.push(module, 'b24b9QQSnVPFqI0wZV2OSsV', 'config');
// bundle/01_hall/script/config/config.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceType = exports.UserSex = exports.EventName = exports.AccountType = exports.ComUseStr = exports.HttpPath = exports.GlobalConfig = exports.WidgetEnum = exports.ViewEnum = exports.config = void 0;
var bundleLoader_1 = require("../../../../script/bundleLoader");
var C_User_1 = require("./C_User");
var config = /** @class */ (function () {
    function config() {
    }
    Object.defineProperty(config, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new config();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    config.prototype.onloadConfig = function () {
        var _this = this;
        var bundle = bundleLoader_1.bundleLoader.ENUM_BUNDLE_SAVE[bundleLoader_1.bundleLoader.ENUM_BUNDLE.HALL];
        bundle.load("json/seatpos", function (err, asset) {
            if (err) {
                return cc.error(err);
            }
            C_User_1.C_User.ins.seatPJson = asset.json;
        });
        bundle.load("json/lightpos", function (err, asset) {
            if (err) {
                return cc.error(err);
            }
            C_User_1.C_User.ins.lightPJson = asset.json;
        });
        bundle.load("json/lang", function (err, asset) {
            if (err) {
                return cc.error(err);
            }
            _this._langObj = asset.json;
        });
    };
    config.prototype.getLang = function (id) {
        return this._langObj[id];
    };
    config._instance = null;
    return config;
}());
exports.config = config;
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
    WidgetEnum["JoinDesk"] = "joinDesk";
    WidgetEnum["GameSetting"] = "gameSetting";
    WidgetEnum["AlertAddClub"] = "alertAddClub";
})(WidgetEnum = exports.WidgetEnum || (exports.WidgetEnum = {}));
/** 全局配置参数 */
exports.GlobalConfig = {
    IPort: "175.27.169.117:4000",
};
/** http请求的路径整理 */
exports.HttpPath = {
    //App用户备注Controller
    userRemark: "/zs/userRemark/remark",
    queryUserRemark: "/zs/userRemark/query",
    //App用户Controller
    userSearch: "/zs/user/search",
    safetyValidate: "/zs/user/safetyValidate",
    userQuery: "/zs/user/query",
    userQueryConfig: "/zs/user/queryConfig",
    phoneReg: "/zs/user/phone/register",
    phoneLogin: "/zs/user/phone/login",
    phoneCaptcha: "/zs/user/phone/captcha",
    emailReg: "/zs/user/email/register",
    loginRecordCreate: "/zs/user/loginRecord/create",
    bingPhone: "/zs/user/loginInfo/bindPhone",
    emailRegister: "/zs/user/email/register",
    emailLogin: "/zs/user/email/login",
    emailCaptcha: "/zs/user/email/captcha",
    configUpdate: "/zs/user/config/update",
    baseInfoUpdate: "/zs/user/basic-info/update",
    applyToJoin: "/zs/user/applyToJoin",
    //上传Controller
    uploadIcon: "/zs/upload/icon",
    uploadClub: "/zs/upload/club",
    uploadAvatar: "/zs/upload/avatar",
    //联盟等级Controller
    unionLevelQuery: "/zs/unionLevel/query",
    unionLevelListQuery: "/zs/unionLevel/list/query",
    //联盟币Controller
    unionCoinRecycle: "/zs/unionCoin/recycle",
    unionCoinQuery: "/zs/unionCoin/query",
    unionCoinPageRecord: "/zs/unionCoin/pageRecord",
    unionCoinGrant: "/zs/unionCoin/grant",
    unionCoinCharge: "/zs/unionCoin/charge",
    //联盟Controller
    unionUpdate: "/zs/union/update",
    unionSearch: "/zs/union/search",
    unionRename: "/zs/union/rename",
    unionQuery: "/zs/union/query",
    unionPageApply: "/zs/union/page/apply",
    unionLevelUp: "/zs/union/levelUp",
    unionKickout: "/zs/union/kickout",
    unionDissolution: "/zs/union/dissolution",
    unionCreate: "/zs/union/create",
    unionReject: "/zs/union/apply/reject",
    unionAccept: "/zs/union/apply/accept",
    //道具Controller
    propsQuery: "/zs/props/query",
    propsList: "/zs/props/list",
    //消息通知Controller
    notifyQuery: "/zs/notify/query",
    notifyMarkRead: "/zs/notify/markRead",
    notifyList: "/zs/notify/list",
    //商品Controller
    goodsQuery: "/zs/goods/query",
    goodsList: "/zs/goods/list",
    //游戏Controller
    gameList: "/zs/game/list",
    //社交Controller
    friendsSearch: "/zs/friends/search",
    friendsReject: "/zs/friends/reject",
    friendsPage: "/zs/friends/page",
    friendsPageApply: "/zs/friends/pageApply",
    friendsDelete: "/zs/friends/delete",
    friendsApprove: "/zs/friends/approve",
    friendsApply: "/zs/friends/apply",
    //钻石记录Controller
    diamondRecordList: "/zs/diamondRecord/list",
    //桌子Controller
    queryByDeskCode: "/zs/desk/queryByDeskCode",
    deskList: "/zs/desk/list",
    deskCreate: "/zs/desk/create",
    deskConfig: "/zs/desk/configuration",
    //金币记录Controller
    coinRecordList: "/zs/coinRecord/list",
    //俱乐部玩家Controller
    setClubPlayerRole: "/zs/clubPlayer/setClubPlayerRole",
    pageClubPlayerQuery: "/zs/clubPlayer/pageClubPlayer/query",
    //俱乐部等级Controller
    clubLevelQuery: "/zs/clubLevel/query",
    clubLevelListQuery: "/zs/clubLevel/list/query",
    //俱乐部基金Controller
    clubFundQuery: "/zs/clubFund/query",
    clubFundPageRecord: "/zs/clubFund/pageRecord",
    clubFundGrant: "/zs/clubFund/grant",
    clubFundCharge: "/zs/clubFund/charge",
    //俱乐部币Controller
    clubCoinReject: "/zs/clubCoin/reject",
    clubCoinRecycle: "/zs/clubCoin/recycle",
    clubCoinQuery: "/zs/clubCoin/query",
    clubCoinPageRecord: "/zs/clubCoin/pageRecord",
    clubCoinPageApply: "/zs/clubCoin/pageApply",
    clubCoinGrant: "/zs/clubCoin/grant",
    clubCoinApply: "/zs/clubCoin/apply",
    clubCoinAccept: "/zs/clubCoin/accept",
    //俱乐部玩家申请及审批Controller
    clubApplyToJoinQuery: "/zs/clubApply/pageApplyToJoin/query",
    clubApplyReject: "/zs/clubApply/approve/reject",
    clubApplyAccept: "/zs/clubApply/approve/accept",
    //俱乐部Controller
    clubUpdate: "/zs/club/update",
    clubUnionQuit: "/zs/club/union/quit",
    unionClubPage: "/zs/club/union-club/page",
    clubSearch: "/zs/club/search",
    clubQuit: "/zs/club/quit",
    clubQuery: "/zs/club/query",
    clubListQuery: "/zs/club/list/query",
    clubLevelUp: "/zs/club/levelUp",
    clubJoinedPage: "/zs/club/joined/page",
    clubDissolution: "/zs/club/dissolution",
    clubCreate: "/zs/club/create",
    clubApplyToJoin: "/zs/club/applyToJoin",
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