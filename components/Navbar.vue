<template>
  <nav class="w-[90%] md:w-[83.3%] mx-auto max-w-[1440px] py-[0.7rem] basic-flex justify-between relative z-[99999]">
    <!-- Logo -->
    <div class="logo max-w-[8rem] md:max-w-[10.1rem]">
      <NuxtLink to="/">
        <NuxtImg src="/images/logo.png" class="w-full"/>
      </NuxtLink>
    </div>

    <!-- Desktop Navigation -->
    <ul class="navLinks basic-flex gap-[1.5rem] md:gap-[2.5rem] hidden md:flex">
      <li class="nav-link small-texts">
        <NuxtLink to="/Services">Services</NuxtLink>
      </li>
      <li class="nav-link small-texts">
        <NuxtLink to="/About">About</NuxtLink>
      </li>
      <li class="nav-link small-texts">
        <NuxtLink to="/CaseStudies">Case Studies</NuxtLink>
      </li>
      <li class="nav-link small-texts">
        <NuxtLink to="/Blogs">Blog</NuxtLink>
      </li>
    </ul>

    <!-- Desktop Contact Button -->
    <NuxtLink to="/Contact" class="hidden md:block">
      <button class="btn small-texts cursor-pointer">
        Contact Us
      </button>
    </NuxtLink>

    <!-- Mobile Hamburger Menu -->
    <button 
      class="md:hidden text-[#072042] text-2xl" 
      @click="isOpen = !isOpen"
      aria-label="Toggle menu"
    >
      ☰
    </button>

    <!-- Mobile Menu (Dropdown) -->
    <div 
      class="absolute top-full left-0 w-full bg-white shadow-md md:hidden transition-all duration-300 overflow-hidden"
      :class="isOpen ? 'max-h-[500px] py-4' : 'max-h-0 py-0'"
    >
      <ul class="flex flex-col items-center gap-6">
        <li class="nav-link small-texts">
          <NuxtLink to="/Services" @click="isOpen = false">Services</NuxtLink>
        </li>
        <li class="nav-link small-texts">
          <NuxtLink to="/About" @click="isOpen = false">About</NuxtLink>
        </li>
        <li class="nav-link small-texts">
          <NuxtLink to="/CaseStudies" @click="isOpen = false">Case Studies</NuxtLink>
        </li>
        <li class="nav-link small-texts">
          <NuxtLink to="/Blogs" @click="isOpen = false">Blog</NuxtLink>
        </li>
        <li class="nav-link small-texts">
          <NuxtLink to="/Contact" @click="isOpen = false">
            <button class="btn small-texts cursor-pointer">
              Contact Us
            </button>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>

const isOpen = ref(false);
</script>

<style scoped>
/* Add any custom animations or transitions here */
.nav-link {
  transition: color 0.2s ease;
  
  &:hover {
    color: #3b82f6; /* Example hover color - adjust as needed */
  }
}

/* Active link styling */
.router-link-active {
  font-weight: 600;
  color: #072042;
}
</style>