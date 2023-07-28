
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXGNvbmZpZ1xcVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBc0M7QUFDdEMsbUNBQW9EO0FBRXBEO0lBQUE7SUFpS0EsQ0FBQztJQWhLRzs7OztPQUlHO0lBQ0ksY0FBUSxHQUFmLFVBQWdCLElBQWE7UUFDekIsSUFBSSxJQUFJLEdBQVcsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkMsSUFBSSxZQUFZLEdBQVksSUFBSSxDQUFDO1FBQ2pDLElBQUksTUFBTSxHQUFZLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbEMsT0FBTyxZQUFZLEVBQUU7WUFDakIsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDaEMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDckIsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixNQUFNO2FBQ1Q7WUFFRCxJQUFJLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2hDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1NBQzFCO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxhQUFPLEdBQWQsVUFBZSxLQUFhO1FBQ3hCLE9BQU8sdUJBQXVCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7O09BR0c7SUFDSSxZQUFNLEdBQWIsVUFBYyxJQUFZO1FBQ3RCLHlDQUF5QztRQUN6QywyQ0FBMkM7UUFDM0Msd0JBQXdCO1FBQ3hCLDRGQUE0RjtRQUM1RixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLE9BQU8sK0RBQStELENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFRCxl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QUFDO3dCQUVGLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDZixDQUFDLENBQUMsRUFBQzs7O0tBQ047SUFHTSxxQkFBZSxHQUF0QjtRQUNJLElBQUksV0FBVyxHQUFHO1lBQ2QsU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFO1lBQzVDLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDMUQsUUFBUSxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM3RCxNQUFNLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELFFBQVEsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUNuRSxDQUFBO1FBRUQsSUFBSSxXQUFXLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLE9BQU8sbUJBQVUsQ0FBQyxPQUFPLENBQUM7U0FDN0I7YUFBTSxJQUFJLFdBQVcsQ0FBQyxNQUFNLElBQUksV0FBVyxDQUFDLFFBQVEsRUFBRTtZQUNuRCxPQUFPLG1CQUFVLENBQUMsR0FBRyxDQUFDO1NBQ3pCO2FBQU07WUFDSCxPQUFPLG1CQUFVLENBQUMsR0FBRyxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUdMLFlBQUM7QUFBRCxDQWpLQSxBQWlLQyxJQUFBO0FBaktZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tIFwiLi9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgeyBEZXZpY2VUeXBlLCBHbG9iYWxDb25maWcgfSBmcm9tIFwiLi9jb25maWdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVdGlscyB7XHJcbiAgICAvKipcclxuICAgICAqIOafpeaJvuatpOiKgueCueWcqOi/kOihjOS4reeahOi3r+WKslxyXG4gICAgICogQHBhcmFtIG5vZGUg5p+l6K+i55qE6IqC54K5XHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIEZpbmRQYXRoKG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBsZXQgcGF0aDogc3RyaW5nID0gXCIvXCIgKyBub2RlLm5hbWU7XHJcbiAgICAgICAgbGV0IGNvbnRpbnVlRmluZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICAgICAgbGV0IHBhcmVudDogY2MuTm9kZSA9IG5vZGUucGFyZW50O1xyXG4gICAgICAgIHdoaWxlIChjb250aW51ZUZpbmQpIHtcclxuICAgICAgICAgICAgaWYgKHBhcmVudC5nZXRDb21wb25lbnQoY2MuQ2FudmFzKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWVGaW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBwYXRoID0gcGFyZW50Lm5hbWUgKyBwYXRoO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBhdGggPSBcIi9cIiArIHBhcmVudC5uYW1lICsgcGF0aDtcclxuICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5q2j5YiZ5Yik5pat5omL5py65Y+3XHJcbiAgICAgKiBAcGFyYW0gcGhvbmUg5omL5py65Y+3XHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIElzUGhvbmUocGhvbmU6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiAvXjFbMzQ1Njc4OV1bMC05XVxcZHs4fS8udGVzdChwaG9uZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmraPliJnliKTmlq3pgq7nrrFcclxuICAgICAqIEBwYXJhbSBtYWlsIOmCrueusVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgSXNNYWlsKG1haWw6IHN0cmluZykge1xyXG4gICAgICAgIC8vIGxldCBhdElkeDogbnVtYmVyID0gbWFpbC5pbmRleE9mKFwiQFwiKTtcclxuICAgICAgICAvLyBsZXQgZGlhbklkeDogbnVtYmVyID0gbWFpbC5pbmRleE9mKFwiLlwiKTtcclxuICAgICAgICAvLyAvL0DnrKblj7flnKjnrKzkuozkuKrkvY3nva7ku6XkuIog5LiU5Zyo54K555qE5YmN6Z2iIFxyXG4gICAgICAgIC8vIGlmIChhdElkeCA+IDAgJiYgYXRJZHggPCBkaWFuSWR4IC0gMSAmJiBkaWFuSWR4ID4gYXRJZHggKyAxICYmIGRpYW5JZHggPCBtYWlsLmxlbmd0aCAtIDMpXHJcbiAgICAgICAgLy8gICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIC8vIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gL15bQS1aYS16MC05XFx1NGUwMC1cXHU5ZmE1XStAW2EtekEtWjAtOV8tXSsoXFwuW2EtekEtWjAtOV8tXSspKyQvLnRlc3QobWFpbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOiOt+WPlnVybOeahOWPguaVsCAqL1xyXG4gICAgc3RhdGljIFVybFBhcmFtcyhrZXk6IHN0cmluZykge1xyXG4gICAgICAgIGlmICghd2luZG93KSB7IHJldHVybiBcIlwiIH1cclxuICAgICAgICBsZXQgc2VhcmNoOiBzdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoXCI/XCIsIFwiXCIpO1xyXG4gICAgICAgIGxldCBzZWFyY2hBcnI6IHN0cmluZ1tdID0gc2VhcmNoLnNwbGl0KFwiJlwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlYXJjaEFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQga3ZBcnI6IHN0cmluZ1tdID0gc2VhcmNoQXJyW2ldLnNwbGl0KFwiPVwiKTtcclxuICAgICAgICAgICAgaWYgKGt2QXJyWzBdID09IGtleSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGt2QXJyWzFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcG9zdOivt+axglxyXG4gICAgICogQHBhcmFtIHBhdGggYXBp6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gcGFyYW1zIOWPguaVsOWvueixoVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYXN5bmMgUG9zdChwYXRoOiBzdHJpbmcsIHBhcmFtczogYW55KSB7XHJcbiAgICAgICAgbGV0IHVybDogc3RyaW5nID0gXCJodHRwOi8vXCIgKyBHbG9iYWxDb25maWcuSVBvcnQgKyBwYXRoO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaHR0cOivt+axglwiLCB1cmwsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICB4aHIub3BlbignUE9TVCcsIHVybCk7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwidG9rZW5cIiwgVXNlckluZm8udG9rZW4pO1xyXG4gICAgICAgICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXM6IGFueTtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImh0dHDor7fmsYLov5Tlm55cIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBQT1NUIOivt+axgiR7dXJsfSDov5Tlm57mlbDmja5KU09O6Kej5p6Q6ZSZ6K+vICR7cmVzfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgSFRUUOivt+axguWksei0pSznirbmgIHnoIE6ICR7eGhyLnN0YXR1c31gKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB4aHIub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0hUVFDor7fmsYLlh7rplJknKSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB4aHIuc2VuZChKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAgKiBwb3N06K+35rGCXHJcbiAgICAgICogQHBhcmFtIHBhdGggYXBp6Lev5b6EXHJcbiAgICAgICogQHBhcmFtIHBhcmFtcyDlj4LmlbDlr7nosaFcclxuICAgICAgKi9cclxuICAgIHN0YXRpYyBhc3luYyBHZXQocGF0aDogc3RyaW5nLCBwYXJhbXM/OiBhbnkpIHtcclxuXHJcbiAgICAgICAgbGV0IHNlYXJjaDogc3RyaW5nID0gXCJcIjtcclxuICAgICAgICBpZiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIHNlYXJjaCA9IFwiP1wiO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBwYXJhbXNba2V5XTtcclxuICAgICAgICAgICAgICAgIHNlYXJjaCArPSBrZXkgKyBcIj1cIiArIGVsZW1lbnQgKyBcIiZcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdXJsOiBzdHJpbmcgPSBcImh0dHA6Ly9cIiArIEdsb2JhbENvbmZpZy5JUG9ydCArIHBhdGggKyBzZWFyY2guc3Vic3RyaW5nKDAsIHNlYXJjaC5sZW5ndGggLSAxKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwpO1xyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xyXG4gICAgICAgICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXM6IGFueTtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgUE9TVCDor7fmsYIke3VybH0g6L+U5Zue5pWw5o2uSlNPTuino+aekOmUmeivryAke3Jlc31gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYEhUVFDor7fmsYLlpLHotKUs54q25oCB56CBOiAke3hoci5zdGF0dXN9YCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdIVFRQ6K+35rGC5Ye66ZSZJykpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIENoZWNrRGV2aWNlVHlwZSgpOiBEZXZpY2VUeXBlIHtcclxuICAgICAgICB2YXIgQnJvd3NlckluZm8gPSB7XHJcbiAgICAgICAgICAgIHVzZXJBZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAgICBpc0FuZHJvaWQ6IEJvb2xlYW4obmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvYW5kcm9pZC9pZykpLFxyXG4gICAgICAgICAgICBpc0lwaG9uZTogQm9vbGVhbihuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pcGhvbmV8aXBvZC9pZykpLFxyXG4gICAgICAgICAgICBpc0lwYWQ6IEJvb2xlYW4obmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaXBhZC9pZykpLFxyXG4gICAgICAgICAgICBpc1dlaXhpbjogQm9vbGVhbihuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9NaWNyb01lc3Nlbmdlci9pZykpLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKEJyb3dzZXJJbmZvLmlzQW5kcm9pZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gRGV2aWNlVHlwZS5BbmRyb2lkO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoQnJvd3NlckluZm8uaXNJcGFkIHx8IEJyb3dzZXJJbmZvLmlzSXBob25lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBEZXZpY2VUeXBlLklvcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gRGV2aWNlVHlwZS5XZWI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbiJdfQ==