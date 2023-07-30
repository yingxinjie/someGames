// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import ComponentBase from "../../00_base/script/common/ComponentBase";
import { DeskInfo } from "./config/deskInfo";

const { ccclass, property } = cc._decorator;

@ccclass
export default class head extends ComponentBase {

    @property(cc.Label)
    labName: cc.Label = null;

    @property(cc.Label)
    labAllscore: cc.Label = null;

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



    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    public async init(id: number) {
        let lpalyer = DeskInfo.getLplayer(id)
        if (!lpalyer) return
        this.labName.string = "" + lpalyer.name
        this.labAllscore.string = " " + lpalyer.bankRoll;
        await this.headSpr(lpalyer.headPic);
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
