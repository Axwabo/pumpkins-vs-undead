import Undead from "./undead.ts";
import Health from "../health.ts";
import type { UndeadType } from "./undeadType.ts";

export default class Ghost extends Undead {
    readonly health = Health.create(50);
    readonly speed: number = 25;
    readonly type: UndeadType = "ghost";

    update(seconds: number) {
        if (!this.triggerCar(this.position.x))
            this.position.x -= this.speed * seconds;
    }
}