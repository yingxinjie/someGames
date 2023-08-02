"use strict";
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