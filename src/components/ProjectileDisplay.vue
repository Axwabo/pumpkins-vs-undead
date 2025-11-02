<script setup lang="ts">
import type Projectile from "../types/projectile.ts";
import { onMounted, onUnmounted, useTemplateRef } from "vue";
import useAnimationFrame from "../composables/useAnimationFrame.ts";

const { projectile } = defineProps<{ projectile: Projectile; }>();

const element = useTemplateRef("element");

const color = projectile.color;

let x = 0;

useAnimationFrame(seconds => {
    x += seconds * 100;
    if (!element.value)
        return;
    element.value.style.translate = `${x}px -50%`;
    if (element.value.getBoundingClientRect().x > window.innerWidth)
        projectile.pumpkin.projectiles.delete(projectile);
});

onMounted(() => projectile.element = element.value!);
onUnmounted(() => projectile.element = undefined);
</script>

<template>
    <div class="projectile" ref="element"></div>
</template>

<style scoped>
.projectile {
    position: absolute;
    top: 50%;
    right: 20%;
    translate: 0 -50%;
    width: 1rem;
    height: 1rem;
    background-color: v-bind(color);
    border-radius: 50%;
}
</style>