<template>
   <section class="w-full py-[4.5rem] bg-[#FFFFFF]">
    <div class="w-[83.33%] mx-auto max-w-[1440px] grid grid-cols-3 gap-[1.5rem]">
        <article
        v-for="member in team"
        :key="member.id"
        >
            <NuxtImg src="/images/team-member.png" class="w-full"/>
            <div class="text-[#072042] mt-[0.75rem]">
                <h4 class="header-texts text-[1.34rem] mb-[0.5rem] max-md:text-[0.8rem]">{{ member.name }}</h4>
                <p class="text-[#0C3670] small-texts max-md:text-[0.7rem]">
                    {{ member.role }}
                </p>
            </div>
        </article>
    </div>
   </section>
</template>

<script setup>
const team = [
    {
        id: 1,
        name: 'Firdaous Ibrahim',
        role: 'Head of Digital Marketing',
        imgSrc: ''
    },
    {
        id: 2,
        name: 'Tirenioluwa Omilabu',
        role: 'Content Director',
        imgSrc: ''
    },
    {
        id: 3,
        name: 'Oluwatosin Akintola',
        role: 'Creative Design Director',
        imgSrc: ''
    },
]

</script>

<style lang="scss" scoped>

</style>