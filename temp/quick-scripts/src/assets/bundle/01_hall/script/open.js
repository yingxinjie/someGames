"use strict";
cc._RF.push(module, '3d8f4UolvxDAJm5XZBNqMcp', 'open');
// bundle/01_hall/script/open.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var open = /** @class */ (function (_super) {
    __extends(open, _super);
    function open() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    open.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.openGame, this);
    };
    open.prototype.openGame = function () {
        var _this = this;
        console.log("点击了按钮", this.node.name);
        cc.assetManager.loadBundle(this.node.name, function (err, bundle) {
            cc.director.loadScene(_this.node.name);
        });
    };
    open = __decorate([
        ccclass
    ], open);
    return open;
}(cc.Component));
exports.default = open;

cc._RF.pop();