<script setup lang="ts">
import useGameStore from "../stores/gameStore.ts";
import { storeToRefs } from "pinia";
import { computed, useTemplateRef, watch } from "vue";
import rewards from "../types/rewards.ts";

const { nextRound } = useGameStore();

const { round, roundCompleted } = storeToRefs(useGameStore());

const complete = useTemplateRef("complete");

const reward = computed(() => rewards[round.value]);

watch(roundCompleted, value => value && complete.value?.showModal());
</script>

<template>
    <dialog ref="complete" v-on:close="nextRound">
        <h1>Round {{ round + 1 }} complete!</h1>
        <template v-if="reward">
            <div :class="[ 'pumpkin', reward ]"></div>
            <p>Unlocked {{ reward }}</p>
        </template>
        <button v-on:click="complete?.close()">Continue</button>
    </dialog>
</template>

<style scoped>
dialog {
    font-size: 2em;
}

.pumpkin {
    width: 5rem;
    height: 5rem;
}
</style>