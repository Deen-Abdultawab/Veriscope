<template>
   <section class="w-full pt-[3rem] sm:pt-[4rem] md:pt-[5.313rem] pb-[6rem] sm:pb-[8rem] md:pb-[11.136rem] bg-[#FFFFFF]">
    <div class="w-[90%] sm:w-[85%] md:w-[83.33%] mx-auto max-w-[1440px] flex flex-col lg:flex-row gap-[2rem] sm:gap-[1.5rem] md:gap-[1.34rem]">
       <div class="w-full lg:w-[24rem] order-2 lg:order-1 max-lg:mt-[5rem]">
            <h2 class="header-texts mb-[3rem] hidden lg:block">Got Questions? We’ve Got You</h2>
            <form class="">
                <h3 class="header-texts text-[1.75rem] mb-[2rem]">Got a different question?</h3>
                <div>
                    <article class="input-field">
                        <input type="text" id="name" placeholder="Name" class="small-texts input">
                    </article>
                    <article class="input-field">
                        <input type="mail" id="mail" placeholder="Email Address" class="small-texts input">
                    </article>
                    <article class="input-field">
                      <textarea name="question" id="" placeholder="Question" class="input small-texts" rows="3"></textarea>
                    </article>
                </div>
                <div class="flex justify-end">
                    <button class="btn">
                        Send Message
                    </button>
                </div>
            </form>
       </div>
       <div class="w-full h-full flex-1 order-1 lg:order-2">
        <h2 class="header-texts mb-[3rem] block lg:hidden">Got Questions? We’ve Got You</h2>
          <div class="w-full h-full flex flex-col gap-[1rem]">
              <article 
              v-for="(faq, index) in faqs"
              :key="faq.id"
              class="bg-[#E7EDF5] p-[1.5rem] rounded-[1.5rem] transition-all duration-300 ease-in-out"
              >
              <div class="flex justify-between items-center cursor-pointer" @click="toggleFAQ(index)">
                  <h4 class="text-[#072042] header-texts !text-[1.38rem]">{{ faq.question }}</h4>
                  <Icon :name="faq.open ? 'ic:round-close' : 'ic:round-plus'" :size="30" class="transitionEffect"/>
              </div>
  
              <Transition name="accordion">
                  <div v-show="faq.open" class="mt-[1rem]">
                  <p class="small-texts text-[#6B6B6B]">
                      {{ faq.answer }}
                  </p>
                  </div>
              </Transition>
              </article>
          </div>
       </div>
    </div>
   </section>
</template>

<script setup>
const faqs = ref([
  {
    id: 1,
    question: "What kinds of businesses do you work with?",
    answer: "We start with a free consultation to understand your goals and recommend a strategy that fits your budget and business stage.",
    open: false
  },
  {
    id: 2,
    question: "How do I know which service I need?",
    answer: "We start with a free consultation to understand your goals and recommend a strategy that fits your budget and business stage.",
    open: false
  },
  {
    id: 3,
    question: "What if I’ve never done digital marketing before?",
    answer: "No problem. We guide you from the ground up with full clarity.",
    open: false
  },
  {
    id: 4,
    question: "How quickly can I expect results?",
    answer: "That depends on the service. Some see results within weeks; SEO and long-term strategy scale over time.",
    open: false
  }
]);

const toggleFAQ = (index) => {
  faqs.value[index].open = !faqs.value[index].open
}

</script>

<style scoped>
.accordion-enter-active, .accordion-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
}
.accordion-enter-from, .accordion-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}
.accordion-enter-to, .accordion-leave-from {
  max-height: 500px; /* Adjust if needed */
  opacity: 1;
}
</style>
