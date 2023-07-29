import { cwebsocket } from "./cwebsocket";

class userInfo {
    private static sing: userInfo = null

    public static get ins(): userInfo {
        if (this.sing == null) {
            this.sing = new userInfo();
        }
        return this.sing;
    }

    private _uuid: string = "";

    /** uid */
    public set uuid(val: string) {
        cc.sys.localStorage.setItem("uuid", val);
        this._uuid = val;
    }
    /** uid */
    public get uuid(): string {
        let uuid: string = cc.sys.localStorage.getItem("uuid");
        if (!uuid || uuid == "") {
            return "";
        }

        this._uuid = uuid;
        return this._uuid;
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

    public get testToken(){
        return "5711fc33df744a87380896b1ac3d11359c4dd1d368898d74fe81cdb74a1cccb7"
    }

    public get testuuid(){
        return 42
    } 

    /** 昵称 */
    public nick: string = "";
    /** 金币 */
    public gold: number = 0;
    /** 年龄 */
    public gender: string = "";
    /** 游戏id */
    public gameid: number = 0;
    /** 房间id */
    public roomid: number = 0;
    /** 前 */
    public money: number = 0;


    public headPic: string = "";

    public vipValidityPeriod: string = "";

    public vipType: string = "";

    public uid: string = "";

    public code: string = "";

    public phoneAreaCode: string = "";

    public phoneNumber: string = "";

    public diamond: number = 0;

    public lastLoginTime: string = ""

    public clubNum: number = 0;

    public joinClubNum: number = 0;

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
}

/** 玩家信息 */
export const UserInfo = userInfo.ins;