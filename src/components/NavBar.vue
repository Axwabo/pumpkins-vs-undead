<script setup lang="ts">
import Menu from "./Menu.vue";
import { useTemplateRef } from "vue";
import useGameStore from "../stores/gameStore.ts";
import { storeToRefs } from "pinia";
import Card from "./Card.vue";

const { unlockedCards } = useGameStore();

const { leaves, dragging } = storeToRefs(useGameStore());

const menuDialog = useTemplateRef("menu");
</script>

<template>
    <nav id="nav">
        <span id="leafCount">🍁{{ leaves }}</span>
        <Card v-for="type in unlockedCards" :type />
        <button id="remove" draggable="true" v-on:dragstart="dragging = 'axe'">
            <span class="emoji">🪓</span>
            <br>
            Remove
        </button>
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
    font-size: 2em;
}

#remove {
    padding: 0.2rem;
    cursor: grab;
}

.emoji {
    font-size: 2em;
}

.separator {
    flex: 1;
}
</style>