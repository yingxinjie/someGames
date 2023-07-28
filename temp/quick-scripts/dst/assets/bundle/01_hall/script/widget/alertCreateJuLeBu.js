
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/01_hall/script/widget/alertCreateJuLeBu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9ba54xoeU1KXqSL0iRtwZfw', 'alertCreateJuLeBu');
// bundle/01_hall/script/widget/alertCreateJuLeBu.ts

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
var ComponentBase_1 = require("../../../00_base/script/common/ComponentBase");
var ViewManager_1 = require("../config/ViewManager");
var config_1 = require("../config/config");
var Utils_1 = require("../config/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var alertCreateJuLeBu = /** @class */ (function (_super) {
    __extends(alertCreateJuLeBu, _super);
    function alertCreateJuLeBu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        _this.createPaiJuBtn = null;
        _this.createJuLeBuBtn = null;
        return _this;
    }
    alertCreateJuLeBu.prototype.start = function () {
        this.TouchOn(this.closeBtn, this.alertDestory);
        this.TouchOn(this.createPaiJuBtn, this.onClickChuangJianPaiJu);
        this.TouchOn(this.createJuLeBuBtn, this.onClickChuangJianJuLeBu);
    };
    alertCreateJuLeBu.prototype.onClickChuangJianPaiJu = function () {
        ViewManager_1.ViewManager.RemoveAlert(config_1.WidgetEnum.BottomToggle);
        ViewManager_1.ViewManager.Open(config_1.ViewEnum.Create);
        this.node.destroy();
    };
    alertCreateJuLeBu.prototype.onClickChuangJianJuLeBu = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utils_1.Utils.Post(config_1.HttpPath.queryCreatedJuLeBu, { current: 0, size: 20 })];
                    case 1:
                        res = _a.sent();
                        if (res.code != 200) {
                            return [2 /*return*/];
                        }
                        list = res.data;
                        if (list.length == 0) {
                            ViewManager_1.ViewManager.Alert("chuangjianjulebu");
                        }
                        else {
                            ViewManager_1.ViewManager.Alert("julebuzhuangtai");
                        }
                        this.node.destroy();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        property(cc.Node)
    ], alertCreateJuLeBu.prototype, "closeBtn", void 0);
    __decorate([
        property(cc.Node)
    ], alertCreateJuLeBu.prototype, "createPaiJuBtn", void 0);
    __decorate([
        property(cc.Node)
    ], alertCreateJuLeBu.prototype, "createJuLeBuBtn", void 0);
    alertCreateJuLeBu = __decorate([
        ccclass
    ], alertCreateJuLeBu);
    return alertCreateJuLeBu;
}(ComponentBase_1.default));
exports.default = alertCreateJuLeBu;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXHdpZGdldFxcYWxlcnRDcmVhdGVKdUxlQnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsOEVBQXlFO0FBQ3pFLHFEQUFvRDtBQUNwRCwyQ0FBa0U7QUFDbEUseUNBQXdDO0FBR2xDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQStDLHFDQUFhO0lBQTVEO1FBQUEscUVBd0NDO1FBdENXLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFHL0IscUJBQWUsR0FBWSxJQUFJLENBQUM7O0lBZ0M1QyxDQUFDO0lBN0JHLGlDQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtRQUM5RCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUE7SUFDcEUsQ0FBQztJQUdPLGtEQUFzQixHQUE5QjtRQUNJLHlCQUFXLENBQUMsV0FBVyxDQUFDLG1CQUFVLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDaEQseUJBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFYSxtREFBdUIsR0FBckM7Ozs7OzRCQUNtQixxQkFBTSxhQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFRLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFBOzt3QkFBbEYsR0FBRyxHQUFRLFNBQXVFO3dCQUV0RixJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFFOzRCQUNqQixzQkFBTzt5QkFDVjt3QkFFRyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQWEsQ0FBQzt3QkFDN0IsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTs0QkFDbEIseUJBQVcsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQzt5QkFDekM7NkJBQU07NEJBQ0gseUJBQVcsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQzt5QkFDeEM7d0JBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7Ozs7S0FDdkI7SUFyQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDZTtJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZEQUNxQjtJQUd2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhEQUNzQjtJQVJ2QixpQkFBaUI7UUFEckMsT0FBTztPQUNhLGlCQUFpQixDQXdDckM7SUFBRCx3QkFBQztDQXhDRCxBQXdDQyxDQXhDOEMsdUJBQWEsR0F3QzNEO2tCQXhDb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tIFwiLi4vLi4vLi4vMDBfYmFzZS9zY3JpcHQvY29tbW9uL0NvbXBvbmVudEJhc2VcIjtcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcIi4uL2NvbmZpZy9WaWV3TWFuYWdlclwiO1xuaW1wb3J0IHsgSHR0cFBhdGgsIFZpZXdFbnVtLCBXaWRnZXRFbnVtIH0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWdcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4uL2NvbmZpZy9VdGlsc1wiO1xuaW1wb3J0IHsgVGlwcyB9IGZyb20gXCIuLi8uLi8uLi8wMF9iYXNlL3NjcmlwdC91aXV0aWxzL3RpcHNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGFsZXJ0Q3JlYXRlSnVMZUJ1IGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBjbG9zZUJ0bjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGNyZWF0ZVBhaUp1QnRuOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgY3JlYXRlSnVMZUJ1QnRuOiBjYy5Ob2RlID0gbnVsbDtcblxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuVG91Y2hPbih0aGlzLmNsb3NlQnRuLCB0aGlzLmFsZXJ0RGVzdG9yeSk7XG4gICAgICAgIHRoaXMuVG91Y2hPbih0aGlzLmNyZWF0ZVBhaUp1QnRuLCB0aGlzLm9uQ2xpY2tDaHVhbmdKaWFuUGFpSnUpXG4gICAgICAgIHRoaXMuVG91Y2hPbih0aGlzLmNyZWF0ZUp1TGVCdUJ0biwgdGhpcy5vbkNsaWNrQ2h1YW5nSmlhbkp1TGVCdSlcbiAgICB9XG5cblxuICAgIHByaXZhdGUgb25DbGlja0NodWFuZ0ppYW5QYWlKdSgpIHtcbiAgICAgICAgVmlld01hbmFnZXIuUmVtb3ZlQWxlcnQoV2lkZ2V0RW51bS5Cb3R0b21Ub2dnbGUpXG4gICAgICAgIFZpZXdNYW5hZ2VyLk9wZW4oVmlld0VudW0uQ3JlYXRlKVxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgb25DbGlja0NodWFuZ0ppYW5KdUxlQnUoKSB7XG4gICAgICAgIGxldCByZXM6IGFueSA9IGF3YWl0IFV0aWxzLlBvc3QoSHR0cFBhdGgucXVlcnlDcmVhdGVkSnVMZUJ1LCB7IGN1cnJlbnQ6IDAsIHNpemU6IDIwIH0pO1xuXG4gICAgICAgIGlmIChyZXMuY29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsaXN0ID0gcmVzLmRhdGEgYXMgYW55W107XG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBWaWV3TWFuYWdlci5BbGVydChcImNodWFuZ2ppYW5qdWxlYnVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBWaWV3TWFuYWdlci5BbGVydChcImp1bGVidXpodWFuZ3RhaVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgfVxufVxuIl19