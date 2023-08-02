import { HttpPath } from "../config/config";
import { Utils } from "../config/Utils";

export class C_Notify {
    public static _instance: C_Notify = null;
    public static get instance(): C_Notify {
        if (!this._instance) {
            this._instance = new C_Notify();

        }
        return this._instance;
    }

    constructor() {

    }

    notify: Notify;
    /**通知查询 消息通知ID*/
    async sendNotifyQuery(notifyId: number) {
        let data = {
            notifyId: notifyId
        }
        let res: any = await Utils.Post(HttpPath.notifyQuery, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        this.notify = res.data;
    }

    /**批量已读 消息通知ID*/
    async sendNotifyMarkRead(ids: number) {
        let data = {
            ids: ids
        }
        let res: any = await Utils.Post(HttpPath.notifyMarkRead, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    notifyArr:Notify[];
    /**列表查询 消息通知ID*/
    async sendNotifyList(current: number) {
        let data = {
            current: current,
            size: 20
        }
        let res: any = await Utils.Post(HttpPath.notifyList, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        this.notifyArr = res.data;
    }
}

export interface Notify {
    id: number;
    userId: number;
    msg: string;
    reading: boolean;
    createDateTime: string
}
