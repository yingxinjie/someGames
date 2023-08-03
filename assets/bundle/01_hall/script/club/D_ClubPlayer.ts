import { ClubJob, DeviceType, PlayerSourceType, SexType } from "../config/config";

export class D_ClubPlayer {
    /** */
    clubPlayerId: number;
    /**club_id */
    clubId: number;
    /**俱乐部编号 */
    clubCode: string;
    /**俱乐部标题 */
    clubName: string;
    /**俱乐部图标 */
    iconPic: string;
    /**玩家用户ID */
    playerId: number;
    /**用户编号 */
    playerCode: string;
    /**用户名称 */
    playerName: string;
    /**用户头像 */
    playerHeadPic: string;
    /**性别,(enums),BOY=男,GRIL=女 */
    sex: SexType;
    /**最后登录时间 */
    playerLastLoginTime: string;
    /**设备类型,(enums),ANDROID=安卓,IOS=苹果,WEB=网页 */
    playerRegDevice:DeviceType;
    /**用户来源,(enums),APPLY=申请,SYSTEM=系统,INVITE=邀请 */
    playerSource:PlayerSourceType;
    /**	俱乐部身份,(enums),PLAYER=玩家,ADMIN=管理员,FOUNDER=创始人,AGENT=代理,SERVICE=客服号,BOSS=老板号 */
    job: ClubJob;
    /**	俱乐部币 */
    coin: string;

    constructor() {

    }

    init(data:any) {
        this.clubPlayerId= data.clubPlayerId;
        this.clubId= data.clubId;
        this.clubCode= data.clubCode;
        this.clubName= data.clubName;
        this.iconPic= data.iconPic;
        this.playerId= data.playerId;
        this.playerCode= data.playerCode;
        this.playerName= data.playerName;
        this.playerHeadPic= data.playerHeadPic;
        this.sex= data.sex;
        this.playerLastLoginTime=data.playerLastLoginTime;
        this.playerRegDevice=data.playerRegDevice;
        this.playerSource=data.playerSource;
        this.job= data.job;
        this.coin= data.coin;
    }
}
