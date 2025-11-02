<script setup lang="ts">
import PumpkinSlot from "./PumpkinSlot.vue";
import useGameStore from "../stores/gameStore.ts";

const { lanes } = useGameStore();

const { index } = defineProps<{ index: number; }>();
</script>

<template>
    <div class="lane">
        <PumpkinSlot v-for="(pumpkin, slotIndex) in lanes[index]" :key="pumpkin?.type ?? slotIndex" :index :slotIndex :pumpkin />
    </div>
</template>

<style scoped>
.lane {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
}
</style>