import { DeviceType, GlobalConfig } from "./config";
import { C_User } from "./C_User";

export class Utils {
    /**
     * 查找此节点在运行中的路劲
     * @param node 查询的节点
     * @returns 
     */
    static FindPath(node: cc.Node) {
        let path: string = "/" + node.name;
        let continueFind: boolean = true;
        let parent: cc.Node = node.parent;
        while (continueFind) {
            if (parent.getComponent(cc.Canvas)) {
                continueFind = false;
                path = parent.name + path;
                break;
            }

            path = "/" + parent.name + path;
            parent = parent.parent;
        }

        return path;
    }

    /**
     * 正则判断手机号
     * @param phone 手机号
     * @returns 
     */
    static IsPhone(phone: string) {
        return /^1[3456789][0-9]\d{8}/.test(phone);
    }

    /**
     * 正则判断邮箱
     * @param mail 邮箱
     */
    static IsMail(mail: string) {
        // let atIdx: number = mail.indexOf("@");
        // let dianIdx: number = mail.indexOf(".");
        // //@符号在第二个位置以上 且在点的前面 
        // if (atIdx > 0 && atIdx < dianIdx - 1 && dianIdx > atIdx + 1 && dianIdx < mail.length - 3)
        //     return true;
        // return false;
        return /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(mail);
    }

    /** 获取url的参数 */
    static UrlParams(key: string) {
        if (!window) { return "" }
        let search: string = window.location.search.replace("?", "");
        let searchArr: string[] = search.split("&");
        for (let i = 0; i < searchArr.length; i++) {
            let kvArr: string[] = searchArr[i].split("=");
            if (kvArr[0] == key) {
                return kvArr[1];
            }
        }
        return "";
    }

    /**
     * post请求
     * @param path api路径
     * @param params 参数对象
     */
    static async Post(path: string, params: any) {
        let url: string = "http://" + GlobalConfig.IPort + path;
        console.log("http请求", url, JSON.stringify(params));
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', url);
            xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
            xhr.setRequestHeader("token", C_User.ins.token);
            xhr.onload = () => {
                if (xhr.status === 200) {
                    let res: any;
                    try {
                        res = JSON.parse(xhr.responseText);
                        console.log("http请求返回", JSON.stringify(res));
                        resolve(res);
                    } catch (error) {
                        console.error(`POST 请求${url} 返回数据JSON解析错误 ${res}`);
                    }
                } else {
                    reject(new Error(`HTTP请求失败,状态码: ${xhr.status}`));
                }
            };

            xhr.onerror = () => {
                reject(new Error('HTTP请求出错'));
            };

            xhr.send(JSON.stringify(params));
        });
    }

    /**
      * post请求
      * @param path api路径
      * @param params 参数对象
      */
    static async Get(path: string, params?: any) {

        let search: string = "";
        if (params) {
            search = "?";
            for (const key in params) {
                const element = params[key];
                search += key + "=" + element + "&"
            }
        }

        let url: string = "http://" + GlobalConfig.IPort + path + search.substring(0, search.length - 1);

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
            xhr.onload = () => {
                if (xhr.status === 200) {
                    let res: any;
                    try {
                        res = JSON.parse(xhr.responseText);
                        resolve(res);
                    } catch (error) {
                        console.error(`POST 请求${url} 返回数据JSON解析错误 ${res}`);
                    }
                } else {
                    reject(new Error(`HTTP请求失败,状态码: ${xhr.status}`));
                }
            };

            xhr.onerror = () => {
                reject(new Error('HTTP请求出错'));
            };

            xhr.send();
        });
    }


    static CheckDeviceType(): DeviceType {
        var BrowserInfo = {
            userAgent: navigator.userAgent.toLowerCase(),
            isAndroid: Boolean(navigator.userAgent.match(/android/ig)),
            isIphone: Boolean(navigator.userAgent.match(/iphone|ipod/ig)),
            isIpad: Boolean(navigator.userAgent.match(/ipad/ig)),
            isWeixin: Boolean(navigator.userAgent.match(/MicroMessenger/ig)),
        }

        if (BrowserInfo.isAndroid) {
            return DeviceType.Android;
        } else if (BrowserInfo.isIpad || BrowserInfo.isIphone) {
            return DeviceType.Ios;
        } else {
            return DeviceType.Web;
        }
    }


}

