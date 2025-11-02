<script setup lang="ts">
import useGameStore from "../stores/gameStore.ts";
import { storeToRefs } from "pinia";
import { computed, useTemplateRef, watch } from "vue";
import rewards from "../types/rewards.ts";
import { toClass } from "../utils/css.ts";
import descriptions from "../types/pumpkins/description.ts";

const { nextRound, unlockedCards } = useGameStore();

const { round, roundCompleted } = storeToRefs(useGameStore());

const complete = useTemplateRef("complete");

const reward = computed(() => rewards[round.value]);

watch(roundCompleted, value => {
    if (!value)
        return;
    complete.value?.showModal();
    if (reward.value)
        unlockedCards.push(reward.value);
});
</script>

<template>
    <dialog ref="complete" v-on:close="nextRound">
        <h1>Round {{ round + 1 }} complete!</h1>
        <template v-if="reward">
            <span :class="[ 'pumpkin', toClass(reward) ]"></span>
            <p>Unlocked {{ reward }}</p>
            <p><small>{{ descriptions[reward] }}</small></p>
        </template>
        <button v-on:click="complete?.close()">Continue</button>
    </dialog>
</template>

<style scoped>
dialog {
    font-size: 2em;
    text-align: center;
}

dialog p {
    margin: 0;
}

.pumpkin {
    width: 5rem;
    height: 5rem;
    display: inline-block;
}
</style>