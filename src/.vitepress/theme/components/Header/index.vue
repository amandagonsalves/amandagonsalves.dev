<template>
  <div class="p-6 fixed top-0 w-full bg-brand-gray">
    <div class="max-w-5xl mx-auto flex justify-between items-center">
      <h2 class="font-merienda">
        amandagonsalves<span class="text-brand-danger">.</span>dev
      </h2>

      <nav class="flex items-center">
        <ul class="flex items-center">
          <li v-for="item in navData" :key="item.link">
            <a
              class="mr-4 font-oxygen border-b border-transparent text-center hover:border-brand-aqua transition-all duration-300 hover:text-brand-aqua"
              :href="item.link"
              v-text="item.text"
            ></a>
          </li>
        </ul>

        <button
          type="button"
          class="font-oxygen border-b border-transparent text-center hover:border-brand-aqua  hover:text-brand-aqua transition-all duration-300"
        >
          Let's talk &#10132;
        </button>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    navData() {
      return this.$site.themeConfig.nav;
    },
  },
};
</script>