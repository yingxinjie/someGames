import { ViewManager } from "./config/ViewManager";
import { Utils } from "./config/Utils";
import { ComUseStr, config, GlobalConfig, ViewEnum, WidgetEnum } from "./config/config";
import { C_User } from "./config/C_User";
import { EventManger } from "../../00_base/script/common/EventManger";
import { bundleLoader } from "../../../script/bundleLoader";

const { ccclass, property } = cc._decorator;

@ccclass
export default class hall extends cc.Component {

    start() {
        cc.game.addPersistRootNode(this.node);//节点常驻
        //通过修改url的参数来修改http地址
        let httpServer: string = Utils.UrlParams(ComUseStr.UrlParamAddressKey);
        if (httpServer != "") {
            GlobalConfig.IPort = httpServer;
        }

        this.load();
        this.onloadJson()
    }

    async load() {
        if (C_User.ins.uid && C_User.ins.uid.length > 0) {
            await ViewManager.Alert(WidgetEnum.BottomToggle);
            await ViewManager.Open(ViewEnum.FaXian);
        } else {
            await ViewManager.Open(ViewEnum.Login);
        }

        // UserInfo.cwebsocket = new cwebsocket("ws://127.0.0.1:8001", 1);
        // UserInfo.cwebsocket.send(JSON.stringify({ id: 10, info: "哈哈哈哈" }));
    }

    private onloadJson(){
        config.instance.onloadConfig();
    }
}
