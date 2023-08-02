
import { C_User } from "../../../01_hall/script/config/C_User";
import head from "../head";
import { DeskInfo } from "./deskInfo";
import { DzUtils } from "./dzUtils";
import { NodeDZpool, POOLTYPE } from "./nodeDZpool";


class deskMgr {
    private static sing: deskMgr = null

    public static get ins(): deskMgr {
        if (this.sing == null) {
            this.sing = new deskMgr();
        }
        return this.sing;
    }

    private convertNum: number

    public convertArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    public convertdataArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    private cardMap = new Map([
        [0x02 & 0xF, '2'],
        [0x03 & 0xF, '3'],
        [0x04 & 0xF, '4'],
        [0x05 & 0xF, '5'],
        [0x06 & 0xF, '6'],
        [0x07 & 0xF, '7'],
        [0x08 & 0xF, '8'],
        [0x09 & 0xF, '9'],
        [0x0A & 0xF, '10'],
        [0x0B & 0xF, '11'],
        [0x0C & 0xF, '12'],
        [0x0D & 0xF, '13'],
        [0x0E & 0xF, '1']
    ]);

    /*
    扑克转换
    */
    public async convertPoker(pokerVal) {
        let spr: cc.SpriteFrame
        var value = pokerVal & 0xF;
        var suit = pokerVal >> 4;
        var suitStr = '♦';//方块
        if (suit == 1) {
            suitStr = '♣';//梅花
        } else if (suit == 2) {
            suitStr = '♥';//红桃
        } else if (suit == 3) {
            suitStr = '♠';//黑桃
        }
        // return suitStr + ":" + this.cardMap.get(value);
        let url = `card_${suit}_${this.cardMap.get(value)}`
        console.log(`url: ${url}`)
        spr = await DzUtils.loadCardPic(url) as cc.SpriteFrame
        return spr
    }



    public setconvertNum(seat: number) {
        this.convertNum = seat == 1 ? 0 : DeskInfo.seatLen - (seat - 1)
        console.log(`convertNum: ${this.convertNum}  } `)
        this.convertArr = []
        for (let seat = 1; seat <= DeskInfo.seatLen; seat++) {
            let cNum = this.convertSeat(seat)
            this.convertArr.push(cNum)
        }
        console.log(`convertArr: ${JSON.stringify(this.convertArr)} `)
    }

    convertSeat(seat: number) {
        let convertSeat = seat + this.convertNum
        let _convertSeat = convertSeat > DeskInfo.seatLen ? convertSeat - DeskInfo.seatLen : convertSeat
        console.log(`tureSeat: ${seat}   convertSeat: ${_convertSeat} `)
        return _convertSeat
    }

    TweenSeat(seats: cc.Node[]) {
        //  let dir = DeskInfo.readyPos < Math.ceil(DeskInfo.seatLen / 2) ? -1 : 1 //0逆时针 1顺时针
        for (let i = 0; i < DeskInfo.seatLen; i++) {
            let seat = seats[i]
            let nextSeat = this.convertArr[i]

            let nextPos =  C_User.ins.seatPJson[DeskInfo.seatLen][nextSeat - 1]
            let pos =  C_User.ins.seatPJson[DeskInfo.seatLen][i]
            cc.tween(seat).to(0.5, { x: nextPos.x, y: nextPos.y }).call(() => {
                seat.x = pos.x
                seat.y = pos.y
                let nextSeatNode = seats[nextSeat - 1]
                let _head = seat.children[0]
                if (_head) {
                    let ts = _head.getComponent(head)
                    if (ts.convertseat - 1 == Number(seat.name.slice(-1))) {
                        _head.parent = nextSeatNode
                    }
                }

            }).start()


        }
    }


    initSeat(seats: cc.Node[]) {
        for (let i = 0; i < DeskInfo.seatLen; i++) {
            let seat = seats[i]
            let nextSeat = this.convertArr[i]
            let nextSeatNode = seats[nextSeat - 1]
            let _head = seat.children[0]
            if (_head) {
                let ts = _head.getComponent(head)
                if (ts.convertseat - 1 == Number(seat.name.slice(-1))) {
                    _head.parent = nextSeatNode
                }
            }
        }
    }


    addPots(pots: { [player: number]: number }) {
        let totalpot: number
        for (let playerId in pots) {
            let pot = pots[playerId]
            totalpot += pot
        }
        return totalpot
    }

    async setCard(targetArr: cc.Node[], index: number, value: number) {
        let _targets = targetArr
        _targets[index].active = true
        _targets[index].getChildByName("cardbg").active = true
        _targets[index].getChildByName("card").getComponent(cc.Sprite).spriteFrame = await DeskMgr.convertPoker(value)
    }


    setLightDir(){
        
    }  



    TweenSendCard(target: cc.Node, callback: Function, parent: any) {
        let flyCard: cc.Node = NodeDZpool.getObj(POOLTYPE.CARD)
        flyCard.parent = parent
        flyCard.x = 0
        flyCard.y = 0
        flyCard.scale = 0.5
        flyCard.opacity = 122
        let twotaget = target.getChildByName('sprTwoCard')
        let { x, y } = target.parent
        cc.Tween.stopAllByTarget(flyCard)
        cc.tween(flyCard).to(0.3, { x: x + twotaget.x, y: y + twotaget.y, scale: 1, opacity: 255 }).call(() => {
            callback && callback()
            NodeDZpool.recovery(POOLTYPE.CARD, flyCard)
        }).start()
    }


    TweenTurnCard(target: cc.Node, callback: Function) {
        target.scaleX = 1
        cc.Tween.stopAllByTarget(target)
        cc.tween(target).to(0.15, { scaleX: 0.1 }).call(callback).to(0.15, { scaleX: 1 }).start()
    }


    TweenThreeBoard(target: cc.Node, callback: Function) {
        target.scaleX = 1
        cc.Tween.stopAllByTarget(target)
        cc.tween(target).to(0.15, { scaleX: 0.1 }).call(callback).to(0.15, { scaleX: 1 }).start()
    }







}

/** 桌内管理 */
export const DeskMgr = deskMgr.ins;

