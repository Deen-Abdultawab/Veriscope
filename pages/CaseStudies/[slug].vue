<template>
    <div class="w-full bg-[#0F4590]" v-if="loading">
        <UiDetailsLoaader />
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
                        {{ caseStudy?.title }}
                    </h2>
                    <div class="w-full h-[25rem] sm:h-[35rem] md:h-[50rem] rounded-[1rem] md:rounded-[2rem] overflow-hidden border grid place-items-center bg-[white]">
                        <NuxtImg 
                           src="" 
                            :alt="caseStudy?.title"
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
                    <p>{{ caseStudy?.client }}</p>
                </article>
                <article>
                    <h3>Vision</h3>
                    <p>{{ caseStudy?.vision }}</p>
                </article>
                <article>
                    <h3>Challenge</h3>
                    <p>{{ caseStudy?.challenge }}</p>
                </article>
                <article>
                    <h3>Solution</h3>
                    <p>{{ caseStudy?.solution?.description }}</p>
                    <ul>
                        <li v-for="item in caseStudy?.solution?.solutionItems">
                            <strong>{{ item?.itemTitle }}</strong>: {{ item?.itemDescription }} 
                        </li>
                    </ul>
                </article>
                <article>
                    <h3>Results</h3>
                    <ul>
                        <li v-for="item in caseStudy?.results">{{ item }}</li>
                    </ul>
                </article>
                <article class="bg-[#F5F8FC] p-[1.5rem] md:p-[2rem] rounded-[1rem]">
                    <h3>Client Testimonial</h3>
                    <p class="italic">{{ caseStudy?.clientTestimonial?.quote }}</p>
                    <p class="mt-[1rem] font-[600]" v-if="caseStudy?.clientTestimonial?.author">
                        — {{ caseStudy?.clientTestimonial?.author }}
                    </p>
                </article>
            </div>
        </section>

        <!-- Read Next Section (Hidden) -->
        <section class="w-full bg-[#B5C8E1] py-[3rem] md:py-[5.63rem] hidden">
            <div class="w-[90%] md:w-[83.33%] mx-auto max-w-[1440px]">
                <h3>Read next</h3>
            </div>
        </section>
    </div>
</template>

<script setup>
definePageMeta({
  layout: 'custom'
})

const sanityClient = useSanityClient()
const { urlFor } = useSanityImage()
const loading = ref(false)
const error = ref(null)
const caseStudy = ref({})
const route = useRoute()

async function fetchCaseStudy(slug) {
  if (!slug) return;
  loading.value = true
  error.value = null
  caseStudy.value = null // Reset before fetching
  try {
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
    const params = { slugParam: slug }
    const data = await sanityClient.fetch(query, params)
    caseStudy.value = data
    console.log(data)
  } catch (err) {
    console.error('Error fetching case study:', err)
    error.value = err
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchCaseStudy(route.params.slug)
})

watch(() => route.params.slug, (newSlug) => {
  fetchCaseStudy(newSlug)
})


</script>

<style lang="scss" scoped>

</style>