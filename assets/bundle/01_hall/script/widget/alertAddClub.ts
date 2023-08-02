
import { bundleLoader } from "../../../../script/bundleLoader";
import ComponentBase from "../../../00_base/script/common/ComponentBase";
import { cmdClientEvent, cmdClientType } from "../../../02_game/script/config/cmdClient";
import { DeskInfo } from "../../../02_game/script/config/deskInfo";
import { ViewManager } from "../config/ViewManager";
import { HttpPath, ViewEnum, WidgetEnum } from "../config/config";
import { cwebsocket } from "../config/cwebsocket";
import { Utils } from "../config/Utils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class alertAddClub extends ComponentBase {
    @property(cc.Node)
    private closeBtn: cc.Node = null;
    @property(cc.Node)
    private createBtn: cc.Node = null;
    @property(cc.Node)
    private joinBtn: cc.Node = null;

    start() {
        this.TouchOn(this.closeBtn, this.alertDestory);
        this.TouchOn(this.createBtn, this.onClickCreate)
        this.TouchOn(this.joinBtn, this.onClickJoin)
    }

    private async onClickCreate() {
        let res: any = await Utils.Post(HttpPath.clubListQuery, { current: 1, size: 20 });

        if (res.code != 200) {
            return;
        }

        let list = res.data as any[];
        if (list.length == 0) {
            ViewManager.Alert("chuangjianjulebu");
        } else {
            ViewManager.Alert("julebuzhuangtai");
        }

        this.node.destroy();
    }

    private async onClickJoin() {
        
    }

}
