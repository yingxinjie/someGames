
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXHdpZGdldFxcY291bnR0cnljb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBFQUF5RTtBQUN6RSw4RUFBeUU7QUFDekUsMkNBQTZDO0FBQzdDLDBFQUE2RTtBQUV2RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBYTtJQUF0RDtRQUFBLHFFQTRDQztRQXpDVyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsaUJBQVcsR0FBWSxJQUFJLENBQUE7O0lBcUN2QyxDQUFDO0lBbENhLDJCQUFLLEdBQWY7UUFBQSxpQkFjQztRQWJHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3JDLElBQUksSUFBSSxHQUFHLDZCQUFlLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQXlELEVBQUUsR0FBVztZQUNoRixJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDWCxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxLQUFJLENBQUMsYUFBYSxFQUFFLEtBQUksQ0FBQyxDQUFDO1lBQy9ELElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDdEYsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sK0JBQVMsR0FBakI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFHTyxtQ0FBYSxHQUFyQixVQUFzQixHQUFlO1FBQ2pDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDTixFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ2pCLE9BQU87U0FDVjtRQUVELElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFtQyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLHlCQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFTLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBdkNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ2U7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDZTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNpQjtJQVBsQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBNEMvQjtJQUFELGtCQUFDO0NBNUNELEFBNENDLENBNUN3Qyx1QkFBYSxHQTRDckQ7a0JBNUNvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRNYW5nZXIgfSBmcm9tIFwiLi4vLi4vLi4vMDBfYmFzZS9zY3JpcHQvY29tbW9uL0V2ZW50TWFuZ2VyXCI7XG5pbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tIFwiLi4vLi4vLi4vMDBfYmFzZS9zY3JpcHQvY29tbW9uL0NvbXBvbmVudEJhc2VcIjtcbmltcG9ydCB7IEV2ZW50TmFtZSB9IGZyb20gXCIuLi9jb25maWcvY29uZmlnXCI7XG5pbXBvcnQgeyBDb3VudHJ5Q29kZURhdGEgfSBmcm9tIFwiLi4vLi4vLi4vMDBfYmFzZS9zY3JpcHQvY29tbW9uL0NvdW50cnlDb2RlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjb3VudHJ5Y29kZSBleHRlbmRzIENvbXBvbmVudEJhc2Uge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBtYXNrTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBpdGVtTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBpdGVtQ29udGVudDogY2MuTm9kZSA9IG51bGxcblxuXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLlRvdWNoT24odGhpcy5tYXNrTm9kZSwgdGhpcy5jbG9zZVZpZXcpO1xuXG4gICAgICAgIHRoaXMuaXRlbUNvbnRlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgbGV0IGxpc3QgPSBDb3VudHJ5Q29kZURhdGE7XG4gICAgICAgIGxpc3QuZm9yRWFjaCgoZWxlOiB7IGlkOiBudW1iZXIsIGNvZGU6IHN0cmluZywgemg6IHN0cmluZywgZW46IHN0cmluZyB9LCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1Ob2RlKTtcbiAgICAgICAgICAgIGl0ZW0ubmFtZSA9IGlkeCArIFwiXCI7XG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBpdGVtLnggPSAwO1xuICAgICAgICAgICAgdGhpcy5pdGVtQ29udGVudC5hZGRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgIGl0ZW0ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnNlbGVjdENvdW50cnksIHRoaXMpO1xuICAgICAgICAgICAgaXRlbS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiICBcIiArIGVsZS5jb2RlICsgXCIgLSBcIiArIGVsZS56aDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjbG9zZVZpZXcoKSB7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMubWFza05vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLmNsb3NlVmlldywgdGhpcyk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIHNlbGVjdENvdW50cnkoZXZ0OiBUb3VjaEV2ZW50KSB7XG4gICAgICAgIGlmICghZXZ0KSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIuS6i+S7tuS4jeWtmOWcqFwiKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5vZGUgPSBldnQuY3VycmVudFRhcmdldCBhcyB1bmtub3duIGFzIGNjLk5vZGU7XG4gICAgICAgIGNvbnNvbGUubG9nKG5vZGUubmFtZSk7XG4gICAgICAgIEV2ZW50TWFuZ2VyLmVtaXQoRXZlbnROYW1lLlNlbGVjdENvdW50cnlDb2RlLCBub2RlLm5hbWUpO1xuICAgICAgICB0aGlzLmNsb3NlVmlldygpO1xuICAgIH1cblxufVxuIl19