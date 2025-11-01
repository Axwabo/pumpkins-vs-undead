<script setup lang="ts">
const emit = defineEmits([ "click" ]);

const tilt = window.innerWidth < window.innerHeight;
</script>

<template>
    <div id="splash">
        <h1>Pumpkins vs. Undead</h1>
        <template v-if="tilt">
            <h1>📱🔄</h1>
            <h2>For a better experience, set your device to be landscape-oriented</h2>
        </template>
        <button onclick="document.body.requestFullscreen();">Fullscreen</button>
        <button v-on:click="emit('click')">Play</button>
    </div>
</template>

<style scoped>
#splash {
    display: grid;
    place-items: center;
    gap: 1rem;
    text-align: center;
}
</style>