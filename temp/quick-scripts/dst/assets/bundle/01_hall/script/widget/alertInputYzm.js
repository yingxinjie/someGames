
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/01_hall/script/widget/alertInputYzm.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'af281uQMENOnJQxV6w2RMvt', 'alertInputYzm');
// bundle/01_hall/script/widget/alertInputYzm.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentBase_1 = require("../../../00_base/script/common/ComponentBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var alertInputYzm = /** @class */ (function (_super) {
    __extends(alertInputYzm, _super);
    function alertInputYzm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        return _this;
    }
    alertInputYzm.prototype.start = function () {
        this.TouchOn(this.closeBtn, this.alertDestory);
    };
    alertInputYzm.prototype.onClickCloseBtn = function () {
        this.node.destroy();
    };
    __decorate([
        property(cc.Node)
    ], alertInputYzm.prototype, "closeBtn", void 0);
    alertInputYzm = __decorate([
        ccclass
    ], alertInputYzm);
    return alertInputYzm;
}(ComponentBase_1.default));
exports.default = alertInputYzm;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXHdpZGdldFxcYWxlcnRJbnB1dFl6bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7QUFFdEYsOEVBQXlFO0FBRW5FLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFhO0lBQXhEO1FBQUEscUVBYUM7UUFYVyxjQUFRLEdBQVksSUFBSSxDQUFDOztJQVdyQyxDQUFDO0lBUkcsNkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVPLHVDQUFlLEdBQXZCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBVEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDZTtJQUZoQixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBYWpDO0lBQUQsb0JBQUM7Q0FiRCxBQWFDLENBYjBDLHVCQUFhLEdBYXZEO2tCQWJvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gXCIuLi8uLi8uLi8wMF9iYXNlL3NjcmlwdC9jb21tb24vQ29tcG9uZW50QmFzZVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYWxlcnRJbnB1dFl6bSBleHRlbmRzIENvbXBvbmVudEJhc2Uge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgY2xvc2VCdG46IGNjLk5vZGUgPSBudWxsO1xuXG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5Ub3VjaE9uKHRoaXMuY2xvc2VCdG4sIHRoaXMuYWxlcnREZXN0b3J5KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2xpY2tDbG9zZUJ0bigpIHtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG5cbn1cbiJdfQ==