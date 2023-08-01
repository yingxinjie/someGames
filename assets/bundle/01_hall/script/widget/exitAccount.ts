// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import ComponentBase from "../../../00_base/script/common/ComponentBase";
import { EventManger } from "../../../00_base/script/common/EventManger";
import { UserInfo } from "../config/C_User";
import { ViewManager } from "../config/ViewManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends ComponentBase {
    @property(cc.Node)
    private panel: cc.Node = null;

    @property(cc.Node)
    private exit: cc.Node = null;

    @property(cc.Node)
    private cancel: cc.Node = null;

    protected start(): void {
        cc.tween(this.panel)
            .to(0.3, { y: 260 })
            .call(() => {
                this.TouchOn(this.exit, this.onExit)
                this.TouchOn(this.cancel, this.onCancel)
            })
            .start();
    }


    private onExit() {
        UserInfo.clearLogin();
        ViewManager.RemoveAllView();
        ViewManager.Open("login")
    }


    private onCancel() {
        this.alertDestory();
    }
}
