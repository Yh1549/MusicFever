<script setup>
import { onBeforeMount, ref } from "vue";
import request from "../axiosRequest";
import HomeBanner from "../components/HomeBanner.vue";
import MusicianCard from "../components/MusicainCard.vue";
const data = ref();

onBeforeMount(() => {
  request
    .get("mainPageCard.json")
    .then((res) => {
      data.value = res.data.resBody;
    })
    .catch();
});
</script>
<template>
  <div>
    <HomeBanner></HomeBanner>
    <div class="w-full overflow-x-scroll p-4 flex gap-4 justify-center">
      <MusicianCard v-for="item of data" :key="item.title">
        <template #title>
          <h2 class="mt-4 text-xl font-medium sm:text-2xl">
            {{ item.title }}
          </h2></template
        >
        <template #content>
          <h3 class="mt-4 text-xl font-medium sm:text-2xl">{{ item.title }}</h3>

          <p class="mt-4 text-sm sm:text-base">{{ item.content }}</p>
        </template>
      </MusicianCard>
    </div>
  </div>
</template>
