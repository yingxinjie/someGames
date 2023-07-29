"use strict";
cc._RF.push(module, 'fb099GKa+5CfocX28rxuvd6', 'cmdClient');
// bundle/02_game/script/config/cmdClient.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmdClientType = exports.cmdClientEvent = void 0;
var cmdClientEvent;
(function (cmdClientEvent) {
    cmdClientEvent["CONNECT"] = "CONNECT";
    cmdClientEvent["RECONNECT"] = "RECONNECT";
    cmdClientEvent["EXIT"] = "EXIT";
    cmdClientEvent["SITDOWNORSTANDUP"] = "SITDOWNORSTANDUP";
    cmdClientEvent["BET"] = "BET";
    cmdClientEvent["START"] = "START";
    cmdClientEvent["PAUSEORSTART"] = "PAUSEORSTART";
    cmdClientEvent["INSURANCE"] = "INSURANCE";
    cmdClientEvent["BOARD"] = "BOARD";
    cmdClientEvent["GAMESTART"] = "GAMESTART";
    cmdClientEvent["GAMEOVER"] = "GAMEOVER";
    cmdClientEvent["BRING"] = "BRING";
    cmdClientEvent["SAY"] = "SAY";
    cmdClientEvent["TESTDESK"] = "TESTDESK";
})(cmdClientEvent = exports.cmdClientEvent || (exports.cmdClientEvent = {}));
var cmdClientType;
(function (cmdClientType) {
    cmdClientType["SERVERTOCLIENT"] = "SERVERTOCLIENT";
    cmdClientType["SERVERRESPONSE"] = "SERVERRESPONSE";
    cmdClientType["CLIENTTOSERVER"] = "CLIENTTOSERVER";
    cmdClientType["CLIENTRESPONSE"] = "CLIENTRESPONSE";
})(cmdClientType = exports.cmdClientType || (exports.cmdClientType = {}));

cc._RF.pop();