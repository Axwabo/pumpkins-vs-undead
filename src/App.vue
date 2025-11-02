<script setup lang="ts">
import { ref } from "vue";
import PWABadge from "./components/PWABadge.vue";
import SplashScreen from "./components/SplashScreen.vue";
import GameView from "./components/GameView.vue";

const splash = ref(true);
</script>

<template>
    <SplashScreen v-if="splash" v-on:click="splash = false" />
    <GameView v-else />
    <PWABadge />
</template>
