<script setup></script>
<template>
  <section class="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center">
    <div class="p-8 md:p-12 lg:px-16 lg:py-24">
      <div class="mx-auto max-w-xl ltr:sm:text-left">
        <h2 class="text-primary text-[6.5rem] leading-[6.5rem] font-extrabold">
          Where <br />
          Live <br />
          Happens
        </h2>
        <p class="hidden text-gray-500 md:mt-4 md:block">
          Experience music in real-time with others.
        </p>

        <div class="mt-4 md:mt-8">
          <router-link :to="{ name: 'join' }" class="btn btn-primary">
            Get Started Today
          </router-link>
        </div>
      </div>
    </div>
    <div
      class="h-full w-full object-cover flex items-center justify-center px-8"
    >
      <img alt="cover" class="shadow-2xl" src="../assets/record_man.jpg" />
    </div>
  </section>
</template>
