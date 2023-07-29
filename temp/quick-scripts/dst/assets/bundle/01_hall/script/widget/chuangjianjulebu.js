
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/01_hall/script/widget/chuangjianjulebu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '26f4eZIp6FHU4c5Afucdn//', 'chuangjianjulebu');
// bundle/01_hall/script/widget/chuangjianjulebu.ts

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
var tips_1 = require("../../../00_base/script/uiutils/tips");
var Utils_1 = require("../config/Utils");
var config_1 = require("../config/config");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var chuangjianjulebu = /** @class */ (function (_super) {
    __extends(chuangjianjulebu, _super);
    function chuangjianjulebu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        _this.juLeBuName = null;
        _this.createBtn = null;
        _this.logoBtn = null;
        _this.logoId = 0;
        return _this;
    }
    chuangjianjulebu.prototype.start = function () {
        this.TouchOn(this.closeBtn, this.alertDestory);
        this.TouchOn(this.createBtn, this.onCreate);
        //显示logo的图标
    };
    chuangjianjulebu.prototype.onCreate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var info, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cc.log("创建");
                        if (this.juLeBuName.string == "") {
                            tips_1.Tips.Show("俱乐部名称不能为空!");
                            return [2 /*return*/];
                        }
                        info = {
                            "name": this.juLeBuName.string,
                            "iconPic": "1",
                            "area": "2",
                        };
                        return [4 /*yield*/, Utils_1.Utils.Post(config_1.HttpPath.createJuLeBu, info)];
                    case 1:
                        res = _a.sent();
                        if (res.code !== 200) {
                            return [2 /*return*/];
                        }
                        this.alertDestory();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        property(cc.Node)
    ], chuangjianjulebu.prototype, "closeBtn", void 0);
    __decorate([
        property(cc.EditBox)
    ], chuangjianjulebu.prototype, "juLeBuName", void 0);
    __decorate([
        property(cc.Node)
    ], chuangjianjulebu.prototype, "createBtn", void 0);
    __decorate([
        property(cc.Node)
    ], chuangjianjulebu.prototype, "logoBtn", void 0);
    chuangjianjulebu = __decorate([
        ccclass
    ], chuangjianjulebu);
    return chuangjianjulebu;
}(ComponentBase_1.default));
exports.default = chuangjianjulebu;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXHdpZGdldFxcY2h1YW5namlhbmp1bGVidS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4RUFBeUU7QUFDekUsNkRBQTREO0FBQzVELHlDQUF3QztBQUN4QywyQ0FBNEM7QUFFdEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEMsb0NBQWE7SUFBM0Q7UUFBQSxxRUE4Q0M7UUE1Q1csY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixnQkFBVSxHQUFlLElBQUksQ0FBQztRQUc5QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsWUFBTSxHQUFXLENBQUMsQ0FBQzs7SUFpQy9CLENBQUM7SUEvQmEsZ0NBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUMzQyxXQUFXO0lBQ2YsQ0FBQztJQUVhLG1DQUFRLEdBQXRCOzs7Ozs7d0JBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTt3QkFDWixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRTs0QkFDOUIsV0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzs0QkFDeEIsc0JBQU87eUJBQ1Y7d0JBRUcsSUFBSSxHQUFHOzRCQUNQLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU07NEJBQzlCLFNBQVMsRUFBRSxHQUFHOzRCQUNkLE1BQU0sRUFBRSxHQUFHO3lCQUNkLENBQUE7d0JBRWMscUJBQU0sYUFBSyxDQUFDLElBQUksQ0FBQyxpQkFBUSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsRUFBQTs7d0JBQXhELEdBQUcsR0FBUSxTQUE2Qzt3QkFDNUQsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRTs0QkFDbEIsc0JBQU87eUJBQ1Y7d0JBRUQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDOzs7OztLQUN2QjtJQXRDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNlO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7d0RBQ2lCO0lBR3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ2dCO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ2M7SUFYZixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQThDcEM7SUFBRCx1QkFBQztDQTlDRCxBQThDQyxDQTlDNkMsdUJBQWEsR0E4QzFEO2tCQTlDb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudEJhc2UgZnJvbSBcIi4uLy4uLy4uLzAwX2Jhc2Uvc2NyaXB0L2NvbW1vbi9Db21wb25lbnRCYXNlXCI7XG5pbXBvcnQgeyBUaXBzIH0gZnJvbSBcIi4uLy4uLy4uLzAwX2Jhc2Uvc2NyaXB0L3VpdXRpbHMvdGlwc1wiO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi4vY29uZmlnL1V0aWxzXCI7XG5pbXBvcnQgeyBIdHRwUGF0aCB9IGZyb20gXCIuLi9jb25maWcvY29uZmlnXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjaHVhbmdqaWFuanVsZWJ1IGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBjbG9zZUJ0bjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBwcml2YXRlIGp1TGVCdU5hbWU6IGNjLkVkaXRCb3ggPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBjcmVhdGVCdG46IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBsb2dvQnRuOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgbG9nb0lkOiBudW1iZXIgPSAwO1xuXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLlRvdWNoT24odGhpcy5jbG9zZUJ0biwgdGhpcy5hbGVydERlc3RvcnkpO1xuICAgICAgICB0aGlzLlRvdWNoT24odGhpcy5jcmVhdGVCdG4sIHRoaXMub25DcmVhdGUpXG4gICAgICAgIC8v5pi+56S6bG9nb+eahOWbvuagh1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgb25DcmVhdGUoKSB7XG4gICAgICAgIGNjLmxvZyhcIuWIm+W7ulwiKVxuICAgICAgICBpZiAodGhpcy5qdUxlQnVOYW1lLnN0cmluZyA9PSBcIlwiKSB7XG4gICAgICAgICAgICBUaXBzLlNob3coXCLkv7HkuZDpg6jlkI3np7DkuI3og73kuLrnqbohXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGluZm8gPSB7XG4gICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5qdUxlQnVOYW1lLnN0cmluZyxcbiAgICAgICAgICAgIFwiaWNvblBpY1wiOiBcIjFcIixcbiAgICAgICAgICAgIFwiYXJlYVwiOiBcIjJcIixcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXM6IGFueSA9IGF3YWl0IFV0aWxzLlBvc3QoSHR0cFBhdGguY3JlYXRlSnVMZUJ1LCBpbmZvKTtcbiAgICAgICAgaWYgKHJlcy5jb2RlICE9PSAyMDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWxlcnREZXN0b3J5KCk7XG4gICAgfVxuXG5cblxuXG5cbn1cbiJdfQ==