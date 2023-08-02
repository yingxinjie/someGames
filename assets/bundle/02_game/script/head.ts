// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import ComponentBase from "../../00_base/script/common/ComponentBase";
import { DeskInfo } from "./config/deskInfo";
import timedown from "./timedown";

const { ccclass, property } = cc._decorator;

@ccclass
export default class head extends ComponentBase {

    @property(cc.Label)
    labName: cc.Label = null;

    @property(cc.Label)
    labAllscore: cc.Label = null;

    @property(cc.Label)
    labSeat: cc.Label = null;

    @property(cc.Sprite)
    pic: cc.Sprite = null;

    @property(cc.Sprite)
    sprStaus: cc.Sprite = null;

    @property(cc.Animation)
    animAllin: cc.Animation = null;

    @property(cc.Node)
    sprTwoCard: cc.Node = null;

    @property(cc.Node)
    sprTime: cc.Node = null;

    @property(cc.Node)
    top: cc.Node = null;

    @property(cc.Node)
    bottom: cc.Node = null;

    @property(cc.Node)
    Dicon: cc.Node = null;

    @property(cc.Node)
    cards: cc.Node[] = [];

    @property(timedown)
    timeDown:timedown = null


    playerId: number

    convertseat: number

    seat: number



    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    public async init(id: number, seat: number, coneverSeat?: number) {
        this.playerId = id
        this.seat = seat
        this.convertseat = coneverSeat ? coneverSeat : seat
        this.labSeat.string = "" + this.seat
        this.setHeadInfo(id)
    }


    public setHeadInfo(id: number) {
        let lpalyer = DeskInfo.getLplayer(id)
        if (!lpalyer) return
        this.playerId = id
        this.labName.string = "" + lpalyer.name
        this.labAllscore.string = " " + lpalyer.bankRoll;
        //  await this.headSpr(lpalyer.headPic);
        // this.node.active = this.playerId > 0
    }

    public setPlayTime(time:number){
        this.timeDown.playTime(time)
    }

    public setStopTime(){
        this.timeDown.stopTime()
    }

    public clearhead() {
        this.playerId = 0
        this.labName.string = "空位"
        this.labAllscore.string = " "
    }


    public setconvertSeat(seat: number) {
        this.convertseat = seat
    }


    headSpr(url) {
        return new Promise((resolve, reject) => {
            cc.loader.load(url, (err, texture) => {
                if (err != null) {
                    return cc.error("加载失败..", url)
                }
                let sprf = new cc.SpriteFrame(texture)
                resolve(sprf)
                this.pic.spriteFrame = sprf
            })
        })
    }

    // update (dt) {}
}
