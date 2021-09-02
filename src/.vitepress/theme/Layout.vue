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

    <div
      v-if="state.selectedImageId > -1"
      class="w-full h-full-h bg-brand-darktransparent fixed inset-y-0 z-10"
      @click="setState"
    ></div>

    <Content class="wrapper" />
  </div>
</template>

<script>
import { computed, onMounted, onUnmounted, reactive, watch } from "vue";
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
    const resizeHandler = () => {
      if (
        window.innerWidth > 600 ||
        document.documentElement.clientWidth > 600 ||
        document.body.clientWidth > 600
      ) {
        state.menuOpen = false;
        state.selectedImageId = -1;
      }
    };

    onMounted(() => {
      window.addEventListener("resize", resizeHandler);
    })

    onUnmounted(() => {
      window.removeEventListener("resize", resizeHandler);
    })

    const { offsetWidth, offsetHeight } = document.querySelector("#app");

    const windowObj = reactive({
      innerWidth: window.innerWidth,
      clientWidth: document.documentElement.clientWidth,
      bodyClientWidth: document.body.clientWidth,
    });

    const setState = () => {
      state.menuOpen = false;
      state.selectedImageId = -1;
    };

    watch(
      () => windowObj,
      (windowObj, prev) => {
        console.log("window obj", windowObj, prev);
        if (
          window.innerWidth > 600 ||
          document.documentElement.clientWidth > 600 ||
          document.body.clientWidth > 600
        ) {
          setState();
        }
      }
    );

    const route = useRoute();
    const project = computed(() => postForPath(route.path));

    return {
      project,
      state,
      setState,
      offsetWidth,
      offsetHeight,
    };
  },
};
</script>
