<template>
  <div
    class="
      transition-all
      duration-300
      ease-in-out
      flex flex-col
      justify-center
      items-center
    "
  >
    <ul v-if="images" class="flex justify-center items-center gap-4 max-w-4xl">
      <li
        v-for="(image, index) of images"
        :key="image"
        @click="selectImage(index)"
      >
        <img
          :src="image"
          alt="project image"
          :class="[
            state.selectedImageId === index
              ? 'border-2 border-brand-darkpink'
              : 'border-2 border-brand-darktransparent ',
          ]"
          class="w-full h-full rounded-md cursor-pointer"
        />
      </li>
    </ul>

    <div
      v-if="state.selectedImageId > -1"
      :class="menuClasses"
      class="
        fixed
        inset-y-1/5
        transition-all
        duration-300
        transform
        origin-top-right
        h-4/5
      "
    >
      <div class="relative h-full w-30 p- bg-gray-100 shadow-lg rounded-md flex justify-center items-center">
        <svg
          @click="previous"
          :class="{ hidden: state.selectedImageId === 0 }"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e94560"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="
            select-none
            cursor-pointer
            absolute
            top-1/2
            left-0
            transform
            rotate-180
            h-16
            feather feather-chevron-right
          "
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>

        <img
          class="h-full rounded-md"
          :src="images[state.selectedImageId]"
          alt="img"
        />

        <svg
          @click="next"
          :class="{ hidden: state.selectedImageId === images.length - 1 }"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e94560"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="
            select-none
            cursor-pointer
            absolute
            top-1/2
            right-2
            h-16
            feather feather-chevron-right
          "
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
    </div>

    <!-- <div class="w-full max-w-2xl mx-auto lg:max-w-none">
      <ul class="flex justify-around item-center gap-4" v-if="images">
        <li
          class="
            my-4
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
          <span class="rounded-md overflow-hidden">
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
    </div> -->

    <!-- <div
      class="w-full aspect-w-1 aspect-h-1 rounded rounded"
      v-if="images[state.selectedImageId]"
    >
      <div>
        <svg
          @click="previous"
          :class="{ hidden: state.selectedImageId === 0 }"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff4d"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="
            select-none
            cursor-pointer
            absolute
            top-1/2
            left-0
            transform
            rotate-180
            h-16
            feather feather-chevron-right
          "
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
        <img
          class="w-full h-104 object-center object-cover rounded-lg"
          :src="
            state.selectedImageId > -1 && images[state.selectedImageId]
              ? images[state.selectedImageId]
              : images[0]
          "
          alt="project image"
        />
        <svg
          @click="next"
          :class="{ hidden: state.selectedImageId === images.length - 1 }"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff4d"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="
            select-none
            cursor-pointer
            absolute
            top-1/2
            right-2
            h-16
            feather feather-chevron-right
          "
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
    </div> -->
  </div>
</template>

<script>
import { onMounted } from "vue";
import { state } from "../../store";
import Modal from "../Modal/index.vue";

export default {
  components: {
    Modal,
  },
  props: {
    images: {
      type: Array,
      required: true,
      default: [],
    },
  },
  computed: {
    menuClasses() {
      return this.images[this.state.selectedImageId]
        ? ["opacity-1", "scale-100", "duration-200", "ease-out"]
        : ["opacity-0 scale-95 duration-100 ease-in pointer-events-none"];
    },
  },
  setup(props) {
    onMounted(() => {
      state.selectedImageId = -1;
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
    };

    const next = () => {
      if (props.images.length - 1 === state.selectedImageId) {
        state.selectedImageId = props.images.length - 1;

        return;
      }

      state.selectedImageId = state.selectedImageId + 1;
    };

    return {
      selectImage,
      state,
      next,
      previous,
    };
  },
};
</script>
