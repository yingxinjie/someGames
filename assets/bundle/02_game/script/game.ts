
import { bundleLoader } from "../../../script/bundleLoader";
import ComponentBase from "../../00_base/script/common/ComponentBase";
import { UserInfo } from "../../01_hall/script/config/UserInfo";
import { ViewManager } from "../../01_hall/script/config/ViewManager";
import { ViewEnum, WidgetEnum } from "../../01_hall/script/config/config";
import { cmdClientEvent, cmdClientType } from "./config/cmdClient";
import { DeskInfo } from "./config/deskInfo";
import { DeskSeatStatus } from "./config/gameConst";
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
    /** 桌子坐标 */
    private curSeatP: [{ x: number, y: number }]


    protected start(): void {
        this.init()


        //消息事件
        UserInfo.cwebsocket.on(cmdClientEvent.BET, this.svr_bet, this)
        UserInfo.cwebsocket.on(cmdClientEvent.GAMESTART, this.svr_gamestart, this)
        UserInfo.cwebsocket.on(cmdClientEvent.GAMEOVER, this.svr_gameover, this)
        UserInfo.cwebsocket.on(cmdClientEvent.SITDOWNORSTANDUP, this.svr_downup, this)
        UserInfo.cwebsocket.on(cmdClientEvent.START, this.svr_start, this)
        UserInfo.cwebsocket.on(cmdClientEvent.BOARD, this.svr_board, this)
        UserInfo.cwebsocket.on(cmdClientEvent.BRING, this.svr_bring, this)
        UserInfo.cwebsocket.on(cmdClientEvent.INSURANCE, this.svr_insurance, this)
        UserInfo.cwebsocket.on(cmdClientEvent.EXIT, this.svr_exit, this)

    }

    protected onLoad(): void {
        UserInfo.cwebsocket.on(cmdClientEvent.CONNECT, this.svr_connect, this) // 只处理数据
        UserInfo.cwebsocket.on(cmdClientEvent.RECONNECT, this.svr_connect, this) // 只处理数据
    }
    //消息回调
    private svr_connect(data: any) {
        if (data.requestType == cmdClientType.SERVERTOCLIENT) {
            DeskInfo.setLplayer(data.requestData.position, data.requestData)
        }
    }

    private svr_bet(data: any) {
        console.log("svr_bet")
    }

    private svr_gamestart(data: any) {
        console.log("svr_gamestart")
    }

    private svr_gameover(data: any) {
        console.log("svr_gameover")
    }

    private svr_downup(data: any) {
        console.log("svr_bet")
        ViewManager.Alert(WidgetEnum.JoinDesk, bundleLoader.ENUM_BUNDLE.GAME)
    }

    private svr_start(data: any) {
        console.log("svr_bet")
    }

    private svr_board(data: any) {
        console.log("svr_board")
    }

    private svr_bring(data: any) {
        console.log("svr_bring")
    }

    private svr_insurance(data: any) {
        console.log("svr_insurance")
    }

    private svr_exit(data: any) {
        console.log("svr_exit")
    }


    //事件回调
    private event_sitdown(e) {
        console.log(e)
        let info = {
            playerId: UserInfo.testuuid,
            deskId: 9,
            position: 8,
            status: DeskSeatStatus.SITDOWN
        }
        UserInfo.cwebsocket.clientSend(cmdClientEvent.SITDOWNORSTANDUP, info)
    }


    //初始化
    init() {
        this.curSeatP = UserInfo.seatPJson[DeskInfo.seatLen]
        for (let i = 0; i < DeskInfo.seatLen; i++) {
            this.seats[i].x = this.curSeatP[i].x
            this.seats[i].y = this.curSeatP[i].y
            this.seats[i].active = true
            this.TouchOn(this.seats[i], this.event_sitdown, this)
        }
    }

    protected onDestroy(): void {
        UserInfo.cwebsocket.off(cmdClientEvent.CONNECT, this.svr_connect, this) // 只处理数据
    }





}
