
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/01_hall/script/config/config.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b24b9QQSnVPFqI0wZV2OSsV', 'config');
// bundle/01_hall/script/config/config.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VipType = exports.DeviceType = exports.UserSex = exports.EventName = exports.AccountType = exports.ComUseStr = exports.HttpPath = exports.GlobalConfig = exports.WidgetEnum = exports.ViewEnum = exports.config = void 0;
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
/** vip类型 */
var VipType;
(function (VipType) {
    VipType["BLUE"] = "BLUE";
    VipType["GOLD"] = "GOLD";
    VipType["PLATINUM"] = "PLATINUM";
})(VipType = exports.VipType || (exports.VipType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXGNvbmZpZ1xcY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUErRDtBQUMvRCxtQ0FBa0M7QUFFbEM7SUFXSTtJQUVBLENBQUM7SUFURCxzQkFBa0Isa0JBQVE7YUFBMUI7WUFDSSxJQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQztnQkFDZixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7YUFDakM7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFNTSw2QkFBWSxHQUFuQjtRQUFBLGlCQXFCQztRQXBCRyxJQUFJLE1BQU0sR0FBRywyQkFBWSxDQUFDLGdCQUFnQixDQUFDLDJCQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLFVBQUMsR0FBRyxFQUFFLEtBQW1CO1lBQ2pELElBQUksR0FBRyxFQUFFO2dCQUNMLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTthQUN2QjtZQUNELGVBQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUE7UUFDckMsQ0FBQyxDQUFDLENBQUE7UUFFRixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxVQUFDLEdBQUcsRUFBRSxLQUFtQjtZQUNsRCxJQUFJLEdBQUcsRUFBRTtnQkFDTCxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7YUFDdkI7WUFDRCxlQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFBO1FBQ3RDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsVUFBQyxHQUFHLEVBQUUsS0FBbUI7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QUNYLElBQVksVUFJWDtBQUpELFdBQVksVUFBVTtJQUNsQixpQ0FBbUIsQ0FBQTtJQUNuQix5QkFBVyxDQUFBO0lBQ1gseUJBQVcsQ0FBQTtBQUNmLENBQUMsRUFKVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUlyQjtBQUVELFlBQVk7QUFDWixJQUFZLE9BSVg7QUFKRCxXQUFZLE9BQU87SUFDZix3QkFBYSxDQUFBO0lBQ2Isd0JBQWEsQ0FBQTtJQUNiLGdDQUFxQixDQUFBO0FBQ3pCLENBQUMsRUFKVyxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFJbEIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBidW5kbGVMb2FkZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2NyaXB0L2J1bmRsZUxvYWRlclwiO1xyXG5pbXBvcnQgeyBDX1VzZXIgfSBmcm9tIFwiLi9DX1VzZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBjb25maWd7XHJcbiAgICBwcml2YXRlIF9sYW5nT2JqOk9iamVjdDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIF9pbnN0YW5jZTogY29uZmlnID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6Y29uZmlne1xyXG4gICAgICAgIGlmKCF0aGlzLl9pbnN0YW5jZSl7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IGNvbmZpZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9ubG9hZENvbmZpZygpIHtcclxuICAgICAgICBsZXQgYnVuZGxlID0gYnVuZGxlTG9hZGVyLkVOVU1fQlVORExFX1NBVkVbYnVuZGxlTG9hZGVyLkVOVU1fQlVORExFLkhBTExdO1xyXG4gICAgICAgIGJ1bmRsZS5sb2FkKFwianNvbi9zZWF0cG9zXCIsIChlcnIsIGFzc2V0OiBjYy5Kc29uQXNzZXQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNjLmVycm9yKGVycilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBDX1VzZXIuaW5zLnNlYXRQSnNvbiA9IGFzc2V0Lmpzb25cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBidW5kbGUubG9hZChcImpzb24vbGlnaHRwb3NcIiwgKGVyciwgYXNzZXQ6IGNjLkpzb25Bc3NldCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2MuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIENfVXNlci5pbnMubGlnaHRQSnNvbiA9IGFzc2V0Lmpzb25cclxuICAgICAgICB9KVxyXG4gICAgICAgIGJ1bmRsZS5sb2FkKFwianNvbi9sYW5nXCIsIChlcnIsIGFzc2V0OiBjYy5Kc29uQXNzZXQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNjLmVycm9yKGVycilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9sYW5nT2JqID0gYXNzZXQuanNvblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldExhbmcoaWQ6IG51bWJlcik6c3RyaW5ne1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sYW5nT2JqW2lkXTtcclxuICAgIH1cclxufVxyXG4vKiog5YC85a+55bqU6aKE5Yi25L2T5ZCN56ewICovXHJcbmV4cG9ydCBlbnVtIFZpZXdFbnVtIHtcclxuICAgIFJlc2V0ID0gXCJyZXNldFwiLFxyXG4gICAgUmVnID0gJ3JlZycsXHJcbiAgICBMb2dpbiA9IFwibG9naW5cIixcclxuICAgIEZhWGlhbiA9IFwiZmF4aWFuXCIsXHJcbiAgICBDcmVhdGUgPSBcImNyZWF0ZTBcIixcclxuICAgIEdhbWUgPSBcImdhbWVcIixcclxufVxyXG5cclxuLyoqIOW8ueWHuue7hOS7tueahOaemuS4viAqL1xyXG5leHBvcnQgZW51bSBXaWRnZXRFbnVtIHtcclxuICAgIEJvdHRvbVRvZ2dsZSA9IFwiYm90dG9tdG9nZ2xlXCIsXHJcbiAgICBDb3VudHJ5Q29kZSA9IFwiY291bnRyeWNvZGVcIixcclxuICAgIEpvaW5EZXNrID0gXCJqb2luRGVza1wiLFxyXG4gICAgR2FtZVNldHRpbmcgPSBcImdhbWVTZXR0aW5nXCIsXHJcbiAgICBBbGVydEFkZENsdWIgPSBcImFsZXJ0QWRkQ2x1YlwiLFxyXG59XHJcblxyXG4vKiog5YWo5bGA6YWN572u5Y+C5pWwICovXHJcbmV4cG9ydCBjb25zdCBHbG9iYWxDb25maWcgPSB7XHJcbiAgICBJUG9ydDogXCIxNzUuMjcuMTY5LjExNzo0MDAwXCIsXHJcbiAgICAvLyBJUG9ydDogXCIxOTIuMTY4LjMxLjM5OjQwMDBcIixcclxuXHJcbn1cclxuXHJcbi8qKiBodHRw6K+35rGC55qE6Lev5b6E5pW055CGICovXHJcbmV4cG9ydCBjb25zdCBIdHRwUGF0aCA9IHtcclxuICAgIC8vQXBw55So5oi35aSH5rOoQ29udHJvbGxlclxyXG4gICAgdXNlclJlbWFyazpcIi96cy91c2VyUmVtYXJrL3JlbWFya1wiLC8v546p5a625aSH5rOoXHJcbiAgICBxdWVyeVVzZXJSZW1hcms6XCIvenMvdXNlclJlbWFyay9xdWVyeVwiLC8v5p+l6K+i5aSH5rOoXHJcbiAgICAvL0FwcOeUqOaIt0NvbnRyb2xsZXJcclxuICAgIHVzZXJTZWFyY2g6XCIvenMvdXNlci9zZWFyY2hcIiwvL+agueaNruWFs+mUruWtl+afpeivoueUqOaIt+S/oeaBr++8jOeUqOaIt+e8luWPt+aIlueUqOaIt+WQjeensFxyXG4gICAgc2FmZXR5VmFsaWRhdGU6XCIvenMvdXNlci9zYWZldHlWYWxpZGF0ZVwiLC8v5a6J5YWo6aqM6K+BXHJcbiAgICB1c2VyUXVlcnk6XCIvenMvdXNlci9xdWVyeVwiLC8v5Liq5Lq65L+h5oGv5p+l6K+iXHJcbiAgICB1c2VyUXVlcnlDb25maWc6XCIvenMvdXNlci9xdWVyeUNvbmZpZ1wiLC8v5Liq5Lq66K6+572u5p+l6K+iXHJcbiAgICBwaG9uZVJlZzogXCIvenMvdXNlci9waG9uZS9yZWdpc3RlclwiLC8v5omL5py65rOo5YaMXHJcbiAgICBwaG9uZUxvZ2luOiBcIi96cy91c2VyL3Bob25lL2xvZ2luXCIsLy/miYvmnLrnmbvlvZVcclxuICAgIHBob25lQ2FwdGNoYTogXCIvenMvdXNlci9waG9uZS9jYXB0Y2hhXCIsLy/miYvmnLrpqozor4HnoIFcclxuICAgIGVtYWlsUmVnOiBcIi96cy91c2VyL2VtYWlsL3JlZ2lzdGVyXCIsLy/pgq7nrrHms6jlhoxcclxuICAgIGxvZ2luUmVjb3JkQ3JlYXRlOlwiL3pzL3VzZXIvbG9naW5SZWNvcmQvY3JlYXRlXCIsLy/mnIDlkI7nmbvlvZXkv6Hmga/mm7TmlrBcclxuICAgIGJpbmdQaG9uZTpcIi96cy91c2VyL2xvZ2luSW5mby9iaW5kUGhvbmVcIiwvL+e7keWumuaJi+acuuaIluiAhemCrueusVxyXG4gICAgZW1haWxSZWdpc3RlcjpcIi96cy91c2VyL2VtYWlsL3JlZ2lzdGVyXCIsLy/nu5HlrprmiYvmnLrmiJbogIXpgq7nrrFcclxuICAgIGVtYWlsTG9naW46IFwiL3pzL3VzZXIvZW1haWwvbG9naW5cIiwvL+mCrueuseeZu+W9lVxyXG4gICAgZW1haWxDYXB0Y2hhOiBcIi96cy91c2VyL2VtYWlsL2NhcHRjaGFcIiwvL+mCrueusemqjOivgeeggVxyXG4gICAgY29uZmlnVXBkYXRlOlwiL3pzL3VzZXIvY29uZmlnL3VwZGF0ZVwiLC8v5Liq5Lq66YWN572u5L+h5oGv5pu05pawXHJcbiAgICBiYXNlSW5mb1VwZGF0ZTpcIi96cy91c2VyL2Jhc2ljLWluZm8vdXBkYXRlXCIsLy/ln7rnoYDkv6Hmga/mm7TmlrBcclxuICAgIGFwcGx5VG9Kb2luOlwiL3pzL3VzZXIvYXBwbHlUb0pvaW5cIiwvL+eUqOaIt+eUs+ivt+WKoOWFpeS/seS5kOmDqFxyXG4gICAgLy/kuIrkvKBDb250cm9sbGVyXHJcbiAgICB1cGxvYWRJY29uOlwiL3pzL3VwbG9hZC9pY29uXCIsLy/ogZTnm5/lm77moIdcclxuICAgIHVwbG9hZENsdWI6XCIvenMvdXBsb2FkL2NsdWJcIiwvL+S/seS5kOmDqOWbvuagh1xyXG4gICAgdXBsb2FkQXZhdGFyOlwiL3pzL3VwbG9hZC9hdmF0YXJcIiwvL+eOqeWutuWktOWDj1xyXG4gICAgLy/ogZTnm5/nrYnnuqdDb250cm9sbGVyXHJcbiAgICB1bmlvbkxldmVsUXVlcnk6XCIvenMvdW5pb25MZXZlbC9xdWVyeVwiLC8v6IGU55uf562J57qn5p+l6K+iXHJcbiAgICB1bmlvbkxldmVsTGlzdFF1ZXJ5OlwiL3pzL3VuaW9uTGV2ZWwvbGlzdC9xdWVyeVwiLC8v5YiX6KGo5p+l6K+i5Yib5bu655qE6IGU55uf562J57qnXHJcbiAgICAvL+iBlOebn+W4gUNvbnRyb2xsZXJcclxuICAgIHVuaW9uQ29pblJlY3ljbGU6XCIvenMvdW5pb25Db2luL3JlY3ljbGVcIiwvL+iBlOebn+W4geWbnuaUtlxyXG4gICAgdW5pb25Db2luUXVlcnk6XCIvenMvdW5pb25Db2luL3F1ZXJ5XCIsLy/ogZTnm5/luIHmtYHmsLTor6bmg4VcclxuICAgIHVuaW9uQ29pblBhZ2VSZWNvcmQ6XCIvenMvdW5pb25Db2luL3BhZ2VSZWNvcmRcIiwvL+iBlOebn+W4gea1geawtOafpeivolxyXG4gICAgdW5pb25Db2luR3JhbnQ6XCIvenMvdW5pb25Db2luL2dyYW50XCIsLy/ogZTnm5/luIHlj5HmlL5cclxuICAgIHVuaW9uQ29pbkNoYXJnZTpcIi96cy91bmlvbkNvaW4vY2hhcmdlXCIsLy/ogZTnm5/luIHlhYXlgLxcclxuICAgIC8v6IGU55ufQ29udHJvbGxlclxyXG4gICAgdW5pb25VcGRhdGU6IFwiL3pzL3VuaW9uL3VwZGF0ZVwiLC8v5pu05pawXHJcbiAgICB1bmlvblNlYXJjaDogXCIvenMvdW5pb24vc2VhcmNoXCIsLy/mkJzntKJcclxuICAgIHVuaW9uUmVuYW1lOiBcIi96cy91bmlvbi9yZW5hbWVcIiwvL+abtOaUueWQjeensFxyXG4gICAgdW5pb25RdWVyeTpcIi96cy91bmlvbi9xdWVyeVwiLC8v5p+l6K+iXHJcbiAgICB1bmlvblBhZ2VBcHBseTpcIi96cy91bmlvbi9wYWdlL2FwcGx5XCIsLy/liIbpobXmn6Xor6Lkv7HkuZDpg6jnlLPor7fliJfooahcclxuICAgIHVuaW9uTGV2ZWxVcDpcIi96cy91bmlvbi9sZXZlbFVwXCIsLy/mj5DljYfnrYnnuqdcclxuICAgIHVuaW9uS2lja291dDpcIi96cy91bmlvbi9raWNrb3V0XCIsLy/miorkv7HkuZDpg6jmj5Dlh7rogZTnm59cclxuICAgIHVuaW9uRGlzc29sdXRpb246XCIvenMvdW5pb24vZGlzc29sdXRpb25cIiwvL+ino+aVo1xyXG4gICAgdW5pb25DcmVhdGU6XCIvenMvdW5pb24vY3JlYXRlXCIsLy/liJvlu7pcclxuICAgIHVuaW9uUmVqZWN0OlwiL3pzL3VuaW9uL2FwcGx5L3JlamVjdFwiLC8v5ouS57ud5L+x5LmQ6YOo55Sz6K+3XHJcbiAgICB1bmlvbkFjY2VwdDpcIi96cy91bmlvbi9hcHBseS9hY2NlcHRcIiwvL+WQjOaEj+S/seS5kOmDqOeUs+ivt1xyXG4gICAgLy/pgZPlhbdDb250cm9sbGVyXHJcbiAgICBwcm9wc1F1ZXJ5OlwiL3pzL3Byb3BzL3F1ZXJ5XCIsLy/mn6Xor6LpgZPlhbfor6bmg4VcclxuICAgIHByb3BzTGlzdDogXCIvenMvcHJvcHMvbGlzdFwiLC8v5p+l6K+i6YGT5YW35YiX6KGoXHJcbiAgICAvL+a2iOaBr+mAmuefpUNvbnRyb2xsZXJcclxuICAgIG5vdGlmeVF1ZXJ5OiBcIi96cy9ub3RpZnkvcXVlcnlcIiwvL+mAmuefpeafpeivolxyXG4gICAgbm90aWZ5TWFya1JlYWQ6IFwiL3pzL25vdGlmeS9tYXJrUmVhZFwiLC8v5om56YeP5bey6K+7XHJcbiAgICBub3RpZnlMaXN0OlwiL3pzL25vdGlmeS9saXN0XCIsLy/liJfooajmn6Xor6JcclxuICAgIC8v5ZWG5ZOBQ29udHJvbGxlclxyXG4gICAgZ29vZHNRdWVyeTpcIi96cy9nb29kcy9xdWVyeVwiLC8v5p+l6K+i5ZWG5ZOB6K+m5oOFXHJcbiAgICBnb29kc0xpc3Q6XCIvenMvZ29vZHMvbGlzdFwiLC8v5p+l6K+i5ZWG5ZOB5YiX6KGoXHJcbiAgICAvL+a4uOaIj0NvbnRyb2xsZXJcclxuICAgIGdhbWVMaXN0OlwiL3pzL2dhbWUvbGlzdFwiLC8v5YiX6KGo5p+l6K+iXHJcbiAgICAvL+ekvuS6pENvbnRyb2xsZXJcclxuICAgIGZyaWVuZHNTZWFyY2g6XCIvenMvZnJpZW5kcy9zZWFyY2hcIiwvL+WlveWPi+afpeivolxyXG4gICAgZnJpZW5kc1JlamVjdDpcIi96cy9mcmllbmRzL3JlamVjdFwiLC8v5aW95Y+L55Sz6K+35ouS57udXHJcbiAgICBmcmllbmRzUGFnZTpcIi96cy9mcmllbmRzL3BhZ2VcIiwvL+WlveWPi+WIl+ihqFxyXG4gICAgZnJpZW5kc1BhZ2VBcHBseTpcIi96cy9mcmllbmRzL3BhZ2VBcHBseVwiLC8v5aW95Y+L55Sz6K+35YiX6KGo5p+l6K+iXHJcbiAgICBmcmllbmRzRGVsZXRlOlwiL3pzL2ZyaWVuZHMvZGVsZXRlXCIsLy/lpb3lj4vliKDpmaRcclxuICAgIGZyaWVuZHNBcHByb3ZlOlwiL3pzL2ZyaWVuZHMvYXBwcm92ZVwiLC8v5aW95Y+L55Sz6K+36YCa6L+HXHJcbiAgICBmcmllbmRzQXBwbHk6XCIvenMvZnJpZW5kcy9hcHBseVwiLC8v5aW95Y+L55Sz6K+3XHJcbiAgICAvL+mSu+efs+iusOW9lUNvbnRyb2xsZXJcclxuICAgIGRpYW1vbmRSZWNvcmRMaXN0OlwiL3pzL2RpYW1vbmRSZWNvcmQvbGlzdFwiLC8v5YiX6KGo5p+l6K+iXHJcbiAgICAvL+ahjOWtkENvbnRyb2xsZXJcclxuICAgIHF1ZXJ5QnlEZXNrQ29kZTpcIi96cy9kZXNrL3F1ZXJ5QnlEZXNrQ29kZVwiLC8v5qC55o2u5qGM5a2Q55qEY29kZeafpeivouahjOWtkOS/oeaBr1xyXG4gICAgZGVza0xpc3Q6XCIvenMvZGVzay9saXN0XCIsLy/liJfooajmn6Xor6JcclxuICAgIGRlc2tDcmVhdGU6XCIvenMvZGVzay9jcmVhdGVcIiwvL+WIm+W7ulxyXG4gICAgZGVza0NvbmZpZzpcIi96cy9kZXNrL2NvbmZpZ3VyYXRpb25cIiwvL+ahjOWtkOmFjee9rumhueafpeivolxyXG4gICAgLy/ph5HluIHorrDlvZVDb250cm9sbGVyXHJcbiAgICBjb2luUmVjb3JkTGlzdDpcIi96cy9jb2luUmVjb3JkL2xpc3RcIiwvL+mHkeW4geiusOW9lVxyXG4gICAgLy/kv7HkuZDpg6jnjqnlrrZDb250cm9sbGVyXHJcbiAgICBzZXRDbHViUGxheWVyUm9sZTpcIi96cy9jbHViUGxheWVyL3NldENsdWJQbGF5ZXJSb2xlXCIsLy/kuLrkv7HkuZDpg6jmt7vliqDmlrDop5LoibJcclxuICAgIHBhZ2VDbHViUGxheWVyUXVlcnk6XCIvenMvY2x1YlBsYXllci9wYWdlQ2x1YlBsYXllci9xdWVyeVwiLC8v5YiG6aG15p+l6K+i5L+x5LmQ6YOo5Lya5ZGY5YiX6KGoXHJcbiAgICAvL+S/seS5kOmDqOetiee6p0NvbnRyb2xsZXJcclxuICAgIGNsdWJMZXZlbFF1ZXJ5OlwiL3pzL2NsdWJMZXZlbC9xdWVyeVwiLC8v5p+l6K+i5L+x5LmQ6YOo562J57qnXHJcbiAgICBjbHViTGV2ZWxMaXN0UXVlcnk6XCIvenMvY2x1YkxldmVsL2xpc3QvcXVlcnlcIiwvL+WIl+ihqOafpeivouWIm+W7uueahOS/seS5kOmDqOetiee6p1xyXG4gICAgLy/kv7HkuZDpg6jln7rph5FDb250cm9sbGVyXHJcbiAgICBjbHViRnVuZFF1ZXJ5OlwiL3pzL2NsdWJGdW5kL3F1ZXJ5XCIsLy/kv7HkuZDpg6jln7rph5HmtYHmsLTor6bmg4VcclxuICAgIGNsdWJGdW5kUGFnZVJlY29yZDpcIi96cy9jbHViRnVuZC9wYWdlUmVjb3JkXCIsLy/kv7HkuZDpg6jln7rph5HmtYHmsLTmn6Xor6JcclxuICAgIGNsdWJGdW5kR3JhbnQ6XCIvenMvY2x1YkZ1bmQvZ3JhbnRcIiwvL+S/seS5kOmDqOWfuumHkeWPkeaUvlxyXG4gICAgY2x1YkZ1bmRDaGFyZ2U6XCIvenMvY2x1YkZ1bmQvY2hhcmdlXCIsLy/kv7HkuZDpg6jln7rph5HlhYXlgLxcclxuICAgIC8v5L+x5LmQ6YOo5biBQ29udHJvbGxlclxyXG4gICAgY2x1YkNvaW5SZWplY3Q6XCIvenMvY2x1YkNvaW4vcmVqZWN0XCIsLy/kv7HkuZDpg6jluIHnlLPor7fmi5Lnu51cclxuICAgIGNsdWJDb2luUmVjeWNsZTpcIi96cy9jbHViQ29pbi9yZWN5Y2xlXCIsLy/kv7HkuZDpg6jluIHlm57mlLZcclxuICAgIGNsdWJDb2luUXVlcnk6XCIvenMvY2x1YkNvaW4vcXVlcnlcIiwvL+S/seS5kOmDqOW4gea1geawtOivpuaDhVxyXG4gICAgY2x1YkNvaW5QYWdlUmVjb3JkOlwiL3pzL2NsdWJDb2luL3BhZ2VSZWNvcmRcIiwvL+S/seS5kOmDqOW4gea1geawtOafpeivolxyXG4gICAgY2x1YkNvaW5QYWdlQXBwbHk6XCIvenMvY2x1YkNvaW4vcGFnZUFwcGx5XCIsLy/kv7HkuZDpg6jluIHnlLPor7fliJfooajmn6Xor6JcclxuICAgIGNsdWJDb2luR3JhbnQ6XCIvenMvY2x1YkNvaW4vZ3JhbnRcIiwvL+S/seS5kOmDqOW4geWPkeaUvlxyXG4gICAgY2x1YkNvaW5BcHBseTpcIi96cy9jbHViQ29pbi9hcHBseVwiLC8v5L+x5LmQ6YOo5biB55Sz6K+3XHJcbiAgICBjbHViQ29pbkFjY2VwdDpcIi96cy9jbHViQ29pbi9hY2NlcHRcIiwvL+S/seS5kOmDqOW4geeUs+ivt+WuoeaJuVxyXG4gICAgLy/kv7HkuZDpg6jnjqnlrrbnlLPor7flj4rlrqHmiblDb250cm9sbGVyXHJcbiAgICBjbHViQXBwbHlUb0pvaW5RdWVyeTpcIi96cy9jbHViQXBwbHkvcGFnZUFwcGx5VG9Kb2luL3F1ZXJ5XCIsLy/liIbpobXmn6Xor6LnlKjmiLfnlLPor7fliqDlhaXkv7HkuZDpg6jliJfooahcclxuICAgIGNsdWJBcHBseVJlamVjdDpcIi96cy9jbHViQXBwbHkvYXBwcm92ZS9yZWplY3RcIiwvL+eUqOaIt+S/seS5kOmDqOeUs+ivt+WuoeaJueaLkue7neaTjeS9nFxyXG4gICAgY2x1YkFwcGx5QWNjZXB0OlwiL3pzL2NsdWJBcHBseS9hcHByb3ZlL2FjY2VwdFwiLC8v55So5oi35L+x5LmQ6YOo55Sz6K+35a6h5om56YCa6L+H5pON5L2cXHJcbiAgICAvL+S/seS5kOmDqENvbnRyb2xsZXJcclxuICAgIGNsdWJVcGRhdGU6XCIvenMvY2x1Yi91cGRhdGVcIiwvL+abtOaWsFxyXG4gICAgY2x1YlVuaW9uUXVpdDpcIi96cy9jbHViL3VuaW9uL3F1aXRcIiwvL+S/seS5kOmDqOmAgOWHuuiBlOebn1xyXG4gICAgdW5pb25DbHViUGFnZTpcIi96cy9jbHViL3VuaW9uLWNsdWIvcGFnZVwiLC8v5YiG6aG15p+l6K+i6IGU55uf55qE5L+x5LmQ6YOoXHJcbiAgICBjbHViU2VhcmNoOlwiL3pzL2NsdWIvc2VhcmNoXCIsLy/moLnmja7lhbPplK7lrZfmn6Xor6Lkv7HkuZDpg6jkv6Hmga/vvIzkv7HkuZDpg6jnvJblj7fmiJbkv7HkuZDpg6jlkI3np7BcclxuICAgIGNsdWJRdWl0OlwiL3pzL2NsdWIvcXVpdFwiLC8v6YCA5Ye65L+x5LmQ6YOoXHJcbiAgICBjbHViUXVlcnk6XCIvenMvY2x1Yi9xdWVyeVwiLC8v5p+l6K+i5L+x5LmQ6YOo5L+h5oGvXHJcbiAgICBjbHViTGlzdFF1ZXJ5OlwiL3pzL2NsdWIvbGlzdC9xdWVyeVwiLC8v5YiX6KGo5p+l6K+i5Yib5bu655qE5L+x5LmQ6YOoXHJcbiAgICBjbHViTGV2ZWxVcDpcIi96cy9jbHViL2xldmVsVXBcIiwvL+S/seS5kOmDqOaPkOWNh+etiee6p1xyXG4gICAgY2x1YkpvaW5lZFBhZ2U6XCIvenMvY2x1Yi9qb2luZWQvcGFnZVwiLC8v5YiG6aG15p+l6K+i5bey57uP5Yqg5YWl55qE5L+x5LmQ6YOoXHJcbiAgICBjbHViRGlzc29sdXRpb246XCIvenMvY2x1Yi9kaXNzb2x1dGlvblwiLC8v5Yig6Zmk6Kej5pWjXHJcbiAgICBjbHViQ3JlYXRlOlwiL3pzL2NsdWIvY3JlYXRlXCIsLy/liJvlu7pcclxuICAgIGNsdWJBcHBseVRvSm9pbjpcIi96cy9jbHViL2FwcGx5VG9Kb2luXCIsLy/kv7HkuZDpg6jnlLPor7fliqDlhaXogZTnm59cclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ29tVXNlU3RyIHtcclxuICAgIFVybFBhcmFtQWRkcmVzc0tleSA9IFwiYWRkcmVzc1wiLFxyXG59XHJcblxyXG4vKiog55m75b2V6LSm5Y+355qE57G75Z6L5p6a5Li+ICovXHJcbmV4cG9ydCBlbnVtIEFjY291bnRUeXBlIHtcclxuICAgIG5vbWFsbCxcclxuICAgIFBob25lLFxyXG4gICAgTWFpbCxcclxufVxyXG5cclxuLyoqIOS6i+S7tuWQjeensOaemuS4viAqL1xyXG5leHBvcnQgZW51bSBFdmVudE5hbWUge1xyXG4gICAgU2VsZWN0Q291bnRyeUNvZGUgPSBcIlNlbGVjdENvdW50cnlDb2RlXCIsXHJcbn1cclxuXHJcbi8qKiDmgKfliKsgKi9cclxuZXhwb3J0IGVudW0gVXNlclNleCB7XHJcbiAgICBCT1kgPSBcIkJPWVwiLFxyXG4gICAgR0lSTCA9IFwiR0lSTFwiLFxyXG59XHJcblxyXG4vKiog6K6+5aSH57G75Z6LICovXHJcbmV4cG9ydCBlbnVtIERldmljZVR5cGUge1xyXG4gICAgQW5kcm9pZCA9IFwiQU5EUk9JRFwiLFxyXG4gICAgSW9zID0gXCJJT1NcIixcclxuICAgIFdlYiA9IFwiV0VCXCIsXHJcbn1cclxuXHJcbi8qKiB2aXDnsbvlnosgKi9cclxuZXhwb3J0IGVudW0gVmlwVHlwZSB7XHJcbiAgICBCTFVFID0gXCJCTFVFXCIsXHJcbiAgICBHT0xEID0gXCJHT0xEXCIsXHJcbiAgICBQTEFUSU5VTSA9IFwiUExBVElOVU1cIixcclxufVxyXG4iXX0=