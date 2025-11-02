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

    private damageUndead() {
        for (const projectile of this.projectiles) {
            if (!projectile.element)
                continue;
            const projectileRect = projectile.element.getBoundingClientRect();
            const x = projectileRect.left + (projectileRect.right - projectileRect.left) * 0.8;
            for (const undead of this.lane.undead) {
                if (!undead.element)
                    continue;
                const undeadRect = undead.element.getBoundingClientRect();
                if (undeadRect.left > x)
                    continue;
                projectile.remove();
                if ((undead.health.current -= projectile.damage) <= 0)
                    undead.remove();
                return;
            }
        }
    }

    shoot() {
        if (this.remaining > 0 || !this.shouldShoot())
            return;
        this.remaining = 2;
        this.projectiles.push(new Projectile(this, "orange", 20));
    }

    private shouldShoot() {
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