
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXGNvbmZpZ1xcY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGVBQWU7QUFDZixJQUFZLFFBT1g7QUFQRCxXQUFZLFFBQVE7SUFDaEIsMkJBQWUsQ0FBQTtJQUNmLHVCQUFXLENBQUE7SUFDWCwyQkFBZSxDQUFBO0lBQ2YsNkJBQWlCLENBQUE7SUFDakIsOEJBQWtCLENBQUE7SUFDbEIseUJBQWEsQ0FBQTtBQUNqQixDQUFDLEVBUFcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFPbkI7QUFFRCxjQUFjO0FBQ2QsSUFBWSxVQUdYO0FBSEQsV0FBWSxVQUFVO0lBQ2xCLDJDQUE2QixDQUFBO0lBQzdCLHlDQUEyQixDQUFBO0FBQy9CLENBQUMsRUFIVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUdyQjtBQUVELGFBQWE7QUFDQSxRQUFBLFlBQVksR0FBRztJQUN4QixnQ0FBZ0M7SUFDaEMsS0FBSyxFQUFFLDJCQUEyQjtDQUVyQyxDQUFBO0FBRUQsa0JBQWtCO0FBQ0wsUUFBQSxRQUFRLEdBQUc7SUFDcEIsUUFBUSxFQUFFLHlCQUF5QjtJQUNuQyxZQUFZLEVBQUUsd0JBQXdCO0lBQ3RDLFVBQVUsRUFBRSxzQkFBc0I7SUFHbEMsUUFBUSxFQUFFLHlCQUF5QjtJQUNuQyxZQUFZLEVBQUUsd0JBQXdCO0lBQ3RDLFVBQVUsRUFBRSxzQkFBc0I7SUFFbEMsWUFBWSxFQUFFLGlCQUFpQjtJQUMvQixnQkFBZ0IsRUFBRSwyQkFBMkI7SUFDN0Msa0JBQWtCLEVBQUUscUJBQXFCO0lBR3pDLFdBQVcsRUFBRSxnQkFBZ0I7SUFDN0IsS0FBSyxFQUFFLGFBQWE7SUFDcEIsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixNQUFNLEVBQUUsY0FBYztJQUN0QixPQUFPLEVBQUUsZUFBZTtDQUMzQixDQUFBO0FBRUQsSUFBWSxTQUVYO0FBRkQsV0FBWSxTQUFTO0lBQ2pCLDJDQUE4QixDQUFBO0FBQ2xDLENBQUMsRUFGVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUVwQjtBQUVELGdCQUFnQjtBQUNoQixJQUFZLFdBSVg7QUFKRCxXQUFZLFdBQVc7SUFDbkIsaURBQU0sQ0FBQTtJQUNOLCtDQUFLLENBQUE7SUFDTCw2Q0FBSSxDQUFBO0FBQ1IsQ0FBQyxFQUpXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBSXRCO0FBRUQsYUFBYTtBQUNiLElBQVksU0FFWDtBQUZELFdBQVksU0FBUztJQUNqQixvREFBdUMsQ0FBQTtBQUMzQyxDQUFDLEVBRlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFFcEI7QUFFRCxTQUFTO0FBQ1QsSUFBWSxPQUdYO0FBSEQsV0FBWSxPQUFPO0lBQ2Ysc0JBQVcsQ0FBQTtJQUNYLHdCQUFhLENBQUE7QUFDakIsQ0FBQyxFQUhXLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQUdsQjtBQUVELFdBQVc7QUFDWCxJQUFZLFVBSVg7QUFKRCxXQUFZLFVBQVU7SUFDbEIsaUNBQW1CLENBQUE7SUFDbkIseUJBQVcsQ0FBQTtJQUNYLHlCQUFXLENBQUE7QUFDZixDQUFDLEVBSlcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFJckIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKiog5YC85a+55bqU6aKE5Yi25L2T5ZCN56ewICovXHJcbmV4cG9ydCBlbnVtIFZpZXdFbnVtIHtcclxuICAgIFJlc2V0ID0gXCJyZXNldFwiLFxyXG4gICAgUmVnID0gJ3JlZycsXHJcbiAgICBMb2dpbiA9IFwibG9naW5cIixcclxuICAgIEZhWGlhbiA9IFwiZmF4aWFuXCIsXHJcbiAgICBDcmVhdGUgPSBcImNyZWF0ZTBcIixcclxuICAgIEdhbWUgPSBcImdhbWVcIixcclxufVxyXG5cclxuLyoqIOW8ueWHuue7hOS7tueahOaemuS4viAqL1xyXG5leHBvcnQgZW51bSBXaWRnZXRFbnVtIHtcclxuICAgIEJvdHRvbVRvZ2dsZSA9IFwiYm90dG9tdG9nZ2xlXCIsXHJcbiAgICBDb3VudHJ5Q29kZSA9IFwiY291bnRyeWNvZGVcIixcclxufVxyXG5cclxuLyoqIOWFqOWxgOmFjee9ruWPguaVsCAqL1xyXG5leHBvcnQgY29uc3QgR2xvYmFsQ29uZmlnID0ge1xyXG4gICAgLy8gSVBvcnQ6IFwiMTc1LjI3LjE2OS4xMTc6NDAwMFwiLFxyXG4gICAgSVBvcnQ6IFwiaHR0cDovLzE5Mi4xNjguMzEuMzk6NDAwMFwiLFxyXG5cclxufVxyXG5cclxuLyoqIGh0dHDor7fmsYLnmoTot6/lvoTmlbTnkIYgKi9cclxuZXhwb3J0IGNvbnN0IEh0dHBQYXRoID0ge1xyXG4gICAgcGhvbmVSZWc6IFwiL3pzL3VzZXIvcGhvbmUvcmVnaXN0ZXJcIiwvL+aJi+acuuazqOWGjFxyXG4gICAgcGhvbmVDYXB0Y2hhOiBcIi96cy91c2VyL3Bob25lL2NhcHRjaGFcIiwvL+aJi+acuumqjOivgeeggVxyXG4gICAgcGhvbmVMb2dpbjogXCIvenMvdXNlci9waG9uZS9sb2dpblwiLC8v5omL5py655m75b2VXHJcblxyXG5cclxuICAgIGVtYWlsUmVnOiBcIi96cy91c2VyL2VtYWlsL3JlZ2lzdGVyXCIsLy/pgq7nrrHms6jlhoxcclxuICAgIGVtYWlsQ2FwdGNoYTogXCIvenMvdXNlci9lbWFpbC9jYXB0Y2hhXCIsLy/pgq7nrrHpqozor4HnoIFcclxuICAgIGVtYWlsTG9naW46IFwiL3pzL3VzZXIvZW1haWwvbG9naW5cIiwvL+mCrueuseeZu+W9lVxyXG5cclxuICAgIGNyZWF0ZUp1TGVCdTogXCIvenMvY2x1Yi9jcmVhdGVcIiwvL+WIm+W7uuS/seS5kOmDqFxyXG4gICAgcXVlcnlBZGRlZEp1TGVCdTogXCIvenMvY2x1Yi9wYWdlam9pbmVkL3F1ZXJ5XCIsLy/mn6Xor6Llt7Lnu4/liqDlhaXnmoTkv7HkuZDpg6hcclxuICAgIHF1ZXJ5Q3JlYXRlZEp1TGVCdTogXCIvenMvY2x1Yi9saXN0L3F1ZXJ5XCIsLy/mn6Xor6LliJvlu7rnmoTkv7HkuZDpg6hcclxuXHJcblxyXG4gICAgcXVlcnlQZXJzb246IFwiL3pzL3VzZXIvcXVlcnlcIixcclxuICAgIGxvZ2luOiBcIi91c2VyL2xvZ2luXCIsXHJcbiAgICB1c2VyaW5mbzogXCIvdXNlci91c2VyaW5mb1wiLFxyXG4gICAgdXBkYXRlOiBcIi91c2VyL3VwZGF0ZVwiLFxyXG4gICAgZ2V0Y29kZTogXCIvdXNlci9nZXRjb2RlXCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ29tVXNlU3RyIHtcclxuICAgIFVybFBhcmFtQWRkcmVzc0tleSA9IFwiYWRkcmVzc1wiLFxyXG59XHJcblxyXG4vKiog55m75b2V6LSm5Y+355qE57G75Z6L5p6a5Li+ICovXHJcbmV4cG9ydCBlbnVtIEFjY291bnRUeXBlIHtcclxuICAgIG5vbWFsbCxcclxuICAgIFBob25lLFxyXG4gICAgTWFpbCxcclxufVxyXG5cclxuLyoqIOS6i+S7tuWQjeensOaemuS4viAqL1xyXG5leHBvcnQgZW51bSBFdmVudE5hbWUge1xyXG4gICAgU2VsZWN0Q291bnRyeUNvZGUgPSBcIlNlbGVjdENvdW50cnlDb2RlXCIsXHJcbn1cclxuXHJcbi8qKiDmgKfliKsgKi9cclxuZXhwb3J0IGVudW0gVXNlclNleCB7XHJcbiAgICBCT1kgPSBcIkJPWVwiLFxyXG4gICAgR0lSTCA9IFwiR0lSTFwiLFxyXG59XHJcblxyXG4vKiog6K6+5aSH57G75Z6LICovXHJcbmV4cG9ydCBlbnVtIERldmljZVR5cGUge1xyXG4gICAgQW5kcm9pZCA9IFwiQU5EUk9JRFwiLFxyXG4gICAgSW9zID0gXCJJT1NcIixcclxuICAgIFdlYiA9IFwiV0VCXCIsXHJcbn1cclxuIl19