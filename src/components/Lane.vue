<script setup lang="ts">
import PumpkinSlot from "./PumpkinSlot.vue";
</script>

<template>
    <div class="lane">
        <PumpkinSlot />
        <PumpkinSlot />
        <PumpkinSlot />
        <PumpkinSlot />
        <PumpkinSlot />
        <PumpkinSlot />
        <PumpkinSlot />
        <PumpkinSlot />
        <PumpkinSlot />
        <PumpkinSlot />
    </div>
</template>

<style scoped>
.lane {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
}
</style>