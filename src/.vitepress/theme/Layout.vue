<template>
  <div>
    <div
      v-if="state.menuOpen || state.selectedImageId > -1"
      class="block md:hidden w-full h-full-h bg-brand-darktransparent fixed inset-y-0 z-10"
      @click="setState"
    ></div>

    <Content class="wrapper" />
  </div>
</template>

<script>
import { computed } from "vue";
import { postForPath } from "../../utils/helpers";
import { useRoute } from "vitepress/dist/client/app/router";
import { state } from "./store";
import Header from "./components/Header/index.vue";
import Home from "../../home/home.vue";
import Title from "./components/Header/Title/index.vue";

export default {
  components: {
    Header,
    Home,
    Title,
  },
  setup() {
    const route = useRoute();
    const project = computed(() => postForPath(route.path));

    const setState = () => {
      state.menuOpen = false;
      state.selectedImageId = -1;
    }

    return {
      project,
      state,
      setState
    };
  },
};
</script>
