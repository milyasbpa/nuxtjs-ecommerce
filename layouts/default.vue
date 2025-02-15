<script setup lang="ts">
import NavBar from "~/components/UI/NavBar.vue";
</script>

<template>
  <div>
    <NavBar />
    <slot />
    <footer>Default Footer</footer>
  </div>
</template>
