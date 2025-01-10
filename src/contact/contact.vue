<template>
  <div
    class="w-full text-brand-dark flex flex-col justify-center items-center h-auto p-12 max-w-6xl mx-auto"
    id="Contact"
  >
    <h2 class="text-3xl mb-6 font-merienda">Contact</h2>
    <p class="mb-6 font-poppins">amandagonsalvesags@gmail.com</p>

    <Icons />
  </div>

  <div
    class="w-full flex flex-col justify-center items-center h-auto max-w-6xl mx-auto"
    id="book-a-call"
  ></div>
</template>

<script>
import Icons from '../.vitepress/theme/components/Icons/index.vue';

export default {
  components: {
    Icons
  },
}
</script>
