
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/01_hall/script/view/items/yiJiaRuJuLeBuItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '91fdbcX32lDeLcd0TFy7oEE', 'yiJiaRuJuLeBuItem');
// bundle/01_hall/script/view/items/yiJiaRuJuLeBuItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var yiJiaRuJuLeBuItem = /** @class */ (function (_super) {
    __extends(yiJiaRuJuLeBuItem, _super);
    function yiJiaRuJuLeBuItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mingCheng = null;
        _this.miaoShu = null;
        return _this;
    }
    yiJiaRuJuLeBuItem.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onOpenJuLeBu, this);
    };
    yiJiaRuJuLeBuItem.prototype.onOpenJuLeBu = function () {
    };
    yiJiaRuJuLeBuItem.prototype.run = function (info) {
        // {
        //     "id": 0,
        //     "zsGameUnionId": 0,
        //     "zsGameUnionName": "string",
        //     "zsGameUnionIconPic": "string",
        //     "zsGameClubLevelId": 0,
        //     "zsGameClubLevelName": "string",
        //     "name": "string",
        //     "code": "string",
        //     "iconPic": "string",
        //     "exp": 0,
        //     "description": "string",
        //     "coin": "string",
        //     "fund": "string",
        //     "zsGamePlayerId": 0,
        //     "zsGamePlayerName": "string",
        //     "dissolutionDateTime": "string",
        //     "search": true,
        //     "adminStart": true,
        //     "temporaryZsGameClubLevelId": 0,
        //     "temporaryZsGameClubLevelName": "string",
        //     "temporaryValidityPeriod": "string",
        //     "status": "NORMAL",
        //     "createDateTime": "2023-07-23T12:25:01.973Z"
        //   }
        this.mingCheng.string = info.name;
        this.miaoShu.string = info.description;
    };
    __decorate([
        property(cc.Label)
    ], yiJiaRuJuLeBuItem.prototype, "mingCheng", void 0);
    __decorate([
        property(cc.Label)
    ], yiJiaRuJuLeBuItem.prototype, "miaoShu", void 0);
    yiJiaRuJuLeBuItem = __decorate([
        ccclass
    ], yiJiaRuJuLeBuItem);
    return yiJiaRuJuLeBuItem;
}(cc.Component));
exports.default = yiJiaRuJuLeBuItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXHZpZXdcXGl0ZW1zXFx5aUppYVJ1SnVMZUJ1SXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUErQ0M7UUFMVyxlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRzNCLGFBQU8sR0FBYSxJQUFJLENBQUM7O0lBRXJDLENBQUM7SUE5Q2EsaUNBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFTyx3Q0FBWSxHQUFwQjtJQUVBLENBQUM7SUFHRCwrQkFBRyxHQUFILFVBQUksSUFBUztRQUNULElBQUk7UUFDSixlQUFlO1FBQ2YsMEJBQTBCO1FBQzFCLG1DQUFtQztRQUNuQyxzQ0FBc0M7UUFDdEMsOEJBQThCO1FBQzlCLHVDQUF1QztRQUN2Qyx3QkFBd0I7UUFDeEIsd0JBQXdCO1FBQ3hCLDJCQUEyQjtRQUMzQixnQkFBZ0I7UUFDaEIsK0JBQStCO1FBQy9CLHdCQUF3QjtRQUN4Qix3QkFBd0I7UUFDeEIsMkJBQTJCO1FBQzNCLG9DQUFvQztRQUNwQyx1Q0FBdUM7UUFDdkMsc0JBQXNCO1FBQ3RCLDBCQUEwQjtRQUMxQix1Q0FBdUM7UUFDdkMsZ0RBQWdEO1FBQ2hELDJDQUEyQztRQUMzQywwQkFBMEI7UUFDMUIsbURBQW1EO1FBQ25ELE1BQU07UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDM0MsQ0FBQztJQUlEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0RBQ2dCO0lBR25DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ2M7SUE3Q2hCLGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBK0NyQztJQUFELHdCQUFDO0NBL0NELEFBK0NDLENBL0M4QyxFQUFFLENBQUMsU0FBUyxHQStDMUQ7a0JBL0NvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgeWlKaWFSdUp1TGVCdUl0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbk9wZW5KdUxlQnUsIHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25PcGVuSnVMZUJ1KCkge1xuXG4gICAgfVxuXG5cbiAgICBydW4oaW5mbzogYW55KSB7XG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICAgIFwiaWRcIjogMCxcbiAgICAgICAgLy8gICAgIFwienNHYW1lVW5pb25JZFwiOiAwLFxuICAgICAgICAvLyAgICAgXCJ6c0dhbWVVbmlvbk5hbWVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgLy8gICAgIFwienNHYW1lVW5pb25JY29uUGljXCI6IFwic3RyaW5nXCIsXG4gICAgICAgIC8vICAgICBcInpzR2FtZUNsdWJMZXZlbElkXCI6IDAsXG4gICAgICAgIC8vICAgICBcInpzR2FtZUNsdWJMZXZlbE5hbWVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgLy8gICAgIFwibmFtZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAvLyAgICAgXCJjb2RlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgIC8vICAgICBcImljb25QaWNcIjogXCJzdHJpbmdcIixcbiAgICAgICAgLy8gICAgIFwiZXhwXCI6IDAsXG4gICAgICAgIC8vICAgICBcImRlc2NyaXB0aW9uXCI6IFwic3RyaW5nXCIsXG4gICAgICAgIC8vICAgICBcImNvaW5cIjogXCJzdHJpbmdcIixcbiAgICAgICAgLy8gICAgIFwiZnVuZFwiOiBcInN0cmluZ1wiLFxuICAgICAgICAvLyAgICAgXCJ6c0dhbWVQbGF5ZXJJZFwiOiAwLFxuICAgICAgICAvLyAgICAgXCJ6c0dhbWVQbGF5ZXJOYW1lXCI6IFwic3RyaW5nXCIsXG4gICAgICAgIC8vICAgICBcImRpc3NvbHV0aW9uRGF0ZVRpbWVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgLy8gICAgIFwic2VhcmNoXCI6IHRydWUsXG4gICAgICAgIC8vICAgICBcImFkbWluU3RhcnRcIjogdHJ1ZSxcbiAgICAgICAgLy8gICAgIFwidGVtcG9yYXJ5WnNHYW1lQ2x1YkxldmVsSWRcIjogMCxcbiAgICAgICAgLy8gICAgIFwidGVtcG9yYXJ5WnNHYW1lQ2x1YkxldmVsTmFtZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAvLyAgICAgXCJ0ZW1wb3JhcnlWYWxpZGl0eVBlcmlvZFwiOiBcInN0cmluZ1wiLFxuICAgICAgICAvLyAgICAgXCJzdGF0dXNcIjogXCJOT1JNQUxcIixcbiAgICAgICAgLy8gICAgIFwiY3JlYXRlRGF0ZVRpbWVcIjogXCIyMDIzLTA3LTIzVDEyOjI1OjAxLjk3M1pcIlxuICAgICAgICAvLyAgIH1cbiAgICAgICAgdGhpcy5taW5nQ2hlbmcuc3RyaW5nID0gaW5mby5uYW1lO1xuICAgICAgICB0aGlzLm1pYW9TaHUuc3RyaW5nID0gaW5mby5kZXNjcmlwdGlvbjtcbiAgICB9XG5cblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml2YXRlIG1pbmdDaGVuZzogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHByaXZhdGUgbWlhb1NodTogY2MuTGFiZWwgPSBudWxsO1xuXG59XG4iXX0=