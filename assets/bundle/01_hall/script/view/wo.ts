import ComponentBase from "../../../00_base/script/common/ComponentBase";
import { ViewEnum, WidgetEnum } from "../config/config";
import { ViewManager } from "../config/ViewManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends ComponentBase {

    @property(cc.Node)
    private setting: cc.Node = null;


    start() {
        this.TouchOn(this.setting, this.openSetting);
    }

    private openSetting() {
        ViewManager.Alert("setting");
    }
}
