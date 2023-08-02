
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/01_hall/script/widget/alertJiaRuJlb.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
            deskInfo_1.DeskInfo.setLplayer(data.requestData.id, data.requestData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXHdpZGdldFxcYWxlcnRKaWFSdUpsYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxnRUFBK0Q7QUFDL0QsOEVBQXlFO0FBQ3pFLHNFQUF5RjtBQUN6RixvRUFBbUU7QUFDbkUsMkNBQTRDO0FBQzVDLHFEQUFvRDtBQUNwRCwyQ0FBd0Q7QUFDeEQsbURBQWtEO0FBRTVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFhO0lBQXhEO1FBQUEscUVBaURDO1FBL0NXLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsb0JBQWMsR0FBWSxJQUFJLENBQUM7O0lBMEMzQyxDQUFDO0lBeENHLDZCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtRQUN4RCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUE7UUFDMUQsaUJBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLDBCQUFjLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDMUUsQ0FBQztJQUdPLG1DQUFXLEdBQW5CLFVBQW9CLElBQVM7UUFDekIsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLHlCQUFhLENBQUMsY0FBYyxFQUFFO1lBQ2xELG1CQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUN0Qyx5QkFBVyxDQUFDLFdBQVcsQ0FBQyxtQkFBVSxDQUFDLFlBQVksQ0FBQyxDQUFBO1lBQ2hELHlCQUFXLENBQUMsSUFBSSxDQUFDLGlCQUFRLENBQUMsSUFBSSxFQUFFLDJCQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQzlELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdkI7YUFBTTtZQUNILG1CQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtTQUM3RDtJQUNMLENBQUM7SUFFUyw4QkFBTSxHQUFoQjtRQUNJLGlCQUFRLENBQUMsVUFBVSxHQUFHLElBQUksdUJBQVUsQ0FBQyxrQ0FBa0MsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUMvRSxDQUFDO0lBRU8seUNBQWlCLEdBQXpCO1FBQ0ksaUJBQVEsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLDBCQUFjLENBQUMsT0FBTyxFQUFFLEVBQUUsV0FBVyxFQUFFLGlCQUFRLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ3RHLHVDQUF1QztJQUMzQyxDQUFDO0lBRU8sMENBQWtCLEdBQTFCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQix5QkFBVyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRVMsaUNBQVMsR0FBbkI7UUFDSSxpQkFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsMEJBQWMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUMzRSxDQUFDO0lBMUNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ2U7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFDb0I7SUFHdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5REFDcUI7SUFQdEIsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQWlEakM7SUFBRCxvQkFBQztDQWpERCxBQWlEQyxDQWpEMEMsdUJBQWEsR0FpRHZEO2tCQWpEb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBidW5kbGVMb2FkZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2NyaXB0L2J1bmRsZUxvYWRlclwiO1xyXG5pbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tIFwiLi4vLi4vLi4vMDBfYmFzZS9zY3JpcHQvY29tbW9uL0NvbXBvbmVudEJhc2VcIjtcclxuaW1wb3J0IHsgY21kQ2xpZW50RXZlbnQsIGNtZENsaWVudFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vMDJfZ2FtZS9zY3JpcHQvY29uZmlnL2NtZENsaWVudFwiO1xyXG5pbXBvcnQgeyBEZXNrSW5mbyB9IGZyb20gXCIuLi8uLi8uLi8wMl9nYW1lL3NjcmlwdC9jb25maWcvZGVza0luZm9cIjtcclxuaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tIFwiLi4vY29uZmlnL0NfVXNlclwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCIuLi9jb25maWcvVmlld01hbmFnZXJcIjtcclxuaW1wb3J0IHsgVmlld0VudW0sIFdpZGdldEVudW0gfSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBjd2Vic29ja2V0IH0gZnJvbSBcIi4uL2NvbmZpZy9jd2Vic29ja2V0XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYWxlcnRKaWFSdUpsYiBleHRlbmRzIENvbXBvbmVudEJhc2Uge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGNsb3NlQnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBqaWFSdVBhaUp1QnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgamlhUnVKdUxlQnVCdG46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuVG91Y2hPbih0aGlzLmNsb3NlQnRuLCB0aGlzLmFsZXJ0RGVzdG9yeSk7XHJcbiAgICAgICAgdGhpcy5Ub3VjaE9uKHRoaXMuamlhUnVQYWlKdUJ0biwgdGhpcy5vbkNsaWNrSmlhUnVQYWlKdSlcclxuICAgICAgICB0aGlzLlRvdWNoT24odGhpcy5qaWFSdUp1TGVCdUJ0biwgdGhpcy5vbkNsaWNrSmlhUnVKdUxlQnUpXHJcbiAgICAgICAgVXNlckluZm8uY3dlYnNvY2tldC5vbihjbWRDbGllbnRFdmVudC5DT05ORUNULCB0aGlzLnN2cl9jb25uZWN0LCB0aGlzKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHN2cl9jb25uZWN0KGRhdGE6IGFueSkge1xyXG4gICAgICAgIGlmIChkYXRhLnJlcXVlc3RUeXBlID09IGNtZENsaWVudFR5cGUuU0VSVkVSUkVTUE9OU0UpIHtcclxuICAgICAgICAgICAgRGVza0luZm8uc2V0RGVza0luZm8oZGF0YS5yZXF1ZXN0RGF0YSlcclxuICAgICAgICAgICAgVmlld01hbmFnZXIuUmVtb3ZlQWxlcnQoV2lkZ2V0RW51bS5Cb3R0b21Ub2dnbGUpXHJcbiAgICAgICAgICAgIFZpZXdNYW5hZ2VyLk9wZW4oVmlld0VudW0uR2FtZSwgYnVuZGxlTG9hZGVyLkVOVU1fQlVORExFLkdBTUUpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgRGVza0luZm8uc2V0THBsYXllcihkYXRhLnJlcXVlc3REYXRhLmlkLCBkYXRhLnJlcXVlc3REYXRhKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIFVzZXJJbmZvLmN3ZWJzb2NrZXQgPSBuZXcgY3dlYnNvY2tldChcIndzOi8vMTkyLjE2OC4zMS4xODg6NDAzMC9jaGFubmVsXCIsIDEpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNsaWNrSmlhUnVQYWlKdSgpIHtcclxuICAgICAgICBVc2VySW5mby5jd2Vic29ja2V0LmNsaWVudFNlbmQoY21kQ2xpZW50RXZlbnQuQ09OTkVDVCwgeyBwbGF5ZXJUb2VrbjogVXNlckluZm8udGVzdFRva2VuLCBkZXNrSWQ6IDkgfSlcclxuICAgICAgICAvLyAgVmlld01hbmFnZXIuQWxlcnQoXCJhbGVydElucHV0WXptXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DbGlja0ppYVJ1SnVMZUJ1KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgVmlld01hbmFnZXIuQWxlcnQoXCJqdWxlYnVsaWViaWFvXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgVXNlckluZm8uY3dlYnNvY2tldC5vZmYoY21kQ2xpZW50RXZlbnQuQ09OTkVDVCwgdGhpcy5zdnJfY29ubmVjdCwgdGhpcylcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuIl19