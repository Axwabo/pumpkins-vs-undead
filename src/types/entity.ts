import type { Reactive } from "vue";
import type Health from "./health.ts";

export default abstract class Entity<T extends Entity<T>> {
    protected readonly laneIndex: number;
    abstract readonly health: Reactive<Health>;

    constructor(laneIndex: number) {
        this.laneIndex = laneIndex;
    }
}