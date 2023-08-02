"use strict";
cc._RF.push(module, 'c41e6lMcyhA95Io45mqRJLB', 'EventManger');
// bundle/00_base/script/common/EventManger.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventManger = void 0;
var eventManager = /** @class */ (function () {
    function eventManager() {
        this.events = [];
    }
    Object.defineProperty(eventManager, "ins", {
        get: function () { if (this.singe == null) {
            this.singe = new eventManager();
        } return this.singe; },
        enumerable: false,
        configurable: true
    });
    /**
     * 注册事件
     * @param name 事件名称
     * @param cb 事件回调函数
     * @param cbo 事件回调者
     */
    eventManager.prototype.on = function (name, cb, cbo) {
        if (!this.events) {
            this.events = [];
        }
        ;
        if (name && cb) {
            this.events.push({ name: name, cb: cb, cbo: cbo, once: false });
        }
    };
    /**
     * 只调用一次的事件注册
     * @param name 事件名称
     * @param cb 事件回调函数
     * @param cbo 事件回调者
     */
    eventManager.prototype.once = function (name, cb, cbo) {
        if (!this.events) {
            this.events = [];
        }
        ;
        if (name && cb) {
            this.events.push({ name: name, cb: cb, cbo: cbo, once: true });
        }
    };
    /**
     * 发送数据
     * @param name 事件名称
     * @param data 事件数据
     * @returns
     */
    eventManager.prototype.emit = function (name, data) {
        if (!this.events || this.events.length == 0) {
            cc.error("unknown event");
            return;
        }
        for (var i = 0; i < this.events.length; i++) {
            var evt = this.events[i];
            if (evt.name == name && evt.cb) {
                if (evt.cbo) {
                    evt.cb.apply(evt.cbo, [data]);
                }
                else {
                    evt.cb(data);
                }
            }
            if (evt.once) {
                this.events.splice(i, 1);
                i--;
            }
        }
    };
    eventManager.prototype.off = function (name, cb, cbo) {
        if (!this.events || this.events.length == 0) {
            cc.error("unknown event");
            return;
        }
        for (var i = 0; i < this.events.length; i++) {
            var evt = this.events[i];
            if (evt.name == name && cb == evt.cb) {
                this.events.splice(i, 1);
                i--;
            }
        }
    };
    eventManager.singe = null;
    return eventManager;
}());
exports.EventManger = eventManager.ins;

cc._RF.pop();