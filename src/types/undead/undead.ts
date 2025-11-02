import Entity from "../entity.ts";
import { reactive } from "vue";
import type { UndeadType } from "./undeadType.ts";
import useGameStore from "../../stores/gameStore.ts";

export default abstract class Undead extends Entity<Undead> {
    abstract readonly type: UndeadType;
    abstract readonly speed: number;
    readonly position = reactive({ x: window.innerWidth });

    update(seconds: number): void {
        this.position.x -= seconds * this.speed;
    }

    remove(): void {
        const { undead, nextWave } = useGameStore();
        if (undead.delete(this))
            nextWave();
    }
}