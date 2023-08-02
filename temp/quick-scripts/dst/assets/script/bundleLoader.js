
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/bundleLoader.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f60a2lJhRtLq5XorHkvKL8s', 'bundleLoader');
// script/bundleLoader.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
exports.bundleLoader = void 0;
window["REMOTE_SERVER_ROOT"] = cc.assetManager.downloader.remoteServerAddress;
window["REMOTE_BUNDLE_MANIFEST"] = REMOTE_SERVER_ROOT + 'remote/manifest.json';
var bundleLoader;
(function (bundleLoader) {
    var ENUM_BUNDLE;
    (function (ENUM_BUNDLE) {
        ENUM_BUNDLE["BASE"] = "00_base";
        ENUM_BUNDLE["HALL"] = "01_hall";
        ENUM_BUNDLE["GAME"] = "02_game";
    })(ENUM_BUNDLE = bundleLoader.ENUM_BUNDLE || (bundleLoader.ENUM_BUNDLE = {}));
    bundleLoader.ENUM_BUNDLE_SAVE = {};
})(bundleLoader = exports.bundleLoader || (exports.bundleLoader = {}));
//注册持久存储
function regLocalStorage(storageKey) {
    return function (target, propertyKey) {
        Object.defineProperty(target, propertyKey, {
            get: function () {
                return cc.sys.localStorage.getItem(storageKey);
            },
            set: function (val) {
                if (val == null)
                    cc.sys.localStorage.removeItem(storageKey);
                else
                    cc.sys.localStorage.setItem(storageKey, val);
            },
        });
    };
}
(function (bundleLoader) {
    var _model = /** @class */ (function () {
        function _model() {
        }
        Object.defineProperty(_model.prototype, "manifest", {
            get: function () {
                if (this.storeManifest == null)
                    return null;
                return JSON.parse(this.storeManifest);
            },
            set: function (value) {
                if (value == null)
                    this.storeManifest = null;
                else
                    this.storeManifest = JSON.stringify(value);
            },
            enumerable: false,
            configurable: true
        });
        //检查版本
        _model.prototype.checkBundleVersion = function () {
            return __awaiter(this, void 0, void 0, function () {
                var manifest, bundleName;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (CC_PREVIEW || !CC_JSB)
                                return [2 /*return*/];
                            cc.log("Bundle\u7248\u672C\u68C0\u67E5\u5F00\u59CB");
                            return [4 /*yield*/, this.getRemoteBundleVersion()];
                        case 1:
                            manifest = _a.sent();
                            if (manifest == null)
                                return [2 /*return*/, false];
                            for (bundleName in this.manifest) {
                                if (this.manifest[bundleName] != manifest[bundleName]) {
                                    if (cc.assetManager.getBundle(bundleName) != null) {
                                        cc.log("bundle \u5B58\u5728\u66F4\u65B0 \u540D\uFF1A" + bundleName + " \u5F53\u524D\u7248\u672C:" + this.manifest[bundleName] + " \u8FDC\u7A0B\u7248\u672C:" + manifest[bundleName]);
                                        return [2 /*return*/, true];
                                    }
                                }
                            }
                            cc.log("Bundle\u7248\u672C\u68C0\u67E5\u5B8C\u6210");
                            return [2 /*return*/, false];
                    }
                });
            });
        };
        //获取版本
        _model.prototype.getRemoteBundleVersion = function () {
            return __awaiter(this, void 0, void 0, function () {
                var manifest;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (CC_PREVIEW || !CC_JSB)
                                return [2 /*return*/];
                            return [4 /*yield*/, new Promise(function (resolve, reject) {
                                    cc.assetManager.downloader['downloadFile'](REMOTE_BUNDLE_MANIFEST, { responseType: 'json' }, null, function (err, manifest) {
                                        if (err) {
                                            cc.error('获取远程版本错误' + JSON.stringify(err));
                                            resolve(null);
                                            return;
                                        }
                                        resolve(manifest);
                                    });
                                })];
                        case 1:
                            manifest = _a.sent();
                            return [2 /*return*/, manifest];
                    }
                });
            });
        };
        _model.prototype.loadBundle = function (enumBundle) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var cb = function (err, bundle) {
                                if (err) {
                                    cc.error('加载Bundle错误' + JSON.stringify(err));
                                    reject(err);
                                    return;
                                }
                                bundleLoader.ENUM_BUNDLE_SAVE[enumBundle] = bundle;
                                console.log("bundle\u5305" + enumBundle + "\u52A0\u8F7D\u5B8C\u6210");
                                resolve(bundle);
                            };
                            if (CC_JSB && !CC_PREVIEW) {
                                if (_this.manifest[enumBundle] == null)
                                    throw '远程版本不存在';
                                cc.assetManager.loadBundle(REMOTE_SERVER_ROOT + 'remote/' + enumBundle, { version: _this.manifest[enumBundle] }, cb);
                            }
                            else {
                                cc.assetManager.loadBundle(enumBundle, cb);
                            }
                        })];
                });
            });
        };
        _model.prototype.Bundle = function (enumBundle) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/];
                });
            });
        };
        __decorate([
            regLocalStorage("BUNDLE_MANIFEST")
        ], _model.prototype, "storeManifest", void 0);
        return _model;
    }());
    bundleLoader.model = new _model();
})(bundleLoader = exports.bundleLoader || (exports.bundleLoader = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxidW5kbGVMb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUM7QUFDOUUsTUFBTSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsa0JBQWtCLEdBQUcsc0JBQXNCLENBQUM7QUFFL0UsSUFBaUIsWUFBWSxDQVU1QjtBQVZELFdBQWlCLFlBQVk7SUFFekIsSUFBWSxXQUlYO0lBSkQsV0FBWSxXQUFXO1FBQ25CLCtCQUFnQixDQUFBO1FBQ2hCLCtCQUFnQixDQUFBO1FBQ2hCLCtCQUFnQixDQUFBO0lBQ3BCLENBQUMsRUFKVyxXQUFXLEdBQVgsd0JBQVcsS0FBWCx3QkFBVyxRQUl0QjtJQUVZLDZCQUFnQixHQUE4QyxFQUFFLENBQUE7QUFFakYsQ0FBQyxFQVZnQixZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQVU1QjtBQUVELFFBQVE7QUFDUixTQUFTLGVBQWUsQ0FBQyxVQUFrQjtJQUN2QyxPQUFPLFVBQUMsTUFBTSxFQUFFLFdBQW1CO1FBQy9CLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRTtZQUN2QyxHQUFHLEVBQUU7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbkQsQ0FBQztZQUNELEdBQUcsRUFBRSxVQUFVLEdBQVc7Z0JBQ3RCLElBQUksR0FBRyxJQUFJLElBQUk7b0JBQ1gsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDOztvQkFFM0MsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFB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b0NBQzdDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQ0FDWixPQUFPO2lDQUNWO2dDQUVELGFBQUEsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEdBQUcsTUFBTSxDQUFDO2dDQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFVLFVBQVUsNkJBQU0sQ0FBQyxDQUFBO2dDQUN2QyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7NEJBQ3BCLENBQUMsQ0FBQzs0QkFFRixJQUFJLE1BQU0sSUFBSSxDQUFDLFVBQVUsRUFBRTtnQ0FDdkIsSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUk7b0NBQUUsTUFBTSxTQUFTLENBQUM7Z0NBQ3ZELEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsR0FBRyxVQUFVLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDOzZCQUN2SDtpQ0FDSTtnQ0FDRCxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7NkJBQzlDO3dCQUNMLENBQUMsQ0FBQyxFQUFDOzs7U0FDTjtRQUdLLHVCQUFNLEdBQVosVUFBYSxVQUF1Qjs7Ozs7O1NBR25DO1FBekVEO1lBREMsZUFBZSxDQUFDLGlCQUFpQixDQUFDO3FEQUNiO1FBMEUxQixhQUFDO0tBNUVELEFBNEVDLElBQUE7SUFFWSxrQkFBSyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7QUFFdEMsQ0FBQyxFQWxGZ0IsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFrRjVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93W1wiUkVNT1RFX1NFUlZFUl9ST09UXCJdID0gY2MuYXNzZXRNYW5hZ2VyLmRvd25sb2FkZXIucmVtb3RlU2VydmVyQWRkcmVzcztcclxud2luZG93W1wiUkVNT1RFX0JVTkRMRV9NQU5JRkVTVFwiXSA9IFJFTU9URV9TRVJWRVJfUk9PVCArICdyZW1vdGUvbWFuaWZlc3QuanNvbic7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIGJ1bmRsZUxvYWRlciB7XHJcbiAgICBleHBvcnQgdHlwZSBUWVBFX01BTklGRVNUID0geyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVxyXG4gICAgZXhwb3J0IGVudW0gRU5VTV9CVU5ETEUge1xyXG4gICAgICAgIEJBU0UgPSAnMDBfYmFzZScsXHJcbiAgICAgICAgSEFMTCA9ICcwMV9oYWxsJyxcclxuICAgICAgICBHQU1FID0gJzAyX2dhbWUnLFxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjb25zdCBFTlVNX0JVTkRMRV9TQVZFOiB7IFtrZXk6IHN0cmluZ106IGNjLkFzc2V0TWFuYWdlci5CdW5kbGUgfSA9IHt9XHJcblxyXG59XHJcblxyXG4vL+azqOWGjOaMgeS5heWtmOWCqFxyXG5mdW5jdGlvbiByZWdMb2NhbFN0b3JhZ2Uoc3RvcmFnZUtleTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gKHRhcmdldCwgcHJvcGVydHlLZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCk6IG51bWJlciB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VLZXkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWw6IHN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbCA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShzdG9yYWdlS2V5KTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmFnZUtleSwgdmFsKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBidW5kbGVMb2FkZXIge1xyXG5cclxuICAgIGNsYXNzIF9tb2RlbCB7XHJcbiAgICAgICAgQHJlZ0xvY2FsU3RvcmFnZShcIkJVTkRMRV9NQU5JRkVTVFwiKVxyXG4gICAgICAgIHN0b3JlTWFuaWZlc3Q6IHN0cmluZztcclxuXHJcbiAgICAgICAgZ2V0IG1hbmlmZXN0KCk6IFRZUEVfTUFOSUZFU1Qge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdG9yZU1hbmlmZXN0ID09IG51bGwpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLnN0b3JlTWFuaWZlc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXQgbWFuaWZlc3QodmFsdWU6IFRZUEVfTUFOSUZFU1QpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHRoaXMuc3RvcmVNYW5pZmVzdCA9IG51bGw7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5zdG9yZU1hbmlmZXN0ID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/mo4Dmn6XniYjmnKxcclxuICAgICAgICBhc3luYyBjaGVja0J1bmRsZVZlcnNpb24oKSB7XHJcbiAgICAgICAgICAgIGlmIChDQ19QUkVWSUVXIHx8ICFDQ19KU0IpIHJldHVybjtcclxuICAgICAgICAgICAgY2MubG9nKGBCdW5kbGXniYjmnKzmo4Dmn6XlvIDlp4tgKTtcclxuICAgICAgICAgICAgbGV0IG1hbmlmZXN0ID0gYXdhaXQgdGhpcy5nZXRSZW1vdGVCdW5kbGVWZXJzaW9uKCk7XHJcbiAgICAgICAgICAgIGlmIChtYW5pZmVzdCA9PSBudWxsKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGJ1bmRsZU5hbWUgaW4gdGhpcy5tYW5pZmVzdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWFuaWZlc3RbYnVuZGxlTmFtZV0gIT0gbWFuaWZlc3RbYnVuZGxlTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2MuYXNzZXRNYW5hZ2VyLmdldEJ1bmRsZShidW5kbGVOYW1lKSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgYnVuZGxlIOWtmOWcqOabtOaWsCDlkI3vvJoke2J1bmRsZU5hbWV9IOW9k+WJjeeJiOacrDoke3RoaXMubWFuaWZlc3RbYnVuZGxlTmFtZV19IOi/nOeoi+eJiOacrDoke21hbmlmZXN0W2J1bmRsZU5hbWVdfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2MubG9nKGBCdW5kbGXniYjmnKzmo4Dmn6XlrozmiJBgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/ojrflj5bniYjmnKxcclxuICAgICAgICBhc3luYyBnZXRSZW1vdGVCdW5kbGVWZXJzaW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoQ0NfUFJFVklFVyB8fCAhQ0NfSlNCKSByZXR1cm47XHJcbiAgICAgICAgICAgIGxldCBtYW5pZmVzdCA9IGF3YWl0IG5ldyBQcm9taXNlPFRZUEVfTUFOSUZFU1Q+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5kb3dubG9hZGVyWydkb3dubG9hZEZpbGUnXShSRU1PVEVfQlVORExFX01BTklGRVNULCB7IHJlc3BvbnNlVHlwZTogJ2pzb24nIH0sIG51bGwsIChlcnIsIG1hbmlmZXN0OiBUWVBFX01BTklGRVNUKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcign6I635Y+W6L+c56iL54mI5pys6ZSZ6K+vJyArIEpTT04uc3RyaW5naWZ5KGVycikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobWFuaWZlc3QpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBtYW5pZmVzdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFzeW5jIGxvYWRCdW5kbGUoZW51bUJ1bmRsZTogRU5VTV9CVU5ETEUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGNjLkFzc2V0TWFuYWdlci5CdW5kbGU+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjYiA9IChlcnIsIGJ1bmRsZTogY2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoJ+WKoOi9vUJ1bmRsZemUmeivrycgKyBKU09OLnN0cmluZ2lmeShlcnIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEVOVU1fQlVORExFX1NBVkVbZW51bUJ1bmRsZV0gPSBidW5kbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGJ1bmRsZeWMhSR7ZW51bUJ1bmRsZX3liqDovb3lrozmiJBgKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYnVuZGxlKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKENDX0pTQiAmJiAhQ0NfUFJFVklFVykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hbmlmZXN0W2VudW1CdW5kbGVdID09IG51bGwpIHRocm93ICfov5znqIvniYjmnKzkuI3lrZjlnKgnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKFJFTU9URV9TRVJWRVJfUk9PVCArICdyZW1vdGUvJyArIGVudW1CdW5kbGUsIHsgdmVyc2lvbjogdGhpcy5tYW5pZmVzdFtlbnVtQnVuZGxlXSB9LCBjYik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZShlbnVtQnVuZGxlLCBjYik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGFzeW5jIEJ1bmRsZShlbnVtQnVuZGxlOiBFTlVNX0JVTkRMRSkge1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjb25zdCBtb2RlbCA9IG5ldyBfbW9kZWwoKTtcclxuXHJcbn0iXX0=