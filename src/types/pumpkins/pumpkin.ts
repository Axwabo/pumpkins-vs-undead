import type { PumpkinType } from "./pumpkinType.ts";

export default abstract class Pumpkin {
    public abstract readonly type: PumpkinType;

    public earn: (amount: number) => void = null!;

    public abstract update(deltaSeconds: number): void;
}