/** 游戏场景提示 */
export enum GameAlert {
    Win = "alertWin",
    Sitdown = 'alertSitdown',
}


/** 座位数据状态枚举 */
export enum DeskSeatStatus {
    SITDOWN = "SITDOWN",
    LEAVESEAT = 'LEAVESEAT',
    TEMPORARY = 'TEMPORARY'
}


/** Texas操作行为 */
export enum TexasAction {
    BET = "BET",
    CALL = 'CALL',
    FOLD = "FOLD",
    CHECK = 'CHECK',
    RAISE = "RAISE",
    RERAISE = 'RERAISE',
    ALLIN = "ALLIN",
}


/** 玩家信息状态 */
export enum PlayerInfoStatus {
    OBSERVE = "alertWin",
    SITDOWN = 'alertSitdown',
    TEMPORARY = "alertWin",
    WAITINGTOSTART = 'alertSitdown',
    INTHEGAME = "alertWin",
    GAMEOVER = 'alertSitdown',
    LEAVE = "alertWin",
}


/** 玩家角色 */
export enum GamePlayerDeepRole {
    DEALER = "DEALER",
    SMALLBLINDS = 'SMALLBLINDS',
    BIGBLINDS = "BIGBLINDS",
    UNDERTHEGUN = 'UNDERTHEGUN',
    PLAYER = "PLAYER",
}