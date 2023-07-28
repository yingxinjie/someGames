class eventManager {
    private static singe: eventManager = null
    public static get ins(): eventManager { if (this.singe == null) { this.singe = new eventManager(); } return this.singe; }

    private events: { name: string, cb: Function, cbo: any, once: boolean }[] = []

    /**
     * 注册事件
     * @param name 事件名称
     * @param cb 事件回调函数
     * @param cbo 事件回调者
     */
    public on(name: string, cb: Function, cbo?: any) {
        if (!this.events) { this.events = [] };
        if (name && cb) {
            this.events.push({ name: name, cb: cb, cbo: cbo, once: false });
        }
    }

    /**
     * 只调用一次的事件注册
     * @param name 事件名称
     * @param cb 事件回调函数
     * @param cbo 事件回调者
     */
    public once(name: string, cb: Function, cbo?: any) {
        if (!this.events) { this.events = [] };
        if (name && cb) {
            this.events.push({ name: name, cb: cb, cbo: cbo, once: true });
        }
    }

    /**
     * 发送数据
     * @param name 事件名称 
     * @param data 事件数据
     * @returns 
     */
    public emit(name: string, data?: any) {
        if (!this.events || this.events.length == 0) { cc.error("unknown event"); return; }

        for (let i = 0; i < this.events.length; i++) {
            let evt: { name: string, cb: Function, cbo: any, once: boolean } = this.events[i];
            if (evt.name == name && evt.cb) {
                if (evt.cbo) {
                    evt.cb.apply(evt.cbo, [data]);
                } else {
                    evt.cb(data);
                }
            }

            if (evt.once) {
                this.events.splice(i, 1);
                i--;
            }
        }


    }

    public off(name: string, cb: Function, cbo?: any) {
        if (!this.events || this.events.length == 0) { cc.error("unknown event"); return; }

        for (let i = 0; i < this.events.length; i++) {
            let evt: { name: string, cb: Function, cbo: any, once: boolean } = this.events[i];
            if (evt.name == name && cb == evt.cb) {
                this.events.splice(i, 1);
                i--;
            }
        }

    }

}

export const EventManger = eventManager.ins;