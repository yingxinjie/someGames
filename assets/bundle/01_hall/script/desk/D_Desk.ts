import { PropsType } from "../config/config";

export class D_Desk {
    /**id */
    id: number;
    /**所属俱乐部ID */
    clubId: number;
    /**所属俱乐部名称 */
    clubName: string;
    /**所属俱乐部联盟ID */
    unionId: number;
    /**所属俱乐部联盟名称 */
    unionName: string;
    /**所属游戏id */
    gameId: number;
    /**所属游戏名称 */
    gameName: string;
    /**桌子名称 */
    nick: string;
    /**带入记分牌 */
    scoreBoard: string;
    /**小盲 */
    sb: string;
    /**大盲 */
    bb: string;
    /**人数 */
    personNum: number;
    /**剩余人数 */
    personLeftNum: number;
    /**自动开始人数 */
    autoStartNum: number;
    /**前注设置 */
    ante: string;
    /**牌局时长(时) */
    duration: string;
    /**带入记分牌倍数 */
    scoreBoardMultiple: string;
    /**最小保留记分牌倍数 */
    minScoreBoardMultiple: string;
    /**最低入池率 */
    minJoinChance: string;
    /**服务费 */
    serviceRate: string;
    /**封顶（大盲） */
    cappedBigBlind: string;
    /**限iOS */
    ios: boolean;
    /**强制盲注 */
    blind: boolean;
    /**控制玩家代入 */
    playerInvite: boolean;
    /**保险模式 */
    insurance: boolean;
    /**GPS限制 */
    gps: boolean;
    /**IP限制 */
    ipRestriction: boolean;
    /**全下或弃牌 */
    allinFold: boolean;
    /**延迟看牌 */
    delayedCheck: boolean;
    /**允许带出记分牌 */
    scoreboardAllowed: boolean;
    /**隐藏小数 */
    hideDecimals: boolean;
    /** 创建人ID */
    zsGamePlayerId: number;
    /**创建人名称 */
    zsGamePlayerName: string;
    /**牌桌同步联盟集合 */
    unionIds: string;
    /**剩余时间 单位min */
    leftTime: string;

    constructor() {

    }

    init(data:any) {
        this.id= data.id;
        this.clubId= data.clubId;
        this.clubName= data.clubName;
        this.unionId= data.unionId;
        this.unionName= data.unionName;
        this.gameId= data.gameId;
        this.gameName= data.gameName;
        this.nick= data.nick;
        this.scoreBoard= data.scoreBoard;
        this.sb= data.sb;
        this.bb= data.bb;
        this.personNum= data.personNum;
        this.personLeftNum= data.personLeftNum;
        this.autoStartNum= data.autoStartNum;
        this.ante= data.ante;
        this.duration= data.duration;
        this.scoreBoardMultiple= data.scoreBoardMultiple;
        this.minScoreBoardMultiple= data.minScoreBoardMultiple;
        this.minJoinChance= data.minJoinChance;
        this.serviceRate= data.serviceRate;
        this.cappedBigBlind= data.cappedBigBlind;
        this.ios= data.ios;
        this.blind= data.blind;
        this.playerInvite= data.playerInvite;
        this.insurance= data.insurance;
        this.gps= data.gps;
        this.ipRestriction= data.ipRestriction;
        this.allinFold= data.allinFold;
        this.delayedCheck= data.delayedCheck;
        this.scoreboardAllowed= data.scoreboardAllowed;
        this.hideDecimals= data.hideDecimals;
        this.zsGamePlayerId= data.zsGamePlayerId;
        this.zsGamePlayerName= data.zsGamePlayerName;
        this.unionIds= data.unionIds;
        this.leftTime= data.leftTime;
    }
}
