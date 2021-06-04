<template>
  <component :is="name" v-bind="$props" />
</template>

<script>
import Github from './Github.vue';
import LinkedIn from './LinkedIn.vue';
import Email from './Mail.vue';
import Instagram from './Instagram.vue';

export default {
  props: {
    name: { type: String, required: true },
  },
  components: {
    Github,
    LinkedIn,
    Email,
    Instagram
  }
}
</script>