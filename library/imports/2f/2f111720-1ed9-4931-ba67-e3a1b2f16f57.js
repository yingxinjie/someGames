"use strict";
cc._RF.push(module, '2f111cgHtlJMbpn46Gy8W9X', 'slider');
// bundle/02_game/script/config/slider.ts

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
var big_1 = require("./big");
var dzUtils_1 = require("./dzUtils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var slider = /** @class */ (function (_super) {
    __extends(slider, _super);
    function slider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Background = null;
        _this.Handle = null;
        _this.Handlelab = null;
        _this.backcall = null;
        return _this;
        // update (dt) {}
    }
    slider.prototype._maxValue = function () {
        return this.max;
    };
    slider.prototype._minValue = function () {
        return this.min;
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    slider.prototype.start = function () {
        this.node.on("slide", this.evt_slide, this);
        this.Handle.node.on(cc.Node.EventType.TOUCH_END, this.evt_touchend, this);
        this.Handle.node.on(cc.Node.EventType.TOUCH_CANCEL, this.evt_touchend, this);
        this.TouchOn(this.node.parent, this.evt_close, this);
    };
    slider.prototype.init = function (max, min) {
        if (max === void 0) { max = 1; }
        if (min === void 0) { min = 0; }
        this.max = max;
        this.min = min;
        this.curValue = min;
        this.node.getComponent(cc.Slider).progress = 0;
        this.setHandlelab(this.min);
    };
    slider.prototype.evt_slide = function (e) {
        var _progress = e.progress;
        var accAddNum = big_1.Big.accSubtr(this.max, this.min);
        var accDivNum = big_1.Big.accMul(accAddNum, _progress);
        this.curValue = Number(big_1.Big.accAdd(accDivNum, this.min).toFixed(1));
        if (_progress <= 0) {
            this.curValue = this.min;
        }
        if (_progress >= 1) {
            this.curValue = this.max;
        }
        this.backcall && this.backcall(this.curValue);
        this.setHandlelab(this.curValue);
    };
    slider.prototype.evt_touchend = function (e) {
        this.backcall && this.backcall(this.curValue);
    };
    slider.prototype.evt_close = function (e) {
        this.node.parent.active = false;
        this.node.getComponent(cc.Slider).progress = 0;
        this.setHandlelab(this.min);
    };
    slider.prototype.setHandleSprite = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.Handle;
                        return [4 /*yield*/, dzUtils_1.DzUtils.loadPic(url)];
                    case 1:
                        _a.spriteFrame = (_b.sent());
                        return [2 /*return*/];
                }
            });
        });
    };
    slider.prototype.setBackgroundSprite = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.Background;
                        return [4 /*yield*/, dzUtils_1.DzUtils.loadPic(url)];
                    case 1:
                        _a.spriteFrame = (_b.sent());
                        return [2 /*return*/];
                }
            });
        });
    };
    slider.prototype.setHandlelab = function (lab) {
        if (this.Handlelab) {
            this.Handlelab.string = "" + lab;
        }
    };
    slider.prototype.setLabColor = function (value) {
        this.Handlelab.node.color = dzUtils_1.DzUtils.colorOfString(value);
    };
    slider.prototype.setCallback = function (fuc, obj) {
        if (obj) {
            this.backcall = fuc.bind(obj);
        }
        else {
            this.backcall = fuc;
        }
    };
    slider.prototype.onDestroy = function () {
        this.backcall = null;
        this.Handle.node.off(cc.Node.EventType.TOUCH_END, this.evt_touchend, this);
        this.Handle.node.off(cc.Node.EventType.TOUCH_CANCEL, this.evt_touchend, this);
    };
    __decorate([
        property(cc.Sprite)
    ], slider.prototype, "Background", void 0);
    __decorate([
        property(cc.Sprite)
    ], slider.prototype, "Handle", void 0);
    __decorate([
        property(cc.Label)
    ], slider.prototype, "Handlelab", void 0);
    slider = __decorate([
        ccclass
    ], slider);
    return slider;
}(ComponentBase_1.default));
exports.default = slider;

cc._RF.pop();