
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMF9iYXNlXFxzY3JpcHRcXGxpc3RcXExpc3RJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs0Q0FPNEM7QUFDdEMsSUFBQSxLQUFnRSxFQUFFLENBQUMsVUFBVSxFQUEzRSxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxnQkFBZ0Isc0JBQUEsRUFBRSxJQUFJLFVBQUEsRUFBRSxjQUFjLG9CQUFrQixDQUFDO0FBSXBGLElBQUssWUFJSjtBQUpELFdBQUssWUFBWTtJQUNiLCtDQUFRLENBQUE7SUFDUixtREFBVSxDQUFBO0lBQ1YsbURBQVUsQ0FBQTtBQUNkLENBQUMsRUFKSSxZQUFZLEtBQVosWUFBWSxRQUloQjtBQU1EO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcUtDO1FBcEtHLElBQUk7UUFFSixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBQ3ZCLElBQUk7UUFFSixXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLE1BQU07UUFLTixrQkFBWSxHQUFpQixZQUFZLENBQUMsSUFBSSxDQUFDO1FBQy9DLE1BQU07UUFLTixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixpQkFBaUI7UUFLakIseUJBQW1CLEdBQW1CLElBQUksQ0FBQztRQUMzQyxrQkFBa0I7UUFDbEIsNEJBQXNCLEdBQW1CLElBQUksQ0FBQztRQUM5QyxPQUFPO1FBSVAsa0JBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsSUFBSTtRQUNKLGVBQVMsR0FBWSxLQUFLLENBQUM7UUE2QjNCLFdBQVc7UUFDSCxlQUFTLEdBQUcsS0FBSyxDQUFDOztJQXNHOUIsQ0FBQztJQW5JRyxzQkFBSSw4QkFBUTthQWdCWjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO2FBbEJELFVBQWEsR0FBWTtZQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztZQUNyQixJQUFJLENBQUMs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LENBQUEsQ0FBQyxDQUFDO1NBQ2hFLENBQUM7eURBQ3lDO0lBTzNDO1FBSEMsUUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLE1BQU0sSUFBSSxZQUFZO1NBQ2xDLENBQUM7a0RBQzRCO0lBL0JiLFFBQVE7UUFKNUIsT0FBTztRQUNQLGdCQUFnQixFQUFFO1FBQ2xCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUN2QixjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBVSxRQUFRO09BQ25CLFFBQVEsQ0FxSzVCO0lBQUQsZUFBQztDQXJLRCxBQXFLQyxDQXJLcUMsRUFBRSxDQUFDLFNBQVMsR0FxS2pEO2tCQXJLb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQGF1dGhvciBrTCA8a2xrMEBxcS5jb20+XHJcbiAqIEBkYXRlIDIwMTkvNi82XHJcbiAqIEBkb2Mg5YiX6KGoSXRlbee7hOS7ti5cclxuICog6K+05piO77yaXHJcbiAqICAgICAgMeOAgeatpOe7hOS7tumhu+mFjeWQiExpc3Tnu4Tku7bkvb/nlKjjgILvvIjphY3lpZfnmoTphY3lpZfnmoQuLu+8iVxyXG4gKiBAZW5kXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIGRpc2FsbG93TXVsdGlwbGUsIG1lbnUsIGV4ZWN1dGlvbk9yZGVyIH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuaW1wb3J0IExpc3QgZnJvbSAnLi9MaXN0JztcclxuXHJcbmVudW0gU2VsZWN0ZWRUeXBlIHtcclxuICAgIE5PTkUgPSAwLFxyXG4gICAgVE9HR0xFID0gMSxcclxuICAgIFNXSVRDSCA9IDIsXHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbkBkaXNhbGxvd011bHRpcGxlKClcclxuQG1lbnUoJ+iHquWumuS5iee7hOS7ti9MaXN0IEl0ZW0nKVxyXG5AZXhlY3V0aW9uT3JkZXIoLTUwMDEpICAgICAgICAgIC8v5YWI5LqOTGlzdFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0SXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICAvL+Wbvuagh1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuU3ByaXRlLCB0b29sdGlwOiBDQ19ERVYgJiYgJ+WbvuaghycgfSlcclxuICAgIGljb246IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICAvL+agh+mimFxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogQ0NfREVWICYmICfmoIfpopgnIH0pXHJcbiAgICB0aXRsZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvL+mAieaLqeaooeW8j1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5FbnVtKFNlbGVjdGVkVHlwZSksXHJcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfpgInmi6nmqKHlvI8nXHJcbiAgICB9KVxyXG4gICAgc2VsZWN0ZWRNb2RlOiBTZWxlY3RlZFR5cGUgPSBTZWxlY3RlZFR5cGUuTk9ORTtcclxuICAgIC8v6KKr6YCJ5qCH5b+XXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6IENDX0RFViAmJiAn6KKr6YCJ5qCH6K+GJyxcclxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5zZWxlY3RlZE1vZGUgPiBTZWxlY3RlZFR5cGUuTk9ORSB9XHJcbiAgICB9KVxyXG4gICAgc2VsZWN0ZWRGbGFnOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8v6KKr6YCJ5oup55qEU3ByaXRlRnJhbWVcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIHRvb2x0aXA6IENDX0RFViAmJiAn6KKr6YCJ5oup55qEU3ByaXRlRnJhbWUnLFxyXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiB0aGlzLnNlbGVjdGVkTW9kZSA9PSBTZWxlY3RlZFR5cGUuU1dJVENIIH1cclxuICAgIH0pXHJcbiAgICBzZWxlY3RlZFNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICAvL+acquiiq+mAieaLqeeahFNwcml0ZUZyYW1lXHJcbiAgICBfdW5zZWxlY3RlZFNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICAvL+iHqumAguW6lOWwuuWvuFxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+iHqumAguW6lOWwuuWvuO+8iOWuveaIlumrmO+8iScsXHJcbiAgICB9KVxyXG4gICAgYWRhcHRpdmVTaXplOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvL+mAieaLqVxyXG4gICAgX3NlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzZXQgc2VsZWN0ZWQodmFsOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSB2YWw7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkRmxhZylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zZWxlY3RlZE1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBTZWxlY3RlZFR5cGUuVE9HR0xFOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZsYWcuYWN0aXZlID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU2VsZWN0ZWRUeXBlLlNXSVRDSDpcclxuICAgICAgICAgICAgICAgIGxldCBzcDogY2MuU3ByaXRlID0gdGhpcy5zZWxlY3RlZEZsYWcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3ApIHtcclxuICAgICAgICAgICAgICAgICAgICBzcC5zcHJpdGVGcmFtZSA9IHZhbCA/IHRoaXMuc2VsZWN0ZWRTcHJpdGVGcmFtZSA6IHRoaXMuX3Vuc2VsZWN0ZWRTcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBzZWxlY3RlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XHJcbiAgICB9XHJcbiAgICAvL+aMiemSrue7hOS7tlxyXG4gICAgcHJpdmF0ZSBfYnRuQ29tOiBhbnk7XHJcbiAgICBnZXQgYnRuQ29tKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fYnRuQ29tKVxyXG4gICAgICAgICAgICB0aGlzLl9idG5Db20gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J0bkNvbTtcclxuICAgIH1cclxuICAgIC8v5L6d6LWW55qETGlzdOe7hOS7tlxyXG4gICAgcHVibGljIGxpc3Q6IExpc3Q7XHJcbiAgICAvL+aYr+WQpuW3sue7j+azqOWGjOi/h+S6i+S7tlxyXG4gICAgcHJpdmF0ZSBfZXZlbnRSZWcgPSBmYWxzZTtcclxuICAgIC8v5bqP5YiXaWRcclxuICAgIHB1YmxpYyBsaXN0SWQ6IG51bWJlcjtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gLy/msqHmnInmjInpkq7nu4Tku7bnmoTor53vvIxzZWxlY3RlZEZsYWfml6DmlYhcclxuICAgICAgICAvLyBpZiAoIXRoaXMuYnRuQ29tKVxyXG4gICAgICAgIC8vICAgICB0aGlzLnNlbGVjdGVkTW9kZSA9PSBTZWxlY3RlZFR5cGUuTk9ORTtcclxuICAgICAgICAvL+aciemAieaLqeaooeW8j+aXtu+8jOS/neWtmOebuOW6lOeahOS4nOilv1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkTW9kZSA9PSBTZWxlY3RlZFR5cGUuU1dJVENIKSB7XHJcbiAgICAgICAgICAgIGxldCBjb206IGNjLlNwcml0ZSA9IHRoaXMuc2VsZWN0ZWRGbGFnLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICB0aGlzLl91bnNlbGVjdGVkU3ByaXRlRnJhbWUgPSBjb20uc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlNJWkVfQ0hBTkdFRCwgdGhpcy5fb25TaXplQ2hhbmdlLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBfcmVnaXN0ZXJFdmVudCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2V2ZW50UmVnKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJ0bkNvbSAmJiB0aGlzLmxpc3Quc2VsZWN0ZWRNb2RlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5Db20uY2xpY2tFdmVudHMudW5zaGlmdCh0aGlzLmNyZWF0ZUV2dCh0aGlzLCAnb25DbGlja1RoaXMnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuYWRhcHRpdmVTaXplKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuU0laRV9DSEFOR0VELCB0aGlzLl9vblNpemVDaGFuZ2UsIHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50UmVnID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX29uU2l6ZUNoYW5nZSgpIHtcclxuICAgICAgICB0aGlzLmxpc3QuX29uSXRlbUFkYXB0aXZlKHRoaXMubm9kZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuS6i+S7tlxyXG4gICAgICogQHBhcmFtIHtjYy5Db21wb25lbnR9IGNvbXBvbmVudCDnu4Tku7bohJrmnKxcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBoYW5kbGVyTmFtZSDop6blj5Hlh73mlbDlkI3np7BcclxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gbm9kZSDnu4Tku7bmiYDlnKhub2Rl77yI5LiN5Lyg55qE5oOF5Ya15LiL5Y+WY29tcG9uZW50Lm5vZGXvvIlcclxuICAgICAqIEByZXR1cm5zIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJcclxuICAgICAqL1xyXG4gICAgY3JlYXRlRXZ0KGNvbXBvbmVudDogY2MuQ29tcG9uZW50LCBoYW5kbGVyTmFtZTogc3RyaW5nLCBub2RlOiBjYy5Ob2RlID0gbnVsbCkge1xyXG4gICAgICAgIGlmICghY29tcG9uZW50LmlzVmFsaWQpXHJcbiAgICAgICAgICAgIHJldHVybjsvL+acieS6m+W8guatpeWKoOi9veeahO+8jOiKgueCueS7peWPiumUgOavgeS6huOAglxyXG4gICAgICAgIGNvbXBvbmVudFsnY29tTmFtZSddID0gY29tcG9uZW50Wydjb21OYW1lJ10gfHwgY29tcG9uZW50Lm5hbWUubWF0Y2goL1xcPCguKj8pXFw+L2cpLnBvcCgpLnJlcGxhY2UoL1xcPHw+L2csICcnKTtcclxuICAgICAgICBsZXQgZXZ0ID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBldnQudGFyZ2V0ID0gbm9kZSB8fCBjb21wb25lbnQubm9kZTtcclxuICAgICAgICBldnQuY29tcG9uZW50ID0gY29tcG9uZW50Wydjb21OYW1lJ107XHJcbiAgICAgICAgZXZ0LmhhbmRsZXIgPSBoYW5kbGVyTmFtZTtcclxuICAgICAgICByZXR1cm4gZXZ0O1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dBbmkoYW5pVHlwZTogbnVtYmVyLCBjYWxsRnVuYzogRnVuY3Rpb24sIGRlbDogYm9vbGVhbikge1xyXG4gICAgICAgIGxldCB0OiBhbnkgPSB0aGlzO1xyXG4gICAgICAgIGxldCB0d2VlbjogY2MuVHdlZW47XHJcbiAgICAgICAgc3dpdGNoIChhbmlUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogLy/lkJHkuIrmtojlpLFcclxuICAgICAgICAgICAgICAgIHR3ZWVuID0gY2MudHdlZW4odC5ub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50byguMiwgeyBzY2FsZTogLjcgfSlcclxuICAgICAgICAgICAgICAgICAgICAuYnkoLjMsIHsgeTogdC5ub2RlLmhlaWdodCAqIDIgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOiAvL+WQkeWPs+a2iOWksVxyXG4gICAgICAgICAgICAgICAgdHdlZW4gPSBjYy50d2Vlbih0Lm5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKC4yLCB7IHNjYWxlOiAuNyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5ieSguMywgeyB4OiB0Lm5vZGUud2lkdGggKiAyIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjogLy/lkJHkuIvmtojlpLFcclxuICAgICAgICAgICAgICAgIHR3ZWVuID0gY2MudHdlZW4odC5ub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50byguMiwgeyBzY2FsZTogLjcgfSlcclxuICAgICAgICAgICAgICAgICAgICAuYnkoLjMsIHsgeTogdC5ub2RlLmhlaWdodCAqIC0yIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzogLy/lkJHlt6bmtojlpLFcclxuICAgICAgICAgICAgICAgIHR3ZWVuID0gY2MudHdlZW4odC5ub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50byguMiwgeyBzY2FsZTogLjcgfSlcclxuICAgICAgICAgICAgICAgICAgICAuYnkoLjMsIHsgeDogdC5ub2RlLndpZHRoICogLTIgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDogLy/pu5jorqTvvJrnvKnlsI/mtojlpLFcclxuICAgICAgICAgICAgICAgIHR3ZWVuID0gY2MudHdlZW4odC5ub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50byguMywgeyBzY2FsZTogLjEgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNhbGxGdW5jIHx8IGRlbCkge1xyXG4gICAgICAgICAgICB0d2Vlbi5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0Lmxpc3QuX2RlbFNpbmdsZUl0ZW0odC5ub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBuOiBudW1iZXIgPSB0Lmxpc3QuZGlzcGxheURhdGEubGVuZ3RoIC0gMTsgbiA+PSAwOyBuLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQubGlzdC5kaXNwbGF5RGF0YVtuXS5pZCA9PSB0Lmxpc3RJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5saXN0LmRpc3BsYXlEYXRhLnNwbGljZShuLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FsbEZ1bmMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHR3ZWVuLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGlja1RoaXMoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0LnNlbGVjdGVkSWQgPSB0aGlzLmxpc3RJZDtcclxuICAgIH1cclxuXHJcbn1cclxuIl19