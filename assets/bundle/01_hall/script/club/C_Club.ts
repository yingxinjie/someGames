import { ClubCoinApplyType, ClubCoinRecordType, ClubJob, ClubPlayerOrder, ClubPlayerOrderBy, HttpPath } from "../config/config";
import { Utils } from "../config/Utils";
import { D_Club } from "./D_Club";
import { D_ClubPlayer } from "./D_ClubPlayer";

export class C_Club {
    public static _instance: C_Club = null;
    public static get instance(): C_Club {
        if (!this._instance) {
            this._instance = new C_Club();

        }
        return this._instance;
    }


    constructor() {

    }

    /**为俱乐部添加新角色 玩家Id/俱乐部Id/玩家角色 俱乐部身份,(enums),ADMIN=管理员,AGENT=代理,SERVICE=客服号,BOSS=老板号*/
    async sendSetClubPlayerRole(playerId: number, clubId: number, job: ClubJob) {
        let data = {
            playerId: playerId,
            clubId: clubId,
            job: job
        }
        let res: any = await Utils.Post(HttpPath.setClubPlayerRole, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }

    }

    clubPlayerArr: D_ClubPlayer[];
    /**分页查询俱乐部会员列表 当前页数/俱乐部Id/排序字段/排序方式*/
    async sendPageClubPlayerQuery(current: number, clubId: number, orderBy: ClubPlayerOrderBy, order: ClubPlayerOrder) {
        let data = {
            current: current,
            size: 20,
            clubId: clubId,
            orderBy: orderBy,
            order: order
        }
        let res: any = await Utils.Post(HttpPath.pageClubPlayerQuery, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        this.clubPlayerArr = [];
        if (res.data && res.data.length) {
            for (let i = 0; i < res.data.length; i++) {
                let temp = res.data[i];
                let clubPlayer: D_ClubPlayer = new D_ClubPlayer();
                clubPlayer.init(temp);
                this.clubPlayerArr.push(clubPlayer);
            }
        }
    }

    clubLevel: ClubLevel;
    /**查询俱乐部等级 俱乐部等级id*/
    async sendClubLevelQuery(clubLevelId: number) {
        let data = {
            clubLevelId: clubLevelId,
        }
        let res: any = await Utils.Post(HttpPath.clubLevelQuery, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        this.clubLevel = res.data;
    }

    clubLevelArr: ClubLevel[];
    /**列表查询创建的俱乐部等级*/
    async sendClubLevelListQuery(current: number) {
        let data = {
            current: current,
            size: 20
        }
        let res: any = await Utils.Post(HttpPath.clubLevelListQuery, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        this.clubLevelArr = res.data;
    }

    clubFundRecord: ClubFundRecord;
    /**俱乐部基金流水详情 俱乐部基金充值记录ID*/
    async sendClubFundQuery(fundRecordid: number) {
        let data = {
            fundRecordid: fundRecordid,
        }
        let res: any = await Utils.Post(HttpPath.clubFundQuery, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        this.clubFundRecord = res.data;
    }

    clubFundRecordArr: ClubFundRecord[];
    /**俱乐部基金流水查询 当前页数/俱乐部ID*/
    async sendClubFundPageRecord(current: number, clubId: number) {
        let data = {
            current: current,
            size: 20,
            clubId: clubId
        }
        let res: any = await Utils.Post(HttpPath.clubFundPageRecord, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        this.clubFundRecordArr = res.data;
    }

    /**俱乐部基金发放 玩家ID/俱乐部ID/发放数量*/
    async sendClubFundGrant(playerId: number, clubId: number, fundCount: number) {
        let data = {
            playerId: playerId,
            clubId: clubId,
            fundCount: fundCount
        }
        let res: any = await Utils.Post(HttpPath.clubFundGrant, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    /**俱乐部基金充值 	基金充值对应的商品ID/俱乐部ID/商品数量 默认为1*/
    async sendClubFundCharge(propsId: number, clubId: number, count: number) {
        let data = {
            propsId: propsId,
            clubId: clubId,
            count: count
        }
        let res: any = await Utils.Post(HttpPath.clubFundCharge, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    /**俱乐部币申请拒绝 俱乐部币申请ID*/
    async sendClubCoinReject(applyId: number) {
        let data = {
            applyId: applyId,
        }
        let res: any = await Utils.Post(HttpPath.clubCoinReject, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    /**俱乐部币回收 被回收用户ID/俱乐部ID/用户俱乐部币数量*/
    async sendClubCoinRecycle(userId: number, clubId: number, userClubCoins: number) {
        let data = {
            userId: userId,
            clubId: clubId,
            userClubCoins: userClubCoins
        }
        let res: any = await Utils.Post(HttpPath.clubCoinRecycle, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    clubCoinRecord: ClubCoinRecord;
    /**俱乐部币流水详情 俱乐部流水ID*/
    async sendClubCoinQuery(recordId: number) {
        let data = {
            recordId: recordId
        }
        let res: any = await Utils.Post(HttpPath.clubCoinQuery, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        this.clubCoinRecord = res.data;
    }

    clubCoinRecordArr: ClubCoinRecord[];
    /**俱乐部币流水查询 当前页数/俱乐部ID/*/
    async sendClubCoinPageRecord(current: number, clubId: number) {
        let data = {
            current: current,
            clubId: clubId
        }
        let res: any = await Utils.Post(HttpPath.clubCoinPageRecord, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        this.clubCoinRecordArr = res.data;
    }

    clubCoinApplyArr: ClubCoinRecord[];
    /**俱乐部币申请列表查询 当前页数/俱乐部ID/*/
    async sendClubCoinPageApply(current: number, clubId: number) {
        let data = {
            current: current,
            clubId: clubId
        }
        let res: any = await Utils.Post(HttpPath.clubCoinPageApply, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        this.clubCoinApplyArr = res.data;
    }

    /**俱乐部币发放 被发放用户ID/俱乐部ID/用户俱乐部币数量*/
    async sendClubCoinGrant(userId: number, clubId: number, userClubCoins: string) {
        let data = {
            userId: userId,
            clubId: clubId,
            userClubCoins: userClubCoins
        }
        let res: any = await Utils.Post(HttpPath.clubCoinGrant, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    /**俱乐部币申请 申请俱乐部币数量/俱乐部不能为空/申请类型,(enums),APPLY=申请,RECLAIM=回收*/
    async sendClubCoinApply(clubCoinAmount: number, clubId: number, applyType: ClubCoinApplyType) {
        let data = {
            clubCoinAmount: clubCoinAmount,
            clubId: clubId,
            applyType: applyType
        }
        let res: any = await Utils.Post(HttpPath.clubCoinApply, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    /**俱乐部币申请审批 俱乐部币申请ID*/
    async sendClubCoinAccept(applyId: number) {
        let data = {
            applyId: applyId
        }
        let res: any = await Utils.Post(HttpPath.clubCoinAccept, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    /**分页查询用户申请加入俱乐部列表  当前页数/俱乐部ID*/
    async sendClubApplyToJoinQuery(current: number, clubId: number) {
        let data = {
            current: current,
            clubId: clubId
        }
        let res: any = await Utils.Post(HttpPath.clubApplyToJoinQuery, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    /**用户俱乐部申请审批拒绝操作  申请ID/审核回复*/
    async sendClubApplyReject(applyId: number, reviewResponse: string) {
        let data = {
            applyId: applyId,
            reviewResponse: reviewResponse
        }
        let res: any = await Utils.Post(HttpPath.clubApplyReject, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    /**用户俱乐部申请审批通过操作  申请ID/审核回复*/
    async sendClubApplyAccept(applyId: number, reviewResponse: string) {
        let data = {
            applyId: applyId,
            reviewResponse: reviewResponse
        }
        let res: any = await Utils.Post(HttpPath.clubApplyAccept, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    /**更新  当前页数/俱乐部ID/俱乐部标题/俱乐部图标/俱乐部描述/是否允许搜索/管理员开局*/
    async sendClubUpdate(current: number, clubId: number, name: string, iconPic: string, description: string, search: boolean, adminStart: boolean) {
        let data = {
            current: current,
            size: 20,
            clubId: clubId,
            name: name,
            iconPic: iconPic,
            description: description,
            search: search,
            adminStart: adminStart
        }
        let res: any = await Utils.Post(HttpPath.clubUpdate, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    /**俱乐部退出联盟  联盟ID/俱乐部ID*/
    async sendClubUnionQuit(unionId: number, clubId: number) {
        let data = {
            unionId: unionId,
            clubId: clubId,
        }
        let res: any = await Utils.Post(HttpPath.clubUnionQuit, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    /**分页查询联盟的俱乐部  联盟ID/俱乐部ID*/
    async sendUnionClubPage(current: number, unionId: number) {
        let data = {
            current: current,
            size: 20,
            unionId: unionId
        }
        let res: any = await Utils.Post(HttpPath.unionClubPage, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    unionClubArr: D_Club[];
    /**分页查询联盟的俱乐部  当前页数/查询关键字*/
    async sendClubSearch(current: number, keyWord: string) {
        let data = {
            current: current,
            size: 20,
            keyWord: keyWord
        }
        let res: any = await Utils.Post(HttpPath.clubSearch, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        this.unionClubArr = [];
        if (res.data && res.data.length > 0) {
            for (let i = 0; i < res.data.length; i++) {
                let temp = res.data[i];
                let club: D_Club = new D_Club();
                club.init(temp);
                this.unionClubArr.push(club);
            }
        }
    }

    /**退出俱乐部  俱乐部ID*/
    async sendClubQuit(clubId: number) {
        let data = {
            clubId: clubId
        }
        let res: any = await Utils.Post(HttpPath.clubQuit, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    club: D_Club;
    /**查询俱乐部信息  俱乐部ID*/
    async sendClubQuery(clubId: number) {
        let data = {
            clubId: clubId
        }
        let res: any = await Utils.Post(HttpPath.clubQuery, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        this.club = new D_Club();
        this.club.init(res.data);
    }

    clubArr: D_Club[];
    /**列表查询创建的俱乐部  俱乐部ID*/
    async sendClubListQuery(current: number) {
        let data = {
            current: current,
            size: 20
        }
        let res: any = await Utils.Post(HttpPath.clubListQuery, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        this.clubArr = [];
        if (res.data && res.data.length > 0) {
            for (let i = 0; i < res.data.length; i++) {
                let temp = res.data[i];
                let club: D_Club = new D_Club();
                club.init(temp);
                this.clubArr.push(club);
            }
        }
    }

    /**俱乐部提升等级  俱乐部ID/俱乐部等级ID*/
    async sendClubLevelUp(clubId: number, levelId: number) {
        let data = {
            clubId: clubId,
            levelId: levelId
        }
        let res: any = await Utils.Post(HttpPath.clubLevelUp, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    joinedClub: D_Club[];
    /**分页查询已经加入的俱乐部 */
    async sendClubJoinedPage(current: number) {
        let data = {
            current: current,
            size: 20
        }
        let res: any = await Utils.Post(HttpPath.clubJoinedPage, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        this.joinedClub = [];
        if (res.data && res.data.length > 0) {
            for (let i = 0; i < res.data.length; i++) {
                let temp = res.data[i];
                let club: D_Club = new D_Club();
                club.init(temp);
                this.joinedClub.push(club);
            }
        }
    }

    /**删除解散 */
    async sendClubDissolution(clubId: number) {
        let data = {
            clubId: clubId,
        }
        let res: any = await Utils.Post(HttpPath.clubDissolution, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    /**创建 俱乐部标题/俱乐部图标路径/俱乐部所在区域*/
    async sendClubCreate(name: number, iconPic: string, area: string) {
        let data = {
            name: name,
            iconPic: iconPic,
            area: area
        }
        let res: any = await Utils.Post(HttpPath.clubCreate, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    /**俱乐部申请加入联盟 俱乐部ID/联盟ID/申请描述*/
    async sendClubApplyToJoin(clubId: number, unionId: number, applyRemark: string) {
        let data = {
            clubId: clubId,
            unionId: unionId,
            applyRemark: applyRemark
        }
        let res: any = await Utils.Post(HttpPath.clubApplyToJoin, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }
}

export interface ClubLevel {
    id: number;
    name: string;
    playerNumer: number;
    adminNum: number;
    exp: number;
    desk: number;
    diamond: number;
}

export interface ClubFundRecord {
    id: number;
    clubId: number;//俱乐部id
    clubName: string;//俱乐部name
    userId: number; //用户id
    userName: string;//操作人
    grantUserId: number;//被赠与用户id
    grantUserName: string//操作人
    type: number;//操作类型
    fund: string;//基金变化值
    diamond: string;//消耗钻石
    createDateTime: string//记录时间
}

export interface ClubCoinRecord {
    /** id*/
    id: number;
    /** 俱乐部id*/
    clubId: string;
    /** 用户id*/
    userId: number;
    /** 用户名称*/
    userName: number;
    /** 审核用户id*/
    reviewUserId: number;
    /** 审核用户名称*/
    reviewUserName: number;
    /** 记录类型,(enums),RECLAIM=回收,GRANT=发放,UNIONRECLAIM=联盟回收,UNIONGRANT=联盟发放*/
    recordType: ClubCoinRecordType;
    /** 记录类型描述,(enums),RECLAIM=回收,GRANT=发放,UNIONRECLAIM=联盟回收,UNIONGRANT=联盟发放*/
    recordTypeDesc: string;
    /** 记录数量*/
    number: number;
    /** 记录备注*/
    remarks: string;
    /** 记录时间*/
    createDateTime: string;
}
