import { ViewManager } from "./config/ViewManager";
import { Utils } from "./config/Utils";
import { ComUseStr, GlobalConfig, ViewEnum, WidgetEnum } from "./config/config";
import { UserInfo } from "./config/UserInfo";
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
        if (UserInfo.uuid && UserInfo.uuid.length > 0) {
            await ViewManager.Alert(WidgetEnum.BottomToggle);
            await ViewManager.Open(ViewEnum.FaXian);
        } else {
            await ViewManager.Open(ViewEnum.Login);
        }
        // UserInfo.cwebsocket = new cwebsocket("ws://127.0.0.1:8001", 1);
        // UserInfo.cwebsocket.send(JSON.stringify({ id: 10, info: "哈哈哈哈" }));
    }

    private onloadJson(){
        let bundle = bundleLoader.ENUM_BUNDLE_SAVE[bundleLoader.ENUM_BUNDLE.HALL];
        bundle.load("json/seatpos", (err, asset: cc.JsonAsset) => {
            if (err) {
                return cc.error(err)
            }
            UserInfo.seatPJson = asset.json
        })

        bundle.load("json/lightpos", (err, asset: cc.JsonAsset) => {
            if (err) {
                return cc.error(err)
            }
            UserInfo.lightPJson = asset.json
        })
       
    }

}
