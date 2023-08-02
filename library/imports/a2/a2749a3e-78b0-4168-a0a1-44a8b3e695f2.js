"use strict";
cc._RF.push(module, 'a2749o+eLBBaKChRKiz5pXy', 'head');
// bundle/02_game/script/head.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var ComponentBase_1 = require("../../00_base/script/common/ComponentBase");
var deskInfo_1 = require("./config/deskInfo");
var timedown_1 = require("./timedown");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var head = /** @class */ (function (_super) {
    __extends(head, _super);
    function head() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.labName = null;
        _this.labAllscore = null;
        _this.labSeat = null;
        _this.pic = null;
        _this.sprStaus = null;
        _this.animAllin = null;
        _this.sprTwoCard = null;
        _this.sprTime = null;
        _this.top = null;
        _this.bottom = null;
        _this.Dicon = null;
        _this.cards = [];
        _this.timeDown = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    head.prototype.start = function () {
    };
    head.prototype.init = function (id, seat, coneverSeat) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.playerId = id;
                this.seat = seat;
                this.convertseat = coneverSeat ? coneverSeat : seat;
                this.labSeat.string = "" + this.seat;
                this.setHeadInfo(id);
                return [2 /*return*/];
            });
        });
    };
    head.prototype.setHeadInfo = function (id) {
        var lpalyer = deskInfo_1.DeskInfo.getLplayer(id);
        if (!lpalyer)
            return;
        this.playerId = id;
        this.labName.string = "" + lpalyer.name;
        this.labAllscore.string = " " + lpalyer.bankRoll;
        //  await this.headSpr(lpalyer.headPic);
        // this.node.active = this.playerId > 0
    };
    head.prototype.setPlayTime = function (time) {
        this.timeDown.playTime(time);
    };
    head.prototype.setStopTime = function () {
        this.timeDown.stopTime();
    };
    head.prototype.clearhead = function () {
        this.playerId = 0;
        this.labName.string = "空位";
        this.labAllscore.string = " ";
    };
    head.prototype.setconvertSeat = function (seat) {
        this.convertseat = seat;
    };
    head.prototype.headSpr = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            cc.loader.load(url, function (err, texture) {
                if (err != null) {
                    return cc.error("加载失败..", url);
                }
                var sprf = new cc.SpriteFrame(texture);
                resolve(sprf);
                _this.pic.spriteFrame = sprf;
            });
        });
    };
    __decorate([
        property(cc.Label)
    ], head.prototype, "labName", void 0);
    __decorate([
        property(cc.Label)
    ], head.prototype, "labAllscore", void 0);
    __decorate([
        property(cc.Label)
    ], head.prototype, "labSeat", void 0);
    __decorate([
        property(cc.Sprite)
    ], head.prototype, "pic", void 0);
    __decorate([
        property(cc.Sprite)
    ], head.prototype, "sprStaus", void 0);
    __decorate([
        property(cc.Animation)
    ], head.prototype, "animAllin", void 0);
    __decorate([
        property(cc.Node)
    ], head.prototype, "sprTwoCard", void 0);
    __decorate([
        property(cc.Node)
    ], head.prototype, "sprTime", void 0);
    __decorate([
        property(cc.Node)
    ], head.prototype, "top", void 0);
    __decorate([
        property(cc.Node)
    ], head.prototype, "bottom", void 0);
    __decorate([
        property(cc.Node)
    ], head.prototype, "Dicon", void 0);
    __decorate([
        property(cc.Node)
    ], head.prototype, "cards", void 0);
    __decorate([
        property(timedown_1.default)
    ], head.prototype, "timeDown", void 0);
    head = __decorate([
        ccclass
    ], head);
    return head;
}(ComponentBase_1.default));
exports.default = head;

cc._RF.pop();