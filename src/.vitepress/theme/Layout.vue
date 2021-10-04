<template>
  <div>
    <div
      v-if="state.menuOpen"
      class="
        w-full
        h-full-h
        block
        md:hidden
        bg-brand-darktransparent
        fixed
        inset-y-0
        z-10
      "
      @click="setState"
    ></div>

    <Content class="wrapper" />
  </div>
</template>

<script>
import { computed, onMounted, onUnmounted } from "vue";
import { postForPath } from "../../utils/helpers";
import { useRoute } from "vitepress/dist/client/app/router";
import { state } from "./store";
import Header from "./components/Header/index.vue";
import Home from "../../home/home.vue";

export default {
  components: {
    Header,
    Home,
  },
  setup() {
    const resizeHandler = () => {
      if (
        window.innerWidth > 600 ||
        window.document.documentElement.clientWidth > 600 ||
        window.document.body.clientWidth > 600
      ) {
        state.menuOpen = false;
      }
    };

    onMounted(() => {
      window.addEventListener("resize", resizeHandler);
    })

    onUnmounted(() => {
      window.removeEventListener("resize", resizeHandler);
    })

    const setState = () => {
      state.menuOpen = false;
    };

    const route = useRoute();
    const project = computed(() => postForPath(route.path));

    return {
      project,
      state,
      setState,
    };
  },
};
</script>
