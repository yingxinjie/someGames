
const { ccclass, property } = cc._decorator;

@ccclass
export default class toggle extends cc.Component {
    @property(cc.Node)
    viewLeft: cc.Node = null;

    @property(cc.Node)
    viewRight: cc.Node = null;

    @property(cc.Toggle)
    leftToggle: cc.Toggle = null;

    @property(cc.Toggle)
    rightToggle: cc.Toggle = null;


    
    protected start(): void {
        this.viewRight.active = false;
    }

    toggleContainerCall() {
        // console.log(this.leftToggle.isChecked, this.rightToggle.isChecked);
        this.viewLeft.active = this.leftToggle.isChecked;
        this.viewRight.active = this.rightToggle.isChecked;
    }
}
