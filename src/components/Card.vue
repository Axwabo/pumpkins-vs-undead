<script setup lang="ts">
import type { PumpkinType } from "../types/pumpkins/pumpkinType.ts";
import { toClass } from "../utils/css.ts";
import { pumpkinCosts } from "../types/pumpkins/cost.ts";
import { storeToRefs } from "pinia";
import useGameStore from "../stores/gameStore.ts";

const { type } = defineProps<{ type: PumpkinType; }>();

const { leaves } = storeToRefs(useGameStore());

const cost = pumpkinCosts[type];

function onDragStart(ev: DragEvent) {
    ev.dataTransfer?.setData("pumpkin", type);
}
</script>

<template>
    <button class="card" :disabled="leaves < cost" :draggable="leaves >= cost" v-on:dragstart="onDragStart">
        <span :class="[ 'image', toClass(type) ]"></span>
        <span>{{ type }}</span>
        <span>{{ cost }}🍁</span>
    </button>
</template>

<style scoped>
.card {
    display: grid;
    place-items: center;
}
</style>