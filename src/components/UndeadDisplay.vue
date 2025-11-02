<script setup lang="ts">
import type Undead from "../types/undead/undead.ts";
import { computed } from "vue";
import useAnimationFrame from "../composables/useAnimationFrame.ts";
import HealthBar from "./HealthBar.vue";

const { undead } = defineProps<{ undead: Undead; }>();

const x = computed(() => `${undead.x.value}px`);

useAnimationFrame(seconds => undead.update(seconds));
</script>

<template>
    <div class="undead">
        <div class="anchor">
            <HealthBar :entity="undead" />
        </div>
        <div :class="[ 'undead-entity', undead.type ]"></div>
    </div>
</template>

<style scoped>
.undead {
    position: absolute;
    height: 100%;
    width: 5rem;
    left: v-bind(x);
}

.undead-entity {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 100%;
    height: 100%;
    animation: wobble 2s infinite;
}

.anchor {
    position: relative;
}

@keyframes wobble {
    from, to {
        rotate: -3deg;
    }
    50% {
        rotate: 3deg;
    }
}
</style>