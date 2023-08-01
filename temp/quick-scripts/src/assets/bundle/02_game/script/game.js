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
Object.defineProperty(exports, "__esModule", { value: true });
var bundleLoader_1 = require("../../../script/bundleLoader");
var ComponentBase_1 = require("../../00_base/script/common/ComponentBase");
var C_User_1 = require("../../01_hall/script/config/C_User");
var ViewManager_1 = require("../../01_hall/script/config/ViewManager");
var config_1 = require("../../01_hall/script/config/config");
var cmdClient_1 = require("./config/cmdClient");
var deskInfo_1 = require("./config/deskInfo");
var gameConst_1 = require("./config/gameConst");
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
        return _this;
    }
    game.prototype.start = function () {
        this.init();
        //消息事件
        C_User_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.BET, this.svr_bet, this);
        C_User_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.GAMESTART, this.svr_gamestart, this);
        C_User_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.GAMEOVER, this.svr_gameover, this);
        C_User_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.SITDOWNORSTANDUP, this.svr_downup, this);
        C_User_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.START, this.svr_start, this);
        C_User_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.BOARD, this.svr_board, this);
        C_User_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.BRING, this.svr_bring, this);
        C_User_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.INSURANCE, this.svr_insurance, this);
        C_User_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.EXIT, this.svr_exit, this);
    };
    game.prototype.onLoad = function () {
        C_User_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.CONNECT, this.svr_connect, this); // 只处理数据
        C_User_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.RECONNECT, this.svr_connect, this); // 只处理数据
    };
    //消息回调
    game.prototype.svr_connect = function (data) {
        if (data.requestType == cmdClient_1.cmdClientType.SERVERTOCLIENT) {
            deskInfo_1.DeskInfo.setLplayer(data.requestData.position, data.requestData);
        }
    };
    game.prototype.svr_bet = function (data) {
        console.log("svr_bet");
    };
    game.prototype.svr_gamestart = function (data) {
        console.log("svr_gamestart");
    };
    game.prototype.svr_gameover = function (data) {
        console.log("svr_gameover");
    };
    game.prototype.svr_downup = function (data) {
        console.log("svr_bet");
        ViewManager_1.ViewManager.Alert(config_1.WidgetEnum.JoinDesk, bundleLoader_1.bundleLoader.ENUM_BUNDLE.GAME);
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
    game.prototype.event_sitdown = function (e) {
        console.log(e);
        var info = {
            playerId: C_User_1.UserInfo.testuuid,
            deskId: 9,
            position: 8,
            status: gameConst_1.DeskSeatStatus.SITDOWN
        };
        C_User_1.UserInfo.cwebsocket.clientSend(cmdClient_1.cmdClientEvent.SITDOWNORSTANDUP, info);
    };
    //初始化
    game.prototype.init = function () {
        this.curSeatP = C_User_1.UserInfo.seatPJson[deskInfo_1.DeskInfo.seatLen];
        for (var i = 0; i < deskInfo_1.DeskInfo.seatLen; i++) {
            this.seats[i].x = this.curSeatP[i].x;
            this.seats[i].y = this.curSeatP[i].y;
            this.seats[i].active = true;
            this.TouchOn(this.seats[i], this.event_sitdown, this);
        }
    };
    game.prototype.onDestroy = function () {
        C_User_1.UserInfo.cwebsocket.off(cmdClient_1.cmdClientEvent.CONNECT, this.svr_connect, this); // 只处理数据
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
    game = __decorate([
        ccclass
    ], game);
    return game;
}(ComponentBase_1.default));
exports.default = game;

cc._RF.pop();