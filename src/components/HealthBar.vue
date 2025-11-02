<script setup lang="ts">
import type Entity from "../types/entity.ts";

const { entity } = defineProps<{ entity: Entity; }>();
</script>

<template>
    <progress class="bar" :value="entity.health.current" :max="entity.health.max" v-show="entity.health.current < entity.health.max"></progress>
</template>

<style scoped>
.bar {
    accent-color: rgb(255, 138, 6);
    position: absolute;
    width: 50%;
    top: 0;
    left: 50%;
    translate: -50% 0;
}
</style>