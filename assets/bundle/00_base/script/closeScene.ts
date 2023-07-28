import ComponentBase from "./common/ComponentBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class closeScene extends ComponentBase {
    start() {
        this.TouchOn(this.node, this.goToHall);
    }

    goToHall() {
        cc.director.loadScene("hall");
    }
}
