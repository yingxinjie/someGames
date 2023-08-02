import { config, ViewEnum } from "../config/config";
import { ViewManager } from "../config/ViewManager";
import { C_Tip } from "../tip/C_Tip";

export class C_Hall{
    public static _instance: C_Hall = null;
    public static get instance():C_Hall{
        if(!this._instance){
            this._instance = new C_Hall();
           
        }
        return this._instance;
    }

    /**事件*/
	public static evt:cc.EventTarget  = new cc.EventTarget();
    
    constructor() {
        
    }

    // post
    // let res: any = await Utils.Post(HttpPath.phoneLogin, data);
    //     console.log("登录数据返回", JSON.stringify(res))
}