import SeedShooter from "./seedShooter.ts";
import type { PumpkinType } from "./pumpkinType.ts";

export default class JackOLantern extends SeedShooter {
    readonly type: PumpkinType = "Jack-o'-lantern";
    second = false;

    update(deltaSeconds: number) {
        this.remaining -= deltaSeconds;
        this.damageUndead();
        if (!this.shoot())
            return;
        this.second = !this.second;
        if (this.second)
            this.remaining = 0.2;
    }
}