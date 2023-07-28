
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/01_hall/script/view/wo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f2b5c2exiJAo4iMYRrZBJDn', 'wo');
// bundle/01_hall/script/view/wo.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ComponentBase_1 = require("../../../00_base/script/common/ComponentBase");
var ViewManager_1 = require("../config/ViewManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.setting = null;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.TouchOn(this.setting, this.openSetting);
    };
    NewClass.prototype.openSetting = function () {
        ViewManager_1.ViewManager.Alert("setting");
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "setting", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(ComponentBase_1.default));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXHZpZXdcXHdvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4RUFBeUU7QUFFekUscURBQW9EO0FBRTlDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFhO0lBQW5EO1FBQUEscUVBYUM7UUFWVyxhQUFPLEdBQVksSUFBSSxDQUFDOztJQVVwQyxDQUFDO0lBUEcsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVPLDhCQUFXLEdBQW5CO1FBQ0kseUJBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQVREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ2M7SUFIZixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBYTVCO0lBQUQsZUFBQztDQWJELEFBYUMsQ0FicUMsdUJBQWEsR0FhbEQ7a0JBYm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tIFwiLi4vLi4vLi4vMDBfYmFzZS9zY3JpcHQvY29tbW9uL0NvbXBvbmVudEJhc2VcIjtcbmltcG9ydCB7IFZpZXdFbnVtLCBXaWRnZXRFbnVtIH0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWdcIjtcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcIi4uL2NvbmZpZy9WaWV3TWFuYWdlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgc2V0dGluZzogY2MuTm9kZSA9IG51bGw7XG5cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLlRvdWNoT24odGhpcy5zZXR0aW5nLCB0aGlzLm9wZW5TZXR0aW5nKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9wZW5TZXR0aW5nKCkge1xuICAgICAgICBWaWV3TWFuYWdlci5BbGVydChcInNldHRpbmdcIik7XG4gICAgfVxufVxuIl19