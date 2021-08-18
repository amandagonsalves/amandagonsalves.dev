---
inject: true
to: src/.vitepress/projects.js
after: export default
---
{
  url: '/project/<%= h.lowerAndDash(title) %>/',
  title: '<%= h.inflection.titleize(title) %>',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  stack: '<%= h.lowerCase(stack) %>',
  link: '<%= h.lowerCase(link) %>',
  logo: '<%= h.lowerCase(logo) %>',
  background: 'bg-brand-gray',
  color: 'text-white',
},