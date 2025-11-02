export const undeadTypes = [ "generic", "ghost" ] as const;

export type UndeadType = (typeof undeadTypes)[number];