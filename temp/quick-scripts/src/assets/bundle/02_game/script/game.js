"use strict";
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