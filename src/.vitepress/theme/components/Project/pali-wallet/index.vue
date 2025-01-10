<template>
  <div class="mt-24 bg-gray-100">
    <Header projectRoute />

    <div class="p-2 md:p-8 max-w-4xl mx-auto">
      <div class="px-4 font-poppins py-12">
        <div class="flex justify-start items-end border-b border-gray-200 pb-6">
          <h1 class="text-brand-darkpink text-5xl md:text-6xl font-merienda">{{ title }}</h1>
          <small class="text-gray-400 ml-2 font-bold">{{ description }}</small>
        </div>

        <div
          class="flex justify-between w-full mt-4 items-center font-poppins text-gray-400 font-bold"
        >
          <ul class="flex justify-start items-center gap-8">
            <li>
              <small>Blockchain</small>
            </li>
            <li>
              <small>DeFi</small>
            </li>
            <li>
              <small>Software Engineering</small>
            </li>
          </ul>

          <small>2021</small>
        </div>

        <h2 class="text-brand-graydarker text-1xl text-2xl my-12 font-poppins">What is Pali Wallet?</h2>

        <p>
          Pali Wallet is a <span class="text-brand-darkpink">browser extension</span> that enables you to <span class="text-brand-darkpink">securely</span> store, send, and receive SYS cryptocurrency, as well as any tokens built on the Syscoin Token Platform including <span class="text-brand-darkpink">NFTs and fungibles</span>. It also supports <span class="text-brand-darkpink">Trezor™</span> hardware wallets. <br /><br />

          Pali Wallet provides you with a secret <span class="text-brand-darkpink">12-word recovery phrase</span> which makes it easy for you to restore your wallet. Remember, don’t forget your phrase, and keep it safe and secret. <br /><br />

          This <span class="text-brand-darkpink">non-custodial web 3.0 wallet</span> enables you to interact with <span class="text-brand-darkpink">Syscoin dapps</span> in a secure way. It provides you the ability to authenticate and sign transactions without exposing your <span class="text-brand-darkpink">private keys</span>. Your keys are kept secure in the extension’s storage area and are <span class="text-brand-darkpink">encrypted</span> with a password. <br /><br />

          This <span class="text-brand-darkpink">crypto wallet extension</span> requires and requests your express permission in order to interact with any webpage or dapp you visit, because it adds new functionality to the normal browser context. <br /><br />

          Pali Wallet provides <span class="text-brand-darkpink">dapp developers</span> with a simple API that makes it easy to integrate solutions with the Syscoin blockchain through the extension. The API guide is available <a target="_blank" href="https://docs.paliwallet.com/guide/" class="text-brand-darkpink">here</a>.<br /><br />

          Pali Wallet is <span class="text-brand-darkpink">open source</span>. The source code was created to be compatible (more or less) with any <span class="text-brand-darkpink">Bitcoin based blockchain</span>. Any skilled developer can fork and adapt it to work with <span class="text-brand-darkpink">BTC or similar coins</span> with relatively minor refactoring in most cases. The source code is available <a class="text-brand-darkpink" target="_blank" href="https://github.com/syscoin/pali-wallet">here</a>. <br /><br />
          
          <span class="text-brand-darkpink">Support for Ethereum and Ethereum based blockchains</span> is expected in the next major release of Pali Wallet. <br /><br />

          Source code and security were externally <span class="text-brand-darkpink">audited</span> before this extension was released. The audit report is public and can be reviewed <a class="text-brand-darkpink" target="_blank" href="https://github.com/syscoin/pali-wallet/tree/master/extension/audit/CYREX_AUDIT_27_09_2021">here</a>. <br /><br />
          
          Pali Wallet was developed by <span class="text-brand-darkpink">Pollum Labs</span> in cooperation with <span class="text-brand-darkpink">Syscoin Foundation</span>. <br /><br />

          <a target="_blank" class="text-blue-500" href="https://chrome.google.com/webstore/detail/pali-wallet/mgffkfbidihjpoaomajlbgchddlicgpn">Download Pali Wallet</a>.
        </p>

        <img
          src="/assets/images/projects/pali-wallet/mockupstart.png"
          alt="mockup"
          class="w-full my-4 sm:my-12"
        />

        <h2
          class="text-brand-graydarker text-2xl my-12 font-poppins"
        >How was it to participate and develop this project?</h2>

        <p>
          I always had this desire to learn everything I can to do a good job
          and be better every day, so I started to learn about the crypto
          market, blockchain,
          <span class="text-brand-darkpink">Ethereum</span>,
          <span class="text-brand-darkpink">Bitcoin</span>,
          <span class="text-brand-darkpink">dApps</span> and
          <span class="text-brand-darkpink">smart contracts development</span>
          while developing this project for
          <span
            class="text-brand-darkpink"
          >SYS blockchain</span>.
          <br />
          <br />Pali Wallet was developed using
          <span class="text-brand-darkpink">React</span>,
          <span class="text-brand-darkpink">TypeScript</span> and
          <span class="text-brand-darkpink">Redux</span>, so of course I also
          learned a lot about this stack and I’ve been improving my coding
          skills every day.
          <br />
          <br />All of this also motivated me to learn how to develop smart contracts
          using
          <span class="text-brand-darkpink">Solidity</span> and dApps
          using
          <span class="text-brand-darkpink">Web3</span> to become a
          blockchain developer.
          <br />
          <br />There were some really good
          <span class="text-brand-darkpink">challenges</span> that helped me to
          improve my skills, like when the project started and I learned how a
          browser extension works, about the communication between the browser
          contexts (like how can a web page send its data to a browser
          extension, get a response and execute something after this? How does
          this communication work?) and the logic that you need to create to put
          all these things to work together with a good
          <span
            class="text-brand-darkpink"
          >performance</span>,
          <span class="text-brand-darkpink">appearance</span>,
          <span class="text-brand-darkpink">accessibility</span> and
          <span class="text-brand-darkpink">security</span> for the user
          data.
          <br />
          <br />Pali also was announced on a Brazilian crypto news outlet.
          <a
            class="text-brand-darkpink"
            href="https://cointimes.com.br/empresa-brasileira-lanca-primeira-carteira-web3-para-bitcoin/"
          >Check it out</a>.
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
