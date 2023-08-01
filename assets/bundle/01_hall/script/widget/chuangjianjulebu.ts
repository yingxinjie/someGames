import ComponentBase from "../../../00_base/script/common/ComponentBase";
import { Tips } from "../../../00_base/script/uiutils/tips";
import { Utils } from "../config/Utils";
import { HttpPath } from "../config/config";

const { ccclass, property } = cc._decorator;

@ccclass
export default class chuangjianjulebu extends ComponentBase {
    @property(cc.Node)
    private closeBtn: cc.Node = null;

    @property(cc.EditBox)
    private juLeBuName: cc.EditBox = null;

    @property(cc.Node)
    private createBtn: cc.Node = null;

    @property(cc.Node)
    private logoBtn: cc.Node = null;

    private logoId: number = 0;

    protected start(): void {
        this.TouchOn(this.closeBtn, this.alertDestory);
        this.TouchOn(this.createBtn, this.onCreate)
        //显示logo的图标
    }

    private async onCreate() {
        cc.log("创建")
        if (this.juLeBuName.string == "") {
            Tips.Show("俱乐部名称不能为空!");
            return;
        }

        let info = {
            "name": this.juLeBuName.string,
            "iconPic": "1",
            "area": "2",
        }

        let res: any = await Utils.Post(HttpPath.clubCreate, info);
        if (res.code !== 200) {
            return;
        }

        this.alertDestory();
    }





}
