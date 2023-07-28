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
  bundleLoader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f60a2lJhRtLq5XorHkvKL8s", "bundleLoader");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.bundleLoader = void 0;
    window["REMOTE_SERVER_ROOT"] = cc.assetManager.downloader.remoteServerAddress;
    window["REMOTE_BUNDLE_MANIFEST"] = REMOTE_SERVER_ROOT + "remote/manifest.json";
    var bundleLoader;
    (function(bundleLoader) {
      var ENUM_BUNDLE;
      (function(ENUM_BUNDLE) {
        ENUM_BUNDLE["BASE"] = "00_base";
        ENUM_BUNDLE["HALL"] = "01_hall";
        ENUM_BUNDLE["GAME"] = "02_game";
      })(ENUM_BUNDLE = bundleLoader.ENUM_BUNDLE || (bundleLoader.ENUM_BUNDLE = {}));
      bundleLoader.ENUM_BUNDLE_SAVE = {};
    })(bundleLoader = exports.bundleLoader || (exports.bundleLoader = {}));
    function regLocalStorage(storageKey) {
      return function(target, propertyKey) {
        Object.defineProperty(target, propertyKey, {
          get: function() {
            return cc.sys.localStorage.getItem(storageKey);
          },
          set: function(val) {
            null == val ? cc.sys.localStorage.removeItem(storageKey) : cc.sys.localStorage.setItem(storageKey, val);
          }
        });
      };
    }
    (function(bundleLoader) {
      var _model = function() {
        function _model() {}
        Object.defineProperty(_model.prototype, "manifest", {
          get: function() {
            if (null == this.storeManifest) return null;
            return JSON.parse(this.storeManifest);
          },
          set: function(value) {
            this.storeManifest = null == value ? null : JSON.stringify(value);
          },
          enumerable: false,
          configurable: true
        });
        _model.prototype.checkBundleVersion = function() {
          return __awaiter(this, void 0, void 0, function() {
            var manifest, bundleName;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                false, true;
                return [ 2 ];

               case 1:
                manifest = _a.sent();
                if (null == manifest) return [ 2, false ];
                for (bundleName in this.manifest) if (this.manifest[bundleName] != manifest[bundleName] && null != cc.assetManager.getBundle(bundleName)) {
                  cc.log("bundle \u5b58\u5728\u66f4\u65b0 \u540d\uff1a" + bundleName + " \u5f53\u524d\u7248\u672c:" + this.manifest[bundleName] + " \u8fdc\u7a0b\u7248\u672c:" + manifest[bundleName]);
                  return [ 2, true ];
                }
                cc.log("Bundle\u7248\u672c\u68c0\u67e5\u5b8c\u6210");
                return [ 2, false ];
              }
            });
          });
        };
        _model.prototype.getRemoteBundleVersion = function() {
          return __awaiter(this, void 0, void 0, function() {
            var manifest;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                false, true;
                return [ 2 ];

               case 1:
                manifest = _a.sent();
                return [ 2, manifest ];
              }
            });
          });
        };
        _model.prototype.loadBundle = function(enumBundle) {
          return __awaiter(this, void 0, void 0, function() {
            var _this = this;
            return __generator(this, function(_a) {
              return [ 2, new Promise(function(resolve, reject) {
                var cb = function(err, bundle) {
                  if (err) {
                    cc.error("\u52a0\u8f7dBundle\u9519\u8bef" + JSON.stringify(err));
                    reject(err);
                    return;
                  }
                  bundleLoader.ENUM_BUNDLE_SAVE[enumBundle] = bundle;
                  console.log("bundle\u5305" + enumBundle + "\u52a0\u8f7d\u5b8c\u6210");
                  resolve(bundle);
                };
                false;
                cc.assetManager.loadBundle(enumBundle, cb);
              }) ];
            });
          });
        };
        _model.prototype.Bundle = function(enumBundle) {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              return [ 2 ];
            });
          });
        };
        __decorate([ regLocalStorage("BUNDLE_MANIFEST") ], _model.prototype, "storeManifest", void 0);
        return _model;
      }();
      bundleLoader.model = new _model();
    })(bundleLoader = exports.bundleLoader || (exports.bundleLoader = {}));
    cc._RF.pop();
  }, {} ],
  gameInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "030a67LqKFBo6g77saIc49L", "gameInfo");
    cc._RF.pop();
  }, {} ],
  start: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e1b90/rohdEk4SdmmEZANaD", "start");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var bundleLoader_1 = require("./bundleLoader");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Helloworld = function(_super) {
      __extends(Helloworld, _super);
      function Helloworld() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Helloworld.prototype.start = function() {
        console.log("\u573a\u666f\u542f\u52a8!");
        this.load();
      };
      Helloworld.prototype.loadScene = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, bundleLoader_1.bundleLoader.model.loadBundle(bundleLoader_1.bundleLoader.ENUM_BUNDLE.BASE) ];

             case 1:
              _a.sent();
              return [ 4, bundleLoader_1.bundleLoader.model.loadBundle(bundleLoader_1.bundleLoader.ENUM_BUNDLE.HALL) ];

             case 2:
              _a.sent();
              cc.director.loadScene("hall");
              return [ 2 ];
            }
          });
        });
      };
      Helloworld.prototype.load = function() {
        return __awaiter(this, void 0, void 0, function() {
          var remoteManifest, error_1;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 2, , 3 ]);
              return [ 4, bundleLoader_1.bundleLoader.model.getRemoteBundleVersion() ];

             case 1:
              remoteManifest = _a.sent();
              null != remoteManifest && (bundleLoader_1.bundleLoader.model.manifest = remoteManifest);
              this.loadScene();
              return [ 3, 3 ];

             case 2:
              error_1 = _a.sent();
              if (null != bundleLoader_1.bundleLoader.model.manifest) this.loadScene(); else {
                cc.error("\u52a0\u8f7d\u573a\u666f\u9519\u8bef, 5 \u79d2\u540e\u91cd\u8bd5" + JSON.stringify(error_1));
                this.scheduleOnce(function() {
                  return _this.load();
                }, 5);
              }
              return [ 3, 3 ];

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      Helloworld = __decorate([ ccclass ], Helloworld);
      return Helloworld;
    }(cc.Component);
    exports.default = Helloworld;
    cc._RF.pop();
  }, {
    "./bundleLoader": "bundleLoader"
  } ]
}, {}, [ "gameInfo", "bundleLoader", "start" ]);
//# sourceMappingURL=index.js.map
