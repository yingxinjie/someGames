import { C_User } from "../../../01_hall/script/config/C_User";
import { GamePlayerDeepRole, GamePlayerOverStatus, PlayerInfoStatus, TexasAction, TexasRound } from "./gameConst";


class deskInfo {
    private static sing: deskInfo = null

    public static get ins(): deskInfo {
        if (this.sing == null) {
            this.sing = new deskInfo();
        }
        return this.sing;
    }

    private players: { [id: number]: LplayerInfo } = {}

    private seatPlayers: { [trueSeat: number]: DplayerInfo } = {}

    public board: any[] = []

    public deskId: number

    public deskName: string

    public playerBetTime: number

    public boardNum: number

    public pots: { [player: number]: number }[]

    public round: number

    public currRoundPlayerId: number

    public isStartGame: boolean

    public roundIsRun: boolean

    public createDeskPlayerId: number

    public seatLen: number = 9 //默认9（灯光角度数量与座位数一致

    public readyPos: number = -1 //准备选择的位置

    public curMyAcitons: { [action: string]: number } = {}


    public setDeskInfo(data: any) {
        this.deskId = data.deskId
        this.deskName = data.deskName
        this.playerBetTime = data.playerBetTime
        this.boardNum = data.boardNum
        this.board = data.board
        this.pots = data.pots
        this.round = data.round
        this.currRoundPlayerId = data.currRoundPlayerId
        this.isStartGame = data.isStartGame
        this.roundIsRun = data.roundIsRun
        this.createDeskPlayerId = data.createDeskPlayerId

        data.playerList.forEach(lpalyer => {
            this.setLplayer(lpalyer.id, lpalyer)
        });

        data.seatPlayerList.forEach(dplayer => {
            this.setDplayer(dplayer.position, dplayer)
        });
    }

    public setDplayer(seat: number, data: DplayerInfo) {
        this.seatPlayers[seat] = data
    }

    public getDplayer(seat: number) {
        if (this.seatPlayers[seat]) {
            return this.seatPlayers[seat]
        }
        return null
    }


    public clearDplayer(seat: number) {
        let seatP = this.seatPlayers[seat]
        if (seatP) {
            seatP.pot = 0
            seatP.handsCard = []
            seatP.curPositionRole = null
            seatP.playerId = 0
            seatP.status = PlayerInfoStatus.LEAVE
        }
    }

    public setLplayer(id: number, data: LplayerInfo) {
        this.players[id] = data
    }

    public getLplayer(id: number) {
        if (this.players[id]) {
            return this.players[id]
        }
        return null
    }

    public getMylplayer() {
        for (let seat in this.players) {
            if (this.players[seat] && this.players[seat].id == C_User.ins.testuuid) {
                return this.players[seat]
            }
        }
    }

    public getMydplayer() {
        for (let seat in this.seatPlayers) {
            if (this.seatPlayers[seat] && this.seatPlayers[seat].playerId == C_User.ins.testuuid) {
                return this.seatPlayers[seat]
            }
        }
    }

    public setplayerInfo(id: number, trueSeat: number, status: PlayerInfoStatus) {
        let dplayer = DeskInfo.getDplayer(trueSeat)
        dplayer.position = trueSeat
        dplayer.status = status

        let lpalyer = DeskInfo.getLplayer(id)
        lpalyer.position = trueSeat
        lpalyer.status = status
    }



}

/** 桌内信息 */
export const DeskInfo = deskInfo.ins;

/** 桌子内玩家信息 */
export interface LplayerInfo {   //
    id: number
    name: string
    code: string
    headPic: string
    position: number//服务端真实玩家位置
    //coneverSeat: number//客服端玩家位置
    bankRoll: number,//金币
    status: string //操作状态
}

/** 座位上玩家信息 */
export interface DplayerInfo {
    playerId: number
    pot: number
    position: number//服务端真实玩家位置
    coneverSeat?: number//客服端玩家位置
    handsCard: Card[],//玩家手牌
    status: string //操作状态
    curPositionRole: GamePlayerDeepRole//
}

/** 游戏开始信息 */
export interface S_GameStart {
    curPlayerId: number
    betTime: number
    boardNum: number
    deskId: number
    playerPots: { [player: number]: number }[]
    seatPlayerList: DplayerInfo[] //玩家数据
    actions: Action[]
}


/** 公共牌信息 */
export interface S_Board {
    board: Card[]
    nextPlayerId: number
    nextBetTime: number
    deskId: number
    actions: Action[] //可操作行为
    cardRankingInfo: Board_CardType //卡牌信息
}

interface Board_CardType {
    ranking: string//牌型信息（高牌等
    cards: Card[] //对应牌型信息
    winRate: number //赢率，万份制，ALLIN时才有该字段
}

/** 下注操作信息 */
export interface S_Bet {
    round: TexasRound //当前回合 PRE_FLOP(\"翻牌前\"), FLOP(\"翻牌圈\"), TURN(\"转牌圈\"), RIVER(\"河牌圈\
    playerId: number //当前操作人
    bankRoll: number
    action: TexasAction // 当前操作
    nextPlayerId: number //下位操作人（
    nextBetTime: number
    bet: number // 下注金额
    deskId: number
    actions: Action[] //可操作行为
    playerPots: { [player: number]: number }[] //用户下注池
    pots: number[] //总下注池

    
}


/** 游戏结束信息 */
export interface S_GameOver {
    board: Card[]
    deskId: number
    playerList: GameOverPlayerInfo //玩家得分集合
}


interface GameOverPlayerInfo {
    playerId: number
    handsCard: Card[]
    ranking: string //牌型
    board: number //输赢记分牌
    bankRoll: number //剩余记分牌
    status: GamePlayerOverStatus // 输赢
}

export interface Action {
    action: TexasAction,
    minBet: number
}

interface Card {
    value: number,
    suit: string
}


