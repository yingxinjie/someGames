
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/01_hall/script/view/hall/julebu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6c067w93MFD+7dlxW7TI2Fx', 'julebu');
// bundle/01_hall/script/view/hall/julebu.ts

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
var ComponentBase_1 = require("../../../../00_base/script/common/ComponentBase");
var Utils_1 = require("../../config/Utils");
var config_1 = require("../../config/config");
var yiChuangJianJuLeBuItem_1 = require("../items/yiChuangJianJuLeBuItem");
var yiJiaRuJuLeBuItem_1 = require("../items/yiJiaRuJuLeBuItem");
var ViewManager_1 = require("../../config/ViewManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var julebu = /** @class */ (function (_super) {
    __extends(julebu, _super);
    function julebu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.yiJiaRu = null;
        _this.yiJiaRuList = null;
        _this.yiJiaRuItem = null;
        _this.yiChuangJian = null;
        _this.yiChuangJianList = null;
        _this.yiChuangJianItem = null;
        return _this;
    }
    julebu.prototype.start = function () {
        this.yiChuangJianList.active = false;
        this.onToggleBtnClick();
    };
    julebu.prototype.onToggleBtnClick = function () {
        this.yiJiaRu.isChecked && this.queryJiaRuInfo();
        this.yiChuangJian.isChecked && this.queryYiChuangJian();
    };
    julebu.prototype.queryJiaRuInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, content, list;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utils_1.Utils.Post(config_1.HttpPath.clubListQuery, { current: 0, size: 20 })];
                    case 1:
                        res = _a.sent();
                        if (res.code != 200) {
                            return [2 /*return*/];
                        }
                        content = this.yiJiaRuList.getComponent(cc.ScrollView).content;
                        content.removeAllChildren();
                        list = res.data;
                        if (list) {
                            list.forEach(function (item) {
                                var itemNode = cc.instantiate(_this.yiJiaRuItem);
                                var script = itemNode.getComponent(yiJiaRuJuLeBuItem_1.default);
                                itemNode.x = 0;
                                itemNode.y = 0;
                                itemNode.parent = content;
                                script.run(item);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    julebu.prototype.queryYiChuangJian = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, content, list;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utils_1.Utils.Post(config_1.HttpPath.clubListQuery, { current: 0, size: 20 })];
                    case 1:
                        res = _a.sent();
                        if (res.code != 200) {
                            return [2 /*return*/];
                        }
                        content = this.yiChuangJianList.getComponent(cc.ScrollView).content;
                        content.removeAllChildren();
                        list = res.data;
                        if (list) {
                            list.forEach(function (item) {
                                var itemNode = cc.instantiate(_this.yiChuangJianItem);
                                var script = itemNode.getComponent(yiChuangJianJuLeBuItem_1.default);
                                itemNode.x = 0;
                                itemNode.y = 0;
                                itemNode.parent = content;
                                script.run(item);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    julebu.prototype.add = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("add");
                ViewManager_1.ViewManager.Alert(config_1.WidgetEnum.AlertAddClub);
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        property(cc.Toggle)
    ], julebu.prototype, "yiJiaRu", void 0);
    __decorate([
        property(cc.Node)
    ], julebu.prototype, "yiJiaRuList", void 0);
    __decorate([
        property(cc.Node)
    ], julebu.prototype, "yiJiaRuItem", void 0);
    __decorate([
        property(cc.Toggle)
    ], julebu.prototype, "yiChuangJian", void 0);
    __decorate([
        property(cc.Node)
    ], julebu.prototype, "yiChuangJianList", void 0);
    __decorate([
        property(cc.Node)
    ], julebu.prototype, "yiChuangJianItem", void 0);
    julebu = __decorate([
        ccclass
    ], julebu);
    return julebu;
}(ComponentBase_1.default));
exports.default = julebu;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXHZpZXdcXGhhbGxcXGp1bGVidS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRkFBNEU7QUFDNUUsNENBQTJDO0FBQzNDLDhDQUEyRDtBQUMzRCwwRUFBcUU7QUFDckUsZ0VBQTJEO0FBQzNELHdEQUF1RDtBQUVqRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQywwQkFBYTtJQUFqRDtRQUFBLHFFQW9GQztRQWpGVyxhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRzFCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBSTVCLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRy9CLHNCQUFnQixHQUFZLElBQUksQ0FBQztRQUdqQyxzQkFBZ0IsR0FBWSxJQUFJLENBQUM7O0lBaUU3QyxDQUFDO0lBOURhLHNCQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNyQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU8saUNBQWdCLEdBQXhCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzVELENBQUM7SUFHYSwrQkFBYyxHQUE1Qjs7Ozs7OzRCQUNtQixxQkFBTSxhQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFRLENBQUMsYUFBYSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJ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dUI7SUFuQnhCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FvRjFCO0lBQUQsYUFBQztDQXBGRCxBQW9GQyxDQXBGbUMsdUJBQWEsR0FvRmhEO2tCQXBGb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gXCIuLi8uLi8uLi8uLi8wMF9iYXNlL3NjcmlwdC9jb21tb24vQ29tcG9uZW50QmFzZVwiO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi8uLi9jb25maWcvVXRpbHNcIjtcclxuaW1wb3J0IHsgSHR0cFBhdGgsIFdpZGdldEVudW0gfSBmcm9tIFwiLi4vLi4vY29uZmlnL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeWlDaHVhbmdKaWFuSnVMZUJ1SXRlbSBmcm9tIFwiLi4vaXRlbXMveWlDaHVhbmdKaWFuSnVMZUJ1SXRlbVwiO1xyXG5pbXBvcnQgeWlKaWFSdUp1TGVCdUl0ZW0gZnJvbSBcIi4uL2l0ZW1zL3lpSmlhUnVKdUxlQnVJdGVtXCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL2NvbmZpZy9WaWV3TWFuYWdlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGp1bGVidSBleHRlbmRzIENvbXBvbmVudEJhc2Uge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXHJcbiAgICBwcml2YXRlIHlpSmlhUnU6IGNjLlRvZ2dsZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIHlpSmlhUnVMaXN0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgeWlKaWFSdUl0ZW06IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlKVxyXG4gICAgcHJpdmF0ZSB5aUNodWFuZ0ppYW46IGNjLlRvZ2dsZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIHlpQ2h1YW5nSmlhbkxpc3Q6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSB5aUNodWFuZ0ppYW5JdGVtOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMueWlDaHVhbmdKaWFuTGlzdC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9uVG9nZ2xlQnRuQ2xpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uVG9nZ2xlQnRuQ2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy55aUppYVJ1LmlzQ2hlY2tlZCAmJiB0aGlzLnF1ZXJ5SmlhUnVJbmZvKCk7XHJcbiAgICAgICAgdGhpcy55aUNodWFuZ0ppYW4uaXNDaGVja2VkICYmIHRoaXMucXVlcnlZaUNodWFuZ0ppYW4oKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBxdWVyeUppYVJ1SW5mbygpIHtcclxuICAgICAgICBsZXQgcmVzOiBhbnkgPSBhd2FpdCBVdGlscy5Qb3N0KEh0dHBQYXRoLmNsdWJMaXN0UXVlcnksIHsgY3VycmVudDogMCwgc2l6ZTogMjAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyZXMuY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSB0aGlzLnlpSmlhUnVMaXN0LmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KS5jb250ZW50O1xyXG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuXHJcbiAgICAgICAgbGV0IGxpc3QgPSByZXMuZGF0YSBhcyBhbnlbXTtcclxuICAgICAgICBpZiAobGlzdCkge1xyXG4gICAgICAgICAgICBsaXN0LmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy55aUppYVJ1SXRlbSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2NyaXB0ID0gaXRlbU5vZGUuZ2V0Q29tcG9uZW50KHlpSmlhUnVKdUxlQnVJdGVtKTtcclxuICAgICAgICAgICAgICAgIGl0ZW1Ob2RlLnggPSAwO1xyXG4gICAgICAgICAgICAgICAgaXRlbU5vZGUueSA9IDA7XHJcbiAgICAgICAgICAgICAgICBpdGVtTm9kZS5wYXJlbnQgPSBjb250ZW50O1xyXG4gICAgICAgICAgICAgICAgc2NyaXB0LnJ1bihpdGVtKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHF1ZXJ5WWlDaHVhbmdKaWFuKCkge1xyXG4gICAgICAgIGxldCByZXM6IGFueSA9IGF3YWl0IFV0aWxzLlBvc3QoSHR0cFBhdGguY2x1Ykxpc3RRdWVyeSwgeyBjdXJyZW50OiAwLCBzaXplOiAyMCB9KTtcclxuXHJcbiAgICAgICAgaWYgKHJlcy5jb2RlICE9IDIwMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY29udGVudCA9IHRoaXMueWlDaHVhbmdKaWFuTGlzdC5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldykuY29udGVudDtcclxuICAgICAgICBjb250ZW50LnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcblxyXG4gICAgICAgIGxldCBsaXN0ID0gcmVzLmRhdGEgYXMgYW55W107XHJcbiAgICAgICAgaWYgKGxpc3QpIHtcclxuICAgICAgICAgICAgbGlzdC5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMueWlDaHVhbmdKaWFuSXRlbSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2NyaXB0ID0gaXRlbU5vZGUuZ2V0Q29tcG9uZW50KHlpQ2h1YW5nSmlhbkp1TGVCdUl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgaXRlbU5vZGUueCA9IDA7XHJcbiAgICAgICAgICAgICAgICBpdGVtTm9kZS55ID0gMDtcclxuICAgICAgICAgICAgICAgIGl0ZW1Ob2RlLnBhcmVudCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICBzY3JpcHQucnVuKGl0ZW0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBhZGQoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhZGRcIik7XHJcbiAgICAgICAgVmlld01hbmFnZXIuQWxlcnQoV2lkZ2V0RW51bS5BbGVydEFkZENsdWIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==