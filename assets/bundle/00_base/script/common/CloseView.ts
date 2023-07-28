const { ccclass, property } = cc._decorator;

@ccclass
export default class CloseView extends cc.Component {

    @property(cc.Node)
    private WillCloseTartget: cc.Node = null;

    start() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchNode, this);
    }

    private onTouchNode() {
        this.WillCloseTartget.destroy();
    }
}
