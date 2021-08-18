import { reactive } from 'vue';

export const state = reactive({
  menuOpen: false,
  isScrolling: false,
  selectedImageId: -1,
});