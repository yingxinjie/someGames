import { UserSex, VipType } from "./config";
import { C_User } from "./C_User";

export class D_User {
    /**uid */
    public uid: string;
    /**昵称 */
    public name: string;
    /**性别 [ BOY, GRIL ]*/
    public sex: UserSex;
    /**头像 */
    public headPic: string;
    /**会员到期时间*/
    public vipValidityPeriod: string;
    /**vip类型 [ BLUE, GOLD, PLATINUM ]*/
    public vipType: VipType;
    /**邮箱 */
    public email: string;
    /**用户编号 */
    public code: string;
    /**个性签名 */
    public description: string;
    /**手机国际地区 */
    public phoneAreaCode: string;
    /**手机号 */
    public phoneNumber: string;
    /**金币 */
    public gold: number;
    /**钻石数量 */
    public diamond: number;
    /**最后登录时间 */
    public lastLoginTime: string;
    /**已创建的俱乐部数量 */
    public clubNum: number;
    /**已加入俱乐部个数量 */
    public joinClubNum: number;

    constructor() {

    }

    init(uid: string, name: string, sex: UserSex, headPic: string, vipValidityPeriod: string, vipType: VipType,
        email: string, code: string, description: string, phoneAreaCode: string, phoneNumber: string, gold: number,
        diamond: number, lastLoginTime: string, clubNum: number, joinClubNum: number) {
        this.uid = uid;
        this.name = name;
        this.sex = sex;
        this.headPic = headPic;
        this.vipValidityPeriod = vipValidityPeriod;
        this.vipType = vipType;
        this.email = email;
        this.code = code;
        this.description = description;
        this.phoneAreaCode = phoneAreaCode;
        this.phoneNumber = phoneNumber;
        this.gold = gold;
        this.diamond = diamond;
        this.lastLoginTime = lastLoginTime;
        this.clubNum = clubNum;
        this.joinClubNum = joinClubNum;
    }

    /**是否是玩家本人 */
    public get isMe(): boolean {
        return C_User.ins.uid == this.uid;
    }
}
