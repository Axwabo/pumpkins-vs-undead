import Undead from "./undead.ts";
import type { UndeadType } from "./undeadType.ts";
import Health from "../health.ts";

export default class Armored extends Undead {
    readonly type: UndeadType = "armored";
    speed: number = 15;
    readonly health = Health.create(300);

    update(seconds: number) {
        super.update(seconds);
        if (this.health.current > 100)
            return;
        this.speed = 20;
        this.changeAppearance("generic");
    }
}