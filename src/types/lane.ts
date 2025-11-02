import type Pumpkin from "./pumpkins/pumpkin.ts";
import { shallowReactive } from "vue";

export type Slot = Pumpkin | null;

export type Lane = Slot[];

export function createLanes() {
    const lanes: Lane[] = shallowReactive([]);
    for (let y = 0; y < 5; y++) {
        const lane: Lane = shallowReactive([]);
        for (let x = 0; x < 10; x++)
            lane.push(null);
        lanes.push(lane);
    }
    return lanes;
}