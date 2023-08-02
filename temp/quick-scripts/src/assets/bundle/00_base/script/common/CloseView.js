"use strict";
cc._RF.push(module, '675d3rrX8FLI6wnz4ghIyiS', 'CloseView');
// bundle/00_base/script/common/CloseView.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CloseView = /** @class */ (function (_super) {
    __extends(CloseView, _super);
    function CloseView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.WillCloseTartget = null;
        return _this;
    }
    CloseView.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchNode, this);
    };
    CloseView.prototype.onTouchNode = function () {
        this.WillCloseTartget.destroy();
    };
    __decorate([
        property(cc.Node)
    ], CloseView.prototype, "WillCloseTartget", void 0);
    CloseView = __decorate([
        ccclass
    ], CloseView);
    return CloseView;
}(cc.Component));
exports.default = CloseView;

cc._RF.pop();