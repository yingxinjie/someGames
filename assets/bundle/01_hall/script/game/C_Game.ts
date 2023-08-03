import { HttpPath } from "../config/config";
import { Utils } from "../config/Utils";

export class C_Game {
    /**道具 */
    public static _instance: C_Game = null;
    public static get instance(): C_Game {
        if (!this._instance) {
            this._instance = new C_Game();

        }
        return this._instance;
    }

    constructor() {

    }

    gameArr:Game[];
    /**桌子配置项查询 游戏类型*/
    async sendGameList(current: number) {
        let data = {
            current: current,
            size:20
        }
        let res: any = await Utils.Post(HttpPath.gameList, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        this.gameArr = res.data;
    }
}

export interface Game {
    id: string;
    code: string;
    name: string;
}
