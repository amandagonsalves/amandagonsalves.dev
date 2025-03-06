import '../../public/assets/css/tailwind.css';
import '../../public/assets/css/fonts.css';
import Layout from './Layout.vue';
import Header from './components/Header/index.vue';
import About from '../../about/about.vue';
import Projects from '../../projects/projects.vue';
import Contact from '../../contact/contact.vue';
import Footer from './components/Footer/index.vue';
import NotFound from './NotFound.vue';
import Home from '../../home/home.vue';

export default {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    app.component('Header', Header),
    app.component('Home', Home),
    app.component('About', About),
    app.component('Projects', Projects),
    app.component('Contact', Contact),
    app.component('Footer', Footer)
  }
}