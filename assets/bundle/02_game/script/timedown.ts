// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import ComponentBase from "../../00_base/script/common/ComponentBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class timedown extends ComponentBase {

    @property(cc.Node)
    private animNode: cc.Node = null;

    @property(cc.Animation)
    private animTime: cc.Animation = null;

    @property(cc.Label)
    private labTime: cc.Label = null;


    private isPlay: boolean = false

    private maxTime: number = 0

    private percentTime: number = 0

    private timeSprite: cc.Sprite = null

    protected start(): void {


    }

    playTime(time: number) {
        this.maxTime = this.nowTime = time
        this.labTime.string = "" + time
        this.timeSprite = this.node.getComponent(cc.Sprite)
        this.timeSprite.fillStart = 0.25
        this.timeSprite.fillRange = 1
        this.animNode.angle = 0
        this.animTime.play()
        this.node.active = true
        this.isPlay = true
    }


    stopTime() {
        this.isPlay = false
        this.node.active = false
        this.animTime.stop()
    }
  
    private nowTime: number = 0



    update(dt: number) {
        if (!this.isPlay) {
            return;
        }

        this.nowTime -= dt;
        this.percentTime = this.nowTime / this.maxTime

        if (this.nowTime < 0) this.stopTime()

        if (this.percentTime >= 0) {
            this.timeSprite.fillRange = this.percentTime
            this.animNode.angle = this.percentTime * 360 - 360
        }

        let tmpInt = Math.floor(this.nowTime);
        if (tmpInt >= 0) {
            if (this.labTime) {
                this.labTime.string = tmpInt.toString();
            }
        }

    }

}
