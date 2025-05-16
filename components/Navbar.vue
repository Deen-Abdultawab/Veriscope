<template>
   <nav class="w-[83.3%] mx-auto max-w-[1440px] py-[0.7rem] basic-flex justify-between">
    <div class="logo max-w-[10.1rem]">
        <NuxtLink to="/">
            <NuxtImg src="/images/logo.png"/>
        </NuxtLink>
    </div>
    <ul class="navLinks basic-flex gap-[2.5rem]">
        <li class="nav-link small-texts">
            <NuxtLink to="/Services">
                Services
            </NuxtLink>
        </li>
        <li class="nav-link small-texts">
            <NuxtLink to="/About">
                About
            </NuxtLink>
        </li>
        <li class="nav-link small-texts">
            Case Studies
        </li>
        <li class="nav-link small-texts">
            Blog
        </li>
    </ul>
    <nuxt-link to="/Contact">
        <button class="btn small-texts cursor-pointer">
            Contact Us
        </button>
    </nuxt-link>
   </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>