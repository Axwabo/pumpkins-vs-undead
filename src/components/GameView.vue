<script setup lang="ts">
import NavBar from "./NavBar.vue";
import Lane from "./Lane.vue";
import Soundtrack from "./Soundtrack.vue";
import useGameStore from "../stores/gameStore.ts";
import Stats from "./Stats.vue";
import RandomLeafDrop from "./RandomLeafDrop.vue";

const { lanes } = useGameStore();
</script>

<template>
    <div id="game">
        <NavBar />
        <Lane v-for="(_, index) in lanes" :index />
        <RandomLeafDrop />
        <Stats />
    </div>
    <Soundtrack />
</template>

<style scoped>
#game {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: auto repeat(5, 1fr) auto;
}
</style>

<style>
#game .lane:nth-child(even) {
    background-color: rgba(213, 107, 0, 0.1);
}

#game .slot:nth-child(even) {
    background-color: rgba(50, 255, 50, 0.1);
}
</style>