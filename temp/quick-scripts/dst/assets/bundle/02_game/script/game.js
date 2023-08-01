
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMl9nYW1lXFxzY3JpcHRcXGdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNkRBQTREO0FBQzVELDJFQUFzRTtBQUN0RSw2REFBOEQ7QUFDOUQsdUVBQXNFO0FBQ3RFLDZEQUEwRTtBQUMxRSxnREFBbUU7QUFDbkUsOENBQTZDO0FBQzdDLGdEQUFvRDtBQUNwRCxpQ0FBNEI7QUFFdEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQWE7SUFBL0M7UUFBQSxxRUFrSUM7UUEvSEcsVUFBSSxHQUFZLElBQUksQ0FBQztRQUdyQixXQUFLLEdBQVUsSUFBSSxDQUFDO1FBR3BCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixXQUFLLEdBQWMsRUFBRSxDQUFDO1FBR3RCLGFBQU8sR0FBYyxFQUFFLENBQUM7O0lBdUc1QixDQUFDO0lBbEdhLG9CQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7UUFHWCxNQUFNO1FBQ04saUJBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLDBCQUFjLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDOUQsaUJBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLDBCQUFjLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDMUUsaUJBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLDBCQUFjLENBQUMsUUFBUSxFQUFFLElBQUks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LFVBQVUsQ0FBQyxHQUFHLENBQUMsMEJBQWMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQSxDQUFDLFFBQVE7SUFDcEYsQ0FBQztJQXpIRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NDQUNHO0lBR3JCO1FBREMsUUFBUSxDQUFDLGVBQUssQ0FBQzt1Q0FDSTtJQUdwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VDQUNJO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1Q0FDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNNO0lBM0JQLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FrSXhCO0lBQUQsV0FBQztDQWxJRCxBQWtJQyxDQWxJaUMsdUJBQWEsR0FrSTlDO2tCQWxJb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBidW5kbGVMb2FkZXIgfSBmcm9tIFwiLi4vLi4vLi4vc2NyaXB0L2J1bmRsZUxvYWRlclwiO1xyXG5pbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tIFwiLi4vLi4vMDBfYmFzZS9zY3JpcHQvY29tbW9uL0NvbXBvbmVudEJhc2VcIjtcclxuaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tIFwiLi4vLi4vMDFfaGFsbC9zY3JpcHQvY29uZmlnL0NfVXNlclwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCIuLi8uLi8wMV9oYWxsL3NjcmlwdC9jb25maWcvVmlld01hbmFnZXJcIjtcclxuaW1wb3J0IHsgVmlld0VudW0sIFdpZGdldEVudW0gfSBmcm9tIFwiLi4vLi4vMDFfaGFsbC9zY3JpcHQvY29uZmlnL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBjbWRDbGllbnRFdmVudCwgY21kQ2xpZW50VHlwZSB9IGZyb20gXCIuL2NvbmZpZy9jbWRDbGllbnRcIjtcclxuaW1wb3J0IHsgRGVza0luZm8gfSBmcm9tIFwiLi9jb25maWcvZGVza0luZm9cIjtcclxuaW1wb3J0IHsgRGVza1NlYXRTdGF0dXMgfSBmcm9tIFwiLi9jb25maWcvZ2FtZUNvbnN0XCI7XHJcbmltcG9ydCBsaWdodCBmcm9tIFwiLi9saWdodFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGdhbWUgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNhcmQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShsaWdodClcclxuICAgIGxpZ2h0OiBsaWdodCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBhbGVydDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkZXNrYmV0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRlc2tpbmZvOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhlYWRJdGVtOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG15T3BlcmF0ZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzZWF0czogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjaG91bWFzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIC8qKiDmoYzlrZDlnZDmoIcgKi9cclxuICAgIHByaXZhdGUgY3VyU2VhdFA6IFt7IHg6IG51bWJlciwgeTogbnVtYmVyIH1dXHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmluaXQoKVxyXG5cclxuXHJcbiAgICAgICAgLy/mtojmga/kuovku7ZcclxuICAgICAgICBVc2VySW5mby5jd2Vic29ja2V0Lm9uKGNtZENsaWVudEV2ZW50LkJFVCwgdGhpcy5zdnJfYmV0LCB0aGlzKVxyXG4gICAgICAgIFVzZXJJbmZvLmN3ZWJzb2NrZXQub24oY21kQ2xpZW50RXZlbnQuR0FNRVNUQVJULCB0aGlzLnN2cl9nYW1lc3RhcnQsIHRoaXMpXHJcbiAgICAgICAgVXNlckluZm8uY3dlYnNvY2tldC5vbihjbWRDbGllbnRFdmVudC5HQU1FT1ZFUiwgdGhpcy5zdnJfZ2FtZW92ZXIsIHRoaXMpXHJcbiAgICAgICAgVXNlckluZm8uY3dlYnNvY2tldC5vbihjbWRDbGllbnRFdmVudC5TSVRET1dOT1JTVEFORFVQLCB0aGlzLnN2cl9kb3dudXAsIHRoaXMpXHJcbiAgICAgICAgVXNlckluZm8uY3dlYnNvY2tldC5vbihjbWRDbGllbnRFdmVudC5TVEFSVCwgdGhpcy5zdnJfc3RhcnQsIHRoaXMpXHJcbiAgICAgICAgVXNlckluZm8uY3dlYnNvY2tldC5vbihjbWRDbGllbnRFdmVudC5CT0FSRCwgdGhpcy5zdnJfYm9hcmQsIHRoaXMpXHJcbiAgICAgICAgVXNlckluZm8uY3dlYnNvY2tldC5vbihjbWRDbGllbnRFdmVudC5CUklORywgdGhpcy5zdnJfYnJpbmcsIHRoaXMpXHJcbiAgICAgICAgVXNlckluZm8uY3dlYnNvY2tldC5vbihjbWRDbGllbnRFdmVudC5JTlNVUkFOQ0UsIHRoaXMuc3ZyX2luc3VyYW5jZSwgdGhpcylcclxuICAgICAgICBVc2VySW5mby5jd2Vic29ja2V0Lm9uKGNtZENsaWVudEV2ZW50LkVYSVQsIHRoaXMuc3ZyX2V4aXQsIHRoaXMpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgVXNlckluZm8uY3dlYnNvY2tldC5vbihjbWRDbGllbnRFdmVudC5DT05ORUNULCB0aGlzLnN2cl9jb25uZWN0LCB0aGlzKSAvLyDlj6rlpITnkIbmlbDmja5cclxuICAgICAgICBVc2VySW5mby5jd2Vic29ja2V0Lm9uKGNtZENsaWVudEV2ZW50LlJFQ09OTkVDVCwgdGhpcy5zdnJfY29ubmVjdCwgdGhpcykgLy8g5Y+q5aSE55CG5pWw5o2uXHJcbiAgICB9XHJcbiAgICAvL+a2iOaBr+Wbnuiwg1xyXG4gICAgcHJpdmF0ZSBzdnJfY29ubmVjdChkYXRhOiBhbnkpIHtcclxuICAgICAgICBpZiAoZGF0YS5yZXF1ZXN0VHlwZSA9PSBjbWRDbGllbnRUeXBlLlNFUlZFUlRPQ0xJRU5UKSB7XHJcbiAgICAgICAgICAgIERlc2tJbmZvLnNldExwbGF5ZXIoZGF0YS5yZXF1ZXN0RGF0YS5wb3NpdGlvbiwgZGF0YS5yZXF1ZXN0RGF0YSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdnJfYmV0KGRhdGE6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3ZyX2JldFwiKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3ZyX2dhbWVzdGFydChkYXRhOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN2cl9nYW1lc3RhcnRcIilcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN2cl9nYW1lb3ZlcihkYXRhOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN2cl9nYW1lb3ZlclwiKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3ZyX2Rvd251cChkYXRhOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN2cl9iZXRcIilcclxuICAgICAgICBWaWV3TWFuYWdlci5BbGVydChXaWRnZXRFbnVtLkpvaW5EZXNrLCBidW5kbGVMb2FkZXIuRU5VTV9CVU5ETEUuR0FNRSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN2cl9zdGFydChkYXRhOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN2cl9iZXRcIilcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN2cl9ib2FyZChkYXRhOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN2cl9ib2FyZFwiKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3ZyX2JyaW5nKGRhdGE6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3ZyX2JyaW5nXCIpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdnJfaW5zdXJhbmNlKGRhdGE6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3ZyX2luc3VyYW5jZVwiKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3ZyX2V4aXQoZGF0YTogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzdnJfZXhpdFwiKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL+S6i+S7tuWbnuiwg1xyXG4gICAgcHJpdmF0ZSBldmVudF9zaXRkb3duKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICAgIGxldCBpbmZvID0ge1xyXG4gICAgICAgICAgICBwbGF5ZXJJZDogVXNlckluZm8udGVzdHV1aWQsXHJcbiAgICAgICAgICAgIGRlc2tJZDogOSxcclxuICAgICAgICAgICAgcG9zaXRpb246IDgsXHJcbiAgICAgICAgICAgIHN0YXR1czogRGVza1NlYXRTdGF0dXMuU0lURE9XTlxyXG4gICAgICAgIH1cclxuICAgICAgICBVc2VySW5mby5jd2Vic29ja2V0LmNsaWVudFNlbmQoY21kQ2xpZW50RXZlbnQuU0lURE9XTk9SU1RBTkRVUCwgaW5mbylcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy/liJ3lp4vljJZcclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJTZWF0UCA9IFVzZXJJbmZvLnNlYXRQSnNvbltEZXNrSW5mby5zZWF0TGVuXVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRGVza0luZm8uc2VhdExlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhdHNbaV0ueCA9IHRoaXMuY3VyU2VhdFBbaV0ueFxyXG4gICAgICAgICAgICB0aGlzLnNlYXRzW2ldLnkgPSB0aGlzLmN1clNlYXRQW2ldLnlcclxuICAgICAgICAgICAgdGhpcy5zZWF0c1tpXS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuVG91Y2hPbih0aGlzLnNlYXRzW2ldLCB0aGlzLmV2ZW50X3NpdGRvd24sIHRoaXMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgVXNlckluZm8uY3dlYnNvY2tldC5vZmYoY21kQ2xpZW50RXZlbnQuQ09OTkVDVCwgdGhpcy5zdnJfY29ubmVjdCwgdGhpcykgLy8g5Y+q5aSE55CG5pWw5o2uXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG4iXX0=