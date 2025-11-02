<script setup lang="ts">
import { storeToRefs } from "pinia";
import useGameStore from "../stores/gameStore.ts";
import { computed } from "vue";
import rounds from "../types/rounds/roundDefinitions.ts";

const { round, wave, zombiesThisRound } = storeToRefs(useGameStore());

const totalZombies = computed(() => rounds[round.value]!.reduce((prev, curr) => curr.length + prev, 0));
</script>

<template>
    <footer id="stats">
        <span>🎃 ️Pumpkins vs. Undead 🧟</span>
        <div class="separator"></div>
        <span>Round <span class="red">{{ round + 1 }}</span> Wave <span class="red">{{ wave + 1 }}</span></span>
        <progress :value="zombiesThisRound" :max="totalZombies"></progress>
    </footer>
</template>

<style scoped>
#stats {
    font-size: 2em;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    -webkit-text-stroke: 4px black;
    paint-order: stroke fill;
}

.red {
    color: red;
}

progress {
    accent-color: red;
    scale: -1;
}
</style>