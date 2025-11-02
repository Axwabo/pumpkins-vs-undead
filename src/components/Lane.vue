<script setup lang="ts">
import PumpkinSlot from "./PumpkinSlot.vue";
import type { Lane } from "../types/lane.ts";

const { lane } = defineProps<{ lane: Lane; }>();
</script>

<template>
    <div class="lane">
        <PumpkinSlot v-for="pumpkin in lane" :pumpkin />
    </div>
</template>

<style scoped>
.lane {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
}
</style>