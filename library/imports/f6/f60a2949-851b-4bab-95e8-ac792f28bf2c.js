"use strict";
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