"use strict";
cc._RF.push(module, '0146dnqm/FPs5vCwEWDHeeU', 'UserInfo');
// bundle/01_hall/script/config/UserInfo.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfo = void 0;
var userInfo = /** @class */ (function () {
    function userInfo() {
        this._uuid = "";
        this._token = "";
        /** 昵称 */
        this.nick = "";
        /** 金币 */
        this.gold = 0;
        /** 年龄 */
        this.gender = "";
        /** 游戏id */
        this.gameid = 0;
        /** 房间id */
        this.roomid = 0;
        /** 前 */
        this.money = 0;
        this.headPic = "";
        this.vipValidityPeriod = "";
        this.vipType = "";
        this.uid = "";
        this.code = "";
        this.phoneAreaCode = "";
        this.phoneNumber = "";
        this.diamond = 0;
        this.lastLoginTime = "";
        this.clubNum = 0;
        this.joinClubNum = 0;
        this._language = 0;
        /** 游戏长连接管理 */
        this.cwebsocket = null;
    }
    Object.defineProperty(userInfo, "ins", {
        get: function () {
            if (this.sing == null) {
                this.sing = new userInfo();
            }
            return this.sing;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(userInfo.prototype, "uuid", {
        /** uid */
        get: function () {
            var uuid = cc.sys.localStorage.getItem("uuid");
            if (!uuid || uuid == "") {
                return "";
            }
            this._uuid = uuid;
            return this._uuid;
        },
        /** uid */
        set: function (val) {
            cc.sys.localStorage.setItem("uuid", val);
            this._uuid = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(userInfo.prototype, "token", {
        get: function () {
            var token = cc.sys.localStorage.getItem("token");
            if (!token) {
                return "";
            }
            this._token = token;
            return this._token;
        },
        set: function (val) {
            cc.sys.localStorage.setItem("token", val);
            this._token = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(userInfo.prototype, "testToken", {
        get: function () {
            return "d382bbb47b16ff60211af01e08dfa36f6697e0e3b5bd95126ea374e4e6eadc468c1f56d4f9b6685246a02273f064c3f7";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(userInfo.prototype, "testuuid", {
        get: function () {
            return 42;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(userInfo.prototype, "language", {
        get: function () {
            var id = cc.sys.localStorage.getItem("language");
            if (!id) {
                id = 0;
            }
            this._language = Number(id);
            return this._language;
        },
        set: function (val) {
            this._language = val;
            cc.sys.localStorage.setItem("language", val);
        },
        enumerable: false,
        configurable: true
    });
    userInfo.prototype.clearLogin = function () {
        cc.sys.localStorage.setItem("token", "");
        cc.sys.localStorage.setItem("uuid", "");
    };
    userInfo.sing = null;
    return userInfo;
}());
/** 玩家信息 */
exports.UserInfo = userInfo.ins;

cc._RF.pop();