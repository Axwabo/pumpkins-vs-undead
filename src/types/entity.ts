import type { Reactive } from "vue";
import type Health from "./health.ts";
import type { Lane } from "./lane.ts";
import useGameStore from "../stores/gameStore.ts";
import type { ElementBindable } from "./elementBindable.ts";

export default abstract class Entity implements ElementBindable {
    readonly laneIndex: number;
    readonly lane: Lane;
    abstract readonly health: Reactive<Health>;
    readonly id: number = Math.random();

    element?: HTMLElement;

    constructor(laneIndex: number) {
        this.laneIndex = laneIndex;
        const { lanes } = useGameStore();
        this.lane = lanes[laneIndex]!;
    }
}