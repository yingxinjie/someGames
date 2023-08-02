
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/00_base/script/uiutils/tips.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49402NfInJBc476hYNtzM3c', 'tips');
// bundle/00_base/script/uiutils/tips.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tips = void 0;
var Tips = /** @class */ (function () {
    function Tips() {
    }
    /**
     *
     * @param txt 提示信息内容
     * @param dt 展示时间
     */
    Tips.Show = function (txt, dt) {
        if (dt === void 0) { dt = 0.8; }
        /** 最外层容器,没有大小 */
        var box = new cc.Node();
        //创建背景
        var bg = new cc.Node();
        var texture = new cc.Texture2D();
        var spriteFrame = new cc.SpriteFrame();
        texture.initWithData(new Uint8Array([0, 0, 0]), cc.Texture2D.PixelFormat.RGB888, 1, 1);
        spriteFrame.setTexture(texture);
        spriteFrame.setRect(cc.rect(0, 0, cc.winSize.width * 0.8, 60));
        var sp = bg.addComponent(cc.Sprite);
        sp.spriteFrame = spriteFrame;
        box.x = box.y = bg.x = bg.y = 0;
        bg.opacity = 100;
        box.addChild(bg);
        var lbNode = new cc.Node();
        lbNode.name = "Tips";
        lbNode.active = true;
        lbNode.opacity = 255;
        lbNode.x = lbNode.y = -5;
        var lab = lbNode.addComponent(cc.Label);
        lab.string = txt;
        lab.fontSize = 26;
        box.addChild(lbNode);
        var parent = cc.director.getScene().getComponentInChildren(cc.Canvas);
        parent.node.addChild(box);
        box.y = -300;
        box.x = 0;
        //从-300的位置向上移动到0位置
        cc.tween(box).to(dt, { y: 0 }).delay(0.5).call(function () {
            cc.Tween.stopAllByTarget(lbNode);
            box.removeFromParent();
        }).start();
    };
    return Tips;
}());
exports.Tips = Tips;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMF9iYXNlXFxzY3JpcHRcXHVpdXRpbHNcXHRpcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7SUFBQTtJQTRDQSxDQUFDO0lBM0NHOzs7O09BSUc7SUFDVyxTQUFJLEdBQWxCLFVBQW1CLEdBQVcsRUFBRSxFQUFnQjtRQUFoQixtQkFBQSxFQUFBLFFBQWdCO1FBQzVDLGlCQUFpQjtRQUNqQixJQUFJLEdBQUcsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqQyxNQUFNO1FBQ04sSUFBSSxFQUFFLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakMsSUFBSSxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0QsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsRUFBRSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDN0IsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsRUFBRSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDakIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVqQixJQUFJLE1BQU0sR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUNyQixNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNyQixNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNyQixNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDakIsR0FBRyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVyQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQixHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ2IsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFVixrQkFBa0I7UUFDbEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMzQyxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUVmLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0E1Q0EsQUE0Q0MsSUFBQTtBQTVDWSxvQkFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgY2xhc3MgVGlwcyB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHR4dCDmj5DnpLrkv6Hmga/lhoXlrrlcclxuICAgICAqIEBwYXJhbSBkdCDlsZXnpLrml7bpl7RcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBTaG93KHR4dDogc3RyaW5nLCBkdDogbnVtYmVyID0gMC44KSB7XHJcbiAgICAgICAgLyoqIOacgOWkluWxguWuueWZqCzmsqHmnInlpKflsI8gKi9cclxuICAgICAgICBsZXQgYm94OiBjYy5Ob2RlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICAvL+WIm+W7uuiDjOaZr1xyXG4gICAgICAgIGxldCBiZzogY2MuTm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgbGV0IHRleHR1cmUgPSBuZXcgY2MuVGV4dHVyZTJEKCk7XHJcbiAgICAgICAgbGV0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKCk7XHJcbiAgICAgICAgdGV4dHVyZS5pbml0V2l0aERhdGEobmV3IFVpbnQ4QXJyYXkoWzAsIDAsIDBdKSwgY2MuVGV4dHVyZTJELlBpeGVsRm9ybWF0LlJHQjg4OCwgMSwgMSk7XHJcbiAgICAgICAgc3ByaXRlRnJhbWUuc2V0VGV4dHVyZSh0ZXh0dXJlKTtcclxuICAgICAgICBzcHJpdGVGcmFtZS5zZXRSZWN0KGNjLnJlY3QoMCwgMCwgY2Mud2luU2l6ZS53aWR0aCAqIDAuOCwgNjApKTtcclxuICAgICAgICBsZXQgc3AgPSBiZy5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcC5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgIGJveC54ID0gYm94LnkgPSBiZy54ID0gYmcueSA9IDA7XHJcbiAgICAgICAgYmcub3BhY2l0eSA9IDEwMDtcclxuICAgICAgICBib3guYWRkQ2hpbGQoYmcpO1xyXG5cclxuICAgICAgICBsZXQgbGJOb2RlOiBjYy5Ob2RlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICBsYk5vZGUubmFtZSA9IFwiVGlwc1wiO1xyXG4gICAgICAgIGxiTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGxiTm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIGxiTm9kZS54ID0gbGJOb2RlLnkgPSAtNTtcclxuICAgICAgICBsZXQgbGFiID0gbGJOb2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgbGFiLnN0cmluZyA9IHR4dDtcclxuICAgICAgICBsYWIuZm9udFNpemUgPSAyNjtcclxuICAgICAgICBib3guYWRkQ2hpbGQobGJOb2RlKTtcclxuXHJcbiAgICAgICAgbGV0IHBhcmVudCA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5DYW52YXMpO1xyXG4gICAgICAgIHBhcmVudC5ub2RlLmFkZENoaWxkKGJveCk7XHJcbiAgICAgICAgYm94LnkgPSAtMzAwO1xyXG4gICAgICAgIGJveC54ID0gMDtcclxuXHJcbiAgICAgICAgLy/ku44tMzAw55qE5L2N572u5ZCR5LiK56e75Yqo5YiwMOS9jee9rlxyXG4gICAgICAgIGNjLnR3ZWVuKGJveCkudG8oZHQsIHsgeTogMCB9KS5kZWxheSgwLjUpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQobGJOb2RlKTtcclxuICAgICAgICAgICAgYm94LnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICB9KS5zdGFydCgpO1xyXG5cclxuICAgIH1cclxufSJdfQ==