<template>
  <section class="w-full py-[4rem] sm:py-[6rem] md:py-[9rem] bg-[#E6F8FD]">
    <div class="w-[90%] sm:w-[85%] md:w-[83.33%] mx-auto max-w-[1440px]">
      <article 
        v-for="service in services"
        :key="service.id"
        class="py-[2rem] sm:py-[2.5rem] md:py-[3.313rem] w-full md:w-[91.5%] grid grid-cols-1 lg:grid-cols-2 items-center gap-[2rem] sm:gap-[3rem] md:gap-[6.4rem] mx-auto"
      >
        <div 
          class="text-[#072042] flex flex-col gap-[0.75rem] sm:gap-[1rem]" 
          :class="service.inverted ? 'lg:order-2' : ''"
        >
          <h2 class="text-[#072042] font-MuseoSans font-[600] text-[1.5rem] sm:text-[1.75rem] md:text-[2.25rem] leading-[120%]">
            {{ service.title }}
          </h2>
          <p class="text-[#072042] font-MuseoSans font-[300] text-[0.875rem] sm:text-[1rem] leading-[160%]">
            {{ service.subtitle }} <br> {{ service.descr }}
          </p>
          <ul class="flex flex-col gap-[0.5rem]">
            <li 
              v-for="(bullet, index) in service.bullets"
              :key="index"
              class="flex items-start gap-[0.5rem]"
            >
              <NuxtImg src="/images/logo-icon.svg" class="w-[16px] h-[16px] mt-[0.25rem] flex-shrink-0"/>
              <span class="text-[#072042] font-MuseoSans font-[300] text-[0.875rem] sm:text-[1rem] leading-[160%]">
                {{ bullet }}
              </span>
            </li>
          </ul>
          <button 
            v-if="service.showBtn"
            class="bg-[#114C9E] text-white font-MuseoSans font-[300] text-[1rem] leading-[160%] px-[1.5rem] sm:px-[2rem] py-[0.75rem] rounded-[0.5rem] w-fit hover:bg-[#0d3a7a] transition-colors mt-[1rem]"
          >
            Book Discovery Call
          </button>
        </div>
        <div class="order-first lg:order-none">
          <NuxtImg 
            :src="`/images/${service.imgSrc}`" 
            class="w-full h-full object-cover rounded-[0.5rem]"
          />
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
const services = [
    {
        id: 1,
        title: 'Search Engine Optimization (SEO)',
        subtitle: 'Be seen where it matters most.',
        descr: 'We optimize your website to rank on Google and drive qualified traffic. From keyword strategy to technical SEO, we make sure you show up and stand out.',
        bullets: [
            'Local SEO for local markets',
            'On-page, off-page & technical optimization',
            'Long-term visibility, not just quick wins'
        ],
        imgSrc: 'seo-about.png',
        inverted: false,
        showBtn: false
    },
   {
        id: 6,
        title: 'Social Media Marketing & Management',
        subtitle: 'Build presence. Build trust. Build results.',
        descr: 'We help you show up consistently and strategically on the platforms your customers use with content that connects and campaigns that convert.',
        bullets: [
            'Instagram, Facebook, LinkedIn, Twitter/X',
            'Content planning, copywriting & publishing',
            'Community engagement & growth strategy'
        ],
        imgSrc: 'ads-about.png',
        inverted: true,
        showBtn: false
    },
      {
        id: 3,
        title: 'PPC Advertising (Google & Meta Ads)',
        subtitle: 'Ads that work harder and smarter.',
        descr: 'We create high-performance paid campaigns that put your brand in front of the right audience at the right time and turn clicks into real connections.',
        bullets: [
            'Google Search & Display Ads',
            'Facebook/Instagram lead ads',
            'Landing page + ad copy that converts'
        ],
        imgSrc: 'ads-about.png',
        inverted: false,
        showBtn: false
    },
    {
        id: 4,
        title: 'Content Marketing',
        subtitle: 'Educate, Engage, Sell.',
        descr: 'From blog posts to videos, we create compelling content that drives organic traffic, builds authority, and supports every stage of the buyer journey.',
        bullets: [
            'Strategy-led storytelling',
            'Video scripts, social graphics & micro-content',
            'Blog writing & SEO articles'
        ],
        imgSrc: 'content-about.png',
        inverted: true,
        showBtn: false
    },
    {
        id: 5,
        title: 'Website Design & Development',
        subtitle: 'Your website should do more than look good, it should sell.',
        descr: 'We design sleek, responsive, conversion-focused websites that build trust and drive action. Build a performer across mobile and desktop.',
        bullets: [
            'WordPress, Framer & Webflow builds',
            'Best-in-class performance websites',
            'Fast and responsive design'
        ],
        imgSrc: 'dev-about.png',
        inverted: false,
        showBtn: false
    },
    {
        id: 6,
        title: 'Email Marketing & Automation',
        subtitle: 'Stay top of mind, and in their inbox.',
        descr: 'We help you turn emails into a growth engine, with automated campaigns that nurture leads, convert customers, and increase retention.',
        bullets: [
            'Email flows & lead nurturing',
            'List segmentation & automation',
            'Welcome, cart abandon, reactivation sequences'
        ],
        imgSrc: 'email-about.png',
        inverted: true,
        showBtn: false
    },
    {
        id: 7,
        title: 'Strategy & Digital Consulting',
        subtitle: 'Not sure where to start? Start with clarity.',
        descr: 'We offer one-on-one strategy sessions to audit your brand, map your digital landscape, and recommend a growth plan that fits your goals and budget.',
        bullets: [
            'Free initial consultation',
            'Digital audit + quick wins',
            'Roadmap for scale'
        ],
        imgSrc: 'strategy-about.png',
        inverted: false,
        showBtn: true
    }
]
</script>