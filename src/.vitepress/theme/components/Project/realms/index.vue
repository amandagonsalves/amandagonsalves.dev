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
              <small>Web3</small>
            </li>
            <li>
              <small>Governance</small>
            </li>
          </ul>

          <small>2022</small>
        </div>

        <h2 class="text-brand-graydarker text-1xl text-2xl my-12 font-poppins">What is Realms?</h2>

        <p class="mb-6">
          Realms is a go-to platform for <span class="text-brand-darkpink">decentralized governance</span> on <span class="text-brand-darkpink">Solana</span>. It empowers <span class="text-brand-darkpink">DAOs</span> and communities to manage <span class="text-brand-darkpink">proposals</span>, <span class="text-brand-darkpink">trasury</span>, and <span class="text-brand-darkpink">voting-all</span> in one place. Whether creating or joining a DAO, <span class="text-brand-darkpink">Realms</span> makes the experience <span class="text-brand-darkpink">simpl</span>, <span class="text-brand-darkpink">secure</span>, and <span class="text-brand-darkpink">efficient</span>. I contributed to this project by building <span class="text-brand-darkpink">proposal</span> related features that help <span class="text-brand-darkpink">communities</span> make <span class="text-brand-darkpink">decentralized</span> decisions seamlessly. Check it out: <a class="text-brand-darkpink" href="https://www.realms.today/">realms.today</a>.
        </p>

        <h2 class="text-brand-graydarker text-1xl text-2xl my-12 font-poppins">How was it to participate and develop this project?</h2>

        <p class="mb-6">
					I had the opportunity to work on the Realms project as a <span class="text-brand-darkpink">full-stack software engineer</span>, collaborating with a <span class="text-brand-darkpink">global</span> team of experienced <span class="text-brand-darkpink">Solana</span> professionals to deliver a high-quality product that meets the needs of the <span class="text-brand-darkpink">decentralized governance</span> industry.
        </p>

				<p class="mb-6">
					I was able to contribute by adding <span class="text-brand-darkpink">new features</span> to the platform, such as proposals <span class="text-brand-darkpink"> creation, voting, finalize, cancelling and signing</span>. I worked with <span class="text-brand-darkpink">Next.js</span> and integrated with <span class="text-brand-darkpink">Solana SDK</span>, as well as <span class="text-brand-darkpink">Web3.js</span>.
				</p>

				<p class="mb-6">
					Work on this project with such great developers was an amazing experience. I learned a lot about <span class="text-brand-darkpink">Solana</span>, <span class="text-brand-darkpink">decentralized governance</span>, <span class="text-brand-darkpink">DAOs</span>, and <span class="text-brand-darkpink">Web3</span> technologies.
				</p>

				<p class="mb-6">
					I can say for sure that I’m the engineer I am today - focused on <span class="text-brand-darkpink">support</span> and <span class="text-brand-darkpink">collaboration</span> - because of the <span class="text-brand-darkpink">challenges</span> I faced and the <span class="text-brand-darkpink">lessons</span> I learned while working on this project. Every experience shaped my ability to <span class="text-brand-darkpink">grow</span>, solve problems, and <span class="text-brand-darkpink">care</span> for the <span class="text-brand-darkpink">people</span> I work with.
				</p>
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
