import type { PumpkinType } from "./pumpkinType.ts";
import Entity from "../entity.ts";
import { shallowReactive } from "vue";
import type Projectile from "../projectile.ts";

export default abstract class Pumpkin extends Entity {
    readonly slotIndex: number;
    readonly projectiles: Projectile[] = shallowReactive([]);

    constructor(laneIndex: number, slotIndex: number) {
        super(laneIndex);
        this.slotIndex = slotIndex;
    }

    public abstract readonly type: PumpkinType;

    public abstract update(deltaSeconds: number): void;

    remove(): void {
        this.lane.slots[this.slotIndex] = null;
    }
}