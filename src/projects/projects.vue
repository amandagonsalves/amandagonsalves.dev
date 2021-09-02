<template>
  <div
    class="
      w-full
      text-brand-dark
      flex flex-col
      items-center
      h-auto
      p-12
      max-w-6xl
      my-16
      mx-auto
      transition-all
      duration-300
      ease-in-out
    "
    id="Projects"
  >
    <h2 class="text-3xl mb-6 font-merienda">Projects</h2>

    <div class="flex flex-wrap justify-center items-center gap-12">
      <div
        class="shadow-1xl h-card rounded mx-4 my-6 rounded-xl w-80 md:w-96"
        v-for="project in projects"
        :key="project.title"
      >
        <div
          :class="project.background"
          class="
            w-full
            h-2/3
            flex
            justify-center
            items-center
            text-center
            rounded-t-xl
          "
        >
          <img :src="project.logo" alt="syscoin logo" class="w-9/12 h-3/5" />
        </div>

        <div class="px-6 flex flex-col cursor-default font-poppins">
          <h2 class="mt-6 mb-2 font-bold text-brand-graydarker">
            {{ project.title }}
          </h2>

          <p class="font-poppins text-sm text-gray-500 truncate">
            {{ project.description }}
          </p>

          <small class="my-4 text-brand-blue font-bold">
            {{ project.stack }}
          </small>

          <div
            class="
              flex
              items-center
              justify-between
              w-full
              text-brand-graydarker
            "
          >
            <a
              :href="project.url"
              class="
                cursor-pointer
                font-bold
                hover:text-brand-darkpink
                transition-all
                duration-300
              "
            >
              Go to project &#10140;
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "../.vitepress/theme/components/Icon/index.vue";
import projects from "../.vitepress/projects";
import { format } from '../utils/helpers';

export default {
  components: {
    Icon,
  },
  setup() {
    return {
      projects,
      format
    };
  },
};
</script>
