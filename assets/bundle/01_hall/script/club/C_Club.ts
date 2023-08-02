import { HttpPath } from "../config/config";
import { Utils } from "../config/Utils";

export class C_Club{
    public static _instance: C_Club = null;
    public static get instance():C_Club{
        if(!this._instance){
            this._instance = new C_Club();
           
        }
        return this._instance;
    }

    
    constructor() {
        
    }

  
}