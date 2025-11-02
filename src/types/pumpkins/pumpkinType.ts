export const pumpkinTypes = [ "Maple Tree" ] as const;

export type PumpkinType = (typeof pumpkinTypes)[number];
