<template>
  <section class="w-full py-[1.5rem] md:py-[2.13rem] bg-[#FFFFFF]">
    <div class="w-[90%] md:w-[83.33%] mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-[1rem] md:gap-[1.5rem]">
      <!-- Image (will show first on mobile) -->
      <div class="w-full h-full order-1 lg:order-1">
        <NuxtImg src="/images/img2.png" class="w-full" alt="Business growth illustration"/>
      </div>
      
      <!-- Content (will show second on mobile) -->
      <div class="flex flex-col justify-center order-2 lg:order-2">
        <h1 class="text-[#072042] header-texts my-[1rem] md:my-[1.5rem] text-center lg:text-left">
          Built for Businesses Ready to Grow
        </h1>
        <p class="!text-[#072042] small-text text-center lg:text-left">
          Whether you're a startup gaining traction or an SME ready to scale, Veriscope helps you reach the right audience, generate better leads, and drive real results. We work best with individuals ready to build their personal brands and businesses ready to reach their growth potential.
        </p>
        <button class="btn mt-[1.5rem] md:mt-[2rem] w-full lg:w-fit !bg-[#B5C8E1] !text-[#072042] mx-auto lg:mx-0">
          Book Discovery Call
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style>
</style>