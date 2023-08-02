
import ComponentBase from "../../../00_base/script/common/ComponentBase";
import { Big } from "./big";
import { DzUtils } from "./dzUtils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class slider extends ComponentBase {

    @property(cc.Sprite)
    Background: cc.Sprite = null;

    @property(cc.Sprite)
    Handle: cc.Sprite = null;

    @property(cc.Label)
    Handlelab: cc.Label = null;

    private max: number

    private min: number

    public curValue: number

    private backcall: Function = null


    public _maxValue() {
        
        return this.max
    }

    public _minValue() {
        return this.min
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.node.on("slide", this.evt_slide, this)
        this.Handle.node.on(cc.Node.EventType.TOUCH_END, this.evt_touchend, this)
        this.Handle.node.on(cc.Node.EventType.TOUCH_CANCEL, this.evt_touchend, this)
        this.TouchOn(this.node.parent, this.evt_close, this)
    }

    init(max: number = 1, min: number = 0) {
        this.max = max
        this.min = min
        this.curValue = min
        this.node.getComponent(cc.Slider).progress = 0
        this.setHandlelab(this.min)
    }

    evt_slide(e: cc.Slider) {
        let _progress = e.progress
        let accAddNum = Big.accSubtr(this.max, this.min)
        let accDivNum = Big.accMul(accAddNum, _progress)
        this.curValue = Number(Big.accAdd(accDivNum, this.min).toFixed(1))
        if (_progress <= 0) {
            this.curValue = this.min
        }

        if (_progress >= 1) {
            this.curValue = this.max
        }
        this.backcall && this.backcall(this.curValue)
        this.setHandlelab(this.curValue)

    }

    evt_touchend(e) {
        this.backcall && this.backcall(this.curValue)
    }

    evt_close(e) {
        this.node.parent.active = false
        this.node.getComponent(cc.Slider).progress = 0
        this.setHandlelab(this.min)
    }


    async setHandleSprite(url: string) {
        this.Handle.spriteFrame = await DzUtils.loadPic(url) as cc.SpriteFrame
    }

    async setBackgroundSprite(url: string) {
        this.Background.spriteFrame = await DzUtils.loadPic(url) as cc.SpriteFrame
    }

    setHandlelab(lab: number | string) {
        if (this.Handlelab) {
            this.Handlelab.string = "" + lab
        }
    }

    setLabColor(value: string) {
        this.Handlelab.node.color = DzUtils.colorOfString(value)
    }

    setCallback(fuc: Function, obj?: any) {
        if (obj) {
            this.backcall = fuc.bind(obj)
        } else {
            this.backcall = fuc
        }
    }

    protected onDestroy(): void {
        this.backcall = null
        this.Handle.node.off(cc.Node.EventType.TOUCH_END, this.evt_touchend, this)
        this.Handle.node.off(cc.Node.EventType.TOUCH_CANCEL, this.evt_touchend, this)
    }

    // update (dt) {}
}
