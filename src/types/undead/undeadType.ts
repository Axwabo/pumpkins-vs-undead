export const undeadTypes = [ "generic", "armored", "ghost" ] as const;

export type UndeadType = (typeof undeadTypes)[number];