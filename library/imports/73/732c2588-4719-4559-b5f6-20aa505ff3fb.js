"use strict";
cc._RF.push(module, '732c2WIRxlFWbX2IKpQX/P7', 'joinDesk');
// bundle/02_game/script/joinDesk.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var ComponentBase_1 = require("../../00_base/script/common/ComponentBase");
var C_User_1 = require("../../01_hall/script/config/C_User");
var cmdClient_1 = require("./config/cmdClient");
var deskInfo_1 = require("./config/deskInfo");
var gameConst_1 = require("./config/gameConst");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var joinDesk = /** @class */ (function (_super) {
    __extends(joinDesk, _super);
    function joinDesk() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.labtitle1 = null;
        _this.labrecordcost = null;
        _this.labB = null;
        _this.labF = null;
        _this.toggles = [];
        _this.myclubcoin = null;
        _this.mycoin = null;
        _this.slider = null;
        _this.btnJoin = null;
        _this.btnRefrsh = null;
        _this.btnClose = null;
        _this.btnCoinAdd = null;
        _this.btnClubCoinAdd = null;
        return _this;
        // update (dt) {}
    }
    joinDesk.prototype.start = function () {
        this.TouchOn(this.btnClose, this.evt_Close);
        this.TouchOn(this.btnRefrsh, this.evt_Refrsh);
        this.TouchOn(this.btnJoin, this.evt_Join);
        this.TouchOn(this.btnCoinAdd, this.evt_CoinAdd);
        this.TouchOn(this.btnClubCoinAdd, this.evt_ClubCoinAdd);
        this.slider.node.on("slide", this.setJifen, this);
        this.init();
    };
    joinDesk.prototype.init = function () {
        this.labtitle1.string = "" + C_User_1.C_User.ins.me.name;
        this.labF.string = "" + 200;
        var info = {
            playerId: C_User_1.C_User.ins.testuuid,
            deskId: 9,
            bring: 200,
            status: gameConst_1.PlayerInfoStatus.OBSERVE
        };
        C_User_1.C_User.ins.cwebsocket.clientSend(cmdClient_1.cmdClientEvent.BRING, info);
    };
    joinDesk.prototype.setJifen = function () {
        this.labF.string = "" + 200;
    };
    joinDesk.prototype.evt_Close = function () {
        var info = {
            playerId: C_User_1.C_User.ins.testuuid,
            deskId: 9,
            position: deskInfo_1.DeskInfo.readyPos,
            status: gameConst_1.DeskSeatStatus.LEAVESEAT
        };
        C_User_1.C_User.ins.cwebsocket.clientSend(cmdClient_1.cmdClientEvent.SITDOWNORSTANDUP, info);
        this.node.destroy();
    };
    joinDesk.prototype.evt_Refrsh = function () {
        this.node.destroy();
    };
    joinDesk.prototype.evt_Join = function () {
        var info = {
            playerId: C_User_1.C_User.ins.testuuid,
            deskId: 9,
            position: deskInfo_1.DeskInfo.readyPos,
            status: gameConst_1.DeskSeatStatus.SITDOWN
        };
        C_User_1.C_User.ins.cwebsocket.clientSend(cmdClient_1.cmdClientEvent.SITDOWNORSTANDUP, info);
        this.node.destroy();
    };
    joinDesk.prototype.evt_CoinAdd = function () {
    };
    joinDesk.prototype.evt_ClubCoinAdd = function () {
    };
    __decorate([
        property(cc.Label)
    ], joinDesk.prototype, "labtitle1", void 0);
    __decorate([
        property(cc.Label)
    ], joinDesk.prototype, "labrecordcost", void 0);
    __decorate([
        property(cc.Label)
    ], joinDesk.prototype, "labB", void 0);
    __decorate([
        property(cc.Label)
    ], joinDesk.prototype, "labF", void 0);
    __decorate([
        property(cc.Toggle)
    ], joinDesk.prototype, "toggles", void 0);
    __decorate([
        property(cc.Node)
    ], joinDesk.prototype, "myclubcoin", void 0);
    __decorate([
        property(cc.Node)
    ], joinDesk.prototype, "mycoin", void 0);
    __decorate([
        property(cc.Slider)
    ], joinDesk.prototype, "slider", void 0);
    __decorate([
        property(cc.Node)
    ], joinDesk.prototype, "btnJoin", void 0);
    __decorate([
        property(cc.Node)
    ], joinDesk.prototype, "btnRefrsh", void 0);
    __decorate([
        property(cc.Node)
    ], joinDesk.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Node)
    ], joinDesk.prototype, "btnCoinAdd", void 0);
    __decorate([
        property(cc.Node)
    ], joinDesk.prototype, "btnClubCoinAdd", void 0);
    joinDesk = __decorate([
        ccclass
    ], joinDesk);
    return joinDesk;
}(ComponentBase_1.default));
exports.default = joinDesk;

cc._RF.pop();