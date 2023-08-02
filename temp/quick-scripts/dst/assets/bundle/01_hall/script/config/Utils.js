
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/01_hall/script/config/Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
var config_1 = require("./config");
var C_User_1 = require("./C_User");
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
                        xhr.setRequestHeader("token", C_User_1.C_User.ins.token);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXGNvbmZpZ1xcVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQW9EO0FBQ3BELG1DQUFrQztBQUVsQztJQUFBO0lBaUtBLENBQUM7SUFoS0c7Ozs7T0FJRztJQUNJLGNBQVEsR0FBZixVQUFnQixJQUFhO1FBQ3pCLElBQUksSUFBSSxHQUFXLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ25DLElBQUksWUFBWSxHQUFZLElBQUksQ0FBQztRQUNqQyxJQUFJLE1BQU0sR0FBWSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2xDLE9BQU8sWUFBWSxFQUFFO1lBQ2pCLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ2hDLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDMUIsTUFBTTthQUNUO1lBRUQsSUFBSSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNoQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUMxQjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksYUFBTyxHQUFkLFVBQWUsS0FBYTtRQUN4QixPQUFPLHVCQUF1QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksWUFBTSxHQUFiLFVBQWMsSUFBWTtRQUN0Qix5Q0FBeUM7UUFDekMsMkNBQTJDO1FBQzNDLHdCQUF3QjtRQUN4Qiw0RkFBNEY7UUFDNUYsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixPQUFPLCtEQUErRCxDQUFDLElBQUks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QUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7d0JBQ2xDLENBQUMsQ0FBQzt3QkFFRixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2YsQ0FBQyxDQUFDLEVBQUM7OztLQUNOO0lBR00scUJBQWUsR0FBdEI7UUFDSSxJQUFJLFdBQVcsR0FBRztZQUNkLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRTtZQUM1QyxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzFELFFBQVEsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDN0QsTUFBTSxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwRCxRQUFRLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDbkUsQ0FBQTtRQUVELElBQUksV0FBVyxDQUFDLFNBQVMsRUFBRTtZQUN2QixPQUFPLG1CQUFVLENBQUMsT0FBTyxDQUFDO1NBQzdCO2FBQU0sSUFBSSxXQUFXLENBQUMsTUFBTSxJQUFJLFdBQVcsQ0FBQyxRQUFRLEVBQUU7WUFDbkQsT0FBTyxtQkFBVSxDQUFDLEdBQUcsQ0FBQztTQUN6QjthQUFNO1lBQ0gsT0FBTyxtQkFBVSxDQUFDLEdBQUcsQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFHTCxZQUFDO0FBQUQsQ0FqS0EsQUFpS0MsSUFBQTtBQWpLWSxzQkFBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERldmljZVR5cGUsIEdsb2JhbENvbmZpZyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBDX1VzZXIgfSBmcm9tIFwiLi9DX1VzZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVdGlscyB7XHJcbiAgICAvKipcclxuICAgICAqIOafpeaJvuatpOiKgueCueWcqOi/kOihjOS4reeahOi3r+WKslxyXG4gICAgICogQHBhcmFtIG5vZGUg5p+l6K+i55qE6IqC54K5XHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIEZpbmRQYXRoKG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBsZXQgcGF0aDogc3RyaW5nID0gXCIvXCIgKyBub2RlLm5hbWU7XHJcbiAgICAgICAgbGV0IGNvbnRpbnVlRmluZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICAgICAgbGV0IHBhcmVudDogY2MuTm9kZSA9IG5vZGUucGFyZW50O1xyXG4gICAgICAgIHdoaWxlIChjb250aW51ZUZpbmQpIHtcclxuICAgICAgICAgICAgaWYgKHBhcmVudC5nZXRDb21wb25lbnQoY2MuQ2FudmFzKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWVGaW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBwYXRoID0gcGFyZW50Lm5hbWUgKyBwYXRoO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBhdGggPSBcIi9cIiArIHBhcmVudC5uYW1lICsgcGF0aDtcclxuICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5q2j5YiZ5Yik5pat5omL5py65Y+3XHJcbiAgICAgKiBAcGFyYW0gcGhvbmUg5omL5py65Y+3XHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIElzUGhvbmUocGhvbmU6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiAvXjFbMzQ1Njc4OV1bMC05XVxcZHs4fS8udGVzdChwaG9uZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmraPliJnliKTmlq3pgq7nrrFcclxuICAgICAqIEBwYXJhbSBtYWlsIOmCrueusVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgSXNNYWlsKG1haWw6IHN0cmluZykge1xyXG4gICAgICAgIC8vIGxldCBhdElkeDogbnVtYmVyID0gbWFpbC5pbmRleE9mKFwiQFwiKTtcclxuICAgICAgICAvLyBsZXQgZGlhbklkeDogbnVtYmVyID0gbWFpbC5pbmRleE9mKFwiLlwiKTtcclxuICAgICAgICAvLyAvL0DnrKblj7flnKjnrKzkuozkuKrkvY3nva7ku6XkuIog5LiU5Zyo54K555qE5YmN6Z2iIFxyXG4gICAgICAgIC8vIGlmIChhdElkeCA+IDAgJiYgYXRJZHggPCBkaWFuSWR4IC0gMSAmJiBkaWFuSWR4ID4gYXRJZHggKyAxICYmIGRpYW5JZHggPCBtYWlsLmxlbmd0aCAtIDMpXHJcbiAgICAgICAgLy8gICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIC8vIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gL15bQS1aYS16MC05XFx1NGUwMC1cXHU5ZmE1XStAW2EtekEtWjAtOV8tXSsoXFwuW2EtekEtWjAtOV8tXSspKyQvLnRlc3QobWFpbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOiOt+WPlnVybOeahOWPguaVsCAqL1xyXG4gICAgc3RhdGljIFVybFBhcmFtcyhrZXk6IHN0cmluZykge1xyXG4gICAgICAgIGlmICghd2luZG93KSB7IHJldHVybiBcIlwiIH1cclxuICAgICAgICBsZXQgc2VhcmNoOiBzdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoXCI/XCIsIFwiXCIpO1xyXG4gICAgICAgIGxldCBzZWFyY2hBcnI6IHN0cmluZ1tdID0gc2VhcmNoLnNwbGl0KFwiJlwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlYXJjaEFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQga3ZBcnI6IHN0cmluZ1tdID0gc2VhcmNoQXJyW2ldLnNwbGl0KFwiPVwiKTtcclxuICAgICAgICAgICAgaWYgKGt2QXJyWzBdID09IGtleSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGt2QXJyWzFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcG9zdOivt+axglxyXG4gICAgICogQHBhcmFtIHBhdGggYXBp6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gcGFyYW1zIOWPguaVsOWvueixoVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYXN5bmMgUG9zdChwYXRoOiBzdHJpbmcsIHBhcmFtczogYW55KSB7XHJcbiAgICAgICAgbGV0IHVybDogc3RyaW5nID0gXCJodHRwOi8vXCIgKyBHbG9iYWxDb25maWcuSVBvcnQgKyBwYXRoO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaHR0cOivt+axglwiLCB1cmwsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICB4aHIub3BlbignUE9TVCcsIHVybCk7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwidG9rZW5cIiwgQ19Vc2VyLmlucy50b2tlbik7XHJcbiAgICAgICAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlczogYW55O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaHR0cOivt+axgui/lOWbnlwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFBPU1Qg6K+35rGCJHt1cmx9IOi/lOWbnuaVsOaNrkpTT07op6PmnpDplJnor68gJHtyZXN9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBIVFRQ6K+35rGC5aSx6LSlLOeKtuaAgeeggTogJHt4aHIuc3RhdHVzfWApKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHhoci5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignSFRUUOivt+axguWHuumUmScpKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICAqIHBvc3Tor7fmsYJcclxuICAgICAgKiBAcGFyYW0gcGF0aCBhcGnot6/lvoRcclxuICAgICAgKiBAcGFyYW0gcGFyYW1zIOWPguaVsOWvueixoVxyXG4gICAgICAqL1xyXG4gICAgc3RhdGljIGFzeW5jIEdldChwYXRoOiBzdHJpbmcsIHBhcmFtcz86IGFueSkge1xyXG5cclxuICAgICAgICBsZXQgc2VhcmNoOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIGlmIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgc2VhcmNoID0gXCI/XCI7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHBhcmFtc1trZXldO1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoICs9IGtleSArIFwiPVwiICsgZWxlbWVudCArIFwiJlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB1cmw6IHN0cmluZyA9IFwiaHR0cDovL1wiICsgR2xvYmFsQ29uZmlnLklQb3J0ICsgcGF0aCArIHNlYXJjaC5zdWJzdHJpbmcoMCwgc2VhcmNoLmxlbmd0aCAtIDEpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCk7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XHJcbiAgICAgICAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlczogYW55O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBQT1NUIOivt+axgiR7dXJsfSDov5Tlm57mlbDmja5KU09O6Kej5p6Q6ZSZ6K+vICR7cmVzfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgSFRUUOivt+axguWksei0pSznirbmgIHnoIE6ICR7eGhyLnN0YXR1c31gKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB4aHIub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0hUVFDor7fmsYLlh7rplJknKSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgQ2hlY2tEZXZpY2VUeXBlKCk6IERldmljZVR5cGUge1xyXG4gICAgICAgIHZhciBCcm93c2VySW5mbyA9IHtcclxuICAgICAgICAgICAgdXNlckFnZW50OiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICAgIGlzQW5kcm9pZDogQm9vbGVhbihuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9hbmRyb2lkL2lnKSksXHJcbiAgICAgICAgICAgIGlzSXBob25lOiBCb29sZWFuKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lwaG9uZXxpcG9kL2lnKSksXHJcbiAgICAgICAgICAgIGlzSXBhZDogQm9vbGVhbihuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pcGFkL2lnKSksXHJcbiAgICAgICAgICAgIGlzV2VpeGluOiBCb29sZWFuKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL01pY3JvTWVzc2VuZ2VyL2lnKSksXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoQnJvd3NlckluZm8uaXNBbmRyb2lkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBEZXZpY2VUeXBlLkFuZHJvaWQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChCcm93c2VySW5mby5pc0lwYWQgfHwgQnJvd3NlckluZm8uaXNJcGhvbmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIERldmljZVR5cGUuSW9zO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBEZXZpY2VUeXBlLldlYjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuIl19