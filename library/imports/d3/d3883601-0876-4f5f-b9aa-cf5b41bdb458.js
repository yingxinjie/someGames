"use strict";
cc._RF.push(module, 'd3883YBCHZPX7mqz1tBvbRY', 'ViewManager');
// bundle/01_hall/script/config/ViewManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewManager = void 0;
var bundleLoader_1 = require("../../../../script/bundleLoader");
var viewManager = /** @class */ (function () {
    function viewManager() {
    }
    Object.defineProperty(viewManager, "ins", {
        get: function () { if (this.single == null) {
            this.single = new viewManager();
        } return this.single; },
        enumerable: false,
        configurable: true
    });
    viewManager.prototype.init = function () {
    };
    viewManager.prototype.Open = function (view, bundleIndex) {
        if (bundleIndex === void 0) { bundleIndex = bundleLoader_1.bundleLoader.ENUM_BUNDLE.HALL; }
        return new Promise(function (resolve, reject) {
            var bundle = bundleLoader_1.bundleLoader.ENUM_BUNDLE_SAVE[bundleIndex];
            bundle.load('prefab/view/' + view, cc.Prefab, function (err, prefab) {
                if (err) {
                    cc.error("加载预制体错误", err);
                    reject("error");
                    return;
                }
                var node = cc.instantiate(prefab);
                resolve(node);
                var canvas = cc.director.getScene().getComponentInChildren(cc.Canvas);
                if (!canvas) {
                    cc.error("场景中无法找到 canvas 节点,无法显示任何界面");
                    return;
                }
                var view = canvas.node.getChildByName("view");
                if (view) {
                    view.children.forEach(function (child) { child.destroy(); });
                    view.addChild(node);
                }
                else {
                    cc.error('hall场景不存在 view 的节点,无法显示预制体');
                }
            });
        });
    };
    viewManager.prototype.Alert = function (view, bundleIndex) {
        if (bundleIndex === void 0) { bundleIndex = bundleLoader_1.bundleLoader.ENUM_BUNDLE.HALL; }
        console.log("打开界面", view);
        return new Promise(function (resolve, reject) {
            var bundle = bundleLoader_1.bundleLoader.ENUM_BUNDLE_SAVE[bundleIndex];
            bundle.load('prefab/widget/' + view, cc.Prefab, function (err, prefab) {
                if (err) {
                    cc.error("加载预制体错误", err);
                    reject("error");
                    return;
                }
                var node = cc.instantiate(prefab);
                resolve(node);
                var canvas = cc.director.getScene().getComponentInChildren(cc.Canvas);
                if (!canvas) {
                    cc.error("场景中无法找到 canvas 节点,无法显示任何界面");
                    return;
                }
                var view = canvas.node.getChildByName("widget");
                if (view) {
                    view.addChild(node);
                }
                else {
                    cc.error('hall场景不存在 view 的节点,无法显示预制体');
                }
            });
        });
    };
    viewManager.prototype.RemoveAllView = function () {
        var canvas = cc.director.getScene().getComponentInChildren(cc.Canvas);
        if (!canvas) {
            cc.error("场景中无法找到 canvas 节点,无法显示任何界面");
            return;
        }
        var view = canvas.node.getChildByName("view");
        if (view) {
            view.children.forEach(function (child) {
                child.destroy();
            });
        }
        else {
            cc.error('hall场景不存在 view 的节点,无法显示预制体');
        }
        var widget = canvas.node.getChildByName("widget");
        if (widget) {
            widget.children.forEach(function (child) {
                child.destroy();
            });
        }
        else {
            cc.error('hall场景不存在 view 的节点,无法显示预制体');
        }
    };
    viewManager.prototype.RemoveAlert = function (alertName) {
        var canvas = cc.director.getScene().getComponentInChildren(cc.Canvas);
        if (!canvas) {
            cc.error("场景中无法找到 canvas 节点,无法显示任何界面");
            return;
        }
        var widget = canvas.node.getChildByName("widget");
        if (widget) {
            widget.children.forEach(function (child) {
                if (child.name == alertName) {
                    child.destroy();
                }
            });
        }
        else {
            cc.error('hall场景不存在 view 的节点,无法显示预制体');
        }
    };
    return viewManager;
}());
exports.ViewManager = viewManager.ins;

cc._RF.pop();