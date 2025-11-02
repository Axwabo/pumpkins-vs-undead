import type { UndeadType } from "./undeadType.ts";
import type Undead from "./undead.ts";
import GenericUndead from "./genericUndead.ts";

export default function createUndead(type: UndeadType, lane: number): Undead {
    switch (type) {
        case "generic":
            return new GenericUndead(lane);
        case "ghost":
            throw new Error("Not yet implemented");
    }
}