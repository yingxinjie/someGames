"use strict";
cc._RF.push(module, '24ce9DUWShCirZa/EwbeZOY', 'gameConst');
// bundle/02_game/script/config/gameConst.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamePlayerOverStatus = exports.TexasRound = exports.GamePlayerDeepRole = exports.PlayerInfoStatus = exports.TexasAction = exports.DeskSeatStatus = exports.AutoBtnName = exports.OperateBtnName = exports.GameAlert = void 0;
/** 游戏场景提示 */
var GameAlert;
(function (GameAlert) {
    GameAlert["Win"] = "alertWin";
    GameAlert["Sitdown"] = "alertSitdown";
})(GameAlert = exports.GameAlert || (exports.GameAlert = {}));
/** 操作按钮名称 */
var OperateBtnName;
(function (OperateBtnName) {
    OperateBtnName["btnAdd"] = "btnAdd";
    OperateBtnName["btnGiveup"] = "btnGiveup";
    OperateBtnName["btnLook"] = "btnLook";
    OperateBtnName["btnGen"] = "btnGen";
    OperateBtnName["btnB1"] = "btnB1";
    OperateBtnName["btnB2"] = "btnB2";
    OperateBtnName["btnB3"] = "btnB3";
    OperateBtnName["btnB4"] = "btnB4";
    OperateBtnName["sliderAdd"] = "sliderAdd";
})(OperateBtnName = exports.OperateBtnName || (exports.OperateBtnName = {}));
/** 自动操作按钮名称 */
var AutoBtnName;
(function (AutoBtnName) {
    AutoBtnName["btnAuto"] = "btnAutoSure";
    AutoBtnName["btnAutoCancel"] = "btnAutoCancel";
})(AutoBtnName = exports.AutoBtnName || (exports.AutoBtnName = {}));
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
    PlayerInfoStatus["OBSERVE"] = "OBSERVE";
    PlayerInfoStatus["SITDOWN"] = "SITDOWN";
    PlayerInfoStatus["TEMPORARY"] = "TEMPORARY";
    PlayerInfoStatus["WAITINGTOSTART"] = "WAITINGTOSTART";
    PlayerInfoStatus["INTHEGAME"] = "INTHEGAME";
    PlayerInfoStatus["GAMEOVER"] = "GAMEOVER";
    PlayerInfoStatus["LEAVE"] = "LEAVE";
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
var TexasRound;
(function (TexasRound) {
    TexasRound["PRE_FLOP"] = "PRE_FLOP";
    TexasRound["FLOP"] = "FLOP";
    TexasRound["TURN"] = "TURN";
    TexasRound["RIVER"] = "RIVER"; //河牌圈
})(TexasRound = exports.TexasRound || (exports.TexasRound = {}));
var GamePlayerOverStatus;
(function (GamePlayerOverStatus) {
    GamePlayerOverStatus["WIN"] = "WIN";
    GamePlayerOverStatus["LOSE"] = "LOSE";
    GamePlayerOverStatus["FLAT"] = "FLAT";
})(GamePlayerOverStatus = exports.GamePlayerOverStatus || (exports.GamePlayerOverStatus = {}));

cc._RF.pop();