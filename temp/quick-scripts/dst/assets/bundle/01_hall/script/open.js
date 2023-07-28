
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/01_hall/script/open.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXG9wZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDOztJQWNBLENBQUM7SUFaRyxvQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELHVCQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpHLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBQyxHQUFVLEVBQUUsTUFBOEI7WUFDbEYsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFYZ0IsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQWN4QjtJQUFELFdBQUM7Q0FkRCxBQWNDLENBZGlDLEVBQUUsQ0FBQyxTQUFTLEdBYzdDO2tCQWRvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBvcGVuIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub3BlbkdhbWUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5HYW1lKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi54K55Ye75LqG5oyJ6ZKuXCIsIHRoaXMubm9kZS5uYW1lKTtcclxuICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZSh0aGlzLm5vZGUubmFtZSwgKGVycjogRXJyb3IsIGJ1bmRsZTogY2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZSkgPT4ge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUodGhpcy5ub2RlLm5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19