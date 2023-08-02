
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
    viewManager.prototype.Alert = function (view, cb, bundleIndex) {
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
                    cb && cb(node);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXGNvbmZpZ1xcVmlld01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQStEO0FBRy9EO0lBQUE7SUFpSEEsQ0FBQztJQS9HRyxzQkFBa0Isa0JBQUc7YUFBckIsY0FBdUMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztTQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFFbkgsMEJBQUksR0FBWDtJQUVBLENBQUM7SUFFTSwwQkFBSSxHQUFYLFVBQVksSUFBWSxFQUFFLFdBQW1EO1FBQW5ELDRCQUFBLEVBQUEsY0FBc0IsMkJBQVksQ0FBQyxXQUFXLENBQUMsSUFBSTtRQUN6RSxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0IsSUFBSSxNQUFNLEdBQUcsMkJBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN4RCxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQVUsRUFBRSxNQUFpQjtnQkFDeEUsSUFBSSxHQUFHLEVBQUU7b0JBQ0wsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ3pCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEIsT0FBTztpQkFDVjtnQkFFRCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRWQsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxzQkFBc0Is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O0FBRVksUUFBQSxXQUFXLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJ1bmRsZUxvYWRlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9zY3JpcHQvYnVuZGxlTG9hZGVyXCI7XHJcbmltcG9ydCB7IFZpZXdFbnVtLCBXaWRnZXRFbnVtIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcblxyXG5jbGFzcyB2aWV3TWFuYWdlciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBzaW5nbGU6IHZpZXdNYW5hZ2VyO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zKCk6IHZpZXdNYW5hZ2VyIHsgaWYgKHRoaXMuc2luZ2xlID09IG51bGwpIHsgdGhpcy5zaW5nbGUgPSBuZXcgdmlld01hbmFnZXIoKTsgfSByZXR1cm4gdGhpcy5zaW5nbGU7IH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIE9wZW4odmlldzogc3RyaW5nLCBidW5kbGVJbmRleDogc3RyaW5nID0gYnVuZGxlTG9hZGVyLkVOVU1fQlVORExFLkhBTEwpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYnVuZGxlID0gYnVuZGxlTG9hZGVyLkVOVU1fQlVORExFX1NBVkVbYnVuZGxlSW5kZXhdO1xyXG4gICAgICAgICAgICBidW5kbGUubG9hZCgncHJlZmFiL3ZpZXcvJyArIHZpZXcsIGNjLlByZWZhYiwgKGVycjogRXJyb3IsIHByZWZhYjogY2MuUHJlZmFiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoXCLliqDovb3pooTliLbkvZPplJnor69cIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY2FudmFzID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkNhbnZhcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNhbnZhcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKFwi5Zy65pmv5Lit5peg5rOV5om+5YiwIGNhbnZhcyDoioLngrks5peg5rOV5pi+56S65Lu75L2V55WM6Z2iXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB2aWV3ID0gY2FudmFzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWV3XCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZpZXcpIHtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3LmNoaWxkcmVuLmZvckVhY2goKGNoaWxkOiBjYy5Ob2RlKSA9PiB7IGNoaWxkLmRlc3Ryb3koKTsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlldy5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7IGNjLmVycm9yKCdoYWxs5Zy65pmv5LiN5a2Y5ZyoIHZpZXcg55qE6IqC54K5LOaXoOazleaYvuekuumihOWItuS9kycpOyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBBbGVydCh2aWV3OiBzdHJpbmcgLGNiPzogKG5vZGU6IGNjLk5vZGUpID0+IHZvaWQsIGJ1bmRsZUluZGV4OiBzdHJpbmcgPSBidW5kbGVMb2FkZXIuRU5VTV9CVU5ETEUuSEFMTCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5omT5byA55WM6Z2iXCIsIHZpZXcpXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IGJ1bmRsZSA9IGJ1bmRsZUxvYWRlci5FTlVNX0JVTkRMRV9TQVZFW2J1bmRsZUluZGV4XTtcclxuICAgICAgICAgICAgYnVuZGxlLmxvYWQoJ3ByZWZhYi93aWRnZXQvJyArIHZpZXcsIGNjLlByZWZhYiwgKGVycjogRXJyb3IsIHByZWZhYjogY2MuUHJlZmFiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoXCLliqDovb3pooTliLbkvZPplJnor69cIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY2FudmFzID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkNhbnZhcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNhbnZhcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKFwi5Zy65pmv5Lit5peg5rOV5om+5YiwIGNhbnZhcyDoioLngrks5peg5rOV5pi+56S65Lu75L2V55WM6Z2iXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB2aWV3ID0gY2FudmFzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ3aWRnZXRcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAodmlldykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXcuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2IgJiYgY2Iobm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKCdoYWxs5Zy65pmv5LiN5a2Y5ZyoIHZpZXcg55qE6IqC54K5LOaXoOazleaYvuekuumihOWItuS9kycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUmVtb3ZlQWxsVmlldygpIHtcclxuICAgICAgICBsZXQgY2FudmFzID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkNhbnZhcyk7XHJcbiAgICAgICAgaWYgKCFjYW52YXMpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCLlnLrmma/kuK3ml6Dms5Xmib7liLAgY2FudmFzIOiKgueCuSzml6Dms5XmmL7npLrku7vkvZXnlYzpnaJcIilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHZpZXcgPSBjYW52YXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInZpZXdcIik7XHJcbiAgICAgICAgaWYgKHZpZXcpIHtcclxuICAgICAgICAgICAgdmlldy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZDogY2MuTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoJ2hhbGzlnLrmma/kuI3lrZjlnKggdmlldyDnmoToioLngrks5peg5rOV5pi+56S66aKE5Yi25L2TJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgd2lkZ2V0ID0gY2FudmFzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ3aWRnZXRcIik7XHJcbiAgICAgICAgaWYgKHdpZGdldCkge1xyXG4gICAgICAgICAgICB3aWRnZXQuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQ6IGNjLk5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoJ2hhbGzlnLrmma/kuI3lrZjlnKggdmlldyDnmoToioLngrks5peg5rOV5pi+56S66aKE5Yi25L2TJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBSZW1vdmVBbGVydChhbGVydE5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuQ2FudmFzKTtcclxuICAgICAgICBpZiAoIWNhbnZhcykge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihcIuWcuuaZr+S4reaXoOazleaJvuWIsCBjYW52YXMg6IqC54K5LOaXoOazleaYvuekuuS7u+S9leeVjOmdolwiKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgd2lkZ2V0ID0gY2FudmFzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ3aWRnZXRcIik7XHJcbiAgICAgICAgaWYgKHdpZGdldCkge1xyXG4gICAgICAgICAgICB3aWRnZXQuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQ6IGNjLk5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5uYW1lID09IGFsZXJ0TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5lcnJvcignaGFsbOWcuuaZr+S4jeWtmOWcqCB2aWV3IOeahOiKgueCuSzml6Dms5XmmL7npLrpooTliLbkvZMnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVmlld01hbmFnZXIgPSB2aWV3TWFuYWdlci5pbnM7Il19