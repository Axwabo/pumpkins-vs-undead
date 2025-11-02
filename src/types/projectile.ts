import type Pumpkin from "./pumpkins/pumpkin.ts";

export default class Projectile {
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
        const index = this.pumpkin.projectiles.indexOf(this);
        if (index !== -1)
            this.pumpkin.projectiles.splice(index, 1);
    }
}