<script setup lang="ts">
import useAnimationFrame from "../composables/useAnimationFrame.ts";
import { toClass } from "../utils/css.ts";
import createPumpkin from "../types/pumpkins/pumpkinFactory.ts";
import type { PumpkinType } from "../types/pumpkins/pumpkinType.ts";
import useGameStore from "../stores/gameStore.ts";
import { pumpkinCosts } from "../types/pumpkins/cost.ts";
import LeafDrops from "./LeafDrops.vue";
import MapleTree from "../types/pumpkins/mapleTree.ts";
import type { Slot } from "../types/lane.ts";

const { pumpkin: pumpkinRef } = defineProps<{ pumpkin: Slot; }>();

const pumpkin = pumpkinRef;

const { purchase } = useGameStore();

useAnimationFrame(seconds => pumpkin.value?.update(seconds));

function onDragOver(ev: DragEvent) {
    if (!pumpkin.value)
        ev.preventDefault();
}

function onDrop(ev: DragEvent) {
    const data = ev.dataTransfer?.getData("pumpkin") as PumpkinType | undefined;
    if (pumpkin.value || !data || !purchase(pumpkinCosts[data]))
        return;
    ev.preventDefault();
    pumpkin.value = createPumpkin(data);
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