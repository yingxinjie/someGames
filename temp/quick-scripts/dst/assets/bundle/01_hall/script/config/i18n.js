
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/01_hall/script/config/i18n.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a7271HlvnJMKa3fuDlcePsU', 'i18n');
// bundle/01_hall/script/config/i18n.ts

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
var Languages_1 = require("../../../../res/i18n/Languages");
var C_User_1 = require("./C_User");
var Utils_1 = require("./Utils");
var EventManger_1 = require("../../../00_base/script/common/EventManger");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var i18n = /** @class */ (function (_super) {
    __extends(i18n, _super);
    function i18n() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lanStr = "";
        _this.lanKey = "";
        return _this;
    }
    i18n_1 = i18n;
    i18n.prototype.start = function () {
        if (this.lanStr == "") {
            cc.error("\u8282\u70B9 " + Utils_1.Utils.FindPath(this.node) + " \u7684\u591A\u8BED\u8A00key\u4E3A\u7A7A");
            return;
        }
        EventManger_1.EventManger.on(i18n_1.LanguageChange, this.onChangeLanguage, this);
        var cfg = Languages_1.LanguagesCfg[0]; //解析中文,找key
        for (var key in cfg) {
            var element = cfg[key];
            if (element == this.lanStr) {
                this.lanKey = key;
            }
        }
        this.onChangeLanguage();
    };
    i18n.prototype.onChangeLanguage = function () {
        var cfg = Languages_1.LanguagesCfg[C_User_1.UserInfo.language];
        if (this.node && this.node.getComponent(cc.Label)) {
            this.node.getComponent(cc.Label).string = cfg[this.lanKey];
        }
    };
    var i18n_1;
    i18n.LanguageChange = "LanguageChange";
    __decorate([
        property
    ], i18n.prototype, "lanStr", void 0);
    i18n = i18n_1 = __decorate([
        ccclass
    ], i18n);
    return i18n;
}(cc.Component));
exports.default = i18n;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXGNvbmZpZ1xcaTE4bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBOEQ7QUFDOUQsbUNBQW9DO0FBQ3BDLGlDQUFnQztBQUNoQywwRUFBeUU7QUFFbkUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFvQ0M7UUEvQlcsWUFBTSxHQUFXLEVBQUUsQ0FBQztRQUVwQixZQUFNLEdBQVcsRUFBRSxDQUFDOztJQTZCaEMsQ0FBQzthQXBDb0IsSUFBSTtJQVNYLG9CQUFLLEdBQWY7UUFDSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFO1lBQ25CLEVBQUUsQ0FBQyxLQUFLLENBQUMsa0JBQU0sYUFBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDZDQUFZLENBQUMsQ0FBQztZQUN0RCxPQUFNO1NBQ1Q7UUFFRCx5QkFBVyxDQUFDLEVBQUUsQ0FBQyxNQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLEdBQUcsR0FBRyx3QkFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsV0FBVztRQUVyQyxLQUFLLElBQU0sR0FBRyxJQUFJLEdBQUcsRUFBRTtZQUNuQixJQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekIsSUFBSSxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7YUFDckI7U0FDSjtRQUVELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFHTywrQkFBZ0IsR0FBeEI7UUFDSSxJQUFJLEdBQUcsR0FBRyx3QkFBWSxDQUFDLGlCQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDOUQ7SUFDTCxDQUFDOztJQWpDTSxtQkFBYyxHQUFXLGdCQUFnQixDQUFDO0lBSWpEO1FBREMsUUFBUTt3Q0FDbUI7SUFMWCxJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBb0N4QjtJQUFELFdBQUM7Q0FwQ0QsQUFvQ0MsQ0FwQ2lDLEVBQUUsQ0FBQyxTQUFTLEdBb0M3QztrQkFwQ29CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYW5ndWFnZXNDZmcgfSBmcm9tIFwiLi4vLi4vLi4vLi4vcmVzL2kxOG4vTGFuZ3VhZ2VzXCI7XHJcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4vQ19Vc2VyXCI7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuaW1wb3J0IHsgRXZlbnRNYW5nZXIgfSBmcm9tIFwiLi4vLi4vLi4vMDBfYmFzZS9zY3JpcHQvY29tbW9uL0V2ZW50TWFuZ2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaTE4biBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgTGFuZ3VhZ2VDaGFuZ2U6IHN0cmluZyA9IFwiTGFuZ3VhZ2VDaGFuZ2VcIjtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwcml2YXRlIGxhblN0cjogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBwcml2YXRlIGxhbktleTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubGFuU3RyID09IFwiXCIpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoYOiKgueCuSAke1V0aWxzLkZpbmRQYXRoKHRoaXMubm9kZSl9IOeahOWkmuivreiogGtleeS4uuepumApO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEV2ZW50TWFuZ2VyLm9uKGkxOG4uTGFuZ3VhZ2VDaGFuZ2UsIHRoaXMub25DaGFuZ2VMYW5ndWFnZSwgdGhpcyk7XHJcbiAgICAgICAgbGV0IGNmZyA9IExhbmd1YWdlc0NmZ1swXTsvL+ino+aekOS4reaWhyzmib5rZXlcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY2ZnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjZmdba2V5XTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT0gdGhpcy5sYW5TdHIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFuS2V5ID0ga2V5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9uQ2hhbmdlTGFuZ3VhZ2UoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBvbkNoYW5nZUxhbmd1YWdlKCkge1xyXG4gICAgICAgIGxldCBjZmcgPSBMYW5ndWFnZXNDZmdbVXNlckluZm8ubGFuZ3VhZ2VdO1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUgJiYgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gY2ZnW3RoaXMubGFuS2V5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19