"use strict";
cc._RF.push(module, '6405cBwWDtE95cMAwWrwF9b', 'deskInfo');
// bundle/02_game/script/config/deskInfo.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeskInfo = void 0;
var UserInfo_1 = require("../../../01_hall/script/config/UserInfo");
var gameConst_1 = require("./gameConst");
var deskInfo = /** @class */ (function () {
    function deskInfo() {
        this.players = {};
        this.seatPlayers = {};
        this.board = [];
        this.seatLen = 9; //默认9（灯光角度数量与座位数一致
        this.readyPos = -1; //准备选择的位置
    }
    Object.defineProperty(deskInfo, "ins", {
        get: function () {
            if (this.sing == null) {
                this.sing = new deskInfo();
            }
            return this.sing;
        },
        enumerable: false,
        configurable: true
    });
    deskInfo.prototype.setDeskInfo = function (data) {
        var _this = this;
        this.deskId = data.deskId;
        this.deskName = data.deskName;
        this.playerBetTime = data.playerBetTime;
        this.boardNum = data.boardNum;
        this.board = data.board;
        this.pots = data.pots;
        this.round = data.round;
        this.currRoundPlayerId = data.currRoundPlayerId;
        this.isStartGame = data.isStartGame;
        this.roundIsRun = data.roundIsRun;
        this.createDeskPlayerId = data.createDeskPlayerId;
        data.playerList.forEach(function (lpalyer) {
            _this.setLplayer(lpalyer.id, lpalyer);
        });
        data.seatPlayerList.forEach(function (dplayer) {
            _this.setDplayer(dplayer.position, dplayer);
        });
    };
    deskInfo.prototype.setDplayer = function (seat, data) {
        this.seatPlayers[seat] = data;
    };
    deskInfo.prototype.getDplayer = function (seat) {
        if (this.seatPlayers[seat]) {
            return this.seatPlayers[seat];
        }
        return null;
    };
    deskInfo.prototype.clearDplayer = function (seat) {
        var seatP = this.seatPlayers[seat];
        if (seatP) {
            seatP.pot = 0;
            seatP.handsCard = [];
            seatP.curPositionRole = "";
            seatP.playerId = 0;
            seatP.status = gameConst_1.PlayerInfoStatus.LEAVE;
        }
    };
    deskInfo.prototype.setLplayer = function (id, data) {
        this.players[id] = data;
    };
    deskInfo.prototype.getLplayer = function (id) {
        if (this.players[id]) {
            return this.players[id];
        }
        return null;
    };
    deskInfo.prototype.getMylplayer = function () {
        for (var seat in this.players) {
            if (this.players[seat] && this.players[seat].id == UserInfo_1.UserInfo.testuuid) {
                return this.players[seat];
            }
        }
    };
    deskInfo.prototype.getMydplayer = function () {
        for (var seat in this.seatPlayers) {
            if (this.seatPlayers[seat] && this.seatPlayers[seat].playerId == UserInfo_1.UserInfo.testuuid) {
                return this.seatPlayers[seat];
            }
        }
    };
    deskInfo.sing = null;
    return deskInfo;
}());
/** 桌内信息 */
exports.DeskInfo = deskInfo.ins;

cc._RF.pop();