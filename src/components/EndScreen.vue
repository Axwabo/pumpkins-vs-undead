<script setup lang="ts">
import useGameStore from "../stores/gameStore.ts";

const { win } = defineProps<{ win?: boolean; }>();

const store = useGameStore();
</script>

<template>
    <div id="end">
        <h1 :class="{ win }">You {{ win ? "Win" : "Lose" }}!</h1>
        <h2>🎃 ️Pumpkins vs. Undead 🧟</h2>
        <button v-on:click="store.$reset()">Restart</button>
    </div>
</template>

<style scoped>
#end {
    text-align: center;
    font-size: 2em;
}

h1 {
    color: red;
    font-size: 5em;
}

.win {
    color: rgb(0, 255, 0);
}
</style>