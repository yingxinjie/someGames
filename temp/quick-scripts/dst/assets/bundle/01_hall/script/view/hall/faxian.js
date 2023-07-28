
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/01_hall/script/view/hall/faxian.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '42254M3zkpOILPqgNh+MZ04', 'faxian');
// bundle/01_hall/script/view/hall/faxian.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentBase_1 = require("../../../../00_base/script/common/ComponentBase");
var config_1 = require("../../config/config");
var UserInfo_1 = require("../../config/UserInfo");
var Utils_1 = require("../../config/Utils");
var ViewManager_1 = require("../../config/ViewManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var faxian = /** @class */ (function (_super) {
    __extends(faxian, _super);
    function faxian() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paiJuList = null;
        _this.createBtn = null;
        _this.joinBtn = null;
        return _this;
    }
    faxian.prototype.start = function () {
        // this.paiJuList.content.removeAllChildren();
        this.TouchOn(this.createBtn, this.onClickCreateJuLeBu);
        this.TouchOn(this.joinBtn, this.onClickJoinJuLeBu);
        //插入查询个人信息的数据
        this.queryPerson();
    };
    faxian.prototype.queryPerson = function () {
        return __awaiter(this, void 0, void 0, function () {
            var info, res, back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        info = {
                            uuid: UserInfo_1.UserInfo.uuid,
                            token: UserInfo_1.UserInfo.token,
                        };
                        return [4 /*yield*/, Utils_1.Utils.Post(config_1.HttpPath.queryPerson, info)];
                    case 1:
                        res = _a.sent();
                        if (res.code != 200) {
                            return [2 /*return*/];
                        }
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
                        return [2 /*return*/];
                }
            });
        });
    };
    faxian.prototype.onClickCreateJuLeBu = function () {
        ViewManager_1.ViewManager.Alert("alertCreateJuLeBu");
    };
    faxian.prototype.onClickJoinJuLeBu = function () {
        ViewManager_1.ViewManager.Alert("alertJiaRuJlb");
    };
    __decorate([
        property(cc.ScrollView)
    ], faxian.prototype, "paiJuList", void 0);
    __decorate([
        property(cc.Node)
    ], faxian.prototype, "createBtn", void 0);
    __decorate([
        property(cc.Node)
    ], faxian.prototype, "joinBtn", void 0);
    faxian = __decorate([
        ccclass
    ], faxian);
    return faxian;
}(ComponentBase_1.default));
exports.default = faxian;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXHZpZXdcXGhhbGxcXGZheGlhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRkFBNEU7QUFDNUUsOENBQXlEO0FBQ3pELGtEQUFpRDtBQUNqRCw0Q0FBMkM7QUFDM0Msd0RBQXVEO0FBR2pELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFhO0lBQWpEO1FBQUEscUVBMERDO1FBeERXLGVBQVMsR0FBa0IsSUFBSSxDQUFDO1FBRWhDLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsYUFBTyxHQUFZLElBQUksQ0FBQzs7SUFtRHBDLENBQUM7SUEvQ2Esc0JBQUssR0FBZjtRQUNJLDhDQUE4QztRQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUE7UUFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBR2xELGFBQWE7UUFFYixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUdhLDRCQUFXLEdBQXpCOzs7Ozs7d0JBQ1EsSUFBSSxHQUFROzRCQUNaLElBQUksRUFBRSxtQkFBUSxDQUFDLElBQUk7NEJBQ25CLEtBQUssRUFBRSxtQkFBUSxDQUFDLEtBQUs7eUJBQ3hCLENBQUE7d0JBRWMscUJBQU0sYUFBSyxDQUFDLElBQUksQ0FBQyxpQkFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBQTs7d0JBQXZELEdBQUcsR0FBUSxTQUE0Qzt3QkFFM0QsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBRTs0QkFDakIsc0JBQU87eUJBQ1Y7d0JBRUcsSUFBSSxHQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUM7d0JBQ3pCLG1CQUFRLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7d0JBQ3ZCLG1CQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7d0JBQzNCLG1CQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ2hDLG1CQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7d0JBQzFCLG1CQUFRLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7d0JBQzVDLG1CQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7d0JBQ3hDLG1CQUFRLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2xDLG1CQUFRLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3hDLG1CQUFRLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7d0JBQzVDLG1CQUFRLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3hDLG1CQUFRLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Ozs7O0tBQ25EO0lBR08sb0NBQW1CLEdBQTNCO1FBQ0kseUJBQVcsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU8sa0NBQWlCLEdBQXpCO1FBQ0kseUJBQVcsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQXRERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDOzZDQUNnQjtJQUV4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNnQjtJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNjO0lBUGYsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQTBEMUI7SUFBRCxhQUFDO0NBMURELEFBMERDLENBMURtQyx1QkFBYSxHQTBEaEQ7a0JBMURvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudEJhc2UgZnJvbSBcIi4uLy4uLy4uLy4uLzAwX2Jhc2Uvc2NyaXB0L2NvbW1vbi9Db21wb25lbnRCYXNlXCI7XHJcbmltcG9ydCB7IEh0dHBQYXRoLCBWaWV3RW51bSB9IGZyb20gXCIuLi8uLi9jb25maWcvY29uZmlnXCI7XHJcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4uLy4uL2NvbmZpZy9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi8uLi9jb25maWcvVXRpbHNcIjtcclxuaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwiLi4vLi4vY29uZmlnL1ZpZXdNYW5hZ2VyXCI7XHJcbmltcG9ydCBvcGVuIGZyb20gXCIuLi8uLi9vcGVuXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZmF4aWFuIGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XHJcbiAgICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcclxuICAgIHByaXZhdGUgcGFpSnVMaXN0OiBjYy5TY3JvbGxWaWV3ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBjcmVhdGVCdG46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBqb2luQnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzLnBhaUp1TGlzdC5jb250ZW50LnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgdGhpcy5Ub3VjaE9uKHRoaXMuY3JlYXRlQnRuLCB0aGlzLm9uQ2xpY2tDcmVhdGVKdUxlQnUpXHJcbiAgICAgICAgdGhpcy5Ub3VjaE9uKHRoaXMuam9pbkJ0biwgdGhpcy5vbkNsaWNrSm9pbkp1TGVCdSlcclxuXHJcblxyXG4gICAgICAgIC8v5o+S5YWl5p+l6K+i5Liq5Lq65L+h5oGv55qE5pWw5o2uXHJcblxyXG4gICAgICAgIHRoaXMucXVlcnlQZXJzb24oKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBxdWVyeVBlcnNvbigpIHtcclxuICAgICAgICBsZXQgaW5mbzogYW55ID0ge1xyXG4gICAgICAgICAgICB1dWlkOiBVc2VySW5mby51dWlkLFxyXG4gICAgICAgICAgICB0b2tlbjogVXNlckluZm8udG9rZW4sXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmVzOiBhbnkgPSBhd2FpdCBVdGlscy5Qb3N0KEh0dHBQYXRoLnF1ZXJ5UGVyc29uLCBpbmZvKTtcclxuXHJcbiAgICAgICAgaWYgKHJlcy5jb2RlICE9IDIwMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYmFjazogYW55ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgVXNlckluZm8udWlkID0gYmFjay5pZDtcclxuICAgICAgICBVc2VySW5mby5nZW5kZXIgPSBiYWNrLnNleDtcclxuICAgICAgICBVc2VySW5mby52aXBUeXBlID0gYmFjay52aXBUeXBlO1xyXG4gICAgICAgIFVzZXJJbmZvLmNvZGUgPSBiYWNrLmNvZGU7XHJcbiAgICAgICAgVXNlckluZm8ucGhvbmVBcmVhQ29kZSA9IGJhY2sucGhvbmVBcmVhQ29kZTtcclxuICAgICAgICBVc2VySW5mby5waG9uZU51bWJlciA9IGJhY2sucGhvbmVOdW1iZXI7XHJcbiAgICAgICAgVXNlckluZm8uZ29sZCA9IE51bWJlcihiYWNrLmdvbGQpO1xyXG4gICAgICAgIFVzZXJJbmZvLmRpYW1vbmQgPSBOdW1iZXIoYmFjay5kaWFtb25kKTtcclxuICAgICAgICBVc2VySW5mby5sYXN0TG9naW5UaW1lID0gYmFjay5sYXN0TG9naW5UaW1lO1xyXG4gICAgICAgIFVzZXJJbmZvLmNsdWJOdW0gPSBOdW1iZXIoYmFjay5jbHViTnVtKTtcclxuICAgICAgICBVc2VySW5mby5qb2luQ2x1Yk51bSA9IE51bWJlcihiYWNrLmpvaW5DbHViTnVtKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBvbkNsaWNrQ3JlYXRlSnVMZUJ1KCkge1xyXG4gICAgICAgIFZpZXdNYW5hZ2VyLkFsZXJ0KFwiYWxlcnRDcmVhdGVKdUxlQnVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNsaWNrSm9pbkp1TGVCdSgpIHtcclxuICAgICAgICBWaWV3TWFuYWdlci5BbGVydChcImFsZXJ0SmlhUnVKbGJcIik7XHJcbiAgICB9XHJcblxyXG59Il19