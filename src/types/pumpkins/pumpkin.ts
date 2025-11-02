import type { PumpkinType } from "./pumpkinType.ts";
import Entity from "../entity.ts";
import { shallowReactive } from "vue";
import type Projectile from "../projectile.ts";
import type { ElementBindable } from "../elementBindable.ts";

export default abstract class Pumpkin extends Entity implements ElementBindable {
    readonly slotIndex: number;
    readonly projectiles: Projectile[] = shallowReactive([]);
    element?: HTMLElement;

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