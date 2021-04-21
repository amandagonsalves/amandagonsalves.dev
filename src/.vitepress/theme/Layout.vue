<template>
  <div>
    <Header />
    <About />
    <Projects />
  </div>
</template>

<script>
import Header from "./components/Header/index.vue";
import About from "./components/About/index.vue";
import Projects from "./components/Projects/index.vue";

export default {
  components: {
    Header,
    About,
    Projects
  },
};
</script>