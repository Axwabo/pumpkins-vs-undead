export const pumpkinTypes = [ "Maple Tree", "Seed Shooter", "Peach", "Jack-o'-lantern" ] as const;

export type PumpkinType = (typeof pumpkinTypes)[number];
