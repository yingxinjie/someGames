// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import ComponentBase from "../../../00_base/script/common/ComponentBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class alertInputYzm extends ComponentBase {
    @property(cc.Node)
    private closeBtn: cc.Node = null;


    start() {
        this.TouchOn(this.closeBtn, this.alertDestory);
    }

    private onClickCloseBtn() {
        this.node.destroy();
    }

}
