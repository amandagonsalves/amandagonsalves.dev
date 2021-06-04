<template>
  <div
    class="transition-all duration-300 ease-in-out fixed top-0 w-full bg-white z-20"
    :class="state.isScrolling ? 'p-4' : 'p-6'"
  >
    <div class="max-w-6xl mx-auto flex justify-between items-center">
      <img
        src="../../assets/images/profile.jpeg"
        alt="profile"
        class="rounded-full transition-all duration-300 ease-in-out"
        :class="state.isScrolling ? 'w-8 h-8' : 'w-12 h-12'"
      >

      <nav class="flex items-center">
        <ul class="flex items-center">
          <li
            v-for="item in navData"
            :key="item.text"
          >
            <p
              class="cursor-pointer mr-8 font-oxygen text-center transition-all duration-300 hover:text-brand-darkpink"
              v-text="item.text"
              @click="handleScroll(item.text)"
            ></p>
          </li>
        </ul>

        <button
          type="button"
          class="font-oxygen text-center hover:text-brand-darkpink transition-all duration-300"
        >
          Let's talk &#10132;
        </button>
      </nav>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      isScrolling: false
    })

    const handleScrollNav = () => {
      state.isScrolling = window.scrollY !== 0;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScrollNav);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScrollNav);
    });

    const html = {
      get(id) {
        return document.getElementById(id);
      },
    };

    const handleScroll = (id) => {
      const offsetPosition = Math.max(
        0,
        html.get(id).getBoundingClientRect().top - 100
      );

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });
    };

    return {
      state,
      handleScroll
    }
  },
  computed: {
    navData() {
      return this.$site.themeConfig.nav;
    },
  },
};
</script>