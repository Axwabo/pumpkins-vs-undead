import type { PumpkinType } from "./pumpkinType.ts";

export const pumpkinCosts: Record<PumpkinType, number> = {
    "Maple Tree": 40,
    "Seed Shooter": 100
} as const;