<template>
  <div
    class="
      w-full
      text-black
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
    <h1 class="text-3xl mb-6 font-merienda">Projects</h1>

    <div class="flex flex-wrap justify-center items-center">
      <div
        class="border border-gray-300 w-80 h-card relative rounded mx-4 my-6 rounded-xl"
        v-for="project in projects"
        :key="project.title"
      >
        <div
          :class="project.background"
          class="w-full h-2/3 flex justify-center items-center text-center rounded-t-xl"
        >
          <img
            :src="project.logo"
            alt="syscoin logo"
            class="w-10/12 h-1/2"
          />
        </div>

        <div class="px-6 flex flex-col">
          <h2 class="mt-6 mb-2 font-oxygen font-bold">{{ project.title }}</h2>
          <p class="font-oxygen text-sm">
            {{ project.description }}
          </p>
          <small class="my-4 font-oxygen">
            {{ project.stack.join(", ") }}
          </small>
          <a href="https://syscoin.org/" target="_blank" class="font-oxygen absolute bottom-4 font-bold hover:text-brand-darkpink transition-all duration-300">
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
