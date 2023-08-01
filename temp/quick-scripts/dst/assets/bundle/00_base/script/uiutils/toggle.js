
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/00_base/script/uiutils/toggle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '820fen5tiRLeZXkrn1UdFkD', 'toggle');
// bundle/00_base/script/uiutils/toggle.ts

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
var toggle = /** @class */ (function (_super) {
    __extends(toggle, _super);
    function toggle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewLeft = null;
        _this.viewRight = null;
        _this.leftToggle = null;
        _this.rightToggle = null;
        return _this;
    }
    toggle.prototype.start = function () {
        this.viewRight.active = false;
    };
    toggle.prototype.toggleContainerCall = function () {
        // console.log(this.leftToggle.isChecked, this.rightToggle.isChecked);
        this.viewLeft.active = this.leftToggle.isChecked;
        this.viewRight.active = this.rightToggle.isChecked;
    };
    __decorate([
        property(cc.Node)
    ], toggle.prototype, "viewLeft", void 0);
    __decorate([
        property(cc.Node)
    ], toggle.prototype, "viewRight", void 0);
    __decorate([
        property(cc.Toggle)
    ], toggle.prototype, "leftToggle", void 0);
    __decorate([
        property(cc.Toggle)
    ], toggle.prototype, "rightToggle", void 0);
    toggle = __decorate([
        ccclass
    ], toggle);
    return toggle;
}(cc.Component));
exports.default = toggle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMF9iYXNlXFxzY3JpcHRcXHVpdXRpbHNcXHRvZ2dsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQXdCQztRQXRCRyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFHN0IsaUJBQVcsR0FBYyxJQUFJLENBQUM7O0lBYWxDLENBQUM7SUFUYSxzQkFBSyxHQUFmO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxvQ0FBbUIsR0FBbkI7UUFDSSxzRUFBc0U7UUFDdEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7SUFDdkQsQ0FBQztJQXJCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDUztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNVO0lBWGIsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQXdCMUI7SUFBRCxhQUFDO0NBeEJELEFBd0JDLENBeEJtQyxFQUFFLENBQUMsU0FBUyxHQXdCL0M7a0JBeEJvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0b2dnbGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB2aWV3TGVmdDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB2aWV3UmlnaHQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXHJcbiAgICBsZWZ0VG9nZ2xlOiBjYy5Ub2dnbGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXHJcbiAgICByaWdodFRvZ2dsZTogY2MuVG9nZ2xlID0gbnVsbDtcclxuXHJcblxyXG4gICAgXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52aWV3UmlnaHQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlQ29udGFpbmVyQ2FsbCgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxlZnRUb2dnbGUuaXNDaGVja2VkLCB0aGlzLnJpZ2h0VG9nZ2xlLmlzQ2hlY2tlZCk7XHJcbiAgICAgICAgdGhpcy52aWV3TGVmdC5hY3RpdmUgPSB0aGlzLmxlZnRUb2dnbGUuaXNDaGVja2VkO1xyXG4gICAgICAgIHRoaXMudmlld1JpZ2h0LmFjdGl2ZSA9IHRoaXMucmlnaHRUb2dnbGUuaXNDaGVja2VkO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==