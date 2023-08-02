
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/02_game/script/timedown.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '47d68yXmEhA1oc1pj/Dh7PW', 'timedown');
// bundle/02_game/script/timedown.ts

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
var ComponentBase_1 = require("../../00_base/script/common/ComponentBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var timedown = /** @class */ (function (_super) {
    __extends(timedown, _super);
    function timedown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animNode = null;
        _this.animTime = null;
        _this.labTime = null;
        _this.isPlay = false;
        _this.maxTime = 0;
        _this.percentTime = 0;
        _this.timeSprite = null;
        _this.nowTime = 0;
        return _this;
    }
    timedown.prototype.start = function () {
    };
    timedown.prototype.playTime = function (time) {
        this.maxTime = this.nowTime = time;
        this.labTime.string = "" + time;
        this.timeSprite = this.node.getComponent(cc.Sprite);
        this.timeSprite.fillStart = 0.25;
        this.timeSprite.fillRange = 1;
        this.animNode.angle = 0;
        this.animTime.play();
        this.node.active = true;
        this.isPlay = true;
    };
    timedown.prototype.stopTime = function () {
        this.isPlay = false;
        this.node.active = false;
        this.animTime.stop();
    };
    timedown.prototype.update = function (dt) {
        if (!this.isPlay) {
            return;
        }
        this.nowTime -= dt;
        this.percentTime = this.nowTime / this.maxTime;
        if (this.nowTime < 0)
            this.stopTime();
        if (this.percentTime >= 0) {
            this.timeSprite.fillRange = this.percentTime;
            this.animNode.angle = this.percentTime * 360 - 360;
        }
        var tmpInt = Math.floor(this.nowTime);
        if (tmpInt >= 0) {
            if (this.labTime) {
                this.labTime.string = tmpInt.toString();
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], timedown.prototype, "animNode", void 0);
    __decorate([
        property(cc.Animation)
    ], timedown.prototype, "animTime", void 0);
    __decorate([
        property(cc.Label)
    ], timedown.prototype, "labTime", void 0);
    timedown = __decorate([
        ccclass
    ], timedown);
    return timedown;
}(ComponentBase_1.default));
exports.default = timedown;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMl9nYW1lXFxzY3JpcHRcXHRpbWVkb3duLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLDJFQUFzRTtBQUVoRSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBYTtJQUFuRDtRQUFBLHFFQXdFQztRQXJFVyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRzlCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFHekIsWUFBTSxHQUFZLEtBQUssQ0FBQTtRQUV2QixhQUFPLEdBQVcsQ0FBQyxDQUFBO1FBRW5CLGlCQUFXLEdBQVcsQ0FBQyxDQUFBO1FBRXZCLGdCQUFVLEdBQWMsSUFBSSxDQUFBO1FBMEI1QixhQUFPLEdBQVcsQ0FBQyxDQUFBOztJQTRCL0IsQ0FBQztJQXBEYSx3QkFBSyxHQUFmO0lBR0EsQ0FBQztJQUVELDJCQUFRLEdBQVIsVUFBUyxJQUFZO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQTtRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNuRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUE7UUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFBO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtJQUN0QixDQUFDO0lBR0QsMkJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ3hCLENBQUM7SUFNRCx5QkFBTSxHQUFOLFVBQU8sRUFBVTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2QsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUE7UUFFOUMsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUM7WUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7UUFFckMsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFBO1lBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQTtTQUNyRDtRQUVELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLElBQUksTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNiLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDM0M7U0FDSjtJQUVMLENBQUM7SUFuRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDZTtJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNlO0lBR3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ2M7SUFUaEIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXdFNUI7SUFBRCxlQUFDO0NBeEVELEFBd0VDLENBeEVxQyx1QkFBYSxHQXdFbEQ7a0JBeEVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gXCIuLi8uLi8wMF9iYXNlL3NjcmlwdC9jb21tb24vQ29tcG9uZW50QmFzZVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGltZWRvd24gZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgYW5pbU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcbiAgICBwcml2YXRlIGFuaW1UaW1lOiBjYy5BbmltYXRpb24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHByaXZhdGUgbGFiVGltZTogY2MuTGFiZWwgPSBudWxsO1xuXG5cbiAgICBwcml2YXRlIGlzUGxheTogYm9vbGVhbiA9IGZhbHNlXG5cbiAgICBwcml2YXRlIG1heFRpbWU6IG51bWJlciA9IDBcblxuICAgIHByaXZhdGUgcGVyY2VudFRpbWU6IG51bWJlciA9IDBcblxuICAgIHByaXZhdGUgdGltZVNwcml0ZTogY2MuU3ByaXRlID0gbnVsbFxuXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xuXG5cbiAgICB9XG5cbiAgICBwbGF5VGltZSh0aW1lOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5tYXhUaW1lID0gdGhpcy5ub3dUaW1lID0gdGltZVxuICAgICAgICB0aGlzLmxhYlRpbWUuc3RyaW5nID0gXCJcIiArIHRpbWVcbiAgICAgICAgdGhpcy50aW1lU3ByaXRlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpXG4gICAgICAgIHRoaXMudGltZVNwcml0ZS5maWxsU3RhcnQgPSAwLjI1XG4gICAgICAgIHRoaXMudGltZVNwcml0ZS5maWxsUmFuZ2UgPSAxXG4gICAgICAgIHRoaXMuYW5pbU5vZGUuYW5nbGUgPSAwXG4gICAgICAgIHRoaXMuYW5pbVRpbWUucGxheSgpXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlXG4gICAgICAgIHRoaXMuaXNQbGF5ID0gdHJ1ZVxuICAgIH1cblxuXG4gICAgc3RvcFRpbWUoKSB7XG4gICAgICAgIHRoaXMuaXNQbGF5ID0gZmFsc2VcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIHRoaXMuYW5pbVRpbWUuc3RvcCgpXG4gICAgfVxuICBcbiAgICBwcml2YXRlIG5vd1RpbWU6IG51bWJlciA9IDBcblxuXG5cbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgICAgICBpZiAoIXRoaXMuaXNQbGF5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vd1RpbWUgLT0gZHQ7XG4gICAgICAgIHRoaXMucGVyY2VudFRpbWUgPSB0aGlzLm5vd1RpbWUgLyB0aGlzLm1heFRpbWVcblxuICAgICAgICBpZiAodGhpcy5ub3dUaW1lIDwgMCkgdGhpcy5zdG9wVGltZSgpXG5cbiAgICAgICAgaWYgKHRoaXMucGVyY2VudFRpbWUgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy50aW1lU3ByaXRlLmZpbGxSYW5nZSA9IHRoaXMucGVyY2VudFRpbWVcbiAgICAgICAgICAgIHRoaXMuYW5pbU5vZGUuYW5nbGUgPSB0aGlzLnBlcmNlbnRUaW1lICogMzYwIC0gMzYwXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdG1wSW50ID0gTWF0aC5mbG9vcih0aGlzLm5vd1RpbWUpO1xuICAgICAgICBpZiAodG1wSW50ID49IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxhYlRpbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhYlRpbWUuc3RyaW5nID0gdG1wSW50LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuIl19