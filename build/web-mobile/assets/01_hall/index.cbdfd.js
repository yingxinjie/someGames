window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  UserInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0146dnqm/FPs5vCwEWDHeeU", "UserInfo");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UserInfo = void 0;
    var userInfo = function() {
      function userInfo() {
        this._uuid = "";
        this._token = "";
        this.nick = "";
        this.gold = 0;
        this.gender = "";
        this.gameid = 0;
        this.roomid = 0;
        this.money = 0;
        this.headPic = "";
        this.vipValidityPeriod = "";
        this.vipType = "";
        this.uid = "";
        this.code = "";
        this.phoneAreaCode = "";
        this.phoneNumber = "";
        this.diamond = 0;
        this.lastLoginTime = "";
        this.clubNum = 0;
        this.joinClubNum = 0;
        this._language = 0;
        this.cwebsocket = null;
      }
      Object.defineProperty(userInfo, "ins", {
        get: function() {
          null == this.sing && (this.sing = new userInfo());
          return this.sing;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(userInfo.prototype, "uuid", {
        get: function() {
          var uuid = cc.sys.localStorage.getItem("uuid");
          if (!uuid || "" == uuid) return "";
          this._uuid = uuid;
          return this._uuid;
        },
        set: function(val) {
          cc.sys.localStorage.setItem("uuid", val);
          this._uuid = val;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(userInfo.prototype, "token", {
        get: function() {
          var token = cc.sys.localStorage.getItem("token");
          if (!token) return "";
          this._token = token;
          return this._token;
        },
        set: function(val) {
          cc.sys.localStorage.setItem("token", val);
          this._token = val;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(userInfo.prototype, "language", {
        get: function() {
          var id = cc.sys.localStorage.getItem("language");
          id || (id = 0);
          this._language = Number(id);
          return this._language;
        },
        set: function(val) {
          this._language = val;
          cc.sys.localStorage.setItem("language", val);
        },
        enumerable: false,
        configurable: true
      });
      userInfo.prototype.clearLogin = function() {
        cc.sys.localStorage.setItem("token", "");
        cc.sys.localStorage.setItem("uuid", "");
      };
      userInfo.sing = null;
      return userInfo;
    }();
    exports.UserInfo = userInfo.ins;
    cc._RF.pop();
  }, {} ],
  Utils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "12ea6cmuMlEzIjM6UBVz6VJ", "Utils");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Utils = void 0;
    var UserInfo_1 = require("./UserInfo");
    var config_1 = require("./config");
    var Utils = function() {
      function Utils() {}
      Utils.FindPath = function(node) {
        var path = "/" + node.name;
        var continueFind = true;
        var parent = node.parent;
        while (continueFind) {
          if (parent.getComponent(cc.Canvas)) {
            continueFind = false;
            path = parent.name + path;
            break;
          }
          path = "/" + parent.name + path;
          parent = parent.parent;
        }
        return path;
      };
      Utils.IsPhone = function(phone) {
        return /^1[3456789][0-9]\d{8}/.test(phone);
      };
      Utils.IsMail = function(mail) {
        return /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(mail);
      };
      Utils.UrlParams = function(key) {
        if (!window) return "";
        var search = window.location.search.replace("?", "");
        var searchArr = search.split("&");
        for (var i = 0; i < searchArr.length; i++) {
          var kvArr = searchArr[i].split("=");
          if (kvArr[0] == key) return kvArr[1];
        }
        return "";
      };
      Utils.Post = function(path, params) {
        return __awaiter(this, void 0, void 0, function() {
          var url;
          return __generator(this, function(_a) {
            url = "http://" + config_1.GlobalConfig.IPort + path;
            console.log("http\u8bf7\u6c42", url, JSON.stringify(params));
            return [ 2, new Promise(function(resolve, reject) {
              var xhr = new XMLHttpRequest();
              xhr.open("POST", url);
              xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
              xhr.setRequestHeader("token", UserInfo_1.UserInfo.token);
              xhr.onload = function() {
                if (200 === xhr.status) {
                  var res = void 0;
                  try {
                    res = JSON.parse(xhr.responseText);
                    console.log("http\u8bf7\u6c42\u8fd4\u56de", JSON.stringify(res));
                    resolve(res);
                  } catch (error) {
                    console.error("POST \u8bf7\u6c42" + url + " \u8fd4\u56de\u6570\u636eJSON\u89e3\u6790\u9519\u8bef " + res);
                  }
                } else reject(new Error("HTTP\u8bf7\u6c42\u5931\u8d25,\u72b6\u6001\u7801: " + xhr.status));
              };
              xhr.onerror = function() {
                reject(new Error("HTTP\u8bf7\u6c42\u51fa\u9519"));
              };
              xhr.send(JSON.stringify(params));
            }) ];
          });
        });
      };
      Utils.Get = function(path, params) {
        return __awaiter(this, void 0, void 0, function() {
          var search, key, element, url;
          return __generator(this, function(_a) {
            search = "";
            if (params) {
              search = "?";
              for (key in params) {
                element = params[key];
                search += key + "=" + element + "&";
              }
            }
            url = "http://" + config_1.GlobalConfig.IPort + path + search.substring(0, search.length - 1);
            return [ 2, new Promise(function(resolve, reject) {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url);
              xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
              xhr.onload = function() {
                if (200 === xhr.status) {
                  var res = void 0;
                  try {
                    res = JSON.parse(xhr.responseText);
                    resolve(res);
                  } catch (error) {
                    console.error("POST \u8bf7\u6c42" + url + " \u8fd4\u56de\u6570\u636eJSON\u89e3\u6790\u9519\u8bef " + res);
                  }
                } else reject(new Error("HTTP\u8bf7\u6c42\u5931\u8d25,\u72b6\u6001\u7801: " + xhr.status));
              };
              xhr.onerror = function() {
                reject(new Error("HTTP\u8bf7\u6c42\u51fa\u9519"));
              };
              xhr.send();
            }) ];
          });
        });
      };
      Utils.CheckDeviceType = function() {
        var BrowserInfo = {
          userAgent: navigator.userAgent.toLowerCase(),
          isAndroid: Boolean(navigator.userAgent.match(/android/gi)),
          isIphone: Boolean(navigator.userAgent.match(/iphone|ipod/gi)),
          isIpad: Boolean(navigator.userAgent.match(/ipad/gi)),
          isWeixin: Boolean(navigator.userAgent.match(/MicroMessenger/gi))
        };
        return BrowserInfo.isAndroid ? config_1.DeviceType.Android : BrowserInfo.isIpad || BrowserInfo.isIphone ? config_1.DeviceType.Ios : config_1.DeviceType.Web;
      };
      return Utils;
    }();
    exports.Utils = Utils;
    cc._RF.pop();
  }, {
    "./UserInfo": "UserInfo",
    "./config": "config"
  } ],
  ViewManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d3883YBCHZPX7mqz1tBvbRY", "ViewManager");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ViewManager = void 0;
    var bundleLoader_1 = require("../../../../script/bundleLoader");
    var viewManager = function() {
      function viewManager() {}
      Object.defineProperty(viewManager, "ins", {
        get: function() {
          null == this.single && (this.single = new viewManager());
          return this.single;
        },
        enumerable: false,
        configurable: true
      });
      viewManager.prototype.init = function() {};
      viewManager.prototype.Open = function(view) {
        return new Promise(function(resolve, reject) {
          var bundle = bundleLoader_1.bundleLoader.ENUM_BUNDLE_SAVE[bundleLoader_1.bundleLoader.ENUM_BUNDLE.HALL];
          bundle.load("prefab/view/" + view, cc.Prefab, function(err, prefab) {
            if (err) {
              cc.error("\u52a0\u8f7d\u9884\u5236\u4f53\u9519\u8bef", err);
              reject("error");
              return;
            }
            var node = cc.instantiate(prefab);
            resolve(node);
            var canvas = cc.director.getScene().getComponentInChildren(cc.Canvas);
            if (!canvas) {
              cc.error("\u573a\u666f\u4e2d\u65e0\u6cd5\u627e\u5230 canvas \u8282\u70b9,\u65e0\u6cd5\u663e\u793a\u4efb\u4f55\u754c\u9762");
              return;
            }
            var view = canvas.node.getChildByName("view");
            if (view) {
              view.children.forEach(function(child) {
                child.destroy();
              });
              view.addChild(node);
            } else cc.error("hall\u573a\u666f\u4e0d\u5b58\u5728 view \u7684\u8282\u70b9,\u65e0\u6cd5\u663e\u793a\u9884\u5236\u4f53");
          });
        });
      };
      viewManager.prototype.Alert = function(view) {
        console.log("\u6253\u5f00\u754c\u9762", view);
        return new Promise(function(resolve, reject) {
          var bundle = bundleLoader_1.bundleLoader.ENUM_BUNDLE_SAVE[bundleLoader_1.bundleLoader.ENUM_BUNDLE.HALL];
          bundle.load("prefab/widget/" + view, cc.Prefab, function(err, prefab) {
            if (err) {
              cc.error("\u52a0\u8f7d\u9884\u5236\u4f53\u9519\u8bef", err);
              reject("error");
              return;
            }
            var node = cc.instantiate(prefab);
            resolve(node);
            var canvas = cc.director.getScene().getComponentInChildren(cc.Canvas);
            if (!canvas) {
              cc.error("\u573a\u666f\u4e2d\u65e0\u6cd5\u627e\u5230 canvas \u8282\u70b9,\u65e0\u6cd5\u663e\u793a\u4efb\u4f55\u754c\u9762");
              return;
            }
            var view = canvas.node.getChildByName("widget");
            view ? view.addChild(node) : cc.error("hall\u573a\u666f\u4e0d\u5b58\u5728 view \u7684\u8282\u70b9,\u65e0\u6cd5\u663e\u793a\u9884\u5236\u4f53");
          });
        });
      };
      viewManager.prototype.RemoveAllView = function() {
        var canvas = cc.director.getScene().getComponentInChildren(cc.Canvas);
        if (!canvas) {
          cc.error("\u573a\u666f\u4e2d\u65e0\u6cd5\u627e\u5230 canvas \u8282\u70b9,\u65e0\u6cd5\u663e\u793a\u4efb\u4f55\u754c\u9762");
          return;
        }
        var view = canvas.node.getChildByName("view");
        view ? view.children.forEach(function(child) {
          child.destroy();
        }) : cc.error("hall\u573a\u666f\u4e0d\u5b58\u5728 view \u7684\u8282\u70b9,\u65e0\u6cd5\u663e\u793a\u9884\u5236\u4f53");
        var widget = canvas.node.getChildByName("widget");
        widget ? widget.children.forEach(function(child) {
          child.destroy();
        }) : cc.error("hall\u573a\u666f\u4e0d\u5b58\u5728 view \u7684\u8282\u70b9,\u65e0\u6cd5\u663e\u793a\u9884\u5236\u4f53");
      };
      return viewManager;
    }();
    exports.ViewManager = viewManager.ins;
    cc._RF.pop();
  }, {
    "../../../../script/bundleLoader": void 0
  } ],
  alertCreateJuLeBu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9ba54xoeU1KXqSL0iRtwZfw", "alertCreateJuLeBu");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ComponentBase_1 = require("../../../00_base/script/common/ComponentBase");
    var ViewManager_1 = require("../config/ViewManager");
    var config_1 = require("../config/config");
    var Utils_1 = require("../config/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var alertCreateJuLeBu = function(_super) {
      __extends(alertCreateJuLeBu, _super);
      function alertCreateJuLeBu() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        _this.createPaiJuBtn = null;
        _this.createJuLeBuBtn = null;
        return _this;
      }
      alertCreateJuLeBu.prototype.start = function() {
        this.TouchOn(this.closeBtn, this.alertDestory);
        this.TouchOn(this.createPaiJuBtn, this.onClickChuangJianPaiJu);
        this.TouchOn(this.createJuLeBuBtn, this.onClickChuangJianJuLeBu);
      };
      alertCreateJuLeBu.prototype.onClickChuangJianPaiJu = function() {
        this.node.destroy();
      };
      alertCreateJuLeBu.prototype.onClickChuangJianJuLeBu = function() {
        return __awaiter(this, void 0, void 0, function() {
          var res, list;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, Utils_1.Utils.Post(config_1.HttpPath.queryCreatedJuLeBu, {
                current: 0,
                size: 20
              }) ];

             case 1:
              res = _a.sent();
              if (200 != res.code) return [ 2 ];
              list = res.data;
              0 == list.length ? ViewManager_1.ViewManager.Alert("chuangjianjulebu") : ViewManager_1.ViewManager.Alert("julebuzhuangtai");
              this.node.destroy();
              return [ 2 ];
            }
          });
        });
      };
      __decorate([ property(cc.Node) ], alertCreateJuLeBu.prototype, "closeBtn", void 0);
      __decorate([ property(cc.Node) ], alertCreateJuLeBu.prototype, "createPaiJuBtn", void 0);
      __decorate([ property(cc.Node) ], alertCreateJuLeBu.prototype, "createJuLeBuBtn", void 0);
      alertCreateJuLeBu = __decorate([ ccclass ], alertCreateJuLeBu);
      return alertCreateJuLeBu;
    }(ComponentBase_1.default);
    exports.default = alertCreateJuLeBu;
    cc._RF.pop();
  }, {
    "../../../00_base/script/common/ComponentBase": void 0,
    "../config/Utils": "Utils",
    "../config/ViewManager": "ViewManager",
    "../config/config": "config"
  } ],
  alertInputYzm: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "af281uQMENOnJQxV6w2RMvt", "alertInputYzm");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ComponentBase_1 = require("../../../00_base/script/common/ComponentBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var alertInputYzm = function(_super) {
      __extends(alertInputYzm, _super);
      function alertInputYzm() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        return _this;
      }
      alertInputYzm.prototype.start = function() {
        this.TouchOn(this.closeBtn, this.alertDestory);
      };
      alertInputYzm.prototype.onClickCloseBtn = function() {
        this.node.destroy();
      };
      __decorate([ property(cc.Node) ], alertInputYzm.prototype, "closeBtn", void 0);
      alertInputYzm = __decorate([ ccclass ], alertInputYzm);
      return alertInputYzm;
    }(ComponentBase_1.default);
    exports.default = alertInputYzm;
    cc._RF.pop();
  }, {
    "../../../00_base/script/common/ComponentBase": void 0
  } ],
  alertJiaRuJlb: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "da3bd3TCMdJ1aNDsVVJ8bFV", "alertJiaRuJlb");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ComponentBase_1 = require("../../../00_base/script/common/ComponentBase");
    var ViewManager_1 = require("../config/ViewManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var alertJiaRuJlb = function(_super) {
      __extends(alertJiaRuJlb, _super);
      function alertJiaRuJlb() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        _this.jiaRuPaiJuBtn = null;
        _this.jiaRuJuLeBuBtn = null;
        return _this;
      }
      alertJiaRuJlb.prototype.start = function() {
        this.TouchOn(this.closeBtn, this.alertDestory);
        this.TouchOn(this.jiaRuPaiJuBtn, this.onClickJiaRuPaiJu);
        this.TouchOn(this.jiaRuJuLeBuBtn, this.onClickJiaRuJuLeBu);
      };
      alertJiaRuJlb.prototype.onClickJiaRuPaiJu = function() {
        this.node.destroy();
        ViewManager_1.ViewManager.Alert("alertInputYzm");
      };
      alertJiaRuJlb.prototype.onClickJiaRuJuLeBu = function() {
        this.node.destroy();
        ViewManager_1.ViewManager.Alert("julebuliebiao");
      };
      __decorate([ property(cc.Node) ], alertJiaRuJlb.prototype, "closeBtn", void 0);
      __decorate([ property(cc.Node) ], alertJiaRuJlb.prototype, "jiaRuPaiJuBtn", void 0);
      __decorate([ property(cc.Node) ], alertJiaRuJlb.prototype, "jiaRuJuLeBuBtn", void 0);
      alertJiaRuJlb = __decorate([ ccclass ], alertJiaRuJlb);
      return alertJiaRuJlb;
    }(ComponentBase_1.default);
    exports.default = alertJiaRuJlb;
    cc._RF.pop();
  }, {
    "../../../00_base/script/common/ComponentBase": void 0,
    "../config/ViewManager": "ViewManager"
  } ],
  bottomtoggle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3809fjPvWZMD47+UY3pQ0GU", "bottomtoggle");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewManager_1 = require("../config/ViewManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var bottomtoggle = function(_super) {
      __extends(bottomtoggle, _super);
      function bottomtoggle() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      bottomtoggle.prototype.toggleOpenView = function(targ) {
        console.log(targ.node.name);
        ViewManager_1.ViewManager.Open(targ.node.name);
      };
      bottomtoggle = __decorate([ ccclass ], bottomtoggle);
      return bottomtoggle;
    }(cc.Component);
    exports.default = bottomtoggle;
    cc._RF.pop();
  }, {
    "../config/ViewManager": "ViewManager"
  } ],
  chuangjianjulebu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "26f4eZIp6FHU4c5Afucdn//", "chuangjianjulebu");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ComponentBase_1 = require("../../../00_base/script/common/ComponentBase");
    var tips_1 = require("../../../00_base/script/uiutils/tips");
    var Utils_1 = require("../config/Utils");
    var config_1 = require("../config/config");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var chuangjianjulebu = function(_super) {
      __extends(chuangjianjulebu, _super);
      function chuangjianjulebu() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        _this.juLeBuName = null;
        _this.createBtn = null;
        _this.logoBtn = null;
        _this.logoId = 0;
        return _this;
      }
      chuangjianjulebu.prototype.start = function() {
        this.TouchOn(this.closeBtn, this.alertDestory);
        this.TouchOn(this.createBtn, this.onCreate);
      };
      chuangjianjulebu.prototype.onCreate = function() {
        return __awaiter(this, void 0, void 0, function() {
          var info, res;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              cc.log("\u521b\u5efa");
              if ("" == this.juLeBuName.string) {
                tips_1.Tips.Show("\u4ff1\u4e50\u90e8\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a!");
                return [ 2 ];
              }
              info = {
                name: this.juLeBuName.string,
                iconPic: "1",
                area: "2"
              };
              return [ 4, Utils_1.Utils.Post(config_1.HttpPath.createJuLeBu, info) ];

             case 1:
              res = _a.sent();
              if (200 !== res.code) return [ 2 ];
              this.alertDestory();
              return [ 2 ];
            }
          });
        });
      };
      __decorate([ property(cc.Node) ], chuangjianjulebu.prototype, "closeBtn", void 0);
      __decorate([ property(cc.EditBox) ], chuangjianjulebu.prototype, "juLeBuName", void 0);
      __decorate([ property(cc.Node) ], chuangjianjulebu.prototype, "createBtn", void 0);
      __decorate([ property(cc.Node) ], chuangjianjulebu.prototype, "logoBtn", void 0);
      chuangjianjulebu = __decorate([ ccclass ], chuangjianjulebu);
      return chuangjianjulebu;
    }(ComponentBase_1.default);
    exports.default = chuangjianjulebu;
    cc._RF.pop();
  }, {
    "../../../00_base/script/common/ComponentBase": void 0,
    "../../../00_base/script/uiutils/tips": void 0,
    "../config/Utils": "Utils",
    "../config/config": "config"
  } ],
  config: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b24b9QQSnVPFqI0wZV2OSsV", "config");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DeviceType = exports.UserSex = exports.EventName = exports.AccountType = exports.ComUseStr = exports.HttpPath = exports.GlobalConfig = exports.WidgetEnum = exports.ViewEnum = void 0;
    var ViewEnum;
    (function(ViewEnum) {
      ViewEnum["Reset"] = "reset";
      ViewEnum["Reg"] = "reg";
      ViewEnum["Login"] = "login";
      ViewEnum["FaXian"] = "faxian";
    })(ViewEnum = exports.ViewEnum || (exports.ViewEnum = {}));
    var WidgetEnum;
    (function(WidgetEnum) {
      WidgetEnum["BottomToggle"] = "bottomtoggle";
      WidgetEnum["CountryCode"] = "countrycode";
    })(WidgetEnum = exports.WidgetEnum || (exports.WidgetEnum = {}));
    exports.GlobalConfig = {
      IPort: "175.27.169.117:4000"
    };
    exports.HttpPath = {
      phoneReg: "/zs/user/phone/register",
      phoneCaptcha: "/zs/user/phone/captcha",
      phoneLogin: "/zs/user/phone/login",
      emailReg: "/zs/user/email/register",
      emailCaptcha: "/zs/user/email/captcha",
      emailLogin: "/zs/user/email/login",
      createJuLeBu: "/zs/club/create",
      queryAddedJuLeBu: "/zs/club/pagejoined/query",
      queryCreatedJuLeBu: "/zs/club/list/query",
      queryPerson: "/zs/user/query",
      login: "/user/login",
      userinfo: "/user/userinfo",
      update: "/user/update",
      getcode: "/user/getcode"
    };
    var ComUseStr;
    (function(ComUseStr) {
      ComUseStr["UrlParamAddressKey"] = "address";
    })(ComUseStr = exports.ComUseStr || (exports.ComUseStr = {}));
    var AccountType;
    (function(AccountType) {
      AccountType[AccountType["nomall"] = 0] = "nomall";
      AccountType[AccountType["Phone"] = 1] = "Phone";
      AccountType[AccountType["Mail"] = 2] = "Mail";
    })(AccountType = exports.AccountType || (exports.AccountType = {}));
    var EventName;
    (function(EventName) {
      EventName["SelectCountryCode"] = "SelectCountryCode";
    })(EventName = exports.EventName || (exports.EventName = {}));
    var UserSex;
    (function(UserSex) {
      UserSex["BOY"] = "BOY";
      UserSex["GIRL"] = "GIRL";
    })(UserSex = exports.UserSex || (exports.UserSex = {}));
    var DeviceType;
    (function(DeviceType) {
      DeviceType["Android"] = "ANDROID";
      DeviceType["Ios"] = "IOS";
      DeviceType["Web"] = "WEB";
    })(DeviceType = exports.DeviceType || (exports.DeviceType = {}));
    cc._RF.pop();
  }, {} ],
  counttrycode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2b272YxrLRLDLVlEu78E3TM", "counttrycode");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventManger_1 = require("../../../00_base/script/common/EventManger");
    var ComponentBase_1 = require("../../../00_base/script/common/ComponentBase");
    var config_1 = require("../config/config");
    var CountryCode_1 = require("../../../00_base/script/common/CountryCode");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var countrycode = function(_super) {
      __extends(countrycode, _super);
      function countrycode() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.maskNode = null;
        _this.itemNode = null;
        _this.itemContent = null;
        return _this;
      }
      countrycode.prototype.start = function() {
        var _this = this;
        this.TouchOn(this.maskNode, this.closeView);
        this.itemContent.removeAllChildren();
        var list = CountryCode_1.CountryCodeData;
        list.forEach(function(ele, idx) {
          var item = cc.instantiate(_this.itemNode);
          item.name = idx + "";
          item.active = true;
          item.x = 0;
          _this.itemContent.addChild(item);
          item.on(cc.Node.EventType.TOUCH_END, _this.selectCountry, _this);
          item.children[0].getComponent(cc.Label).string = "  " + ele.code + " - " + ele.zh;
        });
      };
      countrycode.prototype.closeView = function() {
        this.node.destroy();
        this.maskNode.off(cc.Node.EventType.TOUCH_START, this.closeView, this);
      };
      countrycode.prototype.selectCountry = function(evt) {
        if (!evt) {
          cc.error("\u4e8b\u4ef6\u4e0d\u5b58\u5728");
          return;
        }
        var node = evt.currentTarget;
        console.log(node.name);
        EventManger_1.EventManger.emit(config_1.EventName.SelectCountryCode, node.name);
        this.closeView();
      };
      __decorate([ property(cc.Node) ], countrycode.prototype, "maskNode", void 0);
      __decorate([ property(cc.Node) ], countrycode.prototype, "itemNode", void 0);
      __decorate([ property(cc.Node) ], countrycode.prototype, "itemContent", void 0);
      countrycode = __decorate([ ccclass ], countrycode);
      return countrycode;
    }(ComponentBase_1.default);
    exports.default = countrycode;
    cc._RF.pop();
  }, {
    "../../../00_base/script/common/ComponentBase": void 0,
    "../../../00_base/script/common/CountryCode": void 0,
    "../../../00_base/script/common/EventManger": void 0,
    "../config/config": "config"
  } ],
  cwebsocket: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "01614rP6UxPx6tFKHLKz6L6", "cwebsocket");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.cwebsocket = void 0;
    var tips_1 = require("../../../00_base/script/uiutils/tips");
    var cwebsocket = function() {
      function cwebsocket(address, id) {
        this.connectState = cwebsocket.nommal;
        this.reconnectCounts = 0;
        this.address = "ws://127.0.0.1:8001";
        this.ws = null;
        this.heartIntervalHandle = null;
        this.id = 0;
        this.willSendInfo = [];
        this.handleInfo = [];
        this.address = address;
        this.id = id;
        this.connect();
      }
      cwebsocket.prototype.connect = function() {
        var _this = this;
        this.ws = new WebSocket(this.address);
        this.connectState = cwebsocket.connecting;
        this.ws.onopen = function() {
          _this.connectState = cwebsocket.Opened;
          console.log("\u94fe\u63a5\u6210\u529f");
          _this.heartIntervalHandle = setInterval(function() {
            _this.ws.send(JSON.stringify({
              id: 0,
              info: "ping"
            }));
          }, 1e4);
          while (_this.willSendInfo.length > 0) _this.ws.send(_this.willSendInfo.shift());
        };
        this.ws.onmessage = function(event) {
          console.log("\u6536\u5230\u6d88\u606f: ", event.data);
        };
        this.ws.onerror = function(event) {
          console.log("\u6536\u5230\u4e00\u4e2a\u9519\u8bef,\u670d\u52a1\u5668\u5173\u95ed\u7684\u65f6\u5019\u8fd9\u91cc\u4e0d\u4f1a\u89e6\u53d1");
        };
        this.ws.onclose = function(event) {
          console.log("\u94fe\u63a5\u5173\u95ed");
          _this.resetConnect();
          console.log("socketid", _this.id);
          if (_this.reconnectCounts >= 2) {
            tips_1.Tips.Show("\u91cd\u8fde\u6b21\u6570\u8fc7\u591a,\u8bf7\u68c0\u67e5\u7f51\u7edc!");
            _this.reconnectCounts = 0;
            _this.willSendInfo = [];
            return;
          }
          setTimeout(function() {
            _this.reconnectCounts++;
            _this.connect();
          }, 3e3);
        };
      };
      cwebsocket.prototype.resetConnect = function() {
        this.ws = null;
        this.connectState = 0;
        clearInterval(this.heartIntervalHandle);
      };
      cwebsocket.prototype.send = function(info) {
        if (this.ws && this.connectState != cwebsocket.Opened) {
          this.willSendInfo.push(info);
          return;
        }
        if (this.connectState != cwebsocket.Opened || this.ws.readyState != WebSocket.OPEN) {
          this.connectState = cwebsocket.nommal;
          this.resetConnect();
          this.connect();
          return;
        }
        this.ws.send(info);
      };
      cwebsocket.prototype.on = function(id, func, cbo) {
        if (id <= 0) {
          cc.error("\u6d88\u606fid\u5fc5\u987b>0", id);
          return;
        }
        if (!func) {
          cc.error("\u6d88\u606f\u6ce8\u518c\u56de\u8c03\u4e0d\u80fd\u4e3a\u7a7a", id);
          return;
        }
        if (!cbo) {
          cc.error("\u6d88\u606f\u6ce8\u518c\u7684\u51fd\u6570\u53e5\u67c4\u4e0d\u80fd\u4e3a\u7a7a", id);
          return;
        }
        this.handleInfo.push({
          id: id,
          func: func,
          cbo: cbo
        });
      };
      cwebsocket.prototype.off = function(id, func, cbo) {
        var _this = this;
        this.handleInfo.forEach(function(item, idx) {
          item.id == id && item.func === func && item.cbo === cbo && _this.handleInfo.splice(idx, 1);
        });
      };
      cwebsocket.prototype.destory = function() {
        this.handleInfo = null;
        if (this.ws) {
          this.ws.onopen = null;
          this.ws.onclose = null;
          this.ws.onerror = null;
          this.ws.onmessage = null;
        }
      };
      cwebsocket.nommal = 1;
      cwebsocket.connecting = 2;
      cwebsocket.Opened = 3;
      return cwebsocket;
    }();
    exports.cwebsocket = cwebsocket;
    cc._RF.pop();
  }, {
    "../../../00_base/script/uiutils/tips": void 0
  } ],
  exitAccount: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2df76K0mVtGuKT8UR+8Ex4A", "exitAccount");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ComponentBase_1 = require("../../../00_base/script/common/ComponentBase");
    var UserInfo_1 = require("../config/UserInfo");
    var ViewManager_1 = require("../config/ViewManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.panel = null;
        _this.exit = null;
        _this.cancel = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        var _this = this;
        cc.tween(this.panel).to(.3, {
          y: 260
        }).call(function() {
          _this.TouchOn(_this.exit, _this.onExit);
          _this.TouchOn(_this.cancel, _this.onCancel);
        }).start();
      };
      NewClass.prototype.onExit = function() {
        UserInfo_1.UserInfo.clearLogin();
        ViewManager_1.ViewManager.RemoveAllView();
        ViewManager_1.ViewManager.Open("login");
      };
      NewClass.prototype.onCancel = function() {
        this.alertDestory();
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "panel", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "exit", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "cancel", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(ComponentBase_1.default);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../00_base/script/common/ComponentBase": void 0,
    "../config/UserInfo": "UserInfo",
    "../config/ViewManager": "ViewManager"
  } ],
  faxian: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "42254M3zkpOILPqgNh+MZ04", "faxian");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ComponentBase_1 = require("../../../../00_base/script/common/ComponentBase");
    var config_1 = require("../../config/config");
    var UserInfo_1 = require("../../config/UserInfo");
    var Utils_1 = require("../../config/Utils");
    var ViewManager_1 = require("../../config/ViewManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var faxian = function(_super) {
      __extends(faxian, _super);
      function faxian() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.paiJuList = null;
        _this.createBtn = null;
        _this.joinBtn = null;
        return _this;
      }
      faxian.prototype.start = function() {
        this.TouchOn(this.createBtn, this.onClickCreateJuLeBu);
        this.TouchOn(this.joinBtn, this.onClickJoinJuLeBu);
        this.queryPerson();
      };
      faxian.prototype.queryPerson = function() {
        return __awaiter(this, void 0, void 0, function() {
          var info, res, back;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              info = {
                uuid: UserInfo_1.UserInfo.uuid,
                token: UserInfo_1.UserInfo.token
              };
              return [ 4, Utils_1.Utils.Post(config_1.HttpPath.queryPerson, info) ];

             case 1:
              res = _a.sent();
              if (200 != res.code) return [ 2 ];
              back = res.data;
              UserInfo_1.UserInfo.uid = back.id;
              UserInfo_1.UserInfo.gender = back.sex;
              UserInfo_1.UserInfo.vipType = back.vipType;
              UserInfo_1.UserInfo.code = back.code;
              UserInfo_1.UserInfo.phoneAreaCode = back.phoneAreaCode;
              UserInfo_1.UserInfo.phoneNumber = back.phoneNumber;
              UserInfo_1.UserInfo.gold = Number(back.gold);
              UserInfo_1.UserInfo.diamond = Number(back.diamond);
              UserInfo_1.UserInfo.lastLoginTime = back.lastLoginTime;
              UserInfo_1.UserInfo.clubNum = Number(back.clubNum);
              UserInfo_1.UserInfo.joinClubNum = Number(back.joinClubNum);
              return [ 2 ];
            }
          });
        });
      };
      faxian.prototype.onClickCreateJuLeBu = function() {
        ViewManager_1.ViewManager.Alert("alertCreateJuLeBu");
      };
      faxian.prototype.onClickJoinJuLeBu = function() {
        ViewManager_1.ViewManager.Alert("alertJiaRuJlb");
      };
      __decorate([ property(cc.ScrollView) ], faxian.prototype, "paiJuList", void 0);
      __decorate([ property(cc.Node) ], faxian.prototype, "createBtn", void 0);
      __decorate([ property(cc.Node) ], faxian.prototype, "joinBtn", void 0);
      faxian = __decorate([ ccclass ], faxian);
      return faxian;
    }(ComponentBase_1.default);
    exports.default = faxian;
    cc._RF.pop();
  }, {
    "../../../../00_base/script/common/ComponentBase": void 0,
    "../../config/UserInfo": "UserInfo",
    "../../config/Utils": "Utils",
    "../../config/ViewManager": "ViewManager",
    "../../config/config": "config"
  } ],
  hall: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "20b04sWMJhPNburHDjc8Tab", "hall");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewManager_1 = require("./config/ViewManager");
    var Utils_1 = require("./config/Utils");
    var config_1 = require("./config/config");
    var UserInfo_1 = require("./config/UserInfo");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var hall = function(_super) {
      __extends(hall, _super);
      function hall() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      hall.prototype.start = function() {
        cc.game.addPersistRootNode(this.node);
        var httpServer = Utils_1.Utils.UrlParams(config_1.ComUseStr.UrlParamAddressKey);
        "" != httpServer && (config_1.GlobalConfig.IPort = httpServer);
        this.load();
      };
      hall.prototype.load = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!(UserInfo_1.UserInfo.uuid && UserInfo_1.UserInfo.uuid.length > 0)) return [ 3, 3 ];
              return [ 4, ViewManager_1.ViewManager.Alert(config_1.WidgetEnum.BottomToggle) ];

             case 1:
              _a.sent();
              return [ 4, ViewManager_1.ViewManager.Open(config_1.ViewEnum.FaXian) ];

             case 2:
              _a.sent();
              return [ 3, 5 ];

             case 3:
              return [ 4, ViewManager_1.ViewManager.Open(config_1.ViewEnum.Login) ];

             case 4:
              _a.sent();
              _a.label = 5;

             case 5:
              return [ 2 ];
            }
          });
        });
      };
      hall = __decorate([ ccclass ], hall);
      return hall;
    }(cc.Component);
    exports.default = hall;
    cc._RF.pop();
  }, {
    "./config/UserInfo": "UserInfo",
    "./config/Utils": "Utils",
    "./config/ViewManager": "ViewManager",
    "./config/config": "config"
  } ],
  i18n: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7271HlvnJMKa3fuDlcePsU", "i18n");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Languages_1 = require("../../../../res/i18n/Languages");
    var UserInfo_1 = require("./UserInfo");
    var Utils_1 = require("./Utils");
    var EventManger_1 = require("../../../00_base/script/common/EventManger");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var i18n = function(_super) {
      __extends(i18n, _super);
      function i18n() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lanStr = "";
        _this.lanKey = "";
        return _this;
      }
      i18n_1 = i18n;
      i18n.prototype.start = function() {
        if ("" == this.lanStr) {
          cc.error("\u8282\u70b9 " + Utils_1.Utils.FindPath(this.node) + " \u7684\u591a\u8bed\u8a00key\u4e3a\u7a7a");
          return;
        }
        EventManger_1.EventManger.on(i18n_1.LanguageChange, this.onChangeLanguage, this);
        var cfg = Languages_1.LanguagesCfg[0];
        for (var key in cfg) {
          var element = cfg[key];
          element == this.lanStr && (this.lanKey = key);
        }
        this.onChangeLanguage();
      };
      i18n.prototype.onChangeLanguage = function() {
        var cfg = Languages_1.LanguagesCfg[UserInfo_1.UserInfo.language];
        this.node && this.node.getComponent(cc.Label) && (this.node.getComponent(cc.Label).string = cfg[this.lanKey]);
      };
      var i18n_1;
      i18n.LanguageChange = "LanguageChange";
      __decorate([ property ], i18n.prototype, "lanStr", void 0);
      i18n = i18n_1 = __decorate([ ccclass ], i18n);
      return i18n;
    }(cc.Component);
    exports.default = i18n;
    cc._RF.pop();
  }, {
    "../../../../res/i18n/Languages": void 0,
    "../../../00_base/script/common/EventManger": void 0,
    "./UserInfo": "UserInfo",
    "./Utils": "Utils"
  } ],
  julebuliebiao: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bdca5ui23VPnKOArHn9qg7N", "julebuliebiao");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ComponentBase_1 = require("../../../00_base/script/common/ComponentBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var julebuliebiao = function(_super) {
      __extends(julebuliebiao, _super);
      function julebuliebiao() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        return _this;
      }
      julebuliebiao.prototype.start = function() {
        this.TouchOn(this.closeBtn, this.alertDestory);
      };
      __decorate([ property(cc.Node) ], julebuliebiao.prototype, "closeBtn", void 0);
      julebuliebiao = __decorate([ ccclass ], julebuliebiao);
      return julebuliebiao;
    }(ComponentBase_1.default);
    exports.default = julebuliebiao;
    cc._RF.pop();
  }, {
    "../../../00_base/script/common/ComponentBase": void 0
  } ],
  julebu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6c067w93MFD+7dlxW7TI2Fx", "julebu");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ComponentBase_1 = require("../../../../00_base/script/common/ComponentBase");
    var Utils_1 = require("../../config/Utils");
    var config_1 = require("../../config/config");
    var yiChuangJianJuLeBuItem_1 = require("../items/yiChuangJianJuLeBuItem");
    var yiJiaRuJuLeBuItem_1 = require("../items/yiJiaRuJuLeBuItem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var julebu = function(_super) {
      __extends(julebu, _super);
      function julebu() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.yiJiaRu = null;
        _this.yiJiaRuList = null;
        _this.yiJiaRuItem = null;
        _this.yiChuangJian = null;
        _this.yiChuangJianList = null;
        _this.yiChuangJianItem = null;
        return _this;
      }
      julebu.prototype.start = function() {
        this.yiChuangJianList.active = false;
        this.onToggleBtnClick();
      };
      julebu.prototype.onToggleBtnClick = function() {
        this.yiJiaRu.isChecked && this.queryJiaRuInfo();
        this.yiChuangJian.isChecked && this.queryYiChuangJian();
      };
      julebu.prototype.queryJiaRuInfo = function() {
        return __awaiter(this, void 0, void 0, function() {
          var res, content, list;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, Utils_1.Utils.Post(config_1.HttpPath.queryAddedJuLeBu, {
                current: 0,
                size: 20
              }) ];

             case 1:
              res = _a.sent();
              if (200 != res.code) return [ 2 ];
              content = this.yiJiaRuList.getComponent(cc.ScrollView).content;
              content.removeAllChildren();
              list = res.data;
              list.forEach(function(item) {
                var itemNode = cc.instantiate(_this.yiJiaRuItem);
                var script = itemNode.getComponent(yiJiaRuJuLeBuItem_1.default);
                itemNode.x = 0;
                itemNode.y = 0;
                itemNode.parent = content;
                script.run(item);
              });
              return [ 2 ];
            }
          });
        });
      };
      julebu.prototype.queryYiChuangJian = function() {
        return __awaiter(this, void 0, void 0, function() {
          var res, content, list;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, Utils_1.Utils.Post(config_1.HttpPath.queryCreatedJuLeBu, {
                current: 0,
                size: 20
              }) ];

             case 1:
              res = _a.sent();
              if (200 != res.code) return [ 2 ];
              content = this.yiChuangJianList.getComponent(cc.ScrollView).content;
              content.removeAllChildren();
              list = res.data;
              list.forEach(function(item) {
                var itemNode = cc.instantiate(_this.yiChuangJianItem);
                var script = itemNode.getComponent(yiChuangJianJuLeBuItem_1.default);
                itemNode.x = 0;
                itemNode.y = 0;
                itemNode.parent = content;
                script.run(item);
              });
              return [ 2 ];
            }
          });
        });
      };
      __decorate([ property(cc.Toggle) ], julebu.prototype, "yiJiaRu", void 0);
      __decorate([ property(cc.Node) ], julebu.prototype, "yiJiaRuList", void 0);
      __decorate([ property(cc.Node) ], julebu.prototype, "yiJiaRuItem", void 0);
      __decorate([ property(cc.Toggle) ], julebu.prototype, "yiChuangJian", void 0);
      __decorate([ property(cc.Node) ], julebu.prototype, "yiChuangJianList", void 0);
      __decorate([ property(cc.Node) ], julebu.prototype, "yiChuangJianItem", void 0);
      julebu = __decorate([ ccclass ], julebu);
      return julebu;
    }(ComponentBase_1.default);
    exports.default = julebu;
    cc._RF.pop();
  }, {
    "../../../../00_base/script/common/ComponentBase": void 0,
    "../../config/Utils": "Utils",
    "../../config/config": "config",
    "../items/yiChuangJianJuLeBuItem": "yiChuangJianJuLeBuItem",
    "../items/yiJiaRuJuLeBuItem": "yiJiaRuJuLeBuItem"
  } ],
  login: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d32dcf5FzVISrrCNyKrVe6Z", "login");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewManager_1 = require("../config/ViewManager");
    var Utils_1 = require("../config/Utils");
    var ComponentBase_1 = require("../../../00_base/script/common/ComponentBase");
    var config_1 = require("../config/config");
    var CountryCode_1 = require("../../../00_base/script/common/CountryCode");
    var UserInfo_1 = require("../config/UserInfo");
    var tips_1 = require("../../../00_base/script/uiutils/tips");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var login = function(_super) {
      __extends(login, _super);
      function login() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.selectBtn = null;
        _this.countryCode = null;
        _this.resetBtn = null;
        _this.regBtn = null;
        _this.phoneLoginBtn = null;
        _this.mailLoginBtn = null;
        _this.phoneAreaCode = null;
        _this.phoneEdit = null;
        _this.phonePwd = null;
        _this.mailEdit = null;
        _this.mailPwd = null;
        return _this;
      }
      login.prototype.start = function() {
        this.TouchOn(this.selectBtn, this.openCountryCode);
        this.TouchOn(this.resetBtn, this.openResetPanel);
        this.TouchOn(this.regBtn, this.openRegPanel);
        this.TouchOn(this.phoneLoginBtn, this.phoneLogin);
        this.TouchOn(this.mailLoginBtn, this.mailLogin);
        this.EventOn(config_1.EventName.SelectCountryCode, this.onSelectCountryCode);
      };
      login.prototype.openCountryCode = function() {
        ViewManager_1.ViewManager.Alert(config_1.WidgetEnum.CountryCode);
      };
      login.prototype.onSelectCountryCode = function(idx) {
        var codeObj = CountryCode_1.CountryCodeData[idx];
        this.countryCode.string = codeObj.code;
      };
      login.prototype.openResetPanel = function() {
        ViewManager_1.ViewManager.Open(config_1.ViewEnum.Reset);
      };
      login.prototype.openRegPanel = function() {
        ViewManager_1.ViewManager.Open(config_1.ViewEnum.Reg);
      };
      login.prototype.phoneLogin = function() {
        return __awaiter(this, void 0, void 0, function() {
          var phone, pwd, code, data, res;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              phone = this.phoneEdit.string;
              pwd = this.phonePwd.string;
              code = this.phoneAreaCode.string;
              if (!Utils_1.Utils.IsPhone(phone)) {
                tips_1.Tips.Show("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7!");
                return [ 2 ];
              }
              if (pwd.length < 6) {
                tips_1.Tips.Show("\u5bc6\u7801\u957f\u5ea6\u4e0d\u591f,\u81f3\u5c116\u4f4d\u5b57\u7b26!");
                return [ 2 ];
              }
              if (!this.phoneAreaCode || "" == code) {
                tips_1.Tips.Show("\u8bf7\u9009\u62e9\u533a\u4f4d\u7801!");
                return [ 2 ];
              }
              data = {
                phoneAreaCode: this.phoneAreaCode.string,
                phoneNumber: phone,
                loginPwd: pwd,
                device: Utils_1.Utils.CheckDeviceType(),
                deviceInfo: "",
                longitude: "",
                latitude: "",
                ip: ""
              };
              console.log("\u8bf7\u6c42\u6570\u636e", JSON.stringify(data));
              return [ 4, Utils_1.Utils.Post(config_1.HttpPath.phoneLogin, data) ];

             case 1:
              res = _a.sent();
              console.log("\u767b\u5f55\u6570\u636e\u8fd4\u56de", JSON.stringify(res));
              if (200 != res.code) {
                cc.error("\u624b\u673a\u767b\u9646\u8bf7\u6c42\u9519\u8bef", config_1.HttpPath.phoneLogin, JSON.stringify(res));
                return [ 2 ];
              }
              UserInfo_1.UserInfo.uuid = res.uuid;
              UserInfo_1.UserInfo.nick = res.data.name;
              UserInfo_1.UserInfo.headPic = res.data.headPic;
              UserInfo_1.UserInfo.gender = res.data.sex;
              UserInfo_1.UserInfo.vipValidityPeriod = res.data.vipValidityPeriod;
              UserInfo_1.UserInfo.vipType = res.data.vipType;
              UserInfo_1.UserInfo.uuid = res.uuid;
              UserInfo_1.UserInfo.token = res.data.token;
              return [ 4, ViewManager_1.ViewManager.Alert(config_1.WidgetEnum.BottomToggle) ];

             case 2:
              _a.sent();
              return [ 4, ViewManager_1.ViewManager.Open(config_1.ViewEnum.FaXian) ];

             case 3:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      login.prototype.mailLogin = function() {
        return __awaiter(this, void 0, void 0, function() {
          var mail, pwd, data, res;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              mail = this.mailEdit.string;
              pwd = this.mailPwd.string;
              if (!Utils_1.Utils.IsMail(mail)) {
                tips_1.Tips.Show("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u7bb1!");
                return [ 2 ];
              }
              if (pwd.length < 6) {
                tips_1.Tips.Show("\u5bc6\u7801\u957f\u5ea6\u4e0d\u591f,\u81f3\u5c116\u4f4d\u5b57\u7b26!");
                return [ 2 ];
              }
              data = {
                email: mail,
                loginPwd: pwd,
                ip: "",
                longitude: "",
                latitude: "",
                device: Utils_1.Utils.CheckDeviceType(),
                deviceInfo: "",
                userAgent: navigator.userAgent.toLowerCase()
              };
              console.log("\u8bf7\u6c42\u6570\u636e", JSON.stringify(data));
              return [ 4, Utils_1.Utils.Post(config_1.HttpPath.emailLogin, data) ];

             case 1:
              res = _a.sent();
              console.log("\u767b\u5f55\u6570\u636e\u8fd4\u56de", JSON.stringify(res));
              if (200 != res.code) {
                cc.error("\u624b\u673a\u767b\u9646\u8bf7\u6c42\u9519\u8bef", config_1.HttpPath.emailLogin, JSON.stringify(res));
                return [ 2 ];
              }
              UserInfo_1.UserInfo.uuid = res.uuid;
              UserInfo_1.UserInfo.nick = res.data.name;
              UserInfo_1.UserInfo.headPic = res.data.headPic;
              UserInfo_1.UserInfo.gender = res.data.sex;
              UserInfo_1.UserInfo.vipValidityPeriod = res.data.vipValidityPeriod;
              UserInfo_1.UserInfo.vipType = res.data.vipType;
              UserInfo_1.UserInfo.uuid = res.uuid;
              UserInfo_1.UserInfo.token = res.data.token;
              return [ 4, ViewManager_1.ViewManager.Alert(config_1.WidgetEnum.BottomToggle) ];

             case 2:
              _a.sent();
              return [ 4, ViewManager_1.ViewManager.Open(config_1.ViewEnum.FaXian) ];

             case 3:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      __decorate([ property(cc.Node) ], login.prototype, "selectBtn", void 0);
      __decorate([ property(cc.Label) ], login.prototype, "countryCode", void 0);
      __decorate([ property(cc.Node) ], login.prototype, "resetBtn", void 0);
      __decorate([ property(cc.Node) ], login.prototype, "regBtn", void 0);
      __decorate([ property(cc.Node) ], login.prototype, "phoneLoginBtn", void 0);
      __decorate([ property(cc.Node) ], login.prototype, "mailLoginBtn", void 0);
      __decorate([ property(cc.Label) ], login.prototype, "phoneAreaCode", void 0);
      __decorate([ property(cc.EditBox) ], login.prototype, "phoneEdit", void 0);
      __decorate([ property(cc.EditBox) ], login.prototype, "phonePwd", void 0);
      __decorate([ property(cc.EditBox) ], login.prototype, "mailEdit", void 0);
      __decorate([ property(cc.EditBox) ], login.prototype, "mailPwd", void 0);
      login = __decorate([ ccclass ], login);
      return login;
    }(ComponentBase_1.default);
    exports.default = login;
    cc._RF.pop();
  }, {
    "../../../00_base/script/common/ComponentBase": void 0,
    "../../../00_base/script/common/CountryCode": void 0,
    "../../../00_base/script/uiutils/tips": void 0,
    "../config/UserInfo": "UserInfo",
    "../config/Utils": "Utils",
    "../config/ViewManager": "ViewManager",
    "../config/config": "config"
  } ],
  open: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3d8f4UolvxDAJm5XZBNqMcp", "open");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var open = function(_super) {
      __extends(open, _super);
      function open() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      open.prototype.start = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.openGame, this);
      };
      open.prototype.openGame = function() {
        var _this = this;
        console.log("\u70b9\u51fb\u4e86\u6309\u94ae", this.node.name);
        cc.assetManager.loadBundle(this.node.name, function(err, bundle) {
          cc.director.loadScene(_this.node.name);
        });
      };
      open = __decorate([ ccclass ], open);
      return open;
    }(cc.Component);
    exports.default = open;
    cc._RF.pop();
  }, {} ],
  reg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f3fedlDC09KXpDASMmqfi2R", "reg");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewManager_1 = require("../config/ViewManager");
    var CountryCode_1 = require("../../../00_base/script/common/CountryCode");
    var config_1 = require("../config/config");
    var ComponentBase_1 = require("../../../00_base/script/common/ComponentBase");
    var Utils_1 = require("../config/Utils");
    var TimeTickerDown_1 = require("../../../00_base/script/common/TimeTickerDown");
    var tips_1 = require("../../../00_base/script/uiutils/tips");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var reg = function(_super) {
      __extends(reg, _super);
      function reg() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.backBtn = null;
        _this.selectCountryCodeBtn = null;
        _this.countryCode = null;
        _this.sendPhoneCodeBtn = null;
        _this.phoneEdit = null;
        _this.phoneCodeEdit = null;
        _this.phonePwdEdit = null;
        _this.phoneNextBtn = null;
        _this.sendMailCodeBtn = null;
        _this.mailEdit = null;
        _this.mailCodeEdit = null;
        _this.mailPwdEdit = null;
        _this.mailNextBtn = null;
        return _this;
      }
      reg.prototype.start = function() {
        this.TouchOn(this.backBtn, this.backLogin);
        this.TouchOn(this.selectCountryCodeBtn, this.openCountryCode);
        this.TouchOn(this.sendPhoneCodeBtn, this.onSendPhoneCode);
        this.TouchOn(this.phoneNextBtn, this.nextPhoneAccount);
        this.TouchOn(this.sendMailCodeBtn, this.onSendMailCode);
        this.TouchOn(this.mailNextBtn, this.nextMailAccount);
        this.EventOn(config_1.EventName.SelectCountryCode, this.onSelectCountryCode);
      };
      reg.prototype.backLogin = function() {
        ViewManager_1.ViewManager.Open(config_1.ViewEnum.Login);
      };
      reg.prototype.openCountryCode = function() {
        ViewManager_1.ViewManager.Alert(config_1.WidgetEnum.CountryCode);
      };
      reg.prototype.onSelectCountryCode = function(idx) {
        var codeObj = CountryCode_1.CountryCodeData[idx];
        this.countryCode.string = codeObj.code;
      };
      reg.prototype.onSendPhoneCode = function() {
        return __awaiter(this, void 0, void 0, function() {
          var ttd, phone, areaCode, res;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              ttd = this.sendPhoneCodeBtn.getComponent(TimeTickerDown_1.default);
              if (ttd.down) return [ 2 ];
              phone = this.phoneEdit.string;
              areaCode = this.countryCode.string;
              if (!Utils_1.Utils.IsPhone(phone)) {
                tips_1.Tips.Show("\u624b\u673a\u53f7\u9519\u8bef!");
                return [ 2 ];
              }
              if ("" == areaCode) {
                tips_1.Tips.Show("\u56fd\u9645\u7801\u4e0d\u80fd\u4e3a\u7a7a!");
                return [ 2 ];
              }
              return [ 4, Utils_1.Utils.Post(config_1.HttpPath.phoneCaptcha, {
                phoneAreaCode: areaCode,
                phoneNumber: phone
              }) ];

             case 1:
              res = _a.sent();
              console.log("\u8bf7\u6c42\u624b\u673a\u9a8c\u8bc1\u7801", JSON.stringify(res));
              if (200 != res.code) {
                cc.error("\u8bf7\u6c42\u9a8c\u8bc1\u7801\u5931\u8d25,\u7a0d\u540e\u518d\u8bd5!");
                return [ 2 ];
              }
              tips_1.Tips.Show("\u9a8c\u8bc1\u7801\u5df2\u53d1\u9001!");
              ttd.run();
              return [ 2 ];
            }
          });
        });
      };
      reg.prototype.nextPhoneAccount = function() {
        return __awaiter(this, void 0, void 0, function() {
          var phone, pwd, yzm, areaCode, info, res;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              phone = this.phoneEdit.string;
              pwd = this.phonePwdEdit.string;
              yzm = this.phoneCodeEdit.string;
              areaCode = this.countryCode.string;
              if (!Utils_1.Utils.IsPhone(phone)) {
                tips_1.Tips.Show("\u624b\u673a\u53f7\u4e0d\u5bf9!");
                return [ 2 ];
              }
              if (yzm.length < 6) {
                tips_1.Tips.Show("\u9a8c\u8bc1\u7801\u586b\u5199\u9519\u8bef");
                return [ 2 ];
              }
              if (pwd.length < 6) {
                tips_1.Tips.Show("\u5bc6\u7801\u4e0d\u80fd\u5c0f\u4e8e6\u4f4d!");
                return [ 2 ];
              }
              if ("" == areaCode) {
                tips_1.Tips.Show("\u56fd\u9645\u7801\u4e0d\u80fd\u4e3a\u7a7a!");
                return [ 2 ];
              }
              info = {
                phoneAreaCode: areaCode,
                phoneNumber: phone,
                loginPwd: pwd,
                captcha: yzm,
                sex: config_1.UserSex.BOY,
                longitude: "",
                latitude: "",
                ip: "",
                device: Utils_1.Utils.CheckDeviceType(),
                deviceInfo: "",
                userAgent: navigator.userAgent.toLowerCase()
              };
              console.log("\u624b\u673a\u6ce8\u518c\u4fe1\u606f", JSON.stringify(info));
              return [ 4, Utils_1.Utils.Post(config_1.HttpPath.phoneReg, info) ];

             case 1:
              res = _a.sent();
              console.log("\u624b\u673a\u6ce8\u518c\u8fd4\u56de\u4fe1\u606f", JSON.stringify(res));
              if (200 != res.code) {
                cc.error("\u6ce8\u518c\u5931\u8d25,code:" + res.code);
                tips_1.Tips.Show("\u6ce8\u518c\u5931\u8d25,\u7a0d\u540e\u518d\u8bd5!");
                return [ 2 ];
              }
              tips_1.Tips.Show("\u6ce8\u518c\u6210\u529f!");
              ViewManager_1.ViewManager.Open(config_1.ViewEnum.Login);
              return [ 2 ];
            }
          });
        });
      };
      reg.prototype.onSendMailCode = function() {
        return __awaiter(this, void 0, void 0, function() {
          var ttd, mail, res;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              ttd = this.sendMailCodeBtn.getComponent(TimeTickerDown_1.default);
              if (ttd.down) return [ 2 ];
              mail = this.mailEdit.string;
              if (!Utils_1.Utils.IsMail(mail)) {
                tips_1.Tips.Show("\u90ae\u7bb1\u683c\u5f0f\u9519\u8bef!");
                return [ 2 ];
              }
              return [ 4, Utils_1.Utils.Post(config_1.HttpPath.emailCaptcha, {
                email: mail
              }) ];

             case 1:
              res = _a.sent();
              console.log("\u8bf7\u6c42\u90ae\u7bb1\u9a8c\u8bc1\u7801", JSON.stringify(res));
              if (200 != res.code) {
                cc.error("\u8bf7\u6c42\u9a8c\u8bc1\u7801\u5931\u8d25,\u7a0d\u540e\u518d\u8bd5!");
                tips_1.Tips.Show("\u9a8c\u8bc1\u7801\u83b7\u53d6\u5931\u8d25,\u7a0d\u540e\u518d\u8bd5!");
                return [ 2 ];
              }
              tips_1.Tips.Show("\u9a8c\u8bc1\u7801\u5df2\u53d1\u9001,\u8bf7\u5230\u90ae\u7bb1\u67e5\u6536!");
              ttd.run();
              return [ 2 ];
            }
          });
        });
      };
      reg.prototype.nextMailAccount = function() {
        return __awaiter(this, void 0, void 0, function() {
          var mail, pwd, yzm, info, res;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              mail = this.mailEdit.string;
              pwd = this.mailPwdEdit.string;
              yzm = this.mailCodeEdit.string;
              if (!Utils_1.Utils.IsMail(mail)) {
                tips_1.Tips.Show("\u90ae\u7bb1\u683c\u5f0f\u4e0d\u5bf9!");
                return [ 2 ];
              }
              if (yzm.length < 6) {
                tips_1.Tips.Show("\u9a8c\u8bc1\u7801\u957f\u5ea6\u9519\u8bef");
                return [ 2 ];
              }
              if (pwd.length < 6) {
                tips_1.Tips.Show("\u5bc6\u7801\u4e0d\u80fd\u5c0f\u4e8e6\u4f4d!");
                return [ 2 ];
              }
              info = {
                email: mail,
                loginPwd: pwd,
                captcha: yzm,
                sex: config_1.UserSex.BOY,
                ip: "",
                longitude: "",
                latitude: "",
                device: Utils_1.Utils.CheckDeviceType(),
                deviceInfo: "",
                userAgent: navigator.userAgent.toLowerCase()
              };
              console.log("\u90ae\u7bb1\u6ce8\u518c\u4fe1\u606f", JSON.stringify(info));
              return [ 4, Utils_1.Utils.Post(config_1.HttpPath.emailReg, info) ];

             case 1:
              res = _a.sent();
              console.log("\u90ae\u7bb1\u6ce8\u518c\u4fe1\u606f\u8fd4\u56de", JSON.stringify(res));
              if (200 != res.code) {
                cc.error("\u6ce8\u518c\u5931\u8d25,code:" + res.code);
                return [ 2 ];
              }
              tips_1.Tips.Show("\u6ce8\u518c\u6210\u529f!");
              ViewManager_1.ViewManager.Open(config_1.ViewEnum.Login);
              return [ 2 ];
            }
          });
        });
      };
      __decorate([ property(cc.Node) ], reg.prototype, "backBtn", void 0);
      __decorate([ property(cc.Node) ], reg.prototype, "selectCountryCodeBtn", void 0);
      __decorate([ property(cc.Label) ], reg.prototype, "countryCode", void 0);
      __decorate([ property(cc.Node) ], reg.prototype, "sendPhoneCodeBtn", void 0);
      __decorate([ property(cc.EditBox) ], reg.prototype, "phoneEdit", void 0);
      __decorate([ property(cc.EditBox) ], reg.prototype, "phoneCodeEdit", void 0);
      __decorate([ property(cc.EditBox) ], reg.prototype, "phonePwdEdit", void 0);
      __decorate([ property(cc.Node) ], reg.prototype, "phoneNextBtn", void 0);
      __decorate([ property(cc.Node) ], reg.prototype, "sendMailCodeBtn", void 0);
      __decorate([ property(cc.EditBox) ], reg.prototype, "mailEdit", void 0);
      __decorate([ property(cc.EditBox) ], reg.prototype, "mailCodeEdit", void 0);
      __decorate([ property(cc.EditBox) ], reg.prototype, "mailPwdEdit", void 0);
      __decorate([ property(cc.Node) ], reg.prototype, "mailNextBtn", void 0);
      reg = __decorate([ ccclass ], reg);
      return reg;
    }(ComponentBase_1.default);
    exports.default = reg;
    cc._RF.pop();
  }, {
    "../../../00_base/script/common/ComponentBase": void 0,
    "../../../00_base/script/common/CountryCode": void 0,
    "../../../00_base/script/common/TimeTickerDown": void 0,
    "../../../00_base/script/uiutils/tips": void 0,
    "../config/Utils": "Utils",
    "../config/ViewManager": "ViewManager",
    "../config/config": "config"
  } ],
  reset: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4e78b9jdRVHLIsyKDWYdZpB", "reset");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewManager_1 = require("../config/ViewManager");
    var CountryCode_1 = require("../../../00_base/script/common/CountryCode");
    var config_1 = require("../config/config");
    var ComponentBase_1 = require("../../../00_base/script/common/ComponentBase");
    var Utils_1 = require("../config/Utils");
    var TimeTickerDown_1 = require("../../../00_base/script/common/TimeTickerDown");
    var tips_1 = require("../../../00_base/script/uiutils/tips");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var reset = function(_super) {
      __extends(reset, _super);
      function reset() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.backBtn = null;
        _this.selectCountryCodeBtn = null;
        _this.countryCode = null;
        _this.sendPhoneCodeBtn = null;
        _this.phoneEdit = null;
        _this.phoneCodeEdit = null;
        _this.phonePwdEdit = null;
        _this.phoneNextBtn = null;
        _this.sendMailCodeBtn = null;
        _this.mailEdit = null;
        _this.mailCodeEdit = null;
        _this.mailPwdEdit = null;
        _this.mailNextBtn = null;
        return _this;
      }
      reset.prototype.start = function() {
        this.TouchOn(this.backBtn, this.backLogin);
        this.TouchOn(this.selectCountryCodeBtn, this.openCountryCode);
        this.TouchOn(this.sendPhoneCodeBtn, this.onSendPhoneCode);
        this.TouchOn(this.phoneNextBtn, this.nextPhoneAccount);
        this.TouchOn(this.sendMailCodeBtn, this.onSendMailCode);
        this.TouchOn(this.mailNextBtn, this.nextMailAccount);
        this.EventOn(config_1.EventName.SelectCountryCode, this.onSelectCountryCode);
      };
      reset.prototype.backLogin = function() {
        ViewManager_1.ViewManager.Open(config_1.ViewEnum.Login);
      };
      reset.prototype.openCountryCode = function() {
        ViewManager_1.ViewManager.Alert(config_1.WidgetEnum.CountryCode);
      };
      reset.prototype.onSelectCountryCode = function(idx) {
        var codeObj = CountryCode_1.CountryCodeData[idx];
        this.countryCode.string = codeObj.code;
      };
      reset.prototype.onSendPhoneCode = function() {
        return __awaiter(this, void 0, void 0, function() {
          var ttd, phone, areaCode, res;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              ttd = this.sendPhoneCodeBtn.getComponent(TimeTickerDown_1.default);
              if (ttd.down) return [ 2 ];
              phone = this.phoneEdit.string;
              areaCode = this.countryCode.string;
              if (!Utils_1.Utils.IsPhone(phone)) {
                tips_1.Tips.Show("\u624b\u673a\u53f7\u9519\u8bef!");
                return [ 2 ];
              }
              if ("" == areaCode) {
                tips_1.Tips.Show("\u56fd\u9645\u7801\u4e0d\u80fd\u4e3a\u7a7a!");
                return [ 2 ];
              }
              return [ 4, Utils_1.Utils.Post(config_1.HttpPath.phoneCaptcha, {
                phoneAreaCode: areaCode,
                phoneNumber: phone
              }) ];

             case 1:
              res = _a.sent();
              console.log("\u8bf7\u6c42\u624b\u673a\u9a8c\u8bc1\u7801", JSON.stringify(res));
              if (200 != res.code) {
                cc.error("\u8bf7\u6c42\u9a8c\u8bc1\u7801\u5931\u8d25,\u7a0d\u540e\u518d\u8bd5!");
                return [ 2 ];
              }
              tips_1.Tips.Show("\u9a8c\u8bc1\u7801\u5df2\u53d1\u9001!");
              ttd.run();
              return [ 2 ];
            }
          });
        });
      };
      reset.prototype.nextPhoneAccount = function() {
        return __awaiter(this, void 0, void 0, function() {
          var phone, pwd, yzm, areaCode, info, res;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              phone = this.phoneEdit.string;
              pwd = this.phonePwdEdit.string;
              yzm = this.phoneCodeEdit.string;
              areaCode = this.countryCode.string;
              if (!Utils_1.Utils.IsPhone(phone)) {
                tips_1.Tips.Show("\u624b\u673a\u53f7\u4e0d\u5bf9!");
                return [ 2 ];
              }
              if (yzm.length < 6) {
                tips_1.Tips.Show("\u9a8c\u8bc1\u7801\u586b\u5199\u9519\u8bef");
                return [ 2 ];
              }
              if (pwd.length < 6) {
                tips_1.Tips.Show("\u5bc6\u7801\u4e0d\u80fd\u5c0f\u4e8e6\u4f4d!");
                return [ 2 ];
              }
              if ("" == areaCode) {
                tips_1.Tips.Show("\u56fd\u9645\u7801\u4e0d\u80fd\u4e3a\u7a7a!");
                return [ 2 ];
              }
              info = {
                phoneAreaCode: areaCode,
                phoneNumber: phone,
                loginPwd: pwd,
                captcha: yzm,
                sex: config_1.UserSex.BOY,
                longitude: "",
                latitude: "",
                ip: "",
                device: Utils_1.Utils.CheckDeviceType(),
                deviceInfo: "",
                userAgent: navigator.userAgent.toLowerCase()
              };
              console.log("\u624b\u673a\u6ce8\u518c\u4fe1\u606f", JSON.stringify(info));
              return [ 4, Utils_1.Utils.Post(config_1.HttpPath.phoneReg, info) ];

             case 1:
              res = _a.sent();
              console.log("\u624b\u673a\u6ce8\u518c\u8fd4\u56de\u4fe1\u606f", JSON.stringify(res));
              if (200 != res.code) {
                cc.error("\u6ce8\u518c\u5931\u8d25,code:" + res.code);
                tips_1.Tips.Show("\u6ce8\u518c\u5931\u8d25,\u7a0d\u540e\u518d\u8bd5!");
                return [ 2 ];
              }
              tips_1.Tips.Show("\u6ce8\u518c\u6210\u529f!");
              ViewManager_1.ViewManager.Open(config_1.ViewEnum.Login);
              return [ 2 ];
            }
          });
        });
      };
      reset.prototype.onSendMailCode = function() {
        return __awaiter(this, void 0, void 0, function() {
          var ttd, mail, res;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              ttd = this.sendMailCodeBtn.getComponent(TimeTickerDown_1.default);
              if (ttd.down) return [ 2 ];
              mail = this.mailEdit.string;
              if (!Utils_1.Utils.IsMail(mail)) {
                tips_1.Tips.Show("\u90ae\u7bb1\u683c\u5f0f\u9519\u8bef!");
                return [ 2 ];
              }
              return [ 4, Utils_1.Utils.Post(config_1.HttpPath.emailCaptcha, {
                email: mail
              }) ];

             case 1:
              res = _a.sent();
              console.log("\u8bf7\u6c42\u90ae\u7bb1\u9a8c\u8bc1\u7801", JSON.stringify(res));
              if (200 != res.code) {
                cc.error("\u8bf7\u6c42\u9a8c\u8bc1\u7801\u5931\u8d25,\u7a0d\u540e\u518d\u8bd5!");
                tips_1.Tips.Show("\u9a8c\u8bc1\u7801\u83b7\u53d6\u5931\u8d25,\u7a0d\u540e\u518d\u8bd5!");
                return [ 2 ];
              }
              tips_1.Tips.Show("\u9a8c\u8bc1\u7801\u5df2\u53d1\u9001,\u8bf7\u5230\u90ae\u7bb1\u67e5\u6536!");
              ttd.run();
              return [ 2 ];
            }
          });
        });
      };
      reset.prototype.nextMailAccount = function() {
        return __awaiter(this, void 0, void 0, function() {
          var mail, pwd, yzm, info, res;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              mail = this.mailEdit.string;
              pwd = this.mailPwdEdit.string;
              yzm = this.mailCodeEdit.string;
              if (!Utils_1.Utils.IsMail(mail)) {
                tips_1.Tips.Show("\u90ae\u7bb1\u683c\u5f0f\u4e0d\u5bf9!");
                return [ 2 ];
              }
              if (yzm.length < 6) {
                tips_1.Tips.Show("\u9a8c\u8bc1\u7801\u957f\u5ea6\u9519\u8bef");
                return [ 2 ];
              }
              if (pwd.length < 6) {
                tips_1.Tips.Show("\u5bc6\u7801\u4e0d\u80fd\u5c0f\u4e8e6\u4f4d!");
                return [ 2 ];
              }
              info = {
                email: mail,
                loginPwd: pwd,
                captcha: yzm,
                sex: config_1.UserSex.BOY,
                ip: "",
                longitude: "",
                latitude: "",
                device: Utils_1.Utils.CheckDeviceType(),
                deviceInfo: "",
                userAgent: navigator.userAgent.toLowerCase()
              };
              console.log("\u90ae\u7bb1\u6ce8\u518c\u4fe1\u606f", JSON.stringify(info));
              return [ 4, Utils_1.Utils.Post(config_1.HttpPath.emailReg, info) ];

             case 1:
              res = _a.sent();
              console.log("\u90ae\u7bb1\u6ce8\u518c\u4fe1\u606f\u8fd4\u56de", JSON.stringify(res));
              if (200 != res.code) {
                cc.error("\u6ce8\u518c\u5931\u8d25,code:" + res.code);
                return [ 2 ];
              }
              tips_1.Tips.Show("\u6ce8\u518c\u6210\u529f!");
              ViewManager_1.ViewManager.Open(config_1.ViewEnum.Login);
              return [ 2 ];
            }
          });
        });
      };
      __decorate([ property(cc.Node) ], reset.prototype, "backBtn", void 0);
      __decorate([ property(cc.Node) ], reset.prototype, "selectCountryCodeBtn", void 0);
      __decorate([ property(cc.Label) ], reset.prototype, "countryCode", void 0);
      __decorate([ property(cc.Node) ], reset.prototype, "sendPhoneCodeBtn", void 0);
      __decorate([ property(cc.EditBox) ], reset.prototype, "phoneEdit", void 0);
      __decorate([ property(cc.EditBox) ], reset.prototype, "phoneCodeEdit", void 0);
      __decorate([ property(cc.EditBox) ], reset.prototype, "phonePwdEdit", void 0);
      __decorate([ property(cc.Node) ], reset.prototype, "phoneNextBtn", void 0);
      __decorate([ property(cc.Node) ], reset.prototype, "sendMailCodeBtn", void 0);
      __decorate([ property(cc.EditBox) ], reset.prototype, "mailEdit", void 0);
      __decorate([ property(cc.EditBox) ], reset.prototype, "mailCodeEdit", void 0);
      __decorate([ property(cc.EditBox) ], reset.prototype, "mailPwdEdit", void 0);
      __decorate([ property(cc.Node) ], reset.prototype, "mailNextBtn", void 0);
      reset = __decorate([ ccclass ], reset);
      return reset;
    }(ComponentBase_1.default);
    exports.default = reset;
    cc._RF.pop();
  }, {
    "../../../00_base/script/common/ComponentBase": void 0,
    "../../../00_base/script/common/CountryCode": void 0,
    "../../../00_base/script/common/TimeTickerDown": void 0,
    "../../../00_base/script/uiutils/tips": void 0,
    "../config/Utils": "Utils",
    "../config/ViewManager": "ViewManager",
    "../config/config": "config"
  } ],
  setting: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eb0509zNZNGk4/2tizeheU/", "setting");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ComponentBase_1 = require("../../../00_base/script/common/ComponentBase");
    var ViewManager_1 = require("../config/ViewManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.backBtn = null;
        _this.changeAccount = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        this.TouchOn(this.backBtn, this.alertDestory);
        this.TouchOn(this.changeAccount, this.onChangeAccount);
      };
      NewClass.prototype.onChangeAccount = function() {
        ViewManager_1.ViewManager.Alert("exitAccount");
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "backBtn", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "changeAccount", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(ComponentBase_1.default);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../00_base/script/common/ComponentBase": void 0,
    "../config/ViewManager": "ViewManager"
  } ],
  wo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f2b5c2exiJAo4iMYRrZBJDn", "wo");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ComponentBase_1 = require("../../../00_base/script/common/ComponentBase");
    var ViewManager_1 = require("../config/ViewManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.setting = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        this.TouchOn(this.setting, this.openSetting);
      };
      NewClass.prototype.openSetting = function() {
        ViewManager_1.ViewManager.Alert("setting");
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "setting", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(ComponentBase_1.default);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../00_base/script/common/ComponentBase": void 0,
    "../config/ViewManager": "ViewManager"
  } ],
  yiChuangJianJuLeBuItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4fe99Jy6KpIV6L0BeAKeemn", "yiChuangJianJuLeBuItem");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var yiChuangJianJuLeBuItem = function(_super) {
      __extends(yiChuangJianJuLeBuItem, _super);
      function yiChuangJianJuLeBuItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.mingCheng = null;
        _this.miaoShu = null;
        return _this;
      }
      yiChuangJianJuLeBuItem.prototype.run = function(info) {
        this.mingCheng.string = info.name;
        this.miaoShu.string = info.description;
      };
      __decorate([ property(cc.Label) ], yiChuangJianJuLeBuItem.prototype, "mingCheng", void 0);
      __decorate([ property(cc.Label) ], yiChuangJianJuLeBuItem.prototype, "miaoShu", void 0);
      yiChuangJianJuLeBuItem = __decorate([ ccclass ], yiChuangJianJuLeBuItem);
      return yiChuangJianJuLeBuItem;
    }(cc.Component);
    exports.default = yiChuangJianJuLeBuItem;
    cc._RF.pop();
  }, {} ],
  yiJiaRuJuLeBuItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "91fdbcX32lDeLcd0TFy7oEE", "yiJiaRuJuLeBuItem");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var yiJiaRuJuLeBuItem = function(_super) {
      __extends(yiJiaRuJuLeBuItem, _super);
      function yiJiaRuJuLeBuItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.mingCheng = null;
        _this.miaoShu = null;
        return _this;
      }
      yiJiaRuJuLeBuItem.prototype.start = function() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onOpenJuLeBu, this);
      };
      yiJiaRuJuLeBuItem.prototype.onOpenJuLeBu = function() {};
      yiJiaRuJuLeBuItem.prototype.run = function(info) {
        this.mingCheng.string = info.name;
        this.miaoShu.string = info.description;
      };
      __decorate([ property(cc.Label) ], yiJiaRuJuLeBuItem.prototype, "mingCheng", void 0);
      __decorate([ property(cc.Label) ], yiJiaRuJuLeBuItem.prototype, "miaoShu", void 0);
      yiJiaRuJuLeBuItem = __decorate([ ccclass ], yiJiaRuJuLeBuItem);
      return yiJiaRuJuLeBuItem;
    }(cc.Component);
    exports.default = yiJiaRuJuLeBuItem;
    cc._RF.pop();
  }, {} ]
}, {}, [ "UserInfo", "Utils", "ViewManager", "config", "cwebsocket", "i18n", "hall", "open", "faxian", "julebu", "yiChuangJianJuLeBuItem", "yiJiaRuJuLeBuItem", "login", "reg", "reset", "wo", "alertCreateJuLeBu", "alertInputYzm", "alertJiaRuJlb", "bottomtoggle", "chuangjianjulebu", "counttrycode", "exitAccount", "julebuliebiao", "setting" ]);
//# sourceMappingURL=index.js.map
