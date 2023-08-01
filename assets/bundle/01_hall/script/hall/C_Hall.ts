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

    
    serverCode(code:number){
        if(code == 200){
            console.log("成功")
        }else if(code == 400){
            console.log("系统异常")
        }else if(code == 405){
            console.log("请求方式异常")
        }else if(code == 415){
            console.log("Content-Type不正确")
        }else if(code == 500){
            console.log("登录过期")
        }else if(code == 501){
            console.log("账户异常")
        }
        if(code == 500 || code == 501){
            C_Tip.instance.showTip(config.instance.getLang(0),async () => {
                await ViewManager.Open(ViewEnum.Login);
            })
        }
    }
}