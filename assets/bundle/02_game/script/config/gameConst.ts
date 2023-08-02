/** 游戏场景提示 */
export enum GameAlert {
    Win = "alertWin",
    Sitdown = 'alertSitdown',
}

/** 操作按钮名称 */
export enum OperateBtnName {
    btnAdd = "btnAdd",
    btnGiveup = 'btnGiveup',
    btnLook = 'btnLook',
    btnGen = 'btnGen',
    btnB1 = 'btnB1',
    btnB2 = 'btnB2',
    btnB3 = 'btnB3',
    btnB4 = 'btnB4',
    sliderAdd = 'sliderAdd',
}

/** 自动操作按钮名称 */
export enum AutoBtnName {
    btnAuto = "btnAutoSure",
    btnAutoCancel = 'btnAutoCancel',
}



/** 座位数据状态枚举 */
export enum DeskSeatStatus {
    SITDOWN = "SITDOWN",
    LEAVESEAT = 'LEAVESEAT',
    TEMPORARY = 'TEMPORARY'
}


/** Texas操作行为 */
export enum TexasAction {
    BET = "BET", //下注
    CALL = 'CALL',//跟注
    FOLD = "FOLD",//弃牌
    CHECK = 'CHECK',//看牌
    RAISE = "RAISE",//加注
    RERAISE = 'RERAISE',//再加注
    ALLIN = "ALLIN",//全下注
}


/** 玩家信息状态 */
export enum PlayerInfoStatus {
    OBSERVE = "OBSERVE",
    SITDOWN = 'SITDOWN',
    TEMPORARY = "TEMPORARY",
    WAITINGTOSTART = 'WAITINGTOSTART',
    INTHEGAME = "INTHEGAME",
    GAMEOVER = 'GAMEOVER',
    LEAVE = "LEAVE",
}


/** 玩家角色 */
export enum GamePlayerDeepRole {
    DEALER = "DEALER", //庄
    SMALLBLINDS = 'SMALLBLINDS', //小忙
    BIGBLINDS = "BIGBLINDS", //大忙
    UNDERTHEGUN = 'UNDERTHEGUN',//抢手
    PLAYER = "PLAYER",//普通玩家
}

export enum TexasRound {
    PRE_FLOP = "PRE_FLOP",//翻牌前
    FLOP = 'FLOP', //翻牌圈
    TURN = 'TURN', //转牌圈
    RIVER = 'RIVER' //河牌圈
}

export enum GamePlayerOverStatus {
    WIN = "WIN",//赢
    LOSE = 'LOSE', //输
    FLAT = 'FLAT', //平
}



