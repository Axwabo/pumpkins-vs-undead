<script setup lang="ts">
import useGameStore from "../stores/gameStore.ts";
import { storeToRefs } from "pinia";
import useAnimationFrame from "../composables/useAnimationFrame.ts";
import { computed, shallowReactive } from "vue";
import rounds from "../types/rounds/roundDefinitions.ts";
import type { UndeadType } from "../types/undead/undeadType.ts";
import createUndead from "../types/undead/undeadFactory.ts";
import type Undead from "../types/undead/undead.ts";
import UndeadDisplay from "./UndeadDisplay.vue";

const { index } = defineProps<{ index: number; }>();

const { undead } = useGameStore();

const { round, wave, zombiesThisRound, zombiesThisWave } = storeToRefs(useGameStore());

const currentWave = computed(() => rounds[round.value]![wave.value]!);

let cooldown = randomize();

const thisLane = shallowReactive<Undead[]>([]);

useAnimationFrame(seconds => {
    if (zombiesThisWave.value >= currentWave.value.length || (cooldown -= seconds) > 0)
        return;
    zombiesThisRound.value++;
    const type = currentWave.value[zombiesThisWave.value++]! as UndeadType;
    const entity = createUndead(type, index);
    undead.add(entity);
    thisLane.push(entity);
    cooldown = randomize();
});

function randomize() {
    return Math.random() * 3 + 2;
}
</script>

<template>
    <UndeadDisplay v-for="undead in thisLane" :key="undead.id" :undead />
</template>

<style scoped>

</style>