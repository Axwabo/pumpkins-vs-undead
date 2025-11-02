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
        [ "generic", "generic", "enderman" ],
        [ "armored", "armored", "armored", "armored", "armored" ],
        [ "generic", "armored", "generic", "armored" ],
        [ "enderman", "enderman" ]
    ],
    [
        [ "generic", "generic", "generic", "generic", "generic" ],
        [ "armored", "armored", "armored", "armored", "generic" ],
        [ "enderman", "enderman", "enderman", "enderman" ],
        [ "generic", "armored", "generic", "armored", "enderman", "generic", "armored" ]
    ],
    [
        [ "generic", "armored", "generic", "enderman" ],
        [ "enderman", "enderman", "enderman", "armored" ],
        [ "generic", "generic", "generic", "generic", "generic", "generic", "generic", "generic" ],
        [ "enderman", "enderman", "enderman", "enderman", "enderman", "enderman" ],
        [ "armored", "armored", "armored", "armored", "armored", "armored", "armored" ]
    ],
    [
        [ "generic", "armored", "enderman", "enderman" ],
        [ "enderman", "enderman", "enderman", "enderman", "enderman" ],
        [ "ghost", "ghost", "ghost", "ghost", "ghost" ],
        [ "generic", "generic", "generic", "generic", "generic", "generic", "generic", "generic", "generic", "armored", "armored", "armored", "armored", "armored" ],
        [ "ghost", "ghost", "ghost", "ghost", "ghost", "ghost", "enderman", "enderman", "enderman", "enderman", "enderman", "enderman", "enderman", "armored", "armored" ]
    ],
    [
        [ "ghost", "ghost", "enderman" ],
        [ "generic", "generic", "ghost", "ghost", "armored", "generic", "generic", "generic", "generic" ],
        [ "armored", "armored", "armored", "armored", "armored" ],
        [ "enderman", "enderman", "enderman", "enderman", "armored", "armored", "enderman", "enderman" ],
        [ "generic", "generic", "generic", "generic", "generic" ]
    ],
    [
        [ "ghost", "ghost", "ghost", "enderman" ],
        [ "generic", "generic", "generic", "generic", "generic", "generic", "generic", "generic", "generic" ],
        [ "armored", "armored", "armored", "armored", "armored", "generic", "generic" ],
        [ "enderman", "enderman", "enderman", "enderman", "enderman", "enderman", "enderman", "enderman", "enderman", "enderman", "enderman", "enderman", "enderman" ],
        [ "ghost", "ghost", "ghost", "ghost", "ghost", "ghost", "ghost", "ghost", "ghost", "ghost", "ghost", "ghost", "ghost", "ghost" ],
        [ "enderman", "enderman", "enderman", "enderman", "enderman", "enderman", "enderman", "generic", "generic", "generic", "generic", "generic", "generic", "generic", "armored", "armored", "armored", "armored", "armored", "armored", "ghost", "ghost", "ghost", "ghost" ],
        [
            "enderman", "enderman", "enderman", "enderman", "enderman", "enderman", "enderman", "generic", "generic", "generic", "generic", "generic", "generic", "generic", "armored", "armored",
            "armored", "armored", "armored", "armored", "ghost", "ghost", "ghost", "ghost", "armored", "armored", "armored", "armored", "armored", "armored", "armored", "armored", "generic",
            "armored", "enderman", "enderman", "enderman", "enderman"
        ]
    ]
] as const;

export default rounds;