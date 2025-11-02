import type { PumpkinType } from "./pumpkinType.ts";

export const pumpkinCosts: Record<PumpkinType, number> = {
    "Maple Tree": 40,
    "Seed Shooter": 100,
    "Peach": 160,
    "Grape": 250,
    "Jack-o'-lantern": 180,
    "Watermelon": 170
} as const;