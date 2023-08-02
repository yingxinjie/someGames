
import ComponentBase from "../../../00_base/script/common/ComponentBase";
import { ViewManager } from "../config/ViewManager";
import { HttpPath, ViewEnum, WidgetEnum } from "../config/config";
import { Utils } from "../config/Utils";
import { Tips } from "../../../00_base/script/uiutils/tips";

const { ccclass, property } = cc._decorator;

@ccclass
export default class alertCreateJuLeBu extends ComponentBase {
    @property(cc.Node)
    private closeBtn: cc.Node = null;

    @property(cc.Node)
    private createPaiJuBtn: cc.Node = null;

    @property(cc.Node)
    private createJuLeBuBtn: cc.Node = null;


    start() {
        this.TouchOn(this.closeBtn, this.alertDestory);
        this.TouchOn(this.createPaiJuBtn, this.onClickChuangJianPaiJu)
        this.TouchOn(this.createJuLeBuBtn, this.onClickChuangJianJuLeBu)
    }


    private onClickChuangJianPaiJu() {
        ViewManager.RemoveAlert(WidgetEnum.BottomToggle)
        ViewManager.Open(ViewEnum.Create)
        this.node.destroy();
    }

    private async onClickChuangJianJuLeBu() {
        let res: any = await Utils.Post(HttpPath.clubListQuery, { current: 1, size: 20 });

        if (res.code != 200) {
            return;
        }

        let list = res.data as any[];
        if (!list || list.length == 0) {
            ViewManager.Alert("chuangjianjulebu");
        } else {
            ViewManager.Alert("julebuzhuangtai");
        }

        this.node.destroy();
    }
}
