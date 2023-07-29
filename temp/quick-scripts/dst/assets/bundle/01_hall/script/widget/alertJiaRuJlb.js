
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXHdpZGdldFxcYWxlcnRKaWFSdUpsYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxnRUFBK0Q7QUFDL0QsOEVBQXlFO0FBQ3pFLHFEQUFvRDtBQUNwRCwyQ0FBd0Q7QUFFbEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkMsaUNBQWE7SUFBeEQ7UUFBQSxxRUE0QkM7UUExQlcsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixvQkFBYyxHQUFZLElBQUksQ0FBQzs7SUFxQjNDLENBQUM7SUFuQkcsNkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBQ3hELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtJQUM5RCxDQUFDO0lBRU8seUNBQWlCLEdBQXpCO1FBQ0kseUJBQVcsQ0FBQyxXQUFXLENBQUMsbUJBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUNoRCx5QkFBVyxDQUFDLElBQUksQ0FBQyxpQkFBUSxDQUFDLElBQUksRUFBQywyQkFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM3RCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BCLHlCQUFXLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTywwQ0FBa0IsR0FBMUI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BCLHlCQUFXLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUF2QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDZTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNvQjtJQUd0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNxQjtJQVB0QixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBNEJqQztJQUFELG9CQUFDO0NBNUJELEFBNEJDLENBNUIwQyx1QkFBYSxHQTRCdkQ7a0JBNUJvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IGJ1bmRsZUxvYWRlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9zY3JpcHQvYnVuZGxlTG9hZGVyXCI7XHJcbmltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gXCIuLi8uLi8uLi8wMF9iYXNlL3NjcmlwdC9jb21tb24vQ29tcG9uZW50QmFzZVwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCIuLi9jb25maWcvVmlld01hbmFnZXJcIjtcclxuaW1wb3J0IHsgVmlld0VudW0sIFdpZGdldEVudW0gfSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGFsZXJ0SmlhUnVKbGIgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBjbG9zZUJ0bjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgamlhUnVQYWlKdUJ0bjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGppYVJ1SnVMZUJ1QnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLlRvdWNoT24odGhpcy5jbG9zZUJ0biwgdGhpcy5hbGVydERlc3RvcnkpO1xyXG4gICAgICAgIHRoaXMuVG91Y2hPbih0aGlzLmppYVJ1UGFpSnVCdG4sIHRoaXMub25DbGlja0ppYVJ1UGFpSnUpXHJcbiAgICAgICAgdGhpcy5Ub3VjaE9uKHRoaXMuamlhUnVKdUxlQnVCdG4sIHRoaXMub25DbGlja0ppYVJ1SnVMZUJ1KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DbGlja0ppYVJ1UGFpSnUoKSB7XHJcbiAgICAgICAgVmlld01hbmFnZXIuUmVtb3ZlQWxlcnQoV2lkZ2V0RW51bS5Cb3R0b21Ub2dnbGUpXHJcbiAgICAgICAgVmlld01hbmFnZXIuT3BlbihWaWV3RW51bS5HYW1lLGJ1bmRsZUxvYWRlci5FTlVNX0JVTkRMRS5HQU1FKVxyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgVmlld01hbmFnZXIuQWxlcnQoXCJhbGVydElucHV0WXptXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DbGlja0ppYVJ1SnVMZUJ1KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgVmlld01hbmFnZXIuQWxlcnQoXCJqdWxlYnVsaWViaWFvXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19