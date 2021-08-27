module.exports = {
  title: 'Amanda Gonsalves | Web Developer',
  description: 'My name is Amanda, I\'m from Florianópolis - Brazil and I\'m a self-taught web developer :)',
  themeConfig: {
    nav: [
      { text: 'Home' },
      { text: 'About' },
      { text: 'Projects' },
      { text: 'Contact' },
    ],
  },
  head: [
    ['link', { rel: 'canonical', href: 'https://amandagonsalves.dev' }],
    ['link', { rel: 'stylesheet', href:"https://unpkg.com/vueperslides/dist/vueperslides.css" }],
    ['script', { src: 'https://unpkg.com/vueperslides' }],
    ['script', { src: 'https://unpkg.com/vue' }]
  ]
}