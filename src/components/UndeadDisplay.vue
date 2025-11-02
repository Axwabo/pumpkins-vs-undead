<script setup lang="ts">
import type Undead from "../types/undead/undead.ts";
import { computed, useTemplateRef } from "vue";
import useAnimationFrame from "../composables/useAnimationFrame.ts";
import HealthBar from "./HealthBar.vue";
import useElementBinding from "../composables/useElementBinding.ts";

const { undead } = defineProps<{ undead: Undead; }>();

const x = computed(() => `${undead.position.x}px`);

const entity = useTemplateRef("entity");

useAnimationFrame(seconds => undead.update(seconds));

useElementBinding(() => undead, entity);
</script>

<template>
    <div class="undead">
        <div class="anchor">
            <HealthBar :entity="undead" />
        </div>
        <div :class="[ 'undead-entity', undead.type ]" ref="entity"></div>
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