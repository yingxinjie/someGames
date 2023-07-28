// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import ComponentBase from "../../../00_base/script/common/ComponentBase";
import { ViewManager } from "../config/ViewManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends ComponentBase {
    @property(cc.Node)
    private backBtn: cc.Node = null;
    @property(cc.Node)
    private changeAccount: cc.Node = null;

    protected start(): void {
        this.TouchOn(this.backBtn, this.alertDestory);
        this.TouchOn(this.changeAccount, this.onChangeAccount);
    }

    private onChangeAccount() {
        ViewManager.Alert("exitAccount");
    }
}
