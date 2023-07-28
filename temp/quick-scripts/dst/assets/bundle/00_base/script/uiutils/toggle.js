
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMF9iYXNlXFxzY3JpcHRcXHVpdXRpbHNcXHRvZ2dsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUF3QkM7UUF0QkcsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRzdCLGlCQUFXLEdBQWMsSUFBSSxDQUFDOztJQWFsQyxDQUFDO0lBVGEsc0JBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBRUQsb0NBQW1CLEdBQW5CO1FBQ0ksc0VBQXNFO1FBQ3RFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDO0lBQ3ZELENBQUM7SUFyQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ1M7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDVTtJQVhiLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0F3QjFCO0lBQUQsYUFBQztDQXhCRCxBQXdCQyxDQXhCbUMsRUFBRSxDQUFDLFNBQVMsR0F3Qi9DO2tCQXhCb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdG9nZ2xlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdmlld0xlZnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdmlld1JpZ2h0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlKVxyXG4gICAgbGVmdFRvZ2dsZTogY2MuVG9nZ2xlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlKVxyXG4gICAgcmlnaHRUb2dnbGU6IGNjLlRvZ2dsZSA9IG51bGw7XHJcblxyXG5cclxuICAgIFxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudmlld1JpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUNvbnRhaW5lckNhbGwoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5sZWZ0VG9nZ2xlLmlzQ2hlY2tlZCwgdGhpcy5yaWdodFRvZ2dsZS5pc0NoZWNrZWQpO1xyXG4gICAgICAgIHRoaXMudmlld0xlZnQuYWN0aXZlID0gdGhpcy5sZWZ0VG9nZ2xlLmlzQ2hlY2tlZDtcclxuICAgICAgICB0aGlzLnZpZXdSaWdodC5hY3RpdmUgPSB0aGlzLnJpZ2h0VG9nZ2xlLmlzQ2hlY2tlZDtcclxuICAgIH1cclxufVxyXG4iXX0=