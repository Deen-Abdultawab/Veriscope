<template>
    <nuxt-link 
    to="/Contact"
    class="btn mt-[1.5rem] md:mt-[2rem] w-full md:w-fit hover:bg-[#0d3a7a] transition-colors transitionEffect"
    :style="{'background-color': `${bG}`, 'color': `${textCol}`}"
    >
    Contact Us
   </nuxt-link>
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