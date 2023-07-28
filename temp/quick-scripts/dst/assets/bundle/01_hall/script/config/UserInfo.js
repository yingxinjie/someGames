
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYnVuZGxlXFwwMV9oYWxsXFxzY3JpcHRcXGNvbmZpZ1xcVXNlckluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtJQUFBO1FBVVksVUFBSyxHQUFXLEVBQUUsQ0FBQztRQWtCbkIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQWlCNUIsU0FBUztRQUNGLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDekIsU0FBUztRQUNGLFNBQUksR0FBVyxDQUFDLENBQUM7UUFDeEIsU0FBUztRQUNGLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDM0IsV0FBVztRQUNKLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFDMUIsV0FBVztRQUNKLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFDMUIsUUFBUTtRQUNELFVBQUssR0FBVyxDQUFDLENBQUM7UUFHbEIsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUVyQixzQkFBaUIsR0FBVyxFQUFFLENBQUM7UUFFL0IsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUVyQixRQUFHLEdBQVcsRUFBRSxDQUFDO1FBRWpCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFFbEIsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFFM0IsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFFekIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUVwQixrQkFBYSxHQUFXLEVBQUUsQ0FBQTtRQUUxQixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBRXBCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRXZCLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFlOUIsY0FBYztRQUNQLGVBQVUsR0FBZSxJQUFJLENBQUM7SUFNekMsQ0FBQztJQXBHRyxzQkFBa0IsZUFBRzthQUFyQjtZQUNJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQzthQUM5QjtZQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUtELHNCQUFXLDBCQUFJO1FBSWYsVUFBVTthQUNWO1lBQ0ksSUFBSSxJQUFJLEdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUUsRUFBRTtnQkFDckIsT0FBTyxFQUFFLENBQUM7YUFDYjtZQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO1FBZEQsVUFBVTthQUNWLFVBQWdCLEdBQVc7WUFDdkIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQWNELHNCQUFXLDJCQUFLO2FBS2hCO1lBQ0ksSUFBSSxLQUFLLEdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1IsT0FBTyxFQUFFLENBQUM7YUFDYjtZQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBYkQsVUFBaUIsR0FBVztZQUN4QixFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBaURELHNCQUFXLDhCQUFRO2FBSW5CO1lBQ0ksSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ0wsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUNWO1lBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDNUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFYRCxVQUFvQixHQUFXO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1lBQ3JCLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDakQsQ0FBQzs7O09BQUE7SUFjTSw2QkFBVSxHQUFqQjtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDekMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBckdjLGFBQUksR0FBYSxJQUFJLENBQUE7SUFzR3hDLGVBQUM7Q0F2R0QsQUF1R0MsSUFBQTtBQUVELFdBQVc7QUFDRSxRQUFBLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3dlYnNvY2tldCB9IGZyb20gXCIuL2N3ZWJzb2NrZXRcIjtcclxuXHJcbmNsYXNzIHVzZXJJbmZvIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHNpbmc6IHVzZXJJbmZvID0gbnVsbFxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGlucygpOiB1c2VySW5mbyB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2luZyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2luZyA9IG5ldyB1c2VySW5mbygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5zaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3V1aWQ6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgLyoqIHVpZCAqL1xyXG4gICAgcHVibGljIHNldCB1dWlkKHZhbDogc3RyaW5nKSB7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXVpZFwiLCB2YWwpO1xyXG4gICAgICAgIHRoaXMuX3V1aWQgPSB2YWw7XHJcbiAgICB9XHJcbiAgICAvKiogdWlkICovXHJcbiAgICBwdWJsaWMgZ2V0IHV1aWQoKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgdXVpZDogc3RyaW5nID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXVpZFwiKTtcclxuICAgICAgICBpZiAoIXV1aWQgfHwgdXVpZCA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fdXVpZCA9IHV1aWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3V1aWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdG9rZW46IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgcHVibGljIHNldCB0b2tlbih2YWw6IHN0cmluZykge1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHZhbCk7XHJcbiAgICAgICAgdGhpcy5fdG9rZW4gPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB0b2tlbigpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCB0b2tlbjogc3RyaW5nID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3Rva2VuID0gdG9rZW47XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rva2VuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmmLXnp7AgKi9cclxuICAgIHB1YmxpYyBuaWNrOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgLyoqIOmHkeW4gSAqL1xyXG4gICAgcHVibGljIGdvbGQ6IG51bWJlciA9IDA7XHJcbiAgICAvKiog5bm06b6EICovXHJcbiAgICBwdWJsaWMgZ2VuZGVyOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgLyoqIOa4uOaIj2lkICovXHJcbiAgICBwdWJsaWMgZ2FtZWlkOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIOaIv+mXtGlkICovXHJcbiAgICBwdWJsaWMgcm9vbWlkOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIOWJjSAqL1xyXG4gICAgcHVibGljIG1vbmV5OiBudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgICBwdWJsaWMgaGVhZFBpYzogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBwdWJsaWMgdmlwVmFsaWRpdHlQZXJpb2Q6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgcHVibGljIHZpcFR5cGU6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgcHVibGljIHVpZDogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBwdWJsaWMgY29kZTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBwdWJsaWMgcGhvbmVBcmVhQ29kZTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBwdWJsaWMgcGhvbmVOdW1iZXI6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgcHVibGljIGRpYW1vbmQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHVibGljIGxhc3RMb2dpblRpbWU6IHN0cmluZyA9IFwiXCJcclxuXHJcbiAgICBwdWJsaWMgY2x1Yk51bTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwdWJsaWMgam9pbkNsdWJOdW06IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBfbGFuZ3VhZ2U6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgc2V0IGxhbmd1YWdlKHZhbDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbGFuZ3VhZ2UgPSB2YWw7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGFuZ3VhZ2VcIiwgdmFsKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgbGFuZ3VhZ2UoKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgaWQgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYW5ndWFnZVwiKTtcclxuICAgICAgICBpZiAoIWlkKSB7XHJcbiAgICAgICAgICAgIGlkID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbGFuZ3VhZ2UgPSBOdW1iZXIoaWQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqIOa4uOaIj+mVv+i/nuaOpeeuoeeQhiAqL1xyXG4gICAgcHVibGljIGN3ZWJzb2NrZXQ6IGN3ZWJzb2NrZXQgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBjbGVhckxvZ2luKCkge1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIFwiXCIpO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInV1aWRcIiwgXCJcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKiDnjqnlrrbkv6Hmga8gKi9cclxuZXhwb3J0IGNvbnN0IFVzZXJJbmZvID0gdXNlckluZm8uaW5zOyJdfQ==