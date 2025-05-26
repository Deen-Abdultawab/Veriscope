<template>
  <section class="w-full pt-[2rem] md:pt-[4.44rem] pb-[5rem] md:pb-[10.81rem] bg-[#FFFFFF]">
    <div class="w-[90%] md:w-[80%] lg:w-[69.94%] mx-auto max-w-[1440px]">
      <h2 class="header-texts text-[#072042] mb-[1.5rem] md:mb-[2.5rem] text-[1.5rem] sm:text-[2rem] md:text-[2.5rem]">All Articles</h2>
      
      <!-- Loading State -->
      <template v-if="pending">
        <div class="mb-[2.5rem] md:mb-[4.5rem]">
          <UiSkeletonLoader/>
        </div>
      </template>

      <!-- Error State -->
      <template v-else-if="error">
        <div class="text-red-500 text-center py-[2rem] md:py-8">
         <p class="text-[0.875rem] md:text-[1rem]">
           Error fetching posts: Check Internet connection
         </p>
          <button @click="refresh" class="btn mt-4 text-[0.875rem] md:text-[1rem]">Retry</button>
        </div>
      </template>

      <!-- Empty State -->
      <template v-else-if="!data?.length">
        <h3 class="header-texts text-center py-[2rem] md:py-8 text-[1rem] sm:text-[1.25rem]">
          There are no Blog Posts at the moment, check back later...
        </h3>
      </template>

      <!-- Success State -->
      <template v-else>
        <div class="flex flex-col gap-[1rem] md:gap-[1.5rem] mb-[2.5rem] md:mb-[4.5rem]">
          <article 
            v-for="(blog, index) in data" 
            :key="blog._id"
            class="flex gap-[1rem] md:gap-[2.88rem] pb-[1.5rem] md:pb-[2.5rem] border-b border-[#6087BE] max-md:flex-col"
          >
            <div class="w-full md:w-[20rem] h-[10rem] sm:h-[12.5rem] overflow-hidden">
              <NuxtImg 
                :src="urlFor(blog?.mainImage).width(800).url()" 
                class="w-full h-full object-cover rounded-[8px] md:rounded-[12px]" 
                :alt="blog?.title"
                placeholder
                loading="lazy"
              />
            </div>
            <div class="w-full h-full flex-1 flex flex-col gap-[0.75rem] md:gap-[1rem] text-[#072042]">
              <h3 class="header-texts text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem]">
                {{ blog?.title }}
              </h3>
              <p class="small-texts text-[0.875rem] md:text-[1rem]">
                {{ truncateText(blog?.introduction, 120) }}
              </p>
              <NuxtLink 
                :to="`/Blogs/${blog?.slug?.current}/${index}`" 
                class="btn w-fit text-[0.875rem] md:text-[1rem] py-[0.5rem] md:py-[0.75rem] px-[1rem] md:px-[1.5rem]"
              >
                Read More
              </NuxtLink>
            </div>
          </article>
        </div>

        <!-- Pagination -->
        <div v-if="showLoadMore" class="flex justify-center">
          <button 
            class="btn w-fit mx-auto text-[0.875rem] md:text-[1rem] py-[0.5rem] md:py-[0.75rem] px-[1.5rem]"
            @click="loadMore"
            :disabled="isLoadingMore"
          >
            <span v-if="!isLoadingMore">Load More</span>
            <span v-else>Loading...</span>
          </button>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup>
// Composables
const { urlFor } = useSanityImage()
const sanityClient = useSanityClient()
const router = useRouter()

// Configuration
const pageSize = 3
const currentPage = ref(1)
const totalPosts = ref(0)

// Data fetching
const { 
  data, 
  pending, 
  error, 
  refresh 
} = await useAsyncData('blogPosts', async () => {
  const start = (currentPage.value - 1) * pageSize
  const end = start + pageSize
  
  const query = groq`{
    "posts": *[_type == "blogPost"] | order(publishedAt desc) [${start}...${end}] {
      _id,
      title,
      slug,
      mainImage,
      introduction,
      publishedAt
    },
    "total": count(*[_type == "blogPost"])
  }`
  
  const result = await sanityClient.fetch(query)
  totalPosts.value = result.total
  return result.posts
})

// Computed
const showLoadMore = computed(() => {
  return data.value?.length && (data.value.length < totalPosts.value)
})

const isLoadingMore = computed(() => {
  return pending.value && currentPage.value > 1
})

// Methods
const truncateText = (text, maxLength) => {
  if (!text) return ''
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

const loadMore = async () => {
  currentPage.value++
  await refresh()
  
  // Smooth scroll to new items
  nextTick(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    })
  })
}

onMounted(async ()=>{
  await refresh()
})
</script>

<style scoped>
.btn {
  transition: all 0.3s ease;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
}

article {
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-2px);
  }
}

.header-texts {
  line-height: 1.3;
}

.small-texts {
  line-height: 1.5;
}
</style>