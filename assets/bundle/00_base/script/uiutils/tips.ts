
export class Tips {
    /**
     * 
     * @param txt 提示信息内容
     * @param dt 展示时间
     */
    public static Show(txt: string, dt: number = 0.8) {
        /** 最外层容器,没有大小 */
        let box: cc.Node = new cc.Node();
        //创建背景
        let bg: cc.Node = new cc.Node();
        let texture = new cc.Texture2D();
        let spriteFrame = new cc.SpriteFrame();
        texture.initWithData(new Uint8Array([0, 0, 0]), cc.Texture2D.PixelFormat.RGB888, 1, 1);
        spriteFrame.setTexture(texture);
        spriteFrame.setRect(cc.rect(0, 0, cc.winSize.width * 0.8, 60));
        let sp = bg.addComponent(cc.Sprite);
        sp.spriteFrame = spriteFrame;
        box.x = box.y = bg.x = bg.y = 0;
        bg.opacity = 100;
        box.addChild(bg);

        let lbNode: cc.Node = new cc.Node();
        lbNode.name = "Tips";
        lbNode.active = true;
        lbNode.opacity = 255;
        lbNode.x = lbNode.y = -5;
        let lab = lbNode.addComponent(cc.Label);
        lab.string = txt;
        lab.fontSize = 26;
        box.addChild(lbNode);

        let parent = cc.director.getScene().getComponentInChildren(cc.Canvas);
        parent.node.addChild(box);
        box.y = -300;
        box.x = 0;

        //从-300的位置向上移动到0位置
        cc.tween(box).to(dt, { y: 0 }).delay(0.5).call(() => {
            cc.Tween.stopAllByTarget(lbNode);
            box.removeFromParent();
        }).start();

    }
}