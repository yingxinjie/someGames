// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { string } from "../../../../tools/packages/bundle-hotupdate/jszip";

const { ccclass, property } = cc._decorator;

@ccclass
export default class light extends cc.Component {

    @property([cc.String])
    private angleNumArr: string[] = [];

    protected start(): void {

    }
}
