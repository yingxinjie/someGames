
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXGNvbmZpZ1xcVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXNDO0FBQ3RDLG1DQUFvRDtBQUVwRDtJQUFBO0lBaUtBLENBQUM7SUFoS0c7Ozs7T0FJRztJQUNJLGNBQVEsR0FBZixVQUFnQixJQUFhO1FBQ3pCLElBQUksSUFBSSxHQUFXLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ25DLElBQUksWUFBWSxHQUFZLElBQUksQ0FBQztRQUNqQyxJQUFJLE1BQU0sR0FBWSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2xDLE9BQU8sWUFBWSxFQUFFO1lBQ2pCLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ2hDLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDMUIsTUFBTTthQUNUO1lBRUQsSUFBSSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNoQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUMxQjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksYUFBTyxHQUFkLFVBQWUsS0FBYTtRQUN4QixPQUFPLHVCQUF1QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksWUFBTSxHQUFiLFVBQWMsSUFBWTtRQUN0Qix5Q0FBeUM7UUFDekMsMkNBQTJDO1FBQzNDLHdCQUF3QjtRQUN4Qiw0RkFBNEY7UUFDNUYsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixPQUFPLCtEQUErRCxDQUFDLElBQUks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QUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7d0JBQ2xDLENBQUMsQ0FBQzt3QkFFRixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2YsQ0FBQyxDQUFDLEVBQUM7OztLQUNOO0lBR00scUJBQWUsR0FBdEI7UUFDSSxJQUFJLFdBQVcsR0FBRztZQUNkLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRTtZQUM1QyxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzFELFFBQVEsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDN0QsTUFBTSxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwRCxRQUFRLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDbkUsQ0FBQTtRQUVELElBQUksV0FBVyxDQUFDLFNBQVMsRUFBRTtZQUN2QixPQUFPLG1CQUFVLENBQUMsT0FBTyxDQUFDO1NBQzdCO2FBQU0sSUFBSSxXQUFXLENBQUMsTUFBTSxJQUFJLFdBQVcsQ0FBQyxRQUFRLEVBQUU7WUFDbkQsT0FBTyxtQkFBVSxDQUFDLEdBQUcsQ0FBQztTQUN6QjthQUFNO1lBQ0gsT0FBTyxtQkFBVSxDQUFDLEdBQUcsQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFHTCxZQUFDO0FBQUQsQ0FqS0EsQUFpS0MsSUFBQTtBQWpLWSxzQkFBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4vVXNlckluZm9cIjtcclxuaW1wb3J0IHsgRGV2aWNlVHlwZSwgR2xvYmFsQ29uZmlnIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVXRpbHMge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmn6Xmib7mraToioLngrnlnKjov5DooYzkuK3nmoTot6/lirJcclxuICAgICAqIEBwYXJhbSBub2RlIOafpeivoueahOiKgueCuVxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBGaW5kUGF0aChub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IHBhdGg6IHN0cmluZyA9IFwiL1wiICsgbm9kZS5uYW1lO1xyXG4gICAgICAgIGxldCBjb250aW51ZUZpbmQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgICAgIGxldCBwYXJlbnQ6IGNjLk5vZGUgPSBub2RlLnBhcmVudDtcclxuICAgICAgICB3aGlsZSAoY29udGludWVGaW5kKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJlbnQuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlRmluZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcGF0aCA9IHBhcmVudC5uYW1lICsgcGF0aDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwYXRoID0gXCIvXCIgKyBwYXJlbnQubmFtZSArIHBhdGg7XHJcbiAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcGF0aDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOato+WImeWIpOaWreaJi+acuuWPt1xyXG4gICAgICogQHBhcmFtIHBob25lIOaJi+acuuWPt1xyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBJc1Bob25lKHBob25lOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gL14xWzM0NTY3ODldWzAtOV1cXGR7OH0vLnRlc3QocGhvbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5q2j5YiZ5Yik5pat6YKu566xXHJcbiAgICAgKiBAcGFyYW0gbWFpbCDpgq7nrrFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIElzTWFpbChtYWlsOiBzdHJpbmcpIHtcclxuICAgICAgICAvLyBsZXQgYXRJZHg6IG51bWJlciA9IG1haWwuaW5kZXhPZihcIkBcIik7XHJcbiAgICAgICAgLy8gbGV0IGRpYW5JZHg6IG51bWJlciA9IG1haWwuaW5kZXhPZihcIi5cIik7XHJcbiAgICAgICAgLy8gLy9A56ym5Y+35Zyo56ys5LqM5Liq5L2N572u5Lul5LiKIOS4lOWcqOeCueeahOWJjemdoiBcclxuICAgICAgICAvLyBpZiAoYXRJZHggPiAwICYmIGF0SWR4IDwgZGlhbklkeCAtIDEgJiYgZGlhbklkeCA+IGF0SWR4ICsgMSAmJiBkaWFuSWR4IDwgbWFpbC5sZW5ndGggLSAzKVxyXG4gICAgICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAvLyByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIC9eW0EtWmEtejAtOVxcdTRlMDAtXFx1OWZhNV0rQFthLXpBLVowLTlfLV0rKFxcLlthLXpBLVowLTlfLV0rKSskLy50ZXN0KG1haWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDojrflj5Z1cmznmoTlj4LmlbAgKi9cclxuICAgIHN0YXRpYyBVcmxQYXJhbXMoa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXdpbmRvdykgeyByZXR1cm4gXCJcIiB9XHJcbiAgICAgICAgbGV0IHNlYXJjaDogc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKFwiP1wiLCBcIlwiKTtcclxuICAgICAgICBsZXQgc2VhcmNoQXJyOiBzdHJpbmdbXSA9IHNlYXJjaC5zcGxpdChcIiZcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWFyY2hBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGt2QXJyOiBzdHJpbmdbXSA9IHNlYXJjaEFycltpXS5zcGxpdChcIj1cIik7XHJcbiAgICAgICAgICAgIGlmIChrdkFyclswXSA9PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBrdkFyclsxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHBvc3Tor7fmsYJcclxuICAgICAqIEBwYXJhbSBwYXRoIGFwaei3r+W+hFxyXG4gICAgICogQHBhcmFtIHBhcmFtcyDlj4LmlbDlr7nosaFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFzeW5jIFBvc3QocGF0aDogc3RyaW5nLCBwYXJhbXM6IGFueSkge1xyXG4gICAgICAgIGxldCB1cmw6IHN0cmluZyA9IFwiaHR0cDovL1wiICsgR2xvYmFsQ29uZmlnLklQb3J0ICsgcGF0aDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImh0dHDor7fmsYJcIiwgdXJsLCBKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgeGhyLm9wZW4oJ1BPU1QnLCB1cmwpO1xyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcInRva2VuXCIsIFVzZXJJbmZvLnRva2VuKTtcclxuICAgICAgICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzOiBhbnk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJodHRw6K+35rGC6L+U5ZueXCIsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgUE9TVCDor7fmsYIke3VybH0g6L+U5Zue5pWw5o2uSlNPTuino+aekOmUmeivryAke3Jlc31gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYEhUVFDor7fmsYLlpLHotKUs54q25oCB56CBOiAke3hoci5zdGF0dXN9YCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdIVFRQ6K+35rGC5Ye66ZSZJykpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgeGhyLnNlbmQoSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgICogcG9zdOivt+axglxyXG4gICAgICAqIEBwYXJhbSBwYXRoIGFwaei3r+W+hFxyXG4gICAgICAqIEBwYXJhbSBwYXJhbXMg5Y+C5pWw5a+56LGhXHJcbiAgICAgICovXHJcbiAgICBzdGF0aWMgYXN5bmMgR2V0KHBhdGg6IHN0cmluZywgcGFyYW1zPzogYW55KSB7XHJcblxyXG4gICAgICAgIGxldCBzZWFyY2g6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgaWYgKHBhcmFtcykge1xyXG4gICAgICAgICAgICBzZWFyY2ggPSBcIj9cIjtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gcGFyYW1zW2tleV07XHJcbiAgICAgICAgICAgICAgICBzZWFyY2ggKz0ga2V5ICsgXCI9XCIgKyBlbGVtZW50ICsgXCImXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHVybDogc3RyaW5nID0gXCJodHRwOi8vXCIgKyBHbG9iYWxDb25maWcuSVBvcnQgKyBwYXRoICsgc2VhcmNoLnN1YnN0cmluZygwLCBzZWFyY2gubGVuZ3RoIC0gMSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICB4aHIub3BlbignR0VUJywgdXJsKTtcclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcclxuICAgICAgICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzOiBhbnk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFBPU1Qg6K+35rGCJHt1cmx9IOi/lOWbnuaVsOaNrkpTT07op6PmnpDplJnor68gJHtyZXN9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBIVFRQ6K+35rGC5aSx6LSlLOeKtuaAgeeggTogJHt4aHIuc3RhdHVzfWApKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHhoci5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignSFRUUOivt+axguWHuumUmScpKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBDaGVja0RldmljZVR5cGUoKTogRGV2aWNlVHlwZSB7XHJcbiAgICAgICAgdmFyIEJyb3dzZXJJbmZvID0ge1xyXG4gICAgICAgICAgICB1c2VyQWdlbnQ6IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAgaXNBbmRyb2lkOiBCb29sZWFuKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2FuZHJvaWQvaWcpKSxcclxuICAgICAgICAgICAgaXNJcGhvbmU6IEJvb2xlYW4obmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaXBob25lfGlwb2QvaWcpKSxcclxuICAgICAgICAgICAgaXNJcGFkOiBCb29sZWFuKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lwYWQvaWcpKSxcclxuICAgICAgICAgICAgaXNXZWl4aW46IEJvb2xlYW4obmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvTWljcm9NZXNzZW5nZXIvaWcpKSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChCcm93c2VySW5mby5pc0FuZHJvaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIERldmljZVR5cGUuQW5kcm9pZDtcclxuICAgICAgICB9IGVsc2UgaWYgKEJyb3dzZXJJbmZvLmlzSXBhZCB8fCBCcm93c2VySW5mby5pc0lwaG9uZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gRGV2aWNlVHlwZS5Jb3M7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIERldmljZVR5cGUuV2ViO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG4iXX0=