import { PropsType } from "../config/config";

export class D_DeskConfig {
    data: DeskConfig;

    init(data: any) {
        this.data = data;
    }

    get DZBet():string[]{
        let arr = [];
        for(let k in this.data.betTree){
            arr.push(k);
        }
        console.log(arr.length)
        return arr;
    }

    getDZBetInfo(key):BetTree{
        return this.data.betTree[key];
    }

    get DZpersonNums():string[]{
        let arr = [];
        for(let i=0;i<this.data.person.length;i++){
            let personNum = this.data.person[i].personNum;
            arr.push(personNum);
        }
        return arr;
    }

    getDZAutoStartNum(key):string[]{
        for(let i=0;i<this.data.person.length;i++){
            let personNum = this.data.person[i].personNum;
            if(personNum == key){
                return this.data.person[i].autoStartNum;
            }
        }
        return null;
    }

    get DZduration():string[]{
        return this.data.duration;
    }
    get DZscoreBoardMultiple():ScoreBoardMultiple{
        return this.data.scoreBoardMultiple;
    }
    get DZminScoreBoardMultiple():string[]{
        return this.data.minScoreBoardMultiple;
    }
    get DZminJoinChance():string[]{
        return this.data.minJoinChance;
    }
    get DZcappedBigBlind():string[]{
        return this.data.cappedBigBlind;
    }
    get DZtotalLotLimit():string[]{
        return this.data.totalLotLimit;
    }
    get DZserviceRate():string[]{
        return this.data.serviceRate;
    }
}

export interface DeskConfig {
    /**	大小盲带入记分牌及前注相关选项 */
    betTree: BetTree[];
    /**	人数设置及自动开始人数可选值 */
    person: Person[];
    /**	牌局时长 */
    duration: string[];
    /** 带入记分牌倍数 */
    scoreBoardMultiple: ScoreBoardMultiple;
    /**	最小保留记分牌倍数 */
    minScoreBoardMultiple: string[];
    /** 最低入池率*/
    minJoinChance: string[];
    /** 封顶(大盲)*/
    cappedBigBlind: string[];
    /** 总手数限制*/
    totalLotLimit: string[];
    /** 服务费*/
    serviceRate: string[];
}



export interface BetTree {
    sb: string;
    bb: string;
    antes: string[];
    scoreBoard: string;
}

export interface Person {
    /**personNum: 桌子人数 */
    personNum: string;
    /**autoStartNum : 自动开始人数选项 0为否 */
    autoStartNum: string[];
}

export interface ScoreBoardMultiple {
    select: string[];
    show: string[];
}
