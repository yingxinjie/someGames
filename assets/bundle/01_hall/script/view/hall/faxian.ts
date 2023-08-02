import ComponentBase from "../../../../00_base/script/common/ComponentBase";
import { HttpPath, ViewEnum } from "../../config/config";
import { C_User } from "../../config/C_User";
import { Utils } from "../../config/Utils";
import { ViewManager } from "../../config/ViewManager";
import open from "../../open";

const { ccclass, property } = cc._decorator;

@ccclass
export default class faxian extends ComponentBase {
    @property(cc.ScrollView)
    private paiJuList: cc.ScrollView = null;
    @property(cc.Node)
    private createBtn: cc.Node = null;

    @property(cc.Node)
    private joinBtn: cc.Node = null;



    protected start(): void {
        // this.paiJuList.content.removeAllChildren();
        this.TouchOn(this.createBtn, this.onClickCreateJuLeBu)
        this.TouchOn(this.joinBtn, this.onClickJoinJuLeBu)


        //插入查询个人信息的数据

        this.queryPerson();
    }


    private async queryPerson() {
        let info: any = {
            uuid: C_User.ins.uid,
            token: C_User.ins.token,
        }

        let res: any = await Utils.Post(HttpPath.userQuery, info);

        if (res.code != 200) {
            return;
        }

        let back: any = res.data;
        C_User.ins.uid = back.id;
        C_User.ins.me.sex = back.sex;
        C_User.ins.me.vipType = back.vipType;
        C_User.ins.me.code = back.code;
        C_User.ins.me.phoneAreaCode = back.phoneAreaCode;
        C_User.ins.me.phoneNumber = back.phoneNumber;
        C_User.ins.me.gold = back.gold;
        C_User.ins.me.diamond = back.diamond;
        C_User.ins.me.lastLoginTime = back.lastLoginTime;
        C_User.ins.me.clubNum = back.clubNum;
        C_User.ins.me.joinClubNum = back.joinClubNum;
    }


    private onClickCreateJuLeBu() {
        ViewManager.Alert("alertCreateJuLeBu");
    }

    private onClickJoinJuLeBu() {
        ViewManager.Alert("alertJiaRuJlb");
    }

}