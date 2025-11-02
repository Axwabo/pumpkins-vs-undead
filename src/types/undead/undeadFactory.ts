import type { UndeadType } from "./undeadType.ts";
import type Undead from "./undead.ts";
import GenericUndead from "./genericUndead.ts";
import Ghost from "./ghost.ts";
import type { Lane } from "../lane.ts";
import Armored from "./armored.ts";

export default function createUndead(type: UndeadType, lane: Lane): Undead {
    switch (type) {
        case "generic":
            return new GenericUndead(lane);
        case "armored":
            return new Armored(lane);
        case "ghost":
            return new Ghost(lane);
    }
}