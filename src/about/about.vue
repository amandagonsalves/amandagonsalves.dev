<template>
  <div
    class="
      w-full
      text-brand-dark
      flex
      md:flex-row
      flex-col
      items-center
      bg-brand-primary
      h-auto
      md:p-12
      pt-8
      pb-4
      max-w-6xl
      my-16
      mx-auto
    "
    id="About"
  >
    <div class="w-1/2 flex justify-center items-center">
      <img
        src="/assets/images/profile.jpeg"
        alt="profile"
        class="rounded-full w-1/2"
      />
    </div>

    <div class="w-full md:w-1/2 px-8 md:px-0">
      <h2
        class="
          text-3xl
          mb-6
          font-merienda
          md:text-left
          text-center
          mt-4
          md:mt-0
        "
      >
        About
      </h2>

      <p class="mb-6 font-poppins">
        I'm 18 years old, I like everything about technology, especially
        programming. I also like to study new languages and the financial
        market.
      </p>

      <p class="mb-6 font-poppins">
        At frontend I work with React, Vue and TypeScript. I do make use of CSS
        preprocessors like SCSS.
      </p>

      <p class="mb-6 font-poppins">
        At backend I have experience with Node (Express), relational databases
        (MySQL) and NoSQL (MongoDB).
      </p>
    </div>
  </div>
</template>
