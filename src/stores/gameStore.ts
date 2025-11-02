import { defineStore } from "pinia";
import type { PumpkinType } from "../types/pumpkins/pumpkinType.ts";
import { reactive } from "vue";
import { createLanes, type Lane } from "../types/lane.ts";

interface State {
    leaves: number;
    round: number;
    unlockedCards: PumpkinType[];
    lanes: Lane[];
}

const store = defineStore("game", {
    state: (): State => ({ leaves: 50, round: 1, unlockedCards: reactive([ "Maple Tree" ]), lanes: createLanes() }),
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