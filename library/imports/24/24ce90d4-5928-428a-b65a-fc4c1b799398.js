"use strict";
cc._RF.push(module, '24ce9DUWShCirZa/EwbeZOY', 'gameConst');
// bundle/02_game/script/config/gameConst.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamePlayerDeepRole = exports.PlayerInfoStatus = exports.TexasAction = exports.DeskSeatStatus = exports.GameAlert = void 0;
/** 游戏场景提示 */
var GameAlert;
(function (GameAlert) {
    GameAlert["Win"] = "alertWin";
    GameAlert["Sitdown"] = "alertSitdown";
})(GameAlert = exports.GameAlert || (exports.GameAlert = {}));
/** 座位数据状态枚举 */
var DeskSeatStatus;
(function (DeskSeatStatus) {
    DeskSeatStatus["SITDOWN"] = "SITDOWN";
    DeskSeatStatus["LEAVESEAT"] = "LEAVESEAT";
    DeskSeatStatus["TEMPORARY"] = "TEMPORARY";
})(DeskSeatStatus = exports.DeskSeatStatus || (exports.DeskSeatStatus = {}));
/** Texas操作行为 */
var TexasAction;
(function (TexasAction) {
    TexasAction["BET"] = "BET";
    TexasAction["CALL"] = "CALL";
    TexasAction["FOLD"] = "FOLD";
    TexasAction["CHECK"] = "CHECK";
    TexasAction["RAISE"] = "RAISE";
    TexasAction["RERAISE"] = "RERAISE";
    TexasAction["ALLIN"] = "ALLIN";
})(TexasAction = exports.TexasAction || (exports.TexasAction = {}));
/** 玩家信息状态 */
var PlayerInfoStatus;
(function (PlayerInfoStatus) {
    PlayerInfoStatus["OBSERVE"] = "alertWin";
    PlayerInfoStatus["SITDOWN"] = "alertSitdown";
    PlayerInfoStatus["TEMPORARY"] = "alertWin";
    PlayerInfoStatus["WAITINGTOSTART"] = "alertSitdown";
    PlayerInfoStatus["INTHEGAME"] = "alertWin";
    PlayerInfoStatus["GAMEOVER"] = "alertSitdown";
    PlayerInfoStatus["LEAVE"] = "alertWin";
})(PlayerInfoStatus = exports.PlayerInfoStatus || (exports.PlayerInfoStatus = {}));
/** 玩家角色 */
var GamePlayerDeepRole;
(function (GamePlayerDeepRole) {
    GamePlayerDeepRole["DEALER"] = "DEALER";
    GamePlayerDeepRole["SMALLBLINDS"] = "SMALLBLINDS";
    GamePlayerDeepRole["BIGBLINDS"] = "BIGBLINDS";
    GamePlayerDeepRole["UNDERTHEGUN"] = "UNDERTHEGUN";
    GamePlayerDeepRole["PLAYER"] = "PLAYER";
})(GamePlayerDeepRole = exports.GamePlayerDeepRole || (exports.GamePlayerDeepRole = {}));

cc._RF.pop();