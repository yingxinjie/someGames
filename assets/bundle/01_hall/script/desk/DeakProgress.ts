const { ccclass, property } = cc._decorator;

@ccclass
export class DeakProgress extends cc.Component{

    @property(cc.Slider)
    private sliderEnd: cc.Slider = null;
    @property(cc.Slider)
    private sliderStart: cc.Slider = null;
    @property(cc.ProgressBar)
    private progressBar: cc.ProgressBar = null;

    private indexS: number;
    private indexE: number;
    private list: string[];
    private showNum: boolean;
    private progressWidth: number;
    init(indexS:number,indexE:number,list: string[], showNum: boolean = true) {
        this.indexS = indexS;
        this.indexE = indexE;
        this.list = list;
        this.showNum = showNum;
        this.progressWidth = this.sliderEnd.node.width;
    }

    private onEvent(){
        this.sliderEnd.node.on("slide", this.onStartSilder, this)
        if(this.sliderStart){
            this.sliderStart.node.on("slide", this.onEndSilder, this)
        }
    }
    
    private onStartSilder(e) {
        let progress = e.progress
        let node = this.sliderStart.node;
        let count:number = Math.round(progress*this.list.length);
        progress = count/this.list.length;
        if(this.progressBar){
            this.progressBar.progress = progress;
        }
    }

    private onEndSilder(e) {
        let progress = e.progress
        let node = this.sliderEnd.node;
        let count:number = Math.round(progress*this.list.length);
        progress = count/this.list.length;
        this.progressBar.progress = progress
    }

    private offEvent(){
        this.sliderEnd.node.off("slide", this.onStartSilder, this)
        if(this.sliderStart){
            this.sliderStart.node.off("slide", this.onEndSilder, this)
        }
    }

    bindList() {
        if (this.sliderStart) {
            let startProgress:number = this.indexS/this.list.length;
            this.progressBar.progress = startProgress;
        }
        let endProgress:number = this.indexE/(this.list.length - this.indexS);
        this.sliderEnd.getComponent(cc.ProgressBar).progress = endProgress;
        this.bindNum();
    }

    private labelArr: cc.Label[];
    bindNum() {
        if (!this.showNum) return;
        this.labelArr = [];
        for (let i = 0; i < this.list.length; i++) {
            let str: string = this.list[i];
            let lab: cc.Label = new cc.Label();
            lab.string = "" + str;
            if(this.sliderStart){
                this.sliderStart.node.addChild(lab.node);
            }else{
                this.sliderEnd.node.addChild(lab.node);
            }
            lab.node.x = i * this.oneWidth;
            lab.node.y = 40;
            this.labelArr.push(lab);
        }
    }

    private get oneWidth(): number {
        if (this.list && this.list.length > 1) {
            let width: number = Math.floor(this.progressWidth / (this.list.length - 1));
            return width;
        }
        return this.progressWidth;
    }
}

