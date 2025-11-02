import type Pumpkin from "./pumpkin.ts";
import type { PumpkinType } from "./pumpkinType.ts";
import MapleTree from "./mapleTree.ts";
import SeedShooter from "./seedShooter.ts";
import type { Lane } from "../lane.ts";
import JackOLantern from "./jackOLantern.ts";
import Peach from "./peach.ts";

export default function createPumpkin(type: PumpkinType, lane: Lane, slotIndex: number): Pumpkin {
    switch (type) {
        case "Maple Tree":
            return new MapleTree(lane, slotIndex);
        case"Seed Shooter":
            return new SeedShooter(lane, slotIndex);
        case "Peach":
            return new Peach(lane, slotIndex);
        case "Jack-o'-lantern":
            return new JackOLantern(lane, slotIndex);
    }
}