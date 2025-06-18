<template>
   <section class="w-full pt-[3rem] sm:pt-[4rem] md:pt-[4.69rem] pb-[5rem] sm:pb-[7rem] md:pb-[10rem] bg-[#FFFFFF]">
    <div class="w-[90%] sm:w-[85%] md:w-[83.33%] mx-auto max-w-[1440px]">
      <h2 class="header-texts text-[#072042] w-full md:w-[70%] lg:w-[32%] mb-[2rem] sm:mb-[3rem] md:mb-0">
        What Makes Us Different
      </h2>
      <div class="mt-[2rem] sm:mt-[3rem] md:mt-[4.44rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1rem] sm:gap-[1.25rem] md:gap-[1.5rem]">
        <article 
          v-for="mission in missions" 
          :key="mission.id"
          class="border border-[#B5C8E1] rounded-[0.75rem] sm:rounded-[1rem] px-[1rem] sm:px-[1.25rem] md:px-[1.5rem] pt-[1rem] sm:pt-[1.25rem] md:pt-[1.5rem] pb-[2rem] sm:pb-[2.5rem] md:pb-[3rem] hover:shadow-lg transitionEffect"
        >
            <NuxtImg 
              :src="`/images/${mission.imgSrc}`" 
              class="w-[4.5rem] h-[4.5rem] sm:w-[5.5rem] sm:h-[5.5rem] md:w-[6.4rem] md:h-[6.4rem] mb-[1rem] sm:mb-[1.25rem] md:mb-[1.4rem]"
            />
            <div class="text-[#072042]">
                <h4 class="font-MuseoSans font-[600] text-[1.1rem] sm:text-[1.25rem] md:text-[1.38rem] leading-[120%] mb-[0.5rem]">
                  {{ mission.title }}
                </h4>
                <p class="small-texts">
                    {{ mission.descr }}
                </p>
            </div>
        </article>
      </div>
    </div>
   </section>
</template>

<script setup>
const missions = [
    {
        id: 1,
        title: 'Local Insight, Global Thinking',
        descr: 'We understand the various diverse markets, and we combine that with global best practices to build campaigns that resonate.',
        imgSrc: 'about-icon1.svg'
    },
    {
        id: 2,
        title: 'Data-Led, ROI-Focused',
        descr: `We track what matters, optimize constantly, and aim for growth that's real not just likes and impressions.`,
        imgSrc: 'about-icon2.svg'
    },
    {
        id: 3,
        title: 'Startup Mentality',
        descr: `We're lean, fast, and deeply committed to every project. You're not just a client, you're a partner.`,
        imgSrc: 'about-icon3.svg'
    }
];
</script>

<style scoped>
/* Your existing styles */
</style>