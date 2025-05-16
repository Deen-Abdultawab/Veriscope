<template>
   <section class="w-full py-[3.69rem] bg-[#FFFFFF]">
    <div class="w-[93.33%] mx-auto bg-[#E7EDF5] rounded-[3rem] py-[3.875rem] px-[4.5rem]">
        <div class="max-w-[1440px] grid grid-cols-2 gap-[2.813rem] mx-auto">
            <div>
                <h1 class="header-texts text-[#000000] mb-[1.5rem]">What We Do Best</h1>
                <p class="!text-[#000000] small-texts">
                    Whether you're a startup gaining traction or an SME ready to scale, Veriscope helps you reach the right audience, generate better leads, and drive real results. We work best with individuals ready to build their personal brands and businesses ready to reach their growth potential.
                </p>
            </div>
            <div class="flex flex-col gap-[2rem]">
               <article
                v-for="service in services"
                :key="service.id"
                class="bg-[#FFFFFF] p-[2rem] rounded-[1.5rem] flex gap-[1rem]"
                >
                    <NuxtImg :src="`/images/${service.imgSrc}`" class="w-[5.9rem] h-[5.9rem]" />
                    <div>
                        <h3 class="text-[#000000] header-texts !text-[1.75rem]">{{ service.title }}</h3>
                        <p class="small-texts !text-[#000000]">
                        {{ service.descr }}
                        </p>
                    </div>
                </article>
            </div>
        </div>
    </div>
   </section>
</template>

<script setup>
const services = [
    {
        id: 1,
        title: 'Search Engine Optimization (SEO)',
        descr: 'Be found when it matters. Improve your visibility and rank higher.',
        imgSrc: 'seo.png'
    },
    {
        id: 2,
        title: 'PPC & Paid Ads',
        descr: 'Targeted Google, Meta, and other campaigns that drive measurable ROI.',
        imgSrc: 'ad.png'
    },
    {
        id: 3,
        title: 'Social Media Marketing',
        descr: 'Build a digital community that converts attention into action.',
        imgSrc: 'buy.png'
    },
    {
        id: 4,
        title: 'Website Design & Development',
        descr: 'High-performing, mobile-friendly websites that turn visitors into customers.',
        imgSrc: 'dev.png'
    },
    {
        id: 5,
        title: 'Content Marketing',
        descr: 'Story-driven content that informs, sells, and builds trust.',
        imgSrc: 'content.png'
    },
    {
        id: 6,
        title: 'Email Marketing & Automation',
        descr: 'Keep your brand top of mind with smart, automated engagement flows.',
        imgSrc: 'growth.png'
    },

]

</script>

<style lang="scss" scoped>

</style>