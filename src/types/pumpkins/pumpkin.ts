import type { PumpkinType } from "./pumpkinType.ts";
import Entity from "../entity.ts";
import { shallowReactive } from "vue";
import type Projectile from "../projectile.ts";
import type { Lane } from "../lane.ts";

export default abstract class Pumpkin extends Entity {
    readonly slotIndex: number;
    readonly projectiles: Projectile[] = shallowReactive([]);

    constructor(lane: Lane, slotIndex: number) {
        super(lane);
        this.slotIndex = slotIndex;
    }

    public abstract readonly type: PumpkinType;

    public abstract update(deltaSeconds: number): void;

    remove(): void {
        this.lane.slots[this.slotIndex] = null;
    }
}