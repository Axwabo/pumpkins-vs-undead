import { defineStore } from "pinia";
import type { PumpkinType } from "../types/pumpkins/pumpkinType.ts";
import { reactive, shallowReactive } from "vue";
import { createLanes, type Lane } from "../types/lane.ts";
import type Undead from "../types/undead/undead.ts";
import rounds from "../types/rounds/roundDefinitions.ts";

interface State {
    leaves: number;
    round: number;
    wave: number;
    zombiesThisWave: number;
    zombiesThisRound: number;
    unlockedCards: PumpkinType[];
    lanes: Lane[];
    undead: Set<Undead>;
    dragging: PumpkinType | "axe" | undefined;
    roundCompleted: boolean;
    speed: number;
}

const store = defineStore("game", {
    state: (): State => ({
        leaves: 100,
        round: 0,
        wave: 0,
        zombiesThisWave: 0,
        zombiesThisRound: 0,
        unlockedCards: reactive([ "Maple Tree", "Seed Shooter" ]),
        lanes: createLanes(),
        undead: shallowReactive(new Set()),
        dragging: undefined,
        roundCompleted: false,
        speed: 1
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
        },
        nextWave() {
            if (this.wave >= rounds[this.round]!.length - 1) {
                this.roundCompleted = true;
                return;
            }
            this.zombiesThisWave = 0;
            this.wave++;
        },
        nextRound() {
            this.zombiesThisRound = 0;
            this.zombiesThisWave = 0;
            this.wave = 0;
            this.round++;
        }
    }
});

export default function useGameStore() {
    return store();
}