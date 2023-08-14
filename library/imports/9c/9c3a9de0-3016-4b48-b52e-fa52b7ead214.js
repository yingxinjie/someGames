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
var ViewManager_1 = require("../../01_hall/script/config/ViewManager");
var config_1 = require("../../01_hall/script/config/config");
var cmdClient_1 = require("./config/cmdClient");
var deskInfo_1 = require("./config/deskInfo");
var deskMgr_1 = require("./config/deskMgr");
var gameConst_1 = require("./config/gameConst");
var nodeDZpool_1 = require("./config/nodeDZpool");
var slider_1 = require("./config/slider");
var head_1 = require("./head");
var light_1 = require("./light");
var timedown_1 = require("./timedown");
var C_User_1 = require("../../01_hall/script/user/C_User");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var game = /** @class */ (function (_super) {
    __extends(game, _super);
    function game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.boards = [];
        _this.light = null;
        _this.slider = null;
        _this.alert = null;
        _this.deskbet = null;
        _this.deskinfo = null;
        _this.headItem = null;
        _this.myOperate = null;
        _this.sliderNode = null;
        _this.seats = [];
        _this.choumas = [];
        _this.bottoms = [];
        _this.choumasides = [];
        _this.mycards = [];
        _this.myCardtype = null;
        _this.labMyscore = null;
        _this.heads = {};
        return _this;
    }
    game.prototype.start = function () {
        var _this = this;
        this.initprops();
        // this.test()
        //return
        //消息回调
        C_User_1.C_User.ins.cwebsocket.on(cmdClient_1.cmdClientEvent.BET, this.svr_bet, this);
        C_User_1.C_User.ins.cwebsocket.on(cmdClient_1.cmdClientEvent.GAMESTART, this.svr_gamestart, this);
        C_User_1.C_User.ins.cwebsocket.on(cmdClient_1.cmdClientEvent.GAMEOVER, this.svr_gameover, this);
        C_User_1.C_User.ins.cwebsocket.on(cmdClient_1.cmdClientEvent.SITDOWNORSTANDUP, this.svr_downup, this);
        C_User_1.C_User.ins.cwebsocket.on(cmdClient_1.cmdClientEvent.START, this.svr_start, this);
        C_User_1.C_User.ins.cwebsocket.on(cmdClient_1.cmdClientEvent.BOARD, this.svr_board, this);
        C_User_1.C_User.ins.cwebsocket.on(cmdClient_1.cmdClientEvent.BRING, this.svr_bring, this);
        C_User_1.C_User.ins.cwebsocket.on(cmdClient_1.cmdClientEvent.INSURANCE, this.svr_insurance, this);
        C_User_1.C_User.ins.cwebsocket.on(cmdClient_1.cmdClientEvent.EXIT, this.svr_exit, this);
        //事件回调
        this.TouchOn(this.alert.children[2], this.evt_start, this); // 房主游戏开始
        for (var i = 0; i < this.bottoms.length; i++) {
            var btn = this.bottoms[i];
            this.TouchOn(btn, this.evt_bottom, this); // 游戏场景下方按钮事件
        }
        this.operNode.children.forEach(function (btn) {
            _this.TouchOn(btn, _this.evt_operate, _this);
        });
        this.notOperNode.children.forEach(function (btn) {
            _this.TouchOn(btn, _this.evt_auto, _this);
        });
        this.slider.setCallback(this.evt_slidecall, this);
        this.init();
    };
    game.prototype.test = function () {
        this.slider.init(100, 0.1);
        this.slider.setCallback(this.evt_slidecall, this);
        setTimeout(function () {
        }, 1000);
    };
    game.prototype.onLoad = function () {
        C_User_1.C_User.ins.cwebsocket.on(cmdClient_1.cmdClientEvent.CONNECT, this.svr_connect, this); // 只处理数据
        C_User_1.C_User.ins.cwebsocket.on(cmdClient_1.cmdClientEvent.RECONNECT, this.svr_connect, this); // 只处理数据
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
        if (!data)
            return cc.error("数据错误");
        var _data = data.requestData;
        deskInfo_1.DeskInfo.currRoundPlayerId = _data.nextPlayerId;
        deskInfo_1.DeskInfo.playerBetTime = _data.nextBetTime;
        this.heads[_data.playerId].getComponent(head_1.default).setStopTime();
    };
    game.prototype.svr_gamestart = function (data) {
        var _this = this;
        console.log("svr_gamestart");
        //   this.card.active = false
        var _data = data.requestData;
        this.switchAlert(-1);
        var isJoinGame = false;
        deskInfo_1.DeskInfo.currRoundPlayerId = _data.curPlayerId;
        deskInfo_1.DeskInfo.playerBetTime = _data.betTime;
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
                var clientSeat = _this.getClientSeatByTureSeat(dplayer.position);
                _this.setChoumaNum(0, clientSeat - 1);
                var head_2 = _this.heads[dplayer.position];
                head_2.getChildByName("sprTwoCard").active = false;
                deskMgr_1.DeskMgr.TweenSendCard(head_2, function () {
                    if (dplayer.position == C_User_1.C_User.ins.testuuid) {
                        var dplayer_1 = deskInfo_1.DeskInfo.getMydplayer();
                        dplayer_1.handsCard.forEach(function (card, index) {
                            deskMgr_1.DeskMgr.setCard(_this.mycards, index, card.value);
                            deskMgr_1.DeskMgr.TweenTurnCard(_this.mycards[index], function () {
                                _this.mycards[index].getChildByName("cardbg").active = false;
                            });
                        });
                    }
                    else {
                        head_2.getChildByName("sprTwoCard").active = true;
                    }
                }, _this.node);
                if (dplayer.playerId == deskInfo_1.DeskInfo.currRoundPlayerId) {
                    _this.setLigth(dplayer.position);
                }
                isJoinGame = (dplayer.playerId == C_User_1.C_User.ins.testuuid);
            }
        });
        if (deskInfo_1.DeskInfo.currRoundPlayerId == C_User_1.C_User.ins.testuuid) {
            this.switchOperate(true, _data.actions, isJoinGame);
        }
        else {
            this.switchOperate(false, _data.actions, isJoinGame);
        }
    };
    game.prototype.svr_gameover = function (data) {
        console.log("svr_gameover");
        if (!data)
            return cc.error("数据错误");
        var _data = data.requestData;
    };
    game.prototype.svr_downup = function (data) {
        if (!data)
            return cc.error("数据错误");
        var _data = data.requestData;
        if (_data.status == gameConst_1.DeskSeatStatus.TEMPORARY) {
            if (C_User_1.C_User.ins.testuuid == _data.playerId) {
                ViewManager_1.ViewManager.Alert(config_1.WidgetEnum.JoinDesk, null, bundleLoader_1.bundleLoader.ENUM_BUNDLE.GAME);
                var clientSeat = this.getClientSeatByTureSeat(_data.position);
                deskMgr_1.DeskMgr.setconvertNum(clientSeat);
                this.setHeadInfo(clientSeat, _data.playerId);
                deskMgr_1.DeskMgr.TweenSeat(this.seats);
            }
            else {
                var clientSeat = this.getClientSeatByTureSeat(_data.position);
                this.setHeadInfo(clientSeat, _data.playerId);
            }
            deskInfo_1.DeskInfo.setplayerInfo(_data.playerId, _data.position, _data.status);
        }
        else if (_data.status == gameConst_1.DeskSeatStatus.SITDOWN) {
            var clientSeat = this.getClientSeatByTureSeat(_data.position);
            this.setHeadInfo(clientSeat, _data.playerId);
            deskInfo_1.DeskInfo.setplayerInfo(_data.playerId, _data.position, _data.status);
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
        if (!data)
            return cc.error("数据错误");
        var _data = data.requestData;
        deskInfo_1.DeskInfo.currRoundPlayerId = _data.nextPlayerId;
        deskInfo_1.DeskInfo.playerBetTime = _data.nextBetTime;
        deskInfo_1.DeskInfo.deskId = _data.deskId;
        if (_data.board.length == 3) {
        }
        else if (_data.board.length == 1) {
        }
        else {
        }
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
        var seat = this.getTureSeatByClientSeat(Number(name.slice(-1)) + 1);
        deskInfo_1.DeskInfo.readyPos = seat;
        var info = {
            playerId: C_User_1.C_User.ins.testuuid,
            deskId: 9,
            position: deskInfo_1.DeskInfo.readyPos,
            status: gameConst_1.DeskSeatStatus.TEMPORARY
        };
        C_User_1.C_User.ins.cwebsocket.clientSend(cmdClient_1.cmdClientEvent.SITDOWNORSTANDUP, info);
        //console.log(e)
    };
    game.prototype.evt_start = function (e) {
        console.log("evt_start");
        if (C_User_1.C_User.ins.testuuid == deskInfo_1.DeskInfo.createDeskPlayerId) {
            var info = {
                playerId: C_User_1.C_User.ins.testuuid,
                deskId: 9
            };
            C_User_1.C_User.ins.cwebsocket.clientSend(cmdClient_1.cmdClientEvent.START, info);
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
                ViewManager_1.ViewManager.Alert(config_1.WidgetEnum.GameSetting, null, bundleLoader_1.bundleLoader.ENUM_BUNDLE.GAME);
                break;
        }
    };
    game.prototype.evt_operate = function (e) {
        console.log("evt_operate");
        var name = e.currentTarget.name;
        var info = {
            playerId: C_User_1.C_User.ins.testuuid,
            deskId: 9,
            action: "",
            bet: 0
        };
        switch (name) {
            case gameConst_1.OperateBtnName.btnAdd:
                this.sliderNode.active = true;
                break;
            case gameConst_1.OperateBtnName.btnGen:
                info.action = gameConst_1.TexasAction.CALL;
                break;
            case gameConst_1.OperateBtnName.btnGiveup:
                info.action = gameConst_1.TexasAction.FOLD;
                break;
            case gameConst_1.OperateBtnName.btnLook:
                info.action = gameConst_1.TexasAction.CHECK;
                break;
            case gameConst_1.OperateBtnName.btnB1:
                info.action = gameConst_1.TexasAction.BET;
                break;
            case gameConst_1.OperateBtnName.btnB2:
                break;
            case gameConst_1.OperateBtnName.btnB3:
                break;
            case gameConst_1.OperateBtnName.btnB4:
                break;
        }
        if (gameConst_1.OperateBtnName.btnAdd == name)
            return;
        info.bet = deskInfo_1.DeskInfo.curMyAcitons[info.action];
        C_User_1.C_User.ins.cwebsocket.clientSend(cmdClient_1.cmdClientEvent.BET, info);
    };
    game.prototype.evt_auto = function (e) {
        console.log("evt_auto");
        var name = e.currentTarget.name;
        switch (name) {
            case gameConst_1.AutoBtnName.btnAuto:
                break;
            case gameConst_1.AutoBtnName.btnAutoCancel:
                break;
        }
    };
    game.prototype.evt_slidecall = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var url1, url2, color;
            return __generator(this, function (_a) {
                url1 = value >= this.slider._maxValue() ? "slider2" : (value <= this.slider._minValue() ? "slider0" : "slider1");
                url2 = value >= this.slider._maxValue() ? "max" : (value <= this.slider._minValue() ? "normal" : "normal");
                color = value >= this.slider._maxValue() ? "#FFFFFF" : (value <= this.slider._minValue() ? "#FF0000" : "#FFFFFF");
                this.slider.setHandleSprite(url1);
                this.slider.setBackgroundSprite(url2);
                this.slider.setLabColor(color);
                this.slider.Handlelab.node.active = !(value >= this.slider._maxValue());
                return [2 /*return*/];
            });
        });
    };
    //初始化
    game.prototype.init = function () {
        this.curSeatP = C_User_1.C_User.ins.seatPJson[deskInfo_1.DeskInfo.seatLen];
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
        if (C_User_1.C_User.ins.testuuid == deskInfo_1.DeskInfo.createDeskPlayerId) {
            this.switchAlert(2);
        }
        this.light.init(deskInfo_1.DeskInfo.seatLen);
        //  this.setMyCard(0, 30)
    };
    game.prototype.initprops = function () {
        this.labdichi = this.deskbet.getChildByName("labdichi").getComponent(cc.Label);
        this.chouma_di = this.deskbet.getChildByName("chouma_di").getComponentInChildren(cc.Label);
        this.notOperNode = this.myOperate.getChildByName("notoperNode");
        this.operNode = this.myOperate.getChildByName("operNode");
        this.btnAddtime = this.myOperate.getChildByName("btnAddtime");
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
    game.prototype.setLigth = function (tureSeat) {
        var clientSeat = this.getClientSeatByTureSeat(tureSeat);
        this.light.setAngle(clientSeat);
    };
    game.prototype.getTureSeatByClientSeat = function (clientSeat) {
        var trueSeat = 0;
        var seatNode = this.seats[clientSeat - 1];
        var _head = seatNode.children[0];
        var _ts = _head.getComponent(head_1.default);
        trueSeat = _ts.seat;
        return trueSeat;
    };
    game.prototype.getClientSeatByTureSeat = function (trueSeat) {
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
    game.prototype.switchOperate = function (isShow, actions, isJoinGame) {
        var _this = this;
        this.myOperate.active = isJoinGame;
        this.operNode.active = isShow;
        this.notOperNode.active = !isShow;
        actions.forEach(function (ele) {
            _this.setBtnOper(ele.action, ele.minBet);
        });
    };
    game.prototype.setBtnOper = function (action, minBet) {
        var btn = null;
        switch (action) {
            case gameConst_1.TexasAction.BET:
                btn = this.operNode.children[4];
                btn.getChildByName("labBNum").getComponent(cc.Label).string = "x" + 1;
                btn.getChildByName("labB").getComponent(cc.Label).string = "快速下注";
                btn.getChildByName("labBScore").getComponent(cc.Label).string = "" + minBet;
                break;
            case gameConst_1.TexasAction.CALL:
                btn = this.operNode.children[3];
                btn.getChildByName("labGenNum").getComponent(cc.Label).string = "x" + minBet;
                break;
            case gameConst_1.TexasAction.CHECK:
                this.operNode.children[1].getComponent(timedown_1.default).stopTime();
                btn = this.operNode.children[2];
                btn.getComponent(timedown_1.default).playTime(deskInfo_1.DeskInfo.playerBetTime);
                break;
            case gameConst_1.TexasAction.RAISE:
            case gameConst_1.TexasAction.RERAISE:
                btn = this.operNode.children[0];
                var lpayer = deskInfo_1.DeskInfo.getMylplayer();
                this.slider.init(lpayer.bankRoll, minBet);
                break;
            case gameConst_1.TexasAction.FOLD:
                btn = this.operNode.children[1];
                btn.getComponent(timedown_1.default).playTime(deskInfo_1.DeskInfo.playerBetTime);
                break;
        }
        deskInfo_1.DeskInfo.curMyAcitons[action] = minBet;
        if (btn)
            btn.active = true;
    };
    //其他钩子函数
    // private nowTime: number = 0
    // private nowTimeInt: number = 0
    // private nowClockLabel: cc.Label = null
    // update(dt: number) {
    //     if (!DeskInfo.isStartGame) {
    //         return;
    //     }
    //     this.nowTime -= dt;
    //     let tmpInt = Math.floor(this.nowTime);
    //     if (tmpInt !== this.nowTimeInt && tmpInt >= 0) {
    //         this.nowTimeInt = tmpInt;
    //         if (this.nowClockLabel) {
    //             this.nowClockLabel.string = tmpInt.toString();
    //         }
    //     }
    // }
    game.prototype.onDestroy = function () {
        C_User_1.C_User.ins.cwebsocket.off(cmdClient_1.cmdClientEvent.CONNECT, this.svr_connect, this);
        C_User_1.C_User.ins.cwebsocket.off(cmdClient_1.cmdClientEvent.BET, this.svr_bet, this);
        C_User_1.C_User.ins.cwebsocket.off(cmdClient_1.cmdClientEvent.GAMESTART, this.svr_gamestart, this);
        C_User_1.C_User.ins.cwebsocket.off(cmdClient_1.cmdClientEvent.GAMEOVER, this.svr_gameover, this);
        C_User_1.C_User.ins.cwebsocket.off(cmdClient_1.cmdClientEvent.SITDOWNORSTANDUP, this.svr_downup, this);
        C_User_1.C_User.ins.cwebsocket.off(cmdClient_1.cmdClientEvent.START, this.svr_start, this);
        C_User_1.C_User.ins.cwebsocket.off(cmdClient_1.cmdClientEvent.BOARD, this.svr_board, this);
        C_User_1.C_User.ins.cwebsocket.off(cmdClient_1.cmdClientEvent.BRING, this.svr_bring, this);
        C_User_1.C_User.ins.cwebsocket.off(cmdClient_1.cmdClientEvent.INSURANCE, this.svr_insurance, this);
        C_User_1.C_User.ins.cwebsocket.off(cmdClient_1.cmdClientEvent.EXIT, this.svr_exit, this);
    };
    __decorate([
        property(cc.Node)
    ], game.prototype, "boards", void 0);
    __decorate([
        property(light_1.default)
    ], game.prototype, "light", void 0);
    __decorate([
        property(slider_1.default)
    ], game.prototype, "slider", void 0);
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
    ], game.prototype, "sliderNode", void 0);
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
    __decorate([
        property(cc.Sprite)
    ], game.prototype, "myCardtype", void 0);
    __decorate([
        property(cc.Label)
    ], game.prototype, "labMyscore", void 0);
    game = __decorate([
        ccclass
    ], game);
    return game;
}(ComponentBase_1.default));
exports.default = game;

cc._RF.pop();