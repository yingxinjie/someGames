"use strict";
cc._RF.push(module, 'c6a9eJARH1AEZ7uEWpQym7B', 'gameSetting');
// bundle/02_game/script/gameSetting.ts

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
var UserInfo_1 = require("../../01_hall/script/config/UserInfo");
var cmdClient_1 = require("./config/cmdClient");
var deskInfo_1 = require("./config/deskInfo");
var gameConst_1 = require("./config/gameConst");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var gameSetting = /** @class */ (function (_super) {
    __extends(gameSetting, _super);
    function gameSetting() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.boxs = [];
        _this.mask = null;
        return _this;
    }
    gameSetting.prototype.start = function () {
        for (var i = 0; i < this.boxs.length; i++) {
            var btn = this.boxs[i];
            this.TouchOn(btn, this.evt_box, this);
        }
        this.TouchOn(this.mask, this.evt_Close, this);
        this.init();
    };
    gameSetting.prototype.init = function () {
        var info = {
            playerId: UserInfo_1.UserInfo.testuuid,
            deskId: 9,
            bring: 200,
            status: gameConst_1.PlayerInfoStatus.OBSERVE
        };
        UserInfo_1.UserInfo.cwebsocket.clientSend(cmdClient_1.cmdClientEvent.BRING, info);
    };
    gameSetting.prototype.evt_box = function (e) {
        var name = e.currentTarget.name;
        switch (Number(name.slice(-1))) {
            case 0: //站起
                var info = {
                    playerId: UserInfo_1.UserInfo.testuuid,
                    deskId: 9,
                    position: deskInfo_1.DeskInfo.readyPos,
                    status: gameConst_1.DeskSeatStatus.LEAVESEAT
                };
                UserInfo_1.UserInfo.cwebsocket.clientSend(cmdClient_1.cmdClientEvent.SITDOWNORSTANDUP, info);
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            case 7: // 退出游戏场景
                break;
        }
        this.node.destroy();
    };
    gameSetting.prototype.evt_Close = function () {
        this.node.destroy();
    };
    __decorate([
        property(cc.Node)
    ], gameSetting.prototype, "boxs", void 0);
    __decorate([
        property(cc.Node)
    ], gameSetting.prototype, "mask", void 0);
    gameSetting = __decorate([
        ccclass
    ], gameSetting);
    return gameSetting;
}(ComponentBase_1.default));
exports.default = gameSetting;

cc._RF.pop();