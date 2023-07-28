
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/start.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1b90/rohdEk4SdmmEZANaD', 'start');
// script/start.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var bundleLoader_1 = require("./bundleLoader");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Helloworld = /** @class */ (function (_super) {
    __extends(Helloworld, _super);
    function Helloworld() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Is_debug = true;
        return _this;
    }
    Helloworld.prototype.start = function () {
        console.log("场景启动!");
        this.load();
    };
    Helloworld.prototype.loadScene = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bundleLoader_1.bundleLoader.model.loadBundle(bundleLoader_1.bundleLoader.ENUM_BUNDLE.BASE)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, bundleLoader_1.bundleLoader.model.loadBundle(bundleLoader_1.bundleLoader.ENUM_BUNDLE.HALL)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, bundleLoader_1.bundleLoader.model.loadBundle(bundleLoader_1.bundleLoader.ENUM_BUNDLE.GAME)];
                    case 3:
                        _a.sent();
                        cc.director.loadScene('hall');
                        return [2 /*return*/];
                }
            });
        });
    };
    Helloworld.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var remoteManifest, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, bundleLoader_1.bundleLoader.model.getRemoteBundleVersion()];
                    case 1:
                        remoteManifest = _a.sent();
                        if (remoteManifest != null)
                            bundleLoader_1.bundleLoader.model.manifest = remoteManifest;
                        this.loadScene();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        if (bundleLoader_1.bundleLoader.model.manifest != null) {
                            this.loadScene();
                        }
                        else {
                            cc.error('加载场景错误, 5 秒后重试' + JSON.stringify(error_1));
                            this.scheduleOnce(function () { return _this.load(); }, 5);
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        property()
    ], Helloworld.prototype, "Is_debug", void 0);
    Helloworld = __decorate([
        ccclass
    ], Helloworld);
    return Helloworld;
}(cc.Component));
exports.default = Helloworld;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzdGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFnQ0M7UUE1QkcsY0FBUSxHQUFZLElBQUksQ0FBQTs7SUE0QjVCLENBQUM7SUExQkcsMEJBQUssR0FBTDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFSyw4QkFBUyxHQUFmOzs7OzRCQUNJLHFCQUFNLDJCQUFZLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQywyQkFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQWxFLFNBQWtFLENBQUM7d0JBQ25FLHFCQUFNLDJCQUFZLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQywyQkFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQWxFLFNBQWtFLENBQUM7d0JBQ25FLHFCQUFNLDJCQUFZLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQywyQkFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQWxFLFNBQWtFLENBQUM7d0JBQ25FLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7OztLQUNqQztJQUVLLHlCQUFJLEdBQVY7Ozs7Ozs7O3dCQUU2QixxQkFBTSwyQkFBWSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxFQUFBOzt3QkFBbEUsY0FBYyxHQUFHLFNBQWlEO3dCQUN0RSxJQUFJLGNBQWMsSUFBSSxJQUFJOzRCQUFFLDJCQUFZLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7d0JBQ3pFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzs7Ozt3QkFFakIsSUFBSSwyQkFBWSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFOzRCQUNyQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7eUJBQ3BCOzZCQUFNOzRCQUNILEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUNuRCxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO3lCQUMzQzs7Ozs7O0tBRVI7SUEzQkQ7UUFEQyxRQUFRLEVBQUU7Z0RBQ2E7SUFKUCxVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBZ0M5QjtJQUFELGlCQUFDO0NBaENELEFBZ0NDLENBaEN1QyxFQUFFLENBQUMsU0FBUyxHQWdDbkQ7a0JBaENvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYnVuZGxlTG9hZGVyIH0gZnJvbSBcIi4vYnVuZGxlTG9hZGVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVsbG93b3JsZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBJc19kZWJ1ZzogYm9vbGVhbiA9IHRydWVcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuWcuuaZr+WQr+WKqCFcIik7XHJcbiAgICAgICAgdGhpcy5sb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgbG9hZFNjZW5lKCkge1xyXG4gICAgICAgIGF3YWl0IGJ1bmRsZUxvYWRlci5tb2RlbC5sb2FkQnVuZGxlKGJ1bmRsZUxvYWRlci5FTlVNX0JVTkRMRS5CQVNFKTtcclxuICAgICAgICBhd2FpdCBidW5kbGVMb2FkZXIubW9kZWwubG9hZEJ1bmRsZShidW5kbGVMb2FkZXIuRU5VTV9CVU5ETEUuSEFMTCk7XHJcbiAgICAgICAgYXdhaXQgYnVuZGxlTG9hZGVyLm1vZGVsLmxvYWRCdW5kbGUoYnVuZGxlTG9hZGVyLkVOVU1fQlVORExFLkdBTUUpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnaGFsbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGxvYWQoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHJlbW90ZU1hbmlmZXN0ID0gYXdhaXQgYnVuZGxlTG9hZGVyLm1vZGVsLmdldFJlbW90ZUJ1bmRsZVZlcnNpb24oKTtcclxuICAgICAgICAgICAgaWYgKHJlbW90ZU1hbmlmZXN0ICE9IG51bGwpIGJ1bmRsZUxvYWRlci5tb2RlbC5tYW5pZmVzdCA9IHJlbW90ZU1hbmlmZXN0O1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZSgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmIChidW5kbGVMb2FkZXIubW9kZWwubWFuaWZlc3QgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU2NlbmUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNjLmVycm9yKCfliqDovb3lnLrmma/plJnor68sIDUg56eS5ZCO6YeN6K+VJyArIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB0aGlzLmxvYWQoKSwgNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19