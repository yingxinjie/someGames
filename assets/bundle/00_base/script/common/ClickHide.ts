// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    private WillHideTartget: cc.Node = null;

    start() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchNode, this);
    }

    private onTouchNode() {
        this.WillHideTartget.active = false;
    }
}
