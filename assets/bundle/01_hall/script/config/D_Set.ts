export class D_Set {
    /**语言,(enums),ZHCN/ZHTW/ENUS*/
    public language: string;
    /**语言描述 简体中文/繁体中文/英语(美国)*/
    public languageDesc: string;
    /**安全密码保护*/
    public safetyPasswordProtection: boolean;
    /**登录安全验证 */
    public safetyLogin: boolean;
    /**允许任何人加好友*/
    public allowEveryoneFriending: boolean;
    /**游戏音效*/
    public soundEffect: boolean;
    /**消息声音 */
    public messageSound: boolean;
    /**消息震动 */
    public messageVibration: boolean;
    /**比赛报名确认 */
    public competitionRegConfirmation: boolean;

    constructor() {

    }

    init(language: string,languageDesc: string,safetyPasswordProtection: boolean,safetyLogin: boolean,allowEveryoneFriending: boolean,
        soundEffect: boolean,messageSound: boolean,messageVibration: boolean,competitionRegConfirmation: boolean) {
        this.language = language;
        this.languageDesc = languageDesc;
        this.safetyPasswordProtection = safetyPasswordProtection;
        this.safetyLogin = safetyLogin;
        this.allowEveryoneFriending = allowEveryoneFriending;
        this.soundEffect = soundEffect;
        this.messageSound = messageSound;
        this.messageVibration = messageVibration;
        this.competitionRegConfirmation = competitionRegConfirmation;
    }
}
