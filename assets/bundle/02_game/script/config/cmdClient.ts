
export const enum cmdClientEvent {

    CONNECT = "CONNECT",//连接房间,

    RECONNECT = "RECONNECT",//重新连接房间,

    EXIT = "EXIT",//退出房间

    SITDOWNORSTANDUP = "SITDOWNORSTANDUP",//坐下或起来座位

    BET = "BET",//下注

    START = "START",//房间开始游戏

    PAUSEORSTART = "PAUSEORSTART",//暂停或继续游戏

    INSURANCE = "INSURANCE",//购买保险

    BOARD = "BOARD",//发放公共牌

    GAMESTART = "GAMESTART",//游戏开始，服务端推送事件f

    GAMEOVER = "GAMEOVER",//游戏结束，服务端推送事件

    BRING = "BRING",//带入记分牌

    SAY = "SAY",//说话聊天

    TESTDESK = "TESTDESK",//测试桌子创建f
}



export const enum cmdClientType {

    SERVERTOCLIENT = "SERVERTOCLIENT",//服务端通知客户端

    SERVERRESPONSE = "SERVERRESPONSE",//服务端请求响应

    CLIENTTOSERVER = "CLIENTTOSERVER",//客户端通知服务器
    
    CLIENTRESPONSE = "CLIENTRESPONSE",//客户端响应服务器
}