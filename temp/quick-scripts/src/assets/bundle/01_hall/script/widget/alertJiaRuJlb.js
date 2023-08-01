"use strict";
cc._RF.push(module, 'da3bd3TCMdJ1aNDsVVJ8bFV', 'alertJiaRuJlb');
// bundle/01_hall/script/widget/alertJiaRuJlb.ts

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
var bundleLoader_1 = require("../../../../script/bundleLoader");
var ComponentBase_1 = require("../../../00_base/script/common/ComponentBase");
var cmdClient_1 = require("../../../02_game/script/config/cmdClient");
var deskInfo_1 = require("../../../02_game/script/config/deskInfo");
var C_User_1 = require("../config/C_User");
var ViewManager_1 = require("../config/ViewManager");
var config_1 = require("../config/config");
var cwebsocket_1 = require("../config/cwebsocket");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var alertJiaRuJlb = /** @class */ (function (_super) {
    __extends(alertJiaRuJlb, _super);
    function alertJiaRuJlb() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        _this.jiaRuPaiJuBtn = null;
        _this.jiaRuJuLeBuBtn = null;
        return _this;
    }
    alertJiaRuJlb.prototype.start = function () {
        this.TouchOn(this.closeBtn, this.alertDestory);
        this.TouchOn(this.jiaRuPaiJuBtn, this.onClickJiaRuPaiJu);
        this.TouchOn(this.jiaRuJuLeBuBtn, this.onClickJiaRuJuLeBu);
        C_User_1.UserInfo.cwebsocket.on(cmdClient_1.cmdClientEvent.CONNECT, this.svr_connect, this);
    };
    alertJiaRuJlb.prototype.svr_connect = function (data) {
        if (data.requestType == cmdClient_1.cmdClientType.SERVERRESPONSE) {
            deskInfo_1.DeskInfo.setDeskInfo(data.requestData);
            ViewManager_1.ViewManager.RemoveAlert(config_1.WidgetEnum.BottomToggle);
            ViewManager_1.ViewManager.Open(config_1.ViewEnum.Game, bundleLoader_1.bundleLoader.ENUM_BUNDLE.GAME);
            this.node.destroy();
        }
        else {
            deskInfo_1.DeskInfo.setLplayer(data.requestData.position, data.requestData);
        }
    };
    alertJiaRuJlb.prototype.onLoad = function () {
        C_User_1.UserInfo.cwebsocket = new cwebsocket_1.cwebsocket("ws://192.168.31.188:4030/channel", 1);
    };
    alertJiaRuJlb.prototype.onClickJiaRuPaiJu = function () {
        C_User_1.UserInfo.cwebsocket.clientSend(cmdClient_1.cmdClientEvent.CONNECT, { playerToekn: C_User_1.UserInfo.testToken, deskId: 9 });
        //  ViewManager.Alert("alertInputYzm");
    };
    alertJiaRuJlb.prototype.onClickJiaRuJuLeBu = function () {
        this.node.destroy();
        ViewManager_1.ViewManager.Alert("julebuliebiao");
    };
    alertJiaRuJlb.prototype.onDestroy = function () {
        C_User_1.UserInfo.cwebsocket.off(cmdClient_1.cmdClientEvent.CONNECT, this.svr_connect, this);
    };
    __decorate([
        property(cc.Node)
    ], alertJiaRuJlb.prototype, "closeBtn", void 0);
    __decorate([
        property(cc.Node)
    ], alertJiaRuJlb.prototype, "jiaRuPaiJuBtn", void 0);
    __decorate([
        property(cc.Node)
    ], alertJiaRuJlb.prototype, "jiaRuJuLeBuBtn", void 0);
    alertJiaRuJlb = __decorate([
        ccclass
    ], alertJiaRuJlb);
    return alertJiaRuJlb;
}(ComponentBase_1.default));
exports.default = alertJiaRuJlb;

cc._RF.pop();