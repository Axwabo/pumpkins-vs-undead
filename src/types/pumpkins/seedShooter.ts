import Pumpkin from "./pumpkin.ts";
import type { PumpkinType } from "./pumpkinType.ts";
import Health from "../health.ts";
import Projectile from "../projectile.ts";

export default class SeedShooter extends Pumpkin {
    readonly type: PumpkinType = "Seed Shooter";
    readonly health = Health.create(150);

    remaining: number = 2;

    update(deltaSeconds: number): void {
        this.remaining -= deltaSeconds;
        this.damageUndead();
        this.shoot();
    }

    shoot() {
        if (this.remaining > 0 || !this.shouldShoot())
            return false;
        this.remaining = 2;
        this.projectiles.push(new Projectile(this, "orange", 20));
        return true;
    }

    shouldShoot() {
        if (!this.element)
            return false;
        const rect = this.element.getBoundingClientRect();
        const x = (rect.left + rect.right) * 0.5;
        for (const undead of this.lane.undead)
            if (undead.element && undead.element.getBoundingClientRect().left > x)
                return true;
        return false;
    }
}