"use strict";
cc._RF.push(module, '938d9cocT1ARLr8IWyqhEtu', 'TimeTickerDown');
// bundle/00_base/script/common/TimeTickerDown.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentBase_1 = require("./ComponentBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TimeTickerDown = /** @class */ (function (_super) {
    __extends(TimeTickerDown, _super);
    function TimeTickerDown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.total = 60;
        _this.down = false;
        _this.label = null;
        return _this;
    }
    TimeTickerDown.prototype.run = function () {
        this.down = true;
        this.label = this.node.getComponent(cc.Label) || this.node.getComponent(cc.RichText);
        this.label.string = String(this.total);
        this.node.children[0].active = false;
        this.down = true;
        this.schedule(this.timeDown, 1);
    };
    TimeTickerDown.prototype.timeDown = function () {
        this.total -= 1;
        this.label.string = String(this.total);
        //取消倒计时
        if (this.total <= 0) {
            this.unschedule(this.timeDown);
            this.label.string = "发送验证码";
            this.node.children[0].active = true;
            this.down = false;
            this.total = 60;
        }
    };
    TimeTickerDown = __decorate([
        ccclass
    ], TimeTickerDown);
    return TimeTickerDown;
}(ComponentBase_1.default));
exports.default = TimeTickerDown;

cc._RF.pop();