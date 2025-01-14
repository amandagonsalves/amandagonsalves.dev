<template>
  <div class="mt-24 bg-gray-100">
    <Header projectRoute />

    <div class="p-2 md:p-8 max-w-4xl mx-auto">
      <div class="px-4 font-poppins py-12">
        <div class="flex justify-start items-end border-b border-gray-200 pb-6">
          <h1 class="text-brand-darkpink text-8xl md:text-6xl font-merienda">{{ title }}</h1>
          <small class="text-gray-400 ml-2 font-bold">{{ description }}</small>
        </div>

				<div
          class="flex justify-between w-full mt-4 items-center font-poppins text-gray-400 font-bold"
        >
          <ul class="flex justify-start items-center gap-8">
						<li>
              <small>Payments Integration</small>
            </li>
						<li>
              <small>Web2</small>
            </li>
            <li>
              <small>Vacation Rental</small>
            </li>
            <li>
              <small>PMS</small>
            </li>
            <li>
              <small>Property Management</small>
            </li>
          </ul>

          <small>2023</small>
        </div>

        <h2 class="text-brand-graydarker text-1xl text-2xl my-12 font-poppins">What is Stays?</h2>

        <p class="mb-6">
          Stays.net is an <span class="text-brand-darkpink">all-in-one</span> vacation rental management platform designed to streamline operations for property managers, hosts, and rental agencies. The system provides a wide range of features that cover the entire lifecycle of property <span class="text-brand-darkpink">management</span>, from reservation handling and multi-channel distribution (integrations with <span class="text-brand-darkpink">AirBnB</span>, <span class="text-brand-darkpink">Booking.com</span>, <span class="text-brand-darkpink">VRBO</span>, and other platforms) to dynamic pricing, calendar synchronization, and communication with guests.
        </p>

        <p class="mb-6">
          In addition to its booking management capabilities, Stays.net includes advanced <span class="text-brand-darkpink">financial</span> tools, such as automated payment processing through multiple <span class="text-brand-darkpink">gateways</span>, detailed financial reports, and revenue tracking. The platform also supports task <span class="text-brand-darkpink">automation</span>, helping users save time by automating routine processes, such as guest notifications and calendar updates.
        </p>

        <p class="mb-6">
          By centralizing operations in a single, <span class="text-brand-darkpink">user-friendly</span> interface, Stays.net empowers businesses to manage multiple properties efficiently, improve guest experience, and optimize their <span class="text-brand-darkpink">revenue</span> strategy through <span class="text-brand-darkpink">data-driven</span> insights and integrations.
        </p>

        <h2 class="text-brand-graydarker text-1xl text-2xl my-12 font-poppins">How was it to participate and develop this project?</h2>

        <p class="mb-6">
          I had the opportunity to work on the Stays.net project as a <span class="text-brand-darkpink">full-stack software engineer</span>, collaborating with a <span class="text-brand-darkpink">global</span> team of experienced professionals to deliver a high-quality product that meets the needs of the vacation rental industry.
        </p>

        <p class="mb-6">
          I focused on the <span class="text-brand-darkpink">backend</span> development of the system and the platform, working with <span class="text-brand-darkpink">Node.js</span>, <span class="text-brand-darkpink">MongoDB</span>, and <span class="text-brand-darkpink">Docker</span> to build scalable and secure solutions that support the system's core functionalities.
        </p>

        <p class="mb-6">
          I mostly worked on the financial aspects of the project, from end to end in both frontend and backend parts. I collaborated with the team to integrate the platform with leading <span class="text-brand-darkpink">payment gateways</span>, such as <span class="text-brand-darkpink">Koin</span>, <span class="text-brand-darkpink">Stripe</span>, <span class="text-brand-darkpink">PayPal</span>, and <span class="text-brand-darkpink">Pagar.me</span>, enabling users to process payments <span class="text-brand-darkpink">securely</span> and <span class="text-brand-darkpink">efficiently</span>. This experience allowed me to deepen my knowledge of <span class="text-brand-darkpink">financial technologies</span> and <span class="text-brand-darkpink">payment processing systems</span>, as well as gain insights into the challenges and opportunities of integrating third-party <span class="text-brand-darkpink">services</span> into a <span class="text-brand-darkpink">complex</span> (really complex, I'd say) software ecosystem.
        </p>

        <p class="mb-6">
          Now I not only have the experience and knowledge about <span class="text-brand-darkpink">blockchain</span> and <span class="text-brand-darkpink">web3 systems</span>, but also <span class="text-brand-darkpink">web2</span>, which allows me to <span class="text-brand-darkpink">navigate between both</span> of the worlds.
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
