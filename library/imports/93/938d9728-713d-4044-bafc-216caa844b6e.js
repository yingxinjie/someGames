"use strict";
cc._RF.push(module, '938d9cocT1ARLr8IWyqhEtu', 'TimeTickerDown');
// bundle/00_base/script/common/TimeTickerDown.ts

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