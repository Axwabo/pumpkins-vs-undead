<script setup lang="ts">
import { ref } from "vue";
import Pumpkin from "../types/pumpkins/pumpkin.ts";
import useAnimationFrame from "../composables/useAnimationFrame.ts";
import { toClass } from "../utils/css.ts";
import createPumpkin from "../types/pumpkins/pumpkinFactory.ts";
import type { PumpkinType } from "../types/pumpkins/pumpkinType.ts";
import useGameStore from "../stores/gameStore.ts";
import { pumpkinCosts } from "../types/pumpkins/cost.ts";

const current = ref<Pumpkin | null>(null);

const { purchase } = useGameStore();

useAnimationFrame(seconds => current.value?.update(seconds));

function onDragOver(ev: DragEvent) {
    if (!current.value)
        ev.preventDefault();
}

function onDrop(ev: DragEvent) {
    const data = ev.dataTransfer?.getData("pumpkin") as PumpkinType | undefined;
    if (current.value || !data || !purchase(pumpkinCosts[data]))
        return;
    ev.preventDefault();
    current.value = createPumpkin(data);
}
</script>

<template>
    <div :class="[ 'slot', toClass(current?.type) ]" v-on:dragover="onDragOver" v-on:drop="onDrop">
    </div>
</template>

<style scoped>
.slot {
    background-color: rgba(0, 255, 0, 0.1);
}

.slot.maple-tree::after {
    content: "🍁"; /* TODO */
}
</style>