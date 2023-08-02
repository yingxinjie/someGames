
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXGNvbmZpZ1xcY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUErRDtBQUMvRCxtQ0FBa0M7QUFFbEM7SUFXSTtJQUVBLENBQUM7SUFURCxzQkFBa0Isa0JBQVE7YUFBMUI7WUFDSSxJQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQztnQkFDZixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7YUFDakM7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFNTSw2QkFBWSxHQUFuQjtRQUFBLGlCQXFCQztRQXBCRyxJQUFJLE1BQU0sR0FBRywyQkFBWSxDQUFDLGdCQUFnQixDQUFDLDJCQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLFVBQUMsR0FBRyxFQUFFLEtBQW1CO1lBQ2pELElBQUksR0FBRyxFQUFFO2dCQUNMLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTthQUN2QjtZQUNELGVBQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUE7UUFDckMsQ0FBQyxDQUFDLENBQUE7UUFFRixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxVQUFDLEdBQUcsRUFBRSxLQUFtQjtZQUNsRCxJQUFJLEdBQUcsRUFBRTtnQkFDTCxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7YUFDdkI7WUFDRCxlQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFBO1FBQ3RDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsVUFBQyxHQUFHLEVBQUUsS0FBbUI7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QUNYLElBQVksVUFJWDtBQUpELFdBQVksVUFBVTtJQUNsQixpQ0FBbUIsQ0FBQTtJQUNuQix5QkFBVyxDQUFBO0lBQ1gseUJBQVcsQ0FBQTtBQUNmLENBQUMsRUFKVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUlyQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJ1bmRsZUxvYWRlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9zY3JpcHQvYnVuZGxlTG9hZGVyXCI7XHJcbmltcG9ydCB7IENfVXNlciB9IGZyb20gXCIuL0NfVXNlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIGNvbmZpZ3tcclxuICAgIHByaXZhdGUgX2xhbmdPYmo6T2JqZWN0O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgX2luc3RhbmNlOiBjb25maWcgPSBudWxsO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTpjb25maWd7XHJcbiAgICAgICAgaWYoIXRoaXMuX2luc3RhbmNlKXtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgY29uZmlnKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25sb2FkQ29uZmlnKCkge1xyXG4gICAgICAgIGxldCBidW5kbGUgPSBidW5kbGVMb2FkZXIuRU5VTV9CVU5ETEVfU0FWRVtidW5kbGVMb2FkZXIuRU5VTV9CVU5ETEUuSEFMTF07XHJcbiAgICAgICAgYnVuZGxlLmxvYWQoXCJqc29uL3NlYXRwb3NcIiwgKGVyciwgYXNzZXQ6IGNjLkpzb25Bc3NldCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2MuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIENfVXNlci5pbnMuc2VhdFBKc29uID0gYXNzZXQuanNvblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGJ1bmRsZS5sb2FkKFwianNvbi9saWdodHBvc1wiLCAoZXJyLCBhc3NldDogY2MuSnNvbkFzc2V0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjYy5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQ19Vc2VyLmlucy5saWdodFBKc29uID0gYXNzZXQuanNvblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYnVuZGxlLmxvYWQoXCJqc29uL2xhbmdcIiwgKGVyciwgYXNzZXQ6IGNjLkpzb25Bc3NldCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2MuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2xhbmdPYmogPSBhc3NldC5qc29uXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TGFuZyhpZDogbnVtYmVyKTpzdHJpbmd7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xhbmdPYmpbaWRdO1xyXG4gICAgfVxyXG59XHJcbi8qKiDlgLzlr7nlupTpooTliLbkvZPlkI3np7AgKi9cclxuZXhwb3J0IGVudW0gVmlld0VudW0ge1xyXG4gICAgUmVzZXQgPSBcInJlc2V0XCIsXHJcbiAgICBSZWcgPSAncmVnJyxcclxuICAgIExvZ2luID0gXCJsb2dpblwiLFxyXG4gICAgRmFYaWFuID0gXCJmYXhpYW5cIixcclxuICAgIENyZWF0ZSA9IFwiY3JlYXRlMFwiLFxyXG4gICAgR2FtZSA9IFwiZ2FtZVwiLFxyXG59XHJcblxyXG4vKiog5by55Ye657uE5Lu255qE5p6a5Li+ICovXHJcbmV4cG9ydCBlbnVtIFdpZGdldEVudW0ge1xyXG4gICAgQm90dG9tVG9nZ2xlID0gXCJib3R0b210b2dnbGVcIixcclxuICAgIENvdW50cnlDb2RlID0gXCJjb3VudHJ5Y29kZVwiLFxyXG4gICAgSm9pbkRlc2sgPSBcImpvaW5EZXNrXCIsXHJcbiAgICBHYW1lU2V0dGluZyA9IFwiZ2FtZVNldHRpbmdcIixcclxuICAgIEFsZXJ0QWRkQ2x1YiA9IFwiYWxlcnRBZGRDbHViXCIsXHJcbn1cclxuXHJcbi8qKiDlhajlsYDphY3nva7lj4LmlbAgKi9cclxuZXhwb3J0IGNvbnN0IEdsb2JhbENvbmZpZyA9IHtcclxuICAgIElQb3J0OiBcIjE3NS4yNy4xNjkuMTE3OjQwMDBcIixcclxuICAgIC8vIElQb3J0OiBcIjE5Mi4xNjguMzEuMzk6NDAwMFwiLFxyXG5cclxufVxyXG5cclxuLyoqIGh0dHDor7fmsYLnmoTot6/lvoTmlbTnkIYgKi9cclxuZXhwb3J0IGNvbnN0IEh0dHBQYXRoID0ge1xyXG4gICAgLy9BcHDnlKjmiLflpIfms6hDb250cm9sbGVyXHJcbiAgICB1c2VyUmVtYXJrOlwiL3pzL3VzZXJSZW1hcmsvcmVtYXJrXCIsLy/njqnlrrblpIfms6hcclxuICAgIHF1ZXJ5VXNlclJlbWFyazpcIi96cy91c2VyUmVtYXJrL3F1ZXJ5XCIsLy/mn6Xor6LlpIfms6hcclxuICAgIC8vQXBw55So5oi3Q29udHJvbGxlclxyXG4gICAgdXNlclNlYXJjaDpcIi96cy91c2VyL3NlYXJjaFwiLC8v5qC55o2u5YWz6ZSu5a2X5p+l6K+i55So5oi35L+h5oGv77yM55So5oi357yW5Y+35oiW55So5oi35ZCN56ewXHJcbiAgICBzYWZldHlWYWxpZGF0ZTpcIi96cy91c2VyL3NhZmV0eVZhbGlkYXRlXCIsLy/lronlhajpqozor4FcclxuICAgIHVzZXJRdWVyeTpcIi96cy91c2VyL3F1ZXJ5XCIsLy/kuKrkurrkv6Hmga/mn6Xor6JcclxuICAgIHVzZXJRdWVyeUNvbmZpZzpcIi96cy91c2VyL3F1ZXJ5Q29uZmlnXCIsLy/kuKrkurrorr7nva7mn6Xor6JcclxuICAgIHBob25lUmVnOiBcIi96cy91c2VyL3Bob25lL3JlZ2lzdGVyXCIsLy/miYvmnLrms6jlhoxcclxuICAgIHBob25lTG9naW46IFwiL3pzL3VzZXIvcGhvbmUvbG9naW5cIiwvL+aJi+acuueZu+W9lVxyXG4gICAgcGhvbmVDYXB0Y2hhOiBcIi96cy91c2VyL3Bob25lL2NhcHRjaGFcIiwvL+aJi+acuumqjOivgeeggVxyXG4gICAgZW1haWxSZWc6IFwiL3pzL3VzZXIvZW1haWwvcmVnaXN0ZXJcIiwvL+mCrueuseazqOWGjFxyXG4gICAgbG9naW5SZWNvcmRDcmVhdGU6XCIvenMvdXNlci9sb2dpblJlY29yZC9jcmVhdGVcIiwvL+acgOWQjueZu+W9leS/oeaBr+abtOaWsFxyXG4gICAgYmluZ1Bob25lOlwiL3pzL3VzZXIvbG9naW5JbmZvL2JpbmRQaG9uZVwiLC8v57uR5a6a5omL5py65oiW6ICF6YKu566xXHJcbiAgICBlbWFpbFJlZ2lzdGVyOlwiL3pzL3VzZXIvZW1haWwvcmVnaXN0ZXJcIiwvL+e7keWumuaJi+acuuaIluiAhemCrueusVxyXG4gICAgZW1haWxMb2dpbjogXCIvenMvdXNlci9lbWFpbC9sb2dpblwiLC8v6YKu566x55m75b2VXHJcbiAgICBlbWFpbENhcHRjaGE6IFwiL3pzL3VzZXIvZW1haWwvY2FwdGNoYVwiLC8v6YKu566x6aqM6K+B56CBXHJcbiAgICBjb25maWdVcGRhdGU6XCIvenMvdXNlci9jb25maWcvdXBkYXRlXCIsLy/kuKrkurrphY3nva7kv6Hmga/mm7TmlrBcclxuICAgIGJhc2VJbmZvVXBkYXRlOlwiL3pzL3VzZXIvYmFzaWMtaW5mby91cGRhdGVcIiwvL+WfuuehgOS/oeaBr+abtOaWsFxyXG4gICAgYXBwbHlUb0pvaW46XCIvenMvdXNlci9hcHBseVRvSm9pblwiLC8v55So5oi355Sz6K+35Yqg5YWl5L+x5LmQ6YOoXHJcbiAgICAvL+S4iuS8oENvbnRyb2xsZXJcclxuICAgIHVwbG9hZEljb246XCIvenMvdXBsb2FkL2ljb25cIiwvL+iBlOebn+Wbvuagh1xyXG4gICAgdXBsb2FkQ2x1YjpcIi96cy91cGxvYWQvY2x1YlwiLC8v5L+x5LmQ6YOo5Zu+5qCHXHJcbiAgICB1cGxvYWRBdmF0YXI6XCIvenMvdXBsb2FkL2F2YXRhclwiLC8v546p5a625aS05YOPXHJcbiAgICAvL+iBlOebn+etiee6p0NvbnRyb2xsZXJcclxuICAgIHVuaW9uTGV2ZWxRdWVyeTpcIi96cy91bmlvbkxldmVsL3F1ZXJ5XCIsLy/ogZTnm5/nrYnnuqfmn6Xor6JcclxuICAgIHVuaW9uTGV2ZWxMaXN0UXVlcnk6XCIvenMvdW5pb25MZXZlbC9saXN0L3F1ZXJ5XCIsLy/liJfooajmn6Xor6LliJvlu7rnmoTogZTnm5/nrYnnuqdcclxuICAgIC8v6IGU55uf5biBQ29udHJvbGxlclxyXG4gICAgdW5pb25Db2luUmVjeWNsZTpcIi96cy91bmlvbkNvaW4vcmVjeWNsZVwiLC8v6IGU55uf5biB5Zue5pS2XHJcbiAgICB1bmlvbkNvaW5RdWVyeTpcIi96cy91bmlvbkNvaW4vcXVlcnlcIiwvL+iBlOebn+W4gea1geawtOivpuaDhVxyXG4gICAgdW5pb25Db2luUGFnZVJlY29yZDpcIi96cy91bmlvbkNvaW4vcGFnZVJlY29yZFwiLC8v6IGU55uf5biB5rWB5rC05p+l6K+iXHJcbiAgICB1bmlvbkNvaW5HcmFudDpcIi96cy91bmlvbkNvaW4vZ3JhbnRcIiwvL+iBlOebn+W4geWPkeaUvlxyXG4gICAgdW5pb25Db2luQ2hhcmdlOlwiL3pzL3VuaW9uQ29pbi9jaGFyZ2VcIiwvL+iBlOebn+W4geWFheWAvFxyXG4gICAgLy/ogZTnm59Db250cm9sbGVyXHJcbiAgICB1bmlvblVwZGF0ZTogXCIvenMvdW5pb24vdXBkYXRlXCIsLy/mm7TmlrBcclxuICAgIHVuaW9uU2VhcmNoOiBcIi96cy91bmlvbi9zZWFyY2hcIiwvL+aQnOe0olxyXG4gICAgdW5pb25SZW5hbWU6IFwiL3pzL3VuaW9uL3JlbmFtZVwiLC8v5pu05pS55ZCN56ewXHJcbiAgICB1bmlvblF1ZXJ5OlwiL3pzL3VuaW9uL3F1ZXJ5XCIsLy/mn6Xor6JcclxuICAgIHVuaW9uUGFnZUFwcGx5OlwiL3pzL3VuaW9uL3BhZ2UvYXBwbHlcIiwvL+WIhumhteafpeivouS/seS5kOmDqOeUs+ivt+WIl+ihqFxyXG4gICAgdW5pb25MZXZlbFVwOlwiL3pzL3VuaW9uL2xldmVsVXBcIiwvL+aPkOWNh+etiee6p1xyXG4gICAgdW5pb25LaWNrb3V0OlwiL3pzL3VuaW9uL2tpY2tvdXRcIiwvL+aKiuS/seS5kOmDqOaPkOWHuuiBlOebn1xyXG4gICAgdW5pb25EaXNzb2x1dGlvbjpcIi96cy91bmlvbi9kaXNzb2x1dGlvblwiLC8v6Kej5pWjXHJcbiAgICB1bmlvbkNyZWF0ZTpcIi96cy91bmlvbi9jcmVhdGVcIiwvL+WIm+W7ulxyXG4gICAgdW5pb25SZWplY3Q6XCIvenMvdW5pb24vYXBwbHkvcmVqZWN0XCIsLy/mi5Lnu53kv7HkuZDpg6jnlLPor7dcclxuICAgIHVuaW9uQWNjZXB0OlwiL3pzL3VuaW9uL2FwcGx5L2FjY2VwdFwiLC8v5ZCM5oSP5L+x5LmQ6YOo55Sz6K+3XHJcbiAgICAvL+mBk+WFt0NvbnRyb2xsZXJcclxuICAgIHByb3BzUXVlcnk6XCIvenMvcHJvcHMvcXVlcnlcIiwvL+afpeivoumBk+WFt+ivpuaDhVxyXG4gICAgcHJvcHNMaXN0OiBcIi96cy9wcm9wcy9saXN0XCIsLy/mn6Xor6LpgZPlhbfliJfooahcclxuICAgIC8v5raI5oGv6YCa55+lQ29udHJvbGxlclxyXG4gICAgbm90aWZ5UXVlcnk6IFwiL3pzL25vdGlmeS9xdWVyeVwiLC8v6YCa55+l5p+l6K+iXHJcbiAgICBub3RpZnlNYXJrUmVhZDogXCIvenMvbm90aWZ5L21hcmtSZWFkXCIsLy/mibnph4/lt7Lor7tcclxuICAgIG5vdGlmeUxpc3Q6XCIvenMvbm90aWZ5L2xpc3RcIiwvL+WIl+ihqOafpeivolxyXG4gICAgLy/llYblk4FDb250cm9sbGVyXHJcbiAgICBnb29kc1F1ZXJ5OlwiL3pzL2dvb2RzL3F1ZXJ5XCIsLy/mn6Xor6LllYblk4Hor6bmg4VcclxuICAgIGdvb2RzTGlzdDpcIi96cy9nb29kcy9saXN0XCIsLy/mn6Xor6LllYblk4HliJfooahcclxuICAgIC8v5ri45oiPQ29udHJvbGxlclxyXG4gICAgZ2FtZUxpc3Q6XCIvenMvZ2FtZS9saXN0XCIsLy/liJfooajmn6Xor6JcclxuICAgIC8v56S+5LqkQ29udHJvbGxlclxyXG4gICAgZnJpZW5kc1NlYXJjaDpcIi96cy9mcmllbmRzL3NlYXJjaFwiLC8v5aW95Y+L5p+l6K+iXHJcbiAgICBmcmllbmRzUmVqZWN0OlwiL3pzL2ZyaWVuZHMvcmVqZWN0XCIsLy/lpb3lj4vnlLPor7fmi5Lnu51cclxuICAgIGZyaWVuZHNQYWdlOlwiL3pzL2ZyaWVuZHMvcGFnZVwiLC8v5aW95Y+L5YiX6KGoXHJcbiAgICBmcmllbmRzUGFnZUFwcGx5OlwiL3pzL2ZyaWVuZHMvcGFnZUFwcGx5XCIsLy/lpb3lj4vnlLPor7fliJfooajmn6Xor6JcclxuICAgIGZyaWVuZHNEZWxldGU6XCIvenMvZnJpZW5kcy9kZWxldGVcIiwvL+WlveWPi+WIoOmZpFxyXG4gICAgZnJpZW5kc0FwcHJvdmU6XCIvenMvZnJpZW5kcy9hcHByb3ZlXCIsLy/lpb3lj4vnlLPor7fpgJrov4dcclxuICAgIGZyaWVuZHNBcHBseTpcIi96cy9mcmllbmRzL2FwcGx5XCIsLy/lpb3lj4vnlLPor7dcclxuICAgIC8v6ZK755+z6K6w5b2VQ29udHJvbGxlclxyXG4gICAgZGlhbW9uZFJlY29yZExpc3Q6XCIvenMvZGlhbW9uZFJlY29yZC9saXN0XCIsLy/liJfooajmn6Xor6JcclxuICAgIC8v5qGM5a2QQ29udHJvbGxlclxyXG4gICAgcXVlcnlCeURlc2tDb2RlOlwiL3pzL2Rlc2svcXVlcnlCeURlc2tDb2RlXCIsLy/moLnmja7moYzlrZDnmoRjb2Rl5p+l6K+i5qGM5a2Q5L+h5oGvXHJcbiAgICBkZXNrTGlzdDpcIi96cy9kZXNrL2xpc3RcIiwvL+WIl+ihqOafpeivolxyXG4gICAgZGVza0NyZWF0ZTpcIi96cy9kZXNrL2NyZWF0ZVwiLC8v5Yib5bu6XHJcbiAgICBkZXNrQ29uZmlnOlwiL3pzL2Rlc2svY29uZmlndXJhdGlvblwiLC8v5qGM5a2Q6YWN572u6aG55p+l6K+iXHJcbiAgICAvL+mHkeW4geiusOW9lUNvbnRyb2xsZXJcclxuICAgIGNvaW5SZWNvcmRMaXN0OlwiL3pzL2NvaW5SZWNvcmQvbGlzdFwiLC8v6YeR5biB6K6w5b2VXHJcbiAgICAvL+S/seS5kOmDqOeOqeWutkNvbnRyb2xsZXJcclxuICAgIHNldENsdWJQbGF5ZXJSb2xlOlwiL3pzL2NsdWJQbGF5ZXIvc2V0Q2x1YlBsYXllclJvbGVcIiwvL+S4uuS/seS5kOmDqOa3u+WKoOaWsOinkuiJslxyXG4gICAgcGFnZUNsdWJQbGF5ZXJRdWVyeTpcIi96cy9jbHViUGxheWVyL3BhZ2VDbHViUGxheWVyL3F1ZXJ5XCIsLy/liIbpobXmn6Xor6Lkv7HkuZDpg6jkvJrlkZjliJfooahcclxuICAgIC8v5L+x5LmQ6YOo562J57qnQ29udHJvbGxlclxyXG4gICAgY2x1YkxldmVsUXVlcnk6XCIvenMvY2x1YkxldmVsL3F1ZXJ5XCIsLy/mn6Xor6Lkv7HkuZDpg6jnrYnnuqdcclxuICAgIGNsdWJMZXZlbExpc3RRdWVyeTpcIi96cy9jbHViTGV2ZWwvbGlzdC9xdWVyeVwiLC8v5YiX6KGo5p+l6K+i5Yib5bu655qE5L+x5LmQ6YOo562J57qnXHJcbiAgICAvL+S/seS5kOmDqOWfuumHkUNvbnRyb2xsZXJcclxuICAgIGNsdWJGdW5kUXVlcnk6XCIvenMvY2x1YkZ1bmQvcXVlcnlcIiwvL+S/seS5kOmDqOWfuumHkea1geawtOivpuaDhVxyXG4gICAgY2x1YkZ1bmRQYWdlUmVjb3JkOlwiL3pzL2NsdWJGdW5kL3BhZ2VSZWNvcmRcIiwvL+S/seS5kOmDqOWfuumHkea1geawtOafpeivolxyXG4gICAgY2x1YkZ1bmRHcmFudDpcIi96cy9jbHViRnVuZC9ncmFudFwiLC8v5L+x5LmQ6YOo5Z+66YeR5Y+R5pS+XHJcbiAgICBjbHViRnVuZENoYXJnZTpcIi96cy9jbHViRnVuZC9jaGFyZ2VcIiwvL+S/seS5kOmDqOWfuumHkeWFheWAvFxyXG4gICAgLy/kv7HkuZDpg6jluIFDb250cm9sbGVyXHJcbiAgICBjbHViQ29pblJlamVjdDpcIi96cy9jbHViQ29pbi9yZWplY3RcIiwvL+S/seS5kOmDqOW4geeUs+ivt+aLkue7nVxyXG4gICAgY2x1YkNvaW5SZWN5Y2xlOlwiL3pzL2NsdWJDb2luL3JlY3ljbGVcIiwvL+S/seS5kOmDqOW4geWbnuaUtlxyXG4gICAgY2x1YkNvaW5RdWVyeTpcIi96cy9jbHViQ29pbi9xdWVyeVwiLC8v5L+x5LmQ6YOo5biB5rWB5rC06K+m5oOFXHJcbiAgICBjbHViQ29pblBhZ2VSZWNvcmQ6XCIvenMvY2x1YkNvaW4vcGFnZVJlY29yZFwiLC8v5L+x5LmQ6YOo5biB5rWB5rC05p+l6K+iXHJcbiAgICBjbHViQ29pblBhZ2VBcHBseTpcIi96cy9jbHViQ29pbi9wYWdlQXBwbHlcIiwvL+S/seS5kOmDqOW4geeUs+ivt+WIl+ihqOafpeivolxyXG4gICAgY2x1YkNvaW5HcmFudDpcIi96cy9jbHViQ29pbi9ncmFudFwiLC8v5L+x5LmQ6YOo5biB5Y+R5pS+XHJcbiAgICBjbHViQ29pbkFwcGx5OlwiL3pzL2NsdWJDb2luL2FwcGx5XCIsLy/kv7HkuZDpg6jluIHnlLPor7dcclxuICAgIGNsdWJDb2luQWNjZXB0OlwiL3pzL2NsdWJDb2luL2FjY2VwdFwiLC8v5L+x5LmQ6YOo5biB55Sz6K+35a6h5om5XHJcbiAgICAvL+S/seS5kOmDqOeOqeWutueUs+ivt+WPiuWuoeaJuUNvbnRyb2xsZXJcclxuICAgIGNsdWJBcHBseVRvSm9pblF1ZXJ5OlwiL3pzL2NsdWJBcHBseS9wYWdlQXBwbHlUb0pvaW4vcXVlcnlcIiwvL+WIhumhteafpeivoueUqOaIt+eUs+ivt+WKoOWFpeS/seS5kOmDqOWIl+ihqFxyXG4gICAgY2x1YkFwcGx5UmVqZWN0OlwiL3pzL2NsdWJBcHBseS9hcHByb3ZlL3JlamVjdFwiLC8v55So5oi35L+x5LmQ6YOo55Sz6K+35a6h5om55ouS57ud5pON5L2cXHJcbiAgICBjbHViQXBwbHlBY2NlcHQ6XCIvenMvY2x1YkFwcGx5L2FwcHJvdmUvYWNjZXB0XCIsLy/nlKjmiLfkv7HkuZDpg6jnlLPor7flrqHmibnpgJrov4fmk43kvZxcclxuICAgIC8v5L+x5LmQ6YOoQ29udHJvbGxlclxyXG4gICAgY2x1YlVwZGF0ZTpcIi96cy9jbHViL3VwZGF0ZVwiLC8v5pu05pawXHJcbiAgICBjbHViVW5pb25RdWl0OlwiL3pzL2NsdWIvdW5pb24vcXVpdFwiLC8v5L+x5LmQ6YOo6YCA5Ye66IGU55ufXHJcbiAgICB1bmlvbkNsdWJQYWdlOlwiL3pzL2NsdWIvdW5pb24tY2x1Yi9wYWdlXCIsLy/liIbpobXmn6Xor6LogZTnm5/nmoTkv7HkuZDpg6hcclxuICAgIGNsdWJTZWFyY2g6XCIvenMvY2x1Yi9zZWFyY2hcIiwvL+agueaNruWFs+mUruWtl+afpeivouS/seS5kOmDqOS/oeaBr++8jOS/seS5kOmDqOe8luWPt+aIluS/seS5kOmDqOWQjeensFxyXG4gICAgY2x1YlF1aXQ6XCIvenMvY2x1Yi9xdWl0XCIsLy/pgIDlh7rkv7HkuZDpg6hcclxuICAgIGNsdWJRdWVyeTpcIi96cy9jbHViL3F1ZXJ5XCIsLy/mn6Xor6Lkv7HkuZDpg6jkv6Hmga9cclxuICAgIGNsdWJMaXN0UXVlcnk6XCIvenMvY2x1Yi9saXN0L3F1ZXJ5XCIsLy/liJfooajmn6Xor6LliJvlu7rnmoTkv7HkuZDpg6hcclxuICAgIGNsdWJMZXZlbFVwOlwiL3pzL2NsdWIvbGV2ZWxVcFwiLC8v5L+x5LmQ6YOo5o+Q5Y2H562J57qnXHJcbiAgICBjbHViSm9pbmVkUGFnZTpcIi96cy9jbHViL2pvaW5lZC9wYWdlXCIsLy/liIbpobXmn6Xor6Llt7Lnu4/liqDlhaXnmoTkv7HkuZDpg6hcclxuICAgIGNsdWJEaXNzb2x1dGlvbjpcIi96cy9jbHViL2Rpc3NvbHV0aW9uXCIsLy/liKDpmaTop6PmlaNcclxuICAgIGNsdWJDcmVhdGU6XCIvenMvY2x1Yi9jcmVhdGVcIiwvL+WIm+W7ulxyXG4gICAgY2x1YkFwcGx5VG9Kb2luOlwiL3pzL2NsdWIvYXBwbHlUb0pvaW5cIiwvL+S/seS5kOmDqOeUs+ivt+WKoOWFpeiBlOebn1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBDb21Vc2VTdHIge1xyXG4gICAgVXJsUGFyYW1BZGRyZXNzS2V5ID0gXCJhZGRyZXNzXCIsXHJcbn1cclxuXHJcbi8qKiDnmbvlvZXotKblj7fnmoTnsbvlnovmnprkuL4gKi9cclxuZXhwb3J0IGVudW0gQWNjb3VudFR5cGUge1xyXG4gICAgbm9tYWxsLFxyXG4gICAgUGhvbmUsXHJcbiAgICBNYWlsLFxyXG59XHJcblxyXG4vKiog5LqL5Lu25ZCN56ew5p6a5Li+ICovXHJcbmV4cG9ydCBlbnVtIEV2ZW50TmFtZSB7XHJcbiAgICBTZWxlY3RDb3VudHJ5Q29kZSA9IFwiU2VsZWN0Q291bnRyeUNvZGVcIixcclxufVxyXG5cclxuLyoqIOaAp+WIqyAqL1xyXG5leHBvcnQgZW51bSBVc2VyU2V4IHtcclxuICAgIEJPWSA9IFwiQk9ZXCIsXHJcbiAgICBHSVJMID0gXCJHSVJMXCIsXHJcbn1cclxuXHJcbi8qKiDorr7lpIfnsbvlnosgKi9cclxuZXhwb3J0IGVudW0gRGV2aWNlVHlwZSB7XHJcbiAgICBBbmRyb2lkID0gXCJBTkRST0lEXCIsXHJcbiAgICBJb3MgPSBcIklPU1wiLFxyXG4gICAgV2ViID0gXCJXRUJcIixcclxufVxyXG4iXX0=