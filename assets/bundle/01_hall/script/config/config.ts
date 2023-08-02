import { bundleLoader } from "../../../../script/bundleLoader";
import { C_User } from "./C_User";

export class config{
    private _langObj:Object;

    public static _instance: config = null;
    public static get instance():config{
        if(!this._instance){
            this._instance = new config();
        }
        return this._instance;
    }

    constructor() {
        
    }

    public onloadConfig() {
        let bundle = bundleLoader.ENUM_BUNDLE_SAVE[bundleLoader.ENUM_BUNDLE.HALL];
        bundle.load("json/seatpos", (err, asset: cc.JsonAsset) => {
            if (err) {
                return cc.error(err)
            }
            C_User.ins.seatPJson = asset.json
        })

        bundle.load("json/lightpos", (err, asset: cc.JsonAsset) => {
            if (err) {
                return cc.error(err)
            }
            C_User.ins.lightPJson = asset.json
        })
        bundle.load("json/lang", (err, asset: cc.JsonAsset) => {
            if (err) {
                return cc.error(err)
            }
            this._langObj = asset.json
        })
    }

    public getLang(id: number):string{
        return this._langObj[id];
    }
}
/** 值对应预制体名称 */
export enum ViewEnum {
    Reset = "reset",
    Reg = 'reg',
    Login = "login",
    FaXian = "faxian",
    Create = "create0",
    Game = "game",
}

/** 弹出组件的枚举 */
export enum WidgetEnum {
    BottomToggle = "bottomtoggle",
    CountryCode = "countrycode",
    JoinDesk = "joinDesk",
    GameSetting = "gameSetting",
    AlertAddClub = "alertAddClub",
}

/** 全局配置参数 */
export const GlobalConfig = {
    IPort: "175.27.169.117:4000",
    // IPort: "192.168.31.39:4000",

}

