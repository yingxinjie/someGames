
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/bundle/01_hall/script/config/UserInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0146dnqm/FPs5vCwEWDHeeU', 'UserInfo');
// bundle/01_hall/script/config/UserInfo.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfo = void 0;
var userInfo = /** @class */ (function () {
    function userInfo() {
        this._uuid = "";
        this._token = "";
        /** 昵称 */
        this.nick = "";
        /** 金币 */
        this.gold = 0;
        /** 年龄 */
        this.gender = "";
        /** 游戏id */
        this.gameid = 0;
        /** 房间id */
        this.roomid = 0;
        /** 前 */
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
        /** 游戏长连接管理 */
        this.cwebsocket = null;
    }
    Object.defineProperty(userInfo, "ins", {
        get: function () {
            if (this.sing == null) {
                this.sing = new userInfo();
            }
            return this.sing;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(userInfo.prototype, "uuid", {
        /** uid */
        get: function () {
            var uuid = cc.sys.localStorage.getItem("uuid");
            if (!uuid || uuid == "") {
                return "";
            }
            this._uuid = uuid;
            return this._uuid;
        },
        /** uid */
        set: function (val) {
            cc.sys.localStorage.setItem("uuid", val);
            this._uuid = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(userInfo.prototype, "token", {
        get: function () {
            var token = cc.sys.localStorage.getItem("token");
            if (!token) {
                return "";
            }
            this._token = token;
            return this._token;
        },
        set: function (val) {
            cc.sys.localStorage.setItem("token", val);
            this._token = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(userInfo.prototype, "language", {
        get: function () {
            var id = cc.sys.localStorage.getItem("language");
            if (!id) {
                id = 0;
            }
            this._language = Number(id);
            return this._language;
        },
        set: function (val) {
            this._language = val;
            cc.sys.localStorage.setItem("language", val);
        },
        enumerable: false,
        configurable: true
    });
    userInfo.prototype.clearLogin = function () {
        cc.sys.localStorage.setItem("token", "");
        cc.sys.localStorage.setItem("uuid", "");
    };
    userInfo.sing = null;
    return userInfo;
}());
/** 玩家信息 */
exports.UserInfo = userInfo.ins;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXGNvbmZpZ1xcVXNlckluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtRQVVZLFVBQUssR0FBVyxFQUFFLENBQUM7UUFrQm5CLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFpQjVCLFNBQVM7UUFDRixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLFNBQVM7UUFDRixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLFNBQVM7UUFDRixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQzNCLFdBQVc7UUFDSixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQzFCLFdBQVc7UUFDSixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQzFCLFFBQVE7UUFDRCxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBR2xCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFFckIsc0JBQWlCLEdBQVcsRUFBRSxDQUFDO1FBRS9CLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFFckIsUUFBRyxHQUFXLEVBQUUsQ0FBQztRQUVqQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBRWxCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBRTNCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBRXpCLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFFcEIsa0JBQWEsR0FBVyxFQUFFLENBQUE7UUFFMUIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUVwQixnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUV2QixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBZTlCLGNBQWM7UUFDUCxlQUFVLEdBQWUsSUFBSSxDQUFDO0lBTXpDLENBQUM7SUFwR0csc0JBQWtCLGVBQUc7YUFBckI7WUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7YUFDOUI7WUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFLRCxzQkFBVywwQkFBSTtRQUlmLFVBQVU7YUFDVjtZQUNJLElBQUksSUFBSSxHQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFLEVBQUU7Z0JBQ3JCLE9BQU8sRUFBRSxDQUFDO2FBQ2I7WUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQztRQWRELFVBQVU7YUFDVixVQUFnQixHQUFXO1lBQ3ZCLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFjRCxzQkFBVywyQkFBSzthQUtoQjtZQUNJLElBQUksS0FBSyxHQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNSLE9BQU8sRUFBRSxDQUFDO2FBQ2I7WUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQWJELFVBQWlCLEdBQVc7WUFDeEIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQWlERCxzQkFBVyw4QkFBUTthQUluQjtZQUNJLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUNMLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDVjtZQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzVCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO2FBWEQsVUFBb0IsR0FBVztZQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztZQUNyQixFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELENBQUM7OztPQUFBO0lBY00sNkJBQVUsR0FBakI7UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQXJHYyxhQUFJLEdBQWEsSUFBSSxDQUFBO0lBc0d4QyxlQUFDO0NBdkdELEFBdUdDLElBQUE7QUFFRCxXQUFXO0FBQ0UsUUFBQSxRQUFRLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN3ZWJzb2NrZXQgfSBmcm9tIFwiLi9jd2Vic29ja2V0XCI7XHJcblxyXG5jbGFzcyB1c2VySW5mbyB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBzaW5nOiB1c2VySW5mbyA9IG51bGxcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnMoKTogdXNlckluZm8ge1xyXG4gICAgICAgIGlmICh0aGlzLnNpbmcgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNpbmcgPSBuZXcgdXNlckluZm8oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2luZztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF91dWlkOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIC8qKiB1aWQgKi9cclxuICAgIHB1YmxpYyBzZXQgdXVpZCh2YWw6IHN0cmluZykge1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInV1aWRcIiwgdmFsKTtcclxuICAgICAgICB0aGlzLl91dWlkID0gdmFsO1xyXG4gICAgfVxyXG4gICAgLyoqIHVpZCAqL1xyXG4gICAgcHVibGljIGdldCB1dWlkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHV1aWQ6IHN0cmluZyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInV1aWRcIik7XHJcbiAgICAgICAgaWYgKCF1dWlkIHx8IHV1aWQgPT0gXCJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3V1aWQgPSB1dWlkO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91dWlkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3Rva2VuOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIHB1YmxpYyBzZXQgdG9rZW4odmFsOiBzdHJpbmcpIHtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCB2YWwpO1xyXG4gICAgICAgIHRoaXMuX3Rva2VuID0gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgdG9rZW4oKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgdG9rZW46IHN0cmluZyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl90b2tlbiA9IHRva2VuO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90b2tlbjtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5pi156ewICovXHJcbiAgICBwdWJsaWMgbmljazogc3RyaW5nID0gXCJcIjtcclxuICAgIC8qKiDph5HluIEgKi9cclxuICAgIHB1YmxpYyBnb2xkOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIOW5tOm+hCAqL1xyXG4gICAgcHVibGljIGdlbmRlcjogc3RyaW5nID0gXCJcIjtcclxuICAgIC8qKiDmuLjmiI9pZCAqL1xyXG4gICAgcHVibGljIGdhbWVpZDogbnVtYmVyID0gMDtcclxuICAgIC8qKiDmiL/pl7RpZCAqL1xyXG4gICAgcHVibGljIHJvb21pZDogbnVtYmVyID0gMDtcclxuICAgIC8qKiDliY0gKi9cclxuICAgIHB1YmxpYyBtb25leTogbnVtYmVyID0gMDtcclxuXHJcblxyXG4gICAgcHVibGljIGhlYWRQaWM6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgcHVibGljIHZpcFZhbGlkaXR5UGVyaW9kOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIHB1YmxpYyB2aXBUeXBlOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIHB1YmxpYyB1aWQ6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgcHVibGljIGNvZGU6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgcHVibGljIHBob25lQXJlYUNvZGU6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgcHVibGljIHBob25lTnVtYmVyOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIHB1YmxpYyBkaWFtb25kOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBsYXN0TG9naW5UaW1lOiBzdHJpbmcgPSBcIlwiXHJcblxyXG4gICAgcHVibGljIGNsdWJOdW06IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHVibGljIGpvaW5DbHViTnVtOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgX2xhbmd1YWdlOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHNldCBsYW5ndWFnZSh2YWw6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2xhbmd1YWdlID0gdmFsO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxhbmd1YWdlXCIsIHZhbCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IGxhbmd1YWdlKCk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGlkID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGFuZ3VhZ2VcIik7XHJcbiAgICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgICAgICBpZCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2xhbmd1YWdlID0gTnVtYmVyKGlkKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKiDmuLjmiI/plb/ov57mjqXnrqHnkIYgKi9cclxuICAgIHB1YmxpYyBjd2Vic29ja2V0OiBjd2Vic29ja2V0ID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgY2xlYXJMb2dpbigpIHtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCBcIlwiKTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1dWlkXCIsIFwiXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiog546p5a625L+h5oGvICovXHJcbmV4cG9ydCBjb25zdCBVc2VySW5mbyA9IHVzZXJJbmZvLmluczsiXX0=