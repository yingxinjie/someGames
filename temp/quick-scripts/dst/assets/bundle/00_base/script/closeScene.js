
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/00_base/script/closeScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '92ae42OwmRPAo5iZWrO+82S', 'closeScene');
// bundle/00_base/script/closeScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ComponentBase_1 = require("./common/ComponentBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var closeScene = /** @class */ (function (_super) {
    __extends(closeScene, _super);
    function closeScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    closeScene.prototype.start = function () {
        this.TouchOn(this.node, this.goToHall);
    };
    closeScene.prototype.goToHall = function () {
        cc.director.loadScene("hall");
    };
    closeScene = __decorate([
        ccclass
    ], closeScene);
    return closeScene;
}(ComponentBase_1.default));
exports.default = closeScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMF9iYXNlXFxzY3JpcHRcXGNsb3NlU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUFtRDtBQUU3QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBYTtJQUFyRDs7SUFRQSxDQUFDO0lBUEcsMEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELDZCQUFRLEdBQVI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBUGdCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FROUI7SUFBRCxpQkFBQztDQVJELEFBUUMsQ0FSdUMsdUJBQWEsR0FRcEQ7a0JBUm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tIFwiLi9jb21tb24vQ29tcG9uZW50QmFzZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNsb3NlU2NlbmUgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuVG91Y2hPbih0aGlzLm5vZGUsIHRoaXMuZ29Ub0hhbGwpO1xyXG4gICAgfVxyXG5cclxuICAgIGdvVG9IYWxsKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImhhbGxcIik7XHJcbiAgICB9XHJcbn1cclxuIl19