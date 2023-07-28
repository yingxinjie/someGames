
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/01_hall/script/config/cwebsocket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '01614rP6UxPx6tFKHLKz6L6', 'cwebsocket');
// bundle/01_hall/script/config/cwebsocket.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cwebsocket = void 0;
var tips_1 = require("../../../00_base/script/uiutils/tips");
var cwebsocket = /** @class */ (function () {
    function cwebsocket(address, id) {
        this.connectState = cwebsocket.nommal;
        /** 重连次数统计 */
        this.reconnectCounts = 0;
        /** 连接地址 */
        this.address = "ws://127.0.0.1:8001";
        this.ws = null;
        this.heartIntervalHandle = null;
        this.id = 0;
        this.willSendInfo = [];
        this.handleInfo = [];
        this.address = address;
        this.id = id;
        this.connect();
    }
    cwebsocket.prototype.connect = function () {
        var _this = this;
        this.ws = new WebSocket(this.address);
        this.connectState = cwebsocket.connecting;
        this.ws.onopen = function () {
            _this.connectState = cwebsocket.Opened;
            console.log("链接成功");
            _this.heartIntervalHandle = setInterval(function () {
                _this.ws.send(JSON.stringify({ id: 0, info: "ping" }));
            }, 10000);
            //发送之前未发送的数据
            while (_this.willSendInfo.length > 0) {
                _this.ws.send(_this.willSendInfo.shift());
            }
        };
        this.ws.onmessage = function (event) {
            console.log("收到消息: ", event.data);
        };
        this.ws.onerror = function (event) {
            console.log("收到一个错误,服务器关闭的时候这里不会触发"); //连接服务器连不上的时候会触发
        };
        this.ws.onclose = function (event) {
            console.log("链接关闭"); //服务端关机的时候会触发 //连接服务器连不上的时候会触发
            _this.resetConnect();
            console.log("socketid", _this.id);
            //取消重连,检查网络提示
            if (_this.reconnectCounts >= 2) {
                tips_1.Tips.Show("重连次数过多,请检查网络!");
                _this.reconnectCounts = 0;
                _this.willSendInfo = [];
                return;
            }
            //重连
            setTimeout(function () {
                _this.reconnectCounts++;
                _this.connect();
            }, 3000); //3秒重连
        };
    };
    /** c重置连接 */
    cwebsocket.prototype.resetConnect = function () {
        this.ws = null;
        this.connectState = 0;
        clearInterval(this.heartIntervalHandle);
    };
    /**
     * 发送数据
     * @param info 发送的json字符串数据
     */
    cwebsocket.prototype.send = function (info) {
        //ws不为空,连接成功了之后再发
        if (this.ws && this.connectState != cwebsocket.Opened) {
            this.willSendInfo.push(info);
            return;
        }
        if (this.connectState != cwebsocket.Opened || this.ws.readyState != WebSocket.OPEN) {
            //检测到未连接,启动连接
            this.connectState = cwebsocket.nommal;
            this.resetConnect();
            this.connect();
            return;
        }
        this.ws.send(info);
    };
    cwebsocket.prototype.on = function (id, func, cbo) {
        if (id <= 0) {
            cc.error("消息id必须>0", id);
            return;
        }
        if (!func) {
            cc.error("消息注册回调不能为空", id);
            return;
        }
        if (!cbo) {
            cc.error("消息注册的函数句柄不能为空", id);
            return;
        }
        this.handleInfo.push({ id: id, func: func, cbo: cbo });
    };
    cwebsocket.prototype.off = function (id, func, cbo) {
        var _this = this;
        this.handleInfo.forEach(function (item, idx) {
            if (item.id == id && item.func === func && item.cbo === cbo) {
                _this.handleInfo.splice(idx, 1);
            }
        });
    };
    cwebsocket.prototype.destory = function () {
        this.handleInfo = null;
        if (this.ws) {
            this.ws.onopen = null;
            this.ws.onclose = null;
            this.ws.onerror = null;
            this.ws.onmessage = null;
        }
    };
    cwebsocket.nommal = 1; //默认状态
    cwebsocket.connecting = 2; //连接中
    cwebsocket.Opened = 3; //连接成功,打开了连接
    return cwebsocket;
}());
exports.cwebsocket = cwebsocket;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXGNvbmZpZ1xcY3dlYnNvY2tldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2REFBNEQ7QUFJNUQ7SUFnQkksb0JBQVksT0FBZSxFQUFFLEVBQVU7UUFaL0IsaUJBQVksR0FBVyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBRWpELGFBQWE7UUFDTCxvQkFBZSxHQUFXLENBQUMsQ0FBQztRQUNwQyxXQUFXO1FBQ0gsWUFBTyxHQUFXLHFCQUFxQixDQUFDO1FBQ3hDLE9BQUUsR0FBYyxJQUFJLENBQUM7UUFFckIsd0JBQW1CLEdBQUcsSUFBSSxDQUFDO1FBRzNCLE9BQUUsR0FBVyxDQUFDLENBQUM7UUE2RGYsaUJBQVksR0FBYSxFQUFFLENBQUM7UUF5QjVCLGVBQVUsR0FBK0MsRUFBRSxDQUFBO1FBcEYvRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU8sNEJBQU8sR0FBZjtRQUFBLGlCQTZDQztRQTVDRyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUM7UUFFMUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUc7WUFDYixLQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7WUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVwQixLQUFJLENBQUMsbUJBQW1CLEdBQUcsV0FBVyxDQUFDO2dCQUNuQyxLQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFF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QUMsQ0FBQSxNQUFNO0lBQ2pCLHFCQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUEsS0FBSztJQUNwQixpQkFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLFlBQVk7SUEwSW5ELGlCQUFDO0NBN0lELEFBNklDLElBQUE7QUE3SVksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaXBzIH0gZnJvbSBcIi4uLy4uLy4uLzAwX2Jhc2Uvc2NyaXB0L3VpdXRpbHMvdGlwc1wiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgY3dlYnNvY2tldCB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBub21tYWwgPSAxOy8v6buY6K6k54q25oCBXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBjb25uZWN0aW5nID0gMjsvL+i/nuaOpeS4rVxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgT3BlbmVkID0gMzsvL+i/nuaOpeaIkOWKnyzmiZPlvIDkuobov57mjqVcclxuICAgIHByaXZhdGUgY29ubmVjdFN0YXRlOiBudW1iZXIgPSBjd2Vic29ja2V0Lm5vbW1hbDtcclxuXHJcbiAgICAvKiog6YeN6L+e5qyh5pWw57uf6K6hICovXHJcbiAgICBwcml2YXRlIHJlY29ubmVjdENvdW50czogbnVtYmVyID0gMDtcclxuICAgIC8qKiDov57mjqXlnLDlnYAgKi9cclxuICAgIHByaXZhdGUgYWRkcmVzczogc3RyaW5nID0gXCJ3czovLzEyNy4wLjAuMTo4MDAxXCI7XHJcbiAgICBwcml2YXRlIHdzOiBXZWJTb2NrZXQgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgaGVhcnRJbnRlcnZhbEhhbmRsZSA9IG51bGw7XHJcblxyXG5cclxuICAgIHByaXZhdGUgaWQ6IG51bWJlciA9IDA7XHJcbiAgICBjb25zdHJ1Y3RvcihhZGRyZXNzOiBzdHJpbmcsIGlkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmFkZHJlc3MgPSBhZGRyZXNzO1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgdGhpcy53cyA9IG5ldyBXZWJTb2NrZXQodGhpcy5hZGRyZXNzKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTdGF0ZSA9IGN3ZWJzb2NrZXQuY29ubmVjdGluZztcclxuXHJcbiAgICAgICAgdGhpcy53cy5vbm9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdFN0YXRlID0gY3dlYnNvY2tldC5PcGVuZWQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6ZO+5o6l5oiQ5YqfXCIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5oZWFydEludGVydmFsSGFuZGxlID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53cy5zZW5kKEpTT04uc3RyaW5naWZ5KHsgaWQ6IDAsIGluZm86IFwicGluZ1wiIH0pKTtcclxuICAgICAgICAgICAgfSwgMTAwMDApO1xyXG5cclxuICAgICAgICAgICAgLy/lj5HpgIHkuYvliY3mnKrlj5HpgIHnmoTmlbDmja5cclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMud2lsbFNlbmRJbmZvLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud3Muc2VuZCh0aGlzLndpbGxTZW5kSW5mby5zaGlmdCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMud3Mub25tZXNzYWdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pS25Yiw5raI5oGvOiBcIiwgZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy53cy5vbmVycm9yID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pS25Yiw5LiA5Liq6ZSZ6K+vLOacjeWKoeWZqOWFs+mXreeahOaXtuWAmei/memHjOS4jeS8muinpuWPkVwiKTsvL+i/nuaOpeacjeWKoeWZqOi/nuS4jeS4iueahOaXtuWAmeS8muinpuWPkVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMud3Mub25jbG9zZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIumTvuaOpeWFs+mXrVwiKTsvL+acjeWKoeerr+WFs+acuueahOaXtuWAmeS8muinpuWPkSAvL+i/nuaOpeacjeWKoeWZqOi/nuS4jeS4iueahOaXtuWAmeS8muinpuWPkVxyXG4gICAgICAgICAgICB0aGlzLnJlc2V0Q29ubmVjdCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNvY2tldGlkXCIsIHRoaXMuaWQpXHJcblxyXG4gICAgICAgICAgICAvL+WPlua2iOmHjei/nizmo4Dmn6XnvZHnu5zmj5DnpLpcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVjb25uZWN0Q291bnRzID49IDIpIHtcclxuICAgICAgICAgICAgICAgIFRpcHMuU2hvdyhcIumHjei/nuasoeaVsOi/h+Wkmizor7fmo4Dmn6XnvZHnu5whXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3RDb3VudHMgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53aWxsU2VuZEluZm8gPSBbXTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy/ph43ov55cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlY29ubmVjdENvdW50cysrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0KCk7XHJcbiAgICAgICAgICAgIH0sIDMwMDApOy8vM+enkumHjei/nlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIGPph43nva7ov57mjqUgKi9cclxuICAgIHByaXZhdGUgcmVzZXRDb25uZWN0KCkge1xyXG4gICAgICAgIHRoaXMud3MgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdFN0YXRlID0gMDtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaGVhcnRJbnRlcnZhbEhhbmRsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB3aWxsU2VuZEluZm86IHN0cmluZ1tdID0gW107XHJcbiAgICAvKipcclxuICAgICAqIOWPkemAgeaVsOaNrlxyXG4gICAgICogQHBhcmFtIGluZm8g5Y+R6YCB55qEanNvbuWtl+espuS4suaVsOaNrlxyXG4gICAgICovXHJcbiAgICBzZW5kKGluZm86IHN0cmluZykge1xyXG4gICAgICAgIC8vd3PkuI3kuLrnqbos6L+e5o6l5oiQ5Yqf5LqG5LmL5ZCO5YaN5Y+RXHJcbiAgICAgICAgaWYgKHRoaXMud3MgJiYgdGhpcy5jb25uZWN0U3RhdGUgIT0gY3dlYnNvY2tldC5PcGVuZWQpIHtcclxuICAgICAgICAgICAgdGhpcy53aWxsU2VuZEluZm8ucHVzaChpbmZvKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3RTdGF0ZSAhPSBjd2Vic29ja2V0Lk9wZW5lZCB8fCB0aGlzLndzLnJlYWR5U3RhdGUgIT0gV2ViU29ja2V0Lk9QRU4pIHtcclxuICAgICAgICAgICAgLy/mo4DmtYvliLDmnKrov57mjqUs5ZCv5Yqo6L+e5o6lXHJcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdFN0YXRlID0gY3dlYnNvY2tldC5ub21tYWw7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRDb25uZWN0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLndzLnNlbmQoaW5mbyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlSW5mbzogeyBpZDogbnVtYmVyLCBmdW5jOiBGdW5jdGlvbiwgY2JvOiBhbnkgfVtdID0gW11cclxuXHJcblxyXG4gICAgb24oaWQ6IG51bWJlciwgZnVuYzogRnVuY3Rpb24sIGNibzogYW55KSB7XHJcbiAgICAgICAgaWYgKGlkIDw9IDApIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCLmtojmga9pZOW/hemhuz4wXCIsIGlkKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFmdW5jKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKFwi5raI5oGv5rOo5YaM5Zue6LCD5LiN6IO95Li656m6XCIsIGlkKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjYm8pIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCLmtojmga/ms6jlhoznmoTlh73mlbDlj6Xmn4TkuI3og73kuLrnqbpcIiwgaWQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZUluZm8ucHVzaCh7IGlkOiBpZCwgZnVuYzogZnVuYywgY2JvOiBjYm8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb2ZmKGlkOiBudW1iZXIsIGZ1bmM6IEZ1bmN0aW9uLCBjYm86IGFueSkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlSW5mby5mb3JFYWNoKChpdGVtOiB7IGlkOiBudW1iZXIsIGZ1bmM6IEZ1bmN0aW9uLCBjYm86IGFueSB9LCBpZHg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5pZCA9PSBpZCAmJiBpdGVtLmZ1bmMgPT09IGZ1bmMgJiYgaXRlbS5jYm8gPT09IGNibykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVJbmZvLnNwbGljZShpZHgsIDEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGRlc3RvcnkoKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVJbmZvID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy53cykge1xyXG4gICAgICAgICAgICB0aGlzLndzLm9ub3BlbiA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMud3Mub25jbG9zZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMud3Mub25lcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMud3Mub25tZXNzYWdlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19