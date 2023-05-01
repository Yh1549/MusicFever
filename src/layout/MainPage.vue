<script setup>
import PageLayout from "./PageLayout.vue";
</script>
<template>
  <PageLayout>
    <template #mainContent>
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </template>
  </PageLayout>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
