<template>
  <section class="w-full py-[3rem] md:py-[6.313rem] bg-[#FFFFFF]">
    <div class="w-[90%] md:w-[83.33%] mx-auto max-w-[1440px]">
      <h2 class="header-texts !text-[1.75rem] md:!text-[2.25rem] text-[#072042] w-full md:w-[44%] text-center md:text-left">
        We're not just another agency. 
        <br>
        We're your strategic growth partner.
      </h2>
      <div class="flex flex-wrap justify-center mt-[2.5rem] md:mt-[5.43rem]">
        <div class="flex flex-wrap justify-center gap-[1rem] md:gap-[1.1rem]">
          <div
            v-for="item in features"
            :key="item.title"
            class="w-full sm:w-[17.63rem] bg-[#114C9E] text-white rounded-[1rem] py-[1rem] px-[1.25rem] md:px-[1.5rem] flex flex-col text-center transform transition-transform duration-300 hover:-translate-y-1"
            :class="item.rotation"
          >
            <!-- Content -->
            <div class="flex flex-col flex-grow items-center mb-[1.5rem] md:mb-[2rem]">
              <h3 class="font-[600] header-texts !text-[1.25rem] md:!text-[1.38rem] text-[#FFFFFF] mb-[0.75rem] md:mb-[1rem] min-h-[3.5rem] flex items-center">
                {{ item.title }}
              </h3>
              <p class="text-[0.875rem] md:text-[1rem] !font-light !text-[#FFFFFF]">
                {{ item.description }}
              </p>
            </div>

            <!-- Icon always at bottom -->
            <div class="w-[5rem] h-[5rem] md:w-[6.4rem] md:h-[6.4rem] bg-white rounded-lg mt-auto mx-auto flex items-center justify-center">
              <NuxtImg 
                :src="`/images/${item.icon}`" 
                class="w-full h-full object-contain" 
                :alt="item.title"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    title: 'Data-Driven Execution',
    description: 'We use analytics, testing, and insights to drive every decision.',
    icon: 'icon1.png',
    rotation: 'sm:rotate-[-3deg]',
  },
  {
    title: 'Diverse Local Market Expertise',
    description: 'We understand the behavior, mindset, and habits of your local audience.',
    icon: 'icon2.png',
    rotation: 'sm:rotate-[6deg]',
  },
  {
    title: 'ROI-Focused Campaigns',
    description: `From awareness to conversion. We don't just market, we move the bottom line.`,
    icon: 'icon3.png',
    rotation: 'sm:rotate-[-6deg]',
  },
  {
    title: 'AI-Enhanced Optimization',
    description: 'Smarter tools. Sharper targeting. Better outcomes.',
    icon: 'icon4.png',
    rotation: 'sm:rotate-[3deg]',
  },
];
</script>

<style>
</style>