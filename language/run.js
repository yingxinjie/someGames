const fs = require("fs");

let strArr = fs.readFileSync('../assets/resources/i18n/lan.txt', { encoding: "utf-8" }).split("\r\n");
let outStr = "export const LanguagesCfg = {\r\n    0: {\r\n";
let enStr = "";//加一条多语言
strArr.forEach((ele, idx) => {
    outStr += "        " + idx + ":\"" + ele + "\",\r\n";
    enStr += "        " + idx + ":\"en" + ele + "\",\r\n";
});

outStr += "    },";
outStr += "\r\n    1:{\r\n" + enStr + "   }";//加一条多语言
outStr += '\r\n }';
fs.writeFileSync('../assets/resources/i18n/Languages.ts', outStr, { encoding: "utf-8" });
console.log("输出完成");