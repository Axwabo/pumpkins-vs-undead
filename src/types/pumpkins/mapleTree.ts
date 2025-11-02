import Pumpkin from "./pumpkin.ts";
import type { PumpkinType } from "./pumpkinType.ts";
import { shallowReactive, type ShallowReactive } from "vue";
import useGameStore from "../../stores/gameStore.ts";

function randomize() {
    return Math.random() * 10 + 10;
}

interface LeafDrop {
    key: number;
    amount: number;
}

export default class MapleTree extends Pumpkin {
    readonly type: PumpkinType = "Maple Tree";

    health: number = 100;

    private remaining: number = randomize();

    public readonly drops: ShallowReactive<LeafDrop[]> = shallowReactive([]);

    update(deltaSeconds: number) {
        if ((this.remaining -= deltaSeconds) > 0)
            return;
        this.remaining = randomize();
        this.drops.push({ key: performance.now(), amount: 20 });
    }

    remove() {
        super.remove();
        const { earn } = useGameStore();
        earn(this.drops.reduce((prev, curr) => prev + curr.amount, 0));
    }
}