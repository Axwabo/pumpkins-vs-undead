<script setup lang="ts">
import { storeToRefs } from "pinia";
import useGameStore from "../stores/gameStore.ts";

const { round } = storeToRefs(useGameStore());
</script>

<template>
    <footer id="stats">
        <span>🎃 ️Pumpkins vs. Undead 🧟</span>
        <div class="separator"></div>
        <span>Round <span class="round">{{ round }}</span></span>
    </footer>
</template>

<style scoped>
#stats {
    font-size: 2em;
    display: flex;
    padding: 0.5rem;
    -webkit-text-stroke: 4px black;
    paint-order: stroke fill;
}

.round {
    color: red;
}
</style>