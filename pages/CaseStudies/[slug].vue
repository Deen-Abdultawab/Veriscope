<template>
    <div class="w-full bg-[#0F4590]" v-if="pending">
        <UiDetailsLoaader />
    </div>
    <div v-else-if="error">
        <div class="w-full bg-[#0F4590] text-white p-8 text-center">
            Error loading case study: {{ error.message }}
        </div>
    </div>
    <div v-else>
        <!-- Hero Section -->
        <section class="w-full bg-[#0F4590]">
            <div class="w-[90%] md:w-[83.33%] mx-auto max-w-[1440px]">
                <div class="header pt-[1.5rem] md:pt-[2rem] pb-[4rem] md:pb-[8.87rem]">
                    <NuxtLink to="/casestudies">
                        <div class="basic-flex gap-[0.5rem] mb-[2.5rem] md:mb-[4.44rem]">
                            <NuxtImg src="/icons/arrowIcon.svg" class="w-[1.25rem] md:w-[1.5rem] h-[1.25rem] md:h-[1.5rem]"/>
                            <h3 class="small-texts text-[#FFFFFF] text-[0.9375rem] md:text-[1rem]">Back to Case Studies</h3>
                        </div>
                    </NuxtLink>
                    <h2 class="header-text text-[1.75rem] sm:text-[2rem] text-[#FFFFFF] mb-[1.5rem] md:mb-[2rem]">
                        {{ data?.title }}
                    </h2>
                    <div class="w-full h-[25rem] sm:h-[35rem] md:h-[50rem] rounded-[1rem] md:rounded-[2rem] overflow-hidden border grid place-items-center bg-[white]">
                        <NuxtImg 
                           :src="urlFor(data?.mainImage).width(800).url()" 
                            :alt="data?.title"
                            class="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>

        <!-- Content Section -->
        <section class="bg-[#FFFFFF] pt-[2.5rem] md:pt-[4.44rem] pb-[3.5rem] md:pb-[6.06rem] w-full">
            <div class="details w-[90%] md:w-[80%] lg:w-[68.96%] mx-auto max-w-[1440px] flex flex-col gap-[1.5rem] md:gap-[1.69rem]">
                <article>
                    <h3>Client</h3>
                    <p>{{ data?.client }}</p>
                </article>
                <article>
                    <h3>Vision</h3>
                    <p>{{ data?.vision }}</p>
                </article>
                <article>
                    <h3>Challenge</h3>
                    <p>{{ data?.challenge }}</p>
                </article>
                <article>
                    <h3>Solution</h3>
                    <p>{{ data?.solution?.description }}</p>
                    <ul>
                        <li v-for="item in data?.solution?.solutionItems">
                            <strong>{{ item?.itemTitle }}</strong>: {{ item?.itemDescription }} 
                        </li>
                    </ul>
                </article>
                <article>
                    <h3>Results</h3>
                    <ul>
                        <li v-for="item in data?.results">{{ item }}</li>
                    </ul>
                </article>
                <article class="">
                    <h3>Client Testimonial</h3>
                    <p class="italic">{{ data?.clientTestimonial?.quote }}</p>
                    <p class="mt-[1rem] font-[600]" v-if="data?.clientTestimonial?.author">
                        — {{ data?.clientTestimonial?.author }}
                    </p>
                </article>
            </div>
        </section>

        <!-- Read Next Section (Hidden) -->
        <section class="w-full bg-[#B5C8E1] py-[3rem] md:py-[5.63rem]" v-if="nextCase">
            <div class="w-[90%] md:w-[83.33%] mx-auto max-w-[1440px]">
                <h3 class="mb-[1.5rem]">Read next</h3>
                <UiCardComponent 
                route="caseStudies"
                :item="nextCase"
                />
            </div>
        </section>
    </div>
</template>

<script setup>
definePageMeta({
  layout: 'custom'
})

const { urlFor } = useSanityImage()
const route = useRoute()
const nextCase = ref({})

const query = `*[_type == "caseStudy" && slug.current == $slugParam][0]{
  _id,
  title,
  slug,
  client,
  mainImage,
  vision,
  challenge,
  solution{
    description,
    solutionItems[]{
      _key,
      itemTitle,
      itemDescription
    }
  },
  results,
  clientTestimonial{
    quote,
    author
  },
  publishedAt
}`

const { data, pending, error, refresh } = await useAsyncData(
  `caseStudy-${route.params.slug}`,
  () => useSanityClient().fetch(query, { slugParam: route.params.slug })
)

const getNextBlog = async (currentSlug) => {
  const sanityClient = useSanityClient()
  
  const { data } = await useAsyncData('allCaseStudies', async () => {
    const query = groq`*[_type == "caseStudy"] | order(publishedAt desc) {
       _id,
      title,
      slug,
      mainImage,
       vision,
        challenge,
    }`
    return await sanityClient.fetch(query)
  })

  if (!data.value) return null

  const blogs = data.value
  const currentIdx = blogs.findIndex(b => b.slug.current === currentSlug)
  const nextIdx = (currentIdx + 1) % blogs.length
  nextCase.value = blogs[nextIdx]
  console.log(nextCase.value)
  return blogs[nextIdx]
}

watch(() => route.params.slug, async (newSlug) => {
  refresh()
  await getNextBlog(newSlug)
})

onMounted(async()=>{
    refresh()
    await getNextBlog(route.params.slug)
})
</script>

<style scoped>

</style>