import type { PumpkinType } from "../types/pumpkins/pumpkinType.ts";
import type { UndeadType } from "../types/undead/undeadType.ts";

export function toClass(type?: PumpkinType | UndeadType) {
    return type?.toLowerCase().replace(" ", "-") ?? "";
}