
(function () {
var scripts = [{"deps":{"./assets/script/bundleLoader":1,"./assets/script/start":2,"./assets/res/i18n/Languages":6,"./assets/bundle/00_base/script/common/ComponentBase":43,"./assets/bundle/00_base/script/common/CountryCode":47,"./assets/bundle/00_base/script/common/EventManger":49,"./assets/bundle/00_base/script/common/TimeTickerDown":42,"./assets/bundle/00_base/script/common/roundRect":44,"./assets/bundle/00_base/script/common/ClickHide":45,"./assets/bundle/00_base/script/list/ListItem":46,"./assets/bundle/00_base/script/list/List":3,"./assets/bundle/00_base/script/uiutils/toggle":41,"./assets/bundle/00_base/script/uiutils/tips":50,"./assets/bundle/00_base/script/closeScene":7,"./assets/bundle/01_hall/script/config/D_Set":60,"./assets/bundle/01_hall/script/config/D_User":55,"./assets/bundle/01_hall/script/config/UserInfo":59,"./assets/bundle/01_hall/script/config/Utils":48,"./assets/bundle/01_hall/script/config/ViewManager":51,"./assets/bundle/01_hall/script/config/config":52,"./assets/bundle/01_hall/script/config/cwebsocket":54,"./assets/bundle/01_hall/script/config/i18n":53,"./assets/bundle/01_hall/script/config/C_User":56,"./assets/bundle/01_hall/script/hall":15,"./assets/bundle/01_hall/script/hall/C_Hall":8,"./assets/bundle/01_hall/script/tip/C_Tip":9,"./assets/bundle/01_hall/script/view/reg":19,"./assets/bundle/01_hall/script/view/reset":14,"./assets/bundle/01_hall/script/view/wo":16,"./assets/bundle/01_hall/script/view/hall/createClub":4,"./assets/bundle/01_hall/script/view/hall/faxian":13,"./assets/bundle/01_hall/script/view/hall/julebu":18,"./assets/bundle/01_hall/script/view/hall/create0":17,"./assets/bundle/01_hall/script/view/items/yiJiaRuJuLeBuItem":10,"./assets/bundle/01_hall/script/view/items/yiChuangJianJuLeBuItem":20,"./assets/bundle/01_hall/script/view/login":22,"./assets/bundle/01_hall/script/widget/alertCreateJuLeBu":21,"./assets/bundle/01_hall/script/widget/alertInputYzm":11,"./assets/bundle/01_hall/script/widget/alertJiaRuJlb":23,"./assets/bundle/01_hall/script/widget/bottomtoggle":28,"./assets/bundle/01_hall/script/widget/chuangjianjulebu":25,"./assets/bundle/01_hall/script/widget/counttrycode":24,"./assets/bundle/01_hall/script/widget/exitAccount":26,"./assets/bundle/01_hall/script/widget/julebuliebiao":30,"./assets/bundle/01_hall/script/widget/setting":33,"./assets/bundle/01_hall/script/widget/tip":32,"./assets/bundle/01_hall/script/widget/alertAddClub":31,"./assets/bundle/01_hall/script/open":27,"./assets/bundle/02_game/script/gameSetting":57,"./assets/bundle/02_game/script/head":58,"./assets/bundle/02_game/script/joinDesk":29,"./assets/bundle/02_game/script/light":34,"./assets/bundle/02_game/script/timedown":36,"./assets/bundle/02_game/script/config/deskInfo":38,"./assets/bundle/02_game/script/config/deskMgr":5,"./assets/bundle/02_game/script/config/dzUtils":61,"./assets/bundle/02_game/script/config/gameConst":35,"./assets/bundle/02_game/script/config/nodeDZpool":62,"./assets/bundle/02_game/script/config/cmdClient":39,"./assets/bundle/02_game/script/game":40,"./assets/bundle/02_game/script/gameInfo":37,"./assets/bundle/00_base/script/common/CloseView":12},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/script/bundleLoader.js"},{"deps":{"./bundleLoader":1},"path":"preview-scripts/assets/script/start.js"},{"deps":{"./ListItem":46},"path":"preview-scripts/assets/bundle/00_base/script/list/List.js"},{"deps":{"../../config/config":52,"../../config/ViewManager":51,"../../config/Utils":48,"../items/yiJiaRuJuLeBuItem":10,"../items/yiChuangJianJuLeBuItem":20,"../../../../00_base/script/common/ComponentBase":43},"path":"preview-scripts/assets/bundle/01_hall/script/view/hall/createClub.js"},{"deps":{"../head":58,"./deskInfo":38,"./dzUtils":61,"./nodeDZpool":62,"../../../01_hall/script/config/UserInfo":59},"path":"preview-scripts/assets/bundle/02_game/script/config/deskMgr.js"},{"deps":{},"path":"preview-scripts/assets/res/i18n/Languages.js"},{"deps":{"./common/ComponentBase":43},"path":"preview-scripts/assets/bundle/00_base/script/closeScene.js"},{"deps":{"../config/ViewManager":51,"../config/config":52},"path":"preview-scripts/assets/bundle/01_hall/script/hall/C_Hall.js"},{"deps":{"../config/ViewManager":51,"../config/config":52,"../widget/tip":32},"path":"preview-scripts/assets/bundle/01_hall/script/tip/C_Tip.js"},{"deps":{},"path":"preview-scripts/assets/bundle/01_hall/script/view/items/yiJiaRuJuLeBuItem.js"},{"deps":{"../../../00_base/script/common/ComponentBase":43},"path":"preview-scripts/assets/bundle/01_hall/script/widget/alertInputYzm.js"},{"deps":{},"path":"preview-scripts/assets/bundle/00_base/script/common/CloseView.js"},{"deps":{"../../config/C_User":56,"../../config/Utils":48,"../../config/ViewManager":51,"../../config/config":52,"../../../../00_base/script/common/ComponentBase":43},"path":"preview-scripts/assets/bundle/01_hall/script/view/hall/faxian.js"},{"deps":{"../config/config":52,"../config/Utils":48,"../config/ViewManager":51,"../../../00_base/script/common/CountryCode":47,"../../../00_base/script/uiutils/tips":50,"../../../00_base/script/common/ComponentBase":43,"../../../00_base/script/common/TimeTickerDown":42},"path":"preview-scripts/assets/bundle/01_hall/script/view/reset.js"},{"deps":{"./config/Utils":48,"./config/config":52,"./config/C_User":56,"./config/ViewManager":51},"path":"preview-scripts/assets/bundle/01_hall/script/hall.js"},{"deps":{"../config/ViewManager":51,"../../../00_base/script/common/ComponentBase":43},"path":"preview-scripts/assets/bundle/01_hall/script/view/wo.js"},{"deps":{},"path":"preview-scripts/assets/bundle/01_hall/script/view/hall/create0.js"},{"deps":{"../../config/config":52,"../../config/ViewManager":51,"../../config/Utils":48,"../items/yiJiaRuJuLeBuItem":10,"../items/yiChuangJianJuLeBuItem":20,"../../../../00_base/script/common/ComponentBase":43},"path":"preview-scripts/assets/bundle/01_hall/script/view/hall/julebu.js"},{"deps":{"../config/config":52,"../config/Utils":48,"../config/ViewManager":51,"../../../00_base/script/common/CountryCode":47,"../../../00_base/script/uiutils/tips":50,"../../../00_base/script/common/ComponentBase":43,"../../../00_base/script/common/TimeTickerDown":42},"path":"preview-scripts/assets/bundle/01_hall/script/view/reg.js"},{"deps":{},"path":"preview-scripts/assets/bundle/01_hall/script/view/items/yiChuangJianJuLeBuItem.js"},{"deps":{"../config/config":52,"../config/Utils":48,"../config/ViewManager":51,"../../../00_base/script/common/ComponentBase":43},"path":"preview-scripts/assets/bundle/01_hall/script/widget/alertCreateJuLeBu.js"},{"deps":{"../config/Utils":48,"../config/config":52,"../config/C_User":56,"../config/ViewManager":51,"../../../00_base/script/uiutils/tips":50,"../../../00_base/script/common/CountryCode":47,"../../../00_base/script/common/ComponentBase":43},"path":"preview-scripts/assets/bundle/01_hall/script/view/login.js"},{"deps":{"../../../../script/bundleLoader":1,"../config/ViewManager":51,"../config/config":52,"../config/cwebsocket":54,"../config/C_User":56,"../../../00_base/script/common/ComponentBase":43,"../../../02_game/script/config/deskInfo":38,"../../../02_game/script/config/cmdClient":39},"path":"preview-scripts/assets/bundle/01_hall/script/widget/alertJiaRuJlb.js"},{"deps":{"../config/config":52,"../../../00_base/script/common/EventManger":49,"../../../00_base/script/common/ComponentBase":43,"../../../00_base/script/common/CountryCode":47},"path":"preview-scripts/assets/bundle/01_hall/script/widget/counttrycode.js"},{"deps":{"../config/config":52,"../config/Utils":48,"../../../00_base/script/common/ComponentBase":43,"../../../00_base/script/uiutils/tips":50},"path":"preview-scripts/assets/bundle/01_hall/script/widget/chuangjianjulebu.js"},{"deps":{"../config/ViewManager":51,"../config/C_User":56,"../../../00_base/script/common/ComponentBase":43},"path":"preview-scripts/assets/bundle/01_hall/script/widget/exitAccount.js"},{"deps":{},"path":"preview-scripts/assets/bundle/01_hall/script/open.js"},{"deps":{"../config/ViewManager":51},"path":"preview-scripts/assets/bundle/01_hall/script/widget/bottomtoggle.js"},{"deps":{"./config/deskInfo":38,"./config/gameConst":35,"./config/cmdClient":39,"../../00_base/script/common/ComponentBase":43,"../../01_hall/script/config/C_User":56},"path":"preview-scripts/assets/bundle/02_game/script/joinDesk.js"},{"deps":{"../../../00_base/script/common/ComponentBase":43},"path":"preview-scripts/assets/bundle/01_hall/script/widget/julebuliebiao.js"},{"deps":{"../config/config":52,"../config/Utils":48,"../config/ViewManager":51,"../../../00_base/script/common/ComponentBase":43},"path":"preview-scripts/assets/bundle/01_hall/script/widget/alertAddClub.js"},{"deps":{"../../../00_base/script/common/ComponentBase":43},"path":"preview-scripts/assets/bundle/01_hall/script/widget/tip.js"},{"deps":{"../config/ViewManager":51,"../../../00_base/script/common/ComponentBase":43},"path":"preview-scripts/assets/bundle/01_hall/script/widget/setting.js"},{"deps":{},"path":"preview-scripts/assets/bundle/02_game/script/light.js"},{"deps":{},"path":"preview-scripts/assets/bundle/02_game/script/config/gameConst.js"},{"deps":{},"path":"preview-scripts/assets/bundle/02_game/script/timedown.js"},{"deps":{},"path":"preview-scripts/assets/bundle/02_game/script/gameInfo.js"},{"deps":{"./gameConst":35,"../../../01_hall/script/config/UserInfo":59},"path":"preview-scripts/assets/bundle/02_game/script/config/deskInfo.js"},{"deps":{},"path":"preview-scripts/assets/bundle/02_game/script/config/cmdClient.js"},{"deps":{"./head":58,"./light":34,"../../../script/bundleLoader":1,"./config/deskInfo":38,"./config/deskMgr":5,"./config/gameConst":35,"./config/nodeDZpool":62,"./config/cmdClient":39,"../../00_base/script/common/ComponentBase":43,"../../01_hall/script/config/C_User":56,"../../01_hall/script/config/ViewManager":51,"../../01_hall/script/config/config":52},"path":"preview-scripts/assets/bundle/02_game/script/game.js"},{"deps":{},"path":"preview-scripts/assets/bundle/00_base/script/uiutils/toggle.js"},{"deps":{"./ComponentBase":43},"path":"preview-scripts/assets/bundle/00_base/script/common/TimeTickerDown.js"},{"deps":{"./EventManger":49},"path":"preview-scripts/assets/bundle/00_base/script/common/ComponentBase.js"},{"deps":{},"path":"preview-scripts/assets/bundle/00_base/script/common/roundRect.js"},{"deps":{},"path":"preview-scripts/assets/bundle/00_base/script/common/ClickHide.js"},{"deps":{},"path":"preview-scripts/assets/bundle/00_base/script/list/ListItem.js"},{"deps":{},"path":"preview-scripts/assets/bundle/00_base/script/common/CountryCode.js"},{"deps":{"./config":52,"./C_User":56},"path":"preview-scripts/assets/bundle/01_hall/script/config/Utils.js"},{"deps":{},"path":"preview-scripts/assets/bundle/00_base/script/common/EventManger.js"},{"deps":{},"path":"preview-scripts/assets/bundle/00_base/script/uiutils/tips.js"},{"deps":{"../../../../script/bundleLoader":1},"path":"preview-scripts/assets/bundle/01_hall/script/config/ViewManager.js"},{"deps":{"./C_User":56,"../../../../script/bundleLoader":1},"path":"preview-scripts/assets/bundle/01_hall/script/config/config.js"},{"deps":{"./C_User":56,"./Utils":48,"../../../../res/i18n/Languages":6,"../../../00_base/script/common/EventManger":49},"path":"preview-scripts/assets/bundle/01_hall/script/config/i18n.js"},{"deps":{"../../../00_base/script/uiutils/tips":50,"../../../02_game/script/config/cmdClient":39},"path":"preview-scripts/assets/bundle/01_hall/script/config/cwebsocket.js"},{"deps":{"./C_User":56},"path":"preview-scripts/assets/bundle/01_hall/script/config/D_User.js"},{"deps":{"./config":52,"./D_Set":60,"./D_User":55,"./Utils":48},"path":"preview-scripts/assets/bundle/01_hall/script/config/C_User.js"},{"deps":{"./config/deskInfo":38,"./config/gameConst":35,"./config/cmdClient":39,"../../01_hall/script/config/UserInfo":59,"../../00_base/script/common/ComponentBase":43},"path":"preview-scripts/assets/bundle/02_game/script/gameSetting.js"},{"deps":{"./config/deskInfo":38,"../../00_base/script/common/ComponentBase":43},"path":"preview-scripts/assets/bundle/02_game/script/head.js"},{"deps":{},"path":"preview-scripts/assets/bundle/01_hall/script/config/UserInfo.js"},{"deps":{},"path":"preview-scripts/assets/bundle/01_hall/script/config/D_Set.js"},{"deps":{"../../../../script/bundleLoader":1},"path":"preview-scripts/assets/bundle/02_game/script/config/dzUtils.js"},{"deps":{"./dzUtils":61},"path":"preview-scripts/assets/bundle/02_game/script/config/nodeDZpool.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    