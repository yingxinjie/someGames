import { PropsType } from "../config/config";

export class D_Good {
    /**id */
    id: number;
    /**商品名称 */
    name: string;
    /**商品钻石数 */
    diamond: number;
    /**商品价格 */
    price: string;

    constructor() {

    }

    init(id: number,
         name: string,
         diamond: number,
         price: string) {
        this.id=id;
        this.name=name;
        this.diamond=diamond;
        this.price=price;
    }
}
