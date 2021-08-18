<template>
  <div>
    <div
      v-if="state.menuOpen"
      class="w-full h-full z-11 bg-brand-darktransparent fixed -pt-60"
      @click="state.menuOpen = false"
    ></div>

    <template v-if="project" class="text-white mt-36">
      <!-- <Home :title="project.title" center background="./assets/images/logo-sys-1.jpeg" /> -->
    </template>

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

    return {
      project,
      state,
    };
  },
};
</script>
