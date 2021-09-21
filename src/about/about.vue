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
        I’m 18 years old and I’m passionate about solving problems and learning,
        especially new technologies, languages and the financial market.
      </p>

      <p class="mb-6 font-poppins">
        I work with React, Vue, TypeScript and CSS preprocessors like SCSS at
        frontend. At backend I have experience with Node and NoSQL (MongoDB)
      </p>

      <p class="mb-6 font-poppins">
        I have experience working on top of the Ethereum ecosystem. Developing
        from the protocol level (with Solidity as the main language, always
        using cutting edge tools to improve the process like Truffle or
        Hardhat).
      </p>

      <p class="mb-6 font-poppins">
        At Dapp level, I use Web3.js with front-end frameworks. I also developed
        an extension wallet (<a class="text-blue-800" href="https://paliwallet.com/" target="_blank" >paliwallet.com</a>) along with the Syscoin blockchain
        during this year, where I have been working on top of the <a href="https://github.com/bitcoinjs/bitcoinjs-lib" target="_blank" class="text-blue-800">bitcoin.js</a> and
        <a href="https://github.com/syscoin/syscoinjs-lib" class="text-blue-800" target="_blank">syscoinjs-lib.js</a> libraries, which is deepening my knowledge of the
        structure of blockchains itself and allowing me to build on top of any
        Bitcoin chain as well.
      </p>

      <p class="mb-6 font-poppins">
        I’m always open to new challenges and ready to learn everything I can to
        do a good job and be better every day.
      </p>
    </div>
  </div>
</template>
