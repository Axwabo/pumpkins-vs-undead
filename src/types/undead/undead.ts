import Entity from "../entity.ts";

export default abstract class Undead extends Entity<Undead> {
    abstract readonly speed: number;
}