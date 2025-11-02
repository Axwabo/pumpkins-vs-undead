<script setup lang="ts">
const { win } = defineProps<{ win?: boolean; }>();
</script>

<template>
    <div>
        <h1 :class="{ win }">You {{ win ? "Win" : "Lose" }}!</h1>
        <h2>🎃 ️Pumpkins vs. Undead 🧟</h2>
    </div>
</template>

<style scoped>
h1 {
    color: red;
    font-size: 5em;
}

.win {
    color: rgb(0, 255, 0);
}
</style>