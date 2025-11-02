import type { PumpkinType } from "./pumpkinType.ts";
import Health from "../health.ts";
import ShooterBase from "./shooterBase.ts";

export default class SeedShooter extends ShooterBase {
    readonly type: PumpkinType = "Seed Shooter";
    readonly health = Health.create(150);
    color: string = "orange";
    damage: number = 20;
}