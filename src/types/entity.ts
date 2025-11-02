export default abstract class Entity<T extends Entity<T>> {
    protected readonly laneIndex: number;

    constructor(laneIndex: number) {
        this.laneIndex = laneIndex;
    }
}