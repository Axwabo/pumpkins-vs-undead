import type Pumpkin from "./pumpkins/pumpkin.ts";
import { shallowReactive } from "vue";
import type Undead from "./undead/undead.ts";

export type Slot = Pumpkin | null;

export interface Lane {
    slots: Slot[];
    undead: Set<Undead>;
}

export function createLanes() {
    const lanes: Lane[] = shallowReactive([]);
    for (let y = 0; y < 5; y++) {
        const slots: Slot[] = shallowReactive([]);
        for (let x = 0; x < 10; x++)
            slots.push(null);
        lanes.push({ slots, undead: shallowReactive(new Set()) });
    }
    return lanes;
}