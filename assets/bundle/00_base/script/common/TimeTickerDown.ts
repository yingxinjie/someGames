import ComponentBase from "./ComponentBase";
const { ccclass, property } = cc._decorator;

@ccclass
export default class TimeTickerDown extends ComponentBase {

    private total: number = 60;

    down: boolean = false;

    private label: cc.Label | cc.RichText = null;

    run() {
        this.down = true;
        this.label = this.node.getComponent(cc.Label) || this.node.getComponent(cc.RichText);
        this.label.string = String(this.total);
        this.node.children[0].active = false;
        this.down = true;
        this.schedule(this.timeDown, 1)
    }

    private timeDown() {
        this.total -= 1;
        this.label.string = String(this.total);

        //取消倒计时
        if (this.total <= 0) {
            this.unschedule(this.timeDown);
            this.label.string = "发送验证码";
            this.node.children[0].active = true;
            this.down = false;
            this.total = 60;
        }
    }


}