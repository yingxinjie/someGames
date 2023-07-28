import { bundleLoader } from "./bundleLoader";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {


    @property()
    Is_debug: boolean = true

    start() {
        console.log("场景启动!");
        this.load();
    }

    async loadScene() {
        await bundleLoader.model.loadBundle(bundleLoader.ENUM_BUNDLE.BASE);
        await bundleLoader.model.loadBundle(bundleLoader.ENUM_BUNDLE.HALL);
        await bundleLoader.model.loadBundle(bundleLoader.ENUM_BUNDLE.GAME);
        cc.director.loadScene('hall');
    }

    async load() {
        try {
            let remoteManifest = await bundleLoader.model.getRemoteBundleVersion();
            if (remoteManifest != null) bundleLoader.model.manifest = remoteManifest;
            this.loadScene();
        } catch (error) {
            if (bundleLoader.model.manifest != null) {
                this.loadScene();
            } else {
                cc.error('加载场景错误, 5 秒后重试' + JSON.stringify(error));
                this.scheduleOnce(() => this.load(), 5);
            }
        }
    }
}
