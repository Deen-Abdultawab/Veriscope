<template>
    <div class="w-full bg-[#0F4590]" v-if="loading">
        <!-- Skeleton Loader -->
        <section class="w-full bg-[#0F4590]">
            <div class="w-[90%] md:w-[83.33%] mx-auto max-w-[1440px]">
                <div class="header pt-[1.5rem] md:pt-[2rem] pb-[4rem] md:pb-[8.87rem]">
                    <div class="basic-flex gap-[0.5rem] mb-[2rem] md:mb-[4.44rem]">
                        <div class="w-[1.25rem] h-[1.25rem] bg-gray-300 rounded animate-pulse"></div>
                        <div class="h-4 w-24 bg-gray-300 rounded animate-pulse"></div>
                    </div>
                    <div class="h-8 md:h-10 w-3/4 bg-gray-300 rounded animate-pulse mb-[1.5rem] md:mb-[2rem]"></div>
                    <div class="w-full h-[20rem] sm:h-[30rem] md:h-[50rem] rounded-[1rem] md:rounded-[2rem] bg-gray-200 animate-pulse"></div>
                </div>
            </div>
        </section>
        <section class="bg-[#FFFFFF] pt-[2.5rem] md:pt-[4.44rem] pb-[3rem] md:pb-[6.06rem] w-full">
            <div class="details w-[90%] md:w-[80%] lg:w-[68.96%] mx-auto max-w-[1440px] flex flex-col gap-[1.25rem] md:gap-[1.69rem]">
                <article>
                    <div class="h-6 w-24 bg-gray-300 rounded animate-pulse mb-2"></div>
                    <div class="space-y-2">
                        <div class="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                        <div class="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                </article>
                <article>
                    <div class="h-6 w-20 bg-gray-300 rounded animate-pulse mb-2"></div>
                    <ul class="space-y-2">
                        <li class="h-4 w-full bg-gray-200 rounded animate-pulse"></li>
                        <li class="h-4 w-4/5 bg-gray-200 rounded animate-pulse"></li>
                    </ul>
                </article>
                <article>
                    <div class="h-6 w-24 bg-gray-300 rounded animate-pulse mb-2"></div>
                    <div class="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
                </article>
            </div>
        </section>
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
                        {{ post?.title }}
                    </h2>
                    <div class="w-full h-[20rem] sm:h-[30rem] md:h-[50rem] rounded-[1rem] md:rounded-[2rem] overflow-hidden border grid place-items-center bg-white">
                        <NuxtImg 
                            src=""
                            :alt="post?.title"
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
                        {{ post?.introduction }}
                    </p>
                </article>
                <article>
                    <h3 class="text-[1.25rem] md:text-[1.5rem] font-semibold text-[#072042] mb-[0.75rem] md:mb-[1rem]">Key Points</h3>
                    <ul class="space-y-[0.75rem] md:space-y-[1rem]">
                        <li 
                            v-for="item in post?.keyPoints"
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
                        {{ post?.conclusion }}
                    </p>
                </article>
            </div>
        </section>
        <section class="w-full bg-[#B5C8E1] py-[3rem] md:py-[5.63rem] hidden">
            <div class="w-[90%] md:w-[83.33%] mx-auto max-w-[1440px]">
                <h3 class="text-[1.25rem] md:text-[1.5rem] font-semibold text-[#072042]">Read next</h3>
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
const post = ref({})
const route = useRoute()

async function fetchBlogPost(slug) {
  if (!slug) return;
  loading.value = true
  error.value = null
  post.value = null // Reset post data before fetching
  try {
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
    const params = { slugParam: slug }
    const data = await sanityClient.fetch(query, params)
    post.value = data
    console.log(data)
  } catch (err) {
    console.error('Error fetching blog post:', err)
    error.value = err
  } finally {
    loading.value = false
  }
}



// Fetch post when component is mounted
onMounted(() => {
  fetchBlogPost(route.params.slug)
})

// Watch for changes in route params (e.g., navigating from one post to another)
watch(() => route.params.slug, (newSlug) => {
  fetchBlogPost(newSlug)
})


</script>

<style lang="scss" scoped>

</style>