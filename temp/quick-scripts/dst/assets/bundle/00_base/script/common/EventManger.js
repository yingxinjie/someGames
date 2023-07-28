
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/00_base/script/common/EventManger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c41e6lMcyhA95Io45mqRJLB', 'EventManger');
// bundle/00_base/script/common/EventManger.ts

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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMF9iYXNlXFxzY3JpcHRcXGNvbW1vblxcRXZlbnRNYW5nZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO1FBSVksV0FBTSxHQUE4RCxFQUFFLENBQUE7SUFxRWxGLENBQUM7SUF2RUcsc0JBQWtCLG1CQUFHO2FBQXJCLGNBQXdDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7U0FBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBSXpIOzs7OztPQUtHO0lBQ0kseUJBQUUsR0FBVCxVQUFVLElBQVksRUFBRSxFQUFZLEVBQUUsR0FBUztRQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFBO1NBQUU7UUFBQSxDQUFDO1FBQ3ZDLElBQUksSUFBSSxJQUFJLEVBQUUsRUFBRTtZQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDbkU7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSwyQkFBSSxHQUFYLFVBQVksSUFBWSxFQUFFLEVBQVksRUFBRSxHQUFTO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUE7U0FBRTtRQUFBLENBQUM7UUFDdkMsSUFBSSxJQUFJLElBQUksRUFBRSxFQUFFO1lBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUNsRTtJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLDJCQUFJLEdBQVgsVUFBWSxJQUFZLEVBQUUsSUFBVTtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQUMsT0FBTztTQUFFO1FBRW5GLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxJQUFJLEdBQUcsR0FBNEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRixJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLEVBQUU7Z0JBQzVCLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRTtvQkFDVCxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztpQkFDakM7cUJBQU07b0JBQ0gsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDaEI7YUFDSjtZQUVELElBQUksR0FBRyxDQUFDLElBQUksRUFBRTtnQkFDVixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLENBQUMsRUFBRSxDQUFDO2FBQ1A7U0FDSjtJQUdMLENBQUM7SUFFTSwwQkFBRyxHQUFWLFVBQVcsSUFBWSxFQUFFLEVBQVksRUFBRSxHQUFTO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7WUFBQyxPQUFPO1NBQUU7UUFFbkYsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pDLElBQUksR0FBRyxHQUE0RCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xGLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksRUFBRSxJQUFJLEdBQUcsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDekIsQ0FBQyxFQUFFLENBQUM7YUFDUDtTQUNKO0lBRUwsQ0FBQztJQXRFYyxrQkFBSyxHQUFpQixJQUFJLENBQUE7SUF3RTdDLG1CQUFDO0NBekVELEFBeUVDLElBQUE7QUFFWSxRQUFBLFdBQVcsR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgZXZlbnRNYW5hZ2VyIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHNpbmdlOiBldmVudE1hbmFnZXIgPSBudWxsXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnMoKTogZXZlbnRNYW5hZ2VyIHsgaWYgKHRoaXMuc2luZ2UgPT0gbnVsbCkgeyB0aGlzLnNpbmdlID0gbmV3IGV2ZW50TWFuYWdlcigpOyB9IHJldHVybiB0aGlzLnNpbmdlOyB9XHJcblxyXG4gICAgcHJpdmF0ZSBldmVudHM6IHsgbmFtZTogc3RyaW5nLCBjYjogRnVuY3Rpb24sIGNibzogYW55LCBvbmNlOiBib29sZWFuIH1bXSA9IFtdXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDms6jlhozkuovku7ZcclxuICAgICAqIEBwYXJhbSBuYW1lIOS6i+S7tuWQjeensFxyXG4gICAgICogQHBhcmFtIGNiIOS6i+S7tuWbnuiwg+WHveaVsFxyXG4gICAgICogQHBhcmFtIGNibyDkuovku7blm57osIPogIVcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uKG5hbWU6IHN0cmluZywgY2I6IEZ1bmN0aW9uLCBjYm8/OiBhbnkpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZXZlbnRzKSB7IHRoaXMuZXZlbnRzID0gW10gfTtcclxuICAgICAgICBpZiAobmFtZSAmJiBjYikge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5wdXNoKHsgbmFtZTogbmFtZSwgY2I6IGNiLCBjYm86IGNibywgb25jZTogZmFsc2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y+q6LCD55So5LiA5qyh55qE5LqL5Lu25rOo5YaMXHJcbiAgICAgKiBAcGFyYW0gbmFtZSDkuovku7blkI3np7BcclxuICAgICAqIEBwYXJhbSBjYiDkuovku7blm57osIPlh73mlbBcclxuICAgICAqIEBwYXJhbSBjYm8g5LqL5Lu25Zue6LCD6ICFXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbmNlKG5hbWU6IHN0cmluZywgY2I6IEZ1bmN0aW9uLCBjYm8/OiBhbnkpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZXZlbnRzKSB7IHRoaXMuZXZlbnRzID0gW10gfTtcclxuICAgICAgICBpZiAobmFtZSAmJiBjYikge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5wdXNoKHsgbmFtZTogbmFtZSwgY2I6IGNiLCBjYm86IGNibywgb25jZTogdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlj5HpgIHmlbDmja5cclxuICAgICAqIEBwYXJhbSBuYW1lIOS6i+S7tuWQjeensCBcclxuICAgICAqIEBwYXJhbSBkYXRhIOS6i+S7tuaVsOaNrlxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbWl0KG5hbWU6IHN0cmluZywgZGF0YT86IGFueSkge1xyXG4gICAgICAgIGlmICghdGhpcy5ldmVudHMgfHwgdGhpcy5ldmVudHMubGVuZ3RoID09IDApIHsgY2MuZXJyb3IoXCJ1bmtub3duIGV2ZW50XCIpOyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmV2ZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZXZ0OiB7IG5hbWU6IHN0cmluZywgY2I6IEZ1bmN0aW9uLCBjYm86IGFueSwgb25jZTogYm9vbGVhbiB9ID0gdGhpcy5ldmVudHNbaV07XHJcbiAgICAgICAgICAgIGlmIChldnQubmFtZSA9PSBuYW1lICYmIGV2dC5jYikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2dC5jYm8pIHtcclxuICAgICAgICAgICAgICAgICAgICBldnQuY2IuYXBwbHkoZXZ0LmNibywgW2RhdGFdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZ0LmNiKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZXZ0Lm9uY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvZmYobmFtZTogc3RyaW5nLCBjYjogRnVuY3Rpb24sIGNibz86IGFueSkge1xyXG4gICAgICAgIGlmICghdGhpcy5ldmVudHMgfHwgdGhpcy5ldmVudHMubGVuZ3RoID09IDApIHsgY2MuZXJyb3IoXCJ1bmtub3duIGV2ZW50XCIpOyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmV2ZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZXZ0OiB7IG5hbWU6IHN0cmluZywgY2I6IEZ1bmN0aW9uLCBjYm86IGFueSwgb25jZTogYm9vbGVhbiB9ID0gdGhpcy5ldmVudHNbaV07XHJcbiAgICAgICAgICAgIGlmIChldnQubmFtZSA9PSBuYW1lICYmIGNiID09IGV2dC5jYikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudHMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFdmVudE1hbmdlciA9IGV2ZW50TWFuYWdlci5pbnM7Il19