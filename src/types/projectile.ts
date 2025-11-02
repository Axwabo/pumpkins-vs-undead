import type Pumpkin from "./pumpkins/pumpkin.ts";
import type { ElementBindable } from "./elementBindable.ts";
import remove from "../utils/remove.ts";

export default class Projectile implements ElementBindable {
    readonly id = Math.random();
    readonly pumpkin: Pumpkin;
    readonly color: string;
    readonly damage: number;
    element?: HTMLElement;

    constructor(pumpkin: Pumpkin, color: string, damage: number) {
        this.pumpkin = pumpkin;
        this.color = color;
        this.damage = damage;
    }

    remove() {
        remove(this.pumpkin.projectiles, this);
    }
}