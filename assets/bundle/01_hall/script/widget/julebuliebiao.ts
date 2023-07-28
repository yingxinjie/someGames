import ComponentBase from "../../../00_base/script/common/ComponentBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class julebuliebiao extends ComponentBase {
    @property(cc.Node)
    private closeBtn: cc.Node = null;

    protected start(): void {
        this.TouchOn(this.closeBtn, this.alertDestory);
        
    }

    
}
