import Pumpkin from "./pumpkin.ts";
import type { PumpkinType } from "./pumpkinType.ts";

function randomize() {
    return Math.random() * 10 + 10;
}

export default class MapleTree extends Pumpkin {
    readonly type: PumpkinType = "Maple Tree";

    private remaining: number = randomize();

    update(deltaSeconds: number) {
        if ((this.remaining -= deltaSeconds) > 0)
            return;
        this.remaining = randomize();
        this.earn(20);
    }
}