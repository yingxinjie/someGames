import { ViewManager } from "../config/ViewManager";
import { CodeStruct, CountryCodeData } from "../../../00_base/script/common/CountryCode";
import { AccountType, EventName, HttpPath, UserSex, ViewEnum, WidgetEnum } from "../config/config";
import ComponentBase from "../../../00_base/script/common/ComponentBase";
import { Utils } from "../config/Utils";
import TimeTickerDown from "../../../00_base/script/common/TimeTickerDown";
import { Tips } from "../../../00_base/script/uiutils/tips";

const { ccclass, property } = cc._decorator;

@ccclass
export default class reg extends ComponentBase {
    @property(cc.Node)
    backBtn: cc.Node = null;
    @property(cc.Node)
    selectCountryCodeBtn: cc.Node = null;


    start() {
        this.TouchOn(this.backBtn, this.backLogin);

        this.TouchOn(this.selectCountryCodeBtn, this.openCountryCode);
        this.TouchOn(this.sendPhoneCodeBtn, this.onSendPhoneCode);
        this.TouchOn(this.phoneNextBtn, this.nextPhoneAccount);

        this.TouchOn(this.sendMailCodeBtn, this.onSendMailCode);
        this.TouchOn(this.mailNextBtn, this.nextMailAccount)
        this.EventOn(EventName.SelectCountryCode, this.onSelectCountryCode);
    }

    private backLogin() {
        ViewManager.Open(ViewEnum.Login);
    }

    private openCountryCode() {
        ViewManager.Alert(WidgetEnum.CountryCode);
    }



    @property(cc.Label)
    private countryCode: cc.Label = null
    @property(cc.Node)
    private sendPhoneCodeBtn: cc.Node = null;
    @property(cc.EditBox)
    private phoneEdit: cc.EditBox = null
    @property(cc.EditBox)
    private phoneCodeEdit: cc.EditBox = null
    @property(cc.EditBox)
    private phonePwdEdit: cc.EditBox = null;
    @property(cc.Node)
    private phoneNextBtn: cc.Node = null;


    private onSelectCountryCode(idx: string) {
        let codeObj: CodeStruct = CountryCodeData[idx];
        this.countryCode.string = codeObj.code;
    }

    /** 手机验证码 */
    private async onSendPhoneCode() {
        let ttd = this.sendPhoneCodeBtn.getComponent(TimeTickerDown) as TimeTickerDown;
        if (ttd.down) {
            return;
        }

        let phone = this.phoneEdit.string;
        let areaCode = this.countryCode.string;
        if (!Utils.IsPhone(phone)) {
            Tips.Show("手机号错误!");
            return;
        }

        if (areaCode == "") {
            Tips.Show("国际码不能为空!")
            return;
        }

        let res: { code: number, msg: string } = await Utils.Post(HttpPath.phoneCaptcha, { phoneAreaCode: areaCode, phoneNumber: phone }) as unknown as { code: number, msg: string };
        console.log("请求手机验证码", JSON.stringify(res));
        if (res.code != 200) {
            cc.error(`请求验证码失败,稍后再试!`)
            return;
        }

        Tips.Show("验证码已发送!")
        ttd.run();
    };


    /** 手机注册 */
    private async nextPhoneAccount() {
        let phone: string = this.phoneEdit.string;
        let pwd: string = this.phonePwdEdit.string;
        let yzm: string = this.phoneCodeEdit.string;
        let areaCode: string = this.countryCode.string;
        if (!Utils.IsPhone(phone)) {
            Tips.Show("手机号不对!")
            return;
        }
        if (yzm.length < 6) {
            Tips.Show("验证码填写错误")
            return;
        }
        if (pwd.length < 6) {
            Tips.Show("密码不能小于6位!");
            return;
        }
        if (areaCode == "") {
            Tips.Show("国际码不能为空!")
            return;
        }

        let info = {
            "phoneAreaCode": areaCode,//区号
            "phoneNumber": phone,//手机号
            "loginPwd": pwd,//密码
            "captcha": yzm,//验证码
            "sex": UserSex.BOY,//性别
            "longitude": "",//
            "latitude": "",
            "ip": "",
            "device": Utils.CheckDeviceType(),
            "deviceInfo": "",
            "userAgent": navigator.userAgent.toLowerCase(),
        }

        console.log("手机注册信息", JSON.stringify(info));
        let res: { code: number, msg: string } = await Utils.Post(HttpPath.phoneReg, info) as unknown as { code: number, msg: string };
        console.log("手机注册返回信息", JSON.stringify(res));
        if (res.code != 200) {
            cc.error(`注册失败,code:${res.code}`);
            Tips.Show("注册失败,稍后再试!");
            return;
        }

        Tips.Show("注册成功!");
        ViewManager.Open(ViewEnum.Login);
    }


    //============================
    @property(cc.Node)
    sendMailCodeBtn: cc.Node = null;
    @property(cc.EditBox)
    private mailEdit: cc.EditBox = null
    @property(cc.EditBox)
    private mailCodeEdit: cc.EditBox = null
    @property(cc.EditBox)
    private mailPwdEdit: cc.EditBox = null;
    @property(cc.Node)
    private mailNextBtn: cc.Node = null;

    /** 邮箱验证码 */
    private async onSendMailCode() {
        let ttd = this.sendMailCodeBtn.getComponent(TimeTickerDown) as TimeTickerDown;
        if (ttd.down) {
            return;
        }

        let mail = this.mailEdit.string;
        if (!Utils.IsMail(mail)) {
            Tips.Show("邮箱格式错误!");
            return;
        }

        let res: { code: number, msg: string } = await Utils.Post(HttpPath.emailCaptcha, { email: mail }) as unknown as { code: number, msg: string };
        console.log("请求邮箱验证码", JSON.stringify(res));
        if (res.code != 200) {
            cc.error(`请求验证码失败,稍后再试!`);
            Tips.Show("验证码获取失败,稍后再试!");
            return;
        }


        Tips.Show("验证码已发送,请到邮箱查收!");
        ttd.run();
    }

    /** 邮箱注册 */
    private async nextMailAccount() {
        let mail: string = this.mailEdit.string;
        let pwd: string = this.mailPwdEdit.string;
        let yzm: string = this.mailCodeEdit.string;
        if (!Utils.IsMail(mail)) {
            Tips.Show("邮箱格式不对!")
            return;
        }
        if (yzm.length < 6) {
            Tips.Show("验证码长度错误")
            return;
        }
        if (pwd.length < 6) {
            Tips.Show("密码不能小于6位!");
            return;
        }

        let info = {
            "email": mail,
            "loginPwd": pwd,
            "captcha": yzm,
            "sex": UserSex.BOY,
            "ip": "",
            "longitude": "",
            "latitude": "",
            "device": Utils.CheckDeviceType(),
            "deviceInfo": "",
            "userAgent": navigator.userAgent.toLowerCase(),
        }
        console.log("邮箱注册信息", JSON.stringify(info));
        let res: { code: number, msg: string } = await Utils.Post(HttpPath.emailReg, info) as unknown as { code: number, msg: string };
        console.log("邮箱注册信息返回", JSON.stringify(res));
        if (res.code != 200) {
            cc.error(`注册失败,code:${res.code}`);
            return;
        }

        Tips.Show("注册成功!");
        ViewManager.Open(ViewEnum.Login);
    }


}
