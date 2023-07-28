"use strict";
cc._RF.push(module, '26f4eZIp6FHU4c5Afucdn//', 'chuangjianjulebu');
// bundle/01_hall/script/widget/chuangjianjulebu.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ComponentBase_1 = require("../../../00_base/script/common/ComponentBase");
var tips_1 = require("../../../00_base/script/uiutils/tips");
var Utils_1 = require("../config/Utils");
var config_1 = require("../config/config");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var chuangjianjulebu = /** @class */ (function (_super) {
    __extends(chuangjianjulebu, _super);
    function chuangjianjulebu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        _this.juLeBuName = null;
        _this.createBtn = null;
        _this.logoBtn = null;
        _this.logoId = 0;
        return _this;
    }
    chuangjianjulebu.prototype.start = function () {
        this.TouchOn(this.closeBtn, this.alertDestory);
        this.TouchOn(this.createBtn, this.onCreate);
        //显示logo的图标
    };
    chuangjianjulebu.prototype.onCreate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var info, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cc.log("创建");
                        if (this.juLeBuName.string == "") {
                            tips_1.Tips.Show("俱乐部名称不能为空!");
                            return [2 /*return*/];
                        }
                        info = {
                            "name": this.juLeBuName.string,
                            "iconPic": "1",
                            "area": "2",
                        };
                        return [4 /*yield*/, Utils_1.Utils.Post(config_1.HttpPath.createJuLeBu, info)];
                    case 1:
                        res = _a.sent();
                        if (res.code !== 200) {
                            return [2 /*return*/];
                        }
                        this.alertDestory();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        property(cc.Node)
    ], chuangjianjulebu.prototype, "closeBtn", void 0);
    __decorate([
        property(cc.EditBox)
    ], chuangjianjulebu.prototype, "juLeBuName", void 0);
    __decorate([
        property(cc.Node)
    ], chuangjianjulebu.prototype, "createBtn", void 0);
    __decorate([
        property(cc.Node)
    ], chuangjianjulebu.prototype, "logoBtn", void 0);
    chuangjianjulebu = __decorate([
        ccclass
    ], chuangjianjulebu);
    return chuangjianjulebu;
}(ComponentBase_1.default));
exports.default = chuangjianjulebu;

cc._RF.pop();