<script setup lang="ts">
import { ref } from "vue";
import PWABadge from "./components/PWABadge.vue";
import SplashScreen from "./components/SplashScreen.vue";

const splash = ref(true);
</script>

<template>
    <SplashScreen v-if="splash" v-on:click="splash = false" />
    <PWABadge />
</template>
