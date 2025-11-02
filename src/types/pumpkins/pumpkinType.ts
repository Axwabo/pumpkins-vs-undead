export const pumpkinTypes = [ "Maple Tree", "Seed Shooter" ] as const;

export type PumpkinType = (typeof pumpkinTypes)[number];
