"use strict";
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