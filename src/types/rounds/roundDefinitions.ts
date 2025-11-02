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
    ]
] as const;

export default rounds;