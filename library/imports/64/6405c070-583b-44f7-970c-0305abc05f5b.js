"use strict";
cc._RF.push(module, '6405cBwWDtE95cMAwWrwF9b', 'deskInfo');
// bundle/02_game/script/config/deskInfo.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeskInfo = void 0;
var deskInfo = /** @class */ (function () {
    function deskInfo() {
        this.players = {};
        this.seatPlayers = {};
        this.board = [];
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
            _this.setLplayer(lpalyer.position, lpalyer);
        });
        data.seatPlayerList.forEach(function (dplayer) {
            _this.setLplayer(dplayer.position, dplayer);
        });
    };
    deskInfo.prototype.setDplayer = function (seat, data) {
        this.seatPlayers[seat] = data;
    };
    deskInfo.prototype.getDplayer = function (seat) {
        if (this.players[seat]) {
            return this.seatPlayers[seat];
        }
        return null;
    };
    deskInfo.prototype.setLplayer = function (seat, data) {
        this.players[seat] = data;
    };
    deskInfo.prototype.getLplayer = function (seat) {
        if (this.players[seat]) {
            return this.players[seat];
        }
        return null;
    };
    deskInfo.sing = null;
    return deskInfo;
}());
/** 桌内信息 */
exports.DeskInfo = deskInfo.ins;

cc._RF.pop();