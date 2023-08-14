import { DeskInfo } from "../../../02_game/script/config/deskInfo";
import { GameType, HttpPath } from "../config/config";
import { Message } from "../config/Message";
import { Utils } from "../config/Utils";
import { C_Game } from "../game/C_Game";
import { C_Hall } from "../hall/C_Hall";
import { D_Desk } from "./D_Desk";
import { D_DeskConfig } from "./D_DeskConfig";

export class C_Desk {
    /**道具 */
    public static _instance: C_Desk = null;
    public static get instance(): C_Desk {
        if (!this._instance) {
            this._instance = new C_Desk();

        }
        return this._instance;
    }

    constructor() {

    }

    desk: D_Desk;
    /**根据桌子的code查询桌子信息 桌子的code*/
    async sendQueryByDeskCode(deskCode: number) {
        let data = {
            deskCode: deskCode
        }
        let res: any = await Utils.Post(HttpPath.queryByDeskCode, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        if (res.data) {
            this.desk = new D_Desk();
            this.desk.init(res.data);
        } else {
            this.desk = null;
        }
    }

    deskArr: D_Desk[];
    /**桌子分页查询 当前页数/俱乐部ID/联盟ID/游戏ID/是否筛选有空位桌子*/
    async sendDeskList(current: number, clubId: number, unionId: number, gameId: number, personLeft: boolean) {
        let data = {
            current: current,
            size: 20,
            clubId: clubId,
            unionId: unionId,
            gameId: gameId,
            personLeft: personLeft
        }
        let res: any = await Utils.Post(HttpPath.deskList, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        if (res.data) {
            this.desk = new D_Desk();
            this.desk.init(res.data);
        } else {
            this.desk = null;
        }
        this.deskArr = [];
        if (res.data && res.data.length > 0) {
            for (let i = 0; i < res.data.length; i++) {
                let temp = res.data[i];
                let desk: D_Desk = new D_Desk();
                desk.init(temp);
                this.deskArr.push(desk);
            }
        }
    }

    /**桌子创建相关请求 */
    _deskInfo:DeskInfo;
    get deskInfo():DeskInfo{
        if(!this._deskInfo){
            this._deskInfo = {} as DeskInfo;
        }
        return this._deskInfo;
    }
    async sendDeskCreate() {
        let data = this.deskInfo;
        let res: any = await Utils.Post(HttpPath.deskCreate, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    deskConfigArr:D_DeskConfig[];
    /**桌子配置项查询 游戏类型*/
    async sendDeskConfig(gameId: string) {
        let data = {
            gameId: gameId
        }
        let res: any = await Utils.Post(HttpPath.deskConfig, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        if(!this.deskConfigArr){
            this.deskConfigArr = [];
        }
        if(!C_Game.instance.gameArr){
            console.log("C_Game.instance.gameArr error")
            return;
        }
        let index:number = C_Game.instance.getIndexByGameId(gameId);
        this.deskConfigArr[index] = new D_DeskConfig();
        this.deskConfigArr[index].init(res.data);
        C_Hall.evt.emit(Message.deskConfig);
    }
}

export interface DeskInfo {
    /**所属俱乐部ID*/
    clubId: number;
    /**所属俱乐部联盟ID */
    unionId: number;
    /**游戏id */
    gameId: number;
    /**桌子名称 */
    nick: string, 
    /**下注类型 betTree 中的key */
    betType: boolean,
    /**带入记分牌 */
    scoreBoard: string, 
    /**小盲 */
    sb: string, 
    /**大盲 */
    bb: string,  
    /**人数 */  
    personNum: number, 
    /**自动开始人数 */
    autoStartNum: number, 
    /**前注设置 */
    ante: string, 
    /**牌局时长(时) */
    duration: string, 
    /**带入记分牌倍数example: 1,1.5,2,2.5选中部分用逗号拼接后传上来 */
    scoreBoardMultiple: string, 
    /**最小保留记分牌倍数 */
    minScoreBoardMultiple: string,
    /**服务费 */
    serviceRate: string, 
    /**限iOS */
    ios: boolean, 
    /**强制盲注*/
    blind: boolean,
    /**控制玩家代入*/
    playerInvite: boolean, 
    /**保险模式*/
    insurance: boolean, 
    /**GPS限制*/
    gps: boolean, 
    /**IP限制 */
    ipRestriction: boolean,
    /**全下或弃牌 */
    allinFold: boolean, 
    /**延迟看牌 */
    delayedCheck: boolean, 
    /**允许带出记分牌*/
    scoreboardAllowed: boolean, 
    /**隐藏小数*/
    hideDecimals: boolean, 
    /**牌桌同步联盟集合 */
    unionIds: string, 
    /**总手数限制  */
    totalPlayNumLimit: number,
    /**最低入池率 */
    minJoinChance: string, 
    /**封顶（大盲）*/
    cappedBigBlind: string
}

