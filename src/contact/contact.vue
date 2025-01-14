<template>
  <div
    class="w-full text-brand-dark flex flex-col justify-center items-center h-auto p-12 max-w-6xl mx-auto"
    id="Contact"
  >
    <h2 class="text-3xl font-merienda">Contact</h2>
    <div
      class="w-full"
      id="book-a-call"
    ></div>
    <p class="mb-6 font-poppins">amandagonsalvesags@gmail.com</p>

    <Icons />
  </div>
</template>

<script>
import Icons from '../.vitepress/theme/components/Icons/index.vue';

export default {
  components: {
    Icons
  },
}
</script>
