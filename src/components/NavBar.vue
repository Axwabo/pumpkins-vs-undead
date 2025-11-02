<script setup lang="ts">
import Menu from "./Menu.vue";
import { useTemplateRef } from "vue";
import useGameStore from "../stores/gameStore.ts";
import { storeToRefs } from "pinia";

const { leaves } = storeToRefs(useGameStore());

const menuDialog = useTemplateRef("menu");
</script>

<template>
    <nav id="nav">
        <span id="leafCount">🍁{{ leaves }}</span>
        <div class="separator"></div>
        <button v-on:click="menuDialog?.open()" id="openMenu">Menu</button>
    </nav>
    <Menu ref="menu" />
</template>

<style scoped>
#nav {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    gap: 0.5rem;
}

#leafCount {
    display: inline-block;
    min-width: 10ch;
}

.separator {
    flex: 1;
}
</style>