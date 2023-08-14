import { Message } from "../config/Message";
import { Utils } from "../config/Utils";
import { C_Hall } from "../hall/C_Hall";

const { ccclass, property } = cc._decorator;

@ccclass
export class DeskProgress extends cc.Component {

    @property(cc.Sprite)
    private bg: cc.Sprite = null;
    @property(cc.Slider)
    private sliderEnd: cc.Slider = null;
    @property(cc.ProgressBar)
    private progressBar: cc.ProgressBar = null;
    @property(cc.Label)
    private num: cc.Label = null;
    @property(cc.Node)
    private point: cc.Node = null;

    private index: number;
    private list: string[];
    private strArr: string[];
    private showPoint: boolean;
    private progressWidth: number;
    private pointRadius: number = 13;
    /**进度条初始位置（sliderStart存在时使用） */
    private progressSX: number;
    init(index: number, list: any[], strArr: string[] = null, showPoint: boolean = false) {
        this.index = index;
        this.list = list;
        this.strArr = strArr;
        this.showPoint = showPoint;
        this.progressWidth = this.sliderEnd.node.width;
        this.progressSX = this.sliderEnd.node.x;
        this.onEvent();
        this.bindList();
    }

    listChange(list: any[], strArr: string[] = null){
        this.list = list;
        this.strArr = strArr;
        this.bindList();
    }

    onDisable(): void {
        this.offEvent();
    }

    private onEvent() {
        if (this.sliderEnd) {
            this.sliderEnd.node.on("slide", this.onEndSilder, this);
            this.sliderEnd.handle.node.on(cc.Node.EventType.MOUSE_UP, this.touch_end, this);
            // this.sliderEnd.handle.node.on(cc.Node.EventType.MOUSE_LEAVE, this.touch_end, this);
        } 
    }

    private offEvent() {
        if (this.sliderEnd) {
            this.sliderEnd.node.off("slide", this.onEndSilder, this)
            this.sliderEnd.handle.node.off(cc.Node.EventType.MOUSE_UP, this.touch_end, this);
            // this.sliderEnd.handle.node.off(cc.Node.EventType.MOUSE_LEAVE, this.touch_end, this);
        }
    }

    private onEndSilder(e) {
        let progress = e.progress;
        if (this.progressBar) {
            this.progressBar.progress = progress;
        }
    }

    private touch_end(e){
        this.indexRound();
        C_Hall.evt.emit(Message.createDZBetChange,this.name);
    }

    bindList() {
        if(this.index>this.list.length-1){
            this.index = this.list.length-1;
        }
        let endProgress: number = this.index / (this.list.length -1);
        this.sliderEnd.progress = endProgress;
        if (this.progressBar) {
            let progress:number = this.index/(this.list.length-1);
            this.progressBarX = this.progressSX +  progress * this.progressWidth;
            
            this.progressBar.node.width = (1 - progress) * this.progressWidth;
            this.progressBar.totalLength = this.progressBar.node.width;
            progress = this.index/(this.list.length-1);
            this.progressBar.progress = progress;
        }
        this.bindNum();
        this.bindPoint();
    }

    private set progressBarX(num:number){
        this.progressBar.node.x = num;
        let node = this.node.getChildByName("bar-img");
        if(!node){
            return;
        }
        node.x=0;
        node.anchorX = 0.5;
    }

    private numArr:cc.Node[];
    private bindNum() {
        if (!this.strArr) return;
        if(!this.numArr){
            this.numArr = [];
        }
        let i = 0;
        for (i; i < this.strArr.length; i++) {
            let node:cc.Node;
            if(i<this.numArr.length){
                node = this.numArr[i];
            }else{
                node = cc.instantiate(this.num.node);
                this.numArr.push(node);
            }
            let str: string = this.strArr[i];
            let lab: cc.Label = node.getComponent(cc.Label)
            lab.node.color = new cc.Color().fromHEX("#959595");
            lab.string = str;
            lab.fontSize = 20;
            lab.node.parent = this.node;
            lab.node.x = i * this.oneWidth - this.progressWidth/2;
            lab.node.y = 10;
            lab.node.active = true;
        }
        for(i;i<this.numArr.length;i++){
            let node:cc.Node = this.numArr[i];
            node.active = false;
        }
    }

    private pointArr:cc.Node[];
    private async bindPoint() {
        if (!this.showPoint) return;
        if(!this.pointArr){
            this.pointArr = [];
        }
        let i = 0;
        for (i; i < this.list.length; i++) {
            let point:cc.Node;
            if(i<this.pointArr.length){
                point = this.pointArr[i];
            }else{
                point = cc.instantiate(this.point);
                this.pointArr.push(point);
            }
            point.width = this.pointRadius * 2;
            point.height = this.pointRadius * 2;
            point.x = i * this.oneWidth - this.progressWidth/2;
            point.parent = this.bg.node;
            point.active = true;
        }
        for(i;i<this.pointArr.length;i++){
            let node:cc.Node = this.pointArr[i];
            node.active = false;
        }
    }

    private get oneWidth(): number {
        if (this.list && this.list.length > 1) {
            let width: number = Math.floor(this.progressWidth / (this.list.length - 1));
            return width;
        }
        return this.progressWidth;
    }

    /**进度取整四舍五入 */
    indexRound() {
        if (this.sliderEnd) {
            this.index = Math.round(this.sliderEnd.progress * (this.list.length-1));
            let progress:number = this.index/(this.list.length-1);
            this.sliderEnd.progress = progress;
        }
        if (this.progressBar) {
            let progress = this.index/(this.list.length-1);
            this.progressBar.progress = progress;
        }
    }

    /**选中列表 */
    get select():any{
        return this.list[this.index];
    }
}

