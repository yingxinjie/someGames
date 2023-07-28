import { ViewManager } from "./config/ViewManager";
import { Utils } from "./config/Utils";
import { ComUseStr, GlobalConfig, ViewEnum, WidgetEnum } from "./config/config";
import { UserInfo } from "./config/UserInfo";
import { EventManger } from "../../00_base/script/common/EventManger";

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
    }

    async load() {
        if (UserInfo.uuid && UserInfo.uuid.length > 0) {
            await ViewManager.Alert(WidgetEnum.BottomToggle);
            await ViewManager.Open(ViewEnum.FaXian);
        } else {
            await ViewManager.Open(ViewEnum.Login);
        }
        // UserInfo.cwebsocket = new cwebsocket("ws://127.0.0.1:8001", 1);
        // UserInfo.cwebsocket.send(JSON.stringify({ id: 10, info: "哈哈哈哈" }));
    }

}
