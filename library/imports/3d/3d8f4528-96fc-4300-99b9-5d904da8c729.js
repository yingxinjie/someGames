"use strict";
cc._RF.push(module, '3d8f4UolvxDAJm5XZBNqMcp', 'open');
// bundle/01_hall/script/open.ts

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