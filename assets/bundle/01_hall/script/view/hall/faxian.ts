import ComponentBase from "../../../../00_base/script/common/ComponentBase";
import { HttpPath, ViewEnum } from "../../config/config";
import { UserInfo } from "../../config/UserInfo";
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
            uuid: UserInfo.uuid,
            token: UserInfo.token,
        }

        let res: any = await Utils.Post(HttpPath.queryPerson, info);

        if (res.code != 200) {
            return;
        }

        let back: any = res.data;
        UserInfo.uid = back.id;
        UserInfo.gender = back.sex;
        UserInfo.vipType = back.vipType;
        UserInfo.code = back.code;
        UserInfo.phoneAreaCode = back.phoneAreaCode;
        UserInfo.phoneNumber = back.phoneNumber;
        UserInfo.gold = Number(back.gold);
        UserInfo.diamond = Number(back.diamond);
        UserInfo.lastLoginTime = back.lastLoginTime;
        UserInfo.clubNum = Number(back.clubNum);
        UserInfo.joinClubNum = Number(back.joinClubNum);
    }


    private onClickCreateJuLeBu() {
        ViewManager.Alert("alertCreateJuLeBu");
    }

    private onClickJoinJuLeBu() {
        ViewManager.Alert("alertJiaRuJlb");
    }

}