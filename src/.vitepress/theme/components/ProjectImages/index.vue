<template>
  <div class="flex md:flex-row flex-col gap-6">
    <div class="w-full max-w-2xl mx-auto lg:max-w-none">
      <ul
        class="grid grid-cols-4 gap-2 auto-rows-auto grid-cols-images gallery"
        v-if="images"
      >
        <li
          class="
            relative
            h-40
            bg-white
            rounded-md
            flex
            items-center
            justify-center
            text-sm
            font-medium
            uppercase
            text-gray-900
            cursor-pointer
            hover:bg-gray-50
            focus:outline-none
            focus:ring focus:ring-offset-4 focus:ring-opacity-50
          "
          v-for="(image, index) of images"
          :key="image"
          @click="selectImage(index)"
        >
          <span class="sr-only"> project image </span>
          <span class="absolute inset-0 rounded-md overflow-hidden">
            <img
              :src="image"
              alt="project image"
              class="w-full h-full object-center object-cover"
            />
          </span>
          <span
            :class="[
              state.selectedImageId === index
                ? 'ring-brand-darkpink'
                : 'ring-transparent',
              'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none',
            ]"
            aria-hidden="true"
          />
        </li>
      </ul>
    </div>

    <div class="relative w-full aspect-w-1 aspect-h-1 rounded" v-if="images[state.selectedImageId]">
      <div>
        <svg @click="previous" :class="{'hidden': state.selectedImageId === 0}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff4d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="select-none cursor-pointer absolute top-1/2 left-0 transform rotate-180 h-16 feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
        <img
          class=" w-full h-104 object-center object-cover rounded-lg"
          :src="
            state.selectedImageId > -1 && images[state.selectedImageId]
              ? images[state.selectedImageId]
              : images[0]
          "
          alt="project image"
        />
         <svg @click="next" :class="{'hidden': state.selectedImageId === images.length - 1}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff4d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="select-none cursor-pointer absolute top-1/2 right-2 h-16 feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import { state } from "../../store";

export default {
  props: {
    images: {
      type: Array,
      required: true,
      default: [],
    },
  },
  setup(props) {
    onMounted(() => {
      state.selectedImageId = props.images.length - 1;
      console.log("mounted", props.images);
    });

    const selectImage = (id) => {
      state.selectedImageId = id;
    };

    const previous = () => {
      if (state.selectedImageId === 0) {
        state.selectedImageId = 0;

        return;
      }

      state.selectedImageId = state.selectedImageId - 1;

      console.log('current id', state.selectedImageId)
    }

    const next = () => {
      if (props.images.length - 1 === state.selectedImageId) {
        state.selectedImageId = props.images.length - 1;

        return;
      }

      state.selectedImageId = state.selectedImageId + 1;

      console.log('current id', state.selectedImageId)
    }

    return {
      selectImage,
      state,
      next,
      previous
    };
  },
};
</script>
