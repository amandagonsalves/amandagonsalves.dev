<template>
  <div class="flex">
    <div class="w-full aspect-w-1 aspect-h-1">
      <div>
        <img
          class="w-5/6 h-104 object-center object-cover sm:rounded-lg"
          :src="
            state.selectedImageId > -1 && images[state.selectedImageId]
              ? images[state.selectedImageId].path
              : images[0].path
          "
          :alt="
            images[state.selectedImageId] > -1
              ? images[state.selectedImageId].alt
              : images[0].alt
          "
        />
      </div>
    </div>

    <div class="w-full max-w-2xl mx-auto lg:max-w-none">
      <ul class="grid grid-cols-4 gap-2 auto-rows-auto grid-cols-images" v-if="images">
        <li
          class="
            relative
            h-24
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
          :key="image.path"
          @click="selectImage(index)"
        >
          <span class="sr-only">
            {{ image.alt }}
          </span>
          <span class="absolute inset-0 rounded-md overflow-hidden">
            <img
              :src="image.path"
              :alt="image.alt"
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

    
  </div>
</template>

<script>
import { onMounted } from "vue";
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
      console.log("mounted", props.images);
    });

    let width = 0;
    let height = 0;

    const selectImage = (id) => {
      state.selectedImageId = id;
    };

    const getRandomSize = (min, max) => {
      return Math.round(Math.random() * (max - min) + min);
    }

    for (let index = 0; index <= 10; index++) {
      width = getRandomSize(200, 400);
      height = getRandomSize(200, 400);
    }

    return {
      selectImage,
      state,
      width,
      height
    };
  },
};
</script>
