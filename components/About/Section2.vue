<template>
   <section class="w-full pt-[4.69rem] pb-[10rem] bg-[#FFFFFF]">
    <div class="w-[83.33%] mx-auto max-w-[1440px]">
      <h2 class="header-texts text-[#072042] w-[32%]">What Makes Us Different</h2>
      <div class="mt-[4.44rem] grid grid-cols-1 md:grid-cols-3 gap-[1.5rem]">
        <article 
          v-for="mission in missions" 
          :key="mission.id"
          class="border border-[#B5C8E1] rounded-[1rem] px-[1.5rem] pt-[1.5rem] pb-[3rem]"
        >
            <NuxtImg 
              :src="`/images/${mission.imgSrc}`" 
              class="w-[6.4rem] h-[6.4rem] mb-[1.4rem]"
            />
            <div class="text-[#072042]">
                <h4 class="header-texts text-[1.38rem] mb-[0.5rem]">{{ mission.title }}</h4>
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