export const pumpkinTypes = [ "Maple Tree", "Seed Shooter", "Jack-o'-lantern" ] as const;

export type PumpkinType = (typeof pumpkinTypes)[number];
