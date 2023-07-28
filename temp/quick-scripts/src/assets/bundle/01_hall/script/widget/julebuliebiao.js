"use strict";
cc._RF.push(module, 'bdca5ui23VPnKOArHn9qg7N', 'julebuliebiao');
// bundle/01_hall/script/widget/julebuliebiao.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ComponentBase_1 = require("../../../00_base/script/common/ComponentBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var julebuliebiao = /** @class */ (function (_super) {
    __extends(julebuliebiao, _super);
    function julebuliebiao() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        return _this;
    }
    julebuliebiao.prototype.start = function () {
        this.TouchOn(this.closeBtn, this.alertDestory);
    };
    __decorate([
        property(cc.Node)
    ], julebuliebiao.prototype, "closeBtn", void 0);
    julebuliebiao = __decorate([
        ccclass
    ], julebuliebiao);
    return julebuliebiao;
}(ComponentBase_1.default));
exports.default = julebuliebiao;

cc._RF.pop();