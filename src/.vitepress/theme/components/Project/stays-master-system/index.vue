<template>
  <div class="mt-24 bg-gray-100">
    <Header projectRoute />

    <div class="p-2 md:p-8 max-w-4xl mx-auto">
      <div class="px-4 font-poppins py-12">
        <div class="flex justify-start items-end border-b border-gray-200 pb-6">
          <h1 class="text-brand-darkpink text-8xl md:text-6xl font-merienda">{{ title }}</h1>
          <small class="text-gray-400 ml-2 font-bold">{{ description }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../Header/index.vue";
import Contact from "../../../../../contact/contact.vue";
import Footer from "../../Footer/index.vue";

export default {
  components: {
    Header,
    Contact,
    Footer,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>
