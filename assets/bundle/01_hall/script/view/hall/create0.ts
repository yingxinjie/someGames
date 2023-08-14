// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { Message } from "../../config/Message";
import { C_Game, Game } from "../../game/C_Game";
import { C_Hall } from "../../hall/C_Hall";

const {ccclass, property} = cc._decorator;

@ccclass
export default class create0 extends cc.Component {

    @property(cc.Node)
    backBtn: cc.Node = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        C_Hall.evt.on(Message.gameList, this.gameList, this);
    }

    private gameList(){
        if(C_Game.instance.gameArr && C_Game.instance.gameArr.length>0){
            this._gameArr.push(...C_Game.instance.gameArr);
        }
    }

    private _current:number;
    private _gameArr:Game[];
    private getGameList(){
        this._current = 0;
        this._gameArr = [];
        this.doGameList();
    }

    private doGameList(){
        C_Game.instance.sendGameList(this._current);
        this._current++;
    }
    // update (dt) {}
}
