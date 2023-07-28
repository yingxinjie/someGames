
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/01_hall/script/widget/julebuliebiao.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXHdpZGdldFxcanVsZWJ1bGllYmlhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEVBQXlFO0FBRW5FLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFhO0lBQXhEO1FBQUEscUVBVUM7UUFSVyxjQUFRLEdBQVksSUFBSSxDQUFDOztJQVFyQyxDQUFDO0lBTmEsNkJBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFbkQsQ0FBQztJQUxEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ2U7SUFGaEIsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQVVqQztJQUFELG9CQUFDO0NBVkQsQUFVQyxDQVYwQyx1QkFBYSxHQVV2RDtrQkFWb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gXCIuLi8uLi8uLi8wMF9iYXNlL3NjcmlwdC9jb21tb24vQ29tcG9uZW50QmFzZVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MganVsZWJ1bGllYmlhbyBleHRlbmRzIENvbXBvbmVudEJhc2Uge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgY2xvc2VCdG46IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLlRvdWNoT24odGhpcy5jbG9zZUJ0biwgdGhpcy5hbGVydERlc3RvcnkpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBcbn1cbiJdfQ==