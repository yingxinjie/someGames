
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
var C_User_1 = require("../../user/C_User");
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
                            uuid: C_User_1.C_User.ins.uid,
                            token: C_User_1.C_User.ins.token,
                        };
                        return [4 /*yield*/, Utils_1.Utils.Post(config_1.HttpPath.userQuery, info)];
                    case 1:
                        res = _a.sent();
                        if (res.code != 200) {
                            return [2 /*return*/];
                        }
                        back = res.data;
                        C_User_1.C_User.ins.uid = back.id;
                        C_User_1.C_User.ins.me.sex = back.sex;
                        C_User_1.C_User.ins.me.vipType = back.vipType;
                        C_User_1.C_User.ins.me.code = back.code;
                        C_User_1.C_User.ins.me.phoneAreaCode = back.phoneAreaCode;
                        C_User_1.C_User.ins.me.phoneNumber = back.phoneNumber;
                        C_User_1.C_User.ins.me.gold = back.gold;
                        C_User_1.C_User.ins.me.diamond = back.diamond;
                        C_User_1.C_User.ins.me.lastLoginTime = back.lastLoginTime;
                        C_User_1.C_User.ins.me.clubNum = back.clubNum;
                        C_User_1.C_User.ins.me.joinClubNum = back.joinClubNum;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXHZpZXdcXGhhbGxcXGZheGlhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRkFBNEU7QUFDNUUsOENBQXlEO0FBQ3pELDRDQUEyQztBQUMzQyw0Q0FBMkM7QUFDM0Msd0RBQXVEO0FBR2pELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFhO0lBQWpEO1FBQUEscUVBMERDO1FBeERXLGVBQVMsR0FBa0IsSUFBSSxDQUFDO1FBRWhDLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsYUFBTyxHQUFZLElBQUksQ0FBQzs7SUFtRHBDLENBQUM7SUEvQ2Esc0JBQUssR0FBZjtRQUNJLDhDQUE4QztRQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUE7UUFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBR2xELGFBQWE7UUFFYixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUdhLDRCQUFXLEdBQXpCOzs7Ozs7d0JBQ1EsSUFBSSxHQUFROzRCQUNaLElBQUksRUFBRSxlQUFNLENBQUMsR0FBRyxDQUFDLEdBQUc7NEJBQ3BCLEtBQUssRUFBRSxlQUFNLENBQUMsR0FBRyxDQUFDLEtBQUs7eUJBQzFCLENBQUE7d0JBRWMscUJBQU0sYUFBSyxDQUFDLElBQUksQ0FBQyxpQkFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsRUFBQTs7d0JBQXJELEdBQUcsR0FBUSxTQUEwQzt3QkFFekQsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBRTs0QkFDakIsc0JBQU87eUJBQ1Y7d0JBRUcsSUFBSSxHQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUM7d0JBQ3pCLGVBQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7d0JBQ3pCLGVBQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO3dCQUM3QixlQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDckMsZUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7d0JBQy9CLGVBQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO3dCQUNqRCxlQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzt3QkFDN0MsZUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7d0JBQy9CLGVBQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNyQyxlQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQzt3QkFDakQsZUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ3JDLGVBQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDOzs7OztLQUNoRDtJQUdPLG9DQUFtQixHQUEzQjtRQUNJLHlCQUFXLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVPLGtDQUFpQixHQUF6QjtRQUNJLHlCQUFXLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUF0REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQzs2Q0FDZ0I7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDZ0I7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDYztJQVBmLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0EwRDFCO0lBQUQsYUFBQztDQTFERCxBQTBEQyxDQTFEbUMsdUJBQWEsR0EwRGhEO2tCQTFEb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gXCIuLi8uLi8uLi8uLi8wMF9iYXNlL3NjcmlwdC9jb21tb24vQ29tcG9uZW50QmFzZVwiO1xyXG5pbXBvcnQgeyBIdHRwUGF0aCwgVmlld0VudW0gfSBmcm9tIFwiLi4vLi4vY29uZmlnL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBDX1VzZXIgfSBmcm9tIFwiLi4vLi4vdXNlci9DX1VzZXJcIjtcclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi4vLi4vY29uZmlnL1V0aWxzXCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL2NvbmZpZy9WaWV3TWFuYWdlclwiO1xyXG5pbXBvcnQgb3BlbiBmcm9tIFwiLi4vLi4vb3BlblwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGZheGlhbiBleHRlbmRzIENvbXBvbmVudEJhc2Uge1xyXG4gICAgQHByb3BlcnR5KGNjLlNjcm9sbFZpZXcpXHJcbiAgICBwcml2YXRlIHBhaUp1TGlzdDogY2MuU2Nyb2xsVmlldyA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgY3JlYXRlQnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgam9pbkJ0bjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhpcy5wYWlKdUxpc3QuY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIHRoaXMuVG91Y2hPbih0aGlzLmNyZWF0ZUJ0biwgdGhpcy5vbkNsaWNrQ3JlYXRlSnVMZUJ1KVxyXG4gICAgICAgIHRoaXMuVG91Y2hPbih0aGlzLmpvaW5CdG4sIHRoaXMub25DbGlja0pvaW5KdUxlQnUpXHJcblxyXG5cclxuICAgICAgICAvL+aPkuWFpeafpeivouS4quS6uuS/oeaBr+eahOaVsOaNrlxyXG5cclxuICAgICAgICB0aGlzLnF1ZXJ5UGVyc29uKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgcXVlcnlQZXJzb24oKSB7XHJcbiAgICAgICAgbGV0IGluZm86IGFueSA9IHtcclxuICAgICAgICAgICAgdXVpZDogQ19Vc2VyLmlucy51aWQsXHJcbiAgICAgICAgICAgIHRva2VuOiBDX1VzZXIuaW5zLnRva2VuLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJlczogYW55ID0gYXdhaXQgVXRpbHMuUG9zdChIdHRwUGF0aC51c2VyUXVlcnksIGluZm8pO1xyXG5cclxuICAgICAgICBpZiAocmVzLmNvZGUgIT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBiYWNrOiBhbnkgPSByZXMuZGF0YTtcclxuICAgICAgICBDX1VzZXIuaW5zLnVpZCA9IGJhY2suaWQ7XHJcbiAgICAgICAgQ19Vc2VyLmlucy5tZS5zZXggPSBiYWNrLnNleDtcclxuICAgICAgICBDX1VzZXIuaW5zLm1lLnZpcFR5cGUgPSBiYWNrLnZpcFR5cGU7XHJcbiAgICAgICAgQ19Vc2VyLmlucy5tZS5jb2RlID0gYmFjay5jb2RlO1xyXG4gICAgICAgIENfVXNlci5pbnMubWUucGhvbmVBcmVhQ29kZSA9IGJhY2sucGhvbmVBcmVhQ29kZTtcclxuICAgICAgICBDX1VzZXIuaW5zLm1lLnBob25lTnVtYmVyID0gYmFjay5waG9uZU51bWJlcjtcclxuICAgICAgICBDX1VzZXIuaW5zLm1lLmdvbGQgPSBiYWNrLmdvbGQ7XHJcbiAgICAgICAgQ19Vc2VyLmlucy5tZS5kaWFtb25kID0gYmFjay5kaWFtb25kO1xyXG4gICAgICAgIENfVXNlci5pbnMubWUubGFzdExvZ2luVGltZSA9IGJhY2subGFzdExvZ2luVGltZTtcclxuICAgICAgICBDX1VzZXIuaW5zLm1lLmNsdWJOdW0gPSBiYWNrLmNsdWJOdW07XHJcbiAgICAgICAgQ19Vc2VyLmlucy5tZS5qb2luQ2x1Yk51bSA9IGJhY2suam9pbkNsdWJOdW07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgb25DbGlja0NyZWF0ZUp1TGVCdSgpIHtcclxuICAgICAgICBWaWV3TWFuYWdlci5BbGVydChcImFsZXJ0Q3JlYXRlSnVMZUJ1XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DbGlja0pvaW5KdUxlQnUoKSB7XHJcbiAgICAgICAgVmlld01hbmFnZXIuQWxlcnQoXCJhbGVydEppYVJ1SmxiXCIpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==