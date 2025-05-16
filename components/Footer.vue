<template>
  <section class="w-full pt-[2rem] sm:pt-[3rem] md:pt-[3.69rem] pb-[3rem] sm:pb-[5rem] md:pb-[6.41rem] relative bg-[linear-gradient(to_bottom,_#FFFFFF,_#f4f5fee6,_#92add2cc,_#114c9e99)]">
    <div class="w-[90%] sm:w-[85%] md:w-[83.33%] mx-auto max-w-[1440px]">
      <div class="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-[1.5rem]">
        <div class="flex flex-col items-center sm:items-start">
          <ul class="flex flex-wrap justify-center sm:justify-start gap-[1rem] sm:gap-[1.5rem] mb-[1rem] sm:mb-[1.5rem]">
            <li class="text-[#072042] font-MuseoSans font-[300] text-[0.875rem] sm:text-[1rem] leading-[160%] capitalize hover:underline">
              <nuxt-link to="/Services">services</nuxt-link>
            </li>
            <li class="text-[#072042] font-MuseoSans font-[300] text-[0.875rem] sm:text-[1rem] leading-[160%] capitalize hover:underline">
              <nuxt-link to="/About">about</nuxt-link>
            </li>
            <li class="text-[#072042] font-MuseoSans font-[300] text-[0.875rem] sm:text-[1rem] leading-[160%] capitalize hover:underline">
              case studies
            </li>
            <li class="text-[#072042] font-MuseoSans font-[300] text-[0.875rem] sm:text-[1rem] leading-[160%] capitalize hover:underline">
              blog
            </li>
          </ul>
          <p class="text-[#072042] font-MuseoSans font-[300] text-[0.875rem] sm:text-[1rem] leading-[160%]">
            © Copyright 2025 Veriscope
          </p>
        </div>
        <div class="flex gap-[1rem] sm:gap-[1.5rem] md:gap-[2rem]">
          <NuxtImg src="/icons/whatsapp.svg" class="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] hover:opacity-80 transition-opacity" />
          <NuxtImg src="/icons/facebook.svg" class="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] hover:opacity-80 transition-opacity" />
          <NuxtImg src="/icons/instagram.svg" class="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] hover:opacity-80 transition-opacity" />
          <NuxtImg src="/icons/x.svg" class="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] hover:opacity-80 transition-opacity" />
          <NuxtImg src="/icons/linkedin.svg" class="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] hover:opacity-80 transition-opacity" />
        </div>
      </div>
      <div class="mt-[5rem] sm:mt-[7rem] md:mt-[10rem]">
        <NuxtImg src="/images/logo.svg" class="w-[120px] sm:w-[150px] md:w-[180px] mx-auto" />
      </div>
    </div>
  </section>
</template>

<script setup>
</script>