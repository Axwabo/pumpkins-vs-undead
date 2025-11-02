import Pumpkin from "./pumpkin.ts";
import type { PumpkinType } from "./pumpkinType.ts";
import Health from "../health.ts";

export default class SeedShooter extends Pumpkin {
    readonly type: PumpkinType = "Seed Shooter";
    readonly health = Health.create(150);

    update(deltaSeconds: number): void {
    }
}