export const pumpkinTypes = [ "Maple Tree", "Seed Shooter", "Peach", "Jack-o'-lantern", "Watermelon", "Grape" ] as const;

export type PumpkinType = (typeof pumpkinTypes)[number];
