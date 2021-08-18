<template>
  <h1 class="text-gray-500 font-poppins font-bold text-5xl text-center">{{ title }}</h1>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>