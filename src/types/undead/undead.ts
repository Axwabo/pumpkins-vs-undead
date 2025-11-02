import Entity from "../entity.ts";
import { reactive } from "vue";
import type { UndeadType } from "./undeadType.ts";
import useGameStore from "../../stores/gameStore.ts";

export default abstract class Undead extends Entity {
    abstract readonly type: UndeadType;
    abstract readonly speed: number;
    readonly position = reactive({ x: window.innerWidth });
    cooldown: number = 2;

    update(seconds: number): void {
        const x = this.position.x;
        for (const slot of this.lane.slots) {
            if (!slot?.element)
                continue;
            const rect = slot.element.getBoundingClientRect();
            if (rect.left > x || rect.right < x)
                continue;
            if ((this.cooldown -= seconds) > 0)
                return;
            if ((slot.health.current -= 10) <= 0)
                slot.remove();
            this.cooldown = 2;
            return;
        }

        this.position.x -= seconds * this.speed;
    }

    remove(): void {
        const { undead, nextWave } = useGameStore();
        this.lane.undead.delete(this);
        if (undead.delete(this))
            nextWave();
    }
}