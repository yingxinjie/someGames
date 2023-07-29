"use strict";
cc._RF.push(module, '3809fjPvWZMD47+UY3pQ0GU', 'bottomtoggle');
// bundle/01_hall/script/widget/bottomtoggle.ts

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
var ViewManager_1 = require("../config/ViewManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var bottomtoggle = /** @class */ (function (_super) {
    __extends(bottomtoggle, _super);
    function bottomtoggle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** 底部的切换按钮 */
    bottomtoggle.prototype.toggleOpenView = function (targ) {
        console.log(targ.node.name);
        ViewManager_1.ViewManager.Open(targ.node.name);
    };
    bottomtoggle = __decorate([
        ccclass
    ], bottomtoggle);
    return bottomtoggle;
}(cc.Component));
exports.default = bottomtoggle;

cc._RF.pop();