import { WidgetEnum } from "../config/config";
import { ViewManager } from "../config/ViewManager";
import tip from "../widget/tip";

export class C_Tip{
    public static _instance: C_Tip = null;
    public static get instance():C_Tip{
        if(!this._instance){
            this._instance = new C_Tip();
           
        }
        return this._instance;
    }

    constructor() {
        
    }

    public async showTip(str: string,yesCb?: () => void){
        console.log("showTip");
        await ViewManager.Alert(WidgetEnum.Tip,(node) => {
            node.getComponent(tip).init(str,yesCb);
        });
    }
}