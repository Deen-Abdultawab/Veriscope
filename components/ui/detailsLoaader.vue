<template>
  <section class="w-full bg-[#0F4590]">
    <div class="w-[90%] md:w-[83.33%] mx-auto max-w-[1440px]">
      <div class="header pt-[1.5rem] md:pt-[2rem] pb-[5rem] md:pb-[8.87rem]">
        <!-- Back button skeleton -->
        <div class="basic-flex gap-[0.5rem] mb-[2.5rem] md:mb-[4.44rem]">
          <div class="w-[1.25rem] md:w-[1.5rem] h-[1.25rem] md:h-[1.5rem] bg-gray-300 rounded-full animate-pulse"></div>
          <div class="h-4 w-24 bg-gray-300 rounded animate-pulse"></div>
        </div>
        
        <!-- Title skeleton -->
        <div class="h-8 md:h-10 w-3/4 bg-gray-300 rounded animate-pulse mb-[1.5rem] md:mb-[2rem]"></div>
        
        <!-- Image placeholder skeleton -->
        <div class="w-full h-[25rem] sm:h-[35rem] md:h-[50rem] rounded-[1rem] md:rounded-[2rem] overflow-hidden border bg-gray-200 animate-pulse"></div>
      </div>
    </div>
  </section>

  <section class="bg-[#FFFFFF] pt-[2.5rem] md:pt-[4.44rem] pb-[3.5rem] md:pb-[6.06rem] w-full">
    <div class="details w-[90%] md:w-[80%] lg:w-[68.96%] mx-auto max-w-[1440px] flex flex-col gap-[1.25rem] md:gap-[1.69rem]">
      <!-- Client section skeleton -->
      <article>
        <div class="h-5 w-16 bg-gray-300 rounded animate-pulse mb-2"></div>
        <div class="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
      </article>
      
      <!-- Vision section skeleton -->
      <article>
        <div class="h-5 w-16 bg-gray-300 rounded animate-pulse mb-2"></div>
        <div class="space-y-2">
          <div class="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
          <div class="h-4 w-4/5 bg-gray-200 rounded animate-pulse"></div>
          <div class="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </article>
      
      <!-- Challenge section skeleton -->
      <article>
        <div class="h-5 w-20 bg-gray-300 rounded animate-pulse mb-2"></div>
        <div class="space-y-2">
          <div class="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
          <div class="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </article>
      
      <!-- Solution section skeleton -->
      <article>
        <div class="h-5 w-20 bg-gray-300 rounded animate-pulse mb-2"></div>
        <div class="space-y-2 mb-3">
          <div class="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
          <div class="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <ul class="space-y-2 pl-4">
          <li class="h-4 w-full bg-gray-200 rounded animate-pulse"></li>
          <li class="h-4 w-4/5 bg-gray-200 rounded animate-pulse"></li>
          <li class="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></li>
        </ul>
      </article>
      
      <!-- Results section skeleton -->
      <article>
        <div class="h-5 w-16 bg-gray-300 rounded animate-pulse mb-2"></div>
        <ul class="space-y-2 pl-4">
          <li class="h-4 w-full bg-gray-200 rounded animate-pulse"></li>
          <li class="h-4 w-4/5 bg-gray-200 rounded animate-pulse"></li>
          <li class="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></li>
        </ul>
      </article>
      
      <!-- Testimonial section skeleton -->
      <article class="bg-gray-50 p-4 rounded-lg">
        <div class="h-5 w-32 bg-gray-300 rounded animate-pulse mb-2"></div>
        <div class="space-y-2">
          <div class="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
          <div class="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
          <div class="h-4 w-16 bg-gray-300 rounded animate-pulse mt-3"></div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
// No script needed for skeleton loader
</script>

<style scoped>
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>