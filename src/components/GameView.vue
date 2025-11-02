<script setup lang="ts">
import NavBar from "./NavBar.vue";
import Lane from "./Lane.vue";
import Soundtrack from "./Soundtrack.vue";
import useGameStore from "../stores/gameStore.ts";
import Stats from "./Stats.vue";
import RandomLeafDrop from "./RandomLeafDrop.vue";
import RoundComplete from "./RoundComplete.vue";
import Instructions from "./Instructions.vue";
import EndScreen from "./EndScreen.vue";
import { storeToRefs } from "pinia";

const { lanes } = useGameStore();

const { state } = storeToRefs(useGameStore());
</script>

<template>
    <template v-if="state === 'playing'">
        <div id="game">
            <NavBar />
            <Lane v-for="(_, index) in lanes" :index />
            <RandomLeafDrop />
            <Stats />
        </div>
        <RoundComplete />
        <Instructions />
    </template>
    <EndScreen v-else-if="state === 'won'" :win="true" />
    <EndScreen v-else-if="state === 'lost'" />
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