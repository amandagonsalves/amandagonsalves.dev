<template>
  <div class="bg-white p-4">
    <img :src="currentImage" alt="project image">
  </div>
</template>

<script>
export default {
  props: {
    currentImage: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>