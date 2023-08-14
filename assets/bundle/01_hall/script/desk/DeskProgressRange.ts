const { ccclass, property } = cc._decorator;

@ccclass
export class DeskProgressRange extends cc.Component {

    @property(cc.Sprite)
    private bg: cc.Sprite = null;
    @property(cc.Sprite)
    private gressStart: cc.Sprite = null;
    @property(cc.Sprite)
    private gressEnd: cc.Sprite = null;
    @property(cc.Sprite)
    private progressBar: cc.Sprite = null;
    @property(cc.Label)
    private num: cc.Label = null;
    @property(cc.Node)
    private point: cc.Node = null;

    private indexS: number;
    private indexE: number;
    private list: string[];
    private strArr: string[];
    private showPoint: boolean;
    private progressWidth: number;
    private pointRadius: number = 13;
    /**进度条初始位置（sliderStart存在时使用） */
    private progressSX: number;
    init(indexS: number, indexE: number, list: any[], strArr: string[] = null, showPoint: boolean = false) {
        this.indexS = indexS;
        this.indexE = indexE;
        this.list = list;
        this.strArr = strArr;
        this.showPoint = showPoint;
        this.progressWidth = this.progressBar.node.width;
        this.progressSX = this.bg.node.x;
        this.onEvent();
        this.bindList();
    }

    listChange(list: any[], strArr: string[] = null) {
        this.list = list;
        this.strArr = strArr;
        this.bindList();
    }

    onDisable(): void {
        this.offEvent();
    }

    private onEvent() {
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.touchStart, this);
        this.node.on(cc.Node.EventType.MOUSE_MOVE, this.touchMove, this);
        this.node.on(cc.Node.EventType.MOUSE_UP, this.touchUp, this);
    }

    private offEvent() {
        this.node.off(cc.Node.EventType.MOUSE_DOWN, this.touchStart, this);
        this.node.off(cc.Node.EventType.MOUSE_MOVE, this.touchMove, this);
        this.node.off(cc.Node.EventType.MOUSE_UP, this.touchUp, this);
    }

    private target: cc.Node
    private touchStart(e: cc.Event.EventMouse) {
        if(e.target.name == this.gressStart.node.name){
            this.target = this.gressStart.node;
        }
        if(e.target.name == this.gressEnd.node.name){
            this.target = this.gressEnd.node;
        }
    }

    private touchMove(e: cc.Event.EventMouse) {
        let pos: cc.Vec2 = e.getLocation();
        let localPos = this.node.convertToNodeSpaceAR(pos);
        if (this.target) {
            if (localPos.x < this.progressSX) {
                this.target.x = this.progressSX;
            } else if (localPos.x > this.progressSX + this.progressWidth) {
                this.target.x = this.progressSX + this.progressWidth;
            } else {
                this.target.x = localPos.x;
            }
            if(this.target == this.gressStart.node){
                if(this.gressStart.node.x>this.gressEnd.node.x){
                    this.gressStart.node.x = this.gressEnd.node.x;
                }
            }
            if(this.target == this.gressEnd.node){
                if(this.gressEnd.node.x<this.gressStart.node.x){
                    this.gressEnd.node.x = this.gressStart.node.x;
                }
            }
            this.progressBar.node.x = this.gressStart.node.x;
            this.progressBar.node.width = this.gressEnd.node.x - this.gressStart.node.x;
        }
    }

    private touchUp(e) {
        this.target = null;
        this.indexRound();
    }
    bindList() {

        this.bindNum();
        this.bindPoint();
    }

    private set progressBarX(num: number) {
        this.progressBar.node.x = num;
        let node = this.node.getChildByName("bar-img");
        if (!node) {
            return;
        }
        node.x = 0;
        node.anchorX = 0.5;
    }

    private numArr: cc.Node[];
    private bindNum() {
        if (!this.strArr) return;
        if (!this.numArr) {
            this.numArr = [];
        }
        let i = 0;
        for (i; i < this.strArr.length; i++) {
            let node: cc.Node;
            if (i < this.numArr.length) {
                node = this.numArr[i];
            } else {
                node = cc.instantiate(this.num.node);
                this.numArr.push(node);
            }
            let str: string = this.strArr[i];
            let lab: cc.Label = node.getComponent(cc.Label)
            lab.node.color = new cc.Color().fromHEX("#959595");
            lab.string = str;
            lab.fontSize = 20;
            lab.node.parent = this.bg.node;
            lab.node.x = i * this.oneWidth;
            lab.node.y = 40;
            lab.node.active = true;
        }
        for (i; i < this.numArr.length; i++) {
            let node: cc.Node = this.numArr[i];
            node.active = false;
        }
    }

    private pointArr: cc.Node[];
    private async bindPoint() {
        if (!this.showPoint) return;
        if (!this.pointArr) {
            this.pointArr = [];
        }
        let i = 0;
        for (i; i < this.list.length; i++) {
            let point: cc.Node;
            if (i < this.pointArr.length) {
                point = this.pointArr[i];
            } else {
                point = cc.instantiate(this.point);
                this.pointArr.push(point);
            }
            point.width = this.pointRadius * 2;
            point.height = this.pointRadius * 2;
            point.x = i * this.oneWidth;
            point.parent = this.bg.node;
            point.active = true;
        }
        for (i; i < this.pointArr.length; i++) {
            let node: cc.Node = this.pointArr[i];
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
        this.indexS = Math.round((this.gressStart.node.x-this.progressSX) / this.progressWidth * (this.list.length - 1));
        this.gressStart.node.x = this.indexS / (this.list.length - 1) * this.progressWidth+this.progressSX;
        this.indexE = Math.round((this.gressEnd.node.x-this.progressSX) / this.progressWidth * (this.list.length - 1));
        this.gressEnd.node.x = this.indexE / (this.list.length - 1) * this.progressWidth+this.progressSX;
        this.progressBar.node.x = this.gressStart.node.x;
        this.progressBar.node.width = this.gressEnd.node.x - this.gressStart.node.x;
    }

    /**选中列表 */
    get select():string{
        let arr = [];
        for(let i=0;i<this.list.length;i++){
            if(i>=this.indexS && i<=this.indexE){
                arr.push(this.list[i])
            }
        }
        let str = arr.join(",");
        return str;
    }
}

