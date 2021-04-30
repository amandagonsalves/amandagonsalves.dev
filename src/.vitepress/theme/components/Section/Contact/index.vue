<template>
  <div
    class="w-full text-black flex flex-col justify-center items-center bg-gray-200 h-auto p-12 max-w-6xl my-16 mx-auto"
    id="Contact"
  >
    <h1 class="text-3xl mb-6 font-merienda">Contact</h1>

    <p class="mb-6 font-oxygen">amandagonsalves75@gmail.com</p>

    <div class="flex items-center gap-4">
      <img
        class="w-8 cursor-pointer hover:bg-brand-primary transition-all duration-300 fill-current"
        src="../../../assets/icons/github.svg"
        alt="github"
      />
      <img
        class="w-8 cursor-pointer hover:bg-brand-primary transition-all duration-300 fill-current"
        src="../../../assets/icons/mail.svg"
        alt="mail"
      />
      <img
        class="w-8 cursor-pointer hover:bg-brand-primary transition-all duration-300 fill-current"
        src="../../../assets/icons/linkedin.svg"
        alt="linkedin"
      />
    </div>
  </div>
</template>

<script>
import Icon from './Icon/index.vue';

export default {
  components: {
    Icon
  }
}
</script>

<style>
</style>