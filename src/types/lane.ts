import type Pumpkin from "./pumpkins/pumpkin.ts";
import { ref, type Ref } from "vue";

export type Slot = Ref<Pumpkin | null>;

export type Lane = Slot[];

export function createLanes() {
    const lanes: Lane[] = [];
    for (let y = 0; y < 5; y++) {
        const lane: Lane = [];
        for (let x = 0; x < 10; x++)
            lane.push(ref(null));
        lanes.push(lane);
    }
    return lanes;
}