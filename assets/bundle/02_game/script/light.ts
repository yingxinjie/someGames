// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { string } from "../../../../tools/packages/bundle-hotupdate/jszip";
import { C_User } from "../../01_hall/script/config/C_User";
import { DeskMgr } from "./config/deskMgr";

const { ccclass, property } = cc._decorator;

@ccclass
export default class light extends cc.Component {

    @property([cc.String])
    private angleNumArr: string[] = [];

    private angleNums: number[] = [];

    protected start(): void {

    }

    init(SeatLen: number = 9) {
        this.angleNums =  C_User.ins.lightPJson[SeatLen]
    }


    setAngle(clientSeat: number) {
        this.node.rotation = this.angleNums[clientSeat - 1]
    }
}
