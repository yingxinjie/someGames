
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/01_hall/script/hall.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '20b04sWMJhPNburHDjc8Tab', 'hall');
// bundle/01_hall/script/hall.ts

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
var ViewManager_1 = require("./config/ViewManager");
var Utils_1 = require("./config/Utils");
var config_1 = require("./config/config");
var UserInfo_1 = require("./config/UserInfo");
var bundleLoader_1 = require("../../../script/bundleLoader");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var hall = /** @class */ (function (_super) {
    __extends(hall, _super);
    function hall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    hall.prototype.start = function () {
        cc.game.addPersistRootNode(this.node); //节点常驻
        //通过修改url的参数来修改http地址
        var httpServer = Utils_1.Utils.UrlParams(config_1.ComUseStr.UrlParamAddressKey);
        if (httpServer != "") {
            config_1.GlobalConfig.IPort = httpServer;
        }
        this.load();
        this.onloadJson();
    };
    hall.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(UserInfo_1.UserInfo.uuid && UserInfo_1.UserInfo.uuid.length > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, ViewManager_1.ViewManager.Alert(config_1.WidgetEnum.BottomToggle)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, ViewManager_1.ViewManager.Open(config_1.ViewEnum.FaXian)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, ViewManager_1.ViewManager.Open(config_1.ViewEnum.Login)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    hall.prototype.onloadJson = function () {
        var bundle = bundleLoader_1.bundleLoader.ENUM_BUNDLE_SAVE[bundleLoader_1.bundleLoader.ENUM_BUNDLE.HALL];
        bundle.load("json/seatpos", function (err, asset) {
            if (err) {
                return cc.error(err);
            }
            UserInfo_1.UserInfo.seatPJson = asset.json;
        });
        bundle.load("json/lightpos", function (err, asset) {
            if (err) {
                return cc.error(err);
            }
            UserInfo_1.UserInfo.lightPJson = asset.json;
        });
    };
    hall = __decorate([
        ccclass
    ], hall);
    return hall;
}(cc.Component));
exports.default = hall;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXGhhbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQW1EO0FBQ25ELHdDQUF1QztBQUN2QywwQ0FBZ0Y7QUFDaEYsOENBQTZDO0FBRTdDLDZEQUE0RDtBQUV0RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyx3QkFBWTtJQUE5Qzs7SUEyQ0EsQ0FBQztJQXpDRyxvQkFBSyxHQUFMO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxNQUFNO1FBQzVDLHFCQUFxQjtRQUNyQixJQUFJLFVBQVUsR0FBVyxhQUFLLENBQUMsU0FBUyxDQUFDLGtCQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN2RSxJQUFJLFVBQVUsSUFBSSxFQUFFLEVBQUU7WUFDbEIscUJBQVksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO1NBQ25DO1FBRUQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFFSyxtQkFBSSxHQUFWOzs7Ozs2QkFDUSxDQUFBLG1CQUFRLENBQUMsSUFBSSxJQUFJLG1CQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUEsRUFBekMsd0JBQXlDO3dCQUN6QyxxQkFBTSx5QkFBVyxDQUFDLEtBQUssQ0FBQyxtQkFBVSxDQUFDLFlBQVksQ0FBQyxFQUFBOzt3QkFBaEQsU0FBZ0QsQ0FBQzt3QkFDakQscUJBQU0seUJBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQVEsQ0FBQyxNQUFNLENBQUMsRUFBQTs7d0JBQXZDLFNBQXVDLENBQUM7OzRCQUV4QyxxQkFBTSx5QkFBVyxDQUFDLElBQUksQ0FBQyxpQkFBUSxDQUFDLEtBQUssQ0FBQyxFQUFBOzt3QkFBdEMsU0FBc0MsQ0FBQzs7Ozs7O0tBSTlDO0lBRU8seUJBQVUsR0FBbEI7UUFDSSxJQUFJLE1BQU0sR0FBRywyQkFBWSxDQUFDLGdCQUFnQixDQUFDLDJCQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLFVBQUMsR0FBRyxFQUFFLEtBQW1CO1lBQ2pELElBQUksR0FBRyxFQUFFO2dCQUNMLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTthQUN2QjtZQUNELG1CQUFRLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUE7UUFDbkMsQ0FBQyxDQUFDLENBQUE7UUFFRixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxVQUFDLEdBQUcsRUFBRSxLQUFtQjtZQUNsRCxJQUFJLEdBQUcsRUFBRTtnQkFDTCxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7YUFDdkI7WUFDRCxtQkFBUSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFBO1FBQ3BDLENBQUMsQ0FBQyxDQUFBO0lBRU4sQ0FBQztJQXpDZ0IsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQTJDeEI7SUFBRCxXQUFDO0NBM0NELEFBMkNDLENBM0NpQyxFQUFFLENBQUMsU0FBUyxHQTJDN0M7a0JBM0NvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwiLi9jb25maWcvVmlld01hbmFnZXJcIjtcclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi9jb25maWcvVXRpbHNcIjtcclxuaW1wb3J0IHsgQ29tVXNlU3RyLCBHbG9iYWxDb25maWcsIFZpZXdFbnVtLCBXaWRnZXRFbnVtIH0gZnJvbSBcIi4vY29uZmlnL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gXCIuL2NvbmZpZy9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgeyBFdmVudE1hbmdlciB9IGZyb20gXCIuLi8uLi8wMF9iYXNlL3NjcmlwdC9jb21tb24vRXZlbnRNYW5nZXJcIjtcclxuaW1wb3J0IHsgYnVuZGxlTG9hZGVyIH0gZnJvbSBcIi4uLy4uLy4uL3NjcmlwdC9idW5kbGVMb2FkZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBoYWxsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpOy8v6IqC54K55bi46am7XHJcbiAgICAgICAgLy/pgJrov4fkv67mlLl1cmznmoTlj4LmlbDmnaXkv67mlLlodHRw5Zyw5Z2AXHJcbiAgICAgICAgbGV0IGh0dHBTZXJ2ZXI6IHN0cmluZyA9IFV0aWxzLlVybFBhcmFtcyhDb21Vc2VTdHIuVXJsUGFyYW1BZGRyZXNzS2V5KTtcclxuICAgICAgICBpZiAoaHR0cFNlcnZlciAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIEdsb2JhbENvbmZpZy5JUG9ydCA9IGh0dHBTZXJ2ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxvYWQoKTtcclxuICAgICAgICB0aGlzLm9ubG9hZEpzb24oKVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGxvYWQoKSB7XHJcbiAgICAgICAgaWYgKFVzZXJJbmZvLnV1aWQgJiYgVXNlckluZm8udXVpZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IFZpZXdNYW5hZ2VyLkFsZXJ0KFdpZGdldEVudW0uQm90dG9tVG9nZ2xlKTtcclxuICAgICAgICAgICAgYXdhaXQgVmlld01hbmFnZXIuT3BlbihWaWV3RW51bS5GYVhpYW4pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGF3YWl0IFZpZXdNYW5hZ2VyLk9wZW4oVmlld0VudW0uTG9naW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBVc2VySW5mby5jd2Vic29ja2V0ID0gbmV3IGN3ZWJzb2NrZXQoXCJ3czovLzEyNy4wLjAuMTo4MDAxXCIsIDEpO1xyXG4gICAgICAgIC8vIFVzZXJJbmZvLmN3ZWJzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeSh7IGlkOiAxMCwgaW5mbzogXCLlk4jlk4jlk4jlk4hcIiB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbmxvYWRKc29uKCl7XHJcbiAgICAgICAgbGV0IGJ1bmRsZSA9IGJ1bmRsZUxvYWRlci5FTlVNX0JVTkRMRV9TQVZFW2J1bmRsZUxvYWRlci5FTlVNX0JVTkRMRS5IQUxMXTtcclxuICAgICAgICBidW5kbGUubG9hZChcImpzb24vc2VhdHBvc1wiLCAoZXJyLCBhc3NldDogY2MuSnNvbkFzc2V0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjYy5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgVXNlckluZm8uc2VhdFBKc29uID0gYXNzZXQuanNvblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGJ1bmRsZS5sb2FkKFwianNvbi9saWdodHBvc1wiLCAoZXJyLCBhc3NldDogY2MuSnNvbkFzc2V0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjYy5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgVXNlckluZm8ubGlnaHRQSnNvbiA9IGFzc2V0Lmpzb25cclxuICAgICAgICB9KVxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==