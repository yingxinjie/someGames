import { ViewManager } from "../config/ViewManager";
import { ViewEnum } from "../config/config";

const { ccclass, property } = cc._decorator;

@ccclass
export default class bottomtoggle extends cc.Component {
    /** 底部的切换按钮 */
    toggleOpenView(targ: cc.Toggle) {
        console.log(targ.node.name);
        ViewManager.Open(targ.node.name as ViewEnum);
    }
}
