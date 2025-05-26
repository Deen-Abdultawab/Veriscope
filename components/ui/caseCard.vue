<template>
 <article 
    v-for="caseStudy in data" 
    :key="caseStudy._id"
    class="flex gap-[1.5rem] md:gap-[2.88rem] pb-[1.5rem] md:pb-[2.5rem] border-b border-[#6087BE] max-md:flex-col hover:bg-gray-50/50 transition-colors duration-200 p-2 rounded-lg"
    >
    <div class="w-full md:w-[20rem] h-[10rem] sm:h-[12.5rem] overflow-hidden">
        <NuxtImg 
        :src="urlFor(caseStudy.mainImage).width(800).url()" 
        class="w-full h-full object-cover rounded-[0.75rem] md:rounded-[12px] transition-transform duration-300 hover:scale-105"
        :alt="caseStudy.title"
        placeholder
        loading="lazy"
        />
    </div>
    <div class="w-full h-full flex-1 flex flex-col gap-[0.75rem] md:gap-[1rem] text-[#072042]">
        <h3 class="header-texts text-[1.25rem] md:text-[1.75rem] leading-snug">
        {{ caseStudy.title }}
        </h3>
        <p class="small-texts text-[0.875rem] md:text-[1rem] line-clamp-2">
        {{ caseStudy.vision || caseStudy.challenge }}
        </p>
        <NuxtLink 
        :to="`/caseStudies/${caseStudy.slug.current}`" 
        class="btn w-fit mt-1 text-[0.875rem] md:text-[1rem] py-[0.5rem] md:py-[0.75rem] px-[1rem] md:px-[1.5rem] hover:bg-[#0d3a7a] transition-colors"
        >
        Read More
        </NuxtLink>
    </div>
    </article>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>