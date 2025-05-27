<template>
   <section class="w-full pt-[4rem] sm:pt-[5rem] md:pt-[7rem] pb-[3rem] sm:pb-[4rem] md:pb-[5.7rem] bg-[#FFFFFF]">
    <div class="w-[90%] sm:w-[85%] md:w-[83.33%] mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-2 gap-[3rem] sm:gap-[4rem] md:gap-[6.4rem]">
        <div class="flex flex-col justify-center order-2 md:order-1">
            <h1 class="text-[#072042] font-MuseoSans font-[600] text-[2rem] sm:text-[2.5rem] md:text-[3rem] leading-[120%] my-[1rem] sm:my-[1.25rem] md:my-[1.5rem]">
                Built for Growth. Backed by Strategy.
            </h1>
            <p class="!text-[#072042] small-texts">
               We work with startups, SMEs, and growth-stage brands to deliver digital strategies that are sharp, scalable, and grounded in data. Whether you're trying to get more leads, increase your visibility, or simply stop wasting money on guesswork, we're here to help you build real momentum online.
            </p>
            <UiCTAButton />
        </div>
        <div class="w-full h-full order-1 md:order-2">
            <NuxtImg src="/images/logo3d.png" class="w-full max-w-[400px] md:max-w-none mx-auto"/>
        </div>
    </div>
   </section>
</template>