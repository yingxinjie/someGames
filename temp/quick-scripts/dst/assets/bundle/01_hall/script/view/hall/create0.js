
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/01_hall/script/view/hall/create0.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '357759g+tlCuYlPVU56I3zc', 'create0');
// bundle/01_hall/script/view/hall/create0.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var Message_1 = require("../../config/Message");
var C_Game_1 = require("../../game/C_Game");
var C_Hall_1 = require("../../hall/C_Hall");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var create0 = /** @class */ (function (_super) {
    __extends(create0, _super);
    function create0() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.backBtn = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    create0.prototype.start = function () {
        C_Hall_1.C_Hall.evt.on(Message_1.Message.gameList, this.gameList, this);
    };
    create0.prototype.gameList = function () {
        var _a;
        if (C_Game_1.C_Game.instance.gameArr && C_Game_1.C_Game.instance.gameArr.length > 0) {
            (_a = this._gameArr).push.apply(_a, C_Game_1.C_Game.instance.gameArr);
        }
    };
    create0.prototype.getGameList = function () {
        this._current = 0;
        this._gameArr = [];
        this.doGameList();
    };
    create0.prototype.doGameList = function () {
        C_Game_1.C_Game.instance.sendGameList(this._current);
        this._current++;
    };
    __decorate([
        property(cc.Node)
    ], create0.prototype, "backBtn", void 0);
    __decorate([
        property
    ], create0.prototype, "text", void 0);
    create0 = __decorate([
        ccclass
    ], create0);
    return create0;
}(cc.Component));
exports.default = create0;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXHZpZXdcXGhhbGxcXGNyZWF0ZTAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsZ0RBQStDO0FBQy9DLDRDQUFpRDtBQUNqRCw0Q0FBMkM7QUFFckMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUFtQ0M7UUFoQ0csYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixVQUFJLEdBQVcsT0FBTyxDQUFDOztRQTRCdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUEzQkcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix1QkFBSyxHQUFMO1FBQ0ksZUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsaUJBQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRU8sMEJBQVEsR0FBaEI7O1FBQ0ksSUFBRyxlQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBSSxlQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFDO1lBQzNELENBQUEsS0FBQSxJQUFJLENBQUMsUUFBUSxDQUFBLENBQUMsSUFBSSxXQUFJLGVBQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO1NBQ2xEO0lBQ0wsQ0FBQztJQUlPLDZCQUFXLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTyw0QkFBVSxHQUFsQjtRQUNJLGVBQU0sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQTlCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNNO0lBR3hCO1FBREMsUUFBUTt5Q0FDYztJQU5OLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FtQzNCO0lBQUQsY0FBQztDQW5DRCxBQW1DQyxDQW5Db0MsRUFBRSxDQUFDLFNBQVMsR0FtQ2hEO2tCQW5Db0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiLi4vLi4vY29uZmlnL01lc3NhZ2VcIjtcclxuaW1wb3J0IHsgQ19HYW1lLCBHYW1lIH0gZnJvbSBcIi4uLy4uL2dhbWUvQ19HYW1lXCI7XHJcbmltcG9ydCB7IENfSGFsbCB9IGZyb20gXCIuLi8uLi9oYWxsL0NfSGFsbFwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjcmVhdGUwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhY2tCdG46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgQ19IYWxsLmV2dC5vbihNZXNzYWdlLmdhbWVMaXN0LCB0aGlzLmdhbWVMaXN0LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdhbWVMaXN0KCl7XHJcbiAgICAgICAgaWYoQ19HYW1lLmluc3RhbmNlLmdhbWVBcnIgJiYgQ19HYW1lLmluc3RhbmNlLmdhbWVBcnIubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICB0aGlzLl9nYW1lQXJyLnB1c2goLi4uQ19HYW1lLmluc3RhbmNlLmdhbWVBcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jdXJyZW50Om51bWJlcjtcclxuICAgIHByaXZhdGUgX2dhbWVBcnI6R2FtZVtdO1xyXG4gICAgcHJpdmF0ZSBnZXRHYW1lTGlzdCgpe1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnQgPSAwO1xyXG4gICAgICAgIHRoaXMuX2dhbWVBcnIgPSBbXTtcclxuICAgICAgICB0aGlzLmRvR2FtZUxpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRvR2FtZUxpc3QoKXtcclxuICAgICAgICBDX0dhbWUuaW5zdGFuY2Uuc2VuZEdhbWVMaXN0KHRoaXMuX2N1cnJlbnQpO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnQrKztcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19