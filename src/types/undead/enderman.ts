import Undead from "./undead.ts";
import Health from "../health.ts";
import type { UndeadType } from "./undeadType.ts";

export default class Enderman extends Undead {
    readonly health = Health.create(120);
    speed: number = 30;
    readonly type: UndeadType = "enderman";
    teleported = false;

    update(seconds: number) {
        if (this.teleported) {
            super.update(seconds);
            return;
        }
        const position = this.position.x;
        super.update(seconds);
        if (this.position.x !== position)
            return;
        this.teleported = true;
        const frozen = this.frozenFor;
        this.frozenFor = 0;
        this.move(5);
        this.frozenFor = frozen;
    }
}