const { ccclass, property } = cc._decorator;

@ccclass
export default class yiJiaRuJuLeBuItem extends cc.Component {
    protected start(): void {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onOpenJuLeBu, this);
    }

    private onOpenJuLeBu() {

    }


    run(info: any) {
        // {
        //     "id": 0,
        //     "zsGameUnionId": 0,
        //     "zsGameUnionName": "string",
        //     "zsGameUnionIconPic": "string",
        //     "zsGameClubLevelId": 0,
        //     "zsGameClubLevelName": "string",
        //     "name": "string",
        //     "code": "string",
        //     "iconPic": "string",
        //     "exp": 0,
        //     "description": "string",
        //     "coin": "string",
        //     "fund": "string",
        //     "zsGamePlayerId": 0,
        //     "zsGamePlayerName": "string",
        //     "dissolutionDateTime": "string",
        //     "search": true,
        //     "adminStart": true,
        //     "temporaryZsGameClubLevelId": 0,
        //     "temporaryZsGameClubLevelName": "string",
        //     "temporaryValidityPeriod": "string",
        //     "status": "NORMAL",
        //     "createDateTime": "2023-07-23T12:25:01.973Z"
        //   }
        this.mingCheng.string = info.name;
        this.miaoShu.string = info.description;
    }


    @property(cc.Label)
    private mingCheng: cc.Label = null;

    @property(cc.Label)
    private miaoShu: cc.Label = null;

}
