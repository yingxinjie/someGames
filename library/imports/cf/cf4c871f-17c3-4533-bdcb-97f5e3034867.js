"use strict";
cc._RF.push(module, 'cf4c8cfF8NFM73Ll/XjA0hn', 'nodeDZpool');
// bundle/02_game/script/config/nodeDZpool.ts

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
exports.POOLTYPE = exports.NodeDZpool = exports.nodeDZpool = void 0;
var dzUtils_1 = require("./dzUtils");
var nodeDZpool = /** @class */ (function () {
    function nodeDZpool() {
        this._nodePool = [];
        this._isLoad = false;
    }
    Object.defineProperty(nodeDZpool, "ins", {
        get: function () {
            if (this.sing == null) {
                this.sing = new nodeDZpool();
            }
            return this.sing;
        },
        enumerable: false,
        configurable: true
    });
    nodeDZpool.prototype.initCard = function (max) {
        if (max === void 0) { max = 9; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, i, obj;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, dzUtils_1.DzUtils.loadPrefab("card")];
                    case 1:
                        _a._card = _b.sent();
                        for (i = 0; i < max; i++) {
                            obj = cc.instantiate(this._card);
                            if (!this._nodePool[POOLTYPE.CARD]) {
                                this._nodePool[POOLTYPE.CARD] = new cc.NodePool();
                            }
                            this._nodePool[POOLTYPE.CARD].put(obj);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    nodeDZpool.prototype.initCoin = function (max) {
        if (max === void 0) { max = 9; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, i, obj;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, dzUtils_1.DzUtils.loadPrefab("coin")];
                    case 1:
                        _a._coin = _b.sent();
                        for (i = 0; i < max; i++) {
                            obj = cc.instantiate(this._coin);
                            if (!this._nodePool[POOLTYPE.COIN]) {
                                this._nodePool[POOLTYPE.COIN] = new cc.NodePool();
                            }
                            this._nodePool[POOLTYPE.COIN].put(obj);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**获取对象池对象 */
    nodeDZpool.prototype.getObj = function (index) {
        var obj;
        var prefab;
        if (index == POOLTYPE.CARD) {
            prefab = this._card;
        }
        else {
            prefab = this._coin;
        }
        if (this._nodePool[index].size() > 0) {
            obj = this._nodePool[index].get();
        }
        else {
            obj = cc.instantiate(prefab);
        }
        //obj.init();
        return obj;
    };
    /**回收对象 */
    nodeDZpool.prototype.recovery = function (index, node) {
        this._nodePool[index].put(node);
    };
    nodeDZpool.sing = null;
    return nodeDZpool;
}());
exports.nodeDZpool = nodeDZpool;
/** 桌内信息 */
exports.NodeDZpool = nodeDZpool.ins;
var POOLTYPE;
(function (POOLTYPE) {
    POOLTYPE[POOLTYPE["CARD"] = 0] = "CARD";
    POOLTYPE[POOLTYPE["COIN"] = 1] = "COIN";
})(POOLTYPE = exports.POOLTYPE || (exports.POOLTYPE = {}));

cc._RF.pop();