"use strict";
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