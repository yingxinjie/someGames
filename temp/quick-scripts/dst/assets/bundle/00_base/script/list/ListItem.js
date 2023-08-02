
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/00_base/script/list/ListItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '97a6aWcyaxCNpV9mTLJK4ue', 'ListItem');
// bundle/00_base/script/list/ListItem.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/******************************************
 * @author kL <klk0@qq.com>
 * @date 2019/6/6
 * @doc 列表Item组件.
 * 说明：
 *      1、此组件须配合List组件使用。（配套的配套的..）
 * @end
 ******************************************/
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, disallowMultiple = _a.disallowMultiple, menu = _a.menu, executionOrder = _a.executionOrder;
var SelectedType;
(function (SelectedType) {
    SelectedType[SelectedType["NONE"] = 0] = "NONE";
    SelectedType[SelectedType["TOGGLE"] = 1] = "TOGGLE";
    SelectedType[SelectedType["SWITCH"] = 2] = "SWITCH";
})(SelectedType || (SelectedType = {}));
var ListItem = /** @class */ (function (_super) {
    __extends(ListItem, _super);
    function ListItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //图标
        _this.icon = null;
        //标题
        _this.title = null;
        //选择模式
        _this.selectedMode = SelectedType.NONE;
        //被选标志
        _this.selectedFlag = null;
        //被选择的SpriteFrame
        _this.selectedSpriteFrame = null;
        //未被选择的SpriteFrame
        _this._unselectedSpriteFrame = null;
        //自适应尺寸
        _this.adaptiveSize = false;
        //选择
        _this._selected = false;
        //是否已经注册过事件
        _this._eventReg = false;
        return _this;
    }
    Object.defineProperty(ListItem.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (val) {
            this._selected = val;
            if (!this.selectedFlag)
                return;
            switch (this.selectedMode) {
                case SelectedType.TOGGLE:
                    this.selectedFlag.active = val;
                    break;
                case SelectedType.SWITCH:
                    var sp = this.selectedFlag.getComponent(cc.Sprite);
                    if (sp) {
                        sp.spriteFrame = val ? this.selectedSpriteFrame : this._unselectedSpriteFrame;
                    }
                    break;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItem.prototype, "btnCom", {
        get: function () {
            if (!this._btnCom)
                this._btnCom = this.node.getComponent(cc.Button);
            return this._btnCom;
        },
        enumerable: false,
        configurable: true
    });
    ListItem.prototype.onLoad = function () {
        // //没有按钮组件的话，selectedFlag无效
        // if (!this.btnCom)
        //     this.selectedMode == SelectedType.NONE;
        //有选择模式时，保存相应的东西
        if (this.selectedMode == SelectedType.SWITCH) {
            var com = this.selectedFlag.getComponent(cc.Sprite);
            this._unselectedSpriteFrame = com.spriteFrame;
        }
    };
    ListItem.prototype.onDestroy = function () {
        this.node.off(cc.Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
    };
    ListItem.prototype._registerEvent = function () {
        if (!this._eventReg) {
            if (this.btnCom && this.list.selectedMode > 0) {
                this.btnCom.clickEvents.unshift(this.createEvt(this, 'onClickThis'));
            }
            if (this.adaptiveSize) {
                this.node.on(cc.Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
            }
            this._eventReg = true;
        }
    };
    ListItem.prototype._onSizeChange = function () {
        this.list._onItemAdaptive(this.node);
    };
    /**
     * 创建事件
     * @param {cc.Component} component 组件脚本
     * @param {string} handlerName 触发函数名称
     * @param {cc.Node} node 组件所在node（不传的情况下取component.node）
     * @returns cc.Component.EventHandler
     */
    ListItem.prototype.createEvt = function (component, handlerName, node) {
        if (node === void 0) { node = null; }
        if (!component.isValid)
            return; //有些异步加载的，节点以及销毁了。
        component['comName'] = component['comName'] || component.name.match(/\<(.*?)\>/g).pop().replace(/\<|>/g, '');
        var evt = new cc.Component.EventHandler();
        evt.target = node || component.node;
        evt.component = component['comName'];
        evt.handler = handlerName;
        return evt;
    };
    ListItem.prototype.showAni = function (aniType, callFunc, del) {
        var t = this;
        var tween;
        switch (aniType) {
            case 0: //向上消失
                tween = cc.tween(t.node)
                    .to(.2, { scale: .7 })
                    .by(.3, { y: t.node.height * 2 });
                break;
            case 1: //向右消失
                tween = cc.tween(t.node)
                    .to(.2, { scale: .7 })
                    .by(.3, { x: t.node.width * 2 });
                break;
            case 2: //向下消失
                tween = cc.tween(t.node)
                    .to(.2, { scale: .7 })
                    .by(.3, { y: t.node.height * -2 });
                break;
            case 3: //向左消失
                tween = cc.tween(t.node)
                    .to(.2, { scale: .7 })
                    .by(.3, { x: t.node.width * -2 });
                break;
            default: //默认：缩小消失
                tween = cc.tween(t.node)
                    .to(.3, { scale: .1 });
                break;
        }
        if (callFunc || del) {
            tween.call(function () {
                if (del) {
                    t.list._delSingleItem(t.node);
                    for (var n = t.list.displayData.length - 1; n >= 0; n--) {
                        if (t.list.displayData[n].id == t.listId) {
                            t.list.displayData.splice(n, 1);
                            break;
                        }
                    }
                }
                callFunc();
            });
        }
        tween.start();
    };
    ListItem.prototype.onClickThis = function () {
        this.list.selectedId = this.listId;
    };
    __decorate([
        property({ type: cc.Sprite, tooltip: CC_DEV && '图标' })
    ], ListItem.prototype, "icon", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: CC_DEV && '标题' })
    ], ListItem.prototype, "title", void 0);
    __decorate([
        property({
            type: cc.Enum(SelectedType),
            tooltip: CC_DEV && '选择模式'
        })
    ], ListItem.prototype, "selectedMode", void 0);
    __decorate([
        property({
            type: cc.Node, tooltip: CC_DEV && '被选标识',
            visible: function () { return this.selectedMode > SelectedType.NONE; }
        })
    ], ListItem.prototype, "selectedFlag", void 0);
    __decorate([
        property({
            type: cc.SpriteFrame, tooltip: CC_DEV && '被选择的SpriteFrame',
            visible: function () { return this.selectedMode == SelectedType.SWITCH; }
        })
    ], ListItem.prototype, "selectedSpriteFrame", void 0);
    __decorate([
        property({
            tooltip: CC_DEV && '自适应尺寸（宽或高）',
        })
    ], ListItem.prototype, "adaptiveSize", void 0);
    ListItem = __decorate([
        ccclass,
        disallowMultiple(),
        menu('自定义组件/List Item'),
        executionOrder(-5001) //先于List
    ], ListItem);
    return ListItem;
}(cc.Component));
exports.default = ListItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMF9iYXNlXFxzY3JpcHRcXGxpc3RcXExpc3RJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OzRDQU80QztBQUN0QyxJQUFBLEtBQWdFLEVBQUUsQ0FBQyxVQUFVLEVBQTNFLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGdCQUFnQixzQkFBQSxFQUFFLElBQUksVUFBQSxFQUFFLGNBQWMsb0JBQWtCLENBQUM7QUFJcEYsSUFBSyxZQUlKO0FBSkQsV0FBSyxZQUFZO0lBQ2IsK0NBQVEsQ0FBQTtJQUNSLG1EQUFVLENBQUE7SUFDVixtREFBVSxDQUFBO0FBQ2QsQ0FBQyxFQUpJLFlBQVksS0FBWixZQUFZLFFBSWhCO0FBTUQ7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFxS0M7UUFwS0csSUFBSTtRQUVKLFVBQUksR0FBYyxJQUFJLENBQUM7UUFDdkIsSUFBSTtRQUVKLFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsTUFBTTtRQUtOLGtCQUFZLEdBQWlCLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFDL0MsTUFBTTtRQUtOLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLGlCQUFpQjtRQUtqQix5QkFBbUIsR0FBbUIsSUFBSSxDQUFDO1FBQzNDLGtCQUFrQjtRQUNsQiw0QkFBc0IsR0FBbUIsSUFBSSxDQUFDO1FBQzlDLE9BQU87UUFJUCxrQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixJQUFJO1FBQ0osZUFBUyxHQUFZLEtBQUssQ0FBQztRQTZCM0IsV0FBVztRQUNILGVBQVMsR0FBRyxLQUFLLENBQUM7O0lBc0c5QixDQUFDO0lBbklHLHNCQUFJLDhCQUFRO2FBZ0JaO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFsQkQsVUFBYSxHQUFZO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxD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LElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQSxDQUFDLENBQUM7U0FDaEUsQ0FBQzt5REFDeUM7SUFPM0M7UUFIQyxRQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsTUFBTSxJQUFJLFlBQVk7U0FDbEMsQ0FBQztrREFDNEI7SUEvQmIsUUFBUTtRQUo1QixPQUFPO1FBQ1AsZ0JBQWdCLEVBQUU7UUFDbEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ3ZCLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFVLFFBQVE7T0FDbkIsUUFBUSxDQXFLNUI7SUFBRCxlQUFDO0NBcktELEFBcUtDLENBcktxQyxFQUFFLENBQUMsU0FBUyxHQXFLakQ7a0JBcktvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBAYXV0aG9yIGtMIDxrbGswQHFxLmNvbT5cclxuICogQGRhdGUgMjAxOS82LzZcclxuICogQGRvYyDliJfooahJdGVt57uE5Lu2LlxyXG4gKiDor7TmmI7vvJpcclxuICogICAgICAx44CB5q2k57uE5Lu26aG76YWN5ZCITGlzdOe7hOS7tuS9v+eUqOOAgu+8iOmFjeWll+eahOmFjeWll+eahC4u77yJXHJcbiAqIEBlbmRcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZGlzYWxsb3dNdWx0aXBsZSwgbWVudSwgZXhlY3V0aW9uT3JkZXIgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5pbXBvcnQgTGlzdCBmcm9tICcuL0xpc3QnO1xyXG5cclxuZW51bSBTZWxlY3RlZFR5cGUge1xyXG4gICAgTk9ORSA9IDAsXHJcbiAgICBUT0dHTEUgPSAxLFxyXG4gICAgU1dJVENIID0gMixcclxufVxyXG5cclxuQGNjY2xhc3NcclxuQGRpc2FsbG93TXVsdGlwbGUoKVxyXG5AbWVudSgn6Ieq5a6a5LmJ57uE5Lu2L0xpc3QgSXRlbScpXHJcbkBleGVjdXRpb25PcmRlcigtNTAwMSkgICAgICAgICAgLy/lhYjkuo5MaXN0XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RJdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIC8v5Zu+5qCHXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5TcHJpdGUsIHRvb2x0aXA6IENDX0RFViAmJiAn5Zu+5qCHJyB9KVxyXG4gICAgaWNvbjogY2MuU3ByaXRlID0gbnVsbDtcclxuICAgIC8v5qCH6aKYXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiBDQ19ERVYgJiYgJ+agh+mimCcgfSlcclxuICAgIHRpdGxlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8v6YCJ5oup5qih5byPXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkVudW0oU2VsZWN0ZWRUeXBlKSxcclxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+mAieaLqeaooeW8jydcclxuICAgIH0pXHJcbiAgICBzZWxlY3RlZE1vZGU6IFNlbGVjdGVkVHlwZSA9IFNlbGVjdGVkVHlwZS5OT05FO1xyXG4gICAgLy/ooqvpgInmoIflv5dcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogQ0NfREVWICYmICfooqvpgInmoIfor4YnLFxyXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiB0aGlzLnNlbGVjdGVkTW9kZSA+IFNlbGVjdGVkVHlwZS5OT05FIH1cclxuICAgIH0pXHJcbiAgICBzZWxlY3RlZEZsYWc6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy/ooqvpgInmi6nnmoRTcHJpdGVGcmFtZVxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgdG9vbHRpcDogQ0NfREVWICYmICfooqvpgInmi6nnmoRTcHJpdGVGcmFtZScsXHJcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMuc2VsZWN0ZWRNb2RlID09IFNlbGVjdGVkVHlwZS5TV0lUQ0ggfVxyXG4gICAgfSlcclxuICAgIHNlbGVjdGVkU3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIC8v5pyq6KKr6YCJ5oup55qEU3ByaXRlRnJhbWVcclxuICAgIF91bnNlbGVjdGVkU3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIC8v6Ieq6YCC5bqU5bC65a+4XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAn6Ieq6YCC5bqU5bC65a+477yI5a695oiW6auY77yJJyxcclxuICAgIH0pXHJcbiAgICBhZGFwdGl2ZVNpemU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8v6YCJ5oupXHJcbiAgICBfc2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNldCBzZWxlY3RlZCh2YWw6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHZhbDtcclxuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRGbGFnKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnNlbGVjdGVkTW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIFNlbGVjdGVkVHlwZS5UT0dHTEU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRmxhZy5hY3RpdmUgPSB2YWw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTZWxlY3RlZFR5cGUuU1dJVENIOlxyXG4gICAgICAgICAgICAgICAgbGV0IHNwOiBjYy5TcHJpdGUgPSB0aGlzLnNlbGVjdGVkRmxhZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgICAgIGlmIChzcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwLnNwcml0ZUZyYW1lID0gdmFsID8gdGhpcy5zZWxlY3RlZFNwcml0ZUZyYW1lIDogdGhpcy5fdW5zZWxlY3RlZFNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IHNlbGVjdGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcclxuICAgIH1cclxuICAgIC8v5oyJ6ZKu57uE5Lu2XHJcbiAgICBwcml2YXRlIF9idG5Db206IGFueTtcclxuICAgIGdldCBidG5Db20oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9idG5Db20pXHJcbiAgICAgICAgICAgIHRoaXMuX2J0bkNvbSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYnRuQ29tO1xyXG4gICAgfVxyXG4gICAgLy/kvp3otZbnmoRMaXN057uE5Lu2XHJcbiAgICBwdWJsaWMgbGlzdDogTGlzdDtcclxuICAgIC8v5piv5ZCm5bey57uP5rOo5YaM6L+H5LqL5Lu2XHJcbiAgICBwcml2YXRlIF9ldmVudFJlZyA9IGZhbHNlO1xyXG4gICAgLy/luo/liJdpZFxyXG4gICAgcHVibGljIGxpc3RJZDogbnVtYmVyO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyAvL+ayoeacieaMiemSrue7hOS7tueahOivne+8jHNlbGVjdGVkRmxhZ+aXoOaViFxyXG4gICAgICAgIC8vIGlmICghdGhpcy5idG5Db20pXHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2VsZWN0ZWRNb2RlID09IFNlbGVjdGVkVHlwZS5OT05FO1xyXG4gICAgICAgIC8v5pyJ6YCJ5oup5qih5byP5pe277yM5L+d5a2Y55u45bqU55qE5Lic6KW/XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRNb2RlID09IFNlbGVjdGVkVHlwZS5TV0lUQ0gpIHtcclxuICAgICAgICAgICAgbGV0IGNvbTogY2MuU3ByaXRlID0gdGhpcy5zZWxlY3RlZEZsYWcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Vuc2VsZWN0ZWRTcHJpdGVGcmFtZSA9IGNvbS5zcHJpdGVGcmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuU0laRV9DSEFOR0VELCB0aGlzLl9vblNpemVDaGFuZ2UsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZWdpc3RlckV2ZW50KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fZXZlbnRSZWcpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYnRuQ29tICYmIHRoaXMubGlzdC5zZWxlY3RlZE1vZGUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkNvbS5jbGlja0V2ZW50cy51bnNoaWZ0KHRoaXMuY3JlYXRlRXZ0KHRoaXMsICdvbkNsaWNrVGhpcycpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5hZGFwdGl2ZVNpemUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5TSVpFX0NIQU5HRUQsIHRoaXMuX29uU2l6ZUNoYW5nZSwgdGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRSZWcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfb25TaXplQ2hhbmdlKCkge1xyXG4gICAgICAgIHRoaXMubGlzdC5fb25JdGVtQWRhcHRpdmUodGhpcy5ub2RlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu65LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0ge2NjLkNvbXBvbmVudH0gY29tcG9uZW50IOe7hOS7tuiEmuacrFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGhhbmRsZXJOYW1lIOinpuWPkeWHveaVsOWQjeensFxyXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBub2RlIOe7hOS7tuaJgOWcqG5vZGXvvIjkuI3kvKDnmoTmg4XlhrXkuIvlj5Zjb21wb25lbnQubm9kZe+8iVxyXG4gICAgICogQHJldHVybnMgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlclxyXG4gICAgICovXHJcbiAgICBjcmVhdGVFdnQoY29tcG9uZW50OiBjYy5Db21wb25lbnQsIGhhbmRsZXJOYW1lOiBzdHJpbmcsIG5vZGU6IGNjLk5vZGUgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCFjb21wb25lbnQuaXNWYWxpZClcclxuICAgICAgICAgICAgcmV0dXJuOy8v5pyJ5Lqb5byC5q2l5Yqg6L2955qE77yM6IqC54K55Lul5Y+K6ZSA5q+B5LqG44CCXHJcbiAgICAgICAgY29tcG9uZW50Wydjb21OYW1lJ10gPSBjb21wb25lbnRbJ2NvbU5hbWUnXSB8fCBjb21wb25lbnQubmFtZS5tYXRjaCgvXFw8KC4qPylcXD4vZykucG9wKCkucmVwbGFjZSgvXFw8fD4vZywgJycpO1xyXG4gICAgICAgIGxldCBldnQgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGV2dC50YXJnZXQgPSBub2RlIHx8IGNvbXBvbmVudC5ub2RlO1xyXG4gICAgICAgIGV2dC5jb21wb25lbnQgPSBjb21wb25lbnRbJ2NvbU5hbWUnXTtcclxuICAgICAgICBldnQuaGFuZGxlciA9IGhhbmRsZXJOYW1lO1xyXG4gICAgICAgIHJldHVybiBldnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0FuaShhbmlUeXBlOiBudW1iZXIsIGNhbGxGdW5jOiBGdW5jdGlvbiwgZGVsOiBib29sZWFuKSB7XHJcbiAgICAgICAgbGV0IHQ6IGFueSA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHR3ZWVuOiBjYy5Ud2VlbjtcclxuICAgICAgICBzd2l0Y2ggKGFuaVR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOiAvL+WQkeS4iua2iOWksVxyXG4gICAgICAgICAgICAgICAgdHdlZW4gPSBjYy50d2Vlbih0Lm5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKC4yLCB7IHNjYWxlOiAuNyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5ieSguMywgeyB5OiB0Lm5vZGUuaGVpZ2h0ICogMiB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6IC8v5ZCR5Y+z5raI5aSxXHJcbiAgICAgICAgICAgICAgICB0d2VlbiA9IGNjLnR3ZWVuKHQubm9kZSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oLjIsIHsgc2NhbGU6IC43IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ5KC4zLCB7IHg6IHQubm9kZS53aWR0aCAqIDIgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOiAvL+WQkeS4i+a2iOWksVxyXG4gICAgICAgICAgICAgICAgdHdlZW4gPSBjYy50d2Vlbih0Lm5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKC4yLCB7IHNjYWxlOiAuNyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5ieSguMywgeyB5OiB0Lm5vZGUuaGVpZ2h0ICogLTIgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOiAvL+WQkeW3pua2iOWksVxyXG4gICAgICAgICAgICAgICAgdHdlZW4gPSBjYy50d2Vlbih0Lm5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKC4yLCB7IHNjYWxlOiAuNyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5ieSguMywgeyB4OiB0Lm5vZGUud2lkdGggKiAtMiB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAvL+m7mOiupO+8mue8qeWwj+a2iOWksVxyXG4gICAgICAgICAgICAgICAgdHdlZW4gPSBjYy50d2Vlbih0Lm5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKC4zLCB7IHNjYWxlOiAuMSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FsbEZ1bmMgfHwgZGVsKSB7XHJcbiAgICAgICAgICAgIHR3ZWVuLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHQubGlzdC5fZGVsU2luZ2xlSXRlbSh0Lm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG46IG51bWJlciA9IHQubGlzdC5kaXNwbGF5RGF0YS5sZW5ndGggLSAxOyBuID49IDA7IG4tLSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5saXN0LmRpc3BsYXlEYXRhW25dLmlkID09IHQubGlzdElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Lmxpc3QuZGlzcGxheURhdGEuc3BsaWNlKG4sIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYWxsRnVuYygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHdlZW4uc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrVGhpcygpIHtcclxuICAgICAgICB0aGlzLmxpc3Quc2VsZWN0ZWRJZCA9IHRoaXMubGlzdElkO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=