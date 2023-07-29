

class deskInfo {
    private static sing: deskInfo = null

    public static get ins(): deskInfo {
        if (this.sing == null) {
            this.sing = new deskInfo();
        }
        return this.sing;
    }

    private players: { [trueSeat: number]: LplayerInfo } = {}

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
            this.setLplayer(lpalyer.position, lpalyer)
        });

        data.seatPlayerList.forEach(dplayer => {
            this.setLplayer(dplayer.position, dplayer)
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

    public setLplayer(seat: number, data: LplayerInfo) {
        this.players[seat] = data
    }

    public getLplayer(seat: number) {
        if (this.players[seat]) {
            return this.players[seat]
        }
        return null
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
    bankRoll: number[],//玩家手牌
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