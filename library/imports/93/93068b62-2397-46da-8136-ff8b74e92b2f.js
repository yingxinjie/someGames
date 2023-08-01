"use strict";
cc._RF.push(module, '93068tiI5dG2oE2/4t06Ssv', 'dzUtils');
// bundle/02_game/script/config/dzUtils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DzUtils = void 0;
var bundleLoader_1 = require("../../../../script/bundleLoader");
var dzUtils = /** @class */ (function () {
    function dzUtils() {
    }
    Object.defineProperty(dzUtils, "ins", {
        get: function () {
            if (this.sing == null) {
                this.sing = new dzUtils();
            }
            return this.sing;
        },
        enumerable: false,
        configurable: true
    });
    dzUtils.prototype.loadPrefab = function (url) {
        return new Promise(function (resolve, reject) {
            var bundle = bundleLoader_1.bundleLoader.ENUM_BUNDLE_SAVE[bundleLoader_1.bundleLoader.ENUM_BUNDLE.GAME];
            bundle.load('prefab/item/' + url, cc.Prefab, function (err, prefab) {
                if (err) {
                    cc.error("加载预制体错误", err);
                    reject("error");
                    return;
                }
                resolve(prefab);
            });
        });
    };
    dzUtils.prototype.loadPic = function (url, bundleIndex) {
        if (bundleIndex === void 0) { bundleIndex = bundleLoader_1.bundleLoader.ENUM_BUNDLE.GAME; }
        return new Promise(function (resolve, reject) {
            var bundle = bundleLoader_1.bundleLoader.ENUM_BUNDLE_SAVE[bundleIndex];
            bundle.load('prefab/img/' + url, cc.SpriteFrame, function (err, pic) {
                if (err) {
                    cc.error("加载图片错误", err);
                    reject("error");
                    return;
                }
                resolve(pic);
            });
        });
    };
    dzUtils.prototype.loadCardPic = function (url, bundleIndex) {
        if (bundleIndex === void 0) { bundleIndex = bundleLoader_1.bundleLoader.ENUM_BUNDLE.GAME; }
        return new Promise(function (resolve, reject) {
            var bundle = bundleLoader_1.bundleLoader.ENUM_BUNDLE_SAVE[bundleIndex];
            bundle.load('card/' + url, cc.SpriteFrame, function (err, pic) {
                if (err) {
                    cc.error("加载图片错误", err);
                    reject("error");
                    return;
                }
                resolve(pic);
            });
        });
    };
    dzUtils.sing = null;
    return dzUtils;
}());
exports.default = dzUtils;
exports.DzUtils = dzUtils.ins;

cc._RF.pop();