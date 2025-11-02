import type Pumpkin from "./pumpkin.ts";
import type { PumpkinType } from "./pumpkinType.ts";
import MapleTree from "./mapleTree.ts";

export default function createPumpkin(type: PumpkinType, laneIndex: number, slotIndex: number): Pumpkin {
    switch (type) {
        case "Maple Tree":
            return new MapleTree(laneIndex, slotIndex);
    }
}