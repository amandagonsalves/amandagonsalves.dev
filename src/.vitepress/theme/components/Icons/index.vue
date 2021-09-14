<template>
  <div :class="center ? 'justify-center flex items-center gap-4' : 'flex items-center gap-4'">
    <li
      v-for="(name, link) in social"
      :key="name"
      class="list-none flex justify-center items-center"
    >
      <a
        :href="link"
        :class="name === 'LinkedIn' ? 'mt-1' : 'mt-0'"
        target="_blank"
      >
        <Icon
          :name="name"
          size="22"
          :currentColor="isDarkBackground ? 'white' : 'black'"
        />
      </a>
    </li>
  </div>
</template>

<script>
import Icon from "../Icon/index.vue";

export default {
  props: {
    isDarkBackground: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      required: false,
    }
  },
  components: {
    Icon,
  },
  setup() {
    const social = {
      "https://github.com/amandagonsalves": "Github",
      "https://www.linkedin.com/in/amanda-gonsalves-a2785a187/": "LinkedIn",
      "mailto:amandagonsalves75@gmail.com": "Email",
    };

    return {
      social,
    };
  },
};
</script>
