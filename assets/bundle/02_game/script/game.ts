
import { bundleLoader } from "../../../script/bundleLoader";
import ComponentBase from "../../00_base/script/common/ComponentBase";
import { UserInfo } from "../../01_hall/script/config/C_User";
import { ViewManager } from "../../01_hall/script/config/ViewManager";
import { ViewEnum, WidgetEnum } from "../../01_hall/script/config/config";
import { cmdClientEvent, cmdClientType } from "./config/cmdClient";
import { DeskInfo, S_GameStart } from "./config/deskInfo";
import { DeskMgr } from "./config/deskMgr";
import { DeskSeatStatus, PlayerInfoStatus } from "./config/gameConst";
import { NodeDZpool, POOLTYPE } from "./config/nodeDZpool";
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

    @property(cc.Node)
    bottoms: cc.Node[] = [];

    @property(cc.Node)
    choumasides: cc.Node[] = [];

    @property(cc.Node)
    mycards: cc.Node[] = [];

    private heads: { [trueSeat: number]: cc.Node } = {}

    /** 桌子坐标 */
    private curSeatP: [{ x: number, y: number }]

    private labdichi: cc.Label
    private chouma_di: cc.Label


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
        this.TouchOn(this.alert.children[2], this.evt_start, this) // 房主游戏开始

        for (let i = 0; i < this.bottoms.length; i++) {
            let btn = this.bottoms[i]
            this.TouchOn(btn, this.evt_bottom, this) // 游戏场景下方按钮事件
        }

        this.initprops()
        this.init()

    }

    protected onLoad(): void {
        UserInfo.cwebsocket.on(cmdClientEvent.CONNECT, this.svr_connect, this) // 只处理数据
        UserInfo.cwebsocket.on(cmdClientEvent.RECONNECT, this.svr_connect, this) // 只处理数据

        NodeDZpool.initCard()
        NodeDZpool.initCoin()
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
        this.card.active = false
        let _data: S_GameStart = data.requestData
        this.switchAlert(-1)

        DeskInfo.currRoundPlayerId = _data.curPlayerId
        DeskInfo.deskId = _data.deskId
        DeskInfo.pots = _data.playerPots
        DeskInfo.pots.forEach((pot, index) => {
            let pots = DeskMgr.addPots(pot)
            if (index == 0) {
                this.setDichi(pots)
            } else {
                this.setSidechi(pots, index)
            }
        });

        _data.seatPlayerList.forEach(dplayer => {
            DeskInfo.setDplayer(dplayer.position, dplayer)
            if (dplayer.playerId > 0) {
                let clientSeat: number = this.getSeatByHeadId(dplayer.position)
                this.setChoumaNum(0, clientSeat - 1)

                let head = this.heads[dplayer.position]
                head.getChildByName("sprTwoCard").active = false

                DeskMgr.TweenSendCard(head, () => {
                    if (dplayer.position == UserInfo.testuuid) {
                        let dplayer = DeskInfo.getMydplayer()
                        dplayer.handsCard.forEach((card, index) => {
                            this.setMyCard(index, card.value)
                        })
                    } else {
                        head.getChildByName("sprTwoCard").active = true
                    }
                }, this.node)
            }

        });


        //后续补齐发牌动画



    }


    private svr_gameover(data: any) {
        console.log("svr_gameover")
    }

    private svr_downup(data: any) {
        if (!data) return cc.error("数据错误")
        let _data = data.requestData
        if (_data.status == DeskSeatStatus.TEMPORARY) {
            if (UserInfo.testuuid == _data.playerId) {
                ViewManager.Alert(WidgetEnum.JoinDesk, bundleLoader.ENUM_BUNDLE.GAME)
                let clientSeat = this.getSeatByHeadId(_data.position)
                //DeskMgr.setconvertNum(DeskMgr.convert(_data.position))
                DeskMgr.setconvertNum(clientSeat)
                this.setHeadInfo(clientSeat, _data.playerId)
                //this.craeteHead(_data.position, _data.playerId)
                DeskMgr.TweenSeat(this.seats)
            } else {
                let clientSeat = this.getSeatByHeadId(_data.position)
                this.setHeadInfo(clientSeat, _data.playerId)
            }


            //数据处理
            let dplayer = DeskInfo.getDplayer(_data.position)
            dplayer.position = _data.position
            dplayer.status = PlayerInfoStatus.TEMPORARY
        } else if (_data.status == DeskSeatStatus.SITDOWN) {
            let clientSeat = this.getSeatByHeadId(_data.position)
            this.setHeadInfo(clientSeat, _data.playerId)
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
        // let seat = DeskMgr.convertobj[Number(name.slice(-1)) + 1]
        // let seat = Number(name.slice(-1)) + 1
        let seat = this.getHeadBySeat(Number(name.slice(-1)) + 1)
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


    private evt_start(e: cc.Event.EventTouch) {
        console.log("evt_start")
        if (UserInfo.testuuid == DeskInfo.createDeskPlayerId) {
            let info = {
                playerId: UserInfo.testuuid,
                deskId: 9
            }
            UserInfo.cwebsocket.clientSend(cmdClientEvent.START, info)
        }
    }

    private evt_bottom(e: cc.Event.EventTouch) {
        console.log("evt_bottom")
        let name = e.currentTarget.name
        switch (Number(name.slice(-1))) {
            case 0:

                break;
            case 1:

                break;
            case 2:

                break;
            case 3:

                break;
            case 4:
                ViewManager.Alert(WidgetEnum.GameSetting, bundleLoader.ENUM_BUNDLE.GAME)
                break;
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
            if (dplayer) {
                this.craeteHead(dplayer.position, dplayer.playerId)
            }
        }

        let Mylplayer = DeskInfo.getMylplayer()
        if (Mylplayer.position > 0) {
            DeskMgr.setconvertNum(Mylplayer.position)
            DeskInfo.readyPos = Mylplayer.position
            DeskMgr.initSeat(this.seats)
        }

        if (UserInfo.testuuid == DeskInfo.createDeskPlayerId) {
            this.switchAlert(2)
        }
        //  this.setMyCard(0, 30)
        setTimeout(() => {
            DeskMgr.TweenTurnCard(this.mycards[0])
        }, 1000);
      

    }

    initprops() {
        this.labdichi = this.deskbet.getChildByName("labdichi").getComponent(cc.Label)
        this.chouma_di = this.deskbet.getChildByName("chouma_di").getComponentInChildren(cc.Label)
    }




    async setMyCard(index: number, value: number) {
        this.mycards[index].getComponent(cc.Sprite).spriteFrame = await DeskMgr.convertPoker(value)
        this.mycards[index].active = true
    }

    setChoumaNum(Num: number, index: number,) {
        this.choumas[index].getComponentInChildren(cc.Label).string = "" + Num
        this.choumas[index].active = true
    }


    setDichi(dichiNum: number) {
        this.labdichi.string = "" + dichiNum
        this.chouma_di.string = "" + dichiNum
        this.chouma_di.node.active = true
        this.labdichi.node.active = true
    }

    setSidechi(sidechiNum: number, index) {
        this.choumasides[index - 1].active = true
        this.choumasides[index - 1].getChildByName("labside").getComponent(cc.Label).string = "" + sidechiNum
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
        _ts.init(id, seat, seat)
        _head.parent = seatNode
        _head.x = 0
        _head.y = 0
        this.heads[seat] = _head
    }


    setHeadInfo(seat: number, id: number) {
        let seatNode = this.seats[seat - 1]
        let _head = seatNode.children[0]
        let _ts = _head.getComponent(head)
        _ts.setHeadInfo(id)
    }



    // setElseHeadInfo(seat: number, id: number) {
    //     let convertSeat = DeskMgr.convertArr[seat - 1]
    //     let seatNode = this.seats[convertSeat - 1]
    //     let _head = cc.instantiate(this.headItem)
    //     let _ts = _head.getComponent(head)
    //     _ts.init(id, seat, convertSeat)
    //     _head.parent = seatNode
    //     _head.x = 0
    //     _head.y = 0
    // }


    getHeadBySeat(clientSeat: number) {
        let trueSeat = 0
        let seatNode = this.seats[clientSeat - 1]
        let _head = seatNode.children[0]
        let _ts = _head.getComponent(head)
        trueSeat = _ts.seat
        return trueSeat
    }

    getSeatByHeadId(trueSeat: number) {
        let clientSeat = 0
        let head = this.heads[trueSeat]
        clientSeat = Number(head.parent.name.slice(-1)) + 1
        return clientSeat
    }

    removeHead(trueSeat: number, id: number) {
        this.seats.forEach((seat, index) => {
            let _head = seat.children[0]
            if (_head) {
                let _ts = _head.getComponent(head)
                if (_ts.playerId == id) {
                    _ts.clearhead()
                    //_head.destroy()
                }
                _ts.convertseat = index + 1
            }
        });

        DeskInfo.clearDplayer(trueSeat)
    }

    //其他钩子函数

    private nowTime: number = 0

    private nowTimeInt: number = 0

    private nowClockLabel: cc.Label = null

    update(dt: number) {
        if (!DeskInfo.isStartGame) {
            return;
        }
        this.nowTime -= dt;
        let tmpInt = Math.floor(this.nowTime);
        if (tmpInt !== this.nowTimeInt && tmpInt >= 0) {
            this.nowTimeInt = tmpInt;
            if (this.nowClockLabel) {
                this.nowClockLabel.string = tmpInt.toString();
            }
        }
    }


    protected onDestroy(): void {
        UserInfo.cwebsocket.off(cmdClientEvent.CONNECT, this.svr_connect, this)
        UserInfo.cwebsocket.off(cmdClientEvent.BET, this.svr_bet, this)
        UserInfo.cwebsocket.off(cmdClientEvent.GAMESTART, this.svr_gamestart, this)
        UserInfo.cwebsocket.off(cmdClientEvent.GAMEOVER, this.svr_gameover, this)
        UserInfo.cwebsocket.off(cmdClientEvent.SITDOWNORSTANDUP, this.svr_downup, this)
        UserInfo.cwebsocket.off(cmdClientEvent.START, this.svr_start, this)
        UserInfo.cwebsocket.off(cmdClientEvent.BOARD, this.svr_board, this)
        UserInfo.cwebsocket.off(cmdClientEvent.BRING, this.svr_bring, this)
        UserInfo.cwebsocket.off(cmdClientEvent.INSURANCE, this.svr_insurance, this)
        UserInfo.cwebsocket.off(cmdClientEvent.EXIT, this.svr_exit, this)
    }





}
