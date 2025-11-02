import type { PumpkinType } from "../types/pumpkins/pumpkinType.ts";

export function toClass(type?: PumpkinType) {
    return type?.toLowerCase().replace(" ", "-") ?? "";
}