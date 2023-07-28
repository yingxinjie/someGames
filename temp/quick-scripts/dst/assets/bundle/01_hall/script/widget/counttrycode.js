
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/01_hall/script/widget/counttrycode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2b272YxrLRLDLVlEu78E3TM', 'counttrycode');
// bundle/01_hall/script/widget/counttrycode.ts

Object.defineProperty(exports, "__esModule", { value: true });
var EventManger_1 = require("../../../00_base/script/common/EventManger");
var ComponentBase_1 = require("../../../00_base/script/common/ComponentBase");
var config_1 = require("../config/config");
var CountryCode_1 = require("../../../00_base/script/common/CountryCode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var countrycode = /** @class */ (function (_super) {
    __extends(countrycode, _super);
    function countrycode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maskNode = null;
        _this.itemNode = null;
        _this.itemContent = null;
        return _this;
    }
    countrycode.prototype.start = function () {
        var _this = this;
        this.TouchOn(this.maskNode, this.closeView);
        this.itemContent.removeAllChildren();
        var list = CountryCode_1.CountryCodeData;
        list.forEach(function (ele, idx) {
            var item = cc.instantiate(_this.itemNode);
            item.name = idx + "";
            item.active = true;
            item.x = 0;
            _this.itemContent.addChild(item);
            item.on(cc.Node.EventType.TOUCH_END, _this.selectCountry, _this);
            item.children[0].getComponent(cc.Label).string = "  " + ele.code + " - " + ele.zh;
        });
    };
    countrycode.prototype.closeView = function () {
        this.node.destroy();
        this.maskNode.off(cc.Node.EventType.TOUCH_START, this.closeView, this);
    };
    countrycode.prototype.selectCountry = function (evt) {
        if (!evt) {
            cc.error("事件不存在");
            return;
        }
        var node = evt.currentTarget;
        console.log(node.name);
        EventManger_1.EventManger.emit(config_1.EventName.SelectCountryCode, node.name);
        this.closeView();
    };
    __decorate([
        property(cc.Node)
    ], countrycode.prototype, "maskNode", void 0);
    __decorate([
        property(cc.Node)
    ], countrycode.prototype, "itemNode", void 0);
    __decorate([
        property(cc.Node)
    ], countrycode.prototype, "itemContent", void 0);
    countrycode = __decorate([
        ccclass
    ], countrycode);
    return countrycode;
}(ComponentBase_1.default));
exports.default = countrycode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXHdpZGdldFxcY291bnR0cnljb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwRUFBeUU7QUFDekUsOEVBQXlFO0FBQ3pFLDJDQUE2QztBQUM3QywwRUFBNkU7QUFFdkUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQWE7SUFBdEQ7UUFBQSxxRUE0Q0M7UUF6Q1csY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGlCQUFXLEdBQVksSUFBSSxDQUFBOztJQXFDdkMsQ0FBQztJQWxDYSwyQkFBSyxHQUFmO1FBQUEsaUJBY0M7UUFiRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTVDLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNyQyxJQUFJLElBQUksR0FBRyw2QkFBZSxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUF5RCxFQUFFLEdBQVc7WUFDaEYsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ1gsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsS0FBSSxDQUFDLGFBQWEsRUFBRSxLQUFJLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ3RGLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLCtCQUFTLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBR08sbUNBQWEsR0FBckIsVUFBc0IsR0FBZTtRQUNqQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ04sRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUNqQixPQUFPO1NBQ1Y7UUFFRCxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsYUFBbUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2Qix5QkFBVyxDQUFDLElBQUksQ0FBQyxrQkFBUyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQXZDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNlO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ2U7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDaUI7SUFQbEIsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQTRDL0I7SUFBRCxrQkFBQztDQTVDRCxBQTRDQyxDQTVDd0MsdUJBQWEsR0E0Q3JEO2tCQTVDb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50TWFuZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLzAwX2Jhc2Uvc2NyaXB0L2NvbW1vbi9FdmVudE1hbmdlclwiO1xuaW1wb3J0IENvbXBvbmVudEJhc2UgZnJvbSBcIi4uLy4uLy4uLzAwX2Jhc2Uvc2NyaXB0L2NvbW1vbi9Db21wb25lbnRCYXNlXCI7XG5pbXBvcnQgeyBFdmVudE5hbWUgfSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ1wiO1xuaW1wb3J0IHsgQ291bnRyeUNvZGVEYXRhIH0gZnJvbSBcIi4uLy4uLy4uLzAwX2Jhc2Uvc2NyaXB0L2NvbW1vbi9Db3VudHJ5Q29kZVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY291bnRyeWNvZGUgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgbWFza05vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgaXRlbU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgaXRlbUNvbnRlbnQ6IGNjLk5vZGUgPSBudWxsXG5cblxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5Ub3VjaE9uKHRoaXMubWFza05vZGUsIHRoaXMuY2xvc2VWaWV3KTtcblxuICAgICAgICB0aGlzLml0ZW1Db250ZW50LnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIGxldCBsaXN0ID0gQ291bnRyeUNvZGVEYXRhO1xuICAgICAgICBsaXN0LmZvckVhY2goKGVsZTogeyBpZDogbnVtYmVyLCBjb2RlOiBzdHJpbmcsIHpoOiBzdHJpbmcsIGVuOiBzdHJpbmcgfSwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtTm9kZSk7XG4gICAgICAgICAgICBpdGVtLm5hbWUgPSBpZHggKyBcIlwiO1xuICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgaXRlbS54ID0gMDtcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvbnRlbnQuYWRkQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICBpdGVtLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5zZWxlY3RDb3VudHJ5LCB0aGlzKTtcbiAgICAgICAgICAgIGl0ZW0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIiAgXCIgKyBlbGUuY29kZSArIFwiIC0gXCIgKyBlbGUuemg7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2xvc2VWaWV3KCkge1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLm1hc2tOb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5jbG9zZVZpZXcsIHRoaXMpO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBzZWxlY3RDb3VudHJ5KGV2dDogVG91Y2hFdmVudCkge1xuICAgICAgICBpZiAoIWV2dCkge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCLkuovku7bkuI3lrZjlnKhcIilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBub2RlID0gZXZ0LmN1cnJlbnRUYXJnZXQgYXMgdW5rbm93biBhcyBjYy5Ob2RlO1xuICAgICAgICBjb25zb2xlLmxvZyhub2RlLm5hbWUpO1xuICAgICAgICBFdmVudE1hbmdlci5lbWl0KEV2ZW50TmFtZS5TZWxlY3RDb3VudHJ5Q29kZSwgbm9kZS5uYW1lKTtcbiAgICAgICAgdGhpcy5jbG9zZVZpZXcoKTtcbiAgICB9XG5cbn1cbiJdfQ==