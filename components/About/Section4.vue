<template>
   <section class="w-full py-[2.5rem] sm:py-[3.5rem] md:py-[4.5rem] bg-[#FFFFFF] flex flex-col gap-[3.75rem]">
    <div 
    v-for="member in team"
    class="w-[90%] sm:w-[85%] md:w-[83.33%] mx-auto max-w-[1440px] gap-[3rem] sm:gap-[5rem] md:gap-[11.3rem] text-[#072042]">
         <div class="text-center flex items-center flex-col">
            <h3 class="header-texts mb-[1.5rem] sm:mb-[2rem] md:mb-[2.69rem] text-[1.5rem] sm:text-[1.63rem] md:text-[1.75rem] capitalize">{{ member.name }}</h3>
            <NuxtImg 
              :src="`/images/${member.imgSrc}`" 
              class="w-[12rem] sm:w-[15rem] md:w-[19.16rem] mx-auto md:mx-0"
            />
         </div>
         <div class="text-center mt-[1.5rem] w-[76.16%] mx-auto max-sm:w-[100%]">
            <h3 class="header-texts text-[1.5rem] sm:text-[1.63rem] md:text-[1.75rem] mb-[1.5rem] sm:mb-[2rem] md:mb-[2.69rem]">{{ member.role }}</h3>
            <p class="small-texts text-[1rem] sm:text-[1.13rem] md:text-[1.25rem]">
               {{ member.descr1 }}
                <br class="block">
                <br class="block">
                {{ member.descr2 }}
            </p>
         </div>
    </div>
   </section>
</template>

<script setup>
const team = [
   {
      id: 1,
      name: 'Oluwatobi Ajewole',
      imgSrc: 'Tobi.jpg',
      role: 'Lead Strategist',
      descr1: ` With over 5 years of experience in digital marketing and strategy, Tobi has helped brands across Nigeria and the U.S. grow their digital presence. A certified member of the Digital Marketing Institute and a student of the Chartered Institute of Marketing (CIM), he brings together marketing insight, technical expertise, and a passion for helping businesses win online.`,
      descr2: ` With a background in Economics and an MBA in Marketing, Tobi brings both strategy and structure to every project helping clients grow not just fast, but sustainably.`
   },
   {
      id: 2,
      name: 'Firdaous Ibrahim',
      imgSrc: 'firdaus.jpg',
      role: 'Head of Digital Marketing',
      descr1: `Firdaous is an experienced Digital Marketing Professional with a strong background in Data Analysis. He served as a Digital Analyst for MTN Nigeria, where he provided actionable insights that helped drive campaign performance and improve KPIs. He has also worked with other leading brands, using marketing data to optimize content and campaign strategies across various platforms.`,
      descr2: `With certifications in Data Analysis, Data Science, Google Analytics, Digital Marketing from institutions like Google, IBM, Hubspot, etc. Firdaous deeply understands the value of leveraging data to inform marketing decisions. His work supports some of Africa’s biggest brands, where he continuously transforms data into strategies that deliver real business impact.`
   },
]

</script>