import { PropsType, UnionStatus, UnionType } from "../config/config";

export class D_Prop {
    /**id */
    id:number;
    /**道具名称 */
    name:string;
    /**道具描述 */
    description:string;
    /**道具类型,(enums),PROPS=道具,VIP=会员 */
    propsType:PropsType
    /**道具类型描述 */
    propsTypeDesc:string;
    /**获得金币或天数 */
    gold:number;
    /**赠送金币或天数 */
    giftGold:number;
    /**道具钻石数 */
    diamond:number;

    constructor() {

    }

    init(id:number,
         name: string,
         description: string,
         propsType: PropsType,
         propsTypeDesc: string,
         gold: number,
         giftGold: number,
         diamond: number) {
        this.id= id;
        this.name= name;
        this.description= description;
        this.propsType= propsType;
        this.propsTypeDesc= propsTypeDesc;
        this.gold= gold;
        this.giftGold= giftGold;
        this.diamond= diamond;
    }
}
