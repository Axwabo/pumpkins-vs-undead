import Pumpkin from "./pumpkin.ts";
import type { PumpkinType } from "./pumpkinType.ts";
import Health from "../health.ts";

export default class Watermelon extends Pumpkin {
    readonly health = Health.create(400);
    readonly type: PumpkinType = "Watermelon";

    update(deltaSeconds: number): void {
        void deltaSeconds;
    }
}