"use strict";
cc._RF.push(module, '0e12bzmwiBNj6dVazbQO45k', 'C_Hall');
// bundle/01_hall/script/hall/C_Hall.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C_Hall = void 0;
var C_Hall = /** @class */ (function () {
    function C_Hall() {
    }
    Object.defineProperty(C_Hall, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new C_Hall();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    C_Hall._instance = null;
    /**事件*/
    C_Hall.evt = new cc.EventTarget();
    return C_Hall;
}());
exports.C_Hall = C_Hall;

cc._RF.pop();