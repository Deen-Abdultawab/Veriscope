<template>
   <section class="w-full pt-[3.69rem] pb-[6.41rem] relative bg-[linear-gradient(to_bottom,_#FFFFFF,_#f4f5fee6,_#92add2cc,_#114c9e99)]">
      <div class="w-[83.33%] mx-auto max-w-[1440px]">
         <div class="basic-flex justify-between">
            <div class="flex-basic">
                <ul class="footer-links basic-flex gap-[1.5rem] mb-[1.5rem]">
                    <li class="small-texts capitalize text-[#072042]">
                        <nuxt-link to="/Services">
                            services
                        </nuxt-link>
                    </li>
                    <li class="small-texts capitalize text-[#072042]">
                        <nuxt-link to="/About">
                            about
                        </nuxt-link>
                    </li>
                    <li class="small-texts capitalize text-[#072042]">
                        case studies
                    </li>
                    <li class="small-texts capitalize text-[#072042]">blog</li>
                </ul>
                <p class="small-texts text-[#072042]">
                    © Copyright 2025 Veriscope
                </p>
            </div>
            <div class="basic-flex gap-[2rem]">
                <NuxtImg src="/icons/whatsapp.svg" class="social-link"/>
                <NuxtImg src="/icons/facebook.svg" class="social-link"/>
                <NuxtImg src="/icons/instagram.svg" class="social-link"/>
                <NuxtImg src="/icons/x.svg" class="social-link"/>
                <NuxtImg src="/icons/linkedin.svg" class="social-link"/>
            </div>
         </div>
      </div>
      <div class="mt-[10rem]">
        <NuxtImg src="/images/logo.svg" class="w-fit mx-auto"/>
      </div>
   </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>