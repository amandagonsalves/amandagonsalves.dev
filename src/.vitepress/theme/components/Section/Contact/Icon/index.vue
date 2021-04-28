<template>
  <component :is="name" v-bind="$props" />
</template>

<script>
import Github from './Github.vue';
import LinkedIn from './LinkedIn.vue';
import Email from './Email.vue';

export default {
  props: {
    name: { type: String, required: true },
  },
  components: {
    Github,
    LinkedIn,
    Email,
  }
}
</script>