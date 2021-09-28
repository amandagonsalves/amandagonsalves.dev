<template>
  <div class="mt-24 bg-gray-100">
    <Header projectRoute />

    <div class="p-2 md:p-8 max-w-4xl mx-auto">
      <div class="px-4 font-poppins py-12">
        <div class="flex justify-start items-end border-b border-gray-200 pb-6">
          <h1 class="text-brand-darkpink text-5xl md:text-6xl font-merienda">
            {{ title }}
          </h1>
          <small class="text-gray-400 ml-2 font-bold">{{ description }}</small>
        </div>

        <div
          class="
            flex
            justify-between
            w-full
            mt-4
            items-center
            font-poppins
            text-gray-400
            font-bold
          "
        >
          <ul class="flex justify-start items-center gap-8">
            <li>
              <small>Blockchain</small>
            </li>
            <li>
              <small>DeFi</small>
            </li>
            <li>
              <small>Software development</small>
            </li>
          </ul>

          <small>2021</small>
        </div>

        <h2 class="text-brand-graydarker text-1xl text-2xl my-12 font-poppins">
          What is Pali Wallet?
        </h2>

        <p>
          Pali Wallet is a
          <span class="text-brand-darkpink">browser extension</span> developed by <a target="_blank" href="https://pollum.io/" class="text-brand-darkpink">Pollum Labs</a> that can
          interact with distributed applications accessing Syscoin blockchain
          directly from your browser. <br /><br />
          Using syscoinjs-lib, the Syscoin dApps can read all the data available
          from the <span class="text-brand-darkpink">blockchain</span> while
          Pali Wallet provides a
          <span class="text-brand-darkpink">secure interface</span> to review
          transactions before writing to the blockchain. <br /><br />
          With Pali Wallet you can create and manage accounts using your
          <span class="text-brand-darkpink">private keys</span> and a local
          client wallet, also supporting
          <span class="text-brand-darkpink">Trezor</span> hardware wallets.
          <br /><br />
          You also have access to
          <span class="text-brand-darkpink">Syscoin Platform Tokens </span
          >(SPT’s),
          <span class="text-brand-darkpink">dApps </span>(Decentralized
          applications),
          <span class="text-brand-darkpink">Non-Fungible Tokens </span> (NFT’s)
          and all Syscoin-Core interfaces. <br /><br />
        </p>

        <img
          src="/assets/images/projects/pali-wallet/mockupstart.png"
          alt="mockup"
          class="w-full my-4 sm:my-12"
        />

        <h2 class="text-brand-graydarker text-2xl my-12 font-poppins">
          How was it to participate and develop this project?
        </h2>

        <p>
          I started to learn about blockchain and cryptocurrencies when I got my
          first job in a
          <span class="text-brand-darkpink">crypto market</span> startup based
          in Florianópolis called Pollum, to help me to understand the project.
          <br /><br />
          I always had this desire to learn everything I can to do a good job
          and be better every day, so I started to learn about the crypto
          market, blockchain, <span class="text-brand-darkpink">Ethereum</span>,
          <span class="text-brand-darkpink">Bitcoin</span>,
          <span class="text-brand-darkpink">dApps</span> and
          <span class="text-brand-darkpink">smart contracts development</span>
          while developing this project for
          <span class="text-brand-darkpink">SYS blockchain</span>. <br /><br />
          Pali Wallet was developed using
          <span class="text-brand-darkpink">React</span>,
          <span class="text-brand-darkpink">TypeScript</span> and
          <span class="text-brand-darkpink">Redux</span>, so of course I also
          learned a lot about this stack and I’ve been improving my coding
          skills every day. <br /><br />
          All of this also motivated me to learn how to develop smart contracts
          using <span class="text-brand-darkpink">Solidity</span> and dApps
          using <span class="text-brand-darkpink">Web3</span> to become a
          blockchain developer. <br /><br />
          There were some really good
          <span class="text-brand-darkpink">challenges</span> that helped me to
          improve my skills, like when the project started and I learned how a
          browser extension works, about the communication between the browser
          contexts (like how can a web page send its data to a browser
          extension, get a response and execute something after this? How does
          this communication work?) and the logic that you need to create to put
          all these things to work together with a good
          <span class="text-brand-darkpink">performance</span>,
          <span class="text-brand-darkpink">appearance</span>,
          <span class="text-brand-darkpink">accessibility</span> and
          <span class="text-brand-darkpink">security</span> for the user
          data.<br /><br />
          You can see this project
          <a :href="link" target="_blank" class="text-blue-500">here</a> and also <a class="text-blue-500" href="https://github.com/syscoin/pali_wallet" target="_blank">check Pali code on GitHub</a>.
        </p>

        <img
          src="/assets/images/projects/pali-wallet/mockup2.png"
          alt="mockup"
          class="w-full my-4 sm:my-8"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../Header/index.vue";
import Contact from "../../../../../contact/contact.vue";
import Footer from "../../Footer/index.vue";

export default {
  components: {
    Header,
    Contact,
    Footer,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>