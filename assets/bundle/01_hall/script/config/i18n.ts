import { LanguagesCfg } from "../../../../res/i18n/Languages";
import { UserInfo } from "./C_User";
import { Utils } from "./Utils";
import { EventManger } from "../../../00_base/script/common/EventManger";

const { ccclass, property } = cc._decorator;

@ccclass
export default class i18n extends cc.Component {
    static LanguageChange: string = "LanguageChange";


    @property
    private lanStr: string = "";

    private lanKey: string = "";

    protected start(): void {
        if (this.lanStr == "") {
            cc.error(`节点 ${Utils.FindPath(this.node)} 的多语言key为空`);
            return
        }

        EventManger.on(i18n.LanguageChange, this.onChangeLanguage, this);
        let cfg = LanguagesCfg[0];//解析中文,找key

        for (const key in cfg) {
            const element = cfg[key];
            if (element == this.lanStr) {
                this.lanKey = key;
            }
        }

        this.onChangeLanguage();
    }


    private onChangeLanguage() {
        let cfg = LanguagesCfg[UserInfo.language];
        if (this.node && this.node.getComponent(cc.Label)) {
            this.node.getComponent(cc.Label).string = cfg[this.lanKey];
        }
    }

}