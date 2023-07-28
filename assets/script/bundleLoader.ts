window["REMOTE_SERVER_ROOT"] = cc.assetManager.downloader.remoteServerAddress;
window["REMOTE_BUNDLE_MANIFEST"] = REMOTE_SERVER_ROOT + 'remote/manifest.json';

export namespace bundleLoader {
    export type TYPE_MANIFEST = { [key: string]: string }
    export enum ENUM_BUNDLE {
        BASE = '00_base',
        HALL = '01_hall',
        GAME = '02_game',
    }

    export const ENUM_BUNDLE_SAVE: { [key: string]: cc.AssetManager.Bundle } = {}

}

//注册持久存储
function regLocalStorage(storageKey: string) {
    return (target, propertyKey: string) => {
        Object.defineProperty(target, propertyKey, {
            get: function (): number {
                return cc.sys.localStorage.getItem(storageKey);
            },
            set: function (val: string) {
                if (val == null)
                    cc.sys.localStorage.removeItem(storageKey);
                else
                    cc.sys.localStorage.setItem(storageKey, val);
            },
        });
    }
}

export namespace bundleLoader {

    class _model {
        @regLocalStorage("BUNDLE_MANIFEST")
        storeManifest: string;

        get manifest(): TYPE_MANIFEST {
            if (this.storeManifest == null) return null;
            return JSON.parse(this.storeManifest);
        }
        set manifest(value: TYPE_MANIFEST) {
            if (value == null) this.storeManifest = null;
            else this.storeManifest = JSON.stringify(value);
        }

        //检查版本
        async checkBundleVersion() {
            if (CC_PREVIEW || !CC_JSB) return;
            cc.log(`Bundle版本检查开始`);
            let manifest = await this.getRemoteBundleVersion();
            if (manifest == null) return false;
            for (let bundleName in this.manifest) {
                if (this.manifest[bundleName] != manifest[bundleName]) {
                    if (cc.assetManager.getBundle(bundleName) != null) {
                        cc.log(`bundle 存在更新 名：${bundleName} 当前版本:${this.manifest[bundleName]} 远程版本:${manifest[bundleName]}`);
                        return true;
                    }
                }
            }
            cc.log(`Bundle版本检查完成`);
            return false;
        }

        //获取版本
        async getRemoteBundleVersion() {
            if (CC_PREVIEW || !CC_JSB) return;
            let manifest = await new Promise<TYPE_MANIFEST>((resolve, reject) => {
                cc.assetManager.downloader['downloadFile'](REMOTE_BUNDLE_MANIFEST, { responseType: 'json' }, null, (err, manifest: TYPE_MANIFEST) => {
                    if (err) {
                        cc.error('获取远程版本错误' + JSON.stringify(err));
                        resolve(null);
                        return;
                    }
                    resolve(manifest)
                });
            });
            return manifest;
        }

        async loadBundle(enumBundle: ENUM_BUNDLE) {
            return new Promise<cc.AssetManager.Bundle>((resolve, reject) => {
                let cb = (err, bundle: cc.AssetManager.Bundle) => {
                    if (err) {
                        cc.error('加载Bundle错误' + JSON.stringify(err));
                        reject(err);
                        return;
                    }

                    ENUM_BUNDLE_SAVE[enumBundle] = bundle;
                    console.log(`bundle包${enumBundle}加载完成`)
                    resolve(bundle);
                };

                if (CC_JSB && !CC_PREVIEW) {
                    if (this.manifest[enumBundle] == null) throw '远程版本不存在';
                    cc.assetManager.loadBundle(REMOTE_SERVER_ROOT + 'remote/' + enumBundle, { version: this.manifest[enumBundle] }, cb);
                }
                else {
                    cc.assetManager.loadBundle(enumBundle, cb);
                }
            });
        }


        async Bundle(enumBundle: ENUM_BUNDLE) {


        }
    }

    export const model = new _model();

}