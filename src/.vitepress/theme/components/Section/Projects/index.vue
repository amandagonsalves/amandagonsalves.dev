<template>
  <div
    class="
      w-full
      text-brand-dark
      flex flex-col
      items-center
      bg-white
      h-auto
      p-12
      max-w-6xl
      my-16
      mx-auto
    "
    id="Projects"
  >
    <h2 class="text-3xl mb-6 font-merienda">Projects</h2>

    <div class="flex flex-wrap justify-center items-center">
      <div
        class="shadow-1xl w-80 h-card relative rounded mx-4 my-6 rounded-xl"
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
          <a :href="project.link" target="_blank" class="w-10/12 h-1/2">
            <img :src="project.logo" alt="syscoin logo" />
          </a>
        </div>

        <div class="px-6 flex flex-col cursor-default">
          <h2 class="mt-6 mb-2 font-oxygen font-bold">{{ project.title }}</h2>
          <p class="font-oxygen text-sm">
            {{ project.description }}
          </p>
          <small class="my-4 font-oxygen text-brand-blue font-bold">
            {{ project.stack }}
          </small>
          <a
            :href="project.link"
            target="_blank"
            class="
              font-oxygen
              absolute
              bottom-4
              font-bold
              hover:text-brand-darkpink
              transition-all
              duration-300
            "
          >
            Go to project &#10132;
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projects from "../../../../projects";

export default {
  setup() {
    return {
      projects,
    };
  },
};
</script>
