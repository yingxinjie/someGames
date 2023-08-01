"use strict";
cc._RF.push(module, '3908bmzVkJFgbRXE+dxWKDe', 'deskMgr');
// bundle/02_game/script/config/deskMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeskMgr = void 0;
var deskMgr = /** @class */ (function () {
    function deskMgr() {
    }
    Object.defineProperty(deskMgr, "ins", {
        get: function () {
            if (this.sing == null) {
                this.sing = new deskMgr();
            }
            return this.sing;
        },
        enumerable: false,
        configurable: true
    });
    deskMgr.sing = null;
    return deskMgr;
}());
/** 桌内管理 */
exports.DeskMgr = deskMgr.ins;

cc._RF.pop();