
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
cc._RF.push(module, '5c567p4Ee1PKbpdydzlXR4L', 'Utils');
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
var C_Tip_1 = require("../tip/C_Tip");
var config_1 = require("./config");
var C_User_1 = require("../user/C_User");
var ViewManager_1 = require("./ViewManager");
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
            return config_1.DeviceType.ANDROID;
        }
        else if (BrowserInfo.isIpad || BrowserInfo.isIphone) {
            return config_1.DeviceType.IOS;
        }
        else {
            return config_1.DeviceType.WEB;
        }
    };
    Utils.serverCode = function (code) {
        var _this = this;
        if (code == 200) {
            console.log("成功");
            return true;
        }
        else if (code == 400) {
            console.log("系统异常");
        }
        else if (code == 405) {
            console.log("请求方式异常");
        }
        else if (code == 415) {
            console.log("Content-Type不正确");
        }
        else if (code == 500) {
            console.log("登录过期");
        }
        else if (code == 501) {
            console.log("账户异常");
        }
        if (code == 500 || code == 501) {
            C_Tip_1.C_Tip.instance.showTip(config_1.config.instance.getLang(0), function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ViewManager_1.ViewManager.Open(config_1.ViewEnum.Login)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        }
        return false;
    };
    Utils.getSpriteFrame = function (url) {
        return new Promise(function (resolve, reject) {
            cc.resources.load(url, function (err, asset) {
                if (err) {
                    cc.error(err);
                    return;
                }
                var spriteFrame = new cc.SpriteFrame(asset);
                resolve(spriteFrame);
            });
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXGNvbmZpZ1xcVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXFDO0FBQ3JDLG1DQUFzRTtBQUN0RSx5Q0FBd0M7QUFDeEMsNkNBQTRDO0FBRzVDO0lBQUE7SUFvTUEsQ0FBQztJQW5NRzs7OztPQUlHO0lBQ0ksY0FBUSxHQUFmLFVBQWdCLElBQWE7UUFDekIsSUFBSSxJQUFJLEdBQVcsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkMsSUFBSSxZQUFZLEdBQVksSUFBSSxDQUFDO1FBQ2pDLElBQUksTUFBTSxHQUFZLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbEMsT0FBTyxZQUFZLEVBQUU7WUFDakIsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDaEMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDckIsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixNQUFNO2FBQ1Q7WUFFRCxJQUFJLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2hDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1NBQzFCO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxhQUFPLEdBQWQsVUFBZSxLQUFhO1FBQ3hCLE9BQU8sdUJBQXVCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7O09BR0c7SUFDSSxZQUFNLEdBQWIsVUFBYyxJQUFZO1FBQ3RCLHlDQUF5QztRQUN6QywyQ0FBMkM7UUFDM0Msd0JBQXdCO1FBQ3hCLDRGQUE0RjtRQUM1RixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FB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QzNDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUN4QixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVMLFlBQUM7QUFBRCxDQXBNQSxBQW9NQyxJQUFBO0FBcE1ZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ19UaXAgfSBmcm9tIFwiLi4vdGlwL0NfVGlwXCI7XHJcbmltcG9ydCB7IGNvbmZpZywgRGV2aWNlVHlwZSwgR2xvYmFsQ29uZmlnLCBWaWV3RW51bSB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBDX1VzZXIgfSBmcm9tIFwiLi4vdXNlci9DX1VzZXJcIjtcclxuaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwiLi9WaWV3TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBidW5kbGVMb2FkZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2NyaXB0L2J1bmRsZUxvYWRlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFV0aWxzIHtcclxuICAgIC8qKlxyXG4gICAgICog5p+l5om+5q2k6IqC54K55Zyo6L+Q6KGM5Lit55qE6Lev5YqyXHJcbiAgICAgKiBAcGFyYW0gbm9kZSDmn6Xor6LnmoToioLngrlcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgRmluZFBhdGgobm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIGxldCBwYXRoOiBzdHJpbmcgPSBcIi9cIiArIG5vZGUubmFtZTtcclxuICAgICAgICBsZXQgY29udGludWVGaW5kOiBib29sZWFuID0gdHJ1ZTtcclxuICAgICAgICBsZXQgcGFyZW50OiBjYy5Ob2RlID0gbm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgd2hpbGUgKGNvbnRpbnVlRmluZCkge1xyXG4gICAgICAgICAgICBpZiAocGFyZW50LmdldENvbXBvbmVudChjYy5DYW52YXMpKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZUZpbmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHBhdGggPSBwYXJlbnQubmFtZSArIHBhdGg7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGF0aCA9IFwiL1wiICsgcGFyZW50Lm5hbWUgKyBwYXRoO1xyXG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmraPliJnliKTmlq3miYvmnLrlj7dcclxuICAgICAqIEBwYXJhbSBwaG9uZSDmiYvmnLrlj7dcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgSXNQaG9uZShwaG9uZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIC9eMVszNDU2Nzg5XVswLTldXFxkezh9Ly50ZXN0KHBob25lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOato+WImeWIpOaWremCrueusVxyXG4gICAgICogQHBhcmFtIG1haWwg6YKu566xXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBJc01haWwobWFpbDogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gbGV0IGF0SWR4OiBudW1iZXIgPSBtYWlsLmluZGV4T2YoXCJAXCIpO1xyXG4gICAgICAgIC8vIGxldCBkaWFuSWR4OiBudW1iZXIgPSBtYWlsLmluZGV4T2YoXCIuXCIpO1xyXG4gICAgICAgIC8vIC8vQOespuWPt+WcqOesrOS6jOS4quS9jee9ruS7peS4iiDkuJTlnKjngrnnmoTliY3pnaIgXHJcbiAgICAgICAgLy8gaWYgKGF0SWR4ID4gMCAmJiBhdElkeCA8IGRpYW5JZHggLSAxICYmIGRpYW5JZHggPiBhdElkeCArIDEgJiYgZGlhbklkeCA8IG1haWwubGVuZ3RoIC0gMylcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgLy8gcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiAvXltBLVphLXowLTlcXHU0ZTAwLVxcdTlmYTVdK0BbYS16QS1aMC05Xy1dKyhcXC5bYS16QS1aMC05Xy1dKykrJC8udGVzdChtYWlsKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog6I635Y+WdXJs55qE5Y+C5pWwICovXHJcbiAgICBzdGF0aWMgVXJsUGFyYW1zKGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCF3aW5kb3cpIHsgcmV0dXJuIFwiXCIgfVxyXG4gICAgICAgIGxldCBzZWFyY2g6IHN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZShcIj9cIiwgXCJcIik7XHJcbiAgICAgICAgbGV0IHNlYXJjaEFycjogc3RyaW5nW10gPSBzZWFyY2guc3BsaXQoXCImXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VhcmNoQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBrdkFycjogc3RyaW5nW10gPSBzZWFyY2hBcnJbaV0uc3BsaXQoXCI9XCIpO1xyXG4gICAgICAgICAgICBpZiAoa3ZBcnJbMF0gPT0ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ga3ZBcnJbMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBwb3N06K+35rGCXHJcbiAgICAgKiBAcGFyYW0gcGF0aCBhcGnot6/lvoRcclxuICAgICAqIEBwYXJhbSBwYXJhbXMg5Y+C5pWw5a+56LGhXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhc3luYyBQb3N0KHBhdGg6IHN0cmluZywgcGFyYW1zOiBhbnkpIHtcclxuICAgICAgICBsZXQgdXJsOiBzdHJpbmcgPSBcImh0dHA6Ly9cIiArIEdsb2JhbENvbmZpZy5JUG9ydCArIHBhdGg7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJodHRw6K+35rGCXCIsIHVybCwgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHhoci5vcGVuKCdQT1NUJywgdXJsKTtcclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJ0b2tlblwiLCBDX1VzZXIuaW5zLnRva2VuKTtcclxuICAgICAgICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzOiBhbnk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJodHRw6K+35rGC6L+U5ZueXCIsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgUE9TVCDor7fmsYIke3VybH0g6L+U5Zue5pWw5o2uSlNPTuino+aekOmUmeivryAke3Jlc31gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYEhUVFDor7fmsYLlpLHotKUs54q25oCB56CBOiAke3hoci5zdGF0dXN9YCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdIVFRQ6K+35rGC5Ye66ZSZJykpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgeGhyLnNlbmQoSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgICogcG9zdOivt+axglxyXG4gICAgICAqIEBwYXJhbSBwYXRoIGFwaei3r+W+hFxyXG4gICAgICAqIEBwYXJhbSBwYXJhbXMg5Y+C5pWw5a+56LGhXHJcbiAgICAgICovXHJcbiAgICBzdGF0aWMgYXN5bmMgR2V0KHBhdGg6IHN0cmluZywgcGFyYW1zPzogYW55KSB7XHJcblxyXG4gICAgICAgIGxldCBzZWFyY2g6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgaWYgKHBhcmFtcykge1xyXG4gICAgICAgICAgICBzZWFyY2ggPSBcIj9cIjtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gcGFyYW1zW2tleV07XHJcbiAgICAgICAgICAgICAgICBzZWFyY2ggKz0ga2V5ICsgXCI9XCIgKyBlbGVtZW50ICsgXCImXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHVybDogc3RyaW5nID0gXCJodHRwOi8vXCIgKyBHbG9iYWxDb25maWcuSVBvcnQgKyBwYXRoICsgc2VhcmNoLnN1YnN0cmluZygwLCBzZWFyY2gubGVuZ3RoIC0gMSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICB4aHIub3BlbignR0VUJywgdXJsKTtcclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcclxuICAgICAgICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzOiBhbnk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFBPU1Qg6K+35rGCJHt1cmx9IOi/lOWbnuaVsOaNrkpTT07op6PmnpDplJnor68gJHtyZXN9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBIVFRQ6K+35rGC5aSx6LSlLOeKtuaAgeeggTogJHt4aHIuc3RhdHVzfWApKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHhoci5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignSFRUUOivt+axguWHuumUmScpKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBDaGVja0RldmljZVR5cGUoKTogRGV2aWNlVHlwZSB7XHJcbiAgICAgICAgdmFyIEJyb3dzZXJJbmZvID0ge1xyXG4gICAgICAgICAgICB1c2VyQWdlbnQ6IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAgaXNBbmRyb2lkOiBCb29sZWFuKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2FuZHJvaWQvaWcpKSxcclxuICAgICAgICAgICAgaXNJcGhvbmU6IEJvb2xlYW4obmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaXBob25lfGlwb2QvaWcpKSxcclxuICAgICAgICAgICAgaXNJcGFkOiBCb29sZWFuKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lwYWQvaWcpKSxcclxuICAgICAgICAgICAgaXNXZWl4aW46IEJvb2xlYW4obmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvTWljcm9NZXNzZW5nZXIvaWcpKSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChCcm93c2VySW5mby5pc0FuZHJvaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIERldmljZVR5cGUuQU5EUk9JRDtcclxuICAgICAgICB9IGVsc2UgaWYgKEJyb3dzZXJJbmZvLmlzSXBhZCB8fCBCcm93c2VySW5mby5pc0lwaG9uZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gRGV2aWNlVHlwZS5JT1M7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIERldmljZVR5cGUuV0VCO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2VydmVyQ29kZShjb2RlOm51bWJlcik6Ym9vbGVhbntcclxuICAgICAgICBpZihjb2RlID09IDIwMCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5oiQ5YqfXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1lbHNlIGlmKGNvZGUgPT0gNDAwKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLns7vnu5/lvILluLhcIilcclxuICAgICAgICB9ZWxzZSBpZihjb2RlID09IDQwNSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6K+35rGC5pa55byP5byC5bi4XCIpXHJcbiAgICAgICAgfWVsc2UgaWYoY29kZSA9PSA0MTUpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbnRlbnQtVHlwZeS4jeato+ehrlwiKVxyXG4gICAgICAgIH1lbHNlIGlmKGNvZGUgPT0gNTAwKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLnmbvlvZXov4fmnJ9cIilcclxuICAgICAgICB9ZWxzZSBpZihjb2RlID09IDUwMSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6LSm5oi35byC5bi4XCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGNvZGUgPT0gNTAwIHx8IGNvZGUgPT0gNTAxKXtcclxuICAgICAgICAgICAgQ19UaXAuaW5zdGFuY2Uuc2hvd1RpcChjb25maWcuaW5zdGFuY2UuZ2V0TGFuZygwKSxhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBWaWV3TWFuYWdlci5PcGVuKFZpZXdFbnVtLkxvZ2luKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRTcHJpdGVGcmFtZSh1cmw6IHN0cmluZyk6IFByb21pc2U8Y2MuU3ByaXRlRnJhbWU+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCh1cmwsIChlcnIsIGFzc2V0OiBjYy5UZXh0dXJlMkQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUoYXNzZXQpXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHNwcml0ZUZyYW1lKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgIFxyXG59XHJcblxyXG4iXX0=