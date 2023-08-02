import { ViewManager } from "../config/ViewManager";
import { Utils } from "../config/Utils";
import ComponentBase from "../../../00_base/script/common/ComponentBase";
import { AccountType, EventName, HttpPath, ViewEnum, WidgetEnum } from "../config/config";
import { CodeStruct, CountryCodeData } from "../../../00_base/script/common/CountryCode";
import { C_User } from "../config/C_User";
import { Tips } from "../../../00_base/script/uiutils/tips";

const { ccclass, property } = cc._decorator;

@ccclass
export default class login extends ComponentBase {

    @property(cc.Node)
    selectBtn: cc.Node = null;
    @property(cc.Label)
    countryCode: cc.Label = null;

    @property(cc.Node)
    resetBtn: cc.Node = null
    @property(cc.Node)
    regBtn: cc.Node = null

    @property(cc.Node)
    phoneLoginBtn: cc.Node = null
    @property(cc.Node)
    mailLoginBtn: cc.Node = null

    start() {
        this.TouchOn(this.selectBtn, this.openCountryCode);
        this.TouchOn(this.resetBtn, this.openResetPanel);
        this.TouchOn(this.regBtn, this.openRegPanel);
        this.TouchOn(this.phoneLoginBtn, this.phoneLogin);
        this.TouchOn(this.mailLoginBtn, this.mailLogin);

        this.EventOn(EventName.SelectCountryCode, this.onSelectCountryCode);
    }

    private openCountryCode() {
        ViewManager.Alert(WidgetEnum.CountryCode);
    }

    private onSelectCountryCode(idx: string) {
        let codeObj: CodeStruct = CountryCodeData[idx];
        this.countryCode.string = codeObj.code;
    }

    /** 重置密码 */
    private openResetPanel() {
        ViewManager.Open(ViewEnum.Reset);
    }

    /** 注册新账号 */
    private openRegPanel() {
        ViewManager.Open(ViewEnum.Reg);
    }


    @property(cc.Label)
    private phoneAreaCode: cc.Label = null;
    @property(cc.EditBox)
    private phoneEdit: cc.EditBox = null;
    @property(cc.EditBox)
    private phonePwd: cc.EditBox = null;

    /** 点击了手机登录的按钮 */
    private async phoneLogin() {
        let phone: string = this.phoneEdit.string;
        let pwd: string = this.phonePwd.string;
        let code: string = this.phoneAreaCode.string;
        if (!Utils.IsPhone(phone)) {
            Tips.Show("请输入正确的手机号!");
            return;
        }
        if (pwd.length < 6) {
            Tips.Show("密码长度不够,至少6位字符!");
            return;
        }
        if (!this.phoneAreaCode || code == "") {
            Tips.Show("请选择区位码!");
            return;
        }

        let data = {
            phoneAreaCode: this.phoneAreaCode.string,
            phoneNumber: phone,
            loginPwd: pwd,
            device: Utils.CheckDeviceType(),
            deviceInfo: "",
            longitude: "",
            latitude: "",
            ip: "",
        }
        console.log("请求数据", JSON.stringify(data))
        let res: any = await Utils.Post(HttpPath.phoneLogin, data);
        console.log("登录数据返回", JSON.stringify(res))
        if (res.code != 200) {
            cc.error("手机登陆请求错误", HttpPath.phoneLogin, JSON.stringify(res));
            return;
        }

        C_User.ins.me.uid = res.uuid;
        C_User.ins.me.name = res.data.name;
        C_User.ins.me.headPic = res.data.headPic;
        C_User.ins.me.sex = res.data.sex;
        C_User.ins.me.vipValidityPeriod = res.data.vipValidityPeriod;
        C_User.ins.me.vipType = res.data.vipType;
        C_User.ins.uid = res.uuid;
        C_User.ins.token = res.data.token;

        await ViewManager.Alert(WidgetEnum.BottomToggle);
        await ViewManager.Open(ViewEnum.FaXian);
    }

    @property(cc.EditBox)
    private mailEdit: cc.EditBox = null;
    @property(cc.EditBox)
    private mailPwd: cc.EditBox = null;

    private async mailLogin() {
        let mail: string = this.mailEdit.string;
        let pwd: string = this.mailPwd.string;
        if (!Utils.IsMail(mail)) {
            Tips.Show("请输入正确的邮箱!");
            return;
        }
        if (pwd.length < 6) {
            Tips.Show("密码长度不够,至少6位字符!");
            return;
        }

        let data = {
            email: mail,
            loginPwd: pwd,
            ip: "",
            longitude: "",
            latitude: "",
            device: Utils.CheckDeviceType(),
            deviceInfo: "",
            userAgent: navigator.userAgent.toLowerCase(),
        }

        console.log("请求数据", JSON.stringify(data))
        let res: any = await Utils.Post(HttpPath.emailLogin, data);
        console.log("登录数据返回", JSON.stringify(res))
        if (res.code != 200) {
            cc.error("手机登陆请求错误", HttpPath.emailLogin, JSON.stringify(res));
            return;
        }

        C_User.ins.uid = res.uuid;
        C_User.ins.me.name = res.data.name;
        C_User.ins.me.headPic = res.data.headPic;
        C_User.ins.me.sex = res.data.sex;
        C_User.ins.me.vipValidityPeriod = res.data.vipValidityPeriod;
        C_User.ins.me.vipType = res.data.vipType;
        C_User.ins.me.uid = res.uuid;
        C_User.ins.token = res.data.token;

        await ViewManager.Alert(WidgetEnum.BottomToggle);
        await ViewManager.Open(ViewEnum.FaXian);
    }

}