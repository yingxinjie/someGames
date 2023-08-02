
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMF9iYXNlXFxzY3JpcHRcXGNvbW1vblxcRXZlbnRNYW5nZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtRQUlZLFdBQU0sR0FBOEQsRUFBRSxDQUFBO0lBcUVsRixDQUFDO0lBdkVHLHNCQUFrQixtQkFBRzthQUFyQixjQUF3QyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1NBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUl6SDs7Ozs7T0FLRztJQUNJLHlCQUFFLEdBQVQsVUFBVSxJQUFZLEVBQUUsRUFBWSxFQUFFLEdBQVM7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQTtTQUFFO1FBQUEsQ0FBQztRQUN2QyxJQUFJLElBQUksSUFBSSxFQUFFLEVBQUU7WUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ25FO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksMkJBQUksR0FBWCxVQUFZLElBQVksRUFBRSxFQUFZLEVBQUUsR0FBUztRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFBO1NBQUU7UUFBQSxDQUFDO1FBQ3ZDLElBQUksSUFBSSxJQUFJLEVBQUUsRUFBRTtZQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDbEU7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSwyQkFBSSxHQUFYLFVBQVksSUFBWSxFQUFFLElBQVU7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUFDLE9BQU87U0FBRTtRQUVuRixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekMsSUFBSSxHQUFHLEdBQTRELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEYsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxFQUFFO2dCQUM1QixJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUU7b0JBQ1QsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQ2pDO3FCQUFNO29CQUNILEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2hCO2FBQ0o7WUFFRCxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixDQUFDLEVBQUUsQ0FBQzthQUNQO1NBQ0o7SUFHTCxDQUFDO0lBRU0sMEJBQUcsR0FBVixVQUFXLElBQVksRUFBRSxFQUFZLEVBQUUsR0FBUztRQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQUMsT0FBTztTQUFFO1FBRW5GLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxJQUFJLEdBQUcsR0FBNEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRixJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUUsSUFBSSxHQUFHLENBQUMsRUFBRSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLENBQUMsRUFBRSxDQUFDO2FBQ1A7U0FDSjtJQUVMLENBQUM7SUF0RWMsa0JBQUssR0FBaUIsSUFBSSxDQUFBO0lBd0U3QyxtQkFBQztDQXpFRCxBQXlFQyxJQUFBO0FBRVksUUFBQSxXQUFXLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIGV2ZW50TWFuYWdlciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBzaW5nZTogZXZlbnRNYW5hZ2VyID0gbnVsbFxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zKCk6IGV2ZW50TWFuYWdlciB7IGlmICh0aGlzLnNpbmdlID09IG51bGwpIHsgdGhpcy5zaW5nZSA9IG5ldyBldmVudE1hbmFnZXIoKTsgfSByZXR1cm4gdGhpcy5zaW5nZTsgfVxyXG5cclxuICAgIHByaXZhdGUgZXZlbnRzOiB7IG5hbWU6IHN0cmluZywgY2I6IEZ1bmN0aW9uLCBjYm86IGFueSwgb25jZTogYm9vbGVhbiB9W10gPSBbXVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5rOo5YaM5LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0gbmFtZSDkuovku7blkI3np7BcclxuICAgICAqIEBwYXJhbSBjYiDkuovku7blm57osIPlh73mlbBcclxuICAgICAqIEBwYXJhbSBjYm8g5LqL5Lu25Zue6LCD6ICFXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbihuYW1lOiBzdHJpbmcsIGNiOiBGdW5jdGlvbiwgY2JvPzogYW55KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmV2ZW50cykgeyB0aGlzLmV2ZW50cyA9IFtdIH07XHJcbiAgICAgICAgaWYgKG5hbWUgJiYgY2IpIHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudHMucHVzaCh7IG5hbWU6IG5hbWUsIGNiOiBjYiwgY2JvOiBjYm8sIG9uY2U6IGZhbHNlIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWPquiwg+eUqOS4gOasoeeahOS6i+S7tuazqOWGjFxyXG4gICAgICogQHBhcmFtIG5hbWUg5LqL5Lu25ZCN56ewXHJcbiAgICAgKiBAcGFyYW0gY2Ig5LqL5Lu25Zue6LCD5Ye95pWwXHJcbiAgICAgKiBAcGFyYW0gY2JvIOS6i+S7tuWbnuiwg+iAhVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25jZShuYW1lOiBzdHJpbmcsIGNiOiBGdW5jdGlvbiwgY2JvPzogYW55KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmV2ZW50cykgeyB0aGlzLmV2ZW50cyA9IFtdIH07XHJcbiAgICAgICAgaWYgKG5hbWUgJiYgY2IpIHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudHMucHVzaCh7IG5hbWU6IG5hbWUsIGNiOiBjYiwgY2JvOiBjYm8sIG9uY2U6IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y+R6YCB5pWw5o2uXHJcbiAgICAgKiBAcGFyYW0gbmFtZSDkuovku7blkI3np7AgXHJcbiAgICAgKiBAcGFyYW0gZGF0YSDkuovku7bmlbDmja5cclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW1pdChuYW1lOiBzdHJpbmcsIGRhdGE/OiBhbnkpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZXZlbnRzIHx8IHRoaXMuZXZlbnRzLmxlbmd0aCA9PSAwKSB7IGNjLmVycm9yKFwidW5rbm93biBldmVudFwiKTsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ldmVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGV2dDogeyBuYW1lOiBzdHJpbmcsIGNiOiBGdW5jdGlvbiwgY2JvOiBhbnksIG9uY2U6IGJvb2xlYW4gfSA9IHRoaXMuZXZlbnRzW2ldO1xyXG4gICAgICAgICAgICBpZiAoZXZ0Lm5hbWUgPT0gbmFtZSAmJiBldnQuY2IpIHtcclxuICAgICAgICAgICAgICAgIGlmIChldnQuY2JvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZ0LmNiLmFwcGx5KGV2dC5jYm8sIFtkYXRhXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2dC5jYihkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGV2dC5vbmNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50cy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb2ZmKG5hbWU6IHN0cmluZywgY2I6IEZ1bmN0aW9uLCBjYm8/OiBhbnkpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZXZlbnRzIHx8IHRoaXMuZXZlbnRzLmxlbmd0aCA9PSAwKSB7IGNjLmVycm9yKFwidW5rbm93biBldmVudFwiKTsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ldmVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGV2dDogeyBuYW1lOiBzdHJpbmcsIGNiOiBGdW5jdGlvbiwgY2JvOiBhbnksIG9uY2U6IGJvb2xlYW4gfSA9IHRoaXMuZXZlbnRzW2ldO1xyXG4gICAgICAgICAgICBpZiAoZXZ0Lm5hbWUgPT0gbmFtZSAmJiBjYiA9PSBldnQuY2IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRXZlbnRNYW5nZXIgPSBldmVudE1hbmFnZXIuaW5zOyJdfQ==