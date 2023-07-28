
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/01_hall/script/widget/chuangjianjulebu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXHdpZGdldFxcY2h1YW5namlhbmp1bGVidS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEVBQXlFO0FBQ3pFLDZEQUE0RDtBQUM1RCx5Q0FBd0M7QUFDeEMsMkNBQTRDO0FBRXRDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQThDLG9DQUFhO0lBQTNEO1FBQUEscUVBOENDO1FBNUNXLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsZ0JBQVUsR0FBZSxJQUFJLENBQUM7UUFHOUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLFlBQU0sR0FBVyxDQUFDLENBQUM7O0lBaUMvQixDQUFDO0lBL0JhLGdDQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDM0MsV0FBVztJQUNmLENBQUM7SUFFYSxtQ0FBUSxHQUF0Qjs7Ozs7O3dCQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7d0JBQ1osSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUU7NEJBQzlCLFdBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7NEJBQ3hCLHNCQUFPO3lCQUNWO3dCQUVHLElBQUksR0FBRzs0QkFDUCxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNOzRCQUM5QixTQUFTLEVBQUUsR0FBRzs0QkFDZCxNQUFNLEVBQUUsR0FBRzt5QkFDZCxDQUFBO3dCQUVjLHFCQUFNLGFBQUssQ0FBQyxJQUFJLENBQUMsaUJBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEVBQUE7O3dCQUF4RCxHQUFHLEdBQVEsU0FBNkM7d0JBQzVELElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUU7NEJBQ2xCLHNCQUFPO3lCQUNWO3dCQUVELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7Ozs7S0FDdkI7SUF0Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDZTtJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3dEQUNpQjtJQUd0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUNnQjtJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNjO0lBWGYsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0E4Q3BDO0lBQUQsdUJBQUM7Q0E5Q0QsQUE4Q0MsQ0E5QzZDLHVCQUFhLEdBOEMxRDtrQkE5Q29CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gXCIuLi8uLi8uLi8wMF9iYXNlL3NjcmlwdC9jb21tb24vQ29tcG9uZW50QmFzZVwiO1xuaW1wb3J0IHsgVGlwcyB9IGZyb20gXCIuLi8uLi8uLi8wMF9iYXNlL3NjcmlwdC91aXV0aWxzL3RpcHNcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4uL2NvbmZpZy9VdGlsc1wiO1xuaW1wb3J0IHsgSHR0cFBhdGggfSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2h1YW5namlhbmp1bGVidSBleHRlbmRzIENvbXBvbmVudEJhc2Uge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgY2xvc2VCdG46IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgcHJpdmF0ZSBqdUxlQnVOYW1lOiBjYy5FZGl0Qm94ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgY3JlYXRlQnRuOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgbG9nb0J0bjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIGxvZ29JZDogbnVtYmVyID0gMDtcblxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5Ub3VjaE9uKHRoaXMuY2xvc2VCdG4sIHRoaXMuYWxlcnREZXN0b3J5KTtcbiAgICAgICAgdGhpcy5Ub3VjaE9uKHRoaXMuY3JlYXRlQnRuLCB0aGlzLm9uQ3JlYXRlKVxuICAgICAgICAvL+aYvuekumxvZ2/nmoTlm77moIdcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIG9uQ3JlYXRlKCkge1xuICAgICAgICBjYy5sb2coXCLliJvlu7pcIilcbiAgICAgICAgaWYgKHRoaXMuanVMZUJ1TmFtZS5zdHJpbmcgPT0gXCJcIikge1xuICAgICAgICAgICAgVGlwcy5TaG93KFwi5L+x5LmQ6YOo5ZCN56ew5LiN6IO95Li656m6IVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbmZvID0ge1xuICAgICAgICAgICAgXCJuYW1lXCI6IHRoaXMuanVMZUJ1TmFtZS5zdHJpbmcsXG4gICAgICAgICAgICBcImljb25QaWNcIjogXCIxXCIsXG4gICAgICAgICAgICBcImFyZWFcIjogXCIyXCIsXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzOiBhbnkgPSBhd2FpdCBVdGlscy5Qb3N0KEh0dHBQYXRoLmNyZWF0ZUp1TGVCdSwgaW5mbyk7XG4gICAgICAgIGlmIChyZXMuY29kZSAhPT0gMjAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFsZXJ0RGVzdG9yeSgpO1xuICAgIH1cblxuXG5cblxuXG59XG4iXX0=