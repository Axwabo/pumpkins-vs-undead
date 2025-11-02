<script setup lang="ts">
import NavBar from "./NavBar.vue";
import Lane from "./Lane.vue";
</script>

<template>
    <div id="game">
        <NavBar />
        <Lane />
        <Lane />
        <Lane />
        <Lane />
        <Lane />
    </div>
</template>

<style scoped>
#game {
    font-size: 2em;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: auto repeat(5, 1fr);
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