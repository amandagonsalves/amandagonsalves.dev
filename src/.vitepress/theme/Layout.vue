<template>
  <div>
    <Header />
    <Home />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header/index.vue';
import Home from './components/Section/Home/index.vue';
import About from './components/Section/About/index.vue';
import Projects from './components/Section/Projects/index.vue';
import Contact from './components/Section/Contact/index.vue';
import Footer from './components/Footer/index.vue';

export default {
  components: {
    Header,
    Home,
    About,
    Projects,
    Contact,
    Footer
  },
};
</script>