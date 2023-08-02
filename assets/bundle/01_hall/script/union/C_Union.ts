import { HttpPath, UnionCoinRecordType, UnionType } from "../config/config";
import { Utils } from "../config/Utils";
import { D_Union } from "./D_Union";

export class C_Union {
    public static _instance: C_Union = null;
    public static get instance(): C_Union {
        if (!this._instance) {
            this._instance = new C_Union();

        }
        return this._instance;
    }


    constructor() {

    }

    unionLevel: UnionLevel;
    /**联盟等级查询 查询这个联盟等级需要花多少钻石*/
    async sendUnionLevelQuery(unionLevelId: number) {
        let data = {
            unionLevelId: unionLevelId
        }
        let res: any = await Utils.Post(HttpPath.unionLevelQuery, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        this.unionLevel = res.data;
    }

    unionLevelArr: UnionLevel[];
    /**列表查询创建的联盟等级*/
    async sendUnionLevelListQuery() {
        let data = {
            current: 1,
            size: 20
        }
        let res: any = await Utils.Post(HttpPath.unionLevelListQuery, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        this.unionLevelArr = res.data;
    }

    /**联盟币回收*/
    async sendUnionCoinRecycle(unionId: number, clubId: number, coin: number) {
        let data = {
            unionId: unionId,
            clubId: clubId,
            coin: coin
        }
        let res: any = await Utils.Post(HttpPath.unionCoinRecycle, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    unionCoinRecord: UnionCoinRecord;
    /**联盟币流水详情 联盟币记录ID*/
    async sendUnionCoinQuery(unionCoinRecordId: number) {
        let data = {
            unionCoinRecordId: unionCoinRecordId
        }
        let res: any = await Utils.Post(HttpPath.unionCoinQuery, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        this.unionCoinRecord = res.data;
    }

    unionCoinRecordArr: UnionCoinRecord;
    /**联盟币流水查询 联盟ID*/
    async sendUnionCoinPageRecord(unionId: number) {
        let data = {
            current: 1,
            size: 20,
            unionId: unionId
        }
        let res: any = await Utils.Post(HttpPath.unionCoinPageRecord, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        this.unionCoinRecordArr = res.data;
    }

    /**联盟币发放*/
    async sendUnionCoinGrant(unionId: number, clubId: number, coin: number) {
        let data = {
            unionId: unionId,
            clubId: clubId,
            coin: coin
        }
        let res: any = await Utils.Post(HttpPath.unionCoinGrant, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    /**联盟币发放 联盟ID/联盟币充值对应的商品ID/商品数量 默认为1*/
    async sendUnionCoinCharge(unionId: number, propsId: number, count: number) {
        let data = {
            unionId: unionId,
            clubId: propsId,
            coin: count
        }
        let res: any = await Utils.Post(HttpPath.unionCoinCharge, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    /**更新 当前页数/联盟ID/联盟图标/ 是否允许搜索*/
    async sendUnionUpdate(unionId: number, iconPic: number, search: string) {
        let data = {
            unionId: unionId,
            iconPic: iconPic,
            search: search
        }
        let res: any = await Utils.Post(HttpPath.unionUpdate, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    unionArr: D_Union[];
    /**搜索 当前页数/联盟ID/联盟图标/ 是否允许搜索*/
    async sendUnionSearch(current: number, keyWord: string) {
        let data = {
            current: current,
            size: 20,
            keyWord: keyWord
        }
        let res: any = await Utils.Post(HttpPath.unionSearch, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        this.unionArr = [];
        if (res.data && res.data.length > 0) {
            for (let i = 0; i < res.data.length; i++) {
                let temp: any = res.data[i];
                let union: D_Union = new D_Union();
                union.init(
                    temp.id,
                    temp.name,
                    temp.unionType,
                    temp.unionTypeDesc,
                    temp.code,
                    temp.iconPic,
                    temp.unionCoin,
                    temp.clubNum,
                    temp.clubNumLimit,
                    temp.zsGamePlayerId,
                    temp.zsGamePlayerName,
                    temp.status,
                    temp.statusDesc,
                    temp.dissolutionDateTime,
                    temp.zsGameUnionLevelId,
                    temp.zsGameUnionLevelName,
                    temp.search,
                    temp.createDateTime
                )
                this.unionArr.push(union)
            }
        }
    }

    /**更改名称 联盟ID/联盟名称*/
    async sendUnionRename(unionId: number, newName: string) {
        let data = {
            unionId: unionId,
            newName: newName
        }
        let res: any = await Utils.Post(HttpPath.unionRename, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    union: D_Union;
    /**查询 联盟ID*/
    async sendUnionQuery(unionId: number) {
        let data = {
            unionId: unionId
        }
        let res: any = await Utils.Post(HttpPath.unionQuery, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        this.union = res.data;
    }

    unionApplyArr: UnionApply[];
    /**分页查询俱乐部申请列表 当前页数/联盟ID*/
    async sendUnionPageApply(current: number, unionId: number) {
        let data = {
            current: current,
            size: 20,
            unionId: unionId
        }
        let res: any = await Utils.Post(HttpPath.unionPageApply, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        this.unionApplyArr = res.data;
    }

    /**提升等级 联盟id/联盟等级ID（可升级列表对应levelID）*/
    async sendUnionLevelUp(unionId: number, levelId: number) {
        let data = {
            unionId: unionId,
            levelId: levelId
        }
        let res: any = await Utils.Post(HttpPath.unionLevelUp, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    /**把俱乐部踢出联盟 联盟id/俱乐部ID*/
    async sendUnionKickout(unionId: number, clubId: number) {
        let data = {
            unionId: unionId,
            clubId: clubId
        }
        let res: any = await Utils.Post(HttpPath.unionKickout, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    /**解散 联盟id*/
    async sendUnionDissolution(unionId: number) {
        let data = {
            unionId: unionId
        }
        let res: any = await Utils.Post(HttpPath.unionDissolution, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    /**创建 联盟名称/联盟类型/联盟图标/是否允许搜索/俱乐部ID*/
    async sendUnionCreate(name: string,
        unionType: UnionType,
        iconPic: string,
        search: boolean,
        clubId: number) {
        let data = {
            name: name,
            unionType: unionType,
            iconPic: iconPic,
            search: search,
            clubId: clubId
        }
        let res: any = await Utils.Post(HttpPath.unionCreate, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    /**拒绝俱乐部申请 申请ID*/
    async sendUnionReject(applyId:number) {
        let data = {
            applyId: applyId
        }
        let res: any = await Utils.Post(HttpPath.unionReject, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    /**同意俱乐部申请 申请ID*/
     async sendUnionAccept(applyId:number) {
        let data = {
            applyId: applyId
        }
        let res: any = await Utils.Post(HttpPath.unionAccept, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }
}

export interface UnionLevel {
    id: number;
    name: string;
    clubNumer: number;
    diamond: number;
}
export interface UnionCoinRecord {
    /**id */
    id: number;
    /**联盟id */
    unionId: number;
    /**用户id */
    playerId: number;
    /**俱乐部id */
    clubId: number
    /**记录类型,(enums),RECHARGE=充值,CONSUME=消耗,GRANTCLUB=发放俱乐部,RECLAIMCLUB=回收俱乐部币,FEE=手续费 */
    recordType: UnionCoinRecordType;
    /**记录类型描述 */
    recordTypeDesc: string;
    /**记录数量 */
    number: number;
    /**记录备注 */
    remarks: string;
    /**记录时间 */
    createDateTime: string;
    /**俱乐部标题 */
    clubName: string;
    /**俱乐部编号 */
    clubCode: string;
    /**用户名称*/
    playerName: string
    /**用户编号 */
    playerCode: string;
}
export interface UnionApply {
    id: number;
    /**俱乐部id */
    clubId: number;
    /**联盟id */
    unionId: number;
    /**俱乐部名称 */
    clubName: string;
    /**申请描述*/
    applyRemark: string;
}
