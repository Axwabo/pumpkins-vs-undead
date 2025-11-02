<script setup lang="ts">
import { ref } from "vue";
import PWABadge from "./components/PWABadge.vue";
import SplashScreen from "./components/SplashScreen.vue";
import GameView from "./components/GameView.vue";
import { storeToRefs } from "pinia";
import useGameStore from "./stores/gameStore.ts";
import EndScreen from "./components/EndScreen.vue";

const splash = ref(true);

const { state } = storeToRefs(useGameStore());
</script>

<template>
    <SplashScreen v-if="splash" v-on:click="splash = false" />
    <EndScreen v-else-if="state === 'won'" :win="true" />
    <EndScreen v-else-if="state === 'lost'" />
    <GameView v-else />
    <PWABadge />
</template>
