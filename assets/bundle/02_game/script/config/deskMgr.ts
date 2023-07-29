

class deskMgr {
    private static sing: deskMgr = null

    public static get ins(): deskMgr {
        if (this.sing == null) {
            this.sing = new deskMgr();
        }
        return this.sing;
    }

    

}

/** 桌内管理 */
export const DeskMgr = deskMgr.ins;

