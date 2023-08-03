import { CoinRecordType, DeviceType, DiamondRecordType, HttpPath, LanguageType, LoginType, SexType } from "../config/config";
import { cwebsocket } from "../config/cwebsocket";
import { D_Set } from "../set/D_Set";
import { D_User } from "./D_User";
import { Utils } from "../config/Utils";

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
        if (!Utils.serverCode(res.code)) {
            return;
        }
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
        if (!Utils.serverCode(res.code)) {
            return;
        }
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
        if (!Utils.serverCode(res.code)) {
            return;
        }
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
        if (!Utils.serverCode(res.code)) {
            return;
        }
        this.operateCode = res.data.operateCode;
    }

    /**个人信息查询 */
    async sendUserQuery() {
        let data = {
        }
        let res: any = await Utils.Post(HttpPath.userQuery, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        C_User.ins.me.init(res.data.id, res.data.name, res.data.sex, res.data.handPic, res.data.vipValidityPeriod, res.data.vipType,
            res.data.email, res.data.code, res.data.description, res.data.phoneAreaCode, res.data.phoneNumber, Number(res.data.gold),
            Number(res.data.diamond), res.data.lastLoginTime, res.data.clubNum, res.data.joinClubNum);
    }

    /**个人设置查询 */
    async sendQueryConfig() {
        let data = {
        }
        let res: any = await Utils.Post(HttpPath.userQueryConfig, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        C_User.ins.set.init(res.data.language, res.data.languageDesc, res.data.safetyPasswordProtection, res.data.safetyLogin,
            res.data.allowEveryoneFriending, res.data.soundEffect, res.data.messageSound, res.data.messageVibration,
            res.data.competitionRegConfirmation);
    }

    /**App用户手机注册请求 区号/手机号码/密码/验证码/经度/纬度/设备类型,(enums),ANDROID=安卓,IOS=苹果,WEB=网页/设备详情/浏览器User Agent*/
    async sendPhoneRegister(phoneAreaCode: string, phoneNumber: string, loginPwd: string, captcha: string, longitude: string, latitude: string,
        device: DeviceType, deviceInfo: string, userAgent: string) {
        let data = {
            phoneAreaCode: phoneAreaCode,
            phoneNumber: phoneNumber,
            loginPwd: loginPwd,
            captcha: captcha,
            longitude: longitude,
            latitude: latitude,
            device: device,
            deviceInfo: deviceInfo,
            userAgent: userAgent
        }
        let res: any = await Utils.Post(HttpPath.phoneReg, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        C_User.ins.token = res.data.token;
        C_User.ins.me.name = res.data.name;
        C_User.ins.me.headPic = res.data.headPic;
        C_User.ins.me.sex = res.data.sex;
        C_User.ins.me.vipValidityPeriod = res.data.vipValidityPeriod;
        C_User.ins.me.vipType = res.data.vipType;
    }

    /**手机登录 */
    async sendPhoneLogin(phoneAreaCode: string, phoneNumber: string, loginPwd: string, device: DeviceType, deviceInfo: string,
        longitude: string, latitude: string) {
        let data = {
            phoneAreaCode: phoneAreaCode,
            phoneNumber: phoneNumber,
            loginPwd: loginPwd,
            device: device,
            deviceInfo: deviceInfo,
            longitude: longitude,
            latitude: latitude
        }
        let res: any = await Utils.Post(HttpPath.phoneLogin, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        C_User.ins.token = res.data.token;
        C_User.ins.me.name = res.data.name;
        C_User.ins.me.headPic = res.data.headPic;
        C_User.ins.me.sex = res.data.sex;
        C_User.ins.me.vipValidityPeriod = res.data.vipValidityPeriod;
        C_User.ins.me.vipType = res.data.vipType;
    }

    /**App用户手机验证码创建请求 */
    async sendPhoneCaptcha(phoneAreaCode: string, phoneNumber: string) {
        let data = {
            phoneAreaCode: phoneAreaCode,
            phoneNumber: phoneNumber,
        }
        let res: any = await Utils.Post(HttpPath.phoneCaptcha, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    /**App用户手机验证码创建请求 */
    async sendLoginRecordCreate(device: DeviceType, deviceInfo: string, longitude: string, latitude: string) {
        let data = {
            device: device,
            deviceInfo: deviceInfo,
            longitude: longitude,
            latitude: latitude
        }
        let res: any = await Utils.Post(HttpPath.loginRecordCreate, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    /**绑定手机或者邮箱 手机国际地区,绑定手机的时候必填/手机,绑定手机的时候必填/绑定邮箱的时候必填*/
    async sendBindPhone(type: LoginType, captcha: string, phoneAreaCode: string, phoneNumber: string, email: string) {
        let data = {
            type: type,
            captcha: captcha,
            phoneAreaCode: phoneAreaCode,
            phoneNumber: phoneNumber,
            email: email
        }
        let res: any = await Utils.Post(HttpPath.bindPhone, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    /**App用户Email注册请求 浏览器User Agent*/
    async sendEmailReg(email: string, loginPwd: string, captcha: string, longitude: string, latitude: string, device: DeviceType,
        deviceInfo: string, userAgent: string) {
        let data = {
            email: email,
            loginPwd: loginPwd,
            captcha: captcha,
            longitude: longitude,
            latitude: latitude,
            device: device,
            deviceInfo: deviceInfo,
            userAgent: userAgent
        }
        let res: any = await Utils.Post(HttpPath.emailReg, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        C_User.ins.token = res.data.token;
        C_User.ins.me.name = res.data.name;
        C_User.ins.me.headPic = res.data.headPic;
        C_User.ins.me.sex = res.data.sex;
        C_User.ins.me.vipValidityPeriod = res.data.vipValidityPeriod;
        C_User.ins.me.vipType = res.data.vipType;
    }

    /**邮箱登录 */
    async sendEmailLogin(email: string, loginPwd: string, longitude: string, latitude: string, device: DeviceType, deviceInfo: string) {
        let data = {
            email: email,
            loginPwd: loginPwd,
            device: device,
            deviceInfo: deviceInfo,
            longitude: longitude,
            latitude: latitude
        }
        let res: any = await Utils.Post(HttpPath.emailLogin, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        C_User.ins.token = res.data.token;
        C_User.ins.me.name = res.data.name;
        C_User.ins.me.headPic = res.data.headPic;
        C_User.ins.me.sex = res.data.sex;
        C_User.ins.me.vipValidityPeriod = res.data.vipValidityPeriod;
        C_User.ins.me.vipType = res.data.vipType;
    }

    /**邮箱验证码 */
    async sendEmailCaptcha(email: string) {
        let data = {
            email: email
        }
        let res: any = await Utils.Post(HttpPath.emailCaptcha, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    /**个人配置信息更新 */
    async sendConfigUpdate(language: LanguageType,
        safetyPasswordProtection: boolean,
        safetyPassword: string,
        safetyLogin: boolean,
        allowEveryoneFriending: boolean,
        soundEffect: boolean,
        messageSound: boolean,
        messageVibration: boolean,
        competitionRegConfirmation: boolean) {
        let data = {
            language: language,
            safetyPasswordProtection: safetyPasswordProtection,
            safetyPassword: safetyPassword,
            safetyLogin: safetyLogin,
            allowEveryoneFriending: allowEveryoneFriending,
            soundEffect: soundEffect,
            messageSound: messageSound,
            messageVibration: messageVibration,
            competitionRegConfirmation: competitionRegConfirmation
        }
        let res: any = await Utils.Post(HttpPath.configUpdate, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        C_User.ins.set.init(res.data.language, res.data.languageDesc, res.data.safetyPasswordProtection, res.data.safetyLogin,
            res.data.allowEveryoneFriending, res.data.soundEffect, res.data.messageSound, res.data.messageVibration,
            res.data.competitionRegConfirmation);
    }

    /**基础信息更新 */
    async sendBaseInfoUpdate(name: string, description: string, sex: SexType, headPic: string) {
        let data = {
            name: name,
            description: description,
            sex: sex,
            headPic: headPic
        }
        let res: any = await Utils.Post(HttpPath.baseInfoUpdate, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    /**用户申请加入俱乐部 */
    async sendApplyToJoin(clubId: number, applyRemark: string) {
        let data = {
            clubId: clubId,
            applyRemark: applyRemark
        }
        let res: any = await Utils.Post(HttpPath.applyToJoin, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    /**联盟图标 */
    async sendUploadIcon() {
        let data = {

        }
        let res: any = await Utils.Post(HttpPath.uploadIcon, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    /**俱乐部图标 */
    async sendUploadClub() {
        let data = {

        }
        let res: any = await Utils.Post(HttpPath.uploadClub, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    /**玩家头像 */
    async sendUploadAvatar() {
        let data = {

        }
        let res: any = await Utils.Post(HttpPath.uploadAvatar, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
    }

    diamondRecordArr:DiamondRecord[];
    /**钻石记录列表查询 */
    async sendDiamondRecordList(current: number) {
        let data = {
            current: current,
            size: 20
        }
        let res: any = await Utils.Post(HttpPath.diamondRecordList, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        this.diamondRecordArr = res.data;
    }

    coinRecordArr:CoinRecord[];
    /**钻石记录列表查询 */
    async sendCoinRecordList(current: number) {
        let data = {
            current: current,
            size: 20
        }
        let res: any = await Utils.Post(HttpPath.coinRecordList, data);
        if (!Utils.serverCode(res.code)) {
            return;
        }
        this.coinRecordArr = res.data;
    }
}

export interface DiamondRecord {
    id: number;
    /**记录类型,(enums),RECHARGE=充值,CONSUME=消耗,BUYGOODS=购买商品,RECHARGEUNION=充值联盟币,
     * RECHARGECLUB=充值俱乐部,CREATEUNION=创建联盟,
     * UPGRADEVIP=升级用户VIP,UPGRADECLUBVIP=升级俱乐部VIP,
     * UPGRADEUNION=升级联盟VIP,REVISEUNIONNAME=修改联盟名称 */
    recordType: DiamondRecordType;
    /**联盟id */
    recordTypeDesc: string;
    /**俱乐部名称 */
    number: string;
    /**申请描述*/
    remarks: string;
    /**申请描述*/
    createDateTime: string;
}

export interface CoinRecord {
    /**id */
    id: number,
    /**记录类型,(enums),RECHARGE=充值,CONSUME=消耗 */
    recordType: CoinRecordType,
    /**记录类型,(enums),RECHARGE=充值,CONSUME=消耗 */
    recordTypeDesc: string,
    /**记录数量 */
    number: string,
    /**记录备注 */
    remarks: string,
    /**记录时间 */
    createDateTime: string
}