"use strict";
cc._RF.push(module, '44b59YH/o9KurT8AuJXmnti', 'C_User');
// bundle/01_hall/script/config/C_User.ts

"use strict";
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
exports.C_User = void 0;
var config_1 = require("./config");
var D_User_1 = require("./D_User");
var Utils_1 = require("./Utils");
var C_User = /** @class */ (function () {
    function C_User() {
        this._uid = "";
        this._token = "";
        this._language = 0;
        /** 游戏长连接管理 */
        this.cwebsocket = null;
    }
    Object.defineProperty(C_User, "ins", {
        get: function () {
            if (this.sing == null) {
                this.sing = new C_User();
            }
            return this.sing;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(C_User.prototype, "uid", {
        /** uid */
        get: function () {
            var uuid = cc.sys.localStorage.getItem("uuid");
            if (!uuid || uuid == "") {
                return "";
            }
            this._uid = uuid;
            return this._uid;
        },
        /** uid */
        set: function (val) {
            cc.sys.localStorage.setItem("uuid", val);
            this._uid = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(C_User.prototype, "token", {
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
    Object.defineProperty(C_User.prototype, "me", {
        get: function () {
            if (!this._me) {
                this._me = new D_User_1.D_User();
            }
            return this._me;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(C_User.prototype, "language", {
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
    C_User.prototype.clearLogin = function () {
        cc.sys.localStorage.setItem("token", "");
        cc.sys.localStorage.setItem("uuid", "");
    };
    //---------------------------------------server------------------------------------------
    /**修改备注 */
    C_User.prototype.sendUserRemark = function (remark) {
        return __awaiter(this, void 0, void 0, function () {
            var data, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = {
                            current: 1,
                            size: 20,
                            userId: C_User.ins.uid,
                            remark: remark
                        };
                        return [4 /*yield*/, Utils_1.Utils.Post(config_1.HttpPath.userRemark, data)];
                    case 1:
                        res = _a.sent();
                        C_User.ins.me.remark = res.data.remark;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**查询备注 */
    C_User.prototype.sendUserRemarkQuery = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = {
                            current: 1,
                            size: 20,
                            userId: C_User.ins.uid,
                        };
                        return [4 /*yield*/, Utils_1.Utils.Post(config_1.HttpPath.queryUserRemark, data)];
                    case 1:
                        res = _a.sent();
                        C_User.ins.me.remark = res.data.remark;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**查询备注 */
    C_User.prototype.sendUserSearch = function (keyWord) {
        return __awaiter(this, void 0, void 0, function () {
            var data, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = {
                            current: 1,
                            size: 20,
                            keyWord: keyWord,
                        };
                        return [4 /*yield*/, Utils_1.Utils.Post(config_1.HttpPath.userSearch, data)];
                    case 1:
                        res = _a.sent();
                        C_User.ins.me.remark = res.data.remark;
                        return [2 /*return*/];
                }
            });
        });
    };
    C_User.sing = null;
    return C_User;
}());
exports.C_User = C_User;

cc._RF.pop();