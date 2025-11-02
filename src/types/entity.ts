import type { Reactive } from "vue";
import type Health from "./health.ts";
import type { Lane } from "./lane.ts";
import useGameStore from "../stores/gameStore.ts";

export default abstract class Entity {
    readonly laneIndex: number;
    readonly lane: Lane;
    abstract readonly health: Reactive<Health>;
    readonly id: number = Math.random();

    constructor(laneIndex: number) {
        this.laneIndex = laneIndex;
        const { lanes } = useGameStore();
        this.laneIndex = lanes[laneIndex]!;
    }
}