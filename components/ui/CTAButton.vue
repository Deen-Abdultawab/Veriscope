<template>
    <a 
    href="https://wa.me/2349137978816"
    target="_blank"
    class="btn mt-[1.5rem] md:mt-[2rem] w-full md:w-fit hover:bg-[#0d3a7a] transition-colors transitionEffect text-center"
    :style="{'background-color': `${bG}`, 'color': `${textCol}`}"
    >
    Contact Us
   </a>
</template>

<script setup>
const props = defineProps({
  bG: {
    type: String,
  },
  textCol: {
    type: String
  }
})

</script>

<style lang="scss" scoped>

</style>