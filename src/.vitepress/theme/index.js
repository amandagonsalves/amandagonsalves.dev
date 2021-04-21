import './assets/css/tailwind.css';
import './assets/css/fonts.css';
import Layout from './Layout.vue';
import About from './components/About/index.vue';

export default {
  Layout,
  enhanceApp({ app }) {
    app.component('About', About)
  }
}