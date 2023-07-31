import { UserInfo } from "../../../01_hall/script/config/UserInfo";
import head from "../head";
import { DeskInfo } from "./deskInfo";


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

            let nextPos = UserInfo.seatPJson[DeskInfo.seatLen][nextSeat - 1]
            let pos = UserInfo.seatPJson[DeskInfo.seatLen][i]
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




}

/** 桌内管理 */
export const DeskMgr = deskMgr.ins;

