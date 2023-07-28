
const { ccclass, property } = cc._decorator;

@ccclass
export default class open extends cc.Component {

    start() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.openGame, this);
    }

    openGame() {
        console.log("点击了按钮", this.node.name);
        cc.assetManager.loadBundle(this.node.name, (err: Error, bundle: cc.AssetManager.Bundle) => {
            cc.director.loadScene(this.node.name);
        });
    }


}
