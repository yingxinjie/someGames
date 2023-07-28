
import { bundleLoader } from "../../../../script/bundleLoader";
import ComponentBase from "../../../00_base/script/common/ComponentBase";
import { ViewManager } from "../config/ViewManager";
import { ViewEnum, WidgetEnum } from "../config/config";

const { ccclass, property } = cc._decorator;

@ccclass
export default class alertJiaRuJlb extends ComponentBase {
    @property(cc.Node)
    private closeBtn: cc.Node = null;
    @property(cc.Node)
    private jiaRuPaiJuBtn: cc.Node = null;

    @property(cc.Node)
    private jiaRuJuLeBuBtn: cc.Node = null;

    start() {
        this.TouchOn(this.closeBtn, this.alertDestory);
        this.TouchOn(this.jiaRuPaiJuBtn, this.onClickJiaRuPaiJu)
        this.TouchOn(this.jiaRuJuLeBuBtn, this.onClickJiaRuJuLeBu)
    }

    private onClickJiaRuPaiJu() {
        ViewManager.RemoveAlert(WidgetEnum.BottomToggle)
        ViewManager.Open(ViewEnum.Game,bundleLoader.ENUM_BUNDLE.GAME)
        this.node.destroy();
        ViewManager.Alert("alertInputYzm");
    }

    private onClickJiaRuJuLeBu() {
        this.node.destroy();
        ViewManager.Alert("julebuliebiao");
    }


}
