<script setup>
import { ref } from "vue";
import { themeToggle } from "../themeToggle";

const themeChangeToggle = ref(false);
</script>
<template>
  <header aria-label="Site Header">
    <div
      class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8"
    >
      <router-link :to="{ name: 'lobby' }" class="block">
        <div class="flex w-16">
          <img class="" src="/i-am-not-tired-squidward-meme.png" />
        </div>
      </router-link>
      <div class="flex flex-1 items-center justify-end md:justify-between">
        <nav aria-label="Site Nav" class="hidden md:block">
          <ul class="flex items-center gap-6 text-sm">
            <li>
              <router-link
                :to="{ name: 'join' }"
                class="text-gray-500 transition hover:text-gray-500/75"
              >
                Join Us
              </router-link>
            </li>
            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75"
                href="/"
              >
                Explore
              </a>
            </li>
            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75"
                href="/"
              >
                Review
              </a>
            </li>
            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75"
                href="/"
              >
                Library
              </a>
            </li>
          </ul>
        </nav>
        <div class="flex gap-2">
          <div class="flex items-center gap-4">
            <div class="sm:flex sm:gap-4">
              <router-link :to="{ name: 'login' }" class="btn btn-secondary">
                Login
              </router-link>
            </div>
            <button
              class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
            >
              <span class="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div class="flex items-center gap-2">
            <span
              class="w-5"
              :class="themeChangeToggle ? 'text-gray-600' : 'text-primary'"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path
                  d="M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"
                /></svg
            ></span>
            <label
              for="AcceptConditions"
              class="relative h-8 w-12 cursor-pointer"
            >
              <input
                type="checkbox"
                id="AcceptConditions"
                class="peer sr-only"
                v-model="themeChangeToggle"
                @change="themeToggle(themeChangeToggle)"
              />
              <span
                class="absolute inset-0 m-auto h-2 rounded-full bg-gray-300"
              ></span>
              <span
                class="absolute inset-y-0 start-0 m-auto h-6 w-6 rounded-full bg-gray-500 transition-all peer-checked:start-6 peer-checked:[&_>_*]:scale-0"
              >
                <span
                  class="absolute inset-0 m-auto h-4 w-4 rounded-full bg-gray-200 transition"
                >
                </span>
              </span>
            </label>
            <span
              class="w-5"
              :class="themeChangeToggle ? 'text-primary' : 'text-gray-300'"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path
                  d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
