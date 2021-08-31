<template>
  <div
    class="
      transition-all
      duration-300
      ease-in-out
      fixed
      top-0
      w-full
      bg-white
    "
    :class="state.isScrolling ? 'p-4' : 'p-6'"
  >
    <div class="max-w-6xl mx-auto flex justify-between items-center">
      <img
        src="/assets/images/profile.jpeg"
        alt="profile"
        class="rounded-full transition-all duration-300 ease-in-out"
        :class="state.isScrolling ? 'w-8 h-8' : 'w-12 h-12'"
      />

      <div class="md:hidden block">
        <button
          type="button"
          @click="state.menuOpen = true"
          class="outline-none"
        >
          <span class="sr-only">Open menu</span>
          <img
            src="/assets/icons/menu.png"
            alt="menu icon"
            class="transition-all duration-300 md:hidden"
            :class="state.isScrolling ? 'w-6 h-6' : 'w-8 h-8'"
          />
        </button>
      </div>

      <nav class="md:flex items-center hidden">
        <ul v-if="!projectRoute" class="flex items-center">
          <li v-for="item in navData" :key="item.text">
            <p
              class="
                cursor-pointer
                mr-8
                font-poppins
                text-center
                transition-all
                duration-300
                hover:text-brand-darkpink
              "
              v-text="item.text"
              @click="handleScroll(item.text)"
            ></p>
          </li>
        </ul>

        <ul v-if="projectRoute" class="flex items-center">
          <li>
            <a
              href="/"
              class="
                cursor-pointer
                mr-8
                font-poppins
                text-center
                transition-all
                duration-300
                hover:text-brand-darkpink
              "
            >
              Go home
            </a>
          </li>
        </ul>

        <a
          href="mailto:amandagonsalves75@gmail.com"
          class="
            font-poppins
            text-center
            hover:text-brand-darkpink
            transition-all
            duration-300
          "
        >
          Let's talk &#10132;
        </a>
      </nav>

      <div
        :class="menuClasses"
        class="
          absolute
          transition-all
          duration-300
          top-0
          inset-x-0
          transform
          origin-top-right
          md:hidden
        "
      >
        <div class="shadow-lg bg-white">
          <div class="pt-5 pb-6 px-5">
            <button
              type="button"
              @click="state.menuOpen = false"
              class="
                absolute
                top-4
                right-4
                bg-white
                rounded-md
                p-2
                inline-flex
                items-center
                justify-center
                text-gray-400
                hover:text-gray-500
                hover:bg-gray-100
                focus:outline-none
              "
            >
              <span class="sr-only">Close menu</span>
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div class="text-center">
              <ul v-if="!projectRoute" class="flex flex-col items-center">
                <li v-for="item in navData" :key="item.text">
                  <p
                    class="
                      cursor-pointer
                      my-2
                      font-poppins
                      text-center
                      transition-all
                      duration-300
                      hover:text-brand-darkpink
                    "
                    v-text="item.text"
                    @click="handleScroll(item.text)"
                  ></p>
                </li>
              </ul>

              <ul v-if="projectRoute" class="flex items-center justify-center">
                <li>
                  <a
                    href="/"
                    class="
                      cursor-pointer
                      font-poppins
                      text-center
                      transition-all
                      duration-300
                      hover:text-brand-darkpink
                      text-center
                    "
                  >
                    Go home
                  </a>
                </li>
              </ul>

              <a
                href="mailto:amandagonsalves75@gmail.com"
                class="
                  font-poppins
                  text-center
                  hover:text-brand-darkpink
                  transition-all
                  duration-300
                "
              >
                Let's talk &#10132;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from "vue";
import { state } from "../../store";

export default {
  props: {
    projectRoute: {
      type: Boolean,
      required: false,
    },
  },
  setup() {
    const handleScrollNav = () => {
      state.isScrolling = window.scrollY !== 0;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScrollNav);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScrollNav);
    });

    const html = {
      get(id) {
        return document.getElementById(id);
      },
    };

    const handleScroll = (id) => {
      state.menuOpen = false;

      const bodyRect = document.body.getBoundingClientRect();
      const elemRect = html.get(id).getBoundingClientRect();
      const offset = elemRect.top - bodyRect.top;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    };

    return {
      state,
      handleScroll,
    };
  },
  computed: {
    navData() {
      return this.$site.themeConfig.nav;
    },
    menuClasses() {
      return this.state.menuOpen
        ? ["opacity-1", "scale-100", "duration-200", "ease-out"]
        : ["opacity-0 scale-95 duration-100 ease-in pointer-events-none"];
    },
  },
};
</script>