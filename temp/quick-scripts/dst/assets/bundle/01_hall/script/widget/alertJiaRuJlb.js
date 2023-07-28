
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/01_hall/script/widget/alertJiaRuJlb.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'da3bd3TCMdJ1aNDsVVJ8bFV', 'alertJiaRuJlb');
// bundle/01_hall/script/widget/alertJiaRuJlb.ts

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
var bundleLoader_1 = require("../../../../script/bundleLoader");
var ComponentBase_1 = require("../../../00_base/script/common/ComponentBase");
var ViewManager_1 = require("../config/ViewManager");
var config_1 = require("../config/config");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var alertJiaRuJlb = /** @class */ (function (_super) {
    __extends(alertJiaRuJlb, _super);
    function alertJiaRuJlb() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        _this.jiaRuPaiJuBtn = null;
        _this.jiaRuJuLeBuBtn = null;
        return _this;
    }
    alertJiaRuJlb.prototype.start = function () {
        this.TouchOn(this.closeBtn, this.alertDestory);
        this.TouchOn(this.jiaRuPaiJuBtn, this.onClickJiaRuPaiJu);
        this.TouchOn(this.jiaRuJuLeBuBtn, this.onClickJiaRuJuLeBu);
    };
    alertJiaRuJlb.prototype.onClickJiaRuPaiJu = function () {
        ViewManager_1.ViewManager.RemoveAlert(config_1.WidgetEnum.BottomToggle);
        ViewManager_1.ViewManager.Open(config_1.ViewEnum.Game, bundleLoader_1.bundleLoader.ENUM_BUNDLE.GAME);
        this.node.destroy();
        ViewManager_1.ViewManager.Alert("alertInputYzm");
    };
    alertJiaRuJlb.prototype.onClickJiaRuJuLeBu = function () {
        this.node.destroy();
        ViewManager_1.ViewManager.Alert("julebuliebiao");
    };
    __decorate([
        property(cc.Node)
    ], alertJiaRuJlb.prototype, "closeBtn", void 0);
    __decorate([
        property(cc.Node)
    ], alertJiaRuJlb.prototype, "jiaRuPaiJuBtn", void 0);
    __decorate([
        property(cc.Node)
    ], alertJiaRuJlb.prototype, "jiaRuJuLeBuBtn", void 0);
    alertJiaRuJlb = __decorate([
        ccclass
    ], alertJiaRuJlb);
    return alertJiaRuJlb;
}(ComponentBase_1.default));
exports.default = alertJiaRuJlb;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXHdpZGdldFxcYWxlcnRKaWFSdUpsYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxnRUFBK0Q7QUFDL0QsOEVBQXlFO0FBQ3pFLHFEQUFvRDtBQUNwRCwyQ0FBd0Q7QUFFbEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkMsaUNBQWE7SUFBeEQ7UUFBQSxxRUE0QkM7UUExQlcsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixvQkFBYyxHQUFZLElBQUksQ0FBQzs7SUFxQjNDLENBQUM7SUFuQkcsNkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBQ3hELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtJQUM5RCxDQUFDO0lBRU8seUNBQWlCLEdBQXpCO1FBQ0kseUJBQVcsQ0FBQyxXQUFXLENBQUMsbUJBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUNoRCx5QkFBVyxDQUFDLElBQUksQ0FBQyxpQkFBUSxDQUFDLElBQUksRUFBQywyQkFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM3RCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BCLHlCQUFXLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTywwQ0FBa0IsR0FBMUI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BCLHlCQUFXLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUF2QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDZTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNvQjtJQUd0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNxQjtJQVB0QixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBNEJqQztJQUFELG9CQUFDO0NBNUJELEFBNEJDLENBNUIwQyx1QkFBYSxHQTRCdkQ7a0JBNUJvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBidW5kbGVMb2FkZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2NyaXB0L2J1bmRsZUxvYWRlclwiO1xuaW1wb3J0IENvbXBvbmVudEJhc2UgZnJvbSBcIi4uLy4uLy4uLzAwX2Jhc2Uvc2NyaXB0L2NvbW1vbi9Db21wb25lbnRCYXNlXCI7XG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCIuLi9jb25maWcvVmlld01hbmFnZXJcIjtcbmltcG9ydCB7IFZpZXdFbnVtLCBXaWRnZXRFbnVtIH0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWdcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGFsZXJ0SmlhUnVKbGIgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGNsb3NlQnRuOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGppYVJ1UGFpSnVCdG46IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBqaWFSdUp1TGVCdUJ0bjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5Ub3VjaE9uKHRoaXMuY2xvc2VCdG4sIHRoaXMuYWxlcnREZXN0b3J5KTtcbiAgICAgICAgdGhpcy5Ub3VjaE9uKHRoaXMuamlhUnVQYWlKdUJ0biwgdGhpcy5vbkNsaWNrSmlhUnVQYWlKdSlcbiAgICAgICAgdGhpcy5Ub3VjaE9uKHRoaXMuamlhUnVKdUxlQnVCdG4sIHRoaXMub25DbGlja0ppYVJ1SnVMZUJ1KVxuICAgIH1cblxuICAgIHByaXZhdGUgb25DbGlja0ppYVJ1UGFpSnUoKSB7XG4gICAgICAgIFZpZXdNYW5hZ2VyLlJlbW92ZUFsZXJ0KFdpZGdldEVudW0uQm90dG9tVG9nZ2xlKVxuICAgICAgICBWaWV3TWFuYWdlci5PcGVuKFZpZXdFbnVtLkdhbWUsYnVuZGxlTG9hZGVyLkVOVU1fQlVORExFLkdBTUUpXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIFZpZXdNYW5hZ2VyLkFsZXJ0KFwiYWxlcnRJbnB1dFl6bVwiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2xpY2tKaWFSdUp1TGVCdSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgVmlld01hbmFnZXIuQWxlcnQoXCJqdWxlYnVsaWViaWFvXCIpO1xuICAgIH1cblxuXG59XG4iXX0=