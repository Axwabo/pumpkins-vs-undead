import Pumpkin from "./pumpkin.ts";
import Health from "../health.ts";
import type { PumpkinType } from "./pumpkinType.ts";
import useGameStore from "../../stores/gameStore.ts";
import type Undead from "../undead/undead.ts";

function center(element: HTMLElement) {
    const rect = element.getBoundingClientRect();
    const cx = (rect.left + rect.right) * 0.5;
    const cy = (rect.top + rect.bottom) * 0.5;
    return { cx, cy };
}

const explosionDistance = 150;

export default class Peach extends Pumpkin {
    readonly health = Health.create(0);
    readonly type: PumpkinType = "Peach";
    remaining = 0.5;

    update(deltaSeconds: number): void {
        if (this.remaining <= 0 || !this.element || (this.remaining -= deltaSeconds) > 0)
            return;
        const element = this.element;
        const { cx, cy } = center(element);
        const { lanes } = useGameStore();
        const toRemove: Undead[] = [];
        for (const lane of lanes) {
            for (const undead of lane.undead) {
                if (!undead.element)
                    continue;
                const { cx: undeadX, cy: undeadY } = center(undead.element);
                if (Math.pow(undeadX - cx, 2) + Math.pow(undeadY - cy, 2) < explosionDistance * explosionDistance)
                    toRemove.push(undead);
            }
        }
        for (const undead of toRemove)
            undead.remove();
        this.remove();
    }

}