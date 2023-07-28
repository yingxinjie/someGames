"use strict";
cc._RF.push(module, '0f083/vumVP77OTLWsYwiZO', 'ComponentBase');
// bundle/00_base/script/common/ComponentBase.ts

Object.defineProperty(exports, "__esModule", { value: true });
var EventManger_1 = require("./EventManger");
var property = cc._decorator.property;
var ComponentBase = /** @class */ (function (_super) {
    __extends(ComponentBase, _super);
    function ComponentBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.events = [];
        return _this;
    }
    ComponentBase.prototype.TouchOn = function (target, cb, cbo) {
        if (cbo === void 0) { cbo = this; }
        if (target && cb) {
            this.events.push({ target: target, name: cc.Node.EventType.TOUCH_START, cb: cb, cbo: cbo });
            target.on(cc.Node.EventType.TOUCH_END, cb, cbo);
        }
    };
    ComponentBase.prototype.EventOn = function (name, cb, cbo) {
        if (cbo === void 0) { cbo = this; }
        if (name && name.length > 0 && cb) {
            this.events.push({ target: null, name: name, cb: cb, cbo: cbo });
            EventManger_1.EventManger.on(name, cb, cbo);
        }
    };
    ComponentBase.prototype.onDestroy = function () {
        this.events.forEach(function (ele) {
            if (ele.target) {
                ele.target.off(ele.name, ele.cb, ele.cbo);
            }
            else {
                EventManger_1.EventManger.off(ele.name, ele.cb, ele.cbo);
            }
        });
    };
    ComponentBase.prototype.alertDestory = function () {
        this.node.destroy();
    };
    return ComponentBase;
}(cc.Component));
exports.default = ComponentBase;

cc._RF.pop();