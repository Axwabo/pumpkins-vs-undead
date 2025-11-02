<script setup lang="ts">
import PumpkinSlot from "./PumpkinSlot.vue";
import useGameStore from "../stores/gameStore.ts";

const { lanes } = useGameStore();

const { index } = defineProps<{ index: number; }>();
</script>

<template>
    <div class="lane">
        <div class="house">
            <button>🚗</button>
        </div>
        <PumpkinSlot v-for="(pumpkin, slotIndex) in lanes[index]" :key="pumpkin?.type ?? slotIndex" :index :slotIndex :pumpkin />
        <div class="sidewalk"></div>
    </div>
</template>

<style scoped>
.lane {
    display: grid;
    grid-template-columns: 6rem repeat(10, 1fr) 15rem;
}

.house {
    background-color: gray;
    display: grid;
    place-items: center;
}

.house button {
    scale: -1 1;
    font-size: 2rem;
}

.sidewalk {
    background-color: gray;
}
</style>