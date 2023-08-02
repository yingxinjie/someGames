"use strict";
cc._RF.push(module, '3908bmzVkJFgbRXE+dxWKDe', 'deskMgr');
// bundle/02_game/script/config/deskMgr.ts

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
exports.DeskMgr = void 0;
var UserInfo_1 = require("../../../01_hall/script/config/UserInfo");
var head_1 = require("../head");
var deskInfo_1 = require("./deskInfo");
var dzUtils_1 = require("./dzUtils");
var nodeDZpool_1 = require("./nodeDZpool");
var deskMgr = /** @class */ (function () {
    function deskMgr() {
        this.convertArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.convertdataArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.cardMap = new Map([
            [0x02 & 0xF, '2'],
            [0x03 & 0xF, '3'],
            [0x04 & 0xF, '4'],
            [0x05 & 0xF, '5'],
            [0x06 & 0xF, '6'],
            [0x07 & 0xF, '7'],
            [0x08 & 0xF, '8'],
            [0x09 & 0xF, '9'],
            [0x0A & 0xF, '10'],
            [0x0B & 0xF, '11'],
            [0x0C & 0xF, '12'],
            [0x0D & 0xF, '13'],
            [0x0E & 0xF, '1']
        ]);
    }
    Object.defineProperty(deskMgr, "ins", {
        get: function () {
            if (this.sing == null) {
                this.sing = new deskMgr();
            }
            return this.sing;
        },
        enumerable: false,
        configurable: true
    });
    /*
    扑克转换
    */
    deskMgr.prototype.convertPoker = function (pokerVal) {
        return __awaiter(this, void 0, void 0, function () {
            var spr, value, suit, suitStr, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        value = pokerVal & 0xF;
                        suit = pokerVal >> 4;
                        suitStr = '♦';
                        if (suit == 1) {
                            suitStr = '♣'; //梅花
                        }
                        else if (suit == 2) {
                            suitStr = '♥'; //红桃
                        }
                        else if (suit == 3) {
                            suitStr = '♠'; //黑桃
                        }
                        url = "card_" + suit + "_" + this.cardMap.get(value);
                        console.log("url: " + url);
                        return [4 /*yield*/, dzUtils_1.DzUtils.loadCardPic(url)];
                    case 1:
                        spr = (_a.sent());
                        return [2 /*return*/, spr];
                }
            });
        });
    };
    deskMgr.prototype.setconvertNum = function (seat) {
        this.convertNum = seat == 1 ? 0 : deskInfo_1.DeskInfo.seatLen - (seat - 1);
        console.log("convertNum: " + this.convertNum + "  } ");
        this.convertArr = [];
        for (var seat_1 = 1; seat_1 <= deskInfo_1.DeskInfo.seatLen; seat_1++) {
            var cNum = this.convertSeat(seat_1);
            this.convertArr.push(cNum);
        }
        console.log("convertArr: " + JSON.stringify(this.convertArr) + " ");
    };
    deskMgr.prototype.convertSeat = function (seat) {
        var convertSeat = seat + this.convertNum;
        var _convertSeat = convertSeat > deskInfo_1.DeskInfo.seatLen ? convertSeat - deskInfo_1.DeskInfo.seatLen : convertSeat;
        console.log("tureSeat: " + seat + "   convertSeat: " + _convertSeat + " ");
        return _convertSeat;
    };
    deskMgr.prototype.TweenSeat = function (seats) {
        var _loop_1 = function (i) {
            var seat = seats[i];
            var nextSeat = this_1.convertArr[i];
            var nextPos = UserInfo_1.UserInfo.seatPJson[deskInfo_1.DeskInfo.seatLen][nextSeat - 1];
            var pos = UserInfo_1.UserInfo.seatPJson[deskInfo_1.DeskInfo.seatLen][i];
            cc.tween(seat).to(0.5, { x: nextPos.x, y: nextPos.y }).call(function () {
                seat.x = pos.x;
                seat.y = pos.y;
                var nextSeatNode = seats[nextSeat - 1];
                var _head = seat.children[0];
                if (_head) {
                    var ts = _head.getComponent(head_1.default);
                    if (ts.convertseat - 1 == Number(seat.name.slice(-1))) {
                        _head.parent = nextSeatNode;
                    }
                }
            }).start();
        };
        var this_1 = this;
        //  let dir = DeskInfo.readyPos < Math.ceil(DeskInfo.seatLen / 2) ? -1 : 1 //0逆时针 1顺时针
        for (var i = 0; i < deskInfo_1.DeskInfo.seatLen; i++) {
            _loop_1(i);
        }
    };
    deskMgr.prototype.initSeat = function (seats) {
        for (var i = 0; i < deskInfo_1.DeskInfo.seatLen; i++) {
            var seat = seats[i];
            var nextSeat = this.convertArr[i];
            var nextSeatNode = seats[nextSeat - 1];
            var _head = seat.children[0];
            if (_head) {
                var ts = _head.getComponent(head_1.default);
                if (ts.convertseat - 1 == Number(seat.name.slice(-1))) {
                    _head.parent = nextSeatNode;
                }
            }
        }
    };
    deskMgr.prototype.addPots = function (pots) {
        var totalpot;
        for (var playerId in pots) {
            var pot = pots[playerId];
            totalpot += pot;
        }
        return totalpot;
    };
    deskMgr.prototype.TweenSendCard = function (target, callback, parent) {
        var flyCard = nodeDZpool_1.NodeDZpool.getObj(nodeDZpool_1.POOLTYPE.CARD);
        flyCard.parent = parent;
        flyCard.x = 0;
        flyCard.y = 0;
        flyCard.scale = 0.5;
        flyCard.opacity = 122;
        var twotaget = target.getChildByName('sprTwoCard');
        var _a = target.parent, x = _a.x, y = _a.y;
        cc.tween(flyCard).to(0.3, { x: x + twotaget.x, y: y + twotaget.y, scale: 1, opacity: 255 }).call(function () {
            callback && callback();
            nodeDZpool_1.NodeDZpool.recovery(nodeDZpool_1.POOLTYPE.CARD, flyCard);
        }).start();
    };
    deskMgr.prototype.TweenTurnCard = function (target) {
        //cc.tween(target).flipY().start()
    };
    deskMgr.sing = null;
    return deskMgr;
}());
/** 桌内管理 */
exports.DeskMgr = deskMgr.ins;

cc._RF.pop();