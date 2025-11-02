import Pumpkin from "./pumpkin.ts";
import type { PumpkinType } from "./pumpkinType.ts";
import { shallowReactive, type ShallowReactive } from "vue";

function randomize() {
    return Math.random() * 10 + 10;
}

interface LeafDrop {
    key: number;
    amount: number;
}

export default class MapleTree extends Pumpkin {
    readonly type: PumpkinType = "Maple Tree";

    private remaining: number = randomize();

    public readonly drops: ShallowReactive<LeafDrop[]> = shallowReactive([]);

    update(deltaSeconds: number) {
        if ((this.remaining -= deltaSeconds) > 0)
            return;
        this.remaining = randomize();
        this.drops.push({ key: performance.now(), amount: 20 });
    }
}