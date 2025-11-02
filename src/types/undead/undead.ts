import Entity from "../entity.ts";
import { reactive } from "vue";
import type { UndeadType } from "./undeadType.ts";
import useGameStore from "../../stores/gameStore.ts";

export default abstract class Undead extends Entity {
    abstract readonly type: UndeadType;
    abstract speed: number;
    readonly position = reactive({ x: window.innerWidth });
    cooldown: number = 2;
    fronzenFor: number = 0;

    update(seconds: number): void {
        this.updateFreeze(seconds);
        const x = this.position.x;
        if (this.triggerCar(x))
            return;
        for (const slot of this.lane.slots) {
            if (!slot?.element)
                continue;
            const rect = slot.element.getBoundingClientRect();
            if (rect.left > x || rect.right < x)
                continue;
            if ((this.cooldown -= seconds) > 0)
                return;
            if ((slot.health.current -= 20) <= 0)
                slot.remove();
            this.cooldown = 2;
            return;
        }

        this.move(seconds);
    }

    move(seconds: number) {
        this.position.x -= seconds * this.speed * (this.fronzenFor > 0 ? 0.5 : 1);
        if (this.position.x > 10)
            return;
        const { lose } = useGameStore();
        lose();
    }

    remove(): void {
        const { undead, nextWave } = useGameStore();
        this.lane.undead.delete(this);
        if (undead.delete(this) && undead.size === 0)
            nextWave();
    }

    triggerCar(x: number) {
        if (!this.lane.element)
            return false;
        const rect = this.lane.element.getBoundingClientRect();
        if (rect.left > x || rect.right < x)
            return false;
        this.lane.element.classList.add("moving");
        this.remove();
        return true;
    }

    updateFreeze(seconds: number) {
        this.fronzenFor -= seconds;
        if (this.fronzenFor <= 0)
            this.element?.classList.remove("fronzen");
        else
            this.element?.classList.add("frozen");
    }

    freeze() {
        this.fronzenFor = 5;
    }
}