
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/01_hall/script/config/ViewManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXGNvbmZpZ1xcVmlld01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQStEO0FBRy9EO0lBQUE7SUFxSEEsQ0FBQztJQW5IRyxzQkFBa0Isa0JBQUc7YUFBckIsY0FBdUMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztTQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFFbkgsMEJBQUksR0FBWDtJQUVBLENBQUM7SUFFTSwwQkFBSSxHQUFYLFVBQVksSUFBWSxFQUFFLFdBQW1EO1FBQW5ELDRCQUFBLEVBQUEsY0FBc0IsMkJBQVksQ0FBQyxXQUFXLENBQUMsSUFBSTtRQUN6RSxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0IsSUFBSSxNQUFNLEdBQUcsMkJBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN4RCxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQVUsRUFBRSxNQUFpQjtnQkFDeEUsSUFBSSxHQUFHLEVBQUU7b0JBQ0wsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ3pCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEIsT0FBTztpQkFDVjtnQkFFRCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRWQsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxzQkFBc0Is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c291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBidW5kbGVMb2FkZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2NyaXB0L2J1bmRsZUxvYWRlclwiO1xyXG5pbXBvcnQgeyBWaWV3RW51bSwgV2lkZ2V0RW51bSB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5cclxuY2xhc3Mgdmlld01hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc2luZ2xlOiB2aWV3TWFuYWdlcjtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGlucygpOiB2aWV3TWFuYWdlciB7IGlmICh0aGlzLnNpbmdsZSA9PSBudWxsKSB7IHRoaXMuc2luZ2xlID0gbmV3IHZpZXdNYW5hZ2VyKCk7IH0gcmV0dXJuIHRoaXMuc2luZ2xlOyB9XHJcblxyXG4gICAgcHVibGljIGluaXQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBPcGVuKHZpZXc6IHN0cmluZywgYnVuZGxlSW5kZXg6IHN0cmluZyA9IGJ1bmRsZUxvYWRlci5FTlVNX0JVTkRMRS5IQUxMKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IGJ1bmRsZSA9IGJ1bmRsZUxvYWRlci5FTlVNX0JVTkRMRV9TQVZFW2J1bmRsZUluZGV4XTtcclxuICAgICAgICAgICAgYnVuZGxlLmxvYWQoJ3ByZWZhYi92aWV3LycgKyB2aWV3LCBjYy5QcmVmYWIsIChlcnI6IEVycm9yLCBwcmVmYWI6IGNjLlByZWZhYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKFwi5Yqg6L296aKE5Yi25L2T6ZSZ6K+vXCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNhbnZhcyA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5DYW52YXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjYW52YXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihcIuWcuuaZr+S4reaXoOazleaJvuWIsCBjYW52YXMg6IqC54K5LOaXoOazleaYvuekuuS7u+S9leeVjOmdolwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdmlldyA9IGNhbnZhcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidmlld1wiKTtcclxuICAgICAgICAgICAgICAgIGlmICh2aWV3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlldy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZDogY2MuTm9kZSkgPT4geyBjaGlsZC5kZXN0cm95KCk7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXcuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyBjYy5lcnJvcignaGFsbOWcuuaZr+S4jeWtmOWcqCB2aWV3IOeahOiKgueCuSzml6Dms5XmmL7npLrpooTliLbkvZMnKTsgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQWxlcnQodmlldzogc3RyaW5nICwgYnVuZGxlSW5kZXg6IHN0cmluZyA9IGJ1bmRsZUxvYWRlci5FTlVNX0JVTkRMRS5IQUxMKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmiZPlvIDnlYzpnaJcIiwgdmlldylcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYnVuZGxlID0gYnVuZGxlTG9hZGVyLkVOVU1fQlVORExFX1NBVkVbYnVuZGxlSW5kZXhdO1xyXG4gICAgICAgICAgICBidW5kbGUubG9hZCgncHJlZmFiL3dpZGdldC8nICsgdmlldywgY2MuUHJlZmFiLCAoZXJyOiBFcnJvciwgcHJlZmFiOiBjYy5QcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihcIuWKoOi9vemihOWItuS9k+mUmeivr1wiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcImVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjYW52YXMgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuQ2FudmFzKTtcclxuICAgICAgICAgICAgICAgIGlmICghY2FudmFzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoXCLlnLrmma/kuK3ml6Dms5Xmib7liLAgY2FudmFzIOiKgueCuSzml6Dms5XmmL7npLrku7vkvZXnlYzpnaJcIilcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHZpZXcgPSBjYW52YXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIndpZGdldFwiKTtcclxuICAgICAgICAgICAgICAgIGlmICh2aWV3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlldy5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoJ2hhbGzlnLrmma/kuI3lrZjlnKggdmlldyDnmoToioLngrks5peg5rOV5pi+56S66aKE5Yi25L2TJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUmVtb3ZlQWxsVmlldygpIHtcclxuICAgICAgICBsZXQgY2FudmFzID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkNhbnZhcyk7XHJcbiAgICAgICAgaWYgKCFjYW52YXMpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCLlnLrmma/kuK3ml6Dms5Xmib7liLAgY2FudmFzIOiKgueCuSzml6Dms5XmmL7npLrku7vkvZXnlYzpnaJcIilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHZpZXcgPSBjYW52YXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInZpZXdcIik7XHJcbiAgICAgICAgaWYgKHZpZXcpIHtcclxuICAgICAgICAgICAgdmlldy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZDogY2MuTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoJ2hhbGzlnLrmma/kuI3lrZjlnKggdmlldyDnmoToioLngrks5peg5rOV5pi+56S66aKE5Yi25L2TJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgd2lkZ2V0ID0gY2FudmFzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ3aWRnZXRcIik7XHJcbiAgICAgICAgaWYgKHdpZGdldCkge1xyXG4gICAgICAgICAgICB3aWRnZXQuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQ6IGNjLk5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoJ2hhbGzlnLrmma/kuI3lrZjlnKggdmlldyDnmoToioLngrks5peg5rOV5pi+56S66aKE5Yi25L2TJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBwdWJsaWMgUmVtb3ZlQWxlcnQoYWxlcnROYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgY2FudmFzID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkNhbnZhcyk7XHJcbiAgICAgICAgaWYgKCFjYW52YXMpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCLlnLrmma/kuK3ml6Dms5Xmib7liLAgY2FudmFzIOiKgueCuSzml6Dms5XmmL7npLrku7vkvZXnlYzpnaJcIilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHdpZGdldCA9IGNhbnZhcy5ub2RlLmdldENoaWxkQnlOYW1lKFwid2lkZ2V0XCIpO1xyXG4gICAgICAgIGlmICh3aWRnZXQpIHtcclxuICAgICAgICAgICAgd2lkZ2V0LmNoaWxkcmVuLmZvckVhY2goKGNoaWxkOiBjYy5Ob2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQubmFtZSA9PSBhbGVydE5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoJ2hhbGzlnLrmma/kuI3lrZjlnKggdmlldyDnmoToioLngrks5peg5rOV5pi+56S66aKE5Yi25L2TJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFZpZXdNYW5hZ2VyID0gdmlld01hbmFnZXIuaW5zOyJdfQ==