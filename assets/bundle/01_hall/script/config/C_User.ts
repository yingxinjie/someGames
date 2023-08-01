import { HttpPath } from "./config";
import { cwebsocket } from "./cwebsocket";
import { D_Set } from "./D_Set";
import { D_User } from "./D_User";
import { Utils } from "./Utils";

export class C_User {
    private static sing: C_User = null

    public static get ins(): C_User {
        if (this.sing == null) {
            this.sing = new C_User();
        }
        return this.sing;
    }

    private _uid: string = "";

    /** uid */
    public set uid(val: string) {
        cc.sys.localStorage.setItem("uuid", val);
        this._uid = val;
    }
    /** uid */
    public get uid(): string {
        let uuid: string = cc.sys.localStorage.getItem("uuid");
        if (!uuid || uuid == "") {
            return "";
        }

        this._uid = uuid;
        return this._uid;
    }

    private _token: string = "";

    public set token(val: string) {
        cc.sys.localStorage.setItem("token", val);
        this._token = val;
    }

    public get token(): string {
        let token: string = cc.sys.localStorage.getItem("token");
        if (!token) {
            return "";
        }

        this._token = token;
        return this._token;
    }

    private _me: D_User;
    get me(): D_User {
        if (!this._me) {
            this._me = new D_User();
        }
        return this._me;
    }

    private _set: D_Set;
    get set(): D_Set {
        if (!this._set) {
            this._set = new D_Set();
        }
        return this._set;
    }

    private _language: number = 0;
    public set language(val: number) {
        this._language = val;
        cc.sys.localStorage.setItem("language", val);
    }
    public get language(): number {
        let id = cc.sys.localStorage.getItem("language");
        if (!id) {
            id = 0;
        }
        this._language = Number(id);
        return this._language;
    }

    /** 游戏长连接管理 */
    public cwebsocket: cwebsocket = null;

    public clearLogin() {
        cc.sys.localStorage.setItem("token", "");
        cc.sys.localStorage.setItem("uuid", "");
    }

    public seatPJson: any
    public lightPJson: any

    //---------------------------------------server------------------------------------------
    remark: string;
    /**修改备注 */
    async sendUserRemark(remark: string) {
        let data = {
            current: 1,
            size: 20,
            userId: C_User.ins.uid,
            remark: remark
        }
        let res: any = await Utils.Post(HttpPath.userRemark, data);
        this.remark = res.data.remark;
    }

    /**查询备注 */
    async sendUserRemarkQuery() {
        let data = {
            current: 1,
            size: 20,
            userId: C_User.ins.uid,
        }
        let res: any = await Utils.Post(HttpPath.queryUserRemark, data);
        this.remark = res.data.remark;
    }

    searchUser: D_User;
    /**根据关键字查询用户信息，用户编号或用户名称*/
    async sendUserSearch(keyWord: string) {
        let data = {
            current: 1,
            size: 20,
            keyWord: keyWord,
        }
        let res: any = await Utils.Post(HttpPath.userSearch, data);
        this.searchUser = new D_User();
        this.searchUser.init(res.data.id, res.data.name, res.data.sex, res.data.handPic, res.data.vipValidityPeriod, res.data.vipType,
            res.data.email, res.data.code, res.data.description, res.data.phoneAreaCode, res.data.phoneNumber, Number(res.data.gold),
            Number(res.data.diamond), res.data.lastLoginTime, res.data.clubNum, res.data.joinClubNum)
    }

    operateCode: string;
    /**安全验证 验证码/手机国际地区,绑定手机的时候必填/手机,绑定手机的时候必填/email,绑定邮箱的时候必填/验证类型,(enums),PHONE=手机,EMAIL=邮箱*/
    async sendSafetyValidate(captcha: string, phoneAreaCode: string, phoneNumber: string, email: string, type: string) {
        let data = {
            captcha: captcha,
            phoneAreaCode: phoneAreaCode,
            phoneNumber: phoneNumber,
            email: email,
            type: type
        }
        let res: any = await Utils.Post(HttpPath.safetyValidate, data);
        this.operateCode = res.data.operateCode;
    }

    /**个人信息查询 */
    async sendUserQuery() {
        let data = {
        }
        let res: any = await Utils.Post(HttpPath.userQuery, data);
        C_User.ins.me.init(res.data.id, res.data.name, res.data.sex, res.data.handPic, res.data.vipValidityPeriod, res.data.vipType,
            res.data.email, res.data.code, res.data.description, res.data.phoneAreaCode, res.data.phoneNumber, Number(res.data.gold),
            Number(res.data.diamond), res.data.lastLoginTime, res.data.clubNum, res.data.joinClubNum);
    }

    /**个人设置查询 */
    async sendUserQueryConfig() {
        let data = {
        }
        let res: any = await Utils.Post(HttpPath.userQueryConfig, data);
        C_User.ins.set.init(res.data.language,res.data.languageDesc,res.data.safetyPasswordProtection,res.data.safetyLogin,
            res.data.allowEveryoneFriending,res.data.soundEffect,res.data.messageSound,res.data.messageVibration,
            res.data.competitionRegConfirmation);
    }
    
    
}