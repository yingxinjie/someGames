import { bundleLoader } from "../../../../script/bundleLoader";

export default class dzUtils {

    private static sing: dzUtils = null

    public static get ins(): dzUtils {
        if (this.sing == null) {
            this.sing = new dzUtils();
        }
        return this.sing;
    }

    loadPrefab(url: string) {
        return new Promise((resolve, reject) => {
            let bundle = bundleLoader.ENUM_BUNDLE_SAVE[bundleLoader.ENUM_BUNDLE.GAME];
            bundle.load('prefab/item/' + url, cc.Prefab, (err: Error, prefab: cc.Prefab) => {
                if (err) {
                    cc.error("加载预制体错误", err);
                    reject("error");
                    return;
                }
                resolve(prefab);
            });
        });
    }


    loadPic(url: string, bundleIndex = bundleLoader.ENUM_BUNDLE.GAME) {
        return new Promise((resolve, reject) => {
            let bundle = bundleLoader.ENUM_BUNDLE_SAVE[bundleIndex];
            bundle.load('prefab/img/' + url, cc.SpriteFrame, (err: Error, pic: cc.SpriteFrame) => {
                if (err) {
                    cc.error("加载图片错误", err);
                    reject("error");
                    return;
                }
                resolve(pic);
            });
        });
    }


    loadCardPic(url: string, bundleIndex = bundleLoader.ENUM_BUNDLE.GAME)  {
        return new Promise<cc.SpriteFrame>((resolve, reject) => {
            let bundle = bundleLoader.ENUM_BUNDLE_SAVE[bundleIndex];
            bundle.load('card/' + url, cc.SpriteFrame, (err: Error, pic: cc.SpriteFrame) => {
                if (err) {
                    cc.error("加载图片错误", err);
                    reject("error");
                    return;
                }
                resolve(pic);
            });
        });
    }

}
export const DzUtils = dzUtils.ins;