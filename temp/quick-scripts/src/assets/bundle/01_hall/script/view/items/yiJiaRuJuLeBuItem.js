"use strict";
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