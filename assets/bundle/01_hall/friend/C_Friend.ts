import { HttpPath } from "../script/config/config";
import { Utils } from "../script/config/Utils";

export class C_Friend {
    /**道具 */
    public static _instance: C_Friend = null;
    public static get instance(): C_Friend {
        if (!this._instance) {
            this._instance = new C_Friend();

        }
        return this._instance;
    }

    constructor() {

    }


    /**好友查询 好友查询关键字*/
    async sendFriendsSearch(keyWord: string) {
        let data = {
            keyWord: keyWord
        }
        let res: any = await Utils.Post(HttpPath.friendsSearch, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }

    }

    /**列表查询 好友申请ID*/
    async sendFriendsReject(id: number) {
        let data = {
            id: id
        }
        let res: any = await Utils.Post(HttpPath.friendsReject, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    /**列表查询 好友申请ID*/
    async sendFriendsPage(current: number) {
        let data = {
            current: current,
            size: 20
        }
        let res: any = await Utils.Post(HttpPath.friendsPage, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }

    }

    /**列表查询 好友申请ID*/
    async sendFriendsPageApply(current: number) {
        let data = {
            current: current,
            size: 20
        }
        let res: any = await Utils.Post(HttpPath.friendsPageApply, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    /**好友删除 被删除人用户ID*/
    async sendFriendsDelete(playerId: number) {
        let data = {
            playerId: playerId,
        }
        let res: any = await Utils.Post(HttpPath.friendsDelete, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }

    }

     /**好友申请通过 被删除人用户ID*/
     async sendFriendsApprove(id: number) {
        let data = {
            id: id
        }
        let res: any = await Utils.Post(HttpPath.friendsApprove, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }

    }

    /**好友申请 被删除人用户ID*/
    async sendFriendsApply(userId: number,applyRemark:string) {
        let data = {
            userId: userId,
            applyRemark:applyRemark
        }
        let res: any = await Utils.Post(HttpPath.friendsApply, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }

    }
}
