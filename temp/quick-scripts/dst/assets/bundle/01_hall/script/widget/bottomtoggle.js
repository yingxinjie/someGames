
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXHdpZGdldFxcYm90dG9tdG9nZ2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBb0Q7QUFHOUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7O0lBTUEsQ0FBQztJQUxHLGNBQWM7SUFDZCxxQ0FBYyxHQUFkLFVBQWUsSUFBZTtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIseUJBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFnQixDQUFDLENBQUM7SUFDakQsQ0FBQztJQUxnQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBTWhDO0lBQUQsbUJBQUM7Q0FORCxBQU1DLENBTnlDLEVBQUUsQ0FBQyxTQUFTLEdBTXJEO2tCQU5vQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwiLi4vY29uZmlnL1ZpZXdNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFZpZXdFbnVtIH0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWdcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBib3R0b210b2dnbGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgLyoqIOW6lemDqOeahOWIh+aNouaMiemSriAqL1xyXG4gICAgdG9nZ2xlT3BlblZpZXcodGFyZzogY2MuVG9nZ2xlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFyZy5ub2RlLm5hbWUpO1xyXG4gICAgICAgIFZpZXdNYW5hZ2VyLk9wZW4odGFyZy5ub2RlLm5hbWUgYXMgVmlld0VudW0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==