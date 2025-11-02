<script setup lang="ts">

</script>

<template>
    <h1 id="instructions">
        Drag-and-drop pumpkins to defend against the undead.
        <br>
        Collect leaves to purchase more pumpkins.
        <br>
        Cars are your last line of defense.
    </h1>
</template>

<style scoped>
#instructions {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    translate: 0 -50%;
    text-align: center;
    font-size: 4em;
    -webkit-text-stroke: 5px black;
    paint-order: stroke fill;
    pointer-events: none;
    visibility: hidden;
    animation: instructions 10s linear;
}

@keyframes instructions {
    from, to {
        visibility: visible;
    }
}
</style>