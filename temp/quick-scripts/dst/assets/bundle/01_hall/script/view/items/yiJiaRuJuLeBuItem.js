
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXHZpZXdcXGl0ZW1zXFx5aUppYVJ1SnVMZUJ1SXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUErQyxxQ0FBWTtJQUEzRDtRQUFBLHFFQStDQztRQUxXLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFHM0IsYUFBTyxHQUFhLElBQUksQ0FBQzs7SUFFckMsQ0FBQztJQTlDYSxpQ0FBSyxHQUFmO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVPLHdDQUFZLEdBQXBCO0lBRUEsQ0FBQztJQUdELCtCQUFHLEdBQUgsVUFBSSxJQUFTO1FBQ1QsSUFBSTtRQUNKLGVBQWU7UUFDZiwwQkFBMEI7UUFDMUIsbUNBQW1DO1FBQ25DLHNDQUFzQztRQUN0Qyw4QkFBOEI7UUFDOUIsdUNBQXVDO1FBQ3ZDLHdCQUF3QjtRQUN4Qix3QkFBd0I7UUFDeEIsMkJBQTJCO1FBQzNCLGdCQUFnQjtRQUNoQiwrQkFBK0I7UUFDL0Isd0JBQXdCO1FBQ3hCLHdCQUF3QjtRQUN4QiwyQkFBMkI7UUFDM0Isb0NBQW9DO1FBQ3BDLHVDQUF1QztRQUN2QyxzQkFBc0I7UUFDdEIsMEJBQTBCO1FBQzFCLHVDQUF1QztRQUN2QyxnREFBZ0Q7UUFDaEQsMkNBQTJDO1FBQzNDLDBCQUEwQjtRQUMxQixtREFBbUQ7UUFDbkQsTUFBTTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMzQyxDQUFDO0lBSUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt3REFDZ0I7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDYztJQTdDaEIsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0ErQ3JDO0lBQUQsd0JBQUM7Q0EvQ0QsQUErQ0MsQ0EvQzhDLEVBQUUsQ0FBQyxTQUFTLEdBK0MxRDtrQkEvQ29CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB5aUppYVJ1SnVMZUJ1SXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbk9wZW5KdUxlQnUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25PcGVuSnVMZUJ1KCkge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcnVuKGluZm86IGFueSkge1xyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgIC8vICAgICBcInpzR2FtZVVuaW9uSWRcIjogMCxcclxuICAgICAgICAvLyAgICAgXCJ6c0dhbWVVbmlvbk5hbWVcIjogXCJzdHJpbmdcIixcclxuICAgICAgICAvLyAgICAgXCJ6c0dhbWVVbmlvbkljb25QaWNcIjogXCJzdHJpbmdcIixcclxuICAgICAgICAvLyAgICAgXCJ6c0dhbWVDbHViTGV2ZWxJZFwiOiAwLFxyXG4gICAgICAgIC8vICAgICBcInpzR2FtZUNsdWJMZXZlbE5hbWVcIjogXCJzdHJpbmdcIixcclxuICAgICAgICAvLyAgICAgXCJuYW1lXCI6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgLy8gICAgIFwiY29kZVwiOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIC8vICAgICBcImljb25QaWNcIjogXCJzdHJpbmdcIixcclxuICAgICAgICAvLyAgICAgXCJleHBcIjogMCxcclxuICAgICAgICAvLyAgICAgXCJkZXNjcmlwdGlvblwiOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIC8vICAgICBcImNvaW5cIjogXCJzdHJpbmdcIixcclxuICAgICAgICAvLyAgICAgXCJmdW5kXCI6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgLy8gICAgIFwienNHYW1lUGxheWVySWRcIjogMCxcclxuICAgICAgICAvLyAgICAgXCJ6c0dhbWVQbGF5ZXJOYW1lXCI6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgLy8gICAgIFwiZGlzc29sdXRpb25EYXRlVGltZVwiOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIC8vICAgICBcInNlYXJjaFwiOiB0cnVlLFxyXG4gICAgICAgIC8vICAgICBcImFkbWluU3RhcnRcIjogdHJ1ZSxcclxuICAgICAgICAvLyAgICAgXCJ0ZW1wb3Jhcnlac0dhbWVDbHViTGV2ZWxJZFwiOiAwLFxyXG4gICAgICAgIC8vICAgICBcInRlbXBvcmFyeVpzR2FtZUNsdWJMZXZlbE5hbWVcIjogXCJzdHJpbmdcIixcclxuICAgICAgICAvLyAgICAgXCJ0ZW1wb3JhcnlWYWxpZGl0eVBlcmlvZFwiOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIC8vICAgICBcInN0YXR1c1wiOiBcIk5PUk1BTFwiLFxyXG4gICAgICAgIC8vICAgICBcImNyZWF0ZURhdGVUaW1lXCI6IFwiMjAyMy0wNy0yM1QxMjoyNTowMS45NzNaXCJcclxuICAgICAgICAvLyAgIH1cclxuICAgICAgICB0aGlzLm1pbmdDaGVuZy5zdHJpbmcgPSBpbmZvLm5hbWU7XHJcbiAgICAgICAgdGhpcy5taWFvU2h1LnN0cmluZyA9IGluZm8uZGVzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgbWluZ0NoZW5nOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBtaWFvU2h1OiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG59XHJcbiJdfQ==