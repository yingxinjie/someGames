import { DzUtils } from "./dzUtils";

export class nodeDZpool {
    private static sing: nodeDZpool = null

    public static get ins(): nodeDZpool {
        if (this.sing == null) {
            this.sing = new nodeDZpool();
        }
        return this.sing;
    }

    private _nodePool: cc.NodePool[] = [];

    private _card: any;
    public async initCard(max: number = 9) {
        this._card = await DzUtils.loadPrefab("card")
        for (let i = 0; i < max; i++) {
            let obj = cc.instantiate(this._card)
            if (!this._nodePool[POOLTYPE.CARD]) {
                this._nodePool[POOLTYPE.CARD] = new cc.NodePool()
            }
            this._nodePool[POOLTYPE.CARD].put(obj)
        }
    }

    private _coin: any;
    public async initCoin(max: number = 9) {
        this._coin = await DzUtils.loadPrefab("coin")
        for (let i = 0; i < max; i++) {
            let obj = cc.instantiate(this._coin)
            if (!this._nodePool[POOLTYPE.COIN]) {
                this._nodePool[POOLTYPE.COIN] = new cc.NodePool()
            }
            this._nodePool[POOLTYPE.COIN].put(obj)
        }
    }

    private _isLoad: boolean = false;
    /**获取对象池对象 */
    public getObj(index): any {
        let obj: any;
        let prefab: cc.Prefab

        if (index == POOLTYPE.CARD) {
            prefab = this._card
        } else {
            prefab = this._coin
        }

        if (this._nodePool[index].size() > 0) {
            obj = this._nodePool[index].get()
        } else {
            obj = cc.instantiate(prefab)
        }
        //obj.init();
        return obj;
    }

    /**回收对象 */
    public recovery(index, node: cc.Node) {
        this._nodePool[index].put(node);
    }
}

/** 桌内信息 */
export const NodeDZpool = nodeDZpool.ins;

export enum POOLTYPE {
    CARD,
    COIN
}