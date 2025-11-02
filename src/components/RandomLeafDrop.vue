<script setup lang="ts">
import { ref, useTemplateRef, watch } from "vue";
import useAnimationFrame from "../composables/useAnimationFrame.ts";
import useGameStore from "../stores/gameStore.ts";
import { storeToRefs } from "pinia";

const { earn } = useGameStore();

const { speed } = storeToRefs(useGameStore());

const leaf = useTemplateRef("leaf");

const random = ref(0);

let remaining = randomize();

let animation: Animation | null = null;

useAnimationFrame(seconds => {
    if ((remaining -= seconds) > 0)
        return;
    remaining = randomize();
    random.value = Math.random();
    if (!leaf.value)
        return;
    animation = leaf.value.animate([ { top: "-1em", visibility: "visible" }, { top: "100vh" } ], { duration: 5000, easing: "linear" });
    animation.updatePlaybackRate(speed.value);
});

function randomize() {
    return Math.random() * 10 + 15;
}

function collect() {
    earn(20);
    leaf.value?.getAnimations()[0]?.cancel();
}

watch(speed, value => animation?.updatePlaybackRate(value));
</script>

<template>
    <div id="randomLeaf" ref="leaf" v-on:click="collect">🍁</div>
</template>

<style scoped>
#randomLeaf {
    position: absolute;
    font-size: 3rem;
    left: calc((100vw - 2em) * v-bind(random) + 1em);
    cursor: pointer;
    user-select: none;
    visibility: hidden;
}
</style>