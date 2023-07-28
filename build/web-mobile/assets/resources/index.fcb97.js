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
  Languages: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "565e8x6PUdFsZ8dYBtsAcdx", "Languages");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LanguagesCfg = void 0;
    exports.LanguagesCfg = {
      0: {
        0: "\u52a0\u5165\u4ff1\u4e50\u90e8",
        1: "\u4ff1\u4e50\u90e8/\u540d\u7247ID",
        2: "\u521b\u5efa\u4ff1\u4e50\u90e8",
        3: "\u8f93\u5165\u4ff1\u4e50\u90e8\u540d\u79f0",
        4: "\u521b\u5efa\u4ff1\u4e50\u90e8",
        5: "\u4ff1\u4e50\u90e8\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a!",
        6: "\u5bfb\u627e\u5fd7\u540c\u9053\u5408\u7684\u670b\u53cb",
        7: "\u6240\u5728\u5730\u533a",
        8: "\u8bf7\u9009\u62e9",
        9: "\u5efa\u7acb\u4ff1\u4e50\u90e8",
        10: "\u60a8\u65e0\u6cd5\u518d\u5efa\u7acb\u4ff1\u4e50\u90e8",
        11: "\u5347\u7ea7VIP"
      },
      1: {
        0: "en\u52a0\u5165\u4ff1\u4e50\u90e8",
        1: "en\u4ff1\u4e50\u90e8/\u540d\u7247ID",
        2: "en\u521b\u5efa\u4ff1\u4e50\u90e8",
        3: "en\u8f93\u5165\u4ff1\u4e50\u90e8\u540d\u79f0",
        4: "en\u521b\u5efa\u4ff1\u4e50\u90e8",
        5: "en\u4ff1\u4e50\u90e8\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a!",
        6: "en\u5bfb\u627e\u5fd7\u540c\u9053\u5408\u7684\u670b\u53cb",
        7: "en\u6240\u5728\u5730\u533a",
        8: "en\u8bf7\u9009\u62e9",
        9: "en\u5efa\u7acb\u4ff1\u4e50\u90e8",
        10: "en\u60a8\u65e0\u6cd5\u518d\u5efa\u7acb\u4ff1\u4e50\u90e8",
        11: "en\u5347\u7ea7VIP"
      }
    };
    cc._RF.pop();
  }, {} ]
}, {}, [ "Languages" ]);
//# sourceMappingURL=index.js.map
