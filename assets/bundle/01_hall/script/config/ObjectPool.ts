export class ObjectPool {
    /**道具 */
    public static _instance: ObjectPool = null;
    private _arr:any[][];
    public static get instance(): ObjectPool {
        if (!this._instance) {
            this._instance = new ObjectPool();
            this._instance._arr = [];
        }
        return this._instance;
    }

    constructor() {

    }

    get(index:number):any{
        if(this._arr[index] && this._arr[index].length>0){
            return this._arr[index].splice(0,1);
        }else{
            return null;
        }
    }

    recycle(index:number,obj:any){
        if(this._arr[index] && this._arr[index].length>0){
            this._arr[index].push(obj);
        }else{
            this._arr[index] = [obj];
        }
    }
}
