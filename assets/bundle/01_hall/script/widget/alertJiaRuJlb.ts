
import { bundleLoader } from "../../../../script/bundleLoader";
import ComponentBase from "../../../00_base/script/common/ComponentBase";
import { cmdClientEvent, cmdClientType } from "../../../02_game/script/config/cmdClient";
import { DeskInfo } from "../../../02_game/script/config/deskInfo";
import { UserInfo } from "../config/UserInfo";
import { ViewManager } from "../config/ViewManager";
import { ViewEnum, WidgetEnum } from "../config/config";
import { cwebsocket } from "../config/cwebsocket";

const { ccclass, property } = cc._decorator;

@ccclass
export default class alertJiaRuJlb extends ComponentBase {
    @property(cc.Node)
    private closeBtn: cc.Node = null;
    @property(cc.Node)
    private jiaRuPaiJuBtn: cc.Node = null;

    @property(cc.Node)
    private jiaRuJuLeBuBtn: cc.Node = null;

    start() {
        this.TouchOn(this.closeBtn, this.alertDestory);
        this.TouchOn(this.jiaRuPaiJuBtn, this.onClickJiaRuPaiJu)
        this.TouchOn(this.jiaRuJuLeBuBtn, this.onClickJiaRuJuLeBu)
        UserInfo.cwebsocket.on(cmdClientEvent.CONNECT, this.svr_connect, this)
    }


    private svr_connect(data: any) {
        if (data.requestType == cmdClientType.SERVERRESPONSE) {
            DeskInfo.setDeskInfo(data.requestData)
            ViewManager.RemoveAlert(WidgetEnum.BottomToggle)
            ViewManager.Open(ViewEnum.Game, bundleLoader.ENUM_BUNDLE.GAME)
            this.node.destroy();
        } else {
            DeskInfo.setLplayer(data.requestData.id, data.requestData)
        }
    }

    protected onLoad(): void {
        UserInfo.cwebsocket = new cwebsocket("ws://192.168.31.188:4030/channel", 1)
    }

    private onClickJiaRuPaiJu() {
        UserInfo.cwebsocket.clientSend(cmdClientEvent.CONNECT, { playerToekn: UserInfo.testToken, deskId: 9 })
        //  ViewManager.Alert("alertInputYzm");
    }

    private onClickJiaRuJuLeBu() {
        this.node.destroy();
        ViewManager.Alert("julebuliebiao");
    }

    protected onDestroy(): void {
        UserInfo.cwebsocket.off(cmdClientEvent.CONNECT, this.svr_connect, this)
    }




}
