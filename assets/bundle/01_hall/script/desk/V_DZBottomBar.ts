const { ccclass, property } = cc._decorator;

@ccclass
export default class V_DZBottomBar extends cc.Component {

    @property(cc.Node)
    left: cc.Label = null;
    @property(cc.Node)
    cost: cc.Label = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
       
    }

    get leftNum():number{
        return Number(this.left.string);
    }

    set leftNum(num:number){
        this.left.string = num+"";
    }

    get costNum():number{
        return Number(this.cost.string);
    }

    set costNum(num:number){
        this.cost.string = num+"";
    }
}