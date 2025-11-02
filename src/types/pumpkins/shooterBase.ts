import Projectile from "../projectile.ts";
import Pumpkin from "./pumpkin.ts";
import { shallowReactive } from "vue";

export default abstract class ShooterBase extends Pumpkin {
    readonly projectiles: Projectile[] = shallowReactive([]);
    abstract color: string;
    abstract damage: number;
    rate: number = 2;
    remaining: number = this.rate;
    freezing: boolean = false;

    update(deltaSeconds: number): void {
        this.remaining -= deltaSeconds;
        this.damageUndead();
        this.shoot();
    }

    damageUndead() {
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
                if (projectile.freezing)
                    undead.freeze();
                projectile.remove();
                if ((undead.health.current -= projectile.damage) <= 0)
                    undead.remove();
                return;
            }
        }
    }

    shoot() {
        if (this.remaining > 0 || !this.shouldShoot())
            return false;
        this.remaining = this.rate;
        this.projectiles.push(new Projectile(this, this.color, this.damage, this.freezing));
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