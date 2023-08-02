
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/02_game/script/game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9c3a93gMBZLSLUu+lK36tIU', 'game');
// bundle/02_game/script/game.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var bundleLoader_1 = require("../../../script/bundleLoader");
var ComponentBase_1 = require("../../00_base/script/common/ComponentBase");
var C_User_1 = require("../../01_hall/script/config/C_User");
var ViewManager_1 = require("../../01_hall/script/config/ViewManager");
var config_1 = require("../../01_hall/script/config/config");
var cmdClient_1 = require("./config/cmdClient");
var deskInfo_1 = require("./config/deskInfo");
var deskMgr_1 = require("./config/deskMgr");
var gameConst_1 = require("./config/gameConst");
var nodeDZpool_1 = require("./config/nodeDZpool");
var head_1 = require("./head");
var light_1 = require("./light");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var game = /** @class */ (function (_super) {
    __extends(game, _super);
    function game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.card = null;
        _this.light = null;
        _this.alert = null;
        _this.deskbet = null;
        _this.deskinfo = null;
        _this.headItem = null;
        _this.myOperate = null;
        _this.seats = [];
        _this.choumas = [];
        _this.bottoms = [];
        _this.choumasides = [];
        _this.mycards = [];
        _this.heads = {};
        //其他钩子函数
        _this.nowTime = 0;
        _this.nowTimeInt = 0;
        _this.nowClockLabel = null;
        return _this;
    }
    game.prototype.start = function () {
        //消息回调
        C_User_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.BET, this.svr_bet, this);
        C_User_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.GAMESTART, this.svr_gamestart, this);
        C_User_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.GAMEOVER, this.svr_gameover, this);
        C_User_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.SITDOWNORSTANDUP, this.svr_downup, this);
        C_User_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.START, this.svr_start, this);
        C_User_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.BOARD, this.svr_board, this);
        C_User_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.BRING, this.svr_bring, this);
        C_User_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.INSURANCE, this.svr_insurance, this);
        C_User_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.EXIT, this.svr_exit, this);
        //事件回调
        this.TouchOn(this.alert.children[2], this.evt_start, this); // 房主游戏开始
        for (var i = 0; i < this.bottoms.length; i++) {
            var btn = this.bottoms[i];
            this.TouchOn(btn, this.evt_bottom, this); // 游戏场景下方按钮事件
        }
        this.initprops();
        this.init();
    };
    game.prototype.onLoad = function () {
        C_User_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.CONNECT, this.svr_connect, this); // 只处理数据
        C_User_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.RECONNECT, this.svr_connect, this); // 只处理数据
        nodeDZpool_1.NodeDZpool.initCard();
        nodeDZpool_1.NodeDZpool.initCoin();
    };
    //消息回调
    game.prototype.svr_connect = function (data) {
        if (data.requestType == cmdClient_1.cmdClientType.SERVERTOCLIENT) {
            deskInfo_1.DeskInfo.setLplayer(data.requestData.id, data.requestData);
        }
    };
    game.prototype.svr_bet = function (data) {
        console.log("svr_bet");
    };
    game.prototype.svr_gamestart = function (data) {
        var _this = this;
        console.log("svr_gamestart");
        this.card.active = false;
        var _data = data.requestData;
        this.switchAlert(-1);
        deskInfo_1.DeskInfo.currRoundPlayerId = _data.curPlayerId;
        deskInfo_1.DeskInfo.deskId = _data.deskId;
        deskInfo_1.DeskInfo.pots = _data.playerPots;
        deskInfo_1.DeskInfo.pots.forEach(function (pot, index) {
            var pots = deskMgr_1.DeskMgr.addPots(pot);
            if (index == 0) {
                _this.setDichi(pots);
            }
            else {
                _this.setSidechi(pots, index);
            }
        });
        _data.seatPlayerList.forEach(function (dplayer) {
            deskInfo_1.DeskInfo.setDplayer(dplayer.position, dplayer);
            if (dplayer.playerId > 0) {
                var clientSeat = _this.getSeatByHeadId(dplayer.position);
                _this.setChoumaNum(0, clientSeat - 1);
                var head_2 = _this.heads[dplayer.position];
                head_2.getChildByName("sprTwoCard").active = false;
                deskMgr_1.DeskMgr.TweenSendCard(head_2, function () {
                    if (dplayer.position == C_User_1.UserInfo.testuuid) {
                        var dplayer_1 = deskInfo_1.DeskInfo.getMydplayer();
                        dplayer_1.handsCard.forEach(function (card, index) {
                            _this.setMyCard(index, card.value);
                        });
                    }
                    else {
                        head_2.getChildByName("sprTwoCard").active = true;
                    }
                }, _this.node);
            }
        });
        //后续补齐发牌动画
    };
    game.prototype.svr_gameover = function (data) {
        console.log("svr_gameover");
    };
    game.prototype.svr_downup = function (data) {
        if (!data)
            return cc.error("数据错误");
        var _data = data.requestData;
        if (_data.status == gameConst_1.DeskSeatStatus.TEMPORARY) {
            if (C_User_1.UserInfo.testuuid == _data.playerId) {
                ViewManager_1.ViewManager.Alert(config_1.WidgetEnum.JoinDesk, bundleLoader_1.bundleLoader.ENUM_BUNDLE.GAME);
                var clientSeat = this.getSeatByHeadId(_data.position);
                //DeskMgr.setconvertNum(DeskMgr.convert(_data.position))
                deskMgr_1.DeskMgr.setconvertNum(clientSeat);
                this.setHeadInfo(clientSeat, _data.playerId);
                //this.craeteHead(_data.position, _data.playerId)
                deskMgr_1.DeskMgr.TweenSeat(this.seats);
            }
            else {
                var clientSeat = this.getSeatByHeadId(_data.position);
                this.setHeadInfo(clientSeat, _data.playerId);
            }
            //数据处理
            var dplayer = deskInfo_1.DeskInfo.getDplayer(_data.position);
            dplayer.position = _data.position;
            dplayer.status = gameConst_1.PlayerInfoStatus.TEMPORARY;
        }
        else if (_data.status == gameConst_1.DeskSeatStatus.SITDOWN) {
            var clientSeat = this.getSeatByHeadId(_data.position);
            this.setHeadInfo(clientSeat, _data.playerId);
        }
        else {
            this.removeHead(_data.position, _data.playerId);
        }
    };
    game.prototype.svr_start = function (data) {
        console.log("svr_bet");
    };
    game.prototype.svr_board = function (data) {
        console.log("svr_board");
    };
    game.prototype.svr_bring = function (data) {
        console.log("svr_bring");
    };
    game.prototype.svr_insurance = function (data) {
        console.log("svr_insurance");
    };
    game.prototype.svr_exit = function (data) {
        console.log("svr_exit");
    };
    //事件回调
    game.prototype.evt_sitdown = function (e) {
        var name = e.currentTarget.name;
        // let seat = DeskMgr.convertobj[Number(name.slice(-1)) + 1]
        // let seat = Number(name.slice(-1)) + 1
        var seat = this.getHeadBySeat(Number(name.slice(-1)) + 1);
        deskInfo_1.DeskInfo.readyPos = seat;
        var info = {
            playerId: C_User_1.UserInfo.testuuid,
            deskId: 9,
            position: deskInfo_1.DeskInfo.readyPos,
            status: gameConst_1.DeskSeatStatus.TEMPORARY
        };
        C_User_1.UserInfo.cwebsocket.clientSend(cmdClient_1.cmdClientEvent.SITDOWNORSTANDUP, info);
        //console.log(e)
    };
    game.prototype.evt_start = function (e) {
        console.log("evt_start");
        if (C_User_1.UserInfo.testuuid == deskInfo_1.DeskInfo.createDeskPlayerId) {
            var info = {
                playerId: C_User_1.UserInfo.testuuid,
                deskId: 9
            };
            C_User_1.UserInfo.cwebsocket.clientSend(cmdClient_1.cmdClientEvent.START, info);
        }
    };
    game.prototype.evt_bottom = function (e) {
        console.log("evt_bottom");
        var name = e.currentTarget.name;
        switch (Number(name.slice(-1))) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                ViewManager_1.ViewManager.Alert(config_1.WidgetEnum.GameSetting, bundleLoader_1.bundleLoader.ENUM_BUNDLE.GAME);
                break;
        }
    };
    //初始化
    game.prototype.init = function () {
        var _this = this;
        this.curSeatP = C_User_1.UserInfo.seatPJson[deskInfo_1.DeskInfo.seatLen];
        for (var i = 0; i < deskInfo_1.DeskInfo.seatLen; i++) {
            this.seats[i].x = this.curSeatP[i].x;
            this.seats[i].y = this.curSeatP[i].y;
            this.seats[i].active = true;
            this.TouchOn(this.seats[i], this.evt_sitdown, this);
            var dplayer = deskInfo_1.DeskInfo.getDplayer(i + 1);
            if (dplayer) {
                this.craeteHead(dplayer.position, dplayer.playerId);
            }
        }
        var Mylplayer = deskInfo_1.DeskInfo.getMylplayer();
        if (Mylplayer.position > 0) {
            deskMgr_1.DeskMgr.setconvertNum(Mylplayer.position);
            deskInfo_1.DeskInfo.readyPos = Mylplayer.position;
            deskMgr_1.DeskMgr.initSeat(this.seats);
        }
        if (C_User_1.UserInfo.testuuid == deskInfo_1.DeskInfo.createDeskPlayerId) {
            this.switchAlert(2);
        }
        //  this.setMyCard(0, 30)
        setTimeout(function () {
            deskMgr_1.DeskMgr.TweenTurnCard(_this.mycards[0]);
        }, 1000);
    };
    game.prototype.initprops = function () {
        this.labdichi = this.deskbet.getChildByName("labdichi").getComponent(cc.Label);
        this.chouma_di = this.deskbet.getChildByName("chouma_di").getComponentInChildren(cc.Label);
    };
    game.prototype.setMyCard = function (index, value) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.mycards[index].getComponent(cc.Sprite);
                        return [4 /*yield*/, deskMgr_1.DeskMgr.convertPoker(value)];
                    case 1:
                        _a.spriteFrame = _b.sent();
                        this.mycards[index].active = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    game.prototype.setChoumaNum = function (Num, index) {
        this.choumas[index].getComponentInChildren(cc.Label).string = "" + Num;
        this.choumas[index].active = true;
    };
    game.prototype.setDichi = function (dichiNum) {
        this.labdichi.string = "" + dichiNum;
        this.chouma_di.string = "" + dichiNum;
        this.chouma_di.node.active = true;
        this.labdichi.node.active = true;
    };
    game.prototype.setSidechi = function (sidechiNum, index) {
        this.choumasides[index - 1].active = true;
        this.choumasides[index - 1].getChildByName("labside").getComponent(cc.Label).string = "" + sidechiNum;
    };
    game.prototype.switchAlert = function (index) {
        this.alert.children.forEach(function (child, _index) {
            child.active = index == _index;
        });
    };
    game.prototype.craeteHead = function (seat, id) {
        var seatNode = this.seats[seat - 1];
        var _head = cc.instantiate(this.headItem);
        var _ts = _head.getComponent(head_1.default);
        _ts.init(id, seat, seat);
        _head.parent = seatNode;
        _head.x = 0;
        _head.y = 0;
        this.heads[seat] = _head;
    };
    game.prototype.setHeadInfo = function (seat, id) {
        var seatNode = this.seats[seat - 1];
        var _head = seatNode.children[0];
        var _ts = _head.getComponent(head_1.default);
        _ts.setHeadInfo(id);
    };
    // setElseHeadInfo(seat: number, id: number) {
    //     let convertSeat = DeskMgr.convertArr[seat - 1]
    //     let seatNode = this.seats[convertSeat - 1]
    //     let _head = cc.instantiate(this.headItem)
    //     let _ts = _head.getComponent(head)
    //     _ts.init(id, seat, convertSeat)
    //     _head.parent = seatNode
    //     _head.x = 0
    //     _head.y = 0
    // }
    game.prototype.getHeadBySeat = function (clientSeat) {
        var trueSeat = 0;
        var seatNode = this.seats[clientSeat - 1];
        var _head = seatNode.children[0];
        var _ts = _head.getComponent(head_1.default);
        trueSeat = _ts.seat;
        return trueSeat;
    };
    game.prototype.getSeatByHeadId = function (trueSeat) {
        var clientSeat = 0;
        var head = this.heads[trueSeat];
        clientSeat = Number(head.parent.name.slice(-1)) + 1;
        return clientSeat;
    };
    game.prototype.removeHead = function (trueSeat, id) {
        this.seats.forEach(function (seat, index) {
            var _head = seat.children[0];
            if (_head) {
                var _ts = _head.getComponent(head_1.default);
                if (_ts.playerId == id) {
                    _ts.clearhead();
                    //_head.destroy()
                }
                _ts.convertseat = index + 1;
            }
        });
        deskInfo_1.DeskInfo.clearDplayer(trueSeat);
    };
    game.prototype.update = function (dt) {
        if (!deskInfo_1.DeskInfo.isStartGame) {
            return;
        }
        this.nowTime -= dt;
        var tmpInt = Math.floor(this.nowTime);
        if (tmpInt !== this.nowTimeInt && tmpInt >= 0) {
            this.nowTimeInt = tmpInt;
            if (this.nowClockLabel) {
                this.nowClockLabel.string = tmpInt.toString();
            }
        }
    };
    game.prototype.onDestroy = function () {
        C_User_1.UserInfo.cwebsocket.off(cmdClient_1.cmdClientEvent.CONNECT, this.svr_connect, this);
        C_User_1.UserInfo.cwebsocket.off(cmdClient_1.cmdClientEvent.BET, this.svr_bet, this);
        C_User_1.UserInfo.cwebsocket.off(cmdClient_1.cmdClientEvent.GAMESTART, this.svr_gamestart, this);
        C_User_1.UserInfo.cwebsocket.off(cmdClient_1.cmdClientEvent.GAMEOVER, this.svr_gameover, this);
        C_User_1.UserInfo.cwebsocket.off(cmdClient_1.cmdClientEvent.SITDOWNORSTANDUP, this.svr_downup, this);
        C_User_1.UserInfo.cwebsocket.off(cmdClient_1.cmdClientEvent.START, this.svr_start, this);
        C_User_1.UserInfo.cwebsocket.off(cmdClient_1.cmdClientEvent.BOARD, this.svr_board, this);
        C_User_1.UserInfo.cwebsocket.off(cmdClient_1.cmdClientEvent.BRING, this.svr_bring, this);
        C_User_1.UserInfo.cwebsocket.off(cmdClient_1.cmdClientEvent.INSURANCE, this.svr_insurance, this);
        C_User_1.UserInfo.cwebsocket.off(cmdClient_1.cmdClientEvent.EXIT, this.svr_exit, this);
    };
    __decorate([
        property(cc.Node)
    ], game.prototype, "card", void 0);
    __decorate([
        property(light_1.default)
    ], game.prototype, "light", void 0);
    __decorate([
        property(cc.Node)
    ], game.prototype, "alert", void 0);
    __decorate([
        property(cc.Node)
    ], game.prototype, "deskbet", void 0);
    __decorate([
        property(cc.Node)
    ], game.prototype, "deskinfo", void 0);
    __decorate([
        property(cc.Node)
    ], game.prototype, "headItem", void 0);
    __decorate([
        property(cc.Node)
    ], game.prototype, "myOperate", void 0);
    __decorate([
        property(cc.Node)
    ], game.prototype, "seats", void 0);
    __decorate([
        property(cc.Node)
    ], game.prototype, "choumas", void 0);
    __decorate([
        property(cc.Node)
    ], game.prototype, "bottoms", void 0);
    __decorate([
        property(cc.Node)
    ], game.prototype, "choumasides", void 0);
    __decorate([
        property(cc.Node)
    ], game.prototype, "mycards", void 0);
    game = __decorate([
        ccclass
    ], game);
    return game;
}(ComponentBase_1.default));
exports.default = game;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMl9nYW1lXFxzY3JpcHRcXGdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNkRBQTREO0FBQzVELDJFQUFzRTtBQUN0RSw2REFBOEQ7QUFDOUQsdUVBQXNFO0FBQ3RFLDZEQUEwRTtBQUMxRSxnREFBbUU7QUFDbkUsOENBQTBEO0FBQzFELDRDQUEyQztBQUMzQyxnREFBc0U7QUFDdEUsa0RBQTJEO0FBQzNELCtCQUEwQjtBQUMxQixpQ0FBNEI7QUFFdEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQWE7SUFBL0M7UUFBQSxxRUF5YUM7UUF0YUcsVUFBSSxHQUFZLElBQUksQ0FBQztRQUdyQixXQUFLLEdBQVUsSUFBSSxDQUFDO1FBR3BCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixXQUFLLEdBQWMsRUFBRSxDQUFDO1FBR3RCLGFBQU8sR0FBYyxFQUFFLENBQUM7UUFHeEIsYUFBTyxHQUFjLEVBQUUsQ0FBQztRQUd4QixpQkFBVyxHQUFjLEVBQUUsQ0FBQztRQUc1QixhQUFPLEdBQWMsRUFBRSxDQUFDO1FBRWhCLFdBQUssR0FBb0MsRUFBRSxDQUFBO1FBMlZuRCxRQUFRO1FBRUEsYUFBTyxHQUFXLENBQUMsQ0FBQTtRQUVuQixnQkFBVSxHQUFXLENBQUMsQ0FBQTtRQUV0QixtQkFBYSxHQUFhLElBQUksQ0FBQTs7SUFrQzFDLENBQUM7SUExWGEsb0JBQUssR0FBZjtRQUdJLE1BQU07UUFDTixp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QUFDO0NBemFELEFBeWFDLENBemFpQyx1QkFBYSxHQXlhOUM7a0JBemFvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IGJ1bmRsZUxvYWRlciB9IGZyb20gXCIuLi8uLi8uLi9zY3JpcHQvYnVuZGxlTG9hZGVyXCI7XHJcbmltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gXCIuLi8uLi8wMF9iYXNlL3NjcmlwdC9jb21tb24vQ29tcG9uZW50QmFzZVwiO1xyXG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gXCIuLi8uLi8wMV9oYWxsL3NjcmlwdC9jb25maWcvQ19Vc2VyXCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLzAxX2hhbGwvc2NyaXB0L2NvbmZpZy9WaWV3TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBWaWV3RW51bSwgV2lkZ2V0RW51bSB9IGZyb20gXCIuLi8uLi8wMV9oYWxsL3NjcmlwdC9jb25maWcvY29uZmlnXCI7XHJcbmltcG9ydCB7IGNtZENsaWVudEV2ZW50LCBjbWRDbGllbnRUeXBlIH0gZnJvbSBcIi4vY29uZmlnL2NtZENsaWVudFwiO1xyXG5pbXBvcnQgeyBEZXNrSW5mbywgU19HYW1lU3RhcnQgfSBmcm9tIFwiLi9jb25maWcvZGVza0luZm9cIjtcclxuaW1wb3J0IHsgRGVza01nciB9IGZyb20gXCIuL2NvbmZpZy9kZXNrTWdyXCI7XHJcbmltcG9ydCB7IERlc2tTZWF0U3RhdHVzLCBQbGF5ZXJJbmZvU3RhdHVzIH0gZnJvbSBcIi4vY29uZmlnL2dhbWVDb25zdFwiO1xyXG5pbXBvcnQgeyBOb2RlRFpwb29sLCBQT09MVFlQRSB9IGZyb20gXCIuL2NvbmZpZy9ub2RlRFpwb29sXCI7XHJcbmltcG9ydCBoZWFkIGZyb20gXCIuL2hlYWRcIjtcclxuaW1wb3J0IGxpZ2h0IGZyb20gXCIuL2xpZ2h0XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZ2FtZSBleHRlbmRzIENvbXBvbmVudEJhc2Uge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2FyZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGxpZ2h0KVxyXG4gICAgbGlnaHQ6IGxpZ2h0ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGFsZXJ0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRlc2tiZXQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZGVza2luZm86IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGVhZEl0ZW06IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbXlPcGVyYXRlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNlYXRzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNob3VtYXM6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYm90dG9tczogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjaG91bWFzaWRlczogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBteWNhcmRzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGhlYWRzOiB7IFt0cnVlU2VhdDogbnVtYmVyXTogY2MuTm9kZSB9ID0ge31cclxuXHJcbiAgICAvKiog5qGM5a2Q5Z2Q5qCHICovXHJcbiAgICBwcml2YXRlIGN1clNlYXRQOiBbeyB4OiBudW1iZXIsIHk6IG51bWJlciB9XVxyXG5cclxuICAgIHByaXZhdGUgbGFiZGljaGk6IGNjLkxhYmVsXHJcbiAgICBwcml2YXRlIGNob3VtYV9kaTogY2MuTGFiZWxcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG5cclxuXHJcbiAgICAgICAgLy/mtojmga/lm57osINcclxuICAgICAgICBVc2VySW5mby5jd2Vic29ja2V0Lm9uKGNtZENsaWVudEV2ZW50LkJFVCwgdGhpcy5zdnJfYmV0LCB0aGlzKVxyXG4gICAgICAgIFVzZXJJbmZvLmN3ZWJzb2NrZXQub24oY21kQ2xpZW50RXZlbnQuR0FNRVNUQVJULCB0aGlzLnN2cl9nYW1lc3RhcnQsIHRoaXMpXHJcbiAgICAgICAgVXNlckluZm8uY3dlYnNvY2tldC5vbihjbWRDbGllbnRFdmVudC5HQU1FT1ZFUiwgdGhpcy5zdnJfZ2FtZW92ZXIsIHRoaXMpXHJcbiAgICAgICAgVXNlckluZm8uY3dlYnNvY2tldC5vbihjbWRDbGllbnRFdmVudC5TSVRET1dOT1JTVEFORFVQLCB0aGlzLnN2cl9kb3dudXAsIHRoaXMpXHJcbiAgICAgICAgVXNlckluZm8uY3dlYnNvY2tldC5vbihjbWRDbGllbnRFdmVudC5TVEFSVCwgdGhpcy5zdnJfc3RhcnQsIHRoaXMpXHJcbiAgICAgICAgVXNlckluZm8uY3dlYnNvY2tldC5vbihjbWRDbGllbnRFdmVudC5CT0FSRCwgdGhpcy5zdnJfYm9hcmQsIHRoaXMpXHJcbiAgICAgICAgVXNlckluZm8uY3dlYnNvY2tldC5vbihjbWRDbGllbnRFdmVudC5CUklORywgdGhpcy5zdnJfYnJpbmcsIHRoaXMpXHJcbiAgICAgICAgVXNlckluZm8uY3dlYnNvY2tldC5vbihjbWRDbGllbnRFdmVudC5JTlNVUkFOQ0UsIHRoaXMuc3ZyX2luc3VyYW5jZSwgdGhpcylcclxuICAgICAgICBVc2VySW5mby5jd2Vic29ja2V0Lm9uKGNtZENsaWVudEV2ZW50LkVYSVQsIHRoaXMuc3ZyX2V4aXQsIHRoaXMpXHJcblxyXG4gICAgICAgIC8v5LqL5Lu25Zue6LCDXHJcbiAgICAgICAgdGhpcy5Ub3VjaE9uKHRoaXMuYWxlcnQuY2hpbGRyZW5bMl0sIHRoaXMuZXZ0X3N0YXJ0LCB0aGlzKSAvLyDmiL/kuLvmuLjmiI/lvIDlp4tcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJvdHRvbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGJ0biA9IHRoaXMuYm90dG9tc1tpXVxyXG4gICAgICAgICAgICB0aGlzLlRvdWNoT24oYnRuLCB0aGlzLmV2dF9ib3R0b20sIHRoaXMpIC8vIOa4uOaIj+WcuuaZr+S4i+aWueaMiemSruS6i+S7tlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pbml0cHJvcHMoKVxyXG4gICAgICAgIHRoaXMuaW5pdCgpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgVXNlckluZm8uY3dlYnNvY2tldC5vbihjbWRDbGllbnRFdmVudC5DT05ORUNULCB0aGlzLnN2cl9jb25uZWN0LCB0aGlzKSAvLyDlj6rlpITnkIbmlbDmja5cclxuICAgICAgICBVc2VySW5mby5jd2Vic29ja2V0Lm9uKGNtZENsaWVudEV2ZW50LlJFQ09OTkVDVCwgdGhpcy5zdnJfY29ubmVjdCwgdGhpcykgLy8g5Y+q5aSE55CG5pWw5o2uXHJcblxyXG4gICAgICAgIE5vZGVEWnBvb2wuaW5pdENhcmQoKVxyXG4gICAgICAgIE5vZGVEWnBvb2wuaW5pdENvaW4oKVxyXG4gICAgfVxyXG4gICAgLy/mtojmga/lm57osINcclxuICAgIHByaXZhdGUgc3ZyX2Nvbm5lY3QoZGF0YTogYW55KSB7XHJcbiAgICAgICAgaWYgKGRhdGEucmVxdWVzdFR5cGUgPT0gY21kQ2xpZW50VHlwZS5TRVJWRVJUT0NMSUVOVCkge1xyXG4gICAgICAgICAgICBEZXNrSW5mby5zZXRMcGxheWVyKGRhdGEucmVxdWVzdERhdGEuaWQsIGRhdGEucmVxdWVzdERhdGEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3ZyX2JldChkYXRhOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN2cl9iZXRcIilcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN2cl9nYW1lc3RhcnQoZGF0YTogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzdnJfZ2FtZXN0YXJ0XCIpXHJcbiAgICAgICAgdGhpcy5jYXJkLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgbGV0IF9kYXRhOiBTX0dhbWVTdGFydCA9IGRhdGEucmVxdWVzdERhdGFcclxuICAgICAgICB0aGlzLnN3aXRjaEFsZXJ0KC0xKVxyXG5cclxuICAgICAgICBEZXNrSW5mby5jdXJyUm91bmRQbGF5ZXJJZCA9IF9kYXRhLmN1clBsYXllcklkXHJcbiAgICAgICAgRGVza0luZm8uZGVza0lkID0gX2RhdGEuZGVza0lkXHJcbiAgICAgICAgRGVza0luZm8ucG90cyA9IF9kYXRhLnBsYXllclBvdHNcclxuICAgICAgICBEZXNrSW5mby5wb3RzLmZvckVhY2goKHBvdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBvdHMgPSBEZXNrTWdyLmFkZFBvdHMocG90KVxyXG4gICAgICAgICAgICBpZiAoaW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREaWNoaShwb3RzKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTaWRlY2hpKHBvdHMsIGluZGV4KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIF9kYXRhLnNlYXRQbGF5ZXJMaXN0LmZvckVhY2goZHBsYXllciA9PiB7XHJcbiAgICAgICAgICAgIERlc2tJbmZvLnNldERwbGF5ZXIoZHBsYXllci5wb3NpdGlvbiwgZHBsYXllcilcclxuICAgICAgICAgICAgaWYgKGRwbGF5ZXIucGxheWVySWQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2xpZW50U2VhdDogbnVtYmVyID0gdGhpcy5nZXRTZWF0QnlIZWFkSWQoZHBsYXllci5wb3NpdGlvbilcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2hvdW1hTnVtKDAsIGNsaWVudFNlYXQgLSAxKVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBoZWFkID0gdGhpcy5oZWFkc1tkcGxheWVyLnBvc2l0aW9uXVxyXG4gICAgICAgICAgICAgICAgaGVhZC5nZXRDaGlsZEJ5TmFtZShcInNwclR3b0NhcmRcIikuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgICAgICBEZXNrTWdyLlR3ZWVuU2VuZENhcmQoaGVhZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkcGxheWVyLnBvc2l0aW9uID09IFVzZXJJbmZvLnRlc3R1dWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkcGxheWVyID0gRGVza0luZm8uZ2V0TXlkcGxheWVyKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHBsYXllci5oYW5kc0NhcmQuZm9yRWFjaCgoY2FyZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TXlDYXJkKGluZGV4LCBjYXJkLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWQuZ2V0Q2hpbGRCeU5hbWUoXCJzcHJUd29DYXJkXCIpLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCB0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAvL+WQjue7reihpem9kOWPkeeJjOWKqOeUu1xyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHN2cl9nYW1lb3ZlcihkYXRhOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN2cl9nYW1lb3ZlclwiKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3ZyX2Rvd251cChkYXRhOiBhbnkpIHtcclxuICAgICAgICBpZiAoIWRhdGEpIHJldHVybiBjYy5lcnJvcihcIuaVsOaNrumUmeivr1wiKVxyXG4gICAgICAgIGxldCBfZGF0YSA9IGRhdGEucmVxdWVzdERhdGFcclxuICAgICAgICBpZiAoX2RhdGEuc3RhdHVzID09IERlc2tTZWF0U3RhdHVzLlRFTVBPUkFSWSkge1xyXG4gICAgICAgICAgICBpZiAoVXNlckluZm8udGVzdHV1aWQgPT0gX2RhdGEucGxheWVySWQpIHtcclxuICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLkFsZXJ0KFdpZGdldEVudW0uSm9pbkRlc2ssIGJ1bmRsZUxvYWRlci5FTlVNX0JVTkRMRS5HQU1FKVxyXG4gICAgICAgICAgICAgICAgbGV0IGNsaWVudFNlYXQgPSB0aGlzLmdldFNlYXRCeUhlYWRJZChfZGF0YS5wb3NpdGlvbilcclxuICAgICAgICAgICAgICAgIC8vRGVza01nci5zZXRjb252ZXJ0TnVtKERlc2tNZ3IuY29udmVydChfZGF0YS5wb3NpdGlvbikpXHJcbiAgICAgICAgICAgICAgICBEZXNrTWdyLnNldGNvbnZlcnROdW0oY2xpZW50U2VhdClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SGVhZEluZm8oY2xpZW50U2VhdCwgX2RhdGEucGxheWVySWQpXHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuY3JhZXRlSGVhZChfZGF0YS5wb3NpdGlvbiwgX2RhdGEucGxheWVySWQpXHJcbiAgICAgICAgICAgICAgICBEZXNrTWdyLlR3ZWVuU2VhdCh0aGlzLnNlYXRzKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNsaWVudFNlYXQgPSB0aGlzLmdldFNlYXRCeUhlYWRJZChfZGF0YS5wb3NpdGlvbilcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SGVhZEluZm8oY2xpZW50U2VhdCwgX2RhdGEucGxheWVySWQpXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvL+aVsOaNruWkhOeQhlxyXG4gICAgICAgICAgICBsZXQgZHBsYXllciA9IERlc2tJbmZvLmdldERwbGF5ZXIoX2RhdGEucG9zaXRpb24pXHJcbiAgICAgICAgICAgIGRwbGF5ZXIucG9zaXRpb24gPSBfZGF0YS5wb3NpdGlvblxyXG4gICAgICAgICAgICBkcGxheWVyLnN0YXR1cyA9IFBsYXllckluZm9TdGF0dXMuVEVNUE9SQVJZXHJcbiAgICAgICAgfSBlbHNlIGlmIChfZGF0YS5zdGF0dXMgPT0gRGVza1NlYXRTdGF0dXMuU0lURE9XTikge1xyXG4gICAgICAgICAgICBsZXQgY2xpZW50U2VhdCA9IHRoaXMuZ2V0U2VhdEJ5SGVhZElkKF9kYXRhLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICB0aGlzLnNldEhlYWRJbmZvKGNsaWVudFNlYXQsIF9kYXRhLnBsYXllcklkKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUhlYWQoX2RhdGEucG9zaXRpb24sIF9kYXRhLnBsYXllcklkKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN2cl9zdGFydChkYXRhOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN2cl9iZXRcIilcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN2cl9ib2FyZChkYXRhOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN2cl9ib2FyZFwiKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3ZyX2JyaW5nKGRhdGE6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3ZyX2JyaW5nXCIpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdnJfaW5zdXJhbmNlKGRhdGE6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3ZyX2luc3VyYW5jZVwiKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3ZyX2V4aXQoZGF0YTogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzdnJfZXhpdFwiKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL+S6i+S7tuWbnuiwg1xyXG4gICAgcHJpdmF0ZSBldnRfc2l0ZG93bihlOiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBlLmN1cnJlbnRUYXJnZXQubmFtZVxyXG4gICAgICAgIC8vIGxldCBzZWF0ID0gRGVza01nci5jb252ZXJ0b2JqW051bWJlcihuYW1lLnNsaWNlKC0xKSkgKyAxXVxyXG4gICAgICAgIC8vIGxldCBzZWF0ID0gTnVtYmVyKG5hbWUuc2xpY2UoLTEpKSArIDFcclxuICAgICAgICBsZXQgc2VhdCA9IHRoaXMuZ2V0SGVhZEJ5U2VhdChOdW1iZXIobmFtZS5zbGljZSgtMSkpICsgMSlcclxuICAgICAgICBEZXNrSW5mby5yZWFkeVBvcyA9IHNlYXRcclxuICAgICAgICBsZXQgaW5mbyA9IHtcclxuICAgICAgICAgICAgcGxheWVySWQ6IFVzZXJJbmZvLnRlc3R1dWlkLFxyXG4gICAgICAgICAgICBkZXNrSWQ6IDksXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBEZXNrSW5mby5yZWFkeVBvcyxcclxuICAgICAgICAgICAgc3RhdHVzOiBEZXNrU2VhdFN0YXR1cy5URU1QT1JBUllcclxuICAgICAgICB9XHJcbiAgICAgICAgVXNlckluZm8uY3dlYnNvY2tldC5jbGllbnRTZW5kKGNtZENsaWVudEV2ZW50LlNJVERPV05PUlNUQU5EVVAsIGluZm8pXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhlKVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBldnRfc3RhcnQoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXZ0X3N0YXJ0XCIpXHJcbiAgICAgICAgaWYgKFVzZXJJbmZvLnRlc3R1dWlkID09IERlc2tJbmZvLmNyZWF0ZURlc2tQbGF5ZXJJZCkge1xyXG4gICAgICAgICAgICBsZXQgaW5mbyA9IHtcclxuICAgICAgICAgICAgICAgIHBsYXllcklkOiBVc2VySW5mby50ZXN0dXVpZCxcclxuICAgICAgICAgICAgICAgIGRlc2tJZDogOVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFVzZXJJbmZvLmN3ZWJzb2NrZXQuY2xpZW50U2VuZChjbWRDbGllbnRFdmVudC5TVEFSVCwgaW5mbylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBldnRfYm90dG9tKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImV2dF9ib3R0b21cIilcclxuICAgICAgICBsZXQgbmFtZSA9IGUuY3VycmVudFRhcmdldC5uYW1lXHJcbiAgICAgICAgc3dpdGNoIChOdW1iZXIobmFtZS5zbGljZSgtMSkpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgVmlld01hbmFnZXIuQWxlcnQoV2lkZ2V0RW51bS5HYW1lU2V0dGluZywgYnVuZGxlTG9hZGVyLkVOVU1fQlVORExFLkdBTUUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/liJ3lp4vljJZcclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJTZWF0UCA9IFVzZXJJbmZvLnNlYXRQSnNvbltEZXNrSW5mby5zZWF0TGVuXVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRGVza0luZm8uc2VhdExlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhdHNbaV0ueCA9IHRoaXMuY3VyU2VhdFBbaV0ueFxyXG4gICAgICAgICAgICB0aGlzLnNlYXRzW2ldLnkgPSB0aGlzLmN1clNlYXRQW2ldLnlcclxuICAgICAgICAgICAgdGhpcy5zZWF0c1tpXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuVG91Y2hPbih0aGlzLnNlYXRzW2ldLCB0aGlzLmV2dF9zaXRkb3duLCB0aGlzKVxyXG4gICAgICAgICAgICBsZXQgZHBsYXllciA9IERlc2tJbmZvLmdldERwbGF5ZXIoaSArIDEpXHJcbiAgICAgICAgICAgIGlmIChkcGxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyYWV0ZUhlYWQoZHBsYXllci5wb3NpdGlvbiwgZHBsYXllci5wbGF5ZXJJZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IE15bHBsYXllciA9IERlc2tJbmZvLmdldE15bHBsYXllcigpXHJcbiAgICAgICAgaWYgKE15bHBsYXllci5wb3NpdGlvbiA+IDApIHtcclxuICAgICAgICAgICAgRGVza01nci5zZXRjb252ZXJ0TnVtKE15bHBsYXllci5wb3NpdGlvbilcclxuICAgICAgICAgICAgRGVza0luZm8ucmVhZHlQb3MgPSBNeWxwbGF5ZXIucG9zaXRpb25cclxuICAgICAgICAgICAgRGVza01nci5pbml0U2VhdCh0aGlzLnNlYXRzKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKFVzZXJJbmZvLnRlc3R1dWlkID09IERlc2tJbmZvLmNyZWF0ZURlc2tQbGF5ZXJJZCkge1xyXG4gICAgICAgICAgICB0aGlzLnN3aXRjaEFsZXJ0KDIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vICB0aGlzLnNldE15Q2FyZCgwLCAzMClcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgRGVza01nci5Ud2VlblR1cm5DYXJkKHRoaXMubXljYXJkc1swXSlcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGluaXRwcm9wcygpIHtcclxuICAgICAgICB0aGlzLmxhYmRpY2hpID0gdGhpcy5kZXNrYmV0LmdldENoaWxkQnlOYW1lKFwibGFiZGljaGlcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgIHRoaXMuY2hvdW1hX2RpID0gdGhpcy5kZXNrYmV0LmdldENoaWxkQnlOYW1lKFwiY2hvdW1hX2RpXCIpLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgYXN5bmMgc2V0TXlDYXJkKGluZGV4OiBudW1iZXIsIHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm15Y2FyZHNbaW5kZXhdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gYXdhaXQgRGVza01nci5jb252ZXJ0UG9rZXIodmFsdWUpXHJcbiAgICAgICAgdGhpcy5teWNhcmRzW2luZGV4XS5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2hvdW1hTnVtKE51bTogbnVtYmVyLCBpbmRleDogbnVtYmVyLCkge1xyXG4gICAgICAgIHRoaXMuY2hvdW1hc1tpbmRleF0uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nID0gXCJcIiArIE51bVxyXG4gICAgICAgIHRoaXMuY2hvdW1hc1tpbmRleF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXREaWNoaShkaWNoaU51bTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5sYWJkaWNoaS5zdHJpbmcgPSBcIlwiICsgZGljaGlOdW1cclxuICAgICAgICB0aGlzLmNob3VtYV9kaS5zdHJpbmcgPSBcIlwiICsgZGljaGlOdW1cclxuICAgICAgICB0aGlzLmNob3VtYV9kaS5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLmxhYmRpY2hpLm5vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIHNldFNpZGVjaGkoc2lkZWNoaU51bTogbnVtYmVyLCBpbmRleCkge1xyXG4gICAgICAgIHRoaXMuY2hvdW1hc2lkZXNbaW5kZXggLSAxXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5jaG91bWFzaWRlc1tpbmRleCAtIDFdLmdldENoaWxkQnlOYW1lKFwibGFic2lkZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIgKyBzaWRlY2hpTnVtXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN3aXRjaEFsZXJ0KGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5hbGVydC5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCwgX2luZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNoaWxkLmFjdGl2ZSA9IGluZGV4ID09IF9pbmRleFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjcmFldGVIZWFkKHNlYXQ6IG51bWJlciwgaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBzZWF0Tm9kZSA9IHRoaXMuc2VhdHNbc2VhdCAtIDFdXHJcbiAgICAgICAgbGV0IF9oZWFkID0gY2MuaW5zdGFudGlhdGUodGhpcy5oZWFkSXRlbSlcclxuICAgICAgICBsZXQgX3RzID0gX2hlYWQuZ2V0Q29tcG9uZW50KGhlYWQpXHJcbiAgICAgICAgX3RzLmluaXQoaWQsIHNlYXQsIHNlYXQpXHJcbiAgICAgICAgX2hlYWQucGFyZW50ID0gc2VhdE5vZGVcclxuICAgICAgICBfaGVhZC54ID0gMFxyXG4gICAgICAgIF9oZWFkLnkgPSAwXHJcbiAgICAgICAgdGhpcy5oZWFkc1tzZWF0XSA9IF9oZWFkXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldEhlYWRJbmZvKHNlYXQ6IG51bWJlciwgaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBzZWF0Tm9kZSA9IHRoaXMuc2VhdHNbc2VhdCAtIDFdXHJcbiAgICAgICAgbGV0IF9oZWFkID0gc2VhdE5vZGUuY2hpbGRyZW5bMF1cclxuICAgICAgICBsZXQgX3RzID0gX2hlYWQuZ2V0Q29tcG9uZW50KGhlYWQpXHJcbiAgICAgICAgX3RzLnNldEhlYWRJbmZvKGlkKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gc2V0RWxzZUhlYWRJbmZvKHNlYXQ6IG51bWJlciwgaWQ6IG51bWJlcikge1xyXG4gICAgLy8gICAgIGxldCBjb252ZXJ0U2VhdCA9IERlc2tNZ3IuY29udmVydEFycltzZWF0IC0gMV1cclxuICAgIC8vICAgICBsZXQgc2VhdE5vZGUgPSB0aGlzLnNlYXRzW2NvbnZlcnRTZWF0IC0gMV1cclxuICAgIC8vICAgICBsZXQgX2hlYWQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmhlYWRJdGVtKVxyXG4gICAgLy8gICAgIGxldCBfdHMgPSBfaGVhZC5nZXRDb21wb25lbnQoaGVhZClcclxuICAgIC8vICAgICBfdHMuaW5pdChpZCwgc2VhdCwgY29udmVydFNlYXQpXHJcbiAgICAvLyAgICAgX2hlYWQucGFyZW50ID0gc2VhdE5vZGVcclxuICAgIC8vICAgICBfaGVhZC54ID0gMFxyXG4gICAgLy8gICAgIF9oZWFkLnkgPSAwXHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIGdldEhlYWRCeVNlYXQoY2xpZW50U2VhdDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHRydWVTZWF0ID0gMFxyXG4gICAgICAgIGxldCBzZWF0Tm9kZSA9IHRoaXMuc2VhdHNbY2xpZW50U2VhdCAtIDFdXHJcbiAgICAgICAgbGV0IF9oZWFkID0gc2VhdE5vZGUuY2hpbGRyZW5bMF1cclxuICAgICAgICBsZXQgX3RzID0gX2hlYWQuZ2V0Q29tcG9uZW50KGhlYWQpXHJcbiAgICAgICAgdHJ1ZVNlYXQgPSBfdHMuc2VhdFxyXG4gICAgICAgIHJldHVybiB0cnVlU2VhdFxyXG4gICAgfVxyXG5cclxuICAgIGdldFNlYXRCeUhlYWRJZCh0cnVlU2VhdDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGNsaWVudFNlYXQgPSAwXHJcbiAgICAgICAgbGV0IGhlYWQgPSB0aGlzLmhlYWRzW3RydWVTZWF0XVxyXG4gICAgICAgIGNsaWVudFNlYXQgPSBOdW1iZXIoaGVhZC5wYXJlbnQubmFtZS5zbGljZSgtMSkpICsgMVxyXG4gICAgICAgIHJldHVybiBjbGllbnRTZWF0XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlSGVhZCh0cnVlU2VhdDogbnVtYmVyLCBpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZWF0cy5mb3JFYWNoKChzZWF0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgX2hlYWQgPSBzZWF0LmNoaWxkcmVuWzBdXHJcbiAgICAgICAgICAgIGlmIChfaGVhZCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IF90cyA9IF9oZWFkLmdldENvbXBvbmVudChoZWFkKVxyXG4gICAgICAgICAgICAgICAgaWYgKF90cy5wbGF5ZXJJZCA9PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90cy5jbGVhcmhlYWQoKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vX2hlYWQuZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBfdHMuY29udmVydHNlYXQgPSBpbmRleCArIDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBEZXNrSW5mby5jbGVhckRwbGF5ZXIodHJ1ZVNlYXQpXHJcbiAgICB9XHJcblxyXG4gICAgLy/lhbbku5bpkqnlrZDlh73mlbBcclxuXHJcbiAgICBwcml2YXRlIG5vd1RpbWU6IG51bWJlciA9IDBcclxuXHJcbiAgICBwcml2YXRlIG5vd1RpbWVJbnQ6IG51bWJlciA9IDBcclxuXHJcbiAgICBwcml2YXRlIG5vd0Nsb2NrTGFiZWw6IGNjLkxhYmVsID0gbnVsbFxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCFEZXNrSW5mby5pc1N0YXJ0R2FtZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm93VGltZSAtPSBkdDtcclxuICAgICAgICBsZXQgdG1wSW50ID0gTWF0aC5mbG9vcih0aGlzLm5vd1RpbWUpO1xyXG4gICAgICAgIGlmICh0bXBJbnQgIT09IHRoaXMubm93VGltZUludCAmJiB0bXBJbnQgPj0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vd1RpbWVJbnQgPSB0bXBJbnQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vd0Nsb2NrTGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm93Q2xvY2tMYWJlbC5zdHJpbmcgPSB0bXBJbnQudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBVc2VySW5mby5jd2Vic29ja2V0Lm9mZihjbWRDbGllbnRFdmVudC5DT05ORUNULCB0aGlzLnN2cl9jb25uZWN0LCB0aGlzKVxyXG4gICAgICAgIFVzZXJJbmZvLmN3ZWJzb2NrZXQub2ZmKGNtZENsaWVudEV2ZW50LkJFVCwgdGhpcy5zdnJfYmV0LCB0aGlzKVxyXG4gICAgICAgIFVzZXJJbmZvLmN3ZWJzb2NrZXQub2ZmKGNtZENsaWVudEV2ZW50LkdBTUVTVEFSVCwgdGhpcy5zdnJfZ2FtZXN0YXJ0LCB0aGlzKVxyXG4gICAgICAgIFVzZXJJbmZvLmN3ZWJzb2NrZXQub2ZmKGNtZENsaWVudEV2ZW50LkdBTUVPVkVSLCB0aGlzLnN2cl9nYW1lb3ZlciwgdGhpcylcclxuICAgICAgICBVc2VySW5mby5jd2Vic29ja2V0Lm9mZihjbWRDbGllbnRFdmVudC5TSVRET1dOT1JTVEFORFVQLCB0aGlzLnN2cl9kb3dudXAsIHRoaXMpXHJcbiAgICAgICAgVXNlckluZm8uY3dlYnNvY2tldC5vZmYoY21kQ2xpZW50RXZlbnQuU1RBUlQsIHRoaXMuc3ZyX3N0YXJ0LCB0aGlzKVxyXG4gICAgICAgIFVzZXJJbmZvLmN3ZWJzb2NrZXQub2ZmKGNtZENsaWVudEV2ZW50LkJPQVJELCB0aGlzLnN2cl9ib2FyZCwgdGhpcylcclxuICAgICAgICBVc2VySW5mby5jd2Vic29ja2V0Lm9mZihjbWRDbGllbnRFdmVudC5CUklORywgdGhpcy5zdnJfYnJpbmcsIHRoaXMpXHJcbiAgICAgICAgVXNlckluZm8uY3dlYnNvY2tldC5vZmYoY21kQ2xpZW50RXZlbnQuSU5TVVJBTkNFLCB0aGlzLnN2cl9pbnN1cmFuY2UsIHRoaXMpXHJcbiAgICAgICAgVXNlckluZm8uY3dlYnNvY2tldC5vZmYoY21kQ2xpZW50RXZlbnQuRVhJVCwgdGhpcy5zdnJfZXhpdCwgdGhpcylcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==