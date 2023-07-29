
import ComponentBase from "../../00_base/script/common/ComponentBase";
import { UserInfo } from "../../01_hall/script/config/UserInfo";
import { cmdClientEvent, cmdClientType } from "./config/cmdClient";
import { DeskInfo } from "./config/deskInfo";
import light from "./light";

const { ccclass, property } = cc._decorator;

@ccclass
export default class game extends ComponentBase {

    @property(cc.Node)
    card: cc.Node = null;

    @property(light)
    light: light = null;

    @property(cc.Node)
    alert: cc.Node = null;

    @property(cc.Node)
    deskbet: cc.Node = null;

    @property(cc.Node)
    deskinfo: cc.Node = null;

    @property(cc.Node)
    headItem: cc.Node = null;

    @property(cc.Node)
    myOperate: cc.Node = null;

    @property(cc.Node)
    seats: cc.Node[] = [];

    @property(cc.Node)
    choumas: cc.Node[] = [];


    protected start(): void {

    }

    protected onLoad(): void {
        UserInfo.cwebsocket.on(cmdClientEvent.CONNECT, this.svr_connect, this) // 只处理数据
    }

    private svr_connect(data: any) {
        if (data.requestType == cmdClientType.SERVERTOCLIENT) {
            DeskInfo.setLplayer(data.requestData.position, data.requestData)
        }
    }
}
