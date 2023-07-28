
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

Object.defineProperty(exports, "__esModule", { value: true });
var Languages_1 = require("../../../../res/i18n/Languages");
var UserInfo_1 = require("./UserInfo");
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
        var cfg = Languages_1.LanguagesCfg[UserInfo_1.UserInfo.language];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXGNvbmZpZ1xcaTE4bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQThEO0FBQzlELHVDQUFzQztBQUN0QyxpQ0FBZ0M7QUFDaEMsMEVBQXlFO0FBRW5FLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBb0NDO1FBL0JXLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFFcEIsWUFBTSxHQUFXLEVBQUUsQ0FBQzs7SUE2QmhDLENBQUM7YUFwQ29CLElBQUk7SUFTWCxvQkFBSyxHQUFmO1FBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRTtZQUNuQixFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFNLGFBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyw2Q0FBWSxDQUFDLENBQUM7WUFDdEQsT0FBTTtTQUNUO1FBRUQseUJBQVcsQ0FBQyxFQUFFLENBQUMsTUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBSSxHQUFHLEdBQUcsd0JBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLFdBQVc7UUFFckMsS0FBSyxJQUFNLEdBQUcsSUFBSSxHQUFHLEVBQUU7WUFDbkIsSUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO2FBQ3JCO1NBQ0o7UUFFRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBR08sK0JBQWdCLEdBQXhCO1FBQ0ksSUFBSSxHQUFHLEdBQUcsd0JBQVksQ0FBQyxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzlEO0lBQ0wsQ0FBQzs7SUFqQ00sbUJBQWMsR0FBVyxnQkFBZ0IsQ0FBQztJQUlqRDtRQURDLFFBQVE7d0NBQ21CO0lBTFgsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQW9DeEI7SUFBRCxXQUFDO0NBcENELEFBb0NDLENBcENpQyxFQUFFLENBQUMsU0FBUyxHQW9DN0M7a0JBcENvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGFuZ3VhZ2VzQ2ZnIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3Jlcy9pMThuL0xhbmd1YWdlc1wiO1xyXG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gXCIuL1VzZXJJbmZvXCI7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuaW1wb3J0IHsgRXZlbnRNYW5nZXIgfSBmcm9tIFwiLi4vLi4vLi4vMDBfYmFzZS9zY3JpcHQvY29tbW9uL0V2ZW50TWFuZ2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaTE4biBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgTGFuZ3VhZ2VDaGFuZ2U6IHN0cmluZyA9IFwiTGFuZ3VhZ2VDaGFuZ2VcIjtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwcml2YXRlIGxhblN0cjogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBwcml2YXRlIGxhbktleTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubGFuU3RyID09IFwiXCIpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoYOiKgueCuSAke1V0aWxzLkZpbmRQYXRoKHRoaXMubm9kZSl9IOeahOWkmuivreiogGtleeS4uuepumApO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEV2ZW50TWFuZ2VyLm9uKGkxOG4uTGFuZ3VhZ2VDaGFuZ2UsIHRoaXMub25DaGFuZ2VMYW5ndWFnZSwgdGhpcyk7XHJcbiAgICAgICAgbGV0IGNmZyA9IExhbmd1YWdlc0NmZ1swXTsvL+ino+aekOS4reaWhyzmib5rZXlcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY2ZnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjZmdba2V5XTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT0gdGhpcy5sYW5TdHIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFuS2V5ID0ga2V5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9uQ2hhbmdlTGFuZ3VhZ2UoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBvbkNoYW5nZUxhbmd1YWdlKCkge1xyXG4gICAgICAgIGxldCBjZmcgPSBMYW5ndWFnZXNDZmdbVXNlckluZm8ubGFuZ3VhZ2VdO1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUgJiYgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gY2ZnW3RoaXMubGFuS2V5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19