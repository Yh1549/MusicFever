<script setup>
import AppBar from "../components/AppBar.vue";
import Footer from "../components/Footer.vue";
</script>
<template>
  <AppBar></AppBar>
  <main class="overflow-hidden">
    <slot name="mainContent"></slot>
  </main>
  <Footer></Footer>
</template>
