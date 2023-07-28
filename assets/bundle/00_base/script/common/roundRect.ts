/**
 * 需要在node节点上添加graphics节点
 */
const { ccclass, property, executeInEditMode } = cc._decorator;

@ccclass
@executeInEditMode
export default class roundRect extends cc.Component {

    @property()
    radius: number = 0;

    grap: cc.Graphics = null;

    start() {
        this.grap = this.node.getComponent(cc.Graphics);
        if (this.grap == null) this.grap = this.node.addComponent(cc.Graphics);
        this.grap.roundRect(-this.node.width / 2, -this.node.height / 2, this.node.width, this.node.height, this.radius);
        this.grap.fill();
    }

}
