<template>
    <div class="w-full bg-[#0F4590]" v-if="pending">
        <!-- Skeleton Loader -->
        <UiDetailsLoaader />
    </div>
    <div v-else-if="error">
        <div class="w-full bg-[#0F4590] text-white p-8 text-center">
            Error loading blog post: {{ error.message }}
        </div>
    </div>
    <div v-else>
        <section class="w-full bg-[#0F4590]">
            <div class="w-[90%] md:w-[83.33%] mx-auto max-w-[1440px]">
                <div class="header pt-[1.5rem] md:pt-[2rem] pb-[4rem] md:pb-[8.87rem]">
                    <NuxtLink to="/Blogs">
                        <div class="basic-flex gap-[0.5rem] mb-[2rem] md:mb-[4.44rem]">
                            <NuxtImg 
                                src="/icons/arrowIcon.svg" 
                                class="w-[1.25rem] md:w-[1.5rem] h-[1.25rem] md:h-[1.5rem]"
                                alt="Back to Blog"
                            />
                            <h3 class="small-texts text-[#FFFFFF] text-[0.9375rem] md:text-[1rem]">Back to Blog</h3>
                        </div>
                    </NuxtLink>
                    <h2 class="header-text text-[1.5rem] md:text-[2rem] text-[#FFFFFF] mb-[1.5rem] md:mb-[2rem] leading-tight">
                        {{ data?.title }}
                    </h2>
                    <div class="w-full h-[20rem] sm:h-[30rem] md:h-[50rem] rounded-[1rem] md:rounded-[2rem] overflow-hidden border grid place-items-center bg-white" v-if="data?.mainImage">
                        <NuxtImg 
                            :src="urlFor(data?.mainImage).width(800).url()"
                            :alt="data?.title"
                            class="w-full h-full object-cover"
                            placeholder
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-[#FFFFFF] pt-[2.5rem] md:pt-[4.44rem] pb-[3rem] md:pb-[6.06rem] w-full">
            <div class="details w-[90%] md:w-[80%] lg:w-[68.96%] mx-auto max-w-[1440px] flex flex-col gap-[1.25rem] md:gap-[1.69rem]">
                <article>
                    <h3 class="text-[1.25rem] md:text-[1.5rem] font-semibold text-[#072042] mb-[0.75rem] md:mb-[1rem]">Introduction</h3>
                    <p class="text-[0.9375rem] md:text-[1rem] text-[#072042] leading-relaxed">
                        {{ data?.introduction }}
                    </p>
                </article>
                <article>
                    <h3 class="text-[1.25rem] md:text-[1.5rem] font-semibold text-[#072042] mb-[0.75rem] md:mb-[1rem]">Key Points</h3>
                    <ul class="space-y-[0.75rem] md:space-y-[1rem]">
                        <li 
                            v-for="item in data?.keyPoints"
                            class="text-[0.9375rem] md:text-[1rem] text-[#072042] leading-relaxed"
                        >
                            <span class="font-medium">{{ item?.pointTitle }}</span>: 
                            <span>{{ item.pointDescription }}</span>
                        </li>
                    </ul>
                </article>
                <article>
                    <h3 class="text-[1.25rem] md:text-[1.5rem] font-semibold text-[#072042] mb-[0.75rem] md:mb-[1rem]">Conclusions</h3>
                    <p class="text-[0.9375rem] md:text-[1rem] text-[#072042] leading-relaxed">
                        {{ data?.conclusion }}
                    </p>
                </article>
            </div>
        </section>
        <section class="w-full bg-[#B5C8E1] py-[3rem] md:py-[5.63rem]">
            <div class="w-[90%] md:w-[83.33%] mx-auto max-w-[1440px]">
                <h3 class="text-[1.25rem] md:text-[1.5rem] font-semibold text-[#072042]">Read next</h3>
                <UiCardComponent 
                route="Blogs"
                :item="nextBlog"
                />
            </div>
        </section>
    </div>
</template>

<script setup>
useHead({
    title: 'Blog',
})

definePageMeta({
  layout: 'custom'
})

const { urlFor } = useSanityImage()
const route = useRoute()
const nextBlog = ref({})

const query = `*[_type == "blogPost" && slug.current == $slugParam][0]{
  _id,
  title,
  slug,
  mainImage,
  introduction,
  keyPoints[]{
    _key,
    pointTitle,
    pointDescription
  },
  conclusion,
  publishedAt
}`

const { data, pending, error, refresh } = await useAsyncData(
  `blogPost-${route.params.slug}`,
  () => useSanityClient().fetch(query, { slugParam: route.params.slug }),
   {
    // Key changes to fix routing delay:
    server: false, // Fetch only on client-side
    lazy: true,    // Don't block navigation
    // immediate: false // Don't fetch on component mount
  }
)

const getNextBlog = async (currentSlug) => {
  const sanityClient = useSanityClient()
  
  const { data } = await useAsyncData('allBlogs', async () => {
    const query = groq`*[_type == "blogPost"] | order(publishedAt desc) {
       _id,
      title,
      slug,
      mainImage,
      introduction,
    }`
    return await sanityClient.fetch(query)
  })

  if (!data.value) return null

  const blogs = data.value
  const currentIdx = blogs.findIndex(b => b.slug.current === currentSlug)
  const nextIdx = (currentIdx + 1) % blogs.length
  nextBlog.value = blogs[nextIdx]
//   console.log(nextBlog.value)
  return blogs[nextIdx]
}

// Refresh data when component mounts (route changes)
onMounted(async () => {
  refresh()
  await getNextBlog(route.params.slug)
})

// Watch for route changes and refresh data
watch(() => route.params.slug, async (newSlug) => {
  refresh()
  await getNextBlog(newSlug)
})
</script>

<style scoped>
/* Your existing styles remain the same */
</style>