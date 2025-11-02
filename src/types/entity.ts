export default abstract class Entity<T extends Entity<T>> {
    protected readonly laneIndex: number;
    abstract health: number;

    constructor(laneIndex: number) {
        this.laneIndex = laneIndex;
    }
}