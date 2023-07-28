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
  ClickHide: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0929b8NaixIbKsF2S2pIKko", "ClickHide");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.WillHideTartget = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchNode, this);
      };
      NewClass.prototype.onTouchNode = function() {
        this.WillHideTartget.active = false;
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "WillHideTartget", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  CloseView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "675d3rrX8FLI6wnz4ghIyiS", "CloseView");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CloseView = function(_super) {
      __extends(CloseView, _super);
      function CloseView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.WillCloseTartget = null;
        return _this;
      }
      CloseView.prototype.start = function() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchNode, this);
      };
      CloseView.prototype.onTouchNode = function() {
        this.WillCloseTartget.destroy();
      };
      __decorate([ property(cc.Node) ], CloseView.prototype, "WillCloseTartget", void 0);
      CloseView = __decorate([ ccclass ], CloseView);
      return CloseView;
    }(cc.Component);
    exports.default = CloseView;
    cc._RF.pop();
  }, {} ],
  ComponentBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0f083/vumVP77OTLWsYwiZO", "ComponentBase");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventManger_1 = require("./EventManger");
    var property = cc._decorator.property;
    var ComponentBase = function(_super) {
      __extends(ComponentBase, _super);
      function ComponentBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.events = [];
        return _this;
      }
      ComponentBase.prototype.TouchOn = function(target, cb, cbo) {
        void 0 === cbo && (cbo = this);
        if (target && cb) {
          this.events.push({
            target: target,
            name: cc.Node.EventType.TOUCH_START,
            cb: cb,
            cbo: cbo
          });
          target.on(cc.Node.EventType.TOUCH_END, cb, cbo);
        }
      };
      ComponentBase.prototype.EventOn = function(name, cb, cbo) {
        void 0 === cbo && (cbo = this);
        if (name && name.length > 0 && cb) {
          this.events.push({
            target: null,
            name: name,
            cb: cb,
            cbo: cbo
          });
          EventManger_1.EventManger.on(name, cb, cbo);
        }
      };
      ComponentBase.prototype.onDestroy = function() {
        this.events.forEach(function(ele) {
          ele.target ? ele.target.off(ele.name, ele.cb, ele.cbo) : EventManger_1.EventManger.off(ele.name, ele.cb, ele.cbo);
        });
      };
      ComponentBase.prototype.alertDestory = function() {
        this.node.destroy();
      };
      return ComponentBase;
    }(cc.Component);
    exports.default = ComponentBase;
    cc._RF.pop();
  }, {
    "./EventManger": "EventManger"
  } ],
  CountryCode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8b705y6DG9HaoJWFQiyJjvB", "CountryCode");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CountryCodeData = void 0;
    exports.CountryCodeData = [ {
      id: 0,
      code: "1",
      zh: "\u7f8e\u56fd",
      en: ""
    }, {
      id: 1,
      code: "1",
      zh: "\u52a0\u62ff\u5927",
      en: ""
    }, {
      id: 2,
      code: "1-242",
      zh: "\u5df4\u54c8\u9a6c",
      en: ""
    }, {
      id: 3,
      code: "1-246",
      zh: "\u5df4\u5df4\u591a\u65af",
      en: ""
    }, {
      id: 4,
      code: "1-264",
      zh: "\u5b89\u572d\u62c9\u5c9b",
      en: ""
    }, {
      id: 5,
      code: "1-268",
      zh: "\u5b89\u63d0\u74dc",
      en: ""
    }, {
      id: 6,
      code: "1-268",
      zh: "\u5df4\u5e03\u8fbe",
      en: ""
    }, {
      id: 7,
      code: "1-284",
      zh: "\u82f1\u5c5e\u7ef4\u4eac\u7fa4\u5c9b",
      en: ""
    }, {
      id: 8,
      code: "1-340",
      zh: "\u7f8e\u5c5e\u7ef4\u5c14\u4eac\u7fa4\u5c9b",
      en: ""
    }, {
      id: 9,
      code: "1-345",
      zh: "\u5f00\u66fc\u7fa4\u5c9b",
      en: ""
    }, {
      id: 10,
      code: "1-441",
      zh: "\u767e\u6155\u5927",
      en: ""
    }, {
      id: 11,
      code: "1-473",
      zh: "\u683c\u6797\u7eb3\u8fbe",
      en: ""
    }, {
      id: 12,
      code: "1-649",
      zh: "\u7279\u514b\u65af",
      en: ""
    }, {
      id: 13,
      code: "1-649",
      zh: "\u51ef\u79d1\u65af\u7fa4\u5c9b",
      en: ""
    }, {
      id: 14,
      code: "1-664",
      zh: "\u8499\u7279\u585e\u62c9\u7279",
      en: ""
    }, {
      id: 15,
      code: "1-670",
      zh: "\u5317\u9a6c\u91cc\u4e9a\u7eb3\u7fa4\u5c9b",
      en: ""
    }, {
      id: 16,
      code: "1-671",
      zh: "\u5173\u5c9b",
      en: ""
    }, {
      id: 17,
      code: "1-684",
      zh: "\u7f8e\u5c5e\u8428\u6469\u4e9a",
      en: ""
    }, {
      id: 18,
      code: "1-758",
      zh: "\u5723\u5362\u897f\u4e9a",
      en: ""
    }, {
      id: 19,
      code: "1-767",
      zh: "\u591a\u7c73\u5c3c\u514b",
      en: ""
    }, {
      id: 20,
      code: "1-784",
      zh: "\u5723\u6587\u68ee\u7279",
      en: ""
    }, {
      id: 21,
      code: "1-784",
      zh: "\u683c\u6797\u7eb3\u4e01\u65af",
      en: ""
    }, {
      id: 22,
      code: "1-787",
      zh: "\u6ce2\u591a\u9ece\u5404",
      en: ""
    }, {
      id: 23,
      code: "1-809",
      zh: "\u591a\u7c73\u5c3c\u52a0\u5171\u548c\u56fd",
      en: ""
    }, {
      id: 24,
      code: "1-868",
      zh: "\u7279\u7acb\u5c3c\u8fbe\u548c\u591a\u5df4\u54e5",
      en: ""
    }, {
      id: 25,
      code: "1-869",
      zh: "\u5723\u57fa\u8328\u548c\u5c3c\u7ef4\u65af",
      en: ""
    }, {
      id: 26,
      code: "1-876",
      zh: "\u7259\u4e70\u52a0",
      en: ""
    }, {
      id: 27,
      code: "1-939",
      zh: "\u6ce2\u591a\u9ece\u5404",
      en: ""
    }, {
      id: 28,
      code: "20",
      zh: "\u57c3\u53ca",
      en: ""
    }, {
      id: 29,
      code: "211",
      zh: "\u5357\u82cf\u4e39",
      en: ""
    }, {
      id: 30,
      code: "212",
      zh: "\u6469\u6d1b\u54e5",
      en: ""
    }, {
      id: 31,
      code: "213",
      zh: "\u963f\u5c14\u53ca\u5229\u4e9a",
      en: ""
    }, {
      id: 32,
      code: "216",
      zh: "\u7a81\u5c3c\u65af",
      en: ""
    }, {
      id: 33,
      code: "218",
      zh: "\u5229\u6bd4\u4e9a",
      en: ""
    }, {
      id: 34,
      code: "220",
      zh: "\u5188\u6bd4\u4e9a",
      en: ""
    }, {
      id: 35,
      code: "221",
      zh: "\u585e\u5185\u52a0\u5c14",
      en: ""
    }, {
      id: 36,
      code: "222",
      zh: "\u6bdb\u91cc\u5854\u5c3c\u4e9a",
      en: ""
    }, {
      id: 37,
      code: "223",
      zh: "\u9a6c\u91cc",
      en: ""
    }, {
      id: 38,
      code: "224",
      zh: "\u51e0\u5185\u4e9a",
      en: ""
    }, {
      id: 39,
      code: "225",
      zh: "\u79d1\u7279\u8fea\u74e6",
      en: ""
    }, {
      id: 40,
      code: "226",
      zh: "\u5e03\u57fa\u7eb3\u6cd5\u7d22",
      en: ""
    }, {
      id: 41,
      code: "227",
      zh: "\u5c3c\u65e5\u5c14",
      en: ""
    }, {
      id: 42,
      code: "228",
      zh: "\u591a\u54e5",
      en: ""
    }, {
      id: 43,
      code: "229",
      zh: "\u8d1d\u5b81",
      en: ""
    }, {
      id: 44,
      code: "230",
      zh: "\u6bdb\u91cc\u6c42\u65af",
      en: ""
    }, {
      id: 45,
      code: "231",
      zh: "\u5229\u6bd4\u91cc\u4e9a",
      en: ""
    }, {
      id: 46,
      code: "232",
      zh: "\u585e\u62c9\u5229\u6602",
      en: ""
    }, {
      id: 47,
      code: "233",
      zh: "\u52a0\u7eb3",
      en: ""
    }, {
      id: 48,
      code: "234",
      zh: "\u5c3c\u65e5\u5229\u4e9a",
      en: ""
    }, {
      id: 49,
      code: "235",
      zh: "\u4e4d\u5f97",
      en: ""
    }, {
      id: 50,
      code: "236",
      zh: "\u4e2d\u975e\u5171\u548c\u56fd",
      en: ""
    }, {
      id: 51,
      code: "237",
      zh: "\u5580\u9ea6\u9686",
      en: ""
    }, {
      id: 52,
      code: "238",
      zh: "\u4f5b\u5f97\u89d2",
      en: ""
    }, {
      id: 53,
      code: "239",
      zh: "\u5723\u591a\u7f8e\u548c\u666e\u6797\u897f\u6bd4",
      en: ""
    }, {
      id: 54,
      code: "240",
      zh: "\u8d64\u9053\u51e0\u5185\u4e9a",
      en: ""
    }, {
      id: 55,
      code: "241",
      zh: "\u52a0\u84ec",
      en: ""
    }, {
      id: 56,
      code: "242",
      zh: "\u521a\u679c\u5171\u548c\u56fd(\u5e03)",
      en: ""
    }, {
      id: 57,
      code: "243",
      zh: "\u521a\u679c\u6c11\u4e3b\u5171\u548c\u56fd(\u91d1)",
      en: ""
    }, {
      id: 58,
      code: "244",
      zh: "\u5b89\u54e5\u62c9",
      en: ""
    }, {
      id: 59,
      code: "245",
      zh: "\u51e0\u5185\u4e9a\u6bd4\u7ecd",
      en: ""
    }, {
      id: 60,
      code: "246",
      zh: "\u8fea\u6208\u52a0\u897f\u4e9a\u5c9b",
      en: ""
    }, {
      id: 61,
      code: "247",
      zh: "\u963f\u68ee\u677e\u5c9b",
      en: ""
    }, {
      id: 62,
      code: "248",
      zh: "\u585e\u820c\u5c14",
      en: ""
    }, {
      id: 63,
      code: "249",
      zh: "\u82cf\u4e39",
      en: ""
    }, {
      id: 64,
      code: "250",
      zh: "\u5362\u65fa\u8fbe",
      en: ""
    }, {
      id: 65,
      code: "251",
      zh: "\u57c3\u585e\u4fc4\u6bd4\u4e9a",
      en: ""
    }, {
      id: 66,
      code: "252",
      zh: "\u7d22\u9a6c\u91cc",
      en: ""
    }, {
      id: 67,
      code: "253",
      zh: "\u5409\u5e03\u63d0",
      en: ""
    }, {
      id: 68,
      code: "254",
      zh: "\u80af\u5c3c\u4e9a",
      en: ""
    }, {
      id: 69,
      code: "255",
      zh: "\u5766\u6851\u5c3c\u4e9a",
      en: ""
    }, {
      id: 70,
      code: "256",
      zh: "\u4e4c\u5e72\u8fbe",
      en: ""
    }, {
      id: 71,
      code: "257",
      zh: "\u5e03\u9686\u8fea",
      en: ""
    }, {
      id: 72,
      code: "258",
      zh: "\u83ab\u6851\u6bd4\u514b",
      en: ""
    }, {
      id: 73,
      code: "259",
      zh: "\u6851\u7ed9\u5df4\u5c14",
      en: ""
    }, {
      id: 74,
      code: "260",
      zh: "\u8d5e\u6bd4\u4e9a",
      en: ""
    }, {
      id: 75,
      code: "261",
      zh: "\u9a6c\u8fbe\u52a0\u65af\u52a0",
      en: ""
    }, {
      id: 76,
      code: "262",
      zh: "\u7559\u5c3c\u6c6a",
      en: ""
    }, {
      id: 77,
      code: "263",
      zh: "\u6d25\u5df4\u5e03\u97e6",
      en: ""
    }, {
      id: 78,
      code: "264",
      zh: "\u7eb3\u7c73\u6bd4\u4e9a",
      en: ""
    }, {
      id: 79,
      code: "265",
      zh: "\u9a6c\u62c9\u7ef4",
      en: ""
    }, {
      id: 80,
      code: "266",
      zh: "\u83b1\u7d22\u6258",
      en: ""
    }, {
      id: 81,
      code: "267",
      zh: "\u535a\u8328\u74e6\u7eb3",
      en: ""
    }, {
      id: 82,
      code: "268",
      zh: "\u65af\u5a01\u58eb\u5170",
      en: ""
    }, {
      id: 83,
      code: "269",
      zh: "\u79d1\u6469\u7f57",
      en: ""
    }, {
      id: 84,
      code: "269",
      zh: "\u9a6c\u7ea6\u7279",
      en: ""
    }, {
      id: 85,
      code: "27",
      zh: "\u5357\u975e",
      en: ""
    }, {
      id: 86,
      code: "290",
      zh: "\u5723\u8d6b\u52d2\u62ff",
      en: ""
    }, {
      id: 87,
      code: "291",
      zh: "\u5384\u7acb\u7279\u91cc\u4e9a",
      en: ""
    }, {
      id: 88,
      code: "297",
      zh: "\u963f\u9c81\u5df4",
      en: ""
    }, {
      id: 89,
      code: "298",
      zh: "\u6cd5\u7f57\u7fa4\u5c9b",
      en: ""
    }, {
      id: 90,
      code: "299",
      zh: "\u683c\u9675\u5170",
      en: ""
    }, {
      id: 91,
      code: "30",
      zh: "\u5e0c\u814a",
      en: ""
    }, {
      id: 92,
      code: "31",
      zh: "\u8377\u5170",
      en: ""
    }, {
      id: 93,
      code: "32",
      zh: "\u6bd4\u5229\u65f6",
      en: ""
    }, {
      id: 94,
      code: "33",
      zh: "\u6cd5\u56fd",
      en: ""
    }, {
      id: 95,
      code: "34",
      zh: "\u897f\u73ed\u7259",
      en: ""
    }, {
      id: 96,
      code: "350",
      zh: "\u76f4\u5e03\u7f57\u9640",
      en: ""
    }, {
      id: 97,
      code: "351",
      zh: "\u8461\u8404\u7259",
      en: ""
    }, {
      id: 98,
      code: "352",
      zh: "\u5362\u68ee\u5821",
      en: ""
    }, {
      id: 99,
      code: "353",
      zh: "\u7231\u5c14\u5170",
      en: ""
    }, {
      id: 100,
      code: "354",
      zh: "\u51b0\u5c9b",
      en: ""
    }, {
      id: 101,
      code: "355",
      zh: "\u963f\u5c14\u5df4\u5c3c\u4e9a",
      en: ""
    }, {
      id: 102,
      code: "356",
      zh: "\u9a6c\u8033\u4ed6",
      en: ""
    }, {
      id: 103,
      code: "357",
      zh: "\u585e\u6d66\u8def\u65af",
      en: ""
    }, {
      id: 104,
      code: "358",
      zh: "\u82ac\u5170",
      en: ""
    }, {
      id: 105,
      code: "359",
      zh: "\u4fdd\u52a0\u5229\u4e9a",
      en: ""
    }, {
      id: 106,
      code: "36",
      zh: "\u5308\u7259\u5229",
      en: ""
    }, {
      id: 107,
      code: "37",
      zh: "\u4e1c\u5fb7",
      en: ""
    }, {
      id: 108,
      code: "370",
      zh: "\u7acb\u9676\u5b9b",
      en: ""
    }, {
      id: 109,
      code: "371",
      zh: "\u62c9\u8131\u7ef4\u4e9a",
      en: ""
    }, {
      id: 110,
      code: "372",
      zh: "\u7231\u6c99\u5c3c\u4e9a",
      en: ""
    }, {
      id: 111,
      code: "373",
      zh: "\u6469\u5c14\u591a\u74e6",
      en: ""
    }, {
      id: 112,
      code: "374",
      zh: "\u4e9a\u7f8e\u5c3c\u4e9a",
      en: ""
    }, {
      id: 113,
      code: "375",
      zh: "\u767d\u4fc4\u7f57\u65af",
      en: ""
    }, {
      id: 114,
      code: "376",
      zh: "\u5b89\u9053\u5c14",
      en: ""
    }, {
      id: 115,
      code: "377",
      zh: "\u6469\u7eb3\u54e5",
      en: ""
    }, {
      id: 116,
      code: "378",
      zh: "\u5723\u9a6c\u529b\u8bfa",
      en: ""
    }, {
      id: 117,
      code: "379",
      zh: "\u68b5\u8482\u5188",
      en: ""
    }, {
      id: 118,
      code: "38",
      zh: "\u5357\u65af\u62c9\u592b",
      en: ""
    }, {
      id: 119,
      code: "380",
      zh: "\u4e4c\u514b\u5170",
      en: ""
    }, {
      id: 120,
      code: "381",
      zh: "\u585e\u5c14\u7ef4\u4e9a",
      en: ""
    }, {
      id: 121,
      code: "382",
      zh: "\u9ed1\u5c71",
      en: ""
    }, {
      id: 122,
      code: "385",
      zh: "\u514b\u7f57\u5730\u4e9a",
      en: ""
    }, {
      id: 123,
      code: "386",
      zh: "\u65af\u6d1b\u6587\u5c3c\u4e9a",
      en: ""
    }, {
      id: 124,
      code: "387",
      zh: "\u6ce2\u9ed1",
      en: ""
    }, {
      id: 125,
      code: "388",
      zh: "\u6b27\u6d32\u7535\u8bdd\u53f7\u7801\u7a7a\u95f4(\u73af\u6b27\u6d32\u670d\u52a1)",
      en: ""
    }, {
      id: 126,
      code: "389",
      zh: "\u9a6c\u5176\u987f",
      en: ""
    }, {
      id: 127,
      code: "39",
      zh: "\u610f\u5927\u5229",
      en: ""
    }, {
      id: 128,
      code: "40",
      zh: "\u7f57\u9a6c\u5c3c\u4e9a",
      en: ""
    }, {
      id: 129,
      code: "41",
      zh: "\u745e\u58eb",
      en: ""
    }, {
      id: 130,
      code: "42",
      zh: "\u6377\u514b\u65af\u6d1b\u4f10\u514b",
      en: ""
    }, {
      id: 131,
      code: "420",
      zh: "\u6377\u514b\u5171\u548c\u56fd",
      en: ""
    }, {
      id: 132,
      code: "421",
      zh: "\u65af\u6d1b\u4f10\u514b",
      en: ""
    }, {
      id: 133,
      code: "423",
      zh: "\u5217\u652f\u6566\u58eb\u767b",
      en: ""
    }, {
      id: 134,
      code: "43",
      zh: "\u5965\u5730\u5229",
      en: ""
    }, {
      id: 135,
      code: "44",
      zh: "\u82f1\u56fd",
      en: ""
    }, {
      id: 136,
      code: "45",
      zh: "\u4e39\u9ea6",
      en: ""
    }, {
      id: 137,
      code: "46",
      zh: "\u745e\u5178",
      en: ""
    }, {
      id: 138,
      code: "47",
      zh: "\u632a\u5a01",
      en: ""
    }, {
      id: 139,
      code: "48",
      zh: "\u6ce2\u5170",
      en: ""
    }, {
      id: 140,
      code: "49",
      zh: "\u5fb7\u56fd",
      en: ""
    }, {
      id: 141,
      code: "500",
      zh: "\u798f\u514b\u5170\u7fa4\u5c9b",
      en: ""
    }, {
      id: 142,
      code: "501",
      zh: "\u4f2f\u5229\u5179",
      en: ""
    }, {
      id: 143,
      code: "502",
      zh: "\u5371\u5730\u9a6c\u62c9",
      en: ""
    }, {
      id: 144,
      code: "503",
      zh: "\u8428\u5c14\u74e6\u591a",
      en: ""
    }, {
      id: 145,
      code: "504",
      zh: "\u6d2a\u90fd\u62c9\u65af",
      en: ""
    }, {
      id: 146,
      code: "505",
      zh: "\u5c3c\u52a0\u62c9\u74dc",
      en: ""
    }, {
      id: 147,
      code: "506",
      zh: "\u54e5\u65af\u8fbe\u9ece\u52a0",
      en: ""
    }, {
      id: 148,
      code: "507",
      zh: "\u5df4\u62ff\u9a6c",
      en: ""
    }, {
      id: 149,
      code: "508",
      zh: "\u5723\u76ae\u57c3\u5c14",
      en: ""
    }, {
      id: 150,
      code: "508",
      zh: "\u5bc6\u514b\u9686\u7fa4\u5c9b",
      en: ""
    }, {
      id: 151,
      code: "509",
      zh: "\u6d77\u5730",
      en: ""
    }, {
      id: 152,
      code: "51",
      zh: "\u79d8\u9c81",
      en: ""
    }, {
      id: 153,
      code: "52",
      zh: "\u58a8\u897f\u54e5",
      en: ""
    }, {
      id: 154,
      code: "53",
      zh: "\u53e4\u5df4",
      en: ""
    }, {
      id: 155,
      code: "54",
      zh: "\u963f\u6839\u5ef7",
      en: ""
    }, {
      id: 156,
      code: "55",
      zh: "\u5df4\u897f",
      en: ""
    }, {
      id: 157,
      code: "56",
      zh: "\u667a\u5229",
      en: ""
    }, {
      id: 158,
      code: "57",
      zh: "\u54e5\u4f26\u6bd4\u4e9a",
      en: ""
    }, {
      id: 159,
      code: "58",
      zh: "\u59d4\u5185\u745e\u62c9",
      en: ""
    }, {
      id: 160,
      code: "590",
      zh: "\u74dc\u5fb7\u7f57\u666e",
      en: ""
    }, {
      id: 161,
      code: "590",
      zh: "\u6cd5\u5c5e\u5723\u9a6c\u4e01",
      en: ""
    }, {
      id: 162,
      code: "590",
      zh: "\u6cd5\u5c5e\u5723\u5df4\u6cf0\u52d2\u7c73\u5c9b",
      en: ""
    }, {
      id: 163,
      code: "591",
      zh: "\u73bb\u5229\u7ef4\u4e9a",
      en: ""
    }, {
      id: 164,
      code: "592",
      zh: "\u572d\u4e9a\u90a3",
      en: ""
    }, {
      id: 165,
      code: "593",
      zh: "\u5384\u74dc\u591a\u5c14",
      en: ""
    }, {
      id: 166,
      code: "594",
      zh: "\u6cd5\u5c5e\u572d\u4e9a\u90a3",
      en: ""
    }, {
      id: 167,
      code: "595",
      zh: "\u5df4\u62c9\u572d",
      en: ""
    }, {
      id: 168,
      code: "596",
      zh: "\u9a6c\u63d0\u5c3c\u514b",
      en: ""
    }, {
      id: 169,
      code: "597",
      zh: "\u82cf\u91cc\u5357",
      en: ""
    }, {
      id: 170,
      code: "598",
      zh: "\u4e4c\u62c9\u572d",
      en: ""
    }, {
      id: 171,
      code: "599",
      zh: "\u8377\u5c5e\u5b89\u7684\u5217\u65af",
      en: ""
    }, {
      id: 172,
      code: "599",
      zh: "\u8377\u5c5e\u5723\u9a6c\u4e01",
      en: ""
    }, {
      id: 173,
      code: "599-9",
      zh: "\u5e93\u62c9\u7d22",
      en: ""
    }, {
      id: 174,
      code: "60",
      zh: "\u9a6c\u6765\u897f\u4e9a",
      en: ""
    }, {
      id: 175,
      code: "61",
      zh: "\u6fb3\u5927\u5229\u4e9a",
      en: ""
    }, {
      id: 176,
      code: "62",
      zh: "\u5370\u5ea6\u5c3c\u897f\u4e9a",
      en: ""
    }, {
      id: 177,
      code: "63",
      zh: "\u83f2\u5f8b\u5bbe",
      en: ""
    }, {
      id: 178,
      code: "64",
      zh: "\u65b0\u897f\u5170",
      en: ""
    }, {
      id: 179,
      code: "65",
      zh: "\u65b0\u52a0\u5761",
      en: ""
    }, {
      id: 180,
      code: "66",
      zh: "\u6cf0\u56fd",
      en: ""
    }, {
      id: 181,
      code: "670",
      zh: "\u4e1c\u5e1d\u6c76",
      en: ""
    }, {
      id: 182,
      code: "672",
      zh: "\u6fb3\u5927\u5229\u4e9a\u5c5e\u5357\u6781\u6d32",
      en: ""
    }, {
      id: 183,
      code: "672",
      zh: "\u6fb3\u5927\u5229\u4e9a\u5c5e\u5723\u8bde\u5c9b",
      en: ""
    }, {
      id: 184,
      code: "672",
      zh: "\u6fb3\u5927\u5229\u4e9a\u5c5e\u79d1\u79d1\u65af\u7fa4\u5c9b",
      en: ""
    }, {
      id: 185,
      code: "672",
      zh: "\u8bfa\u798f\u514b\u5c9b",
      en: ""
    }, {
      id: 186,
      code: "673",
      zh: "\u6587\u83b1",
      en: ""
    }, {
      id: 187,
      code: "674",
      zh: "\u7459\u9c81",
      en: ""
    }, {
      id: 188,
      code: "675",
      zh: "\u5df4\u5e03\u4e9a\u65b0\u51e0\u5185\u4e9a",
      en: ""
    }, {
      id: 189,
      code: "676",
      zh: "\u6c64\u52a0",
      en: ""
    }, {
      id: 190,
      code: "677",
      zh: "\u6240\u7f57\u95e8\u7fa4\u5c9b",
      en: ""
    }, {
      id: 191,
      code: "678",
      zh: "\u74e6\u52aa\u963f\u56fe",
      en: ""
    }, {
      id: 192,
      code: "679",
      zh: "\u6590\u6d4e",
      en: ""
    }, {
      id: 193,
      code: "680",
      zh: "\u5e15\u52b3",
      en: ""
    }, {
      id: 194,
      code: "681",
      zh: "\u74e6\u5229\u65af",
      en: ""
    }, {
      id: 195,
      code: "681",
      zh: "\u5bcc\u56fe\u7eb3\u7fa4\u5c9b",
      en: ""
    }, {
      id: 196,
      code: "682",
      zh: "\u5e93\u514b\u7fa4\u5c9b",
      en: ""
    }, {
      id: 197,
      code: "683",
      zh: "\u7ebd\u57c3",
      en: ""
    }, {
      id: 198,
      code: "685",
      zh: "\u8428\u6469\u4e9a",
      en: ""
    }, {
      id: 199,
      code: "686",
      zh: "\u57fa\u91cc\u5df4\u65af",
      en: ""
    }, {
      id: 200,
      code: "686",
      zh: "\u5409\u5c14\u4f2f\u7279\u7fa4\u5c9b",
      en: ""
    }, {
      id: 201,
      code: "687",
      zh: "\u65b0\u5580\u91cc\u591a\u5c3c\u4e9a",
      en: ""
    }, {
      id: 202,
      code: "688",
      zh: "\u56fe\u74e6\u5362",
      en: ""
    }, {
      id: 203,
      code: "688",
      zh: "\u57c3\u5229\u65af\u7fa4\u5c9b",
      en: ""
    }, {
      id: 204,
      code: "689",
      zh: "\u6cd5\u5c5e\u6ce2\u5229\u5c3c\u897f\u4e9a",
      en: ""
    }, {
      id: 205,
      code: "690",
      zh: "\u6258\u514b\u52b3\u7fa4\u5c9b",
      en: ""
    }, {
      id: 206,
      code: "691",
      zh: "\u5bc6\u514b\u7f57\u5c3c\u897f\u4e9a\u8054\u90a6",
      en: ""
    }, {
      id: 207,
      code: "692",
      zh: "\u9a6c\u7ecd\u5c14\u7fa4\u5c9b",
      en: ""
    }, {
      id: 208,
      code: "7",
      zh: "\u4fc4\u7f57\u65af",
      en: ""
    }, {
      id: 209,
      code: "81",
      zh: "\u65e5\u672c",
      en: ""
    }, {
      id: 210,
      code: "82",
      zh: "\u97e9\u56fd",
      en: ""
    }, {
      id: 211,
      code: "84",
      zh: "\u8d8a\u5357",
      en: ""
    }, {
      id: 212,
      code: "850",
      zh: "\u671d\u9c9c",
      en: ""
    }, {
      id: 213,
      code: "852",
      zh: "\u4e2d\u56fd\u9999\u6e2f",
      en: ""
    }, {
      id: 214,
      code: "853",
      zh: "\u4e2d\u56fd\u6fb3\u95e8",
      en: ""
    }, {
      id: 215,
      code: "855",
      zh: "\u67ec\u57d4\u5be8",
      en: ""
    }, {
      id: 216,
      code: "856",
      zh: "\u8001\u631d",
      en: ""
    }, {
      id: 217,
      code: "86",
      zh: "\u4e2d\u56fd",
      en: ""
    }, {
      id: 218,
      code: "870",
      zh: "\u56fd\u9645\u6d77\u4e8b\u536b\u661f\u7ec4\u7ec7(SNAC)\u536b\u661f\u7535\u8bdd",
      en: "SNAC"
    }, {
      id: 219,
      code: "878",
      zh: "\u73af\u7403\u4e2a\u4eba\u901a\u8baf\u670d\u52a1",
      en: ""
    }, {
      id: 220,
      code: "880",
      zh: "\u5b5f\u52a0\u62c9\u56fd",
      en: ""
    }, {
      id: 221,
      code: "881",
      zh: "\u79fb\u52a8\u536b\u661f\u7cfb\u7edf",
      en: ""
    }, {
      id: 222,
      code: "882",
      zh: "\u56fd\u9645\u7f51\u7edc",
      en: ""
    }, {
      id: 223,
      code: "886",
      zh: "\u4e2d\u56fd\u53f0\u6e7e",
      en: ""
    }, {
      id: 224,
      code: "90",
      zh: "\u571f\u8033\u5176",
      en: ""
    }, {
      id: 225,
      code: "91",
      zh: "\u5370\u5ea6",
      en: ""
    }, {
      id: 226,
      code: "92",
      zh: "\u5df4\u57fa\u65af\u5766",
      en: ""
    }, {
      id: 227,
      code: "93",
      zh: "\u963f\u5bcc\u6c57",
      en: ""
    }, {
      id: 228,
      code: "94",
      zh: "\u65af\u91cc\u5170\u5361",
      en: ""
    }, {
      id: 229,
      code: "95",
      zh: "\u7f05\u7538",
      en: ""
    }, {
      id: 230,
      code: "960",
      zh: "\u9a6c\u5c14\u4ee3\u592b",
      en: ""
    }, {
      id: 231,
      code: "961",
      zh: "\u9ece\u5df4\u5ae9",
      en: ""
    }, {
      id: 232,
      code: "962",
      zh: "\u7ea6\u65e6",
      en: ""
    }, {
      id: 233,
      code: "963",
      zh: "\u53d9\u5229\u4e9a",
      en: ""
    }, {
      id: 234,
      code: "964",
      zh: "\u4f0a\u62c9\u514b",
      en: ""
    }, {
      id: 235,
      code: "965",
      zh: "\u79d1\u5a01\u7279",
      en: ""
    }, {
      id: 236,
      code: "966",
      zh: "\u6c99\u7279\u963f\u62c9\u4f2f",
      en: ""
    }, {
      id: 237,
      code: "967",
      zh: "\u4e5f\u95e8",
      en: ""
    }, {
      id: 238,
      code: "968",
      zh: "\u963f\u66fc",
      en: ""
    }, {
      id: 239,
      code: "969",
      zh: "\u4e5f\u95e8\u6c11\u4e3b\u5171\u548c\u56fd",
      en: ""
    }, {
      id: 240,
      code: "970",
      zh: "\u5df4\u52d2\u65af\u5766",
      en: ""
    }, {
      id: 241,
      code: "971",
      zh: "\u963f\u62c9\u4f2f\u8054\u5408\u914b\u957f\u56fd",
      en: ""
    }, {
      id: 242,
      code: "972",
      zh: "\u4ee5\u8272\u5217",
      en: ""
    }, {
      id: 243,
      code: "973",
      zh: "\u5df4\u6797",
      en: ""
    }, {
      id: 244,
      code: "974",
      zh: "\u5361\u5854\u5c14",
      en: ""
    }, {
      id: 245,
      code: "975",
      zh: "\u4e0d\u4e39",
      en: ""
    }, {
      id: 246,
      code: "976",
      zh: "\u8499\u53e4",
      en: ""
    }, {
      id: 247,
      code: "977",
      zh: "\u5c3c\u6cca\u5c14",
      en: ""
    }, {
      id: 248,
      code: "979",
      zh: "\u56fd\u9645\u8d39\u7387\u670d\u52a1",
      en: "International Premium Rate Service"
    }, {
      id: 249,
      code: "98",
      zh: "\u4f0a\u6717",
      en: ""
    }, {
      id: 250,
      code: "991",
      zh: "\u56fd\u9645\u7535\u4fe1\u516c\u4f17\u901a\u4fe1\u670d\u52a1\u8bd5\u9a8c",
      en: "International Telecommunications Public Correspondence Service trial,ITPCS"
    }, {
      id: 251,
      code: "992",
      zh: "\u5854\u5409\u514b\u65af\u5766",
      en: ""
    }, {
      id: 252,
      code: "993",
      zh: "\u571f\u5e93\u66fc\u65af\u5766",
      en: ""
    }, {
      id: 253,
      code: "994",
      zh: "\u963f\u585e\u62dc\u7586",
      en: ""
    }, {
      id: 254,
      code: "995",
      zh: "\u683c\u9c81\u5409\u4e9a",
      en: ""
    }, {
      id: 255,
      code: "996",
      zh: "\u5409\u5c14\u5409\u65af\u65af\u5766",
      en: ""
    }, {
      id: 256,
      code: "997",
      zh: "\u54c8\u8428\u514b\u65af\u5766",
      en: ""
    }, {
      id: 257,
      code: "998",
      zh: "\u4e4c\u5179\u522b\u514b\u65af\u5766",
      en: ""
    } ];
    cc._RF.pop();
  }, {} ],
  EventManger: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c41e6lMcyhA95Io45mqRJLB", "EventManger");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.EventManger = void 0;
    var eventManager = function() {
      function eventManager() {
        this.events = [];
      }
      Object.defineProperty(eventManager, "ins", {
        get: function() {
          null == this.singe && (this.singe = new eventManager());
          return this.singe;
        },
        enumerable: false,
        configurable: true
      });
      eventManager.prototype.on = function(name, cb, cbo) {
        this.events || (this.events = []);
        name && cb && this.events.push({
          name: name,
          cb: cb,
          cbo: cbo,
          once: false
        });
      };
      eventManager.prototype.once = function(name, cb, cbo) {
        this.events || (this.events = []);
        name && cb && this.events.push({
          name: name,
          cb: cb,
          cbo: cbo,
          once: true
        });
      };
      eventManager.prototype.emit = function(name, data) {
        if (!this.events || 0 == this.events.length) {
          cc.error("unknown event");
          return;
        }
        for (var i = 0; i < this.events.length; i++) {
          var evt = this.events[i];
          evt.name == name && evt.cb && (evt.cbo ? evt.cb.apply(evt.cbo, [ data ]) : evt.cb(data));
          if (evt.once) {
            this.events.splice(i, 1);
            i--;
          }
        }
      };
      eventManager.prototype.off = function(name, cb, cbo) {
        if (!this.events || 0 == this.events.length) {
          cc.error("unknown event");
          return;
        }
        for (var i = 0; i < this.events.length; i++) {
          var evt = this.events[i];
          if (evt.name == name && cb == evt.cb) {
            this.events.splice(i, 1);
            i--;
          }
        }
      };
      eventManager.singe = null;
      return eventManager;
    }();
    exports.EventManger = eventManager.ins;
    cc._RF.pop();
  }, {} ],
  ListItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "97a6aWcyaxCNpV9mTLJK4ue", "ListItem");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, disallowMultiple = _a.disallowMultiple, menu = _a.menu, executionOrder = _a.executionOrder;
    var SelectedType;
    (function(SelectedType) {
      SelectedType[SelectedType["NONE"] = 0] = "NONE";
      SelectedType[SelectedType["TOGGLE"] = 1] = "TOGGLE";
      SelectedType[SelectedType["SWITCH"] = 2] = "SWITCH";
    })(SelectedType || (SelectedType = {}));
    var ListItem = function(_super) {
      __extends(ListItem, _super);
      function ListItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.title = null;
        _this.selectedMode = SelectedType.NONE;
        _this.selectedFlag = null;
        _this.selectedSpriteFrame = null;
        _this._unselectedSpriteFrame = null;
        _this.adaptiveSize = false;
        _this._selected = false;
        _this._eventReg = false;
        return _this;
      }
      Object.defineProperty(ListItem.prototype, "selected", {
        get: function() {
          return this._selected;
        },
        set: function(val) {
          this._selected = val;
          if (!this.selectedFlag) return;
          switch (this.selectedMode) {
           case SelectedType.TOGGLE:
            this.selectedFlag.active = val;
            break;

           case SelectedType.SWITCH:
            var sp = this.selectedFlag.getComponent(cc.Sprite);
            sp && (sp.spriteFrame = val ? this.selectedSpriteFrame : this._unselectedSpriteFrame);
          }
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ListItem.prototype, "btnCom", {
        get: function() {
          this._btnCom || (this._btnCom = this.node.getComponent(cc.Button));
          return this._btnCom;
        },
        enumerable: false,
        configurable: true
      });
      ListItem.prototype.onLoad = function() {
        if (this.selectedMode == SelectedType.SWITCH) {
          var com = this.selectedFlag.getComponent(cc.Sprite);
          this._unselectedSpriteFrame = com.spriteFrame;
        }
      };
      ListItem.prototype.onDestroy = function() {
        this.node.off(cc.Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
      };
      ListItem.prototype._registerEvent = function() {
        if (!this._eventReg) {
          this.btnCom && this.list.selectedMode > 0 && this.btnCom.clickEvents.unshift(this.createEvt(this, "onClickThis"));
          this.adaptiveSize && this.node.on(cc.Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
          this._eventReg = true;
        }
      };
      ListItem.prototype._onSizeChange = function() {
        this.list._onItemAdaptive(this.node);
      };
      ListItem.prototype.createEvt = function(component, handlerName, node) {
        void 0 === node && (node = null);
        if (!component.isValid) return;
        component["comName"] = component["comName"] || component.name.match(/\<(.*?)\>/g).pop().replace(/\<|>/g, "");
        var evt = new cc.Component.EventHandler();
        evt.target = node || component.node;
        evt.component = component["comName"];
        evt.handler = handlerName;
        return evt;
      };
      ListItem.prototype.showAni = function(aniType, callFunc, del) {
        var t = this;
        var tween;
        switch (aniType) {
         case 0:
          tween = cc.tween(t.node).to(.2, {
            scale: .7
          }).by(.3, {
            y: 2 * t.node.height
          });
          break;

         case 1:
          tween = cc.tween(t.node).to(.2, {
            scale: .7
          }).by(.3, {
            x: 2 * t.node.width
          });
          break;

         case 2:
          tween = cc.tween(t.node).to(.2, {
            scale: .7
          }).by(.3, {
            y: -2 * t.node.height
          });
          break;

         case 3:
          tween = cc.tween(t.node).to(.2, {
            scale: .7
          }).by(.3, {
            x: -2 * t.node.width
          });
          break;

         default:
          tween = cc.tween(t.node).to(.3, {
            scale: .1
          });
        }
        (callFunc || del) && tween.call(function() {
          if (del) {
            t.list._delSingleItem(t.node);
            for (var n = t.list.displayData.length - 1; n >= 0; n--) if (t.list.displayData[n].id == t.listId) {
              t.list.displayData.splice(n, 1);
              break;
            }
          }
          callFunc();
        });
        tween.start();
      };
      ListItem.prototype.onClickThis = function() {
        this.list.selectedId = this.listId;
      };
      __decorate([ property({
        type: cc.Sprite,
        tooltip: false
      }) ], ListItem.prototype, "icon", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: false
      }) ], ListItem.prototype, "title", void 0);
      __decorate([ property({
        type: cc.Enum(SelectedType),
        tooltip: false
      }) ], ListItem.prototype, "selectedMode", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: false,
        visible: function() {
          return this.selectedMode > SelectedType.NONE;
        }
      }) ], ListItem.prototype, "selectedFlag", void 0);
      __decorate([ property({
        type: cc.SpriteFrame,
        tooltip: false,
        visible: function() {
          return this.selectedMode == SelectedType.SWITCH;
        }
      }) ], ListItem.prototype, "selectedSpriteFrame", void 0);
      __decorate([ property({
        tooltip: false
      }) ], ListItem.prototype, "adaptiveSize", void 0);
      ListItem = __decorate([ ccclass, disallowMultiple(), menu("\u81ea\u5b9a\u4e49\u7ec4\u4ef6/List Item"), executionOrder(-5001) ], ListItem);
      return ListItem;
    }(cc.Component);
    exports.default = ListItem;
    cc._RF.pop();
  }, {} ],
  List: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d56b2xObC1IpqNGIiYnYE3Y", "List");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, disallowMultiple = _a.disallowMultiple, menu = _a.menu, executionOrder = _a.executionOrder, requireComponent = _a.requireComponent;
    var ListItem_1 = require("./ListItem");
    var TemplateType;
    (function(TemplateType) {
      TemplateType[TemplateType["NODE"] = 1] = "NODE";
      TemplateType[TemplateType["PREFAB"] = 2] = "PREFAB";
    })(TemplateType || (TemplateType = {}));
    var SlideType;
    (function(SlideType) {
      SlideType[SlideType["NORMAL"] = 1] = "NORMAL";
      SlideType[SlideType["ADHERING"] = 2] = "ADHERING";
      SlideType[SlideType["PAGE"] = 3] = "PAGE";
    })(SlideType || (SlideType = {}));
    var SelectedType;
    (function(SelectedType) {
      SelectedType[SelectedType["NONE"] = 0] = "NONE";
      SelectedType[SelectedType["SINGLE"] = 1] = "SINGLE";
      SelectedType[SelectedType["MULT"] = 2] = "MULT";
    })(SelectedType || (SelectedType = {}));
    var List = function(_super) {
      __extends(List, _super);
      function List() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.templateType = TemplateType.NODE;
        _this.tmpNode = null;
        _this.tmpPrefab = null;
        _this._slideMode = SlideType.NORMAL;
        _this.pageDistance = .3;
        _this.pageChangeEvent = new cc.Component.EventHandler();
        _this._virtual = true;
        _this.cyclic = false;
        _this.lackCenter = false;
        _this.lackSlide = false;
        _this._updateRate = 0;
        _this.frameByFrameRenderNum = 0;
        _this.renderEvent = new cc.Component.EventHandler();
        _this.selectedMode = SelectedType.NONE;
        _this.repeatEventSingle = false;
        _this.selectedEvent = new cc.Component.EventHandler();
        _this._selectedId = -1;
        _this._forceUpdate = false;
        _this._updateDone = true;
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
        get: function() {
          return this._slideMode;
        },
        set: function(val) {
          this._slideMode = val;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(List.prototype, "virtual", {
        get: function() {
          return this._virtual;
        },
        set: function(val) {
          null != val && (this._virtual = val);
          (true, 0 != this._numItems) && this._onScrolling();
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(List.prototype, "updateRate", {
        get: function() {
          return this._updateRate;
        },
        set: function(val) {
          val >= 0 && val <= 6 && (this._updateRate = val);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(List.prototype, "selectedId", {
        get: function() {
          return this._selectedId;
        },
        set: function(val) {
          var t = this;
          var item;
          switch (t.selectedMode) {
           case SelectedType.SINGLE:
            if (!t.repeatEventSingle && val == t._selectedId) return;
            item = t.getItemByListId(val);
            var listItem = void 0;
            t._selectedId >= 0 ? t._lastSelectedId = t._selectedId : t._lastSelectedId = null;
            t._selectedId = val;
            if (item) {
              listItem = item.getComponent(ListItem_1.default);
              listItem.selected = true;
            }
            if (t._lastSelectedId >= 0 && t._lastSelectedId != t._selectedId) {
              var lastItem = t.getItemByListId(t._lastSelectedId);
              lastItem && (lastItem.getComponent(ListItem_1.default).selected = false);
            }
            t.selectedEvent && cc.Component.EventHandler.emitEvents([ t.selectedEvent ], item, val % this._actualNumItems, null == t._lastSelectedId ? null : t._lastSelectedId % this._actualNumItems);
            break;

           case SelectedType.MULT:
            item = t.getItemByListId(val);
            if (!item) return;
            var listItem = item.getComponent(ListItem_1.default);
            t._selectedId >= 0 && (t._lastSelectedId = t._selectedId);
            t._selectedId = val;
            var bool = !listItem.selected;
            listItem.selected = bool;
            var sub = t.multSelected.indexOf(val);
            bool && sub < 0 ? t.multSelected.push(val) : !bool && sub >= 0 && t.multSelected.splice(sub, 1);
            t.selectedEvent && cc.Component.EventHandler.emitEvents([ t.selectedEvent ], item, val % this._actualNumItems, null == t._lastSelectedId ? null : t._lastSelectedId % this._actualNumItems, bool);
          }
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(List.prototype, "numItems", {
        get: function() {
          return this._actualNumItems;
        },
        set: function(val) {
          var t = this;
          if (!t.checkInited(false)) return;
          if (null == val || val < 0) {
            cc.error("numItems set the wrong::", val);
            return;
          }
          t._actualNumItems = t._numItems = val;
          t._forceUpdate = true;
          if (t._virtual) {
            t._resizeContent();
            t.cyclic && (t._numItems = t._cyclicNum * t._numItems);
            t._onScrolling();
            t.frameByFrameRenderNum || t.slideMode != SlideType.PAGE || (t.curPageNum = t.nearestListId);
          } else {
            if (t.cyclic) {
              t._resizeContent();
              t._numItems = t._cyclicNum * t._numItems;
            }
            var layout = t.content.getComponent(cc.Layout);
            layout && (layout.enabled = true);
            t._delRedundantItem();
            t.firstListId = 0;
            if (t.frameByFrameRenderNum > 0) {
              var len = t.frameByFrameRenderNum > t._numItems ? t._numItems : t.frameByFrameRenderNum;
              for (var n = 0; n < len; n++) t._createOrUpdateItem2(n);
              if (t.frameByFrameRenderNum < t._numItems) {
                t._updateCounter = t.frameByFrameRenderNum;
                t._updateDone = false;
              }
            } else {
              for (var n = 0; n < t._numItems; n++) t._createOrUpdateItem2(n);
              t.displayItemNum = t._numItems;
            }
          }
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(List.prototype, "scrollView", {
        get: function() {
          return this._scrollView;
        },
        enumerable: false,
        configurable: true
      });
      List.prototype.onLoad = function() {
        this._init();
      };
      List.prototype.onDestroy = function() {
        var t = this;
        cc.isValid(t._itemTmp) && t._itemTmp.destroy();
        cc.isValid(t.tmpNode) && t.tmpNode.destroy();
        t._pool && t._pool.clear();
      };
      List.prototype.onEnable = function() {
        this._registerEvent();
        this._init();
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
      List.prototype.onDisable = function() {
        this._unregisterEvent();
      };
      List.prototype._registerEvent = function() {
        var t = this;
        t.node.on(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, true);
        t.node.on("touch-up", t._onTouchUp, t);
        t.node.on(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, true);
        t.node.on("scroll-began", t._onScrollBegan, t, true);
        t.node.on("scroll-ended", t._onScrollEnded, t, true);
        t.node.on("scrolling", t._onScrolling, t, true);
        t.node.on(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
      };
      List.prototype._unregisterEvent = function() {
        var t = this;
        t.node.off(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, true);
        t.node.off("touch-up", t._onTouchUp, t);
        t.node.off(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, true);
        t.node.off("scroll-began", t._onScrollBegan, t, true);
        t.node.off("scroll-ended", t._onScrollEnded, t, true);
        t.node.off("scrolling", t._onScrolling, t, true);
        t.node.off(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
      };
      List.prototype._init = function() {
        var t = this;
        if (t._inited) return;
        t._scrollView = t.node.getComponent(cc.ScrollView);
        t.content = t._scrollView.content;
        if (!t.content) {
          cc.error(t.node.name + "'s cc.ScrollView unset content!");
          return;
        }
        t._layout = t.content.getComponent(cc.Layout);
        t._align = t._layout.type;
        t._resizeMode = t._layout.resizeMode;
        t._startAxis = t._layout.startAxis;
        t._topGap = t._layout.paddingTop;
        t._rightGap = t._layout.paddingRight;
        t._bottomGap = t._layout.paddingBottom;
        t._leftGap = t._layout.paddingLeft;
        t._columnGap = t._layout.spacingX;
        t._lineGap = t._layout.spacingY;
        t._colLineNum;
        t._verticalDir = t._layout.verticalDirection;
        t._horizontalDir = t._layout.horizontalDirection;
        t.setTemplateItem(cc.instantiate(t.templateType == TemplateType.PREFAB ? t.tmpPrefab : t.tmpNode));
        if (t._slideMode == SlideType.ADHERING || t._slideMode == SlideType.PAGE) {
          t._scrollView.inertia = false;
          t._scrollView._onMouseWheel = function() {
            return;
          };
        }
        t.virtual || (t.lackCenter = false);
        t._lastDisplayData = [];
        t.displayData = [];
        t._pool = new cc.NodePool();
        t._forceUpdate = false;
        t._updateCounter = 0;
        t._updateDone = true;
        t.curPageNum = 0;
        if (t.cyclic || 0) {
          t._scrollView._processAutoScrolling = this._processAutoScrolling.bind(t);
          t._scrollView._startBounceBackIfNeeded = function() {
            return false;
          };
        }
        switch (t._align) {
         case cc.Layout.Type.HORIZONTAL:
          switch (t._horizontalDir) {
           case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
            t._alignCalcType = 1;
            break;

           case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
            t._alignCalcType = 2;
          }
          break;

         case cc.Layout.Type.VERTICAL:
          switch (t._verticalDir) {
           case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
            t._alignCalcType = 3;
            break;

           case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
            t._alignCalcType = 4;
          }
          break;

         case cc.Layout.Type.GRID:
          switch (t._startAxis) {
           case cc.Layout.AxisDirection.HORIZONTAL:
            switch (t._verticalDir) {
             case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
              t._alignCalcType = 3;
              break;

             case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
              t._alignCalcType = 4;
            }
            break;

           case cc.Layout.AxisDirection.VERTICAL:
            switch (t._horizontalDir) {
             case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
              t._alignCalcType = 1;
              break;

             case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
              t._alignCalcType = 2;
            }
          }
        }
        t.content.removeAllChildren();
        t._inited = true;
      };
      List.prototype._processAutoScrolling = function(dt) {
        var brakingFactor = 1;
        this._scrollView["_autoScrollAccumulatedTime"] += dt * (1 / brakingFactor);
        var percentage = Math.min(1, this._scrollView["_autoScrollAccumulatedTime"] / this._scrollView["_autoScrollTotalTime"]);
        if (this._scrollView["_autoScrollAttenuate"]) {
          var time = percentage - 1;
          percentage = time * time * time * time * time + 1;
        }
        var newPosition = this._scrollView["_autoScrollStartPosition"].add(this._scrollView["_autoScrollTargetDelta"].mul(percentage));
        var EPSILON = this._scrollView["getScrollEndedEventTiming"]();
        var reachedEnd = Math.abs(percentage - 1) <= EPSILON;
        var fireEvent = Math.abs(percentage - 1) <= this._scrollView["getScrollEndedEventTiming"]();
        if (fireEvent && !this._scrollView["_isScrollEndedWithThresholdEventFired"]) {
          this._scrollView["_dispatchEvent"]("scroll-ended-with-threshold");
          this._scrollView["_isScrollEndedWithThresholdEventFired"] = true;
        }
        reachedEnd && (this._scrollView["_autoScrolling"] = false);
        var deltaMove = newPosition.sub(this._scrollView.getContentPosition());
        this._scrollView["_moveContent"](this._scrollView["_clampDelta"](deltaMove), reachedEnd);
        this._scrollView["_dispatchEvent"]("scrolling");
        if (!this._scrollView["_autoScrolling"]) {
          this._scrollView["_isBouncing"] = false;
          this._scrollView["_scrolling"] = false;
          this._scrollView["_dispatchEvent"]("scroll-ended");
        }
      };
      List.prototype.setTemplateItem = function(item) {
        if (!item) return;
        var t = this;
        t._itemTmp = item;
        t._resizeMode == cc.Layout.ResizeMode.CHILDREN ? t._itemSize = t._layout.cellSize : t._itemSize = cc.size(item.width, item.height);
        var com = item.getComponent(ListItem_1.default);
        var remove = false;
        com || (remove = true);
        remove && (t.selectedMode = SelectedType.NONE);
        com = item.getComponent(cc.Widget);
        com && com.enabled && (t._needUpdateWidget = true);
        t.selectedMode == SelectedType.MULT && (t.multSelected = []);
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
            var trimW = t.content.width - t._leftGap - t._rightGap;
            t._colLineNum = Math.floor((trimW + t._columnGap) / (t._itemSize.width + t._columnGap));
            t._sizeType = true;
            break;

           case cc.Layout.AxisDirection.VERTICAL:
            var trimH = t.content.height - t._topGap - t._bottomGap;
            t._colLineNum = Math.floor((trimH + t._lineGap) / (t._itemSize.height + t._lineGap));
            t._sizeType = false;
          }
        }
      };
      List.prototype.checkInited = function(printLog) {
        void 0 === printLog && (printLog = true);
        if (!this._inited) {
          printLog && cc.error("List initialization not completed!");
          return false;
        }
        return true;
      };
      List.prototype._resizeContent = function() {
        var t = this;
        var result;
        switch (t._align) {
         case cc.Layout.Type.HORIZONTAL:
          if (t._customSize) {
            var fixed = t._getFixedSize(null);
            result = t._leftGap + fixed.val + t._itemSize.width * (t._numItems - fixed.count) + t._columnGap * (t._numItems - 1) + t._rightGap;
          } else result = t._leftGap + t._itemSize.width * t._numItems + t._columnGap * (t._numItems - 1) + t._rightGap;
          break;

         case cc.Layout.Type.VERTICAL:
          if (t._customSize) {
            var fixed = t._getFixedSize(null);
            result = t._topGap + fixed.val + t._itemSize.height * (t._numItems - fixed.count) + t._lineGap * (t._numItems - 1) + t._bottomGap;
          } else result = t._topGap + t._itemSize.height * t._numItems + t._lineGap * (t._numItems - 1) + t._bottomGap;
          break;

         case cc.Layout.Type.GRID:
          t.lackCenter && (t.lackCenter = false);
          switch (t._startAxis) {
           case cc.Layout.AxisDirection.HORIZONTAL:
            var lineNum = Math.ceil(t._numItems / t._colLineNum);
            result = t._topGap + t._itemSize.height * lineNum + t._lineGap * (lineNum - 1) + t._bottomGap;
            break;

           case cc.Layout.AxisDirection.VERTICAL:
            var colNum = Math.ceil(t._numItems / t._colLineNum);
            result = t._leftGap + t._itemSize.width * colNum + t._columnGap * (colNum - 1) + t._rightGap;
          }
        }
        var layout = t.content.getComponent(cc.Layout);
        layout && (layout.enabled = false);
        t._allItemSize = result;
        t._allItemSizeNoEdge = t._allItemSize - (t._sizeType ? t._topGap + t._bottomGap : t._leftGap + t._rightGap);
        if (t.cyclic) {
          var totalSize = t._sizeType ? t.node.height : t.node.width;
          t._cyclicPos1 = 0;
          totalSize -= t._cyclicPos1;
          t._cyclicNum = Math.ceil(totalSize / t._allItemSizeNoEdge) + 1;
          var spacing = t._sizeType ? t._lineGap : t._columnGap;
          t._cyclicPos2 = t._cyclicPos1 + t._allItemSizeNoEdge + spacing;
          t._cyclicAllItemSize = t._allItemSize + t._allItemSizeNoEdge * (t._cyclicNum - 1) + spacing * (t._cyclicNum - 1);
          t._cycilcAllItemSizeNoEdge = t._allItemSizeNoEdge * t._cyclicNum;
          t._cycilcAllItemSizeNoEdge += spacing * (t._cyclicNum - 1);
        }
        t._lack = !t.cyclic && t._allItemSize < (t._sizeType ? t.node.height : t.node.width);
        var slideOffset = t._lack && t.lackCenter || !t.lackSlide ? .1 : 0;
        var targetWH = t._lack ? (t._sizeType ? t.node.height : t.node.width) - slideOffset : t.cyclic ? t._cyclicAllItemSize : t._allItemSize;
        targetWH < 0 && (targetWH = 0);
        t._sizeType ? t.content.height = targetWH : t.content.width = targetWH;
      };
      List.prototype._onScrolling = function(ev) {
        void 0 === ev && (ev = null);
        null == this.frameCount && (this.frameCount = this._updateRate);
        if (!this._forceUpdate && ev && "scroll-ended" != ev.type && this.frameCount > 0) {
          this.frameCount--;
          return;
        }
        this.frameCount = this._updateRate;
        if (this._aniDelRuning) return;
        if (this.cyclic) {
          var scrollPos = this.content.getPosition();
          scrollPos = this._sizeType ? scrollPos.y : scrollPos.x;
          var addVal = this._allItemSizeNoEdge + (this._sizeType ? this._lineGap : this._columnGap);
          var add = this._sizeType ? cc.v2(0, addVal) : cc.v2(addVal, 0);
          switch (this._alignCalcType) {
           case 1:
            if (scrollPos > -this._cyclicPos1) {
              this.content.x = -this._cyclicPos2;
              this._scrollView.isAutoScrolling() && (this._scrollView["_autoScrollStartPosition"] = this._scrollView["_autoScrollStartPosition"].sub(add));
            } else if (scrollPos < -this._cyclicPos2) {
              this.content.x = -this._cyclicPos1;
              this._scrollView.isAutoScrolling() && (this._scrollView["_autoScrollStartPosition"] = this._scrollView["_autoScrollStartPosition"].add(add));
            }
            break;

           case 2:
            if (scrollPos < this._cyclicPos1) {
              this.content.x = this._cyclicPos2;
              this._scrollView.isAutoScrolling() && (this._scrollView["_autoScrollStartPosition"] = this._scrollView["_autoScrollStartPosition"].add(add));
            } else if (scrollPos > this._cyclicPos2) {
              this.content.x = this._cyclicPos1;
              this._scrollView.isAutoScrolling() && (this._scrollView["_autoScrollStartPosition"] = this._scrollView["_autoScrollStartPosition"].sub(add));
            }
            break;

           case 3:
            if (scrollPos < this._cyclicPos1) {
              this.content.y = this._cyclicPos2;
              this._scrollView.isAutoScrolling() && (this._scrollView["_autoScrollStartPosition"] = this._scrollView["_autoScrollStartPosition"].add(add));
            } else if (scrollPos > this._cyclicPos2) {
              this.content.y = this._cyclicPos1;
              this._scrollView.isAutoScrolling() && (this._scrollView["_autoScrollStartPosition"] = this._scrollView["_autoScrollStartPosition"].sub(add));
            }
            break;

           case 4:
            if (scrollPos > -this._cyclicPos1) {
              this.content.y = -this._cyclicPos2;
              this._scrollView.isAutoScrolling() && (this._scrollView["_autoScrollStartPosition"] = this._scrollView["_autoScrollStartPosition"].sub(add));
            } else if (scrollPos < -this._cyclicPos2) {
              this.content.y = -this._cyclicPos1;
              this._scrollView.isAutoScrolling() && (this._scrollView["_autoScrollStartPosition"] = this._scrollView["_autoScrollStartPosition"].add(add));
            }
          }
        }
        this._calcViewPos();
        var vTop, vRight, vBottom, vLeft;
        if (this._sizeType) {
          vTop = this.viewTop;
          vBottom = this.viewBottom;
        } else {
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
            for (;curId <= endId && !breakFor; curId++) {
              itemPos = this._calcItemPos(curId);
              switch (this._align) {
               case cc.Layout.Type.HORIZONTAL:
                itemPos.right >= vLeft && itemPos.left <= vRight ? this.displayData.push(itemPos) : 0 != curId && this.displayData.length > 0 && (breakFor = true);
                break;

               case cc.Layout.Type.VERTICAL:
                itemPos.bottom <= vTop && itemPos.top >= vBottom ? this.displayData.push(itemPos) : 0 != curId && this.displayData.length > 0 && (breakFor = true);
                break;

               case cc.Layout.Type.GRID:
                switch (this._startAxis) {
                 case cc.Layout.AxisDirection.HORIZONTAL:
                  itemPos.bottom <= vTop && itemPos.top >= vBottom ? this.displayData.push(itemPos) : 0 != curId && this.displayData.length > 0 && (breakFor = true);
                  break;

                 case cc.Layout.AxisDirection.VERTICAL:
                  itemPos.right >= vLeft && itemPos.left <= vRight ? this.displayData.push(itemPos) : 0 != curId && this.displayData.length > 0 && (breakFor = true);
                }
              }
            }
          } else {
            var ww = this._itemSize.width + this._columnGap;
            var hh = this._itemSize.height + this._lineGap;
            switch (this._alignCalcType) {
             case 1:
              curId = (vLeft - this._leftGap) / ww;
              endId = (vRight - this._leftGap) / ww;
              break;

             case 2:
              curId = (-vRight - this._rightGap) / ww;
              endId = (-vLeft - this._rightGap) / ww;
              break;

             case 3:
              curId = (-vTop - this._topGap) / hh;
              endId = (-vBottom - this._topGap) / hh;
              break;

             case 4:
              curId = (vBottom - this._bottomGap) / hh;
              endId = (vTop - this._bottomGap) / hh;
            }
            curId = Math.floor(curId) * this._colLineNum;
            endId = Math.ceil(endId) * this._colLineNum;
            endId--;
            curId < 0 && (curId = 0);
            endId >= this._numItems && (endId = this._numItems - 1);
            for (;curId <= endId; curId++) this.displayData.push(this._calcItemPos(curId));
          }
          this._delRedundantItem();
          if (this.displayData.length <= 0 || !this._numItems) {
            this._lastDisplayData = [];
            return;
          }
          this.firstListId = this.displayData[0].id;
          this.displayItemNum = this.displayData.length;
          var len = this._lastDisplayData.length;
          var haveDataChange = this.displayItemNum != len;
          if (haveDataChange) {
            this.frameByFrameRenderNum > 0 && this._lastDisplayData.sort(function(a, b) {
              return a - b;
            });
            haveDataChange = this.firstListId != this._lastDisplayData[0] || this.displayData[this.displayItemNum - 1].id != this._lastDisplayData[len - 1];
          }
          if (this._forceUpdate || haveDataChange) if (this.frameByFrameRenderNum > 0) if (this._numItems > 0) {
            this._updateDone ? this._updateCounter = 0 : this._doneAfterUpdate = true;
            this._updateDone = false;
          } else {
            this._updateCounter = 0;
            this._updateDone = true;
          } else {
            this._lastDisplayData = [];
            for (var c = 0; c < this.displayItemNum; c++) this._createOrUpdateItem(this.displayData[c]);
            this._forceUpdate = false;
          }
          this._calcNearestItem();
        }
      };
      List.prototype._calcViewPos = function() {
        var scrollPos = this.content.getPosition();
        switch (this._alignCalcType) {
         case 1:
          this.elasticLeft = scrollPos.x > 0 ? scrollPos.x : 0;
          this.viewLeft = (scrollPos.x < 0 ? -scrollPos.x : 0) - this.elasticLeft;
          this.viewRight = this.viewLeft + this.node.width;
          this.elasticRight = this.viewRight > this.content.width ? Math.abs(this.viewRight - this.content.width) : 0;
          this.viewRight += this.elasticRight;
          break;

         case 2:
          this.elasticRight = scrollPos.x < 0 ? -scrollPos.x : 0;
          this.viewRight = (scrollPos.x > 0 ? -scrollPos.x : 0) + this.elasticRight;
          this.viewLeft = this.viewRight - this.node.width;
          this.elasticLeft = this.viewLeft < -this.content.width ? Math.abs(this.viewLeft + this.content.width) : 0;
          this.viewLeft -= this.elasticLeft;
          break;

         case 3:
          this.elasticTop = scrollPos.y < 0 ? Math.abs(scrollPos.y) : 0;
          this.viewTop = (scrollPos.y > 0 ? -scrollPos.y : 0) + this.elasticTop;
          this.viewBottom = this.viewTop - this.node.height;
          this.elasticBottom = this.viewBottom < -this.content.height ? Math.abs(this.viewBottom + this.content.height) : 0;
          this.viewBottom += this.elasticBottom;
          break;

         case 4:
          this.elasticBottom = scrollPos.y > 0 ? Math.abs(scrollPos.y) : 0;
          this.viewBottom = (scrollPos.y < 0 ? -scrollPos.y : 0) - this.elasticBottom;
          this.viewTop = this.viewBottom + this.node.height;
          this.elasticTop = this.viewTop > this.content.height ? Math.abs(this.viewTop - this.content.height) : 0;
          this.viewTop -= this.elasticTop;
        }
      };
      List.prototype._calcItemPos = function(id) {
        var width, height, top, bottom, left, right, itemX, itemY;
        switch (this._align) {
         case cc.Layout.Type.HORIZONTAL:
          switch (this._horizontalDir) {
           case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
            if (this._customSize) {
              var fixed = this._getFixedSize(id);
              left = this._leftGap + (this._itemSize.width + this._columnGap) * (id - fixed.count) + (fixed.val + this._columnGap * fixed.count);
              var cs = this._customSize[id];
              width = cs > 0 ? cs : this._itemSize.width;
            } else {
              left = this._leftGap + (this._itemSize.width + this._columnGap) * id;
              width = this._itemSize.width;
            }
            if (this.lackCenter) {
              left -= this._leftGap;
              var offset = this.content.width / 2 - this._allItemSizeNoEdge / 2;
              left += offset;
            }
            right = left + width;
            return {
              id: id,
              left: left,
              right: right,
              x: left + this._itemTmp.anchorX * width,
              y: this._itemTmp.y
            };

           case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
            if (this._customSize) {
              var fixed = this._getFixedSize(id);
              right = -this._rightGap - (this._itemSize.width + this._columnGap) * (id - fixed.count) - (fixed.val + this._columnGap * fixed.count);
              var cs = this._customSize[id];
              width = cs > 0 ? cs : this._itemSize.width;
            } else {
              right = -this._rightGap - (this._itemSize.width + this._columnGap) * id;
              width = this._itemSize.width;
            }
            if (this.lackCenter) {
              right += this._rightGap;
              var offset = this.content.width / 2 - this._allItemSizeNoEdge / 2;
              right -= offset;
            }
            left = right - width;
            return {
              id: id,
              right: right,
              left: left,
              x: left + this._itemTmp.anchorX * width,
              y: this._itemTmp.y
            };
          }
          break;

         case cc.Layout.Type.VERTICAL:
          switch (this._verticalDir) {
           case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
            if (this._customSize) {
              var fixed = this._getFixedSize(id);
              top = -this._topGap - (this._itemSize.height + this._lineGap) * (id - fixed.count) - (fixed.val + this._lineGap * fixed.count);
              var cs = this._customSize[id];
              height = cs > 0 ? cs : this._itemSize.height;
            } else {
              top = -this._topGap - (this._itemSize.height + this._lineGap) * id;
              height = this._itemSize.height;
            }
            if (this.lackCenter) {
              top += this._topGap;
              var offset = this.content.height / 2 - this._allItemSizeNoEdge / 2;
              top -= offset;
            }
            bottom = top - height;
            return {
              id: id,
              top: top,
              bottom: bottom,
              x: this._itemTmp.x,
              y: bottom + this._itemTmp.anchorY * height
            };

           case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
            if (this._customSize) {
              var fixed = this._getFixedSize(id);
              bottom = this._bottomGap + (this._itemSize.height + this._lineGap) * (id - fixed.count) + (fixed.val + this._lineGap * fixed.count);
              var cs = this._customSize[id];
              height = cs > 0 ? cs : this._itemSize.height;
            } else {
              bottom = this._bottomGap + (this._itemSize.height + this._lineGap) * id;
              height = this._itemSize.height;
            }
            if (this.lackCenter) {
              bottom -= this._bottomGap;
              var offset = this.content.height / 2 - this._allItemSizeNoEdge / 2;
              bottom += offset;
            }
            top = bottom + height;
            return {
              id: id,
              top: top,
              bottom: bottom,
              x: this._itemTmp.x,
              y: bottom + this._itemTmp.anchorY * height
            };
          }

         case cc.Layout.Type.GRID:
          var colLine = Math.floor(id / this._colLineNum);
          switch (this._startAxis) {
           case cc.Layout.AxisDirection.HORIZONTAL:
            switch (this._verticalDir) {
             case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
              top = -this._topGap - (this._itemSize.height + this._lineGap) * colLine;
              bottom = top - this._itemSize.height;
              itemY = bottom + this._itemTmp.anchorY * this._itemSize.height;
              break;

             case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
              bottom = this._bottomGap + (this._itemSize.height + this._lineGap) * colLine;
              top = bottom + this._itemSize.height;
              itemY = bottom + this._itemTmp.anchorY * this._itemSize.height;
            }
            itemX = this._leftGap + id % this._colLineNum * (this._itemSize.width + this._columnGap);
            switch (this._horizontalDir) {
             case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
              itemX += this._itemTmp.anchorX * this._itemSize.width;
              itemX -= this.content.anchorX * this.content.width;
              break;

             case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
              itemX += (1 - this._itemTmp.anchorX) * this._itemSize.width;
              itemX -= (1 - this.content.anchorX) * this.content.width;
              itemX *= -1;
            }
            return {
              id: id,
              top: top,
              bottom: bottom,
              x: itemX,
              y: itemY
            };

           case cc.Layout.AxisDirection.VERTICAL:
            switch (this._horizontalDir) {
             case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
              left = this._leftGap + (this._itemSize.width + this._columnGap) * colLine;
              right = left + this._itemSize.width;
              itemX = left + this._itemTmp.anchorX * this._itemSize.width;
              itemX -= this.content.anchorX * this.content.width;
              break;

             case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
              right = -this._rightGap - (this._itemSize.width + this._columnGap) * colLine;
              left = right - this._itemSize.width;
              itemX = left + this._itemTmp.anchorX * this._itemSize.width;
              itemX += (1 - this.content.anchorX) * this.content.width;
            }
            itemY = -this._topGap - id % this._colLineNum * (this._itemSize.height + this._lineGap);
            switch (this._verticalDir) {
             case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
              itemY -= (1 - this._itemTmp.anchorY) * this._itemSize.height;
              itemY += (1 - this.content.anchorY) * this.content.height;
              break;

             case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
              itemY -= this._itemTmp.anchorY * this._itemSize.height;
              itemY += this.content.anchorY * this.content.height;
              itemY *= -1;
            }
            return {
              id: id,
              left: left,
              right: right,
              x: itemX,
              y: itemY
            };
          }
        }
      };
      List.prototype._calcExistItemPos = function(id) {
        var item = this.getItemByListId(id);
        if (!item) return null;
        var data = {
          id: id,
          x: item.x,
          y: item.y
        };
        if (this._sizeType) {
          data.top = item.y + item.height * (1 - item.anchorY);
          data.bottom = item.y - item.height * item.anchorY;
        } else {
          data.left = item.x - item.width * item.anchorX;
          data.right = item.x + item.width * (1 - item.anchorX);
        }
        return data;
      };
      List.prototype.getItemPos = function(id) {
        return this._virtual ? this._calcItemPos(id) : this.frameByFrameRenderNum ? this._calcItemPos(id) : this._calcExistItemPos(id);
      };
      List.prototype._getFixedSize = function(listId) {
        if (!this._customSize) return null;
        null == listId && (listId = this._numItems);
        var fixed = 0;
        var count = 0;
        for (var id in this._customSize) if (parseInt(id) < listId) {
          fixed += this._customSize[id];
          count++;
        }
        return {
          val: fixed,
          count: count
        };
      };
      List.prototype._onScrollBegan = function() {
        this._beganPos = this._sizeType ? this.viewTop : this.viewLeft;
      };
      List.prototype._onScrollEnded = function() {
        var t = this;
        t.curScrollIsTouch = false;
        if (null != t.scrollToListId) {
          var item = t.getItemByListId(t.scrollToListId);
          t.scrollToListId = null;
          item && cc.tween(item).to(.1, {
            scale: 1.06
          }).to(.1, {
            scale: 1
          }).start();
        }
        t._onScrolling();
        t._slideMode != SlideType.ADHERING || t.adhering ? t._slideMode == SlideType.PAGE && (null != t._beganPos && t.curScrollIsTouch ? this._pageAdhere() : t.adhere()) : t.adhere();
      };
      List.prototype._onTouchStart = function(ev, captureListeners) {
        var _a;
        if (null === (_a = this._scrollView) || void 0 === _a ? void 0 : _a["hasNestedViewGroup"]()) return;
        this.curScrollIsTouch = true;
        var isMe = ev.eventPhase === cc.Event.AT_TARGET && ev.target === this.node;
        if (!isMe) {
          var itemNode = ev.target;
          while (null == itemNode._listId && itemNode.parent) itemNode = itemNode.parent;
          this._scrollItem = null != itemNode._listId ? itemNode : ev.target;
        }
      };
      List.prototype._onTouchUp = function() {
        var t = this;
        t._scrollPos = null;
        if (t._slideMode == SlideType.ADHERING) {
          this.adhering && (this._adheringBarrier = true);
          t.adhere();
        } else t._slideMode == SlideType.PAGE && (null != t._beganPos ? this._pageAdhere() : t.adhere());
        this._scrollItem = null;
      };
      List.prototype._onTouchCancelled = function(ev, captureListeners) {
        var _a;
        var t = this;
        if ((null === (_a = t._scrollView) || void 0 === _a ? void 0 : _a["hasNestedViewGroup"]()) || ev.simulate) return;
        t._scrollPos = null;
        if (t._slideMode == SlideType.ADHERING) {
          t.adhering && (t._adheringBarrier = true);
          t.adhere();
        } else t._slideMode == SlideType.PAGE && (null != t._beganPos ? t._pageAdhere() : t.adhere());
        this._scrollItem = null;
      };
      List.prototype._onSizeChanged = function() {
        this.checkInited(false) && this._onScrolling();
      };
      List.prototype._onItemAdaptive = function(item) {
        if (!this._sizeType && item.width != this._itemSize.width || this._sizeType && item.height != this._itemSize.height) {
          this._customSize || (this._customSize = {});
          var val = this._sizeType ? item.height : item.width;
          if (this._customSize[item._listId] != val) {
            this._customSize[item._listId] = val;
            this._resizeContent();
            this.updateAll();
            if (null != this._scrollToListId) {
              this._scrollPos = null;
              this.unschedule(this._scrollToSo);
              this.scrollTo(this._scrollToListId, Math.max(0, this._scrollToEndTime - new Date().getTime() / 1e3));
            }
          }
        }
      };
      List.prototype._pageAdhere = function() {
        var t = this;
        if (!t.cyclic && (t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0)) return;
        var curPos = t._sizeType ? t.viewTop : t.viewLeft;
        var dis = (t._sizeType ? t.node.height : t.node.width) * t.pageDistance;
        var canSkip = Math.abs(t._beganPos - curPos) > dis;
        if (canSkip) {
          var timeInSecond = .5;
          switch (t._alignCalcType) {
           case 1:
           case 4:
            t._beganPos > curPos ? t.prePage(timeInSecond) : t.nextPage(timeInSecond);
            break;

           case 2:
           case 3:
            t._beganPos < curPos ? t.prePage(timeInSecond) : t.nextPage(timeInSecond);
          }
        } else t.elasticTop <= 0 && t.elasticRight <= 0 && t.elasticBottom <= 0 && t.elasticLeft <= 0 && t.adhere();
        t._beganPos = null;
      };
      List.prototype.adhere = function() {
        var t = this;
        if (!t.checkInited()) return;
        if (t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0) return;
        t.adhering = true;
        t._calcNearestItem();
        var offset = (t._sizeType ? t._topGap : t._leftGap) / (t._sizeType ? t.node.height : t.node.width);
        var timeInSecond = .7;
        t.scrollTo(t.nearestListId, timeInSecond, offset);
      };
      List.prototype.update = function() {
        if (this.frameByFrameRenderNum <= 0 || this._updateDone) return;
        if (this._virtual) {
          var len = this._updateCounter + this.frameByFrameRenderNum > this.displayItemNum ? this.displayItemNum : this._updateCounter + this.frameByFrameRenderNum;
          for (var n = this._updateCounter; n < len; n++) {
            var data = this.displayData[n];
            data && this._createOrUpdateItem(data);
          }
          if (this._updateCounter >= this.displayItemNum - 1) if (this._doneAfterUpdate) {
            this._updateCounter = 0;
            this._updateDone = false;
            this._doneAfterUpdate = false;
          } else {
            this._updateDone = true;
            this._delRedundantItem();
            this._forceUpdate = false;
            this._calcNearestItem();
            this.slideMode == SlideType.PAGE && (this.curPageNum = this.nearestListId);
          } else this._updateCounter += this.frameByFrameRenderNum;
        } else if (this._updateCounter < this._numItems) {
          var len = this._updateCounter + this.frameByFrameRenderNum > this._numItems ? this._numItems : this._updateCounter + this.frameByFrameRenderNum;
          for (var n = this._updateCounter; n < len; n++) this._createOrUpdateItem2(n);
          this._updateCounter += this.frameByFrameRenderNum;
        } else {
          this._updateDone = true;
          this._calcNearestItem();
          this.slideMode == SlideType.PAGE && (this.curPageNum = this.nearestListId);
        }
      };
      List.prototype._createOrUpdateItem = function(data) {
        var item = this.getItemByListId(data.id);
        if (item) {
          if (this._forceUpdate && this.renderEvent) {
            item.setPosition(cc.v2(data.x, data.y));
            this._resetItemSize(item);
            this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], item, data.id % this._actualNumItems);
          }
        } else {
          var canGet = this._pool.size() > 0;
          item = canGet ? this._pool.get() : cc.instantiate(this._itemTmp);
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
            widget && widget.updateAlignment();
          }
          item.setSiblingIndex(this.content.childrenCount - 1);
          var listItem = item.getComponent(ListItem_1.default);
          item["listItem"] = listItem;
          if (listItem) {
            listItem.listId = data.id;
            listItem.list = this;
            listItem._registerEvent();
          }
          this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], item, data.id % this._actualNumItems);
        }
        this._resetItemSize(item);
        this._updateListItem(item["listItem"]);
        this._lastDisplayData.indexOf(data.id) < 0 && this._lastDisplayData.push(data.id);
      };
      List.prototype._createOrUpdateItem2 = function(listId) {
        var item = this.content.children[listId];
        var listItem;
        if (item) {
          if (this._forceUpdate && this.renderEvent) {
            item._listId = listId;
            listItem && (listItem.listId = listId);
            this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], item, listId % this._actualNumItems);
          }
        } else {
          item = cc.instantiate(this._itemTmp);
          item._listId = listId;
          this.content.addChild(item);
          listItem = item.getComponent(ListItem_1.default);
          item["listItem"] = listItem;
          if (listItem) {
            listItem.listId = listId;
            listItem.list = this;
            listItem._registerEvent();
          }
          this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], item, listId % this._actualNumItems);
        }
        this._updateListItem(listItem);
        this._lastDisplayData.indexOf(listId) < 0 && this._lastDisplayData.push(listId);
      };
      List.prototype._updateListItem = function(listItem) {
        if (!listItem) return;
        if (this.selectedMode > SelectedType.NONE) {
          var item = listItem.node;
          switch (this.selectedMode) {
           case SelectedType.SINGLE:
            listItem.selected = this.selectedId == item._listId;
            break;

           case SelectedType.MULT:
            listItem.selected = this.multSelected.indexOf(item._listId) >= 0;
          }
        }
      };
      List.prototype._resetItemSize = function(item) {
        return;
        var size;
      };
      List.prototype._updateItemPos = function(listIdOrItem) {
        var item = isNaN(listIdOrItem) ? listIdOrItem : this.getItemByListId(listIdOrItem);
        var pos = this.getItemPos(item._listId);
        item.setPosition(pos.x, pos.y);
      };
      List.prototype.setMultSelected = function(args, bool) {
        var t = this;
        if (!t.checkInited()) return;
        Array.isArray(args) || (args = [ args ]);
        if (null == bool) t.multSelected = args; else {
          var listId = void 0, sub = void 0;
          if (bool) for (var n = args.length - 1; n >= 0; n--) {
            listId = args[n];
            sub = t.multSelected.indexOf(listId);
            sub < 0 && t.multSelected.push(listId);
          } else for (var n = args.length - 1; n >= 0; n--) {
            listId = args[n];
            sub = t.multSelected.indexOf(listId);
            sub >= 0 && t.multSelected.splice(sub, 1);
          }
        }
        t._forceUpdate = true;
        t._onScrolling();
      };
      List.prototype.getMultSelected = function() {
        return this.multSelected;
      };
      List.prototype.hasMultSelected = function(listId) {
        return this.multSelected && this.multSelected.indexOf(listId) >= 0;
      };
      List.prototype.updateItem = function(args) {
        if (!this.checkInited()) return;
        Array.isArray(args) || (args = [ args ]);
        for (var n = 0, len = args.length; n < len; n++) {
          var listId = args[n];
          var item = this.getItemByListId(listId);
          item && cc.Component.EventHandler.emitEvents([ this.renderEvent ], item, listId % this._actualNumItems);
        }
      };
      List.prototype.updateAll = function() {
        if (!this.checkInited()) return;
        this.numItems = this.numItems;
      };
      List.prototype.getItemByListId = function(listId) {
        if (this.content) for (var n = this.content.childrenCount - 1; n >= 0; n--) {
          var item = this.content.children[n];
          if (item._listId == listId) return item;
        }
      };
      List.prototype._getOutsideItem = function() {
        var item;
        var result = [];
        for (var n = this.content.childrenCount - 1; n >= 0; n--) {
          item = this.content.children[n];
          this.displayData.find(function(d) {
            return d.id == item._listId;
          }) || result.push(item);
        }
        return result;
      };
      List.prototype._delRedundantItem = function() {
        if (this._virtual) {
          var arr = this._getOutsideItem();
          for (var n = arr.length - 1; n >= 0; n--) {
            var item = arr[n];
            if (this._scrollItem && item._listId == this._scrollItem._listId) continue;
            item.isCached = true;
            this._pool.put(item);
            for (var m = this._lastDisplayData.length - 1; m >= 0; m--) if (this._lastDisplayData[m] == item._listId) {
              this._lastDisplayData.splice(m, 1);
              break;
            }
          }
        } else while (this.content.childrenCount > this._numItems) this._delSingleItem(this.content.children[this.content.childrenCount - 1]);
      };
      List.prototype._delSingleItem = function(item) {
        item.removeFromParent();
        item.destroy && item.destroy();
        item = null;
      };
      List.prototype.aniDelItem = function(listId, callFunc, aniType) {
        var t = this;
        if (!t.checkInited() || t.cyclic || !t._virtual) return cc.error("This function is not allowed to be called!");
        if (!callFunc) return cc.error("CallFunc are not allowed to be NULL, You need to delete the corresponding index in the data array in the CallFunc!");
        if (t._aniDelRuning) return cc.warn("Please wait for the current deletion to finish!");
        var item = t.getItemByListId(listId);
        var listItem;
        if (!item) {
          callFunc(listId);
          return;
        }
        listItem = item.getComponent(ListItem_1.default);
        t._aniDelRuning = true;
        t._aniDelCB = callFunc;
        t._aniDelItem = item;
        t._aniDelBeforePos = item.position;
        t._aniDelBeforeScale = item.scale;
        var curLastId = t.displayData[t.displayData.length - 1].id;
        var resetSelectedId = listItem.selected;
        listItem.showAni(aniType, function() {
          var newId;
          curLastId < t._numItems - 2 && (newId = curLastId + 1);
          if (null != newId) {
            var newData = t._calcItemPos(newId);
            t.displayData.push(newData);
            t._virtual ? t._createOrUpdateItem(newData) : t._createOrUpdateItem2(newId);
          } else t._numItems--;
          if (t.selectedMode == SelectedType.SINGLE) resetSelectedId ? t._selectedId = -1 : t._selectedId - 1 >= 0 && t._selectedId--; else if (t.selectedMode == SelectedType.MULT && t.multSelected.length) {
            var sub = t.multSelected.indexOf(listId);
            sub >= 0 && t.multSelected.splice(sub, 1);
            for (var n = t.multSelected.length - 1; n >= 0; n--) {
              var id = t.multSelected[n];
              id >= listId && t.multSelected[n]--;
            }
          }
          if (t._customSize) {
            t._customSize[listId] && delete t._customSize[listId];
            var newCustomSize = {};
            var size = void 0;
            for (var id in t._customSize) {
              size = t._customSize[id];
              var idNumber = parseInt(id);
              newCustomSize[idNumber - (idNumber >= listId ? 1 : 0)] = size;
            }
            t._customSize = newCustomSize;
          }
          var sec = .2333;
          var tween, haveCB;
          for (var n = null != newId ? newId : curLastId; n >= listId + 1; n--) {
            item = t.getItemByListId(n);
            if (item) {
              var posData = t._calcItemPos(n - 1);
              tween = cc.tween(item).to(sec, {
                position: cc.v2(posData.x, posData.y)
              });
              if (n <= listId + 1) {
                haveCB = true;
                tween.call(function() {
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
      List.prototype.scrollTo = function(listId, timeInSecond, offset, overStress) {
        void 0 === timeInSecond && (timeInSecond = .5);
        void 0 === offset && (offset = null);
        void 0 === overStress && (overStress = false);
        var t = this;
        if (!t.checkInited(false)) return;
        null == timeInSecond ? timeInSecond = .5 : timeInSecond < 0 && (timeInSecond = 0);
        listId < 0 ? listId = 0 : listId >= t._numItems && (listId = t._numItems - 1);
        !t._virtual && t._layout && t._layout.enabled && t._layout.updateLayout();
        var pos = t.getItemPos(listId);
        if (!pos) return false;
        var targetX, targetY;
        switch (t._alignCalcType) {
         case 1:
          targetX = pos.left;
          targetX -= null != offset ? t.node.width * offset : t._leftGap;
          pos = cc.v2(targetX, 0);
          break;

         case 2:
          targetX = pos.right - t.node.width;
          targetX += null != offset ? t.node.width * offset : t._rightGap;
          pos = cc.v2(targetX + t.content.width, 0);
          break;

         case 3:
          targetY = pos.top;
          targetY += null != offset ? t.node.height * offset : t._topGap;
          pos = cc.v2(0, -targetY);
          break;

         case 4:
          targetY = pos.bottom + t.node.height;
          targetY -= null != offset ? t.node.height * offset : t._bottomGap;
          pos = cc.v2(0, -targetY + t.content.height);
        }
        var viewPos = t.content.getPosition();
        viewPos = Math.abs(t._sizeType ? viewPos.y : viewPos.x);
        var comparePos = t._sizeType ? pos.y : pos.x;
        var runScroll = Math.abs((null != t._scrollPos ? t._scrollPos : viewPos) - comparePos) > .5;
        if (runScroll) {
          t._scrollView.scrollToOffset(pos, timeInSecond);
          t._scrollToListId = listId;
          t._scrollToEndTime = new Date().getTime() / 1e3 + timeInSecond;
          t._scrollToSo = t.scheduleOnce(function() {
            t._adheringBarrier || (t.adhering = t._adheringBarrier = false);
            t._scrollPos = t._scrollToListId = t._scrollToEndTime = t._scrollToSo = null;
            if (overStress) {
              var item = t.getItemByListId(listId);
              item && cc.tween(item).to(.1, {
                scale: 1.05
              }).to(.1, {
                scale: 1
              }).start();
            }
          }, timeInSecond + .1);
          timeInSecond <= 0 && t._onScrolling();
        }
      };
      List.prototype._calcNearestItem = function() {
        var t = this;
        t.nearestListId = null;
        var data, center;
        t._virtual && t._calcViewPos();
        var vTop, vRight, vBottom, vLeft;
        vTop = t.viewTop;
        vRight = t.viewRight;
        vBottom = t.viewBottom;
        vLeft = t.viewLeft;
        var breakFor = false;
        for (var n = 0; n < t.content.childrenCount && !breakFor; n += t._colLineNum) {
          data = t._virtual ? t.displayData[n] : t._calcExistItemPos(n);
          if (data) {
            center = t._sizeType ? (data.top + data.bottom) / 2 : center = (data.left + data.right) / 2;
            switch (t._alignCalcType) {
             case 1:
              if (data.right >= vLeft) {
                t.nearestListId = data.id;
                vLeft > center && (t.nearestListId += t._colLineNum);
                breakFor = true;
              }
              break;

             case 2:
              if (data.left <= vRight) {
                t.nearestListId = data.id;
                vRight < center && (t.nearestListId += t._colLineNum);
                breakFor = true;
              }
              break;

             case 3:
              if (data.bottom <= vTop) {
                t.nearestListId = data.id;
                vTop < center && (t.nearestListId += t._colLineNum);
                breakFor = true;
              }
              break;

             case 4:
              if (data.top >= vBottom) {
                t.nearestListId = data.id;
                vBottom > center && (t.nearestListId += t._colLineNum);
                breakFor = true;
              }
            }
          }
        }
        data = t._virtual ? t.displayData[t.displayItemNum - 1] : t._calcExistItemPos(t._numItems - 1);
        if (data && data.id == t._numItems - 1) {
          center = t._sizeType ? (data.top + data.bottom) / 2 : center = (data.left + data.right) / 2;
          switch (t._alignCalcType) {
           case 1:
            vRight > center && (t.nearestListId = data.id);
            break;

           case 2:
            vLeft < center && (t.nearestListId = data.id);
            break;

           case 3:
            vBottom < center && (t.nearestListId = data.id);
            break;

           case 4:
            vTop > center && (t.nearestListId = data.id);
          }
        }
      };
      List.prototype.prePage = function(timeInSecond) {
        void 0 === timeInSecond && (timeInSecond = .5);
        if (!this.checkInited()) return;
        this.skipPage(this.curPageNum - 1, timeInSecond);
      };
      List.prototype.nextPage = function(timeInSecond) {
        void 0 === timeInSecond && (timeInSecond = .5);
        if (!this.checkInited()) return;
        this.skipPage(this.curPageNum + 1, timeInSecond);
      };
      List.prototype.skipPage = function(pageNum, timeInSecond) {
        var t = this;
        if (!t.checkInited()) return;
        if (t._slideMode != SlideType.PAGE) return cc.error("This function is not allowed to be called, Must SlideMode = PAGE!");
        if (pageNum < 0 || pageNum >= t._numItems) return;
        if (t.curPageNum == pageNum) return;
        t.curPageNum = pageNum;
        t.pageChangeEvent && cc.Component.EventHandler.emitEvents([ t.pageChangeEvent ], pageNum);
        t.scrollTo(pageNum, timeInSecond);
      };
      List.prototype.calcCustomSize = function(numItems) {
        var t = this;
        if (!t.checkInited()) return;
        if (!t._itemTmp) return cc.error("Unset template item!");
        if (!t.renderEvent) return cc.error("Unset Render-Event!");
        t._customSize = {};
        var temp = cc.instantiate(t._itemTmp);
        t.content.addChild(temp);
        for (var n = 0; n < numItems; n++) {
          cc.Component.EventHandler.emitEvents([ t.renderEvent ], temp, n);
          temp.height == t._itemSize.height && temp.width == t._itemSize.width || (t._customSize[n] = t._sizeType ? temp.height : temp.width);
        }
        Object.keys(t._customSize).length || (t._customSize = null);
        temp.removeFromParent();
        temp.destroy && temp.destroy();
        return t._customSize;
      };
      __decorate([ property({
        type: cc.Enum(TemplateType),
        tooltip: false
      }) ], List.prototype, "templateType", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: false,
        visible: function() {
          return this.templateType == TemplateType.NODE;
        }
      }) ], List.prototype, "tmpNode", void 0);
      __decorate([ property({
        type: cc.Prefab,
        tooltip: false,
        visible: function() {
          return this.templateType == TemplateType.PREFAB;
        }
      }) ], List.prototype, "tmpPrefab", void 0);
      __decorate([ property() ], List.prototype, "_slideMode", void 0);
      __decorate([ property({
        type: cc.Enum(SlideType),
        tooltip: false
      }) ], List.prototype, "slideMode", null);
      __decorate([ property({
        type: cc.Float,
        range: [ 0, 1, .1 ],
        tooltip: false,
        slide: true,
        visible: function() {
          return this._slideMode == SlideType.PAGE;
        }
      }) ], List.prototype, "pageDistance", void 0);
      __decorate([ property({
        type: cc.Component.EventHandler,
        tooltip: false,
        visible: function() {
          return this._slideMode == SlideType.PAGE;
        }
      }) ], List.prototype, "pageChangeEvent", void 0);
      __decorate([ property() ], List.prototype, "_virtual", void 0);
      __decorate([ property({
        type: cc.Boolean,
        tooltip: false
      }) ], List.prototype, "virtual", null);
      __decorate([ property({
        tooltip: false,
        visible: function() {
          var val = this.slideMode == SlideType.NORMAL;
          val || (this.cyclic = false);
          return val;
        }
      }) ], List.prototype, "cyclic", void 0);
      __decorate([ property({
        tooltip: false,
        visible: function() {
          return this.virtual;
        }
      }) ], List.prototype, "lackCenter", void 0);
      __decorate([ property({
        tooltip: false,
        visible: function() {
          var val = this.virtual && !this.lackCenter;
          val || (this.lackSlide = false);
          return val;
        }
      }) ], List.prototype, "lackSlide", void 0);
      __decorate([ property({
        type: cc.Integer
      }) ], List.prototype, "_updateRate", void 0);
      __decorate([ property({
        type: cc.Integer,
        range: [ 0, 6, 1 ],
        tooltip: false,
        slide: true
      }) ], List.prototype, "updateRate", null);
      __decorate([ property({
        type: cc.Integer,
        range: [ 0, 12, 1 ],
        tooltip: false,
        slide: true
      }) ], List.prototype, "frameByFrameRenderNum", void 0);
      __decorate([ property({
        type: cc.Component.EventHandler,
        tooltip: false
      }) ], List.prototype, "renderEvent", void 0);
      __decorate([ property({
        type: cc.Enum(SelectedType),
        tooltip: false
      }) ], List.prototype, "selectedMode", void 0);
      __decorate([ property({
        tooltip: false,
        visible: function() {
          return this.selectedMode == SelectedType.SINGLE;
        }
      }) ], List.prototype, "repeatEventSingle", void 0);
      __decorate([ property({
        type: cc.Component.EventHandler,
        tooltip: false,
        visible: function() {
          return this.selectedMode > SelectedType.NONE;
        }
      }) ], List.prototype, "selectedEvent", void 0);
      __decorate([ property({
        serializable: false
      }) ], List.prototype, "_numItems", void 0);
      List = __decorate([ ccclass, disallowMultiple(), menu("\u81ea\u5b9a\u4e49\u7ec4\u4ef6/List"), requireComponent(cc.ScrollView), executionOrder(-5e3) ], List);
      return List;
    }(cc.Component);
    exports.default = List;
    cc._RF.pop();
  }, {
    "./ListItem": "ListItem"
  } ],
  TimeTickerDown: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "938d9cocT1ARLr8IWyqhEtu", "TimeTickerDown");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ComponentBase_1 = require("./ComponentBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TimeTickerDown = function(_super) {
      __extends(TimeTickerDown, _super);
      function TimeTickerDown() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.total = 60;
        _this.down = false;
        _this.label = null;
        return _this;
      }
      TimeTickerDown.prototype.run = function() {
        this.down = true;
        this.label = this.node.getComponent(cc.Label) || this.node.getComponent(cc.RichText);
        this.label.string = String(this.total);
        this.node.children[0].active = false;
        this.down = true;
        this.schedule(this.timeDown, 1);
      };
      TimeTickerDown.prototype.timeDown = function() {
        this.total -= 1;
        this.label.string = String(this.total);
        if (this.total <= 0) {
          this.unschedule(this.timeDown);
          this.label.string = "\u53d1\u9001\u9a8c\u8bc1\u7801";
          this.node.children[0].active = true;
          this.down = false;
          this.total = 60;
        }
      };
      TimeTickerDown = __decorate([ ccclass ], TimeTickerDown);
      return TimeTickerDown;
    }(ComponentBase_1.default);
    exports.default = TimeTickerDown;
    cc._RF.pop();
  }, {
    "./ComponentBase": "ComponentBase"
  } ],
  closeScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "92ae42OwmRPAo5iZWrO+82S", "closeScene");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ComponentBase_1 = require("./common/ComponentBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var closeScene = function(_super) {
      __extends(closeScene, _super);
      function closeScene() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      closeScene.prototype.start = function() {
        this.TouchOn(this.node, this.goToHall);
      };
      closeScene.prototype.goToHall = function() {
        cc.director.loadScene("hall");
      };
      closeScene = __decorate([ ccclass ], closeScene);
      return closeScene;
    }(ComponentBase_1.default);
    exports.default = closeScene;
    cc._RF.pop();
  }, {
    "./common/ComponentBase": "ComponentBase"
  } ],
  roundRect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a641fsX1MlHubm4STildnLZ", "roundRect");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
    var roundRect = function(_super) {
      __extends(roundRect, _super);
      function roundRect() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.radius = 0;
        _this.grap = null;
        return _this;
      }
      roundRect.prototype.start = function() {
        this.grap = this.node.getComponent(cc.Graphics);
        null == this.grap && (this.grap = this.node.addComponent(cc.Graphics));
        this.grap.roundRect(-this.node.width / 2, -this.node.height / 2, this.node.width, this.node.height, this.radius);
        this.grap.fill();
      };
      __decorate([ property() ], roundRect.prototype, "radius", void 0);
      roundRect = __decorate([ ccclass, executeInEditMode ], roundRect);
      return roundRect;
    }(cc.Component);
    exports.default = roundRect;
    cc._RF.pop();
  }, {} ],
  tips: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "49402NfInJBc476hYNtzM3c", "tips");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Tips = void 0;
    var Tips = function() {
      function Tips() {}
      Tips.Show = function(txt, dt) {
        void 0 === dt && (dt = .8);
        var box = new cc.Node();
        var bg = new cc.Node();
        var texture = new cc.Texture2D();
        var spriteFrame = new cc.SpriteFrame();
        texture.initWithData(new Uint8Array([ 0, 0, 0 ]), cc.Texture2D.PixelFormat.RGB888, 1, 1);
        spriteFrame.setTexture(texture);
        spriteFrame.setRect(cc.rect(0, 0, .8 * cc.winSize.width, 60));
        var sp = bg.addComponent(cc.Sprite);
        sp.spriteFrame = spriteFrame;
        box.x = box.y = bg.x = bg.y = 0;
        bg.opacity = 100;
        box.addChild(bg);
        var lbNode = new cc.Node();
        lbNode.name = "Tips";
        lbNode.active = true;
        lbNode.opacity = 255;
        lbNode.x = lbNode.y = -5;
        var lab = lbNode.addComponent(cc.Label);
        lab.string = txt;
        lab.fontSize = 26;
        box.addChild(lbNode);
        var parent = cc.director.getScene().getComponentInChildren(cc.Canvas);
        parent.node.addChild(box);
        box.y = -300;
        box.x = 0;
        cc.tween(box).to(dt, {
          y: 0
        }).delay(.5).call(function() {
          cc.Tween.stopAllByTarget(lbNode);
          box.removeFromParent();
        }).start();
      };
      return Tips;
    }();
    exports.Tips = Tips;
    cc._RF.pop();
  }, {} ],
  toggle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "820fen5tiRLeZXkrn1UdFkD", "toggle");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var toggle = function(_super) {
      __extends(toggle, _super);
      function toggle() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.viewLeft = null;
        _this.viewRight = null;
        _this.leftToggle = null;
        _this.rightToggle = null;
        return _this;
      }
      toggle.prototype.start = function() {
        this.viewRight.active = false;
      };
      toggle.prototype.toggleContainerCall = function() {
        this.viewLeft.active = this.leftToggle.isChecked;
        this.viewRight.active = this.rightToggle.isChecked;
      };
      __decorate([ property(cc.Node) ], toggle.prototype, "viewLeft", void 0);
      __decorate([ property(cc.Node) ], toggle.prototype, "viewRight", void 0);
      __decorate([ property(cc.Toggle) ], toggle.prototype, "leftToggle", void 0);
      __decorate([ property(cc.Toggle) ], toggle.prototype, "rightToggle", void 0);
      toggle = __decorate([ ccclass ], toggle);
      return toggle;
    }(cc.Component);
    exports.default = toggle;
    cc._RF.pop();
  }, {} ]
}, {}, [ "closeScene", "ClickHide", "CloseView", "ComponentBase", "CountryCode", "EventManger", "TimeTickerDown", "roundRect", "List", "ListItem", "tips", "toggle" ]);
//# sourceMappingURL=index.js.map
