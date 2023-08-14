import ComponentBase from "../../../00_base/script/common/ComponentBase";
import { Utils } from "../config/Utils";
import { HttpPath, WidgetEnum } from "../config/config";
import yiChuangJianJuLeBuItem from "../view/items/yiChuangJianJuLeBuItem";
import yiJiaRuJuLeBuItem from "../view/items/yiJiaRuJuLeBuItem";
import { ViewManager } from "../config/ViewManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class V_Club extends ComponentBase {

    @property(cc.Toggle)
    private yiJiaRu: cc.Toggle = null;

    @property(cc.Node)
    private yiJiaRuList: cc.Node = null;

    @property(cc.Node)
    private yiJiaRuItem: cc.Node = null;


    @property(cc.Toggle)
    private yiChuangJian: cc.Toggle = null;

    @property(cc.Node)
    private yiChuangJianList: cc.Node = null;

    @property(cc.Node)
    private yiChuangJianItem: cc.Node = null;


    protected start(): void {
        this.yiChuangJianList.active = false;
        this.onToggleBtnClick();
    }

    private onToggleBtnClick() {
        this.yiJiaRu.isChecked && this.queryJiaRuInfo();
        this.yiChuangJian.isChecked && this.queryYiChuangJian();
    }


    private async queryJiaRuInfo() {
        let res: any = await Utils.Post(HttpPath.clubListQuery, { current: 0, size: 20 });

        if (res.code != 200) {
            return;
        }

        let content = this.yiJiaRuList.getComponent(cc.ScrollView).content;
        content.removeAllChildren();

        let list = res.data as any[];
        if (list) {
            list.forEach((item: any) => {
                let itemNode = cc.instantiate(this.yiJiaRuItem);
                let script = itemNode.getComponent(yiJiaRuJuLeBuItem);
                itemNode.x = 0;
                itemNode.y = 0;
                itemNode.parent = content;
                script.run(item);
            });
        }

    }

    private async queryYiChuangJian() {
        let res: any = await Utils.Post(HttpPath.clubListQuery, { current: 0, size: 20 });

        if (res.code != 200) {
            return;
        }

        let content = this.yiChuangJianList.getComponent(cc.ScrollView).content;
        content.removeAllChildren();

        let list = res.data as any[];
        if (list) {
            list.forEach((item: any) => {
                let itemNode = cc.instantiate(this.yiChuangJianItem);
                let script = itemNode.getComponent(yiChuangJianJuLeBuItem);
                itemNode.x = 0;
                itemNode.y = 0;
                itemNode.parent = content;
                script.run(item);
            });
        }
    }

    private async add(e: cc.Event.EventTouch){
        console.log("add");
        ViewManager.Alert(WidgetEnum.AlertAddClub);
    }
}
