"use strict";
cc._RF.push(module, '7281cLvvkFHTaQCp/IrYQcO', 'big');
// bundle/02_game/script/config/big.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Big = void 0;
var big = /** @class */ (function () {
    function big() {
    }
    Object.defineProperty(big, "ins", {
        get: function () {
            if (this.sing == null) {
                this.sing = new big();
            }
            return this.sing;
        },
        enumerable: false,
        configurable: true
    });
    big.prototype.accDiv = function (arg1, arg2) {
        var t1 = 0, t2 = 0, r1, r2;
        try {
            t1 = arg1.toString().split(".")[1].length;
        }
        catch (e) { }
        try {
            t2 = arg2.toString().split(".")[1].length;
        }
        catch (e) { }
        r1 = Number(arg1.toString().replace(".", ""));
        r2 = Number(arg2.toString().replace(".", ""));
        return (r1 / r2) * Math.pow(10, t2 - t1);
    };
    //乘法函数，用来得到精确的乘法结果 
    //说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。 
    //调用：accMul(arg1,arg2) 
    //返回值：arg1乘以arg2的精确结果 
    big.prototype.accMul = function (arg1, arg2) {
        var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
        try {
            m += s1.split(".")[1].length;
        }
        catch (e) { }
        try {
            m += s2.split(".")[1].length;
        }
        catch (e) { }
        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
    };
    //加法函数，用来得到精确的加法结果 
    //说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。 
    //调用：accAdd(arg1,arg2) 
    //返回值：arg1加上arg2的精确结果 
    big.prototype.accAdd = function (arg1, arg2) {
        var r1, r2, m;
        try {
            r1 = arg1.toString().split(".")[1].length;
        }
        catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split(".")[1].length;
        }
        catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        return (arg1 * m + arg2 * m) / m;
    };
    //减法函数，用来得到精确的减法结果 
    //说明：javascript的减法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的减法结果。 
    //调用：accSubtr(arg1,arg2) 
    //返回值：arg1减去arg2的精确结果 
    big.prototype.accSubtr = function (arg1, arg2) {
        var r1, r2, m, n;
        try {
            r1 = arg1.toString().split(".")[1].length;
        }
        catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split(".")[1].length;
        }
        catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        //动态控制精度长度
        n = (r1 >= r2) ? r1 : r2;
        return ((arg1 * m - arg2 * m) / m).toFixed(n);
    };
    big.sing = null;
    return big;
}());
exports.default = big;
exports.Big = big.ins;

cc._RF.pop();