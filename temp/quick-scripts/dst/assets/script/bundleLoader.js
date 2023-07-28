
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxidW5kbGVMb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNLENBQUMsb0JBQW9CLENBQUMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQztBQUM5RSxNQUFNLENBQUMsd0JBQXdCLENBQUMsR0FBRyxrQkFBa0IsR0FBRyxzQkFBc0IsQ0FBQztBQUUvRSxJQUFpQixZQUFZLENBVTVCO0FBVkQsV0FBaUIsWUFBWTtJQUV6QixJQUFZLFdBSVg7SUFKRCxXQUFZLFdBQVc7UUFDbkIsK0JBQWdCLENBQUE7UUFDaEIsK0JBQWdCLENBQUE7UUFDaEIsK0JBQWdCLENBQUE7SUFDcEIsQ0FBQyxFQUpXLFdBQVcsR0FBWCx3QkFBVyxLQUFYLHdCQUFXLFFBSXRCO0lBRVksNkJBQWdCLEdBQThDLEVBQUUsQ0FBQTtBQUVqRixDQUFDLEVBVmdCLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBVTVCO0FBRUQsUUFBUTtBQUNSLFNBQVMsZUFBZSxDQUFDLFVBQWtCO0lBQ3ZDLE9BQU8sVUFBQyxNQUFNLEVBQUUsV0FBbUI7UUFDL0IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFO1lBQ3ZDLEdBQUcsRUFBRTtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNuRCxDQUFDO1lBQ0QsR0FBRyxFQUFFLFVBQVUsR0FBVztnQkFDdEIsSUFBSSxHQUFHLElBQUksSUFBSTtvQkFDWCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7O29CQUUzQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3JELENBQUM7U0FDSixDQUFDLENBQUM7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aUNBQ1Y7Z0NBRUQsYUFBQSxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsR0FBRyxNQUFNLENBQUM7Z0NBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQVUsVUFBVSw2QkFBTSxDQUFDLENBQUE7Z0NBQ3ZDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzs0QkFDcEIsQ0FBQyxDQUFDOzRCQUVGLElBQUksTUFBTSxJQUFJLENBQUMsVUFBVSxFQUFFO2dDQUN2QixJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSTtvQ0FBRSxNQUFNLFNBQVMsQ0FBQztnQ0FDdkQsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxHQUFHLFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7NkJBQ3ZIO2lDQUNJO2dDQUNELEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQzs2QkFDOUM7d0JBQ0wsQ0FBQyxDQUFDLEVBQUM7OztTQUNOO1FBR0ssdUJBQU0sR0FBWixVQUFhLFVBQXVCOzs7Ozs7U0FHbkM7UUF6RUQ7WUFEQyxlQUFlLENBQUMsaUJBQWlCLENBQUM7cURBQ2I7UUEwRTFCLGFBQUM7S0E1RUQsQUE0RUMsSUFBQTtJQUVZLGtCQUFLLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUV0QyxDQUFDLEVBbEZnQixZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQWtGNUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3dbXCJSRU1PVEVfU0VSVkVSX1JPT1RcIl0gPSBjYy5hc3NldE1hbmFnZXIuZG93bmxvYWRlci5yZW1vdGVTZXJ2ZXJBZGRyZXNzO1xyXG53aW5kb3dbXCJSRU1PVEVfQlVORExFX01BTklGRVNUXCJdID0gUkVNT1RFX1NFUlZFUl9ST09UICsgJ3JlbW90ZS9tYW5pZmVzdC5qc29uJztcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgYnVuZGxlTG9hZGVyIHtcclxuICAgIGV4cG9ydCB0eXBlIFRZUEVfTUFOSUZFU1QgPSB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9XHJcbiAgICBleHBvcnQgZW51bSBFTlVNX0JVTkRMRSB7XHJcbiAgICAgICAgQkFTRSA9ICcwMF9iYXNlJyxcclxuICAgICAgICBIQUxMID0gJzAxX2hhbGwnLFxyXG4gICAgICAgIEdBTUUgPSAnMDJfZ2FtZScsXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNvbnN0IEVOVU1fQlVORExFX1NBVkU6IHsgW2tleTogc3RyaW5nXTogY2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZSB9ID0ge31cclxuXHJcbn1cclxuXHJcbi8v5rOo5YaM5oyB5LmF5a2Y5YKoXHJcbmZ1bmN0aW9uIHJlZ0xvY2FsU3RvcmFnZShzdG9yYWdlS2V5OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAodGFyZ2V0LCBwcm9wZXJ0eUtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXksIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUtleSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHN0b3JhZ2VLZXkpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yYWdlS2V5LCB2YWwpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIGJ1bmRsZUxvYWRlciB7XHJcblxyXG4gICAgY2xhc3MgX21vZGVsIHtcclxuICAgICAgICBAcmVnTG9jYWxTdG9yYWdlKFwiQlVORExFX01BTklGRVNUXCIpXHJcbiAgICAgICAgc3RvcmVNYW5pZmVzdDogc3RyaW5nO1xyXG5cclxuICAgICAgICBnZXQgbWFuaWZlc3QoKTogVFlQRV9NQU5JRkVTVCB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0b3JlTWFuaWZlc3QgPT0gbnVsbCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMuc3RvcmVNYW5pZmVzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldCBtYW5pZmVzdCh2YWx1ZTogVFlQRV9NQU5JRkVTVCkge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkgdGhpcy5zdG9yZU1hbmlmZXN0ID0gbnVsbDtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLnN0b3JlTWFuaWZlc3QgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+ajgOafpeeJiOacrFxyXG4gICAgICAgIGFzeW5jIGNoZWNrQnVuZGxlVmVyc2lvbigpIHtcclxuICAgICAgICAgICAgaWYgKENDX1BSRVZJRVcgfHwgIUNDX0pTQikgcmV0dXJuO1xyXG4gICAgICAgICAgICBjYy5sb2coYEJ1bmRsZeeJiOacrOajgOafpeW8gOWni2ApO1xyXG4gICAgICAgICAgICBsZXQgbWFuaWZlc3QgPSBhd2FpdCB0aGlzLmdldFJlbW90ZUJ1bmRsZVZlcnNpb24oKTtcclxuICAgICAgICAgICAgaWYgKG1hbmlmZXN0ID09IG51bGwpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgYnVuZGxlTmFtZSBpbiB0aGlzLm1hbmlmZXN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYW5pZmVzdFtidW5kbGVOYW1lXSAhPSBtYW5pZmVzdFtidW5kbGVOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKGJ1bmRsZU5hbWUpICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBidW5kbGUg5a2Y5Zyo5pu05pawIOWQje+8miR7YnVuZGxlTmFtZX0g5b2T5YmN54mI5pysOiR7dGhpcy5tYW5pZmVzdFtidW5kbGVOYW1lXX0g6L+c56iL54mI5pysOiR7bWFuaWZlc3RbYnVuZGxlTmFtZV19YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYy5sb2coYEJ1bmRsZeeJiOacrOajgOafpeWujOaIkGApO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+iOt+WPlueJiOacrFxyXG4gICAgICAgIGFzeW5jIGdldFJlbW90ZUJ1bmRsZVZlcnNpb24oKSB7XHJcbiAgICAgICAgICAgIGlmIChDQ19QUkVWSUVXIHx8ICFDQ19KU0IpIHJldHVybjtcclxuICAgICAgICAgICAgbGV0IG1hbmlmZXN0ID0gYXdhaXQgbmV3IFByb21pc2U8VFlQRV9NQU5JRkVTVD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmRvd25sb2FkZXJbJ2Rvd25sb2FkRmlsZSddKFJFTU9URV9CVU5ETEVfTUFOSUZFU1QsIHsgcmVzcG9uc2VUeXBlOiAnanNvbicgfSwgbnVsbCwgKGVyciwgbWFuaWZlc3Q6IFRZUEVfTUFOSUZFU1QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKCfojrflj5bov5znqIvniYjmnKzplJnor68nICsgSlNPTi5zdHJpbmdpZnkoZXJyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShtYW5pZmVzdClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIG1hbmlmZXN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXN5bmMgbG9hZEJ1bmRsZShlbnVtQnVuZGxlOiBFTlVNX0JVTkRMRSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Y2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNiID0gKGVyciwgYnVuZGxlOiBjYy5Bc3NldE1hbmFnZXIuQnVuZGxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcign5Yqg6L29QnVuZGxl6ZSZ6K+vJyArIEpTT04uc3RyaW5naWZ5KGVycikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgRU5VTV9CVU5ETEVfU0FWRVtlbnVtQnVuZGxlXSA9IGJ1bmRsZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgYnVuZGxl5YyFJHtlbnVtQnVuZGxlfeWKoOi9veWujOaIkGApXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShidW5kbGUpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoQ0NfSlNCICYmICFDQ19QUkVWSUVXKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWFuaWZlc3RbZW51bUJ1bmRsZV0gPT0gbnVsbCkgdGhyb3cgJ+i/nOeoi+eJiOacrOS4jeWtmOWcqCc7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRCdW5kbGUoUkVNT1RFX1NFUlZFUl9ST09UICsgJ3JlbW90ZS8nICsgZW51bUJ1bmRsZSwgeyB2ZXJzaW9uOiB0aGlzLm1hbmlmZXN0W2VudW1CdW5kbGVdIH0sIGNiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKGVudW1CdW5kbGUsIGNiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgYXN5bmMgQnVuZGxlKGVudW1CdW5kbGU6IEVOVU1fQlVORExFKSB7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNvbnN0IG1vZGVsID0gbmV3IF9tb2RlbCgpO1xyXG5cclxufSJdfQ==