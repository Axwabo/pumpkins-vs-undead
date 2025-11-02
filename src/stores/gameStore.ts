import { defineStore } from "pinia";
import type { PumpkinType } from "../types/pumpkins/pumpkinType.ts";

interface State {
    leaves: number;
    round: number;
    unlockedCards: Set<PumpkinType>;
}

const store = defineStore("game", {
    state: (): State => ({ leaves: 20, round: 1, unlockedCards: new Set([ "Maple Tree" ]) })
});

export default function useGameStore() {
    return store();
}