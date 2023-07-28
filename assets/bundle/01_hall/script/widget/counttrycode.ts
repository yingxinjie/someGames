import { EventManger } from "../../../00_base/script/common/EventManger";
import ComponentBase from "../../../00_base/script/common/ComponentBase";
import { EventName } from "../config/config";
import { CountryCodeData } from "../../../00_base/script/common/CountryCode";

const { ccclass, property } = cc._decorator;

@ccclass
export default class countrycode extends ComponentBase {

    @property(cc.Node)
    private maskNode: cc.Node = null;
    @property(cc.Node)
    private itemNode: cc.Node = null;
    @property(cc.Node)
    private itemContent: cc.Node = null


    protected start(): void {
        this.TouchOn(this.maskNode, this.closeView);

        this.itemContent.removeAllChildren();
        let list = CountryCodeData;
        list.forEach((ele: { id: number, code: string, zh: string, en: string }, idx: number) => {
            let item = cc.instantiate(this.itemNode);
            item.name = idx + "";
            item.active = true;
            item.x = 0;
            this.itemContent.addChild(item);
            item.on(cc.Node.EventType.TOUCH_END, this.selectCountry, this);
            item.children[0].getComponent(cc.Label).string = "  " + ele.code + " - " + ele.zh;
        });
    }

    private closeView() {
        this.node.destroy();
        this.maskNode.off(cc.Node.EventType.TOUCH_START, this.closeView, this);
    }


    private selectCountry(evt: TouchEvent) {
        if (!evt) {
            cc.error("事件不存在")
            return;
        }

        let node = evt.currentTarget as unknown as cc.Node;
        console.log(node.name);
        EventManger.emit(EventName.SelectCountryCode, node.name);
        this.closeView();
    }

}
