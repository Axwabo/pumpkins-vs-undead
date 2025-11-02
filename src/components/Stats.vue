<script setup lang="ts">
import { storeToRefs } from "pinia";
import useGameStore from "../stores/gameStore.ts";
import { computed } from "vue";
import rounds from "../types/rounds/roundDefinitions.ts";

const { round, wave, zombiesThisRound, speed } = storeToRefs(useGameStore());

const speeds = [ 1, 1.5, 2, 2.5, 3, 5 ];

const totalZombies = computed(() => rounds[round.value]!.reduce((prev, curr) => curr.length + prev, 0));
</script>

<template>
    <footer id="stats">
        <span>🎃 ️Pumpkins vs. Undead 🧟</span>
        <div class="separator"></div>
        <button id="speedSwitcher" v-on:click="speed = speeds[(speeds.indexOf(speed) + 1) % speeds.length]!">⏩</button>
        <label for="speedSwitcher" id="speedDisplay">{{ speed }}x</label>
        <span id="roundInfo">Round <span class="red">{{ round + 1 }}</span> Wave <span class="red">{{ wave + 1 }}</span></span>
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

#speedSwitcher {
    padding: 0;
    background-color: transparent;
}

#speedDisplay {
    display: inline-block;
    min-width: 3ch;
}

#roundInfo {
    display: inline-block;
    min-width: 15ch;
    text-align: right;
}

.red {
    color: red;
}

progress {
    accent-color: red;
    scale: -1;
}
</style>