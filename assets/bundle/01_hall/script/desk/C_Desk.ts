import { GameType, HttpPath } from "../config/config";
import { Utils } from "../config/Utils";
import { D_Desk } from "./D_Desk";

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

    /**桌子创建相关请求 所属俱乐部ID/所属俱乐部联盟ID/游戏id/桌子名称/下注类型 betTree 中的key/带入记分牌/小盲/大盲/人数/自动开始人数/
     * 前注设置/牌局时长(时)/带入记分牌倍数example: 1,1.5,2,2.5选中部分用逗号拼接后传上来/最小保留记分牌倍数/服务费/限iOS/强制盲注/控制玩家代入/
     * 保险模式/GPS限制/IP限制/全下或弃牌/延迟看牌/允许带出记分牌/隐藏小数/牌桌同步联盟集合/总手数限制/最低入池率/封顶（大盲）
    */
    async sendDeskCreate(clubId: number, unionId: number, gameId: number, nick: number, betType: boolean, scoreBoard: string, sb: string, bb: string,
        personNum: number, autoStartNum: number, ante: string, duration: string, scoreBoardMultiple: string, minScoreBoardMultiple: string,
        serviceRate: string, ios: boolean, blind: boolean, playerInvite: boolean, insurance: boolean, gps: boolean, ipRestriction: boolean,
        allinFold: boolean, delayedCheck: boolean, scoreboardAllowed: boolean, hideDecimals: boolean, unionIds: string, totalPlayNumLimit: number,
        minJoinChance: string, cappedBigBlind: string) {
        let data = {
            clubId: clubId, unionId: unionId, gameId: gameId, nick: nick, betType: betType, scoreBoard: scoreBoard, sb: sb, bb: bb,
            personNum: personNum, autoStartNum: autoStartNum, ante: ante, duration: duration, scoreBoardMultiple: scoreBoardMultiple,
            minScoreBoardMultiple: minScoreBoardMultiple, serviceRate: serviceRate, ios: ios, blind: blind, playerInvite: playerInvite,
            insurance: insurance, gps: gps, ipRestriction: ipRestriction, allinFold: allinFold, delayedCheck: delayedCheck,
            scoreboardAllowed: scoreboardAllowed, hideDecimals: hideDecimals, unionIds: unionIds, totalPlayNumLimit: totalPlayNumLimit,
            minJoinChance: minJoinChance, cappedBigBlind: cappedBigBlind
        }
        let res: any = await Utils.Post(HttpPath.deskCreate, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    /**桌子配置项查询 游戏类型*/
    async sendDeskConfig(gameType: GameType) {
        let data = {
            gameType: gameType
        }
        let res: any = await Utils.Post(HttpPath.deskConfig, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        
    }
}

