// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import ComponentBase from "../../00_base/script/common/ComponentBase";
import { C_User } from "../../01_hall/script/config/C_User";

import { cmdClientEvent } from "./config/cmdClient";
import { DeskInfo } from "./config/deskInfo";
import { DeskSeatStatus, PlayerInfoStatus } from "./config/gameConst";

const { ccclass, property } = cc._decorator;

@ccclass
export default class gameSetting extends ComponentBase {

    @property(cc.Node)
    boxs: cc.Node[] = [];

    @property(cc.Node)
    mask: cc.Node = null;





    start() {

        for (let i = 0; i < this.boxs.length; i++) {
            let btn = this.boxs[i]
            this.TouchOn(btn, this.evt_box, this)
        }
        this.TouchOn(this.mask, this.evt_Close, this)
        this.init()
    }

    init() {

        let info = {
            playerId:  C_User.ins.testuuid,
            deskId: 9,
            bring: 200,
            status: PlayerInfoStatus.OBSERVE
        }
         C_User.ins.cwebsocket.clientSend(cmdClientEvent.BRING, info)
    }


    private evt_box(e: cc.Event.EventTouch) {
        let name = e.currentTarget.name
        switch (Number(name.slice(-1))) {
            case 0: //站起
                let info = {
                    playerId:  C_User.ins.testuuid,
                    deskId: 9,
                    position: DeskInfo.readyPos,
                    status: DeskSeatStatus.LEAVESEAT
                }
                 C_User.ins.cwebsocket.clientSend(cmdClientEvent.SITDOWNORSTANDUP, info)
                break;
            case 1:

                break;
            case 2:

                break;
            case 3:

                break;
            case 4:

                break;
            case 5:

                break;
            case 6:

                break;
            case 7: // 退出游戏场景

                break;

        }

        this.node.destroy()
    }




    private evt_Close() {

        this.node.destroy()
    }

}
