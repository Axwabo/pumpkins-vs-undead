import type { PumpkinType } from "./pumpkinType.ts";
import Entity from "../entity.ts";
import useGameStore from "../../stores/gameStore.ts";

export default abstract class Pumpkin extends Entity<Pumpkin> {
    private readonly slotIndex: number;

    constructor(laneIndex: number, slotIndex: number) {
        super(laneIndex);
        this.slotIndex = slotIndex;
    }

    public abstract readonly type: PumpkinType;

    public abstract update(deltaSeconds: number): void;

    remove(): void {
        const { lanes } = useGameStore();
        lanes[this.laneIndex]![this.slotIndex] = null;
    }
}