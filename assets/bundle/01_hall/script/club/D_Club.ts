import { ClubJob, DeviceType, PlayerSourceType, SexType } from "../config/config";

export class D_Club {
    id:number;
    /**所属联盟 */
    zsGameUnionId: number;
    /**所属联盟名称 */
    zsGameUnionName: string;
    /**所属联盟图标 */
    zsGameUnionIconPic: string;
    /**俱乐部等级 */
    zsGameClubLevelId: number;
    /**俱乐部等级名称 */
    zsGameClubLevelName: string;
    /**俱乐部标题 */
    name: string;
    /**俱乐部编号 */
    code: string;
    /**俱乐部图标 */
    iconPic: string;
    /**俱乐部积分 */
    exp: number;
    /**俱乐部描述 */
    description: string;
    /**俱乐部币 */
    coin: string;
    /**俱乐部基金 */
    fund: string;
    /**俱乐部创建人 */
    zsGamePlayerId: number;
    /**俱乐部创建人名称 */
    zsGamePlayerName: string;
    /**俱乐部创建人头像 */
    zsGamePlayerPic: string;
    /**解散时间 */
    dissolutionDateTime: string;
    /**是否允许搜索 */
    search: true;
    /**管理员开局 */
    adminStart: true;
    /**购买俱乐部等级ID */
    temporaryZsGameClubLevelId: number;
    /**购买俱乐部等级名称 */
    temporaryZsGameClubLevelName: string;
    /**购买俱乐部等级有效期 */
    temporaryValidityPeriod: string;
    /**创建时间 */
    createDateTime: string;
    /**当前牌局数量 */
    deskCount: number;

    constructor() {

    }

    init(data:any) {
        this.id=data.id;
        this.zsGameUnionId= data.zsGameUnionId;
        this.zsGameUnionName= data.zsGameUnionName;
        this.zsGameUnionIconPic= data.zsGameUnionIconPic;
        this.zsGameClubLevelId= data.zsGameClubLevelId;
        this.zsGameClubLevelName= data.zsGameClubLevelName;
        this.name= data.name;
        this.code= data.code;
        this.iconPic= data.iconPic;
        this.exp= data.exp;
        this.description= data.description;
        this.coin= data.coin;
        this.fund= data.fund;
        this.zsGamePlayerId= data.zsGamePlayerId;
        this.zsGamePlayerName= data.zsGamePlayerName;
        this.zsGamePlayerPic= data.zsGamePlayerPic;
        this.dissolutionDateTime= data.dissolutionDateTime;
        this.search= data.search;
        this.adminStart= data.adminStart;
        this.temporaryZsGameClubLevelId= data.temporaryZsGameClubLevelId;
        this.temporaryZsGameClubLevelName= data.temporaryZsGameClubLevelName;
        this.temporaryValidityPeriod= data.temporaryValidityPeriod;
        this.createDateTime= data.createDateTime;
        this.deskCount= data.deskCount;
    }
}
