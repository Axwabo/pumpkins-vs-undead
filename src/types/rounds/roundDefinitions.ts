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
        [ "generic", "ghost" ]
    ]
] as const;

export default rounds;