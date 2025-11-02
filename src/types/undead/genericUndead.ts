import Undead from "./undead.ts";
import Health from "../health.ts";
import type { UndeadType } from "./undeadType.ts";

export default class GenericUndead extends Undead {
    readonly type: UndeadType = "generic";
    readonly speed: number = 5;
    readonly health = Health.create(100);
}