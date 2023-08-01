"use strict";
cc._RF.push(module, '19dc79Qod5Gh4WzpZHF7EDb', 'D_User');
// bundle/01_hall/script/config/D_User.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.D_User = void 0;
var D_User = /** @class */ (function () {
    function D_User() {
    }
    D_User.prototype.init = function (uid, name, sex, headPic, vipValidityPeriod, vipType, email, code, description, phoneAreaCode, phoneNumber, gold, diamond, lastLoginTime, clubNum, joinClubNum) {
        this.uid = uid;
        this.name = name;
        this.sex = sex;
        this.headPic = headPic;
        this.vipValidityPeriod = vipValidityPeriod;
        this.vipType = vipType;
        this.email = email;
        this.code = code;
        this.description = description;
        this.phoneAreaCode = phoneAreaCode;
        this.phoneNumber = phoneNumber;
        this.gold = gold;
        this.diamond = diamond;
        this.lastLoginTime = lastLoginTime;
        this.clubNum = clubNum;
        this.joinClubNum = joinClubNum;
    };
    return D_User;
}());
exports.D_User = D_User;

cc._RF.pop();