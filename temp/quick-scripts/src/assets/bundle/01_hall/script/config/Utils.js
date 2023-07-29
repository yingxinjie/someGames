"use strict";
cc._RF.push(module, '12ea6cmuMlEzIjM6UBVz6VJ', 'Utils');
// bundle/01_hall/script/config/Utils.ts

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
var UserInfo_1 = require("./UserInfo");
var config_1 = require("./config");
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
     * 查找此节点在运行中的路劲
     * @param node 查询的节点
     * @returns
     */
    Utils.FindPath = function (node) {
        var path = "/" + node.name;
        var continueFind = true;
        var parent = node.parent;
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
    };
    /**
     * 正则判断手机号
     * @param phone 手机号
     * @returns
     */
    Utils.IsPhone = function (phone) {
        return /^1[3456789][0-9]\d{8}/.test(phone);
    };
    /**
     * 正则判断邮箱
     * @param mail 邮箱
     */
    Utils.IsMail = function (mail) {
        // let atIdx: number = mail.indexOf("@");
        // let dianIdx: number = mail.indexOf(".");
        // //@符号在第二个位置以上 且在点的前面 
        // if (atIdx > 0 && atIdx < dianIdx - 1 && dianIdx > atIdx + 1 && dianIdx < mail.length - 3)
        //     return true;
        // return false;
        return /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(mail);
    };
    /** 获取url的参数 */
    Utils.UrlParams = function (key) {
        if (!window) {
            return "";
        }
        var search = window.location.search.replace("?", "");
        var searchArr = search.split("&");
        for (var i = 0; i < searchArr.length; i++) {
            var kvArr = searchArr[i].split("=");
            if (kvArr[0] == key) {
                return kvArr[1];
            }
        }
        return "";
    };
    /**
     * post请求
     * @param path api路径
     * @param params 参数对象
     */
    Utils.Post = function (path, params) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                url = "http://" + config_1.GlobalConfig.IPort + path;
                console.log("http请求", url, JSON.stringify(params));
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var xhr = new XMLHttpRequest();
                        xhr.open('POST', url);
                        xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
                        xhr.setRequestHeader("token", UserInfo_1.UserInfo.token);
                        xhr.onload = function () {
                            if (xhr.status === 200) {
                                var res = void 0;
                                try {
                                    res = JSON.parse(xhr.responseText);
                                    console.log("http请求返回", JSON.stringify(res));
                                    resolve(res);
                                }
                                catch (error) {
                                    console.error("POST \u8BF7\u6C42" + url + " \u8FD4\u56DE\u6570\u636EJSON\u89E3\u6790\u9519\u8BEF " + res);
                                }
                            }
                            else {
                                reject(new Error("HTTP\u8BF7\u6C42\u5931\u8D25,\u72B6\u6001\u7801: " + xhr.status));
                            }
                        };
                        xhr.onerror = function () {
                            reject(new Error('HTTP请求出错'));
                        };
                        xhr.send(JSON.stringify(params));
                    })];
            });
        });
    };
    /**
      * post请求
      * @param path api路径
      * @param params 参数对象
      */
    Utils.Get = function (path, params) {
        return __awaiter(this, void 0, void 0, function () {
            var search, key, element, url;
            return __generator(this, function (_a) {
                search = "";
                if (params) {
                    search = "?";
                    for (key in params) {
                        element = params[key];
                        search += key + "=" + element + "&";
                    }
                }
                url = "http://" + config_1.GlobalConfig.IPort + path + search.substring(0, search.length - 1);
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var xhr = new XMLHttpRequest();
                        xhr.open('GET', url);
                        xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
                        xhr.onload = function () {
                            if (xhr.status === 200) {
                                var res = void 0;
                                try {
                                    res = JSON.parse(xhr.responseText);
                                    resolve(res);
                                }
                                catch (error) {
                                    console.error("POST \u8BF7\u6C42" + url + " \u8FD4\u56DE\u6570\u636EJSON\u89E3\u6790\u9519\u8BEF " + res);
                                }
                            }
                            else {
                                reject(new Error("HTTP\u8BF7\u6C42\u5931\u8D25,\u72B6\u6001\u7801: " + xhr.status));
                            }
                        };
                        xhr.onerror = function () {
                            reject(new Error('HTTP请求出错'));
                        };
                        xhr.send();
                    })];
            });
        });
    };
    Utils.CheckDeviceType = function () {
        var BrowserInfo = {
            userAgent: navigator.userAgent.toLowerCase(),
            isAndroid: Boolean(navigator.userAgent.match(/android/ig)),
            isIphone: Boolean(navigator.userAgent.match(/iphone|ipod/ig)),
            isIpad: Boolean(navigator.userAgent.match(/ipad/ig)),
            isWeixin: Boolean(navigator.userAgent.match(/MicroMessenger/ig)),
        };
        if (BrowserInfo.isAndroid) {
            return config_1.DeviceType.Android;
        }
        else if (BrowserInfo.isIpad || BrowserInfo.isIphone) {
            return config_1.DeviceType.Ios;
        }
        else {
            return config_1.DeviceType.Web;
        }
    };
    return Utils;
}());
exports.Utils = Utils;

cc._RF.pop();