
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXGhhbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQW1EO0FBQ25ELHdDQUF1QztBQUN2QywwQ0FBZ0Y7QUFDaEYsOENBQTZDO0FBR3ZDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDOztJQXdCQSxDQUFDO0lBdEJHLG9CQUFLLEdBQUw7UUFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBLE1BQU07UUFDNUMscUJBQXFCO1FBQ3JCLElBQUksVUFBVSxHQUFXLGFBQUssQ0FBQyxTQUFTLENBQUMsa0JBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksVUFBVSxJQUFJLEVBQUUsRUFBRTtZQUNsQixxQkFBWSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7U0FDbkM7UUFFRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVLLG1CQUFJLEdBQVY7Ozs7OzZCQUNRLENBQUEsbUJBQVEsQ0FBQyxJQUFJLElBQUksbUJBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQSxFQUF6Qyx3QkFBeUM7d0JBQ3pDLHFCQUFNLHlCQUFXLENBQUMsS0FBSyxDQUFDLG1CQUFVLENBQUMsWUFBWSxDQUFDLEVBQUE7O3dCQUFoRCxTQUFnRCxDQUFDO3dCQUNqRCxxQkFBTSx5QkFBVyxDQUFDLElBQUksQ0FBQyxpQkFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFBOzt3QkFBdkMsU0FBdUMsQ0FBQzs7NEJBRXhDLHFCQUFNLHlCQUFXLENBQUMsSUFBSSxDQUFDLGlCQUFRLENBQUMsS0FBSyxDQUFDLEVBQUE7O3dCQUF0QyxTQUFzQyxDQUFDOzs7Ozs7S0FJOUM7SUF0QmdCLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0F3QnhCO0lBQUQsV0FBQztDQXhCRCxBQXdCQyxDQXhCaUMsRUFBRSxDQUFDLFNBQVMsR0F3QjdDO2tCQXhCb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcIi4vY29uZmlnL1ZpZXdNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vY29uZmlnL1V0aWxzXCI7XHJcbmltcG9ydCB7IENvbVVzZVN0ciwgR2xvYmFsQ29uZmlnLCBWaWV3RW51bSwgV2lkZ2V0RW51bSB9IGZyb20gXCIuL2NvbmZpZy9jb25maWdcIjtcclxuaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tIFwiLi9jb25maWcvVXNlckluZm9cIjtcclxuaW1wb3J0IHsgRXZlbnRNYW5nZXIgfSBmcm9tIFwiLi4vLi4vMDBfYmFzZS9zY3JpcHQvY29tbW9uL0V2ZW50TWFuZ2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaGFsbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTsvL+iKgueCueW4uOmpu1xyXG4gICAgICAgIC8v6YCa6L+H5L+u5pS5dXJs55qE5Y+C5pWw5p2l5L+u5pS5aHR0cOWcsOWdgFxyXG4gICAgICAgIGxldCBodHRwU2VydmVyOiBzdHJpbmcgPSBVdGlscy5VcmxQYXJhbXMoQ29tVXNlU3RyLlVybFBhcmFtQWRkcmVzc0tleSk7XHJcbiAgICAgICAgaWYgKGh0dHBTZXJ2ZXIgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBHbG9iYWxDb25maWcuSVBvcnQgPSBodHRwU2VydmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgbG9hZCgpIHtcclxuICAgICAgICBpZiAoVXNlckluZm8udXVpZCAmJiBVc2VySW5mby51dWlkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgYXdhaXQgVmlld01hbmFnZXIuQWxlcnQoV2lkZ2V0RW51bS5Cb3R0b21Ub2dnbGUpO1xyXG4gICAgICAgICAgICBhd2FpdCBWaWV3TWFuYWdlci5PcGVuKFZpZXdFbnVtLkZhWGlhbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYXdhaXQgVmlld01hbmFnZXIuT3BlbihWaWV3RW51bS5Mb2dpbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFVzZXJJbmZvLmN3ZWJzb2NrZXQgPSBuZXcgY3dlYnNvY2tldChcIndzOi8vMTI3LjAuMC4xOjgwMDFcIiwgMSk7XHJcbiAgICAgICAgLy8gVXNlckluZm8uY3dlYnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHsgaWQ6IDEwLCBpbmZvOiBcIuWTiOWTiOWTiOWTiFwiIH0pKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19