/** http请求的路径整理 */
export const HttpPath = {
    //App用户备注Controller
    userRemark:"/zs/userRemark/remark",//玩家备注
    queryUserRemark:"/zs/userRemark/query",//查询备注
    //App用户Controller
    userSearch:"/zs/user/search",//根据关键字查询用户信息，用户编号或用户名称
    safetyValidate:"/zs/user/safetyValidate",//安全验证
    userQuery:"/zs/user/query",//个人信息查询
    userQueryConfig:"/zs/user/queryConfig",//个人设置查询
    phoneReg: "/zs/user/phone/register",//手机注册
    phoneLogin: "/zs/user/phone/login",//手机登录
    phoneCaptcha: "/zs/user/phone/captcha",//手机验证码
    emailReg: "/zs/user/email/register",//邮箱注册
    loginRecordCreate:"/zs/user/loginRecord/create",//最后登录信息更新
    bingPhone:"/zs/user/loginInfo/bindPhone",//绑定手机或者邮箱
    emailRegister:"/zs/user/email/register",//绑定手机或者邮箱
    emailLogin: "/zs/user/email/login",//邮箱登录
    emailCaptcha: "/zs/user/email/captcha",//邮箱验证码
    configUpdate:"/zs/user/config/update",//个人配置信息更新
    baseInfoUpdate:"/zs/user/basic-info/update",//基础信息更新
    applyToJoin:"/zs/user/applyToJoin",//用户申请加入俱乐部
    //上传Controller
    uploadIcon:"/zs/upload/icon",//联盟图标
    uploadClub:"/zs/upload/club",//俱乐部图标
    uploadAvatar:"/zs/upload/avatar",//玩家头像
    //联盟等级Controller
    unionLevelQuery:"/zs/unionLevel/query",//联盟等级查询
    unionLevelListQuery:"/zs/unionLevel/list/query",//列表查询创建的联盟等级
    //联盟币Controller
    unionCoinRecycle:"/zs/unionCoin/recycle",//联盟币回收
    unionCoinQuery:"/zs/unionCoin/query",//联盟币流水详情
    unionCoinPageRecord:"/zs/unionCoin/pageRecord",//联盟币流水查询
    unionCoinGrant:"/zs/unionCoin/grant",//联盟币发放
    unionCoinCharge:"/zs/unionCoin/charge",//联盟币充值
    //联盟Controller
    unionUpdate: "/zs/union/update",//更新
    unionSearch: "/zs/union/search",//搜索
    unionRename: "/zs/union/rename",//更改名称
    unionQuery:"/zs/union/query",//查询
    unionPageApply:"/zs/union/page/apply",//分页查询俱乐部申请列表
    unionLevelUp:"/zs/union/levelUp",//提升等级
    unionKickout:"/zs/union/kickout",//把俱乐部提出联盟
    unionDissolution:"/zs/union/dissolution",//解散
    unionCreate:"/zs/union/create",//创建
    unionReject:"/zs/union/apply/reject",//拒绝俱乐部申请
    unionAccept:"/zs/union/apply/accept",//同意俱乐部申请
    //道具Controller
    propsQuery:"/zs/props/query",//查询道具详情
    propsList: "/zs/props/list",//查询道具列表
    //消息通知Controller
    notifyQuery: "/zs/notify/query",//通知查询
    notifyMarkRead: "/zs/notify/markRead",//批量已读
    notifyList:"/zs/notify/list",//列表查询
    //商品Controller
    goodsQuery:"/zs/goods/query",//查询商品详情
    goodsList:"/zs/goods/list",//查询商品列表
    //游戏Controller
    gameList:"/zs/game/list",//列表查询
    //社交Controller
    friendsSearch:"/zs/friends/search",//好友查询
    friendsReject:"/zs/friends/reject",//好友申请拒绝
    friendsPage:"/zs/friends/page",//好友列表
    friendsPageApply:"/zs/friends/pageApply",//好友申请列表查询
    friendsDelete:"/zs/friends/delete",//好友删除
    friendsApprove:"/zs/friends/approve",//好友申请通过
    friendsApply:"/zs/friends/apply",//好友申请
    //钻石记录Controller
    diamondRecordList:"/zs/diamondRecord/list",//列表查询
    //桌子Controller
    queryByDeskCode:"/zs/desk/queryByDeskCode",//根据桌子的code查询桌子信息
    deskList:"/zs/desk/list",//列表查询
    deskCreate:"/zs/desk/create",//创建
    deskConfig:"/zs/desk/configuration",//桌子配置项查询
    //金币记录Controller
    coinRecordList:"/zs/coinRecord/list",//金币记录
    //俱乐部玩家Controller
    setClubPlayerRole:"/zs/clubPlayer/setClubPlayerRole",//为俱乐部添加新角色
    pageClubPlayerQuery:"/zs/clubPlayer/pageClubPlayer/query",//分页查询俱乐部会员列表
    //俱乐部等级Controller
    clubLevelQuery:"/zs/clubLevel/query",//查询俱乐部等级
    clubLevelListQuery:"/zs/clubLevel/list/query",//列表查询创建的俱乐部等级
    //俱乐部基金Controller
    clubFundQuery:"/zs/clubFund/query",//俱乐部基金流水详情
    clubFundPageRecord:"/zs/clubFund/pageRecord",//俱乐部基金流水查询
    clubFundGrant:"/zs/clubFund/grant",//俱乐部基金发放
    clubFundCharge:"/zs/clubFund/charge",//俱乐部基金充值
    //俱乐部币Controller
    clubCoinReject:"/zs/clubCoin/reject",//俱乐部币申请拒绝
    clubCoinRecycle:"/zs/clubCoin/recycle",//俱乐部币回收
    clubCoinQuery:"/zs/clubCoin/query",//俱乐部币流水详情
    clubCoinPageRecord:"/zs/clubCoin/pageRecord",//俱乐部币流水查询
    clubCoinPageApply:"/zs/clubCoin/pageApply",//俱乐部币申请列表查询
    clubCoinGrant:"/zs/clubCoin/grant",//俱乐部币发放
    clubCoinApply:"/zs/clubCoin/apply",//俱乐部币申请
    clubCoinAccept:"/zs/clubCoin/accept",//俱乐部币申请审批
    //俱乐部玩家申请及审批Controller
    clubApplyToJoinQuery:"/zs/clubApply/pageApplyToJoin/query",//分页查询用户申请加入俱乐部列表
    clubApplyReject:"/zs/clubApply/approve/reject",//用户俱乐部申请审批拒绝操作
    clubApplyAccept:"/zs/clubApply/approve/accept",//用户俱乐部申请审批通过操作
    //俱乐部Controller
    clubUpdate:"/zs/club/update",//更新
    clubUnionQuit:"/zs/club/union/quit",//俱乐部退出联盟
    unionClubPage:"/zs/club/union-club/page",//分页查询联盟的俱乐部
    clubSearch:"/zs/club/search",//根据关键字查询俱乐部信息，俱乐部编号或俱乐部名称
    clubQuit:"/zs/club/quit",//退出俱乐部
    clubQuery:"/zs/club/query",//查询俱乐部信息
    clubListQuery:"/zs/club/list/query",//列表查询创建的俱乐部
    clubLevelUp:"/zs/club/levelUp",//俱乐部提升等级
    clubJoinedPage:"/zs/club/joined/page",//分页查询已经加入的俱乐部
    clubDissolution:"/zs/club/dissolution",//删除解散
    clubCreate:"/zs/club/create",//创建
    clubApplyToJoin:"/zs/club/applyToJoin",//俱乐部申请加入联盟
}

export enum ComUseStr {
    UrlParamAddressKey = "address",
}

/** 登录账号的类型枚举 */
export enum AccountType {
    nomall,
    Phone,
    Mail,
}

/** 事件名称枚举 */
export enum EventName {
    SelectCountryCode = "SelectCountryCode",
}

/** 性别 */
export enum UserSex {
    BOY = "BOY",
    GIRL = "GIRL",
}

/** 设备类型 */
export enum DeviceType {
    Android = "ANDROID",
    Ios = "IOS",
    Web = "WEB",
}

/** vip类型 */
export enum VipType {
    BLUE = "BLUE",
    GOLD = "GOLD",
    PLATINUM = "PLATINUM",
}
