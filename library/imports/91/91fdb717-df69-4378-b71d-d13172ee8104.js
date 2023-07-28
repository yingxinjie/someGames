"use strict";
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