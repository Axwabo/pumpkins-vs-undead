import type { Round } from "./round.ts";

const rounds: Round[] = [
    [
        [ "generic" ],
        [ "generic", "generic" ],
        [ "generic", "generic", "generic" ]
    ],
    [
        [ "generic", "generic" ],
        [ "generic", "generic", "generic" ],
        [ "generic", "generic", "armored" ]
    ],
    [
        [ "generic", "armored", "generic" ],
        [ "generic", "generic", "generic", "generic", "generic" ],
        [ "armored", "armored", "armored" ]
    ],
    [
        [ "generic", "armored", "generic" ],
        [ "generic", "generic", "armored", "ghost" ],
        [ "ghost", "ghost", "ghost", "ghost" ]
    ],
    [
        [ "generic", "generic", "enderman" ]
    ]
] as const;

export default rounds;