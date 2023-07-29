import { Tips } from "../../../00_base/script/uiutils/tips";
import { cmdClientType } from "../../../02_game/script/config/cmdClient";



export class cwebsocket {
    private static readonly nommal = 1;//默认状态
    private static readonly connecting = 2;//连接中
    private static readonly Opened = 3;//连接成功,打开了连接
    private connectState: number = cwebsocket.nommal;

    /** 重连次数统计 */
    private reconnectCounts: number = 0;
    /** 连接地址 */
    private address: string = "ws://127.0.0.1:8001";
    private ws: WebSocket = null;

    private heartIntervalHandle = null;


    private id: number = 0;
    constructor(address: string, id: number) {
        this.address = address;
        this.id = id;
        this.connect();
    }

    private connect() {
        this.ws = new WebSocket(this.address);
        this.connectState = cwebsocket.connecting;

        this.ws.onopen = () => {
            this.connectState = cwebsocket.Opened;
            console.log("链接成功");

            this.heartIntervalHandle = setInterval(() => {
                this.ws.send(JSON.stringify({ id: 0, info: "ping" }));
            }, 10000);

            //发送之前未发送的数据
            while (this.willSendInfo.length > 0) {
                this.ws.send(this.willSendInfo.shift());
            }
        };

        this.ws.onmessage = (event) => {
            console.log("收到消息: ", event.data);
            this.handleMsg(event.data)
        };

        this.ws.onerror = (event) => {
            console.log("收到一个错误,服务器关闭的时候这里不会触发");//连接服务器连不上的时候会触发
        };

        this.ws.onclose = (event) => {
            console.log("链接关闭");//服务端关机的时候会触发 //连接服务器连不上的时候会触发
            this.resetConnect();
            console.log("socketid", this.id)

            //取消重连,检查网络提示
            if (this.reconnectCounts >= 2) {
                Tips.Show("重连次数过多,请检查网络!");
                this.reconnectCounts = 0;
                this.willSendInfo = [];
                return;
            }

            //重连
            setTimeout(() => {
                this.reconnectCounts++;
                this.connect();
            }, 3000);//3秒重连
        };
    }

    /** c重置连接 */
    private resetConnect() {
        this.ws = null;
        this.connectState = 0;
        clearInterval(this.heartIntervalHandle);
    }

    private willSendInfo: string[] = [];
    /**
     * 发送数据
     * @param info 发送的json字符串数据
     */
    send(info: string) {
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
    }

    clientSend(event: string, requestData: any, requestType= cmdClientType.CLIENTTOSERVER, taskId?: number) {
        let info = {
            event,
            requestData,
            requestType,
            taskId
        }
        let packages = JSON.stringify(info)
        this.send(packages)
    }


    handleMsg(data: any) {
        let _data = JSON.parse(data)
        this.readMsg(_data)
    }

    readMsg(data: any) {
        this.handleInfo.forEach((item: { event: string, func: Function, cbo: any }, idx: number) => {
            if (item.event == data.event) {
                item.func.bind(item.cbo)(data)
            }
        })
    }

    private handleInfo: { event: string, func: Function, cbo: any }[] = []


    on(event: string, func: Function, cbo: any) {
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
    }

    off(event: string, func: Function, cbo: any) {
        this.handleInfo.forEach((item: { event: string, func: Function, cbo: any }, idx: number) => {
            if (item.event == event && item.func === func && item.cbo === cbo) {
                this.handleInfo.splice(idx, 1)
            }
        })
    }

    destory() {
        this.handleInfo = null;
        if (this.ws) {
            this.ws.onopen = null;
            this.ws.onclose = null;
            this.ws.onerror = null;
            this.ws.onmessage = null;
        }
    }

}