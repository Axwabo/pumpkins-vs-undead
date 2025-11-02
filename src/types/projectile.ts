import type { ElementBindable } from "./elementBindable.ts";
import remove from "../utils/remove.ts";
import type ShooterBase from "./pumpkins/shooterBase.ts";

export default class Projectile implements ElementBindable {
    readonly id = Math.random();
    readonly pumpkin: ShooterBase;
    readonly color: string;
    readonly damage: number;
    readonly freezing: boolean;
    element?: HTMLElement;

    constructor(pumpkin: ShooterBase, color: string, damage: number, freezing: boolean) {
        this.pumpkin = pumpkin;
        this.color = color;
        this.damage = damage;
        this.freezing = freezing;
    }

    remove() {
        remove(this.pumpkin.projectiles, this);
    }
}