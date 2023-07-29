
import ComponentBase from "../../00_base/script/common/ComponentBase";
import light from "./light";

const { ccclass, property } = cc._decorator;

@ccclass
export default class game extends ComponentBase {

    @property(cc.Node)
    card: cc.Node = null;

    @property(light)
    light: light = null;

    @property(cc.Node)
    alert: cc.Node = null;

    @property(cc.Node)
    deskbet: cc.Node = null;

    @property(cc.Node)
    deskinfo: cc.Node = null;

    @property(cc.Node)
    headItem: cc.Node = null;

    @property(cc.Node)
    myOperate: cc.Node = null;

    @property(cc.Node)
    seats: cc.Node[] = [];

    @property(cc.Node)
    choumas: cc.Node[] = [];
}
