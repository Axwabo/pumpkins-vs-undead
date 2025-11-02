import type Pumpkin from "./pumpkin.ts";
import type { PumpkinType } from "./pumpkinType.ts";
import MapleTree from "./mapleTree.ts";
import useGameStore from "../../stores/gameStore.ts";

function create(type: PumpkinType): Pumpkin {
    switch (type) {
        case "Maple Tree":
            return new MapleTree();
    }
}

export default function createPumpkin(type: PumpkinType): Pumpkin {
    const { earn } = useGameStore();
    const pumpkin = create(type);
    pumpkin.earn = earn;
    return pumpkin;
}