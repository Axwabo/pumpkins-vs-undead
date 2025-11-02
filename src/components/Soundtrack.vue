<script setup lang="ts">
import src from "../assets/audio/Halloween.ogg";
import { onMounted, useTemplateRef, watch } from "vue";
import { storeToRefs } from "pinia";
import useSettingsStore from "../stores/settingsStore.ts";

const playback = useTemplateRef("playback");

const { volume, muted } = storeToRefs(useSettingsStore());

watch(volume, setVolume);

onMounted(() => setVolume(volume.value));

function setVolume(value: number) {
    if (playback.value)
        playback.value.volume = value;
}
</script>

<template>
    <audio :src="src" :muted autoplay loop ref="playback"></audio>
</template>
