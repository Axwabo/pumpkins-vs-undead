<script setup lang="ts">
import useAnimationFrame from "../composables/useAnimationFrame.ts";
import { toClass } from "../utils/css.ts";
import createPumpkin from "../types/pumpkins/pumpkinFactory.ts";
import useGameStore from "../stores/gameStore.ts";
import { pumpkinCosts } from "../types/pumpkins/cost.ts";
import LeafDrops from "./LeafDrops.vue";
import MapleTree from "../types/pumpkins/mapleTree.ts";
import type { Slot } from "../types/lane.ts";
import { storeToRefs } from "pinia";

const { index, slotIndex, pumpkin } = defineProps<{ index: number, slotIndex: number; pumpkin: Slot; }>();

const { purchase, lanes } = useGameStore();

const { dragging } = storeToRefs(useGameStore());

useAnimationFrame(seconds => pumpkin?.update(seconds));

function onDragOver(ev: DragEvent) {
    if (dragging.value === "axe" !== !pumpkin)
        ev.preventDefault();
}

function onDrop(ev: DragEvent) {
    const data = dragging.value;
    if (!data)
        return;
    const axe = data === "axe";
    if (axe === !pumpkin)
        return;
    ev.preventDefault();
    if (axe)
        pumpkin?.remove();
    else if (purchase(pumpkinCosts[data]))
        lanes[index]![slotIndex] = createPumpkin(data, index, slotIndex);
    dragging.value = undefined;
}

</script>

<template>
    <div class="slot" v-on:dragover="onDragOver" v-on:drop="onDrop">
        <template v-if="pumpkin">
            <div :class="[ 'pumpkin', toClass(pumpkin.type) ]"></div>
            <LeafDrops v-if="pumpkin instanceof MapleTree" :tree="pumpkin" />
        </template>
    </div>
</template>

<style scoped>
.slot {
    position: relative;
    background-color: rgba(0, 255, 0, 0.1);
    display: grid;
    padding: 15%;
}
</style>