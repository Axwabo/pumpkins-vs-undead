import { defineStore } from "pinia";
import type { PumpkinType } from "../types/pumpkins/pumpkinType.ts";
import { reactive } from "vue";
import { createLanes, type Lane } from "../types/lane.ts";

interface State {
    leaves: number;
    round: number;
    wave: number;
    zombiesThisRound: number;
    unlockedCards: PumpkinType[];
    lanes: Lane[];
    dragging: PumpkinType | "axe" | undefined;
}

const store = defineStore("game", {
    state: (): State => ({
        leaves: 50,
        round: 0,
        wave: 0,
        zombiesThisRound: 0,
        unlockedCards: reactive([ "Maple Tree" ]),
        lanes: createLanes(),
        dragging: undefined
    }),
    actions: {
        earn(amount: number) {
            this.leaves += amount;
        },
        purchase(amount: number) {
            if (this.leaves < amount)
                return false;
            this.leaves -= amount;
            return true;
        }
    }
});

export default function useGameStore() {
    return store();
}