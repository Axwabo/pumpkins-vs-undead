<script setup lang="ts">
import { useTemplateRef } from "vue";
import { storeToRefs } from "pinia";
import useSettingsStore from "../stores/settingsStore.ts";

const { volume, muted } = storeToRefs(useSettingsStore());

const menuDialog = useTemplateRef("dialog");

defineExpose({
    open() {
        menuDialog.value?.showModal();
    }
});
</script>

<template>
    <dialog ref="dialog">
        <button v-on:click="menuDialog?.close()">Close</button>
        <h1>Menu</h1>
        <h2>Audio</h2>
        <input type="range" v-model="volume" min="0" max="1" step="0.01">
        <span id="volumeDisplay">{{ (volume * 100).toFixed(0) }}%</span>
        <button v-on:click="muted = !muted">{{ muted ? "🔇" : "🔊" }}</button>
        <p><a href="https://www.youtube.com/watch?v=be5ZFB8Nnm0" target="Halloween Theme (Full Version)"><small>Soundtrack by Jacek 'Fragik' Rogal</small></a></p>
    </dialog>
</template>

<style scoped>
dialog {
    text-align: center;
}

h1, h2, p {
    margin: 0;
}

#volumeDisplay {
    display: inline-block;
    min-width: 5ch;
}
</style>