
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/02_game/script/light.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4bc36etVLlN6aDkiXcves5d', 'light');
// bundle/02_game/script/light.ts

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
var UserInfo_1 = require("../../01_hall/script/config/UserInfo");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var light = /** @class */ (function (_super) {
    __extends(light, _super);
    function light() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.angleNumArr = [];
        _this.angleNums = [];
        return _this;
    }
    light.prototype.start = function () {
    };
    light.prototype.init = function (SeatLen) {
        if (SeatLen === void 0) { SeatLen = 9; }
        this.angleNums = UserInfo_1.UserInfo.lightPJson[SeatLen];
    };
    light.prototype.setAngle = function (clientSeat) {
        this.node.rotation = this.angleNums[clientSeat - 1];
    };
    __decorate([
        property([cc.String])
    ], light.prototype, "angleNumArr", void 0);
    light = __decorate([
        ccclass
    ], light);
    return light;
}(cc.Component));
exports.default = light;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMl9nYW1lXFxzY3JpcHRcXGxpZ2h0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR3RGLGlFQUFnRTtBQUcxRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQW1CQztRQWhCVyxpQkFBVyxHQUFhLEVBQUUsQ0FBQztRQUUzQixlQUFTLEdBQWEsRUFBRSxDQUFDOztJQWNyQyxDQUFDO0lBWmEscUJBQUssR0FBZjtJQUVBLENBQUM7SUFFRCxvQkFBSSxHQUFKLFVBQUssT0FBbUI7UUFBbkIsd0JBQUEsRUFBQSxXQUFtQjtRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLG1CQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ2pELENBQUM7SUFHRCx3QkFBUSxHQUFSLFVBQVMsVUFBa0I7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUE7SUFDdkQsQ0FBQztJQWZEO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzhDQUNhO0lBSGxCLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FtQnpCO0lBQUQsWUFBQztDQW5CRCxBQW1CQyxDQW5Ca0MsRUFBRSxDQUFDLFNBQVMsR0FtQjlDO2tCQW5Cb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7IHN0cmluZyB9IGZyb20gXCIuLi8uLi8uLi8uLi90b29scy9wYWNrYWdlcy9idW5kbGUtaG90dXBkYXRlL2pzemlwXCI7XHJcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4uLy4uLzAxX2hhbGwvc2NyaXB0L2NvbmZpZy9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgeyBEZXNrTWdyIH0gZnJvbSBcIi4vY29uZmlnL2Rlc2tNZ3JcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsaWdodCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5TdHJpbmddKVxyXG4gICAgcHJpdmF0ZSBhbmdsZU51bUFycjogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGFuZ2xlTnVtczogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoU2VhdExlbjogbnVtYmVyID0gOSkge1xyXG4gICAgICAgIHRoaXMuYW5nbGVOdW1zID0gVXNlckluZm8ubGlnaHRQSnNvbltTZWF0TGVuXVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXRBbmdsZShjbGllbnRTZWF0OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm5vZGUucm90YXRpb24gPSB0aGlzLmFuZ2xlTnVtc1tjbGllbnRTZWF0IC0gMV1cclxuICAgIH1cclxufVxyXG4iXX0=