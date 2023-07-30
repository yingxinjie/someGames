import { UserInfo } from "../../../01_hall/script/config/UserInfo";


class deskInfo {
    private static sing: deskInfo = null

    public static get ins(): deskInfo {
        if (this.sing == null) {
            this.sing = new deskInfo();
        }
        return this.sing;
    }

    private players:  { [id: number]: LplayerInfo } = {}

    private seatPlayers: { [trueSeat: number]: DplayerInfo } = {}

    public board: any[] = []

    public deskId: number

    public deskName: string

    public playerBetTime: number

    public boardNum: number

    public pots: any

    public round: number

    public currRoundPlayerId: number

    public isStartGame: boolean

    public roundIsRun: boolean

    public createDeskPlayerId: number

    public seatLen: number = 9 //默认9（灯光角度数量与座位数一致

    public readyPos: number = -1 //准备选择的位置


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
        if (this.players[seat]) {
            return this.seatPlayers[seat]
        }
        return null
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
            if (this.players[seat] && this.players[seat].id == UserInfo.testuuid) {
                return this.players[seat]
            }
        }
    }

    public getMydplayer() {
        for (let seat in this.seatPlayers) {
            if (this.seatPlayers[seat] && this.seatPlayers[seat].playerId == UserInfo.testuuid) {
                return this.seatPlayers[seat]
            }
        }
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
    handsCard: number[],//玩家手牌
    status: number //操作状态
    curPositionRole: string//
}