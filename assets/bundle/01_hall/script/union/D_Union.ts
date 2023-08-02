import { UnionStatus, UnionType } from "../config/config";

export class D_Union {
    /**id */
    id:number;
    /**联盟名称 */
    name:string;
    /**联盟类型,(enums),STANDARD=普通联盟,SUPERSTANDARD=超级联盟 */
    unionType:UnionType;
    /**联盟类型描述 */
    unionTypeDesc:string
    /**联盟编号 */
    code:string;
    /**联盟图标 */
    iconPic:string;
    /**联盟币 */
    unionCoin:string;
    /**俱乐部数量 */
    clubNum:number;
    /**俱乐部数量上限 */
    clubNumLimit:number;
    /**联盟币创建人 */
    zsGamePlayerId:number;
    /**联盟币创建人名称 */
    zsGamePlayerName:string;
    /**联盟状态,(enums),NORMAL=正常,DISABLE=禁用,DISSOLUTION=解散（创始人解散 */
    status:UnionStatus
    /**联盟状态描述 */
    statusDesc:string;
    /**解散时间 */
    dissolutionDateTime:string;
    /**联盟等级ID */
    zsGameUnionLevelId:number;
    /**联盟等级名称 */
    zsGameUnionLevelName:string;
    /**是否允许搜索 */
    search:boolean;
    /**创建时间 */
    createDateTime:string;

    constructor() {

    }

    init(id: number,
         name: string,
         unionType: UnionType,
         unionTypeDesc: string,
         code: string,
         iconPic: string,
         unionCoin: string,
         clubNum: number,
         clubNumLimit: number,
         zsGamePlayerId: number,
         zsGamePlayerName: string,
         status: UnionStatus,
         statusDesc: string,
         dissolutionDateTime: string,
         zsGameUnionLevelId: number,
         zsGameUnionLevelName: string,
         search: boolean,
         createDateTime: string) {
        this.id= id;
        this.name= name;
        this.unionType= unionType;
        this.unionTypeDesc= unionTypeDesc;
        this.code= code;
        this.iconPic= iconPic;
        this.unionCoin= unionCoin;
        this.clubNum= clubNum;
        this.clubNumLimit= clubNumLimit;
        this.zsGamePlayerId= zsGamePlayerId;
        this.zsGamePlayerName= zsGamePlayerName;
        this.status= status;
        this.statusDesc= statusDesc;
        this.dissolutionDateTime= dissolutionDateTime;
        this.zsGameUnionLevelId= zsGameUnionLevelId;
        this.zsGameUnionLevelName= zsGameUnionLevelName;
        this.search= search;
        this.createDateTime= createDateTime;
    }
}
