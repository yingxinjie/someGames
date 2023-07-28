
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMF9iYXNlXFxzY3JpcHRcXGxpc3RcXExpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs0Q0FLNEM7QUFDdEMsSUFBQSxLQUFrRixFQUFFLENBQUMsVUFBVSxFQUE3RixPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxnQkFBZ0Isc0JBQUEsRUFBRSxJQUFJLFVBQUEsRUFBRSxjQUFjLG9CQUFBLEVBQUUsZ0JBQWdCLHNCQUFrQixDQUFDO0FBRXRHLHVDQUFrQztBQUVsQyxJQUFLLFlBR0o7QUFIRCxXQUFLLFlBQVk7SUFDYiwrQ0FBUSxDQUFBO0lBQ1IsbURBQVUsQ0FBQTtBQUNkLENBQUMsRUFISSxZQUFZLEtBQVosWUFBWSxRQUdoQjtBQUVELElBQUssU0FJSjtBQUpELFdBQUssU0FBUztJQUNWLDZDQUFVLENBQUE7SUFDVixpREFBWSxDQUFBO0lBQ1oseUNBQVEsQ0FBQTtBQUNaLENBQUMsRUFKSSxTQUFTLEtBQVQsU0FBUyxRQUliO0FBRUQsSUFBSyxZQUlKO0FBSkQsV0FBSyxZQUFZO0lBQ2IsK0NBQVEsQ0FBQTtJQUNSLG1EQUFVLENBQUE7SUFDViwrQ0FBUSxDQUFBO0FBQ1osQ0FBQyxFQUpJLFlBQVksS0FBWixZQUFZLFFBSWhCO0FBUUQ7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFtZ0VDO1FBbGdFRyxNQUFNO1FBRUUsa0JBQVksR0FBaUIsWUFBWSxDQUFDLElBQUksQ0FBQztRQUN2RCxjQUFjO1FBTWQsYUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixnQkFBZ0I7UUFNaEIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUM1QixNQUFNO1FBRUUsZ0JBQVUsR0FBYyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBV2pELFFBQVE7UUFRRCxrQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUNqQyxRQUFRO1FBTUEscUJBQWUsR0FBOEIsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFD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O1FBQ2hDLCtIQUErSDs7UUFDOUgsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDO09BQ0QsSUFBSSxDQW1nRXhCO0lBQUQsV0FBQztDQW5nRUQsQUFtZ0VDLENBbmdFaUMsRUFBRSxDQUFDLFNBQVMsR0FtZ0U3QztrQkFuZ0VvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBAYXV0aG9yIGtMIDxrbGswQHFxLmNvbT5cclxuICogQGRhdGUgMjAxOS82LzZcclxuICogQGRvYyDliJfooajnu4Tku7YuXHJcbiAqIEBlbmRcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZGlzYWxsb3dNdWx0aXBsZSwgbWVudSwgZXhlY3V0aW9uT3JkZXIsIHJlcXVpcmVDb21wb25lbnQgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnLi9MaXN0SXRlbSc7XHJcblxyXG5lbnVtIFRlbXBsYXRlVHlwZSB7XHJcbiAgICBOT0RFID0gMSxcclxuICAgIFBSRUZBQiA9IDIsXHJcbn1cclxuXHJcbmVudW0gU2xpZGVUeXBlIHtcclxuICAgIE5PUk1BTCA9IDEsLy/mma7pgJpcclxuICAgIEFESEVSSU5HID0gMiwvL+eymOmZhOaooeW8j++8jOWwhuW8uuWItuWFs+mXrea7muWKqOaDr+aAp1xyXG4gICAgUEFHRSA9IDMsLy/pobXpnaLmqKHlvI/vvIzlsIblvLrliLblhbPpl63mu5rliqjmg6/mgKdcclxufVxyXG5cclxuZW51bSBTZWxlY3RlZFR5cGUge1xyXG4gICAgTk9ORSA9IDAsXHJcbiAgICBTSU5HTEUgPSAxLC8v5Y2V6YCJXHJcbiAgICBNVUxUID0gMiwvL+WkmumAiVxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5AZGlzYWxsb3dNdWx0aXBsZSgpXHJcbkBtZW51KCfoh6rlrprkuYnnu4Tku7YvTGlzdCcpXHJcbkByZXF1aXJlQ29tcG9uZW50KGNjLlNjcm9sbFZpZXcpXHJcbi8v6ISa5pys55Sf5ZG95ZGo5pyf5Zue6LCD55qE5omn6KGM5LyY5YWI57qn44CC5bCP5LqOIDAg55qE6ISa5pys5bCG5LyY5YWI5omn6KGM77yM5aSn5LqOIDAg55qE6ISa5pys5bCG5pyA5ZCO5omn6KGM44CC6K+l5LyY5YWI57qn5Y+q5a+5IG9uTG9hZCwgb25FbmFibGUsIHN0YXJ0LCB1cGRhdGUg5ZKMIGxhdGVVcGRhdGUg5pyJ5pWI77yM5a+5IG9uRGlzYWJsZSDlkowgb25EZXN0cm95IOaXoOaViOOAglxyXG5AZXhlY3V0aW9uT3JkZXIoLTUwMDApXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgLy/mqKHmnb/nsbvlnotcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkVudW0oVGVtcGxhdGVUeXBlKSwgdG9vbHRpcDogQ0NfREVWICYmICfmqKHmnb/nsbvlnosnLCB9KVxyXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVR5cGU6IFRlbXBsYXRlVHlwZSA9IFRlbXBsYXRlVHlwZS5OT0RFO1xyXG4gICAgLy/mqKHmnb9JdGVt77yITm9kZe+8iVxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAn5qih5p2/SXRlbScsXHJcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMudGVtcGxhdGVUeXBlID09IFRlbXBsYXRlVHlwZS5OT0RFOyB9XHJcbiAgICB9KVxyXG4gICAgdG1wTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvL+aooeadv0l0ZW3vvIhQcmVmYWLvvIlcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAn5qih5p2/SXRlbScsXHJcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMudGVtcGxhdGVUeXBlID09IFRlbXBsYXRlVHlwZS5QUkVGQUI7IH1cclxuICAgIH0pXHJcbiAgICB0bXBQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICAvL+a7keWKqOaooeW8j1xyXG4gICAgQHByb3BlcnR5KClcclxuICAgIHByaXZhdGUgX3NsaWRlTW9kZTogU2xpZGVUeXBlID0gU2xpZGVUeXBlLk5PUk1BTDtcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuRW51bShTbGlkZVR5cGUpLFxyXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAn5ruR5Yqo5qih5byPJ1xyXG4gICAgfSlcclxuICAgIHNldCBzbGlkZU1vZGUodmFsOiBTbGlkZVR5cGUpIHtcclxuICAgICAgICB0aGlzLl9zbGlkZU1vZGUgPSB2YWw7XHJcbiAgICB9XHJcbiAgICBnZXQgc2xpZGVNb2RlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zbGlkZU1vZGU7XHJcbiAgICB9XHJcbiAgICAvL+e/u+mhteS9nOeUqOi3neemu1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5GbG9hdCxcclxuICAgICAgICByYW5nZTogWzAsIDEsIC4xXSxcclxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+e/u+mhteS9nOeUqOi3neemuycsXHJcbiAgICAgICAgc2xpZGU6IHRydWUsXHJcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMuX3NsaWRlTW9kZSA9PSBTbGlkZVR5cGUuUEFHRTsgfVxyXG4gICAgfSlcclxuICAgIHB1YmxpYyBwYWdlRGlzdGFuY2U6IG51bWJlciA9IC4zO1xyXG4gICAgLy/pobXpnaLmlLnlj5jkuovku7ZcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcixcclxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+mhtemdouaUueWPmOS6i+S7ticsXHJcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMuX3NsaWRlTW9kZSA9PSBTbGlkZVR5cGUuUEFHRTsgfVxyXG4gICAgfSlcclxuICAgIHByaXZhdGUgcGFnZUNoYW5nZUV2ZW50OiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgIC8v5piv5ZCm5Li66Jma5ouf5YiX6KGo77yI5Yqo5oCB5YiX6KGo77yJXHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgcHJpdmF0ZSBfdmlydHVhbDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkJvb2xlYW4sXHJcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfmmK/lkKbkuLromZrmi5/liJfooajvvIjliqjmgIHliJfooajvvIknXHJcbiAgICB9KVxyXG4gICAgc2V0IHZpcnR1YWwodmFsOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHZhbCAhPSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLl92aXJ0dWFsID0gdmFsO1xyXG4gICAgICAgIGlmICghQ0NfREVWICYmIHRoaXMuX251bUl0ZW1zICE9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fb25TY3JvbGxpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgdmlydHVhbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmlydHVhbDtcclxuICAgIH1cclxuICAgIC8v5piv5ZCm5Li65b6q546v5YiX6KGoXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAn5piv5ZCm5Li65b6q546v5YiX6KGoJyxcclxuICAgICAgICB2aXNpYmxlKCkge1xyXG4gICAgICAgICAgICBsZXQgdmFsOiBib29sZWFuID0gLyp0aGlzLnZpcnR1YWwgJiYqLyB0aGlzLnNsaWRlTW9kZSA9PSBTbGlkZVR5cGUuTk9STUFMO1xyXG4gICAgICAgICAgICBpZiAoIXZhbClcclxuICAgICAgICAgICAgICAgIHRoaXMuY3ljbGljID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIHB1YmxpYyBjeWNsaWM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8v57y655yB5bGF5LitXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAnSXRlbeaVsOmHj+S4jei2s+S7peWhq+a7oUNvbnRlbnTml7bvvIzmmK/lkKblsYXkuK3mmL7npLpJdGVt77yI5LiN5pSv5oyBR3JpZOW4g+WxgO+8iScsXHJcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMudmlydHVhbDsgfVxyXG4gICAgfSlcclxuICAgIHB1YmxpYyBsYWNrQ2VudGVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvL+e8uuecgeWPr+a7keWKqFxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ0l0ZW3mlbDph4/kuI3otrPku6Xloavmu6FDb250ZW505pe277yM5piv5ZCm5Y+v5ruR5YqoJyxcclxuICAgICAgICB2aXNpYmxlKCkge1xyXG4gICAgICAgICAgICBsZXQgdmFsOiBib29sZWFuID0gdGhpcy52aXJ0dWFsICYmICF0aGlzLmxhY2tDZW50ZXI7XHJcbiAgICAgICAgICAgIGlmICghdmFsKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYWNrU2xpZGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgcHVibGljIGxhY2tTbGlkZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLy/liLfmlrDpopHnjodcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIgfSlcclxuICAgIHByaXZhdGUgX3VwZGF0ZVJhdGU6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkludGVnZXIsXHJcbiAgICAgICAgcmFuZ2U6IFswLCA2LCAxXSxcclxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+WIt+aWsOmikeeOh++8iOWAvOi2iuWkp+WIt+aWsOmikeeOh+i2iuS9juOAgeaAp+iDvei2iumrmO+8iScsXHJcbiAgICAgICAgc2xpZGU6IHRydWUsXHJcbiAgICB9KVxyXG4gICAgc2V0IHVwZGF0ZVJhdGUodmFsOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodmFsID49IDAgJiYgdmFsIDw9IDYpIHtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlUmF0ZSA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgdXBkYXRlUmF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXBkYXRlUmF0ZTtcclxuICAgIH1cclxuICAgIC8v5YiG5bin5riy5p+T77yI5q+P5bin5riy5p+T55qESXRlbeaVsOmHj++8iDw9MOaXtuWFs+mXreWIhuW4p+a4suafk++8ie+8iVxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5JbnRlZ2VyLFxyXG4gICAgICAgIHJhbmdlOiBbMCwgMTIsIDFdLFxyXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAn6YCQ5bin5riy5p+T5pe277yM5q+P5bin5riy5p+T55qESXRlbeaVsOmHj++8iDw9MOaXtuWFs+mXreWIhuW4p+a4suafk++8iScsXHJcbiAgICAgICAgc2xpZGU6IHRydWUsXHJcbiAgICB9KVxyXG4gICAgcHVibGljIGZyYW1lQnlGcmFtZVJlbmRlck51bTogbnVtYmVyID0gMDtcclxuICAgIC8v5riy5p+T5LqL5Lu277yI5riy5p+T5Zmo77yJXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIsXHJcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfmuLLmn5Pkuovku7bvvIjmuLLmn5PlmajvvIknLFxyXG4gICAgfSlcclxuICAgIHByaXZhdGUgcmVuZGVyRXZlbnQ6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgLy/pgInmi6nmqKHlvI9cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuRW51bShTZWxlY3RlZFR5cGUpLFxyXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAn6YCJ5oup5qih5byPJ1xyXG4gICAgfSlcclxuICAgIHB1YmxpYyBzZWxlY3RlZE1vZGU6IFNlbGVjdGVkVHlwZSA9IFNlbGVjdGVkVHlwZS5OT05FO1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+aYr+WQpumHjeWkjeWTjeW6lOWNlemAieS6i+S7ticsXHJcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMuc2VsZWN0ZWRNb2RlID09IFNlbGVjdGVkVHlwZS5TSU5HTEU7IH1cclxuICAgIH0pXHJcbiAgICBwdWJsaWMgcmVwZWF0RXZlbnRTaW5nbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8v6Kem5Y+R6YCJ5oup5LqL5Lu2XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIsXHJcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfop6blj5HpgInmi6nkuovku7YnLFxyXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiB0aGlzLnNlbGVjdGVkTW9kZSA+IFNlbGVjdGVkVHlwZS5OT05FOyB9XHJcbiAgICB9KVxyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZEV2ZW50OiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgIC8v5b2T5YmN6YCJ5oupaWRcclxuICAgIHByaXZhdGUgX3NlbGVjdGVkSWQ6IG51bWJlciA9IC0xO1xyXG4gICAgcHJpdmF0ZSBfbGFzdFNlbGVjdGVkSWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgbXVsdFNlbGVjdGVkOiBudW1iZXJbXTtcclxuICAgIHNldCBzZWxlY3RlZElkKHZhbDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHQ6IGFueSA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGl0ZW06IGFueTtcclxuICAgICAgICBzd2l0Y2ggKHQuc2VsZWN0ZWRNb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgU2VsZWN0ZWRUeXBlLlNJTkdMRToge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0LnJlcGVhdEV2ZW50U2luZ2xlICYmIHZhbCA9PSB0Ll9zZWxlY3RlZElkKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSB0LmdldEl0ZW1CeUxpc3RJZCh2YWwpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgKCFpdGVtICYmIHZhbCA+PSAwKVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGxldCBsaXN0SXRlbTogTGlzdEl0ZW07XHJcbiAgICAgICAgICAgICAgICBpZiAodC5fc2VsZWN0ZWRJZCA+PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHQuX2xhc3RTZWxlY3RlZElkID0gdC5fc2VsZWN0ZWRJZDtcclxuICAgICAgICAgICAgICAgIGVsc2UgLy/lpoLmnpzvvJww5YiZ5Y+W5raI6YCJ5oup77yM5oqKX2xhc3RTZWxlY3RlZElk5Lmf572u56m65ZCn77yM5aaC5p6c5Lul5ZCO5pyJ54m55q6K6ZyA5rGC5YaN5pS55ZCn44CCXHJcbiAgICAgICAgICAgICAgICAgICAgdC5fbGFzdFNlbGVjdGVkSWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdC5fc2VsZWN0ZWRJZCA9IHZhbDtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW0gPSBpdGVtLmdldENvbXBvbmVudChMaXN0SXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHQuX2xhc3RTZWxlY3RlZElkID49IDAgJiYgdC5fbGFzdFNlbGVjdGVkSWQgIT0gdC5fc2VsZWN0ZWRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0SXRlbTogYW55ID0gdC5nZXRJdGVtQnlMaXN0SWQodC5fbGFzdFNlbGVjdGVkSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0SXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0SXRlbS5nZXRDb21wb25lbnQoTGlzdEl0ZW0pLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHQuc2VsZWN0ZWRFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhbdC5zZWxlY3RlZEV2ZW50XSwgaXRlbSwgdmFsICUgdGhpcy5fYWN0dWFsTnVtSXRlbXMsIHQuX2xhc3RTZWxlY3RlZElkID09IG51bGwgPyBudWxsIDogKHQuX2xhc3RTZWxlY3RlZElkICUgdGhpcy5fYWN0dWFsTnVtSXRlbXMpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgU2VsZWN0ZWRUeXBlLk1VTFQ6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSB0LmdldEl0ZW1CeUxpc3RJZCh2YWwpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGxldCBsaXN0SXRlbSA9IGl0ZW0uZ2V0Q29tcG9uZW50KExpc3RJdGVtKTtcclxuICAgICAgICAgICAgICAgIGlmICh0Ll9zZWxlY3RlZElkID49IDApXHJcbiAgICAgICAgICAgICAgICAgICAgdC5fbGFzdFNlbGVjdGVkSWQgPSB0Ll9zZWxlY3RlZElkO1xyXG4gICAgICAgICAgICAgICAgdC5fc2VsZWN0ZWRJZCA9IHZhbDtcclxuICAgICAgICAgICAgICAgIGxldCBib29sOiBib29sZWFuID0gIWxpc3RJdGVtLnNlbGVjdGVkO1xyXG4gICAgICAgICAgICAgICAgbGlzdEl0ZW0uc2VsZWN0ZWQgPSBib29sO1xyXG4gICAgICAgICAgICAgICAgbGV0IHN1YjogbnVtYmVyID0gdC5tdWx0U2VsZWN0ZWQuaW5kZXhPZih2YWwpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJvb2wgJiYgc3ViIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHQubXVsdFNlbGVjdGVkLnB1c2godmFsKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWJvb2wgJiYgc3ViID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0Lm11bHRTZWxlY3RlZC5zcGxpY2Uoc3ViLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0LnNlbGVjdGVkRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoW3Quc2VsZWN0ZWRFdmVudF0sIGl0ZW0sIHZhbCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zLCB0Ll9sYXN0U2VsZWN0ZWRJZCA9PSBudWxsID8gbnVsbCA6ICh0Ll9sYXN0U2VsZWN0ZWRJZCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zKSwgYm9vbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBzZWxlY3RlZElkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZElkO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfZm9yY2VVcGRhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2FsaWduOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9ob3Jpem9udGFsRGlyOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF92ZXJ0aWNhbERpcjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfc3RhcnRBeGlzOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9hbGlnbkNhbGNUeXBlOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgY29udGVudDogY2MuTm9kZTtcclxuICAgIHByaXZhdGUgZmlyc3RMaXN0SWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBkaXNwbGF5SXRlbU51bTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfdXBkYXRlRG9uZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIF91cGRhdGVDb3VudGVyOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgX2FjdHVhbE51bUl0ZW1zOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9jeWNsaWNOdW06IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2N5Y2xpY1BvczE6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2N5Y2xpY1BvczI6IG51bWJlcjtcclxuICAgIC8v5YiX6KGo5pWw6YePXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHNlcmlhbGl6YWJsZTogZmFsc2VcclxuICAgIH0pXHJcbiAgICBwcml2YXRlIF9udW1JdGVtczogbnVtYmVyID0gMDtcclxuICAgIHNldCBudW1JdGVtcyh2YWw6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0ID0gdGhpcztcclxuICAgICAgICBpZiAoIXQuY2hlY2tJbml0ZWQoZmFsc2UpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsIHx8IHZhbCA8IDApIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoJ251bUl0ZW1zIHNldCB0aGUgd3Jvbmc6OicsIHZhbCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdC5fYWN0dWFsTnVtSXRlbXMgPSB0Ll9udW1JdGVtcyA9IHZhbDtcclxuICAgICAgICB0Ll9mb3JjZVVwZGF0ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmICh0Ll92aXJ0dWFsKSB7XHJcbiAgICAgICAgICAgIHQuX3Jlc2l6ZUNvbnRlbnQoKTtcclxuICAgICAgICAgICAgaWYgKHQuY3ljbGljKSB7XHJcbiAgICAgICAgICAgICAgICB0Ll9udW1JdGVtcyA9IHQuX2N5Y2xpY051bSAqIHQuX251bUl0ZW1zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHQuX29uU2Nyb2xsaW5nKCk7XHJcbiAgICAgICAgICAgIGlmICghdC5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0gJiYgdC5zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLlBBR0UpXHJcbiAgICAgICAgICAgICAgICB0LmN1clBhZ2VOdW0gPSB0Lm5lYXJlc3RMaXN0SWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHQuY3ljbGljKSB7XHJcbiAgICAgICAgICAgICAgICB0Ll9yZXNpemVDb250ZW50KCk7XHJcbiAgICAgICAgICAgICAgICB0Ll9udW1JdGVtcyA9IHQuX2N5Y2xpY051bSAqIHQuX251bUl0ZW1zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBsYXlvdXQ6IGNjLkxheW91dCA9IHQuY29udGVudC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcclxuICAgICAgICAgICAgaWYgKGxheW91dCkge1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0LmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHQuX2RlbFJlZHVuZGFudEl0ZW0oKTtcclxuXHJcbiAgICAgICAgICAgIHQuZmlyc3RMaXN0SWQgPSAwO1xyXG4gICAgICAgICAgICBpZiAodC5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvL+WFiOa4suafk+WHoOS4quWHuuadpVxyXG4gICAgICAgICAgICAgICAgbGV0IGxlbjogbnVtYmVyID0gdC5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0gPiB0Ll9udW1JdGVtcyA/IHQuX251bUl0ZW1zIDogdC5mcmFtZUJ5RnJhbWVSZW5kZXJOdW07XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBuOiBudW1iZXIgPSAwOyBuIDwgbGVuOyBuKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0Ll9jcmVhdGVPclVwZGF0ZUl0ZW0yKG4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHQuZnJhbWVCeUZyYW1lUmVuZGVyTnVtIDwgdC5fbnVtSXRlbXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0Ll91cGRhdGVDb3VudGVyID0gdC5mcmFtZUJ5RnJhbWVSZW5kZXJOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgdC5fdXBkYXRlRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbjogbnVtYmVyID0gMDsgbiA8IHQuX251bUl0ZW1zOyBuKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0Ll9jcmVhdGVPclVwZGF0ZUl0ZW0yKG4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdC5kaXNwbGF5SXRlbU51bSA9IHQuX251bUl0ZW1zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IG51bUl0ZW1zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hY3R1YWxOdW1JdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pbml0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX3Njcm9sbFZpZXc6IGNjLlNjcm9sbFZpZXc7XHJcbiAgICBnZXQgc2Nyb2xsVmlldygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2Nyb2xsVmlldztcclxuICAgIH1cclxuICAgIHByaXZhdGUgX2xheW91dDogY2MuTGF5b3V0O1xyXG4gICAgcHJpdmF0ZSBfcmVzaXplTW9kZTogY2MuTGF5b3V0LlJlc2l6ZU1vZGU7XHJcbiAgICBwcml2YXRlIF90b3BHYXA6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3JpZ2h0R2FwOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9ib3R0b21HYXA6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2xlZnRHYXA6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIF9jb2x1bW5HYXA6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2xpbmVHYXA6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2NvbExpbmVOdW06IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIF9sYXN0RGlzcGxheURhdGE6IG51bWJlcltdO1xyXG4gICAgcHVibGljIGRpc3BsYXlEYXRhOiBhbnlbXTtcclxuICAgIHByaXZhdGUgX3Bvb2w6IGNjLk5vZGVQb29sO1xyXG5cclxuICAgIHByaXZhdGUgX2l0ZW1UbXA6IGFueTtcclxuICAgIHByaXZhdGUgX25lZWRVcGRhdGVXaWRnZXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2l0ZW1TaXplOiBjYy5TaXplO1xyXG4gICAgcHJpdmF0ZSBfc2l6ZVR5cGU6IGJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIF9jdXN0b21TaXplOiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBmcmFtZUNvdW50OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9hbmlEZWxSdW5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2FuaURlbENCOiBGdW5jdGlvbjtcclxuICAgIHByaXZhdGUgX2FuaURlbEl0ZW06IGFueTtcclxuICAgIHByaXZhdGUgX2FuaURlbEJlZm9yZVBvczogY2MuVmVjMjtcclxuICAgIHByaXZhdGUgX2FuaURlbEJlZm9yZVNjYWxlOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHZpZXdUb3A6IG51bWJlcjtcclxuICAgIHByaXZhdGUgdmlld1JpZ2h0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHZpZXdCb3R0b206IG51bWJlcjtcclxuICAgIHByaXZhdGUgdmlld0xlZnQ6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIF9kb25lQWZ0ZXJVcGRhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGVsYXN0aWNUb3A6IG51bWJlcjtcclxuICAgIHByaXZhdGUgZWxhc3RpY1JpZ2h0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGVsYXN0aWNCb3R0b206IG51bWJlcjtcclxuICAgIHByaXZhdGUgZWxhc3RpY0xlZnQ6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIHNjcm9sbFRvTGlzdElkOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBhZGhlcmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX2FkaGVyaW5nQmFycmllcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBuZWFyZXN0TGlzdElkOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGN1clBhZ2VOdW06IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9iZWdhblBvczogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfc2Nyb2xsUG9zOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGN1clNjcm9sbElzVG91Y2g6IGJvb2xlYW47Ly/lvZPliY3mu5HliqjmmK/lkKbkuLrmiYvliqhcclxuXHJcbiAgICBwcml2YXRlIF9zY3JvbGxUb0xpc3RJZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfc2Nyb2xsVG9FbmRUaW1lOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9zY3JvbGxUb1NvOiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBfbGFjazogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX2FsbEl0ZW1TaXplOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9hbGxJdGVtU2l6ZU5vRWRnZTogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgX3Njcm9sbEl0ZW06IGFueTsvL+W9k+WJjeaOp+WItiBTY3JvbGxWaWV3IOa7muWKqOeahCBJdGVtXHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgbGV0IHQ6IGFueSA9IHRoaXM7XHJcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQodC5faXRlbVRtcCkpXHJcbiAgICAgICAgICAgIHQuX2l0ZW1UbXAuZGVzdHJveSgpO1xyXG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKHQudG1wTm9kZSkpXHJcbiAgICAgICAgICAgIHQudG1wTm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgdC5fcG9vbCAmJiB0Ll9wb29sLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgLy8gaWYgKCFDQ19FRElUT1IpIFxyXG4gICAgICAgIHRoaXMuX3JlZ2lzdGVyRXZlbnQoKTtcclxuICAgICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICAgICAgLy8g5aSE55CG6YeN5paw5pi+56S65ZCO77yM5pyJ5Y+v6IO95LiK5LiA5qyh55qE5Yqo55S756e76Zmk6L+Y5pyq5pKt5pS+5a6M5q+V77yM5a+86Ie05Yqo55S75Y2h5L2P55qE6Zeu6aKYXHJcbiAgICAgICAgaWYgKHRoaXMuX2FuaURlbFJ1bmluZykge1xyXG4gICAgICAgICAgICB0aGlzLl9hbmlEZWxSdW5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2FuaURlbEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9hbmlEZWxCZWZvcmVQb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hbmlEZWxJdGVtLnBvc2l0aW9uID0gdGhpcy5fYW5pRGVsQmVmb3JlUG9zO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9hbmlEZWxCZWZvcmVQb3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fYW5pRGVsQmVmb3JlU2NhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hbmlEZWxJdGVtLnNjYWxlID0gdGhpcy5fYW5pRGVsQmVmb3JlU2NhbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2FuaURlbEJlZm9yZVNjYWxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2FuaURlbEl0ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2FuaURlbENCKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hbmlEZWxDQigpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2FuaURlbENCO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICAvLyBpZiAoIUNDX0VESVRPUikgXHJcbiAgICAgICAgdGhpcy5fdW5yZWdpc3RlckV2ZW50KCk7XHJcbiAgICB9XHJcbiAgICAvL+azqOWGjOS6i+S7tlxyXG4gICAgX3JlZ2lzdGVyRXZlbnQoKSB7XHJcbiAgICAgICAgbGV0IHQ6IGFueSA9IHRoaXM7XHJcbiAgICAgICAgdC5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0Ll9vblRvdWNoU3RhcnQsIHQsIHRydWUpO1xyXG4gICAgICAgIHQubm9kZS5vbigndG91Y2gtdXAnLCB0Ll9vblRvdWNoVXAsIHQpO1xyXG4gICAgICAgIHQubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHQuX29uVG91Y2hDYW5jZWxsZWQsIHQsIHRydWUpO1xyXG4gICAgICAgIHQubm9kZS5vbignc2Nyb2xsLWJlZ2FuJywgdC5fb25TY3JvbGxCZWdhbiwgdCwgdHJ1ZSk7XHJcbiAgICAgICAgdC5ub2RlLm9uKCdzY3JvbGwtZW5kZWQnLCB0Ll9vblNjcm9sbEVuZGVkLCB0LCB0cnVlKTtcclxuICAgICAgICB0Lm5vZGUub24oJ3Njcm9sbGluZycsIHQuX29uU2Nyb2xsaW5nLCB0LCB0cnVlKTtcclxuICAgICAgICB0Lm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuU0laRV9DSEFOR0VELCB0Ll9vblNpemVDaGFuZ2VkLCB0KTtcclxuICAgIH1cclxuICAgIC8v5Y246L295LqL5Lu2XHJcbiAgICBfdW5yZWdpc3RlckV2ZW50KCkge1xyXG4gICAgICAgIGxldCB0OiBhbnkgPSB0aGlzO1xyXG4gICAgICAgIHQubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHQuX29uVG91Y2hTdGFydCwgdCwgdHJ1ZSk7XHJcbiAgICAgICAgdC5ub2RlLm9mZigndG91Y2gtdXAnLCB0Ll9vblRvdWNoVXAsIHQpO1xyXG4gICAgICAgIHQubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0Ll9vblRvdWNoQ2FuY2VsbGVkLCB0LCB0cnVlKTtcclxuICAgICAgICB0Lm5vZGUub2ZmKCdzY3JvbGwtYmVnYW4nLCB0Ll9vblNjcm9sbEJlZ2FuLCB0LCB0cnVlKTtcclxuICAgICAgICB0Lm5vZGUub2ZmKCdzY3JvbGwtZW5kZWQnLCB0Ll9vblNjcm9sbEVuZGVkLCB0LCB0cnVlKTtcclxuICAgICAgICB0Lm5vZGUub2ZmKCdzY3JvbGxpbmcnLCB0Ll9vblNjcm9sbGluZywgdCwgdHJ1ZSk7XHJcbiAgICAgICAgdC5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5TSVpFX0NIQU5HRUQsIHQuX29uU2l6ZUNoYW5nZWQsIHQpO1xyXG4gICAgfVxyXG4gICAgLy/liJ3lp4vljJblkITnp40uLlxyXG4gICAgX2luaXQoKSB7XHJcbiAgICAgICAgbGV0IHQ6IGFueSA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHQuX2luaXRlZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0Ll9zY3JvbGxWaWV3ID0gdC5ub2RlLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KTtcclxuXHJcbiAgICAgICAgdC5jb250ZW50ID0gdC5fc2Nyb2xsVmlldy5jb250ZW50O1xyXG4gICAgICAgIGlmICghdC5jb250ZW50KSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKHQubm9kZS5uYW1lICsgXCIncyBjYy5TY3JvbGxWaWV3IHVuc2V0IGNvbnRlbnQhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0Ll9sYXlvdXQgPSB0LmNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCk7XHJcblxyXG4gICAgICAgIHQuX2FsaWduID0gdC5fbGF5b3V0LnR5cGU7IC8v5o6S5YiX5qih5byPXHJcbiAgICAgICAgdC5fcmVzaXplTW9kZSA9IHQuX2xheW91dC5yZXNpemVNb2RlOyAvL+iHqumAguW6lOaooeW8j1xyXG4gICAgICAgIHQuX3N0YXJ0QXhpcyA9IHQuX2xheW91dC5zdGFydEF4aXM7XHJcblxyXG4gICAgICAgIHQuX3RvcEdhcCA9IHQuX2xheW91dC5wYWRkaW5nVG9wOyAvL+mhtui+uei3nVxyXG4gICAgICAgIHQuX3JpZ2h0R2FwID0gdC5fbGF5b3V0LnBhZGRpbmdSaWdodDsgLy/lj7Povrnot51cclxuICAgICAgICB0Ll9ib3R0b21HYXAgPSB0Ll9sYXlvdXQucGFkZGluZ0JvdHRvbTsgLy/lupXovrnot51cclxuICAgICAgICB0Ll9sZWZ0R2FwID0gdC5fbGF5b3V0LnBhZGRpbmdMZWZ0OyAvL+W3pui+uei3nVxyXG5cclxuICAgICAgICB0Ll9jb2x1bW5HYXAgPSB0Ll9sYXlvdXQuc3BhY2luZ1g7IC8v5YiX6LedXHJcbiAgICAgICAgdC5fbGluZUdhcCA9IHQuX2xheW91dC5zcGFjaW5nWTsgLy/ooYzot51cclxuXHJcbiAgICAgICAgdC5fY29sTGluZU51bTsgLy/liJfmlbDmiJbooYzmlbDvvIjpnZ5HUklE5qih5byP5YiZPTHvvIzooajnpLrljZXliJfmiJbljZXooYzvvIk7XHJcblxyXG4gICAgICAgIHQuX3ZlcnRpY2FsRGlyID0gdC5fbGF5b3V0LnZlcnRpY2FsRGlyZWN0aW9uOyAvL+WeguebtOaOkuWIl+WtkOiKgueCueeahOaWueWQkVxyXG4gICAgICAgIHQuX2hvcml6b250YWxEaXIgPSB0Ll9sYXlvdXQuaG9yaXpvbnRhbERpcmVjdGlvbjsgLy/msLTlubPmjpLliJflrZDoioLngrnnmoTmlrnlkJFcclxuXHJcbiAgICAgICAgdC5zZXRUZW1wbGF0ZUl0ZW0oY2MuaW5zdGFudGlhdGUodC50ZW1wbGF0ZVR5cGUgPT0gVGVtcGxhdGVUeXBlLlBSRUZBQiA/IHQudG1wUHJlZmFiIDogdC50bXBOb2RlKSk7XHJcblxyXG4gICAgICAgIC8vIOeJueWumueahOa7keWKqOaooeW8j+WkhOeQhlxyXG4gICAgICAgIGlmICh0Ll9zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLkFESEVSSU5HIHx8IHQuX3NsaWRlTW9kZSA9PSBTbGlkZVR5cGUuUEFHRSkge1xyXG4gICAgICAgICAgICB0Ll9zY3JvbGxWaWV3LmluZXJ0aWEgPSBmYWxzZTtcclxuICAgICAgICAgICAgdC5fc2Nyb2xsVmlldy5fb25Nb3VzZVdoZWVsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXQudmlydHVhbCkgICAgICAgICAvLyBsYWNrQ2VudGVyIOS7heaUr+aMgSBWaXJ0dWFsIOaooeW8j1xyXG4gICAgICAgICAgICB0LmxhY2tDZW50ZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdC5fbGFzdERpc3BsYXlEYXRhID0gW107IC8v5pyA5ZCO5LiA5qyh5Yi35paw55qE5pWw5o2uXHJcbiAgICAgICAgdC5kaXNwbGF5RGF0YSA9IFtdOyAvL+W9k+WJjeaVsOaNrlxyXG4gICAgICAgIHQuX3Bvb2wgPSBuZXcgY2MuTm9kZVBvb2woKTsgICAgLy/ov5nmmK/kuKrmsaDlrZAuLlxyXG4gICAgICAgIHQuX2ZvcmNlVXBkYXRlID0gZmFsc2U7ICAgICAgICAgLy/mmK/lkKblvLrliLbmm7TmlrBcclxuICAgICAgICB0Ll91cGRhdGVDb3VudGVyID0gMDsgICAgICAgICAgIC8v5b2T5YmN5YiG5bin5riy5p+T5bin5pWwXHJcbiAgICAgICAgdC5fdXBkYXRlRG9uZSA9IHRydWU7ICAgICAgICAgICAvL+WIhuW4p+a4suafk+aYr+WQpuWujOaIkFxyXG5cclxuICAgICAgICB0LmN1clBhZ2VOdW0gPSAwOyAgICAgICAgICAgICAgIC8v5b2T5YmN6aG15pWwXHJcblxyXG4gICAgICAgIGlmICh0LmN5Y2xpYyB8fCAwKSB7XHJcbiAgICAgICAgICAgIHQuX3Njcm9sbFZpZXcuX3Byb2Nlc3NBdXRvU2Nyb2xsaW5nID0gdGhpcy5fcHJvY2Vzc0F1dG9TY3JvbGxpbmcuYmluZCh0KTtcclxuICAgICAgICAgICAgdC5fc2Nyb2xsVmlldy5fc3RhcnRCb3VuY2VCYWNrSWZOZWVkZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdC5fc2Nyb2xsVmlldy5fc2Nyb2xsQ2hpbGRyZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAodC5fYWxpZ24pIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5IT1JJWk9OVEFMOiB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHQuX2hvcml6b250YWxEaXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLkxFRlRfVE9fUklHSFQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX2FsaWduQ2FsY1R5cGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLlJJR0hUX1RPX0xFRlQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX2FsaWduQ2FsY1R5cGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuVkVSVElDQUw6IHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodC5fdmVydGljYWxEaXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5UT1BfVE9fQk9UVE9NOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ll9hbGlnbkNhbGNUeXBlID0gMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uQk9UVE9NX1RPX1RPUDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5fYWxpZ25DYWxjVHlwZSA9IDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5HUklEOiB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHQuX3N0YXJ0QXhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uSE9SSVpPTlRBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0Ll92ZXJ0aWNhbERpcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uVE9QX1RPX0JPVFRPTTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ll9hbGlnbkNhbGNUeXBlID0gMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLkJPVFRPTV9UT19UT1A6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5fYWxpZ25DYWxjVHlwZSA9IDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5WRVJUSUNBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0Ll9ob3Jpem9udGFsRGlyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLkxFRlRfVE9fUklHSFQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5fYWxpZ25DYWxjVHlwZSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLlJJR0hUX1RPX0xFRlQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5fYWxpZ25DYWxjVHlwZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDmuIXnqbogY29udGVudFxyXG4gICAgICAgIC8vIHQuY29udGVudC5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZDogY2MuTm9kZSkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjaGlsZC5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgLy8gICAgIGlmIChjaGlsZCAhPSB0LnRtcE5vZGUgJiYgY2hpbGQuaXNWYWxpZClcclxuICAgICAgICAvLyAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICB0LmNvbnRlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICB0Ll9pbml0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDkuLrkuoblrp7njrDlvqrnjq/liJfooajvvIzlv4XpobvopoblhpljYy5TY3JvbGxWaWV355qE5p+Q5Lqb5Ye95pWwXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZHRcclxuICAgICAqL1xyXG4gICAgX3Byb2Nlc3NBdXRvU2Nyb2xsaW5nKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgYnJha2luZ0ZhY3RvcjogbnVtYmVyID0gMTtcclxuICAgICAgICB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbEFjY3VtdWxhdGVkVGltZSddICs9IGR0ICogKDEgLyBicmFraW5nRmFjdG9yKTtcclxuXHJcbiAgICAgICAgbGV0IHBlcmNlbnRhZ2U6IG51bWJlciA9IE1hdGgubWluKDEsIHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsQWNjdW11bGF0ZWRUaW1lJ10gLyB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFRvdGFsVGltZSddKTtcclxuICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxBdHRlbnVhdGUnXSkge1xyXG4gICAgICAgICAgICBsZXQgdGltZTogbnVtYmVyID0gcGVyY2VudGFnZSAtIDE7XHJcbiAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSB0aW1lICogdGltZSAqIHRpbWUgKiB0aW1lICogdGltZSArIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbmV3UG9zaXRpb246IGFueSA9IHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiddLmFkZCh0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFRhcmdldERlbHRhJ10ubXVsKHBlcmNlbnRhZ2UpKTtcclxuICAgICAgICBsZXQgRVBTSUxPTjogbnVtYmVyID0gdGhpcy5fc2Nyb2xsVmlld1snZ2V0U2Nyb2xsRW5kZWRFdmVudFRpbWluZyddKCk7XHJcbiAgICAgICAgbGV0IHJlYWNoZWRFbmQ6IGJvb2xlYW4gPSBNYXRoLmFicyhwZXJjZW50YWdlIC0gMSkgPD0gRVBTSUxPTjtcclxuXHJcbiAgICAgICAgbGV0IGZpcmVFdmVudDogYm9vbGVhbiA9IE1hdGguYWJzKHBlcmNlbnRhZ2UgLSAxKSA8PSB0aGlzLl9zY3JvbGxWaWV3WydnZXRTY3JvbGxFbmRlZEV2ZW50VGltaW5nJ10oKTtcclxuICAgICAgICBpZiAoZmlyZUV2ZW50ICYmICF0aGlzLl9zY3JvbGxWaWV3WydfaXNTY3JvbGxFbmRlZFdpdGhUaHJlc2hvbGRFdmVudEZpcmVkJ10pIHtcclxuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlld1snX2Rpc3BhdGNoRXZlbnQnXSgnc2Nyb2xsLWVuZGVkLXdpdGgtdGhyZXNob2xkJyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXdbJ19pc1Njcm9sbEVuZGVkV2l0aFRocmVzaG9sZEV2ZW50RmlyZWQnXSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVhY2hlZEVuZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbGluZyddID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGVsdGFNb3ZlOiBhbnkgPSBuZXdQb3NpdGlvbi5zdWIodGhpcy5fc2Nyb2xsVmlldy5nZXRDb250ZW50UG9zaXRpb24oKSk7XHJcbiAgICAgICAgdGhpcy5fc2Nyb2xsVmlld1snX21vdmVDb250ZW50J10odGhpcy5fc2Nyb2xsVmlld1snX2NsYW1wRGVsdGEnXShkZWx0YU1vdmUpLCByZWFjaGVkRW5kKTtcclxuICAgICAgICB0aGlzLl9zY3JvbGxWaWV3WydfZGlzcGF0Y2hFdmVudCddKCdzY3JvbGxpbmcnKTtcclxuXHJcbiAgICAgICAgLy8gc2NvbGxUbyBBUEkgY29udHJvbGwgbW92ZVxyXG4gICAgICAgIGlmICghdGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxpbmcnXSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3WydfaXNCb3VuY2luZyddID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXdbJ19zY3JvbGxpbmcnXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3WydfZGlzcGF0Y2hFdmVudCddKCdzY3JvbGwtZW5kZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+iuvue9ruaooeadv0l0ZW1cclxuICAgIHNldFRlbXBsYXRlSXRlbShpdGVtOiBhbnkpIHtcclxuICAgICAgICBpZiAoIWl0ZW0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcclxuICAgICAgICB0Ll9pdGVtVG1wID0gaXRlbTtcclxuXHJcbiAgICAgICAgaWYgKHQuX3Jlc2l6ZU1vZGUgPT0gY2MuTGF5b3V0LlJlc2l6ZU1vZGUuQ0hJTERSRU4pXHJcbiAgICAgICAgICAgIHQuX2l0ZW1TaXplID0gdC5fbGF5b3V0LmNlbGxTaXplO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdC5faXRlbVNpemUgPSBjYy5zaXplKGl0ZW0ud2lkdGgsIGl0ZW0uaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy/ojrflj5ZMaXN0SXRlbe+8jOWmguaenOayoeacieWwseWPlua2iOmAieaLqeaooeW8j1xyXG4gICAgICAgIGxldCBjb20gPSBpdGVtLmdldENvbXBvbmVudChMaXN0SXRlbSk7XHJcbiAgICAgICAgbGV0IHJlbW92ZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmICghY29tKVxyXG4gICAgICAgICAgICByZW1vdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vIGlmIChjb20pIHtcclxuICAgICAgICAvLyAgICAgaWYgKCFjb20uX2J0bkNvbSAmJiAhaXRlbS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKSkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmVtb3ZlID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZiAocmVtb3ZlKSB7XHJcbiAgICAgICAgICAgIHQuc2VsZWN0ZWRNb2RlID0gU2VsZWN0ZWRUeXBlLk5PTkU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbSA9IGl0ZW0uZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XHJcbiAgICAgICAgaWYgKGNvbSAmJiBjb20uZW5hYmxlZCkge1xyXG4gICAgICAgICAgICB0Ll9uZWVkVXBkYXRlV2lkZ2V0ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHQuc2VsZWN0ZWRNb2RlID09IFNlbGVjdGVkVHlwZS5NVUxUKVxyXG4gICAgICAgICAgICB0Lm11bHRTZWxlY3RlZCA9IFtdO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHQuX2FsaWduKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuSE9SSVpPTlRBTDpcclxuICAgICAgICAgICAgICAgIHQuX2NvbExpbmVOdW0gPSAxO1xyXG4gICAgICAgICAgICAgICAgdC5fc2l6ZVR5cGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLlZFUlRJQ0FMOlxyXG4gICAgICAgICAgICAgICAgdC5fY29sTGluZU51bSA9IDE7XHJcbiAgICAgICAgICAgICAgICB0Ll9zaXplVHlwZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5HUklEOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0Ll9zdGFydEF4aXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLkhPUklaT05UQUw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v6K6h566X5YiX5pWwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0cmltVzogbnVtYmVyID0gdC5jb250ZW50LndpZHRoIC0gdC5fbGVmdEdhcCAtIHQuX3JpZ2h0R2FwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ll9jb2xMaW5lTnVtID0gTWF0aC5mbG9vcigodHJpbVcgKyB0Ll9jb2x1bW5HYXApIC8gKHQuX2l0ZW1TaXplLndpZHRoICsgdC5fY29sdW1uR2FwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX3NpemVUeXBlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5WRVJUSUNBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/orqHnrpfooYzmlbBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRyaW1IOiBudW1iZXIgPSB0LmNvbnRlbnQuaGVpZ2h0IC0gdC5fdG9wR2FwIC0gdC5fYm90dG9tR2FwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ll9jb2xMaW5lTnVtID0gTWF0aC5mbG9vcigodHJpbUggKyB0Ll9saW5lR2FwKSAvICh0Ll9pdGVtU2l6ZS5oZWlnaHQgKyB0Ll9saW5lR2FwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX3NpemVUeXBlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmo4Dmn6XmmK/lkKbliJ3lp4vljJZcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJpbnRMb2cg5piv5ZCm5omT5Y2w6ZSZ6K+v5L+h5oGvXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBjaGVja0luaXRlZChwcmludExvZzogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2luaXRlZCkge1xyXG4gICAgICAgICAgICBpZiAocHJpbnRMb2cpXHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcignTGlzdCBpbml0aWFsaXphdGlvbiBub3QgY29tcGxldGVkIScpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgLy/npoHnlKggTGF5b3V0IOe7hOS7tu+8jOiHquihjOiuoeeulyBDb250ZW50IFNpemVcclxuICAgIF9yZXNpemVDb250ZW50KCkge1xyXG4gICAgICAgIGxldCB0OiBhbnkgPSB0aGlzO1xyXG4gICAgICAgIGxldCByZXN1bHQ6IG51bWJlcjtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0Ll9hbGlnbikge1xyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkhPUklaT05UQUw6IHtcclxuICAgICAgICAgICAgICAgIGlmICh0Ll9jdXN0b21TaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpeGVkOiBhbnkgPSB0Ll9nZXRGaXhlZFNpemUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdC5fbGVmdEdhcCArIGZpeGVkLnZhbCArICh0Ll9pdGVtU2l6ZS53aWR0aCAqICh0Ll9udW1JdGVtcyAtIGZpeGVkLmNvdW50KSkgKyAodC5fY29sdW1uR2FwICogKHQuX251bUl0ZW1zIC0gMSkpICsgdC5fcmlnaHRHYXA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHQuX2xlZnRHYXAgKyAodC5faXRlbVNpemUud2lkdGggKiB0Ll9udW1JdGVtcykgKyAodC5fY29sdW1uR2FwICogKHQuX251bUl0ZW1zIC0gMSkpICsgdC5fcmlnaHRHYXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLlZFUlRJQ0FMOiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodC5fY3VzdG9tU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmaXhlZDogYW55ID0gdC5fZ2V0Rml4ZWRTaXplKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHQuX3RvcEdhcCArIGZpeGVkLnZhbCArICh0Ll9pdGVtU2l6ZS5oZWlnaHQgKiAodC5fbnVtSXRlbXMgLSBmaXhlZC5jb3VudCkpICsgKHQuX2xpbmVHYXAgKiAodC5fbnVtSXRlbXMgLSAxKSkgKyB0Ll9ib3R0b21HYXA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHQuX3RvcEdhcCArICh0Ll9pdGVtU2l6ZS5oZWlnaHQgKiB0Ll9udW1JdGVtcykgKyAodC5fbGluZUdhcCAqICh0Ll9udW1JdGVtcyAtIDEpKSArIHQuX2JvdHRvbUdhcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuR1JJRDoge1xyXG4gICAgICAgICAgICAgICAgLy/nvZHmoLzmqKHlvI/kuI3mlK/mjIHlsYXkuK1cclxuICAgICAgICAgICAgICAgIGlmICh0LmxhY2tDZW50ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgdC5sYWNrQ2VudGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHQuX3N0YXJ0QXhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uSE9SSVpPTlRBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpbmVOdW06IG51bWJlciA9IE1hdGguY2VpbCh0Ll9udW1JdGVtcyAvIHQuX2NvbExpbmVOdW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0Ll90b3BHYXAgKyAodC5faXRlbVNpemUuaGVpZ2h0ICogbGluZU51bSkgKyAodC5fbGluZUdhcCAqIChsaW5lTnVtIC0gMSkpICsgdC5fYm90dG9tR2FwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLlZFUlRJQ0FMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29sTnVtOiBudW1iZXIgPSBNYXRoLmNlaWwodC5fbnVtSXRlbXMgLyB0Ll9jb2xMaW5lTnVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdC5fbGVmdEdhcCArICh0Ll9pdGVtU2l6ZS53aWR0aCAqIGNvbE51bSkgKyAodC5fY29sdW1uR2FwICogKGNvbE51bSAtIDEpKSArIHQuX3JpZ2h0R2FwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbGF5b3V0OiBjYy5MYXlvdXQgPSB0LmNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCk7XHJcbiAgICAgICAgaWYgKGxheW91dClcclxuICAgICAgICAgICAgbGF5b3V0LmVuYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdC5fYWxsSXRlbVNpemUgPSByZXN1bHQ7XHJcbiAgICAgICAgdC5fYWxsSXRlbVNpemVOb0VkZ2UgPSB0Ll9hbGxJdGVtU2l6ZSAtICh0Ll9zaXplVHlwZSA/ICh0Ll90b3BHYXAgKyB0Ll9ib3R0b21HYXApIDogKHQuX2xlZnRHYXAgKyB0Ll9yaWdodEdhcCkpO1xyXG5cclxuICAgICAgICBpZiAodC5jeWNsaWMpIHtcclxuICAgICAgICAgICAgbGV0IHRvdGFsU2l6ZTogbnVtYmVyID0gKHQuX3NpemVUeXBlID8gdC5ub2RlLmhlaWdodCA6IHQubm9kZS53aWR0aCk7XHJcblxyXG4gICAgICAgICAgICB0Ll9jeWNsaWNQb3MxID0gMDtcclxuICAgICAgICAgICAgdG90YWxTaXplIC09IHQuX2N5Y2xpY1BvczE7XHJcbiAgICAgICAgICAgIHQuX2N5Y2xpY051bSA9IE1hdGguY2VpbCh0b3RhbFNpemUgLyB0Ll9hbGxJdGVtU2l6ZU5vRWRnZSkgKyAxO1xyXG4gICAgICAgICAgICBsZXQgc3BhY2luZzogbnVtYmVyID0gdC5fc2l6ZVR5cGUgPyB0Ll9saW5lR2FwIDogdC5fY29sdW1uR2FwO1xyXG4gICAgICAgICAgICB0Ll9jeWNsaWNQb3MyID0gdC5fY3ljbGljUG9zMSArIHQuX2FsbEl0ZW1TaXplTm9FZGdlICsgc3BhY2luZztcclxuICAgICAgICAgICAgdC5fY3ljbGljQWxsSXRlbVNpemUgPSB0Ll9hbGxJdGVtU2l6ZSArICh0Ll9hbGxJdGVtU2l6ZU5vRWRnZSAqICh0Ll9jeWNsaWNOdW0gLSAxKSkgKyAoc3BhY2luZyAqICh0Ll9jeWNsaWNOdW0gLSAxKSk7XHJcbiAgICAgICAgICAgIHQuX2N5Y2lsY0FsbEl0ZW1TaXplTm9FZGdlID0gdC5fYWxsSXRlbVNpemVOb0VkZ2UgKiB0Ll9jeWNsaWNOdW07XHJcbiAgICAgICAgICAgIHQuX2N5Y2lsY0FsbEl0ZW1TaXplTm9FZGdlICs9IHNwYWNpbmcgKiAodC5fY3ljbGljTnVtIC0gMSk7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZygnX2N5Y2xpY051bSAtPicsIHQuX2N5Y2xpY051bSwgdC5fYWxsSXRlbVNpemVOb0VkZ2UsIHQuX2FsbEl0ZW1TaXplLCB0Ll9jeWNsaWNQb3MxLCB0Ll9jeWNsaWNQb3MyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHQuX2xhY2sgPSAhdC5jeWNsaWMgJiYgdC5fYWxsSXRlbVNpemUgPCAodC5fc2l6ZVR5cGUgPyB0Lm5vZGUuaGVpZ2h0IDogdC5ub2RlLndpZHRoKTtcclxuICAgICAgICBsZXQgc2xpZGVPZmZzZXQ6IG51bWJlciA9ICgoIXQuX2xhY2sgfHwgIXQubGFja0NlbnRlcikgJiYgdC5sYWNrU2xpZGUpID8gMCA6IC4xO1xyXG5cclxuICAgICAgICBsZXQgdGFyZ2V0V0g6IG51bWJlciA9IHQuX2xhY2sgPyAoKHQuX3NpemVUeXBlID8gdC5ub2RlLmhlaWdodCA6IHQubm9kZS53aWR0aCkgLSBzbGlkZU9mZnNldCkgOiAodC5jeWNsaWMgPyB0Ll9jeWNsaWNBbGxJdGVtU2l6ZSA6IHQuX2FsbEl0ZW1TaXplKTtcclxuICAgICAgICBpZiAodGFyZ2V0V0ggPCAwKVxyXG4gICAgICAgICAgICB0YXJnZXRXSCA9IDA7XHJcblxyXG4gICAgICAgIGlmICh0Ll9zaXplVHlwZSkge1xyXG4gICAgICAgICAgICB0LmNvbnRlbnQuaGVpZ2h0ID0gdGFyZ2V0V0g7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdC5jb250ZW50LndpZHRoID0gdGFyZ2V0V0g7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjYy5sb2coJ19yZXNpemVDb250ZW50KCkgIG51bUl0ZW1zID0nLCB0Ll9udW1JdGVtcywgJ++8jGNvbnRlbnQgPScsIHQuY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/mu5rliqjov5vooYzml7YuLi5cclxuICAgIF9vblNjcm9sbGluZyhldjogY2MuRXZlbnQgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVDb3VudCA9PSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLmZyYW1lQ291bnQgPSB0aGlzLl91cGRhdGVSYXRlO1xyXG4gICAgICAgIGlmICghdGhpcy5fZm9yY2VVcGRhdGUgJiYgKGV2ICYmIGV2LnR5cGUgIT0gJ3Njcm9sbC1lbmRlZCcpICYmIHRoaXMuZnJhbWVDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5mcmFtZUNvdW50LS07XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgdGhpcy5mcmFtZUNvdW50ID0gdGhpcy5fdXBkYXRlUmF0ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2FuaURlbFJ1bmluZylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAvL+W+queOr+WIl+ihqOWkhOeQhlxyXG4gICAgICAgIGlmICh0aGlzLmN5Y2xpYykge1xyXG4gICAgICAgICAgICBsZXQgc2Nyb2xsUG9zOiBhbnkgPSB0aGlzLmNvbnRlbnQuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgc2Nyb2xsUG9zID0gdGhpcy5fc2l6ZVR5cGUgPyBzY3JvbGxQb3MueSA6IHNjcm9sbFBvcy54O1xyXG5cclxuICAgICAgICAgICAgbGV0IGFkZFZhbCA9IHRoaXMuX2FsbEl0ZW1TaXplTm9FZGdlICsgKHRoaXMuX3NpemVUeXBlID8gdGhpcy5fbGluZUdhcCA6IHRoaXMuX2NvbHVtbkdhcCk7XHJcbiAgICAgICAgICAgIGxldCBhZGQ6IGFueSA9IHRoaXMuX3NpemVUeXBlID8gY2MudjIoMCwgYWRkVmFsKSA6IGNjLnYyKGFkZFZhbCwgMCk7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2FsaWduQ2FsY1R5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTovL+WNleihjEhPUklaT05UQUzvvIhMRUZUX1RPX1JJR0hU77yJ44CB572R5qC8VkVSVElDQUzvvIhMRUZUX1RPX1JJR0hU77yJXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFBvcyA+IC10aGlzLl9jeWNsaWNQb3MxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC54ID0gLXRoaXMuX2N5Y2xpY1BvczI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24nXSA9IHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiddLnN1YihhZGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLl9iZWdhblBvcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5fYmVnYW5Qb3MgKz0gYWRkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzY3JvbGxQb3MgPCAtdGhpcy5fY3ljbGljUG9zMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQueCA9IC10aGlzLl9jeWNsaWNQb3MxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmlldy5pc0F1dG9TY3JvbGxpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uJ10gPSB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24nXS5hZGQoYWRkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5fYmVnYW5Qb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuX2JlZ2FuUG9zIC09IGFkZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMjovL+WNleihjEhPUklaT05UQUzvvIhSSUdIVF9UT19MRUZU77yJ44CB572R5qC8VkVSVElDQUzvvIhSSUdIVF9UT19MRUZU77yJXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFBvcyA8IHRoaXMuX2N5Y2xpY1BvczEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnggPSB0aGlzLl9jeWNsaWNQb3MyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmlldy5pc0F1dG9TY3JvbGxpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uJ10gPSB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24nXS5hZGQoYWRkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2Nyb2xsUG9zID4gdGhpcy5fY3ljbGljUG9zMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQueCA9IHRoaXMuX2N5Y2xpY1BvczE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24nXSA9IHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiddLnN1YihhZGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOi8v5Y2V5YiXVkVSVElDQUzvvIhUT1BfVE9fQk9UVE9N77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iFRPUF9UT19CT1RUT03vvIlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsUG9zIDwgdGhpcy5fY3ljbGljUG9zMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQueSA9IHRoaXMuX2N5Y2xpY1BvczI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24nXSA9IHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiddLmFkZChhZGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzY3JvbGxQb3MgPiB0aGlzLl9jeWNsaWNQb3MyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC55ID0gdGhpcy5fY3ljbGljUG9zMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZpZXcuaXNBdXRvU2Nyb2xsaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiddID0gdGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uJ10uc3ViKGFkZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6Ly/ljZXliJdWRVJUSUNBTO+8iEJPVFRPTV9UT19UT1DvvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIQk9UVE9NX1RPX1RPUO+8iVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxQb3MgPiAtdGhpcy5fY3ljbGljUG9zMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQueSA9IC10aGlzLl9jeWNsaWNQb3MyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmlldy5pc0F1dG9TY3JvbGxpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uJ10gPSB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24nXS5zdWIoYWRkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2Nyb2xsUG9zIDwgLXRoaXMuX2N5Y2xpY1BvczIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnkgPSAtdGhpcy5fY3ljbGljUG9zMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZpZXcuaXNBdXRvU2Nyb2xsaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiddID0gdGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uJ10uYWRkKGFkZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2NhbGNWaWV3UG9zKCk7XHJcblxyXG4gICAgICAgIGxldCB2VG9wOiBudW1iZXIsIHZSaWdodDogbnVtYmVyLCB2Qm90dG9tOiBudW1iZXIsIHZMZWZ0OiBudW1iZXI7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NpemVUeXBlKSB7XHJcbiAgICAgICAgICAgIHZUb3AgPSB0aGlzLnZpZXdUb3A7XHJcbiAgICAgICAgICAgIHZCb3R0b20gPSB0aGlzLnZpZXdCb3R0b207XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdlJpZ2h0ID0gdGhpcy52aWV3UmlnaHQ7XHJcbiAgICAgICAgICAgIHZMZWZ0ID0gdGhpcy52aWV3TGVmdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl92aXJ0dWFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheURhdGEgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGl0ZW1Qb3M6IGFueTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjdXJJZDogbnVtYmVyID0gMDtcclxuICAgICAgICAgICAgbGV0IGVuZElkOiBudW1iZXIgPSB0aGlzLl9udW1JdGVtcyAtIDE7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY3VzdG9tU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJyZWFrRm9yOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvL+WmguaenOivpWl0ZW3nmoTkvY3nva7lnKjlj6/op4bljLrln5/lhoXvvIzlsLHmjqjlhaVkaXNwbGF5RGF0YVxyXG4gICAgICAgICAgICAgICAgZm9yICg7IGN1cklkIDw9IGVuZElkICYmICFicmVha0ZvcjsgY3VySWQrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1Qb3MgPSB0aGlzLl9jYWxjSXRlbVBvcyhjdXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9hbGlnbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkhPUklaT05UQUw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVBvcy5yaWdodCA+PSB2TGVmdCAmJiBpdGVtUG9zLmxlZnQgPD0gdlJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RGF0YS5wdXNoKGl0ZW1Qb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJJZCAhPSAwICYmIHRoaXMuZGlzcGxheURhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrRm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLlZFUlRJQ0FMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1Qb3MuYm90dG9tIDw9IHZUb3AgJiYgaXRlbVBvcy50b3AgPj0gdkJvdHRvbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheURhdGEucHVzaChpdGVtUG9zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VySWQgIT0gMCAmJiB0aGlzLmRpc3BsYXlEYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha0ZvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5HUklEOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9zdGFydEF4aXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLkhPUklaT05UQUw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtUG9zLmJvdHRvbSA8PSB2VG9wICYmIGl0ZW1Qb3MudG9wID49IHZCb3R0b20pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheURhdGEucHVzaChpdGVtUG9zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJJZCAhPSAwICYmIHRoaXMuZGlzcGxheURhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtGb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uVkVSVElDQUw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtUG9zLnJpZ2h0ID49IHZMZWZ0ICYmIGl0ZW1Qb3MubGVmdCA8PSB2UmlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheURhdGEucHVzaChpdGVtUG9zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJJZCAhPSAwICYmIHRoaXMuZGlzcGxheURhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtGb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHd3OiBudW1iZXIgPSB0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcDtcclxuICAgICAgICAgICAgICAgIGxldCBoaDogbnVtYmVyID0gdGhpcy5faXRlbVNpemUuaGVpZ2h0ICsgdGhpcy5fbGluZUdhcDtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fYWxpZ25DYWxjVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTovL+WNleihjEhPUklaT05UQUzvvIhMRUZUX1RPX1JJR0hU77yJ44CB572R5qC8VkVSVElDQUzvvIhMRUZUX1RPX1JJR0hU77yJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cklkID0gKHZMZWZ0IC0gdGhpcy5fbGVmdEdhcCkgLyB3dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kSWQgPSAodlJpZ2h0IC0gdGhpcy5fbGVmdEdhcCkgLyB3dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iFJJR0hUX1RPX0xFRlTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iFJJR0hUX1RPX0xFRlTvvIlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VySWQgPSAoLXZSaWdodCAtIHRoaXMuX3JpZ2h0R2FwKSAvIHd3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRJZCA9ICgtdkxlZnQgLSB0aGlzLl9yaWdodEdhcCkgLyB3dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOi8v5Y2V5YiXVkVSVElDQUzvvIhUT1BfVE9fQk9UVE9N77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iFRPUF9UT19CT1RUT03vvIlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VySWQgPSAoLXZUb3AgLSB0aGlzLl90b3BHYXApIC8gaGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZElkID0gKC12Qm90dG9tIC0gdGhpcy5fdG9wR2FwKSAvIGhoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6Ly/ljZXliJdWRVJUSUNBTO+8iEJPVFRPTV9UT19UT1DvvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIQk9UVE9NX1RPX1RPUO+8iVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJJZCA9ICh2Qm90dG9tIC0gdGhpcy5fYm90dG9tR2FwKSAvIGhoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRJZCA9ICh2VG9wIC0gdGhpcy5fYm90dG9tR2FwKSAvIGhoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGN1cklkID0gTWF0aC5mbG9vcihjdXJJZCkgKiB0aGlzLl9jb2xMaW5lTnVtO1xyXG4gICAgICAgICAgICAgICAgZW5kSWQgPSBNYXRoLmNlaWwoZW5kSWQpICogdGhpcy5fY29sTGluZU51bTtcclxuICAgICAgICAgICAgICAgIGVuZElkLS07XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VySWQgPCAwKVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cklkID0gMDtcclxuICAgICAgICAgICAgICAgIGlmIChlbmRJZCA+PSB0aGlzLl9udW1JdGVtcylcclxuICAgICAgICAgICAgICAgICAgICBlbmRJZCA9IHRoaXMuX251bUl0ZW1zIC0gMTtcclxuICAgICAgICAgICAgICAgIGZvciAoOyBjdXJJZCA8PSBlbmRJZDsgY3VySWQrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheURhdGEucHVzaCh0aGlzLl9jYWxjSXRlbVBvcyhjdXJJZCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2RlbFJlZHVuZGFudEl0ZW0oKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlzcGxheURhdGEubGVuZ3RoIDw9IDAgfHwgIXRoaXMuX251bUl0ZW1zKSB7IC8vaWYgbm9uZSwgZGVsZXRlIGFsbC5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2xhc3REaXNwbGF5RGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RMaXN0SWQgPSB0aGlzLmRpc3BsYXlEYXRhWzBdLmlkO1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlJdGVtTnVtID0gdGhpcy5kaXNwbGF5RGF0YS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICBsZXQgbGVuOiBudW1iZXIgPSB0aGlzLl9sYXN0RGlzcGxheURhdGEubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgbGV0IGhhdmVEYXRhQ2hhbmdlOiBib29sZWFuID0gdGhpcy5kaXNwbGF5SXRlbU51bSAhPSBsZW47XHJcbiAgICAgICAgICAgIGlmIChoYXZlRGF0YUNoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5piv6YCQ5bin5riy5p+T77yM6ZyA6KaB5o6S5bqPXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGFzdERpc3BsYXlEYXRhLnNvcnQoKGEsIGIpID0+IHsgcmV0dXJuIGEgLSBiIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8g5ZugTGlzdOeahOaYvuekuuaVsOaNruaYr+acieW6j+eahO+8jOaJgOS7peWPqumcgOimgeWIpOaWreaVsOe7hOmVv+W6puaYr+WQpuebuOetie+8jOS7peWPiuWktOOAgeWwvuS4pOS4quWFg+e0oOaYr+WQpuebuOetieWNs+WPr+OAglxyXG4gICAgICAgICAgICAgICAgaGF2ZURhdGFDaGFuZ2UgPSB0aGlzLmZpcnN0TGlzdElkICE9IHRoaXMuX2xhc3REaXNwbGF5RGF0YVswXSB8fCB0aGlzLmRpc3BsYXlEYXRhW3RoaXMuZGlzcGxheUl0ZW1OdW0gLSAxXS5pZCAhPSB0aGlzLl9sYXN0RGlzcGxheURhdGFbbGVuIC0gMV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9mb3JjZVVwZGF0ZSB8fCBoYXZlRGF0YUNoYW5nZSkgeyAgICAvL+WmguaenOaYr+W8uuWItuabtOaWsFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLl91cGRhdGVEb25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5fbGFzdERpc3BsYXlEYXRhID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgLy/pgJDluKfmuLLmn5NcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbnVtSXRlbXMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fdXBkYXRlRG9uZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZG9uZUFmdGVyVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVDb3VudGVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/nm7TmjqXmuLLmn5NcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sYXN0RGlzcGxheURhdGEgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coJ0xpc3QgRGlzcGxheSBEYXRhIElJOjonLCB0aGlzLmRpc3BsYXlEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IHRoaXMuZGlzcGxheUl0ZW1OdW07IGMrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVPclVwZGF0ZUl0ZW0odGhpcy5kaXNwbGF5RGF0YVtjXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZvcmNlVXBkYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fY2FsY05lYXJlc3RJdGVtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/orqHnrpflj6/op4bojIPlm7RcclxuICAgIF9jYWxjVmlld1BvcygpIHtcclxuICAgICAgICBsZXQgc2Nyb2xsUG9zOiBhbnkgPSB0aGlzLmNvbnRlbnQuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuX2FsaWduQ2FsY1R5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAxOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iExFRlRfVE9fUklHSFTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iExFRlRfVE9fUklHSFTvvIlcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxhc3RpY0xlZnQgPSBzY3JvbGxQb3MueCA+IDAgPyBzY3JvbGxQb3MueCA6IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdMZWZ0ID0gKHNjcm9sbFBvcy54IDwgMCA/IC1zY3JvbGxQb3MueCA6IDApIC0gdGhpcy5lbGFzdGljTGVmdDtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld1JpZ2h0ID0gdGhpcy52aWV3TGVmdCArIHRoaXMubm9kZS53aWR0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxhc3RpY1JpZ2h0ID0gdGhpcy52aWV3UmlnaHQgPiB0aGlzLmNvbnRlbnQud2lkdGggPyBNYXRoLmFicyh0aGlzLnZpZXdSaWdodCAtIHRoaXMuY29udGVudC53aWR0aCkgOiAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3UmlnaHQgKz0gdGhpcy5lbGFzdGljUmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2codGhpcy5lbGFzdGljTGVmdCwgdGhpcy5lbGFzdGljUmlnaHQsIHRoaXMudmlld0xlZnQsIHRoaXMudmlld1JpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6Ly/ljZXooYxIT1JJWk9OVEFM77yIUklHSFRfVE9fTEVGVO+8ieOAgee9keagvFZFUlRJQ0FM77yIUklHSFRfVE9fTEVGVO+8iVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGFzdGljUmlnaHQgPSBzY3JvbGxQb3MueCA8IDAgPyAtc2Nyb2xsUG9zLnggOiAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3UmlnaHQgPSAoc2Nyb2xsUG9zLnggPiAwID8gLXNjcm9sbFBvcy54IDogMCkgKyB0aGlzLmVsYXN0aWNSaWdodDtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld0xlZnQgPSB0aGlzLnZpZXdSaWdodCAtIHRoaXMubm9kZS53aWR0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxhc3RpY0xlZnQgPSB0aGlzLnZpZXdMZWZ0IDwgLXRoaXMuY29udGVudC53aWR0aCA/IE1hdGguYWJzKHRoaXMudmlld0xlZnQgKyB0aGlzLmNvbnRlbnQud2lkdGgpIDogMDtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld0xlZnQgLT0gdGhpcy5lbGFzdGljTGVmdDtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyh0aGlzLmVsYXN0aWNMZWZ0LCB0aGlzLmVsYXN0aWNSaWdodCwgdGhpcy52aWV3TGVmdCwgdGhpcy52aWV3UmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzovL+WNleWIl1ZFUlRJQ0FM77yIVE9QX1RPX0JPVFRPTe+8ieOAgee9keagvEhPUklaT05UQUzvvIhUT1BfVE9fQk9UVE9N77yJXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsYXN0aWNUb3AgPSBzY3JvbGxQb3MueSA8IDAgPyBNYXRoLmFicyhzY3JvbGxQb3MueSkgOiAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3VG9wID0gKHNjcm9sbFBvcy55ID4gMCA/IC1zY3JvbGxQb3MueSA6IDApICsgdGhpcy5lbGFzdGljVG9wO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3Qm90dG9tID0gdGhpcy52aWV3VG9wIC0gdGhpcy5ub2RlLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxhc3RpY0JvdHRvbSA9IHRoaXMudmlld0JvdHRvbSA8IC10aGlzLmNvbnRlbnQuaGVpZ2h0ID8gTWF0aC5hYnModGhpcy52aWV3Qm90dG9tICsgdGhpcy5jb250ZW50LmhlaWdodCkgOiAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3Qm90dG9tICs9IHRoaXMuZWxhc3RpY0JvdHRvbTtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyh0aGlzLmVsYXN0aWNUb3AsIHRoaXMuZWxhc3RpY0JvdHRvbSwgdGhpcy52aWV3VG9wLCB0aGlzLnZpZXdCb3R0b20pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDovL+WNleWIl1ZFUlRJQ0FM77yIQk9UVE9NX1RPX1RPUO+8ieOAgee9keagvEhPUklaT05UQUzvvIhCT1RUT01fVE9fVE9Q77yJXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsYXN0aWNCb3R0b20gPSBzY3JvbGxQb3MueSA+IDAgPyBNYXRoLmFicyhzY3JvbGxQb3MueSkgOiAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3Qm90dG9tID0gKHNjcm9sbFBvcy55IDwgMCA/IC1zY3JvbGxQb3MueSA6IDApIC0gdGhpcy5lbGFzdGljQm90dG9tO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3VG9wID0gdGhpcy52aWV3Qm90dG9tICsgdGhpcy5ub2RlLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxhc3RpY1RvcCA9IHRoaXMudmlld1RvcCA+IHRoaXMuY29udGVudC5oZWlnaHQgPyBNYXRoLmFicyh0aGlzLnZpZXdUb3AgLSB0aGlzLmNvbnRlbnQuaGVpZ2h0KSA6IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdUb3AgLT0gdGhpcy5lbGFzdGljVG9wO1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKHRoaXMuZWxhc3RpY1RvcCwgdGhpcy5lbGFzdGljQm90dG9tLCB0aGlzLnZpZXdUb3AsIHRoaXMudmlld0JvdHRvbSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+iuoeeul+S9jee9riDmoLnmja5pZFxyXG4gICAgX2NhbGNJdGVtUG9zKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHRvcDogbnVtYmVyLCBib3R0b206IG51bWJlciwgbGVmdDogbnVtYmVyLCByaWdodDogbnVtYmVyLCBpdGVtWDogbnVtYmVyLCBpdGVtWTogbnVtYmVyO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5fYWxpZ24pIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5IT1JJWk9OVEFMOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9ob3Jpem9udGFsRGlyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5MRUZUX1RPX1JJR0hUOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jdXN0b21TaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZml4ZWQ6IGFueSA9IHRoaXMuX2dldEZpeGVkU2l6ZShpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gdGhpcy5fbGVmdEdhcCArICgodGhpcy5faXRlbVNpemUud2lkdGggKyB0aGlzLl9jb2x1bW5HYXApICogKGlkIC0gZml4ZWQuY291bnQpKSArIChmaXhlZC52YWwgKyAodGhpcy5fY29sdW1uR2FwICogZml4ZWQuY291bnQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjczogbnVtYmVyID0gdGhpcy5fY3VzdG9tU2l6ZVtpZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IChjcyA+IDAgPyBjcyA6IHRoaXMuX2l0ZW1TaXplLndpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSB0aGlzLl9sZWZ0R2FwICsgKCh0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcCkgKiBpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHRoaXMuX2l0ZW1TaXplLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhY2tDZW50ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgLT0gdGhpcy5fbGVmdEdhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvZmZzZXQ6IG51bWJlciA9ICh0aGlzLmNvbnRlbnQud2lkdGggLyAyKSAtICh0aGlzLl9hbGxJdGVtU2l6ZU5vRWRnZSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCArPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQgPSBsZWZ0ICsgd2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBsZWZ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHJpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogbGVmdCArICh0aGlzLl9pdGVtVG1wLmFuY2hvclggKiB3aWR0aCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLl9pdGVtVG1wLnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0Lkhvcml6b250YWxEaXJlY3Rpb24uUklHSFRfVE9fTEVGVDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY3VzdG9tU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpeGVkOiBhbnkgPSB0aGlzLl9nZXRGaXhlZFNpemUoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQgPSAtdGhpcy5fcmlnaHRHYXAgLSAoKHRoaXMuX2l0ZW1TaXplLndpZHRoICsgdGhpcy5fY29sdW1uR2FwKSAqIChpZCAtIGZpeGVkLmNvdW50KSkgLSAoZml4ZWQudmFsICsgKHRoaXMuX2NvbHVtbkdhcCAqIGZpeGVkLmNvdW50KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3M6IG51bWJlciA9IHRoaXMuX2N1c3RvbVNpemVbaWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSAoY3MgPiAwID8gY3MgOiB0aGlzLl9pdGVtU2l6ZS53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodCA9IC10aGlzLl9yaWdodEdhcCAtICgodGhpcy5faXRlbVNpemUud2lkdGggKyB0aGlzLl9jb2x1bW5HYXApICogaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB0aGlzLl9pdGVtU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYWNrQ2VudGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodCArPSB0aGlzLl9yaWdodEdhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvZmZzZXQ6IG51bWJlciA9ICh0aGlzLmNvbnRlbnQud2lkdGggLyAyKSAtICh0aGlzLl9hbGxJdGVtU2l6ZU5vRWRnZSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQgLT0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSByaWdodCAtIHdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHJpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogbGVmdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGxlZnQgKyAodGhpcy5faXRlbVRtcC5hbmNob3JYICogd2lkdGgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5faXRlbVRtcC55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLlZFUlRJQ0FMOiB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX3ZlcnRpY2FsRGlyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uVE9QX1RPX0JPVFRPTToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY3VzdG9tU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpeGVkOiBhbnkgPSB0aGlzLl9nZXRGaXhlZFNpemUoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wID0gLXRoaXMuX3RvcEdhcCAtICgodGhpcy5faXRlbVNpemUuaGVpZ2h0ICsgdGhpcy5fbGluZUdhcCkgKiAoaWQgLSBmaXhlZC5jb3VudCkpIC0gKGZpeGVkLnZhbCArICh0aGlzLl9saW5lR2FwICogZml4ZWQuY291bnQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjczogbnVtYmVyID0gdGhpcy5fY3VzdG9tU2l6ZVtpZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSAoY3MgPiAwID8gY3MgOiB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wID0gLXRoaXMuX3RvcEdhcCAtICgodGhpcy5faXRlbVNpemUuaGVpZ2h0ICsgdGhpcy5fbGluZUdhcCkgKiBpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFja0NlbnRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wICs9IHRoaXMuX3RvcEdhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvZmZzZXQ6IG51bWJlciA9ICh0aGlzLmNvbnRlbnQuaGVpZ2h0IC8gMikgLSAodGhpcy5fYWxsSXRlbVNpemVOb0VkZ2UgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcCAtPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tID0gdG9wIC0gaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiB0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IGJvdHRvbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuX2l0ZW1UbXAueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGJvdHRvbSArICh0aGlzLl9pdGVtVG1wLmFuY2hvclkgKiBoZWlnaHQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5CT1RUT01fVE9fVE9QOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jdXN0b21TaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZml4ZWQ6IGFueSA9IHRoaXMuX2dldEZpeGVkU2l6ZShpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b20gPSB0aGlzLl9ib3R0b21HYXAgKyAoKHRoaXMuX2l0ZW1TaXplLmhlaWdodCArIHRoaXMuX2xpbmVHYXApICogKGlkIC0gZml4ZWQuY291bnQpKSArIChmaXhlZC52YWwgKyAodGhpcy5fbGluZUdhcCAqIGZpeGVkLmNvdW50KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3M6IG51bWJlciA9IHRoaXMuX2N1c3RvbVNpemVbaWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gKGNzID4gMCA/IGNzIDogdGhpcy5faXRlbVNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbSA9IHRoaXMuX2JvdHRvbUdhcCArICgodGhpcy5faXRlbVNpemUuaGVpZ2h0ICsgdGhpcy5fbGluZUdhcCkgKiBpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFja0NlbnRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tIC09IHRoaXMuX2JvdHRvbUdhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvZmZzZXQ6IG51bWJlciA9ICh0aGlzLmNvbnRlbnQuaGVpZ2h0IC8gMikgLSAodGhpcy5fYWxsSXRlbVNpemVOb0VkZ2UgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbSArPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wID0gYm90dG9tICsgaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiB0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IGJvdHRvbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuX2l0ZW1UbXAueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGJvdHRvbSArICh0aGlzLl9pdGVtVG1wLmFuY2hvclkgKiBoZWlnaHQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5HUklEOiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sTGluZTogbnVtYmVyID0gTWF0aC5mbG9vcihpZCAvIHRoaXMuX2NvbExpbmVOdW0pO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9zdGFydEF4aXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLkhPUklaT05UQUw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl92ZXJ0aWNhbERpcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uVE9QX1RPX0JPVFRPTToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcCA9IC10aGlzLl90b3BHYXAgLSAoKHRoaXMuX2l0ZW1TaXplLmhlaWdodCArIHRoaXMuX2xpbmVHYXApICogY29sTGluZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tID0gdG9wIC0gdGhpcy5faXRlbVNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1ZID0gYm90dG9tICsgKHRoaXMuX2l0ZW1UbXAuYW5jaG9yWSAqIHRoaXMuX2l0ZW1TaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5CT1RUT01fVE9fVE9QOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tID0gdGhpcy5fYm90dG9tR2FwICsgKCh0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgKyB0aGlzLl9saW5lR2FwKSAqIGNvbExpbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcCA9IGJvdHRvbSArIHRoaXMuX2l0ZW1TaXplLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWSA9IGJvdHRvbSArICh0aGlzLl9pdGVtVG1wLmFuY2hvclkgKiB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1YID0gdGhpcy5fbGVmdEdhcCArICgoaWQgJSB0aGlzLl9jb2xMaW5lTnVtKSAqICh0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2hvcml6b250YWxEaXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0Lkhvcml6b250YWxEaXJlY3Rpb24uTEVGVF9UT19SSUdIVDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1YICs9ICh0aGlzLl9pdGVtVG1wLmFuY2hvclggKiB0aGlzLl9pdGVtU2l6ZS53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVggLT0gKHRoaXMuY29udGVudC5hbmNob3JYICogdGhpcy5jb250ZW50LndpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0Lkhvcml6b250YWxEaXJlY3Rpb24uUklHSFRfVE9fTEVGVDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1YICs9ICgoMSAtIHRoaXMuX2l0ZW1UbXAuYW5jaG9yWCkgKiB0aGlzLl9pdGVtU2l6ZS53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVggLT0gKCgxIC0gdGhpcy5jb250ZW50LmFuY2hvclgpICogdGhpcy5jb250ZW50LndpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWCAqPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiB0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IGJvdHRvbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGl0ZW1YLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogaXRlbVksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uVkVSVElDQUw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9ob3Jpem9udGFsRGlyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLkxFRlRfVE9fUklHSFQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gdGhpcy5fbGVmdEdhcCArICgodGhpcy5faXRlbVNpemUud2lkdGggKyB0aGlzLl9jb2x1bW5HYXApICogY29sTGluZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQgPSBsZWZ0ICsgdGhpcy5faXRlbVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVggPSBsZWZ0ICsgKHRoaXMuX2l0ZW1UbXAuYW5jaG9yWCAqIHRoaXMuX2l0ZW1TaXplLndpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWCAtPSAodGhpcy5jb250ZW50LmFuY2hvclggKiB0aGlzLmNvbnRlbnQud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5SSUdIVF9UT19MRUZUOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQgPSAtdGhpcy5fcmlnaHRHYXAgLSAoKHRoaXMuX2l0ZW1TaXplLndpZHRoICsgdGhpcy5fY29sdW1uR2FwKSAqIGNvbExpbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSByaWdodCAtIHRoaXMuX2l0ZW1TaXplLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1YID0gbGVmdCArICh0aGlzLl9pdGVtVG1wLmFuY2hvclggKiB0aGlzLl9pdGVtU2l6ZS53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVggKz0gKCgxIC0gdGhpcy5jb250ZW50LmFuY2hvclgpICogdGhpcy5jb250ZW50LndpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtWSA9IC10aGlzLl90b3BHYXAgLSAoKGlkICUgdGhpcy5fY29sTGluZU51bSkgKiAodGhpcy5faXRlbVNpemUuaGVpZ2h0ICsgdGhpcy5fbGluZUdhcCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX3ZlcnRpY2FsRGlyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5UT1BfVE9fQk9UVE9NOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVkgLT0gKCgxIC0gdGhpcy5faXRlbVRtcC5hbmNob3JZKSAqIHRoaXMuX2l0ZW1TaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVkgKz0gKCgxIC0gdGhpcy5jb250ZW50LmFuY2hvclkpICogdGhpcy5jb250ZW50LmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5CT1RUT01fVE9fVE9QOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVkgLT0gKCh0aGlzLl9pdGVtVG1wLmFuY2hvclkpICogdGhpcy5faXRlbVNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWSArPSAodGhpcy5jb250ZW50LmFuY2hvclkgKiB0aGlzLmNvbnRlbnQuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWSAqPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogbGVmdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiByaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGl0ZW1YLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogaXRlbVksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+iuoeeul+W3suWtmOWcqOeahEl0ZW3nmoTkvY3nva5cclxuICAgIF9jYWxjRXhpc3RJdGVtUG9zKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgaXRlbTogYW55ID0gdGhpcy5nZXRJdGVtQnlMaXN0SWQoaWQpO1xyXG4gICAgICAgIGlmICghaXRlbSlcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgbGV0IGRhdGE6IGFueSA9IHtcclxuICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICB4OiBpdGVtLngsXHJcbiAgICAgICAgICAgIHk6IGl0ZW0ueSxcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3NpemVUeXBlKSB7XHJcbiAgICAgICAgICAgIGRhdGEudG9wID0gaXRlbS55ICsgKGl0ZW0uaGVpZ2h0ICogKDEgLSBpdGVtLmFuY2hvclkpKTtcclxuICAgICAgICAgICAgZGF0YS5ib3R0b20gPSBpdGVtLnkgLSAoaXRlbS5oZWlnaHQgKiBpdGVtLmFuY2hvclkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRhdGEubGVmdCA9IGl0ZW0ueCAtIChpdGVtLndpZHRoICogaXRlbS5hbmNob3JYKTtcclxuICAgICAgICAgICAgZGF0YS5yaWdodCA9IGl0ZW0ueCArIChpdGVtLndpZHRoICogKDEgLSBpdGVtLmFuY2hvclgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgICAvL+iOt+WPlkl0ZW3kvY3nva5cclxuICAgIGdldEl0ZW1Qb3MoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLl92aXJ0dWFsKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FsY0l0ZW1Qb3MoaWQpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FsY0l0ZW1Qb3MoaWQpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FsY0V4aXN0SXRlbVBvcyhpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/ojrflj5blm7rlrprlsLrlr7hcclxuICAgIF9nZXRGaXhlZFNpemUobGlzdElkOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2N1c3RvbVNpemUpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIGlmIChsaXN0SWQgPT0gbnVsbClcclxuICAgICAgICAgICAgbGlzdElkID0gdGhpcy5fbnVtSXRlbXM7XHJcbiAgICAgICAgbGV0IGZpeGVkOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCBjb3VudDogbnVtYmVyID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpZCBpbiB0aGlzLl9jdXN0b21TaXplKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJzZUludChpZCkgPCBsaXN0SWQpIHtcclxuICAgICAgICAgICAgICAgIGZpeGVkICs9IHRoaXMuX2N1c3RvbVNpemVbaWRdO1xyXG4gICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB2YWw6IGZpeGVkLFxyXG4gICAgICAgICAgICBjb3VudDogY291bnQsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/mu5rliqjnu5PmnZ/ml7YuLlxyXG4gICAgX29uU2Nyb2xsQmVnYW4oKSB7XHJcbiAgICAgICAgdGhpcy5fYmVnYW5Qb3MgPSB0aGlzLl9zaXplVHlwZSA/IHRoaXMudmlld1RvcCA6IHRoaXMudmlld0xlZnQ7XHJcbiAgICB9XHJcbiAgICAvL+a7muWKqOe7k+adn+aXti4uXHJcbiAgICBfb25TY3JvbGxFbmRlZCgpIHtcclxuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcclxuICAgICAgICB0LmN1clNjcm9sbElzVG91Y2ggPSBmYWxzZTtcclxuICAgICAgICBpZiAodC5zY3JvbGxUb0xpc3RJZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtOiBhbnkgPSB0LmdldEl0ZW1CeUxpc3RJZCh0LnNjcm9sbFRvTGlzdElkKTtcclxuICAgICAgICAgICAgdC5zY3JvbGxUb0xpc3RJZCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihpdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgIC50byguMSwgeyBzY2FsZTogMS4wNiB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50byguMSwgeyBzY2FsZTogMSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHQuX29uU2Nyb2xsaW5nKCk7XHJcblxyXG4gICAgICAgIGlmICh0Ll9zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLkFESEVSSU5HICYmXHJcbiAgICAgICAgICAgICF0LmFkaGVyaW5nXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIC8vY2MubG9nKHQuYWRoZXJpbmcsIHQuX3Njcm9sbFZpZXcuaXNBdXRvU2Nyb2xsaW5nKCksIHQuX3Njcm9sbFZpZXcuaXNTY3JvbGxpbmcoKSk7XHJcbiAgICAgICAgICAgIHQuYWRoZXJlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0Ll9zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLlBBR0UpIHtcclxuICAgICAgICAgICAgaWYgKHQuX2JlZ2FuUG9zICE9IG51bGwgJiYgdC5jdXJTY3JvbGxJc1RvdWNoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWdlQWRoZXJlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0LmFkaGVyZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g6Kem5pG45pe2XHJcbiAgICBfb25Ub3VjaFN0YXJ0KGV2LCBjYXB0dXJlTGlzdGVuZXJzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZpZXc/LlsnaGFzTmVzdGVkVmlld0dyb3VwJ10oKSkvL2V2LCBjYXB0dXJlTGlzdGVuZXJzXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLmN1clNjcm9sbElzVG91Y2ggPSB0cnVlO1xyXG4gICAgICAgIGxldCBpc01lID0gZXYuZXZlbnRQaGFzZSA9PT0gY2MuRXZlbnQuQVRfVEFSR0VUICYmIGV2LnRhcmdldCA9PT0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGlmICghaXNNZSkge1xyXG4gICAgICAgICAgICBsZXQgaXRlbU5vZGU6IGFueSA9IGV2LnRhcmdldDtcclxuICAgICAgICAgICAgd2hpbGUgKGl0ZW1Ob2RlLl9saXN0SWQgPT0gbnVsbCAmJiBpdGVtTm9kZS5wYXJlbnQpXHJcbiAgICAgICAgICAgICAgICBpdGVtTm9kZSA9IGl0ZW1Ob2RlLnBhcmVudDtcclxuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsSXRlbSA9IGl0ZW1Ob2RlLl9saXN0SWQgIT0gbnVsbCA/IGl0ZW1Ob2RlIDogZXYudGFyZ2V0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v6Kem5pG45oqs6LW35pe2Li5cclxuICAgIF9vblRvdWNoVXAoKSB7XHJcbiAgICAgICAgbGV0IHQ6IGFueSA9IHRoaXM7XHJcbiAgICAgICAgdC5fc2Nyb2xsUG9zID0gbnVsbDtcclxuICAgICAgICBpZiAodC5fc2xpZGVNb2RlID09IFNsaWRlVHlwZS5BREhFUklORykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hZGhlcmluZylcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FkaGVyaW5nQmFycmllciA9IHRydWU7XHJcbiAgICAgICAgICAgIHQuYWRoZXJlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0Ll9zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLlBBR0UpIHtcclxuICAgICAgICAgICAgaWYgKHQuX2JlZ2FuUG9zICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhZ2VBZGhlcmUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHQuYWRoZXJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc2Nyb2xsSXRlbSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgX29uVG91Y2hDYW5jZWxsZWQoZXYsIGNhcHR1cmVMaXN0ZW5lcnMpIHtcclxuICAgICAgICBsZXQgdCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHQuX3Njcm9sbFZpZXc/LlsnaGFzTmVzdGVkVmlld0dyb3VwJ10oKSB8fCBldi5zaW11bGF0ZSkvL2V2LCBjYXB0dXJlTGlzdGVuZXJzXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdC5fc2Nyb2xsUG9zID0gbnVsbDtcclxuICAgICAgICBpZiAodC5fc2xpZGVNb2RlID09IFNsaWRlVHlwZS5BREhFUklORykge1xyXG4gICAgICAgICAgICBpZiAodC5hZGhlcmluZylcclxuICAgICAgICAgICAgICAgIHQuX2FkaGVyaW5nQmFycmllciA9IHRydWU7XHJcbiAgICAgICAgICAgIHQuYWRoZXJlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0Ll9zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLlBBR0UpIHtcclxuICAgICAgICAgICAgaWYgKHQuX2JlZ2FuUG9zICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHQuX3BhZ2VBZGhlcmUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHQuYWRoZXJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc2Nyb2xsSXRlbSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICAvL+W9k+WwuuWvuOaUueWPmFxyXG4gICAgX29uU2l6ZUNoYW5nZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tJbml0ZWQoZmFsc2UpKVxyXG4gICAgICAgICAgICB0aGlzLl9vblNjcm9sbGluZygpO1xyXG4gICAgfVxyXG4gICAgLy/lvZNJdGVt6Ieq6YCC5bqUXHJcbiAgICBfb25JdGVtQWRhcHRpdmUoaXRlbSkge1xyXG4gICAgICAgIC8vIGlmICh0aGlzLmNoZWNrSW5pdGVkKGZhbHNlKSkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgKCF0aGlzLl9zaXplVHlwZSAmJiBpdGVtLndpZHRoICE9IHRoaXMuX2l0ZW1TaXplLndpZHRoKVxyXG4gICAgICAgICAgICB8fCAodGhpcy5fc2l6ZVR5cGUgJiYgaXRlbS5oZWlnaHQgIT0gdGhpcy5faXRlbVNpemUuaGVpZ2h0KVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2N1c3RvbVNpemUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXN0b21TaXplID0ge307XHJcbiAgICAgICAgICAgIGxldCB2YWwgPSB0aGlzLl9zaXplVHlwZSA/IGl0ZW0uaGVpZ2h0IDogaXRlbS53aWR0aDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2N1c3RvbVNpemVbaXRlbS5fbGlzdElkXSAhPSB2YWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N1c3RvbVNpemVbaXRlbS5fbGlzdElkXSA9IHZhbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2l6ZUNvbnRlbnQoKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY29udGVudC5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZDogY2MuTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuX3VwZGF0ZUl0ZW1Qb3MoY2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUFsbCgpO1xyXG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5b2T5YmN5q2j5Zyo6L+Q6KGMIHNjcm9sbFRv77yM6IKv5a6a5Lya5LiN5YeG56Gu77yM5Zyo6L+Z6YeM5YGa5L+u5q2jXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVG9MaXN0SWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFBvcyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuX3Njcm9sbFRvU28pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG8odGhpcy5fc2Nyb2xsVG9MaXN0SWQsIE1hdGgubWF4KDAsIHRoaXMuX3Njcm9sbFRvRW5kVGltZSAtICgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC8gMTAwMCkpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICAvL1BBR0XnspjpmYRcclxuICAgIF9wYWdlQWRoZXJlKCkge1xyXG4gICAgICAgIGxldCB0ID0gdGhpcztcclxuICAgICAgICBpZiAoIXQuY3ljbGljICYmICh0LmVsYXN0aWNUb3AgPiAwIHx8IHQuZWxhc3RpY1JpZ2h0ID4gMCB8fCB0LmVsYXN0aWNCb3R0b20gPiAwIHx8IHQuZWxhc3RpY0xlZnQgPiAwKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGxldCBjdXJQb3MgPSB0Ll9zaXplVHlwZSA/IHQudmlld1RvcCA6IHQudmlld0xlZnQ7XHJcbiAgICAgICAgbGV0IGRpcyA9ICh0Ll9zaXplVHlwZSA/IHQubm9kZS5oZWlnaHQgOiB0Lm5vZGUud2lkdGgpICogdC5wYWdlRGlzdGFuY2U7XHJcbiAgICAgICAgbGV0IGNhblNraXAgPSBNYXRoLmFicyh0Ll9iZWdhblBvcyAtIGN1clBvcykgPiBkaXM7XHJcbiAgICAgICAgaWYgKGNhblNraXApIHtcclxuICAgICAgICAgICAgbGV0IHRpbWVJblNlY29uZCA9IC41O1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHQuX2FsaWduQ2FsY1R5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTovL+WNleihjEhPUklaT05UQUzvvIhMRUZUX1RPX1JJR0hU77yJ44CB572R5qC8VkVSVElDQUzvvIhMRUZUX1RPX1JJR0hU77yJXHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6Ly/ljZXliJdWRVJUSUNBTO+8iEJPVFRPTV9UT19UT1DvvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIQk9UVE9NX1RPX1RPUO+8iVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0Ll9iZWdhblBvcyA+IGN1clBvcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0LnByZVBhZ2UodGltZUluU2Vjb25kKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKCdfcGFnZUFkaGVyZSAgIFBQUFBQUFBQUFBQUFBQUCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQubmV4dFBhZ2UodGltZUluU2Vjb25kKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKCdfcGFnZUFkaGVyZSAgIE5OTk5OTk5OTk5OTk5OTicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMjovL+WNleihjEhPUklaT05UQUzvvIhSSUdIVF9UT19MRUZU77yJ44CB572R5qC8VkVSVElDQUzvvIhSSUdIVF9UT19MRUZU77yJXHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6Ly/ljZXliJdWRVJUSUNBTO+8iFRPUF9UT19CT1RUT03vvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIVE9QX1RPX0JPVFRPTe+8iVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0Ll9iZWdhblBvcyA8IGN1clBvcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0LnByZVBhZ2UodGltZUluU2Vjb25kKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Lm5leHRQYWdlKHRpbWVJblNlY29uZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0LmVsYXN0aWNUb3AgPD0gMCAmJiB0LmVsYXN0aWNSaWdodCA8PSAwICYmIHQuZWxhc3RpY0JvdHRvbSA8PSAwICYmIHQuZWxhc3RpY0xlZnQgPD0gMCkge1xyXG4gICAgICAgICAgICB0LmFkaGVyZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0Ll9iZWdhblBvcyA9IG51bGw7XHJcbiAgICB9XHJcbiAgICAvL+eymOmZhFxyXG4gICAgYWRoZXJlKCkge1xyXG4gICAgICAgIGxldCB0OiBhbnkgPSB0aGlzO1xyXG4gICAgICAgIGlmICghdC5jaGVja0luaXRlZCgpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKHQuZWxhc3RpY1RvcCA+IDAgfHwgdC5lbGFzdGljUmlnaHQgPiAwIHx8IHQuZWxhc3RpY0JvdHRvbSA+IDAgfHwgdC5lbGFzdGljTGVmdCA+IDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0LmFkaGVyaW5nID0gdHJ1ZTtcclxuICAgICAgICB0Ll9jYWxjTmVhcmVzdEl0ZW0oKTtcclxuICAgICAgICBsZXQgb2Zmc2V0OiBudW1iZXIgPSAodC5fc2l6ZVR5cGUgPyB0Ll90b3BHYXAgOiB0Ll9sZWZ0R2FwKSAvICh0Ll9zaXplVHlwZSA/IHQubm9kZS5oZWlnaHQgOiB0Lm5vZGUud2lkdGgpO1xyXG4gICAgICAgIGxldCB0aW1lSW5TZWNvbmQ6IG51bWJlciA9IC43O1xyXG4gICAgICAgIHQuc2Nyb2xsVG8odC5uZWFyZXN0TGlzdElkLCB0aW1lSW5TZWNvbmQsIG9mZnNldCk7XHJcbiAgICB9XHJcbiAgICAvL1VwZGF0ZS4uXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtIDw9IDAgfHwgdGhpcy5fdXBkYXRlRG9uZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIGNjLmxvZyh0aGlzLmRpc3BsYXlEYXRhLmxlbmd0aCwgdGhpcy5fdXBkYXRlQ291bnRlciwgdGhpcy5kaXNwbGF5RGF0YVt0aGlzLl91cGRhdGVDb3VudGVyXSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3ZpcnR1YWwpIHtcclxuICAgICAgICAgICAgbGV0IGxlbjogbnVtYmVyID0gKHRoaXMuX3VwZGF0ZUNvdW50ZXIgKyB0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bSkgPiB0aGlzLmRpc3BsYXlJdGVtTnVtID8gdGhpcy5kaXNwbGF5SXRlbU51bSA6ICh0aGlzLl91cGRhdGVDb3VudGVyICsgdGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0pO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBuOiBudW1iZXIgPSB0aGlzLl91cGRhdGVDb3VudGVyOyBuIDwgbGVuOyBuKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhOiBhbnkgPSB0aGlzLmRpc3BsYXlEYXRhW25dO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVPclVwZGF0ZUl0ZW0oZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl91cGRhdGVDb3VudGVyID49IHRoaXMuZGlzcGxheUl0ZW1OdW0gLSAxKSB7IC8v5pyA5ZCO5LiA5LiqXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZG9uZUFmdGVyVXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ291bnRlciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmICghdGhpcy5fc2Nyb2xsVmlldy5pc1Njcm9sbGluZygpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RvbmVBZnRlclVwZGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kZWxSZWR1bmRhbnRJdGVtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZm9yY2VVcGRhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWxjTmVhcmVzdEl0ZW0oKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLlBBR0UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VyUGFnZU51bSA9IHRoaXMubmVhcmVzdExpc3RJZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvdW50ZXIgKz0gdGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdXBkYXRlQ291bnRlciA8IHRoaXMuX251bUl0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGVuOiBudW1iZXIgPSAodGhpcy5fdXBkYXRlQ291bnRlciArIHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtKSA+IHRoaXMuX251bUl0ZW1zID8gdGhpcy5fbnVtSXRlbXMgOiAodGhpcy5fdXBkYXRlQ291bnRlciArIHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IG46IG51bWJlciA9IHRoaXMuX3VwZGF0ZUNvdW50ZXI7IG4gPCBsZW47IG4rKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZU9yVXBkYXRlSXRlbTIobik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVDb3VudGVyICs9IHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWxjTmVhcmVzdEl0ZW0oKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlTW9kZSA9PSBTbGlkZVR5cGUuUEFHRSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1clBhZ2VOdW0gPSB0aGlzLm5lYXJlc3RMaXN0SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuaIluabtOaWsEl0ZW3vvIjomZrmi5/liJfooajnlKjvvIlcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIOaVsOaNrlxyXG4gICAgICovXHJcbiAgICBfY3JlYXRlT3JVcGRhdGVJdGVtKGRhdGE6IGFueSkge1xyXG4gICAgICAgIGxldCBpdGVtOiBhbnkgPSB0aGlzLmdldEl0ZW1CeUxpc3RJZChkYXRhLmlkKTtcclxuICAgICAgICBpZiAoIWl0ZW0pIHsgLy/lpoLmnpzkuI3lrZjlnKhcclxuICAgICAgICAgICAgbGV0IGNhbkdldDogYm9vbGVhbiA9IHRoaXMuX3Bvb2wuc2l6ZSgpID4gMDtcclxuICAgICAgICAgICAgaWYgKGNhbkdldCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMuX3Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coJ+S7juaxoOS4reWPluWHujo6ICAg5penaWQgPScsIGl0ZW1bJ19saXN0SWQnXSwgJ++8jOaWsGlkID0nLCBkYXRhLmlkLCBpdGVtKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLl9pdGVtVG1wKTtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZygn5paw5bu6OjonLCBkYXRhLmlkLCBpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWNhbkdldCB8fCAhY2MuaXNWYWxpZChpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuX2l0ZW1UbXApO1xyXG4gICAgICAgICAgICAgICAgY2FuR2V0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGl0ZW0uX2xpc3RJZCAhPSBkYXRhLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLl9saXN0SWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5zZXRDb250ZW50U2l6ZSh0aGlzLl9pdGVtU2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlbS5zZXRQb3NpdGlvbihjYy52MihkYXRhLngsIGRhdGEueSkpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNldEl0ZW1TaXplKGl0ZW0pO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgIGlmIChjYW5HZXQgJiYgdGhpcy5fbmVlZFVwZGF0ZVdpZGdldCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHdpZGdldDogY2MuV2lkZ2V0ID0gaXRlbS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICAgICAgICAgIGlmICh3aWRnZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LnVwZGF0ZUFsaWdubWVudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0U2libGluZ0luZGV4KHRoaXMuY29udGVudC5jaGlsZHJlbkNvdW50IC0gMSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbGlzdEl0ZW06IExpc3RJdGVtID0gaXRlbS5nZXRDb21wb25lbnQoTGlzdEl0ZW0pO1xyXG4gICAgICAgICAgICBpdGVtWydsaXN0SXRlbSddID0gbGlzdEl0ZW07XHJcbiAgICAgICAgICAgIGlmIChsaXN0SXRlbSkge1xyXG4gICAgICAgICAgICAgICAgbGlzdEl0ZW0ubGlzdElkID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgIGxpc3RJdGVtLmxpc3QgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgbGlzdEl0ZW0uX3JlZ2lzdGVyRXZlbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5yZW5kZXJFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFt0aGlzLnJlbmRlckV2ZW50XSwgaXRlbSwgZGF0YS5pZCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fZm9yY2VVcGRhdGUgJiYgdGhpcy5yZW5kZXJFdmVudCkgeyAvL+W8uuWItuabtOaWsFxyXG4gICAgICAgICAgICBpdGVtLnNldFBvc2l0aW9uKGNjLnYyKGRhdGEueCwgZGF0YS55KSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc2V0SXRlbVNpemUoaXRlbSk7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZygnQUREOjonLCBkYXRhLmlkLCBpdGVtKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhbdGhpcy5yZW5kZXJFdmVudF0sIGl0ZW0sIGRhdGEuaWQgJSB0aGlzLl9hY3R1YWxOdW1JdGVtcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcmVzZXRJdGVtU2l6ZShpdGVtKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdXBkYXRlTGlzdEl0ZW0oaXRlbVsnbGlzdEl0ZW0nXSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xhc3REaXNwbGF5RGF0YS5pbmRleE9mKGRhdGEuaWQpIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sYXN0RGlzcGxheURhdGEucHVzaChkYXRhLmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+WIm+W7uuaIluabtOaWsEl0ZW3vvIjpnZ7omZrmi5/liJfooajnlKjvvIlcclxuICAgIF9jcmVhdGVPclVwZGF0ZUl0ZW0yKGxpc3RJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGl0ZW06IGFueSA9IHRoaXMuY29udGVudC5jaGlsZHJlbltsaXN0SWRdO1xyXG4gICAgICAgIGxldCBsaXN0SXRlbTogTGlzdEl0ZW07XHJcbiAgICAgICAgaWYgKCFpdGVtKSB7IC8v5aaC5p6c5LiN5a2Y5ZyoXHJcbiAgICAgICAgICAgIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLl9pdGVtVG1wKTtcclxuICAgICAgICAgICAgaXRlbS5fbGlzdElkID0gbGlzdElkO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgIGxpc3RJdGVtID0gaXRlbS5nZXRDb21wb25lbnQoTGlzdEl0ZW0pO1xyXG4gICAgICAgICAgICBpdGVtWydsaXN0SXRlbSddID0gbGlzdEl0ZW07XHJcbiAgICAgICAgICAgIGlmIChsaXN0SXRlbSkge1xyXG4gICAgICAgICAgICAgICAgbGlzdEl0ZW0ubGlzdElkID0gbGlzdElkO1xyXG4gICAgICAgICAgICAgICAgbGlzdEl0ZW0ubGlzdCA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBsaXN0SXRlbS5fcmVnaXN0ZXJFdmVudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlckV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoW3RoaXMucmVuZGVyRXZlbnRdLCBpdGVtLCBsaXN0SWQgJSB0aGlzLl9hY3R1YWxOdW1JdGVtcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2ZvcmNlVXBkYXRlICYmIHRoaXMucmVuZGVyRXZlbnQpIHsgLy/lvLrliLbmm7TmlrBcclxuICAgICAgICAgICAgaXRlbS5fbGlzdElkID0gbGlzdElkO1xyXG4gICAgICAgICAgICBpZiAobGlzdEl0ZW0pXHJcbiAgICAgICAgICAgICAgICBsaXN0SXRlbS5saXN0SWQgPSBsaXN0SWQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlckV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoW3RoaXMucmVuZGVyRXZlbnRdLCBpdGVtLCBsaXN0SWQgJSB0aGlzLl9hY3R1YWxOdW1JdGVtcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlTGlzdEl0ZW0obGlzdEl0ZW0pO1xyXG4gICAgICAgIGlmICh0aGlzLl9sYXN0RGlzcGxheURhdGEuaW5kZXhPZihsaXN0SWQpIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sYXN0RGlzcGxheURhdGEucHVzaChsaXN0SWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfdXBkYXRlTGlzdEl0ZW0obGlzdEl0ZW06IExpc3RJdGVtKSB7XHJcbiAgICAgICAgaWYgKCFsaXN0SXRlbSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkTW9kZSA+IFNlbGVjdGVkVHlwZS5OT05FKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtOiBhbnkgPSBsaXN0SXRlbS5ub2RlO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0ZWRNb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFNlbGVjdGVkVHlwZS5TSU5HTEU6XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW0uc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkSWQgPT0gaXRlbS5fbGlzdElkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBTZWxlY3RlZFR5cGUuTVVMVDpcclxuICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbS5zZWxlY3RlZCA9IHRoaXMubXVsdFNlbGVjdGVkLmluZGV4T2YoaXRlbS5fbGlzdElkKSA+PSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/ku4XomZrmi5/liJfooajnlKhcclxuICAgIF9yZXNldEl0ZW1TaXplKGl0ZW06IGFueSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgICBsZXQgc2l6ZTogbnVtYmVyO1xyXG4gICAgICAgIGlmICh0aGlzLl9jdXN0b21TaXplICYmIHRoaXMuX2N1c3RvbVNpemVbaXRlbS5fbGlzdElkXSkge1xyXG4gICAgICAgICAgICBzaXplID0gdGhpcy5fY3VzdG9tU2l6ZVtpdGVtLl9saXN0SWRdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb2xMaW5lTnVtID4gMSlcclxuICAgICAgICAgICAgICAgIGl0ZW0uc2V0Q29udGVudFNpemUodGhpcy5faXRlbVNpemUpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzaXplID0gdGhpcy5fc2l6ZVR5cGUgPyB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgOiB0aGlzLl9pdGVtU2l6ZS53aWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNpemUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NpemVUeXBlKVxyXG4gICAgICAgICAgICAgICAgaXRlbS5oZWlnaHQgPSBzaXplO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBpdGVtLndpZHRoID0gc2l6ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsEl0ZW3kvY3nva5cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfHxOb2RlfSBsaXN0SWRPckl0ZW1cclxuICAgICAqL1xyXG4gICAgX3VwZGF0ZUl0ZW1Qb3MobGlzdElkT3JJdGVtOiBhbnkpIHtcclxuICAgICAgICBsZXQgaXRlbTogYW55ID0gaXNOYU4obGlzdElkT3JJdGVtKSA/IGxpc3RJZE9ySXRlbSA6IHRoaXMuZ2V0SXRlbUJ5TGlzdElkKGxpc3RJZE9ySXRlbSk7XHJcbiAgICAgICAgbGV0IHBvczogYW55ID0gdGhpcy5nZXRJdGVtUG9zKGl0ZW0uX2xpc3RJZCk7XHJcbiAgICAgICAgaXRlbS5zZXRQb3NpdGlvbihwb3MueCwgcG9zLnkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7lpJrpgIlcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyZ3Mg5Y+v5Lul5piv5Y2V5LiqbGlzdElk77yM5Lmf5Y+v5piv5LiqbGlzdElk5pWw57uEXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGJvb2wg5YC877yM5aaC5p6c5Li6bnVsbOeahOivne+8jOWImeebtOaOpeeUqGFyZ3Popobnm5ZcclxuICAgICAqL1xyXG4gICAgc2V0TXVsdFNlbGVjdGVkKGFyZ3M6IGFueSwgYm9vbDogYm9vbGVhbikge1xyXG4gICAgICAgIGxldCB0OiBhbnkgPSB0aGlzO1xyXG4gICAgICAgIGlmICghdC5jaGVja0luaXRlZCgpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFyZ3MpKSB7XHJcbiAgICAgICAgICAgIGFyZ3MgPSBbYXJnc107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChib29sID09IG51bGwpIHtcclxuICAgICAgICAgICAgdC5tdWx0U2VsZWN0ZWQgPSBhcmdzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBsaXN0SWQ6IG51bWJlciwgc3ViOiBudW1iZXI7XHJcbiAgICAgICAgICAgIGlmIChib29sKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBuOiBudW1iZXIgPSBhcmdzLmxlbmd0aCAtIDE7IG4gPj0gMDsgbi0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdElkID0gYXJnc1tuXTtcclxuICAgICAgICAgICAgICAgICAgICBzdWIgPSB0Lm11bHRTZWxlY3RlZC5pbmRleE9mKGxpc3RJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1YiA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5tdWx0U2VsZWN0ZWQucHVzaChsaXN0SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IG46IG51bWJlciA9IGFyZ3MubGVuZ3RoIC0gMTsgbiA+PSAwOyBuLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0SWQgPSBhcmdzW25dO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YiA9IHQubXVsdFNlbGVjdGVkLmluZGV4T2YobGlzdElkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3ViID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5tdWx0U2VsZWN0ZWQuc3BsaWNlKHN1YiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHQuX2ZvcmNlVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB0Ll9vblNjcm9sbGluZygpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blpJrpgInmlbDmja5cclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIGdldE11bHRTZWxlY3RlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tdWx0U2VsZWN0ZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWkmumAieaYr+WQpuaciemAieaLqVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxpc3RJZCDntKLlvJVcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIGhhc011bHRTZWxlY3RlZChsaXN0SWQ6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm11bHRTZWxlY3RlZCAmJiB0aGlzLm11bHRTZWxlY3RlZC5pbmRleE9mKGxpc3RJZCkgPj0gMDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5pu05paw5oyH5a6a55qESXRlbVxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJncyDljZXkuKpsaXN0SWTvvIzmiJbogIXmlbDnu4RcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZUl0ZW0oYXJnczogYW55KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrSW5pdGVkKCkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJncykpIHtcclxuICAgICAgICAgICAgYXJncyA9IFthcmdzXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgbjogbnVtYmVyID0gMCwgbGVuOiBudW1iZXIgPSBhcmdzLmxlbmd0aDsgbiA8IGxlbjsgbisrKSB7XHJcbiAgICAgICAgICAgIGxldCBsaXN0SWQ6IG51bWJlciA9IGFyZ3Nbbl07XHJcbiAgICAgICAgICAgIGxldCBpdGVtOiBhbnkgPSB0aGlzLmdldEl0ZW1CeUxpc3RJZChsaXN0SWQpO1xyXG4gICAgICAgICAgICBpZiAoaXRlbSlcclxuICAgICAgICAgICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhbdGhpcy5yZW5kZXJFdmVudF0sIGl0ZW0sIGxpc3RJZCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOWFqOmDqFxyXG4gICAgICovXHJcbiAgICB1cGRhdGVBbGwoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrSW5pdGVkKCkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLm51bUl0ZW1zID0gdGhpcy5udW1JdGVtcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5qC55o2uTGlzdElE6I635Y+WSXRlbVxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGxpc3RJZFxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgZ2V0SXRlbUJ5TGlzdElkKGxpc3RJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udGVudCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBuOiBudW1iZXIgPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW5Db3VudCAtIDE7IG4gPj0gMDsgbi0tKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbTogYW55ID0gdGhpcy5jb250ZW50LmNoaWxkcmVuW25dO1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uX2xpc3RJZCA9PSBsaXN0SWQpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWcqOaYvuekuuWMuuWfn+WklueahEl0ZW1cclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIF9nZXRPdXRzaWRlSXRlbSgpIHtcclxuICAgICAgICBsZXQgaXRlbTogYW55O1xyXG4gICAgICAgIGxldCByZXN1bHQ6IGFueVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgbjogbnVtYmVyID0gdGhpcy5jb250ZW50LmNoaWxkcmVuQ291bnQgLSAxOyBuID49IDA7IG4tLSkge1xyXG4gICAgICAgICAgICBpdGVtID0gdGhpcy5jb250ZW50LmNoaWxkcmVuW25dO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGlzcGxheURhdGEuZmluZChkID0+IGQuaWQgPT0gaXRlbS5fbGlzdElkKSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIC8v5Yig6Zmk5pi+56S65Yy65Z+f5Lul5aSW55qESXRlbVxyXG4gICAgX2RlbFJlZHVuZGFudEl0ZW0oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3ZpcnR1YWwpIHtcclxuICAgICAgICAgICAgbGV0IGFycjogYW55W10gPSB0aGlzLl9nZXRPdXRzaWRlSXRlbSgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBuOiBudW1iZXIgPSBhcnIubGVuZ3RoIC0gMTsgbiA+PSAwOyBuLS0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtOiBhbnkgPSBhcnJbbl07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2Nyb2xsSXRlbSAmJiBpdGVtLl9saXN0SWQgPT0gdGhpcy5fc2Nyb2xsSXRlbS5fbGlzdElkKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5pc0NhY2hlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wb29sLnB1dChpdGVtKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IG06IG51bWJlciA9IHRoaXMuX2xhc3REaXNwbGF5RGF0YS5sZW5ndGggLSAxOyBtID49IDA7IG0tLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9sYXN0RGlzcGxheURhdGFbbV0gPT0gaXRlbS5fbGlzdElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xhc3REaXNwbGF5RGF0YS5zcGxpY2UobSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjYy5sb2coJ+WtmOWFpTo6Jywgc3RyLCAnICAgIHBvb2wubGVuZ3RoID0nLCB0aGlzLl9wb29sLmxlbmd0aCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuY29udGVudC5jaGlsZHJlbkNvdW50ID4gdGhpcy5fbnVtSXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RlbFNpbmdsZUl0ZW0odGhpcy5jb250ZW50LmNoaWxkcmVuW3RoaXMuY29udGVudC5jaGlsZHJlbkNvdW50IC0gMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/liKDpmaTljZXkuKpJdGVtXHJcbiAgICBfZGVsU2luZ2xlSXRlbShpdGVtOiBhbnkpIHtcclxuICAgICAgICAvLyBjYy5sb2coJ0RFTDo6JywgaXRlbVsnX2xpc3RJZCddLCBpdGVtKTtcclxuICAgICAgICBpdGVtLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICBpZiAoaXRlbS5kZXN0cm95KVxyXG4gICAgICAgICAgICBpdGVtLmRlc3Ryb3koKTtcclxuICAgICAgICBpdGVtID0gbnVsbDtcclxuICAgIH1cclxuICAgIC8qKiBcclxuICAgICAqIOWKqOaViOWIoOmZpEl0ZW3vvIjmraTmlrnms5Xlj6rpgILnlKjkuo7omZrmi5/liJfooajvvIzljbNfdmlydHVhbD10cnVl77yJXHJcbiAgICAgKiDkuIDlrpropoHlnKjlm57osIPlh73mlbDph4zph43mlrDorr7nva7mlrDnmoRudW1JdGVtc+i/m+ihjOWIt+aWsO+8jOavleern+acrExpc3TmmK/pnaDmlbDmja7pqbHliqjnmoTjgIJcclxuICAgICAqL1xyXG4gICAgYW5pRGVsSXRlbShsaXN0SWQ6IG51bWJlciwgY2FsbEZ1bmM6IEZ1bmN0aW9uLCBhbmlUeXBlOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKCF0LmNoZWNrSW5pdGVkKCkgfHwgdC5jeWNsaWMgfHwgIXQuX3ZpcnR1YWwpXHJcbiAgICAgICAgICAgIHJldHVybiBjYy5lcnJvcignVGhpcyBmdW5jdGlvbiBpcyBub3QgYWxsb3dlZCB0byBiZSBjYWxsZWQhJyk7XHJcblxyXG4gICAgICAgIGlmICghY2FsbEZ1bmMpXHJcbiAgICAgICAgICAgIHJldHVybiBjYy5lcnJvcignQ2FsbEZ1bmMgYXJlIG5vdCBhbGxvd2VkIHRvIGJlIE5VTEwsIFlvdSBuZWVkIHRvIGRlbGV0ZSB0aGUgY29ycmVzcG9uZGluZyBpbmRleCBpbiB0aGUgZGF0YSBhcnJheSBpbiB0aGUgQ2FsbEZ1bmMhJyk7XHJcblxyXG4gICAgICAgIGlmICh0Ll9hbmlEZWxSdW5pbmcpXHJcbiAgICAgICAgICAgIHJldHVybiBjYy53YXJuKCdQbGVhc2Ugd2FpdCBmb3IgdGhlIGN1cnJlbnQgZGVsZXRpb24gdG8gZmluaXNoIScpO1xyXG5cclxuICAgICAgICBsZXQgaXRlbTogYW55ID0gdC5nZXRJdGVtQnlMaXN0SWQobGlzdElkKTtcclxuICAgICAgICBsZXQgbGlzdEl0ZW06IExpc3RJdGVtO1xyXG4gICAgICAgIGlmICghaXRlbSkge1xyXG4gICAgICAgICAgICBjYWxsRnVuYyhsaXN0SWQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGlzdEl0ZW0gPSBpdGVtLmdldENvbXBvbmVudChMaXN0SXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHQuX2FuaURlbFJ1bmluZyA9IHRydWU7XHJcbiAgICAgICAgdC5fYW5pRGVsQ0IgPSBjYWxsRnVuYztcclxuICAgICAgICB0Ll9hbmlEZWxJdGVtID0gaXRlbTtcclxuICAgICAgICB0Ll9hbmlEZWxCZWZvcmVQb3MgPSBpdGVtLnBvc2l0aW9uO1xyXG4gICAgICAgIHQuX2FuaURlbEJlZm9yZVNjYWxlID0gaXRlbS5zY2FsZTtcclxuICAgICAgICBsZXQgY3VyTGFzdElkOiBudW1iZXIgPSB0LmRpc3BsYXlEYXRhW3QuZGlzcGxheURhdGEubGVuZ3RoIC0gMV0uaWQ7XHJcbiAgICAgICAgbGV0IHJlc2V0U2VsZWN0ZWRJZDogYm9vbGVhbiA9IGxpc3RJdGVtLnNlbGVjdGVkO1xyXG4gICAgICAgIGxpc3RJdGVtLnNob3dBbmkoYW5pVHlwZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL+WIpOaWreacieayoeacieS4i+S4gOS4qu+8jOWmguaenOacieeahOivne+8jOWIm+W7uueyl+adpVxyXG4gICAgICAgICAgICBsZXQgbmV3SWQ6IG51bWJlcjtcclxuICAgICAgICAgICAgaWYgKGN1ckxhc3RJZCA8IHQuX251bUl0ZW1zIC0gMikge1xyXG4gICAgICAgICAgICAgICAgbmV3SWQgPSBjdXJMYXN0SWQgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChuZXdJZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3RGF0YTogYW55ID0gdC5fY2FsY0l0ZW1Qb3MobmV3SWQpO1xyXG4gICAgICAgICAgICAgICAgdC5kaXNwbGF5RGF0YS5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHQuX3ZpcnR1YWwpXHJcbiAgICAgICAgICAgICAgICAgICAgdC5fY3JlYXRlT3JVcGRhdGVJdGVtKG5ld0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHQuX2NyZWF0ZU9yVXBkYXRlSXRlbTIobmV3SWQpO1xyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgICAgIHQuX251bUl0ZW1zLS07XHJcbiAgICAgICAgICAgIGlmICh0LnNlbGVjdGVkTW9kZSA9PSBTZWxlY3RlZFR5cGUuU0lOR0xFKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzZXRTZWxlY3RlZElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5fc2VsZWN0ZWRJZCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0Ll9zZWxlY3RlZElkIC0gMSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5fc2VsZWN0ZWRJZC0tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHQuc2VsZWN0ZWRNb2RlID09IFNlbGVjdGVkVHlwZS5NVUxUICYmIHQubXVsdFNlbGVjdGVkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN1YjogbnVtYmVyID0gdC5tdWx0U2VsZWN0ZWQuaW5kZXhPZihsaXN0SWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN1YiA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5tdWx0U2VsZWN0ZWQuc3BsaWNlKHN1YiwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL+WkmumAieeahOaVsOaNru+8jOWcqOWFtuWQjueahOWFqOmDqOWHj+S4gFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbjogbnVtYmVyID0gdC5tdWx0U2VsZWN0ZWQubGVuZ3RoIC0gMTsgbiA+PSAwOyBuLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaWQ6IG51bWJlciA9IHQubXVsdFNlbGVjdGVkW25dO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZCA+PSBsaXN0SWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQubXVsdFNlbGVjdGVkW25dLS07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHQuX2N1c3RvbVNpemUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0Ll9jdXN0b21TaXplW2xpc3RJZF0pXHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHQuX2N1c3RvbVNpemVbbGlzdElkXTtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdDdXN0b21TaXplOiBhbnkgPSB7fTtcclxuICAgICAgICAgICAgICAgIGxldCBzaXplOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpZCBpbiB0Ll9jdXN0b21TaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZSA9IHQuX2N1c3RvbVNpemVbaWRdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpZE51bWJlcjogbnVtYmVyID0gcGFyc2VJbnQoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0N1c3RvbVNpemVbaWROdW1iZXIgLSAoaWROdW1iZXIgPj0gbGlzdElkID8gMSA6IDApXSA9IHNpemU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0Ll9jdXN0b21TaXplID0gbmV3Q3VzdG9tU2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+WQjumdoueahEl0ZW3lkJHliY3mgLznmoTliqjmlYhcclxuICAgICAgICAgICAgbGV0IHNlYzogbnVtYmVyID0gLjIzMzM7XHJcbiAgICAgICAgICAgIGxldCB0d2VlbjogY2MuVHdlZW4sIGhhdmVDQjogYm9vbGVhbjtcclxuICAgICAgICAgICAgZm9yIChsZXQgbjogbnVtYmVyID0gbmV3SWQgIT0gbnVsbCA/IG5ld0lkIDogY3VyTGFzdElkOyBuID49IGxpc3RJZCArIDE7IG4tLSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IHQuZ2V0SXRlbUJ5TGlzdElkKG4pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zRGF0YTogYW55ID0gdC5fY2FsY0l0ZW1Qb3MobiAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHR3ZWVuID0gY2MudHdlZW4oaXRlbSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKHNlYywgeyBwb3NpdGlvbjogY2MudjIocG9zRGF0YS54LCBwb3NEYXRhLnkpIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuIDw9IGxpc3RJZCArIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZUNCID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHdlZW4uY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ll9hbmlEZWxSdW5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxGdW5jKGxpc3RJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdC5fYW5pRGVsQ0I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0d2Vlbi5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaGF2ZUNCKSB7XHJcbiAgICAgICAgICAgICAgICB0Ll9hbmlEZWxSdW5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNhbGxGdW5jKGxpc3RJZCk7XHJcbiAgICAgICAgICAgICAgICB0Ll9hbmlEZWxDQiA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB0cnVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5rua5Yqo5YiwLi5cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBsaXN0SWQg57Si5byV77yI5aaC5p6cPDDvvIzliJnmu5rliLDpppbkuKpJdGVt5L2N572u77yM5aaC5p6cPj1fbnVtSXRlbXPvvIzliJnmu5rliLDmnIDmnKtJdGVt5L2N572u77yJXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdGltZUluU2Vjb25kIOaXtumXtFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9mZnNldCDntKLlvJXnm67moIfkvY3nva7lgY/np7vvvIwwLTFcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb3ZlclN0cmVzcyDmu5rliqjlkI7mmK/lkKblvLrosIPor6VJdGVt77yI6L+Z5Y+q5piv5Liq5a6e6aqM5Yqf6IO977yJXHJcbiAgICAgKi9cclxuICAgIHNjcm9sbFRvKGxpc3RJZDogbnVtYmVyLCB0aW1lSW5TZWNvbmQ6IG51bWJlciA9IC41LCBvZmZzZXQ6IG51bWJlciA9IG51bGwsIG92ZXJTdHJlc3M6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGxldCB0ID0gdGhpcztcclxuICAgICAgICBpZiAoIXQuY2hlY2tJbml0ZWQoZmFsc2UpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gdC5fc2Nyb2xsVmlldy5zdG9wQXV0b1Njcm9sbCgpO1xyXG4gICAgICAgIGlmICh0aW1lSW5TZWNvbmQgPT0gbnVsbCkgICAvL+m7mOiupDAuNVxyXG4gICAgICAgICAgICB0aW1lSW5TZWNvbmQgPSAuNTtcclxuICAgICAgICBlbHNlIGlmICh0aW1lSW5TZWNvbmQgPCAwKVxyXG4gICAgICAgICAgICB0aW1lSW5TZWNvbmQgPSAwO1xyXG4gICAgICAgIGlmIChsaXN0SWQgPCAwKVxyXG4gICAgICAgICAgICBsaXN0SWQgPSAwO1xyXG4gICAgICAgIGVsc2UgaWYgKGxpc3RJZCA+PSB0Ll9udW1JdGVtcylcclxuICAgICAgICAgICAgbGlzdElkID0gdC5fbnVtSXRlbXMgLSAxO1xyXG4gICAgICAgIC8vIOS7pemYsuiuvue9ruS6hm51bUl0ZW1z5LmL5ZCObGF5b3V055qE5bC65a+46L+Y5pyq5pu05pawXHJcbiAgICAgICAgaWYgKCF0Ll92aXJ0dWFsICYmIHQuX2xheW91dCAmJiB0Ll9sYXlvdXQuZW5hYmxlZClcclxuICAgICAgICAgICAgdC5fbGF5b3V0LnVwZGF0ZUxheW91dCgpO1xyXG5cclxuICAgICAgICBsZXQgcG9zID0gdC5nZXRJdGVtUG9zKGxpc3RJZCk7XHJcbiAgICAgICAgaWYgKCFwb3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIENDX0RFViAmJiBjYy5lcnJvcigncG9zIGlzIG51bGwnLCBsaXN0SWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdGFyZ2V0WDogbnVtYmVyLCB0YXJnZXRZOiBudW1iZXI7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodC5fYWxpZ25DYWxjVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIDE6Ly/ljZXooYxIT1JJWk9OVEFM77yITEVGVF9UT19SSUdIVO+8ieOAgee9keagvFZFUlRJQ0FM77yITEVGVF9UT19SSUdIVO+8iVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0WCA9IHBvcy5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFggLT0gdC5ub2RlLndpZHRoICogb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFggLT0gdC5fbGVmdEdhcDtcclxuICAgICAgICAgICAgICAgIHBvcyA9IGNjLnYyKHRhcmdldFgsIDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjovL+WNleihjEhPUklaT05UQUzvvIhSSUdIVF9UT19MRUZU77yJ44CB572R5qC8VkVSVElDQUzvvIhSSUdIVF9UT19MRUZU77yJXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRYID0gcG9zLnJpZ2h0IC0gdC5ub2RlLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFggKz0gdC5ub2RlLndpZHRoICogb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFggKz0gdC5fcmlnaHRHYXA7XHJcbiAgICAgICAgICAgICAgICBwb3MgPSBjYy52Mih0YXJnZXRYICsgdC5jb250ZW50LndpZHRoLCAwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6Ly/ljZXliJdWRVJUSUNBTO+8iFRPUF9UT19CT1RUT03vvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIVE9QX1RPX0JPVFRPTe+8iVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0WSA9IHBvcy50b3A7XHJcbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0ICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WSArPSB0Lm5vZGUuaGVpZ2h0ICogb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFkgKz0gdC5fdG9wR2FwO1xyXG4gICAgICAgICAgICAgICAgcG9zID0gY2MudjIoMCwgLXRhcmdldFkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDovL+WNleWIl1ZFUlRJQ0FM77yIQk9UVE9NX1RPX1RPUO+8ieOAgee9keagvEhPUklaT05UQUzvvIhCT1RUT01fVE9fVE9Q77yJXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRZID0gcG9zLmJvdHRvbSArIHQubm9kZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0ICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WSAtPSB0Lm5vZGUuaGVpZ2h0ICogb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFkgLT0gdC5fYm90dG9tR2FwO1xyXG4gICAgICAgICAgICAgICAgcG9zID0gY2MudjIoMCwgLXRhcmdldFkgKyB0LmNvbnRlbnQuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdmlld1BvczogYW55ID0gdC5jb250ZW50LmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgdmlld1BvcyA9IE1hdGguYWJzKHQuX3NpemVUeXBlID8gdmlld1Bvcy55IDogdmlld1Bvcy54KTtcclxuXHJcbiAgICAgICAgbGV0IGNvbXBhcmVQb3MgPSB0Ll9zaXplVHlwZSA/IHBvcy55IDogcG9zLng7XHJcbiAgICAgICAgbGV0IHJ1blNjcm9sbCA9IE1hdGguYWJzKCh0Ll9zY3JvbGxQb3MgIT0gbnVsbCA/IHQuX3Njcm9sbFBvcyA6IHZpZXdQb3MpIC0gY29tcGFyZVBvcykgPiAuNTtcclxuICAgICAgICAvLyBjYy5sb2cocnVuU2Nyb2xsLCB0Ll9zY3JvbGxQb3MsIHZpZXdQb3MsIGNvbXBhcmVQb3MpXHJcblxyXG4gICAgICAgIC8vIHQuX3Njcm9sbFZpZXcuc3RvcEF1dG9TY3JvbGwoKTtcclxuICAgICAgICBpZiAocnVuU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgIHQuX3Njcm9sbFZpZXcuc2Nyb2xsVG9PZmZzZXQocG9zLCB0aW1lSW5TZWNvbmQpO1xyXG4gICAgICAgICAgICB0Ll9zY3JvbGxUb0xpc3RJZCA9IGxpc3RJZDtcclxuICAgICAgICAgICAgdC5fc2Nyb2xsVG9FbmRUaW1lID0gKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLyAxMDAwKSArIHRpbWVJblNlY29uZDtcclxuICAgICAgICAgICAgLy8gY2MubG9nKGxpc3RJZCwgdC5jb250ZW50LndpZHRoLCB0LmNvbnRlbnQuZ2V0UG9zaXRpb24oKSwgcG9zKTtcclxuICAgICAgICAgICAgdC5fc2Nyb2xsVG9TbyA9IHQuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdC5fYWRoZXJpbmdCYXJyaWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5hZGhlcmluZyA9IHQuX2FkaGVyaW5nQmFycmllciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdC5fc2Nyb2xsUG9zID1cclxuICAgICAgICAgICAgICAgICAgICB0Ll9zY3JvbGxUb0xpc3RJZCA9XHJcbiAgICAgICAgICAgICAgICAgICAgdC5fc2Nyb2xsVG9FbmRUaW1lID1cclxuICAgICAgICAgICAgICAgICAgICB0Ll9zY3JvbGxUb1NvID1cclxuICAgICAgICAgICAgICAgICAgICBudWxsO1xyXG4gICAgICAgICAgICAgICAgLy9jYy5sb2coJzIyMjIyMjIyMjInLCB0Ll9hZGhlcmluZ0JhcnJpZXIpXHJcbiAgICAgICAgICAgICAgICBpZiAob3ZlclN0cmVzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHQuc2Nyb2xsVG9MaXN0SWQgPSBsaXN0SWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB0LmdldEl0ZW1CeUxpc3RJZChsaXN0SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGl0ZW0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oLjEsIHsgc2NhbGU6IDEuMDUgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50byguMSwgeyBzY2FsZTogMSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB0aW1lSW5TZWNvbmQgKyAuMSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGltZUluU2Vjb25kIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHQuX29uU2Nyb2xsaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuoeeul+W9k+WJjea7muWKqOeql+acgOi/keeahEl0ZW1cclxuICAgICAqL1xyXG4gICAgX2NhbGNOZWFyZXN0SXRlbSgpIHtcclxuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcclxuICAgICAgICB0Lm5lYXJlc3RMaXN0SWQgPSBudWxsO1xyXG4gICAgICAgIGxldCBkYXRhOiBhbnksIGNlbnRlcjogbnVtYmVyO1xyXG5cclxuICAgICAgICBpZiAodC5fdmlydHVhbClcclxuICAgICAgICAgICAgdC5fY2FsY1ZpZXdQb3MoKTtcclxuXHJcbiAgICAgICAgbGV0IHZUb3A6IG51bWJlciwgdlJpZ2h0OiBudW1iZXIsIHZCb3R0b206IG51bWJlciwgdkxlZnQ6IG51bWJlcjtcclxuICAgICAgICB2VG9wID0gdC52aWV3VG9wO1xyXG4gICAgICAgIHZSaWdodCA9IHQudmlld1JpZ2h0O1xyXG4gICAgICAgIHZCb3R0b20gPSB0LnZpZXdCb3R0b207XHJcbiAgICAgICAgdkxlZnQgPSB0LnZpZXdMZWZ0O1xyXG5cclxuICAgICAgICBsZXQgYnJlYWtGb3I6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IHQuY29udGVudC5jaGlsZHJlbkNvdW50ICYmICFicmVha0ZvcjsgbiArPSB0Ll9jb2xMaW5lTnVtKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSB0Ll92aXJ0dWFsID8gdC5kaXNwbGF5RGF0YVtuXSA6IHQuX2NhbGNFeGlzdEl0ZW1Qb3Mobik7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjZW50ZXIgPSB0Ll9zaXplVHlwZSA/ICgoZGF0YS50b3AgKyBkYXRhLmJvdHRvbSkgLyAyKSA6IChjZW50ZXIgPSAoZGF0YS5sZWZ0ICsgZGF0YS5yaWdodCkgLyAyKTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodC5fYWxpZ25DYWxjVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTovL+WNleihjEhPUklaT05UQUzvvIhMRUZUX1RPX1JJR0hU77yJ44CB572R5qC8VkVSVElDQUzvvIhMRUZUX1RPX1JJR0hU77yJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnJpZ2h0ID49IHZMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Lm5lYXJlc3RMaXN0SWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZMZWZ0ID4gY2VudGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQubmVhcmVzdExpc3RJZCArPSB0Ll9jb2xMaW5lTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtGb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjovL+WNleihjEhPUklaT05UQUzvvIhSSUdIVF9UT19MRUZU77yJ44CB572R5qC8VkVSVElDQUzvvIhSSUdIVF9UT19MRUZU77yJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlZnQgPD0gdlJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Lm5lYXJlc3RMaXN0SWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZSaWdodCA8IGNlbnRlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Lm5lYXJlc3RMaXN0SWQgKz0gdC5fY29sTGluZU51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrRm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6Ly/ljZXliJdWRVJUSUNBTO+8iFRPUF9UT19CT1RUT03vvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIVE9QX1RPX0JPVFRPTe+8iVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5ib3R0b20gPD0gdlRvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5uZWFyZXN0TGlzdElkID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2VG9wIDwgY2VudGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQubmVhcmVzdExpc3RJZCArPSB0Ll9jb2xMaW5lTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtGb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDovL+WNleWIl1ZFUlRJQ0FM77yIQk9UVE9NX1RPX1RPUO+8ieOAgee9keagvEhPUklaT05UQUzvvIhCT1RUT01fVE9fVE9Q77yJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnRvcCA+PSB2Qm90dG9tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Lm5lYXJlc3RMaXN0SWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZCb3R0b20gPiBjZW50ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5uZWFyZXN0TGlzdElkICs9IHQuX2NvbExpbmVOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha0ZvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3mnIDlkI7kuIDkuKpJdGVt44CC44CC44CC77yI5ZOO77yM6L+Z5Lqb5Yik5pat55yf5b+D5oG25b+D77yM5Yik5pat5LqG5YmN6Z2i55qE6L+Y6KaB5Yik5pat5pyA5ZCO5LiA5Liq44CC44CC44CC5LiA5byA5aeL5ZGi77yM5bCx5Y+q5pyJ5LiA5Liq5biD5bGA77yI5Y2V5YiX5biD5bGA77yJ77yM6YKj5pe25YCZ5Luj56CB5omN5LiJ55m+6KGM77yM5ZCO5p2l5bCx5oOz552A5a6M5ZaE5ZWK77yM6Im5Li7ov5nlnZHnnJ/mt7HvvIznjrDlnKjov5nooYzmlbDpg73kuIDljYPkupTkuoY9ID18fO+8iVxyXG4gICAgICAgIGRhdGEgPSB0Ll92aXJ0dWFsID8gdC5kaXNwbGF5RGF0YVt0LmRpc3BsYXlJdGVtTnVtIC0gMV0gOiB0Ll9jYWxjRXhpc3RJdGVtUG9zKHQuX251bUl0ZW1zIC0gMSk7XHJcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5pZCA9PSB0Ll9udW1JdGVtcyAtIDEpIHtcclxuICAgICAgICAgICAgY2VudGVyID0gdC5fc2l6ZVR5cGUgPyAoKGRhdGEudG9wICsgZGF0YS5ib3R0b20pIC8gMikgOiAoY2VudGVyID0gKGRhdGEubGVmdCArIGRhdGEucmlnaHQpIC8gMik7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodC5fYWxpZ25DYWxjVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iExFRlRfVE9fUklHSFTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iExFRlRfVE9fUklHSFTvvIlcclxuICAgICAgICAgICAgICAgICAgICBpZiAodlJpZ2h0ID4gY2VudGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Lm5lYXJlc3RMaXN0SWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iFJJR0hUX1RPX0xFRlTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iFJJR0hUX1RPX0xFRlTvvIlcclxuICAgICAgICAgICAgICAgICAgICBpZiAodkxlZnQgPCBjZW50ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQubmVhcmVzdExpc3RJZCA9IGRhdGEuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6Ly/ljZXliJdWRVJUSUNBTO+8iFRPUF9UT19CT1RUT03vvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIVE9QX1RPX0JPVFRPTe+8iVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2Qm90dG9tIDwgY2VudGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Lm5lYXJlc3RMaXN0SWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0Oi8v5Y2V5YiXVkVSVElDQUzvvIhCT1RUT01fVE9fVE9Q77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iEJPVFRPTV9UT19UT1DvvIlcclxuICAgICAgICAgICAgICAgICAgICBpZiAodlRvcCA+IGNlbnRlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5uZWFyZXN0TGlzdElkID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjYy5sb2coJ3QubmVhcmVzdExpc3RJZCA9JywgdC5uZWFyZXN0TGlzdElkKTtcclxuICAgIH1cclxuICAgIC8v5LiK5LiA6aG1XHJcbiAgICBwcmVQYWdlKHRpbWVJblNlY29uZDogbnVtYmVyID0gLjUpIHtcclxuICAgICAgICAvLyBjYy5sb2coJ/CfkYgnKTtcclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2tJbml0ZWQoKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc2tpcFBhZ2UodGhpcy5jdXJQYWdlTnVtIC0gMSwgdGltZUluU2Vjb25kKTtcclxuICAgIH1cclxuICAgIC8v5LiL5LiA6aG1XHJcbiAgICBuZXh0UGFnZSh0aW1lSW5TZWNvbmQ6IG51bWJlciA9IC41KSB7XHJcbiAgICAgICAgLy8gY2MubG9nKCfwn5GJJyk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrSW5pdGVkKCkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLnNraXBQYWdlKHRoaXMuY3VyUGFnZU51bSArIDEsIHRpbWVJblNlY29uZCk7XHJcbiAgICB9XHJcbiAgICAvL+i3s+i9rOWIsOesrOWHoOmhtVxyXG4gICAgc2tpcFBhZ2UocGFnZU51bTogbnVtYmVyLCB0aW1lSW5TZWNvbmQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0OiBhbnkgPSB0aGlzO1xyXG4gICAgICAgIGlmICghdC5jaGVja0luaXRlZCgpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKHQuX3NsaWRlTW9kZSAhPSBTbGlkZVR5cGUuUEFHRSlcclxuICAgICAgICAgICAgcmV0dXJuIGNjLmVycm9yKCdUaGlzIGZ1bmN0aW9uIGlzIG5vdCBhbGxvd2VkIHRvIGJlIGNhbGxlZCwgTXVzdCBTbGlkZU1vZGUgPSBQQUdFIScpO1xyXG4gICAgICAgIGlmIChwYWdlTnVtIDwgMCB8fCBwYWdlTnVtID49IHQuX251bUl0ZW1zKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKHQuY3VyUGFnZU51bSA9PSBwYWdlTnVtKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gY2MubG9nKHBhZ2VOdW0pO1xyXG4gICAgICAgIHQuY3VyUGFnZU51bSA9IHBhZ2VOdW07XHJcbiAgICAgICAgaWYgKHQucGFnZUNoYW5nZUV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhbdC5wYWdlQ2hhbmdlRXZlbnRdLCBwYWdlTnVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdC5zY3JvbGxUbyhwYWdlTnVtLCB0aW1lSW5TZWNvbmQpO1xyXG4gICAgfVxyXG4gICAgLy/orqHnrpcgQ3VzdG9tU2l6Ze+8iOi/meS4quWHveaVsOi/mOaYr+S/neeVmeWQp++8jOafkOS6m+e9leingeeahOaDheWGteeahOehrui/mOaYr+mcgOimgeaJi+WKqOiuoeeul2N1c3RvbVNpemXnmoTvvIlcclxuICAgIGNhbGNDdXN0b21TaXplKG51bUl0ZW1zOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcclxuICAgICAgICBpZiAoIXQuY2hlY2tJbml0ZWQoKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmICghdC5faXRlbVRtcClcclxuICAgICAgICAgICAgcmV0dXJuIGNjLmVycm9yKCdVbnNldCB0ZW1wbGF0ZSBpdGVtIScpO1xyXG4gICAgICAgIGlmICghdC5yZW5kZXJFdmVudClcclxuICAgICAgICAgICAgcmV0dXJuIGNjLmVycm9yKCdVbnNldCBSZW5kZXItRXZlbnQhJyk7XHJcbiAgICAgICAgdC5fY3VzdG9tU2l6ZSA9IHt9O1xyXG4gICAgICAgIGxldCB0ZW1wOiBhbnkgPSBjYy5pbnN0YW50aWF0ZSh0Ll9pdGVtVG1wKTtcclxuICAgICAgICB0LmNvbnRlbnQuYWRkQ2hpbGQodGVtcCk7XHJcbiAgICAgICAgZm9yIChsZXQgbjogbnVtYmVyID0gMDsgbiA8IG51bUl0ZW1zOyBuKyspIHtcclxuICAgICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFt0LnJlbmRlckV2ZW50XSwgdGVtcCwgbik7XHJcbiAgICAgICAgICAgIGlmICh0ZW1wLmhlaWdodCAhPSB0Ll9pdGVtU2l6ZS5oZWlnaHQgfHwgdGVtcC53aWR0aCAhPSB0Ll9pdGVtU2l6ZS53aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgdC5fY3VzdG9tU2l6ZVtuXSA9IHQuX3NpemVUeXBlID8gdGVtcC5oZWlnaHQgOiB0ZW1wLndpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghT2JqZWN0LmtleXModC5fY3VzdG9tU2l6ZSkubGVuZ3RoKVxyXG4gICAgICAgICAgICB0Ll9jdXN0b21TaXplID0gbnVsbDtcclxuICAgICAgICB0ZW1wLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICBpZiAodGVtcC5kZXN0cm95KVxyXG4gICAgICAgICAgICB0ZW1wLmRlc3Ryb3koKTtcclxuICAgICAgICByZXR1cm4gdC5fY3VzdG9tU2l6ZTtcclxuICAgIH1cclxufSJdfQ==