
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMF9iYXNlXFxzY3JpcHRcXHVpdXRpbHNcXHRpcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQUFBO0lBNENBLENBQUM7SUEzQ0c7Ozs7T0FJRztJQUNXLFNBQUksR0FBbEIsVUFBbUIsR0FBVyxFQUFFLEVBQWdCO1FBQWhCLG1CQUFBLEVBQUEsUUFBZ0I7UUFDNUMsaUJBQWlCO1FBQ2pCLElBQUksR0FBRyxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pDLE1BQU07UUFDTixJQUFJLEVBQUUsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQyxJQUFJLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkYsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxFQUFFLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUM3QixHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxFQUFFLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNqQixHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLElBQUksTUFBTSxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6QixJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNqQixHQUFHLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXJCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsc0JBQXNCLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDYixHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVWLGtCQUFrQjtRQUNsQixFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzNDLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRWYsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQTVDQSxBQTRDQyxJQUFBO0FBNUNZLG9CQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBjbGFzcyBUaXBzIHtcclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gdHh0IOaPkOekuuS/oeaBr+WGheWuuVxyXG4gICAgICogQHBhcmFtIGR0IOWxleekuuaXtumXtFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFNob3codHh0OiBzdHJpbmcsIGR0OiBudW1iZXIgPSAwLjgpIHtcclxuICAgICAgICAvKiog5pyA5aSW5bGC5a655ZmoLOayoeacieWkp+WwjyAqL1xyXG4gICAgICAgIGxldCBib3g6IGNjLk5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgIC8v5Yib5bu66IOM5pmvXHJcbiAgICAgICAgbGV0IGJnOiBjYy5Ob2RlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICBsZXQgdGV4dHVyZSA9IG5ldyBjYy5UZXh0dXJlMkQoKTtcclxuICAgICAgICBsZXQgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUoKTtcclxuICAgICAgICB0ZXh0dXJlLmluaXRXaXRoRGF0YShuZXcgVWludDhBcnJheShbMCwgMCwgMF0pLCBjYy5UZXh0dXJlMkQuUGl4ZWxGb3JtYXQuUkdCODg4LCAxLCAxKTtcclxuICAgICAgICBzcHJpdGVGcmFtZS5zZXRUZXh0dXJlKHRleHR1cmUpO1xyXG4gICAgICAgIHNwcml0ZUZyYW1lLnNldFJlY3QoY2MucmVjdCgwLCAwLCBjYy53aW5TaXplLndpZHRoICogMC44LCA2MCkpO1xyXG4gICAgICAgIGxldCBzcCA9IGJnLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgYm94LnggPSBib3gueSA9IGJnLnggPSBiZy55ID0gMDtcclxuICAgICAgICBiZy5vcGFjaXR5ID0gMTAwO1xyXG4gICAgICAgIGJveC5hZGRDaGlsZChiZyk7XHJcblxyXG4gICAgICAgIGxldCBsYk5vZGU6IGNjLk5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgIGxiTm9kZS5uYW1lID0gXCJUaXBzXCI7XHJcbiAgICAgICAgbGJOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgbGJOb2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgbGJOb2RlLnggPSBsYk5vZGUueSA9IC01O1xyXG4gICAgICAgIGxldCBsYWIgPSBsYk5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICBsYWIuc3RyaW5nID0gdHh0O1xyXG4gICAgICAgIGxhYi5mb250U2l6ZSA9IDI2O1xyXG4gICAgICAgIGJveC5hZGRDaGlsZChsYk5vZGUpO1xyXG5cclxuICAgICAgICBsZXQgcGFyZW50ID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkNhbnZhcyk7XHJcbiAgICAgICAgcGFyZW50Lm5vZGUuYWRkQ2hpbGQoYm94KTtcclxuICAgICAgICBib3gueSA9IC0zMDA7XHJcbiAgICAgICAgYm94LnggPSAwO1xyXG5cclxuICAgICAgICAvL+S7ji0zMDDnmoTkvY3nva7lkJHkuIrnp7vliqjliLAw5L2N572uXHJcbiAgICAgICAgY2MudHdlZW4oYm94KS50byhkdCwgeyB5OiAwIH0pLmRlbGF5KDAuNSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChsYk5vZGUpO1xyXG4gICAgICAgICAgICBib3gucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgIH0pLnN0YXJ0KCk7XHJcblxyXG4gICAgfVxyXG59Il19