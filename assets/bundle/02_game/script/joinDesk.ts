// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import ComponentBase from "../../00_base/script/common/ComponentBase";
import { UserInfo } from "../../01_hall/script/config/C_User";
import { cmdClientEvent } from "./config/cmdClient";
import { DeskInfo } from "./config/deskInfo";
import { DeskSeatStatus, PlayerInfoStatus } from "./config/gameConst";

const { ccclass, property } = cc._decorator;

@ccclass
export default class joinDesk extends ComponentBase {

    @property(cc.Label)
    labtitle1: cc.Label = null;

    @property(cc.Label)
    labrecordcost: cc.Label = null;

    @property(cc.Label)
    labB: cc.Label = null;

    @property(cc.Label)
    labF: cc.Label = null;

    @property(cc.Toggle)
    toggles: cc.Toggle[] = [];

    @property(cc.Node)
    myclubcoin: cc.Node = null;

    @property(cc.Node)
    mycoin: cc.Node = null;

    @property(cc.Slider)
    slider: cc.Slider = null;

    @property(cc.Node)
    btnJoin: cc.Node = null;

    @property(cc.Node)
    btnRefrsh: cc.Node = null;

    @property(cc.Node)
    btnClose: cc.Node = null;

    @property(cc.Node)
    btnCoinAdd: cc.Node = null;

    @property(cc.Node)
    btnClubCoinAdd: cc.Node = null;



    start() {
        this.TouchOn(this.btnClose, this.evt_Close);
        this.TouchOn(this.btnRefrsh, this.evt_Refrsh);
        this.TouchOn(this.btnJoin, this.evt_Join);
        this.TouchOn(this.btnCoinAdd, this.evt_CoinAdd);
        this.TouchOn(this.btnClubCoinAdd, this.evt_ClubCoinAdd);
        this.slider.node.on("slide", this.setJifen, this)
        this.init()
    }

    init() {
        this.labtitle1.string = "" + UserInfo.nick
        this.labF.string = "" + 200
        let info = {
            playerId: UserInfo.testuuid,
            deskId: 9,
            bring: 200,
            status: PlayerInfoStatus.OBSERVE
        }
        UserInfo.cwebsocket.clientSend(cmdClientEvent.BRING, info)
    }

    setJifen() {
        this.labF.string = "" + 200
    }



    private evt_Close() {
        let info = {
            playerId: UserInfo.testuuid,
            deskId: 9,
            position: DeskInfo.readyPos,
            status: DeskSeatStatus.LEAVESEAT
        }
        UserInfo.cwebsocket.clientSend(cmdClientEvent.SITDOWNORSTANDUP, info)
        this.node.destroy()
    }

    private evt_Refrsh() {
        this.node.destroy()
    }

    private evt_Join() {
        let info = {
            playerId: UserInfo.testuuid,
            deskId: 9,
            position: DeskInfo.readyPos,
            status: DeskSeatStatus.SITDOWN
        }
        UserInfo.cwebsocket.clientSend(cmdClientEvent.SITDOWNORSTANDUP, info)
        this.node.destroy()
    }

    private evt_CoinAdd() {
    }

    private evt_ClubCoinAdd() {
    }

    // update (dt) {}
}
