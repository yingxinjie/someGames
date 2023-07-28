import { EventManger } from "./EventManger";

export interface EventStruct {
    target: cc.Node;
    name: string;
    cb: Function;
    cbo: cc.Component;
}
const { property } = cc._decorator;

export default class ComponentBase extends cc.Component {
    private events: EventStruct[] = [];


    protected TouchOn(target: cc.Node, cb: Function, cbo: cc.Component = this) {
        if (target && cb) {
            this.events.push({ target: target, name: cc.Node.EventType.TOUCH_START, cb: cb, cbo: cbo });
            target.on(cc.Node.EventType.TOUCH_END, cb, cbo);
        }
    }

    protected EventOn(name: string, cb: Function, cbo: cc.Component = this) {
        if (name && name.length > 0 && cb) {
            this.events.push({ target: null, name: name, cb: cb, cbo: cbo });
            EventManger.on(name, cb, cbo);
        }
    }

    protected onDestroy(): void {
        this.events.forEach((ele: EventStruct) => {
            if (ele.target) {
                ele.target.off(ele.name, ele.cb, ele.cbo);
            } else {
                EventManger.off(ele.name, ele.cb, ele.cbo);
            }
        });
    }


    protected alertDestory() {
        this.node.destroy();
    }

}

