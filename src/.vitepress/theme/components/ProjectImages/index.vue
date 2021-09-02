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
    <ul
      v-if="images"
      class="
        grid grid-cols-3
        sm:grid-cols-4
        md:grid-cols-9
        justify-center
        items-center
        gap-4
        max-w-4xl
      "
    >
      <li
        v-for="(image, index) of images"
        :key="image"
        @click="selectImage(index)"
        class=""
      >
        <img
          :src="image"
          alt="project image"
          :class="[
            state.selectedImageId === index
              ? 'border-2 border-brand-darkpink'
              : 'border-2 border-brand-darktransparent ',
          ]"
          class="w-full h-1/3 md:h-32 rounded-md cursor-pointer"
        />
      </li>
    </ul>

    <div
      v-if="state.selectedImageId > -1"
      :class="menuClasses"
      class="
        fixed
        inset-y-1/5
        md:inset-y-1/6
        transition-all
        duration-300
        transform
        origin-top-right
        h-4/5
        bg-brand-bluetransparent
        z-20
        w-30
      "
    >
      <div
        class="
          relative
          h-full
          shadow-lg
          rounded-md
          flex
          justify-center
          items-center
        "
      >
        <button
          type="button"
          @click="state.selectedImageId = -1"
          class="
            absolute
            top-4
            right-4
            bg-brand-bluetransparent
            rounded-md
            p-2
            inline-flex
            items-center
            justify-center
            text-gray-400
            hover:text-gray-500
            hover:bg-gray-300
            focus:outline-none
            transition-all
            duration-300
          "
        >
          <span class="sr-only">Close menu</span>
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <svg
          @click="previous"
          :class="[state.selectedImageId === 0 && 'hidden']"
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
            left-16
            sm:left-0
            transform
            rotate-180
            h-12
            md:h-16
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
          :class="[state.selectedImageId === images.length - 1 && 'hidden']"
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
            right-16
            sm:right-2
            h-12
            md:h-16
            feather feather-chevron-right
          "
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>

      <ul
        v-if="images"
        class="p-4 hidden md:flex justify-center items-center gap-4 max-w-4xl"
      >
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
            class="w-12 h-12 rounded-md cursor-pointer"
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
