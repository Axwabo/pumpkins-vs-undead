<script setup lang="ts">
import { useTemplateRef } from "vue";
import useAnimationFrame from "../composables/useAnimationFrame.ts";
import useGameStore from "../stores/gameStore.ts";

const { earn } = useGameStore();

const container = useTemplateRef("container");

let remaining = randomize();

useAnimationFrame(seconds => {
    if ((remaining -= seconds) > 0)
        return;
    remaining = randomize();
    const leaf = document.createElement("div");
    leaf.innerText = "🍁";
    leaf.style.fontSize = "2rem";
    leaf.style.pointerEvents = "all";
    leaf.style.cursor = "pointer";
    leaf.style.position = "absolute";
    leaf.style.left = `calc((100vw - 2em) * ${Math.random()} + 1em)`;
    leaf.animate([ { top: "-1em" }, { top: "100vh" } ], { duration: 5000, easing: "linear" }).addEventListener("finish", () => leaf.remove());
    leaf.onclick = () => {
        earn(20);
        leaf.remove();
    };
    container.value?.append(leaf);
});

function randomize() {
    return Math.random() * 10 + 15;
}
</script>

<template>
    <div id="randomLeaves" ref="container"></div>
</template>