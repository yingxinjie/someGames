
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/bundle/00_base/script/closeScene');
require('./assets/bundle/00_base/script/common/ClickHide');
require('./assets/bundle/00_base/script/common/CloseView');
require('./assets/bundle/00_base/script/common/ComponentBase');
require('./assets/bundle/00_base/script/common/CountryCode');
require('./assets/bundle/00_base/script/common/EventManger');
require('./assets/bundle/00_base/script/common/TimeTickerDown');
require('./assets/bundle/00_base/script/common/roundRect');
require('./assets/bundle/00_base/script/list/List');
require('./assets/bundle/00_base/script/list/ListItem');
require('./assets/bundle/00_base/script/uiutils/tips');
require('./assets/bundle/00_base/script/uiutils/toggle');
require('./assets/bundle/01_hall/script/config/UserInfo');
require('./assets/bundle/01_hall/script/config/Utils');
require('./assets/bundle/01_hall/script/config/ViewManager');
require('./assets/bundle/01_hall/script/config/config');
require('./assets/bundle/01_hall/script/config/cwebsocket');
require('./assets/bundle/01_hall/script/config/i18n');
require('./assets/bundle/01_hall/script/hall');
require('./assets/bundle/01_hall/script/open');
require('./assets/bundle/01_hall/script/view/hall/create0');
require('./assets/bundle/01_hall/script/view/hall/faxian');
require('./assets/bundle/01_hall/script/view/hall/julebu');
require('./assets/bundle/01_hall/script/view/items/yiChuangJianJuLeBuItem');
require('./assets/bundle/01_hall/script/view/items/yiJiaRuJuLeBuItem');
require('./assets/bundle/01_hall/script/view/login');
require('./assets/bundle/01_hall/script/view/reg');
require('./assets/bundle/01_hall/script/view/reset');
require('./assets/bundle/01_hall/script/view/wo');
require('./assets/bundle/01_hall/script/widget/alertCreateJuLeBu');
require('./assets/bundle/01_hall/script/widget/alertInputYzm');
require('./assets/bundle/01_hall/script/widget/alertJiaRuJlb');
require('./assets/bundle/01_hall/script/widget/bottomtoggle');
require('./assets/bundle/01_hall/script/widget/chuangjianjulebu');
require('./assets/bundle/01_hall/script/widget/counttrycode');
require('./assets/bundle/01_hall/script/widget/exitAccount');
require('./assets/bundle/01_hall/script/widget/julebuliebiao');
require('./assets/bundle/01_hall/script/widget/setting');
require('./assets/bundle/02_game/script/game');
require('./assets/bundle/02_game/script/gameInfo');
require('./assets/bundle/02_game/script/light');
require('./assets/bundle/02_game/script/timedown');
require('./assets/res/i18n/Languages');
require('./assets/script/bundleLoader');
require('./assets/script/start');

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