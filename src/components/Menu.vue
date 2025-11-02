<script setup lang="ts">
import { useTemplateRef } from "vue";

const menuDialog = useTemplateRef("dialog");

defineExpose({
    open() {
        menuDialog.value?.showModal();
    }
});
</script>

<template>
    <dialog ref="dialog">
        <button v-on:click="menuDialog?.close()">Close</button>
    </dialog>
</template>

<style scoped>

</style>