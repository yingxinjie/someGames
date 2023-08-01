
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/00_base/script/list/List.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd56b2xObC1IpqNGIiYnYE3Y', 'List');
// bundle/00_base/script/list/List.ts

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
 * @doc 列表组件.
 * @end
 ******************************************/
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, disallowMultiple = _a.disallowMultiple, menu = _a.menu, executionOrder = _a.executionOrder, requireComponent = _a.requireComponent;
var ListItem_1 = require("./ListItem");
var TemplateType;
(function (TemplateType) {
    TemplateType[TemplateType["NODE"] = 1] = "NODE";
    TemplateType[TemplateType["PREFAB"] = 2] = "PREFAB";
})(TemplateType || (TemplateType = {}));
var SlideType;
(function (SlideType) {
    SlideType[SlideType["NORMAL"] = 1] = "NORMAL";
    SlideType[SlideType["ADHERING"] = 2] = "ADHERING";
    SlideType[SlideType["PAGE"] = 3] = "PAGE";
})(SlideType || (SlideType = {}));
var SelectedType;
(function (SelectedType) {
    SelectedType[SelectedType["NONE"] = 0] = "NONE";
    SelectedType[SelectedType["SINGLE"] = 1] = "SINGLE";
    SelectedType[SelectedType["MULT"] = 2] = "MULT";
})(SelectedType || (SelectedType = {}));
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //模板类型
        _this.templateType = TemplateType.NODE;
        //模板Item（Node）
        _this.tmpNode = null;
        //模板Item（Prefab）
        _this.tmpPrefab = null;
        //滑动模式
        _this._slideMode = SlideType.NORMAL;
        //翻页作用距离
        _this.pageDistance = .3;
        //页面改变事件
        _this.pageChangeEvent = new cc.Component.EventHandler();
        //是否为虚拟列表（动态列表）
        _this._virtual = true;
        //是否为循环列表
        _this.cyclic = false;
        //缺省居中
        _this.lackCenter = false;
        //缺省可滑动
        _this.lackSlide = false;
        //刷新频率
        _this._updateRate = 0;
        //分帧渲染（每帧渲染的Item数量（<=0时关闭分帧渲染））
        _this.frameByFrameRenderNum = 0;
        //渲染事件（渲染器）
        _this.renderEvent = new cc.Component.EventHandler();
        //选择模式
        _this.selectedMode = SelectedType.NONE;
        _this.repeatEventSingle = false;
        //触发选择事件
        _this.selectedEvent = new cc.Component.EventHandler();
        //当前选择id
        _this._selectedId = -1;
        _this._forceUpdate = false;
        _this._updateDone = true;
        //列表数量
        _this._numItems = 0;
        _this._inited = false;
        _this._needUpdateWidget = false;
        _this._aniDelRuning = false;
        _this._doneAfterUpdate = false;
        _this.adhering = false;
        _this._adheringBarrier = false;
        _this.curPageNum = 0;
        return _this;
    }
    Object.defineProperty(List.prototype, "slideMode", {
        get: function () {
            return this._slideMode;
        },
        set: function (val) {
            this._slideMode = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "virtual", {
        get: function () {
            return this._virtual;
        },
        set: function (val) {
            if (val != null)
                this._virtual = val;
            if (!CC_DEV && this._numItems != 0) {
                this._onScrolling();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "updateRate", {
        get: function () {
            return this._updateRate;
        },
        set: function (val) {
            if (val >= 0 && val <= 6) {
                this._updateRate = val;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "selectedId", {
        get: function () {
            return this._selectedId;
        },
        set: function (val) {
            var t = this;
            var item;
            switch (t.selectedMode) {
                case SelectedType.SINGLE: {
                    if (!t.repeatEventSingle && val == t._selectedId)
                        return;
                    item = t.getItemByListId(val);
                    // if (!item && val >= 0)
                    //     return;
                    var listItem = void 0;
                    if (t._selectedId >= 0)
                        t._lastSelectedId = t._selectedId;
                    else //如果＜0则取消选择，把_lastSelectedId也置空吧，如果以后有特殊需求再改吧。
                        t._lastSelectedId = null;
                    t._selectedId = val;
                    if (item) {
                        listItem = item.getComponent(ListItem_1.default);
                        listItem.selected = true;
                    }
                    if (t._lastSelectedId >= 0 && t._lastSelectedId != t._selectedId) {
                        var lastItem = t.getItemByListId(t._lastSelectedId);
                        if (lastItem) {
                            lastItem.getComponent(ListItem_1.default).selected = false;
                        }
                    }
                    if (t.selectedEvent) {
                        cc.Component.EventHandler.emitEvents([t.selectedEvent], item, val % this._actualNumItems, t._lastSelectedId == null ? null : (t._lastSelectedId % this._actualNumItems));
                    }
                    break;
                }
                case SelectedType.MULT: {
                    item = t.getItemByListId(val);
                    if (!item)
                        return;
                    var listItem = item.getComponent(ListItem_1.default);
                    if (t._selectedId >= 0)
                        t._lastSelectedId = t._selectedId;
                    t._selectedId = val;
                    var bool = !listItem.selected;
                    listItem.selected = bool;
                    var sub = t.multSelected.indexOf(val);
                    if (bool && sub < 0) {
                        t.multSelected.push(val);
                    }
                    else if (!bool && sub >= 0) {
                        t.multSelected.splice(sub, 1);
                    }
                    if (t.selectedEvent) {
                        cc.Component.EventHandler.emitEvents([t.selectedEvent], item, val % this._actualNumItems, t._lastSelectedId == null ? null : (t._lastSelectedId % this._actualNumItems), bool);
                    }
                    break;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "numItems", {
        get: function () {
            return this._actualNumItems;
        },
        set: function (val) {
            var t = this;
            if (!t.checkInited(false))
                return;
            if (val == null || val < 0) {
                cc.error('numItems set the wrong::', val);
                return;
            }
            t._actualNumItems = t._numItems = val;
            t._forceUpdate = true;
            if (t._virtual) {
                t._resizeContent();
                if (t.cyclic) {
                    t._numItems = t._cyclicNum * t._numItems;
                }
                t._onScrolling();
                if (!t.frameByFrameRenderNum && t.slideMode == SlideType.PAGE)
                    t.curPageNum = t.nearestListId;
            }
            else {
                if (t.cyclic) {
                    t._resizeContent();
                    t._numItems = t._cyclicNum * t._numItems;
                }
                var layout = t.content.getComponent(cc.Layout);
                if (layout) {
                    layout.enabled = true;
                }
                t._delRedundantItem();
                t.firstListId = 0;
                if (t.frameByFrameRenderNum > 0) {
                    //先渲染几个出来
                    var len = t.frameByFrameRenderNum > t._numItems ? t._numItems : t.frameByFrameRenderNum;
                    for (var n = 0; n < len; n++) {
                        t._createOrUpdateItem2(n);
                    }
                    if (t.frameByFrameRenderNum < t._numItems) {
                        t._updateCounter = t.frameByFrameRenderNum;
                        t._updateDone = false;
                    }
                }
                else {
                    for (var n = 0; n < t._numItems; n++) {
                        t._createOrUpdateItem2(n);
                    }
                    t.displayItemNum = t._numItems;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "scrollView", {
        get: function () {
            return this._scrollView;
        },
        enumerable: false,
        configurable: true
    });
    //----------------------------------------------------------------------------
    List.prototype.onLoad = function () {
        this._init();
    };
    List.prototype.onDestroy = function () {
        var t = this;
        if (cc.isValid(t._itemTmp))
            t._itemTmp.destroy();
        if (cc.isValid(t.tmpNode))
            t.tmpNode.destroy();
        t._pool && t._pool.clear();
    };
    List.prototype.onEnable = function () {
        // if (!CC_EDITOR) 
        this._registerEvent();
        this._init();
        // 处理重新显示后，有可能上一次的动画移除还未播放完毕，导致动画卡住的问题
        if (this._aniDelRuning) {
            this._aniDelRuning = false;
            if (this._aniDelItem) {
                if (this._aniDelBeforePos) {
                    this._aniDelItem.position = this._aniDelBeforePos;
                    delete this._aniDelBeforePos;
                }
                if (this._aniDelBeforeScale) {
                    this._aniDelItem.scale = this._aniDelBeforeScale;
                    delete this._aniDelBeforeScale;
                }
                delete this._aniDelItem;
            }
            if (this._aniDelCB) {
                this._aniDelCB();
                delete this._aniDelCB;
            }
        }
    };
    List.prototype.onDisable = function () {
        // if (!CC_EDITOR) 
        this._unregisterEvent();
    };
    //注册事件
    List.prototype._registerEvent = function () {
        var t = this;
        t.node.on(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, true);
        t.node.on('touch-up', t._onTouchUp, t);
        t.node.on(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, true);
        t.node.on('scroll-began', t._onScrollBegan, t, true);
        t.node.on('scroll-ended', t._onScrollEnded, t, true);
        t.node.on('scrolling', t._onScrolling, t, true);
        t.node.on(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
    };
    //卸载事件
    List.prototype._unregisterEvent = function () {
        var t = this;
        t.node.off(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, true);
        t.node.off('touch-up', t._onTouchUp, t);
        t.node.off(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, true);
        t.node.off('scroll-began', t._onScrollBegan, t, true);
        t.node.off('scroll-ended', t._onScrollEnded, t, true);
        t.node.off('scrolling', t._onScrolling, t, true);
        t.node.off(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
    };
    //初始化各种..
    List.prototype._init = function () {
        var t = this;
        if (t._inited)
            return;
        t._scrollView = t.node.getComponent(cc.ScrollView);
        t.content = t._scrollView.content;
        if (!t.content) {
            cc.error(t.node.name + "'s cc.ScrollView unset content!");
            return;
        }
        t._layout = t.content.getComponent(cc.Layout);
        t._align = t._layout.type; //排列模式
        t._resizeMode = t._layout.resizeMode; //自适应模式
        t._startAxis = t._layout.startAxis;
        t._topGap = t._layout.paddingTop; //顶边距
        t._rightGap = t._layout.paddingRight; //右边距
        t._bottomGap = t._layout.paddingBottom; //底边距
        t._leftGap = t._layout.paddingLeft; //左边距
        t._columnGap = t._layout.spacingX; //列距
        t._lineGap = t._layout.spacingY; //行距
        t._colLineNum; //列数或行数（非GRID模式则=1，表示单列或单行）;
        t._verticalDir = t._layout.verticalDirection; //垂直排列子节点的方向
        t._horizontalDir = t._layout.horizontalDirection; //水平排列子节点的方向
        t.setTemplateItem(cc.instantiate(t.templateType == TemplateType.PREFAB ? t.tmpPrefab : t.tmpNode));
        // 特定的滑动模式处理
        if (t._slideMode == SlideType.ADHERING || t._slideMode == SlideType.PAGE) {
            t._scrollView.inertia = false;
            t._scrollView._onMouseWheel = function () {
                return;
            };
        }
        if (!t.virtual) // lackCenter 仅支持 Virtual 模式
            t.lackCenter = false;
        t._lastDisplayData = []; //最后一次刷新的数据
        t.displayData = []; //当前数据
        t._pool = new cc.NodePool(); //这是个池子..
        t._forceUpdate = false; //是否强制更新
        t._updateCounter = 0; //当前分帧渲染帧数
        t._updateDone = true; //分帧渲染是否完成
        t.curPageNum = 0; //当前页数
        if (t.cyclic || 0) {
            t._scrollView._processAutoScrolling = this._processAutoScrolling.bind(t);
            t._scrollView._startBounceBackIfNeeded = function () {
                return false;
            };
            // t._scrollView._scrollChildren = function () {
            //     return false;
            // }
        }
        switch (t._align) {
            case cc.Layout.Type.HORIZONTAL: {
                switch (t._horizontalDir) {
                    case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                        t._alignCalcType = 1;
                        break;
                    case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                        t._alignCalcType = 2;
                        break;
                }
                break;
            }
            case cc.Layout.Type.VERTICAL: {
                switch (t._verticalDir) {
                    case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                        t._alignCalcType = 3;
                        break;
                    case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                        t._alignCalcType = 4;
                        break;
                }
                break;
            }
            case cc.Layout.Type.GRID: {
                switch (t._startAxis) {
                    case cc.Layout.AxisDirection.HORIZONTAL:
                        switch (t._verticalDir) {
                            case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                                t._alignCalcType = 3;
                                break;
                            case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                                t._alignCalcType = 4;
                                break;
                        }
                        break;
                    case cc.Layout.AxisDirection.VERTICAL:
                        switch (t._horizontalDir) {
                            case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                                t._alignCalcType = 1;
                                break;
                            case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                                t._alignCalcType = 2;
                                break;
                        }
                        break;
                }
                break;
            }
        }
        // 清空 content
        // t.content.children.forEach((child: cc.Node) => {
        //     child.removeFromParent();
        //     if (child != t.tmpNode && child.isValid)
        //         child.destroy();
        // });
        t.content.removeAllChildren();
        t._inited = true;
    };
    /**
     * 为了实现循环列表，必须覆写cc.ScrollView的某些函数
     * @param {Number} dt
     */
    List.prototype._processAutoScrolling = function (dt) {
        var brakingFactor = 1;
        this._scrollView['_autoScrollAccumulatedTime'] += dt * (1 / brakingFactor);
        var percentage = Math.min(1, this._scrollView['_autoScrollAccumulatedTime'] / this._scrollView['_autoScrollTotalTime']);
        if (this._scrollView['_autoScrollAttenuate']) {
            var time = percentage - 1;
            percentage = time * time * time * time * time + 1;
        }
        var newPosition = this._scrollView['_autoScrollStartPosition'].add(this._scrollView['_autoScrollTargetDelta'].mul(percentage));
        var EPSILON = this._scrollView['getScrollEndedEventTiming']();
        var reachedEnd = Math.abs(percentage - 1) <= EPSILON;
        var fireEvent = Math.abs(percentage - 1) <= this._scrollView['getScrollEndedEventTiming']();
        if (fireEvent && !this._scrollView['_isScrollEndedWithThresholdEventFired']) {
            this._scrollView['_dispatchEvent']('scroll-ended-with-threshold');
            this._scrollView['_isScrollEndedWithThresholdEventFired'] = true;
        }
        if (reachedEnd) {
            this._scrollView['_autoScrolling'] = false;
        }
        var deltaMove = newPosition.sub(this._scrollView.getContentPosition());
        this._scrollView['_moveContent'](this._scrollView['_clampDelta'](deltaMove), reachedEnd);
        this._scrollView['_dispatchEvent']('scrolling');
        // scollTo API controll move
        if (!this._scrollView['_autoScrolling']) {
            this._scrollView['_isBouncing'] = false;
            this._scrollView['_scrolling'] = false;
            this._scrollView['_dispatchEvent']('scroll-ended');
        }
    };
    //设置模板Item
    List.prototype.setTemplateItem = function (item) {
        if (!item)
            return;
        var t = this;
        t._itemTmp = item;
        if (t._resizeMode == cc.Layout.ResizeMode.CHILDREN)
            t._itemSize = t._layout.cellSize;
        else
            t._itemSize = cc.size(item.width, item.height);
        //获取ListItem，如果没有就取消选择模式
        var com = item.getComponent(ListItem_1.default);
        var remove = false;
        if (!com)
            remove = true;
        // if (com) {
        //     if (!com._btnCom && !item.getComponent(cc.Button)) {
        //         remove = true;
        //     }
        // }
        if (remove) {
            t.selectedMode = SelectedType.NONE;
        }
        com = item.getComponent(cc.Widget);
        if (com && com.enabled) {
            t._needUpdateWidget = true;
        }
        if (t.selectedMode == SelectedType.MULT)
            t.multSelected = [];
        switch (t._align) {
            case cc.Layout.Type.HORIZONTAL:
                t._colLineNum = 1;
                t._sizeType = false;
                break;
            case cc.Layout.Type.VERTICAL:
                t._colLineNum = 1;
                t._sizeType = true;
                break;
            case cc.Layout.Type.GRID:
                switch (t._startAxis) {
                    case cc.Layout.AxisDirection.HORIZONTAL:
                        //计算列数
                        var trimW = t.content.width - t._leftGap - t._rightGap;
                        t._colLineNum = Math.floor((trimW + t._columnGap) / (t._itemSize.width + t._columnGap));
                        t._sizeType = true;
                        break;
                    case cc.Layout.AxisDirection.VERTICAL:
                        //计算行数
                        var trimH = t.content.height - t._topGap - t._bottomGap;
                        t._colLineNum = Math.floor((trimH + t._lineGap) / (t._itemSize.height + t._lineGap));
                        t._sizeType = false;
                        break;
                }
                break;
        }
    };
    /**
     * 检查是否初始化
     * @param {Boolean} printLog 是否打印错误信息
     * @returns
     */
    List.prototype.checkInited = function (printLog) {
        if (printLog === void 0) { printLog = true; }
        if (!this._inited) {
            if (printLog)
                cc.error('List initialization not completed!');
            return false;
        }
        return true;
    };
    //禁用 Layout 组件，自行计算 Content Size
    List.prototype._resizeContent = function () {
        var t = this;
        var result;
        switch (t._align) {
            case cc.Layout.Type.HORIZONTAL: {
                if (t._customSize) {
                    var fixed = t._getFixedSize(null);
                    result = t._leftGap + fixed.val + (t._itemSize.width * (t._numItems - fixed.count)) + (t._columnGap * (t._numItems - 1)) + t._rightGap;
                }
                else {
                    result = t._leftGap + (t._itemSize.width * t._numItems) + (t._columnGap * (t._numItems - 1)) + t._rightGap;
                }
                break;
            }
            case cc.Layout.Type.VERTICAL: {
                if (t._customSize) {
                    var fixed = t._getFixedSize(null);
                    result = t._topGap + fixed.val + (t._itemSize.height * (t._numItems - fixed.count)) + (t._lineGap * (t._numItems - 1)) + t._bottomGap;
                }
                else {
                    result = t._topGap + (t._itemSize.height * t._numItems) + (t._lineGap * (t._numItems - 1)) + t._bottomGap;
                }
                break;
            }
            case cc.Layout.Type.GRID: {
                //网格模式不支持居中
                if (t.lackCenter)
                    t.lackCenter = false;
                switch (t._startAxis) {
                    case cc.Layout.AxisDirection.HORIZONTAL:
                        var lineNum = Math.ceil(t._numItems / t._colLineNum);
                        result = t._topGap + (t._itemSize.height * lineNum) + (t._lineGap * (lineNum - 1)) + t._bottomGap;
                        break;
                    case cc.Layout.AxisDirection.VERTICAL:
                        var colNum = Math.ceil(t._numItems / t._colLineNum);
                        result = t._leftGap + (t._itemSize.width * colNum) + (t._columnGap * (colNum - 1)) + t._rightGap;
                        break;
                }
                break;
            }
        }
        var layout = t.content.getComponent(cc.Layout);
        if (layout)
            layout.enabled = false;
        t._allItemSize = result;
        t._allItemSizeNoEdge = t._allItemSize - (t._sizeType ? (t._topGap + t._bottomGap) : (t._leftGap + t._rightGap));
        if (t.cyclic) {
            var totalSize = (t._sizeType ? t.node.height : t.node.width);
            t._cyclicPos1 = 0;
            totalSize -= t._cyclicPos1;
            t._cyclicNum = Math.ceil(totalSize / t._allItemSizeNoEdge) + 1;
            var spacing = t._sizeType ? t._lineGap : t._columnGap;
            t._cyclicPos2 = t._cyclicPos1 + t._allItemSizeNoEdge + spacing;
            t._cyclicAllItemSize = t._allItemSize + (t._allItemSizeNoEdge * (t._cyclicNum - 1)) + (spacing * (t._cyclicNum - 1));
            t._cycilcAllItemSizeNoEdge = t._allItemSizeNoEdge * t._cyclicNum;
            t._cycilcAllItemSizeNoEdge += spacing * (t._cyclicNum - 1);
            // cc.log('_cyclicNum ->', t._cyclicNum, t._allItemSizeNoEdge, t._allItemSize, t._cyclicPos1, t._cyclicPos2);
        }
        t._lack = !t.cyclic && t._allItemSize < (t._sizeType ? t.node.height : t.node.width);
        var slideOffset = ((!t._lack || !t.lackCenter) && t.lackSlide) ? 0 : .1;
        var targetWH = t._lack ? ((t._sizeType ? t.node.height : t.node.width) - slideOffset) : (t.cyclic ? t._cyclicAllItemSize : t._allItemSize);
        if (targetWH < 0)
            targetWH = 0;
        if (t._sizeType) {
            t.content.height = targetWH;
        }
        else {
            t.content.width = targetWH;
        }
        // cc.log('_resizeContent()  numItems =', t._numItems, '，content =', t.content);
    };
    //滚动进行时...
    List.prototype._onScrolling = function (ev) {
        if (ev === void 0) { ev = null; }
        if (this.frameCount == null)
            this.frameCount = this._updateRate;
        if (!this._forceUpdate && (ev && ev.type != 'scroll-ended') && this.frameCount > 0) {
            this.frameCount--;
            return;
        }
        else
            this.frameCount = this._updateRate;
        if (this._aniDelRuning)
            return;
        //循环列表处理
        if (this.cyclic) {
            var scrollPos = this.content.getPosition();
            scrollPos = this._sizeType ? scrollPos.y : scrollPos.x;
            var addVal = this._allItemSizeNoEdge + (this._sizeType ? this._lineGap : this._columnGap);
            var add = this._sizeType ? cc.v2(0, addVal) : cc.v2(addVal, 0);
            switch (this._alignCalcType) {
                case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                    if (scrollPos > -this._cyclicPos1) {
                        this.content.x = -this._cyclicPos2;
                        if (this._scrollView.isAutoScrolling()) {
                            this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].sub(add);
                        }
                        // if (this._beganPos) {
                        //     this._beganPos += add;
                        // }
                    }
                    else if (scrollPos < -this._cyclicPos2) {
                        this.content.x = -this._cyclicPos1;
                        if (this._scrollView.isAutoScrolling()) {
                            this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].add(add);
                        }
                        // if (this._beganPos) {
                        //     this._beganPos -= add;
                        // }
                    }
                    break;
                case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                    if (scrollPos < this._cyclicPos1) {
                        this.content.x = this._cyclicPos2;
                        if (this._scrollView.isAutoScrolling()) {
                            this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].add(add);
                        }
                    }
                    else if (scrollPos > this._cyclicPos2) {
                        this.content.x = this._cyclicPos1;
                        if (this._scrollView.isAutoScrolling()) {
                            this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].sub(add);
                        }
                    }
                    break;
                case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                    if (scrollPos < this._cyclicPos1) {
                        this.content.y = this._cyclicPos2;
                        if (this._scrollView.isAutoScrolling()) {
                            this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].add(add);
                        }
                    }
                    else if (scrollPos > this._cyclicPos2) {
                        this.content.y = this._cyclicPos1;
                        if (this._scrollView.isAutoScrolling()) {
                            this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].sub(add);
                        }
                    }
                    break;
                case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                    if (scrollPos > -this._cyclicPos1) {
                        this.content.y = -this._cyclicPos2;
                        if (this._scrollView.isAutoScrolling()) {
                            this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].sub(add);
                        }
                    }
                    else if (scrollPos < -this._cyclicPos2) {
                        this.content.y = -this._cyclicPos1;
                        if (this._scrollView.isAutoScrolling()) {
                            this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].add(add);
                        }
                    }
                    break;
            }
        }
        this._calcViewPos();
        var vTop, vRight, vBottom, vLeft;
        if (this._sizeType) {
            vTop = this.viewTop;
            vBottom = this.viewBottom;
        }
        else {
            vRight = this.viewRight;
            vLeft = this.viewLeft;
        }
        if (this._virtual) {
            this.displayData = [];
            var itemPos = void 0;
            var curId = 0;
            var endId = this._numItems - 1;
            if (this._customSize) {
                var breakFor = false;
                //如果该item的位置在可视区域内，就推入displayData
                for (; curId <= endId && !breakFor; curId++) {
                    itemPos = this._calcItemPos(curId);
                    switch (this._align) {
                        case cc.Layout.Type.HORIZONTAL:
                            if (itemPos.right >= vLeft && itemPos.left <= vRight) {
                                this.displayData.push(itemPos);
                            }
                            else if (curId != 0 && this.displayData.length > 0) {
                                breakFor = true;
                            }
                            break;
                        case cc.Layout.Type.VERTICAL:
                            if (itemPos.bottom <= vTop && itemPos.top >= vBottom) {
                                this.displayData.push(itemPos);
                            }
                            else if (curId != 0 && this.displayData.length > 0) {
                                breakFor = true;
                            }
                            break;
                        case cc.Layout.Type.GRID:
                            switch (this._startAxis) {
                                case cc.Layout.AxisDirection.HORIZONTAL:
                                    if (itemPos.bottom <= vTop && itemPos.top >= vBottom) {
                                        this.displayData.push(itemPos);
                                    }
                                    else if (curId != 0 && this.displayData.length > 0) {
                                        breakFor = true;
                                    }
                                    break;
                                case cc.Layout.AxisDirection.VERTICAL:
                                    if (itemPos.right >= vLeft && itemPos.left <= vRight) {
                                        this.displayData.push(itemPos);
                                    }
                                    else if (curId != 0 && this.displayData.length > 0) {
                                        breakFor = true;
                                    }
                                    break;
                            }
                            break;
                    }
                }
            }
            else {
                var ww = this._itemSize.width + this._columnGap;
                var hh = this._itemSize.height + this._lineGap;
                switch (this._alignCalcType) {
                    case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                        curId = (vLeft - this._leftGap) / ww;
                        endId = (vRight - this._leftGap) / ww;
                        break;
                    case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                        curId = (-vRight - this._rightGap) / ww;
                        endId = (-vLeft - this._rightGap) / ww;
                        break;
                    case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                        curId = (-vTop - this._topGap) / hh;
                        endId = (-vBottom - this._topGap) / hh;
                        break;
                    case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                        curId = (vBottom - this._bottomGap) / hh;
                        endId = (vTop - this._bottomGap) / hh;
                        break;
                }
                curId = Math.floor(curId) * this._colLineNum;
                endId = Math.ceil(endId) * this._colLineNum;
                endId--;
                if (curId < 0)
                    curId = 0;
                if (endId >= this._numItems)
                    endId = this._numItems - 1;
                for (; curId <= endId; curId++) {
                    this.displayData.push(this._calcItemPos(curId));
                }
            }
            this._delRedundantItem();
            if (this.displayData.length <= 0 || !this._numItems) { //if none, delete all.
                this._lastDisplayData = [];
                return;
            }
            this.firstListId = this.displayData[0].id;
            this.displayItemNum = this.displayData.length;
            var len = this._lastDisplayData.length;
            var haveDataChange = this.displayItemNum != len;
            if (haveDataChange) {
                // 如果是逐帧渲染，需要排序
                if (this.frameByFrameRenderNum > 0) {
                    this._lastDisplayData.sort(function (a, b) { return a - b; });
                }
                // 因List的显示数据是有序的，所以只需要判断数组长度是否相等，以及头、尾两个元素是否相等即可。
                haveDataChange = this.firstListId != this._lastDisplayData[0] || this.displayData[this.displayItemNum - 1].id != this._lastDisplayData[len - 1];
            }
            if (this._forceUpdate || haveDataChange) { //如果是强制更新
                if (this.frameByFrameRenderNum > 0) {
                    // if (this._updateDone) {
                    // this._lastDisplayData = [];
                    //逐帧渲染
                    if (this._numItems > 0) {
                        if (!this._updateDone) {
                            this._doneAfterUpdate = true;
                        }
                        else {
                            this._updateCounter = 0;
                        }
                        this._updateDone = false;
                    }
                    else {
                        this._updateCounter = 0;
                        this._updateDone = true;
                    }
                    // }
                }
                else {
                    //直接渲染
                    this._lastDisplayData = [];
                    // cc.log('List Display Data II::', this.displayData);
                    for (var c = 0; c < this.displayItemNum; c++) {
                        this._createOrUpdateItem(this.displayData[c]);
                    }
                    this._forceUpdate = false;
                }
            }
            this._calcNearestItem();
        }
    };
    //计算可视范围
    List.prototype._calcViewPos = function () {
        var scrollPos = this.content.getPosition();
        switch (this._alignCalcType) {
            case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                this.elasticLeft = scrollPos.x > 0 ? scrollPos.x : 0;
                this.viewLeft = (scrollPos.x < 0 ? -scrollPos.x : 0) - this.elasticLeft;
                this.viewRight = this.viewLeft + this.node.width;
                this.elasticRight = this.viewRight > this.content.width ? Math.abs(this.viewRight - this.content.width) : 0;
                this.viewRight += this.elasticRight;
                // cc.log(this.elasticLeft, this.elasticRight, this.viewLeft, this.viewRight);
                break;
            case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                this.elasticRight = scrollPos.x < 0 ? -scrollPos.x : 0;
                this.viewRight = (scrollPos.x > 0 ? -scrollPos.x : 0) + this.elasticRight;
                this.viewLeft = this.viewRight - this.node.width;
                this.elasticLeft = this.viewLeft < -this.content.width ? Math.abs(this.viewLeft + this.content.width) : 0;
                this.viewLeft -= this.elasticLeft;
                // cc.log(this.elasticLeft, this.elasticRight, this.viewLeft, this.viewRight);
                break;
            case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                this.elasticTop = scrollPos.y < 0 ? Math.abs(scrollPos.y) : 0;
                this.viewTop = (scrollPos.y > 0 ? -scrollPos.y : 0) + this.elasticTop;
                this.viewBottom = this.viewTop - this.node.height;
                this.elasticBottom = this.viewBottom < -this.content.height ? Math.abs(this.viewBottom + this.content.height) : 0;
                this.viewBottom += this.elasticBottom;
                // cc.log(this.elasticTop, this.elasticBottom, this.viewTop, this.viewBottom);
                break;
            case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                this.elasticBottom = scrollPos.y > 0 ? Math.abs(scrollPos.y) : 0;
                this.viewBottom = (scrollPos.y < 0 ? -scrollPos.y : 0) - this.elasticBottom;
                this.viewTop = this.viewBottom + this.node.height;
                this.elasticTop = this.viewTop > this.content.height ? Math.abs(this.viewTop - this.content.height) : 0;
                this.viewTop -= this.elasticTop;
                // cc.log(this.elasticTop, this.elasticBottom, this.viewTop, this.viewBottom);
                break;
        }
    };
    //计算位置 根据id
    List.prototype._calcItemPos = function (id) {
        var width, height, top, bottom, left, right, itemX, itemY;
        switch (this._align) {
            case cc.Layout.Type.HORIZONTAL:
                switch (this._horizontalDir) {
                    case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT: {
                        if (this._customSize) {
                            var fixed = this._getFixedSize(id);
                            left = this._leftGap + ((this._itemSize.width + this._columnGap) * (id - fixed.count)) + (fixed.val + (this._columnGap * fixed.count));
                            var cs = this._customSize[id];
                            width = (cs > 0 ? cs : this._itemSize.width);
                        }
                        else {
                            left = this._leftGap + ((this._itemSize.width + this._columnGap) * id);
                            width = this._itemSize.width;
                        }
                        if (this.lackCenter) {
                            left -= this._leftGap;
                            var offset = (this.content.width / 2) - (this._allItemSizeNoEdge / 2);
                            left += offset;
                        }
                        right = left + width;
                        return {
                            id: id,
                            left: left,
                            right: right,
                            x: left + (this._itemTmp.anchorX * width),
                            y: this._itemTmp.y,
                        };
                    }
                    case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT: {
                        if (this._customSize) {
                            var fixed = this._getFixedSize(id);
                            right = -this._rightGap - ((this._itemSize.width + this._columnGap) * (id - fixed.count)) - (fixed.val + (this._columnGap * fixed.count));
                            var cs = this._customSize[id];
                            width = (cs > 0 ? cs : this._itemSize.width);
                        }
                        else {
                            right = -this._rightGap - ((this._itemSize.width + this._columnGap) * id);
                            width = this._itemSize.width;
                        }
                        if (this.lackCenter) {
                            right += this._rightGap;
                            var offset = (this.content.width / 2) - (this._allItemSizeNoEdge / 2);
                            right -= offset;
                        }
                        left = right - width;
                        return {
                            id: id,
                            right: right,
                            left: left,
                            x: left + (this._itemTmp.anchorX * width),
                            y: this._itemTmp.y,
                        };
                    }
                }
                break;
            case cc.Layout.Type.VERTICAL: {
                switch (this._verticalDir) {
                    case cc.Layout.VerticalDirection.TOP_TO_BOTTOM: {
                        if (this._customSize) {
                            var fixed = this._getFixedSize(id);
                            top = -this._topGap - ((this._itemSize.height + this._lineGap) * (id - fixed.count)) - (fixed.val + (this._lineGap * fixed.count));
                            var cs = this._customSize[id];
                            height = (cs > 0 ? cs : this._itemSize.height);
                        }
                        else {
                            top = -this._topGap - ((this._itemSize.height + this._lineGap) * id);
                            height = this._itemSize.height;
                        }
                        if (this.lackCenter) {
                            top += this._topGap;
                            var offset = (this.content.height / 2) - (this._allItemSizeNoEdge / 2);
                            top -= offset;
                        }
                        bottom = top - height;
                        return {
                            id: id,
                            top: top,
                            bottom: bottom,
                            x: this._itemTmp.x,
                            y: bottom + (this._itemTmp.anchorY * height),
                        };
                    }
                    case cc.Layout.VerticalDirection.BOTTOM_TO_TOP: {
                        if (this._customSize) {
                            var fixed = this._getFixedSize(id);
                            bottom = this._bottomGap + ((this._itemSize.height + this._lineGap) * (id - fixed.count)) + (fixed.val + (this._lineGap * fixed.count));
                            var cs = this._customSize[id];
                            height = (cs > 0 ? cs : this._itemSize.height);
                        }
                        else {
                            bottom = this._bottomGap + ((this._itemSize.height + this._lineGap) * id);
                            height = this._itemSize.height;
                        }
                        if (this.lackCenter) {
                            bottom -= this._bottomGap;
                            var offset = (this.content.height / 2) - (this._allItemSizeNoEdge / 2);
                            bottom += offset;
                        }
                        top = bottom + height;
                        return {
                            id: id,
                            top: top,
                            bottom: bottom,
                            x: this._itemTmp.x,
                            y: bottom + (this._itemTmp.anchorY * height),
                        };
                        break;
                    }
                }
            }
            case cc.Layout.Type.GRID: {
                var colLine = Math.floor(id / this._colLineNum);
                switch (this._startAxis) {
                    case cc.Layout.AxisDirection.HORIZONTAL: {
                        switch (this._verticalDir) {
                            case cc.Layout.VerticalDirection.TOP_TO_BOTTOM: {
                                top = -this._topGap - ((this._itemSize.height + this._lineGap) * colLine);
                                bottom = top - this._itemSize.height;
                                itemY = bottom + (this._itemTmp.anchorY * this._itemSize.height);
                                break;
                            }
                            case cc.Layout.VerticalDirection.BOTTOM_TO_TOP: {
                                bottom = this._bottomGap + ((this._itemSize.height + this._lineGap) * colLine);
                                top = bottom + this._itemSize.height;
                                itemY = bottom + (this._itemTmp.anchorY * this._itemSize.height);
                                break;
                            }
                        }
                        itemX = this._leftGap + ((id % this._colLineNum) * (this._itemSize.width + this._columnGap));
                        switch (this._horizontalDir) {
                            case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT: {
                                itemX += (this._itemTmp.anchorX * this._itemSize.width);
                                itemX -= (this.content.anchorX * this.content.width);
                                break;
                            }
                            case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT: {
                                itemX += ((1 - this._itemTmp.anchorX) * this._itemSize.width);
                                itemX -= ((1 - this.content.anchorX) * this.content.width);
                                itemX *= -1;
                                break;
                            }
                        }
                        return {
                            id: id,
                            top: top,
                            bottom: bottom,
                            x: itemX,
                            y: itemY,
                        };
                    }
                    case cc.Layout.AxisDirection.VERTICAL: {
                        switch (this._horizontalDir) {
                            case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT: {
                                left = this._leftGap + ((this._itemSize.width + this._columnGap) * colLine);
                                right = left + this._itemSize.width;
                                itemX = left + (this._itemTmp.anchorX * this._itemSize.width);
                                itemX -= (this.content.anchorX * this.content.width);
                                break;
                            }
                            case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT: {
                                right = -this._rightGap - ((this._itemSize.width + this._columnGap) * colLine);
                                left = right - this._itemSize.width;
                                itemX = left + (this._itemTmp.anchorX * this._itemSize.width);
                                itemX += ((1 - this.content.anchorX) * this.content.width);
                                break;
                            }
                        }
                        itemY = -this._topGap - ((id % this._colLineNum) * (this._itemSize.height + this._lineGap));
                        switch (this._verticalDir) {
                            case cc.Layout.VerticalDirection.TOP_TO_BOTTOM: {
                                itemY -= ((1 - this._itemTmp.anchorY) * this._itemSize.height);
                                itemY += ((1 - this.content.anchorY) * this.content.height);
                                break;
                            }
                            case cc.Layout.VerticalDirection.BOTTOM_TO_TOP: {
                                itemY -= ((this._itemTmp.anchorY) * this._itemSize.height);
                                itemY += (this.content.anchorY * this.content.height);
                                itemY *= -1;
                                break;
                            }
                        }
                        return {
                            id: id,
                            left: left,
                            right: right,
                            x: itemX,
                            y: itemY,
                        };
                    }
                }
                break;
            }
        }
    };
    //计算已存在的Item的位置
    List.prototype._calcExistItemPos = function (id) {
        var item = this.getItemByListId(id);
        if (!item)
            return null;
        var data = {
            id: id,
            x: item.x,
            y: item.y,
        };
        if (this._sizeType) {
            data.top = item.y + (item.height * (1 - item.anchorY));
            data.bottom = item.y - (item.height * item.anchorY);
        }
        else {
            data.left = item.x - (item.width * item.anchorX);
            data.right = item.x + (item.width * (1 - item.anchorX));
        }
        return data;
    };
    //获取Item位置
    List.prototype.getItemPos = function (id) {
        if (this._virtual)
            return this._calcItemPos(id);
        else {
            if (this.frameByFrameRenderNum)
                return this._calcItemPos(id);
            else
                return this._calcExistItemPos(id);
        }
    };
    //获取固定尺寸
    List.prototype._getFixedSize = function (listId) {
        if (!this._customSize)
            return null;
        if (listId == null)
            listId = this._numItems;
        var fixed = 0;
        var count = 0;
        for (var id in this._customSize) {
            if (parseInt(id) < listId) {
                fixed += this._customSize[id];
                count++;
            }
        }
        return {
            val: fixed,
            count: count,
        };
    };
    //滚动结束时..
    List.prototype._onScrollBegan = function () {
        this._beganPos = this._sizeType ? this.viewTop : this.viewLeft;
    };
    //滚动结束时..
    List.prototype._onScrollEnded = function () {
        var t = this;
        t.curScrollIsTouch = false;
        if (t.scrollToListId != null) {
            var item = t.getItemByListId(t.scrollToListId);
            t.scrollToListId = null;
            if (item) {
                cc.tween(item)
                    .to(.1, { scale: 1.06 })
                    .to(.1, { scale: 1 })
                    .start();
            }
        }
        t._onScrolling();
        if (t._slideMode == SlideType.ADHERING &&
            !t.adhering) {
            //cc.log(t.adhering, t._scrollView.isAutoScrolling(), t._scrollView.isScrolling());
            t.adhere();
        }
        else if (t._slideMode == SlideType.PAGE) {
            if (t._beganPos != null && t.curScrollIsTouch) {
                this._pageAdhere();
            }
            else {
                t.adhere();
            }
        }
    };
    // 触摸时
    List.prototype._onTouchStart = function (ev, captureListeners) {
        var _a;
        if ((_a = this._scrollView) === null || _a === void 0 ? void 0 : _a['hasNestedViewGroup']())
            return;
        this.curScrollIsTouch = true;
        var isMe = ev.eventPhase === cc.Event.AT_TARGET && ev.target === this.node;
        if (!isMe) {
            var itemNode = ev.target;
            while (itemNode._listId == null && itemNode.parent)
                itemNode = itemNode.parent;
            this._scrollItem = itemNode._listId != null ? itemNode : ev.target;
        }
    };
    //触摸抬起时..
    List.prototype._onTouchUp = function () {
        var t = this;
        t._scrollPos = null;
        if (t._slideMode == SlideType.ADHERING) {
            if (this.adhering)
                this._adheringBarrier = true;
            t.adhere();
        }
        else if (t._slideMode == SlideType.PAGE) {
            if (t._beganPos != null) {
                this._pageAdhere();
            }
            else {
                t.adhere();
            }
        }
        this._scrollItem = null;
    };
    List.prototype._onTouchCancelled = function (ev, captureListeners) {
        var _a;
        var t = this;
        if (((_a = t._scrollView) === null || _a === void 0 ? void 0 : _a['hasNestedViewGroup']()) || ev.simulate) //ev, captureListeners
            return;
        t._scrollPos = null;
        if (t._slideMode == SlideType.ADHERING) {
            if (t.adhering)
                t._adheringBarrier = true;
            t.adhere();
        }
        else if (t._slideMode == SlideType.PAGE) {
            if (t._beganPos != null) {
                t._pageAdhere();
            }
            else {
                t.adhere();
            }
        }
        this._scrollItem = null;
    };
    //当尺寸改变
    List.prototype._onSizeChanged = function () {
        if (this.checkInited(false))
            this._onScrolling();
    };
    //当Item自适应
    List.prototype._onItemAdaptive = function (item) {
        // if (this.checkInited(false)) {
        if ((!this._sizeType && item.width != this._itemSize.width)
            || (this._sizeType && item.height != this._itemSize.height)) {
            if (!this._customSize)
                this._customSize = {};
            var val = this._sizeType ? item.height : item.width;
            if (this._customSize[item._listId] != val) {
                this._customSize[item._listId] = val;
                this._resizeContent();
                // this.content.children.forEach((child: cc.Node) => {
                //     this._updateItemPos(child);
                // });
                this.updateAll();
                // 如果当前正在运行 scrollTo，肯定会不准确，在这里做修正
                if (this._scrollToListId != null) {
                    this._scrollPos = null;
                    this.unschedule(this._scrollToSo);
                    this.scrollTo(this._scrollToListId, Math.max(0, this._scrollToEndTime - ((new Date()).getTime() / 1000)));
                }
            }
        }
        // }
    };
    //PAGE粘附
    List.prototype._pageAdhere = function () {
        var t = this;
        if (!t.cyclic && (t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0))
            return;
        var curPos = t._sizeType ? t.viewTop : t.viewLeft;
        var dis = (t._sizeType ? t.node.height : t.node.width) * t.pageDistance;
        var canSkip = Math.abs(t._beganPos - curPos) > dis;
        if (canSkip) {
            var timeInSecond = .5;
            switch (t._alignCalcType) {
                case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                    if (t._beganPos > curPos) {
                        t.prePage(timeInSecond);
                        // cc.log('_pageAdhere   PPPPPPPPPPPPPPP');
                    }
                    else {
                        t.nextPage(timeInSecond);
                        // cc.log('_pageAdhere   NNNNNNNNNNNNNNN');
                    }
                    break;
                case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                    if (t._beganPos < curPos) {
                        t.prePage(timeInSecond);
                    }
                    else {
                        t.nextPage(timeInSecond);
                    }
                    break;
            }
        }
        else if (t.elasticTop <= 0 && t.elasticRight <= 0 && t.elasticBottom <= 0 && t.elasticLeft <= 0) {
            t.adhere();
        }
        t._beganPos = null;
    };
    //粘附
    List.prototype.adhere = function () {
        var t = this;
        if (!t.checkInited())
            return;
        if (t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0)
            return;
        t.adhering = true;
        t._calcNearestItem();
        var offset = (t._sizeType ? t._topGap : t._leftGap) / (t._sizeType ? t.node.height : t.node.width);
        var timeInSecond = .7;
        t.scrollTo(t.nearestListId, timeInSecond, offset);
    };
    //Update..
    List.prototype.update = function () {
        if (this.frameByFrameRenderNum <= 0 || this._updateDone)
            return;
        // cc.log(this.displayData.length, this._updateCounter, this.displayData[this._updateCounter]);
        if (this._virtual) {
            var len = (this._updateCounter + this.frameByFrameRenderNum) > this.displayItemNum ? this.displayItemNum : (this._updateCounter + this.frameByFrameRenderNum);
            for (var n = this._updateCounter; n < len; n++) {
                var data = this.displayData[n];
                if (data) {
                    this._createOrUpdateItem(data);
                }
            }
            if (this._updateCounter >= this.displayItemNum - 1) { //最后一个
                if (this._doneAfterUpdate) {
                    this._updateCounter = 0;
                    this._updateDone = false;
                    // if (!this._scrollView.isScrolling())
                    this._doneAfterUpdate = false;
                }
                else {
                    this._updateDone = true;
                    this._delRedundantItem();
                    this._forceUpdate = false;
                    this._calcNearestItem();
                    if (this.slideMode == SlideType.PAGE)
                        this.curPageNum = this.nearestListId;
                }
            }
            else {
                this._updateCounter += this.frameByFrameRenderNum;
            }
        }
        else {
            if (this._updateCounter < this._numItems) {
                var len = (this._updateCounter + this.frameByFrameRenderNum) > this._numItems ? this._numItems : (this._updateCounter + this.frameByFrameRenderNum);
                for (var n = this._updateCounter; n < len; n++) {
                    this._createOrUpdateItem2(n);
                }
                this._updateCounter += this.frameByFrameRenderNum;
            }
            else {
                this._updateDone = true;
                this._calcNearestItem();
                if (this.slideMode == SlideType.PAGE)
                    this.curPageNum = this.nearestListId;
            }
        }
    };
    /**
     * 创建或更新Item（虚拟列表用）
     * @param {Object} data 数据
     */
    List.prototype._createOrUpdateItem = function (data) {
        var item = this.getItemByListId(data.id);
        if (!item) { //如果不存在
            var canGet = this._pool.size() > 0;
            if (canGet) {
                item = this._pool.get();
                // cc.log('从池中取出::   旧id =', item['_listId'], '，新id =', data.id, item);
            }
            else {
                item = cc.instantiate(this._itemTmp);
                // cc.log('新建::', data.id, item);
            }
            if (!canGet || !cc.isValid(item)) {
                item = cc.instantiate(this._itemTmp);
                canGet = false;
            }
            if (item._listId != data.id) {
                item._listId = data.id;
                item.setContentSize(this._itemSize);
            }
            item.setPosition(cc.v2(data.x, data.y));
            this._resetItemSize(item);
            this.content.addChild(item);
            if (canGet && this._needUpdateWidget) {
                var widget = item.getComponent(cc.Widget);
                if (widget)
                    widget.updateAlignment();
            }
            item.setSiblingIndex(this.content.childrenCount - 1);
            var listItem = item.getComponent(ListItem_1.default);
            item['listItem'] = listItem;
            if (listItem) {
                listItem.listId = data.id;
                listItem.list = this;
                listItem._registerEvent();
            }
            if (this.renderEvent) {
                cc.Component.EventHandler.emitEvents([this.renderEvent], item, data.id % this._actualNumItems);
            }
        }
        else if (this._forceUpdate && this.renderEvent) { //强制更新
            item.setPosition(cc.v2(data.x, data.y));
            this._resetItemSize(item);
            // cc.log('ADD::', data.id, item);
            if (this.renderEvent) {
                cc.Component.EventHandler.emitEvents([this.renderEvent], item, data.id % this._actualNumItems);
            }
        }
        this._resetItemSize(item);
        this._updateListItem(item['listItem']);
        if (this._lastDisplayData.indexOf(data.id) < 0) {
            this._lastDisplayData.push(data.id);
        }
    };
    //创建或更新Item（非虚拟列表用）
    List.prototype._createOrUpdateItem2 = function (listId) {
        var item = this.content.children[listId];
        var listItem;
        if (!item) { //如果不存在
            item = cc.instantiate(this._itemTmp);
            item._listId = listId;
            this.content.addChild(item);
            listItem = item.getComponent(ListItem_1.default);
            item['listItem'] = listItem;
            if (listItem) {
                listItem.listId = listId;
                listItem.list = this;
                listItem._registerEvent();
            }
            if (this.renderEvent) {
                cc.Component.EventHandler.emitEvents([this.renderEvent], item, listId % this._actualNumItems);
            }
        }
        else if (this._forceUpdate && this.renderEvent) { //强制更新
            item._listId = listId;
            if (listItem)
                listItem.listId = listId;
            if (this.renderEvent) {
                cc.Component.EventHandler.emitEvents([this.renderEvent], item, listId % this._actualNumItems);
            }
        }
        this._updateListItem(listItem);
        if (this._lastDisplayData.indexOf(listId) < 0) {
            this._lastDisplayData.push(listId);
        }
    };
    List.prototype._updateListItem = function (listItem) {
        if (!listItem)
            return;
        if (this.selectedMode > SelectedType.NONE) {
            var item = listItem.node;
            switch (this.selectedMode) {
                case SelectedType.SINGLE:
                    listItem.selected = this.selectedId == item._listId;
                    break;
                case SelectedType.MULT:
                    listItem.selected = this.multSelected.indexOf(item._listId) >= 0;
                    break;
            }
        }
    };
    //仅虚拟列表用
    List.prototype._resetItemSize = function (item) {
        return;
        var size;
        if (this._customSize && this._customSize[item._listId]) {
            size = this._customSize[item._listId];
        }
        else {
            if (this._colLineNum > 1)
                item.setContentSize(this._itemSize);
            else
                size = this._sizeType ? this._itemSize.height : this._itemSize.width;
        }
        if (size) {
            if (this._sizeType)
                item.height = size;
            else
                item.width = size;
        }
    };
    /**
     * 更新Item位置
     * @param {Number||Node} listIdOrItem
     */
    List.prototype._updateItemPos = function (listIdOrItem) {
        var item = isNaN(listIdOrItem) ? listIdOrItem : this.getItemByListId(listIdOrItem);
        var pos = this.getItemPos(item._listId);
        item.setPosition(pos.x, pos.y);
    };
    /**
     * 设置多选
     * @param {Array} args 可以是单个listId，也可是个listId数组
     * @param {Boolean} bool 值，如果为null的话，则直接用args覆盖
     */
    List.prototype.setMultSelected = function (args, bool) {
        var t = this;
        if (!t.checkInited())
            return;
        if (!Array.isArray(args)) {
            args = [args];
        }
        if (bool == null) {
            t.multSelected = args;
        }
        else {
            var listId = void 0, sub = void 0;
            if (bool) {
                for (var n = args.length - 1; n >= 0; n--) {
                    listId = args[n];
                    sub = t.multSelected.indexOf(listId);
                    if (sub < 0) {
                        t.multSelected.push(listId);
                    }
                }
            }
            else {
                for (var n = args.length - 1; n >= 0; n--) {
                    listId = args[n];
                    sub = t.multSelected.indexOf(listId);
                    if (sub >= 0) {
                        t.multSelected.splice(sub, 1);
                    }
                }
            }
        }
        t._forceUpdate = true;
        t._onScrolling();
    };
    /**
     * 获取多选数据
     * @returns
     */
    List.prototype.getMultSelected = function () {
        return this.multSelected;
    };
    /**
     * 多选是否有选择
     * @param {number} listId 索引
     * @returns
     */
    List.prototype.hasMultSelected = function (listId) {
        return this.multSelected && this.multSelected.indexOf(listId) >= 0;
    };
    /**
     * 更新指定的Item
     * @param {Array} args 单个listId，或者数组
     * @returns
     */
    List.prototype.updateItem = function (args) {
        if (!this.checkInited())
            return;
        if (!Array.isArray(args)) {
            args = [args];
        }
        for (var n = 0, len = args.length; n < len; n++) {
            var listId = args[n];
            var item = this.getItemByListId(listId);
            if (item)
                cc.Component.EventHandler.emitEvents([this.renderEvent], item, listId % this._actualNumItems);
        }
    };
    /**
     * 更新全部
     */
    List.prototype.updateAll = function () {
        if (!this.checkInited())
            return;
        this.numItems = this.numItems;
    };
    /**
     * 根据ListID获取Item
     * @param {Number} listId
     * @returns
     */
    List.prototype.getItemByListId = function (listId) {
        if (this.content) {
            for (var n = this.content.childrenCount - 1; n >= 0; n--) {
                var item = this.content.children[n];
                if (item._listId == listId)
                    return item;
            }
        }
    };
    /**
     * 获取在显示区域外的Item
     * @returns
     */
    List.prototype._getOutsideItem = function () {
        var item;
        var result = [];
        for (var n = this.content.childrenCount - 1; n >= 0; n--) {
            item = this.content.children[n];
            if (!this.displayData.find(function (d) { return d.id == item._listId; })) {
                result.push(item);
            }
        }
        return result;
    };
    //删除显示区域以外的Item
    List.prototype._delRedundantItem = function () {
        if (this._virtual) {
            var arr = this._getOutsideItem();
            for (var n = arr.length - 1; n >= 0; n--) {
                var item = arr[n];
                if (this._scrollItem && item._listId == this._scrollItem._listId)
                    continue;
                item.isCached = true;
                this._pool.put(item);
                for (var m = this._lastDisplayData.length - 1; m >= 0; m--) {
                    if (this._lastDisplayData[m] == item._listId) {
                        this._lastDisplayData.splice(m, 1);
                        break;
                    }
                }
            }
            // cc.log('存入::', str, '    pool.length =', this._pool.length);
        }
        else {
            while (this.content.childrenCount > this._numItems) {
                this._delSingleItem(this.content.children[this.content.childrenCount - 1]);
            }
        }
    };
    //删除单个Item
    List.prototype._delSingleItem = function (item) {
        // cc.log('DEL::', item['_listId'], item);
        item.removeFromParent();
        if (item.destroy)
            item.destroy();
        item = null;
    };
    /**
     * 动效删除Item（此方法只适用于虚拟列表，即_virtual=true）
     * 一定要在回调函数里重新设置新的numItems进行刷新，毕竟本List是靠数据驱动的。
     */
    List.prototype.aniDelItem = function (listId, callFunc, aniType) {
        var t = this;
        if (!t.checkInited() || t.cyclic || !t._virtual)
            return cc.error('This function is not allowed to be called!');
        if (!callFunc)
            return cc.error('CallFunc are not allowed to be NULL, You need to delete the corresponding index in the data array in the CallFunc!');
        if (t._aniDelRuning)
            return cc.warn('Please wait for the current deletion to finish!');
        var item = t.getItemByListId(listId);
        var listItem;
        if (!item) {
            callFunc(listId);
            return;
        }
        else {
            listItem = item.getComponent(ListItem_1.default);
        }
        t._aniDelRuning = true;
        t._aniDelCB = callFunc;
        t._aniDelItem = item;
        t._aniDelBeforePos = item.position;
        t._aniDelBeforeScale = item.scale;
        var curLastId = t.displayData[t.displayData.length - 1].id;
        var resetSelectedId = listItem.selected;
        listItem.showAni(aniType, function () {
            //判断有没有下一个，如果有的话，创建粗来
            var newId;
            if (curLastId < t._numItems - 2) {
                newId = curLastId + 1;
            }
            if (newId != null) {
                var newData = t._calcItemPos(newId);
                t.displayData.push(newData);
                if (t._virtual)
                    t._createOrUpdateItem(newData);
                else
                    t._createOrUpdateItem2(newId);
            }
            else
                t._numItems--;
            if (t.selectedMode == SelectedType.SINGLE) {
                if (resetSelectedId) {
                    t._selectedId = -1;
                }
                else if (t._selectedId - 1 >= 0) {
                    t._selectedId--;
                }
            }
            else if (t.selectedMode == SelectedType.MULT && t.multSelected.length) {
                var sub = t.multSelected.indexOf(listId);
                if (sub >= 0) {
                    t.multSelected.splice(sub, 1);
                }
                //多选的数据，在其后的全部减一
                for (var n = t.multSelected.length - 1; n >= 0; n--) {
                    var id = t.multSelected[n];
                    if (id >= listId)
                        t.multSelected[n]--;
                }
            }
            if (t._customSize) {
                if (t._customSize[listId])
                    delete t._customSize[listId];
                var newCustomSize = {};
                var size = void 0;
                for (var id in t._customSize) {
                    size = t._customSize[id];
                    var idNumber = parseInt(id);
                    newCustomSize[idNumber - (idNumber >= listId ? 1 : 0)] = size;
                }
                t._customSize = newCustomSize;
            }
            //后面的Item向前怼的动效
            var sec = .2333;
            var tween, haveCB;
            for (var n = newId != null ? newId : curLastId; n >= listId + 1; n--) {
                item = t.getItemByListId(n);
                if (item) {
                    var posData = t._calcItemPos(n - 1);
                    tween = cc.tween(item)
                        .to(sec, { position: cc.v2(posData.x, posData.y) });
                    if (n <= listId + 1) {
                        haveCB = true;
                        tween.call(function () {
                            t._aniDelRuning = false;
                            callFunc(listId);
                            delete t._aniDelCB;
                        });
                    }
                    tween.start();
                }
            }
            if (!haveCB) {
                t._aniDelRuning = false;
                callFunc(listId);
                t._aniDelCB = null;
            }
        }, true);
    };
    /**
     * 滚动到..
     * @param {Number} listId 索引（如果<0，则滚到首个Item位置，如果>=_numItems，则滚到最末Item位置）
     * @param {Number} timeInSecond 时间
     * @param {Number} offset 索引目标位置偏移，0-1
     * @param {Boolean} overStress 滚动后是否强调该Item（这只是个实验功能）
     */
    List.prototype.scrollTo = function (listId, timeInSecond, offset, overStress) {
        if (timeInSecond === void 0) { timeInSecond = .5; }
        if (offset === void 0) { offset = null; }
        if (overStress === void 0) { overStress = false; }
        var t = this;
        if (!t.checkInited(false))
            return;
        // t._scrollView.stopAutoScroll();
        if (timeInSecond == null) //默认0.5
            timeInSecond = .5;
        else if (timeInSecond < 0)
            timeInSecond = 0;
        if (listId < 0)
            listId = 0;
        else if (listId >= t._numItems)
            listId = t._numItems - 1;
        // 以防设置了numItems之后layout的尺寸还未更新
        if (!t._virtual && t._layout && t._layout.enabled)
            t._layout.updateLayout();
        var pos = t.getItemPos(listId);
        if (!pos) {
            return CC_DEV && cc.error('pos is null', listId);
        }
        var targetX, targetY;
        switch (t._alignCalcType) {
            case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                targetX = pos.left;
                if (offset != null)
                    targetX -= t.node.width * offset;
                else
                    targetX -= t._leftGap;
                pos = cc.v2(targetX, 0);
                break;
            case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                targetX = pos.right - t.node.width;
                if (offset != null)
                    targetX += t.node.width * offset;
                else
                    targetX += t._rightGap;
                pos = cc.v2(targetX + t.content.width, 0);
                break;
            case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                targetY = pos.top;
                if (offset != null)
                    targetY += t.node.height * offset;
                else
                    targetY += t._topGap;
                pos = cc.v2(0, -targetY);
                break;
            case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                targetY = pos.bottom + t.node.height;
                if (offset != null)
                    targetY -= t.node.height * offset;
                else
                    targetY -= t._bottomGap;
                pos = cc.v2(0, -targetY + t.content.height);
                break;
        }
        var viewPos = t.content.getPosition();
        viewPos = Math.abs(t._sizeType ? viewPos.y : viewPos.x);
        var comparePos = t._sizeType ? pos.y : pos.x;
        var runScroll = Math.abs((t._scrollPos != null ? t._scrollPos : viewPos) - comparePos) > .5;
        // cc.log(runScroll, t._scrollPos, viewPos, comparePos)
        // t._scrollView.stopAutoScroll();
        if (runScroll) {
            t._scrollView.scrollToOffset(pos, timeInSecond);
            t._scrollToListId = listId;
            t._scrollToEndTime = ((new Date()).getTime() / 1000) + timeInSecond;
            // cc.log(listId, t.content.width, t.content.getPosition(), pos);
            t._scrollToSo = t.scheduleOnce(function () {
                if (!t._adheringBarrier) {
                    t.adhering = t._adheringBarrier = false;
                }
                t._scrollPos =
                    t._scrollToListId =
                        t._scrollToEndTime =
                            t._scrollToSo =
                                null;
                //cc.log('2222222222', t._adheringBarrier)
                if (overStress) {
                    // t.scrollToListId = listId;
                    var item = t.getItemByListId(listId);
                    if (item) {
                        cc.tween(item)
                            .to(.1, { scale: 1.05 })
                            .to(.1, { scale: 1 })
                            .start();
                    }
                }
            }, timeInSecond + .1);
            if (timeInSecond <= 0) {
                t._onScrolling();
            }
        }
    };
    /**
     * 计算当前滚动窗最近的Item
     */
    List.prototype._calcNearestItem = function () {
        var t = this;
        t.nearestListId = null;
        var data, center;
        if (t._virtual)
            t._calcViewPos();
        var vTop, vRight, vBottom, vLeft;
        vTop = t.viewTop;
        vRight = t.viewRight;
        vBottom = t.viewBottom;
        vLeft = t.viewLeft;
        var breakFor = false;
        for (var n = 0; n < t.content.childrenCount && !breakFor; n += t._colLineNum) {
            data = t._virtual ? t.displayData[n] : t._calcExistItemPos(n);
            if (data) {
                center = t._sizeType ? ((data.top + data.bottom) / 2) : (center = (data.left + data.right) / 2);
                switch (t._alignCalcType) {
                    case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                        if (data.right >= vLeft) {
                            t.nearestListId = data.id;
                            if (vLeft > center)
                                t.nearestListId += t._colLineNum;
                            breakFor = true;
                        }
                        break;
                    case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                        if (data.left <= vRight) {
                            t.nearestListId = data.id;
                            if (vRight < center)
                                t.nearestListId += t._colLineNum;
                            breakFor = true;
                        }
                        break;
                    case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                        if (data.bottom <= vTop) {
                            t.nearestListId = data.id;
                            if (vTop < center)
                                t.nearestListId += t._colLineNum;
                            breakFor = true;
                        }
                        break;
                    case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                        if (data.top >= vBottom) {
                            t.nearestListId = data.id;
                            if (vBottom > center)
                                t.nearestListId += t._colLineNum;
                            breakFor = true;
                        }
                        break;
                }
            }
        }
        //判断最后一个Item。。。（哎，这些判断真心恶心，判断了前面的还要判断最后一个。。。一开始呢，就只有一个布局（单列布局），那时候代码才三百行，后来就想着完善啊，艹..这坑真深，现在这行数都一千五了= =||）
        data = t._virtual ? t.displayData[t.displayItemNum - 1] : t._calcExistItemPos(t._numItems - 1);
        if (data && data.id == t._numItems - 1) {
            center = t._sizeType ? ((data.top + data.bottom) / 2) : (center = (data.left + data.right) / 2);
            switch (t._alignCalcType) {
                case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                    if (vRight > center)
                        t.nearestListId = data.id;
                    break;
                case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                    if (vLeft < center)
                        t.nearestListId = data.id;
                    break;
                case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                    if (vBottom < center)
                        t.nearestListId = data.id;
                    break;
                case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                    if (vTop > center)
                        t.nearestListId = data.id;
                    break;
            }
        }
        // cc.log('t.nearestListId =', t.nearestListId);
    };
    //上一页
    List.prototype.prePage = function (timeInSecond) {
        if (timeInSecond === void 0) { timeInSecond = .5; }
        // cc.log('👈');
        if (!this.checkInited())
            return;
        this.skipPage(this.curPageNum - 1, timeInSecond);
    };
    //下一页
    List.prototype.nextPage = function (timeInSecond) {
        if (timeInSecond === void 0) { timeInSecond = .5; }
        // cc.log('👉');
        if (!this.checkInited())
            return;
        this.skipPage(this.curPageNum + 1, timeInSecond);
    };
    //跳转到第几页
    List.prototype.skipPage = function (pageNum, timeInSecond) {
        var t = this;
        if (!t.checkInited())
            return;
        if (t._slideMode != SlideType.PAGE)
            return cc.error('This function is not allowed to be called, Must SlideMode = PAGE!');
        if (pageNum < 0 || pageNum >= t._numItems)
            return;
        if (t.curPageNum == pageNum)
            return;
        // cc.log(pageNum);
        t.curPageNum = pageNum;
        if (t.pageChangeEvent) {
            cc.Component.EventHandler.emitEvents([t.pageChangeEvent], pageNum);
        }
        t.scrollTo(pageNum, timeInSecond);
    };
    //计算 CustomSize（这个函数还是保留吧，某些罕见的情况的确还是需要手动计算customSize的）
    List.prototype.calcCustomSize = function (numItems) {
        var t = this;
        if (!t.checkInited())
            return;
        if (!t._itemTmp)
            return cc.error('Unset template item!');
        if (!t.renderEvent)
            return cc.error('Unset Render-Event!');
        t._customSize = {};
        var temp = cc.instantiate(t._itemTmp);
        t.content.addChild(temp);
        for (var n = 0; n < numItems; n++) {
            cc.Component.EventHandler.emitEvents([t.renderEvent], temp, n);
            if (temp.height != t._itemSize.height || temp.width != t._itemSize.width) {
                t._customSize[n] = t._sizeType ? temp.height : temp.width;
            }
        }
        if (!Object.keys(t._customSize).length)
            t._customSize = null;
        temp.removeFromParent();
        if (temp.destroy)
            temp.destroy();
        return t._customSize;
    };
    __decorate([
        property({ type: cc.Enum(TemplateType), tooltip: CC_DEV && '模板类型', })
    ], List.prototype, "templateType", void 0);
    __decorate([
        property({
            type: cc.Node,
            tooltip: CC_DEV && '模板Item',
            visible: function () { return this.templateType == TemplateType.NODE; }
        })
    ], List.prototype, "tmpNode", void 0);
    __decorate([
        property({
            type: cc.Prefab,
            tooltip: CC_DEV && '模板Item',
            visible: function () { return this.templateType == TemplateType.PREFAB; }
        })
    ], List.prototype, "tmpPrefab", void 0);
    __decorate([
        property()
    ], List.prototype, "_slideMode", void 0);
    __decorate([
        property({
            type: cc.Enum(SlideType),
            tooltip: CC_DEV && '滑动模式'
        })
    ], List.prototype, "slideMode", null);
    __decorate([
        property({
            type: cc.Float,
            range: [0, 1, .1],
            tooltip: CC_DEV && '翻页作用距离',
            slide: true,
            visible: function () { return this._slideMode == SlideType.PAGE; }
        })
    ], List.prototype, "pageDistance", void 0);
    __decorate([
        property({
            type: cc.Component.EventHandler,
            tooltip: CC_DEV && '页面改变事件',
            visible: function () { return this._slideMode == SlideType.PAGE; }
        })
    ], List.prototype, "pageChangeEvent", void 0);
    __decorate([
        property()
    ], List.prototype, "_virtual", void 0);
    __decorate([
        property({
            type: cc.Boolean,
            tooltip: CC_DEV && '是否为虚拟列表（动态列表）'
        })
    ], List.prototype, "virtual", null);
    __decorate([
        property({
            tooltip: CC_DEV && '是否为循环列表',
            visible: function () {
                var val = this.slideMode == SlideType.NORMAL;
                if (!val)
                    this.cyclic = false;
                return val;
            }
        })
    ], List.prototype, "cyclic", void 0);
    __decorate([
        property({
            tooltip: CC_DEV && 'Item数量不足以填满Content时，是否居中显示Item（不支持Grid布局）',
            visible: function () { return this.virtual; }
        })
    ], List.prototype, "lackCenter", void 0);
    __decorate([
        property({
            tooltip: CC_DEV && 'Item数量不足以填满Content时，是否可滑动',
            visible: function () {
                var val = this.virtual && !this.lackCenter;
                if (!val)
                    this.lackSlide = false;
                return val;
            }
        })
    ], List.prototype, "lackSlide", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], List.prototype, "_updateRate", void 0);
    __decorate([
        property({
            type: cc.Integer,
            range: [0, 6, 1],
            tooltip: CC_DEV && '刷新频率（值越大刷新频率越低、性能越高）',
            slide: true,
        })
    ], List.prototype, "updateRate", null);
    __decorate([
        property({
            type: cc.Integer,
            range: [0, 12, 1],
            tooltip: CC_DEV && '逐帧渲染时，每帧渲染的Item数量（<=0时关闭分帧渲染）',
            slide: true,
        })
    ], List.prototype, "frameByFrameRenderNum", void 0);
    __decorate([
        property({
            type: cc.Component.EventHandler,
            tooltip: CC_DEV && '渲染事件（渲染器）',
        })
    ], List.prototype, "renderEvent", void 0);
    __decorate([
        property({
            type: cc.Enum(SelectedType),
            tooltip: CC_DEV && '选择模式'
        })
    ], List.prototype, "selectedMode", void 0);
    __decorate([
        property({
            tooltip: CC_DEV && '是否重复响应单选事件',
            visible: function () { return this.selectedMode == SelectedType.SINGLE; }
        })
    ], List.prototype, "repeatEventSingle", void 0);
    __decorate([
        property({
            type: cc.Component.EventHandler,
            tooltip: CC_DEV && '触发选择事件',
            visible: function () { return this.selectedMode > SelectedType.NONE; }
        })
    ], List.prototype, "selectedEvent", void 0);
    __decorate([
        property({
            serializable: false
        })
    ], List.prototype, "_numItems", void 0);
    List = __decorate([
        ccclass,
        disallowMultiple(),
        menu('自定义组件/List'),
        requireComponent(cc.ScrollView)
        //脚本生命周期回调的执行优先级。小于 0 的脚本将优先执行，大于 0 的脚本将最后执行。该优先级只对 onLoad, onEnable, start, update 和 lateUpdate 有效，对 onDisable 和 onDestroy 无效。
        ,
        executionOrder(-5000)
    ], List);
    return List;
}(cc.Component));
exports.default = List;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMF9iYXNlXFxzY3JpcHRcXGxpc3RcXExpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OzRDQUs0QztBQUN0QyxJQUFBLEtBQWtGLEVBQUUsQ0FBQyxVQUFVLEVBQTdGLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGdCQUFnQixzQkFBQSxFQUFFLElBQUksVUFBQSxFQUFFLGNBQWMsb0JBQUEsRUFBRSxnQkFBZ0Isc0JBQWtCLENBQUM7QUFFdEcsdUNBQWtDO0FBRWxDLElBQUssWUFHSjtBQUhELFdBQUssWUFBWTtJQUNiLCtDQUFRLENBQUE7SUFDUixtREFBVSxDQUFBO0FBQ2QsQ0FBQyxFQUhJLFlBQVksS0FBWixZQUFZLFFBR2hCO0FBRUQsSUFBSyxTQUlKO0FBSkQsV0FBSyxTQUFTO0lBQ1YsNkNBQVUsQ0FBQTtJQUNWLGlEQUFZLENBQUE7SUFDWix5Q0FBUSxDQUFBO0FBQ1osQ0FBQyxFQUpJLFNBQVMsS0FBVCxTQUFTLFFBSWI7QUFFRCxJQUFLLFlBSUo7QUFKRCxXQUFLLFlBQVk7SUFDYiwrQ0FBUSxDQUFBO0lBQ1IsbURBQVUsQ0FBQTtJQUNWLCtDQUFRLENBQUE7QUFDWixDQUFDLEVBSkksWUFBWSxLQUFaLFlBQVksUUFJaEI7QUFRRDtJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQW1nRUM7UUFsZ0VHLE1BQU07UUFFRSxrQkFBWSxHQUFpQixZQUFZLENBQUMsSUFBSSxDQUFDO1FBQ3ZELGNBQWM7UUFNZCxhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGdCQUFnQjtRQU1oQixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBQzVCLE1BQU07UUFFRSxnQkFBVSxHQUFjLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFXakQsUUFBUTtRQVFELGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQ2pDLFFBQVE7UUFNQSxxQkFBZSxHQUE4QixJQUFJ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LEVBQUUsQ0FBQyxVQUFVLENBQUM7UUFDaEMsK0hBQStIOztRQUM5SCxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUM7T0FDRCxJQUFJLENBbWdFeEI7SUFBRCxXQUFDO0NBbmdFRCxBQW1nRUMsQ0FuZ0VpQyxFQUFFLENBQUMsU0FBUyxHQW1nRTdDO2tCQW5nRW9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIEBhdXRob3Iga0wgPGtsazBAcXEuY29tPlxyXG4gKiBAZGF0ZSAyMDE5LzYvNlxyXG4gKiBAZG9jIOWIl+ihqOe7hOS7ti5cclxuICogQGVuZFxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBkaXNhbGxvd011bHRpcGxlLCBtZW51LCBleGVjdXRpb25PcmRlciwgcmVxdWlyZUNvbXBvbmVudCB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICcuL0xpc3RJdGVtJztcclxuXHJcbmVudW0gVGVtcGxhdGVUeXBlIHtcclxuICAgIE5PREUgPSAxLFxyXG4gICAgUFJFRkFCID0gMixcclxufVxyXG5cclxuZW51bSBTbGlkZVR5cGUge1xyXG4gICAgTk9STUFMID0gMSwvL+aZrumAmlxyXG4gICAgQURIRVJJTkcgPSAyLC8v57KY6ZmE5qih5byP77yM5bCG5by65Yi25YWz6Zet5rua5Yqo5oOv5oCnXHJcbiAgICBQQUdFID0gMywvL+mhtemdouaooeW8j++8jOWwhuW8uuWItuWFs+mXrea7muWKqOaDr+aAp1xyXG59XHJcblxyXG5lbnVtIFNlbGVjdGVkVHlwZSB7XHJcbiAgICBOT05FID0gMCxcclxuICAgIFNJTkdMRSA9IDEsLy/ljZXpgIlcclxuICAgIE1VTFQgPSAyLC8v5aSa6YCJXHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbkBkaXNhbGxvd011bHRpcGxlKClcclxuQG1lbnUoJ+iHquWumuS5iee7hOS7ti9MaXN0JylcclxuQHJlcXVpcmVDb21wb25lbnQoY2MuU2Nyb2xsVmlldylcclxuLy/ohJrmnKznlJ/lkb3lkajmnJ/lm57osIPnmoTmiafooYzkvJjlhYjnuqfjgILlsI/kuo4gMCDnmoTohJrmnKzlsIbkvJjlhYjmiafooYzvvIzlpKfkuo4gMCDnmoTohJrmnKzlsIbmnIDlkI7miafooYzjgILor6XkvJjlhYjnuqflj6rlr7kgb25Mb2FkLCBvbkVuYWJsZSwgc3RhcnQsIHVwZGF0ZSDlkowgbGF0ZVVwZGF0ZSDmnInmlYjvvIzlr7kgb25EaXNhYmxlIOWSjCBvbkRlc3Ryb3kg5peg5pWI44CCXHJcbkBleGVjdXRpb25PcmRlcigtNTAwMClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICAvL+aooeadv+exu+Wei1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuRW51bShUZW1wbGF0ZVR5cGUpLCB0b29sdGlwOiBDQ19ERVYgJiYgJ+aooeadv+exu+WeiycsIH0pXHJcbiAgICBwcml2YXRlIHRlbXBsYXRlVHlwZTogVGVtcGxhdGVUeXBlID0gVGVtcGxhdGVUeXBlLk5PREU7XHJcbiAgICAvL+aooeadv0l0ZW3vvIhOb2Rl77yJXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfmqKHmnb9JdGVtJyxcclxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy50ZW1wbGF0ZVR5cGUgPT0gVGVtcGxhdGVUeXBlLk5PREU7IH1cclxuICAgIH0pXHJcbiAgICB0bXBOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8v5qih5p2/SXRlbe+8iFByZWZhYu+8iVxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfmqKHmnb9JdGVtJyxcclxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy50ZW1wbGF0ZVR5cGUgPT0gVGVtcGxhdGVUeXBlLlBSRUZBQjsgfVxyXG4gICAgfSlcclxuICAgIHRtcFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIC8v5ruR5Yqo5qih5byPXHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgcHJpdmF0ZSBfc2xpZGVNb2RlOiBTbGlkZVR5cGUgPSBTbGlkZVR5cGUuTk9STUFMO1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5FbnVtKFNsaWRlVHlwZSksXHJcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfmu5HliqjmqKHlvI8nXHJcbiAgICB9KVxyXG4gICAgc2V0IHNsaWRlTW9kZSh2YWw6IFNsaWRlVHlwZSkge1xyXG4gICAgICAgIHRoaXMuX3NsaWRlTW9kZSA9IHZhbDtcclxuICAgIH1cclxuICAgIGdldCBzbGlkZU1vZGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NsaWRlTW9kZTtcclxuICAgIH1cclxuICAgIC8v57+76aG15L2c55So6Led56a7XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkZsb2F0LFxyXG4gICAgICAgIHJhbmdlOiBbMCwgMSwgLjFdLFxyXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAn57+76aG15L2c55So6Led56a7JyxcclxuICAgICAgICBzbGlkZTogdHJ1ZSxcclxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5fc2xpZGVNb2RlID09IFNsaWRlVHlwZS5QQUdFOyB9XHJcbiAgICB9KVxyXG4gICAgcHVibGljIHBhZ2VEaXN0YW5jZTogbnVtYmVyID0gLjM7XHJcbiAgICAvL+mhtemdouaUueWPmOS6i+S7tlxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLFxyXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAn6aG16Z2i5pS55Y+Y5LqL5Lu2JyxcclxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5fc2xpZGVNb2RlID09IFNsaWRlVHlwZS5QQUdFOyB9XHJcbiAgICB9KVxyXG4gICAgcHJpdmF0ZSBwYWdlQ2hhbmdlRXZlbnQ6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgLy/mmK/lkKbkuLromZrmi5/liJfooajvvIjliqjmgIHliJfooajvvIlcclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBwcml2YXRlIF92aXJ0dWFsOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuQm9vbGVhbixcclxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+aYr+WQpuS4uuiZmuaLn+WIl+ihqO+8iOWKqOaAgeWIl+ihqO+8iSdcclxuICAgIH0pXHJcbiAgICBzZXQgdmlydHVhbCh2YWw6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodmFsICE9IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMuX3ZpcnR1YWwgPSB2YWw7XHJcbiAgICAgICAgaWYgKCFDQ19ERVYgJiYgdGhpcy5fbnVtSXRlbXMgIT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9vblNjcm9sbGluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCB2aXJ0dWFsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92aXJ0dWFsO1xyXG4gICAgfVxyXG4gICAgLy/mmK/lkKbkuLrlvqrnjq/liJfooahcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfmmK/lkKbkuLrlvqrnjq/liJfooagnLFxyXG4gICAgICAgIHZpc2libGUoKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWw6IGJvb2xlYW4gPSAvKnRoaXMudmlydHVhbCAmJiovIHRoaXMuc2xpZGVNb2RlID09IFNsaWRlVHlwZS5OT1JNQUw7XHJcbiAgICAgICAgICAgIGlmICghdmFsKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jeWNsaWMgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgcHVibGljIGN5Y2xpYzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLy/nvLrnnIHlsYXkuK1cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICdJdGVt5pWw6YeP5LiN6Laz5Lul5aGr5ruhQ29udGVudOaXtu+8jOaYr+WQpuWxheS4reaYvuekukl0ZW3vvIjkuI3mlK/mjIFHcmlk5biD5bGA77yJJyxcclxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy52aXJ0dWFsOyB9XHJcbiAgICB9KVxyXG4gICAgcHVibGljIGxhY2tDZW50ZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8v57y655yB5Y+v5ruR5YqoXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAnSXRlbeaVsOmHj+S4jei2s+S7peWhq+a7oUNvbnRlbnTml7bvvIzmmK/lkKblj6/mu5HliqgnLFxyXG4gICAgICAgIHZpc2libGUoKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWw6IGJvb2xlYW4gPSB0aGlzLnZpcnR1YWwgJiYgIXRoaXMubGFja0NlbnRlcjtcclxuICAgICAgICAgICAgaWYgKCF2YWwpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhY2tTbGlkZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBwdWJsaWMgbGFja1NsaWRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvL+WIt+aWsOmikeeOh1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciB9KVxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlUmF0ZTogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuSW50ZWdlcixcclxuICAgICAgICByYW5nZTogWzAsIDYsIDFdLFxyXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAn5Yi35paw6aKR546H77yI5YC86LaK5aSn5Yi35paw6aKR546H6LaK5L2O44CB5oCn6IO96LaK6auY77yJJyxcclxuICAgICAgICBzbGlkZTogdHJ1ZSxcclxuICAgIH0pXHJcbiAgICBzZXQgdXBkYXRlUmF0ZSh2YWw6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh2YWwgPj0gMCAmJiB2YWwgPD0gNikge1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVSYXRlID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCB1cGRhdGVSYXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91cGRhdGVSYXRlO1xyXG4gICAgfVxyXG4gICAgLy/liIbluKfmuLLmn5PvvIjmr4/luKfmuLLmn5PnmoRJdGVt5pWw6YeP77yIPD0w5pe25YWz6Zet5YiG5bin5riy5p+T77yJ77yJXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkludGVnZXIsXHJcbiAgICAgICAgcmFuZ2U6IFswLCAxMiwgMV0sXHJcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfpgJDluKfmuLLmn5Pml7bvvIzmr4/luKfmuLLmn5PnmoRJdGVt5pWw6YeP77yIPD0w5pe25YWz6Zet5YiG5bin5riy5p+T77yJJyxcclxuICAgICAgICBzbGlkZTogdHJ1ZSxcclxuICAgIH0pXHJcbiAgICBwdWJsaWMgZnJhbWVCeUZyYW1lUmVuZGVyTnVtOiBudW1iZXIgPSAwO1xyXG4gICAgLy/muLLmn5Pkuovku7bvvIjmuLLmn5PlmajvvIlcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcixcclxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+a4suafk+S6i+S7tu+8iOa4suafk+WZqO+8iScsXHJcbiAgICB9KVxyXG4gICAgcHJpdmF0ZSByZW5kZXJFdmVudDogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAvL+mAieaLqeaooeW8j1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5FbnVtKFNlbGVjdGVkVHlwZSksXHJcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfpgInmi6nmqKHlvI8nXHJcbiAgICB9KVxyXG4gICAgcHVibGljIHNlbGVjdGVkTW9kZTogU2VsZWN0ZWRUeXBlID0gU2VsZWN0ZWRUeXBlLk5PTkU7XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAn5piv5ZCm6YeN5aSN5ZON5bqU5Y2V6YCJ5LqL5Lu2JyxcclxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5zZWxlY3RlZE1vZGUgPT0gU2VsZWN0ZWRUeXBlLlNJTkdMRTsgfVxyXG4gICAgfSlcclxuICAgIHB1YmxpYyByZXBlYXRFdmVudFNpbmdsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLy/op6blj5HpgInmi6nkuovku7ZcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcixcclxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+inpuWPkemAieaLqeS6i+S7ticsXHJcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMuc2VsZWN0ZWRNb2RlID4gU2VsZWN0ZWRUeXBlLk5PTkU7IH1cclxuICAgIH0pXHJcbiAgICBwcml2YXRlIHNlbGVjdGVkRXZlbnQ6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgLy/lvZPliY3pgInmi6lpZFxyXG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWRJZDogbnVtYmVyID0gLTE7XHJcbiAgICBwcml2YXRlIF9sYXN0U2VsZWN0ZWRJZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBtdWx0U2VsZWN0ZWQ6IG51bWJlcltdO1xyXG4gICAgc2V0IHNlbGVjdGVkSWQodmFsOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcclxuICAgICAgICBsZXQgaXRlbTogYW55O1xyXG4gICAgICAgIHN3aXRjaCAodC5zZWxlY3RlZE1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBTZWxlY3RlZFR5cGUuU0lOR0xFOiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXQucmVwZWF0RXZlbnRTaW5nbGUgJiYgdmFsID09IHQuX3NlbGVjdGVkSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IHQuZ2V0SXRlbUJ5TGlzdElkKHZhbCk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoIWl0ZW0gJiYgdmFsID49IDApXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpc3RJdGVtOiBMaXN0SXRlbTtcclxuICAgICAgICAgICAgICAgIGlmICh0Ll9zZWxlY3RlZElkID49IDApXHJcbiAgICAgICAgICAgICAgICAgICAgdC5fbGFzdFNlbGVjdGVkSWQgPSB0Ll9zZWxlY3RlZElkO1xyXG4gICAgICAgICAgICAgICAgZWxzZSAvL+WmguaenO+8nDDliJnlj5bmtojpgInmi6nvvIzmiopfbGFzdFNlbGVjdGVkSWTkuZ/nva7nqbrlkKfvvIzlpoLmnpzku6XlkI7mnInnibnmrorpnIDmsYLlho3mlLnlkKfjgIJcclxuICAgICAgICAgICAgICAgICAgICB0Ll9sYXN0U2VsZWN0ZWRJZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0Ll9zZWxlY3RlZElkID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbSA9IGl0ZW0uZ2V0Q29tcG9uZW50KExpc3RJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodC5fbGFzdFNlbGVjdGVkSWQgPj0gMCAmJiB0Ll9sYXN0U2VsZWN0ZWRJZCAhPSB0Ll9zZWxlY3RlZElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3RJdGVtOiBhbnkgPSB0LmdldEl0ZW1CeUxpc3RJZCh0Ll9sYXN0U2VsZWN0ZWRJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RJdGVtLmdldENvbXBvbmVudChMaXN0SXRlbSkuc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodC5zZWxlY3RlZEV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFt0LnNlbGVjdGVkRXZlbnRdLCBpdGVtLCB2YWwgJSB0aGlzLl9hY3R1YWxOdW1JdGVtcywgdC5fbGFzdFNlbGVjdGVkSWQgPT0gbnVsbCA/IG51bGwgOiAodC5fbGFzdFNlbGVjdGVkSWQgJSB0aGlzLl9hY3R1YWxOdW1JdGVtcykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTZWxlY3RlZFR5cGUuTVVMVDoge1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IHQuZ2V0SXRlbUJ5TGlzdElkKHZhbCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0pXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpc3RJdGVtID0gaXRlbS5nZXRDb21wb25lbnQoTGlzdEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHQuX3NlbGVjdGVkSWQgPj0gMClcclxuICAgICAgICAgICAgICAgICAgICB0Ll9sYXN0U2VsZWN0ZWRJZCA9IHQuX3NlbGVjdGVkSWQ7XHJcbiAgICAgICAgICAgICAgICB0Ll9zZWxlY3RlZElkID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJvb2w6IGJvb2xlYW4gPSAhbGlzdEl0ZW0uc2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICBsaXN0SXRlbS5zZWxlY3RlZCA9IGJvb2w7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3ViOiBudW1iZXIgPSB0Lm11bHRTZWxlY3RlZC5pbmRleE9mKHZhbCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm9vbCAmJiBzdWIgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5tdWx0U2VsZWN0ZWQucHVzaCh2YWwpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghYm9vbCAmJiBzdWIgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHQubXVsdFNlbGVjdGVkLnNwbGljZShzdWIsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHQuc2VsZWN0ZWRFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhbdC5zZWxlY3RlZEV2ZW50XSwgaXRlbSwgdmFsICUgdGhpcy5fYWN0dWFsTnVtSXRlbXMsIHQuX2xhc3RTZWxlY3RlZElkID09IG51bGwgPyBudWxsIDogKHQuX2xhc3RTZWxlY3RlZElkICUgdGhpcy5fYWN0dWFsTnVtSXRlbXMpLCBib29sKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IHNlbGVjdGVkSWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSWQ7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9mb3JjZVVwZGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfYWxpZ246IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2hvcml6b250YWxEaXI6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3ZlcnRpY2FsRGlyOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9zdGFydEF4aXM6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2FsaWduQ2FsY1R5cGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBjb250ZW50OiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBmaXJzdExpc3RJZDogbnVtYmVyO1xyXG4gICAgcHVibGljIGRpc3BsYXlJdGVtTnVtOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF91cGRhdGVEb25lOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgX3VwZGF0ZUNvdW50ZXI6IG51bWJlcjtcclxuICAgIHB1YmxpYyBfYWN0dWFsTnVtSXRlbXM6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2N5Y2xpY051bTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfY3ljbGljUG9zMTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfY3ljbGljUG9zMjogbnVtYmVyO1xyXG4gICAgLy/liJfooajmlbDph49cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgc2VyaWFsaXphYmxlOiBmYWxzZVxyXG4gICAgfSlcclxuICAgIHByaXZhdGUgX251bUl0ZW1zOiBudW1iZXIgPSAwO1xyXG4gICAgc2V0IG51bUl0ZW1zKHZhbDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHQgPSB0aGlzO1xyXG4gICAgICAgIGlmICghdC5jaGVja0luaXRlZChmYWxzZSkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZiAodmFsID09IG51bGwgfHwgdmFsIDwgMCkge1xyXG4gICAgICAgICAgICBjYy5lcnJvcignbnVtSXRlbXMgc2V0IHRoZSB3cm9uZzo6JywgdmFsKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0Ll9hY3R1YWxOdW1JdGVtcyA9IHQuX251bUl0ZW1zID0gdmFsO1xyXG4gICAgICAgIHQuX2ZvcmNlVXBkYXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKHQuX3ZpcnR1YWwpIHtcclxuICAgICAgICAgICAgdC5fcmVzaXplQ29udGVudCgpO1xyXG4gICAgICAgICAgICBpZiAodC5jeWNsaWMpIHtcclxuICAgICAgICAgICAgICAgIHQuX251bUl0ZW1zID0gdC5fY3ljbGljTnVtICogdC5fbnVtSXRlbXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdC5fb25TY3JvbGxpbmcoKTtcclxuICAgICAgICAgICAgaWYgKCF0LmZyYW1lQnlGcmFtZVJlbmRlck51bSAmJiB0LnNsaWRlTW9kZSA9PSBTbGlkZVR5cGUuUEFHRSlcclxuICAgICAgICAgICAgICAgIHQuY3VyUGFnZU51bSA9IHQubmVhcmVzdExpc3RJZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodC5jeWNsaWMpIHtcclxuICAgICAgICAgICAgICAgIHQuX3Jlc2l6ZUNvbnRlbnQoKTtcclxuICAgICAgICAgICAgICAgIHQuX251bUl0ZW1zID0gdC5fY3ljbGljTnVtICogdC5fbnVtSXRlbXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGxheW91dDogY2MuTGF5b3V0ID0gdC5jb250ZW50LmdldENvbXBvbmVudChjYy5MYXlvdXQpO1xyXG4gICAgICAgICAgICBpZiAobGF5b3V0KSB7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXQuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdC5fZGVsUmVkdW5kYW50SXRlbSgpO1xyXG5cclxuICAgICAgICAgICAgdC5maXJzdExpc3RJZCA9IDA7XHJcbiAgICAgICAgICAgIGlmICh0LmZyYW1lQnlGcmFtZVJlbmRlck51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgIC8v5YWI5riy5p+T5Yeg5Liq5Ye65p2lXHJcbiAgICAgICAgICAgICAgICBsZXQgbGVuOiBudW1iZXIgPSB0LmZyYW1lQnlGcmFtZVJlbmRlck51bSA+IHQuX251bUl0ZW1zID8gdC5fbnVtSXRlbXMgOiB0LmZyYW1lQnlGcmFtZVJlbmRlck51bTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IG46IG51bWJlciA9IDA7IG4gPCBsZW47IG4rKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHQuX2NyZWF0ZU9yVXBkYXRlSXRlbTIobik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodC5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0gPCB0Ll9udW1JdGVtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHQuX3VwZGF0ZUNvdW50ZXIgPSB0LmZyYW1lQnlGcmFtZVJlbmRlck51bTtcclxuICAgICAgICAgICAgICAgICAgICB0Ll91cGRhdGVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBuOiBudW1iZXIgPSAwOyBuIDwgdC5fbnVtSXRlbXM7IG4rKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHQuX2NyZWF0ZU9yVXBkYXRlSXRlbTIobik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0LmRpc3BsYXlJdGVtTnVtID0gdC5fbnVtSXRlbXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgbnVtSXRlbXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdHVhbE51bUl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2luaXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfc2Nyb2xsVmlldzogY2MuU2Nyb2xsVmlldztcclxuICAgIGdldCBzY3JvbGxWaWV3KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zY3JvbGxWaWV3O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfbGF5b3V0OiBjYy5MYXlvdXQ7XHJcbiAgICBwcml2YXRlIF9yZXNpemVNb2RlOiBjYy5MYXlvdXQuUmVzaXplTW9kZTtcclxuICAgIHByaXZhdGUgX3RvcEdhcDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfcmlnaHRHYXA6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2JvdHRvbUdhcDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfbGVmdEdhcDogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgX2NvbHVtbkdhcDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfbGluZUdhcDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfY29sTGluZU51bTogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgX2xhc3REaXNwbGF5RGF0YTogbnVtYmVyW107XHJcbiAgICBwdWJsaWMgZGlzcGxheURhdGE6IGFueVtdO1xyXG4gICAgcHJpdmF0ZSBfcG9vbDogY2MuTm9kZVBvb2w7XHJcblxyXG4gICAgcHJpdmF0ZSBfaXRlbVRtcDogYW55O1xyXG4gICAgcHJpdmF0ZSBfbmVlZFVwZGF0ZVdpZGdldDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfaXRlbVNpemU6IGNjLlNpemU7XHJcbiAgICBwcml2YXRlIF9zaXplVHlwZTogYm9vbGVhbjtcclxuXHJcbiAgICBwdWJsaWMgX2N1c3RvbVNpemU6IGFueTtcclxuXHJcbiAgICBwcml2YXRlIGZyYW1lQ291bnQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2FuaURlbFJ1bmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfYW5pRGVsQ0I6IEZ1bmN0aW9uO1xyXG4gICAgcHJpdmF0ZSBfYW5pRGVsSXRlbTogYW55O1xyXG4gICAgcHJpdmF0ZSBfYW5pRGVsQmVmb3JlUG9zOiBjYy5WZWMyO1xyXG4gICAgcHJpdmF0ZSBfYW5pRGVsQmVmb3JlU2NhbGU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgdmlld1RvcDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB2aWV3UmlnaHQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgdmlld0JvdHRvbTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB2aWV3TGVmdDogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgX2RvbmVBZnRlclVwZGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgZWxhc3RpY1RvcDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBlbGFzdGljUmlnaHQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgZWxhc3RpY0JvdHRvbTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBlbGFzdGljTGVmdDogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgc2Nyb2xsVG9MaXN0SWQ6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIGFkaGVyaW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfYWRoZXJpbmdCYXJyaWVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIG5lYXJlc3RMaXN0SWQ6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgY3VyUGFnZU51bTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX2JlZ2FuUG9zOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9zY3JvbGxQb3M6IG51bWJlcjtcclxuICAgIHByaXZhdGUgY3VyU2Nyb2xsSXNUb3VjaDogYm9vbGVhbjsvL+W9k+WJjea7keWKqOaYr+WQpuS4uuaJi+WKqFxyXG5cclxuICAgIHByaXZhdGUgX3Njcm9sbFRvTGlzdElkOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9zY3JvbGxUb0VuZFRpbWU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3Njcm9sbFRvU286IGFueTtcclxuXHJcbiAgICBwcml2YXRlIF9sYWNrOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfYWxsSXRlbVNpemU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2FsbEl0ZW1TaXplTm9FZGdlOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfc2Nyb2xsSXRlbTogYW55Oy8v5b2T5YmN5o6n5Yi2IFNjcm9sbFZpZXcg5rua5Yqo55qEIEl0ZW1cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5faW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcclxuICAgICAgICBpZiAoY2MuaXNWYWxpZCh0Ll9pdGVtVG1wKSlcclxuICAgICAgICAgICAgdC5faXRlbVRtcC5kZXN0cm95KCk7XHJcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQodC50bXBOb2RlKSlcclxuICAgICAgICAgICAgdC50bXBOb2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB0Ll9wb29sICYmIHQuX3Bvb2wuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICAvLyBpZiAoIUNDX0VESVRPUikgXHJcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXJFdmVudCgpO1xyXG4gICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgICAgICAvLyDlpITnkIbph43mlrDmmL7npLrlkI7vvIzmnInlj6/og73kuIrkuIDmrKHnmoTliqjnlLvnp7vpmaTov5jmnKrmkq3mlL7lrozmr5XvvIzlr7zoh7TliqjnlLvljaHkvY/nmoTpl67pophcclxuICAgICAgICBpZiAodGhpcy5fYW5pRGVsUnVuaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FuaURlbFJ1bmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fYW5pRGVsSXRlbSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2FuaURlbEJlZm9yZVBvcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FuaURlbEl0ZW0ucG9zaXRpb24gPSB0aGlzLl9hbmlEZWxCZWZvcmVQb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2FuaURlbEJlZm9yZVBvcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9hbmlEZWxCZWZvcmVTY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FuaURlbEl0ZW0uc2NhbGUgPSB0aGlzLl9hbmlEZWxCZWZvcmVTY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fYW5pRGVsQmVmb3JlU2NhbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fYW5pRGVsSXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fYW5pRGVsQ0IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FuaURlbENCKCk7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fYW5pRGVsQ0I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIC8vIGlmICghQ0NfRURJVE9SKSBcclxuICAgICAgICB0aGlzLl91bnJlZ2lzdGVyRXZlbnQoKTtcclxuICAgIH1cclxuICAgIC8v5rOo5YaM5LqL5Lu2XHJcbiAgICBfcmVnaXN0ZXJFdmVudCgpIHtcclxuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcclxuICAgICAgICB0Lm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHQuX29uVG91Y2hTdGFydCwgdCwgdHJ1ZSk7XHJcbiAgICAgICAgdC5ub2RlLm9uKCd0b3VjaC11cCcsIHQuX29uVG91Y2hVcCwgdCk7XHJcbiAgICAgICAgdC5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdC5fb25Ub3VjaENhbmNlbGxlZCwgdCwgdHJ1ZSk7XHJcbiAgICAgICAgdC5ub2RlLm9uKCdzY3JvbGwtYmVnYW4nLCB0Ll9vblNjcm9sbEJlZ2FuLCB0LCB0cnVlKTtcclxuICAgICAgICB0Lm5vZGUub24oJ3Njcm9sbC1lbmRlZCcsIHQuX29uU2Nyb2xsRW5kZWQsIHQsIHRydWUpO1xyXG4gICAgICAgIHQubm9kZS5vbignc2Nyb2xsaW5nJywgdC5fb25TY3JvbGxpbmcsIHQsIHRydWUpO1xyXG4gICAgICAgIHQubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5TSVpFX0NIQU5HRUQsIHQuX29uU2l6ZUNoYW5nZWQsIHQpO1xyXG4gICAgfVxyXG4gICAgLy/ljbjovb3kuovku7ZcclxuICAgIF91bnJlZ2lzdGVyRXZlbnQoKSB7XHJcbiAgICAgICAgbGV0IHQ6IGFueSA9IHRoaXM7XHJcbiAgICAgICAgdC5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdC5fb25Ub3VjaFN0YXJ0LCB0LCB0cnVlKTtcclxuICAgICAgICB0Lm5vZGUub2ZmKCd0b3VjaC11cCcsIHQuX29uVG91Y2hVcCwgdCk7XHJcbiAgICAgICAgdC5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHQuX29uVG91Y2hDYW5jZWxsZWQsIHQsIHRydWUpO1xyXG4gICAgICAgIHQubm9kZS5vZmYoJ3Njcm9sbC1iZWdhbicsIHQuX29uU2Nyb2xsQmVnYW4sIHQsIHRydWUpO1xyXG4gICAgICAgIHQubm9kZS5vZmYoJ3Njcm9sbC1lbmRlZCcsIHQuX29uU2Nyb2xsRW5kZWQsIHQsIHRydWUpO1xyXG4gICAgICAgIHQubm9kZS5vZmYoJ3Njcm9sbGluZycsIHQuX29uU2Nyb2xsaW5nLCB0LCB0cnVlKTtcclxuICAgICAgICB0Lm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlNJWkVfQ0hBTkdFRCwgdC5fb25TaXplQ2hhbmdlZCwgdCk7XHJcbiAgICB9XHJcbiAgICAvL+WIneWni+WMluWQhOenjS4uXHJcbiAgICBfaW5pdCgpIHtcclxuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcclxuICAgICAgICBpZiAodC5faW5pdGVkKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHQuX3Njcm9sbFZpZXcgPSB0Lm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpO1xyXG5cclxuICAgICAgICB0LmNvbnRlbnQgPSB0Ll9zY3JvbGxWaWV3LmNvbnRlbnQ7XHJcbiAgICAgICAgaWYgKCF0LmNvbnRlbnQpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IodC5ub2RlLm5hbWUgKyBcIidzIGNjLlNjcm9sbFZpZXcgdW5zZXQgY29udGVudCFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHQuX2xheW91dCA9IHQuY29udGVudC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcclxuXHJcbiAgICAgICAgdC5fYWxpZ24gPSB0Ll9sYXlvdXQudHlwZTsgLy/mjpLliJfmqKHlvI9cclxuICAgICAgICB0Ll9yZXNpemVNb2RlID0gdC5fbGF5b3V0LnJlc2l6ZU1vZGU7IC8v6Ieq6YCC5bqU5qih5byPXHJcbiAgICAgICAgdC5fc3RhcnRBeGlzID0gdC5fbGF5b3V0LnN0YXJ0QXhpcztcclxuXHJcbiAgICAgICAgdC5fdG9wR2FwID0gdC5fbGF5b3V0LnBhZGRpbmdUb3A7IC8v6aG26L656LedXHJcbiAgICAgICAgdC5fcmlnaHRHYXAgPSB0Ll9sYXlvdXQucGFkZGluZ1JpZ2h0OyAvL+WPs+i+uei3nVxyXG4gICAgICAgIHQuX2JvdHRvbUdhcCA9IHQuX2xheW91dC5wYWRkaW5nQm90dG9tOyAvL+W6lei+uei3nVxyXG4gICAgICAgIHQuX2xlZnRHYXAgPSB0Ll9sYXlvdXQucGFkZGluZ0xlZnQ7IC8v5bem6L656LedXHJcblxyXG4gICAgICAgIHQuX2NvbHVtbkdhcCA9IHQuX2xheW91dC5zcGFjaW5nWDsgLy/liJfot51cclxuICAgICAgICB0Ll9saW5lR2FwID0gdC5fbGF5b3V0LnNwYWNpbmdZOyAvL+ihjOi3nVxyXG5cclxuICAgICAgICB0Ll9jb2xMaW5lTnVtOyAvL+WIl+aVsOaIluihjOaVsO+8iOmdnkdSSUTmqKHlvI/liJk9Me+8jOihqOekuuWNleWIl+aIluWNleihjO+8iTtcclxuXHJcbiAgICAgICAgdC5fdmVydGljYWxEaXIgPSB0Ll9sYXlvdXQudmVydGljYWxEaXJlY3Rpb247IC8v5Z6C55u05o6S5YiX5a2Q6IqC54K555qE5pa55ZCRXHJcbiAgICAgICAgdC5faG9yaXpvbnRhbERpciA9IHQuX2xheW91dC5ob3Jpem9udGFsRGlyZWN0aW9uOyAvL+awtOW5s+aOkuWIl+WtkOiKgueCueeahOaWueWQkVxyXG5cclxuICAgICAgICB0LnNldFRlbXBsYXRlSXRlbShjYy5pbnN0YW50aWF0ZSh0LnRlbXBsYXRlVHlwZSA9PSBUZW1wbGF0ZVR5cGUuUFJFRkFCID8gdC50bXBQcmVmYWIgOiB0LnRtcE5vZGUpKTtcclxuXHJcbiAgICAgICAgLy8g54m55a6a55qE5ruR5Yqo5qih5byP5aSE55CGXHJcbiAgICAgICAgaWYgKHQuX3NsaWRlTW9kZSA9PSBTbGlkZVR5cGUuQURIRVJJTkcgfHwgdC5fc2xpZGVNb2RlID09IFNsaWRlVHlwZS5QQUdFKSB7XHJcbiAgICAgICAgICAgIHQuX3Njcm9sbFZpZXcuaW5lcnRpYSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0Ll9zY3JvbGxWaWV3Ll9vbk1vdXNlV2hlZWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdC52aXJ0dWFsKSAgICAgICAgIC8vIGxhY2tDZW50ZXIg5LuF5pSv5oyBIFZpcnR1YWwg5qih5byPXHJcbiAgICAgICAgICAgIHQubGFja0NlbnRlciA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0Ll9sYXN0RGlzcGxheURhdGEgPSBbXTsgLy/mnIDlkI7kuIDmrKHliLfmlrDnmoTmlbDmja5cclxuICAgICAgICB0LmRpc3BsYXlEYXRhID0gW107IC8v5b2T5YmN5pWw5o2uXHJcbiAgICAgICAgdC5fcG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgpOyAgICAvL+i/meaYr+S4quaxoOWtkC4uXHJcbiAgICAgICAgdC5fZm9yY2VVcGRhdGUgPSBmYWxzZTsgICAgICAgICAvL+aYr+WQpuW8uuWItuabtOaWsFxyXG4gICAgICAgIHQuX3VwZGF0ZUNvdW50ZXIgPSAwOyAgICAgICAgICAgLy/lvZPliY3liIbluKfmuLLmn5PluKfmlbBcclxuICAgICAgICB0Ll91cGRhdGVEb25lID0gdHJ1ZTsgICAgICAgICAgIC8v5YiG5bin5riy5p+T5piv5ZCm5a6M5oiQXHJcblxyXG4gICAgICAgIHQuY3VyUGFnZU51bSA9IDA7ICAgICAgICAgICAgICAgLy/lvZPliY3pobXmlbBcclxuXHJcbiAgICAgICAgaWYgKHQuY3ljbGljIHx8IDApIHtcclxuICAgICAgICAgICAgdC5fc2Nyb2xsVmlldy5fcHJvY2Vzc0F1dG9TY3JvbGxpbmcgPSB0aGlzLl9wcm9jZXNzQXV0b1Njcm9sbGluZy5iaW5kKHQpO1xyXG4gICAgICAgICAgICB0Ll9zY3JvbGxWaWV3Ll9zdGFydEJvdW5jZUJhY2tJZk5lZWRlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB0Ll9zY3JvbGxWaWV3Ll9zY3JvbGxDaGlsZHJlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoICh0Ll9hbGlnbikge1xyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkhPUklaT05UQUw6IHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodC5faG9yaXpvbnRhbERpcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0Lkhvcml6b250YWxEaXJlY3Rpb24uTEVGVF9UT19SSUdIVDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5fYWxpZ25DYWxjVHlwZSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0Lkhvcml6b250YWxEaXJlY3Rpb24uUklHSFRfVE9fTEVGVDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5fYWxpZ25DYWxjVHlwZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5WRVJUSUNBTDoge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0Ll92ZXJ0aWNhbERpcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLlRPUF9UT19CT1RUT006XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX2FsaWduQ2FsY1R5cGUgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5CT1RUT01fVE9fVE9QOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ll9hbGlnbkNhbGNUeXBlID0gNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkdSSUQ6IHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodC5fc3RhcnRBeGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5IT1JJWk9OVEFMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHQuX3ZlcnRpY2FsRGlyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5UT1BfVE9fQk9UVE9NOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX2FsaWduQ2FsY1R5cGUgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uQk9UVE9NX1RPX1RPUDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ll9hbGlnbkNhbGNUeXBlID0gNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLlZFUlRJQ0FMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHQuX2hvcml6b250YWxEaXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0Lkhvcml6b250YWxEaXJlY3Rpb24uTEVGVF9UT19SSUdIVDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ll9hbGlnbkNhbGNUeXBlID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0Lkhvcml6b250YWxEaXJlY3Rpb24uUklHSFRfVE9fTEVGVDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ll9hbGlnbkNhbGNUeXBlID0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOa4heepuiBjb250ZW50XHJcbiAgICAgICAgLy8gdC5jb250ZW50LmNoaWxkcmVuLmZvckVhY2goKGNoaWxkOiBjYy5Ob2RlKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNoaWxkLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAvLyAgICAgaWYgKGNoaWxkICE9IHQudG1wTm9kZSAmJiBjaGlsZC5pc1ZhbGlkKVxyXG4gICAgICAgIC8vICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIHQuY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIHQuX2luaXRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOS4uuS6huWunueOsOW+queOr+WIl+ihqO+8jOW/hemhu+imhuWGmWNjLlNjcm9sbFZpZXfnmoTmn5Dkupvlh73mlbBcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkdFxyXG4gICAgICovXHJcbiAgICBfcHJvY2Vzc0F1dG9TY3JvbGxpbmcoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBicmFraW5nRmFjdG9yOiBudW1iZXIgPSAxO1xyXG4gICAgICAgIHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsQWNjdW11bGF0ZWRUaW1lJ10gKz0gZHQgKiAoMSAvIGJyYWtpbmdGYWN0b3IpO1xyXG5cclxuICAgICAgICBsZXQgcGVyY2VudGFnZTogbnVtYmVyID0gTWF0aC5taW4oMSwgdGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxBY2N1bXVsYXRlZFRpbWUnXSAvIHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsVG90YWxUaW1lJ10pO1xyXG4gICAgICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbEF0dGVudWF0ZSddKSB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lOiBudW1iZXIgPSBwZXJjZW50YWdlIC0gMTtcclxuICAgICAgICAgICAgcGVyY2VudGFnZSA9IHRpbWUgKiB0aW1lICogdGltZSAqIHRpbWUgKiB0aW1lICsgMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBuZXdQb3NpdGlvbjogYW55ID0gdGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uJ10uYWRkKHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsVGFyZ2V0RGVsdGEnXS5tdWwocGVyY2VudGFnZSkpO1xyXG4gICAgICAgIGxldCBFUFNJTE9OOiBudW1iZXIgPSB0aGlzLl9zY3JvbGxWaWV3WydnZXRTY3JvbGxFbmRlZEV2ZW50VGltaW5nJ10oKTtcclxuICAgICAgICBsZXQgcmVhY2hlZEVuZDogYm9vbGVhbiA9IE1hdGguYWJzKHBlcmNlbnRhZ2UgLSAxKSA8PSBFUFNJTE9OO1xyXG5cclxuICAgICAgICBsZXQgZmlyZUV2ZW50OiBib29sZWFuID0gTWF0aC5hYnMocGVyY2VudGFnZSAtIDEpIDw9IHRoaXMuX3Njcm9sbFZpZXdbJ2dldFNjcm9sbEVuZGVkRXZlbnRUaW1pbmcnXSgpO1xyXG4gICAgICAgIGlmIChmaXJlRXZlbnQgJiYgIXRoaXMuX3Njcm9sbFZpZXdbJ19pc1Njcm9sbEVuZGVkV2l0aFRocmVzaG9sZEV2ZW50RmlyZWQnXSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3WydfZGlzcGF0Y2hFdmVudCddKCdzY3JvbGwtZW5kZWQtd2l0aC10aHJlc2hvbGQnKTtcclxuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlld1snX2lzU2Nyb2xsRW5kZWRXaXRoVGhyZXNob2xkRXZlbnRGaXJlZCddID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZWFjaGVkRW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsaW5nJ10gPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkZWx0YU1vdmU6IGFueSA9IG5ld1Bvc2l0aW9uLnN1Yih0aGlzLl9zY3JvbGxWaWV3LmdldENvbnRlbnRQb3NpdGlvbigpKTtcclxuICAgICAgICB0aGlzLl9zY3JvbGxWaWV3WydfbW92ZUNvbnRlbnQnXSh0aGlzLl9zY3JvbGxWaWV3WydfY2xhbXBEZWx0YSddKGRlbHRhTW92ZSksIHJlYWNoZWRFbmQpO1xyXG4gICAgICAgIHRoaXMuX3Njcm9sbFZpZXdbJ19kaXNwYXRjaEV2ZW50J10oJ3Njcm9sbGluZycpO1xyXG5cclxuICAgICAgICAvLyBzY29sbFRvIEFQSSBjb250cm9sbCBtb3ZlXHJcbiAgICAgICAgaWYgKCF0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbGluZyddKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXdbJ19pc0JvdW5jaW5nJ10gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlld1snX3Njcm9sbGluZyddID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXdbJ19kaXNwYXRjaEV2ZW50J10oJ3Njcm9sbC1lbmRlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v6K6+572u5qih5p2/SXRlbVxyXG4gICAgc2V0VGVtcGxhdGVJdGVtKGl0ZW06IGFueSkge1xyXG4gICAgICAgIGlmICghaXRlbSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGxldCB0OiBhbnkgPSB0aGlzO1xyXG4gICAgICAgIHQuX2l0ZW1UbXAgPSBpdGVtO1xyXG5cclxuICAgICAgICBpZiAodC5fcmVzaXplTW9kZSA9PSBjYy5MYXlvdXQuUmVzaXplTW9kZS5DSElMRFJFTilcclxuICAgICAgICAgICAgdC5faXRlbVNpemUgPSB0Ll9sYXlvdXQuY2VsbFNpemU7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0Ll9pdGVtU2l6ZSA9IGNjLnNpemUoaXRlbS53aWR0aCwgaXRlbS5oZWlnaHQpO1xyXG5cclxuICAgICAgICAvL+iOt+WPlkxpc3RJdGVt77yM5aaC5p6c5rKh5pyJ5bCx5Y+W5raI6YCJ5oup5qih5byPXHJcbiAgICAgICAgbGV0IGNvbSA9IGl0ZW0uZ2V0Q29tcG9uZW50KExpc3RJdGVtKTtcclxuICAgICAgICBsZXQgcmVtb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCFjb20pXHJcbiAgICAgICAgICAgIHJlbW92ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gaWYgKGNvbSkge1xyXG4gICAgICAgIC8vICAgICBpZiAoIWNvbS5fYnRuQ29tICYmICFpdGVtLmdldENvbXBvbmVudChjYy5CdXR0b24pKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZW1vdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmIChyZW1vdmUpIHtcclxuICAgICAgICAgICAgdC5zZWxlY3RlZE1vZGUgPSBTZWxlY3RlZFR5cGUuTk9ORTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29tID0gaXRlbS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICBpZiAoY29tICYmIGNvbS5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHQuX25lZWRVcGRhdGVXaWRnZXQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodC5zZWxlY3RlZE1vZGUgPT0gU2VsZWN0ZWRUeXBlLk1VTFQpXHJcbiAgICAgICAgICAgIHQubXVsdFNlbGVjdGVkID0gW107XHJcblxyXG4gICAgICAgIHN3aXRjaCAodC5fYWxpZ24pIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5IT1JJWk9OVEFMOlxyXG4gICAgICAgICAgICAgICAgdC5fY29sTGluZU51bSA9IDE7XHJcbiAgICAgICAgICAgICAgICB0Ll9zaXplVHlwZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuVkVSVElDQUw6XHJcbiAgICAgICAgICAgICAgICB0Ll9jb2xMaW5lTnVtID0gMTtcclxuICAgICAgICAgICAgICAgIHQuX3NpemVUeXBlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkdSSUQ6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHQuX3N0YXJ0QXhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uSE9SSVpPTlRBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/orqHnrpfliJfmlbBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRyaW1XOiBudW1iZXIgPSB0LmNvbnRlbnQud2lkdGggLSB0Ll9sZWZ0R2FwIC0gdC5fcmlnaHRHYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX2NvbExpbmVOdW0gPSBNYXRoLmZsb29yKCh0cmltVyArIHQuX2NvbHVtbkdhcCkgLyAodC5faXRlbVNpemUud2lkdGggKyB0Ll9jb2x1bW5HYXApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5fc2l6ZVR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLlZFUlRJQ0FMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+iuoeeul+ihjOaVsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdHJpbUg6IG51bWJlciA9IHQuY29udGVudC5oZWlnaHQgLSB0Ll90b3BHYXAgLSB0Ll9ib3R0b21HYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX2NvbExpbmVOdW0gPSBNYXRoLmZsb29yKCh0cmltSCArIHQuX2xpbmVHYXApIC8gKHQuX2l0ZW1TaXplLmhlaWdodCArIHQuX2xpbmVHYXApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5fc2l6ZVR5cGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOajgOafpeaYr+WQpuWIneWni+WMllxyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBwcmludExvZyDmmK/lkKbmiZPljbDplJnor6/kv6Hmga9cclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIGNoZWNrSW5pdGVkKHByaW50TG9nOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5faW5pdGVkKSB7XHJcbiAgICAgICAgICAgIGlmIChwcmludExvZylcclxuICAgICAgICAgICAgICAgIGNjLmVycm9yKCdMaXN0IGluaXRpYWxpemF0aW9uIG5vdCBjb21wbGV0ZWQhJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICAvL+emgeeUqCBMYXlvdXQg57uE5Lu277yM6Ieq6KGM6K6h566XIENvbnRlbnQgU2l6ZVxyXG4gICAgX3Jlc2l6ZUNvbnRlbnQoKSB7XHJcbiAgICAgICAgbGV0IHQ6IGFueSA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogbnVtYmVyO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHQuX2FsaWduKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuSE9SSVpPTlRBTDoge1xyXG4gICAgICAgICAgICAgICAgaWYgKHQuX2N1c3RvbVNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZml4ZWQ6IGFueSA9IHQuX2dldEZpeGVkU2l6ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0Ll9sZWZ0R2FwICsgZml4ZWQudmFsICsgKHQuX2l0ZW1TaXplLndpZHRoICogKHQuX251bUl0ZW1zIC0gZml4ZWQuY291bnQpKSArICh0Ll9jb2x1bW5HYXAgKiAodC5fbnVtSXRlbXMgLSAxKSkgKyB0Ll9yaWdodEdhcDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdC5fbGVmdEdhcCArICh0Ll9pdGVtU2l6ZS53aWR0aCAqIHQuX251bUl0ZW1zKSArICh0Ll9jb2x1bW5HYXAgKiAodC5fbnVtSXRlbXMgLSAxKSkgKyB0Ll9yaWdodEdhcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuVkVSVElDQUw6IHtcclxuICAgICAgICAgICAgICAgIGlmICh0Ll9jdXN0b21TaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpeGVkOiBhbnkgPSB0Ll9nZXRGaXhlZFNpemUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdC5fdG9wR2FwICsgZml4ZWQudmFsICsgKHQuX2l0ZW1TaXplLmhlaWdodCAqICh0Ll9udW1JdGVtcyAtIGZpeGVkLmNvdW50KSkgKyAodC5fbGluZUdhcCAqICh0Ll9udW1JdGVtcyAtIDEpKSArIHQuX2JvdHRvbUdhcDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdC5fdG9wR2FwICsgKHQuX2l0ZW1TaXplLmhlaWdodCAqIHQuX251bUl0ZW1zKSArICh0Ll9saW5lR2FwICogKHQuX251bUl0ZW1zIC0gMSkpICsgdC5fYm90dG9tR2FwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5HUklEOiB7XHJcbiAgICAgICAgICAgICAgICAvL+e9keagvOaooeW8j+S4jeaUr+aMgeWxheS4rVxyXG4gICAgICAgICAgICAgICAgaWYgKHQubGFja0NlbnRlcilcclxuICAgICAgICAgICAgICAgICAgICB0LmxhY2tDZW50ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodC5fc3RhcnRBeGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5IT1JJWk9OVEFMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGluZU51bTogbnVtYmVyID0gTWF0aC5jZWlsKHQuX251bUl0ZW1zIC8gdC5fY29sTGluZU51bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHQuX3RvcEdhcCArICh0Ll9pdGVtU2l6ZS5oZWlnaHQgKiBsaW5lTnVtKSArICh0Ll9saW5lR2FwICogKGxpbmVOdW0gLSAxKSkgKyB0Ll9ib3R0b21HYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uVkVSVElDQUw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2xOdW06IG51bWJlciA9IE1hdGguY2VpbCh0Ll9udW1JdGVtcyAvIHQuX2NvbExpbmVOdW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0Ll9sZWZ0R2FwICsgKHQuX2l0ZW1TaXplLndpZHRoICogY29sTnVtKSArICh0Ll9jb2x1bW5HYXAgKiAoY29sTnVtIC0gMSkpICsgdC5fcmlnaHRHYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBsYXlvdXQ6IGNjLkxheW91dCA9IHQuY29udGVudC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcclxuICAgICAgICBpZiAobGF5b3V0KVxyXG4gICAgICAgICAgICBsYXlvdXQuZW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0Ll9hbGxJdGVtU2l6ZSA9IHJlc3VsdDtcclxuICAgICAgICB0Ll9hbGxJdGVtU2l6ZU5vRWRnZSA9IHQuX2FsbEl0ZW1TaXplIC0gKHQuX3NpemVUeXBlID8gKHQuX3RvcEdhcCArIHQuX2JvdHRvbUdhcCkgOiAodC5fbGVmdEdhcCArIHQuX3JpZ2h0R2FwKSk7XHJcblxyXG4gICAgICAgIGlmICh0LmN5Y2xpYykge1xyXG4gICAgICAgICAgICBsZXQgdG90YWxTaXplOiBudW1iZXIgPSAodC5fc2l6ZVR5cGUgPyB0Lm5vZGUuaGVpZ2h0IDogdC5ub2RlLndpZHRoKTtcclxuXHJcbiAgICAgICAgICAgIHQuX2N5Y2xpY1BvczEgPSAwO1xyXG4gICAgICAgICAgICB0b3RhbFNpemUgLT0gdC5fY3ljbGljUG9zMTtcclxuICAgICAgICAgICAgdC5fY3ljbGljTnVtID0gTWF0aC5jZWlsKHRvdGFsU2l6ZSAvIHQuX2FsbEl0ZW1TaXplTm9FZGdlKSArIDE7XHJcbiAgICAgICAgICAgIGxldCBzcGFjaW5nOiBudW1iZXIgPSB0Ll9zaXplVHlwZSA/IHQuX2xpbmVHYXAgOiB0Ll9jb2x1bW5HYXA7XHJcbiAgICAgICAgICAgIHQuX2N5Y2xpY1BvczIgPSB0Ll9jeWNsaWNQb3MxICsgdC5fYWxsSXRlbVNpemVOb0VkZ2UgKyBzcGFjaW5nO1xyXG4gICAgICAgICAgICB0Ll9jeWNsaWNBbGxJdGVtU2l6ZSA9IHQuX2FsbEl0ZW1TaXplICsgKHQuX2FsbEl0ZW1TaXplTm9FZGdlICogKHQuX2N5Y2xpY051bSAtIDEpKSArIChzcGFjaW5nICogKHQuX2N5Y2xpY051bSAtIDEpKTtcclxuICAgICAgICAgICAgdC5fY3ljaWxjQWxsSXRlbVNpemVOb0VkZ2UgPSB0Ll9hbGxJdGVtU2l6ZU5vRWRnZSAqIHQuX2N5Y2xpY051bTtcclxuICAgICAgICAgICAgdC5fY3ljaWxjQWxsSXRlbVNpemVOb0VkZ2UgKz0gc3BhY2luZyAqICh0Ll9jeWNsaWNOdW0gLSAxKTtcclxuICAgICAgICAgICAgLy8gY2MubG9nKCdfY3ljbGljTnVtIC0+JywgdC5fY3ljbGljTnVtLCB0Ll9hbGxJdGVtU2l6ZU5vRWRnZSwgdC5fYWxsSXRlbVNpemUsIHQuX2N5Y2xpY1BvczEsIHQuX2N5Y2xpY1BvczIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdC5fbGFjayA9ICF0LmN5Y2xpYyAmJiB0Ll9hbGxJdGVtU2l6ZSA8ICh0Ll9zaXplVHlwZSA/IHQubm9kZS5oZWlnaHQgOiB0Lm5vZGUud2lkdGgpO1xyXG4gICAgICAgIGxldCBzbGlkZU9mZnNldDogbnVtYmVyID0gKCghdC5fbGFjayB8fCAhdC5sYWNrQ2VudGVyKSAmJiB0LmxhY2tTbGlkZSkgPyAwIDogLjE7XHJcblxyXG4gICAgICAgIGxldCB0YXJnZXRXSDogbnVtYmVyID0gdC5fbGFjayA/ICgodC5fc2l6ZVR5cGUgPyB0Lm5vZGUuaGVpZ2h0IDogdC5ub2RlLndpZHRoKSAtIHNsaWRlT2Zmc2V0KSA6ICh0LmN5Y2xpYyA/IHQuX2N5Y2xpY0FsbEl0ZW1TaXplIDogdC5fYWxsSXRlbVNpemUpO1xyXG4gICAgICAgIGlmICh0YXJnZXRXSCA8IDApXHJcbiAgICAgICAgICAgIHRhcmdldFdIID0gMDtcclxuXHJcbiAgICAgICAgaWYgKHQuX3NpemVUeXBlKSB7XHJcbiAgICAgICAgICAgIHQuY29udGVudC5oZWlnaHQgPSB0YXJnZXRXSDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0LmNvbnRlbnQud2lkdGggPSB0YXJnZXRXSDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNjLmxvZygnX3Jlc2l6ZUNvbnRlbnQoKSAgbnVtSXRlbXMgPScsIHQuX251bUl0ZW1zLCAn77yMY29udGVudCA9JywgdC5jb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvL+a7muWKqOi/m+ihjOaXti4uLlxyXG4gICAgX29uU2Nyb2xsaW5nKGV2OiBjYy5FdmVudCA9IG51bGwpIHtcclxuICAgICAgICBpZiAodGhpcy5mcmFtZUNvdW50ID09IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVDb3VudCA9IHRoaXMuX3VwZGF0ZVJhdGU7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9mb3JjZVVwZGF0ZSAmJiAoZXYgJiYgZXYudHlwZSAhPSAnc2Nyb2xsLWVuZGVkJykgJiYgdGhpcy5mcmFtZUNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lQ291bnQtLTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmZyYW1lQ291bnQgPSB0aGlzLl91cGRhdGVSYXRlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fYW5pRGVsUnVuaW5nKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIC8v5b6q546v5YiX6KGo5aSE55CGXHJcbiAgICAgICAgaWYgKHRoaXMuY3ljbGljKSB7XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxQb3M6IGFueSA9IHRoaXMuY29udGVudC5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICBzY3JvbGxQb3MgPSB0aGlzLl9zaXplVHlwZSA/IHNjcm9sbFBvcy55IDogc2Nyb2xsUG9zLng7XHJcblxyXG4gICAgICAgICAgICBsZXQgYWRkVmFsID0gdGhpcy5fYWxsSXRlbVNpemVOb0VkZ2UgKyAodGhpcy5fc2l6ZVR5cGUgPyB0aGlzLl9saW5lR2FwIDogdGhpcy5fY29sdW1uR2FwKTtcclxuICAgICAgICAgICAgbGV0IGFkZDogYW55ID0gdGhpcy5fc2l6ZVR5cGUgPyBjYy52MigwLCBhZGRWYWwpIDogY2MudjIoYWRkVmFsLCAwKTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fYWxpZ25DYWxjVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iExFRlRfVE9fUklHSFTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iExFRlRfVE9fUklHSFTvvIlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsUG9zID4gLXRoaXMuX2N5Y2xpY1BvczEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnggPSAtdGhpcy5fY3ljbGljUG9zMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZpZXcuaXNBdXRvU2Nyb2xsaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiddID0gdGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uJ10uc3ViKGFkZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuX2JlZ2FuUG9zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLl9iZWdhblBvcyArPSBhZGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNjcm9sbFBvcyA8IC10aGlzLl9jeWNsaWNQb3MyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC54ID0gLXRoaXMuX2N5Y2xpY1BvczE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24nXSA9IHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiddLmFkZChhZGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLl9iZWdhblBvcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5fYmVnYW5Qb3MgLT0gYWRkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iFJJR0hUX1RPX0xFRlTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iFJJR0hUX1RPX0xFRlTvvIlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsUG9zIDwgdGhpcy5fY3ljbGljUG9zMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQueCA9IHRoaXMuX2N5Y2xpY1BvczI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24nXSA9IHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiddLmFkZChhZGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzY3JvbGxQb3MgPiB0aGlzLl9jeWNsaWNQb3MyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC54ID0gdGhpcy5fY3ljbGljUG9zMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZpZXcuaXNBdXRvU2Nyb2xsaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiddID0gdGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uJ10uc3ViKGFkZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6Ly/ljZXliJdWRVJUSUNBTO+8iFRPUF9UT19CT1RUT03vvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIVE9QX1RPX0JPVFRPTe+8iVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxQb3MgPCB0aGlzLl9jeWNsaWNQb3MxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC55ID0gdGhpcy5fY3ljbGljUG9zMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZpZXcuaXNBdXRvU2Nyb2xsaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiddID0gdGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uJ10uYWRkKGFkZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNjcm9sbFBvcyA+IHRoaXMuX2N5Y2xpY1BvczIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnkgPSB0aGlzLl9jeWNsaWNQb3MxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmlldy5pc0F1dG9TY3JvbGxpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uJ10gPSB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24nXS5zdWIoYWRkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDovL+WNleWIl1ZFUlRJQ0FM77yIQk9UVE9NX1RPX1RPUO+8ieOAgee9keagvEhPUklaT05UQUzvvIhCT1RUT01fVE9fVE9Q77yJXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFBvcyA+IC10aGlzLl9jeWNsaWNQb3MxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC55ID0gLXRoaXMuX2N5Y2xpY1BvczI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24nXSA9IHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiddLnN1YihhZGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzY3JvbGxQb3MgPCAtdGhpcy5fY3ljbGljUG9zMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQueSA9IC10aGlzLl9jeWNsaWNQb3MxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmlldy5pc0F1dG9TY3JvbGxpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uJ10gPSB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24nXS5hZGQoYWRkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fY2FsY1ZpZXdQb3MoKTtcclxuXHJcbiAgICAgICAgbGV0IHZUb3A6IG51bWJlciwgdlJpZ2h0OiBudW1iZXIsIHZCb3R0b206IG51bWJlciwgdkxlZnQ6IG51bWJlcjtcclxuICAgICAgICBpZiAodGhpcy5fc2l6ZVR5cGUpIHtcclxuICAgICAgICAgICAgdlRvcCA9IHRoaXMudmlld1RvcDtcclxuICAgICAgICAgICAgdkJvdHRvbSA9IHRoaXMudmlld0JvdHRvbTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2UmlnaHQgPSB0aGlzLnZpZXdSaWdodDtcclxuICAgICAgICAgICAgdkxlZnQgPSB0aGlzLnZpZXdMZWZ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3ZpcnR1YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5RGF0YSA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgaXRlbVBvczogYW55O1xyXG5cclxuICAgICAgICAgICAgbGV0IGN1cklkOiBudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICBsZXQgZW5kSWQ6IG51bWJlciA9IHRoaXMuX251bUl0ZW1zIC0gMTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jdXN0b21TaXplKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnJlYWtGb3I6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8v5aaC5p6c6K+laXRlbeeahOS9jee9ruWcqOWPr+inhuWMuuWfn+WGhe+8jOWwseaOqOWFpWRpc3BsYXlEYXRhXHJcbiAgICAgICAgICAgICAgICBmb3IgKDsgY3VySWQgPD0gZW5kSWQgJiYgIWJyZWFrRm9yOyBjdXJJZCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVBvcyA9IHRoaXMuX2NhbGNJdGVtUG9zKGN1cklkKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2FsaWduKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuSE9SSVpPTlRBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtUG9zLnJpZ2h0ID49IHZMZWZ0ICYmIGl0ZW1Qb3MubGVmdCA8PSB2UmlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlEYXRhLnB1c2goaXRlbVBvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cklkICE9IDAgJiYgdGhpcy5kaXNwbGF5RGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtGb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuVkVSVElDQUw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVBvcy5ib3R0b20gPD0gdlRvcCAmJiBpdGVtUG9zLnRvcCA+PSB2Qm90dG9tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RGF0YS5wdXNoKGl0ZW1Qb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJJZCAhPSAwICYmIHRoaXMuZGlzcGxheURhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrRm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkdSSUQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX3N0YXJ0QXhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uSE9SSVpPTlRBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1Qb3MuYm90dG9tIDw9IHZUb3AgJiYgaXRlbVBvcy50b3AgPj0gdkJvdHRvbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RGF0YS5wdXNoKGl0ZW1Qb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cklkICE9IDAgJiYgdGhpcy5kaXNwbGF5RGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha0ZvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5WRVJUSUNBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1Qb3MucmlnaHQgPj0gdkxlZnQgJiYgaXRlbVBvcy5sZWZ0IDw9IHZSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RGF0YS5wdXNoKGl0ZW1Qb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cklkICE9IDAgJiYgdGhpcy5kaXNwbGF5RGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha0ZvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgd3c6IG51bWJlciA9IHRoaXMuX2l0ZW1TaXplLndpZHRoICsgdGhpcy5fY29sdW1uR2FwO1xyXG4gICAgICAgICAgICAgICAgbGV0IGhoOiBudW1iZXIgPSB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgKyB0aGlzLl9saW5lR2FwO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9hbGlnbkNhbGNUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iExFRlRfVE9fUklHSFTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iExFRlRfVE9fUklHSFTvvIlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VySWQgPSAodkxlZnQgLSB0aGlzLl9sZWZ0R2FwKSAvIHd3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRJZCA9ICh2UmlnaHQgLSB0aGlzLl9sZWZ0R2FwKSAvIHd3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6Ly/ljZXooYxIT1JJWk9OVEFM77yIUklHSFRfVE9fTEVGVO+8ieOAgee9keagvFZFUlRJQ0FM77yIUklHSFRfVE9fTEVGVO+8iVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJJZCA9ICgtdlJpZ2h0IC0gdGhpcy5fcmlnaHRHYXApIC8gd3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZElkID0gKC12TGVmdCAtIHRoaXMuX3JpZ2h0R2FwKSAvIHd3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6Ly/ljZXliJdWRVJUSUNBTO+8iFRPUF9UT19CT1RUT03vvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIVE9QX1RPX0JPVFRPTe+8iVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJJZCA9ICgtdlRvcCAtIHRoaXMuX3RvcEdhcCkgLyBoaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kSWQgPSAoLXZCb3R0b20gLSB0aGlzLl90b3BHYXApIC8gaGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDovL+WNleWIl1ZFUlRJQ0FM77yIQk9UVE9NX1RPX1RPUO+8ieOAgee9keagvEhPUklaT05UQUzvvIhCT1RUT01fVE9fVE9Q77yJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cklkID0gKHZCb3R0b20gLSB0aGlzLl9ib3R0b21HYXApIC8gaGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZElkID0gKHZUb3AgLSB0aGlzLl9ib3R0b21HYXApIC8gaGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3VySWQgPSBNYXRoLmZsb29yKGN1cklkKSAqIHRoaXMuX2NvbExpbmVOdW07XHJcbiAgICAgICAgICAgICAgICBlbmRJZCA9IE1hdGguY2VpbChlbmRJZCkgKiB0aGlzLl9jb2xMaW5lTnVtO1xyXG4gICAgICAgICAgICAgICAgZW5kSWQtLTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJJZCA8IDApXHJcbiAgICAgICAgICAgICAgICAgICAgY3VySWQgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVuZElkID49IHRoaXMuX251bUl0ZW1zKVxyXG4gICAgICAgICAgICAgICAgICAgIGVuZElkID0gdGhpcy5fbnVtSXRlbXMgLSAxO1xyXG4gICAgICAgICAgICAgICAgZm9yICg7IGN1cklkIDw9IGVuZElkOyBjdXJJZCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RGF0YS5wdXNoKHRoaXMuX2NhbGNJdGVtUG9zKGN1cklkKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fZGVsUmVkdW5kYW50SXRlbSgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXNwbGF5RGF0YS5sZW5ndGggPD0gMCB8fCAhdGhpcy5fbnVtSXRlbXMpIHsgLy9pZiBub25lLCBkZWxldGUgYWxsLlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbGFzdERpc3BsYXlEYXRhID0gW107XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5maXJzdExpc3RJZCA9IHRoaXMuZGlzcGxheURhdGFbMF0uaWQ7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheUl0ZW1OdW0gPSB0aGlzLmRpc3BsYXlEYXRhLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIGxldCBsZW46IG51bWJlciA9IHRoaXMuX2xhc3REaXNwbGF5RGF0YS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICBsZXQgaGF2ZURhdGFDaGFuZ2U6IGJvb2xlYW4gPSB0aGlzLmRpc3BsYXlJdGVtTnVtICE9IGxlbjtcclxuICAgICAgICAgICAgaWYgKGhhdmVEYXRhQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzmmK/pgJDluKfmuLLmn5PvvIzpnIDopoHmjpLluo9cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sYXN0RGlzcGxheURhdGEuc29ydCgoYSwgYikgPT4geyByZXR1cm4gYSAtIGIgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyDlm6BMaXN055qE5pi+56S65pWw5o2u5piv5pyJ5bqP55qE77yM5omA5Lul5Y+q6ZyA6KaB5Yik5pat5pWw57uE6ZW/5bqm5piv5ZCm55u4562J77yM5Lul5Y+K5aS044CB5bC+5Lik5Liq5YWD57Sg5piv5ZCm55u4562J5Y2z5Y+v44CCXHJcbiAgICAgICAgICAgICAgICBoYXZlRGF0YUNoYW5nZSA9IHRoaXMuZmlyc3RMaXN0SWQgIT0gdGhpcy5fbGFzdERpc3BsYXlEYXRhWzBdIHx8IHRoaXMuZGlzcGxheURhdGFbdGhpcy5kaXNwbGF5SXRlbU51bSAtIDFdLmlkICE9IHRoaXMuX2xhc3REaXNwbGF5RGF0YVtsZW4gLSAxXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2ZvcmNlVXBkYXRlIHx8IGhhdmVEYXRhQ2hhbmdlKSB7ICAgIC8v5aaC5p6c5piv5by65Yi25pu05pawXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuX3VwZGF0ZURvbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLl9sYXN0RGlzcGxheURhdGEgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAvL+mAkOW4p+a4suafk1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9udW1JdGVtcyA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl91cGRhdGVEb25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kb25lQWZ0ZXJVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ291bnRlciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+ebtOaOpea4suafk1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xhc3REaXNwbGF5RGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZygnTGlzdCBEaXNwbGF5IERhdGEgSUk6OicsIHRoaXMuZGlzcGxheURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgdGhpcy5kaXNwbGF5SXRlbU51bTsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZU9yVXBkYXRlSXRlbSh0aGlzLmRpc3BsYXlEYXRhW2NdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZm9yY2VVcGRhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9jYWxjTmVhcmVzdEl0ZW0oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+iuoeeul+WPr+inhuiMg+WbtFxyXG4gICAgX2NhbGNWaWV3UG9zKCkge1xyXG4gICAgICAgIGxldCBzY3JvbGxQb3M6IGFueSA9IHRoaXMuY29udGVudC5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5fYWxpZ25DYWxjVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIDE6Ly/ljZXooYxIT1JJWk9OVEFM77yITEVGVF9UT19SSUdIVO+8ieOAgee9keagvFZFUlRJQ0FM77yITEVGVF9UT19SSUdIVO+8iVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGFzdGljTGVmdCA9IHNjcm9sbFBvcy54ID4gMCA/IHNjcm9sbFBvcy54IDogMDtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld0xlZnQgPSAoc2Nyb2xsUG9zLnggPCAwID8gLXNjcm9sbFBvcy54IDogMCkgLSB0aGlzLmVsYXN0aWNMZWZ0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3UmlnaHQgPSB0aGlzLnZpZXdMZWZ0ICsgdGhpcy5ub2RlLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGFzdGljUmlnaHQgPSB0aGlzLnZpZXdSaWdodCA+IHRoaXMuY29udGVudC53aWR0aCA/IE1hdGguYWJzKHRoaXMudmlld1JpZ2h0IC0gdGhpcy5jb250ZW50LndpZHRoKSA6IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdSaWdodCArPSB0aGlzLmVsYXN0aWNSaWdodDtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyh0aGlzLmVsYXN0aWNMZWZ0LCB0aGlzLmVsYXN0aWNSaWdodCwgdGhpcy52aWV3TGVmdCwgdGhpcy52aWV3UmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjovL+WNleihjEhPUklaT05UQUzvvIhSSUdIVF9UT19MRUZU77yJ44CB572R5qC8VkVSVElDQUzvvIhSSUdIVF9UT19MRUZU77yJXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsYXN0aWNSaWdodCA9IHNjcm9sbFBvcy54IDwgMCA/IC1zY3JvbGxQb3MueCA6IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdSaWdodCA9IChzY3JvbGxQb3MueCA+IDAgPyAtc2Nyb2xsUG9zLnggOiAwKSArIHRoaXMuZWxhc3RpY1JpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TGVmdCA9IHRoaXMudmlld1JpZ2h0IC0gdGhpcy5ub2RlLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGFzdGljTGVmdCA9IHRoaXMudmlld0xlZnQgPCAtdGhpcy5jb250ZW50LndpZHRoID8gTWF0aC5hYnModGhpcy52aWV3TGVmdCArIHRoaXMuY29udGVudC53aWR0aCkgOiAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TGVmdCAtPSB0aGlzLmVsYXN0aWNMZWZ0O1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKHRoaXMuZWxhc3RpY0xlZnQsIHRoaXMuZWxhc3RpY1JpZ2h0LCB0aGlzLnZpZXdMZWZ0LCB0aGlzLnZpZXdSaWdodCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOi8v5Y2V5YiXVkVSVElDQUzvvIhUT1BfVE9fQk9UVE9N77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iFRPUF9UT19CT1RUT03vvIlcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxhc3RpY1RvcCA9IHNjcm9sbFBvcy55IDwgMCA/IE1hdGguYWJzKHNjcm9sbFBvcy55KSA6IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdUb3AgPSAoc2Nyb2xsUG9zLnkgPiAwID8gLXNjcm9sbFBvcy55IDogMCkgKyB0aGlzLmVsYXN0aWNUb3A7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdCb3R0b20gPSB0aGlzLnZpZXdUb3AgLSB0aGlzLm5vZGUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGFzdGljQm90dG9tID0gdGhpcy52aWV3Qm90dG9tIDwgLXRoaXMuY29udGVudC5oZWlnaHQgPyBNYXRoLmFicyh0aGlzLnZpZXdCb3R0b20gKyB0aGlzLmNvbnRlbnQuaGVpZ2h0KSA6IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdCb3R0b20gKz0gdGhpcy5lbGFzdGljQm90dG9tO1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKHRoaXMuZWxhc3RpY1RvcCwgdGhpcy5lbGFzdGljQm90dG9tLCB0aGlzLnZpZXdUb3AsIHRoaXMudmlld0JvdHRvbSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0Oi8v5Y2V5YiXVkVSVElDQUzvvIhCT1RUT01fVE9fVE9Q77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iEJPVFRPTV9UT19UT1DvvIlcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxhc3RpY0JvdHRvbSA9IHNjcm9sbFBvcy55ID4gMCA/IE1hdGguYWJzKHNjcm9sbFBvcy55KSA6IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdCb3R0b20gPSAoc2Nyb2xsUG9zLnkgPCAwID8gLXNjcm9sbFBvcy55IDogMCkgLSB0aGlzLmVsYXN0aWNCb3R0b207XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdUb3AgPSB0aGlzLnZpZXdCb3R0b20gKyB0aGlzLm5vZGUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGFzdGljVG9wID0gdGhpcy52aWV3VG9wID4gdGhpcy5jb250ZW50LmhlaWdodCA/IE1hdGguYWJzKHRoaXMudmlld1RvcCAtIHRoaXMuY29udGVudC5oZWlnaHQpIDogMDtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld1RvcCAtPSB0aGlzLmVsYXN0aWNUb3A7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2codGhpcy5lbGFzdGljVG9wLCB0aGlzLmVsYXN0aWNCb3R0b20sIHRoaXMudmlld1RvcCwgdGhpcy52aWV3Qm90dG9tKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v6K6h566X5L2N572uIOagueaNrmlkXHJcbiAgICBfY2FsY0l0ZW1Qb3MoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgdG9wOiBudW1iZXIsIGJvdHRvbTogbnVtYmVyLCBsZWZ0OiBudW1iZXIsIHJpZ2h0OiBudW1iZXIsIGl0ZW1YOiBudW1iZXIsIGl0ZW1ZOiBudW1iZXI7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLl9hbGlnbikge1xyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkhPUklaT05UQUw6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2hvcml6b250YWxEaXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLkxFRlRfVE9fUklHSFQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2N1c3RvbVNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaXhlZDogYW55ID0gdGhpcy5fZ2V0Rml4ZWRTaXplKGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSB0aGlzLl9sZWZ0R2FwICsgKCh0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcCkgKiAoaWQgLSBmaXhlZC5jb3VudCkpICsgKGZpeGVkLnZhbCArICh0aGlzLl9jb2x1bW5HYXAgKiBmaXhlZC5jb3VudCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNzOiBudW1iZXIgPSB0aGlzLl9jdXN0b21TaXplW2lkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0gKGNzID4gMCA/IGNzIDogdGhpcy5faXRlbVNpemUud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHRoaXMuX2xlZnRHYXAgKyAoKHRoaXMuX2l0ZW1TaXplLndpZHRoICsgdGhpcy5fY29sdW1uR2FwKSAqIGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0gdGhpcy5faXRlbVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFja0NlbnRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCAtPSB0aGlzLl9sZWZ0R2FwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9mZnNldDogbnVtYmVyID0gKHRoaXMuY29udGVudC53aWR0aCAvIDIpIC0gKHRoaXMuX2FsbEl0ZW1TaXplTm9FZGdlIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ICs9IG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodCA9IGxlZnQgKyB3aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGxlZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogcmlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBsZWZ0ICsgKHRoaXMuX2l0ZW1UbXAuYW5jaG9yWCAqIHdpZHRoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX2l0ZW1UbXAueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5SSUdIVF9UT19MRUZUOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jdXN0b21TaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZml4ZWQ6IGFueSA9IHRoaXMuX2dldEZpeGVkU2l6ZShpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodCA9IC10aGlzLl9yaWdodEdhcCAtICgodGhpcy5faXRlbVNpemUud2lkdGggKyB0aGlzLl9jb2x1bW5HYXApICogKGlkIC0gZml4ZWQuY291bnQpKSAtIChmaXhlZC52YWwgKyAodGhpcy5fY29sdW1uR2FwICogZml4ZWQuY291bnQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjczogbnVtYmVyID0gdGhpcy5fY3VzdG9tU2l6ZVtpZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IChjcyA+IDAgPyBjcyA6IHRoaXMuX2l0ZW1TaXplLndpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gLXRoaXMuX3JpZ2h0R2FwIC0gKCh0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcCkgKiBpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHRoaXMuX2l0ZW1TaXplLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhY2tDZW50ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ICs9IHRoaXMuX3JpZ2h0R2FwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9mZnNldDogbnVtYmVyID0gKHRoaXMuY29udGVudC53aWR0aCAvIDIpIC0gKHRoaXMuX2FsbEl0ZW1TaXplTm9FZGdlIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodCAtPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHJpZ2h0IC0gd2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogcmlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBsZWZ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogbGVmdCArICh0aGlzLl9pdGVtVG1wLmFuY2hvclggKiB3aWR0aCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLl9pdGVtVG1wLnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuVkVSVElDQUw6IHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fdmVydGljYWxEaXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5UT1BfVE9fQk9UVE9NOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jdXN0b21TaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZml4ZWQ6IGFueSA9IHRoaXMuX2dldEZpeGVkU2l6ZShpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3AgPSAtdGhpcy5fdG9wR2FwIC0gKCh0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgKyB0aGlzLl9saW5lR2FwKSAqIChpZCAtIGZpeGVkLmNvdW50KSkgLSAoZml4ZWQudmFsICsgKHRoaXMuX2xpbmVHYXAgKiBmaXhlZC5jb3VudCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNzOiBudW1iZXIgPSB0aGlzLl9jdXN0b21TaXplW2lkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IChjcyA+IDAgPyBjcyA6IHRoaXMuX2l0ZW1TaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3AgPSAtdGhpcy5fdG9wR2FwIC0gKCh0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgKyB0aGlzLl9saW5lR2FwKSAqIGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IHRoaXMuX2l0ZW1TaXplLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYWNrQ2VudGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3AgKz0gdGhpcy5fdG9wR2FwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9mZnNldDogbnVtYmVyID0gKHRoaXMuY29udGVudC5oZWlnaHQgLyAyKSAtICh0aGlzLl9hbGxJdGVtU2l6ZU5vRWRnZSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wIC09IG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b20gPSB0b3AgLSBoZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHRvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogYm90dG9tLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5faXRlbVRtcC54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogYm90dG9tICsgKHRoaXMuX2l0ZW1UbXAuYW5jaG9yWSAqIGhlaWdodCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLkJPVFRPTV9UT19UT1A6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2N1c3RvbVNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaXhlZDogYW55ID0gdGhpcy5fZ2V0Rml4ZWRTaXplKGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbSA9IHRoaXMuX2JvdHRvbUdhcCArICgodGhpcy5faXRlbVNpemUuaGVpZ2h0ICsgdGhpcy5fbGluZUdhcCkgKiAoaWQgLSBmaXhlZC5jb3VudCkpICsgKGZpeGVkLnZhbCArICh0aGlzLl9saW5lR2FwICogZml4ZWQuY291bnQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjczogbnVtYmVyID0gdGhpcy5fY3VzdG9tU2l6ZVtpZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSAoY3MgPiAwID8gY3MgOiB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tID0gdGhpcy5fYm90dG9tR2FwICsgKCh0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgKyB0aGlzLl9saW5lR2FwKSAqIGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IHRoaXMuX2l0ZW1TaXplLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYWNrQ2VudGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b20gLT0gdGhpcy5fYm90dG9tR2FwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9mZnNldDogbnVtYmVyID0gKHRoaXMuY29udGVudC5oZWlnaHQgLyAyKSAtICh0aGlzLl9hbGxJdGVtU2l6ZU5vRWRnZSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tICs9IG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3AgPSBib3R0b20gKyBoZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHRvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogYm90dG9tLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5faXRlbVRtcC54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogYm90dG9tICsgKHRoaXMuX2l0ZW1UbXAuYW5jaG9yWSAqIGhlaWdodCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkdSSUQ6IHtcclxuICAgICAgICAgICAgICAgIGxldCBjb2xMaW5lOiBudW1iZXIgPSBNYXRoLmZsb29yKGlkIC8gdGhpcy5fY29sTGluZU51bSk7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX3N0YXJ0QXhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uSE9SSVpPTlRBTDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX3ZlcnRpY2FsRGlyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5UT1BfVE9fQk9UVE9NOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wID0gLXRoaXMuX3RvcEdhcCAtICgodGhpcy5faXRlbVNpemUuaGVpZ2h0ICsgdGhpcy5fbGluZUdhcCkgKiBjb2xMaW5lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b20gPSB0b3AgLSB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVkgPSBib3R0b20gKyAodGhpcy5faXRlbVRtcC5hbmNob3JZICogdGhpcy5faXRlbVNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLkJPVFRPTV9UT19UT1A6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b20gPSB0aGlzLl9ib3R0b21HYXAgKyAoKHRoaXMuX2l0ZW1TaXplLmhlaWdodCArIHRoaXMuX2xpbmVHYXApICogY29sTGluZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wID0gYm90dG9tICsgdGhpcy5faXRlbVNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1ZID0gYm90dG9tICsgKHRoaXMuX2l0ZW1UbXAuYW5jaG9yWSAqIHRoaXMuX2l0ZW1TaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVggPSB0aGlzLl9sZWZ0R2FwICsgKChpZCAlIHRoaXMuX2NvbExpbmVOdW0pICogKHRoaXMuX2l0ZW1TaXplLndpZHRoICsgdGhpcy5fY29sdW1uR2FwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5faG9yaXpvbnRhbERpcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5MRUZUX1RPX1JJR0hUOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVggKz0gKHRoaXMuX2l0ZW1UbXAuYW5jaG9yWCAqIHRoaXMuX2l0ZW1TaXplLndpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWCAtPSAodGhpcy5jb250ZW50LmFuY2hvclggKiB0aGlzLmNvbnRlbnQud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5SSUdIVF9UT19MRUZUOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVggKz0gKCgxIC0gdGhpcy5faXRlbVRtcC5hbmNob3JYKSAqIHRoaXMuX2l0ZW1TaXplLndpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWCAtPSAoKDEgLSB0aGlzLmNvbnRlbnQuYW5jaG9yWCkgKiB0aGlzLmNvbnRlbnQud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1YICo9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHRvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogYm90dG9tLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogaXRlbVgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBpdGVtWSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5WRVJUSUNBTDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2hvcml6b250YWxEaXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0Lkhvcml6b250YWxEaXJlY3Rpb24uTEVGVF9UT19SSUdIVDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSB0aGlzLl9sZWZ0R2FwICsgKCh0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcCkgKiBjb2xMaW5lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodCA9IGxlZnQgKyB0aGlzLl9pdGVtU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWCA9IGxlZnQgKyAodGhpcy5faXRlbVRtcC5hbmNob3JYICogdGhpcy5faXRlbVNpemUud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1YIC09ICh0aGlzLmNvbnRlbnQuYW5jaG9yWCAqIHRoaXMuY29udGVudC53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLlJJR0hUX1RPX0xFRlQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodCA9IC10aGlzLl9yaWdodEdhcCAtICgodGhpcy5faXRlbVNpemUud2lkdGggKyB0aGlzLl9jb2x1bW5HYXApICogY29sTGluZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHJpZ2h0IC0gdGhpcy5faXRlbVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVggPSBsZWZ0ICsgKHRoaXMuX2l0ZW1UbXAuYW5jaG9yWCAqIHRoaXMuX2l0ZW1TaXplLndpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWCArPSAoKDEgLSB0aGlzLmNvbnRlbnQuYW5jaG9yWCkgKiB0aGlzLmNvbnRlbnQud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1ZID0gLXRoaXMuX3RvcEdhcCAtICgoaWQgJSB0aGlzLl9jb2xMaW5lTnVtKSAqICh0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgKyB0aGlzLl9saW5lR2FwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fdmVydGljYWxEaXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLlRPUF9UT19CT1RUT006IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWSAtPSAoKDEgLSB0aGlzLl9pdGVtVG1wLmFuY2hvclkpICogdGhpcy5faXRlbVNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWSArPSAoKDEgLSB0aGlzLmNvbnRlbnQuYW5jaG9yWSkgKiB0aGlzLmNvbnRlbnQuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLkJPVFRPTV9UT19UT1A6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWSAtPSAoKHRoaXMuX2l0ZW1UbXAuYW5jaG9yWSkgKiB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1ZICs9ICh0aGlzLmNvbnRlbnQuYW5jaG9yWSAqIHRoaXMuY29udGVudC5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1ZICo9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBsZWZ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHJpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogaXRlbVgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBpdGVtWSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v6K6h566X5bey5a2Y5Zyo55qESXRlbeeahOS9jee9rlxyXG4gICAgX2NhbGNFeGlzdEl0ZW1Qb3MoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBpdGVtOiBhbnkgPSB0aGlzLmdldEl0ZW1CeUxpc3RJZChpZCk7XHJcbiAgICAgICAgaWYgKCFpdGVtKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICBsZXQgZGF0YTogYW55ID0ge1xyXG4gICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgIHg6IGl0ZW0ueCxcclxuICAgICAgICAgICAgeTogaXRlbS55LFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fc2l6ZVR5cGUpIHtcclxuICAgICAgICAgICAgZGF0YS50b3AgPSBpdGVtLnkgKyAoaXRlbS5oZWlnaHQgKiAoMSAtIGl0ZW0uYW5jaG9yWSkpO1xyXG4gICAgICAgICAgICBkYXRhLmJvdHRvbSA9IGl0ZW0ueSAtIChpdGVtLmhlaWdodCAqIGl0ZW0uYW5jaG9yWSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0YS5sZWZ0ID0gaXRlbS54IC0gKGl0ZW0ud2lkdGggKiBpdGVtLmFuY2hvclgpO1xyXG4gICAgICAgICAgICBkYXRhLnJpZ2h0ID0gaXRlbS54ICsgKGl0ZW0ud2lkdGggKiAoMSAtIGl0ZW0uYW5jaG9yWCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICAgIC8v6I635Y+WSXRlbeS9jee9rlxyXG4gICAgZ2V0SXRlbVBvcyhpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3ZpcnR1YWwpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWxjSXRlbVBvcyhpZCk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWxjSXRlbVBvcyhpZCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWxjRXhpc3RJdGVtUG9zKGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+iOt+WPluWbuuWumuWwuuWvuFxyXG4gICAgX2dldEZpeGVkU2l6ZShsaXN0SWQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5fY3VzdG9tU2l6ZSlcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgaWYgKGxpc3RJZCA9PSBudWxsKVxyXG4gICAgICAgICAgICBsaXN0SWQgPSB0aGlzLl9udW1JdGVtcztcclxuICAgICAgICBsZXQgZml4ZWQ6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IGNvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGlkIGluIHRoaXMuX2N1c3RvbVNpemUpIHtcclxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KGlkKSA8IGxpc3RJZCkge1xyXG4gICAgICAgICAgICAgICAgZml4ZWQgKz0gdGhpcy5fY3VzdG9tU2l6ZVtpZF07XHJcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHZhbDogZml4ZWQsXHJcbiAgICAgICAgICAgIGNvdW50OiBjb3VudCxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+a7muWKqOe7k+adn+aXti4uXHJcbiAgICBfb25TY3JvbGxCZWdhbigpIHtcclxuICAgICAgICB0aGlzLl9iZWdhblBvcyA9IHRoaXMuX3NpemVUeXBlID8gdGhpcy52aWV3VG9wIDogdGhpcy52aWV3TGVmdDtcclxuICAgIH1cclxuICAgIC8v5rua5Yqo57uT5p2f5pe2Li5cclxuICAgIF9vblNjcm9sbEVuZGVkKCkge1xyXG4gICAgICAgIGxldCB0OiBhbnkgPSB0aGlzO1xyXG4gICAgICAgIHQuY3VyU2Nyb2xsSXNUb3VjaCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0LnNjcm9sbFRvTGlzdElkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW06IGFueSA9IHQuZ2V0SXRlbUJ5TGlzdElkKHQuc2Nyb2xsVG9MaXN0SWQpO1xyXG4gICAgICAgICAgICB0LnNjcm9sbFRvTGlzdElkID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGl0ZW0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKC4xLCB7IHNjYWxlOiAxLjA2IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKC4xLCB7IHNjYWxlOiAxIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdC5fb25TY3JvbGxpbmcoKTtcclxuXHJcbiAgICAgICAgaWYgKHQuX3NsaWRlTW9kZSA9PSBTbGlkZVR5cGUuQURIRVJJTkcgJiZcclxuICAgICAgICAgICAgIXQuYWRoZXJpbmdcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgLy9jYy5sb2codC5hZGhlcmluZywgdC5fc2Nyb2xsVmlldy5pc0F1dG9TY3JvbGxpbmcoKSwgdC5fc2Nyb2xsVmlldy5pc1Njcm9sbGluZygpKTtcclxuICAgICAgICAgICAgdC5hZGhlcmUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHQuX3NsaWRlTW9kZSA9PSBTbGlkZVR5cGUuUEFHRSkge1xyXG4gICAgICAgICAgICBpZiAodC5fYmVnYW5Qb3MgIT0gbnVsbCAmJiB0LmN1clNjcm9sbElzVG91Y2gpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhZ2VBZGhlcmUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHQuYWRoZXJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyDop6bmkbjml7ZcclxuICAgIF9vblRvdWNoU3RhcnQoZXYsIGNhcHR1cmVMaXN0ZW5lcnMpIHtcclxuICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmlldz8uWydoYXNOZXN0ZWRWaWV3R3JvdXAnXSgpKS8vZXYsIGNhcHR1cmVMaXN0ZW5lcnNcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY3VyU2Nyb2xsSXNUb3VjaCA9IHRydWU7XHJcbiAgICAgICAgbGV0IGlzTWUgPSBldi5ldmVudFBoYXNlID09PSBjYy5FdmVudC5BVF9UQVJHRVQgJiYgZXYudGFyZ2V0ID09PSB0aGlzLm5vZGU7XHJcbiAgICAgICAgaWYgKCFpc01lKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtTm9kZTogYW55ID0gZXYudGFyZ2V0O1xyXG4gICAgICAgICAgICB3aGlsZSAoaXRlbU5vZGUuX2xpc3RJZCA9PSBudWxsICYmIGl0ZW1Ob2RlLnBhcmVudClcclxuICAgICAgICAgICAgICAgIGl0ZW1Ob2RlID0gaXRlbU5vZGUucGFyZW50O1xyXG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxJdGVtID0gaXRlbU5vZGUuX2xpc3RJZCAhPSBudWxsID8gaXRlbU5vZGUgOiBldi50YXJnZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/op6bmkbjmiqzotbfml7YuLlxyXG4gICAgX29uVG91Y2hVcCgpIHtcclxuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcclxuICAgICAgICB0Ll9zY3JvbGxQb3MgPSBudWxsO1xyXG4gICAgICAgIGlmICh0Ll9zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLkFESEVSSU5HKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFkaGVyaW5nKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWRoZXJpbmdCYXJyaWVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgdC5hZGhlcmUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHQuX3NsaWRlTW9kZSA9PSBTbGlkZVR5cGUuUEFHRSkge1xyXG4gICAgICAgICAgICBpZiAodC5fYmVnYW5Qb3MgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFnZUFkaGVyZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdC5hZGhlcmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zY3JvbGxJdGVtID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBfb25Ub3VjaENhbmNlbGxlZChldiwgY2FwdHVyZUxpc3RlbmVycykge1xyXG4gICAgICAgIGxldCB0ID0gdGhpcztcclxuICAgICAgICBpZiAodC5fc2Nyb2xsVmlldz8uWydoYXNOZXN0ZWRWaWV3R3JvdXAnXSgpIHx8IGV2LnNpbXVsYXRlKS8vZXYsIGNhcHR1cmVMaXN0ZW5lcnNcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0Ll9zY3JvbGxQb3MgPSBudWxsO1xyXG4gICAgICAgIGlmICh0Ll9zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLkFESEVSSU5HKSB7XHJcbiAgICAgICAgICAgIGlmICh0LmFkaGVyaW5nKVxyXG4gICAgICAgICAgICAgICAgdC5fYWRoZXJpbmdCYXJyaWVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgdC5hZGhlcmUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHQuX3NsaWRlTW9kZSA9PSBTbGlkZVR5cGUuUEFHRSkge1xyXG4gICAgICAgICAgICBpZiAodC5fYmVnYW5Qb3MgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdC5fcGFnZUFkaGVyZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdC5hZGhlcmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zY3JvbGxJdGVtID0gbnVsbDtcclxuICAgIH1cclxuICAgIC8v5b2T5bC65a+45pS55Y+YXHJcbiAgICBfb25TaXplQ2hhbmdlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGVja0luaXRlZChmYWxzZSkpXHJcbiAgICAgICAgICAgIHRoaXMuX29uU2Nyb2xsaW5nKCk7XHJcbiAgICB9XHJcbiAgICAvL+W9k0l0ZW3oh6rpgILlupRcclxuICAgIF9vbkl0ZW1BZGFwdGl2ZShpdGVtKSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuY2hlY2tJbml0ZWQoZmFsc2UpKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAoIXRoaXMuX3NpemVUeXBlICYmIGl0ZW0ud2lkdGggIT0gdGhpcy5faXRlbVNpemUud2lkdGgpXHJcbiAgICAgICAgICAgIHx8ICh0aGlzLl9zaXplVHlwZSAmJiBpdGVtLmhlaWdodCAhPSB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fY3VzdG9tU2l6ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N1c3RvbVNpemUgPSB7fTtcclxuICAgICAgICAgICAgbGV0IHZhbCA9IHRoaXMuX3NpemVUeXBlID8gaXRlbS5oZWlnaHQgOiBpdGVtLndpZHRoO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY3VzdG9tU2l6ZVtpdGVtLl9saXN0SWRdICE9IHZhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VzdG9tU2l6ZVtpdGVtLl9saXN0SWRdID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzaXplQ29udGVudCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jb250ZW50LmNoaWxkcmVuLmZvckVhY2goKGNoaWxkOiBjYy5Ob2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5fdXBkYXRlSXRlbVBvcyhjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQWxsKCk7XHJcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzlvZPliY3mraPlnKjov5DooYwgc2Nyb2xsVG/vvIzogq/lrprkvJrkuI3lh4bnoa7vvIzlnKjov5nph4zlgZrkv67mraNcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zY3JvbGxUb0xpc3RJZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsUG9zID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5fc2Nyb2xsVG9Tbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUbyh0aGlzLl9zY3JvbGxUb0xpc3RJZCwgTWF0aC5tYXgoMCwgdGhpcy5fc2Nyb2xsVG9FbmRUaW1lIC0gKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLyAxMDAwKSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIC8vUEFHReeymOmZhFxyXG4gICAgX3BhZ2VBZGhlcmUoKSB7XHJcbiAgICAgICAgbGV0IHQgPSB0aGlzO1xyXG4gICAgICAgIGlmICghdC5jeWNsaWMgJiYgKHQuZWxhc3RpY1RvcCA+IDAgfHwgdC5lbGFzdGljUmlnaHQgPiAwIHx8IHQuZWxhc3RpY0JvdHRvbSA+IDAgfHwgdC5lbGFzdGljTGVmdCA+IDApKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgbGV0IGN1clBvcyA9IHQuX3NpemVUeXBlID8gdC52aWV3VG9wIDogdC52aWV3TGVmdDtcclxuICAgICAgICBsZXQgZGlzID0gKHQuX3NpemVUeXBlID8gdC5ub2RlLmhlaWdodCA6IHQubm9kZS53aWR0aCkgKiB0LnBhZ2VEaXN0YW5jZTtcclxuICAgICAgICBsZXQgY2FuU2tpcCA9IE1hdGguYWJzKHQuX2JlZ2FuUG9zIC0gY3VyUG9zKSA+IGRpcztcclxuICAgICAgICBpZiAoY2FuU2tpcCkge1xyXG4gICAgICAgICAgICBsZXQgdGltZUluU2Vjb25kID0gLjU7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodC5fYWxpZ25DYWxjVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iExFRlRfVE9fUklHSFTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iExFRlRfVE9fUklHSFTvvIlcclxuICAgICAgICAgICAgICAgIGNhc2UgNDovL+WNleWIl1ZFUlRJQ0FM77yIQk9UVE9NX1RPX1RPUO+8ieOAgee9keagvEhPUklaT05UQUzvvIhCT1RUT01fVE9fVE9Q77yJXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQuX2JlZ2FuUG9zID4gY3VyUG9zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQucHJlUGFnZSh0aW1lSW5TZWNvbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coJ19wYWdlQWRoZXJlICAgUFBQUFBQUFBQUFBQUFBQJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5uZXh0UGFnZSh0aW1lSW5TZWNvbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coJ19wYWdlQWRoZXJlICAgTk5OTk5OTk5OTk5OTk5OJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iFJJR0hUX1RPX0xFRlTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iFJJR0hUX1RPX0xFRlTvvIlcclxuICAgICAgICAgICAgICAgIGNhc2UgMzovL+WNleWIl1ZFUlRJQ0FM77yIVE9QX1RPX0JPVFRPTe+8ieOAgee9keagvEhPUklaT05UQUzvvIhUT1BfVE9fQk9UVE9N77yJXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQuX2JlZ2FuUG9zIDwgY3VyUG9zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQucHJlUGFnZSh0aW1lSW5TZWNvbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQubmV4dFBhZ2UodGltZUluU2Vjb25kKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHQuZWxhc3RpY1RvcCA8PSAwICYmIHQuZWxhc3RpY1JpZ2h0IDw9IDAgJiYgdC5lbGFzdGljQm90dG9tIDw9IDAgJiYgdC5lbGFzdGljTGVmdCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHQuYWRoZXJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHQuX2JlZ2FuUG9zID0gbnVsbDtcclxuICAgIH1cclxuICAgIC8v57KY6ZmEXHJcbiAgICBhZGhlcmUoKSB7XHJcbiAgICAgICAgbGV0IHQ6IGFueSA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCF0LmNoZWNrSW5pdGVkKCkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZiAodC5lbGFzdGljVG9wID4gMCB8fCB0LmVsYXN0aWNSaWdodCA+IDAgfHwgdC5lbGFzdGljQm90dG9tID4gMCB8fCB0LmVsYXN0aWNMZWZ0ID4gMClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHQuYWRoZXJpbmcgPSB0cnVlO1xyXG4gICAgICAgIHQuX2NhbGNOZWFyZXN0SXRlbSgpO1xyXG4gICAgICAgIGxldCBvZmZzZXQ6IG51bWJlciA9ICh0Ll9zaXplVHlwZSA/IHQuX3RvcEdhcCA6IHQuX2xlZnRHYXApIC8gKHQuX3NpemVUeXBlID8gdC5ub2RlLmhlaWdodCA6IHQubm9kZS53aWR0aCk7XHJcbiAgICAgICAgbGV0IHRpbWVJblNlY29uZDogbnVtYmVyID0gLjc7XHJcbiAgICAgICAgdC5zY3JvbGxUbyh0Lm5lYXJlc3RMaXN0SWQsIHRpbWVJblNlY29uZCwgb2Zmc2V0KTtcclxuICAgIH1cclxuICAgIC8vVXBkYXRlLi5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0gPD0gMCB8fCB0aGlzLl91cGRhdGVEb25lKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gY2MubG9nKHRoaXMuZGlzcGxheURhdGEubGVuZ3RoLCB0aGlzLl91cGRhdGVDb3VudGVyLCB0aGlzLmRpc3BsYXlEYXRhW3RoaXMuX3VwZGF0ZUNvdW50ZXJdKTtcclxuICAgICAgICBpZiAodGhpcy5fdmlydHVhbCkge1xyXG4gICAgICAgICAgICBsZXQgbGVuOiBudW1iZXIgPSAodGhpcy5fdXBkYXRlQ291bnRlciArIHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtKSA+IHRoaXMuZGlzcGxheUl0ZW1OdW0gPyB0aGlzLmRpc3BsYXlJdGVtTnVtIDogKHRoaXMuX3VwZGF0ZUNvdW50ZXIgKyB0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG46IG51bWJlciA9IHRoaXMuX3VwZGF0ZUNvdW50ZXI7IG4gPCBsZW47IG4rKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGE6IGFueSA9IHRoaXMuZGlzcGxheURhdGFbbl07XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZU9yVXBkYXRlSXRlbShkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX3VwZGF0ZUNvdW50ZXIgPj0gdGhpcy5kaXNwbGF5SXRlbU51bSAtIDEpIHsgLy/mnIDlkI7kuIDkuKpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kb25lQWZ0ZXJVcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVDb3VudGVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKCF0aGlzLl9zY3JvbGxWaWV3LmlzU2Nyb2xsaW5nKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZG9uZUFmdGVyVXBkYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RlbFJlZHVuZGFudEl0ZW0oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mb3JjZVVwZGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbGNOZWFyZXN0SXRlbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlTW9kZSA9PSBTbGlkZVR5cGUuUEFHRSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJQYWdlTnVtID0gdGhpcy5uZWFyZXN0TGlzdElkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ291bnRlciArPSB0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl91cGRhdGVDb3VudGVyIDwgdGhpcy5fbnVtSXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBsZW46IG51bWJlciA9ICh0aGlzLl91cGRhdGVDb3VudGVyICsgdGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0pID4gdGhpcy5fbnVtSXRlbXMgPyB0aGlzLl9udW1JdGVtcyA6ICh0aGlzLl91cGRhdGVDb3VudGVyICsgdGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0pO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbjogbnVtYmVyID0gdGhpcy5fdXBkYXRlQ291bnRlcjsgbiA8IGxlbjsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlT3JVcGRhdGVJdGVtMihuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvdW50ZXIgKz0gdGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbGNOZWFyZXN0SXRlbSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVNb2RlID09IFNsaWRlVHlwZS5QQUdFKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VyUGFnZU51bSA9IHRoaXMubmVhcmVzdExpc3RJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu65oiW5pu05pawSXRlbe+8iOiZmuaLn+WIl+ihqOeUqO+8iVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEg5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIF9jcmVhdGVPclVwZGF0ZUl0ZW0oZGF0YTogYW55KSB7XHJcbiAgICAgICAgbGV0IGl0ZW06IGFueSA9IHRoaXMuZ2V0SXRlbUJ5TGlzdElkKGRhdGEuaWQpO1xyXG4gICAgICAgIGlmICghaXRlbSkgeyAvL+WmguaenOS4jeWtmOWcqFxyXG4gICAgICAgICAgICBsZXQgY2FuR2V0OiBib29sZWFuID0gdGhpcy5fcG9vbC5zaXplKCkgPiAwO1xyXG4gICAgICAgICAgICBpZiAoY2FuR2V0KSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gdGhpcy5fcG9vbC5nZXQoKTtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZygn5LuO5rGg5Lit5Y+W5Ye6OjogICDml6dpZCA9JywgaXRlbVsnX2xpc3RJZCddLCAn77yM5pawaWQgPScsIGRhdGEuaWQsIGl0ZW0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuX2l0ZW1UbXApO1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKCfmlrDlu7o6OicsIGRhdGEuaWQsIGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghY2FuR2V0IHx8ICFjYy5pc1ZhbGlkKGl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5faXRlbVRtcCk7XHJcbiAgICAgICAgICAgICAgICBjYW5HZXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXRlbS5fbGlzdElkICE9IGRhdGEuaWQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uX2xpc3RJZCA9IGRhdGEuaWQ7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnNldENvbnRlbnRTaXplKHRoaXMuX2l0ZW1TaXplKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdGVtLnNldFBvc2l0aW9uKGNjLnYyKGRhdGEueCwgZGF0YS55KSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc2V0SXRlbVNpemUoaXRlbSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5hZGRDaGlsZChpdGVtKTtcclxuICAgICAgICAgICAgaWYgKGNhbkdldCAmJiB0aGlzLl9uZWVkVXBkYXRlV2lkZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgd2lkZ2V0OiBjYy5XaWRnZXQgPSBpdGVtLmdldENvbXBvbmVudChjYy5XaWRnZXQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpZGdldClcclxuICAgICAgICAgICAgICAgICAgICB3aWRnZXQudXBkYXRlQWxpZ25tZW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlbS5zZXRTaWJsaW5nSW5kZXgodGhpcy5jb250ZW50LmNoaWxkcmVuQ291bnQgLSAxKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBsaXN0SXRlbTogTGlzdEl0ZW0gPSBpdGVtLmdldENvbXBvbmVudChMaXN0SXRlbSk7XHJcbiAgICAgICAgICAgIGl0ZW1bJ2xpc3RJdGVtJ10gPSBsaXN0SXRlbTtcclxuICAgICAgICAgICAgaWYgKGxpc3RJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0SXRlbS5saXN0SWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgbGlzdEl0ZW0ubGlzdCA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBsaXN0SXRlbS5fcmVnaXN0ZXJFdmVudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlckV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoW3RoaXMucmVuZGVyRXZlbnRdLCBpdGVtLCBkYXRhLmlkICUgdGhpcy5fYWN0dWFsTnVtSXRlbXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9mb3JjZVVwZGF0ZSAmJiB0aGlzLnJlbmRlckV2ZW50KSB7IC8v5by65Yi25pu05pawXHJcbiAgICAgICAgICAgIGl0ZW0uc2V0UG9zaXRpb24oY2MudjIoZGF0YS54LCBkYXRhLnkpKTtcclxuICAgICAgICAgICAgdGhpcy5fcmVzZXRJdGVtU2l6ZShpdGVtKTtcclxuICAgICAgICAgICAgLy8gY2MubG9nKCdBREQ6OicsIGRhdGEuaWQsIGl0ZW0pO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZW5kZXJFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFt0aGlzLnJlbmRlckV2ZW50XSwgaXRlbSwgZGF0YS5pZCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9yZXNldEl0ZW1TaXplKGl0ZW0pO1xyXG5cclxuICAgICAgICB0aGlzLl91cGRhdGVMaXN0SXRlbShpdGVtWydsaXN0SXRlbSddKTtcclxuICAgICAgICBpZiAodGhpcy5fbGFzdERpc3BsYXlEYXRhLmluZGV4T2YoZGF0YS5pZCkgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xhc3REaXNwbGF5RGF0YS5wdXNoKGRhdGEuaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v5Yib5bu65oiW5pu05pawSXRlbe+8iOmdnuiZmuaLn+WIl+ihqOeUqO+8iVxyXG4gICAgX2NyZWF0ZU9yVXBkYXRlSXRlbTIobGlzdElkOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgaXRlbTogYW55ID0gdGhpcy5jb250ZW50LmNoaWxkcmVuW2xpc3RJZF07XHJcbiAgICAgICAgbGV0IGxpc3RJdGVtOiBMaXN0SXRlbTtcclxuICAgICAgICBpZiAoIWl0ZW0pIHsgLy/lpoLmnpzkuI3lrZjlnKhcclxuICAgICAgICAgICAgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuX2l0ZW1UbXApO1xyXG4gICAgICAgICAgICBpdGVtLl9saXN0SWQgPSBsaXN0SWQ7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5hZGRDaGlsZChpdGVtKTtcclxuICAgICAgICAgICAgbGlzdEl0ZW0gPSBpdGVtLmdldENvbXBvbmVudChMaXN0SXRlbSk7XHJcbiAgICAgICAgICAgIGl0ZW1bJ2xpc3RJdGVtJ10gPSBsaXN0SXRlbTtcclxuICAgICAgICAgICAgaWYgKGxpc3RJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0SXRlbS5saXN0SWQgPSBsaXN0SWQ7XHJcbiAgICAgICAgICAgICAgICBsaXN0SXRlbS5saXN0ID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGxpc3RJdGVtLl9yZWdpc3RlckV2ZW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhbdGhpcy5yZW5kZXJFdmVudF0sIGl0ZW0sIGxpc3RJZCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fZm9yY2VVcGRhdGUgJiYgdGhpcy5yZW5kZXJFdmVudCkgeyAvL+W8uuWItuabtOaWsFxyXG4gICAgICAgICAgICBpdGVtLl9saXN0SWQgPSBsaXN0SWQ7XHJcbiAgICAgICAgICAgIGlmIChsaXN0SXRlbSlcclxuICAgICAgICAgICAgICAgIGxpc3RJdGVtLmxpc3RJZCA9IGxpc3RJZDtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhbdGhpcy5yZW5kZXJFdmVudF0sIGl0ZW0sIGxpc3RJZCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl91cGRhdGVMaXN0SXRlbShsaXN0SXRlbSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xhc3REaXNwbGF5RGF0YS5pbmRleE9mKGxpc3RJZCkgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xhc3REaXNwbGF5RGF0YS5wdXNoKGxpc3RJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF91cGRhdGVMaXN0SXRlbShsaXN0SXRlbTogTGlzdEl0ZW0pIHtcclxuICAgICAgICBpZiAoIWxpc3RJdGVtKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRNb2RlID4gU2VsZWN0ZWRUeXBlLk5PTkUpIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW06IGFueSA9IGxpc3RJdGVtLm5vZGU7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5zZWxlY3RlZE1vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgU2VsZWN0ZWRUeXBlLlNJTkdMRTpcclxuICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbS5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWRJZCA9PSBpdGVtLl9saXN0SWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFNlbGVjdGVkVHlwZS5NVUxUOlxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtLnNlbGVjdGVkID0gdGhpcy5tdWx0U2VsZWN0ZWQuaW5kZXhPZihpdGVtLl9saXN0SWQpID49IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+S7heiZmuaLn+WIl+ihqOeUqFxyXG4gICAgX3Jlc2V0SXRlbVNpemUoaXRlbTogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzaXplOiBudW1iZXI7XHJcbiAgICAgICAgaWYgKHRoaXMuX2N1c3RvbVNpemUgJiYgdGhpcy5fY3VzdG9tU2l6ZVtpdGVtLl9saXN0SWRdKSB7XHJcbiAgICAgICAgICAgIHNpemUgPSB0aGlzLl9jdXN0b21TaXplW2l0ZW0uX2xpc3RJZF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NvbExpbmVOdW0gPiAxKVxyXG4gICAgICAgICAgICAgICAgaXRlbS5zZXRDb250ZW50U2l6ZSh0aGlzLl9pdGVtU2l6ZSk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHNpemUgPSB0aGlzLl9zaXplVHlwZSA/IHRoaXMuX2l0ZW1TaXplLmhlaWdodCA6IHRoaXMuX2l0ZW1TaXplLndpZHRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2l6ZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc2l6ZVR5cGUpXHJcbiAgICAgICAgICAgICAgICBpdGVtLmhlaWdodCA9IHNpemU7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGl0ZW0ud2lkdGggPSBzaXplO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5pu05pawSXRlbeS9jee9rlxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8fE5vZGV9IGxpc3RJZE9ySXRlbVxyXG4gICAgICovXHJcbiAgICBfdXBkYXRlSXRlbVBvcyhsaXN0SWRPckl0ZW06IGFueSkge1xyXG4gICAgICAgIGxldCBpdGVtOiBhbnkgPSBpc05hTihsaXN0SWRPckl0ZW0pID8gbGlzdElkT3JJdGVtIDogdGhpcy5nZXRJdGVtQnlMaXN0SWQobGlzdElkT3JJdGVtKTtcclxuICAgICAgICBsZXQgcG9zOiBhbnkgPSB0aGlzLmdldEl0ZW1Qb3MoaXRlbS5fbGlzdElkKTtcclxuICAgICAgICBpdGVtLnNldFBvc2l0aW9uKHBvcy54LCBwb3MueSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruWkmumAiVxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJncyDlj6/ku6XmmK/ljZXkuKpsaXN0SWTvvIzkuZ/lj6/mmK/kuKpsaXN0SWTmlbDnu4RcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gYm9vbCDlgLzvvIzlpoLmnpzkuLpudWxs55qE6K+d77yM5YiZ55u05o6l55SoYXJnc+imhuebllxyXG4gICAgICovXHJcbiAgICBzZXRNdWx0U2VsZWN0ZWQoYXJnczogYW55LCBib29sOiBib29sZWFuKSB7XHJcbiAgICAgICAgbGV0IHQ6IGFueSA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCF0LmNoZWNrSW5pdGVkKCkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJncykpIHtcclxuICAgICAgICAgICAgYXJncyA9IFthcmdzXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJvb2wgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0Lm11bHRTZWxlY3RlZCA9IGFyZ3M7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGxpc3RJZDogbnVtYmVyLCBzdWI6IG51bWJlcjtcclxuICAgICAgICAgICAgaWYgKGJvb2wpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IG46IG51bWJlciA9IGFyZ3MubGVuZ3RoIC0gMTsgbiA+PSAwOyBuLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0SWQgPSBhcmdzW25dO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YiA9IHQubXVsdFNlbGVjdGVkLmluZGV4T2YobGlzdElkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3ViIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Lm11bHRTZWxlY3RlZC5wdXNoKGxpc3RJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbjogbnVtYmVyID0gYXJncy5sZW5ndGggLSAxOyBuID49IDA7IG4tLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RJZCA9IGFyZ3Nbbl07XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViID0gdC5tdWx0U2VsZWN0ZWQuaW5kZXhPZihsaXN0SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWIgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Lm11bHRTZWxlY3RlZC5zcGxpY2Uoc3ViLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdC5fZm9yY2VVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIHQuX29uU2Nyb2xsaW5nKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWkmumAieaVsOaNrlxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgZ2V0TXVsdFNlbGVjdGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm11bHRTZWxlY3RlZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5aSa6YCJ5piv5ZCm5pyJ6YCJ5oupXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGlzdElkIOe0ouW8lVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgaGFzTXVsdFNlbGVjdGVkKGxpc3RJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubXVsdFNlbGVjdGVkICYmIHRoaXMubXVsdFNlbGVjdGVkLmluZGV4T2YobGlzdElkKSA+PSAwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDmjIflrprnmoRJdGVtXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcmdzIOWNleS4qmxpc3RJZO+8jOaIluiAheaVsOe7hFxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgdXBkYXRlSXRlbShhcmdzOiBhbnkpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2tJbml0ZWQoKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcmdzKSkge1xyXG4gICAgICAgICAgICBhcmdzID0gW2FyZ3NdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBuOiBudW1iZXIgPSAwLCBsZW46IG51bWJlciA9IGFyZ3MubGVuZ3RoOyBuIDwgbGVuOyBuKyspIHtcclxuICAgICAgICAgICAgbGV0IGxpc3RJZDogbnVtYmVyID0gYXJnc1tuXTtcclxuICAgICAgICAgICAgbGV0IGl0ZW06IGFueSA9IHRoaXMuZ2V0SXRlbUJ5TGlzdElkKGxpc3RJZCk7XHJcbiAgICAgICAgICAgIGlmIChpdGVtKVxyXG4gICAgICAgICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFt0aGlzLnJlbmRlckV2ZW50XSwgaXRlbSwgbGlzdElkICUgdGhpcy5fYWN0dWFsTnVtSXRlbXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5pu05paw5YWo6YOoXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZUFsbCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2tJbml0ZWQoKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubnVtSXRlbXMgPSB0aGlzLm51bUl0ZW1zO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmoLnmja5MaXN0SUTojrflj5ZJdGVtXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbGlzdElkXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBnZXRJdGVtQnlMaXN0SWQobGlzdElkOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5jb250ZW50KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG46IG51bWJlciA9IHRoaXMuY29udGVudC5jaGlsZHJlbkNvdW50IC0gMTsgbiA+PSAwOyBuLS0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtOiBhbnkgPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW5bbl07XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5fbGlzdElkID09IGxpc3RJZClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Zyo5pi+56S65Yy65Z+f5aSW55qESXRlbVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgX2dldE91dHNpZGVJdGVtKCkge1xyXG4gICAgICAgIGxldCBpdGVtOiBhbnk7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55W10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBuOiBudW1iZXIgPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW5Db3VudCAtIDE7IG4gPj0gMDsgbi0tKSB7XHJcbiAgICAgICAgICAgIGl0ZW0gPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW5bbl07XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kaXNwbGF5RGF0YS5maW5kKGQgPT4gZC5pZCA9PSBpdGVtLl9saXN0SWQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgLy/liKDpmaTmmL7npLrljLrln5/ku6XlpJbnmoRJdGVtXHJcbiAgICBfZGVsUmVkdW5kYW50SXRlbSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fdmlydHVhbCkge1xyXG4gICAgICAgICAgICBsZXQgYXJyOiBhbnlbXSA9IHRoaXMuX2dldE91dHNpZGVJdGVtKCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG46IG51bWJlciA9IGFyci5sZW5ndGggLSAxOyBuID49IDA7IG4tLSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW06IGFueSA9IGFycltuXTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zY3JvbGxJdGVtICYmIGl0ZW0uX2xpc3RJZCA9PSB0aGlzLl9zY3JvbGxJdGVtLl9saXN0SWQpXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmlzQ2FjaGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Bvb2wucHV0KGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbTogbnVtYmVyID0gdGhpcy5fbGFzdERpc3BsYXlEYXRhLmxlbmd0aCAtIDE7IG0gPj0gMDsgbS0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2xhc3REaXNwbGF5RGF0YVttXSA9PSBpdGVtLl9saXN0SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGFzdERpc3BsYXlEYXRhLnNwbGljZShtLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZygn5a2Y5YWlOjonLCBzdHIsICcgICAgcG9vbC5sZW5ndGggPScsIHRoaXMuX3Bvb2wubGVuZ3RoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5jb250ZW50LmNoaWxkcmVuQ291bnQgPiB0aGlzLl9udW1JdGVtcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVsU2luZ2xlSXRlbSh0aGlzLmNvbnRlbnQuY2hpbGRyZW5bdGhpcy5jb250ZW50LmNoaWxkcmVuQ291bnQgLSAxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+WIoOmZpOWNleS4qkl0ZW1cclxuICAgIF9kZWxTaW5nbGVJdGVtKGl0ZW06IGFueSkge1xyXG4gICAgICAgIC8vIGNjLmxvZygnREVMOjonLCBpdGVtWydfbGlzdElkJ10sIGl0ZW0pO1xyXG4gICAgICAgIGl0ZW0ucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgIGlmIChpdGVtLmRlc3Ryb3kpXHJcbiAgICAgICAgICAgIGl0ZW0uZGVzdHJveSgpO1xyXG4gICAgICAgIGl0ZW0gPSBudWxsO1xyXG4gICAgfVxyXG4gICAgLyoqIFxyXG4gICAgICog5Yqo5pWI5Yig6ZmkSXRlbe+8iOatpOaWueazleWPqumAgueUqOS6juiZmuaLn+WIl+ihqO+8jOWNs192aXJ0dWFsPXRydWXvvIlcclxuICAgICAqIOS4gOWumuimgeWcqOWbnuiwg+WHveaVsOmHjOmHjeaWsOiuvue9ruaWsOeahG51bUl0ZW1z6L+b6KGM5Yi35paw77yM5q+V56uf5pysTGlzdOaYr+mdoOaVsOaNrumpseWKqOeahOOAglxyXG4gICAgICovXHJcbiAgICBhbmlEZWxJdGVtKGxpc3RJZDogbnVtYmVyLCBjYWxsRnVuYzogRnVuY3Rpb24sIGFuaVR5cGU6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0OiBhbnkgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoIXQuY2hlY2tJbml0ZWQoKSB8fCB0LmN5Y2xpYyB8fCAhdC5fdmlydHVhbClcclxuICAgICAgICAgICAgcmV0dXJuIGNjLmVycm9yKCdUaGlzIGZ1bmN0aW9uIGlzIG5vdCBhbGxvd2VkIHRvIGJlIGNhbGxlZCEnKTtcclxuXHJcbiAgICAgICAgaWYgKCFjYWxsRnVuYylcclxuICAgICAgICAgICAgcmV0dXJuIGNjLmVycm9yKCdDYWxsRnVuYyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgTlVMTCwgWW91IG5lZWQgdG8gZGVsZXRlIHRoZSBjb3JyZXNwb25kaW5nIGluZGV4IGluIHRoZSBkYXRhIGFycmF5IGluIHRoZSBDYWxsRnVuYyEnKTtcclxuXHJcbiAgICAgICAgaWYgKHQuX2FuaURlbFJ1bmluZylcclxuICAgICAgICAgICAgcmV0dXJuIGNjLndhcm4oJ1BsZWFzZSB3YWl0IGZvciB0aGUgY3VycmVudCBkZWxldGlvbiB0byBmaW5pc2ghJyk7XHJcblxyXG4gICAgICAgIGxldCBpdGVtOiBhbnkgPSB0LmdldEl0ZW1CeUxpc3RJZChsaXN0SWQpO1xyXG4gICAgICAgIGxldCBsaXN0SXRlbTogTGlzdEl0ZW07XHJcbiAgICAgICAgaWYgKCFpdGVtKSB7XHJcbiAgICAgICAgICAgIGNhbGxGdW5jKGxpc3RJZCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaXN0SXRlbSA9IGl0ZW0uZ2V0Q29tcG9uZW50KExpc3RJdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdC5fYW5pRGVsUnVuaW5nID0gdHJ1ZTtcclxuICAgICAgICB0Ll9hbmlEZWxDQiA9IGNhbGxGdW5jO1xyXG4gICAgICAgIHQuX2FuaURlbEl0ZW0gPSBpdGVtO1xyXG4gICAgICAgIHQuX2FuaURlbEJlZm9yZVBvcyA9IGl0ZW0ucG9zaXRpb247XHJcbiAgICAgICAgdC5fYW5pRGVsQmVmb3JlU2NhbGUgPSBpdGVtLnNjYWxlO1xyXG4gICAgICAgIGxldCBjdXJMYXN0SWQ6IG51bWJlciA9IHQuZGlzcGxheURhdGFbdC5kaXNwbGF5RGF0YS5sZW5ndGggLSAxXS5pZDtcclxuICAgICAgICBsZXQgcmVzZXRTZWxlY3RlZElkOiBib29sZWFuID0gbGlzdEl0ZW0uc2VsZWN0ZWQ7XHJcbiAgICAgICAgbGlzdEl0ZW0uc2hvd0FuaShhbmlUeXBlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5Yik5pat5pyJ5rKh5pyJ5LiL5LiA5Liq77yM5aaC5p6c5pyJ55qE6K+d77yM5Yib5bu657KX5p2lXHJcbiAgICAgICAgICAgIGxldCBuZXdJZDogbnVtYmVyO1xyXG4gICAgICAgICAgICBpZiAoY3VyTGFzdElkIDwgdC5fbnVtSXRlbXMgLSAyKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdJZCA9IGN1ckxhc3RJZCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5ld0lkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdEYXRhOiBhbnkgPSB0Ll9jYWxjSXRlbVBvcyhuZXdJZCk7XHJcbiAgICAgICAgICAgICAgICB0LmRpc3BsYXlEYXRhLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodC5fdmlydHVhbClcclxuICAgICAgICAgICAgICAgICAgICB0Ll9jcmVhdGVPclVwZGF0ZUl0ZW0obmV3RGF0YSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdC5fY3JlYXRlT3JVcGRhdGVJdGVtMihuZXdJZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgdC5fbnVtSXRlbXMtLTtcclxuICAgICAgICAgICAgaWYgKHQuc2VsZWN0ZWRNb2RlID09IFNlbGVjdGVkVHlwZS5TSU5HTEUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNldFNlbGVjdGVkSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0Ll9zZWxlY3RlZElkID0gLTE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHQuX3NlbGVjdGVkSWQgLSAxID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0Ll9zZWxlY3RlZElkLS07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodC5zZWxlY3RlZE1vZGUgPT0gU2VsZWN0ZWRUeXBlLk1VTFQgJiYgdC5tdWx0U2VsZWN0ZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3ViOiBudW1iZXIgPSB0Lm11bHRTZWxlY3RlZC5pbmRleE9mKGxpc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3ViID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0Lm11bHRTZWxlY3RlZC5zcGxpY2Uoc3ViLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8v5aSa6YCJ55qE5pWw5o2u77yM5Zyo5YW25ZCO55qE5YWo6YOo5YeP5LiAXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBuOiBudW1iZXIgPSB0Lm11bHRTZWxlY3RlZC5sZW5ndGggLSAxOyBuID49IDA7IG4tLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpZDogbnVtYmVyID0gdC5tdWx0U2VsZWN0ZWRbbl07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkID49IGxpc3RJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5tdWx0U2VsZWN0ZWRbbl0tLTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodC5fY3VzdG9tU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHQuX2N1c3RvbVNpemVbbGlzdElkXSlcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdC5fY3VzdG9tU2l6ZVtsaXN0SWRdO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0N1c3RvbVNpemU6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgbGV0IHNpemU6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGlkIGluIHQuX2N1c3RvbVNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaXplID0gdC5fY3VzdG9tU2l6ZVtpZF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkTnVtYmVyOiBudW1iZXIgPSBwYXJzZUludChpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q3VzdG9tU2l6ZVtpZE51bWJlciAtIChpZE51bWJlciA+PSBsaXN0SWQgPyAxIDogMCldID0gc2l6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHQuX2N1c3RvbVNpemUgPSBuZXdDdXN0b21TaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5ZCO6Z2i55qESXRlbeWQkeWJjeaAvOeahOWKqOaViFxyXG4gICAgICAgICAgICBsZXQgc2VjOiBudW1iZXIgPSAuMjMzMztcclxuICAgICAgICAgICAgbGV0IHR3ZWVuOiBjYy5Ud2VlbiwgaGF2ZUNCOiBib29sZWFuO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBuOiBudW1iZXIgPSBuZXdJZCAhPSBudWxsID8gbmV3SWQgOiBjdXJMYXN0SWQ7IG4gPj0gbGlzdElkICsgMTsgbi0tKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gdC5nZXRJdGVtQnlMaXN0SWQobik7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3NEYXRhOiBhbnkgPSB0Ll9jYWxjSXRlbVBvcyhuIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHdlZW4gPSBjYy50d2VlbihpdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oc2VjLCB7IHBvc2l0aW9uOiBjYy52Mihwb3NEYXRhLngsIHBvc0RhdGEueSkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4gPD0gbGlzdElkICsgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXZlQ0IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0d2Vlbi5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX2FuaURlbFJ1bmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbEZ1bmMobGlzdElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0Ll9hbmlEZWxDQjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHR3ZWVuLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFoYXZlQ0IpIHtcclxuICAgICAgICAgICAgICAgIHQuX2FuaURlbFJ1bmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2FsbEZ1bmMobGlzdElkKTtcclxuICAgICAgICAgICAgICAgIHQuX2FuaURlbENCID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRydWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmu5rliqjliLAuLlxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGxpc3RJZCDntKLlvJXvvIjlpoLmnpw8MO+8jOWImea7muWIsOmmluS4qkl0ZW3kvY3nva7vvIzlpoLmnpw+PV9udW1JdGVtc++8jOWImea7muWIsOacgOacq0l0ZW3kvY3nva7vvIlcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB0aW1lSW5TZWNvbmQg5pe26Ze0XHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0IOe0ouW8leebruagh+S9jee9ruWBj+enu++8jDAtMVxyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvdmVyU3RyZXNzIOa7muWKqOWQjuaYr+WQpuW8uuiwg+ivpUl0ZW3vvIjov5nlj6rmmK/kuKrlrp7pqozlip/og73vvIlcclxuICAgICAqL1xyXG4gICAgc2Nyb2xsVG8obGlzdElkOiBudW1iZXIsIHRpbWVJblNlY29uZDogbnVtYmVyID0gLjUsIG9mZnNldDogbnVtYmVyID0gbnVsbCwgb3ZlclN0cmVzczogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgbGV0IHQgPSB0aGlzO1xyXG4gICAgICAgIGlmICghdC5jaGVja0luaXRlZChmYWxzZSkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyB0Ll9zY3JvbGxWaWV3LnN0b3BBdXRvU2Nyb2xsKCk7XHJcbiAgICAgICAgaWYgKHRpbWVJblNlY29uZCA9PSBudWxsKSAgIC8v6buY6K6kMC41XHJcbiAgICAgICAgICAgIHRpbWVJblNlY29uZCA9IC41O1xyXG4gICAgICAgIGVsc2UgaWYgKHRpbWVJblNlY29uZCA8IDApXHJcbiAgICAgICAgICAgIHRpbWVJblNlY29uZCA9IDA7XHJcbiAgICAgICAgaWYgKGxpc3RJZCA8IDApXHJcbiAgICAgICAgICAgIGxpc3RJZCA9IDA7XHJcbiAgICAgICAgZWxzZSBpZiAobGlzdElkID49IHQuX251bUl0ZW1zKVxyXG4gICAgICAgICAgICBsaXN0SWQgPSB0Ll9udW1JdGVtcyAtIDE7XHJcbiAgICAgICAgLy8g5Lul6Ziy6K6+572u5LqGbnVtSXRlbXPkuYvlkI5sYXlvdXTnmoTlsLrlr7jov5jmnKrmm7TmlrBcclxuICAgICAgICBpZiAoIXQuX3ZpcnR1YWwgJiYgdC5fbGF5b3V0ICYmIHQuX2xheW91dC5lbmFibGVkKVxyXG4gICAgICAgICAgICB0Ll9sYXlvdXQudXBkYXRlTGF5b3V0KCk7XHJcblxyXG4gICAgICAgIGxldCBwb3MgPSB0LmdldEl0ZW1Qb3MobGlzdElkKTtcclxuICAgICAgICBpZiAoIXBvcykge1xyXG4gICAgICAgICAgICByZXR1cm4gQ0NfREVWICYmIGNjLmVycm9yKCdwb3MgaXMgbnVsbCcsIGxpc3RJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0YXJnZXRYOiBudW1iZXIsIHRhcmdldFk6IG51bWJlcjtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0Ll9hbGlnbkNhbGNUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTovL+WNleihjEhPUklaT05UQUzvvIhMRUZUX1RPX1JJR0hU77yJ44CB572R5qC8VkVSVElDQUzvvIhMRUZUX1RPX1JJR0hU77yJXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRYID0gcG9zLmxlZnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0ICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WCAtPSB0Lm5vZGUud2lkdGggKiBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WCAtPSB0Ll9sZWZ0R2FwO1xyXG4gICAgICAgICAgICAgICAgcG9zID0gY2MudjIodGFyZ2V0WCwgMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iFJJR0hUX1RPX0xFRlTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iFJJR0hUX1RPX0xFRlTvvIlcclxuICAgICAgICAgICAgICAgIHRhcmdldFggPSBwb3MucmlnaHQgLSB0Lm5vZGUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0ICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WCArPSB0Lm5vZGUud2lkdGggKiBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WCArPSB0Ll9yaWdodEdhcDtcclxuICAgICAgICAgICAgICAgIHBvcyA9IGNjLnYyKHRhcmdldFggKyB0LmNvbnRlbnQud2lkdGgsIDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzovL+WNleWIl1ZFUlRJQ0FM77yIVE9QX1RPX0JPVFRPTe+8ieOAgee9keagvEhPUklaT05UQUzvvIhUT1BfVE9fQk9UVE9N77yJXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRZID0gcG9zLnRvcDtcclxuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRZICs9IHQubm9kZS5oZWlnaHQgKiBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WSArPSB0Ll90b3BHYXA7XHJcbiAgICAgICAgICAgICAgICBwb3MgPSBjYy52MigwLCAtdGFyZ2V0WSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0Oi8v5Y2V5YiXVkVSVElDQUzvvIhCT1RUT01fVE9fVE9Q77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iEJPVFRPTV9UT19UT1DvvIlcclxuICAgICAgICAgICAgICAgIHRhcmdldFkgPSBwb3MuYm90dG9tICsgdC5ub2RlLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRZIC09IHQubm9kZS5oZWlnaHQgKiBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WSAtPSB0Ll9ib3R0b21HYXA7XHJcbiAgICAgICAgICAgICAgICBwb3MgPSBjYy52MigwLCAtdGFyZ2V0WSArIHQuY29udGVudC5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB2aWV3UG9zOiBhbnkgPSB0LmNvbnRlbnQuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICB2aWV3UG9zID0gTWF0aC5hYnModC5fc2l6ZVR5cGUgPyB2aWV3UG9zLnkgOiB2aWV3UG9zLngpO1xyXG5cclxuICAgICAgICBsZXQgY29tcGFyZVBvcyA9IHQuX3NpemVUeXBlID8gcG9zLnkgOiBwb3MueDtcclxuICAgICAgICBsZXQgcnVuU2Nyb2xsID0gTWF0aC5hYnMoKHQuX3Njcm9sbFBvcyAhPSBudWxsID8gdC5fc2Nyb2xsUG9zIDogdmlld1BvcykgLSBjb21wYXJlUG9zKSA+IC41O1xyXG4gICAgICAgIC8vIGNjLmxvZyhydW5TY3JvbGwsIHQuX3Njcm9sbFBvcywgdmlld1BvcywgY29tcGFyZVBvcylcclxuXHJcbiAgICAgICAgLy8gdC5fc2Nyb2xsVmlldy5zdG9wQXV0b1Njcm9sbCgpO1xyXG4gICAgICAgIGlmIChydW5TY3JvbGwpIHtcclxuICAgICAgICAgICAgdC5fc2Nyb2xsVmlldy5zY3JvbGxUb09mZnNldChwb3MsIHRpbWVJblNlY29uZCk7XHJcbiAgICAgICAgICAgIHQuX3Njcm9sbFRvTGlzdElkID0gbGlzdElkO1xyXG4gICAgICAgICAgICB0Ll9zY3JvbGxUb0VuZFRpbWUgPSAoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAvIDEwMDApICsgdGltZUluU2Vjb25kO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2cobGlzdElkLCB0LmNvbnRlbnQud2lkdGgsIHQuY29udGVudC5nZXRQb3NpdGlvbigpLCBwb3MpO1xyXG4gICAgICAgICAgICB0Ll9zY3JvbGxUb1NvID0gdC5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0Ll9hZGhlcmluZ0JhcnJpZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0LmFkaGVyaW5nID0gdC5fYWRoZXJpbmdCYXJyaWVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0Ll9zY3JvbGxQb3MgPVxyXG4gICAgICAgICAgICAgICAgICAgIHQuX3Njcm9sbFRvTGlzdElkID1cclxuICAgICAgICAgICAgICAgICAgICB0Ll9zY3JvbGxUb0VuZFRpbWUgPVxyXG4gICAgICAgICAgICAgICAgICAgIHQuX3Njcm9sbFRvU28gPVxyXG4gICAgICAgICAgICAgICAgICAgIG51bGw7XHJcbiAgICAgICAgICAgICAgICAvL2NjLmxvZygnMjIyMjIyMjIyMicsIHQuX2FkaGVyaW5nQmFycmllcilcclxuICAgICAgICAgICAgICAgIGlmIChvdmVyU3RyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdC5zY3JvbGxUb0xpc3RJZCA9IGxpc3RJZDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHQuZ2V0SXRlbUJ5TGlzdElkKGxpc3RJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oaXRlbSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50byguMSwgeyBzY2FsZTogMS4wNSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKC4xLCB7IHNjYWxlOiAxIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHRpbWVJblNlY29uZCArIC4xKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aW1lSW5TZWNvbmQgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdC5fb25TY3JvbGxpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6h566X5b2T5YmN5rua5Yqo56qX5pyA6L+R55qESXRlbVxyXG4gICAgICovXHJcbiAgICBfY2FsY05lYXJlc3RJdGVtKCkge1xyXG4gICAgICAgIGxldCB0OiBhbnkgPSB0aGlzO1xyXG4gICAgICAgIHQubmVhcmVzdExpc3RJZCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGRhdGE6IGFueSwgY2VudGVyOiBudW1iZXI7XHJcblxyXG4gICAgICAgIGlmICh0Ll92aXJ0dWFsKVxyXG4gICAgICAgICAgICB0Ll9jYWxjVmlld1BvcygpO1xyXG5cclxuICAgICAgICBsZXQgdlRvcDogbnVtYmVyLCB2UmlnaHQ6IG51bWJlciwgdkJvdHRvbTogbnVtYmVyLCB2TGVmdDogbnVtYmVyO1xyXG4gICAgICAgIHZUb3AgPSB0LnZpZXdUb3A7XHJcbiAgICAgICAgdlJpZ2h0ID0gdC52aWV3UmlnaHQ7XHJcbiAgICAgICAgdkJvdHRvbSA9IHQudmlld0JvdHRvbTtcclxuICAgICAgICB2TGVmdCA9IHQudmlld0xlZnQ7XHJcblxyXG4gICAgICAgIGxldCBicmVha0ZvcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAobGV0IG4gPSAwOyBuIDwgdC5jb250ZW50LmNoaWxkcmVuQ291bnQgJiYgIWJyZWFrRm9yOyBuICs9IHQuX2NvbExpbmVOdW0pIHtcclxuICAgICAgICAgICAgZGF0YSA9IHQuX3ZpcnR1YWwgPyB0LmRpc3BsYXlEYXRhW25dIDogdC5fY2FsY0V4aXN0SXRlbVBvcyhuKTtcclxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNlbnRlciA9IHQuX3NpemVUeXBlID8gKChkYXRhLnRvcCArIGRhdGEuYm90dG9tKSAvIDIpIDogKGNlbnRlciA9IChkYXRhLmxlZnQgKyBkYXRhLnJpZ2h0KSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0Ll9hbGlnbkNhbGNUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iExFRlRfVE9fUklHSFTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iExFRlRfVE9fUklHSFTvvIlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEucmlnaHQgPj0gdkxlZnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQubmVhcmVzdExpc3RJZCA9IGRhdGEuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodkxlZnQgPiBjZW50ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5uZWFyZXN0TGlzdElkICs9IHQuX2NvbExpbmVOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha0ZvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iFJJR0hUX1RPX0xFRlTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iFJJR0hUX1RPX0xFRlTvvIlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVmdCA8PSB2UmlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQubmVhcmVzdExpc3RJZCA9IGRhdGEuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodlJpZ2h0IDwgY2VudGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQubmVhcmVzdExpc3RJZCArPSB0Ll9jb2xMaW5lTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtGb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzovL+WNleWIl1ZFUlRJQ0FM77yIVE9QX1RPX0JPVFRPTe+8ieOAgee9keagvEhPUklaT05UQUzvvIhUT1BfVE9fQk9UVE9N77yJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmJvdHRvbSA8PSB2VG9wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Lm5lYXJlc3RMaXN0SWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZUb3AgPCBjZW50ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5uZWFyZXN0TGlzdElkICs9IHQuX2NvbExpbmVOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha0ZvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0Oi8v5Y2V5YiXVkVSVElDQUzvvIhCT1RUT01fVE9fVE9Q77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iEJPVFRPTV9UT19UT1DvvIlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEudG9wID49IHZCb3R0b20pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQubmVhcmVzdExpc3RJZCA9IGRhdGEuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodkJvdHRvbSA+IGNlbnRlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Lm5lYXJlc3RMaXN0SWQgKz0gdC5fY29sTGluZU51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrRm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WIpOaWreacgOWQjuS4gOS4qkl0ZW3jgILjgILjgILvvIjlk47vvIzov5nkupvliKTmlq3nnJ/lv4Pmgbblv4PvvIzliKTmlq3kuobliY3pnaLnmoTov5jopoHliKTmlq3mnIDlkI7kuIDkuKrjgILjgILjgILkuIDlvIDlp4vlkaLvvIzlsLHlj6rmnInkuIDkuKrluIPlsYDvvIjljZXliJfluIPlsYDvvInvvIzpgqPml7blgJnku6PnoIHmiY3kuInnmb7ooYzvvIzlkI7mnaXlsLHmg7PnnYDlrozlloTllYrvvIzoibkuLui/meWdkeecn+a3se+8jOeOsOWcqOi/meihjOaVsOmDveS4gOWNg+S6lOS6hj0gPXx877yJXHJcbiAgICAgICAgZGF0YSA9IHQuX3ZpcnR1YWwgPyB0LmRpc3BsYXlEYXRhW3QuZGlzcGxheUl0ZW1OdW0gLSAxXSA6IHQuX2NhbGNFeGlzdEl0ZW1Qb3ModC5fbnVtSXRlbXMgLSAxKTtcclxuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmlkID09IHQuX251bUl0ZW1zIC0gMSkge1xyXG4gICAgICAgICAgICBjZW50ZXIgPSB0Ll9zaXplVHlwZSA/ICgoZGF0YS50b3AgKyBkYXRhLmJvdHRvbSkgLyAyKSA6IChjZW50ZXIgPSAoZGF0YS5sZWZ0ICsgZGF0YS5yaWdodCkgLyAyKTtcclxuICAgICAgICAgICAgc3dpdGNoICh0Ll9hbGlnbkNhbGNUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6Ly/ljZXooYxIT1JJWk9OVEFM77yITEVGVF9UT19SSUdIVO+8ieOAgee9keagvFZFUlRJQ0FM77yITEVGVF9UT19SSUdIVO+8iVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2UmlnaHQgPiBjZW50ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQubmVhcmVzdExpc3RJZCA9IGRhdGEuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6Ly/ljZXooYxIT1JJWk9OVEFM77yIUklHSFRfVE9fTEVGVO+8ieOAgee9keagvFZFUlRJQ0FM77yIUklHSFRfVE9fTEVGVO+8iVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2TGVmdCA8IGNlbnRlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5uZWFyZXN0TGlzdElkID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzovL+WNleWIl1ZFUlRJQ0FM77yIVE9QX1RPX0JPVFRPTe+8ieOAgee9keagvEhPUklaT05UQUzvvIhUT1BfVE9fQk9UVE9N77yJXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZCb3R0b20gPCBjZW50ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQubmVhcmVzdExpc3RJZCA9IGRhdGEuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6Ly/ljZXliJdWRVJUSUNBTO+8iEJPVFRPTV9UT19UT1DvvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIQk9UVE9NX1RPX1RPUO+8iVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2VG9wID4gY2VudGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Lm5lYXJlc3RMaXN0SWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNjLmxvZygndC5uZWFyZXN0TGlzdElkID0nLCB0Lm5lYXJlc3RMaXN0SWQpO1xyXG4gICAgfVxyXG4gICAgLy/kuIrkuIDpobVcclxuICAgIHByZVBhZ2UodGltZUluU2Vjb25kOiBudW1iZXIgPSAuNSkge1xyXG4gICAgICAgIC8vIGNjLmxvZygn8J+RiCcpO1xyXG4gICAgICAgIGlmICghdGhpcy5jaGVja0luaXRlZCgpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdGhpcy5za2lwUGFnZSh0aGlzLmN1clBhZ2VOdW0gLSAxLCB0aW1lSW5TZWNvbmQpO1xyXG4gICAgfVxyXG4gICAgLy/kuIvkuIDpobVcclxuICAgIG5leHRQYWdlKHRpbWVJblNlY29uZDogbnVtYmVyID0gLjUpIHtcclxuICAgICAgICAvLyBjYy5sb2coJ/CfkYknKTtcclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2tJbml0ZWQoKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc2tpcFBhZ2UodGhpcy5jdXJQYWdlTnVtICsgMSwgdGltZUluU2Vjb25kKTtcclxuICAgIH1cclxuICAgIC8v6Lez6L2s5Yiw56ys5Yeg6aG1XHJcbiAgICBza2lwUGFnZShwYWdlTnVtOiBudW1iZXIsIHRpbWVJblNlY29uZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHQ6IGFueSA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCF0LmNoZWNrSW5pdGVkKCkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZiAodC5fc2xpZGVNb2RlICE9IFNsaWRlVHlwZS5QQUdFKVxyXG4gICAgICAgICAgICByZXR1cm4gY2MuZXJyb3IoJ1RoaXMgZnVuY3Rpb24gaXMgbm90IGFsbG93ZWQgdG8gYmUgY2FsbGVkLCBNdXN0IFNsaWRlTW9kZSA9IFBBR0UhJyk7XHJcbiAgICAgICAgaWYgKHBhZ2VOdW0gPCAwIHx8IHBhZ2VOdW0gPj0gdC5fbnVtSXRlbXMpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZiAodC5jdXJQYWdlTnVtID09IHBhZ2VOdW0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyBjYy5sb2cocGFnZU51bSk7XHJcbiAgICAgICAgdC5jdXJQYWdlTnVtID0gcGFnZU51bTtcclxuICAgICAgICBpZiAodC5wYWdlQ2hhbmdlRXZlbnQpIHtcclxuICAgICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFt0LnBhZ2VDaGFuZ2VFdmVudF0sIHBhZ2VOdW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0LnNjcm9sbFRvKHBhZ2VOdW0sIHRpbWVJblNlY29uZCk7XHJcbiAgICB9XHJcbiAgICAvL+iuoeeulyBDdXN0b21TaXpl77yI6L+Z5Liq5Ye95pWw6L+Y5piv5L+d55WZ5ZCn77yM5p+Q5Lqb572V6KeB55qE5oOF5Ya155qE56Gu6L+Y5piv6ZyA6KaB5omL5Yqo6K6h566XY3VzdG9tU2l6ZeeahO+8iVxyXG4gICAgY2FsY0N1c3RvbVNpemUobnVtSXRlbXM6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0OiBhbnkgPSB0aGlzO1xyXG4gICAgICAgIGlmICghdC5jaGVja0luaXRlZCgpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0Ll9pdGVtVG1wKVxyXG4gICAgICAgICAgICByZXR1cm4gY2MuZXJyb3IoJ1Vuc2V0IHRlbXBsYXRlIGl0ZW0hJyk7XHJcbiAgICAgICAgaWYgKCF0LnJlbmRlckV2ZW50KVxyXG4gICAgICAgICAgICByZXR1cm4gY2MuZXJyb3IoJ1Vuc2V0IFJlbmRlci1FdmVudCEnKTtcclxuICAgICAgICB0Ll9jdXN0b21TaXplID0ge307XHJcbiAgICAgICAgbGV0IHRlbXA6IGFueSA9IGNjLmluc3RhbnRpYXRlKHQuX2l0ZW1UbXApO1xyXG4gICAgICAgIHQuY29udGVudC5hZGRDaGlsZCh0ZW1wKTtcclxuICAgICAgICBmb3IgKGxldCBuOiBudW1iZXIgPSAwOyBuIDwgbnVtSXRlbXM7IG4rKykge1xyXG4gICAgICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoW3QucmVuZGVyRXZlbnRdLCB0ZW1wLCBuKTtcclxuICAgICAgICAgICAgaWYgKHRlbXAuaGVpZ2h0ICE9IHQuX2l0ZW1TaXplLmhlaWdodCB8fCB0ZW1wLndpZHRoICE9IHQuX2l0ZW1TaXplLndpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICB0Ll9jdXN0b21TaXplW25dID0gdC5fc2l6ZVR5cGUgPyB0ZW1wLmhlaWdodCA6IHRlbXAud2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFPYmplY3Qua2V5cyh0Ll9jdXN0b21TaXplKS5sZW5ndGgpXHJcbiAgICAgICAgICAgIHQuX2N1c3RvbVNpemUgPSBudWxsO1xyXG4gICAgICAgIHRlbXAucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgIGlmICh0ZW1wLmRlc3Ryb3kpXHJcbiAgICAgICAgICAgIHRlbXAuZGVzdHJveSgpO1xyXG4gICAgICAgIHJldHVybiB0Ll9jdXN0b21TaXplO1xyXG4gICAgfVxyXG59Il19