export const undeadTypes = [ "generic", "armored", "ghost", "enderman" ] as const;

export type UndeadType = (typeof undeadTypes)[number];