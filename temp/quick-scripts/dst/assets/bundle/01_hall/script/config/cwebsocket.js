
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
var cmdClient_1 = require("../../../02_game/script/config/cmdClient");
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
            _this.handleMsg(event.data);
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
    cwebsocket.prototype.clientSend = function (event, requestData, requestType, taskId) {
        if (requestType === void 0) { requestType = cmdClient_1.cmdClientType.CLIENTTOSERVER; }
        var info = {
            event: event,
            requestData: requestData,
            requestType: requestType,
            taskId: taskId
        };
        var packages = JSON.stringify(info);
        this.send(packages);
    };
    cwebsocket.prototype.handleMsg = function (data) {
        var _data = JSON.parse(data);
        this.readMsg(_data);
    };
    cwebsocket.prototype.readMsg = function (data) {
        this.handleInfo.forEach(function (item, idx) {
            if (item.event == data.event) {
                item.func.bind(item.cbo)(data);
            }
        });
    };
    cwebsocket.prototype.on = function (event, func, cbo) {
        if (event == '') {
            cc.error("消息id必须>0", event);
            return;
        }
        if (!func) {
            cc.error("消息注册回调不能为空", event);
            return;
        }
        if (!cbo) {
            cc.error("消息注册的函数句柄不能为空", event);
            return;
        }
        this.handleInfo.push({ event: event, func: func, cbo: cbo });
    };
    cwebsocket.prototype.off = function (event, func, cbo) {
        var _this = this;
        this.handleInfo.forEach(function (item, idx) {
            if (item.event == event && item.func === func && item.cbo === cbo) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXGNvbmZpZ1xcY3dlYnNvY2tldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2REFBNEQ7QUFDNUQsc0VBQXlFO0FBSXpFO0lBZ0JJLG9CQUFZLE9BQWUsRUFBRSxFQUFVO1FBWi9CLGlCQUFZLEdBQVcsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUVqRCxhQUFhO1FBQ0wsb0JBQWUsR0FBVyxDQUFDLENBQUM7UUFDcEMsV0FBVztRQUNILFlBQU8sR0FBVyxxQkFBcUIsQ0FBQztRQUN4QyxPQUFFLEdBQWMsSUFBSSxDQUFDO1FBRXJCLHdCQUFtQixHQUFHLElBQUksQ0FBQztRQUczQixPQUFFLEdBQVcsQ0FBQyxDQUFDO1FBOERmLGlCQUFZLEdBQWEsRUFBRSxDQUFDO1FBaUQ1QixlQUFVLEdBQWtELEVBQUUsQ0FBQTtRQTdHbEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVPLDRCQUFPLEdBQWY7UUFBQSxpQkE4Q0M7UUE3Q0csSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBRTFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHO1lBQ2IsS0FBSSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFcEIsS0FBSSxDQUFDLG1CQUFtQixHQUFHLFdBQVcsQ0FBQztnQkFDbkMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxF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ZXNDb250ZW50IjpbImltcG9ydCB7IFRpcHMgfSBmcm9tIFwiLi4vLi4vLi4vMDBfYmFzZS9zY3JpcHQvdWl1dGlscy90aXBzXCI7XHJcbmltcG9ydCB7IGNtZENsaWVudFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vMDJfZ2FtZS9zY3JpcHQvY29uZmlnL2NtZENsaWVudFwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgY3dlYnNvY2tldCB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBub21tYWwgPSAxOy8v6buY6K6k54q25oCBXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBjb25uZWN0aW5nID0gMjsvL+i/nuaOpeS4rVxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgT3BlbmVkID0gMzsvL+i/nuaOpeaIkOWKnyzmiZPlvIDkuobov57mjqVcclxuICAgIHByaXZhdGUgY29ubmVjdFN0YXRlOiBudW1iZXIgPSBjd2Vic29ja2V0Lm5vbW1hbDtcclxuXHJcbiAgICAvKiog6YeN6L+e5qyh5pWw57uf6K6hICovXHJcbiAgICBwcml2YXRlIHJlY29ubmVjdENvdW50czogbnVtYmVyID0gMDtcclxuICAgIC8qKiDov57mjqXlnLDlnYAgKi9cclxuICAgIHByaXZhdGUgYWRkcmVzczogc3RyaW5nID0gXCJ3czovLzEyNy4wLjAuMTo4MDAxXCI7XHJcbiAgICBwcml2YXRlIHdzOiBXZWJTb2NrZXQgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgaGVhcnRJbnRlcnZhbEhhbmRsZSA9IG51bGw7XHJcblxyXG5cclxuICAgIHByaXZhdGUgaWQ6IG51bWJlciA9IDA7XHJcbiAgICBjb25zdHJ1Y3RvcihhZGRyZXNzOiBzdHJpbmcsIGlkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmFkZHJlc3MgPSBhZGRyZXNzO1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgdGhpcy53cyA9IG5ldyBXZWJTb2NrZXQodGhpcy5hZGRyZXNzKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTdGF0ZSA9IGN3ZWJzb2NrZXQuY29ubmVjdGluZztcclxuXHJcbiAgICAgICAgdGhpcy53cy5vbm9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdFN0YXRlID0gY3dlYnNvY2tldC5PcGVuZWQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6ZO+5o6l5oiQ5YqfXCIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5oZWFydEludGVydmFsSGFuZGxlID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53cy5zZW5kKEpTT04uc3RyaW5naWZ5KHsgaWQ6IDAsIGluZm86IFwicGluZ1wiIH0pKTtcclxuICAgICAgICAgICAgfSwgMTAwMDApO1xyXG5cclxuICAgICAgICAgICAgLy/lj5HpgIHkuYvliY3mnKrlj5HpgIHnmoTmlbDmja5cclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMud2lsbFNlbmRJbmZvLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud3Muc2VuZCh0aGlzLndpbGxTZW5kSW5mby5zaGlmdCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMud3Mub25tZXNzYWdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pS25Yiw5raI5oGvOiBcIiwgZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlTXNnKGV2ZW50LmRhdGEpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy53cy5vbmVycm9yID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pS25Yiw5LiA5Liq6ZSZ6K+vLOacjeWKoeWZqOWFs+mXreeahOaXtuWAmei/memHjOS4jeS8muinpuWPkVwiKTsvL+i/nuaOpeacjeWKoeWZqOi/nuS4jeS4iueahOaXtuWAmeS8muinpuWPkVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMud3Mub25jbG9zZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIumTvuaOpeWFs+mXrVwiKTsvL+acjeWKoeerr+WFs+acuueahOaXtuWAmeS8muinpuWPkSAvL+i/nuaOpeacjeWKoeWZqOi/nuS4jeS4iueahOaXtuWAmeS8muinpuWPkVxyXG4gICAgICAgICAgICB0aGlzLnJlc2V0Q29ubmVjdCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNvY2tldGlkXCIsIHRoaXMuaWQpXHJcblxyXG4gICAgICAgICAgICAvL+WPlua2iOmHjei/nizmo4Dmn6XnvZHnu5zmj5DnpLpcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVjb25uZWN0Q291bnRzID49IDIpIHtcclxuICAgICAgICAgICAgICAgIFRpcHMuU2hvdyhcIumHjei/nuasoeaVsOi/h+Wkmizor7fmo4Dmn6XnvZHnu5whXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3RDb3VudHMgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53aWxsU2VuZEluZm8gPSBbXTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy/ph43ov55cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlY29ubmVjdENvdW50cysrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0KCk7XHJcbiAgICAgICAgICAgIH0sIDMwMDApOy8vM+enkumHjei/nlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIGPph43nva7ov57mjqUgKi9cclxuICAgIHByaXZhdGUgcmVzZXRDb25uZWN0KCkge1xyXG4gICAgICAgIHRoaXMud3MgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdFN0YXRlID0gMDtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaGVhcnRJbnRlcnZhbEhhbmRsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB3aWxsU2VuZEluZm86IHN0cmluZ1tdID0gW107XHJcbiAgICAvKipcclxuICAgICAqIOWPkemAgeaVsOaNrlxyXG4gICAgICogQHBhcmFtIGluZm8g5Y+R6YCB55qEanNvbuWtl+espuS4suaVsOaNrlxyXG4gICAgICovXHJcbiAgICBzZW5kKGluZm86IHN0cmluZykge1xyXG4gICAgICAgIC8vd3PkuI3kuLrnqbos6L+e5o6l5oiQ5Yqf5LqG5LmL5ZCO5YaN5Y+RXHJcbiAgICAgICAgaWYgKHRoaXMud3MgJiYgdGhpcy5jb25uZWN0U3RhdGUgIT0gY3dlYnNvY2tldC5PcGVuZWQpIHtcclxuICAgICAgICAgICAgdGhpcy53aWxsU2VuZEluZm8ucHVzaChpbmZvKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3RTdGF0ZSAhPSBjd2Vic29ja2V0Lk9wZW5lZCB8fCB0aGlzLndzLnJlYWR5U3RhdGUgIT0gV2ViU29ja2V0Lk9QRU4pIHtcclxuICAgICAgICAgICAgLy/mo4DmtYvliLDmnKrov57mjqUs5ZCv5Yqo6L+e5o6lXHJcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdFN0YXRlID0gY3dlYnNvY2tldC5ub21tYWw7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRDb25uZWN0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLndzLnNlbmQoaW5mbyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xpZW50U2VuZChldmVudDogc3RyaW5nLCByZXF1ZXN0RGF0YTogYW55LCByZXF1ZXN0VHlwZT0gY21kQ2xpZW50VHlwZS5DTElFTlRUT1NFUlZFUiwgdGFza0lkPzogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGluZm8gPSB7XHJcbiAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICByZXF1ZXN0RGF0YSxcclxuICAgICAgICAgICAgcmVxdWVzdFR5cGUsXHJcbiAgICAgICAgICAgIHRhc2tJZFxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcGFja2FnZXMgPSBKU09OLnN0cmluZ2lmeShpbmZvKVxyXG4gICAgICAgIHRoaXMuc2VuZChwYWNrYWdlcylcclxuICAgIH1cclxuXHJcblxyXG4gICAgaGFuZGxlTXNnKGRhdGE6IGFueSkge1xyXG4gICAgICAgIGxldCBfZGF0YSA9IEpTT04ucGFyc2UoZGF0YSlcclxuICAgICAgICB0aGlzLnJlYWRNc2coX2RhdGEpXHJcbiAgICB9XHJcblxyXG4gICAgcmVhZE1zZyhkYXRhOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZUluZm8uZm9yRWFjaCgoaXRlbTogeyBldmVudDogc3RyaW5nLCBmdW5jOiBGdW5jdGlvbiwgY2JvOiBhbnkgfSwgaWR4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uZXZlbnQgPT0gZGF0YS5ldmVudCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5mdW5jLmJpbmQoaXRlbS5jYm8pKGRhdGEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlSW5mbzogeyBldmVudDogc3RyaW5nLCBmdW5jOiBGdW5jdGlvbiwgY2JvOiBhbnkgfVtdID0gW11cclxuXHJcblxyXG4gICAgb24oZXZlbnQ6IHN0cmluZywgZnVuYzogRnVuY3Rpb24sIGNibzogYW55KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50ID09ICcnKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKFwi5raI5oGvaWTlv4Xpobs+MFwiLCBldmVudCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZnVuYykge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihcIua2iOaBr+azqOWGjOWbnuiwg+S4jeiDveS4uuepulwiLCBldmVudCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY2JvKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKFwi5raI5oGv5rOo5YaM55qE5Ye95pWw5Y+l5p+E5LiN6IO95Li656m6XCIsIGV2ZW50KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVJbmZvLnB1c2goeyBldmVudDogZXZlbnQsIGZ1bmM6IGZ1bmMsIGNibzogY2JvIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZihldmVudDogc3RyaW5nLCBmdW5jOiBGdW5jdGlvbiwgY2JvOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZUluZm8uZm9yRWFjaCgoaXRlbTogeyBldmVudDogc3RyaW5nLCBmdW5jOiBGdW5jdGlvbiwgY2JvOiBhbnkgfSwgaWR4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uZXZlbnQgPT0gZXZlbnQgJiYgaXRlbS5mdW5jID09PSBmdW5jICYmIGl0ZW0uY2JvID09PSBjYm8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlSW5mby5zcGxpY2UoaWR4LCAxKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBkZXN0b3J5KCkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlSW5mbyA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMud3MpIHtcclxuICAgICAgICAgICAgdGhpcy53cy5vbm9wZW4gPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLndzLm9uY2xvc2UgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLndzLm9uZXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLndzLm9ubWVzc2FnZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ==