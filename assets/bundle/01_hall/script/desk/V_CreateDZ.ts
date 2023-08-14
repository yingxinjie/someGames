// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { WidgetEnum, config } from "../config/config";
import { Message } from "../config/Message";
import { C_Game, Game } from "../game/C_Game";
import { C_Hall } from "../hall/C_Hall";
import { C_Desk } from "./C_Desk";
import { DeskProgress } from "./DeskProgress";
import { DeskConfig, D_DeskConfig } from "./D_DeskConfig";
import V_DZBottomBar from "./V_DZBottomBar";
import { DeskProgressRange } from "./DeskProgressRange";
import { C_Club } from "../club/C_Club";
import { D_Club } from "../club/D_Club";
import { ViewManager } from "../config/ViewManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class V_CreateDZ extends cc.Component {
    @property(cc.Node)
    games: cc.Node = null;
    @property(cc.EditBox)
    nick: cc.EditBox = null;
    @property(cc.Label)
    sbBb: cc.Label = null;
    @property(cc.Label)
    scoreBoard: cc.Label = null;
    @property(V_DZBottomBar)
    bottomBar: V_DZBottomBar = null;
    @property(DeskProgress)
    P_SbBb: DeskProgress = null;
    @property(DeskProgress)
    P_PersonNum: DeskProgress = null;
    @property(DeskProgress)
    P_AutoStartNum: DeskProgress = null;
    @property(DeskProgress)
    P_Ante: DeskProgress = null;
    @property(DeskProgress)
    P_Duration: DeskProgress = null;
    @property(DeskProgressRange)
    P_ScoreBoardMultiple: DeskProgressRange = null;
    @property(DeskProgress)
    P_MinScoreBoardMultiple: DeskProgress = null;
    @property(DeskProgress)
    P_MinJoinChance: DeskProgress = null;
    @property(DeskProgress)
    P_TotalPlayNumLimit: DeskProgress = null;
    @property(DeskProgress)
    P_ServiceRate: DeskProgress = null;
    @property(DeskProgress)
    P_CappedBigBlind: DeskProgress = null;
    @property(cc.Toggle)
     /**限iOS */
    T_ios: cc.Toggle = null;
    @property(cc.Toggle)
    /**强制盲注*/
    T_blind: cc.Toggle = null;
    @property(cc.Toggle)
    /**控制玩家代入*/
    T_playerInvite: cc.Toggle = null; 
    @property(cc.Toggle)
    /**保险模式*/
    T_insurance: cc.Toggle = null; 
    @property(cc.Toggle)
    /**GPS限制*/
    T_gps: cc.Toggle = null; 
    @property(cc.Toggle)
    /**IP限制 */
    T_ipRestriction: cc.Toggle = null;
    @property(cc.Toggle)
    /**全下或弃牌 */
    T_allinFold: cc.Toggle = null; 
    @property(cc.Toggle)
    /**延迟看牌 */
    T_delayedCheck: cc.Toggle = null; 
    @property(cc.Toggle)
    /**允许带出记分牌*/
    T_scoreboardAllowed: cc.Toggle = null; 
    @property(cc.Toggle)
    /**隐藏小数*/
    T_hideDecimals: cc.Toggle = null; 
    @property(cc.Node)
    clubTitle:cc.Node = null;
    @property(cc.Node)
    clubItem:cc.Node = null;
    @property(cc.Node)
    clubKong:cc.Node = null;
    @property(cc.Node)
    clubToggle:cc.Node = null;

    // LIFE-CYCLE CALLBACKS:
    onDisable(){
        C_Hall.evt.off(Message.gameList, this.gameList, this);
        C_Hall.evt.off(Message.deskConfig, this.deskConfig, this);
        C_Hall.evt.off(Message.createDZBetChange, this.betChange, this);
        C_Hall.evt.off(Message.clubJoined, this.bindClub, this);

    }
    // onLoad () {}
    private gameListBn:boolean;
    private clubJoinedBn:boolean;
    private get canCreateBn():boolean{
        return this.gameListBn && this.clubJoinedBn;
    }
    start() {
        this.gameListBn = false;
        this.clubJoinedBn = false;
        C_Hall.evt.on(Message.gameList, this.gameList, this);
        C_Hall.evt.on(Message.deskConfig, this.deskConfig, this);
        C_Hall.evt.on(Message.createDZBetChange, this.betChange, this);
        C_Hall.evt.on(Message.clubJoined, this.bindClub, this);
        this.init();
    }

    private gameList() {
        this._gameArr= C_Game.instance.gameArr;
        this.getDeskConfig();
    }

    private deskConfig(){
        //牌桌配置获取完成
        this.bindDeskConfig();
    }

    /**倍率变更大小王/带入记分牌变化 */
    private betChange(name:string){
        console.log(name);
        if(name == "P_SbBb<DeskProgress>"){
            this.bindSBBB();
            this.bindScoreBoard();
            this.changeListAntes();
        }
        if(name == "P_PersonNum<DeskProgress>"){
            this.changeListAutoStartNum();
        }
    }

    init(){
        this.getGameList();
    }

    /**牌桌配置*/
    private config:D_DeskConfig;
    private bindDeskConfig(){
        this.gameListBn = true;
        let index:number = C_Game.instance.getIndexByGameId(this.gameId);
        this.config = C_Desk.instance.deskConfigArr[index];
        this.bindBetTree();
        this.bindSBBB();
        this.bindScoreBoard();
        this.bindPerson();
        this.bindAutoStartNum();
        this.bindAnte();
        this.bindDuration();
        this.bindScoreBoardMultiple();
        this.bindMinScoreBoardMultiple();
        this.bindMinJoinChance();
        this.bindTotalLotLimit();
        this.bindServiceRate();
        this.bindCappedBigBlind();
        this.getMyClub();
    }

    private bindBetTree(){
        this.P_SbBb.init(0,this.config.DZBet,null,false);

    }

    private sb:string;
    private bb:string;
    private bindSBBB(){
        this.sb = this.config.getDZBetInfo(this.P_SbBb.select).sb;
        this.bb = this.config.getDZBetInfo(this.P_SbBb.select).bb;
        this.sbBb.string = this.sb +"/"+this.bb;
    }

    private bindScoreBoard(){
        this.scoreBoard.string = this.config.getDZBetInfo(this.P_SbBb.select).scoreBoard;
    }

    private changeListAntes(){
        let antes = this.config.getDZBetInfo(this.P_SbBb.select).antes;
        this.P_Ante.listChange( antes,antes);
    }

    private bindPerson(){
        this.P_PersonNum.init(0,this.config.DZpersonNums,this.config.DZpersonNums,true)
    }

    private changeListAutoStartNum(){
        let autoStartNum = this.config.getDZAutoStartNum(this.P_PersonNum.select);
        let autoStartNumStr = [...autoStartNum];
        autoStartNumStr[0] = config.instance.getLang(1000);
        this.P_AutoStartNum.listChange( autoStartNum,autoStartNumStr);
    }

    private bindAutoStartNum(){
        let autoStartNum = this.config.getDZAutoStartNum(this.P_PersonNum.select);
        let autoStartNumStr = [...autoStartNum];
        autoStartNumStr[0] = config.instance.getLang(1000);
        this.P_AutoStartNum.init(0,autoStartNum,autoStartNumStr,true)
    }

    private bindAnte(){
        let antes = this.config.getDZBetInfo(this.P_SbBb.select).antes;
        this.P_Ante.init(0,antes,antes,true)
    }
    
    private bindDuration(){
        let duration = this.config.DZduration;
        this.P_Duration.init(0,duration,duration,true)
    }

    private bindScoreBoardMultiple(){
        let score = this.config.DZscoreBoardMultiple.select;
        this.P_ScoreBoardMultiple.init(0,score.length-1,score,score,false)
        let show = this.config.DZscoreBoardMultiple.show;
        for(let i=0;i<show.length;i++){
            let item:cc.Label = this.P_ScoreBoardMultiple.node.getChildByName("num"+i).getComponent(cc.Label);
            item.string = show[i];
        }
    }

    private bindMinScoreBoardMultiple(){
        let min = this.config.DZminScoreBoardMultiple;
        this.P_MinScoreBoardMultiple.init(0,min,min,false)
    }

    private bindMinJoinChance(){
        let minJoin = this.config.DZminJoinChance;
        let minJoinStr = [...minJoin];
        minJoinStr[0] = config.instance.getLang(1001);
        this.P_MinJoinChance.init(0,minJoin,minJoinStr,true)
    }

    private bindTotalLotLimit(){
        let limit = this.config.DZtotalLotLimit;
        let limitStr = [...limit];
        limitStr[0] = config.instance.getLang(1001);
        this.P_TotalPlayNumLimit.init(0,limit,limitStr,true)
    }

    private bindServiceRate(){
        let rate = this.config.DZserviceRate;
        this.P_ServiceRate.init(0,rate,rate,true)
    }

    private bindCappedBigBlind(){
        let capped = this.config.DZcappedBigBlind;
        let cappedStr = [...capped];
        cappedStr[cappedStr.length-1] = config.instance.getLang(1001);
        this.P_CappedBigBlind.init(0,capped,cappedStr,true)
    }

    private getMyClub(){
        let arr = C_Club.instance.joinedClub;
        if(arr){
            this.bindClub();
        }else{
            C_Club.instance.sendClubJoinedPage(4);
        }
        
    }

    private bindClub(){
        this.clubJoinedBn = true;
        let arr = C_Club.instance.joinedClub;
        if(arr && arr.length>0){
            this.clubTitle.active = true;
            this.clubItem.active = true;
            this.clubKong.active = true;
            for(let i=0;i<arr.length;i++){
                let data:D_Club = arr[i];
                let item = cc.instantiate(this.clubToggle).getComponent(cc.Toggle);
                item.node.parent = this.clubToggle.parent;
                let nameLabel:cc.Label = item.node.getChildByName("name").getComponent(cc.Label);
                nameLabel.string = data.name;
                item.isChecked = i==0;
                item.node.active = true;
            }
        }else{
            this.clubTitle.active = false;
        }
    }

    private _gameArr: Game[];
    private getGameList() {
        if(!C_Game.instance.gameArr){
            this._gameArr = [];
            this.doGameList();
        }else{
            this._gameArr = C_Game.instance.gameArr;
            this.getDeskConfig();
        }
    }

    private doGameList() {
        C_Game.instance.sendGameList();
    }

    private getDeskConfig(){
        let index:number = C_Game.instance.getIndexByGameId(this.gameId);
        if(C_Desk.instance.deskConfigArr && C_Desk.instance.deskConfigArr[index]){
            this.bindDeskConfig();
        }else{
            C_Desk.instance.sendDeskConfig(this.gameInfo.id);
        }
        
    }

    private get gameInfo():Game{
        return this._gameArr[0];
    }

    private get gameId():string{
        return this.gameInfo.id;
    }

    private bindDeskInfo(){
        let data = C_Desk.instance.deskInfo;
        let arr = C_Club.instance.joinedClub;
        if(arr && arr.length>0){
            let club:D_Club = this.selectClub();
            data.clubId = club.id;
            data.unionId = club.zsGameUnionId;
        }else{
            data.clubId = null;
            data.unionId = null;
        }
        data.gameId = Number(this.gameId);
        data.nick = this.nick.string;
        data.betType = this.P_SbBb.select;
        data.scoreBoard = this.scoreBoard.string;
        data.sb = this.sb, 
        data.bb = this.bb,
        data.personNum = this.P_PersonNum.select;
        data.autoStartNum = this.P_AutoStartNum.select;
        data.ante = this.P_Ante.select; 
        data.duration = this.P_Duration.select;
        data.scoreBoardMultiple = this.P_ScoreBoardMultiple.select;
        data.minScoreBoardMultiple = this.P_MinScoreBoardMultiple.select;
        data.serviceRate = this.P_ServiceRate.select;
        data.ios = this.T_ios.isChecked;
        data.blind = this.T_blind.isChecked;
        data.playerInvite = this.T_playerInvite.isChecked;
        data.insurance = this.T_insurance.isChecked;
        data.gps = this.T_gps.isChecked;
        data.ipRestriction = this.T_ipRestriction.isChecked;
        data.allinFold = this.T_allinFold.isChecked;
        data.delayedCheck = this.T_delayedCheck.isChecked;
        data.scoreboardAllowed = this.T_scoreboardAllowed.isChecked;
        data.hideDecimals = this.T_hideDecimals.isChecked;
        // data.unionIds = "";
        data.totalPlayNumLimit = this.P_TotalPlayNumLimit.select;
        data.minJoinChance = this.P_MinJoinChance.select;
        data.cappedBigBlind = this.P_CappedBigBlind.select;
    }

    private selectClub():D_Club{
        let toggleCon:cc.ToggleContainer = this.clubItem.getComponent(cc.ToggleContainer);
        let toggleArr = toggleCon.toggleItems;
        for(let i=0;i<toggleArr.length;i++){
            let toggle:cc.Toggle = toggleArr[i];
            if(toggle.isChecked){
                return C_Club.instance.joinedClub[i];
            }
        }
        return null;
    }

    private begin(e){
        if(this.canCreateBn){
            this.bindDeskInfo();
            C_Desk.instance.sendDeskCreate();
        }
    }

    private close(e){
        ViewManager.RemoveAlert(WidgetEnum.CreateDZ);
    }
    // update (dt) {}
}
