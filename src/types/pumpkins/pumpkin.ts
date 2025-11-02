import type { PumpkinType } from "./pumpkinType.ts";

export default abstract class Pumpkin {
    public abstract readonly type: PumpkinType;

    public abstract update(deltaSeconds: number): void;
}