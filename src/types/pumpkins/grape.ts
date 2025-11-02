import ShooterBase from "./shooterBase.ts";
import Health from "../health.ts";
import type { PumpkinType } from "./pumpkinType.ts";

export default class Grape extends ShooterBase {
    color: string = "#88bbe4";
    damage: number = 5;
    rate: number = 3;
    freezing: boolean = true;
    readonly health = Health.create(80);
    readonly type: PumpkinType = "Grape";
}