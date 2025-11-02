<script setup lang="ts">
import PumpkinSlot from "./PumpkinSlot.vue";
import useGameStore from "../stores/gameStore.ts";
import UndeadSpawner from "./UndeadSpawner.vue";
import { ref, useTemplateRef } from "vue";
import useElementBinding from "../composables/useElementBinding.ts";

const { lanes } = useGameStore();

const { index } = defineProps<{ index: number; }>();

const car = useTemplateRef("car");

const carExists = ref(true);

useElementBinding(() => lanes[index] ?? null, car);
</script>

<template>
    <div class="lane">
        <div class="house">
            <div class="car" ref="car" v-if="carExists" v-on:animationend="carExists = false">🚗</div>
        </div>
        <PumpkinSlot v-for="(pumpkin, slotIndex) in lanes[index]!.slots" :key="pumpkin?.type ?? slotIndex" :index :slotIndex :pumpkin />
        <div class="sidewalk"></div>
        <UndeadSpawner :index />
    </div>
</template>

<style scoped>
.lane {
    position: relative;
    display: grid;
    grid-template-columns: 6rem repeat(10, 1fr) 15rem;
}

.house {
    position: relative;
    background-color: gray;
    display: grid;
    place-items: center;
}

.car {
    scale: -1 1;
    font-size: 3rem;
}

.sidewalk {
    background-color: gray;
}

.car.moving {
    animation: car 5s linear;
}

@keyframes car {
    to {
        translate: 100vw 0;
    }
}
</style>