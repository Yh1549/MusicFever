import { defineStore } from "pinia";
export const useStore = defineStore("store", {
  state: () => {
    return {
      test: 1,
    };
  },
});
