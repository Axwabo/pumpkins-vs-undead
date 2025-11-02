<script setup lang="ts">
import useAnimationFrame from "../composables/useAnimationFrame.ts";
import { toClass } from "../utils/css.ts";
import createPumpkin from "../types/pumpkins/pumpkinFactory.ts";
import useGameStore from "../stores/gameStore.ts";
import { pumpkinCosts } from "../types/pumpkins/cost.ts";
import TreeLeaves from "./TreeLeaves.vue";
import MapleTree from "../types/pumpkins/mapleTree.ts";
import type { Slot } from "../types/lane.ts";
import { storeToRefs } from "pinia";
import HealthBar from "./HealthBar.vue";
import ProjectileDisplay from "./ProjectileDisplay.vue";
import { useTemplateRef } from "vue";
import useElementBinding from "../composables/useElementBinding.ts";
import ShooterBase from "../types/pumpkins/shooterBase.ts";

const { index, slotIndex, pumpkin } = defineProps<{ index: number, slotIndex: number; pumpkin: Slot; }>();

const { earn, purchase, lanes } = useGameStore();

const { dragging } = storeToRefs(useGameStore());

const element = useTemplateRef("element");

useAnimationFrame(seconds => pumpkin?.update(seconds));

function onDragOver(ev: DragEvent) {
    if (dragging.value && dragging.value === "axe" !== !pumpkin)
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
        removePumpkin();
    else if (purchase(pumpkinCosts[data]))
        lanes[index]!.slots[slotIndex] = createPumpkin(data, lanes[index]!, slotIndex);
    dragging.value = undefined;
}

function removePumpkin() {
    if (!pumpkin)
        return;
    earn(Math.floor(pumpkinCosts[pumpkin.type] * 0.3));
    pumpkin.remove();
}

useElementBinding(() => pumpkin, element);
</script>

<template>
    <div class="slot" v-on:dragover="onDragOver" v-on:drop="onDrop">
        <template v-if="pumpkin">
            <div :class="[ 'pumpkin', toClass(pumpkin.type) ]" ref="element" v-on:animationend="pumpkin?.remove()">
                <HealthBar :entity="pumpkin" />
            </div>
            <ProjectileDisplay v-if="pumpkin instanceof ShooterBase" v-for="projectile in pumpkin.projectiles" :projectile :key="projectile.id" />
            <TreeLeaves v-if="pumpkin instanceof MapleTree" :tree="pumpkin" />
        </template>
    </div>
</template>

<style scoped>
.slot {
    position: relative;
    background-color: rgba(0, 255, 0, 0.1);
    display: grid;
    padding: 15%;
    user-select: none;
}
</style>