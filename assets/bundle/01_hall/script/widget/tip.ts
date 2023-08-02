import ComponentBase from "../../../00_base/script/common/ComponentBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class tip extends ComponentBase {
    @property(cc.Node)
    private closeBtn: cc.Node = null;
    @property(cc.Label)
    private txt: cc.Label = null;

    start() {
        this.TouchOn(this.closeBtn, this.alertDestory);
        this._yesCb && this._yesCb();
    }

    private _yesCb: Function;
    init(str:string,yesCb?: () => void){
        this.txt.string = str;
        this._yesCb = yesCb;
    }
}
