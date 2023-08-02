
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
var UserInfo_1 = require("../../01_hall/script/config/UserInfo");
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
        UserInfo_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.BET, this.svr_bet, this);
        UserInfo_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.GAMESTART, this.svr_gamestart, this);
        UserInfo_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.GAMEOVER, this.svr_gameover, this);
        UserInfo_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.SITDOWNORSTANDUP, this.svr_downup, this);
        UserInfo_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.START, this.svr_start, this);
        UserInfo_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.BOARD, this.svr_board, this);
        UserInfo_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.BRING, this.svr_bring, this);
        UserInfo_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.INSURANCE, this.svr_insurance, this);
        UserInfo_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.EXIT, this.svr_exit, this);
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
        UserInfo_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.CONNECT, this.svr_connect, this); // 只处理数据
        UserInfo_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.RECONNECT, this.svr_connect, this); // 只处理数据
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
                    if (dplayer.position == UserInfo_1.UserInfo.testuuid) {
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
                isJoinGame = (dplayer.playerId == UserInfo_1.UserInfo.testuuid);
            }
        });
        if (deskInfo_1.DeskInfo.currRoundPlayerId == UserInfo_1.UserInfo.testuuid) {
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
            if (UserInfo_1.UserInfo.testuuid == _data.playerId) {
                ViewManager_1.ViewManager.Alert(config_1.WidgetEnum.JoinDesk, bundleLoader_1.bundleLoader.ENUM_BUNDLE.GAME);
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
            playerId: UserInfo_1.UserInfo.testuuid,
            deskId: 9,
            position: deskInfo_1.DeskInfo.readyPos,
            status: gameConst_1.DeskSeatStatus.TEMPORARY
        };
        UserInfo_1.UserInfo.cwebsocket.clientSend(cmdClient_1.cmdClientEvent.SITDOWNORSTANDUP, info);
        //console.log(e)
    };
    game.prototype.evt_start = function (e) {
        console.log("evt_start");
        if (UserInfo_1.UserInfo.testuuid == deskInfo_1.DeskInfo.createDeskPlayerId) {
            var info = {
                playerId: UserInfo_1.UserInfo.testuuid,
                deskId: 9
            };
            UserInfo_1.UserInfo.cwebsocket.clientSend(cmdClient_1.cmdClientEvent.START, info);
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
    game.prototype.evt_operate = function (e) {
        console.log("evt_operate");
        var name = e.currentTarget.name;
        var info = {
            playerId: UserInfo_1.UserInfo.testuuid,
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
        UserInfo_1.UserInfo.cwebsocket.clientSend(cmdClient_1.cmdClientEvent.BET, info);
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
        this.curSeatP = UserInfo_1.UserInfo.seatPJson[deskInfo_1.DeskInfo.seatLen];
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
        if (UserInfo_1.UserInfo.testuuid == deskInfo_1.DeskInfo.createDeskPlayerId) {
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
        UserInfo_1.UserInfo.cwebsocket.off(cmdClient_1.cmdClientEvent.CONNECT, this.svr_connect, this);
        UserInfo_1.UserInfo.cwebsocket.off(cmdClient_1.cmdClientEvent.BET, this.svr_bet, this);
        UserInfo_1.UserInfo.cwebsocket.off(cmdClient_1.cmdClientEvent.GAMESTART, this.svr_gamestart, this);
        UserInfo_1.UserInfo.cwebsocket.off(cmdClient_1.cmdClientEvent.GAMEOVER, this.svr_gameover, this);
        UserInfo_1.UserInfo.cwebsocket.off(cmdClient_1.cmdClientEvent.SITDOWNORSTANDUP, this.svr_downup, this);
        UserInfo_1.UserInfo.cwebsocket.off(cmdClient_1.cmdClientEvent.START, this.svr_start, this);
        UserInfo_1.UserInfo.cwebsocket.off(cmdClient_1.cmdClientEvent.BOARD, this.svr_board, this);
        UserInfo_1.UserInfo.cwebsocket.off(cmdClient_1.cmdClientEvent.BRING, this.svr_bring, this);
        UserInfo_1.UserInfo.cwebsocket.off(cmdClient_1.cmdClientEvent.INSURANCE, this.svr_insurance, this);
        UserInfo_1.UserInfo.cwebsocket.off(cmdClient_1.cmdClientEvent.EXIT, this.svr_exit, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMl9nYW1lXFxzY3JpcHRcXGdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNkRBQTREO0FBQzVELDJFQUFzRTtBQUN0RSxpRUFBZ0U7QUFDaEUsdUVBQXNFO0FBQ3RFLDZEQUFnRTtBQUNoRSxnREFBbUU7QUFDbkUsOENBQWtGO0FBQ2xGLDRDQUEyQztBQUUzQyxnREFBZ0g7QUFDaEgsa0RBQTJEO0FBQzNELDBDQUFxQztBQUNyQywrQkFBMEI7QUFDMUIsaUNBQTRCO0FBQzVCLHVDQUFrQztBQUU1QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyx3QkFBYTtJQUEvQztRQUFBLHFFQWttQkM7UUEvbEJHLFlBQU0sR0FBYyxFQUFFLENBQUM7UUFHdkIsV0FBSyxHQUFVLElBQUksQ0FBQztRQUdwQixZQUFNLEdBQVcsSUFBSSxDQUFDO1FBR3RCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixXQUFLLEdBQWMsRUFBRSxDQUFDO1FBR3RCLGFBQU8sR0FBYyxFQUFFLENBQUM7UUFHeEIsYUFBTyxHQUFjLEVBQUUsQ0FBQztRQUd4QixpQkFBVyxHQUFjLEVBQUUsQ0FBQztRQUc1QixhQUFPLEdBQWMsRUFBRSxDQUFDO1FBR3hCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRzdCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRXBCLFdBQUssR0FBb0MsRUFBRSxDQUFBOztJ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Q0FBQyxJQUFJLENBQUM7NENBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1Q0FDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDVTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ1M7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDUztJQWhEWCxJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBa21CeEI7SUFBRCxXQUFDO0NBbG1CRCxBQWttQkMsQ0FsbUJpQyx1QkFBYSxHQWttQjlDO2tCQWxtQm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgYnVuZGxlTG9hZGVyIH0gZnJvbSBcIi4uLy4uLy4uL3NjcmlwdC9idW5kbGVMb2FkZXJcIjtcclxuaW1wb3J0IENvbXBvbmVudEJhc2UgZnJvbSBcIi4uLy4uLzAwX2Jhc2Uvc2NyaXB0L2NvbW1vbi9Db21wb25lbnRCYXNlXCI7XHJcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4uLy4uLzAxX2hhbGwvc2NyaXB0L2NvbmZpZy9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCIuLi8uLi8wMV9oYWxsL3NjcmlwdC9jb25maWcvVmlld01hbmFnZXJcIjtcclxuaW1wb3J0IHsgV2lkZ2V0RW51bSB9IGZyb20gXCIuLi8uLi8wMV9oYWxsL3NjcmlwdC9jb25maWcvY29uZmlnXCI7XHJcbmltcG9ydCB7IGNtZENsaWVudEV2ZW50LCBjbWRDbGllbnRUeXBlIH0gZnJvbSBcIi4vY29uZmlnL2NtZENsaWVudFwiO1xyXG5pbXBvcnQgeyBBY3Rpb24sIERlc2tJbmZvLCBTX0JldCwgU19Cb2FyZCwgU19HYW1lU3RhcnQgfSBmcm9tIFwiLi9jb25maWcvZGVza0luZm9cIjtcclxuaW1wb3J0IHsgRGVza01nciB9IGZyb20gXCIuL2NvbmZpZy9kZXNrTWdyXCI7XHJcbmltcG9ydCB7IER6VXRpbHMgfSBmcm9tIFwiLi9jb25maWcvZHpVdGlsc1wiO1xyXG5pbXBvcnQgeyBBdXRvQnRuTmFtZSwgRGVza1NlYXRTdGF0dXMsIE9wZXJhdGVCdG5OYW1lLCBQbGF5ZXJJbmZvU3RhdHVzLCBUZXhhc0FjdGlvbiB9IGZyb20gXCIuL2NvbmZpZy9nYW1lQ29uc3RcIjtcclxuaW1wb3J0IHsgTm9kZURacG9vbCwgUE9PTFRZUEUgfSBmcm9tIFwiLi9jb25maWcvbm9kZURacG9vbFwiO1xyXG5pbXBvcnQgc2xpZGVyIGZyb20gXCIuL2NvbmZpZy9zbGlkZXJcIjtcclxuaW1wb3J0IGhlYWQgZnJvbSBcIi4vaGVhZFwiO1xyXG5pbXBvcnQgbGlnaHQgZnJvbSBcIi4vbGlnaHRcIjtcclxuaW1wb3J0IHRpbWVkb3duIGZyb20gXCIuL3RpbWVkb3duXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZ2FtZSBleHRlbmRzIENvbXBvbmVudEJhc2Uge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYm9hcmRzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkobGlnaHQpXHJcbiAgICBsaWdodDogbGlnaHQgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShzbGlkZXIpXHJcbiAgICBzbGlkZXI6IHNsaWRlciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBhbGVydDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkZXNrYmV0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRlc2tpbmZvOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhlYWRJdGVtOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG15T3BlcmF0ZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzbGlkZXJOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNlYXRzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNob3VtYXM6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYm90dG9tczogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjaG91bWFzaWRlczogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBteWNhcmRzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgbXlDYXJkdHlwZTogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJNeXNjb3JlOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBoZWFkczogeyBbdHJ1ZVNlYXQ6IG51bWJlcl06IGNjLk5vZGUgfSA9IHt9XHJcblxyXG4gICAgLyoqIOahjOWtkOWdkOaghyAqL1xyXG4gICAgcHJpdmF0ZSBjdXJTZWF0UDogW3sgeDogbnVtYmVyLCB5OiBudW1iZXIgfV1cclxuXHJcbiAgICBwcml2YXRlIGxhYmRpY2hpOiBjYy5MYWJlbFxyXG4gICAgcHJpdmF0ZSBjaG91bWFfZGk6IGNjLkxhYmVsXHJcblxyXG4gICAgcHJpdmF0ZSBvcGVyTm9kZTogY2MuTm9kZVxyXG4gICAgcHJpdmF0ZSBub3RPcGVyTm9kZTogY2MuTm9kZVxyXG4gICAgcHJpdmF0ZSBidG5BZGR0aW1lOiBjYy5Ob2RlXHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmluaXRwcm9wcygpXHJcbiAgICAgICAgLy8gdGhpcy50ZXN0KClcclxuICAgICAgICAvL3JldHVyblxyXG5cclxuXHJcbiAgICAgICAgLy/mtojmga/lm57osINcclxuICAgICAgICBVc2VySW5mby5jd2Vic29ja2V0Lm9uKGNtZENsaWVudEV2ZW50LkJFVCwgdGhpcy5zdnJfYmV0LCB0aGlzKVxyXG4gICAgICAgIFVzZXJJbmZvLmN3ZWJzb2NrZXQub24oY21kQ2xpZW50RXZlbnQuR0FNRVNUQVJULCB0aGlzLnN2cl9nYW1lc3RhcnQsIHRoaXMpXHJcbiAgICAgICAgVXNlckluZm8uY3dlYnNvY2tldC5vbihjbWRDbGllbnRFdmVudC5HQU1FT1ZFUiwgdGhpcy5zdnJfZ2FtZW92ZXIsIHRoaXMpXHJcbiAgICAgICAgVXNlckluZm8uY3dlYnNvY2tldC5vbihjbWRDbGllbnRFdmVudC5TSVRET1dOT1JTVEFORFVQLCB0aGlzLnN2cl9kb3dudXAsIHRoaXMpXHJcbiAgICAgICAgVXNlckluZm8uY3dlYnNvY2tldC5vbihjbWRDbGllbnRFdmVudC5TVEFSVCwgdGhpcy5zdnJfc3RhcnQsIHRoaXMpXHJcbiAgICAgICAgVXNlckluZm8uY3dlYnNvY2tldC5vbihjbWRDbGllbnRFdmVudC5CT0FSRCwgdGhpcy5zdnJfYm9hcmQsIHRoaXMpXHJcbiAgICAgICAgVXNlckluZm8uY3dlYnNvY2tldC5vbihjbWRDbGllbnRFdmVudC5CUklORywgdGhpcy5zdnJfYnJpbmcsIHRoaXMpXHJcbiAgICAgICAgVXNlckluZm8uY3dlYnNvY2tldC5vbihjbWRDbGllbnRFdmVudC5JTlNVUkFOQ0UsIHRoaXMuc3ZyX2luc3VyYW5jZSwgdGhpcylcclxuICAgICAgICBVc2VySW5mby5jd2Vic29ja2V0Lm9uKGNtZENsaWVudEV2ZW50LkVYSVQsIHRoaXMuc3ZyX2V4aXQsIHRoaXMpXHJcblxyXG4gICAgICAgIC8v5LqL5Lu25Zue6LCDXHJcbiAgICAgICAgdGhpcy5Ub3VjaE9uKHRoaXMuYWxlcnQuY2hpbGRyZW5bMl0sIHRoaXMuZXZ0X3N0YXJ0LCB0aGlzKSAvLyDmiL/kuLvmuLjmiI/lvIDlp4tcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJvdHRvbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGJ0biA9IHRoaXMuYm90dG9tc1tpXVxyXG4gICAgICAgICAgICB0aGlzLlRvdWNoT24oYnRuLCB0aGlzLmV2dF9ib3R0b20sIHRoaXMpIC8vIOa4uOaIj+WcuuaZr+S4i+aWueaMiemSruS6i+S7tlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5vcGVyTm9kZS5jaGlsZHJlbi5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuVG91Y2hPbihidG4sIHRoaXMuZXZ0X29wZXJhdGUsIHRoaXMpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubm90T3Blck5vZGUuY2hpbGRyZW4uZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgICAgICB0aGlzLlRvdWNoT24oYnRuLCB0aGlzLmV2dF9hdXRvLCB0aGlzKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNsaWRlci5zZXRDYWxsYmFjayh0aGlzLmV2dF9zbGlkZWNhbGwsIHRoaXMpXHJcblxyXG5cclxuICAgICAgICB0aGlzLmluaXQoKVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRlc3QoKSB7XHJcbiAgICAgICAgdGhpcy5zbGlkZXIuaW5pdCgxMDAsIDAuMSlcclxuICAgICAgICB0aGlzLnNsaWRlci5zZXRDYWxsYmFjayh0aGlzLmV2dF9zbGlkZWNhbGwsIHRoaXMpXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgVXNlckluZm8uY3dlYnNvY2tldC5vbihjbWRDbGllbnRFdmVudC5DT05ORUNULCB0aGlzLnN2cl9jb25uZWN0LCB0aGlzKSAvLyDlj6rlpITnkIbmlbDmja5cclxuICAgICAgICBVc2VySW5mby5jd2Vic29ja2V0Lm9uKGNtZENsaWVudEV2ZW50LlJFQ09OTkVDVCwgdGhpcy5zdnJfY29ubmVjdCwgdGhpcykgLy8g5Y+q5aSE55CG5pWw5o2uXHJcblxyXG4gICAgICAgIE5vZGVEWnBvb2wuaW5pdENhcmQoKVxyXG4gICAgICAgIE5vZGVEWnBvb2wuaW5pdENvaW4oKVxyXG4gICAgfVxyXG4gICAgLy/mtojmga/lm57osINcclxuICAgIHByaXZhdGUgc3ZyX2Nvbm5lY3QoZGF0YTogYW55KSB7XHJcbiAgICAgICAgaWYgKGRhdGEucmVxdWVzdFR5cGUgPT0gY21kQ2xpZW50VHlwZS5TRVJWRVJUT0NMSUVOVCkge1xyXG4gICAgICAgICAgICBEZXNrSW5mby5zZXRMcGxheWVyKGRhdGEucmVxdWVzdERhdGEuaWQsIGRhdGEucmVxdWVzdERhdGEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3ZyX2JldChkYXRhOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN2cl9iZXRcIilcclxuICAgICAgICBpZiAoIWRhdGEpIHJldHVybiBjYy5lcnJvcihcIuaVsOaNrumUmeivr1wiKVxyXG4gICAgICAgIGxldCBfZGF0YTogU19CZXQgPSBkYXRhLnJlcXVlc3REYXRhXHJcbiAgICAgICAgRGVza0luZm8uY3VyclJvdW5kUGxheWVySWQgPSBfZGF0YS5uZXh0UGxheWVySWRcclxuICAgICAgICBEZXNrSW5mby5wbGF5ZXJCZXRUaW1lID0gX2RhdGEubmV4dEJldFRpbWVcclxuXHJcbiAgICAgICAgdGhpcy5oZWFkc1tfZGF0YS5wbGF5ZXJJZF0uZ2V0Q29tcG9uZW50KGhlYWQpLnNldFN0b3BUaW1lKClcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3ZyX2dhbWVzdGFydChkYXRhOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN2cl9nYW1lc3RhcnRcIilcclxuICAgICAgICAvLyAgIHRoaXMuY2FyZC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIGxldCBfZGF0YTogU19HYW1lU3RhcnQgPSBkYXRhLnJlcXVlc3REYXRhXHJcbiAgICAgICAgdGhpcy5zd2l0Y2hBbGVydCgtMSlcclxuICAgICAgICBsZXQgaXNKb2luR2FtZTogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG5cclxuICAgICAgICBEZXNrSW5mby5jdXJyUm91bmRQbGF5ZXJJZCA9IF9kYXRhLmN1clBsYXllcklkXHJcbiAgICAgICAgRGVza0luZm8ucGxheWVyQmV0VGltZSA9IF9kYXRhLmJldFRpbWVcclxuICAgICAgICBEZXNrSW5mby5kZXNrSWQgPSBfZGF0YS5kZXNrSWRcclxuICAgICAgICBEZXNrSW5mby5wb3RzID0gX2RhdGEucGxheWVyUG90c1xyXG4gICAgICAgIERlc2tJbmZvLnBvdHMuZm9yRWFjaCgocG90LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcG90cyA9IERlc2tNZ3IuYWRkUG90cyhwb3QpXHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERpY2hpKHBvdHMpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNpZGVjaGkocG90cywgaW5kZXgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgX2RhdGEuc2VhdFBsYXllckxpc3QuZm9yRWFjaChkcGxheWVyID0+IHtcclxuICAgICAgICAgICAgRGVza0luZm8uc2V0RHBsYXllcihkcGxheWVyLnBvc2l0aW9uLCBkcGxheWVyKVxyXG4gICAgICAgICAgICBpZiAoZHBsYXllci5wbGF5ZXJJZCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBjbGllbnRTZWF0OiBudW1iZXIgPSB0aGlzLmdldENsaWVudFNlYXRCeVR1cmVTZWF0KGRwbGF5ZXIucG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldENob3VtYU51bSgwLCBjbGllbnRTZWF0IC0gMSlcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgaGVhZCA9IHRoaXMuaGVhZHNbZHBsYXllci5wb3NpdGlvbl1cclxuICAgICAgICAgICAgICAgIGhlYWQuZ2V0Q2hpbGRCeU5hbWUoXCJzcHJUd29DYXJkXCIpLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICAgICAgRGVza01nci5Ud2VlblNlbmRDYXJkKGhlYWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZHBsYXllci5wb3NpdGlvbiA9PSBVc2VySW5mby50ZXN0dXVpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZHBsYXllciA9IERlc2tJbmZvLmdldE15ZHBsYXllcigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRwbGF5ZXIuaGFuZHNDYXJkLmZvckVhY2goKGNhcmQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXNrTWdyLnNldENhcmQodGhpcy5teWNhcmRzLCBpbmRleCwgY2FyZC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlc2tNZ3IuVHdlZW5UdXJuQ2FyZCh0aGlzLm15Y2FyZHNbaW5kZXhdLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5teWNhcmRzW2luZGV4XS5nZXRDaGlsZEJ5TmFtZShcImNhcmRiZ1wiKS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkLmdldENoaWxkQnlOYW1lKFwic3ByVHdvQ2FyZFwiKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgdGhpcy5ub2RlKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkcGxheWVyLnBsYXllcklkID09IERlc2tJbmZvLmN1cnJSb3VuZFBsYXllcklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRMaWd0aChkcGxheWVyLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaXNKb2luR2FtZSA9IChkcGxheWVyLnBsYXllcklkID09IFVzZXJJbmZvLnRlc3R1dWlkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChEZXNrSW5mby5jdXJyUm91bmRQbGF5ZXJJZCA9PSBVc2VySW5mby50ZXN0dXVpZCkge1xyXG4gICAgICAgICAgICB0aGlzLnN3aXRjaE9wZXJhdGUodHJ1ZSwgX2RhdGEuYWN0aW9ucywgaXNKb2luR2FtZSlcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zd2l0Y2hPcGVyYXRlKGZhbHNlLCBfZGF0YS5hY3Rpb25zLCBpc0pvaW5HYW1lKVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzdnJfZ2FtZW92ZXIoZGF0YTogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzdnJfZ2FtZW92ZXJcIilcclxuICAgICAgICBpZiAoIWRhdGEpIHJldHVybiBjYy5lcnJvcihcIuaVsOaNrumUmeivr1wiKVxyXG4gICAgICAgIGxldCBfZGF0YTogU19HYW1lU3RhcnQgPSBkYXRhLnJlcXVlc3REYXRhXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdnJfZG93bnVwKGRhdGE6IGFueSkge1xyXG4gICAgICAgIGlmICghZGF0YSkgcmV0dXJuIGNjLmVycm9yKFwi5pWw5o2u6ZSZ6K+vXCIpXHJcbiAgICAgICAgbGV0IF9kYXRhID0gZGF0YS5yZXF1ZXN0RGF0YVxyXG4gICAgICAgIGlmIChfZGF0YS5zdGF0dXMgPT0gRGVza1NlYXRTdGF0dXMuVEVNUE9SQVJZKSB7XHJcbiAgICAgICAgICAgIGlmIChVc2VySW5mby50ZXN0dXVpZCA9PSBfZGF0YS5wbGF5ZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgVmlld01hbmFnZXIuQWxlcnQoV2lkZ2V0RW51bS5Kb2luRGVzaywgYnVuZGxlTG9hZGVyLkVOVU1fQlVORExFLkdBTUUpXHJcbiAgICAgICAgICAgICAgICBsZXQgY2xpZW50U2VhdCA9IHRoaXMuZ2V0Q2xpZW50U2VhdEJ5VHVyZVNlYXQoX2RhdGEucG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICBEZXNrTWdyLnNldGNvbnZlcnROdW0oY2xpZW50U2VhdClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SGVhZEluZm8oY2xpZW50U2VhdCwgX2RhdGEucGxheWVySWQpXHJcbiAgICAgICAgICAgICAgICBEZXNrTWdyLlR3ZWVuU2VhdCh0aGlzLnNlYXRzKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNsaWVudFNlYXQgPSB0aGlzLmdldENsaWVudFNlYXRCeVR1cmVTZWF0KF9kYXRhLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRIZWFkSW5mbyhjbGllbnRTZWF0LCBfZGF0YS5wbGF5ZXJJZClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgRGVza0luZm8uc2V0cGxheWVySW5mbyhfZGF0YS5wbGF5ZXJJZCwgX2RhdGEucG9zaXRpb24sIF9kYXRhLnN0YXR1cylcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChfZGF0YS5zdGF0dXMgPT0gRGVza1NlYXRTdGF0dXMuU0lURE9XTikge1xyXG4gICAgICAgICAgICBsZXQgY2xpZW50U2VhdCA9IHRoaXMuZ2V0Q2xpZW50U2VhdEJ5VHVyZVNlYXQoX2RhdGEucG9zaXRpb24pXHJcbiAgICAgICAgICAgIHRoaXMuc2V0SGVhZEluZm8oY2xpZW50U2VhdCwgX2RhdGEucGxheWVySWQpXHJcbiAgICAgICAgICAgIERlc2tJbmZvLnNldHBsYXllckluZm8oX2RhdGEucGxheWVySWQsIF9kYXRhLnBvc2l0aW9uLCBfZGF0YS5zdGF0dXMpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlSGVhZChfZGF0YS5wb3NpdGlvbiwgX2RhdGEucGxheWVySWQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHN2cl9zdGFydChkYXRhOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN2cl9iZXRcIilcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN2cl9ib2FyZChkYXRhOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN2cl9ib2FyZFwiKVxyXG4gICAgICAgIGlmICghZGF0YSkgcmV0dXJuIGNjLmVycm9yKFwi5pWw5o2u6ZSZ6K+vXCIpXHJcbiAgICAgICAgbGV0IF9kYXRhOiBTX0JvYXJkID0gZGF0YS5yZXF1ZXN0RGF0YVxyXG4gICAgICAgIERlc2tJbmZvLmN1cnJSb3VuZFBsYXllcklkID0gX2RhdGEubmV4dFBsYXllcklkXHJcbiAgICAgICAgRGVza0luZm8ucGxheWVyQmV0VGltZSA9IF9kYXRhLm5leHRCZXRUaW1lXHJcbiAgICAgICAgRGVza0luZm8uZGVza0lkID0gX2RhdGEuZGVza0lkXHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN2cl9icmluZyhkYXRhOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN2cl9icmluZ1wiKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3ZyX2luc3VyYW5jZShkYXRhOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN2cl9pbnN1cmFuY2VcIilcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN2cl9leGl0KGRhdGE6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3ZyX2V4aXRcIilcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy/kuovku7blm57osINcclxuICAgIHByaXZhdGUgZXZ0X3NpdGRvd24oZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGxldCBuYW1lID0gZS5jdXJyZW50VGFyZ2V0Lm5hbWVcclxuICAgICAgICAvLyBsZXQgc2VhdCA9IERlc2tNZ3IuY29udmVydG9ialtOdW1iZXIobmFtZS5zbGljZSgtMSkpICsgMV1cclxuICAgICAgICAvLyBsZXQgc2VhdCA9IE51bWJlcihuYW1lLnNsaWNlKC0xKSkgKyAxXHJcbiAgICAgICAgbGV0IHNlYXQgPSB0aGlzLmdldFR1cmVTZWF0QnlDbGllbnRTZWF0KE51bWJlcihuYW1lLnNsaWNlKC0xKSkgKyAxKVxyXG4gICAgICAgIERlc2tJbmZvLnJlYWR5UG9zID0gc2VhdFxyXG4gICAgICAgIGxldCBpbmZvID0ge1xyXG4gICAgICAgICAgICBwbGF5ZXJJZDogVXNlckluZm8udGVzdHV1aWQsXHJcbiAgICAgICAgICAgIGRlc2tJZDogOSxcclxuICAgICAgICAgICAgcG9zaXRpb246IERlc2tJbmZvLnJlYWR5UG9zLFxyXG4gICAgICAgICAgICBzdGF0dXM6IERlc2tTZWF0U3RhdHVzLlRFTVBPUkFSWVxyXG4gICAgICAgIH1cclxuICAgICAgICBVc2VySW5mby5jd2Vic29ja2V0LmNsaWVudFNlbmQoY21kQ2xpZW50RXZlbnQuU0lURE9XTk9SU1RBTkRVUCwgaW5mbylcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGUpXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGV2dF9zdGFydChlOiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJldnRfc3RhcnRcIilcclxuICAgICAgICBpZiAoVXNlckluZm8udGVzdHV1aWQgPT0gRGVza0luZm8uY3JlYXRlRGVza1BsYXllcklkKSB7XHJcbiAgICAgICAgICAgIGxldCBpbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgcGxheWVySWQ6IFVzZXJJbmZvLnRlc3R1dWlkLFxyXG4gICAgICAgICAgICAgICAgZGVza0lkOiA5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgVXNlckluZm8uY3dlYnNvY2tldC5jbGllbnRTZW5kKGNtZENsaWVudEV2ZW50LlNUQVJULCBpbmZvKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV2dF9ib3R0b20oZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXZ0X2JvdHRvbVwiKVxyXG4gICAgICAgIGxldCBuYW1lID0gZS5jdXJyZW50VGFyZ2V0Lm5hbWVcclxuICAgICAgICBzd2l0Y2ggKE51bWJlcihuYW1lLnNsaWNlKC0xKSkpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5BbGVydChXaWRnZXRFbnVtLkdhbWVTZXR0aW5nLCBidW5kbGVMb2FkZXIuRU5VTV9CVU5ETEUuR0FNRSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV2dF9vcGVyYXRlKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImV2dF9vcGVyYXRlXCIpXHJcbiAgICAgICAgbGV0IG5hbWUgPSBlLmN1cnJlbnRUYXJnZXQubmFtZVxyXG4gICAgICAgIGxldCBpbmZvID0ge1xyXG4gICAgICAgICAgICBwbGF5ZXJJZDogVXNlckluZm8udGVzdHV1aWQsXHJcbiAgICAgICAgICAgIGRlc2tJZDogOSxcclxuICAgICAgICAgICAgYWN0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgICBiZXQ6IDBcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgT3BlcmF0ZUJ0bk5hbWUuYnRuQWRkOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJOb2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIE9wZXJhdGVCdG5OYW1lLmJ0bkdlbjpcclxuICAgICAgICAgICAgICAgIGluZm8uYWN0aW9uID0gVGV4YXNBY3Rpb24uQ0FMTFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgT3BlcmF0ZUJ0bk5hbWUuYnRuR2l2ZXVwOlxyXG4gICAgICAgICAgICAgICAgaW5mby5hY3Rpb24gPSBUZXhhc0FjdGlvbi5GT0xEXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBPcGVyYXRlQnRuTmFtZS5idG5Mb29rOlxyXG4gICAgICAgICAgICAgICAgaW5mby5hY3Rpb24gPSBUZXhhc0FjdGlvbi5DSEVDS1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgT3BlcmF0ZUJ0bk5hbWUuYnRuQjE6XHJcbiAgICAgICAgICAgICAgICBpbmZvLmFjdGlvbiA9IFRleGFzQWN0aW9uLkJFVFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgT3BlcmF0ZUJ0bk5hbWUuYnRuQjI6XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgT3BlcmF0ZUJ0bk5hbWUuYnRuQjM6XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgT3BlcmF0ZUJ0bk5hbWUuYnRuQjQ6XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChPcGVyYXRlQnRuTmFtZS5idG5BZGQgPT0gbmFtZSkgcmV0dXJuXHJcbiAgICAgICAgaW5mby5iZXQgPSBEZXNrSW5mby5jdXJNeUFjaXRvbnNbaW5mby5hY3Rpb25dXHJcbiAgICAgICAgVXNlckluZm8uY3dlYnNvY2tldC5jbGllbnRTZW5kKGNtZENsaWVudEV2ZW50LkJFVCwgaW5mbylcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBldnRfYXV0byhlOiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJldnRfYXV0b1wiKVxyXG4gICAgICAgIGxldCBuYW1lID0gZS5jdXJyZW50VGFyZ2V0Lm5hbWVcclxuICAgIFxyXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIEF1dG9CdG5OYW1lLmJ0bkF1dG86XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEF1dG9CdG5OYW1lLmJ0bkF1dG9DYW5jZWw6XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhc3luYyBldnRfc2xpZGVjYWxsKHZhbHVlOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgbGV0IHVybDEgPSB2YWx1ZSA+PSB0aGlzLnNsaWRlci5fbWF4VmFsdWUoKSA/IFwic2xpZGVyMlwiIDogKHZhbHVlIDw9IHRoaXMuc2xpZGVyLl9taW5WYWx1ZSgpID8gXCJzbGlkZXIwXCIgOiBcInNsaWRlcjFcIilcclxuICAgICAgICBsZXQgdXJsMiA9IHZhbHVlID49IHRoaXMuc2xpZGVyLl9tYXhWYWx1ZSgpID8gXCJtYXhcIiA6ICh2YWx1ZSA8PSB0aGlzLnNsaWRlci5fbWluVmFsdWUoKSA/IFwibm9ybWFsXCIgOiBcIm5vcm1hbFwiKVxyXG4gICAgICAgIGxldCBjb2xvciA9IHZhbHVlID49IHRoaXMuc2xpZGVyLl9tYXhWYWx1ZSgpID8gXCIjRkZGRkZGXCIgOiAodmFsdWUgPD0gdGhpcy5zbGlkZXIuX21pblZhbHVlKCkgPyBcIiNGRjAwMDBcIiA6IFwiI0ZGRkZGRlwiKVxyXG5cclxuICAgICAgICB0aGlzLnNsaWRlci5zZXRIYW5kbGVTcHJpdGUodXJsMSlcclxuICAgICAgICB0aGlzLnNsaWRlci5zZXRCYWNrZ3JvdW5kU3ByaXRlKHVybDIpXHJcbiAgICAgICAgdGhpcy5zbGlkZXIuc2V0TGFiQ29sb3IoY29sb3IpXHJcblxyXG4gICAgICAgIHRoaXMuc2xpZGVyLkhhbmRsZWxhYi5ub2RlLmFjdGl2ZSA9ICEodmFsdWUgPj0gdGhpcy5zbGlkZXIuX21heFZhbHVlKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy/liJ3lp4vljJZcclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJTZWF0UCA9IFVzZXJJbmZvLnNlYXRQSnNvbltEZXNrSW5mby5zZWF0TGVuXVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRGVza0luZm8uc2VhdExlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhdHNbaV0ueCA9IHRoaXMuY3VyU2VhdFBbaV0ueFxyXG4gICAgICAgICAgICB0aGlzLnNlYXRzW2ldLnkgPSB0aGlzLmN1clNlYXRQW2ldLnlcclxuICAgICAgICAgICAgdGhpcy5zZWF0c1tpXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuVG91Y2hPbih0aGlzLnNlYXRzW2ldLCB0aGlzLmV2dF9zaXRkb3duLCB0aGlzKVxyXG4gICAgICAgICAgICBsZXQgZHBsYXllciA9IERlc2tJbmZvLmdldERwbGF5ZXIoaSArIDEpXHJcbiAgICAgICAgICAgIGlmIChkcGxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyYWV0ZUhlYWQoZHBsYXllci5wb3NpdGlvbiwgZHBsYXllci5wbGF5ZXJJZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IE15bHBsYXllciA9IERlc2tJbmZvLmdldE15bHBsYXllcigpXHJcbiAgICAgICAgaWYgKE15bHBsYXllci5wb3NpdGlvbiA+IDApIHtcclxuICAgICAgICAgICAgRGVza01nci5zZXRjb252ZXJ0TnVtKE15bHBsYXllci5wb3NpdGlvbilcclxuICAgICAgICAgICAgRGVza0luZm8ucmVhZHlQb3MgPSBNeWxwbGF5ZXIucG9zaXRpb25cclxuICAgICAgICAgICAgRGVza01nci5pbml0U2VhdCh0aGlzLnNlYXRzKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKFVzZXJJbmZvLnRlc3R1dWlkID09IERlc2tJbmZvLmNyZWF0ZURlc2tQbGF5ZXJJZCkge1xyXG4gICAgICAgICAgICB0aGlzLnN3aXRjaEFsZXJ0KDIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxpZ2h0LmluaXQoRGVza0luZm8uc2VhdExlbilcclxuICAgICAgICAvLyAgdGhpcy5zZXRNeUNhcmQoMCwgMzApXHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdHByb3BzKCkge1xyXG4gICAgICAgIHRoaXMubGFiZGljaGkgPSB0aGlzLmRlc2tiZXQuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJkaWNoaVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgdGhpcy5jaG91bWFfZGkgPSB0aGlzLmRlc2tiZXQuZ2V0Q2hpbGRCeU5hbWUoXCJjaG91bWFfZGlcIikuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbClcclxuICAgICAgICB0aGlzLm5vdE9wZXJOb2RlID0gdGhpcy5teU9wZXJhdGUuZ2V0Q2hpbGRCeU5hbWUoXCJub3RvcGVyTm9kZVwiKVxyXG4gICAgICAgIHRoaXMub3Blck5vZGUgPSB0aGlzLm15T3BlcmF0ZS5nZXRDaGlsZEJ5TmFtZShcIm9wZXJOb2RlXCIpXHJcbiAgICAgICAgdGhpcy5idG5BZGR0aW1lID0gdGhpcy5teU9wZXJhdGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5BZGR0aW1lXCIpXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgc2V0Q2hvdW1hTnVtKE51bTogbnVtYmVyLCBpbmRleDogbnVtYmVyLCkge1xyXG4gICAgICAgIHRoaXMuY2hvdW1hc1tpbmRleF0uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nID0gXCJcIiArIE51bVxyXG4gICAgICAgIHRoaXMuY2hvdW1hc1tpbmRleF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXREaWNoaShkaWNoaU51bTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5sYWJkaWNoaS5zdHJpbmcgPSBcIlwiICsgZGljaGlOdW1cclxuICAgICAgICB0aGlzLmNob3VtYV9kaS5zdHJpbmcgPSBcIlwiICsgZGljaGlOdW1cclxuICAgICAgICB0aGlzLmNob3VtYV9kaS5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLmxhYmRpY2hpLm5vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIHNldFNpZGVjaGkoc2lkZWNoaU51bTogbnVtYmVyLCBpbmRleCkge1xyXG4gICAgICAgIHRoaXMuY2hvdW1hc2lkZXNbaW5kZXggLSAxXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5jaG91bWFzaWRlc1tpbmRleCAtIDFdLmdldENoaWxkQnlOYW1lKFwibGFic2lkZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIgKyBzaWRlY2hpTnVtXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN3aXRjaEFsZXJ0KGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5hbGVydC5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCwgX2luZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNoaWxkLmFjdGl2ZSA9IGluZGV4ID09IF9pbmRleFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjcmFldGVIZWFkKHNlYXQ6IG51bWJlciwgaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBzZWF0Tm9kZSA9IHRoaXMuc2VhdHNbc2VhdCAtIDFdXHJcbiAgICAgICAgbGV0IF9oZWFkID0gY2MuaW5zdGFudGlhdGUodGhpcy5oZWFkSXRlbSlcclxuICAgICAgICBsZXQgX3RzID0gX2hlYWQuZ2V0Q29tcG9uZW50KGhlYWQpXHJcbiAgICAgICAgX3RzLmluaXQoaWQsIHNlYXQsIHNlYXQpXHJcbiAgICAgICAgX2hlYWQucGFyZW50ID0gc2VhdE5vZGVcclxuICAgICAgICBfaGVhZC54ID0gMFxyXG4gICAgICAgIF9oZWFkLnkgPSAwXHJcbiAgICAgICAgdGhpcy5oZWFkc1tzZWF0XSA9IF9oZWFkXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldEhlYWRJbmZvKHNlYXQ6IG51bWJlciwgaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBzZWF0Tm9kZSA9IHRoaXMuc2VhdHNbc2VhdCAtIDFdXHJcbiAgICAgICAgbGV0IF9oZWFkID0gc2VhdE5vZGUuY2hpbGRyZW5bMF1cclxuICAgICAgICBsZXQgX3RzID0gX2hlYWQuZ2V0Q29tcG9uZW50KGhlYWQpXHJcbiAgICAgICAgX3RzLnNldEhlYWRJbmZvKGlkKVxyXG4gICAgfVxyXG5cclxuICAgIHNldExpZ3RoKHR1cmVTZWF0OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgY2xpZW50U2VhdCA9IHRoaXMuZ2V0Q2xpZW50U2VhdEJ5VHVyZVNlYXQodHVyZVNlYXQpXHJcbiAgICAgICAgdGhpcy5saWdodC5zZXRBbmdsZShjbGllbnRTZWF0KVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZ2V0VHVyZVNlYXRCeUNsaWVudFNlYXQoY2xpZW50U2VhdDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHRydWVTZWF0ID0gMFxyXG4gICAgICAgIGxldCBzZWF0Tm9kZSA9IHRoaXMuc2VhdHNbY2xpZW50U2VhdCAtIDFdXHJcbiAgICAgICAgbGV0IF9oZWFkID0gc2VhdE5vZGUuY2hpbGRyZW5bMF1cclxuICAgICAgICBsZXQgX3RzID0gX2hlYWQuZ2V0Q29tcG9uZW50KGhlYWQpXHJcbiAgICAgICAgdHJ1ZVNlYXQgPSBfdHMuc2VhdFxyXG4gICAgICAgIHJldHVybiB0cnVlU2VhdFxyXG4gICAgfVxyXG5cclxuICAgIGdldENsaWVudFNlYXRCeVR1cmVTZWF0KHRydWVTZWF0OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgY2xpZW50U2VhdCA9IDBcclxuICAgICAgICBsZXQgaGVhZCA9IHRoaXMuaGVhZHNbdHJ1ZVNlYXRdXHJcbiAgICAgICAgY2xpZW50U2VhdCA9IE51bWJlcihoZWFkLnBhcmVudC5uYW1lLnNsaWNlKC0xKSkgKyAxXHJcbiAgICAgICAgcmV0dXJuIGNsaWVudFNlYXRcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVIZWFkKHRydWVTZWF0OiBudW1iZXIsIGlkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNlYXRzLmZvckVhY2goKHNlYXQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBfaGVhZCA9IHNlYXQuY2hpbGRyZW5bMF1cclxuICAgICAgICAgICAgaWYgKF9oZWFkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgX3RzID0gX2hlYWQuZ2V0Q29tcG9uZW50KGhlYWQpXHJcbiAgICAgICAgICAgICAgICBpZiAoX3RzLnBsYXllcklkID09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RzLmNsZWFyaGVhZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLy9faGVhZC5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF90cy5jb252ZXJ0c2VhdCA9IGluZGV4ICsgMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIERlc2tJbmZvLmNsZWFyRHBsYXllcih0cnVlU2VhdClcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2hPcGVyYXRlKGlzU2hvdzogYm9vbGVhbiwgYWN0aW9uczogQWN0aW9uW10sIGlzSm9pbkdhbWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLm15T3BlcmF0ZS5hY3RpdmUgPSBpc0pvaW5HYW1lXHJcbiAgICAgICAgdGhpcy5vcGVyTm9kZS5hY3RpdmUgPSBpc1Nob3dcclxuICAgICAgICB0aGlzLm5vdE9wZXJOb2RlLmFjdGl2ZSA9ICFpc1Nob3dcclxuICAgICAgICBhY3Rpb25zLmZvckVhY2goZWxlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRCdG5PcGVyKGVsZS5hY3Rpb24sIGVsZS5taW5CZXQpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldEJ0bk9wZXIoYWN0aW9uOiBUZXhhc0FjdGlvbiwgbWluQmV0OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgYnRuOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVGV4YXNBY3Rpb24uQkVUOlxyXG4gICAgICAgICAgICAgICAgYnRuID0gdGhpcy5vcGVyTm9kZS5jaGlsZHJlbls0XVxyXG4gICAgICAgICAgICAgICAgYnRuLmdldENoaWxkQnlOYW1lKFwibGFiQk51bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwieFwiICsgMVxyXG4gICAgICAgICAgICAgICAgYnRuLmdldENoaWxkQnlOYW1lKFwibGFiQlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwi5b+r6YCf5LiL5rOoXCJcclxuICAgICAgICAgICAgICAgIGJ0bi5nZXRDaGlsZEJ5TmFtZShcImxhYkJTY29yZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIgKyBtaW5CZXRcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBUZXhhc0FjdGlvbi5DQUxMOlxyXG4gICAgICAgICAgICAgICAgYnRuID0gdGhpcy5vcGVyTm9kZS5jaGlsZHJlblszXVxyXG4gICAgICAgICAgICAgICAgYnRuLmdldENoaWxkQnlOYW1lKFwibGFiR2VuTnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJ4XCIgKyBtaW5CZXRcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBUZXhhc0FjdGlvbi5DSEVDSzpcclxuICAgICAgICAgICAgICAgIHRoaXMub3Blck5vZGUuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KHRpbWVkb3duKS5zdG9wVGltZSgpXHJcbiAgICAgICAgICAgICAgICBidG4gPSB0aGlzLm9wZXJOb2RlLmNoaWxkcmVuWzJdXHJcbiAgICAgICAgICAgICAgICBidG4uZ2V0Q29tcG9uZW50KHRpbWVkb3duKS5wbGF5VGltZShEZXNrSW5mby5wbGF5ZXJCZXRUaW1lKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFRleGFzQWN0aW9uLlJBSVNFOlxyXG4gICAgICAgICAgICBjYXNlIFRleGFzQWN0aW9uLlJFUkFJU0U6XHJcbiAgICAgICAgICAgICAgICBidG4gPSB0aGlzLm9wZXJOb2RlLmNoaWxkcmVuWzBdXHJcbiAgICAgICAgICAgICAgICBsZXQgbHBheWVyID0gRGVza0luZm8uZ2V0TXlscGxheWVyKClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyLmluaXQobHBheWVyLmJhbmtSb2xsLCBtaW5CZXQpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVGV4YXNBY3Rpb24uRk9MRDpcclxuICAgICAgICAgICAgICAgIGJ0biA9IHRoaXMub3Blck5vZGUuY2hpbGRyZW5bMV1cclxuICAgICAgICAgICAgICAgIGJ0bi5nZXRDb21wb25lbnQodGltZWRvd24pLnBsYXlUaW1lKERlc2tJbmZvLnBsYXllckJldFRpbWUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBEZXNrSW5mby5jdXJNeUFjaXRvbnNbYWN0aW9uXSA9IG1pbkJldFxyXG4gICAgICAgIGlmIChidG4pIGJ0bi5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy/lhbbku5bpkqnlrZDlh73mlbBcclxuXHJcbiAgICAvLyBwcml2YXRlIG5vd1RpbWU6IG51bWJlciA9IDBcclxuXHJcbiAgICAvLyBwcml2YXRlIG5vd1RpbWVJbnQ6IG51bWJlciA9IDBcclxuXHJcbiAgICAvLyBwcml2YXRlIG5vd0Nsb2NrTGFiZWw6IGNjLkxhYmVsID0gbnVsbFxyXG5cclxuICAgIC8vIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAvLyAgICAgaWYgKCFEZXNrSW5mby5pc1N0YXJ0R2FtZSkge1xyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHRoaXMubm93VGltZSAtPSBkdDtcclxuICAgIC8vICAgICBsZXQgdG1wSW50ID0gTWF0aC5mbG9vcih0aGlzLm5vd1RpbWUpO1xyXG4gICAgLy8gICAgIGlmICh0bXBJbnQgIT09IHRoaXMubm93VGltZUludCAmJiB0bXBJbnQgPj0gMCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLm5vd1RpbWVJbnQgPSB0bXBJbnQ7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLm5vd0Nsb2NrTGFiZWwpIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMubm93Q2xvY2tMYWJlbC5zdHJpbmcgPSB0bXBJbnQudG9TdHJpbmcoKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBVc2VySW5mby5jd2Vic29ja2V0Lm9mZihjbWRDbGllbnRFdmVudC5DT05ORUNULCB0aGlzLnN2cl9jb25uZWN0LCB0aGlzKVxyXG4gICAgICAgIFVzZXJJbmZvLmN3ZWJzb2NrZXQub2ZmKGNtZENsaWVudEV2ZW50LkJFVCwgdGhpcy5zdnJfYmV0LCB0aGlzKVxyXG4gICAgICAgIFVzZXJJbmZvLmN3ZWJzb2NrZXQub2ZmKGNtZENsaWVudEV2ZW50LkdBTUVTVEFSVCwgdGhpcy5zdnJfZ2FtZXN0YXJ0LCB0aGlzKVxyXG4gICAgICAgIFVzZXJJbmZvLmN3ZWJzb2NrZXQub2ZmKGNtZENsaWVudEV2ZW50LkdBTUVPVkVSLCB0aGlzLnN2cl9nYW1lb3ZlciwgdGhpcylcclxuICAgICAgICBVc2VySW5mby5jd2Vic29ja2V0Lm9mZihjbWRDbGllbnRFdmVudC5TSVRET1dOT1JTVEFORFVQLCB0aGlzLnN2cl9kb3dudXAsIHRoaXMpXHJcbiAgICAgICAgVXNlckluZm8uY3dlYnNvY2tldC5vZmYoY21kQ2xpZW50RXZlbnQuU1RBUlQsIHRoaXMuc3ZyX3N0YXJ0LCB0aGlzKVxyXG4gICAgICAgIFVzZXJJbmZvLmN3ZWJzb2NrZXQub2ZmKGNtZENsaWVudEV2ZW50LkJPQVJELCB0aGlzLnN2cl9ib2FyZCwgdGhpcylcclxuICAgICAgICBVc2VySW5mby5jd2Vic29ja2V0Lm9mZihjbWRDbGllbnRFdmVudC5CUklORywgdGhpcy5zdnJfYnJpbmcsIHRoaXMpXHJcbiAgICAgICAgVXNlckluZm8uY3dlYnNvY2tldC5vZmYoY21kQ2xpZW50RXZlbnQuSU5TVVJBTkNFLCB0aGlzLnN2cl9pbnN1cmFuY2UsIHRoaXMpXHJcbiAgICAgICAgVXNlckluZm8uY3dlYnNvY2tldC5vZmYoY21kQ2xpZW50RXZlbnQuRVhJVCwgdGhpcy5zdnJfZXhpdCwgdGhpcylcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==