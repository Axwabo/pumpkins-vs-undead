<script setup lang="ts">
import useGameStore from "../stores/gameStore.ts";
import type MapleTree from "../types/pumpkins/mapleTree.ts";

const { tree } = defineProps<{ tree: MapleTree; }>();

const { earn } = useGameStore();
</script>

<template>
    <div class="drops">
        <div class="anchor">
            <button class="drop" v-for="(value, index) in tree.drops" :key="value.key" v-on:click="earn(value.amount); tree.drops.splice(index, 1)">🍁</button>
        </div>
    </div>
</template>

<style scoped>
.drops {
    position: absolute;
    bottom: 0;
    right: 0;
}

.anchor {
    position: relative;
}

.drop {
    position: absolute;
    bottom: 0;
    right: 0;
    border: none;
    outline: none;
    user-select: none;
    background-color: transparent;
    padding: 0;
    font-size: 2em;
    cursor: pointer;
    animation: drop 0.3s linear;
}

@keyframes drop {
    50% {
        translate: 0 -1rem;
    }
}
</style>