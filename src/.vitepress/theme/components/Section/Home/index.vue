<template>
  <div
    class="mt-20 lines-bg h-lg flex justify-center items-center flex-col md:p-0 px-8"
    id="Home"
  >
    <div class="text-left max-w-2xl">
      <h1 class="text-brand-primary text-6xl mb-6 font-merienda">
        Amanda Gonsalves
      </h1>

      <p class="text-brand-graydark leading-8 font-oxygen mb-8">
        ​I’m a web developer based in Florianópolis, Brazil. I’ve been studying
        since 2020 and in 2021 I got my first job as a developer, now I’m
        working hard every day to gain as much knowledge as possible to build my
        career as a software developer.
      </p>

      <Icons isDarkBackground />
    </div>
  </div>
</template>

<script>
import Icons from "../../Icons/index.vue";

export default {
  components: {
    Icons,
  },
};
</script>

<style scoped>
  .lines-bg {
    background: url('../../../assets/images/geometric.jpg');
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
