
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/01_hall/script/widget/bottomtoggle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXHdpZGdldFxcYm90dG9tdG9nZ2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFvRDtBQUc5QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUF0RDs7SUFNQSxDQUFDO0lBTEcsY0FBYztJQUNkLHFDQUFjLEdBQWQsVUFBZSxJQUFlO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1Qix5QkFBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQWdCLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBTGdCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FNaEM7SUFBRCxtQkFBQztDQU5ELEFBTUMsQ0FOeUMsRUFBRSxDQUFDLFNBQVMsR0FNckQ7a0JBTm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCIuLi9jb25maWcvVmlld01hbmFnZXJcIjtcclxuaW1wb3J0IHsgVmlld0VudW0gfSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGJvdHRvbXRvZ2dsZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICAvKiog5bqV6YOo55qE5YiH5o2i5oyJ6ZKuICovXHJcbiAgICB0b2dnbGVPcGVuVmlldyh0YXJnOiBjYy5Ub2dnbGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXJnLm5vZGUubmFtZSk7XHJcbiAgICAgICAgVmlld01hbmFnZXIuT3Blbih0YXJnLm5vZGUubmFtZSBhcyBWaWV3RW51bSk7XHJcbiAgICB9XHJcbn1cclxuIl19