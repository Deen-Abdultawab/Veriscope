<template>
   <section class="w-full py-[6.313rem] bg-[#0F4590] relative">
    <div class="w-[83.33%] max-md:w-[90%] mx-auto max-w-[1440px]">
        <h2 class="text-center max-md:text-[1.95rem] header-texts text-[#FFFFFF]">
            {{ heading }}
        </h2>
        <NuxtImg src="/images/iconRight.png" class="absolute right-0 bottom-0"/>
        <NuxtImg src="/images/iconLeft.png" class="absolute left-0 bottom-0"/>
        <NuxtImg src="/images/iconLeft.png" class="absolute left-0 top-0 rotate-[90deg]"/>
        <NuxtImg src="/images/iconRight.png" class="absolute right-0 top-0 rotate-[270deg]"/>
    </div>
   </section>
</template>

<script setup>
defineProps({
  heading: {
    type: String,
    default: 'Case Studies'
  }
})

</script>

<style lang="scss" scoped>

</style>