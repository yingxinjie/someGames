import { HttpPath } from "../config/config";
import { Utils } from "../config/Utils";
import { D_Prop } from "./D_Prop";
export class C_Prop {
    /**道具 */
    public static _instance: C_Prop = null;
    public static get instance(): C_Prop {
        if (!this._instance) {
            this._instance = new C_Prop();

        }
        return this._instance;
    }

    constructor() {

    }

    prop:D_Prop;
    /**查询道具详情 道具ID*/
    async sendPropsQuery(id: number) {
        let data = {
            id: id
        }
        let res: any = await Utils.Post(HttpPath.propsQuery, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        this.prop = new D_Prop();
        this.prop.init(
            res.data.id,
            res.data.name,
            res.data.description,
            res.data.propsType,
            res.data.propsTypeDesc,
            res.data.gold,
            res.data.giftGold,
            res.data.diamond
        )
    }

    propArr:D_Prop[];
    /**查询道具详情 当前页数*/
    async sendPropsList(current: number) {
        let data = {
            current: current,
            size:20
        }
        let res: any = await Utils.Post(HttpPath.propsList, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        this.propArr = [];
        if(res.data && res.data.length>0){
            for(let i=0;i<res.data.length;i++){
                let temp = res.data[i]
                let prop = new D_Prop();
                prop.init(
                    res.data.id,
                    res.data.name,
                    res.data.description,
                    res.data.propsType,
                    res.data.propsTypeDesc,
                    res.data.gold,
                    res.data.giftGold,
                    res.data.diamond
                )
                this.propArr.push(prop);
            }
            
        }
       
    }
}
