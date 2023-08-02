import { bundleLoader } from "../../../../script/bundleLoader";
import { ViewEnum, WidgetEnum } from "./config";

class viewManager {
    private static single: viewManager;
    public static get ins(): viewManager { if (this.single == null) { this.single = new viewManager(); } return this.single; }

    public init() {

    }

    public Open(view: string, bundleIndex: string = bundleLoader.ENUM_BUNDLE.HALL) {
        return new Promise((resolve, reject) => {
            let bundle = bundleLoader.ENUM_BUNDLE_SAVE[bundleIndex];
            bundle.load('prefab/view/' + view, cc.Prefab, (err: Error, prefab: cc.Prefab) => {
                if (err) {
                    cc.error("加载预制体错误", err);
                    reject("error");
                    return;
                }

                let node = cc.instantiate(prefab);
                resolve(node);

                let canvas = cc.director.getScene().getComponentInChildren(cc.Canvas);
                if (!canvas) {
                    cc.error("场景中无法找到 canvas 节点,无法显示任何界面")
                    return;
                }

                let view = canvas.node.getChildByName("view");
                if (view) {
                    view.children.forEach((child: cc.Node) => { child.destroy(); });
                    view.addChild(node);
                } else { cc.error('hall场景不存在 view 的节点,无法显示预制体'); }
            });
        });
    }

    public Alert(view: string ,cb?: (node: cc.Node) => void, bundleIndex: string = bundleLoader.ENUM_BUNDLE.HALL) {
        console.log("打开界面", view)
        return new Promise((resolve, reject) => {
            let bundle = bundleLoader.ENUM_BUNDLE_SAVE[bundleIndex];
            bundle.load('prefab/widget/' + view, cc.Prefab, (err: Error, prefab: cc.Prefab) => {
                if (err) {
                    cc.error("加载预制体错误", err);
                    reject("error");
                    return;
                }

                let node = cc.instantiate(prefab);
                resolve(node);

                let canvas = cc.director.getScene().getComponentInChildren(cc.Canvas);
                if (!canvas) {
                    cc.error("场景中无法找到 canvas 节点,无法显示任何界面")
                    return;
                }

                let view = canvas.node.getChildByName("widget");
                if (view) {
                    view.addChild(node);
                    cb && cb(node);
                } else {
                    cc.error('hall场景不存在 view 的节点,无法显示预制体');
                }
            });
        });
    }

    public RemoveAllView() {
        let canvas = cc.director.getScene().getComponentInChildren(cc.Canvas);
        if (!canvas) {
            cc.error("场景中无法找到 canvas 节点,无法显示任何界面")
            return;
        }

        let view = canvas.node.getChildByName("view");
        if (view) {
            view.children.forEach((child: cc.Node) => {
                child.destroy();
            });

        } else {
            cc.error('hall场景不存在 view 的节点,无法显示预制体');
        }

        let widget = canvas.node.getChildByName("widget");
        if (widget) {
            widget.children.forEach((child: cc.Node) => {
                child.destroy();
            });
        } else {
            cc.error('hall场景不存在 view 的节点,无法显示预制体');
        }
    }

    public RemoveAlert(alertName: string) {
        let canvas = cc.director.getScene().getComponentInChildren(cc.Canvas);
        if (!canvas) {
            cc.error("场景中无法找到 canvas 节点,无法显示任何界面")
            return;
        }

        let widget = canvas.node.getChildByName("widget");
        if (widget) {
            widget.children.forEach((child: cc.Node) => {
                if (child.name == alertName) {
                    child.destroy()
                }
            });
        } else {
            cc.error('hall场景不存在 view 的节点,无法显示预制体');
        }
    }

}

export const ViewManager = viewManager.ins;