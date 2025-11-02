export default class Projectile {
    readonly id = Math.random();
    readonly color: string;
    readonly damage: number;
    element?: HTMLElement;

    constructor(color: string, damage: number) {
        this.color = color;
        this.damage = damage;
    }
}