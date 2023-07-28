
(function () {
var scripts = [{"deps":{"./assets/res/i18n/Languages":1,"./assets/script/start":2,"./assets/script/bundleLoader":3,"./assets/bundle/00_base/script/list/List":4,"./assets/bundle/01_hall/script/view/hall/faxian":5,"./assets/bundle/01_hall/script/config/ViewManager":6,"./assets/bundle/00_base/script/closeScene":7,"./assets/bundle/02_game/script/light":8,"./assets/bundle/01_hall/script/widget/alertJiaRuJlb":9,"./assets/bundle/01_hall/script/view/items/yiJiaRuJuLeBuItem":10,"./assets/bundle/00_base/script/common/CloseView":11,"./assets/bundle/01_hall/script/config/UserInfo":12,"./assets/bundle/01_hall/script/view/hall/julebu":13,"./assets/bundle/01_hall/script/config/config":14,"./assets/bundle/01_hall/script/hall":15,"./assets/bundle/01_hall/script/view/reset":16,"./assets/bundle/01_hall/script/view/hall/create0":17,"./assets/bundle/01_hall/script/view/reg":18,"./assets/bundle/01_hall/script/config/cwebsocket":19,"./assets/bundle/01_hall/script/config/i18n":20,"./assets/bundle/01_hall/script/view/login":21,"./assets/bundle/01_hall/script/view/wo":22,"./assets/bundle/01_hall/script/widget/alertInputYzm":23,"./assets/bundle/02_game/script/timedown":24,"./assets/bundle/01_hall/script/widget/bottomtoggle":25,"./assets/bundle/01_hall/script/widget/exitAccount":26,"./assets/bundle/01_hall/script/view/items/yiChuangJianJuLeBuItem":27,"./assets/bundle/02_game/script/gameInfo":28,"./assets/bundle/01_hall/script/open":29,"./assets/bundle/01_hall/script/widget/julebuliebiao":30,"./assets/bundle/02_game/script/game":31,"./assets/bundle/01_hall/script/widget/counttrycode":32,"./assets/bundle/01_hall/script/widget/setting":33,"./assets/bundle/01_hall/script/widget/alertCreateJuLeBu":34,"./assets/bundle/01_hall/script/widget/chuangjianjulebu":35,"./assets/bundle/00_base/script/uiutils/toggle":36,"./assets/bundle/00_base/script/common/CountryCode":37,"./assets/bundle/00_base/script/common/TimeTickerDown":38,"./assets/bundle/01_hall/script/config/Utils":39,"./assets/bundle/00_base/script/common/EventManger":40,"./assets/bundle/00_base/script/list/ListItem":41,"./assets/bundle/00_base/script/uiutils/tips":42,"./assets/bundle/00_base/script/common/roundRect":43,"./assets/bundle/00_base/script/common/ClickHide":44,"./assets/bundle/00_base/script/common/ComponentBase":45},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/res/i18n/Languages.js"},{"deps":{"./bundleLoader":3},"path":"preview-scripts/assets/script/start.js"},{"deps":{},"path":"preview-scripts/assets/script/bundleLoader.js"},{"deps":{"./ListItem":41},"path":"preview-scripts/assets/bundle/00_base/script/list/List.js"},{"deps":{"../../../../00_base/script/common/ComponentBase":45,"../../config/config":14,"../../config/UserInfo":12,"../../config/Utils":39,"../../config/ViewManager":6},"path":"preview-scripts/assets/bundle/01_hall/script/view/hall/faxian.js"},{"deps":{"../../../../script/bundleLoader":3},"path":"preview-scripts/assets/bundle/01_hall/script/config/ViewManager.js"},{"deps":{"./common/ComponentBase":45},"path":"preview-scripts/assets/bundle/00_base/script/closeScene.js"},{"deps":{},"path":"preview-scripts/assets/bundle/02_game/script/light.js"},{"deps":{"../../../../script/bundleLoader":3,"../../../00_base/script/common/ComponentBase":45,"../config/ViewManager":6,"../config/config":14},"path":"preview-scripts/assets/bundle/01_hall/script/widget/alertJiaRuJlb.js"},{"deps":{},"path":"preview-scripts/assets/bundle/01_hall/script/view/items/yiJiaRuJuLeBuItem.js"},{"deps":{},"path":"preview-scripts/assets/bundle/00_base/script/common/CloseView.js"},{"deps":{},"path":"preview-scripts/assets/bundle/01_hall/script/config/UserInfo.js"},{"deps":{"../../../../00_base/script/common/ComponentBase":45,"../../config/Utils":39,"../../config/config":14,"../items/yiChuangJianJuLeBuItem":27,"../items/yiJiaRuJuLeBuItem":10},"path":"preview-scripts/assets/bundle/01_hall/script/view/hall/julebu.js"},{"deps":{},"path":"preview-scripts/assets/bundle/01_hall/script/config/config.js"},{"deps":{"./config/ViewManager":6,"./config/Utils":39,"./config/config":14,"./config/UserInfo":12},"path":"preview-scripts/assets/bundle/01_hall/script/hall.js"},{"deps":{"../config/ViewManager":6,"../../../00_base/script/common/CountryCode":37,"../config/config":14,"../../../00_base/script/common/ComponentBase":45,"../config/Utils":39,"../../../00_base/script/common/TimeTickerDown":38,"../../../00_base/script/uiutils/tips":42},"path":"preview-scripts/assets/bundle/01_hall/script/view/reset.js"},{"deps":{},"path":"preview-scripts/assets/bundle/01_hall/script/view/hall/create0.js"},{"deps":{"../config/ViewManager":6,"../../../00_base/script/common/CountryCode":37,"../config/config":14,"../../../00_base/script/common/ComponentBase":45,"../config/Utils":39,"../../../00_base/script/common/TimeTickerDown":38,"../../../00_base/script/uiutils/tips":42},"path":"preview-scripts/assets/bundle/01_hall/script/view/reg.js"},{"deps":{"../../../00_base/script/uiutils/tips":42},"path":"preview-scripts/assets/bundle/01_hall/script/config/cwebsocket.js"},{"deps":{"../../../../res/i18n/Languages":1,"./UserInfo":12,"./Utils":39,"../../../00_base/script/common/EventManger":40},"path":"preview-scripts/assets/bundle/01_hall/script/config/i18n.js"},{"deps":{"../config/ViewManager":6,"../config/Utils":39,"../../../00_base/script/common/ComponentBase":45,"../config/config":14,"../../../00_base/script/common/CountryCode":37,"../config/UserInfo":12,"../../../00_base/script/uiutils/tips":42},"path":"preview-scripts/assets/bundle/01_hall/script/view/login.js"},{"deps":{"../../../00_base/script/common/ComponentBase":45,"../config/ViewManager":6},"path":"preview-scripts/assets/bundle/01_hall/script/view/wo.js"},{"deps":{"../../../00_base/script/common/ComponentBase":45},"path":"preview-scripts/assets/bundle/01_hall/script/widget/alertInputYzm.js"},{"deps":{},"path":"preview-scripts/assets/bundle/02_game/script/timedown.js"},{"deps":{"../config/ViewManager":6},"path":"preview-scripts/assets/bundle/01_hall/script/widget/bottomtoggle.js"},{"deps":{"../../../00_base/script/common/ComponentBase":45,"../config/UserInfo":12,"../config/ViewManager":6},"path":"preview-scripts/assets/bundle/01_hall/script/widget/exitAccount.js"},{"deps":{},"path":"preview-scripts/assets/bundle/01_hall/script/view/items/yiChuangJianJuLeBuItem.js"},{"deps":{},"path":"preview-scripts/assets/bundle/02_game/script/gameInfo.js"},{"deps":{},"path":"preview-scripts/assets/bundle/01_hall/script/open.js"},{"deps":{"../../../00_base/script/common/ComponentBase":45},"path":"preview-scripts/assets/bundle/01_hall/script/widget/julebuliebiao.js"},{"deps":{},"path":"preview-scripts/assets/bundle/02_game/script/game.js"},{"deps":{"../../../00_base/script/common/EventManger":40,"../../../00_base/script/common/ComponentBase":45,"../config/config":14,"../../../00_base/script/common/CountryCode":37},"path":"preview-scripts/assets/bundle/01_hall/script/widget/counttrycode.js"},{"deps":{"../../../00_base/script/common/ComponentBase":45,"../config/ViewManager":6},"path":"preview-scripts/assets/bundle/01_hall/script/widget/setting.js"},{"deps":{"../../../00_base/script/common/ComponentBase":45,"../config/ViewManager":6,"../config/config":14,"../config/Utils":39},"path":"preview-scripts/assets/bundle/01_hall/script/widget/alertCreateJuLeBu.js"},{"deps":{"../../../00_base/script/common/ComponentBase":45,"../../../00_base/script/uiutils/tips":42,"../config/Utils":39,"../config/config":14},"path":"preview-scripts/assets/bundle/01_hall/script/widget/chuangjianjulebu.js"},{"deps":{},"path":"preview-scripts/assets/bundle/00_base/script/uiutils/toggle.js"},{"deps":{},"path":"preview-scripts/assets/bundle/00_base/script/common/CountryCode.js"},{"deps":{"./ComponentBase":45},"path":"preview-scripts/assets/bundle/00_base/script/common/TimeTickerDown.js"},{"deps":{"./UserInfo":12,"./config":14},"path":"preview-scripts/assets/bundle/01_hall/script/config/Utils.js"},{"deps":{},"path":"preview-scripts/assets/bundle/00_base/script/common/EventManger.js"},{"deps":{},"path":"preview-scripts/assets/bundle/00_base/script/list/ListItem.js"},{"deps":{},"path":"preview-scripts/assets/bundle/00_base/script/uiutils/tips.js"},{"deps":{},"path":"preview-scripts/assets/bundle/00_base/script/common/roundRect.js"},{"deps":{},"path":"preview-scripts/assets/bundle/00_base/script/common/ClickHide.js"},{"deps":{"./EventManger":40},"path":"preview-scripts/assets/bundle/00_base/script/common/ComponentBase.js"}];
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
    