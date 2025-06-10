<template>
   <section class="w-full py-[3rem] sm:py-[4rem] md:py-[5.4rem] bg-[#FFFFFF]">
    <div class="w-[90%] sm:w-[85%] md:w-[83.33%] mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-2 gap-[2rem] sm:gap-[2.5rem] md:gap-[3.25rem] items-center">
       <div class="order-2 md:order-1">
        <h2 class="header-texts text-[#072042] mb-[1.5rem] sm:mb-[1.75rem] md:mb-[2rem]">Contact Us</h2>
        <form class="flex flex-col gap-[1rem] sm:gap-[1.25rem] md:gap-[1.38rem] max-md:z-[2] relative" @submit.prevent="sendEmail">
            <div class="input-row flex flex-col sm:flex-row gap-[1rem] sm:gap-[1.25rem] md:gap-[1.38rem]">
               <article class="input-field-contact w-full sm:w-[55.95%]">
                  <label for="name" class="header-texts text-[1.1rem] sm:text-[1.25rem] md:text-[1.38rem]">Your Name</label>
                  <input type="text" id="name" placeholder="Enter Your Name" class="small-texts" v-model="form.name" required>
               </article>
               <article class="input-field-contact w-full sm:flex-1">
                  <label for="email" class="header-texts text-[1.1rem] sm:text-[1.25rem] md:text-[1.38rem]">Email Address *</label>
                  <input type="email" id="email" placeholder="emailadress@gmail.com" class="small-texts" v-model="form.from" required>
               </article>
            </div>
            <div class="input-row">
               <article class="input-field-contact">
                  <label for="subject" class="header-texts text-[1.1rem] sm:text-[1.25rem] md:text-[1.38rem]">Subject *</label>
                  <input type="text" id="subject" placeholder="Enter Subject" class="small-texts" v-model="form.subject" required>
               </article>
            </div>
            <div class="input-row">
               <article class="input-field-contact">
                  <label for="message" class="header-texts text-[1.1rem] sm:text-[1.25rem] md:text-[1.38rem]">Your Message *</label>
                  <textarea v-model="form.message" name="message" rows="4" sm:rows="5" id="message" placeholder="Enter Your Message" class="small-texts"></textarea required>
               </article>
            </div>
            <button type="submit" class="btn w-full sm:w-fit mt-[0.5rem]">
               <span v-if="isSendindMail">Sending...</span>
               <span v-else>Send Message</span>
            </button>
            <p class="small-texts font-MuseoSans" :class="mailError? '!text-[red]' : '!text-[green]'">{{ status }}</p>
        </form>
       </div>
       <div class="order-1 md:order-2 flex justify-center max-md:absolute max-md:z-[1] max-md:left-[50%] max-md:translate-x-[-50%] max-md:w-full max-md:opacity-[0.4]">
         <NuxtImg src="/images/logo3d.png" class="w-full max-w-[300px] md:max-w-none"/>
       </div>
    </div>
   </section>
</template>

<script setup>
const status = ref((''))
const mailError = ref(false)
const isSendindMail = ref(false)
const form = ref({
   name: '',
  from: '',
  subject: '',
  message: ''
})

const sendEmail = async (e) => {
   e.preventDefault();
   isSendindMail.value = true
  try {
    const res = await $fetch('/api/send', {
      method: 'POST',
      body: {
         name: form.value.name,
        from: form.value.from,
        subject: form.value.subject,
        message: form.value.message,
      },
    })

    if (res.success) {
      isSendindMail.value = false
      status.value = 'Email sent successfully!'
      form.value.name = '',
      form.value.from = '',
      form.value.subject = '',
      form.value.message = ''
    } else {
      isSendindMail.value = false
      mailError.value = true
      status.value = 'Failed to send email. Please try again.'
      console.error(res.error)
    }
  } catch (error) {
   isSendindMail.value = false
   mailError.value = true
    status.value = 'Something went wrong.'
    console.error(error)
  }

  setTimeout(() => {
    status.value = ''
    mailError.value = false
  }, 4000)
}

</script>