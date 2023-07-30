
import { bundleLoader } from "../../../script/bundleLoader";
import ComponentBase from "../../00_base/script/common/ComponentBase";
import { UserInfo } from "../../01_hall/script/config/UserInfo";
import { ViewManager } from "../../01_hall/script/config/ViewManager";
import { ViewEnum, WidgetEnum } from "../../01_hall/script/config/config";
import { cmdClientEvent, cmdClientType } from "./config/cmdClient";
import { DeskInfo } from "./config/deskInfo";
import { DeskMgr } from "./config/deskMgr";
import { DeskSeatStatus, PlayerInfoStatus } from "./config/gameConst";
import head from "./head";
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

    private headArr: { [trueseat: number]: head } = {}


    /** 桌子坐标 */
    private curSeatP: [{ x: number, y: number }]


    protected start(): void {


        //消息回调
        UserInfo.cwebsocket.on(cmdClientEvent.BET, this.svr_bet, this)
        UserInfo.cwebsocket.on(cmdClientEvent.GAMESTART, this.svr_gamestart, this)
        UserInfo.cwebsocket.on(cmdClientEvent.GAMEOVER, this.svr_gameover, this)
        UserInfo.cwebsocket.on(cmdClientEvent.SITDOWNORSTANDUP, this.svr_downup, this)
        UserInfo.cwebsocket.on(cmdClientEvent.START, this.svr_start, this)
        UserInfo.cwebsocket.on(cmdClientEvent.BOARD, this.svr_board, this)
        UserInfo.cwebsocket.on(cmdClientEvent.BRING, this.svr_bring, this)
        UserInfo.cwebsocket.on(cmdClientEvent.INSURANCE, this.svr_insurance, this)
        UserInfo.cwebsocket.on(cmdClientEvent.EXIT, this.svr_exit, this)

        //事件回调
        this.TouchOn(this.alert.children[2], this.evt_alert, this)

        this.init()

    }

    protected onLoad(): void {
        UserInfo.cwebsocket.on(cmdClientEvent.CONNECT, this.svr_connect, this) // 只处理数据
        UserInfo.cwebsocket.on(cmdClientEvent.RECONNECT, this.svr_connect, this) // 只处理数据
    }
    //消息回调
    private svr_connect(data: any) {
        if (data.requestType == cmdClientType.SERVERTOCLIENT) {
            DeskInfo.setLplayer(data.requestData.id, data.requestData)
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
        if (!data) return cc.error("数据错误")
        let _data = data.requestData
        if (_data.status == DeskSeatStatus.TEMPORARY) {
            if (UserInfo.testuuid == _data.playerId) {
                ViewManager.Alert(WidgetEnum.JoinDesk, bundleLoader.ENUM_BUNDLE.GAME)
                DeskMgr.setconvertNum(_data.position)
                this.craeteHead(_data.position, _data.playerId)
                DeskMgr.TweenSeat(this.seats)
            } else {
                this.craeteElseHead(_data.position, _data.playerId)
            }


            //数据处理
            let dplayer = DeskInfo.getDplayer(_data.position)
            dplayer.position = _data.position
            dplayer.status = PlayerInfoStatus.TEMPORARY
        } else if (_data.status == DeskSeatStatus.SITDOWN) {

        } else {
            this.removeHead(_data.position, _data.playerId)
        }
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
    private evt_sitdown(e: cc.Event.EventTouch) {
        let name = e.currentTarget.name
        let seat = Number(name.slice(-1)) + 1
        DeskInfo.readyPos = seat
        let info = {
            playerId: UserInfo.testuuid,
            deskId: 9,
            position: DeskInfo.readyPos,
            status: DeskSeatStatus.TEMPORARY
        }
        UserInfo.cwebsocket.clientSend(cmdClientEvent.SITDOWNORSTANDUP, info)
        //console.log(e)

    }


    private evt_alert(e: cc.Event.EventTouch) {
        if (e.currentTarget.name == "alertStart") {

        }
    }


    //初始化
    init() {
        this.curSeatP = UserInfo.seatPJson[DeskInfo.seatLen]
        for (let i = 0; i < DeskInfo.seatLen; i++) {
            this.seats[i].x = this.curSeatP[i].x
            this.seats[i].y = this.curSeatP[i].y
            this.seats[i].active = true
            this.TouchOn(this.seats[i], this.evt_sitdown, this)
            let dplayer = DeskInfo.getDplayer(i + 1)
            if (dplayer && dplayer.playerId != 0 && dplayer.position == (i + 1)) {
                this.craeteHead(dplayer.position, dplayer.playerId)
            }
        }

        if (UserInfo.testuuid == DeskInfo.createDeskPlayerId) {
            this.switchAlert(2)
        }

    }


    switchAlert(index) {
        this.alert.children.forEach((child, _index) => {
            child.active = index == _index
        });
    }


    craeteHead(seat: number, id: number) {
        let seatNode = this.seats[seat - 1]
        let _head = cc.instantiate(this.headItem)
        let _ts = _head.getComponent(head)
        _ts.init(id, seat)
        _head.parent = seatNode
        _head.x = 0
        _head.y = 0
    }



    craeteElseHead(seat: number, id: number) {
        let convertSeat = DeskMgr.convertArr[seat - 1]
        let seatNode = this.seats[convertSeat - 1]
        let _head = cc.instantiate(this.headItem)
        let _ts = _head.getComponent(head)
        _ts.init(id, seat, convertSeat)
        _head.parent = seatNode
        _head.x = 0
        _head.y = 0
    }




    removeHead(seat: number, id: number) {
        this.seats.forEach((seat, index) => {
            let _head = seat.children[0]
            if (_head) {
                let _ts = _head.getComponent(head)
                if (_ts.playerId == id) {
                    _head.destroy()
                } else {
                    _ts.convertseat = index + 1
                }
            }
        });
        DeskInfo.clearDplayer(seat)
    }


    protected onDestroy(): void {
        UserInfo.cwebsocket.off(cmdClientEvent.CONNECT, this.svr_connect, this) // 只处理数据
    }





}
