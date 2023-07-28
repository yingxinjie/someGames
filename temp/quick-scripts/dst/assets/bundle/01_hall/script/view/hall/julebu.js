
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
                    case 0: return [4 /*yield*/, Utils_1.Utils.Post(config_1.HttpPath.queryAddedJuLeBu, { current: 0, size: 20 })];
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
                    case 0: return [4 /*yield*/, Utils_1.Utils.Post(config_1.HttpPath.queryCreatedJuLeBu, { current: 0, size: 20 })];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXHZpZXdcXGhhbGxcXGp1bGVidS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRkFBNEU7QUFDNUUsNENBQTJDO0FBQzNDLDhDQUErQztBQUMvQywwRUFBcUU7QUFDckUsZ0VBQTJEO0FBRXJELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFhO0lBQWpEO1FBQUEscUVBZ0ZDO1FBN0VXLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFHMUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFJNUIsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFHL0Isc0JBQWdCLEdBQVksSUFBSSxDQUFDO1FBR2pDLHNCQUFnQixHQUFZLElBQUksQ0FBQzs7SUE2RDdDLENBQUM7SUExRGEsc0JBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFTyxpQ0FBZ0IsR0FBeEI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDNUQsQ0FBQztJQUdhLCtCQUFjLEdBQTVCOzs7Ozs7NEJBQ21CLHFCQUFNLGFBQUssQ0FBQyxJQUFJLENBQUMsaUJBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUs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aW1wb3J0IENvbXBvbmVudEJhc2UgZnJvbSBcIi4uLy4uLy4uLy4uLzAwX2Jhc2Uvc2NyaXB0L2NvbW1vbi9Db21wb25lbnRCYXNlXCI7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi8uLi9jb25maWcvVXRpbHNcIjtcbmltcG9ydCB7IEh0dHBQYXRoIH0gZnJvbSBcIi4uLy4uL2NvbmZpZy9jb25maWdcIjtcbmltcG9ydCB5aUNodWFuZ0ppYW5KdUxlQnVJdGVtIGZyb20gXCIuLi9pdGVtcy95aUNodWFuZ0ppYW5KdUxlQnVJdGVtXCI7XG5pbXBvcnQgeWlKaWFSdUp1TGVCdUl0ZW0gZnJvbSBcIi4uL2l0ZW1zL3lpSmlhUnVKdUxlQnVJdGVtXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBqdWxlYnUgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXG4gICAgcHJpdmF0ZSB5aUppYVJ1OiBjYy5Ub2dnbGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSB5aUppYVJ1TGlzdDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIHlpSmlhUnVJdGVtOiBjYy5Ob2RlID0gbnVsbDtcblxuXG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZSlcbiAgICBwcml2YXRlIHlpQ2h1YW5nSmlhbjogY2MuVG9nZ2xlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgeWlDaHVhbmdKaWFuTGlzdDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIHlpQ2h1YW5nSmlhbkl0ZW06IGNjLk5vZGUgPSBudWxsO1xuXG5cbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMueWlDaHVhbmdKaWFuTGlzdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vblRvZ2dsZUJ0bkNsaWNrKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblRvZ2dsZUJ0bkNsaWNrKCkge1xuICAgICAgICB0aGlzLnlpSmlhUnUuaXNDaGVja2VkICYmIHRoaXMucXVlcnlKaWFSdUluZm8oKTtcbiAgICAgICAgdGhpcy55aUNodWFuZ0ppYW4uaXNDaGVja2VkICYmIHRoaXMucXVlcnlZaUNodWFuZ0ppYW4oKTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgYXN5bmMgcXVlcnlKaWFSdUluZm8oKSB7XG4gICAgICAgIGxldCByZXM6IGFueSA9IGF3YWl0IFV0aWxzLlBvc3QoSHR0cFBhdGgucXVlcnlBZGRlZEp1TGVCdSwgeyBjdXJyZW50OiAwLCBzaXplOiAyMCB9KTtcblxuICAgICAgICBpZiAocmVzLmNvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY29udGVudCA9IHRoaXMueWlKaWFSdUxpc3QuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpLmNvbnRlbnQ7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcblxuICAgICAgICBsZXQgbGlzdCA9IHJlcy5kYXRhIGFzIGFueVtdO1xuICAgICAgICBpZiAobGlzdCkge1xuICAgICAgICAgICAgbGlzdC5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnlpSmlhUnVJdGVtKTtcbiAgICAgICAgICAgICAgICBsZXQgc2NyaXB0ID0gaXRlbU5vZGUuZ2V0Q29tcG9uZW50KHlpSmlhUnVKdUxlQnVJdGVtKTtcbiAgICAgICAgICAgICAgICBpdGVtTm9kZS54ID0gMDtcbiAgICAgICAgICAgICAgICBpdGVtTm9kZS55ID0gMDtcbiAgICAgICAgICAgICAgICBpdGVtTm9kZS5wYXJlbnQgPSBjb250ZW50O1xuICAgICAgICAgICAgICAgIHNjcmlwdC5ydW4oaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBxdWVyeVlpQ2h1YW5nSmlhbigpIHtcbiAgICAgICAgbGV0IHJlczogYW55ID0gYXdhaXQgVXRpbHMuUG9zdChIdHRwUGF0aC5xdWVyeUNyZWF0ZWRKdUxlQnUsIHsgY3VycmVudDogMCwgc2l6ZTogMjAgfSk7XG5cbiAgICAgICAgaWYgKHJlcy5jb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbnRlbnQgPSB0aGlzLnlpQ2h1YW5nSmlhbkxpc3QuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpLmNvbnRlbnQ7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcblxuICAgICAgICBsZXQgbGlzdCA9IHJlcy5kYXRhIGFzIGFueVtdO1xuICAgICAgICBpZiAobGlzdCkge1xuICAgICAgICAgICAgbGlzdC5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnlpQ2h1YW5nSmlhbkl0ZW0pO1xuICAgICAgICAgICAgICAgIGxldCBzY3JpcHQgPSBpdGVtTm9kZS5nZXRDb21wb25lbnQoeWlDaHVhbmdKaWFuSnVMZUJ1SXRlbSk7XG4gICAgICAgICAgICAgICAgaXRlbU5vZGUueCA9IDA7XG4gICAgICAgICAgICAgICAgaXRlbU5vZGUueSA9IDA7XG4gICAgICAgICAgICAgICAgaXRlbU5vZGUucGFyZW50ID0gY29udGVudDtcbiAgICAgICAgICAgICAgICBzY3JpcHQucnVuKGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==