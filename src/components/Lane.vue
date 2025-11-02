<script setup lang="ts">
import PumpkinSlot from "./PumpkinSlot.vue";
import useGameStore from "../stores/gameStore.ts";
import UndeadSpawner from "./UndeadSpawner.vue";
import { computed, ref, useTemplateRef, watch } from "vue";
import useElementBinding from "../composables/useElementBinding.ts";
import { storeToRefs } from "pinia";

const { lanes } = useGameStore();

const { speed, round } = storeToRefs(useGameStore());

const { index } = defineProps<{ index: number; }>();

const car = useTemplateRef("car");

const carExists = ref(true);

const time = computed(() => `${5 / speed.value}s`);

watch(round, () => {
    car.value?.classList.remove("moving");
    carExists.value = true;
});

useElementBinding(() => lanes[index] ?? null, car);
</script>

<template>
    <div class="lane">
        <div class="house">
            <div class="car" ref="car" v-show="carExists" v-on:animationend="carExists = false">🚗</div>
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
    user-select: none;
}

.sidewalk {
    background-color: gray;
}

.car.moving {
    animation: car v-bind(time) linear;
}

@keyframes car {
    to {
        translate: 100vw 0;
    }
}
</style>