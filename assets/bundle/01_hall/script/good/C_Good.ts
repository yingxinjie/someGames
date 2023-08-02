import { HttpPath } from "../config/config";
import { Utils } from "../config/Utils";
import { D_Good } from "./D_Good";

export class C_Good {
    /**道具 */
    public static _instance: C_Good = null;
    public static get instance(): C_Good {
        if (!this._instance) {
            this._instance = new C_Good();

        }
        return this._instance;
    }

    constructor() {

    }

    good:D_Good;
    /**列表查询 消息通知ID*/
    async sendGoodsQuery(id: number) {
        let data = {
            id: id
        }
        let res: any = await Utils.Post(HttpPath.goodsQuery, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        this.good = new D_Good();
        this.good.init(
            res.data.id,
            res.data.name,
            res.data.diamond,
            res.data.price
        )
    }

    goodArr:D_Good[];
    /**列表查询 消息通知ID*/
    async sendGoodsList(current: number) {
        let data = {
            current: current,
            size:20
        }
        let res: any = await Utils.Post(HttpPath.goodsList, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        this.goodArr = [];
        if(res.data && res.data.length>0){
            for(let i=0;i<res.data.length;i++){
                let temp = res.data[i];
                let good = new D_Good();
                good.init(
                    temp.id,
                    temp.name,
                    temp.diamond,
                    temp.price
                )
                this.goodArr.push(good);
            } 
        }
    }
}
