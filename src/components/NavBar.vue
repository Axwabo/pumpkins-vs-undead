<script setup lang="ts">
import Menu from "./Menu.vue";
import { useTemplateRef } from "vue";

const menuDialog = useTemplateRef("menu");
</script>

<template>
    <nav id="nav">
        <div class="separator"></div>
        <button v-on:click="menuDialog?.open()" id="openMenu">Menu</button>
    </nav>
    <Menu ref="menu" />
</template>

<style scoped>
#nav {
    display: flex;
    padding: 0.5rem;
    gap: 0.5rem;
}

.separator {
    flex: 1;
}
</style>