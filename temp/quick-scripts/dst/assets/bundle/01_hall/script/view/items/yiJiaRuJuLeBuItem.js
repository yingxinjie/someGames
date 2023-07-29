
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXHZpZXdcXGl0ZW1zXFx5aUppYVJ1SnVMZUJ1SXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUErQyxxQ0FBWTtJQUEzRDtRQUFBLHFFQStDQztRQUxXLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFHM0IsYUFBTyxHQUFhLElBQUksQ0FBQzs7SUFFckMsQ0FBQztJQTlDYSxpQ0FBSyxHQUFmO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVPLHdDQUFZLEdBQXBCO0lBRUEsQ0FBQztJQUdELCtCQUFHLEdBQUgsVUFBSSxJQUFTO1FBQ1QsSUFBSTtRQUNKLGVBQWU7UUFDZiwwQkFBMEI7UUFDMUIsbUNBQW1DO1FBQ25DLHNDQUFzQztRQUN0Qyw4QkFBOEI7UUFDOUIsdUNBQXVDO1FBQ3ZDLHdCQUF3QjtRQUN4Qix3QkFBd0I7UUFDeEIsMkJBQTJCO1FBQzNCLGdCQUFnQjtRQUNoQiwrQkFBK0I7UUFDL0Isd0JBQXdCO1FBQ3hCLHdCQUF3QjtRQUN4QiwyQkFBMkI7UUFDM0Isb0NBQW9DO1FBQ3BDLHVDQUF1QztRQUN2QyxzQkFBc0I7UUFDdEIsMEJBQTBCO1FBQzFCLHVDQUF1QztRQUN2QyxnREFBZ0Q7UUFDaEQsMkNBQTJDO1FBQzNDLDBCQUEwQjtRQUMxQixtREFBbUQ7UUFDbkQsTUFBTTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMzQyxDQUFDO0lBSUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt3REFDZ0I7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDYztJQTdDaEIsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0ErQ3JDO0lBQUQsd0JBQUM7Q0EvQ0QsQUErQ0MsQ0EvQzhDLEVBQUUsQ0FBQyxTQUFTLEdBK0MxRDtrQkEvQ29CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB5aUppYVJ1SnVMZUJ1SXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uT3Blbkp1TGVCdSwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbk9wZW5KdUxlQnUoKSB7XG5cbiAgICB9XG5cblxuICAgIHJ1bihpbmZvOiBhbnkpIHtcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgICAgXCJpZFwiOiAwLFxuICAgICAgICAvLyAgICAgXCJ6c0dhbWVVbmlvbklkXCI6IDAsXG4gICAgICAgIC8vICAgICBcInpzR2FtZVVuaW9uTmFtZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAvLyAgICAgXCJ6c0dhbWVVbmlvbkljb25QaWNcIjogXCJzdHJpbmdcIixcbiAgICAgICAgLy8gICAgIFwienNHYW1lQ2x1YkxldmVsSWRcIjogMCxcbiAgICAgICAgLy8gICAgIFwienNHYW1lQ2x1YkxldmVsTmFtZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAvLyAgICAgXCJuYW1lXCI6IFwic3RyaW5nXCIsXG4gICAgICAgIC8vICAgICBcImNvZGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgLy8gICAgIFwiaWNvblBpY1wiOiBcInN0cmluZ1wiLFxuICAgICAgICAvLyAgICAgXCJleHBcIjogMCxcbiAgICAgICAgLy8gICAgIFwiZGVzY3JpcHRpb25cIjogXCJzdHJpbmdcIixcbiAgICAgICAgLy8gICAgIFwiY29pblwiOiBcInN0cmluZ1wiLFxuICAgICAgICAvLyAgICAgXCJmdW5kXCI6IFwic3RyaW5nXCIsXG4gICAgICAgIC8vICAgICBcInpzR2FtZVBsYXllcklkXCI6IDAsXG4gICAgICAgIC8vICAgICBcInpzR2FtZVBsYXllck5hbWVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgLy8gICAgIFwiZGlzc29sdXRpb25EYXRlVGltZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAvLyAgICAgXCJzZWFyY2hcIjogdHJ1ZSxcbiAgICAgICAgLy8gICAgIFwiYWRtaW5TdGFydFwiOiB0cnVlLFxuICAgICAgICAvLyAgICAgXCJ0ZW1wb3Jhcnlac0dhbWVDbHViTGV2ZWxJZFwiOiAwLFxuICAgICAgICAvLyAgICAgXCJ0ZW1wb3Jhcnlac0dhbWVDbHViTGV2ZWxOYW1lXCI6IFwic3RyaW5nXCIsXG4gICAgICAgIC8vICAgICBcInRlbXBvcmFyeVZhbGlkaXR5UGVyaW9kXCI6IFwic3RyaW5nXCIsXG4gICAgICAgIC8vICAgICBcInN0YXR1c1wiOiBcIk5PUk1BTFwiLFxuICAgICAgICAvLyAgICAgXCJjcmVhdGVEYXRlVGltZVwiOiBcIjIwMjMtMDctMjNUMTI6MjU6MDEuOTczWlwiXG4gICAgICAgIC8vICAgfVxuICAgICAgICB0aGlzLm1pbmdDaGVuZy5zdHJpbmcgPSBpbmZvLm5hbWU7XG4gICAgICAgIHRoaXMubWlhb1NodS5zdHJpbmcgPSBpbmZvLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHByaXZhdGUgbWluZ0NoZW5nOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHJpdmF0ZSBtaWFvU2h1OiBjYy5MYWJlbCA9IG51bGw7XG5cbn1cbiJdfQ==