import Pumpkin from "./pumpkin.ts";
import type { PumpkinType } from "./pumpkinType.ts";
import Health from "../health.ts";
import Projectile from "../projectile.ts";

export default class SeedShooter extends Pumpkin {
    readonly type: PumpkinType = "Seed Shooter";
    readonly health = Health.create(150);

    remaining: number = 0;

    update(deltaSeconds: number): void {
        if ((this.remaining -= deltaSeconds) > 0)
            return;
        this.remaining = 2;
        this.projectiles.push(new Projectile(this, "red", 50));
    }
}