import type { PumpkinType } from "./pumpkinType.ts";

const descriptions: Partial<Record<PumpkinType, string>> = {
    "Grape": "Freezes non-ghosts for a short period of time",
    "Jack-o'-lantern": "Shoots 2x seeds",
    "Watermelon": "A chonky defense",
    "Peach": "Instant boom"
} as const;

export default descriptions;