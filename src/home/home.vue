<template>
  <div
    class="
      mt-20
      lines-bg
      h-lg
      flex
      justify-center
      items-center
      flex-col
      md:p-0
      p-8
    "
    id="Home"
  >
    <div class="text-left max-w-2xl">
      <h1 class="text-brand-primary text-5xl md:text-6xl mb-6 font-merienda">
        {{ title }}
      </h1>

      <p
        v-if="description"
        v-text="description"
        class="
          text-brand-graydark
          leading-8
          font-poppins
          mb-8
          font-bold
          text-sm
          md:text-md
        "
      ></p>

      <Icons isDarkBackground :center="center" />
    </div>
  </div>
</template>

<script>
import Icons from "../.vitepress/theme/components/Icons/index.vue";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    background: {
      type: String,
      required: false,
    },
    center: {
      type: Boolean,
      required: false,
    },
  },
  components: {
    Icons,
  },
};
</script>

<style scoped>
.lines-bg {
  background: url("/assets/images/geometric.jpg");
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
