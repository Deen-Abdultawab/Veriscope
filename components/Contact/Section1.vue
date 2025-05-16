<template>
   <section class="w-full py-[5.4rem] bg-[#FFFFFF]">
    <div class="w-[83.33%] mx-auto max-w-[1440px] grid grid-cols-2 gap-[3.25rem] items-center">
       <div>
        <h2 class="header-texts text-[#072042] mb-[2rem]">Contact Us</h2>
        <form class="flex flex-col gap-[1.38rem]">
            <div class="input-row flex gap-[1.38rem] items-center">
               <article class="input-field-contact w-[55.95%]">
                  <label for="name" class="header-texts">Your Name</label>
                  <input type="text" id="name" placeholder="Enter Your Name" class="small-texts">
               </article>
               <article class="input-field-contact flex-1">
                  <label for="name" class="header-texts">Email Address *</label>
                  <input type="text" id="name" placeholder="emailadress@gmail.com" class="small-texts">
               </article>
            </div>
            <div class="input-row">
               <article class="input-field-contact">
                  <label for="subject" class="header-texts">Subject *</label>
                  <input type="text" id="subject" placeholder="Enter Subject" class="small-texts">
               </article>
            </div>
            <div class="input-row">
               <article class="input-field-contact">
                  <label for="subject" class="header-texts">Your Message *</label>
                  <textarea name="message" rows="5" id="message" placeholder="Enter Your Message" class="small-texts"></textarea>
               </article>
            </div>
            <button type="submit" class="btn w-fit">
             Send Message
            </button>
        </form>
       </div>
       <div class="">
         <NuxtImg src="/images/logo3d.png"/>
       </div>
    </div>
   </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>