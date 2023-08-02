"use strict";
cc._RF.push(module, '47d68yXmEhA1oc1pj/Dh7PW', 'timedown');
// bundle/02_game/script/timedown.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentBase_1 = require("../../00_base/script/common/ComponentBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var timedown = /** @class */ (function (_super) {
    __extends(timedown, _super);
    function timedown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animNode = null;
        _this.animTime = null;
        _this.labTime = null;
        _this.isPlay = false;
        _this.maxTime = 0;
        _this.percentTime = 0;
        _this.timeSprite = null;
        _this.nowTime = 0;
        return _this;
    }
    timedown.prototype.start = function () {
    };
    timedown.prototype.playTime = function (time) {
        this.maxTime = this.nowTime = time;
        this.labTime.string = "" + time;
        this.timeSprite = this.node.getComponent(cc.Sprite);
        this.timeSprite.fillStart = 0.25;
        this.timeSprite.fillRange = 1;
        this.animNode.angle = 0;
        this.animTime.play();
        this.node.active = true;
        this.isPlay = true;
    };
    timedown.prototype.stopTime = function () {
        this.isPlay = false;
        this.node.active = false;
        this.animTime.stop();
    };
    timedown.prototype.update = function (dt) {
        if (!this.isPlay) {
            return;
        }
        this.nowTime -= dt;
        this.percentTime = this.nowTime / this.maxTime;
        if (this.nowTime < 0)
            this.stopTime();
        if (this.percentTime >= 0) {
            this.timeSprite.fillRange = this.percentTime;
            this.animNode.angle = this.percentTime * 360 - 360;
        }
        var tmpInt = Math.floor(this.nowTime);
        if (tmpInt >= 0) {
            if (this.labTime) {
                this.labTime.string = tmpInt.toString();
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], timedown.prototype, "animNode", void 0);
    __decorate([
        property(cc.Animation)
    ], timedown.prototype, "animTime", void 0);
    __decorate([
        property(cc.Label)
    ], timedown.prototype, "labTime", void 0);
    timedown = __decorate([
        ccclass
    ], timedown);
    return timedown;
}(ComponentBase_1.default));
exports.default = timedown;

cc._RF.pop();