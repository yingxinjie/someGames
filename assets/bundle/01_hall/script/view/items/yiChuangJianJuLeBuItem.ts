
const { ccclass, property } = cc._decorator;

@ccclass
export default class yiChuangJianJuLeBuItem extends cc.Component {
    @property(cc.Label)
    private mingCheng: cc.Label = null;

    @property(cc.Label)
    private miaoShu: cc.Label = null;

    run(info: any) {
        this.mingCheng.string = info.name;
        this.miaoShu.string = info.description;
    }

}
